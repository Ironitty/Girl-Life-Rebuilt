// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'allure_bikinis') {
    (s as any).result = 140;
  } else {
    (s as any).result = 30;
    if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious_bikinis') {
      (s as any).result = 70;
    } else {
      (s as any).result = 100;
      if (((s as any).locArgs?.[1] ?? 0) === 'danilovich_swimsuit') {
        (s as any).result = 31;
      } else {
        (s as any).result = 30;
        if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious_swimsuit') {
          (s as any).result = 40;
        } else {
          (s as any).result = 40;
          if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana_cosplay') {
            (s as any).result = 160;
          } else {
            (s as any).result = 100;
            if (((s as any).locArgs?.[1] ?? 0) === 'gm_maid') {
              (s as any).result = 40;
            } else {
              (s as any).result = 41;
              if (((s as any).locArgs?.[1] ?? 0) === 'gm_school') {
                (s as any).result = 62;
              } else {
                (s as any).result = 30;
                if (((s as any).locArgs?.[1] ?? 0) === 'eroto_strip') {
                  (s as any).result = 30;
                } else {
                  (s as any).result = 100;
                  if (((s as any).locArgs?.[1] ?? 0) === 'cats_dress') {
                    (s as any).result = 221;
                  } else {
                    (s as any).result = 300;
                    if (((s as any).locArgs?.[1] ?? 0) === 'dolls_dress') {
                      (s as any).result = 140;
                    } else {
                      (s as any).result = 140;
                      if (((s as any).locArgs?.[1] ?? 0) === 'fashionista_dress') {
                        (s as any).result = 200;
                      } else {
                        (s as any).result = 180;
                        if (((s as any).locArgs?.[1] ?? 0) === 'materinstvo_dress') {
                          (s as any).result = 10;
                        } else {
                          (s as any).result = 100;
                          if (((s as any).locArgs?.[1] ?? 0) === 'gm_dress') {
                            (s as any).result = 300;
                          } else {
                            (s as any).result = 150;
                            if (((s as any).locArgs?.[1] ?? 0) === 'salacious_dress') {
                              (s as any).result = 61;
                            } else {
                              (s as any).result = 100;
                              if (((s as any).locArgs?.[1] ?? 0) === 'cats_outfits') {
                                (s as any).result = 200;
                              } else {
                                (s as any).result = 160;
                                if (((s as any).locArgs?.[1] ?? 0) === 'dolls_outfits') {
                                  (s as any).result = 93;
                                } else {
                                  (s as any).result = 162;
                                  if (((s as any).locArgs?.[1] ?? 0) === 'eroto_outfits') {
                                    (s as any).result = 100;
                                  } else {
                                    (s as any).result = 20;
                                    if (((s as any).locArgs?.[1] ?? 0) === 'flamingos_outfits') {
                                      (s as any).result = 160;
                                    } else {
                                      (s as any).result = 200;
                                      if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana_outfits') {
                                        (s as any).result = 90;
                                      } else {
                                        (s as any).result = 30;
                                        if (((s as any).locArgs?.[1] ?? 0) === 'market_outfits') {
                                          (s as any).result = 40;
                                        } else {
                                          (s as any).result = 20;
                                        }
                                        return;
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

export const clothing: LocationDef = {
  name: 'clothing',
  title: 'This uniform is so short that it\'s an outright mockery of the school regulation on skirt length.',
  region: 'other',
  enter: enter,
};
