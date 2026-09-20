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
    // TODO-QSP: :girlfriend_looop
    if (((s as any).loverGender ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      (s as any).pcs_girlfriends = ((s as any).pcs_girlfriends ?? 0) + (1);
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      // TODO-QSP: jump 'girlfriend_looop'
    }
    if (((s as any).analorgasm ?? 0) > 0) {
      (s as any).orgasm_anal = ((s as any).orgasm_anal ?? 0) + (((s as any).analorgasm ?? 0));
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80403) {
    if (((s as any).meynoldQW ?? 0) === 1  ||  ((s as any).meynoldQW ?? 0) === 2) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = ((s as any).meynoldQW ?? 0);
    }
    if (((s as any).katjaFirstKiss ?? 0) > 0  ||  ((s as any).KatjaOTN ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 3;
    }
    if (((s as any).katjaTanga ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['pantiesQWstage'] = ((s as any).katjaTanga ?? 0);
      // TODO-QSP: killvar 'katjaTanga'
    }
    if (((s as any).katja_tanga_end ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['pantiesQWstage'] = 5;
      // TODO-QSP: killvar 'katja_tanga_end'
    }
    if (((s as any).katjaSlut ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaSlut ?? 0);
      // TODO-QSP: killvar 'katjaSlut'
    }
    if (((s as any).katjaHorny ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaHorny ?? 0);
      // TODO-QSP: killvar 'katjaHorny'
    }
    if (((s as any).katjaSex ?? 0) === 1) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['park_sex'] = 1;
      // TODO-QSP: killvar 'katjaSex'
    }
    if (((s as any).katjaSex ?? 0) === 2) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['park_sex'] = 2;
      // TODO-QSP: killvar 'katjaSex'
    }
    if (((s as any).katjaSex ?? 0) > 2) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['park_sex'] = 3;
      // TODO-QSP: killvar 'katjaSex'
    }
    if (((s as any).KatjaMastr ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['masturbates'] = ((s as any).KatjaMastr ?? 0);
      // TODO-QSP: killvar 'KatjaMastr'
    }
    if (((s as any).KatjaThroat ?? 0) > 0) {
      ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).KatjaThroat ?? 0);
      // TODO-QSP: killvar 'KatjaThroat'
    }
    if (((s as any).KatjaAnus ?? 0) > 0) {
      ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).KatjaAnus ?? 0);
      // TODO-QSP: killvar 'KatjaAnus'
    }
    if (((s as any).KatjaOrgasm ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgasm_day'] = ((s as any).KatjaOrgasm ?? 0);
      // TODO-QSP: killvar 'KatjaOrgasm'
    }
    if (((s as any).katjaMeynoldday ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['afterschool_hangout_day'] = ((s as any).katjaMeynoldday ?? 0);
      // TODO-QSP: killvar 'katjaMeynoldday'
    }
    if (((s as any).tangaday ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['no_panties_day'] = ((s as any).tangaday ?? 0);
      // TODO-QSP: killvar 'tangaday'
    }
    if (((s as any).KatjaKnowMastr ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_masterbation'] = 1;
      // TODO-QSP: killvar 'KatjaKnowMastr'
    }
    if (((s as any).SelfFistingKnow ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_self_fisting'] = 1;
      // TODO-QSP: killvar 'SelfFistingKnow'
    }
    if (((s as any).KatjaKnowBJ ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_BJ'] = 1;
      // TODO-QSP: killvar 'KatjaKnowBJ'
    }
    if (((s as any).KatjaKnowSex ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_sex'] = 1;
      // TODO-QSP: killvar 'KatjaKnowSex'
    }
    if (((s as any).KatjaKnowAnal ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_anal'] = 1;
      // TODO-QSP: killvar 'KatjaKnowAnal'
    }
    if (((s as any).KatjaKnowKuni ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_cuni'] = 1;
      // TODO-QSP: killvar 'KatjaKnowKuni'
    }
    if (((s as any).KatjaKnowPirsA ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_Pirced_tongue'] = 1;
      // TODO-QSP: killvar 'KatjaKnowPirsA'
    }
    if (((s as any).katschoolsex ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['school_sex'] = 1;
      // TODO-QSP: killvar 'katschoolsex'
    }
    if (((s as any).katja_disco_Foto ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['disco_Foto'] = 1;
      // TODO-QSP: killvar 'katja_disco_Foto'
    }
    if (((s as any).meynoldQW ?? 0) === 3) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['drunk_help'] = 1;
      // TODO-QSP: killvar 'meynoldQW'
    }
    if (((s as any).katja_disco_end ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['no_panties_at_disco'] = 1;
      // TODO-QSP: killvar 'katja_disco_end'
    }
    if (((s as any).KatjaOhrenet ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['sex_in_the_park_comment'] = ((s as any).KatjaOhrenet ?? 0);
      // TODO-QSP: killvar 'KatjaOhrenet'
    }
    if (((s as any).flag_start_parc ?? 0) > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['school_kiss'] = ((s as any).flag_start_parc ?? 0);
      // TODO-QSP: killvar 'flag_start_parc'
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
    // TODO-QSP: :danilovichfix
    if (((s as any).danilovich ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      ((s as any).danilovich_outfits = (s as any).danilovich_outfits ?? {})[String((s as any).i ?? 0)] = 1;
      ((s as any).danilovich_outfits_s = (s as any).danilovich_outfits_s ?? {})[String((s as any).i ?? 0)] = ((s as any).danilovich_s ?? 0)?.[String((s as any).i ?? 0)];
      ((s as any).danilovich_outfits_h = (s as any).danilovich_outfits_h ?? {})[String((s as any).i ?? 0)] = ((s as any).danilovich_h ?? 0)?.[String((s as any).i ?? 0)];
      ((s as any).danilovich_outfits_b = (s as any).danilovich_outfits_b ?? {})[String((s as any).i ?? 0)] = ((s as any).danilovich_b ?? 0)?.[String((s as any).i ?? 0)];
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 170) {
      // TODO-QSP: jump 'danilovichfix'
    }
    if (((s as any).agape ?? 0)[4] === 0) {
      ((s as any).agape = (s as any).agape ?? {})[4] = 10;
    }
    if (((s as any).vgape ?? 0)[4] === 0) {
      ((s as any).vgape = (s as any).vgape ?? {})[4] = 10;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80502) {
    (s as any).i = 0;
    // TODO-QSP: :saveupdaterloop852_1
    (s as any).text = 'C' + String(((s as any).i ?? 0));
    (s as any).temp1 = qspFunc(s, 'array', 'get_me_index', '$npc_firstname', ((s as any).text ?? 0));
    if (((s as any).temp1 ?? 0) >= 0) {
      ((s as any).npc_index = (s as any).npc_index ?? {})[String((s as any).text ?? 0)] = ((s as any).text ?? 0);
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < ((s as any).carraynumber ?? 0)) {
      // TODO-QSP: jump 'saveupdaterloop852_1'
    }
    (s as any).i = 0;
    // TODO-QSP: :saveupdaterloop852_2
    (s as any).text = 'B' + String(((s as any).i ?? 0));
    (s as any).temp1 = qspFunc(s, 'array', 'get_me_index', '$npc_firstname', ((s as any).text ?? 0));
    if (((s as any).temp1 ?? 0) >= 0) {
      ((s as any).npc_index = (s as any).npc_index ?? {})[String((s as any).text ?? 0)] = ((s as any).text ?? 0);
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < ((s as any).barraynumber ?? 0)) {
      // TODO-QSP: jump 'saveupdaterloop852_2'
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80503) {
    (s as any).i = 0;
    // TODO-QSP: :saveupdaterloop853_1
    if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 5) {
      ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gschool_outcast_chats/u0027, /u0027/u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))] + '</a>';
    } else {
      if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 4) {
        ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gschool_gopnik_chats/u0027, /u0027/u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))] + '</a>';
      } else {
        if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 3) {
          ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gschool_nerd_chats/u0027, /u0027/u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))] + '</a>';
        } else {
          if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 2) {
            ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gschool_jock_chats/u0027, /u0027/u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))] + '</a>';
          } else {
            if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
              ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A' + String(((s as any).i ?? 0))] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gschool_coolkid_chats/u0027, /u0027/u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))] + '</a>';
            }
          }
        }
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < 250) {
      // TODO-QSP: jump 'saveupdaterloop853_1'
    }
    if (((s as any).hotelroom1day ?? 0) !== 0) {
      ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})['pav'] = ((s as any).hotelroom1day ?? 0);
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = ((s as any).HotelRoom ?? 0);
      (s as any).HotelRoom = 0;
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80504) {
    ((s as any).npcGoSchool = (s as any).npcGoSchool ?? {})['A18'] = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gschool_jock_chats/u0027, /u0027/u0027); return false;">' + ((s as any).npc_usedname ?? 0)?.['A18'] + '</a>';
    if (((s as any).storyline ?? 0) === 1  &&  ((s as any).magikDostup ?? 0) === 1) {
      (s as any).start_type = 'sg';
      // TODO-QSP: $start_type[1]   = 'nomagic'
    } else {
      if (((s as any).start_type ?? 0) === 'csb') {
        (s as any).start_type = 'sg_tg';
        // TODO-QSP: $start_type[1]   = 'tg'
      } else {
        if (((s as any).storyline ?? 0) === 1) {
          (s as any).start_type = 'sg_m';
        } else {
          if (((s as any).magikDostup ?? 0) === 1) {
            (s as any).start_type = 'city';
            // TODO-QSP: $start_type[1]   = 'nomagic'
          } else {
            (s as any).start_type = 'city_tg';
            // TODO-QSP: $start_type[1]   = 'tg'
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
    // TODO-QSP: :loopcatsbrassave
    if (((s as any).kats_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      ((s as any).cats_brasS = (s as any).cats_brasS ?? {})[String((s as any).i ?? 0)] = ((s as any).kats_brasS ?? 0)?.[String((s as any).i ?? 0)];
      ((s as any).cats_bras = (s as any).cats_bras ?? {})[String((s as any).i ?? 0)] = ((s as any).kats_bras ?? 0)?.[String((s as any).i ?? 0)];
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).kats_bras ?? {}).length) {
      // TODO-QSP: jump 'loopcatsbrassave'
    }
    (s as any).i = 1;
    // TODO-QSP: :loopcatspantiessave
    if (((s as any).kats_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      ((s as any).cats_pantiesS = (s as any).cats_pantiesS ?? {})[String((s as any).i ?? 0)] = ((s as any).kats_pantiesS ?? 0)?.[String((s as any).i ?? 0)];
      ((s as any).cats_panties = (s as any).cats_panties ?? {})[String((s as any).i ?? 0)] = ((s as any).kats_panties ?? 0)?.[String((s as any).i ?? 0)];
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).kats_panties ?? {}).length) {
      // TODO-QSP: jump 'loopcatspantiessave'
    }
    if (((s as any).AvelinaQW ?? 0)?.['encourage'] === 1) {
      ((s as any).AvelinaQW = (s as any).AvelinaQW ?? {})['encourage'] = 0;
    }
    if (((s as any).lariskaQwestDay ?? 0) < 0  ||  ((s as any).lariskaQwestDay ?? 0) > 0) {
      // TODO-QSP: killvar 'lariskaQwestDay'
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
    if (((s as any).mother_go ?? 0) > 0) {
      ((s as any).locat = (s as any).locat ?? {})['Mom_cafe_sex'] = ((s as any).mother_go ?? 0);
    }
    if (((s as any).indorf ?? 0) > 0) {
      ((s as any).locat = (s as any).locat ?? {})['Fam_inGad'] = ((s as any).indorf ?? 0);
    }
    if (((s as any).indorf_month ?? 0) === ((s as any).month ?? 0)) {
      ((s as any).locat = (s as any).locat ?? {})['Fam_month_inGad'] = ((s as any).indorf_month ?? 0);
    }
    if (((s as any).dostupindorf ?? 0) > 0) {
      ((s as any).locat = (s as any).locat ?? {})['Fam_set_month_inGad'] = ((s as any).dostupindorf ?? 0);
    }
    if (((s as any).sister_indorf ?? 0) > 0) {
      ((s as any).locat = (s as any).locat ?? {})['Anya_Gad'] = ((s as any).sister_indorf ?? 0);
    }
    if (((s as any).sister_opr_indorf ?? 0) > 0) {
      ((s as any).locat = (s as any).locat ?? {})['Anya_check_Gad'] = ((s as any).sister_opr_indorf ?? 0);
    }
    if (((s as any).workKafe ?? 0) === 1) {
      (s as any).workKafe = 0;
      ((s as any).workKafe = (s as any).workKafe ?? {})['job'] = 1;
    }
    if (((s as any).moisturiser ?? 0)?.['time'] > 0) {
      (s as any).moisturiser_time = ((s as any).moisturiser ?? 0)?.['time'];
      qspCall(s, 'array', 'remove_element', '' + ((s as any).moisturiser ?? 0) + '', 'time');
    }
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
      // TODO-QSP: killvar 'artembj'
    }
    if (((s as any).artemsex ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['sex'] = ((s as any).artemsex ?? 0);
      // TODO-QSP: killvar 'artemsex'
    }
    if (((s as any).artemanal ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['anal'] = ((s as any).artemanal ?? 0);
      // TODO-QSP: killvar 'artemanal'
    }
    if (((s as any).artemhj ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['hj'] = ((s as any).artemhj ?? 0);
      // TODO-QSP: killvar 'artemhj'
    }
    if (((s as any).artembrokenheart ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['brokenheart'] = ((s as any).artembrokenheart ?? 0);
      // TODO-QSP: killvar 'artembrokenheart'
    }
    if (((s as any).artemStripSee ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['stripsee'] = ((s as any).artemStripSee ?? 0);
      // TODO-QSP: killvar 'artemStripSee'
    }
    if (((s as any).artemlove ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['artemlove'] = ((s as any).artemlove ?? 0);
      // TODO-QSP: killvar 'artemlove'
    }
    if (((s as any).artemblok ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['artemblok'] = ((s as any).artemblok ?? 0);
      // TODO-QSP: killvar 'artemblok'
    }
    if (((s as any).artembf ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['bf'] = ((s as any).artembf ?? 0);
      // TODO-QSP: killvar 'artembf'
    }
    if (((s as any).artdryhump ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['dryhump'] = ((s as any).artdryhump ?? 0);
      // TODO-QSP: killvar 'artdryhump'
    }
    if (((s as any).artlie ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['artlie'] = ((s as any).artlie ?? 0);
      // TODO-QSP: killvar 'artlie'
    }
    if (((s as any).artfall ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['artfall'] = ((s as any).artfall ?? 0);
      // TODO-QSP: killvar 'artfall'
    }
    if (((s as any).artdate ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['date'] = ((s as any).artdate ?? 0);
      // TODO-QSP: killvar 'artdate'
    }
    if (((s as any).artdim ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['dimka'] = ((s as any).artdim ?? 0);
      // TODO-QSP: killvar 'artdim'
    }
    if (((s as any).artslutlove ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['slutlove'] = ((s as any).artslutlove ?? 0);
      // TODO-QSP: killvar 'artslutlove'
    }
    if (((s as any).artsveslut ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['sveslut'] = ((s as any).artsveslut ?? 0);
      // TODO-QSP: killvar 'artsveslut'
    }
    if (((s as any).metArtemMom ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['metArtemMom'] = ((s as any).metArtemMom ?? 0);
      // TODO-QSP: killvar 'metArtemMom'
    }
    if (((s as any).artdimhelp ?? 0) > 0) {
      ((s as any).artemQW = (s as any).artemQW ?? {})['dimkahelp'] = ((s as any).artdimhelp ?? 0);
      // TODO-QSP: killvar 'artdimhelp'
    }
    if (((s as any).JulMilBestFrend ?? 0) > 0) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['JulMilBestFrend'] = ((s as any).JulMilBestFrend ?? 0);
      // TODO-QSP: killvar 'JulMilBestFrend'
    }
    if (((s as any).eatJulMilDay ?? 0)) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['eatJulMilDay'] = ((s as any).eatJulMilDay ?? 0);
      // TODO-QSP: killvar 'eatJulMilDay'
    }
    if (((s as any).SexTalkJulia ?? 0)) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['SexTalkJulia'] = ((s as any).SexTalkJulia ?? 0);
      // TODO-QSP: killvar 'SexTalkJulia'
    }
    if (((s as any).BeInJulMilHome ?? 0)) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['home_unlocked'] = ((s as any).BeInJulMilHome ?? 0);
      // TODO-QSP: killvar 'BeInJulMilHome'
    }
    if (((s as any).JuliaMilLernQW ?? 0)) {
      ((s as any).juliaQW = (s as any).juliaQW ?? {})['study_unlocked'] = ((s as any).JuliaMilLernQW ?? 0);
      // TODO-QSP: killvar 'JuliaMilLernQW'
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80802) {
    qspCall(s, 'prostitution_functions', 'set_gadukino_prostitute');
    if (((s as any).anushkaFirstvisit ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['first_visit'] = ((s as any).anushkaFirstvisit ?? 0);
      // TODO-QSP: killvar 'anushkaFirstvisit'
    }
    if (((s as any).Anush_lunch ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['lunch'] = ((s as any).Anush_lunch ?? 0);
      // TODO-QSP: killvar 'Anush_lunch'
    }
    if (((s as any).nush_model ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['model'] = ((s as any).nush_model ?? 0);
      // TODO-QSP: killvar 'nush_model'
    }
    if (((s as any).foto_anush_referral ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['model_referral'] = ((s as any).foto_anush_referral ?? 0);
      // TODO-QSP: killvar 'foto_anush_referral'
    }
    if (((s as any).AnushkaCompUse ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['computer_use'] = ((s as any).AnushkaCompUse ?? 0);
      // TODO-QSP: killvar 'AnushkaCompUse'
    }
    if (((s as any).marspyknow ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['marspyknow'] = ((s as any).marspyknow ?? 0);
      // TODO-QSP: killvar 'marspyknow'
    }
    if (((s as any).nushstrapanalpain ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['strapon_anal_pain'] = ((s as any).nushstrapanalpain ?? 0);
      // TODO-QSP: killvar 'nushstrapanalpain'
    }
    if (((s as any).nushstrapon ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['strapon'] = ((s as any).nushstrapon ?? 0);
      // TODO-QSP: killvar 'nushstrapon'
    }
    if (((s as any).domnush ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dom_nush'] = ((s as any).domnush ?? 0);
      // TODO-QSP: killvar 'domnush'
    }
    if (((s as any).seenEd ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['seen_ed'] = ((s as any).seenEd ?? 0);
      // TODO-QSP: killvar 'seenEd'
    }
    if (((s as any).valeriaIntroduced ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['valeria_introduced'] = ((s as any).valeriaIntroduced ?? 0);
      // TODO-QSP: killvar 'valeriaIntroduced'
    }
    if (((s as any).showerphotos ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['shower_photos'] = ((s as any).showerphotos ?? 0);
      // TODO-QSP: killvar 'showerphotos'
    }
    if (((s as any).anushka_tv_day ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['tv_day'] = ((s as any).anushka_tv_day ?? 0);
      // TODO-QSP: killvar 'anushka_tv_day'
    }
    if (((s as any).anushka_shower_day ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['shower_day'] = ((s as any).anushka_shower_day ?? 0);
      // TODO-QSP: killvar 'anushka_shower_day'
    }
    if (((s as any).AnushkaHomeDay ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['home_day'] = ((s as any).AnushkaHomeDay ?? 0);
      // TODO-QSP: killvar 'AnushkaHomeDay'
    }
    if (((s as any).nush_photoshoot ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['photoshoot'] = ((s as any).nush_photoshoot ?? 0);
      // TODO-QSP: killvar 'nush_photoshoot'
    }
    if (((s as any).NushVsNiko ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['vs_niko'] = ((s as any).NushVsNiko ?? 0);
      // TODO-QSP: killvar 'NushVsNiko'
    }
    if (((s as any).nushaboutalyona ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['about_alyona'] = ((s as any).nushaboutalyona ?? 0);
      // TODO-QSP: killvar 'nushaboutalyona'
    }
    if (((s as any).valspy ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['valspy'] = ((s as any).valspy ?? 0);
      // TODO-QSP: killvar 'valspy'
    }
    if (((s as any).radnushdate ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['rad_date'] = ((s as any).radnushdate ?? 0);
      // TODO-QSP: killvar 'radnushdate'
    }
    if (((s as any).radspy ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['radspy'] = ((s as any).radspy ?? 0);
      // TODO-QSP: killvar ' radspy'
    }
    if (((s as any).nushfedor3s ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['fedor_3some'] = ((s as any).nushfedor3s ?? 0);
      // TODO-QSP: killvar 'nushfedor3s'
    }
    if (((s as any).Anush_sex ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['sex'] = ((s as any).Anush_sex ?? 0);
      // TODO-QSP: killvar 'Anush_sex'
    }
    if (((s as any).Anush_dolls ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['dolls'] = ((s as any).Anush_dolls ?? 0);
      // TODO-QSP: killvar 'Anush_dolls'
    }
    if (((s as any).anushka_toilet ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['toilet'] = ((s as any).anushka_toilet ?? 0);
      // TODO-QSP: killvar 'anushka_toilet'
    }
    if (((s as any).marspy ?? 0) > 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['marspy'] = ((s as any).marspy ?? 0);
      // TODO-QSP: killvar 'marspy'
    }
    if (((s as any).bandpracticeinvite ?? 0) > 0) {
      ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = ((s as any).bandpracticeinvite ?? 0);
      // TODO-QSP: killvar 'bandpracticeinvite'
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
    // TODO-QSP: killvar 'ArendHouseSL'
    // TODO-QSP: killvar 'ArendHouseSL4'
    // TODO-QSP: killvar 'home_value'
    // TODO-QSP: killvar 'home_value_txt'
    // TODO-QSP: killvar 'sdaday'
    // TODO-QSP: killvar 'sdamonth'
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
        // TODO-QSP: gs 'internet_mobile', 'buy_subscription', $home['current'], 900
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
          // TODO-QSP: gs 'internet_mobile', 'top_up_metered', 'metered_mobile', internet * 60
        }
      }
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
      // TODO-QSP: killvar 'balans'
      // TODO-QSP: killvar 'temp_phone_rem'
      // TODO-QSP: killvar 'temp_phone_mult'
      // TODO-QSP: killvar 'new_balans'
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
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 80901) {
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'savedOutfits') {
      (s as any).wardrobeDefaultPagePref = 'default1';
    }
    (s as any).i = 0;
    // TODO-QSP: :loopboutiquepanties
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).boutique_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'lusso_panties[i] = 1'
      // TODO-QSP: dynamic 'lusso_pantiesS[i] = boutique_pantiesS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).boutique_panties ?? {}).length) {
      // TODO-QSP: jump 'loopboutiquepanties'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopboutiquebras
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).boutique_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'lusso_bras[i] = 1'
      // TODO-QSP: dynamic 'lusso_brasS[i] = boutique_brasS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).boutique_bras ?? {}).length) {
      // TODO-QSP: jump 'loopboutiquebras'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopcheappanties
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).cheap_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'gm_panties[i] = 1'
      // TODO-QSP: dynamic 'gm_pantiesS[i] = cheap_pantiesS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).cheap_panties ?? {}).length) {
      // TODO-QSP: jump 'loopcheappanties'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopcheapbras
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).cheap_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'gm_bras[i] = 1'
      // TODO-QSP: dynamic 'gm_brasS[i] = cheap_brasS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).cheap_bras ?? {}).length) {
      // TODO-QSP: jump 'loopcheapbras'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopexhibitionistpanties
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).exhibitionist_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'salacious_panties[i] = 1'
      // TODO-QSP: dynamic 'salacious_pantiesS[i] = exhibitionist_pantiesS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).exhibitionist_panties ?? {}).length) {
      // TODO-QSP: jump 'loopexhibitionistpanties'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopexhibitionistbras
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).exhibitionist_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'salacious_bras[i] = 1'
      // TODO-QSP: dynamic 'salacious_brasS[i] = exhibitionist_brasS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).exhibitionist_bras ?? {}).length) {
      // TODO-QSP: jump 'loopexhibitionistbras'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopsexshoppanties
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).sexshop_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'eroto_panties[i] = 1'
      // TODO-QSP: dynamic 'eroto_pantiesS[i] = sexshop_pantiesS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).sexshop_panties ?? {}).length) {
      // TODO-QSP: jump 'loopsexshoppanties'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopsexshopbras
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).sexshop_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'eroto_bras[i] = 1'
      // TODO-QSP: dynamic 'eroto_brasS[i] = sexshop_brasS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).sexshop_bras ?? {}).length) {
      // TODO-QSP: jump 'loopsexshopbras'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopsportpanties
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).sport_panties ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'danilovich_panties[i] = 1'
      // TODO-QSP: dynamic 'danilovich_pantiesS[i] = sport_pantiesS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).sport_panties ?? {}).length) {
      // TODO-QSP: jump 'loopsportpanties'
    }
    (s as any).i = 0;
    // TODO-QSP: :loopsportbras
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).sport_bras ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic 'danilovich_bras[i] = 1'
      // TODO-QSP: dynamic 'danilovich_brasS[i] = sport_brasS[i]'
    }
    if (((s as any).i ?? 0) <= Object.keys((s as any).sport_bras ?? {}).length) {
      // TODO-QSP: jump 'loopsportbras'
    }
    if (((s as any).metmira ?? 0) === 1) {
      ((s as any).npc_known = (s as any).npc_known ?? {})['A60'] = 1;
      // TODO-QSP: killvar 'metmira'
    }
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
    }
    (s as any).i = 0;
    // TODO-QSP: :loopboys
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).i ?? 0)] !== '') {
      ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})[String((s as any).i ?? 0)] = 'fuckbuddy';
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= Object.keys((s as any).boys ?? {}).length) {
      // TODO-QSP: jump 'loopboys'
    }
    if (((s as any).traits ?? 0) > 0  ||  ((s as any).trait ?? 0) > 0) {
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['nerd_status'] = ((s as any).traits ?? 0)?.['nerd_status'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['alko_status'] = ((s as any).traits ?? 0)?.['alko_status'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['alko_points'] = ((s as any).traits ?? 0)?.['alko_points'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['buttslut_lvl'] = ((s as any).traits ?? 0)?.['buttslut_lvl'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['buttslut_exp'] = ((s as any).traits ?? 0)?.['buttslut_exp'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['nerd_lernHome'] = ((s as any).traits ?? 0)?.['nerd_lernHome'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['nerd_points'] = ((s as any).traits ?? 0)?.['nerd_points'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['nerd_lessons'] = ((s as any).traits ?? 0)?.['nerd_lessons'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['cumeater'] = ((s as any).trait ?? 0)?.['cumeater'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['commando_lvl'] = ((s as any).trait ?? 0)?.['commando_lvl'];
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['commando_exp'] = ((s as any).trait ?? 0)?.['commando_exp'];
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90000) {
    if (((s as any).photography_job ?? 0) > 0) {
      ((s as any).photography = (s as any).photography ?? {})['experience'] = ((s as any).photography_job ?? 0);
    }
    if (Object.keys((s as any).fuckbuddy ?? {}).length > 0) {
      (s as any).i_fb = 0;
      // TODO-QSP: :loopFuckbuddies
      if ((Array.isArray((s as any)._fuckbuddies) ? ((s as any)._fuckbuddies as any[]).indexOf(((s as any).fuckbuddy ?? 0)?.[String((s as any).i_fb ?? 0)]) : -1) === -1) {
        // TODO-QSP: $_fuckbuddies[] = $fuckbuddy[i_fb]
      }
      (s as any).i_fb = ((s as any).i_fb ?? 0) + (1);
      if (((s as any).i_fb ?? 0) < Object.keys((s as any).fuckbuddy ?? {}).length) {
        // TODO-QSP: jump 'loopFuckbuddies'
      }
      (s as any).fuckbuddy = ((s as any)._fuckbuddies ?? 0);
    }
    if (((s as any).stat ?? 0)?.['virgin'] > 0) {
      ((s as any).stat = (s as any).stat ?? {})['think_virgin'] = ((s as any).stat ?? 0)?.['virgin'];
      qspCall(s, 'array', 'remove_element', 'stat', 'virgin');
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90001) {
    if (((s as any).futa ?? 0) > 0) {
      (s as any).shemale = ((s as any).futa ?? 0);
      // TODO-QSP: killvar 'futa'
    }
    if (((s as any).hidden_futa ?? 0) > 0) {
      (s as any).hidden_shemale = ((s as any).hidden_futa ?? 0);
      // TODO-QSP: killvar 'hidden_futa'
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90003) {
    if (((s as any).home ?? 0)?.['current'] !== ''  &&  ((s as any).home ?? 0)?.['bathroom'] === '') {
      // TODO-QSP: gs 'homes_properties', 'set_home', $home['current']
    }
    if (((s as any).makeup ?? 0)?.['base'] < 1) {
      ((s as any).makeup = (s as any).makeup ?? {})['base'] = 1;
    }
    (s as any).makeup_routine_update_index = 1;
    // TODO-QSP: :makeup_routine_update_loop
    (s as any).temp_makeup_routine = 0;
    (s as any).temp_makeup_routine_name = 0;
    if (((s as any).temp_makeup_routine ?? 0) !== '') {
      ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0)) + '_makeup'] = parseFloat((String(((s as any).temp_makeup_routine ?? 0)).slice((1)-1, ((1)-1)+(1))));
      ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0)) + '_lipbalm'] = parseFloat((String(((s as any).temp_makeup_routine ?? 0)).slice((2)-1, ((2)-1)+(1))));
      ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0)) + '_lashes'] = parseFloat((String(((s as any).temp_makeup_routine ?? 0)).slice((3)-1, ((3)-1)+(1))));
      ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0))] = ((s as any).temp_makeup_routine ?? 0);
      ((s as any).makeup = (s as any).makeup ?? {})['routine_' + String(((s as any).makeup_routine_update_index ?? 0)) + '_name'] = ((s as any).temp_makeup_routine_name ?? 0);
    }
    (s as any).makeup_routine_update_index = ((s as any).makeup_routine_update_index ?? 0) + (1);
    if (((s as any).makeup_routine_update_index ?? 0) <= 4) {
      // TODO-QSP: jump 'makeup_routine_update_loop'
    }
    // TODO-QSP: killvar 'makeup_routine_update_index'
    // TODO-QSP: killvar 'temp_makeup_routine'
    // TODO-QSP: killvar 'temp_makeup_routine_name'
    if (((s as any).kosmetica ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).kosmetica ?? 0);
      // TODO-QSP: killvar 'kosmetica'
    }
    if (((s as any).item_moisturizer ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['moisturiser'] = ((s as any).item_moisturizer ?? 0);
      // TODO-QSP: killvar 'item_moisturizer'
    }
    if (((s as any).lipbalm ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lipbalm'] = ((s as any).lipbalm ?? 0);
      // TODO-QSP: killvar 'lipbalm'
    }
    if (((s as any).falselashesplain ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_fake'] = ((s as any).falselashesplain ?? 0);
      // TODO-QSP: killvar 'falselashesplain'
    }
    if (((s as any).falselashesmink ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_mink'] = ((s as any).falselashesmink ?? 0);
      // TODO-QSP: killvar 'falselashesmink'
    }
    if (((s as any).stanok ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).stanok ?? 0);
      // TODO-QSP: killvar 'stanok'
    }
    if (((s as any).krem ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['suncream'] = ((s as any).krem ?? 0);
      // TODO-QSP: killvar 'krem'
    }
    if (((s as any).deodorant ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['deodorant'] = ((s as any).deodorant ?? 0);
      // TODO-QSP: killvar 'deodorant'
    }
    if (((s as any).tampon ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = ((s as any).tampon ?? 0);
      // TODO-QSP: killvar 'tampon'
    }
    if (((s as any).sanpad ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = ((s as any).sanpad ?? 0);
      // TODO-QSP: killvar 'sanpad'
    }
    if (((s as any).shampoo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = ((s as any).shampoo ?? 0);
      // TODO-QSP: killvar 'shampoo'
    }
    if (((s as any).hscrunch ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['scrunchies'] = ((s as any).hscrunch ?? 0);
      // TODO-QSP: killvar 'hscrunch'
    }
    if (((s as any).hpingrip ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['kirbygrips'] = ((s as any).hpingrip ?? 0);
      // TODO-QSP: killvar 'hpingrip'
    }
    if (((s as any).salfetka ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['makeup_wipes'] = ((s as any).salfetka ?? 0);
      // TODO-QSP: killvar 'salfetka'
    }
    if (((s as any).mouthwash ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mouthwash'] = ((s as any).mouthwash ?? 0);
      // TODO-QSP: killvar 'mouthwash'
    }
    if (((s as any).greben ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['comb'] = ((s as any).greben ?? 0);
      // TODO-QSP: killvar 'greben'
    }
    if (((s as any).kosmetitka ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = ((s as any).kosmetitka ?? 0);
      // TODO-QSP: killvar 'kosmetitka'
    }
    if (((s as any).compact_mirror ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_mirror'] = ((s as any).compact_mirror ?? 0);
      // TODO-QSP: killvar 'compact_mirror'
    }
    if (((s as any).eda ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_basic'] = ((s as any).eda ?? 0);
      // TODO-QSP: killvar 'eda'
    }
    if (((s as any).edaD ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_diet'] = ((s as any).edaD ?? 0);
      // TODO-QSP: killvar 'edaD'
    }
    if (((s as any).pranik ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_biscuits'] = ((s as any).pranik ?? 0);
      // TODO-QSP: killvar 'pranik'
    }
    if (((s as any).buterbrod ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_sandwich'] = ((s as any).buterbrod ?? 0);
      // TODO-QSP: killvar 'buterbrod'
    }
    if (((s as any).wine ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_wine'] = ((s as any).wine ?? 0);
      // TODO-QSP: killvar 'wine'
    }
    if (((s as any).bottle ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_water'] = ((s as any).bottle ?? 0);
      // TODO-QSP: killvar 'bottle'
    }
    if (((s as any).pregtest ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['pregnancy_test'] = ((s as any).pregtest ?? 0);
      // TODO-QSP: killvar 'pregtest'
    }
    if (((s as any).lekarstvo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['antibiotics'] = ((s as any).lekarstvo ?? 0);
      // TODO-QSP: killvar 'lekarstvo'
    }
    if (((s as any).vitamin ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['vitamins'] = ((s as any).vitamin ?? 0);
      // TODO-QSP: killvar 'vitamin'
    }
    if (((s as any).painkiller ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['painkillers'] = ((s as any).painkiller ?? 0);
      // TODO-QSP: killvar 'painkiller'
    }
    if (((s as any).mosolmaz ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['chafing_cream'] = ((s as any).mosolmaz ?? 0);
      // TODO-QSP: killvar 'mosolmaz'
    }
    if (((s as any).lubri ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).lubri ?? 0);
      // TODO-QSP: killvar 'lubri'
    }
    if (((s as any).klisma ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['enema_kit'] = ((s as any).klisma ?? 0);
      // TODO-QSP: killvar 'klisma'
    }
    if (((s as any).breastpump ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['breast_pump'] = ((s as any).breastpump ?? 0);
      // TODO-QSP: killvar 'breastpump'
    }
    if (((s as any).bpbottles ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bottle_s'] = ((s as any).bpbottles ?? 0);
      // TODO-QSP: killvar 'bpbottles'
    }
    if (((s as any).bpbottlem ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bottle_m'] = ((s as any).bpbottlem ?? 0);
      // TODO-QSP: killvar 'bpbottlem'
    }
    if (((s as any).bpnipplebalm ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['nipple_cream'] = ((s as any).bpnipplebalm ?? 0);
      // TODO-QSP: killvar 'bpnipplebalm'
    }
    if (((s as any).fatdel ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['weight_loss_pill'] = ((s as any).fatdel ?? 0);
      // TODO-QSP: killvar 'fatdel'
    }
    if (((s as any).morning_after_pill ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['morning_after_pill'] = ((s as any).morning_after_pill ?? 0);
      // TODO-QSP: killvar 'morning_after_pill'
    }
    if (((s as any).prezik ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).prezik ?? 0);
      // TODO-QSP: killvar 'prezik'
    }
    if (((s as any).prezikcount ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = ((s as any).prezikcount ?? 0);
      // TODO-QSP: killvar 'prezikcount'
    }
    if (((s as any).preziksabo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = ((s as any).preziksabo ?? 0);
      // TODO-QSP: killvar 'preziksabo'
    }
    if (((s as any).badprezik ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bad_condoms'] = ((s as any).badprezik ?? 0);
      // TODO-QSP: killvar 'badprezik'
    }
    if (((s as any).tabletki ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = ((s as any).tabletki ?? 0);
      // TODO-QSP: killvar 'tabletki'
    }
    if (((s as any).siga ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cigarettes'] = ((s as any).siga ?? 0);
      // TODO-QSP: killvar 'siga'
    }
    if (((s as any).fashmag ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_fashion'] = ((s as any).fashmag ?? 0);
      // TODO-QSP: killvar 'fashmag'
    }
    if (((s as any).compmag ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_computer'] = ((s as any).compmag ?? 0);
      // TODO-QSP: killvar 'compmag'
    }
    if (((s as any).biomag ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_biography'] = ((s as any).biomag ?? 0);
      // TODO-QSP: killvar 'biomag'
    }
    if (((s as any).cookmag ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_cooking'] = ((s as any).cookmag ?? 0);
      // TODO-QSP: killvar 'cookmag'
    }
    if (((s as any).knitmag ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_knitting'] = ((s as any).knitmag ?? 0);
      // TODO-QSP: killvar 'knitmag'
    }
    if (((s as any).fitmag ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_fitness'] = ((s as any).fitmag ?? 0);
      // TODO-QSP: killvar 'fitmag'
    }
    if (((s as any).umbrella ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['umbrella'] = ((s as any).umbrella ?? 0);
      // TODO-QSP: killvar 'umbrella'
    }
    if (((s as any).pornMagazine ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_porn'] = ((s as any).pornMagazine ?? 0);
      // TODO-QSP: killvar 'pornMagazine'
    }
    if (((s as any).vibrator ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['vibe'] = ((s as any).vibrator ?? 0);
      // TODO-QSP: killvar 'vibrator'
    }
    if (((s as any).analplug ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['buttplug'] = ((s as any).analplug ?? 0);
      // TODO-QSP: killvar 'analplug'
    }
    if (((s as any).suction_dildo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_suction'] = ((s as any).suction_dildo ?? 0);
      // TODO-QSP: killvar 'suction_dildo'
    }
    if (((s as any).strapon ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['strapon'] = ((s as any).strapon ?? 0);
      // TODO-QSP: killvar 'strapon'
    }
    if (((s as any).dildo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_small'] = ((s as any).dildo ?? 0);
      // TODO-QSP: killvar 'dildo'
    }
    if (((s as any).middildo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_normal'] = ((s as any).middildo ?? 0);
      // TODO-QSP: killvar 'middildo'
    }
    if (((s as any).largedildo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_big'] = ((s as any).largedildo ?? 0);
      // TODO-QSP: killvar 'largedildo'
    }
    if (((s as any).bigdildo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_large'] = ((s as any).bigdildo ?? 0);
      // TODO-QSP: killvar 'bigdildo'
    }
    if (((s as any).extradildo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_huge'] = ((s as any).extradildo ?? 0);
      // TODO-QSP: killvar 'extradildo'
    }
    if (((s as any).superdildo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_enormous'] = ((s as any).superdildo ?? 0);
      // TODO-QSP: killvar 'superdildo'
    }
    if (((s as any).maddildo ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_gigantic'] = ((s as any).maddildo ?? 0);
      // TODO-QSP: killvar 'maddildo'
    }
    if (((s as any).skak ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['skipping_rope'] = ((s as any).skak ?? 0);
      // TODO-QSP: killvar 'skak'
    }
    if (((s as any).obruch ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['hula_hoop'] = ((s as any).obruch ?? 0);
      // TODO-QSP: killvar 'obruch'
    }
    if (((s as any).bookyog ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['book_yoga'] = ((s as any).bookyog ?? 0);
      // TODO-QSP: killvar 'bookyog'
    }
    if (((s as any).konki ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['ice_skates'] = ((s as any).konki ?? 0);
      // TODO-QSP: killvar 'konki'
    }
    if (((s as any).pcs_ski_owned ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['ski'] = ((s as any).pcs_ski_owned ?? 0);
      // TODO-QSP: killvar 'pcs_ski_owned'
    }
    if (((s as any).refillable_bottle ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['refill_bottle'] = ((s as any).refillable_bottle ?? 0);
      // TODO-QSP: killvar 'refillable_bottle'
    }
    if (((s as any).fairy ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_soap'] = ((s as any).fairy ?? 0);
      // TODO-QSP: killvar 'fairy'
    }
    if (((s as any).poroshok ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = ((s as any).poroshok ?? 0);
      // TODO-QSP: killvar 'poroshok'
    }
    if (((s as any).cltarelka ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_plates'] = ((s as any).cltarelka ?? 0);
      // TODO-QSP: killvar 'cltarelka'
    }
    if (((s as any).tkan ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_fabric'] = ((s as any).tkan ?? 0);
      // TODO-QSP: killvar 'tkan'
    }
    if (((s as any).sewing_kit ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sewing_kit'] = ((s as any).sewing_kit ?? 0);
      // TODO-QSP: killvar 'sewing_kit'
    }
    if (((s as any).TV ?? 0) === 1) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_tv'] = 1;
      // TODO-QSP: killvar 'TV'
    }
    if (((s as any).TV ?? 0) >= 2) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['plasma_tv'] = 1;
      // TODO-QSP: killvar 'TV'
    }
    if (((s as any).mc_inventory ?? 0)?.['tech_tv'] >= 2) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['plasma_tv'] = 1;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_tv'] = 1;
    }
    if (((s as any).komp ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_computer'] = ((s as any).komp ?? 0);
      // TODO-QSP: killvar 'komp'
    }
    if (((s as any).GameCD2 ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_game_ds'] = ((s as any).GameCD2 ?? 0);
      // TODO-QSP: killvar 'GameCD2'
    }
    if (((s as any).posudomashina ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_dishwasher'] = ((s as any).posudomashina ?? 0);
      // TODO-QSP: killvar 'posudomashina'
    }
    if (((s as any).stiralka ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_washing_machine'] = ((s as any).stiralka ?? 0);
      // TODO-QSP: killvar 'stiralka'
    }
    if (((s as any).zenit ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_camera'] = ((s as any).zenit ?? 0);
      // TODO-QSP: killvar 'zenit'
    }
    if (((s as any).minifoto ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_hidden_cam'] = ((s as any).minifoto ?? 0);
      // TODO-QSP: killvar 'minifoto'
    }
    if (((s as any).webcamera ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_webcam'] = ((s as any).webcamera ?? 0);
      // TODO-QSP: killvar 'webcamera'
    }
    if (((s as any).ms_pill ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['meds_morning_sick'] = ((s as any).ms_pill ?? 0);
      // TODO-QSP: killvar 'ms_pill'
    }
    if (((s as any).preg_ball ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['preg_ball'] = ((s as any).preg_ball ?? 0);
      // TODO-QSP: killvar 'preg_ball'
    }
    if (((s as any).preg_brace ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['preg_brace'] = ((s as any).preg_brace ?? 0);
      // TODO-QSP: killvar 'preg_brace'
    }
    if (((s as any).preg_pillow ?? 0) > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['preg_pillow'] = ((s as any).preg_pillow ?? 0);
      // TODO-QSP: killvar 'preg_pillow'
    }
    (s as any).pref_update_index = 1;
    // TODO-QSP: :update_standard_preferences_loop
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).pref_update_index ?? 0) + '');
    (s as any).pref_update_index = ((s as any).pref_update_index ?? 0) + (1);
    if (((s as any).pref_update_index ?? 0) <= 263) {
      // TODO-QSP: jump 'update_standard_preferences_loop'
    }
    if (((s as any).shplft_booked ?? 0)    > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_booked'] = ((s as any).shplft_booked ?? 0);
      // TODO-QSP: killvar 'shplft_booked'
    }
    if (((s as any).prst_booked ?? 0)      > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['prostitution_booked'] = ((s as any).prst_booked ?? 0);
      // TODO-QSP: killvar 'prst_booked'
    }
    if (((s as any).shplft_counter ?? 0)    > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_counter'] = ((s as any).shplft_counter ?? 0);
      // TODO-QSP: killvar 'shplft_counter'
    }
    if (((s as any).prst_counter ?? 0)      > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['prostitution_counter'] = ((s as any).prost_counter ?? 0);
      // TODO-QSP: killvar 'prst_counter'
    }
    if (((s as any).prst_bribe ?? 0)      > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['prostitution_bribe'] = ((s as any).prst_bribe ?? 0);
      // TODO-QSP: killvar 'prst_bribe'
    }
    if (((s as any).shplft_value ?? 0)      > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_value'] = ((s as any).shplft_value ?? 0);
      // TODO-QSP: killvar 'shplft_value'
    }
    if (((s as any).bookingofficer_rel ?? 0)  > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['bookingofficer_rel'] = ((s as any).bookingofficer_rel ?? 0);
      // TODO-QSP: killvar 'bookingofficer_rel'
    }
    if (((s as any).toldonguard ?? 0)      > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['toldonguard'] = ((s as any).toldonguard ?? 0);
      // TODO-QSP: killvar 'toldonguard'
    }
    if (((s as any).courtletter_date ?? 0) > 0) {
      ((s as any).policeQW_courtletter_dates = (s as any).policeQW_courtletter_dates ?? {})[0] = ((s as any).courtletter_date ?? 0);
      // TODO-QSP: killvar 'courtletter_date'
      if (((s as any).shplft_tmp ?? 0) > 0) {
        // TODO-QSP: $policeQW_courtletter_subjects[0] = 'shoplift_<<$detec_type>>'
      } else {
        // TODO-QSP: $policeQW_courtletter_subjects[0] = 'prostitution_<<$detec_type>>'
      }
    }
    if (((s as any).courthearing_date ?? 0) > 0) {
      ((s as any).policeQW_courthearing_dates = (s as any).policeQW_courthearing_dates ?? {})[0] = ((s as any).courthearing_date ?? 0);
      // TODO-QSP: killvar 'courthearing_date'
      if (((s as any).shplft_tmp ?? 0) > 0) {
        // TODO-QSP: $policeQW_courthearing_subjects[0] = 'shoplift_<<$detec_type>>'
      } else {
        // TODO-QSP: $policeQW_courthearing_subjects[0] = 'prostitution_<<$detec_type>>'
      }
    }
    if (((s as any).legal_fine ?? 0) > 0) {
      ((s as any).policeQW = (s as any).policeQW ?? {})['legal_fine'] = ((s as any).legal_fine ?? 0);
      // TODO-QSP: killvar 'legal_fine'
    }
    if (((s as any).bedPanty ?? 0)       > 0) {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedPanty'] = ((s as any).bedPanty ?? 0);
      // TODO-QSP: killvar 'bedPanty'
    }
    if (((s as any).bedAnal ?? 0)        > 0) {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedAnal'] = ((s as any).bedAnal ?? 0);
      // TODO-QSP: killvar 'bedAnal'
    }
    if (((s as any).bedVibrator ?? 0)    > 0) {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedVibrator'] = ((s as any).bedVibrator ?? 0);
      // TODO-QSP: killvar 'bedVibrator'
    }
    if (((s as any).cheatVib ?? 0)       > 0) {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['cheatVib'] = ((s as any).cheatVib ?? 0);
      // TODO-QSP: killvar 'cheatVib'
    }
    if (((s as any).notathomesleep ?? 0) > 0) {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['notathomesleep'] = ((s as any).notathomesleep ?? 0);
      // TODO-QSP: killvar 'notathomesleep'
    }
    if (((s as any).Enable_nodream ?? 0) > 0) {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['cheat_nodream_chance'] = ((s as any).Enable_nodream ?? 0);
      // TODO-QSP: killvar 'Enable_nodream'
    }
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_active'] = 1;
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['dreams_active'] = 1;
    if (((s as any).budilnikOn ?? 0)       > 0) {
      ((s as any).alarmVars = (s as any).alarmVars ?? {})['alarmOn'] = ((s as any).budilnikOn ?? 0);
      // TODO-QSP: killvar 'budilnikOn'
    }
    if (((s as any).timer ?? 0)            > 0) {
      ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerH'] = ((s as any).timer ?? 0);
      // TODO-QSP: killvar 'timer'
    }
    if (((s as any).timerM ?? 0)           > 0) {
      ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerM'] = ((s as any).timerM ?? 0);
      // TODO-QSP: killvar 'timerM'
    }
    if (((s as any).timerEnd ?? 0)         > 0) {
      ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerEndH'] = ((s as any).timerEnd ?? 0);
      // TODO-QSP: killvar 'timerEnd'
    }
    if (((s as any).timerEndM ?? 0)        > 0) {
      ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerEndM'] = ((s as any).timerEndM ?? 0);
      // TODO-QSP: killvar 'timerEndM'
    }
    if (((s as any).alarm_holiday ?? 0)    > 0) {
      ((s as any).alarmVars = (s as any).alarmVars ?? {})['alarm_holiday'] = ((s as any).alarm_holiday ?? 0);
      // TODO-QSP: killvar 'alarm_holiday'
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
      // TODO-QSP: killvar 'sp_rel'
    }
    if (((s as any).gp_rel ?? 0)                  > 0) {
      ((s as any).npc_rel = (s as any).npc_rel ?? {})['A265'] = ((s as any).gp_rel ?? 0);
      // TODO-QSP: killvar 'gp_rel'
    }
    if (((s as any).nd_rel ?? 0)                  > 0) {
      ((s as any).npc_rel = (s as any).npc_rel ?? {})['A266'] = ((s as any).nd_rel ?? 0);
      // TODO-QSP: killvar 'nd_rel'
    }
    if (((s as any).nd_hj ?? 0)                   > 0) {
      (s as any).oleg_hj = ((s as any).nd_hj ?? 0);
      // TODO-QSP: killvar 'nd_hj'
    }
    if (((s as any).nd_bj ?? 0)                   > 0) {
      (s as any).oleg_bj = ((s as any).nd_bj ?? 0);
      // TODO-QSP: killvar 'nd_bj'
    }
    if (((s as any).nd_bjFail ?? 0)               > 0) {
      (s as any).oleg_bjFail = ((s as any).nd_bjFail ?? 0);
      // TODO-QSP: killvar 'nd_bjFail'
    }
    if (((s as any).nd_bjDeep ?? 0)               > 0) {
      (s as any).oleg_bjDeep = ((s as any).nd_bjDeep ?? 0);
      // TODO-QSP: killvar 'nd_bjDeep'
    }
    if (((s as any).nd_bjFailPuke ?? 0)           > 0) {
      (s as any).oleg_bjFailPuke = ((s as any).nd_bjFailPuke ?? 0);
      // TODO-QSP: killvar 'nd_bjFailPuke'
    }
    if (((s as any).nd_bjFailFaint ?? 0)          > 0) {
      (s as any).oleg_bjFailFaint = ((s as any).nd_bjFailFaint ?? 0);
      // TODO-QSP: killvar 'nd_bjFailFaint'
    }
    if (((s as any).nd_swall ?? 0)                > 0) {
      (s as any).oleg_swall = ((s as any).nd_swall ?? 0);
      // TODO-QSP: killvar 'nd_swall'
    }
    if (((s as any).nd_vagCumInsideUnwanted ?? 0) > 0) {
      (s as any).oleg_vagCumInsideUnwanted = ((s as any).nd_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'nd_vagCumInsideUnwanted'
    }
    if (((s as any).nd_vag ?? 0)                  > 0) {
      (s as any).oleg_vag = ((s as any).nd_vag ?? 0);
      // TODO-QSP: killvar 'nd_vag'
    }
    if (((s as any).nd_vagCumInside ?? 0)         > 0) {
      (s as any).oleg_vagCumInside = ((s as any).nd_vagCumInside ?? 0);
      // TODO-QSP: killvar 'nd_vagCumInside'
    }
    if (((s as any).nd_anal ?? 0)                 > 0) {
      (s as any).oleg_anal = ((s as any).nd_anal ?? 0);
      // TODO-QSP: killvar 'nd_anal'
    }
    if (((s as any).nd_analCumInside ?? 0)        > 0) {
      (s as any).oleg_analCumInside = ((s as any).nd_analCumInside ?? 0);
      // TODO-QSP: killvar 'nd_analCumInside'
    }
    if (((s as any).nd_vagCumInsideUnwanted ?? 0) > 0) {
      (s as any).oleg_vagCumInsideUnwanted = ((s as any).nd_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'nd_vagCumInsideUnwanted'
    }
    if (((s as any).nd_piss ?? 0)                 > 0) {
      (s as any).oleg_piss = ((s as any).nd_piss ?? 0);
      // TODO-QSP: killvar 'nd_piss'
    }
    if (((s as any).nd_doPornpos ?? 0)            > 0) {
      (s as any).oleg_doPornpos = ((s as any).nd_doPornpos ?? 0);
      // TODO-QSP: killvar 'nd_doPornpos'
    }
    if (((s as any).nd_pornPos ?? 0)              > 0) {
      (s as any).oleg_pornPos = ((s as any).nd_pornPos ?? 0);
      // TODO-QSP: killvar 'nd_pornPos'
    }
    if (((s as any).gp_bj ?? 0)                   > 0) {
      (s as any).nestor_bj = ((s as any).gp_bj ?? 0);
      // TODO-QSP: killvar 'gp_bj'
    }
    if (((s as any).gp_bjFail ?? 0)               > 0) {
      (s as any).nestor_bjFail = ((s as any).gp_bjFail ?? 0);
      // TODO-QSP: killvar 'gp_bjFail'
    }
    if (((s as any).gp_bjDeep ?? 0)               > 0) {
      (s as any).nestor_bjDeep = ((s as any).gp_bjDeep ?? 0);
      // TODO-QSP: killvar 'gp_bjDeep'
    }
    if (((s as any).gp_bjFailPuke ?? 0)           > 0) {
      (s as any).nestor_bjFailPuke = ((s as any).gp_bjFailPuke ?? 0);
      // TODO-QSP: killvar 'gp_bjFailPuke'
    }
    if (((s as any).gp_bjFailFaint ?? 0)          > 0) {
      (s as any).nestor_bjFailFaint = ((s as any).gp_bjFailFaint ?? 0);
      // TODO-QSP: killvar 'gp_bjFailFaint'
    }
    if (((s as any).gp_swall ?? 0)                > 0) {
      (s as any).nestor_swall = ((s as any).gp_swall ?? 0);
      // TODO-QSP: killvar 'gp_swall'
    }
    if (((s as any).gp_vagCumInsideUnwanted ?? 0) > 0) {
      (s as any).nestor_vagCumInsideUnwanted = ((s as any).gp_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'gp_vagCumInsideUnwanted'
    }
    if (((s as any).gp_vag ?? 0)                  > 0) {
      (s as any).nestor_vag = ((s as any).gp_vag ?? 0);
      // TODO-QSP: killvar 'gp_vag'
    }
    if (((s as any).gp_vagCumInside ?? 0)         > 0) {
      (s as any).nestor_vagCumInside = ((s as any).gp_vagCumInside ?? 0);
      // TODO-QSP: killvar 'gp_vagCumInside'
    }
    if (((s as any).gp_anal ?? 0)                 > 0) {
      (s as any).nestor_anal = ((s as any).gp_anal ?? 0);
      // TODO-QSP: killvar 'gp_anal'
    }
    if (((s as any).gp_analCumInside ?? 0)        > 0) {
      (s as any).nestor_analCumInside = ((s as any).gp_analCumInside ?? 0);
      // TODO-QSP: killvar 'gp_analCumInside'
    }
    if (((s as any).gp_vagCumInsideUnwanted ?? 0) > 0) {
      (s as any).nestor_vagCumInsideUnwanted = ((s as any).gp_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'gp_vagCumInsideUnwanted'
    }
    if (((s as any).gp_doPornpos ?? 0)            > 0) {
      (s as any).nestor_doPornpos = ((s as any).gp_doPornpos ?? 0);
      // TODO-QSP: killvar 'gp_doPornpos'
    }
    if (((s as any).gp_pornPos ?? 0)              > 0) {
      (s as any).nestor_pornPos = ((s as any).gp_pornPos ?? 0);
      // TODO-QSP: killvar 'gp_pornPos'
    }
    if (((s as any).sp_bj ?? 0)                   > 0) {
      (s as any).yakov_bj = ((s as any).sp_bj ?? 0);
      // TODO-QSP: killvar 'sp_bj'
    }
    if (((s as any).sp_bjFail ?? 0)               > 0) {
      (s as any).yakov_bjFail = ((s as any).sp_bjFail ?? 0);
      // TODO-QSP: killvar 'sp_bjFail'
    }
    if (((s as any).sp_bjDeep ?? 0)               > 0) {
      (s as any).yakov_bjDeep = ((s as any).sp_bjDeep ?? 0);
      // TODO-QSP: killvar 'sp_bjDeep'
    }
    if (((s as any).sp_bjFailPuke ?? 0)           > 0) {
      (s as any).yakov_bjFailPuke = ((s as any).sp_bjFailPuke ?? 0);
      // TODO-QSP: killvar 'sp_bjFailPuke'
    }
    if (((s as any).sp_bjFailFaint ?? 0)          > 0) {
      (s as any).yakov_bjFailFaint = ((s as any).sp_bjFailFaint ?? 0);
      // TODO-QSP: killvar 'sp_bjFailFaint'
    }
    if (((s as any).sp_swall ?? 0)                > 0) {
      (s as any).yakov_swall = ((s as any).sp_swall ?? 0);
      // TODO-QSP: killvar 'sp_swall'
    }
    if (((s as any).sp_vagCumInsideUnwanted ?? 0) > 0) {
      (s as any).yakov_vagCumInsideUnwanted = ((s as any).sp_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'sp_vagCumInsideUnwanted'
    }
    if (((s as any).sp_vag ?? 0)                  > 0) {
      (s as any).yakov_vag = ((s as any).sp_vag ?? 0);
      // TODO-QSP: killvar 'sp_vag'
    }
    if (((s as any).sp_vagCumInside ?? 0)         > 0) {
      (s as any).yakov_vagCumInside = ((s as any).sp_vagCumInside ?? 0);
      // TODO-QSP: killvar 'sp_vagCumInside'
    }
    if (((s as any).sp_anal ?? 0)                 > 0) {
      (s as any).yakov_anal = ((s as any).sp_anal ?? 0);
      // TODO-QSP: killvar 'sp_anal'
    }
    if (((s as any).sp_analCumInside ?? 0)        > 0) {
      (s as any).yakov_analCumInside = ((s as any).sp_analCumInside ?? 0);
      // TODO-QSP: killvar 'sp_analCumInside'
    }
    if (((s as any).sp_vagCumInsideUnwanted ?? 0) > 0) {
      (s as any).yakov_vagCumInsideUnwanted = ((s as any).sp_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'sp_vagCumInsideUnwanted'
    }
    if (((s as any).sp_doPornpos ?? 0)            > 0) {
      (s as any).yakov_doPornpos = ((s as any).sp_doPornpos ?? 0);
      // TODO-QSP: killvar 'sp_doPornpos'
    }
    if (((s as any).sp_pornPos ?? 0)              > 0) {
      (s as any).yakov_pornPos = ((s as any).sp_pornPos ?? 0);
      // TODO-QSP: killvar 'sp_pornPos'
    }
    if (((s as any).sp_hj ?? 0)                   > 0) {
      (s as any).yakov_hj = ((s as any).sp_hj ?? 0);
      // TODO-QSP: killvar 'sp_hj'
    }
    if (((s as any).sp_dildo ?? 0)                > 0) {
      (s as any).yakov_dildo = ((s as any).sp_dildo ?? 0);
      // TODO-QSP: killvar 'sp_dildo'
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
    ((s as any).prostitute = (s as any).prostitute ?? {})['wl_block'] = ((s as any).prostitute ?? 0)?.['blocked'];
    ((s as any).prostitute = (s as any).prostitute ?? {})['full_block'] = 0;
    qspCall(s, 'homes_properties_attr', '');
    if (((s as any).accessible_property ?? 0)?.['accessible_home_count'] < 1) {
      qspCall(s, 'homes_properties', 'set_homeless');
    } else {
      // TODO-QSP: gs 'homes_properties', 'set_home', $home['current']
    }
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
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90200) {
    if (((s as any).genbsize ?? 0)      !== 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = ((s as any).genbsize ?? 0);
      // TODO-QSP: killvar 'genbsize'
    }
    if (((s as any).nbsize ?? 0)      !== 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).nbsize ?? 0);
      // TODO-QSP: killvar 'nbsize'
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
    }
    if (((s as any).vofat ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['vofat'] = ((s as any).vofat ?? 0);
      // TODO-QSP: killvar 'vofat'
    }
    if (((s as any).vhips ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['vhips'] = ((s as any).vhips ?? 0);
      // TODO-QSP: killvar 'vhips'
    }
    if (((s as any).wratio ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['wratio'] = ((s as any).wratio ?? 0);
      // TODO-QSP: killvar 'wratio'
    }
    if (((s as any).bratio ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bratio'] = ((s as any).bratio ?? 0);
      // TODO-QSP: killvar 'bratio'
    }
    if (((s as any).hratio ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['hratio'] = ((s as any).hratio ?? 0);
      // TODO-QSP: killvar 'hratio'
    }
    if (((s as any).magicf2b ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_magic'] = ((s as any).magicf2b ?? 0);
      // TODO-QSP: killvar 'magicf2b'
    }
    if (((s as any).silicone_butt ?? 0)  !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_silicone'] = ((s as any).silicone_butt ?? 0);
      // TODO-QSP: killvar 'silicone_butt'
    }
    if (((s as any).silicone ?? 0)      !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_silicone'] = ((s as any).silicone ?? 0);
      // TODO-QSP: killvar 'silicone'
    }
    if (((s as any).butt_cheat ?? 0)    !== 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_cheat'] = ((s as any).butt_cheat ?? 0);
      // TODO-QSP: killvar 'butt_cheat'
    }
    if (((s as any).pcs_mass ?? 0)?.['bust_message'] === 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = ((s as any).pcs_mass ?? 0)?.['bust'];
    }
    if (((s as any).pcs_mass ?? 0)?.['butt_message'] === 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
    }
    if (((s as any).katjaQW ?? 0)?.['knows_masterbation'] > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_masturbation'] = ((s as any).katjaQW ?? 0)?.['knows_masterbation'];
      qspCall(s, 'array', 'remove_element', 'katjaQW', 'knows_masterbation');
    }
    if (((s as any).bmi_desc ?? 0)  !== '') {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bmi_desc'] = ((s as any).bmi_desc ?? 0);
      // TODO-QSP: killvar 'bmi_desc'
    }
    if (((s as any).body ?? 0)    !== '') {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['desc'] = ((s as any).body ?? 0);
      // TODO-QSP: killvar 'body'
    }
    if ((String(qspUntranslated(s, "start_type[0]", { location: "saveupdater" })).slice((1)-1, ((1)-1)+(2))) === 'sg') {
      // TODO-QSP: $temp_st[0] = 'sg'
    } else {
      if ((String(qspUntranslated(s, "start_type[0]", { location: "saveupdater" })).slice((1)-1, ((1)-1)+(3))) === 'uni') {
        // TODO-QSP: $temp_st[0] = 'uni'
      } else {
        // TODO-QSP: $temp_st[0] = 'city'
      }
    }
    // TODO-QSP: $temp_st[1] = $start_type[1]
    if (((s as any).temp_st ?? 0)[1] === '') {
      ((s as any).temp_st = (s as any).temp_st ?? {})[1] = 'magic';
    }
    if (((s as any).alterstrtimg ?? 0) >= 8  &&  ((s as any).alterstrtimg ?? 0) <= 11) {
      // TODO-QSP: $temp_st[2] = 'nerd'
      if (((s as any).alterstrtimg ?? 0) === 8) {
        // TODO-QSP: $temp_st[3] = 'nerdqueen'
      } else {
        if (((s as any).alterstrtimg ?? 0) === 9) {
          // TODO-QSP: $temp_st[3] = 'goodstudent'
        } else {
          if (((s as any).alterstrtimg ?? 0) === 10) {
            // TODO-QSP: $temp_st[3] = 'computergeek'
          } else {
            // TODO-QSP: $temp_st[3] = 'chessplayer'
          }
        }
      }
    } else {
      if (((s as any).alterstrtimg ?? 0) >= 12  &&  ((s as any).alterstrtimg ?? 0) <= 15) {
        // TODO-QSP: $temp_st[2] = 'jock'
        if (((s as any).alterstrtimg ?? 0) === 12) {
          // TODO-QSP: $temp_st[3] = 'volleyball'
        } else {
          if (((s as any).alterstrtimg ?? 0) === 13) {
            // TODO-QSP: $temp_st[3] = 'dancer'
          } else {
            if (((s as any).alterstrtimg ?? 0) === 14) {
              // TODO-QSP: $temp_st[3] = 'runner'
            } else {
              // TODO-QSP: $temp_st[3] = 'football'
            }
          }
        }
      } else {
        if (((s as any).alterstrtimg ?? 0) >= 16  &&  ((s as any).alterstrtimg ?? 0) <= 17) {
          // TODO-QSP: $temp_st[2] = 'cool'
          if (((s as any).alterstrtimg ?? 0) === 16) {
            // TODO-QSP: $temp_st[3] = 'socialite'
          } else {
            if (((s as any).alterstrtimg ?? 0) === 17) {
              // TODO-QSP: $temp_st[3] = 'beautiful'
            }
          }
        } else {
          if (((s as any).alterstrtimg ?? 0) >= 18  &&  ((s as any).alterstrtimg ?? 0) <= 21) {
            // TODO-QSP: $temp_st[2] = 'gopnik'
            if (((s as any).alterstrtimg ?? 0) === 18) {
              // TODO-QSP: $temp_st[3] = 'gopnikstart'
            } else {
              if (((s as any).alterstrtimg ?? 0) === 19) {
                // TODO-QSP: $temp_st[3] = 'troublemaker'
              } else {
                if (((s as any).alterstrtimg ?? 0) === 20) {
                  // TODO-QSP: $temp_st[3] = 'vitekgf'
                } else {
                  // TODO-QSP: $temp_st[3] = 'alternative'
                }
              }
            }
          } else {
            if (((s as any).alterstrtimg ?? 0) >= 22  &&  ((s as any).alterstrtimg ?? 0) <= 28) {
              // TODO-QSP: $temp_st[2] = 'outcast'
              if (((s as any).alterstrtimg ?? 0) === 22) {
                // TODO-QSP: $temp_st[3] = 'friendless'
              } else {
                if (((s as any).alterstrtimg ?? 0) === 23) {
                  // TODO-QSP: $temp_st[3] = 'uglyduckling'
                } else {
                  if (((s as any).alterstrtimg ?? 0) === 24) {
                    // TODO-QSP: $temp_st[3] = 'goodgirl'
                  } else {
                    if (((s as any).alterstrtimg ?? 0) === 25) {
                      // TODO-QSP: $temp_st[3] = 'slut'
                    } else {
                      // TODO-QSP: $temp_st[3] = 'goth'
                    }
                  }
                }
              }
            } else {
              if (((s as any).alterstrtimg ?? 0) === 31) {
                // TODO-QSP: $temp_st[2] = 'cool'
                // TODO-QSP: $temp_st[3] = 'anorexic'
              } else {
                // TODO-QSP: $temp_st[2] = 'custom'
                // TODO-QSP: $temp_st[3] = 'custom'
              }
            }
          }
        }
      }
    }
    ((s as any).start_type = (s as any).start_type ?? {})['loc'] = qspUntranslated(s, "temp_st[0]", { location: "saveupdater" });
    ((s as any).start_type = (s as any).start_type ?? {})['magic'] = qspUntranslated(s, "temp_st[1]", { location: "saveupdater" });
    ((s as any).start_type = (s as any).start_type ?? {})['group'] = qspUntranslated(s, "temp_st[2]", { location: "saveupdater" });
    ((s as any).start_type = (s as any).start_type ?? {})['cat'] = qspUntranslated(s, "temp_st[3]", { location: "saveupdater" });
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
      // TODO-QSP: :loopfashionista2
      if (((s as any).fashionista ?? 0)?.[String((s as any).i ?? 0)] === 1) {
        ((s as any).fashionista_dress = (s as any).fashionista_dress ?? {})[String((s as any).i ?? 0)] = 1;
        ((s as any).fashionista_dress_h = (s as any).fashionista_dress_h ?? {})[String((s as any).i ?? 0)] = ((s as any).fashionista_h ?? 0)?.[String((s as any).i ?? 0)];
        ((s as any).fashionista_dress_b = (s as any).fashionista_dress_b ?? {})[String((s as any).i ?? 0)] = ((s as any).fashionista_b ?? 0)?.[String((s as any).i ?? 0)];
        ((s as any).fashionista_dress_s = (s as any).fashionista_dress_s ?? {})[String((s as any).i ?? 0)] = ((s as any).fashionista_s ?? 0)?.[String((s as any).i ?? 0)];
      }
      (s as any).i = ((s as any).i ?? 0) + (4);
      if (((s as any).i ?? 0) <= 200) {
        // TODO-QSP: jump 'loopfashionista2'
      }
    }
    if (((s as any).Trainpass_day ?? 0) !== 0) {
      ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = ((s as any).Trainpass_day ?? 0);
      // TODO-QSP: killvar 'Trainpass_day'
    }
    if (((s as any).therapist_key ?? 0)[1] > 0) {
      ((s as any).therapistQW = (s as any).therapistQW ?? {})['hotel_day'] = qspUntranslated(s, "therapist_key[1]", { location: "saveupdater" });
      // TODO-QSP: killvar 'therapist_key', 1
    }
    if (((s as any).therapist_key ?? 0) > 0) {
      ((s as any).therapistQW = (s as any).therapistQW ?? {})['hotel_key'] = ((s as any).therapist_key ?? 0);
      // TODO-QSP: killvar 'therapist_key'
    }
    if (Object.keys((s as any).homes ?? {}).length === 16) {
      // TODO-QSP: $homes[] = 'hotel_therapist'
    }
    if (((s as any).home_name ?? 0)?.['hotel_therapist'] === '') {
      ((s as any).home_name = (s as any).home_name ?? {})['hotel_therapist'] = 'hotel_therapist';
      ((s as any).home_name = (s as any).home_name ?? {})['17'] = 'hotel_therapist';
    }
    if (Object.keys((s as any).homes ?? {}).length === 17) {
      // TODO-QSP: $homes[] = 'pushkin_ballet_dorm'
    }
    if (((s as any).home_name ?? 0)?.['pushkin_ballet_dorm'] === '') {
      ((s as any).home_name = (s as any).home_name ?? {})['pushkin_ballet_dorm'] = 'pushkin_ballet_dorm';
      ((s as any).home_name = (s as any).home_name ?? {})['18'] = 'pushkin_ballet_dorm';
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90201) {
    if (((s as any).btwarn ?? 0) > 0) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['weight_warning'] = ((s as any).btwarn ?? 0);
      // TODO-QSP: killvar 'btwarn'
    }
    if (((s as any).pcs_mass ?? 0)?.['body_message'] === 0) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = ((s as any).pcs_masss ?? 0)?.['body'];
    }
    (s as any).rej_idx = 0;
    (s as any).rej_sz = 0;
    // TODO-QSP: :lutcycloop
    if (((s as any).rej_idx ?? 0) < ((s as any).rej_sz ?? 0)) {
      if (((s as any).ChildFath ?? 0)?.[String((s as any).rej_idx ?? 0)] === '') {
        (s as any).FertEgg = ((s as any).FertEgg ?? 0) - (1);
      }
      (s as any).rej_idx = ((s as any).rej_idx ?? 0) + (1);
      // TODO-QSP: jump 'lutcycloop'
      if (Object.keys((s as any).Babyptype ?? {}).length <= 0) {
        (s as any).preg = 0;
        (s as any).pregChem = 0;
        (s as any).knowpreg = 0;
      }
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
    // TODO-QSP: :rstloop_outer
    (s as any).i = 0;
    // TODO-QSP: :rstloop_inner
    (s as any).expadj = 20 * ((s as any).difficulty ?? 0);
    (s as any).tl = 0;
    // TODO-QSP: :trtrstloop
    (s as any).tltp = 0;
    // TODO-QSP: :trtrstinsdlp
    // TODO-QSP: dynamic "
    if (((s as any).traitattskl ?? 0)?.[String((s as any).tl ?? 0)] > 0  &&  ((s as any).traitattskl ?? 0)?.[String((s as any).tl ?? 0)]?.[((s as any).tltp ?? 0) + 1] === ((s as any).x ?? 0)  &&  ((s as any).traitattskl ?? 0)?.[String((s as any).tl ?? 0)]?.[((s as any).tltp ?? 0) + 2] === ((s as any).i ?? 0)  &&  ((s as any).traitattskl ?? 0)?.[String((s as any).tl ?? 0)]?.[((s as any).tltp ?? 0) + 3] !== 0) {
      (s as any).expadj = ((s as any).expadj ?? 0) + (((s as any).traitattskl ?? 0)?.[String((s as any).tl ?? 0)]?.[((s as any).tltp ?? 0) + 3]);
    }
    if (((s as any).traitattskl ?? 0)?.[String((s as any).tl ?? 0)]?.[((s as any).tltp ?? 0) + 11] !== 0) {
      (s as any).insdlpflag = 1;
    }
    // TODO-QSP: "
    if (((s as any).insdlpflag ?? 0) === 1) {
      (s as any).insdlpflag = 0;
      (s as any).tltp = ((s as any).tltp ?? 0) + (10);
      // TODO-QSP: jump 'trtrstinsdlp'
    }
    (s as any).tl = ((s as any).tl ?? 0) + (1);
    if (((s as any).tl ?? 0) < Object.keys((s as any).traitattskl ?? {}).length) {
      // TODO-QSP: jump 'trtrstloop'
    }
    // TODO-QSP: killvar 'tl'
    // TODO-QSP: killvar 'tltp'
    // TODO-QSP: killvar 'insdlpflag'
    if (((s as any).x ?? 0) === 1) {
      (s as any).attskltmp = ((s as any).att_name ?? 0)?.[String((s as any).i ?? 0)];
    } else {
      (s as any).attskltmp = ((s as any).skl_name ?? 0)?.[String((s as any).i ?? 0)];
    }
    // TODO-QSP: dynamic "
    if (((s as any)[((s as any).attskltmp ?? '') + '_lvl'] ?? 0) > 0) {
      // TODO-QSP: <<$attskltmp>>_exp -= (expadj * (<<$attskltmp>>_lvl - 1) * (<<$attskltmp>>_lvl - 1) / 180)
      // TODO-QSP: <<$attskltmp>>_exp += (expadj *73* (<<$attskltmp>>_lvl - 1) * (<<$attskltmp>>_lvl - 1) / 2730)
      // TODO-QSP: <<$attskltmp>>_mem = <<$attskltmp>>_exp
    }
    // TODO-QSP: "
    (s as any).i = ((s as any).i ?? 0) + (1);
    if ((((s as any).x ?? 0) === 1  &&  ((s as any).i ?? 0) < Object.keys((s as any).att_name ?? {}).length)  ||  (((s as any).x ?? 0) === 2  &&  ((s as any).i ?? 0) < Object.keys((s as any).skl_name ?? {}).length)) {
      // TODO-QSP: jump 'rstloop_inner'
    }
    (s as any).i = 0;
    (s as any).x = ((s as any).x ?? 0) + (1);
    if (((s as any).x ?? 0) < 3) {
      // TODO-QSP: jump 'rstloop_outer'
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90204) {
    if (((s as any).oleg_hj ?? 0)            > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['hj'] = ((s as any).oleg_hj ?? 0);
      // TODO-QSP: killvar 'oleg_hj'
    }
    if (((s as any).oleg_bj ?? 0)            > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bj'] = ((s as any).oleg_bj ?? 0);
      // TODO-QSP: killvar 'oleg_bj'
    }
    if (((s as any).oleg_bjFail ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bjFail'] = ((s as any).oleg_bjFail ?? 0);
      // TODO-QSP: killvar 'oleg_bjFail'
    }
    if (((s as any).oleg_bjDeep ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bjDeep'] = ((s as any).oleg_bjDeep ?? 0);
      // TODO-QSP: killvar 'oleg_bjDeep'
    }
    if (((s as any).oleg_bjFailPuke ?? 0)        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bjFailPuke'] = ((s as any).oleg_bjFailPuke ?? 0);
      // TODO-QSP: killvar 'oleg_bjFailPuke'
    }
    if (((s as any).oleg_bjFailFaint ?? 0)        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['bjFailFaint'] = ((s as any).oleg_bjFailFaint ?? 0);
      // TODO-QSP: killvar 'oleg_bjFailFaint'
    }
    if (((s as any).oleg_swall ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['swall'] = ((s as any).oleg_swall ?? 0);
      // TODO-QSP: killvar 'oleg_swall'
    }
    if (((s as any).oleg_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInsideUnwanted'] = ((s as any).oleg_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'oleg_vagCumInsideUnwanted'
    }
    if (((s as any).oleg_vag ?? 0)            > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vag'] = ((s as any).oleg_vag ?? 0);
      // TODO-QSP: killvar 'oleg_vag'
    }
    if (((s as any).oleg_vagCumInside ?? 0)      > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInside'] = ((s as any).oleg_vagCumInside ?? 0);
      // TODO-QSP: killvar 'oleg_vagCumInside'
    }
    if (((s as any).oleg_anal ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['anal'] = ((s as any).oleg_anal ?? 0);
      // TODO-QSP: killvar 'oleg_anal'
    }
    if (((s as any).oleg_analCumInside ?? 0)      > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['analCumInside'] = ((s as any).oleg_analCumInside ?? 0);
      // TODO-QSP: killvar 'oleg_analCumInside'
    }
    if (((s as any).oleg_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInsideUnwanted'] = ((s as any).oleg_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'oleg_vagCumInsideUnwanted'
    }
    if (((s as any).oleg_piss ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['piss'] = ((s as any).oleg_piss ?? 0);
      // TODO-QSP: killvar 'oleg_piss'
    }
    if (((s as any).oleg_doPornpos ?? 0)        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['doPornpos'] = ((s as any).oleg_doPornpos ?? 0);
      // TODO-QSP: killvar 'oleg_doPornpos'
    }
    if (((s as any).oleg_pornPos ?? 0)          > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['pornPos'] = ((s as any).oleg_pornPos ?? 0);
      // TODO-QSP: killvar 'oleg_pornPos'
    }
    if (((s as any).nestor_bj ?? 0)          > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bj'] = ((s as any).nestor_bj ?? 0);
      // TODO-QSP: killvar 'nestor_bj'
    }
    if (((s as any).nestor_bjFail ?? 0)        > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bjFail'] = ((s as any).nestor_bjFail ?? 0);
      // TODO-QSP: killvar 'nestor_bjFail'
    }
    if (((s as any).nestor_bjDeep ?? 0)        > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bjDeep'] = ((s as any).nestor_bjDeep ?? 0);
      // TODO-QSP: killvar 'nestor_bjDeep'
    }
    if (((s as any).nestor_bjFailPuke ?? 0)      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bjFailPuke'] = ((s as any).nestor_bjFailPuke ?? 0);
      // TODO-QSP: killvar 'nestor_bjFailPuke'
    }
    if (((s as any).nestor_bjFailFaint ?? 0)      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['bjFailFaint'] = ((s as any).nestor_bjFailFaint ?? 0);
      // TODO-QSP: killvar 'nestor_bjFailFaint'
    }
    if (((s as any).nestor_swall ?? 0)          > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['swall'] = ((s as any).nestor_swall ?? 0);
      // TODO-QSP: killvar 'nestor_swall'
    }
    if (((s as any).nestor_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInsideUnwanted'] = ((s as any).nestor_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'nestor_vagCumInsideUnwanted'
    }
    if (((s as any).nestor_vag ?? 0)          > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vag'] = ((s as any).nestor_vag ?? 0);
      // TODO-QSP: killvar 'nestor_vag'
    }
    if (((s as any).nestor_vagCumInside ?? 0)      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInside'] = ((s as any).nestor_vagCumInside ?? 0);
      // TODO-QSP: killvar 'nestor_vagCumInside'
    }
    if (((s as any).nestor_anal ?? 0)          > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['anal'] = ((s as any).nestor_anal ?? 0);
      // TODO-QSP: killvar 'nestor_anal'
    }
    if (((s as any).nestor_analCumInside ?? 0)      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['analCumInside'] = ((s as any).nestor_analCumInside ?? 0);
      // TODO-QSP: killvar 'nestor_analCumInside'
    }
    if (((s as any).nestor_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInsideUnwanted'] = ((s as any).nestor_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'nestor_vagCumInsideUnwanted'
    }
    if (((s as any).nestor_doPornpos ?? 0)        > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['doPornpos'] = ((s as any).nestor_doPornpos ?? 0);
      // TODO-QSP: killvar 'nestor_doPornpos'
    }
    if (((s as any).nestor_pornPos ?? 0)        > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['pornPos'] = ((s as any).nestor_pornPos ?? 0);
      // TODO-QSP: killvar 'nestor_pornPos'
    }
    if (((s as any).yakov_bj ?? 0)            > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bj'] = ((s as any).yakov_bj ?? 0);
      // TODO-QSP: killvar 'yakov_bj'
    }
    if (((s as any).yakov_bjFail ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bjFail'] = ((s as any).yakov_bjFail ?? 0);
      // TODO-QSP: killvar 'yakov_bjFail'
    }
    if (((s as any).yakov_bjDeep ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bjDeep'] = ((s as any).yakov_bjDeep ?? 0);
      // TODO-QSP: killvar 'yakov_bjDeep'
    }
    if (((s as any).yakov_bjFailPuke ?? 0)        > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bjFailPuke'] = ((s as any).yakov_bjFailPuke ?? 0);
      // TODO-QSP: killvar 'yakov_bjFailPuke'
    }
    if (((s as any).yakov_bjFailFaint ?? 0)      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['bjFailFaint'] = ((s as any).yakov_bjFailFaint ?? 0);
      // TODO-QSP: killvar 'yakov_bjFailFaint'
    }
    if (((s as any).yakov_swall ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['swall'] = ((s as any).yakov_swall ?? 0);
      // TODO-QSP: killvar 'yakov_swall'
    }
    if (((s as any).yakov_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInsideUnwanted'] = ((s as any).yakov_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'yakov_vagCumInsideUnwanted'
    }
    if (((s as any).yakov_vag ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vag'] = ((s as any).yakov_vag ?? 0);
      // TODO-QSP: killvar 'yakov_vag'
    }
    if (((s as any).yakov_vagCumInside ?? 0)      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInside'] = ((s as any).yakov_vagCumInside ?? 0);
      // TODO-QSP: killvar 'yakov_vagCumInside'
    }
    if (((s as any).yakov_anal ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['anal'] = ((s as any).yakov_anal ?? 0);
      // TODO-QSP: killvar 'yakov_anal'
    }
    if (((s as any).yakov_analCumInside ?? 0)      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['analCumInside'] = ((s as any).yakov_analCumInside ?? 0);
      // TODO-QSP: killvar 'yakov_analCumInside'
    }
    if (((s as any).yakov_vagCumInsideUnwanted ?? 0)  > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInsideUnwanted'] = ((s as any).yakov_vagCumInsideUnwanted ?? 0);
      // TODO-QSP: killvar 'yakov_vagCumInsideUnwanted'
    }
    if (((s as any).yakov_doPornpos ?? 0)        > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['doPornpos'] = ((s as any).yakov_doPornpos ?? 0);
      // TODO-QSP: killvar 'yakov_doPornpos'
    }
    if (((s as any).yakov_pornPos ?? 0)        > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['pornPos'] = ((s as any).yakov_pornPos ?? 0);
      // TODO-QSP: killvar 'yakov_pornPos'
    }
    if (((s as any).yakov_hj ?? 0)            > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['hj'] = ((s as any).yakov_hj ?? 0);
      // TODO-QSP: killvar 'yakov_hj'
    }
    if (((s as any).yakov_dildo ?? 0)          > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['dildo'] = ((s as any).yakov_dildo ?? 0);
      // TODO-QSP: killvar 'yakov_dildo'
    }
    if (((s as any).rentLeft ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = ((s as any).rentLeft ?? 0);
      // TODO-QSP: killvar 'rentLeft'
    }
    if (((s as any).weekNum ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = ((s as any).weekNum ?? 0);
      // TODO-QSP: killvar 'weekNum'
    }
    if (((s as any).rentWeekNum ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekNum'] = ((s as any).rentWeekNum ?? 0);
      // TODO-QSP: killvar 'rentWeekNum'
    }
    if (((s as any).servitudeLvl ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = ((s as any).servitudeLvl ?? 0);
      // TODO-QSP: killvar 'servitudeLvl'
    }
    if (((s as any).servicePaid ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['servicePaid'] = ((s as any).servicePaid ?? 0);
      // TODO-QSP: killvar 'servicePaid'
    }
    if (((s as any).cashPaid ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['cashPaid'] = ((s as any).cashPaid ?? 0);
      // TODO-QSP: killvar 'cashPaid'
    }
    if (((s as any).pavSharedAptEnabled ?? 0)      > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['enabled'] = ((s as any).pavSharedAptEnabled ?? 0);
      // TODO-QSP: killvar 'pavSharedAptEnabled'
    }
    if (((s as any).pavIntroStep ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = ((s as any).pavIntroStep ?? 0);
      // TODO-QSP: killvar 'pavIntroStep'
    }
    if (((s as any).rentWeekly ?? 0)          > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekly'] = ((s as any).rentWeekly ?? 0);
      // TODO-QSP: killvar 'rentWeekly'
    }
    if (((s as any).price ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = ((s as any).price ?? 0);
      // TODO-QSP: killvar 'price'
    }
    if (((s as any).vcard ?? 0)            > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['vintage_card'] = ((s as any).vcard ?? 0);
      // TODO-QSP: killvar 'vcard'
    }
    if (((s as any).card ?? 0)              > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['card'] = ((s as any).card ?? 0);
      // TODO-QSP: killvar 'card'
    }
    if (((s as any).sexCh ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['sexCh'] = ((s as any).sexCh ?? 0);
      // TODO-QSP: killvar 'sexCh'
    }
    if (((s as any).actionR ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['actionR'] = ((s as any).actionR ?? 0);
      // TODO-QSP: killvar 'actionR'
    }
    if (((s as any).seenAd ?? 0)            > 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['seenAd'] = ((s as any).seenAd ?? 0);
      // TODO-QSP: killvar 'seenAd'
    }
    if (((s as any).gobelen ?? 0)            > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tapestry'] = ((s as any).gobelen ?? 0);
      // TODO-QSP: killvar 'gobelen'
    }
    if (((s as any).GarTorgItem ?? 0)          > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['trinkets_garage'] = ((s as any).GarTorgItem ?? 0);
      // TODO-QSP: killvar 'GarTorgItem'
    }
    if (((s as any).TovarL ?? 0)            > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['trinkets_home'] = ((s as any).TovarL ?? 0);
      // TODO-QSP: killvar 'TovarL'
    }
    if (((s as any).perenGarTov ?? 0) > 0) {
      // TODO-QSP: killvar 'perenGarTov'
    }
    if (((s as any).mc_inventory ?? 0)?.['refill_bottle'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['refill_bottle_water'] = ((s as any).mc_inventory ?? 0)?.['refill_bottle'];
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['refill_bottle'] = 1;
    }
    if (((s as any).Oleg ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['cumAnal'] = ((s as any).Oleg ?? 0)?.['analCumInside'];
    }
    if (((s as any).Oleg ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['analCumInside'] = ((s as any).Oleg['analCumInside'] ?? 0) - (((s as any).Oleg ?? 0)?.['analCumInsideUnwanted']);
    }
    if (((s as any).Oleg ?? 0)?.['analCumInsideUnwanted']  > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['analCumInsideUnwanted'] = ((s as any).Oleg['analCumInsideUnwanted'] ?? 0) - (((s as any).Oleg ?? 0)?.['analCumInside']);
    }
    if (((s as any).Nestor ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['cumAnal'] = ((s as any).Nestor ?? 0)?.['analCumInside'];
    }
    if (((s as any).Nestor ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['analCumInside'] = ((s as any).Nestor['analCumInside'] ?? 0) - (((s as any).Nestor ?? 0)?.['analCumInsideUnwanted']);
    }
    if (((s as any).Nestor ?? 0)?.['analCumInsideUnwanted']  > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['analCumInsideUnwanted'] = ((s as any).Nestor['analCumInsideUnwanted'] ?? 0) - (((s as any).Nestor ?? 0)?.['analCumInside']);
    }
    if (((s as any).Yakov ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['cumAnal'] = ((s as any).Yakov ?? 0)?.['analCumInside'];
    }
    if (((s as any).Yakov ?? 0)?.['analCumInside']      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['analCumInside'] = ((s as any).Yakov['analCumInside'] ?? 0) - (((s as any).Yakov ?? 0)?.['analCumInsideUnwanted']);
    }
    if (((s as any).Yakov ?? 0)?.['analCumInsideUnwanted']  > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['analCumInsideUnwanted'] = ((s as any).Yakov['analCumInsideUnwanted'] ?? 0) - (((s as any).Yakov ?? 0)?.['analCumInside']);
    }
    if (((s as any).Oleg ?? 0)?.['vagCumInside']        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['cumVag'] = ((s as any).Oleg ?? 0)?.['vagCumInside'];
    }
    if (((s as any).Oleg ?? 0)?.['vagCumInside']        > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInside'] = ((s as any).Oleg['vagCumInside'] ?? 0) - (((s as any).Oleg ?? 0)?.['vagCumInsideUnwanted']);
    }
    if (((s as any).Oleg ?? 0)?.['vagCumInsideUnwanted']    > 0) {
      ((s as any).Oleg = (s as any).Oleg ?? {})['vagCumInsideUnwanted'] = ((s as any).Oleg['vagCumInsideUnwanted'] ?? 0) - (((s as any).Oleg ?? 0)?.['vagCumInside']);
    }
    if (((s as any).Nestor ?? 0)?.['vagCumInside']      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['cumVag'] = ((s as any).Nestor ?? 0)?.['vagCumInside'];
    }
    if (((s as any).Nestor ?? 0)?.['vagCumInside']      > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInside'] = ((s as any).Nestor['vagCumInside'] ?? 0) - (((s as any).Nestor ?? 0)?.['vagCumInsideUnwanted']);
    }
    if (((s as any).Nestor ?? 0)?.['vagCumInsideUnwanted']  > 0) {
      ((s as any).Nestor = (s as any).Nestor ?? {})['vagCumInsideUnwanted'] = ((s as any).Nestor['vagCumInsideUnwanted'] ?? 0) - (((s as any).Nestor ?? 0)?.['vagCumInside']);
    }
    if (((s as any).Yakov ?? 0)?.['vagCumInside']      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['cumVag'] = ((s as any).Yakov ?? 0)?.['vagCumInside'];
    }
    if (((s as any).Yakov ?? 0)?.['vagCumInside']      > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInside'] = ((s as any).Yakov['vagCumInside'] ?? 0) - (((s as any).Yakov ?? 0)?.['vagCumInsideUnwanted']);
    }
    if (((s as any).Yakov ?? 0)?.['vagCumInsideUnwanted']  > 0) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInsideUnwanted'] = ((s as any).Yakov['vagCumInsideUnwanted'] ?? 0) - (((s as any).Yakov ?? 0)?.['vagCumInside']);
    }
    if (((s as any).NarkImmune ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cheat_immune'] = ((s as any).NarkImmune ?? 0);
      // TODO-QSP: killvar 'NarkImmune'
    }
    if (((s as any).SNarkPriton ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['city_drugden'] = ((s as any).SNarkPriton ?? 0);
      // TODO-QSP: killvar 'SNarkPriton'
    }
    if (((s as any).snarkozak ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['pav_dropoff'] = ((s as any).snarkozak ?? 0);
      // TODO-QSP: killvar 'snarkozak'
    }
    if (((s as any).siga_bum ?? 0)          > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) + (1);
      // TODO-QSP: killvar 'siga_bum'
    }
    if (((s as any).smoker ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_used'] = ((s as any).smoker ?? 0);
      // TODO-QSP: killvar 'smoker'
    }
    if (((s as any).smoke_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_exp'] = ((s as any).smoke_exp ?? 0);
      // TODO-QSP: killvar 'smoke_exp'
    }
    if (((s as any).smokerneed ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_need'] = ((s as any).smokerneed ?? 0);
      // TODO-QSP: killvar 'smokerneed'
    }
    if (((s as any).smokeDay ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_day'] = ((s as any).smokeDay ?? 0);
      // TODO-QSP: killvar 'smokeDay'
    }
    if (((s as any).smokeHour ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_hour'] = ((s as any).smokeHour ?? 0);
      // TODO-QSP: killvar 'smokeHour'
    }
    if (((s as any).smokeminut ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_minute'] = ((s as any).smokeminut ?? 0);
      // TODO-QSP: killvar 'smokeminut'
    }
    if (((s as any).joint ?? 0)          < 0) {
      // TODO-QSP: killvar 'joint'
    }
    if (((s as any).joint ?? 0)          > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['joints'] = ((s as any).joint ?? 0);
      // TODO-QSP: killvar 'joint'
    }
    if (((s as any).jointhigh ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_high'] = ((s as any).jointhigh ?? 0);
      // TODO-QSP: killvar 'jointhigh'
    }
    if (((s as any).joint_smoked ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_used'] = ((s as any).joint_smoked ?? 0);
      // TODO-QSP: killvar 'joint_smoked'
    }
    if (((s as any).joint_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_exp'] = ((s as any).joint_exp ?? 0);
      // TODO-QSP: killvar 'joint_exp'
    }
    if (((s as any).jointday ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_day'] = ((s as any).jointday ?? 0);
      // TODO-QSP: killvar 'jointday'
    }
    if (((s as any).jointhour ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_hour'] = ((s as any).jointhour ?? 0);
      // TODO-QSP: killvar 'jointhour'
    }
    if (((s as any).jointminut ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_minute'] = ((s as any).jointminut ?? 0);
      // TODO-QSP: killvar 'jointminut'
    }
    if (((s as any).SNarkTimes ?? 0)?.['inject']    > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_inject'] = ((s as any).SNarkTimes ?? 0)?.['inject'];
    }
    if (((s as any).StrongNarkota ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_high'] = ((s as any).StrongNarkota ?? 0);
      // TODO-QSP: killvar 'StrongNarkota'
    }
    if (((s as any).SNarkTimes ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_used'] = ((s as any).SNarkTimes ?? 0);
      // TODO-QSP: killvar 'SNarkTimes'
    }
    if (((s as any).heroin_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_exp'] = ((s as any).heroin_exp ?? 0);
      // TODO-QSP: killvar 'heroin_exp'
    }
    if (((s as any).SLomka ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_need'] = ((s as any).SLomka ?? 0);
      // TODO-QSP: killvar 'SLomka'
    }
    if (((s as any).narkozakday ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_day'] = ((s as any).narkozakday ?? 0);
      // TODO-QSP: killvar 'narkozakday'
    }
    if (((s as any).NarkShmaraTimes ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_whore'] = ((s as any).NarkShmaraTimes ?? 0);
      // TODO-QSP: killvar 'NarkShmaraTimes'
    }
    if (((s as any).SNarkvnesh ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_penalty'] = ((s as any).SNarkvnesh ?? 0);
      // TODO-QSP: killvar 'SNarkvnesh'
    }
    if (((s as any).dur ?? 0)            > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cocaine'] = ((s as any).dur ?? 0);
      // TODO-QSP: killvar 'dur'
    }
    if (((s as any).nark ?? 0)            > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = ((s as any).nark ?? 0);
      // TODO-QSP: killvar 'nark'
    }
    if (((s as any).cocaine_count ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_used'] = ((s as any).cocaine_count ?? 0);
      // TODO-QSP: killvar 'cocaine_count'
    }
    if (((s as any).cocaine_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_exp'] = ((s as any).cocaine_exp ?? 0);
      // TODO-QSP: killvar 'cocaine_exp'
    }
    if (((s as any).narkday ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_day'] = ((s as any).narkday ?? 0);
      // TODO-QSP: killvar 'narkday'
    }
    if (((s as any).narkoman ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_addict'] = ((s as any).narkoman ?? 0);
      // TODO-QSP: killvar 'narkoman'
    }
    if (((s as any).willday_cocaine ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_willday'] = ((s as any).willday_cocaine ?? 0);
      // TODO-QSP: killvar 'willday_cocaine'
    }
    if (((s as any).amphetamine ?? 0)        > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['amphetamine'] = ((s as any).amphetamine ?? 0);
      // TODO-QSP: killvar 'amphetamine'
    }
    if (((s as any).amphHigh ?? 0)          > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_high'] = ((s as any).amphHigh ?? 0);
      // TODO-QSP: killvar 'amphHigh'
    }
    if (((s as any).amphetamine_count ?? 0)    > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_used'] = ((s as any).amphetamine_count ?? 0);
      // TODO-QSP: killvar 'amphetamine_count'
    }
    if (((s as any).amphetamine_exp ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_exp'] = ((s as any).amphetamine_exp ?? 0);
      // TODO-QSP: killvar 'amphetamine_exp'
    }
    if (((s as any).amphIntake ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_intake'] = ((s as any).amphIntake ?? 0);
      // TODO-QSP: killvar 'amphIntake'
    }
    if (((s as any).amphWithdrawl ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_withdrawl'] = ((s as any).amphWithdrawl ?? 0);
      // TODO-QSP: killvar 'amphWithdrawl'
    }
    if (((s as any).amphetamineBonus ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_bonus'] = ((s as any).amphetamineBonus ?? 0);
      // TODO-QSP: killvar 'amphetamineBonus'
    }
    if (((s as any).mentats_have ?? 0)        > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mentats'] = ((s as any).mentats_have ?? 0);
      // TODO-QSP: killvar 'mentats_have'
    }
    if (((s as any).mentats_dose ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['mentats_dose'] = ((s as any).mentats_dose ?? 0);
      // TODO-QSP: killvar 'mentats_dose'
    }
    if (((s as any).alcohol_count ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['alcohol_used'] = ((s as any).alcohol_count ?? 0);
      // TODO-QSP: killvar 'alcohol_count'
    }
    if (((s as any).alcohol_exp ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['alcohol_exp'] = ((s as any).alcohol_exp ?? 0);
      // TODO-QSP: killvar 'alcohol_exp'
    }
    if (((s as any).aphrodisiac_have ?? 0)      > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['aphrodisiac'] = ((s as any).aphrodisiac_have ?? 0);
      // TODO-QSP: killvar 'aphrodisiac_have'
    }
    if (((s as any).aphrodisiac_addiction ?? 0)  > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_addict'] = ((s as any).aphrodisiac_addiction ?? 0);
      // TODO-QSP: killvar 'aphrodisiac_addiction'
    }
    if (((s as any).aphrodisiac_timer ?? 0)    > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_timer'] = ((s as any).aphrodisiac_timer ?? 0);
      // TODO-QSP: killvar 'aphrodisiac_timer'
    }
    if (((s as any).aphrodisiac_overdose ?? 0)    > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_overdose'] = ((s as any).aphrodisiac_overdose ?? 0);
      // TODO-QSP: killvar 'aphrodisiac_overdose'
    }
    if (((s as any).aphrodisiac_msg ?? 0)      !== '') {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_msg'] = ((s as any).aphrodisiac_msg ?? 0);
      // TODO-QSP: killvar 'aphrodisiac_msg'
    }
    if (((s as any).steroid_have ?? 0)        > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['steroids'] = ((s as any).steroid_have ?? 0);
      // TODO-QSP: killvar 'steroid_have'
    }
    if (((s as any).steroid_counter ?? 0)      > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_used'] = ((s as any).steroid_counter ?? 0);
      // TODO-QSP: killvar 'steroid_counter'
    }
    if (((s as any).steroid_dose ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_dose'] = ((s as any).steroid_dose ?? 0);
      // TODO-QSP: killvar 'steroid_dose'
    }
    if (((s as any).bcream_have ?? 0)        > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['breastcream'] = ((s as any).bcream_have ?? 0);
      // TODO-QSP: killvar 'bcream_have'
    }
    if (((s as any).bcream_used ?? 0)        > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['breastcream_dose'] = ((s as any).bcream_used ?? 0);
      // TODO-QSP: killvar 'bcream_used'
    }
    ((s as any).home_name = (s as any).home_name ?? {})['gad_gpbarn'] = 'grandparents_house';
    if ((Array.isArray((s as any).npc_pref_traits) ? ((s as any).npc_pref_traits as any[]).indexOf('body_ass_heart') : -1) < 0) {
      qspCall(s, 'npc_set_preference', 'A14', 'body_ass_heart', 'like');
    }
    if (((s as any).begsec ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['joined_team'] = ((s as any).begsec ?? 0);
      // TODO-QSP: killvar 'begsec'
    }
    if (((s as any).run_comp_day ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['comp_day'] = ((s as any).run_comp_day ?? 0);
      // TODO-QSP: killvar 'run_comp_day'
    }
    if (((s as any).kolsorev ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['races_ran'] = ((s as any).kolsorev ?? 0);
      // TODO-QSP: killvar 'kolsorev'
    }
    if (((s as any).razradbeg ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['prof_stage'] = ((s as any).razradbeg ?? 0);
      // TODO-QSP: killvar 'razradbeg'
    }
    if (((s as any).bronzebeg ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['bronze_medals'] = ((s as any).bronzebeg ?? 0);
      // TODO-QSP: killvar 'bronzebeg'
    }
    if (((s as any).silverbeg ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['silver_medals'] = ((s as any).silverbeg ?? 0);
      // TODO-QSP: killvar 'silverbeg'
    }
    if (((s as any).goldbeg ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['gold_medals'] = ((s as any).goldbeg ?? 0);
      // TODO-QSP: killvar 'goldbeg'
    }
    if (((s as any).razradbegK ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['qualifiers'] = ((s as any).razradbegK ?? 0);
      // TODO-QSP: killvar 'razradbegK'
    }
    if (((s as any).razradbegEB ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['champ_bronze'] = ((s as any).razradbegEB ?? 0);
      // TODO-QSP: killvar 'razradbegEB'
    }
    if (((s as any).razradbegES ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['champ_silver'] = ((s as any).razradbegES ?? 0);
      // TODO-QSP: killvar 'razradbegES'
    }
    if (((s as any).razradbegEG ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['champ_gold'] = ((s as any).razradbegEG ?? 0);
      // TODO-QSP: killvar 'razradbegEG'
    }
    if (((s as any).SchoolSorev ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_racetype'] = ((s as any).SchoolSorev ?? 0);
      // TODO-QSP: killvar 'SchoolSorev'
    }
    if (((s as any).LocalRun ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_stage'] = ((s as any).LocalRun ?? 0);
      // TODO-QSP: killvar 'LocalRun'
    }
    if (((s as any).swinbeg ?? 0)    > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_wins1'] = ((s as any).swinbeg ?? 0);
      // TODO-QSP: killvar 'swinbeg'
    }
    if (((s as any).swinbeggor ?? 0)  > 0) {
      ((s as any).runnerQW = (s as any).runnerQW ?? {})['pav_wins2'] = ((s as any).swinbeggor ?? 0);
      // TODO-QSP: killvar 'swinbeggor'
    }
    if (((s as any).dress_ind_bra ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_ind_bra'
    }
    if (((s as any).dress_ind_tits ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_ind_tits'
    }
    if (((s as any).dress_ind_panties ?? 0)    > 0) {
      // TODO-QSP: killvar 'dress_ind_panties'
    }
    if (((s as any).dress_ind_pussy ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_ind_pussy'
    }
    if (((s as any).dress_ind_pussy_hairy ?? 0)  > 0) {
      // TODO-QSP: killvar 'dress_ind_pussy_hairy'
    }
    if (((s as any).dress_ind_pantyrear ?? 0)    > 0) {
      // TODO-QSP: killvar 'dress_ind_pantyrear'
    }
    if (((s as any).dress_ind_butt ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_ind_butt'
    }
    if (((s as any).dress_ind_full ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_ind_full'
    }
    if (((s as any).dress_ind_full_hairy ?? 0)    > 0) {
      // TODO-QSP: killvar 'dress_ind_full_hairy'
    }
    if (((s as any).dress_out_bra ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_out_bra'
    }
    if (((s as any).dress_out_tits ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_out_tits'
    }
    if (((s as any).dress_out_panties ?? 0)    > 0) {
      // TODO-QSP: killvar 'dress_out_panties'
    }
    if (((s as any).dress_out_pussy ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_out_pussy'
    }
    if (((s as any).dress_out_pussy_hairy ?? 0)  > 0) {
      // TODO-QSP: killvar 'dress_out_pussy_hairy'
    }
    if (((s as any).dress_out_pantyrear ?? 0)    > 0) {
      // TODO-QSP: killvar 'dress_out_pantyrear'
    }
    if (((s as any).dress_out_butt ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_out_butt'
    }
    if (((s as any).dress_out_butt_plug ?? 0)    > 0) {
      // TODO-QSP: killvar 'dress_out_butt_plug'
    }
    if (((s as any).dress_out_full ?? 0)      > 0) {
      // TODO-QSP: killvar 'dress_out_full'
    }
    if (((s as any).dress_out_full_hairy ?? 0)    > 0) {
      // TODO-QSP: killvar 'dress_out_full_hairy'
    }
    if (((s as any).pants_ind_bra ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_ind_bra'
    }
    if (((s as any).pants_ind_tits ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_ind_tits'
    }
    if (((s as any).pants_ind_panties ?? 0)    > 0) {
      // TODO-QSP: killvar 'pants_ind_panties'
    }
    if (((s as any).pants_ind_pussy ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_ind_pussy'
    }
    if (((s as any).pants_ind_pussy_hairy ?? 0)  > 0) {
      // TODO-QSP: killvar 'pants_ind_pussy_hairy'
    }
    if (((s as any).pants_ind_pantyrear ?? 0)    > 0) {
      // TODO-QSP: killvar 'pants_ind_pantyrear'
    }
    if (((s as any).pants_ind_butt ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_ind_butt'
    }
    if (((s as any).pants_ind_full ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_ind_full'
    }
    if (((s as any).pants_ind_full_hairy ?? 0)    > 0) {
      // TODO-QSP: killvar 'pants_ind_full_hairy'
    }
    if (((s as any).pants_out_bra ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_out_bra'
    }
    if (((s as any).pants_out_tits ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_out_tits'
    }
    if (((s as any).pants_out_panties ?? 0)    > 0) {
      // TODO-QSP: killvar 'pants_out_panties'
    }
    if (((s as any).pants_out_pussy ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_out_pussy'
    }
    if (((s as any).pants_out_pussy_hairy ?? 0)  > 0) {
      // TODO-QSP: killvar 'pants_out_pussy_hairy'
    }
    if (((s as any).pants_out_pantyrear ?? 0)    > 0) {
      // TODO-QSP: killvar 'pants_out_pantyrear'
    }
    if (((s as any).pants_out_butt ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_out_butt'
    }
    if (((s as any).pants_out_butt_plug ?? 0)    > 0) {
      // TODO-QSP: killvar 'pants_out_butt_plug'
    }
    if (((s as any).pants_out_full ?? 0)      > 0) {
      // TODO-QSP: killvar 'pants_out_full'
    }
    if (((s as any).pants_out_full_hairy ?? 0)    > 0) {
      // TODO-QSP: killvar 'pants_out_full_hairy'
    }
    if (((s as any).lact_ev ?? 0)?.['poli_totaldonatemoney'] <= 0  &&  ((s as any).lact_ev ?? 0)?.['poli_totalmilkdonated'] >= 5) {
      ((s as any).lact_ev = (s as any).lact_ev ?? {})['poli_totaldonatemoney'] = ((((s as any).lact_ev ?? {})?.['poli_totalmilkdonated'] ?? 0) / 5) * 10;
    }
    if (((s as any).soniaQW ?? 0)?.[String((s as any).soniafall_block ?? 0)] > 1  &&  ((s as any).soniaQW ?? 0)?.[String((s as any).soniafall_block ?? 0)] !== ((s as any).soniaQW ?? 0)?.['soniafall_block']) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['soniafall_block'] = ((s as any).soniaQW ?? 0)?.[String((s as any).soniafall_block ?? 0)];
      if (((s as any).soniaQW ?? 0)?.['homeinvite'] > 0) {
        ((s as any).soniaQW = (s as any).soniaQW ?? {})['homeinvite'] = 1;
      }
    }
    if (((s as any).vladimirday ?? 0) > 0  ||  ((s as any).vladimirQW ?? 0) > 0  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 0) {
      (s as any).temp_var1 = ((s as any).vladimirQW ?? 0);
      ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['stage'] = ((s as any).temp_var1 ?? 0);
      if (((s as any).vladimirday ?? 0) > 0) {
        ((s as any).vladimirQW = (s as any).vladimirQW ?? {})['day'] = ((s as any).vladimirday ?? 0);
      }
    }
    if ((Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A108') : -1) > -1) {
      (s as any).temp_pos = qspUntranslated(s, "arrpos('contact', 'A108')", { location: "saveupdater" });
      if (((String(((s as any).contactICode ?? 0)?.[String((s as any).temp_pos ?? 0)]).indexOf(String('telefon'))) + 1) > 0) {
        // TODO-QSP: $contactICode[temp_pos] = replace($contactICode[temp_pos], "'telefon', 'vladimir'", "'vladimirQW_loc...
      }
      if (((String(((s as any).contactISche ?? 0)?.[String((s as any).temp_pos ?? 0)]).indexOf(String('vladimirday'))) + 1) > 0) {
        // TODO-QSP: $contactISche[temp_pos] = replace($contactISche[temp_pos], "vladimirday", "vladimirQW['day']")
      }
    }
    if ((Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A192') : -1) > -1) {
      (s as any).temp_pos = qspUntranslated(s, "arrpos('contact', 'A192')", { location: "saveupdater" });
      if (((String(((s as any).contactOCode ?? 0)?.[String((s as any).temp_pos ?? 0)]).indexOf(String('telefon'))) + 1) > 0) {
        // TODO-QSP: $contactOCode[temp_pos] = replace($contactOCode[temp_pos], 'telefon', 'nastja')
      }
    }
    if (Object.keys((s as any).contact ?? {}).length > Object.keys((s as any).contactOSMSCode ?? {}).length) {
      (s as any).temp_maxi = 0;
      (s as any).temp_i = 0;
      // TODO-QSP: :saveupdater_SMSCODE_scheduling_loop
      // TODO-QSP: $contactOSMSCode[temp_i] = ""
      // TODO-QSP: $contactOSMSSche[temp_i] = "0"
      // TODO-QSP: $contactISMSCode[temp_i] = ""
      // TODO-QSP: $contactISMSSche[temp_i] = "0"
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      if (((s as any).temp_i ?? 0) < ((s as any).temp_maxi ?? 0)) {
        // TODO-QSP: jump 'saveupdater_SMSCODE_scheduling_loop'
      }
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
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashimage'] = ((s as any).blackmailQW ?? 0)?.['init_flashimage'] + '.jpg';
    }
    if (((s as any).blackmailQW ?? 0)?.['blackmail_image_chosen'] === ''  &&  ((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['blackmail_image_chosen'] = ((s as any).blackmailQW ?? 0)?.['init_flashimage'];
    }
    if (((s as any).igor_krossdress ?? 0) > 0  &&  ((s as any).igor_eqwtday ?? 0) > 0  &&  (!((s as any).igor_progulkaday ?? 0))) {
      (s as any).igor_krossdress = 0;
    }
    if (Object.keys((s as any).transportVars ?? {}).length > 4) {
      // TODO-QSP: copyarr('temp_transportVars', 'transportVars')
      ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = ((s as any).temp_transportVars ?? 0)?.['trainpass_day'];
      ((s as any).transportVars = (s as any).transportVars ?? {})['buspass_day'] = ((s as any).temp_transportVars ?? 0)?.['buspass_day'];
      ((s as any).transportVars = (s as any).transportVars ?? {})['train_event_day'] = ((s as any).temp_transportVars ?? 0)?.['train_event_day'];
      ((s as any).transportVars = (s as any).transportVars ?? {})['bus_event_day'] = ((s as any).temp_transportVars ?? 0)?.['bus_event_day'];
    }
    if (((s as any).bodyVars ?? 0)?.['cheat_staticAssets'] !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['body_staticAssets'] = ((s as any).bodyVars ?? 0)?.['cheat_staticAssets'];
      qspCall(s, 'array', 'remove_element', '$bodyVars', 'cheat_staticAssets');
    }
    qspCall(s, 'array', 'remove_element', '$bodyVars', 'cheat_staticAssets_text');
    if (((s as any).drugVars ?? 0)?.['cheat_immune'] !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['drugs_immune'] = ((s as any).drugVars ?? 0)?.['cheat_immune'];
      qspCall(s, 'array', 'remove_element', '$drugVars', 'cheat_immune');
    }
    qspCall(s, 'array', 'remove_element', '$drugVars', 'cheat_immune_text');
    if (((s as any).sleepVars ?? 0)?.['cheatVib'] !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['sleep_vib'] = ((s as any).sleepVars ?? 0)?.['cheatVib'];
    }
    qspCall(s, 'array', 'remove_element', '$sleepVars', 'cheatVib');
    if (((s as any).sleepVars ?? 0)?.['cheat_nodream_chance'] !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_dream_chance'] = ((s as any).sleepVars ?? 0)?.['cheat_nodream_chance'];
    }
    qspCall(s, 'array', 'remove_element', '$sleepVars', 'cheat_nodream_chance');
    if (((s as any).cheatConsole ?? 0)        !== 0  ||  ((s as any).cheatConsole ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['console'] = ((s as any).cheatConsole ?? 0);
      // TODO-QSP: killvar 'cheatConsole'
    }
    if (((s as any).cheatwork ?? 0)        !== 0  ||  ((s as any).cheatwork ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['work'] = ((s as any).cheatwork ?? 0);
      // TODO-QSP: killvar 'cheatwork'
    }
    if (((s as any).cheatWillpower ?? 0)      !== 0  ||  ((s as any).cheatWillpower ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['willpower'] = ((s as any).cheatWillpower ?? 0);
      // TODO-QSP: killvar 'cheatWillpower'
    }
    if (((s as any).InfWillpwer ?? 0)        !== 0  ||  ((s as any).InfWillpwer ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['inf_willpower'] = ((s as any).InfWillpwer ?? 0);
      // TODO-QSP: killvar 'InfWillpwer'
    }
    if (((s as any).cheatHapri ?? 0)        !== 0  ||  ((s as any).cheatHapri ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['always_brushed'] = ((s as any).cheatHapri ?? 0);
      // TODO-QSP: killvar 'cheatHapri'
    }
    if (((s as any).autohairbrush ?? 0)      !== 0  ||  ((s as any).autohairbrush ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_brush'] = ((s as any).autohairbrush ?? 0);
      // TODO-QSP: killvar 'autohairbrush'
    }
    if (((s as any).no_cum_leak ?? 0)        !== 0  ||  ((s as any).no_cum_leak ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_cum_leak'] = ((s as any).no_cum_leak ?? 0);
      // TODO-QSP: killvar 'no_cum_leak'
    }
    if (((s as any).cyccustom ?? 0)        !== 0  ||  ((s as any).cyccustom ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = ((s as any).cyccustom ?? 0);
      // TODO-QSP: killvar 'cyccustom'
    }
    if (((s as any).cheatNomakeup ?? 0)      !== 0  ||  ((s as any).cheatNomakeup ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['makeup_smear'] = ((s as any).cheatNomakeup ?? 0);
      // TODO-QSP: killvar 'cheatNomakeup'
    }
    if (((s as any).cheatNoSweat ?? 0)        !== 0  ||  ((s as any).cheatNoSweat ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_sweat'] = ((s as any).cheatNoSweat ?? 0);
      // TODO-QSP: killvar 'cheatNoSweat'
    }
    if (((s as any).cheatNoEat ?? 0)        !== 0  ||  ((s as any).cheatNoEat ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['hunger'] = ((s as any).cheatNoEat ?? 0);
      // TODO-QSP: killvar 'cheatNoEat'
    }
    if (((s as any).cheatNoDrink ?? 0)        !== 0  ||  ((s as any).cheatNoDrink ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['thirst'] = ((s as any).cheatNoDrink ?? 0);
      // TODO-QSP: killvar 'cheatNoDrink'
    }
    if (((s as any).cheatNoSleep ?? 0)        !== 0  ||  ((s as any).cheatNoSleep ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['sleep'] = ((s as any).cheatNoSleep ?? 0);
      // TODO-QSP: killvar 'cheatNoSleep'
    }
    if (((s as any).cheatNoMood ?? 0)        !== 0  ||  ((s as any).cheatNoMood ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['mood'] = ((s as any).cheatNoMood ?? 0);
      // TODO-QSP: killvar 'cheatNoMood'
    }
    if (((s as any).cheatNoFat ?? 0)        !== 0  ||  ((s as any).cheatNoFat ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['fat'] = ((s as any).cheatNoFat ?? 0);
      // TODO-QSP: killvar 'cheatNoFat'
    }
    if (((s as any).cheatHealth ?? 0)        !== 0  ||  ((s as any).cheatHealth ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['std'] = ((s as any).cheatHealth ?? 0);
      // TODO-QSP: killvar 'cheatHealth'
    }
    if (((s as any).cheatPee ?? 0)          !== 0  ||  ((s as any).cheatPee ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['pee'] = ((s as any).cheatPee ?? 0);
      // TODO-QSP: killvar 'cheatPee'
    }
    if (((s as any).cheatSlut ?? 0)        !== 0  ||  ((s as any).cheatSlut ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_periods'] = ((s as any).cheatSlut ?? 0);
      // TODO-QSP: killvar 'cheatSlut'
    }
    if (((s as any).cheatHorny ?? 0)        !== 0  ||  ((s as any).cheatHorny ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['always_horny'] = ((s as any).cheatHorny ?? 0);
      // TODO-QSP: killvar 'cheatHorny'
    }
    if (((s as any).fight_cheat ?? 0)        !== 0  ||  ((s as any).fight_cheat ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['win_fights'] = ((s as any).fight_cheat ?? 0);
      // TODO-QSP: killvar 'fight_cheat'
    }
    if (((s as any).autocombat_cheat ?? 0)      !== 0  ||  ((s as any).autocombat_cheat ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_combat'] = ((s as any).autocombat_cheat ?? 0);
      // TODO-QSP: killvar 'autocombat_cheat'
    }
    if (((s as any).cheat_NoPregnancy ?? 0)    !== 0  ||  ((s as any).cheat_NoPregnancy ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_pregnancy'] = ((s as any).cheat_NoPregnancy ?? 0);
      // TODO-QSP: killvar 'cheat_NoPregnancy'
    }
    if (((s as any).pregspeedcheat ?? 0)      !== 0  ||  ((s as any).pregspeedcheat ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_speed'] = ((s as any).pregspeedcheat ?? 0);
      // TODO-QSP: killvar 'pregspeedcheat'
    }
    if (((s as any).cheat_NoLactation ?? 0)    !== 0  ||  ((s as any).cheat_NoLactation ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_lactation'] = ((s as any).cheat_NoLactation ?? 0);
      // TODO-QSP: killvar 'cheat_NoLactation'
    }
    if (((s as any).cheatBimbo ?? 0)        !== 0  ||  ((s as any).cheatBimbo ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['bimbo'] = ((s as any).cheatBimbo ?? 0);
      // TODO-QSP: killvar 'cheatBimbo'
    }
    if (((s as any).cheatBimbo2 ?? 0)        !== 0  ||  ((s as any).cheatBimbo2 ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['smart_bimbo'] = ((s as any).cheatBimbo2 ?? 0);
      // TODO-QSP: killvar 'cheatBimbo2'
    }
    if (((s as any).cheatBimbo3 ?? 0)        !== 0  ||  ((s as any).cheatBimbo3 ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['suc_bimbo'] = ((s as any).cheatBimbo3 ?? 0);
      // TODO-QSP: killvar 'cheatBimbo3'
    }
    if (((s as any).cheatTime ?? 0)        !== 0  ||  ((s as any).cheatTime ?? 0)        !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['time'] = ((s as any).cheatTime ?? 0);
      // TODO-QSP: killvar 'cheatTime'
    }
    if (((s as any).random_bf_gf_cheat ?? 0)    !== 0  ||  ((s as any).random_bf_gf_cheat ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = ((s as any).random_bf_gf_cheat ?? 0);
      // TODO-QSP: killvar 'random_bf_gf_cheat'
    }
    if (((s as any).cheat_street_robbers ?? 0)    !== 0  ||  ((s as any).cheat_street_robbers ?? 0)  !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = ((s as any).cheat_street_robbers ?? 0);
      // TODO-QSP: killvar 'cheat_street_robbers'
    }
    if (((s as any).cheat_street_rapists ?? 0)    !== 0  ||  ((s as any).cheat_street_rapists ?? 0)  !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = ((s as any).cheat_street_rapists ?? 0);
      // TODO-QSP: killvar 'cheat_street_rapists'
    }
    if (((s as any).Enable_nogameover ?? 0)    !== 0  ||  ((s as any).Enable_nogameover ?? 0)    !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['gameover'] = ((s as any).Enable_nogameover ?? 0);
      // TODO-QSP: killvar 'Enable_nogameover'
    }
    if (((s as any).cheatShaveLegs ?? 0)      !== 0  ||  ((s as any).cheatShaveLegs ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_leghair'] = ((s as any).cheatShaveLegs ?? 0);
      // TODO-QSP: killvar 'cheatShaveLegs'
    }
    if (((s as any).editpornname ?? 0)        !== 0  ||  ((s as any).editpornname ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['rename_porn'] = ((s as any).editpornname ?? 0);
      // TODO-QSP: killvar 'editpornname'
    }
    if (((s as any).enfullmorrout ?? 0)      !== 0  ||  ((s as any).enfullmorrout ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['full_morning_rout'] = ((s as any).enfullmorrout ?? 0);
      // TODO-QSP: killvar 'enfullmorrout'
    }
    if (((s as any).Enable_sforma ?? 0)      !== 0  ||  ((s as any).Enable_sforma ?? 0)      !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['school_clothing'] = ((s as any).Enable_sforma ?? 0);
      // TODO-QSP: killvar 'Enable_sforma'
    }
    if (((s as any).therapist_weekly_cheat ?? 0)  !== 0  ||  ((s as any).therapist_weekly_cheat ?? 0)  !== '') {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['therapist_schedule'] = ((s as any).therapist_weekly_cheat ?? 0);
      // TODO-QSP: killvar 'therapist_weekly_cheat'
    }
    if (((s as any).addictive_cheat ?? 0)  !== 0  ||  ((s as any).addictive_cheat ?? 0)  !== ''  ||  ((s as any).cheataddictive ?? 0)  !== ''  ||  ((s as any).cheataddictive ?? 0) !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_trait_addictive'] = ((s as any).addictive_cheat ?? 0);
    }
    if (((s as any).cumeater_cheat ?? 0)  !== 0  ||  ((s as any).cumeater_cheat ?? 0)    !== ''  ||  ((s as any).cheatcumtrait ?? 0)    !== ''  ||  ((s as any).cheatcumtrait ?? 0)  !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_trait_cumeater'] = ((s as any).cumeater_cheat ?? 0);
    }
    if (((s as any).exhib_cheat ?? 0)    !== 0  ||  ((s as any).exhib_cheat ?? 0)    !== ''  ||  ((s as any).cheatexhib ?? 0)    !== ''  ||  ((s as any).cheatexhib ?? 0)    !== 0) {
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_trait_exhib'] = ((s as any).exhib_cheat ?? 0);
    }
    if (((s as any).cheatKlisma ?? 0) !== '') {
      if ((!((s as any).cheatKlisma ?? 0))) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['enema'] = 1;
      }
    }
    if (((s as any).Enable_auto_tampons ?? 0) !== '') {
      if ((!((s as any).Enable_auto_tampons ?? 0))) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 1;
      }
    }
    if (((s as any).npc_QW ?? 0)?.['A60'] !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['QW'] = ((s as any).npc_QW ?? 0)?.['A60'];
      qspCall(s, 'array', 'remove_element', 'npc_QW', 'A60');
    }
    if (((s as any).miraprost ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['prostitute'] = ((s as any).miraprost ?? 0);
      // TODO-QSP: killvar 'miraprost'
    }
    if (((s as any).mirasex ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['had_sex'] = ((s as any).mirasex ?? 0);
      // TODO-QSP: killvar 'mirasex'
    }
    if (((s as any).mirasextimes ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['Mitka_fucks'] = ((s as any).mirasextimes ?? 0);
      // TODO-QSP: killvar 'mirasextimes'
    }
    if (((s as any).mira_no ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['emb_day'] = ((s as any).daystart ?? 0) + ((s as any).mira_no ?? 0);
      // TODO-QSP: killvar 'mira_no'
    }
    if (((s as any).miraday ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['event_day'] = ((s as any).miraday ?? 0);
      // TODO-QSP: killvar 'miraday'
    }
    if (((s as any).mirahorny ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['arousal'] = ((s as any).mirahorny ?? 0);
      // TODO-QSP: killvar 'mirahorny'
    }
    if (((s as any).miralick ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['cuni_given'] = ((s as any).miralick ?? 0);
      // TODO-QSP: killvar 'miralick'
    }
    if (((s as any).mira_stay ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = 1;
      // TODO-QSP: killvar 'mira_stay'
    }
    if (((s as any).mira ?? 0)        !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = 20 - ((s as any).hour ?? 0);
      // TODO-QSP: killvar 'mira'
    }
    if (((s as any).mira_go_blok ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = ((s as any).mira_go_blok ?? 0);
      // TODO-QSP: killvar 'mira_go_blok'
    }
    if (((s as any).mira_guest ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['guest'] = 1;
      // TODO-QSP: killvar 'mira_guest'
    }
    if (((s as any).mira_guestday ?? 0)  !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['guestday'] = ((s as any).mira_guestday ?? 0);
      // TODO-QSP: killvar 'mira_guestday'
    }
    if (((s as any).miratalkday ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['talkday'] = ((s as any).miratalkday ?? 0);
      // TODO-QSP: killvar 'miratalkday'
    }
    if (((s as any).miranudetalk ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['nudetalk'] = ((s as any).miranudetalk ?? 0);
      // TODO-QSP: killvar 'miranudetalk'
    }
    if (((s as any).mirapickingtalk ?? 0)  !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['pickingtalk'] = ((s as any).mirapickingtalk ?? 0);
      // TODO-QSP: killvar 'mirapickingtalk'
    }
    if (((s as any).mirapimp ?? 0)      !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['pimp'] = ((s as any).mirapimp ?? 0);
      // TODO-QSP: killvar 'mirapimp'
    }
    if (((s as any).Miraswimday ?? 0)    !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['swimday'] = ((s as any).Miraswimday ?? 0);
      // TODO-QSP: killvar 'Miraswimday'
    }
    if (((s as any).meadow ?? 0) > 0) {
      (s as any).gad_meadow_found = 1;
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['meadow'] = ((s as any).meadow ?? 0) - 1;
    }
    if (((s as any).MiraLoc ?? 0)      !== 0) {
      qspCall(s, 'miroslava_schedule', '');
      // TODO-QSP: killvar 'MiraLoc'
    }
    if (Object.keys((s as any).mitkabuhday ?? {}).length    !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['drunk_event'] = ((s as any).mitkabuhday ?? 0);
      // TODO-QSP: killvar 'mitkabuhday'
    }
    if (Object.keys((s as any).mitkabuhmiraday ?? {}).length  !== 0) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['drunk_event'] = ((s as any).mitkabuhmiraday ?? 0);
      // TODO-QSP: killvar 'mitkabuhmiraday'
    }
    if (((s as any).mitkaday ?? 0)            !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).mitkaday ?? 0);
      // TODO-QSP: killvar 'mitkaday'
    }
    if (((s as any).kolyambaday ?? 0)          !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).kolyambaday ?? 0);
      // TODO-QSP: killvar 'kolyambaday'
    }
    if (((s as any).vasyanday ?? 0)          !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).vasyanday ?? 0);
      // TODO-QSP: killvar 'vasyanday'
    }
    if (((s as any).mitkaguysriver ?? 0)        !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['river_day'] = ((s as any).mitkaguysriver ?? 0);
      // TODO-QSP: killvar 'mitkaguysriver'
    }
    if (((s as any).mitka_first_drink ?? 0)      !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['first_drink'] = ((s as any).mitka_first_drink ?? 0);
      // TODO-QSP: killvar 'mitka_first_drink'
    }
    if (((s as any).mitkadrinkday ?? 0)        !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['drinkday'] = ((s as any).mitkadrinkday ?? 0);
      // TODO-QSP: killvar 'mitkadrinkday'
    }
    if (((s as any).gadriver_gang ?? 0)        !== 0) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['river_gang'] = ((s as any).gadriver_gang ?? 0);
      // TODO-QSP: killvar 'gadriver_gang'
    }
    if (((s as any).tpKnown ?? 0)?.['gadforest'] !== 0) {
      ((s as any).tpKnown = (s as any).tpKnown ?? {})['gad_forest'] = ((s as any).tpKnown ?? 0)?.['gadforest'];
      qspCall(s, 'array', 'remove_element', 'tpKnown', 'gadforest');
    }
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
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = ((s as any).HotelRoom ?? 0)?.['pav_hotel'];
      qspCall(s, 'array', 'remove_element', 'HotelRoom', 'pav_hotel');
    }
    if (((s as any).hotelRoomDays ?? 0)?.['pav_hotel'] !== 0) {
      ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})['pav'] = ((s as any).hotelRoomDays ?? 0)?.['pav_hotel'];
      qspCall(s, 'array', 'remove_element', 'hotelRoomDays', 'pav_hotel');
    }
    if (((s as any).HotelRoom ?? 0)?.['city_hotel'] !== 0) {
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city'] = ((s as any).HotelRoom ?? 0)?.['city_hotel'];
      qspCall(s, 'array', 'remove_element', 'HotelRoom', 'city_hotel');
    }
    if (((s as any).hotelRoomDays ?? 0)?.['city_hotel'] !== 0) {
      ((s as any).hotelRoomDays = (s as any).hotelRoomDays ?? {})['city'] = ((s as any).hotelRoomDays ?? 0)?.['city_hotel'];
      qspCall(s, 'array', 'remove_element', 'HotelRoom', 'city_hotel');
    }
    if (((s as any).hotel ?? 0) !== '') {
      // TODO-QSP: killvar 'hotel'
    }
    if (((s as any).therapistQW ?? 0)?.['met'] === 0  &&  ((s as any).therapistday ?? 0) !== 0) {
      ((s as any).therapistQW = (s as any).therapistQW ?? {})['met'] = 1;
    }
    if (((s as any).player_avatar ?? 0) === 1) {
      ((s as any).face_style = (s as any).face_style ?? {})['type'] = 1;
      ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = 'images/avatar.jpg';
    }
    if (((s as any).avatar_hair ?? 0) === 1) {
      ((s as any).face_style = (s as any).face_style ?? {})['avatar_hair'] = ((s as any).av_hair ?? 0);
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90301) {
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_cyan_taken'])   > ((s as any).experimentQW ?? 0)?.['pill_cyan_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_cyan_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_cyan_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_red_taken'])    > ((s as any).experimentQW ?? 0)?.['pill_red_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_red_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_red_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_blue_taken'])   > ((s as any).experimentQW ?? 0)?.['pill_blue_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_blue_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_blue_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_yellow_taken']) > ((s as any).experimentQW ?? 0)?.['pill_yellow_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_yellow_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_yellow_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_orange_taken']) > ((s as any).experimentQW ?? 0)?.['pill_orange_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_orange_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_orange_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_violet_taken']) > ((s as any).experimentQW ?? 0)?.['pill_violet_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_violet_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_violet_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_brown_taken'])  > ((s as any).experimentQW ?? 0)?.['pill_brown_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_brown_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_brown_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_purple_taken']) > ((s as any).experimentQW ?? 0)?.['pill_purple_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_purple_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_purple_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_green_taken'])  > ((s as any).experimentQW ?? 0)?.['pill_green_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_green_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_green_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_gray_taken'])   > ((s as any).experimentQW ?? 0)?.['pill_gray_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_gray_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_gray_taken']);
    }
    if (parseFloat(((s as any).experimentQW ?? 0)?.['pill_pink_taken'])   > ((s as any).experimentQW ?? 0)?.['pill_pink_taken']) {
      ((s as any).experimentQW = (s as any).experimentQW ?? {})['pill_pink_taken'] = parseFloat(((s as any).experimentQW ?? 0)?.['pill_pink_taken']);
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90302) {
    if (Object.keys((s as any).npc_pref_values ?? {}).length > 0) {
      (s as any).su_i = 1;
      // TODO-QSP: :su_pref_values_update_loop
      if (Object.keys((s as any).npc_pref_traits ?? {}).length > 0) {
        qspCall(s, 'npc_set_preference', 'rebuild_preferences', 'A' + ((s as any).su_i ?? 0) + '');
      }
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      if (((s as any).su_i ?? 0) < 257) {
        // TODO-QSP: jump 'su_pref_values_update_loop'
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['chaffing_cream'] > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['chafing_cream'] = ((s as any).mc_inventory ?? 0)?.['chaffing_cream'];
      qspCall(s, 'array', 'remove_element', 'mc_inventory', 'chaffing_cream');
    }
    ((s as any).npc_notes = (s as any).npc_notes ?? {})['A26'] = 'Anatoly Tsarev is the school\'s math teacher. He\'s a stern teacher, who always demands the best out of his students. His daughter Lera is in your class. He\'s married to Vera, who works at the train station as a ticket saleswoman and as a cleaner in the garment factory. There are rumors that since Lesco came to live with them, his marriage has been on the rocks.';
    if (((s as any).lib_book_loaned ?? 0) === 'fantasy') {
      (s as any).lib_book_loaned = 'a fantasy novel';
    }
    if (((s as any).blackmailQW ?? 0)?.['day'] !== 0) {
      if (((String(((s as any).blackmailQW ?? 0)?.['init_flashloc']).indexOf(String('zaprF'))) + 1) > 0) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc'] = (String(((s as any).blackmailQW ?? 0)?.['init_flashloc']).split('zaprF').join('fuelstation'));
      }
      (s as any).su_i = 0;
      // TODO-QSP: :zaprFreplaceloop
      if (((String(qspUntranslated(s, "blackmailQW[\u00000\u0000]", { location: "saveupdater" })).indexOf(String('zaprF'))) + 1) > 0) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_location_' + String(((s as any).su_i ?? 0))] = (String(((s as any).blackmailQW ?? 0)?.['selfie_location_' + String(((s as any).su_i ?? 0))]).split('zaprF').join('fuelstation'));
      }
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      if (((s as any).su_i ?? 0) < 10) {
        // TODO-QSP: jump 'zaprFreplaceloop'
      }
    }
    if (((s as any).f_book ?? 0)    !== 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['fantasy_books'] = ((s as any).f_book ?? 0);
      // TODO-QSP: killvar 'f_book'
    }
    if (((s as any).sf_book ?? 0)    !== 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['scifi_books'] = ((s as any).sf_book ?? 0);
      // TODO-QSP: killvar 'sf_book'
    }
    if (((s as any).w_book ?? 0)    !== 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['romance_books'] = ((s as any).w_book ?? 0);
      // TODO-QSP: killvar 'w_book'
    }
    if (((s as any).fantasybook ?? 0)  !== 0) {
      ((s as any).BookVars = (s as any).BookVars ?? {})['fantasy_pages'] = ((s as any).fantasybook ?? 0) * 100;
      // TODO-QSP: killvar 'fantasybook'
    }
    if (((s as any).womanbook ?? 0)  !== 0) {
      ((s as any).BookVars = (s as any).BookVars ?? {})['romance_pages'] = ((s as any).womanbook ?? 0) * 100;
      // TODO-QSP: killvar 'womanbook'
    }
    if (((s as any).artembook ?? 0)  !== 0) {
      ((s as any).BookVars = (s as any).BookVars ?? {})['artem_pages'] = ((s as any).artembook ?? 0) * 100;
      // TODO-QSP: killvar 'artembook'
    }
    if (((s as any).pointKik ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['pcs_points'] = ((s as any).pointKik ?? 0);
      // TODO-QSP: killvar 'pointKik'
    }
    if (((s as any).pointKikV ?? 0)  !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_points'] = ((s as any).pointKikV ?? 0);
      // TODO-QSP: killvar 'pointKikV'
    }
    if (((s as any).formula ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['max_rounds'] = ((s as any).formula ?? 0);
      // TODO-QSP: killvar 'formula'
    }
    if (((s as any).round ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['round'] = ((s as any).round ?? 0);
      // TODO-QSP: killvar 'round'
    }
    if (((s as any).minround ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['time'] = ((s as any).minround ?? 0);
      // TODO-QSP: killvar 'minround'
    }
    if (((s as any).strenV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_stren'] = ((s as any).strenV ?? 0);
      // TODO-QSP: killvar 'strenV'
    }
    if (((s as any).speedV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_speed'] = ((s as any).speedV ?? 0);
      // TODO-QSP: killvar 'speedV'
    }
    if (((s as any).agilV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_agil'] = ((s as any).agilV ?? 0);
      // TODO-QSP: killvar 'agilV'
    }
    if (((s as any).reactV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_react'] = ((s as any).reactV ?? 0);
      // TODO-QSP: killvar 'reactV'
    }
    if (((s as any).vitalV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_vital'] = ((s as any).vitalV ?? 0);
      // TODO-QSP: killvar 'vitalV'
    }
    if (((s as any).intelV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_intel'] = ((s as any).intelV ?? 0);
      // TODO-QSP: killvar 'intelV'
    }
    if (((s as any).willV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_will'] = ((s as any).willV ?? 0);
      // TODO-QSP: killvar 'willV'
    }
    if (((s as any).JabV ?? 0)      !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_jab'] = ((s as any).JabV ?? 0);
      // TODO-QSP: killvar 'JabV'
    }
    if (((s as any).PunchV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_punch'] = ((s as any).PunchV ?? 0);
      // TODO-QSP: killvar 'PunchV'
    }
    if (((s as any).KikV ?? 0)      !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_kick'] = ((s as any).KikV ?? 0);
      // TODO-QSP: killvar 'KikV'
    }
    if (((s as any).KikDefV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_def'] = ((s as any).KikDefV ?? 0);
      // TODO-QSP: killvar 'KikDefV'
    }
    if (((s as any).healthV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_health'] = ((s as any).healthV ?? 0);
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_max_health'] = (((s as any).temp_kickboxVars ?? {})?.['npc_vital'] ?? 0) * 10 + (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] ?? 0) * 5;
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_stam'] = (30 * (2 * (((s as any).temp_kickboxVars ?? {})?.['npc_vital'] ?? 0) + (((s as any).temp_kickboxVars ?? {})?.['npc_agil'] ?? 0) + (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] ?? 0)) + 1000) / 13;
    }
    if (((s as any).init ?? 0)      !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['pcs_init'] = ((s as any).init ?? 0);
      // TODO-QSP: killvar 'init'
    }
    if (((s as any).initKoef ?? 0)    !== 0) {
      // TODO-QSP: killvar 'initKoef'
    }
    if (((s as any).initi ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['pcs_init_true'] = ((s as any).initi ?? 0);
      // TODO-QSP: killvar 'initi'
    }
    if (((s as any).initV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_init'] = ((s as any).initV ?? 0);
      // TODO-QSP: killvar 'initV'
    }
    if (((s as any).initKoefV ?? 0)  !== 0) {
      // TODO-QSP: killvar 'initKoefV'
    }
    if (((s as any).initiV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_init_true'] = ((s as any).initiV ?? 0);
      // TODO-QSP: killvar 'initiV'
    }
    if (((s as any).ionce ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['set_init'] = ((s as any).ionce ?? 0);
      // TODO-QSP: killvar 'ionce'
    }
    if (((s as any).damkoef ?? 0)    !== 0) {
      // TODO-QSP: killvar 'damkoef'
    }
    if (((s as any).hod ?? 0)      !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['active_init'] = ((s as any).hod ?? 0);
      // TODO-QSP: killvar 'home_day'
    }
    if (((s as any).hodtime ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['pcs_inittime'] = ((s as any).hodtime ?? 0);
      // TODO-QSP: killvar 'hodtime'
    }
    if (((s as any).hodtimeV ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['npc_inittime'] = ((s as any).hodtimeV ?? 0);
      // TODO-QSP: killvar 'hodtimeV'
    }
    if (((s as any).sparing ?? 0)    !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['fight_type'] = 0;
      // TODO-QSP: killvar 'sparing'
    }
    if (((s as any).kickbox ?? 0)?.['amateur'] !== 0) {
      ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['fight_type'] = 1;
      qspCall(s, 'array', 'remove_element', 'kickbox', 'amateur');
    }
    if (((s as any).KikWinPro ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proWin'] = ((s as any).KikWinPro ?? 0);
      // TODO-QSP: killvar 'KikWinPro'
    }
    if (((s as any).KikWinProKO ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proWinKO'] = ((s as any).KikWinProKO ?? 0);
      // TODO-QSP: killvar 'KikWinProKO'
    }
    if (((s as any).KikLossPro ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proLoss'] = ((s as any).KikLossPro ?? 0);
      // TODO-QSP: killvar 'KikLossPro'
    }
    if (((s as any).KikLossProKO ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proLossKO'] = ((s as any).KikLossProKO ?? 0);
      // TODO-QSP: killvar 'KikLossProKO'
    }
    if (((s as any).KikDrawPro ?? 0)  !== 0) {
      ((s as any).kickbox = (s as any).kickbox ?? {})['proDraw'] = ((s as any).KikDrawPro ?? 0);
      // TODO-QSP: killvar 'KikDrawPro'
    }
    if (((s as any).First_time_3some_with_Lazar ?? 0)      !== 0) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['lazar_threesome'] = ((s as any).First_time_3some_with_Lazar ?? 0);
      // TODO-QSP: killvar 'First_time_3some_with_Lazar'
    }
    if (((s as any).first_time_outside_in_cold_weather ?? 0)  !== 0) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['cold_weather'] = ((s as any).first_time_outside_in_cold_weather ?? 0);
      // TODO-QSP: killvar 'first_time_outside_in_cold_weather'
    }
    if (((s as any).first_time_doing_basketball ?? 0)      !== 0) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['basketball'] = ((s as any).first_time_doing_basketball ?? 0);
      // TODO-QSP: killvar 'first_time_doing_basketball'
    }
    if (((s as any).first_time_spring_football_match ?? 0)    !== 0) {
      ((s as any).cheerleadingQW = (s as any).cheerleadingQW ?? {})['spring_match'] = ((s as any).first_time_spring_football_match ?? 0);
      // TODO-QSP: killvar 'first_time_spring_football_match'
    }
    if (((s as any).blackmailQW ?? 0)?.['stage'] === 10) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = 1;
    }
    (s as any).appearance_update_932 = 1;
    (s as any).su_i = 0;
    // TODO-QSP: :appearance_update_loop
    if (((s as any).npc_apprnc ?? 0)?.[String((s as any).su_i ?? 0)] > 0) {
      ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})[String((s as any).su_i ?? 0)] = 3 * ((s as any).npc_apprnc ?? 0)?.[String((s as any).su_i ?? 0)];
      if (((s as any).npc_apprnc ?? 0)?.[String((s as any).su_i ?? 0)] > 190) {
        ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})[String((s as any).su_i ?? 0)] = 190;
      }
    }
    (s as any).su_i = ((s as any).su_i ?? 0) + (1);
    if (((s as any).su_i ?? 0) < Object.keys((s as any).npc_apprnc ?? {}).length) {
      // TODO-QSP: jump 'appearance_update_loop'
    }
    // TODO-QSP: copyarr 'npc_hotcat', 'hotcat_rating'
    if (((s as any).hotcat ?? 0)  !== 0) {
      (s as any).pcs_hotcat = ((s as any).hotcat ?? 0);
      // TODO-QSP: killvar 'hotcat'
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
      // TODO-QSP: :daystart_fix_loops
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
      if (((s as any).su_ds_i ?? 0) < 99) {
        // TODO-QSP: jump 'daystart_fix_loops'
      }
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90303) {
    if (((s as any).pcs_traits ?? 0)?.['easy_orgams'] !== 0) {
      if (((s as any).pcs_traits ?? 0)?.['easy_orgasms'] < ((s as any).pcs_traits ?? 0)?.['easy_orgams']) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['easy_orgasms'] = ((s as any).pcs_traits ?? 0)?.['easy_orgams'];
      }
      qspCall(s, 'array', 'remove_element', 'pcs_traits', 'easy_orgams');
    }
    if (((s as any).soniafall ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['soniafall'] = ((s as any).soniafall ?? 0);
      // TODO-QSP: killvar 'soniafall'
    }
    if (((s as any).soniaPS ?? 0)        !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['slut'] = ((s as any).soniaPS ?? 0);
      // TODO-QSP: killvar 'soniaPS'
    }
    if (((s as any).soniafallDay ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['fallDay'] = ((s as any).soniafallDay ?? 0);
      // TODO-QSP: killvar 'soniafallDay'
    }
    if (((s as any).soniaPSdays ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['slutdays'] = ((s as any).soniaPSdays ?? 0);
      // TODO-QSP: killvar 'soniaPSdays'
    }
    if (((s as any).soniahelp ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['help'] = ((s as any).soniahelp ?? 0);
      // TODO-QSP: killvar 'soniahelp'
    }
    if (((s as any).soniaencourage ?? 0)    !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['encourage'] = ((s as any).soniaencourage ?? 0);
      // TODO-QSP: killvar 'soniaencourage'
    }
    if (((s as any).soniasex ?? 0)        !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['sex'] = ((s as any).soniasex ?? 0);
      // TODO-QSP: killvar 'soniasex'
    }
    if (((s as any).soniasextime ?? 0)      !== 0) {
      ((s as any).soniaQW = (s as any).soniaQW ?? {})['sextime'] = ((s as any).soniasextime ?? 0);
      // TODO-QSP: killvar 'soniasextime'
    }
    if (((s as any).ivankosup_count ?? 0)    !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['soup'] = ((s as any).ivankosup_count ?? 0);
      // TODO-QSP: killvar 'ivankosup_count'
    }
    if (((s as any).ivankowater_count ?? 0)  !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['water'] = ((s as any).ivankowater_count ?? 0);
      // TODO-QSP: killvar 'ivankowater_count'
    }
    if (((s as any).ivankolefto_count ?? 0)  !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['leftovers'] = ((s as any).ivankolefto_count ?? 0);
      // TODO-QSP: killvar 'ivankolefto_count'
    }
    if (((s as any).ivankosanw_count ?? 0)    !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['sandwich'] = ((s as any).ivankosanw_count ?? 0);
      // TODO-QSP: killvar 'ivankosanw_count'
    }
    if (((s as any).ivankofood_day ?? 0)    !== 0) {
      ((s as any).ivanko = (s as any).ivanko ?? {})['food_day'] = ((s as any).ivankofood_day ?? 0);
      // TODO-QSP: killvar 'ivankofood_day'
    }
    if (((s as any).ivanko_lefto ?? 0)    !== '') {
      ((s as any).ivanko = (s as any).ivanko ?? {})['leftover_txt'] = ((s as any).ivanko_lefto ?? 0);
      // TODO-QSP: killvar 'ivanko_lefto'
    }
    if (((s as any).ivanko_sup ?? 0)      !== '') {
      ((s as any).ivanko = (s as any).ivanko ?? {})['soup_txt'] = ((s as any).ivanko_sup ?? 0);
      // TODO-QSP: killvar 'ivanko_sup'
    }
    if (((s as any).ivanko_water ?? 0)    !== '') {
      ((s as any).ivanko = (s as any).ivanko ?? {})['water_txt'] = ((s as any).ivanko_water ?? 0);
      // TODO-QSP: killvar 'ivanko_water'
    }
    if (((s as any).ivanko_sanw ?? 0)      !== '') {
      ((s as any).ivanko = (s as any).ivanko ?? {})['sandwich_txt'] = ((s as any).ivanko_sanw ?? 0);
      // TODO-QSP: killvar 'ivanko_sanw'
    }
    qspCall(s, 'cheatmenu_din', '');
    (s as any).temp_total_mass = (((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt'] ?? 0);
    if (((s as any).pcs_mass ?? 0)?.['body_message'] < ((s as any).temp_total_mass ?? 0) - 10) {
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body_message'] = ((s as any).temp_total_mass ?? 0);
    }
    if (((s as any).nminut ?? 0)  !== 0) {
      // TODO-QSP: killvar 'nminut'
    }
    if (((s as any).nhour ?? 0)  !== 0) {
      // TODO-QSP: killvar 'nhour'
    }
    if (Object.keys((s as any).bodimgsets ?? {}).length / 10 > 4) {
      (s as any).su_i = 4;
      (s as any).su_j = 0;
      // TODO-QSP: :su_bodimgset_move_loop
      if (((s as any).su_j ?? 0) < 9) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).su_i ?? 0)-4) + '_desc_' + String(((s as any).su_j ?? 0))] = qspFunc(s, 'body_structure', 'body_desc_from_class', ((s as any).su_j ?? 0));
        if ((((s as any).su_j ?? 0) >= 1  &&  ((s as any).su_j ?? 0) <= 5)  ||  (!(0 as any))) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).su_i ?? 0)-4) + '_img_' + String(((s as any).su_j ?? 0))] = '' + ((s as any).su_j ?? 0) + '';
        }
        (s as any).su_j = ((s as any).su_j ?? 0) + (1);
      } else {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['fix_biset_' + String(((s as any).su_i ?? 0)-4) + '_folder'] = ((s as any).bodimgsets ?? 0)?.[10 * ((s as any).su_i ?? 0) + ((s as any).su_j ?? 0)];
        (s as any).su_j = 0;
        (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      }
      if (10 * ((s as any).su_i ?? 0) + ((s as any).su_j ?? 0) < Object.keys((s as any).bodimgsets ?? {}).length) {
        // TODO-QSP: jump 'su_bodimgset_move_loop'
      }
    }
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
    }
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_other'] = 0;
    if (((s as any).lip ?? 0)      !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['lip'] = ((s as any).lip ?? 0);
      // TODO-QSP: killvar 'lip'
    }
    if (((s as any).pcs_throat ?? 0)  !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['throat'] = ((s as any).pcs_throat ?? 0);
      (s as any).pcs_throat = '';
    }
    if (((s as any).skin ?? 0)    !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['skin'] = ((s as any).skin ?? 0);
      // TODO-QSP: killvar 'skin'
    }
    if (((s as any).glaza ?? 0)    !== '') {
      ((s as any).pc_descFull = (s as any).pc_descFull ?? {})['eyes'] = ((s as any).glaza ?? 0);
      // TODO-QSP: killvar 'glaza'
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
    }
    (s as any).su_i = 0;
    // TODO-QSP: :piercing_owned_update_loop
    // TODO-QSP: dynamic "
    if (((s as any)[('pirsC' + String((s as any).su_i ?? 0)) + '_owned'] ?? 0) === 1) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['ears_' + String(((s as any).su_i ?? 0)) + '_owned'] = 1;
      // TODO-QSP: killvar 'pirsC<<su_i>>_owned'
    }
    if (((s as any)[('pirsD' + String((s as any).su_i ?? 0)) + '_owned'] ?? 0) === 1) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['nose_' + String(((s as any).su_i ?? 0)) + '_owned'] = 1;
      // TODO-QSP: killvar 'pirsD<<su_i>>_owned'
    }
    if (((s as any)[('pirsE' + String((s as any).su_i ?? 0)) + '_owned'] ?? 0) === 1) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['brow_' + String(((s as any).su_i ?? 0)) + '_owned'] = 1;
      // TODO-QSP: killvar 'pirsE<<su_i>>_owned'
    }
    if (((s as any)[('pirsB' + String((s as any).su_i ?? 0)) + '_owned'] ?? 0) === 1) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['lip_' + String(((s as any).su_i ?? 0)) + '_owned'] = 1;
      // TODO-QSP: killvar 'pirsB<<su_i>>_owned'
    }
    if (((s as any)[('pirsA' + String((s as any).su_i ?? 0)) + '_owned'] ?? 0) === 1) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['tongue_' + String(((s as any).su_i ?? 0)) + '_owned'] = 1;
      // TODO-QSP: killvar 'pirsA<<su_i>>_owned'
    }
    if (((s as any)[('pirsN' + String((s as any).su_i ?? 0)) + '_owned'] ?? 0) === 1) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['navel_' + String(((s as any).su_i ?? 0)) + '_owned'] = 1;
      // TODO-QSP: killvar 'pirsN<<su_i>>_owned'
    }
    if (((s as any)[('pirsF' + String((s as any).su_i ?? 0)) + '_owned'] ?? 0) === 1) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['nipples_' + String(((s as any).su_i ?? 0)) + '_owned'] = 1;
      // TODO-QSP: killvar 'pirsF<<su_i>>_owned'
    }
    if (((s as any)[('pirsG' + String((s as any).su_i ?? 0)) + '_owned'] ?? 0) === 1) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['pussy_' + String(((s as any).su_i ?? 0)) + '_owned'] = 1;
      // TODO-QSP: killvar 'pirsG<<su_i>>_owned'
    }
    // TODO-QSP: "
    (s as any).su_i = ((s as any).su_i ?? 0) + (1);
    if (((s as any).su_i ?? 0) < 24) {
      // TODO-QSP: jump 'piercing_owned_update_loop'
    }
    if (((s as any).tattCount ?? 0)    > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).tattCount ?? 0);
      // TODO-QSP: killvar 'tattCount'
    }
    if (((s as any).tatarm ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['arm'] = ((s as any).tatarm ?? 0);
      // TODO-QSP: killvar 'tatarm'
    }
    if (((s as any).tatass ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['ass'] = ((s as any).tatass ?? 0);
      // TODO-QSP: killvar 'tatass'
    }
    if (((s as any).tatback ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['back'] = ((s as any).tatback ?? 0);
      // TODO-QSP: killvar 'tatback'
    }
    if (((s as any).tatblly ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['belly'] = ((s as any).tatblly ?? 0);
      // TODO-QSP: killvar 'tatblly'
    }
    if (((s as any).tatbrst ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['breast'] = ((s as any).tatbrst ?? 0);
      // TODO-QSP: killvar 'tatbrst'
    }
    if (((s as any).tatchst ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['chest'] = ((s as any).tatchst ?? 0);
      // TODO-QSP: killvar 'tatchst'
    }
    if (((s as any).tatfce ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['face'] = ((s as any).tatfce ?? 0);
      // TODO-QSP: killvar 'tatfce'
    }
    if (((s as any).tatankle ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['ankle'] = ((s as any).tatankle ?? 0);
      // TODO-QSP: killvar 'tatankle'
    }
    if (((s as any).tatleg ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['leg'] = ((s as any).tatleg ?? 0);
      // TODO-QSP: killvar 'tatleg'
    }
    if (((s as any).tatlip ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['lip'] = ((s as any).tatlip ?? 0);
      // TODO-QSP: killvar 'tatlip'
    }
    if (((s as any).tatneck ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['neck'] = ((s as any).tatneck ?? 0);
      // TODO-QSP: killvar 'tatneck'
    }
    if (((s as any).tatvag ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['pussy'] = ((s as any).tatvag ?? 0);
      // TODO-QSP: killvar 'tatvag'
    }
    if (((s as any).tatlech ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['shoulder'] = ((s as any).tatlech ?? 0);
      // TODO-QSP: killvar 'tatlech'
    }
    if (((s as any).tatside ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['side'] = ((s as any).tatside ?? 0);
      // TODO-QSP: killvar 'tatside'
    }
    if (((s as any).tatupb ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['tramp'] = ((s as any).tatupb ?? 0);
      // TODO-QSP: killvar 'tatupb'
    }
    if (((s as any).tatunder ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['under'] = ((s as any).tatunder ?? 0);
      // TODO-QSP: killvar 'tatunder'
    }
    if (((s as any).tatwrist ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['wrist'] = ((s as any).tatwrist ?? 0);
      // TODO-QSP: killvar 'tatwrist'
    }
    if (((s as any).tathand ?? 0)      > 0) {
      ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['hand'] = ((s as any).tathand ?? 0);
      // TODO-QSP: killvar 'tathand'
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
      // TODO-QSP: killvar 'sisterpirsadaytalk'
    }
    if (((s as any).brothersawpirsF ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['piercing_nipples'] = 1;
      // TODO-QSP: killvar 'brothersawpirsF'
    }
    if (((s as any).pirsadaytalk ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_talkday'] = ((s as any).pirsadaytalk ?? 0);
      // TODO-QSP: killvar 'pirsadaytalk'
    }
    if (((s as any).pirsAfather ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_tongue'] = 1;
      // TODO-QSP: killvar 'pirsAfather'
    }
    if (((s as any).pirsBfather ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_lip'] = 1;
      // TODO-QSP: killvar 'pirsBfather'
    }
    if (((s as any).pirsCfather ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_ears'] = 1;
      // TODO-QSP: killvar 'pirsCfather'
    }
    if (((s as any).pirsDfather ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_nose'] = 1;
      // TODO-QSP: killvar 'pirsDfather'
    }
    if (((s as any).pirsEfather ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_brow'] = 1;
      // TODO-QSP: killvar 'pirsEfather'
    }
    if (((s as any).PutsawpirsF ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_nipples'] = 1;
      // TODO-QSP: killvar 'PutsawpirsF'
    }
    if (((s as any).PutsawpirsG ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['piercing_pussy'] = 1;
      // TODO-QSP: killvar 'PutsawpirsG'
    }
    if (((s as any).fatherTatLip ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['tattoo_lip'] = 1;
      // TODO-QSP: killvar 'fatherTatLip'
      // TODO-QSP: killvar 'textFatherTatLip'
    }
    if (((s as any).Putsawtatvag ?? 0)      > 0) {
      ((s as any).stepfatherQW = (s as any).stepfatherQW ?? {})['tattoo_pussy'] = 1;
      // TODO-QSP: killvar 'Putsawtatvag'
    }
    if (((s as any).motherpirsadaytalk ?? 0)  > 0) {
      ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_talkday'] = ((s as any).motherpirsadaytalk ?? 0);
      // TODO-QSP: killvar 'motherpirsadaytalk'
    }
    if (((s as any).pirsAmother ?? 0)      > 0) {
      ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_tongue'] = 1;
      // TODO-QSP: killvar 'pirsAmother'
    }
    if (((s as any).pirsBmother ?? 0)      > 0) {
      ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_lip'] = 1;
      // TODO-QSP: killvar 'pirsBmother'
    }
    if (((s as any).pirsCmother ?? 0)      > 0) {
      ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_ears'] = 1;
      // TODO-QSP: killvar 'pirsCmother'
    }
    if (((s as any).pirsDmother ?? 0)      > 0) {
      ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_nose'] = 1;
      // TODO-QSP: killvar 'pirsDmother'
    }
    if (((s as any).pirsEmother ?? 0)      > 0) {
      ((s as any).motherQW = (s as any).motherQW ?? {})['piercing_brow'] = 1;
      // TODO-QSP: killvar 'pirsEmother'
    }
    if (((s as any).KotovKnowPirsA ?? 0)    > 0) {
      ((s as any).VitekQW = (s as any).VitekQW ?? {})['piercing_tongue'] = 1;
      // TODO-QSP: killvar 'KotovKnowPirsA'
    }
    if (((s as any).IgorBlock ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['Block'] = ((s as any).IgorBlock ?? 0);
      // TODO-QSP: killvar 'IgorBlock'
    }
    if (((s as any).IgorDominaQW ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['Domina'] = ((s as any).IgorDominaQW ?? 0);
      // TODO-QSP: killvar 'IgorDominaQW'
    }
    if (((s as any).IgorHorny ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['Horny'] = ((s as any).IgorHorny ?? 0);
      // TODO-QSP: killvar 'IgorHorny'
    }
    if (((s as any).IgorLove ?? 0)        !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['Love'] = ((s as any).IgorLove ?? 0);
      // TODO-QSP: killvar 'IgorLove'
    }
    if (((s as any).IgorLoverQW ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['Lover'] = ((s as any).IgorLoverQW ?? 0);
      // TODO-QSP: killvar 'IgorLoverQW'
    }
    if (((s as any).igor_with ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['with'] = ((s as any).igor_with ?? 0);
      // TODO-QSP: killvar 'igor_with'
    }
    if (((s as any).Igorsex ?? 0)        !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['sex'] = ((s as any).Igorsex ?? 0);
      // TODO-QSP: killvar 'Igorsex'
    }
    if (((s as any).igor_DimaNos ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['DimaNos'] = ((s as any).igor_DimaNos ?? 0);
      // TODO-QSP: killvar 'igor_DimaNos'
    }
    if (((s as any).igor_DimaNos_day ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['DimaNos_day'] = ((s as any).igor_DimaNos_day ?? 0);
      // TODO-QSP: killvar 'igor_DimaNos_day'
    }
    if (((s as any).igor_bi_curious ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['bi_curious'] = ((s as any).igor_bi_curious ?? 0);
      // TODO-QSP: killvar 'igor_bi_curious'
    }
    if (((s as any).igor_blackmail ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['blackmail'] = ((s as any).igor_blackmail ?? 0);
      // TODO-QSP: killvar 'igor_blackmail'
    }
    if (((s as any).igor_eqwtday ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['eqwtday'] = ((s as any).igor_eqwtday ?? 0);
      // TODO-QSP: killvar 'igor_eqwtday'
    }
    if (((s as any).igor_history ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['history'] = ((s as any).igor_history ?? 0);
      // TODO-QSP: killvar 'igor_history'
    }
    if (((s as any).igor_htday ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['htday'] = ((s as any).igor_htday ?? 0);
      // TODO-QSP: killvar 'igor_htday'
    }
    if (((s as any).igor_kdprogulka ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['kdwalk'] = ((s as any).igor_kdprogulka ?? 0);
      // TODO-QSP: killvar 'igor_kdprogulka'
    }
    if (((s as any).igor_kdsexday ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['kdsexday'] = ((s as any).igor_kdsexday ?? 0);
      // TODO-QSP: killvar 'igor_kdsexday'
    }
    if (((s as any).igor_krossdress ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['crossdress'] = ((s as any).igor_krossdress ?? 0);
      // TODO-QSP: killvar 'igor_krossdress'
    }
    if (((s as any).igor_krossdresssex ?? 0)  !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['crossdressSex'] = ((s as any).igor_krossdresssex ?? 0);
      // TODO-QSP: killvar 'igor_krossdresssex'
    }
    if (((s as any).igor_likethis ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['likethis'] = ((s as any).igor_likethis ?? 0);
      // TODO-QSP: killvar 'igor_likethis'
    }
    if (((s as any).igor_listen ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['listen'] = ((s as any).igor_listen ?? 0);
      // TODO-QSP: killvar 'igor_listen'
    }
    if (((s as any).igor_napoit ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['napoit'] = ((s as any).igor_napoit ?? 0);
      // TODO-QSP: killvar 'igor_napoit'
    }
    if (((s as any).igor_net ?? 0)        !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['net'] = ((s as any).igor_net ?? 0);
      // TODO-QSP: killvar 'igor_net'
    }
    if (((s as any).igor_nomore ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['nomore'] = ((s as any).igor_nomore ?? 0);
      // TODO-QSP: killvar 'igor_nomore'
    }
    if (((s as any).igor_progulkaday ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['walkday'] = ((s as any).igor_progulkaday ?? 0);
      // TODO-QSP: killvar 'igor_progulkaday'
    }
    if (((s as any).igor_qwday ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['qwday'] = ((s as any).igor_qwday ?? 0);
      // TODO-QSP: killvar 'igor_qwday'
    }
    if (((s as any).igor_sexstrapon ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['sexstrapon'] = ((s as any).igor_sexstrapon ?? 0);
      // TODO-QSP: killvar 'igor_sexstrapon'
    }
    if (((s as any).igor_strapday ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['strapday'] = ((s as any).igor_strapday ?? 0);
      // TODO-QSP: killvar 'igor_strapday'
    }
    if (((s as any).igor_with ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['with'] = ((s as any).igor_with ?? 0);
      // TODO-QSP: killvar 'igor_with'
    }
    if (((s as any).igorevent1 ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['event1'] = ((s as any).igorevent1 ?? 0);
      // TODO-QSP: killvar 'igorevent1'
    }
    if (((s as any).igorkuni ?? 0)        !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['kuni'] = ((s as any).igorkuni ?? 0);
      // TODO-QSP: killvar 'igorkuni'
    }
    if (((s as any).igorstrap ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['strap'] = ((s as any).igorstrap ?? 0);
      // TODO-QSP: killvar 'igorstrap'
    }
    if (((s as any).igorsub ?? 0)        !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['sub'] = ((s as any).igorsub ?? 0);
      // TODO-QSP: killvar 'igorsub'
    }
    if (((s as any).met_IgorMother ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['met_mother'] = ((s as any).met_IgorMother ?? 0);
      // TODO-QSP: killvar 'met_IgorMother'
    }
    if (((s as any).sis_meet ?? 0)        !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['sis_meet'] = ((s as any).sis_meet ?? 0);
      // TODO-QSP: killvar 'sis_meet'
    }
    if (((s as any).met_IgorDad ?? 0)      !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['met_dad'] = ((s as any).met_IgorDad ?? 0);
      // TODO-QSP: killvar 'met_IgorDad'
    }
    if (((s as any).igorkruglovday ?? 0)    !== 0) {
      ((s as any).IgorQW = (s as any).IgorQW ?? {})['daystart'] = ((s as any).igorkruglovday ?? 0);
      // TODO-QSP: killvar 'igorkruglovday'
    }
    if (((s as any).igor_tday ?? 0)      !== 0) {
      // TODO-QSP: killvar 'igor_tday'
    }
    if (((s as any).igor_qweday ?? 0)      !== 0) {
      // TODO-QSP: killvar 'igor_qweday'
    }
    if (Object.keys((s as any).npc_pic ?? {}).length > 0) {
      // TODO-QSP: copyarr '$npc_icon', '$npc_pic'
      (s as any).su_i = 0;
      // TODO-QSP: :icon_to_pic_loop
      // TODO-QSP: $npc_pic[su_i] = 'images/characters/shared/headshots_generic/' + mid($npc_pic[su_i], 8, len($npc_pic...
      // TODO-QSP: $npc_icon[su_i] = 'images/system/phone/icons/' + $npc_icon[su_i]
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      if (((s as any).su_i ?? 0) < Object.keys((s as any).npc_pic ?? {}).length) {
        // TODO-QSP: jump 'icon_to_pic_loop'
      }
    }
    (s as any).su_i = 1;
    (s as any).su_max_i = 190;
    // TODO-QSP: :npc_selfie_update_loop
    if (((s as any).npc_selfie ?? 0)['A' + ((s as any).su_i ?? 0)] !== '') {
      (s as any).su_temp_str = qspUntranslated(s, "replace(npc_selfie['A<<su_i>>'], ' & gt 'phone_selfies', 'listretrieve2', )", { location: "saveupdater" });
      ((s as any).npc_selfie = (s as any).npc_selfie ?? {})['A' + String(((s as any).su_i ?? 0))] = qspUntranslated(s, "replace(su_temp_str, 'numnpc = ', ' gt 'phone_selfies', 'listretrieve2', 'A')", { location: "saveupdater" });
    }
    (s as any).su_i = ((s as any).su_i ?? 0) + (1);
    if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
      // TODO-QSP: jump 'npc_selfie_update_loop'
    }
    if ((Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A157') : -1) >= 0) {
      (s as any).su_tel_pos = qspUntranslated(s, "arrpos('contact', 'A157')", { location: "saveupdater" });
      // TODO-QSP: $contactICode[su_tel_pos] = replace($contactICode[su_tel_pos], 'telefon', 'lover_call')
    }
    (s as any).su_i = 0;
    (s as any).su_max_i = 0;
    // TODO-QSP: :su_pref_update_loop_904
    if (((String(((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)]).indexOf(String('npc_trait_values'))) + 1) > 0) {
      // TODO-QSP: $npc_preferences[su_i] = replace($npc_preferences[su_i], 'npc_trait_values', 'npc_pref_values')
    }
    if (((String(((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)]).indexOf(String('clothes_thin'))) + 1) > 0) {
      // TODO-QSP: $npc_preferences[su_i] = replace($npc_preferences[su_i], "'clothes_thin'", "'clothes_thin_high'")
    }
    if (((String(((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)]).indexOf(String('cosmetics_piercing'))) + 1) > 0) {
      // TODO-QSP: $npc_preferences[su_i] = replace($npc_preferences[su_i], "'cosmetics_piercing'", "'cosmetics_piercin...
    }
    if (((String(((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)]).indexOf(String('cosmetics_tattoo'))) + 1) > 0) {
      // TODO-QSP: $npc_preferences[su_i] = replace($npc_preferences[su_i], "'cosmetics_tattoo'", "'cosmetics_tattoo_vi...
    }
    if (((String(((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)]).indexOf(String('cosmetics_makeup'))) + 1) > 0) {
      // TODO-QSP: $npc_preferences[su_i] = replace($npc_preferences[su_i], "'cosmetics_makeup'", "'cosmetics_makeup_an...
    }
    if (((String(((s as any).npc_preferences ?? 0)?.[String((s as any).su_i ?? 0)]).indexOf(String('body_strength'))) + 1) > 0) {
      // TODO-QSP: $npc_preferences[su_i] = replace($npc_preferences[su_i], "'body_strength'", "'stats_strength'")
    }
    (s as any).su_i = ((s as any).su_i ?? 0) + (1);
    if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
      // TODO-QSP: jump 'su_pref_update_loop_904'
    }
    if (Object.keys((s as any).lover ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['lover_number'] = 0;
      // TODO-QSP: :su_lover_to_npcgeneratec_loop
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['npcID'] = qspUntranslated(s, "lover[saveupdaterVars['lover_number']]", { location: "saveupdater" });
      // TODO-QSP: $npc_usedname[$saveupdaterVars['npcID']]  = $loverdesc[saveupdaterVars['lover_number']]
      // TODO-QSP: npc_gender[$saveupdaterVars['npcID']]    = loverGender[saveupdaterVars['lover_number']]
      if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['av_height'] = 175;
      } else {
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['av_height'] = 165;
      }
      if (((s as any).loverbodyrand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: npc_height[$saveupdaterVars['npcID']] = saveupdaterVars['av_height'] - 10 + rand(-5, 4)
      } else {
        if (((s as any).loverbodyrand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: npc_height[$saveupdaterVars['npcID']] = saveupdaterVars['av_height'] + rand(-5, 5)
        } else {
          // TODO-QSP: npc_height[$saveupdaterVars['npcID']] = saveupdaterVars['av_height'] + 10 + rand(-4, 5)
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
      // TODO-QSP: npc_weight[$saveupdaterVars['npcID']] = saveupdaterVars['bmi'] * npc_height[$saveupdaterVars['npcID'...
      if (((s as any).loverfacerand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: npc_haircol[$saveupdaterVars['npcID']] = 0
      } else {
        if (((s as any).loverfacerand ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: npc_haircol[$saveupdaterVars['npcID']] = 1
        } else {
          // TODO-QSP: npc_haircol[$saveupdaterVars['npcID']] = 3
        }
      }
      // TODO-QSP: npc_dick[$saveupdaterVars['npcID']]    = loverdick[saveupdaterVars['lover_number']]
      // TODO-QSP: $npc_thdick[$saveupdaterVars['npcID']]  = $loverdick_girth[saveupdaterVars['lover_number']]
      // TODO-QSP: npc_sexskill[$saveupdaterVars['npcID']]  = loversilaVag[saveupdaterVars['lover_number']]
      // TODO-QSP: npc_finance[$saveupdaterVars['npcID']]  = loverfinance[saveupdaterVars['lover_number']]
      // TODO-QSP: $npc_outfit[$saveupdaterVars['npcID']]  = $loverClo[saveupdaterVars['lover_number']]
      if (((s as any).figurlover ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 0) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_starving', 'like'
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_underweight', 'like'
      } else {
        if (((s as any).figurlover ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_normal', 'like'
        } else {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_overweight', 'like'
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_obese', 'like'
        }
      }
      if (((s as any).titlover ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 0) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_tits_small', 'like'
        } else {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_tits_average', 'like'
        }
      } else {
        if (((s as any).titlover ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_tits_large', 'like'
        } else {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_tits_huge', 'like'
        }
      }
      if (((s as any).npc_rel ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
        // TODO-QSP: npc_rel[$saveupdaterVars['npcID']] = 40
      }
      // TODO-QSP: npc_rel[$saveupdaterVars['npcID']]        = npc_rel[$saveupdaterVars['npcID']] + loverrelation[saveu...
      // TODO-QSP: npc_haircol[$saveupdaterVars['npcID']]      = hairlover[saveupdaterVars['lover_number']]
      // TODO-QSP: npc_eventday[$saveupdaterVars['npcID']]      = loverday[saveupdaterVars['lover_number']]
      // TODO-QSP: npc_daygenerated[$saveupdaterVars['npcID']]    = daystart - loverdays[saveupdaterVars['lover_number'...
      // TODO-QSP: npc_dates[$saveupdaterVars['npcID']]      = loverdays[saveupdaterVars['lover_number']]
      // TODO-QSP: npc_sex[$saveupdaterVars['npcID']]        = max(npc_sex[$saveupdaterVars['npcID']], boyonce[saveupda...
      // TODO-QSP: npc_love[$saveupdaterVars['npcID']]        = loverlove[lsaveupdaterVars['lover_number']]
      // TODO-QSP: npc_compliance[$saveupdaterVars['npcID']]    = -loverscompliance[saveupdaterVars['lover_number']]
      // TODO-QSP: npc_meetday[$saveupdaterVars['npcID']]      = meetday[saveupdaterVars['lover_number']]
      // TODO-QSP: npc_meethour[$saveupdaterVars['npcID']]      = meethour[saveupdaterVars['lover_number']]
      if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
        // TODO-QSP: $npc_rel_type[$saveupdaterVars['npcID']]  = 'boyfriend'
      } else {
        // TODO-QSP: $npc_rel_type[$saveupdaterVars['npcID']]  = 'girlfriend'
      }
      if (((s as any).clotTypePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: clotQualPref[saveupdaterVars['lover_number']] = 1
      } else {
        if (((s as any).clotTypePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: clotQualPref[saveupdaterVars['lover_number']] = rand(1, 2)
        } else {
          if (((s as any).clotTypePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: clotQualPref[saveupdaterVars['lover_number']] = 2
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_style_wealthy', 'like'
          } else {
            if (((s as any).clotTypePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 4) {
              // TODO-QSP: clotQualPref[saveupdaterVars['lover_number']] = 1
              // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_style_fetish', 'like'
            }
          }
        }
      }
      if (((s as any).clotQualPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_quality_low', 'like'
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_quality_medium', 'like'
      } else {
        if (((s as any).clotQualPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_quality_high', 'like'
        }
      }
      if (((s as any).clotTopPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_cleavage_none', 'like'
      } else {
        if (((s as any).clotTopPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_cleavage_small', 'like'
        } else {
          if (((s as any).clotTopPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_cleavage_medium', 'like'
          } else {
            if (((s as any).clotTopPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 4) {
              // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_cleavage_large', 'like'
            }
          }
        }
      }
      if (((s as any).bottShorPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_pants_long', 'like'
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_skirt_long', 'like'
      } else {
        if (((s as any).bottShorPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_pants_normal', 'like'
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_skirt_normal', 'like'
        } else {
          if (((s as any).bottShorPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_pants_short', 'like'
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_skirt_short', 'like'
          }
        }
      }
      if (((s as any).clotThinPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_thin_low', 'like'
      } else {
        if (((s as any).clotThinPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_thin_medium', 'like'
        } else {
          if (((s as any).clotThinPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_thin_high', 'like'
          }
        }
      }
      if (((s as any).bimbPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'clothes_style_bimbo', 'like'
      }
      if (((s as any).pierPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_piercings_none', 'like'
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_piercings_few', 'like'
      } else {
        if (((s as any).pierPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_piercings_multiple', 'like'
        } else {
          if (((s as any).pierPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_piercings_lot', 'like'
          }
        }
      }
      if (((s as any).tattPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_tattoos_none', 'like'
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_tattoos_few', 'like'
      } else {
        if (((s as any).tattPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_tattoos_multiple', 'like'
        } else {
          if (((s as any).tattPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_tattoos_lot', 'like'
          }
        }
      }
      if (((s as any).lipsPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_lips_normal', 'like'
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_lips_plump', 'like'
      } else {
        if (((s as any).lipsPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_lips_big', 'like'
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_lips_pillowy', 'like'
        }
      }
      if (((s as any).bodyPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_starving', 'like'
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_underweight', 'like'
      } else {
        if (((s as any).bodyPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_normal', 'like'
        } else {
          if (((s as any).bodyPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_overweight', 'like'
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_bmi_obese', 'like'
          }
        }
      }
      if (((s as any).makePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_makeup_light', 'like'
      } else {
        if (((s as any).makePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_makeup_moderate', 'like'
        } else {
          if (((s as any).makePref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'cosmetics_makeup_heavy', 'like'
          }
        }
      }
      if (((s as any).IQPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'stats_intel_dumb'
      } else {
        if (((s as any).IQPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'stats_intel_normal'
        } else {
          if (((s as any).IQPref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['lover_number']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'stats_intel_smart'
          }
        }
      }
      // TODO-QSP: gs 'telefon', 'AddContact', $saveupdaterVars['npcID'], $npc_icon[$saveupdaterVars['npcID']]
      // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', $saveupdaterVars['npcID'], "gt 'lover_call', 'callingTheLover', ...
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['lover_number'] = ((s as any).saveupdaterVars['lover_number'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['lover_number'] < Object.keys((s as any).lover ?? {}).length) {
        // TODO-QSP: jump 'su_lover_to_npcgeneratec_loop'
      }
    }
    if (((s as any).husID ?? 0) !== '') {
      // TODO-QSP: $lover[] = $husID
      ((s as any).npc_rel = (s as any).npc_rel ?? {})[String((s as any).husID ?? 0)] = ((s as any).husband ?? 0);
      // TODO-QSP: $npc_rel_type[$husID]  = 'husband'
      // TODO-QSP: $npc_usedname[$husID]  = $husname
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
      ((s as any).npc_weight = (s as any).npc_weight ?? {})[String((s as any).husID ?? 0)] = (((s as any).saveupdaterVars ?? {})?.['bmi'] ?? 0) * ((s as any).npc_height ?? 0)?.[String((s as any).husID ?? 0)] * ((s as any).npc_height ?? 0)?.[String((s as any).husID ?? 0)] / 10000;
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
    ((s as any).stat = (s as any).stat ?? {})['fuckbuddies_current'] = 0;
    ((s as any).stat = (s as any).stat ?? {})['ex_fuckbuddies'] = 0;
    ((s as any).stat = (s as any).stat ?? {})['sugardaddies_current'] = 0;
    ((s as any).stat = (s as any).stat ?? {})['ex_sugardaddies'] = 0;
    if (Object.keys((s as any).fuckbuddy ?? {}).length > 0) {
      (s as any).su_i = 0;
      (s as any).su_max_i = 0;
      // TODO-QSP: :su_fuckbuddy_to_lover_loop
      // TODO-QSP: $lover[] = $fuckbuddy[su_i]
      ((s as any).stat = (s as any).stat ?? {})['fuckbuddies_current'] = ((s as any).stat['fuckbuddies_current'] ?? 0) + (1);
      ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
        // TODO-QSP: jump 'su_fuckbuddy_to_lover_loop'
      }
    }
    if (Object.keys((s as any).sugar_daddy ?? {}).length > 0) {
      (s as any).su_i = 0;
      (s as any).su_max_i = 0;
      // TODO-QSP: :su_sugar_daddy_to_lover_loop
      // TODO-QSP: $lover[] = $sugar_daddy[su_i]
      ((s as any).stat = (s as any).stat ?? {})['sugardaddies_current'] = ((s as any).stat['sugardaddies_current'] ?? 0) + (1);
      ((s as any).stat = (s as any).stat ?? {})['total_lovers_current'] = ((s as any).stat['total_lovers_current'] ?? 0) + (1);
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
        // TODO-QSP: jump 'su_sugar_daddy_to_lover_loop'
      }
    }
    if (Object.keys((s as any).ex_fuckbuddy ?? {}).length > 0) {
      (s as any).su_i = 0;
      (s as any).su_max_i = 0;
      // TODO-QSP: :su_ex_fuckbuddy_to_ex_lover_loop
      // TODO-QSP: $lover[] = $ex_fuckbuddy[su_i]
      ((s as any).stat = (s as any).stat ?? {})['ex_fuckbuddies'] = ((s as any).stat['ex_fuckbuddies'] ?? 0) + (1);
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
        // TODO-QSP: jump 'su_ex_fuckbuddy_to_ex_lover_loop'
      }
    }
    if (Object.keys((s as any).ex_sugar_daddy ?? {}).length > 0) {
      (s as any).su_i = 0;
      (s as any).su_max_i = 0;
      // TODO-QSP: :su_ex_sugar_daddy_to_lover_loop
      // TODO-QSP: $lover[] = $ex_sugar_daddy[su_i]
      ((s as any).stat = (s as any).stat ?? {})['ex_sugardaddies'] = ((s as any).stat['ex_sugardaddies'] ?? 0) + (1);
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
        // TODO-QSP: jump 'su_ex_sugar_daddy_to_lover_loop'
      }
    }
    (s as any).su_max_i = 0;
    (s as any).su_i = 0;
    // TODO-QSP: :fix_Barray_loop_904
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['npcID'] = ((s as any).npc_index ?? 0)?.[String((s as any).su_i ?? 0)];
    if (((s as any).npc_usedname ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] !== '') {
      if (((s as any).npc_girth ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] <= 8) {
        if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'skinny') {
          // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 9
        } else {
          if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'slim') {
            // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 10
          } else {
            if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'well proportioned') {
              // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 11
            } else {
              if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thicker than average') {
                // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 12
              } else {
                if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thick') {
                  // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 13
                } else {
                  if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'massive') {
                    // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 14
                  } else {
                    if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'monstrous') {
                      // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 15
                    } else {
                      // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 12
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
          // TODO-QSP: npc_height[$saveupdaterVars['npcID']] = rand(160, 190)
        } else {
          ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['av_height'] = 165;
          // TODO-QSP: npc_height[$saveupdaterVars['npcID']] = rand(150, 180)
        }
      }
      (s as any).su_temp_build_type = 0;
      if (((s as any).npc_height_desc ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === '') {
        if (((s as any).npc_height ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] < ((s as any).saveupdaterVars ?? 0)?.['av_height'] - 5) {
          (s as any).su_temp_build_type = 1;
          // TODO-QSP: $npc_height_desc[$saveupdaterVars['npcID']] = 'short'
        } else {
          if (((s as any).npc_height ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] <= ((s as any).saveupdaterVars ?? 0)?.['av_height'] + 5) {
            (s as any).su_temp_build_type = 2;
            // TODO-QSP: $npc_height_desc[$saveupdaterVars['npcID']] = 'average'
          } else {
            (s as any).su_temp_build_type = 3;
            // TODO-QSP: $npc_height_desc[$saveupdaterVars['npcID']] = 'tall'
          }
        }
      }
      if (((s as any).npc_weight ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
        if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
          (s as any).su_temp_av_weight = 68;
          // TODO-QSP: npc_weight[$saveupdaterVars['npcID']] = rand(45, 91)
        } else {
          (s as any).su_temp_av_weight = 60;
          // TODO-QSP: npc_weight[$saveupdaterVars['npcID']] = rand(39, 81)
        }
      }
      if (((s as any).npc_weight_desc ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === '') {
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['bmi'] = 100000 * ((s as any).npc_weight ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)] / (((s as any).npc_height ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)] * ((s as any).npc_height ?? 0)[(((s as any).saveupdaterVars ?? {})?.['npcID'] ?? 0)]);
        if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
          if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 190) {
            // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'thin'
          } else {
            if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 225) {
              // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'athletic'
            } else {
              if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 250) {
                // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'chunky'
              } else {
                // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'fat'
              }
            }
          }
        } else {
          if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 190) {
            if (((s as any).su_temp_build_type ?? 0) === 1) {
              // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'petite'
            } else {
              // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'slender'
            }
          } else {
            if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 225) {
              // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'toned'
            } else {
              if (((s as any).saveupdaterVars ?? 0)?.['bmi'] < 250) {
                // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'average'
              } else {
                // TODO-QSP: $npc_build_desc[$saveupdaterVars['npcID']] = 'chubby'
              }
            }
          }
        }
      }
      if (((s as any).npc_residence ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 1) {
        // TODO-QSP: $npc_residence[$saveupdaterVars['npcID']] = 'pav_residential'
      } else {
        if (((s as any).npc_residence ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 2) {
          // TODO-QSP: $npc_residence[$saveupdaterVars['npcID']] = 'uni_grounds'
        } else {
          if (((s as any).npc_residence ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 3) {
            // TODO-QSP: $npc_residence[$saveupdaterVars['npcID']] = 'city_residential'
          } else {
            // TODO-QSP: $npc_residence[$saveupdaterVars['npcID']] = 'city_center'
          }
        }
      }
      if (((s as any).npc_finance ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
        // TODO-QSP: $npc_outfit[$saveupdaterVars['npcID']] = 'a tracksuit'
      } else {
        if (((s as any).npc_finance ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 1) {
          // TODO-QSP: $npc_outfit[$saveupdaterVars['npcID']] = 'jeans and a ' + iif(npc_gender[$saveupdaterVars['npcID']] ...
        } else {
          // TODO-QSP: $npc_outfit[$saveupdaterVars['npcID']] = 'an expensive ' + iif(npc_gender[$saveupdaterVars['npcID']]...
        }
      }
      if (((s as any).npc_bush_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'hair_pubes_shaven', 'like'
      } else {
        if (((s as any).npc_bush_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'hair_pubes_shaven', 'like'
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'hair_pubes_stubble', 'like'
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'hair_pubes_patch', 'like'
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'hair_pubes_trimmed', 'like'
        } else {
          if (((s as any).npc_bush_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'hair_pubes_bush', 'like'
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'hair_pubes_untrimmed', 'like'
          }
        }
      }
      if (((s as any).npc_tit_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 1) {
        // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_tits_small', 'like'
      } else {
        if (((s as any).npc_tit_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 2) {
          // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_tits_average', 'like'
        } else {
          if (((s as any).npc_tit_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 3) {
            // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_tits_big', 'like'
          } else {
            if (((s as any).npc_tit_pref ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 4) {
              // TODO-QSP: gs 'npc_set_preference', $saveupdaterVars['npcID'], 'body_tits_huge', 'like'
            }
          }
        }
      }
      if (((s as any).npc_daygenerated ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
        // TODO-QSP: npc_daygenerated[$saveupdaterVars['npcID']] = daystart
      }
    }
    (s as any).su_i = ((s as any).su_i ?? 0) + (1);
    if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
      // TODO-QSP: jump 'fix_Barray_loop_904'
    }
    if (((s as any).boy1 ?? 0) !== '') {
      qspCall(s, 'npcStat', '', ((s as any).boy1 ?? 0), 'a');
    }
    if (((s as any).boy2 ?? 0) !== '') {
      qspCall(s, 'npcStat', '', ((s as any).boy2 ?? 0), 'b');
    }
    if (((s as any).boy3 ?? 0) !== '') {
      qspCall(s, 'npcStat', '', ((s as any).boy3 ?? 0), 'c');
    }
    if (((s as any).boy4 ?? 0) !== '') {
      qspCall(s, 'npcStat', '', ((s as any).boy4 ?? 0), 'd');
    }
    if (((s as any).boy5 ?? 0) !== '') {
      qspCall(s, 'npcStat', '', ((s as any).boy5 ?? 0), 'e');
    }
    if (((s as any).boy6 ?? 0) !== '') {
      qspCall(s, 'npcStat', '', ((s as any).boy6 ?? 0), 'f');
    }
    (s as any).su_i = 0;
    (s as any).su_max_i = 0;
    // TODO-QSP: :boyStat_updater_loop_904
    if (((s as any).su_i ?? 0) < ((s as any).su_max_i ?? 0)) {
      // TODO-QSP: gs 'npcStat', $boy[su_i], su_i
      (s as any).su_i = ((s as any).su_i ?? 0) + (1);
      // TODO-QSP: jump 'boyStat_updater_loop_904'
    }
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
      // TODO-QSP: :su_modlist_remove_loop
      if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] === '') {
      } else {
        (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
      }
      if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
        // TODO-QSP: jump 'su_modlist_remove_loop'
      }
    }
    (s as any).su_i = 0;
    // TODO-QSP: :skl_deg_update
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$skl_name[su_i]>>_deg *= 100
    // TODO-QSP: "
    (s as any).su_i = ((s as any).su_i ?? 0) + (1);
    if (((s as any).su_i ?? 0) < 41) {
      // TODO-QSP: jump 'skl_deg_update'
    }
    (s as any).su_i = 0;
    // TODO-QSP: :att_deg_update
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$att_name[su_i]>>_deg *= 100
    // TODO-QSP: "
    (s as any).su_i = ((s as any).su_i ?? 0) + (1);
    if (((s as any).su_i ?? 0) < 11) {
      // TODO-QSP: jump 'att_deg_update'
    }
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
                // TODO-QSP: gs 'post_office', 'add_mail', 'city', "gs 'blackmailer', 'set_post_act'"
                ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package_day'] = ((s as any).blackmailQW ?? 0)?.['smsday'];
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
        // TODO-QSP: killvar 'pcs_webcamname'
      }
      if (((s as any).camclients ?? 0) > 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Viewers'] = ((s as any).camclients ?? 0);
        // TODO-QSP: killvar 'camclients'
      }
      if (((s as any).regview ?? 0) > 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Followers'] = ((s as any).regview ?? 0);
        // TODO-QSP: killvar 'regview'
      }
      if (((s as any).webpopular ?? 0) > 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['fame'] = ((s as any).webpopular ?? 0);
        // TODO-QSP: killvar 'webpopular'
      }
      if (((s as any).tokens_made ?? 0) > 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_tokens'] = ((s as any).tokens_made ?? 0);
        // TODO-QSP: killvar 'tokens_made'
      }
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
    // TODO-QSP: :fix_Barray_loop_9043
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['npcID'] = qspUntranslated(s, "npc_index[saveupdaterVars['i']]", { location: "saveupdater" });
    if (((s as any).npc_usedname ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] !== '') {
      if (((s as any).npc_girth ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] > 0  &&  ((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'monstrous') {
        if (((s as any).npc_girth ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] <= 8) {
          if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'skinny') {
            // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 9
          } else {
            if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'slim') {
              // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 10
            } else {
              if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'well proportioned') {
                // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 11
              } else {
                if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thicker than average') {
                  // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 12
                } else {
                  if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thick') {
                    // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 13
                  } else {
                    if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'massive') {
                      // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 14
                    } else {
                      if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'monstrous') {
                        // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 15
                      } else {
                        // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 12
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
    if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['max_i']) {
      // TODO-QSP: jump 'fix_Barray_loop_9043'
    }
    if (((s as any).npc_girth ?? 0)?.['A1'] === 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 1;
      // TODO-QSP: :fix_Aarray_loop_9043
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['npcID'] = 'A' + ((s as any).saveupdaterVars ?? 0)?.['i'];
      if (((s as any).npc_girth ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 0) {
        if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'skinny') {
          // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 9
        } else {
          if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'slim') {
            // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 10
          } else {
            if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'well proportioned') {
              // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 11
            } else {
              if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thicker than average') {
                // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 12
              } else {
                if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'thick') {
                  // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 13
                } else {
                  if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'massive') {
                    // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 14
                  } else {
                    if (((s as any).npc_thdick ?? 0)[((s as any).saveupdaterVars ?? 0)?.['npcID']] === 'monstrous') {
                      // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 15
                    } else {
                      // TODO-QSP: npc_girth[$saveupdaterVars['npcID']] = 12
                    }
                  }
                }
              }
            }
          }
        }
      }
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).aarraynumber ?? 0)) {
        // TODO-QSP: jump 'fix_Aarray_loop_9043'
      }
    }
    if (((s as any).pcs_vball ?? 0) > 0  &&  (!((s as any).pcs_vball_block ?? 0))) {
      qspCall(s, 'stat_sklattrib_lvlset', '');
    }
    if (((s as any).KGZHP ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['HP'] = ((s as any).KGZHP ?? 0);
      // TODO-QSP: killvar 'KGZHP'
    }
    if (((s as any).KGZday ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['day'] = ((s as any).KGZday ?? 0);
      // TODO-QSP: killvar 'KGZday'
    }
    if (((s as any).KGZhour ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['hour'] = ((s as any).KGZhour ?? 0);
      // TODO-QSP: killvar 'KGZhour'
    }
    if (((s as any).KGZsup ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['sup'] = ((s as any).KGZsup ?? 0);
      // TODO-QSP: killvar 'KGZsup'
    }
    if (((s as any).KGZmedkit ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['medkit'] = ((s as any).KGZmedkit ?? 0);
      // TODO-QSP: killvar 'KGZmedkit'
    }
    if (((s as any).KGZrec ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['rec'] = ((s as any).KGZrec ?? 0);
      // TODO-QSP: killvar 'KGZrec'
    }
    if (((s as any).KGZplace ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['place'] = ((s as any).KGZplace ?? 0);
      // TODO-QSP: killvar 'KGZplace'
    }
    if (((s as any).KGZcopcar ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['copcar'] = ((s as any).KGZcopcar ?? 0);
      // TODO-QSP: killvar 'KGZcopcar'
    }
    if (((s as any).KGZgun ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['gun'] = ((s as any).KGZgun ?? 0);
      // TODO-QSP: killvar 'KGZgun'
    }
    if (((s as any).bullet ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['bullet'] = ((s as any).bullet ?? 0);
      // TODO-QSP: killvar 'bullet'
    }
    if (((s as any).KGZgun2 ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['gun2'] = ((s as any).KGZgun2 ?? 0);
      // TODO-QSP: killvar 'KGZgun2'
    }
    if (((s as any).bullet2 ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['bullet2'] = ((s as any).bullet2 ?? 0);
      // TODO-QSP: killvar 'bullet2'
    }
    if (((s as any).KGZgun3 ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['gun3'] = ((s as any).KGZgun3 ?? 0);
      // TODO-QSP: killvar 'KGZgun3'
    }
    if (((s as any).bullet3 ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['bullet3'] = ((s as any).bullet3 ?? 0);
      // TODO-QSP: killvar 'bullet3'
    }
    if (((s as any).KGZgenerator ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['generator'] = ((s as any).KGZgenerator ?? 0);
      // TODO-QSP: killvar 'KGZgenerator'
    }
    if (((s as any).KGZbenzin ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['benzin'] = ((s as any).KGZbenzin ?? 0);
      // TODO-QSP: killvar 'KGZbenzin'
    }
    if (((s as any).KGZbolgarka ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['bolgarka'] = ((s as any).KGZbolgarka ?? 0);
      // TODO-QSP: killvar 'KGZbolgarka'
    }
    if (((s as any).KGZcopdoor ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['copdoor'] = ((s as any).KGZcopdoor ?? 0);
      // TODO-QSP: killvar 'KGZcopdoor'
    }
    if (((s as any).KGZratia ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['ratia'] = ((s as any).KGZratia ?? 0);
      // TODO-QSP: killvar 'KGZratia'
    }
    if (((s as any).KGZfortQW ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['fortQW'] = ((s as any).KGZfortQW ?? 0);
      // TODO-QSP: killvar 'KGZfortQW'
    }
    if (((s as any).KGZfortOru ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['fortOru'] = ((s as any).KGZfortOru ?? 0);
      // TODO-QSP: killvar 'KGZfortOru'
    }
    if (((s as any).KGZgranade ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['granade'] = ((s as any).KGZgranade ?? 0);
      // TODO-QSP: killvar 'KGZgranade'
    }
    if (((s as any).KGZdost ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dost'] = ((s as any).KGZdost ?? 0);
      // TODO-QSP: killvar 'KGZdost'
    }
    if (((s as any).KGZgruzBenz ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['gruzBenz'] = ((s as any).KGZgruzBenz ?? 0);
      // TODO-QSP: killvar 'KGZgruzBenz'
    }
    if (((s as any).KGZgruzBenzMark ?? 0)  !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['gruzBenzMark'] = ((s as any).KGZgruzBenzMark ?? 0);
      // TODO-QSP: killvar 'KGZgruzBenzMark'
    }
    if (((s as any).KGZgruzovik ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['gruzovik'] = ((s as any).KGZgruzovik ?? 0);
      // TODO-QSP: killvar 'KGZgruzovik'
    }
    if (((s as any).KGZlok ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['lok'] = ((s as any).KGZlok ?? 0);
      // TODO-QSP: killvar 'KGZlok'
    }
    if (((s as any).KGZlok2 ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['lok2'] = ((s as any).KGZlok2 ?? 0);
      // TODO-QSP: killvar 'KGZlok2'
    }
    if (((s as any).KGZweapon ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['weapon'] = ((s as any).KGZweapon ?? 0);
      // TODO-QSP: killvar 'KGZweapon'
    }
    if (((s as any).KGZplaceA ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['placeA'] = ((s as any).KGZplaceA ?? 0);
      // TODO-QSP: killvar 'KGZplaceA'
    }
    if (((s as any).KGZdead ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = ((s as any).KGZdead ?? 0);
      // TODO-QSP: killvar 'KGZdead'
    }
    if (((s as any).KGZbulgun ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['bulgun'] = ((s as any).KGZbulgun ?? 0);
      // TODO-QSP: killvar 'KGZbulgun'
    }
    if (((s as any).KGZbatl ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['batl'] = ((s as any).KGZbatl ?? 0);
      // TODO-QSP: killvar 'KGZbatl'
    }
    if (((s as any).KGZrecord ?? 0)    !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['record'] = ((s as any).KGZrecord ?? 0);
      // TODO-QSP: killvar 'KGZrecord'
    }
    if (((s as any).KGZsvet ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['svet'] = ((s as any).KGZsvet ?? 0);
      // TODO-QSP: killvar 'KGZsvet'
    }
    if (((s as any).KGZagr ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['agr'] = ((s as any).KGZagr ?? 0);
      // TODO-QSP: killvar 'KGZagr'
    }
    if (((s as any).KGZdist ?? 0)      !== 0) {
      ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = ((s as any).KGZdist ?? 0);
      // TODO-QSP: killvar 'KGZdist'
    }
    if (((s as any).monthName ?? 0)[0] === ''  ||  ((s as any).weekName ?? 0)[1] === ''  ||  ((s as any).season ?? 0) === '') {
      qspCall(s, 'time', 'init_weeknames');
      qspCall(s, 'time', 'update_date');
    }
    if (((s as any).lesbian ?? 0)      > 0) {
      ((s as any).stat = (s as any).stat ?? {})['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (((s as any).lesbian ?? 0));
      // TODO-QSP: killvar 'lesbian'
    }
    if (((s as any).hidden_lesbian ?? 0)  > 0) {
      ((s as any).stat = (s as any).stat ?? {})['lesbian_unaware_count'] = ((s as any).stat['lesbian_unaware_count'] ?? 0) + (((s as any).hidden_lesbian ?? 0));
      // TODO-QSP: killvar 'hidden_lesbian'
    }
    if (((s as any).gang ?? 0)        > 0) {
      ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (((s as any).gang ?? 0));
      // TODO-QSP: killvar 'gang'
    }
    if (((s as any).hidden_gang ?? 0)    > 0) {
      ((s as any).stat = (s as any).stat ?? {})['gangbang_unaware_count'] = ((s as any).stat['gangbang_unaware_count'] ?? 0) + (((s as any).hidden_gang ?? 0));
      // TODO-QSP: killvar 'hidden_gang'
    }
    if (((s as any).rape ?? 0)        > 0) {
      ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (((s as any).rape ?? 0));
      // TODO-QSP: killvar 'rape'
    }
    if (((s as any).hidden_rape ?? 0)    > 0) {
      ((s as any).stat = (s as any).stat ?? {})['rape_unaware_count'] = ((s as any).stat['rape_unaware_count'] ?? 0) + (((s as any).hidden_rape ?? 0));
      // TODO-QSP: killvar 'hidden_rape'
    }
    if (((s as any).shemale ?? 0)      > 0) {
      ((s as any).stat = (s as any).stat ?? {})['shemale_count'] = ((s as any).stat['shemale_count'] ?? 0) + (((s as any).shemale ?? 0));
      // TODO-QSP: killvar 'shemale'
    }
    if (((s as any).sex_ev ?? 0) > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_stamina'] = ((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npcID ?? 0)];
    }
    if (((s as any).bimbo_flag ?? 0)    > 0) {
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_flag'] = ((s as any).bimbo_flag ?? 0);
      // TODO-QSP: killvar 'bimbo_flag'
    }
    if (((s as any).bimbo ?? 0)      > 0) {
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_exp'] = ((s as any).bimbo ?? 0);
      // TODO-QSP: killvar 'bimbo'
    }
    if (((s as any).bimbolevel ?? 0)    > 0) {
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_lvl'] = ((s as any).bimbolevel ?? 0);
      // TODO-QSP: killvar 'bimbolevel'
    }
    if (((s as any).bimbowithdrawal ?? 0)  > 0) {
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_deg'] = ((s as any).bimbowithdrawal ?? 0);
      // TODO-QSP: killvar 'bimbowithdrawal'
    }
    if (((s as any).bimbostupidity ?? 0)  > 0) {
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_stupid'] = ((s as any).bimbostupidity ?? 0);
      // TODO-QSP: killvar 'bimbostupidity'
    }
    if (((s as any).goth_flag ?? 0)    > 0) {
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['goth_flag'] = ((s as any).goth_flag ?? 0);
      // TODO-QSP: killvar 'goth_flag'
    }
    if (((s as any).punk_flag ?? 0)    > 0) {
      ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['punk_flag'] = ((s as any).punk_flag ?? 0);
      // TODO-QSP: killvar 'punk_flag'
    }
    if (((s as any).supnatvnesh ?? 0)    > 0) {
      if (((s as any).pcs_traits ?? 0)?.['bimbo_lvl'] > 0) {
        ((s as any).pcs_traits = (s as any).pcs_traits ?? {})['bimbo_pretty'] = ((s as any).supnatvnesh ?? 0);
      } else {
        (s as any).succappbonus = ((s as any).supnatvnesh ?? 0);
      }
    }
    if (Object.keys((s as any).SMSIdentifier ?? {}).length < Object.keys((s as any).SMSContact ?? {}).length) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['max_i'] = 0;
      // TODO-QSP: :su_telefonID_update
      // TODO-QSP: SMSIdentifier[saveupdaterVars['i']] = 1 + saveupdaterVars['i']
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['max_i']) {
        // TODO-QSP: jump 'su_telefonID_update'
      }
    }
    if (Object.keys((s as any).SMSSendIdentifier ?? {}).length < Object.keys((s as any).SMSSendContact ?? {}).length) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['max_i'] = 0;
      // TODO-QSP: :su_telefonID2_update
      // TODO-QSP: SMSSendIdentifier[saveupdaterVars['i']] = 1 + saveupdaterVars['i']
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['max_i']) {
        // TODO-QSP: jump 'su_telefonID2_update'
      }
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
      // TODO-QSP: $randname += ' ' + $func('npcrnamefile', 'rusSur')
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
        (s as any).temp_name = ((s as any).camGirl ?? 0)?.['MFC_camname'];
      }
      ((s as any).camGirl = (s as any).camGirl ?? {})['last_su'] = 1;
      if (((s as any).temp_name ?? 0) !== '') {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_camname'] = ((s as any).temp_name ?? 0);
        qspCall(s, 'komp_cam_functions', 'MFC_init');
      }
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
      // TODO-QSP: killvar 'petka_homework'
    }
    if (((s as any).petka ?? 0)?.['sub']      > 0) {
      ((s as any).petkaQW = (s as any).petkaQW ?? {})['sub'] = ((s as any).petka ?? 0)?.['sub'];
    }
    if (((s as any).petka ?? 0)?.['blackmail']  > 0) {
      ((s as any).petkaQW = (s as any).petkaQW ?? {})['blackmail'] = ((s as any).petka ?? 0)?.['blackmail'];
    }
    if (Object.keys((s as any).petka ?? {}).length    > 0) {
      // TODO-QSP: killvar 'petka'
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90501) {
    if (((s as any).brotherSex ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = ((s as any).brotherSex ?? 0);
      // TODO-QSP: killvar 'brotherSex'
    }
    if (((s as any).brotherAge ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['Age'] = ((s as any).brotherAge ?? 0);
      // TODO-QSP: killvar 'brotherAge'
    }
    if (((s as any).brotherknowslut ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = ((s as any).brotherknowslut ?? 0);
      // TODO-QSP: killvar 'brotherknowslut'
    }
    if (((s as any).brotherDay ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day'] = ((s as any).brotherDay ?? 0);
      // TODO-QSP: killvar 'brotherDay'
    }
    if (((s as any).brotherSexCount ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['sex_count_today'] = ((s as any).brotherSexCount ?? 0);
      // TODO-QSP: killvar 'brotherSexCount'
    }
    if (((s as any).brotherMorningSex ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_morning'] = ((s as any).brotherMorningSex ?? 0);
      // TODO-QSP: killvar 'brotherMorningSex'
    }
    if (((s as any).brotherNightSex ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_night'] = ((s as any).brotherNightSex ?? 0);
      // TODO-QSP: killvar 'brotherNightSex'
    }
    if (((s as any).brotherEvSex ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_evening'] = ((s as any).brotherEvSex ?? 0);
      // TODO-QSP: killvar 'brotherEvSex'
    }
    if (((s as any).brother_homework ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_day_homework'] = ((s as any).brother_homework ?? 0);
      // TODO-QSP: killvar 'brother_homework'
    }
    if (((s as any).brother_saw_analplug ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['saw_analplug'] = ((s as any).brother_saw_analplug ?? 0);
      // TODO-QSP: killvar 'brother_saw_analplug'
    }
    if (((s as any).brother_body_show ?? 0)    > 0) {
      // TODO-QSP: killvar 'brother_body_show'
    }
    if (((s as any).brother_knows_not_virgin ?? 0)  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_not_virgin'] = ((s as any).brother_knows_not_virgin ?? 0);
      // TODO-QSP: killvar 'brother_knows_not_virgin'
    }
    if (((s as any).natbro ?? 0)          > 0) {
      // TODO-QSP: killvar 'natbro'
    }
    if (((s as any).BrotherNo ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['refused_seeporn_bj'] = ((s as any).BrotherNo ?? 0);
      // TODO-QSP: killvar 'BrotherNo'
    }
    if (((s as any).BrotherNoDay ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['refused_seeporn_bj_day'] = ((s as any).BrotherNoDay ?? 0);
      // TODO-QSP: killvar 'BrotherNoDay'
    }
    if (((s as any).brother_ev1 ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['bath_voyeur_day'] = ((s as any).brother_ev1 ?? 0);
      // TODO-QSP: killvar 'brother_ev1'
    }
    if (((s as any).brotherConfidence ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['confidence'] = ((s as any).brotherConfidence ?? 0);
      // TODO-QSP: killvar 'brotherConfidence'
    }
    if (((s as any).npc_know_sveta_lact ?? 0)?.['A34']    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_pc_lact'] = ((s as any).npc_know_sveta_lact ?? 0)?.['A34'];
      // TODO-QSP: killvar 'npc_know_sveta_lact'
    }
    if (((s as any).npc_breastfeed_by_sveta ?? 0)?.['A34']  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['breastfeed_by_pc'] = ((s as any).npc_breastfeed_by_sveta ?? 0)?.['A34'];
      // TODO-QSP: killvar 'npc_breastfeed_by_sveta'
    }
    if (((s as any).npc_tasted_sveta_milk ?? 0)?.['A34']    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_pc_milk_taste'] = ((s as any).npc_tasted_sveta_milk ?? 0)?.['A34'];
      // TODO-QSP: killvar 'npc_tasted_sveta_milk'
    }
    if (((s as any).brotherSexed ?? 0)        > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['sex_ed'] = ((s as any).brotherSexed ?? 0);
      // TODO-QSP: killvar 'brotherSexed'
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
    // TODO-QSP: :updateDickDescMonsterLoop
    if (((s as any).npc_dick_desc ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] === 'monster') {
      // TODO-QSP: $npc_dick_desc[saveupdaterVars['i']] = 'monstrous'
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
    if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']) {
      // TODO-QSP: jump 'updateDickDescMonsterLoop'
    }
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
      qspCall(s, 'stat_sklattrib', '');
      qspCall(s, 'stat_sklattrib_lvlset', '');
    }
    if (Object.keys((s as any).artskls ?? {}).length > 3) {
      qspCall(s, 'stat_sklattrib_lvlset', '');
    }
    qspCall(s, 'fetish', '');
    if (((s as any).maso ?? 0)?.['exp'] !== 0  ||  ((s as any).maso ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'maso', maso['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'maso', maso['pref']
    }
    if (((s as any).bound ?? 0)?.['exp'] !== 0  ||  ((s as any).bound ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'bound', bound['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'bound', bound['pref']
    }
    if (((s as any).beast ?? 0)?.['exp'] !== 0  ||  ((s as any).beast ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'beast', beast['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'beast', beast['pref']
    }
    if (((s as any).creampie ?? 0)?.['exp'] !== 0  ||  ((s as any).creampie ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'creampie', creampie['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'creampie', creampie['pref']
    }
    if (((s as any).impregnation ?? 0)?.['exp'] !== 0  ||  ((s as any).impregnation ?? 0)?.['pref'] !== 0) {
    }
    if (((s as any).pregnant ?? 0)?.['exp'] !== 0  ||  ((s as any).pregnant ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'pregnant', pregnant['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'pregnant', pregnant['pref']
    }
    if (((s as any).exhibitionism ?? 0)?.['exp'] !== 0  ||  ((s as any).exhibitionism ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'exhibitionism', exhibitionism['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'exhibitionism', exhibitionism['pref']
    }
    if (((s as any).rough ?? 0)?.['exp'] !== 0  ||  ((s as any).rough ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'rough', rough['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'rough', rough['pref']
    }
    if (((s as any).prostitution ?? 0)?.['exp'] !== 0  ||  ((s as any).prostitution ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'prostitution', prostitution['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'prostitution', prostitution['pref']
    }
    if (((s as any).dom ?? 0)?.['exp'] !== 0  ||  ((s as any).dom ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'dom', dom['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'dom', dom['pref']
    }
    if (((s as any).sub ?? 0)?.['exp'] !== 0  ||  ((s as any).sub ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'sub', sub['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'sub', sub['pref']
    }
    if (((s as any).incest ?? 0)?.['exp'] !== 0  ||  ((s as any).incest ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'incest', incest['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'incest', incest['pref']
    }
    if (((s as any).feet ?? 0)?.['exp'] !== 0  ||  ((s as any).feet ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'feet', feet['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'feet', feet['pref']
    }
    if (((s as any).lesbian ?? 0)?.['exp'] !== 0  ||  ((s as any).lesbian ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'lesbian', lesbian['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'lesbian', lesbian['pref']
    }
    if (((s as any).group ?? 0)?.['exp'] !== 0  ||  ((s as any).group ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'group', group['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'group', group['pref']
    }
    if (((s as any).gang ?? 0)?.['exp'] !== 0  ||  ((s as any).gang ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'gangbang', gang['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'gangbang', gang['pref']
    }
    if (((s as any).gangbang ?? 0)?.['exp'] !== 0  ||  ((s as any).gangbang ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'add_exp', 'gangbang', gangbang['exp']
      // TODO-QSP: gs 'fetish', 'add_pref', 'gangbang', gangbang['pref']
    }
    if (((s as any).humiliation ?? 0)?.['exp'] !== 0  ||  ((s as any).humiliation ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'humiliation', humiliation['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'humiliation', humiliation['pref']
    }
    if (((s as any).deepthroat ?? 0)?.['exp'] !== 0  ||  ((s as any).deepthroat ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'deepthroat', deepthroat['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'deepthroat', deepthroat['pref']
    }
    if (((s as any).unknown ?? 0)?.['exp'] !== 0  ||  ((s as any).unknown ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'unknown', unknown['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'unknown', unknown['pref']
    }
    if (((s as any).gloryhole ?? 0)?.['exp'] !== 0  ||  ((s as any).gloryhole ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'gloryhole', gloryhole['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'gloryhole', gloryhole['pref']
    }
    if (((s as any).rape ?? 0)?.['exp'] !== 0  ||  ((s as any).rape ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'rape', rape['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'rape', rape['pref']
    }
    if (((s as any).shemale ?? 0)?.['exp'] !== 0  ||  ((s as any).shemale ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'shemale', shemale['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'shemale', shemale['pref']
    }
    if (((s as any).masturbate ?? 0)?.['exp'] !== 0  ||  ((s as any).masturbate ?? 0)?.['pref'] !== 0) {
      // TODO-QSP: gs 'fetish', 'set_exp', 'masturbate', masturbate['exp']
      // TODO-QSP: gs 'fetish', 'set_pref', 'masturbate', masturbate['pref']
    }
    qspCall(s, 'tattoo_management', 'count');
  }
  if (((s as any).temp_current_save_version ?? 0) < 90502) {
    if (Object.keys((s as any).npcs_jerked ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      // TODO-QSP: :npcs_jerked_loop
      // TODO-QSP: npc_jerked[$npcs_jerked[saveupdaterVars['i']]] = 1
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']) {
        // TODO-QSP: jump 'npcs_jerked_loop'
      }
    }
    if (Object.keys((s as any).npcs_blown ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      // TODO-QSP: :npcs_blown_loop
      // TODO-QSP: npc_blown[$npcs_blown[saveupdaterVars['i']]] = 1
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']) {
        // TODO-QSP: jump 'npcs_blown_loop'
      }
    }
    if (Object.keys((s as any).npcs_titfucked ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      // TODO-QSP: :npcs_titfucked_loop
      // TODO-QSP: npc_titfucked[$npcs_titfucked[saveupdaterVars['i']]] = 1
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']) {
        // TODO-QSP: jump 'npcs_titfucked_loop'
      }
    }
    if (Object.keys((s as any).npcs_fucked ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      // TODO-QSP: :npcs_fucked_loop
      // TODO-QSP: npc_sex[$npcs_fucked[saveupdaterVars['i']]] = 1
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']) {
        // TODO-QSP: jump 'npcs_fucked_loop'
      }
    }
    if (Object.keys((s as any).npcs_anal_fucked ?? {}).length > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      // TODO-QSP: :npcs_anal_fucked_loop
      // TODO-QSP: npc_anal_fucked[$npcs_anal_fucked[saveupdaterVars['i']]] = 1
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']) {
        // TODO-QSP: jump 'npcs_anal_fucked_loop'
      }
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90600) {
    if (((s as any).ObjektBil ?? 0) !== 0) {
      ((s as any).obekt = (s as any).obekt ?? {})['bil'] = ((s as any).ObjektBil ?? 0);
      // TODO-QSP: killvar 'ObjektBil'
    }
    if (((s as any).car ?? 0)?.['ID'] !== 0) {
    } else {
      if ((!((s as any).car ?? 0))) {
      } else {
        if (((s as any).car ?? 0) !== 0  &&  ((s as any).car ?? 0) !== ''  &&  ((s as any).car ?? 0)?.['ID'] === 0  &&  ((s as any).car ?? 0)?.['name'] === '') {
          (s as any).temp_carnum = ((s as any).car ?? 0);
          (s as any).temp_carname = ((s as any).car ?? 0);
          (s as any).temp_newcond = ((s as any).car ?? 0)?.['new_condition'];
          (s as any).temp_curcond = ((s as any).car ?? 0)?.['current_condition'];
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
        }
      }
    }
    if (((s as any).husbandsexday ?? 0)  > 0) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['sexday'] = ((s as any).husbandsexday ?? 0);
      // TODO-QSP: killvar 'husbandsexday'
    }
    if (((s as any).husbdolg ?? 0)      > 0) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['husb_debt_event'] = ((s as any).husbdolg ?? 0);
      // TODO-QSP: killvar 'husbdolg'
    }
    if (((s as any).before_h_guy ?? 0) > 0) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['men_fucked_before'] = ((s as any).before_h_guy ?? 0) - ((s as any).guy_cheat ?? 0);
    }
    if (((s as any).before_h_girl ?? 0) > 0) {
      ((s as any).spouseVars = (s as any).spouseVars ?? {})['women_fucked_before'] = ((s as any).before_h_girl ?? 0) - ((s as any).girl_cheat ?? 0);
    }
    if (((s as any).subscription ?? 0)?.['monthly_calls-discount'] < 0) {
      // TODO-QSP: subscription['monthly_calls-discount'] *= -1
    }
    if (((s as any).subscription ?? 0)?.['mobile-discount'] < 0) {
      // TODO-QSP: subscription['mobile-discount'] *= -1
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['max_i'] = 0;
    if (((s as any).saveupdaterVars ?? 0)?.['max_i'] > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      // TODO-QSP: :home_internet_subscription_loop
      if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] + '-date'] > 28) {
        // TODO-QSP: subscription[$property_code[saveupdaterVars['i']] + '-date'] = 1
      }
      if ((((s as any).property_status ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] === 1  ||  ((s as any).property_status ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] === 2)  &&  ((s as any).subscription ?? 0)[((s as any).property_code ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']]] === 1) {
        if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)[((s as any).saveupdaterVars ?? 0)?.['i']] + '-suspension_day'] > 0) {
          // TODO-QSP: subscription[$property_code[saveupdaterVars['i']] + '-suspension_day'] += daystart - day
        }
      }
      // TODO-QSP: gs 'array', 'remove_element', 'subscription', $property_code[saveupdaterVars['i']] + '-suspension_mo...
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['max_i']) {
        // TODO-QSP: jump 'home_internet_subscription_loop'
      }
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
      // TODO-QSP: killvar 'SchoolAtestat'
    }
    if (((s as any).school_check_day ?? 0)  !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['last_attendance'] = ((s as any).school_check_day ?? 0);
      // TODO-QSP: killvar 'school_check_day'
    }
    if (((s as any).schoolProgulDay ?? 0)  !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['last_absence'] = ((s as any).schoolProgulDay ?? 0);
      // TODO-QSP: killvar 'schoolProgulDay'
    }
    if (((s as any).schoolprogul ?? 0)    !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['absence_count'] = ((s as any).schoolprogul ?? 0);
      // TODO-QSP: killvar 'schoolprogul'
    }
    if (((s as any).BeInSchool ?? 0)    !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['attendance_count'] = ((s as any).BeInSchool ?? 0);
      // TODO-QSP: killvar 'BeInSchool'
    }
    if (((s as any).schoolBlock ?? 0)    !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['block'] = ((s as any).schoolBlock ?? 0);
      // TODO-QSP: killvar 'schoolBlock'
    }
    if (((s as any).schoolPredupr ?? 0)  !== 0) {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['expell_stage'] = ((s as any).schoolPredupr ?? 0);
      // TODO-QSP: killvar 'schoolPredupr'
    }
    if (((s as any).camGirl ?? 0)?.['MFC_account'] === 1) {
      if (((s as any).camGirl ?? 0)?.['MFC_last_online'] === 0) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_last_online'] = ((s as any).daystart ?? 0);
      }
      if (((s as any).camGirl ?? 0)?.['MFC_maxFollowers'] < ((s as any).camGirl ?? 0)?.['MFC_Followers']) {
        ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_maxFollowers'] = ((s as any).camGirl ?? 0)?.['MFC_Followers'];
      }
    }
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A64'] = 19650523;
    if (((s as any).huntersAndreiLove ?? 0)      !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiLove'] = ((s as any).huntersAndreiLove ?? 0);
      // TODO-QSP: killvar 'huntersAndreiLove'
    }
    if (((s as any).huntersAndreiQw ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['AndreiQw'] = ((s as any).huntersAndreiQw ?? 0);
      // TODO-QSP: killvar 'huntersAndreiQw'
    }
    if (((s as any).huntersAndreisex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Andreisex'] = ((s as any).huntersAndreisex ?? 0);
      // TODO-QSP: killvar 'huntersAndreisex'
    }
    if (((s as any).huntersIgorLove ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorLove'] = ((s as any).huntersIgorLove ?? 0);
      // TODO-QSP: killvar 'huntersIgorLove'
    }
    if (((s as any).huntersIgorQW ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['IgorQW'] = ((s as any).huntersIgorQW ?? 0);
      // TODO-QSP: killvar 'huntersIgorQW'
    }
    if (((s as any).huntersIgorsex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Igorsex'] = ((s as any).huntersIgorsex ?? 0);
      // TODO-QSP: killvar 'huntersIgorsex'
    }
    if (((s as any).huntersKnowSlut ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['KnowSlut'] = ((s as any).huntersKnowSlut ?? 0);
      // TODO-QSP: killvar 'huntersKnowSlut'
    }
    if (((s as any).huntersRape ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Rape'] = ((s as any).huntersRape ?? 0);
      // TODO-QSP: killvar 'huntersRape'
    }
    if (((s as any).huntersSergeiLove ?? 0)      !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['SergeiLove'] = ((s as any).huntersSergeiLove ?? 0);
      // TODO-QSP: killvar 'huntersSergeiLove'
    }
    if (((s as any).huntersSergeiQw ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['SergeiQw'] = ((s as any).huntersSergeiQw ?? 0);
      // TODO-QSP: killvar 'huntersSergeiQw'
    }
    if (((s as any).huntersSergeisex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['Sergeisex'] = ((s as any).huntersSergeisex ?? 0);
      // TODO-QSP: killvar 'huntersSergeisex'
    }
    if (((s as any).huntersVagSex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['VagSex'] = ((s as any).huntersVagSex ?? 0);
      // TODO-QSP: killvar 'huntersVagSex'
    }
    if (((s as any).hunters_available ?? 0)      !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['available'] = ((s as any).hunters_available ?? 0);
      // TODO-QSP: killvar 'hunters_available'
    }
    if (((s as any).hunters_bj_times ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['bj_times'] = ((s as any).hunters_bj_times ?? 0);
      // TODO-QSP: killvar 'hunters_bj_times'
    }
    if (((s as any).hunters_breakfast ?? 0)      !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['breakfast'] = ((s as any).hunters_breakfast ?? 0);
      // TODO-QSP: killvar 'hunters_breakfast'
    }
    if (((s as any).hunters_chattime ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['chattime'] = ((s as any).hunters_chattime ?? 0);
      // TODO-QSP: killvar 'hunters_chattime'
    }
    if (((s as any).hunters_check ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['check'] = ((s as any).hunters_check ?? 0);
      // TODO-QSP: killvar 'hunters_check'
    }
    if (((s as any).hunters_dinner ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['dinner'] = ((s as any).hunters_dinner ?? 0);
      // TODO-QSP: killvar 'hunters_dinner'
    }
    if (((s as any).hunters_drink ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['drink'] = ((s as any).hunters_drink ?? 0);
      // TODO-QSP: killvar 'hunters_drink'
    }
    if (((s as any).hunters_evening ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['evening'] = ((s as any).hunters_evening ?? 0);
      // TODO-QSP: killvar 'hunters_evening'
    }
    if (((s as any).hunters_hunting ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['hunting'] = ((s as any).hunters_hunting ?? 0);
      // TODO-QSP: killvar 'hunters_hunting'
    }
    if (((s as any).hunters_inside ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['inside'] = ((s as any).hunters_inside ?? 0);
      // TODO-QSP: killvar 'hunters_inside'
    }
    if (((s as any).hunters_kuni ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['kuni'] = ((s as any).hunters_kuni ?? 0);
      // TODO-QSP: killvar 'hunters_kuni'
    }
    if (((s as any).hunters_lunch ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['lunch'] = ((s as any).hunters_lunch ?? 0);
      // TODO-QSP: killvar 'hunters_lunch'
    }
    if (((s as any).hunters_outside ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['outside'] = ((s as any).hunters_outside ?? 0);
      // TODO-QSP: killvar 'hunters_outside'
    }
    if (((s as any).hunters_sleep ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['sleep'] = ((s as any).hunters_sleep ?? 0);
      // TODO-QSP: killvar 'hunters_sleep'
    }
    if (((s as any).hunters_violent ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['violent'] = ((s as any).hunters_violent ?? 0);
      // TODO-QSP: killvar 'hunters_violent'
    }
    if (((s as any).hunters_were_met ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['were_met'] = ((s as any).hunters_were_met ?? 0);
      // TODO-QSP: killvar 'hunters_were_met'
    }
    if (((s as any).huntersbreakfast ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['breakfastday'] = ((s as any).huntersbreakfast ?? 0);
      // TODO-QSP: killvar 'huntersbreakfast'
    }
    if (((s as any).hunterscabin ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['cabin'] = ((s as any).hunterscabin ?? 0);
      // TODO-QSP: killvar 'hunterscabin'
    }
    if (((s as any).huntersdrinking ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['drinking'] = ((s as any).huntersdrinking ?? 0);
      // TODO-QSP: killvar 'huntersdrinking'
    }
    if (((s as any).huntersexnude ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexnude'] = ((s as any).huntersexnude ?? 0);
      // TODO-QSP: killvar 'huntersexnude'
    }
    if (((s as any).huntersknowfilm ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowfilm'] = ((s as any).huntersknowfilm ?? 0);
      // TODO-QSP: killvar 'huntersknowfilm'
    }
    if (((s as any).huntersknowfoto ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowfoto'] = ((s as any).huntersknowfoto ?? 0);
      // TODO-QSP: killvar 'huntersknowfoto'
    }
    if (((s as any).huntersknowstrip ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowstrip'] = ((s as any).huntersknowstrip ?? 0);
      // TODO-QSP: killvar 'huntersknowstrip'
    }
    if (((s as any).hunterslut ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['slut'] = ((s as any).hunterslut ?? 0);
      // TODO-QSP: killvar 'hunterslut'
    }
    if (((s as any).huntersmokBJ ?? 0)          !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['smokeBJ'] = ((s as any).huntersmokBJ ?? 0);
      // TODO-QSP: killvar 'huntersmokBJ'
    }
    if (((s as any).hunterstableBJ ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJ'] = ((s as any).hunterstableBJ ?? 0);
      // TODO-QSP: killvar 'hunterstableBJ'
    }
    if (((s as any).hunterstableBJA ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJA'] = ((s as any).hunterstableBJA ?? 0);
      // TODO-QSP: killvar 'hunterstableBJA'
    }
    if (((s as any).hunterstableBJI ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJI'] = ((s as any).hunterstableBJI ?? 0);
      // TODO-QSP: killvar 'hunterstableBJI'
    }
    if (((s as any).hunterstableBJS ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['tableBJS'] = ((s as any).hunterstableBJS ?? 0);
      // TODO-QSP: killvar 'hunterstableBJS'
    }
    if (((s as any).hunter_refuse ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['refuse'] = ((s as any).hunter_refuse ?? 0);
      // TODO-QSP: killvar 'hunter_refuse'
    }
    if (((s as any).hunterknowday ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['knowday'] = ((s as any).hunterknowday ?? 0);
      // TODO-QSP: killvar 'hunterknowday'
    }
    if (((s as any).forest_huntersex ?? 0)        !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['forest_sex'] = ((s as any).forest_huntersex ?? 0);
      // TODO-QSP: killvar 'forest_huntersex'
    }
    if (((s as any).hunter_sexual_comfort ?? 0)    !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunter_sexual_comfort ?? 0);
      // TODO-QSP: killvar 'hunter_sexual_comfort'
    }
    if (((s as any).hunter_collective_opinion ?? 0)  !== 0) {
      ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunter_collective_opinion ?? 0);
      // TODO-QSP: killvar 'hunter_collective_opinion'
    }
    if (((s as any).underwear ?? 0)?.['lastworntype'] !== 0) {
      (s as any).lastwornunderwear = ((s as any).underwear ?? 0)?.['lastworntype'];
      qspCall(s, 'array', 'remove_element', 'underwear', 'lastworntype');
    }
    if (Object.keys((s as any).npc_kissed ?? {}).length > 0) {
      // TODO-QSP: copyarr('npc_kissed_count', 'npc_kissed')
    }
    if (Object.keys((s as any).npc_jerked ?? {}).length > 0) {
      // TODO-QSP: copyarr('npc_handstuff_count', 'npc_jerked')
    }
    if (Object.keys((s as any).npc_blown ?? {}).length > 0) {
      // TODO-QSP: copyarr('npc_oral_count', 'npc_blown')
    }
    if (Object.keys((s as any).npc_titfucked ?? {}).length > 0) {
      // TODO-QSP: copyarr('npc_titstuff_count', 'npc_titfucked')
    }
    if (Object.keys((s as any).npc_sex ?? {}).length > 0) {
      // TODO-QSP: copyarr('npc_had_sex', 'npc_sex')
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
      if (((s as any).saveupdaterVars ?? 0)?.['maxi'] > 0) {
        // TODO-QSP: :npc_had_sex_loop
        // TODO-QSP: npc_had_sex[saveupdaterVars['i']] = min(max(0, npc_had_sex[saveupdaterVars['i']]), 1)
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']) {
          // TODO-QSP: jump 'npc_had_sex_loop'
        }
      }
      // TODO-QSP: copyarr('npc_vaginal_count', 'npc_sex')
    }
    if (Object.keys((s as any).npc_anal_fucked ?? {}).length > 0) {
      // TODO-QSP: copyarr('npc_anal_count', 'npc_anal_fucked')
    }
    if (((s as any).sosedKnowWork ?? 0)  !== 0) {
      ((s as any).neighborQW = (s as any).neighborQW ?? {})['knows_work'] = ((s as any).sosedKnowWork ?? 0);
      // TODO-QSP: killvar 'sosedKnowWork'
    }
    if (((s as any).sosedQW ?? 0)      !== 0) {
      ((s as any).neighborQW = (s as any).neighborQW ?? {})['state'] = ((s as any).sosedQW ?? 0);
      // TODO-QSP: killvar 'sosedQW'
    }
    if (((s as any).workPTU ?? 0)      !== 0) {
      ((s as any).teacher = (s as any).teacher ?? {})['job'] = ((s as any).workPTU ?? 0);
      // TODO-QSP: killvar 'workPTU'
    }
    if (((s as any).teachlevel ?? 0)    !== 0) {
      ((s as any).teacher = (s as any).teacher ?? {})['level'] = ((s as any).teachlevel ?? 0);
      // TODO-QSP: killvar 'teachlevel'
    }
    if (((s as any).izvad ?? 0)      !== 0) {
      ((s as any).teacher = (s as any).teacher ?? {})['apology'] = ((s as any).izvad ?? 0);
      // TODO-QSP: killvar 'izvad'
    }
    if (((s as any).gor_dorm ?? 0)      !== 0) {
      ((s as any).hostel = (s as any).hostel ?? {})['status'] = ((s as any).gor_dorm ?? 0);
      // TODO-QSP: killvar 'gor_dorm'
    }
    if (((s as any).pzptu ?? 0)      !== 0) {
      ((s as any).teacher = (s as any).teacher ?? {})['class_state'] = ((s as any).pzptu ?? 0);
      // TODO-QSP: killvar 'pzptu'
    }
    if (((s as any).etoexhib ?? 0)      !== 0) {
      ((s as any).exhib = (s as any).exhib ?? {})['status'] = ((s as any).etoexhib ?? 0);
      // TODO-QSP: killvar 'etoexhib'
    }
    if (((s as any).stolcigarettes ?? 0) !== 0) {
      (s as any).temp_stol = qspFunc(s, 'homes_properties_attr', 'get_property_attribute', '$bedroom', ((s as any).home ?? 0)?.['current']);
      ((s as any).stolcigarettes = (s as any).stolcigarettes ?? {})[String((s as any).temp_stol ?? 0)] = ((s as any).stolcigarettes ?? 0);
      (s as any).stolcigarettes = 0;
    }
    if (Object.keys((s as any).npc_last_sex ?? {}).length > 0) {
      // TODO-QSP: copyarr('npc_last_vaginal', 'npc_last_sex')
    }
    if (Object.keys((s as any).shared_apt ?? {}).length > 0  &&  ((s as any).shared_apt ?? 0)?.['Enabled'] === 0) {
      (s as any).servitudelvl_bak = ((s as any).shared_apt ?? 0)?.['servitudeLvl'];
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['seenAd'] = 1;
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['previousTenant'] = 1;
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = ((s as any).servitudelvl_bak ?? 0);
    }
    if (((s as any).stat ?? 0)?.['hj'] > 0) {
      if (((s as any).stat ?? 0)?.['men_jerked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_jerked_times'] = ((s as any).stat ?? 0)?.['hj'];
      }
      if (((s as any).stat ?? 0)?.['men_jerked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_jerked'] = ((s as any).stat ?? 0)?.['hj'];
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_hj'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_jerked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_jerked_times'] = ((s as any).stat ?? 0)?.['hidden_hj'];
      }
      if (((s as any).stat ?? 0)?.['men_hidden_jerked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_jerked'] = ((s as any).stat ?? 0)?.['hidden_hj'];
      }
    }
    if (((s as any).stat ?? 0)?.['footjob'] > 0) {
      if (((s as any).stat ?? 0)?.['men_feetfucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_feetfucked_times'] = ((s as any).stat ?? 0)?.['footjob'];
      }
      if (((s as any).stat ?? 0)?.['men_feetfucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_feetfucked'] = ((s as any).stat ?? 0)?.['footjob'];
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_footjob'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_feetfucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_feetfucked_times'] = ((s as any).stat ?? 0)?.['hidden_footjob'];
      }
      if (((s as any).stat ?? 0)?.['men_hidden_feetfucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_feetfucked'] = ((s as any).stat ?? 0)?.['hidden_footjob'];
      }
    }
    if (((s as any).stat ?? 0)?.['titjob'] > 0) {
      if (((s as any).stat ?? 0)?.['men_titfucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_titfucked_times'] = ((s as any).stat ?? 0)?.['titjob'];
      }
      if (((s as any).stat ?? 0)?.['men_titfucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_titfucked'] = ((s as any).stat ?? 0)?.['titjob'];
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_titjob'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_titfucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_titfucked_times'] = ((s as any).stat ?? 0)?.['hidden_titjob'];
      }
      if (((s as any).stat ?? 0)?.['men_hidden_titfucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_titfucked'] = ((s as any).stat ?? 0)?.['hidden_titjob'];
      }
    }
    if (((s as any).stat ?? 0)?.['bj'] > 0) {
      if (((s as any).stat ?? 0)?.['men_blown_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_blown_times'] = ((s as any).stat ?? 0)?.['bj'];
      }
      if (((s as any).stat ?? 0)?.['men_blown'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_blown'] = ((s as any).stat ?? 0)?.['bj'];
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_bj'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_blown_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_blown_times'] = ((s as any).stat ?? 0)?.['hidden_bj'];
      }
      if (((s as any).stat ?? 0)?.['men_hidden_blown'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_blown'] = ((s as any).stat ?? 0)?.['hidden_bj'];
      }
    }
    if (((s as any).stat ?? 0)?.['cuni_give'] > 0) {
      if (((s as any).stat ?? 0)?.['women_munched_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_munched_times'] = ((s as any).stat ?? 0)?.['cuni_give'];
      }
      if (((s as any).stat ?? 0)?.['women_munched'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_munched'] = ((s as any).stat ?? 0)?.['cuni_give'];
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_cuni_give'] > 0) {
      if (((s as any).stat ?? 0)?.['women_hidden_munched_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_hidden_munched_times'] = ((s as any).stat ?? 0)?.['hidden_cuni_give'];
      }
      if (((s as any).stat ?? 0)?.['women_hidden_munched'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_hidden_munched'] = ((s as any).stat ?? 0)?.['hidden_cuni_give'];
      }
    }
    if (((s as any).stat ?? 0)?.['vaginal'] > 0) {
      if (((s as any).stat ?? 0)?.['men_vaginal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_vaginal_fucked_times'] = ((s as any).stat ?? 0)?.['vaginal'];
      }
      if (((s as any).stat ?? 0)?.['men_vaginal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_vaginal_fucked'] = ((s as any).stat ?? 0)?.['vaginal'];
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_vaginal'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_vaginal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_vaginal_fucked_times'] = ((s as any).stat ?? 0)?.['hidden_vaginal'];
      }
      if (((s as any).stat ?? 0)?.['men_hidden_vaginal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_vaginal_fucked'] = ((s as any).stat ?? 0)?.['hidden_vaginal'];
      }
    }
    if (((s as any).stat ?? 0)?.['trib'] > 0) {
      if (((s as any).stat ?? 0)?.['women_vaginal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_vaginal_fucked_times'] = ((s as any).stat ?? 0)?.['trib'];
      }
      if (((s as any).stat ?? 0)?.['women_vaginal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_vaginal_fucked'] = ((s as any).stat ?? 0)?.['trib'];
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_trib'] > 0) {
      if (((s as any).stat ?? 0)?.['women_hidden_vaginal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_hidden_vaginal_fucked_times'] = ((s as any).stat ?? 0)?.['hidden_trib'];
      }
      if (((s as any).stat ?? 0)?.['women_hidden_vaginal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_hidden_vaginal_fucked'] = ((s as any).stat ?? 0)?.['hidden_trib'];
      }
    }
    if (((s as any).stat ?? 0)?.['anal'] > 0) {
      if (((s as any).stat ?? 0)?.['men_anal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_anal_fucked_times'] = ((s as any).stat ?? 0)?.['anal'];
      }
      if (((s as any).stat ?? 0)?.['men_anal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_anal_fucked'] = ((s as any).stat ?? 0)?.['anal'];
      }
    }
    if (((s as any).stat ?? 0)?.['hidden_anal'] > 0) {
      if (((s as any).stat ?? 0)?.['men_hidden_anal_fucked_times'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_anal_fucked_times'] = ((s as any).stat ?? 0)?.['hidden_anal'];
      }
      if (((s as any).stat ?? 0)?.['men_hidden_anal_fucked'] === 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_hidden_anal_fucked'] = ((s as any).stat ?? 0)?.['hidden_anal'];
      }
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['maxi'] = 0;
    if (((s as any).saveupdaterVars ?? 0)?.['maxi'] > 0) {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
      // TODO-QSP: :evt_content_code_fix_960
      if (((String(qspUntranslated(s, "evt_content_code[\u00000\u0000]", { location: "saveupdater" })).indexOf(String('shop_photograpy'))) + 1) >= 0) {
        // TODO-QSP: $evt_content_code[saveupdaterVars['i']] = $replace($evt_content_code[saveupdaterVars['i']], 'shop_ph...
      }
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] < ((s as any).saveupdaterVars ?? 0)?.['maxi']) {
        // TODO-QSP: jump 'evt_content_code_fix_960'
      }
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90601) {
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 8  &&  ((s as any).NatbelQW ?? 0)?.['shopping'] === 4) {
      ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['shopping'] = 3;
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
      ((s as any).stat = (s as any).stat ?? {})['women_vaginal_fucked'] = ((s as any).stat['women_vaginal_fucked'] ?? 0) + (((s as any).stat ?? 0)?.['women_vag_fucked']);
      qspCall(s, 'array', 'remove_element', 'stat', 'women_vag_fucked');
    }
    if (((s as any).stat ?? 0)?.['herm_vag_fucked'] > 0) {
      ((s as any).stat = (s as any).stat ?? {})['herm_vaginal_fucked'] = ((s as any).stat['herm_vaginal_fucked'] ?? 0) + (((s as any).stat ?? 0)?.['herm_vag_fucked']);
      qspCall(s, 'array', 'remove_element', 'stat', 'herm_vag_fucked');
    }
    // TODO-QSP: dynamic "if step > 0: brothel['step'] = step & killvar 'step'" & !! dynamic, so "step" doesn''t brea...
    if (((s as any).addictive_trait_lvl ?? 0)  > 0) {
      ((s as any).traits = (s as any).traits ?? {})['addictive_personality'] = ((s as any).addictive_trait_lvl ?? 0);
      // TODO-QSP: killvar 'addictive_trait_lvl'
    }
    if (((s as any).add_trait_msg_1 ?? 0)    > 0) {
      ((s as any).traits = (s as any).traits ?? {})['addictive_personality_msg_1'] = ((s as any).add_trait_msg_1 ?? 0);
      // TODO-QSP: killvar 'add_trait_msg_1'
    }
    if (((s as any).add_trait_msg_2 ?? 0)    > 0) {
      ((s as any).traits = (s as any).traits ?? {})['addictive_personality_msg_2'] = ((s as any).add_trait_msg_2 ?? 0);
      // TODO-QSP: killvar 'add_trait_msg_1'
    }
    if (((s as any).add_trait_msg_3 ?? 0)    > 0) {
      ((s as any).traits = (s as any).traits ?? {})['addictive_personality_msg_3'] = ((s as any).add_trait_msg_3 ?? 0);
      // TODO-QSP: killvar 'add_trait_msg_1'
    }
    if (((s as any).painMod ?? 0)?.['ankles'] === 0) {
      // TODO-QSP: killvar 'painMod'
    }
    if (((s as any).natholi ?? 0) > 0) {
      (s as any).is_natholi = ((s as any).natholi ?? 0);
      // TODO-QSP: killvar 'natholi'
    }
    if (((s as any).set_imgh ?? 0) > 0) {
      (s as any).imgh = ((s as any).set_imgh ?? 0);
      // TODO-QSP: killvar 'set_imgh'
    }
    if (((s as any).set_statimgh ?? 0) > 0) {
      (s as any).stat_imgh = ((s as any).set_statimgh ?? 0);
      // TODO-QSP: killvar 'set_statimgh'
    }
    if (((s as any).stat_imgh ?? 0) === 0  &&  (!((s as any).set_statimgw ?? 0))) {
      (s as any).set_statimgw = 220;
    }
    if (((s as any).phone_loc ?? 0) !== ''  &&  ((s as any).phone_loc ?? 0)?.['class'] === '') {
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['phone_loc0'] = ((s as any).phone_loc ?? 0);
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['phone_loc1'] = qspUntranslated(s, "phone_loc[1]", { location: "saveupdater" });
      ((s as any).phone_loc = (s as any).phone_loc ?? {})['class'] = ((s as any).saveupdaterVars ?? 0)?.['phone_loc0'];
      ((s as any).phone_loc = (s as any).phone_loc ?? {})['type'] = ((s as any).saveupdaterVars ?? 0)?.['phone_loc1'];
    }
    if (((s as any).selfieTitflash ?? 0)[1] > 0) {
      qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
    }
    if (((s as any).PShoHeels ?? 0) > 2  &&  ((s as any).PShoPain ?? 0)?.['mild'] === 0) {
      qspCall(s, 'shoe_attributes', '', ((s as any).shoeworntype ?? 0), ((s as any).shoewornnumber ?? 0));
      ((s as any).PShoPain = (s as any).PShoPain ?? {})['severe'] = ((s as any).ShoPain ?? 0)?.['severe'];
      ((s as any).PShoPain = (s as any).PShoPain ?? {})['medium'] = ((s as any).ShoPain ?? 0)?.['medium'];
      ((s as any).PShoPain = (s as any).PShoPain ?? {})['mild'] = ((s as any).ShoPain ?? 0)?.['mild'];
    }
    if (((s as any).loc ?? 0) === 'uni_grounds'  &&  ((s as any).loc_arg ?? 0) === 'main') {
      qspCall(s, 'core_library', 'setloc', 'uni_grounds', '');
    } else {
      if (((s as any).loc ?? 0) === 'uni_dorm'  &&  ((s as any).loc_arg ?? 0) === 'start') {
        qspCall(s, 'core_library', 'setloc', 'uni_dorm', '');
        ((s as any).uni_dorm = (s as any).uni_dorm ?? {})['floor'] = '';
      }
    }
    if (((s as any).telefon ?? 0)?.['SMSid'] > 0) {
      ((s as any).telefon = (s as any).telefon ?? {})['SMSIndex'] = ((s as any).telefon ?? 0)?.['SMSid'];
      qspCall(s, 'array', 'remove_element', 'telefon', 'SMSid');
    }
    if (((s as any).npc_vag ?? 0)?.['A14'] > 0  &&  ((s as any).npc_vag ?? 0)?.['A14'] < 20) {
      ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = 20;
    }
    if ((!((s as any).npcupdate09070 ?? 0))) {
      (s as any).npcupdate09070 = 1;
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 1;
      // TODO-QSP: :anpc_update09070
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['ID'] = 'A' + ((s as any).saveupdaterVars ?? 0)?.['i'];
      if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['ID']] === 0) {
        // TODO-QSP: npc_spermvol[$saveupdaterVars['ID']] = 40
      } else {
        // TODO-QSP: npc_spermvol[$saveupdaterVars['ID']] = -1
      }
      ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
      if (((s as any).saveupdaterVars ?? 0)?.['i'] <= ((s as any).aarraynumber ?? 0)) {
        // TODO-QSP: jump 'anpc_update09070'
      }
      if (Object.keys((s as any).npc_index ?? {}).length > 0) {
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 0;
        // TODO-QSP: :bnpc_update09070
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['ID'] = qspUntranslated(s, "npc_index[saveupdaterVars['i']]", { location: "saveupdater" });
        if (((s as any).npc_gender ?? 0)[((s as any).saveupdaterVars ?? 0)?.['ID']] === 0) {
          // TODO-QSP: npc_spermvol[$saveupdaterVars['ID']] = 40
        } else {
          // TODO-QSP: npc_spermvol[$saveupdaterVars['ID']] = -1
        }
        ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
        if (((s as any).saveupdaterVars ?? 0)?.['i'] < Object.keys((s as any).npc_index ?? {}).length) {
          // TODO-QSP: jump 'bnpc_update09070'
        }
      }
      qspCall(s, 'npc', 'npcStat_update_all');
    }
    if (((s as any).checkimg ?? 0)  !== '') {
      // TODO-QSP: killvar 'checkimg'
    }
    if (((s as any).selection ?? 0)  !== '') {
      // TODO-QSP: killvar 'selection'
    }
    if (((s as any).displaynum ?? 0)  !== '') {
      // TODO-QSP: killvar 'displaynum'
    }
    if (((s as any).contracting ?? 0)  !== '') {
      // TODO-QSP: killvar 'contracting'
    }
    if (((s as any).canceling ?? 0)  !== '') {
      // TODO-QSP: killvar 'canceling'
    }
    if (Object.keys((s as any).weatherGrM ?? {}).length > 0) {
      if (Object.keys((s as any).weatherGrM ?? {}).length > 1) {
        // TODO-QSP: weatherTemper *= 10
      }
      qspCall(s, 'outdoors', 'set_weather_TempFall');
      ((s as any).sunWeather = (s as any).sunWeather ?? {})[1] = ((s as any).totminut ?? 0) + 60;
    }
    if ((!((s as any).day_of_year ?? 0))) {
      qspCall(s, 'time', 'to_date', ((s as any).daystart ?? 0));
      (s as any).day_of_year = ((s as any).dateVars ?? 0)?.['day_of_year'];
    }
    if (((s as any).bankAccount ?? 0) === 1  &&  (!((s as any).bankShortCutMoney ?? 0))) {
      (s as any).bankShortCutMoney = 1000;
    }
    if (((s as any).suclezsex ?? 0) > ((s as any).stat ?? 0)?.['female_sexual_times']) {
      (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90800) {
    qspCall(s, 'setup_dynamics', '');
    if (((s as any).theme ?? 0)?.['name'] === ''  ||  ((s as any).theme ?? 0)?.['type'] === '') {
      ((s as any).theme = (s as any).theme ?? {})['name'] = 'Dynamic Default';
      ((s as any).theme = (s as any).theme ?? {})['type'] = 'dynamic';
      qspCall(s, 'themes', 'set_theme', 'Dynamic Default', 'dynamic');
    }
    if (((s as any).theme_main_name ?? 0) === '') {
      (s as any).theme_main_name = 'Default';
    }
    if (((s as any).theme ?? 0)?.['type'] === 'dynamic') {
      (s as any).themetype = 0;
    } else {
      (s as any).themetype = 1;
    }
    ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['std_cure'] = '';
    if (((s as any).pcs_childtrauma ?? 0) !== 0) {
      (s as any).mood_trauma = ((s as any).mood_trauma ?? 0) + (((s as any).pcs_childtrauma ?? 0));
      // TODO-QSP: killvar 'pcs_childtrauma'
    }
    if (((s as any).calendar_hide_night_hours ?? 0) !== 0) {
      (s as any).calendar_show_night_hours = 0;
      // TODO-QSP: killvar 'calendar_hide_night_hours'
    }
    if (Object.keys((s as any).music_on ?? {}).length > 0) {
      if (((s as any).music_on ?? 0) === 0  &&  Object.keys((s as any).sound_settings ?? {}).length === 0) {
        ((s as any).sound_settings = (s as any).sound_settings ?? {})['music_off'] = 1;
      }
    }
    if (((s as any).prava ?? 0)       !== 0) {
      ((s as any).license = (s as any).license ?? {})['drive'] = ((s as any).prava ?? 0);
      // TODO-QSP: killvar 'prava'
    }
    if (((s as any).skulday ?? 0)       !== 0) {
      ((s as any).license = (s as any).license ?? {})['drive_lastday'] = ((s as any).skulday ?? 0);
      // TODO-QSP: killvar 'skulday'
    }
    if (((s as any).masseuse_lesson ?? 0)   !== 0) {
      ((s as any).license = (s as any).license ?? {})['masseuse_lastday'] = ((s as any).masseuse_lesson ?? 0);
      // TODO-QSP: killvar 'masseuse_lesson'
    }
    if (((s as any).vokalday ?? 0)     !== 0) {
      ((s as any).license = (s as any).license ?? {})['singing_lastday'] = ((s as any).vokalday ?? 0);
      // TODO-QSP: killvar 'vokalday'
    }
    if (((s as any).secrday ?? 0)       !== 0) {
      ((s as any).license = (s as any).license ?? {})['secretary_lastday'] = ((s as any).secrday ?? 0);
      // TODO-QSP: killvar 'secrday'
    }
    if (((s as any).secretary ?? 0)?.['certification'] >= 12) {
      ((s as any).license = (s as any).license ?? {})['secretary'] = 1;
      // TODO-QSP: killvar 'secretary'
    }
    if (((s as any).secretary ?? 0)?.['certification'] > 1) {
      ((s as any).license = (s as any).license ?? {})['secretary_enrolled'] = 1;
      ((s as any).license = (s as any).license ?? {})['secretary_lessons'] = ((s as any).secretary ?? 0)?.['certification'];
    }
    if (((s as any).avtoskul ?? 0) !== 0) {
      ((s as any).license = (s as any).license ?? {})['drive_enrolled'] = 1;
      ((s as any).license = (s as any).license ?? {})['drive_lessons'] = ((s as any).avtoskul ?? 0);
      // TODO-QSP: killvar 'avtoskul'
    }
    if (((s as any).masseuse ?? 0)?.['certification'] >= 10) {
      ((s as any).license = (s as any).license ?? {})['masseuse'] = 1;
      qspCall(s, 'array', 'remove_element', 'masseuse', 'certification');
    }
    if (((s as any).masseuse ?? 0)?.['certification'] > 0) {
      ((s as any).license = (s as any).license ?? {})['masseuse_enrolled'] = 1;
      ((s as any).license = (s as any).license ?? {})['masseuse_lessons'] = ((s as any).masseuse ?? 0)?.['certification'];
      qspCall(s, 'array', 'remove_element', 'masseuse', 'certification');
    } else {
      if (((s as any).masseuse ?? 0)?.['certification'] < 0) {
        ((s as any).license = (s as any).license ?? {})['masseuse_enrolled'] = 1;
        ((s as any).license = (s as any).license ?? {})['masseuse_lessons'] = 0;
        qspCall(s, 'array', 'remove_element', 'masseuse', 'certification');
      }
    }
    if (((s as any).npc_usedname ?? 0)?.['D1'] === '') {
      qspCall(s, 'npcstatic_dildos', '');
    }
    if (((s as any).bed ?? 0)?.['shoetype'] !== ''  &&  ((s as any).lastwornshoetype ?? 0)?.['bed'] === '') {
      ((s as any).lastwornshoetype = (s as any).lastwornshoetype ?? {})['bed'] = ((s as any).bed ?? 0)?.['shoetype'];
      ((s as any).lastwornshoenumber = (s as any).lastwornshoenumber ?? {})['bed'] = ((s as any).bed ?? 0)?.['shoenumber'];
    }
    if (((s as any).lastworncoattype ?? 0)?.['bed'] === '') {
      ((s as any).lastworncoattype = (s as any).lastworncoattype ?? {})['bed'] = ((s as any).coatworntype ?? 0);
      ((s as any).lastworncoatnumber = (s as any).lastworncoatnumber ?? {})['bed'] = ((s as any).coatwornnumber ?? 0);
    }
    if (((s as any).lastworncoattype ?? 0)?.['bed'] === '') {
      ((s as any).lastworncoattype = (s as any).lastworncoattype ?? {})['bed'] = ((s as any).coatworntype ?? 0);
      ((s as any).lastworncoatnumber = (s as any).lastworncoatnumber ?? {})['bed'] = ((s as any).coatwornnumber ?? 0);
    }
    if (((s as any).lastwornpursetype ?? 0)?.['bed'] === '') {
      ((s as any).lastwornpursetype = (s as any).lastwornpursetype ?? {})['bed'] = ((s as any).currentpursetype ?? 0);
      ((s as any).lastwornpursenumber = (s as any).lastwornpursenumber ?? {})['bed'] = ((s as any).currentpursenumber ?? 0);
    }
    qspCall(s, 'stat_sklattrib', 'init_vars');
    if (((s as any).checkoutalbina ?? 0)        !== 0) {
      ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['voyeur'] = ((s as any).checkoutalbina ?? 0);
      // TODO-QSP: killvar 'checkoutalbina'
    }
    if ((!((s as any).calendar_temp_new_flag ?? 0))) {
      if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
        qspCall(s, 'calendar', 'add', 'volleyball_tournament');
      }
      (s as any).calendar_temp_new_flag = 1;
      (s as any).temp_index = 0;
      // TODO-QSP: :calendar_update_loop_v098
      (s as any).temp_event = ((s as any).events_list ?? 0)?.[String((s as any).temp_index ?? 0)];
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'school') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['school'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'therapist') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['therapist'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'disco') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['disco'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'train') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['train'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'starlets') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['starlets'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'cheer') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['cheer'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'church') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['church'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(14))) === 'pav_tour_guide') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['tour_guide'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(14))) === 'pav_hotel_maid') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['hotel_maid'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(22))) === 'pav_barbershop_cleaner') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['barbershop_cleaner'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'pav_mailgirl') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['mailgirl'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(17))) === 'pav_train_cleaner') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['train_cleaner'] = 1;
      }
      if ((String(((s as any).temp_event ?? 0)).slice((1)-1, ((1)-1)+(26))) === 'highway_brothel_prostitute') {
        ((s as any).temp_cal_events_to_add = (s as any).temp_cal_events_to_add ?? {})['brothel_prostitute'] = 1;
      }
      (s as any).temp_index = ((s as any).temp_index ?? 0) + (1);
      if (((s as any).temp_index ?? 0) < Object.keys((s as any).events_list ?? {}).length) {
        // TODO-QSP: jump 'calendar_update_loop_v098'
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['school'] === 1) {
        qspCall(s, 'calendar', 'pack', 'add', 'school');
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['therapist'] === 1) {
        qspCall(s, 'calendar', 'add', 'therapist');
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['disco'] === 1) {
        qspCall(s, 'calendar', 'add', 'disco');
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['train'] === 1) {
        qspCall(s, 'calendar', 'pack', 'add', 'intercity_trains');
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['starlets'] === 1) {
        qspCall(s, 'calendar', 'pack', 'add', 'starlets');
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['cheer'] === 1) {
        qspCall(s, 'calendar', 'pack', 'add', 'cheerleading_practice');
        if (((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 3) {
          qspCall(s, 'calendar', 'pack', 'add', 'cheerleading_games');
        }
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['church'] === 1) {
        qspCall(s, 'calendar', 'pack', 'add', 'church');
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['tour_guide'] === 1) {
        qspCall(s, 'jobs', 'create_recurring_event', 'pav_tour_guide');
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['hotel_maid'] === 1) {
        qspCall(s, 'jobs', 'create_recurring_event', 'pav_hotel_maid');
      }
      if (((s as any).temp_cal_events_to_add ?? 0)?.['mailgirl'] === 1) {
        qspCall(s, 'jobs', 'create_recurring_event', 'pav_mailgirl');
      }
    }
    if (((s as any).gpoliuborka ?? 0) >= 2) {
      qspCall(s, 'jobs', 'set_employed', 'pav_clinic_cleaner');
      // TODO-QSP: killvar 'gpoliuborka'
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pav_clinic_cleaner_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pav_clinic_cleaner_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['pav_clinic_cleaner'] === 'employed') {
        (s as any).temp_cleaner_worked = ((s as any).job_worked_count ?? 0)?.['pav_clinic_cleaner'];
        qspCall(s, 'jobs', 'cleanup_job', 'pav_clinic_cleaner');
        qspCall(s, 'jobs', 'set_employed', 'pav_clinic_cleaner');
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['pav_clinic_cleaner'] = ((s as any).temp_cleaner_worked ?? 0);
      } else {
        if (((s as any).job_status ?? 0)?.['pav_clinic_cleaner'] === 'preemployed') {
          ((s as any).job_status = (s as any).job_status ?? {})['pav_clinic_cleaner'] = '';
          ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_clinic_cleaner'] = 1;
        }
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_office_cleaner_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_office_cleaner_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['city_office_cleaner'] === '') {
        if (((s as any).clener ?? 0) >= 2) {
          ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_office_cleaner'] = 2;
          qspCall(s, 'jobs', 'set_employed', 'city_office_cleaner');
          (s as any).temp_office_shifts = ((s as any).clener ?? 0) - 2;
          if (((s as any).temp_office_shifts ?? 0) > 0) {
            ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})['city_office_cleaner'] = ((s as any).temp_office_shifts ?? 0);
          }
        } else {
          if (((s as any).clener ?? 0) === 1) {
            ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_office_cleaner'] = 1;
          }
        }
      }
      if (((s as any).clenday ?? 0) > 0) {
        ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})['city_office_cleaner'] = ((s as any).clenday ?? 0);
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_office_toilet_cleaner_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_office_toilet_cleaner_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['city_office_toilet_cleaner'] === '') {
        if (((s as any).clenerT ?? 0) >= 1) {
          ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_office_toilet_cleaner'] = 2;
          qspCall(s, 'jobs', 'set_employed', 'city_office_toilet_cleaner');
          (s as any).temp_toilet_shifts = ((s as any).clenerT ?? 0) - 1;
          if (((s as any).temp_toilet_shifts ?? 0) > 0) {
            ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})['city_office_toilet_cleaner'] = ((s as any).temp_toilet_shifts ?? 0);
          }
        }
      }
      if (((s as any).clendayT ?? 0) > 0) {
        ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})['city_office_toilet_cleaner'] = ((s as any).clendayT ?? 0);
      }
    }
    if (((s as any).germanqw ?? 0) === -1) {
      ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 1;
    }
    if (((s as any).germanqw ?? 0) === 1) {
      ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 2;
    }
    if (((s as any).germanqw ?? 0) >= 2) {
      ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 3;
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pav_hotel_maid_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pav_hotel_maid_v4'] = 1;
      if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] >= 3  ||  ((s as any).maidqw ?? 0) === 1) {
        if (((s as any).job_status ?? 0)?.['pav_hotel_maid'] === 'employed') {
          (s as any).temp_maid_worked = ((s as any).job_worked_count ?? 0)?.['pav_hotel_maid'];
          qspCall(s, 'jobs', 'cleanup_job', 'pav_hotel_maid');
          qspCall(s, 'jobs', 'set_employed', 'pav_hotel_maid');
          ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['pav_hotel_maid'] = ((s as any).temp_maid_worked ?? 0);
        } else {
          qspCall(s, 'jobs', 'set_employed', 'pav_hotel_maid');
        }
      }
      if (((s as any).maidstat ?? 0) > 0) {
        ((s as any).job_rank = (s as any).job_rank ?? {})['pav_hotel_maid'] = ((s as any).maidstat ?? 0);
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pav_mailgirl_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pav_mailgirl_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === ''  &&  ((s as any).postjobQW ?? 0) !== 0) {
        if (((s as any).postjobQW ?? 0) === 4) {
          qspCall(s, 'jobs', 'set_employed', 'pav_mailgirl');
        } else {
          if (((s as any).postjobQW ?? 0) === 1  ||  ((s as any).postjobQW ?? 0) === 2  ||  ((s as any).postjobQW ?? 0) === 3) {
            ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_mailgirl'] = ((s as any).postjobQW ?? 0);
          } else {
            if (((s as any).postjobQW ?? 0) === 999) {
              qspCall(s, 'jobs', 'set_fired', 'pav_mailgirl');
            }
          }
        }
      }
      if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === 'preemployed') {
        ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_mailgirl'] = ((s as any).job_rank ?? 0)?.['pav_mailgirl'];
        ((s as any).job_status = (s as any).job_status ?? {})['pav_mailgirl'] = '';
        ((s as any).job_rank = (s as any).job_rank ?? {})['pav_mailgirl'] = 0;
      } else {
        if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === 'terminated') {
          qspCall(s, 'jobs', 'get_job_definition', 'pav_mailgirl');
          qspCall(s, 'jobs', 'set_employed', 'pav_mailgirl');
          qspCall(s, 'jobs', 'suspend_job', 'pav_mailgirl');
        } else {
          if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === 'employed'  &&  ((s as any).job_rank ?? 0)?.['pav_mailgirl'] === 4) {
            qspCall(s, 'jobs', 'set_employed', 'pav_mailgirl');
          }
        }
      }
    }
    if (((s as any).emp_job_status ?? 0)[1] === 1) {
      qspCall(s, 'jobs', 'set_employed', 'pav_tour_guide');
      ((s as any).emp_job_status = (s as any).emp_job_status ?? {})[1] = 0;
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pav_tour_guide_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pav_tour_guide_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['pav_tour_guide'] === 'employed') {
        (s as any).temp_tg_worked = ((s as any).job_worked_count ?? 0)?.['pav_tour_guide'];
        qspCall(s, 'jobs', 'cleanup_job', 'pav_tour_guide');
        qspCall(s, 'jobs', 'set_employed', 'pav_tour_guide');
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['pav_tour_guide'] = ((s as any).temp_tg_worked ?? 0);
      }
    }
    if (((s as any).workmaid ?? 0) > 0) {
      ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['pav_hotel_maid'] = ((s as any).job_worked_count['pav_hotel_maid'] ?? 0) + (((s as any).workmaid ?? 0));
      // TODO-QSP: killvar 'workmaid'
    }
    if (((s as any).barbershop_wrk ?? 0) > 0) {
      qspCall(s, 'jobs', 'set_employed', 'pav_barbershop_cleaner');
      // TODO-QSP: killvar 'barbershop_wrk'
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pav_barbershop_cleaner_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pav_barbershop_cleaner_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['pav_barbershop_cleaner'] === 'employed') {
        (s as any).temp_bs_worked = ((s as any).job_worked_count ?? 0)?.['pav_barbershop_cleaner'];
        qspCall(s, 'jobs', 'cleanup_job', 'pav_barbershop_cleaner');
        qspCall(s, 'jobs', 'set_employed', 'pav_barbershop_cleaner');
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['pav_barbershop_cleaner'] = ((s as any).temp_bs_worked ?? 0);
      }
    }
    if (((s as any).hotelWhore ?? 0) > 0) {
      qspCall(s, 'jobs', 'set_employed', 'highway_brothel_prostitute');
      // TODO-QSP: killvar 'hotelWhore'
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['highway_brothel_prostitute_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['highway_brothel_prostitute_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['highway_brothel_prostitute'] === 'employed') {
        (s as any).temp_br_worked = ((s as any).job_worked_count ?? 0)?.['highway_brothel_prostitute'];
        qspCall(s, 'jobs', 'cleanup_job', 'highway_brothel_prostitute');
        qspCall(s, 'jobs', 'set_employed', 'highway_brothel_prostitute');
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['highway_brothel_prostitute'] = ((s as any).temp_br_worked ?? 0);
      }
    }
    if (((s as any).vokzalVork ?? 0) > 0) {
      qspCall(s, 'jobs', 'set_employed', 'pav_train_cleaner');
      // TODO-QSP: killvar 'vokzalVork'
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pav_train_cleaner_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pav_train_cleaner_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['pav_train_cleaner'] === 'employed') {
        (s as any).temp_tc_worked = ((s as any).job_worked_count ?? 0)?.['pav_train_cleaner'];
        qspCall(s, 'jobs', 'cleanup_job', 'pav_train_cleaner');
        qspCall(s, 'jobs', 'set_employed', 'pav_train_cleaner');
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['pav_train_cleaner'] = ((s as any).temp_tc_worked ?? 0);
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_diner_dishwasher_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_diner_dishwasher_v4'] = 1;
      if (((s as any).BurgerQW ?? 0)?.['WashDishesCount'] >= 1  &&  ((s as any).job_status ?? 0)?.['city_diner_dishwasher'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'city_diner_dishwasher');
      }
      if (((s as any).BurgerQW ?? 0)?.['WashFloorCount'] >= 1  &&  ((s as any).job_status ?? 0)?.['city_diner_floor_washer'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'city_diner_floor_washer');
      }
      if (((s as any).BurgerQW ?? 0)?.['WashDishesCount'] > 1) {
        ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})['city_diner_dishwasher'] = (((s as any).BurgerQW ?? {})?.['WashDishesCount'] ?? 0) - 1;
      }
      if (((s as any).BurgerQW ?? 0)?.['WorkBlocked'] === 1) {
        if (((s as any).job_status ?? 0)?.['city_diner_dishwasher'] === 'employed') {
          qspCall(s, 'jobs', 'set_fired', 'city_diner_dishwasher');
        }
        if (((s as any).job_status ?? 0)?.['city_diner_floor_washer'] === 'employed') {
          qspCall(s, 'jobs', 'set_fired', 'city_diner_floor_washer');
        }
      }
      ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['WashDishesCount'] = 0;
      ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['WashFloorCount'] = 0;
      ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['WashedDishesLastDay'] = 0;
      ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['WashFloorLastDay'] = 0;
      ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['WorkBlocked'] = 0;
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_diner_secretary_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_diner_secretary_v4'] = 1;
      if (((s as any).BurgerQW ?? 0)?.['Secretary'] === 1  &&  ((s as any).job_status ?? 0)?.['city_diner_secretary'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'city_diner_secretary');
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_diner_secretary'] = ((s as any).BurgerQW ?? 0)?.['SecretaryTimesWorked'];
      }
      if (((s as any).BurgerQW ?? 0)?.['Secretary'] === 2  &&  ((s as any).job_status ?? 0)?.['city_diner_secretary'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'city_diner_secretary');
        qspCall(s, 'jobs', 'set_fired', 'city_diner_secretary');
      }
      ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['Secretary'] = 0;
      ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['SecretaryTimesWorked'] = 0;
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_hospital_nurse_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_hospital_nurse_v4'] = 1;
      if (((s as any).workhosp ?? 0) === 1  &&  ((s as any).job_status ?? 0)?.['city_hospital_nurse'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'city_hospital_nurse');
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_hospital_nurse'] = ((s as any).smena ?? 0);
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_cafe_waitress_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_cafe_waitress_v4'] = 1;
      if (((s as any).workKafe ?? 0)?.['job'] === 1  &&  ((s as any).job_status ?? 0)?.['city_cafe_waitress'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'city_cafe_waitress');
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_cafe_waitress'] = ((s as any).smenaKafe ?? 0);
        ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})['city_cafe_waitress'] = ((s as any).smenaKafe ?? 0);
      }
      if (((s as any).workKafe ?? 0)?.['job'] === -1  &&  ((s as any).job_status ?? 0)?.['city_cafe_waitress'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'city_cafe_waitress');
        qspCall(s, 'jobs', 'set_terminated', 'city_cafe_waitress');
      }
      ((s as any).workKafe = (s as any).workKafe ?? {})['job'] = 0;
      ((s as any).workKafe = (s as any).workKafe ?? {})['at_work'] = 0;
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_office_secretary_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_office_secretary_v4'] = 1;
      if (((s as any).workSec ?? 0) === 1  &&  ((s as any).job_status ?? 0)?.['city_office_secretary'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'city_office_secretary');
        if (((s as any).sekDay ?? 0) > 0) {
          ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_office_secretary'] = ((s as any).sekDay ?? 0);
          ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})['city_office_secretary'] = ((s as any).sekDay ?? 0);
        }
      }
      if (((s as any).jobsec ?? 0) === 1  &&  ((s as any).job_hiring_step ?? 0)?.['city_office_secretary'] === 0) {
        ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_office_secretary'] = 1;
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pav_factory_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pav_factory_v4'] = 1;
      if (((s as any).workFabrika ?? 0) === 1  &&  ((s as any).job_status ?? 0)?.['pav_factory'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'pav_factory');
        if (((s as any).age ?? 0) >= 18) {
          qspCall(s, 'jobs', 'change_schedule', 'pav_factory', 1);
        }
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['pav_factory'] = ((s as any).smenaFabrika ?? 0) * 240;
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_pussycats_clerk_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_pussycats_clerk_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === '') {
        if (((s as any).young_shop_work ?? 0) === 1) {
          qspCall(s, 'jobs', 'set_employed', 'city_pussycats_clerk');
          ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_salary ?? 0) * 60;
          if (((s as any).young_shop_bonus ?? 0) > 0) {
            // TODO-QSP: gs 'jobs', 'bonus_pay', 'city_pussycats_clerk', young_shop_bonus * 205
          }
          ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_miss ?? 0);
          ((s as any).job_missed_total = (s as any).job_missed_total ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_miss ?? 0);
          ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_warned ?? 0);
        } else {
          if (((s as any).young_shop_work1 ?? 0) === 1) {
            qspCall(s, 'jobs', 'set_employed', 'city_pussycats_clerk');
            qspCall(s, 'jobs', 'change_schedule', 'city_pussycats_clerk', 1);
            ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_salary ?? 0) * 60;
            if (((s as any).young_shop_bonus ?? 0) > 0) {
              // TODO-QSP: gs 'jobs', 'bonus_pay', 'city_pussycats_clerk', young_shop_bonus * 205
            }
            ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_miss ?? 0);
            ((s as any).job_missed_total = (s as any).job_missed_total ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_miss ?? 0);
            ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_warned ?? 0);
          } else {
            if (((s as any).young_shop_work2 ?? 0) === 1) {
              qspCall(s, 'jobs', 'set_employed', 'city_pussycats_clerk');
              qspCall(s, 'jobs', 'change_schedule', 'city_pussycats_clerk', 2);
              ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_salary ?? 0) * 60;
              if (((s as any).young_shop_bonus ?? 0) > 0) {
                // TODO-QSP: gs 'jobs', 'bonus_pay', 'city_pussycats_clerk', young_shop_bonus * 205
              }
              ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_miss ?? 0);
              ((s as any).job_missed_total = (s as any).job_missed_total ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_miss ?? 0);
              ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})['city_pussycats_clerk'] = ((s as any).young_shop_warned ?? 0);
            }
          }
        }
      }
      if (((s as any).young_shop_work ?? 0) === 2  ||  ((s as any).young_shop_work1 ?? 0) === 2  ||  ((s as any).young_shop_work2 ?? 0) === 2) {
        if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === '') {
          qspCall(s, 'jobs', 'set_employed', 'city_pussycats_clerk');
          qspCall(s, 'jobs', 'set_fired', 'city_pussycats_clerk');
        }
      }
      if (((s as any).young_shop_work ?? 0) === 3  ||  ((s as any).young_shop_work1 ?? 0) === 3  ||  ((s as any).young_shop_work2 ?? 0) === 3) {
        if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === '') {
          qspCall(s, 'jobs', 'set_employed', 'city_pussycats_clerk');
          qspCall(s, 'jobs', 'set_terminated', 'city_pussycats_clerk');
        }
      }
      if (((s as any).young_shop_fired ?? 0) > 0) {
        (s as any).pussycats_fired_count = ((s as any).young_shop_fired ?? 0);
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_strip_bargirl_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_strip_bargirl_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === '') {
        if (((s as any).strip_club ?? 0)?.['stripbarwork'] === 1  ||  ((s as any).strip_club ?? 0)?.['stripbarwork1'] === 1) {
          qspCall(s, 'jobs', 'set_employed', 'city_strip_bargirl');
          if (((s as any).strip_club ?? 0)?.['stripbarwork1'] === 1) {
            qspCall(s, 'jobs', 'change_schedule', 'city_strip_bargirl', 1);
          }
          if (((s as any).strip_club ?? 0)?.['bar_shifts'] > 0) {
            ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_strip_bargirl'] = ((s as any).strip_club ?? 0)?.['bar_shifts'];
            ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})['city_strip_bargirl'] = ((s as any).strip_club ?? 0)?.['bar_shifts'];
          }
        }
      }
      ((s as any).strip_club = (s as any).strip_club ?? {})['stripbarwork'] = 0;
      ((s as any).strip_club = (s as any).strip_club ?? {})['stripbarwork1'] = 0;
      ((s as any).strip_club = (s as any).strip_club ?? {})['bar_shifts'] = 0;
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_strip_stripper_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_strip_stripper_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === '') {
        if (((s as any).strip_club ?? 0)?.['stripwork'] === 1) {
          qspCall(s, 'jobs', 'set_employed', 'city_strip_stripper');
        }
      }
      ((s as any).strip_club = (s as any).strip_club ?? {})['stripwork'] = 0;
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['strip_schedule_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['strip_schedule_v4'] = 1;
      if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed') {
        (s as any).temp_su_day = ((s as any).daystart ?? 0);
        // TODO-QSP: :strip_sched_migrate_loop
        if (((s as any).temp_su_day ?? 0) <= ((s as any).daystart ?? 0) + 14) {
          (s as any).temp_su_data = ((s as any).job_booking ?? 0)?.['city_strip_stripper, \' + $str(temp_su_day) + \', 1'];
          if (((s as any).temp_su_data ?? 0) !== ''  &&  ((s as any).job_booking ?? 0)['city_strip_stripper, ' + String(((s as any).temp_su_day ?? 0)) + ', 0'] === '') {
            qspCall(s, 'jobs', 'cancel_booking', 'city_strip_stripper', ((s as any).temp_su_day ?? 0), 1);
            qspCall(s, 'jobs', 'book_slot', 'city_strip_stripper', ((s as any).temp_su_day ?? 0), 0, ((s as any).temp_su_data ?? 0));
          }
          (s as any).temp_su_data = ((s as any).job_booking ?? 0)?.['city_strip_stripper, \' + $str(temp_su_day) + \', 2'];
          if (((s as any).temp_su_data ?? 0) !== ''  &&  ((s as any).job_booking ?? 0)['city_strip_stripper, ' + String(((s as any).temp_su_day ?? 0)) + ', 1'] === '') {
            qspCall(s, 'jobs', 'cancel_booking', 'city_strip_stripper', ((s as any).temp_su_day ?? 0), 2);
            qspCall(s, 'jobs', 'book_slot', 'city_strip_stripper', ((s as any).temp_su_day ?? 0), 1, ((s as any).temp_su_data ?? 0));
          }
          (s as any).temp_su_day = ((s as any).temp_su_day ?? 0) + (1);
          // TODO-QSP: jump 'strip_sched_migrate_loop'
        }
      }
      (s as any).temp_su_i = 1;
      // TODO-QSP: :strip_sched_clear_loop
      if (((s as any).temp_su_i ?? 0) <= 7) {
        if (((s as any).strip_club ?? 0)[String(((s as any).temp_su_i ?? 0)) + '_shift_1'] !== 0) {
          // TODO-QSP: gs 'jobs', 'book_slot', 'city_strip_stripper', daystart - week + temp_su_i, 0, 'legacy shift'
        }
        if (((s as any).strip_club ?? 0)[String(((s as any).temp_su_i ?? 0)) + '_shift_2'] !== 0) {
          // TODO-QSP: gs 'jobs', 'book_slot', 'city_strip_stripper', daystart - week + temp_su_i, 1, 'legacy shift'
        }
        // TODO-QSP: strip_club[$str(temp_su_i) + '_shift_1_taken'] = 0
        // TODO-QSP: strip_club[$str(temp_su_i) + '_shift_2_taken'] = 0
        if (((s as any).strip_club ?? 0)['next_' + String(((s as any).temp_su_i ?? 0)) + '_shift_1'] !== 0) {
          // TODO-QSP: gs 'jobs', 'book_slot', 'city_strip_stripper', daystart - week + 7 + temp_su_i, 0, 'legacy shift'
        }
        if (((s as any).strip_club ?? 0)['next_' + String(((s as any).temp_su_i ?? 0)) + '_shift_2'] !== 0) {
          // TODO-QSP: gs 'jobs', 'book_slot', 'city_strip_stripper', daystart - week + 7 + temp_su_i, 1, 'legacy shift'
        }
        // TODO-QSP: strip_club['next_' + $str(temp_su_i) + '_shift_1_taken'] = 0
        // TODO-QSP: strip_club['next_' + $str(temp_su_i) + '_shift_2_taken'] = 0
        (s as any).temp_su_i = ((s as any).temp_su_i ?? 0) + (1);
        // TODO-QSP: jump 'strip_sched_clear_loop'
      }
      ((s as any).strip_club = (s as any).strip_club ?? {})['schedule_update'] = 0;
      ((s as any).strip_club = (s as any).strip_club ?? {})['shifts_required'] = 0;
      ((s as any).strip_club = (s as any).strip_club ?? {})['last_worked_day'] = 0;
      ((s as any).strip_club = (s as any).strip_club ?? {})['missed_shift2'] = 0;
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pornstudio_actress_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pornstudio_actress_v4'] = 1;
      if (((s as any).firstkasting ?? 0) === 1  &&  ((s as any).job_status ?? 0)?.['city_pornstudio_actress'] === '') {
        if (((s as any).pfilmSTOP ?? 0) === 1) {
          qspCall(s, 'jobs', 'set_employed', 'city_pornstudio_actress');
          ((s as any).job_termination_reason = (s as any).job_termination_reason ?? {})['city_pornstudio_actress'] = 'retired';
          qspCall(s, 'jobs', 'set_terminated', 'city_pornstudio_actress');
        } else {
          if (((s as any).pfilmNO ?? 0) === 1  &&  ((s as any).pfilmNoVenera ?? 0) === 1) {
            qspCall(s, 'jobs', 'set_employed', 'city_pornstudio_actress');
            qspCall(s, 'jobs', 'suspend_job', 'city_pornstudio_actress');
          } else {
            if (((s as any).pfilmNO ?? 0) === 1) {
              qspCall(s, 'jobs', 'set_employed', 'city_pornstudio_actress');
              ((s as any).job_termination_reason = (s as any).job_termination_reason ?? {})['city_pornstudio_actress'] = 'blacklisted';
              qspCall(s, 'jobs', 'set_fired', 'city_pornstudio_actress');
            } else {
              qspCall(s, 'jobs', 'set_employed', 'city_pornstudio_actress');
            }
          }
        }
        if (((s as any).prodcosttrue ?? 0) > 0) {
          ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})['city_pornstudio_actress'] = ((s as any).prodcosttrue ?? 0);
        }
        if (((s as any).pornstack ?? 0) > 0) {
          ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})['city_pornstudio_actress'] = ((s as any).pornstack ?? 0);
        }
        (s as any).temp_psa_i = 1;
        // TODO-QSP: :saveupdater_porn_booking_loop
        if (((s as any).temp_psa_i ?? 0) < 50) {
          if (((s as any).pfilmday ?? 0)?.[String((s as any).temp_psa_i ?? 0)] > 0) {
            (s as any).temp_psa_ds = ((s as any).daystart ?? 0) + ((s as any).temp_psa_i ?? 0);
            if (((s as any).job_booking ?? 0)['city_pornstudio_actress, ' + String(((s as any).temp_psa_ds ?? 0)) + ', 0'] === '') {
              // TODO-QSP: $job_booking['city_pornstudio_actress, ' + $str(temp_psa_ds) + ', 0'] = $str(pfilmday[temp_psa_i])
            }
          }
          (s as any).temp_psa_i = ((s as any).temp_psa_i ?? 0) + (1);
          // TODO-QSP: jump 'saveupdater_porn_booking_loop'
        }
        if (((s as any).film ?? 0) > 0) {
          ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})['city_pornstudio_actress'] = ((s as any).film ?? 0);
        }
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_pornstudio_actress_rename'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_pornstudio_actress_rename'] = 1;
      if (((s as any).job_status ?? 0)?.['pornstudio_actress'] !== '') {
        ((s as any).job_status = (s as any).job_status ?? {})['city_pornstudio_actress'] = ((s as any).job_status ?? 0)?.['pornstudio_actress'];
        ((s as any).job_rank = (s as any).job_rank ?? {})['city_pornstudio_actress'] = ((s as any).job_rank ?? 0)?.['pornstudio_actress'];
        ((s as any).job_added = (s as any).job_added ?? {})['city_pornstudio_actress'] = ((s as any).job_added ?? 0)?.['pornstudio_actress'];
        ((s as any).job_termination_day = (s as any).job_termination_day ?? {})['city_pornstudio_actress'] = ((s as any).job_termination_day ?? 0)?.['pornstudio_actress'];
        ((s as any).job_termination_reason = (s as any).job_termination_reason ?? {})['city_pornstudio_actress'] = ((s as any).job_termination_reason ?? 0)?.['pornstudio_actress'];
        ((s as any).job_pay_rate = (s as any).job_pay_rate ?? {})['city_pornstudio_actress'] = ((s as any).job_pay_rate ?? 0)?.['pornstudio_actress'];
        ((s as any).job_pay_interval = (s as any).job_pay_interval ?? {})['city_pornstudio_actress'] = ((s as any).job_pay_interval ?? 0)?.['pornstudio_actress'];
        ((s as any).job_worked_count = (s as any).job_worked_count ?? {})['city_pornstudio_actress'] = ((s as any).job_worked_count ?? 0)?.['pornstudio_actress'];
        ((s as any).job_bonus_pay = (s as any).job_bonus_pay ?? {})['city_pornstudio_actress'] = ((s as any).job_bonus_pay ?? 0)?.['pornstudio_actress'];
        ((s as any).job_docked_pay = (s as any).job_docked_pay ?? {})['city_pornstudio_actress'] = ((s as any).job_docked_pay ?? 0)?.['pornstudio_actress'];
        ((s as any).job_shifts_total = (s as any).job_shifts_total ?? {})['city_pornstudio_actress'] = ((s as any).job_shifts_total ?? 0)?.['pornstudio_actress'];
        ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})['city_pornstudio_actress'] = ((s as any).job_last_work_day ?? 0)?.['pornstudio_actress'];
        ((s as any).job_clocked_in = (s as any).job_clocked_in ?? {})['city_pornstudio_actress'] = ((s as any).job_clocked_in ?? 0)?.['pornstudio_actress'];
        ((s as any).job_missed_total = (s as any).job_missed_total ?? {})['city_pornstudio_actress'] = ((s as any).job_missed_total ?? 0)?.['pornstudio_actress'];
        ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})['city_pornstudio_actress'] = ((s as any).job_miss_acknowledged ?? 0)?.['pornstudio_actress'];
        ((s as any).job_suspended = (s as any).job_suspended ?? {})['city_pornstudio_actress'] = ((s as any).job_suspended ?? 0)?.['pornstudio_actress'];
        ((s as any).job_event_id = (s as any).job_event_id ?? {})['city_pornstudio_actress'] = ((s as any).job_event_id ?? 0)?.['pornstudio_actress'];
        ((s as any).job_active_schedule = (s as any).job_active_schedule ?? {})['city_pornstudio_actress'] = ((s as any).job_active_schedule ?? 0)?.['pornstudio_actress'];
        ((s as any).job_bookings_active = (s as any).job_bookings_active ?? {})['city_pornstudio_actress'] = ((s as any).job_bookings_active ?? 0)?.['pornstudio_actress'];
        ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})['city_pornstudio_actress'] = ((s as any).job_booking_debt ?? 0)?.['pornstudio_actress'];
        (s as any).temp_psa_i = ((s as any).daystart ?? 0) - 60;
        // TODO-QSP: :saveupdater_porn_rename_loop
        if (((s as any).temp_psa_i ?? 0) <= ((s as any).daystart ?? 0) + 60) {
          if (((s as any).job_booking ?? 0)['pornstudio_actress, ' + String(((s as any).temp_psa_i ?? 0))] !== '') {
            // TODO-QSP: $job_booking['city_pornstudio_actress, ' + $str(temp_psa_i)] = $job_booking['pornstudio_actress, ' +...
            // TODO-QSP: $job_booking['pornstudio_actress, ' + $str(temp_psa_i)] = ''
          }
          (s as any).temp_psa_i = ((s as any).temp_psa_i ?? 0) + (1);
          // TODO-QSP: jump 'saveupdater_porn_rename_loop'
        }
        (s as any).temp_psa_idx = qspUntranslated(s, "arrpos('job_list', 'pornstudio_actress')", { location: "saveupdater" });
        if (((s as any).temp_psa_idx ?? 0) >= 0) {
          // TODO-QSP: $job_list[temp_psa_idx] = 'city_pornstudio_actress'
        }
        if (((s as any).job_event_id ?? 0)?.['city_pornstudio_actress'] === 'job_pornstudio_actress') {
          qspCall(s, 'calendar_events', 'remove_event', 'job_pornstudio_actress');
          ((s as any).job_event_id = (s as any).job_event_id ?? {})['city_pornstudio_actress'] = '';
          if (((s as any).job_status ?? 0)?.['city_pornstudio_actress'] === 'employed'  &&  ((s as any).job_suspended ?? 0)?.['city_pornstudio_actress'] === 0) {
            qspCall(s, 'jobs', 'get_job_definition', 'city_pornstudio_actress');
            if (((s as any).job_add_to_calendar ?? 0)?.['city_pornstudio_actress'] === 1) {
              if (((s as any).job_schedule_mode ?? 0)?.['city_pornstudio_actress'] === 'booking') {
                ((s as any).job_event_id = (s as any).job_event_id ?? {})['city_pornstudio_actress'] = '';
              } else {
                qspCall(s, 'jobs', 'create_recurring_event', 'city_pornstudio_actress');
              }
            }
          }
        }
        qspCall(s, 'jobs', 'cleanup_job', 'pornstudio_actress');
      }
    }
    if (((s as any).brothershowertalk ?? 0)  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_talk'] = ((s as any).brothershowertalk ?? 0);
      // TODO-QSP: killvar 'brothershowertalk'
    }
    if (((s as any).brothershowerlook ?? 0)  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_look'] = ((s as any).brothershowerlook ?? 0);
      // TODO-QSP: killvar 'brothershowerlook'
    }
    if (((s as any).brothershave ?? 0) > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave'] = ((s as any).brothershave ?? 0);
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['shave_day'] = qspUntranslated(s, "brothershave[1]", { location: "saveupdater" });
    }
    if (((s as any).brotherkiss ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['kiss'] = ((s as any).brotherkiss ?? 0);
      // TODO-QSP: killvar 'brotherkiss'
    }
    if (((s as any).brotherbj ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['bj'] = ((s as any).brotherbj ?? 0);
      // TODO-QSP: killvar 'brotherbj'
    }
    if (((s as any).brotherfuck ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['fuck'] = ((s as any).brotherfuck ?? 0);
      // TODO-QSP: killvar 'brotherfuck'
    }
    if (((s as any).brotheranal ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['anal'] = ((s as any).brotheranal ?? 0);
      // TODO-QSP: killvar 'brotheranal'
    }
    if (((s as any).brotherclub ?? 0)      > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['club'] = ((s as any).brotherclub ?? 0);
      // TODO-QSP: killvar 'brotherclub'
    }
    if (((s as any).brothervirginlie ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['virgin_lie'] = ((s as any).brothervirginlie ?? 0);
      // TODO-QSP: killvar 'brothervirginlie'
    }
    if (((s as any).brother_virgin_talk ?? 0)  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['virgin_talk'] = ((s as any).brother_virgin_talk ?? 0);
      // TODO-QSP: killvar 'brother_virgin_talk'
    }
    if (((s as any).brother_shower_times ?? 0)  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_times'] = ((s as any).brother_shower_times ?? 0);
      // TODO-QSP: killvar 'brother_shower_times'
    }
    if (((s as any).brothershowerbj ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_bj_day'] = ((s as any).brothershowerbj ?? 0);
      // TODO-QSP: killvar 'brothershowerbj'
    }
    if (((s as any).broshowerfuck ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_fuck_day'] = ((s as any).broshowerfuck ?? 0);
      // TODO-QSP: killvar 'broshowerfuck'
    }
    if (((s as any).broshowerorgasm ?? 0)    > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['shower_orgasm_day'] = ((s as any).broshowerorgasm ?? 0);
      // TODO-QSP: killvar 'broshowerorgasm'
    }
    if (((s as any).anatomyhomeworkhelp ?? 0)  > 0) {
      ((s as any).brotherQW = (s as any).brotherQW ?? {})['anatomy_help'] = ((s as any).anatomyhomeworkhelp ?? 0);
      // TODO-QSP: killvar 'anatomyhomeworkhelp'
    }
    if (((s as any).menu_loc ?? 0) === 'changingroom') {
      if (((s as any).ignore_inhib ?? 0)    > 0) {
        ((s as any).temp_changingroomVars = (s as any).temp_changingroomVars ?? {})['ignore_inhib'] = ((s as any).ignore_inhib ?? 0);
        // TODO-QSP: killvar 'ignore_inhib'
      }
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90801) {
    if (((s as any).lastwornclothingtype ?? 0)?.['backup'] === ''  &&  ((s as any).lastwornclothingtype ?? 0) !== '') {
      qspCall(s, 'outfit', 'transfer_backup', 0, 'backup');
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pornstudio_booking_slot_fix'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pornstudio_booking_slot_fix'] = 1;
      (s as any).temp_psa_i = ((s as any).daystart ?? 0) - 2;
      // TODO-QSP: :saveupdater_porn_slot_fix_loop
      if (((s as any).temp_psa_i ?? 0) <= ((s as any).daystart ?? 0) + 50) {
        if (((s as any).job_booking ?? 0)['city_pornstudio_actress, ' + String(((s as any).temp_psa_i ?? 0))] !== '') {
          if (((s as any).job_booking ?? 0)['city_pornstudio_actress, ' + String(((s as any).temp_psa_i ?? 0)) + ', 0'] === '') {
            // TODO-QSP: $job_booking['city_pornstudio_actress, ' + $str(temp_psa_i) + ', 0'] = $job_booking['city_pornstudio...
          }
          // TODO-QSP: $job_booking['city_pornstudio_actress, ' + $str(temp_psa_i)] = ''
        }
        (s as any).temp_psa_i = ((s as any).temp_psa_i ?? 0) + (1);
        // TODO-QSP: jump 'saveupdater_porn_slot_fix_loop'
      }
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 1;
    // TODO-QSP: :npc_known_backfill_loop
    if (((s as any).npc_rel ?? 0)['A' + ((s as any).saveupdaterVars ?? 0)?.['i']] > 0) {
      // TODO-QSP: npc_known['A<<saveupdaterVars[''i'']>>'] = 1
    }
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
    if (((s as any).saveupdaterVars ?? 0)?.['i'] <= ((s as any).aarraynumber ?? 0)) {
      // TODO-QSP: jump 'npc_known_backfill_loop'
    }
    ((s as any).stat = (s as any).stat ?? {})['male_sexual_partners'] = Math.max(((s as any).stat ?? 0)?.['male_sexual_partners'], ((s as any).stat ?? 0)?.['men_jerked'], ((s as any).stat ?? 0)?.['men_feetfucked'], ((s as any).stat ?? 0)?.['men_titfucked'], ((s as any).stat ?? 0)?.['men_blown'], ((s as any).stat ?? 0)?.['men_fucked']);
    ((s as any).stat = (s as any).stat ?? {})['male_sexual_times'] = Math.max(((s as any).stat ?? 0)?.['male_sexual_times'], ((s as any).stat ?? 0)?.['men_jerked_times'], ((s as any).stat ?? 0)?.['men_feetfucked_times'], ((s as any).stat ?? 0)?.['men_titfucked_times'], ((s as any).stat ?? 0)?.['men_blown_times'], ((s as any).stat ?? 0)?.['men_fucked_times']);
    ((s as any).stat = (s as any).stat ?? {})['female_sexual_partners'] = Math.max(((s as any).stat ?? 0)?.['female_sexual_partners'], ((s as any).stat ?? 0)?.['women_fingered'], ((s as any).stat ?? 0)?.['women_feetfucked'], ((s as any).stat ?? 0)?.['women_titfucked'], ((s as any).stat ?? 0)?.['women_munched'], ((s as any).stat ?? 0)?.['women_fucked']);
    ((s as any).stat = (s as any).stat ?? {})['female_sexual_times'] = Math.max(((s as any).stat ?? 0)?.['female_sexual_times'], ((s as any).stat ?? 0)?.['women_fingered_times'], ((s as any).stat ?? 0)?.['women_feetfucked_times'], ((s as any).stat ?? 0)?.['women_titfucked_times'], ((s as any).stat ?? 0)?.['women_munched_times'], ((s as any).stat ?? 0)?.['women_fucked_times']);
    ((s as any).stat = (s as any).stat ?? {})['herm_sexual_partners'] = Math.max(((s as any).stat ?? 0)?.['herm_sexual_partners'], ((s as any).stat ?? 0)?.['herm_jerked'], ((s as any).stat ?? 0)?.['herm_feetfucked'], ((s as any).stat ?? 0)?.['herm_titfucked'], ((s as any).stat ?? 0)?.['herm_blown'], ((s as any).stat ?? 0)?.['herm_fucked']);
    ((s as any).stat = (s as any).stat ?? {})['herm_sexual_times'] = Math.max(((s as any).stat ?? 0)?.['herm_sexual_times'], ((s as any).stat ?? 0)?.['herm_jerked_times'], ((s as any).stat ?? 0)?.['herm_feetfucked_times'], ((s as any).stat ?? 0)?.['herm_titfucked_times'], ((s as any).stat ?? 0)?.['herm_blown_times'], ((s as any).stat ?? 0)?.['herm_fucked_times']);
    if (((s as any).kid ?? 0) > 0  &&  ((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
      qspCall(s, 'arousal_funcs', 'set_virginity_stats', 'birth');
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'birth';
    }
    qspCall(s, 'setup_dynamics', '');
    if (Object.keys((s as any).playerBets ?? {}).length  > 0) {
      // TODO-QSP: copyarr('temp_player_bets',    'playerBets')
      // TODO-QSP: killvar 'playerBets'
    }
    if (Object.keys((s as any).playerHands ?? {}).length  > 0) {
      // TODO-QSP: copyarr('temp_player_hands',  'playerHands')
      // TODO-QSP: killvar 'playerHands'
    }
    if (Object.keys((s as any).playerPoints ?? {}).length  > 0) {
      // TODO-QSP: copyarr('temp_player_points',  'playerPoints')
      // TODO-QSP: killvar 'playerPoints'
    }
    if (Object.keys((s as any).dealerHand ?? {}).length  > 0) {
      // TODO-QSP: copyarr('temp_dealer_hand',    'dealerHand')
      // TODO-QSP: killvar 'dealerHand'
    }
    if (Object.keys((s as any).gsc_grl ?? {}).length    > 0) {
      // TODO-QSP: copyarr('temp_gsc_grl',      'gsc_grl')
      // TODO-QSP: killvar 'gsc_grl'
    }
    if (((s as any).sex_ev ?? 0)?.['cum_choice']    !== 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice_int'] = ((s as any).sex_ev ?? 0)?.['cum_choice'];
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 0;
    }
    if (((s as any).pcs_lipbalm ?? 0)        !== '') {
      (s as any).pcs_lipbalm_str = ((s as any).pcs_lipbalm ?? 0);
      // TODO-QSP: killvar '$pcs_lipbalm'
    }
    if (((s as any).brotherroom ?? 0)        !== 0) {
      (s as any).temp_brotherroom = ((s as any).brotherroom ?? 0);
      // TODO-QSP: killvar 'brotherroom'
    }
    if (((s as any).ParrotQW ?? 0)?.['Name']    !== '') {
      ((s as any).ParrotQW = (s as any).ParrotQW ?? {})['Name2'] = ((s as any).ParrotQW ?? 0)?.['Name'];
      qspCall(s, 'array', 'remove_element', '$ParrotQW', 'Name');
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90802) {
    if (((s as any).prodcost ?? 0) > 0  &&  ((s as any).job_status ?? 0)?.['city_pornstudio_actress'] === 'employed') {
      ((s as any).job_last_miss_cost = (s as any).job_last_miss_cost ?? {})['city_pornstudio_actress'] = ((s as any).prodcost ?? 0);
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['diff_opts_migrated'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['diff_opts_migrated'] = 1;
      if (((s as any).cheatVars ?? 0)?.['deg_speed'] === -100) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = (-4);
      } else {
        if (((s as any).cheatVars ?? 0)?.['deg_speed'] === -50) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = (-3);
        } else {
          if (((s as any).cheatVars ?? 0)?.['deg_speed'] === 0) {
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = 0;
          } else {
            if (((s as any).cheatVars ?? 0)?.['deg_speed'] === 50) {
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = 2;
            } else {
              if (((s as any).cheatVars ?? 0)?.['deg_speed'] === 100) {
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = 3;
              } else {
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = 99;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_custom'] = 100 + (((s as any).cheatVars ?? {})?.['deg_speed'] ?? 0);
              }
            }
          }
        }
      }
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed'] = 0;
      if (((s as any).money_vars ?? 0)?.['pos_mult_opt'] === -1) {
        ((s as any).money_vars = (s as any).money_vars ?? {})['pos_mult_opt'] = 99;
      } else {
        if (((s as any).money_vars ?? 0)?.['pos_mult_opt'] === 1) {
          ((s as any).money_vars = (s as any).money_vars ?? {})['pos_mult_opt'] = (-3);
        } else {
          if (((s as any).money_vars ?? 0)?.['pos_mult_opt'] === 2) {
            ((s as any).money_vars = (s as any).money_vars ?? {})['pos_mult_opt'] = (-1);
          } else {
            if (((s as any).money_vars ?? 0)?.['pos_mult_opt'] === 3) {
              ((s as any).money_vars = (s as any).money_vars ?? {})['pos_mult_opt'] = 2;
            } else {
              if (((s as any).money_vars ?? 0)?.['pos_mult_opt'] === 4) {
                ((s as any).money_vars = (s as any).money_vars ?? {})['pos_mult_opt'] = 2;
              }
            }
          }
        }
      }
      if (((s as any).money_vars ?? 0)?.['neg_mult_opt'] === -1) {
        ((s as any).money_vars = (s as any).money_vars ?? {})['neg_mult_opt'] = 99;
      } else {
        if (((s as any).money_vars ?? 0)?.['neg_mult_opt'] === 1) {
          ((s as any).money_vars = (s as any).money_vars ?? {})['neg_mult_opt'] = (-3);
        } else {
          if (((s as any).money_vars ?? 0)?.['neg_mult_opt'] === 2) {
            ((s as any).money_vars = (s as any).money_vars ?? {})['neg_mult_opt'] = (-1);
          } else {
            if (((s as any).money_vars ?? 0)?.['neg_mult_opt'] === 3) {
              ((s as any).money_vars = (s as any).money_vars ?? {})['neg_mult_opt'] = 2;
            } else {
              if (((s as any).money_vars ?? 0)?.['neg_mult_opt'] === 4) {
                ((s as any).money_vars = (s as any).money_vars ?? {})['neg_mult_opt'] = 2;
              }
            }
          }
        }
      }
      if (((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -1) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = 99;
      } else {
        if (((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 1) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = (-3);
        } else {
          if (((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 2) {
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = (-1);
          } else {
            if (((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 3) {
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = 1;
            } else {
              if (((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 4) {
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = 2;
              }
            }
          }
        }
      }
      if (((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -1) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = 99;
      } else {
        if (((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 1) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = (-3);
        } else {
          if (((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 2) {
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = (-1);
          } else {
            if (((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 3) {
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = 1;
            } else {
              if (((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 4) {
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = 2;
              }
            }
          }
        }
      }
      if (((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -1) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = 99;
      } else {
        if (((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 1) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = (-3);
        } else {
          if (((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 2) {
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = (-1);
          } else {
            if (((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 3) {
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = 1;
            } else {
              if (((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 4) {
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = 2;
              }
            }
          }
        }
      }
      if (((s as any).cheatVars ?? 0)?.['preg_chance'] === -1) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = 99;
      } else {
        if (((s as any).cheatVars ?? 0)?.['preg_chance'] === 1) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = (-3);
        } else {
          if (((s as any).cheatVars ?? 0)?.['preg_chance'] === 2) {
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = (-2);
          } else {
            if (((s as any).cheatVars ?? 0)?.['preg_chance'] === 3) {
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = 2;
            } else {
              if (((s as any).cheatVars ?? 0)?.['preg_chance'] === 4) {
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = 2;
              }
            }
          }
        }
      }
      if (((s as any).cheatVars ?? 0)?.['preg_speed'] === -1) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_speed'] = 99;
      } else {
        if (((s as any).cheatVars ?? 0)?.['preg_speed'] === 1) {
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_speed'] = (-3);
        } else {
          if (((s as any).cheatVars ?? 0)?.['preg_speed'] === 2) {
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_speed'] = (-2);
          } else {
            if (((s as any).cheatVars ?? 0)?.['preg_speed'] === 3) {
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_speed'] = 2;
            } else {
              if (((s as any).cheatVars ?? 0)?.['preg_speed'] === 4) {
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_speed'] = 2;
              }
            }
          }
        }
      }
      if (((s as any).difficulty ?? 0) !== 0) {
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['skill_gain'] = ((s as any).difficulty ?? 0);
      }
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['progressbar_migrated'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['progressbar_migrated'] = 1;
      if (((s as any).enable_scalepic ?? 0) !== 0) {
        (s as any).enable_scalepic = ((s as any).enable_scalepic ?? 0) - (1);
      }
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90900) {
    qspCall(s, 'jobs_list', 'city_pornstudio_actress');
    if (((s as any).succubus ?? 0)?.['succubusQW'] === 4) {
      ((s as any).succubus = (s as any).succubus ?? {})['succubusQW'] = 11;
    }
    if (((s as any).succubus ?? 0)?.['succubusQW'] === 5) {
      ((s as any).succubus = (s as any).succubus ?? {})['succubusQW'] = 14;
    }
    if (((s as any).NatbelQW ?? 0)?.['uni_nightclub_date'] === 2  &&  ((s as any).NatbelQW ?? 0)?.['FriendLover'] < 9) {
      ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['FriendLover'] = 9;
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).kanikuli ?? 0) <= 6) {
      qspCall(s, 'calendar', 'pack', 'remove', 'school');
      qspCall(s, 'calendar', 'pack', 'add', 'school');
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['pornstudio_booking_data_fix'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['pornstudio_booking_data_fix'] = 1;
      (s as any).temp_psd_day = ((s as any).daystart ?? 0) - 1;
      // TODO-QSP: :psd_loop
      (s as any).temp_psd_day = ((s as any).temp_psd_day ?? 0) + (1);
      (s as any).temp_psd_slot = (-1);
      // TODO-QSP: :psd_slot_loop
      (s as any).temp_psd_slot = ((s as any).temp_psd_slot ?? 0) + (1);
      (s as any).temp_psd_key = 'city_pornstudio_actress, ' + String(((s as any).temp_psd_day ?? 0)) + ', ' + String(((s as any).temp_psd_slot ?? 0));
      (s as any).temp_psd_val = ((s as any).job_booking ?? 0)?.[String((s as any).temp_psd_key ?? 0)];
      if (((s as any).temp_psd_val ?? 0) !== ''  &&  parseFloat(((s as any).temp_psd_val ?? 0)) === 0) {
        if (((s as any).temp_psd_val ?? 0) === 'Titfuck'  ||  ((s as any).temp_psd_val ?? 0) === 'Handjob') {
          // TODO-QSP: $job_booking[$temp_psd_key] = '1'
        } else {
          (s as any).temp_psd_i = 1;
          // TODO-QSP: :psd_match_loop
          if (((s as any).porndesc ?? 0)?.[String((s as any).temp_psd_i ?? 0)] === ((s as any).temp_psd_val ?? 0)) {
            // TODO-QSP: $job_booking[$temp_psd_key] = $str(temp_psd_i)
          } else {
            (s as any).temp_psd_i = ((s as any).temp_psd_i ?? 0) + (1);
            if (((s as any).temp_psd_i ?? 0) <= 20) {
              // TODO-QSP: jump 'psd_match_loop'
            }
          }
        }
      }
      if (((s as any).temp_psd_slot ?? 0) < 3) {
        // TODO-QSP: jump 'psd_slot_loop'
      }
      if (((s as any).temp_psd_day ?? 0) < ((s as any).daystart ?? 0) + 60) {
        // TODO-QSP: jump 'psd_loop'
      }
    }
    if (((String(((s as any).clothingworntype ?? 0)).indexOf(String('_bikinis'))) + 1) > 0  ||  ((String(((s as any).clothingworntype ?? 0)).indexOf(String('_swimsuit'))) + 1)) {
      (s as any).PCloSwim = 1;
    }
    if (((s as any).PCloStyle2 ?? 0) === 1) {
      (s as any).PCloMaid = 1;
    } else {
      if (((s as any).PCloStyle2 ?? 0) === 2) {
        (s as any).PCloServer = 1;
      } else {
        if (((s as any).PCloStyle2 ?? 0) === 3) {
          (s as any).PCloStrip = 1;
        } else {
          if (((s as any).PCloStyle2 ?? 0) === 4) {
            (s as any).PCloSchool = 1;
          } else {
            if (((s as any).PCloStyle2 ?? 0) === 5) {
              (s as any).PCloOffice = 1;
            } else {
              if (((s as any).PCloStyle2 ?? 0) === 6) {
                (s as any).PCloSport = 1;
              }
            }
          }
        }
      }
    }
    if (((s as any).PShoStyle2 ?? 0) === 1) {
      (s as any).PShoStrip = 1;
    } else {
      if (((s as any).PShoStyle2 ?? 0) === 2) {
        (s as any).PShoSport = 1;
      }
    }
    if (((s as any).PBraFun ?? 0) === 2) {
      (s as any).PBraSport = 1;
    }
    if (((s as any).PPanFun ?? 0) === 2) {
      (s as any).PPanSport = 1;
    }
    if (((s as any).PCloStyle ?? 0) === 4) {
      (s as any).PCloProstitute = 1;
    }
    qspCall(s, 'outfit', 'set_derived_vars');
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = 1;
    // TODO-QSP: :loopprice
    // TODO-QSP: Clothingstock[saveupdaterVars['i']] = rand(0, 100)
    ((s as any).saveupdaterVars = (s as any).saveupdaterVars ?? {})['i'] = ((s as any).saveupdaterVars['i'] ?? 0) + (1);
    if (((s as any).saveupdaterVars ?? 0)?.['i'] <= 293) {
      // TODO-QSP: jump 'loopprice'
    }
    if ((!((s as any).PCloMaxStrength ?? 0))) {
      qspCall(s, 'stat', '');
      qspCall(s, 'tailor', 'repair_all_cheat');
      qspCall(s, 'outfit', 'backup');
      qspCall(s, 'outfit', 'restore');
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['sd_defaults_set'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['sd_defaults_set'] = 1;
      if (((s as any).ETOmenu ?? 0) === 1) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['render_mode'] = 2;
      } else {
        if (((s as any).enable_scalepic ?? 0) === 1) {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['render_mode'] = 1;
        }
      }
      ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['render_mode_status'] = ((s as any).stat_cfg ?? 0)?.['render_mode'];
      ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['render_mode_attrs'] = ((s as any).stat_cfg ?? 0)?.['render_mode'];
      if (((s as any).stat_cfg ?? 0)?.['skills_mode'] === 1) {
        if (((s as any).stat_cfg ?? 0)?.['render_mode_skills'] === 1) {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['skills_mode'] = 2;
        } else {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['skills_mode'] = 1;
        }
      }
      if (((s as any).stat_cfg ?? 0)?.['relations_mode'] === 1) {
        if (((s as any).stat_cfg ?? 0)?.['render_mode_relations'] === 1) {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['relations_mode'] = 2;
        } else {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['relations_mode'] = 1;
        }
      }
      ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['name_side_status'] = ((s as any).progressbar_name_side ?? 0);
      ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['name_side_attrs'] = ((s as any).progressbar_name_side ?? 0);
      ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['name_side_skills'] = ((s as any).progressbar_name_side ?? 0);
      ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['name_side_relations'] = ((s as any).progressbar_name_side ?? 0);
      if (((s as any).stat_nums ?? 0)?.['enable_concise'] === 1) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['newline_texts'] = 2;
      }
      ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['temp_scale'] = ((s as any).TempUnit ?? 0);
      if (((s as any).disable_LoadSave ?? 0) === 2) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['loadsave_mode'] = 1;
      }
      if (((s as any).hide_toggles ?? 0) === 0  &&  ((s as any).stat_cfg ?? 0)?.['sec_headers'] === 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['sec_headers'] = 2;
      }
      if (((s as any).stat_cfg ?? 0)?.['show_sec_headers'] === 1  &&  ((s as any).stat_cfg ?? 0)?.['sec_headers'] === 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['sec_headers'] = 1;
      }
      if (((s as any).cheatStatusBars ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_size'] = ((s as any).cheatStatusBars ?? 0);
        // TODO-QSP: killvar 'cheatStatusBars'
      }
      if (((s as any).progressbar_bar_width ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = ((s as any).progressbar_bar_width ?? 0);
        // TODO-QSP: killvar 'progressbar_bar_width'
      }
      if (((s as any).stat_disp_overlay ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['overlay'] = ((s as any).stat_disp_overlay ?? 0);
        // TODO-QSP: killvar 'stat_disp_overlay'
      }
      if (((s as any).Enable_statfsize ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['font_size'] = ((s as any).Enable_statfsize ?? 0);
        // TODO-QSP: killvar 'Enable_statfsize'
      }
      if (((s as any).Enable_Android ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['android'] = ((s as any).Enable_Android ?? 0);
        // TODO-QSP: killvar 'Enable_Android'
      }
      if (((s as any).default_status_icons ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['icon_height'] = ((s as any).set_siconht ?? 0);
        // TODO-QSP: killvar 'default_status_icons'
        // TODO-QSP: killvar 'set_siconht'
      }
      if (((s as any).default_menu_icons ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['menu_icon_height'] = ((s as any).set_miconht ?? 0);
        // TODO-QSP: killvar 'default_menu_icons'
        // TODO-QSP: killvar 'set_miconht'
      }
      if (((s as any).default_wbanner ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['weather_height'] = ((s as any).set_weatherht ?? 0);
        // TODO-QSP: killvar 'default_wbanner'
        // TODO-QSP: killvar 'set_weatherht'
      }
      if (((s as any).timeHidden ?? 0) !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['time_hidden'] = ((s as any).timeHidden ?? 0);
        // TODO-QSP: killvar 'timeHidden'
      }
      if (((s as any).stat_cfg ?? 0)?.['icon_height'] === 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['icon_height'] = 54;
      }
      if (((s as any).stat_cfg ?? 0)?.['menu_icon_height'] === 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['menu_icon_height'] = 54;
      }
      if (((s as any).stat_cfg ?? 0)?.['weather_height'] === 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['weather_height'] = 72;
      }
      if (((s as any).stat_cfg ?? 0)?.['show_positive_icons'] === 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['show_positive_icons'] = 1;
      }
      if (((s as any).stat_cfg ?? 0)?.['image_columns'] === 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['image_columns'] = 1;
      }
      if (((s as any).stat_cfg ?? 0)?.['image_spacing'] === 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['image_spacing'] = 1;
      }
      if (((s as any).stat_imgh ?? 0) > 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['image_size'] = 2;
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['image_size_px'] = ((s as any).stat_imgh ?? 0);
      } else {
        if (((s as any).set_statimgw ?? 0) > 0  &&  ((s as any).set_statimgw ?? 0) !== 220) {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['image_size'] = 3;
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['image_size_px'] = ((s as any).set_statimgw ?? 0);
        }
      }
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Weather'] = 'weather';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Time'] = 'time';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Main Menu'] = 'menu_bar';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Money'] = 'money';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Icons'] = 'icons';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Status'] = 'status';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Important Texts'] = 'important_texts';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Attributes'] = 'attributes';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Skills'] = 'skills';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Relationships'] = 'relations';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Images'] = 'images';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Normal Texts'] = 'normal_texts';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Status Texts'] = 'texts';
      ((s as any).stat_vars = (s as any).stat_vars ?? {})['Save / Load Buttons'] = 'loadsave';
      (s as any).temp_i = 0;
      // TODO-QSP: :sd_su_migrate_order
      if (((s as any).stat_vars ?? 0)[((s as any).stat_order ?? 0)?.[String((s as any).temp_i ?? 0)]] !== '') {
        // TODO-QSP: $stat_order[temp_i] = $stat_vars[$stat_order[temp_i]]
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      if (((s as any).temp_i ?? 0) < 15) {
        // TODO-QSP: jump 'sd_su_migrate_order'
      }
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['msg_sep_migrated'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['msg_sep_migrated'] = 1;
      if (((s as any).stat_cfg ?? 0)?.['newline_important_texts'] !== 0  ||  ((s as any).stat_cfg ?? 0)?.['newline_normal_texts'] !== 0) {
        if (((s as any).stat_cfg ?? 0)?.['newline_texts'] === 0) {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['newline_texts'] = ((((s as any).stat_cfg ?? 0)?.['newline_normal_texts'] !== 0) ? (((s as any).stat_cfg ?? 0)?.['newline_normal_texts']) : (((s as any).stat_cfg ?? 0)?.['newline_important_texts']));
        }
      }
      if (((s as any).stat_cfg ?? 0)?.['msg_separator'] === 1) {
        if (((s as any).stat_cfg ?? 0)?.['newline_important_texts'] === 0) {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['newline_important_texts'] = 2;
        }
        if (((s as any).stat_cfg ?? 0)?.['newline_normal_texts']    === 0) {
          ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['newline_normal_texts'] = 2;
        }
      }
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['alerts_section_added'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['alerts_section_added'] = 1;
      (s as any).sd_su_max = 0;
      (s as any).sd_su_found = 0;
      (s as any).sd_su_imp_idx = (-1);
      (s as any).sd_su_i = 0;
      // TODO-QSP: :sd_su_alerts_scan
      if (((s as any).stat_order ?? 0)?.[String((s as any).sd_su_i ?? 0)] === 'alerts') {
        (s as any).sd_su_found = 1;
      }
      if (((s as any).stat_order ?? 0)?.[String((s as any).sd_su_i ?? 0)] === 'important_texts') {
        (s as any).sd_su_imp_idx = ((s as any).sd_su_i ?? 0);
      }
      (s as any).sd_su_i = ((s as any).sd_su_i ?? 0) + (1);
      if (((s as any).sd_su_i ?? 0) < ((s as any).sd_su_max ?? 0)) {
        // TODO-QSP: jump 'sd_su_alerts_scan'
      }
      if (((s as any).sd_su_found ?? 0) === 0  &&  ((s as any).sd_su_imp_idx ?? 0) >= 0) {
        (s as any).sd_su_j = ((s as any).sd_su_max ?? 0) - 1;
        // TODO-QSP: :sd_su_alerts_shift
        // TODO-QSP: $stat_order[sd_su_j + 1] = $stat_order[sd_su_j]
        (s as any).sd_su_j = ((s as any).sd_su_j ?? 0) - (1);
        if (((s as any).sd_su_j ?? 0) >= ((s as any).sd_su_imp_idx ?? 0)) {
          // TODO-QSP: jump 'sd_su_alerts_shift'
        }
        // TODO-QSP: $stat_order[sd_su_imp_idx] = 'alerts'
      }
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['texts_section_migrated'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['texts_section_migrated'] = 1;
      if (((s as any).stat_cfg ?? 0)?.['newline_texts'] === 0  &&  ((s as any).stat_cfg ?? 0)?.['newline_normal_texts'] !== 0) {
        ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['newline_texts'] = ((s as any).stat_cfg ?? 0)?.['newline_normal_texts'];
      }
      (s as any).sd_su_max = 0;
      (s as any).sd_su_i = 0;
      (s as any).sd_su_write = 0;
      // TODO-QSP: :sd_su_texts_scan
      (s as any).sd_su_key = ((s as any).stat_order ?? 0)?.[String((s as any).sd_su_i ?? 0)];
      if (((s as any).sd_su_key ?? 0) === 'important_texts') {
      } else {
        if (((s as any).sd_su_key ?? 0) === 'normal_texts') {
          // TODO-QSP: $stat_order[sd_su_write] = 'texts'
          (s as any).sd_su_write = ((s as any).sd_su_write ?? 0) + (1);
        } else {
          // TODO-QSP: $stat_order[sd_su_write] = $sd_su_key
          (s as any).sd_su_write = ((s as any).sd_su_write ?? 0) + (1);
        }
      }
      (s as any).sd_su_i = ((s as any).sd_su_i ?? 0) + (1);
      if (((s as any).sd_su_i ?? 0) < ((s as any).sd_su_max ?? 0)) {
        // TODO-QSP: jump 'sd_su_texts_scan'
      }
      if (((s as any).sd_su_write ?? 0) < ((s as any).sd_su_max ?? 0)) {
        (s as any).sd_su_trim = ((s as any).sd_su_write ?? 0);
        // TODO-QSP: :sd_su_texts_trim
        (s as any).sd_su_trim = ((s as any).sd_su_trim ?? 0) + (1);
        if (((s as any).sd_su_trim ?? 0) < ((s as any).sd_su_max ?? 0)) {
          // TODO-QSP: jump 'sd_su_texts_trim'
        }
      }
    }
    if (((s as any).stat_cfg ?? 0)?.['bar_width'] === 0) {
      ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = 200;
    }
    (s as any).temp_saveupdater_i = 0;
    // TODO-QSP: :saveupdater_stat_collapse_loop_1
    if (((s as any).stat_expand ?? 0)[((s as any).stat_order ?? 0)?.[String((s as any).temp_saveupdater_i ?? 0)]] !== 0) {
      // TODO-QSP: stat_collapse[$stat_order[temp_saveupdater_i]] = 1 - stat_expand[$stat_order[temp_saveupdater_i]]
    }
    (s as any).temp_saveupdater_i = ((s as any).temp_saveupdater_i ?? 0) + (1);
    if (((s as any).temp_saveupdater_i ?? 0) < Object.keys((s as any).stat_order ?? {}).length) {
      // TODO-QSP: jump 'saveupdater_stat_collapse_loop_1'
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['traits_and_archetypes_migrated'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['traits_and_archetypes_migrated'] = 1;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater'] = ((s as any).pcs_traits ?? 0)?.['cumeater'];
      (s as any).temp_su_cumeater_known = (((s as any).stat ?? {})?.['swallow'] ?? 0) - (((s as any).stat ?? {})?.['swallow_unaware'] ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_prev'] = ((s as any).temp_su_cumeater_known ?? 0);
      if (((s as any).trait_vars ?? 0)?.['cumeater'] === 0) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_exp'] = Math.min(49, ((s as any).temp_su_cumeater_known ?? 0));
      } else {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_exp'] = ((s as any).temp_su_cumeater_known ?? 0);
      }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish'] = ((s as any).pcs_traits ?? 0)?.['creampie_fetish'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp'] = ((((s as any).trait_vars ?? 0)?.['creampie_fetish'] >= 2) ? (200) : (((((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 1) ? (150) : (0))));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_risky'] = ((((s as any).trait_vars ?? 0)?.['creampie_fetish'] >= 2) ? (100) : (0));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_prev'] = (((s as any).stat ?? {})?.['creampies_safe_known'] ?? 0) + ((((s as any).stat ?? {})?.['creampies_notsafe_known'] ?? 0) + (((s as any).stat ?? {})?.['creampies_risky_known'] ?? 0) * 2) * 2;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_risky_prev'] = (((s as any).stat ?? {})?.['creampies_notsafe_known'] ?? 0) + (((s as any).stat ?? {})?.['creampies_risky_known'] ?? 0) * 2;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['fertility'] = ((s as any).pcs_traits ?? 0)?.['hyper_fertile'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['sensitivity'] = Math.min(((s as any).pcs_traits ?? 0)?.['easy_orgasms'], 1);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['new_again_exp'] = ((s as any).pcs_traits ?? 0)?.['new_again'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['new_again'] = ((((s as any).trait_vars ?? 0)?.['new_again_exp'] > 0) ? (1) : (0));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality'] = ((s as any).traits ?? 0)?.['addictive_personality'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_exp'] = ((((s as any).trait_vars ?? 0)?.['addictive_personality'] >= 3) ? (4) : (((((s as any).trait_vars ?? 0)?.['addictive_personality'] === 2) ? (3) : (((((s as any).trait_vars ?? 0)?.['addictive_personality'] === 1) ? (2) : (0))))));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_prev'] = (((s as any).drugVars ?? {})?.['cigarettes_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['weed_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['heroin_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['cocaine_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['alcohol_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['amphetamine_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['painkiller_exp'] ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut'] = ((s as any).pcs_traits ?? 0)?.['buttslut_lvl'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_exp'] = ((s as any).pcs_traits ?? 0)?.['buttslut_exp'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_prev_anal'] = ((s as any).orgasm_anal ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist'] = ((s as any).exhibitionist_lvl ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = ((s as any).pcs_exhib ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference'] = ((s as any).pcs_traits ?? 0)?.['commando_lvl'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference_exp'] = (((s as any).pcs_traits ?? {})?.['commando_exp'] ?? 0) * 15 + (15000 * (((s as any).trait_vars ?? {})?.['panty_preference'] ?? 0));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking'] = ((s as any).pcs_traits ?? 0)?.['alko_status'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = ((s as any).pcs_traits ?? 0)?.['alko_points'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_days_sober'] = ((s as any).pcs_traits ?? 0)?.['alko_days_not_drunk'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['alko_today'] = ((s as any).pcs_traits ?? 0)?.['alko_day'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic'] = ((s as any).pcs_traits ?? 0)?.['nerd_status'];
      if (((s as any).trait_vars ?? 0)?.['academic'] === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 250;
      } else {
        if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 350;
        } else {
          if (((s as any).trait_vars ?? 0)?.['academic'] === 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 500;
          } else {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = (((s as any).pcs_traits ?? {})?.['nerd_points'] ?? 0) * 5;
          }
        }
      }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_started'] = ((s as any).pcs_traits ?? 0)?.['nerd_point_gain_start'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = ((s as any).pcs_traits ?? 0)?.['nerd_lessons'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nerd_learn_home'] = ((s as any).pcs_traits ?? 0)?.['nerd_lernHome'];
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = ((s as any).pcs_nerd ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm'] = ((((s as any).trait_vars ?? 0)?.['bookworm_exp'] >= 5) ? (1) : (0));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['doormat_exp'] = ((s as any).hypnoOutcast ?? 0);
      if (((s as any).pcs_traits ?? 0)?.['fitness_freak'] === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak'] = 1;
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_exp'] = 60;
      }
      if (((s as any).pcs_traits ?? 0)?.['bambis_first_steps'] > 0) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference'] = (-1);
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = -((((s as any).pcs_traits ?? {})?.['bambis_first_steps_time'] ?? 0) * 120);
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_daily_limit'] = (((s as any).pcs_traits ?? {})?.['bambis_first_steps_counter'] ?? 0) * 60;
      }
      if (((s as any).hypnoHair ?? 0) > 0) {
        qspCall(s, 'traits', 'body_hair_attitude', 'hypno_grant');
        // TODO-QSP: killvar 'hypnoHair'
      }
      if (((s as any).hypnoAddict ?? 0) > 0) {
        qspCall(s, 'traits', 'cum_addict', 'hypno_grant', ((s as any).hypnoAddict ?? 0));
        // TODO-QSP: killvar 'hypnoAddict'
      }
      qspCall(s, 'traits', 'init');
      (s as any).temp_su_i = 0;
      // TODO-QSP: :su_discover_loop
      if (((s as any).trait_vars ?? 0)[((s as any).trait_vars ?? 0)['list, ' + String(((s as any).temp_su_i ?? 0))]] !== 0) {
        // TODO-QSP: trait_vars[$trait_vars['list, ' + str(temp_su_i)] + '_discovered'] = 1
      }
      (s as any).temp_su_i = ((s as any).temp_su_i ?? 0) + (1);
      if (((s as any).temp_su_i ?? 0) < ((s as any).trait_vars ?? 0)?.['count']) {
        // TODO-QSP: jump 'su_discover_loop'
      }
      qspCall(s, 'archetypes', 'init');
      qspCall(s, 'archetypes', 'seed_snapshots');
      if (((s as any).pcs_traits ?? 0)?.['bimbo_lvl'] === 1) {
        ((s as any).arch_vars = (s as any).arch_vars ?? {})['bimbo_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 8;
      } else {
        if (((s as any).pcs_traits ?? 0)?.['bimbo_lvl'] === 2) {
          ((s as any).arch_vars = (s as any).arch_vars ?? {})['bimbo_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 4;
        } else {
          if (((s as any).pcs_traits ?? 0)?.['bimbo_lvl'] === 3) {
            ((s as any).arch_vars = (s as any).arch_vars ?? {})['bimbo_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 3;
          }
        }
      }
      if (((s as any).pcs_traits ?? 0)?.['punk_lvl'] === 1) {
        ((s as any).arch_vars = (s as any).arch_vars ?? {})['punk_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 8;
      } else {
        if (((s as any).pcs_traits ?? 0)?.['punk_lvl'] === 2) {
          ((s as any).arch_vars = (s as any).arch_vars ?? {})['punk_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 4;
        } else {
          if (((s as any).pcs_traits ?? 0)?.['punk_lvl'] === 3) {
            ((s as any).arch_vars = (s as any).arch_vars ?? {})['punk_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 3;
          }
        }
      }
      if (((s as any).pcs_traits ?? 0)?.['goth_lvl'] === 1) {
        ((s as any).arch_vars = (s as any).arch_vars ?? {})['goth_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 8;
      } else {
        if (((s as any).pcs_traits ?? 0)?.['goth_lvl'] === 2) {
          ((s as any).arch_vars = (s as any).arch_vars ?? {})['goth_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 4;
        } else {
          if (((s as any).pcs_traits ?? 0)?.['goth_lvl'] === 3) {
            ((s as any).arch_vars = (s as any).arch_vars ?? {})['goth_points'] = (((s as any).arch_const ?? {})?.['points_full_effect'] ?? 0) / 3;
          }
        }
      }
    }
    qspCall(s, 'traits', 'init');
    if (((s as any).chrmng ?? 0) + ((s as any).meantrt ?? 0)  !== 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming'] = ((s as any).chrmng ?? 0) - ((s as any).meantrt ?? 0);
      // TODO-QSP: killvar 'chrmng'
      // TODO-QSP: killvar 'meantrt'
    }
    if (((s as any).flexible ?? 0)      !== 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['flexible'] = ((s as any).flexible ?? 0);
      // TODO-QSP: killvar 'flexible'
    }
    if (((s as any).logictrt ?? 0)      !== 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['logical'] = ((s as any).logictrt ?? 0);
      // TODO-QSP: killvar 'logictrt'
    }
    if (((s as any).nat_athlete ?? 0)    !== 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete'] = ((s as any).nat_athlete ?? 0);
      // TODO-QSP: killvar 'nat_athlete'
    }
    if (((s as any).nat_dancer ?? 0)    !== 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_dancer'] = ((s as any).nat_dancer ?? 0);
      // TODO-QSP: killvar 'nat_dancer'
    }
    if (((s as any).schlrly ?? 0)      !== 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['scholarly'] = ((s as any).schlrly ?? 0);
      // TODO-QSP: killvar 'schlrly'
    }
    qspCall(s, 'traits', 'charming');
    qspCall(s, 'traits', 'flexible');
    qspCall(s, 'traits', 'logical');
    qspCall(s, 'traits', 'nat_athlete');
    qspCall(s, 'traits', 'nat_dancer');
    qspCall(s, 'traits', 'scholarly');
    if (((s as any).cheatVars ?? 0)?.['new_again_disabled'] === 0  &&  ((s as any).trait_vars ?? 0)?.['new_again'] > 0  &&  ((s as any).trait_vars ?? 0)?.['new_again_exp'] > 0) {
      qspCall(s, 'traits', 'register_attskl', 'new_again');
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['new_again-all-exp_gain'] = 100;
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['general_var_migrated'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['general_var_migrated'] = 1;
      qspCall(s, 'array', 'remove_element', 'cheatVars', 'full_morning_rout');
      ((s as any).arousalVars = (s as any).arousalVars ?? {})['pcs_vag_backup'] = ((s as any).sucvagorg ?? 0);
      ((s as any).arousalVars = (s as any).arousalVars ?? {})['pcs_ass_backup'] = ((s as any).sucanusorg ?? 0);
      ((s as any).arousalVars = (s as any).arousalVars ?? {})['pcs_throat_backup'] = ((s as any).sucthroorg ?? 0);
      if (((s as any).food_loc ?? 0) !== '') {
        (s as any).food_loc_last = ((s as any).food_loc ?? 0);
      }
      if ((!((s as any).fsize ?? 0))) {
        (s as any).fsize = 12;
        ((s as any).theme = (s as any).theme ?? {})['fsize'] = 12;
      }
      qspCall(s, 'array', 'remove_element', 'cheatmenu', 'DNA');
      qspCall(s, 'array', 'remove_element', 'cheatmenu', 'DNAC');
      qspCall(s, 'array', 'remove_element', 'cheatmenu', 'DNAF');
      qspCall(s, 'array', 'remove_element', 'cheatmenu', 'DNAM');
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['disable_autosave'] = ((s as any).disable_autosave ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['use_popups'] = ((s as any).usePopUps ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['imgw'] = ((s as any).imgw ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['imgh'] = ((s as any).imgh ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['tablemap'] = ((s as any).Enable_tablemap ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['debug'] = ((s as any).loadg_show_debug ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['faceturn'] = ((s as any).Enable_faceturn ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['themetype'] = ((s as any).themetype ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['theme_main_name'] = ((s as any).theme_main_name ?? 0);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pay_opt'] = ((s as any).money_vars ?? 0)?.['pay_opt'];
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pay_opt_backup'] = ((s as any).money_vars ?? 0)?.['pay_opt_backup'];
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['income_opt'] = ((s as any).money_vars ?? 0)?.['income_opt'];
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['allow_overdraft'] = ((s as any).money_vars ?? 0)?.['allow_overdraft'];
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult_opt'] = ((s as any).money_vars ?? 0)?.['pos_mult_opt'];
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult'] = ((s as any).money_vars ?? 0)?.['pos_mult'];
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult_opt'] = ((s as any).money_vars ?? 0)?.['neg_mult_opt'];
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult'] = ((s as any).money_vars ?? 0)?.['neg_mult'];
      if (((s as any).trait_vars ?? 0)?.['fertility_from_bc'] === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['fertility_bc_conditioning'] = 50;
      }
      qspCall(s, 'array', 'remove_element', 'trait_vars', 'fertility_from_bc');
      qspCall(s, 'array', 'remove_element', 'trait_vars', 'fertility_exp');
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = ((s as any).trait_vars ?? 0)?.['body_hair_exp'];
      if (((s as any).trait_vars ?? 0)?.['body_hair'] !== 0) {
        // TODO-QSP: gs 'traits', 'level', 'body_hair_attitude', trait_vars['body_hair']
      }
      qspCall(s, 'array', 'remove_element', 'trait_vars', 'body_hair');
      qspCall(s, 'array', 'remove_element', 'trait_vars', 'body_hair_exp');
      qspCall(s, 'array', 'remove_element', 'trait_vars', 'sensitivity_exp');
      if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf('job_pav_tour_guide') : -1) >= 0) {
        ((s as any).event_recur = (s as any).event_recur ?? {})['job_pav_tour_guide'] = 'yearly-0601-0831';
      }
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['intro_templates_migrated'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['intro_templates_migrated'] = 1;
      (s as any).uglyduck_flag = 1 - ((s as any).uglyduck_flag ?? 0);
      if ((!((s as any).uglyduck_flag ?? 0))) {
        // TODO-QSP: killvar 'uglyduck_flag'
      }
    }
    qspCall(s, 'npcstatic1', '', 37);
    if (((s as any).nichWork ?? 0) === 2  &&  ((s as any).job_status ?? 0)?.['nich_maid'] !== 'employed') {
      qspCall(s, 'jobs', 'set_employed', 'nich_maid');
    }
    if (((s as any).pav_swimpool ?? 0)?.['lifeguard_job'] > 0  &&  ((s as any).job_status ?? 0)?.['pav_pool_lifeguard'] !== 'employed') {
      qspCall(s, 'jobs', 'set_employed', 'pav_pool_lifeguard');
      ((s as any).job_last_work_day = (s as any).job_last_work_day ?? {})['pav_pool_lifeguard'] = ((s as any).pav_swimpool ?? 0)?.['lifeguard_last_workday'];
      if (((s as any).pav_swimpool ?? 0)?.['lifeguard_job'] === 2) {
        qspCall(s, 'jobs', 'set_rank', 'pav_pool_lifeguard', 1);
        qspCall(s, 'jobs', 'change_schedule', 'pav_pool_lifeguard', 1);
      }
    } else {
      if (((s as any).pav_swimpool ?? 0)?.['lifeguard_applied'] > 0  &&  ((s as any).pav_swimpool ?? 0)?.['lifeguard_applied'] < 3  &&  ((s as any).job_hiring_step ?? 0)?.['pav_pool_lifeguard'] === 0) {
        ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_pool_lifeguard'] = ((s as any).pav_swimpool ?? 0)?.['lifeguard_applied'];
      }
    }
    if (((s as any).workrin ?? 0) === 1  &&  ((s as any).job_status ?? 0)?.['city_market_saleswoman'] !== 'employed') {
      qspCall(s, 'jobs', 'set_employed', 'city_market_saleswoman');
      if ((!((s as any).arturplan ?? 0))) {
        (s as any).arturplan = 5000;
      }
    }
    if (((s as any).teacher ?? 0)?.['job'] >= 3  &&  ((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] !== 'employed') {
      qspCall(s, 'jobs', 'set_employed', 'pav_voc_school_teacher');
      qspCall(s, 'jobs', 'set_rank', 'pav_voc_school_teacher', ((((s as any).teacher ?? 0)?.['job'] === 3) ? (1) : (2)));
    } else {
      if (((s as any).teacher ?? 0)?.['job'] === 2  &&  ((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] !== 'employed') {
        qspCall(s, 'jobs', 'set_employed', 'pav_voc_school_teacher');
        qspCall(s, 'jobs', 'set_rank', 'pav_voc_school_teacher', 2);
        ((s as any).teacher = (s as any).teacher ?? {})['on_notice'] = 1;
      } else {
        if (((s as any).teacher ?? 0)?.['job'] === 1  &&  ((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === '') {
          ((s as any).job_status = (s as any).job_status ?? {})['pav_voc_school_teacher'] = 'fired';
        }
      }
    }
    if (((s as any).model ?? 0)?.['status'] === 1  &&  ((s as any).job_status ?? 0)?.['city_aphrodite_model'] !== 'employed') {
      qspCall(s, 'jobs', 'set_employed', 'city_aphrodite_model');
    }
    if ((((s as any).bomzQW ?? 0) === 1  ||  ((s as any).bomzQW ?? 0) === 2)  &&  ((s as any).job_status ?? 0)?.['city_pornstudio_delivery'] !== 'employed') {
      qspCall(s, 'jobs', 'set_employed', 'city_pornstudio_delivery');
    } else {
      if (((s as any).bomzQW ?? 0) === 3  &&  ((s as any).job_hiring_step ?? 0)?.['city_pornstudio_delivery'] === 0) {
        ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_pornstudio_delivery'] = 1;
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['city_salon_masseuse_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['city_salon_masseuse_v4'] = 1;
      if (((s as any).masseuse ?? 0)?.['jobtype'] !== 0  &&  ((s as any).job_status ?? 0)?.['city_salon_masseuse'] === '') {
        if (((s as any).masseuse ?? 0)?.['jobtype'] > 0) {
          qspCall(s, 'jobs', 'set_employed', 'city_salon_masseuse');
          // TODO-QSP: gs 'jobs', 'set_rank', 'city_salon_masseuse', masseuse['jobtype']
          ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = '';
          if (((s as any).masseuse ?? 0)?.['hired_day'] === 0) {
            ((s as any).masseuse = (s as any).masseuse ?? {})['hired_day'] = ((s as any).daystart ?? 0) - 7;
          }
          if (((s as any).masseuse ?? 0)?.['jobtype'] === 2) {
            ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 125;
          } else {
            if (((s as any).masseuse ?? 0)?.['jobtype'] === 3) {
              ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 150;
            } else {
              if (((s as any).masseuse ?? 0)?.['jobtype'] === 4) {
                ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 175;
              } else {
                if (((s as any).masseuse ?? 0)?.['jobtype'] === 5) {
                  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 250;
                } else {
                  if (((s as any).masseuse ?? 0)?.['jobtype'] === 6) {
                    ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 150;
                  } else {
                    ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 100;
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).masseuse ?? 0)?.['jobtype'] === -6) {
            ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = 'fired';
            ((s as any).masseuse = (s as any).masseuse ?? {})['last_rank'] = 6;
          } else {
            ((s as any).masseuse = (s as any).masseuse ?? {})['last_rank'] = ((((s as any).masseuse ?? 0)?.['jobtype'] >= 0) ? (((s as any).masseuse ?? 0)?.['jobtype']) : (-(((s as any).masseuse ?? {})?.['jobtype'] ?? 0)));
            ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = 'resigned';
            if (((s as any).masseuse ?? 0)?.['last_rank'] === 2) {
              ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 125;
            } else {
              if (((s as any).masseuse ?? 0)?.['last_rank'] === 3) {
                ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 150;
              } else {
                if (((s as any).masseuse ?? 0)?.['last_rank'] === 4) {
                  ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 175;
                } else {
                  if (((s as any).masseuse ?? 0)?.['last_rank'] === 5) {
                    ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 250;
                  } else {
                    ((s as any).masseuse = (s as any).masseuse ?? {})['hourly'] = 100;
                  }
                }
              }
            }
          }
        }
        qspCall(s, 'array', 'remove_element', 'masseuse', 'jobtype');
      }
      qspCall(s, 'array', 'remove_element', 'masseuse', 'payday');
      qspCall(s, 'array', 'remove_element', 'masseuse', 'weeks_pay');
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['pav_leonid_slave_v4'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['pav_leonid_slave_v4'] = 1;
      if (((s as any).leonidSlave ?? 0) === 1  &&  ((s as any).job_status ?? 0)?.['pav_leonid_slave'] === '') {
        qspCall(s, 'jobs', 'set_employed', 'pav_leonid_slave');
        if (((s as any).leonidSlaveDay ?? 0) > ((s as any).daystart ?? 0)) {
          qspCall(s, 'jobs', 'book_slot', 'pav_leonid_slave', ((s as any).leonidSlaveDay ?? 0), 0);
        } else {
          // TODO-QSP: gs 'jobs', 'book_slot', 'pav_leonid_slave', daystart + 1, 0
        }
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['fixed_cal_tournament'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['fixed_cal_tournament'] = 1;
      if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf('volleyball_tournament') : -1) !== -1) {
        qspCall(s, 'calendar', 'remove', 'volleyball_tournament');
        qspCall(s, 'calendar', 'add', 'volleyball_tournament');
      }
    }
    if (((s as any).calendar_temp_new_flag ?? 0)?.['fixed_starlets_friday_anchor'] === 0) {
      ((s as any).calendar_temp_new_flag = (s as any).calendar_temp_new_flag ?? {})['fixed_starlets_friday_anchor'] = 1;
      if ((Array.isArray((s as any).events_list) ? ((s as any).events_list as any[]).indexOf('starlets_practice_friday') : -1) !== -1) {
        qspCall(s, 'calendar', 'remove', 'starlets_practice_friday');
        qspCall(s, 'calendar', 'add', 'starlets_practice_friday');
      }
    }
    if (((s as any).slutty ?? 0) !== 0) {
      ((s as any).stat = (s as any).stat ?? {})['prostitution_count'] = ((s as any).slutty ?? 0);
      // TODO-QSP: killvar'slutty'
    }
    if (((s as any).hidden_slutty ?? 0) !== 0) {
      ((s as any).stat = (s as any).stat ?? {})['hidden_prostitution_count'] = ((s as any).hidden_slutty ?? 0);
      // TODO-QSP: killvar'hidden_slutty'
    }
    ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['job_icon_themed'] = 1;
    (s as any).rand_events_last = ((s as any).event_vars ?? 0)?.['last_event'];
    qspCall(s, 'array', 'remove_element', 'event_vars', 'last_event');
    (s as any).temp_id = 'street_events_city' + '_' + 'failed_celeb_blackmail\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'failed_celeb_blackmail\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'nich_taras_abduct\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_home' + '_' + 'minor_debt_payoff\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_home' + '_' + 'minor_didnt_deliver_disk\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_home' + '_' + 'minor_tatiana_unlock_magic\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'random_rape\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'random_robbery\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'random_snatching\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'mistmeet\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'random_lover\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_guitar_man\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_guitar_girl\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_violin_man\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_violin_girl\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_portraits\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_hetero_couple\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_lesbian_couple\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_naked_woman\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_motorcycle_naked\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_girl_split\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_girl_flashing\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_handout_flyers\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_woman_flashing\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'divorce_party\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_woman_window\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_guys_fighting\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_girls_fighting\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_unconscious\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_girls_gossiping\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_boys_beer\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_groping_1\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_groping_2\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_clothes_grabbed\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_wind_skirt\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_no_bra\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_general' + '_' + 'minor_girl_beggar\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_city' + '_' + 'minor_girl_beggar_2\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_city' + '_' + 'minor_homeless_men\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_city' + '_' + 'minor_old_couple\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_city' + '_' + 'minor_gay_couple\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_city' + '_' + 'fame_events\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_pav' + '_' + 'minor_prostitutes\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_pav' + '_' + 'minor_naked_hawker\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_pav' + '_' + 'minor_improvised_market\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_pav' + '_' + 'minor_older_women_shaming\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    (s as any).temp_id = 'street_events_pav' + '_' + 'fame_events\' & rand_events_list_last[$temp_id] = event_vars[\'last_\' + $temp_id] & gs \'array\', \'remove_element\', \'event_vars\', \'last_' + ((s as any).temp_id ?? 0);
    if (((s as any).postamountrand ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['load'] = ((s as any).postamountrand ?? 0);
      // TODO-QSP: killvar 'postamountrand'
    }
    if (((s as any).posteventcounter ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['round'] = ((s as any).posteventcounter ?? 0);
      // TODO-QSP: killvar 'posteventcounter'
    }
    if (((s as any).posteventQW1 ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['qw_1'] = ((s as any).posteventQW1 ?? 0);
      // TODO-QSP: killvar 'posteventQW1'
    }
    if (((s as any).posteventQW3 ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['qw_3'] = ((s as any).posteventQW3 ?? 0);
      // TODO-QSP: killvar 'posteventQW3'
    }
    if (((s as any).posteventQW2 ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['qw_2'] = ((s as any).posteventQW2 ?? 0);
      // TODO-QSP: killvar 'posteventQW2'
    }
    if (((s as any).posteventQW4 ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['qw_4'] = ((s as any).posteventQW4 ?? 0);
      // TODO-QSP: killvar 'posteventQW4'
    }
    if (((s as any).posteventQW5 ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['qw_5'] = ((s as any).posteventQW5 ?? 0);
      // TODO-QSP: killvar 'posteventQW5'
    }
    if (((s as any).poststreets ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['danger'] = ((s as any).poststreets ?? 0);
      // TODO-QSP: killvar 'poststreets'
    }
    if (((s as any).postbandQW ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['bandit'] = ((s as any).postbandQW ?? 0);
      // TODO-QSP: killvar 'postbandQW'
    }
    if (((s as any).postexhibi ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['exhib'] = ((s as any).postexhibi ?? 0);
      // TODO-QSP: killvar 'postexhibi'
    }
    if (((s as any).posthj ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['hj'] = ((s as any).posthj ?? 0);
      // TODO-QSP: killvar 'posthj'
    }
    if (((s as any).postbj ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['bj'] = ((s as any).postbj ?? 0);
      // TODO-QSP: killvar 'postbj'
    }
    if (((s as any).postlate ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['late'] = ((s as any).postlate ?? 0);
      // TODO-QSP: killvar 'postlate'
    }
    if (((s as any).postburn ?? 0) !== 0) {
      ((s as any).post_vars = (s as any).post_vars ?? {})['burn'] = ((s as any).postburn ?? 0);
      // TODO-QSP: killvar 'postburn'
    }
    if (((s as any).succubus ?? 0)?.['succubusQW'] === 3) {
      ((s as any).succubus = (s as any).succubus ?? {})['succubusQW'] = 12;
    }
    if (((s as any).succubus ?? 0)?.['succubusQW'] === 4) {
      ((s as any).succubus = (s as any).succubus ?? {})['succubusQW'] = 11;
    }
    if (((s as any).succubus ?? 0)?.['succubusQW'] === 5) {
      ((s as any).succubus = (s as any).succubus ?? {})['succubusQW'] = 14;
    }
    if (((s as any).temp_saveupdater_guard ?? 0)?.['show_0.9.9.0_features'] === 0) {
      ((s as any).temp_saveupdater_guard = (s as any).temp_saveupdater_guard ?? {})['show_0.9.9.0_features'] = 1;
      (s as any).update_report_last = 97;
      (s as any).update_report_new = 99;
    }
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[0] = 'mental';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[1] = 'sport';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[2] = 'combat';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[3] = 'beauty';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[4] = 'artistic';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[5] = 'job';
    (s as any).temp_mig_gi = 0;
    // TODO-QSP: :save0900_grpmig_skloop
    if (((s as any).temp_mig_gi ?? 0) < Object.keys((s as any).temp_mig_g ?? {}).length) {
      (s as any).temp_mig_old = 'skill_grp_' + ((s as any).temp_mig_g ?? 0)?.[String((s as any).temp_mig_gi ?? 0)];
      (s as any).temp_mig_j = 0;
      // TODO-QSP: :save0900_grpmig_skmloop
      if (((s as any).temp_mig_j ?? 0) < Object.keys((s as any)['$' + ((s as any).temp_mig_old ?? 0)] ?? {}).length) {
        (s as any).temp_mig_val = 0;
        // TODO-QSP: dynamic '$skill_grp[''<<$temp_mig_g[temp_mig_gi]>>_<<temp_mig_j>>''] = ''<<$temp_mig_val>>'''
        (s as any).temp_mig_j = ((s as any).temp_mig_j ?? 0) + (1);
        // TODO-QSP: jump 'save0900_grpmig_skmloop'
      }
      (s as any).temp_mig_gi = ((s as any).temp_mig_gi ?? 0) + (1);
      // TODO-QSP: jump 'save0900_grpmig_skloop'
    }
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[0] = 'family';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[1] = 'coolkid';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[2] = 'jock';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[3] = 'nerd';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[4] = 'gopnik';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[5] = 'staff';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[6] = 'pavlovsk';
    ((s as any).temp_mig_g = (s as any).temp_mig_g ?? {})[7] = 'city';
    (s as any).temp_mig_gi = 0;
    // TODO-QSP: :save0900_grpmig_rlloop
    if (((s as any).temp_mig_gi ?? 0) < Object.keys((s as any).temp_mig_g ?? {}).length) {
      (s as any).temp_mig_old = 'rel_grp_' + ((s as any).temp_mig_g ?? 0)?.[String((s as any).temp_mig_gi ?? 0)];
      (s as any).temp_mig_j = 0;
      // TODO-QSP: :save0900_grpmig_rlmloop
      if (((s as any).temp_mig_j ?? 0) < Object.keys((s as any)['$' + ((s as any).temp_mig_old ?? 0)] ?? {}).length) {
        (s as any).temp_mig_val = 0;
        // TODO-QSP: dynamic '$rel_grp[''<<$temp_mig_g[temp_mig_gi]>>_<<temp_mig_j>>''] = ''<<$temp_mig_val>>'''
        (s as any).temp_mig_j = ((s as any).temp_mig_j ?? 0) + (1);
        // TODO-QSP: jump 'save0900_grpmig_rlmloop'
      }
      (s as any).temp_mig_gi = ((s as any).temp_mig_gi ?? 0) + (1);
      // TODO-QSP: jump 'save0900_grpmig_rlloop'
    }
  }
  if (((s as any).temp_current_save_version ?? 0) < 90901) {
    if (Object.keys((s as any).accessible_property_codes ?? {}).length === 0) {
      (s as any).su0991_max = 0;
      (s as any).su0991_i = 0;
      if (((s as any).su0991_max ?? 0) > 0) {
        // TODO-QSP: :su0991_accessible_property_migration_loop
        (s as any).su0991_code = ((s as any).accessible_property ?? 0)?.[String((s as any).su0991_i ?? 0)];
        if (((s as any).su0991_code ?? 0) !== ''  &&  ((s as any).home_name ?? 0)?.[String((s as any).su0991_code ?? 0)] !== ''  &&  (Array.isArray((s as any).accessible_property_codes) ? ((s as any).accessible_property_codes as any[]).indexOf(((s as any).su0991_code ?? 0)) : -1) === -1) {
          // TODO-QSP: $accessible_property_codes[] = $su0991_code
        }
        (s as any).su0991_i = ((s as any).su0991_i ?? 0) + (1);
        if (((s as any).su0991_i ?? 0) < ((s as any).su0991_max ?? 0)) {
          // TODO-QSP: jump 'su0991_accessible_property_migration_loop'
        }
      }
    }
    (s as any).su0991_max = 0;
    (s as any).su0991_i = 0;
    if (((s as any).su0991_max ?? 0) > 0) {
      // TODO-QSP: :su0991_npc_label_migration_loop
      (s as any).su0991_npcID = ((s as any).npc_index ?? 0)?.[String((s as any).su0991_i ?? 0)];
      if (((s as any).npc_usedname ?? 0)?.[String((s as any).su0991_npcID ?? 0)] !== '') {
        if (((s as any).npc_style_label ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === '') {
          if (((s as any).npc_style ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 1) {
            // TODO-QSP: $npc_style_label[$su0991_npcID] = 'normal'
          } else {
            if (((s as any).npc_style ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 2) {
              // TODO-QSP: $npc_style_label[$su0991_npcID] = 'gopnik'
            } else {
              if (((s as any).npc_style ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 3) {
                // TODO-QSP: $npc_style_label[$su0991_npcID] = 'nerdy'
              } else {
                if (((s as any).npc_style ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 4) {
                  // TODO-QSP: $npc_style_label[$su0991_npcID] = 'sporty'
                } else {
                  if (((s as any).npc_style ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 5) {
                    // TODO-QSP: $npc_style_label[$su0991_npcID] = 'fashionable'
                  } else {
                    // TODO-QSP: $npc_style_label[$su0991_npcID] = 'businessman'
                  }
                }
              }
            }
          }
        }
        if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === '') {
          if (((s as any).npc_apt_type ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 6) {
            // TODO-QSP: $npc_apt_type_label[$su0991_npcID] = 'mansion'
          } else {
            if (((s as any).npc_apt_type ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 4  ||  ((s as any).npc_apt_type ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 5) {
              // TODO-QSP: $npc_apt_type_label[$su0991_npcID] = 'multi_bedroom'
            } else {
              if (((s as any).npc_apt_type ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 3) {
                // TODO-QSP: $npc_apt_type_label[$su0991_npcID] = 'one_bedroom'
              } else {
                if (((s as any).npc_apt_type ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 2) {
                  // TODO-QSP: $npc_apt_type_label[$su0991_npcID] = 'studio'
                } else {
                  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 1) {
                    // TODO-QSP: $npc_apt_type_label[$su0991_npcID] = 'student_dorm'
                  }
                }
              }
            }
          }
        }
        if (((s as any).npc_fidelity ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === '') {
          if (((s as any).npc_fidelity ?? 0)?.[String((s as any).su0991_npcID ?? 0)] <= 4) {
            ((s as any).npc_fidelity_num = (s as any).npc_fidelity_num ?? {})[String((s as any).su0991_npcID ?? 0)] = ((s as any).npc_fidelity ?? 0)?.[String((s as any).su0991_npcID ?? 0)];
            // TODO-QSP: $npc_fidelity[$su0991_npcID] = 'cheater'
          } else {
            if (((s as any).npc_fidelity ?? 0)?.[String((s as any).su0991_npcID ?? 0)] <= 6) {
              // TODO-QSP: $npc_fidelity[$su0991_npcID] = 'seduced'
            } else {
              if (((s as any).npc_fidelity ?? 0)?.[String((s as any).su0991_npcID ?? 0)] === 7) {
                // TODO-QSP: $npc_fidelity[$su0991_npcID] = 'open'
              } else {
                if (((s as any).npc_fidelity ?? 0)?.[String((s as any).su0991_npcID ?? 0)] > 0) {
                  // TODO-QSP: $npc_fidelity[$su0991_npcID] = 'faithful'
                }
              }
            }
          }
          ((s as any).npc_fidelity_num = (s as any).npc_fidelity_num ?? {})[String((s as any).su0991_npcID ?? 0)] = ((s as any).npc_fidelity ?? 0)?.[String((s as any).su0991_npcID ?? 0)];
          ((s as any).npc_fidelity = (s as any).npc_fidelity ?? {})[String((s as any).su0991_npcID ?? 0)] = 0;
        } else {
          if (((s as any).npc_fidelity_label ?? 0)?.[String((s as any).su0991_npcID ?? 0)] !== '') {
            // TODO-QSP: $npc_fidelity[$su0991_npcID] = $npc_fidelity_label[$su0991_npcID]
            // TODO-QSP: $npc_fidelity_label[$su0991_npcID] = ''
          }
        }
      }
      (s as any).su0991_i = ((s as any).su0991_i ?? 0) + (1);
      if (((s as any).su0991_i ?? 0) < ((s as any).su0991_max ?? 0)) {
        // TODO-QSP: jump 'su0991_npc_label_migration_loop'
      }
    }
    qspCall(s, 'archetypes', 'init');
    if (((s as any).stat ?? 0)?.['last_sex_day_strap'] > ((s as any).stat ?? 0)?.['last_sex_day_vaginal']) {
      ((s as any).stat = (s as any).stat ?? {})['last_sex_day_vaginal'] = ((s as any).stat ?? 0)?.['last_sex_day_strap'];
    }
    if (((s as any).stat ?? 0)?.['last_sex_day_strap'] > ((s as any).stat ?? 0)?.['last_sex_day']) {
      ((s as any).stat = (s as any).stat ?? {})['last_sex_day'] = ((s as any).stat ?? 0)?.['last_sex_day_strap'];
    }
    qspCall(s, 'array', 'remove_element', 'stat', 'last_sex_day_strap');
    if (((s as any).stat ?? 0)?.['last_rape_day'] > ((s as any).stat ?? 0)?.['last_sex_day_rape']) {
      ((s as any).stat = (s as any).stat ?? {})['last_sex_day_rape'] = ((s as any).stat ?? 0)?.['last_rape_day'];
    }
    if (((s as any).stat ?? 0)?.['last_rape_day'] > ((s as any).stat ?? 0)?.['last_sex_day_rape_known']) {
      ((s as any).stat = (s as any).stat ?? {})['last_sex_day_rape_known'] = ((s as any).stat ?? 0)?.['last_rape_day'];
    }
    if (((s as any).stat ?? 0)?.['last_rape_day'] > ((s as any).stat ?? 0)?.['last_sex_day']) {
      ((s as any).stat = (s as any).stat ?? {})['last_sex_day'] = ((s as any).stat ?? 0)?.['last_rape_day'];
    }
    qspCall(s, 'array', 'remove_element', 'stat', 'last_rape_day');
    qspCall(s, 'archetypes', 'init');
  }
  qspCall(s, 'mod_system', 'saveupdater');
  qspCall(s, 'saveg', '');
  scene.build();
}

export const saveupdater: LocationDef = {
  name: 'saveupdater',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
