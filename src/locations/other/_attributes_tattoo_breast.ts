// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 17250;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 17250;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 17250;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 17250;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).TatQuality = 3;
            (s as any).TatPrice = 17250;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).TatQuality = 3;
              (s as any).TatPrice = 17250;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).TatQuality = 3;
                (s as any).TatPrice = 17250;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).TatQuality = 3;
                  (s as any).TatPrice = 17250;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).TatQuality = 3;
                    (s as any).TatPrice = 17250;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).TatQuality = 3;
                      (s as any).TatPrice = 17250;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).TatQuality = 3;
                        (s as any).TatPrice = 17250;
                      }
                    }
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

export const _attributes_tattoo_breast: LocationDef = {
  name: '_attributes_tattoo_breast',
  region: 'other',
  enter: enter,
};
