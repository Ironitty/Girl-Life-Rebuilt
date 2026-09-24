import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEmpty(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "cheatmenu_din" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
  }
  qspCall(s, 'tabhead', 'menu_page');
  // TODO-QSP: end
  scene.actions([
    { label: 'Settings menu', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_din', '');
  }, goto: ['$menu_settings', ''] },
    { label: 'Emergency Exit', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_din', '');
  }, goto: ['obj_din', 'emergency'] },
    { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_din', '');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['quicktime'] = 'gs \'cheatmenu_din\', \'quicktime\', ARGS[0]';
  scene.build();
}

function enterQuicktime(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'outdoors', 'weather');
  qspCall(s, 'fertility', 'cum_arrcheat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['dynamic'] = 'gs \'cheatmenu_din\', \'dynamic\'';
  scene.build();
}

function enterDynamic(s: GameState, scene: SceneBuilder): void {
  (s as any).dynamicCommand = window.prompt("Enter command to execute.") ?? '';
  if (((s as any).dynamicCommand ?? 0) !== '') {
    // TODO-QSP: dynamic $dynamicCommand
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['vartracker'] = 'gt \'cheatmenu_din\', \'vartracker\'';
  scene.build();
}

function enterVartracker(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Cheat menu</h1></center>');
  scene.text('<center>For testing purposes.<br>If reporting a bug only the lines in red are necessary.</center>');
  // TODO-QSP: dynamic text: $loc: <<$loc>>
  scene.text(`$loc: ${((s as any).loc ?? '')}`);
  // TODO-QSP: dynamic text: $locM: <<$locM>>
  scene.text(`$locM: ${((s as any).locM ?? '')}`);
  // TODO-QSP: dynamic text: <font color = red>$CURLOC: <<$CURLOC>></font>
  scene.text(`<font color = red>$CURLOC: ${((s as any).CURLOC ?? '')}</font>`);
  // TODO-QSP: dynamic text: $location_type: <<$location_type>>
  scene.text(`$location_type: ${((s as any).location_type ?? '')}`);
  // TODO-QSP: dynamic text: $home[''current'']: <<$home[''current'']>>
  scene.text(`$home['current']: ${(((s as any).home ?? 0)?.['current'] ?? '')}`);
  // TODO-QSP: dynamic text: $home[''town'']: <<$home[''town'']>>
  scene.text(`$home['town']: ${(((s as any).home ?? 0)?.['town'] ?? '')}`);
  // TODO-QSP: dynamic text: $home[''name'']: <<$home[''name'']>>
  scene.text(`$home['name']: ${(((s as any).home ?? 0)?.['name'] ?? '')}`);
  // TODO-QSP: dynamic text: daystart: <<daystart>>
  scene.text(`daystart: ${((s as any).daystart ?? '')}`);
  // TODO-QSP: dynamic text: daystart_start: <<daystart_start>>
  scene.text(`daystart_start: ${((s as any).daystart_start ?? '')}`);
  // TODO-QSP: dynamic text: month: <<month>>
  scene.text(`month: ${((s as any).month ?? '')}`);
  // TODO-QSP: dynamic text: week: <<week>>
  scene.text(`week: ${((s as any).week ?? '')}`);
  // TODO-QSP: dynamic text: $temperature: <<$temperature>>
  scene.text(`$temperature: ${((s as any).temperature ?? '')}`);
  // TODO-QSP: dynamic text: porn bookings active: <<job_bookings_active[''city_pornstudio_actress'']>>
  scene.text(`porn bookings active: ${(((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress'] ?? '')}`);
  // TODO-QSP: dynamic text: porndays: <<porndays>>
  scene.text(`porndays: ${((s as any).porndays ?? '')}`);
  // TODO-QSP: dynamic text: $pfname: <<$pfname>>
  scene.text(`$pfname: ${((s as any).pfname ?? '')}`);
  // TODO-QSP: dynamic text: modelmon: <<modelmon>>
  scene.text(`modelmon: ${((s as any).modelmon ?? '')}`);
  // TODO-QSP: dynamic text: min_arousal: <<min_arousal>>
  scene.text(`min_arousal: ${((s as any).min_arousal ?? '')}`);
  // TODO-QSP: dynamic text: pcs_nips: <<pcs_nips>>
  scene.text(`pcs_nips: ${((s as any).pcs_nips ?? '')}`);
  // TODO-QSP: dynamic text: clit_size: <<clit_size>>
  scene.text(`clit_size: ${((s as any).clit_size ?? '')}`);
  // TODO-QSP: dynamic text: steroids: <<mc_inventory[''steroids'']>>
  scene.text(`steroids: ${(((s as any).mc_inventory ?? 0)?.['steroids'] ?? '')}`);
  // TODO-QSP: dynamic text: steroids_used: <<drugVars[''steroids_used'']>>
  scene.text(`steroids_used: ${(((s as any).drugVars ?? 0)?.['steroids_used'] ?? '')}`);
  // TODO-QSP: dynamic text: steroid_dose: <<drugVars[''steroids_dose'']>>
  scene.text(`steroid_dose: ${(((s as any).drugVars ?? 0)?.['steroids_dose'] ?? '')}`);
  // TODO-QSP: dynamic text: aphrodisiac pills: <<mc_inventory[''aphrodisiac'']>>
  scene.text(`aphrodisiac pills: ${(((s as any).mc_inventory ?? 0)?.['aphrodisiac'] ?? '')}`);
  // TODO-QSP: dynamic text: aphrodisiac_counter: <<aphrodisiac_counter>>
  scene.text(`aphrodisiac_counter: ${((s as any).aphrodisiac_counter ?? '')}`);
  // TODO-QSP: dynamic text: aphrodisiac_timer: <<drugVars[''aphrodisiac_timer'']>>
  scene.text(`aphrodisiac_timer: ${(((s as any).drugVars ?? 0)?.['aphrodisiac_timer'] ?? '')}`);
  // TODO-QSP: dynamic text: aphrodisiac_addiction: <<drugVars[''aphrodisiac_addict'']>>
  scene.text(`aphrodisiac_addiction: ${(((s as any).drugVars ?? 0)?.['aphrodisiac_addict'] ?? '')}`);
  // TODO-QSP: dynamic text: breastcream: <<mc_inventory[''breastcream'']>>
  scene.text(`breastcream: ${(((s as any).mc_inventory ?? 0)?.['breastcream'] ?? '')}`);
  // TODO-QSP: dynamic text: motherQW: <<npc_QW[''A29'']>>
  scene.text(`motherQW: ${(((s as any).npc_QW ?? 0)?.['A29'] ?? '')}`);
  // TODO-QSP: dynamic text: Anastasia quest level: <<npc_QW[''A192'']>>
  scene.text(`Anastasia quest level: ${(((s as any).npc_QW ?? 0)?.['A192'] ?? '')}`);
  // TODO-QSP: dynamic text: sex: <<stat[''vaginal'']>>
  scene.text(`sex: ${(((s as any).stat ?? 0)?.['vaginal'] ?? '')}`);
  // TODO-QSP: dynamic text: $clothingworntype: <<$clothingworntype>>
  scene.text(`$clothingworntype: ${((s as any).clothingworntype ?? '')}`);
  // TODO-QSP: dynamic text: PCloQuality: <<PCloQuality>>
  scene.text(`PCloQuality: ${((s as any).PCloQuality ?? '')}`);
  // TODO-QSP: dynamic text: Mira''s Father Quest (npc_QW[''A64'']): <<npc_QW[''A64'']>>
  scene.text(`Mira's Father Quest (npc_QW['A64']): ${(((s as any).npc_QW ?? 0)?.['A64'] ?? '')}`);
  // TODO-QSP: dynamic text: Mira''s Quest (MiraVars[''QW'']): <<MiraVars[''QW'']>>
  scene.text(`Mira's Quest (MiraVars['QW']): ${(((s as any).MiraVars ?? 0)?.['QW'] ?? '')}`);
  // TODO-QSP: dynamic text: MiraVars[''Mitka_fucks'']: <<MiraVars[''Mitka_fucks'']>>
  scene.text(`MiraVars['Mitka_fucks']: ${(((s as any).MiraVars ?? 0)?.['Mitka_fucks'] ?? '')}`);
  // TODO-QSP: dynamic text: Mira''s Relationship (npc_rel[''A60'']): <<npc_rel[''A60'']>>
  scene.text(`Mira's Relationship (npc_rel['A60']): ${(((s as any).npc_rel ?? 0)?.['A60'] ?? '')}`);
  // TODO-QSP: dynamic text: Mitka''s Quest (npc_QW[''A63'']): <<npc_QW[''A63'']>>
  scene.text(`Mitka's Quest (npc_QW['A63']): ${(((s as any).npc_QW ?? 0)?.['A63'] ?? '')}`);
  // TODO-QSP: dynamic text: mirabrosextime: <<mirabrosextime>>
  scene.text(`mirabrosextime: ${((s as any).mirabrosextime ?? '')}`);
  // TODO-QSP: dynamic text: momslut: <<momslut>>
  scene.text(`momslut: ${((s as any).momslut ?? '')}`);
  // TODO-QSP: dynamic text: Kirill''s Relationship (Kirill): <<Kirill>>
  scene.text(`Kirill's Relationship (Kirill): ${((s as any).Kirill ?? '')}`);
  // TODO-QSP: dynamic text: Kirill''s Corruption (Kirill_Crpt): <<Kirill_Crpt>>
  scene.text(`Kirill's Corruption (Kirill_Crpt): ${((s as any).Kirill_Crpt ?? '')}`);
  // TODO-QSP: dynamic text: children: <<kid>>
  scene.text(`children: ${((s as any).kid ?? '')}`);
  // TODO-QSP: dynamic text: fetus number: <<BabyEmbryo>>
  scene.text(`fetus number: ${((s as any).BabyEmbryo ?? '')}`);
  // TODO-QSP: dynamic text: pregnancy state: <<preg>>
  scene.text(`pregnancy state: ${((s as any).preg ?? '')}`);
  // TODO-QSP: dynamic text: thinkpreg: <<thinkpreg>>
  scene.text(`thinkpreg: ${((s as any).thinkpreg ?? '')}`);
  // TODO-QSP: dynamic text: knowpreg: <<knowpreg>>
  scene.text(`knowpreg: ${((s as any).knowpreg ?? '')}`);
  // TODO-QSP: dynamic text: knowpregrecover: <<knowpregrecover>>
  scene.text(`knowpregrecover: ${((s as any).knowpregrecover ?? '')}`);
  // TODO-QSP: dynamic text: knowpregloss: <<knowpregloss>>
  scene.text(`knowpregloss: ${((s as any).knowpregloss ?? '')}`);
  // TODO-QSP: dynamic text: cycle: <<cycle>>
  scene.text(`cycle: ${((s as any).cycle ?? '')}`);
  // TODO-QSP: dynamic text: menoage: <<menoage>>
  scene.text(`menoage: ${((s as any).menoage ?? '')}`);
  // TODO-QSP: dynamic text: age: <<age>>
  scene.text(`age: ${((s as any).age ?? '')}`);
  // TODO-QSP: dynamic text: mesec: <<mesec>>
  scene.text(`mesec: ${((s as any).mesec ?? '')}`);
  // TODO-QSP: dynamic text: focH: <<focH>>
  scene.text(`focH: ${((s as any).focH ?? '')}`);
  // TODO-QSP: dynamic text: EggRH: <<EggRH>>
  scene.text(`EggRH: ${((s as any).EggRH ?? '')}`);
  // TODO-QSP: dynamic text: Ovulate: <<Ovulate>>
  scene.text(`Ovulate: ${((s as any).Ovulate ?? '')}`);
  // TODO-QSP: dynamic text: UnfertEgg: <<UnfertEgg>>
  scene.text(`UnfertEgg: ${((s as any).UnfertEgg ?? '')}`);
  // TODO-QSP: dynamic text: FertEgg: <<FertEgg>>
  scene.text(`FertEgg: ${((s as any).FertEgg ?? '')}`);
  if (((s as any).FertEgg ?? 0) > 0) {
    (s as any).i = qspUntranslated(s, "arrpos('kidname', 'unborn')", { location: "cheatmenu_din" });
    (s as any).imax = 0;
    // TODO-QSP: :chlp
    // TODO-QSP: dynamic text:   <<i+1>>. baby''s pregnancy type: <<babyptype[i]>>
    scene.text(`  ${((s as any).i ?? '')+1}. baby's pregnancy type: ${(((s as any).babyptype ?? 0)?.[String((s as any).i ?? 0)] ?? '')}`);
    if (((s as any).i ?? 0) < ((s as any).imax ?? 0)) {
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'chlp'
    }
  }
  // TODO-QSP: dynamic text: Implanted Embryos: <<BabyEmbryo>>
  scene.text(`Implanted Embryos: ${((s as any).BabyEmbryo ?? '')}`);
  // TODO-QSP: dynamic text: ferteggage: <<ferteggage>>
  scene.text(`ferteggage: ${((s as any).ferteggage ?? '')}`);
  // TODO-QSP: dynamic text: pregChem: <<pregChem>>
  scene.text(`pregChem: ${((s as any).pregChem ?? '')}`);
  // TODO-QSP: dynamic text: pillcon: <<pillcon>>
  scene.text(`pillcon: ${((s as any).pillcon ?? '')}`);
  // TODO-QSP: dynamic text: Believed pillcon: <<pillcon2>>
  scene.text(`Believed pillcon: ${((s as any).pillcon2 ?? '')}`);
  // TODO-QSP: dynamic text: RecovH: <<RecovH>>
  scene.text(`RecovH: ${((s as any).RecovH ?? '')}`);
  // TODO-QSP: dynamic text: daylastperiod: <<daylastperiod>> (daystart difference: <<daystart-daylastperiod>...
  scene.text(`daylastperiod: ${((s as any).daylastperiod ?? '')} (daystart difference: ${((s as any).daystart ?? '')-((s as any).daylastperiod ?? '')})`);
  // TODO-QSP: dynamic text: lastmens: <<lastmens>>
  scene.text(`lastmens: ${((s as any).lastmens ?? '')}`);
  // TODO-QSP: dynamic text: firstmens: <<lastmens>> (daystart difference: <<daystart-firstmens>>)
  scene.text(`firstmens: ${((s as any).lastmens ?? '')} (daystart difference: ${((s as any).daystart ?? '')-((s as any).firstmens ?? '')})`);
  // TODO-QSP: dynamic text: hypnoTime: <<hypnoTime>>
  scene.text(`hypnoTime: ${((s as any).hypnoTime ?? '')}`);
  // TODO-QSP: dynamic text: hypnoStrength: <<hypnoStrength>>
  scene.text(`hypnoStrength: ${((s as any).hypnoStrength ?? '')}`);
  // TODO-QSP: dynamic text: hypnoDay: <<hypnoDay>>
  scene.text(`hypnoDay: ${((s as any).hypnoDay ?? '')}`);
  // TODO-QSP: dynamic text: missCum: <<missCum>> / timeTresh: <<timeTresh>>
  scene.text(`missCum: ${((s as any).missCum ?? '')} / timeTresh: ${((s as any).timeTresh ?? '')}`);
  if ((!((s as any).preziktype ?? 0))) {
    // TODO-QSP: dynamic text: condoms: in use(normal)/damaged/bad condoms: <<mc_inventory[''equipped_condoms''...
    scene.text(`condoms: in use(normal)/damaged/bad condoms: ${(((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['normal_condoms'] ?? 0)}/${(((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] ?? '')}/${(((s as any).mc_inventory ?? 0)?.['bad_condoms'] ?? '')}`);
  } else {
    if (((s as any).preziktype ?? 0) === 1) {
      // TODO-QSP: dynamic text: condoms: (Not in use) normal/damaged/bad condoms: <<mc_inventory[''normal_condom...
      scene.text(`condoms: (Not in use) normal/damaged/bad condoms: ${(((s as any).mc_inventory ?? 0)?.['normal_condoms'] ?? '')}/${(((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] ?? '')}/${(((s as any).mc_inventory ?? 0)?.['bad_condoms'] ?? '')}`);
    } else {
      // TODO-QSP: dynamic text: condoms: in use (damaged)/normal/bad condoms: <<mc_inventory[''equipped_condoms'...
      scene.text(`condoms: in use (damaged)/normal/bad condoms: ${(((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['sabotaged_condoms'] ?? 0)}/${(((s as any).mc_inventory ?? 0)?.['normal_condoms'] ?? '')}/${(((s as any).mc_inventory ?? 0)?.['bad_condoms'] ?? '')}`);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
    // TODO-QSP: dynamic text: pack(s) of birth control pills: <<mc_inventory[''contraceptive_pill'']>>
    scene.text(`pack(s) of birth control pills: ${(((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] ?? '')}`);
    if (((s as any).tabletkiold ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkiold>> expired pack
      scene.text(`  ${((s as any).tabletkiold ?? '')} expired pack`);
    }
    if (((s as any).tabletkifake ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkifake>> counterfeit pack
      scene.text(`  ${((s as any).tabletkifake ?? '')} counterfeit pack`);
    }
    if (((s as any).tabletkirej ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkirej>> factory rejected pack
      scene.text(`  ${((s as any).tabletkirej ?? '')} factory rejected pack`);
    }
    if (((s as any).tabletkifert ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkifert>> fertility hormones pack
      scene.text(`  ${((s as any).tabletkifert ?? '')} fertility hormones pack`);
    }
    if (((s as any).tabletkisug ?? 0) > 0) {
      // TODO-QSP: dynamic text:   <<tabletkisug>> sugar pills pack
      scene.text(`  ${((s as any).tabletkisug ?? '')} sugar pills pack`);
    }
  }
  if (((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
    if ((!((s as any).ptype ?? 0))) {
      (s as any).pilltype = 'normal ';
    }
    if (((s as any).ptype ?? 0) === 1) {
      (s as any).pilltype = 'expired ';
    }
    if (((s as any).ptype ?? 0) === 2) {
      (s as any).pilltype = 'counterfeit ';
    }
    if (((s as any).ptype ?? 0) === 3) {
      (s as any).pilltype = 'factory rejected ';
    }
    if (((s as any).ptype ?? 0) === 4) {
      (s as any).pilltype = 'sugar ';
    }
    if (((s as any).ptype ?? 0) === 5) {
      (s as any).pilltype = 'fertility hormone ';
    }
    // TODO-QSP: dynamic text: <<pillsleft[ptype]>> <<$pilltype>>pills left of your currently used pack
    scene.text(`${(((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] ?? '')} ${((s as any).pilltype ?? '')}pills left of your currently used pack`);
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['index'] = 'gt \'cheatmenu_din\', \'index\'';
  scene.actions([
    { label: 'Return to cheat index', goto: ['cheatmenu_din', 'index'] },
  ]);
  scene.build();
}

function enterIndex(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['this_menu'] = 'index';
  (s as any).currhour = (((s as any).daystart ?? 0)-1) * 24 + ((s as any).hour ?? 0);
  (s as any).currday = ((s as any).daystart ?? 0);
  (s as any).temp_daystart = ((s as any).daystart ?? 0);
  (s as any).temp_hour = ((s as any).hour ?? 0);
  (s as any).temp_minut = ((s as any).minut ?? 0);
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Index']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Index</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027dynamic/u0027); return false;">Dynamic Input Command</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fertility/u0027, /u0027cum_arrcheat/u0027); return false;">OOX Debug</a>');
  // TODO-QSP: dynamic text: 'Right now it is ' + $func('time', 'get_date_string') + ', ' + $func('time', 'ge...
  scene.text('Right now it is \' + $func(\'time\', \'get_date_string\') + \', \' + $func(\'time\', \'get_time_string\') + \'.');
  // TODO-QSP: dynamic text: Jump forward <a href="exec:gs ''cheatmenu_din'', ''quicktime'', 15 & gt ''cheatm...
  scene.text('Jump forward <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027quicktime/u0027, String(window.__gameStore.getState().15 ?? /u0027/u0027)); return false;">+15</a> minutes');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_residential/u0027, /u0027/u0027); return false;">Teleport to Pavlovsk</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pushkin/u0027, /u0027/u0027); return false;">Teleport to Pushkin</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_residential/u0027, /u0027/u0027); return false;">Teleport to City</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gadukino/u0027, /u0027/u0027); return false;">Teleport to Gadukino</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027dachi/u0027, /u0027/u0027); return false;">Teleport to Suburban Cooperative</a>');
  scene.text('<center><b>WARNING!</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'console', 'Hide Console input in objects window']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'time', 'Time Cheat in Objects window']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027vartracker/u0027); return false;"><b>Variable tracker</b></a>');
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['addict'] = 'gs \'cheatmenu_din\', \'addict\'';
  scene.build();
}

function enterAddict(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 1) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['drugs_immune'] = 0;
  } else {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['drugs_immune'] = 1;
    ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_used'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_need'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['weed_used'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['alcohol_used'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_used'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_used'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_used'] = 0;
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['clothes_dirt'] = 'gs \'cheatmenu_din\', \'clothes_dirt\'';
  scene.build();
}

function enterClothesDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['clothes_dirt'] === 1) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['clothes_dirt'] = 0;
  } else {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['clothes_dirt'] = 1;
    qspCall(s, 'washer', 'wash_all');
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['Vibrator'] = 'gs \'cheatmenu_din\', \'Vibrator\'';
  scene.build();
}

function enterVibrator(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['sleep_vib'] === 1) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['sleep_vib'] = 0;
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedVibrator'] = 0;
  } else {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['sleep_vib'] = 1;
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedVibrator'] = 1;
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['BimboCloth'] = 'gs \'cheatmenu_din\', \'BimboCloth\'';
  scene.build();
}

function enterBimboCloth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['bimbo'] === 1) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['bimbo'] = 0;
  } else {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['bimbo'] = 1;
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['bimbo_points'] = 0;
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['preppy_points'] = 0;
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['prude_points'] = 0;
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['punk_points'] = 0;
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['goth_points'] = 0;
    qspCall(s, 'archetypes', 'set_active');
    qspCall(s, 'archetypes', 'seed_snapshots');
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['SmartBimbo'] = 'gs \'cheatmenu_din\', \'SmartBimbo\'';
  scene.build();
}

function enterSmartBimbo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['smart_bimbo'] === 1) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['smart_bimbo'] = 0;
  } else {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['smart_bimbo'] = 1;
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['SuccuBimbo'] = 'gs \'cheatmenu_din\', \'SuccuBimbo\'';
  scene.build();
}

