import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterModify(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    (s as any).npcRelSetVal = qspUntranslated(s, "ARGS[2]", { location: "npc_relationship" });
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'like') {
      (s as any).npcRelSetVal = Math.floor(Math.random() * 2) + 1;
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'love') {
        (s as any).npcRelSetVal = Math.floor(Math.random() * 2) + 3;
        qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 0);
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'adore') {
          (s as any).npcRelSetVal = Math.floor(Math.random() * 2) + 5;
          qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 1);
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            (s as any).npcRelSetVal = 0-(Math.floor(Math.random() * 2) + 1);
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'hate') {
              (s as any).npcRelSetVal = 0-(Math.floor(Math.random() * 2) + 3);
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'loathe') {
                (s as any).npcRelSetVal = 0-(Math.floor(Math.random() * 2) + 5);
              } else {
                (s as any).npcRelSetVal = 0;
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).npcRelSetVal ?? 0) > 0) {
    (s as any).npcRelSetVal = ((s as any).npcRelSetVal ?? 0) + ((((s as any).npcRelSetVal ?? 0)*((s as any).pcs_humint ?? 0))/100);
  } else {
    if (((s as any).npcRelSetVal ?? 0) < 0) {
      (s as any).npcRelSetVal = ((s as any).npcRelSetVal ?? 0) - ((((s as any).npcRelSetVal ?? 0)*((s as any).pcs_humint ?? 0))/200);
    }
  }
  (s as any).npcRelSetVal = ((s as any).npcRelSetVal ?? 0) + (((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]);
  if (((s as any).npcRelSetVal ?? 0) > 100) {
    (s as any).npcRelSetVal = 100;
  }
  if (((s as any).npcRelSetVal ?? 0) < 0) {
    (s as any).npcRelSetVal = 0;
  }
  if (((s as any).locArgs?.[3] ?? 0) > 0) {
    if (((s as any).locArgs?.[3] ?? 0) > ((s as any).npc_rel_daily ?? 0)[((s as any).locArgs?.[1] ?? 0)+((s as any).locArgs?.[4] ?? 0)]) {
      // TODO-QSP: npc_rel_daily[$ARGS[1]+$ARGS[4]] += 1
    } else {
      (s as any).npcRelSetVal = ((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'A1') {
    if (((((s as any).dimaRevenge ?? 0) === 6  &&  (((s as any).dimaRevChoice ?? 0) === 3  ||  ((s as any).dimaRevChoice ?? 0) === 5  ||  ((s as any).dimaRevChoice ?? 0) === 6))  ||  (((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 2)  ||  (((s as any).dimaRevenge ?? 0) === 8  &&  (((s as any).dimaRevChoice ?? 0) === 1  ||  ((s as any).dimaRevChoice ?? 0) === 4)))) {
      (s as any).npcRelSetVal = ((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'A18') {
      if (((s as any).npcRelSetVal ?? 0) > 20) {
        (s as any).npcRelSetVal = 20;
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'A23') {
        if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).npcRelSetVal ?? 0) > 20) {
          (s as any).npcRelSetVal = 20;
        }
      }
    }
  }
  // TODO-QSP: npc_rel[$ARGS[1]] = npcRelSetVal
  if (((s as any).npcRelSetVal ?? 0) > 0) {
    // TODO-QSP: npc_known[$ARGS[1]] = 1
  }
  scene.build();
}

function enterModifyExact(s: GameState, scene: SceneBuilder): void {
  (s as any).npcRelSetVal = ((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] + ((s as any).ARGS ?? 0)[2];
  if (((s as any).npcRelSetVal ?? 0) > 100) {
    (s as any).npcRelSetVal = 100;
  }
  if (((s as any).npcRelSetVal ?? 0) < 0) {
    (s as any).npcRelSetVal = 0;
  }
  // TODO-QSP: npc_rel[$ARGS[1]] = npcRelSetVal
  if (((s as any).npcRelSetVal ?? 0) > 0) {
    // TODO-QSP: npc_known[$ARGS[1]] = 1
  }
  scene.build();
}

function enterSet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    (s as any).npcRelSetVal = qspUntranslated(s, "ARGS[2]", { location: "npc_relationship" });
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'unknown') {
      (s as any).npcRelSetVal = 0;
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'acquaintance') {
        (s as any).npcRelSetVal = 20;
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'friend') {
          (s as any).npcRelSetVal = 50;
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'bestie') {
            (s as any).npcRelSetVal = 70;
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'loved') {
              (s as any).npcRelSetVal = 90;
            } else {
              (s as any).npcRelSetVal = 0;
            }
          }
        }
      }
    }
  }
  if (((s as any).npcRelSetVal ?? 0) > 100) {
    (s as any).npcRelSetVal = 100;
  }
  if (((s as any).npcRelSetVal ?? 0) < 0) {
    (s as any).npcRelSetVal = 0;
  }
  // TODO-QSP: npc_rel[$ARGS[1]] = npcRelSetVal
  if (((s as any).npcRelSetVal ?? 0) > 0) {
    // TODO-QSP: npc_known[$ARGS[1]] = 1
  }
  scene.build();
}

function enterCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).npcRelSetVal = qspUntranslated(s, "ARGS[1]", { location: "npc_relationship" });
  (s as any).npc_rel_check = 0;
  (s as any).i = 2;
  // TODO-QSP: :npcRelCheck000
  if (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] !== '') {
    if (((s as any).npc_rel ?? 0)[((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)]] >= ((s as any).npcRelSetVal ?? 0)) {
      (s as any).npc_rel_check = ((s as any).npc_rel_check ?? 0) + (1);
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'npcRelCheck000'
  }
  (s as any).result = ((s as any).npc_rel_check ?? 0);
  scene.build();
}

function enterDefaultFamilyFriends(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'set', 'A28', 50);
  qspCall(s, 'npc_relationship', 'set', 'A29', 50);
  qspCall(s, 'npc_relationship', 'set', 'A30', 50);
  qspCall(s, 'npc_relationship', 'set', 'A31', 50);
  qspCall(s, 'npc_relationship', 'set', 'A32', 50);
  qspCall(s, 'npc_relationship', 'set', 'A33', 70);
  qspCall(s, 'npc_relationship', 'set', 'A34', 50);
  qspCall(s, 'npc_relationship', 'set', 'A11', 60);
  qspCall(s, 'npc_relationship', 'set', 'A63', 40);
  qspCall(s, 'npc_relationship', 'set', 'A62', 20);
  qspCall(s, 'npc_relationship', 'set', 'A61', 20);
  scene.build();
}

function enterSocialgroupSettingInternal(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  // TODO-QSP: :socialgroup_loop
  if (((s as any).sg_setting_gend ?? 0) === 0  ||  ((s as any).npc_gender ?? 0)['A' + ((s as any).r ?? 0)] === ((s as any).sg_setting_gend ?? 0)-1) {
    (s as any).i = ((s as any).npc_grupTipe ?? 0)?.['A' + String(((s as any).r ?? 0))];
    if (((s as any).i ?? 0) > 0) {
      if (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] !== 0) {
        // TODO-QSP: gs 'npc_relationship', 'modify', 'A<<r>>', ARGS[i]
      }
    }
  }
  (s as any).r = ((s as any).r ?? 0) + (1);
  if (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'socialgroup_loop'
  }
  scene.build();
}

function enterSocialgroupSetting(s: GameState, scene: SceneBuilder): void {
  (s as any).sg_setting_gend = 0;
  // TODO-QSP: gs 'npc_relationship', 'socialgroup_setting_internal', ARGS[1], ARGS[2], ARGS[3], ARGS[4], ARGS[5], ...
  scene.build();
}

function enterSocialgroupSettingBoys(s: GameState, scene: SceneBuilder): void {
  (s as any).sg_setting_gend = 1;
  // TODO-QSP: gs 'npc_relationship', 'socialgroup_setting_internal', ARGS[1], ARGS[2], ARGS[3], ARGS[4], ARGS[5], ...
  scene.build();
}

function enterSocialgroupSettingGirls(s: GameState, scene: SceneBuilder): void {
  (s as any).sg_setting_gend = 2;
  // TODO-QSP: gs 'npc_relationship', 'socialgroup_setting_internal', ARGS[1], ARGS[2], ARGS[3], ARGS[4], ARGS[5], ...
  scene.build();
}

function enterDefaultfriendship(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  // TODO-QSP: :default_friendship_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).r ?? 0)] === 1  ||  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).r ?? 0)] === 2  ||  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).r ?? 0)] === 3  ||  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).r ?? 0)] === 4  ||  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).r ?? 0)] === 5  ||  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).r ?? 0)] === 6) {
    qspCall(s, 'npc_relationship', 'set', 'A' + qspUntranslated(s, "r>", { location: "npc_relationship" }) + '', 30);
  }
  (s as any).r = ((s as any).r ?? 0) + (1);
  if (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'default_friendship_loop'
  }
  scene.build();
}

function enterDefaultnotschool(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  // TODO-QSP: :default_friendship_loop2
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).r ?? 0)] === 0) {
    qspCall(s, 'npc_relationship', 'set', 'A' + qspUntranslated(s, "r>", { location: "npc_relationship" }) + '', 30);
  }
  (s as any).r = ((s as any).r ?? 0) + (1);
  if (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'default_friendship_loop2'
  }
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  // TODO-QSP: :default_friendship_loop3
  qspCall(s, 'npc_relationship', 'set', 'A' + qspUntranslated(s, "r>", { location: "npc_relationship" }) + '', 30);
  (s as any).r = ((s as any).r ?? 0) + (1);
  if (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'default_friendship_loop3'
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'modify':
      enterModify(s, scene);
      break;
    case 'modify_exact':
      enterModifyExact(s, scene);
      break;
    case 'set':
      enterSet(s, scene);
      break;
    case 'check':
      enterCheck(s, scene);
      break;
    case 'default_family_friends':
      enterDefaultFamilyFriends(s, scene);
      break;
    case 'socialgroup_setting_internal':
      enterSocialgroupSettingInternal(s, scene);
      break;
    case 'socialgroup_setting':
      enterSocialgroupSetting(s, scene);
      break;
    case 'socialgroup_setting_boys':
      enterSocialgroupSettingBoys(s, scene);
      break;
    case 'socialgroup_setting_girls':
      enterSocialgroupSettingGirls(s, scene);
      break;
    case 'defaultfriendship':
      enterDefaultfriendship(s, scene);
      break;
    case 'defaultnotschool':
      enterDefaultnotschool(s, scene);
      break;
    case 'default':
      enterDefault2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npc_relationship: LocationDef = {
  name: 'npc_relationship',
  region: 'other',
  enter: enter,
};
