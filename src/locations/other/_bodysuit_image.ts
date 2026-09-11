// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterScandalicious(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'moncheri') {
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'salacious') {
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'lusso') {
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'scandalicious':
      enterScandalicious(s, scene);
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