function enterSuccuBimbo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['suc_bimbo'] === 1) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['suc_bimbo'] = 0;
  } else {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['suc_bimbo'] = 1;
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['slutshot'] = 'gs \'cheatmenu_din\', \'slutshot\'';
  scene.build();
}

function enterSlutshot(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['no_periods'] === 1) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_periods'] = 0;
    (s as any).cycle = 0;
  } else {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['no_periods'] = 1;
    (s as any).cycle = 6;
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['permanent'] = 'gt \'cheatmenu_din\', \'permanent\'';
  scene.build();
}

function enterPermanent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Recurrent']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['this_menu'] = 'permanent';
  scene.text('<center><h1>Cheat Menu - Recurrent Cheats</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  // TODO-QSP: $cheatmenu['table_start']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'willpower', 'Willpower cost always zero']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'inf_willpower', 'Infinite willpower']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'always_brushed', 'Always combed']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'makeup_smear', 'Cosmetics never smeared']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'no_sweat', 'Never sweat']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hunger', 'Never eat']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'thirst', 'Never drink']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 'Never sleep']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mood', 'Never unhappy']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'no_leghair', 'Never shave legs']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fat', 'Never lose or gain weight']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_staticAssets', 'Bust and butt unaffected by weight']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'school_clothing', 'Allow any clothing for school']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'edit_porn', 'Porn schedule editor']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'archetypes', 'Disable archetype system']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: Never get addicted: <a href="exec:gs ''cheatmenu_din'', ''addict'' & gt ''cheatm...
  scene.text(`Never get addicted: <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027addict/u0027); return false;">${((((s as any).cheatVars ?? 0)?.['drugs_immune']) ? ('Enabled') : ('Disabled'))}</a>`);
  // TODO-QSP: dynamic text: Enable sleeping with vibrator inserted: <a href="exec:gs ''cheatmenu_din'', ''Vi...
  scene.text(`Enable sleeping with vibrator inserted: <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027Vibrator/u0027); return false;">${((((s as any).cheatVars ?? 0)?.['sleep_vib']) ? ('Enabled') : ('Disabled'))}</a>`);
  // TODO-QSP: dynamic text: Clothes never dirty: <a href="exec:gs ''cheatmenu_din'', ''clothes_dirt'' & gt '...
  scene.text(`Clothes never dirty: <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027clothes_dirt/u0027); return false;">${((((s as any).cheatVars ?? 0)?.['clothes_dirt']) ? ('Enabled') : ('Disabled'))}</a>`);
  // TODO-QSP: dynamic text: Clothing Archetypes and the effects of wearing special clothes: <a href="exec:gs...
  scene.text(`Clothing Archetypes and the effects of wearing special clothes: <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027BimboCloth/u0027); return false;">${((((s as any).cheatVars ?? 0)?.['bimbo']) ? ('Disabled') : ('Enabled'))}</a>`);
  if (((s as any).cheatVars ?? 0)?.['bimbo'] === 0) {
    // TODO-QSP: dynamic text:   Succubus clothing invulnerability: <a href="exec:gs ''cheatmenu_din'', ''Succu...
    scene.text(`  Succubus clothing invulnerability: <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027SuccuBimbo/u0027); return false;">${((((s as any).cheatVars ?? 0)?.['suc_bimbo']) ? ('Enabled') : ('Disabled'))}</a>`);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'always_horny', 'Set arousal to always be at 50 or more']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: Periods (and pregnancies): <a href="exec:gs ''cheatmenu_din'', ''slutshot'' & gt...
  scene.text(`Periods (and pregnancies): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027slutshot/u0027); return false;">${((((s as any).cheatVars ?? 0)?.['no_periods']) ? ('Disabled') : ('Enabled'))}</a>`);
  if (((s as any).cheatVars ?? 0)?.['no_periods'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'no_pregnancy', '  Impregnation', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'no_lactation', 'Lactation', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'no_cum_leak', 'Cum leaking', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'std', 'STDs', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: 'No dream chance: <a href="exec: cheatVars[''no_dream_chance''] = input(''Enter no dream chance (%)'...
  // TODO-QSP: $cheatmenu['table_end']
  scene.text('<center><b>WARNING!</b></center>');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['money'] = 'gs \'cheatmenu_din\', \'money\'';
  scene.build();
}

function enterMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).money = window.prompt("How much money do you want to have?") ?? '';
  if (((s as any).money ?? 0) < 0) {
    (s as any).money = 0;
  }
  qspGoto(s, 'cheatmenu_din', 'state');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['bank_money'] = 'gs \'cheatmenu_din\', \'bank_money\'';
  scene.build();
}

function enterBankMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).karta = window.prompt("How much money do you want to have in the bank?") ?? '';
  if (((s as any).karta ?? 0) < 0) {
    (s as any).karta = 0;
  }
  (s as any).karta = ((s as any).karta ?? 0) + (((s as any).bankDebtLimit ?? 0));
  qspGoto(s, 'cheatmenu_din', 'state');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['therapist_reset'] = 'gs \'cheatmenu_din\', \'therapist_reset\'';
  scene.build();
}

function enterTherapistReset(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'therapist', 'restTherapyVariables');
  qspCall(s, 'stat', '');
  qspGoto(s, 'cheatmenu_din', 'state');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['cycle'] = 'gt \'cheatmenu_din\', \'cycle\'';
  scene.build();
}

function enterCycle(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).cycle ?? 0) === 5) {
    qspGoto(s, 'cheatmenu_din', 'state');
  } else {
    (s as any).EggRH = 0;
    (s as any).focH = 0;
    (s as any).lutH = 0;
    (s as any).Ovulate = 0;
    (s as any).UnfertEgg = 0;
    (s as any).FertEgg = 0;
    (s as any).RecovH = 0;
    (s as any).mesec = 0;
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.cycle = s.0; s.daylastperiod = s.daystart; s.mesec = s.96; return s; }); window.__gameStore.getState().doGoto(/u0027stat/u0027, /u0027/u0027); return false;">Menstration</a>');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.cycle = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027stat/u0027, /u0027/u0027); return false;">Follicular</a>');
    // TODO-QSP: dynamic text: <a href="exec: cycle = 2 & ovulate = 24 + rand(0,20) & EggRH = 160 + 160+rand(0,...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.cycle = s.2; s.ovulate = 24 + rand(0,20); s.EggRH = 160 + 160+rand(0, 5); return s; }); window.__gameStore.getState().doGoto(/u0027stat/u0027, /u0027/u0027); return false;">Ovulation</a>');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.cycle = s.3; return s; }); window.__gameStore.getState().doGoto(/u0027stat/u0027, /u0027/u0027); return false;">Luteal</a>');
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['std_cure'] = 'gs \'cheatmenu_din\', \'std_cure\'';
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['pain_killer'] = 'killvar \'pain\' & gs \'pain\', \'calc\'';
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['force_preg'] = 'gs \'cheatmenu_din\', \'force_preg\'';
  scene.build();
}

function enterForcePreg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'A sperm donor', (Math.floor(Math.random() * 18) + 18), 0, 1);
  qspCall(s, 'npcpreservec', '$npclastgenerated');
  qspCall(s, 'fertility', 'force_preg_by', ((s as any).npclastsaved ?? 0));
  return;
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['remove_preg'] = 'gs \'cheatmenu_din\', \'remove_preg\'';
  scene.build();
}

function enterRemovePreg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'medical_din', 'remove_preg');
  (s as any).knowpregloss = 2;
  if (((s as any).FertEgg ?? 0) > 0) {
    (s as any).FertEgg = 0;
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['state'] = 'gt \'cheatmenu_din\', \'state\'';
  scene.build();
}

function enterState(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'State']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Character State Changes</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('especially dangerous unless you know what you\'re doing. When reporting bugs, please mention any cheats you used.</center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('Set alcohol levels:');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.alko = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Sober</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.alko = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Tipsy</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.alko = s.4; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Drunk</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.alko = s.7; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Wasted</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.alko = s.11; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Barely coherent</a>');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_horny = s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Max arousal</a>');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_horny = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Min arousal</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027bodyMod/u0027); return false;">Body Modification</a>');
  // TODO-QSP: dynamic text: <a href="exec:pcs_health = pcs_vital*10 + pcs_stren*5 + 1000 & pcs_willpwr = pcs...
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_health = pcs_vital*10 + pcs_stren*5 + 1000; s.pcs_willpwr = pcs_intel*5 + will*5 + 1000; s.pcs_mana = (pcs_intel*pcs_magik) + pcs_magik*100 + pcs_vital*10 + rikudo; s.vgape = s.0; s.agape = s.0; s.nippain = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Full restoration of Health, Mana, Reason.</a>');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_sleep = s.100; s.pcs_stam = s.stammax; s.pcs_mood = s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Full restoration of Sleep, Stamina, Mood.</a>');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_energy = s.200; s.pcs_hydra = s.200; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Full restoration of Hunger and Water.</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027money/u0027); return false;">Change money</a>');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.money = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Zero money</a>');
  if (((s as any).bankAccount ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027bank_money/u0027); return false;">Change money in the bank</a>');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.karta = s.bankDebtLimit; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">Zero money in the bank</a>');
  } else {
    scene.text('<b>You need to open a bank account before getting access to change money in the bank</b>');
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027std_cure/u0027); return false;">Cure all stds</a>');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.vgape = s.0; s.agape = s.0; s.nippain = s.0; s.painpub = s.0; s.pirs_pain_ton = s.0; s.mesec = s.0; s.spanked = s.0; (s.drugVars ??= {})/u0027heroin_need/u0027 = s.0; (s.drugVars ??= {})/u0027cocaine_addict/u0027 = s.0; (s.drugVars ??= {})/u0027heroin_high/u0027 = s.0; (s.drugVars ??= {})/u0027heroin_used/u0027 = s.0; (s.drugVars ??= {})/u0027heroin_hours_addicted/u0027 = s.0; (s.drugVars ??= {})/u0027heroin_taper/u0027 = s.0; (s.drugVars ??= {})/u0027cocaine_system/u0027 = s.0; s.fingal = s.0; s.mosol = s.0; s.frost = s.0; s.sick = s.0; s.hypnoWithdrawal = s.0; /* TODO-QSP: killvar /u0027pain/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027std_cure/u0027); return false;">Cure all ailments.</a>');
  if ((!((s as any).preg ?? 0))) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027force_preg/u0027); return false;">Force random pregnancy</a>');
    if (((s as any).cycle ?? 0) !== 5) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027stat/u0027, /u0027/u0027); return false;">Set stage of menstrual cycle</a>');
    }
  } else {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027remove_preg/u0027); return false;">Remove pregnancy</a>');
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cum_cleanup/u0027, /u0027reset/u0027); return false;">Remove all cum</a>');
  if (((s as any).lactation ?? 0)?.['active'] <= 0) {
    scene.text('You are not lactating');
    // TODO-QSP: dynamic text: Your current prolactinlvl is <<lactation[''prolactinlvl'']>>ng/ml.
    scene.text(`Your current prolactinlvl is ${(((s as any).lactation ?? 0)?.['prolactinlvl'] ?? '')}ng/ml.`);
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lact_lib/u0027, /u0027lact_switch/u0027); return false;">Switch ON</a>');
  } else {
    scene.text('You are lactating');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lact_lib/u0027, /u0027lact_switch/u0027); return false;">Switch OFF</a>');
    if (((s as any).lactation ?? 0)?.['milkprod_type'] === 1) {
      // TODO-QSP: dynamic text: The milk production is <a href="exec: lactation[''milkprod_type''] = 0 & gt ''ch...
      scene.text(`The milk production is <a href="#" onclick="window.__gameStore.setState((s) => { (s.lactation ??= {})/u0027milkprod_type/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">realistic</a>. ${((s as any).pcs_firstname ?? '')} will produce breast milk based on her body resources.`);
    } else {
      if (((s as any).lactation ?? 0)?.['milkprod_type'] === 0) {
        // TODO-QSP: dynamic text: The milk production is <a href="exec: lactation[''milkprod_type''] = 1 & gt ''ch...
        scene.text(`The milk production is <a href="#" onclick="window.__gameStore.setState((s) => { (s.lactation ??= {})/u0027milkprod_type/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">permanent</a>. ${((s as any).pcs_firstname ?? '')} will produce breast milk disregarding her condition.`);
      } else {
        ((s as any).lactation = (s as any).lactation ?? {})['milkprod_type'] = 1;
      }
    }
    if (((s as any).lactation ?? 0)?.['lactaterate'] <= 0) {
      // TODO-QSP: dynamic text: Lactate Rate: <<lactation[''lactaterate'']/1000>>ml/h <a href="exec:lactation[''...
      scene.text(`Lactate Rate: ${(((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/1000}ml/h <a href="#" onclick="window.__gameStore.setState((s) => { (s.lactation ??= {})/u0027lactaterate/u0027 +=s.10000; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">+10</a>`);
    } else {
      if (((s as any).lactation ?? 0)?.['lactaterate'] >= 600000) {
        // TODO-QSP: dynamic text: Lactate Rate: <a href="exec:lactation[''lactaterate''] -= 10000 & gt ''cheatmenu...
        scene.text(`Lactate Rate: <a href="#" onclick="window.__gameStore.setState((s) => { (s.lactation ??= {})/u0027lactaterate/u0027 -=s.10000; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">-10</a> ${(((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/1000}ml/h`);
      } else {
        // TODO-QSP: dynamic text: Lactate Rate: <a href="exec:lactation[''lactaterate''] -= 10000 & gt ''cheatmenu...
        scene.text(`Lactate Rate: <a href="#" onclick="window.__gameStore.setState((s) => { (s.lactation ??= {})/u0027lactaterate/u0027 -=s.10000; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">-10</a> ${(((s as any).lactation ?? {})?.['lactaterate'] ?? 0)/1000}ml/h <a href="#" onclick="window.__gameStore.setState((s) => { (s.lactation ??= {})/u0027lactaterate/u0027 +=s.10000; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">+10</a>`);
        // TODO-QSP: 'Cap Lactate Rate: ' + iif(lactation['milkprod_type'] = 0 and lactation['caplactaterate'] > 0, '<a h...
        // TODO-QSP: dynamic text: <font color="grey">Cap lactate rate makes lactate rate stop growing if <<$pcs_fi...
        scene.text(`<font color="grey">Cap lactate rate makes lactate rate stop growing if ${((s as any).pcs_firstname ?? '')} needs milking more often.</font>`);
      }
    }
    // TODO-QSP: dynamic text: Milk in Breasts: <<lactation[''breastmv'']/1000>>ml
    scene.text(`Milk in Breasts: ${(((s as any).lactation ?? {})?.['breastmv'] ?? 0)/1000}ml`);
    // TODO-QSP: dynamic text: Max Milk Storage: <<lactation[''breastmm'']/1000>>ml
    scene.text(`Max Milk Storage: ${(((s as any).lactation ?? {})?.['breastmm'] ?? 0)/1000}ml`);
    // TODO-QSP: dynamic text: <font color="grey">Maximum milk storage changes with breast size, and if <<$pcs_...
    scene.text(`<font color="grey">Maximum milk storage changes with breast size, and if ${((s as any).pcs_firstname ?? '')} went through pregnancy</font>`);
    if (((s as any).lactation ?? 0)?.['induced'] <= 0) {
      // TODO-QSP: dynamic text: Is <<$pcs_firstname>>''s lactation Induced?: <a href="exec:lactation[''induced''...
      scene.text(`Is ${((s as any).pcs_firstname ?? '')}'s lactation Induced?: <a href="#" onclick="window.__gameStore.setState((s) => { (s.lactation ??= {})/u0027induced/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">no</a>`);
    } else {
      // TODO-QSP: dynamic text: Is <<$pcs_firstname>>''s lactation Induced?: <a href="exec:lactation[''induced''...
      scene.text(`Is ${((s as any).pcs_firstname ?? '')}'s lactation Induced?: <a href="#" onclick="window.__gameStore.setState((s) => { (s.lactation ??= {})/u0027induced/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027state/u0027); return false;">yes</a>`);
    }
    // TODO-QSP: dynamic text: <font color="grey">Does <<$pcs_firstname>> know she induced lactation herself, o...
    scene.text(`<font color="grey">Does ${((s as any).pcs_firstname ?? '')} know she induced lactation herself, or not? (This is only used for some events.)</font>`);
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['set_preg_body'] = 'gs \'cheatmenu_din\', \'set_preg_body\', ARGS[0]';
  scene.build();
}

function enterSetPregBody(s: GameState, scene: SceneBuilder): void {
  (s as any).pregChem = ((s as any).locArgs?.[1] ?? 0);
  (s as any).pregtime = ((s as any).locArgs?.[1] ?? 0) / 24;
  qspCall(s, 'body', 'reset_preg_mass');
  qspCall(s, 'body', 'softreset');
  qspCall(s, 'stat', '');
  qspGoto(s, 'cheatmenu_din', 'bodyMod');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['set_body_class'] = 'gs \'cheatmenu_din\', \'set_body_class\', ARGS[0]';
  scene.build();
}

function enterSetBodyClass(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = qspFunc(s, 'body', 'CalcOptBodyMass', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'body', 'softreset');
  qspCall(s, 'stat', '');
  qspGoto(s, 'cheatmenu_din', 'bodyMod');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['bodyMod'] = 'gt \'cheatmenu_din\', \'bodyMod\'';
  scene.build();
}

