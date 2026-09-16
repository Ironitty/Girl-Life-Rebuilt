// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGm(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/gm/bras/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterLusso(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/lusso/bras/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterSalacious(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/salacious/bras/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterFashionista(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/fashionista/bras/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterCats(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/cats/bras/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterEroto(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/eroto/bras/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterDanilovich(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/danilovich/bras/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
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

export const _bra_image: LocationDef = {
  name: '_bra_image',
  region: 'other',
  enter: enter,
};
