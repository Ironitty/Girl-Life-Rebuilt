// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.img('images/locations/gadukino/village/bike_nude.jpg');
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.img('images/locations/gadukino/village/bike_2.jpg');
    } else {
      scene.img('images/locations/gadukino/village/bike.jpg');
    }
  }
  scene.build();
}

export const bicycle: LocationDef = {
  name: 'bicycle',
  region: 'other',
  enter: enter,
};
