// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'ears') {
    (s as any).result = 24;
  } else {
    (s as any).result = 7;
    if (((s as any).locArgs?.[1] ?? 0) === 'brow') {
      (s as any).result = 2;
    } else {
      (s as any).result = 7;
      if (((s as any).locArgs?.[1] ?? 0) === 'tongue') {
        (s as any).result = 4;
      } else {
        (s as any).result = 4;
        if (((s as any).locArgs?.[1] ?? 0) === 'nipples') {
          (s as any).result = 7;
        } else {
          (s as any).result = 10;
        }
        return;
      }
    }
  }
  scene.build();
}

export const piercing_management: LocationDef = {
  name: 'piercing_management',
  title: 'Piercing Management',
  region: 'other',
  enter: enter,
};
