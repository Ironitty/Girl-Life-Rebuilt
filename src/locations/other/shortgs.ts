import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAutosave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cfg_vars ?? 0)?.['disable_autosave'] === 0) {
    if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
      // TODO-QSP: savegame 'autosave_city_<<$weekName[week]>>.sav'
    } else {
      if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
        // TODO-QSP: savegame 'autosave_uni_<<$weekName[week]>>.sav'
      } else {
        // TODO-QSP: savegame 'autosave_sg_<<$weekName[week]>>.sav'
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShowTable(s: GameState, scene: SceneBuilder): void {
  (s as any).tab_tmp = Math.max(1, parseFloat(((s as any).locArgs?.[2] ?? 0)), ((s as any).locArgs?.[2] ?? 0));
  (s as any).result = '';
  if ((!(((s as any).st_count ?? 0) % ((s as any).tab_tmp ?? 0)))) {
    // TODO-QSP: $result += "<tr>"
  }
  // TODO-QSP: $result += "<td><<$ARGS[1]>></td>"
  if ((((s as any).st_count ?? 0) % ((s as any).tab_tmp ?? 0)) + 1 === ((s as any).tab_tmp ?? 0)) {
    // TODO-QSP: $result += "</tr>"
  }
  // TODO-QSP: $show_table += $result
  (s as any).st_count = ((s as any).st_count ?? 0) + (1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGuy(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).temptask = qspUntranslated(s, "'ABCM' else temptask = ARGS[1]", { location: "shortgs" });
  }
  if (((s as any).temptask ?? 0) === 'ABCM') {
    (s as any).result = ((s as any).stat ?? 0)?.['male_sexual_partners'];
  } else {
    (s as any).result = qspFunc(s, 'npc', 'get_npc_count', 'npc_sexual', ((s as any).locArgs?.[1] ?? 0), '0');
  }
  return;
  // TODO-QSP: end & !! --- guy ---
  scene.build();
}

function enterGirl(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).temptask = qspUntranslated(s, "'ABCM' else temptask = ARGS[1]", { location: "shortgs" });
  }
  if (((s as any).temptask ?? 0) === 'ABCM') {
    (s as any).result = ((s as any).stat ?? 0)?.['female_sexual_partners'];
  } else {
    (s as any).result = qspFunc(s, 'npc', 'get_npc_count', 'npc_sexual', ((s as any).locArgs?.[1] ?? 0), '1');
  }
  return;
  // TODO-QSP: end & !! --- girl ---
  scene.build();
}

function enterUndress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'undress', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end & !! --- undress ---
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'dress', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end & !! --- dress ---
  scene.build();
}

function enterCheckdress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: dynamic "gt <<$ARGS[1]>>"
  }
  return;
  // TODO-QSP: end & !! --- checkdress ---
  scene.build();
}

