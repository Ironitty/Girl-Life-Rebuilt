import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    (s as any).sex_ev['condom_count'] = 100;
  } else {
    (s as any).sex_ev['condom_count'] = Math.floor(Math.random() * 6) + 5;
    if (((s as any).sex_ev ?? 0)?.['condom_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      if ((Math.floor(Math.random() * 5) + 1) === 1) {
        (s as any).sex_ev['condom_count'] = 0;
      } else {
        (s as any).sex_ev['condom_count'] = Math.floor(Math.random() * 10) + 1;
      }
    } else {
      (s as any).sex_ev['condom_count'] = 0;
    }
    (s as any).sex_ev['condom_setup'] = 1;
    qspCall(s, 'sex_ev_sex', 'position_picker');
  }
  scene.build();
}

export const sex_ev_condoms: LocationDef = {
  name: 'sex_ev_condoms',
  region: 'other',
  enter: enter,
};
