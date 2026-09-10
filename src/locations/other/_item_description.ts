// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'gm') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'cats') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'eroto') {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'lusso') {
        }
        return;
      }
    }
  }
  scene.build();
}

export const _item_description: LocationDef = {
  name: '_item_description',
  region: 'other',
  enter: enter,
};
