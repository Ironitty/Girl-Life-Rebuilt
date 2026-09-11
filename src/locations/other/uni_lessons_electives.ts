import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAfricanStudies101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_african_studies1', 'african_studies_101'] }]);
  scene.build();
}

function enterAfricanStudies102(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_african_studies1', 'african_studies_102'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterArt101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_art1', 'art_101'] }]);
  scene.build();
}

function enterArt102(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_art1', 'art_102'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterAsianStudies101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_101'] }]);
  scene.build();
}

function enterAsianStudies102(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_asian_studies1', 'asian_studies_102'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterComputers101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_computers1', 'computers_101'] }]);
  scene.build();
}

function enterComputers102(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_computers1', 'computers_102'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPsychology101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_psychology1', 'psychology_101'] }]);
  scene.build();
}

function enterPsychology102(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_psychology1', 'psychology_102'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterStudyWithFriends(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_hours_studied_with_friend = Math.min(Math.max(1, (18 - ((s as any).hour ?? 0))), 5);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.min(Math.max(0, 60 * (((s as any).hour ?? 0) - 17) + 45 - ((s as any).minut ?? 0)), 285));
  if (((s as any).university ?? 0)?.['semester_week'] > 0) {
    (s as any).temp_ule_i = 0;
    (s as any).temp_ule_i_max = 0;
    // TODO-QSP: :study_with_friends_loop
    if (((s as any).class_list_institution ?? 0)?.[String((s as any).temp_ule_i ?? 0)] === 'uni_' + ((s as any).university ?? 0)?.['enrolled_in'] + '_semester_' + ((s as any).university ?? 0)?.['enrolled_in_semester']) {
      if (((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).temp_ule_i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).temp_ule_i ?? 0)] + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)[((s as any).class_list_institution ?? 0)?.[String((s as any).temp_ule_i ?? 0)] + '_' + ((s as any).class_list_name ?? 0)?.[String((s as any).temp_ule_i ?? 0)] + '_optional_weekly_max']) {
        qspCall(s, 'grades', 'optional_activity_attribute', '' + qspUntranslated(s, "class_list_institution[temp_ule_i]>", { location: "uni_lessons_electives" }) + '', '' + qspUntranslated(s, "class_list_name[temp_ule_i]>", { location: "uni_lessons_electives" }) + '', 'yes', '' + qspUntranslated(s, "temp_hours_studied_with_friend>", { location: "uni_lessons_electives" }) + '');
        (s as any).temp_ule_i = ((s as any).temp_ule_i_max ?? 0) + 10;
      }
    }
    (s as any).temp_ule_i = ((s as any).temp_ule_i ?? 0) + (1);
    if (((s as any).temp_ule_i ?? 0) < ((s as any).temp_ule_i_max ?? 0)) {
      // TODO-QSP: jump 'study_with_friends_loop'
    }
    if (((s as any).temp_ule_i ?? 0) < ((s as any).temp_ule_i_max ?? 0) + 10) {
      // TODO-QSP: gs 'exp_gain', 'intel', temp_hours_studied_with_friend + rand(-1, 1)
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'African Studies 101':
      enterAfricanStudies101(s, scene);
      break;
    case 'African Studies 102':
      enterAfricanStudies102(s, scene);
      break;
    case 'Art 101':
      enterArt101(s, scene);
      break;
    case 'Art 102':
      enterArt102(s, scene);
      break;
    case 'Asian Studies 101':
      enterAsianStudies101(s, scene);
      break;
    case 'Asian Studies 102':
      enterAsianStudies102(s, scene);
      break;
    case 'Computers 101':
      enterComputers101(s, scene);
      break;
    case 'Computers 102':
      enterComputers102(s, scene);
      break;
    case 'Psychology 101':
      enterPsychology101(s, scene);
      break;
    case 'Psychology 102':
      enterPsychology102(s, scene);
      break;
    case 'study_with_friends':
      enterStudyWithFriends(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_lessons_electives: LocationDef = {
  name: 'uni_lessons_electives',
  region: 'other',
  enter: enter,
};
