import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBuyTrainPass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Buy a daily pass (1 day)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250);
      ((st as any).transportVars = (st as any).transportVars ?? {})['trainpass_day'] = ((st as any).daystart ?? 0) + 1;
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((st as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a weekly pass (7 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1250) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 1250);
      ((st as any).transportVars = (st as any).transportVars ?? {})['trainpass_day'] = ((st as any).daystart ?? 0) + 7;
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((st as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a monthly pass (30 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3750) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 3750);
      ((st as any).transportVars = (st as any).transportVars ?? {})['trainpass_day'] = ((st as any).daystart ?? 0) + 30;
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((st as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a yearly pass (365 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 32500) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 32500);
      ((st as any).transportVars = (st as any).transportVars ?? {})['trainpass_day'] = ((st as any).daystart ?? 0) + 365;
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((st as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
    ]);
  }
  return;
  scene.build();
}

function enterBuyTrainTicket(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 'pc') {
    if (String((s as any).locArgs?.[1] ?? '') !== 'pavlovsk') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'pavlovsk', 'Pavlovsk']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (String((s as any).locArgs?.[1] ?? '') !== 'gadukino') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (String((s as any).locArgs?.[1] ?? '') !== 'communal') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'communal', 'the communal village']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (String((s as any).locArgs?.[1] ?? '') !== 'industrial') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'industrial', 'St. Petersburg city industrial area']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (String((s as any).locArgs?.[1] ?? '') !== 'center') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'center', 'St. Petersburg city center']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') !== 'center') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'center', 'St. Petersburg city center']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (String((s as any).locArgs?.[1] ?? '') !== 'industrial') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'industrial', 'St. Petersburg city industrial area']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (String((s as any).locArgs?.[1] ?? '') !== 'communal') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'communal', 'the communal village']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (String((s as any).locArgs?.[1] ?? '') !== 'gadukino') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (String((s as any).locArgs?.[1] ?? '') !== 'pavlovsk') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'pavlovsk', 'Pavlovsk']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  scene.build();
}

function enterSetTrainTicket(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['origin'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['destination'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['name'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['price'] = qspFunc(s, 'transport_functions', 'get_train_price', (((s as any).temp_transportVars ?? 0)?.['origin']), (((s as any).temp_transportVars ?? 0)?.['destination']));
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['time'] = qspFunc(s, 'transport_functions', 'display_train_timecost', (((s as any).temp_transportVars ?? 0)?.['origin']), (((s as any).temp_transportVars ?? 0)?.['destination']));
  if (qspFunc(s, 'transport_functions', 'get_train_waitcost', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']) > 60) {
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  scene.text('Transport Functions');
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
      enterDefault(s, scene);
      break;
  }
}

export const transport_functions: LocationDef = {
  name: 'transport_functions',
  title: 'Transport Functions',
  region: 'other',
  enter: enter,
};
