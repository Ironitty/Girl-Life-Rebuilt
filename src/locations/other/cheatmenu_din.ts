import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEmpty(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCheattabs(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 0;
  // TODO-QSP: $tabsname[i] = 'Index'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'index'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Recurrent'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'permanent'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'State'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'state'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Appearance'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'looks'"
  // TODO-QSP: tabsrow[] = i
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Skill'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'stats'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    // TODO-QSP: $tabsname[i] = 'Magic'
    // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'magic'"
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  // TODO-QSP: $tabsname[i] = 'Story'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'story'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'NPCs'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'npcs'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Items'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'items'"
  // TODO-QSP: tabsrow[] = i
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Time'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'time'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Pain'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'pain'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Image Sets'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'bdimmain'"
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Fame'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'fame'"
  // TODO-QSP: tabsrow[] = i
  (s as any).i = ((s as any).i ?? 0) + (1);
  // TODO-QSP: $tabsname[i] = 'Traits & Archetypes'
  // TODO-QSP: $tabsaction[i] = "menu_page = <<i>> & gt 'cheatmenu_din', 'traits_cheats'"
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "cheatmenu_din" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
  }
  qspCall(s, 'tabhead', '', ((s as any).menu_page ?? 0));
  scene.actions([
    { label: 'Settings menu', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_din', 'menu_exit');
  }, goto: ['$menu_settings', ''] },
    { label: 'Emergency Exit', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_din', 'menu_exit');
  }, goto: ['obj_din', 'emergency'] },
    { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_din', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  scene.build();
}

function enterQuicktime(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "cheatmenu_din" }));
  qspCall(s, 'outdoors', 'weather');
  qspCall(s, 'fertility', 'cum_arrcheat');
  qspCall(s, 'stat', '');
  scene.build();
}

function enterDynamic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dynamicCommand ?? 0) !== '') {
    // TODO-QSP: dynamic $dynamicCommand
  }
  scene.build();
}

function enterVartracker(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Cheat menu</h1></center>');
  scene.text('<center>For testing purposes.<br>If reporting a bug only the lines in red are necessary.</center>');
  // TODO-QSP: dynamic text: $loc: <<$loc>>
  scene.text(`$loc: ${((s as any).loc ?? 0)}`);
  // TODO-QSP: dynamic text: $locM: <<$locM>>
  scene.text(`$locM: ${((s as any).locM ?? 0)}`);
  // TODO-QSP: dynamic text: <font color = red>$CURLOC: <<$CURLOC>></font>
  scene.text(`<font color = red>$CURLOC: ${((s as any).CURLOC ?? 0)}</font>`);
  // TODO-QSP: dynamic text: $location_type: <<$location_type>>
  scene.text(`$location_type: ${((s as any).location_type ?? 0)}`);
  // TODO-QSP: dynamic text: $home['current']: <<$home['current']>>
  scene.text(`$home['current']: ${((s as any).home ?? 0)?.['current']}`);
  // TODO-QSP: dynamic text: $home['town']: <<$home['town']>>
  scene.text(`$home['town']: ${((s as any).home ?? 0)?.['town']}`);
  // TODO-QSP: dynamic text: $home['name']: <<$home['name']>>
  scene.text(`$home['name']: ${((s as any).home ?? 0)?.['name']}`);
  // TODO-QSP: dynamic text: daystart: <<daystart>>
  scene.text(`daystart: ${((s as any).daystart ?? 0)}`);
  // TODO-QSP: dynamic text: daystart_start: <<daystart_start>>
  scene.text(`daystart_start: ${((s as any).daystart_start ?? 0)}`);
  // TODO-QSP: dynamic text: month: <<month>>
  scene.text(`month: ${((s as any).month ?? 0)}`);
  // TODO-QSP: dynamic text: week: <<week>>
  scene.text(`week: ${((s as any).week ?? 0)}`);
  // TODO-QSP: dynamic text: $temperature: <<$temperature>>
  scene.text(`$temperature: ${((s as any).temperature ?? 0)}`);
  // TODO-QSP: dynamic text: porn bookings active: <<job_bookings_active['city_pornstudio_actress']>>
  scene.text(`porn bookings active: ${((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress']}`);
  // TODO-QSP: dynamic text: porndays: <<porndays>>
  scene.text(`porndays: ${((s as any).porndays ?? 0)}`);
  // TODO-QSP: dynamic text: $pfname: <<$pfname>>
  scene.text(`$pfname: ${((s as any).pfname ?? 0)}`);
  // TODO-QSP: dynamic text: modelmon: <<modelmon>>
  scene.text(`modelmon: ${((s as any).modelmon ?? 0)}`);
  // TODO-QSP: dynamic text: min_arousal: <<min_arousal>>
  scene.text(`min_arousal: ${((s as any).min_arousal ?? 0)}`);
  // TODO-QSP: dynamic text: pcs_nips: <<pcs_nips>>
  scene.text(`pcs_nips: ${((s as any).pcs_nips ?? 0)}`);
  // TODO-QSP: dynamic text: clit_size: <<clit_size>>
  scene.text(`clit_size: ${((s as any).clit_size ?? 0)}`);
  // TODO-QSP: dynamic text: steroids: <<mc_inventory['steroids']>>
  scene.text(`steroids: ${((s as any).mc_inventory ?? 0)?.['steroids']}`);
  // TODO-QSP: dynamic text: steroids_used: <<drugVars['steroids_used']>>
  scene.text(`steroids_used: ${((s as any).drugVars ?? 0)?.['steroids_used']}`);
  // TODO-QSP: dynamic text: steroid_dose: <<drugVars['steroids_dose']>>
  scene.text(`steroid_dose: ${((s as any).drugVars ?? 0)?.['steroids_dose']}`);
  // TODO-QSP: dynamic text: aphrodisiac pills: <<mc_inventory['aphrodisiac']>>
  scene.text(`aphrodisiac pills: ${((s as any).mc_inventory ?? 0)?.['aphrodisiac']}`);
  // TODO-QSP: dynamic text: aphrodisiac_counter: <<aphrodisiac_counter>>
  scene.text(`aphrodisiac_counter: ${((s as any).aphrodisiac_counter ?? 0)}`);
  // TODO-QSP: dynamic text: aphrodisiac_timer: <<drugVars['aphrodisiac_timer']>>
  scene.text(`aphrodisiac_timer: ${((s as any).drugVars ?? 0)?.['aphrodisiac_timer']}`);
  // TODO-QSP: dynamic text: aphrodisiac_addiction: <<drugVars['aphrodisiac_addict']>>
  scene.text(`aphrodisiac_addiction: ${((s as any).drugVars ?? 0)?.['aphrodisiac_addict']}`);
  // TODO-QSP: dynamic text: breastcream: <<mc_inventory['breastcream']>>
  scene.text(`breastcream: ${((s as any).mc_inventory ?? 0)?.['breastcream']}`);
  // TODO-QSP: dynamic text: motherQW: <<npc_QW['A29']>>
  scene.text(`motherQW: ${((s as any).npc_QW ?? 0)?.['A29']}`);
  // TODO-QSP: dynamic text: Anastasia quest level: <<npc_QW['A192']>>
  scene.text(`Anastasia quest level: ${((s as any).npc_QW ?? 0)?.['A192']}`);
  // TODO-QSP: dynamic text: sex: <<stat['vaginal']>>
  scene.text(`sex: ${((s as any).stat ?? 0)?.['vaginal']}`);
  // TODO-QSP: dynamic text: $clothingworntype: <<$clothingworntype>>
  scene.text(`$clothingworntype: ${((s as any).clothingworntype ?? 0)}`);
  // TODO-QSP: dynamic text: PCloQuality: <<PCloQuality>>
  scene.text(`PCloQuality: ${((s as any).PCloQuality ?? 0)}`);
  // TODO-QSP: dynamic text: Mira's Father Quest (npc_QW['A64']): <<npc_QW['A64']>>
  scene.text(`Mira's Father Quest (npc_QW['A64']): ${((s as any).npc_QW ?? 0)?.['A64']}`);
  // TODO-QSP: dynamic text: Mira's Quest (MiraVars['QW']): <<MiraVars['QW']>>
  scene.text(`Mira's Quest (MiraVars['QW']): ${((s as any).MiraVars ?? 0)?.['QW']}`);
  // TODO-QSP: dynamic text: MiraVars['Mitka_fucks']: <<MiraVars['Mitka_fucks']>>
  scene.text(`MiraVars['Mitka_fucks']: ${((s as any).MiraVars ?? 0)?.['Mitka_fucks']}`);
  // TODO-QSP: dynamic text: Mira's Relationship (npc_rel['A60']): <<npc_rel['A60']>>
  scene.text(`Mira's Relationship (npc_rel['A60']): ${((s as any).npc_rel ?? 0)?.['A60']}`);
  // TODO-QSP: dynamic text: Mitka's Quest (npc_QW['A63']): <<npc_QW['A63']>>
  scene.text(`Mitka's Quest (npc_QW['A63']): ${((s as any).npc_QW ?? 0)?.['A63']}`);
  // TODO-QSP: dynamic text: mirabrosextime: <<mirabrosextime>>
  scene.text(`mirabrosextime: ${((s as any).mirabrosextime ?? 0)}`);
  // TODO-QSP: dynamic text: momslut: <<momslut>>
  scene.text(`momslut: ${((s as any).momslut ?? 0)}`);
  // TODO-QSP: dynamic text: Kirill's Relationship (Kirill): <<Kirill>>
  scene.text(`Kirill's Relationship (Kirill): ${((s as any).Kirill ?? 0)}`);
  // TODO-QSP: dynamic text: Kirill's Corruption (Kirill_Crpt): <<Kirill_Crpt>>
  scene.text(`Kirill's Corruption (Kirill_Crpt): ${((s as any).Kirill_Crpt ?? 0)}`);
  // TODO-QSP: dynamic text: children: <<kid>>
  scene.text(`children: ${((s as any).kid ?? 0)}`);
  // TODO-QSP: dynamic text: fetus number: <<BabyEmbryo>>
  scene.text(`fetus number: ${((s as any).BabyEmbryo ?? 0)}`);
  // TODO-QSP: dynamic text: pregnancy state: <<preg>>
  scene.text(`pregnancy state: ${((s as any).preg ?? 0)}`);
  // TODO-QSP: dynamic text: thinkpreg: <<thinkpreg>>
  scene.text(`thinkpreg: ${((s as any).thinkpreg ?? 0)}`);
  // TODO-QSP: dynamic text: knowpreg: <<knowpreg>>
  scene.text(`knowpreg: ${((s as any).knowpreg ?? 0)}`);
  // TODO-QSP: dynamic text: knowpregrecover: <<knowpregrecover>>
  scene.text(`knowpregrecover: ${((s as any).knowpregrecover ?? 0)}`);
  // TODO-QSP: dynamic text: knowpregloss: <<knowpregloss>>
  scene.text(`knowpregloss: ${((s as any).knowpregloss ?? 0)}`);
  // TODO-QSP: dynamic text: cycle: <<cycle>>
  scene.text(`cycle: ${((s as any).cycle ?? 0)}`);
  // TODO-QSP: dynamic text: menoage: <<menoage>>
  scene.text(`menoage: ${((s as any).menoage ?? 0)}`);
  // TODO-QSP: dynamic text: age: <<age>>
  scene.text(`age: ${((s as any).age ?? 0)}`);
  // TODO-QSP: dynamic text: mesec: <<mesec>>
  scene.text(`mesec: ${((s as any).mesec ?? 0)}`);
  // TODO-QSP: dynamic text: focH: <<focH>>
  scene.text(`focH: ${((s as any).focH ?? 0)}`);
  // TODO-QSP: dynamic text: EggRH: <<EggRH>>
  scene.text(`EggRH: ${((s as any).EggRH ?? 0)}`);
  // TODO-QSP: dynamic text: Ovulate: <<Ovulate>>
  scene.text(`Ovulate: ${((s as any).Ovulate ?? 0)}`);
  // TODO-QSP: dynamic text: UnfertEgg: <<UnfertEgg>>
  scene.text(`UnfertEgg: ${((s as any).UnfertEgg ?? 0)}`);
  // TODO-QSP: dynamic text: FertEgg: <<FertEgg>>
  scene.text(`FertEgg: ${((s as any).FertEgg ?? 0)}`);
  if (((s as any).FertEgg ?? 0) > 0) {
    (s as any).i = qspUntranslated(s, "arrpos('kidname', 'unborn')", { location: "cheatmenu_din" });
    (s as any).imax = 0;
    // TODO-QSP: :chlp
    // TODO-QSP: dynamic text:   <<i+1>>. baby's pregnancy type: <<babyptype[i]>>
    scene.text(`  ${((s as any).i ?? 0)+1}. baby's pregnancy type: ${((s as any).babyptype ?? 0)?.[String((s as any).i ?? 0)]}`);
    if (((s as any).i ?? 0) < ((s as any).imax ?? 0)) {
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'chlp'
    }
  }
  // TODO-QSP: dynamic text: Implanted Embryos: <<BabyEmbryo>>
  scene.text(`Implanted Embryos: ${((s as any).BabyEmbryo ?? 0)}`);
  // TODO-QSP: dynamic text: ferteggage: <<ferteggage>>
  scene.text(`ferteggage: ${((s as any).ferteggage ?? 0)}`);
  // TODO-QSP: dynamic text: pregChem: <<pregChem>>
  scene.text(`pregChem: ${((s as any).pregChem ?? 0)}`);
  // TODO-QSP: dynamic text: pillcon: <<pillcon>>
  scene.text(`pillcon: ${((s as any).pillcon ?? 0)}`);
  // TODO-QSP: dynamic text: Believed pillcon: <<pillcon2>>
  scene.text(`Believed pillcon: ${((s as any).pillcon2 ?? 0)}`);
  // TODO-QSP: dynamic text: RecovH: <<RecovH>>
  scene.text(`RecovH: ${((s as any).RecovH ?? 0)}`);
  // TODO-QSP: dynamic text: daylastperiod: <<daylastperiod>> (daystart difference: <<daystart-daylastperiod>...
  scene.text(`daylastperiod: ${((s as any).daylastperiod ?? 0)} (daystart difference: ${((s as any).daystart ?? 0)-((s as any).daylastperiod ?? 0)})`);
  // TODO-QSP: dynamic text: lastmens: <<lastmens>>
  scene.text(`lastmens: ${((s as any).lastmens ?? 0)}`);
  // TODO-QSP: dynamic text: firstmens: <<lastmens>> (daystart difference: <<daystart-firstmens>>)
  scene.text(`firstmens: ${((s as any).lastmens ?? 0)} (daystart difference: ${((s as any).daystart ?? 0)-((s as any).firstmens ?? 0)})`);
  // TODO-QSP: dynamic text: hypnoTime: <<hypnoTime>>
  scene.text(`hypnoTime: ${((s as any).hypnoTime ?? 0)}`);
  // TODO-QSP: dynamic text: hypnoStrength: <<hypnoStrength>>
  scene.text(`hypnoStrength: ${((s as any).hypnoStrength ?? 0)}`);
  // TODO-QSP: dynamic text: hypnoDay: <<hypnoDay>>
  scene.text(`hypnoDay: ${((s as any).hypnoDay ?? 0)}`);
  // TODO-QSP: dynamic text: missCum: <<missCum>> / timeTresh: <<timeTresh>>
  scene.text(`missCum: ${((s as any).missCum ?? 0)} / timeTresh: ${((s as any).timeTresh ?? 0)}`);
  if ((!((s as any).preziktype ?? 0))) {
    // TODO-QSP: dynamic text: condoms: in use(normal)/damaged/bad condoms: <<mc_inventory['equipped_condoms']+...
    scene.text(`condoms: in use(normal)/damaged/bad condoms: ${((s as any).mc_inventory ?? {})?.['equipped_condoms']+((s as any).mc_inventory ?? {})?.['normal_condoms']}/${((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']}/${((s as any).mc_inventory ?? 0)?.['bad_condoms']}`);
  } else {
    if (((s as any).preziktype ?? 0) === 1) {
      // TODO-QSP: dynamic text: condoms: (Not in use) normal/damaged/bad condoms: <<mc_inventory['normal_condoms...
      scene.text(`condoms: (Not in use) normal/damaged/bad condoms: ${((s as any).mc_inventory ?? 0)?.['normal_condoms']}/${((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']}/${((s as any).mc_inventory ?? 0)?.['bad_condoms']}`);
    } else {
      // TODO-QSP: dynamic text: condoms: in use (damaged)/normal/bad condoms: <<mc_inventory['equipped_condoms']...
      scene.text(`condoms: in use (damaged)/normal/bad condoms: ${((s as any).mc_inventory ?? {})?.['equipped_condoms']+((s as any).mc_inventory ?? {})?.['sabotaged_condoms']}/${((s as any).mc_inventory ?? 0)?.['normal_condoms']}/${((s as any).mc_inventory ?? 0)?.['bad_condoms']}`);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
    // TODO-QSP: dynamic text: pack(s) of birth control pills: <<mc_inventory['contraceptive_pill']>>
    scene.text(`pack(s) of birth control pills: ${((s as any).mc_inventory ?? 0)?.['contraceptive_pill']}`);
    if (((s as any).tabletkiold ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkiold>> expired pack
      scene.text(`  ${((s as any).tabletkiold ?? 0)} expired pack`);
    }
    if (((s as any).tabletkifake ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkifake>> counterfeit pack
      scene.text(`  ${((s as any).tabletkifake ?? 0)} counterfeit pack`);
    }
    if (((s as any).tabletkirej ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkirej>> factory rejected pack
      scene.text(`  ${((s as any).tabletkirej ?? 0)} factory rejected pack`);
    }
    if (((s as any).tabletkifert ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkifert>> fertility hormones pack
      scene.text(`  ${((s as any).tabletkifert ?? 0)} fertility hormones pack`);
    }
    if (((s as any).tabletkisug ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkisug>> sugar pills pack
      scene.text(`  ${((s as any).tabletkisug ?? 0)} sugar pills pack`);
    }
  }
  if (((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
    if ((!((s as any).ptype ?? 0))) {
    }
    if (((s as any).ptype ?? 0) === 1) {
    }
    if (((s as any).ptype ?? 0) === 2) {
    }
    if (((s as any).ptype ?? 0) === 3) {
    }
    if (((s as any).ptype ?? 0) === 4) {
    }
    if (((s as any).ptype ?? 0) === 5) {
    }
    // TODO-QSP: dynamic text: <<pillsleft[ptype]>> <<$pilltype>>pills left of your currently used pack
    scene.text(`${((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)]} ${((s as any).pilltype ?? 0)}pills left of your currently used pack`);
  }
  scene.actions([
    { label: 'Return to cheat index', goto: ['cheatmenu_din', 'index'] },
  ]);
  scene.build();
}

function enterIndex(s: GameState, scene: SceneBuilder): void {
  (s as any).cheatmenu['this_menu'] = 'index';
  (s as any).currhour = (((s as any).daystart ?? 0)-1) * 24 + ((s as any).hour ?? 0);
  (s as any).currday = ((s as any).daystart ?? 0);
  (s as any).temp_daystart = ((s as any).daystart ?? 0);
  (s as any).temp_hour = ((s as any).hour ?? 0);
  (s as any).temp_minut = ((s as any).minut ?? 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Index');
  scene.text('<center><h1>Cheat Menu - Index</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'dynamic\'">Dynamic Input Command</a>');
  scene.text('<a href="exec:gs \'fertility\',\'cum_arrcheat\'">OOX Debug</a>');
  // TODO-QSP: dynamic text: Right now it is ' + $func('time', 'get_date_string') + ', ' + $func('time', 'get...
  scene.text('Right now it is \' + $func(\'time\', \'get_date_string\') + \', \' + $func(\'time\', \'get_time_string\') + \'.');
  // TODO-QSP: dynamic text: Jump forward <a href="exec:gs 'cheatmenu_din', 'quicktime', 15 & gt 'cheatmenu_d...
  scene.text('Jump forward <a href="exec:gs \'cheatmenu_din\', \'quicktime\', 15 & gt \'cheatmenu_din\', \'index\'">+15</a> minutes');
  scene.text('<a href="exec:gt\'pav_residential\'"  >Teleport to Pavlovsk</a>');
  scene.text('<a href="exec:gt\'pushkin\'"      >Teleport to Pushkin</a>');
  scene.text('<a href="exec:gt\'city_residential\'"  >Teleport to City</a>');
  scene.text('<a href="exec:gt\'gadukino\'"      >Teleport to Gadukino</a>');
  scene.text('<a href="exec:gt\'dachi\'"        >Teleport to Suburban Cooperative</a>');
  scene.text('<center><b>WARNING!</b></center>');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'console', 'Hide Console input in objects window');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'time', 'Time Cheat in Objects window');
  scene.text('<a href="exec:gt \'cheatmenu_din\', \'vartracker\'"><b>Variable tracker</b></a>');
  // TODO-QSP: $cheatmenu['table_end']
  scene.build();
}

function enterAddict(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 1) {
    (s as any).cheatVars['drugs_immune'] = 0;
  } else {
    (s as any).cheatVars['drugs_immune'] = 1;
    (s as any).drugVars['cigarettes_used'] = 0;
    (s as any).drugVars['cigarettes_need'] = 0;
    (s as any).drugVars['weed_used'] = 0;
    (s as any).drugVars['alcohol_used'] = 0;
    (s as any).drugVars['cocaine_used'] = 0;
    (s as any).drugVars['amphetamine_used'] = 0;
    (s as any).drugVars['heroin_used'] = 0;
  }
  scene.build();
}

function enterClothesDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['clothes_dirt'] === 1) {
    (s as any).cheatVars['clothes_dirt'] = 0;
  } else {
    (s as any).cheatVars['clothes_dirt'] = 1;
    qspCall(s, 'washer', 'wash_all');
  }
  scene.build();
}

function enterVibrator(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['sleep_vib'] === 1) {
    (s as any).cheatVars['sleep_vib'] = 0;
    (s as any).sleepVars['bedVibrator'] = 0;
  } else {
    (s as any).cheatVars['sleep_vib'] = 1;
    (s as any).sleepVars['bedVibrator'] = 1;
  }
  scene.build();
}

function enterBimboCloth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['bimbo'] === 1) {
    (s as any).cheatVars['bimbo'] = 0;
  } else {
    (s as any).cheatVars['bimbo'] = 1;
    (s as any).arch_vars['bimbo_points'] = 0;
    (s as any).arch_vars['preppy_points'] = 0;
    (s as any).arch_vars['prude_points'] = 0;
    (s as any).arch_vars['punk_points'] = 0;
    (s as any).arch_vars['goth_points'] = 0;
    qspCall(s, 'archetypes', 'set_active');
    qspCall(s, 'archetypes', 'seed_snapshots');
  }
  scene.build();
}

function enterSmartBimbo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['smart_bimbo'] === 1) {
    (s as any).cheatVars['smart_bimbo'] = 0;
  } else {
    (s as any).cheatVars['smart_bimbo'] = 1;
  }
  scene.build();
}

