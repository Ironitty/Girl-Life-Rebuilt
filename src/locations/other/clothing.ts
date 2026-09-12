import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'allure_bikinis') {
    (s as any).result = 140;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana_bikinis') {
      (s as any).result = 30;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious_bikinis') {
        (s as any).result = 70;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'allure_swimsuit') {
          (s as any).result = 100;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'danilovich_swimsuit') {
            (s as any).result = 31;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana_swimsuit') {
              (s as any).result = 30;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious_swimsuit') {
                (s as any).result = 40;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'fancy_burlesque') {
                  (s as any).result = 40;
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana_cosplay') {
                    (s as any).result = 160;
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 'moncheri_gown') {
                      (s as any).result = 100;
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 'gm_maid') {
                        (s as any).result = 40;
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 'gm_office') {
                          (s as any).result = 41;
                        } else {
                          if (((s as any).locArgs?.[1] ?? 0) === 'gm_school') {
                            (s as any).result = 62;
                          } else {
                            if (((s as any).locArgs?.[1] ?? 0) === 'gm_server') {
                              (s as any).result = 30;
                            } else {
                              if (((s as any).locArgs?.[1] ?? 0) === 'eroto_strip') {
                                (s as any).result = 30;
                              } else {
                                if (((s as any).locArgs?.[1] ?? 0) === 'bomba_dress') {
                                  (s as any).result = 100;
                                } else {
                                  if (((s as any).locArgs?.[1] ?? 0) === 'cats_dress') {
                                    (s as any).result = 221;
                                  } else {
                                    if (((s as any).locArgs?.[1] ?? 0) === 'coco_dress') {
                                      (s as any).result = 300;
                                    } else {
                                      if (((s as any).locArgs?.[1] ?? 0) === 'dolls_dress') {
                                        (s as any).result = 140;
                                      } else {
                                        if (((s as any).locArgs?.[1] ?? 0) === 'eroto_dress') {
                                          (s as any).result = 140;
                                        } else {
                                          if (((s as any).locArgs?.[1] ?? 0) === 'fashionista_dress') {
                                            (s as any).result = 200;
                                          } else {
                                            if (((s as any).locArgs?.[1] ?? 0) === 'flamingos_dress') {
                                              (s as any).result = 180;
                                            } else {
                                              if (((s as any).locArgs?.[1] ?? 0) === 'materinstvo_dress') {
                                                (s as any).result = 10;
                                              } else {
                                                if (((s as any).locArgs?.[1] ?? 0) === 'moncheri_dress') {
                                                  (s as any).result = 100;
                                                } else {
                                                  if (((s as any).locArgs?.[1] ?? 0) === 'gm_dress') {
                                                    (s as any).result = 300;
                                                  } else {
                                                    if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious_dress') {
                                                      (s as any).result = 150;
                                                    } else {
                                                      if (((s as any).locArgs?.[1] ?? 0) === 'salacious_dress') {
                                                        (s as any).result = 61;
                                                      } else {
                                                        if (((s as any).locArgs?.[1] ?? 0) === 'bomba_outfits') {
                                                          (s as any).result = 100;
                                                        } else {
                                                          if (((s as any).locArgs?.[1] ?? 0) === 'cats_outfits') {
                                                            (s as any).result = 200;
                                                          } else {
                                                            if (((s as any).locArgs?.[1] ?? 0) === 'coco_outfits') {
                                                              (s as any).result = 160;
                                                            } else {
                                                              if (((s as any).locArgs?.[1] ?? 0) === 'dolls_outfits') {
                                                                (s as any).result = 93;
                                                              } else {
                                                                if (((s as any).locArgs?.[1] ?? 0) === 'danilovich_outfits') {
                                                                  (s as any).result = 162;
                                                                } else {
                                                                  if (((s as any).locArgs?.[1] ?? 0) === 'eroto_outfits') {
                                                                    (s as any).result = 100;
                                                                  } else {
                                                                    if (((s as any).locArgs?.[1] ?? 0) === 'fashionista_outfits') {
                                                                      (s as any).result = 20;
                                                                    } else {
                                                                      if (((s as any).locArgs?.[1] ?? 0) === 'flamingos_outfits') {
                                                                        (s as any).result = 160;
                                                                      } else {
                                                                        if (((s as any).locArgs?.[1] ?? 0) === 'gm_outfits') {
                                                                          (s as any).result = 200;
                                                                        } else {
                                                                          if (((s as any).locArgs?.[1] ?? 0) === 'nerdvana_outfits') {
                                                                            (s as any).result = 90;
                                                                          } else {
                                                                            if (((s as any).locArgs?.[1] ?? 0) === 'scandalicious_outfits') {
                                                                              (s as any).result = 30;
                                                                            } else {
                                                                              if (((s as any).locArgs?.[1] ?? 0) === 'market_outfits') {
                                                                                (s as any).result = 40;
                                                                              } else {
                                                                                if (((s as any).locArgs?.[1] ?? 0) === 'salacious_outfits') {
                                                                                  (s as any).result = 20;
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'clothing', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetSwimwearCount(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'clothing', 'get_bikini_count') + qspFunc(s, 'clothing', 'get_swimsuit_count');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBikiniCount(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).result = ((s as any).result ?? 0) + (0);
  (s as any).result = ((s as any).result ?? 0) + (0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetSwimsuitCount(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).result = ((s as any).result ?? 0) + (0);
  (s as any).result = ((s as any).result ?? 0) + (0);
  (s as any).result = ((s as any).result ?? 0) + (0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPrice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[3] ?? 0) === 0  &&  ((s as any).locArgs?.[3] ?? 0) === '') {
    // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  }
  (s as any).result = (((s as any).CloPrice ?? 0) * ((5 * ((s as any).CloQuality ?? 0)) + 100) / 100) * 1000 / (1250 - ((s as any).Clothingstock ?? 0)[((s as any).ARGS ?? 0)[2]]) * 3 / 2;
  (s as any).result = ((s as any).result ?? 0) / 50 * 50;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  }
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" })) === 0) {
    return;
  }
  if (qspFunc(s, 'clothing', 'is_lost', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    return;
  }
  if (qspFunc(s, 'clothing', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" })) === 0) {
    return;
  }
  if (qspFunc(s, 'clothing', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    return;
  }
  if (((s as any).pcs_inhib ?? 0) < ((s as any).CloInhibit ?? 0)) {
    return;
  }
  if (((s as any).CloStyle2 ?? 0) !== 6  &&  ((s as any).CloStyle ?? 0) !== 5  &&  ((s as any).locArgs?.[1] ?? 0) !== 'nude') {
    if (qspFunc(s, 'clothing', 'is_clothes_too_small', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
      return;
    }
    if (qspFunc(s, 'clothing', 'is_clothes_too_large', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
      return;
    }
  }
  if (qspFunc(s, 'clothing', 'is_hypno_approved', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }), 'attributes_set') === 0) {
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  }
  (s as any).result = (qspFunc(s, 'clothing', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }), 'attributes_set') === '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsLost(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    (s as any).result = ((Array.isArray((s as any).CloLosTyp) ? ((s as any).CloLosTyp as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) >= 0  &&  (Array.isArray((s as any).CloLosNum) ? ((s as any).CloLosNum as any[]).indexOf(((s as any).locArgs?.[2] ?? 0)) : -1) >= 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDoesFit(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = ((! qspFunc(s, 'clothing', 'is_too_small', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" })))  &&  (! qspFunc(s, 'clothing', 'is_too_large', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsTooSmall(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsTooLarge(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsHypnoApproved(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  }
  (s as any).result = 1;
  if (((s as any).hypnoClothes ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'salacious_outfits'  ||  ((s as any).locArgs?.[1] ?? 0) === 'salacious_dress') {
    // TODO-QSP: exit
  }
  if (((s as any).CloThinness ?? 0) >= 6) {
    // TODO-QSP: exit
  }
  if ((((s as any).CloStyle2 ?? 0) === 6  ||  ((s as any).CloSport ?? 0) === 1)  &&  ((s as any).CloThinness ?? 0) >= 5) {
    // TODO-QSP: exit
  }
  if ((((s as any).locArgs?.[1] ?? 0) === 'eroto_outfits'  ||  ((s as any).locArgs?.[1] ?? 0) === 'eroto_dress'  ||  ((s as any).locArgs?.[1] ?? 0) === 'eroto_strip')  &&  ((s as any).CloThinness ?? 0) >= 3) {
    // TODO-QSP: exit
  }
  if (((s as any).CloStyle2 ?? 0) === 4  &&  ((s as any).CloThinness ?? 0) >= 4) {
    // TODO-QSP: exit
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).clothingworntype ?? 0) !== ''  &&  ((s as any).clothingworntype ?? 0) !== 'nude');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).clothingworntype ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).clothingwornnumber ?? 0) === ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = (((s as any).locArgs?.[1] ?? 0) === 'gm_outfits'  &&  ((s as any).locArgs?.[2] ?? 0) === 3);
  if (((s as any).result ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    (s as any).result = (((s as any).locArgs?.[1] ?? 0) === 'gm_school'  &&  ((s as any).locArgs?.[2] ?? 0) === 6);
    if (((s as any).result ?? 0)) {
      // TODO-QSP: exit
    }
  }
  if (((s as any).misc_outfits ?? 0)[1]) {
    (s as any).result = (((s as any).locArgs?.[1] ?? 0) === 'misc_outfits'  &&  ((s as any).locArgs?.[2] ?? 0) === 1);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsCloStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothingOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsClothesTooSmall(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'is_too_small', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsClothesTooLarge(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'is_too_large', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDoClothesFit(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'does_fit', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  if ((!((s as any).CloQuality ?? 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>[<<ARGS[2]>>] = 1
  // TODO-QSP: <<$ARGS[1]>>_b[<<ARGS[2]>>] = pcs_hips
  // TODO-QSP: <<$ARGS[1]>>_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_h[<<ARGS[2]>>] = CloMaxStrength
  // TODO-QSP: "
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'nude') {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_b[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).clothingworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).clothingwornnumber ?? 0)) {
    qspCall(s, 'clothing', 'strip_code');
    (s as any).lastwornclothingnumber = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_outfits ?? {})[3] = 1;
  ((s as any).gm_outfits_b ?? {})[3] = ((s as any).pcs_hips ?? 0);
  ((s as any).gm_outfits_s ?? {})[3] = 0;
  ((s as any).gm_outfits_dirt ?? {})[3] = 1440;
  ((s as any).gm_outfits_h ?? {})[3] = 10000;
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    ((s as any).gm_school ?? {})[6] = 1;
    ((s as any).gm_school_b ?? {})[6] = ((s as any).pcs_hips ?? 0);
    ((s as any).gm_school_s ?? {})[6] = 0;
    ((s as any).gm_school_dirt ?? {})[6] = 1440;
    ((s as any).gm_school_h ?? {})[6] = 10000;
  }
  if (((s as any).misc_outfits ?? 0)[1]) {
    ((s as any).misc_outfits_b ?? {})[1] = ((s as any).pcs_hips ?? 0);
    ((s as any).misc_outfits_s ?? {})[1] = 0;
    ((s as any).misc_outfits_dirt ?? {})[1] = 2400;
    ((s as any).misc_outfits_h ?? {})[1] = 10000;
  }
  // TODO-QSP: end
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'remove_item', ((s as any).clothingworntype ?? 0), ((s as any).clothingwornnumber ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_s[<<ARGS[2]>>] = 0"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToStorage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_s[<<ARGS[2]>>] = 1"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToUnwanted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_s[<<ARGS[2]>>] = 2"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResizeClothes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: dynamic "<<$ARGS[1]>>_b[<<ARGS[2]>>] = pcs_hips"
  }
  // TODO-QSP: end
  scene.build();
}

function enterQuickBuy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    (s as any).price = qspFunc(s, 'clothing', 'get_price', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }));
    if (((s as any).price ?? 0) > 0) {
      qspCall(s, 'money', 'pay', ((s as any).price ?? 0));
    }
  }
  // TODO-QSP: gs 'clothing', 'add_item', $ARGS[1], ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLostClothesHere(s: GameState, scene: SceneBuilder): void {
  if (((s as any).CloLosDay ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 0  &&  ((s as any).CloLosDay ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= ((s as any).daystart ?? 0)) {
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRecoverLostClothes(s: GameState, scene: SceneBuilder): void {
  (s as any).cloAction = qspUntranslated(s, "ARGS[2]", { location: "clothing" });
  (s as any).clothNumber = ((s as any).CloLosNum ?? 0)?.[String((s as any).cloLoc ?? 0)];
  (s as any).dayLost = ((s as any).CloLosDay ?? 0)?.[String((s as any).cloLoc ?? 0)];
  (s as any).findLocInd = qspUntranslated(s, "arrpos('CloLosTyp', clothType)", { location: "clothing" });
  (s as any).findLocInd = qspUntranslated(s, "arrpos('CloLosNum', clothNumber)", { location: "clothing" });
  (s as any).findLocInd = qspUntranslated(s, "arrpos('CloLosDay', CloLosDay[cloLoc])", { location: "clothing" });
  (s as any).findLocInd = qspUntranslated(s, "arrpos('CloLosLoc', cloLoc)", { location: "clothing" });
  if (((s as any).cloAction ?? 0) === 1) {
    qspCall(s, 'clothing', 'wear', ((s as any).clothType ?? 0), ((s as any).clothNumber ?? 0));
  } else {
    if (((s as any).cloAction ?? 0) === 2) {
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWearLastWorn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'wear', 'last_worn', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGadSwampClothes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    (s as any).swamp_clothes = 1;
    qspCall(s, 'clothing', 'add_item', 'misc_outfits', 1);
    qspCall(s, 'clothing', 'wear', 'misc_outfits', 1);
  }
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).misc_outfits ?? {})[1] = 0;
    (s as any).swamp_clothes = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStripAll(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'strip', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'underwear', 'strip');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === '') {
    (s as any).clothingwornnumber = 0;
  }
  qspCall(s, 'cum_cleanup', '', 6);
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    if (((s as any).strip_loc ?? 0) === '') {
      if (((s as any).PSwim ?? 0) === 1) {
        ((s as any).lastwornclothingtype ?? {})['swim'] = ((s as any).clothingworntype ?? 0);
        ((s as any).lastwornclothingnumber ?? {})['swim'] = ((s as any).clothingwornnumber ?? 0);
      } else {
        (s as any).lastwornclothingnumber = ((s as any).clothingwornnumber ?? 0);
      }
    } else {
      // TODO-QSP: dynamic "$CloLos<<$clothingworntype>>[<<clothingwornnumber>>] = '<<$strip_loc>>'"
      // TODO-QSP: $CloLosLoc[] = $strip_loc
      // TODO-QSP: $CloLosTyp[$strip_loc] = $clothingworntype
      ((s as any).CloLosNum ?? {})[String((s as any).strip_loc ?? 0)] = ((s as any).clothingwornnumber ?? 0);
      ((s as any).CloLosDay ?? {})[String((s as any).strip_loc ?? 0)] = ((s as any).daystart ?? 0);
      (s as any).lastwornclothingnumber = 0;
    }
  }
  qspCall(s, 'clothing', 'strip_code');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).clothingwornnumber = 0;
  qspCall(s, 'clothing', 'reset_CloVars');
  qspCall(s, 'clothing', 'reset_PCloVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset_CloVars(s: GameState, scene: SceneBuilder): void {
  (s as any).CloQuality = 0;
  (s as any).CloThinness = 0;
  (s as any).CloTopCut = 0;
  (s as any).CloBra = 0;
  (s as any).CloPanties = 0;
  (s as any).CloPantsShortness = 0;
  (s as any).CloSkirtShortness = 0;
  (s as any).CloDress = 0;
  (s as any).CloOnePiece = 0;
  (s as any).CloInhibit = 0;
  (s as any).CloCoverFront = 0;
  (s as any).CloCoverBack = 0;
  (s as any).CloCoverTop = 0;
  (s as any).CloStyle = 0;
  (s as any).CloStyle2 = 0;
  (s as any).CloStyle3 = 0;
  (s as any).CloBimbo = 0;
  (s as any).CloGoth = 0;
  (s as any).CloPunk = 0;
  (s as any).CloPrep = 0;
  (s as any).CloPrude = 0;
  (s as any).CloProstitute = 0;
  (s as any).CloMaid = 0;
  (s as any).CloServer = 0;
  (s as any).CloStrip = 0;
  (s as any).CloSchool = 0;
  (s as any).CloOffice = 0;
  (s as any).CloSport = 0;
  (s as any).CloSwim = 0;
  (s as any).CloPrice = 0;
  (s as any).CloDirt = 0;
  (s as any).CloStrength = 0;
  (s as any).CloMaxStrength = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset_PCloVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PCloDress = 0;
  (s as any).PCloPanties = 0;
  (s as any).PCloBra = 0;
  (s as any).PCloQuality = 0;
  (s as any).PCloThinness = 0;
  (s as any).PCloTopCut = 0;
  (s as any).PCloPants = 0;
  (s as any).PCloSkirt = 0;
  (s as any).PCloStyle = 0;
  (s as any).PCloStyle2 = 0;
  (s as any).PCloStyle3 = 0;
  (s as any).PCloBimbo = 0;
  (s as any).PCloGoth = 0;
  (s as any).PCloPunk = 0;
  (s as any).PCloPrep = 0;
  (s as any).PCloPrude = 0;
  (s as any).PCloInhibit = 0;
  (s as any).PCloOnePiece = 0;
  (s as any).PCloProstitute = 0;
  (s as any).PCloMaid = 0;
  (s as any).PCloServer = 0;
  (s as any).PCloStrip = 0;
  (s as any).PCloSchool = 0;
  (s as any).PCloOffice = 0;
  (s as any).PCloSport = 0;
  (s as any).PCloSwim = 0;
  (s as any).PCloCoverTop = 4;
  (s as any).PCloCoverBack = 4;
  (s as any).PCloCoverFront = 4;
  (s as any).PCloPrice = 0;
  (s as any).PCloDirt = 0;
  (s as any).PCloStrength = 0;
  (s as any).PCloMaxStrength = 0;
  (s as any).PCloBorrowed = 0;
  (s as any).PXCloThinness = 0;
  (s as any).PXCloTopCut = 0;
  (s as any).PXCloBottomShortness = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = 'nude';
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'last_worn') {
    if (((s as any).lastwornclothingtype ?? 0) === '') {
      (s as any).lastwornclothingnumber = 0;
    }
    // TODO-QSP: $ARGS[1] = $lastwornclothingtype
    ((s as any).ARGS ?? {})[2] = ((s as any).lastwornclothingnumber ?? 0);
  }
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'nude') {
    // TODO-QSP: exit
  }
  qspCall(s, 'clothing', 'strip');
  // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
  if ((!((s as any).CloQuality ?? 0))) {
    return;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('check') : -1) > 0) {
    if (((s as any).temp_not_wear_reason ?? 0) !== ''  &&  ((s as any).temp_not_wear_reason ?? 0) !== 'hypno') {
      if (((s as any).temp_not_wear_reason ?? 0) === 'not_owned') {
      } else {
        if (((s as any).temp_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        } else {
          if (((s as any).temp_not_wear_reason ?? 0) === 'low_strength') {
          } else {
            if (((s as any).temp_not_wear_reason ?? 0) === 'too_small') {
            } else {
              if (((s as any).temp_not_wear_reason ?? 0) === 'too_large') {
              } else {
                if (((s as any).temp_not_wear_reason ?? 0) === 'hypno') {
                }
              }
            }
          }
        }
      }
      return;
    }
  }
  (s as any).clothingwornnumber = qspUntranslated(s, "ARGS[2]", { location: "clothing" });
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$clothingworntype>>_w[<<clothingwornnumber>>] = 1
  // TODO-QSP: <<$clothingworntype>>_s[<<clothingwornnumber>>] = 0
  // TODO-QSP: "
  (s as any).PCloQuality = ((s as any).CloQuality ?? 0);
  (s as any).PCloThinness = ((s as any).CloThinness ?? 0);
  (s as any).PCloTopCut = ((s as any).CloTopCut ?? 0);
  (s as any).PCloBra = ((s as any).CloBra ?? 0);
  (s as any).PCloOnePiece = ((s as any).CloOnePiece ?? 0);
  (s as any).PCloPants = ((s as any).CloPantsShortness ?? 0);
  (s as any).PCloSkirt = ((s as any).CloSkirtShortness ?? 0);
  (s as any).PCloPanties = ((s as any).CloPanties ?? 0);
  (s as any).PCloDress = ((s as any).CloDress ?? 0);
  (s as any).PCloStyle = ((s as any).CloStyle ?? 0);
  (s as any).PCloStyle2 = ((s as any).CloStyle2 ?? 0);
  (s as any).PCloStyle3 = ((s as any).CloStyle3 ?? 0);
  (s as any).PCloInhibit = ((s as any).CloInhibit ?? 0);
  (s as any).PCloBimbo = ((s as any).CloBimbo ?? 0);
  (s as any).PCloGoth = ((s as any).CloGoth ?? 0);
  (s as any).PCloPunk = ((s as any).CloPunk ?? 0);
  (s as any).PCloPrep = ((s as any).CloPrep ?? 0);
  (s as any).PCloPrude = ((s as any).CloPrude ?? 0);
  (s as any).PCloProstitute = ((s as any).CloProstitute ?? 0);
  (s as any).PCloMaid = ((s as any).CloMaid ?? 0);
  (s as any).PCloServer = ((s as any).CloServer ?? 0);
  (s as any).PCloStrip = ((s as any).CloStrip ?? 0);
  (s as any).PCloSchool = ((s as any).CloSchool ?? 0);
  (s as any).PCloOffice = ((s as any).CloOffice ?? 0);
  (s as any).PCloSport = ((s as any).CloSport ?? 0);
  (s as any).PCloSwim = ((s as any).CloSwim ?? 0);
  (s as any).PCloCoverTop = ((s as any).CloCoverTop ?? 0);
  (s as any).PCloCoverBack = ((s as any).CloCoverBack ?? 0);
  (s as any).PCloCoverFront = ((s as any).CloCoverFront ?? 0);
  (s as any).PCloPrice = ((s as any).CloPrice ?? 0);
  (s as any).PCloDirt = ((s as any).CloDirt ?? 0);
  (s as any).PCloStrength = ((s as any).CloStrength ?? 0);
  (s as any).PCloMaxStrength = ((s as any).CloMaxStrength ?? 0);
  if ((!((s as any).PCloThinness ?? 0))) {
    (s as any).PXCloThinness = 0;
  } else {
    if (((s as any).PCloThinness ?? 0) === 1) {
      (s as any).PXCloThinness = 150;
    } else {
      if (((s as any).PCloThinness ?? 0) === 2) {
        (s as any).PXCloThinness = 200;
      } else {
        if (((s as any).PCloThinness ?? 0) === 3) {
          (s as any).PXCloThinness = 250;
        } else {
          if (((s as any).PCloThinness ?? 0) === 4) {
            (s as any).PXCloThinness = 300;
          } else {
            if (((s as any).PCloThinness ?? 0) === 5) {
              (s as any).PXCloThinness = 350;
            } else {
              (s as any).PXCloThinness = 400;
            }
          }
        }
      }
    }
  }
  if ((!((s as any).PCloTopCut ?? 0))) {
    (s as any).PXCloTopCut = 0;
  } else {
    if (((s as any).PCloTopCut ?? 0) === 1) {
      (s as any).PXCloTopCut = 100;
    } else {
      if (((s as any).PCloTopCut ?? 0) === 2) {
        (s as any).PXCloTopCut = 200;
      } else {
        if (((s as any).PCloTopCut ?? 0) === 3) {
          (s as any).PXCloTopCut = 300;
        } else {
          (s as any).PXCloTopCut = 400;
        }
      }
    }
  }
  if (((s as any).PCloSkirt ?? 0) === 0  &&  (!((s as any).PCloPants ?? 0))) {
    (s as any).PXCloBottomShortness = 0;
  } else {
    if (((s as any).PCloSkirt ?? 0) === 1  ||  ((s as any).PCloPants ?? 0) === 1) {
      (s as any).PXCloBottomShortness = 100;
    } else {
      if (((s as any).PCloSkirt ?? 0) === 2  ||  ((s as any).PCloPants ?? 0) === 2) {
        (s as any).PXCloBottomShortness = 150;
      } else {
        if (((s as any).PCloSkirt ?? 0) === 3  ||  ((s as any).PCloPants ?? 0) === 3) {
          (s as any).PXCloBottomShortness = 200;
        } else {
          if (((s as any).PCloSkirt ?? 0) === 4  ||  ((s as any).PCloPants ?? 0) === 4) {
            (s as any).PXCloBottomShortness = 250;
          } else {
            if (((s as any).PCloSkirt ?? 0) === 5  ||  ((s as any).PCloPants ?? 0) === 5) {
              (s as any).PXCloBottomShortness = 300;
            } else {
              if (((s as any).PCloSkirt ?? 0) === 6  ||  ((s as any).PCloPants ?? 0) === 6) {
                (s as any).PXCloBottomShortness = 350;
              } else {
                (s as any).PXCloBottomShortness = 400;
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).PCloPanties ?? 0) === 1) {
    (s as any).PXCloBottomShortness = 400;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('borrowed') : -1) >= 0) {
    (s as any).PCloBorrowed = 1;
    // TODO-QSP: dynamic "<<$clothingworntype>>_w[<<clothingwornnumber>>] = 0"
    (s as any).PCloDirt = 0;
    (s as any).PCloStrength = ((s as any).PCloMaxStrength ?? 0);
  }
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseCurDirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'increase_dirt', $clothingworntype, clothingwornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseCurDirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'decrease_dirt', $clothingworntype, clothingwornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_dirt[<<ARGS[2]>>] += <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).clothingworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).clothingwornnumber ?? 0)) {
      (s as any).PCloDirt = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_dirt[qspUntranslated(s, \"ARGS[2]\", { location: \"clothing\" })]", { location: "clothing" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_dirt[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0)((s as any)._dirt ?? 0)[((s as any).locArgs?.[2] ?? 0)] < 0) {
      // TODO-QSP: <<$ARGS[1]>>_dirt[<<ARGS[2]>>] = 0
    }
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).clothingworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).clothingwornnumber ?? 0)) {
      (s as any).PCloDirt = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_dirt[qspUntranslated(s, \"ARGS[2]\", { location: \"clothing\" })]", { location: "clothing" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'decrease_strength', $clothingworntype, clothingwornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseCurStrength(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'increase_strength', $clothingworntype, clothingwornnumber, ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_h[<<ARGS[2]>>] -= <<ARGS[3]>>
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).clothingworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).clothingwornnumber ?? 0)) {
      (s as any).PCloStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_h[qspUntranslated(s, \"ARGS[2]\", { location: \"clothing\" })]", { location: "clothing" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseStrength(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[3] = 1;
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "clothing" }))) {
    // TODO-QSP: gs 'clothing_attributes', $ARGS[1], ARGS[2]
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_h[<<ARGS[2]>>] = min(<<$ARGS[1]>>_h[<<ARGS[2]>>] + <<ARGS[3]>>, <<CloMaxStrength>>)
    if (((s as any).locArgs?.[1] ?? 0) === ((s as any).clothingworntype ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).clothingwornnumber ?? 0)) {
      (s as any).PCloStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_h[qspUntranslated(s, \"ARGS[2]\", { location: \"clothing\" })]", { location: "clothing" });
    }
    // TODO-QSP: "
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchoolCheck(s: GameState, scene: SceneBuilder): void {
  if ((0 as any)) {
    ((s as any).temp_school_check ?? {})['cool'] = (-1);
    ((s as any).temp_school_check ?? {})['jock'] = (-1);
    ((s as any).temp_school_check ?? {})['nerd'] = (-1);
    ((s as any).temp_school_check ?? {})['outcast'] = (-1);
    ((s as any).temp_school_check ?? {})['demerit'] = 5;
    ((s as any).temp_school_check ?? {})['fame'] = 1;
    if ((0 as any)) {
      ((s as any).temp_school_check ?? {})['change_text'] = 0;
      ((s as any).temp_school_check ?? {})['wardrobe_text'] = 0;
    } else {
      if ((0 as any)) {
        ((s as any).temp_school_check ?? {})['change_text'] = 0;
        ((s as any).temp_school_check ?? {})['wardrobe_text'] = 0;
      } else {
        ((s as any).temp_school_check ?? {})['change_text'] = 0;
        ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'v_neg', 'This uniform is too thin  &&  that can expose underwear making a mockery of the school uniform regulations. Everybody in school apart from the Gopniks will think that you\'re a slut.');
      }
    }
  } else {
    if ((0 as any)) {
      if ((0 as any)) {
        ((s as any).temp_school_check ?? {})['cool'] = (-1);
        ((s as any).temp_school_check ?? {})['jock'] = (-1);
        ((s as any).temp_school_check ?? {})['nerd'] = (-1);
        ((s as any).temp_school_check ?? {})['gopnik'] = 1;
        ((s as any).temp_school_check ?? {})['outcast'] = (-1);
        ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'neg', 'This uniform complies with the regulations, but is too risqué.');
        ((s as any).temp_school_check ?? {})['wardrobe_text'] = 0;
      } else {
        if ((0 as any)) {
          qspCall(s, 'clothing', '_school_check_archetype_process');
          ((s as any).temp_school_check ?? {})['wardrobe_text'] = 'This uniform complies with the regulations on skirt length and is in a ' + qspUntranslated(s, "temp_school_check['style']>", { location: "clothing" }) + ' style.';
          if (((s as any).temp_school_check ?? 0)?.['disapprove'] !== '') {
            ((s as any).temp_school_check ?? {})['wardrobe_text'] = (((s as any).temp_school_check ?? {})['wardrobe_text'] ?? 0) + (((s as any).temp_school_check ?? {})?.['disapprove'] + ((s as any).temp_school_check ?? {})?.['approve-sep']);
          }
          if (((s as any).temp_school_check ?? 0)?.['approve'] !== '') {
            ((s as any).temp_school_check ?? {})['wardrobe_text'] = (((s as any).temp_school_check ?? {})['wardrobe_text'] ?? 0) + (((s as any).temp_school_check ?? 0)?.['approve']);
          }
          ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', '$temp_school_check[\'wrap\']', ((s as any).temp_school_check ?? 0)?.['wardrobe_text']);
          ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform is ' + qspUntranslated(s, "temp_school_check['style']>", { location: "clothing" }) + ' style, but still follows the school regulation on skirt length.');
        } else {
          if ((0 as any)) {
            ((s as any).temp_school_check ?? {})['cool'] = (-1);
            ((s as any).temp_school_check ?? {})['jock'] = (-1);
            ((s as any).temp_school_check ?? {})['nerd'] = 1;
            ((s as any).temp_school_check ?? {})['outcast'] = 1;
            ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform is very conservative.');
            ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'neutral', 'This uniform is very conservative. The Cool kids  &&  Jocks will disapprove, but the Nerds  &&  Outcasts would approve of you wearing it.');
          } else {
            if ((0 as any)) {
              ((s as any).temp_school_check ?? {})['gopnik'] = 1;
              ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform is of a style that appeals to gopniks, but still follows the school regulation on skirt length.');
              ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'neutral', 'This uniform follows the school regulation on skirt length but is of a style that only the Gopniks will approve of.');
            } else {
              if ((0 as any)) {
                ((s as any).temp_school_check ?? {})['cool'] = 1;
                ((s as any).temp_school_check ?? {})['jock'] = 1;
                ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform complies with the regulations  &&  is of good quality.');
                ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'v_pos', 'This uniform complies with the regulations  &&  is of good quality. It would certainly help you with your standing with the Cool kids  &&  Jocks.');
              } else {
                ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform complies with the school regulations on skirt length.');
                ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform complies with the school regulations on skirt length. Nobody in school would be offended by you wearing it.');
              }
            }
          }
        }
      }
    } else {
      if ((0 as any)) {
        ((s as any).temp_school_check ?? {})['cool'] = (-1);
        ((s as any).temp_school_check ?? {})['jock'] = (-1);
        ((s as any).temp_school_check ?? {})['nerd'] = (-1);
        ((s as any).temp_school_check ?? {})['gopnik'] = 1;
        ((s as any).temp_school_check ?? {})['outcast'] = (-1);
        ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'neg', 'This uniform slightly breaches the regulations on skirt length  &&  is also too risqué.');
        ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'v_neg', 'This uniform slightly breaches the school uniform regulations  &&  it is too risqué. Everybody in school apart from the Gopniks will think that you\'re a slut.');
      } else {
        if ((0 as any)) {
          qspCall(s, 'clothing', '_school_check_archetype_process');
          ((s as any).temp_school_check ?? {})['wardrobe_text'] = 'This uniform slightly breaches the school regulations on skirt length and is in a ' + qspUntranslated(s, "temp_school_check['style']>", { location: "clothing" }) + ' style.';
          if (((s as any).temp_school_check ?? 0)?.['disapprove'] !== '') {
            ((s as any).temp_school_check ?? {})['wardrobe_text'] = (((s as any).temp_school_check ?? {})['wardrobe_text'] ?? 0) + (((s as any).temp_school_check ?? {})?.['disapprove'] + ((s as any).temp_school_check ?? {})?.['approve-sep']);
          }
          if (((s as any).temp_school_check ?? 0)?.['approve'] !== '') {
            ((s as any).temp_school_check ?? {})['wardrobe_text'] = (((s as any).temp_school_check ?? {})['wardrobe_text'] ?? 0) + (((s as any).temp_school_check ?? 0)?.['approve']);
          }
          ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', '$temp_school_check[\'wrap\']', ((s as any).temp_school_check ?? 0)?.['wardrobe_text']);
          ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform is ' + qspUntranslated(s, "temp_school_check['style']>", { location: "clothing" }) + ' style uniform slightly breaches the school regulations on skirt length.');
        } else {
          if ((0 as any)) {
            ((s as any).temp_school_check ?? {})['cool'] = (-1);
            ((s as any).temp_school_check ?? {})['jock'] = (-1);
            ((s as any).temp_school_check ?? {})['nerd'] = 1;
            ((s as any).temp_school_check ?? {})['outcast'] = 1;
            ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform is very conservative.');
            ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'neutral', 'This uniform is very conservative. The Cool kids  &&  Jocks will disapprove, but the Nerds  &&  Outcasts would approve of you wearing it.');
          } else {
            if ((0 as any)) {
              ((s as any).temp_school_check ?? {})['gopnik'] = 1;
              ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This gopnik style uniform slightly breaches the school regulations on skirt length.');
              ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'neutral', 'This uniform slightly breaches the school regulations on skirt length  &&  is of a style that only the Gopniks will approve of.');
            } else {
              if ((0 as any)) {
                ((s as any).temp_school_check ?? {})['cool'] = 1;
                ((s as any).temp_school_check ?? {})['jock'] = 1;
                ((s as any).temp_school_check ?? {})['gopnik'] = 1;
                ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform is of good quality, but slightly breaches the school regulations on skirt length.');
                ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'v_pos', 'This uniform slightly breaches the school regulations on skirt length  &&  is of good quality. Everybody apart from the Nerds  &&  Outcasts would approve of you wearing it.');
              } else {
                ((s as any).temp_school_check ?? {})['gopnik'] = 1;
                ((s as any).temp_school_check ?? {})['change_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform slightly breaches the school regulations on skirt length.');
                ((s as any).temp_school_check ?? {})['wardrobe_text'] = qspFunc(s, 'wrap', 'accent', 'This uniform slightly breaches the school regulations on skirt length. The Gopnik would approve of you wearing it  &&  they will respect you for beating the school rules.');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'apply') {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (((s as any).temp_school_check ?? 0)?.['cool']);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (((s as any).temp_school_check ?? 0)?.['jock']);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (((s as any).temp_school_check ?? 0)?.['nerd']);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (((s as any).temp_school_check ?? 0)?.['gopnik']);
    ((s as any).grupvalue ?? {})[5] = (((s as any).grupvalue ?? {})[5] ?? 0) + (((s as any).temp_school_check ?? 0)?.['outcast']);
    (s as any).demerit = ((s as any).demerit ?? 0) + (((s as any).temp_school_check ?? 0)?.['demerit']);
    if (((s as any).temp_school_check ?? 0)?.['fame'] > 0) {
      // TODO-QSP: gs 'fame', 'pav', 'sex', temp_school_check['fame']
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'check'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSchoolCheckArchetypeProcess(s: GameState, scene: SceneBuilder): void {
  if ((0 as any)) {
    ((s as any).temp_school_check ?? {})['cool'] = (((s as any).temp_school_check ?? {})['cool'] ?? 0) + (1);
    ((s as any).temp_school_check ?? {})['nerd'] = (((s as any).temp_school_check ?? {})['nerd'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['gopnik'] = (((s as any).temp_school_check ?? {})['gopnik'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['outcast'] = (((s as any).temp_school_check ?? {})['outcast'] ?? 0) + (1);
    // TODO-QSP: $temp_school_check_styles[] = 'bimbo'
  }
  if ((0 as any)) {
    ((s as any).temp_school_check ?? {})['jock'] = (((s as any).temp_school_check ?? {})['jock'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['nerd'] = (((s as any).temp_school_check ?? {})['nerd'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['gopnik'] = (((s as any).temp_school_check ?? {})['gopnik'] ?? 0) + (1);
    ((s as any).temp_school_check ?? {})['outcast'] = (((s as any).temp_school_check ?? {})['outcast'] ?? 0) + (1);
    // TODO-QSP: $temp_school_check_styles[] = 'goth'
  }
  if ((0 as any)) {
    ((s as any).temp_school_check ?? {})['cool'] = (((s as any).temp_school_check ?? {})['cool'] ?? 0) + (1);
    ((s as any).temp_school_check ?? {})['jock'] = (((s as any).temp_school_check ?? {})['jock'] ?? 0) + (1);
    ((s as any).temp_school_check ?? {})['gopnik'] = (((s as any).temp_school_check ?? {})['gopnik'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['outcast'] = (((s as any).temp_school_check ?? {})['outcast'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['styles'] = (((s as any).temp_school_check ?? {})['styles'] ?? 0) + ('');
    // TODO-QSP: $temp_school_check_styles[] = 'preppy'
  }
  if ((0 as any)) {
    ((s as any).temp_school_check ?? {})['cool'] = (((s as any).temp_school_check ?? {})['cool'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['jock'] = (((s as any).temp_school_check ?? {})['jock'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['nerd'] = (((s as any).temp_school_check ?? {})['nerd'] ?? 0) + (1);
    ((s as any).temp_school_check ?? {})['outcast'] = (((s as any).temp_school_check ?? {})['outcast'] ?? 0) + (1);
    // TODO-QSP: $temp_school_check_styles[] = 'prude'
  }
  if ((0 as any)) {
    ((s as any).temp_school_check ?? {})['cool'] = (((s as any).temp_school_check ?? {})['cool'] ?? 0) - (1);
    ((s as any).temp_school_check ?? {})['jock'] = (((s as any).temp_school_check ?? {})['jock'] ?? 0) + (1);
    ((s as any).temp_school_check ?? {})['gopnik'] = (((s as any).temp_school_check ?? {})['gopnik'] ?? 0) + (1);
    ((s as any).temp_school_check ?? {})['outcast'] = (((s as any).temp_school_check ?? {})['outcast'] ?? 0) - (1);
    // TODO-QSP: $temp_school_check_styles[] = 'punk'
  }
  ((s as any).temp_school_check ?? {})['cool'] = Math.min(Math.max((-1), ((s as any).temp_school_check ?? 0)?.['cool']), 1);
  ((s as any).temp_school_check ?? {})['jock'] = Math.min(Math.max((-1), ((s as any).temp_school_check ?? 0)?.['jock']), 1);
  ((s as any).temp_school_check ?? {})['nerd'] = Math.min(Math.max((-1), ((s as any).temp_school_check ?? 0)?.['nerd']), 1);
  ((s as any).temp_school_check ?? {})['gopnik'] = Math.min(Math.max((-1), ((s as any).temp_school_check ?? 0)?.['gopnik']), 1);
  ((s as any).temp_school_check ?? {})['outcast'] = Math.min(Math.max((-1), ((s as any).temp_school_check ?? 0)?.['outcast']), 1);
  if (((s as any).temp_school_check ?? 0)?.['cool'] > 0) {
    // TODO-QSP: $temp_school_check_approves[] = 'Cool kids'
  } else {
    if (((s as any).temp_school_check ?? 0)?.['cool'] < 0) {
      // TODO-QSP: $temp_school_check_disapproves[] = 'Cool kids'
    }
  }
  if (((s as any).temp_school_check ?? 0)?.['jock'] > 0) {
    // TODO-QSP: $temp_school_check_approves[] = 'Jocks'
  } else {
    if (((s as any).temp_school_check ?? 0)?.['jock'] < 0) {
      // TODO-QSP: $temp_school_check_disapproves[] = 'Jocks'
    }
  }
  if (((s as any).temp_school_check ?? 0)?.['nerd'] > 0) {
    // TODO-QSP: $temp_school_check_approves[] = 'Nerds'
  } else {
    if (((s as any).temp_school_check ?? 0)?.['nerd'] < 0) {
      // TODO-QSP: $temp_school_check_disapproves[] = 'Nerds'
    }
  }
  if (((s as any).temp_school_check ?? 0)?.['gopnik'] > 0) {
    // TODO-QSP: $temp_school_check_approves[] = 'Gopniks'
  } else {
    if (((s as any).temp_school_check ?? 0)?.['gopnik'] < 0) {
      // TODO-QSP: $temp_school_check_disapproves[] = 'Gopniks'
    }
  }
  if (((s as any).temp_school_check ?? 0)?.['outcast'] > 0) {
    // TODO-QSP: $temp_school_check_approves[] = 'Outcasts'
  } else {
    if (((s as any).temp_school_check ?? 0)?.['outcast'] < 0) {
      // TODO-QSP: $temp_school_check_disapproves[] = 'Outcasts'
    }
  }
  if (Object.keys((s as any).temp_school_check_disapproves ?? {}).length === 0  &&  Object.keys((s as any).temp_school_check_approves ?? {}).length > 0) {
    ((s as any).temp_school_check ?? {})['wrap'] = 'v_pos';
  } else {
    if (Object.keys((s as any).temp_school_check_approves ?? {}).length === 0  &&  Object.keys((s as any).temp_school_check_disapproves ?? {}).length > 0) {
      ((s as any).temp_school_check ?? {})['wrap'] = 'neg';
    } else {
      ((s as any).temp_school_check ?? {})['wrap'] = 'neutral';
    }
  }
  ((s as any).temp_school_check ?? {})['style'] = qspFunc(s, 'string', 'enumerate_list', '$temp_school_check_styles');
  ((s as any).temp_school_check ?? {})['approve-sep'] = '.';
  if (Object.keys((s as any).temp_school_check_approves ?? {}).length > 0) {
    ((s as any).temp_school_check ?? {})['approve'] = ' \' + $func(\'string\', \'enumerate_list\', \'$temp_school_check_approves\') + \' will like it.';
    ((s as any).temp_school_check ?? {})['approve-sep'] = ', but';
  }
  if (Object.keys((s as any).temp_school_check_disapproves ?? {}).length > 0) {
    ((s as any).temp_school_check ?? {})['disapprove'] = ' \' + $func(\'string\', \'enumerate_list\', \'$temp_school_check_disapproves\') + \' will disaprove';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothwidth(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Set image size for this view', handler: (st: GameState) => {
    (s as any).Enable_clothwidth = 0;
    if (((s as any).Enable_clothwidth ?? 0) !== 0) {
      (s as any).Enable_clothwidth = 0;
    }
    scene.actions([{ label: 'Continue', goto: ['clothing', 'clothing_list', '<<$ward_list_store>>'] }]);
  } },
  ]);
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing_view', 'set_exceptions');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothingListLine(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing_view', 'list_line', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDest0(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'list_line_move_to_wardrobe', $ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterDest1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'list_line_move_to_storage', $ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterDest2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'list_line_move_to_unwanted', $ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterQresize(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'list_line_resize', $ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterQrepair(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'list_line_repair', $ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterQdelete(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'list_line_delete', $ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterTresize(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'list_line_tailor_resize', $ARGS[2], ARGS[3]
  // TODO-QSP: end
  scene.build();
}

function enterViewClothingList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'view_lists_list', $ARGS[1], $ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterClothingList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'view_list', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterGetClothinglistHeader(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewClothingItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'clothing_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  // TODO-QSP: end
  scene.build();
}

function enterViewClothingItemBuy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'add_item', $ARGS[2], ARGS[3]
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) !== 'skip') {
    // TODO-QSP: gt $loc, $loc_arg
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_total':
      enterGetTotal(s, scene);
      break;
    case 'totals':
      enterTotals(s, scene);
      break;
    case 'get_swimwear_count':
      enterGetSwimwearCount(s, scene);
      break;
    case 'get_bikini_count':
      enterGetBikiniCount(s, scene);
      break;
    case 'get_swimsuit_count':
      enterGetSwimsuitCount(s, scene);
      break;
    case 'get_price':
      enterGetPrice(s, scene);
      break;
    case 'not_wear_reason':
      enterNotWearReason(s, scene);
      break;
    case 'can_wear':
      enterCanWear(s, scene);
      break;
    case 'is_owned':
      enterIsOwned(s, scene);
      break;
    case 'is_lost':
      enterIsLost(s, scene);
      break;
    case 'is_strength_low':
      enterIsStrengthLow(s, scene);
      break;
    case 'in_wardrobe':
      enterInWardrobe(s, scene);
      break;
    case 'in_storage':
      enterInStorage(s, scene);
      break;
    case 'in_unwanted':
      enterInUnwanted(s, scene);
      break;
    case 'does_fit':
      enterDoesFit(s, scene);
      break;
    case 'is_too_small':
      enterIsTooSmall(s, scene);
      break;
    case 'is_too_large':
      enterIsTooLarge(s, scene);
      break;
    case 'is_hypno_approved':
      enterIsHypnoApproved(s, scene);
      break;
    case 'is_wearing_any':
      enterIsWearingAny(s, scene);
      break;
    case 'is_wearing':
      enterIsWearing(s, scene);
      break;
    case 'is_immutable':
      enterIsImmutable(s, scene);
      break;
    case 'is_clo_strength_low':
      enterIsCloStrengthLow(s, scene);
      break;
    case 'clothing_owned':
      enterClothingOwned(s, scene);
      break;
    case 'is_clothes_too_small':
      enterIsClothesTooSmall(s, scene);
      break;
    case 'is_clothes_too_large':
      enterIsClothesTooLarge(s, scene);
      break;
    case 'do_clothes_fit':
      enterDoClothesFit(s, scene);
      break;
    case 'add_item':
      enterAddItem(s, scene);
      break;
    case 'remove_item':
      enterRemoveItem(s, scene);
      break;
    case 'reset_immutables':
      enterResetImmutables(s, scene);
      break;
    case 'dispose':
      enterDispose(s, scene);
      break;
    case 'move_to_wardrobe':
      enterMoveToWardrobe(s, scene);
      break;
    case 'move_to_storage':
      enterMoveToStorage(s, scene);
      break;
    case 'move_to_unwanted':
      enterMoveToUnwanted(s, scene);
      break;
    case 'resize_clothes':
      enterResizeClothes(s, scene);
      break;
    case 'quick_buy':
      enterQuickBuy(s, scene);
      break;
    case 'lost_clothes_here':
      enterLostClothesHere(s, scene);
      break;
    case 'recover_lost_clothes':
      enterRecoverLostClothes(s, scene);
      break;
    case 'wear_last_worn':
      enterWearLastWorn(s, scene);
      break;
    case 'gad_swamp_clothes':
      enterGadSwampClothes(s, scene);
      break;
    case 'strip_all':
      enterStripAll(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'strip_code':
      enterStripCode(s, scene);
      break;
    case 'reset_CloVars':
      enterReset_CloVars(s, scene);
      break;
    case 'reset_PCloVars':
      enterReset_PCloVars(s, scene);
      break;
    case 'wear':
      enterWear(s, scene);
      break;
    case 'increase_cur_dirt':
      enterIncreaseCurDirt(s, scene);
      break;
    case 'decrease_cur_dirt':
      enterDecreaseCurDirt(s, scene);
      break;
    case 'increase_dirt':
      enterIncreaseDirt(s, scene);
      break;
    case 'decrease_dirt':
      enterDecreaseDirt(s, scene);
      break;
    case 'decrease_cur_strength':
      enterDecreaseCurStrength(s, scene);
      break;
    case 'increase_cur_strength':
      enterIncreaseCurStrength(s, scene);
      break;
    case 'decrease_strength':
      enterDecreaseStrength(s, scene);
      break;
    case 'increase_strength':
      enterIncreaseStrength(s, scene);
      break;
    case 'school_check':
      enterSchoolCheck(s, scene);
      break;
    case '_school_check_archetype_process':
      enterSchoolCheckArchetypeProcess(s, scene);
      break;
    case 'clothwidth':
      enterClothwidth(s, scene);
      break;
    case 'set_shop_display_exceptions':
      enterSetShopDisplayExceptions(s, scene);
      break;
    case 'clothing_list_line':
      enterClothingListLine(s, scene);
      break;
    case 'dest0':
      enterDest0(s, scene);
      break;
    case 'dest1':
      enterDest1(s, scene);
      break;
    case 'dest2':
      enterDest2(s, scene);
      break;
    case 'qresize':
      enterQresize(s, scene);
      break;
    case 'qrepair':
      enterQrepair(s, scene);
      break;
    case 'qdelete':
      enterQdelete(s, scene);
      break;
    case 'tresize':
      enterTresize(s, scene);
      break;
    case 'view_clothing_list':
      enterViewClothingList(s, scene);
      break;
    case 'clothing_list':
      enterClothingList(s, scene);
      break;
    case 'get_clothinglist_header':
      enterGetClothinglistHeader(s, scene);
      break;
    case 'view_clothing_item':
      enterViewClothingItem(s, scene);
      break;
    case 'view_clothing_item_buy':
      enterViewClothingItemBuy(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const clothing: LocationDef = {
  name: 'clothing',
  title: 'This uniform is so short that it\'s an outright mockery of the school regulation on skirt length.',
  region: 'other',
  enter: enter,
};
