import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import {
  getSportClothesExerciseBonus, exerciseTier1, exerciseTier2, exerciseTier3,
  exerciseTier4, exercisePushupsInner, timeString,
} from '../exercise';

vi.mock('../exp_gain', () => ({ expGain: vi.fn() }));
vi.mock('../mood', () => ({ moodRaise: vi.fn() }));
vi.mock('../sweat', () => ({ sweatAdd: vi.fn() }));

import { expGain } from '../exp_gain';

afterEach(() => vi.restoreAllMocks());

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    PBraSport: 0, PCloBra: 0, PPanSport: 0, PCloPanties: 0, PCloSport: 0, PShoSport: 0,
    sport_clothes_exercise_bonus: 0,
    minut: 0, fat: 50, lastexerciseexp: 0,
    pcs_stam: 100, pcs_energy: 100, pcs_hydra: 100, pcs_horny: 0,
    trait_vars: { fitness_freak: 0 },
    stat: {},
    ...overrides,
  } as unknown as GameState;
}

describe('getSportClothesExerciseBonus', () => {
  it('counts each sport clothing slot', () => {
    const s = makeState({ PBraSport: 1, PPanSport: 1, PCloSport: 1, PShoSport: 1 });
    expect(getSportClothesExerciseBonus(s)).toBe(4);
    expect(s.sport_clothes_exercise_bonus).toBe(4);
  });

  it('returns 0 with no sport clothes', () => {
    expect(getSportClothesExerciseBonus(makeState())).toBe(0);
  });
});

describe('exercise tiers', () => {
  it('tier1 advances time, drains fat, and triggers the workout flag', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    vi.mocked(expGain).mockClear();
    const s = makeState();
    exerciseTier1(s, 0, 'pcs_stren');
    expect(s.minut).toBe(15);
    expect(s.fat).toBeLessThan(50);
    expect(s.stat['last_workout_trig']).toBe(1);
    expect(expGain).toHaveBeenCalledTimes(3);
  });

  it('tier2 uses a higher multiplier for positive time override', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    vi.mocked(expGain).mockClear();
    const s = makeState();
    exerciseTier2(s, 10, 'pcs_stren');
    // mult = (3+10)/5 = 2.6 => loop runs while m < 2.6 => 3 iterations
    expect(s.minut).toBe(10);
    expect(expGain).toHaveBeenCalledTimes(3);
  });

  it('tier3 drains a fixed amount of stamina per round', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState();
    exerciseTier3(s, 0, 'pcs_stren');
    expect(s.pcs_stam).toBeLessThan(100);
    expect(s.stat['last_workout_trig']).toBe(1);
  });

  it('tier4 adds two stats when stat2 is provided', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    vi.mocked(expGain).mockClear();
    const s = makeState();
    exerciseTier4(s, 0, 'pcs_stren', 'pcs_agil');
    // mult 3, two expGain calls per round => 6
    expect(expGain).toHaveBeenCalledTimes(6);
  });
});

describe('exercisePushupsInner', () => {
  it('computes a positive pushup count and updates the record', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const s = makeState({ pcs_energy: 50, pcs_stren: 0, pcs_vital: 0, pcs_sleep: 0, pushrecord: 0 });
    const n = exercisePushupsInner(s);
    expect(n).toBeGreaterThan(0);
    expect(s.pushnum).toBe(n);
    expect(s.pushrecord).toBe(n);
  });
});

describe('timeString', () => {
  it('maps the time multiplier to a word', () => {
    const s = makeState() as unknown as Record<string, unknown>;
    s['timemult'] = 1;
    expect(timeString(s as unknown as GameState)).toBe('five');
    s['timemult'] = 3;
    expect(timeString(s as unknown as GameState)).toBe('fifteen');
  });
});
