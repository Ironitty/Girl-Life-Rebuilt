import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 1, 'Elektra', 27);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).bdsmclub['training_daystart'] = ((s as any).daystart ?? 0);
  if (((s as any).bdsmclub ?? 0)?.['subtraining'] === 0) {
    (s as any).bdsmclub['subtraining'] = 1;
    scene.actions([{ label: 'Continue', goto: ['bdsm_training', 'sub_1'] }]);
  } else {
    (s as any).bdsmclub['subtraining'] = 2;
    scene.actions([{ label: 'Continue', goto: ['bdsm_training', 'sub_2'] }]);
    if (((s as any).bdsmclub ?? 0)?.['subtraining'] === 2) {
      (s as any).bdsmclub['subtraining'] = 3;
      scene.actions([{ label: 'Continue', goto: ['bdsm_training', 'sub_3'] }]);
    }
  }
  scene.build();
}

export const bdsm_training: LocationDef = {
  name: 'bdsm_training',
  title: 'You are in the Club, security checks your name off the list ',
  region: 'other',
  enter: enter,
};
