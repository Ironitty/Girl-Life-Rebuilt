import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHelperBar(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_hb = (s as any).sd_hb ?? {})['rm'] = (((s as any).sd ?? {})?.['render_mode'] ?? 0) + 1;
  if (((s as any).sd ?? 0)?.['render_mode'] === 2) {
    (s as any).result = ((s as any).locArgs?.[2] ?? 0) + ': ' + qspFunc(s, 'progressbar', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0), ((s as any).locArgs?.[7] ?? 0), '', ((s as any).locArgs?.[8] ?? 0), (((s as any).sd_hb ?? 0)?.['rm']));
  } else {
    if (((s as any).sd ?? 0)?.['name_side'] === 1) {
      (s as any).result = '<tr><td nowrap style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">&nbsp;' + ((s as any).locArgs?.[2] ?? 0) + '&nbsp;</td><td>' + qspFunc(s, 'progressbar', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0), ((s as any).locArgs?.[7] ?? 0), '', ((s as any).locArgs?.[8] ?? 0), (((s as any).sd_hb ?? 0)?.['rm'])) + '</td></tr>';
    } else {
      (s as any).result = '<tr><td>' + qspFunc(s, 'progressbar', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0), ((s as any).locArgs?.[7] ?? 0), '', ((s as any).locArgs?.[8] ?? 0), (((s as any).sd_hb ?? 0)?.['rm'])) + '</td><td nowrap style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">&nbsp;' + ((s as any).locArgs?.[2] ?? 0) + '</td></tr>';
    }
  }
  (s as any).sd_hb = undefined;
  return;
  scene.build();
}

function enterHelperBarCell(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_bc = (s as any).sd_bc ?? {})['bar'] = qspFunc(s, 'progressbar', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), ((s as any).locArgs?.[6] ?? 0), ((s as any).locArgs?.[7] ?? 0), '', ((s as any).locArgs?.[8] ?? 0), (((s as any).sd ?? {})?.['render_mode'] ?? 0) + 1);
  if (((s as any).sd ?? 0)?.['name_side'] === 1) {
    (s as any).result = '<td nowrap style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">&nbsp;' + ((s as any).locArgs?.[2] ?? 0) + '&nbsp;</td><td>' + (((s as any).sd_bc ?? 0)?.['bar']) + '</td>';
  } else {
    (s as any).result = '<td>' + (((s as any).sd_bc ?? 0)?.['bar']) + '</td><td nowrap style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">&nbsp;' + ((s as any).locArgs?.[2] ?? 0) + '</td>';
  }
  (s as any).sd_bc = undefined;
  return;
  scene.build();
}

function enterHelperSkillEntry(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_se = (s as any).sd_se ?? {})['cols'] = (((s as any).sd ?? 0)?.['skills_columns']);
  ((s as any).sd_se = (s as any).sd_se ?? {})['name'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).stat_cfg ?? 0)?.['skills_mode'] > 0) {
    if (String((s as any).locArgs?.[3] ?? '') % ((s as any).sd_se ?? 0)?.['cols'] === 0) {
      (s as any).result = '<tr>';
    }
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display', 'helper_bar_cell', 'smooth_positive', (((s as any).sd_se ?? 0)?.['name']), ((s as any).locArgs?.[2] ?? 0)));
    if (String((s as any).locArgs?.[3] ?? '') % ((s as any).sd_se ?? 0)?.['cols'] === (((s as any).sd_se ?? 0)?.['cols'] - 1)) {
      (s as any).result = ((s as any).result ?? '') + '</tr>';
    }
  } else {
    if (String((s as any).locArgs?.[3] ?? '') % ((s as any).sd_se ?? 0)?.['cols'] === 0) {
      (s as any).result = '<tr>';
    }
    (s as any).result = ((s as any).result ?? 0) + ('<td style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">' + String(((s as any).locArgs?.[2] ?? 0)) + ' ' + (((s as any).sd_se ?? 0)?.['name']) + '</td>');
    if (String((s as any).locArgs?.[3] ?? '') % ((s as any).sd_se ?? 0)?.['cols'] === (((s as any).sd_se ?? 0)?.['cols'] - 1)) {
      (s as any).result = ((s as any).result ?? '') + '</tr>';
    }
  }
  (s as any).sd_se = undefined;
  return;
  scene.build();
}

function enterHelperRelEntry(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_re = (s as any).sd_re ?? {})['cols'] = (((s as any).sd ?? 0)?.['relations_columns']);
  ((s as any).sd_re = (s as any).sd_re ?? {})['dname'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).stat_cfg ?? 0)?.['relations_mode'] > 0) {
    if (((s as any).stat_cfg ?? 0)?.['rel_color_mode'] === 1) {
      ((s as any).sd_re = (s as any).sd_re ?? {})['color'] = qspFunc(s, 'progressbar', 'color', 'smooth_positive', ((s as any).locArgs?.[2] ?? 0), '10,35,60,80');
      ((s as any).sd_re = (s as any).sd_re ?? {})['dname'] = '<font color="' + (((s as any).sd_re ?? 0)?.['color']) + '">' + (((s as any).sd_re ?? 0)?.['dname']) + '</font>';
    }
    if (String((s as any).locArgs?.[3] ?? '') % ((s as any).sd_re ?? 0)?.['cols'] === 0) {
      (s as any).result = '<tr>';
    }
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display', 'helper_bar_cell', 'smooth_positive', (((s as any).sd_re ?? 0)?.['dname']), ((s as any).locArgs?.[2] ?? 0)));
    if (String((s as any).locArgs?.[3] ?? '') % ((s as any).sd_re ?? 0)?.['cols'] === (((s as any).sd_re ?? 0)?.['cols'] - 1)) {
      (s as any).result = ((s as any).result ?? '') + '</tr>';
    }
  } else {
    if (String((s as any).locArgs?.[3] ?? '') % ((s as any).sd_re ?? 0)?.['cols'] === 0) {
      (s as any).result = '<tr>';
    }
    if (((s as any).stat_cfg ?? 0)?.['rel_color_mode'] === 1) {
      ((s as any).sd_re = (s as any).sd_re ?? {})['color'] = qspFunc(s, 'progressbar', 'color', 'smooth_positive', ((s as any).locArgs?.[2] ?? 0), '10,35,60,80');
      (s as any).result = ((s as any).result ?? 0) + ('<td style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;"><font color="' + (((s as any).sd_re ?? 0)?.['color']) + '">' + (((s as any).sd_re ?? 0)?.['dname']) + ': ' + String(((s as any).locArgs?.[2] ?? 0)) + '</font></td>');
    } else {
      (s as any).result = ((s as any).result ?? 0) + ('<td style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">' + (((s as any).sd_re ?? 0)?.['dname']) + ': ' + String(((s as any).locArgs?.[2] ?? 0)) + '</td>');
    }
    if (String((s as any).locArgs?.[3] ?? '') % ((s as any).sd_re ?? 0)?.['cols'] === (((s as any).sd_re ?? 0)?.['cols'] - 1)) {
      (s as any).result = ((s as any).result ?? '') + '</tr>';
    }
  }
  (s as any).sd_re = undefined;
  return;
  scene.build();
}

function enterHelperToggle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_hide ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    (s as any).result = '<a href="#" onclick="window.__gameStore.setState((s) => { (s.stat_hide ??= {})\u0027 + $ARGS[1] + \u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_obnovit\u0027, \u0027\u0027); return false;">▲' + ((s as any).locArgs?.[2] ?? 0) + '</a>';
  } else {
    (s as any).result = '<a href="#" onclick="window.__gameStore.setState((s) => { (s.stat_hide ??= {})\u0027 + $ARGS[1] + \u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_obnovit\u0027, \u0027\u0027); return false;">▽' + ((s as any).locArgs?.[2] ?? 0) + '</a>';
  }
  return;
  scene.build();
}

