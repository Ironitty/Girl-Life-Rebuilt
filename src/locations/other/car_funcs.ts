import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHasCar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] > 0) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHasWreck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] > 0  &&  ((s as any).car ?? 0)?.['wreck'] === 1) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsHere(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).loc_arg ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).region ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).car ?? 0)?.['loc']  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).car ?? 0)?.['loc_arg']  &&  ((s as any).locArgs?.[3] ?? 0) === ((s as any).car ?? 0)?.['region']) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsHereArea(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).region ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).car ?? 0)?.['loc']  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).car ?? 0)?.['region']) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetloc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).loc_arg ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).region ?? 0);
  }
  if (!(s as any).car) (s as any).car = {}; (s as any).car['loc'] = ((s as any).locArgs?.[1] ?? 0);
  if (!(s as any).car) (s as any).car = {}; (s as any).car['loc_arg'] = ((s as any).locArgs?.[2] ?? 0);
  if (!(s as any).car) (s as any).car = {}; (s as any).car['region'] = ((s as any).locArgs?.[3] ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterAddCar(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'car_attributes', ARGS[1]
  if (!(s as any).car) (s as any).car = {}; (s as any).car['ID'] = qspUntranslated(s, "ARGS[1]", { location: "car_funcs" });
  if (!(s as any).car) (s as any).car = {}; (s as any).car['name'] = ((s as any).CarName ?? 0);
  if (!(s as any).car) (s as any).car = {}; (s as any).car['new_condition'] = ((s as any).CarCondition ?? 0);
  if (!(s as any).car) (s as any).car = {}; (s as any).car['current_condition'] = ((s as any).CarCondition ?? 0);
  if (!(s as any).car) (s as any).car = {}; (s as any).car['tank'] = ((s as any).CarTank ?? 0);
  if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = ((s as any).CarTank ?? 0);
  if (!(s as any).car) (s as any).car = {}; (s as any).car['wreck'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterGotoCar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gt $car['loc'], $car['loc_arg']
  // TODO-QSP: end
  scene.build();
}

function enterAvtonorm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] >= 1  &&  ((s as any).car ?? 0)?.['ID'] <= 8) {
    (s as any).normhour = 20;
  } else {
    if (((s as any).car ?? 0)?.['ID'] === 9) {
      (s as any).normhour = 15;
    } else {
      if (((s as any).car ?? 0)?.['ID'] === 10) {
        (s as any).normhour = 18;
      } else {
        if (((s as any).car ?? 0)?.['ID'] === 11  ||  ((s as any).car ?? 0)?.['ID'] === 12) {
          (s as any).normhour = 15;
        } else {
          if (((s as any).car ?? 0)?.['ID'] === 13  ||  ((s as any).car ?? 0)?.['ID'] >= 95) {
            (s as any).normhour = 50;
          }
        }
      }
    }
  }
  if (((s as any).car ?? 0)?.['wreck'] === 0) {
    (s as any).normneed = 0 - (((s as any).car ?? {})?.['current_condition'] - ((s as any).car ?? {})?.['new_condition']);
    (s as any).normrem = ((s as any).normneed ?? 0) * ((s as any).normhour ?? 0);
  } else {
    (s as any).normneed = 0 - (((s as any).car ?? {})?.['current_condition'] - ((s as any).car ?? {})?.['new_condition']);
    (s as any).normrem = (((s as any).normneed ?? 0) * ((s as any).normhour ?? 0)) * 8;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAvt(s: GameState, scene: SceneBuilder): void {
  (s as any).tehNT = ((s as any).car ?? 0)?.['potential_new_condition'];
  if ((!((s as any).tehNT ?? 0))) {
    (s as any).tehNT = 200;
  }
  (s as any).tehT = 0;
  if (((s as any).tehT ?? 0) < ((s as any).tehNT ?? 0) * 25 / 100) {
    (s as any).bupay = 100 * ((((s as any).carT ?? 0) === 1) ? (Math.floor(Math.random() * 351) + 150) : (Math.floor(Math.random() * 251) + 150));
  } else {
    if (((s as any).tehT ?? 0) < ((s as any).tehNT ?? 0) * 50 / 100) {
      (s as any).bupay = 100 * ((((s as any).carT ?? 0) === 1) ? (Math.floor(Math.random() * 301) + 350) : (Math.floor(Math.random() * 301) + 300));
    } else {
      if (((s as any).tehT ?? 0) < ((s as any).tehNT ?? 0) * 75 / 100) {
        (s as any).bupay = 100 * ((((s as any).carT ?? 0) === 1) ? (Math.floor(Math.random() * 701) + 600) : (Math.floor(Math.random() * 401) + 500));
      } else {
        (s as any).bupay = 100 * ((((s as any).carT ?? 0) === 1) ? (Math.floor(Math.random() * 801) + 1000) : (Math.floor(Math.random() * 201) + 800));
      }
    }
  }
  if (!(s as any).used_car) (s as any).used_car = {}; (s as any).used_car['' + String((s as any).autotraidF_carnum || '') + '_condition'] = ((s as any).tehT ?? 0);
  if (!(s as any).used_car) (s as any).used_car = {}; (s as any).used_car['' + String((s as any).autotraidF_carnum || '') + '_condition_desc'] = ((s as any).tehT_desc ?? 0);
  if (!(s as any).used_car) (s as any).used_car = {}; (s as any).used_car['' + String((s as any).autotraidF_carnum || '') + '_price'] = ((s as any).bupay ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterAvb(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] <= 0) {
    (s as any).bupay = 0;
  } else {
    if (((s as any).car ?? 0)?.['ID'] === 1) {
      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
        (s as any).bupay = (Math.floor(Math.random() * 101) + 100) * 100;
      } else {
        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
          (s as any).bupay = (Math.floor(Math.random() * 101) + 100) * 100;
        } else {
          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
            (s as any).bupay = (Math.floor(Math.random() * 201) + 200) * 100;
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
              (s as any).bupay = (Math.floor(Math.random() * 201) + 400) * 100;
            } else {
              (s as any).bupay = (Math.floor(Math.random() * 501) + 500) * 100;
            }
          }
        }
      }
    } else {
      if (((s as any).car ?? 0)?.['ID'] <= 5) {
        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
          (s as any).bupay = (Math.floor(Math.random() * 101) + 100) * 100;
        } else {
          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
            (s as any).bupay = (Math.floor(Math.random() * 201) + 500) * 100;
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
              (s as any).bupay = (Math.floor(Math.random() * 301) + 600) * 100;
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                (s as any).bupay = (Math.floor(Math.random() * 401) + 800) * 100;
              } else {
                (s as any).bupay = (Math.floor(Math.random() * 1001) + 1000) * 100;
              }
            }
          }
        }
      } else {
        if (((s as any).car ?? 0)?.['ID'] <= 10) {
          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
            (s as any).bupay = (Math.floor(Math.random() * 101) + 100) * 100;
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
              (s as any).bupay = (Math.floor(Math.random() * 401) + 500) * 100;
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                (s as any).bupay = (Math.floor(Math.random() * 401) + 800) * 100;
              } else {
                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                  (s as any).bupay = (Math.floor(Math.random() * 601) + 1000) * 100;
                } else {
                  (s as any).bupay = (Math.floor(Math.random() * 701) + 1500) * 100;
                }
              }
            }
          }
        } else {
          if (((s as any).car ?? 0)?.['ID'] <= 13) {
            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
              (s as any).bupay = (Math.floor(Math.random() * 101) + 100) * 100;
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                (s as any).bupay = (Math.floor(Math.random() * 201) + 100) * 100;
              } else {
                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                  (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                } else {
                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                    (s as any).bupay = (Math.floor(Math.random() * 401) + 400) * 100;
                  } else {
                    (s as any).bupay = (Math.floor(Math.random() * 301) + 700) * 100;
                  }
                }
              }
            }
          } else {
            if (((s as any).car ?? 0)?.['ID'] <= 94) {
              (s as any).bupay = 0;
            } else {
              if (((s as any).car ?? 0)?.['ID'] === 95) {
                if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                  (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                } else {
                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                    (s as any).bupay = (Math.floor(Math.random() * 2501) + 500) * 100;
                  } else {
                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                      (s as any).bupay = (Math.floor(Math.random() * 2001) + 3000) * 100;
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                        (s as any).bupay = (Math.floor(Math.random() * 2001) + 4000) * 100;
                      } else {
                        (s as any).bupay = (Math.floor(Math.random() * 4001) + 5000) * 100;
                      }
                    }
                  }
                }
              } else {
                if (((s as any).car ?? 0)?.['ID'] === 96) {
                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                    (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                  } else {
                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                      (s as any).bupay = (Math.floor(Math.random() * 11101) + 500) * 100;
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                        (s as any).bupay = (Math.floor(Math.random() * 14001) + 11500) * 100;
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                          (s as any).bupay = (Math.floor(Math.random() * 6601) + 25400) * 100;
                        } else {
                          (s as any).bupay = (Math.floor(Math.random() * 18001) + 30000) * 100;
                        }
                      }
                    }
                  }
                } else {
                  if (((s as any).car ?? 0)?.['ID'] === 97) {
                    if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                      (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                        (s as any).bupay = (Math.floor(Math.random() * 1101) + 500) * 100;
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                          (s as any).bupay = (Math.floor(Math.random() * 4001) + 1500) * 100;
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                            (s as any).bupay = (Math.floor(Math.random() * 6601) + 5400) * 100;
                          } else {
                            (s as any).bupay = (Math.floor(Math.random() * 8001) + 10000) * 100;
                          }
                        }
                      }
                    }
                  } else {
                    if (((s as any).car ?? 0)?.['ID'] === 98) {
                      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                        (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                          (s as any).bupay = (Math.floor(Math.random() * 11101) + 500) * 100;
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                            (s as any).bupay = (Math.floor(Math.random() * 14001) + 11500) * 100;
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                              (s as any).bupay = (Math.floor(Math.random() * 6601) + 25400) * 100;
                            } else {
                              (s as any).bupay = (Math.floor(Math.random() * 18001) + 30000) * 100;
                            }
                          }
                        }
                      }
                    } else {
                      if (((s as any).car ?? 0)?.['ID'] === 99) {
                        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                          (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                            (s as any).bupay = (Math.floor(Math.random() * 5101) + 500) * 100;
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                              (s as any).bupay = (Math.floor(Math.random() * 10001) + 5500) * 100;
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                (s as any).bupay = (Math.floor(Math.random() * 6601) + 15400) * 100;
                              } else {
                                (s as any).bupay = (Math.floor(Math.random() * 18001) + 20000) * 100;
                              }
                            }
                          }
                        }
                      } else {
                        if (((s as any).car ?? 0)?.['ID'] === 100) {
                          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                            (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                              (s as any).bupay = (Math.floor(Math.random() * 15101) + 500) * 100;
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                (s as any).bupay = (Math.floor(Math.random() * 10001) + 15500) * 100;
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                  (s as any).bupay = (Math.floor(Math.random() * 6601) + 25400) * 100;
                                } else {
                                  (s as any).bupay = (Math.floor(Math.random() * 28001) + 30000) * 100;
                                }
                              }
                            }
                          }
                        } else {
                          if (((s as any).car ?? 0)?.['ID'] === 101) {
                            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                              (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                (s as any).bupay = (Math.floor(Math.random() * 1901) + 500) * 100;
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                  (s as any).bupay = (Math.floor(Math.random() * 6001) + 2250) * 100;
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                    (s as any).bupay = (Math.floor(Math.random() * 9901) + 8100) * 100;
                                  } else {
                                    (s as any).bupay = (Math.floor(Math.random() * 12001) + 15000) * 100;
                                  }
                                }
                              }
                            }
                          } else {
                            if (((s as any).car ?? 0)?.['ID'] === 102) {
                              if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                  (s as any).bupay = (Math.floor(Math.random() * 1601) + 500) * 100;
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                    (s as any).bupay = (Math.floor(Math.random() * 1401) + 2100) * 100;
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                      (s as any).bupay = (Math.floor(Math.random() * 1401) + 2800) * 100;
                                    } else {
                                      (s as any).bupay = (Math.floor(Math.random() * 2801) + 3500) * 100;
                                    }
                                  }
                                }
                              }
                            } else {
                              if (((s as any).car ?? 0)?.['ID'] === 103) {
                                if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                  (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                    (s as any).bupay = (Math.floor(Math.random() * 2801) + 500) * 100;
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                      (s as any).bupay = (Math.floor(Math.random() * 2201) + 3300) * 100;
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                        (s as any).bupay = (Math.floor(Math.random() * 2201) + 4400) * 100;
                                      } else {
                                        (s as any).bupay = (Math.floor(Math.random() * 4401) + 5500) * 100;
                                      }
                                    }
                                  }
                                }
                              } else {
                                if (((s as any).car ?? 0)?.['ID'] === 104) {
                                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                    (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                      (s as any).bupay = (Math.floor(Math.random() * 2501) + 500) * 100;
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                        (s as any).bupay = (Math.floor(Math.random() * 2001) + 3000) * 100;
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                          (s as any).bupay = (Math.floor(Math.random() * 2001) + 4000) * 100;
                                        } else {
                                          (s as any).bupay = (Math.floor(Math.random() * 4001) + 5000) * 100;
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  if (((s as any).car ?? 0)?.['ID'] === 105) {
                                    if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                      (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                        (s as any).bupay = (Math.floor(Math.random() * 3101) + 500) * 100;
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                          (s as any).bupay = (Math.floor(Math.random() * 2401) + 3600) * 100;
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                            (s as any).bupay = (Math.floor(Math.random() * 2401) + 4800) * 100;
                                          } else {
                                            (s as any).bupay = (Math.floor(Math.random() * 4801) + 6000) * 100;
                                          }
                                        }
                                      }
                                    }
                                  } else {
                                    if (((s as any).car ?? 0)?.['ID'] === 106) {
                                      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                        (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                          (s as any).bupay = (Math.floor(Math.random() * 5001) + 500) * 100;
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                            (s as any).bupay = (Math.floor(Math.random() * 3501) + 5500) * 100;
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                              (s as any).bupay = (Math.floor(Math.random() * 4001) + 7000) * 100;
                                            } else {
                                              (s as any).bupay = (Math.floor(Math.random() * 7001) + 9000) * 100;
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      if (((s as any).car ?? 0)?.['ID'] === 107) {
                                        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                          (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                            (s as any).bupay = (Math.floor(Math.random() * 5101) + 500) * 100;
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                              (s as any).bupay = (Math.floor(Math.random() * 10001) + 5500) * 100;
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                (s as any).bupay = (Math.floor(Math.random() * 6601) + 15400) * 100;
                                              } else {
                                                (s as any).bupay = (Math.floor(Math.random() * 18001) + 20000) * 100;
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        if (((s as any).car ?? 0)?.['ID'] === 108) {
                                          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                            (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                              (s as any).bupay = (Math.floor(Math.random() * 20501) + 500) * 100;
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                (s as any).bupay = (Math.floor(Math.random() * 14001) + 21000) * 100;
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                  (s as any).bupay = (Math.floor(Math.random() * 14001) + 28000) * 100;
                                                } else {
                                                  (s as any).bupay = (Math.floor(Math.random() * 28001) + 35000) * 100;
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          if (((s as any).car ?? 0)?.['ID'] === 109) {
                                            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                              (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                (s as any).bupay = (Math.floor(Math.random() * 5001) + 500) * 100;
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                  (s as any).bupay = (Math.floor(Math.random() * 3501) + 5500) * 100;
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                    (s as any).bupay = (Math.floor(Math.random() * 4001) + 7000) * 100;
                                                  } else {
                                                    (s as any).bupay = (Math.floor(Math.random() * 7001) + 9000) * 100;
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            if (((s as any).car ?? 0)?.['ID'] === 110) {
                                              if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                (s as any).bupay = (Math.floor(Math.random() * 401) + 200) * 100;
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                  (s as any).bupay = (Math.floor(Math.random() * 2051) + 500) * 100;
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                    (s as any).bupay = (Math.floor(Math.random() * 1701) + 2550) * 100;
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                      (s as any).bupay = (Math.floor(Math.random() * 1701) + 3400) * 100;
                                                    } else {
                                                      (s as any).bupay = (Math.floor(Math.random() * 3401) + 4250) * 100;
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              if (((s as any).car ?? 0)?.['ID'] === 111) {
                                                if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                  (s as any).bupay = (Math.floor(Math.random() * 1501) + 500) * 100;
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                    (s as any).bupay = (Math.floor(Math.random() * 21501) + 1500) * 100;
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                      (s as any).bupay = (Math.floor(Math.random() * 32001) + 23000) * 100;
                                                    } else {
                                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                        (s as any).bupay = (Math.floor(Math.random() * 14001) + 50000) * 100;
                                                      } else {
                                                        (s as any).bupay = (Math.floor(Math.random() * 36001) + 60000) * 100;
                                                      }
                                                    }
                                                  }
                                                }
                                              } else {
                                                if (((s as any).car ?? 0)?.['ID'] === 112) {
                                                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                    (s as any).bupay = (Math.floor(Math.random() * 3001) + 1000) * 100;
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                      (s as any).bupay = (Math.floor(Math.random() * 43001) + 3000) * 100;
                                                    } else {
                                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                        (s as any).bupay = (Math.floor(Math.random() * 64001) + 46000) * 100;
                                                      } else {
                                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                          (s as any).bupay = (Math.floor(Math.random() * 28001) + 100000) * 100;
                                                        } else {
                                                          (s as any).bupay = (Math.floor(Math.random() * 70001) + 120000) * 100;
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
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'has_car':
      enterHasCar(s, scene);
      break;
    case 'has_wreck':
      enterHasWreck(s, scene);
      break;
    case 'is_here':
      enterIsHere(s, scene);
      break;
    case 'is_here_area':
      enterIsHereArea(s, scene);
      break;
    case 'setloc':
      enterSetloc(s, scene);
      break;
    case 'add_car':
      enterAddCar(s, scene);
      break;
    case 'goto_car':
      enterGotoCar(s, scene);
      break;
    case 'avtonorm':
      enterAvtonorm(s, scene);
      break;
    case 'avt':
      enterAvt(s, scene);
      break;
    case 'avb':
      enterAvb(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const car_funcs: LocationDef = {
  name: 'car_funcs',
  region: 'other',
  enter: enter,
};