function enterSuccuBimbo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['suc_bimbo'] === 1) {
    (s as any).cheatVars['suc_bimbo'] = 0;
  } else {
    (s as any).cheatVars['suc_bimbo'] = 1;
  }
  scene.build();
}

function enterSlutshot(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['no_periods'] === 1) {
    (s as any).cheatVars['no_periods'] = 0;
    (s as any).cycle = 0;
  } else {
    (s as any).cheatVars['no_periods'] = 1;
    (s as any).cycle = 6;
  }
  scene.build();
}

function enterPermanent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Recurrent');
  (s as any).cheatmenu['this_menu'] = 'permanent';
  scene.text('<center><h1>Cheat Menu - Recurrent Cheats</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  // TODO-QSP: $cheatmenu['table_start']
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'willpower', 'Willpower cost always zero');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'inf_willpower', 'Infinite willpower');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'always_brushed', 'Always combed');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'makeup_smear', 'Cosmetics never smeared');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'no_sweat', 'Never sweat');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'hunger', 'Never eat');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'thirst', 'Never drink');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'sleep', 'Never sleep');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'mood', 'Never unhappy');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'no_leghair', 'Never shave legs');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'fat', 'Never lose or gain weight');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'body_staticAssets', 'Bust and butt unaffected by weight');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'school_clothing', 'Allow any clothing for school');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'edit_porn', 'Porn schedule editor');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'archetypes', 'Disable archetype system');
  // TODO-QSP: dynamic text: Never get addicted: <a href="exec:gs 'cheatmenu_din', 'addict' & gt 'cheatmenu_d...
  scene.text(`Never get addicted: <a href="exec:gs 'cheatmenu_din', 'addict' & gt 'cheatmenu_din', 'permanent'">${((((s as any).cheatVars ?? 0)?.['drugs_immune']) ? ('Enabled') : ('Disabled'))}</a>`);
  // TODO-QSP: dynamic text: Enable sleeping with vibrator inserted: <a href="exec:gs 'cheatmenu_din', 'Vibra...
  scene.text(`Enable sleeping with vibrator inserted: <a href="exec:gs 'cheatmenu_din', 'Vibrator' & gt 'cheatmenu_din', 'permanent'">${((((s as any).cheatVars ?? 0)?.['sleep_vib']) ? ('Enabled') : ('Disabled'))}</a>`);
  // TODO-QSP: dynamic text: Clothes never dirty: <a href="exec:gs 'cheatmenu_din', 'clothes_dirt' & gt 'chea...
  scene.text(`Clothes never dirty: <a href="exec:gs 'cheatmenu_din', 'clothes_dirt' & gt 'cheatmenu_din', 'permanent'">${((((s as any).cheatVars ?? 0)?.['clothes_dirt']) ? ('Enabled') : ('Disabled'))}</a>`);
  // TODO-QSP: dynamic text: Clothing Archetypes and the effects of wearing special clothes: <a href="exec:gs...
  scene.text(`Clothing Archetypes and the effects of wearing special clothes: <a href="exec:gs 'cheatmenu_din', 'BimboCloth' & gt 'cheatmenu_din', 'permanent'">${((((s as any).cheatVars ?? 0)?.['bimbo']) ? ('Disabled') : ('Enabled'))}</a>`);
  if (((s as any).cheatVars ?? 0)?.['bimbo'] === 0) {
    // TODO-QSP: dynamic text:   Succubus clothing invulnerability: <a href="exec:gs 'cheatmenu_din', 'SuccuBim...
    scene.text(`  Succubus clothing invulnerability: <a href="exec:gs 'cheatmenu_din', 'SuccuBimbo' & gt 'cheatmenu_din', 'permanent'">${((((s as any).cheatVars ?? 0)?.['suc_bimbo']) ? ('Enabled') : ('Disabled'))}</a>`);
  }
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'always_horny', 'Set arousal to always be at 50 or more');
  // TODO-QSP: dynamic text: Periods (and pregnancies): <a href="exec:gs 'cheatmenu_din', 'slutshot' & gt 'ch...
  scene.text(`Periods (and pregnancies): <a href="exec:gs 'cheatmenu_din', 'slutshot' & gt 'cheatmenu_din', 'permanent'">${((((s as any).cheatVars ?? 0)?.['no_periods']) ? ('Disabled') : ('Enabled'))}</a>`);
  if (((s as any).cheatVars ?? 0)?.['no_periods'] === 0) {
    qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'no_pregnancy', '  Impregnation', 'Disabled', 'Enabled');
  }
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'no_lactation', 'Lactation', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'no_cum_leak', 'Cum leaking', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'std', 'STDs', 'Disabled', 'Enabled');
  // TODO-QSP: 'No dream chance: <a href="exec: cheatVars[''no_dream_chance''] = input(''Enter no dream chance (%)'...
  // TODO-QSP: $cheatmenu['table_end']
  scene.text('<center><b>WARNING!</b></center>');
  scene.build();
}

function enterMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).money = 0;
  if (((s as any).money ?? 0) < 0) {
    (s as any).money = 0;
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'state'] }]);
  scene.build();
}

function enterBankMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).karta = 0;
  if (((s as any).karta ?? 0) < 0) {
    (s as any).karta = 0;
  }
  (s as any).karta = ((s as any).karta ?? 0) + (((s as any).bankDebtLimit ?? 0));
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'state'] }]);
  scene.build();
}

function enterTherapistReset(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'therapist', 'restTherapyVariables');
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'state'] }]);
  scene.build();
}

function enterCycle(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cheatmenu_din', 'cheattabs');
  if (((s as any).cycle ?? 0) === 5) {
    scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'state'] }]);
  } else {
    (s as any).EggRH = 0;
    (s as any).focH = 0;
    (s as any).lutH = 0;
    (s as any).Ovulate = 0;
    (s as any).UnfertEgg = 0;
    (s as any).FertEgg = 0;
    (s as any).RecovH = 0;
    (s as any).mesec = 0;
    scene.text('<a href="exec: cycle = 0 & daylastperiod = daystart & mesec = 96 & gs \'stat\' & gt \'cheatmenu_din\', \'state\'">Menstration</a>');
    scene.text('<a href="exec: cycle = 1 & gs \'stat\' & gt \'cheatmenu_din\', \'state\'">Follicular</a>');
    // TODO-QSP: dynamic text: <a href="exec: cycle = 2 & ovulate = 24 + rand(0,20) & EggRH = 160 + 160+rand(0,...
    scene.text('<a href="exec: cycle = 2 & ovulate = 24 + rand(0,20) & EggRH = 160 + 160+rand(0, 5) & gs \'stat\' & gt \'cheatmenu_din\', \'state\'">Ovulation</a>');
    scene.text('<a href="exec: cycle = 3 & gs \'stat\' & gt \'cheatmenu_din\', \'state\'">Luteal</a>');
  }
  scene.build();
}

function enterStdCure(s: GameState, scene: SceneBuilder): void {
  (s as any).Venera = 0;
  (s as any).GerpesOnce = 0;
  (s as any).Gerpes = 0;
  (s as any).SifacOnce = 0;
  (s as any).Sifilis = 0;
  (s as any).TriperOnce = 0;
  (s as any).Triper = 0;
  (s as any).TriperOral = 0;
  (s as any).KandidozOnce = 0;
  (s as any).Kandidoz = 0;
  scene.build();
}

function enterSetNoPeriods(s: GameState, scene: SceneBuilder): void {
  (s as any).mesec = 0;
  (s as any).focH = 0;
  (s as any).EggRH = 0;
  (s as any).Ovulate = 0;
  (s as any).fertegg = 0;
  (s as any).UnfertEgg = 0;
  (s as any).pregChem = 0;
  (s as any).preg = 0;
  (s as any).lutH = 0;
  (s as any).RecovH = 0;
  (s as any).babyembryo = 0;
  (s as any).cycle = 1;
  scene.build();
}

function enterForcePreg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'A sperm donor', Math.floor(Math.random() * 18) + 18, 0, 1);
  qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'fertility', 'force_preg_by', ((s as any).npclastsaved ?? 0));
  return;
  scene.build();
}

function enterRemovePreg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'medical_din', 'remove_preg');
  (s as any).knowpregloss = 2;
  if (((s as any).FertEgg ?? 0) > 0) {
    (s as any).FertEgg = 0;
  }
  scene.build();
}

function enterState(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'State');
  scene.text('<center><h1>Cheat Menu - Character State Changes</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('especially dangerous unless you know what you\'re doing. When reporting bugs, please mention any cheats you used.</center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('Set alcohol levels:');
  scene.text('<a href="exec:alko = 0 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Sober</a> <a href="exec:alko = 2 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Tipsy</a> <a href="exec:alko = 4 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Drunk</a> <a href="exec:alko = 7 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Wasted</a> <a href="exec:alko = 11 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Barely coherent</a>');
  scene.text('<a href="exec:pcs_horny = 100 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Max arousal</a>');
  scene.text('<a href="exec:pcs_horny = 0 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Min arousal</a>');
  scene.text('<a href="exec:gt \'cheatmenu_din\', \'bodyMod\'">Body Modification</a>');
  // TODO-QSP: dynamic text: <a href="exec:pcs_health = pcs_vital*10 + pcs_stren*5 + 1000 & pcs_willpwr = pcs...
  scene.text('<a href="exec:pcs_health = pcs_vital*10 + pcs_stren*5 + 1000 & pcs_willpwr = pcs_intel*5 + will*5 + 1000 & pcs_mana = (pcs_intel*pcs_magik) + pcs_magik*100 + pcs_vital*10 + rikudo & vgape = 0 & agape = 0 & nippain = 0 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Full restoration of Health, Mana, Reason.</a>');
  scene.text('<a href="exec:pcs_sleep = 100 & pcs_stam = stammax & pcs_mood = 100 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Full restoration of Sleep, Stamina, Mood.</a>');
  scene.text('<a href="exec:pcs_energy = 200 & pcs_hydra = 200 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Full restoration of Hunger and Water.</a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'money\' & gs \'stat\'">Change money</a>');
  scene.text('<a href="exec:money = 0 & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Zero money</a>');
  if (((s as any).bankAccount ?? 0) === 1) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'bank_money\' & gs \'stat\'">Change money in the bank</a>');
    scene.text('<a href="exec: karta = bankDebtLimit & gt \'cheatmenu_din\', \'state\' & gs \'stat\'">Zero money in the bank</a>');
  } else {
    scene.text('<b>You need to open a bank account before getting access to change money in the bank</b>');
  }
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'std_cure\' & gs \'stat\'">Cure all stds</a>');
  scene.text('<a href="exec:vgape = 0 & agape = 0 & nippain = 0 & painpub = 0 & pirs_pain_ton = 0 & mesec = 0 & spanked = 0 & drugVars[\'heroin_need\'] = 0 & drugVars[\'cocaine_addict\'] = 0 & drugVars[\'heroin_high\'] = 0 & drugVars[\'heroin_used\'] = 0 & drugVars[\'heroin_hours_addicted\'] = 0 & drugVars[\'heroin_taper\'] = 0 & drugVars[\'cocaine_system\'] = 0 & fingal = 0 & mosol = 0 & frost = 0 & sick = 0 & hypnoWithdrawal = 0 & gs \'cheatmenu_din\', \'std_cure\' & killvar \'pain\' & gs \'pain\', \'calc\' & gs \'stat\'">Cure all ailments.</a>');
  if ((!((s as any).preg ?? 0))) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'force_preg\' & gs \'stat\' & gt \'cheatmenu_din\', \'state\'">Force random pregnancy</a>');
    if (((s as any).cycle ?? 0) !== 5) {
      scene.text('<a href="exec: gs \'stat\' & gt \'cheatmenu_din\', \'cycle\'">Set stage of menstrual cycle</a>');
    }
  } else {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'remove_preg\' & gs \'stat\' & gt \'cheatmenu_din\', \'state\'">Remove pregnancy</a>');
  }
  scene.text('<a href="exec: gs\'cum_cleanup\',\'reset\' & gs \'stat\' & gt \'cheatmenu_din\', \'state\'">Remove all cum</a>');
  if (((s as any).lactation ?? 0)?.['active'] <= 0) {
    scene.text('You are not lactating');
    // TODO-QSP: dynamic text: Your current prolactinlvl is <<lactation['prolactinlvl']>>ng/ml.
    scene.text(`Your current prolactinlvl is ${((s as any).lactation ?? 0)?.['prolactinlvl']}ng/ml.`);
    scene.text('<a href="exec: gs \'lact_lib\',\'lact_switch\' & gs \'lact_lib\',\'BreastGrowth\' & gt \'cheatmenu_din\', \'state\'">Switch ON</a>');
  } else {
    scene.text('You are lactating');
    scene.text('<a href="exec: gs \'lact_lib\',\'lact_switch\' & gs \'lact_lib\',\'BreastGrowth\' & gt \'cheatmenu_din\', \'state\'">Switch OFF</a>');
    if (((s as any).lactation ?? 0)?.['milkprod_type'] === 1) {
      // TODO-QSP: dynamic text: The milk production is <a href="exec: lactation['milkprod_type'] = 0 & gt 'cheat...
      scene.text(`The milk production is <a href="exec: lactation['milkprod_type'] = 0 & gt 'cheatmenu_din', 'state'">realistic</a>. ${((s as any).pcs_firstname ?? 0)} will produce breast milk based on her body resources.`);
    } else {
      if (((s as any).lactation ?? 0)?.['milkprod_type'] === 0) {
        // TODO-QSP: dynamic text: The milk production is <a href="exec: lactation['milkprod_type'] = 1 & gt 'cheat...
        scene.text(`The milk production is <a href="exec: lactation['milkprod_type'] = 1 & gt 'cheatmenu_din', 'state'">permanent</a>. ${((s as any).pcs_firstname ?? 0)} will produce breast milk disregarding her condition.`);
      } else {
        (s as any).lactation['milkprod_type'] = 1;
      }
    }
    if (((s as any).lactation ?? 0)?.['lactaterate'] <= 0) {
      // TODO-QSP: dynamic text: Lactate Rate: <<lactation['lactaterate']/1000>>ml/h <a href="exec:lactation['lac...
      scene.text(`Lactate Rate: ${((s as any).lactation ?? {})?.['lactaterate']/1000}ml/h <a href="exec:lactation['lactaterate'] += 10000 & gt 'cheatmenu_din', 'state'">+10</a>`);
    } else {
      if (((s as any).lactation ?? 0)?.['lactaterate'] >= 600000) {
        // TODO-QSP: dynamic text: Lactate Rate: <a href="exec:lactation['lactaterate'] -= 10000 & gt 'cheatmenu_di...
        scene.text(`Lactate Rate: <a href="exec:lactation['lactaterate'] -= 10000 & gt 'cheatmenu_din', 'state'">-10</a> ${((s as any).lactation ?? {})?.['lactaterate']/1000}ml/h`);
      } else {
        // TODO-QSP: dynamic text: Lactate Rate: <a href="exec:lactation['lactaterate'] -= 10000 & gt 'cheatmenu_di...
        scene.text(`Lactate Rate: <a href="exec:lactation['lactaterate'] -= 10000 & gt 'cheatmenu_din', 'state'">-10</a> ${((s as any).lactation ?? {})?.['lactaterate']/1000}ml/h <a href="exec:lactation['lactaterate'] += 10000 & gt 'cheatmenu_din', 'state'">+10</a>`);
        // TODO-QSP: 'Cap Lactate Rate: ' + iif(lactation['milkprod_type'] = 0 and lactation['caplactaterate'] > 0, '<a h...
        // TODO-QSP: dynamic text: <font color="grey">Cap lactate rate makes lactate rate stop growing if <<$pcs_fi...
        scene.text(`<font color="grey">Cap lactate rate makes lactate rate stop growing if ${((s as any).pcs_firstname ?? 0)} needs milking more often.</font>`);
      }
    }
    // TODO-QSP: dynamic text: Milk in Breasts: <<lactation['breastmv']/1000>>ml
    scene.text(`Milk in Breasts: ${((s as any).lactation ?? {})?.['breastmv']/1000}ml`);
    // TODO-QSP: dynamic text: Max Milk Storage: <<lactation['breastmm']/1000>>ml
    scene.text(`Max Milk Storage: ${((s as any).lactation ?? {})?.['breastmm']/1000}ml`);
    // TODO-QSP: dynamic text: <font color="grey">Maximum milk storage changes with breast size, and if <<$pcs_...
    scene.text(`<font color="grey">Maximum milk storage changes with breast size, and if ${((s as any).pcs_firstname ?? 0)} went through pregnancy</font>`);
    if (((s as any).lactation ?? 0)?.['induced'] <= 0) {
      // TODO-QSP: dynamic text: Is <<$pcs_firstname>>'s lactation Induced?: <a href="exec:lactation['induced'] =...
      scene.text(`Is ${((s as any).pcs_firstname ?? 0)}'s lactation Induced?: <a href="exec:lactation['induced'] = 1 & gt 'cheatmenu_din', 'state'">no</a>`);
    } else {
      // TODO-QSP: dynamic text: Is <<$pcs_firstname>>'s lactation Induced?: <a href="exec:lactation['induced'] =...
      scene.text(`Is ${((s as any).pcs_firstname ?? 0)}'s lactation Induced?: <a href="exec:lactation['induced'] = 0 & gt 'cheatmenu_din', 'state'">yes</a>`);
    }
    // TODO-QSP: dynamic text: <font color="grey">Does <<$pcs_firstname>> know she induced lactation herself, o...
    scene.text(`<font color="grey">Does ${((s as any).pcs_firstname ?? 0)} know she induced lactation herself, or not? (This is only used for some events.)</font>`);
  }
  // TODO-QSP: $cheatmenu['table_end']
  scene.build();
}

function enterSetPregBody(s: GameState, scene: SceneBuilder): void {
  (s as any).pregChem = qspUntranslated(s, "ARGS[1]", { location: "cheatmenu_din" });
  (s as any).pregtime = ((s as any).ARGS ?? 0)[1] / 24;
  qspCall(s, 'body', 'reset_preg_mass');
  qspCall(s, 'body', 'softreset');
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'bodyMod'] }]);
  scene.build();
}

function enterSetBodyClass(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_mass['body'] = qspFunc(s, 'body', 'CalcOptBodyMass', qspUntranslated(s, "ARGS[1]", { location: "cheatmenu_din" }));
  qspCall(s, 'body', 'softreset');
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'bodyMod'] }]);
  scene.build();
}

function enterBodyMod(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Cheat Menu - Body Modification</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('Changing body shape does not resize clothes.');
  scene.text('May cause adverse interactions, use at your own risk!');
  scene.text('');
  // TODO-QSP: dynamic text: You are currently <<$bodyVars['desc']>>.
  scene.text(`You are currently ${((s as any).bodyVars ?? 0)?.['desc']}.`);
  scene.text('');
  scene.text('You may select from the following sizes:');
  scene.text('');
  if (((s as any).knowpreg ?? 0) === 1  ||  (((s as any).preg ?? 0) === 1  &&  (((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).pregChem ?? 0) > 3600))) {
    if ((!(((s as any).pregChem ?? 0) < 2688))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 100"><<func('body_structure'...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 100">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 100)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 2688  &&  ((s as any).pregChem ?? 0) < 3192))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 2688"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 2688">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 2688)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 3192  &&  ((s as any).pregChem ?? 0) < 3696))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 3192"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 3192">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 3192)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 3696  &&  ((s as any).pregChem ?? 0) < 4200))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 3696"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 3696">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 3696)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 4200  &&  ((s as any).pregChem ?? 0) < 4704))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 4200"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 4200">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 4200)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 4704  &&  ((s as any).pregChem ?? 0) < 5208))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 4704"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 4704">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 4704)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 5208  &&  ((s as any).pregChem ?? 0) < 5712))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 5208"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 5208">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 5208)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 5712  &&  ((s as any).pregChem ?? 0) < 6216))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 5712"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 5712">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 5712)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 6216))) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 6216"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 6216">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 6216)}</a>`);
      scene.text('');
    }
  } else {
    (s as any).bs_temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0));
    scene.text('starving (No, you may not select \'starving\', it\'s here to show where the scale starts)');
    scene.text('');
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 1) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_body_class', 170"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_body_class', 170">${qspFunc(s, 'body_structure', 'body_desc', 17, ((s as any).strenbuf ?? 0), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 2) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_body_class', 200"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_body_class', 200">${qspFunc(s, 'body_structure', 'body_desc', 20, ((s as any).strenbuf ?? 0), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 3) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_body_class', 230"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_body_class', 230">${qspFunc(s, 'body_structure', 'body_desc', 23, ((s as any).strenbuf ?? 0), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 4) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_body_class', 270"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_body_class', 270">${qspFunc(s, 'body_structure', 'body_desc', 27, ((s as any).strenbuf ?? 0), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 5) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_body_class', 320"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_body_class', 320">${qspFunc(s, 'body_structure', 'body_desc', 32, ((s as any).strenbuf ?? 0), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 6) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_body_class', 370"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_body_class', 370">${qspFunc(s, 'body_structure', 'body_desc', 37, ((s as any).strenbuf ?? 0), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 7) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_body_class', 420"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_body_class', 420">${qspFunc(s, 'body_structure', 'body_desc', 42, ((s as any).strenbuf ?? 0), 0)}</a>`);
      scene.text('');
    }
  }
  // TODO-QSP: $cheatmenu['table_end']
  scene.actions([
    { label: 'Return to last menu', goto: ['cheatmenu_din', 'state'] },
  ]);
  scene.build();
}

