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
    (s as any).temp_sklattrib['deg_loss'] = 75 * ((s as any).temp_sklattrib ?? {})?.['deg_loss'] / 100;
  }
  (s as any).temp_sklattrib['trait_index'] = 0;
  // TODO-QSP: :traitdegloop
  (s as any).temp_sklattrib['trait'] = qspUntranslated(s, "traitattskl[temp_sklattrib['trait_index']]", { location: "stat_sklattrib" });
  if (((s as any).temp_sklattrib ?? 0)?.['trait'] !== '') {
    (s as any).temp_sklattrib['deg_loss'] = ((s as any).temp_sklattrib['deg_loss'] ?? 0) + (((s as any).trait_vars ?? 0)?.[((s as any).temp_sklattrib ?? {})?.['trait'] + '-' + ((s as any).temp_sklattrib ?? {})?.['name'] + '-deg_loss']);
    (s as any).temp_sklattrib['deg_loss'] = ((s as any).temp_sklattrib['deg_loss'] ?? 0) + (((s as any).trait_vars ?? 0)?.['all-\' + $temp_sklattrib[\'name\'] + \'-deg_loss']);
  }
  (s as any).temp_sklattrib['trait_index'] = ((s as any).temp_sklattrib['trait_index'] ?? 0) + (1);
  if (((s as any).temp_sklattrib ?? 0)?.['trait_index'] < Object.keys((s as any).traitattskl ?? {}).length) {
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
    if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).att_name ?? {}).length) {
      // TODO-QSP: jump 'degloop_inner'
    }
    (s as any).temp_sklattrib['stat_type'] = 'skill';
  } else {
    if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).skl_name ?? {}).length) {
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
      if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._exp ?? 0) >= ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._xpnxt ?? 0)) {
        (s as any).temp_sklattrib['update_stat'] = 1;
      } else {
        if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._exp ?? 0) < ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._xpprv ?? 0)) {
          (s as any).temp_sklattrib['update_stat'] = 1;
        } else {
          (s as any).temp_sklattrib['update_stat'] = 0;
        }
      }
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
      if (((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._exp ?? 0) < ((s as any).temp_sklattrib ?? 0)?.['name']((s as any)._xpprv ?? 0)) {
        // TODO-QSP: <<$temp_sklattrib['name']>>_lvl -= 1
      }
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
    if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).att_name ?? {}).length) {
      // TODO-QSP: jump 'advloop_inner'
    }
    (s as any).temp_sklattrib['stat_type'] = 'skill';
  } else {
    if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).skl_name ?? {}).length) {
      // TODO-QSP: jump 'advloop_inner'
    }
    (s as any).temp_sklattrib['stat_type'] = 'END';
  }
  if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'skill') {
    // TODO-QSP: jump 'advloop_outer'
  }
  return;
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_sklattrib', 'init_vars');
  if (((s as any).attsklupdate ?? 0)  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  qspCall(s, 'stat_sklattrib', 'init_loop');
  (s as any).attsklupdate = 1;
  scene.build();
}

