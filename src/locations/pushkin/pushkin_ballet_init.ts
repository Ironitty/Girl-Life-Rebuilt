import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCheckForInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletqw ?? 0)?.['blocker'] === 0  &&  ((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
    if (((((s as any).daystart ?? 0) >= 158  &&  ((s as any).daystart ?? 0) <= 198)  &&  ((s as any).balletqw ?? 0)?.['letter'] === 0)  ||  (((s as any).daystart ?? 0) >= 198  &&  ((s as any).balletqw ?? 0)?.['school'] > 1)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStart(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
    if (((s as any).loc ?? 0) === 'pushkin_sq') {
      scene.text('Just off Okhlopkov Square you see the road that leads to the ballet schools <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pushkin_ballet_center\u0027, \u0027start\u0027); return false;">residential block</a>.');
      scene.actions([
        { label: 'Walk to the residential block', goto: ['pushkin_ballet_center', 'start'] },
      ]);
    }
    if (((s as any).loc ?? 0) === 'pushkin_ballet_res'  &&  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) >= 30)) {
      ((s as any).balletEv = (s as any).balletEv ?? {})['trigger'] = 'late';
      qspCall(s, 'npc_274_init', 'summer_school');
    } else {
      if (((s as any).loc ?? 0) === 'pushkin_ballet_res'  &&  ((s as any).loc_arg ?? 0) === 'hallway'  &&  (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 8)  &&  (((s as any).day ?? 0) >= 1  ||  ((s as any).day ?? 0) <= 6)) {
        scene.actions([
          { label: 'Go to School ( [7:30]...]', goto: ['pushkin_ballet_class', 'start'] },
        ]);
      }
    }
    if (((s as any).daystart ?? 0) > 188  &&  ((s as any).loc ?? 0) === 'bedrPar'  &&  ((s as any).balletqw ?? 0)?.['letter'] === 1) {
      qspCall(s, 'array', 'remove_element', 'balletqw', 'blocker');
      qspCall(s, 'array', 'remove_element', 'balletqw', 'letter');
      alert('You\'ve missed your ballet school start date, maybe there will be other opportunities in future.');
    }
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'kuhrPar'  &&  ((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
    if (((s as any).locat ?? 0)?.['Mother'] === 4  &&  ((s as any).balletqw ?? 0)?.['letter'] < 1  &&  ((s as any).daystart ?? 0) <= 167) {
      scene.actions([
        { label: '<b>Read the letter</b>', goto: ['pushkin_ballet_evt', 'letter'] },
      ]);
    }
    if (((s as any).locat ?? 0)?.['Mother'] === 4  &&  ((s as any).balletqw ?? 0)?.['letter'] === 1  &&  ((s as any).daystart ?? 0) >= 198) {
      scene.actions([
        { label: '<b>Read the letter</b>', goto: ['pushkin_ballet_evt', 'letter'] },
      ]);
    }
  }
  scene.build();
}

function enterOutsideEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
    if (((s as any).loc ?? 0) === 'gdksport') {
      if (((s as any).balletqw ?? 0)?.['letter'] === 1  &&  ((s as any).daystart ?? 0) <= 185) {
        if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['startletsday'] !== ((s as any).daystart ?? 0)) {
          if (((s as any).hour ?? 0) >= 15  &&  ((s as any).starlets_on ?? 0) === 1) {
            scene.actions([
              { label: 'Tell Albina about the letter', goto: ['pushkin_ballet_evt', 'starlets'] },
            ]);
          }
        }
      }
    }
    if (((s as any).loc ?? 0) === 'pav_commcenter') {
      if (((s as any).balletqw ?? 0)?.['letter'] === 1  &&  (((s as any).daystart ?? 0) === 185  &&  ((s as any).hour ?? 0) === 16)) {
        scene.actions([
          { label: '<b>Travel to the ballet school</b>', goto: ['pushkin_ballet_res', 'start'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterExercisePain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', (Math.floor(Math.random() * 3) + 1), 'legL', 'stretch');
  qspCall(s, 'pain', '', (Math.floor(Math.random() * 3) + 1), 'legR', 'stretch');
  qspCall(s, 'pain', '', (Math.floor(Math.random() * 3) + 1), 'shoulders', 'stretch');
  qspCall(s, 'pain', '', (Math.floor(Math.random() * 3) + 1), 'armL', 'stretch');
  qspCall(s, 'pain', '', (Math.floor(Math.random() * 3) + 1), 'armR', 'stretch');
  qspCall(s, 'pain', '', (Math.floor(Math.random() * 3) + 1), 'back', 'stretch');
  qspCall(s, 'pain', '', (Math.floor(Math.random() * 3) + 1), 'chest', 'stretch');
  scene.build();
}

function enterReputation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_modelling'] >= 10  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 9  ||  ((s as any).fame ?? 0)?.['city_prostitute'] > 0  ||  ((s as any).fame ?? 0)?.['ciy_sexind'] > 0  ||  ((s as any).fame ?? 0)?.['city_modelling'] >= 10  ||  ((s as any).fame ?? 0)?.['city_slut'] > 30  ||  ((s as any).fame ?? 0)?.['city_prostitute'] > 19  ||  ((s as any).fame ?? 0)?.['city_sexind'] > 19  ||  ((s as any).fame ?? 0)?.['pushkin_modelling'] >= 10  ||  ((s as any).fame ?? 0)?.['pushkin_slut'] > 0  ||  ((s as any).fame ?? 0)?.['pushkin_sex'] > 0  ||  ((s as any).fame ?? 0)?.['pushkin_prostitute'] > 0  ||  ((s as any).fame ?? 0)?.['pushkin_sexind'] > 0) {
  }
  scene.build();
}

function enterDailyAssessment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).school_daily_check ?? 0) !== ((s as any).daystart ?? 0)  &&  (((s as any).nclass ?? 0) > 0  ||  ((s as any).nclass ?? 0) <= 5)) {
    qspCall(s, 'shortgs', 'clothing_status');
    if (((s as any).ballet_debug ?? 0) === 1) {
      // TODO-QSP: if nclass > 0: $ballet_class_debug += nclass + ' - ' + $loc_arg + iif(nclass = 5, ' -|- <br>', ', ')
    }
    ((s as any).ballet_grade_attendance = (s as any).ballet_grade_attendance ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_attendance[String((s as any).week ?? 0)] ?? 0) + (1);
    if (((s as any).pcs_makeup ?? 0) > 1) {
      ((s as any).ballet_grade_mua = (s as any).ballet_grade_mua ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_mua[String((s as any).week ?? 0)] ?? 0) + (1);
    } else {
      ((s as any).ballet_grade_mua = (s as any).ballet_grade_mua ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_mua[String((s as any).week ?? 0)] ?? 0) - (1);
    }
    if (((s as any).hbraids ?? 0) > 0  ||  ((s as any).hpingripw ?? 0) > 0  ||  ((s as any).pcs_hairlng ?? 0) <= 80) {
      ((s as any).ballet_grade_braids = (s as any).ballet_grade_braids ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_braids[String((s as any).week ?? 0)] ?? 0) + (1);
    } else {
      if (((s as any).hscrunchw ?? 0) > 0) {
        ((s as any).ballet_grade_braids = (s as any).ballet_grade_braids ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_braids[String((s as any).week ?? 0)] ?? 0) - (1);
      }
    }
    if (((s as any).pcs_pubes ?? 0) < 4  &&  ((s as any).pcs_leghair ?? 0) < 4) {
      ((s as any).ballet_grade_shave = (s as any).ballet_grade_shave ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_shave[String((s as any).week ?? 0)] ?? 0) + (1);
    } else {
      ((s as any).ballet_grade_shave = (s as any).ballet_grade_shave ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_shave[String((s as any).week ?? 0)] ?? 0) - (1);
    }
    if (((s as any).apparel ?? 0)?.['status'] === 'sport'  ||  ((s as any).apparel ?? 0)?.['status'] === 'dance') {
      ((s as any).ballet_grade_uniform = (s as any).ballet_grade_uniform ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_uniform[String((s as any).week ?? 0)] ?? 0) + (1);
    } else {
      ((s as any).ballet_grade_uniform = (s as any).ballet_grade_uniform ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_uniform[String((s as any).week ?? 0)] ?? 0) - (1);
    }
    if (((s as any).pcs_cupsize ?? 0) > 20) {
      ((s as any).ballet_grade_appearance = (s as any).ballet_grade_appearance ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_appearance[String((s as any).week ?? 0)] ?? 0) - (1);
    }
    if (((s as any).thinkpreg ?? 0) > 1  ||  ((s as any).knowpreg ?? 0) > 1) {
      ((s as any).ballet_grade_discipline = (s as any).ballet_grade_discipline ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_discipline[String((s as any).week ?? 0)] ?? 0) - (200);
    }
    if (((s as any).pcs_missing_teeth ?? 0) > 0  ||  ((s as any).pcs_teeth ?? 0) !== -1) {
      ((s as any).ballet_grade_appearance = (s as any).ballet_grade_appearance ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_appearance[String((s as any).week ?? 0)] ?? 0) - (5);
    }
    if (((s as any).pcs_brace ?? 0) > 1) {
      ((s as any).ballet_grade_discipline = (s as any).ballet_grade_discipline ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_discipline[String((s as any).week ?? 0)] ?? 0) - (1);
    }
    if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 1) {
      ((s as any).ballet_grade_discipline = (s as any).ballet_grade_discipline ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_discipline[String((s as any).week ?? 0)] ?? 0) - (5);
    }
    if (((s as any).alko ?? 0) > 1) {
      ((s as any).ballet_grade_discipline = (s as any).ballet_grade_discipline ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_discipline[String((s as any).week ?? 0)] ?? 0) - (1);
    }
    if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['weed_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['heroin_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['cocaine_system'] > 0  ||  ((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
      ((s as any).ballet_grade_discipline = (s as any).ballet_grade_discipline ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_discipline[String((s as any).week ?? 0)] ?? 0) - (50);
    }
  }
  if (((s as any).nclass ?? 0) === 5  &&  ((s as any).school_daily_check ?? 0) !== ((s as any).daystart ?? 0)) {
    ((s as any).ballet_daily_score = (s as any).ballet_daily_score ?? {})[String((s as any).week ?? 0)] = (((s as any).ballet_grade_attendance ?? 0)?.[String((s as any).week ?? 0)] ?? 0) + (((s as any).ballet_grade_mua ?? 0)?.[String((s as any).week ?? 0)] ?? 0) + (((s as any).ballet_grade_braids ?? 0)?.[String((s as any).week ?? 0)] ?? 0) + (((s as any).ballet_grade_shave ?? 0)?.[String((s as any).week ?? 0)] ?? 0) + (((s as any).ballet_grade_uniform ?? 0)?.[String((s as any).week ?? 0)] ?? 0) + (((s as any).ballet_homework ?? 0)?.[String((s as any).week ?? 0)] ?? 0) - (((s as any).ballet_grade_discipline ?? 0)?.[String((s as any).week ?? 0)] ?? 0);
    ((s as any).ballet_grade_score = (s as any).ballet_grade_score ?? {})['class'] = ((s as any).ballet_grade_score['class'] ?? 0) + ((((s as any).ballet_daily_score ?? 0)?.[String((s as any).week ?? 0)] ?? 0));
  }
  if (String((s as any).locArgs?.[1] ?? '')=== 'grade') {
    ((s as any).ballet_grade_score = (s as any).ballet_grade_score ?? {})['total'] = 100 * ((((s as any).ballet_grade_score ?? {})?.['class'] ?? 0) + (((s as any).ballet_grade_score ?? {})?.['homework'] ?? 0) + ((s as any).ballet_grade_health ?? 0) + (((s as any).danc_lvl ?? 0) / 10)) / 210;
    if (((s as any).ballet_grade_score ?? 0)?.['total'] <= 40) {
      ((s as any).balletqw = (s as any).balletqw ?? {})['school'] = 0;
    } else {
      if (((s as any).ballet_grade_score ?? 0)?.['total'] >= 41  &&  ((s as any).ballet_grade_score ?? 0)?.['total'] < 70) {
        ((s as any).balletqw = (s as any).balletqw ?? {})['school'] = 2;
        ((s as any).balletqw = (s as any).balletqw ?? {})['rank'] = 1;
      } else {
        if (((s as any).ballet_grade_score ?? 0)?.['total'] >= 70  &&  ((s as any).ballet_grade_score ?? 0)?.['total'] <= 90) {
          ((s as any).balletqw = (s as any).balletqw ?? {})['school'] = 2;
          ((s as any).balletqw = (s as any).balletqw ?? {})['rank'] = 1;
        } else {
          if (((s as any).ballet_grade_score ?? 0)?.['total'] >= 91) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).ballet_grade_score ?? 0)?.['total'])]; enterFamemodifier(s, scene); (s as any).locArgs = __savedLocArgs; }
            ((s as any).balletqw = (s as any).balletqw ?? {})['school'] = 5;
            ((s as any).balletqw = (s as any).balletqw ?? {})['rank'] = 1;
          }
        }
      }
    }
    ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<centre><h2> Pushkin Ballet School - Performance Report </h2></centre>');
    ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<br>');
    if (((s as any).ballet_grade_score ?? 0)?.['class'] < 125) {
      ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('Was it even worth your time to attend the school? You did not attend all lessons or had discipline concerns. It is obvious you have no interest in a ballet or the Arts.');
    } else {
      if (((s as any).ballet_grade_score ?? 0)?.['class'] >= 125) {
        ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('You attended all your assigned classes, and showed no discipline issues. Your continued dedication and focus to the Arts is commendable.');
      } else {
        ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<font color="red"><b>Class attendance bug:</b></font> ' + (((s as any).ballet_grade_score ?? 0)?.['class']) + '');
      }
    }
    ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<br>');
    if (((s as any).ballet_grade_score ?? 0)?.['homework'] >=6  &&  ((s as any).ballet_grade_score ?? 0)?.['homework'] <= 14) {
      ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('Your dedication and discipline in completing all your assigned homework is admirable in a student, but we expect to see more effort from you in future if you wish to become a Principle Dancer.');
    } else {
      if (((s as any).ballet_grade_score ?? 0)?.['homework'] >= 15) {
        ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('You showed an exceptional aptitude and discipline going beyond what was expected of you for your homework assignments. This is exactly what we expect from our dancers who aspire and dedicate themselves to becoming a Principle Dancer.');
      } else {
        if (((s as any).ballet_grade_score ?? 0)?.['homework'] <= 5) {
          ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('You did not complete all the homework assigned to you, you lack the discipline and aptitude to become part of our school\'s Coryphée.');
        } else {
          ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<font color="red"><b>Homework debug message:</b></font> ' + (((s as any).ballet_grade_score ?? 0)?.['homework']) + ' ');
        }
      }
    }
    ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<br><br>');
    if (((s as any).balletqw ?? 0)?.['school'] === 5) {
      ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('Your skill and dedication has given us great pleasure to award you a Distinction and you have been accepted as an apprentice with sponsorship to our Conservatoire.');
    } else {
      if (((s as any).balletqw ?? 0)?.['school'] === 3  ||  ((s as any).balletqw ?? 0)?.['school'] === 4) {
        ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('After much consideration we are pleased to offer you a place at our school. Unfortunately your performance at the school was not sufficient to grant you an sponsorship. You will need to attend a placement interview with Rudolph at the appointed date to discuss additional training before your acceptance into the Coryphée.');
      } else {
        if (((s as any).balletqw ?? 0)?.['school'] === 2) {
          ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('We are pleased to offer you a place at our school, unfortunately your performance at the school was not sufficient to grant you a sponsorship. You will attend the Conservatoire as indicated by your instructor. ');
        } else {
          if (((s as any).balletqw ?? 0)?.['school'] === 1) {
            ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('Your performance and discipline as severely lacking and was disappointing. Your attitude towards the Arts was a disgrace and we have never had a student who showed such callous disregard for the privileges you were granted. Therefore you will not be granted a place in the school\'s coryphée nor will be invited to further opportunities.');
          } else {
            ((s as any).balletqw = (s as any).balletqw ?? {})['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<font color="red"><b>Award debug message:</b></font> ' + (((s as any).balletqw ?? 0)?.['school']) + '');
          }
        }
      }
    }
    qspCall(s, '$loc', 'cleanup_var');
    ((s as any).balletqw = (s as any).balletqw ?? {})['letter'] = 1;
  }
  scene.build();
}

