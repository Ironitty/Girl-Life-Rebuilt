// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/map/university.png');
  scene.text('<a href="gt \'city_center\'" style="display:block;text-align:center;margin-top:10px;">Back to City</a>');
  scene.build();
}

export const map: LocationDef = {
  name: 'map',
  title: '<a href="gt \'city_center\'" style="display:block;text-align:c',
  region: 'other',
  enter: enter,
};
