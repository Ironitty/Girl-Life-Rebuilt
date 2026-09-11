import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc ?? {})['imagepath'] = 'locations/pavlovsk/resident/apartment/home';
  (s as any).music_loop = 0;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'home_family_init', 'trackers');
  scene.build();
}

function enterTrackers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'family_schedule', '');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'trackers':
      enterTrackers(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const home_family_init: LocationDef = {
  name: 'home_family_init',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