function enterFamemodifier(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pushkin', 'ballet', 'small', 'local');
  scene.build();
}

function enterCleanupVar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs ?? 0)=== 'debug') {
    qspCall(s, 'array', 'remove_element', 'mayaqw', 'trust');
    qspCall(s, 'array', 'remove_element', 'mayaqw', 'grave');
    qspCall(s, 'array', 'remove_element', 'rudolphqw', 'corruption');
    qspCall(s, 'array', 'remove_element', 'rudolphqw', 'stage');
    qspCall(s, 'array', 'remove_element', 'balletqw', 'school');
    qspCall(s, 'array', 'remove_element', 'balletqw', 'performances');
    qspCall(s, 'array', 'remove_element', 'balletqw', 'rank');
  }
  (s as any).ballet_awol = undefined;
  (s as any).school_running_tally = undefined;
  (s as any).sharedmeal = undefined;
  (s as any).study_tally = undefined;
  (s as any).school_prep = undefined;
  (s as any).ballet_day = undefined;
  (s as any).ballet_first_bedroom = undefined;
  (s as any).feet_track = undefined;
  (s as any).homework_active = undefined;
  (s as any).debug_day = undefined;
  (s as any).total_daily = undefined;
  (s as any).ballet_grade_attendance = undefined;
  (s as any).ballet_grade_mua = undefined;
  (s as any).ballet_grade_braids = undefined;
  (s as any).ballet_grade_shave = undefined;
  (s as any).ballet_grade_uniform = undefined;
  (s as any).ballet_grade_health = undefined;
  (s as any).ballet_class_debug = undefined;
  (s as any).letter_delay = undefined;
  qspCall(s, 'array', 'remove_element', 'balletqw', 'daystart');
  scene.build();
}

function enterDebugMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).debug_menu ?? 0) === 'open') {
    scene.actions([
      { label: 'Create Logs', handler: (st: GameState) => {
    qspCall(st, 'pushkin_ballet_init', '');
  } },
      { label: 'View Logs', handler: (st: GameState) => {
    qspCall(st, 'pushkin_ballet_init', '');
  } },
      { label: 'Clear logs', handler: (st: GameState) => {
    scene.actions([
      { label: '<font color = "red">Are you sure?</font>', handler: (st: GameState) => {
    (st as any).ballet_log = undefined;
    scene.text('<font color = "green">---- Log Cleared ---- </font>');
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Close Debug Menu', handler: (st: GameState) => {
    (st as any).debug_menu = '';
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    scene.actions([
      { label: '<b>Open Debug Menu</b>', handler: (st: GameState) => {
    (st as any).debug_menu = 'open';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDebugMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterScoreDebug(s: GameState, scene: SceneBuilder): void {
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<h3>School Grading</h3>'];
  (s as any).debug_day = 1;
  do {
    (s as any).total_daily = (((s as any).ballet_daily_score ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0) + (((s as any).ballet_homework ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0);
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<b>Day: ' + ((s as any).debug_day ?? 0) + '</b>'];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Make-up Score: ' + (((s as any).ballet_grade_mua ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Appearance - hair: ' + (((s as any).ballet_grade_braids ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Appearance - shave: ' + (((s as any).ballet_grade_shave ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Appearance - uniform: ' + (((s as any).ballet_grade_uniform ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Rules and Discipline: ' + (((s as any).ballet_grade_discipline ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Health: ' + (((s as any).ballet_grade_discipline ?? 0)?.['feetcare']) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Homework: ' + (((s as any).ballet_homework ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Attendance: ' + (((s as any).ballet_grade_attendance ?? 0)?.[String((s as any).debug_day ?? 0)] ?? 0) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Total Day Score: ' + ((s as any).total_daily ?? 0) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<b>- - - Day ' + ((s as any).debug_day ?? 0) + ' End - - -</b>'];
    (s as any).debug_day = ((s as any).debug_day ?? 0) + (1);
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Cumulative daily score: ' + (((s as any).ballet_grade_score ?? 0)?.['class']) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Cumulative homework score: ' + (((s as any).ballet_grade_score ?? 0)?.['homework']) + ''];
    (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Passmark: ' + 100 * ((((s as any).ballet_grade_score ?? {})?.['class'] ?? 0) + (((s as any).ballet_grade_score ?? {})?.['homework'] ?? 0)) / 210];
    (s as any).debug_day = undefined;
    (s as any).total_daily = undefined;
  } while (((s as any).debug_day ?? 0) <= 5);
  scene.build();
}

function enterDebugVars(s: GameState, scene: SceneBuilder): void {
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<center><h2>Ballet - Variables</h2></center>'];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<h3>General</h3>'];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'balletqw[blocker]: ' + (((s as any).balletqw ?? 0)?.['blocker'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'balletqw[letter]: ' + (((s as any).balletqw ?? 0)?.['letter'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Starlets Status: ' + (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'ballet[hypno]: ' + (((s as any).ballet ?? 0)?.['hypno'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'ballet_day tracker: ' + ((s as any).ballet_day ?? 0)];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'birthday_party[events]: ' + (((s as any).birthday_party ?? 0)?.['events'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<h3>Relationships</h3>'];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<h4>' + (((s as any).npc_firstname ?? 0)?.['A274']) + ' ' + (((s as any).npc_lastname ?? 0)?.['A274']) + ' - A274</h4>'];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Relationship: ' + (((s as any).npc_rel ?? 0)?.['A274'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'mayaqw[trust]: ' + (((s as any).mayaqw ?? 0)?.['trust'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'mayaqw[grave]: ' + (((s as any).mayaqw ?? 0)?.['grave'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'mayaqw[piano]: ' + (((s as any).mayaqw ?? 0)?.['piano'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'mayaqw[path]: ' + (((s as any).mayaqw ?? 0)?.['path'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<h4>' + (((s as any).npc_firstname ?? 0)?.['A280']) + ' ' + (((s as any).npc_lastname ?? 0)?.['A280']) + ' - A280</h4>'];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Relationship: ' + (((s as any).npc_rel ?? 0)?.['A280'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'gashaqw[trust]: ' + (((s as any).gashaqw ?? 0)?.['trust'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<h4>' + (((s as any).npc_firstname ?? 0)?.['A283']) + ' ' + (((s as any).npc_lastname ?? 0)?.['A283']) + ' - A283</h4>'];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'Relationship: ' + (((s as any).npc_rel ?? 0)?.['A283'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'rudolphqw[trust]: ' + (((s as any).rudolphqw ?? 0)?.['trust'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'rudolphqw[stage]: ' + (((s as any).rudolphqw ?? 0)?.['stage'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'rudolphqw[corruption]: ' + (((s as any).rudolphqw ?? 0)?.['corruption'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'rudolphqw[stage]: ' + (((s as any).rudolphqw ?? 0)?.['stage'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), '<h3>School</h3>'];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'balletqw[school]: ' + (((s as any).balletqw ?? 0)?.['school'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'balletqw[rank]: ' + (((s as any).balletqw ?? 0)?.['rank'])];
  (s as any).ballet_log = [...((s as any).ballet_log ?? []), 'balletqw[performances]: ' + (((s as any).balletqw ?? 0)?.['performances'])];
  if (((s as any).ballet_day ?? 0) > 0  &&  ((s as any).balletqw ?? 0)?.['school'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterScoreDebug(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  alert('---- Variables dumped to log ----');
  scene.build();
}

function enterBalletDebug(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ballet_log ?? {}).length > 0) {
    (s as any).i = 0;
    scene.text('---- Ballet Debug Log ----');
    scene.text(`Date: ${((s as any).daystart ?? '')} - ${((s as any).year ?? '')}, ${((s as any).month ?? '')}, ${((s as any).day ?? '')}`);
    scene.text(`Girl Life version: ${((s as any).version_major ?? '') + '.' + ((s as any).version_minor ?? '') + '.' + ((s as any).version_revision ?? '') + '.' + ((s as any).version_patch ?? '') + ((((s as any).git_hash ?? 0) !== "") ? ('<br>' + ((s as any).git_hash ?? '') + ' (dev build)') : (''))}`);
    do {
      scene.text(`Entry ${((s as any).i ?? '')}: ` + (((s as any).ballet_log ?? 0)?.[String((s as any).i ?? 0)] ?? ''));
      (s as any).i = ((s as any).i ?? 0) + (1);
    } while (((s as any).i ?? 0) < Object.keys((s as any).ballet_log ?? {}).length);
  } else {
    scene.text('No debug messages');
  }
  scene.text('<b><center>---- End of Log ----</center></b>');
  (s as any).i = undefined;
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_for_init':
      enterCheckForInit(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'outside_events':
      enterOutsideEvents(s, scene);
      break;
    case 'exercise_pain':
      enterExercisePain(s, scene);
      break;
    case 'reputation':
      enterReputation(s, scene);
      break;
    case 'daily_assessment':
      enterDailyAssessment(s, scene);
      break;
    case 'famemodifier':
      enterFamemodifier(s, scene);
      break;
    case 'cleanup_var':
      enterCleanupVar(s, scene);
      break;
    case 'debug_menu':
      enterDebugMenu(s, scene);
      break;
    case 'score_debug':
      enterScoreDebug(s, scene);
      break;
    case 'debug_vars':
      enterDebugVars(s, scene);
      break;
    case 'ballet_debug':
      enterBalletDebug(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pushkin_ballet_init: LocationDef = {
  name: 'pushkin_ballet_init',
  title: 'Just off Okhlopkov Square you see the road that leads to the',
  region: 'pushkin',
  enter: enter,
};
