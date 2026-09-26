import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_current_save_version = ((100 * ((s as any).version_major ?? 0) + ((s as any).version_minor ?? 0)) * 100 + ((s as any).version_revision ?? 0)) * 100 + ((s as any).version_patch ?? 0);
  if (((s as any).temp_current_save_version ?? 0) < 80402) {
    (s as any).pcs_girlfriends = 0;
    (s as any).i = 0;
    do {
      if (((s as any).loverGender ?? 0)?.[String((s as any).i ?? 0)] === 1) {
        (s as any).pcs_girlfriends = ((s as any).pcs_girlfriends ?? 0) + (1);
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      (s as any).i = undefined;
      if (((s as any).analorgasm ?? 0) > 0) {
        (s as any).orgasm_anal = ((s as any).orgasm_anal ?? 0) + (((s as any).analorgasm ?? 0));
      }
    } while (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length);
  }
  if (((s as any).temp_current_save_version ?? 0) < 80403) {
    if (((s as any).meynoldQW ?? 0) === 1  ||  ((s as any).meynoldQW ?? 0) === 2) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = ((s as any).meynoldQW ?? 0);
      (s as any).meynoldQW = undefined;
    }
    if (((s as any).katjaFirstKiss ?? 0) > 0  ||  ((s as any).KatjaOTN ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 3;
      (s as any).katjaFirstKiss = undefined;
      (s as any).KatjaOTN = undefined;
    }
    if (((s as any).katjaTanga ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['pantiesQWstage'] = ((s as any).katjaTanga ?? 0);
      (s as any).katjaTanga = undefined;
    }
    if (((s as any).katja_tanga_end ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['pantiesQWstage'] = 5;
      (s as any).katja_tanga_end = undefined;
    }
    if (((s as any).katjaSlut ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaSlut ?? 0);
      (s as any).katjaSlut = undefined;
    }
    if (((s as any).katjaHorny ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaHorny ?? 0);
      (s as any).katjaHorny = undefined;
    }
    if (((s as any).katjaSex ?? 0) === 1) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['park_sex'] = 1;
      (s as any).katjaSex = undefined;
    }
    if (((s as any).katjaSex ?? 0) === 2) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['park_sex'] = 2;
      (s as any).katjaSex = undefined;
    }
    if (((s as any).katjaSex ?? 0) > 2) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['park_sex'] = 3;
      (s as any).katjaSex = undefined;
    }
    if (((s as any).KatjaMastr ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['masturbates'] = ((s as any).KatjaMastr ?? 0);
      (s as any).KatjaMastr = undefined;
    }
    if (((s as any).KatjaThroat ?? 0) > 0) {
      ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).KatjaThroat ?? 0);
      (s as any).KatjaThroat = undefined;
    }
    if (((s as any).KatjaAnus ?? 0) > 0) {
      ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).KatjaAnus ?? 0);
      (s as any).KatjaAnus = undefined;
    }
    if (((s as any).KatjaOrgasm ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgasm_day'] = ((s as any).KatjaOrgasm ?? 0);
      (s as any).KatjaOrgasm = undefined;
    }
    if (((s as any).katjaMeynoldday ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['afterschool_hangout_day'] = ((s as any).katjaMeynoldday ?? 0);
      (s as any).katjaMeynoldday = undefined;
    }
    if (((s as any).tangaday ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['no_panties_day'] = ((s as any).tangaday ?? 0);
      (s as any).tangaday = undefined;
    }
    if (((s as any).KatjaKnowMastr ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_masterbation'] = 1;
      (s as any).KatjaKnowMastr = undefined;
    }
    if (((s as any).SelfFistingKnow ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_self_fisting'] = 1;
      (s as any).SelfFistingKnow = undefined;
    }
    if (((s as any).KatjaKnowBJ ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_BJ'] = 1;
      (s as any).KatjaKnowBJ = undefined;
    }
    if (((s as any).KatjaKnowSex ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_sex'] = 1;
      (s as any).KatjaKnowSex = undefined;
    }
    if (((s as any).KatjaKnowAnal ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_anal'] = 1;
      (s as any).KatjaKnowAnal = undefined;
    }
    if (((s as any).KatjaKnowKuni ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_cuni'] = 1;
      (s as any).KatjaKnowKuni = undefined;
    }
    if (((s as any).KatjaKnowPirsA ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_Pirced_tongue'] = 1;
      (s as any).KatjaKnowPirsA = undefined;
    }
    if (((s as any).katschoolsex ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['school_sex'] = 1;
      (s as any).katschoolsex = undefined;
    }
    if (((s as any).katja_disco_Foto ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['disco_Foto'] = 1;
      (s as any).katja_disco_Foto = undefined;
    }
    if (((s as any).meynoldQW ?? 0) === 3) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['drunk_help'] = 1;
      (s as any).meynoldQW = undefined;
    }
    if (((s as any).katja_disco_end ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['no_panties_at_disco'] = 1;
      (s as any).katja_disco_end = undefined;
    }
    if (((s as any).KatjaOhrenet ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['sex_in_the_park_comment'] = ((s as any).KatjaOhrenet ?? 0);
      (s as any).KatjaOhrenet = undefined;
    }
    if (((s as any).flag_start_parc ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['school_kiss'] = ((s as any).flag_start_parc ?? 0);
      (s as any).flag_start_parc = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80500) {
    if (((s as any).loc ?? 0) === 'dorm') {
      (s as any).loc = 'uni_dorm';
      (s as any).menu_loc = 'uni_dorm';
    }
    if (((s as any).loc ?? 0) === 'HotelWork') {
      (s as any).loc = 'hotel_work';
      (s as any).menu_loc = 'hotel_work';
    }
    if (((s as any).loc ?? 0) === 'ParChurch') {
      (s as any).loc = 'pav_church';
      (s as any).menu_loc = 'pav_church';
    }
    if (((s as any).loc ?? 0) === 'pav_train') {
      (s as any).loc = 'pav_market';
      (s as any).menu_loc = 'pav_market';
    }
    if (((s as any).loc ?? 0) === 'univer') {
      (s as any).loc = 'uni_admin';
      (s as any).menu_loc = 'uni_admin';
    }
    if (((s as any).loc ?? 0) === 'youplace') {
      (s as any).loc = 'city_mansion_entrance';
      (s as any).menu_loc = 'city_mansion_entrance';
    }
    if (((s as any).loc ?? 0) === 'ykamin') {
      (s as any).loc = 'city_mansion_residence_2';
      (s as any).loc_arg = 'ylounge';
      (s as any).menu_loc = 'city_mansion_residence_2';
      (s as any).menu_arg = 'ylounge';
    }
    if (((s as any).loc ?? 0) === 'ykuh') {
      (s as any).loc = 'city_mansion_residence_1';
      (s as any).loc_arg = 'ykitchen';
      (s as any).menu_loc = 'city_mansion_residence_1';
      (s as any).menu_arg = 'ykitchen';
    }
    if (((s as any).loc ?? 0) === 'ydet') {
      (s as any).loc = 'city_mansion_residence_2';
      (s as any).loc_arg = 'ynursery';
      (s as any).menu_loc = 'city_mansion_residence_2';
      (s as any).menu_arg = 'ynursery';
    }
    if (((s as any).loc ?? 0) === 'ybib') {
      (s as any).loc = 'city_mansion_residence_2';
      (s as any).loc_arg = 'ylibrary';
      (s as any).menu_loc = 'city_mansion_residence_2';
      (s as any).menu_arg = 'ylibrary';
    }
    if (((s as any).loc ?? 0) === 'ybedr') {
      (s as any).loc = 'city_mansion_residence_1';
      (s as any).loc_arg = 'ybedroom';
      (s as any).menu_loc = 'city_mansion_residence_1';
      (s as any).menu_arg = 'ybedroom';
    }
    if (((s as any).loc ?? 0) === 'ybass') {
      (s as any).loc = 'city_mansion_residence_3';
      (s as any).loc_arg = 'ypool';
      (s as any).menu_loc = 'city_mansion_residence_3';
      (s as any).menu_arg = 'ypool';
    }
    if (((s as any).loc ?? 0) === 'yban') {
      (s as any).loc = 'city_mansion_residence_3';
      (s as any).loc_arg = 'ysauna';
      (s as any).menu_loc = 'city_mansion_residence_3';
      (s as any).menu_arg = 'ysauna';
    }
    if (((s as any).loc ?? 0) === 'yvan') {
      (s as any).loc = 'city_mansion_residence_1';
      (s as any).loc_arg = 'ybathroom';
      (s as any).menu_loc = 'city_mansion_residence_1';
      (s as any).menu_arg = 'ybathroom';
    }
    if (((s as any).loc ?? 0) === 'ymans') {
      (s as any).loc = 'city_mansion_residence_1';
      (s as any).loc_arg = 'yfoyer';
      (s as any).menu_loc = 'city_mansion_residence_1';
      (s as any).menu_arg = 'yfoyer';
    }
    if (((s as any).loc ?? 0) === 'yzal') {
      (s as any).loc = 'city_mansion_residence_2';
      (s as any).loc_arg = 'yliving';
      (s as any).menu_loc = 'city_mansion_residence_2';
      (s as any).menu_arg = 'yliving';
    }
    if (((s as any).loc ?? 0) === 'ysport') {
      (s as any).loc = 'city_mansion_residence_3';
      (s as any).loc_arg = 'ygym';
      (s as any).menu_loc = 'city_mansion_residence_3';
      (s as any).menu_arg = 'ygym';
    }
    if (((s as any).loc ?? 0) === 'ykabinet') {
      (s as any).loc = 'city_mansion_residence_2';
      (s as any).loc_arg = 'yoffice';
      (s as any).menu_loc = 'city_mansion_residence_2';
      (s as any).menu_arg = 'yoffice';
    }
    (s as any).i = 1;
    do {
      if (((s as any).danilovich ?? 0)?.[String((s as any).i ?? 0)] === 1) {
        ((s as any).danilovich_outfits = (s as any).danilovich_outfits ?? {})[String((s as any).i ?? 0)] = 1;
        ((s as any).danilovich_outfits_s = (s as any).danilovich_outfits_s ?? {})[String((s as any).i ?? 0)] = (((s as any).danilovich_s ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
        ((s as any).danilovich_outfits_h = (s as any).danilovich_outfits_h ?? {})[String((s as any).i ?? 0)] = (((s as any).danilovich_h ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
        ((s as any).danilovich_outfits_b = (s as any).danilovich_outfits_b ?? {})[String((s as any).i ?? 0)] = (((s as any).danilovich_b ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      (s as any).danilovich = undefined;
      (s as any).danilovich_s = undefined;
      (s as any).danilovich_h = undefined;
      (s as any).danilovich_b = undefined;
      if (((s as any).agape ?? 0)[4] === 0) {
        ((s as any).agape = (s as any).agape ?? {})[4] = 10;
      }
      if (((s as any).vgape ?? 0)[4] === 0) {
        ((s as any).vgape = (s as any).vgape ?? {})[4] = 10;
      }
    } while (((s as any).i ?? 0) <= 170);
  }
  if (((s as any).temp_current_save_version ?? 0) < 80502) {
    (s as any).i = 0;
    do {
      (s as any).text = 'C' + String(((s as any).i ?? 0));
      (s as any).temp1 = qspFunc(s, 'array', 'get_me_index', '$npc_firstname', ((s as any).text ?? 0));
      if (((s as any).temp1 ?? 0) >= 0) {
        ((s as any).npc_index = (s as any).npc_index ?? {})[String((s as any).text ?? 0)] = ((s as any).text ?? 0);
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      (s as any).i = 0;
      do {
        (s as any).text = 'B' + String(((s as any).i ?? 0));
        (s as any).temp1 = qspFunc(s, 'array', 'get_me_index', '$npc_firstname', ((s as any).text ?? 0));
        if (((s as any).temp1 ?? 0) >= 0) {
          ((s as any).npc_index = (s as any).npc_index ?? {})[String((s as any).text ?? 0)] = ((s as any).text ?? 0);
        }
        (s as any).i = ((s as any).i ?? 0) + (1);
      } while (((s as any).i ?? 0) < ((s as any).barraynumber ?? 0));
    } while (((s as any).i ?? 0) < ((s as any).carraynumber ?? 0));
  }
  if (((s as any).temp_current_save_version ?? 0) < 80503) {
    (s as any).i = 0;
    do {
      if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 5) {
        ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_outcast_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).i ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</a>';
      } else {
        if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 4) {
          ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_gopnik_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).i ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</a>';
        } else {
          if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 3) {
            ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_nerd_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).i ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</a>';
          } else {
            if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 2) {
              ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_jock_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).i ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</a>';
            } else {
              if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 1) {
                ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_coolkid_chats\u0027, \u0027/\u0027 + $lcase($npc_usedname[/\u0027A\u0027 + String((s as any).i ?? \u0027\u0027) + \u0027/\u0027]) + /\u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</a>';
              }
            }
          }
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).hotelroom1day ?? 0) !== 0) {
        ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})['pav'] = ((s as any).hotelroom1day ?? 0);
        ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = ((s as any).HotelRoom ?? 0);
        (s as any).hotelroom1day = undefined;
        (s as any).HotelRoom = 0;
      }
    } while (((s as any).i ?? 0) < 250);
  }
  if (((s as any).temp_current_save_version ?? 0) < 80504) {
    ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A18'] = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_jock_chats\u0027, \u0027\u0027 + $lcase($npc_usedname[\u0027A18\u0027]) + \u0027\u0027); return false;">' + (((s as any).npc_usedname ?? 0)?.['A18']) + '</a>';
    if (((s as any).storyline ?? 0) === 1  &&  ((s as any).magikDostup ?? 0) === 1) {
      (s as any).start_type = 'sg';
      ((s as any).start_type = (s as any).start_type ?? {})[1] = 'nomagic';
    } else {
      if (((s as any).start_type ?? 0) === 'csb') {
        (s as any).start_type = 'sg_tg';
        ((s as any).start_type = (s as any).start_type ?? {})[1] = 'tg';
      } else {
        if (((s as any).storyline ?? 0) === 1) {
          (s as any).start_type = 'sg_m';
        } else {
          if (((s as any).magikDostup ?? 0) === 1) {
            (s as any).start_type = 'city';
            ((s as any).start_type = (s as any).start_type ?? {})[1] = 'nomagic';
          } else {
            (s as any).start_type = 'city_tg';
            ((s as any).start_type = (s as any).start_type ?? {})[1] = 'tg';
          }
        }
      }
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80601) {
    if (((s as any).pcs_skin ?? 0) < 150) {
      (s as any).pcs_skin = 7 * ((s as any).pcs_skin ?? 0);
    }
    qspCall(s, 'body', 'Update_Body');
    qspCall(s, 'body', 'DailyUpdate');
    qspCall(s, 'stat', '');
  }
  if (((s as any).temp_current_save_version ?? 0) < 80700) {
    (s as any).i = 1;
    do {
      if (((s as any).kats_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
        ((s as any).cats_brasS = (s as any).cats_brasS ?? {})[String((s as any).i ?? 0)] = (((s as any).kats_brasS ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
        ((s as any).cats_bras = (s as any).cats_bras ?? {})[String((s as any).i ?? 0)] = (((s as any).kats_bras ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      (s as any).kats_brasS = undefined;
      (s as any).kats_bras = undefined;
      (s as any).i = 1;
      do {
        if (((s as any).kats_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
          ((s as any).cats_pantiesS = (s as any).cats_pantiesS ?? {})[String((s as any).i ?? 0)] = (((s as any).kats_pantiesS ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
          ((s as any).cats_panties = (s as any).cats_panties ?? {})[String((s as any).i ?? 0)] = (((s as any).kats_panties ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
        }
        (s as any).i = ((s as any).i ?? 0) + (1);
        (s as any).kats_pantiesS = undefined;
        (s as any).kats_panties = undefined;
        if (((s as any).AvelinaQW ?? 0)?.['encourage'] === 1) {
          ((s as any).AvelinaQW = (s as any).AvelinaQW ?? {})['encourage'] = 0;
        }
        if (((s as any).lariskaQwestDay ?? 0) < 0  ||  ((s as any).lariskaQwestDay ?? 0) > 0) {
          (s as any).lariskaQwestDay = undefined;
        }
        if (((s as any).LariskaQW ?? 0)?.['LariskaHelp'] < 0  ||  ((s as any).LariskaQW ?? 0)?.['LariskaHelp'] > 0) {
          ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['LariskaHelp'] = 0;
        }
        if (((s as any).LariskaQW ?? 0)?.['LariskaHelpEnd'] === 1) {
          ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['LariskaHelpEnd'] = 0;
        }
        if (((s as any).npc_grupTipe ?? 0)?.['A18'] === 5) {
          ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A18'] = 2;
        }
        if (((s as any).christinaQW ?? 0)?.['dompath'] >= 1) {
          if (((s as any).christinaQW ?? 0)?.['dompath'] >= 6) {
            ((s as any).christinaQW = (s as any).christinaQW ?? {})['fight'] = 1;
            ((s as any).christinaQW = (s as any).christinaQW ?? {})['dompath'] = 0;
          } else {
            ((s as any).christinaQW = (s as any).christinaQW ?? {})['dompath'] = 0;
          }
        }
        if (((s as any).christinaQW ?? 0)?.['set_bully'] === 0) {
          if ((((s as any).christinaQW ?? 0)?.['blackmail'] > 0  ||  ((s as any).christinaQW ?? 0)?.['pre_bm'] > 0  ||  ((s as any).christinaQW ?? 0)?.['pre_fight'] > 0  ||  ((s as any).christinaQW ?? 0)?.['fight'] > 0)  &&  ((s as any).christinaQW ?? 0)?.['set_bully'] === 0) {
            ((s as any).christinaQW = (s as any).christinaQW ?? {})['set_bully'] = 1;
            ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = 40;
          }
          if (((s as any).christinaQW ?? 0)?.['subpath'] > 0) {
            ((s as any).christinaQW = (s as any).christinaQW ?? {})['set_bully'] = 1;
            ((s as any).christinaQW = (s as any).christinaQW ?? {})['bully'] = 60;
          }
        }
        (s as any).chrisloc = undefined;
        (s as any).lariloc = undefined;
        (s as any).anyaloc = undefined;
        (s as any).kolloc = undefined;
        (s as any).sdadloc = undefined;
        (s as any).father_go = undefined;
        (s as any).momloc = undefined;
        (s as any).momclean1 = undefined;
        (s as any).momclean2 = undefined;
        if (((s as any).mother_go ?? 0) > 0) {
          ((s as any).locat = (s as any).locat ?? {})['Mom_cafe_sex'] = ((s as any).mother_go ?? 0);
        }
        (s as any).m_day = undefined;
        (s as any).mother_go = undefined;
        (s as any).ocpd_room = undefined;
        if (((s as any).indorf ?? 0) > 0) {
          ((s as any).locat = (s as any).locat ?? {})['Fam_inGad'] = ((s as any).indorf ?? 0);
        }
        if (((s as any).indorf_month ?? 0) === ((s as any).month ?? 0)) {
          ((s as any).locat = (s as any).locat ?? {})['Fam_month_inGad'] = ((s as any).indorf_month ?? 0);
        }
        if (((s as any).dostupindorf ?? 0) > 0) {
          ((s as any).locat = (s as any).locat ?? {})['Fam_set_month_inGad'] = ((s as any).dostupindorf ?? 0);
        }
        (s as any).indorf = undefined;
        (s as any).indorf_month = undefined;
        (s as any).dostupindorf = undefined;
        if (((s as any).sister_indorf ?? 0) > 0) {
          ((s as any).locat = (s as any).locat ?? {})['Anya_Gad'] = ((s as any).sister_indorf ?? 0);
        }
        if (((s as any).sister_opr_indorf ?? 0) > 0) {
          ((s as any).locat = (s as any).locat ?? {})['Anya_check_Gad'] = ((s as any).sister_opr_indorf ?? 0);
        }
        (s as any).sister_indorf = undefined;
        (s as any).sister_opr_indorf = undefined;
        if (((s as any).workKafe ?? 0) === 1) {
          (s as any).workKafe = 0;
          ((s as any).workKafe = (s as any).workKafe ?? {})['job'] = 1;
        }
        if (((s as any).moisturiser ?? 0)?.['time'] > 0) {
          (s as any).moisturiser_time = (((s as any).moisturiser ?? 0)?.['time']);
          qspCall(s, 'array', 'remove_element', '' + ((s as any).moisturiser ?? 0) + '', 'time');
        }
        (s as any).hypnoHairStyle = undefined;
      } while (((s as any).i ?? 0) <= Object.keys((s as any).kats_panties ?? {}).length);
    } while (((s as any).i ?? 0) <= Object.keys((s as any).kats_bras ?? {}).length);
  }
  if (((s as any).temp_current_save_version ?? 0) < 80800) {
    qspCall(s, 'body', 'Update_Appearance');
    qspCall(s, 'AppearanceSystem', '');
    if (((s as any).wloc ?? 0) === 'default') {
      (s as any).wloc = 'default1';
    }
    if (((s as any).pcs_teeth ?? 0) >= 0) {
      (s as any).pcs_missing_teeth = ((s as any).pcs_teeth ?? 0);
      (s as any).pcs_teeth = 0;
    }
    if (((s as any).artembj ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['bj'] = ((s as any).artembj ?? 0);
      (s as any).artembj = undefined;
    }
    if (((s as any).artemsex ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['sex'] = ((s as any).artemsex ?? 0);
      (s as any).artemsex = undefined;
    }
    if (((s as any).artemanal ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['anal'] = ((s as any).artemanal ?? 0);
      (s as any).artemanal = undefined;
    }
    if (((s as any).artemhj ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['hj'] = ((s as any).artemhj ?? 0);
      (s as any).artemhj = undefined;
    }
    if (((s as any).artembrokenheart ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['brokenheart'] = ((s as any).artembrokenheart ?? 0);
      (s as any).artembrokenheart = undefined;
    }
    if (((s as any).artemStripSee ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['stripsee'] = ((s as any).artemStripSee ?? 0);
      (s as any).artemStripSee = undefined;
    }
    if (((s as any).artemlove ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['artemlove'] = ((s as any).artemlove ?? 0);
      (s as any).artemlove = undefined;
    }
    if (((s as any).artemblok ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['artemblok'] = ((s as any).artemblok ?? 0);
      (s as any).artemblok = undefined;
    }
    if (((s as any).artembf ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['bf'] = ((s as any).artembf ?? 0);
      (s as any).artembf = undefined;
    }
    if (((s as any).artdryhump ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['dryhump'] = ((s as any).artdryhump ?? 0);
      (s as any).artdryhump = undefined;
    }
    if (((s as any).artlie ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['artlie'] = ((s as any).artlie ?? 0);
      (s as any).artlie = undefined;
    }
    if (((s as any).artfall ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['artfall'] = ((s as any).artfall ?? 0);
      (s as any).artfall = undefined;
    }
    if (((s as any).artdate ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['date'] = ((s as any).artdate ?? 0);
      (s as any).artdate = undefined;
    }
    if (((s as any).artdim ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['dimka'] = ((s as any).artdim ?? 0);
      (s as any).artdim = undefined;
    }
    if (((s as any).artslutlove ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['slutlove'] = ((s as any).artslutlove ?? 0);
      (s as any).artslutlove = undefined;
    }
    if (((s as any).artsveslut ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['sveslut'] = ((s as any).artsveslut ?? 0);
      (s as any).artsveslut = undefined;
    }
    if (((s as any).metArtemMom ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['metArtemMom'] = ((s as any).metArtemMom ?? 0);
      (s as any).metArtemMom = undefined;
    }
    if (((s as any).artdimhelp ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['dimkahelp'] = ((s as any).artdimhelp ?? 0);
      (s as any).artdimhelp = undefined;
    }
    if (((s as any).JulMilBestFrend ?? 0) > 0) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['JulMilBestFrend'] = ((s as any).JulMilBestFrend ?? 0);
      (s as any).JulMilBestFrend = undefined;
    }
    if (((s as any).eatJulMilDay ?? 0)) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['eatJulMilDay'] = ((s as any).eatJulMilDay ?? 0);
      (s as any).eatJulMilDay = undefined;
    }
    if (((s as any).SexTalkJulia ?? 0)) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['SexTalkJulia'] = ((s as any).SexTalkJulia ?? 0);
      (s as any).SexTalkJulia = undefined;
    }
    if (((s as any).BeInJulMilHome ?? 0)) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['home_unlocked'] = ((s as any).BeInJulMilHome ?? 0);
      (s as any).BeInJulMilHome = undefined;
    }
    if (((s as any).JuliaMilLernQW ?? 0)) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['study_unlocked'] = ((s as any).JuliaMilLernQW ?? 0);
      (s as any).JuliaMilLernQW = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80802) {
    qspCall(s, 'prostitution_functions', 'set_gadukino_prostitute');
    if (((s as any).anushkaFirstvisit ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['first_visit'] = ((s as any).anushkaFirstvisit ?? 0);
      (s as any).anushkaFirstvisit = undefined;
    }
    if (((s as any).Anush_lunch ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['lunch'] = ((s as any).Anush_lunch ?? 0);
      (s as any).Anush_lunch = undefined;
    }
    if (((s as any).nush_model ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['model'] = ((s as any).nush_model ?? 0);
      (s as any).nush_model = undefined;
    }
    if (((s as any).foto_anush_referral ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['model_referral'] = ((s as any).foto_anush_referral ?? 0);
      (s as any).foto_anush_referral = undefined;
    }
    if (((s as any).AnushkaCompUse ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['computer_use'] = ((s as any).AnushkaCompUse ?? 0);
      (s as any).AnushkaCompUse = undefined;
    }
    if (((s as any).marspyknow ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['marspyknow'] = ((s as any).marspyknow ?? 0);
      (s as any).marspyknow = undefined;
    }
    if (((s as any).nushstrapanalpain ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['strapon_anal_pain'] = ((s as any).nushstrapanalpain ?? 0);
      (s as any).nushstrapanalpain = undefined;
    }
    if (((s as any).nushstrapon ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['strapon'] = ((s as any).nushstrapon ?? 0);
      (s as any).nushstrapon = undefined;
    }
    if (((s as any).domnush ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dom_nush'] = ((s as any).domnush ?? 0);
      (s as any).domnush = undefined;
    }
    if (((s as any).seenEd ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['seen_ed'] = ((s as any).seenEd ?? 0);
      (s as any).seenEd = undefined;
    }
    if (((s as any).valeriaIntroduced ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['valeria_introduced'] = ((s as any).valeriaIntroduced ?? 0);
      (s as any).valeriaIntroduced = undefined;
    }
    if (((s as any).showerphotos ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['shower_photos'] = ((s as any).showerphotos ?? 0);
      (s as any).showerphotos = undefined;
    }
    if (((s as any).anushka_tv_day ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['tv_day'] = ((s as any).anushka_tv_day ?? 0);
      (s as any).anushka_tv_day = undefined;
    }
    if (((s as any).anushka_shower_day ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['shower_day'] = ((s as any).anushka_shower_day ?? 0);
      (s as any).anushka_shower_day = undefined;
    }
    if (((s as any).AnushkaHomeDay ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['home_day'] = ((s as any).AnushkaHomeDay ?? 0);
      (s as any).AnushkaHomeDay = undefined;
    }
    if (((s as any).nush_photoshoot ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['photoshoot'] = ((s as any).nush_photoshoot ?? 0);
      (s as any).nush_photoshoot = undefined;
    }
    if (((s as any).NushVsNiko ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['vs_niko'] = ((s as any).NushVsNiko ?? 0);
      (s as any).NushVsNiko = undefined;
    }
    if (((s as any).nushaboutalyona ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['about_alyona'] = ((s as any).nushaboutalyona ?? 0);
      (s as any).nushaboutalyona = undefined;
    }
    if (((s as any).valspy ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['valspy'] = ((s as any).valspy ?? 0);
      (s as any).valspy = undefined;
    }
    if (((s as any).radnushdate ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['rad_date'] = ((s as any).radnushdate ?? 0);
      (s as any).radnushdate = undefined;
    }
    if (((s as any).radspy ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['radspy'] = ((s as any).radspy ?? 0);
      (s as any). radspy = undefined;
    }
    if (((s as any).nushfedor3s ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['fedor_3some'] = ((s as any).nushfedor3s ?? 0);
      (s as any).nushfedor3s = undefined;
    }
    if (((s as any).Anush_sex ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['sex'] = ((s as any).Anush_sex ?? 0);
      (s as any).Anush_sex = undefined;
    }
    if (((s as any).Anush_dolls ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dolls'] = ((s as any).Anush_dolls ?? 0);
      (s as any).Anush_dolls = undefined;
    }
    if (((s as any).anushka_toilet ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['toilet'] = ((s as any).anushka_toilet ?? 0);
      (s as any).anushka_toilet = undefined;
    }
    if (((s as any).marspy ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['marspy'] = ((s as any).marspy ?? 0);
      (s as any).marspy = undefined;
    }
    if (((s as any).bandpracticeinvite ?? 0) > 0) {
      ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = ((s as any).bandpracticeinvite ?? 0);
      (s as any).bandpracticeinvite = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80804) {
    if (((s as any).home_owned ?? 0)[1] === 1  ||  ((s as any).owned_property ?? 0)?.['city_apartment'] === 1) {
      qspCall(s, 'homes_properties', 'rent_property', 'city_apartment', ((s as any).ArendHouseSL ?? 0));
    } else {
      if (((s as any).home_owned ?? 0)[1] === 2  ||  ((s as any).owned_property ?? 0)?.['city_apartment'] === 2) {
        qspCall(s, 'homes_properties', 'buy_property', 'city_apartment');
      } else {
        if (((s as any).home_owned ?? 0)[1] === 3  ||  ((s as any).owned_property ?? 0)?.['city_apartment'] === 3) {
          qspCall(s, 'homes_properties', 'tenants_move_in', 'city_apartment', ((s as any).sdaday ?? 0), ((s as any).sdamonth ?? 0));
        }
      }
    }
    if (((s as any).home_owned ?? 0)[1] > 0  ||  ((s as any).owned_property ?? 0)?.['city_apartment'] === 1) {
      if (((s as any).rembedr ?? 0) === 1) {
        qspCall(s, 'homes_properties', 'renovate_property', 'city_apartment', 50000, 'bedroom');
      }
      if (((s as any).remsitr ?? 0) === 1) {
        qspCall(s, 'homes_properties', 'renovate_property', 'city_apartment', 50000, 'living room');
      }
      if (((s as any).remkorr ?? 0) === 1) {
        qspCall(s, 'homes_properties', 'renovate_property', 'city_apartment', 50000, 'hallway');
      }
      if (((s as any).remvanr ?? 0) === 1) {
        qspCall(s, 'homes_properties', 'renovate_property', 'city_apartment', 50000, 'bathroom');
      }
      if (((s as any).remkuhr ?? 0) === 1) {
        qspCall(s, 'homes_properties', 'renovate_property', 'city_apartment', 50000, 'kitchen');
      }
    }
    if (((s as any).home_owned ?? 0)[2]  > 0  ||  ((s as any).owned_property ?? 0)?.['parents_home']              > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    }
    if (((s as any).home_owned ?? 0)[3]  > 0  ||  ((s as any).owned_property ?? 0)?.['village_cottage']           > 0) {
      qspCall(s, 'homes_properties', 'buy_property', 'village_cottage');
    }
    if (((s as any).home_owned ?? 0)[3]  > 1  ||  ((s as any).owned_property ?? 0)?.['village_cottage-renovated'] === 1) {
      qspCall(s, 'homes_properties', 'renovate_property', 'village_cottage', 200000);
    }
    if (((s as any).home_owned ?? 0)[4]  === 1  ||  ((s as any).owned_property ?? 0)?.['old_town_apartment']        === 1) {
      qspCall(s, 'homes_properties', 'rent_property', 'old_town_apartment', ((s as any).ArendHouseSL4 ?? 0));
    }
    if (((s as any).home_owned ?? 0)[5]  > 0  ||  ((s as any).owned_property ?? 0)?.['matryona_mansion']                     > 0) {
      qspCall(s, 'homes_properties', 'buy_property', 'matryona_mansion');
    }
    if (((s as any).home_owned ?? 0)[5]  > 1  ||  ((s as any).owned_property ?? 0)?.['matryona_mansion-construction-status'] === 1) {
      qspCall(s, 'homes_properties', 'progress_construction_status', 'matryona_mansion');
    }
    if (((s as any).home_owned ?? 0)[5]  > 2  ||  ((s as any).owned_property ?? 0)?.['matryona_mansion-construction-status'] === 2) {
      qspCall(s, 'homes_properties', 'progress_construction_status', 'matryona_mansion');
    }
    if (((s as any).home_owned ?? 0)[6]  > 0  ||  ((s as any).owned_property ?? 0)?.['pavlovsk_hotel']     > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'pavlovsk_hotel');
    }
    if (((s as any).home_owned ?? 0)[7]  > 0  ||  ((s as any).owned_property ?? 0)?.['maid_bedroom']       > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'maid_bedroom');
    }
    if (((s as any).home_owned ?? 0)[8]  > 0  ||  ((s as any).owned_property ?? 0)?.['niko_apartment']     > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'niko_apartment');
    }
    if (((s as any).home_owned ?? 0)[9]  > 0  ||  ((s as any).owned_property ?? 0)?.['shulga_apartment']   > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'shulga_apartment');
    }
    if (((s as any).home_owned ?? 0)[10] > 0  ||  ((s as any).owned_property ?? 0)?.['lyceum_dorm']        > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'lyceum_dorm');
    }
    if (((s as any).home_owned ?? 0)[11] > 0  ||  ((s as any).owned_property ?? 0)?.['university_dorm']    > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'university_dorm');
    }
    if (((s as any).home_owned ?? 0)[12] > 0  ||  ((s as any).owned_property ?? 0)?.['hunters_lodge']      > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'hunters_lodge');
    }
    if (((s as any).home_owned ?? 0)[13] > 0  ||  ((s as any).owned_property ?? 0)?.['shared_apartment']   > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'shared_apartment');
    }
    if (((s as any).home_owned ?? 0)[14] > 0  ||  ((s as any).owned_property ?? 0)?.['grandparents_house'] > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'grandparents_house');
    }
    if (((s as any).home_owned ?? 0)[15] > 0  ||  ((s as any).owned_property ?? 0)?.['city_house']         > 0) {
      qspCall(s, 'homes_properties', 'buy_property', 'city_house');
    }
    if (((s as any).home_owned ?? 0)[16] > 0  ||  ((s as any).owned_property ?? 0)?.['meynold_household']  > 0) {
      qspCall(s, 'homes_properties', 'give_access', 'meynold_household');
    }
    if (((s as any).curr_home ?? 0) > 0  &&  ((s as any).home ?? 0)?.['current'] === '') {
      qspCall(s, 'homes_properties', 'set_home', '', String(((s as any).curr_home ?? 0)));
    }
    if (((s as any).home ?? 0)?.['current'] === 'parents_home'  &&  ((s as any).accessible_property ?? 0)?.['parents_home'] === 0) {
      qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    }
    (s as any).home_owned = undefined;
    (s as any).curr_home = undefined;
    (s as any).ArendHouseSL = undefined;
    (s as any).ArendHouseSL4 = undefined;
    (s as any).home_rent_txt = undefined;
    (s as any).home_value = undefined;
    (s as any).home_value_txt = undefined;
    (s as any).sdaday = undefined;
    (s as any).sdamonth = undefined;
    (s as any).owned_property = undefined;
    if (((s as any).home ?? 0)?.['current'] === '') {
      if ((String(((s as any).start_type ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'sg') {
        qspCall(s, 'homes_properties', 'give_access', 'parents_home');
        qspCall(s, 'homes_properties', 'set_home', 'parents_home');
      } else {
        if ((String(((s as any).start_type ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'city') {
          qspCall(s, 'homes_properties', 'give_access', 'city_apartment');
          qspCall(s, 'homes_properties', 'set_home', 'city_apartment');
        } else {
          if ((String(((s as any).start_type ?? 0)).slice((1)-1, ((1)-1)+(3))) === 'uni') {
            qspCall(s, 'homes_properties', 'give_access', 'university_dorm');
            qspCall(s, 'homes_properties', 'set_home', 'university_dorm');
          }
        }
      }
    }
    if (((s as any).internet ?? 0) > 0) {
      (s as any).old_internet_value = 10 * ((s as any).internet ?? 0);
      if (((s as any).property ?? 0)?.['internet_enabled'] === 1) {
        qspCall(s, 'internet_mobile', 'buy_subscription', (((s as any).home ?? 0)?.['current']), 900);
        if ((((s as any).old_internet_value ?? 0) - 900) >= 0) {
          (s as any).money = ((s as any).money ?? 0) + ((((s as any).old_internet_value ?? 0) - 900));
        }
      } else {
        if (((s as any).old_internet_value ?? 0) >= 1200) {
          qspCall(s, 'internet_mobile', 'buy_subscription', 'mobile', 1200);
          if ((((s as any).old_internet_value ?? 0) - 1200) > 0) {
            (s as any).money = ((s as any).money ?? 0) + ((((s as any).old_internet_value ?? 0) - 1200));
          }
        } else {
          qspCall(s, 'internet_mobile', 'top_up_metered', 'metered_mobile', ((s as any).internet ?? 0) * 60);
        }
      }
      (s as any).internet = undefined;
    }
    if (((s as any).balans ?? 0) > 0) {
      if ((((s as any).balans ?? 0) - 800) >= 0) {
        qspCall(s, 'internet_mobile', 'buy_subscription', 'monthly_calls', 800);
        (s as any).money = ((s as any).money ?? 0) + ((((s as any).balans ?? 0) - 800));
      } else {
        if (((s as any).balans ?? 0) >= 225) {
          (s as any).temp_phone_mult = ((s as any).balans ?? 0) / 225;
          (s as any).temp_phone_rem = ((s as any).balans ?? 0) % 225;
          (s as any).new_balans = ((s as any).temp_phone_mult ?? 0) * 240;
          qspCall(s, 'internet_mobile', 'top_up_metered', 'metered_calls', ((s as any).new_balans ?? 0));
          if (((s as any).temp_phone_rem ?? 0) > 0) {
            (s as any).money = ((s as any).money ?? 0) + (((s as any).temp_phone_rem ?? 0));
          }
        } else {
          if (((s as any).balans ?? 0) >= 170) {
            (s as any).temp_phone_rem = ((s as any).balans ?? 0) % 170;
            qspCall(s, 'internet_mobile', 'top_up_metered', 'metered_calls', 180);
            if (((s as any).temp_phone_rem ?? 0) > 0) {
              (s as any).money = ((s as any).money ?? 0) + (((s as any).temp_phone_rem ?? 0));
            }
          } else {
            if (((s as any).balans ?? 0) >= 115) {
              (s as any).temp_phone_rem = ((s as any).balans ?? 0) % 115;
              qspCall(s, 'internet_mobile', 'top_up_metered', 'metered_calls', 120);
              if (((s as any).temp_phone_rem ?? 0) > 0) {
                (s as any).money = ((s as any).money ?? 0) + (((s as any).temp_phone_rem ?? 0));
              }
            } else {
              if (((s as any).balans ?? 0) >= 60) {
                (s as any).temp_phone_rem = ((s as any).balans ?? 0) % 60;
                qspCall(s, 'internet_mobile', 'top_up_metered', 'metered_calls', 60);
                if (((s as any).temp_phone_rem ?? 0) > 0) {
                  (s as any).money = ((s as any).money ?? 0) + (((s as any).temp_phone_rem ?? 0));
                }
              } else {
                qspCall(s, 'internet_mobile', 'top_up_metered', 'metered_calls', ((s as any).balans ?? 0));
              }
            }
          }
        }
      }
      (s as any).balans = undefined;
      (s as any).temp_phone_rem = undefined;
      (s as any).temp_phone_mult = undefined;
      (s as any).new_balans = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80900) {
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'savedOutfits') {
      (s as any).wardrobeDefaultPagePref = 'default1';
    }
    if (((s as any).nichTanyaKnown ?? 0) === 1) {
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['Known'] = ((s as any).nichTanyaKnown ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = ((s as any).nichTanyaRelationship ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['RelationshipState'] = ((s as any).nichTanyaRelationshipState ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['RelationshipBreakup'] = ((s as any).nichTanyaRelationshipBreakup ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['BF'] = ((s as any).nichTanyaBF ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['Date'] = ((s as any).nichTanyaDate ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['DateCounter'] = ((s as any).nichTanyaDateCounter ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['DateLast'] = ((s as any).nichTanyaDateLast ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['DateShopping'] = ((s as any).nichTanyaDateShopping ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['FuckCounter'] = ((s as any).nichTanyaFuckCounter ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['FuckLast'] = ((s as any).nichTanyaFuckLast ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['FuckToday'] = ((s as any).nichTanyaFuckToday ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['FuckPositions'] = ((s as any).nichTanyaFuckPositions ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['Strapon'] = ((s as any).nichTanyaStrapon ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['Dominance'] = ((s as any).nichTanyaDominance ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['Uni'] = ((s as any).nichTanyaUni ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['UniStart'] = ((s as any).nichTanyaUniStart ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['Room'] = ((s as any).nichTanyaRoom ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['PropSex'] = ((s as any).nichTanyaPropSex ?? 0);
      ((s as any).nichTanya = (s as any).nichTanya ?? {})['PropDate'] = ((s as any).nichTanyaPropDate ?? 0);
      (s as any).nichTanyaBFState = undefined;
      (s as any).nichTanyaFuckDom = undefined;
      (s as any).nichTanyaFuckSub = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80901) {
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'savedOutfits') {
      (s as any).wardrobeDefaultPagePref = 'default1';
    }
    (s as any).i = 0;
    do {
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).boutique_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
        scene.text('lusso_panties[i] = 1');
        scene.text('lusso_pantiesS[i] = boutique_pantiesS[i]');
      }
      (s as any).boutique_panties = undefined;
      (s as any).i = 0;
      do {
        (s as any).i = ((s as any).i ?? 0) + (1);
        if (((s as any).boutique_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
          scene.text('lusso_bras[i] = 1');
          scene.text('lusso_brasS[i] = boutique_brasS[i]');
        }
        (s as any).boutique_bras = undefined;
        (s as any).i = 0;
        do {
          (s as any).i = ((s as any).i ?? 0) + (1);
          if (((s as any).cheap_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
            scene.text('gm_panties[i] = 1');
            scene.text('gm_pantiesS[i] = cheap_pantiesS[i]');
          }
          (s as any).cheap_panties = undefined;
          (s as any).i = 0;
          do {
            (s as any).i = ((s as any).i ?? 0) + (1);
            if (((s as any).cheap_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
              scene.text('gm_bras[i] = 1');
              scene.text('gm_brasS[i] = cheap_brasS[i]');
            }
            (s as any).cheap_bras = undefined;
            (s as any).i = 0;
            do {
              (s as any).i = ((s as any).i ?? 0) + (1);
              if (((s as any).exhibitionist_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                scene.text('salacious_panties[i] = 1');
                scene.text('salacious_pantiesS[i] = exhibitionist_pantiesS[i]');
              }
              (s as any).exhibitionist_panties = undefined;
              (s as any).i = 0;
              do {
                (s as any).i = ((s as any).i ?? 0) + (1);
                if (((s as any).exhibitionist_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                  scene.text('salacious_bras[i] = 1');
                  scene.text('salacious_brasS[i] = exhibitionist_brasS[i]');
                }
                (s as any).exhibitionist_bras = undefined;
                (s as any).i = 0;
                do {
                  (s as any).i = ((s as any).i ?? 0) + (1);
                  if (((s as any).sexshop_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                    scene.text('eroto_panties[i] = 1');
                    scene.text('eroto_pantiesS[i] = sexshop_pantiesS[i]');
                  }
                  (s as any).sexshop_panties = undefined;
                  (s as any).i = 0;
                  do {
                    (s as any).i = ((s as any).i ?? 0) + (1);
                    if (((s as any).sexshop_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                      scene.text('eroto_bras[i] = 1');
                      scene.text('eroto_brasS[i] = sexshop_brasS[i]');
                    }
                    (s as any).sexshop_bras = undefined;
                    (s as any).i = 0;
                    do {
                      (s as any).i = ((s as any).i ?? 0) + (1);
                      if (((s as any).sport_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                        scene.text('danilovich_panties[i] = 1');
                        scene.text('danilovich_pantiesS[i] = sport_pantiesS[i]');
                      }
                      (s as any).sport_panties = undefined;
                      (s as any).i = 0;
                      do {
                        (s as any).i = ((s as any).i ?? 0) + (1);
                        if (((s as any).sport_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
                          scene.text('danilovich_bras[i] = 1');
                          scene.text('danilovich_brasS[i] = sport_brasS[i]');
                        }
                        (s as any).sport_bras = undefined;
                        if (((s as any).metmira ?? 0) === 1) {
                          ((s as any).npc_known = (s as any).npc_known ?? {})['A60'] = 1;
                          (s as any).metmira = undefined;
                        }
                      } while (((s as any).i ?? 0) <= Object.keys((s as any).sport_bras ?? {}).length);
                    } while (((s as any).i ?? 0) <= Object.keys((s as any).sport_panties ?? {}).length);
                  } while (((s as any).i ?? 0) <= Object.keys((s as any).sexshop_bras ?? {}).length);
                } while (((s as any).i ?? 0) <= Object.keys((s as any).sexshop_panties ?? {}).length);
              } while (((s as any).i ?? 0) <= Object.keys((s as any).exhibitionist_bras ?? {}).length);
            } while (((s as any).i ?? 0) <= Object.keys((s as any).exhibitionist_panties ?? {}).length);
          } while (((s as any).i ?? 0) <= Object.keys((s as any).cheap_bras ?? {}).length);
        } while (((s as any).i ?? 0) <= Object.keys((s as any).cheap_panties ?? {}).length);
      } while (((s as any).i ?? 0) <= Object.keys((s as any).boutique_bras ?? {}).length);
    } while (((s as any).i ?? 0) <= Object.keys((s as any).boutique_panties ?? {}).length);
  }
  if (((s as any).temp_current_save_version ?? 0) < 80903) {
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'savedOutfits') {
      (s as any).wardrobeDefaultPagePref = 'default1';
    }
    if ((String(((s as any).start_type ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'city'  ||  ((s as any).start_type ?? 0) === 'uni') {
      qspCall(s, 'homes_properties', 'give_access', 'parents_home');
      (s as any).SchoolAtestat = 1;
    }
    if (((s as any).teh ?? 0) > 0) {
      ((s as any).car = (s as any).car ?? {})['new_condition'] = ((s as any).tehcar ?? 0);
      ((s as any).car = (s as any).car ?? {})['current_condition'] = ((s as any).teh ?? 0);
      (s as any).teh = undefined;
      (s as any).tehcar = undefined;
    }
    (s as any).i = 0;
    do {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).i ?? 0)] !== '') {
        ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).i ?? 0)] = 'fuckbuddy';
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).traits ?? 0) > 0  ||  ((s as any).trait ?? 0) > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['nerd_status'] = (((s as any).traits ?? 0)?.['nerd_status']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['alko_status'] = (((s as any).traits ?? 0)?.['alko_status']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['alko_points'] = (((s as any).traits ?? 0)?.['alko_points']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['buttslut_lvl'] = (((s as any).traits ?? 0)?.['buttslut_lvl']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['buttslut_exp'] = (((s as any).traits ?? 0)?.['buttslut_exp']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['nerd_lernHome'] = (((s as any).traits ?? 0)?.['nerd_lernHome']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['nerd_points'] = (((s as any).traits ?? 0)?.['nerd_points']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['nerd_lessons'] = (((s as any).traits ?? 0)?.['nerd_lessons']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['cumeater'] = (((s as any).trait ?? 0)?.['cumeater']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['commando_lvl'] = (((s as any).trait ?? 0)?.['commando_lvl']);
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['commando_exp'] = (((s as any).trait ?? 0)?.['commando_exp']);
        (s as any).traits = undefined;
        (s as any).trait = undefined;
      }
    } while (((s as any).i ?? 0) <= Object.keys((s as any).boys ?? {}).length);
  }
  if (((s as any).temp_current_save_version ?? 0) < 90000) {
    if (((s as any).photography_job ?? 0) > 0) {
      ((s as any).photography = (s as any).photography ?? {})['experience'] = ((s as any).photography_job ?? 0);
    }
    if (Object.keys((s as any).fuckbuddy ?? {}).length > 0) {
      (s as any).i_fb = 0;
      do {
        if ((Array.isArray((s as any)._fuckbuddies) ? ((s as any)._fuckbuddies as any[]).indexOf(((s as any).fuckbuddy ?? 0)?.[String((s as any).i_fb ?? 0)]) : -1) === -1) {
          (s as any)._fuckbuddies = [...((s as any)._fuckbuddies ?? []), (((s as any).fuckbuddy ?? 0)?.[String((s as any).i_fb ?? 0)] ?? 0)];
        }
        (s as any).i_fb = ((s as any).i_fb ?? 0) + (1);
        (s as any).fuckbuddy = undefined;
        (s as any).fuckbuddy = ((s as any)._fuckbuddies ?? 0);
        (s as any)._fuckbuddies = undefined;
        (s as any).i_fb = undefined;
      } while (((s as any).i_fb ?? 0) < Object.keys((s as any).fuckbuddy ?? {}).length);
    }
    if (((s as any).stat ?? 0)?.['virgin'] > 0) {
      ((s as any).stat = (s as any).stat ?? {})['think_virgin'] = (((s as any).stat ?? 0)?.['virgin']);
      qspCall(s, 'array', 'remove_element', 'stat', 'virgin');
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90001) {
    if (((s as any).futa ?? 0) > 0) {
      (s as any).shemale = ((s as any).futa ?? 0);
      (s as any).futa = undefined;
    }
    if (((s as any).hidden_futa ?? 0) > 0) {
      (s as any).hidden_shemale = ((s as any).hidden_futa ?? 0);
      (s as any).hidden_futa = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90003) {
    if (((s as any).home ?? 0)?.['current'] !== ''  &&  ((s as any).home ?? 0)?.['bathroom'] === '') {
      qspCall(s, 'homes_properties', 'set_home', (((s as any).home ?? 0)?.['current']));
    }
    if (((s as any).makeup ?? 0)?.['base'] < 1) {
      ((s as any).makeup = (s as any).makeup ?? {})['base'] = 1;
    }
    (s as any).makeup_routine_update_index = 1;
    do {
      (s as any).temp_makeup_routine = 0;
      (s as any).temp_makeup_routine_name = 0;
      if (((s as any).temp_makeup_routine ?? 0) !== '') {
        ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0)) + '_makeup'] = parseFloat((String(((s as any).temp_makeup_routine ?? 0)).slice((1)-1, ((1)-1)+(1))));
        ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0)) + '_lipbalm'] = parseFloat((String(((s as any).temp_makeup_routine ?? 0)).slice((2)-1, ((2)-1)+(1))));
        ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0)) + '_lashes'] = parseFloat((String(((s as any).temp_makeup_routine ?? 0)).slice((3)-1, ((3)-1)+(1))));
        ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0))] = ((s as any).temp_makeup_routine ?? 0);
        ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0)) + '_name'] = ((s as any).temp_makeup_routine_name ?? 0);
        delete (s as any)['$routine' + ((s as any).makeup_routine_update_index ?? 0) + ''];
        delete (s as any)['$routine' + ((s as any).makeup_routine_update_index ?? 0) + 'custname'];
      }
      (s as any).makeup_routine_update_index = ((s as any).makeup_routine_update_index ?? 0) + (1);
      (s as any).makeup_routine_update_index = undefined;
      (s as any).temp_makeup_routine = undefined;
      (s as any).temp_makeup_routine_name = undefined;
      if (((s as any).kosmetica ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).kosmetica ?? 0);
        (s as any).kosmetica = undefined;
      }
      if (((s as any).item_moisturizer ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['moisturiser'] = ((s as any).item_moisturizer ?? 0);
        (s as any).item_moisturizer = undefined;
      }
      if (((s as any).lipbalm ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lipbalm'] = ((s as any).lipbalm ?? 0);
        (s as any).lipbalm = undefined;
      }
      if (((s as any).falselashesplain ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_fake'] = ((s as any).falselashesplain ?? 0);
        (s as any).falselashesplain = undefined;
      }
      if (((s as any).falselashesmink ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_mink'] = ((s as any).falselashesmink ?? 0);
        (s as any).falselashesmink = undefined;
      }
      if (((s as any).stanok ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).stanok ?? 0);
        (s as any).stanok = undefined;
      }
      if (((s as any).krem ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['suncream'] = ((s as any).krem ?? 0);
        (s as any).krem = undefined;
      }
      if (((s as any).deodorant ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['deodorant'] = ((s as any).deodorant ?? 0);
        (s as any).deodorant = undefined;
      }
      if (((s as any).tampon ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = ((s as any).tampon ?? 0);
        (s as any).tampon = undefined;
      }
      if (((s as any).sanpad ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = ((s as any).sanpad ?? 0);
        (s as any).sanpad = undefined;
      }
      if (((s as any).shampoo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = ((s as any).shampoo ?? 0);
        (s as any).shampoo = undefined;
      }
      if (((s as any).hscrunch ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['scrunchies'] = ((s as any).hscrunch ?? 0);
        (s as any).hscrunch = undefined;
      }
      if (((s as any).hpingrip ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['kirbygrips'] = ((s as any).hpingrip ?? 0);
        (s as any).hpingrip = undefined;
      }
      if (((s as any).salfetka ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['makeup_wipes'] = ((s as any).salfetka ?? 0);
        (s as any).salfetka = undefined;
      }
      if (((s as any).mouthwash ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mouthwash'] = ((s as any).mouthwash ?? 0);
        (s as any).mouthwash = undefined;
      }
      if (((s as any).greben ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['comb'] = ((s as any).greben ?? 0);
        (s as any).greben = undefined;
      }
      if (((s as any).kosmetitka ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = ((s as any).kosmetitka ?? 0);
        (s as any).kosmetitka = undefined;
      }
      if (((s as any).compact_mirror ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_mirror'] = ((s as any).compact_mirror ?? 0);
        (s as any).compact_mirror = undefined;
      }
      if (((s as any).eda ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_basic'] = ((s as any).eda ?? 0);
        (s as any).eda = undefined;
      }
      if (((s as any).edaD ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_diet'] = ((s as any).edaD ?? 0);
        (s as any).edaD = undefined;
      }
      if (((s as any).pranik ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_biscuits'] = ((s as any).pranik ?? 0);
        (s as any).pranik = undefined;
      }
      if (((s as any).buterbrod ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_sandwich'] = ((s as any).buterbrod ?? 0);
        (s as any).buterbrod = undefined;
      }
      if (((s as any).wine ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_wine'] = ((s as any).wine ?? 0);
        (s as any).wine = undefined;
      }
      if (((s as any).bottle ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_water'] = ((s as any).bottle ?? 0);
        (s as any).bottle = undefined;
      }
      if (((s as any).pregtest ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['pregnancy_test'] = ((s as any).pregtest ?? 0);
        (s as any).pregtest = undefined;
      }
      if (((s as any).lekarstvo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['antibiotics'] = ((s as any).lekarstvo ?? 0);
        (s as any).lekarstvo = undefined;
      }
      if (((s as any).vitamin ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['vitamins'] = ((s as any).vitamin ?? 0);
        (s as any).vitamin = undefined;
      }
      if (((s as any).painkiller ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['painkillers'] = ((s as any).painkiller ?? 0);
        (s as any).painkiller = undefined;
      }
      if (((s as any).mosolmaz ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['chafing_cream'] = ((s as any).mosolmaz ?? 0);
        (s as any).mosolmaz = undefined;
      }
      if (((s as any).lubri ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).lubri ?? 0);
        (s as any).lubri = undefined;
      }
      if (((s as any).klisma ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['enema_kit'] = ((s as any).klisma ?? 0);
        (s as any).klisma = undefined;
      }
      if (((s as any).breastpump ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['breast_pump'] = ((s as any).breastpump ?? 0);
        (s as any).breastpump = undefined;
      }
      if (((s as any).bpbottles ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bottle_s'] = ((s as any).bpbottles ?? 0);
        (s as any).bpbottles = undefined;
      }
      if (((s as any).bpbottlem ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bottle_m'] = ((s as any).bpbottlem ?? 0);
        (s as any).bpbottlem = undefined;
      }
      if (((s as any).bpnipplebalm ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['nipple_cream'] = ((s as any).bpnipplebalm ?? 0);
        (s as any).bpnipplebalm = undefined;
      }
      if (((s as any).fatdel ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['weight_loss_pill'] = ((s as any).fatdel ?? 0);
        (s as any).fatdel = undefined;
      }
      if (((s as any).morning_after_pill ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['morning_after_pill'] = ((s as any).morning_after_pill ?? 0);
        (s as any).morning_after_pill = undefined;
      }
      if (((s as any).prezik ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).prezik ?? 0);
        (s as any).prezik = undefined;
      }
      if (((s as any).prezikcount ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = ((s as any).prezikcount ?? 0);
        (s as any).prezikcount = undefined;
      }
      if (((s as any).preziksabo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = ((s as any).preziksabo ?? 0);
        (s as any).preziksabo = undefined;
      }
      if (((s as any).badprezik ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bad_condoms'] = ((s as any).badprezik ?? 0);
        (s as any).badprezik = undefined;
      }
      if (((s as any).tabletki ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = ((s as any).tabletki ?? 0);
        (s as any).tabletki = undefined;
      }
      if (((s as any).siga ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cigarettes'] = ((s as any).siga ?? 0);
        (s as any).siga = undefined;
      }
      if (((s as any).fashmag ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_fashion'] = ((s as any).fashmag ?? 0);
        (s as any).fashmag = undefined;
      }
      if (((s as any).compmag ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_computer'] = ((s as any).compmag ?? 0);
        (s as any).compmag = undefined;
      }
      if (((s as any).biomag ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_biography'] = ((s as any).biomag ?? 0);
        (s as any).biomag = undefined;
      }
      if (((s as any).cookmag ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_cooking'] = ((s as any).cookmag ?? 0);
        (s as any).cookmag = undefined;
      }
      if (((s as any).knitmag ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_knitting'] = ((s as any).knitmag ?? 0);
        (s as any).knitmag = undefined;
      }
      if (((s as any).fitmag ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_fitness'] = ((s as any).fitmag ?? 0);
        (s as any).fitmag = undefined;
      }
      if (((s as any).umbrella ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['umbrella'] = ((s as any).umbrella ?? 0);
        (s as any).umbrella = undefined;
      }
      if (((s as any).pornMagazine ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_porn'] = ((s as any).pornMagazine ?? 0);
        (s as any).pornMagazine = undefined;
      }
      if (((s as any).vibrator ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['vibe'] = ((s as any).vibrator ?? 0);
        (s as any).vibrator = undefined;
      }
      if (((s as any).analplug ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['buttplug'] = ((s as any).analplug ?? 0);
        (s as any).analplug = undefined;
      }
      if (((s as any).suction_dildo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_suction'] = ((s as any).suction_dildo ?? 0);
        (s as any).suction_dildo = undefined;
      }
      if (((s as any).strapon ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['strapon'] = ((s as any).strapon ?? 0);
        (s as any).strapon = undefined;
      }
      if (((s as any).dildo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_small'] = ((s as any).dildo ?? 0);
        (s as any).dildo = undefined;
      }
      if (((s as any).middildo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_normal'] = ((s as any).middildo ?? 0);
        (s as any).middildo = undefined;
      }
      if (((s as any).largedildo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_big'] = ((s as any).largedildo ?? 0);
        (s as any).largedildo = undefined;
      }
      if (((s as any).bigdildo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_large'] = ((s as any).bigdildo ?? 0);
        (s as any).bigdildo = undefined;
      }
      if (((s as any).extradildo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_huge'] = ((s as any).extradildo ?? 0);
        (s as any).extradildo = undefined;
      }
      if (((s as any).superdildo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_enormous'] = ((s as any).superdildo ?? 0);
        (s as any).superdildo = undefined;
      }
      if (((s as any).maddildo ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_gigantic'] = ((s as any).maddildo ?? 0);
        (s as any).maddildo = undefined;
      }
      if (((s as any).skak ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['skipping_rope'] = ((s as any).skak ?? 0);
        (s as any).skak = undefined;
      }
      if (((s as any).obruch ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['hula_hoop'] = ((s as any).obruch ?? 0);
        (s as any).obruch = undefined;
      }
      if (((s as any).bookyog ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['book_yoga'] = ((s as any).bookyog ?? 0);
        (s as any).bookyog = undefined;
      }
      if (((s as any).konki ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['ice_skates'] = ((s as any).konki ?? 0);
        (s as any).konki = undefined;
      }
      if (((s as any).pcs_ski_owned ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['ski'] = ((s as any).pcs_ski_owned ?? 0);
        (s as any).pcs_ski_owned = undefined;
      }
      if (((s as any).refillable_bottle ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['refill_bottle'] = ((s as any).refillable_bottle ?? 0);
        (s as any).refillable_bottle = undefined;
      }
      if (((s as any).fairy ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_soap'] = ((s as any).fairy ?? 0);
        (s as any).fairy = undefined;
      }
      if (((s as any).poroshok ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = ((s as any).poroshok ?? 0);
        (s as any).poroshok = undefined;
      }
      if (((s as any).cltarelka ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_plates'] = ((s as any).cltarelka ?? 0);
        (s as any).cltarelka = undefined;
      }
      if (((s as any).tkan ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_fabric'] = ((s as any).tkan ?? 0);
        (s as any).tkan = undefined;
      }
      if (((s as any).sewing_kit ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_kit'] = ((s as any).sewing_kit ?? 0);
        (s as any).sewing_kit = undefined;
      }
      if (((s as any).TV ?? 0) === 1) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_tv'] = 1;
        (s as any).TV = undefined;
      }
      if (((s as any).TV ?? 0) >= 2) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['plasma_tv'] = 1;
        (s as any).TV = undefined;
      }
      if (((s as any).mc_inventory ?? 0)?.['tech_tv'] >= 2) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['plasma_tv'] = 1;
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_tv'] = 1;
      }
      if (((s as any).komp ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_computer'] = ((s as any).komp ?? 0);
        (s as any).komp = undefined;
      }
      if (((s as any).GameCD2 ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_game_ds'] = ((s as any).GameCD2 ?? 0);
        (s as any).GameCD2 = undefined;
      }
      if (((s as any).posudomashina ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_dishwasher'] = ((s as any).posudomashina ?? 0);
        (s as any).posudomashina = undefined;
      }
      if (((s as any).stiralka ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_washing_machine'] = ((s as any).stiralka ?? 0);
        (s as any).stiralka = undefined;
      }
      if (((s as any).zenit ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_camera'] = ((s as any).zenit ?? 0);
        (s as any).zenit = undefined;
      }
      if (((s as any).minifoto ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_hidden_cam'] = ((s as any).minifoto ?? 0);
        (s as any).minifoto = undefined;
      }
      if (((s as any).webcamera ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_webcam'] = ((s as any).webcamera ?? 0);
        (s as any).webcamera = undefined;
      }
      if (((s as any).ms_pill ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['meds_morning_sick'] = ((s as any).ms_pill ?? 0);
        (s as any).ms_pill = undefined;
      }
      if (((s as any).preg_ball ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['preg_ball'] = ((s as any).preg_ball ?? 0);
        (s as any).preg_ball = undefined;
      }
      if (((s as any).preg_brace ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['preg_brace'] = ((s as any).preg_brace ?? 0);
        (s as any).preg_brace = undefined;
      }
      if (((s as any).preg_pillow ?? 0) > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['preg_pillow'] = ((s as any).preg_pillow ?? 0);
        (s as any).preg_pillow = undefined;
      }
      (s as any).npc_preferences = undefined;
      (s as any).pref_update_index = 1;
      do {
        qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).pref_update_index ?? 0) + '');
        (s as any).pref_update_index = ((s as any).pref_update_index ?? 0) + (1);
        (s as any).pref_update_index = undefined;
        if (((s as any).shplft_booked ?? 0)    > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_booked'] = ((s as any).shplft_booked ?? 0);
          (s as any).shplft_booked = undefined;
        }
        if (((s as any).prst_booked ?? 0)      > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['prostitution_booked'] = ((s as any).prst_booked ?? 0);
          (s as any).prst_booked = undefined;
        }
        if (((s as any).shplft_counter ?? 0)    > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_counter'] = ((s as any).shplft_counter ?? 0);
          (s as any).shplft_counter = undefined;
        }
        if (((s as any).prst_counter ?? 0)      > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['prostitution_counter'] = ((s as any).prost_counter ?? 0);
          (s as any).prst_counter = undefined;
        }
        if (((s as any).prst_bribe ?? 0)      > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['prostitution_bribe'] = ((s as any).prst_bribe ?? 0);
          (s as any).prst_bribe = undefined;
        }
        if (((s as any).shplft_value ?? 0)      > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_value'] = ((s as any).shplft_value ?? 0);
          (s as any).shplft_value = undefined;
        }
        (s as any).book_response = undefined;
        if (((s as any).bookingofficer_rel ?? 0)  > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['bookingofficer_rel'] = ((s as any).bookingofficer_rel ?? 0);
          (s as any).bookingofficer_rel = undefined;
        }
        if (((s as any).toldonguard ?? 0)      > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['toldonguard'] = ((s as any).toldonguard ?? 0);
          (s as any).toldonguard = undefined;
        }
        if (((s as any).courtletter_date ?? 0) > 0) {
          ((s as any).policeQW_courtletter_dates = (s as any).policeQW_courtletter_dates ?? {})[0] = ((s as any).courtletter_date ?? 0);
          (s as any).courtletter_date = undefined;
          if (((s as any).shplft_tmp ?? 0) > 0) {
            ((s as any).policeQW_courtletter_subjects = (s as any).policeQW_courtletter_subjects ?? {})[0] = 'shoplift_' + ((s as any).detec_type ?? 0) + '';
          } else {
            ((s as any).policeQW_courtletter_subjects = (s as any).policeQW_courtletter_subjects ?? {})[0] = 'prostitution_' + ((s as any).detec_type ?? 0) + '';
          }
        }
        if (((s as any).courthearing_date ?? 0) > 0) {
          ((s as any).policeQW_courthearing_dates = (s as any).policeQW_courthearing_dates ?? {})[0] = ((s as any).courthearing_date ?? 0);
          (s as any).courthearing_date = undefined;
          if (((s as any).shplft_tmp ?? 0) > 0) {
            ((s as any).policeQW_courthearing_subjects = (s as any).policeQW_courthearing_subjects ?? {})[0] = 'shoplift_' + ((s as any).detec_type ?? 0) + '';
          } else {
            ((s as any).policeQW_courthearing_subjects = (s as any).policeQW_courthearing_subjects ?? {})[0] = 'prostitution_' + ((s as any).detec_type ?? 0) + '';
          }
        }
        (s as any).shplft_tmp = undefined;
        (s as any).prst_tmp = undefined;
        (s as any).detec_type = undefined;
        if (((s as any).legal_fine ?? 0) > 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['legal_fine'] = ((s as any).legal_fine ?? 0);
          (s as any).legal_fine = undefined;
        }
        (s as any).varsleep = undefined;
        if (((s as any).bedPanty ?? 0)       > 0) {
          ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedPanty'] = ((s as any).bedPanty ?? 0);
          (s as any).bedPanty = undefined;
        }
        if (((s as any).bedAnal ?? 0)        > 0) {
          ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedAnal'] = ((s as any).bedAnal ?? 0);
          (s as any).bedAnal = undefined;
        }
        if (((s as any).bedVibrator ?? 0)    > 0) {
          ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedVibrator'] = ((s as any).bedVibrator ?? 0);
          (s as any).bedVibrator = undefined;
        }
        if (((s as any).cheatVib ?? 0)       > 0) {
          ((s as any).sleepVars = (s as any).sleepVars ?? {})['cheatVib'] = ((s as any).cheatVib ?? 0);
          (s as any).cheatVib = undefined;
        }
        if (((s as any).notathomesleep ?? 0) > 0) {
          ((s as any).sleepVars = (s as any).sleepVars ?? {})['notathomesleep'] = ((s as any).notathomesleep ?? 0);
          (s as any).notathomesleep = undefined;
        }
        if (((s as any).Enable_nodream ?? 0) > 0) {
          ((s as any).sleepVars = (s as any).sleepVars ?? {})['cheat_nodream_chance'] = ((s as any).Enable_nodream ?? 0);
          (s as any).Enable_nodream = undefined;
        }
        ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_active'] = 1;
        ((s as any).sleepVars = (s as any).sleepVars ?? {})['dreams_active'] = 1;
        if (((s as any).budilnikOn ?? 0)       > 0) {
          ((s as any).alarmVars = (s as any).alarmVars ?? {})['alarmOn'] = ((s as any).budilnikOn ?? 0);
          (s as any).budilnikOn = undefined;
        }
        if (((s as any).timer ?? 0)            > 0) {
          ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerH'] = ((s as any).timer ?? 0);
          (s as any).timer = undefined;
        }
        if (((s as any).timerM ?? 0)           > 0) {
          ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerM'] = ((s as any).timerM ?? 0);
          (s as any).timerM = undefined;
        }
        if (((s as any).timerEnd ?? 0)         > 0) {
          ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerEndH'] = ((s as any).timerEnd ?? 0);
          (s as any).timerEnd = undefined;
        }
        if (((s as any).timerEndM ?? 0)        > 0) {
          ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerEndM'] = ((s as any).timerEndM ?? 0);
          (s as any).timerEndM = undefined;
        }
        if (((s as any).alarm_holiday ?? 0)    > 0) {
          ((s as any).alarmVars = (s as any).alarmVars ?? {})['alarm_holiday'] = ((s as any).alarm_holiday ?? 0);
          (s as any).alarm_holiday = undefined;
        }
        (s as any).npctemp = 264;
        ((s as any).npc_dna = (s as any).npc_dna ?? {})['A' + String(((s as any).npctemp ?? 0))] = '1290130369 1043654233 5049908515 3153411713 0721993774 2486220839 0288719745';
        ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yakov';
        ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yakov';
        ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
        ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yakov';
        ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19961215;
        ((s as any).npc_notes = (s as any).npc_notes ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yakov is a fitness-focused sports enthusiast with blond hair and a tanned complexion.';
        ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
        qspCall(s, 'npcstaticdefaults', 'defaults');
        ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
        ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
        ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'personal_trainer';
        ((s as any).npc_style = (s as any).npc_style ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
        (s as any).npctemp = 265;
        ((s as any).npc_dna = (s as any).npc_dna ?? {})['A' + String(((s as any).npctemp ?? 0))] = '1085950303 4348731991 6618084127 9067996922 8669859044 9431283301 0673267503';
        ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nestor';
        ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nestor';
        ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
        ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nestor';
        ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19930127;
        ((s as any).npc_notes = (s as any).npc_notes ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nestor is a gopnik with a reputation for being rude and aggressive. His motto seems to be "the younger, the better," which can be concerning. He has a tough demeanor, with dark hair and dark skin, giving off an intimidating presence.';
        ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
        qspCall(s, 'npcstaticdefaults', 'defaults');
        ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
        ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
        ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
        ((s as any).npc_style = (s as any).npc_style ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
        (s as any).npctemp = 266;
        ((s as any).npc_dna = (s as any).npc_dna ?? {})['A' + String(((s as any).npctemp ?? 0))] = '5654106058 6395942483 3363408422 7113656738 1111862818 8859290040 7960339191';
        ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Oleg';
        ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Oleg';
        ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
        ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Oleg';
        ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19950712;
        ((s as any).npc_notes = (s as any).npc_notes ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Oleg is a shy, young-looking guy with thick glasses, a slim frame, and very pale skin.';
        ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
        qspCall(s, 'npcstaticdefaults', 'defaults');
        ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
        ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
        ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'programmer';
        ((s as any).npc_style = (s as any).npc_style ?? {})['A' + String(((s as any).npctemp ?? 0))] = 3;
        if (((s as any).sp_rel ?? 0)                  > 0) {
          ((s as any).npc_rel = (s as any).npc_rel ?? {})['A264'] = ((s as any).sp_rel ?? 0);
          (s as any).sp_rel = undefined;
        }
        if (((s as any).gp_rel ?? 0)                  > 0) {
          ((s as any).npc_rel = (s as any).npc_rel ?? {})['A265'] = ((s as any).gp_rel ?? 0);
          (s as any).gp_rel = undefined;
        }
        if (((s as any).nd_rel ?? 0)                  > 0) {
          ((s as any).npc_rel = (s as any).npc_rel ?? {})['A266'] = ((s as any).nd_rel ?? 0);
          (s as any).nd_rel = undefined;
        }
        if (((s as any).nd_hj ?? 0)                   > 0) {
          (s as any).oleg_hj = ((s as any).nd_hj ?? 0);
          (s as any).nd_hj = undefined;
        }
        if (((s as any).nd_bj ?? 0)                   > 0) {
          (s as any).oleg_bj = ((s as any).nd_bj ?? 0);
          (s as any).nd_bj = undefined;
        }
        if (((s as any).nd_bjFail ?? 0)               > 0) {
          (s as any).oleg_bjFail = ((s as any).nd_bjFail ?? 0);
          (s as any).nd_bjFail = undefined;
        }
        if (((s as any).nd_bjDeep ?? 0)               > 0) {
          (s as any).oleg_bjDeep = ((s as any).nd_bjDeep ?? 0);
          (s as any).nd_bjDeep = undefined;
        }
        if (((s as any).nd_bjFailPuke ?? 0)           > 0) {
          (s as any).oleg_bjFailPuke = ((s as any).nd_bjFailPuke ?? 0);
          (s as any).nd_bjFailPuke = undefined;
        }
        if (((s as any).nd_bjFailFaint ?? 0)          > 0) {
          (s as any).oleg_bjFailFaint = ((s as any).nd_bjFailFaint ?? 0);
          (s as any).nd_bjFailFaint = undefined;
        }
        if (((s as any).nd_swall ?? 0)                > 0) {
          (s as any).oleg_swall = ((s as any).nd_swall ?? 0);
          (s as any).nd_swall = undefined;
        }
        if (((s as any).nd_vagCumInsideUnwanted ?? 0) > 0) {
          (s as any).oleg_vagCumInsideUnwanted = ((s as any).nd_vagCumInsideUnwanted ?? 0);
          (s as any).nd_vagCumInsideUnwanted = undefined;
        }
        if (((s as any).nd_vag ?? 0)                  > 0) {
          (s as any).oleg_vag = ((s as any).nd_vag ?? 0);
          (s as any).nd_vag = undefined;
        }
        if (((s as any).nd_vagCumInside ?? 0)         > 0) {
          (s as any).oleg_vagCumInside = ((s as any).nd_vagCumInside ?? 0);
          (s as any).nd_vagCumInside = undefined;
        }
        if (((s as any).nd_anal ?? 0)                 > 0) {
          (s as any).oleg_anal = ((s as any).nd_anal ?? 0);
          (s as any).nd_anal = undefined;
        }
        if (((s as any).nd_analCumInside ?? 0)        > 0) {
          (s as any).oleg_analCumInside = ((s as any).nd_analCumInside ?? 0);
          (s as any).nd_analCumInside = undefined;
        }
        if (((s as any).nd_vagCumInsideUnwanted ?? 0) > 0) {
          (s as any).oleg_vagCumInsideUnwanted = ((s as any).nd_vagCumInsideUnwanted ?? 0);
          (s as any).nd_vagCumInsideUnwanted = undefined;
        }
        if (((s as any).nd_piss ?? 0)                 > 0) {
          (s as any).oleg_piss = ((s as any).nd_piss ?? 0);
          (s as any).nd_piss = undefined;
        }
        if (((s as any).nd_doPornpos ?? 0)            > 0) {
          (s as any).oleg_doPornpos = ((s as any).nd_doPornpos ?? 0);
          (s as any).nd_doPornpos = undefined;
        }
        if (((s as any).nd_pornPos ?? 0)              > 0) {
          (s as any).oleg_pornPos = ((s as any).nd_pornPos ?? 0);
          (s as any).nd_pornPos = undefined;
        }
        if (((s as any).gp_bj ?? 0)                   > 0) {
          (s as any).nestor_bj = ((s as any).gp_bj ?? 0);
          (s as any).gp_bj = undefined;
        }
        if (((s as any).gp_bjFail ?? 0)               > 0) {
          (s as any).nestor_bjFail = ((s as any).gp_bjFail ?? 0);
          (s as any).gp_bjFail = undefined;
        }
        if (((s as any).gp_bjDeep ?? 0)               > 0) {
          (s as any).nestor_bjDeep = ((s as any).gp_bjDeep ?? 0);
          (s as any).gp_bjDeep = undefined;
        }
        if (((s as any).gp_bjFailPuke ?? 0)           > 0) {
          (s as any).nestor_bjFailPuke = ((s as any).gp_bjFailPuke ?? 0);
          (s as any).gp_bjFailPuke = undefined;
        }
        if (((s as any).gp_bjFailFaint ?? 0)          > 0) {
          (s as any).nestor_bjFailFaint = ((s as any).gp_bjFailFaint ?? 0);
          (s as any).gp_bjFailFaint = undefined;
        }
        if (((s as any).gp_swall ?? 0)                > 0) {
          (s as any).nestor_swall = ((s as any).gp_swall ?? 0);
          (s as any).gp_swall = undefined;
        }
        if (((s as any).gp_vagCumInsideUnwanted ?? 0) > 0) {
          (s as any).nestor_vagCumInsideUnwanted = ((s as any).gp_vagCumInsideUnwanted ?? 0);
          (s as any).gp_vagCumInsideUnwanted = undefined;
        }
        if (((s as any).gp_vag ?? 0)                  > 0) {
          (s as any).nestor_vag = ((s as any).gp_vag ?? 0);
          (s as any).gp_vag = undefined;
        }
        if (((s as any).gp_vagCumInside ?? 0)         > 0) {
          (s as any).nestor_vagCumInside = ((s as any).gp_vagCumInside ?? 0);
          (s as any).gp_vagCumInside = undefined;
        }
        if (((s as any).gp_anal ?? 0)                 > 0) {
          (s as any).nestor_anal = ((s as any).gp_anal ?? 0);
          (s as any).gp_anal = undefined;
        }
        if (((s as any).gp_analCumInside ?? 0)        > 0) {
          (s as any).nestor_analCumInside = ((s as any).gp_analCumInside ?? 0);
          (s as any).gp_analCumInside = undefined;
        }
        if (((s as any).gp_vagCumInsideUnwanted ?? 0) > 0) {
          (s as any).nestor_vagCumInsideUnwanted = ((s as any).gp_vagCumInsideUnwanted ?? 0);
          (s as any).gp_vagCumInsideUnwanted = undefined;
        }
        if (((s as any).gp_doPornpos ?? 0)            > 0) {
          (s as any).nestor_doPornpos = ((s as any).gp_doPornpos ?? 0);
          (s as any).gp_doPornpos = undefined;
        }
        if (((s as any).gp_pornPos ?? 0)              > 0) {
          (s as any).nestor_pornPos = ((s as any).gp_pornPos ?? 0);
          (s as any).gp_pornPos = undefined;
        }
        if (((s as any).sp_bj ?? 0)                   > 0) {
          (s as any).yakov_bj = ((s as any).sp_bj ?? 0);
          (s as any).sp_bj = undefined;
        }
        if (((s as any).sp_bjFail ?? 0)               > 0) {
          (s as any).yakov_bjFail = ((s as any).sp_bjFail ?? 0);
          (s as any).sp_bjFail = undefined;
        }
        if (((s as any).sp_bjDeep ?? 0)               > 0) {
          (s as any).yakov_bjDeep = ((s as any).sp_bjDeep ?? 0);
          (s as any).sp_bjDeep = undefined;
        }
        if (((s as any).sp_bjFailPuke ?? 0)           > 0) {
          (s as any).yakov_bjFailPuke = ((s as any).sp_bjFailPuke ?? 0);
          (s as any).sp_bjFailPuke = undefined;
        }
        if (((s as any).sp_bjFailFaint ?? 0)          > 0) {
          (s as any).yakov_bjFailFaint = ((s as any).sp_bjFailFaint ?? 0);
          (s as any).sp_bjFailFaint = undefined;
        }
        if (((s as any).sp_swall ?? 0)                > 0) {
          (s as any).yakov_swall = ((s as any).sp_swall ?? 0);
          (s as any).sp_swall = undefined;
        }
        if (((s as any).sp_vagCumInsideUnwanted ?? 0) > 0) {
          (s as any).yakov_vagCumInsideUnwanted = ((s as any).sp_vagCumInsideUnwanted ?? 0);
          (s as any).sp_vagCumInsideUnwanted = undefined;
        }
        if (((s as any).sp_vag ?? 0)                  > 0) {
          (s as any).yakov_vag = ((s as any).sp_vag ?? 0);
          (s as any).sp_vag = undefined;
        }
        if (((s as any).sp_vagCumInside ?? 0)         > 0) {
          (s as any).yakov_vagCumInside = ((s as any).sp_vagCumInside ?? 0);
          (s as any).sp_vagCumInside = undefined;
        }
        if (((s as any).sp_anal ?? 0)                 > 0) {
          (s as any).yakov_anal = ((s as any).sp_anal ?? 0);
          (s as any).sp_anal = undefined;
        }
        if (((s as any).sp_analCumInside ?? 0)        > 0) {
          (s as any).yakov_analCumInside = ((s as any).sp_analCumInside ?? 0);
          (s as any).sp_analCumInside = undefined;
        }
        if (((s as any).sp_vagCumInsideUnwanted ?? 0) > 0) {
          (s as any).yakov_vagCumInsideUnwanted = ((s as any).sp_vagCumInsideUnwanted ?? 0);
          (s as any).sp_vagCumInsideUnwanted = undefined;
        }
        if (((s as any).sp_doPornpos ?? 0)            > 0) {
          (s as any).yakov_doPornpos = ((s as any).sp_doPornpos ?? 0);
          (s as any).sp_doPornpos = undefined;
        }
        if (((s as any).sp_pornPos ?? 0)              > 0) {
          (s as any).yakov_pornPos = ((s as any).sp_pornPos ?? 0);
          (s as any).sp_pornPos = undefined;
        }
        if (((s as any).sp_hj ?? 0)                   > 0) {
          (s as any).yakov_hj = ((s as any).sp_hj ?? 0);
          (s as any).sp_hj = undefined;
        }
        if (((s as any).sp_dildo ?? 0)                > 0) {
          (s as any).yakov_dildo = ((s as any).sp_dildo ?? 0);
          (s as any).sp_dildo = undefined;
        }
        if (((s as any).oleg_analCumInside ?? 0)           > 0) {
          (s as any).oleg_cumAnal = ((s as any).oleg_analCumInside ?? 0);
        }
        if (((s as any).oleg_analCumInside ?? 0)           > 0) {
          (s as any).oleg_analCumInside = ((s as any).oleg_analCumInside ?? 0) - (((s as any).oleg_analCumInsideUnwanted ?? 0));
        }
        if (((s as any).oleg_analCumInsideUnwanted ?? 0)   > 0) {
          (s as any).oleg_analCumInsideUnwanted = ((s as any).oleg_analCumInsideUnwanted ?? 0) - (((s as any).oleg_analCumInside ?? 0));
        }
        if (((s as any).nestor_analCumInside ?? 0)         > 0) {
          (s as any).nestor_cumAnal = ((s as any).nestor_analCumInside ?? 0);
        }
        if (((s as any).nestor_analCumInside ?? 0)         > 0) {
          (s as any).nestor_analCumInside = ((s as any).nestor_analCumInside ?? 0) - (((s as any).nestor_analCumInsideUnwanted ?? 0));
        }
        if (((s as any).nestor_analCumInsideUnwanted ?? 0) > 0) {
          (s as any).nestor_analCumInsideUnwanted = ((s as any).nestor_analCumInsideUnwanted ?? 0) - (((s as any).nestor_analCumInside ?? 0));
        }
        if (((s as any).yakov_analCumInside ?? 0)          > 0) {
          (s as any).yakov_cumAnal = ((s as any).yakov_analCumInside ?? 0);
        }
        if (((s as any).yakov_analCumInside ?? 0)          > 0) {
          (s as any).yakov_analCumInside = ((s as any).yakov_analCumInside ?? 0) - (((s as any).yakov_analCumInsideUnwanted ?? 0));
        }
        if (((s as any).yakov_analCumInsideUnwanted ?? 0)  > 0) {
          (s as any).yakov_analCumInsideUnwanted = ((s as any).yakov_analCumInsideUnwanted ?? 0) - (((s as any).yakov_analCumInside ?? 0));
        }
        if (((s as any).oleg_vagCumInside ?? 0)            > 0) {
          (s as any).oleg_cumVag = ((s as any).oleg_vagCumInside ?? 0);
        }
        if (((s as any).oleg_vagCumInside ?? 0)            > 0) {
          (s as any).oleg_vagCumInside = ((s as any).oleg_vagCumInside ?? 0) - (((s as any).oleg_vagCumInsideUnwanted ?? 0));
        }
        if (((s as any).oleg_vagCumInsideUnwanted ?? 0)    > 0) {
          (s as any).oleg_vagCumInsideUnwanted = ((s as any).oleg_vagCumInsideUnwanted ?? 0) - (((s as any).oleg_vagCumInside ?? 0));
        }
        if (((s as any).nestor_vagCumInside ?? 0)          > 0) {
          (s as any).nestor_cumVag = ((s as any).nestor_vagCumInside ?? 0);
        }
        if (((s as any).nestor_vagCumInside ?? 0)          > 0) {
          (s as any).nestor_vagCumInside = ((s as any).nestor_vagCumInside ?? 0) - (((s as any).nestor_vagCumInsideUnwanted ?? 0));
        }
        if (((s as any).nestor_vagCumInsideUnwanted ?? 0)  > 0) {
          (s as any).nestor_vagCumInsideUnwanted = ((s as any).nestor_vagCumInsideUnwanted ?? 0) - (((s as any).nestor_vagCumInside ?? 0));
        }
        if (((s as any).yakov_vagCumInside ?? 0)           > 0) {
          (s as any).yakov_cumVag = ((s as any).yakov_vagCumInside ?? 0);
        }
        if (((s as any).yakov_vagCumInside ?? 0)           > 0) {
          (s as any).yakov_vagCumInside = ((s as any).yakov_vagCumInside ?? 0) - (((s as any).yakov_vagCumInsideUnwanted ?? 0));
        }
        if (((s as any).yakov_vagCumInsideUnwanted ?? 0)   > 0) {
          (s as any).yakov_vagCumInsideUnwanted = ((s as any).yakov_vagCumInsideUnwanted ?? 0) - (((s as any).yakov_vagCumInside ?? 0));
        }
        (s as any).gp_horny = undefined;
        (s as any).sp_horny = undefined;
        (s as any).nd_horny = undefined;
        (s as any).milkPause = undefined;
        (s as any).gp_cumVol = undefined;
        (s as any).sp_cumVol = undefined;
        (s as any).nd_cumVol = undefined;
        ((s as any).prostitute = (s as any).prostitute ?? {})['wl_block'] = (((s as any).prostitute ?? 0)?.['blocked']);
        ((s as any).prostitute = (s as any).prostitute ?? {})['full_block'] = 0;
        qspCall(s, 'homes_properties_attr', '');
        if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] < 1) {
          qspCall(s, 'homes_properties', 'set_homeless');
        } else {
          qspCall(s, 'homes_properties', 'set_home', (((s as any).home ?? 0)?.['current']));
        }
      } while (((s as any).pref_update_index ?? 0) <= 263);
    } while (((s as any).makeup_routine_update_index ?? 0) <= 4);
  }
  if (((s as any).temp_current_save_version ?? 0) < 90101) {
    if (((s as any).pornstudio ?? 0) > 1) {
      (s as any).pornstudio = 1;
    }
    if (((s as any).nichTanya ?? 0)?.['RelationshipBreakup'] !== 0  ||  ((s as any).nichTanya ?? 0)?.['RelationshipState'] !== 0) {
      if (((s as any).nichTanya ?? 0)?.['RelationshipBreakup'] === 1) {
        ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 2;
      }
      if (((s as any).nichTanya ?? 0)?.['RelationshipState'] === 10) {
        ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 1;
      }
      if (((s as any).nichTanya ?? 0)?.['RelationshipState'] === 20) {
        ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 3;
      }
      if (((s as any).nichTanya ?? 0)?.['RelationshipState'] === 1000) {
        ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 4;
      }
      if (((s as any).nichTanya ?? 0)?.['RelationshipState'] === 1010) {
        ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 5;
      }
      if (((s as any).nichTanya ?? 0)?.['RelationshipState'] === 1011) {
        ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 6;
      }
      qspCall(s, 'array', 'remove_element', 'nichTanya', 'RelationshipBreakup');
      qspCall(s, 'array', 'remove_element', 'nichTanya', 'RelationshipState');
    }
    (s as any)._n_timer = undefined;
    if (((s as any).theme ?? 0)?.['name'] === '') {
      if (((s as any).night_mode ?? 0) === 1) {
        qspCall(s, 'themes', 'set_black');
      } else {
        if (((s as any).night_mode ?? 0) === 2) {
          qspCall(s, 'themes', 'set_gray');
        } else {
          if (((s as any).night_mode ?? 0) === 3) {
            qspCall(s, 'themes', 'set_white');
          } else {
            if (((s as any).night_mode ?? 0) === 4) {
              qspCall(s, 'themes', 'set_custom');
            } else {
              qspCall(s, 'themes', 'set_dynamic');
            }
          }
        }
      }
      if (((s as any).theme ?? 0)?.['type'] === 'static') {
        qspCall(s, 'themes', 'apply_static');
      } else {
        if (((s as any).location_type ?? 0) === 'public_outdoors'  ||  ((s as any).location_type ?? 0) === 'secluded'  ||  ((s as any).location_type ?? 0) === 'event_outdoors') {
          qspCall(s, 'themes', 'apply_dynamic', 'outdoors');
        } else {
          qspCall(s, 'themes', 'apply_dynamic', 'indoors');
        }
      }
      (s as any).night_mode = undefined;
      (s as any).bgcolor = undefined;
      (s as any).bgcolor1 = undefined;
      (s as any).bgcolor2 = undefined;
      (s as any).bgcolor3 = undefined;
      (s as any).fgcolor = undefined;
      (s as any).fgcolor1 = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90200) {
    if (((s as any).genbsize ?? 0)      !== 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = ((s as any).genbsize ?? 0);
      (s as any).genbsize = undefined;
    }
    if (((s as any).nbsize ?? 0)      !== 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).nbsize ?? 0);
      (s as any).nbsize = undefined;
    }
    if (((s as any).pcs_mass ?? 0)?.['butt_gen'] === 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 20;
    }
    if (((s as any).salo ?? 0) !== 0) {
      (s as any).temp_totmass = ((s as any).salo ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0);
      (s as any).temp_totgenmass = 60 + (((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0);
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = (((s as any).temp_totmass ?? 0) * (((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0)) / ((s as any).temp_totgenmass ?? 0);
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = (((s as any).temp_totmass ?? 0) * (((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0)) / ((s as any).temp_totgenmass ?? 0);
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).temp_totmass ?? 0) - (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) - (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
      (s as any).salo = undefined;
      (s as any).temp_totmass = undefined;
      (s as any).temp_totgenmass = undefined;
    }
    if (((s as any).vofat ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['vofat'] = ((s as any).vofat ?? 0);
      (s as any).vofat = undefined;
    }
    if (((s as any).vhips ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((s as any).vhips ?? 0);
      (s as any).vhips = undefined;
    }
    if (((s as any).wratio ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = ((s as any).wratio ?? 0);
      (s as any).wratio = undefined;
    }
    if (((s as any).bratio ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bratio'] = ((s as any).bratio ?? 0);
      (s as any).bratio = undefined;
    }
    if (((s as any).hratio ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['hratio'] = ((s as any).hratio ?? 0);
      (s as any).hratio = undefined;
    }
    if (((s as any).magicf2b ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_magic'] = ((s as any).magicf2b ?? 0);
      (s as any).magicf2b = undefined;
    }
    if (((s as any).silicone_butt ?? 0)  !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_silicone'] = ((s as any).silicone_butt ?? 0);
      (s as any).silicone_butt = undefined;
    }
    if (((s as any).silicone ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_silicone'] = ((s as any).silicone ?? 0);
      (s as any).silicone = undefined;
    }
    if (((s as any).butt_cheat ?? 0)    !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_cheat'] = ((s as any).butt_cheat ?? 0);
      (s as any).butt_cheat = undefined;
    }
    if (((s as any).pcs_mass ?? 0)?.['bust_message'] === 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = (((s as any).pcs_mass ?? 0)?.['bust']);
    }
    if (((s as any).pcs_mass ?? 0)?.['butt_message'] === 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = (((s as any).pcs_mass ?? 0)?.['butt']);
    }
    if (((s as any).katjaQW ?? 0)?.['knows_masterbation'] > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_masturbation'] = (((s as any).katjaQW ?? 0)?.['knows_masterbation']);
      qspCall(s, 'array', 'remove_element', 'katjaQW', 'knows_masterbation');
    }
    if (((s as any).bmi_desc ?? 0)  !== '') {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bmi_desc'] = ((s as any).bmi_desc ?? 0);
      (s as any).bmi_desc = undefined;
    }
    if (((s as any).body ?? 0)    !== '') {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['desc'] = ((s as any).body ?? 0);
      (s as any).body = undefined;
    }
    if ((String((((s as any).start_type ?? 0)?.[0] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'sg') {
      ((s as any).temp_st = (s as any).temp_st ?? {})[0] = 'sg';
    } else {
      if ((String((((s as any).start_type ?? 0)?.[0] ?? 0)).slice((1)-1, ((1)-1)+(3))) === 'uni') {
        ((s as any).temp_st = (s as any).temp_st ?? {})[0] = 'uni';
      } else {
        ((s as any).temp_st = (s as any).temp_st ?? {})[0] = 'city';
      }
    }
    ((s as any).temp_st = (s as any).temp_st ?? {})[1] = (((s as any).start_type ?? 0)?.[1] ?? 0);
    if (((s as any).temp_st ?? 0)[1] === '') {
      ((s as any).temp_st = (s as any).temp_st ?? {})[1] = 'magic';
    }
    if (((s as any).alterstrtimg ?? 0) >= 8  &&  ((s as any).alterstrtimg ?? 0) <= 11) {
      ((s as any).temp_st = (s as any).temp_st ?? {})[2] = 'nerd';
      if (((s as any).alterstrtimg ?? 0) === 8) {
        ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'nerdqueen';
      } else {
        if (((s as any).alterstrtimg ?? 0) === 9) {
          ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'goodstudent';
        } else {
          if (((s as any).alterstrtimg ?? 0) === 10) {
            ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'computergeek';
          } else {
            ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'chessplayer';
          }
        }
      }
    } else {
      if (((s as any).alterstrtimg ?? 0) >= 12  &&  ((s as any).alterstrtimg ?? 0) <= 15) {
        ((s as any).temp_st = (s as any).temp_st ?? {})[2] = 'jock';
        if (((s as any).alterstrtimg ?? 0) === 12) {
          ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'volleyball';
        } else {
          if (((s as any).alterstrtimg ?? 0) === 13) {
            ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'dancer';
          } else {
            if (((s as any).alterstrtimg ?? 0) === 14) {
              ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'runner';
            } else {
              ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'football';
            }
          }
        }
      } else {
        if (((s as any).alterstrtimg ?? 0) >= 16  &&  ((s as any).alterstrtimg ?? 0) <= 17) {
          ((s as any).temp_st = (s as any).temp_st ?? {})[2] = 'cool';
          if (((s as any).alterstrtimg ?? 0) === 16) {
            ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'socialite';
          } else {
            if (((s as any).alterstrtimg ?? 0) === 17) {
              ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'beautiful';
            }
          }
        } else {
          if (((s as any).alterstrtimg ?? 0) >= 18  &&  ((s as any).alterstrtimg ?? 0) <= 21) {
            ((s as any).temp_st = (s as any).temp_st ?? {})[2] = 'gopnik';
            if (((s as any).alterstrtimg ?? 0) === 18) {
              ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'gopnikstart';
            } else {
              if (((s as any).alterstrtimg ?? 0) === 19) {
                ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'troublemaker';
              } else {
                if (((s as any).alterstrtimg ?? 0) === 20) {
                  ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'vitekgf';
                } else {
                  ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'alternative';
                }
              }
            }
          } else {
            if (((s as any).alterstrtimg ?? 0) >= 22  &&  ((s as any).alterstrtimg ?? 0) <= 28) {
              ((s as any).temp_st = (s as any).temp_st ?? {})[2] = 'outcast';
              if (((s as any).alterstrtimg ?? 0) === 22) {
                ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'friendless';
              } else {
                if (((s as any).alterstrtimg ?? 0) === 23) {
                  ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'uglyduckling';
                } else {
                  if (((s as any).alterstrtimg ?? 0) === 24) {
                    ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'goodgirl';
                  } else {
                    if (((s as any).alterstrtimg ?? 0) === 25) {
                      ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'slut';
                    } else {
                      ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'goth';
                    }
                  }
                }
              }
            } else {
              if (((s as any).alterstrtimg ?? 0) === 31) {
                ((s as any).temp_st = (s as any).temp_st ?? {})[2] = 'cool';
                ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'anorexic';
              } else {
                ((s as any).temp_st = (s as any).temp_st ?? {})[2] = 'custom';
                ((s as any).temp_st = (s as any).temp_st ?? {})[3] = 'custom';
              }
            }
          }
        }
      }
    }
    (s as any).start_type = undefined;
    (s as any).alterstrtimg = undefined;
    ((s as any).start_type = (s as any).start_type ?? {})['loc'] = (((s as any).temp_st ?? 0)?.[0] ?? 0);
    ((s as any).start_type = (s as any).start_type ?? {})['magic'] = (((s as any).temp_st ?? 0)?.[1] ?? 0);
    ((s as any).start_type = (s as any).start_type ?? {})['group'] = (((s as any).temp_st ?? 0)?.[2] ?? 0);
    ((s as any).start_type = (s as any).start_type ?? {})['cat'] = (((s as any).temp_st ?? 0)?.[3] ?? 0);
    (s as any).temp_st = undefined;
    if (((s as any).start_type ?? 0)?.['loc']  === '') {
      ((s as any).start_type = (s as any).start_type ?? {})['loc'] = 'city';
    }
    if (((s as any).start_type ?? 0)?.['magic']  === '') {
      ((s as any).start_type = (s as any).start_type ?? {})['magic'] = 'magic';
    }
    if (((s as any).start_type ?? 0)?.['group'] === '') {
      ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'outcast';
    }
    if (((s as any).start_type ?? 0)?.['cat']  === '') {
      ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'friendless';
    }
    if (Object.keys((s as any).fashionista ?? {}).length > 0) {
      do {
        if (((s as any).fashionista ?? 0)?.[String((s as any).i ?? 0)] === 1) {
          ((s as any).fashionista_dress = (s as any).fashionista_dress ?? {})[String((s as any).i ?? 0)] = 1;
          ((s as any).fashionista_dress_h = (s as any).fashionista_dress_h ?? {})[String((s as any).i ?? 0)] = (((s as any).fashionista_h ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
          ((s as any).fashionista_dress_b = (s as any).fashionista_dress_b ?? {})[String((s as any).i ?? 0)] = (((s as any).fashionista_b ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
          ((s as any).fashionista_dress_s = (s as any).fashionista_dress_s ?? {})[String((s as any).i ?? 0)] = (((s as any).fashionista_s ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
        }
        (s as any).i = ((s as any).i ?? 0) + (4);
        (s as any).fashionista = undefined;
        (s as any).fashionista_h = undefined;
        (s as any).fashionista_b = undefined;
        (s as any).fashionista_s = undefined;
      } while (((s as any).i ?? 0) <= 200);
    }
    if (((s as any).Trainpass_day ?? 0) !== 0) {
      ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = ((s as any).Trainpass_day ?? 0);
      (s as any).Trainpass_day = undefined;
    }
    (s as any).train_event = undefined;
    if (((s as any).therapist_key ?? 0)[1] > 0) {
      ((s as any).therapistQW = (s as any).therapistQW ?? {})['hotel_day'] = (((s as any).therapist_key ?? 0)?.[1] ?? 0);
      (s as any).therapist_key = undefined;
    }
    if (((s as any).therapist_key ?? 0) > 0) {
      ((s as any).therapistQW = (s as any).therapistQW ?? {})['hotel_key'] = ((s as any).therapist_key ?? 0);
      (s as any).therapist_key = undefined;
    }
    if (Object.keys((s as any).homes ?? {}).length === 16) {
      (s as any).homes = [...((s as any).homes ?? []), 'hotel_therapist'];
    }
    if (((s as any).home_name ?? 0)?.['hotel_therapist'] === '') {
      ((s as any).home_name = (s as any).home_name ?? {})['hotel_therapist'] = 'hotel_therapist';
      ((s as any).home_name = (s as any).home_name ?? {})['17'] = 'hotel_therapist';
    }
    if (Object.keys((s as any).homes ?? {}).length === 17) {
      (s as any).homes = [...((s as any).homes ?? []), 'pushkin_ballet_dorm'];
    }
    if (((s as any).home_name ?? 0)?.['pushkin_ballet_dorm'] === '') {
      ((s as any).home_name = (s as any).home_name ?? {})['pushkin_ballet_dorm'] = 'pushkin_ballet_dorm';
      ((s as any).home_name = (s as any).home_name ?? {})['18'] = 'pushkin_ballet_dorm';
    }
    (s as any).call_trace_enabled = undefined;
    (s as any).call_trace_shown = undefined;
    (s as any).call_trace_manual = undefined;
    (s as any).call_trace = undefined;
  }
  if (((s as any).temp_current_save_version ?? 0) < 90201) {
    if (((s as any).btwarn ?? 0) > 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['weight_warning'] = ((s as any).btwarn ?? 0);
      (s as any).btwarn = undefined;
    }
    if (((s as any).pcs_mass ?? 0)?.['body_message'] === 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = (((s as any).pcs_masss ?? 0)?.['body']);
    }
    (s as any).rej_idx = 0;
    (s as any).rej_sz = 0;
    while (true) {
      if (((s as any).rej_idx ?? 0) < ((s as any).rej_sz ?? 0)) {
        if (((s as any).ChildFath ?? 0)?.[String((s as any).rej_idx ?? 0)] === '') {
          (s as any).polkid = undefined;
          (s as any).kidname = undefined;
          (s as any).kidage = undefined;
          (s as any).daykid = undefined;
          (s as any).monthkid = undefined;
          (s as any).yearkid = undefined;
          (s as any).Babyptype = undefined;
          (s as any).ChildFath = undefined;
          (s as any).hairkid = undefined;
          (s as any).eyeskid = undefined;
          (s as any).cumarrcon = undefined;
          (s as any).FertEgg = ((s as any).FertEgg ?? 0) - (1);
        }
        (s as any).rej_idx = ((s as any).rej_idx ?? 0) + (1);
        break;
        if (Object.keys((s as any).Babyptype ?? {}).length <= 0) {
          (s as any).preg = 0;
          (s as any).pregChem = 0;
          (s as any).knowpreg = 0;
        }
      }
      (s as any).rej_idx = undefined;
      (s as any).rej_sz = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90202) {
    if (((s as any).BDSMtaxi ?? 0) === 1) {
      ((s as any).bdsmclub = (s as any).bdsmclub ?? {})['unlocked'] = 1;
      if (((s as any).BDSMClubIn ?? 0) === 1) {
        ((s as any).bdsmclub = (s as any).bdsmclub ?? {})['intro'] = 1;
        if (((s as any).BDSMrole ?? 0) === 's') {
          ((s as any).bdsmclub = (s as any).bdsmclub ?? {})['subtraining'] = 3;
        } else {
          ((s as any).bdsmclub = (s as any).bdsmclub ?? {})['domtraining'] = 1;
        }
        ((s as any).bdsmclub = (s as any).bdsmclub ?? {})['payday'] = ((s as any).BDSMpayDay ?? 0);
      }
    }
    (s as any).BDSMtaxi = undefined;
    (s as any).BDSMmeet = undefined;
    (s as any).BDSMClubIn = undefined;
    (s as any).BDSMClub = undefined;
    (s as any).DSMday = undefined;
    (s as any).BDSMrole = undefined;
    (s as any).BDSMpayDay = undefined;
    if (((s as any).motherQW ?? 0)?.['seen_dildos'] > 0  &&  (!((s as any).motherKnowDildo ?? 0))) {
      (s as any).motherKnowDildo = 1;
    }
    if (((s as any).motherQW ?? 0)?.['seen_dildos'] === 0  &&  ((s as any).motherKnowDildo ?? 0) > 0) {
      ((s as any).motherQW = (s as any).motherQW ?? {})['seen_dildos'] = 1;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90203) {
    qspCall(s, 'stat_sklattrib', '');
    (s as any).x = 1;
    do {
      (s as any).i = 0;
      do {
        (s as any).expadj = 20 * ((s as any).difficulty ?? 0);
        (s as any).tl = 0;
        do {
          (s as any).tltp = 0;
          while (true) {
            if (((s as any).insdlpflag ?? 0) === 1) {
              (s as any).insdlpflag = 0;
              (s as any).tltp = ((s as any).tltp ?? 0) + (10);
              break;
            }
            (s as any).tl = ((s as any).tl ?? 0) + (1);
            (s as any).tl = undefined;
            (s as any).tltp = undefined;
            (s as any).insdlpflag = undefined;
            if (((s as any).x ?? 0) === 1) {
              (s as any).attskltmp = (((s as any).att_name ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
            } else {
              (s as any).attskltmp = (((s as any).skl_name ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
            }
            (s as any).expadj = undefined;
            (s as any).attskltmp = undefined;
            (s as any).i = ((s as any).i ?? 0) + (1);
            (s as any).i = 0;
            (s as any).x = ((s as any).x ?? 0) + (1);
            (s as any).i = undefined;
            (s as any).x = undefined;
          }
        } while (((s as any).tl ?? 0) < Object.keys((s as any).traitattskl ?? {}).length);
      } while ((((s as any).x ?? 0) === 1  &&  ((s as any).i ?? 0) < Object.keys((s as any).att_name ?? {}).length)  ||  (((s as any).x ?? 0) === 2  &&  ((s as any).i ?? 0) < Object.keys((s as any).skl_name ?? {}).length));
    } while (((s as any).x ?? 0) < 3);
  }
  if (((s as any).temp_current_save_version ?? 0) < 90204) {
    if (((s as any).oleg_hj ?? 0)            > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['hj'] = ((s as any).oleg_hj ?? 0);
      (s as any).oleg_hj = undefined;
    }
    if (((s as any).oleg_bj ?? 0)            > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bj'] = ((s as any).oleg_bj ?? 0);
      (s as any).oleg_bj = undefined;
    }
    if (((s as any).oleg_bjFail ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bjFail'] = ((s as any).oleg_bjFail ?? 0);
      (s as any).oleg_bjFail = undefined;
    }
    if (((s as any).oleg_bjDeep ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bjDeep'] = ((s as any).oleg_bjDeep ?? 0);
      (s as any).oleg_bjDeep = undefined;
    }
    if (((s as any).oleg_bjFailPuke ?? 0)        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bjFailPuke'] = ((s as any).oleg_bjFailPuke ?? 0);
      (s as any).oleg_bjFailPuke = undefined;
    }
    if (((s as any).oleg_bjFailFaint ?? 0)        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bjFailFaint'] = ((s as any).oleg_bjFailFaint ?? 0);
      (s as any).oleg_bjFailFaint = undefined;
    }
    if (((s as any).oleg_swall ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['swall'] = ((s as any).oleg_swall ?? 0);
      (s as any).oleg_swall = undefined;
    }
    if (((s as any).oleg_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInsideUnwanted'] = ((s as any).oleg_vagCumInsideUnwanted ?? 0);
      (s as any).oleg_vagCumInsideUnwanted = undefined;
    }
    if (((s as any).oleg_vag ?? 0)            > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vag'] = ((s as any).oleg_vag ?? 0);
      (s as any).oleg_vag = undefined;
    }
    if (((s as any).oleg_vagCumInside ?? 0)      > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInside'] = ((s as any).oleg_vagCumInside ?? 0);
      (s as any).oleg_vagCumInside = undefined;
    }
    if (((s as any).oleg_anal ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['anal'] = ((s as any).oleg_anal ?? 0);
      (s as any).oleg_anal = undefined;
    }
    if (((s as any).oleg_analCumInside ?? 0)      > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['analCumInside'] = ((s as any).oleg_analCumInside ?? 0);
      (s as any).oleg_analCumInside = undefined;
    }
    if (((s as any).oleg_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInsideUnwanted'] = ((s as any).oleg_vagCumInsideUnwanted ?? 0);
      (s as any).oleg_vagCumInsideUnwanted = undefined;
    }
    if (((s as any).oleg_piss ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['piss'] = ((s as any).oleg_piss ?? 0);
      (s as any).oleg_piss = undefined;
    }
    if (((s as any).oleg_doPornpos ?? 0)        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['doPornpos'] = ((s as any).oleg_doPornpos ?? 0);
      (s as any).oleg_doPornpos = undefined;
    }
    if (((s as any).oleg_pornPos ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['pornPos'] = ((s as any).oleg_pornPos ?? 0);
      (s as any).oleg_pornPos = undefined;
    }
    if (((s as any).nestor_bj ?? 0)          > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bj'] = ((s as any).nestor_bj ?? 0);
      (s as any).nestor_bj = undefined;
    }
    if (((s as any).nestor_bjFail ?? 0)        > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bjFail'] = ((s as any).nestor_bjFail ?? 0);
      (s as any).nestor_bjFail = undefined;
    }
    if (((s as any).nestor_bjDeep ?? 0)        > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bjDeep'] = ((s as any).nestor_bjDeep ?? 0);
      (s as any).nestor_bjDeep = undefined;
    }
    if (((s as any).nestor_bjFailPuke ?? 0)      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bjFailPuke'] = ((s as any).nestor_bjFailPuke ?? 0);
      (s as any).nestor_bjFailPuke = undefined;
    }
    if (((s as any).nestor_bjFailFaint ?? 0)      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bjFailFaint'] = ((s as any).nestor_bjFailFaint ?? 0);
      (s as any).nestor_bjFailFaint = undefined;
    }
    if (((s as any).nestor_swall ?? 0)          > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['swall'] = ((s as any).nestor_swall ?? 0);
      (s as any).nestor_swall = undefined;
    }
    if (((s as any).nestor_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInsideUnwanted'] = ((s as any).nestor_vagCumInsideUnwanted ?? 0);
      (s as any).nestor_vagCumInsideUnwanted = undefined;
    }
    if (((s as any).nestor_vag ?? 0)          > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vag'] = ((s as any).nestor_vag ?? 0);
      (s as any).nestor_vag = undefined;
    }
    if (((s as any).nestor_vagCumInside ?? 0)      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInside'] = ((s as any).nestor_vagCumInside ?? 0);
      (s as any).nestor_vagCumInside = undefined;
    }
    if (((s as any).nestor_anal ?? 0)          > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['anal'] = ((s as any).nestor_anal ?? 0);
      (s as any).nestor_anal = undefined;
    }
    if (((s as any).nestor_analCumInside ?? 0)      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['analCumInside'] = ((s as any).nestor_analCumInside ?? 0);
      (s as any).nestor_analCumInside = undefined;
    }
    if (((s as any).nestor_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInsideUnwanted'] = ((s as any).nestor_vagCumInsideUnwanted ?? 0);
      (s as any).nestor_vagCumInsideUnwanted = undefined;
    }
    if (((s as any).nestor_doPornpos ?? 0)        > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['doPornpos'] = ((s as any).nestor_doPornpos ?? 0);
      (s as any).nestor_doPornpos = undefined;
    }
    if (((s as any).nestor_pornPos ?? 0)        > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['pornPos'] = ((s as any).nestor_pornPos ?? 0);
      (s as any).nestor_pornPos = undefined;
    }
    if (((s as any).yakov_bj ?? 0)            > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bj'] = ((s as any).yakov_bj ?? 0);
      (s as any).yakov_bj = undefined;
    }
    if (((s as any).yakov_bjFail ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bjFail'] = ((s as any).yakov_bjFail ?? 0);
      (s as any).yakov_bjFail = undefined;
    }
    if (((s as any).yakov_bjDeep ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bjDeep'] = ((s as any).yakov_bjDeep ?? 0);
      (s as any).yakov_bjDeep = undefined;
    }
    if (((s as any).yakov_bjFailPuke ?? 0)        > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bjFailPuke'] = ((s as any).yakov_bjFailPuke ?? 0);
      (s as any).yakov_bjFailPuke = undefined;
    }
    if (((s as any).yakov_bjFailFaint ?? 0)      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bjFailFaint'] = ((s as any).yakov_bjFailFaint ?? 0);
      (s as any).yakov_bjFailFaint = undefined;
    }
    if (((s as any).yakov_swall ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['swall'] = ((s as any).yakov_swall ?? 0);
      (s as any).yakov_swall = undefined;
    }
    if (((s as any).yakov_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInsideUnwanted'] = ((s as any).yakov_vagCumInsideUnwanted ?? 0);
      (s as any).yakov_vagCumInsideUnwanted = undefined;
    }
    if (((s as any).yakov_vag ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vag'] = ((s as any).yakov_vag ?? 0);
      (s as any).yakov_vag = undefined;
    }
    if (((s as any).yakov_vagCumInside ?? 0)      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInside'] = ((s as any).yakov_vagCumInside ?? 0);
      (s as any).yakov_vagCumInside = undefined;
    }
    if (((s as any).yakov_anal ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['anal'] = ((s as any).yakov_anal ?? 0);
      (s as any).yakov_anal = undefined;
    }
    if (((s as any).yakov_analCumInside ?? 0)      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['analCumInside'] = ((s as any).yakov_analCumInside ?? 0);
      (s as any).yakov_analCumInside = undefined;
    }
    if (((s as any).yakov_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInsideUnwanted'] = ((s as any).yakov_vagCumInsideUnwanted ?? 0);
      (s as any).yakov_vagCumInsideUnwanted = undefined;
    }
    if (((s as any).yakov_doPornpos ?? 0)        > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['doPornpos'] = ((s as any).yakov_doPornpos ?? 0);
      (s as any).yakov_doPornpos = undefined;
    }
    if (((s as any).yakov_pornPos ?? 0)        > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['pornPos'] = ((s as any).yakov_pornPos ?? 0);
      (s as any).yakov_pornPos = undefined;
    }
    if (((s as any).yakov_hj ?? 0)            > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['hj'] = ((s as any).yakov_hj ?? 0);
      (s as any).yakov_hj = undefined;
    }
    if (((s as any).yakov_dildo ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['dildo'] = ((s as any).yakov_dildo ?? 0);
      (s as any).yakov_dildo = undefined;
    }
    if (((s as any).rentLeft ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = ((s as any).rentLeft ?? 0);
      (s as any).rentLeft = undefined;
    }
    if (((s as any).weekNum ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = ((s as any).weekNum ?? 0);
      (s as any).weekNum = undefined;
    }
    if (((s as any).rentWeekNum ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekNum'] = ((s as any).rentWeekNum ?? 0);
      (s as any).rentWeekNum = undefined;
    }
    if (((s as any).servitudeLvl ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = ((s as any).servitudeLvl ?? 0);
      (s as any).servitudeLvl = undefined;
    }
    if (((s as any).servicePaid ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['servicePaid'] = ((s as any).servicePaid ?? 0);
      (s as any).servicePaid = undefined;
    }
    if (((s as any).cashPaid ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['cashPaid'] = ((s as any).cashPaid ?? 0);
      (s as any).cashPaid = undefined;
    }
    if (((s as any).pavSharedAptEnabled ?? 0)      > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['enabled'] = ((s as any).pavSharedAptEnabled ?? 0);
      (s as any).pavSharedAptEnabled = undefined;
    }
    if (((s as any).pavIntroStep ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = ((s as any).pavIntroStep ?? 0);
      (s as any).pavIntroStep = undefined;
    }
    if (((s as any).rentWeekly ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekly'] = ((s as any).rentWeekly ?? 0);
      (s as any).rentWeekly = undefined;
    }
    if (((s as any).price ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = ((s as any).price ?? 0);
      (s as any).price = undefined;
    }
    if (((s as any).vcard ?? 0)            > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['vintage_card'] = ((s as any).vcard ?? 0);
      (s as any).vcard = undefined;
    }
    if (((s as any).card ?? 0)              > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['card'] = ((s as any).card ?? 0);
      (s as any).card = undefined;
    }
    if (((s as any).sexCh ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['sexCh'] = ((s as any).sexCh ?? 0);
      (s as any).sexCh = undefined;
    }
    if (((s as any).actionR ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['actionR'] = ((s as any).actionR ?? 0);
      (s as any).actionR = undefined;
    }
    if (((s as any).seenAd ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['seenAd'] = ((s as any).seenAd ?? 0);
      (s as any).seenAd = undefined;
    }
    if (((s as any).gobelen ?? 0)            > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tapestry'] = ((s as any).gobelen ?? 0);
      (s as any).gobelen = undefined;
    }
    if (((s as any).GarTorgItem ?? 0)          > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['trinkets_garage'] = ((s as any).GarTorgItem ?? 0);
      (s as any).GarTorgItem = undefined;
    }
    if (((s as any).TovarL ?? 0)            > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['trinkets_home'] = ((s as any).TovarL ?? 0);
      (s as any).TovarL = undefined;
    }
    if (((s as any).perenGarTov ?? 0) > 0) {
      (s as any).perenGarTov = undefined;
    }
    if (((s as any).mc_inventory ?? 0)?.['refill_bottle'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['refill_bottle_water'] = (((s as any).mc_inventory ?? 0)?.['refill_bottle']);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['refill_bottle'] = 1;
    }
    (s as any).kuhdrova = undefined;
    if (((s as any).Oleg ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['cumAnal'] = (((s as any).Oleg ?? 0)?.['analCumInside']);
    }
    if (((s as any).Oleg ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['analCumInside'] = ((s as any).Oleg['analCumInside'] ?? 0) - ((((s as any).Oleg ?? 0)?.['analCumInsideUnwanted']));
    }
    if (((s as any).Oleg ?? 0)?.['analCumInsideUnwanted']  > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['analCumInsideUnwanted'] = ((s as any).Oleg['analCumInsideUnwanted'] ?? 0) - ((((s as any).Oleg ?? 0)?.['analCumInside']));
    }
    if (((s as any).Nestor ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['cumAnal'] = (((s as any).Nestor ?? 0)?.['analCumInside']);
    }
    if (((s as any).Nestor ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['analCumInside'] = ((s as any).Nestor['analCumInside'] ?? 0) - ((((s as any).Nestor ?? 0)?.['analCumInsideUnwanted']));
    }
    if (((s as any).Nestor ?? 0)?.['analCumInsideUnwanted']  > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['analCumInsideUnwanted'] = ((s as any).Nestor['analCumInsideUnwanted'] ?? 0) - ((((s as any).Nestor ?? 0)?.['analCumInside']));
    }
    if (((s as any).Yakov ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['cumAnal'] = (((s as any).Yakov ?? 0)?.['analCumInside']);
    }
    if (((s as any).Yakov ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['analCumInside'] = ((s as any).Yakov['analCumInside'] ?? 0) - ((((s as any).Yakov ?? 0)?.['analCumInsideUnwanted']));
    }
    if (((s as any).Yakov ?? 0)?.['analCumInsideUnwanted']  > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['analCumInsideUnwanted'] = ((s as any).Yakov['analCumInsideUnwanted'] ?? 0) - ((((s as any).Yakov ?? 0)?.['analCumInside']));
    }
    if (((s as any).Oleg ?? 0)?.['vagCumInside']        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['cumVag'] = (((s as any).Oleg ?? 0)?.['vagCumInside']);
    }
    if (((s as any).Oleg ?? 0)?.['vagCumInside']        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInside'] = ((s as any).Oleg['vagCumInside'] ?? 0) - ((((s as any).Oleg ?? 0)?.['vagCumInsideUnwanted']));
    }
    if (((s as any).Oleg ?? 0)?.['vagCumInsideUnwanted']    > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInsideUnwanted'] = ((s as any).Oleg['vagCumInsideUnwanted'] ?? 0) - ((((s as any).Oleg ?? 0)?.['vagCumInside']));
    }
    if (((s as any).Nestor ?? 0)?.['vagCumInside']      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['cumVag'] = (((s as any).Nestor ?? 0)?.['vagCumInside']);
    }
    if (((s as any).Nestor ?? 0)?.['vagCumInside']      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInside'] = ((s as any).Nestor['vagCumInside'] ?? 0) - ((((s as any).Nestor ?? 0)?.['vagCumInsideUnwanted']));
    }
    if (((s as any).Nestor ?? 0)?.['vagCumInsideUnwanted']  > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInsideUnwanted'] = ((s as any).Nestor['vagCumInsideUnwanted'] ?? 0) - ((((s as any).Nestor ?? 0)?.['vagCumInside']));
    }
    if (((s as any).Yakov ?? 0)?.['vagCumInside']      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['cumVag'] = (((s as any).Yakov ?? 0)?.['vagCumInside']);
    }
    if (((s as any).Yakov ?? 0)?.['vagCumInside']      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInside'] = ((s as any).Yakov['vagCumInside'] ?? 0) - ((((s as any).Yakov ?? 0)?.['vagCumInsideUnwanted']));
    }
    if (((s as any).Yakov ?? 0)?.['vagCumInsideUnwanted']  > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInsideUnwanted'] = ((s as any).Yakov['vagCumInsideUnwanted'] ?? 0) - ((((s as any).Yakov ?? 0)?.['vagCumInside']));
    }
    if (((s as any).NarkImmune ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cheat_immune'] = ((s as any).NarkImmune ?? 0);
      (s as any).NarkImmune = undefined;
    }
    if (((s as any).SNarkPriton ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['city_drugden'] = ((s as any).SNarkPriton ?? 0);
      (s as any).SNarkPriton = undefined;
    }
    if (((s as any).snarkozak ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['pav_dropoff'] = ((s as any).snarkozak ?? 0);
      (s as any).snarkozak = undefined;
    }
    if (((s as any).siga_bum ?? 0)          > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) + (1);
      (s as any).siga_bum = undefined;
    }
    if (((s as any).smoker ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_used'] = ((s as any).smoker ?? 0);
      (s as any).smoker = undefined;
    }
    if (((s as any).smoke_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_exp'] = ((s as any).smoke_exp ?? 0);
      (s as any).smoke_exp = undefined;
    }
    if (((s as any).smokerneed ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_need'] = ((s as any).smokerneed ?? 0);
      (s as any).smokerneed = undefined;
    }
    if (((s as any).smokeDay ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_day'] = ((s as any).smokeDay ?? 0);
      (s as any).smokeDay = undefined;
    }
    if (((s as any).smokeHour ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_hour'] = ((s as any).smokeHour ?? 0);
      (s as any).smokeHour = undefined;
    }
    if (((s as any).smokeminut ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_minute'] = ((s as any).smokeminut ?? 0);
      (s as any).smokeminut = undefined;
    }
    if (((s as any).joint ?? 0)          < 0) {
      (s as any).joint = undefined;
    }
    if (((s as any).joint ?? 0)          > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['joints'] = ((s as any).joint ?? 0);
      (s as any).joint = undefined;
    }
    if (((s as any).jointhigh ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_high'] = ((s as any).jointhigh ?? 0);
      (s as any).jointhigh = undefined;
    }
    if (((s as any).joint_smoked ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_used'] = ((s as any).joint_smoked ?? 0);
      (s as any).joint_smoked = undefined;
    }
    if (((s as any).joint_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_exp'] = ((s as any).joint_exp ?? 0);
      (s as any).joint_exp = undefined;
    }
    if (((s as any).jointday ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_day'] = ((s as any).jointday ?? 0);
      (s as any).jointday = undefined;
    }
    if (((s as any).jointhour ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_hour'] = ((s as any).jointhour ?? 0);
      (s as any).jointhour = undefined;
    }
    if (((s as any).jointminut ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_minute'] = ((s as any).jointminut ?? 0);
      (s as any).jointminut = undefined;
    }
    if (((s as any).SNarkTimes ?? 0)?.['inject']    > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_inject'] = (((s as any).SNarkTimes ?? 0)?.['inject']);
    }
    if (((s as any).StrongNarkota ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_high'] = ((s as any).StrongNarkota ?? 0);
      (s as any).StrongNarkota = undefined;
    }
    if (((s as any).SNarkTimes ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_used'] = ((s as any).SNarkTimes ?? 0);
      (s as any).SNarkTimes = undefined;
    }
    if (((s as any).heroin_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_exp'] = ((s as any).heroin_exp ?? 0);
      (s as any).heroin_exp = undefined;
    }
    if (((s as any).SLomka ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_need'] = ((s as any).SLomka ?? 0);
      (s as any).SLomka = undefined;
    }
    if (((s as any).narkozakday ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_day'] = ((s as any).narkozakday ?? 0);
      (s as any).narkozakday = undefined;
    }
    if (((s as any).NarkShmaraTimes ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_whore'] = ((s as any).NarkShmaraTimes ?? 0);
      (s as any).NarkShmaraTimes = undefined;
    }
    if (((s as any).SNarkvnesh ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_penalty'] = ((s as any).SNarkvnesh ?? 0);
      (s as any).SNarkvnesh = undefined;
    }
    if (((s as any).dur ?? 0)            > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cocaine'] = ((s as any).dur ?? 0);
      (s as any).dur = undefined;
    }
    if (((s as any).nark ?? 0)            > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = ((s as any).nark ?? 0);
      (s as any).nark = undefined;
    }
    if (((s as any).cocaine_count ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_used'] = ((s as any).cocaine_count ?? 0);
      (s as any).cocaine_count = undefined;
    }
    if (((s as any).cocaine_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_exp'] = ((s as any).cocaine_exp ?? 0);
      (s as any).cocaine_exp = undefined;
    }
    if (((s as any).narkday ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_day'] = ((s as any).narkday ?? 0);
      (s as any).narkday = undefined;
    }
    if (((s as any).narkoman ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_addict'] = ((s as any).narkoman ?? 0);
      (s as any).narkoman = undefined;
    }
    if (((s as any).willday_cocaine ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_willday'] = ((s as any).willday_cocaine ?? 0);
      (s as any).willday_cocaine = undefined;
    }
    if (((s as any).amphetamine ?? 0)        > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['amphetamine'] = ((s as any).amphetamine ?? 0);
      (s as any).amphetamine = undefined;
    }
    if (((s as any).amphHigh ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_high'] = ((s as any).amphHigh ?? 0);
      (s as any).amphHigh = undefined;
    }
    if (((s as any).amphetamine_count ?? 0)    > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_used'] = ((s as any).amphetamine_count ?? 0);
      (s as any).amphetamine_count = undefined;
    }
    if (((s as any).amphetamine_exp ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_exp'] = ((s as any).amphetamine_exp ?? 0);
      (s as any).amphetamine_exp = undefined;
    }
    if (((s as any).amphIntake ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_intake'] = ((s as any).amphIntake ?? 0);
      (s as any).amphIntake = undefined;
    }
    if (((s as any).amphWithdrawl ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_withdrawl'] = ((s as any).amphWithdrawl ?? 0);
      (s as any).amphWithdrawl = undefined;
    }
    if (((s as any).amphetamineBonus ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_bonus'] = ((s as any).amphetamineBonus ?? 0);
      (s as any).amphetamineBonus = undefined;
    }
    if (((s as any).mentats_have ?? 0)        > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mentats'] = ((s as any).mentats_have ?? 0);
      (s as any).mentats_have = undefined;
    }
    if (((s as any).mentats_dose ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['mentats_dose'] = ((s as any).mentats_dose ?? 0);
      (s as any).mentats_dose = undefined;
    }
    if (((s as any).alcohol_count ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['alcohol_used'] = ((s as any).alcohol_count ?? 0);
      (s as any).alcohol_count = undefined;
    }
    if (((s as any).alcohol_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['alcohol_exp'] = ((s as any).alcohol_exp ?? 0);
      (s as any).alcohol_exp = undefined;
    }
    if (((s as any).aphrodisiac_have ?? 0)      > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['aphrodisiac'] = ((s as any).aphrodisiac_have ?? 0);
      (s as any).aphrodisiac_have = undefined;
    }
    if (((s as any).aphrodisiac_addiction ?? 0)  > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_addict'] = ((s as any).aphrodisiac_addiction ?? 0);
      (s as any).aphrodisiac_addiction = undefined;
    }
    if (((s as any).aphrodisiac_timer ?? 0)    > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_timer'] = ((s as any).aphrodisiac_timer ?? 0);
      (s as any).aphrodisiac_timer = undefined;
    }
    if (((s as any).aphrodisiac_overdose ?? 0)    > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_overdose'] = ((s as any).aphrodisiac_overdose ?? 0);
      (s as any).aphrodisiac_overdose = undefined;
    }
    if (((s as any).aphrodisiac_msg ?? 0)      !== '') {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_msg'] = ((s as any).aphrodisiac_msg ?? 0);
      (s as any).aphrodisiac_msg = undefined;
    }
    if (((s as any).steroid_have ?? 0)        > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['steroids'] = ((s as any).steroid_have ?? 0);
      (s as any).steroid_have = undefined;
    }
    if (((s as any).steroid_counter ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_used'] = ((s as any).steroid_counter ?? 0);
      (s as any).steroid_counter = undefined;
    }
    if (((s as any).steroid_dose ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_dose'] = ((s as any).steroid_dose ?? 0);
      (s as any).steroid_dose = undefined;
    }
    if (((s as any).bcream_have ?? 0)        > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['breastcream'] = ((s as any).bcream_have ?? 0);
      (s as any).bcream_have = undefined;
    }
    if (((s as any).bcream_used ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['breastcream_dose'] = ((s as any).bcream_used ?? 0);
      (s as any).bcream_used = undefined;
    }
    ((s as any).home_name = (s as any).home_name ?? {})['gad_gpbarn'] = 'grandparents_house';
    qspFunc(s, 'npc_preferences[\'A14\']');
    if ((Array.isArray((s as any).npc_pref_traits) ? ((s as any).npc_pref_traits as any[]).indexOf('body_ass_heart') : -1) < 0) {
      qspCall(s, 'npc_set_preference', 'A14', 'body_ass_heart', 'like');
    }
    (s as any).npc_pref_traits = undefined;
    if (((s as any).begsec ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['joined_team'] = ((s as any).begsec ?? 0);
      (s as any).begsec = undefined;
    }
    if (((s as any).run_comp_day ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['comp_day'] = ((s as any).run_comp_day ?? 0);
      (s as any).run_comp_day = undefined;
    }
    if (((s as any).kolsorev ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['races_ran'] = ((s as any).kolsorev ?? 0);
      (s as any).kolsorev = undefined;
    }
    if (((s as any).razradbeg ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['prof_stage'] = ((s as any).razradbeg ?? 0);
      (s as any).razradbeg = undefined;
    }
    if (((s as any).bronzebeg ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['bronze_medals'] = ((s as any).bronzebeg ?? 0);
      (s as any).bronzebeg = undefined;
    }
    if (((s as any).silverbeg ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['silver_medals'] = ((s as any).silverbeg ?? 0);
      (s as any).silverbeg = undefined;
    }
    if (((s as any).goldbeg ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['gold_medals'] = ((s as any).goldbeg ?? 0);
      (s as any).goldbeg = undefined;
    }
    if (((s as any).razradbegK ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['qualifiers'] = ((s as any).razradbegK ?? 0);
      (s as any).razradbegK = undefined;
    }
    if (((s as any).razradbegEB ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['champ_bronze'] = ((s as any).razradbegEB ?? 0);
      (s as any).razradbegEB = undefined;
    }
    if (((s as any).razradbegES ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['champ_silver'] = ((s as any).razradbegES ?? 0);
      (s as any).razradbegES = undefined;
    }
    if (((s as any).razradbegEG ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['champ_gold'] = ((s as any).razradbegEG ?? 0);
      (s as any).razradbegEG = undefined;
    }
    if (((s as any).SchoolSorev ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_racetype'] = ((s as any).SchoolSorev ?? 0);
      (s as any).SchoolSorev = undefined;
    }
    if (((s as any).LocalRun ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_stage'] = ((s as any).LocalRun ?? 0);
      (s as any).LocalRun = undefined;
    }
    if (((s as any).swinbeg ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_wins1'] = ((s as any).swinbeg ?? 0);
      (s as any).swinbeg = undefined;
    }
    if (((s as any).swinbeggor ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_wins2'] = ((s as any).swinbeggor ?? 0);
      (s as any).swinbeggor = undefined;
    }
    if (((s as any).dress_ind_bra ?? 0)      > 0) {
      (s as any).dress_ind_bra = undefined;
    }
    if (((s as any).dress_ind_tits ?? 0)      > 0) {
      (s as any).dress_ind_tits = undefined;
    }
    if (((s as any).dress_ind_panties ?? 0)    > 0) {
      (s as any).dress_ind_panties = undefined;
    }
    if (((s as any).dress_ind_pussy ?? 0)      > 0) {
      (s as any).dress_ind_pussy = undefined;
    }
    if (((s as any).dress_ind_pussy_hairy ?? 0)  > 0) {
      (s as any).dress_ind_pussy_hairy = undefined;
    }
    if (((s as any).dress_ind_pantyrear ?? 0)    > 0) {
      (s as any).dress_ind_pantyrear = undefined;
    }
    if (((s as any).dress_ind_butt ?? 0)      > 0) {
      (s as any).dress_ind_butt = undefined;
    }
    if (((s as any).dress_ind_full ?? 0)      > 0) {
      (s as any).dress_ind_full = undefined;
    }
    if (((s as any).dress_ind_full_hairy ?? 0)    > 0) {
      (s as any).dress_ind_full_hairy = undefined;
    }
    if (((s as any).dress_out_bra ?? 0)      > 0) {
      (s as any).dress_out_bra = undefined;
    }
    if (((s as any).dress_out_tits ?? 0)      > 0) {
      (s as any).dress_out_tits = undefined;
    }
    if (((s as any).dress_out_panties ?? 0)    > 0) {
      (s as any).dress_out_panties = undefined;
    }
    if (((s as any).dress_out_pussy ?? 0)      > 0) {
      (s as any).dress_out_pussy = undefined;
    }
    if (((s as any).dress_out_pussy_hairy ?? 0)  > 0) {
      (s as any).dress_out_pussy_hairy = undefined;
    }
    if (((s as any).dress_out_pantyrear ?? 0)    > 0) {
      (s as any).dress_out_pantyrear = undefined;
    }
    if (((s as any).dress_out_butt ?? 0)      > 0) {
      (s as any).dress_out_butt = undefined;
    }
    if (((s as any).dress_out_butt_plug ?? 0)    > 0) {
      (s as any).dress_out_butt_plug = undefined;
    }
    if (((s as any).dress_out_full ?? 0)      > 0) {
      (s as any).dress_out_full = undefined;
    }
    if (((s as any).dress_out_full_hairy ?? 0)    > 0) {
      (s as any).dress_out_full_hairy = undefined;
    }
    if (((s as any).pants_ind_bra ?? 0)      > 0) {
      (s as any).pants_ind_bra = undefined;
    }
    if (((s as any).pants_ind_tits ?? 0)      > 0) {
      (s as any).pants_ind_tits = undefined;
    }
    if (((s as any).pants_ind_panties ?? 0)    > 0) {
      (s as any).pants_ind_panties = undefined;
    }
    if (((s as any).pants_ind_pussy ?? 0)      > 0) {
      (s as any).pants_ind_pussy = undefined;
    }
    if (((s as any).pants_ind_pussy_hairy ?? 0)  > 0) {
      (s as any).pants_ind_pussy_hairy = undefined;
    }
    if (((s as any).pants_ind_pantyrear ?? 0)    > 0) {
      (s as any).pants_ind_pantyrear = undefined;
    }
    if (((s as any).pants_ind_butt ?? 0)      > 0) {
      (s as any).pants_ind_butt = undefined;
    }
    if (((s as any).pants_ind_full ?? 0)      > 0) {
      (s as any).pants_ind_full = undefined;
    }
    if (((s as any).pants_ind_full_hairy ?? 0)    > 0) {
      (s as any).pants_ind_full_hairy = undefined;
    }
    if (((s as any).pants_out_bra ?? 0)      > 0) {
      (s as any).pants_out_bra = undefined;
    }
    if (((s as any).pants_out_tits ?? 0)      > 0) {
      (s as any).pants_out_tits = undefined;
    }
    if (((s as any).pants_out_panties ?? 0)    > 0) {
      (s as any).pants_out_panties = undefined;
    }
    if (((s as any).pants_out_pussy ?? 0)      > 0) {
      (s as any).pants_out_pussy = undefined;
    }
    if (((s as any).pants_out_pussy_hairy ?? 0)  > 0) {
      (s as any).pants_out_pussy_hairy = undefined;
    }
    if (((s as any).pants_out_pantyrear ?? 0)    > 0) {
      (s as any).pants_out_pantyrear = undefined;
    }
    if (((s as any).pants_out_butt ?? 0)      > 0) {
      (s as any).pants_out_butt = undefined;
    }
    if (((s as any).pants_out_butt_plug ?? 0)    > 0) {
      (s as any).pants_out_butt_plug = undefined;
    }
    if (((s as any).pants_out_full ?? 0)      > 0) {
      (s as any).pants_out_full = undefined;
    }
    if (((s as any).pants_out_full_hairy ?? 0)    > 0) {
      (s as any).pants_out_full_hairy = undefined;
    }
    if (((s as any).lact_ev ?? 0)?.['poli_totaldonatemoney'] <= 0  &&  ((s as any).lact_ev ?? 0)?.['poli_totalmilkdonated'] >= 5) {
      ((s as any).lact_ev = (s as any).lact_ev ?? {})['poli_totaldonatemoney'] = ((((s as any).lact_ev ?? {})?.['poli_totalmilkdonated'] ?? 0) / 5) * 10;
    }
    if (((s as any).soniaQW ?? 0)?.[String((s as any).soniafall_block ?? 0)] > 1  &&  ((s as any).soniaQW ?? 0)?.[String((s as any).soniafall_block ?? 0)] !== ((s as any).soniaQW ?? 0)?.['soniafall_block']) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['soniafall_block'] = (((s as any).soniaQW ?? 0)?.[String((s as any).soniafall_block ?? 0)] ?? 0);
      if (((s as any).soniaQW ?? 0)?.['homeinvite'] > 0) {
        ((s as any).soniaQW = (s as any).soniaQW ?? {})['homeinvite'] = 1;
      }
    }
    if (((s as any).vladimirday ?? 0) > 0  ||  ((s as any).vladimirQW ?? 0) > 0  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 0) {
      (s as any).temp_var1 = ((s as any).vladimirQW ?? 0);
      (s as any).vladimirQW = undefined;
      ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['stage'] = ((s as any).temp_var1 ?? 0);
      if (((s as any).vladimirday ?? 0) > 0) {
        ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['day'] = ((s as any).vladimirday ?? 0);
      }
      (s as any).vladimirday = undefined;
      (s as any).temp_var1 = undefined;
    }
    if ((Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A108') : -1) > -1) {
      (s as any).temp_pos = qspUntranslated(s, "arrpos('contact', 'A108')", { location: "saveupdater" });
      if (((String((((s as any).contactICode ?? 0)?.[String((s as any).temp_pos ?? 0)] ?? 0)).indexOf(String('telefon'))) + 1) > 0) {
        ((s as any).contactICode = (s as any).contactICode ?? {})[String((s as any).temp_pos ?? 0)] = (String((((s as any).contactICode ?? 0)?.[String((s as any).temp_pos ?? 0)] ?? 0)).split('\'telefon\', \'vladimir\'').join('\'vladimirQW_loc\', \'telephone_call\''));
      }
      if (((String((((s as any).contactISche ?? 0)?.[String((s as any).temp_pos ?? 0)] ?? 0)).indexOf(String('vladimirday'))) + 1) > 0) {
        ((s as any).contactISche = (s as any).contactISche ?? {})[String((s as any).temp_pos ?? 0)] = (String((((s as any).contactISche ?? 0)?.[String((s as any).temp_pos ?? 0)] ?? 0)).split('vladimirday').join('vladimirQW[\'day\']'));
      }
      (s as any).temp_pos = undefined;
    }
    if ((Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A192') : -1) > -1) {
      (s as any).temp_pos = qspUntranslated(s, "arrpos('contact', 'A192')", { location: "saveupdater" });
      if (((String((((s as any).contactOCode ?? 0)?.[String((s as any).temp_pos ?? 0)] ?? 0)).indexOf(String('telefon'))) + 1) > 0) {
        ((s as any).contactOCode = (s as any).contactOCode ?? {})[String((s as any).temp_pos ?? 0)] = (String((((s as any).contactOCode ?? 0)?.[String((s as any).temp_pos ?? 0)] ?? 0)).split('telefon').join('nastja'));
      }
      (s as any).temp_pos = undefined;
    }
    if (Object.keys((s as any).contact ?? {}).length > Object.keys((s as any).contactOSMSCode ?? {}).length) {
      (s as any).temp_maxi = 0;
      (s as any).temp_i = 0;
      do {
        ((s as any).contactOSMSCode = (s as any).contactOSMSCode ?? {})[String((s as any).temp_i ?? 0)] = '';
        ((s as any).contactOSMSSche = (s as any).contactOSMSSche ?? {})[String((s as any).temp_i ?? 0)] = '0';
        ((s as any).contactISMSCode = (s as any).contactISMSCode ?? {})[String((s as any).temp_i ?? 0)] = '';
        ((s as any).contactISMSSche = (s as any).contactISMSSche ?? {})[String((s as any).temp_i ?? 0)] = '0';
        (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
        (s as any).temp_maxi = undefined;
        (s as any).temp_i = undefined;
      } while (((s as any).temp_i ?? 0) < ((s as any).temp_maxi ?? 0));
    }
    if (((s as any).blackmailQW ?? 0)?.['init_flashloc'] !== ''  &&  ((s as any).blackmailQW ?? 0)?.['init_flashregion'] === '') {
      if (((String(((s as any).blackmailQW ?? 0)?.['init_flashloc']).indexOf(String('city'))) + 1) > 0) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashregion'] = 'city';
      } else {
        if (((String(((s as any).blackmailQW ?? 0)?.['init_flashloc']).indexOf(String('pav'))) + 1) > 0) {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashregion'] = 'pav';
        } else {
          if (((String(((s as any).blackmailQW ?? 0)?.['init_flashloc']).indexOf(String('gad'))) + 1) > 0) {
            ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashregion'] = 'gad';
          } else {
            if (((String(((s as any).blackmailQW ?? 0)?.['init_flashloc']).indexOf(String('pushkin'))) + 1) > 0) {
              ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashregion'] = 'pushkin';
            } else {
              if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
                ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashregion'] = 'city';
              } else {
                ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashregion'] = 'pav';
              }
            }
          }
        }
      }
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['total_material'] = 1;
    }
    if (((s as any).blackmailQW ?? 0)?.['init_flashimage'] !== ''  &&  (!((String(((s as any).blackmailQW ?? 0)?.['init_flashimage']).indexOf(String('.jpg'))) + 1))) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashimage'] = (((s as any).blackmailQW ?? 0)?.['init_flashimage']) + '.jpg';
    }
    if (((s as any).blackmailQW ?? 0)?.['blackmail_image_chosen'] === ''  &&  ((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['blackmail_image_chosen'] = (((s as any).blackmailQW ?? 0)?.['init_flashimage']);
    }
    if (((s as any).igor_krossdress ?? 0) > 0  &&  ((s as any).igor_eqwtday ?? 0) > 0  &&  (!((s as any).igor_progulkaday ?? 0))) {
      (s as any).igor_krossdress = 0;
    }
    if (Object.keys((s as any).transportVars ?? {}).length > 4) {
      (s as any)[transportVars] ? (s as any)[transportVars] = { ...(s as any)[temp_transportVars] } : (s as any)[transportVars] = { ...(s as any)[temp_transportVars] };
      (s as any).transportVars = undefined;
      ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = (((s as any).temp_transportVars ?? 0)?.['trainpass_day']);
      ((s as any).transportVars = (s as any).transportVars ?? {})['buspass_day'] = (((s as any).temp_transportVars ?? 0)?.['buspass_day']);
      ((s as any).transportVars = (s as any).transportVars ?? {})['train_event_day'] = (((s as any).temp_transportVars ?? 0)?.['train_event_day']);
      ((s as any).transportVars = (s as any).transportVars ?? {})['bus_event_day'] = (((s as any).temp_transportVars ?? 0)?.['bus_event_day']);
      (s as any).temp_transportVars = undefined;
    }
    (s as any).dynamicCommand = undefined;
    (s as any).bomzstartqwestdi = undefined;
    (s as any).workbomzdi = undefined;
    if (((s as any).bodyVars ?? 0)?.['cheat_staticAssets'] !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['body_staticAssets'] = (((s as any).bodyVars ?? 0)?.['cheat_staticAssets']);
      qspCall(s, 'array', 'remove_element', '$bodyVars', 'cheat_staticAssets');
    }
    qspCall(s, 'array', 'remove_element', '$bodyVars', 'cheat_staticAssets_text');
    if (((s as any).drugVars ?? 0)?.['cheat_immune'] !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['drugs_immune'] = (((s as any).drugVars ?? 0)?.['cheat_immune']);
      qspCall(s, 'array', 'remove_element', '$drugVars', 'cheat_immune');
    }
    qspCall(s, 'array', 'remove_element', '$drugVars', 'cheat_immune_text');
    if (((s as any).sleepVars ?? 0)?.['cheatVib'] !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['sleep_vib'] = (((s as any).sleepVars ?? 0)?.['cheatVib']);
    }
    qspCall(s, 'array', 'remove_element', '$sleepVars', 'cheatVib');
    if (((s as any).sleepVars ?? 0)?.['cheat_nodream_chance'] !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_dream_chance'] = (((s as any).sleepVars ?? 0)?.['cheat_nodream_chance']);
    }
    qspCall(s, 'array', 'remove_element', '$sleepVars', 'cheat_nodream_chance');
    if (((s as any).cheatConsole ?? 0)        !== 0  ||  ((s as any).cheatConsole ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['console'] = ((s as any).cheatConsole ?? 0);
      (s as any).cheatConsole = undefined;
    }
    if (((s as any).cheatwork ?? 0)        !== 0  ||  ((s as any).cheatwork ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['work'] = ((s as any).cheatwork ?? 0);
      (s as any).cheatwork = undefined;
    }
    if (((s as any).cheatWillpower ?? 0)      !== 0  ||  ((s as any).cheatWillpower ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['willpower'] = ((s as any).cheatWillpower ?? 0);
      (s as any).cheatWillpower = undefined;
    }
    if (((s as any).InfWillpwer ?? 0)        !== 0  ||  ((s as any).InfWillpwer ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['inf_willpower'] = ((s as any).InfWillpwer ?? 0);
      (s as any).InfWillpwer = undefined;
    }
    if (((s as any).cheatHapri ?? 0)        !== 0  ||  ((s as any).cheatHapri ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['always_brushed'] = ((s as any).cheatHapri ?? 0);
      (s as any).cheatHapri = undefined;
    }
    if (((s as any).autohairbrush ?? 0)      !== 0  ||  ((s as any).autohairbrush ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_brush'] = ((s as any).autohairbrush ?? 0);
      (s as any).autohairbrush = undefined;
    }
    if (((s as any).no_cum_leak ?? 0)        !== 0  ||  ((s as any).no_cum_leak ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_cum_leak'] = ((s as any).no_cum_leak ?? 0);
      (s as any).no_cum_leak = undefined;
    }
    if (((s as any).cyccustom ?? 0)        !== 0  ||  ((s as any).cyccustom ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = ((s as any).cyccustom ?? 0);
      (s as any).cyccustom = undefined;
    }
    if (((s as any).cheatNomakeup ?? 0)      !== 0  ||  ((s as any).cheatNomakeup ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['makeup_smear'] = ((s as any).cheatNomakeup ?? 0);
      (s as any).cheatNomakeup = undefined;
    }
    if (((s as any).cheatNoSweat ?? 0)        !== 0  ||  ((s as any).cheatNoSweat ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_sweat'] = ((s as any).cheatNoSweat ?? 0);
      (s as any).cheatNoSweat = undefined;
    }
    if (((s as any).cheatNoEat ?? 0)        !== 0  ||  ((s as any).cheatNoEat ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['hunger'] = ((s as any).cheatNoEat ?? 0);
      (s as any).cheatNoEat = undefined;
    }
    if (((s as any).cheatNoDrink ?? 0)        !== 0  ||  ((s as any).cheatNoDrink ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['thirst'] = ((s as any).cheatNoDrink ?? 0);
      (s as any).cheatNoDrink = undefined;
    }
    if (((s as any).cheatNoSleep ?? 0)        !== 0  ||  ((s as any).cheatNoSleep ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['sleep'] = ((s as any).cheatNoSleep ?? 0);
      (s as any).cheatNoSleep = undefined;
    }
    if (((s as any).cheatNoMood ?? 0)        !== 0  ||  ((s as any).cheatNoMood ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['mood'] = ((s as any).cheatNoMood ?? 0);
      (s as any).cheatNoMood = undefined;
    }
    if (((s as any).cheatNoFat ?? 0)        !== 0  ||  ((s as any).cheatNoFat ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fat'] = ((s as any).cheatNoFat ?? 0);
      (s as any).cheatNoFat = undefined;
    }
    if (((s as any).cheatHealth ?? 0)        !== 0  ||  ((s as any).cheatHealth ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['std'] = ((s as any).cheatHealth ?? 0);
      (s as any).cheatHealth = undefined;
    }
    if (((s as any).cheatPee ?? 0)          !== 0  ||  ((s as any).cheatPee ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['pee'] = ((s as any).cheatPee ?? 0);
      (s as any).cheatPee = undefined;
    }
    if (((s as any).cheatSlut ?? 0)        !== 0  ||  ((s as any).cheatSlut ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_periods'] = ((s as any).cheatSlut ?? 0);
      (s as any).cheatSlut = undefined;
    }
    if (((s as any).cheatHorny ?? 0)        !== 0  ||  ((s as any).cheatHorny ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['always_horny'] = ((s as any).cheatHorny ?? 0);
      (s as any).cheatHorny = undefined;
    }
    if (((s as any).fight_cheat ?? 0)        !== 0  ||  ((s as any).fight_cheat ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['win_fights'] = ((s as any).fight_cheat ?? 0);
      (s as any).fight_cheat = undefined;
    }
    if (((s as any).autocombat_cheat ?? 0)      !== 0  ||  ((s as any).autocombat_cheat ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_combat'] = ((s as any).autocombat_cheat ?? 0);
      (s as any).autocombat_cheat = undefined;
    }
    if (((s as any).cheat_NoPregnancy ?? 0)    !== 0  ||  ((s as any).cheat_NoPregnancy ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_pregnancy'] = ((s as any).cheat_NoPregnancy ?? 0);
      (s as any).cheat_NoPregnancy = undefined;
    }
    if (((s as any).pregspeedcheat ?? 0)      !== 0  ||  ((s as any).pregspeedcheat ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_speed'] = ((s as any).pregspeedcheat ?? 0);
      (s as any).pregspeedcheat = undefined;
    }
    if (((s as any).cheat_NoLactation ?? 0)    !== 0  ||  ((s as any).cheat_NoLactation ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_lactation'] = ((s as any).cheat_NoLactation ?? 0);
      (s as any).cheat_NoLactation = undefined;
    }
    if (((s as any).cheatBimbo ?? 0)        !== 0  ||  ((s as any).cheatBimbo ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['bimbo'] = ((s as any).cheatBimbo ?? 0);
      (s as any).cheatBimbo = undefined;
    }
    if (((s as any).cheatBimbo2 ?? 0)        !== 0  ||  ((s as any).cheatBimbo2 ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['smart_bimbo'] = ((s as any).cheatBimbo2 ?? 0);
      (s as any).cheatBimbo2 = undefined;
    }
    if (((s as any).cheatBimbo3 ?? 0)        !== 0  ||  ((s as any).cheatBimbo3 ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['suc_bimbo'] = ((s as any).cheatBimbo3 ?? 0);
      (s as any).cheatBimbo3 = undefined;
    }
    if (((s as any).cheatTime ?? 0)        !== 0  ||  ((s as any).cheatTime ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['time'] = ((s as any).cheatTime ?? 0);
      (s as any).cheatTime = undefined;
    }
    if (((s as any).random_bf_gf_cheat ?? 0)    !== 0  ||  ((s as any).random_bf_gf_cheat ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = ((s as any).random_bf_gf_cheat ?? 0);
      (s as any).random_bf_gf_cheat = undefined;
    }
    if (((s as any).cheat_street_robbers ?? 0)    !== 0  ||  ((s as any).cheat_street_robbers ?? 0)  !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = ((s as any).cheat_street_robbers ?? 0);
      (s as any).cheat_street_robbers = undefined;
    }
    if (((s as any).cheat_street_rapists ?? 0)    !== 0  ||  ((s as any).cheat_street_rapists ?? 0)  !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = ((s as any).cheat_street_rapists ?? 0);
      (s as any).cheat_street_rapists = undefined;
    }
    if (((s as any).Enable_nogameover ?? 0)    !== 0  ||  ((s as any).Enable_nogameover ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['gameover'] = ((s as any).Enable_nogameover ?? 0);
      (s as any).Enable_nogameover = undefined;
    }
    if (((s as any).cheatShaveLegs ?? 0)      !== 0  ||  ((s as any).cheatShaveLegs ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_leghair'] = ((s as any).cheatShaveLegs ?? 0);
      (s as any).cheatShaveLegs = undefined;
    }
    if (((s as any).editpornname ?? 0)        !== 0  ||  ((s as any).editpornname ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['rename_porn'] = ((s as any).editpornname ?? 0);
      (s as any).editpornname = undefined;
    }
    if (((s as any).enfullmorrout ?? 0)      !== 0  ||  ((s as any).enfullmorrout ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['full_morning_rout'] = ((s as any).enfullmorrout ?? 0);
      (s as any).enfullmorrout = undefined;
    }
    if (((s as any).Enable_sforma ?? 0)      !== 0  ||  ((s as any).Enable_sforma ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['school_clothing'] = ((s as any).Enable_sforma ?? 0);
      (s as any).Enable_sforma = undefined;
    }
    if (((s as any).therapist_weekly_cheat ?? 0)  !== 0  ||  ((s as any).therapist_weekly_cheat ?? 0)  !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['therapist_schedule'] = ((s as any).therapist_weekly_cheat ?? 0);
      (s as any).therapist_weekly_cheat = undefined;
    }
    if (((s as any).addictive_cheat ?? 0)  !== 0  ||  ((s as any).addictive_cheat ?? 0)  !== ''  ||  ((s as any).cheataddictive ?? 0)  !== ''  ||  ((s as any).cheataddictive ?? 0) !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_trait_addictive'] = ((s as any).addictive_cheat ?? 0);
      (s as any).addictive_cheat = undefined;
      (s as any).cheataddictive = undefined;
    }
    if (((s as any).cumeater_cheat ?? 0)  !== 0  ||  ((s as any).cumeater_cheat ?? 0)    !== ''  ||  ((s as any).cheatcumtrait ?? 0)    !== ''  ||  ((s as any).cheatcumtrait ?? 0)  !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_trait_cumeater'] = ((s as any).cumeater_cheat ?? 0);
      (s as any).cumeater_cheat = undefined;
      (s as any).cheatcumtrait = undefined;
    }
    if (((s as any).exhib_cheat ?? 0)    !== 0  ||  ((s as any).exhib_cheat ?? 0)    !== ''  ||  ((s as any).cheatexhib ?? 0)    !== ''  ||  ((s as any).cheatexhib ?? 0)    !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_trait_exhib'] = ((s as any).exhib_cheat ?? 0);
      (s as any).exhib_cheat = undefined;
      (s as any).cheatexhib = undefined;
    }
    if (((s as any).cheatKlisma ?? 0) !== '') {
      if ((!((s as any).cheatKlisma ?? 0))) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['enema'] = 1;
      }
      (s as any).cheatKlisma = undefined;
    }
    if (((s as any).Enable_auto_tampons ?? 0) !== '') {
      if ((!((s as any).Enable_auto_tampons ?? 0))) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 1;
      }
      (s as any).Enable_auto_tampons = undefined;
    }
    (s as any).InSleepWake = undefined;
    if (((s as any).npc_QW ?? 0)?.['A60'] !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['QW'] = (((s as any).npc_QW ?? 0)?.['A60']);
      qspCall(s, 'array', 'remove_element', 'npc_QW', 'A60');
    }
    if (((s as any).miraprost ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['prostitute'] = ((s as any).miraprost ?? 0);
      (s as any).miraprost = undefined;
    }
    if (((s as any).mirasex ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['had_sex'] = ((s as any).mirasex ?? 0);
      (s as any).mirasex = undefined;
    }
    if (((s as any).mirasextimes ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['Mitka_fucks'] = ((s as any).mirasextimes ?? 0);
      (s as any).mirasextimes = undefined;
    }
    if (((s as any).mira_no ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['emb_day'] = ((s as any).daystart ?? 0) + ((s as any).mira_no ?? 0);
      (s as any).mira_no = undefined;
    }
    if (((s as any).miraday ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['event_day'] = ((s as any).miraday ?? 0);
      (s as any).miraday = undefined;
    }
    if (((s as any).mirahorny ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).mirahorny ?? 0);
      (s as any).mirahorny = undefined;
    }
    if (((s as any).miralick ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['cuni_given'] = ((s as any).miralick ?? 0);
      (s as any).miralick = undefined;
    }
    if (((s as any).mira_stay ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = 1;
      (s as any).mira_stay = undefined;
    }
    if (((s as any).mira ?? 0)        !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = 20 - ((s as any).hour ?? 0);
      (s as any).mira = undefined;
    }
    if (((s as any).mira_go_blok ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = ((s as any).mira_go_blok ?? 0);
      (s as any).mira_go_blok = undefined;
    }
    if (((s as any).mira_guest ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['guest'] = 1;
      (s as any).mira_guest = undefined;
    }
    if (((s as any).mira_guestday ?? 0)  !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['guestday'] = ((s as any).mira_guestday ?? 0);
      (s as any).mira_guestday = undefined;
    }
    if (((s as any).miratalkday ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['talkday'] = ((s as any).miratalkday ?? 0);
      (s as any).miratalkday = undefined;
    }
    if (((s as any).miranudetalk ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['nudetalk'] = ((s as any).miranudetalk ?? 0);
      (s as any).miranudetalk = undefined;
    }
    if (((s as any).mirapickingtalk ?? 0)  !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['pickingtalk'] = ((s as any).mirapickingtalk ?? 0);
      (s as any).mirapickingtalk = undefined;
    }
    if (((s as any).mirapimp ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['pimp'] = ((s as any).mirapimp ?? 0);
      (s as any).mirapimp = undefined;
    }
    if (((s as any).Miraswimday ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['swimday'] = ((s as any).Miraswimday ?? 0);
      (s as any).Miraswimday = undefined;
    }
    if (((s as any).meadow ?? 0) > 0) {
      (s as any).gad_meadow_found = 1;
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['meadow'] = ((s as any).meadow ?? 0) - 1;
      (s as any).meadow = undefined;
    }
    if (((s as any).MiraLoc ?? 0)      !== 0) {
      qspCall(s, 'miroslava_schedule', '');
      (s as any).MiraLoc = undefined;
    }
    if (Object.keys((s as any).mitkabuhday ?? {}).length    !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['drunk_event'] = ((s as any).mitkabuhday ?? 0);
      (s as any).mitkabuhday = undefined;
    }
    if (Object.keys((s as any).mitkabuhmiraday ?? {}).length  !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['drunk_event'] = ((s as any).mitkabuhmiraday ?? 0);
      (s as any).mitkabuhmiraday = undefined;
    }
    if (((s as any).mitkaday ?? 0)            !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).mitkaday ?? 0);
      (s as any).mitkaday = undefined;
    }
    if (((s as any).kolyambaday ?? 0)          !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).kolyambaday ?? 0);
      (s as any).kolyambaday = undefined;
    }
    if (((s as any).vasyanday ?? 0)          !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).vasyanday ?? 0);
      (s as any).vasyanday = undefined;
    }
    if (((s as any).mitkaguysriver ?? 0)        !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['river_day'] = ((s as any).mitkaguysriver ?? 0);
      (s as any).mitkaguysriver = undefined;
    }
    if (((s as any).mitka_first_drink ?? 0)      !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['first_drink'] = ((s as any).mitka_first_drink ?? 0);
      (s as any).mitka_first_drink = undefined;
    }
    if (((s as any).mitkadrinkday ?? 0)        !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['drinkday'] = ((s as any).mitkadrinkday ?? 0);
      (s as any).mitkadrinkday = undefined;
    }
    if (((s as any).gadriver_gang ?? 0)        !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['river_gang'] = ((s as any).gadriver_gang ?? 0);
      (s as any).gadriver_gang = undefined;
    }
    if (((s as any).tpKnown ?? 0)?.['gadforest'] !== 0) {
      ((s as any).tpKnown = (s as any).tpKnown ?? {})['gad_forest'] = (((s as any).tpKnown ?? 0)?.['gadforest']);
      qspCall(s, 'array', 'remove_element', 'tpKnown', 'gadforest');
    }
    (s as any).textsexhunter = undefined;
    (s as any).textsexhunter2 = undefined;
    (s as any).textsexhunter3 = undefined;
    (s as any).textsexhunter4 = undefined;
    (s as any).textsexhunter5 = undefined;
    (s as any).textsexhunter6 = undefined;
    (s as any).textsexhunter7 = undefined;
    (s as any).textsexhunter8 = undefined;
    (s as any).textsexhunter9 = undefined;
    (s as any).textsexhunter10 = undefined;
    (s as any).textsexhunter11 = undefined;
    (s as any).textsexhunter12 = undefined;
    ((s as any).home_name = (s as any).home_name ?? {})['gad_gpyard'] = 'grandparents_house';
    ((s as any).home_name = (s as any).home_name ?? {})['gad_gpbath'] = 'grandparents_house';
    ((s as any).home_name = (s as any).home_name ?? {})['gad_gphouse'] = 'grandparents_house';
    ((s as any).home_name = (s as any).home_name ?? {})['gad_gpbarn'] = 'grandparents_house';
    qspCall(s, 'array', 'remove_element', '$home_name', 'gadsarai');
    qspCall(s, 'array', 'remove_element', '$home_name', 'gadbana');
    qspCall(s, 'array', 'remove_element', '$home_name', 'gadhouse');
    qspCall(s, 'array', 'remove_element', '$home_name', 'gadgarden');
    qspCall(s, 'array', 'remove_element', '$home_name', 'gaddvor');
  }
  if (((s as any).temp_current_save_version ?? 0) < 90300) {
    ((s as any).home_name = (s as any).home_name ?? {})['gad_swamphouse'] = 'hunters_lodge';
    ((s as any).home_name = (s as any).home_name ?? {})['gad_swamp_yard'] = 'hunters_lodge';
    qspCall(s, 'array', 'remove_element', '$home_name', 'swamphouse');
    qspCall(s, 'array', 'remove_element', '$home_name', 'swamp_yard');
    if (Object.keys((s as any).newspaperVars ?? {}).length === 0) {
      qspCall(s, 'newspaper', 'cikl');
    }
    if (((s as any).HotelRoom ?? 0)?.['pav_hotel'] !== 0) {
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = (((s as any).HotelRoom ?? 0)?.['pav_hotel']);
      qspCall(s, 'array', 'remove_element', 'HotelRoom', 'pav_hotel');
    }
    if (((s as any).hotelRoomDays ?? 0)?.['pav_hotel'] !== 0) {
      ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})['pav'] = (((s as any).hotelRoomDays ?? 0)?.['pav_hotel']);
      qspCall(s, 'array', 'remove_element', 'hotelRoomDays', 'pav_hotel');
    }
    if (((s as any).HotelRoom ?? 0)?.['city_hotel'] !== 0) {
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city'] = (((s as any).HotelRoom ?? 0)?.['city_hotel']);
      qspCall(s, 'array', 'remove_element', 'HotelRoom', 'city_hotel');
    }
    if (((s as any).hotelRoomDays ?? 0)?.['city_hotel'] !== 0) {
      ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})['city'] = (((s as any).hotelRoomDays ?? 0)?.['city_hotel']);
      qspCall(s, 'array', 'remove_element', 'HotelRoom', 'city_hotel');
    }
    if (((s as any).hotel ?? 0) !== '') {
      (s as any).hotel = undefined;
    }
    if (((s as any).therapistQW ?? 0)?.['met'] === 0  &&  ((s as any).therapistday ?? 0) !== 0) {
      ((s as any).therapistQW = (s as any).therapistQW ?? {})['met'] = 1;
    }
    if (((s as any).player_avatar ?? 0) === 1) {
      ((s as any).face_style = (s as any).face_style ?? {})['type'] = 1;
      ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = 'images/avatar.jpg';
      (s as any).player_avatar = undefined;
    }
    if (((s as any).avatar_hair ?? 0) === 1) {
      ((s as any).face_style = (s as any).face_style ?? {})['avatar_hair'] = ((s as any).av_hair ?? 0);
      (s as any).avatar_hair = undefined;
      (s as any).av_hair = undefined;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90301) {
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_cyan_taken'])   > ((s as any).experimentQW ?? 0)?.['pill_cyan_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_cyan_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_cyan_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_red_taken'])    > ((s as any).experimentQW ?? 0)?.['pill_red_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_red_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_red_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_blue_taken'])   > ((s as any).experimentQW ?? 0)?.['pill_blue_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_blue_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_blue_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_yellow_taken']) > ((s as any).experimentQW ?? 0)?.['pill_yellow_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_yellow_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_yellow_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_orange_taken']) > ((s as any).experimentQW ?? 0)?.['pill_orange_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_orange_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_orange_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_violet_taken']) > ((s as any).experimentQW ?? 0)?.['pill_violet_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_violet_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_violet_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_brown_taken'])  > ((s as any).experimentQW ?? 0)?.['pill_brown_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_brown_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_brown_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_purple_taken']) > ((s as any).experimentQW ?? 0)?.['pill_purple_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_purple_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_purple_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_green_taken'])  > ((s as any).experimentQW ?? 0)?.['pill_green_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_green_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_green_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_gray_taken'])   > ((s as any).experimentQW ?? 0)?.['pill_gray_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_gray_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_gray_taken']));
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_pink_taken'])   > ((s as any).experimentQW ?? 0)?.['pill_pink_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_pink_taken'] = parseFloat((((s as any).experimentQW ?? 0)?.['pill_pink_taken']));
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90302) {
    if (Object.keys((s as any).npc_pref_values ?? {}).length > 0) {
      (s as any).su_i = 1;
      do {
        qspFunc(s, 'npc_preferences[\'A' + ((s as any).su_i ?? 0) + '\']');
        qspFunc(s, 'npc_pref_values[\'A' + ((s as any).su_i ?? 0) + '\']');
        if (Object.keys((s as any).npc_pref_traits ?? {}).length > 0) {
          qspCall(s, 'npc_set_preference', 'rebuild_preferences', 'A' + ((s as any).su_i ?? 0) + '');
        }
        (s as any).npc_pref_traits = undefined;
        (s as any).npc_trait_values = undefined;
        (s as any).su_i = ((s as any).su_i ?? 0) + (1);
        (s as any).npc_pref_values = undefined;
        (s as any).su_i = undefined;
      } while (((s as any).su_i ?? 0) < 257);
    }
    if (((s as any).mc_inventory ?? 0)?.['chaffing_cream'] > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['chafing_cream'] = (((s as any).mc_inventory ?? 0)?.['chaffing_cream']);
      qspCall(s, 'array', 'remove_element', 'mc_inventory', 'chaffing_cream');
    }
    ((s as any).npc_notes = (s as any).npc_notes ?? {})['A26'] = 'Anatoly Tsarev is the school\'s math teacher. He\'s a stern teacher, who always demands the best out of his students. His daughter Lera is in your class. He\'s married to Vera, who works at the train station as a ticket saleswoman and as a cleaner in the garment factory. There are rumors that since Lesco came to live with them, his marriage has been on the rocks.';
    if (((s as any).lib_book_loaned ?? 0) === 'fantasy') {
      (s as any).lib_book_loaned = 'a fantasy novel';
    }
    (s as any).downlibrary = undefined;
    (s as any).updated_pav_shared_apt = undefined;
    (s as any).litltown = undefined;
    if (((s as any).blackmailQW ?? 0)?.['day'] !== 0) {
      if (((String(((s as any).blackmailQW ?? 0)?.['init_flashloc']).indexOf(String('zaprF'))) + 1) > 0) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc'] = (String((((s as any).blackmailQW ?? 0)?.['init_flashloc'])).split('zaprF').join('fuelstation'));
      }
      (s as any).su_i = 0;
      do {
        if (((String(qspUntranslated(s, "blackmailQW[\u00000\u0000]", { location: "saveupdater" })).indexOf(String('zaprF'))) + 1) > 0) {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_location_' + String(((s as any).su_i ?? 0))] = (String((((s as any).blackmailQW ?? 0)?.['selfie_location_' + String(((s as any).su_i ?? 0))])).split('zaprF').join('fuelstation'));
        }
        (s as any).su_i = ((s as any).su_i ?? 0) + (1);
        (s as any).su_i = undefined;
      } while (((s as any).su_i ?? 0) < 10);
    }
    if (((s as any).f_book ?? 0)    !== 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['fantasy_books'] = ((s as any).f_book ?? 0);
      (s as any).f_book = undefined;
    }
    if (((s as any).sf_book ?? 0)    !== 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['scifi_books'] = ((s as any).sf_book ?? 0);
      (s as any).sf_book = undefined;
    }
    if (((s as any).w_book ?? 0)    !== 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['romance_books'] = ((s as any).w_book ?? 0);
      (s as any).w_book = undefined;
    }
    if (((s as any).fantasybook ?? 0)  !== 0) {
      ((s as any).BookVars = (s as any).BookVars ?? {})['fantasy_pages'] = ((s as any).fantasybook ?? 0) * 100;
      (s as any).fantasybook = undefined;
    }
    if (((s as any).womanbook ?? 0)  !== 0) {
      ((s as any).BookVars = (s as any).BookVars ?? {})['romance_pages'] = ((s as any).womanbook ?? 0) * 100;
      (s as any).womanbook = undefined;
    }
    if (((s as any).artembook ?? 0)  !== 0) {
      ((s as any).BookVars = (s as any).BookVars ?? {})['artem_pages'] = ((s as any).artembook ?? 0) * 100;
      (s as any).artembook = undefined;
    }
    if (((s as any).pointKik ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['pcs_points'] = ((s as any).pointKik ?? 0);
      (s as any).pointKik = undefined;
    }
    if (((s as any).pointKikV ?? 0)  !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_points'] = ((s as any).pointKikV ?? 0);
      (s as any).pointKikV = undefined;
    }
    if (((s as any).formula ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['max_rounds'] = ((s as any).formula ?? 0);
      (s as any).formula = undefined;
    }
    if (((s as any).round ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['round'] = ((s as any).round ?? 0);
      (s as any).round = undefined;
    }
    if (((s as any).minround ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['time'] = ((s as any).minround ?? 0);
      (s as any).minround = undefined;
    }
    if (((s as any).strenV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_stren'] = ((s as any).strenV ?? 0);
      (s as any).strenV = undefined;
    }
    if (((s as any).speedV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_speed'] = ((s as any).speedV ?? 0);
      (s as any).speedV = undefined;
    }
    if (((s as any).agilV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_agil'] = ((s as any).agilV ?? 0);
      (s as any).agilV = undefined;
    }
    if (((s as any).reactV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_react'] = ((s as any).reactV ?? 0);
      (s as any).reactV = undefined;
    }
    if (((s as any).vitalV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_vital'] = ((s as any).vitalV ?? 0);
      (s as any).vitalV = undefined;
    }
    if (((s as any).intelV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_intel'] = ((s as any).intelV ?? 0);
      (s as any).intelV = undefined;
    }
    if (((s as any).willV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_will'] = ((s as any).willV ?? 0);
      (s as any).willV = undefined;
    }
    if (((s as any).JabV ?? 0)      !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_jab'] = ((s as any).JabV ?? 0);
      (s as any).JabV = undefined;
    }
    if (((s as any).PunchV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_punch'] = ((s as any).PunchV ?? 0);
      (s as any).PunchV = undefined;
    }
    if (((s as any).KikV ?? 0)      !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_kick'] = ((s as any).KikV ?? 0);
      (s as any).KikV = undefined;
    }
    if (((s as any).KikDefV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_def'] = ((s as any).KikDefV ?? 0);
      (s as any).KikDefV = undefined;
    }
    if (((s as any).healthV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_health'] = ((s as any).healthV ?? 0);
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_max_health'] = (((s as any).temp_kickboxVars ?? {})?.['npc_vital'] ?? 0) * 10 + (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] ?? 0) * 5;
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_stam'] = (30 * (2 * (((s as any).temp_kickboxVars ?? {})?.['npc_vital'] ?? 0) + (((s as any).temp_kickboxVars ?? {})?.['npc_agil'] ?? 0) + (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] ?? 0)) + 1000) / 13;
    }
    if (((s as any).init ?? 0)      !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['pcs_init'] = ((s as any).init ?? 0);
      (s as any).init = undefined;
    }
    if (((s as any).initKoef ?? 0)    !== 0) {
      (s as any).initKoef = undefined;
    }
    if (((s as any).initi ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['pcs_init_true'] = ((s as any).initi ?? 0);
      (s as any).initi = undefined;
    }
    if (((s as any).initV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_init'] = ((s as any).initV ?? 0);
      (s as any).initV = undefined;
    }
    if (((s as any).initKoefV ?? 0)  !== 0) {
      (s as any).initKoefV = undefined;
    }
    if (((s as any).initiV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_init_true'] = ((s as any).initiV ?? 0);
      (s as any).initiV = undefined;
    }
    if (((s as any).ionce ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['set_init'] = ((s as any).ionce ?? 0);
      (s as any).ionce = undefined;
    }
    if (((s as any).damkoef ?? 0)    !== 0) {
      (s as any).damkoef = undefined;
    }
    if (((s as any).hod ?? 0)      !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['active_init'] = ((s as any).hod ?? 0);
      (s as any).home_day = undefined;
    }
    if (((s as any).hodtime ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['pcs_inittime'] = ((s as any).hodtime ?? 0);
      (s as any).hodtime = undefined;
    }
    if (((s as any).hodtimeV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_inittime'] = ((s as any).hodtimeV ?? 0);
      (s as any).hodtimeV = undefined;
    }
    if (((s as any).sparing ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['fight_type'] = 0;
      (s as any).sparing = undefined;
    }
    if (((s as any).kickbox ?? 0)?.['amateur'] !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['fight_type'] = 1;
      qspCall(s, 'array', 'remove_element', 'kickbox', 'amateur');
    }
    if (((s as any).KikWinPro ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proWin'] = ((s as any).KikWinPro ?? 0);
      (s as any).KikWinPro = undefined;
    }
    if (((s as any).KikWinProKO ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proWinKO'] = ((s as any).KikWinProKO ?? 0);
      (s as any).KikWinProKO = undefined;
    }
    if (((s as any).KikLossPro ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proLoss'] = ((s as any).KikLossPro ?? 0);
      (s as any).KikLossPro = undefined;
    }
    if (((s as any).KikLossProKO ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proLossKO'] = ((s as any).KikLossProKO ?? 0);
      (s as any).KikLossProKO = undefined;
    }
    if (((s as any).KikDrawPro ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proDraw'] = ((s as any).KikDrawPro ?? 0);
      (s as any).KikDrawPro = undefined;
    }
    (s as any).crossfit_north_image_dir = undefined;
    if (((s as any).First_time_3some_with_Lazar ?? 0)      !== 0) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['lazar_threesome'] = ((s as any).First_time_3some_with_Lazar ?? 0);
      (s as any).First_time_3some_with_Lazar = undefined;
    }
    if (((s as any).first_time_outside_in_cold_weather ?? 0)  !== 0) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['cold_weather'] = ((s as any).first_time_outside_in_cold_weather ?? 0);
      (s as any).first_time_outside_in_cold_weather = undefined;
    }
    if (((s as any).first_time_doing_basketball ?? 0)      !== 0) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['basketball'] = ((s as any).first_time_doing_basketball ?? 0);
      (s as any).first_time_doing_basketball = undefined;
    }
    if (((s as any).first_time_spring_football_match ?? 0)    !== 0) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['spring_match'] = ((s as any).first_time_spring_football_match ?? 0);
      (s as any).first_time_spring_football_match = undefined;
    }
    if (((s as any).blackmailQW ?? 0)?.['stage'] === 10) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = 1;
    }
    (s as any).appearance_update_932 = 1;
    (s as any).su_i = 0;
    do {
      if (((s as any).npc_apprnc ?? 0)?.[String((s as any).su_i ?? 0)] > 0) {
        ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})[String((s as any).su_i ?? 0)] = 3 * (((s as any).npc_apprnc ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0);
        if (((s as any).npc_apprnc ?? 0)?.[String((s as any).su_i ?? 0)] > 190) {
          ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})[String((s as any).su_i ?? 0)] = 190;
        }
      }
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      (s as any).su_i = undefined;
      (s as any)[hotcat_rating] ? (s as any)[hotcat_rating] = { ...(s as any)[npc_hotcat] } : (s as any)[hotcat_rating] = { ...(s as any)[npc_hotcat] };
      (s as any).hotcat_rating = undefined;
      if (((s as any).hotcat ?? 0)  !== 0) {
        (s as any).pcs_hotcat = ((s as any).hotcat ?? 0);
        (s as any).hotcat = undefined;
      }
      (s as any).ds_diff = ((s as any).daystart_start ?? 0) - 1;
      if (((s as any).ds_diff ?? 0) > 0) {
        (s as any).daystart = ((s as any).daystart ?? 0) + (((s as any).ds_diff ?? 0));
        if (((s as any).abortionbirthdate ?? 0)            !== 0) {
          (s as any).abortionbirthdate = ((s as any).abortionbirthdate ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).acting ?? 0)?.['shoot_day']            !== 0) {
          ((s as any).acting = (s as any).acting ?? {})['shoot_day'] = ((s as any).acting['shoot_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).afterschool_day ?? 0)              !== 0) {
          (s as any).afterschool_day = ((s as any).afterschool_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).AlbinaQW ?? 0)?.['startletsday']          !== 0) {
          ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['startletsday'] = ((s as any).AlbinaQW['startletsday'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).anushkaQW ?? 0)?.['tour_SMS_send']        !== 0) {
          ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['tour_SMS_send'] = ((s as any).anushkaQW['tour_SMS_send'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).atmDepositDate ?? 0)              !== 0) {
          (s as any).atmDepositDate = ((s as any).atmDepositDate ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).audition ?? 0)?.['day']              !== 0) {
          ((s as any).audition = (s as any).audition ?? {})['day'] = ((s as any).audition['day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).balletqw ?? 0)?.['membership']          !== 0) {
          ((s as any).balletqw = (s as any).balletqw ?? {})['membership'] = ((s as any).balletqw['membership'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).blackmailQW ?? 0)?.['day']            !== 0) {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['day'] = ((s as any).blackmailQW['day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).blackmailQW ?? 0)?.['dream_day']          !== 0) {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['dream_day'] = ((s as any).blackmailQW['dream_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).BurgerQW ?? 0)?.['IlyQWDay']            !== 0) {
          ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['IlyQWDay'] = ((s as any).BurgerQW['IlyQWDay'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).cheerleadingQW ?? 0)?.['day']          !== 0) {
          ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['day'] = ((s as any).cheerleadingQW['day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).CloLostOn ?? 0)                !== 0) {
          (s as any).CloLostOn = ((s as any).CloLostOn ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).daylastperiod ?? 0)              !== 0) {
          (s as any).daylastperiod = ((s as any).daylastperiod ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).dentistday ?? 0)                !== 0) {
          (s as any).dentistday = ((s as any).dentistday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).dimaRevengedaystart ?? 0)            !== 0) {
          (s as any).dimaRevengedaystart = ((s as any).dimaRevengedaystart ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).dimasexday ?? 0)                !== 0) {
          (s as any).dimasexday = ((s as any).dimasexday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).drugVars ?? 0)?.['cigarettes_day']        !== 0) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_day'] = ((s as any).drugVars['cigarettes_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).drugVars ?? 0)?.['cocain_day']          !== 0) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['cocain_day'] = ((s as any).drugVars['cocain_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).drugVars ?? 0)?.['cocain_willday']        !== 0) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['cocain_willday'] = ((s as any).drugVars['cocain_willday'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).drugVars ?? 0)?.['heroin_day']          !== 0) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_day'] = ((s as any).drugVars['heroin_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).drugVars ?? 0)?.['weed_day']            !== 0) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['weed_day'] = ((s as any).drugVars['weed_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).fairycurse ?? 0)                !== 0) {
          (s as any).fairycurse = ((s as any).fairycurse ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).firstmens ?? 0)                !== 0) {
          (s as any).firstmens = ((s as any).firstmens ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).forest_lostday ?? 0)              !== 0) {
          (s as any).forest_lostday = ((s as any).forest_lostday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).forced_naked_day ?? 0)              !== 0) {
          (s as any).forced_naked_day = ((s as any).forced_naked_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).gopnik_initiation_day ?? 0)          !== 0) {
          (s as any).gopnik_initiation_day = ((s as any).gopnik_initiation_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).gopopusday ?? 0)                !== 0) {
          (s as any).gopopusday = ((s as any).gopopusday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).grandmaQW ?? 0)?.['last_day_helped']        !== 0) {
          ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['last_day_helped'] = ((s as any).grandmaQW['last_day_helped'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).grandpaQW ?? 0)?.['last_day_helped']        !== 0) {
          ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['last_day_helped'] = ((s as any).grandpaQW['last_day_helped'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).hotelRoomDays ?? 0)?.['city']          !== 0) {
          ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})['city'] = ((s as any).hotelRoomDays['city'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).hotelRoomDays ?? 0)?.['pav']            !== 0) {
          ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})['pav'] = ((s as any).hotelRoomDays['pav'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).hypnoDay ?? 0)                  !== 0) {
          (s as any).hypnoDay = ((s as any).hypnoDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).implant_day ?? 0)                !== 0) {
          (s as any).implant_day = ((s as any).implant_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).katalkinSexDay ?? 0)              !== 0) {
          (s as any).katalkinSexDay = ((s as any).katalkinSexDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).katjaQW ?? 0)?.['birth_control_start_day']    !== 0) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['birth_control_start_day'] = ((s as any).katjaQW['birth_control_start_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).katjaQW ?? 0)?.['coke_day']            !== 0) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_day'] = ((s as any).katjaQW['coke_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).katjaQW ?? 0)?.['relationship_count_start']    !== 0) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['relationship_count_start'] = ((s as any).katjaQW['relationship_count_start'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).kats_absent_check ?? 0)            !== 0) {
          (s as any).kats_absent_check = ((s as any).kats_absent_check ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).kolka_dick_day ?? 0)              !== 0) {
          (s as any).kolka_dick_day = ((s as any).kolka_dick_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).krystal ?? 0)?.['porn_card_day']          !== 0) {
          ((s as any).krystal = (s as any).krystal ?? {})['porn_card_day'] = ((s as any).krystal['porn_card_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).lactation ?? 0)?.['milkgrowday']          !== 0) {
          ((s as any).lactation = (s as any).lactation ?? {})['milkgrowday'] = ((s as any).lactation['milkgrowday'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).LariskaBoyDay ?? 0)              !== 0) {
          (s as any).LariskaBoyDay = ((s as any).LariskaBoyDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).lastconf ?? 0)                  !== 0) {
          (s as any).lastconf = ((s as any).lastconf ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).lastdayperiod ?? 0)              !== 0) {
          (s as any).lastdayperiod = ((s as any).lastdayperiod ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).lastovulation ?? 0)              !== 0) {
          (s as any).lastovulation = ((s as any).lastovulation ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).lastmens ?? 0)                  !== 0) {
          (s as any).lastmens = ((s as any).lastmens ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).lastreadday ?? 0)                !== 0) {
          (s as any).lastreadday = ((s as any).lastreadday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).leonidSlaveDay ?? 0)              !== 0) {
          (s as any).leonidSlaveDay = ((s as any).leonidSlaveDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).lesbiday ?? 0)                  !== 0) {
          (s as any).lesbiday = ((s as any).lesbiday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).locat ?? 0)?.['katja_rand1']            !== 0) {
          ((s as any).locat = (s as any).locat ?? {})['katja_rand1'] = ((s as any).locat['katja_rand1'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).locat ?? 0)?.['katja_rand2']            !== 0) {
          ((s as any).locat = (s as any).locat ?? {})['katja_rand2'] = ((s as any).locat['katja_rand2'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).locat ?? 0)?.['katja_rand3']            !== 0) {
          ((s as any).locat = (s as any).locat ?? {})['katja_rand3'] = ((s as any).locat['katja_rand3'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).MartinSexTalkDay ?? 0)              !== 0) {
          (s as any).MartinSexTalkDay = ((s as any).MartinSexTalkDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).masseuse ?? 0)?.['last_worked_day']        !== 0) {
          ((s as any).masseuse = (s as any).masseuse ?? {})['last_worked_day'] = ((s as any).masseuse['last_worked_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).masseuse ?? 0)?.['schedule_update']        !== 0) {
          ((s as any).masseuse = (s as any).masseuse ?? {})['schedule_update'] = ((s as any).masseuse['schedule_update'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).MiraVars ?? 0)?.['emb_day']            !== 0) {
          ((s as any).MiraVars = (s as any).MiraVars ?? {})['emb_day'] = ((s as any).MiraVars['emb_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).MiraVars ?? 0)?.['event_day']          !== 0) {
          ((s as any).MiraVars = (s as any).MiraVars ?? {})['event_day'] = ((s as any).MiraVars['event_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).mistresscontract ?? 0)              !== 0) {
          (s as any).mistresscontract = ((s as any).mistresscontract ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).ml_delparcoQW ?? 0)?.['Next Date']        !== 0) {
          ((s as any).ml_delparcoQW = (s as any).ml_delparcoQW ?? {})['Next Date'] = ((s as any).ml_delparcoQW['Next Date'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).ml_guitarlesson ?? 0)?.['nextlesson']      !== 0) {
          ((s as any).ml_guitarlesson = (s as any).ml_guitarlesson ?? {})['nextlesson'] = ((s as any).ml_guitarlesson['nextlesson'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).ml_performance ?? 0)?.['set_lastpracticeday']  !== 0) {
          ((s as any).ml_performance = (s as any).ml_performance ?? {})['set_lastpracticeday'] = ((s as any).ml_performance['set_lastpracticeday'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).model_week ?? 0)                !== 0) {
          (s as any).model_week = ((s as any).model_week ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).mother ?? 0)?.['kickedout_timer']        !== 0) {
          ((s as any).mother = (s as any).mother ?? {})['kickedout_timer'] = ((s as any).mother['kickedout_timer'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).NatbelQW ?? 0)?.['DebtDay']            !== 0) {
          ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['DebtDay'] = ((s as any).NatbelQW['DebtDay'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).NatbelQW ?? 0)?.['evt_day']            !== 0) {
          ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['evt_day'] = ((s as any).NatbelQW['evt_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).NatbelQW ?? 0)?.['pregday']            !== 0) {
          ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['pregday'] = ((s as any).NatbelQW['pregday'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).NatbelQW ?? 0)?.['StP_trip_daystart']      !== 0) {
          ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['StP_trip_daystart'] = ((s as any).NatbelQW['StP_trip_daystart'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nerd_game ?? 0)?.['game_day']          !== 0) {
          ((s as any).nerd_game = (s as any).nerd_game ?? {})['game_day'] = ((s as any).nerd_game['game_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nerd_game ?? 0)?.['invite_day']          !== 0) {
          ((s as any).nerd_game = (s as any).nerd_game ?? {})['invite_day'] = ((s as any).nerd_game['invite_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichBreakfLast ?? 0)              !== 0) {
          (s as any).nichBreakfLast = ((s as any).nichBreakfLast ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichEvaluationLast ?? 0)            !== 0) {
          (s as any).nichEvaluationLast = ((s as any).nichEvaluationLast ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichEvaluationLastReq ?? 0)          !== 0) {
          (s as any).nichEvaluationLastReq = ((s as any).nichEvaluationLastReq ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichGalaContractDay ?? 0)            !== 0) {
          (s as any).nichGalaContractDay = ((s as any).nichGalaContractDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichGalaContractTarasLast ?? 0)        !== 0) {
          (s as any).nichGalaContractTarasLast = ((s as any).nichGalaContractTarasLast ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichGentleclubDayE1 ?? 0)            !== 0) {
          (s as any).nichGentleclubDayE1 = ((s as any).nichGentleclubDayE1 ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nickHired ?? 0)                !== 0) {
          (s as any).nickHired = ((s as any).nickHired ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichLastWorkDay ?? 0)              !== 0) {
          (s as any).nichLastWorkDay = ((s as any).nichLastWorkDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichTanya ?? 0)?.['FuckLast']          !== 0) {
          ((s as any).nichTanya = (s as any).nichTanya ?? {})['FuckLast'] = ((s as any).nichTanya['FuckLast'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichVacationFrom ?? 0)              !== 0) {
          (s as any).nichVacationFrom = ((s as any).nichVacationFrom ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).nichVactionTil ?? 0)              !== 0) {
          (s as any).nichVactionTil = ((s as any).nichVactionTil ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).NikoNextDate_day ?? 0)              !== 0) {
          (s as any).NikoNextDate_day = ((s as any).NikoNextDate_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).NikoPayback_Sex ?? 0)              !== 0) {
          (s as any).NikoPayback_Sex = ((s as any).NikoPayback_Sex ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).NikoPayed ?? 0)                !== 0) {
          (s as any).NikoPayed = ((s as any).NikoPayed ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).painpubday ?? 0)                !== 0) {
          (s as any).painpubday = ((s as any).painpubday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).parkblackmail ?? 0)              !== 0) {
          (s as any).parkblackmail = ((s as any).parkblackmail ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).ParrotQW ?? 0)?.['BuyDate']            !== 0) {
          ((s as any).ParrotQW = (s as any).ParrotQW ?? {})['BuyDate'] = ((s as any).ParrotQW['BuyDate'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).ParrotQW ?? 0)?.['SisterReleaseParrotDay']    !== 0) {
          ((s as any).ParrotQW = (s as any).ParrotQW ?? {})['SisterReleaseParrotDay'] = ((s as any).ParrotQW['SisterReleaseParrotDay'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).pav_disco_in ?? 0)                !== 0) {
          (s as any).pav_disco_in = ((s as any).pav_disco_in ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).pav_swimpool ?? 0)?.['entrancepaid']        !== 0) {
          ((s as any).pav_swimpool = (s as any).pav_swimpool ?? {})['entrancepaid'] = ((s as any).pav_swimpool['entrancepaid'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).parkday ?? 0)                  !== 0) {
          (s as any).parkday = ((s as any).parkday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).photography ?? 0)?.['datecheck']          !== 0) {
          ((s as any).photography = (s as any).photography ?? {})['datecheck'] = ((s as any).photography['datecheck'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).policeQW ?? 0)?.['fine_deadline']        !== 0) {
          ((s as any).policeQW = (s as any).policeQW ?? {})['fine_deadline'] = ((s as any).policeQW['fine_deadline'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).pilldaychk ?? 0)                !== 0) {
          (s as any).pilldaychk = ((s as any).pilldaychk ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).pornstar ?? 0)?.['icon_disable']          !== 0) {
          ((s as any).pornstar = (s as any).pornstar ?? {})['icon_disable'] = ((s as any).pornstar['icon_disable'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).pregbirthdate ?? 0)              !== 0) {
          (s as any).pregbirthdate = ((s as any).pregbirthdate ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).rape_day ?? 0)                  !== 0) {
          (s as any).rape_day = ((s as any).rape_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).rex ?? 0)?.['timer_day']              !== 0) {
          ((s as any).rex = (s as any).rex ?? {})['timer_day'] = ((s as any).rex['timer_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).rex ?? 0)?.['gadukino_day']            !== 0) {
          ((s as any).rex = (s as any).rex ?? {})['gadukino_day'] = ((s as any).rex['gadukino_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).rexCarDay ?? 0)                !== 0) {
          (s as any).rexCarDay = ((s as any).rexCarDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).school_daily_check ?? 0)            !== 0) {
          (s as any).school_daily_check = ((s as any).school_daily_check ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).schoolProgulDay ?? 0)              !== 0) {
          (s as any).schoolProgulDay = ((s as any).schoolProgulDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).shulga_whore ?? 0)                !== 0) {
          (s as any).shulga_whore = ((s as any).shulga_whore ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sisboyday ?? 0)                !== 0) {
          (s as any).sisboyday = ((s as any).sisboyday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sisboyparty_day ?? 0)              !== 0) {
          (s as any).sisboyparty_day = ((s as any).sisboyparty_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sisboytrioDayOtkaz ?? 0)            !== 0) {
          (s as any).sisboytrioDayOtkaz = ((s as any).sisboytrioDayOtkaz ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sisterQW ?? 0)?.['partyday']            !== 0) {
          ((s as any).sisterQW = (s as any).sisterQW ?? {})['partyday'] = ((s as any).sisterQW['partyday'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sistrioday ?? 0)                !== 0) {
          (s as any).sistrioday = ((s as any).sistrioday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).slavejobday ?? 0)                !== 0) {
          (s as any).slavejobday = ((s as any).slavejobday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sleepVars ?? 0)?.['sleep_reflection_day']    !== 0) {
          ((s as any).sleepVars = (s as any).sleepVars ?? {})['sleep_reflection_day'] = ((s as any).sleepVars['sleep_reflection_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).SMTV_commercial ?? 0)              !== 0) {
          (s as any).SMTV_commercial = ((s as any).SMTV_commercial ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).social_check ?? 0)?.['disco']          !== 0) {
          ((s as any).social_check = (s as any).social_check ?? {})['disco'] = ((s as any).social_check['disco'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).soniadisco_day ?? 0)              !== 0) {
          (s as any).soniadisco_day = ((s as any).soniadisco_day ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).soniafallDay ?? 0)                !== 0) {
          (s as any).soniafallDay = ((s as any).soniafallDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).soniaPSdays ?? 0)                !== 0) {
          (s as any).soniaPSdays = ((s as any).soniaPSdays ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sorevday ?? 0)                  !== 0) {
          (s as any).sorevday = ((s as any).sorevday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).starlets_practice ?? 0)            !== 0) {
          (s as any).starlets_practice = ((s as any).starlets_practice ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).stat ?? 0)?.['last_broken_condom']        !== 0) {
          ((s as any).stat = (s as any).stat ?? {})['last_broken_condom'] = ((s as any).stat['last_broken_condom'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).stat ?? 0)?.['last_creampie']          !== 0) {
          ((s as any).stat = (s as any).stat ?? {})['last_creampie'] = ((s as any).stat['last_creampie'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).stat ?? 0)?.['last_dance_class']          !== 0) {
          ((s as any).stat = (s as any).stat ?? {})['last_dance_class'] = ((s as any).stat['last_dance_class'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).stat ?? 0)?.['last_morning_after_pill']      !== 0) {
          ((s as any).stat = (s as any).stat ?? {})['last_morning_after_pill'] = ((s as any).stat['last_morning_after_pill'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).suchuntday ?? 0)                !== 0) {
          (s as any).suchuntday = ((s as any).suchuntday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sucinfoday ?? 0)                !== 0) {
          (s as any).sucinfoday = ((s as any).sucinfoday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).sucwalkday ?? 0)                !== 0) {
          (s as any).sucwalkday = ((s as any).sucwalkday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).surgeryday ?? 0)                !== 0) {
          (s as any).surgeryday = ((s as any).surgeryday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).suspended ?? 0)?.['day']              !== 0) {
          ((s as any).suspended = (s as any).suspended ?? {})['day'] = ((s as any).suspended['day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).tabletkichday ?? 0)              !== 0) {
          (s as any).tabletkichday = ((s as any).tabletkichday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).tabletkiday ?? 0)                !== 0) {
          (s as any).tabletkiday = ((s as any).tabletkiday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).TatianaMissionDay ?? 0)            !== 0) {
          (s as any).TatianaMissionDay = ((s as any).TatianaMissionDay ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).tatisucsexday ?? 0)              !== 0) {
          (s as any).tatisucsexday = ((s as any).tatisucsexday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).therapistday ?? 0)                !== 0) {
          (s as any).therapistday = ((s as any).therapistday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).tomorrow ?? 0)                  !== 0) {
          (s as any).tomorrow = ((s as any).tomorrow ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).transportVars ?? 0)?.['buspass_day']        !== 0) {
          ((s as any).transportVars = (s as any).transportVars ?? {})['buspass_day'] = ((s as any).transportVars['buspass_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).transportVars ?? 0)?.['trainpass_day']      !== 0) {
          ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = ((s as any).transportVars['trainpass_day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).uni_period ?? 0)?.['first']            !== 0) {
          ((s as any).uni_period = (s as any).uni_period ?? {})['first'] = ((s as any).uni_period['first'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).uni_period ?? 0)?.['second']            !== 0) {
          ((s as any).uni_period = (s as any).uni_period ?? {})['second'] = ((s as any).uni_period['second'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).uni_period ?? 0)?.['third']            !== 0) {
          ((s as any).uni_period = (s as any).uni_period ?? {})['third'] = ((s as any).uni_period['third'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).uni_period ?? 0)?.['exam']            !== 0) {
          ((s as any).uni_period = (s as any).uni_period ?? {})['exam'] = ((s as any).uni_period['exam'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).vladimirQW ?? 0)?.['day']            !== 0) {
          ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['day'] = ((s as any).vladimirQW['day'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).volkomday ?? 0)                !== 0) {
          (s as any).volkomday = ((s as any).volkomday ?? 0) + (((s as any).ds_diff ?? 0));
        }
        if (((s as any).virgin_stats ?? 0)?.['day_lost']          !== 0) {
          ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['day_lost'] = ((s as any).virgin_stats['day_lost'] ?? 0) + (((s as any).ds_diff ?? 0));
        }
        (s as any).su_ds_i = 0;
        do {
          if (((s as any).booty_call_invite ?? 0)?.[String((s as any).su_ds_i ?? 0)]      !== 0) {
            ((s as any).booty_call_invite = (s as any).booty_call_invite ?? {})[String((s as any).isu_ds_i ?? 0)] = ((s as any).booty_call_invite[String((s as any).isu_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).loverday ?? 0)?.[String((s as any).su_ds_i ?? 0)]          !== 0) {
            ((s as any).loverday = (s as any).loverday ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).loverday[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).meetday ?? 0)?.[String((s as any).su_ds_ii ?? 0)]          !== 0) {
            ((s as any).meetday = (s as any).meetday ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).meetday[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).npc_sugar_daddy_timer ?? 0)?.[String((s as any).su_ds_i ?? 0)]    !== 0) {
            ((s as any).npc_sugar_daddy_timer = (s as any).npc_sugar_daddy_timer ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).npc_sugar_daddy_timer[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).npc_no_booty_call ?? 0)?.[String((s as any).su_ds_i ?? 0)]      !== 0) {
            ((s as any).npc_no_booty_call = (s as any).npc_no_booty_call ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).npc_no_booty_call[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).npc_booty_call_date ?? 0)?.[String((s as any).su_ds_i ?? 0)]      !== 0) {
            ((s as any).npc_booty_call_date = (s as any).npc_booty_call_date ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).npc_booty_call_date[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).npc_bc_promise ?? 0)?.[String((s as any).su_ds_i ?? 0)]        !== 0) {
            ((s as any).npc_bc_promise = (s as any).npc_bc_promise ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).npc_bc_promise[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).npc_last_booty_call ?? 0)?.[String((s as any).su_ds_i ?? 0)]      !== 0) {
            ((s as any).npc_last_booty_call = (s as any).npc_last_booty_call ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).npc_last_booty_call[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).policeQW_courthearing_dates ?? 0)?.[String((s as any).su_ds_i ?? 0)]  !== 0) {
            ((s as any).policeQW_courthearing_dates = (s as any).policeQW_courthearing_dates ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).policeQW_courthearing_dates[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).policeQW_courtletter_dates ?? 0)?.[String((s as any).su_ds_i ?? 0)]  !== 0) {
            ((s as any).policeQW_courtletter_dates = (s as any).policeQW_courtletter_dates ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).policeQW_courtletter_dates[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          if (((s as any).porndaystart ?? 0)?.[String((s as any).su_ds_i ?? 0)]        !== 0) {
            ((s as any).porndaystart = (s as any).porndaystart ?? {})[String((s as any).su_ds_i ?? 0)] = ((s as any).porndaystart[String((s as any).su_ds_i ?? 0)] ?? 0) + (((s as any).ds_diff ?? 0));
          }
          (s as any).su_ds_i = ((s as any).su_ds_i ?? 0) + (1);
          (s as any).su_ds_i = undefined;
        } while (((s as any).su_ds_i ?? 0) < 99);
      }
      (s as any).ds_diff = undefined;
    } while (((s as any).su_i ?? 0) < Object.keys((s as any).npc_apprnc ?? {}).length);
  }
  if (((s as any).temp_current_save_version ?? 0) < 90303) {
    if (((s as any).pcs_traits ?? 0)?.['easy_orgams'] !== 0) {
      if (((s as any).pcs_traits ?? 0)?.['easy_orgasms'] < ((s as any).pcs_traits ?? 0)?.['easy_orgams']) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['easy_orgasms'] = (((s as any).pcs_traits ?? 0)?.['easy_orgams']);
      }
      qspCall(s, 'array', 'remove_element', 'pcs_traits', 'easy_orgams');
    }
    if (((s as any).soniafall ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['soniafall'] = ((s as any).soniafall ?? 0);
      (s as any).soniafall = undefined;
    }
    if (((s as any).soniaPS ?? 0)        !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['slut'] = ((s as any).soniaPS ?? 0);
      (s as any).soniaPS = undefined;
    }
    if (((s as any).soniafallDay ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['fallDay'] = ((s as any).soniafallDay ?? 0);
      (s as any).soniafallDay = undefined;
    }
    if (((s as any).soniaPSdays ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['slutdays'] = ((s as any).soniaPSdays ?? 0);
      (s as any).soniaPSdays = undefined;
    }
    if (((s as any).soniahelp ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['help'] = ((s as any).soniahelp ?? 0);
      (s as any).soniahelp = undefined;
    }
    if (((s as any).soniaencourage ?? 0)    !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['encourage'] = ((s as any).soniaencourage ?? 0);
      (s as any).soniaencourage = undefined;
    }
    if (((s as any).soniasex ?? 0)        !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['sex'] = ((s as any).soniasex ?? 0);
      (s as any).soniasex = undefined;
    }
    if (((s as any).soniasextime ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['sextime'] = ((s as any).soniasextime ?? 0);
      (s as any).soniasextime = undefined;
    }
    if (((s as any).ivankosup_count ?? 0)    !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['soup'] = ((s as any).ivankosup_count ?? 0);
      (s as any).ivankosup_count = undefined;
    }
    if (((s as any).ivankowater_count ?? 0)  !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['water'] = ((s as any).ivankowater_count ?? 0);
      (s as any).ivankowater_count = undefined;
    }
    if (((s as any).ivankolefto_count ?? 0)  !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['leftovers'] = ((s as any).ivankolefto_count ?? 0);
      (s as any).ivankolefto_count = undefined;
    }
    if (((s as any).ivankosanw_count ?? 0)    !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['sandwich'] = ((s as any).ivankosanw_count ?? 0);
      (s as any).ivankosanw_count = undefined;
    }
    if (((s as any).ivankofood_day ?? 0)    !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['food_day'] = ((s as any).ivankofood_day ?? 0);
      (s as any).ivankofood_day = undefined;
    }
    if (((s as any).ivanko_lefto ?? 0)    !== '') {
      ((s as any).ivanko = (s as any).ivanko ?? {})['leftover_txt'] = ((s as any).ivanko_lefto ?? 0);
      (s as any).ivanko_lefto = undefined;
    }
    if (((s as any).ivanko_sup ?? 0)      !== '') {
      ((s as any).ivanko = (s as any).ivanko ?? {})['soup_txt'] = ((s as any).ivanko_sup ?? 0);
      (s as any).ivanko_sup = undefined;
    }
    if (((s as any).ivanko_water ?? 0)    !== '') {
      ((s as any).ivanko = (s as any).ivanko ?? {})['water_txt'] = ((s as any).ivanko_water ?? 0);
      (s as any).ivanko_water = undefined;
    }
    if (((s as any).ivanko_sanw ?? 0)      !== '') {
      ((s as any).ivanko = (s as any).ivanko ?? {})['sandwich_txt'] = ((s as any).ivanko_sanw ?? 0);
      (s as any).ivanko_sanw = undefined;
    }
    qspCall(s, 'cheatmenu_din', '');
    (s as any).temp_total_mass = (((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
    if (((s as any).pcs_mass ?? 0)?.['body_message'] < ((s as any).temp_total_mass ?? 0) - 10) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = ((s as any).temp_total_mass ?? 0);
    }
    (s as any).temp_total_mass = undefined;
    if (((s as any).nminut ?? 0)  !== 0) {
      (s as any).nminut = undefined;
    }
    if (((s as any).nhour ?? 0)  !== 0) {
      (s as any).nhour = undefined;
    }
    if (Object.keys((s as any).bodimgsets ?? {}).length / 10 > 4) {
      (s as any).su_i = 4;
      (s as any).su_j = 0;
      do {
        if (((s as any).su_j ?? 0) < 9) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).su_i ?? 0)-4) + '_desc_' + String(((s as any).su_j ?? 0))] = qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).su_j ?? 0));
          if ((((s as any).su_j ?? 0) >= 1  &&  ((s as any).su_j ?? 0) <= 5)  ||  (!(0 as any))) {
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).su_i ?? 0)-4) + '_img_' + String(((s as any).su_j ?? 0))] = '' + ((s as any).su_j ?? 0) + '';
          }
          (s as any).su_j = ((s as any).su_j ?? 0) + (1);
        } else {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).su_i ?? 0)-4) + '_folder'] = (((s as any).bodimgsets ?? 0)?.[10 * ((s as any).su_i ?? 0) + ((s as any).su_j ?? 0)] ?? 0);
          (s as any).su_j = 0;
          (s as any).su_i = ((s as any).su_i ?? 0) + (1);
        }
      } while (10 * ((s as any).su_i ?? 0) + ((s as any).su_j ?? 0) < Object.keys((s as any).bodimgsets ?? {}).length);
    }
    (s as any).bodimgsets = undefined;
    (s as any).imgset0ovr = undefined;
    (s as any).imgset6ovr = undefined;
    (s as any).imgset7ovr = undefined;
    (s as any).imgset8ovr = undefined;
    if (((s as any).bdsetlock ?? 0)  !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 1;
      if (((s as any).fixbodset ?? 0) >= 4) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = ((s as any).fixbodset ?? 0) - 4;
      } else {
        if (((s as any).fixbodset ?? 0) >= 1) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 190 + (((s as any).fixbodset ?? 0) - 1);
        } else {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bi_set'] = 0;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_bodyimg'] = 0;
        }
      }
      (s as any).bdsetlock = undefined;
      (s as any).fixbodset = undefined;
    }
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_other'] = 0;
    if (((s as any).lip ?? 0)      !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['lip'] = ((s as any).lip ?? 0);
      (s as any).lip = undefined;
    }
    if (((s as any).pcs_throat ?? 0)  !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['throat'] = ((s as any).pcs_throat ?? 0);
      (s as any).pcs_throat = '';
    }
    if (((s as any).skin ?? 0)    !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['skin'] = ((s as any).skin ?? 0);
      (s as any).skin = undefined;
    }
    if (((s as any).glaza ?? 0)    !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['eyes'] = ((s as any).glaza ?? 0);
      (s as any).glaza = undefined;
    }
    if (((s as any).pcs_makeup ?? 0)  !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['makeup'] = ((s as any).pcs_makeup ?? 0);
      (s as any).pcs_makeup = '';
    }
    if (((s as any).bankDebtLimit ?? 0) > 0) {
      (s as any).karta = ((s as any).karta ?? 0) + (((s as any).bankDebtLimit ?? 0));
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90400) {
    if (((s as any).artemQW ?? 0)?.['strapon_count'] === 0  &&  ((s as any).artemQW ?? 0)?.['strapon'] >= 1  ||  ((s as any).artemQW ?? 0)?.['strapon'] === -1) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['strapon_count'] = 1;
    }
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = 0;
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = 0;
    if (((s as any).pirsC ?? 0) > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
      if (((s as any).pirsC ?? 0) >= 10000) {
        ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['ears'] = (-1);
      } else {
        if (((s as any).pirsC ?? 0) > 0) {
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['ears'] = ((s as any).pirsC ?? 0);
        }
      }
      (s as any).pirsC = undefined;
    }
    if (((s as any).pirsD ?? 0) > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
      if (((s as any).pirsD ?? 0) >= 10000) {
        ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['nose'] = (-1);
      } else {
        if (((s as any).pirsD ?? 0) > 0) {
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['nose'] = ((s as any).pirsD ?? 0);
        }
      }
      (s as any).pirsD = undefined;
    }
    if (((s as any).pirsE ?? 0) > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
      if (((s as any).pirsE ?? 0) >= 10000) {
        ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['brow'] = (-1);
      } else {
        if (((s as any).pirsE ?? 0) > 0) {
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['brow'] = ((s as any).pirsE ?? 0);
        }
      }
      (s as any).pirsE = undefined;
    }
    if (((s as any).pirsB ?? 0) > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
      if (((s as any).pirsB ?? 0) >= 10000) {
        ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['lip'] = (-1);
      } else {
        if (((s as any).pirsB ?? 0) > 0) {
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['lip'] = ((s as any).pirsB ?? 0);
        }
      }
      (s as any).pirsB = undefined;
    }
    if (((s as any).pirsA ?? 0) > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
      if (((s as any).pirsA ?? 0) >= 10000) {
        ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['tongue'] = (-1);
      } else {
        if (((s as any).pirsA ?? 0) > 0) {
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['tongue'] = ((s as any).pirsA ?? 0);
        }
      }
      (s as any).pirsA = undefined;
    }
    if (((s as any).pirsN ?? 0) > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
      if (((s as any).pirsN ?? 0) >= 10000) {
        ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['navel'] = (-1);
      } else {
        if (((s as any).pirsN ?? 0) > 0) {
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['navel'] = ((s as any).pirsN ?? 0);
        }
      }
      (s as any).pirsN = undefined;
    }
    if (((s as any).pirsF ?? 0) > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
      if (((s as any).pirsF ?? 0) >= 10000) {
        ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['nipples'] = (-1);
      } else {
        if (((s as any).pirsF ?? 0) > 0) {
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['nipples'] = ((s as any).pirsF ?? 0);
        }
      }
      (s as any).pirsF = undefined;
    }
    if (((s as any).pirsG ?? 0) > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
      if (((s as any).pirsG ?? 0) >= 10000) {
        ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['pussy'] = (-1);
      } else {
        if (((s as any).pirsG ?? 0) > 0) {
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
          ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['pussy'] = ((s as any).pirsG ?? 0);
        }
      }
      (s as any).pirsG = undefined;
    }
    (s as any).su_i = 0;
    do {
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      if (((s as any).tattCount ?? 0)    > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).tattCount ?? 0);
        (s as any).tattCount = undefined;
      }
      if (((s as any).tatarm ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['arm'] = ((s as any).tatarm ?? 0);
        (s as any).tatarm = undefined;
      }
      if (((s as any).tatass ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['ass'] = ((s as any).tatass ?? 0);
        (s as any).tatass = undefined;
      }
      if (((s as any).tatback ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['back'] = ((s as any).tatback ?? 0);
        (s as any).tatback = undefined;
      }
      if (((s as any).tatblly ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['belly'] = ((s as any).tatblly ?? 0);
        (s as any).tatblly = undefined;
      }
      if (((s as any).tatbrst ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['breast'] = ((s as any).tatbrst ?? 0);
        (s as any).tatbrst = undefined;
      }
      if (((s as any).tatchst ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['chest'] = ((s as any).tatchst ?? 0);
        (s as any).tatchst = undefined;
      }
      if (((s as any).tatfce ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['face'] = ((s as any).tatfce ?? 0);
        (s as any).tatfce = undefined;
      }
      if (((s as any).tatankle ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['ankle'] = ((s as any).tatankle ?? 0);
        (s as any).tatankle = undefined;
      }
      if (((s as any).tatleg ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['leg'] = ((s as any).tatleg ?? 0);
        (s as any).tatleg = undefined;
      }
      if (((s as any).tatlip ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['lip'] = ((s as any).tatlip ?? 0);
        (s as any).tatlip = undefined;
      }
      if (((s as any).tatneck ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['neck'] = ((s as any).tatneck ?? 0);
        (s as any).tatneck = undefined;
      }
      if (((s as any).tatvag ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['pussy'] = ((s as any).tatvag ?? 0);
        (s as any).tatvag = undefined;
      }
      if (((s as any).tatlech ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['shoulder'] = ((s as any).tatlech ?? 0);
        (s as any).tatlech = undefined;
      }
      if (((s as any).tatside ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['side'] = ((s as any).tatside ?? 0);
        (s as any).tatside = undefined;
      }
      if (((s as any).tatupb ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['tramp'] = ((s as any).tatupb ?? 0);
        (s as any).tatupb = undefined;
      }
      if (((s as any).tatunder ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['under'] = ((s as any).tatunder ?? 0);
        (s as any).tatunder = undefined;
      }
      if (((s as any).tatwrist ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['wrist'] = ((s as any).tatwrist ?? 0);
        (s as any).tatwrist = undefined;
      }
      if (((s as any).tathand ?? 0)      > 0) {
        ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['hand'] = ((s as any).tathand ?? 0);
        (s as any).tathand = undefined;
      }
      if (((s as any).sisterQW ?? 0)?.['pirsA'] > 0) {
        ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_tongue'] = 1;
        qspCall(s, 'array', 'remove_element', 'sisterQW', 'pirsA');
      }
      if (((s as any).sisterQW ?? 0)?.['pirsB'] > 0) {
        ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_lip'] = 1;
        qspCall(s, 'array', 'remove_element', 'sisterQW', 'pirsB');
      }
      if (((s as any).sisterQW ?? 0)?.['pirsC'] > 0) {
        ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_ears'] = 1;
        qspCall(s, 'array', 'remove_element', 'sisterQW', 'pirsC');
      }
      if (((s as any).sisterQW ?? 0)?.['pirsD'] > 0) {
        ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_nose'] = 1;
        qspCall(s, 'array', 'remove_element', 'sisterQW', 'pirsD');
      }
      if (((s as any).sisterQW ?? 0)?.['pirsE'] > 0) {
        ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_brow'] = 1;
        qspCall(s, 'array', 'remove_element', 'sisterQW', 'pirsE');
      }
      if (((s as any).sisterpirsadaytalk ?? 0)  > 0) {
        ((s as any).sisterQW = (s as any).sisterQW ?? {})['piercing_daystart'] = ((s as any).sisterpirsadaytalk ?? 0);
        (s as any).sisterpirsadaytalk = undefined;
      }
      if (((s as any).brothersawpirsF ?? 0)    > 0) {
        ((s as any).brotherQW = (s as any).brotherQW ?? {})['piercing_nipples'] = 1;
        (s as any).brothersawpirsF = undefined;
      }
      if (((s as any).pirsadaytalk ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_talkday'] = ((s as any).pirsadaytalk ?? 0);
        (s as any).pirsadaytalk = undefined;
      }
      if (((s as any).pirsAfather ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_tongue'] = 1;
        (s as any).pirsAfather = undefined;
      }
      if (((s as any).pirsBfather ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_lip'] = 1;
        (s as any).pirsBfather = undefined;
      }
      if (((s as any).pirsCfather ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_ears'] = 1;
        (s as any).pirsCfather = undefined;
      }
      if (((s as any).pirsDfather ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_nose'] = 1;
        (s as any).pirsDfather = undefined;
      }
      if (((s as any).pirsEfather ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_brow'] = 1;
        (s as any).pirsEfather = undefined;
      }
      if (((s as any).PutsawpirsF ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_nipples'] = 1;
        (s as any).PutsawpirsF = undefined;
      }
      if (((s as any).PutsawpirsG ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_pussy'] = 1;
        (s as any).PutsawpirsG = undefined;
      }
      if (((s as any).fatherTatLip ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['tattoo_lip'] = 1;
        (s as any).fatherTatLip = undefined;
        (s as any).textFatherTatLip = undefined;
      }
      if (((s as any).Putsawtatvag ?? 0)      > 0) {
        ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['tattoo_pussy'] = 1;
        (s as any).Putsawtatvag = undefined;
      }
      if (((s as any).motherpirsadaytalk ?? 0)  > 0) {
        ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_talkday'] = ((s as any).motherpirsadaytalk ?? 0);
        (s as any).motherpirsadaytalk = undefined;
      }
      if (((s as any).pirsAmother ?? 0)      > 0) {
        ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_tongue'] = 1;
        (s as any).pirsAmother = undefined;
      }
      if (((s as any).pirsBmother ?? 0)      > 0) {
        ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_lip'] = 1;
        (s as any).pirsBmother = undefined;
      }
      if (((s as any).pirsCmother ?? 0)      > 0) {
        ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_ears'] = 1;
        (s as any).pirsCmother = undefined;
      }
      if (((s as any).pirsDmother ?? 0)      > 0) {
        ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_nose'] = 1;
        (s as any).pirsDmother = undefined;
      }
      if (((s as any).pirsEmother ?? 0)      > 0) {
        ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_brow'] = 1;
        (s as any).pirsEmother = undefined;
      }
      if (((s as any).KotovKnowPirsA ?? 0)    > 0) {
        ((s as any).VitekQW = (s as any).VitekQW ?? {})['piercing_tongue'] = 1;
        (s as any).KotovKnowPirsA = undefined;
      }
      if (((s as any).IgorBlock ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['Block'] = ((s as any).IgorBlock ?? 0);
        (s as any).IgorBlock = undefined;
      }
      if (((s as any).IgorDominaQW ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['Domina'] = ((s as any).IgorDominaQW ?? 0);
        (s as any).IgorDominaQW = undefined;
      }
      if (((s as any).IgorHorny ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['Horny'] = ((s as any).IgorHorny ?? 0);
        (s as any).IgorHorny = undefined;
      }
      if (((s as any).IgorLove ?? 0)        !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['Love'] = ((s as any).IgorLove ?? 0);
        (s as any).IgorLove = undefined;
      }
      if (((s as any).IgorLoverQW ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['Lover'] = ((s as any).IgorLoverQW ?? 0);
        (s as any).IgorLoverQW = undefined;
      }
      if (((s as any).igor_with ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['with'] = ((s as any).igor_with ?? 0);
        (s as any).igor_with = undefined;
      }
      if (((s as any).Igorsex ?? 0)        !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['sex'] = ((s as any).Igorsex ?? 0);
        (s as any).Igorsex = undefined;
      }
      if (((s as any).igor_DimaNos ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['DimaNos'] = ((s as any).igor_DimaNos ?? 0);
        (s as any).igor_DimaNos = undefined;
      }
      if (((s as any).igor_DimaNos_day ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['DimaNos_day'] = ((s as any).igor_DimaNos_day ?? 0);
        (s as any).igor_DimaNos_day = undefined;
      }
      if (((s as any).igor_bi_curious ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['bi_curious'] = ((s as any).igor_bi_curious ?? 0);
        (s as any).igor_bi_curious = undefined;
      }
      if (((s as any).igor_blackmail ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['blackmail'] = ((s as any).igor_blackmail ?? 0);
        (s as any).igor_blackmail = undefined;
      }
      if (((s as any).igor_eqwtday ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['eqwtday'] = ((s as any).igor_eqwtday ?? 0);
        (s as any).igor_eqwtday = undefined;
      }
      if (((s as any).igor_history ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['history'] = ((s as any).igor_history ?? 0);
        (s as any).igor_history = undefined;
      }
      if (((s as any).igor_htday ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['htday'] = ((s as any).igor_htday ?? 0);
        (s as any).igor_htday = undefined;
      }
      if (((s as any).igor_kdprogulka ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['kdwalk'] = ((s as any).igor_kdprogulka ?? 0);
        (s as any).igor_kdprogulka = undefined;
      }
      if (((s as any).igor_kdsexday ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['kdsexday'] = ((s as any).igor_kdsexday ?? 0);
        (s as any).igor_kdsexday = undefined;
      }
      if (((s as any).igor_krossdress ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['crossdress'] = ((s as any).igor_krossdress ?? 0);
        (s as any).igor_krossdress = undefined;
      }
      if (((s as any).igor_krossdresssex ?? 0)  !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['crossdressSex'] = ((s as any).igor_krossdresssex ?? 0);
        (s as any).igor_krossdresssex = undefined;
      }
      if (((s as any).igor_likethis ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['likethis'] = ((s as any).igor_likethis ?? 0);
        (s as any).igor_likethis = undefined;
      }
      if (((s as any).igor_listen ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['listen'] = ((s as any).igor_listen ?? 0);
        (s as any).igor_listen = undefined;
      }
      if (((s as any).igor_napoit ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['napoit'] = ((s as any).igor_napoit ?? 0);
        (s as any).igor_napoit = undefined;
      }
      if (((s as any).igor_net ?? 0)        !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['net'] = ((s as any).igor_net ?? 0);
        (s as any).igor_net = undefined;
      }
      if (((s as any).igor_nomore ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['nomore'] = ((s as any).igor_nomore ?? 0);
        (s as any).igor_nomore = undefined;
      }
      if (((s as any).igor_progulkaday ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['walkday'] = ((s as any).igor_progulkaday ?? 0);
        (s as any).igor_progulkaday = undefined;
      }
      if (((s as any).igor_qwday ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['qwday'] = ((s as any).igor_qwday ?? 0);
        (s as any).igor_qwday = undefined;
      }
      if (((s as any).igor_sexstrapon ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['sexstrapon'] = ((s as any).igor_sexstrapon ?? 0);
        (s as any).igor_sexstrapon = undefined;
      }
      if (((s as any).igor_strapday ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['strapday'] = ((s as any).igor_strapday ?? 0);
        (s as any).igor_strapday = undefined;
      }
      if (((s as any).igor_with ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['with'] = ((s as any).igor_with ?? 0);
        (s as any).igor_with = undefined;
      }
      if (((s as any).igorevent1 ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['event1'] = ((s as any).igorevent1 ?? 0);
        (s as any).igorevent1 = undefined;
      }
      if (((s as any).igorkuni ?? 0)        !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['kuni'] = ((s as any).igorkuni ?? 0);
        (s as any).igorkuni = undefined;
      }
      if (((s as any).igorstrap ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['strap'] = ((s as any).igorstrap ?? 0);
        (s as any).igorstrap = undefined;
      }
      if (((s as any).igorsub ?? 0)        !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['sub'] = ((s as any).igorsub ?? 0);
        (s as any).igorsub = undefined;
      }
      if (((s as any).met_IgorMother ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['met_mother'] = ((s as any).met_IgorMother ?? 0);
        (s as any).met_IgorMother = undefined;
      }
      if (((s as any).sis_meet ?? 0)        !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['sis_meet'] = ((s as any).sis_meet ?? 0);
        (s as any).sis_meet = undefined;
      }
      if (((s as any).met_IgorDad ?? 0)      !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['met_dad'] = ((s as any).met_IgorDad ?? 0);
        (s as any).met_IgorDad = undefined;
      }
      if (((s as any).igorkruglovday ?? 0)    !== 0) {
        ((s as any).IgorQW = (s as any).IgorQW ?? {})['daystart'] = ((s as any).igorkruglovday ?? 0);
        (s as any).igorkruglovday = undefined;
      }
      if (((s as any).igor_tday ?? 0)      !== 0) {
        (s as any).igor_tday = undefined;
      }
      if (((s as any).igor_qweday ?? 0)      !== 0) {
        (s as any).igor_qweday = undefined;
      }
      if (Object.keys((s as any).npc_pic ?? {}).length > 0) {
        (s as any)[npc_pic] ? (s as any)[npc_pic] = { ...(s as any)[npc_icon] } : (s as any)[npc_pic] = { ...(s as any)[npc_icon] };
        (s as any).su_i = 0;
        do {
          ((s as any).npc_pic = (s as any).npc_pic ?? {})[String((s as any).su_i ?? 0)] = 'images/characters/shared/headshots_generic/\' + mid($npc_pic[su_i], 8, len($npc_pic[su_i]) - 11) + \'.jpg';
          ((s as any).npc_icon = (s as any).npc_icon ?? {})[String((s as any).su_i ?? 0)] = 'images/system/phone/icons/' + (((s as any).npc_icon ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0);
          (s as any).su_i = ((s as any).su_i ?? 0) + (1);
        } while (((s as any).su_i ?? 0) < Object.keys((s as any).npc_pic ?? {}).length);
      }
      (s as any).lover_picture = undefined;
      (s as any).lover_picrand = undefined;
      (s as any).su_i = 1;
      (s as any).su_max_i = 190;
      do {
        if (((s as any).npc_selfie ?? 0)['A' + (((s as any).su_i ?? 0))] !== '') {
          (s as any).su_temp_str = qspUntranslated(s, "replace(npc_selfie['A<<su_i>>'], ' & gt 'phone_selfies', 'listretrieve2', )", { location: "saveupdater" });
          ((s as any).npc_selfie = (s as any).npc_selfie ?? {})['A' + String(((s as any).su_i ?? 0))] = qspUntranslated(s, "replace(su_temp_str, 'numnpc = ', ' gt 'phone_selfies', 'listretrieve2', 'A')", { location: "saveupdater" });
        }
        (s as any).su_i = ((s as any).su_i ?? 0) + (1);
        (s as any).su_temp_str = undefined;
        if ((Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A157') : -1) >= 0) {
          (s as any).su_tel_pos = qspUntranslated(s, "arrpos('contact', 'A157')", { location: "saveupdater" });
          ((s as any).contactICode = (s as any).contactICode ?? {})[String((s as any).su_tel_pos ?? 0)] = (String((((s as any).contactICode ?? 0)?.[String((s as any).su_tel_pos ?? 0)] ?? 0)).split('telefon').join('lover_call'));
          (s as any).su_tel_pos = undefined;
        }
        (s as any).su_i = 0;
        (s as any).su_max_i = 0;
        do {
          if (((String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).indexOf(String('npc_trait_values'))) + 1) > 0) {
            ((s as any).npc_preferences = (s as any).npc_preferences ?? {})[String((s as any).su_i ?? 0)] = (String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).split('npc_trait_values').join('npc_pref_values'));
          }
          if (((String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).indexOf(String('clothes_thin'))) + 1) > 0) {
            ((s as any).npc_preferences = (s as any).npc_preferences ?? {})[String((s as any).su_i ?? 0)] = (String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).split('\'clothes_thin\'').join('\'clothes_thin_high\''));
          }
          if (((String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).indexOf(String('cosmetics_piercing'))) + 1) > 0) {
            ((s as any).npc_preferences = (s as any).npc_preferences ?? {})[String((s as any).su_i ?? 0)] = (String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).split('\'cosmetics_piercing\'').join('\'cosmetics_piercing_visible\''));
          }
          if (((String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).indexOf(String('cosmetics_tattoo'))) + 1) > 0) {
            ((s as any).npc_preferences = (s as any).npc_preferences ?? {})[String((s as any).su_i ?? 0)] = (String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).split('\'cosmetics_tattoo\'').join('\'cosmetics_tattoo_visible\''));
          }
          if (((String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).indexOf(String('cosmetics_makeup'))) + 1) > 0) {
            ((s as any).npc_preferences = (s as any).npc_preferences ?? {})[String((s as any).su_i ?? 0)] = (String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).split('\'cosmetics_makeup\'').join('\'cosmetics_makeup_any\''));
          }
          if (((String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).indexOf(String('body_strength'))) + 1) > 0) {
            ((s as any).npc_preferences = (s as any).npc_preferences ?? {})[String((s as any).su_i ?? 0)] = (String((((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)).split('\'body_strength\'').join('\'stats_strength\''));
          }
          (s as any).su_i = ((s as any).su_i ?? 0) + (1);
          if (Object.keys((s as any).lover ?? {}).length > 0) {
            ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['lover_number'] = 0;
            do {
              ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['npcID'] = qspUntranslated(s, "lover[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverdesc[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_gender = (s as any).npc_gender ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverGender[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['av_height'] = 175;
              } else {
                ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['av_height'] = 165;
              }
              if (((s as any).loverbodyrand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                ((s as any).npc_height = (s as any).npc_height ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = (((s as any).saveupdaterVars ?? {})?.['av_height'] ?? 0) - 10 + (Math.floor(Math.random() * (4 - (-5) + 1)) + ((-5)));
              } else {
                if (((s as any).loverbodyrand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  ((s as any).npc_height = (s as any).npc_height ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = (((s as any).saveupdaterVars ?? {})?.['av_height'] ?? 0) + (Math.floor(Math.random() * (5 - (-5) + 1)) + ((-5)));
                } else {
                  ((s as any).npc_height = (s as any).npc_height ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = (((s as any).saveupdaterVars ?? {})?.['av_height'] ?? 0) + 10 + (Math.floor(Math.random() * (5 - (-4) + 1)) + ((-4)));
                }
              }
              if (((s as any).loverbodrand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 17;
              } else {
                if (((s as any).loverbodrand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 20;
                } else {
                  if (((s as any).loverbodrand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 23;
                  } else {
                    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 27;
                  }
                }
              }
              ((s as any).npc_weight = (s as any).npc_weight ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = (((s as any).saveupdaterVars ?? {})?.['bmi'] ?? 0) * ((s as any).npc_height ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)] * ((s as any).npc_height ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)] / 10000;
              if (((s as any).loverfacerand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 0;
              } else {
                if (((s as any).loverfacerand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 1;
                } else {
                  ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 3;
                }
              }
              ((s as any).npc_dick = (s as any).npc_dick ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverdick[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_thdick = (s as any).npc_thdick ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverdick_girth[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loversilaVag[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_finance = (s as any).npc_finance ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverfinance[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverClo[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              if (((s as any).figurlover ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 0) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_starving', 'like');
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_underweight', 'like');
              } else {
                if (((s as any).figurlover ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_normal', 'like');
                } else {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_overweight', 'like');
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_obese', 'like');
                }
              }
              if (((s as any).titlover ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 0) {
                if ((!(Math.floor(Math.random() * 2) + 0))) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_tits_small', 'like');
                } else {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_tits_average', 'like');
                }
              } else {
                if (((s as any).titlover ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_tits_large', 'like');
                } else {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_tits_huge', 'like');
                }
              }
              if (((s as any).npc_rel ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                ((s as any).npc_rel = (s as any).npc_rel ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 40;
              }
              ((s as any).npc_rel = (s as any).npc_rel ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = ((s as any).npc_rel ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)] + ((s as any).loverrelation ?? 0)[(((s as any).saveupdaterVars ?? {})?.['lover_number'] ?? 0)];
              ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "hairlover[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_eventday = (s as any).npc_eventday ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverday[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_daygenerated = (s as any).npc_daygenerated ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = ((s as any).daystart ?? 0) - ((s as any).loverdays ?? 0)[(((s as any).saveupdaterVars ?? {})?.['lover_number'] ?? 0)];
              ((s as any).npc_dates = (s as any).npc_dates ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverdays[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_sex = (s as any).npc_sex ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = Math.max((((s as any).npc_sex ?? 0)?.[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] ?? 0), qspUntranslated(s, "boyonce[saveupdaterVars['lover_number']]", { location: "saveupdater" }));
              ((s as any).npc_love = (s as any).npc_love ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "loverlove[lsaveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_compliance = (s as any).npc_compliance ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = -((s as any).loverscompliance ?? 0)[(((s as any).saveupdaterVars ?? {})?.['lover_number'] ?? 0)];
              ((s as any).npc_meetday = (s as any).npc_meetday ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "meetday[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              ((s as any).npc_meethour = (s as any).npc_meethour ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = qspUntranslated(s, "meethour[saveupdaterVars['lover_number']]", { location: "saveupdater" });
              if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'boyfriend';
              } else {
                ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'girlfriend';
              }
              if (((s as any).clotTypePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                ((s as any).clotQualPref = (s as any).clotQualPref ?? {})[(((s as any).saveupdaterVars ?? 0)?.['lover_number'])] = 1;
              } else {
                if (((s as any).clotTypePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  ((s as any).clotQualPref = (s as any).clotQualPref ?? {})[(((s as any).saveupdaterVars ?? 0)?.['lover_number'])] = (Math.floor(Math.random() * 2) + 1);
                } else {
                  if (((s as any).clotTypePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    ((s as any).clotQualPref = (s as any).clotQualPref ?? {})[(((s as any).saveupdaterVars ?? 0)?.['lover_number'])] = 2;
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_style_wealthy', 'like');
                  } else {
                    if (((s as any).clotTypePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 4) {
                      ((s as any).clotQualPref = (s as any).clotQualPref ?? {})[(((s as any).saveupdaterVars ?? 0)?.['lover_number'])] = 1;
                      qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_style_fetish', 'like');
                    }
                  }
                }
              }
              if (((s as any).clotQualPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_quality_low', 'like');
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_quality_medium', 'like');
              } else {
                if (((s as any).clotQualPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_quality_high', 'like');
                }
              }
              if (((s as any).clotTopPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_cleavage_none', 'like');
              } else {
                if (((s as any).clotTopPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_cleavage_small', 'like');
                } else {
                  if (((s as any).clotTopPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_cleavage_medium', 'like');
                  } else {
                    if (((s as any).clotTopPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 4) {
                      qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_cleavage_large', 'like');
                    }
                  }
                }
              }
              if (((s as any).bottShorPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_pants_long', 'like');
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_skirt_long', 'like');
              } else {
                if (((s as any).bottShorPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_pants_normal', 'like');
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_skirt_normal', 'like');
                } else {
                  if (((s as any).bottShorPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_pants_short', 'like');
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_skirt_short', 'like');
                  }
                }
              }
              if (((s as any).clotThinPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_thin_low', 'like');
              } else {
                if (((s as any).clotThinPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_thin_medium', 'like');
                } else {
                  if (((s as any).clotThinPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_thin_high', 'like');
                  }
                }
              }
              if (((s as any).bimbPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'clothes_style_bimbo', 'like');
              }
              if (((s as any).pierPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_piercings_none', 'like');
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_piercings_few', 'like');
              } else {
                if (((s as any).pierPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_piercings_multiple', 'like');
                } else {
                  if (((s as any).pierPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_piercings_lot', 'like');
                  }
                }
              }
              if (((s as any).tattPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_tattoos_none', 'like');
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_tattoos_few', 'like');
              } else {
                if (((s as any).tattPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_tattoos_multiple', 'like');
                } else {
                  if (((s as any).tattPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_tattoos_lot', 'like');
                  }
                }
              }
              if (((s as any).lipsPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_lips_normal', 'like');
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_lips_plump', 'like');
              } else {
                if (((s as any).lipsPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_lips_big', 'like');
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_lips_pillowy', 'like');
                }
              }
              if (((s as any).bodyPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_starving', 'like');
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_underweight', 'like');
              } else {
                if (((s as any).bodyPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_normal', 'like');
                } else {
                  if (((s as any).bodyPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_overweight', 'like');
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_bmi_obese', 'like');
                  }
                }
              }
              if (((s as any).makePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_makeup_light', 'like');
              } else {
                if (((s as any).makePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_makeup_moderate', 'like');
                } else {
                  if (((s as any).makePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'cosmetics_makeup_heavy', 'like');
                  }
                }
              }
              if (((s as any).IQPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'stats_intel_dumb');
              } else {
                if (((s as any).IQPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'stats_intel_normal');
                } else {
                  if (((s as any).IQPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'stats_intel_smart');
                  }
                }
              }
              qspCall(s, 'telefon', 'AddContact', (((s as any).saveupdaterVars ?? 0)?.['npcID']), (((s as any).npc_icon ?? 0)?.[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] ?? 0));
              qspCall(s, 'telefon', 'SetOutCallSchedule', (((s as any).saveupdaterVars ?? 0)?.['npcID']), 'gt \'lover_call\', \'callingTheLover\', \'' + (((s as any).saveupdaterVars ?? 0)?.['npcID']) + '\'', 'hour > 6 and hour < 20');
              ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['lover_number'] = ((s as any).saveupdaterVars['lover_number'] ?? 0) + (1);
            } while (((s as any).saveupdaterVars ?? 0)?.['lover_number'] < Object.keys((s as any).lover ?? {}).length);
          }
          (s as any).loverdesc = undefined;
          (s as any).loverbodyrand = undefined;
          (s as any).loverbody = undefined;
          (s as any).loverbodrand = undefined;
          (s as any).loverbod = undefined;
          (s as any).loverfacerand = undefined;
          (s as any).loverface = undefined;
          (s as any).loverdick = undefined;
          (s as any).loverdick_girth = undefined;
          (s as any).loversilaVag = undefined;
          (s as any).loverfinance = undefined;
          (s as any).vneshlover = undefined;
          (s as any).loverClo = undefined;
          (s as any).figurlover = undefined;
          (s as any).titlover = undefined;
          (s as any).clotTypePref = undefined;
          (s as any).clotQualPref = undefined;
          (s as any).clotTopPref = undefined;
          (s as any).bottShorPref = undefined;
          (s as any).clotThinPref = undefined;
          (s as any).bimbPref = undefined;
          (s as any).pierPref = undefined;
          (s as any).tattPref = undefined;
          (s as any).lipsPref = undefined;
          (s as any).bodyPref = undefined;
          (s as any).makePref = undefined;
          (s as any).IQPref = undefined;
          (s as any).pcs_lover_arr = undefined;
          (s as any).pcs_lovers = undefined;
          (s as any).pcs_girlfriends = undefined;
          (s as any).giftNum = undefined;
          (s as any).giftDay = undefined;
          if (((s as any).husID ?? 0) !== '') {
            (s as any).lover = [...((s as any).lover ?? []), ((s as any).husID ?? 0)];
            ((s as any).npc_rel = (s as any).npc_rel ?? {})[String((s as any).husID ?? 0)] = ((s as any).husband ?? 0);
            ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).husID ?? 0)] = 'husband';
            ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).husID ?? 0)] = ((s as any).husname ?? 0);
            if (((s as any).husHair ?? 0) === 'black') {
              ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[String((s as any).husID ?? 0)] = 0;
            } else {
              if (((s as any).husHair ?? 0) === 'brown'  ||  ((s as any).husHair ?? 0) === 'brunette') {
                ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[String((s as any).husID ?? 0)] = 1;
              } else {
                if (((s as any).husHair ?? 0) === 'red') {
                  ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[String((s as any).husID ?? 0)] = 2;
                } else {
                  ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[String((s as any).husID ?? 0)] = 3;
                }
              }
            }
            if (((s as any).husBody ?? 0) === 'short') {
              ((s as any).npc_height = (s as any).npc_height ?? {})[String((s as any).husID ?? 0)] = (Math.floor(Math.random() * 10) + 160);
            } else {
              if (((s as any).husBody ?? 0) === 'average') {
                ((s as any).npc_height = (s as any).npc_height ?? {})[String((s as any).husID ?? 0)] = (Math.floor(Math.random() * 9) + 171);
              } else {
                ((s as any).npc_height = (s as any).npc_height ?? {})[String((s as any).husID ?? 0)] = (Math.floor(Math.random() * 10) + 181);
              }
            }
            if (((s as any).husFat ?? 0) === 'thin') {
              ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 17;
            } else {
              if (((s as any).husFat ?? 0) === 'athletic') {
                ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 21;
              } else {
                if (((s as any).husFat ?? 0) === 'chunky') {
                  ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 23;
                } else {
                  ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 27;
                }
              }
            }
            ((s as any).npc_weight = (s as any).npc_weight ?? {})[String((s as any).husID ?? 0)] = (((s as any).saveupdaterVars ?? {})?.['bmi'] ?? 0) * (((s as any).npc_height ?? 0)?.[String((s as any).husID ?? 0)] ?? 0) * (((s as any).npc_height ?? 0)?.[String((s as any).husID ?? 0)] ?? 0) / 10000;
            ((s as any).npc_dick = (s as any).npc_dick ?? {})[String((s as any).husID ?? 0)] = ((s as any).husDick ?? 0);
            ((s as any).npc_gentle = (s as any).npc_gentle ?? {})[String((s as any).husID ?? 0)] = 0;
            ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).husID ?? 0)] = 0;
            if ((!((s as any).harakHusb ?? 0))) {
              ((s as any).npc_gentle = (s as any).npc_gentle ?? {})[String((s as any).husID ?? 0)] = 1;
            } else {
              if (((s as any).harakHusb ?? 0) === 2) {
                ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).husID ?? 0)] = 1;
              }
            }
            if (((s as any).izvratH ?? 0) > 0) {
              ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).husID ?? 0)] = 1;
            }
            ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})[String((s as any).husID ?? 0)] = ((s as any).silavagH ?? 0);
            ((s as any).npc_finance = (s as any).npc_finance ?? {})[String((s as any).husID ?? 0)] = ((s as any).husbFin ?? 0);
            (s as any).PRinStyle = 1;
            (s as any).PRinStyle2 = 1;
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['marry_day'] = ((s as any).daystart ?? 0) - ((s as any).husbanday ?? 0);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['eat_day'] = ((s as any).huseatday ?? 0);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['drunk_day'] = ((s as any).husbandrinkday ?? 0);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['drink'] = ((s as any).husbandrink ?? 0);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['hus_strapon'] = ((s as any).husbanstrapon ?? 0);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['houseslut'] = ((s as any).houseslut ?? 0);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['pervert_add'] = ((s as any).husbizvradd ?? 0);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['gentle_add'] = ((s as any).husbharmin ?? 0);
          }
          (s as any).husband = undefined;
          (s as any).husname = undefined;
          (s as any).husHair = undefined;
          (s as any).husBody = undefined;
          (s as any).husFat = undefined;
          (s as any).husDick = undefined;
          (s as any).harakHusb = undefined;
          (s as any).izvratH = undefined;
          (s as any).silavagH = undefined;
          (s as any).husbFin = undefined;
          (s as any).husbanday = undefined;
          (s as any).huseatday = undefined;
          (s as any).husbandMark = undefined;
          (s as any).husbandrinkday = undefined;
          (s as any).husbandrink = undefined;
          (s as any).husbanstrapon = undefined;
          (s as any).houseslut = undefined;
          (s as any).husbizvradd = undefined;
          (s as any).husbharmin = undefined;
          ((s as any).stat = (s as any).stat ?? {})['fuckbuddies_current'] = 0;
          ((s as any).stat = (s as any).stat ?? {})['ex_fuckbuddies'] = 0;
          ((s as any).stat = (s as any).stat ?? {})['sugardaddies_current'] = 0;
          ((s as any).stat = (s as any).stat ?? {})['ex_sugardaddies'] = 0;
          if (Object.keys((s as any).fuckbuddy ?? {}).length > 0) {
            (s as any).su_i = 0;
            (s as any).su_max_i = 0;
            do {
              (s as any).lover = [...((s as any).lover ?? []), (((s as any).fuckbuddy ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)];
              ((s as any).stat = (s as any).stat ?? {})['fuckbuddies_current'] = ((s as any).stat['fuckbuddies_current'] ?? 0) + (1);
              ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
              (s as any).su_i = ((s as any).su_i ?? 0) + (1);
            } while (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0));
          }
          if (Object.keys((s as any).sugar_daddy ?? {}).length > 0) {
            (s as any).su_i = 0;
            (s as any).su_max_i = 0;
            do {
              (s as any).lover = [...((s as any).lover ?? []), (((s as any).sugar_daddy ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)];
              ((s as any).stat = (s as any).stat ?? {})['sugardaddies_current'] = ((s as any).stat['sugardaddies_current'] ?? 0) + (1);
              ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
              (s as any).su_i = ((s as any).su_i ?? 0) + (1);
            } while (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0));
          }
          if (Object.keys((s as any).ex_fuckbuddy ?? {}).length > 0) {
            (s as any).su_i = 0;
            (s as any).su_max_i = 0;
            do {
              (s as any).lover = [...((s as any).lover ?? []), (((s as any).ex_fuckbuddy ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)];
              ((s as any).stat = (s as any).stat ?? {})['ex_fuckbuddies'] = ((s as any).stat['ex_fuckbuddies'] ?? 0) + (1);
              (s as any).su_i = ((s as any).su_i ?? 0) + (1);
            } while (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0));
          }
          if (Object.keys((s as any).ex_sugar_daddy ?? {}).length > 0) {
            (s as any).su_i = 0;
            (s as any).su_max_i = 0;
            do {
              (s as any).lover = [...((s as any).lover ?? []), (((s as any).ex_sugar_daddy ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0)];
              ((s as any).stat = (s as any).stat ?? {})['ex_sugardaddies'] = ((s as any).stat['ex_sugardaddies'] ?? 0) + (1);
              (s as any).su_i = ((s as any).su_i ?? 0) + (1);
            } while (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0));
          }
          (s as any).fuckbuddy = undefined;
          (s as any).sugar_daddy = undefined;
          (s as any).ex_fuckbuddy = undefined;
          (s as any).ex_sugar_daddy = undefined;
          (s as any).su_max_i = 0;
          (s as any).su_i = 0;
          do {
            ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['npcID'] = (((s as any).npc_index ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0);
            if (((s as any).npc_usedname ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] !== '') {
              if (((s as any).npc_girth ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] <= 8) {
                if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'skinny') {
                  ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 9;
                } else {
                  if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'slim') {
                    ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 10;
                  } else {
                    if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'well proportioned') {
                      ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 11;
                    } else {
                      if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thicker than average') {
                        ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 12;
                      } else {
                        if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thick') {
                          ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 13;
                        } else {
                          if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'massive') {
                            ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 14;
                          } else {
                            if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'monstrous') {
                              ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 15;
                            } else {
                              ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 12;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (((s as any).npc_height ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                  ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['av_height'] = 175;
                  ((s as any).npc_height = (s as any).npc_height ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = (Math.floor(Math.random() * 31) + 160);
                } else {
                  ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['av_height'] = 165;
                  ((s as any).npc_height = (s as any).npc_height ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = (Math.floor(Math.random() * 31) + 150);
                }
              }
              (s as any).su_temp_build_type = 0;
              if (((s as any).npc_height_desc ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === '') {
                if (((s as any).npc_height ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] < ((s as any).saveupdaterVars ?? 0)?.['av_height'] - 5) {
                  (s as any).su_temp_build_type = 1;
                  ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'short';
                } else {
                  if (((s as any).npc_height ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] <= ((s as any).saveupdaterVars ?? 0)?.['av_height'] + 5) {
                    (s as any).su_temp_build_type = 2;
                    ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'average';
                  } else {
                    (s as any).su_temp_build_type = 3;
                    ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'tall';
                  }
                }
              }
              if (((s as any).npc_weight ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                  (s as any).su_temp_av_weight = 68;
                  ((s as any).npc_weight = (s as any).npc_weight ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = (Math.floor(Math.random() * 47) + 45);
                } else {
                  (s as any).su_temp_av_weight = 60;
                  ((s as any).npc_weight = (s as any).npc_weight ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = (Math.floor(Math.random() * 43) + 39);
                }
              }
              if (((s as any).npc_weight_desc ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === '') {
                ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 100000 * ((s as any).npc_weight ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)] / (((s as any).npc_height ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)] * ((s as any).npc_height ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)]);
                if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
                  if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 190) {
                    ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'thin';
                  } else {
                    if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 225) {
                      ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'athletic';
                    } else {
                      if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 250) {
                        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'chunky';
                      } else {
                        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'fat';
                      }
                    }
                  }
                } else {
                  if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 190) {
                    if (((s as any).su_temp_build_type ?? 0) === 1) {
                      ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'petite';
                    } else {
                      ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'slender';
                    }
                  } else {
                    if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 225) {
                      ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'toned';
                    } else {
                      if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 250) {
                        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'average';
                      } else {
                        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'chubby';
                      }
                    }
                  }
                }
              }
              if (((s as any).npc_residence ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 1) {
                ((s as any).npc_residence = (s as any).npc_residence ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'pav_residential';
              } else {
                if (((s as any).npc_residence ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 2) {
                  ((s as any).npc_residence = (s as any).npc_residence ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'uni_grounds';
                } else {
                  if (((s as any).npc_residence ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 3) {
                    ((s as any).npc_residence = (s as any).npc_residence ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'city_residential';
                  } else {
                    ((s as any).npc_residence = (s as any).npc_residence ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'city_center';
                  }
                }
              }
              if (((s as any).npc_finance ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'a tracksuit';
              } else {
                if (((s as any).npc_finance ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 1) {
                  ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'jeans and a ' + ((((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) ? ('sweater') : ('blouse'));
                } else {
                  ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 'an expensive ' + ((((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) ? ('suit') : ('dress'));
                }
              }
              if (((s as any).npc_bush_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'hair_pubes_shaven', 'like');
              } else {
                if (((s as any).npc_bush_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'hair_pubes_shaven', 'like');
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'hair_pubes_stubble', 'like');
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'hair_pubes_patch', 'like');
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'hair_pubes_trimmed', 'like');
                } else {
                  if (((s as any).npc_bush_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'hair_pubes_bush', 'like');
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'hair_pubes_untrimmed', 'like');
                  }
                }
              }
              if (((s as any).npc_tit_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 1) {
                qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_tits_small', 'like');
              } else {
                if (((s as any).npc_tit_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 2) {
                  qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_tits_average', 'like');
                } else {
                  if (((s as any).npc_tit_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 3) {
                    qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_tits_big', 'like');
                  } else {
                    if (((s as any).npc_tit_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 4) {
                      qspCall(s, 'npc_set_preference', '$saveupdaterVars[\'npcID\']', 'body_tits_huge', 'like');
                    }
                  }
                }
              }
              if (((s as any).npc_daygenerated ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
                ((s as any).npc_daygenerated = (s as any).npc_daygenerated ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = ((s as any).daystart ?? 0);
              }
            }
            (s as any).su_i = ((s as any).su_i ?? 0) + (1);
            (s as any).npc_bush_pref = undefined;
            (s as any).npc_tit_pref = undefined;
            if (((s as any).boy1 ?? 0) !== '') {
              qspCall(s, 'npcStat', '$boy1', 'a');
            }
            if (((s as any).boy2 ?? 0) !== '') {
              qspCall(s, 'npcStat', '$boy2', 'b');
            }
            if (((s as any).boy3 ?? 0) !== '') {
              qspCall(s, 'npcStat', '$boy3', 'c');
            }
            if (((s as any).boy4 ?? 0) !== '') {
              qspCall(s, 'npcStat', '$boy4', 'd');
            }
            if (((s as any).boy5 ?? 0) !== '') {
              qspCall(s, 'npcStat', '$boy5', 'e');
            }
            if (((s as any).boy6 ?? 0) !== '') {
              qspCall(s, 'npcStat', '$boy6', 'f');
            }
            (s as any).su_i = 0;
            (s as any).su_max_i = 0;
            while (true) {
              if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
                qspCall(s, 'npcStat', '', (((s as any).boy ?? 0)?.[String((s as any).su_i ?? 0)] ?? 0), ((s as any).su_i ?? 0));
                (s as any).su_i = ((s as any).su_i ?? 0) + (1);
                break;
              }
              (s as any).su_i = undefined;
              (s as any).su_max_i = undefined;
            }
          } while (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0));
        } while (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0));
      } while (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0));
    } while (((s as any).su_i ?? 0) < 24);
  }
  if (((s as any).temp_current_save_version ?? 0) < 90401) {
    if (((s as any).npc_lastname ?? 0)?.['A29'] === '') {
      ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A28'] = ((s as any).pcs_lastname ?? 0);
      ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A29'] = ((s as any).pcs_lastname ?? 0);
      ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A33'] = ((s as any).pcs_lastname ?? 0);
      ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A34'] = ((s as any).pcs_lastname ?? 0);
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90402) {
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A191'] = 'Isabella';
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3  &&  ((s as any).NatbelQW ?? 0)?.['pav_slutfame_limit'] === 0) {
      qspCall(s, 'natbel_friend', 'init_slutfame_check');
    }
    if (((s as any).mod_list ?? 0) > 0) {
      (s as any).mod_i = 0;
      do {
        if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] === '') {
          (s as any).mod_name = undefined;
          (s as any).mod_version = undefined;
          (s as any).mod_author = undefined;
          (s as any).mod_desc = undefined;
          (s as any).mod_opt = undefined;
        } else {
          (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
        }
        (s as any).mod_list = undefined;
      } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length);
    }
    (s as any).su_i = 0;
    do {
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      (s as any).su_i = 0;
      do {
        (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      } while (((s as any).su_i ?? 0) < 11);
    } while (((s as any).su_i ?? 0) < 41);
  }
  if (((s as any).temp_current_save_version ?? 0) < 90500) {
    if (((s as any).pcs_vag ?? 0) < 20) {
      (s as any).pcs_vag = 20;
    }
    if (((s as any).aarraynumber ?? 0) < 291) {
      qspCall(s, 'npcstatic6', 'A290');
      qspCall(s, 'npcstatic6', 'A291');
      (s as any).aarraynumber = 291;
    }
    (s as any).mail = undefined;
    if (((s as any).blackmailQW ?? 0)?.['last_su'] < 1) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['last_su'] = 1;
      if (((s as any).blackmailQW ?? 0)?.['stage'] === 6) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_stage'] = 2;
      } else {
        if (((s as any).blackmailQW ?? 0)?.['stage'] === 7) {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 6;
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_stage'] = 3;
        } else {
          if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
            ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_stage'] = 3;
            if (((s as any).blackmailQW ?? 0)?.['stage'] === 8) {
              ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 7;
              if (((s as any).blackmailQW ?? 0)?.['package'] === 0) {
                ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = 7;
              }
            } else {
              if (((s as any).blackmailQW ?? 0)?.['stage'] === 9) {
                ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 7;
                qspCall(s, 'post_office', 'add_mail', 'city', 'gs \'blackmailer\', \'set_post_act\'');
                ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package_day'] = (((s as any).blackmailQW ?? 0)?.['smsday']);
              } else {
                if (((s as any).blackmailQW ?? 0)?.['stage'] >= 10) {
                  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 7;
                  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['inventory'] = 7;
                  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = 0;
                  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package_day'] = 0;
                }
              }
            }
          }
        }
      }
      if (((s as any).blackmailQW ?? 0)?.['escape'] === 1) {
        qspCall(s, 'blackmailer', 'set_officer_contact');
      }
    }
    if (((s as any).shared_apt ?? 0)?.['intro_daystart'] === 0  &&  ((s as any).shared_apt ?? 0)?.['introDone'] === 1) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['intro_daystart'] = ((s as any).daystart ?? 0);
    }
    if (((s as any).camwhore ?? 0) === 1) {
      ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_account'] = 1;
      if (((s as any).pcs_webcamname ?? 0) !== '') {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_camname'] = ((s as any).pcs_webcamname ?? 0);
        (s as any).pcs_webcamname = undefined;
      }
      if (((s as any).camclients ?? 0) > 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Viewers'] = ((s as any).camclients ?? 0);
        (s as any).camclients = undefined;
      }
      if (((s as any).regview ?? 0) > 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Followers'] = ((s as any).regview ?? 0);
        (s as any).regview = undefined;
      }
      if (((s as any).webpopular ?? 0) > 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['fame'] = ((s as any).webpopular ?? 0);
        (s as any).webpopular = undefined;
      }
      if (((s as any).tokens_made ?? 0) > 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_tokens'] = ((s as any).tokens_made ?? 0);
        (s as any).tokens_made = undefined;
      }
      (s as any).topmfc = undefined;
      (s as any).backmfc = undefined;
    }
    if (((s as any).shared_apt ?? 0)?.['enabled'] === 1  &&  (!((s as any).dothisonlyonce ?? 0))) {
      if (((s as any).daystart ?? 0) - ((s as any).shared_apt ?? 0)?.['intro_daystart'] > 6) {
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = (((s as any).daystart ?? 0) - (((s as any).shared_apt ?? {})?.['intro_daystart'] ?? 0)) / 7;
      } else {
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = 0;
      }
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekNum'] = (((s as any).shared_apt ?? {})?.['weekNum'] ?? 0) + 1;
      (s as any).dothisonlyonce = 1;
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['max_i'] = 0;
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
    do {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['npcID'] = qspUntranslated(s, "npc_index[saveupdaterVars['i']]", { location: "saveupdater" });
      if (((s as any).npc_usedname ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] !== '') {
        if (((s as any).npc_girth ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] > 0  &&  ((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'monstrous') {
          if (((s as any).npc_girth ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] <= 8) {
            if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'skinny') {
              ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 9;
            } else {
              if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'slim') {
                ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 10;
              } else {
                if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'well proportioned') {
                  ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 11;
                } else {
                  if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thicker than average') {
                    ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 12;
                  } else {
                    if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thick') {
                      ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 13;
                    } else {
                      if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'massive') {
                        ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 14;
                      } else {
                        if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'monstrous') {
                          ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 15;
                        } else {
                          ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 12;
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
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).npc_girth ?? 0)?.['A1'] === 0) {
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 1;
        do {
          ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['npcID'] = 'A' + (((s as any).saveupdaterVars ?? 0)?.['i']);
          if (((s as any).npc_girth ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
            if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'skinny') {
              ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 9;
            } else {
              if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'slim') {
                ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 10;
              } else {
                if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'well proportioned') {
                  ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 11;
                } else {
                  if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thicker than average') {
                    ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 12;
                  } else {
                    if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thick') {
                      ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 13;
                    } else {
                      if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'massive') {
                        ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 14;
                      } else {
                        if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'monstrous') {
                          ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 15;
                        } else {
                          ((s as any).npc_girth = (s as any).npc_girth ?? {})[(((s as any).saveupdaterVars ?? 0)?.['npcID'])] = 12;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).aarraynumber ?? 0));
      }
      if (((s as any).pcs_vball ?? 0) > 0  &&  (!((s as any).pcs_vball_block ?? 0))) {
        qspCall(s, 'stat_sklattrib_lvlset', '');
      }
      if (((s as any).KGZHP ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['HP'] = ((s as any).KGZHP ?? 0);
        (s as any).KGZHP = undefined;
      }
      if (((s as any).KGZday ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['day'] = ((s as any).KGZday ?? 0);
        (s as any).KGZday = undefined;
      }
      if (((s as any).KGZhour ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZhour ?? 0);
        (s as any).KGZhour = undefined;
      }
      if (((s as any).KGZsup ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['sup'] = ((s as any).KGZsup ?? 0);
        (s as any).KGZsup = undefined;
      }
      if (((s as any).KGZmedkit ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['medkit'] = ((s as any).KGZmedkit ?? 0);
        (s as any).KGZmedkit = undefined;
      }
      if (((s as any).KGZrec ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['rec'] = ((s as any).KGZrec ?? 0);
        (s as any).KGZrec = undefined;
      }
      if (((s as any).KGZplace ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = ((s as any).KGZplace ?? 0);
        (s as any).KGZplace = undefined;
      }
      if (((s as any).KGZcopcar ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['copcar'] = ((s as any).KGZcopcar ?? 0);
        (s as any).KGZcopcar = undefined;
      }
      if (((s as any).KGZgun ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['gun'] = ((s as any).KGZgun ?? 0);
        (s as any).KGZgun = undefined;
      }
      if (((s as any).bullet ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['bullet'] = ((s as any).bullet ?? 0);
        (s as any).bullet = undefined;
      }
      if (((s as any).KGZgun2 ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['gun2'] = ((s as any).KGZgun2 ?? 0);
        (s as any).KGZgun2 = undefined;
      }
      if (((s as any).bullet2 ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['bullet2'] = ((s as any).bullet2 ?? 0);
        (s as any).bullet2 = undefined;
      }
      if (((s as any).KGZgun3 ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['gun3'] = ((s as any).KGZgun3 ?? 0);
        (s as any).KGZgun3 = undefined;
      }
      if (((s as any).bullet3 ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['bullet3'] = ((s as any).bullet3 ?? 0);
        (s as any).bullet3 = undefined;
      }
      if (((s as any).KGZgenerator ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['generator'] = ((s as any).KGZgenerator ?? 0);
        (s as any).KGZgenerator = undefined;
      }
      if (((s as any).KGZbenzin ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['benzin'] = ((s as any).KGZbenzin ?? 0);
        (s as any).KGZbenzin = undefined;
      }
      if (((s as any).KGZbolgarka ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['bolgarka'] = ((s as any).KGZbolgarka ?? 0);
        (s as any).KGZbolgarka = undefined;
      }
      if (((s as any).KGZcopdoor ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['copdoor'] = ((s as any).KGZcopdoor ?? 0);
        (s as any).KGZcopdoor = undefined;
      }
      if (((s as any).KGZratia ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['ratia'] = ((s as any).KGZratia ?? 0);
        (s as any).KGZratia = undefined;
      }
      if (((s as any).KGZfortQW ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['fortQW'] = ((s as any).KGZfortQW ?? 0);
        (s as any).KGZfortQW = undefined;
      }
      if (((s as any).KGZfortOru ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['fortOru'] = ((s as any).KGZfortOru ?? 0);
        (s as any).KGZfortOru = undefined;
      }
      if (((s as any).KGZgranade ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['granade'] = ((s as any).KGZgranade ?? 0);
        (s as any).KGZgranade = undefined;
      }
      if (((s as any).KGZdost ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['dost'] = ((s as any).KGZdost ?? 0);
        (s as any).KGZdost = undefined;
      }
      if (((s as any).KGZgruzBenz ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['gruzBenz'] = ((s as any).KGZgruzBenz ?? 0);
        (s as any).KGZgruzBenz = undefined;
      }
      if (((s as any).KGZgruzBenzMark ?? 0)  !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['gruzBenzMark'] = ((s as any).KGZgruzBenzMark ?? 0);
        (s as any).KGZgruzBenzMark = undefined;
      }
      if (((s as any).KGZgruzovik ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['gruzovik'] = ((s as any).KGZgruzovik ?? 0);
        (s as any).KGZgruzovik = undefined;
      }
      if (((s as any).KGZlok ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['lok'] = ((s as any).KGZlok ?? 0);
        (s as any).KGZlok = undefined;
      }
      if (((s as any).KGZlok2 ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['lok2'] = ((s as any).KGZlok2 ?? 0);
        (s as any).KGZlok2 = undefined;
      }
      if (((s as any).KGZweapon ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['weapon'] = ((s as any).KGZweapon ?? 0);
        (s as any).KGZweapon = undefined;
      }
      if (((s as any).KGZplaceA ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['placeA'] = ((s as any).KGZplaceA ?? 0);
        (s as any).KGZplaceA = undefined;
      }
      if (((s as any).KGZdead ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = ((s as any).KGZdead ?? 0);
        (s as any).KGZdead = undefined;
      }
      if (((s as any).KGZbulgun ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['bulgun'] = ((s as any).KGZbulgun ?? 0);
        (s as any).KGZbulgun = undefined;
      }
      if (((s as any).KGZbatl ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['batl'] = ((s as any).KGZbatl ?? 0);
        (s as any).KGZbatl = undefined;
      }
      if (((s as any).KGZrecord ?? 0)    !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['record'] = ((s as any).KGZrecord ?? 0);
        (s as any).KGZrecord = undefined;
      }
      if (((s as any).KGZsvet ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['svet'] = ((s as any).KGZsvet ?? 0);
        (s as any).KGZsvet = undefined;
      }
      if (((s as any).KGZagr ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = ((s as any).KGZagr ?? 0);
        (s as any).KGZagr = undefined;
      }
      if (((s as any).KGZdist ?? 0)      !== 0) {
        ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = ((s as any).KGZdist ?? 0);
        (s as any).KGZdist = undefined;
      }
      if (((s as any).monthName ?? 0)[0] === ''  ||  ((s as any).weekName ?? 0)[1] === ''  ||  ((s as any).season ?? 0) === '') {
        qspCall(s, 'time', 'init_weeknames');
        qspCall(s, 'time', 'update_date');
      }
      if (((s as any).lesbian ?? 0)      > 0) {
        ((s as any).stat = (s as any).stat ?? {})['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (((s as any).lesbian ?? 0));
        (s as any).lesbian = undefined;
      }
      if (((s as any).hidden_lesbian ?? 0)  > 0) {
        ((s as any).stat = (s as any).stat ?? {})['lesbian_unaware_count'] = ((s as any).stat['lesbian_unaware_count'] ?? 0) + (((s as any).hidden_lesbian ?? 0));
        (s as any).hidden_lesbian = undefined;
      }
      if (((s as any).gang ?? 0)        > 0) {
        ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (((s as any).gang ?? 0));
        (s as any).gang = undefined;
      }
      if (((s as any).hidden_gang ?? 0)    > 0) {
        ((s as any).stat = (s as any).stat ?? {})['gangbang_unaware_count'] = ((s as any).stat['gangbang_unaware_count'] ?? 0) + (((s as any).hidden_gang ?? 0));
        (s as any).hidden_gang = undefined;
      }
      if (((s as any).rape ?? 0)        > 0) {
        ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (((s as any).rape ?? 0));
        (s as any).rape = undefined;
      }
      if (((s as any).hidden_rape ?? 0)    > 0) {
        ((s as any).stat = (s as any).stat ?? {})['rape_unaware_count'] = ((s as any).stat['rape_unaware_count'] ?? 0) + (((s as any).hidden_rape ?? 0));
        (s as any).hidden_rape = undefined;
      }
      if (((s as any).shemale ?? 0)      > 0) {
        ((s as any).stat = (s as any).stat ?? {})['shemale_count'] = ((s as any).stat['shemale_count'] ?? 0) + (((s as any).shemale ?? 0));
        (s as any).shemale = undefined;
      }
      if (((s as any).sex_ev ?? 0) > 0) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_stamina'] = (((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0);
      }
      if (((s as any).bimbo_flag ?? 0)    > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_flag'] = ((s as any).bimbo_flag ?? 0);
        (s as any).bimbo_flag = undefined;
      }
      if (((s as any).bimbo ?? 0)      > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_exp'] = ((s as any).bimbo ?? 0);
        (s as any).bimbo = undefined;
      }
      if (((s as any).bimbolevel ?? 0)    > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_lvl'] = ((s as any).bimbolevel ?? 0);
        (s as any).bimbolevel = undefined;
      }
      if (((s as any).bimbowithdrawal ?? 0)  > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_deg'] = ((s as any).bimbowithdrawal ?? 0);
        (s as any).bimbowithdrawal = undefined;
      }
      if (((s as any).bimbostupidity ?? 0)  > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_stupid'] = ((s as any).bimbostupidity ?? 0);
        (s as any).bimbostupidity = undefined;
      }
      if (((s as any).goth_flag ?? 0)    > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['goth_flag'] = ((s as any).goth_flag ?? 0);
        (s as any).goth_flag = undefined;
      }
      if (((s as any).punk_flag ?? 0)    > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['punk_flag'] = ((s as any).punk_flag ?? 0);
        (s as any).punk_flag = undefined;
      }
      if (((s as any).supnatvnesh ?? 0)    > 0) {
        if (((s as any).pcs_traits ?? 0)?.['bimbo_lvl'] > 0) {
          ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_pretty'] = ((s as any).supnatvnesh ?? 0);
        } else {
          (s as any).succappbonus = ((s as any).supnatvnesh ?? 0);
        }
        (s as any).supnatvnesh = undefined;
      }
      if (Object.keys((s as any).SMSIdentifier ?? {}).length < Object.keys((s as any).SMSContact ?? {}).length) {
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['max_i'] = 0;
        do {
          ((s as any).SMSIdentifier = (s as any).SMSIdentifier ?? {})[(((s as any).saveupdaterVars ?? 0)?.['i'])] = 1 + (((s as any).saveupdaterVars ?? {})?.['i'] ?? 0);
          ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['max_i']);
      }
      if (Object.keys((s as any).SMSSendIdentifier ?? {}).length < Object.keys((s as any).SMSSendContact ?? {}).length) {
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['max_i'] = 0;
        do {
          ((s as any).SMSSendIdentifier = (s as any).SMSSendIdentifier ?? {})[(((s as any).saveupdaterVars ?? 0)?.['i'])] = 1 + (((s as any).saveupdaterVars ?? {})?.['i'] ?? 0);
          ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['max_i']);
      }
      if (((s as any).gsAboVolley ?? 0) > 0) {
        ((s as any).vballVars = (s as any).vballVars ?? {})['lessons_remaining'] = ((s as any).gsAboVolley ?? 0);
        (s as any).gsAboVolley = 0;
      }
      ((s as any).emp_job_summerjob = (s as any).emp_job_summerjob ?? {})[1] = 1;
      (s as any).adv_init = 0;
      if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
        if (((s as any).stat ?? 0)?.['vaginal'] > 0  ||  ((s as any).stat ?? 0)?.['vaginal_fist'] > 0  ||  ((s as any).stat ?? 0)?.['hidden_vaginal'] > 0) {
          ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'vaginal';
        } else {
          if (((s as any).stat ?? 0)?.['vaginal_dildo'] > 0) {
            ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'dildo';
          } else {
            if (((s as any).stat ?? 0)?.['vaginal_strap'] > 0) {
              ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'strapon';
            }
          }
        }
      }
      if (((s as any).NewspaperVars ?? 0)?.['gad_missing_age'] > 0  &&  ((s as any).NewspaperVars ?? 0)?.['gad_missing_name'] === '') {
        if ((Math.floor(Math.random() * 10) + 0) < 4) {
          (s as any).randname = qspFunc(s, 'npcrnamefile', 'rusMale');
        } else {
          (s as any).randname = qspFunc(s, 'npcrnamefile', 'rusFemale');
        }
        (s as any).randname = ((s as any).randname ?? 0) + (' ' + qspFunc(s, 'npcrnamefile', 'rusSur'));
        ((s as any).NewspaperVars = (s as any).NewspaperVars ?? {})['gad_missing_name'] = ((s as any).randname ?? 0);
      }
      if (((s as any).aarraynumber ?? 0) < 294) {
        qspCall(s, 'npcstatic6', 'A292');
        qspCall(s, 'npcstatic6', 'A293');
        qspCall(s, 'npcstatic6', 'A294');
        (s as any).aarraynumber = 294;
      }
      if (((s as any).camGirl ?? 0)?.['last_su'] < 1) {
        (s as any).temp_name = '';
        if (((s as any).camGirl ?? 0)?.['MFC_camname'] !== '') {
          (s as any).temp_name = (((s as any).camGirl ?? 0)?.['MFC_camname']);
        }
        (s as any).camGirl = undefined;
        ((s as any).camGirl = (s as any).camGirl ?? {})['last_su'] = 1;
        if (((s as any).temp_name ?? 0) !== '') {
          ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_camname'] = ((s as any).temp_name ?? 0);
          qspCall(s, 'komp_cam_functions', 'MFC_init');
        }
        (s as any).temp_name = undefined;
        if ((String(((s as any).curloc ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'komp_cam'  ||  (String(((s as any).menu_loc ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'komp_cam'  ||  (String(((s as any).curloc ?? 0)).slice((1)-1, ((1)-1)+(7))) === 'kompMFC'  ||  (String(((s as any).menu_loc ?? 0)).slice((1)-1, ((1)-1)+(7))) === 'kompMFC') {
          scene.actions([
            { label: 'Stop Camming (camgirl update)', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'stop_camming');
    qspGoto(st, 'komp', 'browse');
  } },
          ]);
        }
      }
      if (((s as any).petka_homework ?? 0) > 0  ||  ((s as any).petka ?? 0)?.['homework'] > 0) {
        ((s as any).petkaQW = (s as any).petkaQW ?? {})['homework'] = 1;
        (s as any).petka_homework = undefined;
      }
      if (((s as any).petka ?? 0)?.['sub']      > 0) {
        ((s as any).petkaQW = (s as any).petkaQW ?? {})['sub'] = (((s as any).petka ?? 0)?.['sub']);
      }
      if (((s as any).petka ?? 0)?.['blackmail']  > 0) {
        ((s as any).petkaQW = (s as any).petkaQW ?? {})['blackmail'] = (((s as any).petka ?? 0)?.['blackmail']);
      }
      if (Object.keys((s as any).petka ?? {}).length    > 0) {
        (s as any).petka = undefined;
      }
    } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['max_i']);
  }
  if (((s as any).temp_current_save_version ?? 0) < 90501) {
    if (((s as any).brotherSex ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = ((s as any).brotherSex ?? 0);
      (s as any).brotherSex = undefined;
    }
    if (((s as any).brotherAge ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['Age'] = ((s as any).brotherAge ?? 0);
      (s as any).brotherAge = undefined;
    }
    if (((s as any).brotherknowslut ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = ((s as any).brotherknowslut ?? 0);
      (s as any).brotherknowslut = undefined;
    }
    if (((s as any).brotherDay ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day'] = ((s as any).brotherDay ?? 0);
      (s as any).brotherDay = undefined;
    }
    if (((s as any).brotherSexCount ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['sex_count_today'] = ((s as any).brotherSexCount ?? 0);
      (s as any).brotherSexCount = undefined;
    }
    if (((s as any).brotherMorningSex ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_morning'] = ((s as any).brotherMorningSex ?? 0);
      (s as any).brotherMorningSex = undefined;
    }
    if (((s as any).brotherNightSex ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_night'] = ((s as any).brotherNightSex ?? 0);
      (s as any).brotherNightSex = undefined;
    }
    if (((s as any).brotherEvSex ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_evening'] = ((s as any).brotherEvSex ?? 0);
      (s as any).brotherEvSex = undefined;
    }
    if (((s as any).brother_homework ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_day_homework'] = ((s as any).brother_homework ?? 0);
      (s as any).brother_homework = undefined;
    }
    if (((s as any).brother_saw_analplug ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['saw_analplug'] = ((s as any).brother_saw_analplug ?? 0);
      (s as any).brother_saw_analplug = undefined;
    }
    if (((s as any).brother_body_show ?? 0)    > 0) {
      (s as any).brother_body_show = undefined;
    }
    if (((s as any).brother_knows_not_virgin ?? 0)  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_not_virgin'] = ((s as any).brother_knows_not_virgin ?? 0);
      (s as any).brother_knows_not_virgin = undefined;
    }
    if (((s as any).natbro ?? 0)          > 0) {
      (s as any).natbro = undefined;
    }
    if (((s as any).BrotherNo ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['refused_seeporn_bj'] = ((s as any).BrotherNo ?? 0);
      (s as any).BrotherNo = undefined;
    }
    if (((s as any).BrotherNoDay ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['refused_seeporn_bj_day'] = ((s as any).BrotherNoDay ?? 0);
      (s as any).BrotherNoDay = undefined;
    }
    if (((s as any).brother_ev1 ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['bath_voyeur_day'] = ((s as any).brother_ev1 ?? 0);
      (s as any).brother_ev1 = undefined;
    }
    if (((s as any).brotherConfidence ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['confidence'] = ((s as any).brotherConfidence ?? 0);
      (s as any).brotherConfidence = undefined;
    }
    if (((s as any).npc_know_sveta_lact ?? 0)?.['A34']    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_pc_lact'] = (((s as any).npc_know_sveta_lact ?? 0)?.['A34']);
      (s as any).npc_know_sveta_lact = undefined;
    }
    if (((s as any).npc_breastfeed_by_sveta ?? 0)?.['A34']  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['breastfeed_by_pc'] = (((s as any).npc_breastfeed_by_sveta ?? 0)?.['A34']);
      (s as any).npc_breastfeed_by_sveta = undefined;
    }
    if (((s as any).npc_tasted_sveta_milk ?? 0)?.['A34']    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_pc_milk_taste'] = (((s as any).npc_tasted_sveta_milk ?? 0)?.['A34']);
      (s as any).npc_tasted_sveta_milk = undefined;
    }
    if (((s as any).brotherSexed ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['sex_ed'] = ((s as any).brotherSexed ?? 0);
      (s as any).brotherSexed = undefined;
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
    do {
      if (((s as any).npc_dick_desc ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] === 'monster') {
        ((s as any).npc_dick_desc = (s as any).npc_dick_desc ?? {})[(((s as any).saveupdaterVars ?? 0)?.['i'])] = 'monstrous';
      }
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).virgin_stats ?? 0)?.['cock_desc'] === 'monster') {
        ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_desc'] = 'monstrous';
      }
      if (((s as any).stat ?? 0)?.['biggest_cock_desc'] === 'monster') {
        ((s as any).stat = (s as any).stat ?? {})['biggest_cock_desc'] = 'monstrous';
      }
      if (((s as any).stat ?? 0)?.['biggest_cock_anal_desc'] === 'monster') {
        ((s as any).stat = (s as any).stat ?? {})['biggest_cock_anal_desc'] = 'monstrous';
      }
      if ((Array.isArray((s as any).skl_name) ? ((s as any).skl_name as any[]).indexOf('vball_block') : -1) >= 0) {
        (s as any).vball_lvl = (((s as any).vball_block_lvl ?? 0) + ((s as any).vball_rec_lvl ?? 0) + ((s as any).vball_serve_lvl ?? 0) + ((s as any).vball_set_lvl ?? 0) + ((s as any).vball_spike_lvl ?? 0)) / 5;
        (s as any).vball_lvlst = (((s as any).vball_block_lvlst ?? 0) + ((s as any).vball_rec_lvlst ?? 0) + ((s as any).vball_serve_lvlst ?? 0) + ((s as any).vball_set_lvlst ?? 0) + ((s as any).vball_spike_lvlst ?? 0)) / 5;
        (s as any).vball_exp = (((s as any).vball_block_exp ?? 0) + ((s as any).vball_rec_exp ?? 0) + ((s as any).vball_serve_exp ?? 0) + ((s as any).vball_set_exp ?? 0) + ((s as any).vball_spike_exp ?? 0)) / 5;
        (s as any).vball_mem = (((s as any).vball_block_mem ?? 0) + ((s as any).vball_rec_mem ?? 0) + ((s as any).vball_serve_mem ?? 0) + ((s as any).vball_set_mem ?? 0) + ((s as any).vball_spike_mem ?? 0)) / 5;
        (s as any).vball_deg = (((s as any).vball_block_deg ?? 0) + ((s as any).vball_rec_deg ?? 0) + ((s as any).vball_serve_deg ?? 0) + ((s as any).vball_set_deg ?? 0) + ((s as any).vball_spike_deg ?? 0)) / 5;
        (s as any).vball_block_lvl = undefined;
        (s as any).vball_rec_lvl = undefined;
        (s as any).vball_serve_lvl = undefined;
        (s as any).vball_set_lvl = undefined;
        (s as any).vball_spike_lvl = undefined;
        (s as any).vball_block_lvlst = undefined;
        (s as any).vball_rec_lvlst = undefined;
        (s as any).vball_serve_lvlst = undefined;
        (s as any).vball_set_lvlst = undefined;
        (s as any).vball_spike_lvlst = undefined;
        (s as any).vball_block_exp = undefined;
        (s as any).vball_rec_exp = undefined;
        (s as any).vball_serve_exp = undefined;
        (s as any).vball_set_exp = undefined;
        (s as any).vball_spike_exp = undefined;
        (s as any).vball_block_mem = undefined;
        (s as any).vball_rec_mem = undefined;
        (s as any).vball_serve_mem = undefined;
        (s as any).vball_set_mem = undefined;
        (s as any).vball_spike_mem = undefined;
        (s as any).vball_block_deg = undefined;
        (s as any).vball_rec_deg = undefined;
        (s as any).vball_serve_deg = undefined;
        (s as any).vball_set_deg = undefined;
        (s as any).vball_spike_deg = undefined;
        (s as any).skl_name = undefined;
        (s as any).nat_athlete = undefined;
        qspCall(s, 'stat_sklattrib', '');
        qspCall(s, 'stat_sklattrib_lvlset', '');
      }
      if (Object.keys((s as any).artskls ?? {}).length > 3) {
        (s as any).artskls = undefined;
        qspCall(s, 'stat_sklattrib_lvlset', '');
      }
      qspCall(s, 'fetish', '');
      if (((s as any).maso ?? 0)?.['exp'] !== 0  ||  ((s as any).maso ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'maso', (((s as any).maso ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'maso', (((s as any).maso ?? 0)?.['pref']));
        (s as any).maso = undefined;
      }
      if (((s as any).bound ?? 0)?.['exp'] !== 0  ||  ((s as any).bound ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'bound', (((s as any).bound ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'bound', (((s as any).bound ?? 0)?.['pref']));
        (s as any).bound = undefined;
      }
      if (((s as any).beast ?? 0)?.['exp'] !== 0  ||  ((s as any).beast ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'beast', (((s as any).beast ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'beast', (((s as any).beast ?? 0)?.['pref']));
        (s as any).beast = undefined;
      }
      if (((s as any).creampie ?? 0)?.['exp'] !== 0  ||  ((s as any).creampie ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'creampie', (((s as any).creampie ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'creampie', (((s as any).creampie ?? 0)?.['pref']));
        (s as any).creampie = undefined;
      }
      if (((s as any).impregnation ?? 0)?.['exp'] !== 0  ||  ((s as any).impregnation ?? 0)?.['pref'] !== 0) {
        (s as any).impregnation = undefined;
      }
      if (((s as any).pregnant ?? 0)?.['exp'] !== 0  ||  ((s as any).pregnant ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'pregnant', (((s as any).pregnant ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'pregnant', (((s as any).pregnant ?? 0)?.['pref']));
        (s as any).pregnant = undefined;
      }
      if (((s as any).exhibitionism ?? 0)?.['exp'] !== 0  ||  ((s as any).exhibitionism ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'exhibitionism', (((s as any).exhibitionism ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'exhibitionism', (((s as any).exhibitionism ?? 0)?.['pref']));
        (s as any).exhibitionism = undefined;
      }
      if (((s as any).rough ?? 0)?.['exp'] !== 0  ||  ((s as any).rough ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'rough', (((s as any).rough ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'rough', (((s as any).rough ?? 0)?.['pref']));
        (s as any).rough = undefined;
      }
      if (((s as any).prostitution ?? 0)?.['exp'] !== 0  ||  ((s as any).prostitution ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'prostitution', (((s as any).prostitution ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'prostitution', (((s as any).prostitution ?? 0)?.['pref']));
        (s as any).prostitution = undefined;
      }
      if (((s as any).dom ?? 0)?.['exp'] !== 0  ||  ((s as any).dom ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'dom', (((s as any).dom ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'dom', (((s as any).dom ?? 0)?.['pref']));
        (s as any).dom = undefined;
      }
      if (((s as any).sub ?? 0)?.['exp'] !== 0  ||  ((s as any).sub ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'sub', (((s as any).sub ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'sub', (((s as any).sub ?? 0)?.['pref']));
        (s as any).sub = undefined;
      }
      if (((s as any).incest ?? 0)?.['exp'] !== 0  ||  ((s as any).incest ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'incest', (((s as any).incest ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'incest', (((s as any).incest ?? 0)?.['pref']));
        (s as any).incest = undefined;
      }
      if (((s as any).feet ?? 0)?.['exp'] !== 0  ||  ((s as any).feet ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'feet', (((s as any).feet ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'feet', (((s as any).feet ?? 0)?.['pref']));
        (s as any).feet = undefined;
      }
      if (((s as any).lesbian ?? 0)?.['exp'] !== 0  ||  ((s as any).lesbian ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'lesbian', (((s as any).lesbian ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'lesbian', (((s as any).lesbian ?? 0)?.['pref']));
        (s as any).lesbian = undefined;
      }
      if (((s as any).group ?? 0)?.['exp'] !== 0  ||  ((s as any).group ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'group', (((s as any).group ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'group', (((s as any).group ?? 0)?.['pref']));
        (s as any).group = undefined;
      }
      if (((s as any).gang ?? 0)?.['exp'] !== 0  ||  ((s as any).gang ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'gangbang', (((s as any).gang ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'gangbang', (((s as any).gang ?? 0)?.['pref']));
        (s as any).gang = undefined;
      }
      if (((s as any).gangbang ?? 0)?.['exp'] !== 0  ||  ((s as any).gangbang ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'add_exp', 'gangbang', (((s as any).gangbang ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'add_pref', 'gangbang', (((s as any).gangbang ?? 0)?.['pref']));
        (s as any).gangbang = undefined;
      }
      if (((s as any).humiliation ?? 0)?.['exp'] !== 0  ||  ((s as any).humiliation ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'humiliation', (((s as any).humiliation ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'humiliation', (((s as any).humiliation ?? 0)?.['pref']));
        (s as any).humiliation = undefined;
      }
      if (((s as any).deepthroat ?? 0)?.['exp'] !== 0  ||  ((s as any).deepthroat ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'deepthroat', (((s as any).deepthroat ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'deepthroat', (((s as any).deepthroat ?? 0)?.['pref']));
        (s as any).deepthroat = undefined;
      }
      if (((s as any).unknown ?? 0)?.['exp'] !== 0  ||  ((s as any).unknown ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'unknown', (((s as any).unknown ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'unknown', (((s as any).unknown ?? 0)?.['pref']));
        (s as any).unknown = undefined;
      }
      if (((s as any).gloryhole ?? 0)?.['exp'] !== 0  ||  ((s as any).gloryhole ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'gloryhole', (((s as any).gloryhole ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'gloryhole', (((s as any).gloryhole ?? 0)?.['pref']));
        (s as any).gloryhole = undefined;
      }
      if (((s as any).rape ?? 0)?.['exp'] !== 0  ||  ((s as any).rape ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'rape', (((s as any).rape ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'rape', (((s as any).rape ?? 0)?.['pref']));
        (s as any).rape = undefined;
      }
      if (((s as any).shemale ?? 0)?.['exp'] !== 0  ||  ((s as any).shemale ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'shemale', (((s as any).shemale ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'shemale', (((s as any).shemale ?? 0)?.['pref']));
        (s as any).shemale = undefined;
      }
      if (((s as any).masturbate ?? 0)?.['exp'] !== 0  ||  ((s as any).masturbate ?? 0)?.['pref'] !== 0) {
        qspCall(s, 'fetish', 'set_exp', 'masturbate', (((s as any).masturbate ?? 0)?.['exp']));
        qspCall(s, 'fetish', 'set_pref', 'masturbate', (((s as any).masturbate ?? 0)?.['pref']));
        (s as any).masturbate = undefined;
      }
      qspCall(s, 'tattoo_management', 'count');
    } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']);
  }
  if (((s as any).temp_current_save_version ?? 0) < 90502) {
    if (Object.keys((s as any).npcs_jerked ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      do {
        ((s as any).npc_jerked = (s as any).npc_jerked ?? {})[qspUntranslated(s, "npcs_jerked[saveupdaterVars['i']]", { location: "saveupdater" })] = 1;
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        (s as any).npcs_jerked = undefined;
      } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']);
    }
    if (Object.keys((s as any).npcs_blown ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      do {
        ((s as any).npc_blown = (s as any).npc_blown ?? {})[qspUntranslated(s, "npcs_blown[saveupdaterVars['i']]", { location: "saveupdater" })] = 1;
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        (s as any).npcs_blown = undefined;
      } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']);
    }
    if (Object.keys((s as any).npcs_titfucked ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      do {
        ((s as any).npc_titfucked = (s as any).npc_titfucked ?? {})[qspUntranslated(s, "npcs_titfucked[saveupdaterVars['i']]", { location: "saveupdater" })] = 1;
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        (s as any).npcs_titfucked = undefined;
      } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']);
    }
    if (Object.keys((s as any).npcs_fucked ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      do {
        ((s as any).npc_sex = (s as any).npc_sex ?? {})[qspUntranslated(s, "npcs_fucked[saveupdaterVars['i']]", { location: "saveupdater" })] = 1;
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        (s as any).npcs_fucked = undefined;
      } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']);
    }
    if (Object.keys((s as any).npcs_anal_fucked ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      do {
        ((s as any).npc_anal_fucked = (s as any).npc_anal_fucked ?? {})[qspUntranslated(s, "npcs_anal_fucked[saveupdaterVars['i']]", { location: "saveupdater" })] = 1;
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        (s as any).npcs_anal_fucked = undefined;
      } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']);
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90600) {
    if (((s as any).ObjektBil ?? 0) !== 0) {
      ((s as any).obekt = (s as any).obekt ?? {})['bil'] = ((s as any).ObjektBil ?? 0);
      (s as any).ObjektBil = undefined;
    }
    if (((s as any).car ?? 0)?.['ID'] !== 0) {
    } else {
      if ((!((s as any).car ?? 0))) {
        (s as any).car = undefined;
        (s as any).cardrive = undefined;
      } else {
        if (((s as any).car ?? 0) !== 0  &&  ((s as any).car ?? 0) !== ''  &&  ((s as any).car ?? 0)?.['ID'] === 0  &&  ((s as any).car ?? 0)?.['name'] === '') {
          (s as any).temp_carnum = ((s as any).car ?? 0);
          (s as any).temp_carname = ((s as any).car ?? 0);
          (s as any).temp_newcond = (((s as any).car ?? 0)?.['new_condition']);
          (s as any).temp_curcond = (((s as any).car ?? 0)?.['current_condition']);
          (s as any).car = undefined;
          ((s as any).car = (s as any).car ?? {})['ID'] = ((s as any).temp_carnum ?? 0);
          ((s as any).car = (s as any).car ?? {})['name'] = ((s as any).temp_carname ?? 0);
          ((s as any).car = (s as any).car ?? {})['fuel'] = ((s as any).benz ?? 0);
          ((s as any).car = (s as any).car ?? {})['tank'] = 50;
          ((s as any).car = (s as any).car ?? {})['new_condition'] = ((s as any).temp_newcond ?? 0);
          ((s as any).car = (s as any).car ?? {})['current_condition'] = ((s as any).temp_curcond ?? 0);
          ((s as any).car = (s as any).car ?? {})['wreck'] = ((s as any).wrek ?? 0);
          if (((s as any).cardrive ?? 0) === 1) {
            qspCall(s, 'car_funcs', 'setloc', 'city_residential', '', 'city');
          } else {
            if (((s as any).cardrive ?? 0) === 2) {
              qspCall(s, 'car_funcs', 'setloc', 'city_center', '', 'city');
            } else {
              if (((s as any).cardrive ?? 0) === 3) {
                qspCall(s, 'car_funcs', 'setloc', 'city_industrial', '', 'city');
              } else {
                if (((s as any).cardrive ?? 0) === 4) {
                  qspCall(s, 'car_funcs', 'setloc', 'city_lake', 'start', 'city');
                } else {
                  if (((s as any).cardrive ?? 0) === 5) {
                    qspCall(s, 'car_funcs', 'setloc', 'city_park', 'start', 'city');
                  } else {
                    if (((s as any).cardrive ?? 0) === 6) {
                      qspCall(s, 'car_funcs', 'setloc', 'fuelstation', 'start', 'city');
                    } else {
                      if (((s as any).cardrive ?? 0) === 7) {
                        qspCall(s, 'car_funcs', 'setloc', 'autoservisF', 'start', 'city');
                      } else {
                        if (((s as any).cardrive ?? 0) === 8) {
                          qspCall(s, 'car_funcs', 'setloc', 'city_house_res_misc', 'fronty', 'city');
                        } else {
                          if (((s as any).cardrive ?? 0) === 9) {
                            qspCall(s, 'car_funcs', 'setloc', 'autotraidF', 'start', 'city');
                          } else {
                            if (((s as any).cardrive ?? 0) === 10) {
                              qspCall(s, 'car_funcs', 'setloc', 'city_park', 'whore', 'city');
                            } else {
                              if (((s as any).cardrive ?? 0) === 11) {
                                qspCall(s, 'car_funcs', 'setloc', 'city_sauna', '', 'city');
                              } else {
                                if (((s as any).cardrive ?? 0) === 12) {
                                  qspCall(s, 'car_funcs', 'setloc', 'obekt', '', 'other');
                                } else {
                                  if (((s as any).cardrive ?? 0) === 13) {
                                    qspCall(s, 'car_funcs', 'setloc', 'dachi', '', 'other');
                                  } else {
                                    if (((s as any).cardrive ?? 0) === 14) {
                                      qspCall(s, 'car_funcs', 'setloc', 'pushkin', '', 'pushkin');
                                    } else {
                                      if (((s as any).cardrive ?? 0) === 18) {
                                        qspCall(s, 'car_funcs', 'setloc', 'city_mansion_entrance', '', 'city');
                                      } else {
                                        if (((s as any).cardrive ?? 0) === 19) {
                                          qspCall(s, 'car_funcs', 'setloc', 'city_industrial_train', 'outside', 'city');
                                        } else {
                                          if (((s as any).cardrive ?? 0) === 20) {
                                            qspCall(s, 'car_funcs', 'setloc', 'pav_residential', '', 'pav');
                                          } else {
                                            if (((s as any).cardrive ?? 0) === 21) {
                                              qspCall(s, 'car_funcs', 'setloc', 'fuelstation', 'start', 'pav');
                                            } else {
                                              if (((s as any).cardrive ?? 0) === 22) {
                                                qspCall(s, 'car_funcs', 'setloc', 'road', '' + ((s as any).ncarroad ?? 0) + '', 'other');
                                              } else {
                                                if (((s as any).cardrive ?? 0) === 23) {
                                                  qspCall(s, 'car_funcs', 'setloc', 'gadukino', '', 'gad');
                                                } else {
                                                  if (((s as any).cardrive ?? 0) === 24) {
                                                    qspCall(s, 'car_funcs', 'setloc', 'pav_commercial', '', 'pav');
                                                  } else {
                                                    if (((s as any).cardrive ?? 0) === 25) {
                                                      qspCall(s, 'car_funcs', 'setloc', 'city_island', '', 'city');
                                                    } else {
                                                      if (((s as any).cardrive ?? 0) === 26) {
                                                        qspCall(s, 'car_funcs', 'setloc', 'pav_industrial', '', 'pav');
                                                      } else {
                                                        if (((s as any).cardrive ?? 0) === 27) {
                                                          qspCall(s, 'car_funcs', 'setloc', 'city_redlight', 'start', 'city');
                                                        } else {
                                                          if (((s as any).cardrive ?? 0) === 28) {
                                                            qspCall(s, 'car_funcs', 'setloc', 'city_suburbs', 'start', 'city');
                                                          } else {
                                                            if (((s as any).cardrive ?? 0) === 29) {
                                                              qspCall(s, 'car_funcs', 'setloc', 'gas_station_gp_117', 'outside', 'other');
                                                            } else {
                                                              alert('Error. Car parked in the city center');
                                                              qspCall(s, 'car_funcs', 'setloc', 'city_center', '', 'city');
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
          (s as any).cardrive = undefined;
          (s as any).ncarroad = undefined;
        }
      }
    }
    if (((s as any).husbandsexday ?? 0)  > 0) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['sexday'] = ((s as any).husbandsexday ?? 0);
      (s as any).husbandsexday = undefined;
    }
    if (((s as any).husbdolg ?? 0)      > 0) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['husb_debt_event'] = ((s as any).husbdolg ?? 0);
      (s as any).husbdolg = undefined;
    }
    if (((s as any).before_h_guy ?? 0) > 0) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['men_fucked_before'] = ((s as any).before_h_guy ?? 0) - ((s as any).guy_cheat ?? 0);
      (s as any).before_h_guy = undefined;
    }
    if (((s as any).before_h_girl ?? 0) > 0) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['women_fucked_before'] = ((s as any).before_h_girl ?? 0) - ((s as any).girl_cheat ?? 0);
      (s as any).before_h_girl = undefined;
    }
    if (((s as any).subscription ?? 0)?.['monthly_calls-discount'] < 0) {
      ((s as any).subscription = (s as any).subscription ?? {})['monthly_calls-discount'] = ((s as any).subscription['monthly_calls-discount'] ?? 0) * ((-1));
    }
    if (((s as any).subscription ?? 0)?.['mobile-discount'] < 0) {
      ((s as any).subscription = (s as any).subscription ?? {})['mobile-discount'] = ((s as any).subscription['mobile-discount'] ?? 0) * ((-1));
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['max_i'] = 0;
    if (((s as any).saveupdaterVars ?? 0)?.['max_i'] > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      do {
        if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] + '-date'] > 28) {
          ((s as any).subscription = (s as any).subscription ?? {})[qspUntranslated(s, "property_code[saveupdaterVars['i']]", { location: "saveupdater" }) + '-date'] = 1;
        }
        if ((((s as any).property_status ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] === 1  ||  ((s as any).property_status ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] === 2)  &&  ((s as any).subscription ?? 0)[((s as any).property_code ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']]] === 1) {
          if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] + '-suspension_day'] > 0) {
            ((s as any).subscription = (s as any).subscription ?? {})[qspUntranslated(s, "property_code[saveupdaterVars['i']]", { location: "saveupdater" }) + '-suspension_day'] = ((s as any).subscription[qspUntranslated(s, "property_code[saveupdaterVars['i']]", { location: "saveupdater" }) + '-suspension_day'] ?? 0) + (((s as any).daystart ?? 0) - ((s as any).day ?? 0));
          }
        }
        qspCall(s, 'array', 'remove_element', 'subscription', qspUntranslated(s, "property_code[saveupdaterVars['i']]", { location: "saveupdater" }) + '-suspension_month');
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['max_i']);
    }
    if (((s as any).subscription ?? 0)?.['metered_mobile-date'] > 28) {
      ((s as any).subscription = (s as any).subscription ?? {})['metered_mobile-date'] = 1;
    }
    if (((s as any).subscription ?? 0)?.['mobile-date'] > 28) {
      ((s as any).subscription = (s as any).subscription ?? {})['mobile-date'] = 1;
    }
    if (((s as any).subscription ?? 0)?.['mobile-suspension_day'] > 0) {
      ((s as any).subscription = (s as any).subscription ?? {})['mobile-suspension_day'] = ((s as any).subscription['mobile-suspension_day'] ?? 0) + (((s as any).daystart ?? 0) - ((s as any).day ?? 0));
    }
    qspCall(s, 'array', 'remove_element', 'subscription', 'mobile-suspension_month');
    if (((s as any).subscription ?? 0)?.['metered_calls-date'] > 28) {
      ((s as any).subscription = (s as any).subscription ?? {})['metered_calls-date'] = 1;
    }
    if (((s as any).subscription ?? 0)?.['monthly_calls-date'] > 28) {
      ((s as any).subscription = (s as any).subscription ?? {})['monthly_calls-date'] = 1;
    }
    if (((s as any).subscription ?? 0)?.['monthly_calls-suspension_day'] > 0) {
      ((s as any).subscription = (s as any).subscription ?? {})['monthly_calls-suspension_day'] = ((s as any).subscription['monthly_calls-suspension_day'] ?? 0) + (((s as any).daystart ?? 0) - ((s as any).day ?? 0));
    }
    qspCall(s, 'array', 'remove_element', 'subscription', 'monthly_calls-suspension_month');
    if (((s as any).SchoolAtestat ?? 0)  !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['school_diploma'] = ((s as any).SchoolAtestat ?? 0);
      (s as any).SchoolAtestat = undefined;
    }
    if (((s as any).school_check_day ?? 0)  !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['last_attendance'] = ((s as any).school_check_day ?? 0);
      (s as any).school_check_day = undefined;
    }
    if (((s as any).schoolProgulDay ?? 0)  !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['last_absence'] = ((s as any).schoolProgulDay ?? 0);
      (s as any).schoolProgulDay = undefined;
    }
    if (((s as any).schoolprogul ?? 0)    !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['absence_count'] = ((s as any).schoolprogul ?? 0);
      (s as any).schoolprogul = undefined;
    }
    if (((s as any).BeInSchool ?? 0)    !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['attendance_count'] = ((s as any).BeInSchool ?? 0);
      (s as any).BeInSchool = undefined;
    }
    if (((s as any).schoolBlock ?? 0)    !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['block'] = ((s as any).schoolBlock ?? 0);
      (s as any).schoolBlock = undefined;
    }
    if (((s as any).schoolPredupr ?? 0)  !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['expell_stage'] = ((s as any).schoolPredupr ?? 0);
      (s as any).schoolPredupr = undefined;
    }
    if (((s as any).camGirl ?? 0)?.['MFC_account'] === 1) {
      if (((s as any).camGirl ?? 0)?.['MFC_last_online'] === 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_last_online'] = ((s as any).daystart ?? 0);
      }
      if (((s as any).camGirl ?? 0)?.['MFC_maxFollowers'] < ((s as any).camGirl ?? 0)?.['MFC_Followers']) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_maxFollowers'] = (((s as any).camGirl ?? 0)?.['MFC_Followers']);
      }
    }
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A64'] = 19650523;
    if (((s as any).huntersAndreiLove ?? 0)      !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiLove'] = ((s as any).huntersAndreiLove ?? 0);
      (s as any).huntersAndreiLove = undefined;
    }
    if (((s as any).huntersAndreiQw ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiQw'] = ((s as any).huntersAndreiQw ?? 0);
      (s as any).huntersAndreiQw = undefined;
    }
    if (((s as any).huntersAndreisex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Andreisex'] = ((s as any).huntersAndreisex ?? 0);
      (s as any).huntersAndreisex = undefined;
    }
    if (((s as any).huntersIgorLove ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorLove'] = ((s as any).huntersIgorLove ?? 0);
      (s as any).huntersIgorLove = undefined;
    }
    if (((s as any).huntersIgorQW ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorQW'] = ((s as any).huntersIgorQW ?? 0);
      (s as any).huntersIgorQW = undefined;
    }
    if (((s as any).huntersIgorsex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Igorsex'] = ((s as any).huntersIgorsex ?? 0);
      (s as any).huntersIgorsex = undefined;
    }
    if (((s as any).huntersKnowSlut ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['KnowSlut'] = ((s as any).huntersKnowSlut ?? 0);
      (s as any).huntersKnowSlut = undefined;
    }
    if (((s as any).huntersRape ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Rape'] = ((s as any).huntersRape ?? 0);
      (s as any).huntersRape = undefined;
    }
    if (((s as any).huntersSergeiLove ?? 0)      !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['SergeiLove'] = ((s as any).huntersSergeiLove ?? 0);
      (s as any).huntersSergeiLove = undefined;
    }
    if (((s as any).huntersSergeiQw ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['SergeiQw'] = ((s as any).huntersSergeiQw ?? 0);
      (s as any).huntersSergeiQw = undefined;
    }
    if (((s as any).huntersSergeisex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Sergeisex'] = ((s as any).huntersSergeisex ?? 0);
      (s as any).huntersSergeisex = undefined;
    }
    if (((s as any).huntersVagSex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['VagSex'] = ((s as any).huntersVagSex ?? 0);
      (s as any).huntersVagSex = undefined;
    }
    if (((s as any).hunters_available ?? 0)      !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['available'] = ((s as any).hunters_available ?? 0);
      (s as any).hunters_available = undefined;
    }
    if (((s as any).hunters_bj_times ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['bj_times'] = ((s as any).hunters_bj_times ?? 0);
      (s as any).hunters_bj_times = undefined;
    }
    if (((s as any).hunters_breakfast ?? 0)      !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['breakfast'] = ((s as any).hunters_breakfast ?? 0);
      (s as any).hunters_breakfast = undefined;
    }
    if (((s as any).hunters_chattime ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['chattime'] = ((s as any).hunters_chattime ?? 0);
      (s as any).hunters_chattime = undefined;
    }
    if (((s as any).hunters_check ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['check'] = ((s as any).hunters_check ?? 0);
      (s as any).hunters_check = undefined;
    }
    if (((s as any).hunters_dinner ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['dinner'] = ((s as any).hunters_dinner ?? 0);
      (s as any).hunters_dinner = undefined;
    }
    if (((s as any).hunters_drink ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['drink'] = ((s as any).hunters_drink ?? 0);
      (s as any).hunters_drink = undefined;
    }
    if (((s as any).hunters_evening ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['evening'] = ((s as any).hunters_evening ?? 0);
      (s as any).hunters_evening = undefined;
    }
    if (((s as any).hunters_hunting ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['hunting'] = ((s as any).hunters_hunting ?? 0);
      (s as any).hunters_hunting = undefined;
    }
    if (((s as any).hunters_inside ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['inside'] = ((s as any).hunters_inside ?? 0);
      (s as any).hunters_inside = undefined;
    }
    if (((s as any).hunters_kuni ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['kuni'] = ((s as any).hunters_kuni ?? 0);
      (s as any).hunters_kuni = undefined;
    }
    if (((s as any).hunters_lunch ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['lunch'] = ((s as any).hunters_lunch ?? 0);
      (s as any).hunters_lunch = undefined;
    }
    if (((s as any).hunters_outside ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['outside'] = ((s as any).hunters_outside ?? 0);
      (s as any).hunters_outside = undefined;
    }
    if (((s as any).hunters_sleep ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['sleep'] = ((s as any).hunters_sleep ?? 0);
      (s as any).hunters_sleep = undefined;
    }
    if (((s as any).hunters_violent ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['violent'] = ((s as any).hunters_violent ?? 0);
      (s as any).hunters_violent = undefined;
    }
    if (((s as any).hunters_were_met ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['were_met'] = ((s as any).hunters_were_met ?? 0);
      (s as any).hunters_were_met = undefined;
    }
    if (((s as any).huntersbreakfast ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['breakfastday'] = ((s as any).huntersbreakfast ?? 0);
      (s as any).huntersbreakfast = undefined;
    }
    if (((s as any).hunterscabin ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['cabin'] = ((s as any).hunterscabin ?? 0);
      (s as any).hunterscabin = undefined;
    }
    if (((s as any).huntersdrinking ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['drinking'] = ((s as any).huntersdrinking ?? 0);
      (s as any).huntersdrinking = undefined;
    }
    if (((s as any).huntersexnude ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexnude'] = ((s as any).huntersexnude ?? 0);
      (s as any).huntersexnude = undefined;
    }
    if (((s as any).huntersknowfilm ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowfilm'] = ((s as any).huntersknowfilm ?? 0);
      (s as any).huntersknowfilm = undefined;
    }
    if (((s as any).huntersknowfoto ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowfoto'] = ((s as any).huntersknowfoto ?? 0);
      (s as any).huntersknowfoto = undefined;
    }
    if (((s as any).huntersknowstrip ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowstrip'] = ((s as any).huntersknowstrip ?? 0);
      (s as any).huntersknowstrip = undefined;
    }
    if (((s as any).hunterslut ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['slut'] = ((s as any).hunterslut ?? 0);
      (s as any).hunterslut = undefined;
    }
    if (((s as any).huntersmokBJ ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['smokeBJ'] = ((s as any).huntersmokBJ ?? 0);
      (s as any).huntersmokBJ = undefined;
    }
    if (((s as any).hunterstableBJ ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJ'] = ((s as any).hunterstableBJ ?? 0);
      (s as any).hunterstableBJ = undefined;
    }
    if (((s as any).hunterstableBJA ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJA'] = ((s as any).hunterstableBJA ?? 0);
      (s as any).hunterstableBJA = undefined;
    }
    if (((s as any).hunterstableBJI ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJI'] = ((s as any).hunterstableBJI ?? 0);
      (s as any).hunterstableBJI = undefined;
    }
    if (((s as any).hunterstableBJS ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJS'] = ((s as any).hunterstableBJS ?? 0);
      (s as any).hunterstableBJS = undefined;
    }
    if (((s as any).hunter_refuse ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['refuse'] = ((s as any).hunter_refuse ?? 0);
      (s as any).hunter_refuse = undefined;
    }
    if (((s as any).hunterknowday ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowday'] = ((s as any).hunterknowday ?? 0);
      (s as any).hunterknowday = undefined;
    }
    if (((s as any).forest_huntersex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['forest_sex'] = ((s as any).forest_huntersex ?? 0);
      (s as any).forest_huntersex = undefined;
    }
    if (((s as any).hunter_sexual_comfort ?? 0)    !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunter_sexual_comfort ?? 0);
      (s as any).hunter_sexual_comfort = undefined;
    }
    if (((s as any).hunter_collective_opinion ?? 0)  !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunter_collective_opinion ?? 0);
      (s as any).hunter_collective_opinion = undefined;
    }
    if (((s as any).underwear ?? 0)?.['lastworntype'] !== 0) {
      (s as any).lastwornunderwear = (((s as any).underwear ?? 0)?.['lastworntype']);
      qspCall(s, 'array', 'remove_element', 'underwear', 'lastworntype');
    }
    if (Object.keys((s as any).npc_kissed ?? {}).length > 0) {
      (s as any)[npc_kissed] ? (s as any)[npc_kissed] = { ...(s as any)[npc_kissed_count] } : (s as any)[npc_kissed] = { ...(s as any)[npc_kissed_count] };
      (s as any).npc_kissed = undefined;
    }
    if (Object.keys((s as any).npc_jerked ?? {}).length > 0) {
      (s as any)[npc_jerked] ? (s as any)[npc_jerked] = { ...(s as any)[npc_handstuff_count] } : (s as any)[npc_jerked] = { ...(s as any)[npc_handstuff_count] };
      (s as any).npc_jerked = undefined;
    }
    if (Object.keys((s as any).npc_blown ?? {}).length > 0) {
      (s as any)[npc_blown] ? (s as any)[npc_blown] = { ...(s as any)[npc_oral_count] } : (s as any)[npc_blown] = { ...(s as any)[npc_oral_count] };
      (s as any).npc_blown = undefined;
    }
    if (Object.keys((s as any).npc_titfucked ?? {}).length > 0) {
      (s as any)[npc_titfucked] ? (s as any)[npc_titfucked] = { ...(s as any)[npc_titstuff_count] } : (s as any)[npc_titfucked] = { ...(s as any)[npc_titstuff_count] };
      (s as any).npc_titfucked = undefined;
    }
    if (Object.keys((s as any).npc_sex ?? {}).length > 0) {
      (s as any)[npc_sex] ? (s as any)[npc_sex] = { ...(s as any)[npc_had_sex] } : (s as any)[npc_sex] = { ...(s as any)[npc_had_sex] };
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      if (((s as any).saveupdaterVars ?? 0)?.['maxi'] > 0) {
        do {
          ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[(((s as any).saveupdaterVars ?? 0)?.['i'])] = Math.min(Math.max(0, qspUntranslated(s, "npc_had_sex[saveupdaterVars['i']]", { location: "saveupdater" })), 1);
          ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']);
      }
      (s as any)[npc_sex] ? (s as any)[npc_sex] = { ...(s as any)[npc_vaginal_count] } : (s as any)[npc_sex] = { ...(s as any)[npc_vaginal_count] };
      (s as any).npc_sex = undefined;
    }
    if (Object.keys((s as any).npc_anal_fucked ?? {}).length > 0) {
      (s as any)[npc_anal_fucked] ? (s as any)[npc_anal_fucked] = { ...(s as any)[npc_anal_count] } : (s as any)[npc_anal_fucked] = { ...(s as any)[npc_anal_count] };
      (s as any).npc_anal_fucked = undefined;
    }
    if (((s as any).sosedKnowWork ?? 0)  !== 0) {
      ((s as any).neighborQW = (s as any).neighborQW ?? {})['knows_work'] = ((s as any).sosedKnowWork ?? 0);
      (s as any).sosedKnowWork = undefined;
    }
    if (((s as any).sosedQW ?? 0)      !== 0) {
      ((s as any).neighborQW = (s as any).neighborQW ?? {})['state'] = ((s as any).sosedQW ?? 0);
      (s as any).sosedQW = undefined;
    }
    if (((s as any).workPTU ?? 0)      !== 0) {
      ((s as any).teacher = (s as any).teacher ?? {})['job'] = ((s as any).workPTU ?? 0);
      (s as any).workPTU = undefined;
    }
    if (((s as any).teachlevel ?? 0)    !== 0) {
      ((s as any).teacher = (s as any).teacher ?? {})['level'] = ((s as any).teachlevel ?? 0);
      (s as any).teachlevel = undefined;
    }
    if (((s as any).izvad ?? 0)      !== 0) {
      ((s as any).teacher = (s as any).teacher ?? {})['apology'] = ((s as any).izvad ?? 0);
      (s as any).izvad = undefined;
    }
    if (((s as any).gor_dorm ?? 0)      !== 0) {
      ((s as any).hostel = (s as any).hostel ?? {})['status'] = ((s as any).gor_dorm ?? 0);
      (s as any).gor_dorm = undefined;
    }
    if (((s as any).pzptu ?? 0)      !== 0) {
      ((s as any).teacher = (s as any).teacher ?? {})['class_state'] = ((s as any).pzptu ?? 0);
      (s as any).pzptu = undefined;
    }
    if (((s as any).etoexhib ?? 0)      !== 0) {
      ((s as any).exhib = (s as any).exhib ?? {})['status'] = ((s as any).etoexhib ?? 0);
      (s as any).etoexhib = undefined;
    }
    if (((s as any).stolcigarettes ?? 0) !== 0) {
      (s as any).temp_stol = qspFunc(s, 'homes_properties_attr', 'get_property_attribute', '$bedroom', (((s as any).home ?? 0)?.['current']));
      ((s as any).stolcigarettes = (s as any).stolcigarettes ?? {})[String((s as any).temp_stol ?? 0)] = ((s as any).stolcigarettes ?? 0);
      (s as any).stolcigarettes = 0;
      (s as any).temp_stol = undefined;
    }
    if (Object.keys((s as any).npc_last_sex ?? {}).length > 0) {
      (s as any)[npc_last_sex] ? (s as any)[npc_last_sex] = { ...(s as any)[npc_last_vaginal] } : (s as any)[npc_last_sex] = { ...(s as any)[npc_last_vaginal] };
      (s as any).npc_last_sex = undefined;
    }
    if (Object.keys((s as any).shared_apt ?? {}).length > 0  &&  ((s as any).shared_apt ?? 0)?.['Enabled'] === 0) {
      (s as any).servitudelvl_bak = (((s as any).shared_apt ?? 0)?.['servitudeLvl']);
      (s as any).shared_apt = undefined;
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['seenAd'] = 1;
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['previousTenant'] = 1;
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = ((s as any).servitudelvl_bak ?? 0);
      (s as any).servitudelvl_bak = undefined;
    }
    if (((s as any).stat ?? 0)?.['hj'] > 0) {
      if (((s as any).stat ?? 0)?.['men_jerked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_jerked_times'] = (((s as any).stat ?? 0)?.['hj']);
      }
      if (((s as any).stat ?? 0)?.['men_jerked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_jerked'] = (((s as any).stat ?? 0)?.['hj']);
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_hj'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_jerked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_jerked_times'] = (((s as any).stat ?? 0)?.['hidden_hj']);
      }
      if (((s as any).stat ?? 0)?.['men_hidden_jerked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_jerked'] = (((s as any).stat ?? 0)?.['hidden_hj']);
      }
    }
    if (((s as any).stat ?? 0)?.['footjob'] > 0) {
      if (((s as any).stat ?? 0)?.['men_feetfucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_feetfucked_times'] = (((s as any).stat ?? 0)?.['footjob']);
      }
      if (((s as any).stat ?? 0)?.['men_feetfucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_feetfucked'] = (((s as any).stat ?? 0)?.['footjob']);
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_footjob'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_feetfucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_feetfucked_times'] = (((s as any).stat ?? 0)?.['hidden_footjob']);
      }
      if (((s as any).stat ?? 0)?.['men_hidden_feetfucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_feetfucked'] = (((s as any).stat ?? 0)?.['hidden_footjob']);
      }
    }
    if (((s as any).stat ?? 0)?.['titjob'] > 0) {
      if (((s as any).stat ?? 0)?.['men_titfucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_titfucked_times'] = (((s as any).stat ?? 0)?.['titjob']);
      }
      if (((s as any).stat ?? 0)?.['men_titfucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_titfucked'] = (((s as any).stat ?? 0)?.['titjob']);
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_titjob'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_titfucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_titfucked_times'] = (((s as any).stat ?? 0)?.['hidden_titjob']);
      }
      if (((s as any).stat ?? 0)?.['men_hidden_titfucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_titfucked'] = (((s as any).stat ?? 0)?.['hidden_titjob']);
      }
    }
    if (((s as any).stat ?? 0)?.['bj'] > 0) {
      if (((s as any).stat ?? 0)?.['men_blown_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_blown_times'] = (((s as any).stat ?? 0)?.['bj']);
      }
      if (((s as any).stat ?? 0)?.['men_blown'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_blown'] = (((s as any).stat ?? 0)?.['bj']);
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_bj'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_blown_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_blown_times'] = (((s as any).stat ?? 0)?.['hidden_bj']);
      }
      if (((s as any).stat ?? 0)?.['men_hidden_blown'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_blown'] = (((s as any).stat ?? 0)?.['hidden_bj']);
      }
    }
    if (((s as any).stat ?? 0)?.['cuni_give'] > 0) {
      if (((s as any).stat ?? 0)?.['women_munched_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_munched_times'] = (((s as any).stat ?? 0)?.['cuni_give']);
      }
      if (((s as any).stat ?? 0)?.['women_munched'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_munched'] = (((s as any).stat ?? 0)?.['cuni_give']);
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_cuni_give'] > 0) {
      if (((s as any).stat ?? 0)?.['women_hidden_munched_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_hidden_munched_times'] = (((s as any).stat ?? 0)?.['hidden_cuni_give']);
      }
      if (((s as any).stat ?? 0)?.['women_hidden_munched'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_hidden_munched'] = (((s as any).stat ?? 0)?.['hidden_cuni_give']);
      }
    }
    if (((s as any).stat ?? 0)?.['vaginal'] > 0) {
      if (((s as any).stat ?? 0)?.['men_vaginal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_vaginal_fucked_times'] = (((s as any).stat ?? 0)?.['vaginal']);
      }
      if (((s as any).stat ?? 0)?.['men_vaginal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_vaginal_fucked'] = (((s as any).stat ?? 0)?.['vaginal']);
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_vaginal'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_vaginal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_vaginal_fucked_times'] = (((s as any).stat ?? 0)?.['hidden_vaginal']);
      }
      if (((s as any).stat ?? 0)?.['men_hidden_vaginal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_vaginal_fucked'] = (((s as any).stat ?? 0)?.['hidden_vaginal']);
      }
    }
    if (((s as any).stat ?? 0)?.['trib'] > 0) {
      if (((s as any).stat ?? 0)?.['women_vaginal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_vaginal_fucked_times'] = (((s as any).stat ?? 0)?.['trib']);
      }
      if (((s as any).stat ?? 0)?.['women_vaginal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_vaginal_fucked'] = (((s as any).stat ?? 0)?.['trib']);
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_trib'] > 0) {
      if (((s as any).stat ?? 0)?.['women_hidden_vaginal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_hidden_vaginal_fucked_times'] = (((s as any).stat ?? 0)?.['hidden_trib']);
      }
      if (((s as any).stat ?? 0)?.['women_hidden_vaginal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_hidden_vaginal_fucked'] = (((s as any).stat ?? 0)?.['hidden_trib']);
      }
    }
    if (((s as any).stat ?? 0)?.['anal'] > 0) {
      if (((s as any).stat ?? 0)?.['men_anal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_anal_fucked_times'] = (((s as any).stat ?? 0)?.['anal']);
      }
      if (((s as any).stat ?? 0)?.['men_anal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_anal_fucked'] = (((s as any).stat ?? 0)?.['anal']);
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_anal'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_anal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_anal_fucked_times'] = (((s as any).stat ?? 0)?.['hidden_anal']);
      }
      if (((s as any).stat ?? 0)?.['men_hidden_anal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_anal_fucked'] = (((s as any).stat ?? 0)?.['hidden_anal']);
      }
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
    if (((s as any).saveupdaterVars ?? 0)?.['maxi'] > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      do {
        if (((String(qspUntranslated(s, "evt_content_code[\u00000\u0000]", { location: "saveupdater" })).indexOf(String('shop_photograpy'))) + 1) >= 0) {
          ((s as any).evt_content_code = (s as any).evt_content_code ?? {})[(((s as any).saveupdaterVars ?? 0)?.['i'])] = (String(qspUntranslated(s, "evt_content_code[saveupdaterVars['i']]", { location: "saveupdater" })).split('shop_photography').join('photography_work'));
        }
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      } while (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']);
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90601) {
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 8  &&  ((s as any).NatbelQW ?? 0)?.['shopping'] === 4) {
      ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['shopping'] = 3;
      (s as any).temp_runner = undefined;
      (s as any).temp_city_work = undefined;
      (s as any).temp_phot_told = undefined;
      (s as any).temp_beaut_told = undefined;
      (s as any).temp_model_told = undefined;
      (s as any).temp_gold_medals = undefined;
    }
    if (((s as any).NatbelQW ?? 0)?.['mother_talk'] >= 1) {
      (s as any).motherKnowSpravka = 1;
    }
    if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] > 0  &&  (String(((s as any).blackmailQW ?? 0)?.['cosplays_used']).length) < 4) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['cosplays_used'] = ';07;';
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90700) {
    if ((!((s as any).pushup_record_reset_970 ?? 0))) {
      (s as any).pushup_record_reset_970 = 1;
      (s as any).pushrecord = 0;
    }
    if (((s as any).stat ?? 0)?.['women_vag_fucked'] > 0) {
      ((s as any).stat = (s as any).stat ?? {})['women_vaginal_fucked'] = ((s as any).stat['women_vaginal_fucked'] ?? 0) + ((((s as any).stat ?? 0)?.['women_vag_fucked']));
      qspCall(s, 'array', 'remove_element', 'stat', 'women_vag_fucked');
    }
    if (((s as any).stat ?? 0)?.['herm_vag_fucked'] > 0) {
      ((s as any).stat = (s as any).stat ?? {})['herm_vaginal_fucked'] = ((s as any).stat['herm_vaginal_fucked'] ?? 0) + ((((s as any).stat ?? 0)?.['herm_vag_fucked']));
      qspCall(s, 'array', 'remove_element', 'stat', 'herm_vag_fucked');
    }
  }
  scene.build();
}

export const saveupdater: LocationDef = {
  name: 'saveupdater',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
