import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') > 0)  ||  String((s as any).locArgs?.[0] ?? '') !== ''  &&  !isNaN(String((s as any).locArgs?.[0] ?? '')) && String((s as any).locArgs?.[0] ?? '') !== '') {
    (s as any).npclastcalledn = ((String((s as any).locArgs?.[0] ?? '') !== ''  &&  !isNaN(String((s as any).locArgs?.[0] ?? '')) && String((s as any).locArgs?.[0] ?? '') !== '') ? (parseFloat(((s as any).locArgs?.[0] ?? 0))) : (((s as any).locArgs?.[0] ?? 0)));
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['tempID'] = 'A' + ((s as any).npclastcalledn ?? 0);
  } else {
    if ((String(((s as any).locArgs?.[0] ?? 0)).length) > 1  &&  !isNaN((String(((s as any).locArgs?.[0] ?? 0)).slice((2)-1))) && (String(((s as any).locArgs?.[0] ?? 0)).slice((2)-1)) !== '') {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['tempID'] = (String(((s as any).locArgs?.[0] ?? 0)).toUpperCase());
    } else {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['tempID'] = 'D' + (Math.floor(Math.random() * 8) + 0);
    }
  }
  (s as any).npclastcalled = ((s as any).npcStatVars ?? 0)?.['tempID'];
  (s as any).npclastcalledn = parseFloat((String(((s as any).npcStatVars ?? 0)?.['tempID']).slice((2)-1)));
  if (((String('ABCDM').indexOf(String((String(((s as any).npcStatVars ?? 0)?.['tempID']).slice((1)-1, ((1)-1)+(1)))))) + 1) > 0) {
    if (!isNaN((((s as any).npc_usedname ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0)) && (((s as any).npc_usedname ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0) !== ''  ||  ((s as any).npc_usedname ?? 0)?.[String((s as any).npclastcalled ?? 0)] === '') {
      // TODO-QSP: $npc_usedname[$npclastcalled] = $npc_firstname[$npclastcalled]
    }
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['gender'] = (((s as any).npc_gender ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['inanimate'] = (((s as any).npc_isinanimate ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = (((s as any).npc_usedname ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = (((s as any).npc_dick ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = (((s as any).npc_girth ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick'] = (((s as any).npc_thdick ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_class'] = (((s as any).npc_dick_class ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = (((s as any).npc_dick_desc ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (((s as any).npc_spermpot ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (((s as any).npc_spermvol ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['height_desc'] = (((s as any).npc_height_desc ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['height_desc_pref'] = (((s as any).npc_height_desc_pref ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = (((s as any).npc_build_desc ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc_pref'] = (((s as any).npc_build_desc_pref ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dob'] = (((s as any).npc_dob ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['apprnc'] = (((s as any).npc_apprnc ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['hotcat'] = (((s as any).npc_hotcat ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (((s as any).npc_sexskill ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['height'] = (((s as any).npc_height ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['weight'] = (((s as any).npc_weight ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['haircol'] = (((s as any).npc_haircol ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['eyecol'] = (((s as any).npc_eyecol ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['outfit'] = (((s as any).npc_outfit ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['occupation'] = (((s as any).npc_occupation ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['relation'] = (((s as any).npc_rel_type ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    qspCall(s, 'set_npc_attraction', '$npclastcalled', (-1));
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['attraction'] = (((s as any).npc_attraction ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['rel_hotcat'] = (((s as any).npc_rel_hotcat ?? 0)?.[String((s as any).npclastcalled ?? 0)] ?? 0);
  } else {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['gender'] = 0;
    if ((!((s as any).npclastcalledn ?? 0))) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = 'a tiny sized';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = 5;
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 8;
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (Math.floor(Math.random() * 21) + 10);
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (Math.floor(Math.random() * 7501) + 4000);
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (Math.floor(Math.random() * 41) + 5);
    } else {
      if (((s as any).npclastcalledn ?? 0) === 1) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = 'a small sized';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = 10;
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 9;
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (Math.floor(Math.random() * 26) + 15);
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (Math.floor(Math.random() * 6501) + 6000);
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (Math.floor(Math.random() * 41) + 15);
      } else {
        if (((s as any).npclastcalledn ?? 0) === 2) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = 'a medium sized';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = 15;
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 10;
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (Math.floor(Math.random() * 6001) + 7500);
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (Math.floor(Math.random() * 42) + 22);
        } else {
          if (((s as any).npclastcalledn ?? 0) === 3) {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = 'a large sized';
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = 20;
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 11;
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (Math.floor(Math.random() * 36) + 25);
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (Math.floor(Math.random() * 6001) + 8500);
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (Math.floor(Math.random() * 42) + 27);
          } else {
            if (((s as any).npclastcalledn ?? 0) === 4) {
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = 'a huge sized';
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = 25;
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 12;
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (Math.floor(Math.random() * 41) + 30);
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (Math.floor(Math.random() * 6001) + 8500);
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (Math.floor(Math.random() * 42) + 27);
            } else {
              if (((s as any).npclastcalledn ?? 0) === 5) {
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = 'a giant sized';
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = 30;
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 13;
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (Math.floor(Math.random() * 56) + 25);
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (Math.floor(Math.random() * 6001) + 9000);
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (Math.floor(Math.random() * 41) + 30);
              } else {
                if (((s as any).npclastcalledn ?? 0) === 6) {
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = 'a humongous sized';
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = 35;
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 14;
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (Math.floor(Math.random() * 71) + 20);
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (Math.floor(Math.random() * 6001) + 9000);
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (Math.floor(Math.random() * 41) + 30);
                } else {
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['name'] = 'a horse sized';
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_length'] = 40;
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 15;
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (Math.floor(Math.random() * 86) + 15);
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (Math.floor(Math.random() * 6001) + 9500);
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (Math.floor(Math.random() * 42) + 32);
                }
              }
            }
          }
        }
      }
    }
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['height'] = (Math.floor(Math.random() * 21) + 160);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['weight'] = (Math.floor(Math.random() * 46) + 45);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['haircol'] = (Math.floor(Math.random() * 4) + 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['eyecol'] = (Math.floor(Math.random() * 4) + 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['occupation'] = '';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['relation'] = 'stranger';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['age'] = (Math.floor(Math.random() * 18) + 18);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['apprnc'] = (Math.floor(Math.random() * (100 - 0 + 1)) + (0));
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['hotcat'] = qspFunc(s, 'AppearanceSystem', 'ConvertToHotcat', ((s as any).npcStatVars ?? 0)?.['apprnc']);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['attraction'] = ((s as any).pcs_apprnc ?? 0);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['rel_hotcat'] = ((s as any).pcs_hotcat ?? 0);
  }
  if (((s as any).npcStatVars ?? 0)?.['inanimate']) {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['sexskill'] = (((s as any).stat ?? {})?.['mast'] ?? 0) / 3;
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (-1);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (-1);
  }
  if (((s as any).npcStatVars ?? 0)?.['spermpot'] === 0) {
    if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = 10000;
    } else {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermpot'] = (-1);
    }
  }
  if (((s as any).npcStatVars ?? 0)?.['spermvol'] === 0) {
    if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = 40;
    } else {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['spermvol'] = (-1);
    }
  }
  if (((String(';none;normal;extra thin;ribbed;broken;sabotaged;sabotaged_other;').indexOf(String(';' + (String((s as any).locArgs?.[2] ?? '')) + ';'))) + 1) > 0) {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['condom'] = ((s as any).locArgs?.[2] ?? 0);
  } else {
    if (((s as any).preziktype ?? 0) === 0  &&  (((s as any).mc_inventory ?? 0)?.['equipped_condoms']+((s as any).mc_inventory ?? 0)?.['normal_condoms']) > 0) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['condom'] = 'normal';
    } else {
      if (((s as any).preziktype ?? 0) === 2  &&  (((s as any).mc_inventory ?? 0)?.['equipped_condoms']+((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']) > 0) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['condom'] = 'sabotaged';
      } else {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['condom'] = 'none';
      }
    }
  }
  if (((s as any).npcStatVars ?? 0)?.['dob'] !== 0) {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['bday'] = ((((s as any).npcStatVars ?? {})?.['dob'] ?? 0) % 100);
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['bmonth'] = ((((s as any).npcStatVars ?? {})?.['dob'] ?? 0) / 100) % 100;
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['byear'] = (((s as any).npcStatVars ?? {})?.['dob'] ?? 0) / 10000;
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['age'] = (((s as any).npcStatVars ?? {})?.['byear'] ?? 0) - ((s as any).year ?? 0);
    if (((s as any).npcStatVars ?? 0)?.['bmonth'] < ((s as any).month ?? 0)) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['age'] = ((s as any).npcStatVars['age'] ?? 0) + (1);
    } else {
      if (((s as any).npcStatVars ?? 0)?.['bmonth'] === ((s as any).month ?? 0)  &&  ((s as any).npcStatVars ?? 0)?.['bday'] <= ((s as any).day ?? 0)) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['age'] = ((s as any).npcStatVars['age'] ?? 0) + (1);
      }
    }
  }
  if (((s as any).npcStatVars ?? 0)?.['inanimate']) {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xe'] = 'it';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xec'] = 'It';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xem'] = 'it';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemc'] = 'It';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyr'] = 'its';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrc'] = 'Its';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrs'] = 'its';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrsc'] = 'Its';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemself'] = 'itself';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemselfc'] = 'Itself';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['person'] = 'object';
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['personc'] = 'Object';
  } else {
    if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xe'] = 'he';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xec'] = 'He';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xem'] = 'him';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemc'] = 'Him';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyr'] = 'his';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrc'] = 'His';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrs'] = 'his';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrsc'] = 'His';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemself'] = 'himself';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemselfc'] = 'Himself';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['person'] = 'man';
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['personc'] = 'Man';
    } else {
      if (((s as any).npcStatVars ?? 0)?.['gender'] === 1) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xe'] = 'she';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xec'] = 'She';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xem'] = 'her';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemc'] = 'Her';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyr'] = 'her';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrc'] = 'Her';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrs'] = 'hers';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrsc'] = 'Hers';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemself'] = 'herself';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemselfc'] = 'Herself';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['person'] = 'woman';
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['personc'] = 'Woman';
      } else {
        if (1) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xe'] = 'they';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xec'] = 'They';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xem'] = 'them';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemc'] = 'Them';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyr'] = 'their';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrc'] = 'Their';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrs'] = 'theirs';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrsc'] = 'Theirs';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemself'] = 'themself';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemselfc'] = 'Themself';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['person'] = 'person';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['personc'] = 'Person';
        } else {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xe'] = 'xe';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xec'] = 'Xe';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xem'] = 'xem';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemc'] = 'Xem';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyr'] = 'xyr';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrc'] = 'Xyr';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrs'] = 'xyrs';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xyrsc'] = 'Xyrs';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemself'] = 'xemself';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['xemselfc'] = 'Xemself';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['person'] = 'person';
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['personc'] = 'Person';
        }
      }
    }
  }
  if (((s as any).npcStatVars ?? 0)?.['haircol'] === 0) {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['hair'] = 'black';
  } else {
    if (((s as any).npcStatVars ?? 0)?.['haircol'] === 1) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['hair'] = ((((s as any).npcStatVars ?? 0)?.['gender'] === 0) ? ('brown') : ('brunette'));
    } else {
      if (((s as any).npcStatVars ?? 0)?.['haircol'] === 2) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['hair'] = 'red';
      } else {
        if (((s as any).npcStatVars ?? 0)?.['haircol'] === 3) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['hair'] = ((((s as any).npcStatVars ?? 0)?.['gender'] === 0) ? ('blond') : ('blonde'));
        } else {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['hair'] = 'dyed';
        }
      }
    }
  }
  if (((s as any).npcStatVars ?? 0)?.['eyecol'] === 0) {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['eyes'] = 'brown';
  } else {
    if (((s as any).npcStatVars ?? 0)?.['eyecol'] === 1) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['eyes'] = 'grey';
    } else {
      if (((s as any).npcStatVars ?? 0)?.['eyecol'] === 2) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['eyes'] = 'green';
      } else {
        if (((s as any).npcStatVars ?? 0)?.['eyecol'] === 3) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['eyes'] = 'blue';
        } else {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['eyes'] = 'attractive';
        }
      }
    }
  }
  if (((s as any).npcStatVars ?? 0)?.['outfit'] === '') {
    (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
    if ((!((s as any).temp_rand ?? 0))) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['outfit'] = 'a tracksuit';
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['outfit'] = 'jeans and a ' + ((((s as any).npcStatVars ?? 0)?.['gender'] === 0) ? ('sweater') : ('blouse'));
      } else {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['outfit'] = 'an expensive ' + ((((s as any).npcStatVars ?? 0)?.['gender'] === 0) ? ('suit') : ('dress'));
      }
    }
  }
  ((s as any).temp_statVars = (s as any).temp_statVars ?? {})['i_max'] = 0;
  if (((s as any).temp_statVars ?? 0)?.['i_max'] > 0) {
    ((s as any).temp_statVars = (s as any).temp_statVars ?? {})['i'] = 0;
    // TODO-QSP: :pref_loop
    (s as any).temp_trait = qspUntranslated(s, "npc_stat_pref_traits[temp_statVars['i']]", { location: "npcStat" });
    if (qspFunc(s, 'pcs_has_attr', ((s as any).temp_trait ?? 0))) {
      if (((s as any).npc_stat_pref_values ?? 0)?.[String((s as any).temp_trait ?? 0)] > 0) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['likes'] = ((s as any).npcStatVars['likes'] ?? 0) + (';' + ((s as any).temp_trait ?? 0));
      } else {
        if (((s as any).npc_stat_pref_values ?? 0)?.[String((s as any).temp_trait ?? 0)] < 0) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dislikes'] = ((s as any).npcStatVars['dislikes'] ?? 0) + (';' + ((s as any).temp_trait ?? 0));
        }
      }
    }
    ((s as any).temp_statVars = (s as any).temp_statVars ?? {})['i'] = ((s as any).temp_statVars['i'] ?? 0) + (1);
    if (((s as any).temp_statVars ?? 0)?.['i'] < ((s as any).temp_statVars ?? 0)?.['i_max']) {
      // TODO-QSP: jump 'pref_loop'
    }
    if ((String(((s as any).npcStatVars ?? 0)?.['likes']).length) > 0) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['likes'] = ((s as any).npcStatVars['likes'] ?? 0) + (';');
    }
    if ((String(((s as any).npcStatVars ?? 0)?.['dislikes']).length) > 0) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dislikes'] = ((s as any).npcStatVars['dislikes'] ?? 0) + (';');
    }
  }
  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['pref_func'] = '$result = iif(instr(\'aeiou\', mid($ARGS[0], 1, 1)) > 0, \'an \', \'a \') + $ARGS[0]';
  if (((s as any).npcStatVars ?? 0)?.['height'] === 0) {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['bmi'] = 200;
  } else {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['bmi'] = 100000 * (((s as any).npcStatVars ?? {})?.['weight'] ?? 0) / ((((s as any).npcStatVars ?? {})?.['height'] ?? 0) * (((s as any).npcStatVars ?? {})?.['height'] ?? 0));
  }
  if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['av_height'] = 175;
  } else {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['av_height'] = 165;
  }
  if (((s as any).npcStatVars ?? 0)?.['height_desc'] === ''  ||  ((s as any).npcStatVars ?? 0)?.['height_desc_pref'] === '') {
    if (((s as any).npcStatVars ?? 0)?.['height'] < ((s as any).npcStatVars ?? 0)?.['av_height'] - 5) {
      (s as any).temp_body = 1;
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['height_desc'] = 'short';
    } else {
      if (((s as any).npcStatVars ?? 0)?.['height'] <= ((s as any).npcStatVars ?? 0)?.['av_height'] + 5) {
        (s as any).temp_body = 2;
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['height_desc'] = 'average';
      } else {
        (s as any).temp_body = 3;
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['height_desc'] = 'tall';
      }
    }
  }
  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['height_desc_pref'] = 0;
  if (((s as any).npcStatVars ?? 0)?.['build_desc'] === ''  ||  ((s as any).npcStatVars ?? 0)?.['build_desc_pref'] === '') {
    if (((s as any).npcStatVars ?? 0)?.['gender'] === 0) {
      if (((s as any).npcStatVars ?? 0)?.['bmi'] < 190) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'thin';
      } else {
        if (((s as any).npcStatVars ?? 0)?.['bmi'] < 225) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'athletic';
        } else {
          if (((s as any).npcStatVars ?? 0)?.['bmi'] < 250) {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'chunky';
          } else {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'fat';
          }
        }
      }
    } else {
      if (((s as any).npcStatVars ?? 0)?.['bmi'] < 190) {
        if (((s as any).temp_body ?? 0) === 1) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'petite';
        } else {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'slender';
        }
      } else {
        if (((s as any).npcStatVars ?? 0)?.['bmi'] < 225) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'toned';
        } else {
          if (((s as any).npcStatVars ?? 0)?.['bmi'] < 250) {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'average';
          } else {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc'] = 'chubby';
          }
        }
      }
    }
  }
  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['build_desc_pref'] = 0;
  if (((s as any).npcStatVars ?? 0)?.['thdick'] === '') {
    if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 9) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick'] = 'skinny';
    } else {
      if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 10) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick'] = 'slim';
      } else {
        if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 11) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick'] = 'well proportioned';
        } else {
          if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 12) {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick'] = 'thicker than average';
          } else {
            if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 13) {
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick'] = 'thick';
            } else {
              if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 14) {
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick'] = 'massive';
              } else {
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick'] = 'monstrous';
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).npcStatVars ?? 0)?.['dick_girth'] === 0) {
      if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'skinny') {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 7;
      } else {
        if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'slim') {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 10;
        } else {
          if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'well proportioned') {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 11;
          } else {
            if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'thicker than average') {
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 12;
            } else {
              if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'thick') {
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 13;
              } else {
                if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'massive') {
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 14;
                } else {
                  if (((s as any).npcStatVars ?? 0)?.['thdick'] === 'monstrous') {
                    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_girth'] = 15;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['thdick_pref'] = 0;
  if (((s as any).npcStatVars ?? 0)?.['dick_class'] === ''  ||  ((s as any).npcStatVars ?? 0)?.['dick_desc'] === '') {
    if (((s as any).npcStatVars ?? 0)?.['dick_length'] <= 9) {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_class'] = 'short';
      if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 9) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'tiny';
      } else {
        if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 11) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'short';
        } else {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'chode';
        }
      }
    } else {
      if (((s as any).npcStatVars ?? 0)?.['dick_length'] <= 14) {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_class'] = 'average';
        if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 10) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'skinny';
        } else {
          if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 12) {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'normal';
          } else {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'thick';
          }
        }
      } else {
        if (((s as any).npcStatVars ?? 0)?.['dick_length'] <= 19) {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_class'] = 'big';
          if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 11) {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'long';
          } else {
            if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 13) {
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'huge';
            } else {
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'enormous';
            }
          }
        } else {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_class'] = 'extra_big';
          if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 12) {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'lengthy';
          } else {
            if (((s as any).npcStatVars ?? 0)?.['dick_girth'] <= 14) {
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'gigantic';
            } else {
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc'] = 'monstrous';
            }
          }
        }
      }
    }
  }
  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['dick_desc_pref'] = 0;
  if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'cashier_supermarket') {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a cashier at a generic supermarket';
  } else {
    if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'cashier_liquor') {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a cashier at a liquor store';
    } else {
      if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'cashier_coffee') {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a cashier at a coffee shop';
      } else {
        if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'barista') {
          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a barista at a coffee shop';
        } else {
          if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'fast_food') {
            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a fast-food worker at a burger-chain';
          } else {
            if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'taxi_driver') {
              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a cab driver in the city';
            } else {
              if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'masseuse') {
                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a masseuse in the city';
              } else {
                if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'masseuse_sexual') {
                  ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a masseuse in the city';
                } else {
                  if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'factory') {
                    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a worker at the textile factory';
                  } else {
                    if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'bartender') {
                      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a bartender';
                    } else {
                      if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'mechanic') {
                        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a mechanic';
                      } else {
                        if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'line_cook') {
                          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a line cook';
                        } else {
                          if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'waiter') {
                            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a waiter at a restaurant downtown';
                          } else {
                            if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'personal_trainer') {
                              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a personal trainer at the gym';
                            } else {
                              if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'programmer') {
                                ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a programmer';
                              } else {
                                if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'pimp') {
                                  if (((s as any).npc_criminal_open ?? 0) === 1) {
                                    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a pimp';
                                  }
                                } else {
                                  if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'drug_dealer') {
                                    if (((s as any).npc_criminal_open ?? 0) === 1) {
                                      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a drug dealer';
                                    } else {
                                      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a pharmacist';
                                    }
                                  } else {
                                    if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'enforcer') {
                                      if (((s as any).npc_criminal_open ?? 0) === 1) {
                                        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'an enforcer for a gang';
                                      } else {
                                        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a fixer';
                                      }
                                    } else {
                                      if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'thief') {
                                        if (((s as any).npc_criminal_open ?? 0) === 1) {
                                          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a thief';
                                        } else {
                                          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a salesman';
                                        }
                                      } else {
                                        if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'businessman') {
                                          ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a CEO of a car import business';
                                        } else {
                                          if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'lawyer') {
                                            ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'a partner at a lawfirm';
                                          } else {
                                            if (((s as any).npcStatVars ?? 0)?.['occupation'] === 'investment_banker') {
                                              ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['work'] = 'an investment banker';
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
  if (((s as any).npcStatVars ?? 0)?.['relation'] === '') {
    ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['relat'] = 'stranger';
  } else {
    if (((s as any).npcStatVars ?? 0)?.['relation'] === 'sugar_daddy') {
      ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['relat'] = 'daddy';
    } else {
      if (((s as any).npcStatVars ?? 0)?.['relation'] === 'ex-sugar_daddy') {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['relat'] = 'ex-daddy';
      } else {
        ((s as any).npcStatVars = (s as any).npcStatVars ?? {})['relat'] = ((s as any).npcStatVars ?? 0)?.['relation'];
      }
    }
  }
  (s as any).npcStat_i = ((String('abcdefghijklmnopqrstuvwxyz').indexOf(String(((s as any).locArgs?.[1] ?? 0)))) + 1);
  if (String((s as any).locArgs?.[1] ?? '') !== ''  &&  ((s as any).npcStat_i ?? 0) > 0) {
  } else {
    (s as any).npcStat_i = ((String((s as any).locArgs?.[1] ?? '') !== ''  &&  !isNaN(String((s as any).locArgs?.[1] ?? '')) && String((s as any).locArgs?.[1] ?? '') !== '') ? (parseFloat(((s as any).locArgs?.[1] ?? 0))) : (((s as any).locArgs?.[1] ?? 0)));
    ((s as any).npcStatcalled = (s as any).npcStatcalled ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).daystart ?? 0);
    // TODO-QSP: $npcID[npcStat_i]      = $npclastcalled
    ((s as any).npcInanimate = (s as any).npcInanimate ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['inanimate'];
    // TODO-QSP: $npcdesc[npcStat_i]      = $npcStatVars['name']
    ((s as any).dick_length = (s as any).dick_length ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['dick_length'];
    ((s as any).dick_width = (s as any).dick_width ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['dick_girth'];
    ((s as any).npcSexskill = (s as any).npcSexskill ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['sexskill'];
    ((s as any).npcSpermPot = (s as any).npcSpermPot ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['spermpot'];
    ((s as any).npcSpermVol = (s as any).npcSpermVol ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['spermvol'];
    // TODO-QSP: $boy[npcStat_i]        = $npcID[npcStat_i]
    // TODO-QSP: $boydesc[npcStat_i]      = $npcdesc[npcStat_i]
    ((s as any).dick = (s as any).dick ?? {})[String((s as any).npcStat_i ?? 0)] = (((s as any).dick_length ?? 0)?.[String((s as any).npcStat_i ?? 0)] ?? 0);
    if (((s as any).npcSexskill ?? 0)?.[String((s as any).npcStat_i ?? 0)] > 2) {
      ((s as any).silavag = (s as any).silavag ?? {})[String((s as any).npcStat_i ?? 0)] = Math.max(0, Math.min((((s as any).npcSexskill ?? 0)?.[String((s as any).npcStat_i ?? 0)] ?? 0) / 34, 2));
    } else {
      ((s as any).silavag = (s as any).silavag ?? {})[String((s as any).npcStat_i ?? 0)] = (((s as any).npcSexskill ?? 0)?.[String((s as any).npcStat_i ?? 0)] ?? 0);
    }
    // TODO-QSP: $dick_girth[npcStat_i]    = $npcStatVars['thdick']
    // TODO-QSP: $dick_girth_pref[npcStat_i]  = $npcStatVars['thdick_pref']
    // TODO-QSP: $dick_class[npcStat_i]    = $npcStatVars['dick_class']
    // TODO-QSP: $dick_desc[npcStat_i]    = $npcStatVars['dick_desc']
    // TODO-QSP: $dick_desc_pref[npcStat_i]  = $npcStatVars['dick_desc_pref']
    ((s as any).npcAge = (s as any).npcAge ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['age'];
    ((s as any).npcGender = (s as any).npcGender ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['gender'];
    ((s as any).npcApprnc = (s as any).npcApprnc ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['apprnc'];
    ((s as any).npcHotcat = (s as any).npcHotcat ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['hotcat'];
    // TODO-QSP: $npcHair[npcStat_i]      = $npcStatVars['hair']
    // TODO-QSP: $npcEyes[npcStat_i]      = $npcStatVars['eyes']
    // TODO-QSP: $npcClo[npcStat_i]      = $npcStatVars['outfit']
    // TODO-QSP: $npcWork[npcStat_i]      = $npcStatVars['work']
    // TODO-QSP: $npcHeight[npcStat_i]    = $npcStatVars['height_desc']
    // TODO-QSP: $npcHeight_pref[npcStat_i]  = $npcStatVars['height_desc_pref']
    // TODO-QSP: $npcBuild[npcStat_i]    = $npcStatVars['build_desc']
    // TODO-QSP: $npcBuild_pref[npcStat_i]  = $npcStatVars['build_desc_pref']
    // TODO-QSP: $npcRelat[npcStat_i]    = $npcStatVars['relat']
    ((s as any).npcAttraction = (s as any).npcAttraction ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['attraction'];
    ((s as any).npcRelHotcat = (s as any).npcRelHotcat ?? {})[String((s as any).npcStat_i ?? 0)] = ((s as any).npcStatVars ?? 0)?.['rel_hotcat'];
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
  scene.build();
}

export const npcStat: LocationDef = {
  name: 'npcStat',
  region: 'other',
  enter: enter,
};
