import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAddItem(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'clothing') {
    (s as any).temp_type = ((s as any).locArgs?.[2] ?? 0);
  } else {
    (s as any).temp_type = (String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('_'))) + 1) - 1)));
  }
  qspCall(s, '$ARGS[1]', 'add_item', ((s as any).temp_type ?? 0), ((s as any).locArgs?.[3] ?? 0));
  if (String((s as any).locArgs?.[1] ?? '') === 'clothing') {
    if (String((s as any).locArgs?.[4] ?? '') > 0) {
      scene.text('' + ((s as any).locArgs?.[2] ?? 0) + '_h[' + ((s as any).locArgs?.[3] ?? 0) + '] = ' + ((s as any).locArgs?.[4] ?? 0) + '');
    }
    if (String((s as any).locArgs?.[5] ?? '') > 0) {
      scene.text('' + ((s as any).locArgs?.[2] ?? 0) + '_b[' + ((s as any).locArgs?.[3] ?? 0) + '] = ' + ((s as any).locArgs?.[5] ?? 0) + '');
    }
    if (String((s as any).locArgs?.[6] ?? '') > 0) {
      scene.text('' + ((s as any).locArgs?.[2] ?? 0) + '_h[' + ((s as any).locArgs?.[3] ?? 0) + '] += rand(-' + ((s as any).locArgs?.[6] ?? 0) + ', ' + ((s as any).locArgs?.[6] ?? 0) + ')');
    }
    if (String((s as any).locArgs?.[6] ?? '') < 0) {
      scene.text('' + ((s as any).locArgs?.[2] ?? 0) + '_h[' + ((s as any).locArgs?.[3] ?? 0) + '] += rand(' + ((s as any).locArgs?.[6] ?? 0) + ', 0)');
    }
  }
  if (String((s as any).locArgs?.[7] ?? '') === 1) {
    qspCall(s, '$ARGS[1]', 'wear', ((s as any).temp_type ?? 0), ((s as any).locArgs?.[3] ?? 0));
  }
  (s as any).temp_type = undefined;
  return;
  scene.build();
}

