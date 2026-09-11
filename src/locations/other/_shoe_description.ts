// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'cats') {
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'bomba') {
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'dolls') {
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'eroto') {
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'scandalicious') {
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'gm') {
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'danilovich') {
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
    case 'moncheri':
      enterMoncheri(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _shoe_description: LocationDef = {
  name: '_shoe_description',
  region: 'other',
  enter: enter,
};
