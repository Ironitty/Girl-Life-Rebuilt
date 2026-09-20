// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    if (((s as any).tpKnown ?? 0)[Number((s as any).locArgs?.[0] ?? 0)] === 1) {
      // TODO-QSP: dynamic "act 'Enter the hidden circle of trees': gt 'treeCircle', '<<$ARGS[0]>>'"
    } else {
      // TODO-QSP: dynamic "act 'Investigate a mysterious copse of trees': gt 'treeCircle', '<<$ARGS[0]>>'"
    }
  }
  scene.build();
}

export const treeCircEntry: LocationDef = {
  name: 'treeCircEntry',
  region: 'other',
  enter: enter,
};
