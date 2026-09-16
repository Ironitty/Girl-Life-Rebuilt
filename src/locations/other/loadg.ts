import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: showobjs max(1 - debug_warning_closed, cfg_vars['debug'])
  qspCall(s, 'addbuilddate', '');
  qspCall(s, 'saveupdater', '');
  ((s as any).debug = (s as any).debug ?? {})['trace_shown'] = 0;
  ((s as any).debug = (s as any).debug ?? {})['trace_loc_change'] = 0;
  scene.build();
}

export const loadg: LocationDef = {
  name: 'loadg',
  region: 'other',
  enter: enter,
};
