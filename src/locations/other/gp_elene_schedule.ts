import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIsHere(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).loc_arg ?? 0);
  }
  (s as any).result = qspFunc(s, 'gp_elene_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A31_loc'], ((s as any).locat ?? 0)?.['A31_arg']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWasHere(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).loc_arg ?? 0);
  }
  (s as any).result = qspFunc(s, 'gp_elene_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A31_loc_prev'], ((s as any).locat ?? 0)?.['A31_arg_prev']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHereCore(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (String((s as any).locArgs?.[3] ?? '') === String((s as any).locArgs?.[1] ?? '')  &&  String((s as any).locArgs?.[4] ?? '') === String((s as any).locArgs?.[2] ?? ''));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['A31_rand'] = (Math.floor(Math.random() * 840) + 0);
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['A31_loc_prev'] = ((s as any).locat ?? 0)?.['A31_loc'];
  ((s as any).locat = (s as any).locat ?? {})['A31_arg_prev'] = ((s as any).locat ?? 0)?.['A31_arg'];
  ((s as any).locat = (s as any).locat ?? {})['A31_arg1_prev'] = ((s as any).locat ?? 0)?.['A31_arg1'];
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateLocat(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateLocat(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_elene_locat = qspFunc(s, 'gp_elene_schedule', 'get_base_schedule');
  if ((!((s as any).sunWeather ?? 0))) {
    if (((s as any).temp_elene_locat ?? 0) === 200) {
      (s as any).temp_elene_locat = 110;
    }
  }
  (s as any).temp_elene_locat = qspFunc(s, 'gp_elene_schedule', 'get_random_schedule', ((s as any).temp_elene_locat ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_elene_locat ?? 0)]; enterSetLocats(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterGetBaseSchedule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) <= 5) {
    (s as any).result = 100;
  } else {
    if (((s as any).hour ?? 0) === 6) {
      (s as any).result = 120;
    } else {
      if (((s as any).hour ?? 0) === 7) {
        (s as any).result = 110;
      } else {
        if (((s as any).hour ?? 0) === 8) {
          if (((s as any).week ?? 0) < 4) {
            (s as any).result = 0;
          } else {
            if (((s as any).week ?? 0) === 4) {
              (s as any).result = 110;
            } else {
              (s as any).result = 300;
            }
          }
        } else {
          if (((s as any).hour ?? 0) <= 11) {
            if (((s as any).week ?? 0) < 4) {
              (s as any).result = 0;
            } else {
              if (((s as any).week ?? 0) === 4) {
                (s as any).result = 110;
              } else {
                if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
                  (s as any).result = 300;
                } else {
                  (s as any).result = 310;
                }
              }
            }
          } else {
            if (((s as any).hour ?? 0) === 12) {
              (s as any).result = 120;
            } else {
              if (((s as any).hour ?? 0) === 13) {
                if (((s as any).week ?? 0) === 7) {
                  (s as any).result = 120;
                } else {
                  (s as any).result = 210;
                }
              } else {
                if (((s as any).hour ?? 0) === 14) {
                  if (((s as any).week ?? 0) === 7) {
                    (s as any).result = 120;
                  } else {
                    (s as any).result = 110;
                  }
                } else {
                  if (((s as any).hour ?? 0) < 18) {
                    (s as any).result = 110;
                  } else {
                    if (((s as any).hour ?? 0) === 18) {
                      (s as any).result = 120;
                    } else {
                      if (((s as any).hour ?? 0) < 21) {
                        if (((s as any).week ?? 0) === 6) {
                          (s as any).result = 310;
                        } else {
                          (s as any).result = 110;
                        }
                      } else {
                        (s as any).result = 100;
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

function enterGetRandomSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).locArgs?.[1] ?? 0);
  if ((!((s as any).result ?? 0))) {
    if (((s as any).hour ?? 0) / 2 % 2 === 0) {
      if (((s as any).locat ?? 0)?.['A31_rand'] % 2 === 0) {
        (s as any).result = 110;
      } else {
        (s as any).result = 200;
      }
    } else {
      if (((s as any).locat ?? 0)?.['A31_rand'] / 2 % 2 === 0) {
        (s as any).result = 110;
      } else {
        (s as any).result = 200;
      }
    }
  }
  if (((s as any).result ?? 0) === 110) {
    if (((s as any).hour ?? 0) < 9) {
      (s as any).temp_subloc = (((s as any).locat ?? {})?.['A31_rand'] ?? 0) / 4 % 4;
    } else {
      if (((s as any).hour ?? 0) < 11) {
        (s as any).temp_subloc = (((s as any).locat ?? {})?.['A31_rand'] ?? 0) / 16 % 4;
      } else {
        if (((s as any).hour ?? 0) < 13) {
          (s as any).temp_subloc = (((s as any).locat ?? {})?.['A31_rand'] ?? 0) / 12 % 4;
        } else {
          if (((s as any).hour ?? 0) < 15) {
            (s as any).temp_subloc = (((s as any).locat ?? {})?.['A31_rand'] ?? 0) / 48 % 4;
          } else {
            if (((s as any).hour ?? 0) < 17) {
              (s as any).temp_subloc = (((s as any).locat ?? {})?.['A31_rand'] ?? 0) / 20 % 4;
            } else {
              if (((s as any).hour ?? 0) < 18) {
                (s as any).temp_subloc = (((s as any).locat ?? {})?.['A31_rand'] ?? 0) / 80 % 4;
              } else {
                if (((s as any).hour ?? 0) < 21) {
                  (s as any).temp_subloc = (((s as any).locat ?? {})?.['A31_rand'] ?? 0) / 28 % 4;
                }
              }
            }
          }
        }
      }
    }
    (s as any).result = 111 + ((s as any).temp_subloc ?? 0);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetLocats(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 100) {
    ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gphouse';
    ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'gp_room';
    ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = '';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 110) {
      ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gphouse';
      ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'main';
      ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = '';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 111) {
        ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gphouse';
        ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'main';
        ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = 'reading';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 112) {
          ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gphouse';
          ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'main';
          ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = 'watching_tv';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 113) {
            ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gphouse';
            ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'main';
            ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = 'repearing_clothes';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 114) {
              ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gphouse';
              ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'main';
              ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = 'knitting';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 120) {
                ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gphouse';
                ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'kitchen';
                ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = 'cooking';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 121) {
                  ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gphouse';
                  ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'kitchen';
                  ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = 'reading';
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 200) {
                    ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gpyard';
                    ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'garden';
                    ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = '';
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 210) {
                      ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_gpbath';
                      ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'start';
                      ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = '';
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 300) {
                        ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gadukino';
                        ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = '';
                        ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = '';
                      } else {
                        if (String((s as any).locArgs?.[1] ?? '') === 310) {
                          ((s as any).locat = (s as any).locat ?? {})['A31_loc'] = 'gad_church';
                          ((s as any).locat = (s as any).locat ?? {})['A31_arg'] = 'start';
                          ((s as any).locat = (s as any).locat ?? {})['A31_arg1'] = '';
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

function enterGetLocation(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateLocat(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).locat ?? 0)?.['A31_loc'] === 'gad_gphouse') {
    if (((s as any).locat ?? 0)?.['A31_arg'] === 'gp_room') {
      ((s as any).npcLocation = (s as any).npcLocation ?? {})['A31'] = 'Your grandmother is in her bedroom';
    } else {
      if (((s as any).locat ?? 0)?.['A31_arg'] === 'main') {
        ((s as any).npcLocation = (s as any).npcLocation ?? {})['A31'] = 'Your grandmother is in her livingroom';
      } else {
        if (((s as any).locat ?? 0)?.['A31_arg'] === 'kitchen') {
          ((s as any).npcLocation = (s as any).npcLocation ?? {})['A31'] = 'Your grandmother is in her kitchen';
        }
      }
    }
  } else {
    if (((s as any).locat ?? 0)?.['A31_loc'] === 'gad_gpyard') {
      ((s as any).npcLocation = (s as any).npcLocation ?? {})['A31'] = 'Your grandmother is in her garden';
    } else {
      if (((s as any).locat ?? 0)?.['A31_loc'] === 'gad_gpbath') {
        ((s as any).npcLocation = (s as any).npcLocation ?? {})['A31'] = 'Your grandmother is bathing in her sauna';
      } else {
        if (((s as any).locat ?? 0)?.['A31_loc'] === 'gadukino') {
          ((s as any).npcLocation = (s as any).npcLocation ?? {})['A31'] = 'Your grandmother is out and about in Gadukino';
        } else {
          if (((s as any).locat ?? 0)?.['A31_loc'] === 'gad_church') {
            ((s as any).npcLocation = (s as any).npcLocation ?? {})['A31'] = 'Your grandmother is at her church';
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
    case 'is_here':
      enterIsHere(s, scene);
      break;
    case 'was_here':
      enterWasHere(s, scene);
      break;
    case 'here_core':
      enterHereCore(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'update_locat':
      enterUpdateLocat(s, scene);
      break;
    case 'get_base_schedule':
      enterGetBaseSchedule(s, scene);
      break;
    case 'get_random_schedule':
      enterGetRandomSchedule(s, scene);
      break;
    case 'set_locats':
      enterSetLocats(s, scene);
      break;
    case 'getLocation':
      enterGetLocation(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gp_elene_schedule: LocationDef = {
  name: 'gp_elene_schedule',
  region: 'other',
  enter: enter,
};
