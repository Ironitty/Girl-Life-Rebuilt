import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import {
  outfitClearAll, outfitResetDerivedVars, outfitSetDerivedVars, outfitBackup,
  outfitRestore, outfitNudeBackup, outfitStripAll, outfitGetHourlyMoodBonus,
  calcClothingBonus, calcAccessoriesBonus, outfitIncreaseOutfitWear,
} from '../outfit';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    clothingworntype: 'gm_outfits', clothingwornnumber: 3, underwear: { type: 0 },
    bodysuitworntype: 'none', bodysuitwornnumber: 0,
    braworntype: 'gm', brawornnumber: 1, pantyworntype: 'gm', pantywornnumber: 1,
    currentpursetype: 'none', currentpursenumber: 0,
    shoeworntype: 'gm', shoewornnumber: 1, coatworntype: 'none', coatwornnumber: 0,
    lastworn_backups: {},
    PBimbo: 0, PGoth: 0, PPunk: 0, PPrep: 0, PPrude: 0, PProstitute: 0,
    PMaid: 0, PServer: 0, PStrip: 0, PSchool: 0, POffice: 0, PSport: 0,
    PSwim: 0, PCoverTop: 0, PCoverFront: 0, PCoverBack: 0,
    PCloBra: 0, PCloBimbo: 0, PCloGoth: 0, PCloPunk: 0, PCloPrep: 0, PCloPrude: 0,
    PCloStyle2: 0, PCloMaid: 0, PCloServer: 0, PCloStrip: 0, PCloSchool: 0,
    PCloOffice: 0, PCloSport: 0, PCloSwim: 0,
    PShoBimbo: 0, PShoGoth: 0, PShoPunk: 0, PShoStyle2: 0, PShoStrip: 0, PShoSport: 0,
    PCloCoverTop: 0, PBraCover: 0, PCloCoverFront: 0, PPanCoverFront: 0,
    PCloCoverBack: 0, PPanCoverBack: 0,
    PCloThinness: 400, PXCloTopCut: 500, PXCloBottomShortness: 400,
    PCloQuality: 10, PCloDirt: 0, PBraDirt: 0, PPanDirt: 0,
    PPanQuality: 5, PBraQuality: 5, PCoatQuality: 6, PShoQuality: 2,
    PCloBorrowed: 0, PBraBorrowed: 0, PPanBorrowed: 0, PCoatBorrowed: 0, PShoBorrowed: 0,
    PCloStrength: 100, PBraStrength: 100, PPanStrength: 100, PCoatStrength: 100, PShoStrength: 100,
    cheatVars: {}, pcs_mood: 70, locationType: 'indoors', temper: 10, sunWeather: 1,
    inSleep: 0, sparrvol: {}, skill_levels: {}, pain: {}, trait_vars: {},
    totminut: 0, heelsminut: 0, pcs_bmi: 20, pcs_sweat: 0, pcs_horny: 50, bag: 0,
    ...overrides,
  } as unknown as GameState;
}

describe('outfitClearAll / outfitResetDerivedVars', () => {
  it('clears every worn slot to nude/none', () => {
    const s = makeState();
    outfitClearAll(s);
    expect(s.clothingworntype).toBe('nude');
    expect(s.braworntype).toBe('none');
    expect(s.pantyworntype).toBe('none');
    expect(s.shoeworntype).toBe('none');
    expect(s.coatworntype).toBe('none');
  });

  it('zeros all derived style flags', () => {
    const s = makeState({ PPrep: 1, PMaid: 1, PSwim: 1 });
    outfitResetDerivedVars(s);
    expect(s.PPrep).toBe(0);
    expect(s.PMaid).toBe(0);
    expect(s.PSwim).toBe(0);
  });
});

