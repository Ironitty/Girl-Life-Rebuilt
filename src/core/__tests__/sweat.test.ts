import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import { sweatAdd, sweatShower, sweatDeo, sweatRemoveDeo, sweatClamp } from '../sweat';

afterEach(() => vi.restoreAllMocks());

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    pcs_sweat: 0, deodorant_on: 0, deodorant_time: 0, totminut: 100,
    ...overrides,
  } as unknown as GameState;
}

describe('sweatAdd', () => {
  it('ignores non-positive amounts', () => {
    const s = makeState();
    sweatAdd(s, 0);
    sweatAdd(s, -5);
    expect(s.pcs_sweat).toBe(0);
  });

  it('adds the full amount without deodorant', () => {
    const s = makeState();
    sweatAdd(s, 10);
    expect(s.pcs_sweat).toBe(10);
  });

  it('rolls a reduced amount with deodorant on', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ deodorant_on: 1 });
    sweatAdd(s, 10);
    // min floor(10/3)=3, max ceil(2*11/3)=8, random 0 -> 3
    expect(s.pcs_sweat).toBe(3);
  });
});

describe('sweatShower', () => {
  it('resets heavy sweat and removes deodorant', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ pcs_sweat: 50, deodorant_on: 1 });
    sweatShower(s);
    expect(s.pcs_sweat).toBe(0);
    expect(s.deodorant_on).toBe(0);
  });

  it('leaves light sweat untouched but still removes deodorant', () => {
    const s = makeState({ pcs_sweat: 5, deodorant_on: 1 });
    sweatShower(s);
    expect(s.pcs_sweat).toBe(5);
    expect(s.deodorant_on).toBe(0);
  });
});

describe('sweatDeo', () => {
  it('applies deodorant and trims sweat', () => {
    const s = makeState({ pcs_sweat: 10 });
    sweatDeo(s);
    expect(s.deodorant_on).toBe(1);
    expect(s.pcs_sweat).toBe(8);
    expect(s.deodorant_time).toBe(1540);
  });

  it('refreshes the timer when already applied', () => {
    const s = makeState({ deodorant_on: 1, pcs_sweat: 10 });
    sweatDeo(s);
    expect(s.pcs_sweat).toBe(10);
    expect(s.deodorant_time).toBe(1540);
  });
});

describe('sweatRemoveDeo / sweatClamp', () => {
  it('clears the deodorant state', () => {
    const s = makeState({ deodorant_on: 1, deodorant_time: 500 });
    sweatRemoveDeo(s);
    expect(s.deodorant_on).toBe(0);
    expect(s.deodorant_time).toBe(0);
  });

  it('clamps negative sweat to zero', () => {
    const s = makeState({ pcs_sweat: -4 });
    sweatClamp(s);
    expect(s.pcs_sweat).toBe(0);
  });
});
