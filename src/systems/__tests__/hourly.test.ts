import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../../core/types';
import { hourlyEvents } from '../hourly';

let randomQueue: number[] = [];
let randomIndex = 0;

function mockRandom(...values: number[]) {
  randomQueue = values;
  randomIndex = 0;
  vi.spyOn(Math, 'random').mockImplementation(() => {
    if (randomIndex >= randomQueue.length) return 0;
    return randomQueue[randomIndex++];
  });
}

afterEach(() => {
  vi.restoreAllMocks();
});

function makeState(overrides: Partial<GameState> = {}): GameState {
  return {
    inSleep: 0,
    succublvl: 0,
    pcs_energy: 100,
    pcs_hydra: 100,
    pcs_sleep: 100,
    pcs_stam: 50,
    stammax: 100,
    alko: 0,
    alkoblock: 0,
    pcs_willpower_feeder: 0,
    pcs_willpwr: 50,
    willpowermax: 100,
    will_counter: 0,
    pcs_mood: 50,
    pcs_mood_effects: {},
    pcs_condition: {},
    cheatVars: {},
    moodVars: { disp_base: 50, disp: 50, momentum: 0, inertia: 0, max: 100, min: 0, hold_minut: 0, leftover_mood: 0 },
    moodSE: {},
    mood_trauma: 0,
    arch_effects: {},
    pcs_health: 100,
    sleepVars: { no_sleep_loss: 0 },
    trait_vars: {},
    arch_vars: {},
    pcs_faith: 50,
    pcs_mana: 50,
    manamax: 100,
    shame: 0,
    mosol: 0,
    pantyworntype: 'briefs',
    PCloPants: 0,
    PCloPanties: 0,
    clothingworntype: 'dress',
    fat: 0,
    vitalbuf: 0,
    pcs_lipbalm: 0,
    sickstage: 0,
    sick: 0,
    sicktimer: 0,
    perkice: 0,
    frost: 0,
    KGOLpers: 0,
    KGHP: 0,
    KGHPMAX: 100,
    KGMana: 0,
    KGManaMax: 100,
    pcs_horny: 50,
    PPanThinness: 0,
    PBraThinness: 0,
    clit_size: 0,
    pcs_sweat: 0,
    temper: 0,
    HotelRoom: { pav: 0, city: 0 },
    hotelRoomDays: { pav: 0, city: 0 },
    daystart: 100,
    hour: 12,
    week: 3,
    start_type: { loc: 'city' },
    gschoolVars: { school_diploma: 1, last_absence: 0, absence_count: 0 },
    kanikuli: 0,
    ...overrides,
  } as GameState;
}

