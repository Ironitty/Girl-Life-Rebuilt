import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterModify(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    (s as any).npcRelSetVal = ((s as any).locArgs?.[2] ?? 0);
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'like') {
      (s as any).npcRelSetVal = (Math.floor(Math.random() * 2) + 1);
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).npcRelSetVal = (Math.floor(Math.random() * 2) + 3);
        qspCall(s, 'exp_gain', 'humint', (Math.floor(Math.random() * 2) + 0));
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'adore') {
          (s as any).npcRelSetVal = (Math.floor(Math.random() * 2) + 5);
          qspCall(s, 'exp_gain', 'humint', (Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).npcRelSetVal = 0-(Math.floor(Math.random() * 2) + 1);
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'hate') {
              (s as any).npcRelSetVal = 0-(Math.floor(Math.random() * 2) + 3);
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'loathe') {
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
  (s as any).npcRelSetVal = ((s as any).npcRelSetVal ?? 0) + ((((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
  if (((s as any).npcRelSetVal ?? 0) > 100) {
    (s as any).npcRelSetVal = 100;
  }
  if (((s as any).npcRelSetVal ?? 0) < 0) {
    (s as any).npcRelSetVal = 0;
  }
  if (String((s as any).locArgs?.[3] ?? '') > 0) {
    if (String((s as any).locArgs?.[3] ?? '') > ((s as any).npc_rel_daily ?? 0)[String((s as any).locArgs?.[1] ?? '')+String((s as any).locArgs?.[4] ?? '')]) {
      ((s as any).npc_rel_daily = (s as any).npc_rel_daily ?? {})[((s as any).locArgs?.[1] ?? 0)+((s as any).locArgs?.[4] ?? 0)] = ((s as any).npc_rel_daily[((s as any).locArgs?.[1] ?? 0)+((s as any).locArgs?.[4] ?? 0)] ?? 0) + (1);
    } else {
      (s as any).npcRelSetVal = (((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'A1') {
    if (((((s as any).dimaRevenge ?? 0) === 6  &&  (((s as any).dimaRevChoice ?? 0) === 3  ||  ((s as any).dimaRevChoice ?? 0) === 5  ||  ((s as any).dimaRevChoice ?? 0) === 6))  ||  (((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 2)  ||  (((s as any).dimaRevenge ?? 0) === 8  &&  (((s as any).dimaRevChoice ?? 0) === 1  ||  ((s as any).dimaRevChoice ?? 0) === 4)))) {
      (s as any).npcRelSetVal = (((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'A18') {
      if (((s as any).npcRelSetVal ?? 0) > 20) {
        (s as any).npcRelSetVal = 20;
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'A23') {
        if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).npcRelSetVal ?? 0) > 20) {
          (s as any).npcRelSetVal = 20;
        }
      }
    }
  }
  ((s as any).npc_rel = (s as any).npc_rel ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npcRelSetVal ?? 0);
  if (((s as any).npcRelSetVal ?? 0) > 0) {
    ((s as any).npc_known = (s as any).npc_known ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
  }
  (s as any).npcRelSetVal = undefined;
  scene.build();
}

function enterModifyExact(s: GameState, scene: SceneBuilder): void {
  (s as any).npcRelSetVal = ((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] + ((s as any).locArgs?.[2] ?? 0);
  if (((s as any).npcRelSetVal ?? 0) > 100) {
    (s as any).npcRelSetVal = 100;
  }
  if (((s as any).npcRelSetVal ?? 0) < 0) {
    (s as any).npcRelSetVal = 0;
  }
  ((s as any).npc_rel = (s as any).npc_rel ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npcRelSetVal ?? 0);
  if (((s as any).npcRelSetVal ?? 0) > 0) {
    ((s as any).npc_known = (s as any).npc_known ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
  }
  (s as any).npcRelSetVal = undefined;
  scene.build();
}

function enterSet(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    (s as any).npcRelSetVal = ((s as any).locArgs?.[2] ?? 0);
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'unknown') {
      (s as any).npcRelSetVal = 0;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'acquaintance') {
        (s as any).npcRelSetVal = 20;
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'friend') {
          (s as any).npcRelSetVal = 50;
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'bestie') {
            (s as any).npcRelSetVal = 70;
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'loved') {
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
  ((s as any).npc_rel = (s as any).npc_rel ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npcRelSetVal ?? 0);
  if (((s as any).npcRelSetVal ?? 0) > 0) {
    ((s as any).npc_known = (s as any).npc_known ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
  }
  (s as any).npcRelSetVal = undefined;
  scene.build();
}

function enterCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).npcRelSetVal = ((s as any).locArgs?.[1] ?? 0);
  (s as any).npc_rel_check = 0;
  (s as any).i = 2;
  while (true) {
    if (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] !== '') {
      if (((s as any).npc_rel ?? 0)[((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)]] >= ((s as any).npcRelSetVal ?? 0)) {
        (s as any).npc_rel_check = ((s as any).npc_rel_check ?? 0) + (1);
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      break;
    }
    (s as any).result = ((s as any).npc_rel_check ?? 0);
    (s as any).npcRelSetVal = undefined;
  }
  scene.build();
}

function enterDefaultFamilyFriends(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A28', 50]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A29', 50]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A30', 50]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A31', 50]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A32', 50]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A33', 70]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A34', 50]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A11', 60]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A63', 40]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A62', 20]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A61', 20]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterSocialgroupSettingInternal(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  do {
    if (((s as any).sg_setting_gend ?? 0) === 0  ||  ((s as any).npc_gender ?? 0)['A' + (((s as any).r ?? 0))] === ((s as any).sg_setting_gend ?? 0)-1) {
      (s as any).i = (((s as any).npc_grupTipe ?? 0)?.['A' + String(((s as any).r ?? 0))]);
      if (((s as any).i ?? 0) > 0) {
        if (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] !== 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A' + ((s as any).r ?? 0) + '', (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] ?? 0)]; enterModify(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
    (s as any).r = ((s as any).r ?? 0) + (1);
    (s as any).i = undefined;
    (s as any).r = undefined;
    (s as any).sg_setting_gend = undefined;
  } while (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enterSocialgroupSetting(s: GameState, scene: SceneBuilder): void {
  (s as any).sg_setting_gend = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0)]; enterSocialgroupSettingInternal(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterSocialgroupSettingBoys(s: GameState, scene: SceneBuilder): void {
  (s as any).sg_setting_gend = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0)]; enterSocialgroupSettingInternal(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterSocialgroupSettingGirls(s: GameState, scene: SceneBuilder): void {
  (s as any).sg_setting_gend = 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0)]; enterSocialgroupSettingInternal(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefaultfriendship(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  do {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).r ?? 0))] === 1  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).r ?? 0))] === 2  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).r ?? 0))] === 3  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).r ?? 0))] === 4  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).r ?? 0))] === 5  ||  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).r ?? 0))] === 6) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A' + ((s as any).r ?? 0) + '', 30]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    (s as any).r = ((s as any).r ?? 0) + (1);
  } while (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enterDefaultnotschool(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  do {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).r ?? 0))] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A' + ((s as any).r ?? 0) + '', 30]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    (s as any).r = ((s as any).r ?? 0) + (1);
  } while (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  do {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A' + ((s as any).r ?? 0) + '', 30]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).r = ((s as any).r ?? 0) + (1);
  } while (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0));
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
