import { qspCall, dynamicGoto } from '../_shared/qspBridge';

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
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).loc_arg ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).region ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).car ?? 0)?.['loc']  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).car ?? 0)?.['loc_arg']  &&  String((s as any).locArgs?.[3] ?? '') === ((s as any).car ?? 0)?.['region']) {
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
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).region ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).car ?? 0)?.['loc']  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).car ?? 0)?.['region']) {
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
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).loc_arg ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).region ?? 0);
  }
  ((s as any).car = (s as any).car ?? {})['loc'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).car = (s as any).car ?? {})['loc_arg'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).car = (s as any).car ?? {})['region'] = ((s as any).locArgs?.[3] ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterAddCar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'car_attributes', '', ((s as any).locArgs?.[1] ?? 0));
  ((s as any).car = (s as any).car ?? {})['ID'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).car = (s as any).car ?? {})['name'] = ((s as any).CarName ?? 0);
  ((s as any).car = (s as any).car ?? {})['new_condition'] = ((s as any).CarCondition ?? 0);
  ((s as any).car = (s as any).car ?? {})['current_condition'] = ((s as any).CarCondition ?? 0);
  ((s as any).car = (s as any).car ?? {})['tank'] = ((s as any).CarTank ?? 0);
  ((s as any).car = (s as any).car ?? {})['fuel'] = ((s as any).CarTank ?? 0);
  ((s as any).car = (s as any).car ?? {})['wreck'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterGotoCar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] === 0) {
    // TODO-QSP: exit
  }
  (s as any).region = ((s as any).car ?? 0)?.['region'];
  dynamicGoto(s, (((s as any).car ?? {}))['loc'], (((s as any).car ?? {}))['loc_arg']);
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
    (s as any).normneed = 0 - ((((s as any).car ?? {})?.['current_condition'] ?? 0) - (((s as any).car ?? {})?.['new_condition'] ?? 0));
    (s as any).normrem = ((s as any).normneed ?? 0) * ((s as any).normhour ?? 0);
  } else {
    (s as any).normneed = 0 - ((((s as any).car ?? {})?.['current_condition'] ?? 0) - (((s as any).car ?? {})?.['new_condition'] ?? 0));
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
  (s as any).tehT = (Math.floor(Math.random() * (((s as any).tehNT ?? 0) - 10 + 1)) + (10));
  if (((s as any).tehT ?? 0) < ((s as any).tehNT ?? 0) * 25 / 100) {
    (s as any).tehT_desc = 'You\'re not sure how someone managed to get this piece of junk here.';
    (s as any).bupay = 100 * ((((s as any).carT ?? 0) === 1) ? ((Math.floor(Math.random() * 351) + 150)) : ((Math.floor(Math.random() * 251) + 150)));
  } else {
    if (((s as any).tehT ?? 0) < ((s as any).tehNT ?? 0) * 50 / 100) {
      (s as any).tehT_desc = 'When you turn on the car, the engine rumbles and smokes.';
      (s as any).bupay = 100 * ((((s as any).carT ?? 0) === 1) ? ((Math.floor(Math.random() * 301) + 350)) : ((Math.floor(Math.random() * 301) + 300)));
    } else {
      if (((s as any).tehT ?? 0) < ((s as any).tehNT ?? 0) * 75 / 100) {
        (s as any).tehT_desc = 'When you turn on the car, the engine makes some noise.';
        (s as any).bupay = 100 * ((((s as any).carT ?? 0) === 1) ? ((Math.floor(Math.random() * 701) + 600)) : ((Math.floor(Math.random() * 401) + 500)));
      } else {
        (s as any).tehT_desc = 'The car looks like it\'s in excellent condition.';
        (s as any).bupay = 100 * ((((s as any).carT ?? 0) === 1) ? ((Math.floor(Math.random() * 801) + 1000)) : ((Math.floor(Math.random() * 201) + 800)));
      }
    }
  }
  ((s as any).used_car = (s as any).used_car ?? {})[String(((s as any).autotraidF_carnum ?? 0)) + '_condition'] = ((s as any).tehT ?? 0);
  ((s as any).used_car = (s as any).used_car ?? {})[String(((s as any).autotraidF_carnum ?? 0)) + '_condition_desc'] = ((s as any).tehT_desc ?? 0);
  ((s as any).used_car = (s as any).used_car ?? {})[String(((s as any).autotraidF_carnum ?? 0)) + '_price'] = ((s as any).bupay ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterAvb(s: GameState, scene: SceneBuilder): void {
  if (((s as any).car ?? 0)?.['ID'] <= 0) {
    (s as any).bupay = 0;
  } else {
    if (((s as any).car ?? 0)?.['ID'] === 1) {
      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
        (s as any).bupay = (Math.floor(Math.random() * (200 - 100 + 1)) + (100));
      } else {
        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
          (s as any).bupay = (Math.floor(Math.random() * (200 - 100 + 1)) + (100));
        } else {
          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
            (s as any).bupay = (Math.floor(Math.random() * (400 - 200 + 1)) + (200));
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
              (s as any).bupay = (Math.floor(Math.random() * (600 - 400 + 1)) + (400));
            } else {
              (s as any).bupay = (Math.floor(Math.random() * (1000 - 500 + 1)) + (500));
            }
          }
        }
      }
    } else {
      if (((s as any).car ?? 0)?.['ID'] <= 5) {
        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
          (s as any).bupay = (Math.floor(Math.random() * (200 - 100 + 1)) + (100));
        } else {
          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
            (s as any).bupay = (Math.floor(Math.random() * (700 - 500 + 1)) + (500));
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
              (s as any).bupay = (Math.floor(Math.random() * (900 - 600 + 1)) + (600));
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                (s as any).bupay = (Math.floor(Math.random() * (1200 - 800 + 1)) + (800));
              } else {
                (s as any).bupay = (Math.floor(Math.random() * (2000 - 1000 + 1)) + (1000));
              }
            }
          }
        }
      } else {
        if (((s as any).car ?? 0)?.['ID'] <= 10) {
          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
            (s as any).bupay = (Math.floor(Math.random() * (200 - 100 + 1)) + (100));
          } else {
            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
              (s as any).bupay = (Math.floor(Math.random() * (900 - 500 + 1)) + (500));
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                (s as any).bupay = (Math.floor(Math.random() * (1200 - 800 + 1)) + (800));
              } else {
                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                  (s as any).bupay = (Math.floor(Math.random() * (1600 - 1000 + 1)) + (1000));
                } else {
                  (s as any).bupay = (Math.floor(Math.random() * (2200 - 1500 + 1)) + (1500));
                }
              }
            }
          }
        } else {
          if (((s as any).car ?? 0)?.['ID'] <= 13) {
            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
              (s as any).bupay = (Math.floor(Math.random() * (200 - 100 + 1)) + (100));
            } else {
              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                (s as any).bupay = (Math.floor(Math.random() * (300 - 100 + 1)) + (100));
              } else {
                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                  (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                } else {
                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                    (s as any).bupay = (Math.floor(Math.random() * (800 - 400 + 1)) + (400));
                  } else {
                    (s as any).bupay = (Math.floor(Math.random() * (1000 - 700 + 1)) + (700));
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
                  (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                } else {
                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                    (s as any).bupay = (Math.floor(Math.random() * (3000 - 500 + 1)) + (500));
                  } else {
                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                      (s as any).bupay = (Math.floor(Math.random() * (5000 - 3000 + 1)) + (3000));
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                        (s as any).bupay = (Math.floor(Math.random() * (6000 - 4000 + 1)) + (4000));
                      } else {
                        (s as any).bupay = (Math.floor(Math.random() * (9000 - 5000 + 1)) + (5000));
                      }
                    }
                  }
                }
              } else {
                if (((s as any).car ?? 0)?.['ID'] === 96) {
                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                    (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                  } else {
                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                      (s as any).bupay = (Math.floor(Math.random() * (11600 - 500 + 1)) + (500));
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                        (s as any).bupay = (Math.floor(Math.random() * (25500 - 11500 + 1)) + (11500));
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                          (s as any).bupay = (Math.floor(Math.random() * (32000 - 25400 + 1)) + (25400));
                        } else {
                          (s as any).bupay = (Math.floor(Math.random() * (48000 - 30000 + 1)) + (30000));
                        }
                      }
                    }
                  }
                } else {
                  if (((s as any).car ?? 0)?.['ID'] === 97) {
                    if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                      (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                    } else {
                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                        (s as any).bupay = (Math.floor(Math.random() * (1600 - 500 + 1)) + (500));
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                          (s as any).bupay = (Math.floor(Math.random() * (5500 - 1500 + 1)) + (1500));
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                            (s as any).bupay = (Math.floor(Math.random() * (12000 - 5400 + 1)) + (5400));
                          } else {
                            (s as any).bupay = (Math.floor(Math.random() * (18000 - 10000 + 1)) + (10000));
                          }
                        }
                      }
                    }
                  } else {
                    if (((s as any).car ?? 0)?.['ID'] === 98) {
                      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                        (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                      } else {
                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                          (s as any).bupay = (Math.floor(Math.random() * (11600 - 500 + 1)) + (500));
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                            (s as any).bupay = (Math.floor(Math.random() * (25500 - 11500 + 1)) + (11500));
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                              (s as any).bupay = (Math.floor(Math.random() * (32000 - 25400 + 1)) + (25400));
                            } else {
                              (s as any).bupay = (Math.floor(Math.random() * (48000 - 30000 + 1)) + (30000));
                            }
                          }
                        }
                      }
                    } else {
                      if (((s as any).car ?? 0)?.['ID'] === 99) {
                        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                          (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                        } else {
                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                            (s as any).bupay = (Math.floor(Math.random() * (5600 - 500 + 1)) + (500));
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                              (s as any).bupay = (Math.floor(Math.random() * (15500 - 5500 + 1)) + (5500));
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                (s as any).bupay = (Math.floor(Math.random() * (22000 - 15400 + 1)) + (15400));
                              } else {
                                (s as any).bupay = (Math.floor(Math.random() * (38000 - 20000 + 1)) + (20000));
                              }
                            }
                          }
                        }
                      } else {
                        if (((s as any).car ?? 0)?.['ID'] === 100) {
                          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                            (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                          } else {
                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                              (s as any).bupay = (Math.floor(Math.random() * (15600 - 500 + 1)) + (500));
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                (s as any).bupay = (Math.floor(Math.random() * (25500 - 15500 + 1)) + (15500));
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                  (s as any).bupay = (Math.floor(Math.random() * (32000 - 25400 + 1)) + (25400));
                                } else {
                                  (s as any).bupay = (Math.floor(Math.random() * (58000 - 30000 + 1)) + (30000));
                                }
                              }
                            }
                          }
                        } else {
                          if (((s as any).car ?? 0)?.['ID'] === 101) {
                            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                              (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                            } else {
                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                (s as any).bupay = (Math.floor(Math.random() * (2400 - 500 + 1)) + (500));
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                  (s as any).bupay = (Math.floor(Math.random() * (8250 - 2250 + 1)) + (2250));
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                    (s as any).bupay = (Math.floor(Math.random() * (18000 - 8100 + 1)) + (8100));
                                  } else {
                                    (s as any).bupay = (Math.floor(Math.random() * (27000 - 15000 + 1)) + (15000));
                                  }
                                }
                              }
                            }
                          } else {
                            if (((s as any).car ?? 0)?.['ID'] === 102) {
                              if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                              } else {
                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                  (s as any).bupay = (Math.floor(Math.random() * (2100 - 500 + 1)) + (500));
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                    (s as any).bupay = (Math.floor(Math.random() * (3500 - 2100 + 1)) + (2100));
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                      (s as any).bupay = (Math.floor(Math.random() * (4200 - 2800 + 1)) + (2800));
                                    } else {
                                      (s as any).bupay = (Math.floor(Math.random() * (6300 - 3500 + 1)) + (3500));
                                    }
                                  }
                                }
                              }
                            } else {
                              if (((s as any).car ?? 0)?.['ID'] === 103) {
                                if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                  (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                                } else {
                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                    (s as any).bupay = (Math.floor(Math.random() * (3300 - 500 + 1)) + (500));
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                      (s as any).bupay = (Math.floor(Math.random() * (5500 - 3300 + 1)) + (3300));
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                        (s as any).bupay = (Math.floor(Math.random() * (6600 - 4400 + 1)) + (4400));
                                      } else {
                                        (s as any).bupay = (Math.floor(Math.random() * (9900 - 5500 + 1)) + (5500));
                                      }
                                    }
                                  }
                                }
                              } else {
                                if (((s as any).car ?? 0)?.['ID'] === 104) {
                                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                    (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                                  } else {
                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                      (s as any).bupay = (Math.floor(Math.random() * (3000 - 500 + 1)) + (500));
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                        (s as any).bupay = (Math.floor(Math.random() * (5000 - 3000 + 1)) + (3000));
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                          (s as any).bupay = (Math.floor(Math.random() * (6000 - 4000 + 1)) + (4000));
                                        } else {
                                          (s as any).bupay = (Math.floor(Math.random() * (9000 - 5000 + 1)) + (5000));
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  if (((s as any).car ?? 0)?.['ID'] === 105) {
                                    if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                      (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                                    } else {
                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                        (s as any).bupay = (Math.floor(Math.random() * (3600 - 500 + 1)) + (500));
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                          (s as any).bupay = (Math.floor(Math.random() * (6000 - 3600 + 1)) + (3600));
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                            (s as any).bupay = (Math.floor(Math.random() * (7200 - 4800 + 1)) + (4800));
                                          } else {
                                            (s as any).bupay = (Math.floor(Math.random() * (10800 - 6000 + 1)) + (6000));
                                          }
                                        }
                                      }
                                    }
                                  } else {
                                    if (((s as any).car ?? 0)?.['ID'] === 106) {
                                      if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                        (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                                      } else {
                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                          (s as any).bupay = (Math.floor(Math.random() * (5500 - 500 + 1)) + (500));
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                            (s as any).bupay = (Math.floor(Math.random() * (9000 - 5500 + 1)) + (5500));
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                              (s as any).bupay = (Math.floor(Math.random() * (11000 - 7000 + 1)) + (7000));
                                            } else {
                                              (s as any).bupay = (Math.floor(Math.random() * (16000 - 9000 + 1)) + (9000));
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      if (((s as any).car ?? 0)?.['ID'] === 107) {
                                        if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                          (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                                        } else {
                                          if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                            (s as any).bupay = (Math.floor(Math.random() * (5600 - 500 + 1)) + (500));
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                              (s as any).bupay = (Math.floor(Math.random() * (15500 - 5500 + 1)) + (5500));
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                (s as any).bupay = (Math.floor(Math.random() * (22000 - 15400 + 1)) + (15400));
                                              } else {
                                                (s as any).bupay = (Math.floor(Math.random() * (38000 - 20000 + 1)) + (20000));
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        if (((s as any).car ?? 0)?.['ID'] === 108) {
                                          if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                            (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                                          } else {
                                            if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                              (s as any).bupay = (Math.floor(Math.random() * (21000 - 500 + 1)) + (500));
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                (s as any).bupay = (Math.floor(Math.random() * (35000 - 21000 + 1)) + (21000));
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                  (s as any).bupay = (Math.floor(Math.random() * (42000 - 28000 + 1)) + (28000));
                                                } else {
                                                  (s as any).bupay = (Math.floor(Math.random() * (63000 - 35000 + 1)) + (35000));
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          if (((s as any).car ?? 0)?.['ID'] === 109) {
                                            if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                              (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                                            } else {
                                              if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                (s as any).bupay = (Math.floor(Math.random() * (5500 - 500 + 1)) + (500));
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                  (s as any).bupay = (Math.floor(Math.random() * (9000 - 5500 + 1)) + (5500));
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                    (s as any).bupay = (Math.floor(Math.random() * (11000 - 7000 + 1)) + (7000));
                                                  } else {
                                                    (s as any).bupay = (Math.floor(Math.random() * (16000 - 9000 + 1)) + (9000));
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            if (((s as any).car ?? 0)?.['ID'] === 110) {
                                              if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                (s as any).bupay = (Math.floor(Math.random() * (600 - 200 + 1)) + (200));
                                              } else {
                                                if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                  (s as any).bupay = (Math.floor(Math.random() * (2550 - 500 + 1)) + (500));
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                    (s as any).bupay = (Math.floor(Math.random() * (4250 - 2550 + 1)) + (2550));
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                      (s as any).bupay = (Math.floor(Math.random() * (5100 - 3400 + 1)) + (3400));
                                                    } else {
                                                      (s as any).bupay = (Math.floor(Math.random() * (7650 - 4250 + 1)) + (4250));
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              if (((s as any).car ?? 0)?.['ID'] === 111) {
                                                if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                  (s as any).bupay = (Math.floor(Math.random() * (2000 - 500 + 1)) + (500));
                                                } else {
                                                  if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                    (s as any).bupay = (Math.floor(Math.random() * (23000 - 1500 + 1)) + (1500));
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                      (s as any).bupay = (Math.floor(Math.random() * (55000 - 23000 + 1)) + (23000));
                                                    } else {
                                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                        (s as any).bupay = (Math.floor(Math.random() * (64000 - 50000 + 1)) + (50000));
                                                      } else {
                                                        (s as any).bupay = (Math.floor(Math.random() * (96000 - 60000 + 1)) + (60000));
                                                      }
                                                    }
                                                  }
                                                }
                                              } else {
                                                if (((s as any).car ?? 0)?.['ID'] === 112) {
                                                  if (((s as any).car ?? 0)?.['wreck'] === 1  ||  ((s as any).car ?? 0)?.['current_condition'] <= 0) {
                                                    (s as any).bupay = (Math.floor(Math.random() * (4000 - 1000 + 1)) + (1000));
                                                  } else {
                                                    if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 25 / 100) {
                                                      (s as any).bupay = (Math.floor(Math.random() * (46000 - 3000 + 1)) + (3000));
                                                    } else {
                                                      if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 50 / 100) {
                                                        (s as any).bupay = (Math.floor(Math.random() * (110000 - 46000 + 1)) + (46000));
                                                      } else {
                                                        if (((s as any).car ?? 0)?.['current_condition'] < ((s as any).car ?? 0)?.['new_condition'] * 75 / 100) {
                                                          (s as any).bupay = (Math.floor(Math.random() * (128000 - 100000 + 1)) + (100000));
                                                        } else {
                                                          (s as any).bupay = (Math.floor(Math.random() * (190000 - 120000 + 1)) + (120000));
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
