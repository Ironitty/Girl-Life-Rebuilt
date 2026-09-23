// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).PirFirst = 3000;
  if (String((s as any).locArgs?.[0] ?? '') === 1) {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 5750;
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 2) {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 5750;
    } else {
      if (String((s as any).locArgs?.[0] ?? '') === 3) {
        (s as any).PirQuality = 3;
        (s as any).PirPrice = 5750;
      } else {
        if (String((s as any).locArgs?.[0] ?? '') === 4) {
          (s as any).PirQuality = 3;
          (s as any).PirPrice = 5750;
        }
      }
    }
  }
  scene.build();
}

export const _attributes_piercing_navel: LocationDef = {
  name: '_attributes_piercing_navel',
  region: 'other',
  enter: enter,
};
