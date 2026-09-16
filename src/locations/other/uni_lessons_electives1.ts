import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAfricanStudies101(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'African Studies 101');
  scene.build();
}

function enterAfricanStudies102(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'African Studies 102');
  // TODO-QSP: end
  scene.build();
}

function enterArt101(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'Art 101');
  scene.build();
}

function enterArt102(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'Art 102');
  scene.build();
}

function enterArt_101Model(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives_art1', 'art_101_model');
  scene.build();
}

function enterArt_101ModelIgor(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives_art1', 'art_101_model_igor');
  scene.build();
}

function enterArt_101ModelFeofan(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives_art1', 'art_101_model_feofan');
  scene.build();
}

function enterArt_101ModelNatasha(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives_art1', 'art_101_model_natasha');
  scene.build();
}

function enterArt_101ModelErmias(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives_art1', 'art_101_model_ermias');
  // TODO-QSP: end
  scene.build();
}

function enterAsianStudies101(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'Asian Studies 101');
  scene.build();
}

function enterAsianStudies102(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'Asian Studies 102');
  // TODO-QSP: end
  scene.build();
}

function enterComputers101(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'Computers 101');
  scene.build();
}

function enterComputers102(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'Computers 102');
  // TODO-QSP: end
  scene.build();
}

function enterPsychology101(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'Psychology 101');
  scene.build();
}

function enterPsychology102(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'uni_lessons_electives', 'Psychology 102');
  // TODO-QSP: end
  scene.build();
}

function enterStudyWithFriends(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'uni_lessons_electives', 'study_with_friends');
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
    case 'art_101_model':
      enterArt_101Model(s, scene);
      break;
    case 'art_101_model_igor':
      enterArt_101ModelIgor(s, scene);
      break;
    case 'art_101_model_feofan':
      enterArt_101ModelFeofan(s, scene);
      break;
    case 'art_101_model_natasha':
      enterArt_101ModelNatasha(s, scene);
      break;
    case 'art_101_model_ermias':
      enterArt_101ModelErmias(s, scene);
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

export const uni_lessons_electives1: LocationDef = {
  name: 'uni_lessons_electives1',
  region: 'other',
  enter: enter,
};
