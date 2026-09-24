import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['semester_week'] === 0  &&  (((s as any).month ?? 0) === 8  ||  ((s as any).month ?? 0) === 1)  &&  (((s as any).day ?? 0) - ((s as any).week ?? 0)) >= 20) {
    ((s as any).university = (s as any).university ?? {})['semester_week'] = (-1);
  } else {
    if (((s as any).week ?? 0) === 1) {
      if (((s as any).university ?? 0)?.['semester_week'] === -1) {
        ((s as any).university = (s as any).university ?? {})['semester_week'] = 1;
      } else {
        if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['semester_week'] < 15) {
          ((s as any).university = (s as any).university ?? {})['semester_week'] = ((s as any).university['semester_week'] ?? 0) + (1);
          if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
            qspCall(s, 'grades', 'calculate_grade', 'uni_' + (((s as any).university ?? 0)?.['enrolled_in']) + '_semester_' + (((s as any).university ?? 0)?.['enrolled_in_semester']) + '');
            qspCall(s, 'grades', 'assign_grade_description', 'uni_' + (((s as any).university ?? 0)?.['enrolled_in']) + '_semester_' + (((s as any).university ?? 0)?.['enrolled_in_semester']) + '');
          }
        } else {
          if (((s as any).university ?? 0)?.['semester_week'] === 15) {
            ((s as any).university = (s as any).university ?? {})['semester_week'] = 0;
            ((s as any).university = (s as any).university ?? {})['exam_week'] = 1;
            if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
              qspCall(s, 'grades', 'calculate_grade', 'uni_' + (((s as any).university ?? 0)?.['enrolled_in']) + '_semester_' + (((s as any).university ?? 0)?.['enrolled_in_semester']) + '');
              qspCall(s, 'grades', 'assign_grade_description', 'uni_' + (((s as any).university ?? 0)?.['enrolled_in']) + '_semester_' + (((s as any).university ?? 0)?.['enrolled_in_semester']) + '');
            }
          } else {
            if (((s as any).university ?? 0)?.['exam_week'] === 1) {
              ((s as any).university = (s as any).university ?? {})['exam_week'] = 2;
            } else {
              if (((s as any).university ?? 0)?.['exam_week'] === 2) {
                ((s as any).university = (s as any).university ?? {})['exam_week'] = 0;
                if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
                  (s as any).i = 0;
                  (s as any).passed_count = 0;
                  (s as any).class_count = 0;
                  // TODO-QSP: :passed_exams_loop
                  if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + (((s as any).university ?? 0)?.['enrolled_in']) + '_semester_' + (((s as any).university ?? 0)?.['enrolled_in_semester'])) {
                    (s as any).class_count = ((s as any).class_count ?? 0) + (1);
                    if ((0 as any) > 40  &&  (0 as any) === 1) {
                      (s as any).passed_count = ((s as any).passed_count ?? 0) + (1);
                    } else {
                      if ((!(0 as any))) {
                        // TODO-QSP: dynamic 'class[''<<$class_list_institution[i]>>_<<$class_list_name[i]>>_grade''] = 0'
                        ((s as any).university = (s as any).university ?? {})['expelled_for_missing_exam'] = 1;
                      }
                    }
                  }
                  (s as any).i = ((s as any).i ?? 0) + (1);
                  if (Object.keys((s as any).class_list_institution ?? {}).length >= ((s as any).i ?? 0)) {
                    // TODO-QSP: jump 'passed_exams_loop'
                  }
                  if (((s as any).passed_count ?? 0) === ((s as any).class_count ?? 0)) {
                    ((s as any).university = (s as any).university ?? {})['semester_passed'] = (((s as any).university ?? 0)?.['enrolled_in_semester']);
                  } else {
                    ((s as any).university = (s as any).university ?? {})['expelled'] = 1;
                    ((s as any).university = (s as any).university ?? {})['student'] = 0;
                  }
                  if (((s as any).university ?? 0)?.['semester_passed'] === 8) {
                    ((s as any).university = (s as any).university ?? {})['diploma'] = 1;
                    ((s as any).university = (s as any).university ?? {})['student'] = 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).university ?? 0)?.['exam_week'] > 0  ||  ((s as any).university ?? 0)?.['semester_week'] > 0) {
    ((s as any).university = (s as any).university ?? {})['break'] = 0;
  } else {
    ((s as any).university = (s as any).university ?? {})['break'] = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShortBreak(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  if (((s as any).hour ?? 0) === 9) {
    (s as any).minut = ((s as any).minut ?? 0) + (90 - ((s as any).minut ?? 0));
  }
  if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) < 30) {
    (s as any).minut = ((s as any).minut ?? 0) + (30 - ((s as any).minut ?? 0));
  }
  if (((s as any).hour ?? 0) === 11) {
    (s as any).minut = ((s as any).minut ?? 0) + (90 - ((s as any).minut ?? 0));
  }
  if (((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) < 30) {
    (s as any).minut = ((s as any).minut ?? 0) + (30 - ((s as any).minut ?? 0));
  }
  if (((s as any).hour ?? 0) === 13) {
    (s as any).minut = ((s as any).minut ?? 0) + (105 - ((s as any).minut ?? 0));
  }
  if (((s as any).hour ?? 0) === 14  &&  ((s as any).minut ?? 0) < 45) {
    (s as any).minut = ((s as any).minut ?? 0) + (45 - ((s as any).minut ?? 0));
  }
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] < 2  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).npc_rel ?? 0)?.['A14'] >= 70  &&  ((s as any).fame ?? 0)?.['city_slut'] < 150  &&  ((s as any).pcs_makupskl ?? 0) >= 40  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
    qspGoto(s, 'katja_uni', 'dorm_room_invite');
  }
  if (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) > 14  &&  ((s as any).nerd_game ?? 0)?.['fixed_uni_day'] === 0  &&  (((s as any).npc_rel ?? 0)?.['A153'] >= 50  ||  ((s as any).nerd_game ?? 0)?.['stage'] > 0)  &&  ((s as any).nerd_game ?? 0)?.['invite_day'] !== 2147483647) {
    qspGoto(s, 'nerd_game_night', 'invite_uni');
  }
  if ((Math.floor(Math.random() * 20) + 0)=== 0) {
    qspGoto(s, 'uni_events', 'lecture_hall_events');
  }
  scene.text('<center><b>Lecture Building Hallway</b></center>');
  scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
  scene.text('Walking down the halls, you\'re amazed at how well maintained the buildings are compared to your old school.');
  qspCall(s, 'katja_pantyquest', 'uni');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
{ label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSchedule(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).uni_period ?? 0)?.['first'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 9) {
    qspCall(s, 'uni_programs', 'set_first_period_act');
  } else {
    if (((s as any).uni_period ?? 0)?.['second'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 10) {
      qspCall(s, 'uni_programs', 'set_second_period_act');
    } else {
      if (((s as any).uni_period ?? 0)?.['third'] !== ((s as any).daystart ?? 0)  &&  (((s as any).hour ?? 0) === 12  ||  (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 15))) {
        qspCall(s, 'uni_programs', 'set_third_period_act');
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterExamSchedule(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).uni_period ?? 0)?.['exam'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 9) {
    qspCall(s, 'uni_programs', 'set_exam_act');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['student'] === 1) {
    if (((s as any).university ?? 0)?.['semester_week'] === -1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'Your next semester at the university starts next week. Classes will be Monday to Thursday starting at ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_3', 4);
    } else {
      if (((s as any).university ?? 0)?.['semester_week'] > 0) {
        if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) < 9  &&  ((s as any).uni_period ?? 0)?.['first'] !== ((s as any).daystart ?? 0)) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'You have classes at the university today. Your first class starts at ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_1', 4);
        } else {
          if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) < 11  &&  ((s as any).uni_period ?? 0)?.['second'] !== ((s as any).daystart ?? 0)) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'You have classes at the university today. Your next class starts at ' + qspFunc(s, 'time', 'get_time_string', 11, 0) + '.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_1', 4);
          } else {
            if ((((s as any).hour ?? 0) < 13  ||  (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 15))  &&  ((s as any).uni_period ?? 0)?.['third'] !== ((s as any).daystart ?? 0)) {
              if ((((s as any).week ?? 0) === 1  &&  ((s as any).university ?? 0)?.['elective1'] !== '')  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['elective2'] !== '')  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective3'] !== '')) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'You have an elective class at the university today. It starts at ' + qspFunc(s, 'time', 'get_time_string', 13, 15) + '.';
                qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_1', 4);
              } else {
                if (((s as any).week ?? 0) === 3) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'You have classes at the university today. Your last class starts at ' + qspFunc(s, 'time', 'get_time_string', 13, 15) + '.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_1', 4);
                }
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['exam_week'] === 1) {
          if (((s as any).week ?? 0) < 4) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'You have exams at the university this week and the next. Your first exam is Thursday this week at ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_2', 4);
          } else {
            if (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'You have exams at the university this week and the next. Your first exam is today ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_2', 4);
              qspCall(s, 'stat_display_compute', 'queue_alert', 'You have a university exam today.', 'neg');
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'You have no more exams this week. Your next exam will be Tuesday next week at ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_2', 4);
            }
          }
        } else {
          if (((s as any).university ?? 0)?.['exam_week'] === 2) {
            if (((s as any).week ?? 0) < 2) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'This is the last week of exams at the university this semester. Your next exam will be Tuesday this week at ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_2', 4);
            } else {
              if (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'This is the last week of exams at the university this semester. Your next exam will be today at ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
                qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_2', 4);
                qspCall(s, 'stat_display_compute', 'queue_alert', 'You have a university exam today.', 'neg');
              } else {
                if (((s as any).week ?? 0) < 4) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'This is the last week of exams at the university this semester. Your last exam will be Thursday this week at ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_2', 4);
                } else {
                  if (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'This is the last week of exams at the university this semester. Your last exam will be today at ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_2', 4);
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'You have a university exam today.', 'neg');
                  } else {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'This is the last week of exams at the university this semester. All your exams are over. You will receive your results on Monday.';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_2', 4);
                  }
                }
              }
            }
          } else {
            if (((s as any).university ?? 0)?.['enrolled_in_semester'] === ((s as any).university ?? 0)?.['semester_passed']  &&  ((s as any).university ?? 0)?.['semester_passed'] < 8) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['uni'] = 'You need to register for your next semester before it starts at the university administration.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'uni', '', 'status/uni_class_3', 4);
              qspCall(s, 'stat_display_compute', 'queue_alert', 'You must register for your next university semester.', 'neg');
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'short_break':
      enterShortBreak(s, scene);
      break;
    case 'schedule':
      enterSchedule(s, scene);
      break;
    case 'exam_schedule':
      enterExamSchedule(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons: LocationDef = {
  name: 'uni_lessons',
  title: 'Lecture Building Hallway',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