function enterBodyMod(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Cheat Menu - Body Modification</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('Changing body shape does not resize clothes.');
  scene.text('May cause adverse interactions, use at your own risk!');
  scene.text('');
  // TODO-QSP: dynamic text: You are currently <<$bodyVars[''desc'']>>.
  scene.text(`You are currently ${(((s as any).bodyVars ?? 0)?.['desc'] ?? '')}.`);
  scene.text('');
  scene.text('You may select from the following sizes:');
  scene.text('');
  if (((s as any).knowpreg ?? 0) === 1  ||  (((s as any).preg ?? 0) === 1  &&  (((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).pregChem ?? 0) > 3600))) {
    if ((!(((s as any).pregChem ?? 0) < 2688))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 100"><<func(''body_struc...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().100 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 100)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 2688  &&  ((s as any).pregChem ?? 0) < 3192))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 2688"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().2688 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 2688)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 3192  &&  ((s as any).pregChem ?? 0) < 3696))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 3192"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().3192 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 3192)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 3696  &&  ((s as any).pregChem ?? 0) < 4200))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 3696"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().3696 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 3696)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 4200  &&  ((s as any).pregChem ?? 0) < 4704))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 4200"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().4200 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 4200)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 4704  &&  ((s as any).pregChem ?? 0) < 5208))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 4704"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().4704 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 4704)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 5208  &&  ((s as any).pregChem ?? 0) < 5712))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 5208"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().5208 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 5208)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 5712  &&  ((s as any).pregChem ?? 0) < 6216))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 5712"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().5712 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 5712)}</a>`);
      scene.text('');
    }
    if ((!(((s as any).pregChem ?? 0) >= 6216))) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_preg_body'', 6216"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_preg_body/u0027, String(window.__gameStore.getState().6216 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', ((s as any).pcs_bmi ?? ''), ((s as any).strenbuf ?? ''), 6216)}</a>`);
      scene.text('');
    }
  } else {
    (s as any).bs_temp_bs_class = qspFunc(s, 'body_structure', 'get_class', ((s as any).pcs_bmi ?? 0), ((s as any).strenbuf ?? 0));
    scene.text('starving (No, you may not select \'starving\', it\'s here to show where the scale starts)');
    scene.text('');
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 1) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_body_class'', 170"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_body_class/u0027, String(window.__gameStore.getState().170 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', 17, ((s as any).strenbuf ?? ''), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 2) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_body_class'', 200"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_body_class/u0027, String(window.__gameStore.getState().200 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', 20, ((s as any).strenbuf ?? ''), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 3) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_body_class'', 230"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_body_class/u0027, String(window.__gameStore.getState().230 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', 23, ((s as any).strenbuf ?? ''), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 4) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_body_class'', 270"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_body_class/u0027, String(window.__gameStore.getState().270 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', 27, ((s as any).strenbuf ?? ''), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 5) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_body_class'', 320"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_body_class/u0027, String(window.__gameStore.getState().320 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', 32, ((s as any).strenbuf ?? ''), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 6) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_body_class'', 370"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_body_class/u0027, String(window.__gameStore.getState().370 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', 37, ((s as any).strenbuf ?? ''), 0)}</a>`);
      scene.text('');
    }
    if ((((s as any).bs_temp_bs_class ?? 0) / 100) !== 7) {
      // TODO-QSP: dynamic text: <a href="exec: gs ''cheatmenu_din'', ''set_body_class'', 420"><<func(''body_stru...
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027set_body_class/u0027, String(window.__gameStore.getState().420 ?? /u0027/u0027)); return false;">${qspFunc(s, 'body_structure', 'body_desc', 42, ((s as any).strenbuf ?? ''), 0)}</a>`);
      scene.text('');
    }
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['age'] = 'gs \'cheatmenu_din\', \'age\'';
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
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['visualage'] = 'gs \'cheatmenu_din\', \'visualage\'';
  scene.build();
}

function enterVisualage(s: GameState, scene: SceneBuilder): void {
  (s as any).vidage = window.prompt("For how many years you want to look?") ?? '';
  if (((s as any).vidage ?? 0) <= 14) {
    (s as any).vidage = 14;
  }
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['avatar_hair_set'] = 'gs \'cheatmenu_din\', \'avatar_hair_set\'';
  scene.build();
}

function enterAvatarHairSet(s: GameState, scene: SceneBuilder): void {
  ((s as any).face_style = (s as any).face_style ?? {})['avatar_hair'] = window.prompt("Input your custom hair:") ?? '';
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['rename'] = 'gs \'cheatmenu_din\', \'rename\'';
  scene.build();
}

function enterRename(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_input = window.prompt("What is your first name? (Leave blank for " + (((s as any).pcs_firstname ?? 0)) + ")") ?? '';
  if (((s as any).temp_input ?? 0) !== '') {
    (s as any).pcs_firstname = ((s as any).temp_input ?? 0);
  }
  (s as any).temp_input = window.prompt("What is your family name? (Leave blank for " + (((s as any).pcs_lastname ?? 0)) + ")") ?? '';
  if (((s as any).temp_input ?? 0) !== '') {
    (s as any).pcs_lastname = ((s as any).temp_input ?? 0);
  }
  (s as any).temp_input = window.prompt("What is your nickname? (Leave blank for " + (((s as any).pcs_nickname ?? 0)) + ")") ?? '';
  if (((s as any).temp_input ?? 0) !== '') {
    (s as any).pcs_nickname = ((s as any).temp_input ?? 0);
  }
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['reset_name'] = 'gs \'cheatmenu_din\', \'reset_name\'';
  scene.build();
}

function enterResetName(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_functions', 'set_default', 'name');
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['setLooks'] = 'gs \'cheatmenu_din\', \'setLooks\', $ARGS[0], ARGS[1]';
  scene.build();
}

function enterSetLooks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shortgs', 'setStat', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['setLooksInput'] = 'gs \'cheatmenu_din\', \'setLooksInput\', $ARGS[0], $ARGS[1]';
  scene.build();
}

function enterSetLooksInput(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_input = window.prompt("Set your " + (String((s as any).locArgs?.[2] ?? '')) + " level:") ?? '';
  if (!isNaN(((s as any).temp_input ?? 0)) && ((s as any).temp_input ?? 0) !== '' !== 0) {
    qspCall(s, 'shortgs', 'setStat', ((s as any).locArgs?.[1] ?? 0), parseFloat(((s as any).temp_input ?? 0)));
  } else {
    if (((s as any).temp_input ?? 0) !== '') {
    }
  }
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['printLooksLinks'] = 'gs \'cheatmenu_din\', \'printLooksLinks\', $ARGS[0], $ARGS[1]';
  scene.build();
}

function enterPrintLooksLinks(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setLooks'], '<<$ARGS[1]>>', 100">Max</a> 
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setLooks/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, 100 */ return s; }); return false;">Max</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setLooks'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl +...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setLooks/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl + 1 */ return s; }); return false;">+1</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setLooks'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl +...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setLooks/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl + 10 */ return s; }); return false;">+10</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setLooks'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl -...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setLooks/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl - 1 */ return s; }); return false;">-1</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setLooks'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl -...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setLooks/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl - 10 */ return s; }); return false;">-10</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setLooks'], '<<$ARGS[1]>>', 0">Min</a> 
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setLooks/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, 0 */ return s; }); return false;">Min</a> `);
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['looks'] = 'gt \'cheatmenu_din\', \'looks\'';
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Appearance']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Character Appearance</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('<center><table width="1000" cellspacing="0" cellpadding="10" valign="top"><tr><td width="33%" valign="top">');
  // TODO-QSP: dynamic text: <<$pcs_firstname>> <<$pcs_lastname>> (<<$pcs_nickname>>). <a href="exec:gs ''che...
  scene.text(`${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')} (${((s as any).pcs_nickname ?? '')}). <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027rename/u0027); return false;">Rename</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027reset_name/u0027); return false;">Reset</a>`);
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027parameters/u0027); return false;">Show design parameters of body</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027vneshpara/u0027); return false;">Show beauty parameters</a>');
  // TODO-QSP: dynamic text: You are <a href="exec: pcs_dob += 10000 & gs ''cheatmenu_din'', ''age''">(-1)</a...
  scene.text(`You are <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_dob +=s.10000; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027age/u0027); return false;">(-1)</a> ${((s as any).age ?? '')} <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_dob -=s.10000; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027age/u0027); return false;">(+1)</a> years old`);
  // TODO-QSP: dynamic text: You look <<vidage>> years old
  scene.text(`You look ${((s as any).vidage ?? '')} years old`);
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027visualage/u0027); return false;">Change apparent age</a>');
  // TODO-QSP: dynamic text: You are <<pcs_hgt>> centimetres tall
  scene.text(`You are ${((s as any).pcs_hgt ?? '')} centimetres tall`);
  // TODO-QSP: dynamic text: <a href="exec:pcs_hgt = input(''Enter <<$pcs_nickname>>s height in centimetres<b...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hgt = input(/u0027Enter ${((s as any).pcs_nickname ?? '')}s height in centimetres<br><br>(default 165, min 100, max 200, values below 150 and above 180 will cause problems in the calculation of BMI/weight the more you deviate from the default 170)/u0027); return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Change ${((s as any).pcs_nickname ?? '')}'s height</a>`);
  // TODO-QSP: dynamic text: Musculature (<<stren_plus_lvl>>): ' & dynamic $cheatmenu['printLooksLinks'], 'st...
  scene.text(`Musculature (${((s as any).stren_plus_lvl ?? '')}): ' & dynamic $cheatmenu['printLooksLinks'], 'stren_plus', 'Musculature`);
  scene.text('<font color="grey">Allows strength to go past 100');
  scene.text('Negatively</font> affects appearance');
  // TODO-QSP: dynamic text: Toned Butt (<<butt_tr_lvl>>): ' & dynamic $cheatmenu['printLooksLinks'], 'butt_t...
  scene.text(`Toned Butt (${((s as any).butt_tr_lvl ?? '')}): ' & dynamic $cheatmenu['printLooksLinks'], 'butt_tr', 'Toned Butt`);
  // TODO-QSP: $pcs_teeth_txt
  if (((s as any).pcs_teeth ?? 0) > -1) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027teeth/u0027, /u0027improve/u0027); return false;">Improve teeth</a>');
  }
  if (((s as any).pcs_teeth ?? 0) < 3) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027teeth/u0027, /u0027worsen/u0027); return false;">Worsen teeth</a>');
  }
  if (((s as any).pcs_brace ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_brace = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Remove braces</a>');
  }
  if (((s as any).pcs_missing_teeth ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_missing_teeth = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Restore missing teeth</a>');
  }
  // TODO-QSP: dynamic text: You have <<$titsize>> breasts
  scene.text(`You have ${((s as any).titsize ?? '')} breasts`);
  if (((s as any).tits ?? 0) < 11) {
    // TODO-QSP: dynamic text: <a href="exec: bodyVars[''bust_silicone''] += 5 & gt ''cheatmenu_din'', ''looks'...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.bodyVars ??= {})/u0027bust_silicone/u0027 +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Enlarge breasts(silicone)</a>');
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] >= 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.bodyVars ??= {})/u0027bust_silicone/u0027 = min(0, bodyVars[/u0027bust_silicone/u0027]-5); return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Shrink breasts(silicone)</a>');
  }
  if (((s as any).tits ?? 0) < 11  &&  ((s as any).pcs_mass ?? 0)?.['bust_gen'] < 50) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027change_pcs_mass_bust/u0027, String(window.__gameStore.getState().5 ?? /u0027/u0027)); return false;">Enlarge breasts (natural)</a>');
  }
  if (((s as any).pcs_mass ?? 0)?.['bust'] >= 6  &&  ((s as any).pcs_mass ?? 0)?.['bust_gen'] >= 6) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.titreduc = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027change_pcs_mass_bust/u0027); return false;">Shrink breasts (natural)</a>');
  }
  // TODO-QSP: dynamic text: You have a <<$pc_desc[''butt'']>> butt.
  scene.text(`You have a ${(((s as any).pc_desc ?? 0)?.['butt'] ?? '')} butt.`);
  if (((s as any).pcs_buttsize ?? 0) < 50) {
    // TODO-QSP: dynamic text: <a href="exec: bodyVars[''butt_silicone''] += 10 & gt ''cheatmenu_din'', ''looks...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.bodyVars ??= {})/u0027butt_silicone/u0027 +=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Enlarge butt (silicone)</a>');
  }
  if (((s as any).bodyVars ?? 0)?.['butt_silicone'] >= 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.bodyVars ??= {})/u0027butt_silicone/u0027 = max(0, bodyVars[/u0027butt_silicone/u0027]-10); return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Shrink butt (silicone)</a>');
  }
  if (((s as any).pcs_mass ?? 0)?.['butt'] < 50  &&  ((s as any).pcs_mass ?? 0)?.['butt_gen'] < 50) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027change_pcs_mass_butt/u0027, String(window.__gameStore.getState().10 ?? /u0027/u0027)); return false;">Enlarge butt (natural)</a>');
  }
  if (((s as any).pcs_mass ?? 0)?.['butt'] >= 6  &&  ((s as any).pcs_mass ?? 0)?.['butt_gen'] >= 6) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.assreduc = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027change_pcs_mass_butt/u0027); return false;">Shrink butt (natural)</a>');
  }
  // TODO-QSP: dynamic text: <<$pc_descFull[''lip'']>>
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['lip'] ?? '')}`);
  if (((s as any).pcs_lip ?? 0) < 4) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_lip += 1 & gt ''cheatmenu_din'', ''looks''">Enlarge lips</a>
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_lip +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Enlarge lips</a>');
  }
  if (((s as any).pcs_lip ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_lip -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Shrink lips</a>');
  }
  // TODO-QSP: dynamic text: <<$nipplesize >> (<<pcs_nips>>)
  scene.text(`${((s as any).nipplesize ?? '')} (${((s as any).pcs_nips ?? '')})`);
  if (((s as any).pcs_nips ?? 0) <= 95) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_nips += 5 & gt ''cheatmenu_din'', ''looks''">Enlarge nipples</...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_nips +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Enlarge nipples</a>');
  }
  if (((s as any).pcs_nips ?? 0) >= 5) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_nips -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Shrink nipples</a>');
  }
  // TODO-QSP: dynamic text: <<$clitsize>> (<<clit_size>>)
  scene.text(`${((s as any).clitsize ?? '')} (${((s as any).clit_size ?? '')})`);
  if (((s as any).clit_size ?? 0) <= 95) {
    // TODO-QSP: dynamic text: <a href="exec:clit_size += 5 & gt ''cheatmenu_din'', ''looks''">Enlarge clit</a>
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.clit_size +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Enlarge clit</a>');
  }
  if (((s as any).clit_size ?? 0) >= 5) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.clit_size -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Shrink clit</a>');
  }
  scene.text('</td><td width="33%" valign="top">');
  // TODO-QSP: dynamic text: <<$pc_descFull[''skin'']>>
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['skin'] ?? '')}`);
  if (((s as any).pcs_skin ?? 0) < 900) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_skin += 200 & gs ''AppearanceSystem'', ''UpdateBaseAppearance'...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_skin +=s.200; return s; }); window.__gameStore.getState().doGoto(/u0027AppearanceSystem/u0027, /u0027UpdateBaseAppearance/u0027); return false;">Improve skin</a>');
  }
  if (((s as any).pcs_skin ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_skin -=s.200; return s; }); window.__gameStore.getState().doGoto(/u0027AppearanceSystem/u0027, /u0027UpdateBaseAppearance/u0027); return false;">Worsen skin</a>');
  }
  if (((s as any).pcs_tan ?? 0) >= 0) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_tan += 10 & gt ''cheatmenu_din'', ''looks''">Become tanned</a>
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_tan +=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Become tanned</a>');
  }
  if (((s as any).pcs_tan ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_tan = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Remove tan</a>');
  }
  // TODO-QSP: dynamic text: <<$pc_descFull[''throat'']>>
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['throat'] ?? '')}`);
  if (((s as any).pcs_throat ?? 0) <= 31) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_throat += 5 & gt ''cheatmenu_din'', ''looks''">Increase throat...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_throat +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Increase throat capacity</a>');
  }
  if (((s as any).pcs_throat ?? 0) >= 5) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_throat -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Decrease throat capacity</a>');
  }
  if (((s as any).dounspell ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.dounsplkil = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027body/u0027, /u0027hardreset/u0027); return false;">Hard Reset body shape</a>');
  }
  // TODO-QSP: dynamic text: <<$pcs_vag_txt>>
  scene.text(`${((s as any).pcs_vag_txt ?? '')}`);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_vag = s.20; /* TODO-QSP: killvar/u0027virgin_stats/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Reinstate virginity</a>');
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] < 1) {
    // TODO-QSP: dynamic text: <a href="exec:stat[''vaginal''] = 0 & stat[''vaginal_fist''] = 0 & stat[''vagina...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { (s.stat ??= {})/u0027vaginal/u0027 = s.0; (s.stat ??= {})/u0027vaginal_fist/u0027 = s.0; (s.stat ??= {})/u0027vaginal_dildo/u0027 = s.0; (s.stat ??= {})/u0027vaginal_strap/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Make ${((s as any).pcs_nickname ?? '')} believe she is a virgin again (resets the related sex stats)</a>`);
  }
  if (((s as any).pcs_vag ?? 0) <= 25) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027vagenlarge/u0027); return false;">Enlarge comfortable vaginal capacity</a>');
  }
  if (((s as any).pcs_vag ?? 0) >= 5) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027vagreduce/u0027); return false;">Reduce comfortable vaginal capacity</a>');
  }
  // TODO-QSP: dynamic text: Your comfortable vaginal capacity will reduce by <<vshrink>> every <<vshrinkdays...
  scene.text(`Your comfortable vaginal capacity will reduce by ${((s as any).vshrink ?? '')} every ${((s as any).vshrinkdays ?? '')} days.`);
  if (((s as any).vshrink ?? 0) < 10) {
    // TODO-QSP: dynamic text: <a href="exec:vshrink += 1 & gt ''cheatmenu_din'', ''looks''">Increase amount of...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.vshrink +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Increase amount of reduction</a>');
  }
  if (((s as any).vshrink ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.vshrink -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Reduce amount of reduction</a>');
  }
  if (((s as any).vshrinkdays ?? 0) < 10) {
    // TODO-QSP: dynamic text: <a href="exec:vshrinkdays += 1 & gt ''cheatmenu_din'', ''looks''">Increase numbe...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.vshrinkdays +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Increase number of days it takes</a>');
  }
  if (((s as any).vshrinkdays ?? 0) > 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.vshrinkdays -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Reduce number of days it takes</a>');
  }
  // TODO-QSP: dynamic text: When gaped your vagina will reduce each stage (up to 4 for maximum gape) every <...
  scene.text(`When gaped your vagina will reduce each stage (up to 4 for maximum gape) every ${(((s as any).vgape ?? 0)?.[5] ?? '')} minutes.`);
  if (((s as any).vgape ?? 0)[4] < 60) {
    // TODO-QSP: dynamic text: <a href="exec:vgape[4] += 5 & gt ''cheatmenu_din'', ''looks''">Increase time by ...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: vgape[4] += 5 */ return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Increase time by 5 minutes (before traits)</a>');
  }
  if (((s as any).vgape ?? 0)[4] > 5) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: vgape[4] -= 5 */ return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Reduce time by 5 minutes</a>');
  }
  // TODO-QSP: dynamic text: <<$pcs_ass_txt>>
  scene.text(`${((s as any).pcs_ass_txt ?? '')}`);
  if (((s as any).pcs_ass ?? 0) <= 25) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027assenlarge/u0027); return false;">Enlarge comfortable anal capacity</a>');
  }
  if (((s as any).pcs_ass ?? 0) >= 5) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027assreduce/u0027); return false;">Reduce comfortable anal capacity</a>');
  }
  // TODO-QSP: dynamic text: Your comfortable anal capacity will reduce by <<ashrink>> every <<ashrinkdays>> ...
  scene.text(`Your comfortable anal capacity will reduce by ${((s as any).ashrink ?? '')} every ${((s as any).ashrinkdays ?? '')} days.`);
  if (((s as any).ashrink ?? 0) < 10) {
    // TODO-QSP: dynamic text: <a href="exec:ashrink += 1 & gt ''cheatmenu_din'', ''looks''">Increase amount of...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.ashrink +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Increase amount of reduction</a>');
  }
  if (((s as any).ashrink ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.ashrink -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Reduce amount of reduction</a>');
  }
  if (((s as any).ashrinkdays ?? 0) < 10) {
    // TODO-QSP: dynamic text: <a href="exec:ashrinkdays += 1 & gt ''cheatmenu_din'', ''looks''">Increase numbe...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.ashrinkdays +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Increase number of days it takes</a>');
  }
  if (((s as any).ashrinkdays ?? 0) > 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.ashrinkdays -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Reduce number of days it takes</a>');
  }
  // TODO-QSP: dynamic text: When gaped your anus will reduce each stage (up to 4 for maximum gape) every <<a...
  scene.text(`When gaped your anus will reduce each stage (up to 4 for maximum gape) every ${(((s as any).agape ?? 0)?.[5] ?? '')} minutes.`);
  if (((s as any).agape ?? 0)[4] < 60) {
    // TODO-QSP: dynamic text: <a href="exec:agape[4] += 5 & gt ''cheatmenu_din'', ''looks''">Increase time by ...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: agape[4] += 5 */ return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Increase time by 5 minutes (before traits)</a>');
  }
  if (((s as any).agape ?? 0)[4] > 5) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: agape[4] -= 5 */ return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Reduce time by 5 minutes</a>');
  }
  scene.text('</td><td width="33%" valign="top">');
  if ((!((s as any).dounspell ?? 0))) {
    if (((s as any).fat ?? 0) !== 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.fat = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Zero fat</a>');
    }
    // TODO-QSP: dynamic text: Body Fat = (<<pcs_mass['body']>>): 
    scene.text(`Body Fat = (${(((s as any).pcs_mass ?? 0)?.['body'] ?? '')}): `);
    if (((s as any).pcs_mass ?? 0)?.['body'] > 10) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027change_pcs_mass_body/u0027); return false;">-10</a> ');
    }
    if (((s as any).pcs_mass ?? 0)?.['body'] > 5) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027change_pcs_mass_body/u0027); return false;">-5</a> ');
    }
    if (((s as any).pcs_mass ?? 0)?.['body'] > 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027change_pcs_mass_body/u0027); return false;">-1</a> ');
    }
    // TODO-QSP: dynamic text: Note: You need some Body Fat to survive, any value under 11 is classified as "st...
    scene.text(`Note: You need some Body Fat to survive, any value under 11 is classified as "starving" and a value of 0 can lead to a Game Over. ${qspFunc(s, 'body', 'CalcOptBodyMass')} gives a bmi of 22.5.`);
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027tatoo/u0027); return false;">Tattoo removal</a>');
  // TODO-QSP: dynamic text: <<$hair>>
  scene.text(`${((s as any).hair ?? '')}`);
  if ((!((s as any).pcs_haircol ?? 0))) {
    // TODO-QSP: dynamic text: Your hair is now (prev) <<$pcs_haircolor>> <a href="exec:pcs_haircol +=1 & gt ''...
    scene.text(`Your hair is now (prev) ${((s as any).pcs_haircolor ?? '')} <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_haircol +=s.1; s.nathcol = s.pcs_haircol; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">(next)</a>`);
  } else {
    if (((s as any).pcs_haircol ?? 0) > 0  &&  ((s as any).pcs_haircol ?? 0) < 3) {
      // TODO-QSP: dynamic text: Your hair is now <a href="exec:pcs_haircol -=1 & gt ''cheatmenu_din'', ''looks''...
      scene.text(`Your hair is now <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_haircol -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">(prev)</a> ${((s as any).pcs_haircolor ?? '')} <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_haircol +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">(next)</a>`);
    } else {
      if (((s as any).pcs_haircol ?? 0) === 3) {
        // TODO-QSP: dynamic text: Your hair is now <a href="exec:pcs_haircol -=1 & gt ''cheatmenu_din'', ''looks''...
        scene.text(`Your hair is now <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_haircol -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">(prev)</a> ${((s as any).pcs_haircolor ?? '')} (next)`);
      } else {
        scene.text('To change your natural hair color, you have to <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_haircol = s.nathcol; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">restore your natural hair color</a> first.');
      }
    }
  }
  if (((s as any).pcs_hairlng ?? 0) > 975) {
    // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt ''cheatmenu...
    scene.text(`Hair length (${((s as any).pcs_hairlng ?? '')})  <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-100</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-25</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+5</a>`);
  } else {
    if (((s as any).pcs_hairlng ?? 0) > 900) {
      // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt ''cheatmenu...
      scene.text(`Hair length (${((s as any).pcs_hairlng ?? '')})  <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-100</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-25</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+25</a>`);
    } else {
      if (((s as any).pcs_hairlng ?? 0) >= 100) {
        // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 100 & gt ''cheatmenu...
        scene.text(`Hair length (${((s as any).pcs_hairlng ?? '')})  <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-100</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-25</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+25</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+100</a>`);
      } else {
        if (((s as any).pcs_hairlng ?? 0) >= 25) {
          // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 25 & gt ''cheatmenu_...
          scene.text(`Hair length (${((s as any).pcs_hairlng ?? '')})  <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-25</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+25</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+100</a>`);
        } else {
          if (((s as any).pcs_hairlng ?? 0) >= 5) {
            // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng -= 5 & gt ''cheatmenu_d...
            scene.text(`Hair length (${((s as any).pcs_hairlng ?? '')})  <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">-5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+25</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+100</a>`);
          } else {
            // TODO-QSP: dynamic text: Hair length (<<pcs_hairlng>>)  <a href="exec:pcs_hairlng += 5 & gt ''cheatmenu_d...
            scene.text(`Hair length (${((s as any).pcs_hairlng ?? '')})  <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.25; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+25</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_hairlng +=s.100; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">+100</a>`);
          }
        }
      }
    }
  }
  if ((!((s as any).hairgrowcht ?? 0))) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.hairgrowcht = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Stop hair growth</a>');
  }
  if (((s as any).hairgrowcht ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.hairgrowcht = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Allow hair growth</a>');
  }
  // TODO-QSP: dynamic text: <<$pc_descFull[''eyes'']>>
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['eyes'] ?? '')}`);
  if (((s as any).pcs_naturallashes ?? 0) < 2) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_naturallashes += 1 & gt ''cheatmenu_din'', ''looks''">Enlarge ...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_naturallashes +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Enlarge lashes</a>');
  }
  if (((s as any).pcs_naturallashes ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_naturallashes -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Shrink lashes</a>');
  }
  if (((s as any).pcs_eyesize ?? 0) < 3) {
    // TODO-QSP: dynamic text: <a href="exec:pcs_eyesize += 1 & gt ''cheatmenu_din'', ''looks''">Increase the s...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_eyesize +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Increase the size of the eye</a>');
  }
  if (((s as any).pcs_eyesize ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_eyesize -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">Reduce the size of the eye</a>');
  }
  if (((s as any).pcs_eyecol ?? 0) <= 0) {
    // TODO-QSP: dynamic text: Your eyes are now (prev) <<$pcs_eyecolor>> <a href="exec:pcs_eyecol +=1 & gt ''c...
    scene.text(`Your eyes are now (prev) ${((s as any).pcs_eyecolor ?? '')} <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_eyecol +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">(next)</a>`);
  } else {
    if (((s as any).pcs_eyecol ?? 0) > 0  &&  ((s as any).pcs_eyecol ?? 0) < 3) {
      // TODO-QSP: dynamic text: Your eyes are now <a href="exec:pcs_eyecol -=1 & gt ''cheatmenu_din'', ''looks''...
      scene.text(`Your eyes are now <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_eyecol -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">(prev)</a> ${((s as any).pcs_eyecolor ?? '')} <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_eyecol +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">(next)</a>`);
    } else {
      if (((s as any).pcs_eyecol ?? 0) >= 3) {
        // TODO-QSP: dynamic text: Your eyes are now <a href="exec:pcs_eyecol -=1 & gt ''cheatmenu_din'', ''looks''...
        scene.text(`Your eyes are now <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_eyecol -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027looks/u0027); return false;">(prev)</a> ${((s as any).pcs_eyecolor ?? '')} (next)`);
      }
    }
  }
  scene.text('</td></tr></table>');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['change_avatar_path'] = 'gs \'cheatmenu_din\', \'change_avatar_path\'';
  scene.build();
}

