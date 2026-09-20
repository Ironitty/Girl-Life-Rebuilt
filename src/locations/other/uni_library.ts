import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'uni_library', 'start');
  (s as any).sexloc = 'uni_library';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/library.jpg');
  scene.text('One of the medium sized buildings is the university\'s library. It is three stories tall and filled with books, sections with tables scattered around to study or relax at and computer stations to help students with their studying.');
  if (((s as any).locat ?? 0)?.['katja'] === 29) {
    // TODO-QSP: dynamic text: You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $...
    scene.text('You see ' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('a cute redheaded girl') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027katja_uni/u0027, /u0027library/u0027); return false;">Katja</a>')) + ' sitting at one of the desks with a laptop and a pile of books.');
  }
  if (((s as any).locat ?? 0)?.['A144'] === 12) {
    scene.text('You see your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027anushka/u0027); return false;">Anushka</a> sitting at one of the tables studying some books.');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 15) {
    // TODO-QSP: dynamic text: You see '+iif(AlbinaQW['know_albina_uni'] = 0 and ($start_type['loc'] ! 'sg' and...
    scene.text('You see ' + ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('an attractive looking brunette') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027albina/u0027); return false;">Albina</a>')) + ' searching the shelves for books.');
  }
  if (((s as any).week ?? 0) <= 4  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 17) {
    if (((s as any).meet_kendra ?? 0) === 1) {
      scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027kendra/u0027); return false;">Kendra</a> sitting at one of the tables studying some books.');
    } else {
      scene.text('You see a pretty ebony <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027kendra/u0027); return false;">girl</a> sitting at one of the tables studying some books.');
    }
  }
  if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 17) {
    scene.text('You see your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027artem/u0027); return false;">Artem</a> sitting at one of the tables studying some books.');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).yearstart ?? 0) > 1  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14) {
    if (((s as any).nataliaQW ?? 0)?.['library_day_check'] !== ((s as any).daystart ?? 0)) {
      ((s as any).nataliaQW = (s as any).nataliaQW ?? {})['library_day_check'] = ((s as any).daystart ?? 0);
      if ((!(Math.floor(Math.random() * 4) + 0))) {
        ((s as any).nataliaQW = (s as any).nataliaQW ?? {})['library_day'] = ((s as any).daystart ?? 0);
      }
    }
    if (((s as any).nataliaQW ?? 0)?.['library_day'] === ((s as any).daystart ?? 0)) {
      scene.text('You see your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027natalia_pavlova/u0027, /u0027library/u0027); return false;">Natalia Pavlova</a>.');
    }
  }
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
]);
    return;
  }
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
    scene.actions([
      { label: 'Study', goto: ['uni_library', 'study'] },
    ]);
  }
  // TODO-QSP: end
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

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'uni_library', 'start');
  (s as any).sexloc = 'uni_library';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/library.jpg');
  scene.text('One of the medium sized buildings is the university\'s library. It is three stories tall and filled with books, sections with tables scattered around to study or relax at and computer stations to help students with their studying.');
  if (((s as any).locat ?? 0)?.['katja'] === 29) {
    // TODO-QSP: dynamic text: You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $...
    scene.text('You see ' + ((((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('a cute redheaded girl') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027katja_uni/u0027, /u0027library/u0027); return false;">Katja</a>')) + ' sitting at one of the desks with a laptop and a pile of books.');
  }
  if (((s as any).locat ?? 0)?.['A144'] === 12) {
    scene.text('You see your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027anushka/u0027); return false;">Anushka</a> sitting at one of the tables studying some books.');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 15) {
    // TODO-QSP: dynamic text: You see '+iif(AlbinaQW['know_albina_uni'] = 0 and ($start_type['loc'] ! 'sg' and...
    scene.text('You see ' + ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('an attractive looking brunette') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027albina/u0027); return false;">Albina</a>')) + ' searching the shelves for books.');
  }
  if (((s as any).week ?? 0) <= 4  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 17) {
    if (((s as any).meet_kendra ?? 0) === 1) {
      scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027kendra/u0027); return false;">Kendra</a> sitting at one of the tables studying some books.');
    } else {
      scene.text('You see a pretty ebony <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027kendra/u0027); return false;">girl</a> sitting at one of the tables studying some books.');
    }
  }
  if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 17) {
    scene.text('You see your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uni_library/u0027, /u0027artem/u0027); return false;">Artem</a> sitting at one of the tables studying some books.');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).yearstart ?? 0) > 1  &&  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14) {
    if (((s as any).nataliaQW ?? 0)?.['library_day_check'] !== ((s as any).daystart ?? 0)) {
      ((s as any).nataliaQW = (s as any).nataliaQW ?? {})['library_day_check'] = ((s as any).daystart ?? 0);
      if ((!(Math.floor(Math.random() * 4) + 0))) {
        ((s as any).nataliaQW = (s as any).nataliaQW ?? {})['library_day'] = ((s as any).daystart ?? 0);
      }
    }
    if (((s as any).nataliaQW ?? 0)?.['library_day'] === ((s as any).daystart ?? 0)) {
      scene.text('You see your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027natalia_pavlova/u0027, /u0027library/u0027); return false;">Natalia Pavlova</a>.');
    }
  }
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
]);
    return;
  }
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
    scene.actions([
      { label: 'Study', goto: ['uni_library', 'study'] },
    ]);
  }
  // TODO-QSP: end
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
  (s as any).sexloc = 'uni_library';
  qspCall(s, 'stat', '');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/study' + (Math.floor(Math.random() * 7) + 1) + '.jpg');
  scene.text('You spend some time collecting some books on your subjects and grab one of the library\'s laptops before finding a quiet place to sit.');
  if (((s as any).university ?? 0)?.['semester_week'] > 0) {
    (s as any).i = 0;
    // TODO-QSP: :study_loop
    if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
      if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] + '_optional_weekly_max']) {
        // TODO-QSP: dynamic '  act ''Study for your <<$class_list_name[i]>> class (30 minutes)'': gt ''uni_library'', ''...
      } else {
        // TODO-QSP: dynamic text: You don''t need to study any more this week for your <<$class_list_name[i]>> cla...
        scene.text(`You don't need to study any more this week for your ${((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)] ?? ''} class.`);
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
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
]);
    return;
  }
  // TODO-QSP: end
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
  qspCall(s, 'grades', 'optional_activity_attribute', '' + ((s as any).locArgs?.[1] ?? 0) + '', '' + ((s as any).locArgs?.[2] ?? 0) + '', 'yes', Math.min(((s as any).pcs_intel ?? 0)+10, 100));
  qspCall(s, 'stat', '');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/study' + (Math.floor(Math.random() * 7) + 1) + '.jpg');
  // TODO-QSP: dynamic text: You open the books and start studying for your <<$ARGS[2]>> class. The library i...
  scene.text(`You open the books and start studying for your ${((s as any).locArgs?.[2] ?? '')} class. The library is mostly quiet, but you hear occasional noises, some of them hard to make out and some of them fairly suspicious. Despite this, it is a good environment to study in and you can see a number of other students studying as well.`);
  if ((0 as any) < (0 as any)) {
    scene.text('You study for half an hour and can tell that you will need to study more if you want to completely understand this week\'s material.');
  } else {
    scene.text('You study for half an hour and believe you now understand everything that is being covered this week.');
  }
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
]);
    return;
  }
  // TODO-QSP: end
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
  scene.img('images/locations/city/island/university/library/study' + (Math.floor(Math.random() * 7) + 1) + '.jpg');
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0));
  // TODO-QSP: gs 'mood', 'raise', (trait_vars['academic']*5 -10)
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: dynamic text: You open the books and start studying for your <<$ARGS[2]>> exam. The library is...
  scene.text(`You open the books and start studying for your ${((s as any).locArgs?.[2] ?? '')} exam. The library is mostly quiet, but you hear occasional noises, some of them hard to make out and some of them fairly suspicious. Despite this, it's a good environment to study in and you can see a number of other students studying as well.`);
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
  // TODO-QSP: end
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
  (s as any).study_mod = Math.max(0, ((Math.floor(Math.random() * (((s as any).pcs_intel ?? 0) + ((s as any).study_mod ?? 0) - 30 + ((s as any).study_mod ?? 0) + 1)) + (30 + ((s as any).study_mod ?? 0))) + 10)/33);
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
    qspCall(s, 'grades', 'grade_award', '' + ((s as any).locArgs?.[1] ?? 0) + '', '' + ((s as any).locArgs?.[2] ?? 0) + '', ((s as any).study_mod ?? 0));
  }
  qspCall(s, 'stat', '');
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    return;
  }
  // TODO-QSP: end
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

