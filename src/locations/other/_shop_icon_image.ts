// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'allure') {
  } else {
    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'bomba') {
    } else {
      if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'cats') {
      } else {
        if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'coco') {
        } else {
          if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'danilovich') {
          } else {
            if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'dolls') {
            } else {
              if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'eroto'  ||  ((s as any).locArgs?.[0] ?? 0) === 'sexshop') {
              } else {
                if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'fancy') {
                } else {
                  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'fashionista') {
                  } else {
                    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'flamingos') {
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 'gm_school') {
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 'gm_office') {
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 'gm_maid') {
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 'gm_server') {
                            } else {
                              if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'gm') {
                              } else {
                                if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'lusso') {
                                } else {
                                  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'materinstvo') {
                                  } else {
                                    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'market') {
                                    } else {
                                      if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'misc') {
                                      } else {
                                        if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'moncheri') {
                                        } else {
                                          if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'nerdvana') {
                                          } else {
                                            if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'salacious'  ||  ((s as any).locArgs?.[0] ?? 0) === 'exhibitshop') {
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious_swimwear') {
                                              } else {
                                                if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'scandalicious') {
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

export const _shop_icon_image: LocationDef = {
  name: '_shop_icon_image',
  region: 'other',
  enter: enter,
};
