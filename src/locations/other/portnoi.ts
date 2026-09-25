import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).batch_sell = qspUntranslated(s, "{", { location: "portnoi" });
  (s as any).poshvalldrop = ((s as any).poshvalldrop ?? 0) + (1);
  scene.text('temp_cloStrength = ' + ((s as any).locArgs?.[0] ?? 0) + '_h[' + ((s as any).locArgs?.[1] ?? 0) + ']');
  if (((s as any).temp_cloStrength ?? 0) > 100) {
    qspCall(s, 'clothing', 'remove_item', ((s as any).locArgs?.[0] ?? 0), ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'money', 'earn', 750);
    (s as any).selltot = ((s as any).selltot ?? 0) + (750);
  } else {
    if (((s as any).temp_cloStrength ?? 0) > 45) {
      qspCall(s, 'clothing', 'remove_item', ((s as any).locArgs?.[0] ?? 0), ((s as any).locArgs?.[1] ?? 0));
      qspCall(s, 'money', 'earn', 500);
      (s as any).selltot = ((s as any).selltot ?? 0) + (500);
    } else {
      if (((s as any).temp_cloStrength ?? 0) > 30) {
        qspCall(s, 'clothing', 'remove_item', ((s as any).locArgs?.[0] ?? 0), ((s as any).locArgs?.[1] ?? 0));
        qspCall(s, 'money', 'earn', 300);
        (s as any).selltot = ((s as any).selltot ?? 0) + (300);
      } else {
        if (((s as any).temp_cloStrength ?? 0) > 0) {
          qspCall(s, 'clothing', 'remove_item', ((s as any).locArgs?.[0] ?? 0), ((s as any).locArgs?.[1] ?? 0));
          qspCall(s, 'money', 'earn', 100);
          (s as any).selltot = ((s as any).selltot ?? 0) + (100);
        } else {
          qspCall(s, 'clothing', 'remove_item', ((s as any).locArgs?.[0] ?? 0), ((s as any).locArgs?.[1] ?? 0));
        }
      }
    }
  }
  (s as any).temp_cloStrength = undefined;
  (s as any).poshvalldrop = 0;
  (s as any).selltot = 0;
  (s as any).i = 1;
  do {
    if (((s as any).gm_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    (s as any).i = 1;
    do {
      if (((s as any).gm_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      (s as any).i = 1;
      do {
        if (((s as any).gm_office ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_office_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
        }
        (s as any).i = ((s as any).i ?? 0) + (1);
        (s as any).i = 1;
        do {
          if (((s as any).gm_maid ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_maid_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
          }
          (s as any).i = ((s as any).i ?? 0) + (1);
          (s as any).i = 1;
          do {
            if (((s as any).gm_server ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_server_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
            }
            (s as any).i = ((s as any).i ?? 0) + (1);
            (s as any).i = 1;
            do {
              if (((s as any).gm_school ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).gm_school_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
              }
              (s as any).i = ((s as any).i ?? 0) + (1);
              (s as any).i = 1;
              do {
                if (((s as any).misc_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).misc_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                }
                (s as any).i = ((s as any).i ?? 0) + (1);
                (s as any).i = 1;
                do {
                  if (((s as any).cats_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).cats_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                  }
                  (s as any).i = ((s as any).i ?? 0) + (1);
                  (s as any).i = 1;
                  do {
                    if (((s as any).cats_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).cats_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                    }
                    (s as any).i = ((s as any).i ?? 0) + (1);
                    (s as any).i = 1;
                    do {
                      if (((s as any).flamingos_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).flamingos_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                      }
                      (s as any).i = ((s as any).i ?? 0) + (1);
                      (s as any).i = 1;
                      do {
                        if (((s as any).flamingos_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).flamingos_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                        }
                        (s as any).i = ((s as any).i ?? 0) + (1);
                        (s as any).i = 1;
                        do {
                          if (((s as any).coco_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).coco_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                          }
                          (s as any).i = ((s as any).i ?? 0) + (1);
                          (s as any).i = 1;
                          do {
                            if (((s as any).coco_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).coco_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                            }
                            (s as any).i = ((s as any).i ?? 0) + (1);
                            (s as any).i = 1;
                            do {
                              if (((s as any).fashionista_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).fashionista_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                              }
                              (s as any).i = ((s as any).i ?? 0) + (1);
                              (s as any).i = 1;
                              do {
                                if (((s as any).fashionista_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).fashionista_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                }
                                (s as any).i = ((s as any).i ?? 0) + (1);
                                (s as any).i = 1;
                                do {
                                  if (((s as any).moncheri_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).moncheri_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                  }
                                  (s as any).i = ((s as any).i ?? 0) + (1);
                                  (s as any).i = 1;
                                  do {
                                    if (((s as any).moncheri_gown ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).moncheri_gown_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                    }
                                    (s as any).i = ((s as any).i ?? 0) + (1);
                                    (s as any).i = 1;
                                    do {
                                      if (((s as any).scandalicious_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).scandalicious_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                      }
                                      (s as any).i = ((s as any).i ?? 0) + (1);
                                      (s as any).i = 1;
                                      do {
                                        if (((s as any).scandalicious_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).scandalicious_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                        }
                                        (s as any).i = ((s as any).i ?? 0) + (1);
                                        (s as any).i = 1;
                                        do {
                                          if (((s as any).scandalicious_bikinis ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).scandalicious_bikinis_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                          }
                                          (s as any).i = ((s as any).i ?? 0) + (1);
                                          (s as any).i = 1;
                                          do {
                                            if (((s as any).scandalicious_swimsuit ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).scandalicious_swimsuit_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                            }
                                            (s as any).i = ((s as any).i ?? 0) + (1);
                                            (s as any).i = 1;
                                            do {
                                              if (((s as any).allure_bikinis ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).allure_bikinis_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                              }
                                              (s as any).i = ((s as any).i ?? 0) + (1);
                                              (s as any).i = 1;
                                              do {
                                                if (((s as any).allure_swimsuit ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).allure_swimsuit_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                }
                                                (s as any).i = ((s as any).i ?? 0) + (1);
                                                (s as any).i = 1;
                                                do {
                                                  if (((s as any).fancy_burlesque ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).fancy_burlesque_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                  }
                                                  (s as any).i = ((s as any).i ?? 0) + (1);
                                                  (s as any).i = 1;
                                                  do {
                                                    if (((s as any).eroto_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).eroto_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                    }
                                                    (s as any).i = ((s as any).i ?? 0) + (1);
                                                    (s as any).i = 1;
                                                    do {
                                                      if (((s as any).eroto_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).eroto_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                      }
                                                      (s as any).i = ((s as any).i ?? 0) + (1);
                                                      (s as any).i = 1;
                                                      do {
                                                        if (((s as any).eroto_strip ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).eroto_strip_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                        }
                                                        (s as any).i = ((s as any).i ?? 0) + (1);
                                                        (s as any).i = 1;
                                                        do {
                                                          if (((s as any).salacious_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).salacious_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                          }
                                                          (s as any).i = ((s as any).i ?? 0) + (1);
                                                          (s as any).i = 1;
                                                          do {
                                                            if (((s as any).salacious_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).salacious_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                            }
                                                            (s as any).i = ((s as any).i ?? 0) + (1);
                                                            (s as any).i = 1;
                                                            do {
                                                              if (((s as any).dolls_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).dolls_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                              }
                                                              (s as any).i = ((s as any).i ?? 0) + (1);
                                                              (s as any).i = 1;
                                                              do {
                                                                if (((s as any).dolls_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).dolls_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                }
                                                                (s as any).i = ((s as any).i ?? 0) + (1);
                                                                (s as any).i = 1;
                                                                do {
                                                                  if (((s as any).bomba_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).bomba_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                  }
                                                                  (s as any).i = ((s as any).i ?? 0) + (1);
                                                                  (s as any).i = 1;
                                                                  do {
                                                                    if (((s as any).bomba_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).bomba_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                    }
                                                                    (s as any).i = ((s as any).i ?? 0) + (1);
                                                                    (s as any).i = 1;
                                                                    do {
                                                                      if (((s as any).nerdvana_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).nerdvana_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                      }
                                                                      (s as any).i = ((s as any).i ?? 0) + (1);
                                                                      (s as any).i = 1;
                                                                      do {
                                                                        if (((s as any).nerdvana_cosplay ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).nerdvana_cosplay_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                        }
                                                                        (s as any).i = ((s as any).i ?? 0) + (1);
                                                                        (s as any).i = 1;
                                                                        do {
                                                                          if (((s as any).nerdvana_bikinis ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).nerdvana_bikinis_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                          }
                                                                          (s as any).i = ((s as any).i ?? 0) + (1);
                                                                          (s as any).i = 1;
                                                                          do {
                                                                            if (((s as any).nerdvana_swimsuit ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).nerdvana_swimsuit_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                            }
                                                                            (s as any).i = ((s as any).i ?? 0) + (1);
                                                                            (s as any).i = 1;
                                                                            do {
                                                                              if (((s as any).danilovich_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).danilovich_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                              }
                                                                              (s as any).i = ((s as any).i ?? 0) + (1);
                                                                              (s as any).i = 1;
                                                                              do {
                                                                                if (((s as any).danilovich_swimsuit ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).danilovich_swimsuit_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                                }
                                                                                (s as any).i = ((s as any).i ?? 0) + (1);
                                                                                (s as any).i = 1;
                                                                                do {
                                                                                  if (((s as any).market_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).market_outfits_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                                  }
                                                                                  (s as any).i = ((s as any).i ?? 0) + (1);
                                                                                  (s as any).i = 1;
                                                                                  do {
                                                                                    if (((s as any).materinstvo_dress ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).materinstvo_dress_s ?? 0)?.[String((s as any).i ?? 0)] === 2) {
                                                                                    }
                                                                                    (s as any).i = ((s as any).i ?? 0) + (1);
                                                                                    (s as any).batch_sell = undefined;
                                                                                    scene.text(`You sold ${((s as any).poshvalldrop ?? '')} items of unwanted clothing for a total of ${qspFunc(s, 'money', 'string_profit', ((s as any).selltot ?? ''))}.`);
                                                                                  } while (((s as any).i ?? 0) <= Object.keys((s as any).materinstvo_dress ?? {}).length);
                                                                                } while (((s as any).i ?? 0) <= Object.keys((s as any).market_outfits ?? {}).length);
                                                                              } while (((s as any).i ?? 0) <= Object.keys((s as any).danilovich_swimsuit ?? {}).length);
                                                                            } while (((s as any).i ?? 0) <= Object.keys((s as any).danilovich_outfits ?? {}).length);
                                                                          } while (((s as any).i ?? 0) <= Object.keys((s as any).nerdvana_swimsuit ?? {}).length);
                                                                        } while (((s as any).i ?? 0) <= Object.keys((s as any).nerdvana_bikinis ?? {}).length);
                                                                      } while (((s as any).i ?? 0) <= Object.keys((s as any).nerdvana_cosplay ?? {}).length);
                                                                    } while (((s as any).i ?? 0) <= Object.keys((s as any).nerdvana_outfits ?? {}).length);
                                                                  } while (((s as any).i ?? 0) <= Object.keys((s as any).bomba_dress ?? {}).length);
                                                                } while (((s as any).i ?? 0) <= Object.keys((s as any).bomba_outfits ?? {}).length);
                                                              } while (((s as any).i ?? 0) <= Object.keys((s as any).dolls_dress ?? {}).length);
                                                            } while (((s as any).i ?? 0) <= Object.keys((s as any).dolls_outfits ?? {}).length);
                                                          } while (((s as any).i ?? 0) <= Object.keys((s as any).salacious_outfits ?? {}).length);
                                                        } while (((s as any).i ?? 0) <= Object.keys((s as any).salacious_dress ?? {}).length);
                                                      } while (((s as any).i ?? 0) <= Object.keys((s as any).eroto_strip ?? {}).length);
                                                    } while (((s as any).i ?? 0) <= Object.keys((s as any).eroto_outfits ?? {}).length);
                                                  } while (((s as any).i ?? 0) <= Object.keys((s as any).eroto_dress ?? {}).length);
                                                } while (((s as any).i ?? 0) <= Object.keys((s as any).fancy_burlesque ?? {}).length);
                                              } while (((s as any).i ?? 0) <= Object.keys((s as any).allure_swimsuit ?? {}).length);
                                            } while (((s as any).i ?? 0) <= Object.keys((s as any).allure_bikinis ?? {}).length);
                                          } while (((s as any).i ?? 0) <= Object.keys((s as any).scandalicious_swimsuit ?? {}).length);
                                        } while (((s as any).i ?? 0) <= Object.keys((s as any).scandalicious_bikinis ?? {}).length);
                                      } while (((s as any).i ?? 0) <= Object.keys((s as any).scandalicious_outfits ?? {}).length);
                                    } while (((s as any).i ?? 0) <= Object.keys((s as any).scandalicious_dress ?? {}).length);
                                  } while (((s as any).i ?? 0) <= Object.keys((s as any).moncheri_gown ?? {}).length);
                                } while (((s as any).i ?? 0) <= Object.keys((s as any).moncheri_dress ?? {}).length);
                              } while (((s as any).i ?? 0) <= Object.keys((s as any).fashionista_outfits ?? {}).length);
                            } while (((s as any).i ?? 0) <= Object.keys((s as any).fashionista_dress ?? {}).length);
                          } while (((s as any).i ?? 0) <= Object.keys((s as any).coco_outfits ?? {}).length);
                        } while (((s as any).i ?? 0) <= Object.keys((s as any).coco_dress ?? {}).length);
                      } while (((s as any).i ?? 0) <= Object.keys((s as any).flamingos_outfits ?? {}).length);
                    } while (((s as any).i ?? 0) <= Object.keys((s as any).flamingos_dress ?? {}).length);
                  } while (((s as any).i ?? 0) <= Object.keys((s as any).cats_dress ?? {}).length);
                } while (((s as any).i ?? 0) <= Object.keys((s as any).cats_outfits ?? {}).length);
              } while (((s as any).i ?? 0) <= Object.keys((s as any).misc_outfits ?? {}).length);
            } while (((s as any).i ?? 0) <= Object.keys((s as any).school ?? {}).length);
          } while (((s as any).i ?? 0) <= Object.keys((s as any).gm_server ?? {}).length);
        } while (((s as any).i ?? 0) <= Object.keys((s as any).gm_maid ?? {}).length);
      } while (((s as any).i ?? 0) <= Object.keys((s as any).office ?? {}).length);
    } while (((s as any).i ?? 0) <= Object.keys((s as any).gm_dress ?? {}).length);
  } while (((s as any).i ?? 0) <= Object.keys((s as any).gm_outfits ?? {}).length);
  scene.build();
}

export const portnoi: LocationDef = {
  name: 'portnoi',
  region: 'other',
  enter: enter,
};
