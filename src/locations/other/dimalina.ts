import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).dimbadgirl = 0;
  if ((!((s as any).dimlinaQW ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['dimalina', 'dimkalina1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['dimalina', 'dimkalina2'] }]);
    if (((s as any).dimlinaQW ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['dimalina', 'dimkalina3'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['dimalina', 'dimkalina4'] }]);
      if (((s as any).dimlinaQW ?? 0) === 4) {
        scene.actions([{ label: 'Continue', goto: ['dimalina', 'dimkalina5'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['dimalina', 'dimkalina6'] }]);
        if (((s as any).dimlinaQW ?? 0) === 6) {
          scene.actions([{ label: 'Continue', goto: ['dimalina', 'dimkalina7'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['dimalina', 'dimkalina8'] }]);
        }
      }
    }
  }
  scene.build();
}

export const dimalina: LocationDef = {
  name: 'dimalina',
  region: 'other',
  enter: enter,
};
