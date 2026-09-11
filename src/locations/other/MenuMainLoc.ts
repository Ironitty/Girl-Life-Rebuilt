import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat_cfg ?? {})['render_mode'] = 0;
  qspCall(s, 'stat', '');
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat_cfg ?? {})['render_mode'] = 2;
  qspCall(s, 'stat', '');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '0':
      enter0(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const MenuMainLoc: LocationDef = {
  name: 'MenuMainLoc',
  region: 'other',
  enter: enter,
};
