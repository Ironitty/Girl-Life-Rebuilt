// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $MWindow[] = $maintxt
  // TODO-QSP: $AWindow[] = $curacts
  scene.build();
}

export const saveposition: LocationDef = {
  name: 'saveposition',
  region: 'other',
  enter: enter,
};
