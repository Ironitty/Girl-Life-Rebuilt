// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDolls(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'fashionista') {
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'coco') {
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'flamingos') {
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'danilovich') {
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'gm') {
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'cats') {
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'nerdvana') {
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 'moncheri') {
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 'bomba') {
                  }
                }
              }
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
    case 'dolls':
      enterDolls(s, scene);
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
