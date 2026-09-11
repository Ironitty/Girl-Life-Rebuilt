import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).color_value = qspUntranslated(s, "ARGS[2]", { location: "progressbar" });
  if (((((s as any).color_gradient ?? 0)).slice((1)-1, ((1)-1)+(1))) === '#') {
    // TODO-QSP: killvar 'color_gradient'
    // TODO-QSP: killvar 'color_value'
    // TODO-QSP: killvar 'color_thresholds'
    return;
  }
  if (((s as any).color_thresholds ?? 0) !== '') {
    (s as any).color_thr_pos = qspUntranslated(s, "instr(color_thr_work, ',')", { location: "progressbar" });
    (s as any).color_thr[0] = parseFloat(((((s as any).color_thr_work ?? 0)).slice((1)-1, ((1)-1)+(((s as any).color_thr_pos ?? 0) - 1))));
    (s as any).color_thr_pos = qspUntranslated(s, "instr(color_thr_work, ',')", { location: "progressbar" });
    (s as any).color_thr[1] = parseFloat(((((s as any).color_thr_work ?? 0)).slice((1)-1, ((1)-1)+(((s as any).color_thr_pos ?? 0) - 1))));
    (s as any).color_thr_pos = qspUntranslated(s, "instr(color_thr_work, ',')", { location: "progressbar" });
    (s as any).color_thr[2] = parseFloat(((((s as any).color_thr_work ?? 0)).slice((1)-1, ((1)-1)+(((s as any).color_thr_pos ?? 0) - 1))));
    (s as any).color_thr[3] = qspUntranslated(s, "val(color_thr_work)", { location: "progressbar" });
    // TODO-QSP: killvar 'color_thr_work'
    // TODO-QSP: killvar 'color_thr_pos'
  } else {
    (s as any).color_thr[0] = 15;
    (s as any).color_thr[1] = 35;
    (s as any).color_thr[2] = 65;
    (s as any).color_thr[3] = 85;
  }
  if (((s as any).color_gradient ?? 0) === 'positive') {
    if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
    } else {
      if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[1]) {
      } else {
        if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
        } else {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[3]) {
          }
        }
      }
    }
  } else {
    if (((s as any).color_gradient ?? 0) === 'negative') {
      if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
      } else {
        if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[1]) {
        } else {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
          } else {
            if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[3]) {
            }
          }
        }
      }
    } else {
      if (((s as any).color_gradient ?? 0) === 'centrum_positive') {
        if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
        } else {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[1]) {
          } else {
            if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
            } else {
              if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[3]) {
              }
            }
          }
        }
      } else {
        if (((s as any).color_gradient ?? 0) === 'centrum_negative') {
          if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[0]) {
          } else {
            if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[1]) {
            } else {
              if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[2]) {
              } else {
                if (((s as any).color_value ?? 0) < ((s as any).color_thr ?? 0)[3]) {
                }
              }
            }
          }
        } else {
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
              if (((s as any).color_value ?? 0) >= ((s as any).color_stop_at ?? 0)[4]) {
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
            }
            // TODO-QSP: killvar 'color_stop_hex'
            // TODO-QSP: killvar 'color_stop_at'
            // TODO-QSP: killvar 'color_stop_upper'
            // TODO-QSP: killvar 'color_stop_lower'
            // TODO-QSP: killvar 'color_stop_i'
            // TODO-QSP: killvar 'color_stop_span'
            // TODO-QSP: killvar 'color_stop_ratio'
          } else {
            if (((((s as any).color_gradient ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'mono:') {
              if (((s as any).theme ?? 0)?.['is_dark']) {
              }
              // TODO-QSP: killvar 'color_mono_key'
              // TODO-QSP: killvar 'color_mono_full'
              // TODO-QSP: killvar 'color_mono_base'
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

export const progressbar: LocationDef = {
  name: 'progressbar',
  region: 'other',
  enter: enter,
};
