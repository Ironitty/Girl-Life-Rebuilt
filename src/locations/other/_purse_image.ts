// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDolls(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFashionista(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCoco(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFlamingos(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDanilovich(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGm(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCats(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNerdvana(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBomba(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dolls':
      enterDolls(s, scene);
      break;
    case 'fashionista':
      enterFashionista(s, scene);
      break;
    case 'coco':
      enterCoco(s, scene);
      break;
    case 'flamingos':
      enterFlamingos(s, scene);
      break;
    case 'danilovich':
      enterDanilovich(s, scene);
      break;
    case 'gm':
      enterGm(s, scene);
      break;
    case 'cats':
      enterCats(s, scene);
      break;
    case 'nerdvana':
      enterNerdvana(s, scene);
      break;
    case 'moncheri':
      enterMoncheri(s, scene);
      break;
    case 'bomba':
      enterBomba(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _purse_image: LocationDef = {
  name: '_purse_image',
  region: 'other',
  enter: enter,
};
