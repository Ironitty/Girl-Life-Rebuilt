import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import { expGain } from '../exp_gain';

function makeState(overrides: Partial<GameState> = {}): GameState {
  return {
    no_exp_gain: 0,
    stren_plus_lvl: 0,
    drugVars: {},
    pcs_condition: {},
    pcs_stam: 100,
    stammax: 100,
    cheatVars: {},
    inhib_exp: 0,
    ...overrides,
  } as GameState;
}

describe('expGain', () => {
  it('does nothing for empty skill name', () => {
    const s = makeState() as GameState & Record<string, unknown>;
    expGain(s, '', 10);
    expect(s.intel_exp_frac).toBeUndefined();
  });

  it('does nothing for non-positive amount', () => {
    const s = makeState() as GameState & Record<string, unknown>;
    expGain(s, 'intel', 0);
    expGain(s, 'intel', -5);
    expect(s.intel_exp_frac).toBeUndefined();
  });

  it('respects no_exp_gain flag', () => {
    const s = makeState({ no_exp_gain: 1 }) as GameState & Record<string, unknown>;
    expGain(s, 'intel', 100);
    expect(s.intel_exp_frac).toBeUndefined();
  });

  it('caps stren_plus at level 50 without steroids', () => {
    const s = makeState({ stren_plus_lvl: 50 }) as GameState & Record<string, unknown>;
    expGain(s, 'stren_plus', 100);
    expect(s.stren_plus_exp_frac).toBeUndefined();
  });

  it('still gains stren_plus below 50', () => {
    const s = makeState({ stren_plus_lvl: 49 }) as GameState & Record<string, unknown>;
    expGain(s, 'stren_plus', 100);
    expect(s.stren_plus_exp_frac).toBe(0);
    expect(s.stren_plus_exp).toBe(1);
  });

  it('inhib goes directly to inhib_exp', () => {
    const s = makeState() as GameState & Record<string, unknown>;
    expGain(s, 'inhib', 50);
    expect(s.inhib_exp).toBe(50);
    expect(s.inhib_exp_frac).toBeUndefined();
  });

  it('accumulates exp_frac without level gain', () => {
    const s = makeState() as GameState & Record<string, unknown>;
    expGain(s, 'intel', 50);
    expect(s.intel_exp_frac).toBe(50);
    expect(s.intel_exp).toBeUndefined();
  });

  it('gains a level at 100 exp_frac', () => {
    const s = makeState() as GameState & Record<string, unknown>;
    expGain(s, 'intel', 100);
    expect(s.intel_exp_frac).toBe(0);
    expect(s.intel_exp).toBe(1);
  });

  it('respects level cap (100 + muta)', () => {
    const s = makeState() as GameState & Record<string, unknown>;
    s.intel_lvl = 100;
    s.intel_muta = 0;
    expGain(s, 'intel', 100);
    expect(s.intel_exp_frac).toBe(0);
    expect(s.intel_exp).toBeUndefined();
  });

  it('magik uses magik_adj instead of exp', () => {
    const s = makeState() as GameState & Record<string, unknown>;
    expGain(s, 'magik', 100);
    expect(s.magik_adj).toBe(1);
    expect(s.magik_exp).toBeUndefined();
  });

  it('intel gains trigger mentats side effect', () => {
    const s = makeState({ drugVars: { mentats_dose: 2 } }) as GameState & Record<string, unknown>;
    expGain(s, 'intel', 100);
    expect(s.drugVars['mentats_expgain']).toBe(2);
  });

  it('stren gains trigger steroids side effect', () => {
    const s = makeState({ drugVars: { steroids_dose: 2 } }) as GameState & Record<string, unknown>;
    expGain(s, 'stren', 100);
    expect(s.drugVars['steroids_stren_expgain']).toBe(2);
    expect(s.drugVars['steroids_check']).toBe(1);
  });

  it('reduces multiplier when stam is 0', () => {
    const s = makeState({ pcs_stam: 0, pcs_condition: { lack_of_sleep: 0 } }) as GameState & Record<string, unknown>;
    expGain(s, 'intel', 100);
    // mult = 1 * 200/400 = 0.5, so 100*0.5 = 50 exp_frac, no level gain
    expect(s.intel_exp_frac).toBe(50);
    expect(s.intel_exp).toBeUndefined();
  });

  it('applies cheat exp_gain_mult', () => {
    const s = makeState({ cheatVars: { exp_gain_mult: 2 } }) as GameState & Record<string, unknown>;
    expGain(s, 'intel', 100);
    // mult = 2 * 1 = 2, so 100*2 = 200, gained = 2
    expect(s.intel_exp_frac).toBe(0);
    expect(s.intel_exp).toBe(2);
  });
});
