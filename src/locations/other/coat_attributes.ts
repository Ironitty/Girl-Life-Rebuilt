import { qspCall, qspFunc, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'coats', 'reset_CoatVars');
  if (hasLocation('$attributes_' + (String((s as any).locArgs?.[0] ?? '')) + '_coats')) {
    // TODO-QSP: gs '$attributes_<<$ARGS[0]>>_coats', ARGS[1]
  }
  if ((!((s as any).CoatQuality ?? 0))) {
    // TODO-QSP: exit
  }
  (s as any).CoatMaxStrength = ((s as any).CoatStrength ?? 0);
  if (qspFunc(s, 'coats', 'is_owned', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
  }
  scene.build();
}

export const coat_attributes: LocationDef = {
  name: 'coat_attributes',
  region: 'other',
  enter: enter,
};