function enterAge(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :tooyoung
  (s as any).age = ((s as any).year ?? 0) - (((s as any).pcs_dob ?? 0) / 10000);
  if ((((s as any).day ?? 0) + 100 * ((s as any).month ?? 0)) <= ((s as any).pcs_dob ?? 0) % 10000) {
    (s as any).age = ((s as any).age ?? 0) - (1);
  }
  if (((s as any).age ?? 0) < 15) {
    (s as any).pcs_dob = ((s as any).pcs_dob ?? 0) - (10000);
    // TODO-QSP: jump 'tooyoung'
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterVisualage(s: GameState, scene: SceneBuilder): void {
  (s as any).vidage = 0;
  if (((s as any).vidage ?? 0) <= 14) {
    (s as any).vidage = 14;
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterAvatarHairSet(s: GameState, scene: SceneBuilder): void {
  (s as any).face_style['avatar_hair'] = 0;
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterRename(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_input ?? 0) !== '') {
  }
  if (((s as any).temp_input ?? 0) !== '') {
  }
  if (((s as any).temp_input ?? 0) !== '') {
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterResetName(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_functions', 'set_default', 'name');
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterSetLooks(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shortgs', 'setStat', $ARGS[1], ARGS[2]
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterSetLooksInput(s: GameState, scene: SceneBuilder): void {
  if (!isNaN($temp_input) && $temp_input !== '' !== 0) {
    qspCall(s, 'shortgs', 'setStat', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "val(temp_input)", { location: "cheatmenu_din" }));
  } else {
    if (((s as any).temp_input ?? 0) !== '') {
    }
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterPrintLooksLinks(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setLooks''], ''<<$ARGS[1]>>'', 100">Max</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setLooks''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl + 1">+1</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setLooks''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl + 10">+10</a>...
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setLooks''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl - 1">-1</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setLooks''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl - 10">-10</a>...
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setLooks''], ''<<$ARGS[1]>>'', 0">Min</a> '
  scene.build();
}

function enterLooks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hgt ?? 0) < 100) {
    (s as any).pcs_hgt = 100;
  } else {
    if (((s as any).pcs_hgt ?? 0) > 200) {
      (s as any).pcs_hgt = 200;
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Appearance');
  scene.text('<center><h1>Cheat Menu - Character Appearance</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('<center><table width="1000" cellspacing="0" cellpadding="10" valign="top"><tr><td width="33%" valign="top">');
  // TODO-QSP: dynamic text: <<$pcs_firstname>> <<$pcs_lastname>> (<<$pcs_nickname>>). <a href="exec:gs 'chea...
  scene.text(`${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)} (${((s as any).pcs_nickname ?? 0)}). <a href="exec:gs 'cheatmenu_din', 'rename'">Rename</a> <a href="exec:gt 'cheatmenu_din', 'reset_name'">Reset</a>`);
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'parameters\'">Show design parameters of body</a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'vneshpara\'">Show beauty parameters</a>');
  // TODO-QSP: dynamic text: You are <a href="exec: pcs_dob += 10000 & gs 'cheatmenu_din', 'age'">(-1)</a> <<...
  scene.text(`You are <a href="exec: pcs_dob += 10000 & gs 'cheatmenu_din', 'age'">(-1)</a> ${((s as any).age ?? 0)} <a href="exec: pcs_dob -= 10000 & gs 'cheatmenu_din', 'age'">(+1)</a> years old`);
  // TODO-QSP: dynamic text: You look <<vidage>> years old
  scene.text(`You look ${((s as any).vidage ?? 0)} years old`);
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'visualage\'">Change apparent age</a>');
  // TODO-QSP: dynamic text: You are <<pcs_hgt>> centimetres tall
  scene.text(`You are ${((s as any).pcs_hgt ?? 0)} centimetres tall`);
  // TODO-QSP: dynamic text: <a href="exec:pcs_hgt = input('Enter <<$pcs_nickname>>s height in centimetres<br...
  scene.text(`<a href="exec:pcs_hgt = input('Enter ${((s as any).pcs_nickname ?? 0)}s height in centimetres<br><br>(default 165, min 100, max 200, values below 150 and above 180 will cause problems in the calculation of BMI/weight the more you deviate from the default 170)') & gt 'cheatmenu_din', 'looks'">Change ${((s as any).pcs_nickname ?? 0)}'s height</a>`);
  // TODO-QSP: dynamic text: Musculature (<<stren_plus_lvl>>): ' & dynamic $cheatmenu['printLooksLinks'], 'st...
  scene.text(`Musculature (${((s as any).stren_plus_lvl ?? 0)}): ' & dynamic $cheatmenu['printLooksLinks'], 'stren_plus', 'Musculature`);
  scene.text('<font color="grey">Allows strength to go past 100');
  scene.text('Negatively</font> affects appearance');
  // TODO-QSP: dynamic text: Toned Butt (<<butt_tr_lvl>>): ' & dynamic $cheatmenu['printLooksLinks'], 'butt_t...
  scene.text(`Toned Butt (${((s as any).butt_tr_lvl ?? 0)}): ' & dynamic $cheatmenu['printLooksLinks'], 'butt_tr', 'Toned Butt`);
  // TODO-QSP: $pcs_teeth_txt
  if (((s as any).pcs_teeth ?? 0) > -1) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'teeth\', \'improve\'">Improve teeth</a>');
  }
  if (((s as any).pcs_teeth ?? 0) < 3) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'teeth\', \'worsen\'">Worsen teeth</a>');
  }
  if (((s as any).pcs_brace ?? 0) === 1) {
    scene.text('<a href="exec:pcs_brace = 0 & gt \'cheatmenu_din\', \'looks\'">Remove braces</a>');
  }
  if (((s as any).pcs_missing_teeth ?? 0) > 0) {
    scene.text('<a href="exec:pcs_missing_teeth = 0 & gt \'cheatmenu_din\', \'looks\'">Restore missing teeth</a>');
  }
  // TODO-QSP: dynamic text: You have <<$titsize>> breasts
  scene.text(`You have ${((s as any).titsize ?? 0)} breasts`);
  if (((s as any).tits ?? 0) < 11) {
    // TODO-QSP: dynamic text: <a href="exec: bodyVars['bust_silicone'] += 5 & gt 'cheatmenu_din', 'looks'">Enl...
    scene.text('<a href="exec: bodyVars[\'bust_silicone\'] += 5 & gt \'cheatmenu_din\', \'looks\'">Enlarge breasts(silicone)</a>');
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] >= 1) {
    scene.text('<a href="exec: bodyVars[\'bust_silicone\'] = min(0, bodyVars[\'bust_silicone\']-5) & gt \'cheatmenu_din\', \'looks\'">Shrink breasts(silicone)</a>');
  }
  if (((s as any).tits ?? 0) < 11  &&  ((s as any).pcs_mass ?? 0)?.['bust_gen'] < 50) {
    scene.text('<a href="exec: gs \'cheatmenu_din\', \'change_pcs_mass_bust\', 5">Enlarge breasts (natural)</a>');
  }
  if (((s as any).pcs_mass ?? 0)?.['bust'] >= 6  &&  ((s as any).pcs_mass ?? 0)?.['bust_gen'] >= 6) {
    scene.text('<a href="exec: titreduc = 1 & gs \'cheatmenu_din\', \'change_pcs_mass_bust\', -5">Shrink breasts (natural)</a>');
  }
  // TODO-QSP: dynamic text: You have a <<$pc_desc['butt']>> butt.
  scene.text(`You have a ${((s as any).pc_desc ?? 0)?.['butt']} butt.`);
  if (((s as any).pcs_buttsize ?? 0) < 50) {
    // TODO-QSP: dynamic text: <a href="exec: bodyVars['butt_silicone'] += 10 & gt 'cheatmenu_din', 'looks'">En...
    scene.text('<a href="exec: bodyVars[\'butt_silicone\'] += 10 & gt \'cheatmenu_din\', \'looks\'">Enlarge butt (silicone)</a>');
  }
  if (((s as any).bodyVars ?? 0)?.['butt_silicone'] >= 1) {
    scene.text('<a href="exec: bodyVars[\'butt_silicone\'] = max(0, bodyVars[\'butt_silicone\']-10) & gt \'cheatmenu_din\', \'looks\'">Shrink butt (silicone)</a>');
  }
  if (((s as any).pcs_mass ?? 0)?.['butt'] < 50  &&  ((s as any).pcs_mass ?? 0)?.['butt_gen'] < 50) {
    scene.text('<a href="exec: gs \'cheatmenu_din\', \'change_pcs_mass_butt\', 10">Enlarge butt (natural)</a>');
  }
  if (((s as any).pcs_mass ?? 0)?.['butt'] >= 6  &&  ((s as any).pcs_mass ?? 0)?.['butt_gen'] >= 6) {
    scene.text('<a href="exec: assreduc = 1 & gs \'cheatmenu_din\', \'change_pcs_mass_butt\', -10">Shrink butt (natural)</a>');
  }
  // TODO-QSP: dynamic text: <<$pc_descFull['lip']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['lip']}`);
  if (((s as any).pcs_lip ?? 0) < 4) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_lip += 1 & gt 'cheatmenu_din', 'looks'">Enlarge lips</a>
    scene.text('<a href="exec:pcs_lip += 1 & gt \'cheatmenu_din\', \'looks\'">Enlarge lips</a>');
  }
  if (((s as any).pcs_lip ?? 0) > 0) {
    scene.text('<a href="exec:pcs_lip -= 1 & gt \'cheatmenu_din\', \'looks\'">Shrink lips</a>');
  }
  // TODO-QSP: dynamic text: <<$nipplesize >> (<<pcs_nips>>)
  scene.text(`${((s as any).nipplesize ?? 0)} (${((s as any).pcs_nips ?? 0)})`);
  if (((s as any).pcs_nips ?? 0) <= 95) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_nips += 5 & gt 'cheatmenu_din', 'looks'">Enlarge nipples</a>
    scene.text('<a href="exec:pcs_nips += 5 & gt \'cheatmenu_din\', \'looks\'">Enlarge nipples</a>');
  }
  if (((s as any).pcs_nips ?? 0) >= 5) {
    scene.text('<a href="exec:pcs_nips -= 5 & gt \'cheatmenu_din\', \'looks\'">Shrink nipples</a>');
  }
  // TODO-QSP: dynamic text: <<$clitsize>> (<<clit_size>>)
  scene.text(`${((s as any).clitsize ?? 0)} (${((s as any).clit_size ?? 0)})`);
  if (((s as any).clit_size ?? 0) <= 95) {
    // TODO-QSP: dynamic text: <a href="exec:clit_size += 5 & gt 'cheatmenu_din', 'looks'">Enlarge clit</a>
    scene.text('<a href="exec:clit_size += 5 & gt \'cheatmenu_din\', \'looks\'">Enlarge clit</a>');
  }
  if (((s as any).clit_size ?? 0) >= 5) {
    scene.text('<a href="exec:clit_size -= 5 & gt \'cheatmenu_din\', \'looks\'">Shrink clit</a>');
  }
  scene.text('</td><td width="33%" valign="top">');
  // TODO-QSP: dynamic text: <<$pc_descFull['skin']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['skin']}`);
  if (((s as any).pcs_skin ?? 0) < 900) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_skin += 200 & gs 'AppearanceSystem', 'UpdateBaseAppearance' & ...
    scene.text('<a href="exec:pcs_skin += 200 & gs \'AppearanceSystem\', \'UpdateBaseAppearance\' & gt \'cheatmenu_din\', \'looks\'">Improve skin</a>');
  }
  if (((s as any).pcs_skin ?? 0) > 0) {
    scene.text('<a href="exec:pcs_skin -= 200 & gs \'AppearanceSystem\', \'UpdateBaseAppearance\' & gt \'cheatmenu_din\', \'looks\'">Worsen skin</a>');
  }
  if (((s as any).pcs_tan ?? 0) >= 0) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_tan += 10 & gt 'cheatmenu_din', 'looks'">Become tanned</a>
    scene.text('<a href="exec:pcs_tan += 10 & gt \'cheatmenu_din\', \'looks\'">Become tanned</a>');
  }
  if (((s as any).pcs_tan ?? 0) > 0) {
    scene.text('<a href="exec:pcs_tan = 0 & gt \'cheatmenu_din\', \'looks\'">Remove tan</a>');
  }
  // TODO-QSP: dynamic text: <<$pc_descFull['throat']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['throat']}`);
  if (((s as any).pcs_throat ?? 0) <= 31) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_throat += 5 & gt 'cheatmenu_din', 'looks'">Increase throat cap...
    scene.text('<a href="exec:pcs_throat += 5 & gt \'cheatmenu_din\', \'looks\'">Increase throat capacity</a>');
  }
  if (((s as any).pcs_throat ?? 0) >= 5) {
    scene.text('<a href="exec:pcs_throat -= 5 & gt \'cheatmenu_din\', \'looks\'">Decrease throat capacity</a>');
  }
  if (((s as any).dounspell ?? 0) === 1) {
    scene.text('<a href="exec:dounsplkil = 2 & gs \'body\', \'hardreset\'">Hard Reset body shape</a>');
  }
  // TODO-QSP: dynamic text: <<$pcs_vag_txt>>
  scene.text(`${((s as any).pcs_vag_txt ?? 0)}`);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    scene.text('<a href="exec:pcs_vag = 20 & killvar\'virgin_stats\' & gt \'cheatmenu_din\', \'looks\'">Reinstate virginity</a>');
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] < 1) {
    // TODO-QSP: dynamic text: <a href="exec:stat['vaginal'] = 0 & stat['vaginal_fist'] = 0 & stat['vaginal_dil...
    scene.text(`<a href="exec:stat['vaginal'] = 0 & stat['vaginal_fist'] = 0 & stat['vaginal_dildo'] = 0 & stat['vaginal_strap'] = 0 & gt 'cheatmenu_din', 'looks'">Make ${((s as any).pcs_nickname ?? 0)} believe she is a virgin again (resets the related sex stats)</a>`);
  }
  if (((s as any).pcs_vag ?? 0) <= 25) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'vagenlarge\'">Enlarge comfortable vaginal capacity</a>');
  }
  if (((s as any).pcs_vag ?? 0) >= 5) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'vagreduce\'">Reduce comfortable vaginal capacity</a>');
  }
  // TODO-QSP: dynamic text: Your comfortable vaginal capacity will reduce by <<vshrink>> every <<vshrinkdays...
  scene.text(`Your comfortable vaginal capacity will reduce by ${((s as any).vshrink ?? 0)} every ${((s as any).vshrinkdays ?? 0)} days.`);
  if (((s as any).vshrink ?? 0) < 10) {
    // TODO-QSP: dynamic text: <a href="exec:vshrink += 1 & gt 'cheatmenu_din', 'looks'">Increase amount of red...
    scene.text('<a href="exec:vshrink += 1 & gt \'cheatmenu_din\', \'looks\'">Increase amount of reduction</a>');
  }
  if (((s as any).vshrink ?? 0) > 0) {
    scene.text('<a href="exec:vshrink -= 1 & gt \'cheatmenu_din\', \'looks\'">Reduce amount of reduction</a>');
  }
  if (((s as any).vshrinkdays ?? 0) < 10) {
    // TODO-QSP: dynamic text: <a href="exec:vshrinkdays += 1 & gt 'cheatmenu_din', 'looks'">Increase number of...
    scene.text('<a href="exec:vshrinkdays += 1 & gt \'cheatmenu_din\', \'looks\'">Increase number of days it takes</a>');
  }
  if (((s as any).vshrinkdays ?? 0) > 1) {
    scene.text('<a href="exec:vshrinkdays -= 1 & gt \'cheatmenu_din\', \'looks\'">Reduce number of days it takes</a>');
  }
  // TODO-QSP: dynamic text: When gaped your vagina will reduce each stage (up to 4 for maximum gape) every <...
  scene.text(`When gaped your vagina will reduce each stage (up to 4 for maximum gape) every ${qspUntranslated(s, "vgape[5]", { location: "cheatmenu_din" })} minutes.`);
  if (((s as any).vgape ?? 0)[4] < 60) {
    // TODO-QSP: dynamic text: <a href="exec:vgape[4] += 5 & gt 'cheatmenu_din', 'looks'">Increase time by 5 mi...
    scene.text('<a href="exec:vgape[4] += 5 & gt \'cheatmenu_din\', \'looks\'">Increase time by 5 minutes (before traits)</a>');
  }
  if (((s as any).vgape ?? 0)[4] > 5) {
    scene.text('<a href="exec:vgape[4] -= 5 & gt \'cheatmenu_din\', \'looks\'">Reduce time by 5 minutes</a>');
  }
  // TODO-QSP: dynamic text: <<$pcs_ass_txt>>
  scene.text(`${((s as any).pcs_ass_txt ?? 0)}`);
  if (((s as any).pcs_ass ?? 0) <= 25) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'assenlarge\'">Enlarge comfortable anal capacity</a>');
  }
  if (((s as any).pcs_ass ?? 0) >= 5) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'assreduce\'">Reduce comfortable anal capacity</a>');
  }
  // TODO-QSP: dynamic text: Your comfortable anal capacity will reduce by <<ashrink>> every <<ashrinkdays>> ...
  scene.text(`Your comfortable anal capacity will reduce by ${((s as any).ashrink ?? 0)} every ${((s as any).ashrinkdays ?? 0)} days.`);
  if (((s as any).ashrink ?? 0) < 10) {
    // TODO-QSP: dynamic text: <a href="exec:ashrink += 1 & gt 'cheatmenu_din', 'looks'">Increase amount of red...
    scene.text('<a href="exec:ashrink += 1 & gt \'cheatmenu_din\', \'looks\'">Increase amount of reduction</a>');
  }
  if (((s as any).ashrink ?? 0) > 0) {
    scene.text('<a href="exec:ashrink -= 1 & gt \'cheatmenu_din\', \'looks\'">Reduce amount of reduction</a>');
  }
  if (((s as any).ashrinkdays ?? 0) < 10) {
    // TODO-QSP: dynamic text: <a href="exec:ashrinkdays += 1 & gt 'cheatmenu_din', 'looks'">Increase number of...
    scene.text('<a href="exec:ashrinkdays += 1 & gt \'cheatmenu_din\', \'looks\'">Increase number of days it takes</a>');
  }
  if (((s as any).ashrinkdays ?? 0) > 1) {
    scene.text('<a href="exec:ashrinkdays -= 1 & gt \'cheatmenu_din\', \'looks\'">Reduce number of days it takes</a>');
  }
  // TODO-QSP: dynamic text: When gaped your anus will reduce each stage (up to 4 for maximum gape) every <<a...
  scene.text(`When gaped your anus will reduce each stage (up to 4 for maximum gape) every ${qspUntranslated(s, "agape[5]", { location: "cheatmenu_din" })} minutes.`);
  if (((s as any).agape ?? 0)[4] < 60) {
    // TODO-QSP: dynamic text: <a href="exec:agape[4] += 5 & gt 'cheatmenu_din', 'looks'">Increase time by 5 mi...
    scene.text('<a href="exec:agape[4] += 5 & gt \'cheatmenu_din\', \'looks\'">Increase time by 5 minutes (before traits)</a>');
  }
  if (((s as any).agape ?? 0)[4] > 5) {
    scene.text('<a href="exec:agape[4] -= 5 & gt \'cheatmenu_din\', \'looks\'">Reduce time by 5 minutes</a>');
  }
  scene.text('</td><td width="33%" valign="top">');
  if ((!((s as any).dounspell ?? 0))) {
    if (((s as any).fat ?? 0) !== 0) {
      scene.text('<a href="exec:fat = 0 & gt \'cheatmenu_din\', \'looks\'">Zero fat</a>');
    }
    // TODO-QSP: *p 'Body Fat = (<<pcs_mass[''body'']>>): '
    if (((s as any).pcs_mass ?? 0)?.['body'] > 10) {
      // TODO-QSP: *p '<a href="exec: gs ''cheatmenu_din'', ''change_pcs_mass_body'', -10">-10</a> '
    }
    if (((s as any).pcs_mass ?? 0)?.['body'] > 5) {
      // TODO-QSP: *p '<a href="exec: gs ''cheatmenu_din'', ''change_pcs_mass_body'', -5">-5</a> '
    }
    if (((s as any).pcs_mass ?? 0)?.['body'] > 1) {
      // TODO-QSP: *p '<a href="exec: gs ''cheatmenu_din'', ''change_pcs_mass_body'', -1">-1</a> '
    }
    // TODO-QSP: dynamic text: Note: You need some Body Fat to survive, any value under 11 is classified as "st...
    scene.text(`Note: You need some Body Fat to survive, any value under 11 is classified as "starving" and a value of 0 can lead to a Game Over. ${qspFunc(s, 'body', 'CalcOptBodyMass')} gives a bmi of 22.5.`);
  }
  scene.text('<a href="exec:gt \'cheatmenu_din\', \'tatoo\'">Tattoo removal</a>');
  // TODO-QSP: dynamic text: <<$hair>>
  scene.text(`${((s as any).hair ?? 0)}`);
  if ((!((s as any).pcs_haircol ?? 0))) {
    // TODO-QSP: dynamic text: Your hair is now (prev) <<$pcs_haircolor>> <a href="exec:pcs_haircol +=1 & gt 'c...
    scene.text(`Your hair is now (prev) ${((s as any).pcs_haircolor ?? 0)} <a href="exec:pcs_haircol +=1 & gt 'cheatmenu_din', 'looks' & nathcol = pcs_haircol">(next)</a>`);
  } else {
    if (((s as any).pcs_haircol ?? 0) > 0  &&  ((s as any).pcs_haircol ?? 0) < 3) {
      // TODO-QSP: dynamic text: Your hair is now <a href="exec:pcs_haircol -=1 & gt 'cheatmenu_din', 'looks'" & ...
      scene.text(`Your hair is now <a href="exec:pcs_haircol -=1 & gt 'cheatmenu_din', 'looks'" & nathcol = pcs_haircol>(prev)</a> ${((s as any).pcs_haircolor ?? 0)} <a href="exec:pcs_haircol +=1 & gt 'cheatmenu_din', 'looks'" & pcs_haircol = nathcol>(next)</a>`);
    } else {
      if (((s as any).pcs_haircol ?? 0) === 3) {
        // TODO-QSP: dynamic text: Your hair is now <a href="exec:pcs_haircol -=1 & gt 'cheatmenu_din', 'looks'" & ...
        scene.text(`Your hair is now <a href="exec:pcs_haircol -=1 & gt 'cheatmenu_din', 'looks'" & nathcol = pcs_haircol>(prev)</a> ${((s as any).pcs_haircolor ?? 0)} (next)`);
      } else {
        scene.text('To change your natural hair color, you have to <a href="exec:pcs_haircol = nathcol & gt \'cheatmenu_din\', \'looks\'">restore your natural hair color</a> first.');
      }
    }
  }
  if (((s as any).pcs_hairlng ?? 0) > 975) {
    // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_...
    scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_din', 'looks'">-100</a> <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_din', 'looks'">-25</a> <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a>`);
  } else {
    if (((s as any).pcs_hairlng ?? 0) > 900) {
      // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_...
      scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_din', 'looks'">-100</a> <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_din', 'looks'">-25</a> <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a>`);
    } else {
      if (((s as any).pcs_hairlng ?? 0) >= 100) {
        // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_...
        scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_din', 'looks'">-100</a> <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_din', 'looks'">-25</a> <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a> <a href="exec:pcs_hairlng += 100 & gt 'cheatmenu_din', 'looks'">+100</a>`);
      } else {
        if (((s as any).pcs_hairlng ?? 0) >= 25) {
          // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_d...
          scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_din', 'looks'">-25</a> <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a> <a href="exec:pcs_hairlng += 100 & gt 'cheatmenu_din', 'looks'">+100</a>`);
        } else {
          if (((s as any).pcs_hairlng ?? 0) >= 5) {
            // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_di...
            scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a> <a href="exec:pcs_hairlng += 100 & gt 'cheatmenu_din', 'looks'">+100</a>`);
          } else {
            // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_di...
            scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a> <a href="exec:pcs_hairlng += 100 & gt 'cheatmenu_din', 'looks'">+100</a>`);
          }
        }
      }
    }
  }
  if ((!((s as any).hairgrowcht ?? 0))) {
    scene.text('<a href="exec:hairgrowcht = 1 & gt \'cheatmenu_din\', \'looks\'">Stop hair growth</a>');
  }
  if (((s as any).hairgrowcht ?? 0) === 1) {
    scene.text('<a href="exec:hairgrowcht = 0 & gt \'cheatmenu_din\', \'looks\'">Allow hair growth</a>');
  }
  // TODO-QSP: dynamic text: <<$pc_descFull['eyes']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['eyes']}`);
  if (((s as any).pcs_naturallashes ?? 0) < 2) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_naturallashes += 1 & gt 'cheatmenu_din', 'looks'">Enlarge lash...
    scene.text('<a href="exec:pcs_naturallashes += 1 & gt \'cheatmenu_din\', \'looks\'">Enlarge lashes</a>');
  }
  if (((s as any).pcs_naturallashes ?? 0) > 0) {
    scene.text('<a href="exec:pcs_naturallashes -= 1 & gt \'cheatmenu_din\', \'looks\'">Shrink lashes</a>');
  }
  if (((s as any).pcs_eyesize ?? 0) < 3) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_eyesize += 1 & gt 'cheatmenu_din', 'looks'">Increase the size ...
    scene.text('<a href="exec:pcs_eyesize += 1 & gt \'cheatmenu_din\', \'looks\'">Increase the size of the eye</a>');
  }
  if (((s as any).pcs_eyesize ?? 0) > 0) {
    scene.text('<a href="exec:pcs_eyesize -= 1 & gt \'cheatmenu_din\', \'looks\'">Reduce the size of the eye</a>');
  }
  if (((s as any).pcs_eyecol ?? 0) <= 0) {
    // TODO-QSP: dynamic text: Your eyes are now (prev) <<$pcs_eyecolor>> <a href="exec:pcs_eyecol +=1 & gt 'ch...
    scene.text(`Your eyes are now (prev) ${((s as any).pcs_eyecolor ?? 0)} <a href="exec:pcs_eyecol +=1 & gt 'cheatmenu_din', 'looks'">(next)</a>`);
  } else {
    if (((s as any).pcs_eyecol ?? 0) > 0  &&  ((s as any).pcs_eyecol ?? 0) < 3) {
      // TODO-QSP: dynamic text: Your eyes are now <a href="exec:pcs_eyecol -=1 & gt 'cheatmenu_din', 'looks'">(p...
      scene.text(`Your eyes are now <a href="exec:pcs_eyecol -=1 & gt 'cheatmenu_din', 'looks'">(prev)</a> ${((s as any).pcs_eyecolor ?? 0)} <a href="exec:pcs_eyecol +=1 & gt 'cheatmenu_din', 'looks'">(next)</a>`);
    } else {
      if (((s as any).pcs_eyecol ?? 0) >= 3) {
        // TODO-QSP: dynamic text: Your eyes are now <a href="exec:pcs_eyecol -=1 & gt 'cheatmenu_din', 'looks'">(p...
        scene.text(`Your eyes are now <a href="exec:pcs_eyecol -=1 & gt 'cheatmenu_din', 'looks'">(prev)</a> ${((s as any).pcs_eyecolor ?? 0)} (next)`);
      }
    }
  }
  scene.text('</td></tr></table>');
  scene.build();
}

