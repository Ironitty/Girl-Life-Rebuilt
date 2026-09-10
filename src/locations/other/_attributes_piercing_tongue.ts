// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: PirPrice ~ 4000 * (20 + PirQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 4200
  // TODO-QSP: 2: 4400
  // TODO-QSP: 3: 4600
  // TODO-QSP: 4: 4800
  // TODO-QSP: 5: 5000
  // TODO-QSP: 6: 5200
  // TODO-QSP: 7: 5400
  (s as any).PirFirst = 3000;
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 4600;
  } else {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 4600;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 4600;
    } else {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 4600;
    }
  }
  scene.build();
}

export const _attributes_piercing_tongue: LocationDef = {
  name: '_attributes_piercing_tongue',
  region: 'other',
  enter: enter,
};
