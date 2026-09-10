// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'pav_') {
    // TODO-QSP: $region[1] = 'pav'
  } else {
    // TODO-QSP: $region[1] = 'city'
    if (((((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(3))) === 'gad') {
      // TODO-QSP: $region[1] = 'gad'
    } else {
      // TODO-QSP: $region[1] = 'pushkin'
    }
  }
  scene.build();
}

export const core_library: LocationDef = {
  name: 'core_library',
  title: 'Your accommodation for the week has the luxury of a private ',
  region: 'other',
  locationType: 'private_shared',
  enter: enter,
};
