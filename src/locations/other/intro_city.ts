// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWelcomeIntro(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_end', 'start'] }]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'welcome_intro':
      enterWelcomeIntro(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_city: LocationDef = {
  name: 'intro_city',
  region: 'other',
  enter: enter,
};
