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
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'clothing', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterGetSwimwearCount(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'clothing', 'get_bikini_count') + qspFunc(s, 'clothing', 'get_swimsuit_count');
  return;
  scene.build();
}

function enterGetBikiniCount(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).result = ((s as any).result ?? 0) + (0);
  (s as any).result = ((s as any).result ?? 0) + (0);
  return;
  scene.build();
}

function enterGetSwimsuitCount(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).result = ((s as any).result ?? 0) + (0);
  (s as any).result = ((s as any).result ?? 0) + (0);
  (s as any).result = ((s as any).result ?? 0) + (0);
  return;
  scene.build();
}

function enterGetPrice(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === '0'  &&  String((s as any).locArgs?.[3] ?? '') === '') {
    qspCall(s, 'clothing_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = (((s as any).CloPrice ?? 0) * ((5 * ((s as any).CloQuality ?? 0)) + 100) / 100) * 1000 / (1250 - ((s as any).Clothingstock ?? 0)[((s as any).locArgs?.[2] ?? 0)]) * 3 / 2;
  (s as any).result = ((s as any).result ?? 0) / 50 * 50;
  return;
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
    qspCall(s, 'clothing_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = '';
  if (qspFunc(s, 'clothing', 'is_immutable', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
    return;
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
    qspCall(s, 'clothing_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = (qspFunc(s, 'clothing', 'not_wear_reason', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'attributes_set') === '');
  return;
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
    qspCall(s, 'clothing_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  }
  (s as any).result = 1;
  if (((s as any).hypnoClothes ?? 0) <= 0) {
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'salacious_outfits'  ||  String((s as any).locArgs?.[1] ?? '') === 'salacious_dress') {
    return;
  }
  if (((s as any).CloThinness ?? 0) >= 6) {
    return;
  }
  if ((((s as any).CloStyle2 ?? 0) === 6  ||  ((s as any).CloSport ?? 0) === 1)  &&  ((s as any).CloThinness ?? 0) >= 5) {
    return;
  }
  if ((String((s as any).locArgs?.[1] ?? '') === 'eroto_outfits'  ||  String((s as any).locArgs?.[1] ?? '') === 'eroto_dress'  ||  String((s as any).locArgs?.[1] ?? '') === 'eroto_strip')  &&  ((s as any).CloThinness ?? 0) >= 3) {
    return;
  }
  if (((s as any).CloStyle2 ?? 0) === 4  &&  ((s as any).CloThinness ?? 0) >= 4) {
    return;
  }
  (s as any).result = 0;
  return;
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).clothingworntype ?? 0) !== ''  &&  ((s as any).clothingworntype ?? 0) !== 'nude');
  return;
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).clothingworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).clothingwornnumber ?? 0) === String((s as any).locArgs?.[2] ?? ''));
  return;
  scene.build();
}

function enterIsImmutable(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm_outfits'  &&  String((s as any).locArgs?.[3] ?? '') === '3');
  if (((s as any).result ?? 0)) {
    return;
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'gm_school'  &&  String((s as any).locArgs?.[6] ?? '') === '6');
    if (((s as any).result ?? 0)) {
      return;
    }
  }
  if (((s as any).misc_outfits ?? 0)[1]) {
    (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'misc_outfits'  &&  String((s as any).locArgs?.[1] ?? '') === '1');
  }
  return;
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
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    return;
  }
  qspCall(s, 'clothing_attributes', '', (s as any).locArgs?.[1] ?? '', ((s as any).locArgs?.[2] ?? 0));
  if ((!((s as any).CloQuality ?? 0))) {
    return;
  }
  return;
  scene.build();
}

function enterRemoveItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'nude') {
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === ((s as any).clothingworntype ?? 0)  &&  String((s as any).locArgs?.[2] ?? '') === ((s as any).clothingwornnumber ?? 0)) {
    qspCall(s, 'clothing', 'strip_code');
    (s as any).lastwornclothingtype = 'nude';
    (s as any).lastwornclothingnumber = 0;
  }
  return;
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
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).clothingworntype ?? 0), ((s as any).clothingwornnumber ?? 0)]; enterRemoveItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterMoveToWardrobe(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).clothingworntype ?? 0);
  }
  if (String((s as any).locArgs?.[0] ?? '') === '0') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).clothingwornnumber ?? 0);
  }
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
  }
  scene.build();
}

