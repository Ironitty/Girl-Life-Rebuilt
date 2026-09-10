import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterTopUpMetered(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: subscription[$ARGS[1]] += ARGS[2]
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-date'] = ((((s as any).day ?? 0) <= 28) ? (((s as any).day ?? 0)) : (1));
  if (((s as any).locArgs?.[1] ?? 0) === 'metered_calls') {
    (s as any).subscription['metered_calls-sms_limit'] = ((s as any).subscription['metered_calls-sms_limit'] ?? 0) + (qspUntranslated(s, "ARGS[3]", { location: "internet_mobile" }));
  }
  if (((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-type'] === 0) {
    (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-type'] = 2;
  }
  scene.build();
}

function enterBuySubscription(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: subscription[$ARGS[1]] = 1
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-date'] = ((((s as any).day ?? 0) <= 28) ? (((s as any).day ?? 0)) : (1));
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-price'] = qspUntranslated(s, "ARGS[2]", { location: "internet_mobile" });
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-discount'] = qspUntranslated(s, "ARGS[3]", { location: "internet_mobile" });
  if (((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-type'] === 0) {
    (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-type'] = 1;
  }
  scene.build();
}

function enterCheckSubscriptionActions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'get_accessible_properties', 'home');
  (s as any).im_max_i = 0;
  if (((s as any).im_max_i ?? 0) > 0) {
    (s as any).im_i = 0;
    // TODO-QSP: :home_internet_subscription_loop
    if ((((s as any).property_status ?? 0)?.[String((s as any).im_i ?? 0)] === 1  ||  ((s as any).property_status ?? 0)?.[String((s as any).im_i ?? 0)] === 2)  &&  ((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)]] === 1) {
      if (((s as any).subscription ?? 0)?.[String(((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)]) + '-date'] === ((s as any).day ?? 0)) {
        // TODO-QSP: gs 'internet_mobile', 'renew_subscription', $property_code[im_i]
      } else {
        if (((s as any).subscription ?? 0)?.[String(((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)]) + '-suspension_day'] >= ((s as any).daystart ?? 0)) {
          // TODO-QSP: gs 'internet_mobile', 'renew_subscription', $property_code[im_i]
        } else {
          // TODO-QSP: gs 'internet_mobile', 'suspend_subscription', $property_code[im_i]
        }
      }
      if (((s as any).subscription ?? 0)?.[String(((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)]) + '-contract_message'] !== ''  &&  (((s as any).subscription ?? 0)?.[String(((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)]) + '-date'] === ((s as any).day ?? 0)  ||  ((s as any).subscription ?? 0)?.[String(((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)]) + '-suspension_day'] > 0)) {
        // TODO-QSP: $internet_action_messages[] = 'Internet Subscription for <<$property_display[im_i]>>: <<$subscriptio...
      }
    }
    (s as any).im_i = ((s as any).im_i ?? 0) + (1);
    if (((s as any).im_i ?? 0) < ((s as any).im_max_i ?? 0)) {
      // TODO-QSP: jump 'home_internet_subscription_loop'
    }
  }
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  if (((s as any).subscription ?? 0)?.['mobile'] === 1) {
    if (((s as any).subscription ?? 0)?.['mobile-date'] === ((s as any).day ?? 0)) {
      qspCall(s, 'internet_mobile', 'renew_subscription', 'mobile');
    } else {
      if (((s as any).subscription ?? 0)?.['mobile-suspension_day'] >= ((s as any).daystart ?? 0)) {
        qspCall(s, 'internet_mobile', 'renew_subscription', 'mobile');
      } else {
        qspCall(s, 'internet_mobile', 'suspend_subscription', 'mobile');
      }
    }
    if (((s as any).subscription ?? 0)?.['mobile-contract_message'] !== ''  &&  (((s as any).subscription ?? 0)?.['mobile-date'] === ((s as any).day ?? 0)  ||  ((s as any).subscription ?? 0)?.['mobile-suspension_day'] > 0)) {
      // TODO-QSP: $internet_action_messages[] = 'Your Mobile Internet Subscription: <<$subscription[''mobile-contract_...
    }
  }
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 1) {
    if (((s as any).subscription ?? 0)?.['monthly_calls-date'] === ((s as any).day ?? 0)) {
      qspCall(s, 'internet_mobile', 'renew_subscription', 'monthly_calls');
    } else {
      if (((s as any).subscription ?? 0)?.['monthly_calls-suspension_day'] >= ((s as any).daystart ?? 0)) {
        qspCall(s, 'internet_mobile', 'renew_subscription', 'monthly_calls');
      } else {
        qspCall(s, 'internet_mobile', 'suspend_subscription', 'monthly_calls');
      }
    }
    if (((s as any).subscription ?? 0)?.['monthly_calls-contract_message'] !== ''  &&  (((s as any).subscription ?? 0)?.['monthly_calls-date'] === ((s as any).day ?? 0)  ||  ((s as any).subscription ?? 0)?.['monthly_calls-suspension_day'] > 0)) {
      // TODO-QSP: $internet_action_messages[] = 'Your mobile contract: <<$subscription[''monthly_calls-contract_messag...
    }
  }
  scene.build();
}

function enterCancelSubscription(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: subscription[$ARGS[1]] = 0
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-date'] = 0;
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-sms_limit'] = 0;
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-type'] = 0;
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-price'] = 0;
  (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-discount'] = 0;
  scene.build();
}

function enterSuspendSubscription(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'internet_mobile', 'cancel_subscription', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: $subscription[$ARGS[1] + '-contract_message'] = 'Your monthly fee was declined again and services ha...
  scene.build();
}

function enterRenewSubscription(s: GameState, scene: SceneBuilder): void {
  (s as any).renewfee = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-price'];
  (s as any).acc_discount = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-discount'];
  (s as any).app_discount = 0;
  (s as any).finalfee = ((s as any).max ?? 0)(0, ((s as any).min ?? 0)(((s as any).renewfee ?? 0) - ((s as any).app_discount ?? 0), ((s as any).renewfee ?? 0)));
  (s as any).rem_discount = ((s as any).max ?? 0)(0, ((s as any).acc_discount ?? 0) - ((s as any).app_discount ?? 0));
  if (qspFunc(s, 'money', 'can_afford', ((s as any).finalfee ?? 0), 'bank')) {
    qspCall(s, 'money', 'pay', ((s as any).finalfee ?? 0), 'bank');
    (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-discount'] = ((s as any).rem_discount ?? 0);
    if (((s as any).app_discount ?? 0) > 0) {
    }
    (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-contract_message'] = '((s as any).Your ?? 0) ((s as any).monthly ?? 0) ((s as any).fee ?? 0) ((s as any).was ?? 0) ' + ((((s as any).app_discount ?? 0) > 0) ? (((s as any).discounttext ?? 0)) : (qspFunc(s, 'wrap', 'v_pos b', qspFunc(s, 'money', 'string_price', ((s as any).renewfee ?? 0))) + ' ((s as any).which ?? 0) ((s as any).was ?? 0) ((s as any).taken ?? 0) ((s as any).from ?? 0) ((s as any).your ?? 0) ((s as any).bank ?? 0) ((s as any).account ?? 0).'));
    if (((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-suspension_day'] > 0) {
      (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-suspension_day'] = 0;
    }
  } else {
    if (((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-suspension_day'] === 0) {
      qspCall(s, 'internet_mobile', 'set_suspension_date', ((s as any).locArgs?.[1] ?? 0), 5);
    }
    (s as any).remainingday = ((s as any).subscription ?? 0)?.[String(qspUntranslated(s, "\u00000\u0000", { location: "internet_mobile" })) + '-suspension_day'] - ((s as any).daystart ?? 0);
    if (((s as any).app_discount ?? 0) > 0) {
    }
    (s as any).subscription['' + String((s as any).$ARGS[1] || '') + '-contract_message'] = '((s as any).Your ?? 0) ((s as any).monthly ?? 0) ((s as any).fee ?? 0) ((s as any).was ?? 0) ' + qspFunc(s, 'money', 'string_price', ((s as any).renewfee ?? 0)) + ((((s as any).app_discount ?? 0) > 0) ? (((s as any).discounttext ?? 0)) : (', unfortunately your payment was declined. We will try to take the payment over the next \' + $func(\'wrap\', \'neg b\', \'<<remainingday>> days\') + \' before suspending services.'));
  }
  scene.build();
}

function enterTransferSubscription(s: GameState, scene: SceneBuilder): void {
  (s as any).allowed[1] = qspFunc(s, 'internet_mobile', 'check_allowed_location', ((s as any).locArgs?.[1] ?? 0));
  (s as any).allowed[2] = qspFunc(s, 'internet_mobile', 'check_allowed_location', ((s as any).locArgs?.[2] ?? 0));
  if (((s as any).allowed ?? 0)[1]  &&  ((s as any).allowed ?? 0)[2]) {
    // TODO-QSP: subscription[$ARGS[2]] = subscription[$ARGS[1]]
    (s as any).subscription['' + String((s as any).ARGS[2] || '') + '-date'] = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-date'];
    (s as any).subscription['' + String((s as any).ARGS[2] || '') + '-price'] = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-price'];
    (s as any).subscription['' + String((s as any).ARGS[2] || '') + '-discount'] = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-discount'];
    (s as any).subscription['' + String((s as any).ARGS[2] || '') + '-type'] = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-type'];
    // TODO-QSP: subscription[$ARGS[0]] = 0
  }
  scene.build();
}

function enterCheckAllowedLocation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = qspUntranslated(s, "property['internet_enabled'] = 1", { location: "internet_mobile" });
  scene.build();
}

function enterGetAccess(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'free_internet_available', ((s as any).subsname ?? 0)) !== 0) {
    (s as any).access['subscription'] = 'free';
  } else {
    (s as any).access['subscription'] = 'free';
    if (((s as any).subscription ?? 0)?.[String((s as any).subsname ?? 0)] === 1) {
      (s as any).access['subscription'] = ((s as any).subsname ?? 0);
    } else {
      (s as any).access['subscription'] = 'mobile';
      if (((s as any).subscription ?? 0)?.['metered_mobile'] > 0) {
        (s as any).access['subscription'] = 'metered_mobile';
      }
      if (((s as any).access ?? 0) !== 'denied') {
        if (((s as any).subscription ?? 0)['\'1\'-type'] === 2) {
          (s as any).access['metered'] = 1;
        }
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('noporn') : -1) > 1) {
          (s as any).access['noporn'] = 'You can\'t search for porn on this computer';
        }
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('nocamshow') : -1) > 1) {
          (s as any).access['nocamshow'] = 'You can\'t do a cam show in this place';
        }
        // TODO-QSP: ! if arrpos('$ARGS', 'general') > 1: $access['general'] = 'Naughty sites are forbidden'
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'top_up_metered':
      enterTopUpMetered(s, scene);
      break;
    case 'buy_subscription':
      enterBuySubscription(s, scene);
      break;
    case 'check_subscription_actions':
      enterCheckSubscriptionActions(s, scene);
      break;
    case 'cancel_subscription':
      enterCancelSubscription(s, scene);
      break;
    case 'suspend_subscription':
      enterSuspendSubscription(s, scene);
      break;
    case 'renew_subscription':
      enterRenewSubscription(s, scene);
      break;
    case 'transfer_subscription':
      enterTransferSubscription(s, scene);
      break;
    case 'check_allowed_location':
      enterCheckAllowedLocation(s, scene);
      break;
    case 'get_access':
      enterGetAccess(s, scene);
      break;
    default:
      enterTopUpMetered(s, scene);
      break;
  }
}

export const internet_mobile: LocationDef = {
  name: 'internet_mobile',
  title: '<<remainingday>> days',
  region: 'other',
  enter: enter,
};
