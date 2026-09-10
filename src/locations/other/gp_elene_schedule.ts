import { qspCall, qspFunc } from '../_shared/qspBridge';

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
  (s as any).result = qspFunc(s, 'gp_elene_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A31_loc'], ((s as any).locat ?? 0)?.['A31_arg']);
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
  (s as any).result = qspFunc(s, 'gp_elene_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A31_loc_prev'], ((s as any).locat ?? 0)?.['A31_arg_prev']);
  return;
  scene.build();
}

function enterHereCore(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).locArgs?.[3] ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).locArgs?.[4] ?? 0) === ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  (s as any).locat['A31_rand'] = Math.floor(Math.random() * 840) + 0;
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).locat['A31_loc_prev'] = ((s as any).locat ?? 0)?.['A31_loc'];
  (s as any).locat['A31_arg_prev'] = ((s as any).locat ?? 0)?.['A31_arg'];
  (s as any).locat['A31_arg1_prev'] = ((s as any).locat ?? 0)?.['A31_arg1'];
  qspCall(s, 'gp_elene_schedule', 'update_locat');
  scene.build();
}

function enterUpdateLocat(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_elene_locat = qspFunc(s, 'gp_elene_schedule', 'get_base_schedule');
  if (((s as any).sunWeather ?? 0) === 0) {
    if (((s as any).temp_elene_locat ?? 0) === 200) {
      (s as any).temp_elene_locat = 110;
    }
  }
  (s as any).temp_elene_locat = qspFunc(s, 'gp_elene_schedule', 'get_random_schedule', ((s as any).temp_elene_locat ?? 0));
  qspCall(s, 'gp_elene_schedule', 'set_locats', ((s as any).temp_elene_locat ?? 0));
  scene.build();
}

function enterGetBaseSchedule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) <= 5) {
    (s as any).result = 100;
  } else {
    (s as any).result = 120;
    if (((s as any).hour ?? 0) === 7) {
      (s as any).result = 110;
    } else {
      if (((s as any).week ?? 0) < 4) {
        (s as any).result = 0;
      } else {
        (s as any).result = 110;
        (s as any).result = 300;
      }
      if (((s as any).hour ?? 0) <= 11) {
        if (((s as any).week ?? 0) < 4) {
          (s as any).result = 0;
        } else {
          (s as any).result = 110;
          if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
            (s as any).result = 300;
          } else {
            (s as any).result = 310;
          }
          if (((s as any).hour ?? 0) === 12) {
            (s as any).result = 120;
          } else {
            if (((s as any).week ?? 0) === 7) {
              (s as any).result = 120;
            } else {
              (s as any).result = 210;
            }
            if (((s as any).hour ?? 0) === 14) {
              if (((s as any).week ?? 0) === 7) {
                (s as any).result = 120;
              } else {
                (s as any).result = 110;
              }
            } else {
              (s as any).result = 110;
              if (((s as any).hour ?? 0) === 18) {
                (s as any).result = 120;
              } else {
                if (((s as any).week ?? 0) === 6) {
                  (s as any).result = 310;
                } else {
                  (s as any).result = 110;
                }
                (s as any).result = 100;
              }
            }
          }
        }
      }
    }
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
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'update_locat':
      enterUpdateLocat(s, scene);
      break;
    case 'get_base_schedule':
      enterGetBaseSchedule(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gp_elene_schedule: LocationDef = {
  name: 'gp_elene_schedule',
  region: 'other',
  enter: enter,
};
