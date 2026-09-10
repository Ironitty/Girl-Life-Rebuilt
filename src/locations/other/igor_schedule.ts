// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).locat['igor'] = 0;
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (!((s as any).kanikuli ?? 0))) {
    if (((s as any).week ?? 0) <= 5) {
      if ((((s as any).hour ?? 0) < 6)  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45)) {
        (s as any).locat['igor'] = 1;
      } else {
        (s as any).locat['igor'] = 2;
        if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 15) {
          (s as any).locat['igor'] = 3;
        } else {
          (s as any).locat['igor'] = 4;
          if (((s as any).hour ?? 0) < 14) {
            (s as any).locat['igor'] = 5;
          } else {
            (s as any).locat['igor'] = 6;
            if (((s as any).hour ?? 0) < 20) {
              (s as any).locat['igor'] = 7;
            } else {
              if (((s as any).week ?? 0) === 5) {
                (s as any).locat['igor'] = 8;
              } else {
                (s as any).locat['igor'] = 7;
              }
              if (((s as any).week ?? 0) === 5) {
                (s as any).locat['igor'] = 8;
              } else {
                (s as any).locat['igor'] = 9;
              }
            }
            if (((s as any).week ?? 0) === 6) {
              if (((s as any).IgorQW ?? 0)?.['DimaNos_day'] === ((s as any).daystart ?? 0)) {
                (s as any).locat['igor'] = 11;
              } else {
                (s as any).locat['igor'] = 1;
                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                  (s as any).locat['igor'] = 2;
                } else {
                  (s as any).locat['igor'] = 3;
                  if (((s as any).hour ?? 0) < 20) {
                    (s as any).locat['igor'] = 7;
                  } else {
                    (s as any).locat['igor'] = 8;
                  }
                  if (((s as any).hour ?? 0) < 8) {
                    (s as any).locat['igor'] = 1;
                  } else {
                    (s as any).locat['igor'] = 2;
                    if (((s as any).hour ?? 0) < 9) {
                      (s as any).locat['igor'] = 3;
                    } else {
                      (s as any).locat['igor'] = 7;
                      if (((s as any).hour ?? 0) < 15) {
                        if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
                          (s as any).locat['igor'] = 10;
                        } else {
                          (s as any).locat['igor'] = 7;
                        }
                      } else {
                        (s as any).locat['igor'] = 7;
                        (s as any).locat['igor'] = 9;
                      }
                    }
                    if (((s as any).week ?? 0) <= 5) {
                      if ((((s as any).hour ?? 0) < 7)  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45)) {
                        (s as any).locat['igor'] = 1;
                      } else {
                        (s as any).locat['igor'] = 2;
                        if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) <= 30) {
                          (s as any).locat['igor'] = 3;
                        } else {
                          (s as any).locat['igor'] = 7;
                          if (((s as any).hour ?? 0) < 15) {
                            if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).week ?? 0) % 2 === 0) {
                              (s as any).locat['igor'] = 10;
                            } else {
                              (s as any).locat['igor'] = 7;
                            }
                          } else {
                            (s as any).locat['igor'] = 7;
                            if (((s as any).hour ?? 0) < 23) {
                              if (((s as any).week ?? 0) === 5) {
                                (s as any).locat['igor'] = 8;
                              } else {
                                (s as any).locat['igor'] = 7;
                              }
                            } else {
                              if (((s as any).week ?? 0) === 5) {
                                (s as any).locat['igor'] = 8;
                              } else {
                                (s as any).locat['igor'] = 9;
                              }
                            }
                            if (((s as any).week ?? 0) === 6) {
                              if (((s as any).IgorQW ?? 0)?.['DimaNos_day'] === ((s as any).daystart ?? 0)) {
                                (s as any).locat['igor'] = 11;
                              } else {
                                (s as any).locat['igor'] = 1;
                                if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
                                  (s as any).locat['igor'] = 2;
                                } else {
                                  (s as any).locat['igor'] = 3;
                                  if (((s as any).hour ?? 0) < 12) {
                                    (s as any).locat['igor'] = 7;
                                  } else {
                                    if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
                                      (s as any).locat['igor'] = 10;
                                    } else {
                                      (s as any).locat['igor'] = 7;
                                    }
                                    if (((s as any).hour ?? 0) < 20) {
                                      (s as any).locat['igor'] = 7;
                                    } else {
                                      (s as any).locat['igor'] = 8;
                                    }
                                    if (((s as any).hour ?? 0) < 8) {
                                      (s as any).locat['igor'] = 1;
                                    } else {
                                      (s as any).locat['igor'] = 2;
                                      if (((s as any).hour ?? 0) < 9) {
                                        (s as any).locat['igor'] = 3;
                                      } else {
                                        (s as any).locat['igor'] = 7;
                                        (s as any).locat['igor'] = 9;
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

export const igor_schedule: LocationDef = {
  name: 'igor_schedule',
  region: 'other',
  enter: enter,
};
