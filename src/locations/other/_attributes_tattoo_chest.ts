// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: TatPrice ~ 12000 * (20 + TatQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 12600
  // TODO-QSP: 2: 13200
  // TODO-QSP: 3: 13800
  // TODO-QSP: 4: 14400
  // TODO-QSP: 5: 15000
  // TODO-QSP: 6: 15600
  // TODO-QSP: 7: 16200
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).TatQuality = 3;
    (s as any).TatPrice = 13800;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).TatQuality = 3;
      (s as any).TatPrice = 13800;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).TatQuality = 3;
        (s as any).TatPrice = 13800;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).TatQuality = 3;
          (s as any).TatPrice = 13800;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).TatQuality = 3;
            (s as any).TatPrice = 13800;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).TatQuality = 3;
              (s as any).TatPrice = 13800;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).TatQuality = 3;
                (s as any).TatPrice = 13800;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).TatQuality = 3;
                  (s as any).TatPrice = 13800;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).TatQuality = 3;
                    (s as any).TatPrice = 13800;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).TatQuality = 3;
                      (s as any).TatPrice = 13800;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).TatQuality = 3;
                        (s as any).TatPrice = 13800;
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).TatQuality = 3;
                          (s as any).TatPrice = 13800;
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).TatQuality = 3;
                            (s as any).TatPrice = 13800;
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).TatQuality = 3;
                              (s as any).TatPrice = 13800;
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 15) {
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
