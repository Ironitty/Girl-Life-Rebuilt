// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefaults(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pic = (s as any).npc_pic ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'xPICx';
  ((s as any).npc_perstype = (s as any).npc_perstype ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'XXXX';
  if (((s as any).npc_gender ?? 0)['A' + (((s as any).npctemp ?? 0))] === 0) {
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10000;
    ((s as any).npc_spermvol = (s as any).npc_spermvol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 40;
  } else {
    if (((s as any).npc_gender ?? 0)['A' + (((s as any).npctemp ?? 0))] === 1) {
      ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'clitoris';
      ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = (-1);
      ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = (-1);
      ((s as any).npc_spermvol = (s as any).npc_spermvol ?? {})['A' + String(((s as any).npctemp ?? 0))] = (-1);
    }
  }
  scene.build();
}

function enterAttribs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: ! standard attribute values
  scene.build();
}

function enterBody(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'model') {
    ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})['A' + String(((s as any).npctemp ?? 0))] = 190;
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 165;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 40;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'actor') {
      ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 188;
    }
  }
  scene.build();
}

function enterGroup(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_selfieon = (s as any).npc_selfieon ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  if (String((s as any).locArgs?.[1] ?? '') === 'friends'  ||  String((s as any).locArgs?.[1] ?? '') === 8) {
    ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'family'  ||  String((s as any).locArgs?.[1] ?? '') === 7) {
      ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    } else {
      ((s as any).schoolenable = (s as any).schoolenable ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
      ((s as any).npcGo = (s as any).npcGo ?? {})['A' + String(((s as any).npctemp ?? 0))] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.numnpc = ' + ((s as any).npctemp ?? 0) + '; return s; }); window.__gameStore.getState().doGoto(\u0027Snpc\u0027, \u0027\u0027); return false;">' + (((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))]) + ' ' + (((s as any).npc_lastname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))]) + '</a>';
      ((s as any).school_static_num = (s as any).school_static_num ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'A' + ((s as any).npctemp ?? 0) + '';
      if (String((s as any).locArgs?.[1] ?? '') === 'teacher'  ||  String((s as any).locArgs?.[1] ?? '') === 6) {
        ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'outcast'  ||  String((s as any).locArgs?.[1] ?? '') === 5) {
          ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
          ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).npctemp ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_outcast_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).npctemp ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))]) + '</a>';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'gopnik'  ||  String((s as any).locArgs?.[1] ?? '') === 4) {
            ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
            ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).npctemp ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_gopnik_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).npctemp ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))]) + '</a>';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'nerd'  ||  String((s as any).locArgs?.[1] ?? '') === 3) {
              ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String(((s as any).npctemp ?? 0))] = 3;
              ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).npctemp ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_nerd_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).npctemp ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))]) + '</a>';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'jock'  ||  String((s as any).locArgs?.[1] ?? '') === 2) {
                ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
                ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).npctemp ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_jock_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).npctemp ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))]) + '</a>';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'coolkid'  ||  String((s as any).locArgs?.[1] ?? '') === 1) {
                  ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
                  ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).npctemp ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_coolkid_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).npctemp ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).npctemp ?? 0))]) + '</a>';
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
  if (String((s as any).locArgs?.[1] ?? '') === 'professor') {
    ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'professor';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'teaching') {
      ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'teaching_studies';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'business') {
        ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'business_studies';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'science') {
          ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'science_studies';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'fashion') {
            ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'fashion_studies';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'nursing') {
              ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'nursing_studies';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'psychology') {
                ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'psychology_studies';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'programming') {
                  ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'programming_studies';
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 'other') {
                    ((s as any).npc_uni_eduType = (s as any).npc_uni_eduType ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'other_studies';
                  }
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
