import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>');
  scene.text(qspFunc(s, 'stat_display_menu', 'general_options'));
  (s as any).temp_ls_i = 0;
  while (true) {
    if (((s as any).temp_ls_i ?? 0) < Object.keys((s as any).stat_order ?? {}).length) {
      scene.text(qspFunc(s, 'stat_display_menu', 'section_table', ((s as any).temp_ls_i ?? '')));
      (s as any).temp_ls_i = ((s as any).temp_ls_i ?? 0) + (1);
      break;
    }
    scene.text('</center>');
    return;
  }
  scene.build();
}

function enterRenderCellOpt(s: GameState, scene: SceneBuilder): void {
  ((s as any).rco = (s as any).rco ?? {})['cur_num'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).rco = (s as any).rco ?? {})['size'] = 0;
  ((s as any).rco = (s as any).rco ?? {})['idx'] = (-1);
  ((s as any).rco = (s as any).rco ?? {})['custom_idx'] = (-1);
  ((s as any).rco = (s as any).rco ?? {})['i'] = 0;
  while (true) {
    if (((s as any).rco ?? 0)?.['i'] < ((s as any).rco ?? 0)?.['size']) {
      ((s as any).rco = (s as any).rco ?? {})['pipe'] = ((String(qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" })).indexOf(String('|'))) + 1);
      if (((s as any).rco ?? 0)?.['pipe'] > 0) {
        ((s as any).rco = (s as any).rco ?? {})['entry_val'] = (String(qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" })).slice((1)-1, ((1)-1)+((((s as any).rco ?? {})?.['pipe'] ?? 0) - 1)));
        ((s as any).rco = (s as any).rco ?? {})['entry_lbl'] = (String(qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" })).slice(((((s as any).rco ?? {})?.['pipe'] ?? 0) + 1)-1));
      } else {
        ((s as any).rco = (s as any).rco ?? {})['entry_val'] = qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" });
        ((s as any).rco = (s as any).rco ?? {})['entry_lbl'] = qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" });
      }
      if (((s as any).rco ?? 0)?.['entry_val'] === 'custom') {
        ((s as any).rco = (s as any).rco ?? {})['custom_idx'] = (((s as any).rco ?? 0)?.['i']);
      } else {
        if (((s as any).rco ?? 0)?.['entry_val'] === ((s as any).rco ?? 0)?.['cur_str']  ||  parseFloat(((s as any).rco ?? 0)?.['entry_val']) === ((s as any).rco ?? 0)?.['cur_num']) {
          ((s as any).rco = (s as any).rco ?? {})['idx'] = (((s as any).rco ?? 0)?.['i']);
        }
      }
      ((s as any).rco = (s as any).rco ?? {})['i'] = ((s as any).rco['i'] ?? 0) + (1);
      break;
    }
    if (((s as any).rco ?? 0)?.['idx'] === -1) {
      if (((s as any).rco ?? 0)?.['custom_idx'] >= 0) {
        ((s as any).rco = (s as any).rco ?? {})['idx'] = (((s as any).rco ?? 0)?.['custom_idx']);
      } else {
        ((s as any).rco = (s as any).rco ?? {})['idx'] = 0;
      }
    }
    ((s as any).rco = (s as any).rco ?? {})['pipe'] = ((String(qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" })).indexOf(String('|'))) + 1);
    if (((s as any).rco ?? 0)?.['pipe'] > 0) {
      ((s as any).rco = (s as any).rco ?? {})['entry_val'] = (String(qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" })).slice((1)-1, ((1)-1)+((((s as any).rco ?? {})?.['pipe'] ?? 0) - 1)));
      ((s as any).rco = (s as any).rco ?? {})['entry_lbl'] = (String(qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" })).slice(((((s as any).rco ?? {})?.['pipe'] ?? 0) + 1)-1));
    } else {
      ((s as any).rco = (s as any).rco ?? {})['entry_val'] = qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" });
      ((s as any).rco = (s as any).rco ?? {})['entry_lbl'] = qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" });
    }
    if (((s as any).rco ?? 0)?.['entry_val'] === 'custom') {
      ((s as any).rco = (s as any).rco ?? {})['label'] = 'Custom: ' + (((s as any).rco ?? 0)?.['cur_str']);
    } else {
      ((s as any).rco = (s as any).rco ?? {})['label'] = (((s as any).rco ?? 0)?.['entry_lbl']);
    }
    ((s as any).rco = (s as any).rco ?? {})['action_left'] = ((((s as any).temp_actions_left ?? 0)[((s as any).rco ?? 0)?.['idx']]  !== '') ? (qspUntranslated(s, "temp_actions_left[rco['idx']]", { location: "stat_display_menu" })) : ((((s as any).temp_actions_left ?? 0)?.[0] ?? 0)));
    ((s as any).rco = (s as any).rco ?? {})['action_right'] = ((((s as any).temp_actions_right ?? 0)[((s as any).rco ?? 0)?.['idx']] !== '') ? (qspUntranslated(s, "temp_actions_right[rco['idx']]", { location: "stat_display_menu" })) : ((((s as any).temp_actions_right ?? 0)?.[0] ?? 0)));
    if (((s as any).rco ?? 0)?.['action_left'] === ''  ||  ((s as any).rco ?? 0)?.['action_right'] === '') {
      ((s as any).rco = (s as any).rco ?? {})['idx_prev'] = ((((s as any).rco ?? {})?.['idx'] ?? 0) - 1 + (((s as any).rco ?? {})?.['size'] ?? 0)) % (((s as any).rco ?? {})?.['size'] ?? 0);
      ((s as any).rco = (s as any).rco ?? {})['idx_next'] = ((((s as any).rco ?? {})?.['idx'] ?? 0) + 1) % (((s as any).rco ?? {})?.['size'] ?? 0);
      ((s as any).rco = (s as any).rco ?? {})['pipe'] = ((String(qspUntranslated(s, "temp_values[rco['idx_prev']]", { location: "stat_display_menu" })).indexOf(String('|'))) + 1);
      ((s as any).rco = (s as any).rco ?? {})['prev_val'] = ((((s as any).rco ?? 0)?.['pipe'] > 0) ? ((String(qspUntranslated(s, "temp_values[rco['idx_prev']]", { location: "stat_display_menu" })).slice((1)-1, ((1)-1)+((((s as any).rco ?? {})?.['pipe'] ?? 0) - 1)))) : (qspUntranslated(s, "temp_values[rco['idx_prev']]", { location: "stat_display_menu" })));
      ((s as any).rco = (s as any).rco ?? {})['pipe'] = ((String(qspUntranslated(s, "temp_values[rco['idx_next']]", { location: "stat_display_menu" })).indexOf(String('|'))) + 1);
      ((s as any).rco = (s as any).rco ?? {})['next_val'] = ((((s as any).rco ?? 0)?.['pipe'] > 0) ? ((String(qspUntranslated(s, "temp_values[rco['idx_next']]", { location: "stat_display_menu" })).slice((1)-1, ((1)-1)+((((s as any).rco ?? {})?.['pipe'] ?? 0) - 1)))) : (qspUntranslated(s, "temp_values[rco['idx_next']]", { location: "stat_display_menu" })));
      if (((s as any).rco ?? 0)?.['action_left'] === '') {
        ((s as any).rco = (s as any).rco ?? {})['action_left'] = ((parseFloat(((s as any).rco ?? 0)?.['prev_val']) !== 0  ||  ((s as any).rco ?? 0)?.['prev_val'] === '0') ? (((s as any).locArgs?.[2] ?? 0) + ' = ' + (((s as any).rco ?? 0)?.['prev_val'])) : (((s as any).locArgs?.[2] ?? 0) + ' = \'' + (((s as any).rco ?? 0)?.['prev_val']) + '\''));
      }
      if (((s as any).rco ?? 0)?.['action_right'] === '') {
        ((s as any).rco = (s as any).rco ?? {})['action_right'] = ((parseFloat(((s as any).rco ?? 0)?.['next_val']) !== 0  ||  ((s as any).rco ?? 0)?.['next_val'] === '0') ? (((s as any).locArgs?.[2] ?? 0) + ' = ' + (((s as any).rco ?? 0)?.['next_val'])) : (((s as any).locArgs?.[2] ?? 0) + ' = \'' + (((s as any).rco ?? 0)?.['next_val']) + '\''));
      }
    }
    (s as any).result = '<table width="100%" cellpadding="0" cellspacing="0" border="0">';
    (s as any).result = ((s as any).result ?? 0) + ('<tr>');
    (s as any).result = ((s as any).result ?? 0) + ('<td align="center" valign="middle" width="1%" nowrap rowspan="3" style="text-align: center; vertical-align:middle">');
    (s as any).result = ((s as any).result ?? 0) + ('<a style="text-decoration: none" href="exec:' + (((s as any).rco ?? 0)?.['action_left']) + ' & gt \'$menu_settings\', \'status\'">');
    (s as any).result = ((s as any).result ?? 0) + ('<big>◀</big>');
    (s as any).result = ((s as any).result ?? 0) + ('</a>');
    (s as any).result = ((s as any).result ?? 0) + ('</td>');
    (s as any).result = ((s as any).result ?? 0) + ('<td align="center" valign="middle" width="98%" style="text-align: center; vertical-align:middle">');
    (s as any).result = ((s as any).result ?? 0) + ('<b>' + ((s as any).locArgs?.[1] ?? 0) + '</b>');
    (s as any).result = ((s as any).result ?? 0) + ('</td>');
    (s as any).result = ((s as any).result ?? 0) + ('<td align="center" valign="middle" width="1%" nowrap rowspan="3" style="text-align: center; vertical-align:middle">');
    (s as any).result = ((s as any).result ?? 0) + ('<a style="text-decoration: none" href="exec:' + (((s as any).rco ?? 0)?.['action_right']) + ' & gt \'$menu_settings\', \'status\'">');
    (s as any).result = ((s as any).result ?? 0) + ('<big>▶</big>');
    (s as any).result = ((s as any).result ?? 0) + ('</a>');
    (s as any).result = ((s as any).result ?? 0) + ('</td>');
    (s as any).result = ((s as any).result ?? 0) + ('</tr>');
    (s as any).result = ((s as any).result ?? 0) + ('<tr>');
    (s as any).result = ((s as any).result ?? 0) + ('<td align="center" valign="middle" rowspan="2" style="text-align: center; vertical-align:middle">');
    (s as any).result = ((s as any).result ?? 0) + ((((s as any).rco ?? 0)?.['label']));
    (s as any).result = ((s as any).result ?? 0) + ('</td>');
    (s as any).result = ((s as any).result ?? 0) + ('</tr>');
    (s as any).result = ((s as any).result ?? 0) + ('</table>');
    (s as any).rco = undefined;
    (s as any).temp_values = undefined;
    (s as any).temp_actions_left = undefined;
    (s as any).temp_actions_right = undefined;
    return;
  }
  scene.build();
}

function enterRenderCellNum(s: GameState, scene: SceneBuilder): void {
  ((s as any).rcn = (s as any).rcn ?? {})['cur'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).rcn = (s as any).rcn ?? {})['def'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).rcn = (s as any).rcn ?? {})['min'] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).rcn = (s as any).rcn ?? {})['max'] = ((s as any).locArgs?.[5] ?? 0);
  ((s as any).rcn = (s as any).rcn ?? {})['act_left'] = ((s as any).locArgs?.[2] ?? 0) + ' = max(' + String((((s as any).rcn ?? 0)?.['min'])) + ', ' + ((s as any).locArgs?.[2] ?? 0) + ' - 1)';
  ((s as any).rcn = (s as any).rcn ?? {})['act_right'] = ((s as any).locArgs?.[2] ?? 0) + ' = min(' + String((((s as any).rcn ?? 0)?.['max'])) + ', ' + ((s as any).locArgs?.[2] ?? 0) + ' + 1)';
  ((s as any).rcn = (s as any).rcn ?? {})['act_input'] = '$rcn_inp = input(\'' + ((s as any).locArgs?.[1] ?? 0) + ' [default: ' + String((((s as any).rcn ?? 0)?.['def'])) + ', Min: ' + String((((s as any).rcn ?? 0)?.['min'])) + ', Max: ' + String((((s as any).rcn ?? 0)?.['max'])) + ']\')';
  ((s as any).rcn = (s as any).rcn ?? {})['act_input'] = ((s as any).rcn['act_input'] ?? 0) + (' & ' + ((s as any).locArgs?.[2] ?? 0) + ' = iif($rcn_inp = \' or val($rcn_inp) = 0 and $rcn_inp <> \'0\', ' + String((((s as any).rcn ?? 0)?.['def'])) + ', min(' + String((((s as any).rcn ?? 0)?.['max'])) + ', max(' + String((((s as any).rcn ?? 0)?.['min'])) + ', val($rcn_inp))))');
  ((s as any).rcn = (s as any).rcn ?? {})['act_input'] = ((s as any).rcn['act_input'] ?? 0) + (' & killvar \'rcn_inp\'');
  (s as any).result = '<table width="100%" cellpadding="0" cellspacing="0" border="0">';
  (s as any).result = ((s as any).result ?? 0) + ('<tr>');
  (s as any).result = ((s as any).result ?? 0) + ('<td align="center" valign="middle" width="1%" nowrap rowspan="3" style="text-align:center; vertical-align:middle">');
  (s as any).result = ((s as any).result ?? 0) + ('<a style="text-decoration:none" href="exec:' + (((s as any).rcn ?? 0)?.['act_left']) + ' & gt \'$menu_settings\', \'status\'">');
  (s as any).result = ((s as any).result ?? 0) + ('<big>◀</big>');
  (s as any).result = ((s as any).result ?? 0) + ('</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ('<td align="center" valign="middle" width="98%" style="text-align:center; vertical-align:middle">');
  (s as any).result = ((s as any).result ?? 0) + ('<b>' + ((s as any).locArgs?.[1] ?? 0) + '</b>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ('<td align="center" valign="middle" width="1%" nowrap rowspan="3" style="text-align:center; vertical-align:middle">');
  (s as any).result = ((s as any).result ?? 0) + ('<a style="text-decoration:none" href="exec:' + (((s as any).rcn ?? 0)?.['act_right']) + ' & gt \'$menu_settings\', \'status\'">');
  (s as any).result = ((s as any).result ?? 0) + ('<big>▶</big>');
  (s as any).result = ((s as any).result ?? 0) + ('</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  (s as any).result = ((s as any).result ?? 0) + ('<tr>');
  (s as any).result = ((s as any).result ?? 0) + ('<td align="center" valign="middle" rowspan="2" style="text-align:center; vertical-align:middle">');
  (s as any).result = ((s as any).result ?? 0) + ('<a href="exec:' + (((s as any).rcn ?? 0)?.['act_input']) + ' & gt \'$menu_settings\', \'status\'">');
  (s as any).result = ((s as any).result ?? 0) + ('' + (((s as any).rcn ?? 0)?.['cur']) + '' + ((s as any).locArgs?.[6] ?? 0) + '');
  (s as any).result = ((s as any).result ?? 0) + ('</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  (s as any).result = ((s as any).result ?? 0) + ('</table>');
  (s as any).rcn = undefined;
  return;
  scene.build();
}

function enterSectionTable(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_st_key = qspUntranslated(s, "stat_order[ARGS[1]]", { location: "stat_display_menu" });
  (s as any).temp_st_icon_color = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('w') : ('b'));
  (s as any).temp_st_icon_border = 'display:inline-block; padding:3px; line-height:0; border:1px solid ' + qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['fcolor'])) + '; border-radius:6px;';
  ((s as any).temp_st_icon = (s as any).temp_st_icon ?? {})['raise'] = 'images/system/ui/angle_up_' + ((s as any).temp_st_icon_color ?? 0) + '.png';
  ((s as any).temp_st_icon = (s as any).temp_st_icon ?? {})['lower'] = 'images/system/ui/angle_down_' + ((s as any).temp_st_icon_color ?? 0) + '.png';
  ((s as any).temp_st_icon = (s as any).temp_st_icon ?? {})['hide'] = 'images/system/ui/' + ((((s as any).stat_hide ?? 0)?.[String((s as any).temp_st_key ?? 0)] === 1) ? ('hide_') : ('show_')) + ((s as any).temp_st_icon_color ?? 0) + '.png';
  ((s as any).temp_st_icon = (s as any).temp_st_icon ?? {})['expand'] = 'images/system/ui/' + ((((s as any).stat_collapse ?? 0)?.[String((s as any).temp_st_key ?? 0)] === 0) ? ('expand_') : ('collapse_')) + ((s as any).temp_st_icon_color ?? 0) + '.png';
  (s as any).temp_st_align_val = (((s as any).stat_cfg ?? 0)?.['align_' + ((s as any).temp_st_key ?? 0)] ?? 0);
  if ((!((s as any).temp_st_align_val ?? 0))) {
    (s as any).temp_st_align_eff = (((s as any).stat_cfg ?? 0)?.['global_align']);
  } else {
    (s as any).temp_st_align_eff = ((s as any).temp_st_align_val ?? 0) - 1;
  }
  ((s as any).temp_st_align_icon_name = (s as any).temp_st_align_icon_name ?? {})[0] = 'left';
  ((s as any).temp_st_align_icon_name = (s as any).temp_st_align_icon_name ?? {})[1] = 'center';
  ((s as any).temp_st_align_icon_name = (s as any).temp_st_align_icon_name ?? {})[2] = 'right';
  ((s as any).temp_st_icon = (s as any).temp_st_icon ?? {})['align'] = 'images/system/ui/align_' + (((s as any).temp_st_align_icon_name ?? 0)?.[String((s as any).temp_st_align_eff ?? 0)] ?? 0) + '_' + ((s as any).temp_st_icon_color ?? 0) + '.png';
  (s as any).temp_st_align_opacity = (((!((s as any).temp_st_align_val ?? 0))) ? (' style="opacity:0.6"') : (''));
  ((s as any).temp_st_align_label = (s as any).temp_st_align_label ?? {})[0] = 'Left';
  ((s as any).temp_st_align_label = (s as any).temp_st_align_label ?? {})[1] = 'Center';
  ((s as any).temp_st_align_label = (s as any).temp_st_align_label ?? {})[2] = 'Right';
  if ((!((s as any).temp_st_align_val ?? 0))) {
    ((s as any).temp_st_title = (s as any).temp_st_title ?? {})['align'] = 'Global Alignment (' + (((s as any).temp_st_align_label ?? 0)?.[String((s as any).temp_st_align_eff ?? 0)] ?? 0) + ') — click to set explicitly';
  } else {
    ((s as any).temp_st_title = (s as any).temp_st_title ?? {})['align'] = 'Aligned ' + (((s as any).temp_st_align_label ?? 0)?.[String((s as any).temp_st_align_eff ?? 0)] ?? 0) + ' — click to cycle';
  }
  ((s as any).temp_st_title = (s as any).temp_st_title ?? {})['hide'] = ((((s as any).stat_hide ?? 0)?.[String((s as any).temp_st_key ?? 0)] === 1) ? ('Show Section') : ('Hide Section'));
  ((s as any).temp_st_title = (s as any).temp_st_title ?? {})['expand'] = ((((s as any).stat_collapse ?? 0)?.[String((s as any).temp_st_key ?? 0)] === 0) ? ('Collapse Options') : ('Expand Options'));
  ((s as any).temp_st_td = (s as any).temp_st_td ?? {})['icon'] = '<td align="center" width="1%" style="text-align:center; padding:3px;">';
  ((s as any).temp_st_td = (s as any).temp_st_td ?? {})['spacer'] = '<td align="center" width="1%" style="text-align:center; padding:3px;"><span style="display:inline-block; padding:2px; line-height:0; border:1px solid transparent; border-radius:6px;"><img height="32" src="' + (((s as any).temp_st_icon ?? 0)?.['raise']) + '" style="visibility:hidden"></span></td>';
  ((s as any).temp_st_td = (s as any).temp_st_td ?? {})['cell'] = '<td align="center" valign="middle" bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '" style="border:1px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '; background-color: ' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '; padding:3px; text-align:center; vertical-align:middle;">';
  (s as any).result = ((s as any).result ?? 0) + ('<table width="80%" cellspacing="6" bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg']) + '" style="border:2px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '; margin:10px; padding:4px; border-spacing:6px; background-color: ' + (((s as any).theme_hex ?? 0)?.['table_bg']) + ';">');
  (s as any).result = ((s as any).result ?? 0) + ('<colgroup>');
  (s as any).result = ((s as any).result ?? 0) + ('<col width="32%">');
  (s as any).result = ((s as any).result ?? 0) + ('<col width="32%">');
  (s as any).result = ((s as any).result ?? 0) + ('<col width="32%">');
  (s as any).result = ((s as any).result ?? 0) + ('</colgroup>');
  (s as any).result = ((s as any).result ?? 0) + ('<tr valign="middle" style="vertical-align:middle;">');
  (s as any).result = ((s as any).result ?? 0) + ('<td colspan="3">');
  (s as any).result = ((s as any).result ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0">');
  (s as any).result = ((s as any).result ?? 0) + ('<tr valign="middle" style="vertical-align:middle;">');
  (s as any).result = ((s as any).result ?? 0) + ((((s as any).temp_st_td ?? 0)?.['icon']));
  (s as any).result = ((s as any).result ?? 0) + ('<a style="' + ((s as any).temp_st_icon_border ?? 0) + '" href="exec:gs \'$menu_settings\', \'swap\', \'stat_order\', ' + ((s as any).locArgs?.[1] ?? 0) + ', \'up\' & gt \'$menu_settings\', \'status\'">');
  (s as any).result = ((s as any).result ?? 0) + ('<img height="32" title="Move Up" src="' + (((s as any).temp_st_icon ?? 0)?.['raise']) + '">');
  (s as any).result = ((s as any).result ?? 0) + ('</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ((((s as any).temp_st_td ?? 0)?.['icon']));
  (s as any).result = ((s as any).result ?? 0) + ('<a style="' + ((s as any).temp_st_icon_border ?? 0) + '" href="exec:gs \'$menu_settings\', \'swap\', \'stat_order\', ' + ((s as any).locArgs?.[1] ?? 0) + ', \'down\' & gt \'$menu_settings\', \'status\'">');
  (s as any).result = ((s as any).result ?? 0) + ('<img height="32" title="Move Down" src="' + (((s as any).temp_st_icon ?? 0)?.['lower']) + '">');
  (s as any).result = ((s as any).result ?? 0) + ('</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ((((s as any).temp_st_td ?? 0)?.['spacer']));
  (s as any).result = ((s as any).result ?? 0) + ('<td align="center" colspan="2" width="96%" style="text-align:center; padding:0;">');
  (s as any).result = ((s as any).result ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.stat_collapse ??= {})\u0027' + ((s as any).temp_st_key ?? 0) + '\u0027 = 1 - stat_collapse[\u0027' + ((s as any).temp_st_key ?? 0) + '\u0027]; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027status\u0027); return false;"><big><b>\' + $sd_dn[$temp_st_key] + \'</b></big></a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ((((s as any).temp_st_td ?? 0)?.['icon']));
  (s as any).result = ((s as any).result ?? 0) + ('<a style="' + ((s as any).temp_st_icon_border ?? 0) + '" href="exec:stat_cfg[\'align_' + ((s as any).temp_st_key ?? 0) + '\'] = (stat_cfg[\'align_' + ((s as any).temp_st_key ?? 0) + '\'] + 1) mod 4 & gt \'$menu_settings\', \'status\'">');
  (s as any).result = ((s as any).result ?? 0) + ('<img height="32" title="' + (((s as any).temp_st_title ?? 0)?.['align']) + '"\' + $temp_st_align_opacity + \' src="' + (((s as any).temp_st_icon ?? 0)?.['align']) + '">');
  (s as any).result = ((s as any).result ?? 0) + ('</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ((((s as any).temp_st_td ?? 0)?.['icon']));
  (s as any).result = ((s as any).result ?? 0) + ('<a style="' + ((s as any).temp_st_icon_border ?? 0) + '" href="exec:stat_hide[\'' + ((s as any).temp_st_key ?? 0) + '\'] = 1 - stat_hide[\'' + ((s as any).temp_st_key ?? 0) + '\'] & gt \'$menu_settings\', \'status\'">');
  (s as any).result = ((s as any).result ?? 0) + ('<img height="32" title="' + (((s as any).temp_st_title ?? 0)?.['hide']) + '" src="' + (((s as any).temp_st_icon ?? 0)?.['hide']) + '">');
  (s as any).result = ((s as any).result ?? 0) + ('</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ((((s as any).temp_st_td ?? 0)?.['icon']));
  (s as any).result = ((s as any).result ?? 0) + ('<a style="' + ((s as any).temp_st_icon_border ?? 0) + '" href="exec:stat_collapse[\'' + ((s as any).temp_st_key ?? 0) + '\'] = 1 - stat_collapse[\'' + ((s as any).temp_st_key ?? 0) + '\'] & gt \'$menu_settings\', \'status\'">');
  (s as any).result = ((s as any).result ?? 0) + ('<img height="32" title="' + (((s as any).temp_st_title ?? 0)?.['expand']) + '" src="' + (((s as any).temp_st_icon ?? 0)?.['expand']) + '">');
  (s as any).result = ((s as any).result ?? 0) + ('</a>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  (s as any).result = ((s as any).result ?? 0) + ('</table>');
  (s as any).result = ((s as any).result ?? 0) + ('</td>');
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  if (((s as any).stat_collapse ?? 0)?.[String((s as any).temp_st_key ?? 0)] === 0) {
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', ((s as any).temp_st_key ?? 0) + '_options'));
  }
  (s as any).result = ((s as any).result ?? 0) + ('</table>');
  return;
  scene.build();
}

function enterRowCell(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_rc_count ?? 0) % 3 === 0) {
    (s as any).result = '<tr>';
  }
  (s as any).result = ((s as any).result ?? 0) + ((((s as any).temp_st_td ?? 0)?.['cell']) + ((s as any).locArgs?.[1] ?? 0) + '</td>');
  (s as any).temp_rc_count = ((s as any).temp_rc_count ?? 0) + (1);
  if (((s as any).temp_rc_count ?? 0) % 3 === 0) {
    (s as any).result = ((s as any).result ?? '') + '</tr>';
  }
  return;
  scene.build();
}

function enterRowFlush(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_rc_count ?? 0) % 3 !== 0) {
    do {
      (s as any).result = ((s as any).result ?? 0) + ('<td></td>');
      (s as any).temp_rc_count = ((s as any).temp_rc_count ?? 0) + (1);
      (s as any).result = ((s as any).result ?? 0) + ('</tr>');
    } while (((s as any).temp_rc_count ?? 0) % 3 !== 0);
  }
  (s as any).temp_rc_count = undefined;
  return;
  scene.build();
}

function enterWeatherOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Celsius';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Fahrenheit';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Kelvin';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|Delisle';
  ((s as any).temp_values = (s as any).temp_values ?? {})[4] = '4|😡';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Scale', 'stat_cfg[\'temp_scale\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Temp. Right';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Temp. Below';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Temp. Above';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|Temp. Left';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Layout', 'stat_cfg[\'temp_pos\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Banner';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Text';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Style', 'stat_cfg[\'weather_visual\']')));
  if (((s as any).stat_cfg ?? 0)?.['weather_visual'] === 0) {
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_num', 'Banner size', 'stat_cfg[\'weather_height\']', 72, 50, 100, ' px')));
  }
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  return;
  scene.build();
}

function enterMoneyOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Comma';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Period';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Separator', 'cheatVars[\'money_format\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  return;
  scene.build();
}

function enterTimeOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|24-hour';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|12-hour';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Time format', 'stat_cfg[\'time_format\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|DDth MMM';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|ISO 8601';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|DD/MM';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|MMM DDth';
  ((s as any).temp_values = (s as any).temp_values ?? {})[4] = '4|MM/DD';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Date format', 'stat_cfg[\'date_format\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  return;
  scene.build();
}

function enterIconsOptions(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_num', 'Size', 'stat_cfg[\'icon_height\']', 54, 10, 75, ' px')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Hidden';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Shown';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Positive Icons', 'stat_cfg[\'show_positive_icons\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  return;
  scene.build();
}

function enterAlertsOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|One per line';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '2|Inline';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Line Breaks', 'stat_cfg[\'newline_alerts\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Shown';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Hidden';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'EXP Notifications', 'stat_cfg[\'notify_exp\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Shown';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Hidden';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Archetype Notifications', 'stat_cfg[\'notify_archetypes\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Shown';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Hidden';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Archetype Opposites', 'stat_cfg[\'notify_archetypes_opposite\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Hidden';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Shown';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Minor Archetype Point Changes', 'stat_cfg[\'notify_archetypes_state\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Disabled';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Enabled';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Archetype History Log', 'stat_cfg[\'arch_log_enabled\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  return;
  scene.build();
}

function enterCalendarOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '1|1';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '2|2';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '3|3';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '4|4';
  ((s as any).temp_values = (s as any).temp_values ?? {})[4] = '5|5';
  ((s as any).temp_values = (s as any).temp_values ?? {})[5] = '6|All (today)';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Events shown', 'stat_cfg[\'cal_count\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|On';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Off';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Today only', 'stat_cfg[\'cal_today_only\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Shown';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Hidden';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'All-day events', 'stat_cfg[\'cal_show_all_day\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  return;
  scene.build();
}

function enterTextsOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|One per line';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '2|Inline';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Line Breaks', 'stat_cfg[\'newline_texts\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Hidden';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Shown';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Positive Texts', 'stat_cfg[\'show_positive_texts\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  return;
  scene.build();
}

function enterLoadsaveOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Icons';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Text links';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Button style', 'stat_cfg[\'loadsave_mode\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  return;
  scene.build();
}

function enterMenuBarOptions(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_num', 'Size', 'stat_cfg[\'menu_icon_height\']', 54, 10, 75, ' px')));
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Disabled';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Enabled';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Separate Magic', 'stat_cfg[\'magic_separate\']')));
  }
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_reorder_menu_bar'));
  return;
  scene.build();
}

function enterStatusOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Table bars';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Character bars';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Text only';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|Prose summary';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Mode', 'stat_cfg[\'render_mode_status\']')));
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 0) {
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_num', 'Bar width', 'stat_cfg[\'bar_width\']', 200, 50, 500, ' px')));
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] <= 1) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Bar first';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Label first';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Label placement', 'stat_cfg[\'name_side_status\']')));
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 1) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Large';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Small';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Character size', 'stat_cfg[\'bar_size\']')));
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 0) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Overlay on Mood';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Separate bar';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Disposition', 'stat_cfg[\'overlay\']')));
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 2) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Line Breaks';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Spaces';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Separator', 'stat_cfg[\'newline_status\']')));
  }
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_reorder_flat', 'status_bar_order', 'stat_hide_bar', 'status', 'mana', ''));
  return;
  scene.build();
}

function enterAttributesOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Table bars';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Character bars';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Text only';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|Prose summary';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Display mode', 'stat_cfg[\'render_mode_attrs\']')));
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] === 0) {
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_num', 'Bar width', 'stat_cfg[\'bar_width\']', 200, 50, 500, ' px')));
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] <= 1) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Bar first';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Label first';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Label placement', 'stat_cfg[\'name_side_attrs\']')));
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] === 0) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Hidden';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Shown';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Show XP progress', 'stat_cfg[\'show_attr_xp\']')));
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Hidden';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Shown';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Base appearance', 'stat_cfg[\'show_apprnc_base\']')));
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] === 2) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Line Breaks';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Spaces';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Separator', 'stat_cfg[\'newline_attributes\']')));
  }
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_reorder_flat', 'attr_bar_order', 'stat_hide_bar', 'status', 'magik', 'sucexcess'));
  return;
  scene.build();
}

function enterImagesOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|1 Column';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|2 Columns';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|3 Columns';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|Wrap';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Columns', 'stat_cfg[\'image_columns\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Compact';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Spaced';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Spacing', 'stat_cfg[\'image_spacing\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Fit to width';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Full size';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Force height';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|Force width';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Sizing', 'stat_cfg[\'image_size\']')));
  if (((s as any).stat_cfg ?? 0)?.['image_size'] === 2) {
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_num', 'Height', 'stat_cfg[\'image_size_px\']', 0, 1, 9999, ' px')));
  } else {
    if (((s as any).stat_cfg ?? 0)?.['image_size'] === 3) {
      (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_num', 'Width', 'stat_cfg[\'image_size_px\']', 0, 1, 9999, ' px')));
    }
  }
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Off';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Type label';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Item name';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|Name & info';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Captions', 'stat_cfg[\'image_headers\']')));
  if (((s as any).stat_cfg ?? 0)?.['image_headers'] > 0) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Above';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Below';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Caption position', 'stat_cfg[\'image_header_pos\']')));
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Small';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Normal';
    ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Bold';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Caption font', 'stat_cfg[\'image_header_font\']')));
  }
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_reorder_flat', 'image_order', 'stat_hide', 'status', ', '));
  return;
  scene.build();
}

function enterSkillsOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Text table';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Table bars';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Character bars';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Display mode', 'stat_cfg[\'skills_mode\']')));
  if (((s as any).stat_cfg ?? 0)?.['skills_mode'] > 0) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Bar first';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Label first';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Label placement', 'stat_cfg[\'name_side_skills\']')));
  }
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|1 Column';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|2 Columns';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|3 Columns';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Columns', 'stat_cfg[\'skills_columns\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Merged';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Separated';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Headers & separated';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Group display', 'stat_cfg[\'skills_group_mode\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_reorder_nested_skills'));
  return;
  scene.build();
}

function enterRelationsOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Text table';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Table bars';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Character bars';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Display mode', 'stat_cfg[\'relations_mode\']')));
  if (((s as any).stat_cfg ?? 0)?.['relations_mode'] > 0) {
    ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Bar first';
    ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Label first';
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Label placement', 'stat_cfg[\'name_side_relations\']')));
  }
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|1 Column';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|2 Columns';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|3 Columns';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Columns', 'stat_cfg[\'relations_columns\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Merged';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Separated';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Headers & separated';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Group display', 'stat_cfg[\'relations_group_mode\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Context-based';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|First name';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Last name';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '3|Nickname';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Name format', 'stat_cfg[\'rel_name_mode\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Off';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|On';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Color-code values', 'stat_cfg[\'rel_color_mode\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_reorder_nested_relations'));
  return;
  scene.build();
}

