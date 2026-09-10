import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_preferences ?? 0)[((s as any).locArgs?.[0] ?? 0)] !== '') {
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'no_clear') < 0) {
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'body_ass') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_ass_flat'
    // TODO-QSP: $ngp_pref[] = 'body_ass_average'
    // TODO-QSP: $ngp_pref[] = 'body_ass_big'
    // TODO-QSP: $ngp_pref[] = 'body_ass_heart'
    // TODO-QSP: $ngp_pref[] = 'body_ass_bubble'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'body_bmi') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_bmi_starving'
    // TODO-QSP: $ngp_pref[] = 'body_bmi_underweight'
    // TODO-QSP: $ngp_pref[] = 'body_bmi_normal'
    // TODO-QSP: $ngp_pref[] = 'body_bmi_overweight'
    // TODO-QSP: $ngp_pref[] = 'body_bmi_obese'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'body_eyes') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_eyes_brown'
    // TODO-QSP: $ngp_pref[] = 'body_eyes_grey'
    // TODO-QSP: $ngp_pref[] = 'body_eyes_green'
    // TODO-QSP: $ngp_pref[] = 'body_eyes_blue'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'body_lips') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_lips_thin'
    // TODO-QSP: $ngp_pref[] = 'body_lips_normal'
    // TODO-QSP: $ngp_pref[] = 'body_lips_plump'
    // TODO-QSP: $ngp_pref[] = 'body_lips_big'
    // TODO-QSP: $ngp_pref[] = 'body_lips_pillowy'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'body_skin') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_skin_bad'
    // TODO-QSP: $ngp_pref[] = 'body_skin_normal'
    // TODO-QSP: $ngp_pref[] = 'body_skin_good'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'body_sweat') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_sweat_none'
    // TODO-QSP: $ngp_pref[] = 'body_sweat_sweaty'
    // TODO-QSP: $ngp_pref[] = 'body_sweat_stinky'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'body_tits') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'body_tits_small'
    // TODO-QSP: $ngp_pref[] = 'body_tits_average'
    // TODO-QSP: $ngp_pref[] = 'body_tits_big'
    // TODO-QSP: $ngp_pref[] = 'body_tits_huge'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'clothes_cleavage') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_cleavage_none'
    // TODO-QSP: $ngp_pref[] = 'clothes_cleavage_small'
    // TODO-QSP: $ngp_pref[] = 'clothes_cleavage_medium'
    // TODO-QSP: $ngp_pref[] = 'clothes_cleavage_large'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'clothes_pants') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_pants_long'
    // TODO-QSP: $ngp_pref[] = 'clothes_pants_normal'
    // TODO-QSP: $ngp_pref[] = 'clothes_pants_short'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'clothes_quality') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_quality_low'
    // TODO-QSP: $ngp_pref[] = 'clothes_quality_medium'
    // TODO-QSP: $ngp_pref[] = 'clothes_quality_high'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'clothes_skirt') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_skirt_long'
    // TODO-QSP: $ngp_pref[] = 'clothes_skirt_normal'
    // TODO-QSP: $ngp_pref[] = 'clothes_skirt_short'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'clothes_thin') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'clothes_thin_low'
    // TODO-QSP: $ngp_pref[] = 'clothes_thin_medium'
    // TODO-QSP: $ngp_pref[] = 'clothes_thin_high'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'shoes_heels') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_flat'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_low'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_medium'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_high'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_ultra'
    // TODO-QSP: $ngp_pref[] = 'shoes_heels_fetish'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'cosmetics_makeup') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_running'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_none'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_light'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_moderate'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_makeup_heavy'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'cosmetics_piercings') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'cosmetics_piercings_none'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_piercings_few'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_piercings_multiple'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_piercings_lot'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'cosmetics_tattoos') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'cosmetics_tattoos_none'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_tattoos_few'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_tattoos_multiple'
    // TODO-QSP: $ngp_pref[] = 'cosmetics_tattoos_lot'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'hair_color') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'hair_color_black'
    // TODO-QSP: $ngp_pref[] = 'hair_color_brown'
    // TODO-QSP: $ngp_pref[] = 'hair_color_red'
    // TODO-QSP: $ngp_pref[] = 'hair_color_blonde'
    // TODO-QSP: $ngp_pref[] = 'hair_color_dyed'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'hair_length') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'hair_length_veryshort'
    // TODO-QSP: $ngp_pref[] = 'hair_length_short'
    // TODO-QSP: $ngp_pref[] = 'hair_length_chin'
    // TODO-QSP: $ngp_pref[] = 'hair_length_shoulder'
    // TODO-QSP: $ngp_pref[] = 'hair_length_bra'
    // TODO-QSP: $ngp_pref[] = 'hair_length_long'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'hair_pube_style') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_shaven'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_stubble'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_patch'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_trimmed'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_bush'
    // TODO-QSP: $ngp_pref[] = 'hair_pubes_untrimmed'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'stats_intel') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'stats_intel_dumb'
    // TODO-QSP: $ngp_pref[] = 'stats_intel_normal'
    // TODO-QSP: $ngp_pref[] = 'stats_intel_smart'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'stats_strength') >= 0) {
    // TODO-QSP: $ngp_pref[] = 'stats_strength_weak'
    // TODO-QSP: $ngp_pref[] = 'stats_strength_normal'
    // TODO-QSP: $ngp_pref[] = 'stats_strength_athletic'
    // TODO-QSP: $ngp_pref[] = 'stats_strength_strong'
    // TODO-QSP: $ngp_pref[] = 'stats_strength_manly'
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'randomPosIndNeg') >= 0) {
    (s as any).ngpVars['max'] = 0;
    if (((s as any).ngpVars ?? 0)?.['max'] === 0) {
      return;
    }
    (s as any).ngpVars['i'] = 0;
    // TODO-QSP: :choose_pref_loop
    (s as any).ngpVars['trait'] = qspUntranslated(s, "ngp_pref[ngpVars['i']]", { location: "npc_get_preference" });
    if (qspFunc(s, 'pcs_has_attr', qspUntranslated(s, "\u00000\u0000", { location: "npc_get_preference" }))) {
      if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] > 0) {
        // TODO-QSP: $temp_ngpPrefHasPos[] = $ngpVars['trait']
      } else {
        // TODO-QSP: $temp_ngpPrefHasInd[] = $ngpVars['trait']
        // TODO-QSP: $temp_ngpPrefHasNeg[] = $ngpVars['trait']
      }
    } else {
      if (((s as any).npc_ngp_pref_values ?? 0)[((s as any).ngpVars ?? 0)?.['trait']] > 0) {
        // TODO-QSP: $temp_ngpPrefNotPos[] = $ngpVars['trait']
      } else {
        // TODO-QSP: $temp_ngpPrefNotInd[] = $ngpVars['trait']
        // TODO-QSP: $temp_ngpPrefNotNeg[] = $ngpVars['trait']
      }
    }
    (s as any).ngpVars['i'] = ((s as any).ngpVars['i'] ?? 0) + (1);
    if (((s as any).ngpVars ?? 0)?.['i'] < ((s as any).ngpVars ?? 0)?.['max']) {
      // TODO-QSP: jump 'choose_pref_loop'
    }
    if (((s as any).arrsize ?? 0)('temp_ngpPrefHasPos') > 0) {
      (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).temp_ngpPrefHasPos ?? 0)') - 1);
      (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefHasPos[npgVars['i']]", { location: "npc_get_preference" });
      (s as any).ngpPrefResult['HasPos'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (((s as any).arrsize ?? 0)('temp_ngpPrefHasInd') > 0) {
      (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).temp_ngpPrefHasInd ?? 0)') - 1);
      (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefHasInd[npgVars['i']]", { location: "npc_get_preference" });
      (s as any).ngpPrefResult['HasInd'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (((s as any).arrsize ?? 0)('temp_ngpPrefHasNeg') > 0) {
      (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).temp_ngpPrefHasNeg ?? 0)') - 1);
      (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefHasNeg[npgVars['i']]", { location: "npc_get_preference" });
      (s as any).ngpPrefResult['HasNeg'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (((s as any).arrsize ?? 0)('temp_ngpPrefNotPos') > 0) {
      (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).temp_ngpPrefNotPos ?? 0)') - 1);
      (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefNotPos[npgVars['i']]", { location: "npc_get_preference" });
      (s as any).ngpPrefResult['NotPos'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (((s as any).arrsize ?? 0)('temp_ngpPrefNotInd') > 0) {
      (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).temp_ngpPrefNotInd ?? 0)') - 1);
      (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefNotInd[npgVars['i']]", { location: "npc_get_preference" });
      (s as any).ngpPrefResult['NotInd'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
    if (((s as any).arrsize ?? 0)('temp_ngpPrefNotNeg') > 0) {
      (s as any).npgVars['i'] = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).temp_ngpPrefNotNeg ?? 0)') - 1);
      (s as any).ngpVars['trait'] = qspUntranslated(s, "temp_ngpPrefNotNeg[npgVars['i']]", { location: "npc_get_preference" });
      (s as any).ngpPrefResult['NotNeg'] = ((s as any).ngpVars ?? 0)?.['trait'];
    }
  }
  scene.build();
}

export const npc_get_preference: LocationDef = {
  name: 'npc_get_preference',
  region: 'other',
  enter: enter,
};
