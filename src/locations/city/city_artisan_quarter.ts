import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) !== ((s as any).curloc ?? 0)) {
    // TODO-QSP: gs $curloc, 'init'
  }
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'core_library', 'stage_title');
  // TODO-QSP: end
  scene.build();
}

function enterNavigation(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Mariinsky Theatre', goto: ['city_mariinsky', 'start'] },
    { label: 'Canals', goto: ['city_canals', 'start'] },
    { label: 'Park', goto: ['city_artisan_quarter', 'park'] },
  ]);
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs $curloc, 'setup', $ARGS[0]
  // TODO-QSP: end
  scene.build();
}

function enterDates(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  // TODO-QSP: end
  scene.build();
}

function enterPark(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'navigation':
      enterNavigation(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'dates':
      enterDates(s, scene);
      break;
    case 'park':
      enterPark(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_artisan_quarter: LocationDef = {
  name: 'city_artisan_quarter',
  region: 'city',
  enter: enter,
};
