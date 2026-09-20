import { hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).PirQuality = 0;
  (s as any).PirFirst = 0;
  (s as any).PirPrice = 0;
  if (hasLocation('$attributes_piercing_' + Number((s as any).locArgs?.[0] ?? 0))) {
    // TODO-QSP: gs '$attributes_piercing_<<$ARGS[0]>>', ARGS[1]
  }
  if ((!((s as any).PirQuality ?? 0))) {
    (s as any).PirFirst = 0;
    return;
  }
  scene.build();
}

export const piercing_attributes: LocationDef = {
  name: 'piercing_attributes',
  region: 'other',
  enter: enter,
};
