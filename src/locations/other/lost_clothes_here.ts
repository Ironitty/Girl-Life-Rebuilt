import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'clothing', 'lost_clothes_here', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

export const lost_clothes_here: LocationDef = {
  name: 'lost_clothes_here',
  region: 'other',
  enter: enter,
};