function enterReorderFlat(s: GameState, scene: SceneBuilder): void {
  ((s as any).ro = (s as any).ro ?? {})['c'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('w') : ('b'));
  ((s as any).ro = (s as any).ro ?? {})['up'] = 'images/system/ui/angle_up_' + (((s as any).ro ?? 0)?.['c']) + '.png';
  ((s as any).ro = (s as any).ro ?? {})['down'] = 'images/system/ui/angle_down_' + (((s as any).ro ?? 0)?.['c']) + '.png';
  ((s as any).ro = (s as any).ro ?? {})['bdr'] = '1px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '';
  ((s as any).ro = (s as any).ro ?? {})['ibdr'] = 'display:inline-block; padding:4px; line-height:0; border:1px solid ' + qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['fcolor'])) + '; border-radius:4px;';
  // TODO-QSP: $ro['html'] = '<tr><td align="center" colspan="3" style="padding:6px 10px 2px 10px; text-align:center;"><b>Order &amp; Visibility</b>&nbsp; <a href="exec: killvar ''$<<$ARGS[1]>>'' & gt ''$menu_settings'', ''<<$ARGS[3]>>''">[Reset]</a></td></tr>'
  ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<tr><td colspan="3" style="padding:2px 10px 8px 10px;"><center><table width="90%" cellspacing="3" cellpadding="0" border="0" style="width:90%;">');
  ((s as any).ro = (s as any).ro ?? {})['i'] = 0;
  do {
    while (true) {
      ((s as any).ro = (s as any).ro ?? {})['key'] = 0;
      if (((s as any).ro ?? 0)?.['key'] === String((s as any).locArgs?.[4] ?? '')  &&  String((s as any).locArgs?.[4] ?? '') !== ''  &&  ((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
        break;
      }
      if (((s as any).ro ?? 0)?.['key'] === String((s as any).locArgs?.[5] ?? '')  &&  String((s as any).locArgs?.[5] ?? '') !== ''  &&  ((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
        break;
      }
      ((s as any).ro = (s as any).ro ?? {})['hidden'] = 0;
      ((s as any).ro = (s as any).ro ?? {})['hide_icon'] = 'images/system/ui/' + ((((s as any).ro ?? 0)?.['hidden'] === 1) ? ('hide_') : ('show_')) + (((s as any).ro ?? 0)?.['c']) + '.png';
      ((s as any).ro = (s as any).ro ?? {})['label'] = ((((s as any).ro ?? 0)?.['hidden'] === 1) ? ('<font color="gray">' + (((s as any).sd_dn ?? 0)?.[(((s as any).ro ?? 0)?.['key'])] ?? 0) + '</font>') : ((((s as any).sd_dn ?? 0)?.[(((s as any).ro ?? 0)?.['key'])] ?? 0)));
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<tr><td bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '" style="border:' + (((s as any).ro ?? 0)?.['bdr']) + '; background-color:' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '; padding:5px 6px;">');
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap\u0027, ((s as any).locArgs?.[1] ?? \u0027\u0027)); return false;"><img height="18" src="' + (((s as any).ro ?? 0)?.['up']) + '"></a>');
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap\u0027, ((s as any).locArgs?.[1] ?? \u0027\u0027)); return false;"><img height="18" src="' + (((s as any).ro ?? 0)?.['down']) + '"></a>');
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
      // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: <<$ARGS[2]>>[''<<$ro[''key'']>>''] = 1 - <<$ARGS[2]>>[''<<$ro[''key'']>>''] & gt ''$menu_settings'', ''<<$ARGS[3]>>''">' + $ro['label'] + '</a>'
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
      // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: <<$ARGS[2]>>[''<<$ro[''key'']>>''] = 1 - <<$ARGS[2]>>[''<<$ro[''key'']>>''] & gt ''$menu_settings'', ''<<$ARGS[3]>>''"><img height="18" src="<<$ro[''hide_icon'']>>"></a>'
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</tr></table></td></tr>');
      break;
    }
    // LABEL: _rfl_next
    ((s as any).ro = (s as any).ro ?? {})['i'] = ((s as any).ro['i'] ?? 0) + (1);
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</table></center></td></tr>');
    (s as any).result = (((s as any).ro ?? 0)?.['html']);
    (s as any).ro = undefined;
    return;
  } while (((s as any).ro ?? 0)?.['i'] < Object.keys((s as any)['$' + ((s as any).locArgs?.[1] ?? 0)] ?? {}).length);
  scene.build();
}