describe('hourly system', () => {
  describe('sleep branch', () => {
    it('drains energy and hydra at half rate', () => {
      const s = makeState({ inSleep: 1, pcs_energy: 100, pcs_hydra: 100 });
      hourlyEvents(s);
      expect(s.pcs_energy).toBe(96);
      expect(s.pcs_hydra).toBe(92);
    });

    it('recovers stam by stammax/2 when sleep>90', () => {
      const s = makeState({ inSleep: 1, pcs_sleep: 95, pcs_stam: 0, stammax: 100 });
      hourlyEvents(s);
      expect(s.pcs_stam).toBe(50);
    });

    it('recovers stam by stammax/4 when sleep>80', () => {
      const s = makeState({ inSleep: 1, pcs_sleep: 85, pcs_stam: 0, stammax: 100 });
      hourlyEvents(s);
      expect(s.pcs_stam).toBe(25);
    });

    it('recovers stam by stammax/8 when sleep<=80', () => {
      const s = makeState({ inSleep: 1, pcs_sleep: 50, pcs_stam: 0, stammax: 100 });
      hourlyEvents(s);
      expect(s.pcs_stam).toBe(12.5);
    });

    it('decrements alko while sleeping', () => {
      const s = makeState({ inSleep: 1, alko: 5 });
      mockRandom(0);
      hourlyEvents(s);
      expect(s.alko).toBe(4);
    });

    it('does not decrement alko at 0', () => {
      const s = makeState({ inSleep: 1, alko: 0 });
      hourlyEvents(s);
      expect(s.alko).toBe(0);
    });

    it('increases willpwr via feeder', () => {
      const s = makeState({ inSleep: 1, pcs_willpower_feeder: 0, willpowermax: 100, pcs_willpwr: 50 });
      hourlyEvents(s);
      expect(s.pcs_willpwr).toBe(54);
      expect(s.pcs_willpower_feeder).toBe(0);
    });
  });

  describe('awake branch', () => {
    it('drains energy and hydra at full rate', () => {
      const s = makeState({ inSleep: 0, pcs_energy: 100, pcs_hydra: 100 });
      hourlyEvents(s);
      expect(s.pcs_energy).toBe(92);
      expect(s.pcs_hydra).toBe(84);
    });

    it('reduces sleep by 5 (default)', () => {
      const s = makeState({ inSleep: 0, pcs_sleep: 100 });
      hourlyEvents(s);
      expect(s.pcs_sleep).toBe(95);
    });

    it('reduces sleep by 4 with sleep_duration=1', () => {
      const s = makeState({ inSleep: 0, pcs_sleep: 100, trait_vars: { sleep_duration: 1 } });
      mockRandom(1);
      hourlyEvents(s);
      expect(s.pcs_sleep).toBe(96);
    });

    it('reduces sleep by 6 with sleep_duration=-1 (5+1)', () => {
      const s = makeState({ inSleep: 0, pcs_sleep: 100, trait_vars: { sleep_duration: -1 } });
      mockRandom(0, 0);
      hourlyEvents(s);
      expect(s.pcs_sleep).toBe(94);
    });

    it('no sleep loss when no_sleep_loss=1', () => {
      const s = makeState({ inSleep: 0, pcs_sleep: 100, sleepVars: { no_sleep_loss: 1 } });
      hourlyEvents(s);
      expect(s.pcs_sleep).toBe(100);
      expect(s.sleepVars['no_sleep_loss']).toBe(0);
    });

    it('sets lack_of_sleep condition when sleep<=0', () => {
      const s = makeState({ inSleep: 0, pcs_sleep: 0, succublvl: 0 });
      hourlyEvents(s);
      expect(s.pcs_condition['lack_of_sleep']).toBe(2);
    });

    it('clamps energy at 0', () => {
      const s = makeState({ inSleep: 0, pcs_energy: 5 });
      hourlyEvents(s);
      expect(s.pcs_energy).toBe(0);
    });

    it('clamps hydra at 0', () => {
      const s = makeState({ inSleep: 0, pcs_hydra: 5 });
      hourlyEvents(s);
      expect(s.pcs_hydra).toBe(0);
    });

    it('caps hydra at 200', () => {
      const s = makeState({ inSleep: 0, pcs_hydra: 250 });
      hourlyEvents(s);
      expect(s.pcs_hydra).toBe(200);
    });
  });

  describe('willpower', () => {
    it('clamps willpwr at willpowermax', () => {
      const s = makeState({ inSleep: 0, pcs_willpwr: 95, willpowermax: 100, pcs_willpower_feeder: 0 });
      hourlyEvents(s);
      expect(s.pcs_willpwr).toBeLessThanOrEqual(100);
    });

    it('reduces willpowermax at will_counter<=-10', () => {
      const s = makeState({ inSleep: 0, will_counter: -10, willpowermax: 100 });
      hourlyEvents(s);
      expect(s.willpowermax).toBe(99);
      expect(s.will_counter).toBe(0);
    });
  });

  describe('stam', () => {
    it('clamps stam at stammax', () => {
      const s = makeState({ inSleep: 0, pcs_stam: 150, stammax: 100 });
      hourlyEvents(s);
      expect(s.pcs_stam).toBe(100);
    });

    it('recovers stam when energy>20', () => {
      const s = makeState({ inSleep: 0, pcs_energy: 50, pcs_stam: 10, stammax: 100 });
      hourlyEvents(s);
      expect(s.pcs_stam).toBeGreaterThan(10);
    });
  });

  describe('mana', () => {
    it('regenerates mana by manamax/20', () => {
      const s = makeState({ inSleep: 0, pcs_mana: 50, manamax: 100 });
      hourlyEvents(s);
      expect(s.pcs_mana).toBe(55);
    });

    it('caps mana at manamax', () => {
      const s = makeState({ inSleep: 0, pcs_mana: 99, manamax: 100 });
      hourlyEvents(s);
      expect(s.pcs_mana).toBe(100);
    });
  });

  describe('alko', () => {
    it('decays alko when >0 and alkoblock=0', () => {
      const s = makeState({ inSleep: 0, alko: 5, alkoblock: 0 });
      mockRandom(0.5);
      hourlyEvents(s);
      expect(s.alko).toBe(4);
    });

    it('does not decay when alkoblock=1', () => {
      const s = makeState({ inSleep: 0, alko: 5, alkoblock: 1 });
      hourlyEvents(s);
      expect(s.alko).toBe(5);
    });

    it('clamps negative alko to 0', () => {
      const s = makeState({ inSleep: 0, alko: -1 });
      hourlyEvents(s);
      expect(s.alko).toBe(0);
    });
  });

  describe('shame', () => {
    it('decrements shame and lowers mood', () => {
      const s = makeState({ inSleep: 0, shame: 5 });
      hourlyEvents(s);
      expect(s.shame).toBe(4);
    });

    it('no shame decay at 0', () => {
      const s = makeState({ inSleep: 0, shame: 0 });
      hourlyEvents(s);
      expect(s.shame).toBe(0);
    });
  });

  describe('sickness', () => {
    it('stage 1: increments sick and sicktimer', () => {
      const s = makeState({ inSleep: 0, sickstage: 1, sick: 0, sicktimer: 0 });
      hourlyEvents(s);
      expect(s.sick).toBe(1);
      expect(s.sicktimer).toBe(1);
    });

    it('stage 1: transitions to stage 2 at sicktimer>=80', () => {
      const s = makeState({ inSleep: 0, sickstage: 1, sick: 5, sicktimer: 79 });
      hourlyEvents(s);
      expect(s.sicktimer).toBe(0);
      expect(s.sickstage).toBe(2);
    });

    it('stage 2: decrements sick', () => {
      const s = makeState({ inSleep: 0, sickstage: 2, sick: 5 });
      hourlyEvents(s);
      expect(s.sick).toBe(4);
    });

    it('stage 2: recovers when sick reaches 0', () => {
      const s = makeState({ inSleep: 0, sickstage: 2, sick: 1 });
      hourlyEvents(s);
      expect(s.sick).toBe(0);
      expect(s.sickstage).toBe(0);
    });
  });

  describe('fat/energy trade', () => {
    it('converts fat to energy at low energy + high fat', () => {
      const s = makeState({ inSleep: 0, pcs_energy: 15, fat: 10, vitalbuf: 0 });
      hourlyEvents(s);
      expect(s.fat).toBe(8);
      expect(s.pcs_energy).toBe(13);
    });

    it('converts excess energy to fat above 100', () => {
      const s = makeState({ inSleep: 0, pcs_energy: 120, fat: 0 });
      hourlyEvents(s);
      expect(s.pcs_energy).toBe(100);
      expect(s.fat).toBeGreaterThan(0);
    });
  });

  describe('horny', () => {
    it('increases horny with thin panty+bra', () => {
      const s = makeState({ inSleep: 0, pcs_horny: 10, PPanThinness: 5, PBraThinness: 5 });
      hourlyEvents(s);
      expect(s.pcs_horny).toBe(20);
    });

    it('increases horny with panty worn + large clit', () => {
      const s = makeState({ inSleep: 0, pcs_horny: 30, pantyworntype: 'briefs', clit_size: 50 });
      hourlyEvents(s);
      expect(s.pcs_horny).toBe(50);
    });
  });

  describe('hotel checkout', () => {
    it('clears pav hotel room at hour>=11 on same day', () => {
      const s = makeState({
        inSleep: 0,
        HotelRoom: { pav: 1, city: 0 },
        hotelRoomDays: { pav: 100, city: 0 },
        daystart: 100,
        hour: 12,
      });
      hourlyEvents(s);
      expect(s.HotelRoom['pav']).toBe(0);
    });

    it('keeps hotel room at hour<11', () => {
      const s = makeState({
        inSleep: 0,
        HotelRoom: { pav: 1, city: 0 },
        hotelRoomDays: { pav: 100, city: 0 },
        daystart: 100,
        hour: 10,
      });
      hourlyEvents(s);
      expect(s.HotelRoom['pav']).toBe(1);
    });
  });

  describe('lipbalm', () => {
    it('decrements lipbalm', () => {
      const s = makeState({ inSleep: 0, pcs_lipbalm: 5 });
      hourlyEvents(s);
      expect(s.pcs_lipbalm).toBe(4);
    });
  });

  describe('perkice/frost', () => {
    it('decrements perkice', () => {
      const s = makeState({ inSleep: 0, perkice: 5 });
      hourlyEvents(s);
      expect(s.perkice).toBe(4);
    });

    it('decrements frost', () => {
      const s = makeState({ inSleep: 0, frost: 5 });
      hourlyEvents(s);
      expect(s.frost).toBe(4);
    });
  });
});
