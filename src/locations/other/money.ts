import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).money ?? 0) >= 1000000000) {
    (s as any).norm_temp = (((s as any).money ?? 0) - 950000000) / 1000000;
    (s as any).money = ((s as any).money ?? 0) - (((s as any).norm_temp ?? 0) * 1000000);
    (s as any).money_overflow = ((s as any).money_overflow ?? 0) + (((s as any).norm_temp ?? 0));
  } else {
    if (((s as any).money ?? 0) < 900000000  &&  ((s as any).money_overflow ?? 0) > 0) {
      (s as any).norm_temp = Math.min(((s as any).money_overflow ?? 0), (950000000 - ((s as any).money ?? 0)) / 1000000);
      (s as any).money = ((s as any).money ?? 0) + (((s as any).norm_temp ?? 0) * 1000000);
      (s as any).money_overflow = ((s as any).money_overflow ?? 0) - (((s as any).norm_temp ?? 0));
    }
  }
  if (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0) >= 1000000000) {
    (s as any).norm_temp = (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0) - 950000000) / 1000000;
    (s as any).karta = ((s as any).karta ?? 0) - (((s as any).norm_temp ?? 0) * 1000000);
    (s as any).karta_overflow = ((s as any).karta_overflow ?? 0) + (((s as any).norm_temp ?? 0));
  } else {
    if (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0) < 900000000  &&  ((s as any).karta_overflow ?? 0) > 0) {
      (s as any).norm_temp = Math.min(((s as any).karta_overflow ?? 0), (950000000 - (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0))) / 1000000);
      (s as any).karta = ((s as any).karta ?? 0) + (((s as any).norm_temp ?? 0) * 1000000);
      (s as any).karta_overflow = ((s as any).karta_overflow ?? 0) - (((s as any).norm_temp ?? 0));
    }
  }
  if (((s as any).stolmoney ?? 0) >= 1000000000) {
    (s as any).norm_temp = (((s as any).stolmoney ?? 0) - 950000000) / 1000000;
    (s as any).stolmoney = ((s as any).stolmoney ?? 0) - (((s as any).norm_temp ?? 0) * 1000000);
    (s as any).stolmoney_overflow = ((s as any).stolmoney_overflow ?? 0) + (((s as any).norm_temp ?? 0));
  } else {
    if (((s as any).stolmoney ?? 0) < 900000000  &&  ((s as any).stolmoney_overflow ?? 0) > 0) {
      (s as any).norm_temp = Math.min(((s as any).stolmoney_overflow ?? 0), (950000000 - ((s as any).stolmoney ?? 0)) / 1000000);
      (s as any).stolmoney = ((s as any).stolmoney ?? 0) + (((s as any).norm_temp ?? 0) * 1000000);
      (s as any).stolmoney_overflow = ((s as any).stolmoney_overflow ?? 0) - (((s as any).norm_temp ?? 0));
    }
  }
  scene.build();
}

