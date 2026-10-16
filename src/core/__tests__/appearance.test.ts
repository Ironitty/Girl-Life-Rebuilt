import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import { computeAppearance } from '../appearance';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    pcs_bmi: 22, strenbuf: 50,
    pcs_agil: 0, pcs_vital: 0,
    vidage: 25, pcs_teeth: 0,
    pcs_lashes: 0, pcs_eyesize: 1, pcs_lip: 0,
    clothingworntype: 'nude',
    PCloThinness: 0, PXCloTopCut: 0, PXCloBottomShortness: 0,
    PCloQuality: 0, PCloDirt: 0,
    pantyworntype: 'none', PPanQuality: 0,
    braworntype: 'none', PBraQuality: 0,
    locationType: 'private', temper: 20,
    coatworntype: 'none', PCoatQuality: 0, PShoQuality: 0,
    pcs_makeup: 0, pcs_breath: 0,
    pcs_lipbalm: 1, pcs_hairbsh: 1, pcs_hairlng: 10,
    deodorant_on: 1, pcs_sweat: 0, glass: 0, pcs_leghair: 0,
    pcs_skin: 0, arch_effects: {}, succubusflag: 0,
    ...overrides,
  } as unknown as GameState;
}

describe('computeAppearance', () => {
  it('computes a baseline appearance', () => {
    const s = makeState();
    computeAppearance(s);
    // base = 0 + 50 + 0 + (-1) - 0 - 5 = 44
    expect(s.pcs_apprncbase).toBe(44);
    // total = 44 + 15 + 0 - 5 - 0 = 54
    expect(s.pcs_apprnc).toBe(54);
    expect(s.pcs_hotcat).toBe(2);
  });

  it('succubus flag adds to base and final appearance', () => {
    const s = makeState({ succubusflag: 1 });
    computeAppearance(s);
    // succBonus 50 is added to base AND to the supernatural final add-on => +100
    expect(s.pcs_apprnc).toBe(154);
    expect(s.pcs_hotcat).toBe(7);
  });

  it('teeth penalty reduces base appearance', () => {
    const s = makeState({ pcs_teeth: 2 });
    computeAppearance(s);
    // base = 0 + 50 + 0 - 1 - 0 - 20 = 29
    expect(s.pcs_apprncbase).toBe(29);
    expect(s.pcs_apprnc).toBe(39);
    expect(s.pcs_hotcat).toBe(1);
  });

  it('attribute bonus scales with agil/vital at a fixed BMI', () => {
    const low = makeState({ pcs_agil: 0, pcs_vital: 0, pcs_bmi: 22 });
    const high = makeState({ pcs_agil: 25, pcs_vital: 25, pcs_bmi: 22 });
    computeAppearance(low);
    computeAppearance(high);
    // (25+25)/5 = 10, no BMI scaling at 22; body shape and face identical
    expect(high.pcs_apprncbase - low.pcs_apprncbase).toBe(10);
  });

  it('visible age under 20 applies a penalty', () => {
    const child = makeState({ vidage: 15 });
    const adult = makeState({ vidage: 25 });
    computeAppearance(child);
    computeAppearance(adult);
    // child penalty = (5*5+1)/2 = 13, scaled by bmi 22 (no change) = 13
    expect(adult.pcs_apprncbase - child.pcs_apprncbase).toBe(13);
  });

  it('nude with healthy BMI gives clothing bonus 15', () => {
    const s = makeState({ clothingworntype: 'nude', pcs_bmi: 22 });
    computeAppearance(s);
    expect(s.pcs_apprnc).toBe(54);
  });

  it('nude with high BMI gives no clothing bonus', () => {
    const healthy = makeState({ clothingworntype: 'nude', pcs_bmi: 22 });
    const heavy = makeState({ clothingworntype: 'nude', pcs_bmi: 32 });
    computeAppearance(healthy);
    computeAppearance(heavy);
    // nude bmi 22 gets +15 clothing bonus; nude bmi 32 gets 0, plus worse body shape
    expect(healthy.pcs_apprnc).toBeGreaterThan(heavy.pcs_apprnc);
  });

  it('grooming penalty applies for no lipbalm', () => {
    const withLipbalm = makeState({ pcs_lipbalm: 1 });
    const withoutLipbalm = makeState({ pcs_lipbalm: 0 });
    computeAppearance(withLipbalm);
    computeAppearance(withoutLipbalm);
    expect(withLipbalm.pcs_apprnc - withoutLipbalm.pcs_apprnc).toBe(5);
  });

  it('sweat penalty applies at high sweat', () => {
    const dry = makeState({ pcs_sweat: 0 });
    const sweaty = makeState({ pcs_sweat: 30 });
    computeAppearance(dry);
    computeAppearance(sweaty);
    // sweat 30: penalty += (30-10)/4 = 5, plus deo/sweat>=20 +5 = 10 total
    expect(dry.pcs_apprnc - sweaty.pcs_apprnc).toBe(10);
  });

  it('clamps final appearance to 0..200', () => {
    const s = makeState({ pcs_skin: 1000, pcs_agil: 200, pcs_vital: 200, succubusflag: 1 });
    computeAppearance(s);
    expect(s.pcs_apprnc).toBeGreaterThanOrEqual(0);
  });

  it('hotcat boundaries', () => {
    const low = makeState({ pcs_skin: -100, pcs_teeth: 5, vidage: 10 });
    computeAppearance(low);
    expect(low.pcs_hotcat).toBeGreaterThanOrEqual(1);
    expect(low.pcs_hotcat).toBeLessThanOrEqual(10);
  });
});
