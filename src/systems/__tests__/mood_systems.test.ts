import { describe, it, expect } from 'vitest';
import type { GameState } from '../../core/types';
import {
  interpretDegree,
  raiseMood,
  lowerMood,
  raiseDisposition,
  lowerDisposition,
  doormatMood,
  raiseTrauma,
  lowerTrauma,
  holdMood,
  addMoodSE,
  popMoodSE,
  clearMoodSE,
  clampMood,
  decayMood,
  updateMood,
  resetMood,
} from '../mood';

function makeMoodVars(overrides: Record<string, number> = {}) {
  return {
    disp_base: 50,
    disp: 50,
    momentum: 0,
    inertia: 0,
    max: 100,
    min: 1,
    hold_minut: 0,
    leftover_mood: 0,
    ...overrides,
  };
}

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    pcs_mood: 50,
    pcs_health: 100,
    mood_trauma: 0,
    moodVars: makeMoodVars(),
    moodSE: {},
    arch_effects: {},
    cheatVars: {},
    trait_vars: {},
    ...overrides,
  } as unknown as GameState;
}

describe('interpretDegree', () => {
  it('passes numbers through unchanged', () => {
    expect(interpretDegree(42)).toBe(42);
    expect(interpretDegree(-5)).toBe(-5);
  });
  it('maps string degrees to values', () => {
    expect(interpretDegree('max')).toBe(100);
    expect(interpretDegree('huge')).toBe(40);
    expect(interpretDegree('large')).toBe(30);
    expect(interpretDegree('medium')).toBe(20);
    expect(interpretDegree('small')).toBe(10);
    expect(interpretDegree('tiny')).toBe(5);
    expect(interpretDegree('min')).toBe(1);
  });
});

describe('raiseMood', () => {
  it('adds the degree amount to pcs_mood', () => {
    const s = makeState();
    raiseMood(s, 'small');
    expect(s.pcs_mood).toBe(60);
  });
  it('applies the positive cheat multiplier when the opt flag is set', () => {
    const s = makeState({ cheatVars: { pos_mood_mult: 2, pos_mood_opt: 1 } });
    raiseMood(s, 'small');
    expect(s.pcs_mood).toBe(70);
  });
  it('clamps pcs_mood to moodVars.max', () => {
    const s = makeState({ pcs_mood: 95 });
    raiseMood(s, 'huge');
    expect(s.pcs_mood).toBe(100);
  });
});

describe('lowerMood', () => {
  it('subtracts the degree amount from pcs_mood', () => {
    const s = makeState();
    lowerMood(s, 'small');
    expect(s.pcs_mood).toBe(40);
  });
  it('clamps to min and penalizes health when mood drops below min', () => {
    const s = makeState({ pcs_mood: 5, pcs_health: 100 });
    lowerMood(s, 'huge');
    expect(s.pcs_mood).toBe(1);
    expect(s.pcs_health).toBe(95);
  });
});

describe('raiseDisposition', () => {
  it('sets disp_base to 75 (clamped to 70) on max', () => {
    const s = makeState();
    raiseDisposition(s, 'max');
    expect(s.moodVars.disp_base).toBe(70);
  });
  it('adds floor(raw/5) for numeric/string degrees', () => {
    const s = makeState();
    raiseDisposition(s, 'medium');
    expect(s.moodVars.disp_base).toBe(54);
  });
  it('clamps disp_base to 70 at the top', () => {
    const s = makeState({ moodVars: makeMoodVars({ disp_base: 68 }) });
    raiseDisposition(s, 'huge');
    expect(s.moodVars.disp_base).toBe(70);
  });
});

describe('lowerDisposition', () => {
  it('sets disp_base to 25 on min', () => {
    const s = makeState();
    lowerDisposition(s, 'min');
    expect(s.moodVars.disp_base).toBe(25);
  });
  it('subtracts floor(raw/5) for degrees', () => {
    const s = makeState();
    lowerDisposition(s, 'medium');
    expect(s.moodVars.disp_base).toBe(46);
  });
  it('clamps disp_base to 20 at the bottom', () => {
    const s = makeState({ moodVars: makeMoodVars({ disp_base: 22 }) });
    lowerDisposition(s, 'huge');
    expect(s.moodVars.disp_base).toBe(20);
  });
});

describe('doormatMood', () => {
  it('raises mood using the level-0 argument when doormat is 0', () => {
    const s = makeState({ trait_vars: { doormat: 0 } });
    doormatMood(s, ['raise|small', 'x', 'x', 'x']);
    expect(s.pcs_mood).toBe(60);
  });
  it('uses the level-3 argument when doormat is 3 or higher', () => {
    const s = makeState({ trait_vars: { doormat: 5 } });
    doormatMood(s, ['x', 'x', 'x', 'lower|small']);
    expect(s.pcs_mood).toBe(40);
  });
  it('does nothing when the argument has no pipe separator', () => {
    const s = makeState({ trait_vars: { doormat: 0 } });
    doormatMood(s, ['nopipe', 'x', 'x', 'x']);
    expect(s.pcs_mood).toBe(50);
  });
});

