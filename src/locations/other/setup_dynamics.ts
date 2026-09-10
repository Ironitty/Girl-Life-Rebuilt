// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $d_mother[1] = "gs 'dinmother', 'd_mother[1]'"
  // TODO-QSP: $d_mother[2] = "gs 'dinmother', 'd_mother[2]'"
  // TODO-QSP: $d_mother[3] = "gs 'dinmother', 'd_mother[3]'"
  // TODO-QSP: $d_mother[4] = "gs 'dinmother', 'd_mother[4]'"
  // TODO-QSP: $d_mother[5] = "gs 'dinmother', 'd_mother[5]'"
  // TODO-QSP: $d_mother[6] = "gs 'dinmother', 'd_mother[6]'"
  // TODO-QSP: $d_mother[7] = "gs 'dinmother', 'd_mother[7]'"
  // TODO-QSP: $d_mother[8] = "gs 'dinmother', 'd_mother[8]'"
  scene.build();
}

export const setup_dynamics: LocationDef = {
  name: 'setup_dynamics',
  region: 'other',
  enter: enter,
};
