import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_transportVars['rand'] = Math.floor(Math.random() * 100) + 1;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] <= 15) {
    scene.actions([{ label: 'Continue', goto: ['train_events', 'oldman'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['train_events', 'fit'] }]);
    if (((s as any).temp_transportVars ?? 0)?.['rand'] <= 77) {
      scene.actions([{ label: 'Continue', goto: ['train_events', 'young'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['train_events', 'breastfeed'] }]);
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    }
  }
  scene.build();
}

export const train_events: LocationDef = {
  name: 'train_events',
  title: 'You choose an empty seat by the window and look outside, los',
  region: 'other',
  enter: enter,
};
