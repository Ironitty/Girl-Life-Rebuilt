import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetXpprvXpnxt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$ARGS[1]>>_xpprv = func('stat_funcs', 'get_xpprv', <<$ARGS[1]>>_lvl)
  // TODO-QSP: <<$ARGS[1]>>_xpnxt = func('stat_funcs', 'get_xpnxt', <<$ARGS[1]>>_lvl)
  // TODO-QSP: "
  return;
  scene.build();
}

function enterAddAttToList(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_funcs', 'add_att_to_list', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterAddSklToList(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_funcs', 'add_skl_to_list', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterAddTraitToList(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_funcs', 'add_trait_to_list', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterDegradationLoop(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sklattrib['stat_type'] = 'attribute';
  // TODO-QSP: :degloop_outer
  (s as any).temp_sklattrib['index'] = 0;
  // TODO-QSP: :degloop_inner
  (s as any).temp_sklattrib['deg_loss'] = qspFunc(s, '_difficulty', 'get_deg_loss');
  if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
    (s as any).temp_sklattrib['name'] = qspUntranslated(s, "att_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
  } else {
    (s as any).temp_sklattrib['name'] = qspUntranslated(s, "skl_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
    (s as any).temp_sklattrib['deg_loss'] = 75 * ((s as any).temp_sklattrib ?? 0)?.['deg_loss'] / 100;
  }
  (s as any).temp_sklattrib['trait_index'] = 0;
  // TODO-QSP: :traitdegloop
  (s as any).temp_sklattrib['trait'] = qspUntranslated(s, "traitattskl[temp_sklattrib['trait_index']]", { location: "stat_sklattrib" });
  if (((s as any).temp_sklattrib ?? 0)?.['trait'] !== '') {
    (s as any).temp_sklattrib['deg_loss'] = ((s as any).temp_sklattrib['deg_loss'] ?? 0) + (((s as any).trait_vars ?? 0)?.[$((s as any).temp_sklattrib ?? 0)?.['trait'] + '-' + $((s as any).temp_sklattrib ?? 0)?.['name'] + '-((s as any).deg_loss ?? 0)']);
    (s as any).temp_sklattrib['deg_loss'] = ((s as any).temp_sklattrib['deg_loss'] ?? 0) + (((s as any).trait_vars ?? 0)?.['all-\' + $temp_sklattrib[\'name\'] + \'-deg_loss']);
  }
  (s as any).temp_sklattrib['trait_index'] = ((s as any).temp_sklattrib['trait_index'] ?? 0) + (1);
  if (((s as any).temp_sklattrib ?? 0)?.['trait_index'] < ((s as any).arrsize ?? 0)('traitattskl')) {
    // TODO-QSP: jump 'traitdegloop'
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$temp_sklattrib['name']>>_lvl = <<$temp_sklattrib['name']>>_lvlst
  (s as any).temp_sklattrib['max_deg'] = qspFunc(s, 'stat_funcs', 'get_max_deg', qspUntranslated(s, "<<temp_sklattrib['name']>>_lvl", { location: "stat_sklattrib" }), qspUntranslated(s, "<<temp_sklattrib['name']>>_muta", { location: "stat_sklattrib" }));
  if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._exp ?? 0) > ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._mem ?? 0)) {
    // TODO-QSP: <<$temp_sklattrib['name']>>_deg = temp_sklattrib['max_deg']
  } else {
    // TODO-QSP: <<$temp_sklattrib['name']>>_exp = <<$temp_sklattrib['name']>>_mem
    // TODO-QSP: <<$temp_sklattrib['name']>>_deg -= temp_sklattrib['deg_loss']
  }
  if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._deg ?? 0) <= 0) {
    if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._lvl ?? 0) <= ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._flr ?? 0)) {
      // TODO-QSP: <<$temp_sklattrib['name']>>_lvl = <<$temp_sklattrib['name']>>_flr
      // TODO-QSP: <<$temp_sklattrib['name']>>_deg = temp_sklattrib['max_deg']
    } else {
      // TODO-QSP: <<$temp_sklattrib['name']>>_lvl -= 1
      // TODO-QSP: <<$temp_sklattrib['name']>>_deg = temp_sklattrib['max_deg']
      // TODO-QSP: <<$temp_sklattrib['name']>>_xpprv = func('stat_funcs', 'get_xpprv', <<$temp_sklattrib['name']>>_lvl)
      // TODO-QSP: <<$temp_sklattrib['name']>>_xpnxt = func('stat_funcs', 'get_xpnxt', <<$temp_sklattrib['name']>>_lvl)
      // TODO-QSP: <<$temp_sklattrib['name']>>_exp = <<$temp_sklattrib['name']>>_xpprv + min(max(0, <<$temp_sklattrib['...
    }
  }
  // TODO-QSP: <<$temp_sklattrib['name']>>_lvlst = <<$temp_sklattrib['name']>>_lvl
  // TODO-QSP: <<$temp_sklattrib['name']>>_mem = <<$temp_sklattrib['name']>>_exp
  // TODO-QSP: "
  (s as any).temp_sklattrib['index'] = ((s as any).temp_sklattrib['index'] ?? 0) + (1);
  if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
    if (((s as any).temp_sklattrib ?? 0)?.['index'] < ((s as any).arrsize ?? 0)('att_name')) {
      // TODO-QSP: jump 'degloop_inner'
    }
    (s as any).temp_sklattrib['stat_type'] = 'skill';
  } else {
    if (((s as any).temp_sklattrib ?? 0)?.['index'] < ((s as any).arrsize ?? 0)('skl_name')) {
      // TODO-QSP: jump 'degloop_inner'
    }
    (s as any).temp_sklattrib['stat_type'] = 'END';
  }
  if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'skill') {
    // TODO-QSP: jump 'degloop_outer'
  }
  return;
  scene.build();
}

