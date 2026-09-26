import { qspCall, hasLocation } from '../_shared/qspBridge';

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
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  (s as any).mod_system_loc = '';
  (s as any).mod_warning = 0;
  (s as any).modARGS = undefined;
  ((s as any).modARGS = (s as any).modARGS ?? {})[0] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).modARGS = (s as any).modARGS ?? {})[1] = ((s as any).locArgs?.[2] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterStat(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_stat';
  (s as any).mod_warning = 0;
  (s as any).modARGS = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterStatDisplay(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_stat_display';
  (s as any).mod_warning = 0;
  (s as any).modARGS = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterFunc(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_func';
  (s as any).mod_warning = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterArousal(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_arousal';
  (s as any).mod_warning = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterOutfit(s: GameState, scene: SceneBuilder): void {
  return;
  (s as any).mod_system_loc = '_\' + $ARGS[1';
  (s as any).modARGS = undefined;
  ((s as any).modARGS = (s as any).modARGS ?? {})[0] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).modARGS = (s as any).modARGS ?? {})[1] = ((s as any).locArgs?.[3] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoreLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCoreLoop(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).mod_name ?? {}).length <= 0) {
    return;
  }
  (s as any).mod_i = 0;
  do {
    if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
      (s as any).mod_su_name = 'mod_' + (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0) + '' + ((s as any).mod_system_loc ?? 0) + '';
      if (hasLocation(((s as any).mod_su_name ?? 0))) {
        qspCall(s, '$mod_su_name', '', ((String((s as any).locArgs?.[0] ?? '')===0) ? (((s as any).locArgs?.[0] ?? 0)) : (((s as any).locArgs?.[0] ?? 0))), ((String((s as any).locArgs?.[1] ?? '')===0) ? (((s as any).locArgs?.[1] ?? 0)) : (((s as any).locArgs?.[1] ?? 0))), ((String((s as any).locArgs?.[2] ?? '')===0) ? (((s as any).locArgs?.[2] ?? 0)) : (((s as any).locArgs?.[2] ?? 0))), ((String((s as any).locArgs?.[3] ?? '')===0) ? (((s as any).locArgs?.[3] ?? 0)) : (((s as any).locArgs?.[3] ?? 0))), ((String((s as any).locArgs?.[4] ?? '')===0) ? (((s as any).locArgs?.[4] ?? 0)) : (((s as any).locArgs?.[4] ?? 0))), ((String((s as any).locArgs?.[5] ?? '')===0) ? (((s as any).locArgs?.[5] ?? 0)) : (((s as any).locArgs?.[5] ?? 0))), ((String((s as any).locArgs?.[6] ?? '')===0) ? (((s as any).locArgs?.[6] ?? 0)) : (((s as any).locArgs?.[6] ?? 0))), ((String((s as any).locArgs?.[7] ?? '')===0) ? (((s as any).locArgs?.[7] ?? 0)) : (((s as any).locArgs?.[7] ?? 0))), ((String((s as any).locArgs?.[8] ?? '')===0) ? (((s as any).locArgs?.[8] ?? 0)) : (((s as any).locArgs?.[8] ?? 0))));
      } else {
        if (((s as any).mod_warning ?? 0)) {
          scene.text(`WARNING: ${((s as any).mod_su_name ?? '')} is not found!`);
        }
      }
    }
    (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
    (s as any).mod_i = undefined;
    (s as any).mod_system_loc = undefined;
    (s as any).mod_warning = undefined;
    (s as any).modARGS = undefined;
    (s as any).mod_su_name = undefined;
    return;
  } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length);
  scene.build();
}

function enterSaveupdater(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).mod_name ?? {}).length <= 0) {
    return;
  }
  (s as any).mod_i = 0;
  do {
    if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
      (s as any).mod_su_name = 'mod_' + (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0) + '_setup';
      if (hasLocation(((s as any).mod_su_name ?? 0))) {
        qspCall(s, '$mod_su_name', 'saveupdater');
      }
      ((s as any).mod_name = (s as any).mod_name ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_info ?? 0)?.[0] ?? 0);
      ((s as any).mod_version = (s as any).mod_version ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_info ?? 0)?.[1] ?? 0);
      ((s as any).mod_author = (s as any).mod_author ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_info ?? 0)?.[2] ?? 0);
      ((s as any).mod_desc = (s as any).mod_desc ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_info ?? 0)?.[3] ?? 0);
      ((s as any).mod_opt = (s as any).mod_opt ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_info ?? 0)?.[4] ?? 0);
      (s as any).mod_su_name = 'mod_' + (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0) + '_saveupdater';
      if (hasLocation(((s as any).mod_su_name ?? 0))) {
        qspCall(s, '$mod_su_name', '');
      }
    }
    (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
    (s as any).mod_i = undefined;
    (s as any).mod_su_name = undefined;
  } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length);
  scene.build();
}

