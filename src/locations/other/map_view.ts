// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWorld(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_center') {
  } else {
    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(17))) === 'city_residential') {
    } else {
      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(16))) === 'city_industrial') {
      } else {
        if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_island') {
        } else {
          if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(14))) === 'city_suburbs') {
          } else {
            if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'city_park') {
            } else {
              if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'city_lake') {
              } else {
                if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_canals') {
                } else {
                  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(14))) === 'city_redlight') {
                  } else {
                    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_market') {
                    } else {
                      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'uni_') {
                      } else {
                        if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'pushkin_parks') {
                        } else {
                          if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(7))) === 'pushkin') {
                          } else {
                            if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(15))) === 'pav_commercial') {
                            } else {
                              if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(16))) === 'pav_residential') {
                              } else {
                                if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(15))) === 'pav_industrial') {
                                } else {
                                  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'pav_complex') {
                                  } else {
                                    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'pav_park') {
                                    } else {
                                      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'pav_market') {
                                      } else {
                                        if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'gad_'  ||  ((s as any).locArgs?.[0] ?? 0) === 'gadukino') {
                                        } else {
                                          if (((s as any).locArgs?.[0] ?? 0) === 'metro') {
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 'train') {
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 'bus') {
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 'road') {
                                                  // TODO-QSP: else:
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
  // TODO-QSP: dynamic text: $map_nav
  scene.text('$map_nav');
  scene.img(`images/system/map/${((s as any).map_img || '')}`);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'world':
      enterWorld(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const map_view: LocationDef = {
  name: 'map_view',
  region: 'other',
  enter: enter,
};
