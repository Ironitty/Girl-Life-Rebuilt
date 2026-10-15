import { describe, it, expect } from 'vitest';
import type { GameState, EventDef } from '../../core/types';
import { addEvent, removeEvent, getEventsForDay, checkReminders } from '../calendar';

function makeCalendarState(overrides: Partial<GameState> = {}): GameState {
  return {
    events_list: [],
    event_title: {},
    event_daystart: {},
    event_startTs: {},
    event_durationTs: {},
    event_allDay: {},
    event_color: {},
    event_recur: {},
    event_isPlayer: {},
    cal_player_event_count: 0,
    cal_reminded: {},
    nextEventId: 1,
    daystart: 1000,
    hour: 12,
    minut: 0,
    dateVars: { day: 15, month: 10, year: 2026, week: 3 },
    ...overrides,
  } as GameState;
}

function makeEvent(overrides: Partial<Omit<EventDef, 'id'>> = {}): Omit<EventDef, 'id'> {
  return {
    title: 'Test Event',
    daystart: 1000,
    startTs: 48,
    durationTs: 4,
    allDay: false,
    color: '#ff0000',
    recur: 'none',
    isPlayerEvent: false,
    ...overrides,
  };
}

describe('calendar system', () => {
  describe('addEvent', () => {
    it('creates an event and increments nextEventId', () => {
      const s = makeCalendarState();
      const id = addEvent(s, makeEvent());
      expect(id).toBe('evt_1');
      expect(s.nextEventId).toBe(2);
      expect(s.events_list).toContain('evt_1');
      expect(s.event_title['evt_1']).toBe('Test Event');
      expect(s.event_daystart['evt_1']).toBe(1000);
      expect(s.event_startTs['evt_1']).toBe(48);
      expect(s.event_durationTs['evt_1']).toBe(4);
      expect(s.event_allDay['evt_1']).toBe(false);
      expect(s.event_color['evt_1']).toBe('#ff0000');
      expect(s.event_recur['evt_1']).toBe('none');
      expect(s.event_isPlayer['evt_1']).toBe(false);
    });

    it('increments cal_player_event_count for player events', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ isPlayerEvent: true }));
      expect(s.cal_player_event_count).toBe(1);
    });

    it('does not increment count for non-player events', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ isPlayerEvent: false }));
      expect(s.cal_player_event_count).toBe(0);
    });

    it('generates sequential IDs', () => {
      const s = makeCalendarState();
      const id1 = addEvent(s, makeEvent({ title: 'E1' }));
      const id2 = addEvent(s, makeEvent({ title: 'E2' }));
      expect(id1).toBe('evt_1');
      expect(id2).toBe('evt_2');
    });
  });

  describe('removeEvent', () => {
    it('removes event and decrements player count', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ isPlayerEvent: true }));
      expect(s.cal_player_event_count).toBe(1);
      removeEvent(s, 'evt_1');
      expect(s.events_list).not.toContain('evt_1');
      expect(s.event_title['evt_1']).toBeUndefined();
      expect(s.cal_player_event_count).toBe(0);
    });

    it('does not decrement count for non-player events', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ isPlayerEvent: false }));
      expect(s.cal_player_event_count).toBe(0);
      removeEvent(s, 'evt_1');
      expect(s.cal_player_event_count).toBe(0);
    });

    it('removes all event fields', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent());
      removeEvent(s, 'evt_1');
      expect(s.event_daystart['evt_1']).toBeUndefined();
      expect(s.event_startTs['evt_1']).toBeUndefined();
      expect(s.event_durationTs['evt_1']).toBeUndefined();
      expect(s.event_allDay['evt_1']).toBeUndefined();
      expect(s.event_color['evt_1']).toBeUndefined();
      expect(s.event_recur['evt_1']).toBeUndefined();
      expect(s.event_isPlayer['evt_1']).toBeUndefined();
    });
  });

  describe('getEventsForDay', () => {
    it('returns events on the exact daystart', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ daystart: 1000, title: 'Today' }));
      const events = getEventsForDay(s, 1000);
      expect(events).toHaveLength(1);
      expect(events[0].title).toBe('Today');
    });

    it('returns all-day events regardless of time', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ daystart: 1000, allDay: true, title: 'All Day' }));
      const events = getEventsForDay(s, 1000);
      expect(events).toHaveLength(1);
    });

    it('returns events with daily recurrence', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ daystart: 999, recur: 'daily', title: 'Daily' }));
      const events = getEventsForDay(s, 1000);
      expect(events).toHaveLength(1);
    });

    it('returns events with weekly recurrence on matching day', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ daystart: 993, recur: 'weekly', title: 'Weekly' }));
      const events = getEventsForDay(s, 1000);
      expect(events).toHaveLength(1);
    });

    it('does not return weekly events on non-matching day', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ daystart: 994, recur: 'weekly', title: 'Weekly' }));
      const events = getEventsForDay(s, 1000);
      expect(events).toHaveLength(0);
    });

    it('returns events sorted by startTs', () => {
      const s = makeCalendarState();
      addEvent(s, makeEvent({ daystart: 1000, startTs: 60, title: 'Late' }));
      addEvent(s, makeEvent({ daystart: 1000, startTs: 40, title: 'Early' }));
      const events = getEventsForDay(s, 1000);
      expect(events[0].title).toBe('Early');
      expect(events[1].title).toBe('Late');
    });

    it('returns empty array when no events match', () => {
      const s = makeCalendarState();
      const events = getEventsForDay(s, 1000);
      expect(events).toEqual([]);
    });
  });

  describe('checkReminders', () => {
    it('returns events starting within the reminder window', () => {
      const s = makeCalendarState({ hour: 12, minut: 0 });
      const currentTs = 12 * 4 + 0;
      addEvent(s, makeEvent({ daystart: s.daystart, startTs: currentTs + 1, title: 'Upcoming' }));
      const reminders = checkReminders(s);
      expect(reminders).toHaveLength(1);
      expect(reminders[0].title).toBe('Upcoming');
    });

    it('marks reminded events so they are not repeated', () => {
      const s = makeCalendarState({ hour: 12, minut: 0 });
      const currentTs = 12 * 4 + 0;
      addEvent(s, makeEvent({ daystart: s.daystart, startTs: currentTs + 1, title: 'Once' }));
      checkReminders(s);
      const second = checkReminders(s);
      expect(second).toHaveLength(0);
    });

    it('does not remind for events on a different day', () => {
      const s = makeCalendarState({ hour: 12, minut: 0 });
      addEvent(s, makeEvent({ daystart: s.daystart + 1, startTs: 48, title: 'Tomorrow' }));
      const reminders = checkReminders(s);
      expect(reminders).toEqual([]);
    });

    it('reminds for recurring events on the matching day', () => {
      const s = makeCalendarState({ hour: 12, minut: 0 });
      const currentTs = 12 * 4 + 0;
      addEvent(s, makeEvent({ daystart: s.daystart - 1, recur: 'daily', startTs: currentTs + 1, title: 'Daily Recur' }));
      const reminders = checkReminders(s);
      expect(reminders).toHaveLength(1);
    });

    it('does not remind for events that already started', () => {
      const s = makeCalendarState({ hour: 12, minut: 0 });
      const currentTs = 12 * 4 + 0;
      addEvent(s, makeEvent({ daystart: s.daystart, startTs: currentTs - 5, title: 'Past' }));
      const reminders = checkReminders(s);
      expect(reminders).toEqual([]);
    });
  });
});
