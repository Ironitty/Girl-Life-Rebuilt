import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  scene.build();
}

function enterFour(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_start', 'start'] }]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'four':
      enterFour(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_sg_m: LocationDef = {
  name: 'intro_sg_m',
  region: 'other',
  enter: enter,
};
