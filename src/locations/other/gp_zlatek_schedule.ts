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
  (s as any).result = qspFunc(s, 'gp_zlatek_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A32_loc'], ((s as any).locat ?? 0)?.['A32_arg']);
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
  (s as any).result = qspFunc(s, 'gp_zlatek_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A32_loc_prev'], ((s as any).locat ?? 0)?.['A32_arg_prev']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHereCore(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).locArgs?.[3] ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).locArgs?.[4] ?? 0) === ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['A32_rand'] = Math.floor(Math.random() * 240) + 0;
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['A32_loc_prev'] = ((s as any).locat ?? 0)?.['A32_loc'];
  ((s as any).locat = (s as any).locat ?? {})['A32_arg_prev'] = ((s as any).locat ?? 0)?.['A32_arg'];
  ((s as any).locat = (s as any).locat ?? {})['A32_arg1_prev'] = ((s as any).locat ?? 0)?.['A32_arg1'];
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateLocat(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateLocat(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_zlatek_locat = qspFunc(s, 'gp_zlatek_schedule', 'get_base_schedule');
  if ((!((s as any).sunWeather ?? 0))) {
    if (((s as any).temp_zlatek_locat ?? 0) === 200  ||  ((s as any).temp_zlatek_locat ?? 0) === 320  ||  ((s as any).temp_zlatek_locat ?? 0) === 330) {
      (s as any).temp_zlatek_locat = 110;
    }
  }
  (s as any).temp_zlatek_locat = qspFunc(s, 'gp_zlatek_schedule', 'get_random_schedule', ((s as any).temp_zlatek_locat ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_zlatek_locat ?? 0)]; enterSetLocats(s, scene); (s as any).locArgs = __savedLocArgs; }
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
              (s as any).result = 330;
            }
          }
        } else {
          if (((s as any).hour ?? 0) < 12) {
            if (((s as any).week ?? 0) < 4) {
              (s as any).result = 0;
            } else {
              if (((s as any).week ?? 0) === 4) {
                (s as any).result = 110;
              } else {
                if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
                  (s as any).result = 330;
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
      if (((s as any).locat ?? 0)?.['A32_rand'] % 4 === 0) {
        (s as any).result = 110;
      } else {
        if (((s as any).locat ?? 0)?.['A32_rand'] % 4 === 1) {
          (s as any).result = 200;
        } else {
          if (((s as any).locat ?? 0)?.['A32_rand'] % 4 === 2) {
            (s as any).result = 220;
          } else {
            (s as any).result = 320;
          }
        }
      }
    } else {
      if (((s as any).locat ?? 0)?.['A32_rand'] / 4 % 4 === 0) {
        (s as any).result = 110;
      } else {
        if (((s as any).locat ?? 0)?.['A32_rand'] / 4 % 4 === 1) {
          (s as any).result = 200;
        } else {
          if (((s as any).locat ?? 0)?.['A32_rand'] / 4 % 4 === 2) {
            (s as any).result = 220;
          } else {
            (s as any).result = 320;
          }
        }
      }
    }
  }
  if (((s as any).result ?? 0) === 110) {
    if (((s as any).hour ?? 0) < 9) {
      (s as any).temp_subloc = (((s as any).locat ?? {})?.['A32_rand'] ?? 0) / 16 % 2;
    } else {
      if (((s as any).hour ?? 0) < 11) {
        (s as any).temp_subloc = (((s as any).locat ?? {})?.['A32_rand'] ?? 0) / 32 % 2;
      } else {
        if (((s as any).hour ?? 0) < 13) {
          (s as any).temp_subloc = (((s as any).locat ?? {})?.['A32_rand'] ?? 0) / 64 % 2;
        } else {
          if (((s as any).hour ?? 0) < 15) {
            (s as any).temp_subloc = (((s as any).locat ?? {})?.['A32_rand'] ?? 0) / 128 % 2;
          } else {
            if (((s as any).hour ?? 0) < 17) {
              (s as any).temp_subloc = (((s as any).locat ?? {})?.['A32_rand'] ?? 0) / 48 % 2;
            } else {
              if (((s as any).hour ?? 0) < 19) {
                (s as any).temp_subloc = (((s as any).locat ?? {})?.['A32_rand'] ?? 0) / 96 % 2;
              } else {
                if (((s as any).hour ?? 0) < 21) {
                  (s as any).temp_subloc = (((s as any).locat ?? {})?.['A32_rand'] ?? 0) / 80 % 2;
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
  if (((s as any).locArgs?.[1] ?? 0) === 100) {
    ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_gphouse';
    ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'gp_room';
    ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 110) {
      ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_gphouse';
      ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'main';
      ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 111) {
        ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_gphouse';
        ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'main';
        ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = 'reading';
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 112) {
          ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_gphouse';
          ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'main';
          ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = 'watching_tv';
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 120) {
            ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_gphouse';
            ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'kitchen';
            ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = 'reading';
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 200) {
              ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_gpyard';
              ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'garden';
              ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 210) {
                ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_gpbath';
                ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'start';
                ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 220) {
                  ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_gpbarn';
                  ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = '';
                  ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 300) {
                    ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gadukino';
                    ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = '';
                    ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 310) {
                      ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_church';
                      ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'start';
                      ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 320) {
                        ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_river';
                        ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'start';
                        ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 330) {
                          ((s as any).locat = (s as any).locat ?? {})['A32_loc'] = 'gad_field';
                          ((s as any).locat = (s as any).locat ?? {})['A32_arg'] = 'field';
                          ((s as any).locat = (s as any).locat ?? {})['A32_arg1'] = '';
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
  if (((s as any).locat ?? 0)?.['A32_loc'] === 'gad_gphouse') {
    if (((s as any).locat ?? 0)?.['A32_arg'] === 'gp_room') {
      ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is in his bedroom';
    } else {
      if (((s as any).locat ?? 0)?.['A32_arg'] === 'main') {
        ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is in his livingroom';
      } else {
        if (((s as any).locat ?? 0)?.['A32_arg'] === 'kitchen') {
          ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is in his kitchen';
        }
      }
    }
  } else {
    if (((s as any).locat ?? 0)?.['A32_loc'] === 'gad_gpyard') {
      ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is in his garden';
    } else {
      if (((s as any).locat ?? 0)?.['A32_loc'] === 'gad_gpbath') {
        ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is bathing in his sauna';
      } else {
        if (((s as any).locat ?? 0)?.['A32_loc'] === 'gad_gpbarn') {
          ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is at his stables';
        } else {
          if (((s as any).locat ?? 0)?.['A32_loc'] === 'gad_gpgadukino') {
            ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is out and about in Gadukino';
          } else {
            if (((s as any).locat ?? 0)?.['A32_loc'] === 'gad_church') {
              ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is at his church';
            } else {
              if (((s as any).locat ?? 0)?.['A32_loc'] === 'gad_river') {
                ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is fishing at the river';
              } else {
                if (((s as any).locat ?? 0)?.['A32_loc'] === 'gad_field') {
                  ((s as any).npcLocation = (s as any).npcLocation ?? {})['A32'] = 'Your grandfather is at the field';
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

export const gp_zlatek_schedule: LocationDef = {
  name: 'gp_zlatek_schedule',
  region: 'other',
  enter: enter,
};
