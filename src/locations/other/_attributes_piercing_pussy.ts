// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: PirPrice ~ 10000 * (20 + PirQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 15750
  // TODO-QSP: 2: 16500
  // TODO-QSP: 3: 17250
  // TODO-QSP: 4: 18000
  // TODO-QSP: 5: 18750
  // TODO-QSP: 6: 19500
  // TODO-QSP: 7: 20250
  (s as any).PirFirst = 15000;
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 11500;
  } else {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 11500;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 11500;
    } else {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 11500;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).PirQuality = 3;
        (s as any).PirPrice = 11500;
      } else {
        (s as any).PirQuality = 3;
        (s as any).PirPrice = 11500;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).PirQuality = 3;
          (s as any).PirPrice = 11500;
        } else {
          (s as any).PirQuality = 3;
          (s as any).PirPrice = 11500;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).PirQuality = 3;
            (s as any).PirPrice = 11500;
          } else {
            (s as any).PirQuality = 3;
            (s as any).PirPrice = 11500;
          }
        }
      }
    }
  }
  scene.build();
}

export const _attributes_piercing_pussy: LocationDef = {
  name: '_attributes_piercing_pussy',
  region: 'other',
  enter: enter,
};
