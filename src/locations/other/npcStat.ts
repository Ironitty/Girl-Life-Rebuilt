import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] > 0)  ||  ((s as any).locArgs?.[0] ?? 0) !== ''  &&  ((s as any).isnum ?? 0)(((s as any).locArgs?.[0] ?? 0))) {
    (s as any).npclastcalledn = ((((s as any).locArgs?.[0] ?? 0) !== ''  &&  ((s as any).isnum ?? 0)(((s as any).locArgs?.[0] ?? 0))) ? (qspUntranslated(s, "val(ARGS[0])", { location: "npcStat" })) : (qspUntranslated(s, "ARGS[0]", { location: "npcStat" })));
    (s as any).npcStatVars['tempID'] = '((s as any).A ?? 0)' + ((s as any).npclastcalledn ?? 0);
  } else {
    (s as any).npcStatVars['tempID'] = qspUntranslated(s, "ucase(ARGS[0])", { location: "npcStat" });
    (s as any).npcStatVars['tempID'] = '((s as any).D ?? 0)' + ((s as any).rand ?? 0)(0, 7);
  }
  (s as any).npclastcalledn = qspUntranslated(s, "val(mid(npcStatVars['tempID'], 2))", { location: "npcStat" });
  if ((('ABCDM').indexOf((qspUntranslated(s, "\u00001\u0000", { location: "npcStat" })))) + 1 > 0) {
    if (((s as any).isnum ?? 0)(((s as any).npc_usedname ?? 0)?.[String((s as any).npclastcalled ?? 0)])  ||  ((s as any).npc_usedname ?? 0)?.[String((s as any).npclastcalled ?? 0)] === '') {
      // TODO-QSP: $npc_usedname[$npclastcalled] = $npc_firstname[$npclastcalled]
    }
    (s as any).npcStatVars['gender'] = ((s as any).npc_gender ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['inanimate'] = ((s as any).npc_isinanimate ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['name'] = ((s as any).npc_usedname ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['dick_length'] = ((s as any).npc_dick ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['dick_girth'] = ((s as any).npc_girth ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['thdick'] = ((s as any).npc_thdick ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['dick_class'] = ((s as any).npc_dick_class ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['dick_desc'] = ((s as any).npc_dick_desc ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['spermpot'] = ((s as any).npc_spermpot ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['spermvol'] = ((s as any).npc_spermvol ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['height_desc'] = ((s as any).npc_height_desc ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['height_desc_pref'] = ((s as any).npc_height_desc_pref ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['build_desc'] = ((s as any).npc_build_desc ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['build_desc_pref'] = ((s as any).npc_build_desc_pref ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['dob'] = ((s as any).npc_dob ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['apprnc'] = ((s as any).npc_apprnc ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['hotcat'] = ((s as any).npc_hotcat ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['sexskill'] = ((s as any).npc_sexskill ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['height'] = ((s as any).npc_height ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['weight'] = ((s as any).npc_weight ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['haircol'] = ((s as any).npc_haircol ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['eyecol'] = ((s as any).npc_eyecol ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['outfit'] = ((s as any).npc_outfit ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['occupation'] = ((s as any).npc_occupation ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['relation'] = ((s as any).npc_rel_type ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    qspCall(s, 'set_npc_attraction', '', ((s as any).npclastcalled ?? 0), (-1));
    (s as any).npcStatVars['attraction'] = ((s as any).npc_attraction ?? 0)?.[String((s as any).npclastcalled ?? 0)];
    (s as any).npcStatVars['rel_hotcat'] = ((s as any).npc_rel_hotcat ?? 0)?.[String((s as any).npclastcalled ?? 0)];
  } else {
    (s as any).npcStatVars['gender'] = 0;
    if ((!((s as any).npclastcalledn ?? 0))) {
      (s as any).npcStatVars['name'] = 'a tiny sized';
      (s as any).npcStatVars['dick_length'] = 5;
      (s as any).npcStatVars['dick_girth'] = 8;
      (s as any).npcStatVars['sexskill'] = Math.floor(Math.random() * 21) + 10;
      (s as any).npcStatVars['spermpot'] = Math.floor(Math.random() * 7501) + 4000;
      (s as any).npcStatVars['spermvol'] = Math.floor(Math.random() * 41) + 5;
    } else {
      (s as any).npcStatVars['name'] = 'a small sized';
      (s as any).npcStatVars['dick_length'] = 10;
      (s as any).npcStatVars['dick_girth'] = 9;
      (s as any).npcStatVars['sexskill'] = Math.floor(Math.random() * 26) + 15;
      (s as any).npcStatVars['spermpot'] = Math.floor(Math.random() * 6501) + 6000;
      (s as any).npcStatVars['spermvol'] = Math.floor(Math.random() * 41) + 15;
      if (((s as any).npclastcalledn ?? 0) === 2) {
        (s as any).npcStatVars['name'] = 'a medium sized';
        (s as any).npcStatVars['dick_length'] = 15;
        (s as any).npcStatVars['dick_girth'] = 10;
        (s as any).npcStatVars['spermpot'] = Math.floor(Math.random() * 6001) + 7500;
        (s as any).npcStatVars['spermvol'] = Math.floor(Math.random() * 42) + 22;
      } else {
        (s as any).npcStatVars['name'] = 'a large sized';
        (s as any).npcStatVars['dick_length'] = 20;
        (s as any).npcStatVars['dick_girth'] = 11;
        (s as any).npcStatVars['sexskill'] = Math.floor(Math.random() * 36) + 25;
        (s as any).npcStatVars['spermpot'] = Math.floor(Math.random() * 6001) + 8500;
        (s as any).npcStatVars['spermvol'] = Math.floor(Math.random() * 42) + 27;
        if (((s as any).npclastcalledn ?? 0) === 4) {
          (s as any).npcStatVars['name'] = 'a huge sized';
          (s as any).npcStatVars['dick_length'] = 25;
          (s as any).npcStatVars['dick_girth'] = 12;
          (s as any).npcStatVars['sexskill'] = Math.floor(Math.random() * 41) + 30;
          (s as any).npcStatVars['spermpot'] = Math.floor(Math.random() * 6001) + 8500;
          (s as any).npcStatVars['spermvol'] = Math.floor(Math.random() * 42) + 27;
        } else {
          (s as any).npcStatVars['name'] = 'a giant sized';
          (s as any).npcStatVars['dick_length'] = 30;
          (s as any).npcStatVars['dick_girth'] = 13;
          (s as any).npcStatVars['sexskill'] = Math.floor(Math.random() * 56) + 25;
          (s as any).npcStatVars['spermpot'] = Math.floor(Math.random() * 6001) + 9000;
          (s as any).npcStatVars['spermvol'] = Math.floor(Math.random() * 41) + 30;
          if (((s as any).npclastcalledn ?? 0) === 6) {
            (s as any).npcStatVars['name'] = 'a humongous sized';
            (s as any).npcStatVars['dick_length'] = 35;
            (s as any).npcStatVars['dick_girth'] = 14;
            (s as any).npcStatVars['sexskill'] = Math.floor(Math.random() * 71) + 20;
            (s as any).npcStatVars['spermpot'] = Math.floor(Math.random() * 6001) + 9000;
            (s as any).npcStatVars['spermvol'] = Math.floor(Math.random() * 41) + 30;
          } else {
            (s as any).npcStatVars['name'] = 'a horse sized';
            (s as any).npcStatVars['dick_length'] = 40;
            (s as any).npcStatVars['dick_girth'] = 15;
            (s as any).npcStatVars['sexskill'] = Math.floor(Math.random() * 86) + 15;
            (s as any).npcStatVars['spermpot'] = Math.floor(Math.random() * 6001) + 9500;
            (s as any).npcStatVars['spermvol'] = Math.floor(Math.random() * 42) + 32;
          }
          (s as any).npcStatVars['height'] = Math.floor(Math.random() * 21) + 160;
          (s as any).npcStatVars['weight'] = Math.floor(Math.random() * 46) + 45;
          (s as any).npcStatVars['haircol'] = Math.floor(Math.random() * 4) + 0;
          (s as any).npcStatVars['eyecol'] = Math.floor(Math.random() * 4) + 0;
          (s as any).npcStatVars['occupation'] = '';
          (s as any).npcStatVars['relation'] = 'stranger';
          (s as any).npcStatVars['age'] = Math.floor(Math.random() * 18) + 18;
          (s as any).npcStatVars['apprnc'] = ((s as any).rand ?? 0)(0, 100) + ((s as any).rand ?? 0)(0, 100);
          (s as any).npcStatVars['hotcat'] = qspFunc(s, 'AppearanceSystem', 'ConvertToHotcat', ((s as any).npcStatVars ?? 0)?.['apprnc']);
          (s as any).npcStatVars['attraction'] = ((s as any).pcs_apprnc ?? 0);
          (s as any).npcStatVars['rel_hotcat'] = ((s as any).pcs_hotcat ?? 0);
        }
        if (((s as any).npcStatVars ?? 0)?.['inanimate']) {
          (s as any).npcStatVars['sexskill'] = ((s as any).stat ?? 0)?.['mast'] / 3;
          (s as any).npcStatVars['spermpot'] = (-1);
          (s as any).npcStatVars['spermvol'] = (-1);
        }
        if (((s as any).npcStatVars ?? 0)?.['spermpot'] === 0) {
          if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
            (s as any).npcStatVars['spermpot'] = 10000;
          } else {
            (s as any).npcStatVars['spermpot'] = (-1);
          }
        }
        if (((s as any).npcStatVars ?? 0)?.['spermvol'] === 0) {
          if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
            (s as any).npcStatVars['spermvol'] = 40;
          } else {
            (s as any).npcStatVars['spermvol'] = (-1);
          }
        }
        if (((';none;normal;extra thin;ribbed;broken;sabotaged;sabotaged_other;').indexOf((';\'0\';'))) + 1 > 0) {
          (s as any).npcStatVars['condom'] = ((s as any).locArgs?.[2] ?? 0);
        } else {
          if (((s as any).preziktype ?? 0) === 0  &&  (((s as any).mc_inventory ?? 0)?.['equipped_condoms']+((s as any).mc_inventory ?? 0)?.['normal_condoms']) > 0) {
            (s as any).npcStatVars['condom'] = 'normal';
          } else {
            (s as any).npcStatVars['condom'] = 'sabotaged';
            (s as any).npcStatVars['condom'] = 'none';
          }
        }
        if (((s as any).npcStatVars ?? 0)?.['dob'] !== 0) {
          (s as any).npcStatVars['bday'] = (((s as any).npcStatVars ?? 0)?.['dob'] % 100);
          (s as any).npcStatVars['bmonth'] = (((s as any).npcStatVars ?? 0)?.['dob'] / 100) % 100;
          (s as any).npcStatVars['byear'] = ((s as any).npcStatVars ?? 0)?.['dob'] / 10000;
          (s as any).npcStatVars['age'] = ((s as any).npcStatVars ?? 0)?.['byear'] - ((s as any).year ?? 0);
          if (((s as any).npcStatVars ?? 0)?.['bmonth'] < ((s as any).month ?? 0)) {
            (s as any).npcStatVars['age'] = ((s as any).npcStatVars['age'] ?? 0) + (1);
          } else {
            (s as any).npcStatVars['age'] = ((s as any).npcStatVars['age'] ?? 0) + (1);
          }
        }
        if (((s as any).npcStatVars ?? 0)?.['inanimate']) {
          (s as any).npcStatVars['xe'] = 'it';
          (s as any).npcStatVars['xec'] = 'It';
          (s as any).npcStatVars['xem'] = 'it';
          (s as any).npcStatVars['xemc'] = 'It';
          (s as any).npcStatVars['xyr'] = 'its';
          (s as any).npcStatVars['xyrc'] = 'Its';
          (s as any).npcStatVars['xyrs'] = 'its';
          (s as any).npcStatVars['xyrsc'] = 'Its';
          (s as any).npcStatVars['xemself'] = 'itself';
          (s as any).npcStatVars['xemselfc'] = 'Itself';
          (s as any).npcStatVars['person'] = 'object';
          (s as any).npcStatVars['personc'] = 'Object';
        } else {
          (s as any).npcStatVars['xe'] = 'he';
          (s as any).npcStatVars['xec'] = 'He';
          (s as any).npcStatVars['xem'] = 'him';
          (s as any).npcStatVars['xemc'] = 'Him';
          (s as any).npcStatVars['xyr'] = 'his';
          (s as any).npcStatVars['xyrc'] = 'His';
          (s as any).npcStatVars['xyrs'] = 'his';
          (s as any).npcStatVars['xyrsc'] = 'His';
          (s as any).npcStatVars['xemself'] = 'himself';
          (s as any).npcStatVars['xemselfc'] = 'Himself';
          (s as any).npcStatVars['person'] = 'man';
          (s as any).npcStatVars['personc'] = 'Man';
          if (((s as any).npcStatVars ?? 0)?.['gender'] === 1) {
            (s as any).npcStatVars['xe'] = 'she';
            (s as any).npcStatVars['xec'] = 'She';
            (s as any).npcStatVars['xem'] = 'her';
            (s as any).npcStatVars['xemc'] = 'Her';
            (s as any).npcStatVars['xyr'] = 'her';
            (s as any).npcStatVars['xyrc'] = 'Her';
            (s as any).npcStatVars['xyrs'] = 'hers';
            (s as any).npcStatVars['xyrsc'] = 'Hers';
            (s as any).npcStatVars['xemself'] = 'herself';
            (s as any).npcStatVars['xemselfc'] = 'Herself';
            (s as any).npcStatVars['person'] = 'woman';
            (s as any).npcStatVars['personc'] = 'Woman';
          } else {
            (s as any).npcStatVars['xe'] = 'they';
            (s as any).npcStatVars['xec'] = 'They';
            (s as any).npcStatVars['xem'] = 'them';
            (s as any).npcStatVars['xemc'] = 'Them';
            (s as any).npcStatVars['xyr'] = 'their';
            (s as any).npcStatVars['xyrc'] = 'Their';
            (s as any).npcStatVars['xyrs'] = 'theirs';
            (s as any).npcStatVars['xyrsc'] = 'Theirs';
            (s as any).npcStatVars['xemself'] = 'themself';
            (s as any).npcStatVars['xemselfc'] = 'Themself';
            (s as any).npcStatVars['person'] = 'person';
            (s as any).npcStatVars['personc'] = 'Person';
            (s as any).npcStatVars['xe'] = 'xe';
            (s as any).npcStatVars['xec'] = 'Xe';
            (s as any).npcStatVars['xem'] = 'xem';
            (s as any).npcStatVars['xemc'] = 'Xem';
            (s as any).npcStatVars['xyr'] = 'xyr';
            (s as any).npcStatVars['xyrc'] = 'Xyr';
            (s as any).npcStatVars['xyrs'] = 'xyrs';
            (s as any).npcStatVars['xyrsc'] = 'Xyrs';
            (s as any).npcStatVars['xemself'] = 'xemself';
            (s as any).npcStatVars['xemselfc'] = 'Xemself';
            (s as any).npcStatVars['person'] = 'person';
            (s as any).npcStatVars['personc'] = 'Person';
          }
          if (((s as any).npcStatVars ?? 0)?.['haircol'] === 0) {
            (s as any).npcStatVars['hair'] = 'black';
          } else {
            (s as any).npcStatVars['hair'] = ((((s as any).npcStatVars ?? 0)?.['gender'] === 0) ? ('brown') : ('brunette'));
            if (((s as any).npcStatVars ?? 0)?.['haircol'] === 2) {
              (s as any).npcStatVars['hair'] = 'red';
            } else {
              (s as any).npcStatVars['hair'] = ((((s as any).npcStatVars ?? 0)?.['gender'] === 0) ? ('blond') : ('blonde'));
              (s as any).npcStatVars['hair'] = 'dyed';
            }
            if (((s as any).npcStatVars ?? 0)?.['eyecol'] === 0) {
              (s as any).npcStatVars['eyes'] = 'brown';
            } else {
              (s as any).npcStatVars['eyes'] = 'grey';
              if (((s as any).npcStatVars ?? 0)?.['eyecol'] === 2) {
                (s as any).npcStatVars['eyes'] = 'green';
              } else {
                (s as any).npcStatVars['eyes'] = 'blue';
                (s as any).npcStatVars['eyes'] = 'attractive';
              }
              if (((s as any).npcStatVars ?? 0)?.['outfit'] === '') {
                (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
                if ((!((s as any).temp_rand ?? 0))) {
                  (s as any).npcStatVars['outfit'] = 'a tracksuit';
                } else {
                  (s as any).npcStatVars['outfit'] = 'jeans  &&  a ' + ((s as any).iif ?? 0)(((s as any).npcStatVars ?? 0)?.['gender'] === 0, 'sweater', 'blouse');
                  (s as any).npcStatVars['outfit'] = '((s as any).an ?? 0) ((s as any).expensive ?? 0) ' + ((((s as any).npcStatVars ?? 0)?.['gender'] === 0) ? ('suit') : ('dress'));
                }
              }
              (s as any).temp_statVars['i_max'] = 0;
              if (((s as any).temp_statVars ?? 0)?.['i_max'] > 0) {
                (s as any).temp_statVars['i'] = 0;
                // TODO-QSP: :pref_loop
                if (qspFunc(s, 'pcs_has_attr', ((s as any).temp_trait ?? 0))) {
                  if (((s as any).npc_stat_pref_values ?? 0)?.[String((s as any).temp_trait ?? 0)] > 0) {
                    (s as any).npcStatVars['likes'] = ((s as any).npcStatVars['likes'] ?? 0) + (';' + ((s as any).temp_trait ?? 0));
                  } else {
                    (s as any).npcStatVars['dislikes'] = ((s as any).npcStatVars['dislikes'] ?? 0) + (';' + ((s as any).temp_trait ?? 0));
                  }
                }
                (s as any).temp_statVars['i'] = ((s as any).temp_statVars['i'] ?? 0) + (1);
                if (((s as any).temp_statVars ?? 0)?.['i'] < ((s as any).temp_statVars ?? 0)?.['i_max']) {
                  // TODO-QSP: jump 'pref_loop'
                }
                if (((qspUntranslated(s, "\u00000\u0000", { location: "npcStat" })).length) > 0) {
                  (s as any).npcStatVars['likes'] = ((s as any).npcStatVars['likes'] ?? 0) + (';');
                }
                if (((qspUntranslated(s, "\u00000\u0000", { location: "npcStat" })).length) > 0) {
                  (s as any).npcStatVars['dislikes'] = ((s as any).npcStatVars['dislikes'] ?? 0) + (';');
                }
              }
              (s as any).npcStatVars['pref_func'] = '$result = iif(instr(\'aeiou\', mid($ARGS[0], 1, 1)) > 0, \'an \', \'a \') + $ARGS[0]';
              if (((s as any).npcStatVars ?? 0)?.['height'] === 0) {
                (s as any).npcStatVars['bmi'] = 200;
              } else {
                (s as any).npcStatVars['bmi'] = 100000 * ((s as any).npcStatVars ?? 0)?.['weight'] / (((s as any).npcStatVars ?? 0)?.['height'] * ((s as any).npcStatVars ?? 0)?.['height']);
              }
              if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
                (s as any).npcStatVars['av_height'] = 175;
              } else {
                (s as any).npcStatVars['av_height'] = 165;
              }
              if (((s as any).npcStatVars ?? 0)?.['height_desc'] === ''  ||  ((s as any).npcStatVars ?? 0)?.['height_desc_pref'] === '') {
                if (((s as any).npcStatVars ?? 0)?.['height'] < ((s as any).npcStatVars ?? 0)?.['av_height'] - 5) {
                  (s as any).temp_body = 1;
                  (s as any).npcStatVars['height_desc'] = 'short';
                } else {
                  (s as any).temp_body = 2;
                  (s as any).npcStatVars['height_desc'] = 'average';
                  (s as any).temp_body = 3;
                  (s as any).npcStatVars['height_desc'] = 'tall';
                }
              }
              (s as any).npcStatVars['height_desc_pref'] = 0;
              if (((s as any).npcStatVars ?? 0)?.['build_desc'] === ''  ||  ((s as any).npcStatVars ?? 0)?.['build_desc_pref'] === '') {
                if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
                  if (((s as any).npcStatVars ?? 0)?.['bmi'] < 190) {
                    (s as any).npcStatVars['build_desc'] = 'thin';
                  } else {
                    (s as any).npcStatVars['build_desc'] = 'athletic';
                    if (((s as any).npcStatVars ?? 0)?.['bmi'] < 250) {
                      (s as any).npcStatVars['build_desc'] = 'chunky';
                    } else {
                      (s as any).npcStatVars['build_desc'] = 'fat';
                    }
                    if (((s as any).npcStatVars ?? 0)?.['bmi'] < 190) {
                      if (((s as any).temp_body ?? 0) === 1) {
                        (s as any).npcStatVars['build_desc'] = 'petite';
                      } else {
                        (s as any).npcStatVars['build_desc'] = 'slender';
                      }
                    } else {
                      (s as any).npcStatVars['build_desc'] = 'toned';
                      if (((s as any).npcStatVars ?? 0)?.['bmi'] < 250) {
                        (s as any).npcStatVars['build_desc'] = 'average';
                      } else {
                        (s as any).npcStatVars['build_desc'] = 'chubby';
                      }
                    }
                  }
                  (s as any).npcStatVars['build_desc_pref'] = 0;
                  if (((s as any).npcStatVars ?? 0)?.['thdick'] === '') {
                    if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 9) {
                      (s as any).npcStatVars['thdick'] = 'skinny';
                    } else {
                      (s as any).npcStatVars['thdick'] = 'slim';
                      if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 11) {
                        (s as any).npcStatVars['thdick'] = 'well proportioned';
                      } else {
                        (s as any).npcStatVars['thdick'] = 'thicker than average';
                        if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 13) {
                          (s as any).npcStatVars['thdick'] = 'thick';
                        } else {
                          (s as any).npcStatVars['thdick'] = 'massive';
                          (s as any).npcStatVars['thdick'] = 'monstrous';
                        }
                        if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 0) {
                          if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'skinny') {
                            (s as any).npcStatVars['dick_girth'] = 7;
                          } else {
                            (s as any).npcStatVars['dick_girth'] = 10;
                            if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'well proportioned') {
                              (s as any).npcStatVars['dick_girth'] = 11;
                            } else {
                              (s as any).npcStatVars['dick_girth'] = 12;
                              if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'thick') {
                                (s as any).npcStatVars['dick_girth'] = 13;
                              } else {
                                (s as any).npcStatVars['dick_girth'] = 14;
                                if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'monstrous') {
                                  (s as any).npcStatVars['dick_girth'] = 15;
                                }
                              }
                              (s as any).npcStatVars['thdick_pref'] = 0;
                              if (((s as any).npcStatVars ?? 0)?.['dick_class'] === ''  ||  ((s as any).npcStatVars ?? 0)?.['dick_desc'] === '') {
                                if (((s as any).npcStatVars ?? 0)?.['dick_length'] <= 9) {
                                  (s as any).npcStatVars['dick_class'] = 'short';
                                  if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 9) {
                                    (s as any).npcStatVars['dick_desc'] = 'tiny';
                                  } else {
                                    (s as any).npcStatVars['dick_desc'] = 'short';
                                    (s as any).npcStatVars['dick_desc'] = 'chode';
                                  }
                                } else {
                                  (s as any).npcStatVars['dick_class'] = 'average';
                                  if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 10) {
                                    (s as any).npcStatVars['dick_desc'] = 'skinny';
                                  } else {
                                    (s as any).npcStatVars['dick_desc'] = 'normal';
                                    (s as any).npcStatVars['dick_desc'] = 'thick';
                                  }
                                  if (((s as any).npcStatVars ?? 0)?.['dick_length'] <= 19) {
                                    (s as any).npcStatVars['dick_class'] = 'big';
                                    if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 11) {
                                      (s as any).npcStatVars['dick_desc'] = 'long';
                                    } else {
                                      (s as any).npcStatVars['dick_desc'] = 'huge';
                                      (s as any).npcStatVars['dick_desc'] = 'enormous';
                                    }
                                  } else {
                                    (s as any).npcStatVars['dick_class'] = 'extra_big';
                                    if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 12) {
                                      (s as any).npcStatVars['dick_desc'] = 'lengthy';
                                    } else {
                                      (s as any).npcStatVars['dick_desc'] = 'gigantic';
                                      (s as any).npcStatVars['dick_desc'] = 'monstrous';
                                    }
                                  }
                                }
                                (s as any).npcStatVars['dick_desc_pref'] = 0;
                                if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'cashier_supermarket') {
                                  (s as any).npcStatVars['work'] = 'a cashier at a generic supermarket';
                                } else {
                                  (s as any).npcStatVars['work'] = 'a cashier at a liquor store';
                                  if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'cashier_coffee') {
                                    (s as any).npcStatVars['work'] = 'a cashier at a coffee shop';
                                  } else {
                                    (s as any).npcStatVars['work'] = 'a barista at a coffee shop';
                                    if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'fast_food') {
                                      (s as any).npcStatVars['work'] = 'a fast-food worker at a burger-chain';
                                    } else {
                                      (s as any).npcStatVars['work'] = 'a cab driver in the city';
                                      if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'masseuse') {
                                        (s as any).npcStatVars['work'] = 'a masseuse in the city';
                                      } else {
                                        (s as any).npcStatVars['work'] = 'a masseuse in the city';
                                        if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'factory') {
                                          (s as any).npcStatVars['work'] = 'a worker at the textile factory';
                                        } else {
                                          (s as any).npcStatVars['work'] = 'a bartender';
                                          if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'mechanic') {
                                            (s as any).npcStatVars['work'] = 'a mechanic';
                                          } else {
                                            (s as any).npcStatVars['work'] = 'a line cook';
                                            if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'waiter') {
                                              (s as any).npcStatVars['work'] = 'a waiter at a restaurant downtown';
                                            } else {
                                              (s as any).npcStatVars['work'] = 'a personal trainer at the gym';
                                              if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'programmer') {
                                                (s as any).npcStatVars['work'] = 'a programmer';
                                              } else {
                                                if (((s as any).npc_criminal_open ?? 0) === 1) {
                                                  (s as any).npcStatVars['work'] = 'a pimp';
                                                }
                                                if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'drug_dealer') {
                                                  if (((s as any).npc_criminal_open ?? 0) === 1) {
                                                    (s as any).npcStatVars['work'] = 'a drug dealer';
                                                  } else {
                                                    (s as any).npcStatVars['work'] = 'a pharmacist';
                                                  }
                                                } else {
                                                  if (((s as any).npc_criminal_open ?? 0) === 1) {
                                                    (s as any).npcStatVars['work'] = 'an enforcer for a gang';
                                                  } else {
                                                    (s as any).npcStatVars['work'] = 'a fixer';
                                                  }
                                                  if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'thief') {
                                                    if (((s as any).npc_criminal_open ?? 0) === 1) {
                                                      (s as any).npcStatVars['work'] = 'a thief';
                                                    } else {
                                                      (s as any).npcStatVars['work'] = 'a salesman';
                                                    }
                                                  } else {
                                                    (s as any).npcStatVars['work'] = 'a CEO of a car import business';
                                                    if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'lawyer') {
                                                      (s as any).npcStatVars['work'] = 'a partner at a lawfirm';
                                                    } else {
                                                      (s as any).npcStatVars['work'] = 'an investment banker';
                                                    }
                                                    if (((s as any).npcStatVars ?? 0)?.['relation'] === '') {
                                                      (s as any).npcStatVars['relat'] = 'stranger';
                                                    } else {
                                                      (s as any).npcStatVars['relat'] = 'daddy';
                                                      if (((s as any).npcStatVars ?? 0)?.['relation'] === 'ex-sugar_daddy') {
                                                        (s as any).npcStatVars['relat'] = 'ex-daddy';
                                                      } else {
                                                        (s as any).npcStatVars['relat'] = ((s as any).npcStatVars ?? 0)?.['relation'];
                                                      }
                                                      (s as any).npcStat_i = qspUntranslated(s, "instr('abcdefghijklmnopqrstuvwxyz', ARGS[1])", { location: "npcStat" });
                                                      if (((s as any).locArgs?.[1] ?? 0) !== ''  &&  ((s as any).npcStat_i ?? 0) > 0) {
                                                        // TODO-QSP: dynamic "
                                                        // TODO-QSP: npcStatCalled<<npcStat_i>>    = daystart
                                                        // TODO-QSP: $npcID<<npcStat_i>>        = $npclastcalled
                                                        // TODO-QSP: npcInanimate<<npcStat_i>>    = npcStatVars['inanimate']
                                                        // TODO-QSP: $npcdesc<<npcStat_i>>      = $npcStatVars['name']
                                                        // TODO-QSP: dick_length<<npcStat_i>>    =  npcStatVars['dick_length']
                                                        // TODO-QSP: dick_width<<npcStat_i>>      =  npcStatVars['dick_girth']
                                                        // TODO-QSP: npcSexskill<<npcStat_i>>    =  npcStatVars['sexskill']
                                                        // TODO-QSP: npcSpermPot<<npcStat_i>>    = npcStatVars['spermpot']
                                                        // TODO-QSP: npcSpermVol<<npcStat_i>>    = npcStatVars['spermvol']
                                                        // TODO-QSP: $boy<<npcStat_i>>        = $npcID<<npcStat_i>>
                                                        // TODO-QSP: $boydesc<<npcStat_i>>      = $npcdesc<<npcStat_i>>
                                                        // TODO-QSP: dick<<npcStat_i>>        =  dick_length<<npcStat_i>>
                                                        if (((s as any).npcSexskill ?? 0)((s as any).npcStat_i ?? 0) > 2) {
                                                          // TODO-QSP: silavag<<npcStat_i>>    =  max(0, min(npcSexskill<<npcStat_i>> / 34, 2))
                                                        } else {
                                                          // TODO-QSP: silavag<<npcStat_i>>    =  npcSexskill<<npcStat_i>>
                                                        }
                                                        // TODO-QSP: $dick_girth<<npcStat_i>>    = $npcStatVars['thdick']
                                                        // TODO-QSP: $dick_girth_pref<<npcStat_i>>  = $npcStatVars['thdick_pref']
                                                        // TODO-QSP: $dick_class<<npcStat_i>>    = $npcStatVars['dick_class']
                                                        // TODO-QSP: $dick_desc<<npcStat_i>>      = $npcStatVars['dick_desc']
                                                        // TODO-QSP: $dick_desc_pref<<npcStat_i>>  = $npcStatVars['dick_desc_pref']
                                                        // TODO-QSP: npcAge<<npcStat_i>>        =  npcStatVars['age']
                                                        // TODO-QSP: npcGender<<npcStat_i>>      =  npcStatVars['gender']
                                                        // TODO-QSP: npcApprnc<<npcStat_i>>      =  npcStatVars['apprnc']
                                                        // TODO-QSP: npcHotcat<<npcStat_i>>      =  npcStatVars['hotcat']
                                                        // TODO-QSP: $npcHair<<npcStat_i>>      = $npcStatVars['hair']
                                                        // TODO-QSP: $npcEyes<<npcStat_i>>      = $npcStatVars['eyes']
                                                        // TODO-QSP: $npcClo<<npcStat_i>>      = $npcStatVars['outfit']
                                                        // TODO-QSP: $npcWork<<npcStat_i>>      = $npcStatVars['work']
                                                        // TODO-QSP: $npcHeight<<npcStat_i>>      = $npcStatVars['height_desc']
                                                        // TODO-QSP: $npcHeight_pref<<npcStat_i>>  = $npcStatVars['height_desc_pref']
                                                        // TODO-QSP: $npcBuild<<npcStat_i>>      = $npcStatVars['build_desc']
                                                        // TODO-QSP: $npcBuild_pref<<npcStat_i>>    = $npcStatVars['build_desc_pref']
                                                        // TODO-QSP: $npcRelat<<npcStat_i>>      = $npcStatVars['relat']
                                                        // TODO-QSP: npcAttraction<<npcStat_i>>    =  npcStatVars['attraction']
                                                        // TODO-QSP: npcRelHotcat<<npcStat_i>>    =  npcStatVars['rel_hotcat']
                                                        // TODO-QSP: $npcLikes<<npcStat_i>>      = $npcStatVars['likes']
                                                        // TODO-QSP: $npcDislikes<<npcStat_i>>    = $npcStatVars['dislikes']
                                                        // TODO-QSP: $npcCondom<<npcStat_i>>      = $npcStatVars['condom']
                                                        // TODO-QSP: $xe<<npcStat_i>>        = $npcStatVars['xe']
                                                        // TODO-QSP: $xec<<npcStat_i>>        = $npcStatVars['xec']
                                                        // TODO-QSP: $xem<<npcStat_i>>        = $npcStatVars['xem']
                                                        // TODO-QSP: $xemc<<npcStat_i>>        = $npcStatVars['xemc']
                                                        // TODO-QSP: $xyr<<npcStat_i>>        = $npcStatVars['xyr']
                                                        // TODO-QSP: $xyrc<<npcStat_i>>        = $npcStatVars['xyrc']
                                                        // TODO-QSP: $xyrs<<npcStat_i>>        = $npcStatVars['xyrs']
                                                        // TODO-QSP: $xyrsc<<npcStat_i>>        = $npcStatVars['xyrsc']
                                                        // TODO-QSP: $xemself<<npcStat_i>>      = $npcStatVars['xemself']
                                                        // TODO-QSP: $xemselfc<<npcStat_i>>      = $npcStatVars['xemselfc']
                                                        // TODO-QSP: $person<<npcStat_i>>      = $npcStatVars['person']
                                                        // TODO-QSP: $personc<<npcStat_i>>      = $npcStatVars['personc']
                                                        // TODO-QSP: "
                                                      } else {
                                                        (s as any).npcStat_i = ((((s as any).locArgs?.[1] ?? 0) !== ''  &&  ((s as any).isnum ?? 0)(((s as any).locArgs?.[1] ?? 0))) ? (qspUntranslated(s, "val(ARGS[1])", { location: "npcStat" })) : (qspUntranslated(s, "ARGS[1]", { location: "npcStat" })));
                                                        (s as any).npcStatcalled[String((s as any).npcStat_i ?? 0)] = ((s as any).daystart ?? 0);
                                                        // TODO-QSP: $npcID[npcStat_i]      = $npclastcalled
                                                        (s as any).npcInanimate[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['inanimate'];
                                                        // TODO-QSP: $npcdesc[npcStat_i]      = $npcStatVars['name']
                                                        (s as any).dick_length[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['dick_length'];
                                                        (s as any).dick_width[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['dick_girth'];
                                                        (s as any).npcSexskill[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['sexskill'];
                                                        (s as any).npcSpermPot[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['spermpot'];
                                                        (s as any).npcSpermVol[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['spermvol'];
                                                        // TODO-QSP: $boy[npcStat_i]        = $npcID[npcStat_i]
                                                        // TODO-QSP: $boydesc[npcStat_i]      = $npcdesc[npcStat_i]
                                                        (s as any).dick[String((s as any).npcStat_i ?? 0)] = ((s as any).dick_length ?? 0)?.[String((s as any).npcStat_i ?? 0)];
                                                        if (((s as any).npcSexskill ?? 0)?.[String((s as any).npcStat_i ?? 0)] > 2) {
                                                          (s as any).silavag[String((s as any).npcStat_i ?? 0)] = ((s as any).max ?? 0)(0, ((s as any).min ?? 0)(((s as any).npcSexskill ?? 0)?.[String((s as any).npcStat_i ?? 0)] / 34, 2));
                                                        } else {
                                                          (s as any).silavag[String((s as any).npcStat_i ?? 0)] = ((s as any).npcSexskill ?? 0)?.[String((s as any).npcStat_i ?? 0)];
                                                        }
                                                        // TODO-QSP: $dick_girth[npcStat_i]    = $npcStatVars['thdick']
                                                        // TODO-QSP: $dick_girth_pref[npcStat_i]  = $npcStatVars['thdick_pref']
                                                        // TODO-QSP: $dick_class[npcStat_i]    = $npcStatVars['dick_class']
                                                        // TODO-QSP: $dick_desc[npcStat_i]    = $npcStatVars['dick_desc']
                                                        // TODO-QSP: $dick_desc_pref[npcStat_i]  = $npcStatVars['dick_desc_pref']
                                                        (s as any).npcAge[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['age'];
                                                        (s as any).npcGender[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['gender'];
                                                        (s as any).npcApprnc[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['apprnc'];
                                                        (s as any).npcHotcat[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['hotcat'];
                                                        // TODO-QSP: $npcHair[npcStat_i]      = $npcStatVars['hair']
                                                        // TODO-QSP: $npcEyes[npcStat_i]      = $npcStatVars['eyes']
                                                        // TODO-QSP: $npcClo[npcStat_i]      = $npcStatVars['outfit']
                                                        // TODO-QSP: $npcWork[npcStat_i]      = $npcStatVars['work']
                                                        // TODO-QSP: $npcHeight[npcStat_i]    = $npcStatVars['height_desc']
                                                        // TODO-QSP: $npcHeight_pref[npcStat_i]  = $npcStatVars['height_desc_pref']
                                                        // TODO-QSP: $npcBuild[npcStat_i]    = $npcStatVars['build_desc']
                                                        // TODO-QSP: $npcBuild_pref[npcStat_i]  = $npcStatVars['build_desc_pref']
                                                        // TODO-QSP: $npcRelat[npcStat_i]    = $npcStatVars['relat']
                                                        (s as any).npcAttraction[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['attraction'];
                                                        (s as any).npcRelHotcat[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['rel_hotcat'];
                                                        // TODO-QSP: $npcLikes[npcStat_i]    = $npcStatVars['likes']
                                                        // TODO-QSP: $npcDislikes[npcStat_i]    = $npcStatVars['dislikes']
                                                        // TODO-QSP: $npcCondom[npcStat_i]    = $npcStatVars['condom']
                                                        // TODO-QSP: $xe[npcStat_i]        = $npcStatVars['xe']
                                                        // TODO-QSP: $xec[npcStat_i]        = $npcStatVars['xec']
                                                        // TODO-QSP: $xem[npcStat_i]        = $npcStatVars['xem']
                                                        // TODO-QSP: $xemc[npcStat_i]      = $npcStatVars['xemc']
                                                        // TODO-QSP: $xyr[npcStat_i]        = $npcStatVars['xyr']
                                                        // TODO-QSP: $xyrc[npcStat_i]      = $npcStatVars['xyrc']
                                                        // TODO-QSP: $xyrs[npcStat_i]      = $npcStatVars['xyrs']
                                                        // TODO-QSP: $xyrsc[npcStat_i]      = $npcStatVars['xyrsc']
                                                        // TODO-QSP: $xemself[npcStat_i]      = $npcStatVars['xemself']
                                                        // TODO-QSP: $xemselfc[npcStat_i]    = $npcStatVars['xemselfc']
                                                        // TODO-QSP: $person[npcStat_i]      = $npcStatVars['person']
                                                        // TODO-QSP: $personc[npcStat_i]      = $npcStatVars['personc']
                                                      }
                                                      qspCall(s, 'boy_updater', '');
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
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const npcStat: LocationDef = {
  name: 'npcStat',
  region: 'other',
  enter: enter,
};
