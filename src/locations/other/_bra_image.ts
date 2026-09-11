// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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

export const _bra_image: LocationDef = {
  name: '_bra_image',
  region: 'other',
  enter: enter,
};
