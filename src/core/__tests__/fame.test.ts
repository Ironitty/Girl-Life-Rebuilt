import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import { fameAdd, fameCalculate, fameCalculateGroups, fameDeg, fameChurchReduction } from '../fame';

afterEach(() => vi.restoreAllMocks());

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    fame: {},
    ...overrides,
  } as unknown as GameState;
}

describe('fameAdd (deterministic numeric path)', () => {
  it('adds a numeric value to a spreadable core key', () => {
    const s = makeState();
    fameAdd(s, 'pav', 'acting', 100);
    expect(s.fame['pav_acting_core']).toBe(100);
  });

  it('local-only acts use the bare key', () => {
    const s = makeState();
    fameAdd(s, 'pav', 'sex', 50);
    expect(s.fame['pav_sex']).toBe(50);
    expect(s.fame['pav_sex_core']).toBeUndefined();
  });

  it('local flag appends _local suffix', () => {
    const s = makeState();
    fameAdd(s, 'city', 'dance', 30, 'local');
    expect(s.fame['city_dance_local']).toBe(30);
  });

  it('accumulates across calls', () => {
    const s = makeState();
    fameAdd(s, 'pav', 'acting', 100);
    fameAdd(s, 'pav', 'acting', 50);
    expect(s.fame['pav_acting_core']).toBe(150);
  });
});

describe('fameCalculate', () => {
  it('computes region value from core when core < 1000', () => {
    const s = makeState({
      fame: { pav_acting_core: 500, pav_acting_local: 0 },
    });
    fameCalculate(s, 'acting');
    // val = (1000*500 + (1000-500)*0)/1000 = 500
    expect(s.fame['pav_acting']).toBe(500);
  });

  it('returns early for local-only acts', () => {
    const s = makeState({ fame: { pav_sex_core: 500 } });
    fameCalculate(s, 'sex');
    expect(s.fame['pav_sex']).toBeUndefined();
  });

  it('clamps region value to 0..1200', () => {
    const s = makeState({ fame: { pav_acting_core: 1100, pav_acting_local: 0 } });
    fameCalculate(s, 'acting');
    expect(s.fame['pav_acting']).toBeLessThanOrEqual(1200);
  });
});

describe('fameCalculateGroups', () => {
  it('sums performer fame above the 30 threshold', () => {
    const s = makeState({ fame: { pav_acting: 60, pav_dance: 0 } });
    fameCalculateGroups(s);
    // (60-30)/3 = 10
    expect(s.fame['pav_performer']).toBe(10);
  });

  it('computes sexind from porn/stripping', () => {
    const s = makeState({ fame: { pav_porn: 70, pav_stripping: 0 } });
    fameCalculateGroups(s);
    // (70-30)/2 = 20
    expect(s.fame['pav_sexind']).toBe(20);
  });

  it('computes slut from sex/prostitute plus flash', () => {
    const s = makeState({ fame: { pav_sex: 50, pav_prostitute: 0, pav_flash: 70 } });
    fameCalculateGroups(s);
    // sex: (50-30)/2 = 10; flash: min(70-30,100)/4 = 10 => 20
    expect(s.fame['pav_slut']).toBe(20);
  });
});

describe('fameDeg', () => {
  it('degrades local-only and spreadable fame above 2', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({
      fame: { pav_sex: 10, pav_acting_core: 10, pav_acting_local: 10 },
    });
    fameDeg(s);
    // rand(-1,3) with random=0 => -1, so each -= -1 => +1
    expect(s.fame['pav_sex']).toBe(11);
    expect(s.fame['pav_acting_core']).toBe(11);
    expect(s.fame['pav_acting_local']).toBe(11);
  });

  it('leaves fame of 2 or less untouched', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ fame: { pav_sex: 2 } });
    fameDeg(s);
    expect(s.fame['pav_sex']).toBe(2);
  });
});

describe('fameChurchReduction', () => {
  it('reduces sex/prostitute by amount and flash by double', () => {
    const s = makeState({
      fame: { pav_sex: 50, pav_prostitute: 30, pav_flash: 40 },
    });
    fameChurchReduction(s, 'pav', 10);
    expect(s.fame['pav_sex']).toBe(40);
    expect(s.fame['pav_prostitute']).toBe(20);
    expect(s.fame['pav_flash']).toBe(20);
  });

  it('never goes below zero', () => {
    const s = makeState({ fame: { pav_sex: 5, pav_prostitute: 5, pav_flash: 5 } });
    fameChurchReduction(s, 'pav', 10);
    expect(s.fame['pav_sex']).toBe(0);
    expect(s.fame['pav_prostitute']).toBe(0);
    expect(s.fame['pav_flash']).toBe(0);
  });
});
