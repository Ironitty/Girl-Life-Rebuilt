import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_grounds', 'main');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'vicky_meynold_schedule', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'igor_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Outside School</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/pavlovsk/school/building/schoolwinter.jpg');
  } else {
    scene.img('images/locations/pavlovsk/school/building/gschool.jpg');
  }
  scene.text('Pavlovsk\'s only school, where all the local children go for their education. Next to the school is the athletic field and a parking lot for the teachers, with a large grove of trees just beyond them.');
  // TODO-QSP: dynamic text: Hidden behind these trees is the <a href="exec: minut += 1 & gt ''pav_old_school...
  scene.text('Hidden behind these trees is the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027pav_old_school/u0027, /u0027old_school/u0027); return false;">old school building</a>, which was supposed to be renovated and used for advanced classes after the new one was built, but budget cuts meant the project was cancelled and now the old building stands empty and abandoned. It\'s a popular spot for students to skip class or hang out outside of school.');
  if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  (((s as any).hour ?? 0) === 6  ||  (((s as any).hour ?? 0) > 13  &&  ((s as any).hour ?? 0) <= 15))  &&  ((s as any).cumloc ?? 0)[11] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (((((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) >= 30)  ||  (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 18))  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).suspended ?? 0)?.['on'] !== 1) {
    // TODO-QSP: dynamic text: With the school open, you can go to the <a href="exec: minut += 1 & gt ''gschool...
    scene.text('With the school open, you can go to the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027gschool_grounds/u0027, /u0027change_room/u0027); return false;">changing rooms</a> by the gym and change your outfit.');
  }
  if (((s as any).day ?? 0) === ((s as any).nyp_day ?? 0)  &&  ((s as any).month ?? 0) === 12  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 17) {
      scene.text('All of the boys and girls are standing near the school. Everyone did their best to look good today, wearing their nicest clothes.');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, are you coming to the New Year''s Eve party or not?" som...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, are you coming to the New Year's Eve party or not?" someone calls out to you. "You haven't paid the ${qspFunc(s, 'money', 'string_price', 1000)} entry fee yet!"`);
      scene.actions([
        { label: 'Go to the party', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: gs 'money', 'pay', 1000 & gt 'nyp_school', 'start'
    }
  } },
      ]);
    }
  }
  if (((s as any).InvitationToDimkaNYparty ?? 0) === 1  &&  ((s as any).day ?? 0) === 31  &&  ((s as any).day ?? 0) === ((s as any).nyp_day ?? 0)) {
    scene.actions([
      { label: 'Follow Dimka to the party at his house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspGoto(st, 'sny', '3');
  } },
    ]);
  }
  if (((s as any).hour ?? 0) === 14  &&  ((s as any).week ?? 0) < 6  &&  (!((s as any).kanikuli ?? 0))) {
    if (((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
      if (((s as any).week ?? 0) === 1  &&  (!((s as any).NikoIntro ?? 0))) {
        qspGoto(s, 'NikoEv', 'Intro');
      } else {
        if (((s as any).NikoVolkovQW ?? 0) === 5  &&  ((s as any).NikoEv ?? 0) === 6  &&  (!((s as any).NikoDate ?? 0))) {
          qspGoto(s, 'NikoDates', 'after_school');
        } else {
          if (((s as any).NikoVolkovQW ?? 0) === 5  &&  ((s as any).NikoEv ?? 0) === 8  &&  (!((s as any).NikoDate ?? 0))) {
            qspGoto(s, 'NikoDates', 'after_school2');
          }
        }
      }
    }
  }
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).afterschool_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).suspended ?? 0)?.['on'] !== 1  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    (s as any).afterschool_day = ((s as any).daystart ?? 0);
    if ((!(Math.floor(Math.random() * 4) + 0))) {
      (s as any).eventtype = 'after_school';
      qspGoto(s, 'gschool_events', 'break_events');
    } else {
      qspGoto(s, 'gschool_events', 'afterschool_events');
    }
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).cheerleaders_on ?? 0) === 1  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).suspended ?? 0)?.['on'] !== 1  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0) {
    if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 1) {
      if (((s as any).pregtime ?? 0) < 90) {
        qspGoto(s, 'gschool_cheerleading', 'tryouts');
      }
    } else {
      if (((s as any).cheerleadingQW ?? 0)?.['day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] > 1) {
        if (((s as any).week ?? 0) === 5  &&  (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] >= 3  ||  ((s as any).cheerleadingQW ?? 0)?.['backup_game'] === 1)) {
          qspGoto(s, 'gschool_cheerleading', 'afterschool_game');
        } else {
          qspGoto(s, 'gschool_cheerleading', 'afterschool_practice');
        }
      }
    }
  }
  if (((s as any).hour ?? 0) <= 8  &&  ((s as any).kanikuli ?? 0) === 6) {
    scene.text('Today is graduation day! The school prom is tonight as well.');
    scene.actions([
{ label: 'Go to your graduation', handler: (st: GameState) => {
    (st as any).hour = 10;
    (st as any).minut = 0;
    ((st as any).gschoolVars = (st as any).gschoolVars ?? {})['school_diploma'] = 1;
    (st as any).kanikuli = 7;
    qspCall(st, 'stat', '');
    if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
      // TODO-QSP: dynamic text: Everyone from your year is assembled in the auditorium of the school. Your teach...
      scene.text(`Everyone from your year is assembled in the auditorium of the school. Your teachers are standing on a platform in front of several rows of chairs where you and your classmates are sitting. Some parents and siblings are sitting in the back rows. You turn your head and see your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} and Kolka sitting among them.`);
    } else {
      scene.text('Everyone from your year is assembled in the auditorium of the school. Your teachers are standing on a platform in front of several rows of chairs where you and your classmates are sitting. Some parents and siblings are sitting in the back rows. Nobody from your family showed up.');
    }
    scene.text('The principal starts calling your classmates in alphabetical order before she finally gets to you.');
    if (((st as any).class ?? 0)?.['school_grade_average'] >= 90) {
      scene.text('You walk up to the podium and the principal shakes your hand.');
      // TODO-QSP: dynamic text: "I''d like to honor our best student of the year," she announces. "Miss <<$pcs_l...
      scene.text(`"I'd like to honor our best student of the year," she announces. "Miss ${((st as any).pcs_lastname ?? '')} here performed exceptionally well in her studies and I think that deserves some recognition."`);
      scene.text('She starts applauding and the auditorium quickly joins in.');
      if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
        // TODO-QSP: dynamic text: As you return to your place, you see your <<$npc_nickname[''A29'']>> smiling pro...
        scene.text(`As you return to your place, you see your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} smiling proudly.`);
      }
    } else {
      if (((st as any).class ?? 0)?.['school_grade_average'] >= 70) {
        scene.text('You walk up to the podium and the principal shakes your hand before giving you your diploma.');
        // TODO-QSP: dynamic text: "Well done, Miss <<$pcs_lastname>>!" she says before you return to your place.
        scene.text(`"Well done, Miss ${((st as any).pcs_lastname ?? '')}!" she says before you return to your place.`);
      } else {
        scene.text('You walk up to the podium and the principal shakes your hand before giving you your diploma.');
        scene.text('You then return to your place.');
      }
    }
    scene.actions([
      { label: 'Return to town', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
      { label: 'Go to the prom party', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 540;
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (70);
    qspCall(st, 'drugs', 'alcohol', 'vodka', (Math.floor(Math.random() * 2) + 2));
    qspCall(st, 'outfit', 'strip_all');
    qspCall(st, 'stat', '');
    scene.text('After the ceremony, everyone gets hammered at the prom party. When you wake up, your mouth is dry and you can taste and smell the alcohol on your breath as you feel a headache coming on. Looking around, you see that you\'re somewhere in the town center and that you\'re completely naked, with twigs and leaves stuck in your hair. You are a little alarmed when you notice that your clothes are missing.');
    scene.text('You\'re unable to find your clothes, so you cover yourself with your hands and stick to poorly lit areas as you make your way home. You try as hard as you can, but all you can remember are vague flashbacks of skinny dipping in the town fountain with a group of other students.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'go_straight_home');
  } },
    ]);
  } },
    ]);
  } },
]);
    return;
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === -1  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 14) {
    scene.actions([
      { label: 'Get your diploma', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    ((st as any).gschoolVars = (st as any).gschoolVars ?? {})['school_diploma'] = 1;
    (st as any).kanikuli = 7;
    qspCall(st, 'stat', '');
    if (((st as any).class ?? 0)?.['school_grade_average'] >= 70) {
      scene.text('The principal hands you your diploma.');
      // TODO-QSP: dynamic text: "Well done, Miss <<$pcs_lastname>>! Good luck in your future!" she says as she s...
      scene.text(`"Well done, Miss ${((st as any).pcs_lastname ?? '')}! Good luck in your future!" she says as she shakes your hand.`);
    } else {
      scene.text('The principal hands you your diploma.');
      scene.text('"Good luck in your future," she says as she shakes your hand.');
    }
    scene.actions([
      { label: 'Return to town', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 14  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).suspended ?? 0)?.['on'] !== 1) {
    if (((s as any).gschoolVars ?? 0)?.['last_attendance'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).PCloStyle2 ?? 0) !== 4  &&  ((s as any).cheatVars ?? 0)?.['school_clothing'] === 0) {
        scene.text('You\'re not allowed to attend any classes at school if you\'re not wearing your school uniform.');
      } else {
        if (((s as any).hour ?? 0) === 6) {
          if (((s as any).minut ?? 0) < 30) {
            scene.text('It\'s too early for school right now.');
          } else {
            if (((s as any).NikoEv ?? 0) === 10) {
              qspGoto(s, 'NikoWhore', 'Walk Of Shame');
            }
            scene.actions([
              { label: 'Wait for class', goto: ['gschool_grounds', 'building'] },
            ]);
          }
        } else {
          if (((s as any).hour ?? 0) === 7) {
            if (((s as any).NikoEv ?? 0) === 10) {
              qspGoto(s, 'NikoWhore', 'Walk Of Shame');
            }
            if (((s as any).minut ?? 0) <= 45) {
              scene.actions([
                { label: '<b>Go to class</b>', goto: ['gschool_grounds', 'building'] },
              ]);
            } else {
              scene.text('You\'re late for school! You could rush to class or just skip until the second period.');
              scene.actions([
                { label: '<b>Rush to class</b>', goto: ['gschool_grounds', 'building'] },
                { label: 'Skip class', handler: (st: GameState) => {
    scene.text('<center><b>School Hallway</b></center>');
    scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${(Math.floor(Math.random() * 3) + 0)}.jpg`);
    scene.text('You don\'t feel like attending all of your classes this morning and make your way to the bathroom.');
    scene.actions([
      { label: 'Go to girl\'s bathroom', goto: ['gschool_girls_bathroom', 'start'] },
      { label: 'Go to boy\'s bathroom', goto: ['gschool_boys_bathroom', 'start'] },
    ]);
  } },
              ]);
            }
          } else {
            if (((s as any).hour ?? 0) === 8) {
              if (((s as any).NikoEv ?? 0) === 10) {
                qspGoto(s, 'NikoWhore', 'Walk Of Shame');
              }
              scene.text('You missed your first class. You hope that no one noticed.');
              scene.actions([
                { label: '<b>Rush to class</b>', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10);
  }, goto: ['gschool_grounds', 'building'] },
              ]);
            } else {
              scene.text('It\'s too late for you to attend school now. You have been marked as absent today.');
            }
          }
        }
      }
    }
  }
  qspCall(s, 'camera', 'check_location');
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint behind the school building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'drugs', 'joint');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) === 8  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).detention_set ?? 0) === 1  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    scene.actions([
      { label: 'Go to detention', goto: ['gschool_detention', 'start'] },
    ]);
  }
  if (((s as any).christinaQW ?? 0)?.['pre_fight'] === 1  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 14  &&  (!((s as any).kanikuli ?? 0))) {
    scene.actions([
      { label: 'Attack Christina', handler: (st: GameState) => {
    qspGoto(st, 'Zvereva_events', 'KristinaFight');
  } },
    ]);
  }
  if (((s as any).suspended ?? 0)?.['on'] !== 1  &&  (!((s as any).kanikuli ?? 0))) {
    if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).dimaRevenge ?? 0) === 5  &&  (!((s as any).dimaRevChoice ?? 0))) {
      qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''));
    } else {
      if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 1) {
        qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''));
      } else {
        if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 5  &&  ((s as any).dimaRevChoice ?? 0) === 1) {
          qspGoto(s, 'dimaRevenge', '5', 'before');
        } else {
          if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 6  &&  ((s as any).dimaRevChoice ?? 0) === 1) {
            qspGoto(s, 'dimaRevenge', '6', 'before');
          } else {
            if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 1) {
              qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''));
            } else {
              if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 2) {
                qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''), 'day4jockbefore');
              } else {
                if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 5  &&  ((s as any).dimaRevChoice ?? 0) === 2) {
                  qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''), 'day5jockbefore');
                } else {
                  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).dimaRevenge ?? 0) === 6  &&  ((s as any).dimaRevChoice ?? 0) === 2) {
                    qspGoto(s, 'dimaRevenge', '5', 'day5jockafter');
                  } else {
                    if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 5  &&  ((s as any).dimaRevChoice ?? 0) === 3) {
                      qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''));
                    } else {
                      if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 4) {
                        qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''), 'after');
                      } else {
                        if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 5  &&  ((s as any).dimaRevChoice ?? 0) === 4) {
                          qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''), 'before');
                        } else {
                          if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 14  &&  ((s as any).dimaRevenge ?? 0) === 6  &&  ((s as any).dimaRevChoice ?? 0) === 4) {
                            qspGoto(s, 'dimaRevenge', '5', 'after');
                          } else {
                            if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 4  &&  ((s as any).dimaRevengedaystart ?? 0) >= ((s as any).daystart ?? 0)) {
                              qspGoto(s, 'dimaRevenge', '6');
                            } else {
                              if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 5  &&  ((s as any).dimaRevChoice ?? 0) === 5) {
                                qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''), 'before');
                              } else {
                                if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 5) {
                                  qspGoto(s, 'dimaRevenge', '5');
                                } else {
                                  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 6) {
                                    qspGoto(s, 'dimaRevenge', ((s as any).dimaRevenge ?? ''));
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
  if (((s as any).hour ?? 0) >= 14  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  ((s as any).SchoolGossip ?? 0) > 0  &&  ((s as any).afterschoolday ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'gschool_sex', 'suck');
  }
  if (((s as any).hour ?? 0) === 14  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    if (((s as any).ivan_afterschool ?? 0) === 1) {
      scene.actions([
        { label: 'Meet Ivan after school', goto: ['gschool_sex', 'afterschool'] },
      ]);
    }
    if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
      if (((s as any).anushkaQW ?? 0)?.['first_visit'] === 0  &&  ((s as any).meet_after_school ?? 0) === 1) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anushka/u0027, /u0027meet_after_school/u0027); return false;">Anushka</a> is leaning against a tree just in front of the school.');
      }
      if (((s as any).radomirQW ?? 0)?.['first_visit'] === 0  &&  ((s as any).radomirQW ?? 0)?.['meet_after_school'] === 1) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027radapt/u0027, /u0027meet_after_school/u0027); return false;">Radomir</a> is leaning against a tree just in front of the school.');
      }
      if (((s as any).LariskaQW ?? 0)?.['story'] >= 5  &&  (!((s as any).cheerleaders_on ?? 0))) {
        // TODO-QSP: dynamic text: You see <a href="exec:minut += 1 & gt ''LariskaGo''">Lariska</a> impatiently wal...
        scene.text('You see <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027LariskaGo/u0027, /u0027/u0027); return false;">Lariska</a> impatiently walks back and fourth across the courtyard, as if she\'s waiting for someone.');
      }
      if (((s as any).christinaQW ?? 0)?.['subpath'] >= 4  &&  (!((s as any).cheerleaders_on ?? 0))) {
        // TODO-QSP: dynamic text: <a href="exec:minut += 1 & gt ''Zvereva_house_events'', ''Chris_walk_home''">Chr...
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027Zvereva_house_events/u0027, /u0027Chris_walk_home/u0027); return false;">Christina Zvereva</a> is walking across the school courtyard, looking irritated.');
      }
      if (((s as any).juliaQW ?? 0)?.['study_unlocked'] >= 1) {
        // TODO-QSP: dynamic text: <a href="exec:minut += 1 & gt ''JuliaMilHome'', ''julia_go''">Julia</a> is sitti...
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027JuliaMilHome/u0027, /u0027julia_go/u0027); return false;">Julia</a> is sitting out on the courtyard, reading a book.');
      }
      if (((s as any).NatbelQW ?? 0)?.['QWstage'] > 0  &&  ((s as any).NatbelQW ?? 0)?.['blocked'] !== 1) {
        // TODO-QSP: dynamic text: <a href="exec:minut += 1 & gt ''natbelEv'', ''natbel_go''">Natasha</a> is standi...
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027natbelEv/u0027, /u0027natbel_go/u0027); return false;">Natasha</a> is standing in a corner.');
      }
      if (((s as any).artemLernQW ?? 0) >= 1  &&  ((s as any).artemVitokQW ?? 0) !== 2  &&  ((s as any).artemQW ?? 0)?.['artemblok'] === 0  &&  ((s as any).artemQW ?? 0)?.['artlie'] !== 2  &&  ((s as any).artemQW ?? 0)?.['artembrokenheart'] !== 1) {
        // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt ''artem_events'', ''start''">Artem</a> is waiting...
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027artem_events/u0027, /u0027start/u0027); return false;">Artem</a> is waiting for you near the school entrance.');
      }
      if (((s as any).katjaQW ?? 0)?.['afterschool_hangout_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 1  &&  ((s as any).locat ?? 0)?.['katja'] === 6) {
        // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt ''katjaEv''">Katja</a> is walking across the scho...
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027katjaEv/u0027, /u0027/u0027); return false;">Katja</a> is walking across the school courtyard, getting ready to go home.');
      }
      if (((s as any).DimaBeHomeOnce ?? 0) === 1  &&  (!((s as any).DimaRudeBlock ?? 0))) {
        // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt ''dimaEv'', ''after_school''">Dimka</a> is deep i...
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027dimaEv/u0027, /u0027after_school/u0027); return false;">Dimka</a> is deep in thought, as he leans against a lamp post.');
      } else {
        if (((s as any).DimaRudeQW ?? 0) > 0  &&  ((s as any).dimarudeday ?? 0) !== ((s as any).daystart ?? 0)  &&  (!((s as any).DimaRudeBlock ?? 0))) {
          if ((!(Math.floor(Math.random() * 5) + 0))) {
            qspGoto(s, 'dimaEv', 'after_school');
          }
          // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt ''dimaEv'', ''after_school''">Dimka</a> is deep i...
          scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027dimaEv/u0027, /u0027after_school/u0027); return false;">Dimka</a> is deep in thought, as he leans against a lamp post.');
        }
      }
      if ((((s as any).IgorQW ?? 0)?.['history'] === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] > 0)  &&  ((s as any).IgorQW ?? 0)?.['daystart'] !== ((s as any).daystart ?? 0)  &&  ((s as any).IgorQW ?? 0)?.['block'] === 0  &&  ((s as any).locat ?? 0)?.['igor'] === 6) {
        // TODO-QSP: dynamic text: <a href="exec:minut += 15 & IgorQW[''daystart''] = daystart & gt ''igorhome'', '...
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; (s.IgorQW ??= {})/u0027daystart/u0027 = s.daystart; return s; }); window.__gameStore.getState().doGoto(/u0027igorhome/u0027, /u0027entrance/u0027); return false;">Igor</a> is talking to some of his friends on the courtyard.');
      }
      if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).kotovVSkozlov ?? 0) === 1) {
        scene.text('You can see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027FedorEv/u0027, /u0027Strela Chat/u0027); return false;">Fedor</a> sitting in the corner of the schoolyard by himself.');
      } else {
        if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).fedorkozqw ?? 0) === 2  &&  ((s as any).FedorLuv ?? 0) < -4) {
          scene.text('You can see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027FedorEv2/u0027, /u0027Fedor Breakup/u0027); return false;">Fedor</a> standing by himself with a troubled look on his face.');
        } else {
          if (((s as any).fedorKozlovQW ?? 0) >= 10) {
            scene.text('You can see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027FedorEv/u0027, /u0027Start/u0027); return false;">Fedor</a> standing by himself, his backpack around his arm.');
          }
        }
      }
      if (((s as any).NikoVolkovQW ?? 0) >= 5  &&  ((s as any).NikoDate ?? 0) === 1  &&  ((s as any).NikoNextDate_day ?? 0) <= ((s as any).daystart ?? 0)  ||  ((s as any).NikoEv ?? 0) === 11) {
        scene.text('You can see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NikoEv/u0027, /u0027niko_dates/u0027); return false;">Nikolai Volkov</a> smoking outside of the school.');
      } else {
        if (((s as any).NikoVolkovQW ?? 0) >= 10  &&  ((s as any).NikoEv ?? 0) >= 17  &&  ((s as any).NikoEv ?? 0) <= 20  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NikoEv2/u0027, /u0027Events/u0027); return false;">Nikolai</a> is smoking outside of the school.');
        }
      }
    } else {
      (s as any).st_count = 0;
      (s as any).show_table = '';
      if (((s as any).anushkaQW ?? 0)?.['first_visit'] === 0  &&  ((s as any).meet_after_school ?? 0) === 1) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027anushka/u0027, /u0027meet_after_school/u0027); return false;">Anushka Konstantinov</a>', '5');
      }
      if (((s as any).radomirQW ?? 0)?.['first_visit'] === 0  &&  ((s as any).radomirQW ?? 0)?.['meet_after_school'] === 1) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027radapt/u0027, /u0027meet_after_school/u0027); return false;">Radomir</a>', '5');
      }
      if (((s as any).LariskaQW ?? 0)?.['story'] >= 5  &&  (!((s as any).cheerleaders_on ?? 0))) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027LariskaGo/u0027, /u0027/u0027); return false;">Lariska Gruzdev</a>', '5');
      }
      if (((s as any).christinaQW ?? 0)?.['subpath'] >= 4  &&  (!((s as any).cheerleaders_on ?? 0))) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027Zvereva_house_events/u0027, /u0027Chris_walk_home/u0027); return false;">Christina Zvereva</a>', '5');
      }
      if (((s as any).juliaQW ?? 0)?.['study_unlocked'] >= 1) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027JuliaMilHome/u0027, /u0027julia_go/u0027); return false;">Julia Milova</a>', '5');
      }
      if (((s as any).NatbelQW ?? 0)?.['QWstage'] > 0) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027natbelEv/u0027, /u0027natbel_go/u0027); return false;">Natasha Belova</a>', '5');
      }
      if (((s as any).artemLernQW ?? 0) >= 1  &&  ((s as any).artemVitokQW ?? 0) !== 2  &&  ((s as any).artemQW ?? 0)?.['artemblok'] === 0  &&  ((s as any).artemQW ?? 0)?.['artlie'] !== 2  &&  ((s as any).artemQW ?? 0)?.['artembrokenheart'] !== 1) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027artem_events/u0027, /u0027start/u0027); return false;">Artem Chebotarev</a>', '5');
      }
      if (((s as any).katjaQW ?? 0)?.['afterschool_hangout_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 1  &&  ((s as any).locat ?? 0)?.['katja'] === 6) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027katjaEv/u0027, /u0027/u0027); return false;">Katja Meynold</a>', '5');
      }
      if (((s as any).DimaBeHomeOnce ?? 0) === 1  &&  (!((s as any).DimaRudeBlock ?? 0))) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027dimaHome/u0027, /u0027home/u0027); return false;">Dimka Nosov</a>', '5');
      } else {
        if (((s as any).DimaRudeQW ?? 0) > 0  &&  ((s as any).dimarudeday ?? 0) !== ((s as any).daystart ?? 0)  &&  (!((s as any).DimaRudeBlock ?? 0))) {
          if ((!(Math.floor(Math.random() * 5) + 0))) {
            qspGoto(s, 'dimaEv', 'after_school');
          }
          qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027dimaEv/u0027, /u0027after_school/u0027); return false;">Dimka Nosov</a>', '5');
        }
      }
      if ((((s as any).IgorQW ?? 0)?.['history'] === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] > 0)  &&  ((s as any).IgorQW ?? 0)?.['daystart'] !== ((s as any).daystart ?? 0)  &&  ((s as any).IgorQW ?? 0)?.['block'] === 0  &&  ((s as any).locat ?? 0)?.['igor'] === 6) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; (s.IgorQW ??= {})/u0027daystart/u0027 = s.daystart; return s; }); window.__gameStore.getState().doGoto(/u0027igorhome/u0027, /u0027entrance/u0027); return false;">Igor Kruglov</a>', '5');
      }
      if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).kotovVSkozlov ?? 0) === 1) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027FedorEv/u0027, /u0027Strela Chat/u0027); return false;">Fedor</a>', '5');
      } else {
        if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).fedorkozqw ?? 0) === 2  &&  ((s as any).FedorLuv ?? 0) < -4) {
          qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027FedorEv2/u0027, /u0027Fedor Breakup/u0027); return false;">Fedor</a>', '5');
        } else {
          if (((s as any).fedorKozlovQW ?? 0) >= 10) {
            qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027FedorEv/u0027, /u0027Start/u0027); return false;">Fedor</a>', '5');
          }
        }
      }
      if (((s as any).NikoVolkovQW ?? 0) === 5  &&  ((s as any).NikoDate ?? 0) === 1  &&  ((s as any).NikoNextDate_day ?? 0) <= ((s as any).daystart ?? 0)  ||  ((s as any).NikoEv ?? 0) === 11) {
        qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NikoEv/u0027, /u0027niko_dates/u0027); return false;">Nikolai</a>', '5');
      } else {
        if (((s as any).NikoVolkovQW ?? 0) === 10  &&  ((s as any).NikoEv ?? 0) >= 17  &&  ((s as any).NikoEv ?? 0) <= 20  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
          qspCall(s, 'show_table', '', '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NikoEv2/u0027, /u0027Events/u0027); return false;">Nikolai</a>', '5');
        }
      }
      if (((s as any).st_count ?? 0) > 0) {
        scene.text('Near the schoolyard, you see: ');
        // TODO-QSP: dynamic text: <table BORDER=1><<$show_table>></tr></table>
        scene.text(`<table BORDER=1>${((s as any).show_table ?? '')}</tr></table>`);
      }
    }
    if (((s as any).AlbinaQW ?? 0)?.['albride'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['RideDaystart'] <= ((s as any).daystart ?? 0)  &&  ((s as any).AlbinaQW ?? 0)?.['Chernov'] > 0  &&  (!((s as any).cheerleaders_on ?? 0))) {
      // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt ''albina_starlets_aftermath''">Albina</a> is stan...
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027albina_starlets_aftermath/u0027, /u0027/u0027); return false;">Albina</a> is standing next to a car parked near the school.');
    }
    if (((s as any).hour ?? 0) === 14  &&  ((s as any).vicky_afterschool ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'mey_vika_events', 'near_school');
    }
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 35  ||  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 36  &&  ((s as any).minut ?? 0) < 45) {
      scene.actions([
        { label: 'Study with Tamara', handler: (st: GameState) => {
    if (((st as any).mey_vika ?? 0)?.['mey_vika_qw'] === 36) {
      qspGoto(st, 'mey_tamara_events', 'rebuke');
    }
    qspGoto(st, 'mey_tamara_events', 'learning0');
  } },
      ]);
    }
  }
  if (((s as any).strelaDay ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).strelaQW ?? 0) === 1  &&  ((s as any).hour ?? 0) === 14) {
    scene.text('A Mitsubishi Pajero and a BMW drive up to the school gates and strong, muscular men in leather jackets and tracksuits get out of them. They have come to meet Vitek, Dan and Vasily. You watch them talk about something, although you\'re not close enough to hear what it\'s about.');
    // TODO-QSP: dynamic text: You then notice Fedor leaving the school, his face swollen and bruised, and he w...
    scene.text(`You then notice Fedor leaving the school, his face swollen and bruised, and he waves at you. "${((s as any).pcs_nickname ?? '')}! Come here, you're my witness!"`);
    scene.actions([
      { label: 'Go and see what he needs', goto: ['strela', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to town', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    { label: 'Go to the sports field', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'sports'] },
    { label: 'Go to old school building', goto: ['pav_old_school', 'old_school'] },
  ]);
  scene.build();
}

function enterSports(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_grounds', 'sports');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'Zvereva_schedule', '');
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) > 3  &&  ((s as any).month ?? 0) < 11) {
    scene.img('images/locations/pavlovsk/school/grounds/field.jpg');
  } else {
    scene.img('images/locations/pavlovsk/school/grounds/fieldwinter.jpg');
  }
  scene.text('There is a football field near the school with a large track circling around it. Students often use the field and track before and after school.');
  if (((s as any).week ?? 0) === 5  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 18) {
    // TODO-QSP: dynamic text: 'As you pass by the sports field, you hear lots of cheering and yelling coming f...
    scene.text('As you pass by the sports field, you hear lots of cheering and yelling coming from the younger kids on the field. As you approach, you see ' + ((((s as any).socialchg ?? 0)?.['tLazar_day'] !== ((s as any).daystart ?? 0)) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gschool_socialchg1/u0027, /u0027tLazar/u0027); return false;">Lazar</a>') : ('Lazar')) + ' on the football field showing off his skills.');
  }
  if ((((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3)  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 18) {
    // TODO-QSP: dynamic text: 'Looking toward what you can barely describe as a running track, you notice '+ii...
    scene.text('Looking toward what you can barely describe as a running track, you notice ' + ((((s as any).socialchg ?? 0)?.['tSvyatoslav_day'] !== ((s as any).daystart ?? 0)) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gschool_socialchg1/u0027, /u0027tSvyatoslav/u0027); return false;">Svyatoslav</a>') : ('Svyatoslav')) + ' doing sprints by the football field.');
  }
  if ((!((s as any).PSport ?? 0))) {
    scene.text('You could go for a run here if you were wearing sports clothes and shoes.');
  } else {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
      scene.actions([
        { label: 'Go for a run (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
      ]);
    } else {
      if (((s as any).pcs_energy ?? 0) < 5) {
        scene.actions([
          { label: 'Go for a run (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re so hungry you can''t face ...
  } },
        ]);
      } else {
        if (((s as any).pcs_hydra ?? 0) < 5) {
          scene.actions([
            { label: 'Go for a run (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re so thristy you can''t face...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go for a run (1:00)', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier1', 60, 'run');
    if (((st as any).month ?? 0) >= 3  &&  ((st as any).month ?? 0) <= 9) {
      scene.img('images/locations/pavlovsk/school/grounds/runsummer.jpg');
    } else {
      scene.img('images/locations/pavlovsk/school/grounds/runwinter.jpg');
    }
    scene.text('You spend an hour running on the track.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (!((s as any).kanikuli ?? 0))) {
    // TODO-QSP: dynamic text: With the school open, you can go to the <a href="exec: minut += 1 & gt ''gschool...
    scene.text('With the school open, you can go to the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027gschool_grounds/u0027, /u0027change_room/u0027); return false;">changing rooms</a> by the gym and change your outfit.');
  }
  if (((s as any).week ?? 0) === 6  &&  ((s as any).runnerQW ?? 0)?.['pav_racetype'] === 2  &&  ((s as any).hour ?? 0) === 10  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    scene.text('Athletic students of your school and other schools in the area have gathered at the athletics track near your school. Everyone is getting ready for the running competition.');
    if (((s as any).PSport ?? 0)) {
      scene.actions([
        { label: 'Participate in the 400m sprint event', goto: ['gschool_grounds', 'SchoolRun2'] },
      ]);
    } else {
      scene.text('You need to wear exercise clothes to participate.');
    }
  }
  if (((s as any).week ?? 0) === 6  &&  ((s as any).runnerQW ?? 0)?.['pav_racetype'] === 1  &&  ((s as any).hour ?? 0) === 10  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    scene.text('Athletic students of your school and other schools in the area have gathered at the athletics track near your school. Everyone is getting ready for the running competition.');
    if (((s as any).PSport ?? 0)) {
      scene.actions([
        { label: 'Participate in the 400m sprint race', goto: ['gschool_grounds', 'SchoolRun'] },
      ]);
    } else {
      scene.text('You need to wear exercise clothes to participate.');
    }
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).fbpickupDay ?? 0) + 14 <= ((s as any).daystart ?? 0)  &&  ((s as any).bbpickupDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('As you pass by the sports field, you notice that most of the jocks have gathered around the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fbgameout/u0027, /u0027start/u0027); return false;">football field</a>.');
  } else {
    if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).bbpickupDay ?? 0) + 14 <= ((s as any).daystart ?? 0)  &&  ((s as any).fbpickupDay ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('As you pass by the sports field, you notice that most of the jocks have gathered around the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bbgameout/u0027, /u0027start/u0027); return false;">basketball court</a>.');
    }
  }
  qspCall(s, 'brother', 'bro_school_field');
  if (((s as any).locat ?? 0)?.['Christina'] === 16) {
    scene.text('Christina and Lina are here, stretching before the upcoming race.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the sports field', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterBuilding(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_grounds', 'building');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  if (((s as any).therapistFuckedPussyScene ?? 0) === 1) {
    qspGoto(s, 'therapist', 'therapistFucked');
  }
  scene.text('<center><b>Inside School</b></center>');
  scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${(Math.floor(Math.random() * 3) + 0)}.jpg`);
  scene.text('The hallways of the school building are painted with a cheap green paint, which you think may be toxic. Budget cuts.');
  if (((s as any).dimaRevenge ?? 0) === 1) {
    scene.text('You\'re in a good mood today as you enter the school. That changes when Dimka stops you in the hall on the way to class.');
    scene.text('"I know what you did, bitch. Did you really think I wouldn\'t figure out it was you that wiped my hard drive?"');
    scene.text('Before you can deny anything, he continues, "I don\'t even need that video to ruin your life. Just you wait. Soon the whole school will know what a whore you are."');
    scene.text('His words fill you with dread as you make your way to class.');
  }
  if (((s as any).starlets_missed ?? 0) === 1) {
    (s as any).starlets_missed = 0;
    (s as any).starlet_practice_skipped = ((s as any).starlet_practice_skipped ?? 0) + (1);
    if (((s as any).starlet_practice_skipped ?? 0) === 1) {
      qspCall(s, 'npc_relationship', 'modify', 'A23', (-10));
      // TODO-QSP: dynamic text: As you walk down the hallway, you see an annoyed Albina waiting for you, her arm...
      scene.text(`As you walk down the hallway, you see an annoyed Albina waiting for you, her arms crossed as she glares at you. "Where the fuck were you ${((s as any).pcs_nickname ?? '')}?! And don't fucking lie to me!"`);
      scene.text('"Sorry, Albina. I… had a family thing I had to deal with and I didn\'t have time to tell you…" you meekly reply.');
      scene.text('She doesn\'t look completely convinced. "Right… Well if you care about your place on the team, then you\'ll be at the next training session on time. No excuses."');
      scene.text('You nod at her and she gives you a pat on the shoulder before walking away. It looks like you got off lightly this time.');
    } else {
      if (((s as any).starlet_practice_skipped ?? 0) === 2) {
        qspCall(s, 'npc_relationship', 'modify', 'A23', (-20));
        scene.text('You notice Albina angrily watching you walk down the hallway towards her and she drags you to the side when you reach her.');
        // TODO-QSP: dynamic text: "Skipping training <i>again</i>, <<$pcs_nickname>>?! I thought I told you that y...
        scene.text(`"Skipping training <i>again</i>, ${((s as any).pcs_nickname ?? '')}?! I thought I told you that you were to be there on time <b>no excuses</b>?! I don't care about what miserable story you have to defend yourself with. You either commit to the squad or you're out. This is your final warning ${((s as any).pcs_nickname ?? '')}, don't fucking test me!"`);
        scene.text('You don\'t have a chance to speak before she storms off. Maybe it\'s best for both of you if you stopped pissing her off?');
      } else {
        ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['StarletsJoined'] = (-1);
        qspCall(s, 'calendar', 'pack', 'remove', 'starlets');
        qspCall(s, 'npc_relationship', 'set', 'A23', 10);
        scene.text('You are walking down the hallway and freeze when you clock a furious Albina heading straight for you. You barely have time to react before she grabs your shirt and forcefully slams you into the lockers, silencing the hall as everyone looks at you.');
        scene.text('Albina glares directly into your eyes. "ARE YOU DOING THIS TO MOCK ME YOU FUCKING BITCH?! I GAVE YOU ONE. LAST. FUCKING. CHANCE AND YOU THROW IT BACK IN MY FUCKING FACE?!" She tightens her grips as she gets up in your face. "You\'re done with the Starlets. If I <i>ever</i> see you anywhere near us, you better hope that I\'m in a good fucking mood, bitch!"');
        scene.text('She releases you and angrily storms off, shoving other students out of her way. You compose yourself and continue on your way, trying to ignore the stares.');
      }
    }
  }
  if ((((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3  ||  ((s as any).week ?? 0) === 5)  &&  (((s as any).christinaQW ?? 0)?.['fight'] === -1  ||  ((s as any).christinaQW ?? 0)?.['submit'] === 1)  &&  ((s as any).christinaQW ?? 0)?.['subpath'] < 3) {
    if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
      scene.text('Christina approaches you. "Have you recovered from your ass-kicking yet? At least you understand your place now. I\'m looking forward to after P.E. class today!"');
      scene.text('"W-What happens after P.E. class?" you meekly ask.');
      scene.text('Without answering, she simply smirks at you and walks away.');
    } else {
      scene.text('Christina approaches you. "Hello, pet. I\'m looking forward to after P.E. class today!"');
      scene.text('"W-What happens after P.E. class?" you meekly ask.');
      scene.text('Without answering, she simply smirks at you and walks away.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) === 8) {
      (st as any).late = 1;
    }
    qspCall(st, 'stat', '');
    ((st as any).gschoolVars = (st as any).gschoolVars ?? {})['attendance_count'] = ((st as any).gschoolVars['attendance_count'] ?? 0) + (1);
    qspCall(st, 'Zvereva_events', 'cikl');
    if (((st as any).christinaQW ?? 0)?.['set_bully'] === 0) {
      qspGoto(st, 'Zvereva_events', 'christina_bu_1');
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 0  ||  ((st as any).hour ?? 0) > 7) {
        qspGoto(st, 'gschool_lessons', 'morning');
      } else {
        if ((!(Math.floor(Math.random() * 4) + 0))) {
          qspGoto(st, 'gschool_events', 'teacher_greet');
        } else {
          (st as any).eventtype = 'before_school';
          qspGoto(st, 'gschool_events', 'break_events');
        }
      }
    }
  } },
    { label: 'Return to town', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterSchoolRun(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.text('You think you might be able to win and sign up to participate in the competition. After quickly changing into your running gear you return to the track. The guys are having their race first, and you watch them as you prepare. As expected, Ivan wins. When the guys have finished, it is the girls\' turn.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the start', handler: (st: GameState) => {
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['pav_racetype'] = 0;
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['races_ran'] = ((st as any).runnerQW['races_ran'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/begsor.jpg');
    scene.text('The 400m sprint event for girls is up next. You take off your jacket and go to the starting line, mentally preparing yourself for the race.');
    scene.text('On your marks…');
    scene.text('Get set…');
    scene.text('Go!');
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['bmi_penalty'] = 0;
    if (((st as any).pcs_bmi ?? 0) > 25) {
      ((st as any).runnerQW = (st as any).runnerQW ?? {})['bmi_penalty'] = ((((st as any).pcs_bmi ?? 0) - 25)*4);
    } else {
      if (((st as any).pcs_bmi ?? 0) < 20) {
        ((st as any).runnerQW = (st as any).runnerQW ?? {})['bmi_penalty'] = ((20 - ((st as any).pcs_bmi ?? 0))*(20-((st as any).pcs_bmi ?? 0)));
      }
    }
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['result'] = ((st as any).pcs_run ?? 0) - (((st as any).runnerQW ?? {})?.['bmi_penalty'] ?? 0);
    qspCall(st, 'willpower', 'skill_base', 'run', 'self', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Give it your best', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give it your best', handler: (st: GameState) => {
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['result'] = ((st as any).runnerQW['result'] ?? 0) + (10);
    qspCall(st, 'willpower', 'pay', 'self');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSchoolRunResult(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Run', handler: (st: GameState) => {
    qspCall(st, 'gschool_grounds', 'SchoolRun_result');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSchoolRunResult(s: GameState, scene: SceneBuilder): void {
  if (((s as any).runnerQW ?? 0)?.['result'] < 10) {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    scene.text('You barely manage to reach the finish line at all. There\'s no point in checking where you finished; you already know you were last by quite a large margin.');
  } else {
    if (((s as any).runnerQW ?? 0)?.['result'] < 15) {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      scene.text('You struggle to keep up with the other girls and finish in last place.');
    } else {
      if (((s as any).runnerQW ?? 0)?.['result'] < 20) {
        scene.text('You run as fast as you can, but only manage to finish second to last.');
      } else {
        if (((s as any).runnerQW ?? 0)?.['result'] < 25) {
          scene.text('You run as fast as you can, but only manage to take 6th place.');
        } else {
          if (((s as any).runnerQW ?? 0)?.['result'] < 30) {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
            scene.text('You run as fast as you can, but only manage to take 5th place.');
          } else {
            if (((s as any).runnerQW ?? 0)?.['result'] < 35) {
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
              scene.text('You run as fast as you can, but only manage to take 4th place.');
            } else {
              if (((s as any).runnerQW ?? 0)?.['result'] < 45) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (2);
                scene.text('You run as fast as you can and manage to take 3rd place. Mr. Pavlovich, the P.E. teacher at your school, congratulates you.');
              } else {
                if (((s as any).runnerQW ?? 0)?.['result'] < 50) {
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (3);
                  scene.text('You run as fast as you can and manage to take 2nd place. Mr. Pavlovich, the P.E. teacher at your school, congratulates you on your achievement.');
                } else {
                  ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_wins1'] = ((s as any).runnerQW['pav_wins1'] ?? 0) + (1);
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (5);
                  scene.text('You run as fast as you can and manage to reach the finish line first. Mr. Pavlovich, the P.E. teacher at your school, congratulates you on winning the competition as you walk around with your arms raised in triumph.');
                }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'exercise', 'tier2', 30, 'run');
  if (((s as any).runnerQW ?? 0)?.['pav_wins1'] === 3  &&  ((s as any).runnerQW ?? 0)?.['pav_stage'] === 0) {
    ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_stage'] = 1;
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] < 1) {
      scene.text('You have won the school running competition three times now and Mr. Pavlovich, the P.E. teacher at your school, announces that your success has not gone unnoticed. He smiles and awards you the third tier sports trophy in running, which you proudly accept and show to everyone.');
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['prof_stage'] = 1;
    } else {
      scene.text('You have won the school running competition three times now and Mr. Pavlovich, the P.E. teacher at your school, smiles and awards you a local competition trophy which you proudly accept and show to everyone.');
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).runnerQW ?? 0)?.['result'] >= 50) {
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'Family extension'] },
    ]);
  } else {
    scene.actions([
      { label: 'Return to town', goto: ['gschool_grounds', 'main'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSchoolRun2(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.text('You think you might be able to win and sign up to participate in the competition.');
  scene.text('After quickly changing into your running gear, you return to the track. The guys are having their race first, and you watch them as you prepare. As expected, Ivan wins.');
  scene.text('When the guys have finished, it\'s the girls\' turn.');
  if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
    if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 0) {
      scene.text('You find Lina at the starting line with a smile on her face. Seeing you, she waves.');
      // TODO-QSP: dynamic text: "Good luck, <<$pcs_nickname>>!" she calls out cheerfully.
      scene.text(`"Good luck, ${((s as any).pcs_nickname ?? '')}!" she calls out cheerfully.`);
    } else {
      if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 1) {
        scene.text('You find Lina at the starting line with a smile on her face. Seeing you, she waves.');
        // TODO-QSP: dynamic text: "I''m going to get you this time, <<$pcs_nickname>>!" she says.
        scene.text(`"I'm going to get you this time, ${((s as any).pcs_nickname ?? '')}!" she says.`);
      } else {
        if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 2) {
          scene.text('You find Lina at the starting line with a smile on her face. Seeing you, she waves.');
          // TODO-QSP: dynamic text: "You''re not going to get me a third time, <<$pcs_nickname>>!"
          scene.text(`"You're not going to get me a third time, ${((s as any).pcs_nickname ?? '')}!"`);
        }
      }
    }
  } else {
    if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 0) {
      scene.text('You see Christina getting ready at the starting line.');
      scene.text('She just scoffs at you. "You\'ll never beat me!"');
    } else {
      if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 1) {
        scene.text('You see Christina getting ready at the starting line.');
        scene.text('She looks at you angrily. "You beat me once, but never again!"');
      } else {
        if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 2) {
          scene.text('You see Christina getting ready at the starting line.');
          scene.text('She looks at you with pure hatred. "You again? You\'re going down this time, bitch! I promise!"');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the start', handler: (st: GameState) => {
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['races_ran'] = ((st as any).runnerQW['races_ran'] ?? 0) + (1);
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['pav_racetype'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/begsor.jpg');
    scene.text('The 400m sprint event for girls is up next. You take off your jacket and go the starting line, mentally preparing yourself for the race.');
    scene.text('On your marks…');
    scene.text('Get set…');
    scene.text('Go!');
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['bmi_penalty'] = 0;
    if (((st as any).pcs_bmi ?? 0) > 25) {
      ((st as any).runnerQW = (st as any).runnerQW ?? {})['bmi_penalty'] = ((((st as any).pcs_bmi ?? 0) - 25)*4);
    } else {
      if (((st as any).pcs_bmi ?? 0) < 18) {
        ((st as any).runnerQW = (st as any).runnerQW ?? {})['bmi_penalty'] = ((25 - ((st as any).pcs_bmi ?? 0))*6);
      }
    }
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['result'] = ((st as any).pcs_run ?? 0) - (((st as any).runnerQW ?? {})?.['bmi_penalty'] ?? 0);
    qspCall(st, 'willpower', 'skill_base', 'run', 'self', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Give it your best', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give it your best', handler: (st: GameState) => {
    ((st as any).runnerQW = (st as any).runnerQW ?? {})['result'] = ((st as any).runnerQW['result'] ?? 0) + (10);
    qspCall(st, 'willpower', 'pay', 'self');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSchoolRun2Result(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Run', handler: (st: GameState) => {
    qspCall(st, 'gschool_grounds', 'SchoolRun2_result');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSchoolRun2Result(s: GameState, scene: SceneBuilder): void {
  if (((s as any).runnerQW ?? 0)?.['result'] < 10) {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    scene.text('You barely manage to reach the finish line at all. There\'s no point in checking where you finished; you already know you were last by quite a large margin.');
  } else {
    if (((s as any).runnerQW ?? 0)?.['result'] < 15) {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      scene.text('You struggle to keep up with the other girls and finish in last place.');
    } else {
      if (((s as any).runnerQW ?? 0)?.['result'] < 20) {
        scene.text('You run as fast as you can, but only manage to finish second to last.');
      } else {
        if (((s as any).runnerQW ?? 0)?.['result'] < 25) {
          scene.text('You run as fast as you can, but only manage to take 6th place.');
        } else {
          if (((s as any).runnerQW ?? 0)?.['result'] < 30) {
            ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
            scene.text('You run as fast as you can, but only manage to take 5th place.');
          } else {
            if (((s as any).runnerQW ?? 0)?.['result'] < 35) {
              ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (1);
              scene.text('You run as fast as you can, but only manage to take 4th place.');
            } else {
              if (((s as any).runnerQW ?? 0)?.['result'] < 40) {
                ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (2);
                scene.text('You run as fast as you can and manage to take 3rd place. Mr. Pavlovich, the P.E. teacher at your school, congratulates you.');
              } else {
                if (((s as any).runnerQW ?? 0)?.['result'] < 50) {
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (3);
                  scene.text('You run as fast as you can and manage to take 2nd place. Mr. Pavlovich, the P.E. teacher at your school, congratulates you on your achievement.');
                } else {
                  ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_wins2'] = ((s as any).runnerQW['pav_wins2'] ?? 0) + (1);
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (5);
                  scene.text('You run as fast as you can and manage to reach the finish line first. Mr. Pavlovich, the P.E. teacher at your school, congratulates you on winning the competition yet again while you walk around with your arms raised in triumph.');
                }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'exercise', 'tier2', 30, 'run');
  if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 3  &&  ((s as any).runnerQW ?? 0)?.['pav_stage'] === 1) {
    ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_stage'] = 2;
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] < 2) {
      scene.text('You\'ve won the competition three more times and Mr. Pavlovich awards you the second-tier sports trophy in running.');
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['prof_stage'] = 2;
    } else {
      scene.text('You\'ve won the competition three more times and Mr. Pavlovich awards you another trophy.');
    }
    if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
      qspCall(s, 'npc_relationship', 'modify', 'A19', 5);
      scene.text('Lina stands at the finish line, gasping for breath. Even though you beat her again, she flashes you a bright smile in congratulations.');
    } else {
      scene.text('Christina stands nearby glaring at you, her hands balled into fists. She\'s seething with rage, realizing she cannot beat you.');
    }
  } else {
    if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 2  &&  ((s as any).runnerQW ?? 0)?.['result'] >= 130) {
      if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
        qspCall(s, 'npc_relationship', 'modify', 'A19', 'love');
        scene.text('Lina stands at the finish line, gasping for breath. Even though you beat her a second time, she flashes you a bright smile in congratulations.');
      } else {
        qspCall(s, 'npc_relationship', 'modify', 'A18', 'loathe');
        scene.text('Christina is gasping for breath at the finish line. She was unable to overtake you and came second again. She avoids your gaze, not wanting to look you in the eye.');
      }
    } else {
      if (((s as any).runnerQW ?? 0)?.['pav_wins2'] === 1  &&  ((s as any).runnerQW ?? 0)?.['result'] >= 130) {
        if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
          qspCall(s, 'npc_relationship', 'modify', 'A19', 'love');
          scene.text('Lina stands at the finish line, gasping for breath. Even though you beat her, she flashes you a bright smile in congratulations.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A18', 'loathe');
          scene.text('Christina is gasping for breath at the finish line. She was unable to overtake you and came second yet again. You just flash her a toothy grin and continue your victory lap.');
          scene.text('"You fucking bitch!" she growls through clenched teeth.');
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).runnerQW ?? 0)?.['result'] > 50) {
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'Family extension'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChangeRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_grounds', 'change_room');
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'locker';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/gym/locker/lockerroom.jpg');
  // TODO-QSP: dynamic text: 'The locker room is accessed through the school gym and is left unlocked until '...
  scene.text('The locker room is accessed through the school gym and is left unlocked until 18:30 each day for the use of students using the sports ground for training and events outside school hours. The room is cold, damp and filled with lockers, benches and not much else. You can <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">change your outfit</a> by the lockers here' + ((((s as any).pcs_piercings ?? 0)?.['total'] > 0) ? (', and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027main/u0027); return false;">manage your piercings</a>') : ('')) + '.');
  if ((((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) >= 30)  ||  ((s as any).hour ?? 0) > 18) {
    scene.text('The school is closing for the night and you have to leave before you get locked in.');
    return;
  }
  qspCall(s, 'wardrobe', 'default_clothing_options');
  qspCall(s, 'din_van', 'publicpan', 'no_prost');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
    qspCall(s, 'din_van', 'shower');
  } else {
    scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'pblc_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspGoto(st, 'gschool_grounds', 'change_room');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'gschool_grounds', 'main');
    }
  } },
    { label: 'Go to the sports field', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspGoto(st, 'gschool_grounds', 'change_room');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspGoto(st, 'gschool_grounds', 'sports');
    }
  } },
    { label: 'Change your outfit', handler: (st: GameState) => {
    qspGoto(st, 'wardrobe', 'start');
  } },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterFamilyExtension(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/grounds/school_run.jpg');
  if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
    if (((s as any).npc_rel ?? 0)?.['A34'] > 50) {
      // TODO-QSP: dynamic text: You hear your name and turn to see Kolka. "<<$pcs_nickname>>… <<$pcs_nickname>> ...
      scene.text(`You hear your name and turn to see Kolka. "${((s as any).pcs_nickname ?? '')}… ${((s as any).pcs_nickname ?? '')} you won!" Kolka shouts while running towards you with a huge grin. He crashes into you and gives you a tight hug.`);
      scene.text('"Hey, how\'s my favorite brother? Thanks for coming, I wasn\'t aware you knew I was running."');
      scene.text('He grins. "You didn\'t think I spotted you doing all those laps when the school was closed and training at the community center? You\'re always out wearing your sports gear and carrying that water bottle, so you\'re clearly not just meeting friends!"');
    } else {
      // TODO-QSP: dynamic text: You hear your name and turn to find Kolka. "<<$pcs_nickname>>, you won!"
      scene.text(`You hear your name and turn to find Kolka. "${((s as any).pcs_nickname ?? '')}, you won!"`);
      scene.text('"Hey Kolka, I wasn\'t aware you knew I was running."');
      // TODO-QSP: dynamic text: "<<$npc_nickname[''A29'']>> asked me to keep an eye on what you were doing since...
      scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} asked me to keep an eye on what you were doing since you're always out in your sports gear with that water bottle, so I asked the coach."`);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: At this point, you see your <<$npc_nickname[''A29'']>> and stepfather approachin...
    scene.text(`At this point, you see your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} and stepfather approaching.`);
    if (((st as any).npc_rel ?? 0)?.['A29'] > 50) {
      // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> approaches you and gives you a hug. "I know we''...
      scene.text(`Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} approaches you and gives you a hug. "I know we've had our differences, but I only want the best for you. I'm so proud of you. Why didn't you say something?"`);
      if (((st as any).npc_rel ?? 0)?.['A33'] > 50) {
        scene.text('You see Anya coming over behind Kolka. "Go girl! Well done. You should have told me about this during our nightly chats," she says before she gives you a hug.');
      } else {
        // TODO-QSP: dynamic text: You see Anya coming over behind Kolka. "Well done, <<$pcs_nickname>>. Why didn''...
        scene.text(`You see Anya coming over behind Kolka. "Well done, ${((st as any).pcs_nickname ?? '')}. Why didn't you say something? That way we'd get to know each other better?"`);
        scene.text('"You\'re always reading and I didn\'t want to disturb you… Sorry."');
        scene.text('"Hey, don\'t worry about it. As I said well done, but I\'d be interested to hear what\'s going on with you, so don\'t worry about disturbing me."');
        scene.text('"Okay. I\'ll try," you say as you give her a hug.');
      }
      // TODO-QSP: dynamic text: Your stepfather now joins the conversation. "Come on <<$pcs_nickname>>, get show...
      scene.text(`Your stepfather now joins the conversation. "Come on ${((st as any).pcs_nickname ?? '')}, get showered and changed and we'll meet you outside. We're all going out for dinner to celebrate."`);
      scene.text('"You don\'t have to do that! I know money is tight and I\'m already so happy you all took the time to come and support me. It means a lot."');
      // TODO-QSP: dynamic text: "No, I insist. I''ve talked about this with your <<$npc_nickname[''A29'']>> and ...
      scene.text(`"No, I insist. I've talked about this with your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} and she agrees. It's not often we get the chance to do something like this and we think that some quality family time would be good for all of us."`);
      (st as any).minut = ((st as any).minut ?? 0) + 4;
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go for a shower', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    (st as any).pcs_hairbsh = 1;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('After showering and changing, you head out and greet the family.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to a restaurant', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'wine');
    (st as any).frost = 0;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).fat = ((st as any).fat ?? 0) + (8);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (60);
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (10);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
    }
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    scene.img('images/locations/pavlovsk/school/grounds/restaurant_family.jpg');
    scene.text('At the local Del Parco restaurant, you all spend a few hours enjoying your meal as your family encourages you to continue and improve, but stressing that they\'re very proud of what you\'ve achieved so far.');
    // TODO-QSP: dynamic text: Your stepfather orders some wine and although your <<$npc_nickname[''A29'']>> gi...
    scene.text(`Your stepfather orders some wine and although your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} gives him a disapproving look, he gives you a glass so you can toast your victory.`);
    scene.text('At the end of a very enjoyable meal and some quality family time, you thank them again for their kindness before there\'s a big family hug and you all return home.');
    (st as any).minut = ((st as any).minut ?? 0) + 90;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    (st as any).pavhome_enter = 1;
  }, goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you won! Well done!" your <<$npc_nickname[''A29'']>> shouts ...
      scene.text(`"${((st as any).pcs_nickname ?? '')}, you won! Well done!" your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} shouts as she approaches.`);
      scene.text('"Thanks. And thanks for coming too."');
      scene.text('"I know that we have our differences, but I haven\'t stopped caring about you and I asked Kolka to let me know if he saw you around as I kept seeing you heading out in your sports gear with your water bottle and wondered what you were doing," she replies.');
      // TODO-QSP: dynamic text: You''re a little lost for words, so your <<$npc_nickname[''A29'']>> continues. "...
      scene.text(`You're a little lost for words, so your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} continues. "He told me he's seen you running at the track when the school was closed and training at the community center, so I asked the coach. Anyway I'm so proud of you! Why didn't you say something?"`);
      // TODO-QSP: dynamic text: When you don''t answer, your <<$npc_nickname[''A29'']>> continues. "Come on, get...
      scene.text(`When you don't answer, your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} continues. "Come on, get showered and changed and I'll meet you outside."`);
      scene.text('Anya and Kolka give you a friendly wave and leave.');
      (st as any).minut = ((st as any).minut ?? 0) + 4;
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go for a shower', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    (st as any).pcs_hairbsh = 1;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('After showering and changing, you head out and greet your mother. "Thanks for coming. It means a lot to me."');
    // TODO-QSP: dynamic text: "Of course I''d come, <<$pcs_nickname>>! I just want the best for you and I''m p...
    scene.text(`"Of course I'd come, ${((st as any).pcs_nickname ?? '')}! I just want the best for you and I'm proud of you. Come on, let's go out for a bite to eat. I think we need to have a chat."`);
    // TODO-QSP: dynamic text: "You don''t have to, <<$npc_nickname[''A29'']>>. I''m just glad you came."
    scene.text(`"You don't have to, ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}. I'm just glad you came."`);
    scene.text('"It\'s fine. I want to see if we can patch things up between us."');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the cafe', handler: (st: GameState) => {
    if (((st as any).alko ?? 0) > 0) {
      (st as any).alko = ((st as any).alko ?? 0) - (1);
    }
    (st as any).frost = 0;
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (18);
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).fat = ((st as any).fat ?? 0) + (11);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (70);
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (80);
    }
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    scene.img('images/locations/pavlovsk/school/grounds/sveta_mum_restaurant.jpg');
    if (((st as any).npc_QW ?? 0)?.['A29'] > 0) {
      if (((st as any).npc_QW ?? 0)?.['A29'] === 1) {
        ((st as any).npc_QW = (st as any).npc_QW ?? {})['A29'] = 2;
      }
      scene.text('At the station cafe, your mother selects a corner spot away from the main area so you can keep your chat private.');
      scene.text('You both initially have some general small talk during which she again congratulates you on your win and explains that she wants the best for you and will help in any way she can, but you need to meet her halfway.');
      scene.text('You\'re initially unsure how to respond, but are eventually able to speak up in a very low, shaky voice. "I\'d love that, but why do you give me such a hard time just because I had sex?"');
      scene.text('As your feelings start to come to the surface, you continue. "Yes, I had sex, but it doesn\'t make me a bad person! And what gives you the right to immediately treat me like I\'m a whore!? You were 16 when you had Anya! That\'s younger than me!"');
      scene.text('Your mother sighs and a tear starts rolling down her cheek. "I know. Maybe I was a bit harsh, but I don\'t want you to repeat my mistakes. I want you to have the chance to go to university and make a better life for yourself."');
      scene.text('Your mother accepts that she may have been a bit harsh and apologizes. You tell her that you\'ll try your best at school and also reassure her that you\'re taking precautions.');
      // TODO-QSP: dynamic text: Your mother gets up and comes over to hug you. "Thanks <<$pcs_nickname>>, that''...
      scene.text(`Your mother gets up and comes over to hug you. "Thanks ${((st as any).pcs_nickname ?? '')}, that's all I can ask. I'll try to be more supportive too. Just please talk to me if you're worried about anything."`);
      scene.text('After the meal and chat, you both feel relieved and emotionally drained, but happier.');
    } else {
      scene.text('At the station cafe, your mother selects a corner spot away from the main area so you can keep your chat private.');
      scene.text('You both initially have some general small talk during which she again congratulates you on your win and explains that she wants the best for you and will help in any way she can, but she doesn\'t want you staying out late as you could get into trouble. She continues by saying that she wants you to go to university so that you can make a better life for yourself.');
      // TODO-QSP: dynamic text: Although you''re a little annoyed that she''s still treating you like a child, y...
      scene.text(`Although you're a little annoyed that she's still treating you like a child, you do appreciate her concern. "I know ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} and I'm sorry that you get worried when I get back a little late, but you know what time the disco finishes and that I'll never be home by midnight unless I leave earlier than my friends. They would laugh at me having to be home early for bedtime!"`);
      scene.text('Your mother thinks it through for a moment. "Okay, I can accept that. I\'m also aware that you\'re nearly 18, but that won\'t stop me from worrying. Maybe I\'ve been a bit harsh in my approach out of habit with Anya but, like I said, I only want the best for you. Can you at least try to meet me halfway on this and do your best in school too?"');
      // TODO-QSP: dynamic text: Unsure how to respond, you sigh. "Okay <<$npc_nickname[''A29'']>>, I''ll try. It...
      scene.text(`Unsure how to respond, you sigh. "Okay ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}, I'll try. It's just that it can get a bit overbearing."`);
      scene.text('Your mother continues. "Okay, let\'s just try to get our relationship back to a good place. Please promise me that you\'ll do your best in school too. Also, no matter what please know that you can always talk to me if something is worrying you. Please know that I do love you and want the best for you."');
      // TODO-QSP: dynamic text: This is the closest you''ve felt to your mother for ages, so you get up and give...
      scene.text(`This is the closest you've felt to your mother for ages, so you get up and give her a hug. "Thanks ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}. I'm glad we had this chat to clear the air. I love you too and it'll be good to have my ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} back."`);
      scene.text('She hugs you back and you both finish your meals with some more relaxed conversation. After that, you both feel much relieved and emotionally drained, but happier.');
    }
    qspCall(st, 'npc_relationship', 'set', 'A29', 50);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    (st as any).pavhome_enter = 1;
  }, goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A33'] > 50) {
      scene.text('You hear your sister shout your name and look around.');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, go girl well done!" She comes over and gives you a hug. ...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, go girl well done!" She comes over and gives you a hug. "This calls for a celebration. Let's go for a few beers! You can always burn it off later."`);
      scene.text('"Thanks for coming, sis. It means a lot."');
      scene.text('"I wasn\'t going to miss the opportunity and a possible little celebration with my little sis, was I?"');
      scene.text('"Okay cool. Yeah, I\'m up for that. Let me go and shower and change first."');
      scene.text('"Okay, just don\'t be too long or I might just leave without you!"');
      (s as any).minut = ((s as any).minut ?? 0) + 4;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go for a shower', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    (st as any).pcs_hairbsh = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('A few minutes later, you reappear showered and changed and head off to the station cafe.');
    scene.actions([
      { label: 'Have a drink with Anya', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer', 4);
    scene.img('images/locations/pavlovsk/school/grounds/Sis_drink.jpg');
    scene.text('You both have a few beers for the next few hours and spend time catching up. Feeling light-headed and more than a little tipsy, you both leave the cafe and share a hug as you promise to meet up regularly and catch up. You know that you can see Anya at the community center on Friday evenings.');
    (st as any).minut = ((st as any).minut ?? 0) + 100;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
  }, goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0  ||  ((s as any).stat ?? 0)?.['girlfriends_current']) {
        (s as any).temp_npcID = qspFunc(s, 'lover', 'draw_random_from', 'boyfrined', 'girlfriend');
        qspCall(s, 'npcStat', '', ((s as any).temp_npcID ?? 0));
        // TODO-QSP: dynamic text: You hear <<$npcdesc>> shouting your name and jog over to meet them. You both emb...
        scene.text(`You hear ${((s as any).npcdesc ?? '')} shouting your name and jog over to meet them. You both embrace with a cuddle and a kiss on the cheek.`);
        scene.text('"Hey love, well done."');
        scene.text('"Thanks. And thanks for coming, it means a lot."');
        scene.text('"Of course, I\'d come and support you. Now go and get freshened up and we\'ll go out, my treat and you choose."');
        scene.text('You both have another cuddle before you head into the changing rooms to get showered and changed.');
        (s as any).minut = ((s as any).minut ?? 0) + 4;
        scene.actions([
          { label: 'Go take your shower', handler: (st: GameState) => {
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    (st as any).pcs_hairbsh = 1;
    scene.img('images/shared/home/bathroom/dush.mp4');
    // TODO-QSP: dynamic text: Rejoining <<$npcdesc>>, you both have a passionate embrace as most folks have go...
    scene.text(`Rejoining ${((st as any).npcdesc ?? '')}, you both have a passionate embrace as most folks have gone.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> then says "Well done again <<$pcs_nickname>>, but I have something ...
    scene.text(`${((st as any).npcdesc ?? '')} then says "Well done again ${((st as any).pcs_nickname ?? '')}, but I have something I have to do that won't wait. See you soon."`);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
  }, goto: ['homes_properties', 'go_home'] },
    ]);
  } },
        ]);
      }
      (s as any).minut = ((s as any).minut ?? 0) + 4;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
  }, goto: ['homes_properties', 'go_home'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'main':
      enterMain(s, scene);
      break;
    case 'sports':
      enterSports(s, scene);
      break;
    case 'building':
      enterBuilding(s, scene);
      break;
    case 'SchoolRun':
      enterSchoolRun(s, scene);
      break;
    case 'SchoolRun_result':
      enterSchoolRunResult(s, scene);
      break;
    case 'SchoolRun2':
      enterSchoolRun2(s, scene);
      break;
    case 'SchoolRun2_result':
      enterSchoolRun2Result(s, scene);
      break;
    case 'change_room':
      enterChangeRoom(s, scene);
      break;
    case 'Family extension':
      enterFamilyExtension(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_grounds: LocationDef = {
  name: 'gschool_grounds',
  title: 'Outside School',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'locker',
  enter: enter,
};
