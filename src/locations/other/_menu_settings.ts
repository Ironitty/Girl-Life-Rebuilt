import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  scene.build();
}

function enterSettingtabs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $tabsname[0] = 'Gameplay'
  // TODO-QSP: $tabsaction[0] = "menu_page = <<i>> & gt '$menu_settings'"
  // TODO-QSP: $tabsname[1] = 'Difficulty'
  // TODO-QSP: $tabsaction[1] = "menu_page = <<i>> & gt '$menu_settings', 'difficulty'"
  // TODO-QSP: $tabsname[2] = 'Display'
  // TODO-QSP: $tabsaction[2] = "menu_page = <<i>> & gt '$menu_settings', 'display'"
  // TODO-QSP: $tabsname[3] = 'Status Window'
  // TODO-QSP: $tabsaction[3] = "menu_page = <<i>> & gt '$menu_settings', 'status'"
  if (((s as any).settingmode ?? 0) !== 1) {
    // TODO-QSP: $tabsname[4] = 'Phone Theme'
    // TODO-QSP: $tabsaction[4] = "menu_page = <<i>> & gt '$menu_settings', 'theme'"
  }
  // TODO-QSP: $tabsname[5] = 'Mods'
  // TODO-QSP: $tabsaction[5] = "menu_page = <<i>> & gt '$menu_settings', 'mods'"
  // TODO-QSP: $tabsname[6] = 'Information'
  // TODO-QSP: $tabsaction[6] = "menu_page = <<i>> & gt '$menu_settings', 'explanation_start'"
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "_menu_settings" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
  }
  qspCall(s, 'tabhead', '', ((s as any).menu_page ?? 0));
  if (((s as any).settingmode ?? 0) === 1) {
    scene.actions([
      { label: '<center><b>Return to character creation</b></center>', handler: (st: GameState) => {
    qspCall(s, '$menu_settings', 'menu_exit');
  }, goto: ['begin', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Enter cheat menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
    // TODO-QSP: gs '$menu_cheat'
  } },
      { label: 'Export Game Settings', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
  }, goto: ['import_export', 'export'] },
      { label: 'Import Game Settings', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
  }, goto: ['import_export', 'import'] },
      { label: 'Emergency Exit', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
  }, goto: ['$menu_settings', 'emergency'] },
      { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  }
  scene.build();
}

function enterSwap(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[2] === 0  &&  ((s as any).locArgs?.[3] ?? 0) === 'up') {
    // TODO-QSP: jump 'swap_cleanup'
  }
  if (((s as any).ARGS ?? 0)[2] === (((s as any).arrsize ?? 0)('$' + ((s as any).temp_arr ?? 0)) - 1)  &&  ((s as any).locArgs?.[3] ?? 0) === 'down') {
    // TODO-QSP: jump 'swap_cleanup'
  }
  if (((s as any).locArgs?.[3] ?? 0) === 'up') {
    // TODO-QSP: dynamic '$<<$temp_arr>>[<<ARGS[2] - 1>>] = $<<$temp_arr>>[<<ARGS[2]>>]'
    // TODO-QSP: dynamic '$<<$temp_arr>>[<<ARGS[2]>>] = $temp_stat_feature'
  } else {
    // TODO-QSP: dynamic '$<<$temp_arr>>[<<ARGS[2] + 1>>] = $<<$temp_arr>>[<<ARGS[2]>>]'
    // TODO-QSP: dynamic '$<<$temp_arr>>[<<ARGS[2]>>] = $temp_stat_feature'
  }
  // TODO-QSP: :swap_cleanup
  return;
  scene.build();
}

function enterSwapGrpMember(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sgm_i = qspUntranslated(s, "ARGS[3]", { location: "_menu_settings" });
  if (((s as any).locArgs?.[4] ?? 0) === 'up'  &&  ((s as any).temp_sgm_i ?? 0) > 0) {
    (s as any).temp_sgm_j = ((s as any).temp_sgm_i ?? 0) - 1;
  } else {
    (s as any).temp_sgm_j = ((s as any).temp_sgm_i ?? 0) + 1;
    // TODO-QSP: jump 'swap_gm_cleanup'
  }
  if (((s as any).temp_sgm_bval ?? 0) === '') {
    // TODO-QSP: jump 'swap_gm_cleanup'
  }
  // TODO-QSP: dynamic '$<<$temp_sgm_base>>[''<<$temp_sgm_a>>''] = $temp_sgm_bval'
  // TODO-QSP: dynamic '$<<$temp_sgm_base>>[''<<$temp_sgm_b>>''] = $temp_stat_feature'
  // TODO-QSP: :swap_gm_cleanup
  return;
  scene.build();
}

