import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).husID ?? 0)] > 10) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).husID ?? 0), (-15));
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).husID ?? 0)] > 0  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 11) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['drink'] = (Math.floor(Math.random() * 11) + 0);
    }
    ((s as any).spouseVars = (s as any).spouseVars ?? {})['sexday'] = 0;
    if (((s as any).spouseVars ?? 0)?.['pervert_add'] > 5) {
      ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).husID ?? 0)] = 1;
    }
    if (((s as any).spouseVars ?? 0)?.['gentle_add'] > 10) {
      ((s as any).npc_gentle = (s as any).npc_gentle ?? {})[String((s as any).husID ?? 0)] = 1;
      ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).husID ?? 0)] = 0;
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).husID ?? 0)] <= 10) {
      qspCall(s, 'lover_love', 'divorce');
      scene.text('<center><b>Your husband has filed for a divorce.</b></center>');
    }
  }
  if (((s as any).wifID ?? 0) !== '') {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).wifID ?? 0)] > 10) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).wifID ?? 0), (-15));
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).wifID ?? 0)] > 0  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 11) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['drink'] = (Math.floor(Math.random() * 11) + 0);
    }
    ((s as any).spouseVars = (s as any).spouseVars ?? {})['sexday'] = 0;
    if (((s as any).spouseVars ?? 0)?.['pervert_add'] > 5) {
      ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).wifID ?? 0)] = 1;
    }
    if (((s as any).spouseVars ?? 0)?.['gentle_add'] > 10) {
      ((s as any).npc_gentle = (s as any).npc_gentle ?? {})[String((s as any).wifID ?? 0)] = 1;
      ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).wifID ?? 0)] = 0;
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).wifID ?? 0)] <= 10) {
      qspCall(s, 'lover_love', 'divorce');
      scene.text('<center><b>Your wife has filed for a divorce.</b></center>');
    }
  }
  ((s as any).sd_cm = (s as any).sd_cm ?? {})['lover_max'] = 0;
  if (((s as any).sd_cm ?? 0)?.['lover_max'] > 0) {
    ((s as any).sd_cm = (s as any).sd_cm ?? {})['li'] = 0;
    do {
      ((s as any).sd_cm = (s as any).sd_cm ?? {})['npcid'] = qspUntranslated(s, "lover[sd_cm['li']]", { location: "lover" });
      if (((s as any).npc_meetday ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']] > 0  &&  ((s as any).npc_meetday ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']] < ((s as any).daystart ?? 0)) {
        qspCall(s, 'npc_relationship', 'modify', (((s as any).sd_cm ?? 0)?.['npcid']), (-10));
        ((s as any).npc_meetday = (s as any).npc_meetday ?? {})[(((s as any).sd_cm ?? 0)?.['npcid'])] = 0;
      }
      ((s as any).sd_cm = (s as any).sd_cm ?? {})['li'] = ((s as any).sd_cm['li'] ?? 0) + (1);
    } while (((s as any).sd_cm ?? 0)?.['li'] < ((s as any).sd_cm ?? 0)?.['lover_max']);
  }
  return;
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'C') {
    qspCall(s, 'npcpreservec', '$ARGS[1]');
    qspCall(s, 'npcStat', '$npclastsaved');
  } else {
    qspCall(s, 'npcStat', '$ARGS[1]');
  }
  if ((Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    (s as any).lover = [...((s as any).lover ?? []), ((s as any).npcID ?? 0)];
    qspCall(s, 'telefon', 'AddContact', ((s as any).npcID ?? 0), (((s as any).npc_icon ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0), 0);
  }
  return;
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  (s as any).lover_index = qspUntranslated(s, "arrpos('lover', ARGS[1])", { location: "lover" });
  if (((s as any).lover_index ?? 0) < 0) {
    (s as any).lover_index = undefined;
    return;
  }
  if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'husband'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'wife'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'dating'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'boyfriend'  ||   ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'girlfriend'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fuckbuddy'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'sugar_daddy') {
    ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'ex-' + (((s as any).npc_rel_type ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'B'  &&  (String(((s as any).locArgs?.[1] ?? 0)).length) > 1  &&  !isNaN((String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1))) && (String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1)) !== '') {
    qspCall(s, 'telefon', 'ClearCallSchedule', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'telefon', 'ClearSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
    (s as any).telefon_index = qspUntranslated(s, "arrpos('contact', ARGS[1])", { location: "lover" });
    if (((s as any).telefon_index ?? 0) >= 0) {
      ((s as any).contactAnon = (s as any).contactAnon ?? {})[String((s as any).telefon_index ?? 0)] = 1;
    }
    (s as any).telefon_index = undefined;
  }
  (s as any).lover_index = undefined;
  return;
  scene.build();
}

function enterAddDating(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'dating') {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + '', ((s as any).npcID ?? 0));
  }
  qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
  ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).npcID ?? 0)] = 'dating';
  ((s as any).stat = (s as any).stat ?? {})['dating_current'] = ((s as any).stat['dating_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddBoyfriend(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + '', ((s as any).npcID ?? 0));
  }
  qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
  ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).npcID ?? 0)] = 'boyfriend';
  ((s as any).stat = (s as any).stat ?? {})['boyfriends_current'] = ((s as any).stat['boyfriends_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddGirlfriend(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'girlfriend') {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + '', ((s as any).npcID ?? 0));
  }
  qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
  ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).npcID ?? 0)] = 'girlfriend';
  ((s as any).stat = (s as any).stat ?? {})['girlfriends_current'] = ((s as any).stat['girlfriends_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddFuckbuddy(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + '', ((s as any).npcID ?? 0));
  }
  ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).npcID ?? 0)] = 'fuckbuddy';
  ((s as any).stat = (s as any).stat ?? {})['fuckbuddies_current'] = ((s as any).stat['fuckbuddies_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddSugarDaddy(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + '', ((s as any).npcID ?? 0));
  }
  ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).npcID ?? 0)] = 'sugar_daddy';
  ((s as any).stat = (s as any).stat ?? {})['sugardaddies_current'] = ((s as any).stat['sugardaddies_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddHusband(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + '', ((s as any).npcID ?? 0));
  }
  (s as any).husID = ((s as any).npcID ?? 0);
  ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).husID ?? 0)] = 'husband';
  qspCall(s, 'npc_relationship', 'set', ((s as any).husID ?? 0), 100);
  ((s as any).stat = (s as any).stat ?? {})['husbands_current'] = ((s as any).stat['husbands_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddWife(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'wife') {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + '', ((s as any).npcID ?? 0));
  }
  (s as any).wifID = ((s as any).npcID ?? 0);
  ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).wifID ?? 0)] = 'wife';
  qspCall(s, 'npc_relationship', 'set', ((s as any).wifID ?? 0), 100);
  ((s as any).stat = (s as any).stat ?? {})['wifes_current'] = ((s as any).stat['wifes_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterRemoveBoyfriend(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRemove(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChangeBoyfriend(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).stat = (s as any).stat ?? {})['ex_boyfriends'] = ((s as any).stat['ex_boyfriends'] ?? 0) + (1);
  return;
  scene.build();
}

function enterRemoveGirlfriend(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRemove(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChangeGirlfriend(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).stat = (s as any).stat ?? {})['ex_girlfriends'] = ((s as any).stat['ex_girlfriends'] ?? 0) + (1);
  return;
  scene.build();
}

function enterRemoveFuckbuddy(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRemove(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChangeFuckbuddy(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).stat = (s as any).stat ?? {})['ex_fuckbuddies'] = ((s as any).stat['ex_fuckbuddies'] ?? 0) + (1);
  return;
  scene.build();
}

function enterRemoveSugarDaddy(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRemove(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChangeSugarDaddy(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).stat = (s as any).stat ?? {})['ex_sugardaddies'] = ((s as any).stat['ex_sugardaddies'] ?? 0) + (1);
  return;
  scene.build();
}

function enterRemoveHusband(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).husID ?? 0)]; enterRemove(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'npc_relationship', 'set', ((s as any).husID ?? 0), 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChangeHusband(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).stat = (s as any).stat ?? {})['ex_husbands'] = ((s as any).stat['ex_husbands'] ?? 0) + (1);
  return;
  scene.build();
}

