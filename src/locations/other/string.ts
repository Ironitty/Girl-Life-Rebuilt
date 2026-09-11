import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterParseString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    return;
  }
  if (((s as any).locArgs?.[3] ?? 0) === '') {
    ((s as any).ARGS ?? {})[3] = '|';
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
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
      // TODO-QSP: $ParserTmpArr[] = $ParserTmpStr
      // TODO-QSP: copyarr $ARGS[1], '$ParserTmpArr'
    } else {
      // TODO-QSP: ParserTmpArr[] = val($ParserTmpStr)
      // TODO-QSP: copyarr $ARGS[1], 'ParserTmpArr'
    }
  }
  return;
  scene.build();
}

function enterEnumerateList(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_stringVars ?? {})['text'] = '';
  ((s as any).temp_stringVars ?? {})['name'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).locArgs?.[2] ?? 0) <= 0) {
    ((s as any).temp_stringVars ?? {})['i'] = 0;
  } else {
    ((s as any).temp_stringVars ?? {})['i'] = qspUntranslated(s, "ARGS[2]", { location: "string" });
  }
  if (((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).temp_stringVars ?? {})['i_max'] = 0;
  } else {
    ((s as any).temp_stringVars ?? {})['i_max'] = ((s as any).temp_stringVars ?? {})?.['i'] + ((s as any).ARGS ?? 0)[3];
    if (((s as any).temp_stringVars ?? 0)?.['i_max'] > ((s as any).arrsize ?? 0)(((s as any).temp_stringVars ?? 0)?.['name'])) {
      ((s as any).temp_stringVars ?? {})['i_max'] = 0;
    }
  }
  if (((s as any).locArgs?.[4] ?? 0) === '') {
    ((s as any).temp_stringVars ?? {})['small_sep'] = ', ';
  } else {
    ((s as any).temp_stringVars ?? {})['small_sep'] = ((s as any).locArgs?.[4] ?? 0);
  }
  if (((s as any).locArgs?.[5] ?? 0) === '') {
    ((s as any).temp_stringVars ?? {})['duo_sep'] = ' and ';
  } else {
    ((s as any).temp_stringVars ?? {})['duo_sep'] = ((s as any).locArgs?.[5] ?? 0);
  }
  if (((s as any).locArgs?.[6] ?? 0) === '') {
    ((s as any).temp_stringVars ?? {})['final_sep'] = ', and ';
  } else {
    ((s as any).temp_stringVars ?? {})['final_sep'] = ((s as any).locArgs?.[6] ?? 0);
  }
  if (((s as any).temp_stringVars ?? 0)?.['i_max'] === 0) {
  } else {
    if (((s as any).temp_stringVars ?? 0)?.['i_max'] === 1) {
      // TODO-QSP: dynamic "$temp_stringVars['text'] = <<$temp_stringVars['name']>>[0]"
    } else {
      if (((s as any).temp_stringVars ?? 0)?.['i_max'] === 2) {
        // TODO-QSP: dynamic "$temp_stringVars['text'] = <<$temp_stringVars['name']>>[0] + '<<$temp_stringVars['duo_sep']...
      } else {
        ((s as any).temp_stringVars ?? {})['i'] = 0;
        // TODO-QSP: :sgs_enum_list
        // TODO-QSP: dynamic "$temp_stringVars['text'] += <<$temp_stringVars['name']>>[<<temp_stringVars['i']>>]"
        ((s as any).temp_stringVars ?? {})['i'] = (((s as any).temp_stringVars ?? {})['i'] ?? 0) + (1);
        if (((s as any).temp_stringVars ?? 0)?.['i'] < ((s as any).temp_stringVars ?? 0)?.['i_max'] - 1) {
          ((s as any).temp_stringVars ?? {})['text'] = (((s as any).temp_stringVars ?? {})['text'] ?? 0) + (((s as any).temp_stringVars ?? 0)?.['small_sep']);
          // TODO-QSP: jump 'sgs_enum_list'
        }
        // TODO-QSP: dynamic "$temp_stringVars['text'] += '<<$temp_stringVars['final_sep']>>' + <<$temp_stringVars['name'...
      }
    }
  }
  return;
  scene.build();
}

