import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "exp_gain" }));
  // TODO-QSP: gs 'exp_notification', 'track_exp', 'inhib', ARGS[1]
  return;
  scene.build();
}

export const exp_gain: LocationDef = {
  name: 'exp_gain',
  title: 'Error in gs \'exp_gain\': <<$ARGS[0]>> is neither a skill nor an attribute',
  region: 'other',
  enter: enter,
};
