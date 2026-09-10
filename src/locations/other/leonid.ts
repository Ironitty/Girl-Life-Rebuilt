import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A160');
  (s as any).lustPool = 100;
  if (((s as any).leonidInFavour ?? 0) < -5) {
  } else {
    if (((s as any).leonidInFavour ?? 0) > 5) {
    }
  }
  scene.build();
}

export const leonid: LocationDef = {
  name: 'leonid',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'kitr',
  enter: enter,
};
