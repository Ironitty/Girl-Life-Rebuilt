// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterIsFree(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).hour ?? 0) >= ((s as any).npc_start_free_time ?? 0)[((s as any).locArgs?.[1] ?? 0)]  &&  ((s as any).hour ?? 0) <= ((s as any).npc_end_free_time ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    (s as any).result = 1;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'is_free':
      enterIsFree(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lover_schedule: LocationDef = {
  name: 'lover_schedule',
  region: 'other',
  enter: enter,
};
