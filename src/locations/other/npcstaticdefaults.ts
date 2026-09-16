// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefaults(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pic = (s as any).npc_pic ?? {})['A' + String((s as any).npctemp || '') + ''] = 'xPICx';
  ((s as any).npc_perstype = (s as any).npc_perstype ?? {})['A' + String((s as any).npctemp || '') + ''] = 'XXXX';
  if (((s as any).npc_gender ?? 0)['A' + ((s as any).npctemp ?? 0)] === 0) {
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String((s as any).npctemp || '') + ''] = 10000;
    ((s as any).npc_spermvol = (s as any).npc_spermvol ?? {})['A' + String((s as any).npctemp || '') + ''] = 40;
  } else {
    if (((s as any).npc_gender ?? 0)['A' + ((s as any).npctemp ?? 0)] === 1) {
      ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'clitoris';
      ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = (-1);
      ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String((s as any).npctemp || '') + ''] = (-1);
      ((s as any).npc_spermvol = (s as any).npc_spermvol ?? {})['A' + String((s as any).npctemp || '') + ''] = (-1);
    }
  }
  scene.build();
}

function enterAttribs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: ! standard attribute values
  scene.build();
}

function enterBody(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'model') {
    ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})['A' + String((s as any).npctemp || '') + ''] = 190;
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String((s as any).npctemp || '') + ''] = 165;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 40;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'actor') {
      ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String((s as any).npctemp || '') + ''] = 188;
    }
  }
  scene.build();
}

function enterGroup(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_selfieon = (s as any).npc_selfieon ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
  if (((s as any).locArgs?.[1] ?? 0) === 'friends'  ||  ((s as any).locArgs?.[1] ?? 0) === 8) {
    ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 8;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'family'  ||  ((s as any).locArgs?.[1] ?? 0) === 7) {
      ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    } else {
      ((s as any).schoolenable = (s as any).schoolenable ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
      ((s as any).npcGo = (s as any).npcGo ?? {})['A' + String((s as any).npctemp || '') + ''] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.numnpc = ' + ((s as any).npctemp ?? 0) + '; return s; }); window.__gameStore.getState().doGoto(\\u0027Snpc\\u0027, \\u0027\\u0027); return false;">' + ((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))] + ' ' + ((s as any).npc_lastname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))] + '</a>';
      ((s as any).school_static_num = (s as any).school_static_num ?? {})['A' + String((s as any).npctemp || '') + ''] = 'A' + ((s as any).npctemp ?? 0) + '';
      if (((s as any).locArgs?.[1] ?? 0) === 'teacher'  ||  ((s as any).locArgs?.[1] ?? 0) === 6) {
        ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'outcast'  ||  ((s as any).locArgs?.[1] ?? 0) === 5) {
          ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 5;
          ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String((s as any).npctemp || '') + ''] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027gschool_outcast_chats\\u0027, \\u0027\\u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))] + '</a>';
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'gopnik'  ||  ((s as any).locArgs?.[1] ?? 0) === 4) {
            ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 4;
            ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String((s as any).npctemp || '') + ''] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027gschool_gopnik_chats\\u0027, \\u0027\\u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))] + '</a>';
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'nerd'  ||  ((s as any).locArgs?.[1] ?? 0) === 3) {
              ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 3;
              ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String((s as any).npctemp || '') + ''] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027gschool_nerd_chats\\u0027, \\u0027\\u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))] + '</a>';
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'jock'  ||  ((s as any).locArgs?.[1] ?? 0) === 2) {
                ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
                ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String((s as any).npctemp || '') + ''] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027gschool_jock_chats\\u0027, \\u0027\\u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))] + '</a>';
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'coolkid'  ||  ((s as any).locArgs?.[1] ?? 0) === 1) {
                  ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
                  ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String((s as any).npctemp || '') + ''] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027gschool_coolkid_chats\\u0027, \\u0027\\u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))] + '</a>';
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterUniType(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'professor') {
    ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'professor';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'teaching') {
      ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'teaching_studies';
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'business') {
        ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'business_studies';
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'science') {
          ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'science_studies';
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'fashion') {
            ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'fashion_studies';
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'nursing') {
              ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'nursing_studies';
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'psychology') {
                ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'psychology_studies';
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'programming') {
                  ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'programming_studies';
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'other') {
                    ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'other_studies';
                  }
                }
              }
            }
          }
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
    case 'defaults':
      enterDefaults(s, scene);
      break;
    case 'attribs':
      enterAttribs(s, scene);
      break;
    case 'body':
      enterBody(s, scene);
      break;
    case 'group':
      enterGroup(s, scene);
      break;
    case 'uni_type':
      enterUniType(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npcstaticdefaults: LocationDef = {
  name: 'npcstaticdefaults',
  region: 'other',
  enter: enter,
};
