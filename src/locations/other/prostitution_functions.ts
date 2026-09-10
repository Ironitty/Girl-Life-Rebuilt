import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetPavlovskHours(s: GameState, scene: SceneBuilder): void {
  (s as any).prostitute['pav_start_hour'] = qspUntranslated(s, "ARGS[1]", { location: "prostitution_functions" });
  (s as any).prostitute['pav_end_hour'] = qspUntranslated(s, "ARGS[2]", { location: "prostitution_functions" });
  scene.build();
}

function enterWlBlock(s: GameState, scene: SceneBuilder): void {
  (s as any).prostitute['wl_block'] = qspUntranslated(s, "ARGS[1]", { location: "prostitution_functions" });
  if (((s as any).prostitute ?? 0)?.['wl_block']) {
    qspCall(s, 'prostitution_functions', 'set_pavlovsk_hours', 6, 23);
  } else {
    qspCall(s, 'prostitution_functions', 'set_pavlovsk_hours', 14, 2);
  }
  scene.build();
}

function enterCheckForWlife(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).mod_name ?? {}).length > 0) {
    (s as any).mod_i = 0;
    // TODO-QSP: :mod_exec
    if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] === 'wlife') {
      if (((s as any).prostitute ?? 0)?.['payment_method'] === 0) {
        (s as any).prostitute['wl_block'] = 1;
      }
    }
    (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
    if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
      // TODO-QSP: jump 'mod_exec'
    }
  }
  scene.build();
}

function enterUpdateProstitutionLocations(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_functions', 'set_pavlovsk_prostitute');
  if (((s as any).prostitute ?? 0)?.['gadukino'] === 0) {
    qspCall(s, 'prostitution_functions', 'set_gadukino_prostitute');
  }
  if (((s as any).prostitute ?? 0)?.['road'] === 0) {
    qspCall(s, 'prostitution_functions', 'set_highway_prostitute');
  }
  scene.build();
}

function enterSetPavlovskProstitute(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).fame ?? 0)?.['pav_prostitute'] > 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 250)  &&  ((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0) {
    (s as any).prostitute['pavlovsk'] = 1;
    (s as any).prostitute['active'] = 1;
    (s as any).prostitute['payment_method'] = 1;
  } else {
    (s as any).prostitute['pavlovsk'] = 0;
  }
  scene.build();
}

function enterSetGadukinoProstitute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2  &&  ((s as any).MiraVars ?? 0)?.['pimp'] !== 1  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0) {
    (s as any).prostitute['gadukino'] = 1;
    (s as any).prostitute['active'] = 1;
    (s as any).prostitute['payment_method'] = 1;
  } else {
    (s as any).prostitute['gadukino'] = 0;
  }
  scene.build();
}

function enterSetHighwayProstitute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute ?? 0)?.['highway_idea'] === 2  &&  ((s as any).prostitute ?? 0)?.['active'] === 1  &&  ((((s as any).prostitute ?? 0)?.['full_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['wl_block'] === 0)  ||  (((s as any).prostitute ?? 0)?.['wl_block'] === 1  &&  ((s as any).prostitute ?? 0)?.['payment_method'] === 1))) {
    (s as any).prostitute['road'] = 1;
    (s as any).prostitute['active'] = 1;
    (s as any).prostitute['payment_method'] = 1;
  } else {
    (s as any).prostitute['road'] = 0;
  }
  scene.build();
}

function enterProstituteWorkHours(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pushkin') {
    (s as any).result = (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 2)  ||  (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14)  ||  (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) <= 23);
  } else {
    (s as any).result = (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14)  ||  (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) <= 23);
    (s as any).result = 0;
  }
  return;
  scene.build();
}

function enterIsSolicitationLocation(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).curloc ?? 0) === 'shop') {
    // TODO-QSP: exit
  }
  if (((s as any).curloc ?? 0) === 'prostitution_pavlovsk') {
    // TODO-QSP: exit
  }
  if (((s as any).loc ?? 0) !== ((s as any).curloc ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).menu_off ?? 0) === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).loc_arg ?? 0) !== ''  &&  ((s as any).loc_arg ?? 0) !== 'start') {
    // TODO-QSP: exit
  }
  if ((Array.isArray((s as any).solicitation_locations) ? ((s as any).solicitation_locations as any[]).indexOf(((s as any).loc ?? 0)) : -1) < 0) {
    // TODO-QSP: exit
  }
  (s as any).result = 1;
  return;
  scene.build();
}

function enterProstituteOutfitAtHome(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'is_current_home')  &&  ((s as any).prostitute ?? 0)?.['active']) {
    qspCall(s, 'prostitution_functions', 'work_clothes');
    if (((s as any).prostitute ?? 0)?.['work_clothes']) {
      if (((s as any).prostitute ?? 0)?.['outfit_is_set'] === 1  &&  qspFunc(s, 'prostitution_functions', 'is_default') === 0) {
        scene.actions([
          { label: 'Replace your default prostitute outfit with the current outfit', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'set_default_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Set the current as your default prostitute outfit', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'set_default_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
      scene.actions([
        { label: 'Change into regular clothes', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'change_into_regular_clothes');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).temp_not_wear_reason ?? 0) === 'too_small') {
        scene.actions([
          { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as your outfit is too ...
  } },
        ]);
      } else {
        if (((s as any).temp_not_wear_reason ?? 0) === 'low_strength') {
          scene.actions([
            { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as outfit is worn out!...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as you don''t own that...
  } },
            { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'change_into_prostitute_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
        scene.actions([
          { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as your outfit is too ...
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_pavlovsk_hours':
      enterSetPavlovskHours(s, scene);
      break;
    case 'wl_block':
      enterWlBlock(s, scene);
      break;
    case 'check_for_wlife':
      enterCheckForWlife(s, scene);
      break;
    case 'update_prostitution_locations':
      enterUpdateProstitutionLocations(s, scene);
      break;
    case 'set_pavlovsk_prostitute':
      enterSetPavlovskProstitute(s, scene);
      break;
    case 'set_gadukino_prostitute':
      enterSetGadukinoProstitute(s, scene);
      break;
    case 'set_highway_prostitute':
      enterSetHighwayProstitute(s, scene);
      break;
    case 'prostitute_work_hours':
      enterProstituteWorkHours(s, scene);
      break;
    case 'is_solicitation_location':
      enterIsSolicitationLocation(s, scene);
      break;
    case 'prostitute_outfit_at_home':
      enterProstituteOutfitAtHome(s, scene);
      break;
    default:
      enterSetPavlovskHours(s, scene);
      break;
  }
}

export const prostitution_functions: LocationDef = {
  name: 'prostitution_functions',
  title: 'Unavailable as your outfit is too small!',
  region: 'other',
  enter: enter,
};