function enterParseNumber(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_stringVars ?? {})['num'] = qspUntranslated(s, "ARGS[1]", { location: "string" });
  } else {
    if (!isNaN(((s as any).locArgs?.[1] ?? 0)) && ((s as any).locArgs?.[1] ?? 0) !== '') {
      ((s as any).temp_stringVars ?? {})['num'] = qspUntranslated(s, "val(ARGS[1])", { location: "string" });
    } else {
      return;
    }
  }
  ((s as any).temp_stringVars ?? {})['rank'] = (Object.keys((s as any).ARGS ?? {}).length > 2);
  if (((s as any).temp_stringVars ?? 0)?.['num'] < 0) {
    ((s as any).temp_stringVars ?? {})['num'] = -((s as any).temp_stringVars ?? {})?.['num'];
  }
  if (((s as any).temp_stringVars ?? 0)?.['num'] === 0) {
    if (((s as any).temp_stringVars ?? 0)?.['rank'] === 0) {
    }
    return;
  }
  // TODO-QSP: $o[1] = 'one'      & $oth[1] = 'first'
  // TODO-QSP: $o[2] = 'two'      & $oth[2] = 'second'
  // TODO-QSP: $o[3] = 'three'      & $oth[3] = 'third'
  // TODO-QSP: $o[4] = 'four'      & $oth[4] = 'fourth'
  // TODO-QSP: $o[5] = 'five'      & $oth[5] = 'fifth'
  // TODO-QSP: $o[6] = 'six'      & $oth[6] = 'sixth'
  // TODO-QSP: $o[7] = 'seven'      & $oth[7] = 'seventh'
  // TODO-QSP: $o[8] = 'eight'      & $oth[8] = 'eigth'
  // TODO-QSP: $o[9] = 'nine'      & $oth[9] = 'ninth'
  // TODO-QSP: $t[1] = 'ten'      & $tr[1] = 'tenth'
  // TODO-QSP: $t[2] = 'twenty'    & $tr[2] = 'twentieth'
  // TODO-QSP: $t[3] = 'thirty'    & $tr[3] = 'thirtieth'
  // TODO-QSP: $t[4] = 'forty'      & $tr[4] = 'fortieth'
  // TODO-QSP: $t[5] = 'fifty'      & $tr[5] = 'fiftieth'
  // TODO-QSP: $t[6] = 'sixty'      & $tr[6] = 'sixtieth'
  // TODO-QSP: $t[7] = 'seventy'    & $tr[7] = 'seventieth'
  // TODO-QSP: $t[8] = 'eighty'    & $tr[8] = 'eightieth'
  // TODO-QSP: $t[9] = 'ninety'    & $tr[9] = 'ninetieth'
  // TODO-QSP: $teen[1] = 'eleven'    & $teenr[1] = 'eleventh'
  // TODO-QSP: $teen[2] = 'twelve'    & $teenr[2] = 'twelfth'
  // TODO-QSP: $teen[3] = 'thirteen'  & $teenr[3] = 'thirteenth'
  // TODO-QSP: $teen[4] = 'fourteen'  & $teenr[4] = 'fourteenth'
  // TODO-QSP: $teen[5] = 'fifteen'  & $teenr[5] = 'fifteenth'
  // TODO-QSP: $teen[6] = 'sixteen'  & $teenr[6] = 'sixteenth'
  // TODO-QSP: $teen[7] = 'seventeen'  & $teenr[7] = 'seventeenth'
  // TODO-QSP: $teen[8] = 'eighteen'  & $teenr[8] = 'eighteenth'
  // TODO-QSP: $teen[9] = 'nineteen'  & $teenr[9] = 'nineteenth'
  if (((s as any).temp_stringVars ?? 0)?.['num'] >= 1000000000) {
    ((s as any).temp_stringVars ?? {})['billions'] = ((s as any).temp_stringVars ?? {})?.['num'] / 1000000000;
    ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? 0)?.['billions'];
    if (((s as any).temp_stringVars ?? 0)?.['working'] >= 100) {
      ((s as any).temp_stringVars ?? {})['hundreds_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 100;
      // TODO-QSP: $result += $o[temp_stringVars['hundreds_digit']] + ' hundred'
      if (((s as any).temp_stringVars ?? 0)?.['working'] % 100 > 0) {
        // TODO-QSP: $result += ' and '
      }
      ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? {})?.['working'] % 100;
    }
    if (((s as any).temp_stringVars ?? 0)?.['working'] >= 20) {
      ((s as any).temp_stringVars ?? {})['tens_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 10;
      // TODO-QSP: $result += $t[temp_stringVars['tens_digit']]
      if (((s as any).temp_stringVars ?? 0)?.['working'] % 10 > 0) {
        // TODO-QSP: $result += '-' + $o[temp_stringVars['working'] mod 10]
      }
    } else {
      if (((s as any).temp_stringVars ?? 0)?.['working'] >= 11) {
        // TODO-QSP: $result += $teen[temp_stringVars['working'] - 10]
      } else {
        if (((s as any).temp_stringVars ?? 0)?.['working'] === 10) {
          // TODO-QSP: $result += 'ten'
        } else {
          if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
            // TODO-QSP: $result += $o[temp_stringVars['working']]
          }
        }
      }
    }
    // TODO-QSP: $result += ' billion'
    ((s as any).temp_stringVars ?? {})['num'] = ((s as any).temp_stringVars ?? {})?.['num'] % 1000000000;
    if (((s as any).temp_stringVars ?? 0)?.['num'] > 0) {
      // TODO-QSP: $result += ' '
    }
  }
  if (((s as any).temp_stringVars ?? 0)?.['num'] >= 1000000) {
    ((s as any).temp_stringVars ?? {})['millions'] = ((s as any).temp_stringVars ?? {})?.['num'] / 1000000;
    ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? 0)?.['millions'];
    if (((s as any).temp_stringVars ?? 0)?.['working'] >= 100) {
      ((s as any).temp_stringVars ?? {})['hundreds_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 100;
      // TODO-QSP: $result += $o[temp_stringVars['hundreds_digit']] + ' hundred'
      ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? {})?.['working'] % 100;
      if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
        // TODO-QSP: $result += ' and '
      }
    }
    if (((s as any).temp_stringVars ?? 0)?.['working'] >= 20) {
      ((s as any).temp_stringVars ?? {})['tens_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 10;
      // TODO-QSP: $result += $t[temp_stringVars['tens_digit']]
      if (((s as any).temp_stringVars ?? 0)?.['working'] % 10 > 0) {
        // TODO-QSP: $result += '-' + $o[temp_stringVars['working'] mod 10]
      }
    } else {
      if (((s as any).temp_stringVars ?? 0)?.['working'] >= 11) {
        // TODO-QSP: $result += $teen[temp_stringVars['working'] - 10]
      } else {
        if (((s as any).temp_stringVars ?? 0)?.['working'] === 10) {
          // TODO-QSP: $result += 'ten'
        } else {
          if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
            // TODO-QSP: $result += $o[temp_stringVars['working']]
          }
        }
      }
    }
    // TODO-QSP: $result += ' million'
    ((s as any).temp_stringVars ?? {})['num'] = ((s as any).temp_stringVars ?? {})?.['num'] % 1000000;
    if (((s as any).temp_stringVars ?? 0)?.['num'] > 0) {
      // TODO-QSP: $result += ' '
    }
  }
  if (((s as any).temp_stringVars ?? 0)?.['num'] >= 1000) {
    ((s as any).temp_stringVars ?? {})['thousands'] = ((s as any).temp_stringVars ?? {})?.['num'] / 1000;
    ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? 0)?.['thousands'];
    if (((s as any).temp_stringVars ?? 0)?.['working'] >= 100) {
      ((s as any).temp_stringVars ?? {})['hundreds_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 100;
      // TODO-QSP: $result += $o[temp_stringVars['hundreds_digit']] + ' hundred'
      ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? {})?.['working'] % 100;
      if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
        // TODO-QSP: $result += ' and '
      }
    }
    if (((s as any).temp_stringVars ?? 0)?.['working'] >= 20) {
      ((s as any).temp_stringVars ?? {})['tens_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 10;
      // TODO-QSP: $result += $t[temp_stringVars['tens_digit']]
      if (((s as any).temp_stringVars ?? 0)?.['working'] % 10 > 0) {
        // TODO-QSP: $result += '-' + $o[temp_stringVars['working'] mod 10]
      }
    } else {
      if (((s as any).temp_stringVars ?? 0)?.['working'] >= 11) {
        // TODO-QSP: $result += $teen[temp_stringVars['working'] - 10]
      } else {
        if (((s as any).temp_stringVars ?? 0)?.['working'] === 10) {
          // TODO-QSP: $result += 'ten'
        } else {
          if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
            // TODO-QSP: $result += $o[temp_stringVars['working']]
          }
        }
      }
    }
    // TODO-QSP: $result += ' thousand'
    ((s as any).temp_stringVars ?? {})['num'] = ((s as any).temp_stringVars ?? {})?.['num'] % 1000;
    if (((s as any).temp_stringVars ?? 0)?.['num'] > 0) {
      // TODO-QSP: $result += ' '
    }
  }
  if (((s as any).temp_stringVars ?? 0)?.['rank'] === 0) {
    if (((s as any).temp_stringVars ?? 0)?.['num'] > 0) {
      ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? 0)?.['num'];
      if (((s as any).temp_stringVars ?? 0)?.['working'] >= 100) {
        ((s as any).temp_stringVars ?? {})['hundreds_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 100;
        // TODO-QSP: $result += $o[temp_stringVars['hundreds_digit']] + ' hundred'
        ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? {})?.['working'] % 100;
        if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
          // TODO-QSP: $result += ' and '
        }
      }
      if (((s as any).temp_stringVars ?? 0)?.['working'] >= 20) {
        ((s as any).temp_stringVars ?? {})['tens_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 10;
        // TODO-QSP: $result += $t[temp_stringVars['tens_digit']]
        if (((s as any).temp_stringVars ?? 0)?.['working'] % 10 > 0) {
          // TODO-QSP: $result += '-' + $o[temp_stringVars['working'] mod 10]
        }
      } else {
        if (((s as any).temp_stringVars ?? 0)?.['working'] >= 11) {
          // TODO-QSP: $result += $teen[temp_stringVars['working'] - 10]
        } else {
          if (((s as any).temp_stringVars ?? 0)?.['working'] === 10) {
            // TODO-QSP: $result += 'ten'
          } else {
            if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
              // TODO-QSP: $result += $o[temp_stringVars['working']]
            }
          }
        }
      }
    }
  } else {
    ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? 0)?.['num'];
    if (((s as any).temp_stringVars ?? 0)?.['working'] >= 100) {
      ((s as any).temp_stringVars ?? {})['hundreds_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 100;
      // TODO-QSP: $result += $o[temp_stringVars['hundreds_digit']] + ' hundred'
      ((s as any).temp_stringVars ?? {})['working'] = ((s as any).temp_stringVars ?? {})?.['working'] % 100;
      if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
        // TODO-QSP: $result += ' and '
      }
    }
    if (((s as any).temp_stringVars ?? 0)?.['working'] >= 20) {
      ((s as any).temp_stringVars ?? {})['tens_digit'] = ((s as any).temp_stringVars ?? {})?.['working'] / 10;
      if (((s as any).temp_stringVars ?? 0)?.['working'] % 10 > 0) {
        // TODO-QSP: $result += $t[temp_stringVars['tens_digit']]
        // TODO-QSP: $result += '-' + $oth[temp_stringVars['working'] mod 10]
      } else {
        // TODO-QSP: $result += $tr[temp_stringVars['tens_digit']]
      }
    } else {
      if (((s as any).temp_stringVars ?? 0)?.['working'] >= 11) {
        // TODO-QSP: $result += $teenr[temp_stringVars['working'] - 10]
      } else {
        if (((s as any).temp_stringVars ?? 0)?.['working'] === 10) {
          // TODO-QSP: $result += 'tenth'
        } else {
          if (((s as any).temp_stringVars ?? 0)?.['working'] > 0) {
            // TODO-QSP: $result += $oth[temp_stringVars['working']]
          } else {
            // TODO-QSP: $result += 'th'
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterHash(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  ((s as any).temp_stringVars ?? {})['index'] = 1;
  ((s as any).temp_stringVars ?? {})['counter'] = 1;
  // TODO-QSP: :hash_loop
  (s as any).result = ((s as any).result ?? 0) + (((s as any).temp_stringVars ?? {})?.['counter'] * qspFunc(s, 'string', 'to_ascii', qspUntranslated(s, "mid(\u00000\u0000, temp_stringVars['index'], 1)", { location: "string" })));
  ((s as any).temp_stringVars ?? {})['counter'] = (((s as any).temp_stringVars ?? {})['counter'] ?? 0) + ((1 + ((s as any).temp_stringVars ?? {})?.['index']) / 2);
  ((s as any).temp_stringVars ?? {})['index'] = (((s as any).temp_stringVars ?? {})['index'] ?? 0) + (1);
  if (((s as any).temp_stringVars ?? 0)?.['index'] <= ((((s as any).locArgs?.[1] ?? 0)).length)) {
    // TODO-QSP: jump 'hash_loop'
  }
  return;
  scene.build();
}

function enterToAscii(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).length) !== 1) {
    // TODO-QSP: msg 'ERROR: string, to_ascii did not get a single character as an argument'
  }
  (s as any).result = 31 + ((' !"#$%&\'()*+,-./123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~').indexOf((((s as any).locArgs?.[1] ?? 0)))) + 1;
  return;
  scene.build();
}

function enterSplitKeyValue(s: GameState, scene: SceneBuilder): void {
  if ((!((((s as any).locArgs?.[1] ?? 0)).length))) {
    return;
  }
  ((s as any).temp_stringVars ?? {})['key-value-string'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_stringVars ?? {})['pair_sep'] = ((((s as any).locArgs?.[2] ?? 0) === '') ? (',') : (((s as any).locArgs?.[2] ?? 0)));
  ((s as any).temp_stringVars ?? {})['kv_sep'] = ((((s as any).locArgs?.[3] ?? 0) === '') ? ('=') : (((s as any).locArgs?.[3] ?? 0)));
  ((s as any).temp_stringVars ?? {})['keys_array'] = ((((s as any).locArgs?.[4] ?? 0) === '') ? ('string_keys') : (((s as any).locArgs?.[4] ?? 0)));
  ((s as any).temp_stringVars ?? {})['values_array'] = ((((s as any).locArgs?.[5] ?? 0) === '') ? ('string_values') : (((s as any).locArgs?.[5] ?? 0)));
  ((s as any).temp_stringVars ?? {})['type_flag'] = 0;
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf(1) : -1) > 0) {
    ((s as any).temp_stringVars ?? {})['type_flag'] = 1;
  }
  ((s as any).temp_stringVars ?? {})['outer_jump'] = qspUntranslated(s, "len(temp_stringVars['pair_sep'])", { location: "string" });
  ((s as any).temp_stringVars ?? {})['inner_jump'] = qspUntranslated(s, "len(temp_stringVars['kv_sep'])", { location: "string" });
  // TODO-QSP: :split_key_value_outer_loop
  ((s as any).temp_stringVars ?? {})['outer_index'] = ((((s as any).temp_stringVars ?? 0)?.['key-value-string']).indexOf((((s as any).temp_stringVars ?? 0)?.['pair_sep']))) + 1;
  if (((s as any).temp_stringVars ?? 0)?.['outer_index'] === 0) {
    ((s as any).temp_stringVars ?? {})['outer_index'] = ((((s as any).temp_stringVars ?? 0)?.['key-value-string']).length) + 1;
  }
  ((s as any).temp_stringVars ?? {})['sub_string'] = ((((s as any).temp_stringVars ?? 0)?.['key-value-string']).slice((1)-1, ((1)-1)+(((s as any).temp_stringVars ?? {})?.['outer_index'] - 1)));
  ((s as any).temp_stringVars ?? {})['inner_index'] = qspUntranslated(s, "instr(temp_stringVars['sub_string'], temp_stringVars['kv_sep'])", { location: "string" });
  if (((s as any).temp_stringVars ?? 0)?.['inner_index'] === 0) {
    return;
  }
  ((s as any).temp_stringVars ?? {})['key'] = ((((((s as any).temp_stringVars ?? 0)?.['sub_string']).slice((1)-1, ((1)-1)+(((s as any).temp_stringVars ?? {})?.['inner_index'] - 1)))).trim());
  ((s as any).temp_stringVars ?? {})['value'] = ((((((s as any).temp_stringVars ?? 0)?.['sub_string']).slice((((s as any).temp_stringVars ?? {})?.['inner_index'] + ((s as any).temp_stringVars ?? {})?.['inner_jump'])-1))).trim());
  // TODO-QSP: dynamic "
  // TODO-QSP: $<<$temp_stringVars['keys_array']>>[] = $temp_stringVars['key']
  // TODO-QSP: "
  if (((s as any).temp_stringVars ?? 0)?.['type_flag'] === 1) {
    // TODO-QSP: dynamic "
    // TODO-QSP: $<<$temp_stringVars['values_array']>>[$temp_stringVars['key']] = $temp_stringVars['value']
    // TODO-QSP: "
  } else {
    if (!isNaN(((s as any).temp_stringVars ?? 0)?.['value']) && ((s as any).temp_stringVars ?? 0)?.['value'] !== '') {
      // TODO-QSP: dynamic "
      // TODO-QSP: <<$temp_stringVars['values_array']>>[$temp_stringVars['key']] = val($temp_stringVars['value'])
      // TODO-QSP: "
    } else {
      // TODO-QSP: dynamic "
      // TODO-QSP: $<<$temp_stringVars['values_array']>>[$temp_stringVars['key']] = $temp_stringVars['value']
      // TODO-QSP: "
    }
  }
  ((s as any).temp_stringVars ?? {})['key-value-string'] = ((((s as any).temp_stringVars ?? 0)?.['key-value-string']).slice((((s as any).temp_stringVars ?? {})?.['outer_index'] + ((s as any).temp_stringVars ?? {})?.['outer_jump'])-1));
  if (((((s as any).temp_stringVars ?? 0)?.['key-value-string']).length) > 0) {
    // TODO-QSP: jump 'split_key_value_outer_loop'
  }
  return;
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
    case 'parse_number':
      enterParseNumber(s, scene);
      break;
    case 'hash':
      enterHash(s, scene);
      break;
    case 'to_ascii':
      enterToAscii(s, scene);
      break;
    case 'split_key_value':
      enterSplitKeyValue(s, scene);
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
