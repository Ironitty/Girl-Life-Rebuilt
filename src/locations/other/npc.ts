import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCleanarrays(s: GameState, scene: SceneBuilder): void {
  (s as any).i_gs_cl = 0;
  while (true) {
    (s as any).i_gs_cl = ((s as any).i_gs_cl ?? 0) - (1);
    if (((s as any).i_gs_cl ?? 0) >= 0) {
      if ((String((String((((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) !== 'C') {
        break;
      }
      if (((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)] === ((s as any).npclastgenerated ?? 0)) {
        break;
      }
      if ((Array.isArray((s as any).cumarrnam) ? ((s as any).cumarrnam as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
        break;
      }
      if ((Array.isArray((s as any).sparrnam) ? ((s as any).sparrnam as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
        break;
      }
      if ((Array.isArray((s as any).cumfthname) ? ((s as any).cumfthname as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
        break;
      }
      if ((Array.isArray((s as any).wombpotfath) ? ((s as any).wombpotfath as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
        break;
      }
      if ((Array.isArray((s as any).wombName) ? ((s as any).wombName as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
        break;
      }
      if ((Array.isArray((s as any).ChildFath) ? ((s as any).ChildFath as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
        break;
      }
      if ((Array.isArray((s as any).ChildThFath) ? ((s as any).ChildThFath as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
        break;
      }
      qspCall(s, 'npccleanc', '', (String((((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)] ?? 0)).toUpperCase()));
      break;
    }
    (s as any).i_gs_cl = undefined;
  }
  scene.build();
}

function enterAge(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['day'] = (((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] % 100);
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['month'] = (((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 100) % 100;
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['year'] = ((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 10000;
  (s as any).result = qspFunc(s, 'time', 'get_age', (((s as any).temp_timeVars ?? 0)?.['year']), (((s as any).temp_timeVars ?? 0)?.['month']), (((s as any).temp_timeVars ?? 0)?.['day']));
  (s as any).temp_npcVars = undefined;
  scene.build();
}

function enterIsNpcID(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if ((String(((s as any).locArgs?.[1] ?? 0)).length) > 1) {
    (s as any).result = (((String('ABCDM').indexOf(String((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1)))))) + 1) > 0  &&  !isNaN((String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1))) && (String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1)) !== '');
  }
  return;
  scene.build();
}

function enterFindInNpcStat(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  (s as any).temp_npc_i = qspUntranslated(s, "arrpos('npcID', ARGS[1])", { location: "npc" });
  if (((s as any).temp_npc_i ?? 0) >= 0) {
    (s as any).result = '[' + ((s as any).temp_npc_i ?? 0) + ']';
    return;
  }
  (s as any).temp_npc_i = 1;
  do {
    if ((0 as any) === String((s as any).locArgs?.[1] ?? '')) {
      (s as any).result = '' + (String('abcdefghijklmnopqrstuvwxyz').slice((((s as any).temp_npc_i ?? 0))-1, ((((s as any).temp_npc_i ?? 0))-1)+(1))) + '';
    }
    (s as any).temp_npc_i = ((s as any).temp_npc_i ?? 0) + (1);
    (s as any).temp_npc_i = undefined;
    if (((s as any).result ?? 0) === '') {
      (s as any).result = 'none';
    }
  } while (((s as any).temp_npc_i ?? 0) < 10  &&  ((s as any).result ?? 0) === '');
  scene.build();
}

function enterCopyNpcStat(s: GameState, scene: SceneBuilder): void {
  if (!isNaN(String((s as any).locArgs?.[1] ?? '')) && String((s as any).locArgs?.[1] ?? '') !== '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '[' + ((s as any).locArgs?.[1] ?? 0) + ']';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') !== ''  &&  (String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) !== '[') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '' + ((String('abcdefghijklmnopqrstuvwxyz').indexOf(String(((s as any).locArgs?.[1] ?? 0)))) + 1) + '';
      if (String((s as any).locArgs?.[1] ?? '') === "0") {
        ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '';
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '[' + ((s as any).locArgs?.[1] ?? 0) + ']';
  }
  if (((String('abcdefghijklmnopqrstuvwxyz').indexOf(String(((s as any).locArgs?.[2] ?? 0)))) + 1)) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '\'' + ((s as any).locArgs?.[2] ?? 0) + '\'';
  } else {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '' + ((s as any).locArgs?.[2] ?? 0) + '';
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cleanarrays':
      enterCleanarrays(s, scene);
      break;
    case 'age':
      enterAge(s, scene);
      break;
    case 'is_npcID':
      enterIsNpcID(s, scene);
      break;
    case 'find_in_npcStat':
      enterFindInNpcStat(s, scene);
      break;
    case 'copy_npcStat':
      enterCopyNpcStat(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npc: LocationDef = {
  name: 'npc',
  region: 'other',
  enter: enter,
};
