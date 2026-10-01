import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  const id = String((s as any).locArgs?.[0] ?? '');
  const index = String((s as any).locArgs?.[1] ?? '') === '' ? '0' : String((s as any).locArgs?.[1] ?? '');
  qspCall(s, 'npcStat', id, index);
  scene.build();
}

export const boyStat: LocationDef = {
  name: 'boyStat',
  region: 'other',
  enter: enter,
};
