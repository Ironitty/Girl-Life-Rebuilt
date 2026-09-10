// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).moodTypeRand ?? 0) <= 0) {
  } else {
    if (((s as any).moodTypeRand ?? 0) >= 4) {
    }
  }
  scene.build();
}

export const city_saunawhore: LocationDef = {
  name: 'city_saunawhore',
  title: 'Sauna',
  region: 'city',
  locationType: 'bathroom',
  enter: enter,
};
