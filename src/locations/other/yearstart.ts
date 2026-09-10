// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) < 8  &&  ((s as any).year ?? 0) > 2016) {
    if (((s as any).yearstart ?? 0) !== (((s as any).year ?? 0) - 2016)) {
      (s as any).yearstart = ((s as any).year ?? 0) - 2016;
    }
  } else {
    if (((s as any).yearstart ?? 0) !== (((s as any).year ?? 0) - 2015)) {
      (s as any).yearstart = ((s as any).year ?? 0) - 2015;
    }
  }
  scene.build();
}

export const yearstart: LocationDef = {
  name: 'yearstart',
  region: 'other',
  enter: enter,
};