function enterInitLoop(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sklattrib['stat_type'] = 'attribute';
  // TODO-QSP: :initloop_outer
  (s as any).temp_sklattrib['index'] = 0;
  // TODO-QSP: :initloop_inner
  if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
    (s as any).temp_sklattrib['name'] = qspUntranslated(s, "att_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
  } else {
    (s as any).temp_sklattrib['name'] = qspUntranslated(s, "skl_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
  }
  // TODO-QSP: dynamic "
  if (((s as any).pcs_ ?? 0)((s as any).temp_sklattrib ?? 0)?.['name'] > 0  &&  ((s as any).temp_sklattrib ?? 0)?.['name'](!((s as any)._lvl ?? 0))) {
    // TODO-QSP: <<$temp_sklattrib['name']>>_lvl = pcs_<<$temp_sklattrib['name']>>
    // TODO-QSP: <<$temp_sklattrib['name']>>_lvlst = <<$temp_sklattrib['name']>>_lvl
    // TODO-QSP: <<$temp_sklattrib['name']>>_xpprv = func('stat_funcs', 'get_xpprv', <<$temp_sklattrib['name']>>_lvl)
    // TODO-QSP: <<$temp_sklattrib['name']>>_xpnxt = func('stat_funcs', 'get_xpnxt', <<$temp_sklattrib['name']>>_lvl)
    // TODO-QSP: <<$temp_sklattrib['name']>>_exp = <<$temp_sklattrib['name']>>_xpprv + 1
    // TODO-QSP: <<$temp_sklattrib['name']>>_mem = <<$temp_sklattrib['name']>>_xpprv
    (s as any).temp_sklattrib['max_deg'] = qspFunc(s, 'stat_funcs', 'get_max_deg', qspUntranslated(s, "<<temp_sklattrib['name']>>_lvl", { location: "stat_sklattrib" }), qspUntranslated(s, "<<temp_sklattrib['name']>>_muta", { location: "stat_sklattrib" }));
    // TODO-QSP: <<$temp_sklattrib['name']>>_deg = rand(max(100, temp_sklattrib['max_deg'] / 2), max(150, 3 * temp_sk...
  }
  // TODO-QSP: "
  (s as any).temp_sklattrib['index'] = ((s as any).temp_sklattrib['index'] ?? 0) + (1);
  if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
    if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).att_name ?? {}).length) {
      // TODO-QSP: jump 'initloop_inner'
    }
    (s as any).temp_sklattrib['stat_type'] = 'skill';
  } else {
    if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).skl_name ?? {}).length) {
      // TODO-QSP: jump 'initloop_inner'
    }
    (s as any).temp_sklattrib['stat_type'] = 'END';
  }
  if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'skill') {
    // TODO-QSP: jump 'initloop_outer'
  }
  return;
  scene.build();
}

