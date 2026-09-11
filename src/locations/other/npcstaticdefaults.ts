import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefaults(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pic ?? {})['A' + String((s as any).npctemp || '') + ''] = 'xPICx';
  ((s as any).npc_perstype ?? {})['A' + String((s as any).npctemp || '') + ''] = 'XXXX';
  if (((s as any).npc_gender ?? 0)['A' + ((s as any).npctemp ?? 0)] === 0) {
    ((s as any).npc_spermpot ?? {})['A' + String((s as any).npctemp || '') + ''] = 10000;
    ((s as any).npc_spermvol ?? {})['A' + String((s as any).npctemp || '') + ''] = 40;
  } else {
    if (((s as any).npc_gender ?? 0)['A' + ((s as any).npctemp ?? 0)] === 1) {
      ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'clitoris';
      ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = (-1);
      ((s as any).npc_spermpot ?? {})['A' + String((s as any).npctemp || '') + ''] = (-1);
      ((s as any).npc_spermvol ?? {})['A' + String((s as any).npctemp || '') + ''] = (-1);
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
    ((s as any).npc_apprnc ?? {})['A' + String((s as any).npctemp || '') + ''] = 190;
    ((s as any).npc_height ?? {})['A' + String((s as any).npctemp || '') + ''] = 165;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 40;
    ((s as any).npc_haircol ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'actor') {
      ((s as any).npc_height ?? {})['A' + String((s as any).npctemp || '') + ''] = 188;
    }
  }
  scene.build();
}

function enterGroup(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_selfieon ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
  if (((s as any).locArgs?.[1] ?? 0) === 'friends'  ||  ((s as any).locArgs?.[1] ?? 0) === 8) {
    ((s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 8;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'family'  ||  ((s as any).locArgs?.[1] ?? 0) === 7) {
      ((s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    } else {
      ((s as any).schoolenable ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
      // TODO-QSP: $npcGo['A<<npctemp>>'] = '<a href="exec:numnpc = <<npctemp>> & gt ''Snpc''"><<$npc_firstname["A<<npctemp>>"]>> <<$npc_lastname["A<<npctemp>>"]>></a>'
      ((s as any).school_static_num ?? {})['A' + String((s as any).npctemp || '') + ''] = 'A' + qspUntranslated(s, "npctemp>", { location: "npcstaticdefaults" }) + '';
      if (((s as any).locArgs?.[1] ?? 0) === 'teacher'  ||  ((s as any).locArgs?.[1] ?? 0) === 6) {
        ((s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'outcast'  ||  ((s as any).locArgs?.[1] ?? 0) === 5) {
          ((s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 5;
          // TODO-QSP: $npcGoSchool['A<<npctemp>>'] = '<a href="exec:gt ''gschool_outcast_chats'', ''' + $lcase($npc_usedname['A<<npctemp>>']) + '''"><<$npc_usedname["A<<npctemp>>"]>></a>'
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'gopnik'  ||  ((s as any).locArgs?.[1] ?? 0) === 4) {
            ((s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 4;
            // TODO-QSP: $npcGoSchool['A<<npctemp>>'] = '<a href="exec:gt ''gschool_gopnik_chats'', ''' + $lcase($npc_usedname['A<<npctemp>>']) + '''"><<$npc_usedname["A<<npctemp>>"]>></a>'
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'nerd'  ||  ((s as any).locArgs?.[1] ?? 0) === 3) {
              ((s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 3;
              // TODO-QSP: $npcGoSchool['A<<npctemp>>'] = '<a href="exec:gt ''gschool_nerd_chats'', ''' + $lcase($npc_usedname['A<<npctemp>>']) + '''"><<$npc_usedname["A<<npctemp>>"]>></a>'
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'jock'  ||  ((s as any).locArgs?.[1] ?? 0) === 2) {
                ((s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
                // TODO-QSP: $npcGoSchool['A<<npctemp>>'] = '<a href="exec:gt ''gschool_jock_chats'', ''' + $lcase($npc_usedname['A<<npctemp>>']) + '''"><<$npc_usedname["A<<npctemp>>"]>></a>'
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'coolkid'  ||  ((s as any).locArgs?.[1] ?? 0) === 1) {
                  ((s as any).npc_grupTipe ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
                  // TODO-QSP: $npcGoSchool['A<<npctemp>>'] = '<a href="exec:gt ''gschool_coolkid_chats'', ''' + $lcase($npc_usedname['A<<npctemp>>']) + '''"><<$npc_usedname["A<<npctemp>>"]>></a>'
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
    ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'professor';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'teaching') {
      ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'teaching_studies';
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'business') {
        ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'business_studies';
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'science') {
          ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'science_studies';
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'fashion') {
            ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'fashion_studies';
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'nursing') {
              ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'nursing_studies';
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'psychology') {
                ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'psychology_studies';
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'programming') {
                  ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'programming_studies';
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'other') {
                    ((s as any).npc_uni_eduType ?? {})['A' + String((s as any).npctemp || '') + ''] = 'other_studies';
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
