import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPickFromArray(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['start'] = Math.max(0, ((s as any).locArgs?.[2] ?? 0));
  ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['end'] = Math.min(Math.max(0, ((s as any).locArgs?.[3] ?? 0)), 0);
  if (((s as any).temp_randomVars ?? 0)?.['start'] > ((s as any).temp_randomVars ?? 0)?.['end']) {
    (s as any).temp_randomVars = undefined;
    return;
  }
  ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['i'] = (Math.floor(Math.random() * ((((s as any).temp_randomVars ?? 0)?.['end']) - (((s as any).temp_randomVars ?? 0)?.['start']) + 1)) + ((((s as any).temp_randomVars ?? 0)?.['start'])));
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
    (s as any).result = 0;
  } else {
    (s as any).result = 0;
  }
  (s as any).temp_randomVars = undefined;
  return;
  scene.build();
}

function enterPickFromDelimitedString(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['string'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['delimiter'] = ((String((s as any).locArgs?.[2] ?? '') === '') ? ('|') : (((s as any).locArgs?.[2] ?? 0)));
  if (((String(((s as any).temp_randomVars ?? 0)?.['string']).indexOf(String(((s as any).temp_randomVars ?? 0)?.['delimiter']))) + 1) <= 0) {
    alert('<b>Error: No delimited string found!</b> in random, pick_from_delimited_string');
    return;
  }
  (s as any).temp_pick_from_delimited_string_array = undefined;
  while (true) {
    ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['i'] = ((String((((s as any).temp_randomVars ?? 0)?.['string'])).indexOf(String((((s as any).temp_randomVars ?? 0)?.['delimiter'])))) + 1);
    if (((s as any).temp_randomVars ?? 0)?.['i'] > 0) {
      (s as any).temp_pick_from_delimited_string_array = [...((s as any).temp_pick_from_delimited_string_array ?? []), (String((((s as any).temp_randomVars ?? 0)?.['string'])).slice((1)-1, ((1)-1)+((((s as any).temp_randomVars ?? {})?.['i'] ?? 0) - 1)))];
      ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['string'] = (String((((s as any).temp_randomVars ?? 0)?.['string'])).slice(((((s as any).temp_randomVars ?? {})?.['i'] ?? 0) + 1)-1));
      break;
    }
    ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['result'] = qspFunc(s, 'random', 'pick_from_array', '$temp_pick_from_delimited_string_array');
    if (String((s as any).locArgs?.[3] ?? '')) {
      (s as any).result = (((s as any).temp_randomVars ?? 0)?.['result']);
    } else {
      if (!isNaN(((s as any).temp_randomVars ?? 0)?.['result']) && ((s as any).temp_randomVars ?? 0)?.['result'] !== '') {
        (s as any).result = parseFloat((((s as any).temp_randomVars ?? 0)?.['result']));
      } else {
        (s as any).result = (((s as any).temp_randomVars ?? 0)?.['result']);
      }
    }
    (s as any).temp_pick_from_delimited_string_array = undefined;
    (s as any).temp_randomVars = undefined;
    return;
  }
  scene.build();
}

function enterPickFrom(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    alert('no input found');
  }
  ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['i'] = (Math.floor(Math.random() * (0 - 1 + 1)) + (1));
  if (((s as any).ARGS ?? 0)[((s as any).temp_randomVars ?? 0)?.['i']] === '') {
    (s as any).result = qspUntranslated(s, "ARGS[temp_randomVars['i']]", { location: "random" });
  } else {
    (s as any).result = qspUntranslated(s, "ARGS[temp_randomVars['i']]", { location: "random" });
  }
  (s as any).temp_randomVars = undefined;
  return;
  scene.build();
}

