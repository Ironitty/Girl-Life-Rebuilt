import type { GameState, EventDef } from '../core/types';
import { timeToTs } from '../core/time';

export function addEvent(s: GameState, event: Omit<EventDef, 'id'>): string {
  const id = `evt_${s.nextEventId++}`;
  s.events_list.push(id);
  s.event_title[id] = event.title;
  s.event_daystart[id] = event.daystart;
  s.event_startTs[id] = event.startTs;
  s.event_durationTs[id] = event.durationTs;
  s.event_allDay[id] = event.allDay;
  s.event_color[id] = event.color;
  s.event_recur[id] = event.recur;
  s.event_isPlayer[id] = event.isPlayerEvent;
  if (event.isPlayerEvent) {
    s.cal_player_event_count++;
  }
  return id;
}

export function removeEvent(s: GameState, id: string): void {
  const isPlayer = s.event_isPlayer[id] === true;
  const idx = s.events_list.indexOf(id);
  if (idx >= 0) s.events_list.splice(idx, 1);
  delete s.event_title[id];
  delete s.event_daystart[id];
  delete s.event_startTs[id];
  delete s.event_durationTs[id];
  delete s.event_allDay[id];
  delete s.event_color[id];
  delete s.event_recur[id];
  delete s.event_isPlayer[id];
  if (isPlayer && s.cal_player_event_count > 0) {
    s.cal_player_event_count--;
  }
}

export function getEventsForDay(s: GameState, daystart: number): EventDef[] {
  const results: EventDef[] = [];
  for (const id of s.events_list) {
    const eventDay = s.event_daystart[id];
    const recur = (s.event_recur[id] ?? 'none') as EventDef['recur'];

    if (eventDay === daystart || matchesRecurrence(recur, eventDay, daystart, s)) {
      results.push({
        id,
        title: s.event_title[id] ?? '',
        daystart: eventDay,
        startTs: s.event_startTs[id] ?? 0,
        durationTs: s.event_durationTs[id] ?? 1,
        allDay: s.event_allDay[id] ?? false,
        color: s.event_color[id] ?? '#4a9eff',
        recur,
        isPlayerEvent: s.event_isPlayer[id] === true,
      });
    }
  }
  return results.sort((a, b) => a.startTs - b.startTs);
}

function matchesRecurrence(recur: string, eventDay: number, targetDay: number, s: GameState): boolean {
  if (recur === 'none' || targetDay < eventDay) return false;
  const week = s.dateVars['week'] as number;
  switch (recur) {
    case 'daily':
      return true;
    case 'weekly':
      return (targetDay - eventDay) % 7 === 0;
    case 'monthly':
      return s.dateVars['day'] === s.dateVars['day'];
    case 'weekdays':
      return week >= 1 && week <= 5;
    case 'weekends':
      return week === 6 || week === 7;
    default:
      return false;
  }
}

export function calendarCheck(s: GameState): void {
  checkReminders(s);
}

export function checkReminders(s: GameState): EventDef[] {
  const reminders: EventDef[] = [];
  const currentTs = timeToTs(s.hour, s.minut);
  const today = s.daystart;

  for (const id of s.events_list) {
    if (s.cal_reminded[id] === today) continue;
    const eventDay = s.event_daystart[id];
    const recur = (s.event_recur[id] ?? 'none') as EventDef['recur'];

    if (eventDay !== today && !matchesRecurrence(recur, eventDay, today, s)) continue;

    const startTs = s.event_startTs[id] ?? 0;
    if (currentTs >= startTs - 2 && currentTs < startTs) {
      reminders.push({
        id,
        title: s.event_title[id] ?? '',
        daystart: eventDay,
        startTs,
        durationTs: s.event_durationTs[id] ?? 1,
        allDay: s.event_allDay[id] ?? false,
        color: s.event_color[id] ?? '#4a9eff',
        recur,
        isPlayerEvent: s.event_isPlayer[id] === true,
      });
      s.cal_reminded[id] = today;
    }
  }
  return reminders;
}
