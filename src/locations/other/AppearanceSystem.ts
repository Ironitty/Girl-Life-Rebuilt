import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).clothingBonus = qspFunc(s, 'AppearanceSystem', 'CalcClothingBonus');
  (s as any).accessoriesBonus = qspFunc(s, 'AppearanceSystem', 'CalcAccessoriesBonus');
  (s as any).groomingBonus = qspFunc(s, 'AppearanceSystem', 'CalcGroomingBonus');
  (s as any).groomingPenalty = qspFunc(s, 'AppearanceSystem', 'CalcGroomingPenalty');
  (s as any).pcs_apprnc = qspFunc(s, 'AppearanceSystem', 'CalcAppearance', (((s as any).arch_effects ?? {})?.['appearance_effect'] ?? 0) + ((s as any).succappbonus ?? 0) + ((((s as any).glamouractive ?? 0) === 1) ? (150) : (0)));
  (s as any).pcs_hotcat = qspFunc(s, 'AppearanceSystem', 'ConvertToHotcat', ((s as any).pcs_apprnc ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterUpdateBaseAppearance(s: GameState, scene: SceneBuilder): void {
  (s as any).attributeBonus = qspFunc(s, 'AppearanceSystem', 'CalcAttributeBonus');
  (s as any).skinBonus = ((s as any).pcs_skin ?? 0) / 10;
  (s as any).bodyShapeBonus = qspFunc(s, 'AppearanceSystem', 'CalcBodyShapeBonus');
  (s as any).visibleAgePenalty = qspFunc(s, 'AppearanceSystem', 'CalcVisibleAgePenalty');
  (s as any).teethPenalty = qspFunc(s, 'AppearanceSystem', 'CalcTeethPenalty');
  (s as any).pcs_apprncbase = ((s as any).skinBonus ?? 0) + ((s as any).bodyShapeBonus ?? 0) + ((s as any).attributeBonus ?? 0) - ((s as any).visibleAgePenalty ?? 0) - ((s as any).teethPenalty ?? 0) + (((s as any).arch_effects ?? {})?.['appearance_effect'] ?? 0) + ((s as any).succappbonus ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterCalcFaceBonus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lashes ?? 0) <= 0) {
    (s as any).eyelashesBonus = 0;
  } else {
    if (((s as any).pcs_lashes ?? 0) === 1) {
      (s as any).eyelashesBonus = 1;
    } else {
      if (((s as any).pcs_lashes ?? 0) >= 2) {
        (s as any).eyelashesBonus = ((s as any).pcs_lashes ?? 0) + 1;
      }
    }
  }
  (s as any).eyelashesBonus = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).eyelashesBonus ?? 0));
  if (((s as any).pcs_eyesize ?? 0) <= 1) {
    (s as any).eyeSizeBonus = ((s as any).pcs_eyesize ?? 0);
  } else {
    if (((s as any).pcs_eyesize ?? 0) === 2) {
      (s as any).eyeSizeBonus = 3;
    } else {
      (s as any).eyeSizeBonus = 2;
    }
  }
  (s as any).eyeSizeBonus = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).eyeSizeBonus ?? 0));
  if (((s as any).pcs_lip ?? 0) <= 0) {
    (s as any).lipBonus = (-2);
  } else {
    if (((s as any).pcs_lip ?? 0) <= 2) {
      (s as any).lipBonus = ((s as any).pcs_lip ?? 0) - 1;
    } else {
      (s as any).lipBonus = 3;
    }
  }
  (s as any).lipBonus = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).lipBonus ?? 0));
  (s as any).result = ((s as any).eyelashesBonus ?? 0) + ((s as any).eyeSizeBonus ?? 0) + ((s as any).lipBonus ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcAttributeBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).tempAttributeBonus = (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0)) / 5;
  (s as any).result = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).tempAttributeBonus ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcVisibleAgePenalty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vidage ?? 0) < 20) {
    (s as any).tempAttributePenalty = (5*(20 - ((s as any).vidage ?? 0)) + 1) / 2;
  }
  (s as any).result = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).tempAttributePenalty ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcTeethPenalty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_teeth ?? 0) > 0) {
    (s as any).tempAttributePenalty = 10 * ((s as any).pcs_teeth ?? 0);
  } else {
    if ((!((s as any).pcs_teeth ?? 0))) {
      (s as any).tempAttributePenalty = 5;
    } else {
      (s as any).tempAttributePenalty = 0;
    }
  }
  if (((s as any).pcs_missing_teeth ?? 0) > 0) {
    (s as any).tempAttributePenalty = ((s as any).tempAttributePenalty ?? 0) + (10 * ((s as any).pcs_missing_teeth ?? 0));
  }
  (s as any).result = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).tempAttributePenalty ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcBodyShapeBonus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dounspell ?? 0) === 1) {
    (s as any).bodytipe = ((s as any).pcs_hips ?? 0) - ((s as any).pcs_waist ?? 0);
    if (((s as any).bodytipe ?? 0) < 20) {
      (s as any).result = 0;
    } else {
      if (((s as any).bodytipe ?? 0) >= 20  &&  ((s as any).bodytipe ?? 0) < 25) {
        (s as any).result = 2;
      } else {
        if ((((s as any).bodytipe ?? 0) >= 25  &&  ((s as any).bodytipe ?? 0) < 30)  ||  ((s as any).bodytipe ?? 0) >=35) {
          (s as any).result = 4;
        } else {
          if (((s as any).bodytipe ?? 0) >= 30  &&  ((s as any).bodytipe ?? 0) < 35) {
            (s as any).result = 8;
          }
        }
      }
    }
  } else {
    if (((s as any).succubusflag ?? 0) > 0) {
      (s as any).result = qspFunc(s, 'body_structure', 'appearance_bonus', 22, 90);
    } else {
      (s as any).result = qspFunc(s, 'body_structure', 'appearance_bonus');
      if (((s as any).pcs_mass ?? 0)?.['body'] < 8  ||  ((s as any).pcs_mass ?? 0)?.['body'] >= 98) {
        (s as any).result = ((s as any).result ?? 0) - (8);
      } else {
        if (((s as any).pcs_mass ?? 0)?.['body'] < 23  ||  ((s as any).pcs_mass ?? 0)?.['body'] >= 83) {
          (s as any).result = ((s as any).result ?? 0) - (4);
        }
      }
      (s as any).result = ((s as any).result ?? 0) - (Math.max(0, ((s as any).bodyVars ?? 0)?.['vofat']));
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcClothingBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'outfit', 'CalcClothingBonus');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcAccessoriesBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'outfit', 'CalcAccessoriesBonus');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcGroomingBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).makeupBonus = ((s as any).pcs_makupskl ?? 0) / 5 - 5;
  if ((!((s as any).pcs_makeup ?? 0))) {
    (s as any).makeupBonus = (-5);
  } else {
    if (((s as any).pcs_makeup ?? 0) === 1) {
      (s as any).makeupBonus = 0;
    } else {
      if (((s as any).pcs_makeup ?? 0) === 5) {
        (s as any).makeupBonus = 30;
      } else {
        if (((s as any).pcs_makeup ?? 0) === 6  &&  ((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
          (s as any).makeupBonus = ((s as any).makeupBonus ?? 0) + ((((s as any).arch_vars ?? {})?.['bimbo_points'] ?? 0) / 25000);
        } else {
          if (((s as any).pcs_makeup ?? 0) === 7) {
            (s as any).makeupBonus = ((s as any).makeupBonus ?? 0) + (((s as any).pcs_makupskl ?? 0) / 10 - 5);
          }
        }
      }
    }
  }
  (s as any).breathBonus = 5 * ((s as any).pcs_breath ?? 0);
  (s as any).result = qspFunc(s, 'AppearanceSystem', 'AdjustFromBMI', ((s as any).makeupBonus ?? 0) + ((s as any).breathBonus ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcGroomingPenalty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lipbalm ?? 0) <= 0) {
    (s as any).lipBalmPenalty = 5;
  }
  (s as any).hairPenalty = (1 - ((s as any).pcs_hairbsh ?? 0)) * 10;
  if (((s as any).pcs_hairlng ?? 0) < 10) {
    (s as any).buzzCutPenalty = 10;
  }
  if (((s as any).deodorant_on ?? 0) === 0  ||  ((s as any).pcs_sweat ?? 0) >= 20) {
    (s as any).deodorantPenalty = 5;
  }
  if (((s as any).pcs_sweat ?? 0) < 22) {
    (s as any).sweatPenalty = 0;
  } else {
    if (((s as any).temppcs_sweat ?? 0) < 38) {
      (s as any).sweatPenalty = (((s as any).pcs_sweat ?? 0) - 10) / 4;
    } else {
      if (((s as any).temppcs_sweat ?? 0) < 54) {
        (s as any).sweatPenalty = (((s as any).pcs_sweat ?? 0) - 10) / 2;
      } else {
        (s as any).sweatPenalty = 3 * (((s as any).pcs_sweat ?? 0) - 10) / 4;
      }
    }
  }
  if (((s as any).glass ?? 0) === 1) {
    (s as any).glassesPenalty = 10;
  }
  if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)) {
    if (((s as any).dyefade ?? 0) > 0  &&  ((s as any).dyefade ?? 0) < 7) {
      (s as any).hairDyePenalty = 5;
    }
    if ((!((s as any).dyefade ?? 0))) {
      (s as any).hairDyePenalty = 15;
    }
  }
  (s as any).legPenalty = Math.max(0, Math.min(3 * (((s as any).pcs_leghair ?? 0) / 3), 9));
  (s as any).result = ((s as any).sweatPenalty ?? 0) + ((s as any).glassesPenalty ?? 0) + ((s as any).hairDyePenalty ?? 0) + ((s as any).buzzCutPenalty ?? 0) + ((s as any).legPenalty ?? 0) + ((s as any).lipBalmPenalty ?? 0) + ((s as any).hairPenalty ?? 0) + ((s as any).deodorantPenalty ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcAppearance(s: GameState, scene: SceneBuilder): void {
  (s as any).superNaturalBonus = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_apprnc = ((s as any).pcs_apprncbase ?? 0) + ((s as any).clothingBonus ?? 0) + ((s as any).accessoriesBonus ?? 0) + ((s as any).groomingBonus ?? 0) - ((s as any).groomingPenalty ?? 0);
  (s as any).result = Math.max(0, Math.min(((s as any).temp_apprnc ?? 0), 200)) + ((s as any).superNaturalBonus ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterConvertToHotcat(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) <= 40) {
    (s as any).result = 1;
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) <= 60) {
      (s as any).result = 2;
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) <= 80) {
        (s as any).result = 3;
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) <= 100) {
          (s as any).result = 4;
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) <= 125) {
            (s as any).result = 5;
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) <= 150) {
              (s as any).result = 6;
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) <= 165) {
                (s as any).result = 7;
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) <= 180) {
                  (s as any).result = 8;
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) <= 199) {
                    (s as any).result = 9;
                  } else {
                    (s as any).result = 10;
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

function enterAdjustFromBMI(s: GameState, scene: SceneBuilder): void {
  (s as any).tempValue = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class') % 1000;
  if (((s as any).temp_bs_class ?? 0) < 100) {
    (s as any).result = ((s as any).tempValue ?? 0) * 50 / 100;
  } else {
    if (((s as any).temp_bs_class ?? 0) < 200) {
      (s as any).result = ((s as any).tempValue ?? 0) * 95 / 100;
    } else {
      if (((s as any).temp_bs_class ?? 0) < 400) {
        (s as any).result = ((s as any).tempValue ?? 0);
      } else {
        if (((s as any).temp_bs_class ?? 0) < 500) {
          (s as any).result = ((s as any).tempValue ?? 0) * 95 / 100;
        } else {
          if (((s as any).temp_bs_class ?? 0) < 600) {
            (s as any).result = ((s as any).tempValue ?? 0) * 80 / 100;
          } else {
            if (((s as any).temp_bs_class ?? 0) < 700) {
              (s as any).result = ((s as any).tempValue ?? 0) * 55 / 100;
            } else {
              if (((s as any).temp_bs_class ?? 0) < 800) {
                (s as any).result = ((s as any).tempValue ?? 0) * 50 / 100;
              } else {
                (s as any).result = ((s as any).tempValue ?? 0) * 40 / 100;
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'UpdateBaseAppearance':
      enterUpdateBaseAppearance(s, scene);
      break;
    case 'CalcFaceBonus':
      enterCalcFaceBonus(s, scene);
      break;
    case 'CalcAttributeBonus':
      enterCalcAttributeBonus(s, scene);
      break;
    case 'CalcVisibleAgePenalty':
      enterCalcVisibleAgePenalty(s, scene);
      break;
    case 'CalcTeethPenalty':
      enterCalcTeethPenalty(s, scene);
      break;
    case 'CalcBodyShapeBonus':
      enterCalcBodyShapeBonus(s, scene);
      break;
    case 'CalcClothingBonus':
      enterCalcClothingBonus(s, scene);
      break;
    case 'CalcAccessoriesBonus':
      enterCalcAccessoriesBonus(s, scene);
      break;
    case 'CalcGroomingBonus':
      enterCalcGroomingBonus(s, scene);
      break;
    case 'CalcGroomingPenalty':
      enterCalcGroomingPenalty(s, scene);
      break;
    case 'CalcAppearance':
      enterCalcAppearance(s, scene);
      break;
    case 'ConvertToHotcat':
      enterConvertToHotcat(s, scene);
      break;
    case 'AdjustFromBMI':
      enterAdjustFromBMI(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const AppearanceSystem: LocationDef = {
  name: 'AppearanceSystem',
  region: 'other',
  enter: enter,
};
