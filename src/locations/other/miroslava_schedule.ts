import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIsHere(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrsize ?? 0)('ARGS') === 1) {
    (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 2) {
    (s as any).ARGS[2] = ((s as any).loc_arg ?? 0);
  }
  (s as any).result = qspFunc(s, 'miroslava_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A60_loc'], ((s as any).locat ?? 0)?.['A60_arg']);
  return;
  scene.build();
}

function enterWasHere(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arrsize ?? 0)('ARGS') === 1) {
    (s as any).ARGS[1] = ((s as any).loc ?? 0);
  }
  if (((s as any).arrsize ?? 0)('ARGS') === 2) {
    (s as any).ARGS[2] = ((s as any).loc_arg ?? 0);
  }
  (s as any).result = qspFunc(s, 'miroslava_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A60_loc_prev'], ((s as any).locat ?? 0)?.['A60_arg_prev']);
  return;
  scene.build();
}

function enterHereCore(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'forest') {
    (s as any).result = (((s as any).locArgs?.[3] ?? 0) === 'gad_forest'  ||  ((s as any).locArgs?.[3] ?? 0) === 'gad_meadow'  ||  ((s as any).locArgs?.[3] ?? 0) === 'gad_swamp');
  } else {
    (s as any).result = (((((s as any).locArgs?.[3] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'gad_gp');
    if (((s as any).locArgs?.[1] ?? 0) === 'forest_road') {
      (s as any).result = (((s as any).locArgs?.[3] ?? 0) === 'gad_road'  ||  ((s as any).locArgs?.[3] ?? 0) === 'mitkabuh_group'  ||  (((s as any).locArgs?.[3] ?? 0) === 'bus'  &&  (('gadukino;gadukino_tickets').indexOf((((s as any).locArgs?.[4] ?? 0)))) + 1));
    } else {
      (s as any).result = (((s as any).locArgs?.[3] ?? 0) === 'gad_river'  ||  ((s as any).locArgs?.[3] ?? 0) === 'gad_beach');
      (s as any).result = (((s as any).locArgs?.[3] ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).locArgs?.[4] ?? 0) === ((s as any).locArgs?.[2] ?? 0));
    }
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'is_here':
      enterIsHere(s, scene);
      break;
    case 'was_here':
      enterWasHere(s, scene);
      break;
    case 'here_core':
      enterHereCore(s, scene);
      break;
    default:
      enterIsHere(s, scene);
      break;
  }
}

export const miroslava_schedule: LocationDef = {
  name: 'miroslava_schedule',
  region: 'other',
  enter: enter,
};
