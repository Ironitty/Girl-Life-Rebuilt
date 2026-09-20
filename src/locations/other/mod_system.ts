import { hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLOCA(s: GameState, scene: SceneBuilder): void {
  (s as any).mod_system_loc = '';
  (s as any).mod_warning = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  (s as any).mod_system_loc = '';
  (s as any).mod_warning = 0;
  // TODO-QSP: $modARGS[0] = $ARGS[1]
  // TODO-QSP: $modARGS[1] = $ARGS[2]
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStat(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_stat';
  (s as any).mod_warning = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStatDisplay(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_stat_display';
  (s as any).mod_warning = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterFunc(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_func';
  (s as any).mod_warning = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterArousal(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_arousal';
  (s as any).mod_warning = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOutfit(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_' + ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: $modARGS[0] = $ARGS[2]
  ((s as any).modARGS = (s as any).modARGS ?? {})[1] = ((s as any).locArgs?.[3] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCoreLoop(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).mod_name ?? {}).length <= 0) {
    // TODO-QSP: exit
  }
  (s as any).mod_i = 0;
  // TODO-QSP: :mod_exec
  if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
    (s as any).mod_su_name = 'mod_' + ((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] + '' + ((s as any).mod_system_loc ?? 0) + '';
    if (hasLocation(((s as any).mod_su_name ?? 0))) {
      // TODO-QSP: gs $mod_su_name, iif(modARGS[0]=0, $modARGS[0], modARGS[0]), iif(modARGS[1]=0, $modARGS[1], modARGS[...
    } else {
      if (((s as any).mod_warning ?? 0)) {
        scene.text(`WARNING: ${((s as any).mod_su_name ?? '')} is not found!`);
      }
    }
  }
  (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
  if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
    // TODO-QSP: jump 'mod_exec'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSaveupdater(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).mod_name ?? {}).length <= 0) {
    // TODO-QSP: exit
  }
  (s as any).mod_i = 0;
  // TODO-QSP: :mod_data_updater
  if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
    (s as any).mod_su_name = 'mod_' + ((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] + '_setup';
    if (hasLocation(((s as any).mod_su_name ?? 0))) {
      // TODO-QSP: gs $mod_su_name, 'saveupdater'
    }
    // TODO-QSP: $mod_name[mod_i]  = $mod_info[0]
    // TODO-QSP: $mod_version[mod_i]  = $mod_info[1]
    // TODO-QSP: $mod_author[mod_i]  = $mod_info[2]
    // TODO-QSP: $mod_desc[mod_i]  = $mod_info[3]
    // TODO-QSP: $mod_opt[mod_i]    = $mod_info[4]
    (s as any).mod_su_name = 'mod_' + ((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] + '_saveupdater';
    if (hasLocation(((s as any).mod_su_name ?? 0))) {
      // TODO-QSP: gs $mod_su_name
    }
  }
  (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
  if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
    // TODO-QSP: jump 'mod_data_updater'
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddMod(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (((s as any).qspver ?? 0) < '5.8.0') {
    // TODO-QSP: addqst 'mod/<<$ARGS[1]>>.qsp'
  } else {
    // TODO-QSP: inclib 'mod/<<$ARGS[1]>>.qsp'
  }
  (s as any).mod_temp = 'mod_' + ((s as any).locArgs?.[1] ?? 0) + '_setup';
  if (hasLocation(((s as any).mod_temp ?? 0))) {
    // TODO-QSP: gs $mod_temp
  }
  if (((s as any).mod_info ?? 0)[0] === '') {
    return;
  }
  // TODO-QSP: $mod_name[] = $mod_info[0]
  // TODO-QSP: $mod_version[] = $mod_info[1]
  // TODO-QSP: $mod_author[] = $mod_info[2]
  // TODO-QSP: $mod_desc[] = $mod_info[3]
  // TODO-QSP: $mod_opt[] = $mod_info[4]
  // TODO-QSP: end
  scene.build();
}

function enterDeleteMod(s: GameState, scene: SceneBuilder): void {
  (s as any).mod_removed_temp = ((s as any).locArgs?.[1] ?? 0);
  (s as any).mod_i = 0;
  // TODO-QSP: :mod_data_remover
  if (((s as any).mod_i ?? 0) === ((s as any).mod_removed_temp ?? 0)) {
    (s as any).mod_temp = ((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)];
    (s as any).mod_su_name = 'mod_' + ((s as any).mod_temp ?? 0) + '_onremove';
    if (hasLocation(((s as any).mod_su_name ?? 0))) {
      // TODO-QSP: gs $mod_su_name
    }
  } else {
    // TODO-QSP: $mod_name_temp[mod_i] = $mod_name[mod_i]
    // TODO-QSP: $mod_version_temp[mod_i] = $mod_version[mod_i]
    // TODO-QSP: $mod_author_temp[mod_i] = $mod_author[mod_i]
    // TODO-QSP: $mod_desc_temp[mod_i] = $mod_desc[mod_i]
    // TODO-QSP: $mod_opt_temp[mod_i] = $mod_opt[mod_i]
  }
  (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
  if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
    // TODO-QSP: jump 'mod_data_remover'
  }
  if (((s as any).qspver ?? 0) < '5.8.0') {
    // TODO-QSP: killqst
  } else {
    // TODO-QSP: freelib
  }
  (s as any).mod_i = 0;
  // TODO-QSP: :mod_data_restore
  if (((s as any).mod_name_temp ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
    if (((s as any).qspver ?? 0) < '5.8.0') {
      // TODO-QSP: addqst 'mod/<<$mod_name_temp[mod_i]>>.qsp'
    } else {
      // TODO-QSP: inclib 'mod/<<$mod_name_temp[mod_i]>>.qsp'
    }
    // TODO-QSP: $mod_name[] = $mod_name_temp[mod_i]
    // TODO-QSP: $mod_version[] = $mod_version_temp[mod_i]
    // TODO-QSP: $mod_author[] = $mod_author_temp[mod_i]
    // TODO-QSP: $mod_desc[] = $mod_desc_temp[mod_i]
    // TODO-QSP: $mod_opt[] = $mod_opt_temp[mod_i]
  }
  (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
  if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name_temp ?? {}).length) {
    // TODO-QSP: jump 'mod_data_restore'
  }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateAllMods(s: GameState, scene: SceneBuilder): void {
  (s as any).mod_i = 0;
  // TODO-QSP: :mod_data_saver
  // TODO-QSP: $mod_name_temp[mod_i] = $mod_name[mod_i]
  // TODO-QSP: $mod_version_temp[mod_i] = $mod_version[mod_i]
  // TODO-QSP: $mod_author_temp[mod_i] = $mod_author[mod_i]
  // TODO-QSP: $mod_desc_temp[mod_i] = $mod_desc[mod_i]
  // TODO-QSP: $mod_opt_temp[mod_i] = $mod_opt[mod_i]
  (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
  if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
    // TODO-QSP: jump 'mod_data_saver'
  }
  if (((s as any).qspver ?? 0) < '5.8.0') {
    // TODO-QSP: killqst
  } else {
    // TODO-QSP: freelib
  }
  (s as any).mod_i = 0;
  // TODO-QSP: :mod_data_restore_update
  (s as any).mod_temp = ((s as any).mod_name_temp ?? 0)?.[String((s as any).mod_i ?? 0)];
  if (((s as any).mod_temp ?? 0) !== '') {
    if (((s as any).qspver ?? 0) < '5.8.0') {
      // TODO-QSP: addqst 'mod/<<$mod_temp>>.qsp'
    } else {
      // TODO-QSP: inclib 'mod/<<$mod_temp>>.qsp'
    }
    (s as any).mod_temp = 'mod_' + ((s as any).mod_temp ?? 0) + '_setup';
    if (hasLocation(((s as any).mod_temp ?? 0))) {
      // TODO-QSP: gs $mod_temp
    }
    // TODO-QSP: $mod_name[]    = $mod_info[0]
    // TODO-QSP: $mod_version[]  = $mod_info[1]
    // TODO-QSP: $mod_author[]  = $mod_info[2]
    // TODO-QSP: $mod_desc[]    = $mod_info[3]
    // TODO-QSP: $mod_opt[]    = $mod_info[4]
  }
  (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
  if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name_temp ?? {}).length) {
    // TODO-QSP: jump 'mod_data_restore_update'
  }
  // TODO-QSP: end
  scene.build();
}

function enterDeleteAllMods(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).mod_name ?? {}).length > 0) {
    (s as any).mod_i = 0;
    // TODO-QSP: :mod_data_remover_delall
    if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
      (s as any).mod_su_name = 'mod_' + ((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] + '_onremove';
      if (hasLocation(((s as any).mod_su_name ?? 0))) {
        // TODO-QSP: gs $mod_su_name
      }
    }
    (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
    if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
      // TODO-QSP: jump 'mod_data_remover_delall'
    }
  }
  if (((s as any).qspver ?? 0) < '5.8.0') {
    // TODO-QSP: killqst
  } else {
    // TODO-QSP: freelib
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'LOCA':
      enterLOCA(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    case 'stat':
      enterStat(s, scene);
      break;
    case 'stat_display':
      enterStatDisplay(s, scene);
      break;
    case 'func':
      enterFunc(s, scene);
      break;
    case 'arousal':
      enterArousal(s, scene);
      break;
    case 'outfit':
      enterOutfit(s, scene);
      break;
    case 'core_loop':
      enterCoreLoop(s, scene);
      break;
    case 'saveupdater':
      enterSaveupdater(s, scene);
      break;
    case 'add_mod':
      enterAddMod(s, scene);
      break;
    case 'delete_mod':
      enterDeleteMod(s, scene);
      break;
    case 'update_all_mods':
      enterUpdateAllMods(s, scene);
      break;
    case 'delete_all_mods':
      enterDeleteAllMods(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mod_system: LocationDef = {
  name: 'mod_system',
  title: 'WARNING:  is not found!',
  region: 'other',
  enter: enter,
};
