import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBath(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_bathrooms', 'bath');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/bath1.jpg');
  scene.text('A luxrious bathroom, designed to indulge and relax.');
  qspCall(s, 'din_van', 'private');
  scene.actions([
    { label: 'Return to landing', goto: ['bdsm_landing', ''] },
  ]);
  scene.build();
}

function enterEnsuite(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_bathrooms', 'ensuite');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/ensuite1.jpg');
  scene.text('An ensuite bathroom');
  qspCall(s, 'din_van', 'private');
  scene.build();
}

function enterRestroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_bathrooms', 'restroom');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/rest.jpg');
  scene.text('A beautiful little room for taking care of the essentials and making yourself look good.');
  qspCall(s, 'din_van', 'private');
  scene.actions([
    { label: 'Return to foyer', goto: ['bdsm_hallway', 'foyer'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bath':
      enterBath(s, scene);
      break;
    case 'ensuite':
      enterEnsuite(s, scene);
      break;
    case 'restroom':
      enterRestroom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bdsm_bathrooms: LocationDef = {
  name: 'bdsm_bathrooms',
  title: 'A luxrious bathroom, designed to indulge and relax.',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
