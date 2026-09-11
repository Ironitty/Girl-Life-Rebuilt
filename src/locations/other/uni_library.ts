import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
      enterStudy(s, scene);
      break;
  }
}

export const uni_library: LocationDef = {
  name: 'uni_library',
  title: 'The University Library',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You spend some time collecting some books on your subjects and grab one of the library\'s laptops before finding a quiet place to sit.'],
  enter: enter,
};
