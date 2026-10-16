import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import {
  isLeapYear, toDate, getTimeString, getDayStage, tsToTime, timeToTs, getAge,
} from '../time';

describe('isLeapYear', () => {
  it('follows the Gregorian rules', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2023)).toBe(false);
  });
});

describe('toDate', () => {
  it('resolves daystart 0 to Dec 31 2015', () => {
    const d = toDate(0);
    expect(d['day']).toBe(31);
    expect(d['month']).toBe(12);
    expect(d['year']).toBe(2015);
    expect(d['monthName']).toBe('December');
    expect(d['weekName']).toBe('Thursday');
    expect(d['day_of_year']).toBe(365);
    expect(d['suffix']).toBe('st');
    expect(d['season']).toBe('Winter');
  });
});

describe('getTimeString', () => {
  it('formats 12-hour time', () => {
    expect(getTimeString(13, 5)).toBe('1:05 PM');
    expect(getTimeString(0, 30)).toBe('12:30 AM');
    expect(getTimeString(12, 0)).toBe('12:00 PM');
  });
});

describe('getDayStage', () => {
  it('maps hours to day stages', () => {
    expect(getDayStage(360)).toBe('morning');
    expect(getDayStage(780)).toBe('afternoon');
    expect(getDayStage(1140)).toBe('evening');
    expect(getDayStage(120)).toBe('night');
  });
});

describe('tsToTime / timeToTs', () => {
  it('round-trips a 15-minute timestamp', () => {
    expect(timeToTs(1, 30)).toBe(6);
    expect(tsToTime(5)).toBe('1:15 AM');
    expect(timeToTs(1, 15)).toBe(5);
  });
});

describe('getAge', () => {
  it('subtracts a year when the birthday has not passed', () => {
    const s = { dateVars: { year: 2020, month: 6, day: 15 } } as unknown as GameState;
    expect(getAge(2000, 1, 1, s)).toBe(20);
    expect(getAge(2000, 12, 25, s)).toBe(19);
  });
});
