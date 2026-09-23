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
    // TODO-QSP: :cikl_lover_meet_loop
    ((s as any).sd_cm = (s as any).sd_cm ?? {})['npcid'] = qspUntranslated(s, "lover[sd_cm['li']]", { location: "lover" });
    if (((s as any).npc_meetday ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']] > 0  &&  ((s as any).npc_meetday ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']] < ((s as any).daystart ?? 0)) {
      // TODO-QSP: gs 'npc_relationship', 'modify', $sd_cm['npcid'], -10
      // TODO-QSP: npc_meetday[$sd_cm['npcid']] = 0
    }
    ((s as any).sd_cm = (s as any).sd_cm ?? {})['li'] = ((s as any).sd_cm['li'] ?? 0) + (1);
    if (((s as any).sd_cm ?? 0)?.['li'] < ((s as any).sd_cm ?? 0)?.['lover_max']) {
      // TODO-QSP: jump 'cikl_lover_meet_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'C') {
    qspCall(s, 'npcpreservec', '', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'npcStat', '', ((s as any).npclastsaved ?? 0));
  } else {
    qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0));
  }
  if ((Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    // TODO-QSP: $lover[] = $npcID
    // TODO-QSP: gs 'telefon', 'AddContact', $npcID, $npc_icon[$npcID], 0
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  (s as any).lover_index = qspUntranslated(s, "arrpos('lover', ARGS[1])", { location: "lover" });
  if (((s as any).lover_index ?? 0) < 0) {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'husband'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'wife'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'dating'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'boyfriend'  ||   ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'girlfriend'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'fuckbuddy'  ||  ((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'sugar_daddy') {
    // TODO-QSP: $npc_rel_type[$ARGS[1]] = 'ex-' + $npc_rel_type[$ARGS[1]]
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'B'  &&  (String(((s as any).locArgs?.[1] ?? 0)).length) > 1  &&  !isNaN((String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1))) && (String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1)) !== '') {
    qspCall(s, 'telefon', 'ClearCallSchedule', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'telefon', 'ClearSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
    (s as any).telefon_index = qspUntranslated(s, "arrpos('contact', ARGS[1])", { location: "lover" });
    if (((s as any).telefon_index ?? 0) >= 0) {
      ((s as any).contactAnon = (s as any).contactAnon ?? {})[String((s as any).telefon_index ?? 0)] = 1;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddDating(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'dating') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] + '', ((s as any).npcID ?? 0));
  }
  qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
  // TODO-QSP: $npc_rel_type[$npcID] = 'dating'
  ((s as any).stat = (s as any).stat ?? {})['dating_current'] = ((s as any).stat['dating_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddBoyfriend(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] + '', ((s as any).npcID ?? 0));
  }
  qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
  // TODO-QSP: $npc_rel_type[$npcID] = 'boyfriend'
  ((s as any).stat = (s as any).stat ?? {})['boyfriends_current'] = ((s as any).stat['boyfriends_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddGirlfriend(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'girlfriend') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] + '', ((s as any).npcID ?? 0));
  }
  qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
  // TODO-QSP: $npc_rel_type[$npcID] = 'girlfriend'
  ((s as any).stat = (s as any).stat ?? {})['girlfriends_current'] = ((s as any).stat['girlfriends_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddFuckbuddy(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] + '', ((s as any).npcID ?? 0));
  }
  // TODO-QSP: $npc_rel_type[$npcID] = 'fuckbuddy'
  ((s as any).stat = (s as any).stat ?? {})['fuckbuddies_current'] = ((s as any).stat['fuckbuddies_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddSugarDaddy(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] + '', ((s as any).npcID ?? 0));
  }
  // TODO-QSP: $npc_rel_type[$npcID] = 'sugar_daddy'
  ((s as any).stat = (s as any).stat ?? {})['sugardaddies_current'] = ((s as any).stat['sugardaddies_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddHusband(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] + '', ((s as any).npcID ?? 0));
  }
  (s as any).husID = ((s as any).npcID ?? 0);
  // TODO-QSP: $npc_rel_type[$husID] = 'husband'
  qspCall(s, 'npc_relationship', 'set', ((s as any).husID ?? 0), 100);
  ((s as any).stat = (s as any).stat ?? {})['husbands_current'] = ((s as any).stat['husbands_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  scene.build();
}

function enterAddWife(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'wife') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_' + ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] + '', ((s as any).npcID ?? 0));
  }
  (s as any).wifID = ((s as any).npcID ?? 0);
  // TODO-QSP: $npc_rel_type[$wifID] = 'wife'
  qspCall(s, 'npc_relationship', 'set', ((s as any).wifID ?? 0), 100);
  ((s as any).stat = (s as any).stat ?? {})['wifes_current'] = ((s as any).stat['wifes_current'] ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
  return;
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  ((s as any).stat = (s as any).stat ?? {})['husbands_current'] = ((s as any).stat['husbands_current'] ?? 0) - (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
  return;
  scene.build();
}

function enterChangeWife(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['wifes_current'] = ((s as any).stat['wifes_current'] ?? 0) - (1);
  ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) - (1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDrawRandomFrom(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'all') {
    (s as any).result = ((s as any).lover ?? 0)?.[(Math.floor(Math.random() * (0 - 0 + 1)) + (0))];
    return;
  }
  (s as any).lover_i = 0;
  (s as any).lover_max_i = 0;
  // TODO-QSP: :draw_from_lover_loop
  (s as any).lover_temp_npcID = ((s as any).lover ?? 0)?.[String((s as any).lover_i ?? 0)];
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf(((s as any).npc_rel_type ?? 0)?.[String((s as any).lover_temp_npcID ?? 0)]) : -1) > 0) {
    // TODO-QSP: $lover_temp_lovers[] = $lover_temp_npcID
  }
  (s as any).lover_i = ((s as any).lover_i ?? 0) + (1);
  if (((s as any).lover_i ?? 0) < ((s as any).lover_max_i ?? 0)) {
    // TODO-QSP: jump 'draw_from_lover_loop'
  }
  (s as any).lover_temp_index = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
  (s as any).result = ((s as any).lover_temp_lovers ?? 0)?.[String((s as any).lover_temp_index ?? 0)];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClearAll(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_lover_index = 0;
  // TODO-QSP: :clear_lovers_loop
  if (Object.keys((s as any).lover ?? {}).length > ((s as any).temp_lover_index ?? 0)) {
    if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'boyfriend') {
      // TODO-QSP: gs 'lover', 'remove_boyfriend', $lover[temp_lover_index]
    } else {
      if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'girlfriend') {
        // TODO-QSP: gs 'lover', 'remove_girlfriend', $lover[temp_lover_index]
      } else {
        if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'fuckbuddy') {
          // TODO-QSP: gs 'lover', 'remove_fuckbuddy', $lover[temp_lover_index]
        } else {
          if (((s as any).npc_rel_type ?? 0)[((s as any).lover ?? 0)?.[String((s as any).temp_lover_index ?? 0)]] === 'sugar_daddy') {
            // TODO-QSP: gs 'lover', 'remove_sugar_daddy', $lover[temp_lover_index]
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
    // TODO-QSP: jump 'clear_lovers_loop'
  }
  return;
  // TODO-QSP: end
  if (((s as any).ARGS ?? 0) === 'lover_events') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGenerateExceptionLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (Object.keys((s as any).lover ?? {}).length > 0) {
      (s as any).temp_lover_i = 0;
      // TODO-QSP: :loop_events
      (s as any).temp_lover_id = ((s as any).lover ?? 0)?.[String((s as any).temp_lover_i ?? 0)];
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_lover_id ?? 0)]; enterGenerateDateLink(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_lover_id ?? 0)]; enterGenerateHomeLink(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_lover_id ?? 0)]; enterGenerateHotelLink(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_lover_id ?? 0)]; enterGenerateOldDateLink(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).temp_lover_i = ((s as any).temp_lover_i ?? 0) + (1);
      if (((s as any).temp_lover_i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
        // TODO-QSP: jump 'loop_events'
      }
    }
    return;
  }
  scene.build();
}

function enterGenerateHomeLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).loc ?? 0)) {
    if (((String(';fuckbuddy;sugar_daddy;').indexOf(String(';' + (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')]) + ';'))) + 1) > 0) {
      // TODO-QSP: dynamic text: '<a href="exec: minut += 2 & gt ''sex_ev_start'', ''initiate_pre'', ''<<$ARGS[1]...
      scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027sex_ev_start/u0027, /u0027initiate_pre/u0027, /u0027${((s as any).locArgs?.[1] ?? '')}/u0027); return false;">${((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')]}'s</a>` + ((((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'uni_grounds') ? ('dorm') : ('apartment')) + ' is nearby.');
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGenerateHotelLink(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'lover', 'is_hotel', ((s as any).loc ?? 0))) {
    if (((s as any).booty_call_hotel ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).region ?? 0)  &&  ((s as any).booty_call_invite ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).daystart ?? 0)) {
      if (((String(';fuckbuddy;sugar_daddy;').indexOf(String(';' + (((s as any).npc_rel_type ?? 0)[String((s as any).locArgs?.[1] ?? '')]) + ';'))) + 1) > 0) {
        // TODO-QSP: dynamic text: <a href="exec: minut += 2 & gt ''sex_ev_start'', ''initiate_pre'', ''<<$ARGS[1]>...
        scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027sex_ev_start/u0027, /u0027initiate_pre/u0027, /u0027${((s as any).locArgs?.[1] ?? '')}/u0027); return false;">${((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')]}</a> booked a hotel room to meet you in.`);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGenerateDateLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_date_loc ?? 0)[String((s as any).locArgs?.[1] ?? '')] === ((s as any).loc ?? 0)  &&  ((s as any).daystart ?? 0) === ((s as any).npc_date_invite ?? 0)[String((s as any).locArgs?.[1] ?? '')]  &&  ((s as any).daystart ?? 0) > ((s as any).npc_last_date ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    if (((s as any).hour ?? 0) < ((s as any).npc_date_meethour ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: dynamic text: You have a date with <<$npc_firstname[$ARGS[1]]>> at <<func(''time'', ''get_time...
      scene.text(`You have a date with ${((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')]} at ${qspFunc(s, 'time', 'get_time_string', ((s as any).npc_date_meethour ?? 0)?.[((s as any).locArgs?.[1] ?? '')], 0)}.`);
    } else {
      if (((s as any).hour ?? 0) === ((s as any).npc_date_meethour ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
        // TODO-QSP: dynamic text: <a href="exec: minut += 2 & gt ''date_ev'', ''initiate_pre'', ''<<$ARGS[1]>>'' "...
        scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.2; return s; }); window.__gameStore.getState().doGoto(/u0027date_ev/u0027, /u0027initiate_pre/u0027, /u0027${((s as any).locArgs?.[1] ?? '')}/u0027); return false;">${((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')]} is waiting for you</a>.`);
      } else {
        scene.text(`You missed your date with ${((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? '')]} at ${qspFunc(s, 'time', 'get_time_string', ((s as any).npc_date_meethour ?? 0)?.[((s as any).locArgs?.[1] ?? '')], 0)}.`);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGenerateOldDateLink(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'lover', 'check_home_loc_old_content')) {
    if (((s as any).daystart ?? 0) === ((s as any).npc_meetday ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      if (((s as any).hour ?? 0) < ((s as any).npc_meethour ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
        // TODO-QSP: dynamic text: <b><<$npc_usedname[$ARGS[1]]>> will be waiting for you by <<$func(''homes_proper...
        scene.text(`<b>${((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? '')]} will be waiting for you by ${qspFunc(s, 'homes_properties', 'get_home_desc')} at ${qspFunc(s, 'time', 'get_time_string', ((s as any).npc_meethour ?? 0)?.[((s as any).locArgs?.[1] ?? '')], 0)}.</b>`);
      } else {
        if (((s as any).hour ?? 0) === ((s as any).npc_meethour ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
          // TODO-QSP: dynamic text: <b><a href="exec: gt ''lover_meet'', ''start'', ''<<$ARGS[1]>>''"><<$npc_usednam...
          scene.text(`<b><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lover_meet/u0027, /u0027start/u0027, /u0027${((s as any).locArgs?.[1] ?? '')}/u0027); return false;">${((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? '')]}</a> is waiting for you by ${qspFunc(s, 'homes_properties', 'get_home_desc')}.</b>`);
        } else {
          scene.text(`<center><b>${((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? '')]} was waiting for you by ${qspFunc(s, 'homes_properties', 'get_home_desc')} at ${qspFunc(s, 'time', 'get_time_string', ((s as any).npc_meethour ?? 0)?.[((s as any).locArgs?.[1] ?? '')], 0)}.</b></center>`);
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGenerateExceptionLinks(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'lover', 'check_home_loc_old_content')) {
    if (((s as any).daystart ?? 0) === ((s as any).vladimirQW ?? 0)?.['day']  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
      if (((s as any).vladimirQW ?? 0)?.['stage'] === 30) {
        // TODO-QSP: dynamic text: <a href="exec: gt ''vladimirQW_meet'', ''2''">There''s an Audi parked near <<$fu...
        scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vladimirQW_meet/u0027, /u00272/u0027); return false;">There's an Audi parked near ${qspFunc(s, 'homes_properties', 'get_home_desc')}, and standing beside it, you notice Vladimir</a>.`);
      } else {
        if (((s as any).vladimirQW ?? 0)?.['stage'] === 40) {
          // TODO-QSP: dynamic text: <a href="exec: gt ''vladimirQW_meet'', ''3''">There''s an Audi parked near <<$fu...
          scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vladimirQW_meet/u0027, /u00273/u0027); return false;">There's an Audi parked near ${qspFunc(s, 'homes_properties', 'get_home_desc')}, and standing beside it, you notice Vladimir</a>.`);
        }
      }
    }
  }
  return;
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterIsHotel(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'pav_hotel'  ||  String((s as any).locArgs?.[1] ?? '') === 'city_hotel');
  return;
  // TODO-QSP: end
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
