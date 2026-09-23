// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === 1) {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 5750;
  } else {
    if (String((s as any).locArgs?.[0] ?? '') === 2) {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 5750;
    } else {
      if (String((s as any).locArgs?.[0] ?? '') === 3) {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 5750;
      } else {
        if (String((s as any).locArgs?.[0] ?? '') === 4) {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 5750;
        } else {
          if (String((s as any).locArgs?.[0] ?? '') === 5) {
            (s as any).TatQuality = 3;
            (s as any).TatPrice = 5750;
          } else {
            if (String((s as any).locArgs?.[0] ?? '') === 6) {
              (s as any).TatQuality = 3;
              (s as any).TatPrice = 5750;
            } else {
              if (String((s as any).locArgs?.[0] ?? '') === 7) {
                (s as any).TatQuality = 3;
                (s as any).TatPrice = 5750;
              } else {
                if (String((s as any).locArgs?.[0] ?? '') === 8) {
                  (s as any).TatQuality = 3;
                  (s as any).TatPrice = 5750;
                } else {
                  if (String((s as any).locArgs?.[0] ?? '') === 9) {
                    (s as any).TatQuality = 3;
                    (s as any).TatPrice = 5750;
                  }
                }
              }
            }
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
