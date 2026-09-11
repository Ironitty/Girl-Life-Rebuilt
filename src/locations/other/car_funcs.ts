import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHasCar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] > 0) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterHasWreck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] > 0  &&  ((s as any).car ?? 0)?.['wreck'] === 1) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsHere(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    (s as any).ARGS[2] = ((s as any).loc_arg ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    (s as any).ARGS[3] = ((s as any).region ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).car ?? 0)?.['loc']  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).car ?? 0)?.['loc_arg']  &&  ((s as any).locArgs?.[3] ?? 0) === ((s as any).car ?? 0)?.['region']) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterIsHereArea(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    (s as any).ARGS[2] = ((s as any).region ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).car ?? 0)?.['loc']  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).car ?? 0)?.['region']) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterSetloc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    (s as any).ARGS[2] = ((s as any).loc_arg ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    (s as any).ARGS[3] = ((s as any).region ?? 0);
  }
  (s as any).car['loc'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).car['loc_arg'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).car['region'] = ((s as any).locArgs?.[3] ?? 0);
  scene.build();
}

function enterAddCar(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'car_attributes', ARGS[1]
  (s as any).car['ID'] = qspUntranslated(s, "ARGS[1]", { location: "car_funcs" });
  (s as any).car['name'] = ((s as any).CarName ?? 0);
  (s as any).car['new_condition'] = ((s as any).CarCondition ?? 0);
  (s as any).car['current_condition'] = ((s as any).CarCondition ?? 0);
  (s as any).car['tank'] = ((s as any).CarTank ?? 0);
  (s as any).car['fuel'] = ((s as any).CarTank ?? 0);
  (s as any).car['wreck'] = 0;
  scene.build();
}

function enterGotoCar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gt $car['loc'], $car['loc_arg']
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
  (s as any).used_car['' + String((s as any).autotraidF_carnum || '') + '_condition'] = ((s as any).tehT ?? 0);
  (s as any).used_car['' + String((s as any).autotraidF_carnum || '') + '_condition_desc'] = ((s as any).tehT_desc ?? 0);
  (s as any).used_car['' + String((s as any).autotraidF_carnum || '') + '_price'] = ((s as any).bupay ?? 0);
  scene.build();
}

