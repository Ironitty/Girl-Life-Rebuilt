import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: subscription[<plan name>]    The subscription itself that will be checked to see if Sveta can access...
  // TODO-QSP: Possible values:
  // TODO-QSP: Monthly subscriptions:
  // TODO-QSP: 0: subscription is inactive, either never bought or expired.
  // TODO-QSP: 1: subscription is active
  // TODO-QSP: Metered plans:
  // TODO-QSP: Any integer number, which means the available minutes left within the plan.
  // TODO-QSP: This is how the old mobile minutes and internet time worked, but tracked in minutes,
  // TODO-QSP: not hours for the internet.
  // TODO-QSP: subscription[<plan name>-date]  The day the subscription was bought for the home (or mobile), this w...
  // TODO-QSP: automatically set to `day`.
  // TODO-QSP: Possible values 0-31, 1-31 are renewal days, 0 means the plan never expires.
  // TODO-QSP: subscription[<plan name>-price]  The monthly fee of the subscription.
  // TODO-QSP: subscription[<plan name>-discount]  The discount on the plan - relevant if the original discount was...
  // TODO-QSP: fee. If the value is higher than 0, payments come from this first until the value gets to
  // TODO-QSP: 0.
  // TODO-QSP: subscription[<plan nam>-type]    The type of the subscription.
  // TODO-QSP: Possible values:
  // TODO-QSP: 1: Monthly subscription
  // TODO-QSP: 2: Metered plan
  // TODO-QSP: Plan Names
  // TODO-QSP: free:    A subscription that is freely available, libraries, friends and lovers apartment, etc. that...
  // TODO-QSP: The value of this plan is always 1 and the subscription date is 0.
  // TODO-QSP: mobile:    Mobile telephone (only internet or calls too?) and laptop if taken somewhere else.
  // TODO-QSP: If at a location where subscription['free'] is used, she has to ask first to be able to use her own ...
  // TODO-QSP: with the local internet, otherwise it will still use the mobile subscription - if there is none, it ...
  // TODO-QSP: metered_mobile  Cheaper option for broke Svetas. When subscription['mobile'] = 0 check for this and ...
  // TODO-QSP: `subscription['metered_mobile'] > 0` then use it.
  // TODO-QSP: <property code>  This is a monthly subscription that can be used in a specific home owned/rented by ...
  // TODO-QSP: This is tracking the internet subscription per home. So if Sveta owns several places, she has a sepa...
  // TODO-QSP: subscription for each of them.
  // TODO-QSP: For allowed values see `homes_properties`.
  // TODO-QSP: monthly_calls  A monthly mobile subscription giving unlimited call minutes and text message
  // TODO-QSP: metered_calls  A mobile plan that gives a set amount of minutes that can be used.
  if (((s as any).subscription ?? 0)?.['free'] === 0) {
    ((s as any).subscription = (s as any).subscription ?? {})['free'] = 1;
  }
  scene.build();
}

