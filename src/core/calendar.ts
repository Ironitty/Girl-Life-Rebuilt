import type { GameState } from './types';

export function calendarShow(s: GameState, startDay?: number): void {
  if (startDay !== undefined && startDay > 0) {
    s.calendar_ui_week_start = startDay;
  } else {
    s.calendar_ui_week_start = s.daystart - s.week + 1;
  }
}

export function calendarNavigate(s: GameState, direction: string): void {
  if (direction === 'prev') {
    s.calendar_ui_week_start -= 7;
  } else if (direction === 'next') {
    s.calendar_ui_week_start += 7;
  } else if (direction === 'today') {
    s.calendar_ui_week_start = s.daystart - s.week + 1;
  }
  calendarShow(s, s.calendar_ui_week_start);
}

export function calendarAdd(s: GameState, eventFunc: string): number {
  (s as any).cal_event_func = eventFunc;
  return 0;
}

export function calendarRemove(s: GameState, eventId: string): void {
  const idx = s.events_list.indexOf(eventId);
  if (idx !== -1) {
    s.events_list.splice(idx, 1);
    delete s.event_title[eventId];
    delete s.event_daystart[eventId];
    delete s.event_startTs[eventId];
    delete s.event_durationTs[eventId];
    delete s.event_allDay[eventId];
    delete s.event_color[eventId];
    delete s.event_recur[eventId];
    delete s.event_isPlayer[eventId];
  }
}

const PACKS: Record<string, string[]> = {
  holidays: [
    'holiday_new_year', 'holiday_christmas', 'holiday_fatherland',
    'holiday_womens_day', 'holiday_labor_day', 'holiday_may_2',
    'holiday_victory_day', 'holiday_russia_day', 'holiday_june_13',
    'holiday_unity_day',
  ],
  school: [
    'school_winter_break', 'school_spring_break', 'school_summer_break',
    'school_autumn_break', 'school_graduation',
    'school_monday_fall2016', 'school_tuesday_fall2016', 'school_wednesday_fall2016',
    'school_thursday_fall2016', 'school_friday_fall2016',
    'school_monday_winter2016', 'school_tuesday_winter2016', 'school_wednesday_winter2016',
    'school_thursday_winter2016', 'school_friday_winter2016',
    'school_monday_spring2017', 'school_tuesday_spring2017', 'school_wednesday_spring2017',
    'school_thursday_spring2017', 'school_friday_spring2017',
    'school_monday_final2017', 'school_tuesday_final2017', 'school_wednesday_final2017',
    'school_thursday_final2017', 'school_friday_final2017',
  ],
  church: ['church_vigil', 'church_liturgy'],
  intercity_trains: ['train_morning', 'train_evening'],
  starlets: ['starlets_practice_regular', 'starlets_practice_friday'],
  cheerleading_practice: [
    'cheerleading_practice_1', 'cheerleading_practice_2',
    'cheerleading_practice_3', 'cheerleading_practice_4',
  ],
  cheerleading_games: [
    'cheerleading_game_1', 'cheerleading_game_2',
    'cheerleading_game_3', 'cheerleading_game_4',
  ],
  cycle_phases: ['cycle_0', 'cycle_1', 'cycle_2', 'cycle_3'],
};

export function calendarPack(s: GameState, action: string, packName: string): void {
  const events = PACKS[packName];
  if (!events) return;
  for (const ev of events) {
    if (action === 'add') {
      calendarAdd(s, ev);
    } else if (action === 'remove') {
      calendarRemove(s, ev);
    }
  }
}

export function calendarCycleRebuild(s: GameState, force?: number): void {
  if (s.calCycleOpts['rebuild_day'] === s.daystart && force !== 1) return;
  s.calCycleOpts['rebuild_day'] = s.daystart;

  calendarPack(s, 'remove', 'cycle_phases');

  const showSum = s.calCycleOpts['show_0'] + s.calCycleOpts['show_1'] + s.calCycleOpts['show_2'] + s.calCycleOpts['show_3'];
  if (s.succubusflag === 1 || s.cycle >= 4 || s.calCycleOpts['phase_start_' + s.cycle] === 0 || showSum === 0) return;

  const durations = [5, 9, 2, 12];
  let chainEnd = (s.calCycleOpts['phase_start_' + s.cycle] || 0) - 1;

  for (let phN = 0; phN < 4; phN++) {
    const phIdx = (s.cycle + phN) % 4;
    const startDay = chainEnd + 1;
    const recurEnd = Math.max(chainEnd + durations[phIdx], s.daystart);
    if (s.calCycleOpts['show_' + phIdx] === 1) {
      const id = `cycle_phase_${phIdx}`;
      if (!s.events_list.includes(id)) {
        s.events_list.push(id);
        s.event_title[id] = `Cycle Phase ${phIdx}`;
        s.event_daystart[id] = startDay;
        s.event_startTs[id] = 0;
        s.event_durationTs[id] = recurEnd - startDay;
        s.event_allDay[id] = true;
        s.event_color[id] = '#999';
        s.event_recur[id] = 'none';
        s.event_isPlayer[id] = false;
      }
    }
    chainEnd = recurEnd;
  }

  s.cal_upcoming_dirty = 1;
}
