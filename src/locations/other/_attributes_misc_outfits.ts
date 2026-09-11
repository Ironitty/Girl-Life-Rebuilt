// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).CloQuality = 1;
    (s as any).CloStrength = 187500;
    (s as any).CloThinness = 1;
    (s as any).CloTopCut = 1;
    (s as any).CloSkirtShortness = 3;
    (s as any).CloExhibit = 0;
    (s as any).CloPrice = 0;
  }
  scene.build();
}

export const _attributes_misc_outfits: LocationDef = {
  name: '_attributes_misc_outfits',
  region: 'other',
  enter: enter,
};
