// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: BraPrice ~ 750 * (20 + BraQuality) / 20
  // TODO-QSP: Rounded to 50
  // TODO-QSP: 4: 850
  // TODO-QSP: 5: 900
  // TODO-QSP: BraQuality ranges from 4 to 5
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).BraQuality = 4;
    (s as any).BraStrength = 100000;
    (s as any).BraMaterial = 6;
    (s as any).BraType = 3;
    (s as any).BraFun = 1;
    (s as any).BraThinness = 3;
    (s as any).BraPrice = 850;
    ((s as any).underwear ?? {})['pair'] = 1;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 2) {
      (s as any).BraQuality = 5;
      (s as any).BraStrength = 120000;
      (s as any).BraMaterial = 3;
      (s as any).BraType = 9;
      (s as any).BraFun = 1;
      (s as any).BraThinness = 4;
      (s as any).BraPrice = 900;
      ((s as any).underwear ?? {})['pair'] = 2;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 3) {
        (s as any).BraQuality = 5;
        (s as any).BraStrength = 120000;
        (s as any).BraMaterial = 6;
        (s as any).BraType = 5;
        (s as any).BraFun = 1;
        (s as any).BraThinness = 2;
        (s as any).BraPrice = 900;
        ((s as any).underwear ?? {})['pair'] = 3;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 4) {
          (s as any).BraQuality = 5;
          (s as any).BraStrength = 120000;
          (s as any).BraType = 9;
          (s as any).BraFun = 1;
          (s as any).BraThinness = 2;
          (s as any).BraPrice = 900;
          ((s as any).underwear ?? {})['pair'] = 4;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 5) {
            (s as any).BraQuality = 4;
            (s as any).BraStrength = 100000;
            (s as any).BraMaterial = 1;
            (s as any).BraType = 10;
            (s as any).BraFun = 1;
            (s as any).BraThinness = 2;
            (s as any).BraPrice = 850;
            ((s as any).underwear ?? {})['pair'] = 5;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 6) {
              (s as any).BraQuality = 5;
              (s as any).BraStrength = 120000;
              (s as any).BraMaterial = 6;
              (s as any).BraType = 9;
              (s as any).BraFun = 1;
              (s as any).BraThinness = 2;
              (s as any).BraPrice = 900;
              ((s as any).underwear ?? {})['pair'] = 6;
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 7) {
                (s as any).BraQuality = 4;
                (s as any).BraStrength = 100000;
                (s as any).BraMaterial = 6;
                (s as any).BraType = 4;
                (s as any).BraFun = 1;
                (s as any).BraThinness = 4;
                (s as any).BraPrice = 850;
                ((s as any).underwear ?? {})['pair'] = 7;
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 8) {
                  (s as any).BraQuality = 4;
                  (s as any).BraStrength = 100000;
                  (s as any).BraMaterial = 6;
                  (s as any).BraType = 1;
                  (s as any).BraFun = 1;
                  (s as any).BraThinness = 4;
                  (s as any).BraPrice = 850;
                  ((s as any).underwear ?? {})['pair'] = 8;
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 9) {
                    (s as any).BraQuality = 5;
                    (s as any).BraStrength = 120000;
                    (s as any).BraMaterial = 6;
                    (s as any).BraType = 1;
                    (s as any).BraFun = 1;
                    (s as any).BraThinness = 5;
                    (s as any).BraCover = 1;
                    (s as any).BraPrice = 900;
                    ((s as any).underwear ?? {})['pair'] = 9;
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 10) {
                      (s as any).BraQuality = 4;
                      (s as any).BraStrength = 100000;
                      (s as any).BraMaterial = 6;
                      (s as any).BraType = 1;
                      (s as any).BraFun = 1;
                      (s as any).BraThinness = 4;
                      (s as any).BraPrice = 850;
                      ((s as any).underwear ?? {})['pair'] = 10;
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 11) {
                        (s as any).BraQuality = 4;
                        (s as any).BraStrength = 100000;
                        (s as any).BraType = 9;
                        (s as any).BraFun = 1;
                        (s as any).BraThinness = 2;
                        (s as any).BraPrice = 850;
                        ((s as any).underwear ?? {})['pair'] = 11;
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 12) {
                          (s as any).BraQuality = 4;
                          (s as any).BraStrength = 100000;
                          (s as any).BraMaterial = 6;
                          (s as any).BraType = 1;
                          (s as any).BraFun = 1;
                          (s as any).BraThinness = 4;
                          (s as any).BraPrice = 850;
                          ((s as any).underwear ?? {})['pair'] = 12;
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 13) {
                            (s as any).BraQuality = 5;
                            (s as any).BraStrength = 120000;
                            (s as any).BraMaterial = 6;
                            (s as any).BraType = 1;
                            (s as any).BraFun = 1;
                            (s as any).BraThinness = 4;
                            (s as any).BraPrice = 900;
                            ((s as any).underwear ?? {})['pair'] = 13;
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 14) {
                              (s as any).BraQuality = 5;
                              (s as any).BraStrength = 120000;
                              (s as any).BraType = 4;
                              (s as any).BraFun = 1;
                              (s as any).BraThinness = 2;
                              (s as any).BraPrice = 900;
                              ((s as any).underwear ?? {})['pair'] = 14;
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 15) {
                                (s as any).BraQuality = 5;
                                (s as any).BraStrength = 120000;
                                (s as any).BraMaterial = 6;
                                (s as any).BraType = 9;
                                (s as any).BraFun = 1;
                                (s as any).BraThinness = 2;
                                (s as any).BraPrice = 900;
                                ((s as any).underwear ?? {})['pair'] = 15;
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 16) {
                                  (s as any).BraQuality = 4;
                                  (s as any).BraStrength = 100000;
                                  (s as any).BraType = 1;
                                  (s as any).BraFun = 1;
                                  (s as any).BraThinness = 2;
                                  (s as any).BraPrice = 850;
                                  ((s as any).underwear ?? {})['pair'] = 16;
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 17) {
                                    (s as any).BraQuality = 5;
                                    (s as any).BraStrength = 120000;
                                    (s as any).BraMaterial = 6;
                                    (s as any).BraType = 7;
                                    (s as any).BraFun = 1;
                                    (s as any).BraThinness = 4;
                                    (s as any).BraPrice = 900;
                                    ((s as any).underwear ?? {})['pair'] = 17;
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 18) {
                                      (s as any).BraQuality = 4;
                                      (s as any).BraStrength = 100000;
                                      (s as any).BraType = 5;
                                      (s as any).BraFun = 1;
                                      (s as any).BraThinness = 2;
                                      (s as any).BraPrice = 850;
                                      ((s as any).underwear ?? {})['pair'] = 18;
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 19) {
                                        (s as any).BraQuality = 5;
                                        (s as any).BraStrength = 120000;
                                        (s as any).BraMaterial = 6;
                                        (s as any).BraType = 9;
                                        (s as any).BraFun = 1;
                                        (s as any).BraThinness = 2;
                                        (s as any).BraPrice = 900;
                                        ((s as any).underwear ?? {})['pair'] = 19;
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 20) {
                                          (s as any).BraQuality = 5;
                                          (s as any).BraStrength = 120000;
                                          (s as any).BraMaterial = 6;
                                          (s as any).BraType = 9;
                                          (s as any).BraFun = 1;
                                          (s as any).BraThinness = 2;
                                          (s as any).BraPrice = 900;
                                          ((s as any).underwear ?? {})['pair'] = 20;
                                        } else {
                                          if (((s as any).locArgs?.[0] ?? 0) === 21) {
                                            (s as any).BraQuality = 4;
                                            (s as any).BraStrength = 100000;
                                            (s as any).BraMaterial = 6;
                                            (s as any).BraType = 9;
                                            (s as any).BraFun = 1;
                                            (s as any).BraThinness = 2;
                                            (s as any).BraPrice = 850;
                                            ((s as any).underwear ?? {})['pair'] = 21;
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 22) {
                                              (s as any).BraQuality = 4;
                                              (s as any).BraStrength = 100000;
                                              (s as any).BraType = 4;
                                              (s as any).BraFun = 1;
                                              (s as any).BraThinness = 2;
                                              (s as any).BraPrice = 850;
                                              ((s as any).underwear ?? {})['pair'] = 22;
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 23) {
                                                (s as any).BraQuality = 5;
                                                (s as any).BraStrength = 120000;
                                                (s as any).BraFun = 1;
                                                (s as any).BraThinness = 2;
                                                (s as any).BraPrice = 900;
                                                ((s as any).underwear ?? {})['pair'] = 23;
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 24) {
                                                  (s as any).BraQuality = 4;
                                                  (s as any).BraStrength = 100000;
                                                  (s as any).BraType = 1;
                                                  (s as any).BraFun = 1;
                                                  (s as any).BraThinness = 2;
                                                  (s as any).BraPrice = 850;
                                                  ((s as any).underwear ?? {})['pair'] = 24;
                                                } else {
                                                  if (((s as any).locArgs?.[0] ?? 0) === 25) {
                                                    (s as any).BraQuality = 4;
                                                    (s as any).BraStrength = 100000;
                                                    (s as any).BraType = 1;
                                                    (s as any).BraFun = 1;
                                                    (s as any).BraThinness = 3;
                                                    (s as any).BraPrice = 850;
                                                    ((s as any).underwear ?? {})['pair'] = 25;
                                                  } else {
                                                    if (((s as any).locArgs?.[0] ?? 0) === 26) {
                                                      (s as any).BraQuality = 4;
                                                      (s as any).BraStrength = 100000;
                                                      (s as any).BraMaterial = 6;
                                                      (s as any).BraType = 9;
                                                      (s as any).BraFun = 1;
                                                      (s as any).BraThinness = 4;
                                                      (s as any).BraPrice = 850;
                                                      ((s as any).underwear ?? {})['pair'] = 26;
                                                    } else {
                                                      if (((s as any).locArgs?.[0] ?? 0) === 27) {
                                                        (s as any).BraQuality = 4;
                                                        (s as any).BraStrength = 100000;
                                                        (s as any).BraType = 1;
                                                        (s as any).BraFun = 1;
                                                        (s as any).BraThinness = 2;
                                                        (s as any).BraPrice = 850;
                                                        ((s as any).underwear ?? {})['pair'] = 27;
                                                      } else {
                                                        if (((s as any).locArgs?.[0] ?? 0) === 28) {
                                                          (s as any).BraQuality = 5;
                                                          (s as any).BraStrength = 120000;
                                                          (s as any).BraMaterial = 6;
                                                          (s as any).BraType = 9;
                                                          (s as any).BraFun = 1;
                                                          (s as any).BraThinness = 3;
                                                          (s as any).BraPrice = 900;
                                                          ((s as any).underwear ?? {})['pair'] = 28;
                                                        } else {
                                                          if (((s as any).locArgs?.[0] ?? 0) === 29) {
                                                            (s as any).BraQuality = 5;
                                                            (s as any).BraStrength = 120000;
                                                            (s as any).BraMaterial = 6;
                                                            (s as any).BraType = 9;
                                                            (s as any).BraFun = 1;
                                                            (s as any).BraThinness = 2;
                                                            (s as any).BraPrice = 900;
                                                            ((s as any).underwear ?? {})['pair'] = 29;
                                                          } else {
                                                            if (((s as any).locArgs?.[0] ?? 0) === 30) {
                                                              (s as any).BraQuality = 5;
                                                              (s as any).BraStrength = 120000;
                                                              (s as any).BraMaterial = 6;
                                                              (s as any).BraType = 9;
                                                              (s as any).BraFun = 1;
                                                              (s as any).BraThinness = 2;
                                                              (s as any).BraPrice = 900;
                                                              ((s as any).underwear ?? {})['pair'] = 30;
                                                            } else {
                                                              if (((s as any).locArgs?.[0] ?? 0) === 31) {
                                                                (s as any).BraQuality = 4;
                                                                (s as any).BraStrength = 100000;
                                                                (s as any).BraMaterial = 6;
                                                                (s as any).BraType = 9;
                                                                (s as any).BraFun = 1;
                                                                (s as any).BraThinness = 2;
                                                                (s as any).BraPrice = 850;
                                                                ((s as any).underwear ?? {})['pair'] = 31;
                                                              } else {
                                                                if (((s as any).locArgs?.[0] ?? 0) === 32) {
                                                                  (s as any).BraQuality = 4;
                                                                  (s as any).BraStrength = 100000;
                                                                  (s as any).BraMaterial = 6;
                                                                  (s as any).BraType = 1;
                                                                  (s as any).BraFun = 1;
                                                                  (s as any).BraThinness = 2;
                                                                  (s as any).BraPrice = 850;
                                                                  ((s as any).underwear ?? {})['pair'] = 32;
                                                                } else {
                                                                  if (((s as any).locArgs?.[0] ?? 0) === 33) {
                                                                    (s as any).BraQuality = 5;
                                                                    (s as any).BraStrength = 120000;
                                                                    (s as any).BraMaterial = 6;
                                                                    (s as any).BraFun = 1;
                                                                    (s as any).BraThinness = 2;
                                                                    (s as any).BraPrice = 900;
                                                                    ((s as any).underwear ?? {})['pair'] = 33;
                                                                  } else {
                                                                    if (((s as any).locArgs?.[0] ?? 0) === 34) {
                                                                      (s as any).BraQuality = 5;
                                                                      (s as any).BraStrength = 120000;
                                                                      (s as any).BraMaterial = 6;
                                                                      (s as any).BraType = 1;
                                                                      (s as any).BraFun = 1;
                                                                      (s as any).BraThinness = 2;
                                                                      (s as any).BraPrice = 900;
                                                                      ((s as any).underwear ?? {})['pair'] = 34;
                                                                    } else {
                                                                      if (((s as any).locArgs?.[0] ?? 0) === 35) {
                                                                        (s as any).BraQuality = 4;
                                                                        (s as any).BraStrength = 100000;
                                                                        (s as any).BraType = 9;
                                                                        (s as any).BraFun = 1;
                                                                        (s as any).BraThinness = 2;
                                                                        (s as any).BraPrice = 850;
                                                                        ((s as any).underwear ?? {})['pair'] = 35;
                                                                      } else {
                                                                        if (((s as any).locArgs?.[0] ?? 0) === 36) {
                                                                          (s as any).BraQuality = 4;
                                                                          (s as any).BraStrength = 100000;
                                                                          (s as any).BraMaterial = 6;
                                                                          (s as any).BraType = 5;
                                                                          (s as any).BraFun = 1;
                                                                          (s as any).BraThinness = 2;
                                                                          (s as any).BraPrice = 850;
                                                                          ((s as any).underwear ?? {})['pair'] = 36;
                                                                        } else {
                                                                          if (((s as any).locArgs?.[0] ?? 0) === 37) {
                                                                            (s as any).BraQuality = 4;
                                                                            (s as any).BraStrength = 100000;
                                                                            (s as any).BraMaterial = 6;
                                                                            (s as any).BraType = 9;
                                                                            (s as any).BraFun = 1;
                                                                            (s as any).BraThinness = 2;
                                                                            (s as any).BraPrice = 850;
                                                                            ((s as any).underwear ?? {})['pair'] = 37;
                                                                          } else {
                                                                            if (((s as any).locArgs?.[0] ?? 0) === 38) {
                                                                              (s as any).BraQuality = 5;
                                                                              (s as any).BraStrength = 120000;
                                                                              (s as any).BraMaterial = 3;
                                                                              (s as any).BraType = 10;
                                                                              (s as any).BraFun = 1;
                                                                              (s as any).BraThinness = 4;
                                                                              (s as any).BraCover = 1;
                                                                              (s as any).BraPrice = 900;
                                                                              ((s as any).underwear ?? {})['pair'] = 38;
                                                                            } else {
                                                                              if (((s as any).locArgs?.[0] ?? 0) === 39) {
                                                                                (s as any).BraQuality = 5;
                                                                                (s as any).BraStrength = 120000;
                                                                                (s as any).BraMaterial = 6;
                                                                                (s as any).BraType = 7;
                                                                                (s as any).BraFun = 1;
                                                                                (s as any).BraThinness = 2;
                                                                                (s as any).BraPrice = 900;
                                                                                ((s as any).underwear ?? {})['pair'] = 39;
                                                                              } else {
                                                                                if (((s as any).locArgs?.[0] ?? 0) === 40) {
                                                                                  (s as any).BraQuality = 4;
                                                                                  (s as any).BraStrength = 100000;
                                                                                  (s as any).BraMaterial = 6;
                                                                                  (s as any).BraType = 5;
                                                                                  (s as any).BraFun = 1;
                                                                                  (s as any).BraThinness = 2;
                                                                                  (s as any).BraPrice = 850;
                                                                                  ((s as any).underwear ?? {})['pair'] = 40;
                                                                                } else {
                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 41) {
                                                                                    (s as any).BraQuality = 4;
                                                                                    (s as any).BraStrength = 100000;
                                                                                    (s as any).BraMaterial = 6;
                                                                                    (s as any).BraType = 9;
                                                                                    (s as any).BraFun = 1;
                                                                                    (s as any).BraThinness = 2;
                                                                                    (s as any).BraPrice = 850;
                                                                                    ((s as any).underwear ?? {})['pair'] = 41;
                                                                                  } else {
                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 42) {
                                                                                      (s as any).BraQuality = 5;
                                                                                      (s as any).BraStrength = 120000;
                                                                                      (s as any).BraMaterial = 6;
                                                                                      (s as any).BraType = 1;
                                                                                      (s as any).BraFun = 1;
                                                                                      (s as any).BraThinness = 2;
                                                                                      (s as any).BraPrice = 900;
                                                                                      ((s as any).underwear ?? {})['pair'] = 42;
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
          }
        }
      }
    }
  }
  scene.build();
}

export const _attributes_fashionista_bras: LocationDef = {
  name: '_attributes_fashionista_bras',
  region: 'other',
  enter: enter,
};
