// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterParseString(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if (String((s as any).locArgs?.[3] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = '|';
  }
  if (String((s as any).locArgs?.[2] ?? '') === ''  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String(((s as any).locArgs?.[3] ?? 0)))) + 1) <= 0) {
    return;
  }
  (s as any).ParserTmpDelim = ((s as any).locArgs?.[3] ?? 0);
  (s as any).ParserTmpStr = ((s as any).locArgs?.[2] ?? 0);
  // TODO-QSP: :StringParser01
  (s as any).ParserTmpIdx = ((String(((s as any).ParserTmpStr ?? 0)).indexOf(String(((s as any).ParserTmpDelim ?? 0)))) + 1);
  if (((s as any).ParserTmpIdx ?? 0) > 0) {
    if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
      // TODO-QSP: $ParserTmpArr[] = $mid($ParserTmpStr, 1, ParserTmpIdx-1)
      (s as any).ParserTmpStr = (String(((s as any).ParserTmpStr ?? 0)).slice((((s as any).ParserTmpIdx ?? 0)+1)-1));
    } else {
      // TODO-QSP: ParserTmpArr[] = val($mid($ParserTmpStr, 1, ParserTmpIdx-1))
      (s as any).ParserTmpStr = (String(((s as any).ParserTmpStr ?? 0)).slice((((s as any).ParserTmpIdx ?? 0)+1)-1));
    }
    // TODO-QSP: jump 'StringParser01'
  } else {
    if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
      // TODO-QSP: $ParserTmpArr[] = $ParserTmpStr
      // TODO-QSP: copyarr $ARGS[1], '$ParserTmpArr'
    } else {
      // TODO-QSP: ParserTmpArr[] = val($ParserTmpStr)
      // TODO-QSP: copyarr $ARGS[1], 'ParserTmpArr'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterEnumerateList(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['text'] = '';
  ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['name'] = ((s as any).locArgs?.[1] ?? 0);
  if (String((s as any).locArgs?.[2] ?? '') <= 0) {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['i'] = 0;
  } else {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['i'] = ((s as any).locArgs?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[3] ?? '') <= 0) {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['i_max'] = 0;
  } else {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['i_max'] = (((s as any).temp_stringVars ?? {})?.['i'] ?? 0) + ((s as any).locArgs?.[3] ?? 0);
    if (((s as any).temp_stringVars ?? 0)?.['i_max'] > Object.keys((s as any)[(((s as any).temp_stringVars ?? 0)?.['name'])] ?? {}).length) {
      ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['i_max'] = 0;
    }
  }
  if (String((s as any).locArgs?.[4] ?? '') === '') {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['small_sep'] = ', ';
  } else {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['small_sep'] = ((s as any).locArgs?.[4] ?? 0);
  }
  if (String((s as any).locArgs?.[5] ?? '') === '') {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['duo_sep'] = ' and ';
  } else {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['duo_sep'] = ((s as any).locArgs?.[5] ?? 0);
  }
  if (String((s as any).locArgs?.[6] ?? '') === '') {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['final_sep'] = ', and ';
  } else {
    ((s as any).temp_stringVars = (s as any).temp_stringVars ?? {})['final_sep'] = ((s as any).locArgs?.[6] ?? 0);
  }
  if (((s as any).temp_stringVars ?? 0)?.['i_max'] === 0) {
  } else {
    if (((s as any).temp_stringVars ?? 0)?.['i_max'] === 1) {
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'parse_string':
      enterParseString(s, scene);
      break;
    case 'enumerate_list':
      enterEnumerateList(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const string: LocationDef = {
  name: 'string',
  region: 'other',
  enter: enter,
};