function enterChangeAvatarPath(s: GameState, scene: SceneBuilder): void {
  (s as any).face_style['avatar_path'] = 0;
  if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
    (s as any).face_style['avatar_path'] = 'images/avatar.jpg';
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterChangePcsMassBody(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'body', 'Set_mass_distribution_using_body', pcs_mass['body'] + ARGS[1]
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterChangePcsMassBust(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_mass['bust'] = ((s as any).pcs_mass['bust'] ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "cheatmenu_din" }));
  (s as any).pcs_mass['bust_gen'] = ((s as any).pcs_mass['bust_gen'] ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "cheatmenu_din" }));
  if (((s as any).pcs_mass ?? 0)?.['bust'] < 2) {
    (s as any).pcs_mass['bust'] = 2;
  }
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] < 2) {
    (s as any).pcs_mass['bust_gen'] = 2;
  }
  (s as any).pcs_mass['bust_message'] = ((s as any).pcs_mass ?? 0)?.['bust'];
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterChangePcsMassButt(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_mass['butt'] = ((s as any).pcs_mass['butt'] ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "cheatmenu_din" }));
  (s as any).pcs_mass['butt_gen'] = ((s as any).pcs_mass['butt_gen'] ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "cheatmenu_din" }));
  if (((s as any).pcs_mass ?? 0)?.['butt'] < 2) {
    (s as any).pcs_mass['butt'] = 2;
  }
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] < 2) {
    (s as any).pcs_mass['butt_gen'] = 2;
  }
  (s as any).pcs_mass['butt_message'] = ((s as any).pcs_mass ?? 0)?.['butt'];
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterTeeth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'improve') {
    (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'worsen') {
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) + (1);
    }
  }
  qspCall(s, 'body_desc', 'teeth');
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterVagenlarge(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) === 20) {
    (s as any).pcs_vag = 25;
  } else {
    if (((s as any).pcs_vag ?? 0) <= 25) {
      (s as any).pcs_vag = 30;
    } else {
      if (((s as any).pcs_vag ?? 0) <= 30) {
        (s as any).pcs_vag = 35;
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterVagreduce(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) > 35) {
    (s as any).pcs_vag = 35;
  } else {
    if (((s as any).pcs_vag ?? 0) > 30) {
      (s as any).pcs_vag = 30;
    } else {
      if (((s as any).pcs_vag ?? 0) > 25) {
        (s as any).pcs_vag = 25;
      } else {
        if (((s as any).pcs_vag ?? 0) > 21) {
          (s as any).pcs_vag = 21;
        }
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterAssenlarge(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_ass ?? 0))) {
    (s as any).pcs_ass = 5;
  } else {
    if (((s as any).pcs_ass ?? 0) <= 5) {
      (s as any).pcs_ass = 10;
    } else {
      if (((s as any).pcs_ass ?? 0) <= 10) {
        (s as any).pcs_ass = 15;
      } else {
        if (((s as any).pcs_ass ?? 0) <= 15) {
          (s as any).pcs_ass = 25;
        } else {
          if (((s as any).pcs_ass ?? 0) <= 25) {
            (s as any).pcs_ass = 35;
          }
        }
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterAssreduce(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) > 25) {
    (s as any).pcs_ass = 25;
  } else {
    if (((s as any).pcs_ass ?? 0) > 15) {
      (s as any).pcs_ass = 15;
    } else {
      if (((s as any).pcs_ass ?? 0) > 10) {
        (s as any).pcs_ass = 10;
      } else {
        if (((s as any).pcs_ass ?? 0) > 5) {
          (s as any).pcs_ass = 1;
        }
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterVneshpara(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Cheat Menu - ?</h1></center>');
  scene.text('Appearance Parameters');
  scene.text('Base Appearance');
  // TODO-QSP: dynamic text: pcs_skin = <<pcs_skin>> and skin_bonus = <<skinBonus>> (between 0 and 100)
  scene.text(`pcs_skin = ${((s as any).pcs_skin ?? 0)} and skin_bonus = ${((s as any).skinBonus ?? 0)} (between 0 and 100)`);
  // TODO-QSP: dynamic text: bodyShapeBonus = <<bodyShapeBonus>> (between -158 and 70)
  scene.text(`bodyShapeBonus = ${((s as any).bodyShapeBonus ?? 0)} (between -158 and 70)`);
  // TODO-QSP: dynamic text: visableAgePenalty = <<visibleAgePenalty>> (-2.5 for every year below 20)
  scene.text(`visableAgePenalty = ${((s as any).visibleAgePenalty ?? 0)} (-2.5 for every year below 20)`);
  // TODO-QSP: dynamic text: pcs_teeth = <<pcs_teeth>> and teethPenalty = <<teethPenalty>> 10 * (pcs_teeth + ...
  scene.text(`pcs_teeth = ${((s as any).pcs_teeth ?? 0)} and teethPenalty = ${((s as any).teethPenalty ?? 0)} 10 * (pcs_teeth + pcs_missing_teeth)`);
  // TODO-QSP: dynamic text: attributeBonus = <<attributeBonus>> (pcs_agil + pcs_vital) / 5
  scene.text(`attributeBonus = ${((s as any).attributeBonus ?? 0)} (pcs_agil + pcs_vital) / 5`);
  // TODO-QSP: dynamic text: these are adjusted by BMI (<<pcs_bmi[0]>>.<<pcs_bmi[1]>>) if it is outside 19.0 ...
  scene.text(`these are adjusted by BMI (${qspUntranslated(s, "pcs_bmi[0]", { location: "cheatmenu_din" })}.${qspUntranslated(s, "pcs_bmi[1]", { location: "cheatmenu_din" })}) if it is outside 19.0 - 24.9`);
  // TODO-QSP: dynamic text: pcs_apprncbase = <<pcs_apprncbase>>
  scene.text(`pcs_apprncbase = ${((s as any).pcs_apprncbase ?? 0)}`);
  scene.text('Bonus');
  // TODO-QSP: dynamic text: groomingBonus = <<func('AppearanceSystem','CalcGroomingBonus')>> (pcs_breath and...
  scene.text(`groomingBonus = ${qspFunc(s, 'AppearanceSystem', 'CalcGroomingBonus')} (pcs_breath and makeup)`);
  // TODO-QSP: dynamic text: groomingPenalty = <<func('AppearanceSystem','CalcGroomingPenalty')>> 
  scene.text(`groomingPenalty = ${qspFunc(s, 'AppearanceSystem', 'CalcGroomingPenalty')} `);
  scene.text('(lipbalm, hair brushed, hair length, deo, sweat, glasses, hair color fade, leg hair..)');
  // TODO-QSP: dynamic text: accessoriesBonus = <<func('AppearanceSystem','CalcAccessoriesBonus')>> 
  scene.text(`accessoriesBonus = ${qspFunc(s, 'AppearanceSystem', 'CalcAccessoriesBonus')} `);
  // TODO-QSP: dynamic text: CalcClothingBonus = <<func('AppearanceSystem','CalcClothingBonus')>> 
  scene.text(`CalcClothingBonus = ${qspFunc(s, 'AppearanceSystem', 'CalcClothingBonus')} `);
  // TODO-QSP: dynamic text: ((PXCloThinness + PXCloTopCut + PXCloBottomShortness)/2)/ 76 * PCloQuality
  scene.text('((PXCloThinness + PXCloTopCut + PXCloBottomShortness)/2)/ 76 * PCloQuality');
  // TODO-QSP: dynamic text: coatQualityBonus = <<coatQualityBonus>>
  scene.text(`coatQualityBonus = ${((s as any).coatQualityBonus ?? 0)}`);
  // TODO-QSP: dynamic text: shoesQualityBonus = <<PShoQuality>>
  scene.text(`shoesQualityBonus = ${((s as any).PShoQuality ?? 0)}`);
  // TODO-QSP: dynamic text: PXCloThinness = <<PXCloThinness>>
  scene.text(`PXCloThinness = ${((s as any).PXCloThinness ?? 0)}`);
  // TODO-QSP: dynamic text: PXCloTopCut = <<PXCloTopCut>>
  scene.text(`PXCloTopCut = ${((s as any).PXCloTopCut ?? 0)}`);
  // TODO-QSP: dynamic text: PXCloBottomShortness = <<PXCloBottomShortness>>
  scene.text(`PXCloBottomShortness = ${((s as any).PXCloBottomShortness ?? 0)}`);
  // TODO-QSP: dynamic text: PCloQuality = <<PCloQuality>>
  scene.text(`PCloQuality = ${((s as any).PCloQuality ?? 0)}`);
  // TODO-QSP: dynamic text: lipBalmPenalty = <<lipBalmPenalty>>
  scene.text(`lipBalmPenalty = ${((s as any).lipBalmPenalty ?? 0)}`);
  // TODO-QSP: dynamic text: hairPenalty = <<hairPenalty>>
  scene.text(`hairPenalty = ${((s as any).hairPenalty ?? 0)}`);
  // TODO-QSP: dynamic text: deodorantPenalty = <<deodorantPenalty>>
  scene.text(`deodorantPenalty = ${((s as any).deodorantPenalty ?? 0)}`);
  // TODO-QSP: dynamic text: sweatPenalty = <<sweatPenalty>>
  scene.text(`sweatPenalty = ${((s as any).sweatPenalty ?? 0)}`);
  // TODO-QSP: dynamic text: glassesPenalty = <<glassesPenalty>>
  scene.text(`glassesPenalty = ${((s as any).glassesPenalty ?? 0)}`);
  // TODO-QSP: dynamic text: hairDyePenalty = <<hairDyePenalty>>
  scene.text(`hairDyePenalty = ${((s as any).hairDyePenalty ?? 0)}`);
  // TODO-QSP: dynamic text: legPenalty = <<legPenalty>>
  scene.text(`legPenalty = ${((s as any).legPenalty ?? 0)}`);
  // TODO-QSP: dynamic text: pcs_eyesize = <<pcs_eyesize>>
  scene.text(`pcs_eyesize = ${((s as any).pcs_eyesize ?? 0)}`);
  // TODO-QSP: dynamic text: pcs_lip = <<pcs_lip>>
  scene.text(`pcs_lip = ${((s as any).pcs_lip ?? 0)}`);
  scene.actions([
    { label: 'Return to appearance menu', goto: ['cheatmenu_din', 'looks'] },
  ]);
  scene.build();
}

function enterParameters(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Cheat Menu - Appearance Stats</h1></center>');
  scene.text('Body Shape Parameters');
  // TODO-QSP: dynamic text: <<pcs_bust>> - <<pcs_waist>> - <<pcs_hips>>, <<$titsize>> breasts, the differenc...
  scene.text(`${((s as any).pcs_bust ?? 0)} - ${((s as any).pcs_waist ?? 0)} - ${((s as any).pcs_hips ?? 0)}, ${((s as any).titsize ?? 0)} breasts, the difference between the hips and waist ${((s as any).pcs_hips ?? 0)-((s as any).pcs_waist ?? 0)} cm`);
  // TODO-QSP: dynamic text: Muscularity: strenbuf = <<strenbuf>>, pcs_mass['body'] =  <<pcs_mass['body']>>, ...
  scene.text(`Muscularity: strenbuf = ${((s as any).strenbuf ?? 0)}, pcs_mass['body'] =  ${((s as any).pcs_mass ?? 0)?.['body']}, fat = ${((s as any).fat ?? 0)}`);
  scene.text('Variable List:');
  // TODO-QSP: dynamic text: agilbuf = <<agilbuf>>
  scene.text(`agilbuf = ${((s as any).agilbuf ?? 0)}`);
  // TODO-QSP: dynamic text: strenbuf = <<strenbuf>>
  scene.text(`strenbuf = ${((s as any).strenbuf ?? 0)}`);
  // TODO-QSP: dynamic text: vitalbuf = <<vitalbuf>>
  scene.text(`vitalbuf = ${((s as any).vitalbuf ?? 0)}`);
  // TODO-QSP: dynamic text: BMI (pcs_bmi) = <<pcs_bmi[0]>>.<<pcs_bmi[1]>>
  scene.text(`BMI (pcs_bmi) = ${qspUntranslated(s, "pcs_bmi[0]", { location: "cheatmenu_din" })}.${qspUntranslated(s, "pcs_bmi[1]", { location: "cheatmenu_din" })}`);
  // TODO-QSP: dynamic text: weight (pcs_weight) = <<pcs_weight[0]>>.<<pcs_weight[1]>> kg
  scene.text(`weight (pcs_weight) = ${qspUntranslated(s, "pcs_weight[0]", { location: "cheatmenu_din" })}.${qspUntranslated(s, "pcs_weight[1]", { location: "cheatmenu_din" })} kg`);
  // TODO-QSP: dynamic text: bust (pcs_bust) = <<pcs_bust>>
  scene.text(`bust (pcs_bust) = ${((s as any).pcs_bust ?? 0)}`);
  // TODO-QSP: dynamic text: band (pcs_band) = <<pcs_band>>
  scene.text(`band (pcs_band) = ${((s as any).pcs_band ?? 0)}`);
  // TODO-QSP: dynamic text: waist (pcs_waist) = <<pcs_waist>>
  scene.text(`waist (pcs_waist) = ${((s as any).pcs_waist ?? 0)}`);
  // TODO-QSP: dynamic text: hips (pcs_hips) = <<pcs_hips>>
  scene.text(`hips (pcs_hips) = ${((s as any).pcs_hips ?? 0)}`);
  // TODO-QSP: dynamic text: bust - band (pcs_cupsize) = <<pcs_cupsize>>
  scene.text(`bust - band (pcs_cupsize) = ${((s as any).pcs_cupsize ?? 0)}`);
  // TODO-QSP: dynamic text: pcs_mass['bust'] = <<pcs_mass['bust']>>
  scene.text(`pcs_mass['bust'] = ${((s as any).pcs_mass ?? 0)?.['bust']}`);
  // TODO-QSP: dynamic text: pcs_mass['bust_gen'] = <<pcs_mass['bust_gen']>>
  scene.text(`pcs_mass['bust_gen'] = ${((s as any).pcs_mass ?? 0)?.['bust_gen']}`);
  // TODO-QSP: dynamic text: bodyVars['bust_magic'] = <<bodyVars['bust_magic']>>
  scene.text(`bodyVars['bust_magic'] = ${((s as any).bodyVars ?? 0)?.['bust_magic']}`);
  // TODO-QSP: dynamic text: bodyVars['bust_silicone'] = <<bodyVars['bust_silicone']>>
  scene.text(`bodyVars['bust_silicone'] = ${((s as any).bodyVars ?? 0)?.['bust_silicone']}`);
  // TODO-QSP: dynamic text: bodyVars['bust_other'] = <<bodyVars['bust_other']>>
  scene.text(`bodyVars['bust_other'] = ${((s as any).bodyVars ?? 0)?.['bust_other']}`);
  // TODO-QSP: dynamic text: pcs_mass['butt'] = <<pcs_mass['butt']>>
  scene.text(`pcs_mass['butt'] = ${((s as any).pcs_mass ?? 0)?.['butt']}`);
  // TODO-QSP: dynamic text: pcs_mass['butt_gen'] = <<pcs_mass['butt_gen']>>
  scene.text(`pcs_mass['butt_gen'] = ${((s as any).pcs_mass ?? 0)?.['butt_gen']}`);
  // TODO-QSP: dynamic text: bodyVars['butt_silicone'] = <<bodyVars['butt_silicone']>>
  scene.text(`bodyVars['butt_silicone'] = ${((s as any).bodyVars ?? 0)?.['butt_silicone']}`);
  // TODO-QSP: dynamic text: bodyVars['butt_other'] = <<bodyVars['butt_other']>>
  scene.text(`bodyVars['butt_other'] = ${((s as any).bodyVars ?? 0)?.['butt_other']}`);
  // TODO-QSP: dynamic text: bodyVars['vhips'] = <<bodyVars['vhips']>>
  scene.text(`bodyVars['vhips'] = ${((s as any).bodyVars ?? 0)?.['vhips']}`);
  // TODO-QSP: dynamic text: bodyVars['wratio'] = <<bodyVars['wratio']>>
  scene.text(`bodyVars['wratio'] = ${((s as any).bodyVars ?? 0)?.['wratio']}`);
  // TODO-QSP: dynamic text: bodyVars['bratio'] = <<bodyVars['bratio']>>
  scene.text(`bodyVars['bratio'] = ${((s as any).bodyVars ?? 0)?.['bratio']}`);
  // TODO-QSP: dynamic text: bodyVars['hratio'] = <<bodyVars['hratio']>>
  scene.text(`bodyVars['hratio'] = ${((s as any).bodyVars ?? 0)?.['hratio']}`);
  // TODO-QSP: dynamic text: bodyVars['vofat'] = <<bodyVars['vofat']>>
  scene.text(`bodyVars['vofat'] = ${((s as any).bodyVars ?? 0)?.['vofat']}`);
  // TODO-QSP: dynamic text: magf2bdo = <<magf2bdo>>
  scene.text(`magf2bdo = ${((s as any).magf2bdo ?? 0)}`);
  // TODO-QSP: dynamic text: mgf2bnocnt = <<mgf2bnocnt>>
  scene.text(`mgf2bnocnt = ${((s as any).mgf2bnocnt ?? 0)}`);
  // TODO-QSP: dynamic text: magtarcup = <<magtarcup>>
  scene.text(`magtarcup = ${((s as any).magtarcup ?? 0)}`);
  // TODO-QSP: dynamic text: normbuffpick = <<normbuffpick>>
  scene.text(`normbuffpick = ${((s as any).normbuffpick ?? 0)}`);
  // TODO-QSP: dynamic text: nrmbfpckct = <<nrmbfpckct>>
  scene.text(`nrmbfpckct = ${((s as any).nrmbfpckct ?? 0)}`);
  // TODO-QSP: dynamic text: bodyVars['weight_warning'] = <<bodyVars['weight_warning']>>
  scene.text(`bodyVars['weight_warning'] = ${((s as any).bodyVars ?? 0)?.['weight_warning']}`);
  scene.actions([
    { label: 'Return to appearance menu', goto: ['cheatmenu_din', 'looks'] },
  ]);
  scene.build();
}

function enterTatoo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Cheat Menu - Tattoos</h1></center>');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'ankle', 'ankle');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'arm', 'arm');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'ass', 'ass');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'back', 'back');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'belly', 'belly');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'breast', 'breast');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'chest', 'chest');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'face', 'face');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'leg', 'leg');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'lip', 'lip', 'You do not have a tattoo on your leg');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'neck', 'neck');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'pussy', 'pubic', 'You do not have a pubic tattoo');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'shoulder', 'shoulder');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'side', 'the tattoo on your side', 'You do not have a tattoo on your side');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'tramp', 'tramp stamp', 'You do not have a tramp stamp');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'under', 'under breast', 'You do not have an under breast tattoo');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'wrist', 'wrist');
  qspCall(s, 'cheatmenu_din', 'cheatTattoo', 'hand', 'hand');
  if ((!((s as any).cosmetic_tattoo ?? 0))) {
    scene.text('You do not have the makup tattoo</a>');
  }
  if (((s as any).cosmetic_tattoo ?? 0) >= 1) {
    scene.text('<a href="exec:cosmetic_tattoo = 0 & gt \'cheatmenu_din\', \'tatoo\'">Remove your makup tattoo</a>');
  }
  scene.actions([
    { label: 'Return to appearance menu', goto: ['cheatmenu_din', 'looks'] },
  ]);
  scene.build();
}

function enterSetStat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'shortgs', 'setStat', $ARGS[1], ARGS[2]
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'stats'] }]);
  scene.build();
}

function enterSetStatInput(s: GameState, scene: SceneBuilder): void {
  if (!isNaN($temp_input) && $temp_input !== '' !== 0) {
    qspCall(s, 'shortgs', 'setStat', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "val(temp_input)", { location: "cheatmenu_din" }));
  } else {
    if (((s as any).temp_input ?? 0) !== '') {
    }
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'stats'] }]);
  scene.build();
}

