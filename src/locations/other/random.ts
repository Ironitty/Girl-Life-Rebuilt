import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPickFromArray(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['start'] = 0;
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['end'] = 0;
  if (((s as any).temp_randomVars ?? 0)?.['start'] > ((s as any).temp_randomVars ?? 0)?.['end']) {
    return;
  }
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['i'] = qspUntranslated(s, "rand(temp_randomVars['start'], temp_randomVars['end'])", { location: "random" });
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
  } else {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPickFromDelimitedString(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['string'] = ((s as any).locArgs?.[1] ?? 0);
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['delimiter'] = ((((s as any).locArgs?.[2] ?? 0) === '') ? ('|') : (((s as any).locArgs?.[2] ?? 0)));
  if ((String(((s as any).temp_randomVars ?? 0)?.['string']).indexOf(String(((s as any).temp_randomVars ?? 0)?.['delimiter']))) + 1 <= 0) {
    return;
  }
  // TODO-QSP: :pick_from_delimited_string_loop
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['i'] = qspUntranslated(s, "instr(temp_randomVars['string'], temp_randomVars['delimiter'])", { location: "random" });
  if (((s as any).temp_randomVars ?? 0)?.['i'] > 0) {
    // TODO-QSP: $temp_pick_from_delimited_string_array[] = $mid($temp_randomVars['string'], 1, temp_randomVars['i'] ...
    if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['string'] = (String(((s as any).temp_randomVars ?? 0)?.['string']).slice(((((s as any).temp_randomVars ?? {})?.['i'] ?? 0) + 1)-1));
    // TODO-QSP: jump 'pick_from_delimited_string_loop'
  }
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['result'] = qspFunc(s, 'random', 'pick_from_array', '$temp_pick_from_delimited_string_array');
  if (((s as any).locArgs?.[3] ?? 0)) {
  } else {
    if (!isNaN(((s as any).temp_randomVars ?? 0)?.['result']) && ((s as any).temp_randomVars ?? 0)?.['result'] !== '') {
      (s as any).result = qspUntranslated(s, "val(temp_randomVars['result'])", { location: "random" });
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPickFrom(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
  }
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['i'] = ((s as any).rand ?? 0)(1, ((s as any).arrsize ?? 0)('ARGS') - 1);
  if (((s as any).ARGS ?? 0)[((s as any).temp_randomVars ?? 0)?.['i']] === '') {
    (s as any).result = qspUntranslated(s, "ARGS[temp_randomVars['i']]", { location: "random" });
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRoll(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['roll'] = 0;
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['i'] = 1;
  // TODO-QSP: :roll_loop
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['rand'] = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 'lucky'  ||  ((s as any).locArgs?.[1] ?? 0) === 'max') {
    if (((s as any).temp_randomVars ?? 0)?.['rand'] > ((s as any).temp_randomVars ?? 0)?.['roll']) {
      if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['roll'] = ((s as any).temp_randomVars ?? 0)?.['rand'];
    }
  } else {
    if (((s as any).temp_randomVars ?? 0)?.['rand'] < ((s as any).temp_randomVars ?? 0)?.['roll']) {
      if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['roll'] = ((s as any).temp_randomVars ?? 0)?.['rand'];
    }
  }
  if (!(s as any).temp_randomVars) (s as any).temp_randomVars = {}; (s as any).temp_randomVars['i'] = ((s as any).temp_randomVars['i'] ?? 0) + (1);
  if (((s as any).temp_randomVars ?? 0)?.['i'] < ((s as any).locArgs?.[4] ?? 0)) {
    // TODO-QSP: jump 'roll_loop'
  }
  (s as any).result = ((s as any).temp_randomVars ?? 0)?.['roll'];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMultirand(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_mr_count = 0;
  (s as any).result = 0;
  // TODO-QSP: :loop_math_multirand
  (s as any).result = ((s as any).result ?? 0) + (0);
  (s as any).temp_mr_count = ((s as any).temp_mr_count ?? 0) + (1);
  if (((s as any).temp_mr_count ?? 0) < ((s as any).locArgs?.[3] ?? 0)) {
    // TODO-QSP: jump 'loop_math_multirand'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSrand(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (1664525 * (((s as any).fixed_prnd ?? 0) + ((s as any).ARGS ?? 0)[1]) + 1013904223);
  (s as any).result = ((s as any).result ?? 0) % 2147483647;
  if (((s as any).result ?? 0) < 0) {
    (s as any).result = ((s as any).result ?? 0) + (2147483647);
  }
  (s as any).result = (((s as any).result ?? 0) % ((((s as any).ARGS ?? 0)[3] + 1) - ((s as any).ARGS ?? 0)[2])) + ((s as any).ARGS ?? 0)[2];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStringHash(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sh_hash = 0;
  (s as any).temp_sh_i = 1;
  // TODO-QSP: :string_hash_loop
  if (((s as any).temp_sh_i ?? 0) <= (String(((s as any).locArgs?.[1] ?? 0)).length)) {
    (s as any).temp_sh_hash = (((s as any).temp_sh_hash ?? 0) * 131 + (String(((s as any).temp_sh_alphabet ?? 0)).indexOf(String((String(((s as any).locArgs?.[1] ?? 0)).slice((((s as any).temp_sh_i ?? 0))-1, ((((s as any).temp_sh_i ?? 0))-1)+(1)))))) + 1) % 1000003;
    (s as any).temp_sh_i = ((s as any).temp_sh_i ?? 0) + (1);
    // TODO-QSP: jump 'string_hash_loop'
  }
  if (((s as any).temp_sh_hash ?? 0) < 0) {
    // TODO-QSP: temp_sh_hash *= -1
  }
  (s as any).result = ((s as any).temp_sh_hash ?? 0);
  return;
  // TODO-QSP: end
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