function enterRoll(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['roll'] = (Math.floor(Math.random() * (((s as any).locArgs?.[3] ?? 0) - ((s as any).locArgs?.[2] ?? 0) + 1)) + (((s as any).locArgs?.[2] ?? 0)));
  ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['i'] = 1;
  do {
    ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['rand'] = (Math.floor(Math.random() * (((s as any).locArgs?.[3] ?? 0) - ((s as any).locArgs?.[2] ?? 0) + 1)) + (((s as any).locArgs?.[2] ?? 0)));
    if (String((s as any).locArgs?.[1] ?? '') === 'lucky'  ||  String((s as any).locArgs?.[1] ?? '') === 'max') {
      if (((s as any).temp_randomVars ?? 0)?.['rand'] > ((s as any).temp_randomVars ?? 0)?.['roll']) {
        ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['roll'] = (((s as any).temp_randomVars ?? 0)?.['rand']);
      }
    } else {
      if (((s as any).temp_randomVars ?? 0)?.['rand'] < ((s as any).temp_randomVars ?? 0)?.['roll']) {
        ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['roll'] = (((s as any).temp_randomVars ?? 0)?.['rand']);
      }
    }
    ((s as any).temp_randomVars = (s as any).temp_randomVars ?? {})['i'] = ((s as any).temp_randomVars['i'] ?? 0) + (1);
    (s as any).result = (((s as any).temp_randomVars ?? 0)?.['roll']);
    (s as any).temp_randomVars = undefined;
    return;
  } while (((s as any).temp_randomVars ?? 0)?.['i'] < String((s as any).locArgs?.[4] ?? ''));
  scene.build();
}

function enterMultirand(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_mr_count = 0;
  (s as any).result = 0;
  do {
    (s as any).result = ((s as any).result ?? 0) + ((Math.floor(Math.random() * (((s as any).locArgs?.[2] ?? 0) - ((s as any).locArgs?.[1] ?? 0) + 1)) + (((s as any).locArgs?.[1] ?? 0))));
    (s as any).temp_mr_count = ((s as any).temp_mr_count ?? 0) + (1);
    (s as any).temp_mr_count = undefined;
    return;
  } while (((s as any).temp_mr_count ?? 0) < String((s as any).locArgs?.[3] ?? ''));
  scene.build();
}

function enterSrand(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (1664525 * (((s as any).fixed_prnd ?? 0) + ((s as any).locArgs?.[1] ?? 0)) + 1013904223);
  (s as any).result = ((s as any).result ?? 0) % 2147483647;
  if (((s as any).result ?? 0) < 0) {
    (s as any).result = ((s as any).result ?? 0) + (2147483647);
  }
  (s as any).result = (((s as any).result ?? 0) % ((((s as any).locArgs?.[3] ?? 0) + 1) - ((s as any).locArgs?.[2] ?? 0))) + ((s as any).locArgs?.[2] ?? 0);
  return;
  scene.build();
}

function enterStringHash(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sh_alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
  (s as any).temp_sh_hash = 0;
  (s as any).temp_sh_i = 1;
  while (true) {
    if (((s as any).temp_sh_i ?? 0) <= (String(((s as any).locArgs?.[1] ?? 0)).length)) {
      (s as any).temp_sh_hash = (((s as any).temp_sh_hash ?? 0) * 131 + ((String(((s as any).temp_sh_alphabet ?? 0)).indexOf(String((String(((s as any).locArgs?.[1] ?? 0)).slice((((s as any).temp_sh_i ?? 0))-1, ((((s as any).temp_sh_i ?? 0))-1)+(1)))))) + 1)) % 1000003;
      (s as any).temp_sh_i = ((s as any).temp_sh_i ?? 0) + (1);
      break;
    }
    if (((s as any).temp_sh_hash ?? 0) < 0) {
      (s as any).temp_sh_hash = ((s as any).temp_sh_hash ?? 0) * ((-1));
    }
    (s as any).result = ((s as any).temp_sh_hash ?? 0);
    (s as any).temp_sh_alphabet = undefined;
    (s as any).temp_sh_hash = undefined;
    (s as any).temp_sh_i = undefined;
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pick_from_array':
      enterPickFromArray(s, scene);
      break;
    case 'pick_from_delimited_string':
      enterPickFromDelimitedString(s, scene);
      break;
    case 'pick_from':
      enterPickFrom(s, scene);
      break;
    case 'roll':
      enterRoll(s, scene);
      break;
    case 'multirand':
      enterMultirand(s, scene);
      break;
    case 'srand':
      enterSrand(s, scene);
      break;
    case 'string_hash':
      enterStringHash(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const random: LocationDef = {
  name: 'random',
  region: 'other',
  enter: enter,
};
