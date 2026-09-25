// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterScandalicious(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/scandalicious/bodysuits/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/moncheri/bodysuits/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterSalacious(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/salacious/bodysuits/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  scene.build();
}

function enterLusso(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'images/pc/items/lusso/bodysuits/' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
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
