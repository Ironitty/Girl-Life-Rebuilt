import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_kitchen', 'kitchen');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/kitchen.jpg');
  scene.actions([
    { label: 'Go to the Foyer', goto: ['bdsm_hallway', 'foyer'] },
    { label: 'Go to the laundry room', goto: ['bdsm_kitchen', 'laundry'] },
    { label: 'Look in the pantry', goto: ['bdsm_kitchen', 'pantry'] },
  ]);
  scene.build();
}

function enterLaundry(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_kitchen', 'laundry');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/laundry.jpg');
  scene.text('The laundry');
  scene.actions([
    { label: 'Return to the Kitchen', goto: ['bdsm_kitchen', 'kitchen'] },
  ]);
  scene.build();
}

function enterPantry(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_kitchen', 'pantry');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/pantry.jpg');
  scene.actions([
    { label: 'Return to the kitchen', goto: ['bdsm_kitchen', 'kitchen'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'laundry':
      enterLaundry(s, scene);
      break;
    case 'pantry':
      enterPantry(s, scene);
      break;
    default:
      enterKitchen(s, scene);
      break;
  }
}

export const bdsm_kitchen: LocationDef = {
  name: 'bdsm_kitchen',
  title: 'The laundry',
  region: 'other',
  locationType: 'private',
  locclass: 'kitr',
  enter: enter,
};
