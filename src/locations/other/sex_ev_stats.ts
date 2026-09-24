import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNpcUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_firstname ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0);
  }
  qspCall(s, 'boy_updater', 'fav_body_part');
  qspCall(s, 'boy_updater', 'dick_update');
  qspCall(s, 'boy_updater', 'condom_update');
  qspCall(s, 'boy_updater', 'stamina_update');
  qspCall(s, 'boy_updater', 'humor_update');
  qspCall(s, 'boy_updater', 'schedule_update');
  qspCall(s, 'boy_updater', 'trait_updates');
  qspCall(s, 'boy_updater', 'name_updates');
  // TODO-QSP: end
  scene.build();
}

function enterStartingStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'transfer_backup', 0, 'sex_ev');
  qspCall(s, 'outfit', 'safe_backup', 'sex_ev');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['starting_makeup'] = ((s as any).pcs_makeup ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_vagina'] = (((s as any).cum_loc ?? 0)?.['vagina']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_labia'] = (((s as any).cum_loc ?? 0)?.['labia']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_panty_front'] = (((s as any).cum_loc ?? 0)?.['panty_front']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_anus'] = (((s as any).cum_loc ?? 0)?.['anus']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_butt'] = (((s as any).cum_loc ?? 0)?.['butt']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_panty_back'] = (((s as any).cum_loc ?? 0)?.['panty_back']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_clothes_groin'] = (((s as any).cum_loc ?? 0)?.['clothes_groin']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_clothes'] = (((s as any).cum_loc ?? 0)?.['clothes']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_back'] = (((s as any).cum_loc ?? 0)?.['back']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_legs '] = (((s as any).cum_loc ?? 0)?.['legs ']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_arms'] = (((s as any).cum_loc ?? 0)?.['arms']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_face'] = (((s as any).cum_loc ?? 0)?.['face']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_mouth'] = (((s as any).cum_loc ?? 0)?.['mouth']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_hands'] = (((s as any).cum_loc ?? 0)?.['hands']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_stomach'] = (((s as any).cum_loc ?? 0)?.['stomach']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_tits'] = (((s as any).cum_loc ?? 0)?.['tits']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_hair'] = (((s as any).cum_loc ?? 0)?.['hair']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['starting_sweat'] = ((s as any).pcs_sweat ?? 0);
  if ((!((s as any).orgasm ?? 0))) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['never_orgasmed'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_limit'] = ((s as any).orgasm ?? 0) + 6;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_condom_count'] = (((s as any).mc_inventory ?? 0)?.['normal_condoms']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_time'] = ((s as any).totminut ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_hour'] = ((s as any).hour ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_stamina'] = (((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0);
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['magik'] = ((s as any).pcs_magik ?? 0);
  }
  if (((s as any).tabletkiday ?? 0) === ((s as any).daystart ?? 0)) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['bc_take'] = 1;
  }
  if (((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    // TODO-QSP: $npc_lovername[$npcID] = 'babe'
    // TODO-QSP: $npc_lovername2[$npcID] = 'baby'
  }
  if (((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
  }
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    if (((s as any).tabletkishot ?? 0) > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['bc_type'] = 'shot';
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['bc_type'] = ' pill';
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexEndStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_over'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum_time'] = ((s as any).totminut ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['finish_time'] = ((s as any).totminut ?? 0);
  // TODO-QSP: $npc_last_sex_enjoyment[$npcID] = $sex_ev['fuck_enjoyment']
  ((s as any).npc_last_orgasm_count = (s as any).npc_last_orgasm_count ?? {})[String((s as any).npcID ?? 0)] = (((s as any).sex_ev ?? 0)?.['orgasm_count']);
  if (String((s as any).locArgs?.[1] ?? '') === 'unhappy') {
    ((s as any).npc_last_sex_score = (s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 0;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'unsatisfied') {
      ((s as any).npc_last_sex_score = (s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 1 + (((s as any).sex_ev ?? {})?.['fav_npc_position'] ?? 0);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'okay') {
        ((s as any).npc_last_sex_score = (s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 2 + (((s as any).sex_ev ?? {})?.['fav_npc_position'] ?? 0);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'good') {
          ((s as any).npc_last_sex_score = (s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 3 + (((s as any).sex_ev ?? {})?.['fav_npc_position'] ?? 0);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'great') {
            ((s as any).npc_last_sex_score = (s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 4 + (((s as any).sex_ev ?? {})?.['fav_npc_position'] ?? 0);
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'fucked_dry') {
              ((s as any).npc_last_sex_score = (s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 5 + (((s as any).sex_ev ?? {})?.['fav_npc_position'] ?? 0);
            }
          }
        }
      }
    }
  }
  if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 0) {
    // TODO-QSP: $npc_last_sex_quality[$npcID] = 'unhappy'
  } else {
    if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 1) {
      // TODO-QSP: $npc_last_sex_quality[$npcID] = 'unsatisfied'
    } else {
      if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 2) {
        // TODO-QSP: $npc_last_sex_quality[$npcID] = 'okay'
      } else {
        if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 3) {
          // TODO-QSP: $npc_last_sex_quality[$npcID] = 'good'
        } else {
          if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 4  &&  String((s as any).locArgs?.[1] ?? '') !== 'fucked_dry') {
            // TODO-QSP: $npc_last_sex_quality[$npcID] = 'great'
          } else {
            // TODO-QSP: $npc_last_sex_quality[$npcID] = 'fucked_dry'
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStartingMood(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'reluctant') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['starting_mood'] = 'reluctant';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'consensual') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['starting_mood'] = 'consensual';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'excited') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['starting_mood'] = 'excited';
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['starting_mood'] = 'consensual';
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSaveStats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
    if (((s as any).sex_ev ?? 0)?.['bed_choice'] !== 'anya_bed') {
      ((s as any).stat = (s as any).stat ?? {})['bed_cum'] = ((s as any).totminut ?? 0);
      // TODO-QSP: $cum_sheets[] = $npcID
    } else {
      ((s as any).stat = (s as any).stat ?? {})['anya_bed_cum'] = ((s as any).daystart ?? 0);
    }
  }
  if ((Array.isArray((s as any).body_count) ? ((s as any).body_count as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    // TODO-QSP: $body_count[] = $npcID
  }
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] > 0) {
    ((s as any).npc_sleep_fuck = (s as any).npc_sleep_fuck ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_sleep_fuck[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  ((s as any).npc_bareback_times = (s as any).npc_bareback_times ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_bareback_times[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['no_condom']));
  ((s as any).npc_condom_times = (s as any).npc_condom_times ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_condom_times[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['condom']));
  ((s as any).npc_kuni_times = (s as any).npc_kuni_times ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_kuni_times[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['kuni']));
  ((s as any).npc_cum_count = (s as any).npc_cum_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_cum_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['cum_count']));
  ((s as any).npc_orgasm_count = (s as any).npc_orgasm_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_orgasm_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['orgasm_count']));
  ((s as any).npc_fake_orgasm_count = (s as any).npc_fake_orgasm_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_fake_orgasm_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['fake_orgasm_count']));
  ((s as any).npc_creampie_count = (s as any).npc_creampie_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_creampie_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['creampie_count']));
  ((s as any).npc_accidental_creampie_count = (s as any).npc_accidental_creampie_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_accidental_creampie_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['accidental_creampie_count']));
  ((s as any).npc_cum_together_count = (s as any).npc_cum_together_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_cum_together_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['creampie_orgasm']));
  ((s as any).stat = (s as any).stat ?? {})['simultaneous_orgasm_count'] = ((s as any).stat['simultaneous_orgasm_count'] ?? 0) + ((((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count']));
  ((s as any).npc_facial_count = (s as any).npc_facial_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_facial_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['facial_count']));
  ((s as any).npc_cum_tits_count = (s as any).npc_cum_tits_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_cum_tits_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['cum_tits']));
  ((s as any).npc_pullout_count = (s as any).npc_pullout_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_pullout_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['pullout_count']));
  ((s as any).npc_mouth_cum_count = (s as any).npc_mouth_cum_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_mouth_cum_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['mouth_cum_count']));
  ((s as any).npc_cum_hand_count = (s as any).npc_cum_hand_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_cum_hand_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['cum_hand']));
  ((s as any).npc_swallow_count = (s as any).npc_swallow_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_swallow_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['swallow_count']));
  ((s as any).npc_spit_count = (s as any).npc_spit_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_spit_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['spit_count']));
  ((s as any).npc_shower_sex_count = (s as any).npc_shower_sex_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_shower_sex_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['shower_sex']));
  ((s as any).npc_mouth_cum_count = (s as any).npc_mouth_cum_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_mouth_cum_count[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['mouth_cum_count']));
  ((s as any).npc_virgin_deny = (s as any).npc_virgin_deny ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_virgin_deny[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['virgin_deny']));
  ((s as any).npc_virgin_rapist = (s as any).npc_virgin_rapist ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_virgin_rapist[String((s as any).npcID ?? 0)] ?? 0) + ((((s as any).sex_ev ?? 0)?.['virgin_rape']));
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 14  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['last_absence'] !== ((s as any).daystart ?? 0)) {
    ((s as any).npc_school_absences = (s as any).npc_school_absences ?? {})[String((s as any).npcID ?? 0)] = (((s as any).gschoolVars ?? 0)?.['absence_count']);
  }
  if (((s as any).sex_ev ?? 0)?.['pullout_game'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
    ((s as any).npc_no_creampie_mistakes = (s as any).npc_no_creampie_mistakes ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_no_creampie_mistakes[String((s as any).npcID ?? 0)] ?? 0) + (1);
    ((s as any).npc_no_creampie_mistakes_last_time = (s as any).npc_no_creampie_mistakes_last_time ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).npc_pullout_failure_last_time = (s as any).npc_pullout_failure_last_time ?? {})[String((s as any).npcID ?? 0)] = 0;
  } else {
    if (((s as any).sex_ev ?? 0)?.['pullout_game'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['broken_condom'] === 0) {
      ((s as any).npc_pullout_failure = (s as any).npc_pullout_failure ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_pullout_failure[String((s as any).npcID ?? 0)] ?? 0) + (1);
      ((s as any).npc_pullout_failure_last_time = (s as any).npc_pullout_failure_last_time ?? {})[String((s as any).npcID ?? 0)] = 1;
      ((s as any).npc_no_creampie_mistakes_last_time = (s as any).npc_no_creampie_mistakes_last_time ?? {})[String((s as any).npcID ?? 0)] = 0;
    }
  }
  if (((s as any).sex_ev ?? 0)?.['prostitution_freebie'] === 1) {
    ((s as any).stat = (s as any).stat ?? {})['prostitution_freebies'] = ((s as any).stat['prostitution_freebies'] ?? 0) + (1);
  } else {
    if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] !== ''  &&  ((s as any).npc_rel_type ?? 0) !== 'sugar_daddy') {
      ((s as any).npc_prost_count = (s as any).npc_prost_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_prost_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['phone_film'] === 2  ||  (((s as any).sex_ev ?? 0)?.['phone_film'] === 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
    ((s as any).npc_sex_video_count = (s as any).npc_sex_video_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_sex_video_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthControlKnow(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_know_bc_not_effective = (s as any).npc_know_bc_not_effective ?? {})[String((s as any).npcID ?? 0)] = 0;
  ((s as any).npc_know_not_bc = (s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
  ((s as any).npc_know_bc = (s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bc_tell'] = 1;
  if (((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).npc_pay_for_ma_pill = (s as any).npc_pay_for_ma_pill ?? {})[String((s as any).npcID ?? 0)] = (-1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoBirthControlKnow(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_know_not_bc = (s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 1;
  ((s as any).npc_know_bc = (s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
  ((s as any).npc_know_bc_not_effective = (s as any).npc_know_bc_not_effective ?? {})[String((s as any).npcID ?? 0)] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bc_tell'] = 1;
  if (String((s as any).locArgs?.[2] ?? '') === 'catholic') {
    // TODO-QSP: npc_know_catholic[$npcID]
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarebackRiskActive(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_bareback_risk = (s as any).npc_bareback_risk ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterBarebackRiskDeactive(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_bareback_risk = (s as any).npc_bareback_risk ?? {})[String((s as any).npcID ?? 0)] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterProstitutionInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_flag'] = 'prostitution';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterProstitutionPayCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterProstitutionPayCalc(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_price'] = ((s as any).sex_ev['prostitution_price'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_calc'] = (((s as any).npc_sugar_daddy_price ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + (((s as any).sex_ev ?? {})?.['prostitution_bonus'] ?? 0) + (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0);
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'p_customer') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_calc'] = (((s as any).npc_prostitution_price ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + (((s as any).sex_ev ?? {})?.['prostitution_bonus'] ?? 0) + (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0);
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_calc'] = (((s as any).sex_ev ?? {})?.['prostitution_price'] ?? 0) + (((s as any).sex_ev ?? {})?.['prostitution_bonus'] ?? 0);
    }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_owed'] = (((s as any).sex_ev ?? {})?.['prostitution_calc'] ?? 0) - (((s as any).sex_ev ?? {})?.['prostitution_paid'] ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterProstitutionPayCode(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_owed'] = ((s as any).sex_ev['prostitution_owed'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterProstitutionPayCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy'  &&  ((s as any).sex_ev ?? 0)?.['sugar_daddy_paid'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_paid'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_paid'] = ((s as any).sex_ev['prostitution_paid'] ?? 0) + ((((s as any).sex_ev ?? 0)?.['prostitution_owed']));
    qspCall(s, 'money', 'earn', (((s as any).sex_ev ?? 0)?.['prostitution_owed']), 'cash');
  } else {
    if (((s as any).sex_ev ?? 0)?.['prostitution_paid'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_paid'] = ((s as any).sex_ev['prostitution_paid'] ?? 0) + ((((s as any).sex_ev ?? 0)?.['prostitution_owed']));
      qspCall(s, 'money', 'earn', (((s as any).sex_ev ?? 0)?.['prostitution_owed']), 'cash');
    }
  }
  if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    ((s as any).npc_prostitution_tab = (s as any).npc_prostitution_tab ?? {})[String((s as any).npcID ?? 0)] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterSingleKnow(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_know_have_boyfriend = (s as any).npc_know_have_boyfriend ?? {})[String((s as any).npcID ?? 0)] = 0;
  ((s as any).npc_know_have_girlfriend = (s as any).npc_know_have_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterDatingBoyKnow(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_know_have_boyfriend = (s as any).npc_know_have_boyfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterDatingGirlKnow(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_know_have_girlfriend = (s as any).npc_know_have_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterNpcIsSingle(s: GameState, scene: SceneBuilder): void {
  ((s as any).know_npc_girlfriend = (s as any).know_npc_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 0;
  ((s as any).know_npc_single = (s as any).know_npc_single ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterNpcIsDating(s: GameState, scene: SceneBuilder): void {
  ((s as any).know_npc_girlfriend = (s as any).know_npc_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
  ((s as any).know_npc_single = (s as any).know_npc_single ?? {})[String((s as any).npcID ?? 0)] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterNpcIsMarried(s: GameState, scene: SceneBuilder): void {
  ((s as any).know_npc_wife = (s as any).know_npc_wife ?? {})[String((s as any).npcID ?? 0)] = 1;
  ((s as any).know_npc_single = (s as any).know_npc_single ?? {})[String((s as any).npcID ?? 0)] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterSexAllNight(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterPregnancyRiskFunc(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterPcCondomStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['using_pc_condoms'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_condoms_used'] = ((s as any).sex_ev['pc_condoms_used'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_check'] = 1;
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = ((s as any).mc_inventory['normal_condoms'] ?? 0) - (1);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  (!((s as any).preziktype ?? 0))) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
    }
  }
  qspCall(s, 'npcStat', '$npcID', 0, 'normal');
  if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_insist_condom'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcCondomStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['condoms_used'] = ((s as any).sex_ev['condoms_used'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_check'] = 1;
  qspCall(s, 'npcStat', '$npcID', 0, (((s as any).npc_condom_type ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0));
  if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_insist_condom'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcUseLubeVag(s: GameState, scene: SceneBuilder): void {
  (s as any).vaginal_slip = 8;
  (s as any).ar_vag_lube = 1;
  // TODO-QSP: end
  scene.build();
}

function enterRestrictFunc(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'creampie') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_restrict'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterPositionTracker(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).sex_ev ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_fuck'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_fuck'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = '' + ((s as any).locArgs?.[1] ?? 0) + '' + ((s as any).locArgs?.[2] ?? 0) + '';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = ((String((s as any).locArgs?.[3] ?? '') === 'kiss') ? (1) : (0));
  // TODO-QSP: end
  scene.build();
}

function enterFuckbuddyAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_fuckbuddy', ((s as any).npcID ?? 0));
  ((s as any).npc_no_booty_call = (s as any).npc_no_booty_call ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterSugarDaddyAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_sugar_daddy', ((s as any).npcID ?? 0));
  ((s as any).npc_sugar_daddy_price = (s as any).npc_sugar_daddy_price ?? {})[String((s as any).npcID ?? 0)] = (((s as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100;
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'sugar_daddy') {
    // TODO-QSP: $npc_rel_type[$npcID] = 'sugar_daddy'
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_count'] = ((s as any).sex_ev['sugar_daddy_count'] ?? 0) + (1);
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_paid'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_paid'] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterLoverAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterCumFacial(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'facial';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_count'] = ((s as any).sex_ev['facial_count'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_face'] = ((s as any).sex_ev['cum_face'] ?? 0) + (1);
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pc_jerk') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_facial_jerk'] = ((s as any).sex_ev['pc_facial_jerk'] ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumMouth(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'mouth';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'mouth';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_mouth'] = ((s as any).sex_ev['cum_mouth'] ?? 0) + (1);
  if (String((s as any).locArgs?.[1] ?? '') === 'swallow') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['swallow'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['swallow_count'] = ((s as any).sex_ev['swallow_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'spit') {
      qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['spit'] = 1;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['spit_count'] = ((s as any).sex_ev['spit_count'] ?? 0) + (1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumMouthFacial(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_face'] = ((s as any).sex_ev['cum_face'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_mouth'] = ((s as any).sex_ev['cum_mouth'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_count'] = ((s as any).sex_ev['facial_count'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_facial_jerk'] = ((s as any).sex_ev['pc_facial_jerk'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'face_mouth';
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'pc_jerk') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_facial_jerk'] = ((s as any).sex_ev['pc_facial_jerk'] ?? 0) + (1);
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'spit') {
      qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
      qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['spit_count'] = ((s as any).sex_ev['spit_count'] ?? 0) + (1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumSwallow(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['swallow'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['swallow_count'] = ((s as any).sex_ev['swallow_count'] ?? 0) + (1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_swallow'] = ((s as any).sex_ev['facial_swallow'] ?? 0) + (1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'disgust') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['hide_swallow_disgust'] = 1;
  }
  if (String((s as any).locArgs?.[2] ?? '') === 'gag') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['mouth_cum_gross'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['gag'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTits(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_tits'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'tits';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_count'] = ((s as any).sex_ev['cum_count'] ?? 0) + (1);
  qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
  if (String((s as any).locArgs?.[1] ?? '') === 'pc_jerk') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_titcum_jerk'] = 1;
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'tits') {
      qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['total_creampies'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_creampie'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_count'] = ((s as any).sex_ev['creampie_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['surprise_creampie_count'] = ((s as any).sex_ev['surprise_creampie_count'] ?? 0) + (1);
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_pussy'] = ((s as any).sex_ev['cum_pussy'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['broken_condom'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] < 1) {
    if (((s as any).sex_ev ?? 0)?.['creampie_restrict'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['accidental_creampie_count'] = ((s as any).sex_ev['accidental_creampie_count'] ?? 0) + (1);
    }
  }
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['unsafe_creampie'] = ((s as any).sex_ev['unsafe_creampie'] ?? 0) + (1);
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  (!((s as any).knowpreg ?? 0))) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['risky_creampie'] = ((s as any).sex_ev['risky_creampie'] ?? 0) + (1);
      ((s as any).npc_risky_creampie_count = (s as any).npc_risky_creampie_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_risky_creampie_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
    }
  }
  qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'creampie';
  if (((s as any).npc_cum_pref ?? 0) === 'creampie') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterAnalCreampieCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_creampie_count'] = ((s as any).sex_ev['anal_creampie_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['anal_creampie_surprise'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_surprise_creampie_count'] = ((s as any).sex_ev['anal_surprise_creampie_count'] ?? 0) + (1);
  }
  qspCall(s, 'cum_call', 'anal', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'anal_creampie';
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterSugarDaddyHaggleLimit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = 25;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) + ((((s as any).pcs_hotcat ?? 0) - 5) * 2);
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'body_tits', 'body_ass', 'body_bmi', 'body_skin', 'body_lips');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) + ((Math.floor(Math.random() * 4) + 2));
  }
  if (((s as any).ngpPrefResult ?? 0)?.['HasNeg'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) - ((Math.floor(Math.random() * 4) + 3));
  }
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'clothes_quality', 'clothes_cleavage', 'shoes_heels');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  }
  if (((s as any).ngpPrefResult ?? 0)?.['HasNeg'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) - ((Math.floor(Math.random() * 3) + 2));
  }
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'cosmetics_piercings', 'cosmetics_tattoos');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  }
  if (((s as any).ngpPrefResult ?? 0)?.['HasNeg'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) - ((Math.floor(Math.random() * 3) + 1));
  }
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'hair_color', 'hair_length', 'hair_pube_length');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
  }
  if (((s as any).ngpPrefResult ?? 0)?.['HasNeg'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) - ((Math.floor(Math.random() * 2) + 1));
  }
  if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) + ((Math.floor(Math.random() * 4) + 3));
  }
  if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = ((s as any).sex_ev['haggle_limit'] ?? 0) - ((Math.floor(Math.random() * 4) + 3));
  }
  if (((s as any).sex_ev ?? 0)?.['haggle_limit'] < 10) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = 10;
  }
  if (((s as any).sex_ev ?? 0)?.['haggle_limit'] > 50) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = 50;
  }
  (s as any).result = (((s as any).sex_ev ?? 0)?.['haggle_limit']);
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_stats ---------------------------------
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'npc_update':
      enterNpcUpdate(s, scene);
      break;
    case 'starting_stats':
      enterStartingStats(s, scene);
      break;
    case 'sex_end_stats':
      enterSexEndStats(s, scene);
      break;
    case 'starting_mood':
      enterStartingMood(s, scene);
      break;
    case 'save_stats':
      enterSaveStats(s, scene);
      break;
    case 'birth_control_know':
      enterBirthControlKnow(s, scene);
      break;
    case 'no_birth_control_know':
      enterNoBirthControlKnow(s, scene);
      break;
    case 'bareback_risk_active':
      enterBarebackRiskActive(s, scene);
      break;
    case 'bareback_risk_deactive':
      enterBarebackRiskDeactive(s, scene);
      break;
    case 'prostitution_init':
      enterProstitutionInit(s, scene);
      break;
    case 'prostitution_pay_calc':
      enterProstitutionPayCalc(s, scene);
      break;
    case 'prostitution_pay_code':
      enterProstitutionPayCode(s, scene);
      break;
    case 'single_know':
      enterSingleKnow(s, scene);
      break;
    case 'dating_boy_know':
      enterDatingBoyKnow(s, scene);
      break;
    case 'dating_girl_know':
      enterDatingGirlKnow(s, scene);
      break;
    case 'npc_is_single':
      enterNpcIsSingle(s, scene);
      break;
    case 'npc_is_dating':
      enterNpcIsDating(s, scene);
      break;
    case 'npc_is_married':
      enterNpcIsMarried(s, scene);
      break;
    case 'sex_all_night':
      enterSexAllNight(s, scene);
      break;
    case 'pregnancy_risk_func':
      enterPregnancyRiskFunc(s, scene);
      break;
    case 'pc_condom_stats':
      enterPcCondomStats(s, scene);
      break;
    case 'npc_condom_stats':
      enterNpcCondomStats(s, scene);
      break;
    case 'pc_use_lube_vag':
      enterPcUseLubeVag(s, scene);
      break;
    case 'restrict_func':
      enterRestrictFunc(s, scene);
      break;
    case 'position_tracker':
      enterPositionTracker(s, scene);
      break;
    case 'fuckbuddy_add':
      enterFuckbuddyAdd(s, scene);
      break;
    case 'sugar_daddy_add':
      enterSugarDaddyAdd(s, scene);
      break;
    case 'lover_add':
      enterLoverAdd(s, scene);
      break;
    case 'cum_facial':
      enterCumFacial(s, scene);
      break;
    case 'cum_mouth':
      enterCumMouth(s, scene);
      break;
    case 'cum_mouth_facial':
      enterCumMouthFacial(s, scene);
      break;
    case 'cum_swallow':
      enterCumSwallow(s, scene);
      break;
    case 'cum_tits':
      enterCumTits(s, scene);
      break;
    case 'creampie_code':
      enterCreampieCode(s, scene);
      break;
    case 'anal_creampie_code':
      enterAnalCreampieCode(s, scene);
      break;
    case 'sugar_daddy_haggle_limit':
      enterSugarDaddyHaggleLimit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_stats: LocationDef = {
  name: 'sex_ev_stats',
  region: 'other',
  enter: enter,
};
