import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).theme ?? 0)?.['name'] === '') {
    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['name'] = 'Dynamic Default';
    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['type'] = 'dynamic';
    qspCall(s, 'themes', 'set_theme', 'Dynamic Default', 'dynamic');
  }
  scene.build();
}

function enterMenuToggle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cfg_vars ?? 0)?.['themetype'] === 0) {
    if (!(s as any).cfg_vars) (s as any).cfg_vars = {}; (s as any).cfg_vars['themetype'] = 1;
    if (((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Default'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === '') {
      if (!(s as any).cfg_vars) (s as any).cfg_vars = {}; (s as any).cfg_vars['theme_main_name'] = 'White';
    }
  } else {
    if (!(s as any).cfg_vars) (s as any).cfg_vars = {}; (s as any).cfg_vars['themetype'] = 0;
    if (((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'White'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Black'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Modern Grey'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Custom'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === '') {
      if (!(s as any).cfg_vars) (s as any).cfg_vars = {}; (s as any).cfg_vars['theme_main_name'] = 'Default';
    }
  }
  qspCall(s, '$menu_obnovit', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMenuCell(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['name'] = ((s as any).temp_mc_full ?? 0);
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['type'] = ((s as any).locArgs?.[2] ?? 0);
  qspCall(s, 'themes', 'get_theme', 'indoors');
  // TODO-QSP: dynamic text: '<td bgcolor="' + $temp_mc_bg + '" width="250" align="center" style="background:...
  scene.text(`'<td bgcolor="' + $temp_mc_bg + '" width="250" align="center" style="background:' + $temp_mc_bg + '; ' + $temp_mc_sel + 'width:250px; text-align:center; white-space:nowrap; border-radius:4px; padding:0; overflow:hidden;"><a href="exec: $cfg_vars['theme_main_name'] = '${((s as any).locArgs?.[1] ?? 0)}' & gs 'themes', 'set_theme', '${((s as any).temp_mc_full ?? 0)}', '${((s as any).locArgs?.[2] ?? 0)}' & gs '$menu_obnovit' & gt 'themes', 'menu'" style="display:block; padding:20px 28px; color:' + $temp_mc_fg + '; text-decoration:none; font-weight:' + $iif($themes_menu_cur = $temp_mc_full, 'bold', 'normal') + ';">${((s as any).locArgs?.[1] ?? 0)}</a></td>'`);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).themes_menu_ret_loc ?? 0) === '') {
  }
  if ((!((s as any).themes_menu_active ?? 0))) {
    (s as any).themes_menu_active = 1;
    (s as any).themes_menu_prev_settingmode = ((s as any).settingmode ?? 0);
    (s as any).settingmode = 1;
  }
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['name'] = ((s as any).themes_menu_cur ?? 0);
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['type'] = ((s as any).themes_menu_mode ?? 0);
  qspCall(s, 'themes', 'get_theme', 'indoors');
  (s as any).bcolor = ((s as any).theme ?? 0)?.['bcolor'];
  (s as any).fcolor = ((s as any).theme ?? 0)?.['fcolor'];
  (s as any).lcolor = ((s as any).theme ?? 0)?.['lcolor'];
  (s as any).fsize = ((s as any).theme ?? 0)?.['fsize'];
  scene.text('<center>');
  if (((s as any).cfg_vars ?? 0)?.['themetype'] === 0) {
    // TODO-QSP: dynamic text: '<a href="exec: gs ''themes'', ''menu_toggle'' & gt ''themes'', ''menu''" style=...
    scene.text('\'<a href="exec: gs \'themes\', \'menu_toggle\' & gt \'themes\', \'menu\'" style="display:inline-block; font-size:1.15em; font-weight:bold; padding:7px 22px; margin:4px 2px; background:\' + $theme_hex[\'accent\'] + \'; color:#ffffff; text-decoration:none; border-radius:3px;">Dynamic</a>\'');
    // TODO-QSP: dynamic text: '<a href="exec: gs ''themes'', ''menu_toggle'' & gt ''themes'', ''menu''" style=...
    scene.text('\'<a href="exec: gs \'themes\', \'menu_toggle\' & gt \'themes\', \'menu\'" style="display:inline-block; font-size:1.15em; padding:7px 22px; margin:4px 2px; background:\' + $tm_label_fg + \'; color:\' + $tm_cell_bg + \'; text-decoration:none; border-radius:3px; opacity:0.5;">Static</a>\'');
  } else {
    // TODO-QSP: dynamic text: '<a href="exec: gs ''themes'', ''menu_toggle'' & gt ''themes'', ''menu''" style=...
    scene.text('\'<a href="exec: gs \'themes\', \'menu_toggle\' & gt \'themes\', \'menu\'" style="display:inline-block; font-size:1.15em; padding:7px 22px; margin:4px 2px; background:\' + $tm_label_fg + \'; color:\' + $tm_cell_bg + \'; text-decoration:none; border-radius:3px; opacity:0.5;">Dynamic</a>\'');
    // TODO-QSP: dynamic text: '<a href="exec: gs ''themes'', ''menu_toggle'' & gt ''themes'', ''menu''" style=...
    scene.text('\'<a href="exec: gs \'themes\', \'menu_toggle\' & gt \'themes\', \'menu\'" style="display:inline-block; font-size:1.15em; font-weight:bold; padding:7px 22px; margin:4px 2px; background:\' + $theme_hex[\'accent\'] + \'; color:#ffffff; text-decoration:none; border-radius:3px;">Static</a>\'');
  }
  scene.text('<table style="border-collapse:separate; border-spacing:0 6px;">');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Classic</b></td...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Classic</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  if (((s as any).cfg_vars ?? 0)?.['themetype'] === 0) {
    qspCall(s, 'themes', 'menu_cell', 'Default', 'dynamic');
  } else {
    qspCall(s, 'themes', 'menu_cell', 'White', 'static');
    qspCall(s, 'themes', 'menu_cell', 'Black', 'static');
    qspCall(s, 'themes', 'menu_cell', 'Modern Grey', 'static');
    qspCall(s, 'themes', 'menu_cell', 'Custom', 'static');
  }
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Catppuccin</b><...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Catppuccin</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  qspCall(s, 'themes', 'menu_cell', 'Latte', ((s as any).themes_menu_mode ?? 0));
  qspCall(s, 'themes', 'menu_cell', 'Frappé', ((s as any).themes_menu_mode ?? 0));
  qspCall(s, 'themes', 'menu_cell', 'Macchiato', ((s as any).themes_menu_mode ?? 0));
  qspCall(s, 'themes', 'menu_cell', 'Mocha', ((s as any).themes_menu_mode ?? 0));
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Nord</b></td></...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Nord</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  qspCall(s, 'themes', 'menu_cell', 'Nord Light', ((s as any).themes_menu_mode ?? 0));
  qspCall(s, 'themes', 'menu_cell', 'Nord Dark', ((s as any).themes_menu_mode ?? 0));
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Solarized</b></...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Solarized</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  qspCall(s, 'themes', 'menu_cell', 'Solarized Light', ((s as any).themes_menu_mode ?? 0));
  qspCall(s, 'themes', 'menu_cell', 'Solarized Dark', ((s as any).themes_menu_mode ?? 0));
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Tokyo Night</b>...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Tokyo Night</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  qspCall(s, 'themes', 'menu_cell', 'Tokyo Night Light', ((s as any).themes_menu_mode ?? 0));
  qspCall(s, 'themes', 'menu_cell', 'Tokyo Night', ((s as any).themes_menu_mode ?? 0));
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Rosé Pine</b></...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Rosé Pine</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  qspCall(s, 'themes', 'menu_cell', 'Rosé Pine Dawn', ((s as any).themes_menu_mode ?? 0));
  qspCall(s, 'themes', 'menu_cell', 'Rosé Pine', ((s as any).themes_menu_mode ?? 0));
  qspCall(s, 'themes', 'menu_cell', 'Rosé Pine Moon', ((s as any).themes_menu_mode ?? 0));
  scene.text('</tr></table></td></tr>');
  scene.text('</table>');
  scene.text('</center>');
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['name'] = ((s as any).themes_menu_cur ?? 0);
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['type'] = ((s as any).themes_menu_mode ?? 0);
  qspCall(s, 'themes', 'get_theme', 'indoors');
  (s as any).bcolor = ((s as any).theme ?? 0)?.['bcolor'];
  (s as any).fcolor = ((s as any).theme ?? 0)?.['fcolor'];
  (s as any).lcolor = ((s as any).theme ?? 0)?.['lcolor'];
  (s as any).fsize = ((s as any).theme ?? 0)?.['fsize'];
  scene.text('<hr>');
  scene.text('<b>Preview</b>');
  // TODO-QSP: dynamic text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor i...
  scene.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A <font color="\' + $theme_hex[\'bimbo\'] + \'">bimbo</font> wandered into a <font color="\' + $theme_hex[\'goth\'] + \'">goth</font> café, sparking a <font color="\' + $theme_hex[\'punk\'] + \'">punk</font> uprising while the air crackled with <font color="\' + $theme_hex[\'hypno\'] + \'">hypno</font> energy. <a href="exec:gt \'themes\', \'menu\'">Pellentesque habitant</a> morbi tristique senectus et netus et malesuada fames. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. The <font color="\' + $theme_hex[\'bimbo\'] + \'">bimbo</font> smiled serenely, the <font color="\' + $theme_hex[\'goth\'] + \'">goth</font> raised an eyebrow, the <font color="\' + $theme_hex[\'punk\'] + \'">punk</font> tuned her guitar. <a href="exec:gt \'themes\', \'menu\'">Excepteur sint occaecat</a> cupidatat non proident. The <font color="\' + $theme_hex[\'hypno\'] + \'">hypno</font> spiral deepened, and all four found something unexpected in the silence that followed.');
  scene.text('<table style="border-collapse:collapse; vertical-align:top;"><tr>');
  scene.text('<td valign="top" style="vertical-align:top; padding-right:32px;">');
  scene.text('<table cellpadding="0" cellspacing="0" style="border-collapse:collapse; min-width:320px;">');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $theme_hex['table_bg'] + '" style="background:' + $theme_h...
  scene.text('\'<tr><td bgcolor="\' + $theme_hex[\'table_bg\'] + \'" style="background:\' + $theme_hex[\'table_bg\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \';">Row 1, Column A</td><td bgcolor="\' + $theme_hex[\'table_bg\'] + \'" style="background:\' + $theme_hex[\'table_bg\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \';">Row 1, Column B</td><td bgcolor="\' + $theme_hex[\'table_bg\'] + \'" style="background:\' + $theme_hex[\'table_bg\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \'; font-style:italic; opacity:0.7;">table_bg</td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $theme_hex['table_bg_alt'] + '" style="background:' + $the...
  scene.text('\'<tr><td bgcolor="\' + $theme_hex[\'table_bg_alt\'] + \'" style="background:\' + $theme_hex[\'table_bg_alt\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \';">Row 2, Column A</td><td bgcolor="\' + $theme_hex[\'table_bg_alt\'] + \'" style="background:\' + $theme_hex[\'table_bg_alt\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \';">Row 2, Column B</td><td bgcolor="\' + $theme_hex[\'table_bg_alt\'] + \'" style="background:\' + $theme_hex[\'table_bg_alt\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \'; font-style:italic; opacity:0.7;">table_bg_alt</td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $theme_hex['table_bg'] + '" style="background:' + $theme_h...
  scene.text('\'<tr><td bgcolor="\' + $theme_hex[\'table_bg\'] + \'" style="background:\' + $theme_hex[\'table_bg\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \';">Row 3, Column A</td><td bgcolor="\' + $theme_hex[\'table_bg\'] + \'" style="background:\' + $theme_hex[\'table_bg\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \';">Row 3, Column B</td><td bgcolor="\' + $theme_hex[\'table_bg\'] + \'" style="background:\' + $theme_hex[\'table_bg\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \'; font-style:italic; opacity:0.7;">table_bg</td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $theme_hex['table_bg_alt'] + '" style="background:' + $the...
  scene.text('\'<tr><td bgcolor="\' + $theme_hex[\'table_bg_alt\'] + \'" style="background:\' + $theme_hex[\'table_bg_alt\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \';">Row 4, Column A</td><td bgcolor="\' + $theme_hex[\'table_bg_alt\'] + \'" style="background:\' + $theme_hex[\'table_bg_alt\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \';">Row 4, Column B</td><td bgcolor="\' + $theme_hex[\'table_bg_alt\'] + \'" style="background:\' + $theme_hex[\'table_bg_alt\'] + \'; padding:6px 14px; color:\' + $tm_fg_hex + \'; font-style:italic; opacity:0.7;">table_bg_alt</td></tr>\'');
  scene.text('</table>');
  scene.text('</td>');
  scene.text('<td valign="top" style="vertical-align:top;">');
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 100, 0, 0, 0, '', '', '21,41,61,81')
  scene.text('$func(\'progressbar\', \'positive\', 100, 0, 0, 0, \', \', \'21,41,61,81\')');
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 80, 0, 0, 0, '', '', '21,41,61,81')
  scene.text('$func(\'progressbar\', \'positive\', 80, 0, 0, 0, \', \', \'21,41,61,81\')');
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 60, 0, 0, 0, '', '', '21,41,61,81')
  scene.text('$func(\'progressbar\', \'positive\', 60, 0, 0, 0, \', \', \'21,41,61,81\')');
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 40, 0, 0, 0, '', '', '21,41,61,81')
  scene.text('$func(\'progressbar\', \'positive\', 40, 0, 0, 0, \', \', \'21,41,61,81\')');
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 20, 0, 0, 0, '', '', '21,41,61,81')
  scene.text('$func(\'progressbar\', \'positive\', 20, 0, 0, 0, \', \', \'21,41,61,81\')');
  scene.text('</td>');
  scene.text('<td valign="top" style="vertical-align:top; padding-left:32px;">');
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 100)
  scene.text('$func(\'progressbar\', \'mono:accent\', 100)');
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 80)
  scene.text('$func(\'progressbar\', \'mono:accent\', 80)');
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 60)
  scene.text('$func(\'progressbar\', \'mono:accent\', 60)');
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 40)
  scene.text('$func(\'progressbar\', \'mono:accent\', 40)');
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 20)
  scene.text('$func(\'progressbar\', \'mono:accent\', 20)');
  scene.text('</td>');
  scene.text('</tr></table>');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).settingmode = ((s as any).themes_menu_prev_settingmode ?? 0);
    (s as any).themes_menu_active = 0;
    dynamicGoto(st, 'temp_ret_loc', 'temp_ret_arg');
  } },
  ]);
  scene.build();
}

