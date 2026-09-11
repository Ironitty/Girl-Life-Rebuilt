import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).husID ?? 0)] > 10) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).husID ?? 0), (-15));
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).husID ?? 0)] > 0  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 11) {
      ((s as any).spouseVars ?? {})['drink'] = Math.floor(Math.random() * 11) + 0;
    }
    ((s as any).spouseVars ?? {})['sexday'] = 0;
    if (((s as any).spouseVars ?? 0)?.['pervert_add'] > 5) {
      ((s as any).npc_pervert ?? {})[String((s as any).husID ?? 0)] = 1;
    }
    if (((s as any).spouseVars ?? 0)?.['gentle_add'] > 10) {
      ((s as any).npc_gentle ?? {})[String((s as any).husID ?? 0)] = 1;
      ((s as any).npc_rough ?? {})[String((s as any).husID ?? 0)] = 0;
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
      ((s as any).spouseVars ?? {})['drink'] = Math.floor(Math.random() * 11) + 0;
    }
    ((s as any).spouseVars ?? {})['sexday'] = 0;
    if (((s as any).spouseVars ?? 0)?.['pervert_add'] > 5) {
      ((s as any).npc_pervert ?? {})[String((s as any).wifID ?? 0)] = 1;
    }
    if (((s as any).spouseVars ?? 0)?.['gentle_add'] > 10) {
      ((s as any).npc_gentle ?? {})[String((s as any).wifID ?? 0)] = 1;
      ((s as any).npc_rough ?? {})[String((s as any).wifID ?? 0)] = 0;
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).wifID ?? 0)] <= 10) {
      qspCall(s, 'lover_love', 'divorce');
      scene.text('<center><b>Your wife has filed for a divorce.</b></center>');
    }
  }
  ((s as any).sd_cm ?? {})['lover_max'] = 0;
  if (((s as any).sd_cm ?? 0)?.['lover_max'] > 0) {
    ((s as any).sd_cm ?? {})['li'] = 0;
    // TODO-QSP: :cikl_lover_meet_loop
    ((s as any).sd_cm ?? {})['npcid'] = qspUntranslated(s, "lover[sd_cm['li']]", { location: "lover" });
    if (((s as any).npc_meetday ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']] > 0  &&  ((s as any).npc_meetday ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']] < ((s as any).daystart ?? 0)) {
      // TODO-QSP: gs 'npc_relationship', 'modify', $sd_cm['npcid'], -10
      // TODO-QSP: npc_meetday[$sd_cm['npcid']] = 0
    }
    ((s as any).sd_cm ?? {})['li'] = (((s as any).sd_cm ?? {})['li'] ?? 0) + (1);
    if (((s as any).sd_cm ?? 0)?.['li'] < ((s as any).sd_cm ?? 0)?.['lover_max']) {
      // TODO-QSP: jump 'cikl_lover_meet_loop'
    }
  }
  return;
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'C') {
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
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  (s as any).lover_index = qspUntranslated(s, "arrpos('lover', ARGS[1])", { location: "lover" });
  if (((s as any).lover_index ?? 0) < 0) {
    return;
  }
  if (((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'husband'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'wife'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'dating'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'boyfriend'  ||   ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'girlfriend'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'fuckbuddy'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'sugar_daddy') {
    // TODO-QSP: $npc_rel_type[$ARGS[1]] = 'ex-' + $npc_rel_type[$ARGS[1]]
  }
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'B'  &&  ((((s as any).locArgs?.[1] ?? 0)).length) > 1  &&  !isNaN(((((s as any).locArgs?.[1] ?? 0)).slice((2)-1))) && ((((s as any).locArgs?.[1] ?? 0)).slice((2)-1)) !== '') {
    qspCall(s, 'telefon', 'ClearCallSchedule', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'telefon', 'ClearSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
    (s as any).telefon_index = qspUntranslated(s, "arrpos('contact', ARGS[1])", { location: "lover" });
    if (((s as any).telefon_index ?? 0) >= 0) {
      ((s as any).contactAnon ?? {})[String((s as any).telefon_index ?? 0)] = 1;
    }
  }
  return;
  scene.build();
}

function enterAddDating(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'dating') {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    qspCall(s, 'lover', 'change_<<$npc_rel_type[$npcID]>>', ((s as any).npcID ?? 0));
  }
  qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
  // TODO-QSP: $npc_rel_type[$npcID] = 'dating'
  ((s as any).stat ?? {})['dating_current'] = (((s as any).stat ?? {})['dating_current'] ?? 0) + (1);
  ((s as any).stat ?? {})['total_lovers_current'] = (((s as any).stat ?? {})['total_lovers_current'] ?? 0) + (1);
  return;
  if (((s as any).locArgs?.[0] ?? 0) === 'add_boyfriend') {
    qspCall(s, 'lover', 'add', ((s as any).locArgs?.[1] ?? 0));
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
      // TODO-QSP: exit
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      qspCall(s, 'lover', 'change_<<$npc_rel_type[$npcID]>>', ((s as any).npcID ?? 0));
    }
    qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
    // TODO-QSP: $npc_rel_type[$npcID] = 'boyfriend'
    ((s as any).stat ?? {})['boyfriends_current'] = (((s as any).stat ?? {})['boyfriends_current'] ?? 0) + (1);
    ((s as any).stat ?? {})['total_lovers_current'] = (((s as any).stat ?? {})['total_lovers_current'] ?? 0) + (1);
    return;
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'add_girlfriend') {
      qspCall(s, 'lover', 'add', ((s as any).locArgs?.[1] ?? 0));
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'girlfriend') {
        // TODO-QSP: exit
      }
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
        qspCall(s, 'lover', 'change_<<$npc_rel_type[$npcID]>>', ((s as any).npcID ?? 0));
      }
      qspCall(s, 'lover_call', 'set_base_schedule', ((s as any).npcID ?? 0));
      // TODO-QSP: $npc_rel_type[$npcID] = 'girlfriend'
      ((s as any).stat ?? {})['girlfriends_current'] = (((s as any).stat ?? {})['girlfriends_current'] ?? 0) + (1);
      ((s as any).stat ?? {})['total_lovers_current'] = (((s as any).stat ?? {})['total_lovers_current'] ?? 0) + (1);
      return;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'add_fuckbuddy') {
        qspCall(s, 'lover', 'add', ((s as any).locArgs?.[1] ?? 0));
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
          // TODO-QSP: exit
        }
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
          qspCall(s, 'lover', 'change_<<$npc_rel_type[$npcID]>>', ((s as any).npcID ?? 0));
        }
        // TODO-QSP: $npc_rel_type[$npcID] = 'fuckbuddy'
        ((s as any).stat ?? {})['fuckbuddies_current'] = (((s as any).stat ?? {})['fuckbuddies_current'] ?? 0) + (1);
        ((s as any).stat ?? {})['total_lovers_current'] = (((s as any).stat ?? {})['total_lovers_current'] ?? 0) + (1);
        return;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'add_sugar_daddy') {
          qspCall(s, 'lover', 'add', ((s as any).locArgs?.[1] ?? 0));
          if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
            // TODO-QSP: exit
          }
          if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
            qspCall(s, 'lover', 'change_<<$npc_rel_type[$npcID]>>', ((s as any).npcID ?? 0));
          }
          // TODO-QSP: $npc_rel_type[$npcID] = 'sugar_daddy'
          ((s as any).stat ?? {})['sugardaddies_current'] = (((s as any).stat ?? {})['sugardaddies_current'] ?? 0) + (1);
          ((s as any).stat ?? {})['total_lovers_current'] = (((s as any).stat ?? {})['total_lovers_current'] ?? 0) + (1);
          return;
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'add_husband') {
            qspCall(s, 'lover', 'add', ((s as any).locArgs?.[1] ?? 0));
            if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
              // TODO-QSP: exit
            }
            if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
              qspCall(s, 'lover', 'change_<<$npc_rel_type[$npcID]>>', ((s as any).npcID ?? 0));
            }
            // TODO-QSP: $npc_rel_type[$husID] = 'husband'
            qspCall(s, 'npc_relationship', 'set', ((s as any).husID ?? 0), 100);
            ((s as any).stat ?? {})['husbands_current'] = (((s as any).stat ?? {})['husbands_current'] ?? 0) + (1);
            ((s as any).stat ?? {})['total_lovers_current'] = (((s as any).stat ?? {})['total_lovers_current'] ?? 0) + (1);
            return;
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'add_wife') {
              qspCall(s, 'lover', 'add', ((s as any).locArgs?.[1] ?? 0));
              if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'wife') {
                // TODO-QSP: exit
              }
              if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
                qspCall(s, 'lover', 'change_<<$npc_rel_type[$npcID]>>', ((s as any).npcID ?? 0));
              }
              // TODO-QSP: $npc_rel_type[$wifID] = 'wife'
              qspCall(s, 'npc_relationship', 'set', ((s as any).wifID ?? 0), 100);
              ((s as any).stat ?? {})['wifes_current'] = (((s as any).stat ?? {})['wifes_current'] ?? 0) + (1);
              ((s as any).stat ?? {})['total_lovers_current'] = (((s as any).stat ?? {})['total_lovers_current'] ?? 0) + (1);
              return;
            }
          }
        }
      }
    }
  }
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
    default:
      enterCikl(s, scene);
      break;
  }
}

export const lover: LocationDef = {
  name: 'lover',
  title: 'Your husband has filed for a divorce.',
  region: 'other',
  enter: enter,
};
