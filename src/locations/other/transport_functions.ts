import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBuyTrainPass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Buy a daily pass (1 day) [+$func(\'money\', \'get_cost_string\', 250)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 250);
      ((s as any).transportVars ?? {})['trainpass_day'] = ((s as any).daystart ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '<<$loc_arg>>'] },
      ]);
    }
  } },
      { label: 'Buy a weekly pass (7 days) [+$func(\'money\', \'get_cost_string\', 1250)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1250);
      ((s as any).transportVars ?? {})['trainpass_day'] = ((s as any).daystart ?? 0) + 7;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '<<$loc_arg>>'] },
      ]);
    }
  } },
      { label: 'Buy a monthly pass (30 days) [+$func(\'money\', \'get_cost_string\', 3750)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3750) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 3750);
      ((s as any).transportVars ?? {})['trainpass_day'] = ((s as any).daystart ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '<<$loc_arg>>'] },
      ]);
    }
  } },
      { label: 'Buy a yearly pass (365 days) [+$func(\'money\', \'get_cost_string\', 32500)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 32500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 32500);
      ((s as any).transportVars ?? {})['trainpass_day'] = ((s as any).daystart ?? 0) + 365;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '<<$loc_arg>>'] },
      ]);
    }
  } },
    ]);
  }
  return;
  scene.build();
}

function enterBuyTrainTicket(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'pc') {
    if (((s as any).locArgs?.[1] ?? 0) !== 'pavlovsk') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'pavlovsk', 'Pavlovsk');
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino');
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'communal') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'communal', 'the communal village');
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'industrial') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'industrial', 'St. Petersburg city industrial area');
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'center') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'center', 'St. Petersburg city center');
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) !== 'center') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'center', 'St. Petersburg city center');
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'industrial') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'industrial', 'St. Petersburg city industrial area');
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'communal') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'communal', 'the communal village');
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino');
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'pavlovsk') {
      qspCall(s, 'transport_functions', 'set_train_ticket', ((s as any).locArgs?.[1] ?? 0), 'pavlovsk', 'Pavlovsk');
    }
  }
  return;
  scene.build();
}

function enterSetTrainTicket(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_transportVars ?? {})['origin'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_transportVars ?? {})['destination'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).temp_transportVars ?? {})['name'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).temp_transportVars ?? {})['price'] = qspFunc(s, 'transport_functions', 'get_train_price', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']);
  ((s as any).temp_transportVars ?? {})['time'] = qspFunc(s, 'transport_functions', 'display_train_timecost', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']);
  if (qspFunc(s, 'transport_functions', 'get_train_waitcost', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']) > 60) {
    // TODO-QSP: dynamic "act 'Buy a ticket to <<$temp_transportVars['name']>> (<font color=""red""><<$temp_transport...
  } else {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).temp_transportVars ?? 0)?.['price']) === 0) {
      // TODO-QSP: dynamic "act 'Buy a ticket to <<$temp_transportVars['name']>> (<font color=""red""><<$temp_transport...
    } else {
      // TODO-QSP: dynamic "
      // TODO-QSP: act 'Buy a ticket to <<$temp_transportVars['name']>> (<<$temp_transportVars['time']>> - <<$func('mon...
      // TODO-QSP: gs 'money', 'pay', <<temp_transportVars['price']>>
      // TODO-QSP: gt 'train', '<<$temp_transportVars['origin']>>_<<$temp_transportVars['destination']>>'
    }
    // TODO-QSP: "
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'buy_train_pass':
      enterBuyTrainPass(s, scene);
      break;
    case 'buy_train_ticket':
      enterBuyTrainTicket(s, scene);
      break;
    case 'set_train_ticket':
      enterSetTrainTicket(s, scene);
      break;
    default:
      enterBuyTrainPass(s, scene);
      break;
  }
}

export const transport_functions: LocationDef = {
  name: 'transport_functions',
  region: 'other',
  enter: enter,
};