function enterAvb(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] <= 0) {
    (s as any).bupay = 0;
  } else {
    if (((s as any).car ?? 0)?.['ID'] === 1) {
      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
        (s as any).bupay = ((s as any).rand ?? 0)(100, 200) * 100;
      } else {
        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
          (s as any).bupay = ((s as any).rand ?? 0)(100, 200) * 100;
        } else {
          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
            (s as any).bupay = ((s as any).rand ?? 0)(200, 400) * 100;
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
              (s as any).bupay = ((s as any).rand ?? 0)(400, 600) * 100;
            } else {
              (s as any).bupay = ((s as any).rand ?? 0)(500, 1000) * 100;
            }
          }
        }
      }
    } else {
      if (((s as any).car ?? 0)?.['ID'] <= 5) {
        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
          (s as any).bupay = ((s as any).rand ?? 0)(100, 200) * 100;
        } else {
          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
            (s as any).bupay = ((s as any).rand ?? 0)(500, 700) * 100;
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
              (s as any).bupay = ((s as any).rand ?? 0)(600, 900) * 100;
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                (s as any).bupay = ((s as any).rand ?? 0)(800, 1200) * 100;
              } else {
                (s as any).bupay = ((s as any).rand ?? 0)(1000, 2000) * 100;
              }
            }
          }
        }
      } else {
        if (((s as any).car ?? 0)?.['ID'] <= 10) {
          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
            (s as any).bupay = ((s as any).rand ?? 0)(100, 200) * 100;
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
              (s as any).bupay = ((s as any).rand ?? 0)(500, 900) * 100;
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                (s as any).bupay = ((s as any).rand ?? 0)(800, 1200) * 100;
              } else {
                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                  (s as any).bupay = ((s as any).rand ?? 0)(1000, 1600) * 100;
                } else {
                  (s as any).bupay = ((s as any).rand ?? 0)(1500, 2200) * 100;
                }
              }
            }
          }
        } else {
          if (((s as any).car ?? 0)?.['ID'] <= 13) {
            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
              (s as any).bupay = ((s as any).rand ?? 0)(100, 200) * 100;
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                (s as any).bupay = ((s as any).rand ?? 0)(100, 300) * 100;
              } else {
                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                  (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                } else {
                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                    (s as any).bupay = ((s as any).rand ?? 0)(400, 800) * 100;
                  } else {
                    (s as any).bupay = ((s as any).rand ?? 0)(700, 1000) * 100;
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
                  (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                } else {
                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                    (s as any).bupay = ((s as any).rand ?? 0)(500, 3000) * 100;
                  } else {
                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                      (s as any).bupay = ((s as any).rand ?? 0)(3000, 5000) * 100;
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                        (s as any).bupay = ((s as any).rand ?? 0)(4000, 6000) * 100;
                      } else {
                        (s as any).bupay = ((s as any).rand ?? 0)(5000, 9000) * 100;
                      }
                    }
                  }
                }
              } else {
                if (((s as any).car ?? 0)?.['ID'] === 96) {
                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                    (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                  } else {
                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                      (s as any).bupay = ((s as any).rand ?? 0)(500, 11600) * 100;
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                        (s as any).bupay = ((s as any).rand ?? 0)(11500, 25500) * 100;
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                          (s as any).bupay = ((s as any).rand ?? 0)(25400, 32000) * 100;
                        } else {
                          (s as any).bupay = ((s as any).rand ?? 0)(30000, 48000) * 100;
                        }
                      }
                    }
                  }
                } else {
                  if (((s as any).car ?? 0)?.['ID'] === 97) {
                    if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                      (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                        (s as any).bupay = ((s as any).rand ?? 0)(500, 1600) * 100;
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                          (s as any).bupay = ((s as any).rand ?? 0)(1500, 5500) * 100;
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                            (s as any).bupay = ((s as any).rand ?? 0)(5400, 12000) * 100;
                          } else {
                            (s as any).bupay = ((s as any).rand ?? 0)(10000, 18000) * 100;
                          }
                        }
                      }
                    }
                  } else {
                    if (((s as any).car ?? 0)?.['ID'] === 98) {
                      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                        (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                          (s as any).bupay = ((s as any).rand ?? 0)(500, 11600) * 100;
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                            (s as any).bupay = ((s as any).rand ?? 0)(11500, 25500) * 100;
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                              (s as any).bupay = ((s as any).rand ?? 0)(25400, 32000) * 100;
                            } else {
                              (s as any).bupay = ((s as any).rand ?? 0)(30000, 48000) * 100;
                            }
                          }
                        }
                      }
                    } else {
                      if (((s as any).car ?? 0)?.['ID'] === 99) {
                        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                          (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                            (s as any).bupay = ((s as any).rand ?? 0)(500, 5600) * 100;
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                              (s as any).bupay = ((s as any).rand ?? 0)(5500, 15500) * 100;
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                (s as any).bupay = ((s as any).rand ?? 0)(15400, 22000) * 100;
                              } else {
                                (s as any).bupay = ((s as any).rand ?? 0)(20000, 38000) * 100;
                              }
                            }
                          }
                        }
                      } else {
                        if (((s as any).car ?? 0)?.['ID'] === 100) {
                          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                            (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                              (s as any).bupay = ((s as any).rand ?? 0)(500, 15600) * 100;
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                (s as any).bupay = ((s as any).rand ?? 0)(15500, 25500) * 100;
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                  (s as any).bupay = ((s as any).rand ?? 0)(25400, 32000) * 100;
                                } else {
                                  (s as any).bupay = ((s as any).rand ?? 0)(30000, 58000) * 100;
                                }
                              }
                            }
                          }
                        } else {
                          if (((s as any).car ?? 0)?.['ID'] === 101) {
                            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                              (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                (s as any).bupay = ((s as any).rand ?? 0)(500, 2400) * 100;
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                  (s as any).bupay = ((s as any).rand ?? 0)(2250, 8250) * 100;
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                    (s as any).bupay = ((s as any).rand ?? 0)(8100, 18000) * 100;
                                  } else {
                                    (s as any).bupay = ((s as any).rand ?? 0)(15000, 27000) * 100;
                                  }
                                }
                              }
                            }
                          } else {
                            if (((s as any).car ?? 0)?.['ID'] === 102) {
                              if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                  (s as any).bupay = ((s as any).rand ?? 0)(500, 2100) * 100;
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                    (s as any).bupay = ((s as any).rand ?? 0)(2100, 3500) * 100;
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                      (s as any).bupay = ((s as any).rand ?? 0)(2800, 4200) * 100;
                                    } else {
                                      (s as any).bupay = ((s as any).rand ?? 0)(3500, 6300) * 100;
                                    }
                                  }
                                }
                              }
                            } else {
                              if (((s as any).car ?? 0)?.['ID'] === 103) {
                                if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                  (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                    (s as any).bupay = ((s as any).rand ?? 0)(500, 3300) * 100;
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                      (s as any).bupay = ((s as any).rand ?? 0)(3300, 5500) * 100;
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                        (s as any).bupay = ((s as any).rand ?? 0)(4400, 6600) * 100;
                                      } else {
                                        (s as any).bupay = ((s as any).rand ?? 0)(5500, 9900) * 100;
                                      }
                                    }
                                  }
                                }
                              } else {
                                if (((s as any).car ?? 0)?.['ID'] === 104) {
                                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                    (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                      (s as any).bupay = ((s as any).rand ?? 0)(500, 3000) * 100;
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                        (s as any).bupay = ((s as any).rand ?? 0)(3000, 5000) * 100;
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                          (s as any).bupay = ((s as any).rand ?? 0)(4000, 6000) * 100;
                                        } else {
                                          (s as any).bupay = ((s as any).rand ?? 0)(5000, 9000) * 100;
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  if (((s as any).car ?? 0)?.['ID'] === 105) {
                                    if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                      (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                        (s as any).bupay = ((s as any).rand ?? 0)(500, 3600) * 100;
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                          (s as any).bupay = ((s as any).rand ?? 0)(3600, 6000) * 100;
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                            (s as any).bupay = ((s as any).rand ?? 0)(4800, 7200) * 100;
                                          } else {
                                            (s as any).bupay = ((s as any).rand ?? 0)(6000, 10800) * 100;
                                          }
                                        }
                                      }
                                    }
                                  } else {
                                    if (((s as any).car ?? 0)?.['ID'] === 106) {
                                      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                        (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                          (s as any).bupay = ((s as any).rand ?? 0)(500, 5500) * 100;
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                            (s as any).bupay = ((s as any).rand ?? 0)(5500, 9000) * 100;
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                              (s as any).bupay = ((s as any).rand ?? 0)(7000, 11000) * 100;
                                            } else {
                                              (s as any).bupay = ((s as any).rand ?? 0)(9000, 16000) * 100;
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      if (((s as any).car ?? 0)?.['ID'] === 107) {
                                        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                          (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                            (s as any).bupay = ((s as any).rand ?? 0)(500, 5600) * 100;
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                              (s as any).bupay = ((s as any).rand ?? 0)(5500, 15500) * 100;
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                (s as any).bupay = ((s as any).rand ?? 0)(15400, 22000) * 100;
                                              } else {
                                                (s as any).bupay = ((s as any).rand ?? 0)(20000, 38000) * 100;
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        if (((s as any).car ?? 0)?.['ID'] === 108) {
                                          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                            (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                              (s as any).bupay = ((s as any).rand ?? 0)(500, 21000) * 100;
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                (s as any).bupay = ((s as any).rand ?? 0)(21000, 35000) * 100;
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                  (s as any).bupay = ((s as any).rand ?? 0)(28000, 42000) * 100;
                                                } else {
                                                  (s as any).bupay = ((s as any).rand ?? 0)(35000, 63000) * 100;
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          if (((s as any).car ?? 0)?.['ID'] === 109) {
                                            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                              (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                (s as any).bupay = ((s as any).rand ?? 0)(500, 5500) * 100;
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                  (s as any).bupay = ((s as any).rand ?? 0)(5500, 9000) * 100;
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                    (s as any).bupay = ((s as any).rand ?? 0)(7000, 11000) * 100;
                                                  } else {
                                                    (s as any).bupay = ((s as any).rand ?? 0)(9000, 16000) * 100;
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            if (((s as any).car ?? 0)?.['ID'] === 110) {
                                              if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                (s as any).bupay = ((s as any).rand ?? 0)(200, 600) * 100;
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                  (s as any).bupay = ((s as any).rand ?? 0)(500, 2550) * 100;
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                    (s as any).bupay = ((s as any).rand ?? 0)(2550, 4250) * 100;
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                      (s as any).bupay = ((s as any).rand ?? 0)(3400, 5100) * 100;
                                                    } else {
                                                      (s as any).bupay = ((s as any).rand ?? 0)(4250, 7650) * 100;
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              if (((s as any).car ?? 0)?.['ID'] === 111) {
                                                if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                  (s as any).bupay = ((s as any).rand ?? 0)(500, 2000) * 100;
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                    (s as any).bupay = ((s as any).rand ?? 0)(1500, 23000) * 100;
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                      (s as any).bupay = ((s as any).rand ?? 0)(23000, 55000) * 100;
                                                    } else {
                                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                        (s as any).bupay = ((s as any).rand ?? 0)(50000, 64000) * 100;
                                                      } else {
                                                        (s as any).bupay = ((s as any).rand ?? 0)(60000, 96000) * 100;
                                                      }
                                                    }
                                                  }
                                                }
                                              } else {
                                                if (((s as any).car ?? 0)?.['ID'] === 112) {
                                                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                    (s as any).bupay = ((s as any).rand ?? 0)(1000, 4000) * 100;
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                      (s as any).bupay = ((s as any).rand ?? 0)(3000, 46000) * 100;
                                                    } else {
                                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                        (s as any).bupay = ((s as any).rand ?? 0)(46000, 110000) * 100;
                                                      } else {
                                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                          (s as any).bupay = ((s as any).rand ?? 0)(100000, 128000) * 100;
                                                        } else {
                                                          (s as any).bupay = ((s as any).rand ?? 0)(120000, 190000) * 100;
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
      enterHasCar(s, scene);
      break;
  }
}

export const car_funcs: LocationDef = {
  name: 'car_funcs',
  region: 'other',
  enter: enter,
};
