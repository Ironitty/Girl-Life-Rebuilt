import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) === 1  &&  (((s as any).month ?? 0) < 6  ||  ((s as any).year ?? 0) === 2016)) {
    if (((s as any).week ?? 0) < 6) {
      if (((s as any).hour ?? 0) < 8) {
        ((s as any).locat = (s as any).locat ?? {})['A156'] = 20;
      } else {
        if (((s as any).hour ?? 0) < 16) {
          ((s as any).locat = (s as any).locat ?? {})['A156'] = 23;
        } else {
          if (((s as any).hour ?? 0) < 20) {
            if (((s as any).week ?? 0) === 3) {
              ((s as any).locat = (s as any).locat ?? {})['A156'] = 24;
            } else {
              ((s as any).locat = (s as any).locat ?? {})['A156'] = 23;
            }
          } else {
            if (((s as any).hour ?? 0) < 22) {
              if (((s as any).week ?? 0) === 3) {
                ((s as any).locat = (s as any).locat ?? {})['A156'] = 24;
              } else {
                if (((s as any).week ?? 0) === 5) {
                  ((s as any).locat = (s as any).locat ?? {})['A156'] = 25;
                } else {
                  ((s as any).locat = (s as any).locat ?? {})['A156'] = 23;
                }
              }
            } else {
              if (((s as any).week ?? 0) === 5) {
                ((s as any).locat = (s as any).locat ?? {})['A156'] = 25;
              } else {
                ((s as any).locat = (s as any).locat ?? {})['A156'] = 20;
              }
            }
          }
        }
      }
    } else {
      if (((s as any).week ?? 0) === 6) {
        if (((s as any).hour ?? 0) < 9) {
          ((s as any).locat = (s as any).locat ?? {})['A156'] = 20;
        } else {
          if (((s as any).hour ?? 0) < 20) {
            ((s as any).locat = (s as any).locat ?? {})['A156'] = 23;
          } else {
            ((s as any).locat = (s as any).locat ?? {})['A156'] = 25;
          }
        }
      } else {
        if (((s as any).hour ?? 0) < 9) {
          ((s as any).locat = (s as any).locat ?? {})['A156'] = 20;
        } else {
          if (((s as any).hour ?? 0) < 22) {
            ((s as any).locat = (s as any).locat ?? {})['A156'] = 23;
          } else {
            ((s as any).locat = (s as any).locat ?? {})['A156'] = 20;
          }
        }
      }
    }
  } else {
    if (((s as any).yearstart ?? 0) === 1  ||  (((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) < 10)) {
      ((s as any).locat = (s as any).locat ?? {})['A156'] = 30;
    } else {
      if (((s as any).week ?? 0) === 1) {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
          ((s as any).locat = (s as any).locat ?? {})['A156'] = 9;
        }
      } else {
        if (((s as any).week ?? 0) === 2) {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
            ((s as any).locat = (s as any).locat ?? {})['A156'] = 9;
          }
        } else {
          if (((s as any).week ?? 0) === 3) {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
              ((s as any).locat = (s as any).locat ?? {})['A156'] = 9;
            } else {
              if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23) {
                ((s as any).locat = (s as any).locat ?? {})['A156'] = 8;
              }
            }
          } else {
            if (((s as any).week ?? 0) === 4) {
              if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                ((s as any).locat = (s as any).locat ?? {})['A156'] = 9;
              }
            } else {
              if (((s as any).week ?? 0) === 5) {
                if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
                  ((s as any).locat = (s as any).locat ?? {})['A156'] = 9;
                } else {
                  if (((s as any).hour ?? 0) >= 20) {
                    ((s as any).locat = (s as any).locat ?? {})['A156'] = 0;
                  }
                }
              } else {
                if (((s as any).week ?? 0) === 6) {
                  if (((s as any).hour ?? 0) >= 20) {
                    ((s as any).locat = (s as any).locat ?? {})['A156'] = 0;
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
  if (((s as any).locat ?? 0)?.['A156'] > 0  &&  ((s as any).locat ?? 0)?.['A156'] < 8) {
    (s as any).ArkadiLocCity = 'home';
  } else {
    (s as any).ArkadiLocCity = 'notHome';
  }
  scene.build();
}

function enterGetLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A156'] === 0) {
    ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi not home Fri and Sat ' + qspFunc(s, 'time', 'get_time_string', 20, 0) + ' for rest of night.';
  } else {
    if (((s as any).locat ?? 0)?.['A156'] === 1) {
      ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi in the hallway.';
    } else {
      if (((s as any).locat ?? 0)?.['A156'] === 2) {
        ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi in Anushka\'s room.';
      } else {
        if (((s as any).locat ?? 0)?.['A156'] === 3) {
          ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi in Radomir\'s room.';
        } else {
          if (((s as any).locat ?? 0)?.['A156'] === 4) {
            ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi in the kitchen.';
          } else {
            if (((s as any).locat ?? 0)?.['A156'] === 5) {
              ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi in the livingroom.';
            } else {
              if (((s as any).locat ?? 0)?.['A156'] === 6) {
                ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi in Valentin\'s and his room.';
              } else {
                if (((s as any).locat ?? 0)?.['A156'] === 7) {
                  ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi in the bathroom.';
                } else {
                  if (((s as any).locat ?? 0)?.['A156'] === 8) {
                    ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi is in the garage with the band.';
                  } else {
                    if (((s as any).locat ?? 0)?.['A156'] === 9) {
                      ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi is at work, mechanic Mon-Fri 8 to 17.';
                    } else {
                      if (((s as any).locat ?? 0)?.['A156'] === 10) {
                        ((s as any).npcLocation = (s as any).npcLocation ?? {})['A156'] = 'Arkadi is in the garage working on his bike Mon 17-23.';
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

export const arkadi_fyodorov_schedule: LocationDef = {
  name: 'arkadi_fyodorov_schedule',
  region: 'other',
  enter: enter,
};
