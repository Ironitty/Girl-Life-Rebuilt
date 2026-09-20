// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 13800;
  } else {
    if (Number((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 13800;
    } else {
      if (Number((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 13800;
      } else {
        if (Number((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 13800;
        } else {
          if (Number((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).TatQuality = 3;
            (s as any).TatPrice = 13800;
          } else {
            if (Number((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).TatQuality = 3;
              (s as any).TatPrice = 13800;
            } else {
              if (Number((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).TatQuality = 3;
                (s as any).TatPrice = 13800;
              } else {
                if (Number((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).TatQuality = 3;
                  (s as any).TatPrice = 13800;
                } else {
                  if (Number((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).TatQuality = 3;
                    (s as any).TatPrice = 13800;
                  } else {
                    if (Number((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).TatQuality = 3;
                      (s as any).TatPrice = 13800;
                    } else {
                      if (Number((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).TatQuality = 3;
                        (s as any).TatPrice = 13800;
                      } else {
                        if (Number((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).TatQuality = 3;
                          (s as any).TatPrice = 13800;
                        } else {
                          if (Number((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).TatQuality = 3;
                            (s as any).TatPrice = 13800;
                          } else {
                            if (Number((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).TatQuality = 3;
                              (s as any).TatPrice = 13800;
                            } else {
                              if (Number((s as any).locArgs?.[0] ?? 0) === 15) {
                                (s as any).TatQuality = 3;
                                (s as any).TatPrice = 13800;
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
        }
      }
    }
  }
  scene.build();
}

export const _attributes_tattoo_chest: LocationDef = {
  name: '_attributes_tattoo_chest',
  region: 'other',
  enter: enter,
};
