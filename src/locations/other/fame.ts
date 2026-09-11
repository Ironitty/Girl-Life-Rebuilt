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
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_sex']        > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sex'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sex'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_prostitute']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_prostitute'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_prostitute'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_flash']      > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_flash'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_flash'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_acting_core']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_acting_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_acting_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_dance_core']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_dance_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_dance_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_painting_core']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_painting_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_painting_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_music_core']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_music_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_music_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_ballet_core']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_ballet_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_ballet_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_modelling_core']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_modelling_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_modelling_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_porn_core']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_porn_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_porn_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_stripping_core']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_stripping_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_stripping_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_kickboxing_core']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_kickboxing_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_kickboxing_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_running_core']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_running_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_running_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_volleyball_core']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_volleyball_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_volleyball_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_chess_core']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_chess_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_chess_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_teaching_core']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_teaching_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_teaching_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_media_core']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_media_core'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_media_core'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_acting_local']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_acting_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_acting_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_dance_local']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_dance_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_dance_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_painting_local']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_painting_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_painting_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_music_local']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_music_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_music_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_ballet_local']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_ballet_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_ballet_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_modelling_local']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_modelling_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_modelling_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_porn_local']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_porn_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_porn_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_stripping_local']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_stripping_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_stripping_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_kickboxing_local']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_kickboxing_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_kickboxing_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_running_local']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_running_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_running_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_volleyball_local']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_volleyball_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_volleyball_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_chess_local']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_chess_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_chess_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_teaching_local']  > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_teaching_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_teaching_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_media_local']    > 2) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_media_local'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_media_local'] ?? 0) - (((s as any).rand ?? 0)(-1, 3));
  }
  if (((s as any).fameregion ?? 0) === 'pav') {
    // TODO-QSP: jump 'famedegloop'
  } else {
    if (((s as any).fameregion ?? 0) === 'city') {
      // TODO-QSP: jump 'famedegloop'
    } else {
      if (((s as any).fameregion ?? 0) === 'village') {
        // TODO-QSP: jump 'famedegloop'
      }
    }
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
  scene.build();
}

function enterSetContributions(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    return;
  }
  if (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 2000) {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + '_contribution_low'] = 525;
  } else {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + '_contribution_low'] = 1050 - (42000000 / ((((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) + 40000));
  }
  if (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 1005) {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + '_contribution_high'] = 1005;
  } else {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + '_contribution_high'] = (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] * (1050 - 525000000 / (500000 + (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10)))) / 1050;
  }
  if (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 2000) {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + '_contribution_medium'] = 1050;
  } else {
    if (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 400) {
      ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + '_contribution_medium'] = 1050 - (672000000 / ((((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) + 640000));
    } else {
      ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + '_contribution_medium'] = 0;
    }
  }
  if (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 2000) {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + '_contribution_high'] = 1050;
  } else {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + '_contribution_high'] = 1050 - (52500000 / ((((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) + 50000));
  }
  if (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 1000) {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + '_contribution_medium'] = 1000;
  } else {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + '_contribution_medium'] = ((((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'])) / 1000;
  }
  if (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 2000) {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + '_contribution_low'] = 1050;
  } else {
    if (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0)] >= 200) {
      ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + '_contribution_low'] = 1050 - (672000000 / ((((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 -20) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 20) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 20) * (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 20) + 640000));
    } else {
      ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + '_contribution_low'] = 0;
    }
  }
  if (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 1005) {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + '_contribution_high'] = 1050;
  } else {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + '_contribution_high'] = (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] * (1050 - 525000000 / (500000 + (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10)))) / 1050;
  }
  if (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 2000) {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + '_low'] = 525;
  } else {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + '_low'] = 1050 - (42000000 / ((((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10) + 40000));
  }
  if (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 2000) {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + '_contribution_medium'] = 1050;
  } else {
    if (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 400) {
      ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + '_contribution_medium'] = 1050 - (672000000 / ((((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 -40) * (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 10 - 40) + 640000));
    } else {
      ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + '_contribution_medium'] = 0;
    }
  }
  ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + '_contribution'] = ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] / 100;
  scene.build();
}

