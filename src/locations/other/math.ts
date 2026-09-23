import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterIntSqrt(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    (s as any).result = 0;
    return;
  }
  (s as any).sqrtnum = ((s as any).locArgs?.[1] ?? 0);
  (s as any).sqrtn = 1 + ((s as any).sqrtnum ?? 0) / 2;
  (s as any).sqrtn1 = (((s as any).sqrtn ?? 0) + ((s as any).sqrtnum ?? 0) / ((s as any).sqrtn ?? 0)) / 2;
  // TODO-QSP: :sqrtloop
  if (((s as any).sqrtn1 ?? 0) < ((s as any).sqrtn ?? 0)) {
    (s as any).sqrtn = ((s as any).sqrtn1 ?? 0);
    (s as any).sqrtn1 = (((s as any).sqrtn ?? 0) + ((s as any).sqrtnum ?? 0) / ((s as any).sqrtn ?? 0)) / 2;
    // TODO-QSP: jump 'sqrtloop'
  }
  (s as any).result = ((s as any).sqrtn ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIntDivide(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    return;
  }
  (s as any).result = (((s as any).locArgs?.[1] ?? 0) + (((s as any).locArgs?.[2] ?? 0) / 2)) / ((s as any).locArgs?.[2] ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIntRound(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    return;
  }
  (s as any).result = ((s as any).locArgs?.[2] ?? 0) * qspFunc(s, 'math', 'int_divide', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIntClamp(s: GameState, scene: SceneBuilder): void {
  (s as any).result = Math.min(Math.max(((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)), ((s as any).locArgs?.[3] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIntPower(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    (s as any).result = 1;
  } else {
    if (String((s as any).locArgs?.[2] ?? '') < 0) {
      (s as any).result = 0;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        (s as any).result = ((s as any).locArgs?.[1] ?? 0);
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          (s as any).result = ((s as any).locArgs?.[1] ?? 0) * ((s as any).locArgs?.[1] ?? 0);
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 3) {
            (s as any).result = ((s as any).locArgs?.[1] ?? 0) * ((s as any).locArgs?.[1] ?? 0) * ((s as any).locArgs?.[1] ?? 0);
          } else {
            if ((!(String((s as any).locArgs?.[2] ?? '') % 2))) {
              (s as any).result = qspFunc(s, 'math', 'int_power', ((s as any).locArgs?.[1] ?? 0) * ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0) / 2);
            } else {
              (s as any).result = ((s as any).locArgs?.[1] ?? 0) * qspFunc(s, 'math', 'int_power', ((s as any).locArgs?.[1] ?? 0) * ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0) / 4);
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterConvertToLong(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '' + ((s as any).locArgs?.[1] ?? 0) + '';
  }
  (s as any).result = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterConvertToInt(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = parseFloat(((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).result = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterTrimLong(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '' + ((s as any).locArgs?.[1] ?? 0) + '';
  }
  (s as any).result = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: :trim_long_loop
  if ((String(((s as any).result ?? 0)).length) > 1) {
    if ((String(((s as any).result ?? 0)).slice((1)-1, ((1)-1)+(1))) === '0') {
      (s as any).result = (String(((s as any).result ?? 0)).slice((2)-1));
      // TODO-QSP: jump 'trim_long_loop'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPadLong(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '' + ((s as any).locArgs?.[1] ?? 0) + '';
  }
  (s as any).result = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: :pad_long_loop
  if (String((s as any).locArgs?.[2] ?? '') > 0) {
    (s as any).result = '0' + ((s as any).result ?? 0);
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).ARGS[2] ?? 0) - (1);
    // TODO-QSP: jump 'pad_long_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterLongAdd(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '' + ((s as any).locArgs?.[1] ?? 0) + '';
  }
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '' + ((s as any).locArgs?.[2] ?? 0) + '';
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '-') {
    ((s as any).temp_add_sign = (s as any).temp_add_sign ?? {})[1] = 1;
    // TODO-QSP: $ARGS[1] = $mid($ARGS[1], 2)
  }
  if ((String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '-') {
    ((s as any).temp_add_sign = (s as any).temp_add_sign ?? {})[2] = 1;
    // TODO-QSP: $ARGS[2] = $mid($ARGS[2], 2)
  }
  if (((s as any).temp_add_sign ?? 0)[1] !== ((s as any).temp_add_sign ?? 0)[2]) {
    if (((s as any).temp_add_sign ?? 0)[1] === 0) {
      (s as any).result = qspFunc(s, 'math', 'long_sub', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
    } else {
      (s as any).result = qspFunc(s, 'math', 'long_sub', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[1] ?? 0));
    }
    // TODO-QSP: jump 'long_add_cleanup'
  } else {
    if (((s as any).temp_add_sign ?? 0)[1] === 1) {
      ((s as any).temp_add_sign = (s as any).temp_add_sign ?? {})[0] = 1;
    }
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).length) < (String(((s as any).locArgs?.[2] ?? 0)).length)) {
    // TODO-QSP: $ARGS[1] = func('math', 'pad_long', $ARGS[1], len($ARGS[2]) - len($ARGS[1]))
  } else {
    if ((String(((s as any).locArgs?.[1] ?? 0)).length) > (String(((s as any).locArgs?.[2] ?? 0)).length)) {
      // TODO-QSP: $ARGS[2] = func('math', 'pad_long', $ARGS[2], len($ARGS[1]) - len($ARGS[2]))
    }
  }
  (s as any).math_i = Math.max((String(((s as any).locArgs?.[1] ?? 0)).length), (String(((s as any).locArgs?.[2] ?? 0)).length));
  // TODO-QSP: :long_add_loop2
  (s as any).temp_add_res = parseFloat((String(((s as any).locArgs?.[1] ?? 0)).slice((((s as any).math_i ?? 0))-1, ((((s as any).math_i ?? 0))-1)+(1)))) + parseFloat((String(((s as any).locArgs?.[2] ?? 0)).slice((((s as any).math_i ?? 0))-1, ((((s as any).math_i ?? 0))-1)+(1)))) + ((s as any).temp_add_carry ?? 0);
  if (((s as any).temp_add_res ?? 0) > 9) {
    (s as any).temp_add_carry = 1;
    (s as any).temp_add_res = (((s as any).temp_add_res ?? 0) % 10);
  } else {
    (s as any).temp_add_carry = 0;
  }
  (s as any).result = '' + ((s as any).temp_add_res ?? 0) + '' + ((s as any).result ?? 0);
  (s as any).math_i = ((s as any).math_i ?? 0) - (1);
  if (((s as any).math_i ?? 0) > 0) {
    // TODO-QSP: jump 'long_add_loop2'
  }
  if (((s as any).temp_add_carry ?? 0) > 0) {
    (s as any).result = '' + ((s as any).temp_add_carry ?? 0) + '' + ((s as any).result ?? 0);
  }
  (s as any).result = qspFunc(s, 'math', 'trim_long', ((s as any).result ?? 0));
  if (((s as any).temp_add_sign ?? 0)[0] === 1) {
    (s as any).result = '-' + ((s as any).result ?? 0);
  }
  // TODO-QSP: :long_add_cleanup
  // TODO-QSP: end
  scene.build();
}

function enterLongSub(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '' + ((s as any).locArgs?.[1] ?? 0) + '';
  }
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '' + ((s as any).locArgs?.[2] ?? 0) + '';
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '-') {
    ((s as any).temp_sub_sign = (s as any).temp_sub_sign ?? {})[1] = 1;
    // TODO-QSP: $ARGS[1] = $mid($ARGS[1], 2)
  }
  if ((String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '-') {
    ((s as any).temp_sub_sign = (s as any).temp_sub_sign ?? {})[2] = 1;
    // TODO-QSP: $ARGS[2] = $mid($ARGS[2], 2)
  }
  if (((s as any).temp_sub_sign ?? 0)[1] === 0) {
    if (((s as any).temp_sub_sign ?? 0)[2] === 1) {
      (s as any).result = qspFunc(s, 'math', 'long_add', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
      // TODO-QSP: jump 'long_sub_cleanup'
    }
  } else {
    if (((s as any).temp_sub_sign ?? 0)[2] === 0) {
      (s as any).result = qspFunc(s, 'math', 'long_add', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
      (s as any).result = '-' + ((s as any).result ?? 0);
    } else {
      (s as any).result = qspFunc(s, 'math', 'long_sub', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[1] ?? 0));
    }
    // TODO-QSP: jump 'long_sub_cleanup'
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).length) < (String(((s as any).locArgs?.[2] ?? 0)).length)) {
    (s as any).temp_flip_know = 1;
    // TODO-QSP: $ARGS[1] = func('math', 'pad_long', $ARGS[1], len($ARGS[2]) - len($ARGS[1]))
  } else {
    if ((String(((s as any).locArgs?.[1] ?? 0)).length) > (String(((s as any).locArgs?.[2] ?? 0)).length)) {
      // TODO-QSP: $ARGS[2] = func('math', 'pad_long', $ARGS[2], len($ARGS[1]) - len($ARGS[2]))
    }
  }
  if (((s as any).temp_flip_know ?? 0) === 1) {
    (s as any).temp_sub_res = ((s as any).locArgs?.[2] ?? 0);
    // TODO-QSP: $ARGS[2] = $ARGS[1]
    // TODO-QSP: $ARGS[1] = $temp_sub_res
    ((s as any).temp_sub_sign = (s as any).temp_sub_sign ?? {})[0] = 1;
  }
  (s as any).result = '';
  (s as any).math_i = Math.max((String(((s as any).locArgs?.[1] ?? 0)).length), (String(((s as any).locArgs?.[2] ?? 0)).length));
  // TODO-QSP: :long_sub_loop2
  (s as any).temp_sub_res = (parseFloat((String(((s as any).locArgs?.[1] ?? 0)).slice((((s as any).math_i ?? 0))-1, ((((s as any).math_i ?? 0))-1)+(1)))) - parseFloat((String(((s as any).locArgs?.[2] ?? 0)).slice((((s as any).math_i ?? 0))-1, ((((s as any).math_i ?? 0))-1)+(1))))) - ((s as any).temp_sub_carry ?? 0);
  if (((s as any).temp_sub_res ?? 0) < 0) {
    (s as any).temp_sub_carry = 1;
    (s as any).temp_sub_res = (((s as any).temp_sub_res ?? 0)+100) % 10;
  } else {
    (s as any).temp_sub_carry = 0;
  }
  (s as any).result = '' + ((s as any).temp_sub_res ?? 0) + '' + ((s as any).result ?? 0);
  (s as any).math_i = ((s as any).math_i ?? 0) - (1);
  if (((s as any).math_i ?? 0) > 0) {
    // TODO-QSP: jump 'long_sub_loop2'
  }
  if (((s as any).temp_sub_carry ?? 0) > 0) {
    ((s as any).temp_sub_sign = (s as any).temp_sub_sign ?? {})[0] = 1 - ((s as any).temp_sub_sign ?? 0)[0];
    (s as any).math_i = (String(((s as any).result ?? 0)).length);
    (s as any).temp_sub_carry = 1;
    // TODO-QSP: $ARGS[1] = $result
    (s as any).result = '';
    // TODO-QSP: :long_sub_flip
    (s as any).temp_sub_res = 9 - parseFloat((String(((s as any).locArgs?.[1] ?? 0)).slice((((s as any).math_i ?? 0))-1, ((((s as any).math_i ?? 0))-1)+(1)))) + ((s as any).temp_sub_carry ?? 0);
    if (((s as any).temp_sub_res ?? 0) < 10) {
      (s as any).temp_sub_carry = 0;
    } else {
      (s as any).temp_sub_res = 0;
    }
    (s as any).result = '' + ((s as any).temp_sub_res ?? 0) + '' + ((s as any).result ?? 0);
    (s as any).math_i = ((s as any).math_i ?? 0) - (1);
    if (((s as any).math_i ?? 0) > 0) {
      // TODO-QSP: jump 'long_sub_flip'
    }
  }
  (s as any).result = qspFunc(s, 'math', 'trim_long', ((s as any).result ?? 0));
  if (((s as any).temp_sub_sign ?? 0)[0] === 1) {
    (s as any).result = '-' + ((s as any).result ?? 0);
  }
  // TODO-QSP: :long_sub_cleanup
  // TODO-QSP: end
  scene.build();
}

function enterLongMult(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '' + ((s as any).locArgs?.[1] ?? 0) + '';
  }
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '' + ((s as any).locArgs?.[2] ?? 0) + '';
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '-') {
    ((s as any).temp_mult_sign = (s as any).temp_mult_sign ?? {})[1] = 1;
    // TODO-QSP: $ARGS[1] = $mid($ARGS[1], 2)
  }
  if ((String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '-') {
    ((s as any).temp_mult_sign = (s as any).temp_mult_sign ?? {})[2] = 1;
    // TODO-QSP: $ARGS[2] = $mid($ARGS[1], 2)
  }
  ((s as any).temp_mult_sign = (s as any).temp_mult_sign ?? {})[0] = ((((s as any).temp_mult_sign ?? 0)[1] + ((s as any).temp_mult_sign ?? 0)[2]) % 2);
  (s as any).math_i = 0;
  // TODO-QSP: :long_mult_loop1
  (s as any).math_j = 0;
  // TODO-QSP: :long_mult_loop2
  // TODO-QSP: long[math_i+math_j+1] += val($mid($ARGS[1], math_i+1, 1)) * val($mid($ARGS[2], math_j+1, 1))
  (s as any).math_j = ((s as any).math_j ?? 0) + (1);
  if (((s as any).math_j ?? 0) < (String(((s as any).locArgs?.[2] ?? 0)).length)) {
    // TODO-QSP: jump 'long_mult_loop2'
  }
  (s as any).math_i = ((s as any).math_i ?? 0) + (1);
  if (((s as any).math_i ?? 0) < (String(((s as any).locArgs?.[1] ?? 0)).length)) {
    // TODO-QSP: jump 'long_mult_loop1'
  }
  (s as any).result = '';
  (s as any).math_i = 0;
  // TODO-QSP: :long_mult_loop3
  if (((s as any).long ?? 0)?.[String((s as any).math_i ?? 0)] > 9) {
    // TODO-QSP: long[math_i-1] += long[math_i] / 10
    ((s as any).long = (s as any).long ?? {})[String((s as any).math_i ?? 0)] = (((s as any).long ?? 0)?.[String((s as any).math_i ?? 0)] % 10);
  }
  (s as any).result = '' + ((s as any).long ?? 0)?.[String((s as any).math_i ?? 0)] + '' + ((s as any).result ?? 0);
  (s as any).math_i = ((s as any).math_i ?? 0) - (1);
  if (((s as any).math_i ?? 0) > 0) {
    // TODO-QSP: jump 'long_mult_loop3'
  }
  (s as any).result = '' + qspUntranslated(s, "long[0]", { location: "math" }) + '' + ((s as any).result ?? 0);
  (s as any).result = qspFunc(s, 'math', 'trim_long', ((s as any).result ?? 0));
  if (((s as any).temp_mult_sign ?? 0)[0] === 1) {
    (s as any).result = '-' + ((s as any).result ?? 0);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLongDiv(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = '' + ((s as any).locArgs?.[1] ?? 0) + '';
  }
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '' + ((s as any).locArgs?.[2] ?? 0) + '';
  }
  if ((!((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('1|2|3|4|5|6|7|8|9'))) + 1))) {
    (s as any).result = '0';
    return;
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '-') {
    ((s as any).temp_div_sign = (s as any).temp_div_sign ?? {})[1] = 1;
    // TODO-QSP: $ARGS[1] = $mid($ARGS[1], 2)
  }
  if ((String(((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '-') {
    ((s as any).temp_div_sign = (s as any).temp_div_sign ?? {})[2] = 1;
    // TODO-QSP: $ARGS[2] = $mid($ARGS[1], 2)
  }
  ((s as any).temp_div_sign = (s as any).temp_div_sign ?? {})[0] = ((((s as any).temp_div_sign ?? 0)[1] + ((s as any).temp_div_sign ?? 0)[2]) % 2);
  (s as any).temp_n = (String(((s as any).locArgs?.[1] ?? 0)).length) - (String(((s as any).locArgs?.[2] ?? 0)).length);
  (s as any).div_mult = '1';
  if (((s as any).temp_n ?? 0) < 0) {
    (s as any).result = '0';
    // TODO-QSP: jump 'long_div_cleanup'
  } else {
    if (((s as any).temp_n ?? 0) > 0) {
      // TODO-QSP: :long_div_loop1
      // TODO-QSP: $ARGS[2] = $ARGS[2] + '0'
      (s as any).div_mult = ((s as any).div_mult ?? 0) + '0';
      (s as any).temp_n = ((s as any).temp_n ?? 0) - (1);
      if (((s as any).temp_n ?? 0) > 0) {
        // TODO-QSP: jump 'long_div_loop1'
      }
    }
  }
  (s as any).result = '0';
  // TODO-QSP: :long_div_loop2
  (s as any).temp_div_res = qspFunc(s, 'math', 'long_sub', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  if ((String(((s as any).temp_div_res ?? 0)).slice((1)-1, ((1)-1)+(1))) !== '-') {
    // TODO-QSP: $ARGS[1] = $temp_div_res
    (s as any).result = qspFunc(s, 'math', 'long_add', ((s as any).result ?? 0), ((s as any).div_mult ?? 0));
    // TODO-QSP: jump 'long_div_loop2'
  } else {
    if ((String(((s as any).div_mult ?? 0)).length) > 1) {
      // TODO-QSP: $ARGS[2] = $mid($ARGS[2], 1, len($ARGS[2])-1)
      (s as any).div_mult = (String(((s as any).div_mult ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).div_mult ?? 0)).length)-1)));
      (s as any).temp_n = ((s as any).temp_n ?? 0) - (1);
      // TODO-QSP: jump 'long_div_loop2'
    }
  }
  if (((s as any).temp_div_sign ?? 0)[0] === 1) {
    (s as any).result = '-' + ((s as any).result ?? 0);
  }
  // TODO-QSP: :long_div_cleanup
  // TODO-QSP: end
  scene.build();
}

function enterHexByte(s: GameState, scene: SceneBuilder): void {
  (s as any).math_hb = qspFunc(s, 'shortgs', 'int_to_hex_str', ((s as any).locArgs?.[1] ?? 0));
  if ((String(((s as any).math_hb ?? 0)).length) < 2) {
    (s as any).math_hb = '0' + ((s as any).math_hb ?? 0);
  }
  (s as any).result = ((s as any).math_hb ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterColorMix(s: GameState, scene: SceneBuilder): void {
  (s as any).math_mix_hexa = (String(((s as any).locArgs?.[1] ?? 0)).toUpperCase());
  (s as any).math_mix_ra = ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexa ?? 0)).slice((2)-1, ((2)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexa ?? 0)).slice((3)-1, ((3)-1)+(1)))))) + 1);
  (s as any).math_mix_ga = ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexa ?? 0)).slice((4)-1, ((4)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexa ?? 0)).slice((5)-1, ((5)-1)+(1)))))) + 1);
  (s as any).math_mix_ba = ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexa ?? 0)).slice((6)-1, ((6)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexa ?? 0)).slice((7)-1, ((7)-1)+(1)))))) + 1);
  (s as any).math_mix_hexb = (String(((s as any).locArgs?.[2] ?? 0)).toUpperCase());
  (s as any).math_mix_rb = ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexb ?? 0)).slice((2)-1, ((2)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexb ?? 0)).slice((3)-1, ((3)-1)+(1)))))) + 1);
  (s as any).math_mix_gb = ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexb ?? 0)).slice((4)-1, ((4)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexb ?? 0)).slice((5)-1, ((5)-1)+(1)))))) + 1);
  (s as any).math_mix_bb = ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexb ?? 0)).slice((6)-1, ((6)-1)+(1)))))) + 1) * 16 + ((String('123456789ABCDEF').indexOf(String((String(((s as any).math_mix_hexb ?? 0)).slice((7)-1, ((7)-1)+(1)))))) + 1);
  (s as any).math_mix_t = ((s as any).locArgs?.[3] ?? 0);
  (s as any).math_mix_r = ((s as any).math_mix_ra ?? 0) + (((s as any).math_mix_rb ?? 0) - ((s as any).math_mix_ra ?? 0)) * ((s as any).math_mix_t ?? 0) / 100;
  (s as any).math_mix_g = ((s as any).math_mix_ga ?? 0) + (((s as any).math_mix_gb ?? 0) - ((s as any).math_mix_ga ?? 0)) * ((s as any).math_mix_t ?? 0) / 100;
  (s as any).math_mix_b = ((s as any).math_mix_ba ?? 0) + (((s as any).math_mix_bb ?? 0) - ((s as any).math_mix_ba ?? 0)) * ((s as any).math_mix_t ?? 0) / 100;
  (s as any).math_mix_r = Math.min(Math.max(0, ((s as any).math_mix_r ?? 0)), 255);
  (s as any).math_mix_g = Math.min(Math.max(0, ((s as any).math_mix_g ?? 0)), 255);
  (s as any).math_mix_b = Math.min(Math.max(0, ((s as any).math_mix_b ?? 0)), 255);
  (s as any).result = '#';
  // TODO-QSP: $result += mid('0123456789ABCDEF', 1 + math_mix_r / 16, 1) + mid('0123456789ABCDEF', 1 + math_mix_r ...
  // TODO-QSP: $result += mid('0123456789ABCDEF', 1 + math_mix_g / 16, 1) + mid('0123456789ABCDEF', 1 + math_mix_g ...
  // TODO-QSP: $result += mid('0123456789ABCDEF', 1 + math_mix_b / 16, 1) + mid('0123456789ABCDEF', 1 + math_mix_b ...
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'int_sqrt':
      enterIntSqrt(s, scene);
      break;
    case 'int_divide':
      enterIntDivide(s, scene);
      break;
    case 'int_round':
      enterIntRound(s, scene);
      break;
    case 'int_clamp':
      enterIntClamp(s, scene);
      break;
    case 'int_power':
      enterIntPower(s, scene);
      break;
    case 'convert_to_long':
      enterConvertToLong(s, scene);
      break;
    case 'convert_to_int':
      enterConvertToInt(s, scene);
      break;
    case 'trim_long':
      enterTrimLong(s, scene);
      break;
    case 'pad_long':
      enterPadLong(s, scene);
      break;
    case 'long_add':
      enterLongAdd(s, scene);
      break;
    case 'long_sub':
      enterLongSub(s, scene);
      break;
    case 'long_mult':
      enterLongMult(s, scene);
      break;
    case 'long_div':
      enterLongDiv(s, scene);
      break;
    case 'hex_byte':
      enterHexByte(s, scene);
      break;
    case 'color_mix':
      enterColorMix(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const math: LocationDef = {
  name: 'math',
  region: 'other',
  enter: enter,
};
