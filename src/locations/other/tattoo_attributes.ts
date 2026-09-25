import { qspCall, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).TatQuality = 0;
  (s as any).TatPrice = 0;
  if (hasLocation('$attributes_tattoo_' + (String((s as any).locArgs?.[0] ?? '')))) {
    qspCall(s, '$attributes_tattoo_' + ((s as any).locArgs?.[0] ?? 0) + '', '', ((s as any).locArgs?.[1] ?? 0));
  }
  if ((!((s as any).TatQuality ?? 0))) {
    return;
  }
  scene.build();
}

export const tattoo_attributes: LocationDef = {
  name: 'tattoo_attributes',
  region: 'other',
  enter: enter,
};
