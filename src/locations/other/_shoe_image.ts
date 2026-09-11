// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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

export const _shoe_image: LocationDef = {
  name: '_shoe_image',
  region: 'other',
  enter: enter,
};
