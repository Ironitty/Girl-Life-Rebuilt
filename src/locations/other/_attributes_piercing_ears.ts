// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/13
  // TODO-QSP: PirPrice ~ 1000 * (20 + PirQUality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 1050
  // TODO-QSP: 2: 1100
  // TODO-QSP: 3: 1150
  // TODO-QSP: 4: 1200
  // TODO-QSP: 5: 1250
  // TODO-QSP: 6: 1300
  // TODO-QSP: 7: 1350
  (s as any).PirFirst = 2000;
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).PirQuality = 3;
    (s as any).PirPrice = 1150;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).PirQuality = 3;
      (s as any).PirPrice = 1150;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).PirQuality = 3;
        (s as any).PirPrice = 1150;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).PirQuality = 3;
          (s as any).PirPrice = 1150;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).PirQuality = 3;
            (s as any).PirPrice = 1150;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).PirQuality = 3;
              (s as any).PirPrice = 1150;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).PirQuality = 3;
                (s as any).PirPrice = 1150;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).PirQuality = 3;
                  (s as any).PirPrice = 1150;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).PirQuality = 3;
                    (s as any).PirPrice = 1150;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).PirQuality = 3;
                      (s as any).PirPrice = 1150;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).PirQuality = 3;
                        (s as any).PirPrice = 1150;
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).PirQuality = 3;
                          (s as any).PirPrice = 1150;
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).PirQuality = 3;
                            (s as any).PirPrice = 1150;
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).PirQuality = 3;
                              (s as any).PirPrice = 1150;
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 15) {
                                (s as any).PirQuality = 3;
                                (s as any).PirPrice = 1150;
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 16) {
                                  (s as any).PirQuality = 3;
                                  (s as any).PirPrice = 1150;
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 17) {
                                    (s as any).PirQuality = 3;
                                    (s as any).PirPrice = 1150;
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 18) {
                                      (s as any).PirQuality = 3;
                                      (s as any).PirPrice = 1150;
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 19) {
                                        (s as any).PirQuality = 3;
                                        (s as any).PirPrice = 1150;
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 20) {
                                          (s as any).PirQuality = 3;
                                          (s as any).PirPrice = 1150;
                                        } else {
                                          if (((s as any).locArgs?.[0] ?? 0) === 21) {
                                            (s as any).PirQuality = 3;
                                            (s as any).PirPrice = 1150;
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 22) {
                                              (s as any).PirQuality = 3;
                                              (s as any).PirPrice = 1150;
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 23) {
                                                (s as any).PirQuality = 3;
                                                (s as any).PirPrice = 1150;
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 24) {
                                                  (s as any).PirQuality = 3;
                                                  (s as any).PirPrice = 1150;
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
        }
      }
    }
  }
  scene.build();
}

export const _attributes_piercing_ears: LocationDef = {
  name: '_attributes_piercing_ears',
  region: 'other',
  enter: enter,
};