describe('outfitSetDerivedVars', () => {
  it('flags prep, maid, and swim styles', () => {
    const s = makeState({ PCloPrep: 1, PCloStyle2: 1, PCloSwim: 1 });
    outfitSetDerivedVars(s);
    expect(s.PPrep).toBe(1);
    expect(s.PMaid).toBe(1);
    expect(s.PSwim).toBe(1);
  });

  it('requires matching shoes for bimbo', () => {
    const s = makeState({ PCloBimbo: 1 });
    outfitSetDerivedVars(s);
    expect(s.PBimbo).toBe(0);
    const s2 = makeState({ PCloBimbo: 1, PShoBimbo: 1 });
    outfitSetDerivedVars(s2);
    expect(s2.PBimbo).toBe(1);
  });

  it('computes cover from clothing and bra', () => {
    const s = makeState({ PCloCoverTop: 10, PBraCover: 10 });
    outfitSetDerivedVars(s);
    expect(s.PCoverTop).toBe(16);
  });
});

describe('backup / restore round-trip', () => {
  it('restores the backed-up outfit', () => {
    const s = makeState();
    outfitBackup(s);
    outfitStripAll(s);
    expect(s.clothingworntype).toBe('nude');
    outfitRestore(s);
    expect(s.clothingworntype).toBe('gm_outfits');
    expect(s.braworntype).toBe('gm');
    expect(s.pantyworntype).toBe('gm');
  });

  it('restores a nude backup as nude', () => {
    const s = makeState();
    outfitNudeBackup(s);
    outfitRestore(s);
    expect(s.clothingworntype).toBe('nude');
    expect(s.braworntype).toBe('none');
  });
});

describe('outfitStripAll', () => {
  it('backs up then strips everything', () => {
    const s = makeState();
    outfitStripAll(s);
    expect(s.clothingworntype).toBe('nude');
    expect(s.braworntype).toBe('none');
    expect(s.shoeworntype).toBe('none');
    expect(s.lastwornclothingtype).toBe('gm_outfits');
  });
});

describe('outfitGetHourlyMoodBonus', () => {
  it('grants a clean-clothes bonus', () => {
    const s = makeState({ PCloDirt: 0, PBraDirt: 0, PPanDirt: 0 });
    expect(outfitGetHourlyMoodBonus(s)).toBe(5);
  });

  it('adds a cats bonus when mood is low', () => {
    const s = makeState({ pcs_mood: 40, pantyworntype: 'cats', PCloDirt: 0, PBraDirt: 0, PPanDirt: 0 });
    expect(outfitGetHourlyMoodBonus(s)).toBe(7);
  });
});

describe('calcClothingBonus', () => {
  it('rewards a healthy nude body', () => {
    expect(calcClothingBonus(makeState({ clothingworntype: 'nude', pcs_bmi: 20 }))).toBe(15);
    expect(calcClothingBonus(makeState({ clothingworntype: 'nude', pcs_bmi: 30 }))).toBe(0);
  });

  it('computes the revealing bonus for clothed bodies', () => {
    const s = makeState({ clothingworntype: 'gm_outfits', pcs_bmi: 20 });
    // (400+500+400)/2 = 650; quality 10, cleanBonus 39 -> floor(10*650/76 + 39) = 124
    expect(calcClothingBonus(s)).toBe(124);
  });
});

describe('calcAccessoriesBonus', () => {
  it('sums panty, bra, and shoe quality', () => {
    const s = makeState({ pantyworntype: 'gm', braworntype: 'gm', PPanQuality: 5, PBraQuality: 5, PShoQuality: 2 });
    expect(calcAccessoriesBonus(s)).toBe(8);
  });

  it('adds coat quality outdoors in the cold', () => {
    const s = makeState({ locationType: 'outdoors_park', temper: -5, coatworntype: 'gm', PCoatQuality: 6, PShoQuality: 0, pantyworntype: 'none', braworntype: 'none' });
    expect(calcAccessoriesBonus(s)).toBe(4);
  });
});

describe('outfitIncreaseOutfitWear', () => {
  it('wears down shoes, coat, and clothing', () => {
    const s = makeState({ coatworntype: 'gm' });
    outfitIncreaseOutfitWear(s, 10);
    expect(s.PShoStrength).toBe(90);
    expect(s.PCoatStrength).toBe(90);
    expect(s.PCloStrength).toBe(90);
  });

  it('is a no-op while sleeping', () => {
    const s = makeState({ inSleep: 1 });
    outfitIncreaseOutfitWear(s, 10);
    expect(s.PShoStrength).toBe(100);
  });
});
