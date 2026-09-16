// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).sexprefrand = (Math.floor(Math.random() * ((((s as any).stat ?? {})?.['bj'] ?? 0) + (((s as any).stat ?? {})?.['vaginal'] ?? 0) + (((s as any).stat ?? {})?.['anal'] ?? 0) - 0 + 1)) + (0));
  if (((s as any).sexprefrand ?? 0) < ((s as any).stat ?? 0)?.['bj']) {
    (s as any).RESULT = 'bj';
  } else {
    if (((s as any).sexprefrand ?? 0) >= ((s as any).stat ?? 0)?.['bj']  &&  ((s as any).sexprefrand ?? 0) < ((s as any).stat ?? 0)?.['bj'] + ((s as any).stat ?? 0)?.['vaginal']) {
      (s as any).RESULT = 'vaginal';
    } else {
      (s as any).RESULT = 'anal';
    }
  }
  scene.build();
}

export const sexprefrand: LocationDef = {
  name: 'sexprefrand',
  region: 'other',
  enter: enter,
};
