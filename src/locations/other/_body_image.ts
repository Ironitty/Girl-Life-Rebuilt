// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBody(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTits(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'body':
      enterBody(s, scene);
      break;
    case 'tits':
      enterTits(s, scene);
      break;
    default:
      enterBody(s, scene);
      break;
  }
}

export const _body_image: LocationDef = {
  name: '_body_image',
  region: 'other',
  enter: enter,
};