function enterAddMod(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if (((s as any).qspver ?? 0) < '5.8.0') {
    // TODO-QSP: addqst 'mod/<<$ARGS[1]>>.qsp'
  } else {
    // TODO-QSP: inclib 'mod/<<$ARGS[1]>>.qsp'
  }
  (s as any).mod_temp = 'mod_' + ((s as any).locArgs?.[1] ?? 0) + '_setup';
  if (hasLocation(((s as any).mod_temp ?? 0))) {
    qspCall(s, '$mod_temp', '');
  }
  if (((s as any).mod_info ?? 0)[0] === '') {
    alert('<b>' + ((s as any).locArgs?.[1] ?? 0) + '.qsp</b> is not a Girl life ECV mod, please contract its author for help');
    return;
  }
  (s as any).mod_name = [...((s as any).mod_name ?? []), (((s as any).mod_info ?? 0)?.[0] ?? 0)];
  (s as any).mod_version = [...((s as any).mod_version ?? []), (((s as any).mod_info ?? 0)?.[1] ?? 0)];
  (s as any).mod_author = [...((s as any).mod_author ?? []), (((s as any).mod_info ?? 0)?.[2] ?? 0)];
  (s as any).mod_desc = [...((s as any).mod_desc ?? []), (((s as any).mod_info ?? 0)?.[3] ?? 0)];
  (s as any).mod_opt = [...((s as any).mod_opt ?? []), (((s as any).mod_info ?? 0)?.[4] ?? 0)];
  (s as any).mod_temp = undefined;
  (s as any).mod_info = undefined;
  scene.build();
}

