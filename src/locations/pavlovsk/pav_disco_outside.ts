// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] >= 2) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'hotel_pre'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'slut_invite'] }]);
    if (((s as any).temp ?? 0)?.['drunk_guy'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'invite_beer'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_outside', 'invite_chat'] }]);
    }
  }
  scene.build();
}

export const pav_disco_outside: LocationDef = {
  name: 'pav_disco_outside',
  title: 'You leave the disco with the guy and walk into a quiet garde',
  region: 'pavlovsk',
  enter: enter,
};
