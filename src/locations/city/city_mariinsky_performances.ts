import { qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletqw ?? 0)?.['performances'] === 0) {
    ((s as any).balletqw = (s as any).balletqw ?? {})['performances'] = 1;
    qspGoto(s, 'city_mariinsky_performances', 'first_performance');
  } else {
    qspGoto(s, 'city_mariinsky_performances', 'performances');
  }
  scene.build();
}

function enterFirstPerformance(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPerformances(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'first_performance':
      enterFirstPerformance(s, scene);
      break;
    case 'performances':
      enterPerformances(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_mariinsky_performances: LocationDef = {
  name: 'city_mariinsky_performances',
  region: 'city',
  enter: enter,
};
