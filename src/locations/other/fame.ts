import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCheckIfOnlyLocal(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).locArgs?.[1] ?? 0) === 'sex'  ||  ((s as any).locArgs?.[1] ?? 0) === 'prostitute'  ||  ((s as any).locArgs?.[1] ?? 0) === 'flash');
  scene.build();
}

function enterDeg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :famedegloop
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_sex']        > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_sex'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_sex'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_prostitute']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_prostitute'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_prostitute'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_flash']      > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_flash'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_flash'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_acting_core']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_acting_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_acting_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_dance_core']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_dance_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_dance_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_painting_core']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_painting_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_painting_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_music_core']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_music_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_music_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_ballet_core']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_ballet_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_ballet_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_modelling_core']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_modelling_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_modelling_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_porn_core']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_porn_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_porn_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_stripping_core']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_stripping_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_stripping_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_kickboxing_core']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_kickboxing_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_kickboxing_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_running_core']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_running_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_running_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_volleyball_core']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_volleyball_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_volleyball_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_chess_core']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_chess_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_chess_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_teaching_core']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_teaching_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_teaching_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_media_core']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_media_core'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_media_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_acting_local']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_acting_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_acting_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_dance_local']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_dance_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_dance_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_painting_local']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_painting_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_painting_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_music_local']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_music_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_music_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_ballet_local']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_ballet_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_ballet_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_modelling_local']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_modelling_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_modelling_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_porn_local']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_porn_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_porn_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_stripping_local']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_stripping_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_stripping_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_kickboxing_local']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_kickboxing_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_kickboxing_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_running_local']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_running_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_running_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_volleyball_local']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_volleyball_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_volleyball_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_chess_local']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_chess_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_chess_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_teaching_local']  > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_teaching_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_teaching_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)?.[String(((s as any).fameregion ?? 0)) + '_media_local']    > 2) {
    (s as any).fame['' + String((s as any).$fameregion ?? '') + '_media_local'] = ((s as any).fame['' + String((s as any).$fameregion ?? '') + '_media_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fameregion ?? 0) === 'pav') {
    // TODO-QSP: jump 'famedegloop'
  } else {
    // TODO-QSP: jump 'famedegloop'
    if (((s as any).fameregion ?? 0) === 'village') {
      // TODO-QSP: jump 'famedegloop'
    }
    qspCall(s, 'fame', 'calculate', 'acting');
    qspCall(s, 'fame', 'calculate', 'dance');
    qspCall(s, 'fame', 'calculate', 'painting');
    qspCall(s, 'fame', 'calculate', 'music');
    qspCall(s, 'fame', 'calculate', 'ballet');
    qspCall(s, 'fame', 'calculate', 'modelling');
    qspCall(s, 'fame', 'calculate', 'porn');
    qspCall(s, 'fame', 'calculate', 'stripping');
    qspCall(s, 'fame', 'calculate', 'kickboxing');
    qspCall(s, 'fame', 'calculate', 'running');
    qspCall(s, 'fame', 'calculate', 'volleyball');
    qspCall(s, 'fame', 'calculate', 'chess');
    qspCall(s, 'fame', 'calculate', 'teaching');
    qspCall(s, 'fame', 'calculate', 'media');
    qspCall(s, 'fame', 'calculateGroups');
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'city'  ||  ((s as any).locArgs?.[0] ?? 0) === 'pav'  ||  ((s as any).locArgs?.[0] ?? 0) === 'pushkin'  ||  ((s as any).locArgs?.[0] ?? 0) === 'village') {
    if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
      if (((s as any).locArgs?.[3] ?? 0) !== 'local') {
        (s as any).ARGS[3] = 'core';
      }
      // TODO-QSP: $temp_fame_arg += '_' + $ARGS[3]
    }
    if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 1000) {
      if (((s as any).locArgs?.[2] ?? 0) === 'tiny') {
        (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (0);
      } else {
        (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (0);
        if (((s as any).locArgs?.[2] ?? 0) === 'medium') {
          (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 2) + 0);
        } else {
          (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 2) + 1);
          if (((s as any).locArgs?.[2] ?? 0) === 'huge') {
            (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 4) + 1);
          } else {
            (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 11) + 15);
            if (((s as any).locArgs?.[2] ?? 0) === 'SilverMedal') {
              (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 11) + 25);
            } else {
              (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 11) + 35);
              (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (((s as any).ARGS ?? 0)[2] / 10);
            }
            if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 700) {
              if (((s as any).locArgs?.[2] ?? 0) === 'tiny') {
                (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 2) + 0);
              } else {
                (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 2) + 1);
                if (((s as any).locArgs?.[2] ?? 0) === 'medium') {
                  (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 4) + 1);
                } else {
                  (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 7) + 6);
                  if (((s as any).locArgs?.[2] ?? 0) === 'huge') {
                    (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 15) + 10);
                  } else {
                    (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 36) + 25);
                    if (((s as any).locArgs?.[2] ?? 0) === 'SilverMedal') {
                      (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 41) + 60);
                    } else {
                      (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 51) + 100);
                      if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] / 6 < 1000) {
                        (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (((s as any).ARGS ?? 0)[2] / 6);
                      } else {
                        (s as any).fame[$temp_fame_arg] = 1000 + (3 * (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] / 6 - 1000)) / 5;
                      }
                    }
                    if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] > 400) {
                      if (((s as any).locArgs?.[2] ?? 0) === 'tiny') {
                        (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 2) + 1);
                      } else {
                        (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 4) + 1);
                        if (((s as any).locArgs?.[2] ?? 0) === 'medium') {
                          (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 7) + 6);
                        } else {
                          (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 15) + 10);
                          if (((s as any).locArgs?.[2] ?? 0) === 'huge') {
                            (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 31) + 20);
                          } else {
                            (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 51) + 50);
                            if (((s as any).locArgs?.[2] ?? 0) === 'SilverMedal') {
                              (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 51) + 100);
                            } else {
                              (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 51) + 150);
                              if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] / 3 < 700) {
                                (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (((s as any).ARGS ?? 0)[2] / 3);
                              } else {
                                (s as any).fame[$temp_fame_arg] = 700 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] / 3 - 700) / 2;
                                (s as any).fame[$temp_fame_arg] = 1000 + (3 * ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] / 3 - 700) / 2 - 300)) / 5;
                              }
                            }
                            if (((s as any).locArgs?.[2] ?? 0) === 'tiny') {
                              (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 4) + 1);
                            } else {
                              (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 7) + 6);
                              if (((s as any).locArgs?.[2] ?? 0) === 'medium') {
                                (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 15) + 10);
                              } else {
                                (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 31) + 20);
                                if (((s as any).locArgs?.[2] ?? 0) === 'huge') {
                                  (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 31) + 40);
                                } else {
                                  (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 101) + 150);
                                  if (((s as any).locArgs?.[2] ?? 0) === 'SilverMedal') {
                                    (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 101) + 250);
                                  } else {
                                    (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (Math.floor(Math.random() * 101) + 350);
                                    if (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] < 400) {
                                      (s as any).fame[$temp_fame_arg] = ((s as any).fame[$temp_fame_arg] ?? 0) + (qspUntranslated(s, "ARGS[2]", { location: "fame" }));
                                    } else {
                                      (s as any).fame[$temp_fame_arg] = 400 + (((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] - 400) / 3;
                                      if ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2]) < 3100) {
                                        (s as any).fame[$temp_fame_arg] = 700 + ((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] - 400) / 3 - 300) / 2;
                                      } else {
                                        (s as any).fame[$temp_fame_arg] = 1000 + (3 * (((((s as any).fame ?? 0)?.[String((s as any).temp_fame_arg ?? 0)] + ((s as any).ARGS ?? 0)[2] - 400) / 3 - 300) / 2 - 300)) / 5;
                                      }
                                    }
                                  }
                                  if (! qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
                                    if (((s as any).fame ?? 0)?.[String(((s as any).locArgs?.[0] ?? 0)) + '_' + String(((s as any).locArgs?.[1] ?? 0)) + '_core'] < 0) {
                                      (s as any).fame['' + String((s as any).$ARGS[0] ?? '') + '_' + String((s as any).$ARGS[1] ?? '') + '_core'] = 0;
                                    }
                                    qspCall(s, 'fame', 'calculate', ((s as any).locArgs?.[1] ?? 0));
                                  }
                                  qspCall(s, 'fame', 'calculateGroups');
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_if_only_local':
      enterCheckIfOnlyLocal(s, scene);
      break;
    case 'deg':
      enterDeg(s, scene);
      break;
    default:
      enterCheckIfOnlyLocal(s, scene);
      break;
  }
}

export const fame: LocationDef = {
  name: 'fame',
  region: 'other',
  enter: enter,
};
