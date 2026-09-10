// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_pic['A' + String((s as any).npctemp ?? '') + ''] = 'xPICx';
  (s as any).npc_perstype['A' + String((s as any).npctemp ?? '') + ''] = 'XXXX';
  if (((s as any).npc_gender ?? 0)?.['A' + String(((s as any).npctemp ?? 0))] === 0) {
    (s as any).npc_spermpot['A' + String((s as any).npctemp ?? '') + ''] = 10000;
    (s as any).npc_spermvol['A' + String((s as any).npctemp ?? '') + ''] = 40;
  } else {
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'clitoris';
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = (-1);
    (s as any).npc_spermpot['A' + String((s as any).npctemp ?? '') + ''] = (-1);
    (s as any).npc_spermvol['A' + String((s as any).npctemp ?? '') + ''] = (-1);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'attribs') {
    // TODO-QSP: ! standard attribute values
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'model') {
      (s as any).npc_apprnc['A' + String((s as any).npctemp ?? '') + ''] = 190;
      (s as any).npc_height['A' + String((s as any).npctemp ?? '') + ''] = 165;
      (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 40;
      (s as any).npc_haircol['A' + String((s as any).npctemp ?? '') + ''] = 2;
    } else {
      (s as any).npc_height['A' + String((s as any).npctemp ?? '') + ''] = 188;
    }
    if (((s as any).locArgs?.[0] ?? 0) === 'group') {
      (s as any).npc_selfieon['A' + String((s as any).npctemp ?? '') + ''] = 1;
      if (((s as any).locArgs?.[1] ?? 0) === 'friends'  ||  ((s as any).ARGS ?? 0)[1] === 8) {
        (s as any).npc_grupTipe['A' + String((s as any).npctemp ?? '') + ''] = 8;
      } else {
        (s as any).npc_grupTipe['A' + String((s as any).npctemp ?? '') + ''] = 7;
        (s as any).schoolenable['A' + String((s as any).npctemp ?? '') + ''] = 1;
        (s as any).npcGo['A' + String((s as any).npctemp ?? '') + ''] = '<a href="exec:numnpc = <<npctemp>> & gt \'Snpc\'"><<$npc_firstname["A<<npctemp>>"]>> <<$npc_lastname["A<<npctemp>>"]>></a>';
        (s as any).school_static_num['A' + String((s as any).npctemp ?? '') + ''] = 'A<<npctemp>>';
        if (((s as any).locArgs?.[1] ?? 0) === 'teacher'  ||  ((s as any).ARGS ?? 0)[1] === 6) {
          (s as any).npc_grupTipe['A' + String((s as any).npctemp ?? '') + ''] = 6;
        } else {
          (s as any).npc_grupTipe['A' + String((s as any).npctemp ?? '') + ''] = 5;
          (s as any).npcGoSchool['A' + String((s as any).npctemp ?? '') + ''] = '<a href="exec:gt \'gschool_outcast_chats\', \' + $lcase($npc_usedname[\'A<<npctemp>>\']) + \'"><<$npc_usedname["A<<npctemp>>"]>></a>';
          if (((s as any).locArgs?.[1] ?? 0) === 'gopnik'  ||  ((s as any).ARGS ?? 0)[1] === 4) {
            (s as any).npc_grupTipe['A' + String((s as any).npctemp ?? '') + ''] = 4;
            (s as any).npcGoSchool['A' + String((s as any).npctemp ?? '') + ''] = '<a href="exec:gt \'gschool_gopnik_chats\', \' + $lcase($npc_usedname[\'A<<npctemp>>\']) + \'"><<$npc_usedname["A<<npctemp>>"]>></a>';
          } else {
            (s as any).npc_grupTipe['A' + String((s as any).npctemp ?? '') + ''] = 3;
            (s as any).npcGoSchool['A' + String((s as any).npctemp ?? '') + ''] = '<a href="exec:gt \'gschool_nerd_chats\', \' + $lcase($npc_usedname[\'A<<npctemp>>\']) + \'"><<$npc_usedname["A<<npctemp>>"]>></a>';
            if (((s as any).locArgs?.[1] ?? 0) === 'jock'  ||  ((s as any).ARGS ?? 0)[1] === 2) {
              (s as any).npc_grupTipe['A' + String((s as any).npctemp ?? '') + ''] = 2;
              (s as any).npcGoSchool['A' + String((s as any).npctemp ?? '') + ''] = '<a href="exec:gt \'gschool_jock_chats\', \' + $lcase($npc_usedname[\'A<<npctemp>>\']) + \'"><<$npc_usedname["A<<npctemp>>"]>></a>';
            } else {
              (s as any).npc_grupTipe['A' + String((s as any).npctemp ?? '') + ''] = 1;
              (s as any).npcGoSchool['A' + String((s as any).npctemp ?? '') + ''] = '<a href="exec:gt \'gschool_coolkid_chats\', \' + $lcase($npc_usedname[\'A<<npctemp>>\']) + \'"><<$npc_usedname["A<<npctemp>>"]>></a>';
            }
          }
          if (((s as any).locArgs?.[0] ?? 0) === 'uni_type') {
            if (((s as any).locArgs?.[1] ?? 0) === 'professor') {
              (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'professor';
            } else {
              (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'teaching_studies';
              if (((s as any).locArgs?.[1] ?? 0) === 'business') {
                (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'business_studies';
              } else {
                (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'science_studies';
                if (((s as any).locArgs?.[1] ?? 0) === 'fashion') {
                  (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'fashion_studies';
                } else {
                  (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'nursing_studies';
                  if (((s as any).locArgs?.[1] ?? 0) === 'psychology') {
                    (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'psychology_studies';
                  } else {
                    (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'programming_studies';
                    if (((s as any).locArgs?.[1] ?? 0) === 'other') {
                      (s as any).npc_uni_eduType['A' + String((s as any).npctemp ?? '') + ''] = 'other_studies';
                    }
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

export const npcstaticdefaults: LocationDef = {
  name: 'npcstaticdefaults',
  region: 'other',
  enter: enter,
};