function enterCalculate(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'fame', 'check_if_only_local', ((s as any).locArgs?.[1] ?? 0))) {
    return;
  }
  qspCall(s, 'fame', 'set_contributions', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 1000) {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_local'] / 1000;
  } else {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = (1000 * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + (1000 - ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_local']) / 1000;
  }
  if (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0)] >= 1000) {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high'] / 1000);
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high'] / 1000);
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution'] / 1000);
  } else {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high']) / 1000);
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high']) / 1000);
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution']) / 1000);
  }
  if (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0)] < 0) {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = 0;
  }
  if (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0)] > 1200) {
    ((s as any).fame ?? {})['pav_' + String((s as any).$ARGS[1] || '') + ''] = 1200;
  }
  if (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 1000) {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_local'] / 1000;
  } else {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = (1000 * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + (1000 - ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_local']) / 1000;
  }
  if (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0)] >= 1000) {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low'] / 1000);
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low'] / 1000);
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution'] / 1000);
  } else {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low']) / 1000);
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low']) / 1000);
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution']) / 1000);
  }
  if (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0)] < 0) {
    ((s as any).fame ?? {})['city_' + String((s as any).$ARGS[1] || '') + ''] = 0;
  }
  if (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0)] > 1200) {
    ((s as any).fame ?? {})['ctiy_' + String((s as any).$ARGS[1] || '') + ''] = 1200;
  }
  if (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 1000) {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_local'] / 1000;
  } else {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = (1000 * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + (1000 - ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_local']) / 1000;
  }
  if (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0)] >= 1000) {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high'] / 1000);
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high'] / 1000);
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution'] / 1000);
  } else {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high']) / 1000);
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000-((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_high']) / 1000);
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution']) / 1000);
  }
  if (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0)] < 0) {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = 0;
  }
  if (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0)] > 1200) {
    ((s as any).fame ?? {})['pushkin_' + String((s as any).$ARGS[1] || '') + ''] = 1200;
  }
  if (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] >= 1000) {
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_local'] / 1000;
  } else {
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = (1000 * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core'] + (1000 - ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_core']) * ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '_local']) / 1000;
  }
  if (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0)] >= 1000) {
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_medium'] / 1000);
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low'] / 1000);
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_medium'] / 1000);
  } else {
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pav_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_medium']) / 1000);
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['city_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_low']) / 1000);
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = (((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] ?? 0) + (((1000 - ((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0) + '']) * ((s as any).fame ?? 0)['pushkin_' + ((s as any).locArgs?.[1] ?? 0) + '_contribution_medium']) / 1000);
  }
  if (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0)] < 0) {
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = 0;
  }
  if (((s as any).fame ?? 0)['village_' + ((s as any).locArgs?.[1] ?? 0)] > 1200) {
    ((s as any).fame ?? {})['village_' + String((s as any).$ARGS[1] || '') + ''] = 1200;
  }
  scene.build();
}

function enterCalculateGroups(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :fameregionloop
  ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] = 0;
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_acting']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_acting'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_dance']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_dance'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_painting']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_painting'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_music']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_music'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_ballet']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_ballet'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_modelling']  > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_performer'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_modelling'] - 30) / 3);
  }
  ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sexind'] = 0;
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_porn']      > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sexind'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sexind'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_porn'] - 30) / 2);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_stripping']  > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sexind'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sexind'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_stripping'] - 30) / 2);
  }
  ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_slut'] = 0;
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_sex']      > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_slut'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_slut'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_sex'] - 30) / 2);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_prostitute']  > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_slut'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_slut'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_prostitute'] - 30) / 2);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_flash']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_slut'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_slut'] ?? 0) + (Math.min(((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_flash'] - 30, 100) / 4);
  }
  ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sport'] = 0;
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_kickboxing']  > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sport'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sport'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_kickboxing'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_running']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sport'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sport'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_running'] - 30) / 3);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_volleyball']  > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sport'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_sport'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_volleyball'] - 30) / 3);
  }
  ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_int'] = 0;
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_chess']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_int'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_int'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_chess'] - 30) / 2);
  }
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_teaching']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_int'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_int'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_teaching'] - 30) / 3);
  }
  ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_social'] = 0;
  if (((s as any).fame ?? 0)[((s as any).fameregion ?? 0) + '_media']    > 30) {
    ((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_social'] = (((s as any).fame ?? {})['' + String((s as any).$fameregion || '') + '_social'] ?? 0) + ((((s as any).fame ?? 0)['' + ((s as any).fameregion ?? 0) + '_media'] - 30) / 2);
  }
  if (((s as any).fameregion ?? 0) === 'pav') {
    // TODO-QSP: jump 'fameregionloop'
  } else {
    if (((s as any).fameregion ?? 0) === 'city') {
      // TODO-QSP: jump 'fameregionloop'
    } else {
      if (((s as any).fameregion ?? 0) === 'village') {
        // TODO-QSP: jump 'fameregionloop'
      }
    }
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] < 25) {
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] < 50) {
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 75) {
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] < 125) {
          } else {
            if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
            } else {
              if (((s as any).fame ?? 0)?.['pav_slut'] < 175) {
              } else {
                if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
                } else {
                  if (((s as any).fame ?? 0)?.['pav_slut'] < 225) {
                  } else {
                    if (((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                    } else {
                      if (((s as any).fame ?? 0)?.['pav_slut'] < 275) {
                      } else {
                        if (((s as any).fame ?? 0)?.['pav_slut'] < 300) {
                        }
                      }
                    }
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

function enterCalculateSlut(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'calculateGroups');
  scene.build();
}

function enterChurchReduction(s: GameState, scene: SceneBuilder): void {
  ((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_sex'] = (((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_sex'] ?? 0) - (qspUntranslated(s, "ARGS[2]", { location: "fame" }));
  ((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_prostitute'] = (((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_prostitute'] ?? 0) - (qspUntranslated(s, "ARGS[2]", { location: "fame" }));
  ((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_flash'] = (((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_flash'] ?? 0) - (2 * ((s as any).ARGS ?? 0)[2]);
  if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_sex'] < 0) {
    ((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_sex'] = 0;
  }
  if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_prostitute'] < 0) {
    ((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_prostitute'] = 0;
  }
  if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_flash'] < 0) {
    ((s as any).fame ?? {})['' + String((s as any).$ARGS[1] || '') + '_flash'] = 0;
  }
  qspCall(s, 'fame', 'calculateGroups');
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
      enterCheckIfOnlyLocal(s, scene);
      break;
  }
}

export const fame: LocationDef = {
  name: 'fame',
  region: 'other',
  enter: enter,
};
