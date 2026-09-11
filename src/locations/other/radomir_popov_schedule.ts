// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) === 1  &&  (((s as any).month ?? 0) < 6  ||  ((s as any).year ?? 0) === 2016)) {
    if (((s as any).week ?? 0) < 6) {
      if (((s as any).hour ?? 0) < 8) {
        ((s as any).locat ?? {})['A154'] = 20;
      } else {
        if (((s as any).hour ?? 0) < 14) {
          ((s as any).locat ?? {})['A154'] = 21;
        } else {
          if (((s as any).hour ?? 0) < 16) {
            if (((s as any).locat ?? 0)?.['154_rand1'] === ((s as any).daystart ?? 0)) {
              ((s as any).locat ?? {})['A154'] = ((s as any).locat ?? 0)?.['154_save1'];
            } else {
              ((s as any).locat ?? {})['A154'] = 20;
            }
          } else {
            if (((s as any).hour ?? 0) < 18) {
              if (((s as any).locat ?? 0)?.['154_rand2'] === ((s as any).daystart ?? 0)) {
                ((s as any).locat ?? {})['A154'] = ((s as any).locat ?? 0)?.['154_save2'];
              } else {
                if (((s as any).week ?? 0) === 3) {
                  ((s as any).locat ?? {})['A154'] = 24;
                } else {
                  ((s as any).locat ?? {})['A154'] = 23;
                }
              }
            } else {
              if (((s as any).hour ?? 0) < 20) {
                if (((s as any).locat ?? 0)?.['154_rand2'] === ((s as any).daystart ?? 0)) {
                  ((s as any).locat ?? {})['A154'] = ((s as any).locat ?? 0)?.['154_save2'];
                } else {
                  if (((s as any).week ?? 0) === 3) {
                    ((s as any).locat ?? {})['A154'] = 24;
                  } else {
                    ((s as any).locat ?? {})['A154'] = 20;
                  }
                }
              } else {
                if (((s as any).hour ?? 0) < 22) {
                  if (((s as any).locat ?? 0)?.['154_rand3'] === ((s as any).daystart ?? 0)) {
                    ((s as any).locat ?? {})['A154'] = ((s as any).locat ?? 0)?.['154_save3'];
                  } else {
                    if (((s as any).week ?? 0) === 3) {
                      ((s as any).locat ?? {})['A154'] = 24;
                    } else {
                      if (((s as any).week ?? 0) === 5) {
                        ((s as any).locat ?? {})['A154'] = 25;
                      } else {
                        ((s as any).locat ?? {})['A154'] = 20;
                      }
                    }
                  }
                } else {
                  if (((s as any).week ?? 0) === 5) {
                    ((s as any).locat ?? {})['A154'] = 25;
                  } else {
                    ((s as any).locat ?? {})['A154'] = 20;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).week ?? 0) === 6) {
        if (((s as any).hour ?? 0) < 12) {
          ((s as any).locat ?? {})['A154'] = 20;
        } else {
          if (((s as any).hour ?? 0) < 18) {
            ((s as any).locat ?? {})['A154'] = 23;
          } else {
            if (((s as any).hour ?? 0) < 20) {
              ((s as any).locat ?? {})['A154'] = 20;
            } else {
              ((s as any).locat ?? {})['A154'] = 25;
            }
          }
        }
      } else {
        if (((s as any).hour ?? 0) < 12) {
          ((s as any).locat ?? {})['A154'] = 20;
        } else {
          if (((s as any).hour ?? 0) < 18) {
            ((s as any).locat ?? {})['A154'] = 23;
          } else {
            if (((s as any).hour ?? 0) < 22) {
              ((s as any).locat ?? {})['A154'] = 20;
            } else {
              ((s as any).locat ?? {})['A154'] = 20;
            }
          }
        }
      }
    }
  } else {
    if (((s as any).yearstart ?? 0) === 1  ||  (((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) < 10)) {
      ((s as any).locat ?? {})['A154'] = 30;
    } else {
      if (((s as any).week ?? 0) === 1) {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
          ((s as any).locat ?? {})['A154'] = 9;
        } else {
          if (((s as any).hour ?? 0) > 18) {
            ((s as any).locat ?? {})['A154'] = 3;
          }
        }
      } else {
        if (((s as any).week ?? 0) === 2) {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
            ((s as any).locat ?? {})['A154'] = 9;
          } else {
            if (((s as any).hour ?? 0) > 18) {
              ((s as any).locat ?? {})['A154'] = 3;
            }
          }
        } else {
          if (((s as any).week ?? 0) === 3) {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
              ((s as any).locat ?? {})['A154'] = 9;
            } else {
              if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
                ((s as any).locat ?? {})['A154'] = 8;
              }
            }
          } else {
            if (((s as any).week ?? 0) === 4) {
              if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                ((s as any).locat ?? {})['A154'] = 9;
              } else {
                if (((s as any).hour ?? 0) > 18) {
                  ((s as any).locat ?? {})['A154'] = 3;
                }
              }
            } else {
              if (((s as any).week ?? 0) === 5) {
                if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                  ((s as any).locat ?? {})['A154'] = 9;
                } else {
                  if (((s as any).hour ?? 0) >= 20) {
                    ((s as any).locat ?? {})['A154'] = 0;
                  }
                }
              } else {
                if (((s as any).week ?? 0) === 6) {
                  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
                    ((s as any).locat ?? {})['A154'] = 3;
                  } else {
                    if (((s as any).hour ?? 0) >= 20) {
                      ((s as any).locat ?? {})['A154'] = 0;
                    }
                  }
                } else {
                  if (((s as any).week ?? 0) === 7) {
                    ((s as any).locat ?? {})['A154'] = 3;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['A154'] > 0  &&  ((s as any).locat ?? 0)?.['A154'] < 8) {
  }
  scene.build();
}

function enterGetLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A154'] === 0) {
    ((s as any).npcLocation ?? {})['A154'] = 'Radomir not home Fri and Sat \' + func(\'time\', \'get_time_string\', 20, 0) + \' for rest of night.';
  } else {
    if (((s as any).locat ?? 0)?.['A154'] === 1) {
      ((s as any).npcLocation ?? {})['A154'] = 'Radomir in the hallway.';
    } else {
      if (((s as any).locat ?? 0)?.['A154'] === 2) {
        ((s as any).npcLocation ?? {})['A154'] = 'Radomir in Anushka\'s room.';
      } else {
        if (((s as any).locat ?? 0)?.['A154'] === 3) {
          ((s as any).npcLocation ?? {})['A154'] = 'Radomir in Radomir\'s room.';
        } else {
          if (((s as any).locat ?? 0)?.['A154'] === 4) {
            ((s as any).npcLocation ?? {})['A154'] = 'Radomir in the kitchen.';
          } else {
            if (((s as any).locat ?? 0)?.['A154'] === 5) {
              ((s as any).npcLocation ?? {})['A154'] = 'Radomir in the livingroom.';
            } else {
              if (((s as any).locat ?? 0)?.['A154'] === 6) {
                ((s as any).npcLocation ?? {})['A154'] = 'Radomir in Valentin\'s and Arkadi\'s room.';
              } else {
                if (((s as any).locat ?? 0)?.['A154'] === 7) {
                  ((s as any).npcLocation ?? {})['A154'] = 'Radomir in the bathroom.';
                } else {
                  if (((s as any).locat ?? 0)?.['A154'] === 8) {
                    ((s as any).npcLocation ?? {})['A154'] = 'Radomir is in the garage with the band.';
                  } else {
                    if (((s as any).locat ?? 0)?.['A154'] === 9) {
                      ((s as any).npcLocation ?? {})['A154'] = 'Radomir is at work, mechanic Mon-Fri 8 to 17.';
                    } else {
                      if (((s as any).locat ?? 0)?.['A154'] === 10) {
                        ((s as any).npcLocation ?? {})['A154'] = 'Radomir is in the garage working on his bike Mon 17-23.';
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
    case 'getLocation':
      enterGetLocation(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const radomir_popov_schedule: LocationDef = {
  name: 'radomir_popov_schedule',
  region: 'other',
  enter: enter,
};