function enterDeleteMod(s: GameState, scene: SceneBuilder): void {
  (s as any).mod_removed_temp = ((s as any).locArgs?.[1] ?? 0);
  (s as any).mod_i = 0;
  do {
    if (((s as any).mod_i ?? 0) === ((s as any).mod_removed_temp ?? 0)) {
      (s as any).mod_temp = (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
      (s as any).mod_su_name = 'mod_' + ((s as any).mod_temp ?? 0) + '_onremove';
      if (hasLocation(((s as any).mod_su_name ?? 0))) {
        qspCall(s, '$mod_su_name', '');
      }
    } else {
      ((s as any).mod_name_temp = (s as any).mod_name_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
      ((s as any).mod_version_temp = (s as any).mod_version_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_version ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
      ((s as any).mod_author_temp = (s as any).mod_author_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_author ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
      ((s as any).mod_desc_temp = (s as any).mod_desc_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_desc ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
      ((s as any).mod_opt_temp = (s as any).mod_opt_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_opt ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
    }
    (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
    (s as any).mod_i = undefined;
    (s as any).mod_removed_temp = undefined;
    (s as any).mod_su_name = undefined;
    if (((s as any).qspver ?? 0) < '5.8.0') {
      // TODO-QSP: killqst
    } else {
      // TODO-QSP: freelib
    }
    (s as any).mod_name = undefined;
    (s as any).mod_version = undefined;
    (s as any).mod_author = undefined;
    (s as any).mod_desc = undefined;
    (s as any).mod_opt = undefined;
    (s as any).mod_i = 0;
    do {
      if (((s as any).mod_name_temp ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
        if (((s as any).qspver ?? 0) < '5.8.0') {
          // TODO-QSP: addqst 'mod/<<$mod_name_temp[mod_i]>>.qsp'
        } else {
          // TODO-QSP: inclib 'mod/<<$mod_name_temp[mod_i]>>.qsp'
        }
        (s as any).mod_name = [...((s as any).mod_name ?? []), (((s as any).mod_name_temp ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0)];
        (s as any).mod_version = [...((s as any).mod_version ?? []), (((s as any).mod_version_temp ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0)];
        (s as any).mod_author = [...((s as any).mod_author ?? []), (((s as any).mod_author_temp ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0)];
        (s as any).mod_desc = [...((s as any).mod_desc ?? []), (((s as any).mod_desc_temp ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0)];
        (s as any).mod_opt = [...((s as any).mod_opt ?? []), (((s as any).mod_opt_temp ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0)];
      }
      (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
      (s as any).mod_i = undefined;
      (s as any).mod_name_temp = undefined;
      (s as any).mod_version_temp = undefined;
      (s as any).mod_author_temp = undefined;
      (s as any).mod_desc_temp = undefined;
      (s as any).mod_opt_temp = undefined;
    } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name_temp ?? {}).length);
  } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length);
  scene.build();
}

function enterUpdateAllMods(s: GameState, scene: SceneBuilder): void {
  (s as any).mod_i = 0;
  do {
    ((s as any).mod_name_temp = (s as any).mod_name_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
    ((s as any).mod_version_temp = (s as any).mod_version_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_version ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
    ((s as any).mod_author_temp = (s as any).mod_author_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_author ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
    ((s as any).mod_desc_temp = (s as any).mod_desc_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_desc ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
    ((s as any).mod_opt_temp = (s as any).mod_opt_temp ?? {})[String((s as any).mod_i ?? 0)] = (((s as any).mod_opt ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
    (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
    if (((s as any).qspver ?? 0) < '5.8.0') {
      // TODO-QSP: killqst
    } else {
      // TODO-QSP: freelib
    }
    (s as any).mod_name = undefined;
    (s as any).mod_version = undefined;
    (s as any).mod_author = undefined;
    (s as any).mod_desc = undefined;
    (s as any).mod_opt = undefined;
    (s as any).mod_i = 0;
    do {
      (s as any).mod_temp = (((s as any).mod_name_temp ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0);
      if (((s as any).mod_temp ?? 0) !== '') {
        if (((s as any).qspver ?? 0) < '5.8.0') {
          // TODO-QSP: addqst 'mod/<<$mod_temp>>.qsp'
        } else {
          // TODO-QSP: inclib 'mod/<<$mod_temp>>.qsp'
        }
        (s as any).mod_temp = 'mod_' + ((s as any).mod_temp ?? 0) + '_setup';
        if (hasLocation(((s as any).mod_temp ?? 0))) {
          qspCall(s, '$mod_temp', '');
        }
        (s as any).mod_name = [...((s as any).mod_name ?? []), (((s as any).mod_info ?? 0)?.[0] ?? 0)];
        (s as any).mod_version = [...((s as any).mod_version ?? []), (((s as any).mod_info ?? 0)?.[1] ?? 0)];
        (s as any).mod_author = [...((s as any).mod_author ?? []), (((s as any).mod_info ?? 0)?.[2] ?? 0)];
        (s as any).mod_desc = [...((s as any).mod_desc ?? []), (((s as any).mod_info ?? 0)?.[3] ?? 0)];
        (s as any).mod_opt = [...((s as any).mod_opt ?? []), (((s as any).mod_info ?? 0)?.[4] ?? 0)];
        (s as any).mod_info = undefined;
      }
      (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
      (s as any).mod_name_temp = undefined;
      (s as any).mod_version_temp = undefined;
      (s as any).mod_author_temp = undefined;
      (s as any).mod_desc_temp = undefined;
      (s as any).mod_opt_temp = undefined;
      (s as any).mod_temp = undefined;
      (s as any).mod_i = undefined;
    } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name_temp ?? {}).length);
  } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length);
  scene.build();
}

function enterDeleteAllMods(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).mod_name ?? {}).length > 0) {
    (s as any).mod_i = 0;
    do {
      if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] !== '') {
        (s as any).mod_su_name = 'mod_' + (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] ?? 0) + '_onremove';
        if (hasLocation(((s as any).mod_su_name ?? 0))) {
          qspCall(s, '$mod_su_name', '');
        }
      }
      (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
      (s as any).mod_su_name = undefined;
      (s as any).mod_i = undefined;
    } while (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length);
  }
  if (((s as any).qspver ?? 0) < '5.8.0') {
    // TODO-QSP: killqst
  } else {
    // TODO-QSP: freelib
  }
  (s as any).mod_name = undefined;
  (s as any).mod_version = undefined;
  (s as any).mod_author = undefined;
  (s as any).mod_desc = undefined;
  (s as any).mod_opt = undefined;
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