function enterHelperRelName(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_hn = (s as any).sd_hn ?? {})['key'] = ((s as any).locArgs?.[1] ?? 0);
  if (String((s as any).locArgs?.[2] ?? '') !== '') {
    ((s as any).sd_hn = (s as any).sd_hn ?? {})['npcid'] = ((s as any).locArgs?.[2] ?? 0);
  } else {
    ((s as any).sd_hn = (s as any).sd_hn ?? {})['npcid'] = (((s as any).sd_hn ?? 0)?.['key']);
  }
  ((s as any).sd_hn = (s as any).sd_hn ?? {})['mode'] = (((s as any).stat_cfg ?? 0)?.['rel_name_mode']);
  if (((s as any).sd_hn ?? 0)?.['key'] !== ''  &&  ((s as any).sd_rel_name_override ?? 0)[((s as any).sd_hn ?? 0)?.['key']] > 0) {
    ((s as any).sd_hn = (s as any).sd_hn ?? {})['mode'] = (((s as any).sd_rel_name_override ?? 0)?.[(((s as any).sd_hn ?? 0)?.['key'])] ?? 0);
  }
  if (((s as any).sd_hn ?? 0)?.['mode'] === 1) {
    (s as any).result = (((s as any).npc_firstname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
  } else {
    if (((s as any).sd_hn ?? 0)?.['mode'] === 2) {
      (s as any).result = (((s as any).npc_lastname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
      if (((s as any).result ?? 0) === '') {
        (s as any).result = (((s as any).npc_firstname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
      }
    } else {
      if (((s as any).sd_hn ?? 0)?.['mode'] === 3) {
        (s as any).result = (((s as any).npc_nickname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
        if (((s as any).result ?? 0) === '') {
          (s as any).result = (((s as any).npc_firstname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
        }
      } else {
        (s as any).result = (((s as any).npc_usedname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
      }
    }
  }
  if (((s as any).result ?? 0) === '') {
    (s as any).result = (((s as any).npc_usedname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
  }
  if (((s as any).result ?? 0) === '') {
    (s as any).result = (((s as any).npc_firstname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
  }
  if (((s as any).result ?? 0) === '') {
    (s as any).result = (((s as any).npc_nickname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
  }
  if (((s as any).result ?? 0) === '') {
    (s as any).result = (((s as any).npc_lastname ?? 0)?.[(((s as any).sd_hn ?? 0)?.['npcid'])] ?? 0);
  }
  if (((s as any).result ?? 0) === '') {
    (s as any).result = (((s as any).sd_hn ?? 0)?.['key']);
  }
  (s as any).sd_hn = undefined;
  return;
  scene.build();
}

function enterHelperResolveAlign(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_ha = (s as any).sd_ha ?? {})['sec'] = (((s as any).stat_cfg ?? 0)?.['align_' + ((s as any).locArgs?.[1] ?? 0)] ?? 0);
  if (((s as any).sd_ha ?? 0)?.['sec'] === 0) {
    (s as any).result = (((s as any).stat_cfg ?? 0)?.['global_align']);
  } else {
    if (((s as any).sd_ha ?? 0)?.['sec'] === 2) {
      (s as any).result = 1;
    } else {
      if (((s as any).sd_ha ?? 0)?.['sec'] === 3) {
        (s as any).result = 2;
      } else {
        (s as any).result = 0;
      }
    }
  }
  (s as any).sd_ha = undefined;
  return;
  scene.build();
}

function enterHelperAlignWrap(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    (s as any).temp_align = qspFunc(s, 'stat_display', 'helper_resolve_align', ((s as any).locArgs?.[1] ?? 0));
  } else {
    (s as any).temp_align = ((s as any).locArgs?.[1] ?? 0);
  }
  if (((s as any).temp_align ?? 0) === 1  &&  String((s as any).locArgs?.[2] ?? '') !== '') {
    (s as any).result = '<center>' + ((s as any).locArgs?.[2] ?? 0) + '</center>';
  } else {
    if (((s as any).temp_align ?? 0) === 2  &&  String((s as any).locArgs?.[2] ?? '') !== '') {
      (s as any).result = '<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="right">' + ((s as any).locArgs?.[2] ?? 0) + '</td></tr></table>';
    } else {
      (s as any).result = ((s as any).locArgs?.[2] ?? 0);
    }
  }
  return;
  scene.build();
}

function enterHelperFontWrap(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sd_font_pct ?? 0) !== 100  &&  String((s as any).locArgs?.[1] ?? '') !== '') {
    (s as any).result = '<div style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">' + ((s as any).locArgs?.[1] ?? 0) + '</div>';
  } else {
    (s as any).result = ((s as any).locArgs?.[1] ?? 0);
  }
  return;
  scene.build();
}

function enterHelperSectionHeader(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_sh = (s as any).sd_sh ?? {})['align'] = qspFunc(s, 'stat_display', 'helper_resolve_align', ((s as any).locArgs?.[1] ?? 0));
  (s as any).temp_br = ((((s as any).sd_font_pct ?? 0) !== 100) ? ('') : ('<br>'));
  if (((s as any).stat_cfg ?? 0)?.['sec_headers'] === 0) {
    (s as any).result = ((s as any).locArgs?.[2] ?? 0);
  } else {
    if (((s as any).stat_cfg ?? 0)?.['sec_headers'] === 2) {
      ((s as any).sd_sh = (s as any).sd_sh ?? {})['lbl'] = qspFunc(s, 'stat_display', 'helper_toggle', ((s as any).locArgs?.[1] ?? 0), '&nbsp;' + (((s as any).sd_dn ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0));
      (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', (((s as any).sd_sh ?? 0)?.['lbl']));
      if (String((s as any).locArgs?.[2] ?? '') !== '') {
        (s as any).result = ((s as any).result ?? '') + ((s as any).temp_br ?? 0) + ((s as any).locArgs?.[2] ?? 0);
      }
      (s as any).sd_sh = undefined;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === '') {
        (s as any).result = '';
      } else {
        (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', '<b>' + qspUntranslated(s, "sd_dn[\u00000\u0000]", { location: "stat_display" }) + '</b>') + ((s as any).temp_br ?? 0) + ((s as any).locArgs?.[2] ?? 0);
      }
    }
  }
  (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', ((s as any).locArgs?.[1] ?? 0), ((s as any).result ?? 0));
  return;
  scene.build();
}

function enterGetSeparator(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cfg ?? 0)?.['separator_style'] === 1) {
    (s as any).result = '<br style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">';
  } else {
    if (((s as any).stat_cfg ?? 0)?.['separator_style'] === 2) {
      (s as any).result = '<hr style="margin:12px 10px;">';
    } else {
      if ((String((s as any).locArgs?.[1] ?? '') === 'bars'  ||  String((s as any).locArgs?.[1] ?? '') === 'table')  &&  (String((s as any).locArgs?.[2] ?? '') === 'bars'  ||  String((s as any).locArgs?.[2] ?? '') === 'table')) {
        (s as any).result = '<br style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">';
      } else {
        if ((String((s as any).locArgs?.[1] ?? '') === 'bars'  ||  String((s as any).locArgs?.[1] ?? '') === 'table')  ||  (String((s as any).locArgs?.[2] ?? '') === 'bars'  ||  String((s as any).locArgs?.[2] ?? '') === 'table')) {
          (s as any).result = '<hr style="margin:' + ((s as any).sep_margin_px ?? 0) + 'px 10px;">';
        } else {
          (s as any).result = '<div style="margin:' + ((s as any).sep_margin_px ?? 0) + 'px 0;"></div>';
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSecWeather(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_w = (s as any).sd_w ?? {})['temp'] = qspFunc(s, 'outdoors', 'get_temp_string', (((s as any).temper ?? 0)?.[0] ?? 0), (((s as any).temper ?? 0)?.[1] ?? 0), (((s as any).stat_cfg ?? 0)?.['temp_scale']));
  if (((s as any).stat_cfg ?? 0)?.['weather_visual'] === 1) {
    if (((s as any).temper ?? 0)[0] < 0) {
      ((s as any).sd_w = (s as any).sd_w ?? {})['theme'] = 'accent';
    } else {
      if (((s as any).temper ?? 0)[0] < 10) {
        ((s as any).sd_w = (s as any).sd_w ?? {})['theme'] = 'v_pos';
      } else {
        if (((s as any).temper ?? 0)[0] < 20) {
          ((s as any).sd_w = (s as any).sd_w ?? {})['theme'] = 'pos';
        } else {
          if (((s as any).temper ?? 0)[0] < 30) {
            ((s as any).sd_w = (s as any).sd_w ?? {})['theme'] = 'neg';
          } else {
            ((s as any).sd_w = (s as any).sd_w ?? {})['theme'] = 'v_neg';
          }
        }
      }
    }
    ((s as any).sd_w = (s as any).sd_w ?? {})['safe_weather'] = (String(((s as any).weather ?? 0)).split('"').join('&quot;'));
    ((s as any).sd_w = (s as any).sd_w ?? {})['visual'] = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(String((s as any).sd_w?.\u0027safe_weather\u0027 ?? \u0027\u0027)); return s; }); return false;">\' + $func(\'wrap\', $sd_w[\'theme\'], $mid($osadki, 1, len($osadki) - 1)) + \'</a>';
  } else {
    ((s as any).sd_w = (s as any).sd_w ?? {})['safe_weather'] = (String(((s as any).weather ?? 0)).split('"').join('&quot;'));
    ((s as any).sd_w = (s as any).sd_w ?? {})['visual'] = '<a href="#" onclick="window.__gameStore.setState((s) => { alert(String((s as any).sd_w?.\u0027safe_weather\u0027 ?? \u0027\u0027)); return s; }); return false;">' + ((s as any).weatherImage ?? 0) + '</a>';
  }
  ((s as any).sd_w = (s as any).sd_w ?? {})['center'] = qspFunc(s, 'stat_display', 'helper_resolve_align', 'weather');
  ((s as any).sd_w = (s as any).sd_w ?? {})['align_attr'] = ((((s as any).sd_w ?? 0)?.['center'] === 1) ? (' align="center"') : (((((s as any).sd_w ?? 0)?.['center'] === 2) ? (' align="right"') : (''))));
  if (((s as any).stat_cfg ?? 0)?.['temp_pos'] === 1) {
    (s as any).result = (((s as any).sd_w ?? 0)?.['visual']) + '<br>' + (((s as any).sd_w ?? 0)?.['temp']);
  } else {
    if (((s as any).stat_cfg ?? 0)?.['temp_pos'] === 2) {
      (s as any).result = (((s as any).sd_w ?? 0)?.['temp']) + '<br>' + (((s as any).sd_w ?? 0)?.['visual']);
    } else {
      if (((s as any).stat_cfg ?? 0)?.['temp_pos'] === 3) {
        (s as any).result = '<table' + (((s as any).sd_w ?? 0)?.['align_attr']) + '><tr><td style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">' + (((s as any).sd_w ?? 0)?.['temp']) + '</td><td style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">' + (((s as any).sd_w ?? 0)?.['visual']) + '</td></tr></table>';
      } else {
        (s as any).result = '<table' + (((s as any).sd_w ?? 0)?.['align_attr']) + '><tr><td style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">' + (((s as any).sd_w ?? 0)?.['visual']) + '</td><td style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">' + (((s as any).sd_w ?? 0)?.['temp']) + '</td></tr></table>';
      }
    }
  }
  (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).result ?? 0));
  if (((s as any).stat_cfg ?? 0)?.['temp_pos'] === 1  ||  ((s as any).stat_cfg ?? 0)?.['temp_pos'] === 2) {
    (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'weather', ((s as any).result ?? 0));
  }
  (s as any).sd_w = undefined;
  return;
  scene.build();
}

function enterSecTime(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  if (((s as any).stat_cfg ?? 0)?.['time_hidden'] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<b>' + qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0), (((s as any).stat_cfg ?? 0)?.['time_format'])) + '</b>');
    (s as any).result = ((s as any).result ?? 0) + ('&nbsp;&nbsp;');
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'time', 'get_date_string', ((s as any).year ?? 0), ((s as any).month ?? 0), ((s as any).day ?? 0), (((s as any).stat_cfg ?? 0)?.['date_format'])));
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] !== 1  &&  ((s as any).holyday ?? 0) !== '') {
    if (((s as any).result ?? 0) !== '') {
      (s as any).result = ((s as any).result ?? '') + '<br>';
    }
    (s as any).result = ((s as any).result ?? 0) + (((s as any).holyday ?? 0));
  }
  if (((s as any).birthday ?? 0) === ((s as any).day ?? 0)  &&  ((s as any).birthmonth ?? 0) === ((s as any).month ?? 0)) {
    if (((s as any).result ?? 0) !== '') {
      (s as any).result = ((s as any).result ?? '') + '<br>';
    }
    (s as any).result = ((s as any).result ?? 0) + ('<b>Today is your birthday.</b>');
  }
  if (((s as any).telefon ?? 0)?.['UnreadSMS'] > 0) {
    if (((s as any).result ?? 0) !== '') {
      (s as any).result = ((s as any).result ?? '') + '<br>';
    }
    (s as any).result = ((s as any).result ?? 0) + ('<b>You have ' + (((s as any).telefon ?? 0)?.['UnreadSMS']) + ' unread message(s).</b>');
  }
  (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).result ?? 0));
  (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'time', ((s as any).result ?? 0));
  return;
  scene.build();
}

function enterSecMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  (s as any).result = ((s as any).result ?? 0) + (((((s as any).bag ?? 0) > 0) ? ('Purse') : ('Pockets')) + ': <b>' + qspFunc(s, 'money', 'format_balance', 'cash') + '</b>');
  if (((s as any).stolmoney ?? 0) > 0) {
    (s as any).result = ((s as any).result ?? 0) + (', Drawer: <b>' + qspFunc(s, 'money', 'format_balance', 'desk') + '</b>');
  }
  if (((s as any).bankAccount ?? 0) === 1) {
    (s as any).result = ((s as any).result ?? 0) + (', Bank: ' + qspFunc(s, 'wrap', ((((s as any).karta ?? 0) >= ((s as any).bankDebtLimit ?? 0)) ? ('none b') : ('v_neg b')), qspFunc(s, 'money', 'format_balance', 'bank')));
  }
  (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).result ?? 0));
  (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'money', ((s as any).result ?? 0));
  return;
  scene.build();
}

function enterSecLoadsave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cfg ?? 0)?.['loadsave_mode'] === 1) {
    (s as any).result = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: savegame \u0027quicksave.sav\u0027 */ s.scene = { ...s.scene, mainText: \u0027Quicksave Done\u0027, curActs: [] }; return s; }); return false;">Quick Save</a>';
    (s as any).result = ((s as any).result ?? 0) + ('  <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: savegame */ return s; }); return false;">Save</a>');
    (s as any).result = ((s as any).result ?? 0) + ('  <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: opengame */ return s; }); return false;">Load</a>');
    (s as any).result = ((s as any).result ?? 0) + ('  <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: if input(\u0027Input Anything to confirm Quick Load\u0027) /u003c> \u0027\u0027: opengame \u0027quicksave.sav\u0027 */ return s; }); return false;">Quick Load</a>');
  } else {
    (s as any).result = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: savegame \u0027quicksave.sav\u0027 */ s.scene = { ...s.scene, mainText: \u0027Quicksave Done\u0027, curActs: [] }; return s; }); return false;"><img src="images/system/icons/stat_qsave.png" height="' + (((s as any).stat_cfg ?? 0)?.['menu_icon_height']) + '"></a>';
    (s as any).result = ((s as any).result ?? 0) + ('  <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: savegame */ return s; }); return false;"><img src="images/system/icons/stat_save.png" height="' + (((s as any).stat_cfg ?? 0)?.['menu_icon_height']) + '"></a>');
    (s as any).result = ((s as any).result ?? 0) + ('  <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: opengame */ return s; }); return false;"><img src="images/system/icons/stat_load.png" height="' + (((s as any).stat_cfg ?? 0)?.['menu_icon_height']) + '"></a>');
    (s as any).result = ((s as any).result ?? 0) + ('  <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: if input(\u0027Input Anything to confirm Quick Load\u0027) /u003c> \u0027\u0027: opengame \u0027quicksave.sav\u0027 */ return s; }); return false;"><img src="images/system/icons/stat_qload.png" height="' + (((s as any).stat_cfg ?? 0)?.['menu_icon_height']) + '"></a>');
  }
  (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).result ?? 0));
  (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'loadsave', ((s as any).result ?? 0));
  return;
  scene.build();
}

function enterSecMenuBar(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['character_ico'] = 'icon_character.png';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['character_url'] = 'gt \'$menu_character\'';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['character_tip'] = 'Character description';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['character_dis'] = '1';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['looks_ico'] = 'icon_lookself.png';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['looks_url'] = 'gt \'$menu_looks\'';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['looks_tip'] = 'Looks (Face, body, clothing, ...)';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['looks_dis'] = '1';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['purse_ico'] = 'icon_purse.png';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['purse_url'] = 'gs \'din_bad\', \'d_bag\'';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['purse_tip'] = 'Your purse';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['purse_dis'] = '1';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['purse_skp'] = ((((s as any).bag ?? 0) > 0) ? ('0') : ('1'));
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['phone_ico'] = ((((s as any).telefon ?? 0)?.['UnreadSMS'] > 0) ? ('icon_phone_sms.gif') : ('icon_phone.png'));
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['phone_url'] = 'gs \'telefon\', \'Phone_menu\'';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['phone_tip'] = 'Your phone';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['phone_dis'] = '0';
  if (((s as any).stat_cfg ?? 0)?.['magic_separate'] === 1) {
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_ico'] = 'journal_norm.png';
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_url'] = 'gt \'journal\', \'calendar\'';
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_tip'] = 'Journal';
  } else {
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_ico'] = 'journal_magic.png';
      ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_url'] = 'jclose = 1 & $jumploc = \' & gs \'obj_din\', \'records\'';
      ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_tip'] = 'Spellbook & Journal';
    } else {
      ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_ico'] = 'journal_norm.png';
      ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_url'] = 'jclose = 1 & $jumploc = \' & gs \'obj_din\', \'records\'';
      ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_tip'] = 'Journal';
    }
  }
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['journal_dis'] = '1';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['magic_ico'] = 'journal_magic.png';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['magic_url'] = 'jclose = 1 & $jumploc = \' & gs \'journal\', \'magictab\'';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['magic_tip'] = 'Spellbook';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['magic_dis'] = '1';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['magic_skp'] = ((((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).stat_cfg ?? 0)?.['magic_separate'] === 1) ? ('0') : ('1'));
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['clock_ico'] = 'clock.png';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['clock_url'] = 'gs \'obj_din\', \'wait\'';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['clock_tip'] = 'Pass time';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['clock_dis'] = '1';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['settings_ico'] = 'icon_menu.png';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['settings_url'] = 'gt \'$menu_settings\'';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['settings_tip'] = 'Menu & Cheatmenu';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['settings_dis'] = '1';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['help_skp'] = '1';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['help_url'] = 'gs \'help\', \'open\'';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['help_dis'] = '0';
  if (qspFunc(s, 'help', 'probe') !== 'generic') {
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['help_ico'] = 'icon_help_color.png';
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['help_tip'] = 'Help: Specific to this scene or location';
  } else {
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['help_ico'] = 'icon_help_white.png';
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['help_tip'] = 'Help &amp; Glossary';
  }
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['cells'] = '';
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['i'] = 0;
  ((s as any).sd_mb = (s as any).sd_mb ?? {})['max'] = 0;
  do {
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['key'] = qspUntranslated(s, "menu_bar_order[sd_mb['i']]", { location: "stat_display" });
    if (parseFloat((((s as any).sd_mb ?? 0)?.[((s as any).sd_mb ?? 0)?.['key'] + '_skp'] ?? 0)) === 0) {
      if (((s as any).menu_off ?? 0)  &&  parseFloat((((s as any).sd_mb ?? 0)?.[((s as any).sd_mb ?? 0)?.['key'] + '_dis'] ?? 0))) {
        ((s as any).sd_mb = (s as any).sd_mb ?? {})['act'] = 'gs \'obj_din\', \'menu_disabled\'';
      } else {
        ((s as any).sd_mb = (s as any).sd_mb ?? {})['act'] = (((s as any).sd_mb ?? 0)?.[(((s as any).sd_mb ?? 0)?.['key']) + '_url'] ?? 0);
      }
      ((s as any).sd_mb = (s as any).sd_mb ?? {})['cell'] = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: \u0027 + $sd_mb[\u0027act\u0027] + \u0027 */ return s; }); return false;"><img title="' + (((s as any).sd_mb ?? 0)?.[(((s as any).sd_mb ?? 0)?.['key']) + '_tip'] ?? 0) + '" ' + (((s as any).sd ?? 0)?.['micon']) + (((s as any).sd_mb ?? 0)?.[(((s as any).sd_mb ?? 0)?.['key']) + '_ico'] ?? 0) + '"></a>';
      ((s as any).sd_mb = (s as any).sd_mb ?? {})['cells'] = ((s as any).sd_mb['cells'] ?? 0) + ('<span style="display:inline-block; vertical-align:middle;">' + (((s as any).sd_mb ?? 0)?.['cell']) + '</span>');
    }
    ((s as any).sd_mb = (s as any).sd_mb ?? {})['i'] = ((s as any).sd_mb['i'] ?? 0) + (1);
    if (((s as any).sd_mb ?? 0)?.['cells'] !== '') {
      (s as any).result = '<div>' + (((s as any).sd_mb ?? 0)?.['cells']) + '</div>';
      (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'menu_bar', ((s as any).result ?? 0));
    } else {
      (s as any).result = '';
    }
    (s as any).sd_mb = undefined;
    return;
  } while (((s as any).sd_mb ?? 0)?.['i'] < ((s as any).sd_mb ?? 0)?.['max']);
  scene.build();
}