function enterChangeAvatarPath(s: GameState, scene: SceneBuilder): void {
  ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = window.prompt("Where is the avatar image located? (Leave blank for \"images/avatar.jpg\")") ?? '';
  if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
    ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = 'images/avatar.jpg';
  }
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  scene.build();
}

function enterChangePcsMassBody(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body', 'Set_mass_distribution_using_body', (((s as any).pcs_mass ?? {})?.['body'] ?? 0) + ((s as any).locArgs?.[1] ?? 0));
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  scene.build();
}

function enterChangePcsMassBust(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = ((s as any).pcs_mass['bust'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = ((s as any).pcs_mass['bust_gen'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  if (((s as any).pcs_mass ?? 0)?.['bust'] < 2) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust'] = 2;
  }
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] < 2) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 2;
  }
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_message'] = (((s as any).pcs_mass ?? 0)?.['bust']);
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  scene.build();
}

function enterChangePcsMassButt(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = ((s as any).pcs_mass['butt'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = ((s as any).pcs_mass['butt_gen'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  if (((s as any).pcs_mass ?? 0)?.['butt'] < 2) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt'] = 2;
  }
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] < 2) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 2;
  }
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_message'] = (((s as any).pcs_mass ?? 0)?.['butt']);
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  scene.build();
}

function enterTeeth(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'improve') {
    (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'worsen') {
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) + (1);
    }
  }
  qspCall(s, 'body_desc', 'teeth');
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
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
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
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
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
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
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
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
  qspGoto(s, 'cheatmenu_din', 'looks');
  // TODO-QSP: end
  scene.build();
}

function enterVneshpara(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Cheat Menu - ?</h1></center>');
  scene.text('Appearance Parameters');
  scene.text('Base Appearance');
  // TODO-QSP: dynamic text: pcs_skin = <<pcs_skin>> and skin_bonus = <<skinBonus>> (between 0 and 100)
  scene.text(`pcs_skin = ${((s as any).pcs_skin ?? '')} and skin_bonus = ${((s as any).skinBonus ?? '')} (between 0 and 100)`);
  // TODO-QSP: dynamic text: bodyShapeBonus = <<bodyShapeBonus>> (between -158 and 70)
  scene.text(`bodyShapeBonus = ${((s as any).bodyShapeBonus ?? '')} (between -158 and 70)`);
  // TODO-QSP: dynamic text: visableAgePenalty = <<visibleAgePenalty>> (-2.5 for every year below 20)
  scene.text(`visableAgePenalty = ${((s as any).visibleAgePenalty ?? '')} (-2.5 for every year below 20)`);
  // TODO-QSP: dynamic text: pcs_teeth = <<pcs_teeth>> and teethPenalty = <<teethPenalty>> 10 * (pcs_teeth + ...
  scene.text(`pcs_teeth = ${((s as any).pcs_teeth ?? '')} and teethPenalty = ${((s as any).teethPenalty ?? '')} 10 * (pcs_teeth + pcs_missing_teeth)`);
  // TODO-QSP: dynamic text: attributeBonus = <<attributeBonus>> (pcs_agil + pcs_vital) / 5
  scene.text(`attributeBonus = ${((s as any).attributeBonus ?? '')} (pcs_agil + pcs_vital) / 5`);
  // TODO-QSP: dynamic text: these are adjusted by BMI (<<pcs_bmi[0]>>.<<pcs_bmi[1]>>) if it is outside 19.0 ...
  scene.text(`these are adjusted by BMI (${(((s as any).pcs_bmi ?? 0)?.[0] ?? '')}.${(((s as any).pcs_bmi ?? 0)?.[1] ?? '')}) if it is outside 19.0 - 24.9`);
  // TODO-QSP: dynamic text: pcs_apprncbase = <<pcs_apprncbase>>
  scene.text(`pcs_apprncbase = ${((s as any).pcs_apprncbase ?? '')}`);
  scene.text('Bonus');
  // TODO-QSP: dynamic text: groomingBonus = <<func(''AppearanceSystem'',''CalcGroomingBonus'')>> (pcs_breath...
  scene.text(`groomingBonus = ${qspFunc(s, 'AppearanceSystem', 'CalcGroomingBonus')} (pcs_breath and makeup)`);
  // TODO-QSP: dynamic text: groomingPenalty = <<func(''AppearanceSystem'',''CalcGroomingPenalty'')>> 
  scene.text(`groomingPenalty = ${qspFunc(s, 'AppearanceSystem', 'CalcGroomingPenalty')} `);
  scene.text('(lipbalm, hair brushed, hair length, deo, sweat, glasses, hair color fade, leg hair..)');
  // TODO-QSP: dynamic text: accessoriesBonus = <<func(''AppearanceSystem'',''CalcAccessoriesBonus'')>> 
  scene.text(`accessoriesBonus = ${qspFunc(s, 'AppearanceSystem', 'CalcAccessoriesBonus')} `);
  // TODO-QSP: dynamic text: CalcClothingBonus = <<func(''AppearanceSystem'',''CalcClothingBonus'')>> 
  scene.text(`CalcClothingBonus = ${qspFunc(s, 'AppearanceSystem', 'CalcClothingBonus')} `);
  // TODO-QSP: dynamic text: ((PXCloThinness + PXCloTopCut + PXCloBottomShortness)/2)/ 76 * PCloQuality
  scene.text('((PXCloThinness + PXCloTopCut + PXCloBottomShortness)/2)/ 76 * PCloQuality');
  // TODO-QSP: dynamic text: coatQualityBonus = <<coatQualityBonus>>
  scene.text(`coatQualityBonus = ${((s as any).coatQualityBonus ?? '')}`);
  // TODO-QSP: dynamic text: shoesQualityBonus = <<PShoQuality>>
  scene.text(`shoesQualityBonus = ${((s as any).PShoQuality ?? '')}`);
  // TODO-QSP: dynamic text: PXCloThinness = <<PXCloThinness>>
  scene.text(`PXCloThinness = ${((s as any).PXCloThinness ?? '')}`);
  // TODO-QSP: dynamic text: PXCloTopCut = <<PXCloTopCut>>
  scene.text(`PXCloTopCut = ${((s as any).PXCloTopCut ?? '')}`);
  // TODO-QSP: dynamic text: PXCloBottomShortness = <<PXCloBottomShortness>>
  scene.text(`PXCloBottomShortness = ${((s as any).PXCloBottomShortness ?? '')}`);
  // TODO-QSP: dynamic text: PCloQuality = <<PCloQuality>>
  scene.text(`PCloQuality = ${((s as any).PCloQuality ?? '')}`);
  // TODO-QSP: dynamic text: lipBalmPenalty = <<lipBalmPenalty>>
  scene.text(`lipBalmPenalty = ${((s as any).lipBalmPenalty ?? '')}`);
  // TODO-QSP: dynamic text: hairPenalty = <<hairPenalty>>
  scene.text(`hairPenalty = ${((s as any).hairPenalty ?? '')}`);
  // TODO-QSP: dynamic text: deodorantPenalty = <<deodorantPenalty>>
  scene.text(`deodorantPenalty = ${((s as any).deodorantPenalty ?? '')}`);
  // TODO-QSP: dynamic text: sweatPenalty = <<sweatPenalty>>
  scene.text(`sweatPenalty = ${((s as any).sweatPenalty ?? '')}`);
  // TODO-QSP: dynamic text: glassesPenalty = <<glassesPenalty>>
  scene.text(`glassesPenalty = ${((s as any).glassesPenalty ?? '')}`);
  // TODO-QSP: dynamic text: hairDyePenalty = <<hairDyePenalty>>
  scene.text(`hairDyePenalty = ${((s as any).hairDyePenalty ?? '')}`);
  // TODO-QSP: dynamic text: legPenalty = <<legPenalty>>
  scene.text(`legPenalty = ${((s as any).legPenalty ?? '')}`);
  // TODO-QSP: dynamic text: pcs_eyesize = <<pcs_eyesize>>
  scene.text(`pcs_eyesize = ${((s as any).pcs_eyesize ?? '')}`);
  // TODO-QSP: dynamic text: pcs_lip = <<pcs_lip>>
  scene.text(`pcs_lip = ${((s as any).pcs_lip ?? '')}`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to appearance menu', goto: ['cheatmenu_din', 'looks'] },
  ]);
  scene.build();
}

