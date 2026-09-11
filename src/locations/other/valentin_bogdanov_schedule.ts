// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) === 1  &&  (((s as any).month ?? 0) < 6  ||  ((s as any).year ?? 0) === 2016)) {
    if (((s as any).week ?? 0) < 6) {
      if (((s as any).hour ?? 0) < 8) {
        ((s as any).locat ?? {})['A158'] = 20;
      } else {
        if (((s as any).hour ?? 0) < 16) {
          ((s as any).locat ?? {})['A158'] = 23;
        } else {
          if (((s as any).hour ?? 0) < 20) {
            if (((s as any).week ?? 0) === 3) {
              ((s as any).locat ?? {})['A158'] = 24;
            } else {
              ((s as any).locat ?? {})['A158'] = 23;
            }
          } else {
            if (((s as any).hour ?? 0) < 22) {
              if (((s as any).week ?? 0) === 3) {
                ((s as any).locat ?? {})['A158'] = 24;
              } else {
                if (((s as any).week ?? 0) === 5) {
                  ((s as any).locat ?? {})['A158'] = 25;
                } else {
                  ((s as any).locat ?? {})['A158'] = 23;
                }
              }
            } else {
              if (((s as any).week ?? 0) === 5) {
                ((s as any).locat ?? {})['A158'] = 25;
              } else {
                ((s as any).locat ?? {})['A158'] = 20;
              }
            }
          }
        }
      }
    } else {
      if (((s as any).week ?? 0) === 6) {
        if (((s as any).hour ?? 0) < 9) {
          ((s as any).locat ?? {})['A158'] = 20;
        } else {
          if (((s as any).hour ?? 0) < 20) {
            ((s as any).locat ?? {})['A158'] = 23;
          } else {
            ((s as any).locat ?? {})['A158'] = 25;
          }
        }
      } else {
        if (((s as any).hour ?? 0) < 9) {
          ((s as any).locat ?? {})['A158'] = 20;
        } else {
          if (((s as any).hour ?? 0) < 22) {
            ((s as any).locat ?? {})['A158'] = 23;
          } else {
            ((s as any).locat ?? {})['A158'] = 20;
          }
        }
      }
    }
  } else {
    if (((s as any).yearstart ?? 0) === 1  ||  (((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) < 10)) {
      ((s as any).locat ?? {})['A158'] = 30;
    } else {
      if (((s as any).week ?? 0) === 1) {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
          ((s as any).locat ?? {})['A158'] = 9;
        } else {
          if (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 23) {
            ((s as any).locat ?? {})['A158'] = 10;
          }
        }
      } else {
        if (((s as any).week ?? 0) === 2) {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
            ((s as any).locat ?? {})['A158'] = 9;
          } else {
            if (((s as any).hour ?? 0) >= 18) {
              ((s as any).locat ?? {})['A158'] = 6;
            }
          }
        } else {
          if (((s as any).week ?? 0) === 3) {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
              ((s as any).locat ?? {})['A158'] = 9;
            } else {
              if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
                ((s as any).locat ?? {})['A158'] = 8;
              }
            }
          } else {
            if (((s as any).week ?? 0) === 4) {
              if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                ((s as any).locat ?? {})['A158'] = 9;
              } else {
                if (((s as any).hour ?? 0) >= 18) {
                  ((s as any).locat ?? {})['A158'] = 6;
                }
              }
            } else {
              if (((s as any).week ?? 0) === 5) {
                if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                  ((s as any).locat ?? {})['A158'] = 9;
                } else {
                  if (((s as any).hour ?? 0) >= 20) {
                    ((s as any).locat ?? {})['A158'] = 0;
                  }
                }
              } else {
                if (((s as any).week ?? 0) === 6) {
                  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
                    ((s as any).locat ?? {})['A158'] = 6;
                  } else {
                    if (((s as any).hour ?? 0) >= 20) {
                      ((s as any).locat ?? {})['A158'] = 0;
                    }
                  }
                } else {
                  if (((s as any).week ?? 0) === 7) {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['A158'] > 0  &&  ((s as any).locat ?? 0)?.['A158'] < 8) {
  }
  scene.build();
}

function enterGetLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A158'] === 0) {
    ((s as any).npcLocation ?? {})['A158'] = 'Valentin not home Fri and Sat \'+func(\'time\', \'get_time_string\', 20, 0)+\' for rest of night.';
  } else {
    if (((s as any).locat ?? 0)?.['A158'] === 1) {
      ((s as any).npcLocation ?? {})['A158'] = 'Valentin in the hallway.';
    } else {
      if (((s as any).locat ?? 0)?.['A158'] === 2) {
        ((s as any).npcLocation ?? {})['A158'] = 'Valentin in Anushka\'s room.';
      } else {
        if (((s as any).locat ?? 0)?.['A158'] === 3) {
          ((s as any).npcLocation ?? {})['A158'] = 'Valentin in Radomir\'s room.';
        } else {
          if (((s as any).locat ?? 0)?.['A158'] === 4) {
            ((s as any).npcLocation ?? {})['A158'] = 'Valentin in the kitchen.';
          } else {
            if (((s as any).locat ?? 0)?.['A158'] === 5) {
              ((s as any).npcLocation ?? {})['A158'] = 'Valentin in the livingroom.';
            } else {
              if (((s as any).locat ?? 0)?.['A158'] === 6) {
                ((s as any).npcLocation ?? {})['A158'] = 'Valentin in his and Arkadi\'s room.';
              } else {
                if (((s as any).locat ?? 0)?.['A158'] === 7) {
                  ((s as any).npcLocation ?? {})['A158'] = 'Valentin in the bathroom.';
                } else {
                  if (((s as any).locat ?? 0)?.['A158'] === 8) {
                    ((s as any).npcLocation ?? {})['A158'] = 'Valentin is in the garage with the band.';
                  } else {
                    if (((s as any).locat ?? 0)?.['A158'] === 9) {
                      ((s as any).npcLocation ?? {})['A158'] = 'Valentin is at work, mechanic Mon-Fri 8 to 17.';
                    } else {
                      if (((s as any).locat ?? 0)?.['A158'] === 10) {
                        ((s as any).npcLocation ?? {})['A158'] = 'Valentin is in the garage working on his bike Mon 17-23.';
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
    case 'getLocation':
      enterGetLocation(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const valentin_bogdanov_schedule: LocationDef = {
  name: 'valentin_bogdanov_schedule',
  region: 'other',
  enter: enter,
};
