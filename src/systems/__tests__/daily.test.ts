import { describe, it, expect } from 'vitest';
import type { GameState } from '../../core/types';
import { dailyCycle } from '../daily';

function makeState(overrides: Partial<GameState> = {}): GameState {
  return {
    dateVars: { day: 15, month: 10, year: 2026, week: 3, odd_week: 0 },
    day: 0, month: 0, year: 0, week: 0, odd_week: 0,
    nyp_day: 0,
    ciklNewWeek: 0,
    military: 0,
    vidageday: 100,
    vidage: 25,
    pcs_dob: 20080115,
    age: 0,
    birthday: 15,
    birthmonth: 1,
    model: { age: 18 },
    pcs_sweat: 0,
    ...overrides,
  } as GameState;
}

describe('daily system', () => {
  describe('dateVars copy', () => {
    it('copies date vars to top-level', () => {
      const s = makeState();
      dailyCycle(s);
      expect(s.day).toBe(15);
      expect(s.month).toBe(10);
      expect(s.year).toBe(2026);
      expect(s.week).toBe(3);
      expect(s.odd_week).toBe(0);
    });
  });

  describe('New Year\'s Day', () => {
    it('sets nyp_day when day=1 month=12', () => {
      const s = makeState({
        dateVars: { day: 1, month: 12, year: 2026, week: 1, odd_week: 0 },
      });
      dailyCycle(s);
      expect(s.nyp_day).toBeGreaterThan(0);
      expect(s.nyp_day).toBeLessThanOrEqual(31);
    });

    it('does not set nyp_day on other days', () => {
      const s = makeState({
        dateVars: { day: 2, month: 12, year: 2026, week: 1, odd_week: 0 },
        nyp_day: 99,
      });
      dailyCycle(s);
      expect(s.nyp_day).toBe(99);
    });
  });

  describe('week reset', () => {
    it('sets ciklNewWeek=1 on week 1', () => {
      const s = makeState({
        dateVars: { day: 1, month: 1, year: 2026, week: 1, odd_week: 0 },
      });
      dailyCycle(s);
      expect(s.ciklNewWeek).toBe(1);
    });

    it('resets military on week 1', () => {
      const s = makeState({
        dateVars: { day: 1, month: 1, year: 2026, week: 1, odd_week: 0 },
        military: 1,
      });
      dailyCycle(s);
      expect(s.military).toBe(0);
    });

    it('leaves military on other weeks', () => {
      const s = makeState({
        dateVars: { day: 15, month: 10, year: 2026, week: 3, odd_week: 0 },
        military: 1,
      });
      dailyCycle(s);
      expect(s.military).toBe(1);
    });

    it('ciklNewWeek=0 on non-week-1', () => {
      const s = makeState();
      dailyCycle(s);
      expect(s.ciklNewWeek).toBe(0);
    });
  });

  describe('vidage', () => {
    it('decrements vidageday', () => {
      const s = makeState({ vidageday: 100 });
      dailyCycle(s);
      expect(s.vidageday).toBe(99);
    });

    it('wraps vidageday and increments vidage at 0', () => {
      const s = makeState({ vidageday: 1, vidage: 25 });
      dailyCycle(s);
      expect(s.vidageday).toBe(360);
      expect(s.vidage).toBe(26);
    });

    it('wraps at negative', () => {
      const s = makeState({ vidageday: 0, vidage: 25 });
      dailyCycle(s);
      expect(s.vidageday).toBe(360);
      expect(s.vidage).toBe(26);
    });
  });

  describe('age', () => {
    it('calculates age from DOB year', () => {
      const s = makeState({
        dateVars: { day: 15, month: 10, year: 2026, week: 3, odd_week: 0 },
        pcs_dob: 20080115,
      });
      dailyCycle(s);
      expect(s.age).toBe(18);
    });

    it('subtracts 1 if birthday not yet reached', () => {
      const s = makeState({
        dateVars: { day: 10, month: 1, year: 2026, week: 1, odd_week: 0 },
        pcs_dob: 20080115,
      });
      dailyCycle(s);
      expect(s.age).toBe(17);
    });

    it('no subtract if birthday passed', () => {
      const s = makeState({
        dateVars: { day: 20, month: 1, year: 2026, week: 1, odd_week: 0 },
        pcs_dob: 20080115,
      });
      dailyCycle(s);
      expect(s.age).toBe(18);
    });
  });

  describe('birthday model age', () => {
    it('increments model age on birthday', () => {
      const s = makeState({
        dateVars: { day: 15, month: 1, year: 2026, week: 1, odd_week: 0 },
        birthday: 15,
        birthmonth: 1,
        model: { age: 18 },
      });
      dailyCycle(s);
      expect(s.model['age']).toBe(19);
    });

    it('does not increment on other days', () => {
      const s = makeState({
        dateVars: { day: 16, month: 1, year: 2026, week: 1, odd_week: 0 },
        birthday: 15,
        birthmonth: 1,
        model: { age: 18 },
      });
      dailyCycle(s);
      expect(s.model['age']).toBe(18);
    });
  });

  describe('sweat', () => {
    it('adds 2 sweat', () => {
      const s = makeState({ pcs_sweat: 10 });
      dailyCycle(s);
      expect(s.pcs_sweat).toBe(12);
    });

    it('caps at 69', () => {
      const s = makeState({ pcs_sweat: 68 });
      dailyCycle(s);
      expect(s.pcs_sweat).toBe(69);
    });

    it('stays at 69', () => {
      const s = makeState({ pcs_sweat: 69 });
      dailyCycle(s);
      expect(s.pcs_sweat).toBe(69);
    });
  });
});
