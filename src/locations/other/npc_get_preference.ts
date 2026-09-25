import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_preferences ?? 0)[String((s as any).locArgs?.[0] ?? '')] !== '') {
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_clear') : -1) < 0) {
    (s as any).ngp_pref = undefined;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_ass') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_ass_flat'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_ass_average'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_ass_big'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_ass_heart'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_ass_bubble'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_bmi') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_bmi_starving'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_bmi_underweight'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_bmi_normal'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_bmi_overweight'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_bmi_obese'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_eyes') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_eyes_brown'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_eyes_grey'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_eyes_green'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_eyes_blue'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_lips') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_lips_thin'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_lips_normal'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_lips_plump'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_lips_big'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_lips_pillowy'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_skin') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_skin_bad'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_skin_normal'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_skin_good'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_sweat') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_sweat_none'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_sweat_sweaty'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_sweat_stinky'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_tits') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_tits_small'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_tits_average'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_tits_big'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'body_tits_huge'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_cleavage') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_cleavage_none'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_cleavage_small'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_cleavage_medium'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_cleavage_large'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_pants') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_pants_long'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_pants_normal'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_pants_short'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_quality') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_quality_low'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_quality_medium'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_quality_high'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_skirt') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_skirt_long'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_skirt_normal'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_skirt_short'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_thin') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_thin_low'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_thin_medium'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_thin_high'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('shoes_heels') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'shoes_heels_flat'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'shoes_heels_low'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'shoes_heels_medium'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'shoes_heels_high'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'shoes_heels_ultra'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'shoes_heels_fetish'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('cosmetics_makeup') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_makeup_running'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_makeup_none'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_makeup_light'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_makeup_moderate'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_makeup_heavy'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('cosmetics_piercings') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_piercings_none'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_piercings_few'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_piercings_multiple'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_piercings_lot'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('cosmetics_tattoos') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_tattoos_none'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_tattoos_few'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_tattoos_multiple'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'cosmetics_tattoos_lot'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hair_color') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_color_black'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_color_brown'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_color_red'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_color_blonde'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_color_dyed'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hair_length') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_length_veryshort'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_length_short'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_length_chin'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_length_shoulder'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_length_bra'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_length_long'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hair_pube_style') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_pubes_shaven'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_pubes_stubble'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_pubes_patch'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_pubes_trimmed'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_pubes_bush'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'hair_pubes_untrimmed'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('stats_intel') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'stats_intel_dumb'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'stats_intel_normal'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'stats_intel_smart'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('stats_strength') : -1) >= 0) {
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'stats_strength_weak'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'stats_strength_normal'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'stats_strength_athletic'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'stats_strength_strong'];
    (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'stats_strength_manly'];
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('randomPosIndNeg') : -1) >= 0) {
    (s as any).ngpVars = undefined;
    (s as any).temp_ngpPrefHasPos = undefined;
    (s as any).temp_ngpPrefNotPos = undefined;
    (s as any).temp_ngpPrefHasNeg = undefined;
    (s as any).temp_ngpPrefNotNeg = undefined;
    (s as any).temp_ngpPrefHasInd = undefined;
    (s as any).temp_ngpPrefNotInd = undefined;
    (s as any).ngpPrefResult = undefined;
    ((s as any).ngpVars = (s as any).ngpVars ?? {})['max'] = 0;
    if (((s as any).ngpVars ?? 0)?.['max'] === 0) {
      (s as any).ngpVars = undefined;
      return;
    }
    ((s as any).ngpVars = (s as any).ngpVars ?? {})['i'] = 0;
    do {
      ((s as any).ngpVars = (s as any).ngpVars ?? {})['trait'] = qspUntranslated(s, "ngp_pref[ngpVars['i']]", { location: "npc_get_preference" });
      if (qspFunc(s, 'pcs_has_attr', ((s as any).ngpVars ?? 0)?.['trait'])) {
        if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] > 0) {
          (s as any).temp_ngpPrefHasPos = [...((s as any).temp_ngpPrefHasPos ?? []), (((s as any).ngpVars ?? 0)?.['trait'])];
        } else {
          if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] === 0) {
            (s as any).temp_ngpPrefHasInd = [...((s as any).temp_ngpPrefHasInd ?? []), (((s as any).ngpVars ?? 0)?.['trait'])];
          } else {
            (s as any).temp_ngpPrefHasNeg = [...((s as any).temp_ngpPrefHasNeg ?? []), (((s as any).ngpVars ?? 0)?.['trait'])];
          }
        }
      } else {
        if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] > 0) {
          (s as any).temp_ngpPrefNotPos = [...((s as any).temp_ngpPrefNotPos ?? []), (((s as any).ngpVars ?? 0)?.['trait'])];
        } else {
          if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] === 0) {
            (s as any).temp_ngpPrefNotInd = [...((s as any).temp_ngpPrefNotInd ?? []), (((s as any).ngpVars ?? 0)?.['trait'])];
          } else {
            (s as any).temp_ngpPrefNotNeg = [...((s as any).temp_ngpPrefNotNeg ?? []), (((s as any).ngpVars ?? 0)?.['trait'])];
          }
        }
      }
      ((s as any).ngpVars = (s as any).ngpVars ?? {})['i'] = ((s as any).ngpVars['i'] ?? 0) + (1);
      if (Object.keys((s as any).temp_ngpPrefHasPos ?? {}).length > 0) {
        ((s as any).npgVars = (s as any).npgVars ?? {})['i'] = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
        ((s as any).ngpVars = (s as any).ngpVars ?? {})['trait'] = qspUntranslated(s, "temp_ngpPrefHasPos[npgVars['i']]", { location: "npc_get_preference" });
        ((s as any).ngpPrefResult = (s as any).ngpPrefResult ?? {})['HasPos'] = (((s as any).ngpVars ?? 0)?.['trait']);
        (s as any).temp_ngpPrefHasPos = undefined;
      }
      if (Object.keys((s as any).temp_ngpPrefHasInd ?? {}).length > 0) {
        ((s as any).npgVars = (s as any).npgVars ?? {})['i'] = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
        ((s as any).ngpVars = (s as any).ngpVars ?? {})['trait'] = qspUntranslated(s, "temp_ngpPrefHasInd[npgVars['i']]", { location: "npc_get_preference" });
        ((s as any).ngpPrefResult = (s as any).ngpPrefResult ?? {})['HasInd'] = (((s as any).ngpVars ?? 0)?.['trait']);
        (s as any).temp_ngpPrefHasInd = undefined;
      }
      if (Object.keys((s as any).temp_ngpPrefHasNeg ?? {}).length > 0) {
        ((s as any).npgVars = (s as any).npgVars ?? {})['i'] = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
        ((s as any).ngpVars = (s as any).ngpVars ?? {})['trait'] = qspUntranslated(s, "temp_ngpPrefHasNeg[npgVars['i']]", { location: "npc_get_preference" });
        ((s as any).ngpPrefResult = (s as any).ngpPrefResult ?? {})['HasNeg'] = (((s as any).ngpVars ?? 0)?.['trait']);
        (s as any).temp_ngpPrefHasNeg = undefined;
      }
      if (Object.keys((s as any).temp_ngpPrefNotPos ?? {}).length > 0) {
        ((s as any).npgVars = (s as any).npgVars ?? {})['i'] = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
        ((s as any).ngpVars = (s as any).ngpVars ?? {})['trait'] = qspUntranslated(s, "temp_ngpPrefNotPos[npgVars['i']]", { location: "npc_get_preference" });
        ((s as any).ngpPrefResult = (s as any).ngpPrefResult ?? {})['NotPos'] = (((s as any).ngpVars ?? 0)?.['trait']);
        (s as any).temp_ngpPrefNotPos = undefined;
      }
      if (Object.keys((s as any).temp_ngpPrefNotInd ?? {}).length > 0) {
        ((s as any).npgVars = (s as any).npgVars ?? {})['i'] = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
        ((s as any).ngpVars = (s as any).ngpVars ?? {})['trait'] = qspUntranslated(s, "temp_ngpPrefNotInd[npgVars['i']]", { location: "npc_get_preference" });
        ((s as any).ngpPrefResult = (s as any).ngpPrefResult ?? {})['NotInd'] = (((s as any).ngpVars ?? 0)?.['trait']);
        (s as any).temp_ngpPrefNotInd = undefined;
      }
      if (Object.keys((s as any).temp_ngpPrefNotNeg ?? {}).length > 0) {
        ((s as any).npgVars = (s as any).npgVars ?? {})['i'] = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
        ((s as any).ngpVars = (s as any).ngpVars ?? {})['trait'] = qspUntranslated(s, "temp_ngpPrefNotNeg[npgVars['i']]", { location: "npc_get_preference" });
        ((s as any).ngpPrefResult = (s as any).ngpPrefResult ?? {})['NotNeg'] = (((s as any).ngpVars ?? 0)?.['trait']);
        (s as any).temp_ngpPrefNotNeg = undefined;
      }
      (s as any).ngpVars = undefined;
      (s as any).ngp_pref = undefined;
    } while (((s as any).ngpVars ?? 0)?.['i'] < ((s as any).ngpVars ?? 0)?.['max']);
  }
  (s as any).npc_ngp_pref_traits = undefined;
  (s as any).npc_ngp_pref_values = undefined;
  scene.build();
}

export const npc_get_preference: LocationDef = {
  name: 'npc_get_preference',
  region: 'other',
  enter: enter,
};