function enterSqrt(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'math', 'int_sqrt', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterModul(s: GameState, scene: SceneBuilder): void {
  (s as any).modul_sum = ((s as any).locArgs?.[1] ?? 0)*((s as any).locArgs?.[1] ?? 0) + ((s as any).locArgs?.[2] ?? 0)*((s as any).locArgs?.[2] ?? 0) + ((s as any).locArgs?.[3] ?? 0)*((s as any).locArgs?.[3] ?? 0) + ((s as any).locArgs?.[4] ?? 0)*((s as any).locArgs?.[4] ?? 0) + ((s as any).locArgs?.[5] ?? 0)*((s as any).locArgs?.[5] ?? 0) + ((s as any).locArgs?.[6] ?? 0)*((s as any).locArgs?.[6] ?? 0) + ((s as any).locArgs?.[7] ?? 0)*((s as any).locArgs?.[7] ?? 0) + ((s as any).locArgs?.[8] ?? 0)*((s as any).locArgs?.[8] ?? 0);
  (s as any).result = qspFunc(s, 'shortgs', 'sqrt', ((s as any).modul_sum ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDow(s: GameState, scene: SceneBuilder): void {
  (s as any).Y_dow = ((s as any).locArgs?.[1] ?? 0);
  (s as any).M_dow = ((s as any).locArgs?.[2] ?? 0);
  (s as any).D_dow = ((s as any).locArgs?.[3] ?? 0);
  if ((!((s as any).Y_dow ?? 0))) {
    (s as any).Y_dow = ((s as any).year ?? 0);
  }
  if ((!((s as any).M_dow ?? 0))) {
    (s as any).M_dow = ((s as any).month ?? 0);
  }
  if ((!((s as any).D_dow ?? 0))) {
    (s as any).D_dow = ((s as any).day ?? 0);
  }
  if (((s as any).Y_doy ?? 0) === ((s as any).year ?? 0)  &&  ((s as any).M_doy ?? 0) === ((s as any).month ?? 0)  &&  ((s as any).D_doy ?? 0) === ((s as any).day ?? 0)) {
    (s as any).result = ((s as any).week ?? 0);
  } else {
    qspCall(s, 'time', 'to_daystart', ((s as any).Y_dow ?? 0), ((s as any).M_dow ?? 0), ((s as any).D_dow ?? 0));
    (s as any).result = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).dateVars ?? 0)?.['daystart']);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDoy(s: GameState, scene: SceneBuilder): void {
  (s as any).Y_doy = ((s as any).locArgs?.[1] ?? 0);
  (s as any).M_doy = ((s as any).locArgs?.[2] ?? 0);
  (s as any).D_doy = ((s as any).locArgs?.[3] ?? 0);
  if ((!((s as any).Y_doy ?? 0))) {
    (s as any).Y_doy = ((s as any).year ?? 0);
  }
  if ((!((s as any).M_doy ?? 0))) {
    (s as any).M_doy = ((s as any).month ?? 0);
  }
  if ((!((s as any).D_doy ?? 0))) {
    (s as any).D_doy = ((s as any).day ?? 0);
  }
  if (((s as any).Y_doy ?? 0) === ((s as any).year ?? 0)  &&  ((s as any).M_doy ?? 0) === ((s as any).month ?? 0)  &&  ((s as any).D_doy ?? 0) === ((s as any).day ?? 0)) {
    (s as any).result = ((s as any).day_of_year ?? 0);
  } else {
    qspCall(s, 'time', 'to_daystart', ((s as any).Y_dow ?? 0), ((s as any).M_dow ?? 0), ((s as any).D_dow ?? 0));
    // TODO-QSP: gs 'time', 'to_date', dateVars['daystart']
    (s as any).result = ((s as any).dateVars ?? 0)?.['day_of_year'];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMk1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'saveposition', '');
  ((s as any).mk_subst = (s as any).mk_subst ?? {})['0'] = 'M';
  ((s as any).mk_subst = (s as any).mk_subst ?? {})['1'] = 'F';
  ((s as any).mk_subst = (s as any).mk_subst ?? {})['2'] = 'O';
  ((s as any).mk_subst = (s as any).mk_subst ?? {})['3'] = 'L';
  ((s as any).mk_subst = (s as any).mk_subst ?? {})['4'] = 'R';
  ((s as any).mk_subst = (s as any).mk_subst ?? {})['5'] = 'P';
  scene.text('<center><font face="courier" size=1>');
  scene.text('<table border = 1>');
  // TODO-QSP: '<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th><th>Mon</th...
  // TODO-QSP: <th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th><th>Mon</th><th>...
  (s as any).i = 0;
  (s as any).empty0 = ((s as any).week ?? 0) + 29 - ((s as any).i ?? 0) - 1;
  (s as any).empty1 = Math.min(28, ((s as any).empty0 ?? 0));
  (s as any).full1 = Math.max(0, 28 - ((s as any).empty0 ?? 0));
  (s as any).empty2 = Math.max(0, ((s as any).empty0 ?? 0)-28);
  (s as any).full2 = ((s as any).i ?? 0) - ((s as any).full1 ?? 0);
  (s as any).empty3 = 28 - ((s as any).empty2 ?? 0) - ((s as any).full2 ?? 0);
  (s as any).count = 0;
  (s as any).tabmc = '<tr>';
  // TODO-QSP: :tabmcl1
  if (((s as any).empty1 ?? 0) > 0) {
    (s as any).empty1 = ((s as any).empty1 ?? 0) - (1);
    // TODO-QSP: $tabmc += '<td>&nbsp</td>'
    // TODO-QSP: jump 'tabmcl1'
  }
  if (((s as any).full1 ?? 0) > 0) {
    (s as any).full1 = ((s as any).full1 ?? 0) - (1);
    if (((s as any).MenCal ?? 0)?.[String((s as any).count ?? 0)]==='0') {
      // TODO-QSP: $tabmc += '<td bgcolor="red"><<$mk_subst[$MenCal[count]]>></td>'
    } else {
      // TODO-QSP: $tabmc += '<td><<$mk_subst[$MenCal[count]]>></td>'
    }
    (s as any).count = ((s as any).count ?? 0) + (1);
    // TODO-QSP: jump 'tabmcl1'
  }
  // TODO-QSP: $tabmc += '</tr><tr>'
  // TODO-QSP: :tabmcl3
  if (((s as any).empty2 ?? 0) > 0) {
    (s as any).empty2 = ((s as any).empty2 ?? 0) - (1);
    // TODO-QSP: $tabmc += '<td>&nbsp</td>'
    // TODO-QSP: jump 'tabmcl3'
  }
  // TODO-QSP: :tabmcl4
  if (((s as any).full2 ?? 0) > 0) {
    (s as any).full2 = ((s as any).full2 ?? 0) - (1);
    if (((s as any).MenCal ?? 0)?.[String((s as any).count ?? 0)] === '0') {
      // TODO-QSP: $tabmc += '<td bgcolor="red"><<$mk_subst[$MenCal[count]]>></td>'
    } else {
      // TODO-QSP: $tabmc += '<td><<$mk_subst[$MenCal[count]]>></td>'
    }
    (s as any).count = ((s as any).count ?? 0) + (1);
    // TODO-QSP: jump 'tabmcl4'
  }
  // TODO-QSP: :tabmcl5
  if (((s as any).empty3 ?? 0) > 0) {
    (s as any).empty3 = ((s as any).empty3 ?? 0) - (1);
    // TODO-QSP: $tabmc += '<td></td>'
    // TODO-QSP: jump 'tabmcl5'
  }
  // TODO-QSP: $tabmc += '</tr><table></font></center>'
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', goto: ['restoreposition', ''] },
  ]);
  scene.build();
}

function enterMk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_calendar', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFonts(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_settings', 'fonts', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNcpUpdate(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: copyarr 'copy_npc_QW', 'npc_QW'
  // TODO-QSP: copyarr 'copy_npc_rel', 'npc_rel'
  // TODO-QSP: copyarr 'copy_npc_love', 'npc_love'
  // TODO-QSP: copyarr '$copy_npc_usedname', '$npc_usedname'
  qspCall(s, 'npcstatic1', '');
  qspCall(s, 'npcstatic2', '');
  qspCall(s, 'npcstatic3', '');
  qspCall(s, 'npcstatic4', '');
  qspCall(s, 'npcstatic5', '');
  qspCall(s, 'npcstatic6', '');
  (s as any).i = 0;
  (s as any).j = 1;
  // TODO-QSP: :loopnpcupdate
  (s as any).temp_npcID = 'A' + ((s as any).j ?? 0) + '';
  ((s as any).npc_QW = (s as any).npc_QW ?? {})[String((s as any).temp_npcID ?? 0)] = ((s as any).copy_npc_QW ?? 0)?.[String((s as any).temp_npcID ?? 0)];
  ((s as any).npc_rel = (s as any).npc_rel ?? {})[String((s as any).temp_npcID ?? 0)] = ((s as any).copy_npc_rel ?? 0)?.[String((s as any).temp_npcID ?? 0)];
  ((s as any).npc_love = (s as any).npc_love ?? {})[String((s as any).temp_npcID ?? 0)] = ((s as any).copy_npc_love ?? 0)?.[String((s as any).temp_npcID ?? 0)];
  // TODO-QSP: $npc_usedname[$temp_npcID] = $copy_npc_usedname[$temp_npcID]
  (s as any).j = ((s as any).j ?? 0) + (1);
  if (((s as any).j ?? 0) <= ((s as any).i ?? 0)) {
    // TODO-QSP: jump 'loopnpcupdate'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetMeIndex(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'array', 'get_me_index', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveArrayElement(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'array', 'remove_element', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTestsize(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: '$npc_firstname = '      + arrsize('$npc_firstname')
  // TODO-QSP: '$npc_lastname = '      + arrsize('$npc_lastname')
  // TODO-QSP: '$npc_nickname = '      + arrsize('$npc_nickname')
  // TODO-QSP: '$npc_notes = '        + arrsize('$npc_notes')
  // TODO-QSP: '$npc_occupation = '    + arrsize('$npc_occupation')
  // TODO-QSP: '$npc_perstype = '      + arrsize('$npc_perstype')
  // TODO-QSP: '$npc_pic = '        + arrsize('$npc_pic')
  // TODO-QSP: '$npc_thdick = '      + arrsize('$npc_thdick')
  // TODO-QSP: '$npc_usedname = '      + arrsize('$npc_usedname')
  // TODO-QSP: 'npc_apprnc = '        + arrsize('npc_apprnc')
  // TODO-QSP: 'npc_bust = '        + arrsize('npc_bust')
  // TODO-QSP: 'npc_outfit = '        + arrsize('npc_outfit')
  // TODO-QSP: 'npc_style = '        + arrsize('npc_style')
  // TODO-QSP: 'npc_dick = '        + arrsize('npc_dick')
  // TODO-QSP: 'npc_dob = '        + arrsize('npc_dob')
  // TODO-QSP: 'npc_drunk = '        + arrsize('npc_drunk')
  // TODO-QSP: 'npc_gender = '        + arrsize('npc_gender')
  // TODO-QSP: 'npc_haircol = '      + arrsize('npc_haircol')
  // TODO-QSP: 'npc_height = '        + arrsize('npc_height')
  // TODO-QSP: 'npc_horny = '        + arrsize('npc_horny')
  // TODO-QSP: 'npc_intel = '        + arrsize('npc_intel')
  // TODO-QSP: 'npc_love = '        + arrsize('npc_love')
  // TODO-QSP: 'npc_QW = '          + arrsize('npc_QW')
  // TODO-QSP: 'npc_rel = '        + arrsize('npc_rel')
  // TODO-QSP: 'npc_sex = '        + arrsize('npc_sex')
  // TODO-QSP: 'npc_sexskill = '      + arrsize('npc_sexskill')
  // TODO-QSP: 'npc_spermpot = '      + arrsize('npc_spermpot')
  // TODO-QSP: 'npc_herpes = '        + arrsize('npc_herpes')
  // TODO-QSP: 'npc_syth = '        + arrsize('npc_syth')
  // TODO-QSP: 'npc_gon = '        + arrsize('npc_gon')
  // TODO-QSP: 'npc_thrush = '        + arrsize('npc_thrush')
  // TODO-QSP: 'npc_apt_type = '      + arrsize('npc_apt_type')
  // TODO-QSP: 'npc_apt_number = '      + arrsize('npc_apt_number')
  // TODO-QSP: '$npc_apt_bedroom = '    + arrsize('$npc_apt_bedroom')
  // TODO-QSP: '$npc_apt_kitchen = '    + arrsize('$npc_apt_kitchen')
  // TODO-QSP: '$npc_apt_livingroom = '  + arrsize('$npc_apt_livingroom')
  // TODO-QSP: '$npc_apt_bathroom = '    + arrsize('$npc_apt_bathroom')
  // TODO-QSP: 'npc_perv = '        + arrsize('npc_perv')
  // TODO-QSP: 'npc_finance = '      + arrsize('npc_finance')
  // TODO-QSP: 'npc_humor = '        + arrsize('npc_humor')
  // TODO-QSP: 'npc_fav_pos = '      + arrsize('npc_fav_pos')
  // TODO-QSP: 'npc_tit_pref = '      + arrsize('npc_tit_pref')
  // TODO-QSP: 'npc_addit = '        + arrsize('npc_addit')
  // TODO-QSP: 'npc_doors = '        + arrsize('npc_doors')
  // TODO-QSP: 'npc_goal = '        + arrsize('npc_goal')
  // TODO-QSP: 'npc_fidelity = '      + arrsize('npc_fidelity')
  // TODO-QSP: 'npc_lover_days = '      + arrsize('npc_lover_days')
  // TODO-QSP: 'npc_lover_keys = '      + arrsize('npc_lover_keys')
  // TODO-QSP: '$npc_index = '        + arrsize('$npc_index')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNpctest(s: GameState, scene: SceneBuilder): void {
  scene.text(' --- init --- ');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTestsize(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'npcgeneratec', '', 0, 'stranger', (Math.floor(Math.random() * 28) + 18), 1);
  scene.text(' --- gen npc C --- ');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTestsize(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
  scene.text(' --- sav npc C to npc B --- ');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTestsize(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'npccleanc', '', ((s as any).npclastsaved ?? 0));
  scene.text(' --- delete npc B --- ');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTestsize(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReplaceHeader(s: GameState, scene: SceneBuilder): void {
  (s as any).RH_Count = ((s as any).locArgs?.[2] ?? 0);
  (s as any).RH_temp = ((s as any).maintxt ?? 0);
  // TODO-QSP: :RH_label
  (s as any).RH_temp_lenght = (String(((s as any).RH_temp ?? 0)).length);
  (s as any).RH_temp_LFpos = ((String(((s as any).RH_temp ?? 0)).indexOf(String('/n'))) + 1);
  (s as any).RH_temp = (String(((s as any).RH_temp ?? 0)).slice((((s as any).RH_temp_LFpos ?? 0) + 1)-1, ((((s as any).RH_temp_LFpos ?? 0) + 1)-1)+(((s as any).RH_temp_lenght ?? 0) - ((s as any).RH_temp_LFpos ?? 0))));
  (s as any).RH_Count = ((s as any).RH_Count ?? 0) - (1);
  if (((s as any).RH_Count ?? 0) > 0) {
    // TODO-QSP: jump 'RH_label'
  }
  // TODO-QSP: $ARGS[3]
  // TODO-QSP: $ARGS[4]
  // TODO-QSP: $ARGS[5]
  // TODO-QSP: $ARGS[6]
  // TODO-QSP: $ARGS[7]
  // TODO-QSP: $RH_temp
  return;
  // TODO-QSP: end
  scene.build();
}

function enterImgMsg(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRoundDivide(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'math', 'int_divide', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRoundTool(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'math', 'int_round', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRandPick(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'delimit') {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'string') {
      (s as any).result = qspFunc(s, 'random', 'pick_from_delimited_string', ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), 1);
    } else {
      (s as any).result = qspFunc(s, 'random', 'pick_from_delimited_string', ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
    }
  } else {
    if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'string') {
        (s as any).result = ((s as any).ARGS ?? 0)?.[((s as any).rand ?? 0)(2, ((s as any).arrsize ?? 0)('ARGS')-1)];
      } else {
        (s as any).result = ((s as any).ARGS ?? 0)[((s as any).rand ?? 0)(2, ((s as any).arrsize ?? 0)('ARGS')-1)];
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterParseString(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'string', 'parse_string', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothingState(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).braworntype ?? 0) !== 'none'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You are in your underwear.');
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.text('You are just wearing panties.');
      } else {
        if (((s as any).braworntype ?? 0) !== 'none') {
          scene.text('You are just wearing a bra.');
        } else {
          scene.text('You are naked.');
        }
      }
    }
  } else {
    if (((s as any).PSwim ?? 0)) {
      scene.text('You are wearing swimwear.');
    } else {
      if (((s as any).PSport ?? 0)) {
        scene.text('You are wearing gym clothing and shoes.');
      } else {
        if ((((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).PCloPanties ?? 0) === 0)  &&  (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloBra ?? 0) === 0)) {
          scene.text('You are not wearing any underwear.');
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).PCloPanties ?? 0))) {
            scene.text('You are not wearing panties');
          } else {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).PCloBra ?? 0))) {
              scene.text('You are not wearing a bra');
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothingStatus(s: GameState, scene: SceneBuilder): void {
  ((s as any).apparel = (s as any).apparel ?? {})['panty'] = '';
  ((s as any).apparel = (s as any).apparel ?? {})['bra'] = '';
  ((s as any).apparel = (s as any).apparel ?? {})['status'] = '';
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if ((((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== 'none')) {
      ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'underwear';
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'panties';
      } else {
        if (((s as any).braworntype ?? 0) !== 'none') {
          ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'bra';
        } else {
          ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'nude';
        }
      }
    }
  } else {
    if (((s as any).PSwim ?? 0)) {
      ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'swim';
    } else {
      if (((s as any).PSport ?? 0)) {
        ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'sport';
      } else {
        if (((s as any).clothingworntype ?? 0) === 'ballet_secrets'  &&  ((s as any).shoeworntype ?? 0) === 'ballet_secrets') {
          ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'dance';
        } else {
          if (((s as any).clothingworntype ?? 0) === 'moncheri_gown'  &&  ((s as any).shoeworntype ?? 0) === 'moncheri_shoes') {
            ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'ballgown';
          } else {
            ((s as any).apparel = (s as any).apparel ?? {})['status'] = 'clothed';
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPayments(s: GameState, scene: SceneBuilder): void {
  if (((s as any).epayments ?? 0)?.['value'] === 0) {
    return;
  }
  if (((s as any).epayments ?? 0)?.['description'] === '') {
    return;
  }
  if (((s as any).epayments ?? 0)?.['item_variable'] !== '') {
    (s as any).construct_cash = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $epayments[/u0027method/u0027] = /u0027cash/u0027 */ s.money -=' + qspUntranslated(s, "epayments[\\u0027value\\u0027]", { location: "shortgs" }) + '; /* TODO-QSP: ' + qspUntranslated(s, "epayments[\\u0027item_variable\\u0027]", { location: "shortgs" }) + ' += ' + qspUntranslated(s, "epayments[\\u0027quantity\\u0027]", { location: "shortgs" }) + ' */ return s; }); window.__gameStore.getState().doGoto(/u0027shortgs/u0027, /u0027paymentcomplete/u0027); return false;">Cash</a>';
    (s as any).construct_card = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $epayments[/u0027method/u0027] = /u0027card/u0027 */ s.karta -=' + qspUntranslated(s, "epayments[\\u0027value\\u0027]", { location: "shortgs" }) + '; /* TODO-QSP: ' + qspUntranslated(s, "epayments[\\u0027item_variable\\u0027]", { location: "shortgs" }) + ' += ' + qspUntranslated(s, "epayments[\\u0027quantity\\u0027]", { location: "shortgs" }) + ' */ return s; }); window.__gameStore.getState().doGoto(/u0027shortgs/u0027, /u0027paymentcomplete/u0027); return false;">Card</a>';
  } else {
    (s as any).construct_cash = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $epayments[/u0027method/u0027] = /u0027cash/u0027 */ s.money -=' + qspUntranslated(s, "epayments[\\u0027value\\u0027]", { location: "shortgs" }) + '; return s; }); window.__gameStore.getState().doGoto(/u0027shortgs/u0027, /u0027paymentcomplete/u0027); return false;">Cash</a>';
    (s as any).construct_card = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $epayments[/u0027method/u0027] = /u0027card/u0027 */ s.karta -=' + qspUntranslated(s, "epayments[\\u0027value\\u0027]", { location: "shortgs" }) + '; return s; }); window.__gameStore.getState().doGoto(/u0027shortgs/u0027, /u0027paymentcomplete/u0027); return false;">Card</a>';
  }
  if (((s as any).epayments ?? 0)?.['banner'] !== '') {
    scene.img('images/\' + $epayments[\'banner\'] + \'');
  }
  if ((((s as any).epayments ?? 0)?.['method'] !== 'cash'  &&  ((s as any).epayments ?? 0)?.['method'] !== 'card')  &&  (((s as any).epayments ?? 0)?.['value'] <= ((s as any).money ?? 0)  &&  ((s as any).epayments ?? 0)?.['value'] <= ((s as any).karta ?? 0))) {
    // TODO-QSP: dynamic text: How do you want to pay for the <<$epayments[''description'']>>? <<$construct_cas...
    scene.text(`How do you want to pay for the ${((s as any).epayments ?? 0)?.['description'] ?? ''}? ${((s as any).construct_cash || '')} or ${((s as any).construct_card || '')}`);
  } else {
    if ((((s as any).epayments ?? 0)?.['method'] === 'cash'  ||  ((s as any).epayments ?? 0)?.['method'] === '')  &&  ((s as any).epayments ?? 0)?.['value'] <= ((s as any).money ?? 0)) {
      // TODO-QSP: dynamic text: Pay for the <<$epayments[''description'']>> with <<$construct_cash>>?
      scene.text(`Pay for the ${((s as any).epayments ?? 0)?.['description'] ?? ''} with ${((s as any).construct_cash || '')}?`);
    } else {
      if ((((s as any).epayments ?? 0)?.['method'] === 'card'  ||  ((s as any).epayments ?? 0)?.['method'] === '')  &&  ((s as any).epayments ?? 0)?.['value'] <= ((s as any).karta ?? 0)) {
        // TODO-QSP: dynamic text: Pay for the <<$epayments[''description'']>> with your <<$construct_card>>?
        scene.text(`Pay for the ${((s as any).epayments ?? 0)?.['description'] ?? ''} with your ${((s as any).construct_card || '')}?`);
      } else {
        scene.text('You don\'t have enough money in your purse or bank account for this item.');
      }
    }
  }
  ((s as any).epayments = (s as any).epayments ?? {})['paid'] = (-1);
  scene.actions([
{ label: 'Cancel Payment', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPaymentcomplete(s: GameState, scene: SceneBuilder): void {
  ((s as any).epayments = (s as any).epayments ?? {})['paid'] = 0;
  scene.text('Thank you for your purchase! We look forward to seeing you again.');
  // TODO-QSP: 'You paid ' + epayments['value'] + '<b>₽</b>' + iif($epayments['method'] = 'cash', ' in cash', ' wit...
  qspCall(s, 'stat', '');
  if (((s as any).epayments ?? 0)?.['loc'] !== '') {
    scene.actions([
      { label: 'Finish payment', handler: (st: GameState) => {
    // TODO-QSP: gt $epayments['loc'], $epayments['loc_arg']
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Finish Payment', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalendarDisplay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <b><<$monthName>> <<day>></b>
  scene.text(`<b>${((s as any).monthName || '')} ${((s as any).day || '')}</b>`);
  // TODO-QSP: dynamic text: <b><<$weekName>></b>
  scene.text(`<b>${((s as any).weekName || '')}</b>`);
  // TODO-QSP: dynamic text: <b>' + $func('time', 'get_time_string') + '</b>
  scene.text('<b>\' + $func(\'time\', \'get_time_string\') + \'</b>');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDayDisplay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <b><<$weekName>></b>
  scene.text(`<b>${((s as any).weekName || '')}</b>`);
  // TODO-QSP: dynamic text: <b>' + $func('time', 'get_time_string') + '</b>
  scene.text('<b>\' + $func(\'time\', \'get_time_string\') + \'</b>');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTimeDisplay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <b>' + $func('time', 'get_time_string') + '</b>
  scene.text('<b>\' + $func(\'time\', \'get_time_string\') + \'</b>');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetloc(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRoll(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'random', 'roll', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClamp(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'math', 'int_clamp', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetStat(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_input = qspFunc(s, 'shortgs', 'clamp', ((s as any).locArgs?.[2] ?? 0), 0, 100);
  if (((s as any).temp_input ?? 0) > 1) {
    (s as any).temp_xpprv = 1 + (146 * (((s as any).temp_input ?? 0) - 1) * (((s as any).temp_input ?? 0) - 1) / 91);
  } else {
    (s as any).temp_xpprv = ((s as any).temp_input ?? 0);
  }
  (s as any).temp_xpnxt = 1 + (146 * (((s as any).temp_input ?? 0)) * (((s as any).temp_input ?? 0)) / 91);
  (s as any).temp_max_deg = (102 - ((s as any).temp_input ?? 0)) * 100;
  if (Number((s as any).locArgs?.[1] ?? 0) === 'magik') {
    // TODO-QSP: dynamic "
    // TODO-QSP: <<$ARGS[1]>>_lvl = temp_input
    // TODO-QSP: <<$ARGS[1]>>_adj = temp_xpprv - orgasm
    // TODO-QSP: <<$ARGS[1]>>_exp = orgasm + <<$ARGS[1]>>_adj
    // TODO-QSP: <<$ARGS[1]>>_xpprv = temp_xpprv
    // TODO-QSP: <<$ARGS[1]>>_xpnxt = temp_xpnxt
    // TODO-QSP: <<$ARGS[1]>>_mem = <<$ARGS[1]>>_exp
    // TODO-QSP: <<$ARGS[1]>>_deg = temp_max_deg
    // TODO-QSP: <<$ARGS[1]>>_lvlst = <<$ARGS[1]>>_lvl
    // TODO-QSP: <<$ARGS[1]>>_flr = <<$ARGS[1]>>_lvl / 5
    // TODO-QSP: "
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'inhib') {
      // TODO-QSP: dynamic "
      // TODO-QSP: <<$ARGS[1]>>_lvl = temp_input
      // TODO-QSP: <<$ARGS[1]>>_exp = temp_xpprv
      // TODO-QSP: <<$ARGS[1]>>_mem = temp_xpprv
      // TODO-QSP: <<$ARGS[1]>>_xpprv = temp_xpprv
      // TODO-QSP: <<$ARGS[1]>>_xpnxt = temp_xpnxt
      // TODO-QSP: <<$ARGS[1]>>_deg = temp_max_deg
      // TODO-QSP: <<$ARGS[1]>>_lvlst = <<$ARGS[1]>>_lvl
      // TODO-QSP: <<$ARGS[1]>>_flr = <<$ARGS[1]>>_lvl
      // TODO-QSP: "
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'stren'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'stren_plus') {
        // TODO-QSP: dynamic "
        // TODO-QSP: <<$ARGS[1]>>_lvl = temp_input
        // TODO-QSP: <<$ARGS[1]>>_exp = temp_xpprv
        // TODO-QSP: <<$ARGS[1]>>_mem = temp_xpprv
        // TODO-QSP: <<$ARGS[1]>>_xpprv = temp_xpprv
        // TODO-QSP: <<$ARGS[1]>>_xpnxt = temp_xpnxt
        // TODO-QSP: <<$ARGS[1]>>_deg = temp_max_deg
        // TODO-QSP: <<$ARGS[1]>>_lvlst = <<$ARGS[1]>>_lvl
        // TODO-QSP: <<$ARGS[1]>>_flr = <<$ARGS[1]>>_lvl / 5
        // TODO-QSP: "
        (s as any).strenbuf = ((s as any).stren_lvl ?? 0) + ((s as any).stren_plus_lvl ?? 0);
        qspCall(s, 'body', 'DailyUpdate');
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'agil'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'vital') {
          // TODO-QSP: dynamic "
          // TODO-QSP: <<$ARGS[1]>>_lvl = temp_input
          // TODO-QSP: <<$ARGS[1]>>_exp = temp_xpprv
          // TODO-QSP: <<$ARGS[1]>>_mem = temp_xpprv
          // TODO-QSP: <<$ARGS[1]>>_xpprv = temp_xpprv
          // TODO-QSP: <<$ARGS[1]>>_xpnxt = temp_xpnxt
          // TODO-QSP: <<$ARGS[1]>>_deg = temp_max_deg
          // TODO-QSP: <<$ARGS[1]>>_lvlst = <<$ARGS[1]>>_lvl
          // TODO-QSP: <<$ARGS[1]>>_flr = <<$ARGS[1]>>_lvl / 5
          // TODO-QSP: <<$ARGS[1]>>buf = <<$ARGS[1]>>_lvl
          // TODO-QSP: "
          qspCall(s, 'body', 'DailyUpdate');
        } else {
          // TODO-QSP: dynamic "
          // TODO-QSP: <<$ARGS[1]>>_lvl = temp_input
          // TODO-QSP: <<$ARGS[1]>>_exp = temp_xpprv
          // TODO-QSP: <<$ARGS[1]>>_mem = temp_xpprv
          // TODO-QSP: <<$ARGS[1]>>_xpprv = temp_xpprv
          // TODO-QSP: <<$ARGS[1]>>_xpnxt = temp_xpnxt
          // TODO-QSP: <<$ARGS[1]>>_deg = temp_max_deg
          // TODO-QSP: <<$ARGS[1]>>_lvlst = <<$ARGS[1]>>_lvl
          // TODO-QSP: <<$ARGS[1]>>_flr = <<$ARGS[1]>>_lvl / 5
          // TODO-QSP: "
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSPow(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'math', 'int_power', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSPow2(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'math', 'int_power', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCoupledArraySort(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'array', 'coupled_sort', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0), ((s as any).locArgs?.[7] ?? 0), ((s as any).locArgs?.[8] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIntToHexStr(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :int_to_hex_loop
  (s as any).result = (String('0123456789ABCDEF').slice((1 + (((s as any).locArgs?.[1] ?? 0) % 16))-1, ((1 + (((s as any).locArgs?.[1] ?? 0) % 16))-1)+(1))) + ((s as any).result ?? 0);
  // TODO-QSP: ARGS[1] /= 16
  if (Number((s as any).locArgs?.[1] ?? 0) > 0) {
    // TODO-QSP: jump 'int_to_hex_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHexStrToInt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $ARGS[1] = $ucase($ARGS[1])
  (s as any).shortgs_i = 1;
  // TODO-QSP: :hex_to_int_loop
  (s as any).result = ((s as any).result ?? 0) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).locArgs?.[1] ?? 0)).slice((((s as any).shortgs_i ?? 0))-1, ((((s as any).shortgs_i ?? 0))-1)+(1)))))) + 1);
  (s as any).shortgs_i = ((s as any).shortgs_i ?? 0) + (1);
  if (((s as any).shortgs_i ?? 0) <= (String(((s as any).locArgs?.[1] ?? 0)).length)) {
    // TODO-QSP: jump 'hex_to_int_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRgbToHex(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_input = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).temp_input ?? 0) >= 0) {
    (s as any).temp_red = ((s as any).temp_input ?? 0) % 256;
    (s as any).temp_green = (((s as any).temp_input ?? 0) / 256) % 256;
    (s as any).temp_blue = (((s as any).temp_input ?? 0) / 65536) % 256;
  } else {
    (s as any).temp_work = (((s as any).temp_input ?? 0) % 256) + 256;
    (s as any).temp_red = ((s as any).temp_work ?? 0) % 256;
    (s as any).temp_work = (((s as any).temp_input ?? 0) % 65536) + 65536;
    (s as any).temp_green = (((s as any).temp_work ?? 0) / 256) % 256;
    (s as any).temp_work = (((s as any).temp_input ?? 0) % 16777216) + 16777216;
    (s as any).temp_blue = (((s as any).temp_work ?? 0) / 65536) % 256;
  }
  (s as any).red_hex = qspFunc(s, 'shortgs', 'int_to_hex_str', ((s as any).temp_red ?? 0));
  (s as any).green_hex = qspFunc(s, 'shortgs', 'int_to_hex_str', ((s as any).temp_green ?? 0));
  (s as any).blue_hex = qspFunc(s, 'shortgs', 'int_to_hex_str', ((s as any).temp_blue ?? 0));
  (s as any).result = (String('00' + ((s as any).red_hex ?? 0)).slice((1 + (String(((s as any).red_hex ?? 0)).length))-1));
  // TODO-QSP: $result += $mid('00' + $green_hex,  1 + len($green_hex))
  // TODO-QSP: $result += $mid('00' + $blue_hex,  1 + len($blue_hex))
  (s as any).result = '#' + ((s as any).result ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInvertColor(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[2] ?? 0) === 'bw') {
    if (qspFunc(s, 'shortgs', 'color_is_dark', ((s as any).locArgs?.[1] ?? 0)) === 1) {
      (s as any).result = '#FFFFFF';
    } else {
      (s as any).result = '#000000';
    }
  } else {
    // TODO-QSP: $ARGS[1] = ucase(replace(trim($ARGS[1]), '#'))
    (s as any).shortgs_r_int = 255 - qspFunc(s, 'shortgs', 'hex_str_to_int', (String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))));
    (s as any).shortgs_g_int = 255 - qspFunc(s, 'shortgs', 'hex_str_to_int', (String(((s as any).locArgs?.[1] ?? 0)).slice((3)-1, ((3)-1)+(2))));
    (s as any).shortgs_b_int = 255 - qspFunc(s, 'shortgs', 'hex_str_to_int', (String(((s as any).locArgs?.[1] ?? 0)).slice((5)-1, ((5)-1)+(2))));
    (s as any).shortgs_r = qspFunc(s, 'shortgs', 'int_to_hex_str', ((s as any).shortgs_r_int ?? 0));
    (s as any).shortgs_g = qspFunc(s, 'shortgs', 'int_to_hex_str', ((s as any).shortgs_g_int ?? 0));
    (s as any).shortgs_b = qspFunc(s, 'shortgs', 'int_to_hex_str', ((s as any).shortgs_b_int ?? 0));
    (s as any).shortgs_r = (String('0' + ((s as any).shortgs_r ?? 0)).slice(((String(((s as any).shortgs_r ?? 0)).length))-1, (((String(((s as any).shortgs_r ?? 0)).length))-1)+(2)));
    (s as any).shortgs_g = (String('0' + ((s as any).shortgs_g ?? 0)).slice(((String(((s as any).shortgs_g ?? 0)).length))-1, (((String(((s as any).shortgs_g ?? 0)).length))-1)+(2)));
    (s as any).shortgs_b = (String('0' + ((s as any).shortgs_b ?? 0)).slice(((String(((s as any).shortgs_b ?? 0)).length))-1, (((String(((s as any).shortgs_b ?? 0)).length))-1)+(2)));
    (s as any).result = '#' + ((s as any).shortgs_r ?? 0) + ((s as any).shortgs_g ?? 0) + ((s as any).shortgs_b ?? 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterColorIsDark(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $ARGS[1] = ucase(replace(trim($ARGS[1]), '#'))
  (s as any).shortgs_cid_r = qspFunc(s, 'shortgs', 'hex_str_to_int', (String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(2))));
  (s as any).shortgs_cid_g = qspFunc(s, 'shortgs', 'hex_str_to_int', (String(((s as any).locArgs?.[1] ?? 0)).slice((3)-1, ((3)-1)+(2))));
  (s as any).shortgs_cid_b = qspFunc(s, 'shortgs', 'hex_str_to_int', (String(((s as any).locArgs?.[1] ?? 0)).slice((5)-1, ((5)-1)+(2))));
  (s as any).result = 2126 * ((s as any).shortgs_cid_r ?? 0) * ((s as any).shortgs_cid_r ?? 0) + 7152 * ((s as any).shortgs_cid_g ?? 0) * ((s as any).shortgs_cid_g ?? 0) + 722 * ((s as any).shortgs_cid_b ?? 0) * ((s as any).shortgs_cid_b ?? 0);
  (s as any).result = ((((s as any).result ?? 0) > 136315346) ? (0) : (1));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterEnumerateList(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'string', 'enumerate_list', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "AARGS[2]", { location: "shortgs" }), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetNumberSuffix(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    (s as any).query_number = (-((s as any).locArgs?.[1] ?? 0)) % 100;
  } else {
    (s as any).query_number = ((s as any).locArgs?.[1] ?? 0) % 100;
  }
  if (((s as any).query_number ?? 0) >= 4  &&  ((s as any).query_number ?? 0) <= 20) {
    (s as any).result = 'th';
  } else {
    if (((s as any).query_number ?? 0) % 10 === 1) {
      (s as any).result = 'st';
    } else {
      if (((s as any).query_number ?? 0) % 10 === 2) {
        (s as any).result = 'nd';
      } else {
        if (((s as any).query_number ?? 0) % 10 === 3) {
          (s as any).result = 'rd';
        } else {
          (s as any).result = 'th';
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterConvertDob(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['day'] = (((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] % 100);
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['month'] = (((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 100) % 100;
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['year'] = ((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 10000;
  (s as any).result = qspFunc(s, 'time', 'get_date_string', ((s as any).temp_npcVars ?? 0)?.['year'], ((s as any).temp_npcVars ?? 0)?.['month'], ((s as any).temp_npcVars ?? 0)?.['day']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDobToAge(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['day'] = (((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] % 100);
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['month'] = (((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 100) % 100;
  ((s as any).temp_npcVars = (s as any).temp_npcVars ?? {})['year'] = ((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 10000;
  (s as any).result = qspFunc(s, 'time', 'get_age', ((s as any).temp_npcVars ?? 0)?.['year'], ((s as any).temp_npcVars ?? 0)?.['month'], ((s as any).temp_npcVars ?? 0)?.['day']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGenerateDickSizes(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) > 100) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 100;
  }
  ((s as any).shortgsVars = (s as any).shortgsVars ?? {})['maxi'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).shortgsVars = (s as any).shortgsVars ?? {})['i'] = 0;
  (s as any).temp_table = '<center><table rules="rows" cellpadding="1" style="width: 50%; text-align: center; border-bottom: 1px solid black">';
  // TODO-QSP: $temp_table += '<tr><th>number</th><th>length</th><th>girth</th><th>thdick</th><th>class</th><th>des...
  // TODO-QSP: :gen_dicks_loop
  qspCall(s, 'npcgeneratec', 'gen_dick');
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<td><<shortgsVars[''i'']+1>>:</td><td><<npcgeneratecVars[''dick_length'']>></td><...
  // TODO-QSP: $temp_table +=  '</tr>'
  ((s as any).shortgsVars = (s as any).shortgsVars ?? {})['i'] = ((s as any).shortgsVars['i'] ?? 0) + (1);
  if (((s as any).shortgsVars ?? 0)?.['i'] < ((s as any).shortgsVars ?? 0)?.['maxi']) {
    // TODO-QSP: jump 'gen_dicks_loop'
  }
  // TODO-QSP: $temp_table += '</table></center>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table || '')}`);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUnitString(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) <= 0) {
    (s as any).result = 'Error: Invalid metric value.';
    return;
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 1) {
    (s as any).metric_value = ((s as any).locArgs?.[1] ?? 0);
    (s as any).imperial_value_int = (((s as any).metric_value ?? 0) * 328) / 10000;
    (s as any).imperial_value_float = ((((s as any).metric_value ?? 0) * 3937) / 10000) % 12;
    if (((s as any).imperial_value_float ?? 0) > 0) {
      (s as any).result = '' + ((s as any).imperial_value_int ?? 0) + '\' ' + ((s as any).imperial_value_float ?? 0) + '\'';
    } else {
      (s as any).result = '' + ((s as any).imperial_value_int ?? 0) + '\'';
    }
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) < 100) {
      (s as any).result = '' + ((s as any).locArgs?.[1] ?? 0) + ' cm';
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) % 100 === 0) {
        (s as any).result = '' + ((s as any).locArgs?.[1] ?? 0) / 100 + ' m';
      } else {
        (s as any).metervalue = ((s as any).locArgs?.[1] ?? 0) / 100;
        (s as any).meterdecimal = ((s as any).locArgs?.[1] ?? 0) % 100;
        (s as any).result = '' + ((s as any).metervalue ?? 0) + '.' + ((s as any).meterdecimal ?? 0) + ' m';
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNum2txt(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).num = ((s as any).locArgs?.[1] ?? 0);
  } else {
    if (!isNaN(Number((s as any).locArgs?.[1] ?? 0)) && Number((s as any).locArgs?.[1] ?? 0) !== '') {
      (s as any).num = parseFloat(((s as any).locArgs?.[1] ?? 0));
    } else {
      return;
    }
  }
  (s as any).result = qspFunc(s, 'string', 'parse_number', ((s as any).num ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFormatPriceString(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', 'format', ((s as any).locArgs?.[1] ?? 0), 1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'autosave':
      enterAutosave(s, scene);
      break;
    case 'show_table':
      enterShowTable(s, scene);
      break;
    case 'guy':
      enterGuy(s, scene);
      break;
    case 'girl':
      enterGirl(s, scene);
      break;
    case 'undress':
      enterUndress(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case 'checkdress':
      enterCheckdress(s, scene);
      break;
    case 'sqrt':
      enterSqrt(s, scene);
      break;
    case 'modul':
      enterModul(s, scene);
      break;
    case 'dow':
      enterDow(s, scene);
      break;
    case 'doy':
      enterDoy(s, scene);
      break;
    case 'mk1':
      enterMk1(s, scene);
      break;
    case 'mk':
      enterMk(s, scene);
      break;
    case 'fonts':
      enterFonts(s, scene);
      break;
    case 'ncp_update':
      enterNcpUpdate(s, scene);
      break;
    case 'get_me_index':
      enterGetMeIndex(s, scene);
      break;
    case 'remove_array_element':
      enterRemoveArrayElement(s, scene);
      break;
    case 'testsize':
      enterTestsize(s, scene);
      break;
    case 'npctest':
      enterNpctest(s, scene);
      break;
    case 'replace header':
      enterReplaceHeader(s, scene);
      break;
    case 'img msg':
      enterImgMsg(s, scene);
      break;
    case 'round_divide':
      enterRoundDivide(s, scene);
      break;
    case 'round_tool':
      enterRoundTool(s, scene);
      break;
    case 'rand_pick':
      enterRandPick(s, scene);
      break;
    case 'parse_string':
      enterParseString(s, scene);
      break;
    case 'clothing_state':
      enterClothingState(s, scene);
      break;
    case 'clothing_status':
      enterClothingStatus(s, scene);
      break;
    case 'payments':
      enterPayments(s, scene);
      break;
    case 'paymentcomplete':
      enterPaymentcomplete(s, scene);
      break;
    case 'calendar_display':
      enterCalendarDisplay(s, scene);
      break;
    case 'day_display':
      enterDayDisplay(s, scene);
      break;
    case 'time_display':
      enterTimeDisplay(s, scene);
      break;
    case 'setloc':
      enterSetloc(s, scene);
      break;
    case 'roll':
      enterRoll(s, scene);
      break;
    case 'clamp':
      enterClamp(s, scene);
      break;
    case 'setStat':
      enterSetStat(s, scene);
      break;
    case 's_pow':
      enterSPow(s, scene);
      break;
    case 's_pow2':
      enterSPow2(s, scene);
      break;
    case 'coupled_array_sort':
      enterCoupledArraySort(s, scene);
      break;
    case 'int_to_hex_str':
      enterIntToHexStr(s, scene);
      break;
    case 'hex_str_to_int':
      enterHexStrToInt(s, scene);
      break;
    case 'rgb_to_hex':
      enterRgbToHex(s, scene);
      break;
    case 'invert_color':
      enterInvertColor(s, scene);
      break;
    case 'color_is_dark':
      enterColorIsDark(s, scene);
      break;
    case 'enumerate_list':
      enterEnumerateList(s, scene);
      break;
    case 'get_number_suffix':
      enterGetNumberSuffix(s, scene);
      break;
    case 'convert_dob':
      enterConvertDob(s, scene);
      break;
    case 'dob_to_age':
      enterDobToAge(s, scene);
      break;
    case 'generate_dick_sizes':
      enterGenerateDickSizes(s, scene);
      break;
    case 'unit_string':
      enterUnitString(s, scene);
      break;
    case 'num2txt':
      enterNum2txt(s, scene);
      break;
    case 'format_price_string':
      enterFormatPriceString(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shortgs: LocationDef = {
  name: 'shortgs',
  title: 'You need to get dressed before going out.',
  region: 'other',
  enter: enter,
};
