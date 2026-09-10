import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIsHome(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((qspUntranslated(s, "\u00000\u0000", { location: "artem_chebotarev_schedule" })).slice((1)-1, ((1)-1)+(4))) === 'home');
  return;
  scene.build();
}

function enterForce(s: GameState, scene: SceneBuilder): void {
  (s as any).artemLoc = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 'home_hallway') {
    (s as any).artemLoc = 1;
    (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
    (s as any).locat['A2_save1'] = 'home_hallway';
  } else {
    (s as any).artemLoc = 2;
    (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
    (s as any).locat['A2_save1'] = 'home_bedroom';
    if (((s as any).locArgs?.[1] ?? 0) === 'home_bathroom') {
      (s as any).artemLoc = 3;
      (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
      (s as any).locat['A2_save1'] = 'home_bathroom';
    } else {
      (s as any).artemLoc = 4;
      (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
      (s as any).locat['A2_save1'] = 'home_kitchen';
      if (((s as any).locArgs?.[1] ?? 0) === 'home_livingroom') {
        (s as any).artemLoc = 5;
        (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
        (s as any).locat['A2_save1'] = 'home_livingroom';
      } else {
        (s as any).artemLoc = 6;
        (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
        (s as any).locat['A2_save1'] = 'home_parents';
        (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
        (s as any).locat['A2_save1'] = ((s as any).locArgs?.[1] ?? 0);
      }
      qspCall(s, 'artem_chebotarev_schedule', 'set_schedule');
      return;
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'is_home':
      enterIsHome(s, scene);
      break;
    case 'force':
      enterForce(s, scene);
      break;
    default:
      enterIsHome(s, scene);
      break;
  }
}

export const artem_chebotarev_schedule: LocationDef = {
  name: 'artem_chebotarev_schedule',
  region: 'other',
  enter: enter,
};
