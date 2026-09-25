import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'npc', 'is_npcID', ((s as any).locArgs?.[0] ?? 0)) === 0) {
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(1))) !== 'C') {
    return;
  }
  if (((s as any).npc_perstype ?? 0)[String((s as any).locArgs?.[0] ?? '')] === '') {
    return;
  }
  (s as any).npctemp = ((s as any).locArgs?.[0] ?? 0);
  (s as any).npcgen_lastrun = 1;
  if ((String(((s as any).locArgs?.[1] ?? 0)).toLowerCase()) === '%'  ||  (String(((s as any).locArgs?.[1] ?? 0)).toLowerCase()) === 'mods'  ||  (String(((s as any).locArgs?.[1] ?? 0)).toLowerCase()) === 'm') {
    qspCall(s, 'npcmodadd', '');
    (s as any).npclastsaved = ((s as any).npclastmodadded ?? 0);
    (s as any).npclastsavedn = ((s as any).npclastmodaddedn ?? 0);
  } else {
    while (true) {
      (s as any).npclastsaved = 'B' + ((s as any).barraynumber ?? 0) + '';
      (s as any).npctemparrb = 'B' + ((s as any).barraynumber ?? 0)-1 + '';
      if (((s as any).npc_perstype ?? 0)?.[String((s as any).npctemparrb ?? 0)] === ''  &&  ((s as any).barraynumber ?? 0) > 0) {
        (s as any).barraynumber = ((s as any).barraynumber ?? 0) - (1);
        break;
      } else {
        if (((s as any).npc_perstype ?? 0)?.[String((s as any).npclastsaved ?? 0)] !== '') {
          (s as any).barraynumber = ((s as any).barraynumber ?? 0) + (1);
          break;
        }
      }
      (s as any).npclastsavedn = ((s as any).barraynumber ?? 0);
      (s as any).barraynumber = ((s as any).barraynumber ?? 0) + (1);
    }
  }
  ((s as any).npc_index = (s as any).npc_index ?? {})[String((s as any).npclastsaved ?? 0)] = ((s as any).npclastsaved ?? 0);
  ((s as any).npc_dob = (s as any).npc_dob ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_dob ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_age = (s as any).npc_age ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_age ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_stren = (s as any).npc_stren ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_stren ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_agil = (s as any).npc_agil ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_agil ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_vital = (s as any).npc_vital ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_vital ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_intel = (s as any).npc_intel ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_intel ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_prcptn = (s as any).npc_prcptn ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_prcptn ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_react = (s as any).npc_react ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_react ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_chrsm = (s as any).npc_chrsm ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_chrsm ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sprt = (s as any).npc_sprt ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sprt ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_magik = (s as any).npc_magik ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_magik ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sexskill ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_spermpot ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_spermvol = (s as any).npc_spermvol ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_spermvol ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_gender = (s as any).npc_gender ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_gender ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_height = (s as any).npc_height ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_height ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_weight = (s as any).npc_weight ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_weight ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_dick = (s as any).npc_dick ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_dick ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_girth = (s as any).npc_girth ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_girth ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_thdick = (s as any).npc_thdick ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_thdick ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_dick_class = (s as any).npc_dick_class ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_dick_class ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_dick_desc = (s as any).npc_dick_desc ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_dick_desc ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_notes = (s as any).npc_notes ?? {})[String((s as any).npclastsaved ?? 0)] = qspFunc(s, 'npc_notes', ((s as any).npctemp ?? 0));
  ((s as any).npc_bust = (s as any).npc_bust ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_bust ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_height_desc ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_build_desc ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_haircol ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_eyecol = (s as any).npc_eyecol ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_eyecol ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_icon = (s as any).npc_icon ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_icon ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_pic = (s as any).npc_pic ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_pic ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_firstname = (s as any).npc_firstname ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_firstname ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_nickname = (s as any).npc_nickname ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_nickname ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_lastname ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_usedname ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_residence = (s as any).npc_residence ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_residence ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_finance = (s as any).npc_finance ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_finance ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_start_free_time ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_end_free_time ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_work_start ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_work_end ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_student = (s as any).npc_student ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_student ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_day_off = (s as any).npc_day_off ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_day_off ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_car = (s as any).npc_car ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_car ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_style = (s as any).npc_style ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_style ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_style_label = (s as any).npc_style_label ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_style_label ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_outfit ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_type ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_type_label = (s as any).npc_apt_type_label ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_sparetype = (s as any).npc_apt_sparetype ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_sparetype ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_number = (s as any).npc_apt_number ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_number ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_bedroom = (s as any).npc_apt_bedroom ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_bedroom ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_kitchen = (s as any).npc_apt_kitchen ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_kitchen ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_livingroom = (s as any).npc_apt_livingroom ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_livingroom ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_bathroom = (s as any).npc_apt_bathroom ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_bathroom ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_hall = (s as any).npc_apt_hall ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_hall ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apt_spare = (s as any).npc_apt_spare ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apt_spare ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_occupation ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_criminal = (s as any).npc_criminal ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_criminal ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_criminal_open = (s as any).npc_criminal_open ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_criminal_open ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_perstype ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_humor = (s as any).npc_humor ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_humor ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sexdrive = (s as any).npc_sexdrive ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_pervert ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_mj = (s as any).npc_mj ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_mj ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_addit = (s as any).npc_addit ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_addit ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_door_pref = (s as any).npc_door_pref ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_door_pref ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_rel_goal = (s as any).npc_rel_goal ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_fidelity_label = (s as any).npc_fidelity_label ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_fidelity_label ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_fidelity = (s as any).npc_fidelity ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_fidelity ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_earlyriser = (s as any).npc_earlyriser ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_latesleeper = (s as any).npc_latesleeper ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_generous = (s as any).npc_generous ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_generous ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_selfish = (s as any).npc_selfish ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_selfish ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_gentle = (s as any).npc_gentle ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_gentle ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_rough ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_diligent = (s as any).npc_diligent ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_diligent ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_risktaker = (s as any).npc_risktaker ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_risktaker ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_messy = (s as any).npc_messy ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_messy ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_neat = (s as any).npc_neat ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_neat ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_pubes = (s as any).npc_pubes ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_pubes ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_argumentative = (s as any).npc_argumentative ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_argumentative ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_assertive = (s as any).npc_assertive ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_assertive ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_shy = (s as any).npc_shy ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_shy ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_pushy = (s as any).npc_pushy ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_pushy ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_snob = (s as any).npc_snob ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_snob ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_willpwr = (s as any).npc_willpwr ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_willpwr ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_arrogant = (s as any).npc_arrogant ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_arrogant ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_competitive = (s as any).npc_competitive ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_competitive ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_insecure = (s as any).npc_insecure ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_insecure ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_gymrat = (s as any).npc_gymrat ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_gymrat ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_abusive = (s as any).npc_abusive ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_abusive ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_caretaker = (s as any).npc_caretaker ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_caretaker ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_condom_conscious = (s as any).npc_condom_conscious ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_no_condoms = (s as any).npc_no_condoms ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_latex_allergy = (s as any).npc_latex_allergy ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_latex_allergy ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sex_speed = (s as any).npc_sex_speed ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sex_speed ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sex_volume = (s as any).npc_sex_volume ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sex_volume ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_gentle_lover = (s as any).npc_gentle_lover ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_dirty_lover = (s as any).npc_dirty_lover ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sensual_lover = (s as any).npc_sensual_lover ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_cum_pref = (s as any).npc_cum_pref ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_bukakke_fetish = (s as any).npc_bukakke_fetish ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_bukakke_fetish ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_dislikes_facials = (s as any).npc_dislikes_facials ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_dislikes_facials ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_preferences = (s as any).npc_preferences ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_preferences ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_fav_body_part = (s as any).npc_fav_body_part ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sex_stamina = (s as any).npc_sex_stamina ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sex_spanker = (s as any).npc_sex_spanker ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sex_spanker ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_childfree = (s as any).npc_childfree ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_childfree ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_pussyeater = (s as any).npc_pussyeater ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_cuddler = (s as any).npc_cuddler ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_cuddler ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_cum_cannon = (s as any).npc_cum_cannon ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_cum_cannon ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_sex_filmer = (s as any).npc_sex_filmer ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_sex_filmer ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_two_pump = (s as any).npc_two_pump ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_two_pump ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_fav_date ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_fav_genre ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_indiscreet = (s as any).npc_indiscreet ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_indiscreet ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_womanizer = (s as any).npc_womanizer ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_womanizer ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_hobbies ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_apprnc ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_hotcat ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_drunk = (s as any).npc_drunk ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_drunk ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_horny = (s as any).npc_horny ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_horny ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_lover_days = (s as any).npc_lover_days ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_lover_days ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_daygenerated = (s as any).npc_daygenerated ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_daygenerated ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_eventday = (s as any).npc_eventday ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_eventday ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_meetday = (s as any).npc_meetday ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_meetday ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_meethour = (s as any).npc_meethour ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_meethour ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_dates = (s as any).npc_dates ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_dates ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_compliance = (s as any).npc_compliance ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_compliance ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_lover_keys = (s as any).npc_lover_keys ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_lover_keys ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_QW = (s as any).npc_QW ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_QW ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_rel = (s as any).npc_rel ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_rel ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_love = (s as any).npc_love ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_love ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_had_sex ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_perv = (s as any).npc_perv ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_perv ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_kissed_count = (s as any).npc_kissed_count ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_kissed_count ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_handstuff_count = (s as any).npc_handstuff_count ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_handstuff_count ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_oral_count = (s as any).npc_oral_count ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_oral_count ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_titstuff_count = (s as any).npc_titstuff_count ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_titstuff_count ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_vaginal_count = (s as any).npc_vaginal_count ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_anal_count = (s as any).npc_anal_count ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_anal_count ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_herpes = (s as any).npc_herpes ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_herpes ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_syth = (s as any).npc_syth ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_syth ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_gon = (s as any).npc_gon ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_gon ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  ((s as any).npc_thrush = (s as any).npc_thrush ?? {})[String((s as any).npclastsaved ?? 0)] = (((s as any).npc_thrush ?? 0)?.[String((s as any).npctemp ?? 0)] ?? 0);
  while (true) {
    (s as any).npctemp2 = qspUntranslated(s, "arrpos('cumarrnam', npctemp)", { location: "npcpreservec" });
    if (((s as any).npctemp2 ?? 0) >= 0) {
      ((s as any).cumarrnam = (s as any).cumarrnam ?? {})[String((s as any).npctemp2 ?? 0)] = ((s as any).npclastsaved ?? 0);
      break;
    }
    while (true) {
      (s as any).npctemp2 = qspUntranslated(s, "arrpos('sparrnam', npctemp)", { location: "npcpreservec" });
      if (((s as any).npctemp2 ?? 0) >= 0) {
        ((s as any).sparrnam = (s as any).sparrnam ?? {})[String((s as any).npctemp2 ?? 0)] = ((s as any).npclastsaved ?? 0);
        break;
      }
      while (true) {
        (s as any).npctemp2 = qspUntranslated(s, "arrpos('wombName', npctemp)", { location: "npcpreservec" });
        if (((s as any).npctemp2 ?? 0) >= 0) {
          ((s as any).wombName = (s as any).wombName ?? {})[String((s as any).npctemp2 ?? 0)] = ((s as any).npclastsaved ?? 0);
          break;
        }
        while (true) {
          (s as any).npctemp2 = qspUntranslated(s, "arrpos('ChildFath', npctemp)", { location: "npcpreservec" });
          if (((s as any).npctemp2 ?? 0) >= 0) {
            ((s as any).ChildFath = (s as any).ChildFath ?? {})[String((s as any).npctemp2 ?? 0)] = ((s as any).npclastsaved ?? 0);
            break;
          }
          if (((s as any).pcs_firstpart ?? 0) === ((s as any).npctemp ?? 0)) {
            (s as any).pcs_firstpart = ((s as any).npclastsaved ?? 0);
          }
          if (((s as any).pcs_lastpart ?? 0) === ((s as any).npctemp ?? 0)) {
            (s as any).pcs_lastpart = ((s as any).npclastsaved ?? 0);
          }
          qspCall(s, 'npccleanc', '$npctemp');
          (s as any).npctemp2 = undefined;
          (s as any).npctemp2 = undefined;
          (s as any).npctemp = undefined;
        }
      }
    }
  }
  scene.build();
}

export const npcpreservec: LocationDef = {
  name: 'npcpreservec',
  region: 'other',
  enter: enter,
};
