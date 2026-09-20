import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[0] ?? 0) === 1) {
    (s as any).result = qspFunc(s, 'progressbar', 'positive', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[3] ?? 0));
    return;
  }
  if (Number((s as any).locArgs?.[0] ?? 0) === 2) {
    (s as any).result = qspFunc(s, 'progressbar', 'negative', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[3] ?? 0));
    return;
  }
  if (Number((s as any).locArgs?.[0] ?? 0) === 3) {
    (s as any).result = qspFunc(s, 'progressbar', 'mono:accent', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[3] ?? 0));
    return;
  }
  (s as any).result = qspFunc(s, 'progressbar', 'positive', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[3] ?? 0));
  return;
  scene.build();
}

export const indiktab: LocationDef = {
  name: 'indiktab',
  region: 'other',
  enter: enter,
};
