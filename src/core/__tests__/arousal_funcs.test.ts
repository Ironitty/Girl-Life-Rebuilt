import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import {
  getBaseStimmag, calcStimTotal, feed, inVag, inAnal, inThroat,
  getHolePain, stretch, setVirginityStats, autoLube, arousalStatsEnd,
} from '../arousal_funcs';

afterEach(() => vi.restoreAllMocks());

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    pcs_horny: 0, trait_vars: { sensitivity: 0 },
    pcs_hydra: 100, pcs_energy: 100, pcs_stam: 100, fat: 0,
    ar_anal_lube: 0, auto_vag_lube: 0, auto_anal_lube: 0,
    vaginal_slip: 0, anal_slip: 0,
    ...overrides,
  } as unknown as GameState;
}

describe('getBaseStimmag', () => {
  it('base magnitude is 5', () => {
    expect(getBaseStimmag(makeState())).toBe(5);
  });

  it('increases with horny thresholds', () => {
    expect(getBaseStimmag(makeState({ pcs_horny: 150 }))).toBe(6);
    expect(getBaseStimmag(makeState({ pcs_horny: 250 }))).toBe(7);
    expect(getBaseStimmag(makeState({ pcs_horny: 350 }))).toBe(8);
  });

  it('adds sensitivity and clamps at 9', () => {
    expect(getBaseStimmag(makeState({ trait_vars: { sensitivity: 2 } }))).toBe(7);
    expect(getBaseStimmag(makeState({ pcs_horny: 350, trait_vars: { sensitivity: 5 } }))).toBe(9);
  });

  it('clamps a large negative sensitivity at the upper bound of 9', () => {
    // mag -= sensitivity, so -10 adds 10 => 15, clamped to 9
    expect(getBaseStimmag(makeState({ trait_vars: { sensitivity: -10 } }))).toBe(9);
  });
});

describe('calcStimTotal', () => {
  it('computes the base stimulus', () => {
    // mag 5 * act 30 = 150, no bonuses, timeMult 1 => floor(150/10) = 15
    expect(calcStimTotal(5, 30, 100, 0, 5)).toBe(15);
  });

  it('applies kink and preference bonuses', () => {
    // base 150, kinkBonus (150-100)/100 = 0.5, prefBonus 100/200 = 0.5 => 150*2/10 = 30
    expect(calcStimTotal(5, 30, 150, 100, 5)).toBe(30);
  });

  it('scales with time multiplier', () => {
    // time 10 => timeMult 2 => 150*1*2/10 = 30
    expect(calcStimTotal(5, 30, 100, 0, 10)).toBe(30);
  });

  it('never goes negative', () => {
    expect(calcStimTotal(1, 1, 0, 0, 5)).toBeGreaterThanOrEqual(0);
  });
});

describe('feed', () => {
  it('drains hydra and energy by level', () => {
    const s = makeState();
    feed(s, 3);
    expect(s.pcs_hydra).toBe(94);
    expect(s.pcs_energy).toBe(97);
  });
});

describe('inVag / inAnal / inThroat', () => {
  it('inVag sets act 30 and drains resources', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState();
    const stim: Record<string, number> = { time: 5 };
    inVag(s, stim);
    expect(stim['act']).toBe(30);
    expect(s.pcs_stam).toBeLessThan(100);
    expect(s.pcs_hydra).toBeLessThan(100);
  });

  it('inVag applies auto-lube slip when no lube', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ auto_vag_lube: 1 });
    inVag(s, { time: 5 });
    expect(s.vaginal_slip).toBe(8);
  });

  it('inAnal sets act 10', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState();
    const stim: Record<string, number> = { time: 5 };
    inAnal(s, stim);
    expect(stim['act']).toBe(10);
  });

  it('inThroat sets act 40', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState();
    const stim: Record<string, number> = { time: 5 };
    inThroat(s, stim);
    expect(stim['act']).toBe(40);
  });
});

describe('getHolePain', () => {
  it('records girth/length diffs and clamps pain at 120', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({
      dick_width11: 10, dick_length11: 12,
      pain: { vaginal: 100 },
    });
    getHolePain(s, 4, 0, 100, 0, 120, 0, 5);
    const vars = s as unknown as Record<string, number>;
    // girthDiff = max(0,(10-4)*2)=12; lengthDiff = max(0,(12-8)/2)=2; total=14
    expect(vars['girth_diff']).toBe(12);
    expect(vars['length_diff']).toBe(2);
    expect(s.pain['vaginal']).toBe(114);
  });
});

describe('stretch', () => {
  it('increases vgape when the length exceeds capacity', () => {
    const s = makeState({ dick_length11: 12, pcs_vag: 5, vgape: 0 });
    stretch(s, 'vaginal');
    expect(s.vgape).toBe(1);
  });

  it('leaves vgape unchanged when it fits', () => {
    const s = makeState({ dick_length11: 5, pcs_vag: 10, vgape: 0 });
    stretch(s, 'vaginal');
    expect(s.vgape).toBe(0);
  });

  it('increases agape for anal', () => {
    const s = makeState({ dick_length11: 12, pcs_ass: 5, agape: 0 });
    stretch(s, 'anal');
    expect(s.agape).toBe(1);
  });
});

describe('virginity / lube / end', () => {
  it('setVirginityStats clears the flag and records the cause', () => {
    const s = makeState({ stat: { think_virgin: 1 }, virgin_stats: {} });
    setVirginityStats(s, 'event');
    expect(s.stat['think_virgin']).toBe(0);
    expect((s.virgin_stats as Record<string, unknown>)['lost_cause']).toBe('event');
  });

  it('autoLube sets slip and the lube flag', () => {
    const s = makeState();
    autoLube(s, 'anal');
    expect(s.anal_slip).toBe(8);
    expect(s.ar_anal_lube).toBe(1);
    autoLube(s, 'vag');
    expect(s.vaginal_slip).toBe(8);
    expect(s.ar_vag_lube).toBe(1);
  });

  it('arousalStatsEnd resets lube and orgasm text', () => {
    const s = makeState({ ar_anal_lube: 1, ar_vag_lube: 1, orgasm_or: 'x', orgasm_txt: 'y' });
    arousalStatsEnd(s);
    expect(s.ar_anal_lube).toBe(0);
    expect(s.ar_vag_lube).toBe(0);
    expect(s.orgasm_or).toBe('');
    expect(s.orgasm_txt).toBe('');
  });
});
