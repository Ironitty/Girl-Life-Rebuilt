import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import { applyCaps, statusMinima, checkAlerts, fifteenMinuteLoop } from '../stats';

vi.mock('../../systems/mood', () => ({
  updateMood: vi.fn(),
  lowerMood: vi.fn(),
}));

import { lowerMood } from '../../systems/mood';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    pcs_vag: 5, pcs_ass: 5, pcs_throat: 5, pcs_inhib: 50,
    pcs_sweat: 10, pcs_sleep: 50,
    willpowermax: 100, pcs_willpwr: 50,
    pcs_vital: 10, pcs_stren: 5, pcs_intel: 50, pcs_magik: 2, pcs_agil: 10,
    pcs_health: 50, pcs_mana: 50, pcs_stam: 50,
    healthmax: 100, manamax: 100, stammax: 100,
    arch_vars: {}, cheatVars: {},
    pcs_faith: 50, pcs_dom: 10, sub: 0,
    pcs_energy: 50, pcs_hydra: 50, fat: 0, succublvl: 0,
    pcs_mood: 50, statAlerts: [],
    inSleep: 0, totminut: 0, succubusflag: 0,
    HotelRoom: { pav: 0, city: 0 }, hotelRoomDays: { pav: 0, city: 0 },
    daystart: 1, hour: 12, birth_control: {},
    ...overrides,
  } as unknown as GameState;
}

afterEach(() => vi.restoreAllMocks());

describe('applyCaps', () => {
  it('clamps hole sizes to 0..36', () => {
    const s = makeState({ pcs_vag: 50, pcs_ass: -5, pcs_throat: 20 });
    applyCaps(s);
    expect(s.pcs_vag).toBe(36);
    expect(s.pcs_ass).toBe(0);
    expect(s.pcs_throat).toBe(20);
  });

  it('clamps inhib and sweat', () => {
    const s = makeState({ pcs_inhib: 150, pcs_sweat: 100 });
    applyCaps(s);
    expect(s.pcs_inhib).toBe(100);
    expect(s.pcs_sweat).toBe(69);
  });

  it('computes healthmax from vital and stren', () => {
    const s = makeState({ pcs_vital: 10, pcs_stren: 5 });
    applyCaps(s);
    expect(s.healthmax).toBe(125);
  });

  it('computes manamax from intel, magik, vital', () => {
    const s = makeState({ pcs_intel: 50, pcs_magik: 2, pcs_vital: 10 });
    applyCaps(s);
    expect(s.manamax).toBe(400);
  });

  it('computes stammax from vital, agil, stren', () => {
    const s = makeState({ pcs_vital: 10, pcs_agil: 10, pcs_stren: 5 });
    applyCaps(s);
    // stamBase = (30*(20+10+5)+1000)/13 = 2050/13 = 157.69; /10 = 15.77
    expect(s.stammax).toBeCloseTo(15.769, 3);
  });

  it('caps willpower/health/mana/stam to maxes', () => {
    const s = makeState({ pcs_willpwr: 200, pcs_health: 500, pcs_mana: 500, pcs_stam: 500 });
    applyCaps(s);
    expect(s.pcs_willpwr).toBeLessThanOrEqual(s.willpowermax);
    expect(s.pcs_health).toBeLessThanOrEqual(s.healthmax);
    expect(s.pcs_mana).toBeLessThanOrEqual(s.manamax);
    expect(s.pcs_stam).toBeLessThanOrEqual(s.stammax);
  });

  it('faith is 100 unless prude', () => {
    const s = makeState();
    applyCaps(s);
    expect(s.pcs_faith).toBe(100);
    const s2 = makeState({ arch_vars: { main_active: 'prude' }, pcs_faith: 80 });
    applyCaps(s2);
    expect(s2.pcs_faith).toBe(80);
  });

  it('dom/sub net resolution', () => {
    const s = makeState({ pcs_dom: 30, sub: 10 });
    applyCaps(s);
    expect(s.pcs_dom).toBe(20);
    expect(s.sub).toBe(0);
    const s2 = makeState({ pcs_dom: 10, sub: 30 });
    applyCaps(s2);
    expect(s2.pcs_dom).toBe(0);
    expect(s2.sub).toBe(20);
  });

  it('inf_willpower cheat sets willpower to max', () => {
    const s = makeState({ cheatVars: { inf_willpower: 1 }, willpowermax: 100, pcs_willpwr: 10 });
    applyCaps(s);
    expect(s.pcs_willpwr).toBe(100);
  });

  it('no_sweat cheat zeroes sweat', () => {
    const s = makeState({ cheatVars: { no_sweat: 1 }, pcs_sweat: 50 });
    applyCaps(s);
    expect(s.pcs_sweat).toBe(0);
  });
});