function enterResetRels(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterResetSkills(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterToggleMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *p $menu_span + $ARGS[3] + ':</span>'
  // TODO-QSP: dynamic "temp_value = " + $ARGS[2]
  (s as any).i = 0;
  // TODO-QSP: :toggle_menu_loop
  if (((s as any).i ?? 0) > 0) {
    // TODO-QSP: *p '
    // TODO-QSP: nbsp;|
    // TODO-QSP: nbsp;'
  }
  if (((s as any).temp_value ?? 0) === ((s as any).i ?? 0)) {
    // TODO-QSP: *p '<b><<$ARGS[i+4]>></b>'
  } else {
    // TODO-QSP: *p '<a href="exec:<<$ARGS[2]>>=<<i>> & gt ''$menu_settings'', ''<<$ARGS[1]>>''"><<$ARGS[i+4]>></a>'
  }
  // TODO-QSP: *p $temp_toggle_names
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).ARGS ?? 0)[((s as any).i ?? 0)+4] !== '') {
    // TODO-QSP: jump 'toggle_menu_loop'
  }
  return;
  scene.build();
}

function enterToggleMenuRev(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *p $menu_span + $ARGS[3] + ':</span>'
  // TODO-QSP: dynamic "temp_value = " + $ARGS[2]
  (s as any).i = 0;
  // TODO-QSP: :toggle_menu_rev_loop
  if (((s as any).ARGS ?? 0)[((s as any).i ?? 0)+5] !== '') {
    // TODO-QSP: *p '
    // TODO-QSP: nbsp;|
    // TODO-QSP: nbsp;'
  }
  if (((s as any).temp_value ?? 0) === ((s as any).i ?? 0)) {
    // TODO-QSP: *p '<b><<$ARGS[i+4]>></b>'
  } else {
    // TODO-QSP: *p '<a href="exec:<<$ARGS[2]>>=<<i>> & gt ''$menu_settings'', ''<<$ARGS[1]>>''"><<$ARGS[i+4]>></a>'
  }
  (s as any).i = ((s as any).i ?? 0) - (1);
  if (((s as any).i ?? 0) >= 0) {
    // TODO-QSP: jump 'toggle_menu_rev_loop'
  }
  return;
  scene.build();
}

function enterToggleMenuSymOpt(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_tms_pi = 1;
  // TODO-QSP: :toggle_menu_sym_opt_loop
  if (((s as any).ARGS ?? 0)?.[String((s as any).temp_tms_pi ?? 0)] !== '') {
    (s as any).temp_tms_colon = qspUntranslated(s, "instr(ARGS[temp_tms_pi], ':')", { location: "_menu_settings" });
    (s as any).tms_opt_val[String((s as any).tms_opt_count ?? 0)] = parseFloat(qspUntranslated(s, "\u00001\u0000", { location: "_menu_settings" }));
    // TODO-QSP: $tms_opt_lbl[tms_opt_count] = mid($ARGS[temp_tms_pi], temp_tms_colon + 1)
    (s as any).tms_opt_count = ((s as any).tms_opt_count ?? 0) + (1);
    (s as any).temp_tms_pi = ((s as any).temp_tms_pi ?? 0) + (1);
    // TODO-QSP: jump 'toggle_menu_sym_opt_loop'
  }
  return;
  scene.build();
}

function enterToggleMenuSym(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *p $menu_span + $ARGS[3] + ':</span>'
  // TODO-QSP: dynamic 'temp_tms_cur = ' + $ARGS[2]
  (s as any).temp_tms_i = 0;
  (s as any).temp_tms_matched = 0;
  if (((s as any).locArgs?.[6] ?? 0) !== ''  &&  ((s as any).temp_tms_cur ?? 0) === -99) {
    (s as any).temp_tms_matched = 1;
  }
  // TODO-QSP: :toggle_menu_sym_loop
  if (((s as any).temp_tms_i ?? 0) < ((s as any).tms_opt_count ?? 0)) {
    if (((s as any).temp_tms_i ?? 0) > 0) {
      // TODO-QSP: *p '
      // TODO-QSP: nbsp;|
      // TODO-QSP: nbsp;'
    }
    if (((s as any).temp_tms_cur ?? 0) === ((s as any).tms_opt_val ?? 0)?.[String((s as any).temp_tms_i ?? 0)]) {
      // TODO-QSP: *p '<b><<$tms_opt_lbl[temp_tms_i]>></b>'
      (s as any).temp_tms_matched = 1;
    } else {
      // TODO-QSP: *p '<a href="exec:<<$ARGS[2]>>=<<tms_opt_val[temp_tms_i]>> & gt ''$menu_settings'', ''<<$ARGS[1]>>''...
    }
    (s as any).temp_tms_i = ((s as any).temp_tms_i ?? 0) + (1);
    // TODO-QSP: jump 'toggle_menu_sym_loop'
  }
  if (((s as any).locArgs?.[4] ?? 0) !== ''  &&  ((s as any).locArgs?.[5] ?? 0) !== '') {
    // TODO-QSP: *p '&nbsp;|&nbsp;'
    if ((!((s as any).temp_tms_matched ?? 0))) {
      // TODO-QSP: dynamic '$temp_tms_custom_val = $str(' + $ARGS[4] + ')'
      // TODO-QSP: *p '<b>Custom: <<$temp_tms_custom_val>>%</b>'
    } else {
      // TODO-QSP: *p '<a href="exec: <<$temp_tms_custom_exec>>">Custom</a>'
    }
  }
  if (((s as any).locArgs?.[6] ?? 0) !== '') {
    // TODO-QSP: *p '&nbsp;|&nbsp;'
    if (((s as any).temp_tms_cur ?? 0) === -99) {
      // TODO-QSP: *p '<b>' + $ARGS[6] + '</b>'
    } else {
      // TODO-QSP: *p '<a href="exec:<<$ARGS[2]>>=-99 & gt ''$menu_settings'', ''<<$ARGS[1]>>''"><<$ARGS[6]>></a>'
    }
  }
  return;
  scene.build();
}

