import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bras', 'reset_BraVars');
  qspCall(s, 'panties', 'reset_PanVars');
  ((s as any).underwear = (s as any).underwear ?? {})['pair'] = 0;
  if (hasLocation('$attributes_' + Number((s as any).locArgs?.[0] ?? 0))) {
    // TODO-QSP: gs '$attributes_<<$ARGS[0]>>', ARGS[1]
  }
  if (((s as any).BraQuality ?? 0) === 0  &&  (!((s as any).PanQuality ?? 0))) {
    // TODO-QSP: exit
  }
  (s as any).PanMaxStrength = ((s as any).PanStrength ?? 0);
  (s as any).BraMaxStrength = ((s as any).BraStrength ?? 0);
  if ((0 as any) === 1) {
    // TODO-QSP: dynamic "
    (s as any).PanDirt = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_dirt[((s as any).locArgs?.[1] ?? 0)]", { location: "underwear_attributes" });
    (s as any).BraDirt = ((s as any).PanDirt ?? 0);
    (s as any).PanStrength = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_h[((s as any).locArgs?.[1] ?? 0)]", { location: "underwear_attributes" });
    (s as any).BraStrength = ((s as any).PanStrength ?? 0);
    // TODO-QSP: "
  }
  scene.build();
}

export const underwear_attributes: LocationDef = {
  name: 'underwear_attributes',
  region: 'other',
  enter: enter,
};
