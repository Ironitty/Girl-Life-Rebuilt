// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterComputers_101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_computers1', 'computers_101_events'] }]);
  scene.build();
}

function enterCompNush(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_computers1', 'anushka'] }]);
  scene.build();
}

function enterArt_101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_art1', 'art_101_events'] }]);
  scene.build();
}

function enterAlbinaArt(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_art1', 'albina_art'] }]);
  scene.build();
}

function enterPsychology_101(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_psychology1', 'psychology_101_events'] }]);
  scene.build();
}

function enterObeyKendra(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_shared1', 'obey_kendra'] }]);
  scene.build();
}

function enterObeyKendraLaydown(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_shared1', 'obey_kendra_laydown'] }]);
  scene.build();
}

function enterObeyKendraOffdesk(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_shared1', 'obey_kendra_offdesk'] }]);
  scene.build();
}

function enterObeyKendraTakecum(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives_shared1', 'obey_kendra_takecum'] }]);
  scene.build();
}

function enterStudyWithFriends(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['uni_lessons_electives', 'study_with_friends'] }]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'computers_101':
      enterComputers_101(s, scene);
      break;
    case 'comp_nush':
      enterCompNush(s, scene);
      break;
    case 'art_101':
      enterArt_101(s, scene);
      break;
    case 'albina_art':
      enterAlbinaArt(s, scene);
      break;
    case 'psychology_101':
      enterPsychology_101(s, scene);
      break;
    case 'obey_kendra':
      enterObeyKendra(s, scene);
      break;
    case 'obey_kendra_laydown':
      enterObeyKendraLaydown(s, scene);
      break;
    case 'obey_kendra_offdesk':
      enterObeyKendraOffdesk(s, scene);
      break;
    case 'obey_kendra_takecum':
      enterObeyKendraTakecum(s, scene);
      break;
    case 'study_with_friends':
      enterStudyWithFriends(s, scene);
      break;
    default:
      enterComputers_101(s, scene);
      break;
  }
}

export const uni_lessons_electivesev1: LocationDef = {
  name: 'uni_lessons_electivesev1',
  region: 'other',
  enter: enter,
};