function enterInitVars(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $att_name[0]  = 'stren'      & $att_desc['stren']    = 'Strength'
  // TODO-QSP: $att_name[1]  = 'agil'      & $att_desc['agil']      = 'Agility'
  // TODO-QSP: $att_name[2]  = 'vital'      & $att_desc['vital']    = 'Endurance'
  // TODO-QSP: $att_name[3]  = 'intel'      & $att_desc['intel']    = 'Intelligence'
  // TODO-QSP: $att_name[4]  = 'react'      & $att_desc['react']    = 'Reaction'
  // TODO-QSP: $att_name[5]  = 'sprt'      & $att_desc['sprt']      = 'Spirit'
  // TODO-QSP: $att_name[6]  = 'chrsm'      & $att_desc['chrsm']    = 'Charisma'
  // TODO-QSP: $att_name[7]  = 'prcptn'      & $att_desc['prcptn']    = 'Perception'
  // TODO-QSP: $att_name[8]  = 'magik'      & $att_desc['magik']    = 'Magic'
  // TODO-QSP: $att_name[9]  = 'stren_plus'    & $att_desc['stren_plus']  = 'Musculature'
  // TODO-QSP: $att_name[10]  = 'butt_tr'      & $att_desc['butt_tr']    = 'Butt Training'
  // TODO-QSP: $skl_name[0]  = 'jab'        & $skl_desc['jab']      = 'Jabs'
  // TODO-QSP: $skl_name[1]  = 'punch'      & $skl_desc['punch']    = 'Power Strikes'
  // TODO-QSP: $skl_name[2]  = 'kick'      & $skl_desc['kick']      = 'Kicks'
  // TODO-QSP: $skl_name[3]  = 'def'        & $skl_desc['def']      = 'Defense'
  // TODO-QSP: $skl_name[4]  = 'shoot'      & $skl_desc['shoot']    = 'Shooting Accuracy'
  // TODO-QSP: $skl_name[5]  = 'vokal'      & $skl_desc['vokal']    = 'Singing'
  // TODO-QSP: $skl_name[6]  = 'sewng'      & $skl_desc['sewng']    = 'Tailoring'
  // TODO-QSP: $skl_name[7]  = 'instrmusic'    & $skl_desc['instrmusic']  = 'Instrumental Music'
  // TODO-QSP: $skl_name[8]  = 'photoskl'    & $skl_desc['photoskl']    = 'Photography'
  // TODO-QSP: $skl_name[9]  = 'artskls'      & $skl_desc['artskls']    = 'Artistic Skills'
  // TODO-QSP: $skl_name[10]  = 'danc'      & $skl_desc['danc']      = 'Modern Dancing'
  // TODO-QSP: $skl_name[11]  = 'dancero'      & $skl_desc['dancero']    = 'Erotic Dancing'
  // TODO-QSP: $skl_name[12]  = 'dancpol'      & $skl_desc['dancpol']    = 'Pole Dancing'
  // TODO-QSP: $skl_name[13]  = 'chess'      & $skl_desc['chess']    = 'Chess'
  // TODO-QSP: $skl_name[14]  = 'gaming'      & $skl_desc['gaming']    = 'Gaming'
  // TODO-QSP: $skl_name[15]  = 'humint'      & $skl_desc['humint']    = 'People Skills'
  // TODO-QSP: $skl_name[16]  = 'persuas'      & $skl_desc['persuas']    = 'Persuasion'
  // TODO-QSP: $skl_name[17]  = 'run'        & $skl_desc['run']      = 'Running'
  // TODO-QSP: $skl_name[18]  = 'icesktng'    & $skl_desc['icesktng']    = 'Ice Skating'
  // TODO-QSP: $skl_name[19]  = 'wrstlng'      & $skl_desc['wrstlng']    = 'Wrestling'
  // TODO-QSP: $skl_name[20]  = 'ftbll'      & $skl_desc['ftbll']    = 'Football'
  // TODO-QSP: $skl_name[21]  = 'splcstng'    & $skl_desc['splcstng']    = 'Spell Casting'
  // TODO-QSP: $skl_name[22]  = 'observ'      & $skl_desc['observ']    = 'Observation'
  // TODO-QSP: $skl_name[23]  = 'makupskl'    & $skl_desc['makupskl']    = 'Makeup Skill'
  // TODO-QSP: $skl_name[24]  = 'compskl'      & $skl_desc['compskl']    = 'Computer Skill'
  // TODO-QSP: $skl_name[25]  = 'comphckng'    & $skl_desc['comphckng']  = 'Computer Hacking'
  // TODO-QSP: $skl_name[26]  = 'hndiwrk'      & $skl_desc['hndiwrk']    = 'Handiwork'
  // TODO-QSP: $skl_name[27]  = 'servng'      & $skl_desc['servng']    = 'Serving'
  // TODO-QSP: $skl_name[28]  = 'mdlng'      & $skl_desc['mdlng']    = 'Modeling'
  // TODO-QSP: $skl_name[29]  = 'medcn'      & $skl_desc['medcn']    = 'Medicine'
  // TODO-QSP: $skl_name[30]  = 'heels'      & $skl_desc['heels']    = 'Heels'
  // TODO-QSP: $skl_name[31]  = 'pool'      & $skl_desc['pool']      = 'Pool'
  // TODO-QSP: $skl_name[32]  = 'inhib'      & $skl_desc['inhib']    = 'Inhibition'
  // TODO-QSP: $skl_name[33]  = 'perform'      & $skl_desc['perform']    = 'Performance'
  // TODO-QSP: $skl_name[34]  = 'bushcraft'    & $skl_desc['bushcraft']  = 'Bushcraft'
  // TODO-QSP: $skl_name[35]  = 'cleaning'    & $skl_desc['cleaning']    = 'Cleaning'
  // TODO-QSP: $skl_name[36]  = 'bkbll'      & $skl_desc['bkbll']    = 'Basketball'
  // TODO-QSP: $skl_name[37]  = 'cheer'      & $skl_desc['cheer']    = 'Cheerleading'
  // TODO-QSP: $skl_name[38]  = 'musicprod'    & $skl_desc['musicprod']  = 'Music Production'
  // TODO-QSP: $skl_name[39]  = 'songwrit'    & $skl_desc['songwrit']    = 'Songwriting'
  // TODO-QSP: $skl_name[40]  = 'vball'      & $skl_desc['vball']    = 'Volleyball'
  return;
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
    case 'init':
      enterInit(s, scene);
      break;
    case 'init_loop':
      enterInitLoop(s, scene);
      break;
    case 'init_vars':
      enterInitVars(s, scene);
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
