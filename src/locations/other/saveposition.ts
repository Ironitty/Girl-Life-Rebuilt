// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).MWindow = [...((s as any).MWindow ?? []), ((s as any).maintxt ?? 0)];
  (s as any).AWindow = [...((s as any).AWindow ?? []), ((s as any).curacts ?? 0)];
  scene.build();
}

export const saveposition: LocationDef = {
  name: 'saveposition',
  region: 'other',
  enter: enter,
};