function enterReorderNestedSkills(s: GameState, scene: SceneBuilder): void {
  ((s as any).ro = (s as any).ro ?? {})['c'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('w') : ('b'));
  ((s as any).ro = (s as any).ro ?? {})['up'] = 'images/system/ui/angle_up_' + (((s as any).ro ?? 0)?.['c']) + '.png';
  ((s as any).ro = (s as any).ro ?? {})['down'] = 'images/system/ui/angle_down_' + (((s as any).ro ?? 0)?.['c']) + '.png';
  ((s as any).ro = (s as any).ro ?? {})['bdr'] = '1px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '';
  ((s as any).ro = (s as any).ro ?? {})['ibdr'] = 'display:inline-block; padding:4px; line-height:0; border:1px solid ' + qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['fcolor'])) + '; border-radius:4px;';
  ((s as any).ro = (s as any).ro ?? {})['html'] = '<tr><td align="center" colspan="3" style="padding:6px 10px 2px 10px; text-align:center;"><b>Order &amp; Visibility</b>&nbsp; <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027reset_skills\u0027 & gt \u0027$menu_settings\u0027, \u0027status\u0027); return false;">[Reset]</a></td></tr>';
  ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<tr><td colspan="3" style="padding:2px 10px 8px 10px;"><center><table width="90%" cellspacing="3" cellpadding="0" border="0" style="width:90%;">');
  ((s as any).ro = (s as any).ro ?? {})['gi'] = 0;
  do {
    ((s as any).ro = (s as any).ro ?? {})['gkey'] = qspUntranslated(s, "skill_group_order[ro['gi']]", { location: "stat_display_menu" });
    ((s as any).ro = (s as any).ro ?? {})['ghid'] = (((s as any).stat_hide ?? 0)?.[(((s as any).ro ?? 0)?.['gkey'])] ?? 0);
    ((s as any).ro = (s as any).ro ?? {})['gexp'] = (((s as any).stat_cfg ?? 0)?.['show_skills_' + (((s as any).ro ?? 0)?.['gkey'])] ?? 0);
    ((s as any).ro = (s as any).ro ?? {})['ghi_ic'] = 'images/system/ui/' + ((((s as any).ro ?? 0)?.['ghid'] === 1) ? ('hide_') : ('show_')) + (((s as any).ro ?? 0)?.['c']) + '.png';
    ((s as any).ro = (s as any).ro ?? {})['gex_ic'] = 'images/system/ui/' + ((((s as any).ro ?? 0)?.['gexp'] === 1) ? ('expand_') : ('collapse_')) + (((s as any).ro ?? 0)?.['c']) + '.png';
    ((s as any).ro = (s as any).ro ?? {})['glbl'] = ((((s as any).ro ?? 0)?.['ghid'] === 1) ? ('<font color="gray"><b>' + (((s as any).sd_dn ?? 0)?.[(((s as any).ro ?? 0)?.['gkey'])] ?? 0) + '</b></font>') : ('<b>' + (((s as any).sd_dn ?? 0)?.[(((s as any).ro ?? 0)?.['gkey'])] ?? 0) + '</b>'));
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<tr><td bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg']) + '" style="border:' + (((s as any).ro ?? 0)?.['bdr']) + '; background-color:' + (((s as any).theme_hex ?? 0)?.['table_bg']) + '; padding:5px 6px;">');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap\u0027, \u0027skill_group_order\u0027); return false;"><img height="18" src="' + (((s as any).ro ?? 0)?.['up']) + '"></a>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap\u0027, \u0027skill_group_order\u0027); return false;"><img height="18" src="' + (((s as any).ro ?? 0)?.['down']) + '"></a>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
    // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: stat_cfg[''show_skills_<<$ro[''gkey'']>>''] = 1 - stat_cfg[''show_skills_<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''">' + $ro['glbl'] + '</a>'
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_hide[''<<$ro[''gkey'']>>''] = 1 - stat_hide[''<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''ghi_ic'']>>"></a>'
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_cfg[''show_skills_<<$ro[''gkey'']>>''] = 1 - stat_cfg[''show_skills_<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''gex_ic'']>>"></a>'
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</tr></table>');
    if (((s as any).ro ?? 0)?.['gexp'] === 1) {
      while (true) {
        ((s as any).ro = (s as any).ro ?? {})['mi'] = 0;
        ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<table width="100%" cellspacing="3" cellpadding="0" border="0" style="margin-top:4px; padding-left:18px;">');
        while (true) {
          ((s as any).ro = (s as any).ro ?? {})['mkey'] = (((s as any).skill_grp ?? 0)?.[(((s as any).ro ?? 0)?.['gkey']) + '_' + String((((s as any).ro ?? 0)?.['mi']))] ?? 0);
          if (((s as any).ro ?? 0)?.['mkey'] === '') {
            break;
          }
          ((s as any).ro = (s as any).ro ?? {})['mhid'] = (((s as any).stat_hide_skill ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
          ((s as any).ro = (s as any).ro ?? {})['mhi_ic'] = 'images/system/ui/' + ((((s as any).ro ?? 0)?.['mhid'] === 1) ? ('hide_') : ('show_')) + (((s as any).ro ?? 0)?.['c']) + '.png';
          ((s as any).ro = (s as any).ro ?? {})['mlbl'] = ((((s as any).ro ?? 0)?.['mhid'] === 1) ? ('<font color="gray">' + (((s as any).sd_dn ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0) + '</font>') : ((((s as any).sd_dn ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0)));
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<tr><td bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '" style="border:' + (((s as any).ro ?? 0)?.['bdr']) + '; background-color:' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '; padding:4px 6px;">');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap_grp_member\u0027, \u0027skill_grp\u0027); return false;"><img height="14" src="' + (((s as any).ro ?? 0)?.['up']) + '"></a>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap_grp_member\u0027, \u0027skill_grp\u0027); return false;"><img height="14" src="' + (((s as any).ro ?? 0)?.['down']) + '"></a>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
          // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: stat_hide_skill[''<<$ro[''mkey'']>>''] = 1 - stat_hide_skill[''<<$ro[''mkey'']>>''] & gt ''$menu_settings'', ''status''">' + $ro['mlbl'] + '</a>'
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
          // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_hide_skill[''<<$ro[''mkey'']>>''] = 1 - stat_hide_skill[''<<$ro[''mkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''mhi_ic'']>>"></a>'
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</tr></table></td></tr>');
          ((s as any).ro = (s as any).ro ?? {})['mi'] = ((s as any).ro['mi'] ?? 0) + (1);
          break;
        }
        break;
      }
      // LABEL: _rns_mdone
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</table>');
    }
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td></tr>');
    ((s as any).ro = (s as any).ro ?? {})['gi'] = ((s as any).ro['gi'] ?? 0) + (1);
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</table></center></td></tr>');
    (s as any).result = (((s as any).ro ?? 0)?.['html']);
    (s as any).ro = undefined;
    return;
  } while (((s as any).ro ?? 0)?.['gi'] < Object.keys((s as any).skill_group_order ?? {}).length);
  scene.build();
}