describe('raiseTrauma / lowerTrauma', () => {
  it('raises trauma and clamps to 15', () => {
    const s = makeState();
    raiseTrauma(s, 10);
    expect(s.mood_trauma).toBe(10);
    raiseTrauma(s, 10);
    expect(s.mood_trauma).toBe(15);
  });
  it('lowers trauma and clamps to 0', () => {
    const s = makeState({ mood_trauma: 10 });
    lowerTrauma(s, 3);
    expect(s.mood_trauma).toBe(7);
    lowerTrauma(s, 10);
    expect(s.mood_trauma).toBe(0);
  });
});

describe('holdMood', () => {
  it('sets hold_minut to the given minutes', () => {
    const s = makeState();
    holdMood(s, 30);
    expect(s.moodVars.hold_minut).toBe(30);
  });
  it('never lowers an existing hold', () => {
    const s = makeState({ moodVars: makeMoodVars({ hold_minut: 30 }) });
    holdMood(s, 10);
    expect(s.moodVars.hold_minut).toBe(30);
  });
});

describe('addMoodSE', () => {
  it('increments the SE count and lowers disposition for a known SE', () => {
    const s = makeState();
    addMoodSE(s, 'gerpes');
    expect(s.moodSE['gerpes']).toBe(1);
    expect(s.moodVars.disp_base).toBe(49);
  });
  it('increments the count without disposition change for an unknown SE', () => {
    const s = makeState();
    addMoodSE(s, 'unknown');
    expect(s.moodSE['unknown']).toBe(1);
    expect(s.moodVars.disp_base).toBe(50);
  });
});

describe('popMoodSE', () => {
  it('decrements the SE count and raises disposition for a known SE', () => {
    const s = makeState({ moodSE: { gerpes: 1 }, moodVars: makeMoodVars({ disp_base: 49 }) });
    popMoodSE(s, 'gerpes');
    expect(s.moodSE['gerpes']).toBe(0);
    expect(s.moodVars.disp_base).toBe(50);
  });
  it('does nothing when the SE count is already 0', () => {
    const s = makeState();
    popMoodSE(s, 'gerpes');
    expect(s.moodVars.disp_base).toBe(50);
  });
});

describe('clearMoodSE', () => {
  it('zeroes the SE and raises disposition by the full count', () => {
    const s = makeState({ moodSE: { gerpes: 2 }, moodVars: makeMoodVars({ disp_base: 48 }) });
    clearMoodSE(s, 'gerpes');
    expect(s.moodSE['gerpes']).toBe(0);
    expect(s.moodVars.disp_base).toBe(50);
  });
});

describe('clampMood', () => {
  it('clamps trauma to the 0-15 range', () => {
    const s = makeState({ mood_trauma: 20 });
    clampMood(s);
    expect(s.mood_trauma).toBe(15);
    const s2 = makeState({ mood_trauma: -5 });
    clampMood(s2);
    expect(s2.mood_trauma).toBe(0);
  });
  it('resets a zero disp_base to 50', () => {
    const s = makeState({ moodVars: makeMoodVars({ disp_base: 0 }) });
    clampMood(s);
    expect(s.moodVars.disp_base).toBe(50);
  });
  it('reduces max for active SEs and trauma, floored at 40', () => {
    const s = makeState({ moodSE: { gerpes: 3 }, mood_trauma: 5 });
    clampMood(s);
    expect(s.moodVars.max).toBe(75);
    const s2 = makeState({ mood_trauma: 15 });
    clampMood(s2);
    expect(s2.moodVars.max).toBe(40);
  });
  it('computes disp from disp_base plus the arch disposition effect', () => {
    const s = makeState({ arch_effects: { disposition_effect: 10 } });
    clampMood(s);
    expect(s.moodVars.disp).toBe(60);
  });
  it('clamps pcs_mood down to max', () => {
    const s = makeState({ pcs_mood: 150 });
    clampMood(s);
    expect(s.pcs_mood).toBe(100);
  });
});

describe('decayMood', () => {
  it('drains hold_minut by up to 15 per tick while holding', () => {
    const s = makeState({ moodVars: makeMoodVars({ hold_minut: 30 }) });
    decayMood(s);
    expect(s.moodVars.hold_minut).toBe(15);
  });
  it('raises disposition and resets momentum past the high threshold', () => {
    const s = makeState({
      pcs_mood: 100,
      moodVars: makeMoodVars({ disp_base: 20, momentum: 4990 }),
    });
    decayMood(s);
    expect(s.moodVars.momentum).toBe(0);
  });
  it('lowers disposition and resets inertia past the high threshold', () => {
    const s = makeState({
      moodVars: makeMoodVars({ inertia: 3201 }),
    });
    decayMood(s);
    expect(s.moodVars.inertia).toBe(0);
  });
  it('accumulates leftover mood and applies a fractional lowerMood', () => {
    const s = makeState({ pcs_mood: 50, moodVars: makeMoodVars({ disp: 40 }) });
    decayMood(s);
    expect(s.moodVars.leftover_mood).toBe(10);
    expect(s.pcs_mood).toBeCloseTo(49.3333, 3);
  });
});

describe('updateMood', () => {
  it('runs decay then clamp without changing a stable mood', () => {
    const s = makeState();
    updateMood(s);
    expect(s.pcs_mood).toBe(50);
    expect(s.moodVars.disp_base).toBe(50);
  });
});

describe('resetMood', () => {
  it('sets pcs_mood to the current disp', () => {
    const s = makeState({ moodVars: makeMoodVars({ disp: 60 }) });
    resetMood(s);
    expect(s.pcs_mood).toBe(60);
  });
});