function enterSetStatInputInverted(s: GameState, scene: SceneBuilder): void {
  if (!isNaN($temp_input) && $temp_input !== '' !== 0) {
    // TODO-QSP: gs 'shortgs', 'setStat', $ARGS[1], (100 - val($temp_input))
  } else {
    if (((s as any).temp_input ?? 0) !== '') {
    }
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'stats'] }]);
  scene.build();
}

function enterSetAttrs(s: GameState, scene: SceneBuilder): void {
  (s as any).loop_index = 0;
  (s as any).loop_index_max = 0;
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    (s as any).loop_index_max = ((s as any).loop_index_max ?? 0) - (1);
  }
  // TODO-QSP: :set_attrs_loop
  // TODO-QSP: gs 'shortgs', 'setStat', $att_name[loop_index], ARGS[1]
  (s as any).loop_index = ((s as any).loop_index ?? 0) + (1);
  if (((s as any).loop_index ?? 0) < ((s as any).loop_index_max ?? 0)) {
    // TODO-QSP: jump 'set_attrs_loop'
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'stats'] }]);
  scene.build();
}

function enterSetSkills(s: GameState, scene: SceneBuilder): void {
  (s as any).loop_index = 0;
  (s as any).loop_index_max = 0;
  // TODO-QSP: :set_skills_loop
  if (((s as any).skl_name ?? 0)?.[String((s as any).loop_index ?? 0)] !== 'inhib') {
    // TODO-QSP: gs 'shortgs', 'setStat', $skl_name[loop_index], ARGS[1]
  }
  (s as any).loop_index = ((s as any).loop_index ?? 0) + (1);
  if (((s as any).loop_index ?? 0) < ((s as any).loop_index_max ?? 0)) {
    // TODO-QSP: jump 'set_skills_loop'
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'stats'] }]);
  scene.build();
}

function enterPrintStatLinks(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[3] ?? 0))) {
    // TODO-QSP: *p "<<$ARGS[2]>> (<<dyneval('result = <<$ARGS[1]>>_lvl')>>) - Total (<<dyneval('result = pcs_<<$ARGS...
  } else {
    // TODO-QSP: *p "<<$ARGS[2]>> (<<dyneval('result = <<$ARGS[1]>>_lvl')>>): "
  }
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', 0">Min</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl - 10">-10</a> ...
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl - 5">-5</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl - 1">-1</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl + 1">+1</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl + 5">+5</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl + 10">+10</a> ...
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', 100">Max</a> '
  scene.build();
}

function enterPrintStatLinksInverted(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[3] ?? 0))) {
    // TODO-QSP: *p "<<$ARGS[2]>> (<<dyneval('result = 100 - <<$ARGS[1]>>_lvl')>>) - Total (<<dyneval('result = 100 -...
  } else {
    // TODO-QSP: *p "<<$ARGS[2]>> (<<dyneval('result = 100 - <<$ARGS[1]>>_lvl')>>): "
  }
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', 100">Min</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl + 10">-10</a> ...
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl + 5">-5</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl + 1">-1</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl - 1">+1</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl - 5">+5</a> '
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', <<$ARGS[1]>>_lvl - 10">+10</a> ...
  // TODO-QSP: *p '<a href="exec:dynamic $cheatmenu[''setStat''], ''<<$ARGS[1]>>'', 0">Max</a> '
  scene.build();
}

function enterStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Skill');
  scene.text('<center><h1>Cheat Menu - Attributes and Skills</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('Levels are shown before modifiers (e.g. Archetype modifiers).');
  // TODO-QSP: $cheatmenu['table_start']
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'stren', 'Strength', 1);
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'agil', 'Agility', 1);
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'vital', 'Endurance', 1);
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'intel', 'Intelligence', 1);
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'react', 'Reaction', 1);
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'sprt', 'Spirit', 1);
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'chrsm', 'Charisma', 1);
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'prcptn', 'Perception', 1);
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    qspCall(s, 'cheatmenu_din', 'printStatLinks', 'magik', 'Magic', 1);
  }
  qspCall(s, 'cheatmenu_din', 'printStatLinksInverted', 'inhib', 'Inhibition', 1);
  if (((s as any).willpowermax ?? 0) > 150) {
    (s as any).willpowermax = 150;
  }
  if (((s as any).willpowermax ?? 0) < 50) {
    (s as any).willpowermax = 50;
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    // TODO-QSP: *pl '<a href="exec:teacher[''level''] += 10 & gt ''cheatmenu_din'', ''stats''">Reputation teacher+10...
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    // TODO-QSP: *pl '<a href="exec:teacher[''level''] -= 10 & gt ''cheatmenu_din'', ''stats''">Reputation teacher-10...
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'math', 'Math');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'rus', 'Russian');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'lit', 'Literature');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'art', 'Art');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'bio', 'Biology');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'eng', 'English');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'geo', 'Geography');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'sci', 'Science');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'his', 'History');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'shop', 'Shop');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'comp', 'Computer');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'mus', 'Music');
    qspCall(s, 'cheatmenu_din', 'cheatGradeRow', 'pe', 'P.E.');
    if (((s as any).gschoolVars ?? 0)?.['absence_count'] >= 0) {
      // TODO-QSP: *pl '<a href="exec: gschoolVars[''absence_count''] = 0 & gt ''cheatmenu_din'', ''stats''">Zero Absen...
    }
  }
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    qspCall(s, 'cheatmenu_din', 'printStatLinks', 'splcstng', 'Spellcasting');
  }
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'humint', 'People Skills');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'persuas', 'Persuasion');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'observ', 'Observation');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'jab', 'Jabs');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'punch', 'Power Strikes');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'kick', 'Kicks');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'def', 'Defence');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'shoot', 'Marksmanship');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'bushcraft', 'Bushcraft');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'run', 'Running');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'vball', 'Volleyball');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'ftbll', 'Football');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'bkbll', 'Basketball');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'wrstlng', 'Wrestling');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'icesktng', 'Ice Skating');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'gaming', 'Gaming');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'chess', 'Chess');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'pool', 'Pool');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'makupskl', 'Makeup');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'danc', 'Modern Dancing');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'dancero', 'Erotic Dancing');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'dancpol', 'Pole Dancing');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'cheer', 'Cheerleading');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'heels', 'Heels');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'vokal', 'Singing');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'instrmusic', 'Instrumental Music');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'photoskl', 'Photography');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'artskls', 'Artistic Skills');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'perform', 'Performance');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'musicprod', 'Music Production');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'compskl', 'Computer Skill');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'comphckng', 'Hacking');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'hndiwrk', 'Handy-work');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'sewng', 'Tailoring');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'servng', 'Serving');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'medcn', 'Medicine');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'cleaning', 'Cleaning');
  qspCall(s, 'cheatmenu_din', 'printStatLinks', 'mdlng', 'Modeling');
  // TODO-QSP: $cheatmenu['table_end']
  scene.build();
}

function enterStory(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Story');
  scene.text('<center><h1>Cheat Menu - Story cheats</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  // TODO-QSP: 'Prevent non-drama GAMEOVER: ' +        iif(cheatVars['gameover'],        '<a href="exec:  cheatVars...
  // TODO-QSP: 'Automatically win every fight: ' +        iif(cheatVars['win_fights'],      '<a href="exec:  cheatV...
  // TODO-QSP: 'Automatically resolve non-magical fights: ' +  iif(cheatVars['auto_combat'],      '<a href="exec:  ...
  // TODO-QSP: 'Ignore conflicting job schedules: ' +      iif(cheatVars['work'],          '<a href="exec:  cheatVa...
  // TODO-QSP: 'Show hidden jobs in work journal: ' +      iif(cheatVars['show_hidden_jobs'],    '<a href="exec:  c...
  // TODO-QSP: 'Remove "once a week" therapist limit: ' +    iif(cheatVars['therapist_schedule'],  '<a href="exec: ...
  // TODO-QSP: 'Instantly enter any appointment: ' +      iif(cheatVars['appointments'],      '<a href="exec:  chea...
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'therapist_reset\'">Reset therapist states</a>');
  qspCall(s, 'blackmailer', 'cheatmenu');
  qspCall(s, 'belgang', 'cheatmenu');
  scene.text('<h4>Calendar</h4>');
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    scene.text('<a href="exec:gs \'calendar\', \'remove\', \'volleyball_tournament\'">Remove Volleyball Tournament</a>');
  }
  // TODO-QSP: $cheatmenu['table_end']
  scene.build();
}

