// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npcStat_clean_i = 0;
  // TODO-QSP: :npcStat_clean_loop1
  if (((s as any).npcStat_clean_i ?? 0) > 0  &&  ((s as any).npcStatCalled ?? 0)?.[String((s as any).npcStat_clean_i ?? 0)] < ((s as any).daystart ?? 0) - 2) {
    (s as any).npcStat_clean_i = ((s as any).npcStat_clean_i ?? 0) - (1);
    // TODO-QSP: jump 'npcStat_clean_loop1'
  }
  (s as any).npcStat_clean_i = 1;
  // TODO-QSP: :npcStat_clean_loop2
  // TODO-QSP: dynamic "
  if (((s as any).npcID ?? 0)?.[String((s as any).npcStat_clean_i ?? 0)] !== ''  &&  ((s as any).npcStatCalled ?? 0)?.[String((s as any).npcStat_clean_i ?? 0)] < ((s as any).daystart ?? 0) - 2) {
  }
  // TODO-QSP: "
  (s as any).npcStat_clean_i = ((s as any).npcStat_clean_i ?? 0) + (1);
  if (((s as any).npcStat_clean_i ?? 0) < 26) {
    // TODO-QSP: jump 'npcStat_clean_loop2'
  }
  scene.build();
}

export const npcStat_clean: LocationDef = {
  name: 'npcStat_clean',
  region: 'other',
  enter: enter,
};
