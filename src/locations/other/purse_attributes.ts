import { qspCall, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'purses', 'reset_PurseVars');
  if (hasLocation('$attributes_' + (String((s as any).locArgs?.[0] ?? '')) + '_purses')) {
    qspCall(s, '$attributes_' + ((s as any).locArgs?.[0] ?? 0) + '_purses', '', ((s as any).locArgs?.[1] ?? 0));
  }
  if ((!((s as any).PurseQuality ?? 0))) {
    return;
  }
  scene.build();
}

export const purse_attributes: LocationDef = {
  name: 'purse_attributes',
  region: 'other',
  enter: enter,
};
