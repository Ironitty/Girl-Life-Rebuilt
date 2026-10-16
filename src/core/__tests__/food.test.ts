import { describe, it, expect, vi, afterEach } from 'vitest';
import type { GameState } from '../types';
import { FOOD_ITEMS, foodAfterMeal, foodApplyStats, foodEat, foodOnlyCost, foodFamilyMeals } from '../food';

vi.mock('../mood', () => ({
  moodRaise: vi.fn(),
}));

import { moodRaise } from '../mood';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    pcs_hydra: 50, pcs_health: 50, fat: 0, pcs_energy: 50,
    frost: 1, pcs_breath: 1, minut: 0, menu_off: 0,
    money: 1000, loc: 'somewhere', uni_lunch_bought: 0,
    cumspclnt: 0, cfg_vars: {},
    ...overrides,
  } as unknown as GameState;
}

afterEach(() => vi.restoreAllMocks());

describe('foodAfterMeal', () => {
  it('returns the right text for each energy band', () => {
    expect(foodAfterMeal(makeState({ pcs_energy: 101 }) as GameState)).toContain('stuffed');
    expect(foodAfterMeal(makeState({ pcs_energy: 85 }) as GameState)).toContain('full and satisfied');
    expect(foodAfterMeal(makeState({ pcs_energy: 65 }) as GameState)).toContain('don\'t feel all that satisfied');
    expect(foodAfterMeal(makeState({ pcs_energy: 45 }) as GameState)).toContain('still quite hungry');
    expect(foodAfterMeal(makeState({ pcs_energy: 20 }) as GameState)).toContain('made you want more');
  });
});

describe('foodApplyStats', () => {
  it('applies pirosh stats', () => {
    const s = makeState();
    foodApplyStats(s, 'pirosh');
    expect(s.pcs_health).toBe(60);
    expect(s.fat).toBe(4);
    expect(s.pcs_energy).toBe(90);
    expect(s.pcs_hydra).toBe(40); // hydraDrain: 50 < 100 → -10
    expect(s.frost).toBe(0);
    expect(s.pcs_breath).toBe(0);
    expect((s as any).cumspclnt).toBe(2);
    expect(moodRaise).toHaveBeenCalledWith(s, 2);
  });

  it('hydraDrain is -5 when hydra >= 100', () => {
    const s = makeState({ pcs_hydra: 100 });
    foodApplyStats(s, 'pirosh');
    expect(s.pcs_hydra).toBe(95);
  });

  it('dynamic health (ryesna) uses pcs_health/10', () => {
    const s = makeState({ pcs_health: 100 });
    foodApplyStats(s, 'ryesna');
    expect(s.pcs_health).toBe(110);
  });

  it('dynamic hydra gain (golub) uses high value when hydra < 100', () => {
    const s = makeState({ pcs_hydra: 50 });
    foodApplyStats(s, 'golub');
    expect(s.pcs_hydra).toBe(70); // +20
  });

  it('dynamic hydra gain (golub) uses low value when hydra >= 100', () => {
    const s = makeState({ pcs_hydra: 100 });
    foodApplyStats(s, 'golub');
    expect(s.pcs_hydra).toBe(110); // +10
  });

  it('mush_soup overrides cumspclnt with cumspclnt field', () => {
    const s = makeState();
    foodApplyStats(s, 'mush_soup');
    expect((s as any).cumspclnt).toBe(2);
  });

  it('returns early for unknown item', () => {
    const s = makeState();
    foodApplyStats(s, 'nonexistent');
    expect(s.pcs_health).toBe(50);
    expect(moodRaise).not.toHaveBeenCalled();
  });
});

describe('foodEat', () => {
  it('advances time, sets menu_off, pays, applies stats, returns text', () => {
    const s = makeState({ money: 1000 });
    const text = foodEat(s, 'pirosh', 50);
    expect(s.menu_off).toBe(1);
    expect(s.minut).toBe(15);
    expect(s.money).toBe(950);
    expect(s.pcs_health).toBe(60);
    expect(text).toContain('Piroshki');
  });

  it('noPay item does not deduct price', () => {
    const s = makeState({ money: 1000 });
    foodEat(s, 'bagged_lunch', 100);
    expect(s.money).toBe(1000);
  });

  it('extraCash item deducts the extra', () => {
    const s = makeState({ money: 1000 });
    foodEat(s, 'hotel_food', 0);
    expect(s.money).toBe(900);
  });

  it('returns empty string for unknown item', () => {
    const s = makeState();
    expect(foodEat(s, 'nonexistent', 10)).toBe('');
  });
});

describe('foodOnlyCost', () => {
  it('pays price and applies stats', () => {
    const s = makeState({ money: 1000 });
    foodOnlyCost(s, 'pirosh', 30);
    expect(s.money).toBe(970);
    expect(s.pcs_health).toBe(60);
  });

  it('sets uni_lunch_bought when in uni_cafe', () => {
    const s = makeState({ loc: 'uni_cafe' });
    foodOnlyCost(s, 'pirosh', 30);
    expect(s.uni_lunch_bought).toBe(1);
  });
});

describe('foodFamilyMeals', () => {
  it('applies dinner stats', () => {
    const s = makeState({ pcs_hydra: 50 });
    foodFamilyMeals(s, 'dinner');
    expect(s.frost).toBe(0);
    expect(s.minut).toBe(20);
    expect(s.pcs_health).toBe(60);
    expect(s.fat).toBe(8);
    expect(s.pcs_energy).toBe(110);
    expect(s.pcs_hydra).toBe(110); // 50 < 100 → +60
    expect(s.pcs_breath).toBe(0);
    expect((s as any).cumspclnt).toBe(2);
  });

  it('applies breakfast stats with low hydra boost', () => {
    const s = makeState({ pcs_hydra: 10 });
    foodFamilyMeals(s, 'breakfast');
    expect(s.fat).toBe(6);
    expect(s.pcs_hydra).toBe(90); // 10 < 20 → +80
  });

  it('high hydra gets +30', () => {
    const s = makeState({ pcs_hydra: 100 });
    foodFamilyMeals(s, 'dinner');
    expect(s.pcs_hydra).toBe(130);
  });
});

describe('FOOD_ITEMS registry', () => {
  it('has the expected items', () => {
    expect(FOOD_ITEMS['pirosh']).toBeDefined();
    expect(FOOD_ITEMS['bliny']).toBeDefined();
    expect(FOOD_ITEMS['healthy_meal']).toBeDefined();
  });
});