function enterTopUpMetered(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: subscription[$ARGS[1]] += ARGS[2]
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-date'] = ((((s as any).day ?? 0) <= 28) ? (((s as any).day ?? 0)) : (1));
  if (((s as any).locArgs?.[1] ?? 0) === 'metered_calls') {
    ((s as any).subscription = (s as any).subscription ?? {})['metered_calls-sms_limit'] = ((s as any).subscription['metered_calls-sms_limit'] ?? 0) + (((s as any).locArgs?.[3] ?? 0));
  }
  if (((s as any).subscription ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-type'] === 0) {
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-type'] = 2;
  }
  // TODO-QSP: end
  scene.build();
}

function enterBuySubscription(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: subscription[$ARGS[1]] = 1
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-date'] = ((((s as any).day ?? 0) <= 28) ? (((s as any).day ?? 0)) : (1));
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-price'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-discount'] = ((s as any).locArgs?.[3] ?? 0);
  if (((s as any).subscription ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-type'] === 0) {
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-type'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckSubscriptionActions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'get_accessible_properties', 'home');
  (s as any).im_max_i = 0;
  if (((s as any).im_max_i ?? 0) > 0) {
    (s as any).im_i = 0;
    // TODO-QSP: :home_internet_subscription_loop
    if ((((s as any).property_status ?? 0)?.[String((s as any).im_i ?? 0)] === 1  ||  ((s as any).property_status ?? 0)?.[String((s as any).im_i ?? 0)] === 2)  &&  ((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)]] === 1) {
      if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)] + '-date'] === ((s as any).day ?? 0)) {
        // TODO-QSP: gs 'internet_mobile', 'renew_subscription', $property_code[im_i]
      } else {
        if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)] + '-suspension_day'] > 0) {
          if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)] + '-suspension_day'] >= ((s as any).daystart ?? 0)) {
            // TODO-QSP: gs 'internet_mobile', 'renew_subscription', $property_code[im_i]
          } else {
            // TODO-QSP: gs 'internet_mobile', 'suspend_subscription', $property_code[im_i]
          }
        }
      }
      if (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)] + '-contract_message'] !== ''  &&  (((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)] + '-date'] === ((s as any).day ?? 0)  ||  ((s as any).subscription ?? 0)[((s as any).property_code ?? 0)?.[String((s as any).im_i ?? 0)] + '-suspension_day'] > 0)) {
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mobile']; enterRenewSubscription(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).subscription ?? 0)?.['mobile-suspension_day'] > 0) {
        if (((s as any).subscription ?? 0)?.['mobile-suspension_day'] >= ((s as any).daystart ?? 0)) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mobile']; enterRenewSubscription(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mobile']; enterSuspendSubscription(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
    if (((s as any).subscription ?? 0)?.['mobile-contract_message'] !== ''  &&  (((s as any).subscription ?? 0)?.['mobile-date'] === ((s as any).day ?? 0)  ||  ((s as any).subscription ?? 0)?.['mobile-suspension_day'] > 0)) {
      // TODO-QSP: $internet_action_messages[] = 'Your Mobile Internet Subscription: <<$subscription[''mobile-contract_...
    }
  }
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 1) {
    if (((s as any).subscription ?? 0)?.['monthly_calls-date'] === ((s as any).day ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'monthly_calls']; enterRenewSubscription(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).subscription ?? 0)?.['monthly_calls-suspension_day'] > 0) {
        if (((s as any).subscription ?? 0)?.['monthly_calls-suspension_day'] >= ((s as any).daystart ?? 0)) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'monthly_calls']; enterRenewSubscription(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'monthly_calls']; enterSuspendSubscription(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
    if (((s as any).subscription ?? 0)?.['monthly_calls-contract_message'] !== ''  &&  (((s as any).subscription ?? 0)?.['monthly_calls-date'] === ((s as any).day ?? 0)  ||  ((s as any).subscription ?? 0)?.['monthly_calls-suspension_day'] > 0)) {
      // TODO-QSP: $internet_action_messages[] = 'Your mobile contract: <<$subscription[''monthly_calls-contract_messag...
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCancelSubscription(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: subscription[$ARGS[1]] = 0
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-date'] = 0;
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-sms_limit'] = 0;
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-type'] = 0;
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-price'] = 0;
  ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-discount'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterSuspendSubscription(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCancelSubscription(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: $subscription[$ARGS[1] + '-contract_message'] = 'Your monthly fee was declined again and services ha...
  // TODO-QSP: end
  scene.build();
}

function enterRenewSubscription(s: GameState, scene: SceneBuilder): void {
  (s as any).renewfee = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-price'];
  (s as any).acc_discount = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-discount'];
  (s as any).app_discount = Math.min(((s as any).renewfee ?? 0), ((s as any).acc_discount ?? 0));
  (s as any).finalfee = Math.max(0, Math.min(((s as any).renewfee ?? 0) - ((s as any).app_discount ?? 0), ((s as any).renewfee ?? 0)));
  (s as any).rem_discount = Math.max(0, ((s as any).acc_discount ?? 0) - ((s as any).app_discount ?? 0));
  if (qspFunc(s, 'money', 'can_afford', ((s as any).finalfee ?? 0), 'bank')) {
    qspCall(s, 'money', 'pay', ((s as any).finalfee ?? 0), 'bank');
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-discount'] = ((s as any).rem_discount ?? 0);
    if (((s as any).app_discount ?? 0) > 0) {
      (s as any).discounttext = qspFunc(s, 'money', 'string_price', ((s as any).renewfee ?? 0)) + ' and you had ' + qspFunc(s, 'money', 'string_price', ((s as any).acc_discount ?? 0)) + ' left on your account. After applying ' + qspFunc(s, 'money', 'string_price', ((s as any).app_discount ?? 0)) + ' to your monthly fee, your final payable was ' + qspFunc(s, 'wrap', 'v_pos b', qspFunc(s, 'money', 'string_price', ((s as any).finalfee ?? 0))) + ' and you were left with ' + qspFunc(s, 'money', 'string_price', ((s as any).rem_discount ?? 0)) + ' on your account.';
    }
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-contract_message'] = 'Your monthly fee was ' + ((((s as any).app_discount ?? 0) > 0) ? (((s as any).discounttext ?? 0)) : (qspFunc(s, 'wrap', 'v_pos b', qspFunc(s, 'money', 'string_price', ((s as any).renewfee ?? 0))) + ' which was taken from your bank account.'));
    if (((s as any).subscription ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-suspension_day'] > 0) {
      ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-suspension_day'] = 0;
    }
  } else {
    if (((s as any).subscription ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-suspension_day'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 5]; enterSetSuspensionDate(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    (s as any).remainingday = ((s as any).subscription ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '-suspension_day'] - ((s as any).daystart ?? 0);
    if (((s as any).app_discount ?? 0) > 0) {
      (s as any).discounttext = ' and you had ' + qspFunc(s, 'money', 'string_price', ((s as any).acc_discount ?? 0)) + ' left on your account. After applying ' + qspFunc(s, 'money', 'string_price', ((s as any).app_discount ?? 0)) + ' to your monthly fee, your final payable was ' + qspFunc(s, 'money', 'string_price', ((s as any).finalfee ?? 0)) + ' and you were left with ' + qspFunc(s, 'money', 'string_price', ((s as any).rem_discount ?? 0)) + ' on your account.';
    }
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).$ARGS[1] || '') + '-contract_message'] = 'Your monthly fee was ' + qspFunc(s, 'money', 'string_price', ((s as any).renewfee ?? 0)) + ((((s as any).app_discount ?? 0) > 0) ? (((s as any).discounttext ?? 0)) : (', unfortunately your payment was declined. We will try to take the payment over the next \' + $func(\'wrap\', \'neg b\', \'' + ((s as any).remainingday ?? 0) + ' days\') + \' before suspending services.'));
  }
  // TODO-QSP: end
  scene.build();
}

function enterTransferSubscription(s: GameState, scene: SceneBuilder): void {
  ((s as any).allowed = (s as any).allowed ?? {})[1] = qspFunc(s, 'internet_mobile', 'check_allowed_location', ((s as any).locArgs?.[1] ?? 0));
  ((s as any).allowed = (s as any).allowed ?? {})[2] = qspFunc(s, 'internet_mobile', 'check_allowed_location', ((s as any).locArgs?.[2] ?? 0));
  if (((s as any).allowed ?? 0)[1]  &&  ((s as any).allowed ?? 0)[2]) {
    // TODO-QSP: subscription[$ARGS[2]] = subscription[$ARGS[1]]
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).ARGS[2] || '') + '-date'] = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-date'];
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).ARGS[2] || '') + '-price'] = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-price'];
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).ARGS[2] || '') + '-discount'] = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-discount'];
    ((s as any).subscription = (s as any).subscription ?? {})['' + String((s as any).ARGS[2] || '') + '-type'] = ((s as any).subscription ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '-type'];
    // TODO-QSP: subscription[$ARGS[0]] = 0
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckAllowedLocation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).locArgs?.[1] ?? 0));
  (s as any).result = qspUntranslated(s, "property['internet_enabled'] = 1", { location: "internet_mobile" });
  // TODO-QSP: end
  scene.build();
}

