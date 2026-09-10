// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).locat['Lariska'] = 0;
  (s as any).locat['Lariska'] = 0;
  (s as any).locat['Lari_athome'] = 0;
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0) {
    if (((s as any).week ?? 0) <= 5) {
      if ((((s as any).hour ?? 0) < 6)  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45)) {
        (s as any).locat['Lariska'] = 1;
        (s as any).locat['Lari_athome'] = 0;
      } else {
        (s as any).locat['Lariska'] = 2;
        (s as any).locat['Lari_athome'] = 1;
        if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15) {
          (s as any).locat['Lariska'] = 3;
          (s as any).locat['Lari_athome'] = 1;
        } else {
          (s as any).locat['Lariska'] = 4;
          (s as any).locat['Lari_athome'] = 0;
          if (((s as any).hour ?? 0) < 14) {
            (s as any).locat['Lariska'] = 5;
            (s as any).locat['Lari_athome'] = 0;
          } else {
            if ((((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4)  &&  (((s as any).month ?? 0) >= 10  ||  ((s as any).month ?? 0) <= 5)) {
              (s as any).locat['Lariska'] = 6;
              (s as any).locat['Lari_athome'] = 0;
            } else {
              (s as any).locat['Lariska'] = 7;
              (s as any).locat['Lari_athome'] = 0;
              if (((s as any).lernHome ?? 0) > 0) {
                (s as any).locat['Lariska'] = 8;
                (s as any).locat['Lari_athome'] = 1;
              } else {
                (s as any).locat['Lariska'] = 22;
                (s as any).locat['Lari_athome'] = 1;
              }
            }
            if (((s as any).hour ?? 0) < 18) {
              if (((s as any).cheerleaders_on ?? 0) === 1) {
                (s as any).locat['Lariska'] = 22;
                (s as any).locat['Lari_athome'] = 1;
              } else {
                (s as any).locat['Lariska'] = 9;
                (s as any).locat['Lari_athome'] = 0;
              }
            } else {
              (s as any).locat['Lariska'] = 11;
              (s as any).locat['Lari_athome'] = 1;
              if (((s as any).hour ?? 0) <= 19) {
                (s as any).locat['Lariska'] = 12;
                (s as any).locat['Lari_athome'] = 1;
              } else {
                (s as any).locat['Lariska'] = 13;
                (s as any).locat['Lari_athome'] = 0;
                if (((s as any).hour ?? 0) < 21) {
                  (s as any).locat['Lariska'] = 14;
                  (s as any).locat['Lari_athome'] = 1;
                } else {
                  (s as any).locat['Lariska'] = 15;
                  (s as any).locat['Lari_athome'] = 0;
                }
                if (((s as any).week ?? 0) === 6) {
                  if (((s as any).hour ?? 0) < 9) {
                    (s as any).locat['Lariska'] = 1;
                    (s as any).locat['Lari_athome'] = 0;
                  } else {
                    (s as any).locat['Lariska'] = 3;
                    (s as any).locat['Lari_athome'] = 1;
                    if ((((s as any).hour ?? 0) < 11)  ||  (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15)) {
                      (s as any).locat['Lariska'] = 16;
                      (s as any).locat['Lari_athome'] = 1;
                    } else {
                      (s as any).locat['Lariska'] = 13;
                      (s as any).locat['Lari_athome'] = 1;
                      if (((s as any).hour ?? 0) < 12) {
                        (s as any).locat['Lariska'] = 2;
                        (s as any).locat['Lari_athome'] = 1;
                      } else {
                        (s as any).locat['Lariska'] = 22;
                        (s as any).locat['Lari_athome'] = 1;
                        if ((((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) > 45)  ||  ((s as any).hour ?? 0) < 22) {
                          if (((s as any).vballVars ?? 0)?.['lariska_team'] === 1) {
                            (s as any).locat['Lariska'] = 21;
                            (s as any).locat['Lari_athome'] = 0;
                          } else {
                            (s as any).locat['Lariska'] = 14;
                            (s as any).locat['Lari_athome'] = 1;
                          }
                        } else {
                          (s as any).locat['Lariska'] = 12;
                          (s as any).locat['Lari_athome'] = 1;
                          if (((s as any).hour ?? 0) < 23) {
                            (s as any).locat['Lariska'] = 13;
                            (s as any).locat['Lari_athome'] = 1;
                          } else {
                            (s as any).locat['Lariska'] = 15;
                            (s as any).locat['Lari_athome'] = 0;
                          }
                          if (((s as any).hour ?? 0) < 9) {
                            (s as any).locat['Lariska'] = 1;
                            (s as any).locat['Lari_athome'] = 0;
                          } else {
                            (s as any).locat['Lariska'] = 3;
                            (s as any).locat['Lari_athome'] = 1;
                            if ((((s as any).hour ?? 0) < 11)  ||  (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15)) {
                              (s as any).locat['Lariska'] = 16;
                              (s as any).locat['Lari_athome'] = 1;
                            } else {
                              (s as any).locat['Lariska'] = 13;
                              (s as any).locat['Lari_athome'] = 0;
                              if (((s as any).hour ?? 0) < 12) {
                                (s as any).locat['Lariska'] = 2;
                                (s as any).locat['Lari_athome'] = 1;
                              } else {
                                (s as any).locat['Lariska'] = 17;
                                (s as any).locat['Lari_athome'] = 1;
                                if (((s as any).hour ?? 0) < 13) {
                                  (s as any).locat['Lariska'] = 18;
                                  (s as any).locat['Lari_athome'] = 1;
                                } else {
                                  (s as any).locat['Lariska'] = 19;
                                  (s as any).locat['Lari_athome'] = 1;
                                  if (((s as any).hour ?? 0) < 14) {
                                    (s as any).locat['Lariska'] = 20;
                                    (s as any).locat['Lari_athome'] = 1;
                                  } else {
                                    (s as any).locat['Lariska'] = 22;
                                    (s as any).locat['Lari_athome'] = 1;
                                    if (((s as any).hour ?? 0) < 22) {
                                      (s as any).locat['Lariska'] = 14;
                                      (s as any).locat['Lari_athome'] = 1;
                                    } else {
                                      (s as any).locat['Lariska'] = 13;
                                      (s as any).locat['Lari_athome'] = 0;
                                      if (((s as any).hour ?? 0) < 23) {
                                        (s as any).locat['Lariska'] = 13;
                                        (s as any).locat['Lari_athome'] = 0;
                                      } else {
                                        (s as any).locat['Lariska'] = 15;
                                        (s as any).locat['Lari_athome'] = 0;
                                      }
                                    }
                                    if (((s as any).week ?? 0) <= 6) {
                                      if (((s as any).hour ?? 0) < 9) {
                                        (s as any).locat['Lariska'] = 1;
                                        (s as any).locat['Lari_athome'] = 0;
                                      } else {
                                        (s as any).locat['Lariska'] = 3;
                                        (s as any).locat['Lari_athome'] = 1;
                                        if ((((s as any).hour ?? 0) < 11)  ||  (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15)) {
                                          (s as any).locat['Lariska'] = 16;
                                          (s as any).locat['Lari_athome'] = 1;
                                        } else {
                                          (s as any).locat['Lariska'] = 13;
                                          (s as any).locat['Lari_athome'] = 0;
                                          if (((s as any).hour ?? 0) < 12) {
                                            (s as any).locat['Lariska'] = 2;
                                            (s as any).locat['Lari_athome'] = 1;
                                          } else {
                                            (s as any).locat['Lariska'] = 22;
                                            (s as any).locat['Lari_athome'] = 1;
                                            if (((s as any).hour ?? 0) < 22) {
                                              (s as any).locat['Lariska'] = 14;
                                              (s as any).locat['Lari_athome'] = 1;
                                            } else {
                                              (s as any).locat['Lariska'] = 12;
                                              (s as any).locat['Lari_athome'] = 1;
                                              if (((s as any).hour ?? 0) < 23) {
                                                (s as any).locat['Lariska'] = 13;
                                                if (((s as any).week ?? 0) === 6) {
                                                  (s as any).locat['Lari_athome'] = 1;
                                                } else {
                                                  (s as any).locat['Lari_athome'] = 0;
                                                }
                                              } else {
                                                (s as any).locat['Lariska'] = 15;
                                                (s as any).locat['Lari_athome'] = 0;
                                              }
                                              if (((s as any).hour ?? 0) < 9) {
                                                (s as any).locat['Lariska'] = 1;
                                                (s as any).locat['Lari_athome'] = 0;
                                              } else {
                                                (s as any).locat['Lariska'] = 3;
                                                (s as any).locat['Lari_athome'] = 1;
                                                if ((((s as any).hour ?? 0) < 11)  ||  (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 15)) {
                                                  (s as any).locat['Lariska'] = 16;
                                                  (s as any).locat['Lari_athome'] = 1;
                                                } else {
                                                  (s as any).locat['Lariska'] = 13;
                                                  (s as any).locat['Lari_athome'] = 1;
                                                  if (((s as any).hour ?? 0) < 12) {
                                                    (s as any).locat['Lariska'] = 2;
                                                    (s as any).locat['Lari_athome'] = 1;
                                                  } else {
                                                    (s as any).locat['Lariska'] = 17;
                                                    (s as any).locat['Lari_athome'] = 1;
                                                    if (((s as any).hour ?? 0) < 13) {
                                                      (s as any).locat['Lariska'] = 18;
                                                      (s as any).locat['Lari_athome'] = 1;
                                                    } else {
                                                      (s as any).locat['Lariska'] = 19;
                                                      (s as any).locat['Lari_athome'] = 1;
                                                      if (((s as any).hour ?? 0) < 14) {
                                                        (s as any).locat['Lariska'] = 20;
                                                        (s as any).locat['Lari_athome'] = 1;
                                                      } else {
                                                        (s as any).locat['Lariska'] = 22;
                                                        (s as any).locat['Lari_athome'] = 1;
                                                        if (((s as any).hour ?? 0) < 22) {
                                                          (s as any).locat['Lariska'] = 14;
                                                          (s as any).locat['Lari_athome'] = 1;
                                                        } else {
                                                          (s as any).locat['Lariska'] = 12;
                                                          (s as any).locat['Lari_athome'] = 1;
                                                          if (((s as any).hour ?? 0) < 23) {
                                                            (s as any).locat['Lariska'] = 13;
                                                            (s as any).locat['Lari_athome'] = 1;
                                                          } else {
                                                            (s as any).locat['Lariska'] = 15;
                                                            (s as any).locat['Lari_athome'] = 0;
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

export const lariska_schedule: LocationDef = {
  name: 'lariska_schedule',
  region: 'other',
  enter: enter,
};
