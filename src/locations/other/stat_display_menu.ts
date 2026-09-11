import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *p '<center>'
  // TODO-QSP: *p $func('stat_display_menu', 'general_options')
  (s as any).temp_ls_i = 0;
  // TODO-QSP: :loop_sections
  if (((s as any).temp_ls_i ?? 0) < Object.keys((s as any).stat_order ?? {}).length) {
    // TODO-QSP: *p $func('stat_display_menu', 'section_table', temp_ls_i)
    (s as any).temp_ls_i = ((s as any).temp_ls_i ?? 0) + (1);
    // TODO-QSP: jump 'loop_sections'
  }
  // TODO-QSP: *p '</center>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderCellOpt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic 'rco[''cur_num''] = ' + $ARGS[2]
  // TODO-QSP: dynamic '$rco[''cur_str''] = $str(' + $ARGS[2] + ')'
  ((s as any).rco ?? {})['size'] = 0;
  ((s as any).rco ?? {})['idx'] = (-1);
  ((s as any).rco ?? {})['custom_idx'] = (-1);
  ((s as any).rco ?? {})['i'] = 0;
  // TODO-QSP: :rco_search
  if (((s as any).rco ?? 0)?.['i'] < ((s as any).rco ?? 0)?.['size']) {
    ((s as any).rco ?? {})['pipe'] = qspUntranslated(s, "instr(temp_values[rco['i']], '|')", { location: "stat_display_menu" });
    if (((s as any).rco ?? 0)?.['pipe'] > 0) {
      ((s as any).rco ?? {})['entry_val'] = ((qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" })).slice((1)-1, ((1)-1)+(((s as any).rco ?? {})?.['pipe'] - 1)));
      ((s as any).rco ?? {})['entry_lbl'] = ((qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" })).slice((((s as any).rco ?? {})?.['pipe'] + 1)-1));
    } else {
      ((s as any).rco ?? {})['entry_val'] = qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" });
      ((s as any).rco ?? {})['entry_lbl'] = qspUntranslated(s, "temp_values[rco['i']]", { location: "stat_display_menu" });
    }
    if (((s as any).rco ?? 0)?.['entry_val'] === 'custom') {
      ((s as any).rco ?? {})['custom_idx'] = ((s as any).rco ?? 0)?.['i'];
    } else {
      if (((s as any).rco ?? 0)?.['entry_val'] === ((s as any).rco ?? 0)?.['cur_str']  ||  parseFloat(((s as any).rco ?? 0)?.['entry_val']) === ((s as any).rco ?? 0)?.['cur_num']) {
        ((s as any).rco ?? {})['idx'] = ((s as any).rco ?? 0)?.['i'];
      }
    }
    ((s as any).rco ?? {})['i'] = (((s as any).rco ?? {})['i'] ?? 0) + (1);
    // TODO-QSP: jump 'rco_search'
  }
  if (((s as any).rco ?? 0)?.['idx'] === -1) {
    if (((s as any).rco ?? 0)?.['custom_idx'] >= 0) {
      ((s as any).rco ?? {})['idx'] = ((s as any).rco ?? 0)?.['custom_idx'];
    } else {
      ((s as any).rco ?? {})['idx'] = 0;
    }
  }
  ((s as any).rco ?? {})['pipe'] = qspUntranslated(s, "instr(temp_values[rco['idx']], '|')", { location: "stat_display_menu" });
  if (((s as any).rco ?? 0)?.['pipe'] > 0) {
    ((s as any).rco ?? {})['entry_val'] = ((qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" })).slice((1)-1, ((1)-1)+(((s as any).rco ?? {})?.['pipe'] - 1)));
    ((s as any).rco ?? {})['entry_lbl'] = ((qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" })).slice((((s as any).rco ?? {})?.['pipe'] + 1)-1));
  } else {
    ((s as any).rco ?? {})['entry_val'] = qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" });
    ((s as any).rco ?? {})['entry_lbl'] = qspUntranslated(s, "temp_values[rco['idx']]", { location: "stat_display_menu" });
  }
  if (((s as any).rco ?? 0)?.['entry_val'] === 'custom') {
    ((s as any).rco ?? {})['label'] = 'Custom: ' + ((s as any).rco ?? {})?.['cur_str'];
  } else {
    ((s as any).rco ?? {})['label'] = ((s as any).rco ?? 0)?.['entry_lbl'];
  }
  ((s as any).rco ?? {})['action_left'] = ((((s as any).temp_actions_left ?? 0)[((s as any).rco ?? 0)?.['idx']]  !== '') ? (qspUntranslated(s, "temp_actions_left[rco['idx']]", { location: "stat_display_menu" })) : (qspUntranslated(s, "temp_actions_left[0]", { location: "stat_display_menu" })));
  ((s as any).rco ?? {})['action_right'] = ((((s as any).temp_actions_right ?? 0)[((s as any).rco ?? 0)?.['idx']] !== '') ? (qspUntranslated(s, "temp_actions_right[rco['idx']]", { location: "stat_display_menu" })) : (qspUntranslated(s, "temp_actions_right[0]", { location: "stat_display_menu" })));
  if (((s as any).rco ?? 0)?.['action_left'] === ''  ||  ((s as any).rco ?? 0)?.['action_right'] === '') {
    ((s as any).rco ?? {})['idx_prev'] = (((s as any).rco ?? {})?.['idx'] - 1 + ((s as any).rco ?? {})?.['size']) % ((s as any).rco ?? {})?.['size'];
    ((s as any).rco ?? {})['idx_next'] = (((s as any).rco ?? {})?.['idx'] + 1) % ((s as any).rco ?? {})?.['size'];
    ((s as any).rco ?? {})['pipe'] = qspUntranslated(s, "instr(temp_values[rco['idx_prev']], '|')", { location: "stat_display_menu" });
    ((s as any).rco ?? {})['prev_val'] = ((((s as any).rco ?? 0)?.['pipe'] > 0) ? (((qspUntranslated(s, "temp_values[rco['idx_prev']]", { location: "stat_display_menu" })).slice((1)-1, ((1)-1)+(((s as any).rco ?? {})?.['pipe'] - 1)))) : (qspUntranslated(s, "temp_values[rco['idx_prev']]", { location: "stat_display_menu" })));
    ((s as any).rco ?? {})['pipe'] = qspUntranslated(s, "instr(temp_values[rco['idx_next']], '|')", { location: "stat_display_menu" });
    ((s as any).rco ?? {})['next_val'] = ((((s as any).rco ?? 0)?.['pipe'] > 0) ? (((qspUntranslated(s, "temp_values[rco['idx_next']]", { location: "stat_display_menu" })).slice((1)-1, ((1)-1)+(((s as any).rco ?? {})?.['pipe'] - 1)))) : (qspUntranslated(s, "temp_values[rco['idx_next']]", { location: "stat_display_menu" })));
    if (((s as any).rco ?? 0)?.['action_left'] === '') {
      ((s as any).rco ?? {})['action_left'] = ((parseFloat(((s as any).rco ?? 0)?.['prev_val']) !== 0  ||  ((s as any).rco ?? 0)?.['prev_val'] === '0') ? (((s as any).locArgs?.[2] ?? 0) + ' = ' + ((s as any).rco ?? {})?.['prev_val']) : (((s as any).locArgs?.[2] ?? 0) + ' = \'' + ((s as any).rco ?? {})?.['prev_val'] + '\''));
    }
    if (((s as any).rco ?? 0)?.['action_right'] === '') {
      ((s as any).rco ?? {})['action_right'] = ((parseFloat(((s as any).rco ?? 0)?.['next_val']) !== 0  ||  ((s as any).rco ?? 0)?.['next_val'] === '0') ? (((s as any).locArgs?.[2] ?? 0) + ' = ' + ((s as any).rco ?? {})?.['next_val']) : (((s as any).locArgs?.[2] ?? 0) + ' = \'' + ((s as any).rco ?? {})?.['next_val'] + '\''));
    }
  }
  // TODO-QSP: $result +=    '<tr>'
  // TODO-QSP: $result +=      '<td align="center" valign="middle" width="1%" nowrap rowspan="3" style="text-align:...
  // TODO-QSP: $result +=        '<a style="text-decoration: none" href="exec:<<$rco[''action_left'']>> & gt ''$men...
  // TODO-QSP: $result +=          '<big>◀</big>'
  // TODO-QSP: $result +=        '</a>'
  // TODO-QSP: $result +=      '</td>'
  // TODO-QSP: $result +=      '<td align="center" valign="middle" width="98%" style="text-align: center; vertical-...
  // TODO-QSP: $result +=        '<b><<$ARGS[1]>></b>'
  // TODO-QSP: $result +=      '</td>'
  // TODO-QSP: $result +=      '<td align="center" valign="middle" width="1%" nowrap rowspan="3" style="text-align:...
  // TODO-QSP: $result +=        '<a style="text-decoration: none" href="exec:<<$rco[''action_right'']>> & gt ''$me...
  // TODO-QSP: $result +=          '<big>▶</big>'
  // TODO-QSP: $result +=        '</a>'
  // TODO-QSP: $result +=      '</td>'
  // TODO-QSP: $result +=    '</tr>'
  // TODO-QSP: $result +=    '<tr>'
  // TODO-QSP: $result +=      '<td align="center" valign="middle" rowspan="2" style="text-align: center; vertical-...
  // TODO-QSP: $result +=        $rco['label']
  // TODO-QSP: $result +=      '</td>'
  // TODO-QSP: $result +=    '</tr>'
  // TODO-QSP: $result +=  '</table>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderCellNum(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic 'rcn[''cur''] = ' + $ARGS[2]
  ((s as any).rcn ?? {})['def'] = qspUntranslated(s, "ARGS[3]", { location: "stat_display_menu" });
  ((s as any).rcn ?? {})['min'] = qspUntranslated(s, "ARGS[4]", { location: "stat_display_menu" });
  ((s as any).rcn ?? {})['max'] = qspUntranslated(s, "ARGS[5]", { location: "stat_display_menu" });
  ((s as any).rcn ?? {})['act_left'] = ((s as any).locArgs?.[2] ?? 0) + ' = ax(' + String(((s as any).rcn ?? 0)?.['min']) + ', ' + ((s as any).locArgs?.[2] ?? 0) + ' - 1)';
  ((s as any).rcn ?? {})['act_right'] = ((s as any).locArgs?.[2] ?? 0) + ' = in(' + String(((s as any).rcn ?? 0)?.['max']) + ', ' + ((s as any).locArgs?.[2] ?? 0) + ' + 1)';
  ((s as any).rcn ?? {})['act_input'] = '$rcn_inp = input(\'\' + $ARGS[1] + \' [default: \' + $str(rcn[\'def\']) + \', Min: \' + $str(rcn[\'min\']) + \', Max: \' + $str(rcn[\'max\']) + \']\')';
  ((s as any).rcn ?? {})['act_input'] = (((s as any).rcn ?? {})['act_input'] ?? 0) + (' & \' + $ARGS[2] + \' = iif($rcn_inp = \'\' or val($rcn_inp) = 0 and $rcn_inp <> \'0\', \' + $str(rcn[\'def\']) + \', min(\' + $str(rcn[\'max\']) + \', max(\' + $str(rcn[\'min\']) + \', val($rcn_inp))))');
  ((s as any).rcn ?? {})['act_input'] = (((s as any).rcn ?? {})['act_input'] ?? 0) + (' & killvar \'rcn_inp\'');
  // TODO-QSP: $result +=    '<tr>'
  // TODO-QSP: $result +=      '<td align="center" valign="middle" width="1%" nowrap rowspan="3" style="text-align:...
  // TODO-QSP: $result +=        '<a style="text-decoration:none" href="exec:<<$rcn[''act_left'']>> & gt ''$menu_se...
  // TODO-QSP: $result +=          '<big>◀</big>'
  // TODO-QSP: $result +=        '</a>'
  // TODO-QSP: $result +=      '</td>'
  // TODO-QSP: $result +=      '<td align="center" valign="middle" width="98%" style="text-align:center; vertical-a...
  // TODO-QSP: $result +=        '<b><<$ARGS[1]>></b>'
  // TODO-QSP: $result +=      '</td>'
  // TODO-QSP: $result +=      '<td align="center" valign="middle" width="1%" nowrap rowspan="3" style="text-align:...
  // TODO-QSP: $result +=        '<a style="text-decoration:none" href="exec:<<$rcn[''act_right'']>> & gt ''$menu_s...
  // TODO-QSP: $result +=          '<big>▶</big>'
  // TODO-QSP: $result +=        '</a>'
  // TODO-QSP: $result +=      '</td>'
  // TODO-QSP: $result +=    '</tr>'
  // TODO-QSP: $result +=    '<tr>'
  // TODO-QSP: $result +=      '<td align="center" valign="middle" rowspan="2" style="text-align:center; vertical-a...
  // TODO-QSP: $result +=        '<a href="exec:<<$rcn[''act_input'']>> & gt ''$menu_settings'', ''status''">'
  // TODO-QSP: $result +=          '<<rcn[''cur'']>><<$ARGS[6]>>'
  // TODO-QSP: $result +=        '</a>'
  // TODO-QSP: $result +=      '</td>'
  // TODO-QSP: $result +=    '</tr>'
  // TODO-QSP: $result +=  '</table>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSectionTable(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_st_icon ?? {})['raise'] = 'images/system/ui/angle_up_\' + $temp_st_icon_color + \'.png';
  ((s as any).temp_st_icon ?? {})['lower'] = 'images/system/ui/angle_down_\' + $temp_st_icon_color + \'.png';
  ((s as any).temp_st_icon ?? {})['hide'] = 'images/system/ui/\' + iif(stat_hide[$temp_st_key] = 1, \'hide_\', \'show_\') + $temp_st_icon_color + \'.png';
  ((s as any).temp_st_icon ?? {})['expand'] = 'images/system/ui/\' + iif(stat_collapse[$temp_st_key] = 0, \'expand_\', \'collapse_\') + $temp_st_icon_color + \'.png';
  (s as any).temp_st_align_val = ((s as any).stat_cfg ?? 0)?.['align_' + ((s as any).temp_st_key ?? 0)];
  if ((!((s as any).temp_st_align_val ?? 0))) {
    (s as any).temp_st_align_eff = ((s as any).stat_cfg ?? 0)?.['global_align'];
  } else {
    (s as any).temp_st_align_eff = ((s as any).temp_st_align_val ?? 0) - 1;
  }
  // TODO-QSP: $temp_st_align_icon_name[0] = 'left'
  // TODO-QSP: $temp_st_align_icon_name[1] = 'center'
  // TODO-QSP: $temp_st_align_icon_name[2] = 'right'
  ((s as any).temp_st_icon ?? {})['align'] = 'images/system/ui/align_\' + $temp_st_align_icon_name[temp_st_align_eff] + \'_\' + $temp_st_icon_color + \'.png';
  // TODO-QSP: $temp_st_align_label[0] = 'Left'
  // TODO-QSP: $temp_st_align_label[1] = 'Center'
  // TODO-QSP: $temp_st_align_label[2] = 'Right'
  if ((!((s as any).temp_st_align_val ?? 0))) {
    ((s as any).temp_st_title ?? {})['align'] = 'Global Alignment (\' + $temp_st_align_label[temp_st_align_eff] + \') — click to set explicitly';
  } else {
    ((s as any).temp_st_title ?? {})['align'] = 'Aligned \' + $temp_st_align_label[temp_st_align_eff] + \' — click to cycle';
  }
  ((s as any).temp_st_title ?? {})['hide'] = ((((s as any).stat_hide ?? 0)?.[String((s as any).temp_st_key ?? 0)] === 1) ? ('Show Section') : ('Hide Section'));
  ((s as any).temp_st_title ?? {})['expand'] = ((((s as any).stat_collapse ?? 0)?.[String((s as any).temp_st_key ?? 0)] === 0) ? ('Collapse Options') : ('Expand Options'));
  ((s as any).temp_st_td ?? {})['icon'] = '<td align="center" width="1%" style="text-align:center; padding:3px;">';
  ((s as any).temp_st_td ?? {})['spacer'] = '<td align="center" width="1%" style="text-align:center; padding:3px;"><span style="display:inline-block; padding:2px; line-height:0; border:1px solid transparent; border-radius:6px;"><img height="32" src="' + qspUntranslated(s, "temp_st_icon['raise']>", { location: "stat_display_menu" }) + '" style="visibility:hidden"></span></td>';
  // TODO-QSP: $temp_st_td['cell'] = '<td align="center" valign="middle" bgcolor="<<$theme_hex[''table_bg_alt'']>>" style="border:1px solid <<$theme_hex[''goth'']>>; background-color: <<$theme_hex[''table_bg_alt'']>>; padding:3px; text-align:center; vertical-align:middle;">'
  // TODO-QSP: $result +=  '<table width="80%" cellspacing="6" bgcolor="<<$theme_hex[''table_bg'']>>" style="border...
  // TODO-QSP: $result +=  '<colgroup>'
  // TODO-QSP: $result +=    '<col width="32%">'
  // TODO-QSP: $result +=    '<col width="32%">'
  // TODO-QSP: $result +=    '<col width="32%">'
  // TODO-QSP: $result +=  '</colgroup>'
  // TODO-QSP: $result +=  '<tr valign="middle" style="vertical-align:middle;">'
  // TODO-QSP: $result +=    '<td colspan="3">'
  // TODO-QSP: $result +=      '<table width="100%" cellpadding="0" cellspacing="0" border="0">'
  // TODO-QSP: $result +=        '<tr valign="middle" style="vertical-align:middle;">'
  // TODO-QSP: $result +=          $temp_st_td['icon']
  // TODO-QSP: $result +=            '<a style="<<$temp_st_icon_border>>" href="exec:gs ''$menu_settings'', ''swap'...
  // TODO-QSP: $result +=              '<img height="32" title="Move Up" src="<<$temp_st_icon[''raise'']>>">'
  // TODO-QSP: $result +=            '</a>'
  // TODO-QSP: $result +=          '</td>'
  // TODO-QSP: $result +=          $temp_st_td['icon']
  // TODO-QSP: $result +=            '<a style="<<$temp_st_icon_border>>" href="exec:gs ''$menu_settings'', ''swap'...
  // TODO-QSP: $result +=              '<img height="32" title="Move Down" src="<<$temp_st_icon[''lower'']>>">'
  // TODO-QSP: $result +=            '</a>'
  // TODO-QSP: $result +=          '</td>'
  // TODO-QSP: $result +=          $temp_st_td['spacer']
  // TODO-QSP: $result +=          '<td align="center" colspan="2" width="96%" style="text-align:center; padding:0;...
  // TODO-QSP: $result +=            '<a style="display:block; text-decoration:none; color:inherit; padding:3px 5px...
  // TODO-QSP: $result +=          '</td>'
  // TODO-QSP: $result +=          $temp_st_td['icon']
  // TODO-QSP: $result +=            '<a style="<<$temp_st_icon_border>>" href="exec:stat_cfg[''align_<<$temp_st_ke...
  // TODO-QSP: $result +=              '<img height="32" title="<<$temp_st_title[''align'']>>"' + $temp_st_align_op...
  // TODO-QSP: $result +=            '</a>'
  // TODO-QSP: $result +=          '</td>'
  // TODO-QSP: $result +=          $temp_st_td['icon']
  // TODO-QSP: $result +=            '<a style="<<$temp_st_icon_border>>" href="exec:stat_hide[''<<$temp_st_key>>''...
  // TODO-QSP: $result +=              '<img height="32" title="<<$temp_st_title[''hide'']>>" src="<<$temp_st_icon[...
  // TODO-QSP: $result +=            '</a>'
  // TODO-QSP: $result +=          '</td>'
  // TODO-QSP: $result +=          $temp_st_td['icon']
  // TODO-QSP: $result +=            '<a style="<<$temp_st_icon_border>>" href="exec:stat_collapse[''<<$temp_st_key...
  // TODO-QSP: $result +=              '<img height="32" title="<<$temp_st_title[''expand'']>>" src="<<$temp_st_ico...
  // TODO-QSP: $result +=            '</a>'
  // TODO-QSP: $result +=          '</td>'
  // TODO-QSP: $result +=        '</tr>'
  // TODO-QSP: $result +=      '</table>'
  // TODO-QSP: $result +=    '</td>'
  // TODO-QSP: $result +=  '</tr>'
  if (((s as any).stat_collapse ?? 0)?.[String((s as any).temp_st_key ?? 0)] === 0) {
    // TODO-QSP: $result += $func('stat_display_menu', $temp_st_key + '_options')
  }
  // TODO-QSP: $result +=  '</table>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRowCell(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_rc_count ?? 0) % 3 === 0) {
  }
  // TODO-QSP: $result += $temp_st_td['cell'] + $ARGS[1] + '</td>'
  (s as any).temp_rc_count = ((s as any).temp_rc_count ?? 0) + (1);
  if (((s as any).temp_rc_count ?? 0) % 3 === 0) {
    // TODO-QSP: $result += '</tr>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRowFlush(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_rc_count ?? 0) % 3 !== 0) {
    // TODO-QSP: :_row_flush_pad
    // TODO-QSP: $result += '<td></td>'
    (s as any).temp_rc_count = ((s as any).temp_rc_count ?? 0) + (1);
    if (((s as any).temp_rc_count ?? 0) % 3 !== 0) {
      // TODO-QSP: jump '_row_flush_pad'
    }
    // TODO-QSP: $result += '</tr>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWeatherOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|Celsius'
  // TODO-QSP: $temp_values[1] = '1|Fahrenheit'
  // TODO-QSP: $temp_values[2] = '2|Kelvin'
  // TODO-QSP: $temp_values[3] = '3|Delisle'
  // TODO-QSP: $temp_values[4] = '4|😡'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Sc...
  // TODO-QSP: $temp_values[0] = '0|Temp. Right'
  // TODO-QSP: $temp_values[1] = '1|Temp. Below'
  // TODO-QSP: $temp_values[2] = '2|Temp. Above'
  // TODO-QSP: $temp_values[3] = '3|Temp. Left'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'La...
  // TODO-QSP: $temp_values[0] = '0|Banner'
  // TODO-QSP: $temp_values[1] = '1|Text'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'St...
  if (((s as any).stat_cfg ?? 0)?.['weather_visual'] === 0) {
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_num', 'Ba...
  }
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMoneyOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|Comma'
  // TODO-QSP: $temp_values[1] = '1|Period'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Se...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTimeOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|24-hour'
  // TODO-QSP: $temp_values[1] = '1|12-hour'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ti...
  // TODO-QSP: $temp_values[0] = '0|DDth MMM'
  // TODO-QSP: $temp_values[1] = '1|ISO 8601'
  // TODO-QSP: $temp_values[2] = '2|DD/MM'
  // TODO-QSP: $temp_values[3] = '3|MMM DDth'
  // TODO-QSP: $temp_values[4] = '4|MM/DD'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Da...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIconsOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_num', 'Si...
  // TODO-QSP: $temp_values[0] = '0|Hidden'
  // TODO-QSP: $temp_values[1] = '1|Shown'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Po...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAlertsOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|One per line'
  // TODO-QSP: $temp_values[1] = '2|Inline'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Li...
  // TODO-QSP: $temp_values[0] = '0|Shown'
  // TODO-QSP: $temp_values[1] = '1|Hidden'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'EX...
  // TODO-QSP: $temp_values[0] = '0|Shown'
  // TODO-QSP: $temp_values[1] = '1|Hidden'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ar...
  // TODO-QSP: $temp_values[0] = '0|Shown'
  // TODO-QSP: $temp_values[1] = '1|Hidden'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ar...
  // TODO-QSP: $temp_values[0] = '0|Hidden'
  // TODO-QSP: $temp_values[1] = '1|Shown'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Mi...
  // TODO-QSP: $temp_values[0] = '0|Disabled'
  // TODO-QSP: $temp_values[1] = '1|Enabled'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ar...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalendarOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '1|1'
  // TODO-QSP: $temp_values[1] = '2|2'
  // TODO-QSP: $temp_values[2] = '3|3'
  // TODO-QSP: $temp_values[3] = '4|4'
  // TODO-QSP: $temp_values[4] = '5|5'
  // TODO-QSP: $temp_values[5] = '6|All (today)'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ev...
  // TODO-QSP: $temp_values[0] = '0|On'
  // TODO-QSP: $temp_values[1] = '1|Off'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'To...
  // TODO-QSP: $temp_values[0] = '0|Shown'
  // TODO-QSP: $temp_values[1] = '1|Hidden'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Al...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTextsOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|One per line'
  // TODO-QSP: $temp_values[1] = '2|Inline'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Li...
  // TODO-QSP: $temp_values[0] = '0|Hidden'
  // TODO-QSP: $temp_values[1] = '1|Shown'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Po...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLoadsaveOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|Icons'
  // TODO-QSP: $temp_values[1] = '1|Text links'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Bu...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMenuBarOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_num', 'Si...
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    // TODO-QSP: $temp_values[0] = '0|Disabled'
    // TODO-QSP: $temp_values[1] = '1|Enabled'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Se...
  }
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  // TODO-QSP: $result += $func('stat_display_menu', '_reorder_menu_bar')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStatusOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|Table bars'
  // TODO-QSP: $temp_values[1] = '1|Character bars'
  // TODO-QSP: $temp_values[2] = '2|Text only'
  // TODO-QSP: $temp_values[3] = '3|Prose summary'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Mo...
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 0) {
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_num', 'Ba...
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] <= 1) {
    // TODO-QSP: $temp_values[0] = '0|Bar first'
    // TODO-QSP: $temp_values[1] = '1|Label first'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'La...
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 1) {
    // TODO-QSP: $temp_values[0] = '0|Large'
    // TODO-QSP: $temp_values[1] = '1|Small'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ch...
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 0) {
    // TODO-QSP: $temp_values[0] = '0|Overlay on Mood'
    // TODO-QSP: $temp_values[1] = '1|Separate bar'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Di...
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 2) {
    // TODO-QSP: $temp_values[0] = '0|Line Breaks'
    // TODO-QSP: $temp_values[1] = '1|Spaces'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Se...
  }
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  // TODO-QSP: $result += $func('stat_display_menu', '_reorder_flat', 'status_bar_order', 'stat_hide_bar', 'status'...
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAttributesOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|Table bars'
  // TODO-QSP: $temp_values[1] = '1|Character bars'
  // TODO-QSP: $temp_values[2] = '2|Text only'
  // TODO-QSP: $temp_values[3] = '3|Prose summary'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Di...
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] === 0) {
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_num', 'Ba...
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] <= 1) {
    // TODO-QSP: $temp_values[0] = '0|Bar first'
    // TODO-QSP: $temp_values[1] = '1|Label first'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'La...
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] === 0) {
    // TODO-QSP: $temp_values[0] = '0|Hidden'
    // TODO-QSP: $temp_values[1] = '1|Shown'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Sh...
    // TODO-QSP: $temp_values[0] = '0|Hidden'
    // TODO-QSP: $temp_values[1] = '1|Shown'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ba...
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] === 2) {
    // TODO-QSP: $temp_values[0] = '0|Line Breaks'
    // TODO-QSP: $temp_values[1] = '1|Spaces'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Se...
  }
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  // TODO-QSP: $result += $func('stat_display_menu', '_reorder_flat', 'attr_bar_order', 'stat_hide_bar', 'status', ...
  return;
  // TODO-QSP: end
  scene.build();
}

function enterImagesOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|1 Column'
  // TODO-QSP: $temp_values[1] = '1|2 Columns'
  // TODO-QSP: $temp_values[2] = '2|3 Columns'
  // TODO-QSP: $temp_values[3] = '3|Wrap'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Co...
  // TODO-QSP: $temp_values[0] = '0|Compact'
  // TODO-QSP: $temp_values[1] = '1|Spaced'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Sp...
  // TODO-QSP: $temp_values[0] = '0|Fit to width'
  // TODO-QSP: $temp_values[1] = '1|Full size'
  // TODO-QSP: $temp_values[2] = '2|Force height'
  // TODO-QSP: $temp_values[3] = '3|Force width'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Si...
  if (((s as any).stat_cfg ?? 0)?.['image_size'] === 2) {
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_num', 'He...
  } else {
    if (((s as any).stat_cfg ?? 0)?.['image_size'] === 3) {
      // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_num', 'Wi...
    }
  }
  // TODO-QSP: $temp_values[0] = '0|Off'
  // TODO-QSP: $temp_values[1] = '1|Type label'
  // TODO-QSP: $temp_values[2] = '2|Item name'
  // TODO-QSP: $temp_values[3] = '3|Name & info'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ca...
  if (((s as any).stat_cfg ?? 0)?.['image_headers'] > 0) {
    // TODO-QSP: $temp_values[0] = '0|Above'
    // TODO-QSP: $temp_values[1] = '1|Below'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ca...
    // TODO-QSP: $temp_values[0] = '0|Small'
    // TODO-QSP: $temp_values[1] = '1|Normal'
    // TODO-QSP: $temp_values[2] = '2|Bold'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Ca...
  }
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  // TODO-QSP: $result += $func('stat_display_menu', '_reorder_flat', 'image_order', 'stat_hide', 'status', '', '')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSkillsOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|Text table'
  // TODO-QSP: $temp_values[1] = '1|Table bars'
  // TODO-QSP: $temp_values[2] = '2|Character bars'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Di...
  if (((s as any).stat_cfg ?? 0)?.['skills_mode'] > 0) {
    // TODO-QSP: $temp_values[0] = '0|Bar first'
    // TODO-QSP: $temp_values[1] = '1|Label first'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'La...
  }
  // TODO-QSP: $temp_values[0] = '0|1 Column'
  // TODO-QSP: $temp_values[1] = '1|2 Columns'
  // TODO-QSP: $temp_values[2] = '2|3 Columns'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Co...
  // TODO-QSP: $temp_values[0] = '0|Merged'
  // TODO-QSP: $temp_values[1] = '1|Separated'
  // TODO-QSP: $temp_values[2] = '2|Headers & separated'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Gr...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  // TODO-QSP: $result += $func('stat_display_menu', '_reorder_nested_skills')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRelationsOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_values[0] = '0|Text table'
  // TODO-QSP: $temp_values[1] = '1|Table bars'
  // TODO-QSP: $temp_values[2] = '2|Character bars'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Di...
  if (((s as any).stat_cfg ?? 0)?.['relations_mode'] > 0) {
    // TODO-QSP: $temp_values[0] = '0|Bar first'
    // TODO-QSP: $temp_values[1] = '1|Label first'
    // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'La...
  }
  // TODO-QSP: $temp_values[0] = '0|1 Column'
  // TODO-QSP: $temp_values[1] = '1|2 Columns'
  // TODO-QSP: $temp_values[2] = '2|3 Columns'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Co...
  // TODO-QSP: $temp_values[0] = '0|Merged'
  // TODO-QSP: $temp_values[1] = '1|Separated'
  // TODO-QSP: $temp_values[2] = '2|Headers & separated'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Gr...
  // TODO-QSP: $temp_values[0] = '0|Context-based'
  // TODO-QSP: $temp_values[1] = '1|First name'
  // TODO-QSP: $temp_values[2] = '2|Last name'
  // TODO-QSP: $temp_values[3] = '3|Nickname'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Na...
  // TODO-QSP: $temp_values[0] = '0|Off'
  // TODO-QSP: $temp_values[1] = '1|On'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Co...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  // TODO-QSP: $result += $func('stat_display_menu', '_reorder_nested_relations')
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReorderFlat(s: GameState, scene: SceneBuilder): void {
  ((s as any).ro ?? {})['c'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('w') : ('b'));
  ((s as any).ro ?? {})['up'] = 'images/system/ui/angle_up_\'   + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['down'] = 'images/system/ui/angle_down_\' + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['bdr'] = '1px solid ' + qspUntranslated(s, "theme_hex['goth']>", { location: "stat_display_menu" }) + '';
  ((s as any).ro ?? {})['ibdr'] = 'display:inline-block; padding:4px; line-height:0; border:1px solid \' + $func(\'shortgs\', \'rgb_to_hex\', theme[\'fcolor\']) + \'; border-radius:4px;';
  // TODO-QSP: $ro['html'] = '<tr><td align="center" colspan="3" style="padding:6px 10px 2px 10px; text-align:center;"><b>Order &amp; Visibility</b>&nbsp; <a href="exec: killvar ''$<<$ARGS[1]>>'' & gt ''$menu_settings'', ''<<$ARGS[3]>>''">[Reset]</a></td></tr>'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<tr><td colspan="3" style="padding:2px 10px 8px 10px;"><center><table width="90%" cellspacing="3" cellpadding="0" border="0" style="width:90%;">');
  ((s as any).ro ?? {})['i'] = 0;
  // TODO-QSP: :_rfl_loop
  ((s as any).ro ?? {})['key'] = 0;
  if (((s as any).ro ?? 0)?.['key'] === ((s as any).locArgs?.[4] ?? 0)  &&  ((s as any).locArgs?.[4] ?? 0) !== ''  &&  ((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    // TODO-QSP: jump '_rfl_next'
  }
  if (((s as any).ro ?? 0)?.['key'] === ((s as any).locArgs?.[5] ?? 0)  &&  ((s as any).locArgs?.[5] ?? 0) !== ''  &&  ((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    // TODO-QSP: jump '_rfl_next'
  }
  ((s as any).ro ?? {})['hidden'] = 0;
  ((s as any).ro ?? {})['hide_icon'] = 'images/system/ui/\' + iif(ro[\'hidden\'] = 1, \'hide_\', \'show_\') + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['label'] = ((((s as any).ro ?? 0)?.['hidden'] === 1) ? ('<font color="gray">\' + $sd_dn[$ro[\'key\']] + \'</font>') : (((s as any).sd_dn ?? 0)?.[((s as any).ro ?? 0)?.['key']]));
  // TODO-QSP: $ro['html'] += '<tr><td bgcolor="<<$theme_hex[''table_bg_alt'']>>" style="border:<<$ro[''bdr'']>>; background-color:<<$theme_hex[''table_bg_alt'']>>; padding:5px 6px;">'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap'', ''<<$ARGS[1]>>'', <<ro[''i'']>>, ''up'' & gt ''$menu_settings'', ''<<$ARGS[3]>>''"><img height="18" src="<<$ro[''up'']>>"></a>'
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap'', ''<<$ARGS[1]>>'', <<ro[''i'']>>, ''down'' & gt ''$menu_settings'', ''<<$ARGS[3]>>''"><img height="18" src="<<$ro[''down'']>>"></a>'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
  // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: <<$ARGS[2]>>[''<<$ro[''key'']>>''] = 1 - <<$ARGS[2]>>[''<<$ro[''key'']>>''] & gt ''$menu_settings'', ''<<$ARGS[3]>>''">' + $ro['label'] + '</a>'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: <<$ARGS[2]>>[''<<$ro[''key'']>>''] = 1 - <<$ARGS[2]>>[''<<$ro[''key'']>>''] & gt ''$menu_settings'', ''<<$ARGS[3]>>''"><img height="18" src="<<$ro[''hide_icon'']>>"></a>'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</tr></table></td></tr>');
  // TODO-QSP: :_rfl_next
  ((s as any).ro ?? {})['i'] = (((s as any).ro ?? {})['i'] ?? 0) + (1);
  if (((s as any).ro ?? 0)?.['i'] < ((s as any).arrsize ?? 0)('$' + ((s as any).locArgs?.[1] ?? 0))) {
    // TODO-QSP: jump '_rfl_loop'
  }
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</table></center></td></tr>');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReorderNestedSkills(s: GameState, scene: SceneBuilder): void {
  ((s as any).ro ?? {})['c'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('w') : ('b'));
  ((s as any).ro ?? {})['up'] = 'images/system/ui/angle_up_\'   + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['down'] = 'images/system/ui/angle_down_\' + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['bdr'] = '1px solid ' + qspUntranslated(s, "theme_hex['goth']>", { location: "stat_display_menu" }) + '';
  ((s as any).ro ?? {})['ibdr'] = 'display:inline-block; padding:4px; line-height:0; border:1px solid \' + $func(\'shortgs\', \'rgb_to_hex\', theme[\'fcolor\']) + \'; border-radius:4px;';
  ((s as any).ro ?? {})['html'] = '<tr><td align="center" colspan="3" style="padding:6px 10px 2px 10px; text-align:center;"><b>Order &amp; Visibility</b>&nbsp; <a href="exec: gs \'$menu_settings\', \'reset_skills\' & gt \'$menu_settings\', \'status\'">[Reset]</a></td></tr>';
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<tr><td colspan="3" style="padding:2px 10px 8px 10px;"><center><table width="90%" cellspacing="3" cellpadding="0" border="0" style="width:90%;">');
  ((s as any).ro ?? {})['gi'] = 0;
  // TODO-QSP: :_rns_gloop
  ((s as any).ro ?? {})['gkey'] = qspUntranslated(s, "skill_group_order[ro['gi']]", { location: "stat_display_menu" });
  ((s as any).ro ?? {})['ghid'] = ((s as any).stat_hide ?? 0)?.[((s as any).ro ?? 0)?.['gkey']];
  ((s as any).ro ?? {})['gexp'] = ((s as any).stat_cfg ?? 0)?.['show_skills_' + ((s as any).ro ?? {})?.['gkey']];
  ((s as any).ro ?? {})['ghi_ic'] = 'images/system/ui/\' + iif(ro[\'ghid\'] = 1, \'hide_\', \'show_\')       + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['gex_ic'] = 'images/system/ui/\' + iif(ro[\'gexp\'] = 1, \'expand_\', \'collapse_\') + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['glbl'] = ((((s as any).ro ?? 0)?.['ghid'] === 1) ? ('<font color="gray"><b>\' + $sd_dn[$ro[\'gkey\']] + \'</b></font>') : ('<b>\' + $sd_dn[$ro[\'gkey\']] + \'</b>'));
  // TODO-QSP: $ro['html'] += '<tr><td bgcolor="<<$theme_hex[''table_bg'']>>" style="border:<<$ro[''bdr'']>>; background-color:<<$theme_hex[''table_bg'']>>; padding:5px 6px;">'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap'', ''skill_group_order'', <<ro[''gi'']>>, ''up'' & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''up'']>>"></a>'
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap'', ''skill_group_order'', <<ro[''gi'']>>, ''down'' & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''down'']>>"></a>'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
  // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: stat_cfg[''show_skills_<<$ro[''gkey'']>>''] = 1 - stat_cfg[''show_skills_<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''">' + $ro['glbl'] + '</a>'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_hide[''<<$ro[''gkey'']>>''] = 1 - stat_hide[''<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''ghi_ic'']>>"></a>'
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_cfg[''show_skills_<<$ro[''gkey'']>>''] = 1 - stat_cfg[''show_skills_<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''gex_ic'']>>"></a>'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</tr></table>');
  if (((s as any).ro ?? 0)?.['gexp'] === 1) {
    ((s as any).ro ?? {})['mi'] = 0;
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<table width="100%" cellspacing="3" cellpadding="0" border="0" style="margin-top:4px; padding-left:18px;">');
    // TODO-QSP: :_rns_mloop
    ((s as any).ro ?? {})['mkey'] = ((s as any).skill_grp ?? 0)?.[((s as any).ro ?? {})?.['gkey'] + '_' + String(((s as any).ro ?? 0)?.['mi'])];
    if (((s as any).ro ?? 0)?.['mkey'] === '') {
      // TODO-QSP: jump '_rns_mdone'
    }
    ((s as any).ro ?? {})['mhid'] = ((s as any).stat_hide_skill ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
    ((s as any).ro ?? {})['mhi_ic'] = 'images/system/ui/\' + iif(ro[\'mhid\'] = 1, \'hide_\', \'show_\') + $ro[\'c\'] + \'.png';
    ((s as any).ro ?? {})['mlbl'] = ((((s as any).ro ?? 0)?.['mhid'] === 1) ? ('<font color="gray">\' + $sd_dn[$ro[\'mkey\']] + \'</font>') : (((s as any).sd_dn ?? 0)?.[((s as any).ro ?? 0)?.['mkey']]));
    // TODO-QSP: $ro['html'] += '<tr><td bgcolor="<<$theme_hex[''table_bg_alt'']>>" style="border:<<$ro[''bdr'']>>; background-color:<<$theme_hex[''table_bg_alt'']>>; padding:4px 6px;">'
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap_grp_member'', ''skill_grp'', ''<<$ro[''gkey'']>>'', <<ro[''mi'']>>, ''up'' & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''up'']>>"></a>'
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap_grp_member'', ''skill_grp'', ''<<$ro[''gkey'']>>'', <<ro[''mi'']>>, ''down'' & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''down'']>>"></a>'
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
    // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: stat_hide_skill[''<<$ro[''mkey'']>>''] = 1 - stat_hide_skill[''<<$ro[''mkey'']>>''] & gt ''$menu_settings'', ''status''">' + $ro['mlbl'] + '</a>'
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_hide_skill[''<<$ro[''mkey'']>>''] = 1 - stat_hide_skill[''<<$ro[''mkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''mhi_ic'']>>"></a>'
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</tr></table></td></tr>');
    ((s as any).ro ?? {})['mi'] = (((s as any).ro ?? {})['mi'] ?? 0) + (1);
    // TODO-QSP: jump '_rns_mloop'
    // TODO-QSP: :_rns_mdone
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</table>');
  }
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td></tr>');
  ((s as any).ro ?? {})['gi'] = (((s as any).ro ?? {})['gi'] ?? 0) + (1);
  if (((s as any).ro ?? 0)?.['gi'] < Object.keys((s as any).skill_group_order ?? {}).length) {
    // TODO-QSP: jump '_rns_gloop'
  }
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</table></center></td></tr>');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReorderNestedRelations(s: GameState, scene: SceneBuilder): void {
  ((s as any).ro ?? {})['c'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('w') : ('b'));
  ((s as any).ro ?? {})['up'] = 'images/system/ui/angle_up_\'   + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['down'] = 'images/system/ui/angle_down_\' + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['bdr'] = '1px solid ' + qspUntranslated(s, "theme_hex['goth']>", { location: "stat_display_menu" }) + '';
  ((s as any).ro ?? {})['ibdr'] = 'display:inline-block; padding:4px; line-height:0; border:1px solid \' + $func(\'shortgs\', \'rgb_to_hex\', theme[\'fcolor\']) + \'; border-radius:4px;';
  ((s as any).ro ?? {})['html'] = '<tr><td align="center" colspan="3" style="padding:6px 10px 2px 10px; text-align:center;"><b>Order &amp; Visibility</b>&nbsp; <a href="exec: gs \'$menu_settings\', \'reset_rels\' & gt \'$menu_settings\', \'status\'">[Reset]</a></td></tr>';
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<tr><td colspan="3" style="padding:2px 10px 8px 10px;"><center><table width="90%" cellspacing="3" cellpadding="0" border="0" style="width:90%;">');
  ((s as any).ro ?? {})['gi'] = 0;
  // TODO-QSP: :_rnr_gloop
  ((s as any).ro ?? {})['gkey'] = qspUntranslated(s, "rel_group_order[ro['gi']]", { location: "stat_display_menu" });
  ((s as any).ro ?? {})['ghid'] = ((s as any).stat_hide_rel_grp ?? 0)?.[((s as any).ro ?? 0)?.['gkey']];
  ((s as any).ro ?? {})['gexp'] = ((s as any).stat_cfg ?? 0)?.['show_rels_' + ((s as any).ro ?? {})?.['gkey']];
  ((s as any).ro ?? {})['ghi_ic'] = 'images/system/ui/\' + iif(ro[\'ghid\'] = 1, \'hide_\', \'show_\')       + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['gex_ic'] = 'images/system/ui/\' + iif(ro[\'gexp\'] = 1, \'expand_\', \'collapse_\') + $ro[\'c\'] + \'.png';
  ((s as any).ro ?? {})['glbl'] = ((((s as any).ro ?? 0)?.['ghid'] === 1) ? ('<font color="gray"><b>\' + $sd_dn[$ro[\'gkey\']] + \'</b></font>') : ('<b>\' + $sd_dn[$ro[\'gkey\']] + \'</b>'));
  // TODO-QSP: $ro['html'] += '<tr><td bgcolor="<<$theme_hex[''table_bg'']>>" style="border:<<$ro[''bdr'']>>; background-color:<<$theme_hex[''table_bg'']>>; padding:5px 6px;">'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap'', ''rel_group_order'', <<ro[''gi'']>>, ''up'' & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''up'']>>"></a>'
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap'', ''rel_group_order'', <<ro[''gi'']>>, ''down'' & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''down'']>>"></a>'
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
  if (((s as any).ro ?? 0)?.['gkey'] !== 'lovers') {
    // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: stat_cfg[''show_rels_<<$ro[''gkey'']>>''] = 1 - stat_cfg[''show_rels_<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''">' + $ro['glbl'] + '</a>'
  } else {
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + (((s as any).ro ?? 0)?.['glbl']);
  }
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
  // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_hide_rel_grp[''<<$ro[''gkey'']>>''] = 1 - stat_hide_rel_grp[''<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''ghi_ic'']>>"></a>'
  if (((s as any).ro ?? 0)?.['gkey'] !== 'lovers') {
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_cfg[''show_rels_<<$ro[''gkey'']>>''] = 1 - stat_cfg[''show_rels_<<$ro[''gkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="18" src="<<$ro[''gex_ic'']>>"></a>'
  } else {
    // TODO-QSP: $ro['html'] += '<span style="<<$ro[''ibdr'']>>; visibility:hidden;"><img height="18" src="<<$ro[''up'']>>"></span>'
  }
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</tr></table>');
  if (((s as any).ro ?? 0)?.['gkey'] !== 'lovers'  &&  ((s as any).ro ?? 0)?.['gexp'] === 1) {
    ((s as any).ro ?? {})['mi'] = 0;
    ((s as any).ro ?? {})['nm'] = ((s as any).stat_cfg ?? 0)?.['rel_name_mode'];
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<table width="100%" cellspacing="3" cellpadding="0" border="0" style="margin-top:4px; padding-left:18px;">');
    // TODO-QSP: :_rnr_mloop
    ((s as any).ro ?? {})['mkey'] = ((s as any).rel_grp ?? 0)?.[((s as any).ro ?? {})?.['gkey'] + '_' + String(((s as any).ro ?? 0)?.['mi'])];
    if (((s as any).ro ?? 0)?.['mkey'] === '') {
      // TODO-QSP: jump '_rnr_mdone'
    }
    ((s as any).ro ?? {})['mhid'] = ((s as any).stat_hide_rel ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
    ((s as any).ro ?? {})['mhi_ic'] = 'images/system/ui/\' + iif(ro[\'mhid\'] = 1, \'hide_\', \'show_\') + $ro[\'c\'] + \'.png';
    ((s as any).ro ?? {})['eff_nm'] = ((((s as any).ro ?? 0)?.['mkey'] !== ''  &&  ((s as any).sd_rel_name_override ?? 0)[((s as any).ro ?? 0)?.['mkey']] > 0) ? (((s as any).sd_rel_name_override ?? 0)?.[((s as any).ro ?? 0)?.['mkey']]) : (((s as any).ro ?? 0)?.['nm']));
    if (((s as any).ro ?? 0)?.['eff_nm'] === 1) {
      ((s as any).ro ?? {})['mname'] = ((s as any).npc_firstname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
    } else {
      if (((s as any).ro ?? 0)?.['eff_nm'] === 2) {
        ((s as any).ro ?? {})['mname'] = ((s as any).npc_lastname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
        if (((s as any).ro ?? 0)?.['mname'] === '') {
          ((s as any).ro ?? {})['mname'] = ((s as any).npc_firstname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
        }
      } else {
        if (((s as any).ro ?? 0)?.['eff_nm'] === 3) {
          ((s as any).ro ?? {})['mname'] = ((s as any).npc_nickname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
          if (((s as any).ro ?? 0)?.['mname'] === '') {
            ((s as any).ro ?? {})['mname'] = ((s as any).npc_firstname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
          }
        } else {
          ((s as any).ro ?? {})['mname'] = ((s as any).npc_usedname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
        }
      }
    }
    if (((s as any).ro ?? 0)?.['mname'] === '') {
      ((s as any).ro ?? {})['mname'] = ((s as any).npc_usedname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
    }
    if (((s as any).ro ?? 0)?.['mname'] === '') {
      ((s as any).ro ?? {})['mname'] = ((s as any).npc_firstname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
    }
    if (((s as any).ro ?? 0)?.['mname'] === '') {
      ((s as any).ro ?? {})['mname'] = ((s as any).npc_nickname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
    }
    if (((s as any).ro ?? 0)?.['mname'] === '') {
      ((s as any).ro ?? {})['mname'] = ((s as any).npc_lastname ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
    }
    if (((s as any).ro ?? 0)?.['mname'] === '') {
      ((s as any).ro ?? {})['mname'] = ((s as any).ro ?? 0)?.['mkey'];
    }
    ((s as any).ro ?? {})['mlbl'] = ((((s as any).ro ?? 0)?.['mhid'] === 1) ? ('<font color="gray">\' + $ro[\'mname\'] + \'</font>') : (((s as any).ro ?? 0)?.['mname']));
    ((s as any).ro ?? {})['nmo'] = ((s as any).sd_rel_name_override ?? 0)?.[((s as any).ro ?? 0)?.['mkey']];
    if (((s as any).ro ?? 0)?.['nmo'] === 1) {
      ((s as any).ro ?? {})['nmo_ic'] = 'images/system/ui/name_first_\'    + $ro[\'c\'] + \'.png';
    } else {
      if (((s as any).ro ?? 0)?.['nmo'] === 2) {
        ((s as any).ro ?? {})['nmo_ic'] = 'images/system/ui/name_family_\'   + $ro[\'c\'] + \'.png';
      } else {
        if (((s as any).ro ?? 0)?.['nmo'] === 3) {
          ((s as any).ro ?? {})['nmo_ic'] = 'images/system/ui/name_nickname_\' + $ro[\'c\'] + \'.png';
        } else {
          ((s as any).ro ?? {})['nmo_ic'] = 'images/system/ui/name_default_\'  + $ro[\'c\'] + \'.png';
        }
      }
    }
    // TODO-QSP: $ro['html'] += '<tr><td bgcolor="<<$theme_hex[''table_bg_alt'']>>" style="border:<<$ro[''bdr'']>>; background-color:<<$theme_hex[''table_bg_alt'']>>; padding:4px 6px;">'
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="vertical-align:middle;">');
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 3px 0 0;">');
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap_grp_member'', ''rel_grp'', ''<<$ro[''gkey'']>>'', <<ro[''mi'']>>, ''up'' & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''up'']>>"></a>'
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: gs ''$menu_settings'', ''swap_grp_member'', ''rel_grp'', ''<<$ro[''gkey'']>>'', <<ro[''mi'']>>, ''down'' & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''down'']>>"></a>'
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td align="center" style="text-align:center; padding:0 4px;">');
    // TODO-QSP: $ro['html'] += '<a style="display:block; text-decoration:none; color:inherit;" href="exec: stat_hide_rel[''<<$ro[''mkey'']>>''] = 1 - stat_hide_rel[''<<$ro[''mkey'']>>''] & gt ''$menu_settings'', ''status''">' + $ro['mlbl'] + '</a>'
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('<td width="1%" nowrap style="padding:0 0 0 3px;">');
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: stat_hide_rel[''<<$ro[''mkey'']>>''] = 1 - stat_hide_rel[''<<$ro[''mkey'']>>''] & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''mhi_ic'']>>"></a>'
    // TODO-QSP: $ro['html'] += '<a style="<<$ro[''ibdr'']>>" href="exec: sd_rel_name_override[''<<$ro[''mkey'']>>''] = (sd_rel_name_override[''<<$ro[''mkey'']>>''] + 1) mod 4 & gt ''$menu_settings'', ''status''"><img height="14" src="<<$ro[''nmo_ic'']>>"></a>'
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td>');
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</tr></table></td></tr>');
    ((s as any).ro ?? {})['mi'] = (((s as any).ro ?? {})['mi'] ?? 0) + (1);
    // TODO-QSP: jump '_rnr_mloop'
    // TODO-QSP: :_rnr_mdone
    ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</table>');
  }
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</td></tr>');
  ((s as any).ro ?? {})['gi'] = (((s as any).ro ?? {})['gi'] ?? 0) + (1);
  if (((s as any).ro ?? 0)?.['gi'] < Object.keys((s as any).rel_group_order ?? {}).length) {
    // TODO-QSP: jump '_rnr_gloop'
  }
  ((s as any).ro ?? {})['html'] = (((s as any).ro ?? {})['html'] ?? 0) + ('</table></center></td></tr>');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReorderMenuBar(s: GameState, scene: SceneBuilder): void {
  ((s as any).ro ?? {})['ri_character'] = 'icon_character.png';
  ((s as any).ro ?? {})['ri_looks'] = 'icon_lookself.png';
  ((s as any).ro ?? {})['ri_purse'] = 'icon_purse.png';
  ((s as any).ro ?? {})['ri_phone'] = 'icon_phone.png';
  ((s as any).ro ?? {})['ri_journal'] = 'journal_norm.png';
  ((s as any).ro ?? {})['ri_magic'] = 'journal_magic.png';
  ((s as any).ro ?? {})['ri_clock'] = 'clock.png';
  ((s as any).ro ?? {})['ri_settings'] = 'icon_menu.png';
  ((s as any).ro ?? {})['ri_help'] = 'icon_help_color.png';
  ((s as any).ro ?? {})['imgbase'] = 'images/system/icons/menu/';
  ((s as any).ro ?? {})['bdr'] = '1px solid ' + qspUntranslated(s, "theme_hex['goth']>", { location: "stat_display_menu" }) + '';
  // TODO-QSP: $result += '<tr><td colspan="3" style="padding:2px 10px 8px 10px;"><center><table cellspacing="6" ce...
  ((s as any).ro ?? {})['i'] = 0;
  // TODO-QSP: :_rmb_loop
  ((s as any).ro ?? {})['key'] = qspUntranslated(s, "menu_bar_order[ro['i']]", { location: "stat_display_menu" });
  if (((s as any).ro ?? 0)?.['key'] === 'magic'  &&  (((s as any).start_type ?? 0)?.['magic'] === 'nomagic'  ||  ((s as any).stat_cfg ?? 0)?.['magic_separate'] === 0)) {
    // TODO-QSP: jump '_rmb_next'
  }
  ((s as any).ro ?? {})['imgfile'] = 0;
  // TODO-QSP: $result += '<td valign="top"><table border="0" cellspacing="0" cellpadding="0" bgcolor="<<$theme_hex...
  // TODO-QSP: $result += '<tr><td colspan="2" align="center" style="padding:4px;"><img height="<<stat_cfg[''menu_i...
  // TODO-QSP: $result += '<tr>'
  // TODO-QSP: $result += '<td align="center" width="50%" style="border-top:<<$ro[''bdr'']>>; padding:3px 6px;"><a ...
  // TODO-QSP: $result += '<td align="center" width="50%" style="border-top:<<$ro[''bdr'']>>; border-left:<<$ro[''b...
  // TODO-QSP: $result += '</tr></table></td>'
  // TODO-QSP: :_rmb_next
  ((s as any).ro ?? {})['i'] = (((s as any).ro ?? {})['i'] ?? 0) + (1);
  if (((s as any).ro ?? 0)?.['i'] < Object.keys((s as any).menu_bar_order ?? {}).length) {
    // TODO-QSP: jump '_rmb_loop'
  }
  // TODO-QSP: $result += '</tr></table></center></td></tr>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGeneralOptions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_st_td['cell'] = '<td align="center" valign="middle" bgcolor="<<$theme_hex[''table_bg_alt'']>>" style="border:1px solid <<$theme_hex[''goth'']>>; background-color: <<$theme_hex[''table_bg_alt'']>>; padding:5px; text-align:center; vertical-align:middle;">'
  // TODO-QSP: $result +=  '<colgroup>'
  // TODO-QSP: $result +=    '<col width="32%">'
  // TODO-QSP: $result +=    '<col width="32%">'
  // TODO-QSP: $result +=    '<col width="32%">'
  // TODO-QSP: $result +=  '</colgroup>'
  // TODO-QSP: $temp_values[0] = '0|Left'
  // TODO-QSP: $temp_values[1] = '1|Center'
  // TODO-QSP: $temp_values[2] = '2|Right'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Gl...
  // TODO-QSP: $temp_values[0] = '0|Hidden'
  // TODO-QSP: $temp_values[1] = '1|Labels'
  // TODO-QSP: $temp_values[2] = '2|Collapsible'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'He...
  // TODO-QSP: $temp_values[0] = '0|Auto'
  // TODO-QSP: $temp_values[1] = '1|Line break'
  // TODO-QSP: $temp_values[2] = '2|Horizontal rule'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Di...
  // TODO-QSP: $temp_values[0] = '-2|Small (70%)'
  // TODO-QSP: $temp_values[1] = '-1|Smaller (85%)'
  // TODO-QSP: $temp_values[2] = '0|Normal'
  // TODO-QSP: $temp_values[3] = '1|Larger (115%)'
  // TODO-QSP: $temp_values[4] = '2|Large (130%)'
  // TODO-QSP: $temp_values[5] = 'custom|Custom'
  // TODO-QSP: $temp_actions_right[0] = 'stat_cfg[''font_size''] = -1'
  // TODO-QSP: $temp_actions_right[1] = 'stat_cfg[''font_size''] = 0'
  // TODO-QSP: $temp_actions_right[2] = 'stat_cfg[''font_size''] = 1'
  // TODO-QSP: $temp_actions_right[3] = 'stat_cfg[''font_size''] = 2'
  // TODO-QSP: $temp_actions_right[4] = $temp_fs_act
  // TODO-QSP: $temp_actions_right[5] = 'stat_cfg[''font_size''] = -2'
  // TODO-QSP: $temp_actions_left[0] = $temp_fs_act
  // TODO-QSP: $temp_actions_left[1] = 'stat_cfg[''font_size''] = -2'
  // TODO-QSP: $temp_actions_left[2] = 'stat_cfg[''font_size''] = -1'
  // TODO-QSP: $temp_actions_left[3] = 'stat_cfg[''font_size''] = 0'
  // TODO-QSP: $temp_actions_left[4] = 'stat_cfg[''font_size''] = 1'
  // TODO-QSP: $temp_actions_left[5] = 'stat_cfg[''font_size''] = 2'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'Fo...
  // TODO-QSP: $temp_values[0] = '0|Icons & Texts'
  // TODO-QSP: $temp_values[1] = '1|Prefer Icons'
  // TODO-QSP: $temp_values[2] = '2|Text only'
  // TODO-QSP: $result += $func('stat_display_menu', '_row_cell', $func('stat_display_menu', 'render_cell_opt', 'St...
  // TODO-QSP: $result += $func('stat_display_menu', '_row_flush')
  // TODO-QSP: $result += '</table>'
  return;
  // TODO-QSP: end
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
  region: 'other',
  enter: enter,
};
