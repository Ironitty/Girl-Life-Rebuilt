// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterScandalicious(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSalacious(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLusso(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'scandalicious':
      enterScandalicious(s, scene);
      break;
    case 'moncheri':
      enterMoncheri(s, scene);
      break;
    case 'salacious':
      enterSalacious(s, scene);
      break;
    case 'lusso':
      enterLusso(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _bodysuit_image: LocationDef = {
  name: '_bodysuit_image',
  region: 'other',
  enter: enter,
};
