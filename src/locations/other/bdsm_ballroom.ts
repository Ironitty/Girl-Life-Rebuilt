import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBallroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_ballroom', 'ballroom');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/ballroom.jpg');
  scene.text('Ballroom');
  scene.actions([
    { label: 'Go to the Foyer', goto: ['bdsm_hallway', 'foyer'] },
    { label: 'Go to the Atrium', goto: ['bdsm_ballroom', 'atrium'] },
  ]);
  scene.build();
}

function enterAtrium(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_ballroom', 'atrium');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/atrium.jpg');
  scene.text('Atrium');
  scene.actions([
    { label: 'Go to the Ballroom', goto: ['bdsm_ballroom', 'ballroom'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ballroom':
      enterBallroom(s, scene);
      break;
    case 'atrium':
      enterAtrium(s, scene);
      break;
    default:
      enterBallroom(s, scene);
      break;
  }
}

export const bdsm_ballroom: LocationDef = {
  name: 'bdsm_ballroom',
  title: 'Ballroom',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
