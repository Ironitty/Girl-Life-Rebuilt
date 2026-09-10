// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter1(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    default:
      enter1(s, scene);
      break;
  }
}

export const indik: LocationDef = {
  name: 'indik',
  title: '<<ARGS[2]>>',
  region: 'other',
  enter: enter,
};
