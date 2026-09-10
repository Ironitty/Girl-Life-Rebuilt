import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).args ?? 0)[0] === 'rstd') {
    if (((s as any).locArgs?.[1] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[1] <= 0) {
      // TODO-QSP: exit
    }
    if (((s as any).locArgs?.[1] ?? 0) === '') {
      (s as any).ARGS[1] = 'A<<ARGS[1]>>';
    }
    if (((s as any).isnum ?? 0)(((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))))  &&  parseFloat(qspUntranslated(s, "\u00001\u0000", { location: "npcgenext" })) < 10) {
    }
    if (Math.floor(Math.random() * 101) + 0 === 100) {
      (s as any).tempvenerial = Math.floor(Math.random() * 4) + 1;
      if (((s as any).tempvenerial ?? 0) === 1) {
        (s as any).npc_herpes[$tempvan1] = 1;
      } else {
        (s as any).npc_syth[$tempvan1] = 1;
        if (((s as any).tempvenerial ?? 0) === 3) {
          (s as any).npc_gon[$tempvan1] = 1;
        } else {
          (s as any).npc_thrush[$tempvan1] = 1;
        }
      }
    }
  }
  scene.build();
}

export const npcgenext: LocationDef = {
  name: 'npcgenext',
  region: 'other',
  enter: enter,
};
