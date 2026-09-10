import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_display', '');
  if (((s as any).stat_cfg ?? 0)?.['android'] === 1) {
    // TODO-QSP: pl $stat_msg
  }
  scene.build();
}

export const _menu_obnovit: LocationDef = {
  name: '_menu_obnovit',
  region: 'other',
  enter: enter,
};