function enterReorderNestedRelations(s: GameState, scene: SceneBuilder): void {
  ((s as any).ro = (s as any).ro ?? {})['c'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('w') : ('b'));
  ((s as any).ro = (s as any).ro ?? {})['up'] = 'images/system/ui/angle_up_' + (((s as any).ro ?? 0)?.['c']) + '.png';
  ((s as any).ro = (s as any).ro ?? {})['down'] = 'images/system/ui/angle_down_' + (((s as any).ro ?? 0)?.['c']) + '.png';
  ((s as any).ro = (s as any).ro ?? {})['bdr'] = '1px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '';
  ((s as any).ro = (s as any).ro ?? {})['ibdr'] = 'display:inline-block; padding:4px; line-height:0; border:1px solid ' + qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['fcolor'])) + '; border-radius:4px;';
  ((s as any).ro = (s as any).ro ?? {})['html'] = '<tr><td align="center" colspan="3" style="padding:6px 10px 2px 10px; text-align:center;"><b>Order &amp; Visibility</b>&nbsp; <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027reset_rels\u0027 & gt \u0027$menu_settings\u0027, \u0027status\u0027); return false;">[Reset]</a></td></tr>';
  ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<tr><td colspan="3" style="padding:2px 10px 8px 10px;"><center><table width="90%" cellspacing="3" cellpadding="0" border="0" style="width:90%;">');
  ((s as any).ro = (s as any).ro ?? {})['gi'] = 0;
  do {
    ((s as any).ro = (s as any).ro ?? {})['gkey'] = qspUntranslated(s, "rel_group_order[ro['gi']]", { location: "stat_display_menu" });
    ((s as any).ro = (s as any).ro ?? {})['ghid'] = (((s as any).stat_hide_rel_grp ?? 0)?.[(((s as any).ro ?? 0)?.['gkey'])] ?? 0);
    ((s as any).ro = (s as any).ro ?? {})['gexp'] = (((s as any).stat_cfg ?? 0)?.['show_rels_' + (((s as any).ro ?? 0)?.['gkey'])] ?? 0);
    ((s as any).ro = (s as any).ro ?? {})['ghi_ic'] = 'images/system/ui/' + ((((s as any).ro ?? 0)?.['ghid'] === 1) ? ('hide_') : ('show_')) + (((s as any).ro ?? 0)?.['c']) + '.png';
    ((s as any).ro = (s as any).ro ?? {})['gex_ic'] = 'images/system/ui/' + ((((s as any).ro ?? 0)?.['gexp'] === 1) ? ('expand_') : ('collapse_')) + (((s as any).ro ?? 0)?.['c']) + '.png';
    ((s as any).ro = (s as any).ro ?? {})['glbl'] = ((((s as any).ro ?? 0)?.['ghid'] === 1) ? ('<font color="gray"><b>' + (((s as any).sd_dn ?? 0)?.[(((s as any).ro ?? 0)?.['gkey'])] ?? 0) + '</b></font>') : ('<b>' + (((s as any).sd_dn ?? 0)?.[(((s as any).ro ?? 0)?.['gkey'])] ?? 0) + '</b>'));
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<tr><td bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg']) + '" style="border:' + (((s as any).ro ?? 0)?.['bdr']) + '; background-color:' + (((s as any).theme_hex ?? 0)?.['table_bg']) + '; padding:5px 6px;">');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap\u0027, \u0027rel_group_order\u0027); return false;"><img height="18" src="' + (((s as any).ro ?? 0)?.['up']) + '"></a>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap\u0027, \u0027rel_group_order\u0027); return false;"><img height="18" src="' + (((s as any).ro ?? 0)?.['down']) + '"></a>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
    if (((s as any).ro ?? 0)?.['gkey'] !== 'lovers') {
      // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: stat_cfg[''show_rels_<<$ro[''gkey'']>>''] = 1 - stat_cfg[''show_rels_<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''">' + $ro['glbl'] + '</a>'
    } else {
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ((((s as any).ro ?? 0)?.['glbl']));
    }
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_hide_rel_grp[''<<$ro[''gkey'']>>''] = 1 - stat_hide_rel_grp[''<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''ghi_ic'']>>"></a>'
    if (((s as any).ro ?? 0)?.['gkey'] !== 'lovers') {
      // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_cfg[''show_rels_<<$ro[''gkey'']>>''] = 1 - stat_cfg[''show_rels_<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''gex_ic'']>>"></a>'
    } else {
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<span style="' + (((s as any).ro ?? 0)?.['ibdr']) + '; visibility:hidden;"><img height="18" src="' + (((s as any).ro ?? 0)?.['up']) + '"></span>');
    }
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</tr></table>');
    if (((s as any).ro ?? 0)?.['gkey'] !== 'lovers'  &&  ((s as any).ro ?? 0)?.['gexp'] === 1) {
      while (true) {
        ((s as any).ro = (s as any).ro ?? {})['mi'] = 0;
        ((s as any).ro = (s as any).ro ?? {})['nm'] = (((s as any).stat_cfg ?? 0)?.['rel_name_mode']);
        ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<table width="100%" cellspacing="3" cellpadding="0" border="0" style="margin-top:4px; padding-left:18px;">');
        while (true) {
          ((s as any).ro = (s as any).ro ?? {})['mkey'] = (((s as any).rel_grp ?? 0)?.[(((s as any).ro ?? 0)?.['gkey']) + '_' + String((((s as any).ro ?? 0)?.['mi']))] ?? 0);
          if (((s as any).ro ?? 0)?.['mkey'] === '') {
            break;
          }
          ((s as any).ro = (s as any).ro ?? {})['mhid'] = (((s as any).stat_hide_rel ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
          ((s as any).ro = (s as any).ro ?? {})['mhi_ic'] = 'images/system/ui/' + ((((s as any).ro ?? 0)?.['mhid'] === 1) ? ('hide_') : ('show_')) + (((s as any).ro ?? 0)?.['c']) + '.png';
          ((s as any).ro = (s as any).ro ?? {})['eff_nm'] = ((((s as any).ro ?? 0)?.['mkey'] !== ''  &&  ((s as any).sd_rel_name_override ?? 0)[((s as any).ro ?? 0)?.['mkey']] > 0) ? ((((s as any).sd_rel_name_override ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0)) : ((((s as any).ro ?? 0)?.['nm'])));
          if (((s as any).ro ?? 0)?.['eff_nm'] === 1) {
            ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_firstname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
          } else {
            if (((s as any).ro ?? 0)?.['eff_nm'] === 2) {
              ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_lastname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
              if (((s as any).ro ?? 0)?.['mname'] === '') {
                ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_firstname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
              }
            } else {
              if (((s as any).ro ?? 0)?.['eff_nm'] === 3) {
                ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_nickname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
                if (((s as any).ro ?? 0)?.['mname'] === '') {
                  ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_firstname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
                }
              } else {
                ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_usedname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
              }
            }
          }
          if (((s as any).ro ?? 0)?.['mname'] === '') {
            ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_usedname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
          }
          if (((s as any).ro ?? 0)?.['mname'] === '') {
            ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_firstname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
          }
          if (((s as any).ro ?? 0)?.['mname'] === '') {
            ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_nickname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
          }
          if (((s as any).ro ?? 0)?.['mname'] === '') {
            ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).npc_lastname ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
          }
          if (((s as any).ro ?? 0)?.['mname'] === '') {
            ((s as any).ro = (s as any).ro ?? {})['mname'] = (((s as any).ro ?? 0)?.['mkey']);
          }
          ((s as any).ro = (s as any).ro ?? {})['mlbl'] = ((((s as any).ro ?? 0)?.['mhid'] === 1) ? ('<font color="gray">' + (((s as any).ro ?? 0)?.['mname']) + '</font>') : ((((s as any).ro ?? 0)?.['mname'])));
          ((s as any).ro = (s as any).ro ?? {})['nmo'] = (((s as any).sd_rel_name_override ?? 0)?.[(((s as any).ro ?? 0)?.['mkey'])] ?? 0);
          if (((s as any).ro ?? 0)?.['nmo'] === 1) {
            ((s as any).ro = (s as any).ro ?? {})['nmo_ic'] = 'images/system/ui/name_first_' + (((s as any).ro ?? 0)?.['c']) + '.png';
          } else {
            if (((s as any).ro ?? 0)?.['nmo'] === 2) {
              ((s as any).ro = (s as any).ro ?? {})['nmo_ic'] = 'images/system/ui/name_family_' + (((s as any).ro ?? 0)?.['c']) + '.png';
            } else {
              if (((s as any).ro ?? 0)?.['nmo'] === 3) {
                ((s as any).ro = (s as any).ro ?? {})['nmo_ic'] = 'images/system/ui/name_nickname_' + (((s as any).ro ?? 0)?.['c']) + '.png';
              } else {
                ((s as any).ro = (s as any).ro ?? {})['nmo_ic'] = 'images/system/ui/name_default_' + (((s as any).ro ?? 0)?.['c']) + '.png';
              }
            }
          }
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<tr><td bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '" style="border:' + (((s as any).ro ?? 0)?.['bdr']) + '; background-color:' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '; padding:4px 6px;">');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap_grp_member\u0027, \u0027rel_grp\u0027); return false;"><img height="14" src="' + (((s as any).ro ?? 0)?.['up']) + '"></a>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap_grp_member\u0027, \u0027rel_grp\u0027); return false;"><img height="14" src="' + (((s as any).ro ?? 0)?.['down']) + '"></a>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
          // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: stat_hide_rel[''<<$ro[''mkey'']>>''] = 1 - stat_hide_rel[''<<$ro[''mkey'']>>''] & gt ''$menu_settings'', ''status''">' + $ro['mlbl'] + '</a>'
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
          // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_hide_rel[''<<$ro[''mkey'']>>''] = 1 - stat_hide_rel[''<<$ro[''mkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''mhi_ic'']>>"></a>'
          // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: sd_rel_name_override[''<<$ro[''mkey'']>>''] = (sd_rel_name_override[''<<$ro[''mkey'']>>''] + 1) mod 4 & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''nmo_ic'']>>"></a>'
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td>');
          ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</tr></table></td></tr>');
          ((s as any).ro = (s as any).ro ?? {})['mi'] = ((s as any).ro['mi'] ?? 0) + (1);
          break;
        }
        break;
      }
      // LABEL: _rnr_mdone
      ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</table>');
    }
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</td></tr>');
    ((s as any).ro = (s as any).ro ?? {})['gi'] = ((s as any).ro['gi'] ?? 0) + (1);
    ((s as any).ro = (s as any).ro ?? {})['html'] = ((s as any).ro['html'] ?? 0) + ('</table></center></td></tr>');
    (s as any).result = (((s as any).ro ?? 0)?.['html']);
    (s as any).ro = undefined;
    return;
  } while (((s as any).ro ?? 0)?.['gi'] < Object.keys((s as any).rel_group_order ?? {}).length);
  scene.build();
}

