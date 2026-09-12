import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMorning(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gschoolVars ?? 0)?.['last_attendance'] !== ((s as any).daystart ?? 0)) {
    if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['last_attendance'] = ((s as any).daystart ?? 0);
    if (!(s as any).gschoolVars) (s as any).gschoolVars = {}; (s as any).gschoolVars['absence_count'] = ((s as any).gschoolVars['absence_count'] ?? 0) - (1);
    (s as any).school_lunch = 0;
    if (((s as any).missing_class ?? 0) > 9) {
      (s as any).missing_class = ((s as any).missing_class ?? 0) - (9);
    } else {
      if (((s as any).missing_class ?? 0) > 6) {
        (s as any).missing_class = ((s as any).missing_class ?? 0) - (6);
      }
    }
    (s as any).lernSkill = ((s as any).lernSkill ?? 0) + (1);
    (s as any).lernHome = ((s as any).lernHome ?? 0) + (1);
    if (((s as any).runnerQW ?? 0)?.['pav_racetype'] === 1) {
      if (!(s as any).runnerQW) (s as any).runnerQW = {}; (s as any).runnerQW['pav_racetype'] = 0;
    }
    if (((s as any).hour ?? 0) < 8) {
      qspCall(s, 'gschool_socialchg', 'test');
    }
  }
  if (((s as any).breaktype ?? 0) !== 'first') {
    if (((s as any).detention_set ?? 0) === 1  &&  ((s as any).week ?? 0) === 1) {
      (s as any).detention_set = 2;
      scene.img('images/characters/shared/headshots_main/big134.jpg');
      scene.text('The principal is waiting for you in the hall, and with a simple curl of a finger, she summons you to follow her to her office.');
      qspCall(s, 'gschool_lessons', 'uniform_check');
      scene.actions([
        { label: 'Follow', goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      if (((s as any).late ?? 0) === 0  &&  ((s as any).cheerleadingQW ?? 0)?.['skipped_ev'] + ((s as any).cheerleadingQW ?? 0)?.['skipped_g_ev'] > 0) {
        qspCall(s, 'gschool_cheerleading', 'skipped_ev');
        scene.actions([
          { label: 'Continue down the hall', goto: ['gschool_lessons', 'morning'] },
        ]);
      } else {
        if (((s as any).week ?? 0) < 4  &&  ((s as any).class ?? 0)?.['first_grade_check'] === 0) {
          scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'grade_check'] }]);
        } else {
          if (((s as any).week ?? 0) > 1  &&  (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).nerd_game ?? 0)?.['stage'] > 0  ||  (Math.floor(Math.random() * (((s as any).npc_rel ?? 0)?.['A152'] - 80 + 1)) + (80)) > 95)  &&  ((s as any).nerd_game ?? 0)?.['invite_day'] < ((s as any).daystart ?? 0) - ((s as any).week ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'invite', '\'morning\''] }]);
          } else {
            qspCall(s, 'gschool_gossip', 'morning');
            qspCall(s, 'gschool_lessons', 'uniform_check');
            qspCall(s, 'gschool', 'schedule');
            if (((s as any).week ?? 0) === 1  &&  ((s as any).class ?? 0)?.['grade_check_day'] !== ((s as any).daystart ?? 0)) {
              scene.actions([
                { label: 'Check your grades', goto: ['gschool_lessons', 'grade_check'] },
              ]);
            }
            scene.actions([
              { label: 'Go to first period', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
              { label: 'Skip first period', handler: (st: GameState) => {
    (st as any).school_period = 1;
  }, goto: ['gschool_lessons', 'skip'] },
              { label: 'Use water cooler', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'first'
  }, goto: ['gschool_break', 'watercooler'] },
              { label: 'Go to the girls restroom', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'first'
  }, goto: ['gschool_break', 'girls_restroom'] },
              { label: 'Go to the boys restroom', handler: (st: GameState) => {
    // TODO-QSP: $breaktype = 'first'
  }, goto: ['gschool_break', 'boys_restroom'] },
            ]);
          }
        }
      }
    }
  } else {
    scene.text('<center><b>School Hallway</b></center>');
    scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${Math.floor(Math.random() * 3) + 0}.jpg`);
    scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates and wave at them.');
    scene.actions([
      { label: 'Go to first period', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
      { label: 'Skip first period', handler: (st: GameState) => {
    (st as any).school_period = 1;
  }, goto: ['gschool_lessons', 'skip'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterUniformCheck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'school_check', 'apply', 'wearing');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShortBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).school_period ?? 0) === 1) {
    if (((s as any).hour ?? 0) === 6) {
      (s as any).minut = ((s as any).minut ?? 0) + (165-((s as any).minut ?? 0));
    } else {
      if (((s as any).hour ?? 0) === 7) {
        (s as any).minut = ((s as any).minut ?? 0) + (105-((s as any).minut ?? 0));
      } else {
        if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 45) {
          (s as any).minut = ((s as any).minut ?? 0) + (45-((s as any).minut ?? 0));
        } else {
          if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 50) {
            scene.text('Time to go to your next class.');
          } else {
            (s as any).school_period = 2;
            scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
          }
        }
      }
    }
  } else {
    if (((s as any).school_period ?? 0) === 2) {
      if (((s as any).hour ?? 0) === 8) {
        (s as any).minut = ((s as any).minut ?? 0) + (95-((s as any).minut ?? 0));
      } else {
        if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 35) {
          (s as any).minut = ((s as any).minut ?? 0) + (35-((s as any).minut ?? 0));
        } else {
          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 55) {
            scene.text('Time to go to your next class.');
          } else {
            (s as any).school_period = 4;
            scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
          }
        }
      }
    } else {
      if (((s as any).school_period ?? 0) === 3) {
        if (((s as any).locArgs?.[1] ?? 0) === '') {
          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 55) {
            (s as any).minut = ((s as any).minut ?? 0) + (55-((s as any).minut ?? 0));
            scene.text('Time to go to your next class.');
          } else {
            (s as any).school_period = 4;
            scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
          }
        } else {
          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 46) {
            (s as any).minut = ((s as any).minut ?? 0) + (46-((s as any).minut ?? 0));
          }
        }
      } else {
        if (((s as any).school_period ?? 0) === 4) {
          if (((s as any).hour ?? 0) === 9) {
            (s as any).minut = ((s as any).minut ?? 0) + (100-((s as any).minut ?? 0));
          } else {
            if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) < 40) {
              (s as any).minut = ((s as any).minut ?? 0) + (40-((s as any).minut ?? 0));
            } else {
              if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) < 45) {
                scene.text('Time to go to your next class.');
              } else {
                (s as any).school_period = 5;
                scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
              }
            }
          }
        } else {
          if (((s as any).school_period ?? 0) === 5) {
            if (((s as any).hour ?? 0) === 10) {
              (s as any).minut = ((s as any).minut ?? 0) + (90-((s as any).minut ?? 0));
            } else {
              if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) < 30) {
                (s as any).minut = ((s as any).minut ?? 0) + (30-((s as any).minut ?? 0));
              } else {
                if (((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) < 25  &&  ((s as any).minut ?? 0) > 20) {
                  (s as any).school_period = 6;
                  scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
                } else {
                  if ((((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) > 25 )  ||  ((s as any).hour ?? 0) > 12) {
                    (s as any).school_period = 6;
                    scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
                  }
                }
              }
            }
            if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) === 12) {
              (s as any).school_lunch = 1;
              (s as any).school_period = 6;
              scene.actions([{ label: 'Continue', goto: ['NikoDreams', 'classroom_dream'] }]);
            }
          } else {
            if (((s as any).school_period ?? 0) === 6) {
              if (((s as any).locArgs?.[1] ?? 0) === '') {
                if (((s as any).hour ?? 0) === 10) {
                  (s as any).minut = ((s as any).minut ?? 0) + (145-((s as any).minut ?? 0));
                } else {
                  if (((s as any).hour ?? 0) === 11) {
                    (s as any).minut = ((s as any).minut ?? 0) + (85-((s as any).minut ?? 0));
                  } else {
                    if (((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) < 25) {
                      (s as any).minut = ((s as any).minut ?? 0) + (25-((s as any).minut ?? 0));
                    } else {
                      (s as any).school_period = 7;
                      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
                    }
                  }
                }
              }
            } else {
              if (((s as any).school_period ?? 0) === 7) {
                if (((s as any).hour ?? 0) === 11) {
                  (s as any).minut = ((s as any).minut ?? 0) + (130-((s as any).minut ?? 0));
                } else {
                  if (((s as any).hour ?? 0) === 12) {
                    (s as any).minut = ((s as any).minut ?? 0) + (70-((s as any).minut ?? 0));
                  } else {
                    if (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 10) {
                      (s as any).minut = ((s as any).minut ?? 0) + (10-((s as any).minut ?? 0));
                    } else {
                      if (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 15) {
                        scene.text('Time to go to your next class.');
                      } else {
                        (s as any).school_period = 8;
                        scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
                      }
                    }
                  }
                }
              } else {
                if (((s as any).school_period ?? 0) === 8) {
                  if (((s as any).hour ?? 0) === 13) {
                    (s as any).minut = ((s as any).minut ?? 0) + (60-((s as any).minut ?? 0));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).school_period ?? 0) === 2) {
    if (((s as any).locArgs?.[1] ?? 0) !== 'nopict') {
      scene.text('<center><b>School Hallway</b></center>');
      scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${Math.floor(Math.random() * 3) + 0}.jpg`);
      // TODO-QSP: nl
      qspCall(s, 'gschool', 'schedule');
    }
    scene.actions([
      { label: 'Time for morning break', goto: ['gschool_lessons', 'schedule'] },
    ]);
  } else {
    if (((s as any).school_period ?? 0) === 5) {
      if (((s as any).locArgs?.[1] ?? 0) !== 'nopict') {
        scene.text('<center><b>School Hallway</b></center>');
        scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${Math.floor(Math.random() * 3) + 0}.jpg`);
        // TODO-QSP: nl
        qspCall(s, 'gschool', 'schedule');
      }
      scene.actions([
        { label: 'Time for lunch break', goto: ['gschool_lessons', 'schedule'] },
      ]);
    } else {
      if ((((s as any).school_period ?? 0) < 8)) {
        if (((s as any).locArgs?.[1] ?? 0) !== 'nopict') {
          scene.text('<center><b>School Hallway</b></center>');
          scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${Math.floor(Math.random() * 3) + 0}.jpg`);
          qspCall(s, 'gschool_gossip', 'gossip');
          // TODO-QSP: nl
          qspCall(s, 'gschool', 'schedule');
        }
        if (((s as any).cheerleadingQW ?? 0)?.['skipped_ev'] + ((s as any).cheerleadingQW ?? 0)?.['skipped_g_ev'] > 0) {
          qspCall(s, 'gschool_cheerleading', 'skipped_ev');
          scene.actions([
            { label: 'Continue down the hall', goto: ['gschool_lessons', 'short_break'] },
          ]);
        } else {
          if (((s as any).week ?? 0) > 1  &&  (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).nerd_game ?? 0)?.['stage'] > 0  ||  (Math.floor(Math.random() * (((s as any).npc_rel ?? 0)?.['A152'] - 80 + 1)) + (80)) > 95)  &&  ((s as any).nerd_game ?? 0)?.['invite_day'] < ((s as any).daystart ?? 0) - ((s as any).week ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['nerd_game_night', 'invite', '\'short_break\''] }]);
          }
        }
        scene.actions([
          { label: 'Go to next class', goto: ['gschool_lessons', 'schedule'] },
          { label: 'Skip next class', handler: (st: GameState) => {
    (st as any).school_period = ((st as any).school_period ?? 0) + (1);
    qspCall(st, 'archetypes', 'gain', 'punk', 'tiny', 'Skipping class', 1);
  }, goto: ['gschool_lessons', 'skip'] },
        ]);
      } else {
        if (((s as any).Kuznetsov_punishment ?? 0) === 1) {
          scene.text('<center><b>School Hallway</b></center>');
          scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${Math.floor(Math.random() * 3) + 0}.jpg`);
          scene.actions([
            { label: 'Go to Mr. Kuznetsov\'s classroom', goto: ['gschool_lessonsev2', 'shop_punishment'] },
            { label: 'Leave the school', goto: ['gschool_lessons', 'schedule'] },
          ]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'schedule'] }]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSkip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>School Hallway</b></center>');
  scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${Math.floor(Math.random() * 3) + 0}.jpg`);
  scene.text('You don\'t feel like attending all of your classes this morning. Surely no one will miss you if you skip one of your three morning classes?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the girl\'s bathroom', handler: (st: GameState) => {
    (st as any).missing_class = ((st as any).missing_class ?? 0) + (1);
  }, goto: ['gschool_girls_bathroom', 'start'] },
    { label: 'Go to the boy\'s bathroom', handler: (st: GameState) => {
    (st as any).missing_class = ((st as any).missing_class ?? 0) + (1);
  }, goto: ['gschool_boys_bathroom', 'start'] },
  ]);
  scene.build();
}