function enterWander(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).sexloc = 'uni_library';
  qspCall(s, 'stat', '');
  scene.text('<center><b>The University Library</b></center>');
  (s as any).temp = (Math.floor(Math.random() * 20) + 1);
  if (((s as any).temp ?? 0) === 1) {
    scene.img('images/locations/city/island/university/library/events/accident_panty_flash.jpg');
    scene.text('As you wander around, you spot two girls in one of the rows of books. One of them starts climbing the shelf to get at a book out of reach and her short skirt rides up as she does, showing off her panties to everyone looking. You can\'t help but smile as you continue on.');
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).temp ?? 0) === 2) {
      scene.img('images/locations/city/island/university/library/events/accident_pussy_flash.jpg');
      scene.text('As you wander around, you spot a girl in one of the rows of books. She starts climbing the shelf to get at a book out of reach and her short skirt rides up as she does, showing off her pussy to everyone looking. You can\'t help but smile as you continue on.');
      qspCall(s, 'arousal', 'erotic_nudity', 3);
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).temp ?? 0) === 3) {
        scene.img('images/locations/city/island/university/library/events/asian_titflash.jpg');
        scene.text('As you wander around, you stop inside of one of the rows of books before it opens up into another one of the small study areas. Before you are several guys, sitting at a table encouraging an Asian girl to pull up her shirt. She keeps refusing, but you can tell she is getting aroused and excited by the attention they are giving her. Finally, blushing a little, she pulls up her shirt and holds it up, showing off her firm little breasts. The guys all grin and quietly clap before she pulls her shirt down and walks away blushing. You wonder if she regrets doing it before you continue on your way.');
        qspCall(s, 'arousal', 'erotic_nudity', 3);
        qspCall(s, 'stat', '');
      } else {
        if (((s as any).temp ?? 0) === 4) {
          scene.img('images/locations/city/island/university/library/events/black_titflash.jpg');
          scene.text('As you wander around, you stop inside of one of the rows of books before it opens up into another one of the small study areas. Before you are several guys, sitting at a table encouraging a chubby black girl to pull up her shirt. She keeps refusing, but you can tell she is getting aroused and excited by the attention they are giving her. A few seconds later, she finally exposes her large, saggy breasts to them. The guys all grin and quietly clap before she pulls her shirt down and goes back to studying. You wonder if she regrets doing it before you continue on your way.');
          qspCall(s, 'arousal', 'erotic_nudity', 3);
          qspCall(s, 'stat', '');
        } else {
          if (((s as any).temp ?? 0) === 5) {
            scene.img('images/locations/city/island/university/library/events/girl_sleeping.jpg');
            scene.text('As you wander around, you spot a girl with her head down on one of the work stations, apparently having fallen asleep while studying. She snores softly, a few of the other students occasionally glancing over and laughing at her softly. You shake your head and leave the girl to sleep in peace.');
          } else {
            if (((s as any).temp ?? 0) === 6) {
              scene.img('images/locations/city/island/university/library/events/laying_in_row.jpg');
              scene.text('As you wander around, you start down one of the rows, only to find a girl lying in the middle of the aisle on her stomach, reading a book. She briefly glances up at you before going back to her book and ignoring you. Not able to easily get past her and not wanting to be rude by trying to step over her, even if she is being rude in the first place, you decide to just walk over to the next aisle and continue your wandering.');
            } else {
              if (((s as any).temp ?? 0) === 7) {
                scene.img('images/locations/city/island/university/library/events/naked_run.jpg');
                scene.text('As you wander around, you glimpse what appears to be a naked girl dashing between two aisles of books. You glance into the aisle she went down and see her continue running down the aisle. You have no clue where her clothes are or why she\'s doing it, but with how fast she\'s running, you doubt she is enjoying it. She quickly disappears down another row of shelves.');
                qspCall(s, 'arousal', 'erotic_nudity', 3);
                qspCall(s, 'stat', '');
              } else {
                if (((s as any).temp ?? 0) === 8) {
                  scene.img('images/locations/city/island/university/library/events/naked_walk.jpg');
                  scene.text('As you turn to head down an aisle, you come nearly face to face with a pretty blond girl standing there naked. She just smiles at you and says hello. You respond in kind and she walks past you like nothing is wrong. You shake your head and continue on your way. A few seconds later, you come across a guy holding a girl\'s clothes while glancing down each aisle. You can only assume he is looking for the naked girl you seen and so point in the direction you saw her. He smiles and nods before jogging in that direction.');
                  qspCall(s, 'arousal', 'erotic_nudity', 3);
                  qspCall(s, 'stat', '');
                } else {
                  if (((s as any).temp ?? 0) === 9) {
                    scene.img('images/locations/city/island/university/library/events/pussy_flash.jpg');
                    scene.text('As you wander around, you go through one of the small study areas. Before you are several guys sitting at a table, encouraging a girl standing just inside of one of the aisles to flash them. She keeps refusing, but you can tell she is getting aroused and excited by the attention they are giving her. Finally, she lifts her skirt and flashes her neatly trimmed pussy at them. One of the guys briefly woops loudly, but is promptly hit by his friends and told to be quiet. Several others look over at the boys, but the girl has already dropped her skirt back in place and walks off with a grin on her face. You wonder if she regrets doing it as you continue on your way.');
                    qspCall(s, 'arousal', 'erotic_nudity', 3);
                    qspCall(s, 'stat', '');
                  } else {
                    if (((s as any).temp ?? 0) === 10) {
                      scene.img('images/locations/city/island/university/library/events/tit_flash.jpg');
                      scene.text('As you wander around, you go through one of the small study areas. Before you are several guys sitting at a table, encouraging a girl standing just inside of one of the aisles to flash them. She keeps refusing, but you can tell she is getting aroused and excited by the attention they are giving her. Finally, she lifts her shirt and flashes her breasts at them. One of the guys briefly woops loudly, but is promptly hit by his friends and told to be quiet. Several others look over at the boys, but the girl has already dropped her shirt back in place and walks off with a grin on her face. You wonder if she regrets doing it as you continue on your way.');
                      qspCall(s, 'arousal', 'erotic_nudity', 3);
                      qspCall(s, 'stat', '');
                    } else {
                      if (((s as any).temp ?? 0) === 11) {
                        scene.img('images/locations/city/island/university/library/events/sex/bj.jpg');
                        scene.text('As you walk around, you hear some moaning, and glancing down one of the rows of shelves, you see a boy sitting at one of the work stations. It takes a moment for you to notice the girl under the desk on her knees bobbing her head up and down in his lap. You watch for a few more seconds, feeling aroused at the scene before you decide to move on before you\'re spotted.');
                        qspCall(s, 'arousal', 'erotic', 3);
                        qspCall(s, 'stat', '');
                      } else {
                        scene.img('images/locations/city/island/university/library/library.jpg');
                        scene.text('You wander around the library for a while, looking at all the books. You pass by several of your fellow students, some quietly studying, reading or just looking through the bookshelves. You don\'t come across anything of interest.');
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
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    return;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    { label: 'Return to the entrance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
    { label: 'Wander around', goto: ['uni_library', 'wander'] },
  ]);
  scene.build();
}

function enterRead(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_library', 'read');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/library.jpg');
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    return;
  }
  qspCall(s, 'library_functions', 'set_library_read_acts');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    { label: 'Go back', goto: ['uni_library', 'start'] },
  ]);
  scene.build();
}

function enterLoan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_library', 'loan');
  scene.text('<center><b>The University Library</b></center>');
  scene.img('images/locations/city/island/university/library/library.jpg');
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) === 23)  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The library is closing for the night.');
    return;
  }
  qspCall(s, 'library_functions', 'set_loan_acts');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
    { label: 'Go back', goto: ['uni_library', 'start'] },
  ]);
  scene.build();
}

