import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) - (40);
    scene.text('You\'re stoned, which makes it hard to concentrate on studying.');
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) + (20);
  }
  if (((s as any).pcs_energy ?? 0) < 5) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
    scene.text('You\'re extremely hungry and it\'s hard to think about anything other than food.');
  } else {
    if (((s as any).pcs_energy ?? 0) < 10) {
      (s as any).study_mod = ((s as any).study_mod ?? 0) - (10);
      scene.text('You\'re very hungry and it affects your ability to concentrate.');
    } else {
      if (((s as any).pcs_energy ?? 0) < 20) {
        (s as any).study_mod = ((s as any).study_mod ?? 0) - (10);
        scene.text('You\'re hungry and your thoughts often drift to food, affecting your performance negatively.');
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) > 90) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) - (10);
    scene.text('You\'re extremely horny and your thoughts often drift to sex, affecting your ability to study.');
  }
  if (((s as any).pain ?? 0)?.['total'] > 90) {
    (s as any).no_study = 1;
    scene.text('You\'re in so much pain that you can\'t study.');
  } else {
    if (((s as any).pain ?? 0)?.['total'] > 75) {
      (s as any).study_mod = ((s as any).study_mod ?? 0) - (40);
      scene.text('You\'re in so much pain that you have a very hard time concentrating on studying.');
    } else {
      if (((s as any).pain ?? 0)?.['total'] > 60) {
        (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
        scene.text('Your pain is constantly bothering you and makes it hard to study.');
      }
    }
  }
  (s as any).study_mod = Math.max(0, ((Math.floor(Math.random() * (pcs_intel + study_mod - 30 + study_mod + 1)) + (30 + study_mod)) + 10)/33);
  if (((s as any).no_study ?? 0) === 1) {
    scene.text('You try to study for half an hour, but get nothing done.');
  } else {
    if ((!((s as any).study_mod ?? 0))) {
      scene.text('You study for half an hour, but you don\'t think you\'re improving.');
    } else {
      if (((s as any).study_mod ?? 0) === 1) {
        scene.text('You study for half an hour and think you\'re improving a little.');
      } else {
        if (((s as any).study_mod ?? 0) === 2) {
          scene.text('You study for half an hour and believe that you\'re making good progress in getting ready for the exam.');
        } else {
          scene.text('You study for half an hour and believe that you\'re improving a lot.');
        }
      }
    }
    qspCall(s, 'grades', 'grade_award', '' + qspUntranslated(s, "ARGS[1]>", { location: "uni_library" }) + '', '' + qspUntranslated(s, "ARGS[2]>", { location: "uni_library" }) + '', ((s as any).study_mod ?? 0));
  }
  qspCall(s, 'stat', '');
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    return;
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    { label: 'Return to the entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
    { label: 'Keep studying', goto: ['uni_library', 'study'] },
    { label: 'Wander around', goto: ['uni_library', 'wander'] },
  ]);
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'uni_library', 'start');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/library.jpg');
  scene.text('One of the medium sized buildings is the university\'s library. It is three stories tall and filled with books, sections with tables scattered around to study or relax at and computer stations to help students with their studying.');
  if (((s as any).locat ?? 0)?.['katja'] === 29) {
    // TODO-QSP: dynamic text: You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $...
    scene.text('You see \'+iif(katjaQW[\'know_katja_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'a cute redheaded girl\', \'<a href="exec:gt \'katja_uni\', \'library\'">Katja</a>\')+\' sitting at one of the desks with a laptop and a pile of books.');
  }
  if (((s as any).locat ?? 0)?.['A144'] === 12) {
    scene.text('You see your former classmate <a href="exec:gt \'uni_library\', \'anushka\'">Anushka</a> sitting at one of the tables studying some books.');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 15) {
    // TODO-QSP: dynamic text: You see '+iif(AlbinaQW['know_albina_uni'] = 0 and ($start_type['loc'] ! 'sg' and...
    scene.text('You see \'+iif(AlbinaQW[\'know_albina_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'an attractive looking brunette\', \'<a href="exec:gt \'uni_library\', \'albina\'">Albina</a>\')+\' searching the shelves for books.');
  }
  if (((s as any).week ?? 0) <= 4  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 17) {
    if (((s as any).meet_kendra ?? 0) === 1) {
      scene.text('You see <a href="exec:gt \'uni_library\', \'kendra\'">Kendra</a> sitting at one of the tables studying some books.');
    } else {
      scene.text('You see a pretty ebony <a href="exec:gt \'uni_library\', \'kendra\'">girl</a> sitting at one of the tables studying some books.');
    }
  }
  if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 17) {
    scene.text('You see your former classmate <a href="exec:gt \'uni_library\', \'artem\'">Artem</a> sitting at one of the tables studying some books.');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).yearstart ?? 0) > 1  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14) {
    if (((s as any).nataliaQW ?? 0)?.['library_day_check'] !== ((s as any).daystart ?? 0)) {
      ((s as any).nataliaQW ?? {})['library_day_check'] = ((s as any).daystart ?? 0);
      if ((!(Math.floor(Math.random() * 4) + 0))) {
        ((s as any).nataliaQW ?? {})['library_day'] = ((s as any).daystart ?? 0);
      }
    }
    if (((s as any).nataliaQW ?? 0)?.['library_day'] === ((s as any).daystart ?? 0)) {
      scene.text('You see your former classmate <a href="exec: gt \'natalia_pavlova\',\'library\'">Natalia Pavlova</a>.');
    }
  }
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  }
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
    scene.actions([
      { label: 'Study', goto: ['uni_library', 'study'] },
    ]);
  }
  scene.actions([
    { label: 'Read a book', goto: ['uni_library', 'read'] },
    { label: 'Borrow a book', goto: ['uni_library', 'loan'] },
    { label: 'Wander around', goto: ['uni_library', 'wander'] },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterStudy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/study\' + rand(1, 7) + \'.jpg');
  scene.text('You spend some time collecting some books on your subjects and grab one of the library\'s laptops before finding a quiet place to sit.');
  if (((s as any).university ?? 0)?.['semester_week'] > 0) {
    (s as any).i = 0;
    // TODO-QSP: :study_loop
    if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
      if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_max']) {
        // TODO-QSP: dynamic '  act ''Study for your <<$class_list_name[i]>> class (30 minutes)'': gt ''uni_library'', ''...
      } else {
        // TODO-QSP: dynamic text: You don't need to study any more this week for your <<$class_list_name[i]>> clas...
        scene.text(`You don't need to study any more this week for your ${((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]} class.`);
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
      // TODO-QSP: jump 'study_loop'
    }
  } else {
    if (((s as any).university ?? 0)?.['exam_week'] > 0) {
      (s as any).i = 0;
      // TODO-QSP: :exam_loop
      if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
        if (qspFunc(s, 'uni_programs', 'exam', 'is_over', ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]) === 0) {
          // TODO-QSP: dynamic '  act ''Study intensely for your <<$class_list_name[i]>> exam (30 minutes)'': gt ''uni_libr...
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) < Object.keys((s as any).class_list_institution ?? {}).length) {
        // TODO-QSP: jump 'exam_loop'
      }
    }
  }
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  }
  scene.actions([
    { label: 'Wander around', goto: ['uni_library', 'wander'] },
    { label: 'Return to the entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterStudying(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'grades', 'optional_activity_attribute', '' + qspUntranslated(s, "ARGS[1]>", { location: "uni_library" }) + '', '' + qspUntranslated(s, "ARGS[2]>", { location: "uni_library" }) + '', 'yes', Math.min(((s as any).pcs_intel ?? 0)+10, 100));
  qspCall(s, 'stat', '');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/study\' + rand(1, 7) + \'.jpg');
  // TODO-QSP: dynamic text: You open the books and start studying for your <<$ARGS[2]>> class. The library i...
  scene.text(`You open the books and start studying for your ${((s as any).locArgs?.[2] ?? 0)} class. The library is mostly quiet, but you hear occasional noises, some of them hard to make out and some of them fairly suspicious. Despite this, it is a good environment to study in and you can see a number of other students studying as well.`);
  if ((0 as any) < (0 as any)) {
    scene.text('You study for half an hour and can tell that you will need to study more if you want to completely understand this week\'s material.');
  } else {
    scene.text('You study for half an hour and believe you now understand everything that is being covered this week.');
  }
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    ]);
  }
  scene.actions([
    { label: 'Keep studying', goto: ['uni_library', 'study'] },
    { label: 'Wander around', goto: ['uni_library', 'wander'] },
    { label: 'Return to entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterStudyingExam(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/study\' + rand(1, 7) + \'.jpg');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0);
  // TODO-QSP: gs 'mood', 'raise', (trait_vars['academic']*5 -10)
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: dynamic text: You open the books and start studying for your <<$ARGS[2]>> exam. The library is...
  scene.text(`You open the books and start studying for your ${((s as any).locArgs?.[2] ?? 0)} exam. The library is mostly quiet, but you hear occasional noises, some of them hard to make out and some of them fairly suspicious. Despite this, it's a good environment to study in and you can see a number of other students studying as well.`);
  if (((s as any).pcs_sleep ?? 0) < 5) {
    (s as any).no_study = 1;
    scene.text('You\'re so tired that you\'re constantly falling asleep. You get no studying done in this condition.');
  } else {
    if (((s as any).pcs_sleep ?? 0) < 30) {
      (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
      scene.text('You\'re very tired and have a hard time keeping your eyes open.');
    }
  }
  if (((s as any).alko ?? 0) >= 6) {
    (s as any).no_study = 1;
    scene.text('You\'re so drunk that your eyes can\'t make sense of the letters written in the books. Holding your pen is also a problem.');
  } else {
    if (((s as any).alko ?? 0) >= 4) {
      (s as any).study_mod = ((s as any).study_mod ?? 0) - (40);
      scene.text('You\'re drunk and have trouble concentrating on reading the books. When you look at the notes you\'ve made, a lot of them are incomprehensible.');
    } else {
      if (((s as any).alko ?? 0) >= 2) {
        (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
        scene.text('You\'re feeling a little tipsy, but feel like your studying is going great. However, when you look at your notes afterwards, you notice that a lot of them make no sense.');
      }
    }
  }
  if (((s as any).drugVars ?? 0)?.['mentats_dose'] > 0) {
    (s as any).study_mod = ((s as any).study_mod ?? 0) + (30);
  }
  // TODO-QSP: If pcs_mood < 50:
  (s as any).study_mod = ((s as any).study_mod ?? 0) - (20);
  scene.text('You\'re in a bad mood and it clearly affects your studying.');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'study':
      enterStudy(s, scene);
      break;
    case 'studying':
      enterStudying(s, scene);
      break;
    case 'studying_exam':
      enterStudyingExam(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_library: LocationDef = {
  name: 'uni_library',
  title: 'The University Library',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You\'re stoned, which makes it hard to concentrate on studying.'],
  enter: enter,
};
