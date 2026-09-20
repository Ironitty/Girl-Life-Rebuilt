import { dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGoHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['current'] === 'hunters_lodge') {
    qspGoto(s, 'gad_swamp_yard', 'start');
  } else {
    if (((s as any).home ?? 0)?.['location'] === 'pav_complex') {
      qspGoto(s, 'pav_complex', 'start');
    } else {
      dynamicGoto(s, (((s as any).home ?? {}))['location'], '');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoStraightHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home ?? 0)?.['current'] === 'lyceum_dorm') {
    qspGoto(s, 'ETO_hostel', 'town_hostel');
  } else {
    if (((s as any).home ?? 0)?.['current'] === 'university_dorm') {
      qspGoto(s, 'uni_dorm', 'dorm_room');
    } else {
      dynamicGoto(s, (((s as any).home ?? {}))['entrance'], 'start');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'go_home':
      enterGoHome(s, scene);
      break;
    case 'go_straight_home':
      enterGoStraightHome(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const din_npc: LocationDef = {
  name: 'din_npc',
  region: 'other',
  enter: enter,
};
