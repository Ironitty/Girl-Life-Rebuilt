import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCheckForInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletqw ?? 0)?.['blocker'] === 0  &&  ((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
    if (((((s as any).daystart ?? 0) >= 158  &&  ((s as any).daystart ?? 0) <= 198)  &&  ((s as any).balletqw ?? 0)?.['letter'] === 0)  ||  (((s as any).daystart ?? 0) >= 198  &&  ((s as any).balletqw ?? 0)?.['school'] > 1)) {
      qspCall(s, 'pushkin_ballet_init', 'start');
    }
  }
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
    if (((s as any).loc ?? 0) === 'pushkin_sq') {
      scene.text('Just off Okhlopkov Square you see the road that leads to the ballet schools <a href="exec:gt \'pushkin_ballet_center\',\'start\'">residential block</a>.');
      scene.actions([
        { label: 'Walk to the residential block', goto: ['pushkin_ballet_center', 'start'] },
      ]);
    }
    if (((s as any).loc ?? 0) === 'pushkin_ballet_res'  &&  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) >= 30)) {
      (s as any).balletEv['trigger'] = 'late';
      qspCall(s, 'npc_274_init', 'summer_school');
    } else {
      scene.actions([
        { label: 'Go to School ( [+func(\'time\', \'get_time_string\', 7, 30)+\'...]', goto: ['pushkin_ballet_class', 'start'] },
      ]);
    }
    if (((s as any).daystart ?? 0) > 188  &&  ((s as any).loc ?? 0) === 'bedrPar'  &&  ((s as any).balletqw ?? 0)?.['letter'] === 1) {
      qspCall(s, 'array', 'remove_element', 'balletqw', 'blocker');
      qspCall(s, 'array', 'remove_element', 'balletqw', 'letter');
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
  qspCall(s, 'pain', '', Math.floor(Math.random() * 3) + 1, 'legL', 'stretch');
  qspCall(s, 'pain', '', Math.floor(Math.random() * 3) + 1, 'legR', 'stretch');
  qspCall(s, 'pain', '', Math.floor(Math.random() * 3) + 1, 'shoulders', 'stretch');
  qspCall(s, 'pain', '', Math.floor(Math.random() * 3) + 1, 'armL', 'stretch');
  qspCall(s, 'pain', '', Math.floor(Math.random() * 3) + 1, 'armR', 'stretch');
  qspCall(s, 'pain', '', Math.floor(Math.random() * 3) + 1, 'back', 'stretch');
  qspCall(s, 'pain', '', Math.floor(Math.random() * 3) + 1, 'chest', 'stretch');
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
    (s as any).ballet_grade_attendance[week] = ((s as any).ballet_grade_attendance[week] ?? 0) + (1);
    if (((s as any).pcs_makeup ?? 0) > 1) {
      (s as any).ballet_grade_mua[week] = ((s as any).ballet_grade_mua[week] ?? 0) + (1);
    } else {
      (s as any).ballet_grade_mua[week] = ((s as any).ballet_grade_mua[week] ?? 0) - (1);
    }
    if (((s as any).hbraids ?? 0) > 0  ||  ((s as any).hpingripw ?? 0) > 0  ||  ((s as any).pcs_hairlng ?? 0) <= 80) {
      (s as any).ballet_grade_braids[week] = ((s as any).ballet_grade_braids[week] ?? 0) + (1);
    } else {
      (s as any).ballet_grade_braids[week] = ((s as any).ballet_grade_braids[week] ?? 0) - (1);
    }
    if (((s as any).pcs_pubes ?? 0) < 4  &&  ((s as any).pcs_leghair ?? 0) < 4) {
      (s as any).ballet_grade_shave[week] = ((s as any).ballet_grade_shave[week] ?? 0) + (1);
    } else {
      (s as any).ballet_grade_shave[week] = ((s as any).ballet_grade_shave[week] ?? 0) - (1);
    }
    if (((s as any).apparel ?? 0)?.['status'] === 'sport'  ||  ((s as any).apparel ?? 0)?.['status'] === 'dance') {
      (s as any).ballet_grade_uniform[week] = ((s as any).ballet_grade_uniform[week] ?? 0) + (1);
    } else {
      (s as any).ballet_grade_uniform[week] = ((s as any).ballet_grade_uniform[week] ?? 0) - (1);
    }
    if (((s as any).pcs_cupsize ?? 0) > 20) {
      (s as any).ballet_grade_appearance[week] = ((s as any).ballet_grade_appearance[week] ?? 0) - (1);
    }
    if (((s as any).thinkpreg ?? 0) > 1  ||  ((s as any).knowpreg ?? 0) > 1) {
      (s as any).ballet_grade_discipline[week] = ((s as any).ballet_grade_discipline[week] ?? 0) - (200);
    }
    if (((s as any).pcs_missing_teeth ?? 0) > 0  ||  ((s as any).pcs_teeth ?? 0) !== -1) {
      (s as any).ballet_grade_appearance[week] = ((s as any).ballet_grade_appearance[week] ?? 0) - (5);
    }
    if (((s as any).pcs_brace ?? 0) > 1) {
      (s as any).ballet_grade_discipline[week] = ((s as any).ballet_grade_discipline[week] ?? 0) - (1);
    }
    if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 1) {
      (s as any).ballet_grade_discipline[week] = ((s as any).ballet_grade_discipline[week] ?? 0) - (5);
    }
    if (((s as any).alko ?? 0) > 1) {
      (s as any).ballet_grade_discipline[week] = ((s as any).ballet_grade_discipline[week] ?? 0) - (1);
    }
    if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['weed_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['heroin_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['cocaine_system'] > 0  ||  ((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
      (s as any).ballet_grade_discipline[week] = ((s as any).ballet_grade_discipline[week] ?? 0) - (50);
    }
  }
  if (((s as any).nclass ?? 0) === 5  &&  ((s as any).school_daily_check ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).ballet_daily_score[week] = ((s as any).ballet_grade_attendance ?? 0)?.[String((s as any).week ?? 0)] + ((s as any).ballet_grade_mua ?? 0)?.[String((s as any).week ?? 0)] + ((s as any).ballet_grade_braids ?? 0)?.[String((s as any).week ?? 0)] + ((s as any).ballet_grade_shave ?? 0)?.[String((s as any).week ?? 0)] + ((s as any).ballet_grade_uniform ?? 0)?.[String((s as any).week ?? 0)] + ((s as any).ballet_homework ?? 0)?.[String((s as any).week ?? 0)] - ((s as any).ballet_grade_discipline ?? 0)?.[String((s as any).week ?? 0)];
    (s as any).ballet_grade_score['class'] = ((s as any).ballet_grade_score['class'] ?? 0) + (((s as any).ballet_daily_score ?? 0)?.[String((s as any).week ?? 0)]);
  }
  if (((s as any).locArgs?.[1] ?? 0)=== 'grade') {
    (s as any).ballet_grade_score['total'] = 100 * (((s as any).ballet_grade_score ?? 0)?.['class'] + ((s as any).ballet_grade_score ?? 0)?.['homework'] + ((s as any).ballet_grade_health ?? 0) + (((s as any).danc_lvl ?? 0) / 10)) / 210;
    if (((s as any).ballet_grade_score ?? 0)?.['total'] <= 40) {
      (s as any).balletqw['school'] = 0;
    } else {
      (s as any).balletqw['school'] = 2;
      (s as any).balletqw['rank'] = 1;
      if (((s as any).ballet_grade_score ?? 0)?.['total'] >= 70  &&  ((s as any).ballet_grade_score ?? 0)?.['total'] <= 90) {
        (s as any).balletqw['school'] = 2;
        (s as any).balletqw['rank'] = 1;
      } else {
        // TODO-QSP: gs 'pushkin_ballet_init', 'famemodifier', ballet_grade_score['total']
        (s as any).balletqw['school'] = 5;
        (s as any).balletqw['rank'] = 1;
      }
      (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<centre><h2> Pushkin Ballet School - Performance Report </h2></centre>');
      (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<br>');
      if (((s as any).ballet_grade_score ?? 0)?.['class'] < 125) {
        (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('Was it even worth your time to attend the school? You did not attend all lessons or had discipline concerns. It is obvious you have no interest in a ballet or the Arts.');
      } else {
        (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('You attended all your assigned classes, and showed no discipline issues. Your continued dedication and focus to the Arts is commendable.');
        (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<font color="red"><b>Class attendance bug:</b></font> <<ballet_grade_score[\'class\'] >>');
      }
      (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<br>');
      if (((s as any).ballet_grade_score ?? 0)?.['homework'] >=6  &&  ((s as any).ballet_grade_score ?? 0)?.['homework'] <= 14) {
        (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('Your dedication and discipline in completing all your assigned homework is admirable in a student, but we expect to see more effort from you in future if you wish to become a Principle Dancer.');
      } else {
        (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('You showed an exceptional aptitude and discipline going beyond what was expected of you for your homework assignments. This is exactly what we expect from our dancers who aspire and dedicate themselves to becoming a Principle Dancer.');
        if (((s as any).ballet_grade_score ?? 0)?.['homework'] <= 5) {
          (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('You did not complete all the homework assigned to you, you lack the discipline and aptitude to become part of our school\'s Coryphée.');
        } else {
          (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<font color="red"><b>Homework debug message:</b></font> <<ballet_grade_score[\'homework\']>> ');
        }
        (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<br><br>');
        if (((s as any).balletqw ?? 0)?.['school'] === 5) {
          (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('Your skill and dedication has given us great pleasure to award you a Distinction and you have been accepted as an apprentice with sponsorship to our Conservatoire.');
        } else {
          (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('After much consideration we are pleased to offer you a place at our school. Unfortunately your performance at the school was not sufficient to grant you an sponsorship. You will need to attend a placement interview with Rudolph at the appointed date to discuss additional training before your acceptance into the Coryphée.');
          if (((s as any).balletqw ?? 0)?.['school'] === 2) {
            (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('We are pleased to offer you a place at our school, unfortunately your performance at the school was not sufficient to grant you a sponsorship. You will attend the Conservatoire as indicated by your instructor. ');
          } else {
            (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('Your performance and discipline as severely lacking and was disappointing. Your attitude towards the Arts was a disgrace and we have never had a student who showed such callous disregard for the privileges you were granted. Therefore you will not be granted a place in the school\'s coryphée nor will be invited to further opportunities.');
            (s as any).balletqw['final_report'] = ((s as any).balletqw['final_report'] ?? 0) + ('<font color="red"><b>Award debug message:</b></font> <<balletqw[\'school\']>>');
          }
          // TODO-QSP: gs $loc, 'cleanup_var'
          (s as any).balletqw['letter'] = 1;
        }
      }
    }
  }
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
    default:
      enterCheckForInit(s, scene);
      break;
  }
}

export const pushkin_ballet_init: LocationDef = {
  name: 'pushkin_ballet_init',
  title: 'Just off Okhlopkov Square you see the road that leads to the',
  region: 'pushkin',
  enter: enter,
};