function enterBankTransfer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'to_bank') {
    (s as any).money = ((s as any).money ?? 0) - (((s as any).locArgs?.[1] ?? 0));
    (s as any).karta = ((s as any).karta ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'to_cash') {
      (s as any).karta = ((s as any).karta ?? 0) - (((s as any).locArgs?.[1] ?? 0));
      (s as any).money = ((s as any).money ?? 0) + (((s as any).locArgs?.[1] ?? 0));
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDeskTransfer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'to_desk') {
    (s as any).money = ((s as any).money ?? 0) - (((s as any).locArgs?.[1] ?? 0));
    (s as any).stolmoney = ((s as any).stolmoney ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'all_to_desk') {
      (s as any).stolmoney = ((s as any).stolmoney ?? 0) + (((s as any).money ?? 0));
      (s as any).stolmoney_overflow = ((s as any).stolmoney_overflow ?? 0) + (((s as any).money_overflow ?? 0));
      (s as any).money = 0;
      (s as any).money_overflow = 0;
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'from_desk') {
        (s as any).stolmoney = ((s as any).stolmoney ?? 0) - (((s as any).locArgs?.[1] ?? 0));
        (s as any).money = ((s as any).money ?? 0) + (((s as any).locArgs?.[1] ?? 0));
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'all_from_desk') {
          (s as any).money = ((s as any).money ?? 0) + (((s as any).stolmoney ?? 0));
          (s as any).money_overflow = ((s as any).money_overflow ?? 0) + (((s as any).stolmoney_overflow ?? 0));
          (s as any).stolmoney = 0;
          (s as any).stolmoney_overflow = 0;
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterPay(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    // TODO-QSP: exit
  }
  ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['amount'] = qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), 'price');
  if (((s as any).locArgs?.[2] ?? 0) === 'cash') {
    if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).temp_moneyVars ?? 0)?.['amount'], 'cash')) {
      // TODO-QSP: gs 'money', '_cash_payment', temp_moneyVars['amount'], 'pay'
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'bank') {
      if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).temp_moneyVars ?? 0)?.['amount'], 'bank')) {
        // TODO-QSP: gs 'money', '_bank_payment', temp_moneyVars['amount'], 'pay'
      }
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'desk') {
        if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).temp_moneyVars ?? 0)?.['amount'], 'cash')) {
          // TODO-QSP: gs 'money', '_cash_payment', temp_moneyVars['amount'], 'pay'
        } else {
          if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).temp_moneyVars ?? 0)?.['amount'], 'desk')) {
            // TODO-QSP: gs 'money', '_desk_payment', temp_moneyVars['amount'], 'pay'
          }
        }
      } else {
        // TODO-QSP: gs 'money', '_payment_method', temp_moneyVars['amount'], 'pay'
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterEarn(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    // TODO-QSP: exit
  }
  ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['amount'] = qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), 'profit');
  if (((s as any).locArgs?.[2] ?? 0) === 'cash') {
    // TODO-QSP: gs 'money', '_cash_payment', temp_moneyVars['amount'], 'earn'
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'bank') {
      // TODO-QSP: gs 'money', '_bank_payment', temp_moneyVars['amount'], 'earn'
    } else {
      // TODO-QSP: gs 'money', '_payment_method', temp_moneyVars['amount'], 'earn'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSet(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_modifier = ((((s as any).locArgs?.[3] ?? 0) === 'pay') ? ('price') : ('profit'));
  if (((s as any).locArgs?.[2] ?? 0) === 'bank') {
    (s as any).karta = qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_modifier ?? 0)) + ((s as any).bankDebtLimit ?? 0);
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'desk') {
      (s as any).stolmoney = qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_modifier ?? 0));
    } else {
      (s as any).money = qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_modifier ?? 0));
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPrice(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), 'price');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterProfit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), 'profit');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBasePrice(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', '_remove_modifiers', ((s as any).locArgs?.[1] ?? 0), 'price');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBaseProfit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', '_remove_modifiers', ((s as any).locArgs?.[1] ?? 0), 'profit');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanAfford(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', '_can_afford_inner', qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), 'price'), ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetCostString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = 'both';
  }
  if (((s as any).locArgs?.[2] ?? 0) === 'cash') {
    (s as any).temp_method = ' - Cash only';
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'bank') {
      (s as any).temp_method = ' - Bank only';
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'desk') {
        (s as any).temp_method = ' - Cash and desk only';
      } else {
        (s as any).temp_method = '';
      }
    }
  }
  (s as any).result = ' (' + qspFunc(s, 'money', 'string_price', ((s as any).locArgs?.[1] ?? 0)) + ((s as any).temp_method ?? 0) + ')';
  if (qspFunc(s, 'money', 'can_afford', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    // TODO-QSP: $result += ' ' + $func('wrap', 'v_neg', '(You can''t afford this)')
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanAffordInner(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'cash') {
    (s as any).result = ((((s as any).money ?? 0) >= ((s as any).locArgs?.[1] ?? 0)) ? (1) : (0));
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'bank') {
      if (((s as any).cfg_vars ?? 0)?.['allow_overdraft'] === 1) {
        (s as any).result = ((((s as any).karta ?? 0) >= ((s as any).locArgs?.[1] ?? 0)) ? (1) : (0));
      } else {
        (s as any).result = ((Math.max(((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0), 0) >= ((s as any).locArgs?.[1] ?? 0)) ? (1) : (0));
      }
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'desk') {
        (s as any).result = (((((s as any).money ?? 0) + ((s as any).stolmoney ?? 0)) >= ((s as any).locArgs?.[1] ?? 0)) ? (1) : (0));
      } else {
        if (((s as any).cfg_vars ?? 0)?.['allow_overdraft'] === 1) {
          (s as any).result = (((((s as any).money ?? 0) + ((s as any).karta ?? 0)) >= ((s as any).locArgs?.[1] ?? 0)) ? (1) : (0));
        } else {
          (s as any).result = (((((s as any).money ?? 0) + Math.max(((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0), 0)) >= ((s as any).locArgs?.[1] ?? 0)) ? (1) : (0));
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStringPrice(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).result = 'Free';
  } else {
    (s as any).result = qspFunc(s, 'money', 'format', qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), 'price'), 0, 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStringProfit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', 'format', qspFunc(s, 'money', '_apply_modifiers', ((s as any).locArgs?.[1] ?? 0), 'profit'), 0, 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFormat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[3] ?? 0)) {
    (s as any).result = qspFunc(s, 'string', 'parse_number', ((s as any).locArgs?.[1] ?? 0));
    if ((!((s as any).locArgs?.[2] ?? 0))) {
      // TODO-QSP: $result += ' Rouble' + iif(ARGS[1] <> 1, 's', '')
    }
  } else {
    (s as any).result = qspFunc(s, 'money', '_format_price_string', ((s as any).locArgs?.[1] ?? 0));
    if ((!((s as any).locArgs?.[2] ?? 0))) {
      // TODO-QSP: $result += ' <b>₽</b>'
    }
  }
  if (((s as any).locArgs?.[4] ?? 0)) {
    if (((s as any).locArgs?.[1] ?? 0) > 0) {
      (s as any).result = qspFunc(s, 'wrap', 'v_pos', ((s as any).result ?? 0));
    } else {
      (s as any).result = qspFunc(s, 'wrap', 'v_neg', ((s as any).result ?? 0));
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFormatBalance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'cash') {
    ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['base'] = ((s as any).money ?? 0);
    ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['overflow'] = ((s as any).money_overflow ?? 0);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'bank') {
      ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['base'] = ((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0);
      ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['overflow'] = ((s as any).karta_overflow ?? 0);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'desk') {
        ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['base'] = ((s as any).stolmoney ?? 0);
        ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['overflow'] = ((s as any).stolmoney_overflow ?? 0);
      }
    }
  }
  if (((s as any).format_balance_temp ?? 0)?.['overflow'] > 0) {
    ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['base_str'] = qspFunc(s, 'money', '_format_price_string', ((s as any).format_balance_temp ?? 0)?.['base']);
    ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['pad'] = 9 - (String(String(((s as any).format_balance_temp ?? 0)?.['base'])).length);
    ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['padding'] = '';
    // TODO-QSP: :format_balance_pad_loop
    if (((s as any).format_balance_temp ?? 0)?.['pad'] > 0) {
      ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['padding'] = ((s as any).format_balance_temp['padding'] ?? 0) + ('0');
      ((s as any).format_balance_temp = (s as any).format_balance_temp ?? {})['pad'] = ((s as any).format_balance_temp['pad'] ?? 0) - (1);
      // TODO-QSP: jump 'format_balance_pad_loop'
    }
    (s as any).delim = ((((s as any).cheatVars ?? 0)?.['money_format'] === 1) ? ('.') : (','));
    (s as any).result = qspFunc(s, 'money', '_format_price_string', ((s as any).format_balance_temp ?? 0)?.['overflow']) + ((s as any).delim ?? 0) + (((s as any).format_balance_temp ?? {})?.['padding'] ?? 0) + qspFunc(s, 'money', '_format_price_string', ((s as any).format_balance_temp ?? 0)?.['base']);
  } else {
    (s as any).result = qspFunc(s, 'money', 'format', ((s as any).format_balance_temp ?? 0)?.['base'], 1);
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: $result += ' <b>₽</b>'
  }
  if (((s as any).locArgs?.[3] ?? 0)) {
    if (((s as any).format_balance_temp ?? 0)?.['base'] > 0  ||  ((s as any).format_balance_temp ?? 0)?.['overflow'] > 0) {
      (s as any).result = qspFunc(s, 'wrap', 'v_pos', ((s as any).result ?? 0));
    } else {
      if (((s as any).format_balance_temp ?? 0)?.['base'] < 0) {
        (s as any).result = qspFunc(s, 'wrap', 'v_neg', ((s as any).result ?? 0));
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFormatPriceString(s: GameState, scene: SceneBuilder): void {
  (s as any).delim = ((((s as any).cheatVars ?? 0)?.['money_format'] === 1) ? ('.') : (','));
  (s as any).result = '';
  ((s as any).shortgsVars = (s as any).shortgsVars ?? {})['num'] = String(((s as any).locArgs?.[1] ?? 0));
  ((s as any).shortgsVars = (s as any).shortgsVars ?? {})['len'] = (String(((s as any).shortgsVars ?? 0)?.['num']).length);
  // TODO-QSP: :format_price_string_loop
  if (((s as any).shortgsVars ?? 0)?.['len'] > 3) {
    (s as any).result = (String(((s as any).shortgsVars ?? 0)?.['num']).slice(((((s as any).shortgsVars ?? {})?.['len'] ?? 0)-2)-1)) + ((s as any).delim ?? 0) + ((s as any).result ?? 0);
    ((s as any).shortgsVars = (s as any).shortgsVars ?? {})['num'] = (String(((s as any).shortgsVars ?? 0)?.['num']).slice((1)-1, ((1)-1)+((((s as any).shortgsVars ?? {})?.['len'] ?? 0)-3)));
    ((s as any).shortgsVars = (s as any).shortgsVars ?? {})['len'] = ((s as any).shortgsVars['len'] ?? 0) - (3);
    // TODO-QSP: jump 'format_price_string_loop'
  } else {
    if (((s as any).shortgsVars ?? 0)?.['num'] === '-') {
      (s as any).result = (((s as any).shortgsVars ?? {})?.['num'] ?? 0) + ((s as any).result ?? 0);
    } else {
      (s as any).result = (((s as any).shortgsVars ?? {})?.['num'] ?? 0) + ((s as any).delim ?? 0) + ((s as any).result ?? 0);
    }
  }
  (s as any).result = (String(((s as any).result ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).result ?? 0)).length)-1)));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterApplyModifiers(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'price') {
    (s as any).result = qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'], ((s as any).locArgs?.[1] ?? 0), ((s as any).cfg_vars ?? 0)?.['neg_mult']);
  } else {
    (s as any).result = qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cfg_vars ?? 0)?.['pos_mult_opt'], ((s as any).locArgs?.[1] ?? 0), ((s as any).cfg_vars ?? 0)?.['pos_mult']);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveModifiers(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'price') {
    ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['fwd'] = qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'], 100, ((s as any).cfg_vars ?? 0)?.['neg_mult']);
  } else {
    ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['fwd'] = qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).cfg_vars ?? 0)?.['pos_mult_opt'], 100, ((s as any).cfg_vars ?? 0)?.['pos_mult']);
  }
  if (((s as any).temp_moneyVars ?? 0)?.['fwd'] !== 0) {
    (s as any).result = (((s as any).locArgs?.[1] ?? 0) * 100) / (((s as any).temp_moneyVars ?? {})?.['fwd'] ?? 0);
  } else {
    (s as any).result = ((s as any).locArgs?.[1] ?? 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPaymentMethod(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'pay') {
    if (((s as any).cfg_vars ?? 0)?.['pay_opt'] === 0) {
      if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).locArgs?.[1] ?? 0), 'cash') === 1) {
        // TODO-QSP: gs 'money', '_cash_payment', ARGS[1], 'pay'
      } else {
        if (((s as any).cfg_vars ?? 0)?.['pay_opt_backup'] === 0) {
          if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).locArgs?.[1] ?? 0), 'bank') === 1) {
            // TODO-QSP: gs 'money', '_bank_payment', ARGS[1], 'pay'
          } else {
            // TODO-QSP: gs 'money', '_hybrid_payment', ARGS[1]
          }
        } else {
          if (((s as any).cfg_vars ?? 0)?.['pay_opt_backup'] === 1) {
            // TODO-QSP: gs 'money', '_hybrid_payment', ARGS[1]
          } else {
            // TODO-QSP: gs 'money', '_choose_payment_method', ARGS[1], 'pay'
          }
        }
      }
    } else {
      if (((s as any).cfg_vars ?? 0)?.['pay_opt'] === 1) {
        if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).locArgs?.[1] ?? 0), 'bank') === 1) {
          // TODO-QSP: gs 'money', '_bank_payment', ARGS[1], 'pay'
        } else {
          if (((s as any).cfg_vars ?? 0)?.['pay_opt_backup'] === 0) {
            if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).locArgs?.[1] ?? 0), 'cash') === 1) {
              // TODO-QSP: gs 'money', '_cash_payment', ARGS[1], 'pay'
            } else {
              // TODO-QSP: gs 'money', '_hybrid_payment', ARGS[1]
            }
          } else {
            if (((s as any).cfg_vars ?? 0)?.['pay_opt_backup'] === 1) {
              // TODO-QSP: gs 'money', '_hybrid_payment', ARGS[1]
            } else {
              // TODO-QSP: gs 'money', '_choose_payment_method', ARGS[1], 'pay'
            }
          }
        }
      } else {
        // TODO-QSP: gs 'money', '_choose_payment_method', ARGS[1], 'pay'
      }
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'earn') {
      if (((s as any).cfg_vars ?? 0)?.['income_opt'] === 0) {
        // TODO-QSP: gs 'money', '_cash_payment', ARGS[1], 'earn'
      } else {
        if (((s as any).cfg_vars ?? 0)?.['income_opt'] === 1) {
          if (((s as any).bankAccount ?? 0) === 1) {
            // TODO-QSP: gs 'money', '_bank_payment', ARGS[1], 'earn'
          } else {
            // TODO-QSP: gs 'money', '_cash_payment', ARGS[1], 'earn'
          }
        } else {
          // TODO-QSP: gs 'money', '_choose_payment_method', ARGS[1], 'earn'
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCashPayment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'pay') {
    (s as any).money = ((s as any).money ?? 0) - (((s as any).locArgs?.[1] ?? 0));
  } else {
    (s as any).money = ((s as any).money ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBankPayment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'pay') {
    (s as any).karta = ((s as any).karta ?? 0) - (((s as any).locArgs?.[1] ?? 0));
  } else {
    (s as any).karta = ((s as any).karta ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDeskPayment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).money ?? 0) >= ((s as any).locArgs?.[1] ?? 0)) {
    // TODO-QSP: gs 'money', '_cash_payment', ARGS[1], 'pay'
  } else {
    ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['cash_portion'] = ((s as any).money ?? 0);
    // TODO-QSP: gs 'money', '_cash_payment', temp_moneyVars['cash_portion'], 'pay'
    (s as any).stolmoney = ((s as any).stolmoney ?? 0) - (((s as any).locArgs?.[1] ?? 0) - (((s as any).temp_moneyVars ?? {})?.['cash_portion'] ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHybridPayment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).money ?? 0) >= ((s as any).locArgs?.[1] ?? 0)) {
    (s as any).money = ((s as any).money ?? 0) - (((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).cfg_vars ?? 0)?.['allow_overdraft'] === 1  &&  ((s as any).money ?? 0) + ((s as any).karta ?? 0) >= ((s as any).locArgs?.[1] ?? 0)) {
      (s as any).karta = ((s as any).karta ?? 0) - (((s as any).locArgs?.[1] ?? 0) - ((s as any).money ?? 0));
      (s as any).money = 0;
    } else {
      if (((s as any).cfg_vars ?? 0)?.['allow_overdraft'] === 0  &&  ((s as any).money ?? 0) + Math.max(((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0), 0) >= ((s as any).locArgs?.[1] ?? 0)) {
        (s as any).karta = ((s as any).karta ?? 0) - (((s as any).locArgs?.[1] ?? 0) - ((s as any).money ?? 0));
        (s as any).money = 0;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChoosePaymentMethod(s: GameState, scene: SceneBuilder): void {
  ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['input_msg'] = 'How would you like to ' + ((((s as any).locArgs?.[2] ?? 0) === 'pay') ? ('pay') : ('get paid')) + '?<br>';
  if (((s as any).locArgs?.[2] ?? 0) === 'pay') {
    if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).locArgs?.[1] ?? 0), 'cash') === 1) {
      ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['cash'] = 1;
      ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['input_msg'] = ((s as any).cpm_temp_moneyVars['input_msg'] ?? 0) + ('Cash [Enter \'1\', Default]<br>');
    } else {
      if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).locArgs?.[1] ?? 0) - ((s as any).money ?? 0), 'bank') === 1) {
        ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['both'] = 1;
        ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['input_msg'] = ((s as any).cpm_temp_moneyVars['input_msg'] ?? 0) + ('Hybrid Payment [Enter \'3\']<br>');
      }
    }
    if (qspFunc(s, 'money', '_can_afford_inner', ((s as any).locArgs?.[1] ?? 0), 'bank') === 1) {
      ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['bank'] = 1;
      ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['input_msg'] = ((s as any).cpm_temp_moneyVars['input_msg'] ?? 0) + ('Bank [Enter \'2\']<br>');
    }
    if (((s as any).cpm_temp_moneyVars ?? 0)?.['cash'] !== 1  &&  ((s as any).cpm_temp_moneyVars ?? 0)?.['bank'] !== 1  &&  ((s as any).cpm_temp_moneyVars ?? 0)?.['both'] !== 1) {
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'earn') {
      ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['cash'] = 1;
      ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['input_msg'] = ((s as any).cpm_temp_moneyVars['input_msg'] ?? 0) + ('Cash [Enter \'1\', Default]<br>');
      if (((s as any).bankAccount ?? 0) === 1) {
        ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['bank'] = 1;
        ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['input_msg'] = ((s as any).cpm_temp_moneyVars['input_msg'] ?? 0) + ('Bank [Enter \'2\']<br>');
      }
    }
  }
  ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['input_result'] = 0;
  if (((s as any).cpm_temp_moneyVars ?? 0)?.['input_result'] !== ''  &&  !isNaN(((s as any).cpm_temp_moneyVars ?? 0)?.['input_result']) && ((s as any).cpm_temp_moneyVars ?? 0)?.['input_result'] !== '') {
    ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['choice'] = parseFloat(((s as any).cpm_temp_moneyVars ?? 0)?.['input_result']);
  }
  if (((s as any).cpm_temp_moneyVars ?? 0)?.['choice'] < 1  ||  ((s as any).cpm_temp_moneyVars ?? 0)?.['choice'] >= 4) {
    if (((s as any).cpm_temp_moneyVars ?? 0)?.['cash'] === 1  ||  ((s as any).locArgs?.[2] ?? 0) === 'earn') {
      ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['choice'] = 1;
    } else {
      if (((s as any).cpm_temp_moneyVars ?? 0)?.['bank'] === 1) {
        ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['choice'] = 2;
      } else {
        if (((s as any).cpm_temp_moneyVars ?? 0)?.['both'] === 1) {
          ((s as any).cpm_temp_moneyVars = (s as any).cpm_temp_moneyVars ?? {})['choice'] = 3;
        }
      }
    }
  }
  if (((s as any).cpm_temp_moneyVars ?? 0)?.['choice'] === 1) {
    // TODO-QSP: gs 'money', '_cash_payment', ARGS[1], $ARGS[2]
  } else {
    if (((s as any).cpm_temp_moneyVars ?? 0)?.['choice'] === 2) {
      // TODO-QSP: gs 'money', '_bank_payment', ARGS[1], $ARGS[2]
    } else {
      if (((s as any).cpm_temp_moneyVars ?? 0)?.['choice'] === 3) {
        // TODO-QSP: gs 'money', '_hybrid_payment', ARGS[1]
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDebtAdd(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['amount'] = qspFunc(s, 'money', 'price', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: dynamic "<<$ARGS[1]>> += <<temp_moneyVars['amount']>>"
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDebtPay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic "temp_moneyVars['debt'] = <<$ARGS[1]>>"
  if (((s as any).temp_moneyVars ?? 0)?.['debt'] <= 0) {
    (s as any).result = 0;
    return;
  }
  if (((s as any).locArgs?.[2] ?? 0) > 0) {
    ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['target'] = Math.min(((s as any).locArgs?.[2] ?? 0), ((s as any).temp_moneyVars ?? 0)?.['debt']);
  } else {
    ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['target'] = ((s as any).temp_moneyVars ?? 0)?.['debt'];
  }
  ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['paid'] = 0;
  if (((s as any).locArgs?.[3] ?? 0) === 'none') {
    // TODO-QSP: dynamic "<<$ARGS[1]>> -= <<temp_moneyVars['target']>>"
    (s as any).result = ((s as any).temp_moneyVars ?? 0)?.['target'];
    return;
  }
  if (((s as any).money ?? 0) > 0) {
    ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['from_cash'] = Math.min(((s as any).money ?? 0), ((s as any).temp_moneyVars ?? 0)?.['target']);
    (s as any).money = ((s as any).money ?? 0) - (((s as any).temp_moneyVars ?? 0)?.['from_cash']);
    ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['paid'] = ((s as any).temp_moneyVars['paid'] ?? 0) + (((s as any).temp_moneyVars ?? 0)?.['from_cash']);
    ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['target'] = ((s as any).temp_moneyVars['target'] ?? 0) - (((s as any).temp_moneyVars ?? 0)?.['from_cash']);
  }
  if (((s as any).temp_moneyVars ?? 0)?.['target'] > 0  &&  (((s as any).locArgs?.[3] ?? 0) === 'desk'  ||  ((s as any).locArgs?.[3] ?? 0) === 'all')) {
    if (((s as any).stolmoney ?? 0) > 0) {
      ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['from_desk'] = Math.min(((s as any).stolmoney ?? 0), ((s as any).temp_moneyVars ?? 0)?.['target']);
      (s as any).stolmoney = ((s as any).stolmoney ?? 0) - (((s as any).temp_moneyVars ?? 0)?.['from_desk']);
      ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['paid'] = ((s as any).temp_moneyVars['paid'] ?? 0) + (((s as any).temp_moneyVars ?? 0)?.['from_desk']);
      ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['target'] = ((s as any).temp_moneyVars['target'] ?? 0) - (((s as any).temp_moneyVars ?? 0)?.['from_desk']);
    }
  }
  if (((s as any).temp_moneyVars ?? 0)?.['target'] > 0  &&  (((s as any).locArgs?.[3] ?? 0) === 'all'  ||  ((s as any).locArgs?.[3] ?? 0) === '')) {
    if ((((s as any).karta ?? 0) > 0  &&  (((s as any).cfg_vars ?? 0)?.['allow_overdraft'] === 1)  ||  Math.max(((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0), 0) >= ((s as any).temp_moneyVars ?? 0)?.['target'])) {
      ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['from_bank'] = Math.min(((s as any).karta ?? 0), ((s as any).temp_moneyVars ?? 0)?.['target']);
      (s as any).karta = ((s as any).karta ?? 0) - (((s as any).temp_moneyVars ?? 0)?.['from_bank']);
      ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['paid'] = ((s as any).temp_moneyVars['paid'] ?? 0) + (((s as any).temp_moneyVars ?? 0)?.['from_bank']);
      ((s as any).temp_moneyVars = (s as any).temp_moneyVars ?? {})['target'] = ((s as any).temp_moneyVars['target'] ?? 0) - (((s as any).temp_moneyVars ?? 0)?.['from_bank']);
    }
  }
  // TODO-QSP: dynamic "<<$ARGS[1]>> -= <<temp_moneyVars['paid']>>"
  (s as any).result = ((s as any).temp_moneyVars ?? 0)?.['paid'];
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStringDebt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    (s as any).result = '';
    return;
  }
  if ((!((s as any).locArgs?.[3] ?? 0))) {
    (s as any).result = qspFunc(s, 'money', 'format', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[2] ?? 0));
  } else {
    (s as any).result = qspFunc(s, 'wrap', 'v_neg', qspFunc(s, 'money', 'format', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[2] ?? 0)));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStringDebtReduction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    (s as any).result = '';
  } else {
    (s as any).result = qspFunc(s, 'money', 'format', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[2] ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStringDebtAddition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    (s as any).result = '';
  } else {
    (s as any).result = qspFunc(s, 'money', 'string_price', ((s as any).locArgs?.[1] ?? 0), 0, ((s as any).locArgs?.[2] ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCanAffordDebt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'cash') {
    (s as any).result = ((s as any).money ?? 0) >= ((s as any).locArgs?.[1] ?? 0);
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'bank') {
      if (((s as any).cfg_vars ?? 0)?.['allow_overdraft'] === 1) {
        (s as any).result = ((s as any).karta ?? 0) >= ((s as any).locArgs?.[1] ?? 0);
      } else {
        (s as any).result = Math.max(((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0), 0) >= ((s as any).locArgs?.[1] ?? 0);
      }
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'desk') {
        (s as any).result = (((s as any).money ?? 0) + ((s as any).stolmoney ?? 0)) >= ((s as any).locArgs?.[1] ?? 0);
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'all') {
          if (((s as any).cfg_vars ?? 0)?.['allow_overdraft'] === 1) {
            (s as any).result = (((s as any).money ?? 0) + ((s as any).stolmoney ?? 0) + ((s as any).karta ?? 0)) >= ((s as any).locArgs?.[1] ?? 0);
          } else {
            (s as any).result = (((s as any).money ?? 0) + ((s as any).stolmoney ?? 0) + Math.max(((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0), 0)) >= ((s as any).locArgs?.[1] ?? 0);
          }
        } else {
          if (((s as any).cfg_vars ?? 0)?.['allow_overdraft'] === 1) {
            (s as any).result = (((s as any).money ?? 0) + ((s as any).karta ?? 0)) >= ((s as any).locArgs?.[1] ?? 0);
          } else {
            (s as any).result = (((s as any).money ?? 0) + Math.max(((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0), 0)) >= ((s as any).locArgs?.[1] ?? 0);
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetDebtCostString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'cash') {
    (s as any).temp_method = ' - Cash only';
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'bank') {
      (s as any).temp_method = ' - Bank only';
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'desk') {
        (s as any).temp_method = ' - Cash and desk only';
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'all') {
          (s as any).temp_method = ' - Cash, bank, or desk';
        } else {
          (s as any).temp_method = '';
        }
      }
    }
  }
  (s as any).result = ' (' + qspFunc(s, 'money', 'string_debt', ((s as any).locArgs?.[1] ?? 0)) + ((s as any).temp_method ?? 0) + ')';
  if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    // TODO-QSP: $result += ' ' + $func('wrap', 'v_neg', '(You can''t afford this)')
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bank_transfer':
      enterBankTransfer(s, scene);
      break;
    case 'desk_transfer':
      enterDeskTransfer(s, scene);
      break;
    case 'pay':
      enterPay(s, scene);
      break;
    case 'earn':
      enterEarn(s, scene);
      break;
    case 'set':
      enterSet(s, scene);
      break;
    case 'price':
      enterPrice(s, scene);
      break;
    case 'profit':
      enterProfit(s, scene);
      break;
    case 'base_price':
      enterBasePrice(s, scene);
      break;
    case 'base_profit':
      enterBaseProfit(s, scene);
      break;
    case 'can_afford':
      enterCanAfford(s, scene);
      break;
    case 'get_cost_string':
      enterGetCostString(s, scene);
      break;
    case '_can_afford_inner':
      enterCanAffordInner(s, scene);
      break;
    case 'string_price':
      enterStringPrice(s, scene);
      break;
    case 'string_profit':
      enterStringProfit(s, scene);
      break;
    case 'format':
      enterFormat(s, scene);
      break;
    case 'format_balance':
      enterFormatBalance(s, scene);
      break;
    case '_format_price_string':
      enterFormatPriceString(s, scene);
      break;
    case '_apply_modifiers':
      enterApplyModifiers(s, scene);
      break;
    case '_remove_modifiers':
      enterRemoveModifiers(s, scene);
      break;
    case '_payment_method':
      enterPaymentMethod(s, scene);
      break;
    case '_cash_payment':
      enterCashPayment(s, scene);
      break;
    case '_bank_payment':
      enterBankPayment(s, scene);
      break;
    case '_desk_payment':
      enterDeskPayment(s, scene);
      break;
    case '_hybrid_payment':
      enterHybridPayment(s, scene);
      break;
    case '_choose_payment_method':
      enterChoosePaymentMethod(s, scene);
      break;
    case 'debt_add':
      enterDebtAdd(s, scene);
      break;
    case 'debt_pay':
      enterDebtPay(s, scene);
      break;
    case 'string_debt':
      enterStringDebt(s, scene);
      break;
    case 'string_debt_reduction':
      enterStringDebtReduction(s, scene);
      break;
    case 'string_debt_addition':
      enterStringDebtAddition(s, scene);
      break;
    case 'can_afford_debt':
      enterCanAffordDebt(s, scene);
      break;
    case 'get_debt_cost_string':
      enterGetDebtCostString(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const money: LocationDef = {
  name: 'money',
  title: '(You can\'t afford this)',
  region: 'other',
  enter: enter,
};