function enterKendra(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/city/island/university/classroom/ebony_girl_talk.jpg');
  scene.text('You walk over to her table.');
  if (((s as any).meet_kendra ?? 0) === 1) {
    if (((s as any).kendraQW ?? 0)?.['sub'] <= 0) {
      scene.text('You\'re about to take a seat when Kendra glares at you. "I don\'t think so, Princess. We\'re not friends and I want nothing to do with you. Go sit somewhere else."');
      scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
    } else {
      if (((s as any).kendraQW ?? 0)?.['sub'] <= 10) {
        if (((s as any).npc_rel ?? 0)?.['A82'] >= 60) {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          scene.text('You sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A82'] >= 20) {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she gives you a dirty look until you shut up and let her keep talking.');
          } else {
            scene.text('You\'re about to sit next to Kendra when she looks over at you. "I don\'t think so, Princess. We\'re not friends. You\'re nothing more than my toy to be used when and where I want, and now is not the time, so go sit somewhere else."');
            scene.text('You glance around and notice a few other students staring at you, so you move away from her.');
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A82'] >= 60) {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          scene.text('You sit next to Kendra. You talk to her and she even lets you get a few words in, but she mostly treats you like a pet or someone simple, often making condescending comments towards you.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A82'] >= 20) {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            scene.text('You sit next to Kendra and try to have a conversation with her, but anytime you try and get a word in, she gives you a dirty look until you shut up and let her keep talking.');
          } else {
            scene.text('You\'re about to sit next to Kendra when she glares at you. "We\'re not friends. You\'re nothing more than my white slave bitch to use and abuse as I see fit. You don\'t come over to me in public, <i>ever</i>. Go sit somewhere else."');
            scene.text('You glance around and notice a few other students staring at you, so you move away from her and find a seat by yourself.');
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave Kendra be', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
    ]);
  } else {
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
      (s as any).meet_kendra = 1;
      // TODO-QSP: dynamic text: There''s something about this ebony girl that intrigues you, so you decide to si...
      scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname || '')}."`);
      scene.text('She eyes you like a pair of shoes she might buy. "I\'m Kendra, but you can call me Mistress," she replies in an exotic accent. "If you like, I can train you to become one of my slaves."');
      scene.text('You\'re taken aback by her comment. "Slaves?"');
      scene.text('She smiles. "Yes, I have many sex slaves here, and I can train you to serve me well. If you\'re interested, come to my dorm room. It\'s on the eighth floor of the east dorm, room 808."');
      scene.text('She then ignores you, leaving you to wonder if you should visit her dorm room and see what she was talking about…');
      scene.actions([
        { label: 'Leave Kendra be', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: There''s something about this ebony girl that intrigues you, so you decide to si...
      scene.text(`There's something about this ebony girl that intrigues you, so you decide to sit next to her. "Hi, I'm ${((s as any).pcs_nickname || '')}."`);
      scene.text('"No. Not interested. Maybe if you do something about all of… \'this\', you can try again." Her hand indicates your entire person with languid disinterest.');
      scene.text('You\'re taken aback by her comment. "What?"');
      scene.text('She rolls her eyes, believing your shocked silence to be stupidity. "Just go away."');
      scene.text('She then ignores you, leaving you to wonder if she doesn\'t find you attractive enough to get her attention. Maybe if you were better looking she would talk to you?');
      scene.actions([
        { label: 'Leave her be', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterArtem(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You walk over to his table.');
  if (((s as any).npc_rel ?? 0)?.['A2'] >= 50) {
    ((s as any).artemQW = (s as any).artemQW ?? {})['knows_dorm_room_number'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('You sit next to Artem and talk about your classes, fellow students, roommates and life in general for a while.');
    scene.text('"I don\'t mean to be rude, but I really need to finish this," he says with a small smile. "Why don\'t you come to my dorm room sometime and we can hang out then? I\'m in room 209."');
    scene.text('You nod and say your goodbyes before leaving him to study in peace.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A2'] >= 20) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.text('You sit next to Artem. You try and have a conversation with him, but it\'s mostly just you talking as he tries to study.');
      scene.text('"I\'d love to chat, but I really need to study. Maybe we can talk at the cafe or something sometime, but if you don\'t mind…"');
      scene.text('He indicates his book and, getting the hint, you leave him alone.');
    } else {
      scene.text('You sit next to Artem, who just looks over at you.');
      scene.text('"I\'m busy and need to study, so please go sit somewhere else."');
      scene.text('You sigh and get up and move away.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him be', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
  ]);
  scene.build();
}

function enterAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  scene.text('You walk over to her table.');
  if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
    ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You exchange greetings as you sit. Anushka seems really intent on her studies and is polite at first, but after a few minutes she stops responding.');
    scene.text('She then turns to you. "I don\'t mean to be rude, but can you politely fuck off?" she asks in a teasing tone with a smile on her face. "But in all seriousness, I really do need to get this done. This is one of the few times I have to be in the library. If you want to hang out, you can stop by the Coffee Hole or come by my apartment."');
    scene.text('She tells you where the apartment she shares with the boys from the band is located. With that, you get the hint and leave her alone.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 20) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.text('You sit next to Anushka and try to have a conversation with her, but it\'s mostly just you talking as she tries to study.');
      scene.text('After a few minutes, she turns to you. "I don\'t have time to hang out and chat. I\'ve got to get this studying done now while I have some free time. Stop by the Coffee Hole sometime if you want to talk. I sometimes have free time then."');
      scene.text('You get the hint and leave her alone.');
    } else {
      scene.text('You sit next to Anushka and she looks over at you.');
      scene.text('"Go the fuck away. Can\'t you see I\'m busy?"');
      scene.text('You sigh and get up and move away.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave her be', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
  ]);
  scene.build();
}

function enterAlbina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A23', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('You approach her as she continues searching the shelves.');
  if ((((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg')  &&  ((s as any).npc_rel ?? 0)?.['A23'] < 60) {
    scene.text('You can\'t help but stare at her ass as she reaches for a book, showing off her well toned physique.');
    // TODO-QSP: dynamic text: "You always were an awkward loser back in school, but you''re being extra weird ...
    scene.text(`"You always were an awkward loser back in school, but you're being extra weird right now, ${((s as any).pcs_nickname || '')}…"`);
    scene.text('"Uhh.. What?" you mumble as you\'re brought back to your senses.');
    scene.text('Albina rolls her eyes. "Put your tongue back in and stop drooling at my ass like some pervy loser!"');
    scene.text('You just mumble an apology as she barges past you and heads round the corner out of view.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," she says with a smile when she sees you.
      scene.text(`"Hey ${((s as any).pcs_nickname || '')}," she says with a smile when she sees you.`);
      scene.text('"What\'s up?" you ask.');
      scene.text('"Just grabbing some books to take back to my room," she replies.');
      scene.text('"Why not study here?" you ask.');
      scene.text('"I prefer studying in private without any distractions. Now I\'d love to chat, but I need to get going."');
      scene.text('You just nod as she brushes past you.');
      if (((s as any).AlbinaQW ?? 0)?.['dorm_invite'] === 0) {
        ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['dorm_invite'] = 1;
        scene.text('"Oh, one last thing," she says as she stops and turns back to face you. "It\'s insane that you haven\'t visited me at my dorm room yet!"');
        if (((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg') {
          scene.text('"Really?" you reply. "You want me to come to your room?"');
          scene.text('"Totally!" she smiles. "There\'s something different about you and I want to get to the bottom of it! Seventh floor, room 707. Don\'t keep me waiting!"');
        } else {
          scene.text('"When should I come by and fix that?" you ask with a smile.');
          scene.text('"I\'m home most evenings. Seventh floor, room 707. Don\'t keep me waiting!"');
        }
        (s as any).temp_showtext = 0;
        (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "uni_library" });
        if (((s as any).temp_index ?? 0) < 0) {
          qspCall(s, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
          (s as any).temp_showtext = 1;
        } else {
          if (((s as any).contactAnon ?? 0)?.[String((s as any).temp_index ?? 0)] !== 0) {
            ((s as any).contactAnon = (s as any).contactAnon ?? {})[String((s as any).temp_index ?? 0)] = 0;
            (s as any).temp_showtext = 1;
          }
        }
        if (((s as any).temp_showtext ?? 0)) {
          scene.text('She pulls her phone out. "Here\'s my number so we can text each other."');
          scene.text('You add each other\'s numbers to your phones before you say goodbye and she walks away.');
        }
      }
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] > 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 250) {
        if (((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
          scene.text('"Are you here to study or are you looking for a cock to suck?" she asks with a grin.');
          scene.text('You just smile while shaking your head at her jest.');
          scene.text('"I\'d love to chat, but I need to get going," she says.');
          scene.text('You just nod as she brushes past you and heads around the corner out of view.');
        } else {
          scene.text('"Ugh…" she scowls in disgust. "The slut is on the hunt for a dick to milk. Piss off and do that shit somewhere else, you disease ridden cum dumpster!"');
          scene.text('You quickly turn and walk away before she causes a scene.');
        }
      } else {
        scene.text('She barely acknowledges your presence before continuing to search the shelves and ignoring you.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_library', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'study':
      enterStudy(s, scene);
      break;
    case 'studying':
      enterStudying(s, scene);
      break;
    case 'studying_exam':
      enterStudyingExam(s, scene);
      break;
    case 'wander':
      enterWander(s, scene);
      break;
    case 'read':
      enterRead(s, scene);
      break;
    case 'loan':
      enterLoan(s, scene);
      break;
    case 'kendra':
      enterKendra(s, scene);
      break;
    case 'artem':
      enterArtem(s, scene);
      break;
    case 'anushka':
      enterAnushka(s, scene);
      break;
    case 'albina':
      enterAlbina(s, scene);
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
  description: ['One of the medium sized buildings is the university\'s library. It is three stories tall and filled with books, sections with tables scattered around to study or relax at and computer stations to help students with their studying.'],
  enter: enter,
};
