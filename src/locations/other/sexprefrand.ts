// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).sexprefrand = ((s as any).rand ?? 0)(0, ((s as any).stat ?? 0)?.['bj'] + ((s as any).stat ?? 0)?.['vaginal'] + ((s as any).stat ?? 0)?.['anal']);
  if (((s as any).sexprefrand ?? 0) < ((s as any).stat ?? 0)?.['bj']) {
  }
  scene.build();
}

export const sexprefrand: LocationDef = {
  name: 'sexprefrand',
  region: 'other',
  enter: enter,
};
