import type { GameState } from './types';
import { hourlyEvents } from '../systems/hourly';
import { dailyCycle } from '../systems/daily';
import { monthlyCycle } from '../systems/monthly';
import { calendarCheck } from '../systems/calendar';
import { npcScheduleUpdate } from '../systems/npcSchedule';
import { recalcDerivedStats } from '../systems/derivedStats';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const WEEK_NAMES = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function toDate(daystart: number): Record<string, number | string> {
  const modDaystart = daystart + 151574;
  const weekDrift = 6;

  const oddWeek = Math.floor((modDaystart + 6 - weekDrift) / 7) % 2;
  let week = (modDaystart + 7 - weekDrift) % 7;
  if (week === 0) week = 7;

  let innerDaystart = modDaystart;
  let year = 1601;

  const cycles400 = Math.floor(innerDaystart / 146097);
  year += 400 * cycles400;
  innerDaystart -= 146097 * cycles400;

  const cycles100 = Math.floor(innerDaystart / 36524);
  year += 100 * cycles100;
  innerDaystart -= 36524 * cycles100;

  const cycles4 = Math.floor(innerDaystart / 1461);
  year += 4 * cycles4;
  innerDaystart -= 1461 * cycles4;

  while (true) {
    const daysInYear = isLeapYear(year) ? 366 : 365;
    if (innerDaystart >= daysInYear) {
      innerDaystart -= daysInYear;
      year++;
    } else {
      break;
    }
  }

  let month = 1;
  for (let i = 0; i < 12; i++) {
    const daysInMonth = i === 1 && isLeapYear(year) ? 29 : MONTH_DAYS[i];
    if (innerDaystart < daysInMonth) {
      month = i + 1;
      break;
    }
    innerDaystart -= daysInMonth;
  }
  const day = innerDaystart + 1;

  const dayOfYear = getDayOfYear(year, month, day);

  return {
    daystart,
    day,
    month,
    monthName: MONTH_NAMES[month - 1],
    year,
    week,
    weekName: WEEK_NAMES[week],
    odd_week: oddWeek,
    day_of_year: dayOfYear,
    suffix: getDaySuffix(day),
    season: getSeason(month),
  };
}

function getDayOfYear(year: number, month: number, day: number): number {
  let total = 0;
  for (let i = 0; i < month - 1; i++) {
    total += i === 1 && isLeapYear(year) ? 29 : MONTH_DAYS[i];
  }
  return total + day;
}

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function getSeason(month: number): string {
  if (month >= 3 && month <= 5) return 'Spring';
  if (month >= 6 && month <= 8) return 'Summer';
  if (month >= 9 && month <= 11) return 'Autumn';
  return 'Winter';
}

export function getTimeString(hour: number, minute: number): string {
  const h = hour % 12 === 0 ? 12 : hour % 12;
  const m = minute.toString().padStart(2, '0');
  const ampm = hour < 12 ? 'AM' : 'PM';
  return `${h}:${m} ${ampm}`;
}

export function getDayStage(totminut: number): string {
  const hour = Math.floor((totminut % 1440) / 60);
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 22) return 'evening';
  return 'night';
}

export function tsToTime(ts: number): string {
  const hour = Math.floor(ts / 4);
  const minute = (ts % 4) * 15;
  return getTimeString(hour, minute);
}

export function timeToTs(hour: number, minute: number): number {
  return hour * 4 + Math.floor(minute / 15);
}

export function advanceTime(s: GameState, minutes: number): void {
  s.minut += minutes;

  const prevMonth = s.month;
  let guard = 0;
  while (guard < 200) {
    guard++;
    let jumped = false;

    if (s.minut >= 60) {
      s.hour += 1;
      s.minut -= 60;
      hourlyEvents(s);
      jumped = true;
    }

    if (s.hour >= 24) {
      s.hour -= 24;
      s.daystart += 1;
      updateDate(s);
      dailyCycle(s);
      jumped = true;
    }

    if (!jumped) break;
  }

  if (s.month !== prevMonth) {
    monthlyCycle(s);
  }

  calendarCheck(s);
  npcScheduleUpdate(s);
  recalcDerivedStats(s);

  s.totminut = s.minut + s.hour * 60 + s.daystart * 1440;
  s.dateVars = toDate(s.daystart);
}

export function updateDate(s: GameState): void {
  s.dateVars = toDate(s.daystart);
}

export function getAge(year: number, month: number, day: number, s: GameState): number {
  const curYear = s.dateVars['year'] as number;
  const curMonth = s.dateVars['month'] as number;
  const curDay = s.dateVars['day'] as number;
  let age = curYear - year;
  if (curMonth < month || (curMonth === month && curDay < day)) {
    age--;
  }
  return age;
}