function enterGetAccess(s: GameState, scene: SceneBuilder): void {
  (s as any).subsname = ((((s as any).locArgs?.[1] ?? 0) === '') ? (qspFunc(s, 'homes_properties', 'get_property_code')) : (qspFunc(s, 'homes_properties', 'get_property_code', ((s as any).locArgs?.[1] ?? 0))));
  if (qspFunc(s, 'homes_properties', 'free_internet_available', ((s as any).subsname ?? 0)) !== 0) {
    ((s as any).access = (s as any).access ?? {})['subscription'] = 'free';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'free') {
      ((s as any).access = (s as any).access ?? {})['subscription'] = 'free';
    } else {
      if (((s as any).subscription ?? 0)?.[String((s as any).subsname ?? 0)] === 1) {
        ((s as any).access = (s as any).access ?? {})['subscription'] = ((s as any).subsname ?? 0);
      } else {
        if (((s as any).subscription ?? 0)?.['mobile'] === 1) {
          ((s as any).access = (s as any).access ?? {})['subscription'] = 'mobile';
        } else {
          if (((s as any).subscription ?? 0)?.['metered_mobile'] > 0) {
            ((s as any).access = (s as any).access ?? {})['subscription'] = 'metered_mobile';
          } else {
            (s as any).access = 'denied';
          }
        }
      }
    }
  }
  if (((s as any).access ?? 0) !== 'denied') {
    if (((s as any).subscription ?? 0)[((s as any).access ?? 0)?.['subscription'] + '-type'] === 2) {
      ((s as any).access = (s as any).access ?? {})['metered'] = 1;
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('noporn') : -1) > 1) {
      ((s as any).access = (s as any).access ?? {})['noporn'] = 'You can\'t search for porn on this computer';
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('nocamshow') : -1) > 1) {
      ((s as any).access = (s as any).access ?? {})['nocamshow'] = 'You can\'t do a cam show in this place';
    }
    // TODO-QSP: ! if arrpos('$ARGS', 'general') > 1: $access['general'] = 'Naughty sites are forbidden'
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddLimitation(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $access[$ARGS[1]] = $ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterRemoveLimitation(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $access[$ARGS[1]] = ''
  // TODO-QSP: end
  scene.build();
}

function enterSetLimitationMessage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).access ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
    // TODO-QSP: $access[$ARGS[1]] = $ARGS[2]
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetSuspensionDate(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = 5;
  }
  // TODO-QSP: subscription[$ARGS[1] + '-suspension_day'] = daystart + ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterSendSms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).subscription ?? 0)?.['metered_calls-sms_limit'] > 0) {
    ((s as any).subscription = (s as any).subscription ?? {})['metered_calls-sms_limit'] = ((s as any).subscription['metered_calls-sms_limit'] ?? 0) - (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterUseInternet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).subscription ?? 0)[((s as any).locArgs?.[1] ?? 0) + '-type'] === 2) {
    // TODO-QSP: subscription[$ARGS[1]] -= ARGS[2]
    if (((s as any).subscription ?? 0)[((s as any).locArgs?.[1] ?? 0)] < 0) {
      // TODO-QSP: subscription[$ARGS[1]] = 0
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckInternetAccess(s: GameState, scene: SceneBuilder): void {
  if (((s as any).subscription ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    (s as any).result = 1;
  }
  // TODO-QSP: end
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
    case 'add_limitation':
      enterAddLimitation(s, scene);
      break;
    case 'remove_limitation':
      enterRemoveLimitation(s, scene);
      break;
    case 'set_limitation_message':
      enterSetLimitationMessage(s, scene);
      break;
    case 'set_suspension_date':
      enterSetSuspensionDate(s, scene);
      break;
    case 'send_sms':
      enterSendSms(s, scene);
      break;
    case 'use_internet':
      enterUseInternet(s, scene);
      break;
    case 'check_internet_access':
      enterCheckInternetAccess(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const internet_mobile: LocationDef = {
  name: 'internet_mobile',
  title: 'days',
  region: 'other',
  enter: enter,
};
