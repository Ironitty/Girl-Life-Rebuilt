import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).evt_transient['type'] = qspUntranslated(s, "ARGS[1]", { location: "jobs_gigs" });
  (s as any).evt_transient['subtype'] = qspUntranslated(s, "ARGS[2]", { location: "jobs_gigs" });
  (s as any).evt_transient['desc'] = ((s as any).locArgs?.[3] ?? 0);
  (s as any).evt_transient['journal'] = ((s as any).locArgs?.[4] ?? 0);
  (s as any).evt_transient['verbose'] = qspUntranslated(s, "ARGS[5]", { location: "jobs_gigs" });
  scene.build();
}

function enterSetLocCode(s: GameState, scene: SceneBuilder): void {
  (s as any).evt_transient['loc'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).evt_transient['arg'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).evt_transient['code'] = ((s as any).locArgs?.[3] ?? 0);
  scene.build();
}

function enterSetWageScale(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 0) {
    (s as any).evt_transient['wage'] = 0;
  } else {
    (s as any).evt_transient['wage'] = ((s as any).rand ?? 0)(2, 10) * 50;
    if (((s as any).ARGS ?? 0)[1] === 2) {
      (s as any).evt_transient['wage'] = ((s as any).rand ?? 0)(10, 20) * 50;
    } else {
      (s as any).evt_transient['wage'] = ((s as any).rand ?? 0)(20, 40) * 50;
      if (((s as any).ARGS ?? 0)[1] === 4) {
        (s as any).evt_transient['wage'] = ((s as any).rand ?? 0)(40, 80) * 50;
      } else {
        (s as any).evt_transient['wage'] = qspUntranslated(s, "ARGS[2]", { location: "jobs_gigs" });
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_event':
      enterSetEvent(s, scene);
      break;
    case 'set_loc_code':
      enterSetLocCode(s, scene);
      break;
    case 'set_wage_scale':
      enterSetWageScale(s, scene);
      break;
    default:
      enterSetEvent(s, scene);
      break;
  }
}

export const jobs_gigs: LocationDef = {
  name: 'jobs_gigs',
  region: 'other',
  enter: enter,
};