function enterNpcs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'NPCs');
  scene.text('<center><h1>Cheat Menu - NPCs</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<center><h3>Relationships and Renown</h3></center>');
  scene.text('<center>Relationship values are from 0 - 100.</center>');
  scene.text('<center>If they exceed this limit they will be reset overnight.</center>');
  scene.text('Relationships in Pavlovsk');
  scene.text('<center><b><b>Family</b></b></center>');
  if ((!((s as any).Enable_reputation_family ?? 0))) {
    scene.text('<a href="exec:Enable_reputation_family = 1 & gt \'cheatmenu_din\', \'npcs\'">Show details</a>');
  }
  if (((s as any).Enable_reputation_family ?? 0) === 1) {
    scene.text('<a href="exec:Enable_reputation_family = 0 & gt \'cheatmenu_din\', \'npcs\'">Hide details</a>');
    qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A28', '', 'Stepfather');
    qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A29', '', 'Mother');
    qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A33', '', 'Sister');
    qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A34', '', 'Brother');
  }
  // TODO-QSP: 'Your dog: '+iif($status['dog'] = 'active', '<b>Active</b>', '<a href="exec: $status[''dog''] = ''ac...
  if (((s as any).status ?? 0)?.['dog'] !== 'blocked') {
    // TODO-QSP: 'Set the relationship and love of your dog to always be at maximum: '+iif(cheat['dog_rel'] = 0, '<a ...
    // TODO-QSP: dynamic text: You need to feed your dog <<rex['count_feed_base']>> per day: '+iif(rex['count_f...
    scene.text(`You need to feed your dog ${((s as any).rex ?? 0)?.['count_feed_base']} per day: '+iif(rex['count_feed_base'] > 1, '<a href="exec: rex['count_feed_base'] -= 1 & gt 'cheatmenu_din', 'npcs'">-1</a>', '-1')+'|<a href="exec: rex['count_feed_base'] += 1 & gt 'cheatmenu_din', 'npcs'">+1</a>`);
    // TODO-QSP: dynamic text: You need to walk your dog <<rex['count_walk_base']>> per day: '+iif(rex['count_w...
    scene.text(`You need to walk your dog ${((s as any).rex ?? 0)?.['count_walk_base']} per day: '+iif(rex['count_walk_base'] > 1, '<a href="exec: rex['count_walk_base'] -= 1 & gt 'cheatmenu_din', 'npcs'">-1</a>', '-1')+'|<a href="exec: rex['count_walk_base'] += 1 & gt 'cheatmenu_din', 'npcs'">+1</a>`);
    // TODO-QSP: dynamic text: You need to bath your dog <<rex['count_bath_base']>> per week: '+iif(rex['count_...
    scene.text(`You need to bath your dog ${((s as any).rex ?? 0)?.['count_bath_base']} per week: '+iif(rex['count_bath_base'] > 1, '<a href="exec: rex['count_bath_base'] -= 1 & gt 'cheatmenu_din', 'npcs'">-1</a>', '-1')+'|<a href="exec: rex['count_bath_base'] += 1 & gt 'cheatmenu_din', 'npcs'">+1</a>`);
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.text('<center><b><b>School</b></b></center>');
    scene.text('<i>Popular Kids</i>');
    if ((!((s as any).Enable_reputation_popular ?? 0))) {
      scene.text('<a href="exec:Enable_reputation_popular = 1 & gt \'cheatmenu_din\', \'npcs\'">Show details</a>');
    }
    if (((s as any).Enable_reputation_popular ?? 0) === 1) {
      scene.text('<a href="exec:Enable_reputation_popular = 0 & gt \'cheatmenu_din\', \'npcs\'">Hide details</a>');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A1');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A4');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A14');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A15');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A17');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A22');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A146');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A147');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A148');
      if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
        qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A25');
      }
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A139');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A140');
    }
    scene.text('<i>Athletes</i>');
    if ((!((s as any).Enable_reputation_athletes ?? 0))) {
      scene.text('<a href="exec:Enable_reputation_athletes = 1 & gt \'cheatmenu_din\', \'npcs\'">Show details</a>');
    }
    if (((s as any).Enable_reputation_athletes ?? 0) === 1) {
      scene.text('<a href="exec:Enable_reputation_athletes = 0 & gt \'cheatmenu_din\', \'npcs\'">Hide details</a>');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A3');
      if ((!((s as any).fedormasha ?? 0))) {
        qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A5');
      }
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A8');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A13');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A18');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A19');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A23');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A149');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A150');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A141');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A165');
    }
    scene.text('<i>Nerds</i>');
    if ((!((s as any).Enable_reputation_nerds ?? 0))) {
      scene.text('<a href="exec:Enable_reputation_nerds = 1 & gt \'cheatmenu_din\', \'npcs\'">Show details</a>');
    }
    if (((s as any).Enable_reputation_nerds ?? 0) === 1) {
      scene.text('<a href="exec:Enable_reputation_nerds = 0 & gt \'cheatmenu_din\', \'npcs\'">Hide details</a>');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A2');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A6');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A12');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A16');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A151');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A152');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A153');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A142');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A240');
    }
    scene.text('<i>Gopniks</i>');
    if ((!((s as any).Enable_reputation_gopniks ?? 0))) {
      scene.text('<a href="exec:Enable_reputation_gopniks = 1 & gt \'cheatmenu_din\', \'npcs\'">Show details</a>');
    }
    if (((s as any).Enable_reputation_gopniks ?? 0) === 1) {
      scene.text('<a href="exec:Enable_reputation_gopniks = 0 & gt \'cheatmenu_din\', \'npcs\'">Hide details</a>');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A9');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A10');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A11');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A20');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A21');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A24');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A154');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A155');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A156');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A157');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A158');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A143');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A144');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A145');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A189');
    }
    scene.text('<i>Outcasts/Loners</i>');
    if ((!((s as any).Enable_reputation_outcasts ?? 0))) {
      scene.text('<a href="exec:Enable_reputation_outcasts = 1 & gt \'cheatmenu_din\', \'npcs\'">Show details</a>');
    }
    if (((s as any).Enable_reputation_outcasts ?? 0) === 1) {
      scene.text('<a href="exec:Enable_reputation_outcasts = 0 & gt \'cheatmenu_din\', \'npcs\'">Hide details</a>');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A7');
      if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
        qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A25');
      }
      if (((s as any).fedormasha ?? 0) === 1) {
        qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A5');
      }
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A159');
    }
    scene.text('<i>Teachers/Coaches</i>');
    if ((!((s as any).Enable_reputation_teachers ?? 0))) {
      scene.text('<a href="exec:Enable_reputation_teachers = 1 & gt \'cheatmenu_din\', \'npcs\'">Show details</a>');
    }
    if (((s as any).Enable_reputation_teachers ?? 0) === 1) {
      scene.text('<a href="exec:Enable_reputation_teachers = 0 & gt \'cheatmenu_din\', \'npcs\'">Hide details</a>');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A26');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A69', '', 'Mikhail Nikolayevich');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A128');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A129');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A130');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A131');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A132');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A133');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A134');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A135');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A136');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A137');
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A138');
    }
  }
  // TODO-QSP: $cheatmenu['table_second']
  scene.text('Miscellaneous relationships');
  scene.text('<center><b><b>Others</b></b></center>');
  if ((!((s as any).Enable_reputation_others ?? 0))) {
    scene.text('<a href="exec:Enable_reputation_others = 1 & gt \'cheatmenu_din\', \'npcs\'">Show details</a>');
  }
  if (((s as any).Enable_reputation_others ?? 0) === 1) {
    scene.text('<a href="exec:Enable_reputation_others = 0 & gt \'cheatmenu_din\', \'npcs\'">Hide details</a>');
    if (((s as any).npc_rel ?? 0)?.['A112'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A112', '', 'Sergei Shulgin');
    }
    if (((s as any).npc_rel ?? 0)?.['A219'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A219', '', 'Kat');
    }
    if (((s as any).npc_rel ?? 0)?.['A220'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A220', '', 'Vika');
    }
    if (((s as any).npc_rel ?? 0)?.['A93'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A93', '', 'Irina');
    }
    if (((s as any).npc_rel ?? 0)?.['A43'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A43', '', 'Tamara');
    }
    if (((s as any).alla ?? 0) >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatVarRow', 'alla', 'Alla', 'npcs');
    }
    if (((s as any).masha ?? 0) >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatVarRow', 'masha', 'Masha', 'npcs');
    }
    if (((s as any).npc_rel ?? 0)?.['A41'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A41', '', 'Givi');
    }
    if (((s as any).npc_rel ?? 0)?.['A42'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A42', '', 'Ashot');
    }
    if (((s as any).npc_rel ?? 0)?.['A89'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A89', '', 'Eugene');
    }
    if (((s as any).npc_rel ?? 0)?.['A217'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A217', '', 'Pavlin');
    }
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatVarRow', 'hunterVars[\'AndreiQw\']', 'Hunter Andrei', 'npcs');
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatVarRow', 'hunterVars[\'SergeiQw\']', 'Hunter Sergei', 'npcs');
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatVarRow', 'hunterVars[\'IgorQW\']', 'Hunter Igor', 'npcs');
    }
    if (((s as any).npc_rel ?? 0)?.['A216'] >= 0) {
      qspCall(s, 'cheatmenu_din', 'cheatNpcRel', 'A216', '', 'Martin');
    }
  }
  scene.text('<center><b><b>Nicholas\' Family</b></b></center>');
  scene.text('<a href="exec:gt \'nichUtil\', \'debug\'">Storyline Debug Menu</a>');
  if (Object.keys((s as any).lover ?? {}).length > 0) {
    scene.text('<center><b><b>Lovers</b></b></center>');
    scene.text('<a href="exec:gt \'cheatmenu_din\', \'lover_menu\'">Edit lovers</a>');
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 50) {
    qspCall(s, 'fame', '');
    // TODO-QSP: dynamic text: In Pavlovsk you are known as a ' + $func('wrap', 'neg', '<<$gnikname>>') + ' <a ...
    scene.text(`In Pavlovsk you are known as a ' + $func('wrap', 'neg', '${((s as any).gnikname ?? 0)}') + ' <a href="exec:fame['pav_sex'] = 0 & fame['pav_prostitute'] = 0 & gs 'fame', 'calculateSlut' & gt 'cheatmenu_din', 'npcs'">Clear</a>`);
  }
  if (((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) > 0  ||  ((s as any).sipovka ?? 0) > 0) {
    scene.text('<a href="exec:opusk = 0 & gnewQW = 0 & sipovka = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear reputation with Gopniks</a>');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.text('<center><b>WARNING</b></center>');
    if (((s as any).motherKnowWhore ?? 0) > 0) {
      scene.text('Your mother knows that you are sexually active and considers you a whore. <a href="exec:motherKnowWhore = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
    }
    if (((s as any).motherKnowSpravka ?? 0) > 0) {
      scene.text('Your mother knows that you are sexually active. <a href="exec:motherKnowSpravka = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
    }
    if (((s as any).motherKnowDildo ?? 0) > 0) {
      scene.text('Your mother knows you masturbate with a dildo. <a href="exec:motherKnowDildo = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
    }
    if (((s as any).motherKnowRaped ?? 0) > 0) {
      scene.text('Your mother knows you have been raped. <a href="exec:motherKnowRaped = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
    }
    if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowDildo ?? 0) === 0  &&  (!((s as any).motherKnowRaped ?? 0))) {
      scene.text('Your mother thinks that you are a virgin.');
    }
    if (((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('Your brother thinks you are a total whore. <a href="exec:evgenQW = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
    } else {
      if (((s as any).evgenQW ?? 0) >= 3) {
        scene.text('Your brother thinks you are a slut. <a href="exec:evgenQW = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
      } else {
        if (((s as any).brotherQW ?? 0)?.['know_slut'] === 1) {
          scene.text('Your brother saw semen on your body and thinks you fuck around. <a href="exec:brotherQW[\'know_slut\'] = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
        } else {
          if (((s as any).brotherQW ?? 0)?.['know_slut'] >= 2) {
            scene.text('Your brother saw you in the park fucking the Gopniks. <a href="exec:brotherQW[\'know_slut\'] = 1 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
          } else {
            scene.text('Your brother has a good opinion of you.');
          }
        }
      }
    }
    if (((s as any).sisterknowslut ?? 0) > 1  &&  ((s as any).sisboypartyQW ?? 0) > 1) {
      scene.text('Your sister thinks you are a slut <a href="exec:sisboypartyQW = 0 & sisterknowslut = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
    } else {
      if (((s as any).sisterknowslut ?? 0) > 0) {
        scene.text('Your sister knows that you sleep around. <a href="exec:sisterknowslut = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>');
      } else {
        scene.text('Your sister has a good opinion of you.');
      }
    }
    if (qspFunc(s, 'homes_properties', 'can_live_here', 'parents_home') === 0) {
      scene.text('<a href="exec: gs \'homes_properties\', \'give_access\', \'parents_home\' & gt \'cheatmenu_din\', \'npcs\'">Restore</a> access to your parent\'s apartment.');
    }
    if (((s as any).momKnowsKolka ?? 0) === 1) {
      scene.text('Your mother knows Kolka is the father. <a href="exec:momKnowsKolka = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>.');
    }
    if (((s as any).momKnowsVladimir ?? 0) === 1) {
      scene.text('Your mother knows Vladimir is the father. <a href="exec:momKnowsVladimir = 0 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>.');
    }
    if (((s as any).gschoolVars ?? 0)?.['block'] === 1) {
      scene.text('You\'ve been expelled from school. <a href="exec:gschoolVars[\'block\'] = 0 & gschoolVars[\'expell_stage\'] = 0 & gschoolVars[\'absence_count\'] = 0 & pcs_grades = 50 & gt \'cheatmenu_din\', \'npcs\'">Clear</a>.');
    }
  }
  scene.text('<a href="exec: gt \'NPCChanger\', \'Start\'">NPC Editor</a>');
  // TODO-QSP: $cheatmenu['table_end']
  scene.build();
}

function enterLoverMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'NPCs');
  scene.text('<center><h2>Cheat Menu - Relationships - Lovers</h2></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="exec:gt \'cheatmenu_din\', \'NPCs\'">Go Back</a>');
  (s as any).temp_cmd_i = 0;
  (s as any).temp_cmd_max_i = 0;
  // TODO-QSP: :loverrelationshiploop
  if (((s as any).temp_cmd_i ?? 0) < ((s as any).temp_cmd_max_i ?? 0)) {
    if (((((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)]).slice((1)-1, ((1)-1)+(2))) === 'ex') {
      (s as any).temp_cmd_i = ((s as any).temp_cmd_i ?? 0) + (1);
      // TODO-QSP: jump 'loverrelationshiploop'
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] < 0) {
      (s as any).npc_rel[String((s as any).cmd_temp_npcid ?? 0)] = 0;
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] > 100) {
      (s as any).npc_rel[String((s as any).cmd_temp_npcid ?? 0)] = 100;
    }
    if (((s as any).npc_dates ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] < 0) {
      (s as any).npc_dates[String((s as any).cmd_temp_npcid ?? 0)] = 0;
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'boyfriend'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'girlfriend') {
      // TODO-QSP: dynamic text: You are dating <<$npc_usedname[$cmd_temp_npcid]>>.
      scene.text(`You are dating ${((s as any).npc_usedname ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)]}.`);
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'husband'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'wife') {
        // TODO-QSP: dynamic text: You are married to <<$npc_usedname[$cmd_temp_npcid]>>.
        scene.text(`You are married to ${((s as any).npc_usedname ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)]}.`);
      } else {
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'fuckbuddy') {
          // TODO-QSP: dynamic text: You are fuckbuddies with <<$npc_usedname[$cmd_temp_npcid]>>.
          scene.text(`You are fuckbuddies with ${((s as any).npc_usedname ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)]}.`);
        } else {
          if (((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'sugar_daddy') {
            // TODO-QSP: dynamic text: <<$npc_usedname[$cmd_temp_npcid]>> is your sugar daddy.
            scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)]} is your sugar daddy.`);
          }
        }
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 1) {
      // TODO-QSP: dynamic text: Change lover's personality: <a href="exec: npc_gentle['<<$cmd_temp_npcid>>'] = 0...
      scene.text(`Change lover's personality: <a href="exec: npc_gentle['${((s as any).cmd_temp_npcid ?? 0)}'] = 0 & gt 'cheatmenu_din', 'lover_menu'">Gentle</a>`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 0) {
        // TODO-QSP: dynamic text: Change lover's personality: <a href="exec: npc_rough['<<$cmd_temp_npcid>>'] = 1 ...
        scene.text(`Change lover's personality: <a href="exec: npc_rough['${((s as any).cmd_temp_npcid ?? 0)}'] = 1 & gt 'cheatmenu_din', 'lover_menu'">Normal</a>`);
      } else {
        // TODO-QSP: dynamic text: Change lover's personality: <a href="exec: npc_rough['<<$cmd_temp_npcid>>'] = 0 ...
        scene.text(`Change lover's personality: <a href="exec: npc_rough['${((s as any).cmd_temp_npcid ?? 0)}'] = 0 & npc_gentle['${((s as any).cmd_temp_npcid ?? 0)}'] = 1 & gt 'cheatmenu_din', 'lover_menu'">Rough</a>`);
      }
    }
    if (((s as any).npc_pervert ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 0) {
      // TODO-QSP: dynamic text: Change lover's perversion: <a href="exec: npc_pervert['<<$cmd_temp_npcid>>'] = 1...
      scene.text(`Change lover's perversion: <a href="exec: npc_pervert['${((s as any).cmd_temp_npcid ?? 0)}'] = 1 & gt 'cheatmenu_din', 'lover_menu'">Not perverted</a>`);
    } else {
      // TODO-QSP: dynamic text: Change lover's perversion: <a href="exec: npc_pervert['<<$cmd_temp_npcid>>'] = 0...
      scene.text(`Change lover's perversion: <a href="exec: npc_pervert['${((s as any).cmd_temp_npcid ?? 0)}'] = 0 & gt 'cheatmenu_din', 'lover_menu'">Perverted</a>`);
    }
    // TODO-QSP: dynamic text: Relationship: <<npc_rel[$cmd_temp_npcid]>> <a href="exec: gs 'npc_relationship',...
    scene.text(`Relationship: ${((s as any).npc_rel ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)]} <a href="exec: gs 'npc_relationship', 'modify_exact', '${((s as any).cmd_temp_npcid ?? 0)}', 10 & gt 'cheatmenu_din', 'lover_menu'">+10</a> <a href="exec: gs 'npc_relationship', 'modify_exact', '${((s as any).cmd_temp_npcid ?? 0)}', -10 & gt 'cheatmenu_din', 'lover_menu'">-10</a>`);
    // TODO-QSP: dynamic text: You've been on <<npc_dates[$cmd_temp_npcid]>> dates. <a href="exec: npc_dates['<...
    scene.text(`You've been on ${((s as any).npc_dates ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)]} dates. <a href="exec: npc_dates['${((s as any).cmd_temp_npcid ?? 0)}'] += 5 & gt 'cheatmenu_din', 'lover_menu'">+5</a> <a href="exec: npc_dates['${((s as any).cmd_temp_npcid ?? 0)}'] -= 5 & gt 'cheatmenu_din', 'lover_menu'">-5</a>`);
    (s as any).temp_cmd_i = ((s as any).temp_cmd_i ?? 0) + (1);
    // TODO-QSP: jump 'loverrelationshiploop'
  }
  // TODO-QSP: $cheatmenu['table_end']
  scene.actions([
    { label: 'Go Back', goto: ['cheatmenu_din', 'npcs'] },
  ]);
  scene.build();
}

function enterInputTime(s: GameState, scene: SceneBuilder): void {
  (s as any).inputtmp = 0;
  if (((s as any).inputtmp ?? 0)/100 >= 0  &&  ((s as any).inputtmp ?? 0)/100 <= 23) {
    (s as any).temp_hour = ((s as any).inputtmp ?? 0)/100;
  }
  (s as any).inputtmp = ((s as any).inputtmp ?? 0) % 100;
  if (((s as any).inputtmp ?? 0) >= 0  &&  ((s as any).inputtmp ?? 0) <= 59) {
    (s as any).temp_minut = ((s as any).inputtmp ?? 0);
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'time'] }]);
  scene.build();
}

function enterWeek(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><a href="exec:gt \'cheatmenu_din\', \'index\'"><b>Cheat menu</b></a> - <a href="exec:gt \'cheatmenu_din\', \'time\'"><b>Time</b></a></center>');
  // TODO-QSP: dynamic text: Current time: <b><<$weekName>></b>, <b><<day>></b> of <b><<$monthName>></b>, <b>...
  scene.text(`Current time: <b>${((s as any).weekName ?? 0)}</b>, <b>${((s as any).day ?? 0)}</b> of <b>${((s as any).monthName ?? 0)}</b>, <b>${((s as any).year ?? 0)}</b>, ${((s as any).tempcurtime ?? 0)}`);
  // TODO-QSP: dynamic text: Target time: <b><<$weekName[temp_week]>></b>, <b><<temp_day>></b> of <b><<$month...
  scene.text(`Target time: <b>${((s as any).weekName ?? 0)?.[String((s as any).temp_week ?? 0)]}</b>, <b>${((s as any).temp_day ?? 0)}</b> of <b>${((s as any).monthName ?? 0)?.[String((s as any).temp_month ?? 0)]}</b>, <b>${((s as any).temp_year ?? 0)}</b>, ${((s as any).temptime ?? 0)}`);
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 1 - temp_week & gt 'cheatmenu_din', 'time'">Monda...
  scene.text('<a href="exec:temp_daystart += 1 - temp_week & gt \'cheatmenu_din\', \'time\'">Monday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 2 - temp_week & gt 'cheatmenu_din', 'time'">Tuesd...
  scene.text('<a href="exec:temp_daystart += 2 - temp_week & gt \'cheatmenu_din\', \'time\'">Tuesday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 3 - temp_week & gt 'cheatmenu_din', 'time'">Wedne...
  scene.text('<a href="exec:temp_daystart += 3 - temp_week & gt \'cheatmenu_din\', \'time\'">Wednesday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 4 - temp_week & gt 'cheatmenu_din', 'time'">Thurs...
  scene.text('<a href="exec:temp_daystart += 4 - temp_week & gt \'cheatmenu_din\', \'time\'">Thursday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 5 - temp_week & gt 'cheatmenu_din', 'time'">Frida...
  scene.text('<a href="exec:temp_daystart += 5 - temp_week & gt \'cheatmenu_din\', \'time\'">Friday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 6 - temp_week & gt 'cheatmenu_din', 'time'">Satur...
  scene.text('<a href="exec:temp_daystart += 6 - temp_week & gt \'cheatmenu_din\', \'time\'">Saturday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 7 - temp_week & gt 'cheatmenu_din', 'time'">Sunda...
  scene.text('<a href="exec:temp_daystart += 7 - temp_week & gt \'cheatmenu_din\', \'time\'">Sunday</a>');
  scene.build();
}

function enterMonth(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><a href="exec:gt \'cheatmenu_din\', \'index\'"><b>Cheat menu</b></a> - <a href="exec:gt \'cheatmenu_din\', \'time\'"><b>Time</b></a></center>');
  // TODO-QSP: dynamic text: Current time: <b><<$weekName>></b>, <b><<day>></b>, of <b><<$monthName>></b>, <b...
  scene.text(`Current time: <b>${((s as any).weekName ?? 0)}</b>, <b>${((s as any).day ?? 0)}</b>, of <b>${((s as any).monthName ?? 0)}</b>, <b>${((s as any).year ?? 0)}</b>, ${((s as any).tempcurtime ?? 0)}`);
  // TODO-QSP: dynamic text: Target time: <b><<$weekName[temp_week]>></b>, <b><<temp_day>></b>, of <b><<$mont...
  scene.text(`Target time: <b>${((s as any).weekName ?? 0)?.[String((s as any).temp_week ?? 0)]}</b>, <b>${((s as any).temp_day ?? 0)}</b>, of <b>${((s as any).monthName ?? 0)?.[String((s as any).temp_month ?? 0)]}</b>, <b>${((s as any).temp_year ?? 0)}</b>, ${((s as any).temptime ?? 0)}`);
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 1">January</a>');
  }
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 2">February</a>');
  }
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 3">March</a>');
  }
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 4">April</a>');
  }
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 5">May</a>');
  }
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 6">June</a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 7">July</a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 8">August</a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 9">September</a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 10">October</a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 11">November</a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'month2\', 12">December</a>');
  scene.build();
}

function enterMonth2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'time', 'to_daystart', temp_year, ARGS[1], 1
  (s as any).temp_daystart = ((s as any).dateVars ?? 0)?.['daystart'];
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'time'] }]);
  scene.build();
}

function enterTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_daystart ?? 0) < 153) {
    (s as any).temp_daystart = 153;
  }
  qspCall(s, 'time', 'to_date', ((s as any).temp_daystart ?? 0));
  (s as any).temp_day = ((s as any).dateVars ?? 0)?.['day'];
  (s as any).temp_week = ((s as any).dateVars ?? 0)?.['week'];
  (s as any).temp_month = ((s as any).dateVars ?? 0)?.['month'];
  (s as any).temp_year = ((s as any).dateVars ?? 0)?.['year'];
  qspCall(s, 'time', 'update_date');
  qspCall(s, 'outdoors', 'temp_set');
  qspCall(s, 'stat', '');
  if (((s as any).currtimecheck ?? 0) === 1) {
    if (((s as any).currday ?? 0) !== ((s as any).daystart ?? 0)) {
      if (((s as any).currday ?? 0) < ((s as any).daystart ?? 0)) {
        (s as any).temp = (((s as any).week ?? 0) + ((s as any).daystart ?? 0) - ((s as any).currday ?? 0)) % 7;
      } else {
        (s as any).temp = ((s as any).week ?? 0) - ((((s as any).currday ?? 0) - ((s as any).daystart ?? 0)) % 7);
      }
      (s as any).currday = ((s as any).daystart ?? 0);
    }
    if (((s as any).currhour ?? 0) < (((s as any).daystart ?? 0) - 1) * 24 + ((s as any).hour ?? 0)) {
      (s as any).femcycloop = (((s as any).daystart ?? 0) - 1) * 24 + ((s as any).hour ?? 0) - ((s as any).currhour ?? 0);
      // TODO-QSP: :femcycloop
      qspCall(s, 'femcyc', '');
      (s as any).femcycloop = ((s as any).femcycloop ?? 0) - (1);
      if (((s as any).femcycloop ?? 0) > 0) {
        // TODO-QSP: jump 'femcycloop'
      }
    }
  }
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Time');
  scene.text('<center><h1>Cheat Menu - Manipulate Time and Weather</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('you know what you\'re doing. When reporting bugs, please mention any cheats you used.</center>');
  // TODO-QSP: $cheatmenu['table_start']
  // TODO-QSP: dynamic text: Current time: <b><<$weekName>></b>, <b><<day>><<$day_suffix>></b>, of <b><<$mont...
  scene.text(`Current time: <b>${((s as any).weekName ?? 0)}</b>, <b>${((s as any).day ?? 0)}${((s as any).day_suffix ?? 0)}</b>, of <b>${((s as any).monthName ?? 0)}</b>, <b>${((s as any).year ?? 0)}</b>, ${((s as any).tempcurtime ?? 0)}`);
  // TODO-QSP: dynamic text: Target time: <b><<$weekName[temp_week]>></b>, <b><<temp_day>><<$temp_day_suffix>...
  scene.text(`Target time: <b>${((s as any).weekName ?? 0)?.[String((s as any).temp_week ?? 0)]}</b>, <b>${((s as any).temp_day ?? 0)}${((s as any).temp_day_suffix ?? 0)}</b>, of <b>${((s as any).monthName ?? 0)?.[String((s as any).temp_month ?? 0)]}</b>, <b>${((s as any).temp_year ?? 0)}</b>, ${((s as any).temptime ?? 0)}`);
  // TODO-QSP: dynamic text: Daychange: <<temp_daystart - daystart>>
  scene.text(`Daychange: ${((s as any).temp_daystart ?? 0) - ((s as any).daystart ?? 0)}`);
  scene.text('Select <a href="exec:gt \'cheatmenu_din\', \'month\'">Month</a>');
  scene.text('Select <a href="exec:gt \'cheatmenu_din\', \'week\'">Weekday</a>');
  if (((s as any).temp_daystart ?? 0) > 519) {
  }
  if (((s as any).temp_daystart ?? 0) < 2704) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_daystart += 365 & gt ''cheatmenu_din'', ''time''">+1 Year</a>'
  }
  // TODO-QSP: 'Year:   ' + $temp_text
  if (((s as any).temp_daystart ?? 0) > 159) {
  }
  if (((s as any).temp_daystart ?? 0) > 153) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_daystart -= 1 & gt ''cheatmenu_din'', ''time''">-1</a>'  else $...
  }
  if (((s as any).temp_daystart ?? 0) < 3075) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_daystart += 1 & gt ''cheatmenu_din'', ''time''">+1</a>'  else $...
  }
  if (((s as any).temp_daystart ?? 0) < 3069) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_daystart += 7 & gt ''cheatmenu_din'', ''time''">+7</a>'
  }
  // TODO-QSP: 'Day:    ' + $temp_text
  if (((s as any).temp_hour ?? 0) > 3) {
  }
  if (((s as any).temp_hour ?? 0) > 0) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_hour -= 1 & gt ''cheatmenu_din'', ''time''">-1</a>'  else $temp...
  }
  if (((s as any).temp_hour ?? 0) !== 0) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_hour = 0 & gt ''cheatmenu_din'', ''time''">0</a>'  else $temp_t...
  }
  if (((s as any).temp_hour ?? 0) < 23) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_hour += 1 & gt ''cheatmenu_din'', ''time''">+1</a>'  else $temp...
  }
  if (((s as any).temp_hour ?? 0) < 20) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_hour += 4 & gt ''cheatmenu_din'', ''time''">+4</a>'
  }
  // TODO-QSP: 'Hour:   ' + $temp_text
  if (((s as any).temp_minut ?? 0) > 14) {
  }
  if (((s as any).temp_minut ?? 0) > 0) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_minut -= 1 & gt ''cheatmenu_din'', ''time''">-1</a>'  else $tem...
  }
  if (((s as any).temp_minut ?? 0) !== 0) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_minut = 0 & gt ''cheatmenu_din'', ''time''">0</a>'    else $tem...
  }
  if (((s as any).temp_minut ?? 0) < 59) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_minut += 1 & gt ''cheatmenu_din'', ''time''">+1</a>'  else $tem...
  }
  if (((s as any).temp_minut ?? 0) < 46) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_minut += 15 & gt ''cheatmenu_din'', ''time''">+15</a>'
  }
  // TODO-QSP: 'Minute: ' + $temp_text
  // TODO-QSP: dynamic text: Weather: <a href="exec:sunWeather=iif(sunWeather=0,1,0) & sunWeather[1] = totmin...
  scene.text('Weather: <a href="exec:sunWeather=iif(sunWeather=0,1,0) & sunWeather[1] = totminut+180 & gs \'outdoors\', \'weather\' & gt \'cheatmenu_din\', \'time\'">\'+iif(sunWeather=0, \'Rain\', \'Sunny\')+\'</a>');
  // TODO-QSP: dynamic text: Temperature = <<$temperature>>
  scene.text(`Temperature = ${((s as any).temperature ?? 0)}`);
  if (((s as any).temper ?? 0) > -21) {
  }
  if (((s as any).temper ?? 0) > -25) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:weatherTemper -= 10 & gs ''outdoors'', ''weather'' & gt ''cheatmenu_...
  }
  if (((s as any).temper ?? 0) < 45) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:weatherTemper += 10 & gs ''outdoors'', ''weather'' & gt ''cheatmenu_...
  }
  if (((s as any).temper ?? 0) < 41) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:weatherTemper += 50 & gs ''outdoors'', ''weather'' & gt ''cheatmenu_...
  }
  // TODO-QSP: 'Degree: ' + $temp_text
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'input_time\'">Direct input time</a>');
  scene.text('<a href="exec:daystart = temp_daystart & hour = temp_hour & minut = temp_minut & currtimecheck = 1 & gt \'cheatmenu_din\', \'time\'">Accept target date & time</a>');
  scene.text('<a href="exec:temp_daystart = daystart & temp_hour = hour & temp_minut = minut & gt \'cheatmenu_din\', \'time\'">Reset target date & time</a>');
  // TODO-QSP: $cheatmenu['table_end']
  scene.build();
}

function enterMagicTable(s: GameState, scene: SceneBuilder): void {
  (s as any).maxArrSizeC = 0;
  // TODO-QSP: <table width='90%' cellspacing='0' cellpadding='5' valign='top' border='1'>
  // TODO-QSP: <tr><th colspan='4'><b><<$SpellTabName>></b></th></tr>
  // TODO-QSP: <tr>
  // TODO-QSP: <th></th>
  // TODO-QSP: <th>Spell</th>
  // TODO-QSP: <th>Mana</th>
  // TODO-QSP: <th>Description</th>
  // TODO-QSP: </tr>"
  (s as any).i = 0;
  // TODO-QSP: :CheatDinSpell1
  if (((s as any).i ?? 0) < ((s as any).maxArrSizeC ?? 0)) {
    if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 1) {
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'CheatDinSpell1'
  }
  // TODO-QSP: </table>
  // TODO-QSP: </center>"
  scene.build();
}

function enterSucresetdo(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'magic'] }]);
  scene.build();
}

function enterSuccubreset(s: GameState, scene: SceneBuilder): void {
  scene.text('Are you sure you want to reset your Succubus status? You will lose all levels, saved power, and succubus skill levels.');
  scene.text('<a href="exec:gt \'cheatmenu_din\', \'magic\'"><b>No, nevermind.</b></a>');
  scene.text('<a href="exec:gs \'cheatmenu_din\', \'sucresetdo\'"><b>Yes, remove & reset Succubus status</b></a>');
  scene.build();
}

function enterMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Magic');
  scene.text('<center><h1>Cheat Menu - Magic</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  // TODO-QSP: dynamic text: <center>Is magical: <a href="exec:pcs_magik += 1 & gt 'cheatmenu_din', 'magic'">...
  scene.text(`<center>Is magical: <a href="exec:pcs_magik += 1 & gt 'cheatmenu_din', 'magic'">+1${((s as any).pcs_magik ?? 0)}</a></center>`);
  if (((s as any).succubusflag ?? 0) === 1) {
    scene.text('<center><a href="exec:gt \'cheatmenu_din\', \'succubreset\'"><b>Remove & Reset Succubus status</b></a></center>');
    scene.text('<center><b>WARNING!</b></center>');
  }
  if (((s as any).spellMana ?? 0)?.['fog'] === 0) {
    qspCall(s, 'spellList', '');
  }
  qspCall(s, 'cheatmenu_din', 'magicTable', 'Combat Spells', '$combatSpells');
  qspCall(s, 'cheatmenu_din', 'magicTable', 'Non-Combat Spells', '$nonComSpells');
  // TODO-QSP: <table width='90%' cellspacing='0' cellpadding='5' valign='top' border='1'>
  // TODO-QSP: <tr><th colspan='2'><b>Known Tree Circle Locations</b></th></tr>
  // TODO-QSP: <tr><td><a href=""EXEC: spellKnown['teleport']=<<iif(spellKnown['teleport']=1,'0','1')>> & gt 'cheat...
  (s as any).i = 0;
  // TODO-QSP: :CheatDinTP1
  if (((s as any).i ?? 0) < Object.keys((s as any).tpLocations ?? {}).length) {
    if (((s as any).tpKnown ?? 0)?.[String((s as any).ThisLocation ?? 0)] === 1) {
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'CheatDinTP1'
  }
  // TODO-QSP: </table>
  // TODO-QSP: </center>"
  // TODO-QSP: $cheatmenu['table_end']
  scene.build();
}

function enterPain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pain ?? 0)?.['head'] < 0) {
    (s as any).pain['head'] = 0;
  }
  if (((s as any).pain ?? 0)?.['hair'] < 0) {
    (s as any).pain['hair'] = 0;
  }
  if (((s as any).pain ?? 0)?.['ears'] < 0) {
    (s as any).pain['ears'] = 0;
  }
  if (((s as any).pain ?? 0)?.['eyebrows'] < 0) {
    (s as any).pain['eyebrows'] = 0;
  }
  if (((s as any).pain ?? 0)?.['eyes'] < 0) {
    (s as any).pain['eyes'] = 0;
  }
  if (((s as any).pain ?? 0)?.['cheeks'] < 0) {
    (s as any).pain['cheeks'] = 0;
  }
  if (((s as any).pain ?? 0)?.['nose'] < 0) {
    (s as any).pain['nose'] = 0;
  }
  if (((s as any).pain ?? 0)?.['mouth'] < 0) {
    (s as any).pain['mouth'] = 0;
  }
  if (((s as any).pain ?? 0)?.['lips'] < 0) {
    (s as any).pain['lips'] = 0;
  }
  if (((s as any).pain ?? 0)?.['tongue'] < 0) {
    (s as any).pain['tongue'] = 0;
  }
  if (((s as any).pain ?? 0)?.['throat'] < 0) {
    (s as any).pain['throat'] = 0;
  }
  if (((s as any).pain ?? 0)?.['neck'] < 0) {
    (s as any).pain['neck'] = 0;
  }
  if (((s as any).pain ?? 0)?.['back'] < 0) {
    (s as any).pain['back'] = 0;
  }
  if (((s as any).pain ?? 0)?.['asscheeks'] < 0) {
    (s as any).pain['asscheeks'] = 0;
  }
  if (((s as any).pain ?? 0)?.['asshole'] < 0) {
    (s as any).pain['asshole'] = 0;
  }
  if (((s as any).pain ?? 0)?.['hips'] < 0) {
    (s as any).pain['hips'] = 0;
  }
  if (((s as any).pain ?? 0)?.['thighs'] < 0) {
    (s as any).pain['thighs'] = 0;
  }
  if (((s as any).pain ?? 0)?.['legL'] < 0) {
    (s as any).pain['legL'] = 0;
  }
  if (((s as any).pain ?? 0)?.['legR'] < 0) {
    (s as any).pain['legR'] = 0;
  }
  if (((s as any).pain ?? 0)?.['feet'] < 0) {
    (s as any).pain['feet'] = 0;
  }
  if (((s as any).pain ?? 0)?.['toes'] < 0) {
    (s as any).pain['toes'] = 0;
  }
  if (((s as any).pain ?? 0)?.['shoulders'] < 0) {
    (s as any).pain['shoulders'] = 0;
  }
  if (((s as any).pain ?? 0)?.['armL'] < 0) {
    (s as any).pain['armL'] = 0;
  }
  if (((s as any).pain ?? 0)?.['armR'] < 0) {
    (s as any).pain['armR'] = 0;
  }
  if (((s as any).pain ?? 0)?.['hands'] < 0) {
    (s as any).pain['hands'] = 0;
  }
  if (((s as any).pain ?? 0)?.['fingers'] < 0) {
    (s as any).pain['fingers'] = 0;
  }
  if (((s as any).pain ?? 0)?.['chest'] < 0) {
    (s as any).pain['chest'] = 0;
  }
  if (((s as any).pain ?? 0)?.['breasts'] < 0) {
    (s as any).pain['breasts'] = 0;
  }
  if (((s as any).pain ?? 0)?.['nipples'] < 0) {
    (s as any).pain['nipples'] = 0;
  }
  if (((s as any).pain ?? 0)?.['ribs'] < 0) {
    (s as any).pain['ribs'] = 0;
  }
  if (((s as any).pain ?? 0)?.['tummy'] < 0) {
    (s as any).pain['tummy'] = 0;
  }
  if (((s as any).pain ?? 0)?.['pubic'] < 0) {
    (s as any).pain['pubic'] = 0;
  }
  if (((s as any).pain ?? 0)?.['vaginal'] < 0) {
    (s as any).pain['vaginal'] = 0;
  }
  if (((s as any).pain ?? 0)?.['clitoris'] < 0) {
    (s as any).pain['clitoris'] = 0;
  }
  if (((s as any).pain ?? 0)?.['urethra'] < 0) {
    (s as any).pain['urethra'] = 0;
  }
  if (((s as any).pain ?? 0)?.['cervix'] < 0) {
    (s as any).pain['cervix'] = 0;
  }
  qspCall(s, 'pain', 'calc');
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Pain');
  scene.text('<center><h1>Cheat Menu - Pain Management</h1></center>');
  scene.text('<center><a href="exec:killvar \'pain\' & gs \'cheatmenu_din\', \'pain\'">No pain</a></center>');
  // TODO-QSP: $cheatmenu['table_start']
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'head', 'head');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'hair', 'hair');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'ears', 'ears');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'eyebrows', 'eyebrows');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'eyes', 'eyes');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'cheeks', 'cheeks');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'nose', 'nose');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'mouth', 'mouth');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'lips', 'lips');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'tongue', 'tongue');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'throat', 'throat');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'neck', 'neck');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'back', 'back');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'asscheeks', 'asscheeks');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'asshole', 'asshole');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'hips', 'hips');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'thighs', 'thighs');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'legL', 'left leg');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'legR', 'right leg');
  // TODO-QSP: $cheatmenu['table_second']
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'feet', 'feet');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'toes', 'toes');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'shoulders', 'shoulders');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'armL', 'left arm');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'armR', 'right arm');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'hands', 'hands');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'fingers', 'fingers');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'chest', 'chest');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'breasts', 'breasts');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'nipples', 'nipples');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'ribs', 'ribs');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'tummy', 'tummy');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'pubic', 'pubic');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'vaginal', 'vaginal');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'labia', 'labia');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'clitoris', 'clitoris');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'urethra', 'urethra');
  qspCall(s, 'cheatmenu_din', 'cheatPainRow', 'cervix', 'cervix');
  // TODO-QSP: $cheatmenu['table_end']
  scene.text('You may still have pain from gaping or having been spanked, you can clear these using "Cure all ailments." in "Cheat Menu - Character State Changes"');
  // TODO-QSP: dynamic text: You currently have vaginal gaping of <<vgape>>
  scene.text(`You currently have vaginal gaping of ${((s as any).vgape ?? 0)}`);
  // TODO-QSP: dynamic text: You currently have anal gaping of <<agape>>
  scene.text(`You currently have anal gaping of ${((s as any).agape ?? 0)}`);
  // TODO-QSP: dynamic text: You currently have spanked level <<spanked>>
  scene.text(`You currently have spanked level ${((s as any).spanked ?? 0)}`);
  scene.build();
}

function enterFame(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Fame');
  scene.text('<center><h1>Cheat Menu - Fame</h1></center>');
  (s as any).table['fame'] = '<center><table width="90%" cellspacing="0" cellpadding="5" valign="top" border="1">';
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('<th colspan="5"><b>Fame</b></th><tr>');
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('<th></th><th>Pavlovsk</th><th>City</th><th>Pushkin</th><th>Gadukino</th><tr>');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'acting', 'Actor');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'dance', 'Dancer');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'modelling', 'Glamour model');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'painting', 'Painter');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'music', 'Musician');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'ballet', 'Ballet dancer');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'porn', 'Porn actor');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'stripping', 'Stripper');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'sex', 'Sex');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'prostitute', 'Prostitution');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'kickboxing', 'Kickboxer');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'running', 'Runner');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'volleyball', 'Volleyball player');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'chess', 'Chess player');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'teaching', 'Teacher');
  qspCall(s, 'cheatmenu_din', 'cheatFameRow', 'media', 'Social media');
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('</table></center>');
  // TODO-QSP: $table['fame']
  scene.build();
}

function enterBdimmain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cheatmenu_bisets', 'main');
  scene.build();
}

function enterItems(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'Items');
  scene.text('<center><h1>Cheat Menu - Items</h1></center>');
  scene.text('<center>');
  scene.text('<h4>Documents</h4>');
  if ((!((s as any).showDocumentItems ?? 0))) {
    scene.text('<a href = "exec: showDocumentItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showDocumentItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      scene.text('<a href="exec:gschoolVars[\'school_diploma\'] = 1 & gt \'cheatmenu_din\', \'items\'">Get School Certificate</a>');
    } else {
      scene.text('<a href="exec:gschoolVars[\'school_diploma\'] = 0 & gt \'cheatmenu_din\', \'items\'">Remove School Certificate</a>');
    }
    if (((s as any).university ?? 0)?.['diploma'] === 0) {
      scene.text('<a href="exec:gs \'uniutil\', \'diploma\', \'set_obtained\' & gt \'cheatmenu_din\', \'items\'">Get Diploma</a>');
    } else {
      scene.text('<a href="exec:gs \'uniutil\', \'diploma\', \'set_unobtained\' & gt \'cheatmenu_din\', \'items\'">Remove Diploma</a>');
    }
    if ((!((s as any).fakepassport ?? 0))) {
      scene.text('<a href="exec:fakepassport = 1 & gt \'cheatmenu_din\', \'items\'">Get Fake Passport</a>');
    } else {
      scene.text('<a href="exec:fakepassport = 0 & gt \'cheatmenu_din\', \'items\'">Remove Fake Passport</a>');
    }
    if (((s as any).license ?? 0)?.['secretary'] === 0) {
      scene.text('<a href="exec:license[\'secretary\'] = 1 & gt \'cheatmenu_din\', \'items\'">Get Secretarial Diploma</a>');
    } else {
      scene.text('<a href="exec:license[\'secretary\'] = 0 & gt \'cheatmenu_din\', \'items\'">Remove Secretarial Diploma</a>');
    }
    if (((s as any).license ?? 0)?.['masseuse'] === 0) {
      scene.text('<a href="exec:license[\'masseuse\'] = 1 & gt \'cheatmenu_din\', \'items\'">Get Masseuse Certificate</a>');
    } else {
      scene.text('<a href="exec:license[\'masseuse\'] = 0 & gt \'cheatmenu_din\', \'items\'">Remove Masseuse Certificate</a>');
    }
    if (((s as any).license ?? 0)?.['drive'] === 0) {
      scene.text('<a href="exec:license[\'drive\'] = 1 & gt \'cheatmenu_din\', \'items\'">Get Driving Licence</a>');
    } else {
      scene.text('<a href="exec:license[\'drive\'] = 0 & gt \'cheatmenu_din\', \'items\'">Remove Driving Licence</a>');
    }
  }
  scene.text('<h4>Pharmacy items</h4>');
  if ((!((s as any).showPharmacyItems ?? 0))) {
    scene.text('<a href = "exec: showPharmacyItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showPharmacyItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'morning_after_pill', 'Morning after pill');
    if (((s as any).preziktype ?? 0) === 1) {
      qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'normal_condoms', 'Condoms');
    } else {
      qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'equipped_condoms', 'Condoms');
    }
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'pregnancy_test', 'Pregnancy test');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'contraceptive_pill', 'Birth control pills');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'antibiotics', 'Antibiotics');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'vitamins', 'Vitamins');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'painkillers', 'Painkillers');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'chafing_cream', 'Ointments for chafing');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'lubricant', 'Lubricants');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'weight_loss_pill', 'Weight loss pill');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'tampons', 'Tampons');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'sanitary_pads', 'Sanitary napkins');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'enema_kit', 'Enema kit');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'breast_pump', 'Breast pump');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'bottle_s', 'Breastmilk bottle S');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'bottle_m', 'Breastmilk bottle M');
  }
  scene.text('<h4>Food items</h4>');
  if ((!((s as any).showFoodItems ?? 0))) {
    scene.text('<a href = "exec: showFoodItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showFoodItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'food_basic', 'Regular food');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'food_diet', 'Diet food');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'food_biscuits', 'Tea biscuits');
    if (((s as any).bag ?? 0) > 0) {
      qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'food_water', 'Bottle of water');
      qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'food_sandwich', 'Sandwich');
      qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'food_wine', 'Cheap Bottle of wine');
    }
  }
  scene.text('<h4>Cosmetics items</h4>');
  if ((!((s as any).showCosmeticsItems ?? 0))) {
    scene.text('<a href = "exec:showCosmeticsItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec:showCosmeticsItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'cosmetics', 'Cosmetics');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'moisturiser', 'Moisturiser');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'lipbalm', 'Lip balms');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'eyelash_fake', 'Plain false lashes');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'eyelash_mink', 'Mink false lashes');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'razor', 'Razors');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'suncream', 'Sunblock');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'deodorant', 'Deodorant');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'shampoo', 'Shampoo');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'scrunchies', 'Hair scrunchies');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'kirbygrips', 'Hair pins');
    if (((s as any).bag ?? 0) === 1) {
      qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'makeup_wipes', 'Wipes');
      qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'travel_makeup', 'Portable makeup');
      qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'mouthwash', 'Mouthwash');
      qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'comb', 'Comb');
      qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'travel_mirror', 'Compact mirror');
    }
  }
  scene.text('<h4>Hardware items</h4>');
  if ((!((s as any).showHardwareItems ?? 0))) {
    scene.text('<a href = "exec: showHardwareItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showHardwareItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'dish_soap', 'Dishwashing detergent');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'laundry_soap', 'Clothing detergent');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'dish_plates', 'Plates');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'sewing_fabric', 'Fabric');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'sewing_kit', 'Sewing kit');
    if (((s as any).bag ?? 0) === 1) {
      qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'umbrella', 'Umbrella');
    }
  }
  scene.text('<h4>Narcotics items</h4>');
  if ((!((s as any).showNarcoticsItems ?? 0))) {
    scene.text('<a href = "exec: showNarcoticsItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showNarcoticsItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'cigarettes', 'Cigarettes');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'joints', 'Joints');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'cocaine', 'Cocaine');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'amphetamine', 'Amphetamine');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'mentats', 'Neuroboosters');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'steroids', 'Steroids');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'breastcream', 'Breast cream');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'aphrodisiac', 'Aphrodisiacs');
  }
  scene.text('<h4>Sex shop items</h4>');
  if ((!((s as any).showSexItems ?? 0))) {
    scene.text('<a href = "exec: showSexItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showSexItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'mag_porn', 'Porn magazine');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'vibe', 'Vibrator');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'buttplug', 'Butt plug');
    qspCall(s, 'cheatmenu_din', 'cheatItemQty', 'dildo_suction', '15cm suction dildo');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'strapon', 'Strap-on harness');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'dildo_small', '10cm dildo');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'dildo_normal', '15cm dildo');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'dildo_big', '20cm dildo');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'dildo_large', '25cm dildo');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'dildo_huge', '30cm dildo');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'dildo_enormous', '35cm dildo');
    qspCall(s, 'cheatmenu_din', 'cheatItemToggle', 'dildo_gigantic', '40cm dildo');
  }
  scene.text('</center>');
  scene.build();
}

function enterCheatPainRow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: pain[<<$ARGS[2]>>] = <<pain[$ARGS[1]]>> <a href="exec:pain['<<$ARGS[1]>>'] -= 10...
  scene.text(`pain[${((s as any).locArgs?.[2] ?? 0)}] = ${((s as any).pain ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]} <a href="exec:pain['${((s as any).locArgs?.[1] ?? 0)}'] -= 10 & gs 'cheatmenu_din', 'pain'">-10</a> <a href="exec:pain['${((s as any).locArgs?.[1] ?? 0)}'] += 10 & gs 'cheatmenu_din', 'pain'">+10</a>`);
  scene.build();
}

function enterCheatFameRow(s: GameState, scene: SceneBuilder): void {
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + qspUntranslated(s, "ARGS[2]>", { location: "cheatmenu_din" }) + '</td>');
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + qspUntranslated(s, "fame['pav_<<ARGS[1]>>']>", { location: "cheatmenu_din" }) + '   <a href="exec:gs \'fame\', \'pav\', \'<<$ARGS[1]>>\', 10 & gt \'cheatmenu_din\', \'fame\'">+10</a> <a href="exec:gs \'fame\', \'pav\', \'<<$ARGS[1]>>\', 100 & gt \'cheatmenu_din\', \'fame\'">+100</a> <a href="exec:gs \'fame\', \'pav\', \'<<$ARGS[1]>>\', -10 & gt \'cheatmenu_din\', \'fame\'">-10</a> <a href="exec:gs \'fame\', \'pav\', \'<<$ARGS[1]>>\', -100 & gt \'cheatmenu_din\', \'fame\'">-100</a> </td>');
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + qspUntranslated(s, "fame['city_<<ARGS[1]>>']>", { location: "cheatmenu_din" }) + '   <a href="exec:gs \'fame\', \'city\', \'<<$ARGS[1]>>\', 10 & gt \'cheatmenu_din\', \'fame\'">+10</a> <a href="exec:gs \'fame\', \'city\', \'<<$ARGS[1]>>\', 100 & gt \'cheatmenu_din\', \'fame\'">+100</a> <a href="exec:gs \'fame\', \'city\', \'<<$ARGS[1]>>\', -10 & gt \'cheatmenu_din\', \'fame\'">-10</a> <a href="exec:gs \'fame\', \'city\', \'<<$ARGS[1]>>\', -100 & gt \'cheatmenu_din\', \'fame\'">-100</a> </td>');
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + qspUntranslated(s, "fame['pushkin_<<ARGS[1]>>']>", { location: "cheatmenu_din" }) + '   <a href="exec:gs \'fame\', \'pushkin\', \'<<$ARGS[1]>>\', 10 & gt \'cheatmenu_din\', \'fame\'">+10</a> <a href="exec:gs \'fame\', \'pushkin\', \'<<$ARGS[1]>>\', 100 & gt \'cheatmenu_din\', \'fame\'">+100</a> <a href="exec:gs \'fame\', \'pushkin\', \'<<$ARGS[1]>>\', -10 & gt \'cheatmenu_din\', \'fame\'">-10</a> <a href="exec:gs \'fame\', \'pushkin\', \'<<$ARGS[1]>>\', -100 & gt \'cheatmenu_din\', \'fame\'">-100</a> </td>');
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + qspUntranslated(s, "fame['village_<<ARGS[1]>>']>", { location: "cheatmenu_din" }) + '   <a href="exec:gs \'fame\', \'village\', \'<<$ARGS[1]>>\', 10 & gt \'cheatmenu_din\', \'fame\'">+10</a> <a href="exec:gs \'fame\', \'village\', \'<<$ARGS[1]>>\', 100 & gt \'cheatmenu_din\', \'fame\'">+100</a> <a href="exec:gs \'fame\', \'village\', \'<<$ARGS[1]>>\', -10 & gt \'cheatmenu_din\', \'fame\'">-10</a> <a href="exec:gs \'fame\', \'village\', \'<<$ARGS[1]>>\', -100 & gt \'cheatmenu_din\', \'fame\'">-100</a> </td>');
  (s as any).table['fame'] = ((s as any).table['fame'] ?? 0) + ('<tr>');
  scene.build();
}

function enterCheatItemQty(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCheatItemToggle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
  }
  scene.build();
}

function enterCheatTattoo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[3] ?? 0) === '') {
  }
  if (((s as any).pcs_tattoos ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 0) {
    // TODO-QSP: $temp_cheat_nomsg
  } else {
    // TODO-QSP: dynamic text: <a href="exec: gs 'tattoo_management', 'remove', '<<$ARGS[1]>>' & gt 'cheatmenu_...
    scene.text(`<a href="exec: gs 'tattoo_management', 'remove', '${((s as any).locArgs?.[1] ?? 0)}' & gt 'cheatmenu_din', 'tatoo'">Remove your ${((s as any).locArgs?.[2] ?? 0)} tattoo</a>`);
  }
  scene.build();
}

function enterCheatGradeRow(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_cheat_val = ((s as any).class ?? 0)?.[String((s as any).temp_cheat_key ?? 0)];
  // TODO-QSP: *p '<<$ARGS[2]>> grade: <<temp_cheat_val>>'
  if (((s as any).temp_cheat_val ?? 0) > 0) {
    // TODO-QSP: *p ' <a href="exec:gs ''grades'', ''grade_award'', ''school'', ''<<$ARGS[1]>>'', -10 & gt ''cheatmen...
  }
  if (((s as any).temp_cheat_val ?? 0) < 100) {
    // TODO-QSP: *p ' <a href="exec:gs ''grades'', ''grade_award'', ''school'', ''<<$ARGS[1]>>'', 10 & gt ''cheatmenu...
  }
  scene.build();
}

function enterCheatBoolRow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$ARGS[2]>>: <a href="exec:cheatVars['<<$ARGS[1]>>'] = iif(cheatVars['<<$ARGS[1...
  scene.text(`${((s as any).locArgs?.[2] ?? 0)}: <a href="exec:cheatVars['${((s as any).locArgs?.[1] ?? 0)}'] = iif(cheatVars['${((s as any).locArgs?.[1] ?? 0)}'], 0, 1) & gt 'cheatmenu_din', '${((s as any).cheatmenu ?? 0)?.['this_menu']}'">${((((s as any).cheatVars ?? 0)[((s as any).locArgs?.[1] ?? 0)]) ? (((s as any).temp_cheat_on ?? 0)) : (((s as any).temp_cheat_off ?? 0)))}</a>`);
  scene.build();
}

function enterCheatNpcRel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[3] ?? 0) === '') {
  }
  // TODO-QSP: dynamic text: <<$temp_cheat_name>>: <<npc_rel[$ARGS[1]]>>  <a href="exec:gs 'npc_relationship'...
  scene.text(`${((s as any).temp_cheat_name ?? 0)}: ${((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]}  <a href="exec:gs 'npc_relationship', 'modify_exact', '${((s as any).locArgs?.[1] ?? 0)}', 10 & gt 'cheatmenu_din', '${((s as any).temp_cheat_page ?? 0)}'">+10</a> <a href="exec:gs 'npc_relationship', 'modify_exact', '${((s as any).locArgs?.[1] ?? 0)}', -10 & gt 'cheatmenu_din', '${((s as any).temp_cheat_page ?? 0)}'">-10</a>`);
  scene.build();
}

function enterCheatVarRow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $ARGS[2]+': '+dyneval('result = ' + $ARGS[1])+'  <a href="exec:<<$ARGS[1]>> += 10 & gt ''cheatmenu_d...
  scene.build();
}

