// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGm(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLusso(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSalacious(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFashionista(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCats(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEroto(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDanilovich(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'gm':
      enterGm(s, scene);
      break;
    case 'lusso':
      enterLusso(s, scene);
      break;
    case 'salacious':
      enterSalacious(s, scene);
      break;
    case 'fashionista':
      enterFashionista(s, scene);
      break;
    case 'cats':
      enterCats(s, scene);
      break;
    case 'eroto':
      enterEroto(s, scene);
      break;
    case 'danilovich':
      enterDanilovich(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _panty_image: LocationDef = {
  name: '_panty_image',
  region: 'other',
  enter: enter,
};
