import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).tab_tmp = Math.max(1, parseFloat(((s as any).locArgs?.[1] ?? 0)), ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = qspFunc(s, 'shortgs', 'show_table', ((s as any).locArgs?.[0] ?? 0), ((s as any).tab_tmp ?? 0));
  (s as any).tab_tmp = undefined;
  scene.build();
}

export const show_table: LocationDef = {
  name: 'show_table',
  region: 'other',
  enter: enter,
};