function enterReorderMenuBar(s: GameState, scene: SceneBuilder): void {
  ((s as any).ro = (s as any).ro ?? {})['ri_character'] = 'icon_character.png';
  ((s as any).ro = (s as any).ro ?? {})['ri_looks'] = 'icon_lookself.png';
  ((s as any).ro = (s as any).ro ?? {})['ri_purse'] = 'icon_purse.png';
  ((s as any).ro = (s as any).ro ?? {})['ri_phone'] = 'icon_phone.png';
  ((s as any).ro = (s as any).ro ?? {})['ri_journal'] = 'journal_norm.png';
  ((s as any).ro = (s as any).ro ?? {})['ri_magic'] = 'journal_magic.png';
  ((s as any).ro = (s as any).ro ?? {})['ri_clock'] = 'clock.png';
  ((s as any).ro = (s as any).ro ?? {})['ri_settings'] = 'icon_menu.png';
  ((s as any).ro = (s as any).ro ?? {})['ri_help'] = 'icon_help_color.png';
  ((s as any).ro = (s as any).ro ?? {})['imgbase'] = 'images/system/icons/menu/';
  ((s as any).ro = (s as any).ro ?? {})['bdr'] = '1px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '';
  (s as any).result = '<tr><td align="center" colspan="3" style="padding:6px 10px 2px 10px; text-align:center;"><b>Order</b>&nbsp; <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar \u0027$menu_bar_order\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027status\u0027); return false;">[Reset]</a></td></tr>';
  (s as any).result = ((s as any).result ?? 0) + ('<tr><td colspan="3" style="padding:2px 10px 8px 10px;"><center><table cellspacing="6" cellpadding="0"><tr>');
  ((s as any).ro = (s as any).ro ?? {})['i'] = 0;
  do {
    while (true) {
      ((s as any).ro = (s as any).ro ?? {})['key'] = qspUntranslated(s, "menu_bar_order[ro['i']]", { location: "stat_display_menu" });
      if (((s as any).ro ?? 0)?.['key'] === 'magic'  &&  (((s as any).start_type ?? 0)?.['magic'] === 'nomagic'  ||  ((s as any).stat_cfg ?? 0)?.['magic_separate'] === 0)) {
        break;
      }
      ((s as any).ro = (s as any).ro ?? {})['imgfile'] = 0;
      (s as any).result = ((s as any).result ?? 0) + ('<td valign="top"><table border="0" cellspacing="0" cellpadding="0" bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '" style="border:' + (((s as any).ro ?? 0)?.['bdr']) + '; background-color:' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + ';">');
      (s as any).result = ((s as any).result ?? 0) + ('<tr><td colspan="2" align="center" style="padding:4px;"><img height="' + (((s as any).stat_cfg ?? 0)?.['menu_icon_height']) + '" src="' + (((s as any).ro ?? 0)?.['imgbase']) + '' + (((s as any).ro ?? 0)?.['imgfile']) + '"></td></tr>');
      (s as any).result = ((s as any).result ?? 0) + ('<tr>');
      (s as any).result = ((s as any).result ?? 0) + ('<td align="center" width="50%" style="border-top:' + (((s as any).ro ?? 0)?.['bdr']) + '; padding:3px 6px;"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap\u0027, \u0027menu_bar_order\u0027); return false;">◀</a></td>');
      (s as any).result = ((s as any).result ?? 0) + ('<td align="center" width="50%" style="border-top:' + (((s as any).ro ?? 0)?.['bdr']) + '; border-left:' + (((s as any).ro ?? 0)?.['bdr']) + '; padding:3px 6px;"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027swap\u0027, \u0027menu_bar_order\u0027); return false;">▶</a></td>');
      (s as any).result = ((s as any).result ?? 0) + ('</tr></table></td>');
      break;
    }
    // LABEL: _rmb_next
    ((s as any).ro = (s as any).ro ?? {})['i'] = ((s as any).ro['i'] ?? 0) + (1);
    (s as any).result = ((s as any).result ?? 0) + ('</tr></table></center></td></tr>');
    (s as any).ro = undefined;
    return;
  } while (((s as any).ro ?? 0)?.['i'] < Object.keys((s as any).menu_bar_order ?? {}).length);
  scene.build();
}

function enterGeneralOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_st_td = (s as any).temp_st_td ?? {})['cell'] = '<td align="center" valign="middle" bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '" style="border:1px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '; background-color: ' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '; padding:5px; text-align:center; vertical-align:middle;">';
  (s as any).result = '<table width="80%" cellspacing="10" bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg']) + '" style="border:2px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '; margin:10px; padding:7px; border-spacing:10px; background-color: ' + (((s as any).theme_hex ?? 0)?.['table_bg']) + ';">';
  (s as any).result = ((s as any).result ?? 0) + ('<colgroup>');
  (s as any).result = ((s as any).result ?? 0) + ('<col width="32%">');
  (s as any).result = ((s as any).result ?? 0) + ('<col width="32%">');
  (s as any).result = ((s as any).result ?? 0) + ('<col width="32%">');
  (s as any).result = ((s as any).result ?? 0) + ('</colgroup>');
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Left';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Center';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Right';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Global Alignment', 'stat_cfg[\'global_align\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Hidden';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Labels';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Collapsible';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Headers', 'stat_cfg[\'sec_headers\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Auto';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Line break';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Horizontal rule';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Dividers', 'stat_cfg[\'separator_style\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '-2|Small (70%)';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '-1|Smaller (85%)';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '0|Normal';
  ((s as any).temp_values = (s as any).temp_values ?? {})[3] = '1|Larger (115%)';
  ((s as any).temp_values = (s as any).temp_values ?? {})[4] = '2|Large (130%)';
  ((s as any).temp_values = (s as any).temp_values ?? {})[5] = 'custom|Custom';
  (s as any).temp_fs_act = '$sd_fs_inp = input(\'Font size % (e.g. 110 for 110%. Leave blank to cancel):\') & stat_cfg[\'font_size\'] = iif($sd_fs_inp = \'\', stat_cfg[\'font_size\'], val($sd_fs_inp)) & killvar \'sd_fs_inp\'';
  ((s as any).temp_actions_right = (s as any).temp_actions_right ?? {})[0] = 'stat_cfg[\'font_size\'] = -1';
  ((s as any).temp_actions_right = (s as any).temp_actions_right ?? {})[1] = 'stat_cfg[\'font_size\'] = 0';
  ((s as any).temp_actions_right = (s as any).temp_actions_right ?? {})[2] = 'stat_cfg[\'font_size\'] = 1';
  ((s as any).temp_actions_right = (s as any).temp_actions_right ?? {})[3] = 'stat_cfg[\'font_size\'] = 2';
  ((s as any).temp_actions_right = (s as any).temp_actions_right ?? {})[4] = ((s as any).temp_fs_act ?? 0);
  ((s as any).temp_actions_right = (s as any).temp_actions_right ?? {})[5] = 'stat_cfg[\'font_size\'] = -2';
  ((s as any).temp_actions_left = (s as any).temp_actions_left ?? {})[0] = ((s as any).temp_fs_act ?? 0);
  ((s as any).temp_actions_left = (s as any).temp_actions_left ?? {})[1] = 'stat_cfg[\'font_size\'] = -2';
  ((s as any).temp_actions_left = (s as any).temp_actions_left ?? {})[2] = 'stat_cfg[\'font_size\'] = -1';
  ((s as any).temp_actions_left = (s as any).temp_actions_left ?? {})[3] = 'stat_cfg[\'font_size\'] = 0';
  ((s as any).temp_actions_left = (s as any).temp_actions_left ?? {})[4] = 'stat_cfg[\'font_size\'] = 1';
  ((s as any).temp_actions_left = (s as any).temp_actions_left ?? {})[5] = 'stat_cfg[\'font_size\'] = 2';
  (s as any).temp_fs_act = undefined;
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Font size', 'stat_cfg[\'font_size\']')));
  ((s as any).temp_values = (s as any).temp_values ?? {})[0] = '0|Icons & Texts';
  ((s as any).temp_values = (s as any).temp_values ?? {})[1] = '1|Prefer Icons';
  ((s as any).temp_values = (s as any).temp_values ?? {})[2] = '2|Text only';
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_cell', qspFunc(s, 'stat_display_menu', 'render_cell_opt', 'Status notifications', 'stat_cfg[\'msg_display_mode\']')));
  (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display_menu', '_row_flush'));
  (s as any).result = ((s as any).result ?? 0) + ('</table>');
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'render_cell_opt':
      enterRenderCellOpt(s, scene);
      break;
    case 'render_cell_num':
      enterRenderCellNum(s, scene);
      break;
    case 'section_table':
      enterSectionTable(s, scene);
      break;
    case '_row_cell':
      enterRowCell(s, scene);
      break;
    case '_row_flush':
      enterRowFlush(s, scene);
      break;
    case 'weather_options':
      enterWeatherOptions(s, scene);
      break;
    case 'money_options':
      enterMoneyOptions(s, scene);
      break;
    case 'time_options':
      enterTimeOptions(s, scene);
      break;
    case 'icons_options':
      enterIconsOptions(s, scene);
      break;
    case 'alerts_options':
      enterAlertsOptions(s, scene);
      break;
    case 'calendar_options':
      enterCalendarOptions(s, scene);
      break;
    case 'texts_options':
      enterTextsOptions(s, scene);
      break;
    case 'loadsave_options':
      enterLoadsaveOptions(s, scene);
      break;
    case 'menu_bar_options':
      enterMenuBarOptions(s, scene);
      break;
    case 'status_options':
      enterStatusOptions(s, scene);
      break;
    case 'attributes_options':
      enterAttributesOptions(s, scene);
      break;
    case 'images_options':
      enterImagesOptions(s, scene);
      break;
    case 'skills_options':
      enterSkillsOptions(s, scene);
      break;
    case 'relations_options':
      enterRelationsOptions(s, scene);
      break;
    case '_reorder_flat':
      enterReorderFlat(s, scene);
      break;
    case '_reorder_nested_skills':
      enterReorderNestedSkills(s, scene);
      break;
    case '_reorder_nested_relations':
      enterReorderNestedRelations(s, scene);
      break;
    case '_reorder_menu_bar':
      enterReorderMenuBar(s, scene);
      break;
    case 'general_options':
      enterGeneralOptions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stat_display_menu: LocationDef = {
  name: 'stat_display_menu',
  title: '<center>',
  region: 'other',
  enter: enter,
};
