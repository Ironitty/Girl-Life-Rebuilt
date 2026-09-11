// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletqw ?? 0)?.['rehearsals'] === 0) {
    ((s as any).balletqw ?? {})['rehearsals'] = 1;
    scene.actions([{ label: 'Continue', goto: ['city_mariinsky_rehearsals', 'first_rehearsal'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['city_mariinsky_rehearsals', 'rehearsals'] }]);
  }
  scene.build();
}

function enterFirstRehearsal(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRehearsals(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'first_rehearsal':
      enterFirstRehearsal(s, scene);
      break;
    case 'rehearsals':
      enterRehearsals(s, scene);
      break;
    default:
      enterInit(s, scene);
      break;
  }
}

export const city_mariinsky_rehearsals: LocationDef = {
  name: 'city_mariinsky_rehearsals',
  region: 'city',
  enter: enter,
};
