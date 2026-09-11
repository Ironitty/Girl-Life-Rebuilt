// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 2026/05/09
  // TODO-QSP: PanPrice ~ 300 * (20 + PanQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 1: 300
  // TODO-QSP: 2: 350
  // TODO-QSP: PanQuality ranges from 1 to 2
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).PanType = 1;
    (s as any).PanFun = 1;
    (s as any).PanQuality = 1;
    (s as any).PanStrength = 40000;
    (s as any).PanThinness = 2;
    (s as any).PanPrice = 300;
    (s as any).underwear['pair'] = 1;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).PanType = 1;
      (s as any).PanFun = 1;
      (s as any).PanQuality = 2;
      (s as any).PanStrength = 60000;
      (s as any).PanThinness = 2;
      (s as any).PanPrice = 350;
      (s as any).underwear['pair'] = 2;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).PanType = 1;
        (s as any).PanFun = 1;
        (s as any).PanQuality = 1;
        (s as any).PanStrength = 40000;
        (s as any).PanThinness = 2;
        (s as any).PanPrice = 300;
        (s as any).underwear['pair'] = 3;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).PanType = 1;
          (s as any).PanFun = 1;
          (s as any).PanQuality = 2;
          (s as any).PanStrength = 60000;
          (s as any).PanThinness = 2;
          (s as any).PanPrice = 350;
          (s as any).underwear['pair'] = 4;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).PanType = 1;
            (s as any).PanFun = 1;
            (s as any).PanQuality = 1;
            (s as any).PanStrength = 40000;
            (s as any).PanThinness = 2;
            (s as any).PanPrice = 300;
            (s as any).underwear['pair'] = 5;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).PanType = 1;
              (s as any).PanFun = 1;
              (s as any).PanQuality = 1;
              (s as any).PanStrength = 40000;
              (s as any).PanThinness = 2;
              (s as any).PanPrice = 300;
              (s as any).underwear['pair'] = 6;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).PanType = 2;
                (s as any).PanFun = 1;
                (s as any).PanQuality = 1;
                (s as any).PanStrength = 40000;
                (s as any).PanThinness = 2;
                (s as any).PanPrice = 300;
                (s as any).underwear['pair'] = 7;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).PanType = 1;
                  (s as any).PanFun = 1;
                  (s as any).PanQuality = 2;
                  (s as any).PanStrength = 60000;
                  (s as any).PanThinness = 2;
                  (s as any).PanPrice = 350;
                  (s as any).underwear['pair'] = 8;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).PanType = 1;
                    (s as any).PanFun = 1;
                    (s as any).PanQuality = 2;
                    (s as any).PanStrength = 60000;
                    (s as any).PanThinness = 2;
                    (s as any).PanPrice = 350;
                    (s as any).underwear['pair'] = 9;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).PanType = 1;
                      (s as any).PanFun = 1;
                      (s as any).PanQuality = 1;
                      (s as any).PanStrength = 40000;
                      (s as any).PanThinness = 2;
                      (s as any).PanPrice = 300;
                      (s as any).underwear['pair'] = 10;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).PanType = 1;
                        (s as any).PanFun = 1;
                        (s as any).PanQuality = 1;
                        (s as any).PanStrength = 40000;
                        (s as any).PanThinness = 2;
                        (s as any).PanPrice = 300;
                        (s as any).underwear['pair'] = 11;
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).PanType = 1;
                          (s as any).PanFun = 1;
                          (s as any).PanQuality = 1;
                          (s as any).PanStrength = 40000;
                          (s as any).PanThinness = 2;
                          (s as any).PanPrice = 300;
                          (s as any).underwear['pair'] = 12;
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).PanType = 1;
                            (s as any).PanFun = 1;
                            (s as any).PanQuality = 1;
                            (s as any).PanStrength = 40000;
                            (s as any).PanThinness = 2;
                            (s as any).PanPrice = 300;
                            (s as any).underwear['pair'] = 13;
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).PanType = 1;
                              (s as any).PanFun = 1;
                              (s as any).PanQuality = 2;
                              (s as any).PanStrength = 60000;
                              (s as any).PanThinness = 2;
                              (s as any).PanPrice = 350;
                              (s as any).underwear['pair'] = 14;
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 15) {
                                (s as any).PanType = 2;
                                (s as any).PanFun = 1;
                                (s as any).PanQuality = 2;
                                (s as any).PanStrength = 60000;
                                (s as any).PanThinness = 2;
                                (s as any).PanPrice = 350;
                                (s as any).underwear['pair'] = 15;
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 16) {
                                  (s as any).PanType = 1;
                                  (s as any).PanFun = 1;
                                  (s as any).PanQuality = 1;
                                  (s as any).PanStrength = 40000;
                                  (s as any).PanThinness = 2;
                                  (s as any).PanPrice = 300;
                                  (s as any).underwear['pair'] = 16;
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 17) {
                                    (s as any).PanType = 1;
                                    (s as any).PanFun = 1;
                                    (s as any).PanMaterial = 6;
                                    (s as any).PanQuality = 2;
                                    (s as any).PanStrength = 60000;
                                    (s as any).PanThinness = 3;
                                    (s as any).PanPrice = 350;
                                    (s as any).underwear['pair'] = 17;
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 18) {
                                      (s as any).PanType = 1;
                                      (s as any).PanFun = 1;
                                      (s as any).PanQuality = 2;
                                      (s as any).PanStrength = 60000;
                                      (s as any).PanThinness = 2;
                                      (s as any).PanPrice = 350;
                                      (s as any).underwear['pair'] = 18;
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 19) {
                                        (s as any).PanType = 1;
                                        (s as any).PanFun = 1;
                                        (s as any).PanMaterial = 6;
                                        (s as any).PanQuality = 2;
                                        (s as any).PanStrength = 60000;
                                        (s as any).PanThinness = 3;
                                        (s as any).PanPrice = 350;
                                        (s as any).underwear['pair'] = 19;
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 20) {
                                          (s as any).PanType = 1;
                                          (s as any).PanFun = 1;
                                          (s as any).PanQuality = 1;
                                          (s as any).PanStrength = 40000;
                                          (s as any).PanThinness = 2;
                                          (s as any).PanPrice = 300;
                                        } else {
                                          if (((s as any).locArgs?.[0] ?? 0) === 21) {
                                            (s as any).PanType = 1;
                                            (s as any).PanFun = 1;
                                            (s as any).PanQuality = 1;
                                            (s as any).PanStrength = 40000;
                                            (s as any).PanThinness = 2;
                                            (s as any).PanPrice = 300;
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 22) {
                                              (s as any).PanType = 1;
                                              (s as any).PanFun = 1;
                                              (s as any).PanQuality = 2;
                                              (s as any).PanStrength = 60000;
                                              (s as any).PanThinness = 2;
                                              (s as any).PanPrice = 350;
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 23) {
                                                (s as any).PanType = 1;
                                                (s as any).PanFun = 1;
                                                (s as any).PanQuality = 2;
                                                (s as any).PanStrength = 60000;
                                                (s as any).PanThinness = 2;
                                                (s as any).PanPrice = 350;
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 24) {
                                                  (s as any).PanType = 1;
                                                  (s as any).PanFun = 1;
                                                  (s as any).PanQuality = 1;
                                                  (s as any).PanStrength = 40000;
                                                  (s as any).PanThinness = 2;
                                                  (s as any).PanPrice = 300;
                                                } else {
                                                  if (((s as any).locArgs?.[0] ?? 0) === 25) {
                                                    (s as any).PanType = 1;
                                                    (s as any).PanFun = 1;
                                                    (s as any).PanQuality = 1;
                                                    (s as any).PanStrength = 40000;
                                                    (s as any).PanThinness = 2;
                                                    (s as any).PanPrice = 300;
                                                  } else {
                                                    if (((s as any).locArgs?.[0] ?? 0) === 26) {
                                                      (s as any).PanType = 1;
                                                      (s as any).PanFun = 1;
                                                      (s as any).PanQuality = 1;
                                                      (s as any).PanStrength = 40000;
                                                      (s as any).PanThinness = 2;
                                                      (s as any).PanPrice = 300;
                                                    } else {
                                                      if (((s as any).locArgs?.[0] ?? 0) === 27) {
                                                        (s as any).PanType = 1;
                                                        (s as any).PanFun = 1;
                                                        (s as any).PanQuality = 2;
                                                        (s as any).PanStrength = 60000;
                                                        (s as any).PanThinness = 2;
                                                        (s as any).PanPrice = 350;
                                                      } else {
                                                        if (((s as any).locArgs?.[0] ?? 0) === 28) {
                                                          (s as any).PanType = 1;
                                                          (s as any).PanFun = 1;
                                                          (s as any).PanMaterial = 6;
                                                          (s as any).PanQuality = 2;
                                                          (s as any).PanStrength = 60000;
                                                          (s as any).PanThinness = 2;
                                                          (s as any).PanPrice = 350;
                                                        } else {
                                                          if (((s as any).locArgs?.[0] ?? 0) === 29) {
                                                            (s as any).PanType = 1;
                                                            (s as any).PanFun = 1;
                                                            (s as any).PanQuality = 2;
                                                            (s as any).PanStrength = 60000;
                                                            (s as any).PanThinness = 2;
                                                            (s as any).PanPrice = 350;
                                                          } else {
                                                            if (((s as any).locArgs?.[0] ?? 0) === 30) {
                                                              (s as any).PanType = 1;
                                                              (s as any).PanFun = 1;
                                                              (s as any).PanQuality = 1;
                                                              (s as any).PanStrength = 40000;
                                                              (s as any).PanThinness = 3;
                                                              (s as any).PanPrice = 300;
                                                            } else {
                                                              if (((s as any).locArgs?.[0] ?? 0) === 31) {
                                                                (s as any).PanType = 1;
                                                                (s as any).PanFun = 1;
                                                                (s as any).PanQuality = 2;
                                                                (s as any).PanStrength = 60000;
                                                                (s as any).PanThinness = 2;
                                                                (s as any).PanPrice = 350;
                                                              } else {
                                                                if (((s as any).locArgs?.[0] ?? 0) === 32) {
                                                                  (s as any).PanType = 1;
                                                                  (s as any).PanFun = 1;
                                                                  (s as any).PanQuality = 1;
                                                                  (s as any).PanStrength = 40000;
                                                                  (s as any).PanThinness = 2;
                                                                  (s as any).PanPrice = 300;
                                                                } else {
                                                                  if (((s as any).locArgs?.[0] ?? 0) === 33) {
                                                                    (s as any).PanType = 1;
                                                                    (s as any).PanFun = 1;
                                                                    (s as any).PanQuality = 1;
                                                                    (s as any).PanStrength = 40000;
                                                                    (s as any).PanThinness = 2;
                                                                    (s as any).PanPrice = 300;
                                                                  } else {
                                                                    if (((s as any).locArgs?.[0] ?? 0) === 34) {
                                                                      (s as any).PanType = 1;
                                                                      (s as any).PanFun = 1;
                                                                      (s as any).PanMaterial = 6;
                                                                      (s as any).PanQuality = 2;
                                                                      (s as any).PanStrength = 60000;
                                                                      (s as any).PanThinness = 2;
                                                                      (s as any).PanPrice = 350;
                                                                    } else {
                                                                      if (((s as any).locArgs?.[0] ?? 0) === 35) {
                                                                        (s as any).PanType = 1;
                                                                        (s as any).PanFun = 1;
                                                                        (s as any).PanQuality = 1;
                                                                        (s as any).PanStrength = 40000;
                                                                        (s as any).PanThinness = 2;
                                                                        (s as any).PanPrice = 300;
                                                                      } else {
                                                                        if (((s as any).locArgs?.[0] ?? 0) === 36) {
                                                                          (s as any).PanType = 1;
                                                                          (s as any).PanFun = 1;
                                                                          (s as any).PanQuality = 1;
                                                                          (s as any).PanStrength = 40000;
                                                                          (s as any).PanThinness = 2;
                                                                          (s as any).PanPrice = 300;
                                                                        } else {
                                                                          if (((s as any).locArgs?.[0] ?? 0) === 37) {
                                                                            (s as any).PanType = 1;
                                                                            (s as any).PanFun = 1;
                                                                            (s as any).PanQuality = 2;
                                                                            (s as any).PanStrength = 60000;
                                                                            (s as any).PanThinness = 2;
                                                                            (s as any).PanPrice = 350;
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

export const _attributes_gm_panties: LocationDef = {
  name: '_attributes_gm_panties',
  region: 'other',
  enter: enter,
};
