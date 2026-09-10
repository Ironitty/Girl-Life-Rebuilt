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
  if (((s as any).preziktype ?? 0) === 0) {
    // TODO-QSP: dynamic text: condoms: in use(normal)/damaged/bad condoms: <<mc_inventory['equipped_condoms']+...
    scene.text(`condoms: in use(normal)/damaged/bad condoms: ${((s as any).mc_inventory ?? 0)?.['equipped_condoms']+((s as any).mc_inventory ?? 0)?.['normal_condoms']}/${((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']}/${((s as any).mc_inventory ?? 0)?.['bad_condoms']}`);
  } else {
    // TODO-QSP: dynamic text: condoms: (Not in use) normal/damaged/bad condoms: <<mc_inventory['normal_condoms...
    scene.text(`condoms: (Not in use) normal/damaged/bad condoms: ${((s as any).mc_inventory ?? 0)?.['normal_condoms']}/${((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']}/${((s as any).mc_inventory ?? 0)?.['bad_condoms']}`);
    // TODO-QSP: dynamic text: condoms: in use (damaged)/normal/bad condoms: <<mc_inventory['equipped_condoms']...
    scene.text(`condoms: in use (damaged)/normal/bad condoms: ${((s as any).mc_inventory ?? 0)?.['equipped_condoms']+((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']}/${((s as any).mc_inventory ?? 0)?.['normal_condoms']}/${((s as any).mc_inventory ?? 0)?.['bad_condoms']}`);
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
    if (((s as any).ptype ?? 0) === 0) {
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
  scene.text(`Never get addicted: <a href="exec:gs 'cheatmenu_din', 'addict' & gt 'cheatmenu_din', 'permanent'">${(((s as any).cheatVars ?? 0)?.['drugs_immune']) ? ('Enabled') : ('Disabled')}</a>`);
  // TODO-QSP: dynamic text: Enable sleeping with vibrator inserted: <a href="exec:gs 'cheatmenu_din', 'Vibra...
  scene.text(`Enable sleeping with vibrator inserted: <a href="exec:gs 'cheatmenu_din', 'Vibrator' & gt 'cheatmenu_din', 'permanent'">${(((s as any).cheatVars ?? 0)?.['sleep_vib']) ? ('Enabled') : ('Disabled')}</a>`);
  // TODO-QSP: dynamic text: Clothes never dirty: <a href="exec:gs 'cheatmenu_din', 'clothes_dirt' & gt 'chea...
  scene.text(`Clothes never dirty: <a href="exec:gs 'cheatmenu_din', 'clothes_dirt' & gt 'cheatmenu_din', 'permanent'">${(((s as any).cheatVars ?? 0)?.['clothes_dirt']) ? ('Enabled') : ('Disabled')}</a>`);
  // TODO-QSP: dynamic text: Clothing Archetypes and the effects of wearing special clothes: <a href="exec:gs...
  scene.text(`Clothing Archetypes and the effects of wearing special clothes: <a href="exec:gs 'cheatmenu_din', 'BimboCloth' & gt 'cheatmenu_din', 'permanent'">${(((s as any).cheatVars ?? 0)?.['bimbo']) ? ('Disabled') : ('Enabled')}</a>`);
  if (((s as any).cheatVars ?? 0)?.['bimbo'] === 0) {
    // TODO-QSP: dynamic text:   Succubus clothing invulnerability: <a href="exec:gs 'cheatmenu_din', 'SuccuBim...
    scene.text(`  Succubus clothing invulnerability: <a href="exec:gs 'cheatmenu_din', 'SuccuBimbo' & gt 'cheatmenu_din', 'permanent'">${(((s as any).cheatVars ?? 0)?.['suc_bimbo']) ? ('Enabled') : ('Disabled')}</a>`);
  }
  qspCall(s, 'cheatmenu_din', 'cheatBoolRow', 'always_horny', 'Set arousal to always be at 50 or more');
  // TODO-QSP: dynamic text: Periods (and pregnancies): <a href="exec:gs 'cheatmenu_din', 'slutshot' & gt 'ch...
  scene.text(`Periods (and pregnancies): <a href="exec:gs 'cheatmenu_din', 'slutshot' & gt 'cheatmenu_din', 'permanent'">${(((s as any).cheatVars ?? 0)?.['no_periods']) ? ('Disabled') : ('Enabled')}</a>`);
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
  (s as any).money = qspUntranslated(s, "input(\"How much money do you want to have?\")", { location: "cheatmenu_din" });
  if (((s as any).money ?? 0) < 0) {
    (s as any).money = 0;
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'state'] }]);
  scene.build();
}

function enterBankMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).karta = qspUntranslated(s, "input(\"How much money do you want to have in the bank?\")", { location: "cheatmenu_din" });
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
  if (((s as any).preg ?? 0) === 0) {
    scene.text('<a href="exec:gs \'cheatmenu_din\', \'force_preg\' & gs \'stat\' & gt \'cheatmenu_din\', \'state\'">Force random pregnancy</a>');
    if (((s as any).cycle ?? 0) !== 5) {
      scene.text('<a href="exec: gs \'stat\'');
      // TODO-QSP: gt ''cheatmenu_din'', ''cycle''">Set stage of menstrual cycle</a>'
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
      // TODO-QSP: dynamic text: The milk production is <a href="exec: lactation['milkprod_type'] = 1 & gt 'cheat...
      scene.text(`The milk production is <a href="exec: lactation['milkprod_type'] = 1 & gt 'cheatmenu_din', 'state'">permanent</a>. ${((s as any).pcs_firstname ?? 0)} will produce breast milk disregarding her condition.`);
      (s as any).lactation['milkprod_type'] = 1;
    }
    if (((s as any).lactation ?? 0)?.['lactaterate'] <= 0) {
      // TODO-QSP: dynamic text: Lactate Rate: <<lactation['lactaterate']/1000>>ml/h <a href="exec:lactation['lac...
      scene.text(`Lactate Rate: ${((s as any).lactation ?? 0)?.['lactaterate']/1000}ml/h <a href="exec:lactation['lactaterate'] += 10000 & gt 'cheatmenu_din', 'state'">+10</a>`);
    } else {
      // TODO-QSP: dynamic text: Lactate Rate: <a href="exec:lactation['lactaterate'] -= 10000 & gt 'cheatmenu_di...
      scene.text(`Lactate Rate: <a href="exec:lactation['lactaterate'] -= 10000 & gt 'cheatmenu_din', 'state'">-10</a> ${((s as any).lactation ?? 0)?.['lactaterate']/1000}ml/h`);
      // TODO-QSP: dynamic text: Lactate Rate: <a href="exec:lactation['lactaterate'] -= 10000 & gt 'cheatmenu_di...
      scene.text(`Lactate Rate: <a href="exec:lactation['lactaterate'] -= 10000 & gt 'cheatmenu_din', 'state'">-10</a> ${((s as any).lactation ?? 0)?.['lactaterate']/1000}ml/h <a href="exec:lactation['lactaterate'] += 10000 & gt 'cheatmenu_din', 'state'">+10</a>`);
      // TODO-QSP: 'Cap Lactate Rate: ' + iif(lactation['milkprod_type'] = 0 and lactation['caplactaterate'] > 0, '<a h...
      // TODO-QSP: dynamic text: <font color="grey">Cap lactate rate makes lactate rate stop growing if <<$pcs_fi...
      scene.text(`<font color="grey">Cap lactate rate makes lactate rate stop growing if ${((s as any).pcs_firstname ?? 0)} needs milking more often.</font>`);
    }
    // TODO-QSP: dynamic text: Milk in Breasts: <<lactation['breastmv']/1000>>ml
    scene.text(`Milk in Breasts: ${((s as any).lactation ?? 0)?.['breastmv']/1000}ml`);
    // TODO-QSP: dynamic text: Max Milk Storage: <<lactation['breastmm']/1000>>ml
    scene.text(`Max Milk Storage: ${((s as any).lactation ?? 0)?.['breastmm']/1000}ml`);
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
    if ((((s as any).pregChem ?? 0) < 2688) === 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 100"><<func('body_structure'...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 100">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 100)}</a>`);
      scene.text('');
    }
    if ((((s as any).pregChem ?? 0) >= 2688  &&  ((s as any).pregChem ?? 0) < 3192) === 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 2688"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 2688">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 2688)}</a>`);
      scene.text('');
    }
    if ((((s as any).pregChem ?? 0) >= 3192  &&  ((s as any).pregChem ?? 0) < 3696) === 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 3192"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 3192">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 3192)}</a>`);
      scene.text('');
    }
    if ((((s as any).pregChem ?? 0) >= 3696  &&  ((s as any).pregChem ?? 0) < 4200) === 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 3696"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 3696">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 3696)}</a>`);
      scene.text('');
    }
    if ((((s as any).pregChem ?? 0) >= 4200  &&  ((s as any).pregChem ?? 0) < 4704) === 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 4200"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 4200">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 4200)}</a>`);
      scene.text('');
    }
    if ((((s as any).pregChem ?? 0) >= 4704  &&  ((s as any).pregChem ?? 0) < 5208) === 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 4704"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 4704">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 4704)}</a>`);
      scene.text('');
    }
    if ((((s as any).pregChem ?? 0) >= 5208  &&  ((s as any).pregChem ?? 0) < 5712) === 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 5208"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 5208">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 5208)}</a>`);
      scene.text('');
    }
    if ((((s as any).pregChem ?? 0) >= 5712  &&  ((s as any).pregChem ?? 0) < 6216) === 0) {
      // TODO-QSP: dynamic text: <a href="exec: gs 'cheatmenu_din', 'set_preg_body', 5712"><<func('body_structure...
      scene.text(`<a href="exec: gs 'cheatmenu_din', 'set_preg_body', 5712">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0), 5712)}</a>`);
      scene.text('');
    }
    if ((((s as any).pregChem ?? 0) >= 6216) === 0) {
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
  (s as any).vidage = qspUntranslated(s, "input(\"For how many years you want to look?\")", { location: "cheatmenu_din" });
  if (((s as any).vidage ?? 0) <= 14) {
    (s as any).vidage = 14;
  }
  scene.actions([{ label: 'Continue', goto: ['cheatmenu_din', 'looks'] }]);
  scene.build();
}

function enterAvatarHairSet(s: GameState, scene: SceneBuilder): void {
  (s as any).face_style['avatar_hair'] = qspUntranslated(s, "input(\"Input your custom hair:\")", { location: "cheatmenu_din" });
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
  if (((s as any).isnum ?? 0)(((s as any).temp_input ?? 0)) !== 0) {
    qspCall(s, 'shortgs', 'setStat', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "val(temp_input)", { location: "cheatmenu_din" }));
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
    (s as any).pcs_hgt = 200;
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
    // TODO-QSP: '<a href="exec:pcs_brace = 0
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Remove braces</a>'
  }
  if (((s as any).pcs_missing_teeth ?? 0) > 0) {
    // TODO-QSP: '<a href="exec:pcs_missing_teeth = 0
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Restore missing teeth</a>'
  }
  // TODO-QSP: dynamic text: You have <<$titsize>> breasts
  scene.text(`You have ${((s as any).titsize ?? 0)} breasts`);
  if (((s as any).tits ?? 0) < 11) {
    // TODO-QSP: '<a href="exec: bodyVars[''bust_silicone''] += 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Enlarge breasts(silicone)</a>'
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] >= 1) {
    // TODO-QSP: '<a href="exec: bodyVars[''bust_silicone''] = min(0, bodyVars[''bust_silicone'']-5)
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Shrink breasts(silicone)</a>'
  }
  if (((s as any).tits ?? 0) < 11  &&  ((s as any).pcs_mass ?? 0)?.['bust_gen'] < 50) {
    scene.text('<a href="exec: gs \'cheatmenu_din\', \'change_pcs_mass_bust\', 5">Enlarge breasts (natural)</a>');
  }
  if (((s as any).pcs_mass ?? 0)?.['bust'] >= 6  &&  ((s as any).pcs_mass ?? 0)?.['bust_gen'] >= 6) {
    // TODO-QSP: '<a href="exec: titreduc = 1
    // TODO-QSP: gs ''cheatmenu_din'', ''change_pcs_mass_bust'', -5">Shrink breasts (natural)</a>'
  }
  // TODO-QSP: dynamic text: You have a <<$pc_desc['butt']>> butt.
  scene.text(`You have a ${((s as any).pc_desc ?? 0)?.['butt']} butt.`);
  if (((s as any).pcs_buttsize ?? 0) < 50) {
    // TODO-QSP: '<a href="exec: bodyVars[''butt_silicone''] += 10
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Enlarge butt (silicone)</a>'
  }
  if (((s as any).bodyVars ?? 0)?.['butt_silicone'] >= 1) {
    // TODO-QSP: '<a href="exec: bodyVars[''butt_silicone''] = max(0, bodyVars[''butt_silicone'']-10)
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Shrink butt (silicone)</a>'
  }
  if (((s as any).pcs_mass ?? 0)?.['butt'] < 50  &&  ((s as any).pcs_mass ?? 0)?.['butt_gen'] < 50) {
    scene.text('<a href="exec: gs \'cheatmenu_din\', \'change_pcs_mass_butt\', 10">Enlarge butt (natural)</a>');
  }
  if (((s as any).pcs_mass ?? 0)?.['butt'] >= 6  &&  ((s as any).pcs_mass ?? 0)?.['butt_gen'] >= 6) {
    // TODO-QSP: '<a href="exec: assreduc = 1
    // TODO-QSP: gs ''cheatmenu_din'', ''change_pcs_mass_butt'', -10">Shrink butt (natural)</a>'
  }
  // TODO-QSP: dynamic text: <<$pc_descFull['lip']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['lip']}`);
  if (((s as any).pcs_lip ?? 0) < 4) {
    // TODO-QSP: '<a href="exec:pcs_lip += 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Enlarge lips</a>'
  }
  if (((s as any).pcs_lip ?? 0) > 0) {
    // TODO-QSP: '<a href="exec:pcs_lip -= 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Shrink lips</a>'
  }
  // TODO-QSP: dynamic text: <<$nipplesize >> (<<pcs_nips>>)
  scene.text(`${((s as any).nipplesize ?? 0)} (${((s as any).pcs_nips ?? 0)})`);
  if (((s as any).pcs_nips ?? 0) <= 95) {
    // TODO-QSP: '<a href="exec:pcs_nips += 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Enlarge nipples</a>'
  }
  if (((s as any).pcs_nips ?? 0) >= 5) {
    // TODO-QSP: '<a href="exec:pcs_nips -= 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Shrink nipples</a>'
  }
  // TODO-QSP: dynamic text: <<$clitsize>> (<<clit_size>>)
  scene.text(`${((s as any).clitsize ?? 0)} (${((s as any).clit_size ?? 0)})`);
  if (((s as any).clit_size ?? 0) <= 95) {
    // TODO-QSP: '<a href="exec:clit_size += 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Enlarge clit</a>'
  }
  if (((s as any).clit_size ?? 0) >= 5) {
    // TODO-QSP: '<a href="exec:clit_size -= 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Shrink clit</a>'
  }
  scene.text('</td><td width="33%" valign="top">');
  // TODO-QSP: dynamic text: <<$pc_descFull['skin']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['skin']}`);
  if (((s as any).pcs_skin ?? 0) < 900) {
    // TODO-QSP: '<a href="exec:pcs_skin += 200
    // TODO-QSP: gs ''AppearanceSystem'', ''UpdateBaseAppearance''
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Improve skin</a>'
  }
  if (((s as any).pcs_skin ?? 0) > 0) {
    // TODO-QSP: '<a href="exec:pcs_skin -= 200
    // TODO-QSP: gs ''AppearanceSystem'', ''UpdateBaseAppearance''
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Worsen skin</a>'
  }
  if (((s as any).pcs_tan ?? 0) >= 0) {
    // TODO-QSP: '<a href="exec:pcs_tan += 10
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Become tanned</a>'
  }
  if (((s as any).pcs_tan ?? 0) > 0) {
    // TODO-QSP: '<a href="exec:pcs_tan = 0
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Remove tan</a>'
  }
  // TODO-QSP: dynamic text: <<$pc_descFull['throat']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['throat']}`);
  if (((s as any).pcs_throat ?? 0) <= 31) {
    // TODO-QSP: '<a href="exec:pcs_throat += 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Increase throat capacity</a>'
  }
  if (((s as any).pcs_throat ?? 0) >= 5) {
    // TODO-QSP: '<a href="exec:pcs_throat -= 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Decrease throat capacity</a>'
  }
  if (((s as any).dounspell ?? 0) === 1) {
    scene.text('<a href="exec:dounsplkil = 2 & gs \'body\', \'hardreset\'">Hard Reset body shape</a>');
  }
  // TODO-QSP: dynamic text: <<$pcs_vag_txt>>
  scene.text(`${((s as any).pcs_vag_txt ?? 0)}`);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    // TODO-QSP: '<a href="exec:pcs_vag = 20
    // TODO-QSP: killvar''virgin_stats''
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Reinstate virginity</a>'
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] < 1) {
    // TODO-QSP: '<a href="exec:stat[''vaginal''] = 0
    // TODO-QSP: stat[''vaginal_fist''] = 0
    // TODO-QSP: stat[''vaginal_dildo''] = 0
    // TODO-QSP: stat[''vaginal_strap''] = 0
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Make <<$pcs_nickname>> believe she is a virgin again (resets the re...
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
    // TODO-QSP: '<a href="exec:vshrink += 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Increase amount of reduction</a>'
  }
  if (((s as any).vshrink ?? 0) > 0) {
    // TODO-QSP: '<a href="exec:vshrink -= 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Reduce amount of reduction</a>'
  }
  if (((s as any).vshrinkdays ?? 0) < 10) {
    // TODO-QSP: '<a href="exec:vshrinkdays += 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Increase number of days it takes</a>'
  }
  if (((s as any).vshrinkdays ?? 0) > 1) {
    // TODO-QSP: '<a href="exec:vshrinkdays -= 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Reduce number of days it takes</a>'
  }
  // TODO-QSP: dynamic text: When gaped your vagina will reduce each stage (up to 4 for maximum gape) every <...
  scene.text(`When gaped your vagina will reduce each stage (up to 4 for maximum gape) every ${qspUntranslated(s, "vgape[5]", { location: "cheatmenu_din" })} minutes.`);
  if (((s as any).vgape ?? 0)[4] < 60) {
    // TODO-QSP: '<a href="exec:vgape[4] += 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Increase time by 5 minutes (before traits)</a>'
  }
  if (((s as any).vgape ?? 0)[4] > 5) {
    // TODO-QSP: '<a href="exec:vgape[4] -= 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Reduce time by 5 minutes</a>'
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
    // TODO-QSP: '<a href="exec:ashrink += 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Increase amount of reduction</a>'
  }
  if (((s as any).ashrink ?? 0) > 0) {
    // TODO-QSP: '<a href="exec:ashrink -= 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Reduce amount of reduction</a>'
  }
  if (((s as any).ashrinkdays ?? 0) < 10) {
    // TODO-QSP: '<a href="exec:ashrinkdays += 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Increase number of days it takes</a>'
  }
  if (((s as any).ashrinkdays ?? 0) > 1) {
    // TODO-QSP: '<a href="exec:ashrinkdays -= 1
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Reduce number of days it takes</a>'
  }
  // TODO-QSP: dynamic text: When gaped your anus will reduce each stage (up to 4 for maximum gape) every <<a...
  scene.text(`When gaped your anus will reduce each stage (up to 4 for maximum gape) every ${qspUntranslated(s, "agape[5]", { location: "cheatmenu_din" })} minutes.`);
  if (((s as any).agape ?? 0)[4] < 60) {
    // TODO-QSP: '<a href="exec:agape[4] += 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Increase time by 5 minutes (before traits)</a>'
  }
  if (((s as any).agape ?? 0)[4] > 5) {
    // TODO-QSP: '<a href="exec:agape[4] -= 5
    // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Reduce time by 5 minutes</a>'
  }
  scene.text('</td><td width="33%" valign="top">');
  if (((s as any).dounspell ?? 0) === 0) {
    if (((s as any).fat ?? 0) !== 0) {
      // TODO-QSP: '<a href="exec:fat = 0
      // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Zero fat</a>'
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
  if (((s as any).pcs_haircol ?? 0) === 0) {
    // TODO-QSP: dynamic text: Your hair is now (prev) <<$pcs_haircolor>> <a href="exec:pcs_haircol +=1 & gt 'c...
    scene.text(`Your hair is now (prev) ${((s as any).pcs_haircolor ?? 0)} <a href="exec:pcs_haircol +=1 & gt 'cheatmenu_din', 'looks' & nathcol = pcs_haircol">(next)</a>`);
  } else {
    // TODO-QSP: dynamic text: Your hair is now <a href="exec:pcs_haircol -=1 & gt 'cheatmenu_din', 'looks'" & ...
    scene.text(`Your hair is now <a href="exec:pcs_haircol -=1 & gt 'cheatmenu_din', 'looks'" & nathcol = pcs_haircol>(prev)</a> ${((s as any).pcs_haircolor ?? 0)} <a href="exec:pcs_haircol +=1 & gt 'cheatmenu_din', 'looks'" & pcs_haircol = nathcol>(next)</a>`);
    if (((s as any).pcs_haircol ?? 0) === 3) {
      // TODO-QSP: dynamic text: Your hair is now <a href="exec:pcs_haircol -=1 & gt 'cheatmenu_din', 'looks'" & ...
      scene.text(`Your hair is now <a href="exec:pcs_haircol -=1 & gt 'cheatmenu_din', 'looks'" & nathcol = pcs_haircol>(prev)</a> ${((s as any).pcs_haircolor ?? 0)} (next)`);
    } else {
      scene.text('To change your natural hair color, you have to <a href="exec:pcs_haircol = nathcol & gt \'cheatmenu_din\', \'looks\'">restore your natural hair color</a> first.');
    }
    if (((s as any).pcs_hairlng ?? 0) > 975) {
      // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_...
      scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_din', 'looks'">-100</a> <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_din', 'looks'">-25</a> <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a>`);
    } else {
      // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_...
      scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_din', 'looks'">-100</a> <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_din', 'looks'">-25</a> <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a>`);
      if (((s as any).pcs_hairlng ?? 0) >= 100) {
        // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_...
        scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 100 & gt 'cheatmenu_din', 'looks'">-100</a> <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_din', 'looks'">-25</a> <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a> <a href="exec:pcs_hairlng += 100 & gt 'cheatmenu_din', 'looks'">+100</a>`);
      } else {
        // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_d...
        scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 25 & gt 'cheatmenu_din', 'looks'">-25</a> <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a> <a href="exec:pcs_hairlng += 100 & gt 'cheatmenu_din', 'looks'">+100</a>`);
        if (((s as any).pcs_hairlng ?? 0) >= 5) {
          // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_di...
          scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng -= 5 & gt 'cheatmenu_din', 'looks'">-5</a> <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a> <a href="exec:pcs_hairlng += 100 & gt 'cheatmenu_din', 'looks'">+100</a>`);
        } else {
          // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_di...
          scene.text(`Hair length (${((s as any).pcs_hairlng ?? 0)})  <a href="exec:pcs_hairlng += 5 & gt 'cheatmenu_din', 'looks'">+5</a> <a href="exec:pcs_hairlng += 25 & gt 'cheatmenu_din', 'looks'">+25</a> <a href="exec:pcs_hairlng += 100 & gt 'cheatmenu_din', 'looks'">+100</a>`);
        }
        if (((s as any).hairgrowcht ?? 0) === 0) {
          // TODO-QSP: '<a href="exec:hairgrowcht = 1
          // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Stop hair growth</a>'
        }
        if (((s as any).hairgrowcht ?? 0) === 1) {
          // TODO-QSP: '<a href="exec:hairgrowcht = 0
          // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Allow hair growth</a>'
        }
        // TODO-QSP: dynamic text: <<$pc_descFull['eyes']>>
        scene.text(`${((s as any).pc_descFull ?? 0)?.['eyes']}`);
        if (((s as any).pcs_naturallashes ?? 0) < 2) {
          // TODO-QSP: '<a href="exec:pcs_naturallashes += 1
          // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Enlarge lashes</a>'
        }
        if (((s as any).pcs_naturallashes ?? 0) > 0) {
          // TODO-QSP: '<a href="exec:pcs_naturallashes -= 1
          // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Shrink lashes</a>'
        }
        if (((s as any).pcs_eyesize ?? 0) < 3) {
          // TODO-QSP: '<a href="exec:pcs_eyesize += 1
          // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Increase the size of the eye</a>'
        }
        if (((s as any).pcs_eyesize ?? 0) > 0) {
          // TODO-QSP: '<a href="exec:pcs_eyesize -= 1
          // TODO-QSP: gt ''cheatmenu_din'', ''looks''">Reduce the size of the eye</a>'
        }
        if (((s as any).pcs_eyecol ?? 0) <= 0) {
          // TODO-QSP: dynamic text: Your eyes are now (prev) <<$pcs_eyecolor>> <a href="exec:pcs_eyecol +=1 & gt 'ch...
          scene.text(`Your eyes are now (prev) ${((s as any).pcs_eyecolor ?? 0)} <a href="exec:pcs_eyecol +=1 & gt 'cheatmenu_din', 'looks'">(next)</a>`);
        } else {
          // TODO-QSP: dynamic text: Your eyes are now <a href="exec:pcs_eyecol -=1 & gt 'cheatmenu_din', 'looks'">(p...
          scene.text(`Your eyes are now <a href="exec:pcs_eyecol -=1 & gt 'cheatmenu_din', 'looks'">(prev)</a> ${((s as any).pcs_eyecolor ?? 0)} <a href="exec:pcs_eyecol +=1 & gt 'cheatmenu_din', 'looks'">(next)</a>`);
          if (((s as any).pcs_eyecol ?? 0) >= 3) {
            // TODO-QSP: dynamic text: Your eyes are now <a href="exec:pcs_eyecol -=1 & gt 'cheatmenu_din', 'looks'">(p...
            scene.text(`Your eyes are now <a href="exec:pcs_eyecol -=1 & gt 'cheatmenu_din', 'looks'">(prev)</a> ${((s as any).pcs_eyecolor ?? 0)} (next)`);
          }
          scene.text('</td></tr></table>');
        }
        (s as any).cheatmenu['change_avatar_path'] = 'gs \'cheatmenu_din\', \'change_avatar_path\'';
      }
    }
  }
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
