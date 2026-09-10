import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'telefon', 'phone_call_receive');
  if (((s as any).npc_QW ?? 0)?.['A192'] === 1  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).pcs_apprnc ?? 0) > 80) {
    scene.actions([{ label: 'Continue', goto: ['nastja', 'pos4'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['nastja', 'pos13'] }]);
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).npc_QW ?? 0)?.['A192'] === 2  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).pcs_apprnc ?? 0) > 80  &&  ((s as any).nastjaday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['nastja', 'pos12'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['nastja', 'pos22'] }]);
      if (((s as any).npc_QW ?? 0)?.['A192'] === 6  &&  ((s as any).nastjaday ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['nastja', 'pos31'] }]);
      } else {
        qspCall(s, 'telefon', 'phone_call_reject');
      }
    }
  }
  scene.build();
}

export const nastja: LocationDef = {
  name: 'nastja',
  region: 'other',
  enter: enter,
};
