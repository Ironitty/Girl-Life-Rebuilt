// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterParseString(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    alert('<b>Error: No array name found!</b> in string, parse_string');
    return;
  }
  if (String((s as any).locArgs?.[3] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = '|';
  }
  if (String((s as any).locArgs?.[2] ?? '') === ''  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String(((s as any).locArgs?.[3] ?? 0)))) + 1) <= 0) {
    alert('<b>Error: No delimited string found!</b> in string, parse_string');
    return;
  }
  (s as any).ParserTmpDelim = ((s as any).locArgs?.[3] ?? 0);
  (s as any).ParserTmpArr = undefined;
  (s as any).ParserTmpStr = ((s as any).locArgs?.[2] ?? 0);
  while (true) {
    (s as any).ParserTmpIdx = ((String(((s as any).ParserTmpStr ?? 0)).indexOf(String(((s as any).ParserTmpDelim ?? 0)))) + 1);
    if (((s as any).ParserTmpIdx ?? 0) > 0) {
      if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
        (s as any).ParserTmpArr = [...((s as any).ParserTmpArr ?? []), (String(((s as any).ParserTmpStr ?? 0)).slice((1)-1, ((1)-1)+(((s as any).ParserTmpIdx ?? 0)-1)))];
        (s as any).ParserTmpStr = (String(((s as any).ParserTmpStr ?? 0)).slice((((s as any).ParserTmpIdx ?? 0)+1)-1));
      } else {
        (s as any).ParserTmpArr = [...((s as any).ParserTmpArr ?? []), parseFloat((String(((s as any).ParserTmpStr ?? 0)).slice((1)-1, ((1)-1)+(((s as any).ParserTmpIdx ?? 0)-1))))];
        (s as any).ParserTmpStr = (String(((s as any).ParserTmpStr ?? 0)).slice((((s as any).ParserTmpIdx ?? 0)+1)-1));
      }
      break;
    } else {
      if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
        (s as any).ParserTmpArr = [...((s as any).ParserTmpArr ?? []), ((s as any).ParserTmpStr ?? 0)];
      } else {
        (s as any).ParserTmpArr = [...((s as any).ParserTmpArr ?? []), parseFloat(((s as any).ParserTmpStr ?? 0))];
      }
    }
    (s as any).ParserTmpDelim = undefined;
    (s as any).ParserTmpStr = undefined;
    (s as any).ParserTmpIdx = undefined;
    (s as any).ParserTmpArr = undefined;
    return;
  }
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
