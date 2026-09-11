// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).TatQuality = 0;
  (s as any).TatPrice = 0;
  if (((s as any).loc ?? 0)('$attributes_tattoo_' + ((s as any).locArgs?.[0] ?? 0))) {
    // TODO-QSP: gs '$attributes_tattoo_<<$ARGS[0]>>', ARGS[1]
  }
  if ((!((s as any).TatQuality ?? 0))) {
    // TODO-QSP: exit
  }
  scene.build();
}

export const tattoo_attributes: LocationDef = {
  name: 'tattoo_attributes',
  region: 'other',
  enter: enter,
};
