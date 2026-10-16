import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import {
  willpowerCalc, willpowerDifficulty, willpowerPay, willpowerGetCostString,
  willpowerMisc, willpowerSex,
} from '../willpower';

afterEach(() => vi.restoreAllMocks());

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    will_dnd: 0, will_calc: 0, will_fetish_mod: 0, will_fetish_mod_pref: 0,
    will_arousal_mod: 0, will_succubus_mod: 0, will_cost: 0,
    pcs_sleep: 100, pcs_stam: 100, stammax: 100, pcs_energy: 100,
    pcs_hydra: 100, pcs_mood: 100, sifilis: 0, sick: 0,
    pain: { total: 0 }, pcs_horny: 50, succublvl: 0,
    pcs_willpwr: 100, willpowermax: 100, will_counter: 0, will_enforced: 0,
    pcs_persuas: 0, pcs_sprt: 0,
    cheatVars: { willpower: 0, wp_cost_opt: 0, wp_cost_mult: 1, willcost_style: 0 },
    trait_vars: { doormat: 0 }, stat: {},
    ...overrides,
  } as unknown as GameState;
}

describe('willpowerCalc', () => {
  it('starts from the d20 roll (0 when random is 0)', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState();
    willpowerCalc(s);
    expect(s.will_dnd).toBe(0);
    expect(s.will_calc).toBe(0);
  });

  it('adds a sleep penalty for low sleep', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ pcs_sleep: 0 });
    willpowerCalc(s);
    expect(s.will_calc).toBe(50);
  });

  it('adds a sifilis penalty', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ sifilis: 50 });
    willpowerCalc(s);
    expect(s.will_calc).toBe(100);
  });

  it('adds a sickness penalty', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ sick: 100 });
    willpowerCalc(s);
    expect(s.will_calc).toBe(35);
  });

  it('computes the succubus modifier', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ succublvl: 2 });
    willpowerCalc(s);
    expect(s.will_succubus_mod).toBe(50);
  });
});

describe('willpowerDifficulty', () => {
  it('cheat mode zeroes the cost', () => {
    const s = makeState({ cheatVars: { willpower: 1 }, will_cost: 50 });
    willpowerDifficulty(s, 'self');
    expect(s.will_cost).toBe(0);
  });

  it('easy difficulty enforces a minimum of 5', () => {
    const s = makeState({ will_cost: 3 });
    willpowerDifficulty(s, 'self', 'easy');
    expect(s.will_cost).toBe(5);
  });

  it('hard difficulty multiplies by 9/4 with a floor of 7', () => {
    const s = makeState({ will_cost: 10 });
    willpowerDifficulty(s, 'self', 'hard');
    // floor(10 * 9/4) = 22
    expect(s.will_cost).toBe(22);
  });

  it('normal difficulty multiplies by 3/2 with a floor of 6', () => {
    const s = makeState({ will_cost: 10 });
    willpowerDifficulty(s, 'self');
    // floor(10 * 3/2) = 15
    expect(s.will_cost).toBe(15);
  });

  it('force type scales with persuas', () => {
    const s = makeState({ will_cost: 100, pcs_persuas: 50 });
    willpowerDifficulty(s, 'force');
    // normal: floor(100*3/2)=150, then force: floor(150*(200-50)/100)=225
    expect(s.will_cost).toBe(225);
  });
});

describe('willpowerPay', () => {
  it('drains willpower by the cost when not in cheat mode', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ will_cost: 10, pcs_willpwr: 100 });
    willpowerPay(s, 'resist');
    expect(s.pcs_willpwr).toBe(90);
    expect(s.pcs_sprt).toBe(1);
  });

  it('skips the drain in cheat mode', () => {
    const s = makeState({ cheatVars: { willpower: 1 }, will_cost: 10, pcs_willpwr: 100 });
    willpowerPay(s, 'resist');
    expect(s.pcs_willpwr).toBe(100);
  });

  it('raises willpowermax when the counter reaches 20', () => {
    const s = makeState({ will_cost: 0, will_counter: 19, willpowermax: 100 });
    willpowerPay(s, 'resist');
    expect(s.willpowermax).toBe(101);
    expect(s.will_counter).toBe(0);
  });
});

describe('willpowerGetCostString', () => {
  it('returns empty for a zero cost', () => {
    expect(willpowerGetCostString(makeState(), 0)).toBe('');
  });

  it('formats wp/cost in the default style', () => {
    const s = makeState({ pcs_willpwr: 50 });
    expect(willpowerGetCostString(s, 10, 50)).toBe(' (50/10 Willpower)');
  });

  it('marks an unaffordable cost in red', () => {
    const s = makeState({ pcs_willpwr: 5 });
    expect(willpowerGetCostString(s, 10, 5)).toContain('color:red');
  });
});

describe('willpowerMisc / willpowerSex', () => {
  it('misc self cost is derived from the calc', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState();
    willpowerMisc(s, 'self');
    // calc 0 => floor(50/10)=5, then normal difficulty floor(5*3/2)=7
    expect(s.will_cost).toBe(7);
  });

  it('sex self cost uses the vaginal stat', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ stat: { vaginal: 0 } });
    willpowerSex(s, 'self');
    // calc 0, statVal 0 => floor((100-0+0-0-0)/10)=10, then normal floor(10*3/2)=15
    expect(s.will_cost).toBe(15);
  });
});