function enterRemoveWife(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).wifID ?? 0)]; enterRemove(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'npc_relationship', 'set', ((s as any).wifID ?? 0), 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChangeWife(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).stat = (s as any).stat ?? {})['ex_wifes'] = ((s as any).stat['ex_wifes'] ?? 0) + (1);
  return;
  scene.build();
}

function enterChangeBoyfriend(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['boyfriends_current'] = ((s as any).stat['boyfriends_current'] ?? 0) - (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
  return;
  scene.build();
}

function enterChangeGirlfriend(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['girlfriends_current'] = ((s as any).stat['girlfriends_current'] ?? 0) - (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
  return;
  scene.build();
}

function enterChangeFuckbuddy(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['fuckbuddies_current'] = ((s as any).stat['fuckbuddies_current'] ?? 0) - (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
  return;
  scene.build();
}

function enterChangeSugarDaddy(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['sugardaddies_current'] = ((s as any).stat['sugardaddies_current'] ?? 0) - (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
  return;
  scene.build();
}

function enterChangeHusband(s: GameState, scene: SceneBuilder): void {
  (s as any).husID = undefined;
  ((s as any).stat = (s as any).stat ?? {})['husbands_current'] = ((s as any).stat['husbands_current'] ?? 0) - (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
  (s as any).spouseVars = undefined;
  return;
  scene.build();
}

function enterChangeWife(s: GameState, scene: SceneBuilder): void {
  (s as any).wifID = undefined;
  ((s as any).stat = (s as any).stat ?? {})['wifes_current'] = ((s as any).stat['wifes_current'] ?? 0) - (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
  (s as any).spouseVars = undefined;
  return;
  scene.build();
}

function enterDrawRandomFrom(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'all') {
    (s as any).result = (((s as any).lover ?? 0)?.[(Math.floor(Math.random() * (0 - 0 + 1)) + (0))] ?? 0);
    return;
  }
  (s as any).lover_i = 0;
  (s as any).lover_max_i = 0;
  do {
    (s as any).lover_temp_npcID = (((s as any).lover ?? 0)?.[String((s as any).lover_i ?? 0)] ?? 0);
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf(((s as any).npc_rel_type ?? 0)?.[String((s as any).lover_temp_npcID ?? 0)]) : -1) > 0) {
      (s as any).lover_temp_lovers = [...((s as any).lover_temp_lovers ?? []), ((s as any).lover_temp_npcID ?? 0)];
    }
    (s as any).lover_i = ((s as any).lover_i ?? 0) + (1);
    (s as any).lover_temp_index = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
    (s as any).result = (((s as any).lover_temp_lovers ?? 0)?.[String((s as any).lover_temp_index ?? 0)] ?? 0);
    (s as any).lover_temp_npcID = undefined;
    (s as any).lover_temp_lovers = undefined;
    (s as any).lover_temp_index = undefined;
    return;
  } while (((s as any).lover_i ?? 0) < ((s as any).lover_max_i ?? 0));
  scene.build();
}

function enterClearAll(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_lover_index = 0;
  while (true) {
    if (Object.keys((s as any).lover ?? {}).length > ((s as any).temp_lover_index ?? 0)) {
      if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'boyfriend') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)] ?? 0)]; enterRemoveBoyfriend(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'girlfriend') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)] ?? 0)]; enterRemoveGirlfriend(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'fuckbuddy') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)] ?? 0)]; enterRemoveFuckbuddy(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'sugar_daddy') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)] ?? 0)]; enterRemoveSugarDaddy(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'husband') {
                qspCall(s, 'lover_love', 'divorce');
              } else {
                if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'wife') {
                  qspCall(s, 'lover_love', 'divorce');
                }
              }
            }
          }
        }
      }
      (s as any).temp_lover_index = ((s as any).temp_lover_index ?? 0) + (1);
      break;
    }
    (s as any).temp_lover_index = undefined;
    return;
    if (((s as any).ARGS ?? 0) === 'lover_events') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGenerateExceptionLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (Object.keys((s as any).lover ?? {}).length > 0) {
        (s as any).temp_lover_i = 0;
        do {
          (s as any).temp_lover_id = (((s as any).lover ?? 0)?.[String((s as any).temp_lover_i ?? 0)] ?? 0);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_lover_id ?? 0)]; enterGenerateDateLink(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_lover_id ?? 0)]; enterGenerateHomeLink(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_lover_id ?? 0)]; enterGenerateHotelLink(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_lover_id ?? 0)]; enterGenerateOldDateLink(s, scene); (s as any).locArgs = __savedLocArgs; }
          (s as any).temp_lover_i = ((s as any).temp_lover_i ?? 0) + (1);
          (s as any).temp_lover_i = undefined;
          (s as any).temp_lover_id = undefined;
        } while (((s as any).temp_lover_i ?? 0) < Object.keys((s as any).lover ?? {}).length);
      }
      return;
    }
  }
  scene.build();
}

function enterGenerateHomeLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).loc ?? 0)) {
    if (((String(';fuckbuddy;sugar_daddy;').indexOf(String(';' + (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')]) + ';'))) + 1) > 0) {
      scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=2; return s; }); window.__gameStore.getState().doGoto(/u0027sex_ev_start/u0027, /u0027initiate_pre/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">${(((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')}'s</a>` + ((((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'uni_grounds') ? ('dorm') : ('apartment')) + ' is nearby.');
    }
  }
  return;
  scene.build();
}

function enterGenerateHotelLink(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'lover', 'is_hotel', ((s as any).loc ?? 0))) {
    if (((s as any).booty_call_hotel ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).region ?? 0)  &&  ((s as any).booty_call_invite ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).daystart ?? 0)) {
      if (((String(';fuckbuddy;sugar_daddy;').indexOf(String(';' + (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')]) + ';'))) + 1) > 0) {
        scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=2; return s; }); window.__gameStore.getState().doGoto(/u0027sex_ev_start/u0027, /u0027initiate_pre/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">${(((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')}</a> booked a hotel room to meet you in.`);
      }
    }
  }
  return;
  scene.build();
}

function enterGenerateDateLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_date_loc ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).loc ?? 0)  &&  ((s as any).daystart ?? 0) === ((s as any).npc_date_invite ?? 0)[String((s as any).locArgs?.[1] ?? '')]  &&  ((s as any).daystart ?? 0) > ((s as any).npc_last_date ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (((s as any).hour ?? 0) < ((s as any).npc_date_meethour ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      scene.text(`You have a date with ${(((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')} at ${qspFunc(s, 'time', 'get_time_string', (((s as any).npc_date_meethour ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? ''), 0)}.`);
    } else {
      if (((s as any).hour ?? 0) === ((s as any).npc_date_meethour ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
        scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=2; return s; }); window.__gameStore.getState().doGoto(/u0027date_ev/u0027, /u0027initiate_pre/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">${(((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')} is waiting for you</a>.`);
      } else {
        scene.text(`You missed your date with ${(((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')} at ${qspFunc(s, 'time', 'get_time_string', (((s as any).npc_date_meethour ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? ''), 0)}.`);
      }
    }
  }
  return;
  scene.build();
}

function enterGenerateOldDateLink(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'lover', 'check_home_loc_old_content')) {
    if (((s as any).daystart ?? 0) === ((s as any).npc_meetday ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      if (((s as any).hour ?? 0) < ((s as any).npc_meethour ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
        scene.text(`<b>${(((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')} will be waiting for you by ${qspFunc(s, 'homes_properties', 'get_home_desc')} at ${qspFunc(s, 'time', 'get_time_string', (((s as any).npc_meethour ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? ''), 0)}.</b>`);
      } else {
        if (((s as any).hour ?? 0) === ((s as any).npc_meethour ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
          scene.text(`<b><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lover_meet/u0027, /u0027start/u0027, ((s as any).locArgs?.[1] ?? /u0027/u0027)); return false;">${(((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')}</a> is waiting for you by ${qspFunc(s, 'homes_properties', 'get_home_desc')}.</b>`);
        } else {
          scene.text(`<center><b>${(((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')} was waiting for you by ${qspFunc(s, 'homes_properties', 'get_home_desc')} at ${qspFunc(s, 'time', 'get_time_string', (((s as any).npc_meethour ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? ''), 0)}.</b></center>`);
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGenerateExceptionLinks(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'lover', 'check_home_loc_old_content')) {
    if (((s as any).daystart ?? 0) === ((s as any).vladimirQW ?? 0)?.['day']  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
      if (((s as any).vladimirQW ?? 0)?.['stage'] === 30) {
        scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vladimirQW_meet/u0027, /u00272/u0027); return false;">There's an Audi parked near ${qspFunc(s, 'homes_properties', 'get_home_desc')}, and standing beside it, you notice Vladimir</a>.`);
      } else {
        if (((s as any).vladimirQW ?? 0)?.['stage'] === 40) {
          scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vladimirQW_meet/u0027, /u00273/u0027); return false;">There's an Audi parked near ${qspFunc(s, 'homes_properties', 'get_home_desc')}, and standing beside it, you notice Vladimir</a>.`);
        }
      }
    }
  }
  return;
  scene.build();
}

function enterCheckHomeLocOldContent(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).home ?? 0)?.['location'] === '') {
    if (((s as any).loc ?? 0) === 'city_center') {
      (s as any).result = 1;
    }
  } else {
    if (((s as any).home ?? 0)?.['location'] === 'pav_complex') {
      if (((s as any).loc ?? 0) === 'pav_residential') {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).home ?? 0)?.['location'] === 'pavlovsk_hotel') {
        if (((s as any).loc ?? 0) === 'pav_market') {
          (s as any).result = 1;
        }
      } else {
        if (((s as any).home ?? 0)?.['current'] === 'old_town_apartment') {
          if (((s as any).loc ?? 0) === 'pushkin_sq') {
            (s as any).result = 1;
          }
        } else {
          if (((s as any).home ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
            (s as any).result = 1;
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterIsHotel(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'pav_hotel'  ||  String((s as any).locArgs?.[1] ?? '') === 'city_hotel');
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'add':
      enterAdd(s, scene);
      break;
    case 'remove':
      enterRemove(s, scene);
      break;
    case 'add_dating':
      enterAddDating(s, scene);
      break;
    case 'add_boyfriend':
      enterAddBoyfriend(s, scene);
      break;
    case 'add_girlfriend':
      enterAddGirlfriend(s, scene);
      break;
    case 'add_fuckbuddy':
      enterAddFuckbuddy(s, scene);
      break;
    case 'add_sugar_daddy':
      enterAddSugarDaddy(s, scene);
      break;
    case 'add_husband':
      enterAddHusband(s, scene);
      break;
    case 'add_wife':
      enterAddWife(s, scene);
      break;
    case 'remove_boyfriend':
      enterRemoveBoyfriend(s, scene);
      break;
    case 'remove_girlfriend':
      enterRemoveGirlfriend(s, scene);
      break;
    case 'remove_fuckbuddy':
      enterRemoveFuckbuddy(s, scene);
      break;
    case 'remove_sugar_daddy':
      enterRemoveSugarDaddy(s, scene);
      break;
    case 'remove_husband':
      enterRemoveHusband(s, scene);
      break;
    case 'remove_wife':
      enterRemoveWife(s, scene);
      break;
    case 'change_boyfriend':
      enterChangeBoyfriend(s, scene);
      break;
    case 'change_girlfriend':
      enterChangeGirlfriend(s, scene);
      break;
    case 'change_fuckbuddy':
      enterChangeFuckbuddy(s, scene);
      break;
    case 'change_sugar_daddy':
      enterChangeSugarDaddy(s, scene);
      break;
    case 'change_husband':
      enterChangeHusband(s, scene);
      break;
    case 'change_wife':
      enterChangeWife(s, scene);
      break;
    case 'draw_random_from':
      enterDrawRandomFrom(s, scene);
      break;
    case 'clear_all':
      enterClearAll(s, scene);
      break;
    case 'generate_home_link':
      enterGenerateHomeLink(s, scene);
      break;
    case 'generate_hotel_link':
      enterGenerateHotelLink(s, scene);
      break;
    case 'generate_date_link':
      enterGenerateDateLink(s, scene);
      break;
    case 'generate_old_date_link':
      enterGenerateOldDateLink(s, scene);
      break;
    case 'generate_exception_links':
      enterGenerateExceptionLinks(s, scene);
      break;
    case 'check_home_loc_old_content':
      enterCheckHomeLocOldContent(s, scene);
      break;
    case 'is_hotel':
      enterIsHotel(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lover: LocationDef = {
  name: 'lover',
  title: 'Your husband has filed for a divorce.',
  region: 'other',
  enter: enter,
};
