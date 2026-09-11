import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCleanarrays(s: GameState, scene: SceneBuilder): void {
  (s as any).i_gs_cl = 0;
  // TODO-QSP: :CiklNpcCleanLoop
  (s as any).i_gs_cl = ((s as any).i_gs_cl ?? 0) - (1);
  if (((s as any).i_gs_cl ?? 0) >= 0) {
    if (((((((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) !== 'C') {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    if (((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)] === ((s as any).npclastgenerated ?? 0)) {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    if ((Array.isArray((s as any).cumarrnam) ? ((s as any).cumarrnam as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    if ((Array.isArray((s as any).sparrnam) ? ((s as any).sparrnam as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    if ((Array.isArray((s as any).cumfthname) ? ((s as any).cumfthname as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    if ((Array.isArray((s as any).wombpotfath) ? ((s as any).wombpotfath as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    if ((Array.isArray((s as any).wombName) ? ((s as any).wombName as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    if ((Array.isArray((s as any).ChildFath) ? ((s as any).ChildFath as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    if ((Array.isArray((s as any).ChildThFath) ? ((s as any).ChildThFath as any[]).indexOf(((s as any).npc_index ?? 0)?.[String((s as any).i_gs_cl ?? 0)]) : -1) >= 0) {
      // TODO-QSP: jump 'CiklNpcCleanLoop'
    }
    // TODO-QSP: gs 'npccleanc', $ucase($npc_index[i_gs_cl])
    // TODO-QSP: jump 'CiklNpcCleanLoop'
  }
  scene.build();
}

function enterAge(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_npcVars ?? {})['day'] = (((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] % 100);
  ((s as any).temp_npcVars ?? {})['month'] = (((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 100) % 100;
  ((s as any).temp_npcVars ?? {})['year'] = ((s as any).npc_dob ?? 0)[((s as any).locArgs?.[1] ?? 0)] / 10000;
  (s as any).result = qspFunc(s, 'time', 'get_age', ((s as any).temp_timeVars ?? 0)?.['year'], ((s as any).temp_timeVars ?? 0)?.['month'], ((s as any).temp_timeVars ?? 0)?.['day']);
  scene.build();
}

function enterIsNpcID(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((((s as any).locArgs?.[1] ?? 0)).length) > 1) {
    (s as any).result = ((('ABCDM').indexOf((((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1)))))) + 1 > 0  &&  !isNaN(((((s as any).locArgs?.[1] ?? 0)).slice((2)-1))) && ((((s as any).locArgs?.[1] ?? 0)).slice((2)-1)) !== '');
  }
  return;
  scene.build();
}

function enterFindInNpcStat(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_npc_i = qspUntranslated(s, "arrpos('npcID', ARGS[1])", { location: "npc" });
  if (((s as any).temp_npc_i ?? 0) >= 0) {
    return;
  }
  (s as any).temp_npc_i = 1;
  // TODO-QSP: :npcfindloop
  if ((0 as any) === ((s as any).locArgs?.[1] ?? 0)) {
  }
  (s as any).temp_npc_i = ((s as any).temp_npc_i ?? 0) + (1);
  if (((s as any).temp_npc_i ?? 0) < 10  &&  ((s as any).result ?? 0) === '') {
    // TODO-QSP: jump 'npcfindloop'
  }
  if (((s as any).result ?? 0) === '') {
  }
  scene.build();
}

function enterCopyNpcStat(s: GameState, scene: SceneBuilder): void {
  if (!isNaN(((s as any).locArgs?.[1] ?? 0)) && ((s as any).locArgs?.[1] ?? 0) !== '') {
    // TODO-QSP: $ARGS[1] = '[<<$ARGS[1]>>]'
  } else {
    if (((s as any).locArgs?.[1] ?? 0) !== ''  &&  ((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) !== '[') {
      // TODO-QSP: $ARGS[1] = "<<instr('abcdefghijklmnopqrstuvwxyz', $ARGS[1])>>"
      if (((s as any).locArgs?.[1] ?? 0) === "0") {
        ((s as any).ARGS ?? {})[1] = '';
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = '[' + qspUntranslated(s, "ARGS[1]>", { location: "npc" }) + ']';
  }
  if ((('abcdefghijklmnopqrstuvwxyz').indexOf((((s as any).locArgs?.[2] ?? 0)))) + 1) {
    // TODO-QSP: $ARGS[2] = "'<<$ARGS[2]>>'"
  } else {
    // TODO-QSP: $ARGS[2] = '<<ARGS[2]>>'
  }
  // TODO-QSP: dynamic "gs 'npcStat', $npcID<<$ARGS[1]>>, <<$ARGS[2]>>, $npcCondom<<$ARGS[1]>>"
  scene.build();
}

function enterGetNpcCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS ?? {})[1] = 'npc_sexual';
  }
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    ((s as any).ARGS ?? {})[2] = 'ABCM';
  }
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    ((s as any).ARGS ?? {})[3] = '0123';
  }
  ((s as any).npc_results ?? {})['guys'] = 0;
  ((s as any).npc_results ?? {})['girls'] = 0;
  ((s as any).npc_results ?? {})['herms'] = 0;
  if (((s as any).arrsize ?? 0)(!(((s as any).locArgs?.[1] ?? 0)))) {
    // TODO-QSP: exit
  }
  ((s as any).temp_npcVars ?? {})['outer_i'] = 0;
  // TODO-QSP: :loop_outer_npc_count
  ((s as any).temp_npcVars ?? {})['char'] = 0;
  ((s as any).temp_npcVars ?? {})['inner_i'] = 1;
  // TODO-QSP: :loop_inner_npc_count
  ((s as any).temp_npcVars ?? {})['npcID'] = ((s as any).temp_npcVars ?? {})?.['char'] + ((s as any).temp_npcVars ?? {})?.['inner_i'];
  if ((0 as any) > 0) {
    if (((s as any).npc_gender ?? 0)[((s as any).temp_npcVars ?? 0)?.['npcID']] === 0) {
      ((s as any).npc_results ?? {})['guys'] = (((s as any).npc_results ?? {})['guys'] ?? 0) + (1);
    } else {
      if (((s as any).npc_gender ?? 0)[((s as any).temp_npcVars ?? 0)?.['npcID']] === 1) {
        ((s as any).npc_results ?? {})['girls'] = (((s as any).npc_results ?? {})['girls'] ?? 0) + (1);
      } else {
        ((s as any).npc_results ?? {})['herms'] = (((s as any).npc_results ?? {})['herms'] ?? 0) + (1);
      }
    }
  }
  ((s as any).temp_npcVars ?? {})['inner_i'] = (((s as any).temp_npcVars ?? {})['inner_i'] ?? 0) + (1);
  if (((s as any).temp_npcVars ?? 0)?.['inner_i'] < (0 as any)) {
    // TODO-QSP: jump 'loop_inner_npc_count'
  }
  // TODO-QSP: $ARGS[2] = $mid($ARGS[2], 2)
  if (((((s as any).locArgs?.[2] ?? 0)).length) > 0) {
    // TODO-QSP: jump 'loop_outer_npc_count'
  }
  scene.build();
}

function enterUpdateHotcat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).locArgs?.[2] ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    ((s as any).ARGS ?? {})[3] = '$result = $npc_index[ARGS[0]]';
  }
  ((s as any).ciklVars ?? {})['i'] = qspUntranslated(s, "ARGS[1]", { location: "npc" });
  ((s as any).ciklVars ?? {})['max_i'] = qspUntranslated(s, "ARGS[2]", { location: "npc" });
  // TODO-QSP: :hotcat_calc_jump
  ((s as any).ciklVars ?? {})['npcID'] = 0;
  if (((s as any).npc_hotcat ?? 0)[((s as any).ciklVars ?? 0)?.['npcID']] > 0) {
    ((s as any).ciklVars ?? {})['switch_rand'] = Math.floor(Math.random() * 100) + 0;
    if (((s as any).hotcat_movement ?? 0)[((s as any).ciklVars ?? 0)?.['npcID']] === 0) {
      if (((s as any).ciklVars ?? 0)?.['switch_rand'] < 20) {
        // TODO-QSP: npc_hotcat[$ciklVars['npcID']] -= 1
        // TODO-QSP: hotcat_movement[$ciklVars['npcID']] -= 1
      } else {
        if (((s as any).ciklVars ?? 0)?.['switch_rand'] < 40) {
          // TODO-QSP: npc_hotcat[$ciklVars['npcID']] += 1
          // TODO-QSP: hotcat_movement[$ciklVars['npcID']] += 1
        }
      }
    } else {
      if (((s as any).ciklVars ?? 0)?.['switch_rand'] >= 40) {
        // TODO-QSP: npc_hotcat[$ciklVars['npcID']] -= hotcat_movement[$ciklVars['npcID']]
        // TODO-QSP: hotcat_movement[$ciklVars['npcID']] = 0
      }
    }
  }
  ((s as any).ciklVars ?? {})['i'] = (((s as any).ciklVars ?? {})['i'] ?? 0) + (1);
  if (((s as any).ciklVars ?? 0)?.['i'] < ((s as any).ciklVars ?? 0)?.['max_i']) {
    // TODO-QSP: jump 'hotcat_calc_jump'
  }
  return;
  scene.build();
}

function enterNpcStatUpdateAll(s: GameState, scene: SceneBuilder): void {
  (s as any).npcStat_update_i = 0;
  (s as any).npcStat_update_max_i = 0;
  // TODO-QSP: :update_loop1
  if (((s as any).npcID ?? 0)?.[String((s as any).npcStat_update_i ?? 0)] !== '') {
    // TODO-QSP: gs 'npcStat', $npcID[npcStat_update_i], npcStat_update_i, $npcCondom[npcStat_update_i]
  }
  (s as any).npcStat_update_i = ((s as any).npcStat_update_i ?? 0) + (1);
  if (((s as any).npcStat_update_i ?? 0) < ((s as any).npcStat_update_max_i ?? 0)) {
    // TODO-QSP: jump 'update_loop1'
  }
  (s as any).npcStat_update_i = 1;
  (s as any).npcStat_update_max_i = 26;
  // TODO-QSP: :update_loop2
  // TODO-QSP: dynamic "
  if (((s as any).npcID ?? 0)((s as any).npcStat_update_i ?? 0) !== '') {
    // TODO-QSP: gs 'npcStat', $npcID<<npcStat_update_i>>, '<<$npcStat_update_letter>>', $npcCondom<<npcStat_update_i...
  }
  // TODO-QSP: "
  (s as any).npcStat_update_i = ((s as any).npcStat_update_i ?? 0) + (1);
  if (((s as any).npcStat_update_i ?? 0) <= ((s as any).npcStat_update_max_i ?? 0)) {
    // TODO-QSP: jump 'update_loop2'
  }
  return;
  scene.build();
}

function enterIntro(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *clear
  if (((s as any).npc_rel ?? 0)?.[String((s as any).static_num ?? 0)] < 20) {
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).static_num ?? 0)] >= 20  &&  ((s as any).npc_rel ?? 0)?.[String((s as any).static_num ?? 0)] < 40) {
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).static_num ?? 0)] >= 40  &&  ((s as any).npc_rel ?? 0)?.[String((s as any).static_num ?? 0)] < 60) {
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).static_num ?? 0)] >= 60  &&  ((s as any).npc_rel ?? 0)?.[String((s as any).static_num ?? 0)] < 80) {
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).static_num ?? 0)] >= 80) {
  }
  if (((s as any).locArgs?.[2] ?? 0) === '') {
  }
  if (((s as any).locArgs?.[3] ?? 0) === '') {
  }
  if (((s as any).locArgs?.[4] ?? 0) === '') {
  }
  // TODO-QSP: '<center><b><font color = <<$titlecolor>>><<$npc_firstname[$static_num]>> <<$npc_lastname[$static_nu...
  if (((s as any).image_path ?? 0) !== '') {
    if ((!((s as any).locArgs?.[6] ?? 0))) {
      // TODO-QSP: '<center><img <<$set_imgh>> src="<<$image_path>>"></center>' & *nl
    } else {
      // TODO-QSP: '<center><video autoplay loop <<$set_imgh>> src="<<$image_path>>"></video></center>' & *nl
    }
  }
  if (((s as any).description ?? 0) !== ''  &&  ((s as any).description ?? 0) !== ' ') {
    // TODO-QSP: $description + $npc_cur_rel
  }
  if (((s as any).apendix ?? 0) !== ''  &&  ((s as any).apendix ?? 0) !== ' ') {
    // TODO-QSP: $apendix
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cleanarrays':
      enterCleanarrays(s, scene);
      break;
    case 'age':
      enterAge(s, scene);
      break;
    case 'is_npcID':
      enterIsNpcID(s, scene);
      break;
    case 'find_in_npcStat':
      enterFindInNpcStat(s, scene);
      break;
    case 'copy_npcStat':
      enterCopyNpcStat(s, scene);
      break;
    case 'get_npc_count':
      enterGetNpcCount(s, scene);
      break;
    case 'update_hotcat':
      enterUpdateHotcat(s, scene);
      break;
    case 'npcStat_update_all':
      enterNpcStatUpdateAll(s, scene);
      break;
    case 'intro':
      enterIntro(s, scene);
      break;
    default:
      enterCleanarrays(s, scene);
      break;
  }
}

export const npc: LocationDef = {
  name: 'npc',
  region: 'other',
  enter: enter,
};
