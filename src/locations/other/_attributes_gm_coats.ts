// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: CoatPrice ~ 1500 * (20 + CoatQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 1500
  // TODO-QSP: 2: 1600
  // TODO-QSP: 3: 1700
  // TODO-QSP: CoatQuality ranges from 1 to 3
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).CoatQuality = 2;
    (s as any).CoatStrength = 250000;
    (s as any).CoatWarm = 2;
    (s as any).CoatPrice = 1600;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).CoatQuality = 2;
      (s as any).CoatStrength = 250000;
      (s as any).CoatWarm = 1;
      (s as any).CoatPrice = 1600;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).CoatQuality = 2;
        (s as any).CoatStrength = 250000;
        (s as any).CoatWarm = 1;
        (s as any).CoatPrice = 1600;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).CoatQuality = 3;
          (s as any).CoatStrength = 300000;
          (s as any).CoatWarm = 1;
          (s as any).CoatPrice = 1700;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).CoatQuality = 1;
            (s as any).CoatStrength = 200000;
            (s as any).CoatWarm = 1;
            (s as any).CoatPrice = 1500;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).CoatQuality = 2;
              (s as any).CoatStrength = 250000;
              (s as any).CoatWarm = 1;
              (s as any).CoatPrice = 1600;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).CoatQuality = 1;
                (s as any).CoatStrength = 200000;
                (s as any).CoatWarm = 1;
                (s as any).CoatPrice = 1500;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).CoatQuality = 2;
                  (s as any).CoatStrength = 250000;
                  (s as any).CoatWarm = 2;
                  (s as any).CoatPrice = 1600;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).CoatQuality = 2;
                    (s as any).CoatStrength = 250000;
                    (s as any).CoatWarm = 2;
                    (s as any).CoatPrice = 1600;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).CoatQuality = 2;
                      (s as any).CoatStrength = 250000;
                      (s as any).CoatWarm = 2;
                      (s as any).CoatPrice = 1600;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).CoatQuality = 3;
                        (s as any).CoatStrength = 300000;
                        (s as any).CoatWarm = 2;
                        (s as any).CoatPrice = 1700;
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).CoatQuality = 2;
                          (s as any).CoatStrength = 250000;
                          (s as any).CoatWarm = 1;
                          (s as any).CoatPrice = 1600;
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).CoatQuality = 2;
                            (s as any).CoatStrength = 250000;
                            (s as any).CoatWarm = 1;
                            (s as any).CoatPrice = 1600;
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).CoatQuality = 3;
                              (s as any).CoatStrength = 300000;
                              (s as any).CoatWarm = 1;
                              (s as any).CoatPrice = 1700;
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 15) {
                                (s as any).CoatQuality = 2;
                                (s as any).CoatStrength = 250000;
                                (s as any).CoatWarm = 3;
                                (s as any).CoatPrice = 1600;
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 16) {
                                  (s as any).CoatQuality = 2;
                                  (s as any).CoatStrength = 250000;
                                  (s as any).CoatWarm = 2;
                                  (s as any).CoatPrice = 1600;
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 17) {
                                    (s as any).CoatQuality = 2;
                                    (s as any).CoatStrength = 250000;
                                    (s as any).CoatWarm = 2;
                                    (s as any).CoatPrice = 1600;
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 18) {
                                      (s as any).CoatQuality = 2;
                                      (s as any).CoatStrength = 250000;
                                      (s as any).CoatWarm = 2;
                                      (s as any).CoatPrice = 1600;
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 19) {
                                        (s as any).CoatQuality = 3;
                                        (s as any).CoatStrength = 300000;
                                        (s as any).CoatWarm = 3;
                                        (s as any).CoatPrice = 1700;
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 20) {
                                          (s as any).CoatQuality = 2;
                                          (s as any).CoatStrength = 250000;
                                          (s as any).CoatWarm = 1;
                                          (s as any).CoatPrice = 1600;
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

export const _attributes_gm_coats: LocationDef = {
  name: '_attributes_gm_coats',
  region: 'other',
  enter: enter,
};
