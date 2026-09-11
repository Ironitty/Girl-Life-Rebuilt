import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'coats', 'reset_CoatVars');
  if (((s as any).loc ?? 0)('$attributes_' + ((s as any).locArgs?.[0] ?? 0) + '_coats')) {
    // TODO-QSP: gs '$attributes_<<$ARGS[0]>>_coats', ARGS[1]
  }
  if ((!((s as any).CoatQuality ?? 0))) {
    // TODO-QSP: exit
  }
  (s as any).CoatMaxStrength = ((s as any).CoatStrength ?? 0);
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "ARGS[2]", { location: "coat_attributes" }))) {
    // TODO-QSP: dynamic "
    (s as any).CoatStrength = qspUntranslated(s, "((s as any).locArgs?.[1] ?? 0)_coats_h[qspUntranslated(s, \"ARGS[2]\", { location: \"coat_attributes\" })]", { location: "coat_attributes" });
    // TODO-QSP: "
  }
  scene.build();
}

export const coat_attributes: LocationDef = {
  name: 'coat_attributes',
  region: 'other',
  enter: enter,
};
