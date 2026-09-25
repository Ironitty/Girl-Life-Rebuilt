import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterColor(s: GameState, scene: SceneBuilder): void {
  (s as any).color_gradient = ((s as any).locArgs?.[1] ?? 0);
  (s as any).color_value = ((s as any).locArgs?.[2] ?? 0);
  (s as any).color_thresholds = ((s as any).locArgs?.[3] ?? 0);
  if ((String(((s as any).color_gradient ?? 0)).slice((1)-1, ((1)-1)+(1))) === '#') {
    (s as any).result = ((s as any).color_gradient ?? 0);
    (s as any).color_gradient = undefined;
    (s as any).color_value = undefined;
    (s as any).color_thresholds = undefined;
    return;
  }
  if (((s as any).color_thresholds ?? 0) !== '') {
    (s as any).color_thr_work = ((s as any).color_thresholds ?? 0);
    (s as any).color_thr_pos = ((String(((s as any).color_thr_work ?? 0)).indexOf(String(','))) + 1);
    ((s as any).color_thr = (s as any).color_thr ?? {})[0] = parseFloat((String(((s as any).color_thr_work ?? 0)).slice((1)-1, ((1)-1)+(((s as any).color_thr_pos ?? 0) - 1))));
    (s as any).color_thr_work = (String(((s as any).color_thr_work ?? 0)).slice((((s as any).color_thr_pos ?? 0) + 1)-1, ((((s as any).color_thr_pos ?? 0) + 1)-1)+(100)));
    (s as any).color_thr_pos = ((String(((s as any).color_thr_work ?? 0)).indexOf(String(','))) + 1);
    ((s as any).color_thr = (s as any).color_thr ?? {})[1] = parseFloat((String(((s as any).color_thr_work ?? 0)).slice((1)-1, ((1)-1)+(((s as any).color_thr_pos ?? 0) - 1))));
    (s as any).color_thr_work = (String(((s as any).color_thr_work ?? 0)).slice((((s as any).color_thr_pos ?? 0) + 1)-1, ((((s as any).color_thr_pos ?? 0) + 1)-1)+(100)));
    (s as any).color_thr_pos = ((String(((s as any).color_thr_work ?? 0)).indexOf(String(','))) + 1);
    ((s as any).color_thr = (s as any).color_thr ?? {})[2] = parseFloat((String(((s as any).color_thr_work ?? 0)).slice((1)-1, ((1)-1)+(((s as any).color_thr_pos ?? 0) - 1))));
    (s as any).color_thr_work = (String(((s as any).color_thr_work ?? 0)).slice((((s as any).color_thr_pos ?? 0) + 1)-1, ((((s as any).color_thr_pos ?? 0) + 1)-1)+(100)));
    ((s as any).color_thr = (s as any).color_thr ?? {})[3] = parseFloat(((s as any).color_thr_work ?? 0));
    (s as any).color_thr_work = undefined;
    (s as any).color_thr_pos = undefined;
  } else {
    ((s as any).color_thr = (s as any).color_thr ?? {})[0] = 15;
    ((s as any).color_thr = (s as any).color_thr ?? {})[1] = 35;
    ((s as any).color_thr = (s as any).color_thr ?? {})[2] = 65;
    ((s as any).color_thr = (s as any).color_thr ?? {})[3] = 85;
  }
  if (((s as any).color_gradient ?? 0) === 'positive') {
    if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
      (s as any).result = (((s as any).theme_hex ?? 0)?.['v_neg']);
    } else {
      if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[1]) {
        (s as any).result = (((s as any).theme_hex ?? 0)?.['neg']);
      } else {
        if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
          (s as any).result = (((s as any).theme_hex ?? 0)?.['neutral']);
        } else {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[3]) {
            (s as any).result = (((s as any).theme_hex ?? 0)?.['pos']);
          } else {
            (s as any).result = (((s as any).theme_hex ?? 0)?.['v_pos']);
          }
        }
      }
    }
  } else {
    if (((s as any).color_gradient ?? 0) === 'negative') {
      if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
        (s as any).result = (((s as any).theme_hex ?? 0)?.['v_pos']);
      } else {
        if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[1]) {
          (s as any).result = (((s as any).theme_hex ?? 0)?.['pos']);
        } else {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
            (s as any).result = (((s as any).theme_hex ?? 0)?.['neutral']);
          } else {
            if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[3]) {
              (s as any).result = (((s as any).theme_hex ?? 0)?.['neg']);
            } else {
              (s as any).result = (((s as any).theme_hex ?? 0)?.['v_neg']);
            }
          }
        }
      }
    } else {
      if (((s as any).color_gradient ?? 0) === 'centrum_positive') {
        if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
          (s as any).result = (((s as any).theme_hex ?? 0)?.['v_neg']);
        } else {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[1]) {
            (s as any).result = (((s as any).theme_hex ?? 0)?.['neutral']);
          } else {
            if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
              (s as any).result = (((s as any).theme_hex ?? 0)?.['v_pos']);
            } else {
              if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[3]) {
                (s as any).result = (((s as any).theme_hex ?? 0)?.['neutral']);
              } else {
                (s as any).result = (((s as any).theme_hex ?? 0)?.['v_neg']);
              }
            }
          }
        }
      } else {
        if (((s as any).color_gradient ?? 0) === 'centrum_negative') {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
            (s as any).result = (((s as any).theme_hex ?? 0)?.['v_pos']);
          } else {
            if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[1]) {
              (s as any).result = (((s as any).theme_hex ?? 0)?.['neutral']);
            } else {
              if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
                (s as any).result = (((s as any).theme_hex ?? 0)?.['v_neg']);
              } else {
                if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[3]) {
                  (s as any).result = (((s as any).theme_hex ?? 0)?.['neutral']);
                } else {
                  (s as any).result = (((s as any).theme_hex ?? 0)?.['v_pos']);
                }
              }
            }
          }
        } else {
          if (((s as any).color_gradient ?? 0) === 'smooth_positive'  ||  ((s as any).color_gradient ?? 0) === 'smooth_negative') {
            ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[0] = (((s as any).theme_hex ?? 0)?.['v_neg']);
            ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[1] = (((s as any).theme_hex ?? 0)?.['neg']);
            ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[2] = (((s as any).theme_hex ?? 0)?.['neutral']);
            ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[3] = (((s as any).theme_hex ?? 0)?.['pos']);
            ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[4] = (((s as any).theme_hex ?? 0)?.['v_pos']);
            ((s as any).color_stop_at = (s as any).color_stop_at ?? {})[0] = 0;
            ((s as any).color_stop_at = (s as any).color_stop_at ?? {})[1] = ((s as any).color_thr ?? 0)[0] + (((s as any).color_thr ?? 0)[1] - ((s as any).color_thr ?? 0)[0]) / 2;
            ((s as any).color_stop_at = (s as any).color_stop_at ?? {})[2] = ((s as any).color_thr ?? 0)[1] + (((s as any).color_thr ?? 0)[2] - ((s as any).color_thr ?? 0)[1]) / 2;
            ((s as any).color_stop_at = (s as any).color_stop_at ?? {})[3] = ((s as any).color_thr ?? 0)[2] + (((s as any).color_thr ?? 0)[3] - ((s as any).color_thr ?? 0)[2]) / 2;
            ((s as any).color_stop_at = (s as any).color_stop_at ?? {})[4] = 100;
            if (((s as any).color_gradient ?? 0) === 'smooth_negative') {
              ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[0] = (((s as any).theme_hex ?? 0)?.['v_pos']);
              ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[1] = (((s as any).theme_hex ?? 0)?.['pos']);
              ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[2] = (((s as any).theme_hex ?? 0)?.['neutral']);
              ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[3] = (((s as any).theme_hex ?? 0)?.['neg']);
              ((s as any).color_stop_hex = (s as any).color_stop_hex ?? {})[4] = (((s as any).theme_hex ?? 0)?.['v_neg']);
            }
            (s as any).color_stop_upper = 4;
            (s as any).color_stop_lower = 0;
            if (((s as any).color_value ?? 0) <= ((s as any).color_stop_at ?? 0)[0]) {
              (s as any).result = (((s as any).color_stop_hex ?? 0)?.[0] ?? 0);
            } else {
              if (((s as any).color_value ?? 0) >= ((s as any).color_stop_at ?? 0)[4]) {
                (s as any).result = (((s as any).color_stop_hex ?? 0)?.[4] ?? 0);
              } else {
                (s as any).color_stop_i = 1;
                while (true) {
                  if (((s as any).color_stop_i ?? 0) <= 4) {
                    if (((s as any).color_stop_at ?? 0)?.[String((s as any).color_stop_i ?? 0)] >= ((s as any).color_value ?? 0)) {
                      (s as any).color_stop_upper = ((s as any).color_stop_i ?? 0);
                      (s as any).color_stop_lower = ((s as any).color_stop_i ?? 0) - 1;
                    } else {
                      (s as any).color_stop_i = ((s as any).color_stop_i ?? 0) + (1);
                      break;
                    }
                  }
                  (s as any).color_stop_span = (((s as any).color_stop_at ?? 0)?.[String((s as any).color_stop_upper ?? 0)] ?? 0) - (((s as any).color_stop_at ?? 0)?.[String((s as any).color_stop_lower ?? 0)] ?? 0);
                  if (((s as any).color_stop_span ?? 0) > 0) {
                    (s as any).color_stop_ratio = (((s as any).color_value ?? 0) - (((s as any).color_stop_at ?? 0)?.[String((s as any).color_stop_lower ?? 0)] ?? 0)) * 100 / ((s as any).color_stop_span ?? 0);
                  } else {
                    (s as any).color_stop_ratio = 0;
                  }
                  (s as any).result = qspFunc(s, 'math', 'color_mix', (((s as any).color_stop_hex ?? 0)?.[String((s as any).color_stop_lower ?? 0)] ?? 0), (((s as any).color_stop_hex ?? 0)?.[String((s as any).color_stop_upper ?? 0)] ?? 0), ((s as any).color_stop_ratio ?? 0));
                }
              }
            }
            (s as any).color_stop_hex = undefined;
            (s as any).color_stop_at = undefined;
            (s as any).color_stop_upper = undefined;
            (s as any).color_stop_lower = undefined;
            (s as any).color_stop_i = undefined;
            (s as any).color_stop_span = undefined;
            (s as any).color_stop_ratio = undefined;
          } else {
            if ((String(((s as any).color_gradient ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'mono:') {
              (s as any).color_mono_key = (String(((s as any).color_gradient ?? 0)).slice((6)-1, ((6)-1)+((String(((s as any).color_gradient ?? 0)).length) - 5)));
              (s as any).color_mono_full = (((s as any).theme_hex ?? 0)?.[String((s as any).color_mono_key ?? 0)] ?? 0);
              if (((s as any).theme ?? 0)?.['is_dark']) {
                (s as any).color_mono_base = qspFunc(s, 'math', 'color_mix', ((s as any).color_mono_full ?? 0), '#000000', 75);
              } else {
                (s as any).color_mono_base = qspFunc(s, 'math', 'color_mix', ((s as any).color_mono_full ?? 0), '#FFFFFF', 75);
              }
              (s as any).result = qspFunc(s, 'math', 'color_mix', ((s as any).color_mono_base ?? 0), ((s as any).color_mono_full ?? 0), ((s as any).color_value ?? 0));
              (s as any).color_mono_key = undefined;
              (s as any).color_mono_full = undefined;
              (s as any).color_mono_base = undefined;
            } else {
              (s as any).result = (((s as any).theme_hex ?? 0)?.[String((s as any).color_gradient ?? 0)] ?? 0);
            }
          }
        }
      }
    }
  }
  (s as any).color_gradient = undefined;
  (s as any).color_thresholds = undefined;
  return;
  ((s as any).progressbar = (s as any).progressbar ?? {})['gradient'] = ((s as any).locArgs?.[0] ?? 0);
  ((s as any).progressbar = (s as any).progressbar ?? {})['raw_value'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).progressbar = (s as any).progressbar ?? {})['max_value'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).progressbar = (s as any).progressbar ?? {})['phantom_raw'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).progressbar = (s as any).progressbar ?? {})['overlay'] = Math.min(Math.max(0, ((s as any).locArgs?.[4] ?? 0)), 100);
  ((s as any).progressbar = (s as any).progressbar ?? {})['overlay_gradient'] = ((String((s as any).locArgs?.[5] ?? '') === '') ? ('accent') : (((s as any).locArgs?.[5] ?? 0)));
  ((s as any).progressbar = (s as any).progressbar ?? {})['label_pos'] = ((String((s as any).locArgs?.[6] ?? '') === '') ? ('auto') : (((s as any).locArgs?.[6] ?? 0)));
  ((s as any).progressbar = (s as any).progressbar ?? {})['thresholds'] = ((s as any).locArgs?.[7] ?? 0);
  ((s as any).progressbar = (s as any).progressbar ?? {})['bar_width_val'] = ((((s as any).stat_cfg ?? 0)?.['bar_width'] > 0) ? ((((s as any).stat_cfg ?? 0)?.['bar_width'])) : (200));
  ((s as any).progressbar = (s as any).progressbar ?? {})['bar_width_css'] = String((((s as any).progressbar ?? 0)?.['bar_width_val'])) + 'px';
  ((s as any).progressbar = (s as any).progressbar ?? {})['bar_width_attr'] = String((((s as any).progressbar ?? 0)?.['bar_width_val']));
  if (((s as any).progressbar ?? 0)?.['max_value'] > 0) {
    ((s as any).progressbar = (s as any).progressbar ?? {})['value'] = Math.min(100, (((s as any).progressbar ?? {})?.['raw_value'] ?? 0) * 100 / (((s as any).progressbar ?? {})?.['max_value'] ?? 0));
  } else {
    ((s as any).progressbar = (s as any).progressbar ?? {})['value'] = Math.min(Math.max(0, (((s as any).progressbar ?? 0)?.['raw_value'])), 100);
  }
  ((s as any).progressbar = (s as any).progressbar ?? {})['phantom'] = Math.min(Math.max((((s as any).progressbar ?? 0)?.['value']), (((s as any).progressbar ?? 0)?.['phantom_raw'])), 100) - (((s as any).progressbar ?? {})?.['value'] ?? 0);
  ((s as any).progressbar = (s as any).progressbar ?? {})['label'] = String((((s as any).progressbar ?? 0)?.['raw_value']));
  if (((s as any).progressbar ?? 0)?.['phantom_raw'] > 0  &&  ((s as any).progressbar ?? 0)?.['phantom_raw'] !== ((s as any).progressbar ?? 0)?.['raw_value']) {
    ((s as any).progressbar = (s as any).progressbar ?? {})['label'] = ((s as any).progressbar['label'] ?? 0) + (' (' + (((s as any).progressbar ?? 0)?.['phantom_raw']) + ')');
  }
  ((s as any).progressbar = (s as any).progressbar ?? {})['label_raw'] = (((s as any).progressbar ?? 0)?.['label']);
  if (((s as any).progressbar ?? 0)?.['label_raw'] !== ''  &&  ((s as any).sd_font_pct ?? 0) !== 100) {
    ((s as any).progressbar = (s as any).progressbar ?? {})['label'] = '<span style="font-size:' + String(((s as any).sd_font_pct ?? 0)) + '%;">' + (((s as any).progressbar ?? 0)?.['label_raw']) + '</span>';
  }
  if (((s as any).stat_cfg ?? 0)?.['font_size'] > 0) {
    ((s as any).progressbar = (s as any).progressbar ?? {})['label_px'] = (String((((s as any).progressbar ?? 0)?.['label'])).length) * ((((s as any).stat_cfg ?? {})?.['font_size'] ?? 0) + 2);
  } else {
    ((s as any).progressbar = (s as any).progressbar ?? {})['label_px'] = (String((((s as any).progressbar ?? 0)?.['label'])).length) * 9;
  }
  ((s as any).progressbar = (s as any).progressbar ?? {})['label_width_pct'] = (((s as any).progressbar ?? {})?.['label_px'] ?? 0) * 100 / (((s as any).progressbar ?? {})?.['bar_width_val'] ?? 0);
  if (((s as any).progressbar ?? 0)?.['label'] === ''  ||  ((s as any).progressbar ?? 0)?.['label_pos'] === 'none') {
    ((s as any).progressbar = (s as any).progressbar ?? {})['label_pos'] = 'none';
  } else {
    if (((s as any).progressbar ?? 0)?.['label_pos'] === 'outside'  ||  ((s as any).progressbar ?? 0)?.['label_pos'] === 'right') {
      ((s as any).progressbar = (s as any).progressbar ?? {})['label_pos'] = 'bg';
    } else {
      if (((s as any).progressbar ?? 0)?.['label_pos'] === 'auto'  ||  ((s as any).progressbar ?? 0)?.['label_pos'] === 'inside') {
        if (((s as any).progressbar ?? 0)?.['value'] >= ((s as any).progressbar ?? 0)?.['label_width_pct']) {
          ((s as any).progressbar = (s as any).progressbar ?? {})['label_pos'] = 'bar';
        } else {
          if (((s as any).progressbar ?? 0)?.['phantom'] > 0  &&  ((s as any).progressbar ?? 0)?.['phantom'] >= ((s as any).progressbar ?? 0)?.['label_width_pct']) {
            ((s as any).progressbar = (s as any).progressbar ?? {})['label_pos'] = 'phantom';
          } else {
            ((s as any).progressbar = (s as any).progressbar ?? {})['label_pos'] = 'bg';
          }
        }
      }
    }
  }
  if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bg'  &&  (((s as any).progressbar ?? 0)?.['value'] + ((s as any).progressbar ?? 0)?.['phantom']) >= 100) {
    if (((s as any).progressbar ?? 0)?.['phantom'] > 0) {
      ((s as any).progressbar = (s as any).progressbar ?? {})['label_pos'] = 'phantom';
    } else {
      ((s as any).progressbar = (s as any).progressbar ?? {})['label_pos'] = 'bar';
    }
  }
  ((s as any).progressbar = (s as any).progressbar ?? {})['bar_color'] = qspFunc(s, 'progressbar', 'color', (((s as any).progressbar ?? 0)?.['gradient']), (((s as any).progressbar ?? 0)?.['value']), (((s as any).progressbar ?? 0)?.['thresholds']));
  if (((s as any).progressbar ?? 0)?.['overlay'] > 0) {
    ((s as any).progressbar = (s as any).progressbar ?? {})['overlay_color'] = qspFunc(s, 'progressbar', 'color', (((s as any).progressbar ?? 0)?.['overlay_gradient']), (((s as any).progressbar ?? 0)?.['overlay']));
  }
  if (((s as any).progressbar ?? 0)?.['phantom'] > 0) {
    if (((s as any).theme ?? 0)?.['is_dark']) {
      ((s as any).progressbar = (s as any).progressbar ?? {})['phantom_color'] = qspFunc(s, 'math', 'color_mix', (((s as any).progressbar ?? 0)?.['bar_color']), '#000000', 50);
    } else {
      ((s as any).progressbar = (s as any).progressbar ?? {})['phantom_color'] = qspFunc(s, 'math', 'color_mix', (((s as any).progressbar ?? 0)?.['bar_color']), '#FFFFFF', 50);
    }
  }
  if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bar'  ||  ((s as any).progressbar ?? 0)?.['label_pos'] === 'phantom') {
    (s as any).pb_lc_hex = (String(((((s as any).progressbar ?? 0)?.['label_pos'] === 'bar') ? ((((s as any).progressbar ?? 0)?.['bar_color'])) : ((((s as any).progressbar ?? 0)?.['phantom_color'])))).toUpperCase());
    (s as any).pb_lc_bar_r = ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_hex ?? 0)).slice((2)-1, ((2)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_hex ?? 0)).slice((3)-1, ((3)-1)+(1)))))) + 1);
    (s as any).pb_lc_bar_g = ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_hex ?? 0)).slice((4)-1, ((4)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_hex ?? 0)).slice((5)-1, ((5)-1)+(1)))))) + 1);
    (s as any).pb_lc_bar_b = ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_hex ?? 0)).slice((6)-1, ((6)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_hex ?? 0)).slice((7)-1, ((7)-1)+(1)))))) + 1);
    (s as any).pb_lc_bar_lum = (((s as any).pb_lc_bar_r ?? 0) * 299 + ((s as any).pb_lc_bar_g ?? 0) * 587 + ((s as any).pb_lc_bar_b ?? 0) * 114) / 1000;
    (s as any).pb_lc_font_hex = qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['fcolor']));
    (s as any).pb_lc_font_r = ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_font_hex ?? 0)).slice((2)-1, ((2)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_font_hex ?? 0)).slice((3)-1, ((3)-1)+(1)))))) + 1);
    (s as any).pb_lc_font_g = ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_font_hex ?? 0)).slice((4)-1, ((4)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_font_hex ?? 0)).slice((5)-1, ((5)-1)+(1)))))) + 1);
    (s as any).pb_lc_font_b = ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_font_hex ?? 0)).slice((6)-1, ((6)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).pb_lc_font_hex ?? 0)).slice((7)-1, ((7)-1)+(1)))))) + 1);
    (s as any).pb_lc_font_lum = (((s as any).pb_lc_font_r ?? 0) * 299 + ((s as any).pb_lc_font_g ?? 0) * 587 + ((s as any).pb_lc_font_b ?? 0) * 114) / 1000;
    (s as any).pb_lc_diff = ((s as any).pb_lc_bar_lum ?? 0) - ((s as any).pb_lc_font_lum ?? 0);
    if (((s as any).pb_lc_diff ?? 0) < 0) {
      (s as any).pb_lc_diff = -1 * ((s as any).pb_lc_diff ?? 0);
    }
    if (((s as any).pb_lc_diff ?? 0) >= 80) {
      (s as any).pb_lc_result = ((s as any).pb_lc_font_hex ?? 0);
    } else {
      (s as any).pb_lc_bg_hex = qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['bcolor']));
      if (((s as any).theme ?? 0)?.['is_dark']) {
        (s as any).pb_lc_result = qspFunc(s, 'math', 'color_mix', ((s as any).pb_lc_bg_hex ?? 0), '#000000', 60);
      } else {
        (s as any).pb_lc_result = qspFunc(s, 'math', 'color_mix', ((s as any).pb_lc_bg_hex ?? 0), '#FFFFFF', 60);
      }
    }
    if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bar') {
      ((s as any).progressbar = (s as any).progressbar ?? {})['label_on_color'] = ((s as any).pb_lc_result ?? 0);
    } else {
      ((s as any).progressbar = (s as any).progressbar ?? {})['phantom_on_color'] = ((s as any).pb_lc_result ?? 0);
    }
    (s as any).pb_lc_hex = undefined;
    (s as any).pb_lc_bar_r = undefined;
    (s as any).pb_lc_bar_g = undefined;
    (s as any).pb_lc_bar_b = undefined;
    (s as any).pb_lc_bar_lum = undefined;
    (s as any).pb_lc_font_hex = undefined;
    (s as any).pb_lc_font_r = undefined;
    (s as any).pb_lc_font_g = undefined;
    (s as any).pb_lc_font_b = undefined;
    (s as any).pb_lc_diff = undefined;
    (s as any).pb_lc_bg_hex = undefined;
    (s as any).pb_lc_result = undefined;
    (s as any).pb_lc_font_lum = undefined;
  }
  ((s as any).progressbar = (s as any).progressbar ?? {})['mode'] = ((String((s as any).locArgs?.[8] ?? '') > 0) ? (((s as any).locArgs?.[8] ?? 0) - 1) : (0));
  if (((s as any).progressbar ?? 0)?.['mode'] === 2) {
    if (((s as any).progressbar ?? 0)?.['bar_color'] !== '') {
      (s as any).result = '<font color=' + (((s as any).progressbar ?? 0)?.['bar_color']) + '><b>' + (((s as any).progressbar ?? 0)?.['label']) + '</b></font>';
    } else {
      (s as any).result = '<b>' + (((s as any).progressbar ?? 0)?.['label']) + '</b>';
    }
  } else {
    if (((s as any).progressbar ?? 0)?.['mode'] === 1) {
      if (((s as any).stat_cfg ?? 0)?.['bar_size'] === 1) {
        (s as any).bar_font_size = 2;
      } else {
        (s as any).bar_font_size = 3;
      }
      if (((s as any).stat_cfg ?? 0)?.['font_size'] > 0  &&  ((s as any).stat_cfg ?? 0)?.['font_size'] < ((s as any).bar_font_size ?? 0)) {
        (s as any).bar_font_size = (((s as any).stat_cfg ?? 0)?.['font_size']);
      }
      (s as any).bar_char_index = 0;
      (s as any).bar_char_step = 5;
      (s as any).bar_phantom_end = (((s as any).progressbar ?? {})?.['value'] ?? 0) + (((s as any).progressbar ?? {})?.['phantom'] ?? 0);
      (s as any).bar_html = '<font face="courier new" size=' + ((s as any).bar_font_size ?? 0) + ' color=' + (((s as any).progressbar ?? 0)?.['bar_color']) + '> ';
      do {
        if (((s as any).bar_char_index ?? 0) < ((s as any).progressbar ?? 0)?.['value']) {
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('█');
        } else {
          if (((s as any).bar_char_index ?? 0) < ((s as any).bar_phantom_end ?? 0)) {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('░');
          } else {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('_');
          }
        }
        (s as any).bar_char_index = ((s as any).bar_char_index ?? 0) + (((s as any).bar_char_step ?? 0));
        (s as any).bar_html = ((s as any).bar_html ?? 0) + (' </font>');
        (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<font color=' + (((s as any).progressbar ?? 0)?.['bar_color']) + '>' + (((s as any).progressbar ?? 0)?.['label']) + '</font>');
        if (((s as any).progressbar ?? 0)?.['overlay'] > 0) {
          (s as any).bar_html = ((s as any).bar_html ?? 0) + (' <font color=' + (((s as any).progressbar ?? 0)?.['overlay_color']) + '>(' + (((s as any).progressbar ?? 0)?.['overlay']) + ')</font>');
        }
        (s as any).result = ((s as any).bar_html ?? 0);
        (s as any).bar_html = undefined;
        (s as any).bar_font_size = undefined;
        (s as any).bar_char_index = undefined;
        (s as any).bar_char_step = undefined;
        (s as any).bar_phantom_end = undefined;
      } while (((s as any).bar_char_index ?? 0) < 100);
    } else {
      (s as any).bar_bg_pct = 100 - (((s as any).progressbar ?? {})?.['value'] ?? 0) - (((s as any).progressbar ?? {})?.['phantom'] ?? 0);
      (s as any).bar_html = '';
      (s as any).pb_fs = 'font-size: ' + ((s as any).sd_font_pct ?? 0) + '%;';
      if (((s as any).progressbar ?? 0)?.['overlay'] > 0) {
        (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<div style="position: relative; width: ' + (((s as any).progressbar ?? 0)?.['bar_width_css']) + '; display: inline-block; vertical-align: middle; margin: 0; padding: 0; line-height: 0;">');
        (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin: 0; padding: 0; line-height: normal;"><tr>');
        if (((s as any).progressbar ?? 0)?.['value'] > 0) {
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<td bgcolor="' + (((s as any).progressbar ?? 0)?.['bar_color']) + '" width="' + (((s as any).progressbar ?? 0)?.['value']) + '%" style="' + ((s as any).pb_fs ?? 0) + '">&nbsp;</td>');
        }
        if (((s as any).progressbar ?? 0)?.['phantom'] > 0) {
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<td bgcolor="' + (((s as any).progressbar ?? 0)?.['phantom_color']) + '" width="' + (((s as any).progressbar ?? 0)?.['phantom']) + '%" style="' + ((s as any).pb_fs ?? 0) + '"></td>');
        }
        if (((s as any).bar_bg_pct ?? 0) > 0) {
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<td width="' + ((s as any).bar_bg_pct ?? 0) + '%" style="' + ((s as any).pb_fs ?? 0) + '"></td>');
        }
        (s as any).bar_html = ((s as any).bar_html ?? 0) + ('</tr></table>');
        (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<div style="position: absolute; bottom: 0; left: 0; width: ' + (((s as any).progressbar ?? 0)?.['overlay']) + '%; height: 50%; background-color: ' + (((s as any).progressbar ?? 0)?.['overlay_color']) + '; z-index: 1;"></div>');
        if (((s as any).progressbar ?? 0)?.['label_pos'] !== 'none') {
          if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bar') {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<div style="position: absolute; top: 0; left: 0; width: ' + (((s as any).progressbar ?? 0)?.['value']) + '%; height: 100%; z-index: 2; display: flex; align-items: center; justify-content: flex-end; white-space: nowrap; overflow: hidden; ' + ((s as any).pb_fs ?? 0) + '">');
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<font color="' + (((s as any).progressbar ?? 0)?.['label_on_color']) + '">' + (((s as any).progressbar ?? 0)?.['label_raw']) + '</font>&nbsp;');
          } else {
            if (((s as any).progressbar ?? 0)?.['label_pos'] === 'phantom') {
              (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<div style="position: absolute; top: 0; left: ' + (((s as any).progressbar ?? 0)?.['value']) + '%; height: 100%; z-index: 2; display: flex; align-items: center; white-space: nowrap; overflow: hidden; ' + ((s as any).pb_fs ?? 0) + '">');
              (s as any).bar_html = ((s as any).bar_html ?? 0) + ('&nbsp;<font color="' + (((s as any).progressbar ?? 0)?.['phantom_on_color']) + '">' + (((s as any).progressbar ?? 0)?.['label_raw']) + '</font>');
            } else {
              (s as any).pb2d_txt_left = (((s as any).progressbar ?? {})?.['value'] ?? 0) + (((s as any).progressbar ?? {})?.['phantom'] ?? 0);
              (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<div style="position: absolute; top: 0; left: ' + ((s as any).pb2d_txt_left ?? 0) + '%; height: 100%; z-index: 2; display: flex; align-items: center; white-space: nowrap; overflow: hidden; ' + ((s as any).pb_fs ?? 0) + '">');
              (s as any).bar_html = ((s as any).bar_html ?? 0) + ('&nbsp;' + (((s as any).progressbar ?? 0)?.['label_raw']) + '');
            }
          }
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('</div>');
        }
        (s as any).bar_html = ((s as any).bar_html ?? 0) + ('</div>');
      } else {
        (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<table cellpadding="0" cellspacing="0" width="' + (((s as any).progressbar ?? 0)?.['bar_width_attr']) + '"><tr>');
        if (((s as any).progressbar ?? 0)?.['value'] > 0) {
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<td bgcolor="' + (((s as any).progressbar ?? 0)?.['bar_color']) + '" width="' + (((s as any).progressbar ?? 0)?.['value']) + '%" style="white-space: nowrap; overflow: hidden; ' + ((s as any).pb_fs ?? 0) + '"');
          if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bar') {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + (' align="right"><font color="' + (((s as any).progressbar ?? 0)?.['label_on_color']) + '">' + (((s as any).progressbar ?? 0)?.['label_raw']) + '</font>&nbsp;');
          } else {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('>&nbsp;');
          }
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('</td>');
        }
        if (((s as any).progressbar ?? 0)?.['phantom'] > 0) {
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<td bgcolor="' + (((s as any).progressbar ?? 0)?.['phantom_color']) + '" width="' + (((s as any).progressbar ?? 0)?.['phantom']) + '%" style="white-space: nowrap; overflow: hidden; ' + ((s as any).pb_fs ?? 0) + '"');
          if (((s as any).progressbar ?? 0)?.['label_pos'] === 'phantom') {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('>&nbsp;<font color="' + (((s as any).progressbar ?? 0)?.['phantom_on_color']) + '">' + (((s as any).progressbar ?? 0)?.['label_raw']) + '</font>');
          } else {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('>&nbsp;');
          }
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('</td>');
        }
        if (((s as any).bar_bg_pct ?? 0) > 0) {
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('<td width="' + ((s as any).bar_bg_pct ?? 0) + '%" style="white-space: nowrap; overflow: hidden; ' + ((s as any).pb_fs ?? 0) + '"');
          if (((s as any).progressbar ?? 0)?.['label_pos'] === 'bg') {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('>&nbsp;' + (((s as any).progressbar ?? 0)?.['label_raw']) + '');
          } else {
            (s as any).bar_html = ((s as any).bar_html ?? 0) + ('>&nbsp;');
          }
          (s as any).bar_html = ((s as any).bar_html ?? 0) + ('</td>');
        }
        (s as any).bar_html = ((s as any).bar_html ?? 0) + ('</tr></table>');
      }
      (s as any).result = ((s as any).bar_html ?? 0);
      (s as any).bar_html = undefined;
      (s as any).bar_bg_pct = undefined;
      (s as any).pb2d_txt_left = undefined;
      (s as any).pb_fs = undefined;
    }
  }
  (s as any).progressbar = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sd_font_pct ?? 0) <= 0) {
    (s as any).sd_font_pct = 100;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'color':
      enterColor(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const progressbar: LocationDef = {
  name: 'progressbar',
  region: 'other',
  enter: enter,
};
