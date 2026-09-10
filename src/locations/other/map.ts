// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *p '<p style="text-align:center;"><img src="images/system/map/university.png" style="width:80%;max-w...
  // TODO-QSP: *p '<a href="gt ''city_center''" style="display:block;text-align:center;margin-top:10px;">Back to Ci...
  scene.build();
}

export const map: LocationDef = {
  name: 'map',
  region: 'other',
  enter: enter,
};
