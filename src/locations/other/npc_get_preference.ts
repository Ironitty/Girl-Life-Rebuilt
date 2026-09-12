import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_preferences ?? 0)[((s as any).locArgs?.[0] ?? 0)] !== '') {
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_clear') : -1) < 0) {
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_ass') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_ass_flat'
    // TODO-QSP: $ngp_pref[] = 'body_ass_average'
    // TODO-QSP: $ngp_pref[] = 'body_ass_big'
    // TODO-QSP: $ngp_pref[] = 'body_ass_heart'
    // TODO-QSP: $ngp_pref[] = 'body_ass_bubble'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_bmi') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_bmi_starving'
    // TODO-QSP: $ngp_pref[] = 'body_bmi_underweight'
    // TODO-QSP: $ngp_pref[] = 'body_bmi_normal'
    // TODO-QSP: $ngp_pref[] = 'body_bmi_overweight'
    // TODO-QSP: $ngp_pref[] = 'body_bmi_obese'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_eyes') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_eyes_brown'
    // TODO-QSP: $ngp_pref[] = 'body_eyes_grey'
    // TODO-QSP: $ngp_pref[] = 'body_eyes_green'
    // TODO-QSP: $ngp_pref[] = 'body_eyes_blue'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_lips') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_lips_thin'
    // TODO-QSP: $ngp_pref[] = 'body_lips_normal'
    // TODO-QSP: $ngp_pref[] = 'body_lips_plump'
    // TODO-QSP: $ngp_pref[] = 'body_lips_big'
    // TODO-QSP: $ngp_pref[] = 'body_lips_pillowy'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_skin') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_skin_bad'
    // TODO-QSP: $ngp_pref[] = 'body_skin_normal'
    // TODO-QSP: $ngp_pref[] = 'body_skin_good'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_sweat') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_sweat_none'
    // TODO-QSP: $ngp_pref[] = 'body_sweat_sweaty'
    // TODO-QSP: $ngp_pref[] = 'body_sweat_stinky'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('body_tits') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_tits_small'
    // TODO-QSP: $ngp_pref[] = 'body_tits_average'
    // TODO-QSP: $ngp_pref[] = 'body_tits_big'
    // TODO-QSP: $ngp_pref[] = 'body_tits_huge'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_cleavage') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_cleavage_none'
    // TODO-QSP: $ngp_pref[] = 'clothes_cleavage_small'
    // TODO-QSP: $ngp_pref[] = 'clothes_cleavage_medium'
    // TODO-QSP: $ngp_pref[] = 'clothes_cleavage_large'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_pants') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_pants_long'
    // TODO-QSP: $ngp_pref[] = 'clothes_pants_normal'
    // TODO-QSP: $ngp_pref[] = 'clothes_pants_short'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_quality') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_quality_low'
    // TODO-QSP: $ngp_pref[] = 'clothes_quality_medium'
    // TODO-QSP: $ngp_pref[] = 'clothes_quality_high'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_skirt') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_skirt_long'
    // TODO-QSP: $ngp_pref[] = 'clothes_skirt_normal'
    // TODO-QSP: $ngp_pref[] = 'clothes_skirt_short'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('clothes_thin') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_thin_low'
    // TODO-QSP: $ngp_pref[] = 'clothes_thin_medium'
    // TODO-QSP: $ngp_pref[] = 'clothes_thin_high'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('shoes_heels') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_flat'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_low'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_medium'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_high'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_ultra'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_fetish'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('cosmetics_makeup') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_running'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_none'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_light'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_moderate'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_heavy'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('cosmetics_piercings') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'cosmetics_piercings_none'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_piercings_few'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_piercings_multiple'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_piercings_lot'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('cosmetics_tattoos') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'cosmetics_tattoos_none'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_tattoos_few'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_tattoos_multiple'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_tattoos_lot'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hair_color') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'hair_color_black'
    // TODO-QSP: $ngp_pref[] = 'hair_color_brown'
    // TODO-QSP: $ngp_pref[] = 'hair_color_red'
    // TODO-QSP: $ngp_pref[] = 'hair_color_blonde'
    // TODO-QSP: $ngp_pref[] = 'hair_color_dyed'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hair_length') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'hair_length_veryshort'
    // TODO-QSP: $ngp_pref[] = 'hair_length_short'
    // TODO-QSP: $ngp_pref[] = 'hair_length_chin'
    // TODO-QSP: $ngp_pref[] = 'hair_length_shoulder'
    // TODO-QSP: $ngp_pref[] = 'hair_length_bra'
    // TODO-QSP: $ngp_pref[] = 'hair_length_long'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('hair_pube_style') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_shaven'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_stubble'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_patch'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_trimmed'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_bush'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_untrimmed'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('stats_intel') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'stats_intel_dumb'
    // TODO-QSP: $ngp_pref[] = 'stats_intel_normal'
    // TODO-QSP: $ngp_pref[] = 'stats_intel_smart'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('stats_strength') : -1) >= 0) {
    // TODO-QSP: $ngp_pref[] = 'stats_strength_weak'
    // TODO-QSP: $ngp_pref[] = 'stats_strength_normal'
    // TODO-QSP: $ngp_pref[] = 'stats_strength_athletic'
    // TODO-QSP: $ngp_pref[] = 'stats_strength_strong'
    // TODO-QSP: $ngp_pref[] = 'stats_strength_manly'
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('randomPosIndNeg') : -1) >= 0) {
    if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['max'] = 0;
    if (((s as any).ngpVars ?? 0)?.['max'] === 0) {
      return;
    }
    if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['i'] = 0;
    // TODO-QSP: :choose_pref_loop
    if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['trait'] = qspUntranslated(s, "ngp_pref[ngpVars['i']]", { location: "npc_get_preference" });
    if (qspFunc(s, 'pcs_has_attr', ((s as any).ngpVars ?? 0)?.['trait'])) {
      if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] > 0) {
        // TODO-QSP: $temp_ngpPrefHasPos[] = $ngpVars['trait']
      } else {
        if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] === 0) {
          // TODO-QSP: $temp_ngpPrefHasInd[] = $ngpVars['trait']
        } else {
          // TODO-QSP: $temp_ngpPrefHasNeg[] = $ngpVars['trait']
        }
      }
    } else {
      if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] > 0) {
        // TODO-QSP: $temp_ngpPrefNotPos[] = $ngpVars['trait']
      } else {
        if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] === 0) {
          // TODO-QSP: $temp_ngpPrefNotInd[] = $ngpVars['trait']
        } else {
          // TODO-QSP: $temp_ngpPrefNotNeg[] = $ngpVars['trait']
        }
      }
    }
    if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['i'] = ((s as any).ngpVars['i'] ?? 0) + (1);
    if (((s as any).ngpVars ?? 0)?.['i'] < ((s as any).ngpVars ?? 0)?.['max']) {
      // TODO-QSP: jump 'choose_pref_loop'
    }
    if (Object.keys((s as any).temp_ngpPrefHasPos ?? {}).length > 0) {
      if (!(s as any).npgVars) (s as any).npgVars = {}; (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('temp_ngpPrefHasPos') - 1);
      if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefHasPos[npgVars['i']]", { location: "npc_get_preference" });
      if (!(s as any).ngpPrefResult) (s as any).ngpPrefResult = {}; (s as any).ngpPrefResult['HasPos'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (Object.keys((s as any).temp_ngpPrefHasInd ?? {}).length > 0) {
      if (!(s as any).npgVars) (s as any).npgVars = {}; (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('temp_ngpPrefHasInd') - 1);
      if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefHasInd[npgVars['i']]", { location: "npc_get_preference" });
      if (!(s as any).ngpPrefResult) (s as any).ngpPrefResult = {}; (s as any).ngpPrefResult['HasInd'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (Object.keys((s as any).temp_ngpPrefHasNeg ?? {}).length > 0) {
      if (!(s as any).npgVars) (s as any).npgVars = {}; (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('temp_ngpPrefHasNeg') - 1);
      if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefHasNeg[npgVars['i']]", { location: "npc_get_preference" });
      if (!(s as any).ngpPrefResult) (s as any).ngpPrefResult = {}; (s as any).ngpPrefResult['HasNeg'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (Object.keys((s as any).temp_ngpPrefNotPos ?? {}).length > 0) {
      if (!(s as any).npgVars) (s as any).npgVars = {}; (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('temp_ngpPrefNotPos') - 1);
      if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefNotPos[npgVars['i']]", { location: "npc_get_preference" });
      if (!(s as any).ngpPrefResult) (s as any).ngpPrefResult = {}; (s as any).ngpPrefResult['NotPos'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (Object.keys((s as any).temp_ngpPrefNotInd ?? {}).length > 0) {
      if (!(s as any).npgVars) (s as any).npgVars = {}; (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('temp_ngpPrefNotInd') - 1);
      if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefNotInd[npgVars['i']]", { location: "npc_get_preference" });
      if (!(s as any).ngpPrefResult) (s as any).ngpPrefResult = {}; (s as any).ngpPrefResult['NotInd'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (Object.keys((s as any).temp_ngpPrefNotNeg ?? {}).length > 0) {
      if (!(s as any).npgVars) (s as any).npgVars = {}; (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('temp_ngpPrefNotNeg') - 1);
      if (!(s as any).ngpVars) (s as any).ngpVars = {}; (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefNotNeg[npgVars['i']]", { location: "npc_get_preference" });
      if (!(s as any).ngpPrefResult) (s as any).ngpPrefResult = {}; (s as any).ngpPrefResult['NotNeg'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
  }
  scene.build();
}

export const npc_get_preference: LocationDef = {
  name: 'npc_get_preference',
  region: 'other',
  enter: enter,
};
