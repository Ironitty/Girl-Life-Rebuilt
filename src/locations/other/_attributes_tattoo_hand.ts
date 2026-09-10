// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: TatPrice ~ 7000 * (20 + TatQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 7350
  // TODO-QSP: 2: 7700
  // TODO-QSP: 3: 8050
  // TODO-QSP: 4: 8400
  // TODO-QSP: 5: 8750
  // TODO-QSP: 6: 9100
  // TODO-QSP: 7: 9450
  if (((s as any).ARGS ?? 0)[0] === 1) {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 8050;
  } else {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 8050;
    if (((s as any).ARGS ?? 0)[0] === 3) {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 8050;
    } else {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 8050;
      if (((s as any).ARGS ?? 0)[0] === 5) {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 8050;
      } else {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 8050;
        if (((s as any).ARGS ?? 0)[0] === 7) {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 8050;
        } else {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 8050;
          if (((s as any).ARGS ?? 0)[0] === 9) {
            (s as any).TatQuality = 3;
            (s as any).TatPrice = 8050;
          }
        }
      }
    }
  }
  scene.build();
}

export const _attributes_tattoo_hand: LocationDef = {
  name: '_attributes_tattoo_hand',
  region: 'other',
  enter: enter,
};
