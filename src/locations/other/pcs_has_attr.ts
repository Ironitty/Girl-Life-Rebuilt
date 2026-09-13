import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if ((String(((s as any).locArgs?.[0] ?? 0)).toUpperCase()) === ' && ') {
    (s as any).pha_i = 1;
    (s as any).pha_maxi = 0;
    if (((s as any).pha_maxi ?? 0) === 1) {
      (s as any).result = 0;
      // TODO-QSP: jump 'pha_AND_killvar'
    }
    // TODO-QSP: :pha_AND_loop
    if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
      if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) === 0) {
        (s as any).result = 0;
        // TODO-QSP: jump 'pha_AND_killvar'
      }
    } else {
      if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] === 0) {
        (s as any).result = 0;
        // TODO-QSP: jump 'pha_AND_killvar'
      }
    }
    (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
    if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
      // TODO-QSP: jump 'pha_AND_loop'
    }
    (s as any).result = 1;
    // TODO-QSP: :pha_AND_killvar
    return;
  } else {
    if ((String(((s as any).locArgs?.[0] ?? 0)).toUpperCase()) === ' || ') {
      (s as any).pha_i = 1;
      (s as any).pha_maxi = 0;
      if (((s as any).pha_maxi ?? 0) === 1) {
        (s as any).result = 0;
        // TODO-QSP: jump 'pha_OR_killvar'
      }
      // TODO-QSP: :pha_OR_loop
      if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
        if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)])) {
          (s as any).result = 1;
          // TODO-QSP: jump 'pha_OR_killvar'
        }
      } else {
        if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) {
          (s as any).result = 1;
          // TODO-QSP: jump 'pha_OR_killvar'
        }
      }
      (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
      if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
        // TODO-QSP: jump 'pha_OR_loop'
      }
      (s as any).result = 0;
      // TODO-QSP: :pha_OR_killvar
      return;
    } else {
      if ((String(((s as any).locArgs?.[0] ?? 0)).toUpperCase()) === 'NAND') {
        (s as any).pha_i = 1;
        (s as any).pha_maxi = 0;
        if (((s as any).pha_maxi ?? 0) === 1) {
          (s as any).result = 0;
          // TODO-QSP: jump 'pha_NAND_killvar'
        }
        // TODO-QSP: :pha_NAND_loop
        if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
          if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) === 0) {
            (s as any).result = 1;
            // TODO-QSP: jump 'pha_NAND_killvar'
          }
        } else {
          if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] === 0) {
            (s as any).result = 1;
            // TODO-QSP: jump 'pha_NAND_killvar'
          }
        }
        (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
        if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
          // TODO-QSP: jump 'pha_NAND_loop'
        }
        (s as any).result = 0;
        // TODO-QSP: :pha_NAND_killvar
        return;
      } else {
        if ((String(((s as any).locArgs?.[0] ?? 0)).toUpperCase()) === 'NOR') {
          (s as any).pha_i = 1;
          (s as any).pha_maxi = 0;
          if (((s as any).pha_maxi ?? 0) === 1) {
            (s as any).result = 0;
            // TODO-QSP: jump 'pha_NOR_killvar'
          }
          // TODO-QSP: :pha_NOR_loop
          if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
            if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)])) {
              (s as any).result = 0;
              // TODO-QSP: jump 'pha_NOR_killvar'
            }
          } else {
            if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) {
              (s as any).result = 0;
              // TODO-QSP: jump 'pha_NOR_killvar'
            }
          }
          (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
          if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
            // TODO-QSP: jump 'pha_NOR_loop'
          }
          (s as any).result = 1;
          // TODO-QSP: :pha_NOR_killvar
          return;
        } else {
          if ((String(((s as any).locArgs?.[0] ?? 0)).toUpperCase()) === 'XOR') {
            (s as any).pha_i = 1;
            (s as any).pha_maxi = 0;
            (s as any).pha_target = 0;
            if (((s as any).pha_maxi ?? 0) === 1) {
              (s as any).result = 0;
              // TODO-QSP: jump 'pha_XOR_killvar'
            }
            (s as any).result = 0;
            if ((!((s as any).locArgs?.[1] ?? 0))) {
              (s as any).pha_i = 1;
              (s as any).pha_target = 1;
            } else {
              (s as any).pha_i = 2;
              (s as any).pha_target = qspUntranslated(s, "ARGS[1]", { location: "pcs_has_attr" });
            }
            // TODO-QSP: :pha_XOR_loop
            if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)] !== '') {
              if (qspFunc(s, 'pcs_has_attr', ((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)])) {
                if (((s as any).result ?? 0) < ((s as any).pha_target ?? 0)) {
                  (s as any).result = ((s as any).result ?? 0) + (1);
                } else {
                  (s as any).result = 0;
                  // TODO-QSP: jump 'pha_XOR_killvar'
                }
              }
            } else {
              if (((s as any).ARGS ?? 0)?.[String((s as any).pha_i ?? 0)]) {
                if (((s as any).result ?? 0) < ((s as any).pha_target ?? 0)) {
                  (s as any).result = ((s as any).result ?? 0) + (1);
                } else {
                  (s as any).result = 0;
                  // TODO-QSP: jump 'pha_XOR_killvar'
                }
              }
            }
            (s as any).pha_i = ((s as any).pha_i ?? 0) + (1);
            if (((s as any).pha_i ?? 0) < ((s as any).pha_maxi ?? 0)) {
              // TODO-QSP: jump 'pha_XOR_loop'
            }
            if (((s as any).result ?? 0) !== ((s as any).pha_target ?? 0)) {
              (s as any).result = 0;
            }
            // TODO-QSP: :pha_XOR_killvar
            return;
          }
        }
      }
    }
  }
  // TODO-QSP: $ARGS[0] = $lcase($ARGS[0])
  scene.build();
}

