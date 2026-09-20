// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).PirFirst = 3000;
  if (Number((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 2300;
  } else {
    if (Number((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 2300;
    }
  }
  scene.build();
}

export const _attributes_piercing_brow: LocationDef = {
  name: '_attributes_piercing_brow',
  region: 'other',
  enter: enter,
};
