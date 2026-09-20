import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) !== '') {
    qspCall(s, 'npcStat', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).locArgs?.[1] ?? 0));
  } else {
    // TODO-QSP: gs 'npcStat', $ARGS[0], ARGS[1]
  }
  scene.build();
}

export const boyStat: LocationDef = {
  name: 'boyStat',
  region: 'other',
  enter: enter,
};
