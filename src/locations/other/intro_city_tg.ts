// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_start', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterTatianaPRE(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_start', 'tg_adult_shared', '3'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterWelcomeIntro(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_end', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'tatianaPRE':
      enterTatianaPRE(s, scene);
      break;
    case 'welcome_intro':
      enterWelcomeIntro(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_city_tg: LocationDef = {
  name: 'intro_city_tg',
  region: 'other',
  enter: enter,
};
