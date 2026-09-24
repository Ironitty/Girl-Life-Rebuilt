import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMenuToggle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cfg_vars ?? 0)?.['themetype'] === 0) {
    ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['themetype'] = 1;
    if (((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Default'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === '') {
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['theme_main_name'] = 'White';
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).cfg_vars ?? 0)?.['theme_main_name']), 'static']; enterSetTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['themetype'] = 0;
    if (((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'White'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Black'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Modern Grey'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === 'Custom'  ||  ((s as any).cfg_vars ?? 0)?.['theme_main_name'] === '') {
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['theme_main_name'] = 'Default';
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Dynamic ' + (((s as any).cfg_vars ?? 0)?.['theme_main_name']), 'dynamic']; enterSetTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, '$menu_obnovit', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMenuCell(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_mc_full = ((String((s as any).locArgs?.[2] ?? '') === 'dynamic') ? ('Dynamic ' + ((s as any).locArgs?.[1] ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  ((s as any).theme = (s as any).theme ?? {})['name'] = ((s as any).temp_mc_full ?? 0);
  ((s as any).theme = (s as any).theme ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'indoors']; enterGetTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_mc_bg = qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['bcolor']));
  (s as any).temp_mc_fg = qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['fcolor']));
  (s as any).temp_mc_sel = ((((s as any).themes_menu_cur ?? 0) === ((s as any).temp_mc_full ?? 0)) ? ('outline:3px solid ' + (((s as any).theme_hex ?? 0)?.['accent']) + '; outline-offset:-3px; ') : (''));
  // TODO-QSP: dynamic text: '<td bgcolor="' + $temp_mc_bg + '" width="250" align="center" style="background:...
  scene.text(`'<td bgcolor="' + $temp_mc_bg + '" width="250" align="center" style="background:' + $temp_mc_bg + '; ' + $temp_mc_sel + 'width:250px; text-align:center; white-space:nowrap; border-radius:4px; padding:0; overflow:hidden;"><a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $cfg_vars[/u0027theme_main_name/u0027] = /u0027${((s as any).locArgs?.[1] ?? '')}/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027themes/u0027, /u0027set_theme/u0027, /u0027${((s as any).temp_mc_full ?? '')}/u0027); return false;">${((s as any).locArgs?.[1] ?? '')}</a></td>'`);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).themes_menu_ret_loc ?? 0) === '') {
    (s as any).themes_menu_ret_loc = ((s as any).loc ?? 0);
    (s as any).themes_menu_ret_arg = ((s as any).loc_arg ?? 0);
  }
  if ((!((s as any).themes_menu_active ?? 0))) {
    (s as any).themes_menu_active = 1;
    (s as any).themes_menu_prev_settingmode = ((s as any).settingmode ?? 0);
    (s as any).settingmode = 1;
  }
  (s as any).themes_menu_cur = (((s as any).theme ?? 0)?.['name']);
  (s as any).themes_menu_mode = ((((s as any).cfg_vars ?? 0)?.['themetype'] === 0) ? ('dynamic') : ('static'));
  ((s as any).theme = (s as any).theme ?? {})['name'] = ((s as any).themes_menu_cur ?? 0);
  ((s as any).theme = (s as any).theme ?? {})['type'] = ((s as any).themes_menu_mode ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'indoors']; enterGetTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).bcolor = (((s as any).theme ?? 0)?.['bcolor']);
  (s as any).fcolor = (((s as any).theme ?? 0)?.['fcolor']);
  (s as any).lcolor = (((s as any).theme ?? 0)?.['lcolor']);
  (s as any).fsize = (((s as any).theme ?? 0)?.['fsize']);
  (s as any).fname = (((s as any).theme ?? 0)?.['fname']);
  (s as any).tm_label_fg = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('#cccccc') : ('#333333'));
  (s as any).tm_cell_bg = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('#000000') : ('#ffffff'));
  (s as any).tm_fg_hex = qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).fcolor ?? 0));
  scene.text('<center>');
  if (((s as any).cfg_vars ?? 0)?.['themetype'] === 0) {
    // TODO-QSP: dynamic text: '<a href="exec: gs ''themes'', ''menu_toggle'' & gt ''themes'', ''menu''" style=...
    scene.text('\'<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027themes/u0027, /u0027menu_toggle/u0027); return false;">Dynamic</a>\'');
    // TODO-QSP: dynamic text: '<a href="exec: gs ''themes'', ''menu_toggle'' & gt ''themes'', ''menu''" style=...
    scene.text('\'<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027themes/u0027, /u0027menu_toggle/u0027); return false;">Static</a>\'');
  } else {
    // TODO-QSP: dynamic text: '<a href="exec: gs ''themes'', ''menu_toggle'' & gt ''themes'', ''menu''" style=...
    scene.text('\'<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027themes/u0027, /u0027menu_toggle/u0027); return false;">Dynamic</a>\'');
    // TODO-QSP: dynamic text: '<a href="exec: gs ''themes'', ''menu_toggle'' & gt ''themes'', ''menu''" style=...
    scene.text('\'<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027themes/u0027, /u0027menu_toggle/u0027); return false;">Static</a>\'');
  }
  scene.text('<table style="border-collapse:separate; border-spacing:0 6px;">');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Classic</b></td...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Classic</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  if (((s as any).cfg_vars ?? 0)?.['themetype'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Default', 'dynamic']; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'White', 'static']; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Black', 'static']; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Modern Grey', 'static']; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Custom', 'static']; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Catppuccin</b><...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Catppuccin</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Latte', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Frappé', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Macchiato', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Mocha', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Nord</b></td></...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Nord</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Nord Light', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Nord Dark', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Solarized</b></...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Solarized</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Solarized Light', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Solarized Dark', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Tokyo Night</b>...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Tokyo Night</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Tokyo Night Light', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Tokyo Night', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('</tr></table></td></tr>');
  // TODO-QSP: dynamic text: '<tr><td style="color:' + $tm_label_fg + '; padding:2px 4px;"><b>Rosé Pine</b></...
  scene.text('\'<tr><td style="color:\' + $tm_label_fg + \'; padding:2px 4px;"><b>Rosé Pine</b></td></tr>\'');
  // TODO-QSP: dynamic text: '<tr><td bgcolor="' + $tm_cell_bg + '" style="background:' + $tm_cell_bg + '; pa...
  scene.text('\'<tr><td bgcolor="\' + $tm_cell_bg + \'" style="background:\' + $tm_cell_bg + \'; padding:8px; border-radius:6px;"><table style="border-collapse:separate; border-spacing:16px 0;"><tr>\'');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Rosé Pine Dawn', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Rosé Pine', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Rosé Pine Moon', ((s as any).themes_menu_mode ?? 0)]; enterMenuCell(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('</tr></table></td></tr>');
  scene.text('</table>');
  scene.text('</center>');
  ((s as any).theme = (s as any).theme ?? {})['name'] = ((s as any).themes_menu_cur ?? 0);
  ((s as any).theme = (s as any).theme ?? {})['type'] = ((s as any).themes_menu_mode ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'indoors']; enterGetTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).bcolor = (((s as any).theme ?? 0)?.['bcolor']);
  (s as any).fcolor = (((s as any).theme ?? 0)?.['fcolor']);
  (s as any).lcolor = (((s as any).theme ?? 0)?.['lcolor']);
  (s as any).fsize = (((s as any).theme ?? 0)?.['fsize']);
  (s as any).fname = (((s as any).theme ?? 0)?.['fname']);
  (s as any).tm_fg_hex = qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).fcolor ?? 0));
  scene.text('<hr>');
  scene.text('<b>Preview</b>');
  // TODO-QSP: dynamic text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ...
  scene.text('\'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A <font color="\' + $theme_hex[\'bimbo\'] + \'">bimbo</font> wandered into a <font color="\' + $theme_hex[\'goth\'] + \'">goth</font> café, sparking a <font color="\' + $theme_hex[\'punk\'] + \'">punk</font> uprising while the air crackled with <font color="\' + $theme_hex[\'hypno\'] + \'">hypno</font> energy. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027themes/u0027, /u0027menu/u0027); return false;">Pellentesque habitant</a> morbi tristique senectus et netus et malesuada fames. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. The <font color="\' + $theme_hex[\'bimbo\'] + \'">bimbo</font> smiled serenely, the <font color="\' + $theme_hex[\'goth\'] + \'">goth</font> raised an eyebrow, the <font color="\' + $theme_hex[\'punk\'] + \'">punk</font> tuned her guitar. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027themes/u0027, /u0027menu/u0027); return false;">Excepteur sint occaecat</a> cupidatat non proident. The <font color="\' + $theme_hex[\'hypno\'] + \'">hypno</font> spiral deepened, and all four found something unexpected in the silence that followed.\'');
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
  scene.text(qspFunc(s, 'progressbar', 'positive', 100, 0, 0, 0, '', '', '21,41,61,81'));
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 80, 0, 0, 0, '', '', '21,41,61,81')
  scene.text(qspFunc(s, 'progressbar', 'positive', 80, 0, 0, 0, '', '', '21,41,61,81'));
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 60, 0, 0, 0, '', '', '21,41,61,81')
  scene.text(qspFunc(s, 'progressbar', 'positive', 60, 0, 0, 0, '', '', '21,41,61,81'));
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 40, 0, 0, 0, '', '', '21,41,61,81')
  scene.text(qspFunc(s, 'progressbar', 'positive', 40, 0, 0, 0, '', '', '21,41,61,81'));
  // TODO-QSP: dynamic text: $func('progressbar', 'positive', 20, 0, 0, 0, '', '', '21,41,61,81')
  scene.text(qspFunc(s, 'progressbar', 'positive', 20, 0, 0, 0, '', '', '21,41,61,81'));
  scene.text('</td>');
  scene.text('<td valign="top" style="vertical-align:top; padding-left:32px;">');
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 100)
  scene.text(qspFunc(s, 'progressbar', 'mono:accent', 100));
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 80)
  scene.text(qspFunc(s, 'progressbar', 'mono:accent', 80));
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 60)
  scene.text(qspFunc(s, 'progressbar', 'mono:accent', 60));
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 40)
  scene.text(qspFunc(s, 'progressbar', 'mono:accent', 40));
  // TODO-QSP: dynamic text: $func('progressbar', 'mono:accent', 20)
  scene.text(qspFunc(s, 'progressbar', 'mono:accent', 20));
  scene.text('</td>');
  scene.text('</tr></table>');
  scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).temp_ret_loc = ((st as any).themes_menu_ret_loc ?? 0);
    (st as any).temp_ret_arg = ((st as any).themes_menu_ret_arg ?? 0);
    (st as any).settingmode = ((st as any).themes_menu_prev_settingmode ?? 0);
    (st as any).themes_menu_active = 0;
    dynamicGoto(st, 'temp_ret_loc', 'temp_ret_arg');
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAltColor(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((String((s as any).locArgs?.[1] ?? '') === ((s as any).theme_hex ?? 0)?.['table_bg']) ? ((((s as any).theme_hex ?? 0)?.['table_bg_alt'])) : ((((s as any).theme_hex ?? 0)?.['table_bg'])));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterClothing(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_bcolor = qspFunc(s, 'themes', 'alt_color', ((s as any).temp_bcolor ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWrap(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'wrap', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWrapHex(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<font color="' + ((s as any).locArgs?.[1] ?? 0) + '">' + ((s as any).locArgs?.[2] ?? 0) + '</font>';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWrapThought(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).OpenInnerThought ?? 0) + ((s as any).locArgs?.[1] ?? 0) + ((s as any).CloseInnerThought ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOutdoors(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterApply(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIndoors(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterApply(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'indoors', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterApply(s: GameState, scene: SceneBuilder): void {
  if (((s as any).theme ?? 0)?.['type'] === 'dynamic') {
    ((s as any).theme = (s as any).theme ?? {})['old_is_dark'] = (((s as any).theme ?? 0)?.['is_dark']);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).theme ?? 0)?.['old_is_dark'] !== ((s as any).theme ?? 0)?.['is_dark']) {
      ((s as any).theme = (s as any).theme ?? {})['old_is_dark'] = (((s as any).theme ?? 0)?.['is_dark']);
      if (((s as any).curloc ?? 0) !== 'menu_settings') {
        (s as any).stat_msg = '';
        qspCall(s, 'stat_display', '');
      }
    }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).bcolor = (((s as any).theme ?? 0)?.['bcolor']);
  (s as any).fcolor = (((s as any).theme ?? 0)?.['fcolor']);
  (s as any).lcolor = (((s as any).theme ?? 0)?.['lcolor']);
  (s as any).fsize = (((s as any).theme ?? 0)?.['fsize']);
  (s as any).fname = (((s as any).theme ?? 0)?.['fname']);
  (s as any).noWillpower = 0;
  (s as any).noMoney = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  (s as any).fsize = 12;
  (s as any).fname = 'Tahoma';
  ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetTheme(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReset(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).theme = (s as any).theme ?? {})['name'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).theme = (s as any).theme ?? {})['type'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).theme = (s as any).theme ?? {})['fsize'] = 12;
  ((s as any).theme = (s as any).theme ?? {})['fname'] = 'Tahoma';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckCustomVars(s: GameState, scene: SceneBuilder): void {
  if (((s as any).custom_theme ?? 0)?.['fname'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['fname'] = 'Tahoma';
  }
  if (((s as any).custom_theme ?? 0)?.['fsize'] === 0) {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['fsize'] = 12;
  }
  if (((s as any).custom_theme ?? 0)?.['bcolor'] === 0) {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['bcolor'] = 0;
  }
  if (((s as any).custom_theme ?? 0)?.['fcolor'] === 0) {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['fcolor'] = 0;
  }
  if (((s as any).custom_theme ?? 0)?.['lcolor'] === 0) {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['lcolor'] = 0;
  }
  if (((s as any).custom_theme ?? 0)?.['table_bg'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['table_bg'] = '#202020';
  }
  if (((s as any).custom_theme ?? 0)?.['table_bg_alt'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['table_bg_alt'] = '#303030';
  }
  if (((s as any).custom_theme ?? 0)?.['accent'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['accent'] = '#38C0D6';
  }
  if (((s as any).custom_theme ?? 0)?.['v_pos'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['v_pos'] = '#a6da95';
  }
  if (((s as any).custom_theme ?? 0)?.['pos'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['pos'] = '#eed49f';
  }
  if (((s as any).custom_theme ?? 0)?.['neutral'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['neutral'] = '#f5a97f';
  }
  if (((s as any).custom_theme ?? 0)?.['neg'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['neg'] = '#ee99a0';
  }
  if (((s as any).custom_theme ?? 0)?.['v_neg'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['v_neg'] = '#ed8796';
  }
  if (((s as any).custom_theme ?? 0)?.['punk'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['punk'] = '#c6a0f6';
  }
  if (((s as any).custom_theme ?? 0)?.['bimbo'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['bimbo'] = '#f5bde6';
  }
  if (((s as any).custom_theme ?? 0)?.['goth'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['goth'] = '#a5adcb';
  }
  if (((s as any).custom_theme ?? 0)?.['hypno'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['hypno'] = '#f5a97f';
  }
  if (((s as any).custom_theme ?? 0)?.['header'] === '') {
    ((s as any).custom_theme = (s as any).custom_theme ?? {})['header'] = '#f0c6c6';
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDefaultTheme(s: GameState, scene: SceneBuilder): void {
  ((s as any).theme = (s as any).theme ?? {})['fname'] = 'Tahoma';
  ((s as any).theme = (s as any).theme ?? {})['fsize'] = 12;
  ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#ffffff';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#E6F2FF';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#38C0D6';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#40a02b';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#df8e1d';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe640b';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e64553';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d20f39';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8839ef';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea76cb';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6f85';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe640b';
  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d24b4b';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTheme(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_theme_new_schema = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefaultTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).theme ?? 0)?.['type'] === 'dynamic') {
    if (((s as any).theme ?? 0)?.['name'] === 'Dynamic Latte') {
      ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
      if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#bcc0cc';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#acb0be';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1e77c7';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#40a02b';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#df8e1d';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe640b';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e64553';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d20f39';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8839ef';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea76cb';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6f85';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe640b';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d24b4b';
      } else {
        if ((!((s as any).hour ?? 0))) {
          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#a8aab1';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#989ba3';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0063ac';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#2d8a1a';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c57a08';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e15000';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c93142';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b50029';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#7024d4';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf63b3';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a5c6c';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e15000';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b6393b';
        } else {
          if (((s as any).hour ?? 0) === 1) {
            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#a8abb1';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#989ba4';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0064ac';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#328a16';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c7790c';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e44e00';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ca3045';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b6002c';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6829d7';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ce64b6';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#595c6d';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e44e00';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b7383d';
          } else {
            if (((s as any).hour ?? 0) === 2) {
              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#a8abb2';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#989ba4';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0065ad';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#378a12';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ca780f';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e64c03';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cb2f48';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b8002f';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#602edb';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cc65b8';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#595c6d';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e64c03';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b83740';
            } else {
              if (((s as any).hour ?? 0) === 3) {
                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#a8abb2';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#989ca5';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0066ae';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#3c890d';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cc7713';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e84a0b';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cc2d4b';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b90032';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5732de';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cb66bb';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#585d6e';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e84a0b';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b93642';
              } else {
                if (((s as any).hour ?? 0) === 4) {
                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#a8acb3';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#989ca5';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0067ae';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#418906';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cf7616';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eb4712';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cd2c4d';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ba0035';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#4d36e1';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c967be';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#585d6f';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#eb4712';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ba3544';
                } else {
                  if (((s as any).hour ?? 0) === 5) {
                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#acb0b8';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#9ca0ab';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#006ab3';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#408e11';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d27b17';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ef4e0f';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d2324e';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf0036';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5d36e4';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d06ac0';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5c6173';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ef4e0f';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf3a45';
                  } else {
                    if (((s as any).hour ?? 0) === 6) {
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#b4b8c2';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#a4a8b4';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0071bd';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#43971d';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d9841b';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f75811';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc3b52';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c80039';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6f39eb';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dc70c7';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#63687c';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f75811';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c94249';
                    } else {
                      if (((s as any).hour ?? 0) === 7) {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#b8bcc7';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#a8acb9';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0574c2';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#429b24';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dc891c';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fb5e0e';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e14053';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cd0039';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#7c39ed';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e373c9';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#686c80';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fb5e0e';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cd474a';
                      } else {
                        if (((s as any).hour ?? 0) === 8) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#b8bcc8';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#a8adba';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0a74c3';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#419c25';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dd8a1c';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fb5f0e';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e24153';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ce0139';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#7d39ed';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e474c9';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#686c81';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fb5f0e';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ce474a';
                        } else {
                          if (((s as any).hour ?? 0) === 9) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#b9bdc8';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#a9adba';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0e75c3';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#419d26';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dd8a1c';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fc600e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e24153';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ce0339';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#7f39ed';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e574c9';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#696c82';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fc600e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cf484a';
                          } else {
                            if (((s as any).hour ?? 0) === 10) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#b9bdc9';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#a9aebb';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1175c4';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#419d27';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dd8b1c';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fc600d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e34253';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cf0539';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8139ee';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e674ca';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#696d82';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fc600d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cf484b';
                            } else {
                              if (((s as any).hour ?? 0) === 11) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#babec9';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#aaaebc';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1475c5';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#419e28';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#de8b1d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fc610d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e44353';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d00739';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8239ee';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e775ca';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6a6d83';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fc610d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d0494b';
                              } else {
                                if (((s as any).hour ?? 0) === 12) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#babeca';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#aaafbc';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1776c5';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#419e29';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#de8c1d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fd620c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e44353';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d00939';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8439ee';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e775ca';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6a6e83';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fd620c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d0494b';
                                } else {
                                  if (((s as any).hour ?? 0) === 13) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#bbbfcb';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#abafbd';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1976c6';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#409f29';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#de8d1d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fd630c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e54453';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d10b39';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8539ee';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e875ca';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6e84';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fd630c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d14a4b';
                                  } else {
                                    if (((s as any).hour ?? 0) === 14) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#bbbfcb';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#abb0bd';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1c77c6';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#409f2a';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#df8d1d';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe630b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e54453';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d10d39';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8739ef';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e976cb';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6f84';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe630b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d14a4b';
                                    } else {
                                      if (((s as any).hour ?? 0) === 15) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#bcc0cc';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#acb0be';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1e77c7';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#40a02b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#df8e1d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe640b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e64553';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d20f39';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8839ef';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea76cb';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6f85';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe640b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d24b4b';
                                      } else {
                                        if (((s as any).hour ?? 0) === 16) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#bcbfcb';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#acafbd';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2176c6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#3ea02c';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#de8e1c';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fd6408';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e54552';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d11038';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8937ed';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea75ca';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6f84';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fd6408';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d14b4a';
                                        } else {
                                          if (((s as any).hour ?? 0) === 17) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#bbbfca';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#abafbc';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2375c5';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#3c9f2c';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dc8d1b';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fb6405';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e34551';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cf1037';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8a36eb';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e975c8';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6e83';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fb6405';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d04b49';
                                          } else {
                                            if (((s as any).hour ?? 0) === 18) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#bbbec9';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#abaebb';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2675c4';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#3a9e2d';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#db8d1a';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f96402';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e34550';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cf1135';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8b34ea';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e974c7';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6d82';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f96402';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cf4b48';
                                            } else {
                                              if (((s as any).hour ?? 0) === 19) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#b7bac4';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#a7aab6';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2870be';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#319a2c';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d48a14';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f26200';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc424a';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c80c30';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8c2be2';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e56fc0';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#68697d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f26200';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c94843';
                                              } else {
                                                if (((s as any).hour ?? 0) === 20) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#b0b2ba';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#a0a2ac';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2668b5';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#229329';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c88407';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e65d00';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d23b41';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bd0027';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#891dd6';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dd68b5';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#616274';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e65d00';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be423b';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 21) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#acadb5';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#9c9ea7';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2864af';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#148f28';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c18100';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#de5b00';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cb383c';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b70022';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#890fce';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d963ae';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5e5e6f';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#de5b00';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b83f36';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 22) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#abacb3';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#9b9da6';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1d64ae';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#1f8d24';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c27f02';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#df5700';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cb363e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b60025';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8118d0';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d663b0';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5d5d6e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#df5700';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b73d37';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 23) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#a9abb2';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#9a9ca4';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0f63ad';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#268b1f';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c47c05';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e05400';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ca3440';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b60027';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#791fd2';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d263b1';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5b5c6d';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e05400';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b73b39';
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
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
        ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
        if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#51576d';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#626880';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4fb8c6';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6d189';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e5c890';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ef9f76';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ea999c';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e78284';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ca9ee6';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4b8e4';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adce';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ef9f76';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#eebebe';
        } else {
          if ((!((s as any).hour ?? 0))) {
            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#404455';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#505567';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#45a1ad';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#93ba79';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ccb281';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d48b66';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ce8689';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cb7072';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b28acb';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d9a4cb';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9198b3';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d48b66';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d2aaaa';
          } else {
            if (((s as any).hour ?? 0) === 1) {
              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#404556';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#505568';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#44a2ad';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#95ba77';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ceb281';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d58b67';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cf868a';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cc6f73';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b08bcd';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d9a5cd';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9198b3';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d58b67';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d2aaab';
            } else {
              if (((s as any).hour ?? 0) === 2) {
                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3f4556';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#4f5668';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#44a2ac';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#97ba76';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cfb281';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d78a69';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cf868c';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cc6f75';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#af8ccf';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d8a5ce';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9099b4';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d78a69';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d3aaac';
              } else {
                if (((s as any).hour ?? 0) === 3) {
                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3f4657';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#4f5669';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#44a2ab';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#99ba75';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d1b281';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d88a6a';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d0868d';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cd6f77';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ad8dd1';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d7a6d0';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#8f99b5';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d88a6a';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d3aaad';
                } else {
                  if (((s as any).hour ?? 0) === 4) {
                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3e4657';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#4e566a';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#43a3aa';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9cba74';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d3b281';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d98a6b';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d0868f';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ce6f79';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ab8ed2';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d7a6d2';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#8e9ab6';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d98a6b';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d4abae';
                  } else {
                    if (((s as any).hour ?? 0) === 5) {
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#42495c';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#525a6e';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#46a7b0';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ebf78';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d6b684';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#de8e6d';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d58a91';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d3737b';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b291d6';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ddaad5';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#939ebb';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#de8e6d';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d9afb1';
                    } else {
                      if (((s as any).hour ?? 0) === 6) {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#495064';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5a6177';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4aafba';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3c780';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#debf8a';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e79672';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#df9197';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#dd7a80';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bc98df';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e7b1dd';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9ba5c4';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e79672';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#e3b6b8';
                      } else {
                        if (((s as any).hour ?? 0) === 7) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#4d5469';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5e657b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4db4c0';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5cc85';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e2c38d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eb9b74';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e5959a';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e27e82';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c39be2';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#eeb5e1';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a0a9c9';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#eb9b74';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#e9babb';
                        } else {
                          if (((s as any).hour ?? 0) === 8) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#4e5469';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5e657c';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4db4c1';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5cd85';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e2c48e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eb9b74';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e5969a';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e37f82';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c49be3';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#efb5e1';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a1aaca';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#eb9b74';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#e9bbbb';
                          } else {
                            if (((s as any).hour ?? 0) === 9) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#4e546a';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5f657d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4db5c2';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5cd86';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e3c58e';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ec9c75';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e6969a';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e37f83';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c59ce3';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#efb5e2';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a1aaca';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ec9c75';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#eabbbc';
                            } else {
                              if (((s as any).hour ?? 0) === 10) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#4e556a';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5f667d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4eb5c2';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5ce86';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e3c58e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ec9c75';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e7979b';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e48083';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c69ce4';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f0b6e2';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a2abcb';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ec9c75';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ebbcbc';
                              } else {
                                if (((s as any).hour ?? 0) === 11) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#4f556b';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#60667e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4eb6c3';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5cf87';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e3c68f';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ed9d75';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e7979b';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e48083';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c79ce4';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f1b6e2';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a3abcc';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ed9d75';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ebbcbd';
                                } else {
                                  if (((s as any).hour ?? 0) === 12) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#4f566b';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#60677e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4eb6c4';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5cf87';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e4c68f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ed9d75';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e8989b';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e58183';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c79de5';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f2b7e3';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a3accc';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ed9d75';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ecbdbd';
                                  } else {
                                    if (((s as any).hour ?? 0) === 13) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#50566c';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#61677f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4eb7c5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6d088';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e4c78f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ee9e76';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e9989b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e68184';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c89de5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f2b7e3';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4accd';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ee9e76';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#edbdbd';
                                    } else {
                                      if (((s as any).hour ?? 0) === 14) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#50576c';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#61687f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4fb7c5';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6d088';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e5c790';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ee9e76';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e9999c';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e68284';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c99ee6';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3b8e4';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4adcd';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ee9e76';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#edbebe';
                                      } else {
                                        if (((s as any).hour ?? 0) === 15) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#51576d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#626880';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4fb8c6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6d189';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e5c890';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ef9f76';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ea999c';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e78284';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ca9ee6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4b8e4';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adce';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ef9f76';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#eebebe';
                                        } else {
                                          if (((s as any).hour ?? 0) === 16) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#51576c';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#62687f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4fb7c6';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5d189';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e4c890';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ee9f75';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e9999b';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e68283';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ca9de5';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4b8e3';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5accd';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ee9f75';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#edbebd';
                                          } else {
                                            if (((s as any).hour ?? 0) === 17) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#50566b';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#61677e';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#50b6c5';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a4d089';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e2c78f';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ec9e75';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e8989a';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e58182';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c99ce3';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3b7e1';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4abcc';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ec9e75';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ecbdbc';
                                            } else {
                                              if (((s as any).hour ?? 0) === 18) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#50556a';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#61667d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#50b6c4';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3cf89';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e1c78f';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eb9e74';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e79899';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e48181';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c99ce2';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f2b6e0';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4abcb';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#eb9e74';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ebbdbc';
                                              } else {
                                                if (((s as any).hour ?? 0) === 19) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#4d5165';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5e6278';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4db1c1';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9dcb87';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dbc38c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e59a70';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e19494';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#de7d7c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c697dc';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#eeb2da';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a1a6c5';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e59a70';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#e5b9b7';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 20) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#474a5d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#585b6f';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#49a9b9';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#94c382';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d1bb86';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#da9469';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d78d8c';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d47774';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bf8fd1';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e5aad0';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9b9fbc';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#da9469';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#dbb1af';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 21) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#454758';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#55576a';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#47a4b5';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fbf7f';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ccb783';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d49065';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d28987';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ce736f';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bc8bcb';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e1a6cb';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#979ab6';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d49065';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d6adab';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 22) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#434657';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#535669';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#46a3b2';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#90bd7d';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ccb682';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d48f65';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d18888';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cd7270';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b98bcb';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dea5cb';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9599b5';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d48f65';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d4acab';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 23) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#424556';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#525668';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#45a2b0';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#92bc7b';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ccb481';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d48d66';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cf8788';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cc7171';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b58acb';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dca5cb';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9399b4';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d48d66';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d3abaa';
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
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
          ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
          if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#494d64';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#363a4f';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#70d0da';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6da95';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eed49f';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f5a97f';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ee99a0';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ed8796';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c6a0f6';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5bde6';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adcb';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5a97f';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f0c6c6';
          } else {
            if ((!((s as any).hour ?? 0))) {
              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#383b4c';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#262938';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#65b8c1';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#93c384';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d5be8f';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#da956f';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d2868c';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d17582';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#af8cdb';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#daa9cd';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9298b0';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#da956f';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d4b2b2';
            } else {
              if (((s as any).hour ?? 0) === 1) {
                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#383b4d';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#252939';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#65b9c1';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#96c383';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d7be90';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#db9570';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d2868e';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d17584';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ac8ddd';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#daa9cf';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9198b0';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#db9570';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d4b2b3';
              } else {
                if (((s as any).hour ?? 0) === 2) {
                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#373c4e';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#252a3a';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#64b9c0';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#98c382';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d8be90';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#dd9471';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d38690';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d27586';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#aa8ede';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d9aad0';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9099b1';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dd9471';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d5b2b3';
                } else {
                  if (((s as any).hour ?? 0) === 3) {
                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#373c4e';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#252a3a';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#64babf';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ac380';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dabe90';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#de9472';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d38691';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d27588';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a78fe0';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d9aad2';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9099b2';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#de9472';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d5b2b4';
                  } else {
                    if (((s as any).hour ?? 0) === 4) {
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#363c4f';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#242a3b';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#64babe';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9cc27f';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dbbd90';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#df9474';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d48693';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d2758a';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a590e2';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d8abd3';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#8f9ab2';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#df9474';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d6b2b5';
                    } else {
                      if (((s as any).hour ?? 0) === 5) {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3a4053';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#282d3f';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#67bfc4';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ec784';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dfc293';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e49876';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d98a95';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d8788c';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ac93e6';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#deafd7';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#949eb8';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e49876';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#dbb6b9';
                      } else {
                        if (((s as any).hour ?? 0) === 6) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#41465b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2e3447';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6bc7ce';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3d08b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e7cb99';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eda07b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e3919b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e27f92';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b79aee';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e9b6df';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9ca5c1';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#eda07b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#e5bebf';
                        } else {
                          if (((s as any).hour ?? 0) === 7) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#454a60';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#32374b';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6eccd4';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5d590';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ebcf9c';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f1a57d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e9959e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e88394';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bf9df2';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#efb9e3';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a0a9c6';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f1a57d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ebc2c3';
                          } else {
                            if (((s as any).hour ?? 0) === 8) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#454a60';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#33374b';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6eccd5';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5d691';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ebd09c';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f1a57d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e9969e';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e88494';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c09df3';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f0bae3';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a1aac7';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f1a57d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ebc3c3';
                            } else {
                              if (((s as any).hour ?? 0) === 9) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#464b61';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#33384c';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6ecdd6';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5d691';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ebd19d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f2a67e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ea969e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e98495';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c19ef3';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f0bae3';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a1aac7';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f2a67e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ecc3c4';
                              } else {
                                if (((s as any).hour ?? 0) === 10) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#464b61';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#34384c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6fcdd6';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5d792';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ecd19d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f2a67e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#eb979f';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ea8595';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c19ef4';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f1bbe4';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a2abc8';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f2a67e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#edc4c4';
                                } else {
                                  if (((s as any).hour ?? 0) === 11) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#474b62';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#34384d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6fced7';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5d893';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ecd29e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f3a77e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#eb979f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ea8595';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c29ff4';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f2bbe4';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a3abc9';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f3a77e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#edc4c4';
                                  } else {
                                    if (((s as any).hour ?? 0) === 12) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#474c62';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#35394d';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6fced8';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6d893';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#edd29e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f3a77e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ec989f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#eb8695';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c39ff5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3bce5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a3acc9';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f3a77e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#eec5c5';
                                    } else {
                                      if (((s as any).hour ?? 0) === 13) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#484c63';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#35394e';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6fcfd9';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6d994';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#edd39e';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f4a87f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ed989f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ec8696';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c49ff5';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3bce5';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4acca';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4a87f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#efc5c5';
                                      } else {
                                        if (((s as any).hour ?? 0) === 14) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#484d63';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#363a4e';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#70cfd9';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6d994';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eed39f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f4a87f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ed99a0';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ec8796';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c5a0f6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4bde6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4adca';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4a87f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#efc6c6';
                                        } else {
                                          if (((s as any).hour ?? 0) === 15) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#494d64';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#363a4f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#70d0da';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6da95';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eed49f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f5a97f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ee99a0';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ed8796';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c6a0f6';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5bde6';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adcb';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5a97f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f0c6c6';
                                          } else {
                                            if (((s as any).hour ?? 0) === 16) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#494d63';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#363a4e';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#70cfda';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5da95';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#edd49f';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f4a97e';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ed999f';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ec8795';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c69ff5';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5bde5';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5acca';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4a97e';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#efc6c5';
                                            } else {
                                              if (((s as any).hour ?? 0) === 17) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#484c62';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#35394d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#70ced9';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a4d995';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ecd39e';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f2a87e';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ec989e';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#eb8694';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c69ef3';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4bce3';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4abc9';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f2a87e';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#eec5c4';
                                              } else {
                                                if (((s as any).hour ?? 0) === 18) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#484b61';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#35384c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#70ced8';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3d895';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ebd29e';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f1a87d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#eb989d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ea8693';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c69ef2';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3bbe3';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4abc8';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f1a87d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#edc5c4';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 19) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#45475d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#333548';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6ec9d5';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9dd493';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e5ce9b';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eba479';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e69498';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e5828d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c499eb';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#efb7dd';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a1a7c2';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#eba479';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#e7c1bf';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 20) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#404154';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2d2e40';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#69c0cd';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#95cc8d';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dbc795';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e09d72';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db8d90';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#db7b85';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bd91e1';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e6afd3';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9a9fb9';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e09d72';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ddb9b7';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 21) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3d3d4f';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2a2b3b';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#66bcc9';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fc78b';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d5c392';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#da9a6e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d6898b';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d5787f';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bb8cda';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e2abcd';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#979ab3';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#da9a6e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d8b5b3';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 22) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3b3c4e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#292a3a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#66bbc6';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#91c689';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d5c191';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#da986e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d5888b';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d47780';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b78cda';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dfaacd';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9599b2';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#da986e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d6b4b3';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 23) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3a3c4d';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#272a39';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#65bac4';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#92c486';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d5c090';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#da976f';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d3878c';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d27681';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b38cdb';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ddaacd';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9399b1';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#da976f';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d5b3b2';
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
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
            ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
            if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#45475a';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#585b70';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5fc6d6';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6e3a1';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f9e2af';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fab387';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#eba0ac';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f38ba8';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#cba6f7';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5c2e7';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a6adc8';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fab387';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f2cdcd';
            } else {
              if ((!((s as any).hour ?? 0))) {
                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#343543';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#464858';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#54afbd';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#94cb8f';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0cc9f';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#df9f77';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cf8d98';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d77893';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b492dc';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#daaece';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9398ad';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#df9f77';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d5b9b9';
              } else {
                if (((s as any).hour ?? 0) === 1) {
                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#343643';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#464958';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#54afbc';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#96cb8e';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e2cc9f';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e09e78';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cf8d99';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d77995';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b193de';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#daaecf';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9298ae';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e09e78';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d6b9b9';
                } else {
                  if (((s as any).hour ?? 0) === 2) {
                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#333644';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#464959';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#53b0bb';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#98cb8d';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e3cb9f';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e29e79';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d08d9a';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d77997';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#af94df';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d9afd1';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9199ae';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e29e79';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d7b9ba';
                  } else {
                    if (((s as any).hour ?? 0) === 3) {
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#333645';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#45495a';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#53b0bb';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9bcb8b';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e5cb9f';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e39e7a';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d08d9c';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d77999';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ad95e1';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d9afd2';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9199af';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e39e7a';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d7b9bb';
                    } else {
                      if (((s as any).hour ?? 0) === 4) {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#333745';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#454a5a';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#53b1ba';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9dcb8a';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e6cb9f';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e59d7b';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d08d9d';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d7799b';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ab96e3';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d8b0d4';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#909aaf';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e59d7b';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d8b9bc';
                      } else {
                        if (((s as any).hour ?? 0) === 5) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#363a49';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#494d5f';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#55b5c0';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ed08f';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ead0a3';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e9a27d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d691a0';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#dd7d9e';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b299e7';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#deb3d8';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#959eb5';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e9a27d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ddbdbf';
                        } else {
                          if (((s as any).hour ?? 0) === 6) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3d4051';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#505467';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5abdca';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3d997';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f2d9a9';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f2aa83';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e098a7';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e784a4';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bda0ef';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e9bbe0';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9da5be';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f2aa83';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#e7c5c6';
                          } else {
                            if (((s as any).hour ?? 0) === 7) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#414456';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#54586c';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5dc2d0';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5de9c';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6ddac';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f6af85';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e69ca9';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ed87a6';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a3f3';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#efbee3';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a1a9c3';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6af85';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#edc9ca';
                            } else {
                              if (((s as any).hour ?? 0) === 8) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#424456';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#54586c';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5dc2d1';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5df9d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6deac';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f7af85';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e69daa';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ee88a6';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c5a3f4';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f0bfe4';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a2aac4';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f7af85';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#edcaca';
                              } else {
                                if (((s as any).hour ?? 0) === 9) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#424557';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#55586d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5dc3d2';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5df9d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6dfad';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f7b085';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e79daa';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ef88a6';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c6a4f4';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f0bfe4';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a3aac4';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f7b085';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#eecacb';
                                } else {
                                  if (((s as any).hour ?? 0) === 10) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#434557';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#55596d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5ec3d2';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5e09e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f7dfad';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f8b086';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e89eaa';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ef89a7';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c7a4f5';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f1c0e5';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a3abc5';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f8b086';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#efcbcb';
                                  } else {
                                    if (((s as any).hour ?? 0) === 11) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#434558';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#56596e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5ec4d3';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5e19f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f7e0ad';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f8b186';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e89eab';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f089a7';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c7a4f5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f2c0e5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4abc6';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f8b186';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#efcbcb';
                                    } else {
                                      if (((s as any).hour ?? 0) === 12) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#444658';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#565a6e';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5ec4d4';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6e19f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f8e0ae';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f9b186';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e99fab';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f18aa7';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c8a5f6';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3c1e6';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a4acc6';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f9b186';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f0cccc';
                                      } else {
                                        if (((s as any).hour ?? 0) === 13) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#444659';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#575a6f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5ec5d5';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6e2a0';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f8e1ae';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f9b286';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ea9fab';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f28aa7';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c9a5f6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3c1e6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5acc7';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f9b286';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f1cccc';
                                        } else {
                                          if (((s as any).hour ?? 0) === 14) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#454759';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#575b6f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5fc5d5';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6e2a0';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f9e1af';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fab287';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#eaa0ac';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f28ba8';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#caa6f7';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4c2e7';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adc7';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fab287';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f1cdcd';
                                          } else {
                                            if (((s as any).hour ?? 0) === 15) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#45475a';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#585b70';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5fc6d6';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6e3a1';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f9e2af';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fab387';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#eba0ac';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f38ba8';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#cba6f7';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5c2e7';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a6adc8';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fab387';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f2cdcd';
                                            } else {
                                              if (((s as any).hour ?? 0) === 16) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#454759';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#585b6f';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5fc5d6';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a5e3a1';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f8e2af';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f9b386';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#eaa0ab';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f28ba7';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#cba5f6';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5c2e6';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a6acc7';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f9b386';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f1cdcc';
                                              } else {
                                                if (((s as any).hour ?? 0) === 17) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#444658';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#575a6e';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#60c4d5';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a4e2a1';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f7e1ae';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f7b286';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e99faa';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f18aa6';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#cba4f4';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3c1e5';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5acc6';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f7b286';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f0cccc';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 18) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#444557';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#57596d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#60c4d4';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3e1a1';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6e0ae';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f6b285';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e89fa9';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f08aa5';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#cba4f3';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3c0e4';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5abc5';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6b285';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#efcbcb';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 19) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#414253';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#545568';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5dbfd0';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ddd9f';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f0dcab';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f0ae81';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e39ba4';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#eb869f';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c89fed';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#efbcde';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a2a7c0';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f0ae81';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#e9c7c6';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 20) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3b3b4a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#4e4e60';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#59b6c8';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#95d499';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e6d4a5';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e5a77a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d9949b';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e17f96';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c297e2';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e6b4d4';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9b9fb6';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e5a77a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#dfc0be';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 21) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#383746';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#4b4b5b';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#57b2c4';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fd097';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0d0a1';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#dfa476';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d49096';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#dc7b90';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bf92db';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e1b0ce';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#989ab1';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dfa476';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#dabcba';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 22) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#373745';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#494a5a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#56b1c2';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#91ce94';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0cfa1';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#dfa276';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d28f97';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#db7a91';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bb92dc';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dfafce';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9699af';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dfa276';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d8bbba';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 23) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#353644';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#484959';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#55b0bf';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#92cd92';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0cda0';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#dfa077';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d18e97';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d97992';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b792dc';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ddafce';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9499ae';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dfa077';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d7bab9';
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
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
              ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
              if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3b4252';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#434c5e';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#88c0d0';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3be8c';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ebcb8b';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d08770';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bf616a';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c34444';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b48ead';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ff4da3';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c566a';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d08770';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d0959b';
              } else {
                if ((!((s as any).hour ?? 0))) {
                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2c303b';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#333a47';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7ba9b6';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#90a77c';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d2b57c';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b57460';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a44f58';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a73234';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9b7b95';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e2388d';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3c4352';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b57460';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b58287';
                } else {
                  if (((s as any).hour ?? 0) === 1) {
                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2b313c';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#333a47';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7ba9b6';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#91a77b';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d4b57c';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b67461';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a44f5a';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a83136';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9b7b96';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e23991';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3c4453';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b67461';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b58288';
                  } else {
                    if (((s as any).hour ?? 0) === 2) {
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2b313c';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#333a48';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7aaab6';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#93a87a';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d6b57c';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b77462';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a54f5b';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a93039';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9a7c97';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e13a94';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3b4453';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b77462';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b5828a';
                    } else {
                      if (((s as any).hour ?? 0) === 3) {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2b313d';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#323b48';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7aaab6';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#94a87a';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d7b47c';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b87363';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a54f5d';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#aa2f3b';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9a7c99';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e03b97';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3b4454';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b87363';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b6838b';
                      } else {
                        if (((s as any).hour ?? 0) === 4) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2a313d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#323b49';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#79abb6';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#96a879';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d9b47d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b97364';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a64f5f';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ab2e3d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9a7d9a';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e03c9b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3a4554';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b97364';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b6838c';
                        } else {
                          if (((s as any).hour ?? 0) === 5) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2e3541';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#353f4d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7cafbb';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#98ac7d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ddb980';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#be7767';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ab5361';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b0333e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9f809e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e63f9c';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3e4859';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#be7767';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc868f';
                          } else {
                            if (((s as any).hour ?? 0) === 6) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#343b49';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3c4555';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#82b7c5';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9eb584';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e4c185';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c77f6c';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#b55a66';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ba3b42';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a987a6';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f246a1';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#444f61';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c77f6c';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c58d95';
                            } else {
                              if (((s as any).hour ?? 0) === 7) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#373f4e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3f495a';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#85bccb';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a1b988';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e8c688';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cc836e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ba5d68';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#be4043';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ae8ba9';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f94aa2';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#485366';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cc836e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cb9198';
                              } else {
                                if (((s as any).hour ?? 0) === 8) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#383f4e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#40495a';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#85bccb';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a1ba88';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e8c789';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cc836e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bb5e68';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf4043';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#af8baa';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f94aa2';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#495366';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cc836e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cb9299';
                                } else {
                                  if (((s as any).hour ?? 0) === 9) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#38404f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#40495b';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#86bdcc';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a1bb89';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e9c789';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cd846f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bb5e69';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c04143';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b08baa';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#fa4ba2';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#495367';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cd846f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cc9299';
                                  } else {
                                    if (((s as any).hour ?? 0) === 10) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#39404f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#414a5b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#86bdcd';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a2bb89';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e9c889';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cd846f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bc5f69';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c04143';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b18cab';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#fb4ba2';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4a5467';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cd846f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cd9399';
                                    } else {
                                      if (((s as any).hour ?? 0) === 11) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#394050';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#414a5c';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#87becd';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a2bc8a';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e9c98a';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ce856f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bc5f69';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14244';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b18cab';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#fc4ba3';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4a5468';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ce856f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cd939a';
                                      } else {
                                        if (((s as any).hour ?? 0) === 12) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3a4150';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#424b5c';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#87bece';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a2bc8a';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eac98a';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ce856f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bd6069';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14244';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b28dac';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#fd4ca3';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4b5568';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ce856f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ce949a';
                                        } else {
                                          if (((s as any).hour ?? 0) === 13) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3a4151';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#424b5d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#87bfcf';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a2bd8b';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eaca8a';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cf8670';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#be606a';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24344';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b38dac';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#fd4ca3';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4b5569';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cf8670';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cf949a';
                                          } else {
                                            if (((s as any).hour ?? 0) === 14) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3b4251';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#434c5d';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#88bfcf';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3bd8b';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ebca8b';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cf8670';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#be616a';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24344';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b38ead';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#fe4da3';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c5669';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cf8670';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cf959b';
                                            } else {
                                              if (((s as any).hour ?? 0) === 15) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3b4252';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#434c5e';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#88c0d0';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3be8c';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ebcb8b';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d08770';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bf616a';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c34444';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b48ead';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ff4da3';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c566a';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d08770';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d0959b';
                                              } else {
                                                if (((s as any).hour ?? 0) === 16) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3b4251';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#434c5d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#88bfcf';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a2be8c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eacb8b';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cf876f';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#be6169';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24443';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b48eac';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ff4da2';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c5669';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cf876f';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cf959a';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 17) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3a4150';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#434b5c';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#88bece';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a1bd8c';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e8ca8a';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ce866f';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bd6068';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14442';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b38dab';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#fd4ca0';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c5568';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ce866f';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ce9499';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 18) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3a404f';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#424a5b';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#88bece';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a0bc8c';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e7ca8a';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cd866e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bc6067';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c04441';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b28caa';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#fd4b9e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4b5467';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cd866e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#cd9499';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 19) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#383d4b';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#404657';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#86b9c9';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9bb889';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e1c687';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c7826a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#b75d62';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ba413c';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ae88a5';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f84797';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#495063';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c7826a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c89094';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 20) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#323643';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3a404e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#81b1c1';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#93b083';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d7be81';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#bd7c63';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ad565a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#af3b34';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a6819b';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ef3e8d';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#43495a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#bd7c63';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be898c';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 21) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2f323e';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#373c4a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7eacbc';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8eac81';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d1ba7e';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b7785f';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a85355';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a9382f';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a17d96';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea3986';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#404655';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b7785f';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b98587';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 22) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2e323d';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#363b49';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7dabba';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8faa7f';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d1b97d';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b6775f';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a65256';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a93631';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9f7c96';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e73989';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3f4554';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b6775f';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b78487';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 23) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2d313c';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#353a48';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7caab8';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fa97d';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d2b77c';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b6765f';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a55157';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a83433';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9d7c95';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e5388b';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3d4453';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b6765f';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b68387';
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
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
                ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e9f0';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d8dee9';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5e81ac';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7faf63';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d6ae55';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b86a52';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9e3c43';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#7a272b';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9b7b98';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a21756';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3b4250';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b86a52';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#af5a61';
                } else {
                  if ((!((s as any).hour ?? 0))) {
                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d2d4';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c5c7cd';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4e6d92';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6d9953';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#bd9947';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#9e5843';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#842b33';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#61161c';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#836880';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#870043';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2c3039';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#9e5843';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#94494f';
                  } else {
                    if (((s as any).hour ?? 0) === 1) {
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d2d4';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c4c8cd';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4d6d92';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6f9952';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c09847';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#9f5844';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#842b35';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#61161e';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#836982';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#870046';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2c303a';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#9f5844';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#954951';
                    } else {
                      if (((s as any).hour ?? 0) === 2) {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d3d5';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c4c8ce';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4b6e93';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#729951';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c29847';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#a05745';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#852a36';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#62151f';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#826983';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#870048';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2b313a';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#a05745';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#954952';
                      } else {
                        if (((s as any).hour ?? 0) === 3) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d3d5';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c4c8cf';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#496e93';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#749850';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c49748';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#a15746';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#862a38';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#631521';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#826a84';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#87004a';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2b313b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#a15746';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#964854';
                        } else {
                          if (((s as any).hour ?? 0) === 4) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d3d6';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c4c9cf';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#486f93';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#76984e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c69748';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#a25748';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#86293a';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#631422';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#826a85';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#87004d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2b313b';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#a25748';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#964856';
                          } else {
                            if (((s as any).hour ?? 0) === 5) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d5d8db';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c8cdd5';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4c7399';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#789d53';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c99c4b';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#a65b4a';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8b2d3b';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#681824';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#876d89';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#8d004e';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2e353f';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#a65b4a';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9c4c58';
                            } else {
                              if (((s as any).hour ?? 0) === 6) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#dde0e5';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d0d5de';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#547aa2';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7ca65a';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d0a450';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#af624e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#943440';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#711f28';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#907490';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#970c53';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#343b47';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#af624e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a5535d';
                              } else {
                                if (((s as any).hour ?? 0) === 7) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e1e5eb';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d4dae4';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#597da7';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7eaa5f';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d3a953';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b46650';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#993842';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#76232a';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#967894';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9d1255';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#383f4c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b46650';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#aa565f';
                                } else {
                                  if (((s as any).hour ?? 0) === 8) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e2e5eb';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d4dae4';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5a7ea8';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7eab5f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d4aa53';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b46651';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9a3942';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#76242a';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#967895';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9d1355';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#383f4c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b46651';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ab575f';
                                  } else {
                                    if (((s as any).hour ?? 0) === 9) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e2e6ec';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d5dbe5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5a7ea8';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7eac60';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d4aa53';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b56751';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9a3942';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#77242a';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#977995';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9e1355';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#38404d';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b56751';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ab5760';
                                    } else {
                                      if (((s as any).hour ?? 0) === 10) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e3e6ed';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d5dbe6';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5b7fa9';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7eac60';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d4ab53';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b56751';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9b3a42';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#77252a';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#987996';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9f1455';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#39404d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b56751';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac5860';
                                      } else {
                                        if (((s as any).hour ?? 0) === 11) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e3e7ed';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d6dce6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5c7faa';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7ead61';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d5ac54';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b66851';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9c3a42';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#78252a';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#987996';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9f1555';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#39404e';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b66851';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ad5860';
                                        } else {
                                          if (((s as any).hour ?? 0) === 12) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e7ee';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d6dce7';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5c80aa';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7fad61';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d5ac54';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b66851';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9c3b42';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#78262a';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#997a97';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a01556';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3a414e';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b66851';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ad5960';
                                          } else {
                                            if (((s as any).hour ?? 0) === 13) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e8ef';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d7dde8';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5d80ab';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7fae62';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d5ad54';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b76952';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9d3b43';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#79262b';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9a7a97';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a11656';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3a414f';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b76952';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ae5961';
                                            } else {
                                              if (((s as any).hour ?? 0) === 14) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e8ef';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d7dde8';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5d81ab';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7fae62';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d6ad55';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b76952';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9d3c43';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#79272b';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9a7b98';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a11656';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3b424f';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b76952';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ae5a61';
                                              } else {
                                                if (((s as any).hour ?? 0) === 15) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e9f0';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d8dee9';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5e81ac';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7faf63';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d6ae55';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b86a52';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9e3c43';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#7a272b';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9b7b98';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a21756';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3b4250';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b86a52';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#af5a61';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 16) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e8ef';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d8dde8';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5e80ab';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7eaf63';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d5ae55';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b76a51';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9d3c42';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#79272a';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9b7b97';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a11755';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3b424f';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b76a51';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ae5a60';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 17) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e7ee';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d7dce7';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5e7faa';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7dae63';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d3ad54';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b66951';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9c3b41';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#782629';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9a7a96';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a01654';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3a414e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b66951';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ad595f';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 18) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e7ed';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d7dce6';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5f7fa9';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7cad63';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d2ad54';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b56950';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9b3b40';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#772629';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#997995';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a01653';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3a404d';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b56950';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac595e';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 19) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e0e2e7';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d3d7e0';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5d7ba4';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#76a961';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cca951';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#af664c';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#96383c';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#722325';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#957590';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9b104d';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#373d49';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#af664c';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a7565a';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 20) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d8dadd';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cccfd6';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#58739b';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6da15c';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c1a24b';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#a55f45';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8c3234';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#691e1e';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8d6e87';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#910244';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#323641';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#a55f45';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9d4f52';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 21) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d4d5d8';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c8cbd1';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#566f96';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#689d5a';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#bb9f48';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#9f5c41';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#862f30';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#631b1a';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#896b82';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#8c003f';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2f323d';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#9f5c41';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#984c4d';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 22) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d3d4d7';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c7cad0';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#536e94';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6a9c58';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#bc9d48';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#9f5b41';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#862e31';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#63191b';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#876a81';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#8b0040';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2e323b';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#9f5b41';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#974b4e';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 23) {
                                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d2d3d5';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c6c8ce';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#516d93';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6b9a56';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#bc9b47';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#9e5942';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#852c32';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#62181b';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#856981';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#890042';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#2d313a';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#9e5942';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#964a4f';
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
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
                  ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                  if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#073642';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#054453';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2aa198';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859900';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b58900';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cb4b16';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc322f';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b82d2d';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6c71c4';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d33682';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#93a1a1';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cb4b16';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf4a5d';
                  } else {
                    if ((!((s as any).hour ?? 0))) {
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#02242d';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#00313d';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1f8b83';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#708400';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9d7500';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#af3804';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bf1a20';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9c171e';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#585ea9';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b7206d';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#858a8a';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#af3804';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a4384b';
                    } else {
                      if (((s as any).hour ?? 0) === 1) {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#01242d';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#00323d';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#208b82';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#738300';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9f7400';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b13609';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c11623';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9e1521';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#555fab';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b72170';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#858b8b';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b13609';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a4384d';
                      } else {
                        if (((s as any).hour ?? 0) === 2) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#00252d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#00323d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#228b80';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#768300';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#a27300';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b3350d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c21226';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9f1323';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5160ac';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b72273';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#848b8b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b3350d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a5384f';
                        } else {
                          if (((s as any).hour ?? 0) === 3) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#00252d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#00323d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#248b7f';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#798300';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#a47300';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b53311';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c40c29';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a01026';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#4e61ad';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b62376';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#848b8b';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b53311';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a53852';
                          } else {
                            if (((s as any).hour ?? 0) === 4) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#00252d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#00333d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#268c7e';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7c8200';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#a77200';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b73115';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c5062d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a10d28';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#4a62ae';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b52479';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#848c8b';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b73115';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a63754';
                            } else {
                              if (((s as any).hour ?? 0) === 5) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#002932';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#003642';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#269084';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7e8700';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#a97700';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#bb3714';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ca152d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a61629';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5265b3';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#bc287a';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#879090';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#bb3714';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ab3b55';
                              } else {
                                if (((s as any).hour ?? 0) === 6) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#032f39';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#003d4a';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#29988d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#838f00';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b07f00';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c34017';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d3232f';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#af212c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5d6bbc';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c72f7f';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#8d9898';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c34017';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b5425a';
                                } else {
                                  if (((s as any).hour ?? 0) === 7) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#05333e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#02414e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a9d92';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849400';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b38400';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c74617';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d82b2f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b4272d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#656ec0';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cd3381';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#909d9d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c74617';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ba465c';
                                  } else {
                                    if (((s as any).hour ?? 0) === 8) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#05333e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#03414f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a9d93';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849500';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b38500';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c84617';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d82c2f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b4282d';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#656fc0';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ce3381';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#919d9d';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c84617';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bb475c';
                                    } else {
                                      if (((s as any).hour ?? 0) === 9) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#05333f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#034150';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a9e94';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849500';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b38500';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c84716';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d92d2f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b5292d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#666fc1';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ce3381';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#919e9e';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c84716';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bb475c';
                                      } else {
                                        if (((s as any).hour ?? 0) === 10) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#06343f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#034250';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a9e95';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849600';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48600';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c94816';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d92e2f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b52a2d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#676fc1';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf3481';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#919e9e';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c94816';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc485c';
                                        } else {
                                          if (((s as any).hour ?? 0) === 11) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#063440';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#044251';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a9f95';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859700';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48700';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c94816';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#da2f2f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b62a2d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6870c2';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d03481';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#929f9f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c94816';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc485c';
                                          } else {
                                            if (((s as any).hour ?? 0) === 12) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#063540';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#044351';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a9f96';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859700';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48700';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ca4916';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#da2f2f';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b62b2d';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6970c2';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d13582';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#929f9f';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ca4916';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bd495d';
                                            } else {
                                              if (((s as any).hour ?? 0) === 13) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#063541';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#044352';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2aa097';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859800';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48800';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ca4a16';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db302f';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b72c2d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6a70c3';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d13582';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#92a0a0';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ca4a16';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be495d';
                                              } else {
                                                if (((s as any).hour ?? 0) === 14) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#073641';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#054452';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2aa097';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859800';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b58800';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cb4a16';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db312f';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b72c2d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6b71c3';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d23682';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#93a0a0';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cb4a16';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be4a5d';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 15) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#073642';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#054453';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2aa198';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859900';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b58900';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cb4b16';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc322f';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b82d2d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6c71c4';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d33682';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#93a1a1';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cb4b16';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf4a5d';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 16) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#083642';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#064453';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2aa098';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849901';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48900';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ca4b15';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db322e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b72d2c';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6d70c3';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d23681';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#93a0a0';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ca4b15';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be4a5c';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 17) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#083541';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#074352';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a9f97';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#829802';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b28800';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c84b13';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d9322d';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b52d2b';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6d6fc1';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d1357f';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#939f9f';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c84b13';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bd495b';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 18) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#093440';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#084251';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#299f97';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#819803';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b18800';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c74b12';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d8332b';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b52d2a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6d6fc0';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d1347e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#929f9f';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c74b12';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc495a';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 19) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#07313c';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#063e4d';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#249a94';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7a9400';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#aa8500';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c0490a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d23026';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ae2a25';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6c6aba';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cc3077';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#8f9a9b';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c0490a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b74655';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 20) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#042a35';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#033746';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1c928e';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#708d00';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9f7e00';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b54300';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c62a1d';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a4241d';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6762b0';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c3276e';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#8a9292';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b54300';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ad404d';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 21) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#032631';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#023442';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#178e8a';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#698900';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#997b00';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ae4100';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c02817';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9e2218';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#665eaa';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#be2268';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#878e8e';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ae4100';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a73c47';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 22) {
                                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#032630';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#013340';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#198d88';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6c8700';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9a7900';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#af3e00';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c0231a';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9d1e1a';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#625eaa';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#bc216a';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#868d8d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#af3e00';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a63b49';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 23) {
                                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#02252e';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#00323f';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1c8c85';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6e8600';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9b7700';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#af3b00';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bf1f1d';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9d1b1c';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5d5eaa';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ba206b';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#858c8c';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#af3b00';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a53a4a';
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
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
                    ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                    if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e4e4';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cdcdcd';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#268bd2';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859900';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b58900';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cb4b16';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc322f';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b82d2d';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6c71c4';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d33682';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#586e75';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cb4b16';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf4a5d';
                    } else {
                      if ((!((s as any).hour ?? 0))) {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#cececd';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#b7b7b7';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0c76b7';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#708400';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9d7500';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#af3804';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bf1a20';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9c171e';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#585ea9';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b7206d';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4b595e';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#af3804';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a4384b';
                      } else {
                        if (((s as any).hour ?? 0) === 1) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#cecece';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#b7b7b7';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0077b7';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#738300';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9f7400';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b13609';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c11623';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9e1521';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#555fab';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b72170';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4b5a5e';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b13609';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a4384d';
                        } else {
                          if (((s as any).hour ?? 0) === 2) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#cecece';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#b8b8b8';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0078b7';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#768300';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#a27300';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b3350d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c21226';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9f1323';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5160ac';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b72273';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4b5a5e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b3350d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a5384f';
                          } else {
                            if (((s as any).hour ?? 0) === 3) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#cecece';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#b8b8b8';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0079b8';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#798300';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#a47300';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b53311';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c40c29';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a01026';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#4e61ad';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b62376';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4b5a5f';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b53311';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a53852';
                            } else {
                              if (((s as any).hour ?? 0) === 4) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#cfcfcf';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#b8b8b8';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0079b8';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7c8200';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#a77200';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b73115';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c5062d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a10d28';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#4a62ae';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b52479';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4a5b5f';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b73115';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a63754';
                              } else {
                                if (((s as any).hour ?? 0) === 5) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d3d3d3';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#bcbcbc';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#007dbd';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7e8700';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#a97700';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#bb3714';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ca152d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a61629';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5265b3';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#bc287a';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4d5f63';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#bb3714';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ab3b55';
                                } else {
                                  if (((s as any).hour ?? 0) === 6) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#dbdbdb';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c4c4c4';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0084c7';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#838f00';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b07f00';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c34017';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d3232f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#af212c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5d6bbc';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c72f7f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#52666c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c34017';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b5425a';
                                  } else {
                                    if (((s as any).hour ?? 0) === 7) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e0e0e0';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c9c9c9';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1788cd';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849400';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b38400';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c74617';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d82b2f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b4272d';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#656ec0';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cd3381';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#556a70';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c74617';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ba465c';
                                    } else {
                                      if (((s as any).hour ?? 0) === 8) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e0e0e0';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c9c9c9';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1988cd';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849500';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b38500';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c84617';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d82c2f';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b4282d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#656fc0';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ce3381';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#566b71';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c84617';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bb475c';
                                      } else {
                                        if (((s as any).hour ?? 0) === 9) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e1e1e1';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cacaca';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1b88ce';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849500';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b38500';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c84716';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d92d2f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b5292d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#666fc1';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ce3381';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#566b72';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c84716';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bb475c';
                                        } else {
                                          if (((s as any).hour ?? 0) === 10) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e1e1e1';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cacaca';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1d89cf';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849600';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48600';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c94816';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d92e2f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b52a2d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#676fc1';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf3481';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#566c72';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c94816';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc485c';
                                          } else {
                                            if (((s as any).hour ?? 0) === 11) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e2e2e2';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cbcbcb';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1f89cf';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859700';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48700';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c94816';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#da2f2f';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b62a2d';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6870c2';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d03481';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#576c73';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c94816';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc485c';
                                            } else {
                                              if (((s as any).hour ?? 0) === 12) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e2e2e2';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cbcbcb';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#218ad0';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859700';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48700';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ca4916';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#da2f2f';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b62b2d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6970c2';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d13582';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#576d73';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ca4916';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bd495d';
                                              } else {
                                                if (((s as any).hour ?? 0) === 13) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e3e3e3';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cccccc';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#238ad1';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859800';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48800';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ca4a16';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db302f';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b72c2d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6a70c3';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d13582';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#576d74';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ca4a16';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be495d';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 14) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e3e3e3';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cccccc';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#248bd1';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859800';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b58800';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cb4a16';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db312f';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b72c2d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6b71c3';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d23682';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#586e74';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cb4a16';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be4a5d';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 15) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e4e4';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cdcdcd';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#268bd2';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859900';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b58900';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cb4b16';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc322f';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b82d2d';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6c71c4';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d33682';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#586e75';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cb4b16';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf4a5d';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 16) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e3e3e3';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cdcccc';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#288ad1';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#849901';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b48900';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ca4b15';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db322e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b72d2c';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6d70c3';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d23681';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#586d74';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ca4b15';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be4a5c';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 17) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e3e3e3';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cccccc';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2b89d0';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#829802';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b28800';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c84b13';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d9322d';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b52d2b';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6d6fc1';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d1357f';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#586d73';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c84b13';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bd495b';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 18) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e2e2e2';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cbcbcb';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2d89cf';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#819803';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b18800';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c74b12';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d8332b';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b52d2a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6d6fc0';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d1347e';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#586c73';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c74b12';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc495a';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 19) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#dedede';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#c7c7c7';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2e84ca';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7a9400';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#aa8500';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c0490a';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d23026';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ae2a25';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6c6aba';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cc3077';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#55686e';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#c0490a';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b74655';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 20) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d5d5d5';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#bfbfbf';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2c7cc0';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#708d00';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9f7e00';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#b54300';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c62a1d';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a4241d';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6762b0';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c3276e';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#506066';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#b54300';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ad404d';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 21) {
                                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d1d1';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#bababa';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2d77bb';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#698900';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#997b00';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ae4100';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c02817';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9e2218';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#665eaa';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#be2268';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4e5c62';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ae4100';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a73c47';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 22) {
                                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d0d0d0';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#b9b9b9';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2477ba';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6c8700';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9a7900';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#af3e00';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c0231a';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9d1e1a';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#625eaa';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#bc216a';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4d5b61';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#af3e00';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a63b49';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 23) {
                                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#cfcfcf';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#b8b8b8';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1b77b8';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#6e8600';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#9b7700';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#af3b00';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bf1f1d';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#9d1b1c';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5d5eaa';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ba206b';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c5a5f';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#af3b00';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a53a4a';
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
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
                      ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                      if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#24283b';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#414868';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7aa2f7';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ece6a';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0af68';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ff9e64';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f7768e';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d4556e';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bb9af7';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f7768e';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#565f89';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ff9e64';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c1868d';
                      } else {
                        if ((!((s as any).hour ?? 0))) {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#151826';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#303650';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#678ddb';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8ab75a';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c79a59';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e38a55';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#da647a';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b8435b';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a486dc';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#da647a';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#444c70';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e38a55';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a6747a';
                        } else {
                          if (((s as any).hour ?? 0) === 1) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#151826';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2f3751';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#648edc';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8db759';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c99a5a';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e58a56';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db647d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b9435e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a187dd';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#db647d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#434d71';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e58a56';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a6747b';
                          } else {
                            if (((s as any).hour ?? 0) === 2) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#141927';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2e3752';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5f8fdd';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#90b757';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ca995a';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e78958';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db647f';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b94360';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9f88df';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#db647f';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#424d71';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e78958';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a7747c';
                            } else {
                              if (((s as any).hour ?? 0) === 3) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#141927';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2d3852';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5b90dd';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#93b656';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cc995b';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e98859';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#db6382';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b94362';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9c89e1';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#db6382';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#404e72';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e98859';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a7747d';
                              } else {
                                if (((s as any).hour ?? 0) === 4) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#131928';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2c3853';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5791de';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#96b654';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ce985c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ea875b';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc6484';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ba4365';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#998ae3';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dc6484';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3f4e73';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ea875b';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a8747e';
                                } else {
                                  if (((s as any).hour ?? 0) === 5) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#171c2c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#313b57';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5f94e3';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#97bb59';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d29d5e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ef8c5d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e16786';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf4666';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a08ee7';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e16786';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#445277';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ef8c5d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ad7881';
                                  } else {
                                    if (((s as any).hour ?? 0) === 6) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1d2233';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#38425f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6a9bed';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9cc461';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d9a563';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f79461';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ec6e8b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c94d6b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ac94ef';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ec6e8b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c5880';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f79461';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b77f87';
                                    } else {
                                      if (((s as any).hour ?? 0) === 7) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#202537';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3d4564';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#729ff2';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9dc965';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ddaa66';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fb9963';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f2728d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cf516d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b397f3';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f2728d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#515c85';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fb9963';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc828a';
                                      } else {
                                        if (((s as any).hour ?? 0) === 8) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#212538';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3d4564';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#739ff3';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9dca66';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ddab66';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fc9a63';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f2738d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cf526d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b497f4';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f2738d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#525c85';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fc9a63';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bc838b';
                                        } else {
                                          if (((s as any).hour ?? 0) === 9) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#212638';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3e4665';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#74a0f3';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9dca66';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#deac66';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fc9a63';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f3738d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d0526d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b598f4';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f3738d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#525d86';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fc9a63';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bd838b';
                                          } else {
                                            if (((s as any).hour ?? 0) === 10) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#222639';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3e4665';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#75a0f4';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9dcb67';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#deac67';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fd9b63';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f4748d';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d1536d';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b698f5';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4748d';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#535d86';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fd9b63';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be848b';
                                            } else {
                                              if (((s as any).hour ?? 0) === 11) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#222739';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3f4666';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#76a0f5';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ecc68';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dead67';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fd9c63';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f4748d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d1536d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b799f5';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4748d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#535d87';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fd9c63';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be848c';
                                              } else {
                                                if (((s as any).hour ?? 0) === 12) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#23273a';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3f4766';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#77a1f5';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ecc68';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dfad67';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe9c63';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f5758d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d2546e';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b899f6';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5758d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#545e87';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe9c63';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf858c';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 13) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#23273a';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#404767';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#78a1f6';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ecd69';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dfae67';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe9d64';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f6758e';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d3546e';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b999f6';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f6758e';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#555e88';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe9d64';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c0858c';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 14) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#24283b';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#404867';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#79a2f6';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ecd69';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0ae68';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ff9d64';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f6768e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d3556e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ba9af7';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f6768e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#555f88';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ff9d64';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c0868d';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 15) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#24283b';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#414868';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7aa2f7';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ece6a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0af68';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ff9e64';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f7768e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d4556e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bb9af7';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f7768e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#565f89';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ff9e64';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c1868d';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 16) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#24283a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#414867';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7ba1f6';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9dce6a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dfaf68';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe9e63';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f6768d';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d3556d';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bb99f6';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f6768d';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#565e88';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe9e63';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c0868c';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 17) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#242739';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#414766';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7ba0f4';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9bcd6a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ddae67';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fc9d63';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f5758c';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d2546c';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bb98f4';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5758c';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#565e87';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fc9d63';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf858b';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 18) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#232639';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#414665';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7ca0f4';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9acc6b';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dcae67';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fb9d62';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f4758b';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d1546b';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bb98f3';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4758b';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#565d86';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fb9d62';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be858b';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 19) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#212334';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#3e4260';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7b9bee';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#94c869';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d6aa63';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f49a5d';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ef7185';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#cc5165';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b993ec';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ef7185';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#545981';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f49a5d';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b98186';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 20) {
                                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1c1d2d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#393c58';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7792e3';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8ac064';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cba35d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e99356';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e46b7c';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24a5d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b38be1';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e46b7c';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4e5278';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e99356';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#af7a7e';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 21) {
                                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#191a28';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#363853';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#778edd';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#84bc62';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c59f5a';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e39052';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#df6776';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bc4757';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b186db';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#df6776';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c4e73';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e39052';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#aa7779';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 22) {
                                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#181928';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#343752';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#728edd';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#86bb60';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c69e5a';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e38e53';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dd6678';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bb4659';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ad86db';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dd6678';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#494d72';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e38e53';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a97679';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 23) {
                                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#161927';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#323751';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#6d8ddc';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#88b95d';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#c69c5a';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e38c54';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc6579';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ba445a';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a986db';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dc6579';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#474d71';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e38c54';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#a77579';
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
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
                        ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                        if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e6e7ed';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6c6e75';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2959aa';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#385f0d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8f5e15';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#965027';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8c4351';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6c2f3a';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5a3e8e';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b65c7a';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6e75';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#965027';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#955b5b';
                        } else {
                          if ((!((s as any).hour ?? 0))) {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d1d1';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5a5b5c';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0f4790';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#274b00';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#774c06';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#7d3e19';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#73333f';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#541f29';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#452d75';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9b4b66';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a5b5c';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#7d3e19';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#7b4a4a';
                          } else {
                            if (((s as any).hour ?? 0) === 1) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d1d1';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5a5b5d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#004791';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#294b00';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#794b07';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#7e3e1b';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#733341';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#541f2b';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#432e77';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9b4b68';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a5b5d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#7e3e1b';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#7c4a4b';
                            } else {
                              if (((s as any).hour ?? 0) === 2) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d1d2';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5a5b5e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#004892';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#2c4b00';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#7a4b08';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#7f3d1c';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#733342';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#541f2c';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#402f79';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9b4b6a';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a5b5e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#7f3d1c';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#7c4a4c';
                              } else {
                                if (((s as any).hour ?? 0) === 3) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d1d3';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5a5b5e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#004993';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#2e4b00';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#7c4a09';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#813d1d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#743343';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#551f2d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#3d307a';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9b4b6b';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a5b5e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#813d1d';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#7d4a4d';
                                } else {
                                  if (((s as any).hour ?? 0) === 4) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d1d2d3';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5a5c5f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#004a94';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#304b00';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#7e490b';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#823c1f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#743345';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#551f2e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#39317c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9b4c6d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a5c5f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#823c1f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#7e4a4e';
                                  } else {
                                    if (((s as any).hour ?? 0) === 5) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d6d6d9';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5e5f63';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#004d98';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#314f00';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#814e0d';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#864020';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#793647';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#5a2330';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#41347f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a14f70';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5e5f63';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#864020';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#824d51';
                                    } else {
                                      if (((s as any).hour ?? 0) === 6) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#dddee2';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#65676c';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0553a1';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#365702';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#895511';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#8e4824';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#823c4d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#632936';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#4c3987';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ab5576';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#65676c';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#8e4824';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#8b5456';
                                      } else {
                                        if (((s as any).hour ?? 0) === 7) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e2e3e8';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#686a70';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1c56a6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#375b07';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8c5a13';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#924c26';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#87404f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#672c38';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#533c8b';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b15978';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#686a70';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#924c26';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#905859';
                                        } else {
                                          if (((s as any).hour ?? 0) === 8) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e2e3e8';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#696b71';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1e57a6';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#375b08';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8c5a14';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#934c26';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#88404f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#682c38';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#543c8b';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b15978';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#696b71';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#934c26';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#915859';
                                          } else {
                                            if (((s as any).hour ?? 0) === 9) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e3e4e9';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#696b72';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1f57a7';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#375c09';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8d5b14';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#934d26';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#88414f';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#692d38';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#553c8b';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b25a78';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#696b72';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#934d26';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#915859';
                                            } else {
                                              if (((s as any).hour ?? 0) === 10) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e3e4ea';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6a6c72';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2157a7';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#375c09';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8d5b14';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#944d26';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#894150';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#692d39';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#563d8c';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b35a79';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6a6c72';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#944d26';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#92595a';
                                              } else {
                                                if (((s as any).hour ?? 0) === 11) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e5ea';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6a6c73';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2358a8';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#385d0a';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8d5c14';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#944e26';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8a4150';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6a2d39';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#573d8c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b35a79';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6a6c73';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#944e26';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#93595a';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 12) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e5eb';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6b6d73';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2458a8';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#385d0b';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8e5c14';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#954e27';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8a4250';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6a2e39';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#573d8d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b45b79';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6d73';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#954e27';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#935a5a';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 13) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e6ec';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6b6d74';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2658a9';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#385e0c';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8e5d15';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#954f27';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8b4250';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6b2e39';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#583d8d';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b55b79';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6d74';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#954f27';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#945a5a';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 14) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e6ec';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6c6e74';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2859a9';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#385e0c';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8f5d15';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#964f27';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8b4351';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6b2f3a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#593e8e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b55c7a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6e74';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#964f27';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#945b5b';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 15) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e6e7ed';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6c6e75';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2959aa';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#385f0d';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8f5e15';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#965027';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8c4351';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6c2f3a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5a3e8e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b65c7a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6e75';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#965027';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#955b5b';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 16) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e6e6ec';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6c6e74';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2b58a9';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#375f0d';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8e5e15';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#955026';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8b4350';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6b2f39';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5a3d8d';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b55c79';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6e74';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#955026';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#945b5a';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 17) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e6eb';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6b6d73';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2c57a8';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#365e0e';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8c5d14';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#944f26';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8a424f';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6a2e38';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5a3c8b';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b45b78';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6d73';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#944f26';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#935a59';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 18) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e5ea';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6b6c72';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2e57a7';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#355d0e';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8b5d14';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#934f25';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#89424e';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#692e38';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5b3c8a';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b45b77';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6c72';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#934f25';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#925a59';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 19) {
                                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e0e1e4';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#67686d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2e52a1';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#2f5a0c';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#865a0f';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#8d4c21';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#843f4a';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#652b34';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#593785';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#af5771';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#67686d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#8d4c21';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#8d5655';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 20) {
                                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d8d8da';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#616165';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2b4b97';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#275308';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#7c5408';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#83461b';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#7b3942';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#5c252d';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#53307b';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a55169';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#616165';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#83461b';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#84504e';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 21) {
                                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d4d4d5';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5d5d60';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2c4792';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#214f06';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#765103';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#7d4317';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#76353e';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#572229';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#512c75';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#a14d64';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5d5d60';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#7d4317';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#7f4d49';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 22) {
                                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d3d3d4';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5c5c5f';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#244791';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#234e04';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#764f04';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#7d4218';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#75343e';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#562129';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#4d2c75';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9f4c64';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5c5c5f';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#7d4218';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#7e4c4a';
                                                                      } else {
                                                                        if (((s as any).hour ?? 0) === 23) {
                                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#d2d2d2';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#5b5b5e';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1b4790';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#254d01';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#774d05';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#7d4019';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#74333f';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#552029';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#492d75';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#9d4b65';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5b5b5e';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#7d4019';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#7c4b4a';
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
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
                          ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                          if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1f1d2e';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#26233a';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#31748f';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8dd3c7';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6c177';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ebbcba';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e45b83';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24b6a';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a7e7';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#eb6f92';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6e6a86';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6c177';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c6808c';
                          } else {
                            if ((!((s as any).hour ?? 0))) {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#0f0b1a';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#161325';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#265f76';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#80bbb1';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dcac68';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cfa8a6';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c8496f';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a73957';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ad93cc';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d7e';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a576d';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dcac68';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ab6e78';
                            } else {
                              if (((s as any).hour ?? 0) === 1) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#0f0b1b';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#151426';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#256076';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#80bcb0';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#deab69';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cfa8a7';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c84972';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a73959';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ab94ce';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d80';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a586e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#deab69';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ab6e7a';
                              } else {
                                if (((s as any).hour ?? 0) === 2) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#0e0c1b';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#151426';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#236076';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#81bcaf';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0ab69';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d0a8a8';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c84974';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a7395c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#aa94cf';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d82';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#59586f';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e0ab69';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac6e7b';
                                } else {
                                  if (((s as any).hour ?? 0) === 3) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#0e0c1c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#141527';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#216176';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#81bcaf';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e2aa6a';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d1a8a9';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c84977';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a7395e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a895d0';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d85';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#595870';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e2aa6a';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac6e7c';
                                  } else {
                                    if (((s as any).hour ?? 0) === 4) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#0e0d1c';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#141527';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#206176';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#82bdae';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e4aa6b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d1a9aa';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c8497a';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a83960';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a696d2';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d87';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#585970';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e4aa6b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac6e7e';
                                    } else {
                                      if (((s as any).hour ?? 0) === 5) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#121120';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#17182b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#23657b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#84c1b3';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e8af6d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d6adad';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ce4d7b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ad3d62';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ad99d6';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d56189';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5d5c75';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e8af6d';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b17281';
                                      } else {
                                        if (((s as any).hour ?? 0) === 6) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#181727';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#1e1d32';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#296c85';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#89cabc';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#efb772';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e0b4b4';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d85480';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b74467';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b7a0df';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#df688f';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#65637d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#efb772';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bb7987';
                                        } else {
                                          if (((s as any).hour ?? 0) === 7) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1b1a2a';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#222036';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2d708a';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8bcfc2';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f3bc75';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e6b8b7';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#de5782';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bd4769';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bea4e3';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e56c90';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#696782';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f3bc75';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c17c8a';
                                          } else {
                                            if (((s as any).hour ?? 0) === 8) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1c1b2b';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#232137';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2e718a';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8bcfc2';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f3bd75';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e6b9b7';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#df5882';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bd4869';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bea4e4';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e66c91';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6a6782';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f3bd75';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c17d8a';
                                            } else {
                                              if (((s as any).hour ?? 0) === 9) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1c1b2b';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#232137';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2e718b';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8cd0c3';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f4bd75';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e7b9b8';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e05882';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#be4869';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bfa5e4';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e76c91';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6783';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4bd75';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c27d8a';
                                              } else {
                                                if (((s as any).hour ?? 0) === 10) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1d1b2c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#242138';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2f728c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8cd0c4';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f4be76';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e8bab8';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e05982';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf4969';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c0a5e5';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e76d91';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6883';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4be76';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c37e8a';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 11) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1d1c2c';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#242238';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2f728c';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8cd1c4';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f4bf76';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e8bab9';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e15982';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf4969';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c1a5e5';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e86d91';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6884';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4bf76';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c37e8b';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 12) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1e1c2d';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#252239';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#30738d';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8cd1c5';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f5bf76';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e9bbb9';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e25a83';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c04a69';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c2a6e6';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e96e91';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6984';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5bf76';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c47f8b';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 13) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1e1c2d';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#252239';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#30738e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8dd2c6';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f5c076';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eabbb9';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e35a83';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14a6a';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c2a6e6';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea6e92';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6d6985';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5c076';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c57f8b';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 14) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1f1d2e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#25233a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#31748e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8dd2c6';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6c077';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eabcba';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e35b83';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14b6a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c3a7e7';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea6f92';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6d6a85';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6c077';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c5808c';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 15) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1f1d2e';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#26233a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#31748f';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8dd3c7';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6c177';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ebbcba';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e45b83';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24b6a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a7e7';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#eb6f92';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6e6a86';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6c177';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c6808c';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 16) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1f1d2d';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#262339';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#31738e';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8dd2c7';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f5c177';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#eabcb9';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e35b82';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14b69';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a6e6';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea6f91';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6e6a85';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5c177';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c5808b';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 17) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1e1c2c';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#252238';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#32728d';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8cd1c6';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f3c076';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e9bbb8';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e25a80';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c04a68';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c3a5e4';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e96e8f';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6d6984';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f3c076';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c47f8a';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 18) {
                                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1e1c2c';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#252137';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#33728d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8cd1c6';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f2c076';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e8bbb8';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e15a7f';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf4a67';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c3a5e3';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e86e8e';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6d6883';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f2c076';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c37f89';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 19) {
                                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1b1828';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#221e33';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#316e88';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#89ccc3';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ecbc72';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e2b7b3';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc5679';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ba4661';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c0a0dd';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e36a88';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6a647e';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ecbc72';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be7b84';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 20) {
                                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#161220';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#1d182b';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2d6680';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#83c4bb';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e1b56c';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d8afac';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d24f70';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b04059';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b998d3';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d9637f';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#635d75';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e1b56c';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b5747c';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 21) {
                                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#130e1c';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#1a1527';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2c627b';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7fbfb8';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dab169';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d3aba7';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cd4c6a';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ab3d53';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b694cd';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d4607a';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#605970';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dab169';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#af7177';
                                                                      } else {
                                                                        if (((s as any).hour ?? 0) === 22) {
                                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#120d1c';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#191527';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a617a';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7fbeb5';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dbaf68';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d1aaa7';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cb4b6c';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#aa3b55';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b394cd';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d25f7b';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5e596f';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dbaf68';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ae7078';
                                                                        } else {
                                                                          if (((s as any).hour ?? 0) === 23) {
                                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#100c1b';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#171426';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#286078';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7fbdb3';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dcae68';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d0a9a7';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ca4a6e';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a83a56';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b093cc';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d15e7c';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5c586e';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dcae68';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac6f78';
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
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
                            ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                            if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2a273f';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#393552';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3e8fb0';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fd2c6';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6c177';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ea9a97';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e45b83';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24b6a';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a7e7';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#eb6f92';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6e6a86';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6c177';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c6808c';
                            } else {
                              if ((!((s as any).hour ?? 0))) {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#19172a';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#28243c';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#337a96';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#81bab0';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dcac68';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ce8784';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c8496f';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a73957';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ad93cc';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d7e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a576d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dcac68';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ab6e78';
                              } else {
                                if (((s as any).hour ?? 0) === 1) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#19182a';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#27253c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#317a96';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#82bbaf';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#deab69';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cf8786';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c84972';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a73959';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ab94ce';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d80';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5a586e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#deab69';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ab6e7a';
                                } else {
                                  if (((s as any).hour ?? 0) === 2) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#18182b';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#26253d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2f7b96';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#82bbaf';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0ab69';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cf8787';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c84974';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a7395c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#aa94cf';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d82';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#59586f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e0ab69';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac6e7b';
                                  } else {
                                    if (((s as any).hour ?? 0) === 3) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#18182c';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#25263e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2d7b96';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#83bbae';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e2aa6a';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d08789';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c84977';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a7395e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a895d0';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d85';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#595870';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e2aa6a';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac6e7c';
                                    } else {
                                      if (((s as any).hour ?? 0) === 4) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#17192c';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#25263e';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2b7c96';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#84bcad';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e4aa6b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d1878a';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#c8497a';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a83960';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#a696d2';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cf5d87';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#585970';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e4aa6b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac6e7e';
                                      } else {
                                        if (((s as any).hour ?? 0) === 5) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1b1c30';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#292942';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2f809b';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#86c0b2';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e8af6d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d68b8d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ce4d7b';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ad3d62';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ad99d6';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d56189';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5d5c75';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e8af6d';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b17281';
                                        } else {
                                          if (((s as any).hour ?? 0) === 6) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#222137';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#302f4a';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3687a5';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8bc9bb';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#efb772';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e09292';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d85480';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b74467';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b7a0df';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#df688f';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#65637d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#efb772';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bb7987';
                                          } else {
                                            if (((s as any).hour ?? 0) === 7) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#26243b';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#35324e';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3a8bab';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8dcec1';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f3bc75';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e59695';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#de5782';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bd4769';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bea4e3';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e56c90';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#696782';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f3bc75';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c17c8a';
                                            } else {
                                              if (((s as any).hour ?? 0) === 8) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#26253c';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#35324f';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3a8cab';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8dcec1';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f3bd75';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e69795';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#df5882';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bd4869';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bea4e4';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e66c91';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6a6782';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f3bd75';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c17d8a';
                                              } else {
                                                if (((s as any).hour ?? 0) === 9) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#27253c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#36334f';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3b8cac';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8ecfc2';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f4bd75';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e69795';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e05882';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#be4869';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bfa5e4';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e76c91';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6783';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4bd75';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c27d8a';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 10) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#27253d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#363350';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3b8dad';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8ecfc3';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f4be76';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e79896';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e05982';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf4969';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c0a5e5';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e76d91';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6b6883';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4be76';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c37e8a';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 11) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#28263d';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#373450';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3c8dad';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8ed0c3';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f4bf76';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e79896';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e15982';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf4969';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c1a5e5';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e86d91';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6884';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f4bf76';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c37e8b';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 12) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#28263e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#373451';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3c8eae';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8ed0c4';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f5bf76';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e89996';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e25a83';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c04a69';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c2a6e6';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e96e91';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6984';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5bf76';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c47f8b';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 13) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#29263e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#383451';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3d8eaf';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fd1c5';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f5c076';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e99996';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e35a83';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14a6a';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c2a6e6';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea6e92';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6d6985';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5c076';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c57f8b';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 14) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#29273f';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#383552';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3d8faf';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fd1c5';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6c077';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e99a97';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e35b83';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14b6a';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c3a7e7';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea6f92';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6d6a85';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6c077';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c5808c';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 15) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2a273f';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#393552';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3e8fb0';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fd2c6';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6c177';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ea9a97';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e45b83';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24b6a';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a7e7';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#eb6f92';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6e6a86';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6c177';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c6808c';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 16) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2a273e';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#393551';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3f8eaf';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fd1c6';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f5c177';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e99a96';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e35b82';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c14b69';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a6e6';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea6f91';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6e6a85';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5c177';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c5808b';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 17) {
                                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#29263d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#383450';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3f8dae';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8ed0c5';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f3c076';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e89995';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e25a80';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c04a68';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c3a5e4';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e96e8f';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6d6984';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f3c076';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c47f8a';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 18) {
                                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#29253c';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#38334f';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#408dae';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8ed0c5';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f2c076';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e79994';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e15a7f';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#bf4a67';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c3a5e3';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e86e8e';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6d6883';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f2c076';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c37f89';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 19) {
                                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#262238';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#36304b';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3e88a9';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8bcbc1';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ecbc72';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#e19590';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc5679';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ba4661';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c0a0dd';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#e36a88';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6a647e';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ecbc72';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#be7b84';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 20) {
                                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#211c30';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#302942';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3b80a0';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#85c3ba';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e1b56c';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d78e88';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#d24f70';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b04059';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b998d3';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d9637f';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#635d75';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e1b56c';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#b5747c';
                                                                      } else {
                                                                        if (((s as any).hour ?? 0) === 21) {
                                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1e192c';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2d263e';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#397c9c';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#81beb7';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dab169';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d18b83';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cd4c6a';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ab3d53';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b694cd';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d4607a';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#605970';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dab169';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#af7177';
                                                                        } else {
                                                                          if (((s as any).hour ?? 0) === 22) {
                                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1d182b';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#2b263d';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#377b9a';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#81bdb4';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dbaf68';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d08983';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#cb4b6c';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#aa3b55';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b394cd';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d25f7b';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5e596f';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dbaf68';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ae7078';
                                                                          } else {
                                                                            if (((s as any).hour ?? 0) === 23) {
                                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1b182a';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#29253c';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#357a98';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#81bcb2';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dcae68';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cf8884';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ca4a6e';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#a83a56';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b093cc';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d15e7c';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#5c586e';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dcae68';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#ac6f78';
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
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
                              ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                              if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fffaf3';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f2e9e1';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#286983';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4d9a8e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ea9d34';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d7827e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#b0526f';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8f3f56';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#907aa9';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dd7fa5';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9893a5';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ea9d34';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9d5958';
                              } else {
                                if ((!((s as any).hour ?? 0))) {
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e4e2';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d7d3d0';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1d556b';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#418479';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d08925';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#bb706c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#95415c';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#752f44';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#7a6790';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c26d8f';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#837f8b';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d08925';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#834847';
                                } else {
                                  if (((s as any).hour ?? 0) === 1) {
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e5e4e2';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d8d3d0';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1c556b';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#428479';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d28826';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#bc6f6e';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#96415d';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#762f45';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#796891';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c16d91';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#827f8c';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d28826';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#844848';
                                  } else {
                                    if (((s as any).hour ?? 0) === 2) {
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e6e4e2';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d8d4d0';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1a566b';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#438478';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d58728';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#bd6f6f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#96415f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#762f47';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#786892';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c16d93';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#82808d';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d58728';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#84484a';
                                    } else {
                                      if (((s as any).hour ?? 0) === 3) {
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e6e4e2';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d9d4d0';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#18566b';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#448577';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d7862a';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#be6f71';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#964161';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#762f48';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#776993';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c16e95';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#82808e';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d7862a';
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#85484b';
                                      } else {
                                        if (((s as any).hour ?? 0) === 4) {
                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e7e4e2';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#dad4d0';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#16576b';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#448576';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#da852c';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#be6f72';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#964263';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#762f4a';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#766994';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c16e97';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#82808e';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#da852c';
                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#85484c';
                                        } else {
                                          if (((s as any).hour ?? 0) === 5) {
                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#ece9e5';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#dfd8d4';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1a5a70';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#46897b';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#dd8a2d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c37374';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9b4565';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#7b324c';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#7b6d99';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c7729a';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#878493';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#dd8a2d';
                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#8a4b4e';
                                          } else {
                                            if (((s as any).hour ?? 0) === 6) {
                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#f5f1ec';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#e8e0da';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#206279';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4a9184';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e49331';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cd7a7a';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a54b6b';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#853852';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8573a1';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d178a0';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#8f8b9c';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e49331';
                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#935254';
                                            } else {
                                              if (((s as any).hour ?? 0) === 7) {
                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#faf6f0';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#ede5de';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#24657e';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4c9689';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e79833';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d27e7c';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ab4f6d';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8a3c54';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8a77a5';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d77ca3';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#938fa0';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e79833';
                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#985556';
                                              } else {
                                                if (((s as any).hour ?? 0) === 8) {
                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fbf6f0';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#eee5de';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#25667f';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4c968a';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e89933';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d37f7c';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ab4f6d';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8b3c54';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8b77a6';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d87ca3';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9490a1';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e89933';
                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#995656';
                                                } else {
                                                  if (((s as any).hour ?? 0) === 9) {
                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fbf7f1';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#eee6df';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#25667f';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4c978a';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e89933';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d37f7d';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ac506e';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8b3d54';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8c78a6';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d97da3';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9590a2';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e89933';
                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#995656';
                                                  } else {
                                                    if (((s as any).hour ?? 0) === 10) {
                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fcf7f1';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#efe6df';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#266780';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4c978b';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e89a33';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d4807d';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ad506e';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8c3d55';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8c78a7';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d97da4';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9591a2';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e89a33';
                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9a5757';
                                                    } else {
                                                      if (((s as any).hour ?? 0) === 11) {
                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fdf8f1';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f0e7df';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#266780';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4c988b';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e99a33';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d5807d';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ad506e';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8c3d55';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8d78a7';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#da7da4';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9691a3';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e99a33';
                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9b5757';
                                                      } else {
                                                        if (((s as any).hour ?? 0) === 12) {
                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fdf8f2';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f0e7e0';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#276881';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4d988c';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e99b34';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d5817d';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ae516e';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8d3e55';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8e79a8';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#db7ea4';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9692a3';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e99b34';
                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9b5857';
                                                        } else {
                                                          if (((s as any).hour ?? 0) === 13) {
                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fef9f2';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f1e8e0';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#276882';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4d998d';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e99c34';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d6817e';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#af516f';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8e3e55';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8f79a8';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dc7ea4';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9792a4';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e99c34';
                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9c5857';
                                                          } else {
                                                            if (((s as any).hour ?? 0) === 14) {
                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fef9f3';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f1e8e1';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#286982';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4d998d';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ea9c34';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d6827e';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#af526f';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8e3f56';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8f7aa9';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dc7fa5';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9793a4';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ea9c34';
                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9c5958';
                                                            } else {
                                                              if (((s as any).hour ?? 0) === 15) {
                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fffaf3';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f2e9e1';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#286983';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4d9a8e';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ea9d34';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d7827e';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#b0526f';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8f3f56';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#907aa9';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dd7fa5';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9893a5';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ea9d34';
                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9d5958';
                                                              } else {
                                                                if (((s as any).hour ?? 0) === 16) {
                                                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fefaf3';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f1e9e1';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#296882';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4d998e';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e99d33';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d6827d';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#af526e';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8e3f55';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9079a8';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dc7fa4';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9893a4';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e99d33';
                                                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9c5957';
                                                                } else {
                                                                  if (((s as any).hour ?? 0) === 17) {
                                                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fdf9f2';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f0e8e0';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#296781';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4c988d';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e79c33';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d5817c';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ae516d';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8d3e54';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8f79a7';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#db7ea3';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9792a3';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e79c33';
                                                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9b5856';
                                                                  } else {
                                                                    if (((s as any).hour ?? 0) === 18) {
                                                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fcf8f2';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#efe7e0';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2a6781';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4c988d';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e69c32';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d4817b';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ad516c';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8c3e53';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8f78a6';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#db7ea2';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9691a2';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#e69c32';
                                                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9a5856';
                                                                    } else {
                                                                      if (((s as any).hour ?? 0) === 19) {
                                                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#f7f4ef';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#eae3dc';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#28637c';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#49948a';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#df992e';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ce7d77';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#a94d67';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#883b4e';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8c74a0';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d67a9c';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#938d9d';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#df992e';
                                                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#955551';
                                                                      } else {
                                                                        if (((s as any).hour ?? 0) === 20) {
                                                                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#eeebe8';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#e0dbd6';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#255b74';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#438b83';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#d39326';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#c4776f';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9f475e';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#7f3447';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#856d97';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#cd7392';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#8b8694';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d39326';
                                                                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#8b4e4a';
                                                                        } else {
                                                                          if (((s as any).hour ?? 0) === 21) {
                                                                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e8e7e4';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#dbd7d2';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#235770';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#408780';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cc8f22';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#bf736a';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9a4359';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#7a3142';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#826991';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c86f8d';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#87828f';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cc8f22';
                                                                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#864b46';
                                                                          } else {
                                                                            if (((s as any).hour ?? 0) === 22) {
                                                                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e7e6e3';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#dad5d1';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#21566e';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#40867e';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cd8d22';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#be726b';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#99425a';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#783042';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#7f6891';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c66e8e';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#86818e';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cd8d22';
                                                                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#854a46';
                                                                            } else {
                                                                              if (((s as any).hour ?? 0) === 23) {
                                                                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                                                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                                                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e6e5e3';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#d8d4d1';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1f566c';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#41857c';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#cf8b24';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#bd716b';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#97425b';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#772f43';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#7d6890';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#c46d8e';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#84808d';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cf8b24';
                                                                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#844947';
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
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
                              if (String((s as any).locArgs?.[1] ?? '') === 'indoors') {
                                ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              } else {
                                if (((s as any).DayStage ?? 0) === 6  ||  ((s as any).DayStage ?? 0) === 1) {
                                  ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                } else {
                                  if (((s as any).DayStage ?? 0) === 2) {
                                    ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  } else {
                                    if (((s as any).DayStage ?? 0) === 3) {
                                      ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    } else {
                                      if (((s as any).DayStage ?? 0) === 4) {
                                        ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = ((s as any).rgb ?? 0)(((s as any).BColorBase ?? 0), ((s as any).BColorBase ?? 0) - ((s as any).BColorBase ?? 0) / 4, ((s as any).BColorBase ?? 0) - ((s as any).BColorBase ?? 0) / 4);
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      } else {
                                        ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      }
                                    }
                                  }
                                }
                              }
                              if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#202020';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#303030';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1E77C7';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#40a02b';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#df8e1d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe640b';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e64553';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d20f39';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8839ef';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea76cb';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6f85';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe640b';
                              } else {
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#ffffff';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#E6F2FF';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#38C0D6';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6da95';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eed49f';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f5a97f';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ee99a0';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ed8796';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c6a0f6';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5bde6';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adcb';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5a97f';
                              }
                            }
                          }
                        }
                      }
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
        ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#ffffff';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#E6F2FF';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#0F78B8';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#40a02b';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#df8e1d';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe640b';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e64553';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d20f39';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8839ef';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea76cb';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6f85';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe640b';
        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d24b4b';
      } else {
        if (((s as any).theme ?? 0)?.['name'] === 'Black') {
          ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#202020';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#303030';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#38C0D6';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6da95';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eed49f';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f5a97f';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ee99a0';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ed8796';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c6a0f6';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5bde6';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adcb';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5a97f';
          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f0c6c6';
        } else {
          if (((s as any).theme ?? 0)?.['name'] === 'Modern Grey') {
            ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#202020';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#303030';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#38C0D6';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6da95';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eed49f';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f5a97f';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ee99a0';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ed8796';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c6a0f6';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5bde6';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adcb';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5a97f';
            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f0c6c6';
          } else {
            if (((s as any).theme ?? 0)?.['name'] === 'Latte') {
              (s as any).temp_theme_new_schema = 1;
              ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#bcc0cc';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#acb0be';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#1E77C7';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#40a02b';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#df8e1d';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fe640b';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e64553';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d20f39';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#8839ef';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#ea76cb';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6f85';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fe640b';
              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d24b4b';
            } else {
              if (((s as any).theme ?? 0)?.['name'] === 'Frappé') {
                (s as any).temp_theme_new_schema = 1;
                ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#51576d';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#626880';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#4FB8C6';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6d189';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e5c890';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ef9f76';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ea999c';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#e78284';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#ca9ee6';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f4b8e4';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adce';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ef9f76';
                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#eebebe';
              } else {
                if (((s as any).theme ?? 0)?.['name'] === 'Macchiato') {
                  (s as any).temp_theme_new_schema = 1;
                  ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#494D64';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#363A4F';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#70D0DA';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6da95';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#eed49f';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#f5a97f';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#ee99a0';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#ed8796';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c6a0f6';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5bde6';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a5adcb';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f5a97f';
                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f0c6c6';
                } else {
                  if (((s as any).theme ?? 0)?.['name'] === 'Mocha') {
                    ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#45475a';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#585b70';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5FC6D6';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a6e3a1';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f9e2af';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#fab387';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#eba0ac';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#f38ba8';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#cba6f7';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f5c2e7';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#a6adc8';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#fab387';
                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#f2cdcd';
                  } else {
                    if (((s as any).theme ?? 0)?.['name'] === 'Nord Light') {
                      ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#E5E9F0';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#D8DEE9';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#5E81AC';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#7FAF63';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#D6AE55';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#B86A52';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#9E3C43';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#7A272B';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#9B7B98';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#A21756';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#3B4250';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#B86A52';
                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#af5a61';
                    } else {
                      if (((s as any).theme ?? 0)?.['name'] === 'Nord Dark') {
                        ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#3b4252';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#434c5e';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#88C0D0';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#a3be8c';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ebcb8b';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d08770';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#bf616a';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c34444';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#b48ead';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#FF4DA3';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#4c566a';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#d08770';
                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#d0959b';
                      } else {
                        if (((s as any).theme ?? 0)?.['name'] === 'Solarized Light') {
                          ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                          ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e4e4e4';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#cdcdcd';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#268BD2';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859900';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b58900';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cb4b16';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc322f';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b82d2d';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6c71c4';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d33682';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#586e75';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cb4b16';
                          ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf4a5d';
                        } else {
                          if (((s as any).theme ?? 0)?.['name'] === 'Solarized Dark') {
                            ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                            ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                            ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#073642';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#054453';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2AA198';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#859900';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#b58900';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#cb4b16';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#dc322f';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#b82d2d';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#6c71c4';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#d33682';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#93a1a1';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#cb4b16';
                            ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#bf4a5d';
                          } else {
                            if (((s as any).theme ?? 0)?.['name'] === 'Tokyo Night') {
                              ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                              ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                              ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#24283b';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#414868';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#7aa2f7';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#9ece6a';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#e0af68';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ff9e64';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#f7768e';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#d4556e';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#bb9af7';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#f7768e';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#565f89';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ff9e64';
                              ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c1868d';
                            } else {
                              if (((s as any).theme ?? 0)?.['name'] === 'Tokyo Night Light') {
                                ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#e6e7ed';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#6c6e75';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#2959aa';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#385f0d';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#8f5e15';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#965027';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#8c4351';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#6c2f3a';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#5a3e8e';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#b65c7a';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6c6e75';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#965027';
                                ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#955b5b';
                              } else {
                                if (((s as any).theme ?? 0)?.['name'] === 'Rosé Pine') {
                                  ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                                  ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                  ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#1f1d2e';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#26233a';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#31748f';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8dd3c7';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6c177';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ebbcba';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e45b83';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24b6a';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a7e7';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#eb6f92';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6e6a86';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6c177';
                                  ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c6808c';
                                } else {
                                  if (((s as any).theme ?? 0)?.['name'] === 'Rosé Pine Moon') {
                                    ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 1;
                                    ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                    ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#2a273f';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#393552';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#3e8fb0';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#8fd2c6';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#f6c177';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#ea9a97';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#e45b83';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#c24b6a';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#c4a7e7';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#eb6f92';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#6e6a86';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#f6c177';
                                    ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#c6808c';
                                  } else {
                                    if (((s as any).theme ?? 0)?.['name'] === 'Rosé Pine Dawn') {
                                      ((s as any).theme = (s as any).theme ?? {})['is_dark'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['bcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['fcolor'] = 0;
                                      ((s as any).theme = (s as any).theme ?? {})['lcolor'] = 0;
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = '#fffaf3';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = '#f2e9e1';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = '#286983';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = '#4d9a8e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = '#ea9d34';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = '#d7827e';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = '#b0526f';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = '#8f3f56';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = '#907aa9';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = '#dd7fa5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = '#9893a5';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = '#ea9d34';
                                      ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = '#9d5958';
                                    } else {
                                      if (((s as any).theme ?? 0)?.['name'] === 'Custom') {
                                        ((s as any).theme = (s as any).theme ?? {})['is_dark'] = (((s as any).custom_theme ?? 0)?.['is_dark']);
                                        ((s as any).theme = (s as any).theme ?? {})['bcolor'] = (((s as any).custom_theme ?? 0)?.['bcolor']);
                                        ((s as any).theme = (s as any).theme ?? {})['fcolor'] = (((s as any).custom_theme ?? 0)?.['fcolor']);
                                        ((s as any).theme = (s as any).theme ?? {})['lcolor'] = (((s as any).custom_theme ?? 0)?.['lcolor']);
                                        ((s as any).theme = (s as any).theme ?? {})['fsize'] = (((s as any).custom_theme ?? 0)?.['fsize']);
                                        ((s as any).theme = (s as any).theme ?? {})['fname'] = (((s as any).custom_theme ?? 0)?.['fname']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg'] = (((s as any).custom_theme ?? 0)?.['table_bg']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['table_bg_alt'] = (((s as any).custom_theme ?? 0)?.['table_bg_alt']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['accent'] = (((s as any).custom_theme ?? 0)?.['accent']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_pos'] = (((s as any).custom_theme ?? 0)?.['v_pos']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['pos'] = (((s as any).custom_theme ?? 0)?.['pos']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neutral'] = (((s as any).custom_theme ?? 0)?.['neutral']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['neg'] = (((s as any).custom_theme ?? 0)?.['neg']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['v_neg'] = (((s as any).custom_theme ?? 0)?.['v_neg']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['punk'] = (((s as any).custom_theme ?? 0)?.['punk']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['bimbo'] = (((s as any).custom_theme ?? 0)?.['bimbo']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['goth'] = (((s as any).custom_theme ?? 0)?.['goth']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['hypno'] = (((s as any).custom_theme ?? 0)?.['hypno']);
                                        ((s as any).theme_hex = (s as any).theme_hex ?? {})['header'] = (((s as any).custom_theme ?? 0)?.['header']);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
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
  if (((s as any).theme ?? 0)?.['name'] === '') {
    ((s as any).theme = (s as any).theme ?? {})['name'] = 'Dynamic Default';
    ((s as any).theme = (s as any).theme ?? {})['type'] = 'dynamic';
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Dynamic Default', 'dynamic']; enterSetTheme(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
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