function enterParameters(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Cheat Menu - Appearance Stats</h1></center>');
  scene.text('Body Shape Parameters');
  // TODO-QSP: dynamic text: <<pcs_bust>> - <<pcs_waist>> - <<pcs_hips>>, <<$titsize>> breasts, the differenc...
  scene.text(`${((s as any).pcs_bust ?? '')} - ${((s as any).pcs_waist ?? '')} - ${((s as any).pcs_hips ?? '')}, ${((s as any).titsize ?? '')} breasts, the difference between the hips and waist ${((s as any).pcs_hips ?? '')-((s as any).pcs_waist ?? '')} cm`);
  // TODO-QSP: dynamic text: Muscularity: strenbuf = <<strenbuf>>, pcs_mass[''body''] =  <<pcs_mass[''body'']...
  scene.text(`Muscularity: strenbuf = ${((s as any).strenbuf ?? '')}, pcs_mass['body'] =  ${(((s as any).pcs_mass ?? 0)?.['body'] ?? '')}, fat = ${((s as any).fat ?? '')}`);
  scene.text('Variable List:');
  // TODO-QSP: dynamic text: agilbuf = <<agilbuf>>
  scene.text(`agilbuf = ${((s as any).agilbuf ?? '')}`);
  // TODO-QSP: dynamic text: strenbuf = <<strenbuf>>
  scene.text(`strenbuf = ${((s as any).strenbuf ?? '')}`);
  // TODO-QSP: dynamic text: vitalbuf = <<vitalbuf>>
  scene.text(`vitalbuf = ${((s as any).vitalbuf ?? '')}`);
  // TODO-QSP: dynamic text: BMI (pcs_bmi) = <<pcs_bmi[0]>>.<<pcs_bmi[1]>>
  scene.text(`BMI (pcs_bmi) = ${(((s as any).pcs_bmi ?? 0)?.[0] ?? '')}.${(((s as any).pcs_bmi ?? 0)?.[1] ?? '')}`);
  // TODO-QSP: dynamic text: weight (pcs_weight) = <<pcs_weight[0]>>.<<pcs_weight[1]>> kg
  scene.text(`weight (pcs_weight) = ${(((s as any).pcs_weight ?? 0)?.[0] ?? '')}.${(((s as any).pcs_weight ?? 0)?.[1] ?? '')} kg`);
  // TODO-QSP: dynamic text: bust (pcs_bust) = <<pcs_bust>>
  scene.text(`bust (pcs_bust) = ${((s as any).pcs_bust ?? '')}`);
  // TODO-QSP: dynamic text: band (pcs_band) = <<pcs_band>>
  scene.text(`band (pcs_band) = ${((s as any).pcs_band ?? '')}`);
  // TODO-QSP: dynamic text: waist (pcs_waist) = <<pcs_waist>>
  scene.text(`waist (pcs_waist) = ${((s as any).pcs_waist ?? '')}`);
  // TODO-QSP: dynamic text: hips (pcs_hips) = <<pcs_hips>>
  scene.text(`hips (pcs_hips) = ${((s as any).pcs_hips ?? '')}`);
  // TODO-QSP: dynamic text: bust - band (pcs_cupsize) = <<pcs_cupsize>>
  scene.text(`bust - band (pcs_cupsize) = ${((s as any).pcs_cupsize ?? '')}`);
  // TODO-QSP: dynamic text: pcs_mass[''bust''] = <<pcs_mass[''bust'']>>
  scene.text(`pcs_mass['bust'] = ${(((s as any).pcs_mass ?? 0)?.['bust'] ?? '')}`);
  // TODO-QSP: dynamic text: pcs_mass[''bust_gen''] = <<pcs_mass[''bust_gen'']>>
  scene.text(`pcs_mass['bust_gen'] = ${(((s as any).pcs_mass ?? 0)?.['bust_gen'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''bust_magic''] = <<bodyVars[''bust_magic'']>>
  scene.text(`bodyVars['bust_magic'] = ${(((s as any).bodyVars ?? 0)?.['bust_magic'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''bust_silicone''] = <<bodyVars[''bust_silicone'']>>
  scene.text(`bodyVars['bust_silicone'] = ${(((s as any).bodyVars ?? 0)?.['bust_silicone'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''bust_other''] = <<bodyVars[''bust_other'']>>
  scene.text(`bodyVars['bust_other'] = ${(((s as any).bodyVars ?? 0)?.['bust_other'] ?? '')}`);
  // TODO-QSP: dynamic text: pcs_mass[''butt''] = <<pcs_mass[''butt'']>>
  scene.text(`pcs_mass['butt'] = ${(((s as any).pcs_mass ?? 0)?.['butt'] ?? '')}`);
  // TODO-QSP: dynamic text: pcs_mass[''butt_gen''] = <<pcs_mass[''butt_gen'']>>
  scene.text(`pcs_mass['butt_gen'] = ${(((s as any).pcs_mass ?? 0)?.['butt_gen'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''butt_silicone''] = <<bodyVars[''butt_silicone'']>>
  scene.text(`bodyVars['butt_silicone'] = ${(((s as any).bodyVars ?? 0)?.['butt_silicone'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''butt_other''] = <<bodyVars[''butt_other'']>>
  scene.text(`bodyVars['butt_other'] = ${(((s as any).bodyVars ?? 0)?.['butt_other'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''vhips''] = <<bodyVars[''vhips'']>>
  scene.text(`bodyVars['vhips'] = ${(((s as any).bodyVars ?? 0)?.['vhips'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''wratio''] = <<bodyVars[''wratio'']>>
  scene.text(`bodyVars['wratio'] = ${(((s as any).bodyVars ?? 0)?.['wratio'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''bratio''] = <<bodyVars[''bratio'']>>
  scene.text(`bodyVars['bratio'] = ${(((s as any).bodyVars ?? 0)?.['bratio'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''hratio''] = <<bodyVars[''hratio'']>>
  scene.text(`bodyVars['hratio'] = ${(((s as any).bodyVars ?? 0)?.['hratio'] ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''vofat''] = <<bodyVars[''vofat'']>>
  scene.text(`bodyVars['vofat'] = ${(((s as any).bodyVars ?? 0)?.['vofat'] ?? '')}`);
  // TODO-QSP: dynamic text: magf2bdo = <<magf2bdo>>
  scene.text(`magf2bdo = ${((s as any).magf2bdo ?? '')}`);
  // TODO-QSP: dynamic text: mgf2bnocnt = <<mgf2bnocnt>>
  scene.text(`mgf2bnocnt = ${((s as any).mgf2bnocnt ?? '')}`);
  // TODO-QSP: dynamic text: magtarcup = <<magtarcup>>
  scene.text(`magtarcup = ${((s as any).magtarcup ?? '')}`);
  // TODO-QSP: dynamic text: normbuffpick = <<normbuffpick>>
  scene.text(`normbuffpick = ${((s as any).normbuffpick ?? '')}`);
  // TODO-QSP: dynamic text: nrmbfpckct = <<nrmbfpckct>>
  scene.text(`nrmbfpckct = ${((s as any).nrmbfpckct ?? '')}`);
  // TODO-QSP: dynamic text: bodyVars[''weight_warning''] = <<bodyVars[''weight_warning'']>>
  scene.text(`bodyVars['weight_warning'] = ${(((s as any).bodyVars ?? 0)?.['weight_warning'] ?? '')}`);
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['tatoo'] = 'gt \'cheatmenu_din\', \'tatoo\'';
  scene.actions([
    { label: 'Return to appearance menu', goto: ['cheatmenu_din', 'looks'] },
  ]);
  scene.build();
}

function enterTatoo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Cheat Menu - Tattoos</h1></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ankle', 'ankle']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'arm', 'arm']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ass', 'ass']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'back', 'back']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'belly', 'belly']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breast', 'breast']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chest', 'chest']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'face', 'face']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leg', 'leg']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'lip', 'lip', 'You do not have a tattoo on your leg']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'neck', 'neck']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pussy', 'pubic', 'You do not have a pubic tattoo']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'shoulder', 'shoulder']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'side', 'the tattoo on your side', 'You do not have a tattoo on your side']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tramp', 'tramp stamp', 'You do not have a tramp stamp']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'under', 'under breast', 'You do not have an under breast tattoo']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'wrist', 'wrist']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hand', 'hand']; enterCheatTattoo(s, scene); (s as any).locArgs = __savedLocArgs; }
  if ((!((s as any).cosmetic_tattoo ?? 0))) {
    scene.text('You do not have the makup tattoo</a>');
  }
  if (((s as any).cosmetic_tattoo ?? 0) >= 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.cosmetic_tattoo = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027tatoo/u0027); return false;">Remove your makup tattoo</a>');
  }
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['setStat'] = 'gs \'cheatmenu_din\', \'setStat\', $ARGS[0], ARGS[1]';
  scene.actions([
    { label: 'Return to appearance menu', goto: ['cheatmenu_din', 'looks'] },
  ]);
  scene.build();
}

function enterSetStat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shortgs', 'setStat', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  qspGoto(s, 'cheatmenu_din', 'stats');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['setStatInput'] = 'gs \'cheatmenu_din\', \'setStatInput\', $ARGS[0], $ARGS[1]';
  scene.build();
}

function enterSetStatInput(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_input = window.prompt("Set your " + (String((s as any).locArgs?.[2] ?? '')) + " level:") ?? '';
  if (!isNaN(((s as any).temp_input ?? 0)) && ((s as any).temp_input ?? 0) !== '' !== 0) {
    qspCall(s, 'shortgs', 'setStat', ((s as any).locArgs?.[1] ?? 0), parseFloat(((s as any).temp_input ?? 0)));
  } else {
    if (((s as any).temp_input ?? 0) !== '') {
    }
  }
  qspGoto(s, 'cheatmenu_din', 'stats');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['setStatInputInverted'] = 'gs \'cheatmenu_din\', \'setStatInputInverted\', $ARGS[0], $ARGS[1]';
  scene.build();
}

function enterSetStatInputInverted(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_input = window.prompt("Set your " + (String((s as any).locArgs?.[2] ?? '')) + " level:") ?? '';
  if (!isNaN(((s as any).temp_input ?? 0)) && ((s as any).temp_input ?? 0) !== '' !== 0) {
    qspCall(s, 'shortgs', 'setStat', ((s as any).locArgs?.[1] ?? 0), (100 - parseFloat(((s as any).temp_input ?? 0))));
  } else {
    if (((s as any).temp_input ?? 0) !== '') {
    }
  }
  qspGoto(s, 'cheatmenu_din', 'stats');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['setAttrs'] = 'gs \'cheatmenu_din\', \'setAttrs\', ARGS[0]';
  scene.build();
}

function enterSetAttrs(s: GameState, scene: SceneBuilder): void {
  (s as any).loop_index = 0;
  (s as any).loop_index_max = 0;
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    (s as any).loop_index_max = ((s as any).loop_index_max ?? 0) - (1);
  }
  // TODO-QSP: :set_attrs_loop
  qspCall(s, 'shortgs', 'setStat', (((s as any).att_name ?? 0)?.[String((s as any).loop_index ?? 0)] ?? 0), ((s as any).locArgs?.[1] ?? 0));
  (s as any).loop_index = ((s as any).loop_index ?? 0) + (1);
  if (((s as any).loop_index ?? 0) < ((s as any).loop_index_max ?? 0)) {
    // TODO-QSP: jump 'set_attrs_loop'
  }
  qspGoto(s, 'cheatmenu_din', 'stats');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['setSkills'] = 'gs \'cheatmenu_din\', \'setSkills\', ARGS[0]';
  scene.build();
}

function enterSetSkills(s: GameState, scene: SceneBuilder): void {
  (s as any).loop_index = 0;
  (s as any).loop_index_max = 0;
  // TODO-QSP: :set_skills_loop
  if (((s as any).skl_name ?? 0)?.[String((s as any).loop_index ?? 0)] !== 'inhib') {
    qspCall(s, 'shortgs', 'setStat', (((s as any).skl_name ?? 0)?.[String((s as any).loop_index ?? 0)] ?? 0), ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).loop_index = ((s as any).loop_index ?? 0) + (1);
  if (((s as any).loop_index ?? 0) < ((s as any).loop_index_max ?? 0)) {
    // TODO-QSP: jump 'set_skills_loop'
  }
  qspGoto(s, 'cheatmenu_din', 'stats');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['printStatLinks'] = 'gs \'cheatmenu_din\', \'printStatLinks\', $ARGS[0], $ARGS[1]';
  scene.build();
}

function enterPrintStatLinks(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[3] ?? '') === 0) {
    // TODO-QSP: dynamic text: "<<$ARGS[2]>> (<<dyneval('result = <<$ARGS[1]>>_lvl')>>) - Total (<<dyneval('res...
    scene.text(`"${((s as any).locArgs?.[2] ?? '')} (${0}_lvl')>>) - Total (${0}')>>): "`);
  } else {
    // TODO-QSP: dynamic text: "<<$ARGS[2]>> (<<dyneval('result = <<$ARGS[1]>>_lvl')>>): "
    scene.text(`"${((s as any).locArgs?.[2] ?? '')} (${0}_lvl')>>): "`);
  }
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', 0">Min</a> 
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, 0 */ return s; }); return false;">Min</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl - ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl - 10 */ return s; }); return false;">-10</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl - ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl - 5 */ return s; }); return false;">-5</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl - ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl - 1 */ return s; }); return false;">-1</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl + ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl + 1 */ return s; }); return false;">+1</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl + ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl + 5 */ return s; }); return false;">+5</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl + ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl + 10 */ return s; }); return false;">+10</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', 100">Max</a> 
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, 100 */ return s; }); return false;">Max</a> `);
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['printStatLinksInverted'] = 'gs \'cheatmenu_din\', \'printStatLinksInverted\', $ARGS[0], $ARGS[1]';
  scene.build();
}

function enterPrintStatLinksInverted(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[3] ?? '') === 0) {
    // TODO-QSP: dynamic text: "<<$ARGS[2]>> (<<dyneval('result = 100 - <<$ARGS[1]>>_lvl')>>) - Total (<<dyneva...
    scene.text(`"${((s as any).locArgs?.[2] ?? '')} (${0}_lvl')>>) - Total (${0}')>>): "`);
  } else {
    // TODO-QSP: dynamic text: "<<$ARGS[2]>> (<<dyneval('result = 100 - <<$ARGS[1]>>_lvl')>>): "
    scene.text(`"${((s as any).locArgs?.[2] ?? '')} (${0}_lvl')>>): "`);
  }
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', 100">Min</a> 
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, 100 */ return s; }); return false;">Min</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl + ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl + 10 */ return s; }); return false;">-10</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl + ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl + 5 */ return s; }); return false;">-5</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl + ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl + 1 */ return s; }); return false;">-1</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl - ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl - 1 */ return s; }); return false;">+1</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl - ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl - 5 */ return s; }); return false;">+5</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', <<$ARGS[1]>>_lvl - ...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, ${((s as any).locArgs?.[1] ?? '')}_lvl - 10 */ return s; }); return false;">+10</a> `);
  // TODO-QSP: dynamic text: <a href="exec:dynamic $cheatmenu['setStat'], '<<$ARGS[1]>>', 0">Max</a> 
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[/u0027setStat/u0027], /u0027${((s as any).locArgs?.[1] ?? '')}/u0027, 0 */ return s; }); return false;">Max</a> `);
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['stats'] = 'gt \'cheatmenu_din\', \'stats\'';
  scene.build();
}

function enterStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Skill']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Attributes and Skills</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('Levels are shown before modifiers (e.g. Archetype modifiers).');
  // TODO-QSP: $cheatmenu['table_start']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stren', 'Strength', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'agil', 'Agility', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vital', 'Endurance', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'intel', 'Intelligence', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'react', 'Reaction', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sprt', 'Spirit', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chrsm', 'Charisma', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'prcptn', 'Perception', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'magik', 'Magic', 1]; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'inhib', 'Inhibition', 1]; enterPrintStatLinksInverted(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).willpowermax ?? 0) > 150) {
    (s as any).willpowermax = 150;
  }
  if (((s as any).willpowermax ?? 0) < 50) {
    (s as any).willpowermax = 50;
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    // TODO-QSP: dynamic text: l '<a href="exec:teacher[''level''] += 10 & gt ''cheatmenu_din'', ''stats''">Rep...
    scene.text(`l '<a href="#" onclick="window.__gameStore.setState((s) => { (s.teacher ??= {})/u0027level/u0027 +=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027stats/u0027); return false;">Reputation teacher+10: ${(((s as any).teacher ?? 0)?.['level'] ?? '')}</a>'`);
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    // TODO-QSP: dynamic text: l '<a href="exec:teacher[''level''] -= 10 & gt ''cheatmenu_din'', ''stats''">Rep...
    scene.text(`l '<a href="#" onclick="window.__gameStore.setState((s) => { (s.teacher ??= {})/u0027level/u0027 -=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027stats/u0027); return false;">Reputation teacher-10: ${(((s as any).teacher ?? 0)?.['level'] ?? '')}</a>'`);
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'math', 'Math']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'rus', 'Russian']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'lit', 'Literature']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'art', 'Art']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bio', 'Biology']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'eng', 'English']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'geo', 'Geography']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sci', 'Science']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'his', 'History']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'shop', 'Shop']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'comp', 'Computer']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mus', 'Music']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pe', 'P.E.']; enterCheatGradeRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).gschoolVars ?? 0)?.['absence_count'] >= 0) {
      // TODO-QSP: dynamic text: l '<a href="exec: gschoolVars[''absence_count''] = 0 & gt ''cheatmenu_din'', ''s...
      scene.text(`l '<a href="#" onclick="window.__gameStore.getState().doGoto(String(window.__gameStore.getState().choolVars ?? /u0027/u0027), /u0027/u0027); return false;">Zero Absenteeism (School): ${(((s as any).gschoolVars ?? 0)?.['absence_count'] ?? '')}</a>'`);
    }
  }
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'splcstng', 'Spellcasting']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'humint', 'People Skills']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'persuas', 'Persuasion']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'observ', 'Observation']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'jab', 'Jabs']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'punch', 'Power Strikes']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kick', 'Kicks']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'def', 'Defence']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'shoot', 'Marksmanship']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bushcraft', 'Bushcraft']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'run', 'Running']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vball', 'Volleyball']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ftbll', 'Football']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bkbll', 'Basketball']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'wrstlng', 'Wrestling']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'icesktng', 'Ice Skating']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gaming', 'Gaming']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chess', 'Chess']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pool', 'Pool']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'makupskl', 'Makeup']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'danc', 'Modern Dancing']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dancero', 'Erotic Dancing']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dancpol', 'Pole Dancing']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cheer', 'Cheerleading']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heels', 'Heels']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vokal', 'Singing']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'instrmusic', 'Instrumental Music']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'photoskl', 'Photography']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'artskls', 'Artistic Skills']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'perform', 'Performance']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'musicprod', 'Music Production']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'compskl', 'Computer Skill']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'comphckng', 'Hacking']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hndiwrk', 'Handy-work']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sewng', 'Tailoring']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'servng', 'Serving']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'medcn', 'Medicine']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cleaning', 'Cleaning']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mdlng', 'Modeling']; enterPrintStatLinks(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.build();
}

function enterStory(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Story']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Story cheats</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  // TODO-QSP: 'Prevent non-drama GAMEOVER: ' +        iif(cheatVars['gameover'],        '<a href="exec:  cheatVars...
  // TODO-QSP: 'Automatically win every fight: ' +        iif(cheatVars['win_fights'],      '<a href="exec:  cheatV...
  // TODO-QSP: 'Automatically resolve non-magical fights: ' +  iif(cheatVars['auto_combat'],      '<a href="exec:  ...
  // TODO-QSP: 'Ignore conflicting job schedules: ' +      iif(cheatVars['work'],          '<a href="exec:  cheatVa...
  // TODO-QSP: 'Show hidden jobs in work journal: ' +      iif(cheatVars['show_hidden_jobs'],    '<a href="exec:  c...
  // TODO-QSP: 'Remove "once a week" therapist limit: ' +    iif(cheatVars['therapist_schedule'],  '<a href="exec: ...
  // TODO-QSP: 'Instantly enter any appointment: ' +      iif(cheatVars['appointments'],      '<a href="exec:  chea...
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027therapist_reset/u0027); return false;">Reset therapist states</a>');
  qspCall(s, 'blackmailer', 'cheatmenu');
  qspCall(s, 'belgang', 'cheatmenu');
  scene.text('<h4>Calendar</h4>');
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027calendar/u0027, /u0027remove/u0027, /u0027volleyball_tournament/u0027); return false;">Remove Volleyball Tournament</a>');
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.build();
}

