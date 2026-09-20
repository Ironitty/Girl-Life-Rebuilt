import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['imagepath'] = 'images/' + 'locations/pavlovsk/resident/apartment/home';
  (s as any).mother_img_path = 'images/characters/pavlovsk/resident/mom/';
  (s as any).music_loop = 0;
  (s as any).location_type = 'private';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTrackers(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['imagepath'] = 'images/' + 'locations/pavlovsk/resident/apartment/home';
  (s as any).mother_img_path = 'images/characters/pavlovsk/resident/mom/';
  (s as any).music_loop = 0;
  (s as any).location_type = 'private';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTrackers(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterTrackers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'family_schedule', '');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
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
