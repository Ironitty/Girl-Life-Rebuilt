import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_conservatory', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/conservatory.jpg');
  scene.text('This huge glass fronted room is kept very warm and houses a number of rare and exotic plants.');
  scene.text('It is one of the few places where you can just relax and enjoy the opulence of the mansion.');
  scene.actions([
    { label: 'Go to the Garden', goto: ['bdsm_garden', 'garden'] },
    { label: 'Go to the Foyer', goto: ['bdsm_hallway', 'foyer'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bdsm_conservatory: LocationDef = {
  name: 'bdsm_conservatory',
  title: 'This huge glass fronted room is kept very warm and houses a ',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
