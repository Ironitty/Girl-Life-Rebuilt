import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'core_library', 'setloc', 'bdsm_gameroom', '');
  scene.img('images/locations/city/suburb/bdsm_club/games.jpg');
  scene.text('Games room');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the landing', goto: ['bdsm_landing', ''] },
  ]);
  scene.build();
}

function enterCheckEvents(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 0) < 97) {
    // TODO-QSP: exit
  }
  scene.actions([{ label: 'Continue', goto: ['bdsm_gameroom', 'event_1'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEvent_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/maid_a5.jpg');
  scene.text('A maid is crawling along a bench seat showing everyone her pussy and anus.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_gameroom', ''] },
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

export const bdsm_gameroom: LocationDef = {
  name: 'bdsm_gameroom',
  title: 'Games room',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
