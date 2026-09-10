import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'arousal', $ARGS[0], ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[8...
  qspCall(s, 'arousal', 'end');
  scene.build();
}

export const arousal_oneline: LocationDef = {
  name: 'arousal_oneline',
  region: 'other',
  enter: enter,
};
