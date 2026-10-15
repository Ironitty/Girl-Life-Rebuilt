import { describe, it, expect } from 'vitest';
import type { GameState } from '../../core/types';
import { initialState } from '../../core/store';
import { advanceTime, toDate } from '../../core/time';
import { hourlyEvents } from '../hourly';
import { dailyCycle } from '../daily';
import { monthlyCycle } from '../monthly';
import { recalcDerivedStats } from '../derivedStats';

function fresh(): GameState {
  return JSON.parse(JSON.stringify(initialState));
}

describe('periodic systems', () => {
  describe('hourlyEvents (inSleep=1, fully deterministic)', () => {
    it('drains energy/hydra, regenerates stam/willpwr/mana', () => {
      const s = fresh();
      s.inSleep = 1;
      s.succublvl = 0;
      s.pcs_sleep = 50;
      s.pcs_energy = 80;
      s.pcs_hydra = 80;
      s.pcs_stam = 50;
      s.stammax = 100;
      s.willpowermax = 100;
      s.manamax = 100;
      s.pcs_willpwr = 50;
      s.pcs_willpower_feeder = 0;
      s.pcs_mana = 0;
      s.alko = 0;
      s.shame = 0;
      hourlyEvents(s);
      expect(s.pcs_energy).toBe(76);
      expect(s.pcs_hydra).toBe(72);
      expect(s.pcs_stam).toBe(62.5);
      expect(s.pcs_willpwr).toBe(54);
      expect(s.pcs_willpower_feeder).toBe(0);
      expect(s.pcs_mana).toBe(5);
    });
  });

  describe('hourlyEvents (inSleep=0, no_sleep_loss=1)', () => {
    it('drains energy/hydra, holds sleep, regenerates willpwr/mana', () => {
      const s = fresh();
      s.inSleep = 0;
      s.succublvl = 0;
      s.sleepVars = { no_sleep_loss: 1 };
      s.pcs_sleep = 80;
      s.pcs_energy = 80;
      s.pcs_hydra = 80;
      s.pcs_stam = 100;
      s.stammax = 100;
      s.willpowermax = 50;
      s.manamax = 100;
      s.pcs_willpwr = 40;
      s.pcs_willpower_feeder = 0;
      s.pcs_mana = 0;
      s.alko = 0;
      s.shame = 0;
      s.fat = 0;
      s.temper = 0;
      s.trait_vars = {};
      s.arch_vars = {};
      s.pcs_faith = 50;
      s.vitalbuf = 0;
      s.HotelRoom = {};
      s.hotelRoomDays = {};
      s.start_type = {};
      s.military = 0;
      s.sickstage = 0;
      s.perkice = 0;
      s.frost = 0;
      s.KGOLpers = 0;
      s.pcs_horny = 50;
      s.pantyworntype = 'none';
      s.clothingworntype = 'none';
      s.PCloPants = 0;
      s.PCloPanties = 0;
      s.PPanThinness = 0;
      s.PBraThinness = 0;
      s.mosol = 0;
      s.pcs_lipbalm = 0;
      const sweatBefore = s.pcs_sweat;
      hourlyEvents(s);
      expect(s.pcs_energy).toBe(72);
      expect(s.pcs_hydra).toBe(64);
      expect(s.pcs_sleep).toBe(80);
      expect(s.sleepVars['no_sleep_loss']).toBe(0);
      expect(s.pcs_willpwr).toBeCloseTo(40.667, 3);
      expect(s.pcs_mana).toBe(5);
      expect(s.pcs_sweat - sweatBefore).toBeGreaterThanOrEqual(0);
      expect(s.pcs_sweat - sweatBefore).toBeLessThanOrEqual(1);
    });
  });

  describe('dailyCycle via advanceTime (day rollover)', () => {
    it('rolls the day, decrements vidageday, recomputes age, adds sweat', () => {
      const s = fresh();
      s.inSleep = 1;
      s.hour = 23;
      s.minut = 30;
      s.daystart = 1;
      s.vidageday = 5;
      s.vidage = 16;
      s.pcs_dob = 20000101;
      s.age = 16;
      s.birthday = 1;
      s.birthmonth = 1;
      s.model = {};
      s.pcs_sweat = 0;
      s.military = 0;
      s.dateVars = toDate(1);
      advanceTime(s, 60);
      expect(s.day).toBe(2);
      expect(s.month).toBe(1);
      expect(s.year).toBe(2016);
      expect(s.week).toBe(6);
      expect(s.vidageday).toBe(4);
      expect(s.age).toBe(16);
      expect(s.pcs_sweat).toBe(2);
      expect(s.ciklNewWeek).toBe(0);
    });
  });

  describe('dailyCycle (direct)', () => {
    it('wraps vidageday to 360 and increments vidage at zero', () => {
      const s = fresh();
      s.dateVars = toDate(1);
      s.vidageday = 1;
      s.vidage = 16;
      s.pcs_dob = 20000101;
      s.age = 16;
      s.birthday = 1;
      s.birthmonth = 1;
      s.model = {};
      s.pcs_sweat = 0;
      s.military = 0;
      dailyCycle(s);
      expect(s.vidageday).toBe(360);
      expect(s.vidage).toBe(17);
    });
  });

  describe('monthlyCycle', () => {
    it('sets yearstart when month===1', () => {
      const s = fresh();
      s.month = 1;
      s.year = 2016;
      s.yearstart = 0;
      monthlyCycle(s);
      expect(s.yearstart).toBe(2016);
    });
    it('leaves yearstart alone otherwise', () => {
      const s = fresh();
      s.month = 2;
      s.year = 2016;
      s.yearstart = 2015;
      monthlyCycle(s);
      expect(s.yearstart).toBe(2015);
    });
  });

  describe('recalcDerivedStats', () => {
    it('runs without throwing (no-op)', () => {
      const s = fresh();
      expect(() => recalcDerivedStats(s)).not.toThrow();
    });
  });
});
