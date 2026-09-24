import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', '$ARGS[0]', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0), ((s as any).locArgs?.[7] ?? 0), ((s as any).locArgs?.[8] ?? 0));
  qspCall(s, 'arousal', 'end');
  scene.build();
}

export const arousal_oneline: LocationDef = {
  name: 'arousal_oneline',
  region: 'other',
  enter: enter,
};