describe('statusMinima', () => {
  it('recovers energy from fat when energy < 0', () => {
    const s = makeState({ pcs_energy: -5, fat: 5, succublvl: 0 });
    statusMinima(s);
    expect(s.pcs_energy).toBe(8);
    expect(s.fat).toBe(4);
    expect(s.pcs_health).toBe(45);
  });

  it('recovers energy without fat', () => {
    const s = makeState({ pcs_energy: -5, fat: 0 });
    statusMinima(s);
    expect(s.pcs_energy).toBe(8);
    expect(s.pcs_health).toBe(45);
  });

  it('sets hydra to 1 and damages health when hydra <= 0', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ pcs_hydra: 0 });
    statusMinima(s);
    expect(s.pcs_hydra).toBe(1);
    expect(s.pcs_health).toBe(49); // -floor(0*(1-0))+1 = -1
  });

  it('pushes death alert when health < 0 from dehydration', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ pcs_hydra: 0, pcs_health: 0 });
    statusMinima(s);
    expect(s.pcs_health).toBe(0);
    expect(s.statAlerts).toContain('You died of dehydration!');
  });

  it('pushes combined death alert for both causes', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ pcs_energy: -5, fat: 0, pcs_hydra: 0, pcs_health: 0 });
    statusMinima(s);
    expect(s.statAlerts).toContain('You died of dehydration and malnutrition!');
  });

  it('lowers mood when sleep < 0', () => {
    const s = makeState({ pcs_sleep: -5 });
    statusMinima(s);
    expect(s.pcs_sleep).toBe(0);
    expect(lowerMood).toHaveBeenCalledWith(s, 'tiny');
  });

  it('pushes insane alert when willpower and mood both 0', () => {
    const s = makeState({ pcs_willpwr: 0, pcs_mood: 1 });
    statusMinima(s);
    expect(s.statAlerts).toContain('You are insane! (Willpower and Mood both at 0)');
  });
});

describe('checkAlerts', () => {
  it('pushes starvation alert when energy <= 10', () => {
    const s = makeState({ pcs_energy: 5 });
    checkAlerts(s);
    expect(s.statAlerts).toContain('You are starving!');
  });

  it('pushes dehydration alert when hydra <= 10', () => {
    const s = makeState({ pcs_hydra: 5 });
    checkAlerts(s);
    expect(s.statAlerts).toContain('You are dehydrated!');
  });

  it('pushes exhaustion alert when sleep <= 10', () => {
    const s = makeState({ pcs_sleep: 5 });
    checkAlerts(s);
    expect(s.statAlerts).toContain('You are exhausted!');
  });

  it('pushes critical health alert', () => {
    const s = makeState({ pcs_health: 10, healthmax: 100 });
    checkAlerts(s);
    expect(s.statAlerts).toContain('Your health is critical!');
  });

  it('no alerts when all stats healthy', () => {
    const s = makeState({ pcs_health: 100, healthmax: 100 });
    checkAlerts(s);
    expect(s.statAlerts).toHaveLength(0);
  });

  it('hotel checkout alert', () => {
    const s = makeState({ HotelRoom: { pav: 1, city: 0 }, hotelRoomDays: { pav: 1, city: 0 }, daystart: 1, hour: 10 });
    checkAlerts(s);
    expect(s.statAlerts).toContain('Your Pavlosk hotel room checks out today at 11:00!');
  });
});

describe('fifteenMinuteLoop', () => {
  it('increases horny over elapsed time', () => {
    const s = makeState({ totminut: 60, pcs_horny: 0 });
    fifteenMinuteLoop(s);
    // 60/15 = 4 iterations, +0.5 each = +2
    expect(s.pcs_horny).toBe(2);
  });

  it('caps horny at 100', () => {
    const s = makeState({ totminut: 1000, pcs_horny: 99 });
    fifteenMinuteLoop(s);
    expect(s.pcs_horny).toBeLessThanOrEqual(100);
  });

  it('succubus floor at 50', () => {
    const s = makeState({ totminut: 2000, pcs_horny: 0, succubusflag: 1, succublvl: 5 });
    fifteenMinuteLoop(s);
    expect(s.pcs_horny).toBeGreaterThanOrEqual(50);
  });
});
