import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'npc', 'is_npcID', ((s as any).locArgs?.[0] ?? 0)) === 0) {
    // TODO-QSP: exit
  }
  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(1))) !== 'C') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_perstype ?? 0)[((s as any).locArgs?.[0] ?? 0)] === '') {
    // TODO-QSP: exit
  }
  (s as any).npcgen_lastrun = 1;
  if (((((s as any).locArgs?.[1] ?? 0)).toLowerCase()) === '%'  ||  ((((s as any).locArgs?.[1] ?? 0)).toLowerCase()) === 'mods'  ||  ((((s as any).locArgs?.[1] ?? 0)).toLowerCase()) === 'm') {
    qspCall(s, 'npcmodadd', '');
    (s as any).npclastsavedn = ((s as any).npclastmodaddedn ?? 0);
  } else {
    // TODO-QSP: :npcsavebsanityloop
    if (((s as any).npc_perstype ?? 0)?.[String((s as any).npctemparrb ?? 0)] === ''  &&  ((s as any).barraynumber ?? 0) > 0) {
      (s as any).barraynumber = ((s as any).barraynumber ?? 0) - (1);
      // TODO-QSP: jump 'npcsavebsanityloop'
    } else {
      if (((s as any).npc_perstype ?? 0)?.[String((s as any).npclastsaved ?? 0)] !== '') {
        (s as any).barraynumber = ((s as any).barraynumber ?? 0) + (1);
        // TODO-QSP: jump 'npcsavebsanityloop'
      }
    }
    (s as any).npclastsavedn = ((s as any).barraynumber ?? 0);
    (s as any).barraynumber = ((s as any).barraynumber ?? 0) + (1);
  }
  // TODO-QSP: $npc_index[$npclastsaved]        = $npclastsaved
  (s as any).npc_dob[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_dob ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_age[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_age ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_stren[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_stren ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_agil[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_agil ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_vital[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_vital ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_intel[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_intel ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_prcptn[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_prcptn ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_react[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_react ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_chrsm[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_chrsm ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_sprt[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sprt ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_magik[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_magik ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_sexskill[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sexskill ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_spermpot[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_spermpot ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_spermvol[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_spermvol ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_gender[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_gender ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_height[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_height ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_weight[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_weight ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_dick[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_dick ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_girth[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_girth ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_thdick[$npclastsaved]        = $npc_thdick[$npctemp]
  // TODO-QSP: $npc_dick_class[$npclastsaved]      = $npc_dick_class[$npctemp]
  // TODO-QSP: $npc_dick_desc[$npclastsaved]      = $npc_dick_desc[$npctemp]
  // TODO-QSP: $npc_notes[$npclastsaved]        = $func('npc_notes', $npctemp)
  (s as any).npc_bust[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_bust ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_height_desc[$npclastsaved]      = $npc_height_desc[$npctemp]
  // TODO-QSP: $npc_build_desc[$npclastsaved]      = $npc_build_desc[$npctemp]
  (s as any).npc_haircol[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_haircol ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_eyecol[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_eyecol ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_icon[$npclastsaved]        = $npc_icon[$npctemp]
  // TODO-QSP: $npc_pic[$npclastsaved]          = $npc_pic[$npctemp]
  // TODO-QSP: $npc_firstname[$npclastsaved]      = $npc_firstname[$npctemp]
  // TODO-QSP: $npc_nickname[$npclastsaved]      = $npc_nickname[$npctemp]
  // TODO-QSP: $npc_lastname[$npclastsaved]      = $npc_lastname[$npctemp]
  // TODO-QSP: $npc_usedname[$npclastsaved]      = $npc_usedname[$npctemp]
  // TODO-QSP: $npc_residence[$npclastsaved]      = $npc_residence[$npctemp]
  (s as any).npc_finance[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_finance ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_start_free_time[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_start_free_time ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_end_free_time[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_end_free_time ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_work_start[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_work_start ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_work_end[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_work_end ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_student[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_student ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_day_off[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_day_off ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_car[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_car ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_style[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_style ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_style_label[$npclastsaved]      = $npc_style_label[$npctemp]
  // TODO-QSP: $npc_outfit[$npclastsaved]        = $npc_outfit[$npctemp]
  (s as any).npc_apt_type[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_apt_type ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_apt_type_label[$npclastsaved]    = $npc_apt_type_label[$npctemp]
  // TODO-QSP: $npc_apt_sparetype[$npclastsaved]    = $npc_apt_sparetype[$npctemp]
  (s as any).npc_apt_number[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_apt_number ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_apt_bedroom[$npclastsaved]      = $npc_apt_bedroom[$npctemp]
  // TODO-QSP: $npc_apt_kitchen[$npclastsaved]      = $npc_apt_kitchen[$npctemp]
  // TODO-QSP: $npc_apt_livingroom[$npclastsaved]    = $npc_apt_livingroom[$npctemp]
  // TODO-QSP: $npc_apt_bathroom[$npclastsaved]    = $npc_apt_bathroom[$npctemp]
  // TODO-QSP: $npc_apt_hall[$npclastsaved]      = $npc_apt_hall[$npctemp]
  // TODO-QSP: $npc_apt_spare[$npclastsaved]      = $npc_apt_spare[$npctemp]
  // TODO-QSP: $npc_occupation[$npclastsaved]      = $npc_occupation[$npctemp]
  (s as any).npc_criminal[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_criminal ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_criminal_open[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_criminal_open ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_perstype[$npclastsaved]      = $npc_perstype[$npctemp]
  // TODO-QSP: $npc_humor[$npclastsaved]        = $npc_humor[$npctemp]
  (s as any).npc_sexdrive[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_pervert[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_pervert ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_mj[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_mj ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_addit[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_addit ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_door_pref[$npclastsaved]      = $npc_door_pref[$npctemp]
  // TODO-QSP: $npc_rel_goal[$npclastsaved]      = $npc_rel_goal[$npctemp]
  // TODO-QSP: $npc_fidelity_label[$npclastsaved]    = $npc_fidelity_label[$npctemp]
  (s as any).npc_fidelity[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_fidelity ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_earlyriser[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_earlyriser ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_latesleeper[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_latesleeper ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_generous[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_generous ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_selfish[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_selfish ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_gentle[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_gentle ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_rough[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_rough ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_diligent[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_diligent ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_risktaker[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_risktaker ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_messy[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_messy ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_neat[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_neat ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_pubes[$npclastsaved]        = $npc_pubes[$npctemp]
  (s as any).npc_argumentative[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_argumentative ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_assertive[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_assertive ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_shy[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_shy ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_pushy[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_pushy ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_snob[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_snob ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_willpwr[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_willpwr ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_arrogant[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_arrogant ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_competitive[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_competitive ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_insecure[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_insecure ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_gymrat[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_gymrat ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_abusive[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_abusive ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_caretaker[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_caretaker ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_condom_conscious[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_no_condoms[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_latex_allergy[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_latex_allergy ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_fav_pos[$npclastsaved]        = $npc_fav_pos[$npctemp]
  (s as any).npc_sex_speed[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sex_speed ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_sex_volume[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sex_volume ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_gentle_lover[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_dirty_lover[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_sensual_lover[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_cum_pref[$npclastsaved]      = $npc_cum_pref[$npctemp]
  (s as any).npc_bukakke_fetish[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_bukakke_fetish ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_dislikes_facials[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_dislikes_facials ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_preferences[$npclastsaved]      = $npc_preferences[$npctemp]
  // TODO-QSP: $npc_fav_body_part[$npclastsaved]    = $npc_fav_body_part[$npctemp]
  (s as any).npc_sex_stamina[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_sex_spanker[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sex_spanker ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_childfree[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_childfree ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_pussyeater[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_cuddler[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_cuddler ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_cum_cannon[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_cum_cannon ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_sex_filmer[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_sex_filmer ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_two_pump[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_two_pump ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_fav_date[$npclastsaved]      = $npc_fav_date[$npctemp]
  // TODO-QSP: $npc_fav_genre[$npclastsaved]      = $npc_fav_genre[$npctemp]
  (s as any).npc_indiscreet[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_indiscreet ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_womanizer[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_womanizer ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: $npc_hobbies[$npclastsaved]        = $npc_hobbies[$npctemp]
  (s as any).npc_apprnc[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_apprnc ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_hotcat[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_hotcat ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_drunk[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_drunk ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_horny[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_horny ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_lover_days[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_lover_days ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_daygenerated[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_daygenerated ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_eventday[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_eventday ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_meetday[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_meetday ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_meethour[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_meethour ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_dates[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_dates ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_compliance[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_compliance ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_lover_keys[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_lover_keys ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_QW[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_QW ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_rel[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_rel ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_love[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_love ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_had_sex[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_had_sex ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_perv[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_perv ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_kissed_count[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_kissed_count ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_handstuff_count[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_handstuff_count ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_oral_count[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_oral_count ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_titstuff_count[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_titstuff_count ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_vaginal_count[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_anal_count[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_anal_count ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_herpes[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_herpes ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_syth[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_syth ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_gon[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_gon ?? 0)?.[String((s as any).npctemp ?? 0)];
  (s as any).npc_thrush[String((s as any).npclastsaved ?? 0)] = ((s as any).npc_thrush ?? 0)?.[String((s as any).npctemp ?? 0)];
  // TODO-QSP: :npctempmloop1
  (s as any).npctemp2 = qspUntranslated(s, "arrpos('cumarrnam', npctemp)", { location: "npcpreservec" });
  if (((s as any).npctemp2 ?? 0) >= 0) {
    // TODO-QSP: $cumarrnam[npctemp2] = $npclastsaved
    // TODO-QSP: jump 'npctempmloop1'
  }
  // TODO-QSP: :npctempmloop2
  (s as any).npctemp2 = qspUntranslated(s, "arrpos('sparrnam', npctemp)", { location: "npcpreservec" });
  if (((s as any).npctemp2 ?? 0) >= 0) {
    // TODO-QSP: $sparrnam[npctemp2] = $npclastsaved
    // TODO-QSP: jump 'npctempmloop2'
  }
  // TODO-QSP: :npctempmloop3
  (s as any).npctemp2 = qspUntranslated(s, "arrpos('wombName', npctemp)", { location: "npcpreservec" });
  if (((s as any).npctemp2 ?? 0) >= 0) {
    // TODO-QSP: $wombName[npctemp2] = $npclastsaved
    // TODO-QSP: jump 'npctempmloop3'
  }
  // TODO-QSP: :npctempmloop4
  (s as any).npctemp2 = qspUntranslated(s, "arrpos('ChildFath', npctemp)", { location: "npcpreservec" });
  if (((s as any).npctemp2 ?? 0) >= 0) {
    // TODO-QSP: $ChildFath[npctemp2] = $npclastsaved
    // TODO-QSP: jump 'npctempmloop4'
  }
  if (((s as any).pcs_firstpart ?? 0) === ((s as any).npctemp ?? 0)) {
  }
  if (((s as any).pcs_lastpart ?? 0) === ((s as any).npctemp ?? 0)) {
  }
  qspCall(s, 'npccleanc', '', ((s as any).npctemp ?? 0));
  scene.build();
}

export const npcpreservec: LocationDef = {
  name: 'npcpreservec',
  region: 'other',
  enter: enter,
};