function enterBodyAssFlat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_buttsize ?? 0) < 15) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyAssAverage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_buttsize ?? 0) >= 15  &&  ((s as any).pcs_buttsize ?? 0) < 30) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyAssBig(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_buttsize ?? 0) >= 30  &&  ((s as any).pcs_buttsize ?? 0) < 45) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyAssHeart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_buttsize ?? 0) >= 45  &&  ((s as any).pcs_buttsize ?? 0) < 60) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyAssBubble(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_buttsize ?? 0) >= 60) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyAssAtLeast_(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyAssAtMost_(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyAss_(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyBmiStarving(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class') % 1000;
  if (((s as any).temp_bs_class ?? 0) < 100) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyBmiUnderweight(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class') % 1000;
  if (((s as any).temp_bs_class ?? 0) >= 100  &&  ((s as any).temp_bs_class ?? 0) < 200) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyBmiNormal(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class') % 1000;
  if (((s as any).temp_bs_class ?? 0) >= 200  &&  ((s as any).temp_bs_class ?? 0) < 400) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyBmiOverweight(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class') % 1000;
  if (((s as any).temp_bs_class ?? 0) >= 400  &&  ((s as any).temp_bs_class ?? 0) < 500) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyBmiObese(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bs_class = qspFunc(s, 'body_structure', 'get_class') % 1000;
  if (((s as any).temp_bs_class ?? 0) >= 500) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyEyesBrown(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_eyecol ?? 0))) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyEyesGrey(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_eyecol ?? 0) === 1) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyEyesGreen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_eyecol ?? 0) === 2) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyEyesBlue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_eyecol ?? 0) === 3) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyLipsThin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) < 1) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyLipsNormal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) === 1) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyLipsPlump(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) === 2) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyLipsBig(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) === 3) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyLipsPillowy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) >= 4) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodySkinBad(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_skin ?? 0) < 400) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodySkinNormal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_skin ?? 0) >= 400  &&  ((s as any).pcs_skin ?? 0) < 600) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodySkinGood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_skin ?? 0) >= 600) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodySweatNone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) < 22) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodySweatSweaty(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) >= 22  &&  ((s as any).pcs_sweat ?? 0) < 40) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodySweatStinky(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) >= 40) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyTitsSmall(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_cupsize ?? 0) < 11) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyTitsAverage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_cupsize ?? 0) >= 11  &&  ((s as any).pcs_cupsize ?? 0) < 21) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyTitsBig(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_cupsize ?? 0) >= 21  &&  ((s as any).pcs_cupsize ?? 0) < 36) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterBodyTitsHuge(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_cupsize ?? 0) >= 36) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(19))) === 'body_tits_at_least_') {
    // TODO-QSP: $ARGS[0] = $mid($ARGS[0], 20)
    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(18))) === 'body_tits_at_most_') {
      // TODO-QSP: $ARGS[0] = $mid($ARGS[0], 19)
      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'body_tits_') {
        // TODO-QSP: $ARGS[0] = $mid($ARGS[0], 11)
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'body_ass_flat':
      enterBodyAssFlat(s, scene);
      break;
    case 'body_ass_average':
      enterBodyAssAverage(s, scene);
      break;
    case 'body_ass_big':
      enterBodyAssBig(s, scene);
      break;
    case 'body_ass_heart':
      enterBodyAssHeart(s, scene);
      break;
    case 'body_ass_bubble':
      enterBodyAssBubble(s, scene);
      break;
    case 'body_ass_at_least_':
      enterBodyAssAtLeast_(s, scene);
      break;
    case 'body_ass_at_most_':
      enterBodyAssAtMost_(s, scene);
      break;
    case 'body_ass_':
      enterBodyAss_(s, scene);
      break;
    case 'body_bmi_starving':
      enterBodyBmiStarving(s, scene);
      break;
    case 'body_bmi_underweight':
      enterBodyBmiUnderweight(s, scene);
      break;
    case 'body_bmi_normal':
      enterBodyBmiNormal(s, scene);
      break;
    case 'body_bmi_overweight':
      enterBodyBmiOverweight(s, scene);
      break;
    case 'body_bmi_obese':
      enterBodyBmiObese(s, scene);
      break;
    case 'body_eyes_brown':
      enterBodyEyesBrown(s, scene);
      break;
    case 'body_eyes_grey':
      enterBodyEyesGrey(s, scene);
      break;
    case 'body_eyes_green':
      enterBodyEyesGreen(s, scene);
      break;
    case 'body_eyes_blue':
      enterBodyEyesBlue(s, scene);
      break;
    case 'body_lips_thin':
      enterBodyLipsThin(s, scene);
      break;
    case 'body_lips_normal':
      enterBodyLipsNormal(s, scene);
      break;
    case 'body_lips_plump':
      enterBodyLipsPlump(s, scene);
      break;
    case 'body_lips_big':
      enterBodyLipsBig(s, scene);
      break;
    case 'body_lips_pillowy':
      enterBodyLipsPillowy(s, scene);
      break;
    case 'body_skin_bad':
      enterBodySkinBad(s, scene);
      break;
    case 'body_skin_normal':
      enterBodySkinNormal(s, scene);
      break;
    case 'body_skin_good':
      enterBodySkinGood(s, scene);
      break;
    case 'body_sweat_none':
      enterBodySweatNone(s, scene);
      break;
    case 'body_sweat_sweaty':
      enterBodySweatSweaty(s, scene);
      break;
    case 'body_sweat_stinky':
      enterBodySweatStinky(s, scene);
      break;
    case 'body_tits_small':
      enterBodyTitsSmall(s, scene);
      break;
    case 'body_tits_average':
      enterBodyTitsAverage(s, scene);
      break;
    case 'body_tits_big':
      enterBodyTitsBig(s, scene);
      break;
    case 'body_tits_huge':
      enterBodyTitsHuge(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pcs_has_attr: LocationDef = {
  name: 'pcs_has_attr',
  region: 'other',
  enter: enter,
};