function enterToggleMenuShowHide(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic "temp_value = " + $ARGS[1]
  if (((s as any).temp_value ?? 0) === 1) {
    // TODO-QSP: *p '<a href="exec:<<$ARGS[1]>>=0 & gt ''$menu_settings'', ''status'' & gs ''stat_display''">Show</a>...
  } else {
    // TODO-QSP: *p '<b>Show</b>&nbsp;|&nbsp;<a href="exec:<<$ARGS[1]>>=1 & gt ''$menu_settings'', ''status'' & gs ''...
  }
  return;
  scene.build();
}

function enterShowHideCalendar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[3] ?? 0) === 'pack') {
  }
  if (((s as any).calendar_show ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    // TODO-QSP: *p $menu_span + '<<$ARGS[2]>> Events:</span><b>Hide</b>&nbsp;|&nbsp;<a href="exec: calendar_show[''<...
  } else {
    // TODO-QSP: *p $menu_span + '<<$ARGS[2]>> Events:</span><a href="exec: calendar_show[''<<$ARGS[1]>>''] = 0 & gs ...
  }
  return;
  scene.build();
}

function enterShowHideCycleCal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).calCycleOpts ?? 0)['show_' + ((s as any).ARGS ?? 0)[1]] === 0) {
    // TODO-QSP: *p $menu_span + '<<$ARGS[2]>>:</span><b>Hide</b>&nbsp;|&nbsp;<a href="exec: calCycleOpts[''show_<<AR...
  } else {
    // TODO-QSP: *p $menu_span + '<<$ARGS[2]>>:</span><a href="exec: calCycleOpts[''show_<<ARGS[1]>>''] = 0 & gs ''ca...
  }
  return;
  scene.build();
}

