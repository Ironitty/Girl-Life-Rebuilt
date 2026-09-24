import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'allure_bikinis') {
    (s as any).result = 140;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'nerdvana_bikinis') {
      (s as any).result = 30;
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'scandalicious_bikinis') {
        (s as any).result = 70;
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'allure_swimsuit') {
          (s as any).result = 100;
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'danilovich_swimsuit') {
            (s as any).result = 31;
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'nerdvana_swimsuit') {
              (s as any).result = 30;
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'scandalicious_swimsuit') {
                (s as any).result = 40;
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'fancy_burlesque') {
                  (s as any).result = 40;
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 'nerdvana_cosplay') {
                    (s as any).result = 160;
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 'moncheri_gown') {
                      (s as any).result = 100;
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 'gm_maid') {
                        (s as any).result = 40;
                      } else {
                        if (String((s as any).locArgs?.[1] ?? '') === 'gm_office') {
                          (s as any).result = 41;
                        } else {
                          if (String((s as any).locArgs?.[1] ?? '') === 'gm_school') {
                            (s as any).result = 62;
                          } else {
                            if (String((s as any).locArgs?.[1] ?? '') === 'gm_server') {
                              (s as any).result = 30;
                            } else {
                              if (String((s as any).locArgs?.[1] ?? '') === 'eroto_strip') {
                                (s as any).result = 30;
                              } else {
                                if (String((s as any).locArgs?.[1] ?? '') === 'bomba_dress') {
                                  (s as any).result = 100;
                                } else {
                                  if (String((s as any).locArgs?.[1] ?? '') === 'cats_dress') {
                                    (s as any).result = 221;
                                  } else {
                                    if (String((s as any).locArgs?.[1] ?? '') === 'coco_dress') {
                                      (s as any).result = 300;
                                    } else {
                                      if (String((s as any).locArgs?.[1] ?? '') === 'dolls_dress') {
                                        (s as any).result = 140;
                                      } else {
                                        if (String((s as any).locArgs?.[1] ?? '') === 'eroto_dress') {
                                          (s as any).result = 140;
                                        } else {
                                          if (String((s as any).locArgs?.[1] ?? '') === 'fashionista_dress') {
                                            (s as any).result = 200;
                                          } else {
                                            if (String((s as any).locArgs?.[1] ?? '') === 'flamingos_dress') {
                                              (s as any).result = 180;
                                            } else {
                                              if (String((s as any).locArgs?.[1] ?? '') === 'materinstvo_dress') {
                                                (s as any).result = 10;
                                              } else {
                                                if (String((s as any).locArgs?.[1] ?? '') === 'moncheri_dress') {
                                                  (s as any).result = 100;
                                                } else {
                                                  if (String((s as any).locArgs?.[1] ?? '') === 'gm_dress') {
                                                    (s as any).result = 300;
                                                  } else {
                                                    if (String((s as any).locArgs?.[1] ?? '') === 'scandalicious_dress') {
                                                      (s as any).result = 150;
                                                    } else {
                                                      if (String((s as any).locArgs?.[1] ?? '') === 'salacious_dress') {
                                                        (s as any).result = 61;
                                                      } else {
                                                        if (String((s as any).locArgs?.[1] ?? '') === 'bomba_outfits') {
                                                          (s as any).result = 100;
                                                        } else {
                                                          if (String((s as any).locArgs?.[1] ?? '') === 'cats_outfits') {
                                                            (s as any).result = 200;
                                                          } else {
                                                            if (String((s as any).locArgs?.[1] ?? '') === 'coco_outfits') {
                                                              (s as any).result = 160;
                                                            } else {
                                                              if (String((s as any).locArgs?.[1] ?? '') === 'dolls_outfits') {
                                                                (s as any).result = 93;
                                                              } else {
                                                                if (String((s as any).locArgs?.[1] ?? '') === 'danilovich_outfits') {
                                                                  (s as any).result = 162;
                                                                } else {
                                                                  if (String((s as any).locArgs?.[1] ?? '') === 'eroto_outfits') {
                                                                    (s as any).result = 100;
                                                                  } else {
                                                                    if (String((s as any).locArgs?.[1] ?? '') === 'fashionista_outfits') {
                                                                      (s as any).result = 20;
                                                                    } else {
                                                                      if (String((s as any).locArgs?.[1] ?? '') === 'flamingos_outfits') {
                                                                        (s as any).result = 160;
                                                                      } else {
                                                                        if (String((s as any).locArgs?.[1] ?? '') === 'gm_outfits') {
                                                                          (s as any).result = 200;
                                                                        } else {
                                                                          if (String((s as any).locArgs?.[1] ?? '') === 'nerdvana_outfits') {
                                                                            (s as any).result = 90;
                                                                          } else {
                                                                            if (String((s as any).locArgs?.[1] ?? '') === 'scandalicious_outfits') {
                                                                              (s as any).result = 30;
                                                                            } else {
                                                                              if (String((s as any).locArgs?.[1] ?? '') === 'market_outfits') {
                                                                                (s as any).result = 40;
                                                                              } else {
                                                                                if (String((s as any).locArgs?.[1] ?? '') === 'salacious_outfits') {
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
  if (String((s as any).locArgs?.[3] ?? '') === 0  &&  String((s as any).locArgs?.[3] ?? '') === '') {
    qspCall(s, 'clothing_attributes', '$ARGS[1]', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = (((s as any).CloPrice ?? 0) * ((5 * ((s as any).CloQuality ?? 0)) + 100) / 100) * 1000 / (1250 - ((s as any).Clothingstock ?? 0)[((s as any).locArgs?.[2] ?? 0)]) * 3 / 2;
  (s as any).result = ((s as any).result ?? 0) / 50 * 50;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNotWearReason(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'clothing_attributes', '$ARGS[1]', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = '';
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_owned';
    return;
  }
  if (qspFunc(s, 'clothing', 'is_lost', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 'is_lost';
    return;
  }
  if (qspFunc(s, 'clothing', 'in_wardrobe', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).result = 'not_in_wardrobe';
    return;
  }
  if (qspFunc(s, 'clothing', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 'low_strength';
    return;
  }
  if (((s as any).pcs_inhib ?? 0) < ((s as any).CloInhibit ?? 0)) {
    (s as any).result = 'low_inhib';
    return;
  }
  if (((s as any).CloStyle2 ?? 0) !== 6  &&  ((s as any).CloStyle ?? 0) !== 5  &&  String((s as any).locArgs?.[1] ?? '') !== 'nude') {
    if (qspFunc(s, 'clothing', 'is_clothes_too_small', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
      (s as any).result = 'too_small';
      return;
    }
    if (qspFunc(s, 'clothing', 'is_clothes_too_large', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
      (s as any).result = 'too_large';
      return;
    }
  }
  if (qspFunc(s, 'clothing', 'is_hypno_approved', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === 0) {
    (s as any).result = 'hypno';
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanWear(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'clothing_attributes', '$ARGS[1]', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = (qspFunc(s, 'clothing', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsLost(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = ((Array.isArray((s as any).CloLosTyp) ? ((s as any).CloLosTyp as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0  &&  (Array.isArray((s as any).CloLosNum) ? ((s as any).CloLosNum as any[]).indexOf(String((s as any).locArgs?.[2] ?? '')) : -1) >= 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInWardrobe(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInStorage(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInUnwanted(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDoesFit(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = ((! qspFunc(s, 'clothing', 'is_too_small', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)))  &&  (! qspFunc(s, 'clothing', 'is_too_large', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsTooSmall(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsTooLarge(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsHypnoApproved(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    qspCall(s, 'clothing_attributes', '$ARGS[1]', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = 1;
  if (((s as any).hypnoClothes ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'salacious_outfits'  ||  String((s as any).locArgs?.[1] ?? '') === 'salacious_dress') {
    // TODO-QSP: exit
  }
  if (((s as any).CloThinness ?? 0) >= 6) {
    // TODO-QSP: exit
  }
  if ((((s as any).CloStyle2 ?? 0) === 6  ||  ((s as any).CloSport ?? 0) === 1)  &&  ((s as any).CloThinness ?? 0) >= 5) {
    // TODO-QSP: exit
  }
  if ((String((s as any).locArgs?.[1] ?? '') === 'eroto_outfits'  ||  String((s as any).locArgs?.[1] ?? '') === 'eroto_dress'  ||  String((s as any).locArgs?.[1] ?? '') === 'eroto_strip')  &&  ((s as any).CloThinness ?? 0) >= 3) {
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
  (s as any).result = (((s as any).clothingworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).clothingwornnumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm_outfits'  &&  String((s as any).locArgs?.[2] ?? '') === 3);
  if (((s as any).result ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm_school'  &&  String((s as any).locArgs?.[2] ?? '') === 6);
    if (((s as any).result ?? 0)) {
      // TODO-QSP: exit
    }
  }
  if (((s as any).misc_outfits ?? 0)[1]) {
    (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'misc_outfits'  &&  String((s as any).locArgs?.[2] ?? '') === 1);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsCloStrengthLow(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'is_strength_low', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothingOwned(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsClothesTooSmall(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'is_too_small', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsClothesTooLarge(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'is_too_large', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDoClothesFit(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = qspFunc(s, 'clothing', 'does_fit', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    // TODO-QSP: exit
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'clothing_attributes', '$ARGS[1]', ((s as any).locArgs?.[2] ?? 0));
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
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'nude') {
    // TODO-QSP: exit
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_b[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_s[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_dirt[<<ARGS[2]>>] = 0
  // TODO-QSP: <<$ARGS[1]>>_h[<<ARGS[2]>>] = 0
  // TODO-QSP: "
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).clothingworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).clothingwornnumber ?? 0)) {
    qspCall(s, 'clothing', 'strip_code');
    (s as any).lastwornclothingtype = 'nude';
    (s as any).lastwornclothingnumber = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_outfits = (s as any).gm_outfits ?? {})[3] = 1;
  ((s as any).gm_outfits_b = (s as any).gm_outfits_b ?? {})[3] = ((s as any).pcs_hips ?? 0);
  ((s as any).gm_outfits_s = (s as any).gm_outfits_s ?? {})[3] = 0;
  ((s as any).gm_outfits_dirt = (s as any).gm_outfits_dirt ?? {})[3] = 1440;
  ((s as any).gm_outfits_h = (s as any).gm_outfits_h ?? {})[3] = 10000;
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    ((s as any).gm_school = (s as any).gm_school ?? {})[6] = 1;
    ((s as any).gm_school_b = (s as any).gm_school_b ?? {})[6] = ((s as any).pcs_hips ?? 0);
    ((s as any).gm_school_s = (s as any).gm_school_s ?? {})[6] = 0;
    ((s as any).gm_school_dirt = (s as any).gm_school_dirt ?? {})[6] = 1440;
    ((s as any).gm_school_h = (s as any).gm_school_h ?? {})[6] = 10000;
  }
  if (((s as any).misc_outfits ?? 0)[1]) {
    ((s as any).misc_outfits_b = (s as any).misc_outfits_b ?? {})[1] = ((s as any).pcs_hips ?? 0);
    ((s as any).misc_outfits_s = (s as any).misc_outfits_s ?? {})[1] = 0;
    ((s as any).misc_outfits_dirt = (s as any).misc_outfits_dirt ?? {})[1] = 2400;
    ((s as any).misc_outfits_h = (s as any).misc_outfits_h ?? {})[1] = 10000;
  }
  // TODO-QSP: end
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).clothingworntype ?? 0), ((s as any).clothingwornnumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
  }
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
    default:
      enterDefault(s, scene);
      break;
  }
}

export const clothing: LocationDef = {
  name: 'clothing',
  title: 'This uniform is so short that it\'s an outright mockery of th',
  region: 'other',
  enter: enter,
};