function enterSchedule(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!((s as any).school_period ?? 0))) {
    (s as any).school_period = 1;
    if (((s as any).hour ?? 0) >= 8) {
      if (((s as any).week ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'math_late'] }]);
      }
      if (((s as any).week ?? 0) === 2) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons3', 'literature_late'] }]);
      }
      if (((s as any).week ?? 0) === 3) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'math_late'] }]);
      }
      if (((s as any).week ?? 0) === 4) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons3', 'literature_late'] }]);
      }
      if (((s as any).week ?? 0) === 5) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'math_late'] }]);
      }
    } else {
      if (((s as any).hour ?? 0) === 7) {
        (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
      }
      if (((s as any).hour ?? 0) === 6) {
        (s as any).minut = ((s as any).minut ?? 0) + (120 - ((s as any).minut ?? 0));
      }
      if (((s as any).week ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'math'] }]);
      }
      if (((s as any).week ?? 0) === 2) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons3', 'literature'] }]);
      }
      if (((s as any).week ?? 0) === 3) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'math'] }]);
      }
      if (((s as any).week ?? 0) === 4) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons3', 'literature'] }]);
      }
      if (((s as any).week ?? 0) === 5) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'math'] }]);
      }
    }
  } else {
    if (((s as any).school_period ?? 0) === 1) {
      (s as any).school_period = 2;
      if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 50) {
        (s as any).minut = ((s as any).minut ?? 0) + (50 - ((s as any).minut ?? 0));
      }
      if (((s as any).week ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons1', 'russian'] }]);
      }
      if (((s as any).week ?? 0) === 2) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons1', 'geography'] }]);
      }
      if (((s as any).week ?? 0) === 3) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons1', 'russian'] }]);
      }
      if (((s as any).week ?? 0) === 4) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons1', 'geography'] }]);
      }
      if (((s as any).week ?? 0) === 5) {
        scene.actions([{ label: 'Continue', goto: ['gschool_lessons1', 'russian'] }]);
      }
    } else {
      if (((s as any).school_period ?? 0) === 2) {
        (s as any).school_period = 3;
        scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'break'] }]);
      } else {
        if (((s as any).school_period ?? 0) === 3) {
          (s as any).school_period = 4;
          if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 55) {
            (s as any).minut = ((s as any).minut ?? 0) + (55 - ((s as any).minut ?? 0));
          }
          if (((s as any).week ?? 0) === 1) {
            scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'english'] }]);
          }
          if (((s as any).week ?? 0) === 2) {
            scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'science'] }]);
          }
          if (((s as any).week ?? 0) === 3) {
            scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'biology'] }]);
          }
          if (((s as any).week ?? 0) === 4) {
            scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'science'] }]);
          }
          if (((s as any).week ?? 0) === 5) {
            scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'english'] }]);
          }
        } else {
          if (((s as any).school_period ?? 0) === 4) {
            (s as any).school_period = 5;
            if (((s as any).hour ?? 0) === 10  &&  ((s as any).minut ?? 0) < 45) {
              (s as any).minut = ((s as any).minut ?? 0) + (45 - ((s as any).minut ?? 0));
            }
            if (((s as any).week ?? 0) === 1) {
              scene.actions([{ label: 'Continue', goto: ['gschool_lessons3', 'art'] }]);
            }
            if (((s as any).week ?? 0) === 2) {
              scene.actions([{ label: 'Continue', goto: ['gschool_lessons3', 'shop'] }]);
            }
            if (((s as any).week ?? 0) === 3) {
              scene.actions([{ label: 'Continue', goto: ['gschool_lessons1', 'history'] }]);
            }
            if (((s as any).week ?? 0) === 4) {
              scene.actions([{ label: 'Continue', goto: ['gschool_lessons3', 'shop'] }]);
            }
            if (((s as any).week ?? 0) === 5) {
              scene.actions([{ label: 'Continue', goto: ['gschool_lessons3', 'art'] }]);
            }
          } else {
            if (((s as any).school_period ?? 0) === 5) {
              (s as any).school_period = 6;
              scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'lunch'] }]);
            } else {
              if (((s as any).school_period ?? 0) === 6) {
                (s as any).school_period = 7;
                if (((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) < 25) {
                  (s as any).minut = ((s as any).minut ?? 0) + (25 - ((s as any).minut ?? 0));
                }
                if (((s as any).week ?? 0) === 1) {
                  scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'biology'] }]);
                }
                if (((s as any).week ?? 0) === 2) {
                  scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'computer'] }]);
                }
                if (((s as any).week ?? 0) === 3) {
                  scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'computer'] }]);
                }
                if (((s as any).week ?? 0) === 4) {
                  scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'computer'] }]);
                }
                if (((s as any).week ?? 0) === 5) {
                  scene.actions([{ label: 'Continue', goto: ['gschool_lessons1', 'history'] }]);
                }
              } else {
                if (((s as any).school_period ?? 0) === 7) {
                  (s as any).school_period = 8;
                  if (((s as any).hour ?? 0) === 13  &&  ((s as any).minut ?? 0) < 15) {
                    (s as any).minut = ((s as any).minut ?? 0) + (15 - ((s as any).minut ?? 0));
                  }
                  if (((s as any).week ?? 0) === 1) {
                    scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'pe'] }]);
                  }
                  if (((s as any).week ?? 0) === 2) {
                    scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'music'] }]);
                  }
                  if (((s as any).week ?? 0) === 3) {
                    scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'pe'] }]);
                  }
                  if (((s as any).week ?? 0) === 4) {
                    scene.actions([{ label: 'Continue', goto: ['gschool_lessons2', 'music'] }]);
                  }
                  if (((s as any).week ?? 0) === 5) {
                    scene.actions([{ label: 'Continue', goto: ['gschool_lessons4', 'pe'] }]);
                  }
                } else {
                  (s as any).school_period = 0;
                  scene.actions([{ label: 'Continue', goto: ['gschool_grounds', 'main'] }]);
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGradeCheck(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).class) (s as any).class = {}; (s as any).class['grade_check_day'] = ((s as any).daystart ?? 0);
  scene.text('<center><b>School Hallway</b></center>');
  scene.img(`images/locations/pavlovsk/school/building/grade_results${Math.floor(Math.random() * 2) + 1}.jpg`);
  if (((s as any).class ?? 0)?.['first_grade_check'] === 0) {
    if (!(s as any).class) (s as any).class = {}; (s as any).class['first_grade_check'] = 1;
    scene.text('You walk to the wall where the grades are posted and check your grades. You see that your final grade from last year is still there. Grades are updated every Monday, but you note your grade down in your journal so you can always check it.');
  } else {
    scene.text('You walk over to the wall where the grades are posted and check your grades to see what has changed since last week. You note your grade down in your journal so you can check it later.');
  }
  qspCall(s, 'grades', 'assign_grade_description', 'school');
  scene.text('Your grades are as follows:');
  scene.text('<table cellpadding="2" cellspacing="0">');
  // TODO-QSP: dynamic text: '<tr><td>Math:</td><td><<$class_grade_desc[''school_math_grade'']>></td><td>' + ...
  scene.text(`'<tr><td>Math:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_math_grade']}</td><td>' + $func('progressbar', 'positive', class['school_math_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_math_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Russian:</td><td><<$class_grade_desc[''school_rus_grade'']>></td><td>' ...
  scene.text(`'<tr><td>Russian:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_rus_grade']}</td><td>' + $func('progressbar', 'positive', class['school_rus_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_rus_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Literature:</td><td><<$class_grade_desc[''school_lit_grade'']>></td><td...
  scene.text(`'<tr><td>Literature:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_lit_grade']}</td><td>' + $func('progressbar', 'positive', class['school_lit_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_lit_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Art:</td><td><<$class_grade_desc[''school_art_grade'']>></td><td>' + $f...
  scene.text(`'<tr><td>Art:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_art_grade']}</td><td>' + $func('progressbar', 'positive', class['school_art_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_art_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Biology:</td><td><<$class_grade_desc[''school_bio_grade'']>></td><td>' ...
  scene.text(`'<tr><td>Biology:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_bio_grade']}</td><td>' + $func('progressbar', 'positive', class['school_bio_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_bio_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>English:</td><td><<$class_grade_desc[''school_eng_grade'']>></td><td>' ...
  scene.text(`'<tr><td>English:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_eng_grade']}</td><td>' + $func('progressbar', 'positive', class['school_eng_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_eng_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Geography:</td><td><<$class_grade_desc[''school_geo_grade'']>></td><td>...
  scene.text(`'<tr><td>Geography:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_geo_grade']}</td><td>' + $func('progressbar', 'positive', class['school_geo_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_geo_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Science:</td><td><<$class_grade_desc[''school_sci_grade'']>></td><td>' ...
  scene.text(`'<tr><td>Science:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_sci_grade']}</td><td>' + $func('progressbar', 'positive', class['school_sci_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_sci_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>History:</td><td><<$class_grade_desc[''school_his_grade'']>></td><td>' ...
  scene.text(`'<tr><td>History:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_his_grade']}</td><td>' + $func('progressbar', 'positive', class['school_his_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_his_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Shop:</td><td><<$class_grade_desc[''school_shop_grade'']>></td><td>' + ...
  scene.text(`'<tr><td>Shop:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_shop_grade']}</td><td>' + $func('progressbar', 'positive', class['school_shop_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_shop_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Computer:</td><td><<$class_grade_desc[''school_comp_grade'']>></td><td>...
  scene.text(`'<tr><td>Computer:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_comp_grade']}</td><td>' + $func('progressbar', 'positive', class['school_comp_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_comp_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>Music:</td><td><<$class_grade_desc[''school_mus_grade'']>></td><td>' + ...
  scene.text(`'<tr><td>Music:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_mus_grade']}</td><td>' + $func('progressbar', 'positive', class['school_mus_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_mus_grade']}</td></tr>'`);
  // TODO-QSP: dynamic text: '<tr><td>P.E.:</td><td><<$class_grade_desc[''school_pe_grade'']>></td><td>' + $f...
  scene.text(`'<tr><td>P.E.:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_pe_grade']}</td><td>' + $func('progressbar', 'positive', class['school_pe_grade'], 0, 0, 0, ', 'none', $temp_grade_thr) + '</td><td>${((s as any).class ?? 0)?.['school_pe_grade']}</td></tr>'`);
  scene.text('</table>');
  scene.text('A grade of 1 means "Very Poor" and is generally only used for absence. 2 means "Unsatisfactory" and is also a failing grade. 3 means "Satisfactory" and is a passing grade. 4 means "Good". 5 means "Excellent" and is only given to the best students. The number shown on the progress bar (0–100) is the internal variable grade that changes with your in-class actions; the letter grade beside it is the official mark.');
  qspCall(s, 'grades', 'grade above', 'school', 90);
  qspCall(s, 'grades', 'grade above', 'school', 70);
  qspCall(s, 'grades', 'grade above', 'school', 50);
  qspCall(s, 'grades', 'grade above', 'school', 40);
  if (((s as any).class ?? 0)?.['school_grades_above_90'] === 13) {
    scene.text('You\'re getting top marks in all your classes. You\'re one of the best, if not the best student in the entire school.');
  } else {
    if (((s as any).class ?? 0)?.['school_grades_above_90'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
      scene.text('You\'re getting top marks in more than half your classes and aren\'t failing any of the others. You\'re one of the best students in the school.');
    } else {
      if (((s as any).class ?? 0)?.['school_grades_above_90'] > 6) {
        scene.text('Even if you\'re failing some of your classes, you\'re getting top marks in more than half of them and are still one of the best students in the school. You should have no trouble getting into university.');
      } else {
        if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] === 13) {
          scene.text('You\'re only getting top marks in a few of your classes, but the rest of your grades are still good. You should have no trouble getting into university.');
        } else {
          if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] > 10  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] ===13) {
            scene.text('You\'re only getting top marks in some of your classes, but only a few of your grades are bad and you\'re not failing any classes. You should have no trouble getting into university, but improving your grades wouldn\'t hurt.');
          } else {
            if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] > 10) {
              scene.text('You\'re only getting top marks in a few of your classes and are failing others. You should improve your grades if you want to get into university.');
            } else {
              if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                scene.text('You\'re only getting top marks in some of your classes and a lot of bad grades, but you\'re not failing any classes. You need to improve your bad grades if you want to get into university.');
              } else {
                if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                  scene.text('You\'re getting top marks in a few of your classes, but are failing some of the others. You should improve your grades if you want to get into university.');
                } else {
                  if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 6) {
                    scene.text('You\'re getting top marks in a few of your classes, but are failing a lot of the others. You should improve your grades if you want to get into university.');
                  } else {
                    if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0) {
                      scene.text('Even a top mark or two won\'t help when you\'re failing more than half of your classes. You\'ll have to put a lot of work in if you want to go to university.');
                    } else {
                      if (((s as any).class ?? 0)?.['school_grades_above_70'] === 13) {
                        scene.text('You\'re getting good grades in all of your classes, but nothing impressive. You should have no trouble getting into university, but improving your grades wouldn\'t hurt.');
                      } else {
                        if (((s as any).class ?? 0)?.['school_grades_above_70'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] ===13) {
                          scene.text('You\'re getting good grades in over half of your classes, but nothing impressive. You\'re not failing any classes, but improving your grades wouldn\'t hurt.');
                        } else {
                          if (((s as any).class ?? 0)?.['school_grades_above_70'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] >10) {
                            scene.text('You\'re getting good grades in over half of your classes, but are failing others. You should improve your grades if you want to get into university.');
                          } else {
                            if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                              scene.text('You\'re getting good grades in a few of your classes, but nothing impressive. You\'re not failing any classes, but improving your grades wouldn\'t hurt.');
                            } else {
                              if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] >10) {
                                scene.text('You\'re getting good grades in a few of your classes, but are failing others. You should improve your grades if you want to get into university.');
                              } else {
                                if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] >6) {
                                  scene.text('You\'re getting good grades in a few of your classes, but are failing a lot of the others. You should improve your grades if you want to get into university.');
                                } else {
                                  if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0) {
                                    scene.text('A good grade or two isn\'t enough when you\'re failing more than half of your classes. It will require a lot of work for you to turn this around.');
                                  } else {
                                    if (((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                                      scene.text('You\'re not getting any good grades, but at least you\'re not failing any classes. It will require a lot of work if you want to go to university.');
                                    } else {
                                      if (((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                                        scene.text('Your grades are terrible and you\'re in danger of not graduating high school.');
                                      } else {
                                        if (((s as any).class ?? 0)?.['school_grades_above_40'] > 6) {
                                          scene.text('You\'re failing a lot of classes and are barely passing the rest. You won\'t graduate at this rate unless you get your grades up.');
                                        } else {
                                          scene.text('You\'re failing high school and need to do something about it right now if you want to graduate.');
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'morning':
      enterMorning(s, scene);
      break;
    case 'uniform_check':
      enterUniformCheck(s, scene);
      break;
    case 'short_break':
      enterShortBreak(s, scene);
      break;
    case 'skip':
      enterSkip(s, scene);
      break;
    case 'schedule':
      enterSchedule(s, scene);
      break;
    case 'grade_check':
      enterGradeCheck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_lessons: LocationDef = {
  name: 'gschool_lessons',
  title: 'School Hallway',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
