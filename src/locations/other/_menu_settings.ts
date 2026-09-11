import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

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
  if (((s as any).locArgs?.[2] ?? 0) === 0  &&  ((s as any).locArgs?.[3] ?? 0) === 'up') {
    // TODO-QSP: jump 'swap_cleanup'
  }
  if (((s as any).locArgs?.[2] ?? 0) === (((s as any).arrsize ?? 0)('$' + ((s as any).temp_arr ?? 0)) - 1)  &&  ((s as any).locArgs?.[3] ?? 0) === 'down') {
    // TODO-QSP: jump 'swap_cleanup'
  }
  if (((s as any).locArgs?.[3] ?? 0) === 'up') {
    // TODO-QSP: dynamic '$<<$temp_arr>>[<<ARGS[2] - 1>>] = $<<$temp_arr>>[<<ARGS[2]>>]'
    // TODO-QSP: dynamic '$<<$temp_arr>>[<<ARGS[2]>>] = $temp_stat_feature'
  } else {
    if (((s as any).locArgs?.[3] ?? 0) === 'down') {
      // TODO-QSP: dynamic '$<<$temp_arr>>[<<ARGS[2] + 1>>] = $<<$temp_arr>>[<<ARGS[2]>>]'
      // TODO-QSP: dynamic '$<<$temp_arr>>[<<ARGS[2]>>] = $temp_stat_feature'
    }
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
    if (((s as any).locArgs?.[4] ?? 0) === 'down') {
      (s as any).temp_sgm_j = ((s as any).temp_sgm_i ?? 0) + 1;
    } else {
      // TODO-QSP: jump 'swap_gm_cleanup'
    }
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
    // TODO-QSP: *p '&nbsp;|&nbsp;'
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
    // TODO-QSP: *p '&nbsp;|&nbsp;'
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
    ((s as any).tms_opt_val ?? {})[String((s as any).tms_opt_count ?? 0)] = parseFloat(((qspUntranslated(s, "$\u00000\u0000", { location: "_menu_settings" })).slice((1)-1, ((1)-1)+(((s as any).temp_tms_colon ?? 0) - 1))));
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
      // TODO-QSP: *p '&nbsp;|&nbsp;'
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
  if (((s as any).calCycleOpts ?? 0)['show_' + ((s as any).locArgs?.[1] ?? 0)] === 0) {
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
    if (((s as any).cheatVars ?? 0)?.['inf_willpower'] === 1) {
      qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
    } else {
      if (((s as any).cheatVars ?? 0)?.['hunger'] === 1) {
        qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
      } else {
        if (((s as any).cheatVars ?? 0)?.['thirst'] === 1) {
          qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
        } else {
          if (((s as any).cheatVars ?? 0)?.['mood'] === 1) {
            qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
          } else {
            if (((s as any).cheatVars ?? 0)?.['sleep'] === 1) {
              qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
            } else {
              if (((s as any).cheatVars ?? 0)?.['always_brushed'] === 1) {
                qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
              } else {
                if (((s as any).cheatVars ?? 0)?.['makeup_smear'] === 1) {
                  qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
                } else {
                  if (((s as any).cheatVars ?? 0)?.['no_sweat'] === 1) {
                    qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
                  } else {
                    if (((s as any).cheatVars ?? 0)?.['no_leghair'] === 1) {
                      qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
                    } else {
                      if (((s as any).cheatVars ?? 0)?.['fat'] === 1) {
                        qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
                      } else {
                        if (((s as any).cheatVars ?? 0)?.['no_periods'] === 1) {
                          qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
                        } else {
                          if (((s as any).cheatVars ?? 0)?.['clothes_dirt'] === 1) {
                            qspCall(s, '$menu_settings', 'print_life_sim_cheats_off');
                          } else {
                            qspCall(s, '$menu_settings', 'print_life_sim_cheats_on');
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
  return;
  scene.build();
}

function enterPrintLifeSimCheatsOff(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $menu_span + 'All life sim features:</span><a href="exec: gs ''$menu_settings'', ''lifesim_cheats_of...
  return;
  scene.build();
}

function enterPrintLifeSimCheatsOn(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $menu_span + 'All life sim features:</span><b>Enabled</b> | <a href="exec: gs ''$menu_settings'', ''...
  return;
  scene.build();
}

function enterLifesimCheatsOff(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars ?? {})['willpower'] = 0;
  ((s as any).cheatVars ?? {})['inf_willpower'] = 0;
  ((s as any).cheatVars ?? {})['hunger'] = 0;
  ((s as any).cheatVars ?? {})['thirst'] = 0;
  ((s as any).cheatVars ?? {})['mood'] = 0;
  ((s as any).cheatVars ?? {})['sleep'] = 0;
  ((s as any).cheatVars ?? {})['always_brushed'] = 0;
  ((s as any).cheatVars ?? {})['makeup_smear'] = 0;
  ((s as any).cheatVars ?? {})['no_sweat'] = 0;
  ((s as any).cheatVars ?? {})['no_leghair'] = 0;
  ((s as any).cheatVars ?? {})['fat'] = 0;
  if (((s as any).cheatVars ?? 0)?.['no_periods'] === 1) {
    qspCall(s, 'cheatmenu_din', 'slutshot');
  }
  ((s as any).cheatVars ?? {})['clothes_dirt'] = 0;
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
  scene.build();
}

function enterLifesimCheatsOn(s: GameState, scene: SceneBuilder): void {
  scene.text('This will activate multiple cheats and have a profound impact on how the game is experienced.');
  scene.text('We strongly discourage the use of this feature, but we also recognize that the life sim aspect is not for everybody.');
  scene.text('Are you sure you want to activate this?');
  return;
  scene.actions([
    { label: 'No, I do not want to disable all life sim features', goto: ['$menu_settings', ''] },
    { label: 'Yes, disable all life sim features', handler: (st: GameState) => {
    ((s as any).cheatVars ?? {})['willpower'] = 1;
    ((s as any).cheatVars ?? {})['inf_willpower'] = 1;
    ((s as any).cheatVars ?? {})['hunger'] = 1;
    ((s as any).cheatVars ?? {})['thirst'] = 1;
    ((s as any).cheatVars ?? {})['mood'] = 1;
    ((s as any).cheatVars ?? {})['sleep'] = 1;
    ((s as any).cheatVars ?? {})['always_brushed'] = 1;
    ((s as any).cheatVars ?? {})['makeup_smear'] = 1;
    ((s as any).cheatVars ?? {})['no_sweat'] = 1;
    ((s as any).cheatVars ?? {})['no_leghair'] = 1;
    ((s as any).cheatVars ?? {})['fat'] = 1;
    if (((s as any).cheatVars ?? 0)?.['no_periods'] === 0) {
      qspCall(s, 'cheatmenu_din', 'slutshot');
    }
    ((s as any).cheatVars ?? {})['auto_tampons'] = 1;
    ((s as any).cheatVars ?? {})['clothes_dirt'] = 1;
    qspCall(s, 'washer', 'wash_all');
    ((s as any).pcs_mass ?? {})['body'] = qspFunc(s, 'body', 'CalcOptBodyMass', 225);
    qspCall(s, 'body', 'softreset');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'menu_settings');
  } },
  ]);
  scene.build();
}

function enterMusic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 1  ||  ((s as any).sound_settings ?? 0)?.['environment_off'] === 1  ||  ((s as any).sound_settings ?? 0)?.['menu_off'] === 1) {
  }
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).music_loop = 1;
  } else {
    (s as any).music_loop = 0;
  }
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
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
    if (((s as any).cfg_vars ?? 0)?.['pay_opt'] === 1) {
      // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'setting', "cfg_vars['pay_opt_backup']", 'Backup payment method'...
    }
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
  scene.build();
}

function enterDifficulty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_settings', 'settingtabs', 'Difficulty');
  qspCall(s, 'archetypes', 'init');
  scene.text('<center><h2>Difficulty Settings</h2></center>');
  // TODO-QSP: $settings['table_start']
  // TODO-QSP: *p $menu_span + '<b>Difficulty Presets:</b></span>'
  (s as any).temp_preset = qspFunc(s, '_difficulty', 'preset', 'get');
  // TODO-QSP: *p iif(temp_preset = 1, '<b>Sims</b>', '<a href="exec: gs ''_difficulty'', ''preset'', ''set'', ''si...
  // TODO-QSP: *p iif(temp_preset = 2, '<b>Very Easy</b>', '<a href="exec: gs ''_difficulty'', ''preset'', ''set'',...
  // TODO-QSP: *p iif(temp_preset = 3, '<b>Easy</b>', '<a href="exec: gs ''_difficulty'', ''preset'', ''set'', ''ea...
  // TODO-QSP: *p iif(temp_preset = 4, '<b>Normal</b>', '<a href="exec: gs ''_difficulty'', ''preset'', ''set'', ''...
  // TODO-QSP: *p iif(temp_preset = 5, '<b>Hard</b>', '<a href="exec: gs ''_difficulty'', ''preset'', ''set'', ''ha...
  // TODO-QSP: *p iif(temp_preset = 6, '<b>Very Hard</b>', '<a href="exec: gs ''_difficulty'', ''preset'', ''set'',...
  // TODO-QSP: *p iif(temp_preset = 7, '<b>Russia</b>', '<a href="exec: gs ''_difficulty'', ''preset'', ''set'', ''...
  scene.text('<font color="grey">Selecting a preset will adjust multiple settings at once.</font>');
  scene.text('<center><h3>Custom difficulty settings</h3></center>');
  scene.text('<b>Skill multipliers:</b>');
  // TODO-QSP: *p $menu_span + '    Skill gain rate:</span>'
  // TODO-QSP: *p iif(cheatVars['skill_gain'] = 1, '<b>Very Fast</b>', '<a href="exec: gs ''_difficulty'', ''setdif...
  // TODO-QSP: *p iif(cheatVars['skill_gain'] = 2, '<b>Fast</b>', '<a href="exec: gs ''_difficulty'', ''setdifficul...
  // TODO-QSP: *p iif(cheatVars['skill_gain'] = 3, '<b>Normal</b>', '<a href="exec: gs ''_difficulty'', ''setdiffic...
  // TODO-QSP: *p iif(cheatVars['skill_gain'] = 4, '<b>Slow</b>', '<a href="exec: gs ''_difficulty'', ''setdifficul...
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-4:⅓×', '-3:½×', '-1:¾×', '0:1× ✿', '2:1½×', '3:2×', '4:3×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cheatVars['deg_speed_opt']", '    Skill degra...
  scene.text('<b>Economic multipliers:</b>');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-4:⅓×', '-3:½×', '-1:¾×', '0:1× ✿', '2:1½×', '3:2×', '4:3×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cfg_vars['pos_mult_opt']", '    Income', "cfg...
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-4:⅓×', '-3:½×', '-1:¾×', '0:1× ✿', '2:1½×', '3:2×', '4:3×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cfg_vars['neg_mult_opt']", '    Expense', "cf...
  scene.text('<b>Mood multipliers:</b>');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-3:½×', '-2:⅔×', '-1:¾×', '0:1× ✿', '1:1¼×', '2:1½×', '3:2×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cheatVars['pos_mood_opt']", '    Positive moo...
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-3:½×', '-2:⅔×', '-1:¾×', '0:1× ✿', '1:1¼×', '2:1½×', '3:2×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cheatVars['neg_mood_opt']", '    Negative moo...
  scene.text('<b>Willpower cost multiplier:</b>');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-3:½×', '-2:⅔×', '-1:¾×', '0:1× ✿', '1:1¼×', '2:1½×', '3:2×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cheatVars['wp_cost_opt']", '    Willpower cos...
  scene.text('<b>Fertility multipliers:</b>');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-4:⅓×', '-3:½×', '-2:⅔×', '0:1× ✿', '2:1½×', '3:2×', '4:3×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cheatVars['preg_chance']", '    Pregnancy cha...
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-4:⅓×', '-3:½×', '-2:⅔×', '0:1× ✿', '2:1½×', '3:2×', '4:3×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cheatVars['preg_speed']", '    Pregnancy spee...
  scene.text('<b>Event chance:</b>');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '1:Disabled', '2:Low', '0:Normal ✿', '3:High', '4:Very High');
  qspCall(s, '$menu_settings', 'toggle_menu_sym', 'difficulty', 'cheatVars[\'random_lovers\']', '    Random boyfriend / girlfriend events');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '1:Disabled', '2:Low', '0:Normal ✿', '3:High', '4:Very High');
  qspCall(s, '$menu_settings', 'toggle_menu_sym', 'difficulty', 'cheatVars[\'random_robbers\']', '    Random robbery events');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '1:Disabled', '2:Low', '0:Normal ✿', '3:High', '4:Very High');
  qspCall(s, '$menu_settings', 'toggle_menu_sym', 'difficulty', 'cheatVars[\'random_snatchers\']', '    Random purse snatching events');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '1:Disabled', '2:Low', '0:Normal ✿', '3:High', '4:Very High');
  qspCall(s, '$menu_settings', 'toggle_menu_sym', 'difficulty', 'cheatVars[\'random_rapists\']', '    Random rapist events');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '1:Disabled', '2:Low', '0:Normal ✿', '3:High', '4:Very High');
  qspCall(s, '$menu_settings', 'toggle_menu_sym', 'difficulty', 'cheatVars[\'abduction_chance\']', '    Abduction events');
  scene.text('<b>Other tweaks:</b>');
  if (((s as any).cheatVars ?? 0)?.['no_periods'] === 0) {
    // TODO-QSP: gs '$menu_settings', 'toggle_menu_rev', 'difficulty', "cheatVars['auto_tampons']", '    Auto-discard...
    // TODO-QSP: gs '$menu_settings', 'toggle_menu_rev', 'difficulty', "cheatVars['track_period']", '    Automaticall...
  }
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'difficulty', "cheatVars['tatiana_apprnc_change']", '    Tatiana...
  }
  scene.text('<b>Archetype difficulty:</b>');
  scene.text('<font color="grey">Controls how many trait points are needed to activate traits and reach full effect. Lower values make it easier to get traits.</font>');
  qspCall(s, '$menu_settings', 'toggle_menu_sym_opt', '-2:¼×', '-1:½×', '0:1× ✿', '1:2×', '2:4×');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_sym', 'difficulty', "cheatVars['arch_difficulty']", '    Archetype...
  scene.text('<font color="grey">✿ = default value</font>');
  // TODO-QSP: $settings['table_end']
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_settings', 'settingtabs', 'Display');
  scene.text('<center><h2>Display Settings</h2></center>');
  // TODO-QSP: $settings['table_start']
  scene.text('<b><a href="exec: $themes_menu_ret_loc = \'$menu_settings\' & $themes_menu_ret_arg = \'display\' & gt \'themes\', \'menu\'">Show theme selector</a></b>');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "cfg_vars['themetype']", 'Theme type', 'Dynamic', 'St...
  if (((s as any).theme ?? 0)?.['name'] === ''  ||  ((s as any).theme ?? 0)?.['type'] === '') {
    ((s as any).theme ?? {})['name'] = 'Dynamic Default';
    ((s as any).theme ?? {})['type'] = 'dynamic';
    qspCall(s, 'themes', 'set_theme', 'Dynamic Default', 'dynamic');
  }
  if (((s as any).cfg_vars ?? 0)?.['theme_main_name'] === '') {
    ((s as any).cfg_vars ?? {})['theme_main_name'] = 'Default';
  }
  if (((s as any).cfg_vars ?? 0)?.['themetype'] === 0) {
    if (((s as any).theme ?? 0)?.['type'] === 'static') {
      if (((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'White'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Black'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Modern Grey'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Custom') {
        ((s as any).cfg_vars ?? {})['theme_main_name'] = 'Default';
      }
      qspCall(s, '$menu_obnovit', '');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
    }
    // TODO-QSP: *p $menu_span + 'Classic Theme Selection [Dynamic only]:</span>'
    qspCall(s, '$menu_settings', 'pick_theme', 'Default', 'dynamic');
  } else {
    if (((s as any).theme ?? 0)?.['type'] === 'dynamic') {
      if (((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Default') {
        ((s as any).cfg_vars ?? {})['theme_main_name'] = 'White';
      }
      qspCall(s, '$menu_obnovit', '');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
    }
    // TODO-QSP: *p $menu_span + 'Classic Theme Selection [Static only]:</span>'
    qspCall(s, '$menu_settings', 'pick_theme', 'White', 'static\' & *p \'&nbsp;|&nbsp;');
    qspCall(s, '$menu_settings', 'pick_theme', 'Black', 'static\' & *p \'&nbsp;|&nbsp;');
    qspCall(s, '$menu_settings', 'pick_theme', 'Modern Grey', 'static\' & *p \'&nbsp;|&nbsp;');
    qspCall(s, '$menu_settings', 'pick_theme', 'Custom', 'static\' & *p \'&nbsp;');
    // TODO-QSP: *p '<a href="exec: gt ''$menu_settings'', ''theme_customize''"><img src="images/system/ui/preference...
  }
  // TODO-QSP: *p $menu_span + 'Catppuccin themes:</span>'
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Latte', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'static') & *...
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Frappé', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'static') & ...
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Macchiato', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'static')...
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Mocha', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'static')
  // TODO-QSP: *p $menu_span + 'Nord themes:</span>'
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Nord Light', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'static'...
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Nord Dark', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'static')
  // TODO-QSP: *p $menu_span + 'Solarized themes:</span>'
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Solarized Light', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'st...
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Solarized Dark', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'sta...
  // TODO-QSP: *p $menu_span + 'Tokyo Night themes:</span>'
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Tokyo Night Light', $iif(cfg_vars['themetype'] = 0, 'dynamic', '...
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Tokyo Night', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'static...
  // TODO-QSP: *p $menu_span + 'Rosé Pine themes:</span>'
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Rosé Pine Dawn', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'sta...
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Rosé Pine', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'static')...
  // TODO-QSP: gs '$menu_settings', 'pick_theme', 'Rosé Pine Moon', $iif(cfg_vars['themetype'] = 0, 'dynamic', 'sta...
  scene.text('<font color="grey">Dynamic themes will change colour based on the game hour.</font>');
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "cfg_vars['use_popups']", 'Allow Popup Pictures', 'OF...
  if (((s as any).cfg_vars ?? 0)?.['imgh'] > 0) {
    ((s as any).cfg_vars ?? {})['imgw'] = 0;
  } else {
    if (((s as any).cfg_vars ?? 0)?.['imgw'] > 0) {
      ((s as any).cfg_vars ?? {})['imgh'] = 0;
    } else {
      if (((s as any).cfg_vars ?? 0)?.['imgh'] <= 0  &&  ((s as any).cfg_vars ?? 0)?.['imgw'] <= 0) {
      }
    }
  }
  // TODO-QSP: $menu_span + 'Force Image height:</span><a href="exec:cfg_vars[''imgw'']=0 & cfg_vars[''imgh'']=inpu...
  // TODO-QSP: $menu_span + 'Force Image width:</span><a href="exec:cfg_vars[''imgh'']=0 & cfg_vars[''imgw'']=input...
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "cfg_vars['tablemap']", 'List friends in table', 'Dis...
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "stat_cfg['android']", 'Android Mode', 'Disabled', 'E...
  // TODO-QSP: gs '$menu_settings', 'toggle_menu_rev', 'display', "cfg_vars['debug']", 'Show Debug window on save l...
  if (((s as any).cfg_vars ?? 0)?.['debug'] === 0  &&  (!((s as any).debug_warning_closed ?? 0))) {
    scene.text('<font color="grey">Even if <b>Disabled</b>, the Debug window will still show until you click <b>Remove debug info</b>!</font>');
  }
  if (((s as any).stat_cfg ?? 0)?.['android'] === 1) {
    scene.text('Set Fontsize for Status: Unsupported');
    scene.text('click <b>refresh</b> on top of status window to renew.');
  }
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "cheatVars['willcost_style']", 'Willpower cost style'...
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "cfg_vars['faceturn']", 'Always show face', 'Disabled...
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "face_style['type']", 'Profile image type', 'Dynamic'...
  if (((s as any).face_style ?? 0)?.['type'] === 1) {
    if (((s as any).temp_path ?? 0) !== '') {
      ((s as any).face_style ?? {})['avatar_path'] = ((s as any).temp_path ?? 0);
    }
    if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
      ((s as any).face_style ?? {})['avatar_path'] = 'images/avatar.jpg';
    }
    // TODO-QSP: $menu_span + 'Current profile image:</span><a href="exec: $temp_path = $input(''Where is the avatar ...
  }
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "face_style['custom_hair_toggle']", 'Custom hair desc...
  if (((s as any).face_style ?? 0)?.['custom_hair_toggle'] === 1) {
    // TODO-QSP: $menu_span + 'Custom hair description:</span><a href="exec: $face_style[''avatar_hair''] = $input(''...
  }
  if ((!((s as any).settingmode ?? 0))) {
    // TODO-QSP: $menu_span + '<a href="exec:$temp_loc_font = ''$menu_settings'' & $temp_loc_arg_font = ''display'' &...
  }
  // TODO-QSP: gs '$menu_settings', 'toggle_menu', 'display', "cheatVars['shop_alt_color']", 'Filter alternative co...
  // TODO-QSP: $settings['table_end']
  scene.build();
}

function enterThemeCustomize(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'check_custom_vars');
  if (((s as any).theme ?? 0)?.['name'] === 'Custom') {
    qspCall(s, 'themes', 'set_theme', 'Custom', 'static');
    qspCall(s, '$menu_obnovit', '');
  }
  (s as any).menu_page = (-1);
  qspCall(s, '$menu_settings', 'settingtabs');
  scene.text('<center><h2>Customize Theme</h2></center>');
  // TODO-QSP: *p '<center><table width="90%" cellspacing="0" cellpadding="20" valign="top"><tr><td bgcolor="black"...
  (s as any).icon_height = 13;
  // TODO-QSP: *p 'Font Family: <<$custom_theme[''fname'']>>&nbsp;'
  // TODO-QSP: *p 'Font Size:&nbsp;'
  // TODO-QSP: *p '<a href="exec: custom_theme[''fsize''] = iif(custom_theme[''fsize''] <= 9, 9, custom_theme[''fsi...
  // TODO-QSP: *p '&nbsp;<<custom_theme[''fsize'']>>&nbsp;'
  // TODO-QSP: *p '<a href="exec: custom_theme[''fsize''] += 1 & gt ''$menu_settings'', ''theme_customize''"><img s...
  // TODO-QSP: *p 'BG Color: <<func(''shortgs'', ''rgb_to_hex'', custom_theme[''bcolor''])>>&nbsp;'
  // TODO-QSP: *p 'R:&nbsp;' + $func('$menu_settings', 'theme_customize_print_color_line', 'red', 'custom_theme[''b...
  // TODO-QSP: *p 'G:&nbsp;' + $func('$menu_settings', 'theme_customize_print_color_line', 'green', 'custom_theme['...
  // TODO-QSP: *p 'FG (text) Color: <<func(''shortgs'', ''rgb_to_hex'', custom_theme[''fcolor''])>>&nbsp;'
  // TODO-QSP: *p 'R:&nbsp;' + $func('$menu_settings', 'theme_customize_print_color_line', 'red', 'custom_theme[''f...
  // TODO-QSP: *p 'G:&nbsp;' + $func('$menu_settings', 'theme_customize_print_color_line', 'green', 'custom_theme['...
  // TODO-QSP: *p 'Link Color: <<func(''shortgs'', ''rgb_to_hex'', custom_theme[''lcolor''])>>&nbsp;'
  // TODO-QSP: *p 'R:&nbsp;' + $func('$menu_settings', 'theme_customize_print_color_line', 'red', 'custom_theme[''l...
  // TODO-QSP: *p 'G:&nbsp;' + $func('$menu_settings', 'theme_customize_print_color_line', 'green', 'custom_theme['...
  // TODO-QSP: *p 'Table BG: <font color="<<$custom_theme[''table_bg'']>>">&#9632;</font>&nbsp;<<$custom_theme[''ta...
  // TODO-QSP: *p 'Alt Table BG: <font color="<<$custom_theme[''table_bg_alt'']>>">&#9632;</font>&nbsp;<<$custom_th...
  // TODO-QSP: *p 'Dark Mode&nbsp;'
  if (((s as any).custom_theme ?? 0)?.['is_dark'] === 0) {
  }
  // TODO-QSP: *p 'Accent: <font color="<<$custom_theme[''accent'']>>">&#9632;</font>&nbsp;<<$custom_theme[''accent...
  // TODO-QSP: *p 'V.Positive: <font color="<<$custom_theme[''v_pos'']>>">&#9632;</font>&nbsp;<<$custom_theme[''v_p...
  // TODO-QSP: *p 'Positive: <font color="<<$custom_theme[''pos'']>>">&#9632;</font>&nbsp;<<$custom_theme[''pos'']>...
  // TODO-QSP: *p 'Neutral: <font color="<<$custom_theme[''neutral'']>>">&#9632;</font>&nbsp;<<$custom_theme[''neut...
  // TODO-QSP: *p 'Negative: <font color="<<$custom_theme[''neg'']>>">&#9632;</font>&nbsp;<<$custom_theme[''neg'']>...
  // TODO-QSP: *p 'V.Negative: <font color="<<$custom_theme[''v_neg'']>>">&#9632;</font>&nbsp;<<$custom_theme[''v_n...
  // TODO-QSP: *p 'Bimbo: <font color="<<$custom_theme[''bimbo'']>>">&#9632;</font>&nbsp;<<$custom_theme[''bimbo'']...
  // TODO-QSP: *p 'Goth: <font color="<<$custom_theme[''goth'']>>">&#9632;</font>&nbsp;<<$custom_theme[''goth'']>>&...
  // TODO-QSP: *p 'Punk: <font color="<<$custom_theme[''punk'']>>">&#9632;</font>&nbsp;<<$custom_theme[''punk'']>>&...
  // TODO-QSP: *p 'Hypno: <font color="<<$custom_theme[''hypno'']>>">&#9632;</font>&nbsp;<<$custom_theme[''hypno'']...
  if (((s as any).custom_theme ?? 0)?.['increment'] === 0) {
    ((s as any).custom_theme ?? {})['increment'] = 16;
  }
  // TODO-QSP: *p 'Increment:&nbsp;'
  // TODO-QSP: *p '<a href="exec: custom_theme[''increment''] = iif(custom_theme[''increment''] <= 1, 1, custom_the...
  // TODO-QSP: *p '&nbsp;<<custom_theme[''increment'']>>&nbsp;'
  // TODO-QSP: *p '<a href="exec: custom_theme[''increment''] += 1 & gt ''$menu_settings'', ''theme_customize''"><i...
  // TODO-QSP: *p '</font></td>'
  ((s as any).theme_hex ?? {})['table_bg'] = ((s as any).custom_theme ?? 0)?.['table_bg'];
  ((s as any).theme_hex ?? {})['table_bg_alt'] = ((s as any).custom_theme ?? 0)?.['table_bg_alt'];
  ((s as any).theme_hex ?? {})['accent'] = ((s as any).custom_theme ?? 0)?.['accent'];
  ((s as any).theme_hex ?? {})['v_pos'] = ((s as any).custom_theme ?? 0)?.['v_pos'];
  ((s as any).theme_hex ?? {})['pos'] = ((s as any).custom_theme ?? 0)?.['pos'];
  ((s as any).theme_hex ?? {})['neutral'] = ((s as any).custom_theme ?? 0)?.['neutral'];
  ((s as any).theme_hex ?? {})['neg'] = ((s as any).custom_theme ?? 0)?.['neg'];
  ((s as any).theme_hex ?? {})['v_neg'] = ((s as any).custom_theme ?? 0)?.['v_neg'];
  // TODO-QSP: *p '<td valign="top" style="padding:20px;">'
  // TODO-QSP: dynamic text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. A <font color="<<$custo...
  scene.text(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. A <font color="${((s as any).custom_theme ?? 0)?.['bimbo']}">bimbo</font> wandered into a <font color="${((s as any).custom_theme ?? 0)?.['goth']}">goth</font> café, sparking a <font color="${((s as any).custom_theme ?? 0)?.['punk']}">punk</font> uprising while the air crackled with <font color="${((s as any).custom_theme ?? 0)?.['hypno']}">hypno</font> energy. <a href="exec:gt '$menu_settings', 'theme_customize'">Pellentesque habitant</a> morbi tristique senectus et netus.`);
  // TODO-QSP: *p '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse; min-width:320px;">'
  // TODO-QSP: *p '<tr><td style="background:<<$custom_theme[''table_bg'']>>; padding:6px 14px; color:<<$tc_fg_hex>...
  // TODO-QSP: *p '<tr><td style="background:<<$custom_theme[''table_bg_alt'']>>; padding:6px 14px; color:<<$tc_fg_...
  // TODO-QSP: *p '<tr><td style="background:<<$custom_theme[''table_bg'']>>; padding:6px 14px; color:<<$tc_fg_hex>...
  // TODO-QSP: *p '<tr><td style="background:<<$custom_theme[''table_bg_alt'']>>; padding:6px 14px; color:<<$tc_fg_...
  // TODO-QSP: *p '</table>'
  // TODO-QSP: *p '<table style="border-collapse:collapse; vertical-align:top;"><tr>'
  // TODO-QSP: *p '<td style="vertical-align:top; padding-right:16px;">'
  // TODO-QSP: *p $func('progressbar', 'positive', 100, 0, 0, 0, '', '', '21,41,61,81')
  // TODO-QSP: *p $func('progressbar', 'positive', 80, 0, 0, 0, '', '', '21,41,61,81')
  // TODO-QSP: *p $func('progressbar', 'positive', 60, 0, 0, 0, '', '', '21,41,61,81')
  // TODO-QSP: *p $func('progressbar', 'positive', 40, 0, 0, 0, '', '', '21,41,61,81')
  // TODO-QSP: *p $func('progressbar', 'positive', 20, 0, 0, 0, '', '', '21,41,61,81')
  // TODO-QSP: *p '</td>'
  // TODO-QSP: *p '<td style="vertical-align:top;">'
  // TODO-QSP: *p $func('progressbar', 'mono:accent', 100)
  // TODO-QSP: *p $func('progressbar', 'mono:accent', 80)
  // TODO-QSP: *p $func('progressbar', 'mono:accent', 60)
  // TODO-QSP: *p $func('progressbar', 'mono:accent', 40)
  // TODO-QSP: *p $func('progressbar', 'mono:accent', 20)
  // TODO-QSP: *p '</td>'
  // TODO-QSP: *p '</tr></table>'
  // TODO-QSP: *p '</td></tr></table></center>'
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).menu_page = 2;
  }, goto: ['$menu_settings', 'display'] },
    { label: 'Presets', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'theme_presets');
  } },
    { label: 'Export', goto: ['$menu_settings', 'theme_export'] },
    { label: 'Import', handler: (st: GameState) => {
    // TODO-QSP: killvar 'menu_page'
  }, goto: ['initg', 'set_game_set'] },
  ]);
  scene.build();
}

function enterThemeCustomizeInput(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'rgb') {
    (s as any).result = qspUntranslated(s, "ARGS[3]", { location: "_menu_settings" });
    if (((s as any).temp_input ?? 0) !== '') {
      if (!isNaN($temp_input) && $temp_input !== '' !== 0) {
        if (parseFloat(((s as any).temp_input ?? 0)) < 0  ||  parseFloat(((s as any).temp_input ?? 0)) > 255) {
        } else {
          (s as any).temp_result = qspUntranslated(s, "val(temp_input)", { location: "_menu_settings" });
        }
      } else {
        if (((((s as any).temp_input ?? 0)).length) > 2  ||  (('123456789ABCDEF').indexOf((((((s as any).temp_input ?? 0)).slice((1)-1, ((1)-1)+(1)))))) + 1 === 0  ||  (('123456789ABCDEF').indexOf((((((s as any).temp_input ?? 0)).slice((2)-1, ((2)-1)+(1)))))) + 1 === 0) {
        } else {
          (s as any).temp_result = qspFunc(s, 'shortgs', 'hex_str_to_int', ((s as any).temp_input ?? 0));
        }
      }
    }
    if (Object.keys((s as any).temp_result ?? {}).length === 1) {
      if (((s as any).locArgs?.[2] ?? 0) === 'red') {
        (s as any).result = ((((s as any).locArgs?.[3] ?? 0)  &&  (-256))  ||  ((s as any).temp_result ?? 0));
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'green') {
          (s as any).result = ((((s as any).locArgs?.[3] ?? 0)  &&  (-65281))  ||  (((s as any).temp_result ?? 0) * 256));
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'blue') {
            (s as any).result = ((((s as any).locArgs?.[3] ?? 0)  &&  (-16711681))  ||  (((s as any).temp_result ?? 0) * 65536));
          }
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'hex') {
      (s as any).result = qspUntranslated(s, "ARGS[2]", { location: "_menu_settings" });
      if (((s as any).temp_input ?? 0) !== '') {
        (s as any).temp_length = qspUntranslated(s, "len(temp_input)", { location: "_menu_settings" });
        if (((s as any).temp_length ?? 0) === 3  ||  ((s as any).temp_length ?? 0) === 6) {
          (s as any).temp_index = 1;
          // TODO-QSP: :is_hex_loop
          if ((('123456789ABCDEF').indexOf((((((s as any).temp_input ?? 0)).slice((((s as any).temp_index ?? 0))-1, ((((s as any).temp_index ?? 0))-1)+(1)))))) + 1 === 0) {
          }
          if (((s as any).temp_index ?? 0) < ((s as any).temp_length ?? 0)) {
            (s as any).temp_index = ((s as any).temp_index ?? 0) + (1);
            // TODO-QSP: jump 'is_hex_loop'
          }
          if (((s as any).temp_length ?? 0) === 3) {
          }
          (s as any).result = qspUntranslated(s, "rgb(func('shortgs', 'hex_str_to_int', temp_red), func('shortgs', 'hex_str_to_int', temp_green), func('shortgs', 'hex_str_to_int', temp_blue))", { location: "_menu_settings" });
        }
        // TODO-QSP: :invalid_input_exit
      }
    }
  }
  scene.build();
}

function enterThemeCustomizeInputFname(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_input ?? 0) !== '') {
    ((s as any).custom_theme ?? {})['fname'] = ((s as any).temp_input ?? 0);
  }
  scene.build();
}

function enterThemeCustomizeInputFsize(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_input ?? 0) !== '') {
    if (!isNaN($temp_input) && $temp_input !== '') {
      ((s as any).custom_theme ?? {})['fsize'] = ((parseFloat(((s as any).temp_input ?? 0)) <= 9) ? (9) : (qspUntranslated(s, "val(temp_input)", { location: "_menu_settings" })));
    }
  }
  scene.build();
}

function enterThemeCustomizeInputIncrement(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_input ?? 0) !== '') {
    if (!isNaN($temp_input) && $temp_input !== '') {
      ((s as any).custom_theme ?? {})['increment'] = ((parseFloat(((s as any).temp_input ?? 0)) <= 1) ? (1) : (qspUntranslated(s, "val(temp_input)", { location: "_menu_settings" })));
    }
  }
  scene.build();
}

function enterThemeCustomizeInputHexStr(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_hsi ?? 0) !== '') {
    (s as any).temp_hsi_len = qspUntranslated(s, "len(temp_hsi)", { location: "_menu_settings" });
    if (((s as any).temp_hsi_len ?? 0) === 3  ||  ((s as any).temp_hsi_len ?? 0) === 6) {
      (s as any).temp_hsi_idx = 1;
      // TODO-QSP: :hsi_hex_loop
      if ((('123456789ABCDEF').indexOf((((((s as any).temp_hsi ?? 0)).slice((((s as any).temp_hsi_idx ?? 0))-1, ((((s as any).temp_hsi_idx ?? 0))-1)+(1)))))) + 1 === 0) {
      }
      if (((s as any).temp_hsi_idx ?? 0) < ((s as any).temp_hsi_len ?? 0)) {
        (s as any).temp_hsi_idx = ((s as any).temp_hsi_idx ?? 0) + (1);
        // TODO-QSP: jump 'hsi_hex_loop'
      }
      if (((s as any).temp_hsi_len ?? 0) === 3) {
      }
      // TODO-QSP: :hsi_exit
    }
  }
  scene.build();
}

function enterExtractColorComponent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'red') {
    (s as any).result = (((s as any).locArgs?.[2] ?? 0)  &&  255);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'green') {
      (s as any).result = ((((s as any).locArgs?.[2] ?? 0)  &&  65280) / 256);
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'blue') {
        (s as any).result = ((((s as any).locArgs?.[2] ?? 0)  &&  16711680) / 65536);
      }
    }
  }
  scene.build();
}

function enterThemeCustomizeIncrement(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'rgb') {
    (s as any).result = qspFunc(s, '$menu_settings', 'extract_color_component', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "_menu_settings" })) + ((s as any).ARGS ?? 0)[4];
    (s as any).result = ((((s as any).result ?? 0) > 255) ? (((s as any).result ?? 0) - 256) : (((((s as any).result ?? 0) < 0) ? (256 + ((s as any).result ?? 0)) : (((s as any).result ?? 0)))));
    if (((s as any).locArgs?.[2] ?? 0) === 'red') {
      (s as any).result = ((((s as any).locArgs?.[3] ?? 0)  &&  (-256))  ||  ((s as any).result ?? 0));
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'green') {
        (s as any).result = ((((s as any).locArgs?.[3] ?? 0)  &&  (-65281))  ||  (((s as any).result ?? 0) * 256));
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'blue') {
          (s as any).result = ((((s as any).locArgs?.[3] ?? 0)  &&  (-16711681))  ||  (((s as any).result ?? 0) * 65536));
        } else {
          (s as any).result = qspUntranslated(s, "ARGS[2]", { location: "_menu_settings" });
        }
      }
    }
  }
  scene.build();
}

function enterThemeCustomizePrintColorLine(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += '&nbsp;<<func(''$menu_settings'', ''extract_color_component'', ''<<$ARGS[1]>>'', dyneval(...
  // TODO-QSP: $result += '<a href="exec: <<$ARGS[2]>> = func(''$menu_settings'', ''theme_customize_increment'', ''...
  // TODO-QSP: $result += '&nbsp;'
  // TODO-QSP: $result += '<a href="exec: <<$ARGS[2]>> = func(''$menu_settings'', ''theme_customize_increment'', ''...
  scene.build();
}

function enterThemePresetsCopy(s: GameState, scene: SceneBuilder): void {
  ((s as any).custom_theme ?? {})['fname'] = ((s as any).theme ?? 0)?.['fname'];
  ((s as any).custom_theme ?? {})['fsize'] = ((s as any).theme ?? 0)?.['fsize'];
  ((s as any).custom_theme ?? {})['bcolor'] = ((s as any).theme ?? 0)?.['bcolor'];
  ((s as any).custom_theme ?? {})['fcolor'] = ((s as any).theme ?? 0)?.['fcolor'];
  ((s as any).custom_theme ?? {})['lcolor'] = ((s as any).theme ?? 0)?.['lcolor'];
  ((s as any).custom_theme ?? {})['table_bg'] = ((s as any).theme_hex ?? 0)?.['table_bg'];
  ((s as any).custom_theme ?? {})['table_bg_alt'] = ((s as any).theme_hex ?? 0)?.['table_bg_alt'];
  ((s as any).custom_theme ?? {})['is_dark'] = ((s as any).theme ?? 0)?.['is_dark'];
  ((s as any).custom_theme ?? {})['accent'] = ((s as any).theme_hex ?? 0)?.['accent'];
  ((s as any).custom_theme ?? {})['v_pos'] = ((s as any).theme_hex ?? 0)?.['v_pos'];
  ((s as any).custom_theme ?? {})['pos'] = ((s as any).theme_hex ?? 0)?.['pos'];
  ((s as any).custom_theme ?? {})['neutral'] = ((s as any).theme_hex ?? 0)?.['neutral'];
  ((s as any).custom_theme ?? {})['neg'] = ((s as any).theme_hex ?? 0)?.['neg'];
  ((s as any).custom_theme ?? {})['v_neg'] = ((s as any).theme_hex ?? 0)?.['v_neg'];
  ((s as any).custom_theme ?? {})['punk'] = ((s as any).theme_hex ?? 0)?.['punk'];
  ((s as any).custom_theme ?? {})['bimbo'] = ((s as any).theme_hex ?? 0)?.['bimbo'];
  ((s as any).custom_theme ?? {})['goth'] = ((s as any).theme_hex ?? 0)?.['goth'];
  ((s as any).custom_theme ?? {})['hypno'] = ((s as any).theme_hex ?? 0)?.['hypno'];
  qspCall(s, 'themes', 'set_theme', 'Custom', 'static');
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
  scene.build();
}

function enterThemeExport(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "$custom_theme['fname'] = '<<$custom_theme['fname']>>'"
  // TODO-QSP: "custom_theme['fsize'] = <<custom_theme['fsize']>>"
  // TODO-QSP: ""
  // TODO-QSP: "custom_theme['bcolor'] = <<custom_theme['bcolor']>>"
  // TODO-QSP: "custom_theme['fcolor'] = <<custom_theme['fcolor']>>"
  // TODO-QSP: "custom_theme['lcolor'] = <<custom_theme['lcolor']>>"
  // TODO-QSP: ""
  // TODO-QSP: "$custom_theme['table_bg']     = '<<$custom_theme['table_bg']>>'"
  // TODO-QSP: "$custom_theme['table_bg_alt'] = '<<$custom_theme['table_bg_alt']>>'"
  // TODO-QSP: ""
  // TODO-QSP: "custom_theme['is_dark'] = <<custom_theme['is_dark']>>"
  // TODO-QSP: ""
  // TODO-QSP: "$custom_theme['accent']  = '<<$custom_theme['accent']>>'"
  // TODO-QSP: "$custom_theme['v_pos']   = '<<$custom_theme['v_pos']>>'"
  // TODO-QSP: "$custom_theme['pos']     = '<<$custom_theme['pos']>>'"
  // TODO-QSP: "$custom_theme['neutral'] = '<<$custom_theme['neutral']>>'"
  // TODO-QSP: "$custom_theme['neg']     = '<<$custom_theme['neg']>>'"
  // TODO-QSP: "$custom_theme['v_neg']   = '<<$custom_theme['v_neg']>>'"
  // TODO-QSP: "$custom_theme['punk']    = '<<$custom_theme['punk']>>'"
  // TODO-QSP: "$custom_theme['bimbo']   = '<<$custom_theme['bimbo']>>'"
  // TODO-QSP: "$custom_theme['goth']    = '<<$custom_theme['goth']>>'"
  // TODO-QSP: "$custom_theme['hypno']   = '<<$custom_theme['hypno']>>'"
  scene.actions([
    { label: 'Return', goto: ['$menu_settings', 'theme_customize'] },
  ]);
  scene.build();
}

function enterThemePresets(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Return', goto: ['$menu_settings', 'theme_customize'] },
    { label: 'White', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'White'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Black', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Black'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Modern Grey', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Modern Grey'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Latte', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Latte'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Frappé', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Frappé'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Macchiato', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Macchiato'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Mocha', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Mocha'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Nord Light', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Nord Light'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Nord Dark', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Nord Dark'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Sol. Light', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Solarized Light'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Sol. Dark', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Solarized Dark'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'TN Light', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Tokyo Night Light'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Tokyo Night', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Tokyo Night'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'RP Dawn', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Rosé Pine Dawn'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'Rosé Pine', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Rosé Pine'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
    { label: 'RP Moon', handler: (st: GameState) => {
    // TODO-QSP: $theme['name'] = 'Rosé Pine Moon'
    // TODO-QSP: $theme['type'] = 'static'
    qspCall(st, 'themes', 'get_theme', 'indoors');
    qspCall(st, '$menu_settings', 'theme_presets_copy');
  } },
  ]);
  scene.build();
}

function enterStatus(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, '$menu_settings', 'settingtabs', 'Status Window');
  // TODO-QSP: *p '<center><h2>Status Window Settings</h2></center>'
  // TODO-QSP: *p $func('stat_display_menu', 'start')
  scene.build();
}

function enterFonts(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
  }
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
  }
  if (((s as any).locArgs?.[3] ?? 0) !== '') {
  }
  // TODO-QSP: $fontList[] = 'Default'
  // TODO-QSP: $fontList[] = 'Ariel'
  // TODO-QSP: $fontList[] = 'Times New Roman'
  // TODO-QSP: $fontList[] = 'Helvetica'
  // TODO-QSP: $fontList[] = 'Lucida'
  // TODO-QSP: $fontList[] = 'Tahoma'
  // TODO-QSP: $fontList[] = 'Verdana'
  // TODO-QSP: $fontList[] = 'Courier New'
  // TODO-QSP: $fontList[] = 'Courier'
  // TODO-QSP: $fontList[] = 'Georgia'
  // TODO-QSP: $fontList[] = 'Garamond'
  // TODO-QSP: $fontList[] = 'Bookman'
  // TODO-QSP: $fontList[] = 'Times'
  // TODO-QSP: $fontList[] = 'Comic Sans MS'
  // TODO-QSP: $fontList[] = 'Trebuchet MS'
  // TODO-QSP: $fontList[] = 'Impact'
  // TODO-QSP: $fontList[] = 'BankGothic'
  // TODO-QSP: $fontColor[] = 'Theme: Foreground'
  // TODO-QSP: $fontColor[] = 'Theme: Accent'
  // TODO-QSP: $fontColor[] = 'Theme: 1'
  // TODO-QSP: $fontColor[] = 'Theme: 2'
  // TODO-QSP: $fontColor[] = 'Theme: 3'
  // TODO-QSP: $fontColor[] = 'Theme: 4'
  // TODO-QSP: $fontColor[] = 'Theme: 5'
  // TODO-QSP: $fontColor[] = 'Theme: 6'
  // TODO-QSP: $fontColor[] = 'Theme: 7'
  // TODO-QSP: $fontColor[] = 'Theme: 8'
  // TODO-QSP: $fontColor[] = 'aqua'
  // TODO-QSP: $fontColor[] = 'black'
  // TODO-QSP: $fontColor[] = 'blue'
  // TODO-QSP: $fontColor[] = 'magenta'
  // TODO-QSP: $fontColor[] = 'green'
  // TODO-QSP: $fontColor[] = 'gray'
  // TODO-QSP: $fontColor[] = 'lime'
  // TODO-QSP: $fontColor[] = 'maroon'
  // TODO-QSP: $fontColor[] = 'navy'
  // TODO-QSP: $fontColor[] = 'olive'
  // TODO-QSP: $fontColor[] = 'purple'
  // TODO-QSP: $fontColor[] = 'red'
  // TODO-QSP: $fontColor[] = 'silver'
  // TODO-QSP: $fontColor[] = 'teal'
  // TODO-QSP: $fontColor[] = 'white'
  // TODO-QSP: $fontColor[] = 'yellow'
  // TODO-QSP: $fontMod[] = 'Italic'
  // TODO-QSP: $fontMod[] = 'Bold'
  // TODO-QSP: $fontMod[] = 'Underline'
  // TODO-QSP: $fontMod[] = 'Bold + Italic'
  // TODO-QSP: $fontMod[] = 'Bold + Underline'
  // TODO-QSP: $fontMod[] = 'Italic + Underline'
  // TODO-QSP: $fontMod[] = 'Bold + Italic + Underline'
  // TODO-QSP: $fontMod[] = 'None'
  if (((s as any).tempColor ?? 0) === 'Theme: Foreground') {
  } else {
    if (((s as any).tempColor ?? 0) === 'Theme: Accent') {
    } else {
      if (((s as any).tempColor ?? 0) === 'Theme: 1') {
      } else {
        if (((s as any).tempColor ?? 0) === 'Theme: 2') {
        } else {
          if (((s as any).tempColor ?? 0) === 'Theme: 3') {
          } else {
            if (((s as any).tempColor ?? 0) === 'Theme: 4') {
            } else {
              if (((s as any).tempColor ?? 0) === 'Theme: 5') {
              } else {
                if (((s as any).tempColor ?? 0) === 'Theme: 6') {
                } else {
                  if (((s as any).tempColor ?? 0) === 'Theme: 7') {
                  } else {
                    if (((s as any).tempColor ?? 0) === 'Theme: 8') {
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
  if (((s as any).tempModifier ?? 0) === 'Italic') {
  } else {
    if (((s as any).tempModifier ?? 0) === 'Bold') {
    } else {
      if (((s as any).tempModifier ?? 0) === 'Underline') {
      } else {
        if (((s as any).tempModifier ?? 0) === 'Bold + Italic') {
        } else {
          if (((s as any).tempModifier ?? 0) === 'Bold + Underline') {
          } else {
            if (((s as any).tempModifier ?? 0) === 'Italic + Underline') {
            } else {
              if (((s as any).tempModifier ?? 0) === 'Bold + Italic + Underline') {
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).tempFontActual ?? 0) === ''  &&  ((s as any).tempColorActual ?? 0) === '') {
  }
  // TODO-QSP: dynamic '<<$temp_args2>> = $tempOpenPhrase'
  // TODO-QSP: dynamic '<<$temp_args3>> = $tempClosePhrase'
  // TODO-QSP: $tempOpenPhrase + 'The quick brown fox jumps over the lazy dog. 1234567890 ₽' + $tempClosePhrase
  // TODO-QSP: $menu_span + 'Current font family:</span><a href="exec: font_vars[$temp_args1 + ''_font''] = (font_v...
  // TODO-QSP: $menu_span + 'Current font color:</span><a href="exec: font_vars[$temp_args1 + ''_color''] = (font_v...
  // TODO-QSP: $menu_span + 'Current font modifier:</span><a href="exec: font_vars[$temp_args1 + ''_mod''] = (font_...
  return;
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'temp_loc_font', 'temp_loc_arg_font');
  } },
  ]);
  scene.build();
}

function enterMods(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).settingmode ?? 0))) {
  }
  if (((s as any).settingmode ?? 0) !== 2) {
    qspCall(s, '$menu_settings', 'settingtabs', 'Mods');
  }
  if (((s as any).settingmode ?? 0) === 2) {
    scene.actions([
      { label: '<<$temp_act_pre>>Return to game start<<$temp_act_post>>', goto: ['start', 'start'] },
    ]);
  } else {
    if (((s as any).settingmode ?? 0) === 1) {
      scene.actions([
        { label: '<<$temp_act_pre>>Return to character creation<<$temp_act_post>>', goto: ['begin', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: '<<$temp_act_pre>>Exit the menu<<$temp_act_post>>', handler: (st: GameState) => {
    qspCall(s, '$menu_settings', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
      ]);
    }
  }
  scene.text('<center><h2>Mods</h2></center>');
  scene.text('<center>');
  scene.text('<b>WARNING</b>: Game slowdown may occur when installing too many mods, or mods with bad structure.');
  scene.text('You may find information on available Mods as well as instructions on installing Mods on this thread:');
  scene.text('<a href="https://tfgames.site/phpbb3/viewtopic.php?f=70&t=11793&sid=08ee13168a1ea71fa2348f20815b8380">https://tfgames.site/phpbb3/viewtopic.php?f=70&t=11793&sid=08ee13168a1ea71fa2348f20815b8380</a>');
  if (Object.keys((s as any).mod_name ?? {}).length <= 0) {
    scene.text('<br>You have no Mods activated.');
  } else {
    qspCall(s, '$menu_settings', 'display_mod_table');
    scene.actions([
      { label: '<<$temp_act_pre>>Update all mods<<$temp_act_post>>', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'update_all_mods');
  } },
      { label: '<<$temp_act_pre>>Disable all mods<<$temp_act_post>>', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'delete_all_mods');
  } },
    ]);
  }
  scene.text('</center>');
  scene.actions([
    { label: '<<$temp_act_pre>>Install new mod<<$temp_act_post>>', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'install_new_mod');
  } },
  ]);
  scene.build();
}

function enterDisplayModTable(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<th>id</th>'
  // TODO-QSP: $temp_table +=    '<th>Name</th>'
  // TODO-QSP: $temp_table +=    '<th>Version</th>'
  // TODO-QSP: $temp_table +=    '<th>Author</th>'
  // TODO-QSP: $temp_table +=    '<th>Description</th>'
  // TODO-QSP: $temp_table +=    '<th>Options</th>'
  // TODO-QSP: $temp_table +=    '<th>Delete</th>'
  // TODO-QSP: $temp_table +=  '</tr>'
  (s as any).mod_i = 0;
  // TODO-QSP: :mod_alllist
  if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] === '') {
    // TODO-QSP: dynamic text: ERROR loading mod id <<mod_i>>, no mod name available
    scene.text(`ERROR loading mod id ${((s as any).mod_i ?? 0)}, no mod name available`);
  } else {
    // TODO-QSP: $temp_table +=  '<tr>'
    // TODO-QSP: $temp_table +=    '<td><<mod_i>></td>'
    // TODO-QSP: $temp_table +=    '<td><<$mod_name[mod_i]>></td>'
    // TODO-QSP: $temp_table +=    '<td><<val($mod_version[mod_i])/10000>>.<<(val($mod_version[mod_i]) mod 10000)/100...
    // TODO-QSP: $temp_table +=    '<td><<$mod_author[mod_i]>></td>'
    // TODO-QSP: $temp_table +=    '<td><a href="exec:gs ''mod_<<$mod_name[mod_i]>>_readme''"><img src="images/system...
    // TODO-QSP: $temp_table +=    '<td>'+iif($mod_opt[mod_i] <> '', '<a href="exec:gs ''mod_<<$mod_name[mod_i]>>_opt...
    // TODO-QSP: $temp_table +=    '<td><a href="exec:gs ''$menu_settings'', ''delete_mod'', <<mod_i>>">Delete</a></t...
    // TODO-QSP: $temp_table +=  '</tr>'
  }
  (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
  if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
    // TODO-QSP: jump 'mod_alllist'
  }
  // TODO-QSP: $temp_table += '</table>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table ?? 0)}`);
  scene.build();
}

function enterInstallNewMod(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'add_mod', ((s as any).mod_temp ?? 0));
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
  scene.build();
}

function enterDeleteMod(s: GameState, scene: SceneBuilder): void {
  if (((s as any).input ?? 0)('Are you sure you want to delete ' + ((s as any).mod_name ?? 0)[((s as any).locArgs?.[1] ?? 0)] + '? (type anything to confirm)') !== '') {
    // TODO-QSP: gs 'mod_system', 'delete_mod', ARGS[1]
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
  }
  scene.build();
}

function enterUpdateAllMods(s: GameState, scene: SceneBuilder): void {
  if (((s as any).input ?? 0)('Are you sure you want to refresh all mods? (type anything to confirm)') === '') {
    return;
  }
  qspCall(s, 'mod_system', 'update_all_mods');
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
  scene.build();
}

function enterDeleteAllMods(s: GameState, scene: SceneBuilder): void {
  if (((s as any).input ?? 0)('Are you sure? ALL % will be disabled!<br>please input <b>qqq</b> to confirm') === 'qqq') {
    qspCall(s, 'mod_system', 'delete_all_mods');
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_settings'); } }]);
  }
  scene.build();
}

function enterTheme(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_settings', 'settingtabs', 'Phone Theme');
  scene.text('<center><h2>Phone Theme Menu</h2></center>');
  // TODO-QSP: $settings['table_start']
  if ((!((s as any).pcs_phonetheme ?? 0))) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 1) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 2) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 3) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 4) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 5) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 6) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 7) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 8) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 9) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 10) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 11) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 12) {
  }
  if (((s as any).pcs_phonetheme ?? 0) === 13) {
  }
  // TODO-QSP: dynamic text: Current theme: <b><<$phoneNameTemp>></b>
  scene.text(`Current theme: <b>${((s as any).phoneNameTemp ?? 0)}</b>`);
  scene.text('Choose from the available themes:');
  (s as any).i = 0;
  // TODO-QSP: :phonethemeloop
  if (((s as any).phonetheme ?? 0)?.[String((s as any).i ?? 0)] === 1) {
    // TODO-QSP: $temp_table += '<td align="center" valign="top"><a href="exec: pcs_phonetheme = <<i>> & gs ''telefon...
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) < Object.keys((s as any).phonetheme ?? {}).length) {
    if (((s as any).i ?? 0) % 4 === 0) {
      // TODO-QSP: $temp_table += '</tr><tr>'
    }
    // TODO-QSP: jump 'phonethemeloop'
  }
  // TODO-QSP: $temp_table += '</tr></table>'
  // TODO-QSP: $settings['table_end']
  scene.build();
}

function enterExplanationStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_explanation ?? 0) === '') {
    qspCall(s, '$menu_settings', 'settingtabs', 'Information');
  } else {
    qspCall(s, '$menu_settings', 'explanation_start_exit');
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><h2>Glossary</h2></center>');
  // TODO-QSP: $settings['table_start']
  // TODO-QSP: dynamic text: Here we want to explain the different stats <<$pcs_firstname>> has, and give oth...
  scene.text(`Here we want to explain the different stats ${((s as any).pcs_firstname ?? 0)} has, and give other useful information about the play mechanics.`);
  scene.text('The glossary is divided over several pages explaining different aspects of the character stats. For a new player we recommend going through them in the order presented, but if you need some specific information, just go to the page containing it.');
  scene.text('<a href="exec:gt \'$menu_settings\', \'explanation_icons\'">The first page</a> includes the basic information and explanations of the different icons that appear in the stat display.');
  // TODO-QSP: dynamic text: <a href="exec:gt '$menu_settings', 'explanation_attributes'">The second page</a>...
  scene.text(`<a href="exec:gt '$menu_settings', 'explanation_attributes'">The second page</a> includes information about the basic attributes ${((s as any).pcs_firstname ?? 0)} has.`);
  // TODO-QSP: dynamic text: <a href="exec:gt '$menu_settings', 'explanation_skill'">The third page</a> inclu...
  scene.text(`<a href="exec:gt '$menu_settings', 'explanation_skill'">The third page</a> includes information about the skills ${((s as any).pcs_firstname ?? 0)} has.`);
  // TODO-QSP: dynamic text: <a href="exec:gt '$menu_settings', 'explanation_status'">The fourth page</a> inc...
  scene.text(`<a href="exec:gt '$menu_settings', 'explanation_status'">The fourth page</a> includes information about the different status effects like mood, hunger, and willpower ${((s as any).pcs_firstname ?? 0)} has.`);
  scene.text('<a href="exec:gt \'$menu_settings\', \'explanation_archetypes\'">The fifth page</a> includes information about the archetype system, its effects, and withdrawal.');
  // TODO-QSP: $settings['table_end']
  if (((s as any).stat_explanation ?? 0) === '') {
    qspCall(s, 'saveg', '');
    qspCall(s, 'addbuilddate', '');
    scene.text('<center><h2>About</h2></center>');
    // TODO-QSP: $settings['table_start']
    // TODO-QSP: dynamic text: <h4><center>Girl Life version <<version_major+"."+version_minor+"."+version_revi...
    scene.text(`<h4><center>Girl Life version ${((s as any).version_major ?? 0)+"."+((s as any).version_minor ?? 0)+"."+((s as any).version_revision ?? 0)+"."+((s as any).version_patch ?? 0)+((((s as any).git_hash ?? 0) !== "") ? ('<br>"+$git_hash+" (dev build)') : (''))}<br>built on ${((s as any).builddate ?? 0)}</center></h4>`);
    // TODO-QSP: $settings['table_end']
  }
  scene.build();
}

