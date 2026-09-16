// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRstd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === ''  &&  ((s as any).locArgs?.[1] ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 'A' + ((s as any).locArgs?.[1] ?? 0) + '';
  }
  if (!isNaN((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1)))) && (String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) !== ''  &&  parseFloat((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1)))) < 10) {
    (s as any).tempvan1 = 'A' + ((s as any).locArgs?.[1] ?? 0);
  } else {
    (s as any).tempvan1 = ((s as any).locArgs?.[1] ?? 0);
  }
  if ((Math.floor(Math.random() * 101) + 0) === 100) {
    (s as any).tempvenerial = Math.floor(Math.random() * 4) + 1;
    if (((s as any).tempvenerial ?? 0) === 1) {
      ((s as any).npc_herpes = (s as any).npc_herpes ?? {})[String((s as any).tempvan1 ?? 0)] = 1;
    } else {
      if (((s as any).tempvenerial ?? 0) === 2) {
        ((s as any).npc_syth = (s as any).npc_syth ?? {})[String((s as any).tempvan1 ?? 0)] = 1;
      } else {
        if (((s as any).tempvenerial ?? 0) === 3) {
          ((s as any).npc_gon = (s as any).npc_gon ?? {})[String((s as any).tempvan1 ?? 0)] = 1;
        } else {
          ((s as any).npc_thrush = (s as any).npc_thrush ?? {})[String((s as any).tempvan1 ?? 0)] = 1;
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'rstd':
      enterRstd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npcgenext: LocationDef = {
  name: 'npcgenext',
  region: 'other',
  enter: enter,
};
