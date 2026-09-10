import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((qspUntranslated(s, "\u00000\u0000", { location: "npccleanc" })).toUpperCase()) === 'C') {
    qspCall(s, 'array', 'remove_element', '$npc_index', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_dob', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_stren', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_agil', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_vital', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_intel', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_prcptn', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_react', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_chrsm', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sprt', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_magik', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sexskill', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_spermpot', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_spermvol', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_gender', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_height', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_weight', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_dick', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_girth', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_thdick', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_dick_class', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_dick_desc', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_notes', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_bust', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_height_desc', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_build_desc', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_haircol', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_eyecol', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_icon', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_pic', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_firstname', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_nickname', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_lastname', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_usedname', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_residence', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_finance', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_start_free_time', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_end_free_time', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_work_start', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_work_end', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_student', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_apt_type', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_day_off', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_car', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_style', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_outfit', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_apt_sparetype', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_apt_number', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_apt_bedroom', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_apt_kitchen', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_apt_livingroom', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_apt_bathroom', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_apt_hall', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_apt_spare', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_occupation', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_criminal', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_criminal_open', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_perstype', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_humor', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sexdrive', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_pervert', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_mj', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_addit', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_door_pref', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_rel_goal', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_fidelity', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_earlyriser', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_latesleeper', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_generous', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_selfish', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_gentle', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_rough', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_diligent', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_risktaker', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_messy', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_neat', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_pubes', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_argumentative', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_assertive', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_willpwr', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_arrogant', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_competitive', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_insecure', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_gymrat', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_abusive', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_caretaker', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_condom_conscious', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_no_condoms', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_latex_allergy', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_fav_pos', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sex_speed', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sex_volume', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_gentle_lover', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_dirty_lover', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sensual_lover', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_cum_pref', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_bukakke_fetish', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_dislikes_facials', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_preferences', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_fav_body_part', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sex_stamina', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sex_spanker', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_childfree', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_pussyeater', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_cuddler', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_cum_cannon', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_sex_filmer', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_two_pump', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_fav_date', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', '$npc_fav_genre', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_indiscreet', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_womanizer', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_apprnc', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_hotcat', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'hotcat_movement', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_drunk', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_horny', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_lover_days', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_daygenerated', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_eventday', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_meetday', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_meethour', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_dates', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_compliance', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_lover_keys', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_QW', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_rel', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_love', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_had_sex', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_perv', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_kissed_count', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_handstuff_count', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_oral_count', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_titstuff_count', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_vaginal_count', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_anal_count', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_herpes', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_syth', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_gon', ((s as any).tempcclean ?? 0));
    qspCall(s, 'array', 'remove_element', 'npc_thrush', ((s as any).tempcclean ?? 0));
    if (((s as any).arrpos ?? 0)('cemptyarray', ((s as any).tempcclean ?? 0)) < 0) {
      // TODO-QSP: $cemptyarray[] = $tempcclean
    }
  }
  scene.build();
}

export const npccleanc: LocationDef = {
  name: 'npccleanc',
  region: 'other',
  enter: enter,
};
