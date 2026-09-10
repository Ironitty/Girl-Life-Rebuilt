// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: PirPrice ~ 2000 * (20 + PirQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 2100
  // TODO-QSP: 2: 2200
  // TODO-QSP: 3: 2300
  // TODO-QSP: 4: 2400
  // TODO-QSP: 5: 2500
  // TODO-QSP: 6: 2600
  // TODO-QSP: 7: 2700
  (s as any).PirFirst = 3000;
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 2300;
  } else {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 2300;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 2300;
    } else {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 2300;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).PirQuality = 3;
        (s as any).PirPrice = 2300;
      } else {
        (s as any).PirQuality = 3;
        (s as any).PirPrice = 2300;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).PirQuality = 3;
          (s as any).PirPrice = 2300;
        }
      }
    }
  }
  scene.build();
}

export const _attributes_piercing_nose: LocationDef = {
  name: '_attributes_piercing_nose',
  region: 'other',
  enter: enter,
};
