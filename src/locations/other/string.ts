import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterParseString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    return;
  }
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    (s as any).ARGS[3] = '|';
  }
  if (((s as any).locArgs?.[2] ?? 0) === ''  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf((((s as any).locArgs?.[3] ?? 0)))) + 1 <= 0) {
    return;
  }
  // TODO-QSP: :StringParser01
  (s as any).ParserTmpIdx = 0;
  if (((s as any).ParserTmpIdx ?? 0) > 0) {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
      // TODO-QSP: $ParserTmpArr[] = $mid($ParserTmpStr, 1, ParserTmpIdx-1)
    } else {
      // TODO-QSP: ParserTmpArr[] = val($mid($ParserTmpStr, 1, ParserTmpIdx-1))
    }
    // TODO-QSP: jump 'StringParser01'
  } else {
    // TODO-QSP: $ParserTmpArr[] = $ParserTmpStr
    // TODO-QSP: copyarr $ARGS[1], '$ParserTmpArr'
    // TODO-QSP: ParserTmpArr[] = val($ParserTmpStr)
    // TODO-QSP: copyarr $ARGS[1], 'ParserTmpArr'
  }
  return;
  scene.build();
}

function enterEnumerateList(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_stringVars['text'] = '';
  (s as any).temp_stringVars['name'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).ARGS ?? 0)[2] <= 0) {
    (s as any).temp_stringVars['i'] = 0;
  } else {
    (s as any).temp_stringVars['i'] = qspUntranslated(s, "ARGS[2]", { location: "string" });
  }
  if (((s as any).ARGS ?? 0)[3] <= 0) {
    (s as any).temp_stringVars['i_max'] = 0;
  } else {
    (s as any).temp_stringVars['i_max'] = ((s as any).temp_stringVars ?? 0)?.['i'] + ((s as any).ARGS ?? 0)[3];
    if (((s as any).temp_stringVars ?? 0)?.['i_max'] > ((s as any).arrsize ?? 0)(((s as any).temp_stringVars ?? 0)?.['name'])) {
      (s as any).temp_stringVars['i_max'] = 0;
    }
  }
  if (((s as any).locArgs?.[4] ?? 0) === '') {
    (s as any).temp_stringVars['small_sep'] = ', ';
  } else {
    (s as any).temp_stringVars['small_sep'] = ((s as any).locArgs?.[4] ?? 0);
  }
  if (((s as any).locArgs?.[5] ?? 0) === '') {
    (s as any).temp_stringVars['duo_sep'] = ' and ';
  } else {
    (s as any).temp_stringVars['duo_sep'] = ((s as any).locArgs?.[5] ?? 0);
  }
  if (((s as any).locArgs?.[6] ?? 0) === '') {
    (s as any).temp_stringVars['final_sep'] = ', and ';
  } else {
    (s as any).temp_stringVars['final_sep'] = ((s as any).locArgs?.[6] ?? 0);
  }
  if (((s as any).temp_stringVars ?? 0)?.['i_max'] === 0) {
  } else {
    // TODO-QSP: dynamic "$temp_stringVars['text'] = <<$temp_stringVars['name']>>[0]"
    if (((s as any).temp_stringVars ?? 0)?.['i_max'] === 2) {
      // TODO-QSP: dynamic "$temp_stringVars['text'] = <<$temp_stringVars['name']>>[0] + '<<$temp_stringVars['duo_sep']...
    } else {
      (s as any).temp_stringVars['i'] = 0;
      // TODO-QSP: :sgs_enum_list
      // TODO-QSP: dynamic "$temp_stringVars['text'] += <<$temp_stringVars['name']>>[<<temp_stringVars['i']>>]"
      (s as any).temp_stringVars['i'] = ((s as any).temp_stringVars['i'] ?? 0) + (1);
      if (((s as any).temp_stringVars ?? 0)?.['i'] < ((s as any).temp_stringVars ?? 0)?.['i_max'] - 1) {
        (s as any).temp_stringVars['text'] = ((s as any).temp_stringVars['text'] ?? 0) + (((s as any).temp_stringVars ?? 0)?.['small_sep']);
        // TODO-QSP: jump 'sgs_enum_list'
      }
      // TODO-QSP: dynamic "$temp_stringVars['text'] += '<<$temp_stringVars['final_sep']>>' + <<$temp_stringVars['name'...
    }
    return;
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
      enterParseString(s, scene);
      break;
  }
}

export const string: LocationDef = {
  name: 'string',
  region: 'other',
  enter: enter,
};
