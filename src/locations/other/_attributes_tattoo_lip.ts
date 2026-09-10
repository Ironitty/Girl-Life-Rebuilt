// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: TatPrice ~ 5000 * (20 + TatQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 5250
  // TODO-QSP: 2: 5500
  // TODO-QSP: 3: 5750
  // TODO-QSP: 4: 6000
  // TODO-QSP: 5: 6250
  // TODO-QSP: 6: 6500
  // TODO-QSP: 7: 6750
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 5750;
  } else {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 5750;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 5750;
    } else {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 5750;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 5750;
      } else {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 5750;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 5750;
        } else {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 5750;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).TatQuality = 3;
            (s as any).TatPrice = 5750;
          }
        }
      }
    }
  }
  scene.build();
}

export const _attributes_tattoo_lip: LocationDef = {
  name: '_attributes_tattoo_lip',
  region: 'other',
  enter: enter,
};
