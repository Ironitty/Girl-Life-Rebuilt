// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).locat['Christina'] = 0;
  (s as any).locat['Chris_athome'] = 0;
  (s as any).locat['Silvestr'] = 0;
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0) {
    if (((s as any).week ?? 0) <= 5) {
      if ((((s as any).hour ?? 0) < 6)  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45)) {
        (s as any).locat['Christina'] = 1;
        (s as any).locat['Chris_athome'] = 0;
      } else {
        (s as any).locat['Christina'] = 2;
        (s as any).locat['Chris_athome'] = 1;
        if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15) {
          (s as any).locat['Christina'] = 3;
          (s as any).locat['Chris_athome'] = 1;
        } else {
          (s as any).locat['Christina'] = 4;
          (s as any).locat['Chris_athome'] = 0;
          if (((s as any).hour ?? 0) < 14) {
            (s as any).locat['Christina'] = 5;
            (s as any).locat['Chris_athome'] = 0;
          } else {
            if (((s as any).cheerleaders_on ?? 0) === 1) {
              if (((s as any).week ?? 0) === 5) {
                (s as any).locat['Christina'] = 7;
                (s as any).locat['Chris_athome'] = 0;
              } else {
                (s as any).locat['Christina'] = 6;
                (s as any).locat['Chris_athome'] = 0;
              }
            } else {
              (s as any).locat['Christina'] = 22;
              (s as any).locat['Chris_athome'] = 1;
            }
            if (((s as any).hour ?? 0) < 18) {
              if (((s as any).cheerleaders_on ?? 0) === 1) {
                (s as any).locat['Christina'] = 22;
                (s as any).locat['Chris_athome'] = 1;
              } else {
                (s as any).locat['Christina'] = 9;
                (s as any).locat['Chris_athome'] = 0;
              }
            } else {
              (s as any).locat['Christina'] = 11;
              (s as any).locat['Chris_athome'] = 1;
              if (((s as any).hour ?? 0) <= 19) {
                (s as any).locat['Christina'] = 12;
                (s as any).locat['Chris_athome'] = 1;
              } else {
                (s as any).locat['Christina'] = 13;
                (s as any).locat['Chris_athome'] = 0;
                if (((s as any).hour ?? 0) < 21) {
                  (s as any).locat['Christina'] = 14;
                  (s as any).locat['Chris_athome'] = 1;
                } else {
                  (s as any).locat['Christina'] = 22;
                  (s as any).locat['Chris_athome'] = 0;
                }
                if (((s as any).week ?? 0) === 6) {
                  if (((s as any).hour ?? 0) < 8) {
                    (s as any).locat['Christina'] = 1;
                    (s as any).locat['Chris_athome'] = 0;
                  } else {
                    (s as any).locat['Christina'] = 3;
                    (s as any).locat['Chris_athome'] = 1;
                    if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                      (s as any).locat['Christina'] = 13;
                      (s as any).locat['Chris_athome'] = 0;
                    } else {
                      (s as any).locat['Christina'] = 2;
                      (s as any).locat['Chris_athome'] = 1;
                      if (((s as any).hour ?? 0) === 9) {
                        (s as any).locat['Christina'] = 16;
                        (s as any).locat['Chris_athome'] = 0;
                      } else {
                        (s as any).locat['Christina'] = 21;
                        (s as any).locat['Chris_athome'] = 0;
                        if (((s as any).hour ?? 0) < 16) {
                          if (((s as any).month ?? 0) < 11  ||  ((s as any).month ?? 0) > 3) {
                            (s as any).locat['Christina'] = 10;
                            (s as any).locat['Chris_athome'] = 0;
                          } else {
                            (s as any).locat['Christina'] = 17;
                            (s as any).locat['Chris_athome'] = 1;
                          }
                        } else {
                          (s as any).locat['Christina'] = 9;
                          (s as any).locat['Chris_athome'] = 0;
                          if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                            (s as any).locat['Christina'] = 12;
                            (s as any).locat['Chris_athome'] = 1;
                          } else {
                            (s as any).locat['Christina'] = 13;
                            (s as any).locat['Chris_athome'] = 0;
                            if (((s as any).hour ?? 0) < 21) {
                              (s as any).locat['Christina'] = 14;
                              (s as any).locat['Chris_athome'] = 1;
                            } else {
                              (s as any).locat['Christina'] = 22;
                              (s as any).locat['Chris_athome'] = 0;
                            }
                            if (((s as any).hour ?? 0) < 8) {
                              (s as any).locat['Christina'] = 1;
                              (s as any).locat['Chris_athome'] = 0;
                            } else {
                              (s as any).locat['Christina'] = 3;
                              (s as any).locat['Chris_athome'] = 1;
                              if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                                (s as any).locat['Christina'] = 13;
                                (s as any).locat['Chris_athome'] = 0;
                              } else {
                                (s as any).locat['Christina'] = 2;
                                (s as any).locat['Chris_athome'] = 1;
                                if (((s as any).hour ?? 0) < 11) {
                                  (s as any).locat['Christina'] = 0;
                                  (s as any).locat['Chris_athome'] = 0;
                                } else {
                                  if (((s as any).month ?? 0) < 11  ||  ((s as any).month ?? 0) > 3) {
                                    (s as any).locat['Christina'] = 10;
                                    (s as any).locat['Chris_athome'] = 0;
                                  } else {
                                    (s as any).locat['Christina'] = 17;
                                    (s as any).locat['Chris_athome'] = 1;
                                  }
                                  if (((s as any).hour ?? 0) < 18) {
                                    (s as any).locat['Christina'] = 9;
                                    (s as any).locat['Chris_athome'] = 0;
                                  } else {
                                    (s as any).locat['Christina'] = 12;
                                    (s as any).locat['Chris_athome'] = 1;
                                    if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) > 30) {
                                      (s as any).locat['Christina'] = 13;
                                      (s as any).locat['Chris_athome'] = 0;
                                    } else {
                                      (s as any).locat['Christina'] = 14;
                                      (s as any).locat['Chris_athome'] = 1;
                                      (s as any).locat['Christina'] = 22;
                                      (s as any).locat['Chris_athome'] = 0;
                                    }
                                  }
                                  if (((s as any).hour ?? 0) < 8) {
                                    (s as any).locat['Christina'] = 1;
                                    (s as any).locat['Chris_athome'] = 0;
                                  } else {
                                    (s as any).locat['Christina'] = 3;
                                    (s as any).locat['Chris_athome'] = 1;
                                    if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
                                      (s as any).locat['Christina'] = 13;
                                      (s as any).locat['Chris_athome'] = 0;
                                    } else {
                                      (s as any).locat['Christina'] = 2;
                                      (s as any).locat['Chris_athome'] = 1;
                                      if (((s as any).hour ?? 0) < 11) {
                                        (s as any).locat['Christina'] = 0;
                                        (s as any).locat['Chris_athome'] = 0;
                                      } else {
                                        if (((s as any).month ?? 0) < 11  ||  ((s as any).month ?? 0) > 3) {
                                          (s as any).locat['Christina'] = 10;
                                          (s as any).locat['Chris_athome'] = 0;
                                        } else {
                                          (s as any).locat['Christina'] = 17;
                                          (s as any).locat['Chris_athome'] = 1;
                                        }
                                        if (((s as any).hour ?? 0) < 18) {
                                          (s as any).locat['Christina'] = 9;
                                          (s as any).locat['Chris_athome'] = 0;
                                        } else {
                                          (s as any).locat['Christina'] = 12;
                                          (s as any).locat['Chris_athome'] = 1;
                                          if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) > 30) {
                                            (s as any).locat['Christina'] = 13;
                                            (s as any).locat['Chris_athome'] = 1;
                                          } else {
                                            (s as any).locat['Christina'] = 14;
                                            (s as any).locat['Chris_athome'] = 1;
                                            (s as any).locat['Christina'] = 22;
                                            (s as any).locat['Chris_athome'] = 0;
                                          }
                                        }
                                        if (((s as any).slyQW ?? 0)?.['met'] === 2) {
                                          if (((s as any).week ?? 0) < 5  &&  ((s as any).week ?? 0) === 7) {
                                            if (((s as any).hour ?? 0) <= 2) {
                                              (s as any).locat['Silvestr'] = 7;
                                            } else {
                                              (s as any).locat['Silvestr'] = 1;
                                              if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) <= 30) {
                                                (s as any).locat['Silvestr'] = 2;
                                              } else {
                                                (s as any).locat['Silvestr'] = 3;
                                                if (((s as any).hour ?? 0) < 14) {
                                                  (s as any).locat['Silvestr'] = 4;
                                                } else {
                                                  (s as any).locat['Silvestr'] = 5;
                                                  if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                                                    (s as any).locat['Silvestr'] = 6;
                                                  } else {
                                                    (s as any).locat['Silvestr'] = 5;
                                                    (s as any).locat['Silvestr'] = 7;
                                                  }
                                                  if (((s as any).hour ?? 0) < 2) {
                                                    (s as any).locat['Silvestr'] = 8;
                                                  } else {
                                                    (s as any).locat['Silvestr'] = 1;
                                                    if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) <= 30) {
                                                      (s as any).locat['Silvestr'] = 2;
                                                    } else {
                                                      (s as any).locat['Silvestr'] = 3;
                                                      if (((s as any).hour ?? 0) < 14) {
                                                        (s as any).locat['Silvestr'] = 4;
                                                      } else {
                                                        (s as any).locat['Silvestr'] = 5;
                                                        if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) <= 30) {
                                                          (s as any).locat['Silvestr'] = 6;
                                                        } else {
                                                          (s as any).locat['Silvestr'] = 5;
                                                          (s as any).locat['Silvestr'] = 8;
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

export const Zvereva_schedule: LocationDef = {
  name: 'Zvereva_schedule',
  region: 'other',
  enter: enter,
};