function enterNpcs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'NPCs']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - NPCs</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<center><h3>Relationships and Renown</h3></center>');
  scene.text('<center>Relationship values are from 0 - 100.</center>');
  scene.text('<center>If they exceed this limit they will be reset overnight.</center>');
  scene.text('Relationships in Pavlovsk');
  scene.text('<center><b><b>Family</b></b></center>');
  if ((!((s as any).Enable_reputation_family ?? 0))) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_family = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Show details</a>');
  }
  if (((s as any).Enable_reputation_family ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_family = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Hide details</a>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A28', '', 'Stepfather']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A29', '', 'Mother']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A33', '', 'Sister']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A34', '', 'Brother']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: 'Your dog: '+iif($status['dog'] = 'active', '<b>Active</b>', '<a href="exec: $status[''dog''] = ''ac...
  if (((s as any).status ?? 0)?.['dog'] !== 'blocked') {
    // TODO-QSP: 'Set the relationship and love of your dog to always be at maximum: '+iif(cheat['dog_rel'] = 0, '<a ...
    // TODO-QSP: dynamic text: 'You need to feed your dog <<rex[''count_feed_base'']>> per day: '+iif(rex['coun...
    scene.text(`You need to feed your dog ${(((s as any).rex ?? 0)?.['count_feed_base'] ?? '')} per day: ` + ((((s as any).rex ?? 0)?.['count_feed_base'] > 1) ? ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.rex ??= {})/u0027count_feed_base/u0027 -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">-1</a>') : ('-1')) + '|<a href="#" onclick="window.__gameStore.setState((s) => { (s.rex ??= {})/u0027count_feed_base/u0027 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">+1</a>');
    // TODO-QSP: dynamic text: 'You need to walk your dog <<rex[''count_walk_base'']>> per day: '+iif(rex['coun...
    scene.text(`You need to walk your dog ${(((s as any).rex ?? 0)?.['count_walk_base'] ?? '')} per day: ` + ((((s as any).rex ?? 0)?.['count_walk_base'] > 1) ? ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.rex ??= {})/u0027count_walk_base/u0027 -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">-1</a>') : ('-1')) + '|<a href="#" onclick="window.__gameStore.setState((s) => { (s.rex ??= {})/u0027count_walk_base/u0027 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">+1</a>');
    // TODO-QSP: dynamic text: 'You need to bath your dog <<rex[''count_bath_base'']>> per week: '+iif(rex['cou...
    scene.text(`You need to bath your dog ${(((s as any).rex ?? 0)?.['count_bath_base'] ?? '')} per week: ` + ((((s as any).rex ?? 0)?.['count_bath_base'] > 1) ? ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.rex ??= {})/u0027count_bath_base/u0027 -=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">-1</a>') : ('-1')) + '|<a href="#" onclick="window.__gameStore.setState((s) => { (s.rex ??= {})/u0027count_bath_base/u0027 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">+1</a>');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.text('<center><b><b>School</b></b></center>');
    scene.text('<i>Popular Kids</i>');
    if ((!((s as any).Enable_reputation_popular ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_popular = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Show details</a>');
    }
    if (((s as any).Enable_reputation_popular ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_popular = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Hide details</a>');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A1']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A4']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A14']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A15']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A17']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A22']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A146']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A147']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A148']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A25']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A139']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A140']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.text('<i>Athletes</i>');
    if ((!((s as any).Enable_reputation_athletes ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_athletes = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Show details</a>');
    }
    if (((s as any).Enable_reputation_athletes ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_athletes = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Hide details</a>');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A3']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      if ((!((s as any).fedormasha ?? 0))) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A5']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A8']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A13']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A18']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A19']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A23']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A149']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A150']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A141']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A165']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.text('<i>Nerds</i>');
    if ((!((s as any).Enable_reputation_nerds ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_nerds = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Show details</a>');
    }
    if (((s as any).Enable_reputation_nerds ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_nerds = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Hide details</a>');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A2']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A6']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A12']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A16']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A151']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A152']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A153']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A142']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A240']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.text('<i>Gopniks</i>');
    if ((!((s as any).Enable_reputation_gopniks ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_gopniks = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Show details</a>');
    }
    if (((s as any).Enable_reputation_gopniks ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_gopniks = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Hide details</a>');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A9']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A10']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A11']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A20']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A21']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A24']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A154']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A155']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A156']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A157']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A158']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A143']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A144']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A145']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A189']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.text('<i>Outcasts/Loners</i>');
    if ((!((s as any).Enable_reputation_outcasts ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_outcasts = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Show details</a>');
    }
    if (((s as any).Enable_reputation_outcasts ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_outcasts = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Hide details</a>');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A7']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A25']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).fedormasha ?? 0) === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A5']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A159']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    scene.text('<i>Teachers/Coaches</i>');
    if ((!((s as any).Enable_reputation_teachers ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_teachers = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Show details</a>');
    }
    if (((s as any).Enable_reputation_teachers ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_teachers = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Hide details</a>');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A26']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A69', '', 'Mikhail Nikolayevich']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A128']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A129']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A130']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A131']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A132']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A133']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A134']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A135']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A136']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A137']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A138']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: $cheatmenu['table_second']
  scene.text('Miscellaneous relationships');
  scene.text('<center><b><b>Others</b></b></center>');
  if ((!((s as any).Enable_reputation_others ?? 0))) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_others = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Show details</a>');
  }
  if (((s as any).Enable_reputation_others ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_reputation_others = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Hide details</a>');
    if (((s as any).npc_rel ?? 0)?.['A112'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A112', '', 'Sergei Shulgin']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A219'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A219', '', 'Kat']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A220'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A220', '', 'Vika']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A93'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A93', '', 'Irina']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A43'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A43', '', 'Tamara']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).alla ?? 0) >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'alla', 'Alla', 'npcs']; enterCheatVarRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).masha ?? 0) >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'masha', 'Masha', 'npcs']; enterCheatVarRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A41'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A41', '', 'Givi']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A42'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A42', '', 'Ashot']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A89'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A89', '', 'Eugene']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A217'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A217', '', 'Pavlin']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).hunterVars ?? 0)?.['AndreiQw'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hunterVars[\'AndreiQw\']', 'Hunter Andrei', 'npcs']; enterCheatVarRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hunterVars[\'SergeiQw\']', 'Hunter Sergei', 'npcs']; enterCheatVarRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hunterVars[\'IgorQW\']', 'Hunter Igor', 'npcs']; enterCheatVarRow(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).npc_rel ?? 0)?.['A216'] >= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A216', '', 'Martin']; enterCheatNpcRel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.text('<center><b><b>Nicholas\' Family</b></b></center>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027); return false;">Storyline Debug Menu</a>');
  if (Object.keys((s as any).lover ?? {}).length > 0) {
    scene.text('<center><b><b>Lovers</b></b></center>');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027lover_menu/u0027); return false;">Edit lovers</a>');
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 50) {
    qspCall(s, 'fame', '');
    // TODO-QSP: dynamic text: 'In Pavlovsk you are known as a ' + $func('wrap', 'neg', '<<$gnikname>>') + ' <a...
    scene.text(`In Pavlovsk you are known as a ${((s as any).gnikname ?? '')} <a href="#" onclick="window.__gameStore.setState((s) => { (s.fame ??= {})/u0027pav_sex/u0027 = s.0; (s.fame ??= {})/u0027pav_prostitute/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027calculateSlut/u0027); return false;">Clear</a>`);
  }
  if (((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) > 0  ||  ((s as any).sipovka ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.opusk = s.0; s.gnewQW = s.0; s.sipovka = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear reputation with Gopniks</a>');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.text('<center><b>WARNING</b></center>');
    if (((s as any).motherKnowWhore ?? 0) > 0) {
      scene.text('Your mother knows that you are sexually active and considers you a whore. <a href="#" onclick="window.__gameStore.setState((s) => { s.motherKnowWhore = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
    }
    if (((s as any).motherKnowSpravka ?? 0) > 0) {
      scene.text('Your mother knows that you are sexually active. <a href="#" onclick="window.__gameStore.setState((s) => { s.motherKnowSpravka = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
    }
    if (((s as any).motherKnowDildo ?? 0) > 0) {
      scene.text('Your mother knows you masturbate with a dildo. <a href="#" onclick="window.__gameStore.setState((s) => { s.motherKnowDildo = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
    }
    if (((s as any).motherKnowRaped ?? 0) > 0) {
      scene.text('Your mother knows you have been raped. <a href="#" onclick="window.__gameStore.setState((s) => { s.motherKnowRaped = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
    }
    if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowDildo ?? 0) === 0  &&  (!((s as any).motherKnowRaped ?? 0))) {
      scene.text('Your mother thinks that you are a virgin.');
    }
    if (((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('Your brother thinks you are a total whore. <a href="#" onclick="window.__gameStore.setState((s) => { s.evgenQW = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
    } else {
      if (((s as any).evgenQW ?? 0) >= 3) {
        scene.text('Your brother thinks you are a slut. <a href="#" onclick="window.__gameStore.setState((s) => { s.evgenQW = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
      } else {
        if (((s as any).brotherQW ?? 0)?.['know_slut'] === 1) {
          scene.text('Your brother saw semen on your body and thinks you fuck around. <a href="#" onclick="window.__gameStore.setState((s) => { (s.brotherQW ??= {})/u0027know_slut/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
        } else {
          if (((s as any).brotherQW ?? 0)?.['know_slut'] >= 2) {
            scene.text('Your brother saw you in the park fucking the Gopniks. <a href="#" onclick="window.__gameStore.setState((s) => { (s.brotherQW ??= {})/u0027know_slut/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
          } else {
            scene.text('Your brother has a good opinion of you.');
          }
        }
      }
    }
    if (((s as any).sisterknowslut ?? 0) > 1  &&  ((s as any).sisboypartyQW ?? 0) > 1) {
      scene.text('Your sister thinks you are a slut <a href="#" onclick="window.__gameStore.setState((s) => { s.sisboypartyQW = s.0; s.sisterknowslut = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
    } else {
      if (((s as any).sisterknowslut ?? 0) > 0) {
        scene.text('Your sister knows that you sleep around. <a href="#" onclick="window.__gameStore.setState((s) => { s.sisterknowslut = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>');
      } else {
        scene.text('Your sister has a good opinion of you.');
      }
    }
    if (qspFunc(s, 'homes_properties', 'can_live_here', 'parents_home') === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027give_access/u0027, /u0027parents_home/u0027); return false;">Restore</a> access to your parent\'s apartment.');
    }
    if (((s as any).momKnowsKolka ?? 0) === 1) {
      scene.text('Your mother knows Kolka is the father. <a href="#" onclick="window.__gameStore.setState((s) => { s.momKnowsKolka = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>.');
    }
    if (((s as any).momKnowsVladimir ?? 0) === 1) {
      scene.text('Your mother knows Vladimir is the father. <a href="#" onclick="window.__gameStore.setState((s) => { s.momKnowsVladimir = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027npcs/u0027); return false;">Clear</a>.');
    }
    if (((s as any).gschoolVars ?? 0)?.['block'] === 1) {
      scene.text('You\'ve been expelled from school. <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_grades = s.50; return s; }); window.__gameStore.getState().doGoto(String(window.__gameStore.getState().choolVars ?? /u0027/u0027), /u0027/u0027); return false;">Clear</a>.');
    }
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NPCChanger/u0027, /u0027Start/u0027); return false;">NPC Editor</a>');
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['lover_menu'] = 'gt \'cheatmenu_din\', \'lover_menu\'';
  scene.build();
}

function enterLoverMenu(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'NPCs']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h2>Cheat Menu - Relationships - Lovers</h2></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027NPCs/u0027); return false;">Go Back</a>');
  (s as any).temp_cmd_i = 0;
  (s as any).temp_cmd_max_i = 0;
  // TODO-QSP: :loverrelationshiploop
  if (((s as any).temp_cmd_i ?? 0) < ((s as any).temp_cmd_max_i ?? 0)) {
    (s as any).cmd_temp_npcid = (((s as any).lover ?? 0)?.[String((s as any).temp_cmd_i ?? 0)] ?? 0);
    if ((String((((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'ex') {
      (s as any).temp_cmd_i = ((s as any).temp_cmd_i ?? 0) + (1);
      // TODO-QSP: jump 'loverrelationshiploop'
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] < 0) {
      ((s as any).npc_rel = (s as any).npc_rel ?? {})[String((s as any).cmd_temp_npcid ?? 0)] = 0;
    }
    if (((s as any).npc_rel ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] > 100) {
      ((s as any).npc_rel = (s as any).npc_rel ?? {})[String((s as any).cmd_temp_npcid ?? 0)] = 100;
    }
    if (((s as any).npc_dates ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] < 0) {
      ((s as any).npc_dates = (s as any).npc_dates ?? {})[String((s as any).cmd_temp_npcid ?? 0)] = 0;
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'boyfriend'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'girlfriend') {
      // TODO-QSP: dynamic text: You are dating <<$npc_usedname[$cmd_temp_npcid]>>.
      scene.text(`You are dating ${(((s as any).npc_usedname ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] ?? '')}.`);
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'husband'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'wife') {
        // TODO-QSP: dynamic text: You are married to <<$npc_usedname[$cmd_temp_npcid]>>.
        scene.text(`You are married to ${(((s as any).npc_usedname ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] ?? '')}.`);
      } else {
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'fuckbuddy') {
          // TODO-QSP: dynamic text: You are fuckbuddies with <<$npc_usedname[$cmd_temp_npcid]>>.
          scene.text(`You are fuckbuddies with ${(((s as any).npc_usedname ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] ?? '')}.`);
        } else {
          if (((s as any).npc_rel_type ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 'sugar_daddy') {
            // TODO-QSP: dynamic text: <<$npc_usedname[$cmd_temp_npcid]>> is your sugar daddy.
            scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] ?? '')} is your sugar daddy.`);
          }
        }
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 1) {
      // TODO-QSP: dynamic text: Change lover''s personality: <a href="exec: npc_gentle[''<<$cmd_temp_npcid>>''] ...
      scene.text(`Change lover's personality: <a href="#" onclick="window.__gameStore.setState((s) => { (s.npc_gentle ??= {})/u0027${((s as any).cmd_temp_npcid ?? '')}/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027lover_menu/u0027); return false;">Gentle</a>`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 0) {
        // TODO-QSP: dynamic text: Change lover''s personality: <a href="exec: npc_rough[''<<$cmd_temp_npcid>>''] =...
        scene.text(`Change lover's personality: <a href="#" onclick="window.__gameStore.setState((s) => { (s.npc_rough ??= {})/u0027${((s as any).cmd_temp_npcid ?? '')}/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027lover_menu/u0027); return false;">Normal</a>`);
      } else {
        // TODO-QSP: dynamic text: Change lover''s personality: <a href="exec: npc_rough[''<<$cmd_temp_npcid>>''] =...
        scene.text(`Change lover's personality: <a href="#" onclick="window.__gameStore.setState((s) => { (s.npc_rough ??= {})/u0027${((s as any).cmd_temp_npcid ?? '')}/u0027 = s.0; (s.npc_gentle ??= {})/u0027${((s as any).cmd_temp_npcid ?? '')}/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027lover_menu/u0027); return false;">Rough</a>`);
      }
    }
    if (((s as any).npc_pervert ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] === 0) {
      // TODO-QSP: dynamic text: Change lover''s perversion: <a href="exec: npc_pervert[''<<$cmd_temp_npcid>>''] ...
      scene.text(`Change lover's perversion: <a href="#" onclick="window.__gameStore.setState((s) => { (s.npc_pervert ??= {})/u0027${((s as any).cmd_temp_npcid ?? '')}/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027lover_menu/u0027); return false;">Not perverted</a>`);
    } else {
      // TODO-QSP: dynamic text: Change lover''s perversion: <a href="exec: npc_pervert[''<<$cmd_temp_npcid>>''] ...
      scene.text(`Change lover's perversion: <a href="#" onclick="window.__gameStore.setState((s) => { (s.npc_pervert ??= {})/u0027${((s as any).cmd_temp_npcid ?? '')}/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027lover_menu/u0027); return false;">Perverted</a>`);
    }
    // TODO-QSP: dynamic text: Relationship: <<npc_rel[$cmd_temp_npcid]>> <a href="exec: gs ''npc_relationship'...
    scene.text(`Relationship: ${(((s as any).npc_rel ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027${((s as any).cmd_temp_npcid ?? '')}/u0027); return false;">+10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027${((s as any).cmd_temp_npcid ?? '')}/u0027); return false;">-10</a>`);
    // TODO-QSP: dynamic text: You''ve been on <<npc_dates[$cmd_temp_npcid]>> dates. <a href="exec: npc_dates['...
    scene.text(`You've been on ${(((s as any).npc_dates ?? 0)?.[String((s as any).cmd_temp_npcid ?? 0)] ?? '')} dates. <a href="#" onclick="window.__gameStore.setState((s) => { (s.npc_dates ??= {})/u0027${((s as any).cmd_temp_npcid ?? '')}/u0027 +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027lover_menu/u0027); return false;">+5</a> <a href="#" onclick="window.__gameStore.setState((s) => { (s.npc_dates ??= {})/u0027${((s as any).cmd_temp_npcid ?? '')}/u0027 -=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027lover_menu/u0027); return false;">-5</a>`);
    (s as any).temp_cmd_i = ((s as any).temp_cmd_i ?? 0) + (1);
    // TODO-QSP: jump 'loverrelationshiploop'
  }
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['input_time'] = 'gs \'cheatmenu_din\', \'input_time\'';
  scene.actions([
    { label: 'Go Back', goto: ['cheatmenu_din', 'npcs'] },
  ]);
  scene.build();
}

function enterInputTime(s: GameState, scene: SceneBuilder): void {
  (s as any).inputtmp = window.prompt("Enter time with 4-digit (input 0102 for 1:02)") ?? '';
  if (((s as any).inputtmp ?? 0)/100 >= 0  &&  ((s as any).inputtmp ?? 0)/100 <= 23) {
    (s as any).temp_hour = ((s as any).inputtmp ?? 0)/100;
  }
  (s as any).inputtmp = ((s as any).inputtmp ?? 0) % 100;
  if (((s as any).inputtmp ?? 0) >= 0  &&  ((s as any).inputtmp ?? 0) <= 59) {
    (s as any).temp_minut = ((s as any).inputtmp ?? 0);
  }
  qspGoto(s, 'cheatmenu_din', 'time');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['week'] = 'gt \'cheatmenu_din\', \'week\'';
  scene.build();
}

function enterWeek(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027index/u0027); return false;"><b>Cheat menu</b></a> - <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;"><b>Time</b></a></center>');
  // TODO-QSP: dynamic text: Current time: <b><<$weekName>></b>, <b><<day>></b> of <b><<$monthName>></b>, <b>...
  scene.text(`Current time: <b>${((s as any).weekName ?? '')}</b>, <b>${((s as any).day ?? '')}</b> of <b>${((s as any).monthName ?? '')}</b>, <b>${((s as any).year ?? '')}</b>, ${((s as any).tempcurtime ?? '')}`);
  // TODO-QSP: dynamic text: Target time: <b><<$weekName[temp_week]>></b>, <b><<temp_day>></b> of <b><<$month...
  scene.text(`Target time: <b>${(((s as any).weekName ?? 0)?.[String((s as any).temp_week ?? 0)] ?? '')}</b>, <b>${((s as any).temp_day ?? '')}</b> of <b>${(((s as any).monthName ?? 0)?.[String((s as any).temp_month ?? 0)] ?? '')}</b>, <b>${((s as any).temp_year ?? '')}</b>, ${((s as any).temptime ?? '')}`);
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 1 - temp_week & gt ''cheatmenu_din'', ''time''">M...
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart +=1 - temp_week; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Monday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 2 - temp_week & gt ''cheatmenu_din'', ''time''">T...
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart +=2 - temp_week; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Tuesday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 3 - temp_week & gt ''cheatmenu_din'', ''time''">W...
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart +=3 - temp_week; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Wednesday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 4 - temp_week & gt ''cheatmenu_din'', ''time''">T...
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart +=4 - temp_week; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Thursday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 5 - temp_week & gt ''cheatmenu_din'', ''time''">F...
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart +=5 - temp_week; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Friday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 6 - temp_week & gt ''cheatmenu_din'', ''time''">S...
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart +=6 - temp_week; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Saturday</a>');
  // TODO-QSP: dynamic text: <a href="exec:temp_daystart += 7 - temp_week & gt ''cheatmenu_din'', ''time''">S...
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart +=7 - temp_week; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Sunday</a>');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['month'] = 'gt \'cheatmenu_din\', \'month\'';
  scene.build();
}

function enterMonth(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027index/u0027); return false;"><b>Cheat menu</b></a> - <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;"><b>Time</b></a></center>');
  // TODO-QSP: dynamic text: Current time: <b><<$weekName>></b>, <b><<day>></b>, of <b><<$monthName>></b>, <b...
  scene.text(`Current time: <b>${((s as any).weekName ?? '')}</b>, <b>${((s as any).day ?? '')}</b>, of <b>${((s as any).monthName ?? '')}</b>, <b>${((s as any).year ?? '')}</b>, ${((s as any).tempcurtime ?? '')}`);
  // TODO-QSP: dynamic text: Target time: <b><<$weekName[temp_week]>></b>, <b><<temp_day>></b>, of <b><<$mont...
  scene.text(`Target time: <b>${(((s as any).weekName ?? 0)?.[String((s as any).temp_week ?? 0)] ?? '')}</b>, <b>${((s as any).temp_day ?? '')}</b>, of <b>${(((s as any).monthName ?? 0)?.[String((s as any).temp_month ?? 0)] ?? '')}</b>, <b>${((s as any).temp_year ?? '')}</b>, ${((s as any).temptime ?? '')}`);
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().1 ?? /u0027/u0027)); return false;">January</a>');
  }
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().2 ?? /u0027/u0027)); return false;">February</a>');
  }
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().3 ?? /u0027/u0027)); return false;">March</a>');
  }
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().4 ?? /u0027/u0027)); return false;">April</a>');
  }
  if (((s as any).temp_year ?? 0) > 2016) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().5 ?? /u0027/u0027)); return false;">May</a>');
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().6 ?? /u0027/u0027)); return false;">June</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().7 ?? /u0027/u0027)); return false;">July</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().8 ?? /u0027/u0027)); return false;">August</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().9 ?? /u0027/u0027)); return false;">September</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().10 ?? /u0027/u0027)); return false;">October</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().11 ?? /u0027/u0027)); return false;">November</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month2/u0027, String(window.__gameStore.getState().12 ?? /u0027/u0027)); return false;">December</a>');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['month2'] = 'gs \'cheatmenu_din\', \'month2\', ARGS[0]';
  scene.build();
}

function enterMonth2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', ((s as any).temp_year ?? 0), ((s as any).locArgs?.[1] ?? 0), 1);
  (s as any).temp_daystart = (((s as any).dateVars ?? 0)?.['daystart']);
  qspGoto(s, 'cheatmenu_din', 'time');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['time'] = 'gt \'cheatmenu_din\', \'time\'';
  scene.build();
}

function enterTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_daystart ?? 0) < 153) {
    (s as any).temp_daystart = 153;
  }
  qspCall(s, 'time', 'to_date', ((s as any).temp_daystart ?? 0));
  (s as any).temp_day = (((s as any).dateVars ?? 0)?.['day']);
  (s as any).temp_week = (((s as any).dateVars ?? 0)?.['week']);
  (s as any).temp_month = (((s as any).dateVars ?? 0)?.['month']);
  (s as any).temp_year = (((s as any).dateVars ?? 0)?.['year']);
  (s as any).temp_day_suffix = (((s as any).dateVars ?? 0)?.['suffix']);
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Time']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Manipulate Time and Weather</h1></center>');
  scene.text('<center><b>WARNING!</b></center>');
  scene.text('you know what you\'re doing. When reporting bugs, please mention any cheats you used.</center>');
  // TODO-QSP: $cheatmenu['table_start']
  (s as any).temptime = qspFunc(s, 'time', 'get_time_string', ((s as any).temp_hour ?? 0), ((s as any).temp_minut ?? 0));
  (s as any).tempcurtime = qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0));
  // TODO-QSP: dynamic text: Current time: <b><<$weekName>></b>, <b><<day>><<$day_suffix>></b>, of <b><<$mont...
  scene.text(`Current time: <b>${((s as any).weekName ?? '')}</b>, <b>${((s as any).day ?? '')}${((s as any).day_suffix ?? '')}</b>, of <b>${((s as any).monthName ?? '')}</b>, <b>${((s as any).year ?? '')}</b>, ${((s as any).tempcurtime ?? '')}`);
  // TODO-QSP: dynamic text: Target time: <b><<$weekName[temp_week]>></b>, <b><<temp_day>><<$temp_day_suffix>...
  scene.text(`Target time: <b>${(((s as any).weekName ?? 0)?.[String((s as any).temp_week ?? 0)] ?? '')}</b>, <b>${((s as any).temp_day ?? '')}${((s as any).temp_day_suffix ?? '')}</b>, of <b>${(((s as any).monthName ?? 0)?.[String((s as any).temp_month ?? 0)] ?? '')}</b>, <b>${((s as any).temp_year ?? '')}</b>, ${((s as any).temptime ?? '')}`);
  // TODO-QSP: dynamic text: Daychange: <<temp_daystart - daystart>>
  scene.text(`Daychange: ${((s as any).temp_daystart ?? '') - ((s as any).daystart ?? '')}`);
  scene.text('Select <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027month/u0027); return false;">Month</a>');
  scene.text('Select <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027week/u0027); return false;">Weekday</a>');
  if (((s as any).temp_daystart ?? 0) > 519) {
    (s as any).temp_text = '  <a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart -=s.365; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">-1 Year</a>\' else $temp_text = \'         ';
  }
  if (((s as any).temp_daystart ?? 0) < 2704) {
    // TODO-QSP: $temp_text +=  '  <a href="exec:temp_daystart += 365 & gt ''cheatmenu_din'', ''time''">+1 Year</a>'
  }
  // TODO-QSP: 'Year:   ' + $temp_text
  if (((s as any).temp_daystart ?? 0) > 159) {
    (s as any).temp_text = '  <a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart -=s.7; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">-7</a>\'  else $temp_text =  \'    ';
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
    (s as any).temp_text = '  <a href="#" onclick="window.__gameStore.setState((s) => { s.temp_hour -=s.4; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">-4</a>\'  else $temp_text =  \'    ';
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
    (s as any).temp_text = '  <a href="#" onclick="window.__gameStore.setState((s) => { s.temp_minut -=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">-15</a>\'  else $temp_text =  \'     ';
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
  // TODO-QSP: dynamic text: 'Weather: <a href="exec:sunWeather=iif(sunWeather=0,1,0) & sunWeather[1] = totmi...
  scene.text('Weather: <a href="#" onclick="window.__gameStore.setState((s) => { s.sunWeather = iif(sunWeather=0,1,0); /* TODO-QSP: sunWeather[1] = totminut+180 */ return s; }); window.__gameStore.getState().doGoto(/u0027outdoors/u0027, /u0027weather/u0027); return false;">' + ((((s as any).sunWeather ?? 0)===0) ? ('Rain') : ('Sunny')) + '</a>');
  // TODO-QSP: dynamic text: Temperature = <<$temperature>>
  scene.text(`Temperature = ${((s as any).temperature ?? '')}`);
  if (((s as any).temper ?? 0) > -21) {
    (s as any).temp_text = '  <a href="#" onclick="window.__gameStore.setState((s) => { s.weatherTemper -=s.50; return s; }); window.__gameStore.getState().doGoto(/u0027outdoors/u0027, /u0027weather/u0027); return false;">-5</a>\'  else $temp_text =  \'    ';
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
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027input_time/u0027); return false;">Direct input time</a>');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.daystart = s.temp_daystart; s.hour = s.temp_hour; s.minut = s.temp_minut; s.currtimecheck = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Accept target date & time</a>');
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.temp_daystart = s.daystart; s.temp_hour = s.hour; s.temp_minut = s.minut; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027time/u0027); return false;">Reset target date & time</a>');
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['magicTable'] = 'gs \'cheatmenu_din\', \'magicTable\', $ARGS[0], $ARGS[1]';
  scene.build();
}

