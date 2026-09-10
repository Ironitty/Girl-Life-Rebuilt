import type { GameState } from '../core/types';

export function dailyCycle(s: GameState): void {
  const date = s.dateVars;
  const day = date['day'] as number;
  const month = date['month'] as number;
  const year = date['year'] as number;
  const week = date['week'] as number;

  s.day = day;
  s.month = month;
  s.year = year;
  s.week = week;
  s.odd_week = date['odd_week'] as number;

  if (day === 1 && month === 12) {
    const dow = getDayOfWeek(year, 12, 31);
    if (dow < 6) s.nyp_day = 31;
    else if (dow === 6) s.nyp_day = 30;
    else s.nyp_day = 29;
  }

  s.ciklNewWeek = 0;
  if (week === 1) {
    s.ciklNewWeek = 1;
    if (s.military === 1) s.military = 0;
  }

  s.vidageday -= 1;
  if (s.vidageday <= 0) {
    s.vidageday = 360;
    s.vidage += 1;
  }

  const dobYear = Math.floor(s.pcs_dob / 10000);
  s.age = year - dobYear;
  const dobMD = s.pcs_dob % 10000;
  if (month * 100 + day < dobMD) s.age -= 1;

  if (day === s.birthday && month === s.birthmonth && s.model['age'] > 0) {
    s.model['age'] = (s.model['age'] ?? 0) + 1;
  }

  s.pcs_sweat += 2;
  if (s.pcs_sweat > 69) s.pcs_sweat = 69;
}

function getDayOfWeek(year: number, month: number, day: number): number {
  const d = new Date(Date.UTC(year, month - 1, day));
  const dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
