// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    if (((s as any).tpKnown ?? 0)[String((s as any).locArgs?.[0] ?? '')] === 1) {
    }
  }
  scene.build();
}

export const treeCircEntry: LocationDef = {
  name: 'treeCircEntry',
  region: 'other',
  enter: enter,
};