function enterPickTheme(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *p iif($theme['name'] = $iif(cfg_vars['themetype'] = 0, 'Dynamic ', '') + $ARGS[1], '<b><<$ARGS[1]>>...
  scene.build();
}

function enterPrintLifeSimCheat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 1) {
    qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
  } else {
    qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
    if (((s as any).cheatVars ?? 0)?.['hunger'] === 1) {
      qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
    } else {
      qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
      if (((s as any).cheatVars ?? 0)?.['mood'] === 1) {
        qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
      } else {
        qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
        if (((s as any).cheatVars ?? 0)?.['always_brushed'] === 1) {
          qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
        } else {
          qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
          if (((s as any).cheatVars ?? 0)?.['no_sweat'] === 1) {
            qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
          } else {
            qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
            if (((s as any).cheatVars ?? 0)?.['fat'] === 1) {
              qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
            } else {
              qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
              if (((s as any).cheatVars ?? 0)?.['clothes_dirt'] === 1) {
                qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
              } else {
                qspCall(s, '$menu_settings', 'print_life_sim_cheats_on');
              }
              return;
            }
            if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'setting') {
              qspCall(s, 'stat', '');
              if (((s as any).theme ?? 0)?.['name'] === 'Custom') {
                qspCall(s, 'themes', 'check_custom_vars');
                qspCall(s, 'themes', 'set_theme', 'Custom', 'static');
                qspCall(s, '$menu_obnovit', '');
              }
              (s as any).menu_page = 0;
              qspCall(s, '$menu_settings', 'settingtabs', 'Gameplay');
              scene.text('<center><h2>General Settings</h2></center>');
              // TODO-QSP: $settings['table_start']
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cfg_vars['disable_autosave']", 'AutoSave', 'Enabled'...
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'music', "sound_settings['music_off']", 'Music', 'Enabled', 'Dis...
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'music', "sound_settings['environment_off']", 'Environment sound...
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'music', "sound_settings['menu_off']", 'Menu/Phone sounds', 'Ena...
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cfg_vars['pay_opt']", 'Default payment method', 'Cas...
              if (((s as any).cfg_vars ?? 0)?.['pay_opt'] === 0) {
                // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cfg_vars['pay_opt_backup']", 'Backup payment method'...
              } else {
                // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cfg_vars['pay_opt_backup']", 'Backup payment method'...
              }
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cfg_vars['income_opt']", 'Income method', 'Cash', 'C...
              if (((s as any).bankAccount ?? 0) === 0  &&  (((s as any).cfg_vars ?? 0)?.['income_opt'] === 1  ||  ((s as any).cfg_vars ?? 0)?.['pay_opt'] === 1)) {
                scene.text('<center><b>Warning: You\'ve selected the card payment option, but you don\'t have a bank account yet!</b></center>');
              }
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cfg_vars['allow_overdraft']", 'Allow paying with ove...
              scene.text('<font color="grey">Hybrid payment will first use up your cash, then pay the remainder with your card.</font>');
              qspCall(s, '$menu_settings', 'print_life_sim_cheat');
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cheatVars['auto_brush']", 'Auto brush hair on mirror...
              // TODO-QSP: gs '$menu_settings', 'toggle_menu_rev', 'setting', "cheatVars['enema']", 'Enema realism', 'Enabled',...
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cheatVars['pee']", 'Peeing', 'Enabled', 'Disabled' &...
              qspCall(s, 'daily_routine', 'settings_defaults');
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "droutine_settings['disabled']", 'Quick morning and e...
              if (((s as any).droutine_settings ?? 0)?.['disabled'] === 0) {
                scene.text('<a href="exec:gs \'$menu_settings\', \'menu_exit\' & gt \'daily_routine\', \'manage\', $menu_loc, $menu_arg">Set up your daily routine</a>');
              }
              // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cheatVars['rename_porn']", 'Renaming porn movies you...
              scene.text('<b>Calendar Events</b>');
              qspCall(s, '$menu_settings', 'show_hide_calendar', 'disco_party', 'Disco Party');
              qspCall(s, '$menu_settings', 'show_hide_calendar', 'church', 'Church Service', 'pack');
              qspCall(s, '$menu_settings', 'show_hide_calendar', 'intercity_trains', 'Intercity Trains', 'pack');
              scene.text('<b>Cycle Calendar Events</b>');
              qspCall(s, '$menu_settings', 'show_hide_cycle_cal', 0, 'Menstrual Phase');
              qspCall(s, '$menu_settings', 'show_hide_cycle_cal', 1, 'Follicular Phase');
              qspCall(s, '$menu_settings', 'show_hide_cycle_cal', 2, 'Fertile Phase');
              qspCall(s, '$menu_settings', 'show_hide_cycle_cal', 3, 'Luteal Phase');
              // TODO-QSP: $settings['table_end']
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'menu_exit':
      enterMenuExit(s, scene);
      break;
    case 'settingtabs':
      enterSettingtabs(s, scene);
      break;
    case 'swap':
      enterSwap(s, scene);
      break;
    case 'swap_grp_member':
      enterSwapGrpMember(s, scene);
      break;
    case 'reset_rels':
      enterResetRels(s, scene);
      break;
    case 'reset_skills':
      enterResetSkills(s, scene);
      break;
    case 'toggle_menu':
      enterToggleMenu(s, scene);
      break;
    case 'toggle_menu_rev':
      enterToggleMenuRev(s, scene);
      break;
    case 'toggle_menu_sym_opt':
      enterToggleMenuSymOpt(s, scene);
      break;
    case 'toggle_menu_sym':
      enterToggleMenuSym(s, scene);
      break;
    case 'toggle_menu_show_hide':
      enterToggleMenuShowHide(s, scene);
      break;
    case 'show_hide_calendar':
      enterShowHideCalendar(s, scene);
      break;
    case 'show_hide_cycle_cal':
      enterShowHideCycleCal(s, scene);
      break;
    case 'pick_theme':
      enterPickTheme(s, scene);
      break;
    case 'print_life_sim_cheat':
      enterPrintLifeSimCheat(s, scene);
      break;
    default:
      enterMenuExit(s, scene);
      break;
  }
}

export const _menu_settings: LocationDef = {
  name: '_menu_settings',
  title: 'Warning: You\'ve selected the card payment option, but you don\'t have a bank account yet!',
  region: 'other',
  enter: enter,
};
