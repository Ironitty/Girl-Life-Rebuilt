import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCheckIfOnlyLocal(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') === 'sex'  ||  String((s as any).locArgs?.[1] ?? '') === 'prostitute'  ||  String((s as any).locArgs?.[1] ?? '') === 'flash');
  // TODO-QSP: end
  scene.build();
}

function enterDeg(s: GameState, scene: SceneBuilder): void {
  (s as any).fameregion = 'pav';
  // TODO-QSP: :famedegloop
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_sex']        > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_sex'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_sex'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_prostitute']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_prostitute'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_prostitute'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_flash']      > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_flash'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_flash'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_acting_core']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_acting_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_acting_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_dance_core']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_dance_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_dance_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_painting_core']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_painting_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_painting_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_music_core']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_music_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_music_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_ballet_core']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_ballet_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_ballet_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_modelling_core']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_modelling_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_modelling_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_porn_core']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_porn_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_porn_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_stripping_core']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_stripping_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_stripping_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_kickboxing_core']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_kickboxing_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_kickboxing_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_running_core']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_running_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_running_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_volleyball_core']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_volleyball_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_volleyball_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_chess_core']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_chess_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_chess_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_teaching_core']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_teaching_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_teaching_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_media_core']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_media_core'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_media_core'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_acting_local']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_acting_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_acting_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_dance_local']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_dance_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_dance_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_painting_local']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_painting_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_painting_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_music_local']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_music_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_music_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_ballet_local']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_ballet_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_ballet_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_modelling_local']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_modelling_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_modelling_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_porn_local']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_porn_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_porn_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_stripping_local']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_stripping_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_stripping_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_kickboxing_local']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_kickboxing_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_kickboxing_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_running_local']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_running_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_running_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_volleyball_local']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_volleyball_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_volleyball_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_chess_local']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_chess_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_chess_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_teaching_local']  > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_teaching_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_teaching_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_media_local']    > 2) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_media_local'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_media_local'] ?? 0) - ((Math.floor(Math.random() * (3 - (-1) + 1)) + ((-1))));
  }
  if (((s as any).fameregion ?? 0) === 'pav') {
    (s as any).fameregion = 'city';
    // TODO-QSP: jump 'famedegloop'
  } else {
    if (((s as any).fameregion ?? 0) === 'city') {
      (s as any).fameregion = 'village';
      // TODO-QSP: jump 'famedegloop'
    } else {
      if (((s as any).fameregion ?? 0) === 'village') {
        (s as any).fameregion = 'pushkin';
        // TODO-QSP: jump 'famedegloop'
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'acting']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dance']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'painting']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'music']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ballet']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'modelling']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'porn']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'stripping']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'kickboxing']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'running']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'volleyball']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chess']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'teaching']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'media']; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalculateGroups(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCity(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_fame_arg = ((s as any).locArgs?.[0] ?? 0) + '_' + ((s as any).locArgs?.[1] ?? 0);
  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    if (String((s as any).locArgs?.[3] ?? '') !== 'local') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 'core';
    }
    // TODO-QSP: $temp_fame_arg += '_' + $ARGS[3]
  }
  if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 1000) {
    if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (0);
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'small') {
        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (0);
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'large') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 15));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 25));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 35));
                  } else {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 10);
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 700) {
      if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'small') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'large') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 36) + 25));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 41) + 60));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 100));
                    } else {
                      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 6 < 1000) {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 6);
                      } else {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 6 - 1000)) / 5;
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
      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 400) {
        if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'small') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'large') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 20));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 50));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 100));
                    } else {
                      if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 150));
                      } else {
                        if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 3 < 700) {
                          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 3);
                        } else {
                          if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 3 < 1300) {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 700 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 3 - 700) / 2;
                          } else {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 3 - 700) / 2 - 300)) / 5;
                          }
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
        if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'small') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'large') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 20));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 40));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 150));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 250));
                    } else {
                      if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 350));
                      } else {
                        if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') < 400) {
                          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
                        } else {
                          if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') < 1300) {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 400 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3;
                          } else {
                            if ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '')) < 3100) {
                              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 700 + ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3 - 300) / 2;
                            } else {
                              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * (((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3 - 300) / 2 - 300)) / 5;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    if (((s as any).fame ?? 0)[(String((s as any).locArgs?.[0] ?? '')) + '_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] < 0) {
      ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[0] ?? 0)) + '_' + String(((s as any).locArgs?.[1] ?? 0)) + '_core'] = 0;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalculateGroups(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterPav(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_fame_arg = ((s as any).locArgs?.[0] ?? 0) + '_' + ((s as any).locArgs?.[1] ?? 0);
  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    if (String((s as any).locArgs?.[3] ?? '') !== 'local') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 'core';
    }
    // TODO-QSP: $temp_fame_arg += '_' + $ARGS[3]
  }
  if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 1000) {
    if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (0);
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'small') {
        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (0);
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'large') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 15));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 25));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 35));
                  } else {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 10);
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 700) {
      if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'small') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'large') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 36) + 25));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 41) + 60));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 100));
                    } else {
                      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 6 < 1000) {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 6);
                      } else {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 6 - 1000)) / 5;
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
      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 400) {
        if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'small') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'large') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 20));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 50));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 100));
                    } else {
                      if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 150));
                      } else {
                        if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 3 < 700) {
                          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 3);
                        } else {
                          if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 3 < 1300) {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 700 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 3 - 700) / 2;
                          } else {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 3 - 700) / 2 - 300)) / 5;
                          }
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
        if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'small') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'large') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 20));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 40));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 150));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 250));
                    } else {
                      if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 350));
                      } else {
                        if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') < 400) {
                          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
                        } else {
                          if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') < 1300) {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 400 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3;
                          } else {
                            if ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '')) < 3100) {
                              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 700 + ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3 - 300) / 2;
                            } else {
                              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * (((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3 - 300) / 2 - 300)) / 5;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    if (((s as any).fame ?? 0)[(String((s as any).locArgs?.[0] ?? '')) + '_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] < 0) {
      ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[0] ?? 0)) + '_' + String(((s as any).locArgs?.[1] ?? 0)) + '_core'] = 0;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalculateGroups(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterPushkin(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_fame_arg = ((s as any).locArgs?.[0] ?? 0) + '_' + ((s as any).locArgs?.[1] ?? 0);
  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    if (String((s as any).locArgs?.[3] ?? '') !== 'local') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 'core';
    }
    // TODO-QSP: $temp_fame_arg += '_' + $ARGS[3]
  }
  if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 1000) {
    if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (0);
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'small') {
        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (0);
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'large') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 15));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 25));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 35));
                  } else {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 10);
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 700) {
      if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'small') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'large') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 36) + 25));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 41) + 60));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 100));
                    } else {
                      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 6 < 1000) {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 6);
                      } else {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 6 - 1000)) / 5;
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
      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 400) {
        if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'small') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'large') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 20));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 50));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 100));
                    } else {
                      if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 150));
                      } else {
                        if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 3 < 700) {
                          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 3);
                        } else {
                          if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 3 < 1300) {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 700 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 3 - 700) / 2;
                          } else {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 3 - 700) / 2 - 300)) / 5;
                          }
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
        if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'small') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'large') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 20));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 40));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 150));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 250));
                    } else {
                      if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 350));
                      } else {
                        if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') < 400) {
                          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
                        } else {
                          if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') < 1300) {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 400 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3;
                          } else {
                            if ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '')) < 3100) {
                              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 700 + ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3 - 300) / 2;
                            } else {
                              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * (((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3 - 300) / 2 - 300)) / 5;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    if (((s as any).fame ?? 0)[(String((s as any).locArgs?.[0] ?? '')) + '_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] < 0) {
      ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[0] ?? 0)) + '_' + String(((s as any).locArgs?.[1] ?? 0)) + '_core'] = 0;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalculateGroups(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterVillage(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_fame_arg = ((s as any).locArgs?.[0] ?? 0) + '_' + ((s as any).locArgs?.[1] ?? 0);
  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    if (String((s as any).locArgs?.[3] ?? '') !== 'local') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 'core';
    }
    // TODO-QSP: $temp_fame_arg += '_' + $ARGS[3]
  }
  if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 1000) {
    if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (0);
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'small') {
        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (0);
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'large') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 15));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 25));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 11) + 35));
                  } else {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 10);
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 700) {
      if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'small') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'large') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 36) + 25));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 41) + 60));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 100));
                    } else {
                      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 6 < 1000) {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 6);
                      } else {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 6 - 1000)) / 5;
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
      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 400) {
        if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'small') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'large') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 20));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 50));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 100));
                    } else {
                      if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 51) + 150));
                      } else {
                        if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 3 < 700) {
                          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 3);
                        } else {
                          if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') / 3 < 1300) {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 700 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 3 - 700) / 2;
                          } else {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) / 3 - 700) / 2 - 300)) / 5;
                          }
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
        if (String((s as any).locArgs?.[2] ?? '') === 'tiny') {
          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'small') {
            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 7) + 6));
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'medium') {
              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 15) + 10));
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'large') {
                ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 20));
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'huge') {
                  ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 31) + 40));
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'BronzeMedal') {
                    ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 150));
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'SilverMedal') {
                      ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 250));
                    } else {
                      if (String((s as any).locArgs?.[2] ?? '') === 'GoldMedal') {
                        ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + ((Math.floor(Math.random() * 101) + 350));
                      } else {
                        if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') < 400) {
                          ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = ((s as any).fame[String((s as any).temp_fame_arg ?? 0)] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
                        } else {
                          if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '') < 1300) {
                            ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 400 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3;
                          } else {
                            if ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + String((s as any).locArgs?.[2] ?? '')) < 3100) {
                              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 700 + ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3 - 300) / 2;
                            } else {
                              ((s as any).fame = (s as any).fame ?? {})[String((s as any).temp_fame_arg ?? 0)] = 1000 + (3 * (((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).locArgs?.[2] ?? 0) - 400) / 3 - 300) / 2 - 300)) / 5;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    if (((s as any).fame ?? 0)[(String((s as any).locArgs?.[0] ?? '')) + '_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] < 0) {
      ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[0] ?? 0)) + '_' + String(((s as any).locArgs?.[1] ?? 0)) + '_core'] = 0;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCalculate(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalculateGroups(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSetContributions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    return;
  }
  if (((s as any).fame ?? 0)['pav_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 2000) {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_low'] = 525;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_low'] = 1050 - (42000000 / ((((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) + 40000));
  }
  if (((s as any).fame ?? 0)['pav_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 1005) {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_high'] = 1005;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_high'] = (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] * (1050 - 525000000 / (500000 + (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10)))) / 1050;
  }
  if (((s as any).fame ?? 0)['pav_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 2000) {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_medium'] = 1050;
  } else {
    if (((s as any).fame ?? 0)['pav_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 400) {
      ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_medium'] = 1050 - (672000000 / ((((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) + 640000));
    } else {
      ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_medium'] = 0;
    }
  }
  if (((s as any).fame ?? 0)['city_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 2000) {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_high'] = 1050;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_high'] = 1050 - (52500000 / ((((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) + 50000));
  }
  if (((s as any).fame ?? 0)['city_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_medium'] = 1000;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_medium'] = ((((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'])) / 1000;
  }
  if (((s as any).fame ?? 0)['city_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 2000) {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_low'] = 1050;
  } else {
    if (((s as any).fame ?? 0)['city_' + (String((s as any).locArgs?.[1] ?? ''))] >= 200) {
      ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_low'] = 1050 - (672000000 / ((((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 -20) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 20) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 20) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 20) + 640000));
    } else {
      ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_low'] = 0;
    }
  }
  if (((s as any).fame ?? 0)['pushkin_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 1005) {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_high'] = 1050;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_high'] = (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] * (1050 - 525000000 / (500000 + (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10)))) / 1050;
  }
  if (((s as any).fame ?? 0)['pushkin_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 2000) {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0)) + '_low'] = 525;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0)) + '_low'] = 1050 - (42000000 / ((((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) + 40000));
  }
  if (((s as any).fame ?? 0)['pushkin_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 2000) {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_medium'] = 1050;
  } else {
    if (((s as any).fame ?? 0)['pushkin_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 400) {
      ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_medium'] = 1050 - (672000000 / ((((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 -40) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) + 640000));
    } else {
      ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution_medium'] = 0;
    }
  }
  ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0)) + '_contribution'] = ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 100;
  // TODO-QSP: end
  scene.build();
}

