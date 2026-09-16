import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetMeIndex(s: GameState, scene: SceneBuilder): void {
  (s as any).test = '' + ((s as any).locArgs?.[1] ?? 0) + '[\'' + ((s as any).locArgs?.[2] ?? 0) + '\']';
  (s as any).testas0 = 0;
  if ((String(((s as any).test ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
    ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['backup'] = 0;
    // TODO-QSP: dynamic "<<$test>> = 'SearchTag'"
    (s as any).testas1 = 0;
    if (((s as any).testas0 ?? 0) === ((s as any).testas1 ?? 0)) {
      (s as any).result = qspUntranslated(s, "arrpos(ARGS[1], 'SearchTag')", { location: "array" });
      // TODO-QSP: dynamic "<<$test>> = $temp_arrayVars['backup']"
    } else {
      (s as any).result = (-1);
    }
  } else {
    ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['backup'] = 0;
    // TODO-QSP: dynamic '<<$test>> = -2147483647'
    (s as any).testas1 = 0;
    if (((s as any).testas0 ?? 0) === ((s as any).testas1 ?? 0)) {
      (s as any).result = ((s as any).arrpos ?? 0)(((s as any).locArgs?.[1] ?? 0), -2147483647);
      // TODO-QSP: dynamic "<<$test>> = temp_arrayVars['backup']"
    } else {
      (s as any).result = (-1);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveElement(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCoupledSort(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :coupled_sort_loop_start
  if (Object.keys((s as any)[((s as any).locArgs?.[1] ?? 0)] ?? {}).length > 0) {
    ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['pos'] = 0;
    ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['i'] = 1;
    // TODO-QSP: :coupled_sort_inner_start
    if (((s as any).ARGS ?? 0)[((s as any).temp_arrayVars ?? 0)?.['i']] !== '') {
      if (Object.keys((s as any)[qspUntranslated(s, "ARGS[temp_arrayVars['i']]", { location: "array" })] ?? {}).length > 0) {
        if ((String(qspUntranslated(s, "ARGS[\u00000\u0000]", { location: "array" })).slice((1)-1, ((1)-1)+(1))) === '$') {
          // TODO-QSP: dynamic "$temp_array_coupled_sort<<temp_arrayVars['i']>>[] = <<$ARGS[temp_arrayVars['i']]>>[temp_arr...
        } else {
          // TODO-QSP: dynamic "temp_array_coupled_sort<<temp_arrayVars['i']>>[] = <<$ARGS[temp_arrayVars['i']]>>[temp_arra...
        }
        ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['i'] = ((s as any).temp_arrayVars['i'] ?? 0) + (1);
        // TODO-QSP: jump 'coupled_sort_inner_start'
      }
    }
    // TODO-QSP: jump 'coupled_sort_loop_start'
  }
  ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['i_max'] = ((s as any).temp_arrayVars ?? 0)?.['i'];
  ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['i'] = 1;
  // TODO-QSP: :coupled_sort_outer_start
  if (((s as any).temp_arrayVars ?? 0)?.['i'] < ((s as any).temp_arrayVars ?? 0)?.['i_max']) {
    // TODO-QSP: dynamic "copyarr('<<$ARGS[temp_arrayVars['i']]>>', 'temp_array_coupled_sort<<temp_arrayVars['i']>>')...
    // TODO-QSP: dynamic "killvar 'temp_array_coupled_sort<<temp_arrayVars['i']>>'"
    ((s as any).temp_arrayVars = (s as any).temp_arrayVars ?? {})['i'] = ((s as any).temp_arrayVars['i'] ?? 0) + (1);
    // TODO-QSP: jump 'coupled_sort_outer_start'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_me_index':
      enterGetMeIndex(s, scene);
      break;
    case 'remove_element':
      enterRemoveElement(s, scene);
      break;
    case 'coupled_sort':
      enterCoupledSort(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const array: LocationDef = {
  name: 'array',
  region: 'other',
  enter: enter,
};