function enterAdvancementLoop(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'daycall') {
    (s as any).temp_sklattrib['daycall'] = 1;
  }
  (s as any).temp_sklattrib['stat_type'] = 'attribute';
  // TODO-QSP: :advloop_outer
  (s as any).temp_sklattrib['index'] = 0;
  // TODO-QSP: :advloop_inner
  if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
    (s as any).temp_sklattrib['name'] = qspUntranslated(s, "att_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
  } else {
    (s as any).temp_sklattrib['name'] = qspUntranslated(s, "skl_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
  }
  if (((s as any).temp_sklattrib ?? 0)?.['daycall']) {
    (s as any).temp_sklattrib['update_stat'] = 1;
  } else {
    // TODO-QSP: dynamic "
    if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._exp ?? 0) !== ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._mem2 ?? 0)) {
      (s as any).temp_sklattrib['update_stat'] = 1;
    } else {
      (s as any).temp_sklattrib['update_stat'] = 1;
      if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._exp ?? 0) < ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._xpprv ?? 0)) {
        (s as any).temp_sklattrib['update_stat'] = 1;
      } else {
        (s as any).temp_sklattrib['update_stat'] = 0;
      }
      // TODO-QSP: "
    }
    if (((s as any).temp_sklattrib ?? 0)?.['update_stat']) {
      // TODO-QSP: dynamic "
      // TODO-QSP: <<$temp_sklattrib['name']>>_lvl = <<$temp_sklattrib['name']>>_lvlst
      // TODO-QSP: <<$temp_sklattrib['name']>>_xpprv = func('stat_funcs', 'get_xpprv', <<$temp_sklattrib['name']>>_lvl)
      // TODO-QSP: <<$temp_sklattrib['name']>>_xpnxt = func('stat_funcs', 'get_xpnxt', <<$temp_sklattrib['name']>>_lvl)
      if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._exp ?? 0) >= ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._xpnxt ?? 0)) {
        // TODO-QSP: <<$temp_sklattrib['name']>>_lvl += 1
      } else {
        // TODO-QSP: <<$temp_sklattrib['name']>>_lvl -= 1
      }
      // TODO-QSP: <<$temp_sklattrib['name']>>_lvlst = <<$temp_sklattrib['name']>>_lvl
      if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._lvl ?? 0) / 5 > ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._flr ?? 0)) {
        // TODO-QSP: <<$temp_sklattrib['name']>>_flr = <<$temp_sklattrib['name']>>_lvl / 5
      }
      if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._lvl ?? 0) > (100 + (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._muta ?? 0) * 50))) {
        // TODO-QSP: <<$temp_sklattrib['name']>>_lvl = (100 + (<<$temp_sklattrib['name']>>_muta * 50))
      }
      // TODO-QSP: <<$temp_sklattrib['name']>>_xpprv = func('stat_funcs', 'get_xpprv', <<$temp_sklattrib['name']>>_lvl)
      // TODO-QSP: <<$temp_sklattrib['name']>>_xpnxt = func('stat_funcs', 'get_xpnxt', <<$temp_sklattrib['name']>>_lvl)
      // TODO-QSP: <<$temp_sklattrib['name']>>_mem2 = <<$temp_sklattrib['name']>>_exp
      // TODO-QSP: "
    }
    (s as any).temp_sklattrib['index'] = ((s as any).temp_sklattrib['index'] ?? 0) + (1);
    if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
      if (((s as any).temp_sklattrib ?? 0)?.['index'] < ((s as any).arrsize ?? 0)('att_name')) {
        // TODO-QSP: jump 'advloop_inner'
      }
      (s as any).temp_sklattrib['stat_type'] = 'skill';
    } else {
      if (((s as any).temp_sklattrib ?? 0)?.['index'] < ((s as any).arrsize ?? 0)('skl_name')) {
        // TODO-QSP: jump 'advloop_inner'
      }
      (s as any).temp_sklattrib['stat_type'] = 'END';
    }
    if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'skill') {
      // TODO-QSP: jump 'advloop_outer'
    }
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_xpprv_xpnxt':
      enterSetXpprvXpnxt(s, scene);
      break;
    case 'add_att_to_list':
      enterAddAttToList(s, scene);
      break;
    case 'add_skl_to_list':
      enterAddSklToList(s, scene);
      break;
    case 'add_trait_to_list':
      enterAddTraitToList(s, scene);
      break;
    case 'degradation_loop':
      enterDegradationLoop(s, scene);
      break;
    case 'advancement_loop':
      enterAdvancementLoop(s, scene);
      break;
    default:
      enterSetXpprvXpnxt(s, scene);
      break;
  }
}

export const stat_sklattrib: LocationDef = {
  name: 'stat_sklattrib',
  region: 'other',
  enter: enter,
};
