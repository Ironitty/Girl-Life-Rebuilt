import { qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  { const __t = String((s as any).locArgs?.[0] ?? ''); if (__t) qspGoto(s, __t, ''); }
  scene.build();
}

export const map_toggle: LocationDef = {
  name: 'map_toggle',
  region: 'other',
  enter: enter,
};