function enterExplanationIcons(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_explanation ?? 0) === '') {
    qspCall(s, '$menu_settings', 'settingtabs', 'Glossary');
  }
  qspCall(s, 'stat', '');
  scene.text('<center>Introduction and Icons</center>');
  scene.text('We will go through the stat display, which is the window that your QSP-player probably calls additional description. ');
  // TODO-QSP: dynamic text: It starts with an image of the weather ' + $weatherImage + ' followed by the cur...
  scene.text('It starts with an image of the weather \' + $weatherImage + \' followed by the current temperature in Celsius. If you click on the picture you will get a pop-up with a more detailed description.');
  scene.text('Below the weather image is a line that gives the current time and date, maybe followed by a line saying if you have vacation and how long time until the vacation ends.');
  scene.img('images/system/icons/menu/icon_character.png');
  // TODO-QSP: dynamic text: The Character description have ' + iif($start_type['magic'] <> 'nomagic' , '6', ...
  scene.text('The Character description have \' + iif($start_type[\'magic\'] <> \'nomagic\' , \'6\', \'7\') + \' different tabs. The first tab "Character" gives a general overview of your character\'s looks and physique. The second tab is "Skills". We will explain skills later in this introduction.');
  // TODO-QSP: dynamic text: The third tab "Statistics" lists several achievements that <<$pcs_firstname>> ha...
  scene.text(`The third tab "Statistics" lists several achievements that ${((s as any).pcs_firstname ?? 0)} has made in the game. The fourth tab "Pain" has a detailed description of any pain ${((s as any).pcs_firstname ?? 0)} is experiencing.`);
  // TODO-QSP: 'The fifth tab, "Traits" lists several traits <<$pcs_firstname>> has or can obtain, as well as how t...
  scene.img('images/system/icons/menu/icon_lookself.png');
  if (((s as any).bag ?? 0) > 0) {
    scene.img('images/system/icons/menu/icon_purse.png');
  }
  scene.img(`images/system/icons/menu/${((((s as any).telefon ?? 0)?.['UnreadSMS']===0) ? ('icon_phone.png') : ('icon_phone_sms.gif'))}`);
  scene.img(`images/system/icons/menu/${((s as any).journalIcon ?? 0)}`);
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    scene.text('  The first tab there is very important, since you can use it to cast spells once you learn them.');
  }
  scene.text('  This includes a tab for a description of where you live and the possibility to change this is you have several options. A tab with information about your work.');
  scene.text('  The "Quest" tab contains hints on how to start and proceed with several of the quests in the game. Not all quests are included yet, but this a good place to look if you want to know some of the things that are possible, and the first place you should look if you feel stuck in a quest.');
  // TODO-QSP: dynamic text:   The relations tab has information about how other NPC's see <<$pcs_firstname>>...
  scene.text(`  The relations tab has information about how other NPC's see ${((s as any).pcs_firstname ?? 0)}. The value goes from 0 to 100. If it is below 20 it means they dislike or even hate you. Between 20 and 60 is generally neutral. Above 60 the NPC considers ${((s as any).pcs_firstname ?? 0)} a friend and above 80 is when they might fall in love with a character.`);
  scene.text('  But each character is different, and some might never fall in love with the character and for some NPC\'s it might not be enough to just get them to like you.');
  // TODO-QSP: '  The game information tab includes a lot of information about the world. ' + iif($start_type['loc'...
  scene.img('images/system/icons/menu/icon_menu.png');
  if ((!((s as any).bag ?? 0))) {
    // TODO-QSP: dynamic text: If <<$pcs_firstname>> owned a purse there would also be an icon for it in the li...
    scene.text(`If ${((s as any).pcs_firstname ?? 0)} owned a purse there would also be an icon for it in the line. Which can be used to interact with the things you are caring around. A purse can be bought in a shop, or maybe ${((s as any).pcs_firstname ?? 0)}'s grandparents have one that can be used lying among all their stuff.`);
  }
  // TODO-QSP: dynamic text: Below these Icons is a line that informs you how much money <<$pcs_firstname>> h...
  scene.text(`Below these Icons is a line that informs you how much money ${((s as any).pcs_firstname ?? 0)} has. But one them and on their bank account.`);
  scene.text('Next comes the Icon window, there will be different icons that inform you about the status of your character and things they have to do. These icons will display a text when you hover your mouse over them, and mist can be clicked for more information or to remedy the problem they warn about.');
  scene.img('images/system/icons/status/vagina.png');
  // TODO-QSP: dynamic text: Then there will be a line about things you have to do if you have any. The next ...
  scene.text(`Then there will be a line about things you have to do if you have any. The next line is mostly about clothes and below this can be a line with information about ${((s as any).pcs_firstname ?? 0)}'s state if they are drunk or on drugs.`);
  scene.text('Below the icons is a line where you can turn on and off information in the status display. The "text" will display the same information as the icons, but in text, and the "images" will add images of the character\'s clothes and body.');
  scene.text('We will wait with the discussion of the "status" part till later. for now make sure that the "attributes" tab is turned on, since this is the one we will explain next.');
  if (((s as any).stat_explanation ?? 0) === '') {
    scene.actions([
      { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  } else {
    qspCall(s, '$menu_settings', 'explanation_start_exit');
  }
  scene.actions([
    { label: 'Continue with the explanation of attributes', goto: ['$menu_settings', 'explanation_attributes'] },
    { label: 'Go back to the Glossary overview', goto: ['$menu_settings', 'explanation_start'] },
    { label: 'Jump to the explanation of skills', goto: ['$menu_settings', 'explanation_skill'] },
    { label: 'Jump to the explanation of status effects', goto: ['$menu_settings', 'explanation_status'] },
    { label: 'Jump to the explanation of archetypes', goto: ['$menu_settings', 'explanation_archetypes'] },
  ]);
  scene.build();
}

function enterExplanationAttributes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_explanation ?? 0) === '') {
    qspCall(s, '$menu_settings', 'settingtabs', 'Glossary');
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Attributes</h2></center>');
  // TODO-QSP: '<table border="0"><tr><td colspan=2>Attributes are the basic stat of <<$pcs_firstname>>. They with ...
  qspCall(s, '$menu_settings', 'explanation_build_attr');
  scene.text('<center>These are all the attributes. So next up are the skills. Make sure you have them open in the stat display.</center>');
  if (((s as any).stat_explanation ?? 0) === '') {
    scene.actions([
      { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  } else {
    qspCall(s, '$menu_settings', 'explanation_start_exit');
  }
  scene.actions([
    { label: 'Continue with the explanation of skills', goto: ['$menu_settings', 'explanation_skill'] },
    { label: 'Go back to the Glossary overview', goto: ['$menu_settings', 'explanation_start'] },
    { label: 'Jump back to the explanation of icons', goto: ['$menu_settings', 'explanation_icons'] },
    { label: 'Jump to the explanation of status effects', goto: ['$menu_settings', 'explanation_status'] },
    { label: 'Jump to the explanation of archetypes', goto: ['$menu_settings', 'explanation_archetypes'] },
  ]);
  scene.build();
}

function enterExplanationSkill(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_explanation ?? 0) === '') {
    qspCall(s, '$menu_settings', 'settingtabs', 'Glossary');
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Skills</h2></center>');
  // TODO-QSP: '<table border="0"><tr><td colspan="2">In the stat display, skills are grouped into different catego...
  qspCall(s, '$menu_settings', 'explanation_build_skill');
  // TODO-QSP: dynamic text: <center>These are all the skills. Next we will explain the different statuses <<...
  scene.text(`<center>These are all the skills. Next we will explain the different statuses ${((s as any).pcs_firstname ?? 0)} can have. So move up in the stat display and make sure that status is shown.</center>`);
  if (((s as any).stat_explanation ?? 0) === '') {
    scene.actions([
      { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  } else {
    qspCall(s, '$menu_settings', 'explanation_start_exit');
  }
  scene.actions([
    { label: 'Continue with the explanation of status bars', goto: ['$menu_settings', 'explanation_status'] },
    { label: 'Go back to the Glossary overview', goto: ['$menu_settings', 'explanation_start'] },
    { label: 'Jump back to the explanation of icons', goto: ['$menu_settings', 'explanation_icons'] },
    { label: 'Jump back to the explanation of attributes', goto: ['$menu_settings', 'explanation_attributes'] },
    { label: 'Jump to the explanation of archetypes', goto: ['$menu_settings', 'explanation_archetypes'] },
  ]);
  scene.build();
}

function enterExplanationStatus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_explanation ?? 0) === '') {
    qspCall(s, '$menu_settings', 'settingtabs', 'Glossary');
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Status Bars</h2></center>');
  // TODO-QSP: '<table border="0"><tr><td colspan="2">The status bars represent different parts of the player''s ph...
  qspCall(s, '$menu_settings', 'explanation_build_stat');
  // TODO-QSP: dynamic text: <center>This ends the basic description of <<$pcs_firstname>>'s stat. Next, we'l...
  scene.text(`<center>This ends the basic description of ${((s as any).pcs_firstname ?? 0)}'s stat. Next, we'll cover the archetype system.</center>`);
  if (((s as any).stat_explanation ?? 0) === '') {
    scene.actions([
      { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  } else {
    qspCall(s, '$menu_settings', 'explanation_start_exit');
  }
  scene.actions([
    { label: 'Continue with the explanation of archetypes', goto: ['$menu_settings', 'explanation_archetypes'] },
    { label: 'Go back to the Glossary overview', goto: ['$menu_settings', 'explanation_start'] },
    { label: 'Jump back to the explanation of icons', goto: ['$menu_settings', 'explanation_icons'] },
    { label: 'Jump back to the explanation of attributes', goto: ['$menu_settings', 'explanation_attributes'] },
    { label: 'Jump back to the explanation of skills', goto: ['$menu_settings', 'explanation_skill'] },
  ]);
  scene.build();
}

function enterExplanationArchetypes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_explanation ?? 0) === '') {
    qspCall(s, '$menu_settings', 'settingtabs', 'Glossary');
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Archetypes</h2></center>');
  // TODO-QSP: '<table border="0"><tr><td colspan=2>Archetypes are five broad personas <<$pcs_firstname>> can lean ...
  qspCall(s, '$menu_settings', 'explanation_build_archetypes');
  scene.text('<center><h3>Withdrawal</h3></center>');
  // TODO-QSP: '<table border="0"><tr><td colspan=2>The game tracks a rolling 7-day average of your active archetyp...
  scene.text('<center>This ends the explanation of archetypes.</center>');
  if (((s as any).stat_explanation ?? 0) === '') {
    scene.actions([
      { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_settings', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  } else {
    qspCall(s, '$menu_settings', 'explanation_start_exit');
  }
  scene.actions([
    { label: 'Go back to the Glossary overview', goto: ['$menu_settings', 'explanation_start'] },
    { label: 'Jump back to the explanation of icons', goto: ['$menu_settings', 'explanation_icons'] },
    { label: 'Jump back to the explanation of attributes', goto: ['$menu_settings', 'explanation_attributes'] },
    { label: 'Jump back to the explanation of skills', goto: ['$menu_settings', 'explanation_skill'] },
    { label: 'Jump back to the explanation of status effects', goto: ['$menu_settings', 'explanation_status'] },
  ]);
  scene.build();
}

function enterExplanationStartExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_explanation ?? 0) === 'sg') {
    scene.actions([
      { label: 'Start playing', handler: (st: GameState) => {
    (s as any).music_loop = 0;
    if ((!((s as any).start_location ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['intro_sg', 'intro_pavlovsk'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_sg', 'intro_gadukino'] }]);
    }
  } },
      { label: 'Restart the character selection', handler: (st: GameState) => {
    scene.text('This will reset everything and take you back to the beginning. Are you sure you want to start again?');
    scene.actions([
      { label: 'No', goto: ['intro_sg', 'four'] },
      { label: 'Yes', handler: (st: GameState) => {
    // TODO-QSP: killall
  }, goto: ['start', ''] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).stat_explanation ?? 0) === 'sg_m') {
      scene.actions([
        { label: '<center><b>Begin!</b></center>', handler: (st: GameState) => {
    (s as any).music_loop = 0;
    if ((!((s as any).start_location ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['intro_sg', 'intro_pavlovsk'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_sg', 'intro_gadukino'] }]);
    }
  } },
      ]);
    } else {
      if (((s as any).stat_explanation ?? 0) === 'sg_tg') {
        scene.actions([
          { label: 'Start your new life', handler: (st: GameState) => {
    (s as any).music_loop = 0;
    if ((!((s as any).start_location ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['intro_sg', 'intro_pavlovsk'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_sg', 'intro_gadukino'] }]);
    }
  } },
        ]);
      } else {
        if (((s as any).stat_explanation ?? 0) === 'city') {
          scene.actions([
            { label: 'Start the game', goto: ['korr', ''] },
          ]);
        } else {
          if (((s as any).stat_explanation ?? 0) === 'uni') {
            scene.actions([
              { label: 'Start the game', goto: ['uni_grounds', ''] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterExplanationBuildAttr(s: GameState, scene: SceneBuilder): void {
  if (((s as any).explanation_table ?? 0)?.['attr_version'] < 1) {
    ((s as any).explanation_table ?? {})['attr_version'] = 1;
    ((s as any).explanation_table ?? {})['attr'] = '<table border="0" cellpadding="10" cellspacing="10">';
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><th align="center">Attributes</th><th align="center">Description</th></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Inhibition</b></td><td>Reflects how much ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' cares about being seen naked. It indicates whether or not <<$pcs_firstname>> is bothered by this. It has nothing to do with <<$pcs_firstname>>\'s attitude towards sex. <<$pcs_firstname>> can have 0 inhibition and still be completely asexual and even disgusted by sex. Just to repeat, it is not a measure of <<$pcs_firstname>>\'s corruption. This attribute is a little special since it is inverted: 0 experience points will give an inhibition of 100, while maximum experience points result in an inhibition of 0. Experience points are earned by doing things <<$pcs_firstname>> normally wouldn\'t do. For example, if inhibition is above a certain threshold, <<$pcs_firstname>> won\'t sunbathe naked. If it is between two thresholds, experience points will be earned by sunbathing naked. If inhibition is below that value, no experience points will be earned for sunbathing naked. The most common way to earn experience is by wearing clothes your character considers risqué but not too risqué. Whether your character considers clothes risqué or not can be seen in the wardrobe when dressing.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Strength</b></td><td>Describes how strong ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' is. It is used for many sports, and to determine how hard <<$pcs_firstname>> hits. Getting experience point for it is mainly done by doing different kinds of sports or exercises. This attribute is special in that through normal means it can only be raised to 100. But with doing dedicated weightlifting training (which will say so) you can increase it to 150, and if you take steroids while doing the weightlifting training it can be raised to 200. This does have some negative impact on appearance which will be explained when that attribute is discussed below.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Agility</b></td><td>Describes how agile ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' is. It is used in sports and fights. The primary way to gain experience in agility is by doing sports and other exercises.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Endurance</b></td><td>Is the physical resistance of ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + '. It is used in sports, fights, and in determining <<$pcs_firstname>>\'s stamina, which will be explained later. The primary way to gain experience in endurance is by doing sports and other exercises.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Intelligence</b></td><td>Is the overall stat that tells how good ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' is at solving mental problems and learning academic disciplines. It is also used as the knowledge of the player if there is not a special skill that covers it better. It is especially important for getting good grades in school or at the university. There are many ways to earn experience for intelligence, but studying is the main one. This includes both studying at home or paying attention in class if <<$pcs_firstname>> goes to school or studies at the university.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Spirit</b></td><td>Is the mental resilience of your character. It is used when you try to resist somebody forcing ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' to do something; succeeding in this will also reward experience for spirit. This will be explained in more detail when willpower is explained. Another way to gain experience for spirit is by doing yoga exercises.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Reaction</b></td><td>Describes how quick ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' is to react to things happening. It is very important in fights where it determines your initiative and thereby how quick you get a turn to act. It is also used in some sports. You gain experience in reaction by fighting, doing sports and other exercises.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Charisma</b></td><td>Affects how people experience being around ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' and talking to them. Higher charisma makes better outcomes of social interactions more likely. Experience for charisma is mainly earned by talking to other people and being active in social settings.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Perception</b></td><td>Is ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + '\'s ability to notice something. It is not an attribute that is used very much in the game. Gaining experience is also by noticing stuff happening, and there are currently not many places to do that.</td></tr>');
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Magic</b></td><td>This is the stat that determines which spells you can learn, how powerful your spells are and how much mana you have.\'+iif(tatiana_teach_escalation > 0 , \' Your experience point in Magic is equal to the number or orgasm you have had.\', \' How to earn experience for magic will be revealed as the story unfolds.\')+\'</td></tr>');
    }
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('<tr><td><b>Appearance</b></td><td>Is how the average person perceives ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + '\'s look. This attribute ranges from 1 to 200 and is not gained by earning experience points. Instead, it is composed of many factors, with the most important being your BMI. To achieve the highest value, keep your BMI in the health range of 19 to 24. Your physical attributes, Agility, Endurance, and Strength, also play a role. For all of them, 100 is the ideal value, so if your strength goes above 100 because of weightlifting training, it will detract from your appearance. Additionally, skincare is important. The nicer your skin, the better, so take care of it. Other factors like bad teeth, ugly glasses, and so on have a minor effect. The clothes you wear modify this attribute, and wearing makeup also improves your appearance. You don\'t need to maximize appearance to experience the content of the game. With an appearance of 150, almost everybody will think your character is so hot that they want to be involved with her, and nothing is gated if you have 165. Of course, you might still receive better reactions with a higher appearance. It should also be noted that many NPCs have their own preferences for what makes a girl hot, so your appearance might be modified depending on how well you match their preferences.</td></tr>');
    ((s as any).explanation_table ?? {})['attr'] = (((s as any).explanation_table ?? {})['attr'] ?? 0) + ('</table>');
  }
  scene.build();
}

function enterExplanationBuildSkill(s: GameState, scene: SceneBuilder): void {
  if (((s as any).explanation_table ?? 0)?.['skill_version'] < 1) {
    ((s as any).explanation_table ?? {})['skill_version'] = 1;
    ((s as any).explanation_table ?? {})['skill'] = '<table border="0" cellpadding="10" cellspacing="10">';
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><th align="left">Skill</th><th align="center">Description</th></tr>');
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Spell Casting</b></td><td>Associated attributes are Intelligence and Reaction.</td></tr>');
    }
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>People Skill</b></td><td>Associated attributes are Charisma, Perception, and Reaction. This skill involves understanding and improving interaction with others, hence affecting how quickly people warm up to ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' and make negative interactions less severe. At 100 in People Skill, relationship points with NPCs are gained at twice the rate compared to the value at 0 and lost at half the rate.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Persuasion</b></td><td>Associated attributes are Charisma and Perception. This skill affects how adept ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' is at convincing people to do things. This will be explained in more detail when willpower is discussed.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Observation</b></td><td>Associated attributes are Intelligence, Perception, and Reaction. This skill is not used much in the game as it is right now.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Jabs</b></td><td>Associated attributes are Agility and Strength, with Agility counting twice as much as Strength.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Power Strikes</b></td><td>Associated attributes are Agility and Strength, with Strength counting twice as much as Agility.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Kicks</b></td><td>Associated attributes are Agility and Strength, with Strength counting three times as much as Agility.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Defense</b></td><td>Associated attributes are Agility, Reaction, and Strength.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Running</b></td><td>Associated attributes are Agility, Endurance, and Strength, with Strength and Agility counting twice as much as Endurance.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Volleyball</b></td><td>Associated attributes are Agility, Endurance, Reaction, and Strength, with Agility counting twice as much as each of the others.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Football</b></td><td>Associated attributes are Agility, Endurance, and Strength.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Basketball</b></td><td>Associated attributes are Agility, Endurance, and Strength.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Wrestling</b></td><td>Associated attributes are Agility, Endurance, and Strength, with Strength counting twice as much as each of the others.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Marksmanship</b></td><td>Associated attributes are Agility and Reaction.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Bushcraft</b></td><td>Associated attributes are Agility, Intelligence, and Strength.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Chess</b></td><td>Associated attribute is Intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Ice Skating</b></td><td>Associated attributes are Agility and Strength, with Agility counting twice as much as Strength.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Gaming</b></td><td>Associated attributes are Intelligence and Reaction, with Intelligence counting twice as much as Reaction.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Pool</b></td><td>Associated attribute is Intelligence, but experience in pool weights much higher than intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Makeup Skill</b></td><td>Associated attributes are Agility and Intelligence. This skill determines how much applying makeup enhances appearance, with a range from -5 with 0 in makeup skill to 20 with 100 in makeup skill.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Modern Dancing</b></td><td>Associated attributes are Agility, Endurance, and Reaction.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Erotic Dancing</b></td><td>Associated attributes are Agility, Charisma, and Endurance.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Pole Dancing</b></td><td>Associated attributes are Agility, Charisma, and Strength.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Cheerleading</b></td><td>Associated attributes are Agility, Endurance, and Reaction.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Modeling</b></td><td>Associated attributes are Agility and Endurance, but the experience in the skill is weighted higher than the attributes.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Heels</b></td><td>This skill has no associated attributes. It determines if it is painful to wear a given high-heeled shoe or not. Experience is gained by wearing high-heeled shoes.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Singing</b></td><td>Associated attributes are Charisma and Intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Instrumental Music</b></td><td>Associated attributes are Agility and Intelligence, with Agility counting twice as much as Intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Photography</b></td><td>Associated attributes are Intelligence and Reaction, with Intelligence counting twice as much as Reaction.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Artistic Skills</b></td><td>Associated attributes are Agility, Intelligence, and Reaction.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Performance</b></td><td>Associated attributes are Charisma and Perception.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Music Production</b></td><td>Associated attributes are Intelligence, Perception, and Spirit.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Cleaning Skill</b></td><td>Associated attributes are Endurance and Intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Computer Skill</b></td><td>Associated attribute is Intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Hacking</b></td><td>Associated attributes are Intelligence and Reaction.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Handy-Work</b></td><td>Associated attributes are Agility and Intelligence, with Agility counting twice as much as Intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Tailoring</b></td><td>Associated attributes are Agility and Intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Serving</b></td><td>Associated attributes are Endurance and Intelligence.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('<tr><td><b>Medicine</b></td><td>Associated attributes are Intelligence, Perception, and Reaction.</td></tr>');
    ((s as any).explanation_table ?? {})['skill'] = (((s as any).explanation_table ?? {})['skill'] ?? 0) + ('</table>');
  }
  scene.build();
}

function enterExplanationBuildStat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).explanation_table ?? 0)?.['stat_version'] < 2) {
    ((s as any).explanation_table ?? {})['stat_version'] = 2;
    ((s as any).explanation_table ?? {})['status'] = '<table border="0" cellpadding="10" cellspacing="10">';
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><th align="left">Status Bar</th><th align="left">Description</th></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Arousal</b></td><td>This measures how horny ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' is. It increases as the character experiences arousing stimuli, like watching porn or being touched in a sexual way. The bar will appear full when arousal is at 100, at which point it is very easy for the character to orgasm with even slight stimulation. However, 100 is not the maximum; it can go higher. Arousal is associated with orgasm, but arousal alone cannot trigger one; external stimuli are necessary. It decreases over time, and if <<$pcs_firstname>> has an orgasm, it generally returns to 0. However, it\'s possible for <<$pcs_firstname>> to enter a state where multiple orgasms are possible. In this case, orgasms only reduce arousal, and it will not return to 0 until some time has passed without new stimulation. Some actions, like masturbation, require a minimal level of arousal, but it is not very common for it to be a requirement for agreeing to sex. Being very horny does affect the character\'s ability to say no to sex, which will be explained in more detail below under willpower.</td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Pain</b></td><td>This is the total accumulated pain the character is feeling. Pain can be gained from many sources, such as wearing high heels when the heels skill is not high enough, getting beat up in a fight, or engaging in very rough sex, especially trying to insert objects that are too large into ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + '\'s orifices. Being in pain has several negative consequences, some of which are explained below. Pain decreases over time but can be temporarily alleviated by taking painkillers.</td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Health</b></td><td>This represents the overall health of the character\'s body. It is lost by taking damage in fights, being sick, starving, experiencing pain, and more. Your maximum health is calculated as 10 times your endurance plus 5 times your strength. It slowly recovers when you sleep. If health ever becomes negative, you die, and the game is over.</td></tr>');
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Mana</b></td><td>This is the resource used to cast spells. It depends on magic, intelligence, and endurance. At first, it might seem like a limit on spell casting, but at medium levels of magic, max mana becomes very large, and since the regeneration rate is 5% of max mana every hour, it is not important.</td></tr>');
    }
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Willpower</b></td><td>This is the mental resource of ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' to resist being coerced into doing something or to attempt to coerce other characters into doing something. During the game, you will encounter actions that have a willpower cost associated with them, and the action will clearly state this. If you have enough willpower, you can choose the action, and the cost is subtracted from your willpower. The willpower cost depends on many things. First, each willpower check has a difficulty level associated with it: easy, normal, or hard. Second, each willpower check has a type: "Force" for trying to get others to do what you want, "Resist" for resisting coercion, and "Self" for overcoming <<$pcs_firstname>>\'s inner reluctance. The cost of a force willpower check is modified by the character\'s Persuasion skill, such that the cost at 0 in persuasion is twice that of the cost at 100 in persuasion. Likewise, the cost of resist willpower checks is affected by the spirit attribute. Passing a force or resist willpower check will grant experience to the associated skill or attribute. The willpower cost is further modified based on <<$pcs_firstname>>\'s condition. Checks of resist or self willpower for sex will be harder if the player is very aroused, but the cost of force willpower checks will be lower. Being in pain, being very tired, being thirsty, being hungry, and having a low mood all increase the cost of willpower checks. Being drunk or on drugs can also affect the cost of willpower checks. The maximum willpower of your character is set by the start you choose but can be increased up to 150. The way to increase the max willpower is by passing willpower checks other than chore actions that are used for concentrating on boring tasks. Passing force checks makes it increase faster. One needs to be careful; if your willpower goes below 25% of your max willpower or 25pts (whichever is lowest) too many times, your max willpower will decrease. Willpower regains at a rate of 4% of max willpower every hour you are asleep and 4/3% every hour awake. You can also restore willpower by doing yoga.</td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Stamina</b></td><td>This is the reserve you have for physically strenuous activities. Doing sports and exercises costs stamina and generally should not be performed if your stamina is too low. Having low stamina will cause your mood to drop, and having negative stamina will make you more tired. The maximum stamina is calculated as ((30 * (2 * endurance + agility + strength)) + 1000) / 13, subtracting an amount depending on how far along in your pregnancy you are if you are pregnant. If you are not too hungry, you regain stamina at a rate that depends on how hungry you are, up to 20% of your max stamina per hour awake. During sleep, it regenerates much faster, especially if you wake up completely well-rested.</td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Mood</b></td><td>This describes your current emotional state. It ranges from 0 to 100, though the maximum may be reduced by certain diseases, trauma, and other status effects. Mood trends towards your disposition over time, and is affected by many events. For example, mood may be raised by eating good food, having an orgasm, partaking in drugs, cigarettes, or alcohol, going to church as a religious character, and many other events and circumstances. On the other hand, mood may be lowered by being tired, in pain, going through withdraawl, doing unpleasant jobs, et cetera. Low mood will increase the willpower cost of actions, and if it stays low for too long may lower your maximum willpower. Reaching minimum mood will lower your health, and if willpower is at a minimum too you may reach a game over. </td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Disposition</b></td><td>This is your emotional baseline, which your mood naturally drifts towards. If you often find yourself experiencing low mood levels, raising your disposition is the surest way to improve your overall mood. Just as mood drifts towards the disposition, disposition itself drifts towards the mood on a slower timescale, thus sustaining an average mood that is higher or lower than your disposition will raise or lower it over time. Disposition may also be directly modified by certain events, though they are much rarer than mood-altering events, and generally represent noteworthy shifts in your life circumstances.</td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Hunger</b></td><td>This measures how hungry you are, ranging from 0 to 100. It decreases by 8 each hour awake and 4 each hour asleep, but many physical activities will also drain it. You can satisfy hunger by eating and drinking energy-rich drinks. Eating or drinking can temporarily put hunger over 100, but each hour of excess hunger will result in weight gain. Low levels of hunger increase willpower costs and prevent you from doing sports and exercises. If hunger goes below 0, you suffer health damage, and some of your excess fat will be converted to hunger. If you keep this going, your mood will decrease. If you have no excess fat, it will convert strength or endurance into fat. This can, in the extreme, result in death by starvation and game over.</td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Thirst</b></td><td>This measures how thirsty ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' is, ranging from 1 to 100. It decreases by 16 each hour awake and 8 each hour asleep, but many physical activities will also drain it. You can satisfy thirst by drinking. If thirst goes below 1, you lose health, and if you don\'t address it, your mood will also suffer. Having low thirst increases willpower costs.</td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('<tr><td><b>Sleep</b></td><td>This measures how awake ' + qspUntranslated(s, "pcs_firstname>", { location: "_menu_settings" }) + ' is, ranging from 0 to 100. It decreases by 5 every hour awake and is regained by sleeping. A low sleep value makes willpower checks harder. Staying awake if sleep is at 0 will decrease mood and earn your character debuffs that impair experience gain, up to halving the amount in the most severe level. These debuffs will only go away if you get a full night of rest.</td></tr>');
    ((s as any).explanation_table ?? {})['status'] = (((s as any).explanation_table ?? {})['status'] ?? 0) + ('</table>');
  }
  scene.build();
}

function enterExplanationBuildArchetypes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).explanation_table ?? 0)?.['archetype_version'] < 1) {
    ((s as any).explanation_table ?? {})['archetype_version'] = 1;
    ((s as any).explanation_table ?? {})['archetype'] = '<table border="0" cellpadding="10" cellspacing="10">';
    ((s as any).explanation_table ?? {})['archetype'] = (((s as any).explanation_table ?? {})['archetype'] ?? 0) + ('<tr><th align="left">Archetype</th><th align="left">Effects</th></tr>');
    ((s as any).explanation_table ?? {})['archetype'] = (((s as any).explanation_table ?? {})['archetype'] ?? 0) + ('<tr><td><b><font color="' + qspUntranslated(s, "theme_hex['bimbo']>", { location: "_menu_settings" }) + '">Bimbo</font></b><br><i>Opposes Prude & Punk</i></td><td>Boosts appearance, charisma, erotic dance, pole dance, heels, service, modeling, and inhibition, while penalizing intelligence, chess, perception, spirit, computer, observation, and sewing. Also steadily drives arousal upward.</td></tr>');
    ((s as any).explanation_table ?? {})['archetype'] = (((s as any).explanation_table ?? {})['archetype'] ?? 0) + ('<tr><td><b><font color="' + qspUntranslated(s, "theme_hex['accent']>", { location: "_menu_settings" }) + '">Preppy</font></b><br><i>Opposes Punk & Goth</i></td><td>Boosts appearance, charisma, disposition, modeling, dancing, people skills, cheerleading, persuasion, computer, makeup, and sports, while penalizing combat, spirit, strength, artistic skill, and music. Also drains willpower.</td></tr>');
    ((s as any).explanation_table ?? {})['archetype'] = (((s as any).explanation_table ?? {})['archetype'] ?? 0) + ('<tr><td><b><font color="' + qspUntranslated(s, "theme_hex['neutral']>", { location: "_menu_settings" }) + '">Prude</font></b><br><i>Opposes Goth & Bimbo</i></td><td>Boosts intelligence, chess, computer, observation, sewing, and cleaning, while penalizing appearance, charisma, erotic dance, pole dance, heels, inhibition, makeup, songwriting, performance, and revealing sports. Also suppresses arousal.</td></tr>');
    ((s as any).explanation_table ?? {})['archetype'] = (((s as any).explanation_table ?? {})['archetype'] ?? 0) + ('<tr><td><b><font color="' + qspUntranslated(s, "theme_hex['punk']>", { location: "_menu_settings" }) + '">Punk</font></b><br><i>Opposes Bimbo & Preppy</i></td><td>Boosts strength, combat, spirit, and music, while strongly penalizing appearance and, to a lesser degree, charisma, modeling, dancing, heels, makeup, computer, service, and cleaning. Also regenerates willpower.</td></tr>');
    ((s as any).explanation_table ?? {})['archetype'] = (((s as any).explanation_table ?? {})['archetype'] ?? 0) + ('<tr><td><b><font color="' + qspUntranslated(s, "theme_hex['goth']>", { location: "_menu_settings" }) + '">Goth</font></b><br><i>Opposes Preppy & Prude</i></td><td>Boosts spirit, perception, artistic skill, makeup, songwriting, and performance, while penalizing charisma, disposition, people skills, cheerleading, persuasion, sports, and revealing sports. Also regenerates willpower.</td></tr>');
    ((s as any).explanation_table ?? {})['archetype'] = (((s as any).explanation_table ?? {})['archetype'] ?? 0) + ('</table>');
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
    case 'print_life_sim_cheats_off':
      enterPrintLifeSimCheatsOff(s, scene);
      break;
    case 'print_life_sim_cheats_on':
      enterPrintLifeSimCheatsOn(s, scene);
      break;
    case 'lifesim_cheats_off':
      enterLifesimCheatsOff(s, scene);
      break;
    case 'lifesim_cheats_on':
      enterLifesimCheatsOn(s, scene);
      break;
    case 'music':
      enterMusic(s, scene);
      break;
    case 'difficulty':
      enterDifficulty(s, scene);
      break;
    case 'display':
      enterDisplay(s, scene);
      break;
    case 'theme_customize':
      enterThemeCustomize(s, scene);
      break;
    case 'theme_customize_input':
      enterThemeCustomizeInput(s, scene);
      break;
    case 'theme_customize_input_fname':
      enterThemeCustomizeInputFname(s, scene);
      break;
    case 'theme_customize_input_fsize':
      enterThemeCustomizeInputFsize(s, scene);
      break;
    case 'theme_customize_input_increment':
      enterThemeCustomizeInputIncrement(s, scene);
      break;
    case 'theme_customize_input_hex_str':
      enterThemeCustomizeInputHexStr(s, scene);
      break;
    case 'extract_color_component':
      enterExtractColorComponent(s, scene);
      break;
    case 'theme_customize_increment':
      enterThemeCustomizeIncrement(s, scene);
      break;
    case 'theme_customize_print_color_line':
      enterThemeCustomizePrintColorLine(s, scene);
      break;
    case 'theme_presets_copy':
      enterThemePresetsCopy(s, scene);
      break;
    case 'theme_export':
      enterThemeExport(s, scene);
      break;
    case 'theme_presets':
      enterThemePresets(s, scene);
      break;
    case 'status':
      enterStatus(s, scene);
      break;
    case 'fonts':
      enterFonts(s, scene);
      break;
    case 'mods':
      enterMods(s, scene);
      break;
    case 'display_mod_table':
      enterDisplayModTable(s, scene);
      break;
    case 'install_new_mod':
      enterInstallNewMod(s, scene);
      break;
    case 'delete_mod':
      enterDeleteMod(s, scene);
      break;
    case 'update_all_mods':
      enterUpdateAllMods(s, scene);
      break;
    case 'delete_all_mods':
      enterDeleteAllMods(s, scene);
      break;
    case 'theme':
      enterTheme(s, scene);
      break;
    case 'explanation_start':
      enterExplanationStart(s, scene);
      break;
    case 'explanation_icons':
      enterExplanationIcons(s, scene);
      break;
    case 'explanation_attributes':
      enterExplanationAttributes(s, scene);
      break;
    case 'explanation_skill':
      enterExplanationSkill(s, scene);
      break;
    case 'explanation_status':
      enterExplanationStatus(s, scene);
      break;
    case 'explanation_archetypes':
      enterExplanationArchetypes(s, scene);
      break;
    case 'explanation_start_exit':
      enterExplanationStartExit(s, scene);
      break;
    case 'explanation_build_attr':
      enterExplanationBuildAttr(s, scene);
      break;
    case 'explanation_build_skill':
      enterExplanationBuildSkill(s, scene);
      break;
    case 'explanation_build_stat':
      enterExplanationBuildStat(s, scene);
      break;
    case 'explanation_build_archetypes':
      enterExplanationBuildArchetypes(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _menu_settings: LocationDef = {
  name: '_menu_settings',
  title: 'Warning: You\'ve selected the card payment option, but you don\'t have a bank account yet!',
  region: 'other',
  enter: enter,
};
