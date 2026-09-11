// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'lusso') {
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'salacious') {
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'fashionista') {
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'cats') {
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'eroto') {
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'danilovich') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'gm':
      enterGm(s, scene);
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
