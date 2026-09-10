import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bdsm_landing', 'check_events');
  qspCall(s, 'core_library', 'setloc', 'bdsm_landing', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/wlanding.jpg');
  scene.actions([
    { label: 'Go downstairs to the foyer', goto: ['bdsm_hallway', 'foyer'] },
    { label: 'Visit the master bedroom', goto: ['bdsm_bedwest', 'master'] },
    { label: 'Visit guest bedroom', goto: ['bdsm_bedwest', 'guest'] },
    { label: 'Visit guest bedroom 2', goto: ['bdsm_bedeast', 'start'] },
    { label: 'Go to the bathroom', goto: ['bdsm_bathrooms', 'bath'] },
    { label: 'Visit the games room', goto: ['bdsm_gameroom', ''] },
  ]);
  scene.build();
}

function enterCheckEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rand ?? 0) (0, 99) < 97) {
    // TODO-QSP: exit
  }
  scene.actions([{ label: 'Continue', goto: ['bdsm_landing', 'event_1'] }]);
  scene.build();
}

function enterEvent_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_sex_b1.mp4');
  scene.text('A maid is being helped with the vacuum cleaning by a man in casual clothing, you think about reporting him, but he\'s a bit busy right now.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_landing', 'west'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_events':
      enterCheckEvents(s, scene);
      break;
    case 'event_1':
      enterEvent_1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bdsm_landing: LocationDef = {
  name: 'bdsm_landing',
  title: 'A maid is being helped with the vacuum cleaning by a man in ',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
