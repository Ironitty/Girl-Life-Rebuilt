// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any)._n_counter ?? 0)?.['duration'] === 0) {
    ((s as any)._n_counter = (s as any)._n_counter ?? {})['duration'] = 4000;
  }
  ((s as any)._n_counter = (s as any)._n_counter ?? {})['timer'] = (((s as any)._n_counter ?? 0)?.['duration']);
  ((s as any)._n_counter = (s as any)._n_counter ?? {})['shown'] = 1;
  ((s as any)._n_counter = (s as any)._n_counter ?? {})['lock'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $ARGS[1] = '<table><tr><td><<$ARGS[1]>></td></tr></table>'
  if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    if (Object.keys((s as any).notification_log ?? {}).length > 30) {
      // TODO-QSP: killvar 'notification_log', 0
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'display':
      enterDisplay(s, scene);
      break;
    case 'add':
      enterAdd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const notification: LocationDef = {
  name: 'notification',
  region: 'other',
  enter: enter,
};
