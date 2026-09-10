import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'clothing') {
  }
  // TODO-QSP: gs $ARGS[1], 'add_item', $temp_type, ARGS[3]
  if (((s as any).locArgs?.[1] ?? 0) === 'clothing') {
    if (((s as any).ARGS ?? 0)[4] > 0) {
      // TODO-QSP: dynamic '<<$ARGS[2]>>_h[<<ARGS[3]>>] = <<ARGS[4]>>'
    }
    if (((s as any).ARGS ?? 0)[5] > 0) {
      // TODO-QSP: dynamic '<<$ARGS[2]>>_b[<<ARGS[3]>>] = <<ARGS[5]>>'
    }
    if (((s as any).ARGS ?? 0)[6] > 0) {
      // TODO-QSP: dynamic '<<$ARGS[2]>>_h[<<ARGS[3]>>] += rand(-<<ARGS[6]>>, <<ARGS[6]>>)'
    }
    if (((s as any).ARGS ?? 0)[6] < 0) {
      // TODO-QSP: dynamic '<<$ARGS[2]>>_h[<<ARGS[3]>>] += rand(<<ARGS[6]>>, 0)'
    }
  }
  if (((s as any).ARGS ?? 0)[7] === 1) {
    // TODO-QSP: gs $ARGS[1], 'wear', $temp_type, ARGS[3]
  }
  return;
  scene.build();
}

function enterWearItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'intro_initialization', 'add_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4], ARGS[5], ARGS[6], 1
  return;
  scene.build();
}

function enterGenerateRandom(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_tot_sum = 0;
  (s as any).temp_gr_ind = 1;
  // TODO-QSP: :generate_random_loop
  if (((s as any).temp_gr_ind ?? 0) <= ((s as any).ARGS ?? 0)[1]) {
    (s as any).temp_rand[String((s as any).temp_gr_ind ?? 0)] = ((s as any).rand ?? 0)(-2, 2);
    (s as any).temp_tot_sum = ((s as any).temp_tot_sum ?? 0) + (((s as any).temp_rand ?? 0)?.[String((s as any).temp_gr_ind ?? 0)]);
    (s as any).temp_gr_ind = ((s as any).temp_gr_ind ?? 0) + (1);
    // TODO-QSP: jump 'generate_random_loop'
  }
  // TODO-QSP: :generate_random_stat_loop
  if (((s as any).temp_tot_sum ?? 0) > 0) {
    (s as any).temp_rand = 0;
    if (((s as any).temp_rand ?? 0)?.[String((s as any).temp_rand ?? 0)] > -2) {
      (s as any).temp_rand[String((s as any).temp_rand ?? 0)] = ((s as any).temp_rand[String((s as any).temp_rand ?? 0)] ?? 0) - (1);
      (s as any).temp_tot_sum = ((s as any).temp_tot_sum ?? 0) - (1);
    }
    // TODO-QSP: jump 'generate_random_stat_loop'
  } else {
    (s as any).temp_rand = 0;
    if (((s as any).temp_rand ?? 0)?.[String((s as any).temp_rand ?? 0)] < 2) {
      (s as any).temp_rand[String((s as any).temp_rand ?? 0)] = ((s as any).temp_rand[String((s as any).temp_rand ?? 0)] ?? 0) + (1);
      (s as any).temp_tot_sum = ((s as any).temp_tot_sum ?? 0) + (1);
    }
    // TODO-QSP: jump 'generate_random_stat_loop'
  }
  return;
  scene.build();
}

function enterRandomizeStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_initialization', '_generate_random', 8);
  (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (qspUntranslated(s, "temp_rand[1]", { location: "intro_initialization" }));
  (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (qspUntranslated(s, "temp_rand[2]", { location: "intro_initialization" }));
  (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (qspUntranslated(s, "temp_rand[3]", { location: "intro_initialization" }));
  (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + (qspUntranslated(s, "temp_rand[4]", { location: "intro_initialization" }));
  (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (qspUntranslated(s, "temp_rand[5]", { location: "intro_initialization" }));
  (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (qspUntranslated(s, "temp_rand[6]", { location: "intro_initialization" }));
  (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (qspUntranslated(s, "temp_rand[7]", { location: "intro_initialization" }));
  (s as any).pcs_prcptn = ((s as any).pcs_prcptn ?? 0) + (qspUntranslated(s, "temp_rand[8]", { location: "intro_initialization" }));
  (s as any).strenbuf = ((s as any).strenbuf ?? 0) + (qspUntranslated(s, "temp_rand[1]", { location: "intro_initialization" }));
  (s as any).agilbuf = ((s as any).agilbuf ?? 0) + (qspUntranslated(s, "temp_rand[2]", { location: "intro_initialization" }));
  (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + (qspUntranslated(s, "temp_rand[3]", { location: "intro_initialization" }));
  return;
  scene.build();
}

function enterRandomizeGrades(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_initialization', '_generate_random', 13);
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'math',  temp_rand[1]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'rus',  temp_rand[2]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'lit',  temp_rand[3]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'art',  temp_rand[4]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'bio',  temp_rand[5]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'eng',  temp_rand[6]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'geo',  temp_rand[7]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'sci',  temp_rand[8]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'his',  temp_rand[9]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'shop',  temp_rand[10]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'comp',  temp_rand[11]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'mus',  temp_rand[12]
  // TODO-QSP: gs 'grades', 'grade_award', 'school', 'pe',    temp_rand[13]
  return;
  scene.build();
}

function enterInitTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
    (s as any).daystart_start = 521;
    (s as any).hour = 13;
  } else {
    (s as any).daystart_start = 603;
    (s as any).hour = 7;
    if (((s as any).daystart_start ?? 0) !== 153  &&  ((s as any).daystart_start ?? 0) !== 183  &&  ((s as any).daystart_start ?? 0) !== 214) {
      (s as any).daystart_start = 239;
    }
    (s as any).hour = 9;
  }
  (s as any).daystart = ((s as any).daystart_start ?? 0);
  qspCall(s, 'time', 'update_date');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    (s as any).kanikuli = 5;
    if (((s as any).daystart_start ?? 0) === 239) {
      qspCall(s, 'array', 'remove_element', 'locat', 'Fam_set_month_inGad');
    } else {
      (s as any).locat['Fam_set_month_inGad'] = 1;
      if (((s as any).daystart_start ?? 0) === 183) {
        (s as any).locat['Fam_set_month_inGad'] = 1;
      } else {
        (s as any).locat['Fam_set_month_inGad'] = 1;
      }
      (s as any).grandmaQW['last_month_paid'] = ((s as any).month ?? 0);
      (s as any).kanicont = 245 - ((s as any).daystart_start ?? 0);
    }
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'add_item':
      enterAddItem(s, scene);
      break;
    case 'wear_item':
      enterWearItem(s, scene);
      break;
    case '_generate_random':
      enterGenerateRandom(s, scene);
      break;
    case 'randomize_stats':
      enterRandomizeStats(s, scene);
      break;
    case 'randomize_grades':
      enterRandomizeGrades(s, scene);
      break;
    case 'init_time':
      enterInitTime(s, scene);
      break;
    default:
      enterAddItem(s, scene);
      break;
  }
}

export const intro_initialization: LocationDef = {
  name: 'intro_initialization',
  region: 'other',
  enter: enter,
};