function enterAltColor(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothing(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWrap(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWrapHex(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWrapThought(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOutdoors(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'apply', ((s as any).locArgs?.[0] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIndoors(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'apply', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'indoors', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterApply(s: GameState, scene: SceneBuilder): void {
  if (((s as any).theme ?? 0)?.['type'] === 'dynamic') {
    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['old_is_dark'] = ((s as any).theme ?? 0)?.['is_dark'];
    qspCall(s, 'themes', 'get_theme', ((s as any).locArgs?.[1] ?? 0));
    if (((s as any).theme ?? 0)?.['old_is_dark'] !== ((s as any).theme ?? 0)?.['is_dark']) {
      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['old_is_dark'] = ((s as any).theme ?? 0)?.['is_dark'];
      if (((s as any).curloc ?? 0) !== 'menu_settings') {
        qspCall(s, 'stat_display', '');
      }
    }
  } else {
    qspCall(s, 'themes', 'get_theme', ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).bcolor = ((s as any).theme ?? 0)?.['bcolor'];
  (s as any).fcolor = ((s as any).theme ?? 0)?.['fcolor'];
  (s as any).lcolor = ((s as any).theme ?? 0)?.['lcolor'];
  (s as any).fsize = ((s as any).theme ?? 0)?.['fsize'];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  (s as any).fsize = 12;
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetTheme(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'reset');
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['name'] = ((s as any).locArgs?.[1] ?? 0);
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['type'] = ((s as any).locArgs?.[2] ?? 0);
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fsize'] = 12;
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fname'] = 'Tahoma';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckCustomVars(s: GameState, scene: SceneBuilder): void {
  if (((s as any).custom_theme ?? 0)?.['fname'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['fname'] = 'Tahoma';
  }
  if (((s as any).custom_theme ?? 0)?.['fsize'] === 0) {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['fsize'] = 12;
  }
  if (((s as any).custom_theme ?? 0)?.['bcolor'] === 0) {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['bcolor'] = 0;
  }
  if (((s as any).custom_theme ?? 0)?.['fcolor'] === 0) {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['fcolor'] = 0;
  }
  if (((s as any).custom_theme ?? 0)?.['lcolor'] === 0) {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['lcolor'] = 0;
  }
  if (((s as any).custom_theme ?? 0)?.['table_bg'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['table_bg'] = '#202020';
  }
  if (((s as any).custom_theme ?? 0)?.['table_bg_alt'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['table_bg_alt'] = '#303030';
  }
  if (((s as any).custom_theme ?? 0)?.['accent'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['accent'] = '#38C0D6';
  }
  if (((s as any).custom_theme ?? 0)?.['v_pos'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['v_pos'] = '#a6da95';
  }
  if (((s as any).custom_theme ?? 0)?.['pos'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['pos'] = '#eed49f';
  }
  if (((s as any).custom_theme ?? 0)?.['neutral'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['neutral'] = '#f5a97f';
  }
  if (((s as any).custom_theme ?? 0)?.['neg'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['neg'] = '#ee99a0';
  }
  if (((s as any).custom_theme ?? 0)?.['v_neg'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['v_neg'] = '#ed8796';
  }
  if (((s as any).custom_theme ?? 0)?.['punk'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['punk'] = '#c6a0f6';
  }
  if (((s as any).custom_theme ?? 0)?.['bimbo'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['bimbo'] = '#f5bde6';
  }
  if (((s as any).custom_theme ?? 0)?.['goth'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['goth'] = '#a5adcb';
  }
  if (((s as any).custom_theme ?? 0)?.['hypno'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['hypno'] = '#f5a97f';
  }
  if (((s as any).custom_theme ?? 0)?.['header'] === '') {
    if (!(s as any).custom_theme) (s as any).custom_theme = {}; (s as any).custom_theme['header'] = '#f0c6c6';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDefaultTheme(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fname'] = 'Tahoma';
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fsize'] = 12;
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#ffffff';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#E6F2FF';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#38C0D6';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#40a02b';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#df8e1d';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe640b';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e64553';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d20f39';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8839ef';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea76cb';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6f85';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe640b';
  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d24b4b';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTheme(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_theme_new_schema = 0;
  qspCall(s, 'themes', 'default_theme');
  if (((s as any).theme ?? 0)?.['type'] === 'dynamic') {
    if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Latte') {
      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
      if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#bcc0cc';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#acb0be';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1e77c7';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#40a02b';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#df8e1d';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe640b';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e64553';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d20f39';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8839ef';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea76cb';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6f85';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe640b';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d24b4b';
      } else {
        if ((!((s as any).hour ?? 0))) {
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#a8aab1';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#989ba3';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0063ac';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#2d8a1a';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c57a08';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e15000';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c93142';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b50029';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#7024d4';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf63b3';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a5c6c';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e15000';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b6393b';
        } else {
          if (((s as any).hour ?? 0) === 1) {
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#a8abb1';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#989ba4';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0064ac';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#328a16';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c7790c';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e44e00';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ca3045';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b6002c';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6829d7';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ce64b6';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#595c6d';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e44e00';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b7383d';
          } else {
            if (((s as any).hour ?? 0) === 2) {
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#a8abb2';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#989ba4';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0065ad';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#378a12';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ca780f';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e64c03';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cb2f48';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b8002f';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#602edb';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cc65b8';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#595c6d';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e64c03';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b83740';
            } else {
              if (((s as any).hour ?? 0) === 3) {
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#a8abb2';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#989ca5';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0066ae';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#3c890d';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cc7713';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e84a0b';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cc2d4b';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b90032';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5732de';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cb66bb';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#585d6e';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e84a0b';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b93642';
              } else {
                if (((s as any).hour ?? 0) === 4) {
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#a8acb3';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#989ca5';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0067ae';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#418906';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cf7616';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eb4712';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cd2c4d';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ba0035';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#4d36e1';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c967be';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#585d6f';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#eb4712';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ba3544';
                } else {
                  if (((s as any).hour ?? 0) === 5) {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#acb0b8';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#9ca0ab';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#006ab3';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#408e11';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d27b17';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ef4e0f';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d2324e';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf0036';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5d36e4';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d06ac0';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5c6173';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ef4e0f';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf3a45';
                  } else {
                    if (((s as any).hour ?? 0) === 6) {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#b4b8c2';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#a4a8b4';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0071bd';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#43971d';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d9841b';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f75811';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc3b52';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c80039';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6f39eb';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dc70c7';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#63687c';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f75811';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c94249';
                    } else {
                      if (((s as any).hour ?? 0) === 7) {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#b8bcc7';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#a8acb9';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0574c2';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#429b24';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dc891c';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fb5e0e';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e14053';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cd0039';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#7c39ed';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e373c9';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#686c80';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fb5e0e';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cd474a';
                      } else {
                        if (((s as any).hour ?? 0) === 8) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#b8bcc8';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#a8adba';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0a74c3';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#419c25';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dd8a1c';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fb5f0e';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e24153';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ce0139';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#7d39ed';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e474c9';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#686c81';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fb5f0e';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ce474a';
                        } else {
                          if (((s as any).hour ?? 0) === 9) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#b9bdc8';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#a9adba';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0e75c3';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#419d26';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dd8a1c';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fc600e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e24153';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ce0339';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#7f39ed';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e574c9';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#696c82';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fc600e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cf484a';
                          } else {
                            if (((s as any).hour ?? 0) === 10) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#b9bdc9';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#a9aebb';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1175c4';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#419d27';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dd8b1c';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fc600d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e34253';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cf0539';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8139ee';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e674ca';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#696d82';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fc600d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cf484b';
                            } else {
                              if (((s as any).hour ?? 0) === 11) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#babec9';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#aaaebc';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1475c5';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#419e28';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#de8b1d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fc610d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e44353';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d00739';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8239ee';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e775ca';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6a6d83';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fc610d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d0494b';
                              } else {
                                if (((s as any).hour ?? 0) === 12) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#babeca';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#aaafbc';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1776c5';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#419e29';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#de8c1d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fd620c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e44353';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d00939';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8439ee';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e775ca';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6a6e83';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fd620c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d0494b';
                                } else {
                                  if (((s as any).hour ?? 0) === 13) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#bbbfcb';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#abafbd';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1976c6';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#409f29';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#de8d1d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fd630c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e54453';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d10b39';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8539ee';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e875ca';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6e84';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fd630c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d14a4b';
                                  } else {
                                    if (((s as any).hour ?? 0) === 14) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#bbbfcb';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#abb0bd';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1c77c6';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#409f2a';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#df8d1d';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe630b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e54453';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d10d39';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8739ef';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e976cb';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6f84';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe630b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d14a4b';
                                    } else {
                                      if (((s as any).hour ?? 0) === 15) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#bcc0cc';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#acb0be';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1e77c7';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#40a02b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#df8e1d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe640b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e64553';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d20f39';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8839ef';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea76cb';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6f85';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe640b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d24b4b';
                                      } else {
                                        if (((s as any).hour ?? 0) === 16) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#bcbfcb';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#acafbd';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2176c6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#3ea02c';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#de8e1c';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fd6408';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e54552';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d11038';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8937ed';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea75ca';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6f84';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fd6408';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d14b4a';
                                        } else {
                                          if (((s as any).hour ?? 0) === 17) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#bbbfca';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#abafbc';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2375c5';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#3c9f2c';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dc8d1b';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fb6405';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e34551';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cf1037';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8a36eb';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e975c8';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6e83';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fb6405';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d04b49';
                                          } else {
                                            if (((s as any).hour ?? 0) === 18) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#bbbec9';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#abaebb';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2675c4';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#3a9e2d';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#db8d1a';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f96402';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e34550';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cf1135';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8b34ea';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e974c7';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6d82';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f96402';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cf4b48';
                                            } else {
                                              if (((s as any).hour ?? 0) === 19) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#b7bac4';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#a7aab6';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2870be';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#319a2c';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d48a14';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f26200';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc424a';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c80c30';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8c2be2';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e56fc0';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#68697d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f26200';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c94843';
                                              } else {
                                                if (((s as any).hour ?? 0) === 20) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#b0b2ba';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#a0a2ac';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2668b5';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#229329';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c88407';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e65d00';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d23b41';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bd0027';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#891dd6';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dd68b5';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#616274';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e65d00';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be423b';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 21) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#acadb5';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#9c9ea7';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2864af';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#148f28';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c18100';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#de5b00';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cb383c';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b70022';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#890fce';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d963ae';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5e5e6f';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#de5b00';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b83f36';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 22) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#abacb3';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#9b9da6';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1d64ae';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#1f8d24';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c27f02';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#df5700';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cb363e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b60025';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8118d0';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d663b0';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5d5d6e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#df5700';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b73d37';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 23) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#a9abb2';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#9a9ca4';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0f63ad';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#268b1f';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c47c05';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e05400';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ca3440';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b60027';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#791fd2';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d263b1';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5b5c6d';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e05400';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b73b39';
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
    } else {
      if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Frappé') {
        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
        if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#51576d';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#626880';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4fb8c6';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6d189';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e5c890';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ef9f76';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ea999c';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e78284';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ca9ee6';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4b8e4';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adce';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ef9f76';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#eebebe';
        } else {
          if ((!((s as any).hour ?? 0))) {
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#404455';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#505567';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#45a1ad';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#93ba79';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ccb281';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d48b66';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ce8689';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cb7072';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b28acb';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d9a4cb';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9198b3';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d48b66';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d2aaaa';
          } else {
            if (((s as any).hour ?? 0) === 1) {
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#404556';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#505568';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#44a2ad';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#95ba77';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ceb281';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d58b67';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cf868a';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cc6f73';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b08bcd';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d9a5cd';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9198b3';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d58b67';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d2aaab';
            } else {
              if (((s as any).hour ?? 0) === 2) {
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3f4556';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#4f5668';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#44a2ac';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#97ba76';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cfb281';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d78a69';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cf868c';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cc6f75';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#af8ccf';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d8a5ce';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9099b4';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d78a69';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d3aaac';
              } else {
                if (((s as any).hour ?? 0) === 3) {
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3f4657';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#4f5669';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#44a2ab';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#99ba75';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d1b281';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d88a6a';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d0868d';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cd6f77';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ad8dd1';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d7a6d0';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#8f99b5';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d88a6a';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d3aaad';
                } else {
                  if (((s as any).hour ?? 0) === 4) {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3e4657';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#4e566a';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#43a3aa';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9cba74';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d3b281';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d98a6b';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d0868f';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ce6f79';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ab8ed2';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d7a6d2';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#8e9ab6';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d98a6b';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d4abae';
                  } else {
                    if (((s as any).hour ?? 0) === 5) {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#42495c';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#525a6e';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#46a7b0';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ebf78';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d6b684';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#de8e6d';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d58a91';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d3737b';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b291d6';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ddaad5';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#939ebb';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#de8e6d';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d9afb1';
                    } else {
                      if (((s as any).hour ?? 0) === 6) {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#495064';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5a6177';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4aafba';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3c780';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#debf8a';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e79672';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#df9197';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#dd7a80';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bc98df';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e7b1dd';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9ba5c4';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e79672';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#e3b6b8';
                      } else {
                        if (((s as any).hour ?? 0) === 7) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#4d5469';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5e657b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4db4c0';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5cc85';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e2c38d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eb9b74';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e5959a';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e27e82';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c39be2';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#eeb5e1';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a0a9c9';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#eb9b74';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#e9babb';
                        } else {
                          if (((s as any).hour ?? 0) === 8) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#4e5469';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5e657c';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4db4c1';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5cd85';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e2c48e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eb9b74';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e5969a';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e37f82';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c49be3';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#efb5e1';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a1aaca';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#eb9b74';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#e9bbbb';
                          } else {
                            if (((s as any).hour ?? 0) === 9) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#4e546a';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5f657d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4db5c2';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5cd86';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e3c58e';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ec9c75';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e6969a';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e37f83';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c59ce3';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#efb5e2';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a1aaca';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ec9c75';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#eabbbc';
                            } else {
                              if (((s as any).hour ?? 0) === 10) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#4e556a';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5f667d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4eb5c2';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5ce86';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e3c58e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ec9c75';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e7979b';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e48083';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c69ce4';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f0b6e2';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a2abcb';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ec9c75';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ebbcbc';
                              } else {
                                if (((s as any).hour ?? 0) === 11) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#4f556b';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#60667e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4eb6c3';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5cf87';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e3c68f';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ed9d75';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e7979b';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e48083';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c79ce4';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f1b6e2';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a3abcc';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ed9d75';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ebbcbd';
                                } else {
                                  if (((s as any).hour ?? 0) === 12) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#4f566b';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#60677e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4eb6c4';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5cf87';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e4c68f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ed9d75';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e8989b';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e58183';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c79de5';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f2b7e3';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a3accc';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ed9d75';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ecbdbd';
                                  } else {
                                    if (((s as any).hour ?? 0) === 13) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#50566c';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#61677f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4eb7c5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6d088';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e4c78f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ee9e76';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e9989b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e68184';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c89de5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f2b7e3';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4accd';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ee9e76';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#edbdbd';
                                    } else {
                                      if (((s as any).hour ?? 0) === 14) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#50576c';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#61687f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4fb7c5';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6d088';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e5c790';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ee9e76';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e9999c';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e68284';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c99ee6';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3b8e4';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4adcd';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ee9e76';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#edbebe';
                                      } else {
                                        if (((s as any).hour ?? 0) === 15) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#51576d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#626880';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4fb8c6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6d189';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e5c890';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ef9f76';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ea999c';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e78284';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ca9ee6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4b8e4';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adce';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ef9f76';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#eebebe';
                                        } else {
                                          if (((s as any).hour ?? 0) === 16) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#51576c';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#62687f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4fb7c6';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5d189';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e4c890';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ee9f75';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e9999b';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e68283';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ca9de5';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4b8e3';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5accd';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ee9f75';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#edbebd';
                                          } else {
                                            if (((s as any).hour ?? 0) === 17) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#50566b';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#61677e';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#50b6c5';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a4d089';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e2c78f';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ec9e75';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e8989a';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e58182';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c99ce3';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3b7e1';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4abcc';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ec9e75';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ecbdbc';
                                            } else {
                                              if (((s as any).hour ?? 0) === 18) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#50556a';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#61667d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#50b6c4';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3cf89';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e1c78f';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eb9e74';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e79899';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e48181';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c99ce2';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f2b6e0';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4abcb';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#eb9e74';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ebbdbc';
                                              } else {
                                                if (((s as any).hour ?? 0) === 19) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#4d5165';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5e6278';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4db1c1';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9dcb87';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dbc38c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e59a70';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e19494';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#de7d7c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c697dc';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#eeb2da';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a1a6c5';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e59a70';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#e5b9b7';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 20) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#474a5d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#585b6f';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#49a9b9';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#94c382';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d1bb86';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#da9469';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d78d8c';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d47774';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bf8fd1';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e5aad0';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9b9fbc';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#da9469';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#dbb1af';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 21) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#454758';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#55576a';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#47a4b5';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fbf7f';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ccb783';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d49065';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d28987';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ce736f';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bc8bcb';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e1a6cb';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#979ab6';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d49065';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d6adab';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 22) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#434657';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#535669';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#46a3b2';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#90bd7d';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ccb682';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d48f65';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d18888';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cd7270';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b98bcb';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dea5cb';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9599b5';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d48f65';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d4acab';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 23) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#424556';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#525668';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#45a2b0';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#92bc7b';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ccb481';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d48d66';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cf8788';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cc7171';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b58acb';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dca5cb';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9399b4';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d48d66';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d3abaa';
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
      } else {
        if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Macchiato') {
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
          if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#494d64';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#363a4f';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#70d0da';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6da95';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eed49f';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f5a97f';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ee99a0';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ed8796';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c6a0f6';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5bde6';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adcb';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5a97f';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f0c6c6';
          } else {
            if ((!((s as any).hour ?? 0))) {
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#383b4c';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#262938';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#65b8c1';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#93c384';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d5be8f';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#da956f';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d2868c';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d17582';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#af8cdb';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#daa9cd';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9298b0';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#da956f';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d4b2b2';
            } else {
              if (((s as any).hour ?? 0) === 1) {
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#383b4d';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#252939';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#65b9c1';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#96c383';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d7be90';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#db9570';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d2868e';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d17584';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ac8ddd';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#daa9cf';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9198b0';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#db9570';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d4b2b3';
              } else {
                if (((s as any).hour ?? 0) === 2) {
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#373c4e';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#252a3a';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#64b9c0';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#98c382';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d8be90';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#dd9471';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d38690';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d27586';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#aa8ede';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d9aad0';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9099b1';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dd9471';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d5b2b3';
                } else {
                  if (((s as any).hour ?? 0) === 3) {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#373c4e';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#252a3a';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#64babf';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ac380';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dabe90';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#de9472';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d38691';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d27588';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a78fe0';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d9aad2';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9099b2';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#de9472';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d5b2b4';
                  } else {
                    if (((s as any).hour ?? 0) === 4) {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#363c4f';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#242a3b';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#64babe';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9cc27f';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dbbd90';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#df9474';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d48693';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d2758a';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a590e2';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d8abd3';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#8f9ab2';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#df9474';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d6b2b5';
                    } else {
                      if (((s as any).hour ?? 0) === 5) {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3a4053';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#282d3f';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#67bfc4';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ec784';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dfc293';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e49876';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d98a95';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d8788c';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ac93e6';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#deafd7';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#949eb8';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e49876';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#dbb6b9';
                      } else {
                        if (((s as any).hour ?? 0) === 6) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#41465b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2e3447';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6bc7ce';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3d08b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e7cb99';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eda07b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e3919b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e27f92';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b79aee';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e9b6df';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9ca5c1';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#eda07b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#e5bebf';
                        } else {
                          if (((s as any).hour ?? 0) === 7) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#454a60';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#32374b';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6eccd4';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5d590';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ebcf9c';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f1a57d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e9959e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e88394';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bf9df2';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#efb9e3';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a0a9c6';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f1a57d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ebc2c3';
                          } else {
                            if (((s as any).hour ?? 0) === 8) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#454a60';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#33374b';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6eccd5';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5d691';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ebd09c';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f1a57d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e9969e';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e88494';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c09df3';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f0bae3';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a1aac7';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f1a57d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ebc3c3';
                            } else {
                              if (((s as any).hour ?? 0) === 9) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#464b61';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#33384c';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6ecdd6';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5d691';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ebd19d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f2a67e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ea969e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e98495';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c19ef3';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f0bae3';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a1aac7';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f2a67e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ecc3c4';
                              } else {
                                if (((s as any).hour ?? 0) === 10) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#464b61';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#34384c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6fcdd6';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5d792';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ecd19d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f2a67e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#eb979f';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ea8595';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c19ef4';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f1bbe4';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a2abc8';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f2a67e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#edc4c4';
                                } else {
                                  if (((s as any).hour ?? 0) === 11) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#474b62';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#34384d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6fced7';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5d893';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ecd29e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f3a77e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#eb979f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ea8595';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c29ff4';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f2bbe4';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a3abc9';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f3a77e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#edc4c4';
                                  } else {
                                    if (((s as any).hour ?? 0) === 12) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#474c62';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#35394d';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6fced8';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6d893';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#edd29e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f3a77e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ec989f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#eb8695';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c39ff5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3bce5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a3acc9';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f3a77e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#eec5c5';
                                    } else {
                                      if (((s as any).hour ?? 0) === 13) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#484c63';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#35394e';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6fcfd9';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6d994';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#edd39e';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f4a87f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ed989f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ec8696';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c49ff5';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3bce5';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4acca';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4a87f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#efc5c5';
                                      } else {
                                        if (((s as any).hour ?? 0) === 14) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#484d63';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#363a4e';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#70cfd9';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6d994';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eed39f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f4a87f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ed99a0';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ec8796';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c5a0f6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4bde6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4adca';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4a87f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#efc6c6';
                                        } else {
                                          if (((s as any).hour ?? 0) === 15) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#494d64';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#363a4f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#70d0da';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6da95';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eed49f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f5a97f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ee99a0';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ed8796';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c6a0f6';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5bde6';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adcb';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5a97f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f0c6c6';
                                          } else {
                                            if (((s as any).hour ?? 0) === 16) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#494d63';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#363a4e';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#70cfda';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5da95';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#edd49f';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f4a97e';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ed999f';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ec8795';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c69ff5';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5bde5';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5acca';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4a97e';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#efc6c5';
                                            } else {
                                              if (((s as any).hour ?? 0) === 17) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#484c62';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#35394d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#70ced9';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a4d995';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ecd39e';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f2a87e';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ec989e';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#eb8694';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c69ef3';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4bce3';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4abc9';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f2a87e';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#eec5c4';
                                              } else {
                                                if (((s as any).hour ?? 0) === 18) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#484b61';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#35384c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#70ced8';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3d895';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ebd29e';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f1a87d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#eb989d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ea8693';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c69ef2';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3bbe3';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4abc8';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f1a87d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#edc5c4';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 19) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#45475d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#333548';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6ec9d5';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9dd493';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e5ce9b';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eba479';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e69498';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e5828d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c499eb';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#efb7dd';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a1a7c2';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#eba479';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#e7c1bf';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 20) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#404154';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2d2e40';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#69c0cd';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#95cc8d';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dbc795';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e09d72';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db8d90';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#db7b85';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bd91e1';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e6afd3';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9a9fb9';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e09d72';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ddb9b7';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 21) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3d3d4f';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2a2b3b';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#66bcc9';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fc78b';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d5c392';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#da9a6e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d6898b';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d5787f';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bb8cda';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e2abcd';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#979ab3';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#da9a6e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d8b5b3';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 22) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3b3c4e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#292a3a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#66bbc6';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#91c689';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d5c191';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#da986e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d5888b';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d47780';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b78cda';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dfaacd';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9599b2';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#da986e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d6b4b3';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 23) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3a3c4d';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#272a39';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#65bac4';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#92c486';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d5c090';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#da976f';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d3878c';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d27681';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b38cdb';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ddaacd';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9399b1';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#da976f';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d5b3b2';
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
        } else {
          if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Mocha') {
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
            if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#45475a';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#585b70';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5fc6d6';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6e3a1';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f9e2af';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fab387';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#eba0ac';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f38ba8';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#cba6f7';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5c2e7';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a6adc8';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fab387';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f2cdcd';
            } else {
              if ((!((s as any).hour ?? 0))) {
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#343543';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#464858';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#54afbd';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#94cb8f';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0cc9f';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#df9f77';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cf8d98';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d77893';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b492dc';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#daaece';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9398ad';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#df9f77';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d5b9b9';
              } else {
                if (((s as any).hour ?? 0) === 1) {
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#343643';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#464958';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#54afbc';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#96cb8e';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e2cc9f';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e09e78';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cf8d99';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d77995';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b193de';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#daaecf';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9298ae';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e09e78';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d6b9b9';
                } else {
                  if (((s as any).hour ?? 0) === 2) {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#333644';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#464959';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#53b0bb';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#98cb8d';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e3cb9f';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e29e79';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d08d9a';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d77997';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#af94df';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d9afd1';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9199ae';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e29e79';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d7b9ba';
                  } else {
                    if (((s as any).hour ?? 0) === 3) {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#333645';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#45495a';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#53b0bb';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9bcb8b';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e5cb9f';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e39e7a';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d08d9c';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d77999';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ad95e1';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d9afd2';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9199af';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e39e7a';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d7b9bb';
                    } else {
                      if (((s as any).hour ?? 0) === 4) {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#333745';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#454a5a';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#53b1ba';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9dcb8a';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e6cb9f';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e59d7b';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d08d9d';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d7799b';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ab96e3';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d8b0d4';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#909aaf';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e59d7b';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d8b9bc';
                      } else {
                        if (((s as any).hour ?? 0) === 5) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#363a49';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#494d5f';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#55b5c0';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ed08f';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ead0a3';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e9a27d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d691a0';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#dd7d9e';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b299e7';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#deb3d8';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#959eb5';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e9a27d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ddbdbf';
                        } else {
                          if (((s as any).hour ?? 0) === 6) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3d4051';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#505467';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5abdca';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3d997';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f2d9a9';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f2aa83';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e098a7';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e784a4';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bda0ef';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e9bbe0';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9da5be';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f2aa83';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#e7c5c6';
                          } else {
                            if (((s as any).hour ?? 0) === 7) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#414456';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#54586c';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5dc2d0';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5de9c';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6ddac';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f6af85';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e69ca9';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ed87a6';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a3f3';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#efbee3';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a1a9c3';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6af85';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#edc9ca';
                            } else {
                              if (((s as any).hour ?? 0) === 8) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#424456';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#54586c';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5dc2d1';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5df9d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6deac';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f7af85';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e69daa';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ee88a6';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c5a3f4';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f0bfe4';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a2aac4';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f7af85';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#edcaca';
                              } else {
                                if (((s as any).hour ?? 0) === 9) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#424557';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#55586d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5dc3d2';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5df9d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6dfad';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f7b085';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e79daa';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ef88a6';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c6a4f4';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f0bfe4';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a3aac4';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f7b085';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#eecacb';
                                } else {
                                  if (((s as any).hour ?? 0) === 10) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#434557';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#55596d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5ec3d2';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5e09e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f7dfad';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f8b086';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e89eaa';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ef89a7';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c7a4f5';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f1c0e5';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a3abc5';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f8b086';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#efcbcb';
                                  } else {
                                    if (((s as any).hour ?? 0) === 11) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#434558';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#56596e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5ec4d3';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5e19f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f7e0ad';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f8b186';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e89eab';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f089a7';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c7a4f5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f2c0e5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4abc6';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f8b186';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#efcbcb';
                                    } else {
                                      if (((s as any).hour ?? 0) === 12) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#444658';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#565a6e';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5ec4d4';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6e19f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f8e0ae';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f9b186';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e99fab';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f18aa7';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c8a5f6';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3c1e6';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a4acc6';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f9b186';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f0cccc';
                                      } else {
                                        if (((s as any).hour ?? 0) === 13) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#444659';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#575a6f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5ec5d5';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6e2a0';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f8e1ae';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f9b286';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ea9fab';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f28aa7';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c9a5f6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3c1e6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5acc7';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f9b286';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f1cccc';
                                        } else {
                                          if (((s as any).hour ?? 0) === 14) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#454759';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#575b6f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5fc5d5';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6e2a0';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f9e1af';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fab287';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#eaa0ac';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f28ba8';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#caa6f7';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4c2e7';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adc7';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fab287';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f1cdcd';
                                          } else {
                                            if (((s as any).hour ?? 0) === 15) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#45475a';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#585b70';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5fc6d6';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6e3a1';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f9e2af';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fab387';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#eba0ac';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f38ba8';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#cba6f7';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5c2e7';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a6adc8';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fab387';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f2cdcd';
                                            } else {
                                              if (((s as any).hour ?? 0) === 16) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#454759';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#585b6f';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5fc5d6';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a5e3a1';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f8e2af';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f9b386';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#eaa0ab';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f28ba7';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#cba5f6';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5c2e6';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a6acc7';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f9b386';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f1cdcc';
                                              } else {
                                                if (((s as any).hour ?? 0) === 17) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#444658';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#575a6e';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#60c4d5';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a4e2a1';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f7e1ae';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f7b286';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e99faa';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f18aa6';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#cba4f4';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3c1e5';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5acc6';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f7b286';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f0cccc';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 18) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#444557';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#57596d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#60c4d4';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3e1a1';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6e0ae';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f6b285';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e89fa9';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f08aa5';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#cba4f3';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3c0e4';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5abc5';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6b285';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#efcbcb';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 19) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#414253';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#545568';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5dbfd0';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ddd9f';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f0dcab';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f0ae81';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e39ba4';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#eb869f';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c89fed';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#efbcde';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a2a7c0';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f0ae81';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#e9c7c6';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 20) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3b3b4a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#4e4e60';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#59b6c8';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#95d499';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e6d4a5';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e5a77a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d9949b';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e17f96';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c297e2';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e6b4d4';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9b9fb6';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e5a77a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#dfc0be';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 21) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#383746';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#4b4b5b';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#57b2c4';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fd097';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0d0a1';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#dfa476';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d49096';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#dc7b90';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bf92db';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e1b0ce';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#989ab1';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dfa476';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#dabcba';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 22) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#373745';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#494a5a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#56b1c2';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#91ce94';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0cfa1';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#dfa276';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d28f97';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#db7a91';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bb92dc';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dfafce';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9699af';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dfa276';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d8bbba';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 23) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#353644';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#484959';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#55b0bf';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#92cd92';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0cda0';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#dfa077';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d18e97';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d97992';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b792dc';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ddafce';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9499ae';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dfa077';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d7bab9';
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
          } else {
            if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Nord Dark') {
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
              if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3b4252';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#434c5e';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#88c0d0';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3be8c';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ebcb8b';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d08770';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bf616a';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c34444';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b48ead';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ff4da3';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c566a';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d08770';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d0959b';
              } else {
                if ((!((s as any).hour ?? 0))) {
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2c303b';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#333a47';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7ba9b6';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#90a77c';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d2b57c';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b57460';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a44f58';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a73234';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9b7b95';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e2388d';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3c4352';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b57460';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b58287';
                } else {
                  if (((s as any).hour ?? 0) === 1) {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2b313c';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#333a47';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7ba9b6';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#91a77b';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d4b57c';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b67461';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a44f5a';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a83136';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9b7b96';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e23991';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3c4453';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b67461';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b58288';
                  } else {
                    if (((s as any).hour ?? 0) === 2) {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2b313c';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#333a48';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7aaab6';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#93a87a';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d6b57c';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b77462';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a54f5b';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a93039';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9a7c97';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e13a94';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3b4453';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b77462';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b5828a';
                    } else {
                      if (((s as any).hour ?? 0) === 3) {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2b313d';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#323b48';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7aaab6';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#94a87a';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d7b47c';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b87363';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a54f5d';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#aa2f3b';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9a7c99';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e03b97';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3b4454';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b87363';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b6838b';
                      } else {
                        if (((s as any).hour ?? 0) === 4) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2a313d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#323b49';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#79abb6';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#96a879';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d9b47d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b97364';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a64f5f';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ab2e3d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9a7d9a';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e03c9b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3a4554';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b97364';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b6838c';
                        } else {
                          if (((s as any).hour ?? 0) === 5) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2e3541';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#353f4d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7cafbb';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#98ac7d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ddb980';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#be7767';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ab5361';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b0333e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9f809e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e63f9c';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3e4859';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#be7767';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc868f';
                          } else {
                            if (((s as any).hour ?? 0) === 6) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#343b49';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3c4555';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#82b7c5';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9eb584';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e4c185';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c77f6c';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#b55a66';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ba3b42';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a987a6';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f246a1';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#444f61';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c77f6c';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c58d95';
                            } else {
                              if (((s as any).hour ?? 0) === 7) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#373f4e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3f495a';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#85bccb';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a1b988';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e8c688';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cc836e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ba5d68';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#be4043';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ae8ba9';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f94aa2';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#485366';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cc836e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cb9198';
                              } else {
                                if (((s as any).hour ?? 0) === 8) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#383f4e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#40495a';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#85bccb';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a1ba88';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e8c789';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cc836e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bb5e68';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf4043';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#af8baa';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f94aa2';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#495366';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cc836e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cb9299';
                                } else {
                                  if (((s as any).hour ?? 0) === 9) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#38404f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#40495b';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#86bdcc';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a1bb89';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e9c789';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cd846f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bb5e69';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c04143';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b08baa';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#fa4ba2';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#495367';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cd846f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cc9299';
                                  } else {
                                    if (((s as any).hour ?? 0) === 10) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#39404f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#414a5b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#86bdcd';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a2bb89';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e9c889';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cd846f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bc5f69';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c04143';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b18cab';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#fb4ba2';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4a5467';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cd846f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cd9399';
                                    } else {
                                      if (((s as any).hour ?? 0) === 11) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#394050';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#414a5c';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#87becd';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a2bc8a';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e9c98a';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ce856f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bc5f69';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14244';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b18cab';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#fc4ba3';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4a5468';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ce856f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cd939a';
                                      } else {
                                        if (((s as any).hour ?? 0) === 12) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3a4150';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#424b5c';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#87bece';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a2bc8a';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eac98a';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ce856f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bd6069';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14244';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b28dac';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#fd4ca3';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4b5568';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ce856f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ce949a';
                                        } else {
                                          if (((s as any).hour ?? 0) === 13) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3a4151';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#424b5d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#87bfcf';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a2bd8b';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eaca8a';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cf8670';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#be606a';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24344';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b38dac';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#fd4ca3';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4b5569';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cf8670';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cf949a';
                                          } else {
                                            if (((s as any).hour ?? 0) === 14) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3b4251';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#434c5d';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#88bfcf';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3bd8b';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ebca8b';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cf8670';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#be616a';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24344';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b38ead';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#fe4da3';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c5669';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cf8670';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cf959b';
                                            } else {
                                              if (((s as any).hour ?? 0) === 15) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3b4252';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#434c5e';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#88c0d0';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3be8c';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ebcb8b';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d08770';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bf616a';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c34444';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b48ead';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ff4da3';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c566a';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d08770';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d0959b';
                                              } else {
                                                if (((s as any).hour ?? 0) === 16) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3b4251';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#434c5d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#88bfcf';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a2be8c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eacb8b';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cf876f';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#be6169';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24443';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b48eac';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ff4da2';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c5669';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cf876f';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cf959a';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 17) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3a4150';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#434b5c';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#88bece';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a1bd8c';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e8ca8a';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ce866f';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bd6068';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14442';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b38dab';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#fd4ca0';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c5568';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ce866f';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ce9499';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 18) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3a404f';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#424a5b';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#88bece';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a0bc8c';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e7ca8a';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cd866e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bc6067';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c04441';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b28caa';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#fd4b9e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4b5467';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cd866e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#cd9499';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 19) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#383d4b';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#404657';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#86b9c9';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9bb889';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e1c687';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c7826a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#b75d62';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ba413c';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ae88a5';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f84797';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#495063';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c7826a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c89094';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 20) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#323643';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3a404e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#81b1c1';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#93b083';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d7be81';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#bd7c63';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ad565a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#af3b34';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a6819b';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ef3e8d';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#43495a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#bd7c63';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be898c';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 21) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2f323e';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#373c4a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7eacbc';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8eac81';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d1ba7e';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b7785f';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a85355';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a9382f';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a17d96';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea3986';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#404655';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b7785f';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b98587';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 22) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2e323d';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#363b49';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7dabba';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8faa7f';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d1b97d';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b6775f';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a65256';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a93631';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9f7c96';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e73989';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3f4554';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b6775f';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b78487';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 23) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2d313c';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#353a48';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7caab8';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fa97d';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d2b77c';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b6765f';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a55157';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a83433';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9d7c95';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e5388b';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3d4453';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b6765f';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b68387';
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
            } else {
              if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Nord Light') {
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e9f0';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d8dee9';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5e81ac';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7faf63';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d6ae55';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b86a52';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9e3c43';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#7a272b';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9b7b98';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a21756';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3b4250';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b86a52';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#af5a61';
                } else {
                  if ((!((s as any).hour ?? 0))) {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d2d4';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c5c7cd';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4e6d92';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6d9953';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#bd9947';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#9e5843';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#842b33';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#61161c';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#836880';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#870043';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2c3039';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#9e5843';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#94494f';
                  } else {
                    if (((s as any).hour ?? 0) === 1) {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d2d4';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c4c8cd';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4d6d92';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6f9952';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c09847';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#9f5844';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#842b35';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#61161e';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#836982';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#870046';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2c303a';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#9f5844';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#954951';
                    } else {
                      if (((s as any).hour ?? 0) === 2) {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d3d5';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c4c8ce';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4b6e93';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#729951';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c29847';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#a05745';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#852a36';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#62151f';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#826983';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#870048';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2b313a';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#a05745';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#954952';
                      } else {
                        if (((s as any).hour ?? 0) === 3) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d3d5';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c4c8cf';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#496e93';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#749850';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c49748';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#a15746';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#862a38';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#631521';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#826a84';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#87004a';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2b313b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#a15746';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#964854';
                        } else {
                          if (((s as any).hour ?? 0) === 4) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d3d6';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c4c9cf';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#486f93';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#76984e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c69748';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#a25748';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#86293a';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#631422';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#826a85';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#87004d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2b313b';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#a25748';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#964856';
                          } else {
                            if (((s as any).hour ?? 0) === 5) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d5d8db';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c8cdd5';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4c7399';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#789d53';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c99c4b';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#a65b4a';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8b2d3b';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#681824';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#876d89';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#8d004e';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2e353f';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#a65b4a';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9c4c58';
                            } else {
                              if (((s as any).hour ?? 0) === 6) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#dde0e5';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d0d5de';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#547aa2';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7ca65a';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d0a450';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#af624e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#943440';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#711f28';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#907490';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#970c53';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#343b47';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#af624e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a5535d';
                              } else {
                                if (((s as any).hour ?? 0) === 7) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e1e5eb';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d4dae4';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#597da7';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7eaa5f';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d3a953';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b46650';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#993842';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#76232a';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#967894';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9d1255';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#383f4c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b46650';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#aa565f';
                                } else {
                                  if (((s as any).hour ?? 0) === 8) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e2e5eb';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d4dae4';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5a7ea8';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7eab5f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d4aa53';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b46651';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9a3942';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#76242a';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#967895';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9d1355';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#383f4c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b46651';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ab575f';
                                  } else {
                                    if (((s as any).hour ?? 0) === 9) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e2e6ec';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d5dbe5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5a7ea8';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7eac60';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d4aa53';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b56751';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9a3942';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#77242a';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#977995';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9e1355';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#38404d';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b56751';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ab5760';
                                    } else {
                                      if (((s as any).hour ?? 0) === 10) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e3e6ed';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d5dbe6';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5b7fa9';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7eac60';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d4ab53';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b56751';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9b3a42';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#77252a';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#987996';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9f1455';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#39404d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b56751';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac5860';
                                      } else {
                                        if (((s as any).hour ?? 0) === 11) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e3e7ed';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d6dce6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5c7faa';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7ead61';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d5ac54';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b66851';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9c3a42';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#78252a';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#987996';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9f1555';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#39404e';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b66851';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ad5860';
                                        } else {
                                          if (((s as any).hour ?? 0) === 12) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e7ee';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d6dce7';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5c80aa';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7fad61';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d5ac54';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b66851';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9c3b42';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#78262a';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#997a97';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a01556';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3a414e';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b66851';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ad5960';
                                          } else {
                                            if (((s as any).hour ?? 0) === 13) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e8ef';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d7dde8';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5d80ab';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7fae62';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d5ad54';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b76952';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9d3b43';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#79262b';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9a7a97';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a11656';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3a414f';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b76952';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ae5961';
                                            } else {
                                              if (((s as any).hour ?? 0) === 14) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e8ef';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d7dde8';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5d81ab';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7fae62';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d6ad55';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b76952';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9d3c43';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#79272b';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9a7b98';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a11656';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3b424f';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b76952';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ae5a61';
                                              } else {
                                                if (((s as any).hour ?? 0) === 15) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e9f0';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d8dee9';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5e81ac';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7faf63';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d6ae55';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b86a52';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9e3c43';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#7a272b';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9b7b98';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a21756';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3b4250';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b86a52';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#af5a61';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 16) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e8ef';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d8dde8';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5e80ab';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7eaf63';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d5ae55';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b76a51';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9d3c42';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#79272a';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9b7b97';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a11755';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3b424f';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b76a51';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ae5a60';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 17) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e7ee';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d7dce7';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5e7faa';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7dae63';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d3ad54';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b66951';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9c3b41';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#782629';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9a7a96';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a01654';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3a414e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b66951';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ad595f';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 18) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e7ed';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d7dce6';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5f7fa9';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7cad63';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d2ad54';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b56950';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9b3b40';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#772629';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#997995';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a01653';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3a404d';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b56950';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac595e';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 19) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e0e2e7';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d3d7e0';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5d7ba4';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#76a961';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cca951';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#af664c';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#96383c';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#722325';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#957590';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9b104d';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#373d49';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#af664c';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a7565a';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 20) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d8dadd';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cccfd6';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#58739b';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6da15c';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c1a24b';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#a55f45';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8c3234';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#691e1e';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8d6e87';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#910244';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#323641';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#a55f45';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9d4f52';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 21) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d4d5d8';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c8cbd1';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#566f96';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#689d5a';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#bb9f48';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#9f5c41';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#862f30';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#631b1a';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#896b82';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#8c003f';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2f323d';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#9f5c41';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#984c4d';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 22) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d3d4d7';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c7cad0';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#536e94';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6a9c58';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#bc9d48';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#9f5b41';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#862e31';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#63191b';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#876a81';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#8b0040';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2e323b';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#9f5b41';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#974b4e';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 23) {
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d2d3d5';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c6c8ce';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#516d93';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6b9a56';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#bc9b47';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#9e5942';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#852c32';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#62181b';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#856981';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#890042';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#2d313a';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#9e5942';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#964a4f';
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
              } else {
                if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Solarized Dark') {
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                  if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#073642';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#054453';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2aa198';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859900';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b58900';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cb4b16';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc322f';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b82d2d';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6c71c4';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d33682';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#93a1a1';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cb4b16';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf4a5d';
                  } else {
                    if ((!((s as any).hour ?? 0))) {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#02242d';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#00313d';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1f8b83';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#708400';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9d7500';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#af3804';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bf1a20';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9c171e';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#585ea9';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b7206d';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#858a8a';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#af3804';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a4384b';
                    } else {
                      if (((s as any).hour ?? 0) === 1) {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#01242d';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#00323d';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#208b82';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#738300';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9f7400';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b13609';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c11623';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9e1521';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#555fab';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b72170';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#858b8b';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b13609';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a4384d';
                      } else {
                        if (((s as any).hour ?? 0) === 2) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#00252d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#00323d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#228b80';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#768300';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#a27300';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b3350d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c21226';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9f1323';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5160ac';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b72273';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#848b8b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b3350d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a5384f';
                        } else {
                          if (((s as any).hour ?? 0) === 3) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#00252d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#00323d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#248b7f';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#798300';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#a47300';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b53311';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c40c29';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a01026';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#4e61ad';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b62376';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#848b8b';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b53311';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a53852';
                          } else {
                            if (((s as any).hour ?? 0) === 4) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#00252d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#00333d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#268c7e';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7c8200';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#a77200';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b73115';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c5062d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a10d28';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#4a62ae';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b52479';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#848c8b';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b73115';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a63754';
                            } else {
                              if (((s as any).hour ?? 0) === 5) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#002932';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#003642';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#269084';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7e8700';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#a97700';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#bb3714';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ca152d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a61629';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5265b3';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#bc287a';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#879090';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#bb3714';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ab3b55';
                              } else {
                                if (((s as any).hour ?? 0) === 6) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#032f39';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#003d4a';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#29988d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#838f00';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b07f00';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c34017';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d3232f';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#af212c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5d6bbc';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c72f7f';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#8d9898';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c34017';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b5425a';
                                } else {
                                  if (((s as any).hour ?? 0) === 7) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#05333e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#02414e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a9d92';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849400';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b38400';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c74617';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d82b2f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b4272d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#656ec0';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cd3381';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#909d9d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c74617';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ba465c';
                                  } else {
                                    if (((s as any).hour ?? 0) === 8) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#05333e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#03414f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a9d93';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849500';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b38500';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c84617';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d82c2f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b4282d';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#656fc0';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ce3381';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#919d9d';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c84617';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bb475c';
                                    } else {
                                      if (((s as any).hour ?? 0) === 9) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#05333f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#034150';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a9e94';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849500';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b38500';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c84716';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d92d2f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b5292d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#666fc1';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ce3381';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#919e9e';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c84716';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bb475c';
                                      } else {
                                        if (((s as any).hour ?? 0) === 10) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#06343f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#034250';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a9e95';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849600';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48600';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c94816';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d92e2f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b52a2d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#676fc1';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf3481';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#919e9e';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c94816';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc485c';
                                        } else {
                                          if (((s as any).hour ?? 0) === 11) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#063440';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#044251';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a9f95';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859700';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48700';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c94816';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#da2f2f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b62a2d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6870c2';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d03481';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#929f9f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c94816';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc485c';
                                          } else {
                                            if (((s as any).hour ?? 0) === 12) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#063540';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#044351';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a9f96';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859700';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48700';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ca4916';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#da2f2f';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b62b2d';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6970c2';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d13582';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#929f9f';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ca4916';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bd495d';
                                            } else {
                                              if (((s as any).hour ?? 0) === 13) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#063541';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#044352';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2aa097';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859800';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48800';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ca4a16';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db302f';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b72c2d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6a70c3';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d13582';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#92a0a0';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ca4a16';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be495d';
                                              } else {
                                                if (((s as any).hour ?? 0) === 14) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#073641';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#054452';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2aa097';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859800';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b58800';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cb4a16';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db312f';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b72c2d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6b71c3';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d23682';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#93a0a0';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cb4a16';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be4a5d';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 15) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#073642';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#054453';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2aa198';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859900';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b58900';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cb4b16';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc322f';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b82d2d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6c71c4';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d33682';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#93a1a1';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cb4b16';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf4a5d';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 16) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#083642';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#064453';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2aa098';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849901';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48900';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ca4b15';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db322e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b72d2c';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6d70c3';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d23681';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#93a0a0';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ca4b15';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be4a5c';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 17) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#083541';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#074352';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a9f97';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#829802';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b28800';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c84b13';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d9322d';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b52d2b';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6d6fc1';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d1357f';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#939f9f';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c84b13';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bd495b';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 18) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#093440';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#084251';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#299f97';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#819803';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b18800';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c74b12';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d8332b';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b52d2a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6d6fc0';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d1347e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#929f9f';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c74b12';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc495a';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 19) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#07313c';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#063e4d';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#249a94';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7a9400';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#aa8500';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c0490a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d23026';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ae2a25';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6c6aba';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cc3077';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#8f9a9b';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c0490a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b74655';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 20) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#042a35';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#033746';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1c928e';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#708d00';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9f7e00';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b54300';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c62a1d';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a4241d';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6762b0';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c3276e';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#8a9292';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b54300';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ad404d';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 21) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#032631';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#023442';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#178e8a';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#698900';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#997b00';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ae4100';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c02817';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9e2218';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#665eaa';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#be2268';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#878e8e';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ae4100';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a73c47';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 22) {
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#032630';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#013340';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#198d88';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6c8700';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9a7900';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#af3e00';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c0231a';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9d1e1a';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#625eaa';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#bc216a';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#868d8d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#af3e00';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a63b49';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 23) {
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#02252e';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#00323f';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1c8c85';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6e8600';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9b7700';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#af3b00';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bf1f1d';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9d1b1c';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5d5eaa';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ba206b';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#858c8c';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#af3b00';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a53a4a';
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
                } else {
                  if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Solarized Light') {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                    if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e4e4';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cdcdcd';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#268bd2';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859900';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b58900';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cb4b16';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc322f';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b82d2d';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6c71c4';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d33682';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#586e75';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cb4b16';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf4a5d';
                    } else {
                      if ((!((s as any).hour ?? 0))) {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#cececd';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#b7b7b7';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0c76b7';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#708400';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9d7500';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#af3804';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bf1a20';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9c171e';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#585ea9';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b7206d';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4b595e';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#af3804';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a4384b';
                      } else {
                        if (((s as any).hour ?? 0) === 1) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#cecece';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#b7b7b7';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0077b7';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#738300';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9f7400';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b13609';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c11623';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9e1521';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#555fab';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b72170';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4b5a5e';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b13609';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a4384d';
                        } else {
                          if (((s as any).hour ?? 0) === 2) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#cecece';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#b8b8b8';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0078b7';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#768300';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#a27300';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b3350d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c21226';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9f1323';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5160ac';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b72273';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4b5a5e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b3350d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a5384f';
                          } else {
                            if (((s as any).hour ?? 0) === 3) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#cecece';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#b8b8b8';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0079b8';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#798300';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#a47300';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b53311';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c40c29';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a01026';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#4e61ad';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b62376';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4b5a5f';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b53311';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a53852';
                            } else {
                              if (((s as any).hour ?? 0) === 4) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#cfcfcf';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#b8b8b8';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0079b8';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7c8200';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#a77200';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b73115';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c5062d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a10d28';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#4a62ae';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b52479';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4a5b5f';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b73115';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a63754';
                              } else {
                                if (((s as any).hour ?? 0) === 5) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d3d3d3';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#bcbcbc';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#007dbd';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7e8700';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#a97700';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#bb3714';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ca152d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a61629';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5265b3';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#bc287a';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4d5f63';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#bb3714';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ab3b55';
                                } else {
                                  if (((s as any).hour ?? 0) === 6) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#dbdbdb';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c4c4c4';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0084c7';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#838f00';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b07f00';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c34017';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d3232f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#af212c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5d6bbc';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c72f7f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#52666c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c34017';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b5425a';
                                  } else {
                                    if (((s as any).hour ?? 0) === 7) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e0e0e0';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c9c9c9';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1788cd';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849400';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b38400';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c74617';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d82b2f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b4272d';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#656ec0';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cd3381';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#556a70';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c74617';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ba465c';
                                    } else {
                                      if (((s as any).hour ?? 0) === 8) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e0e0e0';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c9c9c9';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1988cd';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849500';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b38500';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c84617';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d82c2f';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b4282d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#656fc0';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ce3381';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#566b71';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c84617';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bb475c';
                                      } else {
                                        if (((s as any).hour ?? 0) === 9) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e1e1e1';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cacaca';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1b88ce';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849500';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b38500';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c84716';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d92d2f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b5292d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#666fc1';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ce3381';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#566b72';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c84716';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bb475c';
                                        } else {
                                          if (((s as any).hour ?? 0) === 10) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e1e1e1';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cacaca';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1d89cf';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849600';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48600';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c94816';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d92e2f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b52a2d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#676fc1';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf3481';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#566c72';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c94816';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc485c';
                                          } else {
                                            if (((s as any).hour ?? 0) === 11) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e2e2e2';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cbcbcb';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1f89cf';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859700';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48700';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c94816';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#da2f2f';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b62a2d';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6870c2';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d03481';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#576c73';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c94816';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc485c';
                                            } else {
                                              if (((s as any).hour ?? 0) === 12) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e2e2e2';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cbcbcb';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#218ad0';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859700';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48700';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ca4916';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#da2f2f';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b62b2d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6970c2';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d13582';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#576d73';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ca4916';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bd495d';
                                              } else {
                                                if (((s as any).hour ?? 0) === 13) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e3e3e3';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cccccc';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#238ad1';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859800';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48800';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ca4a16';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db302f';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b72c2d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6a70c3';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d13582';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#576d74';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ca4a16';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be495d';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 14) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e3e3e3';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cccccc';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#248bd1';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859800';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b58800';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cb4a16';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db312f';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b72c2d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6b71c3';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d23682';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#586e74';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cb4a16';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be4a5d';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 15) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e4e4';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cdcdcd';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#268bd2';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859900';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b58900';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cb4b16';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc322f';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b82d2d';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6c71c4';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d33682';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#586e75';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cb4b16';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf4a5d';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 16) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e3e3e3';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cdcccc';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#288ad1';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#849901';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b48900';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ca4b15';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db322e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b72d2c';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6d70c3';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d23681';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#586d74';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ca4b15';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be4a5c';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 17) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e3e3e3';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cccccc';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2b89d0';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#829802';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b28800';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c84b13';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d9322d';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b52d2b';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6d6fc1';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d1357f';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#586d73';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c84b13';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bd495b';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 18) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e2e2e2';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cbcbcb';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2d89cf';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#819803';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b18800';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c74b12';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d8332b';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b52d2a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6d6fc0';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d1347e';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#586c73';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c74b12';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc495a';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 19) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#dedede';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#c7c7c7';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2e84ca';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7a9400';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#aa8500';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c0490a';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d23026';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ae2a25';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6c6aba';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cc3077';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#55686e';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#c0490a';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b74655';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 20) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d5d5d5';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#bfbfbf';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2c7cc0';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#708d00';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9f7e00';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#b54300';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c62a1d';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a4241d';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6762b0';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c3276e';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#506066';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#b54300';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ad404d';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 21) {
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d1d1';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#bababa';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2d77bb';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#698900';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#997b00';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ae4100';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c02817';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9e2218';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#665eaa';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#be2268';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4e5c62';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ae4100';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a73c47';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 22) {
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d0d0d0';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#b9b9b9';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2477ba';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6c8700';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9a7900';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#af3e00';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c0231a';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9d1e1a';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#625eaa';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#bc216a';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4d5b61';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#af3e00';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a63b49';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 23) {
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#cfcfcf';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#b8b8b8';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1b77b8';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#6e8600';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#9b7700';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#af3b00';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bf1f1d';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#9d1b1c';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5d5eaa';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ba206b';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c5a5f';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#af3b00';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a53a4a';
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
                  } else {
                    if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Tokyo Night') {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                      if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#24283b';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#414868';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7aa2f7';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ece6a';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0af68';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ff9e64';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f7768e';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d4556e';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bb9af7';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f7768e';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#565f89';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ff9e64';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c1868d';
                      } else {
                        if ((!((s as any).hour ?? 0))) {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#151826';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#303650';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#678ddb';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8ab75a';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c79a59';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e38a55';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#da647a';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b8435b';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a486dc';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#da647a';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#444c70';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e38a55';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a6747a';
                        } else {
                          if (((s as any).hour ?? 0) === 1) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#151826';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2f3751';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#648edc';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8db759';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c99a5a';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e58a56';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db647d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b9435e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a187dd';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#db647d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#434d71';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e58a56';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a6747b';
                          } else {
                            if (((s as any).hour ?? 0) === 2) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#141927';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2e3752';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5f8fdd';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#90b757';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ca995a';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e78958';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db647f';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b94360';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9f88df';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#db647f';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#424d71';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e78958';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a7747c';
                            } else {
                              if (((s as any).hour ?? 0) === 3) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#141927';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2d3852';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5b90dd';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#93b656';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cc995b';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e98859';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#db6382';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b94362';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9c89e1';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#db6382';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#404e72';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e98859';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a7747d';
                              } else {
                                if (((s as any).hour ?? 0) === 4) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#131928';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2c3853';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5791de';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#96b654';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ce985c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ea875b';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc6484';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ba4365';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#998ae3';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dc6484';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3f4e73';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ea875b';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a8747e';
                                } else {
                                  if (((s as any).hour ?? 0) === 5) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#171c2c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#313b57';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5f94e3';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#97bb59';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d29d5e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ef8c5d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e16786';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf4666';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a08ee7';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e16786';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#445277';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ef8c5d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ad7881';
                                  } else {
                                    if (((s as any).hour ?? 0) === 6) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1d2233';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#38425f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6a9bed';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9cc461';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d9a563';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f79461';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ec6e8b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c94d6b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ac94ef';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ec6e8b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c5880';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f79461';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b77f87';
                                    } else {
                                      if (((s as any).hour ?? 0) === 7) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#202537';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3d4564';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#729ff2';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9dc965';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ddaa66';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fb9963';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f2728d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cf516d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b397f3';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f2728d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#515c85';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fb9963';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc828a';
                                      } else {
                                        if (((s as any).hour ?? 0) === 8) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#212538';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3d4564';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#739ff3';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9dca66';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ddab66';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fc9a63';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f2738d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cf526d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b497f4';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f2738d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#525c85';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fc9a63';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bc838b';
                                        } else {
                                          if (((s as any).hour ?? 0) === 9) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#212638';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3e4665';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#74a0f3';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9dca66';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#deac66';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fc9a63';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f3738d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d0526d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b598f4';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f3738d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#525d86';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fc9a63';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bd838b';
                                          } else {
                                            if (((s as any).hour ?? 0) === 10) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#222639';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3e4665';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#75a0f4';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9dcb67';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#deac67';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fd9b63';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f4748d';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d1536d';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b698f5';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4748d';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#535d86';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fd9b63';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be848b';
                                            } else {
                                              if (((s as any).hour ?? 0) === 11) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#222739';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3f4666';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#76a0f5';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ecc68';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dead67';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fd9c63';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f4748d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d1536d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b799f5';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4748d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#535d87';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fd9c63';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be848c';
                                              } else {
                                                if (((s as any).hour ?? 0) === 12) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#23273a';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3f4766';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#77a1f5';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ecc68';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dfad67';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe9c63';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f5758d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d2546e';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b899f6';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5758d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#545e87';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe9c63';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf858c';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 13) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#23273a';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#404767';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#78a1f6';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ecd69';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dfae67';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe9d64';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f6758e';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d3546e';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b999f6';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f6758e';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#555e88';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe9d64';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c0858c';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 14) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#24283b';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#404867';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#79a2f6';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ecd69';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0ae68';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ff9d64';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f6768e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d3556e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ba9af7';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f6768e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#555f88';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ff9d64';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c0868d';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 15) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#24283b';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#414868';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7aa2f7';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ece6a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0af68';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ff9e64';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f7768e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d4556e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bb9af7';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f7768e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#565f89';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ff9e64';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c1868d';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 16) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#24283a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#414867';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7ba1f6';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9dce6a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dfaf68';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe9e63';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f6768d';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d3556d';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bb99f6';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f6768d';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#565e88';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe9e63';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c0868c';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 17) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#242739';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#414766';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7ba0f4';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9bcd6a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ddae67';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fc9d63';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f5758c';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d2546c';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bb98f4';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5758c';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#565e87';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fc9d63';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf858b';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 18) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#232639';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#414665';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7ca0f4';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9acc6b';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dcae67';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fb9d62';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f4758b';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d1546b';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bb98f3';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4758b';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#565d86';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fb9d62';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be858b';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 19) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#212334';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#3e4260';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7b9bee';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#94c869';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d6aa63';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f49a5d';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ef7185';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#cc5165';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b993ec';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ef7185';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#545981';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f49a5d';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b98186';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 20) {
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1c1d2d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#393c58';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7792e3';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8ac064';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cba35d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e99356';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e46b7c';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24a5d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b38be1';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e46b7c';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4e5278';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e99356';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#af7a7e';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 21) {
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#191a28';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#363853';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#778edd';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#84bc62';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c59f5a';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e39052';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#df6776';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bc4757';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b186db';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#df6776';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c4e73';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e39052';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#aa7779';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 22) {
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#181928';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#343752';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#728edd';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#86bb60';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c69e5a';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e38e53';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dd6678';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bb4659';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ad86db';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dd6678';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#494d72';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e38e53';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a97679';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 23) {
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#161927';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#323751';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#6d8ddc';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#88b95d';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#c69c5a';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e38c54';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc6579';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ba445a';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a986db';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dc6579';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#474d71';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e38c54';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#a77579';
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
                    } else {
                      if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Tokyo Night Light') {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                        if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e6e7ed';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6c6e75';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2959aa';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#385f0d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8f5e15';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#965027';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8c4351';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6c2f3a';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5a3e8e';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b65c7a';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6e75';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#965027';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#955b5b';
                        } else {
                          if ((!((s as any).hour ?? 0))) {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d1d1';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5a5b5c';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0f4790';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#274b00';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#774c06';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#7d3e19';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#73333f';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#541f29';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#452d75';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9b4b66';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a5b5c';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#7d3e19';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#7b4a4a';
                          } else {
                            if (((s as any).hour ?? 0) === 1) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d1d1';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5a5b5d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#004791';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#294b00';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#794b07';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#7e3e1b';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#733341';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#541f2b';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#432e77';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9b4b68';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a5b5d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#7e3e1b';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#7c4a4b';
                            } else {
                              if (((s as any).hour ?? 0) === 2) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d1d2';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5a5b5e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#004892';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#2c4b00';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#7a4b08';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#7f3d1c';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#733342';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#541f2c';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#402f79';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9b4b6a';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a5b5e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#7f3d1c';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#7c4a4c';
                              } else {
                                if (((s as any).hour ?? 0) === 3) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d1d3';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5a5b5e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#004993';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#2e4b00';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#7c4a09';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#813d1d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#743343';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#551f2d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#3d307a';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9b4b6b';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a5b5e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#813d1d';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#7d4a4d';
                                } else {
                                  if (((s as any).hour ?? 0) === 4) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d1d2d3';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5a5c5f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#004a94';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#304b00';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#7e490b';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#823c1f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#743345';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#551f2e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#39317c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9b4c6d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a5c5f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#823c1f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#7e4a4e';
                                  } else {
                                    if (((s as any).hour ?? 0) === 5) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d6d6d9';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5e5f63';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#004d98';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#314f00';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#814e0d';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#864020';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#793647';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#5a2330';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#41347f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a14f70';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5e5f63';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#864020';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#824d51';
                                    } else {
                                      if (((s as any).hour ?? 0) === 6) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#dddee2';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#65676c';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0553a1';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#365702';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#895511';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#8e4824';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#823c4d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#632936';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#4c3987';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ab5576';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#65676c';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#8e4824';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#8b5456';
                                      } else {
                                        if (((s as any).hour ?? 0) === 7) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e2e3e8';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#686a70';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1c56a6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#375b07';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8c5a13';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#924c26';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#87404f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#672c38';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#533c8b';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b15978';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#686a70';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#924c26';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#905859';
                                        } else {
                                          if (((s as any).hour ?? 0) === 8) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e2e3e8';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#696b71';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1e57a6';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#375b08';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8c5a14';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#934c26';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#88404f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#682c38';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#543c8b';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b15978';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#696b71';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#934c26';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#915859';
                                          } else {
                                            if (((s as any).hour ?? 0) === 9) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e3e4e9';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#696b72';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1f57a7';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#375c09';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8d5b14';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#934d26';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#88414f';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#692d38';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#553c8b';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b25a78';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#696b72';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#934d26';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#915859';
                                            } else {
                                              if (((s as any).hour ?? 0) === 10) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e3e4ea';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6a6c72';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2157a7';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#375c09';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8d5b14';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#944d26';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#894150';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#692d39';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#563d8c';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b35a79';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6a6c72';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#944d26';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#92595a';
                                              } else {
                                                if (((s as any).hour ?? 0) === 11) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e5ea';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6a6c73';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2358a8';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#385d0a';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8d5c14';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#944e26';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8a4150';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6a2d39';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#573d8c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b35a79';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6a6c73';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#944e26';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#93595a';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 12) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e5eb';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6b6d73';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2458a8';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#385d0b';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8e5c14';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#954e27';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8a4250';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6a2e39';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#573d8d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b45b79';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6d73';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#954e27';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#935a5a';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 13) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e6ec';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6b6d74';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2658a9';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#385e0c';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8e5d15';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#954f27';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8b4250';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6b2e39';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#583d8d';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b55b79';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6d74';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#954f27';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#945a5a';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 14) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e6ec';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6c6e74';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2859a9';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#385e0c';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8f5d15';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#964f27';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8b4351';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6b2f3a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#593e8e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b55c7a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6e74';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#964f27';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#945b5b';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 15) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e6e7ed';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6c6e75';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2959aa';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#385f0d';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8f5e15';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#965027';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8c4351';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6c2f3a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5a3e8e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b65c7a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6e75';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#965027';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#955b5b';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 16) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e6e6ec';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6c6e74';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2b58a9';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#375f0d';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8e5e15';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#955026';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8b4350';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6b2f39';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5a3d8d';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b55c79';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6e74';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#955026';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#945b5a';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 17) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e6eb';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6b6d73';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2c57a8';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#365e0e';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8c5d14';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#944f26';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8a424f';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6a2e38';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5a3c8b';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b45b78';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6d73';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#944f26';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#935a59';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 18) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e5ea';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6b6c72';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2e57a7';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#355d0e';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8b5d14';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#934f25';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#89424e';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#692e38';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5b3c8a';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b45b77';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6c72';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#934f25';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#925a59';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 19) {
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e0e1e4';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#67686d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2e52a1';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#2f5a0c';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#865a0f';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#8d4c21';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#843f4a';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#652b34';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#593785';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#af5771';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#67686d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#8d4c21';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#8d5655';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 20) {
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d8d8da';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#616165';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2b4b97';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#275308';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#7c5408';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#83461b';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#7b3942';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#5c252d';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#53307b';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a55169';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#616165';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#83461b';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#84504e';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 21) {
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d4d4d5';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5d5d60';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2c4792';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#214f06';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#765103';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#7d4317';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#76353e';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#572229';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#512c75';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#a14d64';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5d5d60';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#7d4317';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#7f4d49';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 22) {
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d3d3d4';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5c5c5f';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#244791';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#234e04';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#764f04';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#7d4218';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#75343e';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#562129';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#4d2c75';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9f4c64';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5c5c5f';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#7d4218';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#7e4c4a';
                                                                      } else {
                                                                        if (((s as any).hour ?? 0) === 23) {
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#d2d2d2';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#5b5b5e';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1b4790';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#254d01';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#774d05';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#7d4019';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#74333f';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#552029';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#492d75';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#9d4b65';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5b5b5e';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#7d4019';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#7c4b4a';
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
                      } else {
                        if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Rosé Pine') {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                          if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1f1d2e';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#26233a';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#31748f';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8dd3c7';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6c177';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ebbcba';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e45b83';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24b6a';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a7e7';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#eb6f92';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6e6a86';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6c177';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c6808c';
                          } else {
                            if ((!((s as any).hour ?? 0))) {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#0f0b1a';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#161325';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#265f76';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#80bbb1';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dcac68';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cfa8a6';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c8496f';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a73957';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ad93cc';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d7e';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a576d';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dcac68';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ab6e78';
                            } else {
                              if (((s as any).hour ?? 0) === 1) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#0f0b1b';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#151426';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#256076';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#80bcb0';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#deab69';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cfa8a7';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c84972';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a73959';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ab94ce';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d80';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a586e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#deab69';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ab6e7a';
                              } else {
                                if (((s as any).hour ?? 0) === 2) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#0e0c1b';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#151426';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#236076';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#81bcaf';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0ab69';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d0a8a8';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c84974';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a7395c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#aa94cf';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d82';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#59586f';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e0ab69';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac6e7b';
                                } else {
                                  if (((s as any).hour ?? 0) === 3) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#0e0c1c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#141527';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#216176';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#81bcaf';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e2aa6a';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d1a8a9';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c84977';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a7395e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a895d0';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d85';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#595870';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e2aa6a';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac6e7c';
                                  } else {
                                    if (((s as any).hour ?? 0) === 4) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#0e0d1c';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#141527';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#206176';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#82bdae';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e4aa6b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d1a9aa';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c8497a';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a83960';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a696d2';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d87';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#585970';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e4aa6b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac6e7e';
                                    } else {
                                      if (((s as any).hour ?? 0) === 5) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#121120';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#17182b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#23657b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#84c1b3';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e8af6d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d6adad';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ce4d7b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ad3d62';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ad99d6';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d56189';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5d5c75';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e8af6d';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b17281';
                                      } else {
                                        if (((s as any).hour ?? 0) === 6) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#181727';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#1e1d32';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#296c85';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#89cabc';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#efb772';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e0b4b4';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d85480';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b74467';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b7a0df';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#df688f';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#65637d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#efb772';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bb7987';
                                        } else {
                                          if (((s as any).hour ?? 0) === 7) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1b1a2a';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#222036';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2d708a';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8bcfc2';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f3bc75';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e6b8b7';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#de5782';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bd4769';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bea4e3';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e56c90';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#696782';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f3bc75';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c17c8a';
                                          } else {
                                            if (((s as any).hour ?? 0) === 8) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1c1b2b';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#232137';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2e718a';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8bcfc2';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f3bd75';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e6b9b7';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#df5882';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bd4869';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bea4e4';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e66c91';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6a6782';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f3bd75';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c17d8a';
                                            } else {
                                              if (((s as any).hour ?? 0) === 9) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1c1b2b';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#232137';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2e718b';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8cd0c3';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f4bd75';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e7b9b8';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e05882';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#be4869';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bfa5e4';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e76c91';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6783';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4bd75';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c27d8a';
                                              } else {
                                                if (((s as any).hour ?? 0) === 10) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1d1b2c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#242138';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2f728c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8cd0c4';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f4be76';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e8bab8';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e05982';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf4969';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c0a5e5';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e76d91';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6883';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4be76';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c37e8a';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 11) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1d1c2c';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#242238';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2f728c';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8cd1c4';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f4bf76';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e8bab9';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e15982';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf4969';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c1a5e5';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e86d91';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6884';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4bf76';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c37e8b';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 12) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1e1c2d';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#252239';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#30738d';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8cd1c5';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f5bf76';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e9bbb9';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e25a83';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c04a69';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c2a6e6';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e96e91';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6984';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5bf76';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c47f8b';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 13) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1e1c2d';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#252239';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#30738e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8dd2c6';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f5c076';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eabbb9';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e35a83';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14a6a';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c2a6e6';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea6e92';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6d6985';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5c076';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c57f8b';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 14) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1f1d2e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#25233a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#31748e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8dd2c6';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6c077';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eabcba';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e35b83';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14b6a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c3a7e7';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea6f92';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6d6a85';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6c077';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c5808c';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 15) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1f1d2e';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#26233a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#31748f';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8dd3c7';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6c177';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ebbcba';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e45b83';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24b6a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a7e7';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#eb6f92';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6e6a86';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6c177';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c6808c';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 16) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1f1d2d';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#262339';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#31738e';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8dd2c7';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f5c177';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#eabcb9';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e35b82';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14b69';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a6e6';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea6f91';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6e6a85';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5c177';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c5808b';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 17) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1e1c2c';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#252238';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#32728d';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8cd1c6';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f3c076';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e9bbb8';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e25a80';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c04a68';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c3a5e4';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e96e8f';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6d6984';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f3c076';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c47f8a';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 18) {
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1e1c2c';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#252137';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#33728d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8cd1c6';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f2c076';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e8bbb8';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e15a7f';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf4a67';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c3a5e3';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e86e8e';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6d6883';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f2c076';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c37f89';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 19) {
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1b1828';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#221e33';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#316e88';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#89ccc3';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ecbc72';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e2b7b3';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc5679';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ba4661';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c0a0dd';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e36a88';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6a647e';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ecbc72';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be7b84';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 20) {
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#161220';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#1d182b';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2d6680';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#83c4bb';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e1b56c';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d8afac';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d24f70';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b04059';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b998d3';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d9637f';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#635d75';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e1b56c';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b5747c';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 21) {
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#130e1c';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#1a1527';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2c627b';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7fbfb8';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dab169';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d3aba7';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cd4c6a';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ab3d53';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b694cd';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d4607a';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#605970';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dab169';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#af7177';
                                                                      } else {
                                                                        if (((s as any).hour ?? 0) === 22) {
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#120d1c';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#191527';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a617a';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7fbeb5';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dbaf68';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d1aaa7';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cb4b6c';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#aa3b55';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b394cd';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d25f7b';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5e596f';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dbaf68';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ae7078';
                                                                        } else {
                                                                          if (((s as any).hour ?? 0) === 23) {
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#100c1b';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#171426';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#286078';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7fbdb3';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dcae68';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d0a9a7';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ca4a6e';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a83a56';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b093cc';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d15e7c';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5c586e';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dcae68';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac6f78';
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
                        } else {
                          if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Rosé Pine Moon') {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                            if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2a273f';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#393552';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3e8fb0';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fd2c6';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6c177';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ea9a97';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e45b83';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24b6a';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a7e7';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#eb6f92';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6e6a86';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6c177';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c6808c';
                            } else {
                              if ((!((s as any).hour ?? 0))) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#19172a';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#28243c';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#337a96';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#81bab0';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dcac68';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ce8784';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c8496f';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a73957';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ad93cc';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d7e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a576d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dcac68';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ab6e78';
                              } else {
                                if (((s as any).hour ?? 0) === 1) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#19182a';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#27253c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#317a96';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#82bbaf';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#deab69';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cf8786';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c84972';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a73959';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ab94ce';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d80';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5a586e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#deab69';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ab6e7a';
                                } else {
                                  if (((s as any).hour ?? 0) === 2) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#18182b';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#26253d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2f7b96';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#82bbaf';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0ab69';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cf8787';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c84974';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a7395c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#aa94cf';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d82';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#59586f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e0ab69';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac6e7b';
                                  } else {
                                    if (((s as any).hour ?? 0) === 3) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#18182c';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#25263e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2d7b96';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#83bbae';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e2aa6a';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d08789';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c84977';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a7395e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a895d0';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d85';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#595870';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e2aa6a';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac6e7c';
                                    } else {
                                      if (((s as any).hour ?? 0) === 4) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#17192c';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#25263e';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2b7c96';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#84bcad';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e4aa6b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d1878a';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#c8497a';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a83960';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#a696d2';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cf5d87';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#585970';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e4aa6b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac6e7e';
                                      } else {
                                        if (((s as any).hour ?? 0) === 5) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1b1c30';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#292942';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2f809b';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#86c0b2';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e8af6d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d68b8d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ce4d7b';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ad3d62';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ad99d6';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d56189';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5d5c75';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e8af6d';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b17281';
                                        } else {
                                          if (((s as any).hour ?? 0) === 6) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#222137';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#302f4a';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3687a5';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8bc9bb';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#efb772';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e09292';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d85480';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b74467';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b7a0df';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#df688f';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#65637d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#efb772';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bb7987';
                                          } else {
                                            if (((s as any).hour ?? 0) === 7) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#26243b';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#35324e';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3a8bab';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8dcec1';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f3bc75';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e59695';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#de5782';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bd4769';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bea4e3';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e56c90';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#696782';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f3bc75';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c17c8a';
                                            } else {
                                              if (((s as any).hour ?? 0) === 8) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#26253c';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#35324f';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3a8cab';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8dcec1';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f3bd75';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e69795';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#df5882';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bd4869';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bea4e4';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e66c91';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6a6782';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f3bd75';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c17d8a';
                                              } else {
                                                if (((s as any).hour ?? 0) === 9) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#27253c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#36334f';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3b8cac';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8ecfc2';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f4bd75';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e69795';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e05882';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#be4869';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bfa5e4';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e76c91';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6783';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4bd75';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c27d8a';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 10) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#27253d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#363350';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3b8dad';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8ecfc3';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f4be76';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e79896';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e05982';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf4969';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c0a5e5';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e76d91';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6b6883';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4be76';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c37e8a';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 11) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#28263d';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#373450';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3c8dad';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8ed0c3';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f4bf76';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e79896';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e15982';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf4969';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c1a5e5';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e86d91';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6884';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f4bf76';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c37e8b';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 12) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#28263e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#373451';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3c8eae';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8ed0c4';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f5bf76';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e89996';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e25a83';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c04a69';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c2a6e6';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e96e91';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6984';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5bf76';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c47f8b';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 13) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#29263e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#383451';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3d8eaf';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fd1c5';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f5c076';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e99996';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e35a83';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14a6a';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c2a6e6';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea6e92';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6d6985';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5c076';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c57f8b';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 14) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#29273f';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#383552';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3d8faf';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fd1c5';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6c077';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e99a97';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e35b83';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14b6a';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c3a7e7';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea6f92';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6d6a85';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6c077';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c5808c';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 15) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2a273f';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#393552';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3e8fb0';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fd2c6';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6c177';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ea9a97';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e45b83';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24b6a';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a7e7';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#eb6f92';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6e6a86';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6c177';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c6808c';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 16) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2a273e';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#393551';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3f8eaf';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fd1c6';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f5c177';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e99a96';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e35b82';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c14b69';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a6e6';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea6f91';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6e6a85';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5c177';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c5808b';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 17) {
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#29263d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#383450';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3f8dae';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8ed0c5';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f3c076';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e89995';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e25a80';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c04a68';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c3a5e4';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e96e8f';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6d6984';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f3c076';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c47f8a';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 18) {
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#29253c';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#38334f';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#408dae';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8ed0c5';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f2c076';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e79994';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e15a7f';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#bf4a67';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c3a5e3';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e86e8e';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6d6883';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f2c076';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c37f89';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 19) {
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#262238';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#36304b';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3e88a9';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8bcbc1';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ecbc72';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#e19590';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc5679';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ba4661';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c0a0dd';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#e36a88';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6a647e';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ecbc72';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#be7b84';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 20) {
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#211c30';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#302942';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3b80a0';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#85c3ba';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e1b56c';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d78e88';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#d24f70';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b04059';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b998d3';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d9637f';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#635d75';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e1b56c';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#b5747c';
                                                                      } else {
                                                                        if (((s as any).hour ?? 0) === 21) {
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1e192c';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2d263e';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#397c9c';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#81beb7';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dab169';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d18b83';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cd4c6a';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ab3d53';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b694cd';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d4607a';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#605970';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dab169';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#af7177';
                                                                        } else {
                                                                          if (((s as any).hour ?? 0) === 22) {
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1d182b';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#2b263d';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#377b9a';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#81bdb4';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dbaf68';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d08983';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#cb4b6c';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#aa3b55';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b394cd';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d25f7b';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5e596f';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dbaf68';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ae7078';
                                                                          } else {
                                                                            if (((s as any).hour ?? 0) === 23) {
                                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1b182a';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#29253c';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#357a98';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#81bcb2';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dcae68';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cf8884';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ca4a6e';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#a83a56';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b093cc';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d15e7c';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#5c586e';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dcae68';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#ac6f78';
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
                          } else {
                            if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Rosé Pine Dawn') {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                              if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fffaf3';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f2e9e1';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#286983';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4d9a8e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ea9d34';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d7827e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#b0526f';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8f3f56';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#907aa9';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dd7fa5';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9893a5';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ea9d34';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9d5958';
                              } else {
                                if ((!((s as any).hour ?? 0))) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e4e2';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d7d3d0';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1d556b';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#418479';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d08925';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#bb706c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#95415c';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#752f44';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#7a6790';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c26d8f';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#837f8b';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d08925';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#834847';
                                } else {
                                  if (((s as any).hour ?? 0) === 1) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e5e4e2';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d8d3d0';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1c556b';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#428479';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d28826';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#bc6f6e';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#96415d';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#762f45';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#796891';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c16d91';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#827f8c';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d28826';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#844848';
                                  } else {
                                    if (((s as any).hour ?? 0) === 2) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e6e4e2';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d8d4d0';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1a566b';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#438478';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d58728';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#bd6f6f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#96415f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#762f47';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#786892';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c16d93';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#82808d';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d58728';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#84484a';
                                    } else {
                                      if (((s as any).hour ?? 0) === 3) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e6e4e2';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d9d4d0';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#18566b';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#448577';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d7862a';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#be6f71';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#964161';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#762f48';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#776993';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c16e95';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#82808e';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d7862a';
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#85484b';
                                      } else {
                                        if (((s as any).hour ?? 0) === 4) {
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e7e4e2';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#dad4d0';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#16576b';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#448576';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#da852c';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#be6f72';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#964263';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#762f4a';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#766994';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c16e97';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#82808e';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#da852c';
                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#85484c';
                                        } else {
                                          if (((s as any).hour ?? 0) === 5) {
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#ece9e5';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#dfd8d4';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1a5a70';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#46897b';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#dd8a2d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c37374';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9b4565';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#7b324c';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#7b6d99';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c7729a';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#878493';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#dd8a2d';
                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#8a4b4e';
                                          } else {
                                            if (((s as any).hour ?? 0) === 6) {
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#f5f1ec';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#e8e0da';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#206279';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4a9184';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e49331';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cd7a7a';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a54b6b';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#853852';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8573a1';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d178a0';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#8f8b9c';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e49331';
                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#935254';
                                            } else {
                                              if (((s as any).hour ?? 0) === 7) {
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#faf6f0';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#ede5de';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#24657e';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4c9689';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e79833';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d27e7c';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ab4f6d';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8a3c54';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8a77a5';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d77ca3';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#938fa0';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e79833';
                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#985556';
                                              } else {
                                                if (((s as any).hour ?? 0) === 8) {
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fbf6f0';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#eee5de';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#25667f';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4c968a';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e89933';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d37f7c';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ab4f6d';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8b3c54';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8b77a6';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d87ca3';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9490a1';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e89933';
                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#995656';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 9) {
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fbf7f1';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#eee6df';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#25667f';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4c978a';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e89933';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d37f7d';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ac506e';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8b3d54';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8c78a6';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d97da3';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9590a2';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e89933';
                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#995656';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 10) {
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fcf7f1';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#efe6df';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#266780';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4c978b';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e89a33';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d4807d';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ad506e';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8c3d55';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8c78a7';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d97da4';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9591a2';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e89a33';
                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9a5757';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 11) {
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fdf8f1';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f0e7df';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#266780';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4c988b';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e99a33';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d5807d';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ad506e';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8c3d55';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8d78a7';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#da7da4';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9691a3';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e99a33';
                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9b5757';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 12) {
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fdf8f2';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f0e7e0';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#276881';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4d988c';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e99b34';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d5817d';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ae516e';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8d3e55';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8e79a8';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#db7ea4';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9692a3';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e99b34';
                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9b5857';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 13) {
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fef9f2';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f1e8e0';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#276882';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4d998d';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e99c34';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d6817e';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#af516f';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8e3e55';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8f79a8';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dc7ea4';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9792a4';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e99c34';
                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9c5857';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 14) {
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fef9f3';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f1e8e1';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#286982';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4d998d';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ea9c34';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d6827e';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#af526f';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8e3f56';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8f7aa9';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dc7fa5';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9793a4';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ea9c34';
                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9c5958';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 15) {
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fffaf3';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f2e9e1';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#286983';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4d9a8e';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ea9d34';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d7827e';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#b0526f';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8f3f56';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#907aa9';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dd7fa5';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9893a5';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ea9d34';
                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9d5958';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 16) {
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fefaf3';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f1e9e1';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#296882';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4d998e';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e99d33';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d6827d';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#af526e';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8e3f55';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9079a8';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dc7fa4';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9893a4';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e99d33';
                                                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9c5957';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 17) {
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fdf9f2';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f0e8e0';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#296781';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4c988d';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e79c33';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d5817c';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ae516d';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8d3e54';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8f79a7';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#db7ea3';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9792a3';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e79c33';
                                                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9b5856';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 18) {
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fcf8f2';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#efe7e0';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2a6781';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4c988d';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e69c32';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d4817b';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ad516c';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8c3e53';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8f78a6';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#db7ea2';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9691a2';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#e69c32';
                                                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9a5856';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 19) {
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#f7f4ef';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#eae3dc';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#28637c';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#49948a';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#df992e';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ce7d77';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#a94d67';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#883b4e';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8c74a0';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d67a9c';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#938d9d';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#df992e';
                                                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#955551';
                                                                      } else {
                                                                        if (((s as any).hour ?? 0) === 20) {
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#eeebe8';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#e0dbd6';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#255b74';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#438b83';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#d39326';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#c4776f';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9f475e';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#7f3447';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#856d97';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#cd7392';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#8b8694';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d39326';
                                                                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#8b4e4a';
                                                                        } else {
                                                                          if (((s as any).hour ?? 0) === 21) {
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e8e7e4';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#dbd7d2';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#235770';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#408780';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cc8f22';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#bf736a';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9a4359';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#7a3142';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#826991';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c86f8d';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#87828f';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cc8f22';
                                                                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#864b46';
                                                                          } else {
                                                                            if (((s as any).hour ?? 0) === 22) {
                                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e7e6e3';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#dad5d1';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#21566e';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#40867e';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cd8d22';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#be726b';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#99425a';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#783042';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#7f6891';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c66e8e';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#86818e';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cd8d22';
                                                                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#854a46';
                                                                            } else {
                                                                              if (((s as any).hour ?? 0) === 23) {
                                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                                                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e6e5e3';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#d8d4d1';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1f566c';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#41857c';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#cf8b24';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#bd716b';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#97425b';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#772f43';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#7d6890';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#c46d8e';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#84808d';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cf8b24';
                                                                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#844947';
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
                            } else {
                              if (((s as any).locArgs?.[1] ?? 0) === 'indoors') {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              } else {
                                if (((s as any).DayStage ?? 0) === 6  ||  ((s as any).DayStage ?? 0) === 1) {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                } else {
                                  if (((s as any).DayStage ?? 0) === 2) {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  } else {
                                    if (((s as any).DayStage ?? 0) === 3) {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    } else {
                                      if (((s as any).DayStage ?? 0) === 4) {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = ((s as any).rgb ?? 0)(((s as any).BColorBase ?? 0), ((s as any).BColorBase ?? 0) - ((s as any).BColorBase ?? 0) / 4, ((s as any).BColorBase ?? 0) - ((s as any).BColorBase ?? 0) / 4);
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      } else {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      }
                                    }
                                  }
                                }
                              }
                              if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#202020';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#303030';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1E77C7';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#40a02b';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#df8e1d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe640b';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e64553';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d20f39';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8839ef';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea76cb';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6f85';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe640b';
                              } else {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#ffffff';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#E6F2FF';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#38C0D6';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6da95';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eed49f';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f5a97f';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ee99a0';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ed8796';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c6a0f6';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5bde6';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adcb';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5a97f';
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
  } else {
    if (((s as any).theme ?? 0)?.['type'] === 'static') {
      if (((s as any).theme ?? 0)?.['name'] === 'White') {
        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#ffffff';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#E6F2FF';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#0F78B8';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#40a02b';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#df8e1d';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe640b';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e64553';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d20f39';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8839ef';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea76cb';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6f85';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe640b';
        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d24b4b';
      } else {
        if (((s as any).theme ?? 0)?.['name'] === 'Black') {
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#202020';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#303030';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#38C0D6';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6da95';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eed49f';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f5a97f';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ee99a0';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ed8796';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c6a0f6';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5bde6';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adcb';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5a97f';
          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f0c6c6';
        } else {
          if (((s as any).theme ?? 0)?.['name'] === 'Modern Grey') {
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#202020';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#303030';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#38C0D6';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6da95';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eed49f';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f5a97f';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ee99a0';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ed8796';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c6a0f6';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5bde6';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adcb';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5a97f';
            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f0c6c6';
          } else {
            if (((s as any).theme ?? 0)?.['name'] === 'Latte') {
              (s as any).temp_theme_new_schema = 1;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#bcc0cc';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#acb0be';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#1E77C7';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#40a02b';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#df8e1d';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fe640b';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e64553';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d20f39';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#8839ef';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#ea76cb';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6f85';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fe640b';
              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d24b4b';
            } else {
              if (((s as any).theme ?? 0)?.['name'] === 'Frappé') {
                (s as any).temp_theme_new_schema = 1;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#51576d';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#626880';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#4FB8C6';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6d189';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e5c890';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ef9f76';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ea999c';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#e78284';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#ca9ee6';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f4b8e4';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adce';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ef9f76';
                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#eebebe';
              } else {
                if (((s as any).theme ?? 0)?.['name'] === 'Macchiato') {
                  (s as any).temp_theme_new_schema = 1;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#494D64';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#363A4F';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#70D0DA';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6da95';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#eed49f';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#f5a97f';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#ee99a0';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#ed8796';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c6a0f6';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5bde6';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a5adcb';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f5a97f';
                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f0c6c6';
                } else {
                  if (((s as any).theme ?? 0)?.['name'] === 'Mocha') {
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#45475a';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#585b70';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5FC6D6';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a6e3a1';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f9e2af';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#fab387';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#eba0ac';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#f38ba8';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#cba6f7';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f5c2e7';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#a6adc8';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#fab387';
                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#f2cdcd';
                  } else {
                    if (((s as any).theme ?? 0)?.['name'] === 'Nord Light') {
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#E5E9F0';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#D8DEE9';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#5E81AC';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#7FAF63';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#D6AE55';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#B86A52';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#9E3C43';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#7A272B';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#9B7B98';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#A21756';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#3B4250';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#B86A52';
                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#af5a61';
                    } else {
                      if (((s as any).theme ?? 0)?.['name'] === 'Nord Dark') {
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#3b4252';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#434c5e';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#88C0D0';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#a3be8c';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ebcb8b';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d08770';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#bf616a';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c34444';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#b48ead';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#FF4DA3';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#4c566a';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#d08770';
                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#d0959b';
                      } else {
                        if (((s as any).theme ?? 0)?.['name'] === 'Solarized Light') {
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                          if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e4e4e4';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#cdcdcd';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#268BD2';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859900';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b58900';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cb4b16';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc322f';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b82d2d';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6c71c4';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d33682';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#586e75';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cb4b16';
                          if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf4a5d';
                        } else {
                          if (((s as any).theme ?? 0)?.['name'] === 'Solarized Dark') {
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                            if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#073642';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#054453';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2AA198';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#859900';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#b58900';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#cb4b16';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#dc322f';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#b82d2d';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#6c71c4';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#d33682';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#93a1a1';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#cb4b16';
                            if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#bf4a5d';
                          } else {
                            if (((s as any).theme ?? 0)?.['name'] === 'Tokyo Night') {
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                              if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#24283b';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#414868';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#7aa2f7';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#9ece6a';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#e0af68';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ff9e64';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#f7768e';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#d4556e';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#bb9af7';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#f7768e';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#565f89';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ff9e64';
                              if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c1868d';
                            } else {
                              if (((s as any).theme ?? 0)?.['name'] === 'Tokyo Night Light') {
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#e6e7ed';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#6c6e75';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#2959aa';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#385f0d';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#8f5e15';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#965027';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#8c4351';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#6c2f3a';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#5a3e8e';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#b65c7a';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6c6e75';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#965027';
                                if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#955b5b';
                              } else {
                                if (((s as any).theme ?? 0)?.['name'] === 'Rosé Pine') {
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                  if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#1f1d2e';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#26233a';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#31748f';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8dd3c7';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6c177';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ebbcba';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e45b83';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24b6a';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a7e7';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#eb6f92';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6e6a86';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6c177';
                                  if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c6808c';
                                } else {
                                  if (((s as any).theme ?? 0)?.['name'] === 'Rosé Pine Moon') {
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 1;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                    if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#2a273f';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#393552';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#3e8fb0';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#8fd2c6';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#f6c177';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#ea9a97';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#e45b83';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#c24b6a';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#c4a7e7';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#eb6f92';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#6e6a86';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#f6c177';
                                    if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#c6808c';
                                  } else {
                                    if (((s as any).theme ?? 0)?.['name'] === 'Rosé Pine Dawn') {
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = 0;
                                      if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = 0;
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = '#fffaf3';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = '#f2e9e1';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = '#286983';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = '#4d9a8e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = '#ea9d34';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = '#d7827e';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = '#b0526f';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = '#8f3f56';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = '#907aa9';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = '#dd7fa5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = '#9893a5';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = '#ea9d34';
                                      if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = '#9d5958';
                                    } else {
                                      if (((s as any).theme ?? 0)?.['name'] === 'Custom') {
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['is_dark'] = ((s as any).custom_theme ?? 0)?.['is_dark'];
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['bcolor'] = ((s as any).custom_theme ?? 0)?.['bcolor'];
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fcolor'] = ((s as any).custom_theme ?? 0)?.['fcolor'];
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['lcolor'] = ((s as any).custom_theme ?? 0)?.['lcolor'];
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fsize'] = ((s as any).custom_theme ?? 0)?.['fsize'];
                                        if (!(s as any).theme) (s as any).theme = {}; (s as any).theme['fname'] = ((s as any).custom_theme ?? 0)?.['fname'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg'] = ((s as any).custom_theme ?? 0)?.['table_bg'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['table_bg_alt'] = ((s as any).custom_theme ?? 0)?.['table_bg_alt'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['accent'] = ((s as any).custom_theme ?? 0)?.['accent'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_pos'] = ((s as any).custom_theme ?? 0)?.['v_pos'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['pos'] = ((s as any).custom_theme ?? 0)?.['pos'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neutral'] = ((s as any).custom_theme ?? 0)?.['neutral'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['neg'] = ((s as any).custom_theme ?? 0)?.['neg'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['v_neg'] = ((s as any).custom_theme ?? 0)?.['v_neg'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['punk'] = ((s as any).custom_theme ?? 0)?.['punk'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['bimbo'] = ((s as any).custom_theme ?? 0)?.['bimbo'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['goth'] = ((s as any).custom_theme ?? 0)?.['goth'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['hypno'] = ((s as any).custom_theme ?? 0)?.['hypno'];
                                        if (!(s as any).theme_hex) (s as any).theme_hex = {}; (s as any).theme_hex['header'] = ((s as any).custom_theme ?? 0)?.['header'];
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
    } else {
      // TODO-QSP: "Invalid parameter call for themes / get_theme. You've found a bug! please let us know."
      // TODO-QSP: $theme['type']
    }
  }
  return;
  // TODO-QSP: end
  // TODO-QSP: "Invalid parameter call for themes. You've found a bug! please let us know."
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'menu_toggle':
      enterMenuToggle(s, scene);
      break;
    case 'menu_cell':
      enterMenuCell(s, scene);
      break;
    case 'menu':
      enterMenu(s, scene);
      break;
    case 'alt_color':
      enterAltColor(s, scene);
      break;
    case 'clothing':
      enterClothing(s, scene);
      break;
    case 'wrap':
      enterWrap(s, scene);
      break;
    case 'wrap_hex':
      enterWrapHex(s, scene);
      break;
    case 'wrap_thought':
      enterWrapThought(s, scene);
      break;
    case 'outdoors':
      enterOutdoors(s, scene);
      break;
    case 'indoors':
      enterIndoors(s, scene);
      break;
    case 'apply':
      enterApply(s, scene);
      break;
    case 'reset':
      enterReset(s, scene);
      break;
    case 'set_theme':
      enterSetTheme(s, scene);
      break;
    case 'check_custom_vars':
      enterCheckCustomVars(s, scene);
      break;
    case 'default_theme':
      enterDefaultTheme(s, scene);
      break;
    case 'get_theme':
      enterGetTheme(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const themes: LocationDef = {
  name: 'themes',
  title: '<br>You don\'t have enough willpower to use this action.',
  region: 'other',
  enter: enter,
};