function enterWearItem(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0), 1]; enterAddItem(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterGenerateRandom(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_tot_sum = 0;
  (s as any).temp_gr_ind = 1;
  while (true) {
    if (((s as any).temp_gr_ind ?? 0) <= String((s as any).locArgs?.[1] ?? '')) {
      ((s as any).temp_rand = (s as any).temp_rand ?? {})[String((s as any).temp_gr_ind ?? 0)] = (Math.floor(Math.random() * (2 - (-2) + 1)) + ((-2)));
      (s as any).temp_tot_sum = ((s as any).temp_tot_sum ?? 0) + ((((s as any).temp_rand ?? 0)?.[String((s as any).temp_gr_ind ?? 0)] ?? 0));
      (s as any).temp_gr_ind = ((s as any).temp_gr_ind ?? 0) + (1);
      break;
    }
    while (true) {
      if (((s as any).temp_tot_sum ?? 0) > 0) {
        (s as any).temp_rand = (Math.floor(Math.random() * (((s as any).locArgs?.[1] ?? 0) - 1 + 1)) + (1));
        if (((s as any).temp_rand ?? 0)?.[String((s as any).temp_rand ?? 0)] > -2) {
          ((s as any).temp_rand = (s as any).temp_rand ?? {})[String((s as any).temp_rand ?? 0)] = ((s as any).temp_rand[String((s as any).temp_rand ?? 0)] ?? 0) - (1);
          (s as any).temp_tot_sum = ((s as any).temp_tot_sum ?? 0) - (1);
        }
        break;
      } else {
        if (((s as any).temp_tot_sum ?? 0) < 0) {
          (s as any).temp_rand = (Math.floor(Math.random() * (((s as any).locArgs?.[1] ?? 0) - 1 + 1)) + (1));
          if (((s as any).temp_rand ?? 0)?.[String((s as any).temp_rand ?? 0)] < 2) {
            ((s as any).temp_rand = (s as any).temp_rand ?? {})[String((s as any).temp_rand ?? 0)] = ((s as any).temp_rand[String((s as any).temp_rand ?? 0)] ?? 0) + (1);
            (s as any).temp_tot_sum = ((s as any).temp_tot_sum ?? 0) + (1);
          }
          break;
        }
      }
      (s as any).temp_tot_sum = undefined;
      (s as any).temp_gr_ind = undefined;
      return;
    }
  }
  scene.build();
}

function enterRandomizeStats(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 8]; enterGenerateRandom(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + ((((s as any).temp_rand ?? 0)?.[1] ?? 0));
  (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + ((((s as any).temp_rand ?? 0)?.[2] ?? 0));
  (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + ((((s as any).temp_rand ?? 0)?.[3] ?? 0));
  (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + ((((s as any).temp_rand ?? 0)?.[4] ?? 0));
  (s as any).pcs_react = ((s as any).pcs_react ?? 0) + ((((s as any).temp_rand ?? 0)?.[5] ?? 0));
  (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + ((((s as any).temp_rand ?? 0)?.[6] ?? 0));
  (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + ((((s as any).temp_rand ?? 0)?.[7] ?? 0));
  (s as any).pcs_prcptn = ((s as any).pcs_prcptn ?? 0) + ((((s as any).temp_rand ?? 0)?.[8] ?? 0));
  (s as any).strenbuf = ((s as any).strenbuf ?? 0) + ((((s as any).temp_rand ?? 0)?.[1] ?? 0));
  (s as any).agilbuf = ((s as any).agilbuf ?? 0) + ((((s as any).temp_rand ?? 0)?.[2] ?? 0));
  (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + ((((s as any).temp_rand ?? 0)?.[3] ?? 0));
  (s as any).temp_rand = undefined;
  return;
  scene.build();
}

function enterRandomizeGrades(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 13]; enterGenerateRandom(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'grades', 'grade_award', 'school', 'math', (((s as any).temp_rand ?? 0)?.[1] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'rus', (((s as any).temp_rand ?? 0)?.[2] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'lit', (((s as any).temp_rand ?? 0)?.[3] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'art', (((s as any).temp_rand ?? 0)?.[4] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'bio', (((s as any).temp_rand ?? 0)?.[5] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'eng', (((s as any).temp_rand ?? 0)?.[6] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'geo', (((s as any).temp_rand ?? 0)?.[7] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'sci', (((s as any).temp_rand ?? 0)?.[8] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'his', (((s as any).temp_rand ?? 0)?.[9] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'shop', (((s as any).temp_rand ?? 0)?.[10] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'comp', (((s as any).temp_rand ?? 0)?.[11] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'mus', (((s as any).temp_rand ?? 0)?.[12] ?? 0));
  qspCall(s, 'grades', 'grade_award', 'school', 'pe', (((s as any).temp_rand ?? 0)?.[13] ?? 0));
  (s as any).temp_rand = undefined;
  return;
  scene.build();
}

function enterInitTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
    (s as any).daystart_start = 521;
    (s as any).hour = 13;
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      (s as any).daystart_start = 603;
      (s as any).hour = 7;
    } else {
      if (((s as any).daystart_start ?? 0) !== 153  &&  ((s as any).daystart_start ?? 0) !== 183  &&  ((s as any).daystart_start ?? 0) !== 214) {
        (s as any).daystart_start = 239;
      }
      (s as any).hour = 9;
    }
  }
  (s as any).daystart = ((s as any).daystart_start ?? 0);
  qspCall(s, 'time', 'update_date');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    (s as any).kanikuli = 5;
    if (((s as any).daystart_start ?? 0) === 239) {
      qspCall(s, 'array', 'remove_element', 'locat', 'Fam_set_month_inGad');
    } else {
      if (((s as any).daystart_start ?? 0) === 214) {
        ((s as any).locat = (s as any).locat ?? {})['Fam_set_month_inGad'] = 1;
      } else {
        if (((s as any).daystart_start ?? 0) === 183) {
          ((s as any).locat = (s as any).locat ?? {})['Fam_set_month_inGad'] = 1;
        } else {
          if (((s as any).daystart_start ?? 0) === 153) {
            ((s as any).locat = (s as any).locat ?? {})['Fam_set_month_inGad'] = 1;
          }
        }
      }
    }
    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['last_month_paid'] = ((s as any).month ?? 0);
    (s as any).kanicont = 245 - ((s as any).daystart_start ?? 0);
  }
  return;
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).fixed_prnd = (Math.floor(Math.random() * 2147483647) + 0);
  if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['new_again_exp'] = 84;
    qspCall(s, 'traits', 'level', 'new_again', 1);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = (-20000);
    qspCall(s, 'traits', 'level', 'heel_preference', (-1));
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSgSettings(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = 3;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mag_porn'] = 40;
      qspCall(s, 'internet_mobile', 'top_up_metered', 'metered_calls', 240);
      (s as any).minut = 0;
      (s as any).hour = 9;
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStart(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMid(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['debug'] = 1;
  // TODO-QSP: showobjs cfg_vars['debug']
  qspCall(s, 'obj_din', 'old');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    qspCall(s, 'stat', '');
  }
  return;
  scene.build();
}

function enterSgSettings(s: GameState, scene: SceneBuilder): void {
  ((s as any).gm_school = (s as any).gm_school ?? {})[6] = 1;
  (s as any).sisboyday = (-2);
  qspCall(s, 'homes_properties', 'block_access', 'city_apartment');
  (s as any).hcolmotherremember = ((s as any).pcs_haircol ?? 0);
  (s as any).hcolfatherremember = ((s as any).pcs_haircol ?? 0);
  (s as any).hcolfronce = 1;
  (s as any).koldobtmp_d = (Math.floor(Math.random() * 28) + 1);
  (s as any).koldobtmp_y = ((s as any).birthyear ?? 0);
  (s as any).koldobtmp_m = ((s as any).birthmonth ?? 0) + 11;
  if (((s as any).koldobtmp_m ?? 0) > 12) {
    (s as any).koldobtmp_y = ((s as any).koldobtmp_y ?? 0) + (1);
    (s as any).koldobtmp_m = ((s as any).koldobtmp_m ?? 0) - (12);
  }
  ((s as any).npc_dob = (s as any).npc_dob ?? {})['A34'] = ((s as any).koldobtmp_y ?? 0) * 10000;
  ((s as any).npc_dob = (s as any).npc_dob ?? {})['A34'] = ((s as any).npc_dob['A34'] ?? 0) + (((s as any).koldobtmp_m ?? 0) * 100);
  ((s as any).npc_dob = (s as any).npc_dob ?? {})['A34'] = ((s as any).npc_dob['A34'] ?? 0) + (((s as any).koldobtmp_d ?? 0));
  (s as any).koldobtmp_d = undefined;
  (s as any).koldobtmp_m = undefined;
  (s as any).koldobtmp_y = undefined;
  if (((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) >= 25) {
    (s as any).holyday = '<b>Summer Break ends in ' + 32-((s as any).day ?? 0) + ' days.</b>';
  } else {
    (s as any).holyday = '<b>Summer Break</b>';
  }
  return;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).update_report_last = 99;
  if (((s as any).start_type ?? 0)?.['group']  === '') {
    ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'custom';
  }
  if (((s as any).start_type ?? 0)?.['cat']  === '') {
    ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'custom';
  }
  if (((s as any).start_type ?? 0)?.['cat'] !== 'custom') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRandomizeStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRandomizeGrades(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (((s as any).currentpursetype ?? 0) !== ''  &&  ((s as any).currentpursetype ?? 0) !== 'none') {
    (s as any).temp_pursetype = ((s as any).currentpursetype ?? 0);
    (s as any).temp_pursenumber = ((s as any).currentpursenumber ?? 0);
  }
  if (((s as any).clothingworntype ?? 0) === '') {
    qspCall(s, 'outfit', 'clear_all');
  }
  qspCall(s, 'outfit', 'backup');
  if (((s as any).temp_pursetype ?? 0) !== '') {
    qspCall(s, 'purses', 'wear', ((s as any).temp_pursetype ?? 0), ((s as any).temp_pursenumber ?? 0));
    (s as any).temp_pursetype = undefined;
    (s as any).temp_pursenumber = undefined;
  }
  (s as any).openInnerThought = '<em>';
  (s as any).closeInnerThought = '</em>';
  ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerEndH'] = 8;
  ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerEndM'] = 0;
  ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerH'] = 6;
  ((s as any).alarmVars = (s as any).alarmVars ?? {})['timerM'] = 30;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_active'] = 1;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['dreams_active'] = 1;
  (s as any).BDSMfilm = 0;
  (s as any).pornstudio = 0;
  (s as any).pfilmSTOP = 0;
  (s as any).thinkpreg = 0;
  (s as any).denypreg = 0;
  (s as any).pertemp = 1;
  (s as any).pillcvrt = 1;
  (s as any).pcs_naturallashes = ((s as any).pcs_lashes ?? 0);
  (s as any).vshrink = 1;
  (s as any).vshrinkdays = 6;
  (s as any).ashrink = 1;
  (s as any).ashrinkdays = 3;
  (s as any).fairycurse = (-1);
  ((s as any).excer_name = (s as any).excer_name ?? {})[1] = 'Default 1';
  ((s as any).excer_name = (s as any).excer_name ?? {})[2] = 'Default 2';
  ((s as any).excer_name = (s as any).excer_name ?? {})[3] = 'Default 3';
  ((s as any).excer_name = (s as any).excer_name ?? {})[4] = 'Default 4';
  ((s as any).excer_name = (s as any).excer_name ?? {})[5] = 'Default 5';
  qspCall(s, 'time', 'init_monthnames');
  qspCall(s, 'time', 'init_monthends');
  qspCall(s, 'time', 'init_weeknames');
  qspCall(s, 'telefon', 'setup');
  (s as any).pcs_dob = ((s as any).birthyear ?? 0) * 10000;
  (s as any).pcs_dob = ((s as any).pcs_dob ?? 0) + ((((s as any).birthmonth ?? 0) * 100));
  (s as any).pcs_dob = ((s as any).pcs_dob ?? 0) + (((s as any).birthday ?? 0));
  (s as any).age = ((s as any).year ?? 0) - ((((s as any).pcs_dob ?? 0) - (((s as any).pcs_dob ?? 0) % 10000)) / 10000);
  if (((((s as any).month ?? 0) * 100) + ((s as any).day ?? 0)) < ((s as any).pcs_dob ?? 0) % 10000) {
    (s as any).age = ((s as any).age ?? 0) - (1);
  }
  if (((s as any).age ?? 0) < 17) {
    (s as any).vidage = ((s as any).age ?? 0);
  } else {
    (s as any).vidage = ((s as any).age ?? 0) - 1;
  }
  (s as any).vidageday = 300;
  (s as any).pcs_health = ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5;
  (s as any).pcs_willpwr = ((s as any).pcs_intel ?? 0) * 5 + ((s as any).pcs_sprt ?? 0) * 5;
  (s as any).pcs_mana = (((s as any).pcs_intel ?? 0) * ((s as any).pcs_magik ?? 0)) + ((s as any).pcs_magik ?? 0) * 100 + ((s as any).pcs_vital ?? 0) * 10 + ((s as any).rikudo ?? 0);
  (s as any).pcs_mood = (((s as any).moodVars ?? 0)?.['disp_base']);
  (s as any).pcs_energy = 40;
  (s as any).pcs_hydra = 40;
  (s as any).pcs_sleep = 100;
  (s as any).pcs_stam = 100;
  (s as any).pcs_faith = 100;
  (s as any).prezikProver = 3;
  ((s as any).makeup = (s as any).makeup ?? {})['base'] = 1;
  (s as any).nathcol = ((s as any).pcs_haircol ?? 0);
  (s as any).pcs_pubecol = ((s as any).pcs_haircol ?? 0);
  ((s as any).pcs_pubecol = (s as any).pcs_pubecol ?? {})[1] = 1;
  (s as any).oldsavepcs_haircol = 1;
  qspCall(s, 'body', 'initial');
  qspCall(s, 'time', 'update_date');
  qspCall(s, 'yearstart', '');
  qspCall(s, 'setup_dynamics', '');
  qspCall(s, 'fetish', '');
  qspCall(s, 'newspaper', 'cikl');
  (s as any).rikudootvet = 1415;
  qspCall(s, 'BanSexType', '');
  qspCall(s, 'outdoors', 'weather');
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['job_icon_themed'] = 1;
  (s as any).menoage = (Math.floor(Math.random() * 11) + 40);
  (s as any).temprand = (Math.floor(Math.random() * 11) + 0);
  if ((!((s as any).temprand ?? 0))) {
    (s as any).menoage = ((s as any).menoage ?? 0) + ((Math.floor(Math.random() * 6) + 0));
  } else {
    if (((s as any).temprand ?? 0) < 4) {
      (s as any).menoage = ((s as any).menoage ?? 0) + ((Math.floor(Math.random() * 8) + 3));
    } else {
      if (((s as any).temprand ?? 0) < 9) {
        (s as any).menoage = ((s as any).menoage ?? 0) + ((Math.floor(Math.random() * 8) + 5));
      } else {
        (s as any).menoage = ((s as any).menoage ?? 0) + ((Math.floor(Math.random() * 7) + 7));
      }
    }
  }
  (s as any).daylastperiod = ((s as any).daystart ?? 0);
  (s as any).temprand = (Math.floor(Math.random() * 3) + 1);
  if (((s as any).temprand ?? 0) === 1) {
    (s as any).cycle = 1;
    (s as any).EggRH = (Math.floor(Math.random() * 149) + 1);
    (s as any).focH = ((s as any).EggRH ?? 0) + 4 * 24;
    (s as any).mesec = 0;
    (s as any).unfertegg = 0;
    (s as any).ferteggage = 0;
    (s as any).Ovulate = 0;
    (s as any).lutH = 0;
    (s as any).daylastperiod = ((s as any).daylastperiod ?? 0) - (((s as any).focH ?? 0) / 24);
  } else {
    if (((s as any).temprand ?? 0) === 2) {
      (s as any).lastovulation = ((s as any).daystart ?? 0);
      (s as any).cycle = 2;
      (s as any).unfertegg = 1;
      (s as any).ferteggage = (Math.floor(Math.random() * 45) + 0);
      (s as any).Ovulate = ((Math.floor(Math.random() * 21) + 24) - ((s as any).ferteggage ?? 0));
      if (((s as any).Ovulate ?? 0) <= 0) {
        (s as any).Ovulate = 1;
      }
      (s as any).mesec = 0;
      (s as any).EggRH = 0;
      (s as any).focH = 0;
      (s as any).lutH = 0;
      (s as any).daylastperiod = ((s as any).daylastperiod ?? 0) - (10 + (((s as any).ferteggage ?? 0) / 24));
    } else {
      if (((s as any).temprand ?? 0) === 3) {
        (s as any).cycle = 3;
        (s as any).lutH = (Math.floor(Math.random() * 301) + 0);
        (s as any).ferteggage = 36 + ((s as any).lutH ?? 0);
        (s as any).mesec = 0;
        (s as any).EggRH = 0;
        (s as any).focH = 0;
        (s as any).unfertegg = 0;
        (s as any).Ovulate = 0;
        (s as any).daylastperiod = ((s as any).daylastperiod ?? 0) - (10 + (((s as any).ferteggage ?? 0) / 24));
      }
    }
  }
  if (((s as any).daylastperiod ?? 0) + 4 > ((s as any).daystart ?? 0)) {
    (s as any).lastmens = ((s as any).daylastperiod ?? 0) - 20;
  } else {
    (s as any).lastmens = ((s as any).daylastperiod ?? 0) + 4;
  }
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['enema'] = 1;
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 1;
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = 1;
  (s as any).auto_anal_lube = 1;
  (s as any).pcs_horny = 0;
  (s as any).temprand = undefined;
  (s as any).tgs_skipinto = undefined;
  qspCall(s, 'stat_sklattrib', 'init');
  qspCall(s, 'cum_manage', 'init');
  qspCall(s, 'archetypes', 'init');
  qspCall(s, 'archetypes', 'seed_snapshots');
  qspCall(s, 'traits', 'init');
  qspCall(s, 'traits', 'daily');
  (s as any).opPRE = undefined;
  qspCall(s, 'stat', '');
  ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['debug'] = 0;
  // TODO-QSP: showobjs cfg_vars['debug']
  if (((s as any).trait_vars ?? 0)?.['bookworm_exp'] > 0) {
    (s as any).lastreadday = ((s as any).daystart ?? 0) - 1;
  }
  ((s as any).ml_delparcoQW = (s as any).ml_delparcoQW ?? {})['Stage'] = 0;
  ((s as any).ml_delparcoQW = (s as any).ml_delparcoQW ?? {})['Zariyah Trust'] = 50;
  qspCall(s, 'body', 'Update_Body');
  qspCall(s, 'body', 'DailyUpdate');
  (s as any).pcs_stam = ((s as any).stammax ?? 0);
  qspCall(s, 'calendar', 'pack', 'add', 'holidays');
  (s as any).calendar_temp_new_flag = 1;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['skills_columns'] = 1;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['relations_columns'] = 1;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['icon_height'] = 54;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['menu_icon_height'] = 54;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['weather_height'] = 72;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['show_positive_icons'] = 1;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['image_columns'] = 1;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['image_spacing'] = 1;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['img_width'] = 220;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = 200;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['overlay'] = 1;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['cal_count'] = 3;
  ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['sec_headers'] = 2;
  if (((s as any).start_type ?? 0)?.['group'] !== 'custom') {
    if (((s as any).start_type ?? 0)?.['group'] !== 'nerd') {
      ((s as any).stat_hide_rel_grp = (s as any).stat_hide_rel_grp ?? {})['nerd'] = 1;
    }
    if (((s as any).start_type ?? 0)?.['group'] !== 'jock') {
      ((s as any).stat_hide_rel_grp = (s as any).stat_hide_rel_grp ?? {})['jock'] = 1;
    }
    if (((s as any).start_type ?? 0)?.['group'] !== 'cool') {
      ((s as any).stat_hide_rel_grp = (s as any).stat_hide_rel_grp ?? {})['coolkid'] = 1;
    }
    if (((s as any).start_type ?? 0)?.['group'] !== 'gopnik') {
      ((s as any).stat_hide_rel_grp = (s as any).stat_hide_rel_grp ?? {})['gopnik'] = 1;
    }
    if (((s as any).start_type ?? 0)?.['group'] !== 'outcast') {
      ((s as any).stat_hide_rel_grp = (s as any).stat_hide_rel_grp ?? {})['staff'] = 1;
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
    ((s as any).stat_hide_rel_grp = (s as any).stat_hide_rel_grp ?? {})['pavlovsk'] = 1;
  } else {
    ((s as any).stat_hide_rel_grp = (s as any).stat_hide_rel_grp ?? {})['city'] = 1;
  }
  ((s as any).droutine = (s as any).droutine ?? {})['morning_count'] = 6;
  ((s as any).droutine = (s as any).droutine ?? {})['morning_step_1'] = 'teeth';
  ((s as any).droutine = (s as any).droutine ?? {})['morning_step_2'] = 'shower';
  ((s as any).droutine = (s as any).droutine ?? {})['morning_step_3'] = 'outfit_restore';
  ((s as any).droutine = (s as any).droutine ?? {})['morning_step_4'] = 'deodorant';
  ((s as any).droutine = (s as any).droutine ?? {})['morning_step_5'] = 'apply_makeup';
  ((s as any).droutine = (s as any).droutine ?? {})['morning_step_6'] = 'brush_hair';
  ((s as any).droutine = (s as any).droutine ?? {})['evening_count'] = 3;
  ((s as any).droutine = (s as any).droutine ?? {})['evening_step_1'] = 'removemakeup';
  ((s as any).droutine = (s as any).droutine ?? {})['evening_step_2'] = 'teeth';
  ((s as any).droutine = (s as any).droutine ?? {})['evening_step_3'] = 'mouthwash';
  return;
  scene.build();
}

function enterMid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    qspCall(s, 'calendar', 'pack', 'add', 'school');
    qspCall(s, 'intro_initialization_sg', '');
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
      ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['school_diploma'] = 1;
      qspCall(s, 'homes_properties', 'give_access', 'parents_home');
      qspCall(s, 'homes_properties', 'rent_property', 'city_apartment', 61);
      qspCall(s, 'homes_properties', 'set_home', 'city_apartment');
    }
    qspCall(s, 'intro_initialization_city', '');
  }
  return;
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'shoes', 'is_owned', 'danilovich', 15)) {
    (s as any).sportsshoenumber = 15;
  } else {
    if (qspFunc(s, 'shoes', 'is_owned', 'danilovich', 21)) {
      (s as any).sportsshoenumber = 21;
    }
  }
  qspCall(s, 'outfit', 'backup');
  (s as any).sports_clothing_name = 'default sports outfit';
  (s as any).stat_fix_loop_times = 0;
  do {
    (s as any).temp_stats_changed = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kiss', 'men_kissed', 'women_kissed', 'herm_kissed']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hj', 'men_jerked', 'herm_jerked']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vaginal_finger_give', 'women_fingered']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'footjob', 'men_feetfucked', 'women_feetfucked', 'herm_feetfucked']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'titjob', 'men_titfucked', 'women_titfucked', 'herm_titfucked']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bj', 'men_blown', 'herm_blown']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cuni_give', 'women_munched']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vaginal', 'men_vaginal_fucked', 'women_vaginal_fucked', 'herm_vaginal_fucked']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'anal', 'men_anal_fucked', 'women_vaginal_fucked', 'herm_anal_fucked']; enterFixStatInner(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_stat_diff = (((s as any).stat ?? {})?.['men_fucked'] ?? 0) - Math.max((((s as any).stat ?? 0)?.['men_vaginal_fucked']), (((s as any).stat ?? 0)?.['men_anal_fucked']));
    if (((s as any).temp_stat_diff ?? 0) > 0) {
      ((s as any).stat = (s as any).stat ?? {})['men_vaginal_fucked_times'] = ((s as any).stat['men_vaginal_fucked_times'] ?? 0) + (((s as any).temp_stat_diff ?? 0));
      ((s as any).stat = (s as any).stat ?? {})['men_vaginal_fucked'] = ((s as any).stat['men_vaginal_fucked'] ?? 0) + (((s as any).temp_stat_diff ?? 0));
      (s as any).temp_stats_changed = 1;
    } else {
      if (((s as any).temp_stat_diff ?? 0) < 0) {
        ((s as any).stat = (s as any).stat ?? {})['men_fucked'] = ((s as any).stat['men_fucked'] ?? 0) + (-((s as any).temp_stat_diff ?? 0));
        (s as any).temp_stats_changed = 1;
      }
    }
    (s as any).temp_stat_diff = (((s as any).stat ?? {})?.['women_fucked'] ?? 0) - Math.max((((s as any).stat ?? 0)?.['women_vaginal_fucked']), (((s as any).stat ?? 0)?.['women_anal_fucked']));
    if (((s as any).temp_stat_diff ?? 0) > 0) {
      ((s as any).stat = (s as any).stat ?? {})['women_vaginal_fucked_times'] = ((s as any).stat['women_vaginal_fucked_times'] ?? 0) + (((s as any).temp_stat_diff ?? 0));
      ((s as any).stat = (s as any).stat ?? {})['women_vaginal_fucked'] = ((s as any).stat['women_vaginal_fucked'] ?? 0) + (((s as any).temp_stat_diff ?? 0));
      (s as any).temp_stats_changed = 1;
    } else {
      if (((s as any).temp_stat_diff ?? 0) < 0) {
        ((s as any).stat = (s as any).stat ?? {})['women_fucked'] = ((s as any).stat['women_fucked'] ?? 0) + (-((s as any).temp_stat_diff ?? 0));
        (s as any).temp_stats_changed = 1;
      }
    }
    (s as any).temp_stat_diff = (((s as any).stat ?? {})?.['herm_fucked'] ?? 0) - Math.max((((s as any).stat ?? 0)?.['herm_vaginal_fucked']), (((s as any).stat ?? 0)?.['herm_anal_fucked']));
    if (((s as any).temp_stat_diff ?? 0) > 0) {
      ((s as any).stat = (s as any).stat ?? {})['herm_vaginal_fucked_times'] = ((s as any).stat['herm_vaginal_fucked_times'] ?? 0) + (((s as any).temp_stat_diff ?? 0));
      ((s as any).stat = (s as any).stat ?? {})['herm_vaginal_fucked'] = ((s as any).stat['herm_vaginal_fucked'] ?? 0) + (((s as any).temp_stat_diff ?? 0));
      (s as any).temp_stats_changed = 1;
    } else {
      if (((s as any).temp_stat_diff ?? 0) < 0) {
        ((s as any).stat = (s as any).stat ?? {})['herm_fucked'] = ((s as any).stat['herm_fucked'] ?? 0) + (-((s as any).temp_stat_diff ?? 0));
        (s as any).temp_stats_changed = 1;
      }
    }
    (s as any).stat_fix_loop_times = ((s as any).stat_fix_loop_times ?? 0) + (1);
    (s as any).stat_fix_loop_times = undefined;
    (s as any).temp_stats_changed = undefined;
    (s as any).temp_stat_diff = undefined;
    ((s as any).stat = (s as any).stat ?? {})['male_sexual_partners'] = Math.max((((s as any).stat ?? 0)?.['male_sexual_partners']), (((s as any).stat ?? 0)?.['men_jerked']), (((s as any).stat ?? 0)?.['men_feetfucked']), (((s as any).stat ?? 0)?.['men_titfucked']), (((s as any).stat ?? 0)?.['men_blown']), (((s as any).stat ?? 0)?.['men_fucked']));
    ((s as any).stat = (s as any).stat ?? {})['male_sexual_times'] = Math.max((((s as any).stat ?? 0)?.['male_sexual_times']), (((s as any).stat ?? 0)?.['men_jerked_times']), (((s as any).stat ?? 0)?.['men_feetfucked_times']), (((s as any).stat ?? 0)?.['men_titfucked_times']), (((s as any).stat ?? 0)?.['men_blown_times']), (((s as any).stat ?? 0)?.['men_fucked_times']));
    ((s as any).stat = (s as any).stat ?? {})['female_sexual_partners'] = Math.max((((s as any).stat ?? 0)?.['female_sexual_partners']), (((s as any).stat ?? 0)?.['women_fingered']), (((s as any).stat ?? 0)?.['women_feetfucked']), (((s as any).stat ?? 0)?.['women_titfucked']), (((s as any).stat ?? 0)?.['women_munched']), (((s as any).stat ?? 0)?.['women_fucked']));
    ((s as any).stat = (s as any).stat ?? {})['female_sexual_times'] = Math.max((((s as any).stat ?? 0)?.['female_sexual_times']), (((s as any).stat ?? 0)?.['women_fingered_times']), (((s as any).stat ?? 0)?.['women_feetfucked_times']), (((s as any).stat ?? 0)?.['women_titfucked_times']), (((s as any).stat ?? 0)?.['women_munched_times']), (((s as any).stat ?? 0)?.['women_fucked_times']));
    ((s as any).stat = (s as any).stat ?? {})['herm_sexual_partners'] = Math.max((((s as any).stat ?? 0)?.['herm_sexual_partners']), (((s as any).stat ?? 0)?.['herm_jerked']), (((s as any).stat ?? 0)?.['herm_feetfucked']), (((s as any).stat ?? 0)?.['herm_titfucked']), (((s as any).stat ?? 0)?.['herm_blown']), (((s as any).stat ?? 0)?.['herm_fucked']));
    ((s as any).stat = (s as any).stat ?? {})['herm_sexual_times'] = Math.max((((s as any).stat ?? 0)?.['herm_sexual_times']), (((s as any).stat ?? 0)?.['herm_jerked_times']), (((s as any).stat ?? 0)?.['herm_feetfucked_times']), (((s as any).stat ?? 0)?.['herm_titfucked_times']), (((s as any).stat ?? 0)?.['herm_blown_times']), (((s as any).stat ?? 0)?.['herm_fucked_times']));
    return;
  } while (((s as any).stat_fix_loop_times ?? 0) < 10  &&  ((s as any).temp_stats_changed ?? 0) === 1);
  scene.build();
}

function enterFixStatInner(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_stat_diff = (((s as any).stat ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  (s as any).args_i = 2;
  do {
    (s as any).temp_stat_diff = ((s as any).temp_stat_diff ?? 0) - ((((s as any).stat ?? 0)?.[(((s as any).ARGS ?? 0)?.[String((s as any).args_i ?? 0)] ?? 0) + '_times'] ?? 0));
    if (((s as any).stat ?? 0)[((s as any).ARGS ?? 0)?.[String((s as any).args_i ?? 0)] + '_times'] < ((s as any).stat ?? 0)[((s as any).ARGS ?? 0)?.[String((s as any).args_i ?? 0)]]) {
      ((s as any).stat = (s as any).stat ?? {})[(((s as any).ARGS ?? 0)?.[String((s as any).args_i ?? 0)] ?? 0) + '_times'] = (((s as any).stat ?? 0)?.[(((s as any).ARGS ?? 0)?.[String((s as any).args_i ?? 0)] ?? 0)] ?? 0);
      (s as any).temp_stats_changed = 1;
    }
    (s as any).args_i = ((s as any).args_i ?? 0) + (1);
    (s as any).args_i = undefined;
    if (((s as any).temp_stat_diff ?? 0) > 0) {
      ((s as any).stat = (s as any).stat ?? {})[((s as any).locArgs?.[2] ?? 0) + '_times'] = ((s as any).stat[((s as any).locArgs?.[2] ?? 0) + '_times'] ?? 0) + (((s as any).temp_stat_diff ?? 0));
      ((s as any).stat = (s as any).stat ?? {})[((s as any).locArgs?.[2] ?? 0)] = ((s as any).stat[((s as any).locArgs?.[2] ?? 0)] ?? 0) + (((s as any).temp_stat_diff ?? 0));
      (s as any).temp_stats_changed = 1;
    } else {
      if (((s as any).temp_stat_diff ?? 0) < 0) {
        ((s as any).stat = (s as any).stat ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).stat[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (-((s as any).temp_stat_diff ?? 0));
        (s as any).temp_stats_changed = 1;
      }
    }
    return;
  } while (((s as any).ARGS ?? 0)?.[String((s as any).args_i ?? 0)] !== '');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'add_item':
      enterAddItem(s, scene);
      break;
    case 'wear_item':
      enterWearItem(s, scene);
      break;
    case '_generate_random':
      enterGenerateRandom(s, scene);
      break;
    case 'randomize_stats':
      enterRandomizeStats(s, scene);
      break;
    case 'randomize_grades':
      enterRandomizeGrades(s, scene);
      break;
    case 'init_time':
      enterInitTime(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'sg_settings':
      enterSgSettings(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'mid':
      enterMid(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'fix_stat_inner':
      enterFixStatInner(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_initialization: LocationDef = {
  name: 'intro_initialization',
  region: 'other',
  enter: enter,
};
