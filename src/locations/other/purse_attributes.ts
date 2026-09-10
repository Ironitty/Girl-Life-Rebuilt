import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: PurseQuality:
  // TODO-QSP: 1: Low quality
  // TODO-QSP: 2+: To be added later
  // TODO-QSP: PursePrice: The full price of the purse
  qspCall(s, 'purses', 'reset_PurseVars');
  if (((s as any).loc ?? 0)('attributes_\'0\'_purses')) {
    // TODO-QSP: gs '$attributes_<<$ARGS[0]>>_purses', ARGS[1]
  }
  if (((s as any).PurseQuality ?? 0) === 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'purses', 'is_owned', ((s as any).locArgs?.[0] ?? 0), qspUntranslated(s, "ARGS[1]", { location: "purse_attributes" }))) {
    // TODO-QSP: dynamic "
    (s as any).PurseStrength = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_purses_h[qspUntranslated(s, \"ARGS[1]\", { location: \"purse_attributes\" })]", { location: "purse_attributes" });
    // TODO-QSP: "
  }
  scene.build();
}

export const purse_attributes: LocationDef = {
  name: 'purse_attributes',
  region: 'other',
  enter: enter,
};