function enterSecStatus(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  ((s as any).sd = (s as any).sd ?? {})['render_mode'] = (((s as any).stat_cfg ?? 0)?.['render_mode_status']);
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
    (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).sd_status_prose ?? 0));
    (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'status', ((s as any).result ?? 0));
    (s as any).sd_s = undefined;
    return;
  }
  ((s as any).sd = (s as any).sd ?? {})['name_side'] = (((s as any).stat_cfg ?? 0)?.['name_side_status']);
  ((s as any).sd_s = (s as any).sd_s ?? {})['i'] = 0;
  ((s as any).sd_s = (s as any).sd_s ?? {})['max'] = 0;
  do {
    ((s as any).sd_s = (s as any).sd_s ?? {})['key'] = qspUntranslated(s, "status_bar_order[sd_s['i']]", { location: "stat_display" });
    ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = '';
    if (((s as any).stat_hide_bar ?? 0)[((s as any).sd_s ?? 0)?.['key']] === 0) {
      if (((s as any).sd_s ?? 0)?.['key'] === 'arousal') {
        ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'mono:bimbo', 'Arousal', ((s as any).pcs_horny ?? 0));
      } else {
        if (((s as any).sd_s ?? 0)?.['key'] === 'pain') {
          ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'mono:v_neg', 'Pain', (((s as any).pain ?? 0)?.['total']), 0, (((s as any).pain ?? 0)?.['damage']));
        } else {
          if (((s as any).sd_s ?? 0)?.['key'] === 'health') {
            ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Health', ((s as any).pcs_health ?? 0), ((s as any).healthmax ?? 0));
          } else {
            if (((s as any).sd_s ?? 0)?.['key'] === 'mana') {
              if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
                ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Mana', ((s as any).pcs_mana ?? 0), ((s as any).manamax ?? 0));
              }
            } else {
              if (((s as any).sd_s ?? 0)?.['key'] === 'willpower') {
                ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Willpower', ((s as any).pcs_willpwr ?? 0), ((s as any).willpowermax ?? 0));
              } else {
                if (((s as any).sd_s ?? 0)?.['key'] === 'stamina') {
                  ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Stamina', ((s as any).pcs_stam ?? 0), ((s as any).stammax ?? 0));
                } else {
                  if (((s as any).sd_s ?? 0)?.['key'] === 'mood') {
                    if (((s as any).stat_cfg ?? 0)?.['overlay'] === 0  &&  ((s as any).sd ?? 0)?.['render_mode'] === 0) {
                      ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Mood', ((s as any).pcs_mood ?? 0), 0, 0, (((s as any).moodVars ?? 0)?.['disp']), 'accent');
                    } else {
                      ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Mood', ((s as any).pcs_mood ?? 0));
                      if (((s as any).stat_hide_bar ?? 0)?.['disposition'] === 0) {
                        if (((s as any).sd_s ?? 0)?.['bar'] !== '') {
                          ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = ((s as any).sd_s['bar'] ?? 0) + (((((s as any).sd ?? 0)?.['render_mode'] === 2) ? (((((s as any).stat_cfg ?? 0)?.['newline_status'] === 1) ? (' ') : ('<br>'))) : ('')));
                        }
                        ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = ((s as any).sd_s['bar'] ?? 0) + (qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Disposition', (((s as any).moodVars ?? 0)?.['disp'])));
                      }
                    }
                  } else {
                    if (((s as any).sd_s ?? 0)?.['key'] === 'energy') {
                      if (((s as any).cheatVars ?? 0)?.['hunger'] === 0) {
                        ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Hunger', ((s as any).pcs_energy ?? 0));
                      }
                      if (((s as any).stat_hide_bar ?? 0)?.['weight'] === 0) {
                        if (((s as any).sd_s ?? 0)?.['bar'] !== '') {
                          ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = ((s as any).sd_s['bar'] ?? 0) + (((((s as any).sd ?? 0)?.['render_mode'] === 2) ? (((((s as any).stat_cfg ?? 0)?.['newline_status'] === 1) ? (' ') : ('<br>'))) : ('')));
                        }
                        if (((s as any).pregChem ?? 0) >= 800) {
                          ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['upper_raw'] = 15 + ((s as any).vitalbuf ?? 0) / 20;
                          ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['lower_raw'] = -(10 + ((s as any).vitalbuf ?? 0) / 10);
                        } else {
                          ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['upper_raw'] = 20 + ((s as any).vitalbuf ?? 0) / 10;
                          ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['lower_raw'] = -(5 + ((s as any).vitalbuf ?? 0) / 10);
                        }
                        ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['func'] = 'result = (ARGS[0] + 10 + vitalbuf / 10) * 100 / (35 + vitalbuf / 5)';
                        ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['raw'] = 0;
                        ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['lower'] = 0;
                        ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['zero'] = 0;
                        ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['z_upper'] = 0;
                        ((s as any).temp_weight_value = (s as any).temp_weight_value ?? {})['upper'] = 0;
                        ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = ((s as any).sd_s['bar'] ?? 0) + (qspFunc(s, 'stat_display', 'helper_bar', 'centrum_positive', 'Weight gain', (((s as any).temp_weight_value ?? 0)?.['raw']), 0, 0, 0, '', '' + (((s as any).temp_weight_value ?? 0)?.['lower']) + ',' + (((s as any).temp_weight_value ?? 0)?.['zero']) + ',' + (((s as any).temp_weight_value ?? 0)?.['z_upper']) + ',' + (((s as any).temp_weight_value ?? 0)?.['upper']) + ''));
                        (s as any).temp_weight_value = undefined;
                      }
                    } else {
                      if (((s as any).sd_s ?? 0)?.['key'] === 'thirst') {
                        if (((s as any).cheatVars ?? 0)?.['thirst'] === 0) {
                          ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Thirst', ((s as any).pcs_hydra ?? 0));
                        }
                      } else {
                        if (((s as any).sd_s ?? 0)?.['key'] === 'sleep') {
                          if (((s as any).cheatVars ?? 0)?.['sleep'] === 0) {
                            if (((s as any).drugVars ?? 0)?.['caffeine_dose'] > 0  &&  ((s as any).drugVars ?? 0)?.['sleep_actual'] < 100) {
                              ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Sleep', ((s as any).pcs_sleep ?? 0), 0, (((s as any).drugVars ?? 0)?.['sleep_actual']));
                            } else {
                              ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Sleep', ((s as any).pcs_sleep ?? 0));
                            }
                          }
                        } else {
                          if (((s as any).sd_s ?? 0)?.['key'] === 'faith') {
                            if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
                              ((s as any).sd_s = (s as any).sd_s ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Faith', ((s as any).pcs_faith ?? 0));
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).sd_s ?? 0)?.['bar'] !== '') {
      if (((s as any).result ?? 0) !== ''  &&  ((s as any).sd ?? 0)?.['render_mode'] === 2) {
        (s as any).result = ((s as any).result ?? '') + ((((s as any).stat_cfg ?? 0)?.['newline_status'] === 1) ? (' ') : ('<br>'));
      }
      (s as any).result = ((s as any).result ?? 0) + ((((s as any).sd_s ?? 0)?.['bar']));
    }
    ((s as any).sd_s = (s as any).sd_s ?? {})['i'] = ((s as any).sd_s['i'] ?? 0) + (1);
    if (((s as any).sd ?? 0)?.['render_mode'] !== 2  &&  ((s as any).result ?? 0) !== '') {
      (s as any).result = '<table cellpadding="1" cellspacing="0">' + ((s as any).result ?? 0) + '</table>';
    } else {
      (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).result ?? 0));
    }
    (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'status', ((s as any).result ?? 0));
    (s as any).sd_s = undefined;
    return;
  } while (((s as any).sd_s ?? 0)?.['i'] < ((s as any).sd_s ?? 0)?.['max']);
  scene.build();
}

function enterSecAttributes(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  ((s as any).sd = (s as any).sd ?? {})['render_mode'] = (((s as any).stat_cfg ?? 0)?.['render_mode_attrs']);
  if (((s as any).stat_cfg ?? 0)?.['render_mode_attrs'] === 3) {
    qspCall(s, 'stat_display_compute', 'compute_attributes_prose');
    (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).sd_attrs_prose ?? 0));
    (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'attributes', ((s as any).result ?? 0));
    (s as any).sd_a = undefined;
    return;
  }
  if (((s as any).stat_cfg ?? 0)?.['show_attr_xp'] === 1  &&  ((s as any).sd ?? 0)?.['render_mode'] === 0) {
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['inhib'] = 0;
    if (((s as any).inhib_xpnxt ?? 0) > ((s as any).inhib_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['inhib'] = (((s as any).inhib_exp ?? 0) - ((s as any).inhib_xpprv ?? 0)) * 100 / (((s as any).inhib_xpnxt ?? 0) - ((s as any).inhib_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['stren'] = 0;
    if (((s as any).stren_xpnxt ?? 0) > ((s as any).stren_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['stren'] = (((s as any).stren_exp ?? 0) - ((s as any).stren_xpprv ?? 0)) * 100 / (((s as any).stren_xpnxt ?? 0) - ((s as any).stren_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['agil'] = 0;
    if (((s as any).agil_xpnxt ?? 0) > ((s as any).agil_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['agil'] = (((s as any).agil_exp ?? 0) - ((s as any).agil_xpprv ?? 0)) * 100 / (((s as any).agil_xpnxt ?? 0) - ((s as any).agil_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['vital'] = 0;
    if (((s as any).vital_xpnxt ?? 0) > ((s as any).vital_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['vital'] = (((s as any).vital_exp ?? 0) - ((s as any).vital_xpprv ?? 0)) * 100 / (((s as any).vital_xpnxt ?? 0) - ((s as any).vital_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['intel'] = 0;
    if (((s as any).intel_xpnxt ?? 0) > ((s as any).intel_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['intel'] = (((s as any).intel_exp ?? 0) - ((s as any).intel_xpprv ?? 0)) * 100 / (((s as any).intel_xpnxt ?? 0) - ((s as any).intel_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['sprt'] = 0;
    if (((s as any).sprt_xpnxt ?? 0) > ((s as any).sprt_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['sprt'] = (((s as any).sprt_exp ?? 0) - ((s as any).sprt_xpprv ?? 0)) * 100 / (((s as any).sprt_xpnxt ?? 0) - ((s as any).sprt_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['react'] = 0;
    if (((s as any).react_xpnxt ?? 0) > ((s as any).react_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['react'] = (((s as any).react_exp ?? 0) - ((s as any).react_xpprv ?? 0)) * 100 / (((s as any).react_xpnxt ?? 0) - ((s as any).react_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['chrsm'] = 0;
    if (((s as any).chrsm_xpnxt ?? 0) > ((s as any).chrsm_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['chrsm'] = (((s as any).chrsm_exp ?? 0) - ((s as any).chrsm_xpprv ?? 0)) * 100 / (((s as any).chrsm_xpnxt ?? 0) - ((s as any).chrsm_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['prcptn'] = 0;
    if (((s as any).prcptn_xpnxt ?? 0) > ((s as any).prcptn_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['prcptn'] = (((s as any).prcptn_exp ?? 0) - ((s as any).prcptn_xpprv ?? 0)) * 100 / (((s as any).prcptn_xpnxt ?? 0) - ((s as any).prcptn_xpprv ?? 0));
    }
    ((s as any).attr_xp = (s as any).attr_xp ?? {})['magik'] = 0;
    if (((s as any).magik_xpnxt ?? 0) > ((s as any).magik_xpprv ?? 0)) {
      ((s as any).attr_xp = (s as any).attr_xp ?? {})['magik'] = (((s as any).magik_exp ?? 0) - ((s as any).magik_xpprv ?? 0)) * 100 / (((s as any).magik_xpnxt ?? 0) - ((s as any).magik_xpprv ?? 0));
    }
  }
  ((s as any).sd = (s as any).sd ?? {})['name_side'] = (((s as any).stat_cfg ?? 0)?.['name_side_attrs']);
  ((s as any).sd_a = (s as any).sd_a ?? {})['bars'] = '';
  ((s as any).sd_a = (s as any).sd_a ?? {})['i'] = 0;
  ((s as any).sd_a = (s as any).sd_a ?? {})['max'] = 0;
  do {
    ((s as any).sd_a = (s as any).sd_a ?? {})['key'] = qspUntranslated(s, "attr_bar_order[sd_a['i']]", { location: "stat_display" });
    ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = '';
    if (((s as any).stat_hide_bar ?? 0)[((s as any).sd_a ?? 0)?.['key']] === 0) {
      ((s as any).sd_a = (s as any).sd_a ?? {})['xp'] = 0;
      if (((s as any).stat_cfg ?? 0)?.['show_attr_xp'] === 1  &&  ((s as any).sd ?? 0)?.['render_mode'] === 0) {
        ((s as any).sd_a = (s as any).sd_a ?? {})['xp'] = (((s as any).attr_xp ?? 0)?.[(((s as any).sd_a ?? 0)?.['key'])] ?? 0);
      }
      if (((s as any).sd_a ?? 0)?.['key'] === 'inhib') {
        ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Inhibition', 100 - ((s as any).pcs_inhib ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
      } else {
        if (((s as any).sd_a ?? 0)?.['key'] === 'stren') {
          ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Strength', ((s as any).pcs_stren ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
        } else {
          if (((s as any).sd_a ?? 0)?.['key'] === 'agil') {
            ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Agility', ((s as any).pcs_agil ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
          } else {
            if (((s as any).sd_a ?? 0)?.['key'] === 'vital') {
              ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Endurance', ((s as any).pcs_vital ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
            } else {
              if (((s as any).sd_a ?? 0)?.['key'] === 'intel') {
                ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Intelligence', ((s as any).pcs_intel ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
              } else {
                if (((s as any).sd_a ?? 0)?.['key'] === 'sprt') {
                  ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Spirit', ((s as any).pcs_sprt ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
                } else {
                  if (((s as any).sd_a ?? 0)?.['key'] === 'react') {
                    ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Reaction', ((s as any).pcs_react ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
                  } else {
                    if (((s as any).sd_a ?? 0)?.['key'] === 'chrsm') {
                      ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Charisma', ((s as any).pcs_chrsm ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
                    } else {
                      if (((s as any).sd_a ?? 0)?.['key'] === 'prcptn') {
                        ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Perception', ((s as any).pcs_prcptn ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
                      } else {
                        if (((s as any).sd_a ?? 0)?.['key'] === 'apprnc') {
                          ((s as any).sd_a = (s as any).sd_a ?? {})['ov'] = 0;
                          if (((s as any).stat_cfg ?? 0)?.['show_apprnc_base'] === 1  &&  ((s as any).sd ?? 0)?.['render_mode'] === 0) {
                            ((s as any).sd_a = (s as any).sd_a ?? {})['ov'] = ((s as any).pcs_apprncbase ?? 0) * 100 / 200;
                            if (((s as any).sd_a ?? 0)?.['ov'] > 100) {
                              ((s as any).sd_a = (s as any).sd_a ?? {})['ov'] = 100;
                            }
                            if (((s as any).sd_a ?? 0)?.['ov'] < 0) {
                              ((s as any).sd_a = (s as any).sd_a ?? {})['ov'] = 0;
                            }
                          }
                          ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Attractiveness', ((s as any).pcs_apprnc ?? 0), 200, 0, (((s as any).sd_a ?? 0)?.['ov']), 'mono:punk');
                        } else {
                          if (((s as any).sd_a ?? 0)?.['key'] === 'magik') {
                            if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
                              ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Magic', ((s as any).pcs_magik ?? 0), 0, 0, (((s as any).sd_a ?? 0)?.['xp']), 'accent');
                            }
                          } else {
                            if (((s as any).sd_a ?? 0)?.['key'] === 'sucexcess') {
                              if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).succubusflag ?? 0) === 1) {
                                ((s as any).sd_a = (s as any).sd_a ?? {})['bar'] = qspFunc(s, 'stat_display', 'helper_bar', 'smooth_positive', 'Succubus Energy', ((s as any).sucexcess ?? 0));
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).sd_a ?? 0)?.['bar'] !== '') {
      if (((s as any).sd_a ?? 0)?.['bars'] !== ''  &&  ((s as any).sd ?? 0)?.['render_mode'] === 2) {
        ((s as any).sd_a = (s as any).sd_a ?? {})['bars'] = ((s as any).sd_a['bars'] ?? 0) + (((((s as any).stat_cfg ?? 0)?.['newline_attributes'] === 1) ? (' ') : ('<br>')));
      }
      ((s as any).sd_a = (s as any).sd_a ?? {})['bars'] = ((s as any).sd_a['bars'] ?? 0) + ((((s as any).sd_a ?? 0)?.['bar']));
    }
    ((s as any).sd_a = (s as any).sd_a ?? {})['i'] = ((s as any).sd_a['i'] ?? 0) + (1);
    if (((s as any).sd ?? 0)?.['render_mode'] !== 2  &&  ((s as any).sd_a ?? 0)?.['bars'] !== '') {
      (s as any).result = ((s as any).result ?? 0) + ('<table cellpadding="1" cellspacing="0">' + (((s as any).sd_a ?? 0)?.['bars']) + '</table>');
    } else {
      (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'stat_display', 'helper_font_wrap', (((s as any).sd_a ?? 0)?.['bars'])));
    }
    (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'attributes', ((s as any).result ?? 0));
    (s as any).sd_a = undefined;
    return;
  } while (((s as any).sd_a ?? 0)?.['i'] < ((s as any).sd_a ?? 0)?.['max']);
  scene.build();
}

function enterSecIcons(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  ((s as any).sd_ic = (s as any).sd_ic ?? {})['align'] = qspFunc(s, 'stat_display', 'helper_resolve_align', 'icons');
  ((s as any).sd_ic = (s as any).sd_ic ?? {})['align_attr'] = ((((s as any).sd_ic ?? 0)?.['align'] === 1) ? (' align="center"') : (((((s as any).sd_ic ?? 0)?.['align'] === 2) ? (' align="right"') : (''))));
  ((s as any).sd_ic = (s as any).sd_ic ?? {})['rows'] = '';
  ((s as any).sd_ic = (s as any).sd_ic ?? {})['row'] = 1;
  do {
    ((s as any).sd_ic = (s as any).sd_ic ?? {})['arr'] = '$sd_icons_' + String((((s as any).sd_ic ?? 0)?.['row']));
    ((s as any).sd_ic = (s as any).sd_ic ?? {})['max'] = 0;
    if (((s as any).sd_ic ?? 0)?.['max'] > 0) {
      ((s as any).sd_ic = (s as any).sd_ic ?? {})['line'] = '';
      ((s as any).sd_ic = (s as any).sd_ic ?? {})['j'] = 0;
      do {
        if (((s as any).sd_ic ?? 0)?.['row'] === 1) {
          ((s as any).sd_ic = (s as any).sd_ic ?? {})['line'] = ((s as any).sd_ic['line'] ?? 0) + ('<td>' + qspUntranslated(s, "sd_icons_1[sd_ic['j']]", { location: "stat_display" }) + '</td>');
        } else {
          if (((s as any).sd_ic ?? 0)?.['row'] === 2) {
            ((s as any).sd_ic = (s as any).sd_ic ?? {})['line'] = ((s as any).sd_ic['line'] ?? 0) + ('<td>' + qspUntranslated(s, "sd_icons_2[sd_ic['j']]", { location: "stat_display" }) + '</td>');
          } else {
            if (((s as any).sd_ic ?? 0)?.['row'] === 3) {
              ((s as any).sd_ic = (s as any).sd_ic ?? {})['line'] = ((s as any).sd_ic['line'] ?? 0) + ('<td>' + qspUntranslated(s, "sd_icons_3[sd_ic['j']]", { location: "stat_display" }) + '</td>');
            } else {
              ((s as any).sd_ic = (s as any).sd_ic ?? {})['line'] = ((s as any).sd_ic['line'] ?? 0) + ('<td>' + qspUntranslated(s, "sd_icons_4[sd_ic['j']]", { location: "stat_display" }) + '</td>');
            }
          }
        }
        ((s as any).sd_ic = (s as any).sd_ic ?? {})['j'] = ((s as any).sd_ic['j'] ?? 0) + (1);
        if (((s as any).sd_ic ?? 0)?.['line'] !== '') {
          ((s as any).sd_ic = (s as any).sd_ic ?? {})['rows'] = ((s as any).sd_ic['rows'] ?? 0) + ('<tr>' + (((s as any).sd_ic ?? 0)?.['line']) + '</tr>');
        }
      } while (((s as any).sd_ic ?? 0)?.['j'] < ((s as any).sd_ic ?? 0)?.['max']);
    }
    ((s as any).sd_ic = (s as any).sd_ic ?? {})['row'] = ((s as any).sd_ic['row'] ?? 0) + (1);
    if (((s as any).sd_ic ?? 0)?.['rows'] !== '') {
      if (((s as any).sd_ic ?? 0)?.['align'] === 1) {
        ((s as any).sd_ic = (s as any).sd_ic ?? {})['td_attr'] = ' align="center"';
      } else {
        if (((s as any).sd_ic ?? 0)?.['align'] === 2) {
          ((s as any).sd_ic = (s as any).sd_ic ?? {})['td_attr'] = ' align="right"';
        } else {
          ((s as any).sd_ic = (s as any).sd_ic ?? {})['td_attr'] = '';
        }
      }
      (s as any).result = '<table width="100%" cellpadding="0" cellspacing="0"><tr><td' + (((s as any).sd_ic ?? 0)?.['td_attr']) + '><table cellpadding="0" cellspacing="0">' + (((s as any).sd_ic ?? 0)?.['rows']) + '</table></td></tr></table>';
    }
    (s as any).sd_ic = undefined;
    return;
  } while (((s as any).sd_ic ?? 0)?.['row'] <= 4);
  scene.build();
}

function enterSecAlerts(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  ((s as any).sd_mt = (s as any).sd_mt ?? {})['max'] = 0;
  if (((s as any).sd_mt ?? 0)?.['max'] > 0) {
    ((s as any).sd_mt = (s as any).sd_mt ?? {})['i'] = 0;
    do {
      if (((s as any).sd_alerts ?? 0)[((s as any).sd_mt ?? 0)?.['i']] !== '') {
        if (((s as any).sd ?? 0)?.['sep_alert'] === '<br>') {
          (s as any).result = ((s as any).result ?? 0) + ('<div style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;"><b>' + qspUntranslated(s, "sd_alerts[sd_mt['i']]", { location: "stat_display" }) + '</b></div>');
        } else {
          (s as any).result = ((s as any).result ?? 0) + (((((s as any).result ?? 0) !== '') ? ((((s as any).sd ?? 0)?.['sep_alert'])) : ('')) + ((s as any).sd_font_wrap_o ?? 0) + '<b>' + qspUntranslated(s, "sd_alerts[sd_mt['i']]", { location: "stat_display" }) + '</b>' + ((s as any).sd_font_wrap_c ?? 0));
        }
      }
      ((s as any).sd_mt = (s as any).sd_mt ?? {})['i'] = ((s as any).sd_mt['i'] ?? 0) + (1);
    } while (((s as any).sd_mt ?? 0)?.['i'] < ((s as any).sd_mt ?? 0)?.['max']);
  }
  (s as any).sd_mt = undefined;
  (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'alerts', ((s as any).result ?? 0));
  return;
  scene.build();
}

function enterSecCalendar(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).cal_upcoming_html ?? 0));
  (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'calendar', ((s as any).result ?? 0));
  return;
  scene.build();
}

function enterSecSkills(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  ((s as any).sd_sk = (s as any).sd_sk ?? {})['rows'] = '';
  ((s as any).skillval = (s as any).skillval ?? {})['teacher'] = ((((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') ? ((((s as any).teacher ?? 0)?.['level'])) : (0));
  ((s as any).skillval = (s as any).skillval ?? {})['splcstng'] = ((((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') ? (((s as any).pcs_splcstng ?? 0)) : (0));
  ((s as any).skillval = (s as any).skillval ?? {})['humint'] = ((s as any).pcs_humint ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['persuas'] = ((s as any).pcs_persuas ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['observ'] = ((s as any).pcs_observ ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['run'] = ((s as any).pcs_run ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['vball'] = ((s as any).pcs_vball ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['ftbll'] = ((s as any).pcs_ftbll ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['wrstlng'] = ((s as any).pcs_wrstlng ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['chess'] = ((s as any).pcs_chess ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['icesktng'] = ((s as any).pcs_icesktng ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['gaming'] = ((s as any).pcs_gaming ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['pool'] = ((s as any).pcs_pool ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['bkbll'] = ((s as any).pcs_bkbll ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['jab'] = ((s as any).pcs_jab ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['punch'] = ((s as any).pcs_punch ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['kick'] = ((s as any).pcs_kick ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['def'] = ((s as any).pcs_def ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['shoot'] = ((s as any).pcs_shoot ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['bushcraft'] = ((s as any).pcs_bushcraft ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['makupskl'] = ((s as any).pcs_makupskl ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['danc'] = ((s as any).pcs_danc ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['dancero'] = ((s as any).pcs_dancero ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['dancpol'] = ((s as any).pcs_dancpol ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['cheer'] = ((s as any).pcs_cheer ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['mdlng'] = ((s as any).pcs_mdlng ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['heels'] = ((s as any).pcs_heels ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['vokal'] = ((s as any).pcs_vokal ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['instrmusic'] = ((s as any).pcs_instrmusic ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['photoskl'] = ((s as any).pcs_photoskl ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['artskls'] = ((s as any).pcs_artskls ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['perform'] = ((s as any).pcs_perform ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['musicprod'] = ((s as any).pcs_musicprod ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['cleaning'] = ((s as any).pcs_cleaning ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['compskl'] = ((s as any).pcs_compskl ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['comphckng'] = ((s as any).pcs_comphckng ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['hndiwrk'] = ((s as any).pcs_hndiwrk ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['sewng'] = ((s as any).pcs_sewng ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['servng'] = ((s as any).pcs_servng ?? 0);
  ((s as any).skillval = (s as any).skillval ?? {})['medcn'] = ((s as any).pcs_medcn ?? 0);
  if (((s as any).stat_cfg ?? 0)?.['skills_mode'] > 0) {
    ((s as any).sd = (s as any).sd ?? {})['render_mode'] = (((s as any).stat_cfg ?? {})?.['skills_mode'] ?? 0) - 1;
  }
  ((s as any).sd = (s as any).sd ?? {})['name_side'] = (((s as any).stat_cfg ?? 0)?.['name_side_skills']);
  ((s as any).sd_sk = (s as any).sd_sk ?? {})['td_cols'] = ((((s as any).stat_cfg ?? 0)?.['skills_mode'] > 0) ? ((((s as any).sd ?? {})?.['skills_columns'] ?? 0) * 2) : ((((s as any).sd ?? 0)?.['skills_columns'])));
  ((s as any).sd_sk = (s as any).sd_sk ?? {})['save_barwidth'] = (((s as any).stat_cfg ?? 0)?.['bar_width']);
  if (((s as any).sd ?? 0)?.['skills_columns'] > 1) {
    ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = 'TODO';
  }
  ((s as any).sd_sk = (s as any).sd_sk ?? {})['gi'] = 0;
  ((s as any).sd_sk = (s as any).sd_sk ?? {})['gmax'] = 0;
  ((s as any).sd_sk = (s as any).sd_sk ?? {})['joined_cnt'] = 0;
  ((s as any).sd_sk = (s as any).sd_sk ?? {})['align'] = qspFunc(s, 'stat_display', 'helper_resolve_align', 'skills');
  do {
    ((s as any).sd_sk = (s as any).sd_sk ?? {})['grp'] = qspUntranslated(s, "skill_group_order[sd_sk['gi']]", { location: "stat_display" });
    ((s as any).sd_sk = (s as any).sd_sk ?? {})['grp_rows'] = '';
    if (((s as any).stat_cfg ?? 0)?.['skills_group_mode'] === 0) {
      ((s as any).sd_sk = (s as any).sd_sk ?? {})['cnt'] = (((s as any).sd_sk ?? 0)?.['joined_cnt']);
    } else {
      ((s as any).sd_sk = (s as any).sd_sk ?? {})['cnt'] = 0;
    }
    if (((s as any).stat_hide ?? 0)[((s as any).sd_sk ?? 0)?.['grp']] === 0) {
      while (true) {
        ((s as any).sd_sk = (s as any).sd_sk ?? {})['si'] = 0;
        while (true) {
          ((s as any).sd_sk = (s as any).sd_sk ?? {})['key'] = (((s as any).skill_grp ?? 0)?.[(((s as any).sd_sk ?? 0)?.['grp']) + '_' + String((((s as any).sd_sk ?? 0)?.['si']))] ?? 0);
          if (((s as any).sd_sk ?? 0)?.['key'] === '') {
            break;
          }
          if (((s as any).stat_hide_skill ?? 0)[((s as any).sd_sk ?? 0)?.['key']] === 0) {
            ((s as any).sd_sk = (s as any).sd_sk ?? {})['val'] = (((s as any).skillval ?? 0)?.[(((s as any).sd_sk ?? 0)?.['key'])] ?? 0);
            if (((s as any).sd_sk ?? 0)?.['val'] > 0) {
              ((s as any).sd_sk = (s as any).sd_sk ?? {})['grp_rows'] = ((s as any).sd_sk['grp_rows'] ?? 0) + (qspFunc(s, 'stat_display', 'helper_skill_entry', (((s as any).sd_dn ?? 0)?.[(((s as any).sd_sk ?? 0)?.['key'])] ?? 0), (((s as any).sd_sk ?? 0)?.['val']), (((s as any).sd_sk ?? 0)?.['cnt'])));
              ((s as any).sd_sk = (s as any).sd_sk ?? {})['cnt'] = ((s as any).sd_sk['cnt'] ?? 0) + (1);
            }
          }
          ((s as any).sd_sk = (s as any).sd_sk ?? {})['si'] = ((s as any).sd_sk['si'] ?? 0) + (1);
          break;
        }
        break;
      }
      // LABEL: sd_skill_entry_done
      if (((s as any).sd_sk ?? 0)?.['grp_rows'] !== '') {
        if (((s as any).stat_cfg ?? 0)?.['skills_group_mode'] === 0) {
          ((s as any).sd_sk = (s as any).sd_sk ?? {})['joined_cnt'] = (((s as any).sd_sk ?? 0)?.['cnt']);
          ((s as any).sd_sk = (s as any).sd_sk ?? {})['rows'] = ((s as any).sd_sk['rows'] ?? 0) + ((((s as any).sd_sk ?? 0)?.['grp_rows']));
        } else {
          if (((s as any).stat_cfg ?? 0)?.['skills_group_mode'] === 1) {
            if (((s as any).sd_sk ?? 0)?.['cnt'] % ((s as any).sd ?? 0)?.['skills_columns'] !== 0) {
              ((s as any).sd_sk = (s as any).sd_sk ?? {})['grp_rows'] = ((s as any).sd_sk['grp_rows'] ?? 0) + ('</tr>');
            }
            if (((s as any).sd_sk ?? 0)?.['rows'] !== '') {
              ((s as any).sd_sk = (s as any).sd_sk ?? {})['rows'] = ((s as any).sd_sk['rows'] ?? 0) + ('<tr><td colspan="' + String((((s as any).sd_sk ?? 0)?.['td_cols'])) + '" style="padding-top:6px;border:none;"></td></tr>');
            }
            ((s as any).sd_sk = (s as any).sd_sk ?? {})['rows'] = ((s as any).sd_sk['rows'] ?? 0) + ((((s as any).sd_sk ?? 0)?.['grp_rows']));
          } else {
            if (((s as any).sd_sk ?? 0)?.['cnt'] % ((s as any).sd ?? 0)?.['skills_columns'] !== 0) {
              ((s as any).sd_sk = (s as any).sd_sk ?? {})['grp_rows'] = ((s as any).sd_sk['grp_rows'] ?? 0) + ('</tr>');
            }
            ((s as any).sd_sk = (s as any).sd_sk ?? {})['hdr_style'] = 'padding-top:4px;border-left:none;border-right:none;font-size:' + ((s as any).sd_font_pct ?? 0) + '%;';
            ((s as any).sd_sk = (s as any).sd_sk ?? {})['hdr_align'] = '';
            if (((s as any).sd_sk ?? 0)?.['align'] === 1) {
              ((s as any).sd_sk = (s as any).sd_sk ?? {})['hdr_style'] = ((s as any).sd_sk['hdr_style'] ?? 0) + ('text-align:center;');
              ((s as any).sd_sk = (s as any).sd_sk ?? {})['hdr_align'] = ' align="center"';
            } else {
              if (((s as any).sd_sk ?? 0)?.['align'] === 2) {
                ((s as any).sd_sk = (s as any).sd_sk ?? {})['hdr_style'] = ((s as any).sd_sk['hdr_style'] ?? 0) + ('text-align:right;');
                ((s as any).sd_sk = (s as any).sd_sk ?? {})['hdr_align'] = ' align="right"';
              }
            }
            ((s as any).sd_sk = (s as any).sd_sk ?? {})['rows'] = ((s as any).sd_sk['rows'] ?? 0) + ('<tr><td colspan="' + String((((s as any).sd_sk ?? 0)?.['td_cols'])) + '"' + (((s as any).sd_sk ?? 0)?.['hdr_align']) + ' style="' + (((s as any).sd_sk ?? 0)?.['hdr_style']) + '"><b>' + (((s as any).sd_dn ?? 0)?.[(((s as any).sd_sk ?? 0)?.['grp'])] ?? 0) + '</b></td></tr>' + (((s as any).sd_sk ?? 0)?.['grp_rows']));
          }
        }
      }
    }
    ((s as any).sd_sk = (s as any).sd_sk ?? {})['gi'] = ((s as any).sd_sk['gi'] ?? 0) + (1);
    if (((s as any).stat_cfg ?? 0)?.['skills_group_mode'] === 0  &&  ((s as any).sd_sk ?? 0)?.['joined_cnt'] % ((s as any).sd ?? 0)?.['skills_columns'] !== 0) {
      ((s as any).sd_sk = (s as any).sd_sk ?? {})['rows'] = ((s as any).sd_sk['rows'] ?? 0) + ('</tr>');
    }
    if (((s as any).sd_sk ?? 0)?.['rows'] !== '') {
      ((s as any).sd_sk = (s as any).sd_sk ?? {})['align_attr'] = ((((s as any).sd_sk ?? 0)?.['align'] === 1) ? (' align="center"') : (((((s as any).sd_sk ?? 0)?.['align'] === 2) ? (' align="right"') : (''))));
      if (((s as any).stat_cfg ?? 0)?.['skills_mode'] === 0) {
        (s as any).result = '<table' + (((s as any).sd_sk ?? 0)?.['align_attr']) + ' cellpadding="2" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#555;">' + (((s as any).sd_sk ?? 0)?.['rows']) + '</table>';
      } else {
        (s as any).result = '<table' + (((s as any).sd_sk ?? 0)?.['align_attr']) + ' cellpadding="1" cellspacing="0">' + (((s as any).sd_sk ?? 0)?.['rows']) + '</table>';
      }
    }
    ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = (((s as any).sd_sk ?? 0)?.['save_barwidth']);
    (s as any).sd_sk = undefined;
    return;
  } while (((s as any).sd_sk ?? 0)?.['gi'] < ((s as any).sd_sk ?? 0)?.['gmax']);
  scene.build();
}

function enterSecRelations(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  ((s as any).sd_rl = (s as any).sd_rl ?? {})['rows'] = '';
  ((s as any).sd_rl = (s as any).sd_rl ?? {})['cols'] = (((s as any).sd ?? 0)?.['relations_columns']);
  ((s as any).sd_rl = (s as any).sd_rl ?? {})['align'] = qspFunc(s, 'stat_display', 'helper_resolve_align', 'relations');
  if (((s as any).stat_cfg ?? 0)?.['relations_mode'] > 0) {
    ((s as any).sd = (s as any).sd ?? {})['render_mode'] = (((s as any).stat_cfg ?? {})?.['relations_mode'] ?? 0) - 1;
  }
  ((s as any).sd = (s as any).sd ?? {})['name_side'] = (((s as any).stat_cfg ?? 0)?.['name_side_relations']);
  ((s as any).sd_rl = (s as any).sd_rl ?? {})['td_cols'] = ((((s as any).stat_cfg ?? 0)?.['relations_mode'] > 0) ? ((((s as any).sd ?? {})?.['relations_columns'] ?? 0) * 2) : ((((s as any).sd ?? 0)?.['relations_columns'])));
  ((s as any).sd_rl = (s as any).sd_rl ?? {})['save_barwidth'] = (((s as any).stat_cfg ?? 0)?.['bar_width']);
  if (((s as any).sd ?? 0)?.['relations_columns'] > 1) {
    ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = 'TODO';
  }
  ((s as any).sd_rl = (s as any).sd_rl ?? {})['gi'] = 0;
  ((s as any).sd_rl = (s as any).sd_rl ?? {})['gmax'] = 0;
  ((s as any).sd_rl = (s as any).sd_rl ?? {})['joined_cnt'] = 0;
  do {
    while (true) {
      ((s as any).sd_rl = (s as any).sd_rl ?? {})['grp'] = qspUntranslated(s, "rel_group_order[sd_rl['gi']]", { location: "stat_display" });
      ((s as any).sd_rl = (s as any).sd_rl ?? {})['grp_rows'] = '';
      if (((s as any).stat_cfg ?? 0)?.['relations_group_mode'] === 0) {
        ((s as any).sd_rl = (s as any).sd_rl ?? {})['cnt'] = (((s as any).sd_rl ?? 0)?.['joined_cnt']);
      } else {
        ((s as any).sd_rl = (s as any).sd_rl ?? {})['cnt'] = 0;
      }
      if (((s as any).stat_hide_rel_grp ?? 0)[((s as any).sd_rl ?? 0)?.['grp']] === 0) {
        if (((s as any).sd_rl ?? 0)?.['grp'] === 'family'  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
          break;
        }
        if (((s as any).sd_rl ?? 0)?.['grp'] === 'lovers') {
          while (true) {
            ((s as any).sd_rl = (s as any).sd_rl ?? {})['li'] = 0;
            ((s as any).sd_rl = (s as any).sd_rl ?? {})['lmax'] = 0;
            while (true) {
              if (((s as any).sd_rl ?? 0)?.['li'] >= ((s as any).sd_rl ?? 0)?.['lmax']) {
                break;
              }
              ((s as any).sd_rl = (s as any).sd_rl ?? {})['lovid'] = qspUntranslated(s, "lover[sd_rl['li']]", { location: "stat_display" });
              if (((s as any).npc_rel_type ?? 0)[((s as any).sd_rl ?? 0)?.['lovid']] === 'boyfriend') {
                ((s as any).sd_rl = (s as any).sd_rl ?? {})['lovtype'] = 'BF';
              } else {
                if (((s as any).npc_rel_type ?? 0)[((s as any).sd_rl ?? 0)?.['lovid']] === 'girlfriend') {
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['lovtype'] = 'GF';
                } else {
                  if (((s as any).npc_rel_type ?? 0)[((s as any).sd_rl ?? 0)?.['lovid']] === 'fuckbuddy') {
                    ((s as any).sd_rl = (s as any).sd_rl ?? {})['lovtype'] = 'FB';
                  } else {
                    if (((s as any).npc_rel_type ?? 0)[((s as any).sd_rl ?? 0)?.['lovid']] === 'sugar_daddy') {
                      ((s as any).sd_rl = (s as any).sd_rl ?? {})['lovtype'] = 'SD';
                    } else {
                      ((s as any).sd_rl = (s as any).sd_rl ?? {})['lovtype'] = '';
                    }
                  }
                }
              }
              if (((s as any).sd_rl ?? 0)?.['lovtype'] !== '') {
                if (((s as any).stat_hide_rel ?? 0)[((s as any).sd_rl ?? 0)?.['lovid']] === 0) {
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['lovname'] = (((s as any).sd_rl ?? 0)?.['lovtype']) + ' ' + qspFunc(s, 'stat_display', 'helper_rel_name', '', (((s as any).sd_rl ?? 0)?.['lovid']));
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['grp_rows'] = ((s as any).sd_rl['grp_rows'] ?? 0) + (qspFunc(s, 'stat_display', 'helper_rel_entry', (((s as any).sd_rl ?? 0)?.['lovname']), (((s as any).npc_rel ?? 0)?.[(((s as any).sd_rl ?? 0)?.['lovid'])] ?? 0), (((s as any).sd_rl ?? 0)?.['cnt'])));
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['cnt'] = ((s as any).sd_rl['cnt'] ?? 0) + (1);
                }
              }
              ((s as any).sd_rl = (s as any).sd_rl ?? {})['li'] = ((s as any).sd_rl['li'] ?? 0) + (1);
              break;
            }
            break;
          }
          // LABEL: sd_rel_lover_done
        } else {
          while (true) {
            ((s as any).sd_rl = (s as any).sd_rl ?? {})['mi'] = 0;
            while (true) {
              ((s as any).sd_rl = (s as any).sd_rl ?? {})['key'] = (((s as any).rel_grp ?? 0)?.[(((s as any).sd_rl ?? 0)?.['grp']) + '_' + String((((s as any).sd_rl ?? 0)?.['mi']))] ?? 0);
              if (((s as any).sd_rl ?? 0)?.['key'] === '') {
                break;
              }
              if (((s as any).stat_hide_rel ?? 0)[((s as any).sd_rl ?? 0)?.['key']] === 0) {
                ((s as any).sd_rl = (s as any).sd_rl ?? {})['val'] = (((s as any).npc_rel ?? 0)?.[(((s as any).sd_rl ?? 0)?.['key'])] ?? 0);
                if (((s as any).sd_rl ?? 0)?.['val'] > 0) {
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['name'] = qspFunc(s, 'stat_display', 'helper_rel_name', (((s as any).sd_rl ?? 0)?.['key']));
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['grp_rows'] = ((s as any).sd_rl['grp_rows'] ?? 0) + (qspFunc(s, 'stat_display', 'helper_rel_entry', (((s as any).sd_rl ?? 0)?.['name']), (((s as any).sd_rl ?? 0)?.['val']), (((s as any).sd_rl ?? 0)?.['cnt'])));
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['cnt'] = ((s as any).sd_rl['cnt'] ?? 0) + (1);
                }
              }
              ((s as any).sd_rl = (s as any).sd_rl ?? {})['mi'] = ((s as any).sd_rl['mi'] ?? 0) + (1);
              break;
            }
            break;
          }
          // LABEL: sd_rel_member_done
        }
        if (((s as any).sd_rl ?? 0)?.['grp_rows'] !== '') {
          if (((s as any).stat_cfg ?? 0)?.['relations_group_mode'] === 0) {
            ((s as any).sd_rl = (s as any).sd_rl ?? {})['joined_cnt'] = (((s as any).sd_rl ?? 0)?.['cnt']);
            ((s as any).sd_rl = (s as any).sd_rl ?? {})['rows'] = ((s as any).sd_rl['rows'] ?? 0) + ((((s as any).sd_rl ?? 0)?.['grp_rows']));
          } else {
            if (((s as any).stat_cfg ?? 0)?.['relations_group_mode'] === 1) {
              if (((s as any).sd_rl ?? 0)?.['cnt'] % ((s as any).sd ?? 0)?.['relations_columns'] !== 0) {
                ((s as any).sd_rl = (s as any).sd_rl ?? {})['grp_rows'] = ((s as any).sd_rl['grp_rows'] ?? 0) + ('</tr>');
              }
              if (((s as any).sd_rl ?? 0)?.['rows'] !== '') {
                ((s as any).sd_rl = (s as any).sd_rl ?? {})['rows'] = ((s as any).sd_rl['rows'] ?? 0) + ('<tr><td colspan="' + String((((s as any).sd_rl ?? 0)?.['td_cols'])) + '" style="padding-top:6px;border:none;"></td></tr>');
              }
              ((s as any).sd_rl = (s as any).sd_rl ?? {})['rows'] = ((s as any).sd_rl['rows'] ?? 0) + ((((s as any).sd_rl ?? 0)?.['grp_rows']));
            } else {
              if (((s as any).sd_rl ?? 0)?.['cnt'] % ((s as any).sd ?? 0)?.['relations_columns'] !== 0) {
                ((s as any).sd_rl = (s as any).sd_rl ?? {})['grp_rows'] = ((s as any).sd_rl['grp_rows'] ?? 0) + ('</tr>');
              }
              ((s as any).sd_rl = (s as any).sd_rl ?? {})['hdr_style'] = 'padding-top:4px;border-left:none;border-right:none;font-size:' + ((s as any).sd_font_pct ?? 0) + '%;';
              ((s as any).sd_rl = (s as any).sd_rl ?? {})['hdr_align'] = '';
              if (((s as any).sd_rl ?? 0)?.['align'] === 1) {
                ((s as any).sd_rl = (s as any).sd_rl ?? {})['hdr_style'] = ((s as any).sd_rl['hdr_style'] ?? 0) + ('text-align:center;');
                ((s as any).sd_rl = (s as any).sd_rl ?? {})['hdr_align'] = ' align="center"';
              } else {
                if (((s as any).sd_rl ?? 0)?.['align'] === 2) {
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['hdr_style'] = ((s as any).sd_rl['hdr_style'] ?? 0) + ('text-align:right;');
                  ((s as any).sd_rl = (s as any).sd_rl ?? {})['hdr_align'] = ' align="right"';
                }
              }
              ((s as any).sd_rl = (s as any).sd_rl ?? {})['rows'] = ((s as any).sd_rl['rows'] ?? 0) + ('<tr><td colspan="' + String((((s as any).sd_rl ?? 0)?.['td_cols'])) + '"' + (((s as any).sd_rl ?? 0)?.['hdr_align']) + ' style="' + (((s as any).sd_rl ?? 0)?.['hdr_style']) + '"><b>' + (((s as any).sd_dn ?? 0)?.[(((s as any).sd_rl ?? 0)?.['grp'])] ?? 0) + '</b></td></tr>' + (((s as any).sd_rl ?? 0)?.['grp_rows']));
            }
          }
        }
      }
      break;
    }
    // LABEL: sd_rel_group_next
    ((s as any).sd_rl = (s as any).sd_rl ?? {})['gi'] = ((s as any).sd_rl['gi'] ?? 0) + (1);
    if (((s as any).stat_cfg ?? 0)?.['relations_group_mode'] === 0  &&  ((s as any).sd_rl ?? 0)?.['joined_cnt'] % ((s as any).sd ?? 0)?.['relations_columns'] !== 0) {
      ((s as any).sd_rl = (s as any).sd_rl ?? {})['rows'] = ((s as any).sd_rl['rows'] ?? 0) + ('</tr>');
    }
    if (((s as any).sd_rl ?? 0)?.['rows'] !== '') {
      ((s as any).sd_rl = (s as any).sd_rl ?? {})['align_attr'] = ((((s as any).sd_rl ?? 0)?.['align'] === 1) ? (' align="center"') : (((((s as any).sd_rl ?? 0)?.['align'] === 2) ? (' align="right"') : (''))));
      if (((s as any).stat_cfg ?? 0)?.['relations_mode'] === 0) {
        (s as any).result = '<table' + (((s as any).sd_rl ?? 0)?.['align_attr']) + ' cellpadding="2" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#555;">' + (((s as any).sd_rl ?? 0)?.['rows']) + '</table>';
      } else {
        (s as any).result = '<table' + (((s as any).sd_rl ?? 0)?.['align_attr']) + ' cellpadding="1" cellspacing="0">' + (((s as any).sd_rl ?? 0)?.['rows']) + '</table>';
      }
    }
    ((s as any).stat_cfg = (s as any).stat_cfg ?? {})['bar_width'] = (((s as any).sd_rl ?? 0)?.['save_barwidth']);
    (s as any).sd_rl = undefined;
    return;
  } while (((s as any).sd_rl ?? 0)?.['gi'] < ((s as any).sd_rl ?? 0)?.['gmax']);
  scene.build();
}

function enterSecTexts(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  ((s as any).sd_mt = (s as any).sd_mt ?? {})['max'] = 0;
  if (((s as any).sd_mt ?? 0)?.['max'] > 0) {
    ((s as any).sd_mt = (s as any).sd_mt ?? {})['i'] = 0;
    do {
      if (((s as any).sd_texts ?? 0)[((s as any).sd_mt ?? 0)?.['i']] !== '') {
        if (((s as any).sd ?? 0)?.['sep_text'] === '<br>') {
          (s as any).result = ((s as any).result ?? 0) + ('<div style="font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;">' + qspUntranslated(s, "sd_texts[sd_mt['i']]", { location: "stat_display" }) + '</div>');
        } else {
          (s as any).result = ((s as any).result ?? 0) + ('TODO');
        }
      }
      ((s as any).sd_mt = (s as any).sd_mt ?? {})['i'] = ((s as any).sd_mt['i'] ?? 0) + (1);
    } while (((s as any).sd_mt ?? 0)?.['i'] < ((s as any).sd_mt ?? 0)?.['max']);
  }
  (s as any).sd_mt = undefined;
  (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'texts', ((s as any).result ?? 0));
  return;
  scene.build();
}

function enterSecImages(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sd_img ?? 0)?.['count'] === 0) {
    (s as any).result = '';
    return;
  }
  ((s as any).sd_si = (s as any).sd_si ?? {})['fit_width'] = 0;
  if (((s as any).stat_cfg ?? 0)?.['image_size'] === 0) {
    ((s as any).sd_si = (s as any).sd_si ?? {})['fit_width'] = 1;
    ((s as any).sd_si = (s as any).sd_si ?? {})['size'] = 'width="100%" style="max-width:100%; width:100%; display:block;"';
  } else {
    if (((s as any).stat_cfg ?? 0)?.['image_size'] === 2) {
      ((s as any).sd_si = (s as any).sd_si ?? {})['size'] = 'height="' + (((s as any).stat_cfg ?? 0)?.['image_size_px']) + '"';
    } else {
      if (((s as any).stat_cfg ?? 0)?.['image_size'] === 3) {
        ((s as any).sd_si = (s as any).sd_si ?? {})['size'] = 'width="' + (((s as any).stat_cfg ?? 0)?.['image_size_px']) + '"';
      } else {
        ((s as any).sd_si = (s as any).sd_si ?? {})['size'] = '';
      }
    }
  }
  ((s as any).sd_si = (s as any).sd_si ?? {})['wrap_mode'] = 0;
  if (((s as any).stat_cfg ?? 0)?.['image_columns'] === 3) {
    ((s as any).sd_si = (s as any).sd_si ?? {})['wrap_mode'] = 1;
  }
  ((s as any).sd_si = (s as any).sd_si ?? {})['wrap_free'] = 0;
  if (((s as any).sd_si ?? 0)?.['wrap_mode'] === 1) {
    if (((s as any).sd_si ?? 0)?.['fit_width'] === 1) {
      ((s as any).sd_si = (s as any).sd_si ?? {})['cols'] = (((s as any).sd_img ?? 0)?.['count']);
    } else {
      ((s as any).sd_si = (s as any).sd_si ?? {})['wrap_free'] = 1;
    }
  } else {
    ((s as any).sd_si = (s as any).sd_si ?? {})['cols'] = Math.min(Math.max((((s as any).stat_cfg ?? {})?.['image_columns'] ?? 0) + 1, 1), 3);
  }
  if (((s as any).stat_cfg ?? 0)?.['image_spacing'] === 0) {
    ((s as any).sd_si = (s as any).sd_si ?? {})['cellspacing'] = 0;
    ((s as any).sd_si = (s as any).sd_si ?? {})['cellpadding'] = 0;
  } else {
    ((s as any).sd_si = (s as any).sd_si ?? {})['cellspacing'] = 4;
    ((s as any).sd_si = (s as any).sd_si ?? {})['cellpadding'] = 4;
  }
  if (((s as any).sd_si ?? 0)?.['wrap_free'] === 1) {
    ((s as any).sd_si = (s as any).sd_si ?? {})['ann_pos'] = (((s as any).stat_cfg ?? 0)?.['image_header_pos']);
    (s as any).result = '<div>';
    ((s as any).sd_si = (s as any).sd_si ?? {})['ci'] = 0;
    do {
      ((s as any).sd_si = (s as any).sd_si ?? {})['key'] = (((s as any).sd_img ?? 0)?.['order_' + String((((s as any).sd_si ?? 0)?.['ci']))] ?? 0);
      ((s as any).sd_si = (s as any).sd_si ?? {})['url'] = (((s as any).sd_img ?? 0)?.['url_' + (((s as any).sd_si ?? 0)?.['key'])] ?? 0);
      ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = '';
      if (((s as any).stat_cfg ?? 0)?.['image_headers'] === 1) {
        ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = (((s as any).sd_img ?? 0)?.['label_' + (((s as any).sd_si ?? 0)?.['key'])] ?? 0);
      } else {
        if (((s as any).stat_cfg ?? 0)?.['image_headers'] >= 2) {
          ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = (((s as any).sd_img ?? 0)?.['short_' + (((s as any).sd_si ?? 0)?.['key'])] ?? 0);
          ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = (String((((s as any).sd_si ?? 0)?.['hdr'])).split('number ').join('#'));
          if ((String(((s as any).sd_si ?? 0)?.['hdr']).slice(((String(((s as any).sd_si ?? 0)?.['hdr']).length))-1, (((String(((s as any).sd_si ?? 0)?.['hdr']).length))-1)+(1))) === '.') {
            ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = (String((((s as any).sd_si ?? 0)?.['hdr'])).slice((1)-1, ((1)-1)+((String((((s as any).sd_si ?? 0)?.['hdr'])).length) - 1)));
          }
        }
      }
      if (((s as any).sd_si ?? 0)?.['hdr'] !== '') {
        if (((s as any).stat_cfg ?? 0)?.['image_header_font'] === 0) {
          ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = '<small>' + (((s as any).sd_si ?? 0)?.['hdr']) + '</small>';
        } else {
          if (((s as any).stat_cfg ?? 0)?.['image_header_font'] === 2) {
            ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = '<b>' + (((s as any).sd_si ?? 0)?.['hdr']) + '</b>';
          }
        }
      }
      ((s as any).sd_si = (s as any).sd_si ?? {})['cond'] = '';
      if (((s as any).stat_cfg ?? 0)?.['image_headers'] === 3) {
        ((s as any).sd_si = (s as any).sd_si ?? {})['cond'] = (((s as any).sd_img ?? 0)?.['cond_' + (((s as any).sd_si ?? 0)?.['key'])] ?? 0);
      }
      ((s as any).sd_si = (s as any).sd_si ?? {})['ann'] = '';
      if (((s as any).sd_si ?? 0)?.['hdr'] !== '') {
        ((s as any).sd_si = (s as any).sd_si ?? {})['ann'] = (((s as any).sd_si ?? 0)?.['hdr']);
      }
      if (((s as any).sd_si ?? 0)?.['cond'] !== '') {
        if (((s as any).sd_si ?? 0)?.['ann'] !== '') {
          ((s as any).sd_si = (s as any).sd_si ?? {})['ann'] = ((s as any).sd_si['ann'] ?? 0) + ('<br>');
        }
        ((s as any).sd_si = (s as any).sd_si ?? {})['ann'] = ((s as any).sd_si['ann'] ?? 0) + ('<small>' + (((s as any).sd_si ?? 0)?.['cond']) + '</small>');
      }
      ((s as any).sd_si = (s as any).sd_si ?? {})['img'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027__qspDyn\u0027; return s; }); return false;"><img ' + (((s as any).sd_si ?? 0)?.['size']) + ' src="' + (((s as any).sd_si ?? 0)?.['url']) + '"></a>';
      ((s as any).sd_si = (s as any).sd_si ?? {})['cell'] = '<div style="display:inline-block; vertical-align:top; text-align:center; margin:' + (((s as any).sd_si ?? 0)?.['cellspacing']) + 'px;">';
      if (((s as any).sd_si ?? 0)?.['ann_pos'] === 0  &&  ((s as any).sd_si ?? 0)?.['ann'] !== '') {
        ((s as any).sd_si = (s as any).sd_si ?? {})['cell'] = ((s as any).sd_si['cell'] ?? 0) + (((s as any).sd_font_wrap_o ?? 0) + (((s as any).sd_si ?? 0)?.['ann']) + ((s as any).sd_font_wrap_c ?? 0) + '<br>');
      }
      ((s as any).sd_si = (s as any).sd_si ?? {})['cell'] = ((s as any).sd_si['cell'] ?? 0) + ((((s as any).sd_si ?? 0)?.['img']));
      if (((s as any).sd_si ?? 0)?.['ann_pos'] === 1  &&  ((s as any).sd_si ?? 0)?.['ann'] !== '') {
        ((s as any).sd_si = (s as any).sd_si ?? {})['cell'] = ((s as any).sd_si['cell'] ?? 0) + ('<br>' + ((s as any).sd_font_wrap_o ?? 0) + (((s as any).sd_si ?? 0)?.['ann']) + ((s as any).sd_font_wrap_c ?? 0));
      }
      ((s as any).sd_si = (s as any).sd_si ?? {})['cell'] = ((s as any).sd_si['cell'] ?? 0) + ('</div>');
      (s as any).result = ((s as any).result ?? 0) + ((((s as any).sd_si ?? 0)?.['cell']));
      ((s as any).sd_si = (s as any).sd_si ?? {})['ci'] = ((s as any).sd_si['ci'] ?? 0) + (1);
      (s as any).result = ((s as any).result ?? 0) + ('</div>');
      (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'images', ((s as any).result ?? 0));
      (s as any).sd_si = undefined;
      return;
    } while (((s as any).sd_si ?? 0)?.['ci'] < ((s as any).sd_img ?? 0)?.['count']);
  }
  if (((s as any).sd_si ?? 0)?.['fit_width'] === 1) {
    (s as any).result = '<table width="100%" cellspacing="' + (((s as any).sd_si ?? 0)?.['cellspacing']) + '" cellpadding="' + (((s as any).sd_si ?? 0)?.['cellpadding']) + '">';
    ((s as any).sd_si = (s as any).sd_si ?? {})['td_width'] = ' width="\' + $str(100 / sd_si[\'cols\']) + \'%"';
  } else {
    (s as any).result = '<table cellspacing="' + (((s as any).sd_si ?? 0)?.['cellspacing']) + '" cellpadding="' + (((s as any).sd_si ?? 0)?.['cellpadding']) + '">';
    ((s as any).sd_si = (s as any).sd_si ?? {})['td_width'] = '';
  }
  ((s as any).sd_si = (s as any).sd_si ?? {})['ann_pos'] = (((s as any).stat_cfg ?? 0)?.['image_header_pos']);
  ((s as any).sd_si = (s as any).sd_si ?? {})['ci'] = 0;
  ((s as any).sd_si = (s as any).sd_si ?? {})['img_cells'] = '';
  ((s as any).sd_si = (s as any).sd_si ?? {})['ann_cells'] = '';
  ((s as any).sd_si = (s as any).sd_si ?? {})['has_ann'] = 0;
  do {
    ((s as any).sd_si = (s as any).sd_si ?? {})['key'] = (((s as any).sd_img ?? 0)?.['order_' + String((((s as any).sd_si ?? 0)?.['ci']))] ?? 0);
    ((s as any).sd_si = (s as any).sd_si ?? {})['url'] = (((s as any).sd_img ?? 0)?.['url_' + (((s as any).sd_si ?? 0)?.['key'])] ?? 0);
    ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = '';
    if (((s as any).stat_cfg ?? 0)?.['image_headers'] === 1) {
      ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = (((s as any).sd_img ?? 0)?.['label_' + (((s as any).sd_si ?? 0)?.['key'])] ?? 0);
    } else {
      if (((s as any).stat_cfg ?? 0)?.['image_headers'] >= 2) {
        ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = (((s as any).sd_img ?? 0)?.['short_' + (((s as any).sd_si ?? 0)?.['key'])] ?? 0);
        ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = (String((((s as any).sd_si ?? 0)?.['hdr'])).split('number ').join('#'));
        if ((String(((s as any).sd_si ?? 0)?.['hdr']).slice(((String(((s as any).sd_si ?? 0)?.['hdr']).length))-1, (((String(((s as any).sd_si ?? 0)?.['hdr']).length))-1)+(1))) === '.') {
          ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = (String((((s as any).sd_si ?? 0)?.['hdr'])).slice((1)-1, ((1)-1)+((String((((s as any).sd_si ?? 0)?.['hdr'])).length) - 1)));
        }
      }
    }
    if (((s as any).sd_si ?? 0)?.['hdr'] !== '') {
      if (((s as any).stat_cfg ?? 0)?.['image_header_font'] === 0) {
        ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = '<small>' + (((s as any).sd_si ?? 0)?.['hdr']) + '</small>';
      } else {
        if (((s as any).stat_cfg ?? 0)?.['image_header_font'] === 2) {
          ((s as any).sd_si = (s as any).sd_si ?? {})['hdr'] = '<b>' + (((s as any).sd_si ?? 0)?.['hdr']) + '</b>';
        }
      }
    }
    ((s as any).sd_si = (s as any).sd_si ?? {})['cond'] = '';
    if (((s as any).stat_cfg ?? 0)?.['image_headers'] === 3) {
      ((s as any).sd_si = (s as any).sd_si ?? {})['cond'] = (((s as any).sd_img ?? 0)?.['cond_' + (((s as any).sd_si ?? 0)?.['key'])] ?? 0);
    }
    ((s as any).sd_si = (s as any).sd_si ?? {})['ann'] = '';
    if (((s as any).sd_si ?? 0)?.['hdr'] !== '') {
      ((s as any).sd_si = (s as any).sd_si ?? {})['ann'] = (((s as any).sd_si ?? 0)?.['hdr']);
    }
    if (((s as any).sd_si ?? 0)?.['cond'] !== '') {
      if (((s as any).sd_si ?? 0)?.['ann'] !== '') {
        ((s as any).sd_si = (s as any).sd_si ?? {})['ann'] = ((s as any).sd_si['ann'] ?? 0) + ('<br>');
      }
      ((s as any).sd_si = (s as any).sd_si ?? {})['ann'] = ((s as any).sd_si['ann'] ?? 0) + ('<small>' + (((s as any).sd_si ?? 0)?.['cond']) + '</small>');
    }
    ((s as any).sd_si = (s as any).sd_si ?? {})['img'] = '<a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027__qspDyn\u0027; return s; }); return false;"><img ' + (((s as any).sd_si ?? 0)?.['size']) + ' src="' + (((s as any).sd_si ?? 0)?.['url']) + '"></a>';
    ((s as any).sd_si = (s as any).sd_si ?? {})['img_cells'] = ((s as any).sd_si['img_cells'] ?? 0) + ('<td valign="middle" align="center"' + (((s as any).sd_si ?? 0)?.['td_width']) + '>' + (((s as any).sd_si ?? 0)?.['img']) + '</td>');
    ((s as any).sd_si = (s as any).sd_si ?? {})['ann_cells'] = ((s as any).sd_si['ann_cells'] ?? 0) + ('<td valign="top"    align="center"' + (((s as any).sd_si ?? 0)?.['td_width']) + '>' + ((s as any).sd_font_wrap_o ?? 0) + (((s as any).sd_si ?? 0)?.['ann']) + ((s as any).sd_font_wrap_c ?? 0) + '</td>');
    if (((s as any).sd_si ?? 0)?.['ann'] !== '') {
      ((s as any).sd_si = (s as any).sd_si ?? {})['has_ann'] = 1;
    }
    if ((((s as any).sd_si ?? 0)?.['ci'] + 1) % ((s as any).sd_si ?? 0)?.['cols'] === 0  ||  ((s as any).sd_si ?? 0)?.['ci'] + 1 >= ((s as any).sd_img ?? 0)?.['count']) {
      if (((s as any).sd_si ?? 0)?.['ann_pos'] === 0  &&  ((s as any).sd_si ?? 0)?.['has_ann'] === 1) {
        (s as any).result = ((s as any).result ?? 0) + ('<tr>' + (((s as any).sd_si ?? 0)?.['ann_cells']) + '</tr>');
      }
      (s as any).result = ((s as any).result ?? 0) + ('<tr>' + (((s as any).sd_si ?? 0)?.['img_cells']) + '</tr>');
      if (((s as any).sd_si ?? 0)?.['ann_pos'] === 1  &&  ((s as any).sd_si ?? 0)?.['has_ann'] === 1) {
        (s as any).result = ((s as any).result ?? 0) + ('<tr>' + (((s as any).sd_si ?? 0)?.['ann_cells']) + '</tr>');
      }
      ((s as any).sd_si = (s as any).sd_si ?? {})['img_cells'] = '';
      ((s as any).sd_si = (s as any).sd_si ?? {})['ann_cells'] = '';
      ((s as any).sd_si = (s as any).sd_si ?? {})['has_ann'] = 0;
    }
    ((s as any).sd_si = (s as any).sd_si ?? {})['ci'] = ((s as any).sd_si['ci'] ?? 0) + (1);
    (s as any).result = ((s as any).result ?? 0) + ('</table>');
    (s as any).result = qspFunc(s, 'stat_display', 'helper_align_wrap', 'images', ((s as any).result ?? 0));
    (s as any).sd_si = undefined;
    return;
  } while (((s as any).sd_si ?? 0)?.['ci'] < ((s as any).sd_img ?? 0)?.['count']);
  scene.build();
}

function enterDebugTrace(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>');
  if (((s as any).git_hash ?? 0) !== '') {
    scene.text(`${((s as any).git_hash ?? '')}`);
  }
  if (((s as any).debug ?? 0)?.['call_trace_selector'] === 0) {
    scene.text('loc change&nbsp;|&nbsp;');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.debug ??= {})\u0027call_trace_selector\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">direct</a>');
    scene.text('<hr>');
    if (((s as any).debug ?? 0)?.['trace_loc_change'] === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.debug ??= {})\u0027trace_loc_change\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">start</a>&nbsp;|&nbsp;');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.debug ??= {})\u0027trace_loc_change\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">stop</a>&nbsp;|&nbsp;');
    }
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.debug ??= {})\u0027loc_change_trace\u0027 = \u0027; return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">clear</a>&nbsp;|&nbsp;');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.debug ??= {})\u0027trace_shown\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027stat\u0027, \u0027\u0027); return false;">return</a></center>');
    scene.text('$debug[\'loc_change_trace\']');
  } else {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.debug ??= {})\u0027call_trace_selector\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">loc change</a>&nbsp;|&nbsp;');
    scene.text('direct');
    scene.text('<hr>');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $trace_locations[] = $input(\u0027location name\u0027) */ return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">add by name</a>&nbsp;|&nbsp;');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $trace_locations[] = $curloc */ return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">add $curloc</a>');
    scene.text('<hr>');
    if (Object.keys((s as any).trace_locations ?? {}).length > 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027debug_tools\u0027, \u0027trace_list_locs\u0027); return false;">list locations</a>&nbsp;|&nbsp;');
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { delete (s as any).trace_locations; return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">clear</a>');
    } else {
      scene.text('list locations&nbsp;|&nbsp;');
      scene.text('clear');
    }
    scene.text('<hr>');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.debug ??= {})\u0027direct_trace\u0027 = \u0027; return s; }); window.__gameStore.getState().doGoto(\u0027stat_display\u0027, \u0027\u0027); return false;">clear</a>&nbsp;|&nbsp;');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.debug ??= {})\u0027trace_shown\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027stat\u0027, \u0027\u0027); return false;">return</a></center>');
    scene.text('$debug[\'direct_trace\']');
  }
  return;
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sd_dn ?? 0)?.['arousal'] === '') {
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['arousal'] = 'Arousal';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['pain'] = 'Pain';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['health'] = 'Health';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['mana'] = 'Mana';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['willpower'] = 'Willpower';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['stamina'] = 'Stamina';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['mood'] = 'Mood';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['energy'] = 'Hunger';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['thirst'] = 'Thirst';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['sleep'] = 'Sleep';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['faith'] = 'Faith';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['inhib'] = 'Inhibition';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['stren'] = 'Strength';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['agil'] = 'Agility';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['vital'] = 'Endurance';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['intel'] = 'Intelligence';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['sprt'] = 'Spirit';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['react'] = 'Reaction';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['chrsm'] = 'Charisma';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['prcptn'] = 'Perception';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['apprnc'] = 'Attractiveness';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['magik'] = 'Magic';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['sucexcess'] = 'Succ. Energy';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['face'] = 'Face';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['body'] = 'Body';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['coat'] = 'Coat';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['clothes'] = 'Clothes';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['bra'] = 'Bra';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['panties'] = 'Panties';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['shoes'] = 'Shoes';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['bodysuit'] = 'Bodysuit';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['weather'] = 'Weather';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['time'] = 'Time';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['menu_bar'] = 'Main Menu';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['money'] = 'Money';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['icons'] = 'Icons';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['status'] = 'Status';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['alerts'] = 'Alerts';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['calendar'] = 'Calendar';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['attributes'] = 'Attributes';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['skills'] = 'Skills';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['relations'] = 'Relationships';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['images'] = 'Images';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['texts'] = 'Status Texts';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['loadsave'] = 'Save / Load Buttons';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['mental'] = 'Mental';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['sport'] = 'Sport';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['combat'] = 'Combat';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['beauty'] = 'Beauty';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['artistic'] = 'Artistic';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['job'] = 'Job';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['humint'] = 'People Skills';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['persuas'] = 'Persuasion';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['observ'] = 'Observation';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['splcstng'] = 'Spell Casting';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['run'] = 'Running';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['vball'] = 'Volleyball';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['ftbll'] = 'Football';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['wrstlng'] = 'Wrestling';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['chess'] = 'Chess';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['icesktng'] = 'Ice Skating';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['gaming'] = 'Gaming';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['pool'] = 'Pool';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['bkbll'] = 'Basketball';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['jab'] = 'Jabs';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['punch'] = 'Power Strikes';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['kick'] = 'Kicks';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['def'] = 'Defence';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['shoot'] = 'Marksmanship';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['bushcraft'] = 'Bushcraft';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['makupskl'] = 'Makeup';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['danc'] = 'Dancing';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['dancero'] = 'Erotic Dancing';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['dancpol'] = 'Pole Dancing';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['cheer'] = 'Cheerleading';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['mdlng'] = 'Modelling';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['heels'] = 'Heels';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['vokal'] = 'Singing';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['instrmusic'] = 'Instruments';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['photoskl'] = 'Photography';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['artskls'] = 'Art Skills';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['perform'] = 'Performance';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['musicprod'] = 'Music Prod';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['cleaning'] = 'Cleaning';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['compskl'] = 'Computer';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['comphckng'] = 'Hacking';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['hndiwrk'] = 'Handiwork';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['sewng'] = 'Tailoring';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['servng'] = 'Serving';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['medcn'] = 'Medicine';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['teacher'] = 'Teaching';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['family'] = 'Family';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['lovers'] = 'Lovers';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['coolkid'] = 'Cool Kids';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['jock'] = 'Jocks';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['nerd'] = 'Nerds';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['gopnik'] = 'Gopniks';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['staff'] = 'School (Other)';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['pavlovsk'] = 'Pavlovsk';
    ((s as any).sd_dn = (s as any).sd_dn ?? {})['city'] = 'St. Petersburg';
  }
  if (((s as any).sd_st ?? 0)?.['status'] === '') {
    ((s as any).sd_st = (s as any).sd_st ?? {})['status'] = 'bars';
    ((s as any).sd_st = (s as any).sd_st ?? {})['attributes'] = 'bars';
    ((s as any).sd_st = (s as any).sd_st ?? {})['time'] = 'text';
    ((s as any).sd_st = (s as any).sd_st ?? {})['money'] = 'text';
    ((s as any).sd_st = (s as any).sd_st ?? {})['alerts'] = 'text';
    ((s as any).sd_st = (s as any).sd_st ?? {})['calendar'] = 'text';
    ((s as any).sd_st = (s as any).sd_st ?? {})['texts'] = 'text';
    ((s as any).sd_st = (s as any).sd_st ?? {})['weather'] = 'visual';
    ((s as any).sd_st = (s as any).sd_st ?? {})['menu_bar'] = 'visual';
    ((s as any).sd_st = (s as any).sd_st ?? {})['icons'] = 'visual';
    ((s as any).sd_st = (s as any).sd_st ?? {})['images'] = 'visual';
    ((s as any).sd_st = (s as any).sd_st ?? {})['loadsave'] = 'compact';
  }
  ((s as any).sd_st = (s as any).sd_st ?? {})['skills'] = ((((s as any).stat_cfg ?? 0)?.['skills_mode']) ? ('bars') : ('table'));
  ((s as any).sd_st = (s as any).sd_st ?? {})['relations'] = ((((s as any).stat_cfg ?? 0)?.['relations_mode']) ? ('bars') : ('table'));
  if (Object.keys((s as any).menu_bar_order ?? {}).length !== 8) {
    (s as any).menu_bar_order = undefined;
    ((s as any).menu_bar_order = (s as any).menu_bar_order ?? {})[0] = 'character';
    ((s as any).menu_bar_order = (s as any).menu_bar_order ?? {})[1] = 'looks';
    ((s as any).menu_bar_order = (s as any).menu_bar_order ?? {})[2] = 'purse';
    ((s as any).menu_bar_order = (s as any).menu_bar_order ?? {})[3] = 'phone';
    ((s as any).menu_bar_order = (s as any).menu_bar_order ?? {})[4] = 'journal';
    ((s as any).menu_bar_order = (s as any).menu_bar_order ?? {})[5] = 'magic';
    ((s as any).menu_bar_order = (s as any).menu_bar_order ?? {})[6] = 'clock';
    ((s as any).menu_bar_order = (s as any).menu_bar_order ?? {})[7] = 'settings';
  }
  if (Object.keys((s as any).status_bar_order ?? {}).length !== 11) {
    (s as any).status_bar_order = undefined;
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[0] = 'arousal';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[1] = 'pain';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[2] = 'health';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[3] = 'mana';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[4] = 'willpower';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[5] = 'stamina';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[6] = 'mood';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[7] = 'energy';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[8] = 'thirst';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[9] = 'sleep';
    ((s as any).status_bar_order = (s as any).status_bar_order ?? {})[10] = 'faith';
  }
  if (Object.keys((s as any).attr_bar_order ?? {}).length !== 12) {
    (s as any).attr_bar_order = undefined;
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[0] = 'inhib';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[1] = 'stren';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[2] = 'agil';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[3] = 'vital';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[4] = 'intel';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[5] = 'sprt';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[6] = 'react';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[7] = 'chrsm';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[8] = 'prcptn';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[9] = 'apprnc';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[10] = 'magik';
    ((s as any).attr_bar_order = (s as any).attr_bar_order ?? {})[11] = 'sucexcess';
  }
  if (Object.keys((s as any).image_order ?? {}).length !== 8) {
    (s as any).image_order = undefined;
    ((s as any).image_order = (s as any).image_order ?? {})[0] = 'face';
    ((s as any).image_order = (s as any).image_order ?? {})[1] = 'body';
    ((s as any).image_order = (s as any).image_order ?? {})[2] = 'coat';
    ((s as any).image_order = (s as any).image_order ?? {})[3] = 'clothes';
    ((s as any).image_order = (s as any).image_order ?? {})[4] = 'bra';
    ((s as any).image_order = (s as any).image_order ?? {})[5] = 'panties';
    ((s as any).image_order = (s as any).image_order ?? {})[6] = 'shoes';
    ((s as any).image_order = (s as any).image_order ?? {})[7] = 'bodysuit';
  }
  if (Object.keys((s as any).skill_group_order ?? {}).length !== 6) {
    (s as any).skill_group_order = undefined;
    ((s as any).skill_group_order = (s as any).skill_group_order ?? {})[0] = 'mental';
    ((s as any).skill_group_order = (s as any).skill_group_order ?? {})[1] = 'sport';
    ((s as any).skill_group_order = (s as any).skill_group_order ?? {})[2] = 'combat';
    ((s as any).skill_group_order = (s as any).skill_group_order ?? {})[3] = 'beauty';
    ((s as any).skill_group_order = (s as any).skill_group_order ?? {})[4] = 'artistic';
    ((s as any).skill_group_order = (s as any).skill_group_order ?? {})[5] = 'job';
  }
  if (Object.keys((s as any).skill_grp ?? {}).length === 0) {
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['mental_0'] = 'humint';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['mental_1'] = 'persuas';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['mental_2'] = 'observ';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['mental_3'] = 'splcstng';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_0'] = 'run';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_1'] = 'vball';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_2'] = 'ftbll';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_3'] = 'wrstlng';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_4'] = 'chess';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_5'] = 'icesktng';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_6'] = 'gaming';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_7'] = 'pool';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['sport_8'] = 'bkbll';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['combat_0'] = 'jab';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['combat_1'] = 'punch';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['combat_2'] = 'kick';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['combat_3'] = 'def';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['combat_4'] = 'shoot';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['combat_5'] = 'bushcraft';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['beauty_0'] = 'makupskl';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['beauty_1'] = 'danc';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['beauty_2'] = 'dancero';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['beauty_3'] = 'dancpol';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['beauty_4'] = 'cheer';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['beauty_5'] = 'mdlng';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['beauty_6'] = 'heels';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['artistic_0'] = 'vokal';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['artistic_1'] = 'instrmusic';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['artistic_2'] = 'photoskl';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['artistic_3'] = 'artskls';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['artistic_4'] = 'perform';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['artistic_5'] = 'musicprod';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['job_0'] = 'cleaning';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['job_1'] = 'compskl';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['job_2'] = 'comphckng';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['job_3'] = 'hndiwrk';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['job_4'] = 'sewng';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['job_5'] = 'servng';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['job_6'] = 'medcn';
    ((s as any).skill_grp = (s as any).skill_grp ?? {})['job_7'] = 'teacher';
  }
  if (Object.keys((s as any).rel_group_order ?? {}).length !== 9) {
    (s as any).rel_group_order = undefined;
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[0] = 'family';
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[1] = 'lovers';
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[2] = 'coolkid';
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[3] = 'jock';
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[4] = 'nerd';
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[5] = 'gopnik';
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[6] = 'staff';
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[7] = 'pavlovsk';
    ((s as any).rel_group_order = (s as any).rel_group_order ?? {})[8] = 'city';
  }
  if (Object.keys((s as any).rel_grp ?? {}).length === 0) {
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['family_0'] = 'A29';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['family_1'] = 'A34';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['family_2'] = 'A28';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['family_3'] = 'A33';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['family_4'] = 'A30';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['family_5'] = 'A54';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_0'] = 'A14';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_1'] = 'A4';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_2'] = 'A1';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_3'] = 'A25';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_4'] = 'A15';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_5'] = 'A17';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_6'] = 'A22';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_7'] = 'A139';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_8'] = 'A140';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_9'] = 'A146';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_10'] = 'A147';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['coolkid_11'] = 'A148';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_0'] = 'A23';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_1'] = 'A5';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_2'] = 'A13';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_3'] = 'A3';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_4'] = 'A8';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_5'] = 'A19';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_6'] = 'A18';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_7'] = 'A141';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_8'] = 'A149';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_9'] = 'A150';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['jock_10'] = 'A165';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_0'] = 'A2';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_1'] = 'A16';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_2'] = 'A6';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_3'] = 'A12';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_4'] = 'A142';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_5'] = 'A151';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_6'] = 'A152';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_7'] = 'A153';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['nerd_8'] = 'A240';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_0'] = 'A11';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_1'] = 'A9';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_2'] = 'A10';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_3'] = 'A21';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_4'] = 'A20';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_5'] = 'A24';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_6'] = 'A143';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_7'] = 'A144';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_8'] = 'A145';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_9'] = 'A154';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_10'] = 'A155';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_11'] = 'A156';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_12'] = 'A157';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_13'] = 'A158';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['gopnik_14'] = 'A189';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['staff_0'] = 'A69';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['staff_1'] = 'A26';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['staff_2'] = 'A7';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['staff_3'] = 'A159';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['staff_4'] = 'A133';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['pavlovsk_0'] = 'A112';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['pavlovsk_1'] = 'A57';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['pavlovsk_2'] = 'A219';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['pavlovsk_3'] = 'A89';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['pavlovsk_4'] = 'A217';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['pavlovsk_5'] = 'A27';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['pavlovsk_6'] = 'A60';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['pavlovsk_7'] = 'A63';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['city_0'] = 'A218';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['city_1'] = 'A220';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['city_2'] = 'A82';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['city_3'] = 'A84';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['city_4'] = 'A216';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['city_5'] = 'A241';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['city_6'] = 'A260';
    ((s as any).rel_grp = (s as any).rel_grp ?? {})['city_7'] = 'A204';
  }
  if (((s as any).stat_cfg ?? 0)?.['newline_alerts'] === 2) {
    ((s as any).sd = (s as any).sd ?? {})['sep_alert'] = ' ';
  } else {
    ((s as any).sd = (s as any).sd ?? {})['sep_alert'] = '<br>';
  }
  if (((s as any).stat_cfg ?? 0)?.['newline_texts'] === 1) {
    ((s as any).sd = (s as any).sd ?? {})['sep_text'] = '<br>';
  } else {
    if (((s as any).stat_cfg ?? 0)?.['newline_texts'] === 2) {
      ((s as any).sd = (s as any).sd ?? {})['sep_text'] = ' ';
    } else {
      if (((s as any).stat_cfg ?? 0)?.['msg_separator'] === 1) {
        ((s as any).sd = (s as any).sd ?? {})['sep_text'] = ' ';
      } else {
        ((s as any).sd = (s as any).sd ?? {})['sep_text'] = '<br>';
      }
    }
  }
  ((s as any).sd = (s as any).sd ?? {})['micon'] = 'height="' + String((((s as any).stat_cfg ?? 0)?.['menu_icon_height'])) + '" src="images/system/icons/menu/';
  ((s as any).sd = (s as any).sd ?? {})['skills_columns'] = (((s as any).stat_cfg ?? {})?.['skills_columns'] ?? 0) + 1;
  ((s as any).sd = (s as any).sd ?? {})['relations_columns'] = (((s as any).stat_cfg ?? {})?.['relations_columns'] ?? 0) + 1;
  if (Object.keys((s as any).stat_order ?? {}).length !== 14) {
    (s as any).stat_order = undefined;
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'weather'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'time'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'menu_bar'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'money'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'icons'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'alerts'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'status'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'attributes'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'calendar'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'texts'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'images'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'skills'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'relations'];
    (s as any).stat_order = [...((s as any).stat_order ?? []), 'loadsave'];
  }
  return;
  scene.build();
}

function enterFinalize(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cfg ?? 0)?.['android']) {
    (s as any).sd_android = ((s as any).sd_android ?? 0) + (' <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: savegame \u0027quicksave.sav\u0027 */ s.scene = { ...s.scene, mainText: \u0027Quicksave Done\u0027, curActs: [] }; return s; }); return false;">Q.S</a>  <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: if input(\u0027Input Anything to confirm Quick Load\u0027) /u003c> \u0027\u0027: opengame \u0027quicksave.sav\u0027 */ return s; }); return false;">Q.L</a>');
    (s as any).sd_android = qspFunc(s, 'stat_display', 'helper_font_wrap', ((s as any).sd_android ?? 0));
  }
  (s as any).sd_font_wrap_o = undefined;
  (s as any).sd_font_wrap_c = undefined;
  (s as any).sd_font_pct = undefined;
  (s as any).sep_margin_px = undefined;
  (s as any).stat_msg = (String(((s as any).stat_msg ?? 0)).split('  ').join(' '));
  (s as any).stat_msg = (String(((s as any).stat_msg ?? 0)).split('<br> ').join('<br>'));
  (s as any).stat_msg = qspFunc(s, 'cleanHTML', ((s as any).stat_msg ?? 0));
  if (((s as any).stat_cfg ?? 0)?.['android']) {
    (s as any).stat_msg = 'Android mode, <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_obnovit\u0027, \u0027\u0027); return false;">Refresh</a>' + ((s as any).stat_msg ?? 0);
  } else {
    scene.text(String((s as any).stat_msg ?? ''));
  }
  return;
  if (String((s as any).locArgs?.[0] ?? '') !== '') {
    return;
  }
  if (((s as any).debug ?? 0)?.['trace_shown'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDebugTrace(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  if (((s as any).stat_cfg ?? 0)?.['android'] === 0) {
    // TODO-QSP: clear
  }
  (s as any).sd_android = '<b>' + qspFunc(s, 'time', 'get_time_string') + '</b>';
  (s as any).sd_android = ((s as any).sd_android ?? 0) + ('' + ((s as any).weekName ?? 0) + ' ' + ((s as any).day ?? 0) + '/' + ((s as any).month ?? 0) + ', ' + qspFunc(s, 'money', 'format', ((s as any).money ?? 0)) + ', <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: clr */ s.scene = { ...s.scene, mainText: $sd_android, curActs: [] }; return s; }); return false;">Status</a>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat_display_compute', 'compute_data');
  if (((s as any).cfg_vars ?? 0)?.['faceturn'] === 1) {
    s.viewImage = String(qspFunc(s, '$face_image', '') || '');
  }
  if (((s as any).stat_cfg ?? 0)?.['font_size'] === -2) {
    (s as any).sd_font_pct = 70;
  } else {
    if (((s as any).stat_cfg ?? 0)?.['font_size'] === -1) {
      (s as any).sd_font_pct = 85;
    } else {
      if (((s as any).stat_cfg ?? 0)?.['font_size'] === 1) {
        (s as any).sd_font_pct = 115;
      } else {
        if (((s as any).stat_cfg ?? 0)?.['font_size'] === 2) {
          (s as any).sd_font_pct = 130;
        } else {
          if (((s as any).stat_cfg ?? 0)?.['font_size'] !== 0) {
            (s as any).sd_font_pct = (((s as any).stat_cfg ?? 0)?.['font_size']);
          } else {
            (s as any).sd_font_pct = 100;
          }
        }
      }
    }
  }
  (s as any).sd_font_wrap_o = ((((s as any).sd_font_pct ?? 0) !== 100) ? ('<span style="font-size:' + String(((s as any).sd_font_pct ?? 0)) + '%;">') : (''));
  (s as any).sd_font_wrap_c = ((((s as any).sd_font_wrap_o ?? 0) !== '') ? ('</span>') : (''));
  (s as any).sep_margin_px = 8 * ((s as any).sd_font_pct ?? 0) / 100;
  (s as any).stat_msg = '';
  if (((s as any).git_hash ?? 0) !== '') {
    (s as any).stat_msg = '<center>' + ((s as any).git_hash ?? 0) + '</center>';
  }
  ((s as any).sd_d = (s as any).sd_d ?? {})['prev'] = '';
  ((s as any).sd_d = (s as any).sd_d ?? {})['i'] = 0;
  ((s as any).sd_d = (s as any).sd_d ?? {})['max'] = 0;
  do {
    ((s as any).sd_d = (s as any).sd_d ?? {})['sec'] = qspUntranslated(s, "stat_order[sd_d['i']]", { location: "stat_display" });
    ((s as any).sd_d = (s as any).sd_d ?? {})['res'] = '';
    if (((s as any).stat_hide ?? 0)[((s as any).sd_d ?? 0)?.['sec']] === 0) {
      ((s as any).sd_d = (s as any).sd_d ?? {})['res'] = qspFunc(s, 'stat_display', 'sec_' + (((s as any).sd_d ?? 0)?.['sec']));
    }
    if (((s as any).sd_d ?? 0)?.['sec'] !== 'weather'  &&  ((s as any).sd_d ?? 0)?.['sec'] !== 'time'  &&  ((s as any).sd_d ?? 0)?.['sec'] !== 'money'  &&  ((s as any).sd_d ?? 0)?.['sec'] !== 'loadsave'  &&  ((s as any).sd_d ?? 0)?.['sec'] !== 'menu_bar') {
      if (((s as any).stat_hide ?? 0)[((s as any).sd_d ?? 0)?.['sec']] === 0  ||  ((s as any).stat_cfg ?? 0)?.['sec_headers'] === 2) {
        ((s as any).sd_d = (s as any).sd_d ?? {})['res'] = qspFunc(s, 'stat_display', 'helper_section_header', (((s as any).sd_d ?? 0)?.['sec']), (((s as any).sd_d ?? 0)?.['res']));
      }
    }
    if (((s as any).sd_d ?? 0)?.['res'] !== '') {
      ((s as any).sd_d = (s as any).sd_d ?? {})['cur'] = ((((s as any).sd_st ?? 0)[((s as any).sd_d ?? 0)?.['sec']] !== '') ? ((((s as any).sd_st ?? 0)?.[(((s as any).sd_d ?? 0)?.['sec'])] ?? 0)) : ('text'));
      if (((s as any).sd_d ?? 0)?.['prev'] !== '') {
        (s as any).stat_msg = ((s as any).stat_msg ?? 0) + (qspFunc(s, 'stat_display', 'get_separator', (((s as any).sd_d ?? 0)?.['prev']), (((s as any).sd_d ?? 0)?.['cur'])));
      }
      ((s as any).sd_d = (s as any).sd_d ?? {})['prev'] = (((s as any).sd_d ?? 0)?.['cur']);
    }
    (s as any).stat_msg = ((s as any).stat_msg ?? 0) + ((((s as any).sd_d ?? 0)?.['res']));
    ((s as any).sd_d = (s as any).sd_d ?? {})['i'] = ((s as any).sd_d['i'] ?? 0) + (1);
    (s as any).sd_d = undefined;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinalize(s, scene); (s as any).locArgs = __savedLocArgs; }
  } while (((s as any).sd_d ?? 0)?.['i'] < ((s as any).sd_d ?? 0)?.['max']);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).settingmode ?? 0) === 1) {
    return;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'helper_bar':
      enterHelperBar(s, scene);
      break;
    case 'helper_bar_cell':
      enterHelperBarCell(s, scene);
      break;
    case 'helper_skill_entry':
      enterHelperSkillEntry(s, scene);
      break;
    case 'helper_rel_entry':
      enterHelperRelEntry(s, scene);
      break;
    case 'helper_toggle':
      enterHelperToggle(s, scene);
      break;
    case 'helper_rel_name':
      enterHelperRelName(s, scene);
      break;
    case 'helper_resolve_align':
      enterHelperResolveAlign(s, scene);
      break;
    case 'helper_align_wrap':
      enterHelperAlignWrap(s, scene);
      break;
    case 'helper_font_wrap':
      enterHelperFontWrap(s, scene);
      break;
    case 'helper_section_header':
      enterHelperSectionHeader(s, scene);
      break;
    case 'get_separator':
      enterGetSeparator(s, scene);
      break;
    case 'sec_weather':
      enterSecWeather(s, scene);
      break;
    case 'sec_time':
      enterSecTime(s, scene);
      break;
    case 'sec_money':
      enterSecMoney(s, scene);
      break;
    case 'sec_loadsave':
      enterSecLoadsave(s, scene);
      break;
    case 'sec_menu_bar':
      enterSecMenuBar(s, scene);
      break;
    case 'sec_status':
      enterSecStatus(s, scene);
      break;
    case 'sec_attributes':
      enterSecAttributes(s, scene);
      break;
    case 'sec_icons':
      enterSecIcons(s, scene);
      break;
    case 'sec_alerts':
      enterSecAlerts(s, scene);
      break;
    case 'sec_calendar':
      enterSecCalendar(s, scene);
      break;
    case 'sec_skills':
      enterSecSkills(s, scene);
      break;
    case 'sec_relations':
      enterSecRelations(s, scene);
      break;
    case 'sec_texts':
      enterSecTexts(s, scene);
      break;
    case 'sec_images':
      enterSecImages(s, scene);
      break;
    case 'debug_trace':
      enterDebugTrace(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'finalize':
      enterFinalize(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stat_display: LocationDef = {
  name: 'stat_display',
  title: '<center>',
  region: 'other',
  enter: enter,
};
