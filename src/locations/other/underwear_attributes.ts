import { qspCall, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bras', 'reset_BraVars');
  qspCall(s, 'panties', 'reset_PanVars');
  ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 0;
  if (hasLocation('$attributes_' + (String((s as any).locArgs?.[0] ?? '')))) {
    qspCall(s, '$attributes_' + ((s as any).locArgs?.[0] ?? 0) + '', '', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).BraQuality ?? 0) === 0  &&  (!((s as any).PanQuality ?? 0))) {
    return;
  }
  (s as any).PanMaxStrength = ((s as any).PanStrength ?? 0);
  (s as any).BraMaxStrength = ((s as any).BraStrength ?? 0);
  if ((0 as any) === 1) {
  }
  scene.build();
}

export const underwear_attributes: LocationDef = {
  name: 'underwear_attributes',
  region: 'other',
  enter: enter,
};
