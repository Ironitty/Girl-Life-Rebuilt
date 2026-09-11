// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CoatPrice ~ 4000 * (20 + CoatQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 5: 5000
  // TODO-QSP: 6: 5200
  // TODO-QSP: 7: 5400
  // TODO-QSP: CoatQuality ranges from 5 to 7
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).CoatQuality = 6;
    (s as any).CoatStrength = 450000;
    (s as any).CoatWarm = 2;
    (s as any).CoatPrice = 5200;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).CoatQuality = 7;
      (s as any).CoatStrength = 500000;
      (s as any).CoatWarm = 2;
      (s as any).CoatPrice = 5400;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).CoatQuality = 6;
        (s as any).CoatStrength = 450000;
        (s as any).CoatWarm = 2;
        (s as any).CoatPrice = 5200;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).CoatQuality = 6;
          (s as any).CoatStrength = 450000;
          (s as any).CoatWarm = 2;
          (s as any).CoatPrice = 5200;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).CoatQuality = 6;
            (s as any).CoatStrength = 450000;
            (s as any).CoatWarm = 3;
            (s as any).CoatPrice = 5200;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).CoatQuality = 6;
              (s as any).CoatStrength = 450000;
              (s as any).CoatWarm = 2;
              (s as any).CoatPrice = 5200;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).CoatQuality = 7;
                (s as any).CoatStrength = 500000;
                (s as any).CoatWarm = 3;
                (s as any).CoatPrice = 5400;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).CoatQuality = 7;
                  (s as any).CoatStrength = 500000;
                  (s as any).CoatWarm = 3;
                  (s as any).CoatPrice = 5400;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).CoatQuality = 5;
                    (s as any).CoatStrength = 400000;
                    (s as any).CoatWarm = 2;
                    (s as any).CoatPrice = 5000;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).CoatQuality = 7;
                      (s as any).CoatStrength = 500000;
                      (s as any).CoatWarm = 3;
                      (s as any).CoatPrice = 5400;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).CoatQuality = 7;
                        (s as any).CoatStrength = 500000;
                        (s as any).CoatWarm = 3;
                        (s as any).CoatPrice = 5400;
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).CoatQuality = 7;
                          (s as any).CoatStrength = 500000;
                          (s as any).CoatWarm = 2;
                          (s as any).CoatPrice = 5400;
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).CoatQuality = 7;
                            (s as any).CoatStrength = 500000;
                            (s as any).CoatWarm = 2;
                            (s as any).CoatPrice = 5400;
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).CoatQuality = 6;
                              (s as any).CoatStrength = 450000;
                              (s as any).CoatWarm = 2;
                              (s as any).CoatPrice = 5200;
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 15) {
                                (s as any).CoatQuality = 7;
                                (s as any).CoatStrength = 500000;
                                (s as any).CoatWarm = 2;
                                (s as any).CoatPrice = 5400;
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 16) {
                                  (s as any).CoatQuality = 6;
                                  (s as any).CoatStrength = 450000;
                                  (s as any).CoatWarm = 2;
                                  (s as any).CoatPrice = 5200;
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 17) {
                                    (s as any).CoatQuality = 7;
                                    (s as any).CoatStrength = 500000;
                                    (s as any).CoatWarm = 1;
                                    (s as any).CoatPrice = 5400;
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 18) {
                                      (s as any).CoatQuality = 6;
                                      (s as any).CoatStrength = 450000;
                                      (s as any).CoatWarm = 2;
                                      (s as any).CoatPrice = 5200;
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 19) {
                                        (s as any).CoatQuality = 7;
                                        (s as any).CoatStrength = 500000;
                                        (s as any).CoatWarm = 3;
                                        (s as any).CoatPrice = 5400;
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 20) {
                                          (s as any).CoatQuality = 7;
                                          (s as any).CoatStrength = 500000;
                                          (s as any).CoatWarm = 2;
                                          (s as any).CoatPrice = 5400;
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
          }
        }
      }
    }
  }
  scene.build();
}

export const _attributes_moncheri_coats: LocationDef = {
  name: '_attributes_moncheri_coats',
  region: 'other',
  enter: enter,
};
