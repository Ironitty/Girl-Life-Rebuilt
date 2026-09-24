import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSchedule(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).school_period ?? 0))) {
    if (((s as any).week ?? 0) === 1) {
      scene.text('<b>Next period</b>: Math');
    }
    if (((s as any).week ?? 0) === 2) {
      scene.text('<b>Next period</b>: English');
    }
    if (((s as any).week ?? 0) === 3) {
      scene.text('<b>Next period</b>: Math');
    }
    if (((s as any).week ?? 0) === 4) {
      scene.text('<b>Next period</b>: English');
    }
    if (((s as any).week ?? 0) === 5) {
      scene.text('<b>Next period</b>: Math');
    }
  } else {
    if (((s as any).school_period ?? 0) === 1) {
      if (((s as any).week ?? 0) === 1) {
        scene.text('<b>Next period</b>: Russian');
      }
      if (((s as any).week ?? 0) === 2) {
        scene.text('<b>Next period</b>: Geography');
      }
      if (((s as any).week ?? 0) === 3) {
        scene.text('<b>Next period</b>: Russian');
      }
      if (((s as any).week ?? 0) === 4) {
        scene.text('<b>Next period</b>: Geography');
      }
      if (((s as any).week ?? 0) === 5) {
        scene.text('<b>Next period</b>: Russian');
      }
    } else {
      if (((s as any).school_period ?? 0) === 2) {
        scene.text('<b>Next</b>: Morning break');
      } else {
        if (((s as any).school_period ?? 0) === 3) {
          if (((s as any).week ?? 0) === 1) {
            scene.text('<b>Next period</b>: Literature');
          }
          if (((s as any).week ?? 0) === 2) {
            scene.text('<b>Next period</b>: Science');
          }
          if (((s as any).week ?? 0) === 3) {
            scene.text('<b>Next period</b>: Biology');
          }
          if (((s as any).week ?? 0) === 4) {
            scene.text('<b>Next period</b>: Science');
          }
          if (((s as any).week ?? 0) === 5) {
            scene.text('<b>Next period</b>: Literature');
          }
        } else {
          if (((s as any).school_period ?? 0) === 4) {
            if (((s as any).week ?? 0) === 1) {
              scene.text('<b>Next period</b>: Art');
            }
            if (((s as any).week ?? 0) === 2) {
              scene.text('<b>Next period</b>: Shop');
            }
            if (((s as any).week ?? 0) === 3) {
              scene.text('<b>Next period</b>: History');
            }
            if (((s as any).week ?? 0) === 4) {
              scene.text('<b>Next period</b>: Shop');
            }
            if (((s as any).week ?? 0) === 5) {
              scene.text('<b>Next period</b>: Art');
            }
          } else {
            if (((s as any).school_period ?? 0) === 5) {
              scene.text('<b>Next</b>: Lunch break');
            } else {
              if (((s as any).school_period ?? 0) === 6) {
                if (((s as any).week ?? 0) === 1) {
                  scene.text('<b>Next period</b>: Biology');
                }
                if (((s as any).week ?? 0) === 2) {
                  scene.text('<b>Next period</b>: Computer');
                }
                if (((s as any).week ?? 0) === 3) {
                  scene.text('<b>Next period</b>: Computer');
                }
                if (((s as any).week ?? 0) === 4) {
                  scene.text('<b>Next period</b>: Computer');
                }
                if (((s as any).week ?? 0) === 5) {
                  scene.text('<b>Next period</b>: History');
                }
              } else {
                if (((s as any).school_period ?? 0) === 7) {
                  if (((s as any).week ?? 0) === 1) {
                    scene.text('<b>Next period</b>: P.E.');
                  }
                  if (((s as any).week ?? 0) === 2) {
                    scene.text('<b>Next period</b>: Music');
                  }
                  if (((s as any).week ?? 0) === 3) {
                    scene.text('<b>Next period</b>: P.E.');
                  }
                  if (((s as any).week ?? 0) === 4) {
                    scene.text('<b>Next period</b>: Music');
                  }
                  if (((s as any).week ?? 0) === 5) {
                    scene.text('<b>Next period</b>: P.E.');
                  }
                }
              }
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

function enterWeeklyGradeUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 1  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    if (((s as any).lernHome ?? 0) > 0  &&  ((s as any).petkaQW ?? 0)?.['homework'] === 1) {
      qspCall(s, 'grades', 'homework', 'school', 'yes', (Math.floor(Math.random() * (((s as any).lernHome ?? 0) - 0 + 1)) + (0)), 2, 'A6');
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = ((s as any).trait_vars['academic_exp'] ?? 0) - (Math.min(((s as any).lernHome ?? 0), 5));
    if (((s as any).lernHome ?? 0) <= 1) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = ((s as any).trait_vars['academic_exp'] ?? 0) + ((((s as any).trait_vars ?? 0)?.['nerd_learn_home']));
      if (((s as any).trait_vars ?? 0)?.['nerd_learn_home'] < 5) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['nerd_learn_home'] = ((s as any).trait_vars['nerd_learn_home'] ?? 0) + (1);
      } else {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['nerd_learn_home'] = 0;
      }
    }
    (s as any).lernHome = 0;
    if (((s as any).class ?? 0)?.['first_grade_check'] > 0) {
      qspCall(s, 'grades', 'calculate_grade', 'school');
      qspCall(s, 'grades', 'assign_grade_description', 'school');
    } else {
      (s as any).i = 0;
      // TODO-QSP: :grade_loop
      // TODO-QSP: dynamic 'class[''school_<<$class_list_name[i]>>_weekly_grade_gain''] = 0'
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (Object.keys((s as any).class_list_institution ?? {}).length > ((s as any).i ?? 0)) {
        // TODO-QSP: jump 'grade_loop'
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).daystart ?? 0) < 513) {
    // TODO-QSP: $sd_sched[1] = 'Math, Russian, Literature, Art, Biology and P.E.'
    // TODO-QSP: $sd_sched[2] = 'English, Geography, Science, Shop, Computer and Music.'
    // TODO-QSP: $sd_sched[3] = 'Math, Russian, Biology, History, Computer and P.E.'
    // TODO-QSP: $sd_sched[4] = 'English, Geography, Science, Shop, Computer and Music.'
    // TODO-QSP: $sd_sched[5] = 'Math, Russian, Literature, Art, History and P.E.'
    if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) <= 5) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['school_schedule'] = ' You have the following lessons today: ' + (((s as any).sd_sched ?? 0)?.[String((s as any).week ?? 0)] ?? 0) + '';
    }
    if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) < 6) {
      if (((s as any).hour ?? 0) < 9) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['school'] = 'You have to be at school before ' + qspFunc(s, 'time', 'get_time_string', 7, 55) + ' if you don\'t want to be late.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'school', '', 'status/gschool', 4);
        if (((s as any).hour ?? 0) >= 7) {
          qspCall(s, 'stat_display_compute', 'queue_alert', 'School starts soon, be there by 7:55.', 'neg');
        }
      } else {
        if (((s as any).hour ?? 0) < 15) {
          if (((s as any).gschoolVars ?? 0)?.['last_attendance'] !== ((s as any).daystart ?? 0)) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['school'] = 'You have missed school.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'school', '', 'status/gschool_red', 4);
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['school'] = (((s as any).stat_texts ?? 0)?.['school_schedule']);
            qspCall(s, 'stat_display_compute', 'queue_msg', 'school', '', 'status/gschool', 4);
          }
        }
      }
    } else {
      if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) < 9  &&  ((s as any).detention_set ?? 0) === 1  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['school'] = 'You have detention this morning and must be at school before ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + '.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'school', '', 'status/gschool', 4);
        if (((s as any).hour ?? 0) >= 7) {
          qspCall(s, 'stat_display_compute', 'queue_alert', 'Detention this morning. You must be at school by 9:00.', 'neg');
        }
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).daystart ?? 0) === ((s as any).sisboyday ?? 0) + 1  &&  ((s as any).hour ?? 0) < 18) {
      if ((((s as any).npc_QW ?? 0)?.['A33'] === 3  ||  ((s as any).npc_QW ?? 0)?.['A33'] === 5  ||  ((s as any).npc_QW ?? 0)?.['A33'] === 7  ||  (((s as any).npc_QW ?? 0)?.['A33'] >= 9  &&  ((s as any).sisboytrioQW ?? 0) !== 1))) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['sg_sisroom'] = 'You promised your sister not to go into your room at ' + qspFunc(s, 'time', 'get_time_string', 16, 0, (((s as any).cheatVars ?? 0)?.['time_format'])) + '.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'sg_sisroom');
      }
      if (((s as any).sisboytrioQW ?? 0) === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['sg_sistrio'] = 'You promised your sister you would meet her in your room at ' + qspFunc(s, 'time', 'get_time_string', 16, 0, (((s as any).cheatVars ?? 0)?.['time_format'])) + '.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'sg_sistrio');
        if (((s as any).hour ?? 0) >= 14) {
          qspCall(s, 'stat_display_compute', 'queue_alert', 'Your sister is expecting you in your room at ' + qspFunc(s, 'time', 'get_time_string', 16, 0) + '.', 'neg');
        }
      }
    }
    if (((s as any).day ?? 0) === ((s as any).nyp_day ?? 0)  &&  ((s as any).month ?? 0) === 12  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).hour ?? 0) >= 5  &&  ((s as any).hour ?? 0) <= 14) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['sg_ny_school'] = 'Your school\'s New Year\'s party will start at ' + qspFunc(s, 'time', 'get_time_string', 14, 0, (((s as any).cheatVars ?? 0)?.['time_format'])) + '.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'sg_ny_school');
      if (((s as any).hour ?? 0) >= 12) {
        qspCall(s, 'stat_display_compute', 'queue_alert', 'School New Year party starts soon (' + qspFunc(s, 'time', 'get_time_string', 14, 0) + ').', 'neg');
      }
    } else {
      if (((s as any).InvitationToDimkaNYparty ?? 0) === 1  &&  ((s as any).month ?? 0) === 12  &&  ((s as any).day ?? 0) === 31) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['sg_dimka_party'] = 'Go to the residential area between ' + qspFunc(s, 'time', 'get_time_string', 15, 0, (((s as any).cheatVars ?? 0)?.['time_format'])) + ' and ' + qspFunc(s, 'time', 'get_time_string', 18, 0, (((s as any).cheatVars ?? 0)?.['time_format'])) + ' to go to Dimka\'s New Year party.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'sg_dimka_party');
        if (((s as any).hour ?? 0) >= 13) {
          qspCall(s, 'stat_display_compute', 'queue_alert', 'Dimka\'s New Year party starts at ' + qspFunc(s, 'time', 'get_time_string', 15, 0) + '.', 'neg');
        }
      }
    }
    if (((s as any).gopnik_initiation ?? 0) === 1  &&  ((s as any).gopnik_initiation_day ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 15  &&  ((s as any).hour ?? 0) < 21) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['sg_gopnik'] = 'Meet Lena and Lera at the apartment garages at eight.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'sg_gopnik');
      if (((s as any).hour ?? 0) >= 18) {
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Meet Lena and Lera at the garages at eight.', 'neg');
      }
    }
    if (((s as any).nerd_night_game ?? 0) === 1  &&  ((s as any).nerd_night_game_day ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 15  &&  ((s as any).hour ?? 0) < 21) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['sg_nerd'] = 'Join nerds at the community center at eight.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'sg_nerd');
      if (((s as any).hour ?? 0) >= 18) {
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Join the nerds at the community center at eight.', 'neg');
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
    case 'schedule':
      enterSchedule(s, scene);
      break;
    case 'weekly grade update':
      enterWeeklyGradeUpdate(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool: LocationDef = {
  name: 'gschool',
  title: '<b>Next period</b>: Math',
  region: 'other',
  enter: enter,
};
