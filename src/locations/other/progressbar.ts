import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).color_value = qspUntranslated(s, "ARGS[2]", { location: "progressbar" });
  if (((((s as any).color_gradient ?? 0)).slice((1)-1, ((1)-1)+(1))) === '#') {
    return;
  }
  if (((s as any).color_thresholds ?? 0) !== '') {
    (s as any).color_thr_pos = qspUntranslated(s, "instr(color_thr_work, ',')", { location: "progressbar" });
    (s as any).color_thr[0] = parseFloat(qspUntranslated(s, "\u00000\u0000", { location: "progressbar" }));
    (s as any).color_thr_pos = qspUntranslated(s, "instr(color_thr_work, ',')", { location: "progressbar" });
    (s as any).color_thr[1] = parseFloat(qspUntranslated(s, "\u00000\u0000", { location: "progressbar" }));
    (s as any).color_thr_pos = qspUntranslated(s, "instr(color_thr_work, ',')", { location: "progressbar" });
    (s as any).color_thr[2] = parseFloat(qspUntranslated(s, "\u00000\u0000", { location: "progressbar" }));
    (s as any).color_thr[3] = qspUntranslated(s, "val(color_thr_work)", { location: "progressbar" });
  } else {
    (s as any).color_thr[0] = 15;
    (s as any).color_thr[1] = 35;
    (s as any).color_thr[2] = 65;
    (s as any).color_thr[3] = 85;
  }
  if (((s as any).color_gradient ?? 0) === 'positive') {
    if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
    } else {
      if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
      }
      if (((s as any).color_gradient ?? 0) === 'negative') {
        if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
        } else {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
          }
          if (((s as any).color_gradient ?? 0) === 'centrum_positive') {
            if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
            } else {
              if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
              }
              if (((s as any).color_gradient ?? 0) === 'centrum_negative') {
                if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
                } else {
                  if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
                  }
                  if (((s as any).color_gradient ?? 0) === 'smooth_positive'  ||  ((s as any).color_gradient ?? 0) === 'smooth_negative') {
                    // TODO-QSP: $color_stop_hex[0] = $theme_hex['v_neg']
                    // TODO-QSP: $color_stop_hex[1] = $theme_hex['neg']
                    // TODO-QSP: $color_stop_hex[2] = $theme_hex['neutral']
                    // TODO-QSP: $color_stop_hex[3] = $theme_hex['pos']
                    // TODO-QSP: $color_stop_hex[4] = $theme_hex['v_pos']
                    (s as any).color_stop_at[0] = 0;
                    (s as any).color_stop_at[1] = ((s as any).color_thr ?? 0)[0] + (((s as any).color_thr ?? 0)[1] - ((s as any).color_thr ?? 0)[0]) / 2;
                    (s as any).color_stop_at[2] = ((s as any).color_thr ?? 0)[1] + (((s as any).color_thr ?? 0)[2] - ((s as any).color_thr ?? 0)[1]) / 2;
                    (s as any).color_stop_at[3] = ((s as any).color_thr ?? 0)[2] + (((s as any).color_thr ?? 0)[3] - ((s as any).color_thr ?? 0)[2]) / 2;
                    (s as any).color_stop_at[4] = 100;
                    if (((s as any).color_gradient ?? 0) === 'smooth_negative') {
                      // TODO-QSP: $color_stop_hex[0] = $theme_hex['v_pos']
                      // TODO-QSP: $color_stop_hex[1] = $theme_hex['pos']
                      // TODO-QSP: $color_stop_hex[2] = $theme_hex['neutral']
                      // TODO-QSP: $color_stop_hex[3] = $theme_hex['neg']
                      // TODO-QSP: $color_stop_hex[4] = $theme_hex['v_neg']
                    }
                    (s as any).color_stop_upper = 4;
                    (s as any).color_stop_lower = 0;
                    if (((s as any).color_value ?? 0) <= ((s as any).color_stop_at ?? 0)[0]) {
                    } else {
                      (s as any).color_stop_i = 1;
                      // TODO-QSP: :color_smooth_find_loop
                      if (((s as any).color_stop_i ?? 0) <= 4) {
                        if (((s as any).color_stop_at ?? 0)?.[String((s as any).color_stop_i ?? 0)] >= ((s as any).color_value ?? 0)) {
                          (s as any).color_stop_upper = ((s as any).color_stop_i ?? 0);
                          (s as any).color_stop_lower = ((s as any).color_stop_i ?? 0) - 1;
                        } else {
                          (s as any).color_stop_i = ((s as any).color_stop_i ?? 0) + (1);
                          // TODO-QSP: jump 'color_smooth_find_loop'
                        }
                      }
                      (s as any).color_stop_span = ((s as any).color_stop_at ?? 0)?.[String((s as any).color_stop_upper ?? 0)] - ((s as any).color_stop_at ?? 0)?.[String((s as any).color_stop_lower ?? 0)];
                      if (((s as any).color_stop_span ?? 0) > 0) {
                        (s as any).color_stop_ratio = (((s as any).color_value ?? 0) - ((s as any).color_stop_at ?? 0)?.[String((s as any).color_stop_lower ?? 0)]) * 100 / ((s as any).color_stop_span ?? 0);
                      } else {
                        (s as any).color_stop_ratio = 0;
                      }
                    }
                  } else {
                    if (((s as any).theme ?? 0)?.['is_dark']) {
                    }
                  }
                  return;
                }
                (s as any).progressbar['gradient'] = ((s as any).locArgs?.[0] ?? 0);
                (s as any).progressbar['raw_value'] = qspUntranslated(s, "ARGS[1]", { location: "progressbar" });
                (s as any).progressbar['max_value'] = qspUntranslated(s, "ARGS[2]", { location: "progressbar" });
                (s as any).progressbar['phantom_raw'] = qspUntranslated(s, "ARGS[3]", { location: "progressbar" });
                (s as any).progressbar['overlay'] = 0;
                (s as any).progressbar['overlay_gradient'] = ((((s as any).locArgs?.[5] ?? 0) === '') ? ('accent') : (((s as any).locArgs?.[5] ?? 0)));
                (s as any).progressbar['label_pos'] = ((((s as any).locArgs?.[6] ?? 0) === '') ? ('auto') : (((s as any).locArgs?.[6] ?? 0)));
                (s as any).progressbar['thresholds'] = ((s as any).locArgs?.[7] ?? 0);
                (s as any).progressbar['bar_width_val'] = ((((s as any).stat_cfg ?? 0)?.['bar_width'] > 0) ? (((s as any).stat_cfg ?? 0)?.['bar_width']) : (200));
                (s as any).progressbar['bar_width_css'] = String(((s as any).progressbar ?? 0)?.['bar_width_val']) + '((s as any).px ?? 0)';
                (s as any).progressbar['bar_width_attr'] = qspUntranslated(s, "str(progressbar['bar_width_val'])", { location: "progressbar" });
                if (((s as any).progressbar ?? 0)?.['max_value'] > 0) {
                  (s as any).progressbar['value'] = ((s as any).min ?? 0)(100, ((s as any).progressbar ?? 0)?.['raw_value'] * 100 / ((s as any).progressbar ?? 0)?.['max_value']);
                } else {
                  (s as any).progressbar['value'] = qspUntranslated(s, "min(max(0, progressbar['raw_value']), 100)", { location: "progressbar" });
                }
                (s as any).progressbar['phantom'] = ((s as any).min ?? 0)(((s as any).max ?? 0)(((s as any).progressbar ?? 0)?.['value'], ((s as any).progressbar ?? 0)?.['phantom_raw']), 100) - ((s as any).progressbar ?? 0)?.['value'];
                (s as any).progressbar['label'] = qspUntranslated(s, "str(progressbar['raw_value'])", { location: "progressbar" });
                if (((s as any).progressbar ?? 0)?.['phantom_raw'] > 0  &&  ((s as any).progressbar ?? 0)?.['phantom_raw'] !== ((s as any).progressbar ?? 0)?.['raw_value']) {
                  (s as any).progressbar['label'] = ((s as any).progressbar['label'] ?? 0) + (' (<<progressbar[\'phantom_raw\']>>)');
                }
                (s as any).progressbar['label_raw'] = ((s as any).progressbar ?? 0)?.['label'];
                if (((s as any).progressbar ?? 0)?.['label_raw'] !== ''  &&  ((s as any).sd_font_pct ?? 0) !== 100) {
                  (s as any).progressbar['label'] = '<span style="font-size:\' + $str(sd_font_pct) + \'%;">\' + $progressbar[\'label_raw\'] + \'</span>';
                }
                if (((s as any).stat_cfg ?? 0)?.['font_size'] > 0) {
                  (s as any).progressbar['label_px'] = ((((s as any).progressbar ?? 0)?.['label']).length) * (((s as any).stat_cfg ?? 0)?.['font_size'] + 2);
                } else {
                  (s as any).progressbar['label_px'] = ((((s as any).progressbar ?? 0)?.['label']).length) * 9;
                }
                (s as any).progressbar['label_width_pct'] = ((s as any).progressbar ?? 0)?.['label_px'] * 100 / ((s as any).progressbar ?? 0)?.['bar_width_val'];
                if (((s as any).progressbar ?? 0)?.['label'] === ''  ||  ((s as any).progressbar ?? 0)?.['label_pos'] === 'none') {
                  (s as any).progressbar['label_pos'] = 'none';
                } else {
                  (s as any).progressbar['label_pos'] = 'bg';
                  if (((s as any).progressbar ?? 0)?.['label_pos'] === 'auto'  ||  ((s as any).progressbar ?? 0)?.['label_pos'] === 'inside') {
                    if (((s as any).progressbar ?? 0)?.['value'] >= ((s as any).progressbar ?? 0)?.['label_width_pct']) {
                      (s as any).progressbar['label_pos'] = 'bar';
                    } else {
                      (s as any).progressbar['label_pos'] = 'phantom';
                      (s as any).progressbar['label_pos'] = 'bg';
                    }
                  }
                  if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bg'  &&  (((s as any).progressbar ?? 0)?.['value'] + ((s as any).progressbar ?? 0)?.['phantom']) >= 100) {
                    if (((s as any).progressbar ?? 0)?.['phantom'] > 0) {
                      (s as any).progressbar['label_pos'] = 'phantom';
                    } else {
                      (s as any).progressbar['label_pos'] = 'bar';
                    }
                  }
                  (s as any).progressbar['bar_color'] = qspFunc(s, 'progressbar', 'color', ((s as any).progressbar ?? 0)?.['gradient'], ((s as any).progressbar ?? 0)?.['value'], ((s as any).progressbar ?? 0)?.['thresholds']);
                  if (((s as any).progressbar ?? 0)?.['overlay'] > 0) {
                    (s as any).progressbar['overlay_color'] = qspFunc(s, 'progressbar', 'color', ((s as any).progressbar ?? 0)?.['overlay_gradient'], ((s as any).progressbar ?? 0)?.['overlay']);
                  }
                  if (((s as any).progressbar ?? 0)?.['phantom'] > 0) {
                    if (((s as any).theme ?? 0)?.['is_dark']) {
                      (s as any).progressbar['phantom_color'] = qspFunc(s, 'math', 'color_mix', ((s as any).progressbar ?? 0)?.['bar_color'], '#000000', 50);
                    } else {
                      (s as any).progressbar['phantom_color'] = qspFunc(s, 'math', 'color_mix', ((s as any).progressbar ?? 0)?.['bar_color'], '#FFFFFF', 50);
                    }
                  }
                  if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bar'  ||  ((s as any).progressbar ?? 0)?.['label_pos'] === 'phantom') {
                    (s as any).pb_lc_bar_r = (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00000\u0000", { location: "progressbar" })))) + 1 * 16 + (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00001\u0000", { location: "progressbar" })))) + 1;
                    (s as any).pb_lc_bar_g = (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00000\u0000", { location: "progressbar" })))) + 1 * 16 + (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00001\u0000", { location: "progressbar" })))) + 1;
                    (s as any).pb_lc_bar_b = (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00000\u0000", { location: "progressbar" })))) + 1 * 16 + (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00001\u0000", { location: "progressbar" })))) + 1;
                    (s as any).pb_lc_bar_lum = (((s as any).pb_lc_bar_r ?? 0) * 299 + ((s as any).pb_lc_bar_g ?? 0) * 587 + ((s as any).pb_lc_bar_b ?? 0) * 114) / 1000;
                    (s as any).pb_lc_font_r = (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00000\u0000", { location: "progressbar" })))) + 1 * 16 + (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00001\u0000", { location: "progressbar" })))) + 1;
                    (s as any).pb_lc_font_g = (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00000\u0000", { location: "progressbar" })))) + 1 * 16 + (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00001\u0000", { location: "progressbar" })))) + 1;
                    (s as any).pb_lc_font_b = (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00000\u0000", { location: "progressbar" })))) + 1 * 16 + (('123456789ABCDEF').indexOf((qspUntranslated(s, "\u00001\u0000", { location: "progressbar" })))) + 1;
                    (s as any).pb_lc_font_lum = (((s as any).pb_lc_font_r ?? 0) * 299 + ((s as any).pb_lc_font_g ?? 0) * 587 + ((s as any).pb_lc_font_b ?? 0) * 114) / 1000;
                    (s as any).pb_lc_diff = ((s as any).pb_lc_bar_lum ?? 0) - ((s as any).pb_lc_font_lum ?? 0);
                    if (((s as any).pb_lc_diff ?? 0) < 0) {
                      (s as any).pb_lc_diff = -1 * ((s as any).pb_lc_diff ?? 0);
                    }
                    if (((s as any).pb_lc_diff ?? 0) >= 80) {
                    } else {
                      if (((s as any).theme ?? 0)?.['is_dark']) {
                      }
                    }
                    if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bar') {
                      (s as any).progressbar['label_on_color'] = ((s as any).pb_lc_result ?? 0);
                    } else {
                      (s as any).progressbar['phantom_on_color'] = ((s as any).pb_lc_result ?? 0);
                    }
                  }
                  (s as any).progressbar['mode'] = ((((s as any).ARGS ?? 0)[8] > 0) ? (((s as any).ARGS ?? 0)[8] - 1) : (0));
                  if (((s as any).progressbar ?? 0)?.['mode'] === 2) {
                    if (((s as any).progressbar ?? 0)?.['bar_color'] !== '') {
                    }
                  } else {
                    if (((s as any).stat_cfg ?? 0)?.['bar_size'] === 1) {
                      (s as any).bar_font_size = 2;
                    } else {
                      (s as any).bar_font_size = 3;
                    }
                    if (((s as any).stat_cfg ?? 0)?.['font_size'] > 0  &&  ((s as any).stat_cfg ?? 0)?.['font_size'] < ((s as any).bar_font_size ?? 0)) {
                      (s as any).bar_font_size = ((s as any).stat_cfg ?? 0)?.['font_size'];
                    }
                    (s as any).bar_char_index = 0;
                    (s as any).bar_char_step = 5;
                    (s as any).bar_phantom_end = ((s as any).progressbar ?? 0)?.['value'] + ((s as any).progressbar ?? 0)?.['phantom'];
                    // TODO-QSP: :progressbar_text_loop
                    if (((s as any).bar_char_index ?? 0) < ((s as any).progressbar ?? 0)?.['value']) {
                      // TODO-QSP: $bar_html += '█'
                    } else {
                      // TODO-QSP: $bar_html += '░'
                      // TODO-QSP: $bar_html += '_'
                    }
                    (s as any).bar_char_index = ((s as any).bar_char_index ?? 0) + (((s as any).bar_char_step ?? 0));
                    if (((s as any).bar_char_index ?? 0) < 100) {
                      // TODO-QSP: jump 'progressbar_text_loop'
                    }
                    // TODO-QSP: $bar_html += ' </font>'
                    // TODO-QSP: $bar_html += '<font color=<<$progressbar[''bar_color'']>>><<$progressbar[''label'']>></font>'
                    if (((s as any).progressbar ?? 0)?.['overlay'] > 0) {
                      // TODO-QSP: $bar_html += ' <font color=<<$progressbar[''overlay_color'']>>>(<<progressbar[''overlay'']>>)</font>...
                    }
                    (s as any).bar_bg_pct = 100 - ((s as any).progressbar ?? 0)?.['value'] - ((s as any).progressbar ?? 0)?.['phantom'];
                    if (((s as any).progressbar ?? 0)?.['overlay'] > 0) {
                      // TODO-QSP: $bar_html += '<div style="position: relative; width: <<$progressbar[''bar_width_css'']>>; display: i...
                      // TODO-QSP: $bar_html += '<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; ...
                      if (((s as any).progressbar ?? 0)?.['value'] > 0) {
                        // TODO-QSP: $bar_html += '<td bgcolor="<<$progressbar[''bar_color'']>>" width="<<progressbar[''value'']>>%" styl...
                      }
                      if (((s as any).progressbar ?? 0)?.['phantom'] > 0) {
                        // TODO-QSP: $bar_html += '<td bgcolor="<<$progressbar[''phantom_color'']>>" width="<<progressbar[''phantom'']>>%...
                      }
                      if (((s as any).bar_bg_pct ?? 0) > 0) {
                        // TODO-QSP: $bar_html += '<td width="<<bar_bg_pct>>%" style="<<$pb_fs>>"></td>'
                      }
                      // TODO-QSP: $bar_html += '</tr></table>'
                      // TODO-QSP: $bar_html += '<div style="position: absolute; bottom: 0; left: 0; width: <<progressbar[''overlay'']>...
                      if (((s as any).progressbar ?? 0)?.['label_pos'] !== 'none') {
                        if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bar') {
                          // TODO-QSP: $bar_html += '<div style="position: absolute; top: 0; left: 0; width: <<progressbar[''value'']>>%; h...
                          // TODO-QSP: $bar_html += '<font color="<<$progressbar[''label_on_color'']>>"><<$progressbar[''label_raw'']>></fo...
                        } else {
                          // TODO-QSP: $bar_html += '<div style="position: absolute; top: 0; left: <<progressbar[''value'']>>%; height: 100...
                          // TODO-QSP: $bar_html += '&nbsp;<font color="<<$progressbar[''phantom_on_color'']>>"><<$progressbar[''label_raw'...
                          (s as any).pb2d_txt_left = ((s as any).progressbar ?? 0)?.['value'] + ((s as any).progressbar ?? 0)?.['phantom'];
                          // TODO-QSP: $bar_html += '<div style="position: absolute; top: 0; left: <<pb2d_txt_left>>%; height: 100%; z-inde...
                          // TODO-QSP: $bar_html += '&nbsp;<<$progressbar[''label_raw'']>>'
                        }
                        // TODO-QSP: $bar_html += '</div>'
                      }
                      // TODO-QSP: $bar_html += '</div>'
                    } else {
                      // TODO-QSP: $bar_html += '<table cellpadding="0" cellspacing="0" width="<<$progressbar[''bar_width_attr'']>>"><t...
                      if (((s as any).progressbar ?? 0)?.['value'] > 0) {
                        // TODO-QSP: $bar_html += '<td bgcolor="<<$progressbar[''bar_color'']>>" width="<<progressbar[''value'']>>%" styl...
                        if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bar') {
                          // TODO-QSP: $bar_html += ' align="right"><font color="<<$progressbar[''label_on_color'']>>"><<$progressbar[''lab...
                        } else {
                          // TODO-QSP: $bar_html += '>&nbsp;'
                        }
                        // TODO-QSP: $bar_html += '</td>'
                      }
                      if (((s as any).progressbar ?? 0)?.['phantom'] > 0) {
                        // TODO-QSP: $bar_html += '<td bgcolor="<<$progressbar[''phantom_color'']>>" width="<<progressbar[''phantom'']>>%...
                        if (((s as any).progressbar ?? 0)?.['label_pos'] === 'phantom') {
                          // TODO-QSP: $bar_html += '>&nbsp;<font color="<<$progressbar[''phantom_on_color'']>>"><<$progressbar[''label_raw...
                        } else {
                          // TODO-QSP: $bar_html += '>&nbsp;'
                        }
                        // TODO-QSP: $bar_html += '</td>'
                      }
                      if (((s as any).bar_bg_pct ?? 0) > 0) {
                        // TODO-QSP: $bar_html += '<td width="<<bar_bg_pct>>%" style="white-space: nowrap; overflow: hidden; <<$pb_fs>>"'
                        if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bg') {
                          // TODO-QSP: $bar_html += '>&nbsp;<<$progressbar[''label_raw'']>>'
                        } else {
                          // TODO-QSP: $bar_html += '>&nbsp;'
                        }
                        // TODO-QSP: $bar_html += '</td>'
                      }
                      // TODO-QSP: $bar_html += '</tr></table>'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const progressbar: LocationDef = {
  name: 'progressbar',
  region: 'other',
  enter: enter,
};