function enterResetCloVars(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterResetPCloVars(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterStripCode(s: GameState, scene: SceneBuilder): void {
  (s as any).clothingworntype = 'nude';
  (s as any).clothingwornnumber = 0;
  qspCall(s, 'clothing', 'reset_CloVars');
  qspCall(s, 'clothing', 'reset_PCloVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? '') === '') {
    (s as any).clothingworntype = 'nude';
    (s as any).clothingwornnumber = 0;
  }
  qspCall(s, 'cum_cleanup', 6);
  if (((s as any).clothingworntype ?? '') !== 'nude') {
    const stripLoc = String((s as any).locArgs?.[1] ?? '');
    if (stripLoc === '') {
      if ((s as any).PSwim === 1) {
        ((s as any).lastwornclothingtype = (s as any).lastwornclothingtype ?? {})['swim'] = (s as any).clothingworntype;
        ((s as any).lastwornclothingnumber = (s as any).lastwornclothingnumber ?? {})['swim'] = (s as any).clothingwornnumber;
      } else {
        (s as any).lastwornclothingtype = (s as any).clothingworntype;
        (s as any).lastwornclothingnumber = (s as any).clothingwornnumber;
      }
    } else {
      const cloType = (s as any).clothingworntype as string;
      const cloNum = (s as any).clothingwornnumber as number;
      const varName = `CloLos${cloType}`;
      ((s as any)[varName] = (s as any)[varName] ?? {})[cloNum] = stripLoc;
      (s as any).CloLosLoc = [...((s as any).CloLosLoc ?? []), stripLoc];
      ((s as any).CloLosTyp = (s as any).CloLosTyp ?? {})[stripLoc] = cloType;
      ((s as any).CloLosNum = (s as any).CloLosNum ?? {})[stripLoc] = cloNum;
      ((s as any).CloLosDay = (s as any).CloLosDay ?? {})[stripLoc] = (s as any).daystart;
      (s as any).lastwornclothingtype = 'nude';
      (s as any).lastwornclothingnumber = 0;
    }
  }
  qspCall(s, 'clothing', 'strip_code');
  scene.build();
}

function enterStripAll(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'strip', (s as any).locArgs?.[1] ?? '');
  qspCall(s, 'underwear', 'strip');
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  let arg1 = String((s as any).locArgs?.[1] ?? '');
  let arg2 = (s as any).locArgs?.[2] ?? 0;
  if (arg1 === '') arg1 = 'nude';

  if (arg1 === 'last_worn') {
    if (((s as any).lastwornclothingtype ?? '') === '') {
      (s as any).lastwornclothingtype = 'nude';
      (s as any).lastwornclothingnumber = 0;
    }
    arg1 = String((s as any).lastwornclothingtype ?? '');
    arg2 = (s as any).lastwornclothingnumber ?? 0;
  }

  if (arg1 === '' || arg1 === 'nude') {
    scene.build();
    return;
  }

  qspCall(s, 'clothing', 'strip');
  qspCall(s, 'clothing_attributes', '', arg1, arg2);

  if ((s as any).CloQuality === 0) {
    scene.text(`ERROR: Clothing "${arg1}[${arg2}]" does not exist`);
    scene.build();
    return;
  }

  const argsArr = (s as any).locArgs ?? [];
  if (argsArr.includes('check')) {
    const reason = qspFunc(s, 'clothing', 'not_wear_reason', arg1, arg2, 'no_init');
    if (reason !== '' && reason !== 'hypno') {
      scene.build();
      return;
    }
  }

  (s as any).clothingworntype = arg1;
  (s as any).clothingwornnumber = arg2;

  const wVar = `${arg1}_w`;
  const sVar = `${arg1}_s`;
  ((s as any)[wVar] = (s as any)[wVar] ?? {})[arg2] = 1;
  ((s as any)[sVar] = (s as any)[sVar] ?? {})[arg2] = 0;

  (s as any).PCloQuality = (s as any).CloQuality;
  (s as any).PCloThinness = (s as any).CloThinness;
  (s as any).PCloTopCut = (s as any).CloTopCut;
  (s as any).PCloBra = (s as any).CloBra;
  (s as any).PCloOnePiece = (s as any).CloOnePiece;
  (s as any).PCloPants = (s as any).CloPantsShortness;
  (s as any).PCloSkirt = (s as any).CloSkirtShortness;
  (s as any).PCloPanties = (s as any).CloPanties;
  (s as any).PCloDress = (s as any).CloDress;
  (s as any).PCloStyle = (s as any).CloStyle;
  (s as any).PCloStyle2 = (s as any).CloStyle2;
  (s as any).PCloStyle3 = (s as any).CloStyle3;
  (s as any).PCloInhibit = (s as any).CloInhibit;
  (s as any).PCloBimbo = (s as any).CloBimbo;
  (s as any).PCloGoth = (s as any).CloGoth;
  (s as any).PCloPunk = (s as any).CloPunk;
  (s as any).PCloPrep = (s as any).CloPrep;
  (s as any).PCloPrude = (s as any).CloPrude;
  (s as any).PCloProstitute = (s as any).CloProstitute;
  (s as any).PCloMaid = (s as any).CloMaid;
  (s as any).PCloServer = (s as any).CloServer;
  (s as any).PCloStrip = (s as any).CloStrip;
  (s as any).PCloSchool = (s as any).CloSchool;
  (s as any).PCloOffice = (s as any).CloOffice;
  (s as any).PCloSport = (s as any).CloSport;
  (s as any).PCloSwim = (s as any).CloSwim;
  (s as any).PCloCoverTop = (s as any).CloCoverTop;
  (s as any).PCloCoverBack = (s as any).CloCoverBack;
  (s as any).PCloCoverFront = (s as any).CloCoverFront;
  (s as any).PCloPrice = (s as any).CloPrice;
  (s as any).PCloDirt = (s as any).CloDirt;
  (s as any).PCloStrength = (s as any).CloStrength;
  (s as any).PCloMaxStrength = (s as any).CloMaxStrength;

  const thinness = (s as any).PCloThinness ?? 0;
  (s as any).PXCloThinness = thinness === 0 ? 0 : thinness === 1 ? 150 : thinness === 2 ? 200 : thinness === 3 ? 250 : thinness === 4 ? 300 : thinness === 5 ? 350 : 400;

  const topCut = (s as any).PCloTopCut ?? 0;
  (s as any).PXCloTopCut = topCut === 0 ? 0 : topCut === 1 ? 100 : topCut === 2 ? 200 : topCut === 3 ? 300 : 400;

  const skirt = (s as any).PCloSkirt ?? 0;
  const pants = (s as any).PCloPants ?? 0;
  let bottomShortness = 0;
  if (skirt === 0 && pants === 0) bottomShortness = 0;
  else if (skirt === 1 || pants === 1) bottomShortness = 100;
  else if (skirt === 2 || pants === 2) bottomShortness = 150;
  else if (skirt === 3 || pants === 3) bottomShortness = 200;
  else if (skirt === 4 || pants === 4) bottomShortness = 250;
  else if (skirt === 5 || pants === 5) bottomShortness = 300;
  else if (skirt === 6 || pants === 6) bottomShortness = 350;
  else bottomShortness = 400;
  if ((s as any).PCloPanties === 1) bottomShortness = 400;
  (s as any).PXCloBottomShortness = bottomShortness;

  if (argsArr.includes('borrowed')) {
    (s as any).PCloBorrowed = 1;
    ((s as any)[wVar] = (s as any)[wVar] ?? {})[arg2] = 0;
    (s as any).PCloDirt = 0;
    (s as any).PCloStrength = (s as any).PCloMaxStrength;
  }

  qspCall(s, 'outfit', 'set_derived_vars');
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
    case 'wear':
      enterWear(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'strip_all':
      enterStripAll(s, scene);
      break;
    case 'strip_code':
      enterStripCode(s, scene);
      break;
    case 'reset_CloVars':
      enterResetCloVars(s, scene);
      break;
    case 'reset_PCloVars':
      enterResetPCloVars(s, scene);
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