function enterTraitsCheats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'cheatmenu_din', 'cheattabs', 'traits');
  (s as any).cheatmenu['this_menu'] = 'traits_cheats';
  scene.text('<center><h1>Cheat Menu - Traits & Archetypes</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<center><h3>Archetype Settings</h3></center>');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'smart_bimbo', 'Ignore Archetype penalties');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'no_archetype_withdrawal', 'Disable Archetype withdrawal');
  scene.text('<center><h3>Archetype Points</h3></center>');
  // TODO-QSP: dynamic text: Active: <<iif($arch_vars['main_active'] <> '', $arch_vars['main_active'], 'none'...
  scene.text(`Active: ${((((s as any).arch_vars ?? 0)?.['main_active'] !== '') ? (((s as any).arch_vars ?? 0)?.['main_active']) : ('none'))}`);
  // TODO-QSP: $cheat_arch[0] = 'bimbo' & $cheat_arch[1] = 'preppy' & $cheat_arch[2] = 'prude' & $cheat_arch[3] = '...
  (s as any).cheat_tp_i = 0;
  // TODO-QSP: :cheat_tp_loop
  // TODO-QSP: *p '<b><<$cheat_tp_title>></b> (<<arch_vars[$cheat_tp_k]>>): '
  // TODO-QSP: *p ' <a href="exec:arch_vars[''<<$cheat_tp_k>>''] += 10000 & gs ''archetypes'', ''clamp'', ''<<$chea...
  // TODO-QSP: *p ' <a href="exec:arch_vars[''<<$cheat_tp_k>>''] += 1000 & gs ''archetypes'', ''clamp'', ''<<$cheat...
  // TODO-QSP: *p ' <a href="exec:arch_vars[''<<$cheat_tp_k>>''] -= 1000 & gs ''archetypes'', ''clamp'', ''<<$cheat...
  // TODO-QSP: *p ' <a href="exec:arch_vars[''<<$cheat_tp_k>>''] -= 10000 & gs ''archetypes'', ''clamp'', ''<<$chea...
  // TODO-QSP: dynamic text:  <a href="exec:arch_vars['<<$cheat_tp_k>>'] = 0 & <<$cheat_tp_refresh>>">Zero</a...
  scene.text(` <a href="exec:arch_vars['${((s as any).cheat_tp_k ?? 0)}'] = 0 & ${((s as any).cheat_tp_refresh ?? 0)}">Zero</a>`);
  (s as any).cheat_tp_i = ((s as any).cheat_tp_i ?? 0) + (1);
  if (((s as any).cheat_tp_i ?? 0) < 5) {
    // TODO-QSP: jump 'cheat_tp_loop'
  }
  scene.text('<a href="exec:arch_vars[\'bimbo_points\'] = 0 & arch_vars[\'preppy_points\'] = 0 & arch_vars[\'prude_points\'] = 0 & arch_vars[\'punk_points\'] = 0 & arch_vars[\'goth_points\'] = 0 & gs \'archetypes\', \'set_active\' & gs \'archetypes\', \'seed_snapshots\' & gt \'cheatmenu_din\', \'traits_cheats\'">Reset all Archetype points</a>');
  scene.text('<center><h3>Trait Enable / Disable</h3></center>');
  scene.text('Disabling a trait prevents its daily/minute logic from running. The trait level is preserved but frozen.');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'cumeater_disabled', 'Cumeater', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'creampie_fetish_disabled', 'Creampie Fetish', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'addictive_personality_disabled', 'Addictive Personality', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'buttslut_disabled', 'Buttslut', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'exhibitionist_disabled', 'Exhibitionist', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'panty_preference_disabled', 'Panty Preference', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'drinking_disabled', 'Alcohol Tolerance', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'academic_disabled', 'Academic', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'bookworm_disabled', 'Bookworm', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'body_hair_growth_rate_disabled', 'Body Hair Growth Rate', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'body_hair_attitude_disabled', 'Body Hair Attitude', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'hair_growth_rate_disabled', 'Hair Growth Rate', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'sensitivity_disabled', 'Sensitivity', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'fertility_disabled', 'Fertility', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'sizequeen_disabled', 'Size Queen', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'fitness_freak_disabled', 'Fitness Freak', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'new_again_disabled', 'Everything Is New Again', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'heel_preference_disabled', 'Heel Preference', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'doormat_disabled', 'Doormat', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'cumslut_disabled', 'Cum Slut', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'cum_addict_disabled', 'Cum Addict', 'Disabled', 'Enabled');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'pain_tolerance_disabled', 'Pain Tolerance', 'Disabled', 'Enabled');
  scene.text('<center><h3>Trait Level Cheats</h3></center>');
  scene.text('<small>▼ to level down, ▲ to level up. Reset does what it says. Note: Some traits have negative levels.<br>Warning: Some traits or trait levels are only meant to be obtainable via specific story events. Nothing here is likely to brick your game, but you should exercise caution anyway.</small>');
  // TODO-QSP: dynamic text: Exhibitionist (<<trait_vars['exhibitionist']>>): <a href="exec:gs 'traits', 'che...
  scene.text(`Exhibitionist (${((s as any).trait_vars ?? 0)?.['exhibitionist']}): <a href="exec:gs 'traits', 'cheat', 'exhibitionist', ${((s as any).trait_vars ?? {})?.['exhibitionist'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'exhibitionist', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'exhibitionist', ${((s as any).trait_vars ?? {})?.['exhibitionist'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Commando / Panty Preference (<<trait_vars['panty_preference']>>): <a href="exec:...
  scene.text(`Commando / Panty Preference (${((s as any).trait_vars ?? 0)?.['panty_preference']}): <a href="exec:gs 'traits', 'cheat', 'panty_preference', ${((s as any).trait_vars ?? {})?.['panty_preference'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'panty_preference', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'panty_preference', ${((s as any).trait_vars ?? {})?.['panty_preference'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Buttslut (<<trait_vars['buttslut']>>): <a href="exec:gs 'traits', 'cheat', 'butt...
  scene.text(`Buttslut (${((s as any).trait_vars ?? 0)?.['buttslut']}): <a href="exec:gs 'traits', 'cheat', 'buttslut', ${((s as any).trait_vars ?? {})?.['buttslut'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'buttslut', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'buttslut', ${((s as any).trait_vars ?? {})?.['buttslut'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Academic (<<trait_vars['academic']>>): <a href="exec:gs 'traits', 'cheat', 'acad...
  scene.text(`Academic (${((s as any).trait_vars ?? 0)?.['academic']}): <a href="exec:gs 'traits', 'cheat', 'academic', ${((s as any).trait_vars ?? {})?.['academic'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'academic', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'academic', ${((s as any).trait_vars ?? {})?.['academic'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Alcohol Tolerance (<<trait_vars['drinking']>>): <a href="exec:gs 'traits', 'chea...
  scene.text(`Alcohol Tolerance (${((s as any).trait_vars ?? 0)?.['drinking']}): <a href="exec:gs 'traits', 'cheat', 'drinking', ${((s as any).trait_vars ?? {})?.['drinking'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'drinking', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'drinking', ${((s as any).trait_vars ?? {})?.['drinking'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Cumeater (<<trait_vars['cumeater']>>): <a href="exec:gs 'traits', 'cheat', 'cume...
  scene.text(`Cumeater (${((s as any).trait_vars ?? 0)?.['cumeater']}): <a href="exec:gs 'traits', 'cheat', 'cumeater', ${((s as any).trait_vars ?? {})?.['cumeater'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'cumeater', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'cumeater', ${((s as any).trait_vars ?? {})?.['cumeater'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Creampie Fetish (<<trait_vars['creampie_fetish']>>): <a href="exec:gs 'traits', ...
  scene.text(`Creampie Fetish (${((s as any).trait_vars ?? 0)?.['creampie_fetish']}): <a href="exec:gs 'traits', 'cheat', 'creampie_fetish', ${((s as any).trait_vars ?? {})?.['creampie_fetish'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'creampie_fetish', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'creampie_fetish', ${((s as any).trait_vars ?? {})?.['creampie_fetish'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Addictive Personality (<<trait_vars['addictive_personality']>>): <a href="exec:g...
  scene.text(`Addictive Personality (${((s as any).trait_vars ?? 0)?.['addictive_personality']}): <a href="exec:gs 'traits', 'cheat', 'addictive_personality', ${((s as any).trait_vars ?? {})?.['addictive_personality'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'addictive_personality', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'addictive_personality', ${((s as any).trait_vars ?? {})?.['addictive_personality'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Bookworm (<<trait_vars['bookworm']>>): <a href="exec:gs 'traits', 'cheat', 'book...
  scene.text(`Bookworm (${((s as any).trait_vars ?? 0)?.['bookworm']}): <a href="exec:gs 'traits', 'cheat', 'bookworm', ${((s as any).trait_vars ?? {})?.['bookworm'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'bookworm', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'bookworm', ${((s as any).trait_vars ?? {})?.['bookworm'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Body Hair Growth Rate (<<trait_vars['body_hair_growth_rate']>>): <a href="exec:g...
  scene.text(`Body Hair Growth Rate (${((s as any).trait_vars ?? 0)?.['body_hair_growth_rate']}): <a href="exec:gs 'traits', 'cheat', 'body_hair_growth_rate', ${((s as any).trait_vars ?? {})?.['body_hair_growth_rate'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'body_hair_growth_rate', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'body_hair_growth_rate', ${((s as any).trait_vars ?? {})?.['body_hair_growth_rate'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Body Hair Attitude (<<trait_vars['body_hair_attitude']>>): <a href="exec:gs 'tra...
  scene.text(`Body Hair Attitude (${((s as any).trait_vars ?? 0)?.['body_hair_attitude']}): <a href="exec:gs 'traits', 'cheat', 'body_hair_attitude', ${((s as any).trait_vars ?? {})?.['body_hair_attitude'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'body_hair_attitude', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'body_hair_attitude', ${((s as any).trait_vars ?? {})?.['body_hair_attitude'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Hair Growth Rate (<<trait_vars['hair_growth_rate']>>): <a href="exec:gs 'traits'...
  scene.text(`Hair Growth Rate (${((s as any).trait_vars ?? 0)?.['hair_growth_rate']}): <a href="exec:gs 'traits', 'cheat', 'hair_growth_rate', ${((s as any).trait_vars ?? {})?.['hair_growth_rate'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'hair_growth_rate', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'hair_growth_rate', ${((s as any).trait_vars ?? {})?.['hair_growth_rate'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Pain Tolerance (<<trait_vars['pain_tolerance']>>): <a href="exec:gs 'traits', 'c...
  scene.text(`Pain Tolerance (${((s as any).trait_vars ?? 0)?.['pain_tolerance']}): <a href="exec:gs 'traits', 'cheat', 'pain_tolerance', ${((s as any).trait_vars ?? {})?.['pain_tolerance'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'pain_tolerance', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'pain_tolerance', ${((s as any).trait_vars ?? {})?.['pain_tolerance'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Sensitivity (<<trait_vars['sensitivity']>>): <a href="exec:gs 'traits', 'cheat',...
  scene.text(`Sensitivity (${((s as any).trait_vars ?? 0)?.['sensitivity']}): <a href="exec:gs 'traits', 'cheat', 'sensitivity', ${((s as any).trait_vars ?? {})?.['sensitivity'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'sensitivity', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'sensitivity', ${((s as any).trait_vars ?? {})?.['sensitivity'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Fertility (<<trait_vars['fertility']>>): <a href="exec:gs 'traits', 'cheat', 'fe...
  scene.text(`Fertility (${((s as any).trait_vars ?? 0)?.['fertility']}): <a href="exec:gs 'traits', 'cheat', 'fertility', ${((s as any).trait_vars ?? {})?.['fertility'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'fertility', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'fertility', ${((s as any).trait_vars ?? {})?.['fertility'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Size Queen (<<trait_vars['sizequeen']>>): <a href="exec:gs 'traits', 'cheat', 's...
  scene.text(`Size Queen (${((s as any).trait_vars ?? 0)?.['sizequeen']}): <a href="exec:gs 'traits', 'cheat', 'sizequeen', ${((s as any).trait_vars ?? {})?.['sizequeen'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'sizequeen', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'sizequeen', ${((s as any).trait_vars ?? {})?.['sizequeen'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Fitness Freak (<<trait_vars['fitness_freak']>>): <a href="exec:gs 'traits', 'che...
  scene.text(`Fitness Freak (${((s as any).trait_vars ?? 0)?.['fitness_freak']}): <a href="exec:gs 'traits', 'cheat', 'fitness_freak', ${((s as any).trait_vars ?? {})?.['fitness_freak'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'fitness_freak', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'fitness_freak', ${((s as any).trait_vars ?? {})?.['fitness_freak'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Doormat (<<trait_vars['doormat']>>): <a href="exec:gs 'traits', 'cheat', 'doorma...
  scene.text(`Doormat (${((s as any).trait_vars ?? 0)?.['doormat']}): <a href="exec:gs 'traits', 'cheat', 'doormat', ${((s as any).trait_vars ?? {})?.['doormat'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'doormat', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'doormat', ${((s as any).trait_vars ?? {})?.['doormat'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Heel Preference (<<trait_vars['heel_preference']>>): <a href="exec:gs 'traits', ...
  scene.text(`Heel Preference (${((s as any).trait_vars ?? 0)?.['heel_preference']}): <a href="exec:gs 'traits', 'cheat', 'heel_preference', ${((s as any).trait_vars ?? {})?.['heel_preference'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'heel_preference', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'heel_preference', ${((s as any).trait_vars ?? {})?.['heel_preference'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Cum Display / Cumslut (<<trait_vars['cumslut']>>): <a href="exec:gs 'traits', 'c...
  scene.text(`Cum Display / Cumslut (${((s as any).trait_vars ?? 0)?.['cumslut']}): <a href="exec:gs 'traits', 'cheat', 'cumslut', ${((s as any).trait_vars ?? {})?.['cumslut'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'cumslut', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'cumslut', ${((s as any).trait_vars ?? {})?.['cumslut'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Cum Addict (<<trait_vars['cum_addict']>>): <a href="exec:gs 'traits', 'cheat', '...
  scene.text(`Cum Addict (${((s as any).trait_vars ?? 0)?.['cum_addict']}): <a href="exec:gs 'traits', 'cheat', 'cum_addict', ${((s as any).trait_vars ?? {})?.['cum_addict'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'cum_addict', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'cum_addict', ${((s as any).trait_vars ?? {})?.['cum_addict'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Elasticity (<<trait_vars['elasticity']>>): <a href="exec:gs 'traits', 'cheat', '...
  scene.text(`Elasticity (${((s as any).trait_vars ?? 0)?.['elasticity']}): <a href="exec:gs 'traits', 'cheat', 'elasticity', ${((s as any).trait_vars ?? {})?.['elasticity'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'elasticity', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'elasticity', ${((s as any).trait_vars ?? {})?.['elasticity'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Sleep Pattern (<<trait_vars['sleep_duration']>>): <a href="exec:gs 'traits', 'ch...
  scene.text(`Sleep Pattern (${((s as any).trait_vars ?? 0)?.['sleep_duration']}): <a href="exec:gs 'traits', 'cheat', 'sleep_duration', ${((s as any).trait_vars ?? {})?.['sleep_duration'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'sleep_duration', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'sleep_duration', ${((s as any).trait_vars ?? {})?.['sleep_duration'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  // TODO-QSP: dynamic text: Everything Is New Again (<<trait_vars['new_again']>>): <a href="exec:gs 'traits'...
  scene.text(`Everything Is New Again (${((s as any).trait_vars ?? 0)?.['new_again']}): <a href="exec:gs 'traits', 'cheat', 'new_again', ${((s as any).trait_vars ?? {})?.['new_again'] - 1}${((s as any).tc_r ?? 0)}">▼</a> <a href="exec:gs 'traits', 'cheat', 'new_again', -99${((s as any).tc_r ?? 0)}">Reset</a> <a href="exec:gs 'traits', 'cheat', 'new_again', ${((s as any).trait_vars ?? {})?.['new_again'] + 1}${((s as any).tc_r ?? 0)}">▲</a>`);
  scene.text('<center><h3>Hidden traits</h3></center>');
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'show_hidden_traits', 'Show hidden traits as inactive (reveals names and descriptions)');
  scene.text('When enabled, hidden traits that are inactive will display their name and description on the traits page instead of "???".');
  // TODO-QSP: $cheatmenu['table_end']
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'empty':
      enterEmpty(s, scene);
      break;
    case 'cheattabs':
      enterCheattabs(s, scene);
      break;
    case 'menu_exit':
      enterMenuExit(s, scene);
      break;
    case 'quicktime':
      enterQuicktime(s, scene);
      break;
    case 'dynamic':
      enterDynamic(s, scene);
      break;
    case 'vartracker':
      enterVartracker(s, scene);
      break;
    case 'index':
      enterIndex(s, scene);
      break;
    case 'addict':
      enterAddict(s, scene);
      break;
    case 'clothes_dirt':
      enterClothesDirt(s, scene);
      break;
    case 'Vibrator':
      enterVibrator(s, scene);
      break;
    case 'BimboCloth':
      enterBimboCloth(s, scene);
      break;
    case 'SmartBimbo':
      enterSmartBimbo(s, scene);
      break;
    case 'SuccuBimbo':
      enterSuccuBimbo(s, scene);
      break;
    case 'slutshot':
      enterSlutshot(s, scene);
      break;
    case 'permanent':
      enterPermanent(s, scene);
      break;
    case 'money':
      enterMoney(s, scene);
      break;
    case 'bank_money':
      enterBankMoney(s, scene);
      break;
    case 'therapist_reset':
      enterTherapistReset(s, scene);
      break;
    case 'cycle':
      enterCycle(s, scene);
      break;
    case 'std_cure':
      enterStdCure(s, scene);
      break;
    case 'set_no_periods':
      enterSetNoPeriods(s, scene);
      break;
    case 'force_preg':
      enterForcePreg(s, scene);
      break;
    case 'remove_preg':
      enterRemovePreg(s, scene);
      break;
    case 'state':
      enterState(s, scene);
      break;
    case 'set_preg_body':
      enterSetPregBody(s, scene);
      break;
    case 'set_body_class':
      enterSetBodyClass(s, scene);
      break;
    case 'bodyMod':
      enterBodyMod(s, scene);
      break;
    case 'age':
      enterAge(s, scene);
      break;
    case 'visualage':
      enterVisualage(s, scene);
      break;
    case 'avatar_hair_set':
      enterAvatarHairSet(s, scene);
      break;
    case 'rename':
      enterRename(s, scene);
      break;
    case 'reset_name':
      enterResetName(s, scene);
      break;
    case 'setLooks':
      enterSetLooks(s, scene);
      break;
    case 'setLooksInput':
      enterSetLooksInput(s, scene);
      break;
    case 'printLooksLinks':
      enterPrintLooksLinks(s, scene);
      break;
    case 'looks':
      enterLooks(s, scene);
      break;
    case 'change_avatar_path':
      enterChangeAvatarPath(s, scene);
      break;
    case 'change_pcs_mass_body':
      enterChangePcsMassBody(s, scene);
      break;
    case 'change_pcs_mass_bust':
      enterChangePcsMassBust(s, scene);
      break;
    case 'change_pcs_mass_butt':
      enterChangePcsMassButt(s, scene);
      break;
    case 'teeth':
      enterTeeth(s, scene);
      break;
    case 'vagenlarge':
      enterVagenlarge(s, scene);
      break;
    case 'vagreduce':
      enterVagreduce(s, scene);
      break;
    case 'assenlarge':
      enterAssenlarge(s, scene);
      break;
    case 'assreduce':
      enterAssreduce(s, scene);
      break;
    case 'vneshpara':
      enterVneshpara(s, scene);
      break;
    case 'parameters':
      enterParameters(s, scene);
      break;
    case 'tatoo':
      enterTatoo(s, scene);
      break;
    case 'setStat':
      enterSetStat(s, scene);
      break;
    case 'setStatInput':
      enterSetStatInput(s, scene);
      break;
    case 'setStatInputInverted':
      enterSetStatInputInverted(s, scene);
      break;
    case 'setAttrs':
      enterSetAttrs(s, scene);
      break;
    case 'setSkills':
      enterSetSkills(s, scene);
      break;
    case 'printStatLinks':
      enterPrintStatLinks(s, scene);
      break;
    case 'printStatLinksInverted':
      enterPrintStatLinksInverted(s, scene);
      break;
    case 'stats':
      enterStats(s, scene);
      break;
    case 'story':
      enterStory(s, scene);
      break;
    case 'npcs':
      enterNpcs(s, scene);
      break;
    case 'lover_menu':
      enterLoverMenu(s, scene);
      break;
    case 'input_time':
      enterInputTime(s, scene);
      break;
    case 'week':
      enterWeek(s, scene);
      break;
    case 'month':
      enterMonth(s, scene);
      break;
    case 'month2':
      enterMonth2(s, scene);
      break;
    case 'time':
      enterTime(s, scene);
      break;
    case 'magicTable':
      enterMagicTable(s, scene);
      break;
    case 'sucresetdo':
      enterSucresetdo(s, scene);
      break;
    case 'succubreset':
      enterSuccubreset(s, scene);
      break;
    case 'magic':
      enterMagic(s, scene);
      break;
    case 'pain':
      enterPain(s, scene);
      break;
    case 'fame':
      enterFame(s, scene);
      break;
    case 'bdimmain':
      enterBdimmain(s, scene);
      break;
    case 'items':
      enterItems(s, scene);
      break;
    case 'cheatPainRow':
      enterCheatPainRow(s, scene);
      break;
    case 'cheatFameRow':
      enterCheatFameRow(s, scene);
      break;
    case 'cheatItemQty':
      enterCheatItemQty(s, scene);
      break;
    case 'cheatItemToggle':
      enterCheatItemToggle(s, scene);
      break;
    case 'cheatTattoo':
      enterCheatTattoo(s, scene);
      break;
    case 'cheatGradeRow':
      enterCheatGradeRow(s, scene);
      break;
    case 'cheatBoolRow':
      enterCheatBoolRow(s, scene);
      break;
    case 'cheatNpcRel':
      enterCheatNpcRel(s, scene);
      break;
    case 'cheatVarRow':
      enterCheatVarRow(s, scene);
      break;
    case 'traits_cheats':
      enterTraitsCheats(s, scene);
      break;
    default:
      enterEmpty(s, scene);
      break;
  }
}

export const cheatmenu_din: LocationDef = {
  name: 'cheatmenu_din',
  title: 'WARNING!',
  region: 'other',
  enter: enter,
};
