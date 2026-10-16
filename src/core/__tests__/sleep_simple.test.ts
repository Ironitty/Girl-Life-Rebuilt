import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';

vi.mock('../time', () => ({ advanceTime: vi.fn() }));

import { sleepNapBase, sleepLoop } from '../sleep_simple';

afterEach(() => vi.restoreAllMocks());

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    inSleep: 0, minut: 0, hour: 0, daystart: 0,
    pcs_sleep: 50, pcs_health: 100, healthmax: 100, recuperation: 0,
    trait_vars: { sleep_duration: 0 },
    sleepVars: { minutes_to_wakeup: 0, time_to_full: 0, stime: 0, time_now: 0, health_stock: 0, no_health: 0 },
    ...overrides,
  } as unknown as GameState;
}

describe('sleepNapBase', () => {
  it('advances the clock and restores sleep/health for a nap', () => {
    const s = makeState();
    sleepNapBase(s, 30);
    expect(s.minut).toBe(30);
    expect(s.pcs_sleep).toBe(55);
    expect(s.pcs_health).toBe(102.5);
  });

  it('restores without advancing the clock for a negative value', () => {
    const s = makeState();
    sleepNapBase(s, -30);
    expect(s.minut).toBe(0);
    expect(s.pcs_sleep).toBe(55);
    expect(s.pcs_health).toBe(102.5);
  });

  it('is a no-op at zero minutes', () => {
    const s = makeState();
    sleepNapBase(s, 0);
    expect(s.minut).toBe(0);
    expect(s.pcs_sleep).toBe(50);
    expect(s.pcs_health).toBe(100);
  });
});

describe('sleepLoop', () => {
  it('recovers sleep on the normal schedule and exits sleep', () => {
    const s = makeState({
      sleepVars: { minutes_to_wakeup: 10, time_to_full: 10, stime: 0, time_now: 0, health_stock: 0, no_health: 0 },
    });
    sleepLoop(s);
    // stime hits 5 and 10 -> +2 sleep
    expect(s.pcs_sleep).toBe(52);
    expect(s.inSleep).toBe(0);
    expect(s.pcs_health).toBeGreaterThan(100);
  });

  it('recovers faster with a short sleep duration', () => {
    const s = makeState({
      trait_vars: { sleep_duration: 1 },
      sleepVars: { minutes_to_wakeup: 10, time_to_full: 10, stime: 0, time_now: 0, health_stock: 0, no_health: 0 },
    });
    sleepLoop(s);
    // stime%5 at 5,10 (+2) and stime%11 none -> +2
    expect(s.pcs_sleep).toBe(52);
    expect(s.inSleep).toBe(0);
  });
});