function enterMagicTable(s: GameState, scene: SceneBuilder): void {
  (s as any).SpellTabName = ((s as any).locArgs?.[1] ?? 0);
  (s as any).ThisArrName = ((s as any).locArgs?.[2] ?? 0);
  (s as any).maxArrSizeC = 0;
  // TODO-QSP: </tr>"
  (s as any).i = 0;
  // TODO-QSP: :CheatDinSpell1
  (s as any).ThisSpellName = 0;
  if (((s as any).i ?? 0) < ((s as any).maxArrSizeC ?? 0)) {
    if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 1) {
      (s as any).spellFlipper = '<a href="EXEC: spellKnown[\'' + ((s as any).ThisSpellName ?? 0) + '\'] = 0 & gt \'cheatmenu_din\', \'magic\'">[Unlearn]</a>';
    } else {
      (s as any).spellFlipper = '<a href="EXEC: spellKnown[\'' + ((s as any).ThisSpellName ?? 0) + '\'] = 1 & gt \'cheatmenu_din\', \'magic\'">[Learn]</a>';
    }
    (s as any).SpellListStr = ((s as any).SpellListStr ?? 0) + ' <tr><td>' + ((s as any).spellFlipper ?? 0) + '</td><td>' + (((s as any).spellName ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td><td>' + (((s as any).spellMana ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td><td>' + (((s as any).spellDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td></tr>';
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'CheatDinSpell1'
  }
  // TODO-QSP: </center>"
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['sucresetdo'] = 'gs \'cheatmenu_din\', \'sucresetdo\'';
  scene.build();
}

function enterSucresetdo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'cheatmenu_din', 'magic');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['succubreset'] = 'gt \'cheatmenu_din\', \'succubreset\'';
  scene.build();
}

function enterSuccubreset(s: GameState, scene: SceneBuilder): void {
  scene.text('Are you sure you want to reset your Succubus status? You will lose all levels, saved power, and succubus skill levels.');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027magic/u0027); return false;"><b>No, nevermind.</b></a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027sucresetdo/u0027); return false;"><b>Yes, remove & reset Succubus status</b></a>');
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['magic'] = 'gt \'cheatmenu_din\', \'magic\'';
  scene.build();
}

function enterMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Magic']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Magic</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  // TODO-QSP: dynamic text: <center>Is magical: <a href="exec:pcs_magik += 1 & gt ''cheatmenu_din'', ''magic...
  scene.text(`<center>Is magical: <a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_magik +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027magic/u0027); return false;">+1${((s as any).pcs_magik ?? '')}</a></center>`);
  if (((s as any).succubusflag ?? 0) === 1) {
    scene.text('<center><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027succubreset/u0027); return false;"><b>Remove & Reset Succubus status</b></a></center>');
    scene.text('<center><b>WARNING!</b></center>');
  }
  if (((s as any).spellMana ?? 0)?.['fog'] === 0) {
    qspCall(s, 'spellList', '');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Combat Spells', '$combatSpells']; enterMagicTable(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Non-Combat Spells', '$nonComSpells']; enterMagicTable(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: <tr><td><a href=""EXEC: spellKnown['teleport']=<<iif(spellKnown['teleport']=1,'0','1')>> & gt 'cheat...
  (s as any).i = 0;
  // TODO-QSP: :CheatDinTP1
  (s as any).ThisLocation = (((s as any).tpLocations ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
  if (((s as any).i ?? 0) < Object.keys((s as any).tpLocations ?? {}).length) {
    if (((s as any).tpKnown ?? 0)?.[String((s as any).ThisLocation ?? 0)] === 1) {
      (s as any).spellFlipper = '<a href="EXEC: tpKnown[\'' + ((s as any).ThisLocation ?? 0) + '\'] = 0 & gt \'cheatmenu_din\', \'magic\'">[Unlearn]</a>';
    } else {
      (s as any).spellFlipper = '<a href="EXEC: tpKnown[\'' + ((s as any).ThisLocation ?? 0) + '\'] = 1 & gt \'cheatmenu_din\', \'magic\'">[Learn]</a>';
    }
    (s as any).SpellListStr = ((s as any).SpellListStr ?? 0) + ' <tr><td>' + ((s as any).spellFlipper ?? 0) + '</td><td>' + (((s as any).treeCircName ?? 0)?.[String((s as any).ThisLocation ?? 0)] ?? 0) + '</td></tr>';
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'CheatDinTP1'
  }
  // TODO-QSP: </center>"
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['pain'] = 'gs \'cheatmenu_din\', \'pain\'';
  scene.build();
}

function enterPain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pain ?? 0)?.['head'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['head'] = 0;
  }
  if (((s as any).pain ?? 0)?.['hair'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['hair'] = 0;
  }
  if (((s as any).pain ?? 0)?.['ears'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['ears'] = 0;
  }
  if (((s as any).pain ?? 0)?.['eyebrows'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['eyebrows'] = 0;
  }
  if (((s as any).pain ?? 0)?.['eyes'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['eyes'] = 0;
  }
  if (((s as any).pain ?? 0)?.['cheeks'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['cheeks'] = 0;
  }
  if (((s as any).pain ?? 0)?.['nose'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['nose'] = 0;
  }
  if (((s as any).pain ?? 0)?.['mouth'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['mouth'] = 0;
  }
  if (((s as any).pain ?? 0)?.['lips'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['lips'] = 0;
  }
  if (((s as any).pain ?? 0)?.['tongue'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['tongue'] = 0;
  }
  if (((s as any).pain ?? 0)?.['throat'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['throat'] = 0;
  }
  if (((s as any).pain ?? 0)?.['neck'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['neck'] = 0;
  }
  if (((s as any).pain ?? 0)?.['back'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['back'] = 0;
  }
  if (((s as any).pain ?? 0)?.['asscheeks'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['asscheeks'] = 0;
  }
  if (((s as any).pain ?? 0)?.['asshole'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['asshole'] = 0;
  }
  if (((s as any).pain ?? 0)?.['hips'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['hips'] = 0;
  }
  if (((s as any).pain ?? 0)?.['thighs'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['thighs'] = 0;
  }
  if (((s as any).pain ?? 0)?.['legL'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['legL'] = 0;
  }
  if (((s as any).pain ?? 0)?.['legR'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['legR'] = 0;
  }
  if (((s as any).pain ?? 0)?.['feet'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['feet'] = 0;
  }
  if (((s as any).pain ?? 0)?.['toes'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['toes'] = 0;
  }
  if (((s as any).pain ?? 0)?.['shoulders'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['shoulders'] = 0;
  }
  if (((s as any).pain ?? 0)?.['armL'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['armL'] = 0;
  }
  if (((s as any).pain ?? 0)?.['armR'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['armR'] = 0;
  }
  if (((s as any).pain ?? 0)?.['hands'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['hands'] = 0;
  }
  if (((s as any).pain ?? 0)?.['fingers'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['fingers'] = 0;
  }
  if (((s as any).pain ?? 0)?.['chest'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['chest'] = 0;
  }
  if (((s as any).pain ?? 0)?.['breasts'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['breasts'] = 0;
  }
  if (((s as any).pain ?? 0)?.['nipples'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['nipples'] = 0;
  }
  if (((s as any).pain ?? 0)?.['ribs'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['ribs'] = 0;
  }
  if (((s as any).pain ?? 0)?.['tummy'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['tummy'] = 0;
  }
  if (((s as any).pain ?? 0)?.['pubic'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['pubic'] = 0;
  }
  if (((s as any).pain ?? 0)?.['vaginal'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['vaginal'] = 0;
  }
  if (((s as any).pain ?? 0)?.['clitoris'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['clitoris'] = 0;
  }
  if (((s as any).pain ?? 0)?.['urethra'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['urethra'] = 0;
  }
  if (((s as any).pain ?? 0)?.['cervix'] < 0) {
    ((s as any).pain = (s as any).pain ?? {})['cervix'] = 0;
  }
  qspCall(s, 'pain', 'calc');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Pain']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Pain Management</h1></center>');
  scene.text('<center><a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar /u0027pain/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027pain/u0027); return false;">No pain</a></center>');
  // TODO-QSP: $cheatmenu['table_start']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'head', 'head']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hair', 'hair']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ears', 'ears']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'eyebrows', 'eyebrows']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'eyes', 'eyes']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cheeks', 'cheeks']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nose', 'nose']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mouth', 'mouth']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'lips', 'lips']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tongue', 'tongue']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'throat', 'throat']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'neck', 'neck']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'back', 'back']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'asscheeks', 'asscheeks']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'asshole', 'asshole']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hips', 'hips']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'thighs', 'thighs']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'legL', 'left leg']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'legR', 'right leg']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: $cheatmenu['table_second']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'feet', 'feet']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'toes', 'toes']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'shoulders', 'shoulders']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'armL', 'left arm']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'armR', 'right arm']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hands', 'hands']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fingers', 'fingers']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chest', 'chest']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breasts', 'breasts']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nipples', 'nipples']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ribs', 'ribs']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tummy', 'tummy']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pubic', 'pubic']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vaginal', 'vaginal']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'labia', 'labia']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'clitoris', 'clitoris']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'urethra', 'urethra']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cervix', 'cervix']; enterCheatPainRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: $cheatmenu['table_end']
  scene.text('You may still have pain from gaping or having been spanked, you can clear these using "Cure all ailments." in "Cheat Menu - Character State Changes"');
  // TODO-QSP: dynamic text: You currently have vaginal gaping of <<vgape>>
  scene.text(`You currently have vaginal gaping of ${((s as any).vgape ?? '')}`);
  // TODO-QSP: dynamic text: You currently have anal gaping of <<agape>>
  scene.text(`You currently have anal gaping of ${((s as any).agape ?? '')}`);
  // TODO-QSP: dynamic text: You currently have spanked level <<spanked>>
  scene.text(`You currently have spanked level ${((s as any).spanked ?? '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterFame(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Fame']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Fame</h1></center>');
  ((s as any).table = (s as any).table ?? {})['fame'] = '<center><table width="90%" cellspacing="0" cellpadding="5" valign="top" border="1">';
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('<th colspan="5"><b>Fame</b></th><tr>');
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('<th></th><th>Pavlovsk</th><th>City</th><th>Pushkin</th><th>Gadukino</th><tr>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'acting', 'Actor']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dance', 'Dancer']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'modelling', 'Glamour model']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'painting', 'Painter']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'music', 'Musician']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ballet', 'Ballet dancer']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'porn', 'Porn actor']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stripping', 'Stripper']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sex', 'Sex']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'prostitute', 'Prostitution']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kickboxing', 'Kickboxer']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'running', 'Runner']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'volleyball', 'Volleyball player']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chess', 'Chess player']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'teaching', 'Teacher']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'media', 'Social media']; enterCheatFameRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('</table></center>');
  // TODO-QSP: $table['fame']
  // TODO-QSP: end
  scene.build();
}

function enterBdimmain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cheatmenu_bisets', 'main');
  // TODO-QSP: end
  scene.build();
}

function enterItems(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Items']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Cheat Menu - Items</h1></center>');
  scene.text('<center>');
  scene.text('<h4>Documents</h4>');
  if ((!((s as any).showDocumentItems ?? 0))) {
    scene.text('<a href = "exec: showDocumentItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showDocumentItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(String(window.__gameStore.getState().choolVars ?? /u0027/u0027), /u0027/u0027); return false;">Get School Certificate</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(String(window.__gameStore.getState().choolVars ?? /u0027/u0027), /u0027/u0027); return false;">Remove School Certificate</a>');
    }
    if (((s as any).university ?? 0)?.['diploma'] === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uniutil/u0027, /u0027diploma/u0027, /u0027set_obtained/u0027); return false;">Get Diploma</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027uniutil/u0027, /u0027diploma/u0027, /u0027set_unobtained/u0027); return false;">Remove Diploma</a>');
    }
    if ((!((s as any).fakepassport ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.fakepassport = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027items/u0027); return false;">Get Fake Passport</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.fakepassport = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027items/u0027); return false;">Remove Fake Passport</a>');
    }
    if (((s as any).license ?? 0)?.['secretary'] === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.license ??= {})/u0027secretary/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027items/u0027); return false;">Get Secretarial Diploma</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.license ??= {})/u0027secretary/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027items/u0027); return false;">Remove Secretarial Diploma</a>');
    }
    if (((s as any).license ?? 0)?.['masseuse'] === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.license ??= {})/u0027masseuse/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027items/u0027); return false;">Get Masseuse Certificate</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.license ??= {})/u0027masseuse/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027items/u0027); return false;">Remove Masseuse Certificate</a>');
    }
    if (((s as any).license ?? 0)?.['drive'] === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.license ??= {})/u0027drive/u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027items/u0027); return false;">Get Driving Licence</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.license ??= {})/u0027drive/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027items/u0027); return false;">Remove Driving Licence</a>');
    }
  }
  scene.text('<h4>Pharmacy items</h4>');
  if ((!((s as any).showPharmacyItems ?? 0))) {
    scene.text('<a href = "exec: showPharmacyItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showPharmacyItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'morning_after_pill', 'Morning after pill']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).preziktype ?? 0) === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'normal_condoms', 'Condoms']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'equipped_condoms', 'Condoms']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pregnancy_test', 'Pregnancy test']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'contraceptive_pill', 'Birth control pills']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'antibiotics', 'Antibiotics']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vitamins', 'Vitamins']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'painkillers', 'Painkillers']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chafing_cream', 'Ointments for chafing']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'lubricant', 'Lubricants']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'weight_loss_pill', 'Weight loss pill']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tampons', 'Tampons']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sanitary_pads', 'Sanitary napkins']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'enema_kit', 'Enema kit']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breast_pump', 'Breast pump']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bottle_s', 'Breastmilk bottle S']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bottle_m', 'Breastmilk bottle M']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text('<h4>Food items</h4>');
  if ((!((s as any).showFoodItems ?? 0))) {
    scene.text('<a href = "exec: showFoodItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showFoodItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'food_basic', 'Regular food']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'food_diet', 'Diet food']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'food_biscuits', 'Tea biscuits']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).bag ?? 0) > 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'food_water', 'Bottle of water']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'food_sandwich', 'Sandwich']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'food_wine', 'Cheap Bottle of wine']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.text('<h4>Cosmetics items</h4>');
  if ((!((s as any).showCosmeticsItems ?? 0))) {
    scene.text('<a href = "exec:showCosmeticsItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec:showCosmeticsItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cosmetics', 'Cosmetics']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'moisturiser', 'Moisturiser']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'lipbalm', 'Lip balms']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'eyelash_fake', 'Plain false lashes']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'eyelash_mink', 'Mink false lashes']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'razor', 'Razors']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'suncream', 'Sunblock']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'deodorant', 'Deodorant']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'shampoo', 'Shampoo']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'scrunchies', 'Hair scrunchies']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kirbygrips', 'Hair pins']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).bag ?? 0) === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'makeup_wipes', 'Wipes']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'travel_makeup', 'Portable makeup']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mouthwash', 'Mouthwash']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'comb', 'Comb']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'travel_mirror', 'Compact mirror']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.text('<h4>Hardware items</h4>');
  if ((!((s as any).showHardwareItems ?? 0))) {
    scene.text('<a href = "exec: showHardwareItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showHardwareItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dish_soap', 'Dishwashing detergent']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'laundry_soap', 'Clothing detergent']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dish_plates', 'Plates']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sewing_fabric', 'Fabric']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sewing_kit', 'Sewing kit']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).bag ?? 0) === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'umbrella', 'Umbrella']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.text('<h4>Narcotics items</h4>');
  if ((!((s as any).showNarcoticsItems ?? 0))) {
    scene.text('<a href = "exec: showNarcoticsItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showNarcoticsItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cigarettes', 'Cigarettes']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'joints', 'Joints']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cocaine', 'Cocaine']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'amphetamine', 'Amphetamine']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mentats', 'Neuroboosters']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'steroids', 'Steroids']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breastcream', 'Breast cream']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'aphrodisiac', 'Aphrodisiacs']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text('<h4>Sex shop items</h4>');
  if ((!((s as any).showSexItems ?? 0))) {
    scene.text('<a href = "exec: showSexItems = 1 & gt \'cheatmenu_din\', \'items\'">Show Details </a>');
  } else {
    scene.text('<a href = "exec: showSexItems = 0 & gt \'cheatmenu_din\', \'items\'">Hide Details </a>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mag_porn', 'Porn magazine']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vibe', 'Vibrator']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttplug', 'Butt plug']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dildo_suction', '15cm suction dildo']; enterCheatItemQty(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'strapon', 'Strap-on harness']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dildo_small', '10cm dildo']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dildo_normal', '15cm dildo']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dildo_big', '20cm dildo']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dildo_large', '25cm dildo']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dildo_huge', '30cm dildo']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dildo_enormous', '35cm dildo']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dildo_gigantic', '40cm dildo']; enterCheatItemToggle(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text('</center>');
  // TODO-QSP: end
  scene.build();
}

function enterCheatPainRow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: pain[<<$ARGS[2]>>] = <<pain[$ARGS[1]]>> <a href="exec:pain[''<<$ARGS[1]>>''] -= ...
  scene.text(`pain[${((s as any).locArgs?.[2] ?? '')}] = ${(((s as any).pain ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')} <a href="#" onclick="window.__gameStore.setState((s) => { (s.pain ??= {})/u0027${((s as any).locArgs?.[1] ?? '')}/u0027 -=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027pain/u0027); return false;">-10</a> <a href="#" onclick="window.__gameStore.setState((s) => { (s.pain ??= {})/u0027${((s as any).locArgs?.[1] ?? '')}/u0027 +=s.10; return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027pain/u0027); return false;">+10</a>`);
  // TODO-QSP: end
  scene.build();
}

function enterCheatFameRow(s: GameState, scene: SceneBuilder): void {
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + ((s as any).locArgs?.[2] ?? 0) + '</td>');
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + (((s as any).fame ?? 0)?.['pav_' + String(((s as any).locArgs?.[1] ?? 0))]) + '   <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027pav/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">+10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027pav/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">+100</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027pav/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">-10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027pav/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">-100</a> </td>');
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + (((s as any).fame ?? 0)?.['city_' + String(((s as any).locArgs?.[1] ?? 0))]) + '   <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027city/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">+10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027city/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">+100</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027city/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">-10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027city/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">-100</a> </td>');
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + (((s as any).fame ?? 0)?.['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))]) + '   <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027pushkin/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">+10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027pushkin/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">+100</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027pushkin/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">-10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027pushkin/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">-100</a> </td>');
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('<td>' + (((s as any).fame ?? 0)?.['village_' + String(((s as any).locArgs?.[1] ?? 0))]) + '   <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027village/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">+10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027village/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">+100</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027village/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">-10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027fame/u0027, /u0027village/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">-100</a> </td>');
  ((s as any).table = (s as any).table ?? {})['fame'] = ((s as any).table['fame'] ?? 0) + ('<tr>');
  // TODO-QSP: end
  scene.build();
}

function enterCheatItemQty(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterCheatItemToggle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatTattoo(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[3] ?? '') === '') {
    (s as any).temp_cheat_nomsg = 'You do not have a tattoo on your ' + ((s as any).locArgs?.[2] ?? 0) + '';
  } else {
    (s as any).temp_cheat_nomsg = ((s as any).locArgs?.[3] ?? 0);
  }
  if (((s as any).pcs_tattoos ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 0) {
    // TODO-QSP: $temp_cheat_nomsg
  } else {
    // TODO-QSP: dynamic text: <a href="exec: gs ''tattoo_management'', ''remove'', ''<<$ARGS[1]>>'' & gt ''che...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027tattoo_management/u0027, /u0027remove/u0027, /u0027${((s as any).locArgs?.[1] ?? '')}/u0027); return false;">Remove your ${((s as any).locArgs?.[2] ?? '')} tattoo</a>`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatGradeRow(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_cheat_key = 'school_' + ((s as any).locArgs?.[1] ?? 0) + '_grade';
  (s as any).temp_cheat_val = (((s as any).class ?? 0)?.[String((s as any).temp_cheat_key ?? 0)] ?? 0);
  // TODO-QSP: dynamic text: <<$ARGS[2]>> grade: <<temp_cheat_val>>
  scene.text(`${((s as any).locArgs?.[2] ?? '')} grade: ${((s as any).temp_cheat_val ?? '')}`);
  if (((s as any).temp_cheat_val ?? 0) > 0) {
    // TODO-QSP: dynamic text:  <a href="exec:gs 'grades', 'grade_award', 'school', '<<$ARGS[1]>>', -10 & gt 'c...
    scene.text(` <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027grades/u0027, /u0027grade_award/u0027, /u0027school/u0027); return false;">-10</a>`);
  }
  if (((s as any).temp_cheat_val ?? 0) < 100) {
    // TODO-QSP: dynamic text:  <a href="exec:gs 'grades', 'grade_award', 'school', '<<$ARGS[1]>>', 10 & gt 'ch...
    scene.text(` <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027grades/u0027, /u0027grade_award/u0027, /u0027school/u0027); return false;">+10</a>`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatBoolRow(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_cheat_on = ((String((s as any).locArgs?.[3] ?? '') === '') ? ('Enabled') : (((s as any).locArgs?.[3] ?? 0)));
  (s as any).temp_cheat_off = ((String((s as any).locArgs?.[4] ?? '') === '') ? ('Disabled') : (((s as any).locArgs?.[4] ?? 0)));
  // TODO-QSP: dynamic text: <<$ARGS[2]>>: <a href="exec:cheatVars[''<<$ARGS[1]>>''] = iif(cheatVars[''<<$ARG...
  scene.text(`${((s as any).locArgs?.[2] ?? '')}: <a href="#" onclick="window.__gameStore.setState((s) => { (s.cheatVars ??= {})/u0027${((s as any).locArgs?.[1] ?? '')}/u0027 = iif(cheatVars[/u0027${((s as any).locArgs?.[1] ?? '')}/u0027], 0, 1); return s; }); window.__gameStore.getState().doGoto(/u0027cheatmenu_din/u0027, /u0027${qspUntranslated(s, "cheatmenu[\\u0027); return false;\"><<iif(cheatVars[ARGS[1]], temp_cheat_on, temp_cheat_off)", { location: "cheatmenu_din" })}</a>`);
  // TODO-QSP: end
  scene.build();
}

function enterCheatNpcRel(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[3] ?? '') === '') {
    (s as any).temp_cheat_name = (((s as any).npc_firstname ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ' ' + (((s as any).npc_lastname ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  } else {
    (s as any).temp_cheat_name = ((s as any).locArgs?.[3] ?? 0);
  }
  (s as any).temp_cheat_page = ((String((s as any).locArgs?.[2] ?? '') === '') ? ('npcs') : (((s as any).locArgs?.[2] ?? 0)));
  // TODO-QSP: dynamic text: <<$temp_cheat_name>>: <<npc_rel[$ARGS[1]]>>  <a href="exec:gs ''npc_relationship...
  scene.text(`${((s as any).temp_cheat_name ?? '')}: ${(((s as any).npc_rel ?? 0)?.[((s as any).locArgs?.[1] ?? '')] ?? '')}  <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027${((s as any).locArgs?.[1] ?? '')}/u0027); return false;">+10</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027${((s as any).locArgs?.[1] ?? '')}/u0027); return false;">-10</a>`);
  // TODO-QSP: end
  scene.build();
}

function enterCheatVarRow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $ARGS[2]+': '+dyneval('result = ' + $ARGS[1])+'  <a href="exec:<<$ARGS[1]>> += 10 & gt ''cheatmenu_d...
  // TODO-QSP: end
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['traits_cheats'] = 'gt \'cheatmenu_din\', \'traits_cheats\'';
  scene.build();
}

function enterTraitsCheats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'traits']; enterCheattabs(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['this_menu'] = 'traits_cheats';
  scene.text('<center><h1>Cheat Menu - Traits & Archetypes</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<center><h3>Archetype Settings</h3></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'smart_bimbo', 'Ignore Archetype penalties']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'no_archetype_withdrawal', 'Disable Archetype withdrawal']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h3>Archetype Points</h3></center>');
  // TODO-QSP: dynamic text: Active: <<iif($arch_vars[''main_active''] <> '''', $arch_vars[''main_active''], ...
  scene.text(`Active: ${((((s as any).arch_vars ?? 0)?.['main_active'] !== '') ? ((((s as any).arch_vars ?? 0)?.['main_active'] ?? '')) : ('none'))}`);
  (s as any).cheat_tp_refresh = 'gs \'archetypes\', \'set_active\' & gt \'cheatmenu_din\', \'traits_cheats\'';
  // TODO-QSP: $cheat_arch[0] = 'bimbo' & $cheat_arch[1] = 'preppy' & $cheat_arch[2] = 'prude' & $cheat_arch[3] = '...
  (s as any).cheat_tp_i = 0;
  // TODO-QSP: :cheat_tp_loop
  (s as any).cheat_tp_t = (((s as any).cheat_arch ?? 0)?.[String((s as any).cheat_tp_i ?? 0)] ?? 0);
  (s as any).cheat_tp_title = (String((String(((s as any).cheat_tp_t ?? 0)).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String(((s as any).cheat_tp_t ?? 0)).slice((2)-1));
  (s as any).cheat_tp_k = ((s as any).cheat_tp_t ?? 0) + '_points';
  // TODO-QSP: dynamic text: <b><<$cheat_tp_title>></b> (<<arch_vars[$cheat_tp_k]>>): 
  scene.text(`<b>${((s as any).cheat_tp_title ?? '')}</b> (${(((s as any).arch_vars ?? 0)?.[String((s as any).cheat_tp_k ?? 0)] ?? '')}): `);
  // TODO-QSP: dynamic text:  <a href="exec:arch_vars['<<$cheat_tp_k>>'] += 10000 & gs 'archetypes', 'clamp',...
  scene.text(` <a href="#" onclick="window.__gameStore.setState((s) => { (s.arch_vars ??= {})/u0027${((s as any).cheat_tp_k ?? '')}/u0027 +=s.10000; /* TODO-QSP: ${((s as any).cheat_tp_refresh ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027archetypes/u0027, /u0027clamp/u0027, /u0027${((s as any).cheat_tp_t ?? '')}/u0027); return false;">+10k</a>`);
  // TODO-QSP: dynamic text:  <a href="exec:arch_vars['<<$cheat_tp_k>>'] += 1000 & gs 'archetypes', 'clamp', ...
  scene.text(` <a href="#" onclick="window.__gameStore.setState((s) => { (s.arch_vars ??= {})/u0027${((s as any).cheat_tp_k ?? '')}/u0027 +=s.1000; /* TODO-QSP: ${((s as any).cheat_tp_refresh ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027archetypes/u0027, /u0027clamp/u0027, /u0027${((s as any).cheat_tp_t ?? '')}/u0027); return false;">+1k</a>`);
  // TODO-QSP: dynamic text:  <a href="exec:arch_vars['<<$cheat_tp_k>>'] -= 1000 & gs 'archetypes', 'clamp', ...
  scene.text(` <a href="#" onclick="window.__gameStore.setState((s) => { (s.arch_vars ??= {})/u0027${((s as any).cheat_tp_k ?? '')}/u0027 -=s.1000; /* TODO-QSP: ${((s as any).cheat_tp_refresh ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027archetypes/u0027, /u0027clamp/u0027, /u0027${((s as any).cheat_tp_t ?? '')}/u0027); return false;">-1k</a>`);
  // TODO-QSP: dynamic text:  <a href="exec:arch_vars['<<$cheat_tp_k>>'] -= 10000 & gs 'archetypes', 'clamp',...
  scene.text(` <a href="#" onclick="window.__gameStore.setState((s) => { (s.arch_vars ??= {})/u0027${((s as any).cheat_tp_k ?? '')}/u0027 -=s.10000; /* TODO-QSP: ${((s as any).cheat_tp_refresh ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027archetypes/u0027, /u0027clamp/u0027, /u0027${((s as any).cheat_tp_t ?? '')}/u0027); return false;">-10k</a>`);
  // TODO-QSP: dynamic text:  <a href="exec:arch_vars[''<<$cheat_tp_k>>''] = 0 & <<$cheat_tp_refresh>>">Zero<...
  scene.text(` <a href="#" onclick="window.__gameStore.setState((s) => { (s.arch_vars ??= {})/u0027${((s as any).cheat_tp_k ?? '')}/u0027 = s.0; /* TODO-QSP: ${((s as any).cheat_tp_refresh ?? '')} */ return s; }); return false;">Zero</a>`);
  (s as any).cheat_tp_i = ((s as any).cheat_tp_i ?? 0) + (1);
  if (((s as any).cheat_tp_i ?? 0) < 5) {
    // TODO-QSP: jump 'cheat_tp_loop'
  }
  scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.arch_vars ??= {})/u0027bimbo_points/u0027 = s.0; (s.arch_vars ??= {})/u0027preppy_points/u0027 = s.0; (s.arch_vars ??= {})/u0027prude_points/u0027 = s.0; (s.arch_vars ??= {})/u0027punk_points/u0027 = s.0; (s.arch_vars ??= {})/u0027goth_points/u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027archetypes/u0027, /u0027set_active/u0027); return false;">Reset all Archetype points</a>');
  scene.text('<center><h3>Trait Enable / Disable</h3></center>');
  scene.text('Disabling a trait prevents its daily/minute logic from running. The trait level is preserved but frozen.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumeater_disabled', 'Cumeater', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'creampie_fetish_disabled', 'Creampie Fetish', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality_disabled', 'Addictive Personality', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut_disabled', 'Buttslut', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist_disabled', 'Exhibitionist', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference_disabled', 'Panty Preference', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drinking_disabled', 'Alcohol Tolerance', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic_disabled', 'Academic', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bookworm_disabled', 'Bookworm', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_growth_rate_disabled', 'Body Hair Growth Rate', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude_disabled', 'Body Hair Attitude', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hair_growth_rate_disabled', 'Hair Growth Rate', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sensitivity_disabled', 'Sensitivity', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fertility_disabled', 'Fertility', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sizequeen_disabled', 'Size Queen', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fitness_freak_disabled', 'Fitness Freak', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'new_again_disabled', 'Everything Is New Again', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference_disabled', 'Heel Preference', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat_disabled', 'Doormat', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumslut_disabled', 'Cum Slut', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cum_addict_disabled', 'Cum Addict', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pain_tolerance_disabled', 'Pain Tolerance', 'Disabled', 'Enabled']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h3>Trait Level Cheats</h3></center>');
  scene.text('<small>▼ to level down, ▲ to level up. Reset does what it says. Note: Some traits have negative levels.<br>Warning: Some traits or trait levels are only meant to be obtainable via specific story events. Nothing here is likely to brick your game, but you should exercise caution anyway.</small>');
  (s as any).tc_r = ' & gt \'cheatmenu_din\', \'traits_cheats\'';
  // TODO-QSP: dynamic text: Exhibitionist (<<trait_vars[''exhibitionist'']>>): <a href="exec:gs ''traits'', ...
  scene.text(`Exhibitionist (${(((s as any).trait_vars ?? 0)?.['exhibitionist'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027exhibitionist/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027exhibitionist/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027exhibitionist/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Commando / Panty Preference (<<trait_vars[''panty_preference'']>>): <a href="exe...
  scene.text(`Commando / Panty Preference (${(((s as any).trait_vars ?? 0)?.['panty_preference'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027panty_preference/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027panty_preference/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027panty_preference/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Buttslut (<<trait_vars[''buttslut'']>>): <a href="exec:gs ''traits'', ''cheat'',...
  scene.text(`Buttslut (${(((s as any).trait_vars ?? 0)?.['buttslut'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027buttslut/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027buttslut/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027buttslut/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Academic (<<trait_vars[''academic'']>>): <a href="exec:gs ''traits'', ''cheat'',...
  scene.text(`Academic (${(((s as any).trait_vars ?? 0)?.['academic'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027academic/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027academic/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027academic/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Alcohol Tolerance (<<trait_vars[''drinking'']>>): <a href="exec:gs ''traits'', '...
  scene.text(`Alcohol Tolerance (${(((s as any).trait_vars ?? 0)?.['drinking'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027drinking/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027drinking/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027drinking/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Cumeater (<<trait_vars[''cumeater'']>>): <a href="exec:gs ''traits'', ''cheat'',...
  scene.text(`Cumeater (${(((s as any).trait_vars ?? 0)?.['cumeater'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cumeater/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cumeater/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cumeater/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Creampie Fetish (<<trait_vars[''creampie_fetish'']>>): <a href="exec:gs ''traits...
  scene.text(`Creampie Fetish (${(((s as any).trait_vars ?? 0)?.['creampie_fetish'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027creampie_fetish/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027creampie_fetish/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027creampie_fetish/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Addictive Personality (<<trait_vars[''addictive_personality'']>>): <a href="exec...
  scene.text(`Addictive Personality (${(((s as any).trait_vars ?? 0)?.['addictive_personality'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027addictive_personality/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027addictive_personality/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027addictive_personality/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Bookworm (<<trait_vars[''bookworm'']>>): <a href="exec:gs ''traits'', ''cheat'',...
  scene.text(`Bookworm (${(((s as any).trait_vars ?? 0)?.['bookworm'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027bookworm/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027bookworm/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027bookworm/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Body Hair Growth Rate (<<trait_vars[''body_hair_growth_rate'']>>): <a href="exec...
  scene.text(`Body Hair Growth Rate (${(((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027body_hair_growth_rate/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027body_hair_growth_rate/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027body_hair_growth_rate/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Body Hair Attitude (<<trait_vars[''body_hair_attitude'']>>): <a href="exec:gs ''...
  scene.text(`Body Hair Attitude (${(((s as any).trait_vars ?? 0)?.['body_hair_attitude'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027body_hair_attitude/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027body_hair_attitude/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027body_hair_attitude/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Hair Growth Rate (<<trait_vars[''hair_growth_rate'']>>): <a href="exec:gs ''trai...
  scene.text(`Hair Growth Rate (${(((s as any).trait_vars ?? 0)?.['hair_growth_rate'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027hair_growth_rate/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027hair_growth_rate/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027hair_growth_rate/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Pain Tolerance (<<trait_vars[''pain_tolerance'']>>): <a href="exec:gs ''traits''...
  scene.text(`Pain Tolerance (${(((s as any).trait_vars ?? 0)?.['pain_tolerance'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027pain_tolerance/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027pain_tolerance/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027pain_tolerance/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Sensitivity (<<trait_vars[''sensitivity'']>>): <a href="exec:gs ''traits'', ''ch...
  scene.text(`Sensitivity (${(((s as any).trait_vars ?? 0)?.['sensitivity'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sensitivity/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sensitivity/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sensitivity/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Fertility (<<trait_vars[''fertility'']>>): <a href="exec:gs ''traits'', ''cheat'...
  scene.text(`Fertility (${(((s as any).trait_vars ?? 0)?.['fertility'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027fertility/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027fertility/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027fertility/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Size Queen (<<trait_vars[''sizequeen'']>>): <a href="exec:gs ''traits'', ''cheat...
  scene.text(`Size Queen (${(((s as any).trait_vars ?? 0)?.['sizequeen'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sizequeen/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sizequeen/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sizequeen/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Fitness Freak (<<trait_vars[''fitness_freak'']>>): <a href="exec:gs ''traits'', ...
  scene.text(`Fitness Freak (${(((s as any).trait_vars ?? 0)?.['fitness_freak'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027fitness_freak/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027fitness_freak/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027fitness_freak/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Doormat (<<trait_vars[''doormat'']>>): <a href="exec:gs ''traits'', ''cheat'', '...
  scene.text(`Doormat (${(((s as any).trait_vars ?? 0)?.['doormat'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027doormat/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027doormat/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027doormat/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Heel Preference (<<trait_vars[''heel_preference'']>>): <a href="exec:gs ''traits...
  scene.text(`Heel Preference (${(((s as any).trait_vars ?? 0)?.['heel_preference'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027heel_preference/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027heel_preference/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027heel_preference/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Cum Display / Cumslut (<<trait_vars[''cumslut'']>>): <a href="exec:gs ''traits''...
  scene.text(`Cum Display / Cumslut (${(((s as any).trait_vars ?? 0)?.['cumslut'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cumslut/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cumslut/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cumslut/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Cum Addict (<<trait_vars[''cum_addict'']>>): <a href="exec:gs ''traits'', ''chea...
  scene.text(`Cum Addict (${(((s as any).trait_vars ?? 0)?.['cum_addict'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cum_addict/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cum_addict/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027cum_addict/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Elasticity (<<trait_vars[''elasticity'']>>): <a href="exec:gs ''traits'', ''chea...
  scene.text(`Elasticity (${(((s as any).trait_vars ?? 0)?.['elasticity'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027elasticity/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027elasticity/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027elasticity/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Sleep Pattern (<<trait_vars[''sleep_duration'']>>): <a href="exec:gs ''traits'',...
  scene.text(`Sleep Pattern (${(((s as any).trait_vars ?? 0)?.['sleep_duration'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sleep_duration/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sleep_duration/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027sleep_duration/u0027); return false;">▲</a>`);
  // TODO-QSP: dynamic text: Everything Is New Again (<<trait_vars[''new_again'']>>): <a href="exec:gs ''trai...
  scene.text(`Everything Is New Again (${(((s as any).trait_vars ?? 0)?.['new_again'] ?? '')}): <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027new_again/u0027); return false;">▼</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027new_again/u0027); return false;">Reset</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027traits/u0027, /u0027cheat/u0027, /u0027new_again/u0027); return false;">▲</a>`);
  scene.text('<center><h3>Hidden traits</h3></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'show_hidden_traits', 'Show hidden traits as inactive (reveals names and descriptions)']; enterCheatBoolRow(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('When enabled, hidden traits that are inactive will display their name and description on the traits page instead of "???".');
  // TODO-QSP: $cheatmenu['table_end']
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).settingmode ?? 0))) {
    (s as any).settingmode = 69;
  }
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_start'] = '<center><table width="80%" cellspacing="0" cellpadding="20" valign="top"><tr><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_second'] = '</td><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['table_end'] = '</td></tr></table></center>';
  ((s as any).cheatmenu = (s as any).cheatmenu ?? {})['empty'] = 'gs \'cheatmenu_din\', \'empty\'';
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
      enterDefault(s, scene);
      break;
  }
}

export const cheatmenu_din: LocationDef = {
  name: 'cheatmenu_din',
  title: 'WARNING!',
  region: 'other',
  enter: enter,
};
