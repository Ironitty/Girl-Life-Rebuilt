// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: PirPrice ~ 6000 * (20 + PirQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 6300
  // TODO-QSP: 2: 6600
  // TODO-QSP: 3: 6900
  // TODO-QSP: 4: 7200
  // TODO-QSP: 5: 7500
  // TODO-QSP: 6: 7800
  // TODO-QSP: 7: 8100
  (s as any).PirFirst = 4000;
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 6900;
  } else {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 6900;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 6900;
    } else {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 6900;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).PirQuality = 3;
        (s as any).PirPrice = 6900;
      } else {
        (s as any).PirQuality = 3;
        (s as any).PirPrice = 6900;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).PirQuality = 3;
          (s as any).PirPrice = 6900;
        }
      }
    }
  }
  scene.build();
}

export const _attributes_piercing_nipples: LocationDef = {
  name: '_attributes_piercing_nipples',
  region: 'other',
  enter: enter,
};