function enterCalculate(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterSetContributions(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).fame ?? 0)['pav_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_local'] / 1000;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = (1000 * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + (1000 - ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_local']) / 1000;
  }
  if (((s as any).fame ?? 0)['pav_' + (String((s as any).locArgs?.[1] ?? ''))] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pav_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high'] / 1000);
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pav_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high'] / 1000);
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pav_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution'] / 1000);
  } else {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pav_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high']) / 1000);
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pav_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high']) / 1000);
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pav_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution']) / 1000);
  }
  if (((s as any).fame ?? 0)['pav_' + (String((s as any).locArgs?.[1] ?? ''))] < 0) {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = 0;
  }
  if (((s as any).fame ?? 0)['pav_' + (String((s as any).locArgs?.[1] ?? ''))] > 1200) {
    ((s as any).fame = (s as any).fame ?? {})['pav_' + String(((s as any).locArgs?.[1] ?? 0))] = 1200;
  }
  if (((s as any).fame ?? 0)['city_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_local'] / 1000;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = (1000 * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + (1000 - ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_local']) / 1000;
  }
  if (((s as any).fame ?? 0)['city_' + (String((s as any).locArgs?.[1] ?? ''))] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['city_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low'] / 1000);
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['city_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low'] / 1000);
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['city_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution'] / 1000);
  } else {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['city_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low']) / 1000);
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['city_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low']) / 1000);
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['city_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution']) / 1000);
  }
  if (((s as any).fame ?? 0)['city_' + (String((s as any).locArgs?.[1] ?? ''))] < 0) {
    ((s as any).fame = (s as any).fame ?? {})['city_' + String(((s as any).locArgs?.[1] ?? 0))] = 0;
  }
  if (((s as any).fame ?? 0)['city_' + (String((s as any).locArgs?.[1] ?? ''))] > 1200) {
    ((s as any).fame = (s as any).fame ?? {})['ctiy_' + String(((s as any).locArgs?.[1] ?? 0))] = 1200;
  }
  if (((s as any).fame ?? 0)['pushkin_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_local'] / 1000;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = (1000 * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + (1000 - ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_local']) / 1000;
  }
  if (((s as any).fame ?? 0)['pushkin_' + (String((s as any).locArgs?.[1] ?? ''))] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high'] / 1000);
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high'] / 1000);
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution'] / 1000);
  } else {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high']) / 1000);
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000-((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high']) / 1000);
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution']) / 1000);
  }
  if (((s as any).fame ?? 0)['pushkin_' + (String((s as any).locArgs?.[1] ?? ''))] < 0) {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = 0;
  }
  if (((s as any).fame ?? 0)['pushkin_' + (String((s as any).locArgs?.[1] ?? ''))] > 1200) {
    ((s as any).fame = (s as any).fame ?? {})['pushkin_' + String(((s as any).locArgs?.[1] ?? 0))] = 1200;
  }
  if (((s as any).fame ?? 0)['village_' + (String((s as any).locArgs?.[1] ?? '')) + '_core'] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_local'] / 1000;
  } else {
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = (1000 * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + (1000 - ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_local']) / 1000;
  }
  if (((s as any).fame ?? 0)['village_' + (String((s as any).locArgs?.[1] ?? ''))] >= 1000) {
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['village_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_medium'] / 1000);
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['village_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low'] / 1000);
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['village_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_medium'] / 1000);
  } else {
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['village_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_medium']) / 1000);
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['village_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low']) / 1000);
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).fame['village_' + String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((1000 - ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_medium']) / 1000);
  }
  if (((s as any).fame ?? 0)['village_' + (String((s as any).locArgs?.[1] ?? ''))] < 0) {
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = 0;
  }
  if (((s as any).fame ?? 0)['village_' + (String((s as any).locArgs?.[1] ?? ''))] > 1200) {
    ((s as any).fame = (s as any).fame ?? {})['village_' + String(((s as any).locArgs?.[1] ?? 0))] = 1200;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCalculateGroups(s: GameState, scene: SceneBuilder): void {
  (s as any).fameregion = 'pav';
  // TODO-QSP: :fameregionloop
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_performer'] = 0;
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_acting']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_performer'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_acting'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_dance']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_performer'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_dance'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_painting']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_performer'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_painting'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_music']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_performer'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_music'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_ballet']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_performer'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_ballet'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_modelling']  > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_performer'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_modelling'] - 30) / 3);
  }
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_sexind'] = 0;
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_porn']      > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_sexind'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_sexind'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_porn'] - 30) / 2);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_stripping']  > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_sexind'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_sexind'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_stripping'] - 30) / 2);
  }
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_slut'] = 0;
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_sex']      > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_slut'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_slut'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_sex'] - 30) / 2);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_prostitute']  > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_slut'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_slut'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_prostitute'] - 30) / 2);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_flash']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_slut'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_slut'] ?? 0) + (Math.min(((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_flash'] - 30, 100) / 4);
  }
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_sport'] = 0;
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_kickboxing']  > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_sport'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_sport'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_kickboxing'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_running']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_sport'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_sport'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_running'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_volleyball']  > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_sport'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_sport'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_volleyball'] - 30) / 3);
  }
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_int'] = 0;
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_chess']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_int'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_int'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_chess'] - 30) / 2);
  }
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_teaching']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_int'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_int'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_teaching'] - 30) / 3);
  }
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_social'] = 0;
  if (((s as any).fame ?? 0)[(((s as any).fameregion ?? 0)) + '_media']    > 30) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).fameregion ?? 0)) + '_social'] = ((s as any).fame[String(((s as any).fameregion ?? 0)) + '_social'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_media'] - 30) / 2);
  }
  if (((s as any).fameregion ?? 0) === 'pav') {
    (s as any).fameregion = 'city';
    // TODO-QSP: jump 'fameregionloop'
  } else {
    if (((s as any).fameregion ?? 0) === 'city') {
      (s as any).fameregion = 'village';
      // TODO-QSP: jump 'fameregionloop'
    } else {
      if (((s as any).fameregion ?? 0) === 'village') {
        (s as any).fameregion = 'pushkin';
        // TODO-QSP: jump 'fameregionloop'
      }
    }
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] < 25) {
    (s as any).gnikname = '';
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] < 50) {
      (s as any).gnikname = 'flirt';
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 75) {
        (s as any).gnikname = 'tease';
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
          (s as any).gnikname = 'minx';
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] < 125) {
            (s as any).gnikname = 'vixen';
          } else {
            if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
              (s as any).gnikname = 'temptress';
            } else {
              if (((s as any).fame ?? 0)?.['pav_slut'] < 175) {
                (s as any).gnikname = 'cocklover';
              } else {
                if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
                  (s as any).gnikname = 'boytoy';
                } else {
                  if (((s as any).fame ?? 0)?.['pav_slut'] < 225) {
                    (s as any).gnikname = 'slut';
                  } else {
                    if (((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                      (s as any).gnikname = 'nympho';
                    } else {
                      if (((s as any).fame ?? 0)?.['pav_slut'] < 275) {
                        (s as any).gnikname = 'whore';
                      } else {
                        if (((s as any).fame ?? 0)?.['pav_slut'] < 300) {
                          (s as any).gnikname = 'town bicycle';
                        } else {
                          (s as any).gnikname = 'cum dumpster';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCalculateSlut(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalculateGroups(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterChurchReduction(s: GameState, scene: SceneBuilder): void {
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_sex'] = ((s as any).fame[String(((s as any).locArgs?.[1] ?? 0)) + '_sex'] ?? 0) - (((s as any).locArgs?.[2] ?? 0));
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_prostitute'] = ((s as any).fame[String(((s as any).locArgs?.[1] ?? 0)) + '_prostitute'] ?? 0) - (((s as any).locArgs?.[2] ?? 0));
  ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_flash'] = ((s as any).fame[String(((s as any).locArgs?.[1] ?? 0)) + '_flash'] ?? 0) - (2 * ((s as any).locArgs?.[2] ?? 0));
  if (((s as any).fame ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_sex'] < 0) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_sex'] = 0;
  }
  if (((s as any).fame ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_prostitute'] < 0) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_prostitute'] = 0;
  }
  if (((s as any).fame ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_flash'] < 0) {
    ((s as any).fame = (s as any).fame ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_flash'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCalculateGroups(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_if_only_local':
      enterCheckIfOnlyLocal(s, scene);
      break;
    case 'deg':
      enterDeg(s, scene);
      break;
    case 'city':
      enterCity(s, scene);
      break;
    case 'pav':
      enterPav(s, scene);
      break;
    case 'pushkin':
      enterPushkin(s, scene);
      break;
    case 'village':
      enterVillage(s, scene);
      break;
    case 'set_contributions':
      enterSetContributions(s, scene);
      break;
    case 'calculate':
      enterCalculate(s, scene);
      break;
    case 'calculateGroups':
      enterCalculateGroups(s, scene);
      break;
    case 'calculateSlut':
      enterCalculateSlut(s, scene);
      break;
    case 'church_reduction':
      enterChurchReduction(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fame: LocationDef = {
  name: 'fame',
  region: 'other',
  enter: enter,
};
