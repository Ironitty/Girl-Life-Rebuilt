import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.text('Transport Functions');
  scene.build();
}

function enterBuyTrainPass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Buy a daily pass (1 day)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 250);
      ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = ((s as any).daystart ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a weekly pass (7 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1250);
      ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = ((s as any).daystart ?? 0) + 7;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a monthly pass (30 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3750) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 3750);
      ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = ((s as any).daystart ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a yearly pass (365 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 32500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 32500);
      ((s as any).transportVars = (s as any).transportVars ?? {})['trainpass_day'] = ((s as any).daystart ?? 0) + 365;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuyTrainTicket(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'pc') {
    if (((s as any).locArgs?.[1] ?? 0) !== 'pavlovsk') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'pavlovsk', 'Pavlovsk']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'communal') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'communal', 'the communal village']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'industrial') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'industrial', 'St. Petersburg city industrial area']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'center') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'center', 'St. Petersburg city center']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) !== 'center') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'center', 'St. Petersburg city center']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'industrial') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'industrial', 'St. Petersburg city industrial area']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'communal') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'communal', 'the communal village']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'pavlovsk') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'pavlovsk', 'Pavlovsk']; enterSetTrainTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetTrainTicket(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['origin'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['destination'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['name'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['price'] = qspFunc(s, 'transport_functions', 'get_train_price', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['time'] = qspFunc(s, 'transport_functions', 'display_train_timecost', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']);
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
  // TODO-QSP: end
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetTrainWaitTime(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).daystart ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).hour ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 4) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[4] = ((s as any).minut ?? 0);
  }
  ((s as any).transportVars = (s as any).transportVars ?? {})['train_wait_pavlovsk'] = 0;
  ((s as any).transportVars = (s as any).transportVars ?? {})['train_wait_center'] = 0;
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut'] = ((s as any).locArgs?.[3] ?? 0) * 60 + ((s as any).locArgs?.[4] ?? 0);
  if (((s as any).locArgs?.[1] ?? 0) !== 'pavlovsk') {
    ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut_center'] = (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0) - qspFunc(s, 'transport_functions', 'get_train_timecost', 'center', ((s as any).locArgs?.[1] ?? 0));
    if (((s as any).temp_transportVars ?? 0)?.['totminut_center'] >= 1320  ||  ((s as any).temp_transportVars ?? 0)?.['totminut_center'] < 60) {
      ((s as any).transportVars = (s as any).transportVars ?? {})['train_wait_pavlovsk'] = (1442 - (((s as any).temp_transportVars ?? {})?.['totminut_center'] ?? 0)) % 30;
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['totminut_center'] < 240) {
        ((s as any).transportVars = (s as any).transportVars ?? {})['train_wait_pavlovsk'] = (1442 - (((s as any).temp_transportVars ?? {})?.['totminut_center'] ?? 0)) % 60;
      } else {
        ((s as any).transportVars = (s as any).transportVars ?? {})['train_wait_pavlovsk'] = (1442 - (((s as any).temp_transportVars ?? {})?.['totminut_center'] ?? 0)) % 15;
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 'center') {
    ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut_pavlovsk'] = (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0) - qspFunc(s, 'transport_functions', 'get_train_timecost', 'pavlovsk', ((s as any).locArgs?.[1] ?? 0));
    if (((s as any).temp_transportVars ?? 0)?.['totminut_pavlovsk'] >= 1320  ||  ((s as any).temp_transportVars ?? 0)?.['totminut_pavlovsk'] < 60) {
      ((s as any).transportVars = (s as any).transportVars ?? {})['train_wait_center'] = (1447 - (((s as any).transportVars ?? {})?.['totminut_pavlovsk'] ?? 0)) % 30;
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['totminut_pavlovsk'] < 240) {
        ((s as any).transportVars = (s as any).transportVars ?? {})['train_wait_center'] = (1447 - (((s as any).transportVars ?? {})?.['totminut_pavlovsk'] ?? 0)) % 60;
      } else {
        ((s as any).transportVars = (s as any).transportVars ?? {})['train_wait_center'] = (1447 - (((s as any).transportVars ?? {})?.['totminut_pavlovsk'] ?? 0)) % 15;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayTrainpassTime(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'You have ' + (((s as any).transportVars ?? {})?.['trainpass_day'] ?? 0) - ((s as any).daystart ?? 0) + ' days left on your train pass.';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayTrainTimecost(s: GameState, scene: SceneBuilder): void {
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['origin'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['destination'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = qspFunc(s, 'transport_functions', 'get_train_timecost', ((s as any).dtemp_transportVars ?? 0)?.['origin'], ((s as any).dtemp_transportVars ?? 0)?.['destination']);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = ((s as any).dtemp_transportVars['minutes'] ?? 0) + (qspFunc(s, 'transport_functions', 'get_train_waitcost', ((s as any).dtemp_transportVars ?? 0)?.['origin'], ((s as any).dtemp_transportVars ?? 0)?.['destination']));
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['hours'] = (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0) / 60;
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0) % 60;
  (s as any).result = '' + ((s as any).dtemp_transportVars ?? 0)?.['hours'] + ':' + (String(String(100 + (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0))).slice((2)-1, ((2)-1)+(2))) + '';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayTrainSchedule(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_border[0] = '<td style="border-bottom:2px solid black"></td>'
  // TODO-QSP: $temp_border[1] = '<td style="border-bottom:2px solid black; border-right:2px solid black"></td>'
  // TODO-QSP: $temp_border[2] = '<td style="border-bottom:2px solid black; border-right:2px solid black; border-le...
  // TODO-QSP: $temp_border[3] = '<td style="border-bottom:1px solid black"></td>'
  // TODO-QSP: $temp_border[4] = '<td style="border-bottom:1px solid black; border-right:2px solid black; border-le...
  if (((s as any).locArgs?.[1] ?? 0) === 'pc') {
    (s as any).train_schedule = '<center><h2>Pavlovsk - St. Petersburg</h2></center>';
    // TODO-QSP: $train_schedule += '<br><center><table style="text-align:center" cellspacing="0" cellpadding="3">'
    // TODO-QSP: $train_schedule += '<tr><th></th><th></th><th>Communal</th><th>St. Petersburg</th><th>St. Petersburg...
    // TODO-QSP: $train_schedule += '<tr><th style="border-right:2px solid black">Pavlovsk</th><th style="border-righ...
    // TODO-QSP: $train_schedule += '<tr>' + $temp_border[1] + $temp_border[1] + $temp_border[1] + $temp_border[1] + ...
    ((s as any).th = (s as any).th ?? {})[0] = 0;
    // TODO-QSP: :train_schedule_loop1
    // TODO-QSP: $th[1] = $mid(100 + th[0], 2, 2)
    // TODO-QSP: $th[2] = $mid(100 + th[0] + 1, 2, 2)
    ((s as any).th = (s as any).th ?? {})[3] = ((s as any).th ?? 0)[0] + 12;
    // TODO-QSP: $th[4] = $mid(100 + th[3], 2, 2)
    // TODO-QSP: $th[5] = $mid(100 + th[3] + 1, 2, 2)
    // TODO-QSP: $train_schedule += '<tr>'
    // TODO-QSP: $train_schedule += '<td><<$th[1]>>:07</td><td><<$th[1]>>:22</td><td><<$th[1]>>:32</td><td><<$th[1]>>...
    // TODO-QSP: $train_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $train_schedule += '<td><<$th[4]>>:07</td><td><<$th[4]>>:22</td><td><<$th[4]>>:32</td><td><<$th[4]>>...
    // TODO-QSP: $train_schedule += '</tr>'
    if (((s as any).th ?? 0)[0] >= 4  ||  ((s as any).th ?? 0)[3] <= 21) {
      // TODO-QSP: $train_schedule += '<tr>'
      if (((s as any).th ?? 0)[0] >= 4) {
        // TODO-QSP: $train_schedule += '<td><<$th[1]>>:22</td><td><<$th[1]>>:37</td><td><<$th[1]>>:47</td><td><<$th[1]>>...
      } else {
        // TODO-QSP: $train_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $train_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      if (((s as any).th ?? 0)[3] <= 21) {
        // TODO-QSP: $train_schedule += '<td><<$th[4]>>:22</td><td><<$th[4]>>:37</td><td><<$th[4]>>:47</td><td><<$th[4]>>...
      } else {
        // TODO-QSP: $train_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $train_schedule += '</tr>'
    }
    // TODO-QSP: $train_schedule += '<tr>'
    if (((s as any).th ?? 0)[0] === 0  ||  ((s as any).th ?? 0)[0] >= 4) {
      // TODO-QSP: $train_schedule += '<td><<$th[1]>>:37</td><td><<$th[1]>>:52</td><td><<$th[2]>>:02</td><td><<$th[2]>>...
    } else {
      // TODO-QSP: $train_schedule += '<td colspan=5></td>'
    }
    // TODO-QSP: $train_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $train_schedule += '<td><<$th[4]>>:37</td><td><<$th[4]>>:52</td><td><<$th[5]>>:02</td><td><<$th[5]>>...
    if (((s as any).th ?? 0)[0] >= 4  ||  ((s as any).th ?? 0)[3] <= 21) {
      // TODO-QSP: $train_schedule += '<tr>'
      if (((s as any).th ?? 0)[0] >= 4) {
        // TODO-QSP: $train_schedule += '<td><<$th[1]>>:52</td><td><<$th[2]>>:07</td><td><<$th[2]>>:17</td><td><<$th[2]>>...
      } else {
        // TODO-QSP: $train_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $train_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      if (((s as any).th ?? 0)[3] <= 21) {
        // TODO-QSP: $train_schedule += '<td><<$th[4]>>:52</td><td><<$th[5]>>:07</td><td><<$th[5]>>:17</td><td><<$th[5]>>...
      } else {
        // TODO-QSP: $train_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $train_schedule += '</tr>'
    }
    // TODO-QSP: $train_schedule += '<tr>' + $temp_border[3] + $temp_border[3] + $temp_border[3] + $temp_border[3] + ...
    ((s as any).th = (s as any).th ?? {})[0] = ((s as any).th[0] ?? 0) + (1);
    if (((s as any).th ?? 0)[0] < 12) {
      // TODO-QSP: jump 'train_schedule_loop1'
    }
  } else {
    (s as any).train_schedule = '<center><h2>St. Petersburg - Pavlovsk</h2></center>';
    // TODO-QSP: $train_schedule += '<br><center><table style="text-align:center" cellspacing="0" cellpadding="3">'
    // TODO-QSP: $train_schedule += '<tr><th>St. Petersburg</th><th>St. Petersburg</th><th>Communal</th><th></th><th>...
    // TODO-QSP: $train_schedule += '<tr><th style="border-right:2px solid black">Center</th><th style="border-right:...
    // TODO-QSP: $train_schedule += '<tr>' + $temp_border[1] + $temp_border[1] + $temp_border[1] + $temp_border[1] + ...
    ((s as any).th = (s as any).th ?? {})[0] = 0;
    // TODO-QSP: :train_schedule_loop2
    // TODO-QSP: $th[1] = $mid(100 + th[0], 2, 2)
    // TODO-QSP: $th[2] = $mid(100 + th[0] + 1, 2, 2)
    ((s as any).th = (s as any).th ?? {})[3] = ((s as any).th ?? 0)[0] + 12;
    // TODO-QSP: $th[4] = $mid(100 + th[3], 2, 2)
    // TODO-QSP: $th[5] = $mid(100 + th[3] + 1, 2, 2)
    // TODO-QSP: $train_schedule += '<tr>'
    // TODO-QSP: $train_schedule += '<td><<$th[1]>>:02</td><td><<$th[1]>>:07</td><td><<$th[1]>>:17</td><td><<$th[1]>>...
    // TODO-QSP: $train_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $train_schedule += '<td><<$th[4]>>:02</td><td><<$th[4]>>:07</td><td><<$th[4]>>:17</td><td><<$th[4]>>...
    // TODO-QSP: $train_schedule += '</tr>'
    if (((s as any).th ?? 0)[0] >= 4  ||  ((s as any).th ?? 0)[3] <= 21) {
      // TODO-QSP: $train_schedule += '<tr>'
      if (((s as any).th ?? 0)[0] >= 4) {
        // TODO-QSP: $train_schedule += '<td><<$th[1]>>:17</td><td><<$th[1]>>:22</td><td><<$th[1]>>:32</td><td><<$th[1]>>...
      } else {
        // TODO-QSP: $train_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $train_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      if (((s as any).th ?? 0)[3] <= 21) {
        // TODO-QSP: $train_schedule += '<td><<$th[4]>>:17</td><td><<$th[4]>>:22</td><td><<$th[4]>>:32</td><td><<$th[4]>>...
      } else {
        // TODO-QSP: $train_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $train_schedule += '</tr>'
    }
    // TODO-QSP: $train_schedule += '<tr>'
    if (((s as any).th ?? 0)[0] === 0  ||  ((s as any).th ?? 0)[0] >= 4) {
      // TODO-QSP: $train_schedule += '<td><<$th[1]>>:32</td><td><<$th[1]>>:37</td><td><<$th[1]>>:47</td><td><<$th[1]>>...
    } else {
      // TODO-QSP: $train_schedule += '<td colspan=5></td>'
    }
    // TODO-QSP: $train_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $train_schedule += '<td><<$th[4]>>:32</td><td><<$th[4]>>:37</td><td><<$th[4]>>:47</td><td><<$th[4]>>...
    if (((s as any).th ?? 0)[0] >= 4  ||  ((s as any).th ?? 0)[3] <= 21) {
      // TODO-QSP: $train_schedule += '<tr>'
      if (((s as any).th ?? 0)[0] >= 4) {
        // TODO-QSP: $train_schedule += '<td><<$th[1]>>:47</td><td><<$th[1]>>:52</td><td><<$th[2]>>:02</td><td><<$th[2]>>...
      } else {
        // TODO-QSP: $train_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $train_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      if (((s as any).th ?? 0)[3] <= 21) {
        // TODO-QSP: $train_schedule += '<td><<$th[4]>>:47</td><td><<$th[4]>>:52</td><td><<$th[5]>>:02</td><td><<$th[5]>>...
      } else {
        // TODO-QSP: $train_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $train_schedule += '</tr>'
    }
    // TODO-QSP: $train_schedule += '<tr>' + $temp_border[3] + $temp_border[3] + $temp_border[3] + $temp_border[3] + ...
    ((s as any).th = (s as any).th ?? {})[0] = ((s as any).th[0] ?? 0) + (1);
    if (((s as any).th ?? 0)[0] < 12) {
      // TODO-QSP: jump 'train_schedule_loop2'
    }
  }
  // TODO-QSP: $train_schedule += '</table></center>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTrainPrice(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'transport_functions', '_private_train_price', ((s as any).locArgs?.[2] ?? 0)) - qspFunc(s, 'transport_functions', '_private_train_price', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).result ?? 0) < 0) {
    // TODO-QSP: result *= -1
  }
  (s as any).result = ((s as any).result ?? 0) + (25);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPrivateTrainPrice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'pavlovsk') {
    (s as any).result = 0;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'gadukino') {
      (s as any).result = 50;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'communal') {
        (s as any).result = 75;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'industrial') {
          (s as any).result = 100;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'center') {
            (s as any).result = 125;
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTrainTimecost(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'transport_functions', '_private_train_time', ((s as any).locArgs?.[2] ?? 0)) - qspFunc(s, 'transport_functions', '_private_train_time', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).result ?? 0) < 0) {
    // TODO-QSP: result *= -1
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPrivateTrainTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'pavlovsk') {
    (s as any).result = 0;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'gadukino') {
      (s as any).result = 15;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'communal') {
        (s as any).result = 25;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'industrial') {
          (s as any).result = 35;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'center') {
            (s as any).result = 40;
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTrainWaitcost(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'transport_functions', '_private_train_time', ((s as any).locArgs?.[2] ?? 0)) > qspFunc(s, 'transport_functions', '_private_train_time', ((s as any).locArgs?.[1] ?? 0))) {
    (s as any).result = ((s as any).transportVars ?? 0)?.['train_wait_center'];
  } else {
    (s as any).result = ((s as any).transportVars ?? 0)?.['train_wait_pavlovsk'];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuyBusPass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([
      { label: 'Buy a daily bus pass (1 day)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100);
      ((s as any).transportVars = (s as any).transportVars ?? {})['buspass_day'] = ((s as any).daystart ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a weekly bus pass (7 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 500);
      ((s as any).transportVars = (s as any).transportVars ?? {})['buspass_day'] = ((s as any).daystart ?? 0) + 7;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a monthly bus pass (30 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1500);
      ((s as any).transportVars = (s as any).transportVars ?? {})['buspass_day'] = ((s as any).daystart ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a yearly bus pass (365 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 13000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 13000);
      ((s as any).transportVars = (s as any).transportVars ?? {})['buspass_day'] = ((s as any).daystart ?? 0) + 365;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuyBusTicket(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'pg') {
    if (((s as any).locArgs?.[1] ?? 0) !== 'community') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'community', 'the Pavlovsk community center']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'pavstation') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'pavstation', 'the Pavlovsk train station']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'pushkin') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'pushkin', 'the old town of Pushkin']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'construction') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'construction', 'the construction site']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'gp') {
      if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).locArgs?.[1] ?? 0) !== 'construction') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'construction', 'the construction site']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).locArgs?.[1] ?? 0) !== 'pushkin') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'pushkin', 'the old town of Pushkin']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).locArgs?.[1] ?? 0) !== 'pavstation') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'pavstation', 'the Pavlovsk train station']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).locArgs?.[1] ?? 0) !== 'community') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'community', 'the Pavlovsk community center']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'gs') {
        if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).locArgs?.[1] ?? 0) !== 'communal') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'communal', 'the communal village']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).locArgs?.[1] ?? 0) !== 'graveyard') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'graveyard', 'the graveyard']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).locArgs?.[1] ?? 0) !== 'suburbs') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'suburbs', 'the expensive suburb of St. Petersburg']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).locArgs?.[1] ?? 0) !== 'suburbs') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'suburbs', 'the expensive suburb of St. Petersburg']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).locArgs?.[1] ?? 0) !== 'graveyard') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'graveyard', 'the graveyard']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).locArgs?.[1] ?? 0) !== 'communal') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'communal', 'the communal village']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'gadukino', 'the village of Gadukino']; enterSetBusTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetBusTicket(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['origin'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['destination'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['name'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['price'] = qspFunc(s, 'transport_functions', 'get_bus_price', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['time'] = qspFunc(s, 'transport_functions', 'display_bus_timecost', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']);
  if (qspFunc(s, 'transport_functions', 'get_bus_waitcost', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']) > 60) {
    // TODO-QSP: dynamic "act 'Buy a ticket to <<$temp_transportVars['name']>> (<font color=""red""><<$temp_transport...
  } else {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).temp_transportVars ?? 0)?.['price']) === 0) {
      // TODO-QSP: dynamic "act 'Buy a ticket to <<$temp_transportVars['name']>> (<font color=""red""><<$temp_transport...
    } else {
      // TODO-QSP: dynamic "
      // TODO-QSP: act 'Buy a ticket to <<$temp_transportVars['name']>> (<<$temp_transportVars['time']>> - <<$func('mon...
      // TODO-QSP: gs 'money', 'pay', <<temp_transportVars['price']>>
      // TODO-QSP: gt 'bus', '<<$temp_transportVars['origin']>>_<<$temp_transportVars['destination']>>'
    }
    // TODO-QSP: "
  }
  // TODO-QSP: end
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetBusWaitTime(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).daystart ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).hour ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 4) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[4] = ((s as any).minut ?? 0);
  }
  ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_pavlovsk'] = 0;
  ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_gadukino'] = 0;
  ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_suburbs'] = 0;
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut'] = ((s as any).locArgs?.[3] ?? 0) * 60 + ((s as any).locArgs?.[4] ?? 0);
  if (((String(';community;pavstation;pushkin;construction;gadukino;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
    if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
      ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut_community'] = (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0) - qspFunc(s, 'transport_functions', 'get_bus_timecost', 'communal', ((s as any).locArgs?.[1] ?? 0));
      if (((s as any).temp_transportVars ?? 0)?.['totminut_community'] > 13  &&  ((s as any).temp_transportVars ?? 0)?.['totminut_community'] < 313) {
        ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_gadukino'] = (1753 - (((s as any).temp_transportVars ?? {})?.['totminut_community'] ?? 0)) % 1440;
      } else {
        ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_gadukino'] = (1753 - (((s as any).temp_transportVars ?? {})?.['totminut_community'] ?? 0)) % 20;
      }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'community') {
      ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut_gadukino'] = (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0) - qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', ((s as any).locArgs?.[1] ?? 0));
      if (((s as any).temp_transportVars ?? 0)?.['totminut'] > 13  &&  ((s as any).temp_transportVars ?? 0)?.['totminut'] < 313) {
        ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_pavlovsk'] = (1753 - (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0)) % 1440;
      } else {
        ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_pavlovsk'] = (1753 - (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0)) % 20;
      }
    }
  }
  if (((String(';gadukino;communal;graveyard;suburbs;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
    if (((s as any).locArgs?.[1] ?? 0) !== 'gadukino') {
      ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut_suburbs'] = (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0) - qspFunc(s, 'transport_functions', 'get_bus_timecost', 'suburbs', ((s as any).locArgs?.[1] ?? 0));
      if (((s as any).temp_transportVars ?? 0)?.['totminut_suburbs'] > 1425  ||  ((s as any).temp_transportVars ?? 0)?.['totminut_suburbs'] < 305) {
        ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_gadukino'] = (1745 - (((s as any).temp_transportVars ?? {})?.['totminut_suburbs'] ?? 0)) % 1440;
      } else {
        ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_gadukino'] = (1745 - (((s as any).temp_transportVars ?? {})?.['totminut_suburbs'] ?? 0)) % 20;
      }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'suburbs') {
      ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut_gadukino'] = (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0) - qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', ((s as any).locArgs?.[1] ?? 0));
      if (((s as any).temp_transportVars ?? 0)?.['totminut_gadukino'] > 1435  ||  ((s as any).temp_transportVars ?? 0)?.['totminut_gadukino'] < 315) {
        ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_suburbs'] = (1755 - (((s as any).temp_transportVars ?? {})?.['totminut_gadukino'] ?? 0)) % 1440;
      } else {
        ((s as any).transportVars = (s as any).transportVars ?? {})['bus_wait_suburbs'] = (1755 - (((s as any).temp_transportVars ?? {})?.['totminut_gadukino'] ?? 0)) % 20;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayBuspassTime(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'You have ' + (((s as any).transportVars ?? {})?.['buspass_day'] ?? 0) - ((s as any).daystart ?? 0) + ' days left on your train pass.';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayBusTimecost(s: GameState, scene: SceneBuilder): void {
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['origin'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['destination'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', ((s as any).dtemp_transportVars ?? 0)?.['origin'], ((s as any).dtemp_transportVars ?? 0)?.['destination']);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = ((s as any).dtemp_transportVars['minutes'] ?? 0) + (qspFunc(s, 'transport_functions', 'get_bus_waitcost', ((s as any).dtemp_transportVars ?? 0)?.['origin'], ((s as any).dtemp_transportVars ?? 0)?.['destination']));
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['hours'] = (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0) / 60;
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0) % 60;
  (s as any).result = '' + ((s as any).dtemp_transportVars ?? 0)?.['hours'] + ':' + (String(String(100 + (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0))).slice((2)-1, ((2)-1)+(2))) + '';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayBusSchedule(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_border[0] = '<td style="border-bottom:2px solid black"></td>'
  // TODO-QSP: $temp_border[1] = '<td style="border-bottom:2px solid black; border-right:2px solid black"></td>'
  // TODO-QSP: $temp_border[2] = '<td style="border-bottom:2px solid black; border-right:2px solid black; border-le...
  // TODO-QSP: $temp_border[3] = '<td style="border-bottom:1px solid black"></td>'
  // TODO-QSP: $temp_border[4] = '<td style="border-bottom:1px solid black; border-right:2px solid black; border-le...
  if (((s as any).locArgs?.[1] ?? 0) === 'pg') {
    (s as any).bus_schedule = '<center><h2>Pavlovsk - Gadukino</h2></center>';
    // TODO-QSP: $bus_schedule += '<br><center><table style="text-align:center" cellspacing="0" cellpadding="3">'
    // TODO-QSP: $bus_schedule += '<tr><th>Pavlovsk</th><th>Pavlovsk</th><th></th><th>Construction</th><th></th><th s...
    // TODO-QSP: $bus_schedule += '<tr><th style="border-right:2px solid black">Community Center</th><th style="borde...
    // TODO-QSP: $bus_schedule += '<tr>' + $temp_border[1] + $temp_border[1] + $temp_border[1] + $temp_border[1] + $t...
    ((s as any).th = (s as any).th ?? {})[0] = 4;
    // TODO-QSP: :bus_schedule_loop1
    // TODO-QSP: $th[1] = $mid(100 + th[0], 2, 2)
    // TODO-QSP: $th[2] = $mid(100 + th[0] + 1, 2, 2)
    ((s as any).th = (s as any).th ?? {})[3] = ((s as any).th ?? 0)[0] + 10;
    // TODO-QSP: $th[4] = $mid(100 + th[3] mod 24, 2, 2)
    // TODO-QSP: $th[5] = $mid(100 + (th[3] + 1) mod 24, 2, 2)
    // TODO-QSP: $bus_schedule += '<tr>'
    // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:13</td><td><<$th[1]>>:15</td><td><<$th[1]>>:23</td><td><<$th[1]>>:3...
    // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:13</td><td><<$th[4]>>:15</td><td><<$th[4]>>:23</td><td><<$th[4]>>:3...
    // TODO-QSP: $bus_schedule += '</tr>'
    // TODO-QSP: $bus_schedule += '<tr>'
    // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:33</td><td><<$th[1]>>:35</td><td><<$th[1]>>:43</td><td><<$th[1]>>:5...
    // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    if (((s as any).th ?? 0)[3] <= 23) {
      // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:33</td><td><<$th[4]>>:35</td><td><<$th[4]>>:43</td><td><<$th[4]>>:5...
    } else {
      // TODO-QSP: $bus_schedule += '<td colspan=5></td>'
    }
    // TODO-QSP: $bus_schedule += '</tr>'
    // TODO-QSP: $bus_schedule += '<tr>'
    // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:53</td><td><<$th[1]>>:55</td><td><<$th[2]>>:03</td><td><<$th[2]>>:1...
    // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    if (((s as any).th ?? 0)[3] <= 23) {
      // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:53</td><td><<$th[4]>>:55</td><td><<$th[5]>>:03</td><td><<$th[5]>>:1...
    } else {
      // TODO-QSP: $bus_schedule += '<td colspan=5></td>'
    }
    // TODO-QSP: $bus_schedule += '</tr>'
    // TODO-QSP: $bus_schedule += '<tr>' + $temp_border[3] + $temp_border[3] + $temp_border[3] + $temp_border[3] + $t...
    ((s as any).th = (s as any).th ?? {})[0] = ((s as any).th[0] ?? 0) + (1);
    if (((s as any).th ?? 0)[0] < 15) {
      // TODO-QSP: jump 'bus_schedule_loop1'
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'gp') {
      (s as any).bus_schedule = '<center><h2>Gadukino - Pavlovsk</h2></center>';
      // TODO-QSP: $bus_schedule += '<br><center><table style="text-align:center" cellspacing="0" cellpadding="3">'
      // TODO-QSP: $bus_schedule += '<tr><th></th><th>Construction</th><th></th><th>Pavlovsk</th><th>Pavlovsk</th><th s...
      // TODO-QSP: $bus_schedule += '<tr><th style="border-right:2px solid black">Gadukino</th><th style="border-right:...
      // TODO-QSP: $bus_schedule += '<tr>' + $temp_border[1] + $temp_border[1] + $temp_border[1] + $temp_border[1] + $t...
      ((s as any).th = (s as any).th ?? {})[0] = 4;
      // TODO-QSP: :bus_schedule_loop2
      // TODO-QSP: $th[1] = $mid(100 + th[0], 2, 2)
      // TODO-QSP: $th[2] = $mid(100 + th[0] + 1, 2, 2)
      ((s as any).th = (s as any).th ?? {})[3] = ((s as any).th ?? 0)[0] + 10;
      // TODO-QSP: $th[4] = $mid(100 + th[3] mod 24, 2, 2)
      // TODO-QSP: $th[5] = $mid(100 + (th[3] + 1) mod 24, 2, 2)
      // TODO-QSP: $bus_schedule += '<tr>'
      // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:13</td><td><<$th[1]>>:38</td><td><<$th[1]>>:53</td><td><<$th[2]>>:0...
      // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:13</td><td><<$th[4]>>:38</td><td><<$th[4]>>:53</td><td><<$th[5]>>:0...
      // TODO-QSP: $bus_schedule += '</tr>'
      // TODO-QSP: $bus_schedule += '<tr>'
      // TODO-QSP: $bus_schedule += '<tr><td><<$th[1]>>:33</td><td><<$th[1]>>:58</td><td><<$th[2]>>:13</td><td><<$th[2]...
      // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      if (((s as any).th ?? 0)[3] <= 23) {
        // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:33</td><td><<$th[4]>>:58</td><td><<$th[5]>>:13</td><td><<$th[5]>>:2...
      } else {
        // TODO-QSP: $bus_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $bus_schedule += '</tr>'
      // TODO-QSP: $bus_schedule += '<tr>'
      // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:53</td><td><<$th[2]>>:18</td><td><<$th[2]>>:33</td><td><<$th[2]>>:4...
      // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      if (((s as any).th ?? 0)[3] <= 23) {
        // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:53</td><td><<$th[5]>>:18</td><td><<$th[5]>>:33</td><td><<$th[5]>>:4...
      } else {
        // TODO-QSP: $bus_schedule += '<td colspan=5></td>'
      }
      // TODO-QSP: $bus_schedule += '</tr>'
      // TODO-QSP: $bus_schedule += '<tr>' + $temp_border[3] + $temp_border[3] + $temp_border[3] + $temp_border[3] + $t...
      ((s as any).th = (s as any).th ?? {})[0] = ((s as any).th[0] ?? 0) + (1);
      if (((s as any).th ?? 0)[0] < 15) {
        // TODO-QSP: jump 'bus_schedule_loop2'
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'gs') {
        (s as any).bus_schedule = '<center><h2>Gadukino - Suburbs</h2></center>';
        // TODO-QSP: $bus_schedule += '<br><center><table style="text-align:center" cellspacing="0" cellpadding="3">'
        // TODO-QSP: $bus_schedule += '<tr><th></th><th>Communal</th><th></th><th>St. Petersburg</th><th style="border-ri...
        // TODO-QSP: $bus_schedule += '<tr><th style="border-right:2px solid black">Gadukino</th><th style="border-right:...
        // TODO-QSP: $bus_schedule += '<tr>' + $temp_border[1] + $temp_border[1] + $temp_border[1] + $temp_border[0] + $t...
        ((s as any).th = (s as any).th ?? {})[0] = 4;
        // TODO-QSP: :bus_schedule_loop3
        // TODO-QSP: $th[1] = mid(100 + th[0], 2, 2)
        // TODO-QSP: $th[2] = mid(100 + th[0] + 1, 2, 2)
        ((s as any).th = (s as any).th ?? {})[3] = ((s as any).th ?? 0)[0] + 10;
        // TODO-QSP: $th[4] = mid(100 + th[3] mod 24, 2, 2)
        // TODO-QSP: $th[5] = mid(100 + (th[3] + 1) mod 24, 2, 2)
        // TODO-QSP: $bus_schedule += '<tr>'
        // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:15</td><td><<$th[1]>>:35</td><td><<$th[1]>>:45</td><td><<$th[1]>>:5...
        // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
        if (((s as any).th ?? 0)[3] <= 23) {
          // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:15</td><td><<$th[4]>>:35</td><td><<$th[4]>>:45</td><td><<$th[4]>>:5...
        } else {
          // TODO-QSP: $bus_schedule += '<td colspan=4></td>'
        }
        // TODO-QSP: $bus_schedule += '</tr>'
        // TODO-QSP: $bus_schedule += '<tr>'
        // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:35</td><td><<$th[1]>>:55</td><td><<$th[2]>>:05</td><td><<$th[2]>>:1...
        // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
        if (((s as any).th ?? 0)[3] <= 23) {
          // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:35</td><td><<$th[4]>>:55</td><td><<$th[5]>>:05</td><td><<$th[5]>>:1...
        } else {
          // TODO-QSP: $bus_schedule += '<td colspan=4></td>'
        }
        // TODO-QSP: $bus_schedule += '</tr>'
        // TODO-QSP: $bus_schedule += '<tr>'
        // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:55</td><td><<$th[5]>>:15</td><td><<$th[5]>>:25</td><td><<$th[5]>>:3...
        // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
        if (((s as any).th ?? 0)[3] <= 23) {
          // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:55</td><td><<$th[5]>>:15</td><td><<$th[5]>>:25</td><td><<$th[5]>>:3...
        } else {
          // TODO-QSP: $bus_schedule += '<td colspan=4></td>'
        }
        // TODO-QSP: $bus_schedule += '</tr>'
        // TODO-QSP: $bus_schedule += '<tr>' + $temp_border[3] + $temp_border[3] + $temp_border[3] + $temp_border[3] + $t...
        ((s as any).th = (s as any).th ?? {})[0] = ((s as any).th[0] ?? 0) + (1);
        if (((s as any).th ?? 0)[0] < 15) {
          // TODO-QSP: jump 'bus_schedule_loop3'
        }
      } else {
        (s as any).bus_schedule = '<center><h2>Suburbs - Gadukino</h2></center>';
        // TODO-QSP: $bus_schedule += '<br><center><table style="text-align:center" cellspacing="0" cellpadding="3">'
        // TODO-QSP: $bus_schedule += '<tr><th>St. Petersburg</th><th></th><th>Communal</th><th></th><th style="border-ri...
        // TODO-QSP: $bus_schedule += '<tr><th style="border-right:2px solid black">Suburbs</th><th style="border-right:2...
        // TODO-QSP: $bus_schedule += '<tr>' + $temp_border[1] + $temp_border[1] + $temp_border[1] + $temp_border[0] + $t...
        ((s as any).th = (s as any).th ?? {})[0] = 4;
        // TODO-QSP: :bus_schedule_loop4
        // TODO-QSP: $th[1] = mid(100 + th, 2, 2)
        // TODO-QSP: $th[2] = mid(100 + th + 1, 2, 2)
        ((s as any).th = (s as any).th ?? {})[3] = ((s as any).th ?? 0)[0] + 10;
        // TODO-QSP: $th[4] = mid(100 + th[3] mod 24, 2, 2)
        // TODO-QSP: $th[5] = mid(100 + (th[3] + 1) mod 24, 2, 2)
        // TODO-QSP: $bus_schedule += '<tr>'
        // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:05</td><td><<$th[1]>>:15</td><td><<$th[1]>>:25</td><td><<$th[1]>>:4...
        // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
        if (((s as any).th ?? 0)[3] <= 23) {
          // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:05</td><td><<$th[4]>>:15</td><td><<$th[4]>>:25</td><td><<$th[4]>>:4...
        } else {
          // TODO-QSP: $bus_schedule += '<td colspan=4></td>'
        }
        // TODO-QSP: $bus_schedule += '</tr>'
        // TODO-QSP: $bus_schedule += '<tr>'
        // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:25</td><td><<$th[1]>>:35</td><td><<$th[1]>>:45</td><td><<$th[2]>>:0...
        // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
        if (((s as any).th ?? 0)[3] <= 23) {
          // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:25</td><td><<$th[4]>>:35</td><td><<$th[4]>>:45</td><td><<$th[5]>>:0...
        } else {
          // TODO-QSP: $bus_schedule += '<td colspan=4></td>'
        }
        // TODO-QSP: $bus_schedule += '</tr>'
        // TODO-QSP: $bus_schedule += '<tr>'
        // TODO-QSP: $bus_schedule += '<td><<$th[1]>>:45</td><td><<$th[1]>>:55</td><td><<$th[2]>>:05</td><td><<$th[2]>>:2...
        // TODO-QSP: $bus_schedule += '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
        if (((s as any).th ?? 0)[3] <= 23) {
          // TODO-QSP: $bus_schedule += '<td><<$th[4]>>:45</td><td><<$th[4]>>:55</td><td><<$th[5]>>:05</td><td><<$th[5]>>:2...
        } else {
          // TODO-QSP: $bus_schedule += '<td colspan=4></td>'
        }
        // TODO-QSP: $bus_schedule += '</tr>'
        // TODO-QSP: $bus_schedule += '<tr>' + $temp_border[3] + $temp_border[3] + $temp_border[3] + $temp_border[3] + $t...
        ((s as any).th = (s as any).th ?? {})[0] = ((s as any).th[0] ?? 0) + (1);
        if (((s as any).th ?? 0)[0] < 15) {
          // TODO-QSP: jump 'bus_schedule_loop4'
        }
      }
    }
  }
  // TODO-QSP: $bus_schedule += '</table></center>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBusPrice(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'transport_functions', '_private_bus_price', ((s as any).locArgs?.[2] ?? 0)) - qspFunc(s, 'transport_functions', '_private_bus_price', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).result ?? 0) < 0) {
    // TODO-QSP: result *= -1
  }
  (s as any).result = ((s as any).result ?? 0) + (10);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPrivateBusPrice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'community') {
    (s as any).result = 0;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'pavstation') {
      (s as any).result = 5;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'pushkin') {
        (s as any).result = 15;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'construction') {
          (s as any).result = 25;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'gadukino') {
            (s as any).result = 35;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'communal') {
              (s as any).result = 45;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'graveyard') {
                (s as any).result = 55;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'suburbs') {
                  (s as any).result = 65;
                }
              }
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

function enterGetBusTimecost(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'transport_functions', '_private_bus_time', ((s as any).locArgs?.[2] ?? 0)) - qspFunc(s, 'transport_functions', '_private_bus_time', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).result ?? 0) < 0) {
    // TODO-QSP: result *= -1
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPrivateBusTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'community') {
    (s as any).result = 0;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'pavstation') {
      (s as any).result = 2;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'pushkin') {
        (s as any).result = 10;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'construction') {
          (s as any).result = 25;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'gadukino') {
            (s as any).result = 50;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'communal') {
              (s as any).result = 70;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'graveyard') {
                (s as any).result = 80;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'suburbs') {
                  (s as any).result = 90;
                }
              }
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

function enterGetBusWaitcost(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'transport_functions', '_private_bus_time', ((s as any).locArgs?.[2] ?? 0)) > qspFunc(s, 'transport_functions', '_private_bus_time', ((s as any).locArgs?.[1] ?? 0))) {
    if (((s as any).locArgs?.[2] ?? 0) === 'suburbs'  ||  ((s as any).locArgs?.[2] ?? 0) === 'graveyard'  ||  ((s as any).locArgs?.[2] ?? 0) === 'communal') {
      (s as any).result = ((s as any).transportVars ?? 0)?.['bus_wait_suburbs'];
    } else {
      (s as any).result = ((s as any).transportVars ?? 0)?.['bus_wait_gadukino'];
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'graveyard'  ||  ((s as any).locArgs?.[2] ?? 0) === 'communal'  ||  ((s as any).locArgs?.[2] ?? 0) === 'gadukino') {
      (s as any).result = ((s as any).transportVars ?? 0)?.['bus_wait_gadukino'];
    } else {
      (s as any).result = ((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuyMetroPass(s: GameState, scene: SceneBuilder): void {
  if (((s as any).transportVars ?? 0)?.['metropass_day'] <= ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Buy a daily metro pass (1 day)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50);
      ((s as any).transportVars = (s as any).transportVars ?? {})['metropass_day'] = ((s as any).daystart ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a weekly metro pass (7 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 250);
      ((s as any).transportVars = (s as any).transportVars ?? {})['metropass_day'] = ((s as any).daystart ?? 0) + 7;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a monthly metro pass (30 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 750) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 750);
      ((s as any).transportVars = (s as any).transportVars ?? {})['metropass_day'] = ((s as any).daystart ?? 0) + 30;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
      { label: 'Buy a yearly metro pass (365 days)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 6500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 6500);
      ((s as any).transportVars = (s as any).transportVars ?? {})['metropass_day'] = ((s as any).daystart ?? 0) + 365;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Return', goto: ['<<$loc>>', '' + ((s as any).loc_arg ?? 0) + ''] },
      ]);
    }
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuyMetroTicket(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'si') {
    if (((s as any).locArgs?.[1] ?? 0) !== 'suburbs') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'suburbs', 'Suburbs']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'industrial') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'industrial', 'Industrial area']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'residential') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'residential', 'Residential area']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'center') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'center', 'City center']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'island') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'island', 'University area']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) !== 'island') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'island', 'University area']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'center') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'center', 'City center']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'residential') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'residential', 'Residential area']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'industrial') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'industrial', 'Industrial area']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'suburbs') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'suburbs', 'Suburbs']; enterSetMetroTicket(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetMetroTicket(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['origin'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['destination'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['name'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['price'] = qspFunc(s, 'transport_functions', 'get_metro_price', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['time'] = qspFunc(s, 'transport_functions', 'display_metro_timecost', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']);
  if (qspFunc(s, 'transport_functions', 'get_metro_waittime', ((s as any).temp_transportVars ?? 0)?.['origin'], ((s as any).temp_transportVars ?? 0)?.['destination']) > 60) {
    // TODO-QSP: dynamic "act 'Buy a ticket to <<$temp_transportVars['name']>> (<font color=""red""><<$temp_transport...
  } else {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).temp_transportVars ?? 0)?.['price']) === 0) {
      // TODO-QSP: dynamic "act 'Buy a ticket to <<$temp_transportVars['name']>> (<font color=""red""><<$temp_transport...
    } else {
      // TODO-QSP: dynamic "
      // TODO-QSP: act 'Buy a ticket to <<$temp_transportVars['name']>> (<<$temp_transportVars['time']>> - <<$func('mon...
      // TODO-QSP: gs 'money', 'pay', <<temp_transportVars['price']>>
      // TODO-QSP: gt 'metro', '<<$temp_transportVars['origin']>>_<<$temp_transportVars['destination']>>'
    }
    // TODO-QSP: "
  }
  // TODO-QSP: end
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetMetroWaitTime(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length <= 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).daystart ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).hour ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 4) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[4] = ((s as any).minut ?? 0);
  }
  ((s as any).transportVars = (s as any).transportVars ?? {})['metro_wait_suburbs'] = 0;
  ((s as any).transportVars = (s as any).transportVars ?? {})['metro_wait_island'] = 0;
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut'] = ((s as any).locArgs?.[3] ?? 0) * 60 + ((s as any).locArgs?.[4] ?? 0);
  if (((s as any).locArgs?.[1] ?? 0) !== 'suburbs') {
    ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut_island'] = (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0) - qspFunc(s, 'transport_functions', 'get_metro_timecost', 'island', ((s as any).locArgs?.[1] ?? 0));
    if (((s as any).temp_transportVars ?? 0)?.['totminut_island'] > 1429  ||  ((s as any).temp_transportVars ?? 0)?.['totminut_island'] <= 244) {
      ((s as any).transportVars = (s as any).transportVars ?? {})['metro_wait_suburbs'] = (1684 - (((s as any).temp_transportVars ?? {})?.['totminut_island'] ?? 0)) % 1440;
    } else {
      ((s as any).transportVars = (s as any).transportVars ?? {})['metro_wait_suburbs'] = (1684 - (((s as any).temp_transportVars ?? {})?.['totminut_island'] ?? 0)) % 5;
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 'island') {
    ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['totminut_suburbs'] = (((s as any).temp_transportVars ?? {})?.['totminut'] ?? 0) - qspFunc(s, 'transport_functions', 'get_metro_timecost', 'suburbs', ((s as any).locArgs?.[1] ?? 0));
    if (((s as any).temp_transportVars ?? 0)?.['totminut_suburbs'] > 1426  ||  ((s as any).temp_transportVars ?? 0)?.['totminut_suburbs'] <= 241) {
      ((s as any).transportVars = (s as any).transportVars ?? {})['metro_wait_island'] = (1681 - (((s as any).temp_transportVars ?? {})?.['totminut_suburbs'] ?? 0)) % 1440;
    } else {
      ((s as any).transportVars = (s as any).transportVars ?? {})['metro_wait_island'] = (1681 - (((s as any).temp_transportVars ?? {})?.['totminut_suburbs'] ?? 0)) % 5;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayMetropassTime(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'You have ' + (((s as any).transportVars ?? {})?.['metropass_day'] ?? 0) - ((s as any).daystart ?? 0) + ' days left on your metro pass.';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayMetroTimecost(s: GameState, scene: SceneBuilder): void {
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['origin'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['destination'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', ((s as any).dtemp_transportVars ?? 0)?.['origin'], ((s as any).dtemp_transportVars ?? 0)?.['destination']);
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = ((s as any).dtemp_transportVars['minutes'] ?? 0) + (qspFunc(s, 'transport_functions', 'get_metro_waitcost', ((s as any).dtemp_transportVars ?? 0)?.['origin'], ((s as any).dtemp_transportVars ?? 0)?.['destination']));
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['hours'] = (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0) / 60;
  ((s as any).dtemp_transportVars = (s as any).dtemp_transportVars ?? {})['minutes'] = (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0) % 60;
  (s as any).result = '' + ((s as any).dtemp_transportVars ?? 0)?.['hours'] + ':' + (String(String(100 + (((s as any).dtemp_transportVars ?? {})?.['minutes'] ?? 0))).slice((2)-1, ((2)-1)+(2))) + '';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayMetroSchedule(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_border[0] = '<td style="border-bottom:2px solid black"></td>'
  // TODO-QSP: $temp_border[1] = '<td style="border-bottom:2px solid black; border-right:2px solid black"></td>'
  // TODO-QSP: $temp_border[2] = '<td style="border-bottom:2px solid black; border-right:2px solid black; border-le...
  // TODO-QSP: $temp_border[3] = '<td style="border-bottom:1px solid black"></td>'
  // TODO-QSP: $temp_border[4] = '<td style="border-bottom:1px solid black; border-right:2px solid black; border-le...
  if (((s as any).locArgs?.[1] ?? 0) === 'si') {
    (s as any).metro_schedule = '<center><h2>Suburbs - University</h2></center>';
    // TODO-QSP: $metro_schedule += '<br><center><table style="text-align:center" cellspacing="0" cellpadding="3">'
    // TODO-QSP: $metro_schedule += '<tr><th style="border-right:2px solid black">Suburbs</th><th style="border-right...
    // TODO-QSP: $metro_schedule += '<tr>' + $temp_border[1] + $temp_border[1] + $temp_border[1] + $temp_border[1] + ...
    ((s as any).th = (s as any).th ?? {})[0] = 4;
    // TODO-QSP: :metro_schedule_loop1
    // TODO-QSP: $th[1] = $mid(100 + th[0], 2, 2)
    // TODO-QSP: $th[2] = $mid(100 + th[0] + 1, 2, 2)
    ((s as any).th = (s as any).th ?? {})[3] = ((s as any).th ?? 0)[0] + 10;
    // TODO-QSP: $th[4] = $mid(100 + th[3], 2, 2)
    // TODO-QSP: $th[5] = $mid(100 + th[3] + 1, 2, 2)
    if (((s as any).th ?? 0)[3] === 23) {
      ((s as any).th = (s as any).th ?? {})[5] = '00';
    }
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:01</td><td><<$th[1]>>:04</td><td><<$th[1]>>:12</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:01</td><td><<$th[4]>>:04</td><td><<$th[4]>>:12</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:06</td><td><<$th[1]>>:09</td><td><<$th[1]>>:17</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:06</td><td><<$th[4]>>:09</td><td><<$th[4]>>:17</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:11</td><td><<$th[1]>>:14</td><td><<$th[1]>>:22</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:11</td><td><<$th[4]>>:14</td><td><<$th[4]>>:22</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:16</td><td><<$th[1]>>:19</td><td><<$th[1]>>:27</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:16</td><td><<$th[4]>>:19</td><td><<$th[4]>>:27</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:21</td><td><<$th[1]>>:24</td><td><<$th[1]>>:32</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:21</td><td><<$th[4]>>:24</td><td><<$th[4]>>:32</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:26</td><td><<$th[1]>>:29</td><td><<$th[1]>>:37</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:26</td><td><<$th[4]>>:29</td><td><<$th[4]>>:37</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:31</td><td><<$th[1]>>:34</td><td><<$th[1]>>:42</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:31</td><td><<$th[4]>>:34</td><td><<$th[4]>>:42</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:36</td><td><<$th[1]>>:39</td><td><<$th[1]>>:47</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:36</td><td><<$th[4]>>:39</td><td><<$th[4]>>:47</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:41</td><td><<$th[1]>>:44</td><td><<$th[1]>>:52</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:41</td><td><<$th[4]>>:44</td><td><<$th[4]>>:52</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:46</td><td><<$th[1]>>:49</td><td><<$th[1]>>:57</td><td><<$th[2...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:46</td><td><<$th[4]>>:49</td><td><<$th[4]>>:57</td><td><<$th[5...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    if (((s as any).th ?? 0)[3] !== 23) {
      // TODO-QSP: $metro_schedule +=  '<tr>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:51</td><td><<$th[1]>>:54</td><td><<$th[2]>>:02</td><td><<$th[2...
      // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:51</td><td><<$th[4]>>:54</td><td><<$th[5]>>:02</td><td><<$th[5...
      // TODO-QSP: $metro_schedule +=  '</tr>'
      // TODO-QSP: $metro_schedule +=  '<tr>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:56</td><td><<$th[1]>>:59</td><td><<$th[2]>>:07</td><td><<$th[2...
      // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:56</td><td><<$th[4]>>:59</td><td><<$th[5]>>:07</td><td><<$th[5...
      // TODO-QSP: $metro_schedule +=  '</tr>'
    } else {
      // TODO-QSP: $metro_schedule +=  '<tr>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:51</td><td><<$th[1]>>:54</td><td><<$th[2]>>:02</td><td><<$th[2...
      // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $metro_schedule +=    '<td colspan=6></td>'
      // TODO-QSP: $metro_schedule +=  '</tr>'
      // TODO-QSP: $metro_schedule +=  '<tr>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:56</td><td><<$th[1]>>:59</td><td><<$th[2]>>:07</td><td><<$th[2...
      // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $metro_schedule +=    '<td colspan=6></td>'
      // TODO-QSP: $metro_schedule +=  '</tr>'
    }
    // TODO-QSP: $metro_schedule += '<tr>' + $temp_border[3] + $temp_border[3] + $temp_border[3] + $temp_border[3] + ...
    ((s as any).th = (s as any).th ?? {})[0] = ((s as any).th[0] ?? 0) + (1);
    if (((s as any).th ?? 0)[0] < 14) {
      // TODO-QSP: jump 'metro_schedule_loop1'
    }
  } else {
    (s as any).metro_schedule = '<center><h2>University - Suburbs</h2></center>';
    // TODO-QSP: $metro_schedule += '<br><center><table style="text-align:center" cellspacing="0" cellpadding="3">'
    // TODO-QSP: $metro_schedule += '<tr><th style="border-right:2px solid black">University</th><th style="border-ri...
    // TODO-QSP: $metro_schedule += '<tr>' + $temp_border[1] + $temp_border[1] + $temp_border[1] + $temp_border[1] + ...
    ((s as any).th = (s as any).th ?? {})[0] = 4;
    // TODO-QSP: :metro_schedule_loop2
    // TODO-QSP: $th[1] = $mid(100 + th[0], 2, 2)
    // TODO-QSP: $th[2] = $mid(100 + th[0] + 1, 2, 2)
    ((s as any).th = (s as any).th ?? {})[3] = ((s as any).th ?? 0)[0] + 10;
    // TODO-QSP: $th[4] = $mid(100 + th[3], 2, 2)
    // TODO-QSP: $th[5] = $mid(100 + th[3] + 1, 2, 2)
    if (((s as any).th ?? 0)[3] === 23) {
      ((s as any).th = (s as any).th ?? {})[5] = '00';
    }
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:04</td><td><<$th[1]>>:09</td><td><<$th[1]>>:13</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:04</td><td><<$th[4]>>:09</td><td><<$th[4]>>:13</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:09</td><td><<$th[1]>>:14</td><td><<$th[1]>>:18</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:09</td><td><<$th[4]>>:14</td><td><<$th[4]>>:18</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:14</td><td><<$th[1]>>:19</td><td><<$th[1]>>:23</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:14</td><td><<$th[4]>>:19</td><td><<$th[4]>>:23</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:19</td><td><<$th[1]>>:24</td><td><<$th[1]>>:28</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:19</td><td><<$th[4]>>:24</td><td><<$th[4]>>:28</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:24</td><td><<$th[1]>>:29</td><td><<$th[1]>>:33</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:24</td><td><<$th[4]>>:29</td><td><<$th[4]>>:33</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:29</td><td><<$th[1]>>:34</td><td><<$th[1]>>:38</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:29</td><td><<$th[4]>>:34</td><td><<$th[4]>>:38</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:34</td><td><<$th[1]>>:39</td><td><<$th[1]>>:43</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:34</td><td><<$th[4]>>:39</td><td><<$th[4]>>:43</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:39</td><td><<$th[1]>>:44</td><td><<$th[1]>>:48</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:39</td><td><<$th[4]>>:44</td><td><<$th[4]>>:48</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:44</td><td><<$th[1]>>:49</td><td><<$th[1]>>:53</td><td><<$th[1...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:44</td><td><<$th[4]>>:49</td><td><<$th[4]>>:53</td><td><<$th[4...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    // TODO-QSP: $metro_schedule +=  '<tr>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:49</td><td><<$th[1]>>:54</td><td><<$th[1]>>:58</td><td><<$th[2...
    // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
    // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:49</td><td><<$th[4]>>:54</td><td><<$th[4]>>:58</td><td><<$th[5...
    // TODO-QSP: $metro_schedule +=  '</tr>'
    if (((s as any).th ?? 0)[3] !== 23) {
      // TODO-QSP: $metro_schedule +=  '<tr>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:54</td><td><<$th[1]>>:59</td><td><<$th[2]>>:03</td><td><<$th[2...
      // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:54</td><td><<$th[4]>>:59</td><td><<$th[5]>>:03</td><td><<$th[5...
      // TODO-QSP: $metro_schedule +=  '</tr>'
      // TODO-QSP: $metro_schedule +=  '<tr>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:59</td><td><<$th[2]>>:04</td><td><<$th[2]>>:08</td><td><<$th[2...
      // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[4]>>:59</td><td><<$th[5]>>:04</td><td><<$th[5]>>:08</td><td><<$th[5...
      // TODO-QSP: $metro_schedule +=  '</tr>'
    } else {
      // TODO-QSP: $metro_schedule +=  '<tr>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:54</td><td><<$th[1]>>:59</td><td><<$th[2]>>:03</td><td><<$th[2...
      // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $metro_schedule +=    '<td colspan=6></td>'
      // TODO-QSP: $metro_schedule +=  '</tr>'
      // TODO-QSP: $metro_schedule +=  '<tr>'
      // TODO-QSP: $metro_schedule +=    '<td><<$th[1]>>:59</td><td><<$th[2]>>:04</td><td><<$th[2]>>:08</td><td><<$th[2...
      // TODO-QSP: $metro_schedule +=    '<td style="border-right:2px solid black; border-left:2px solid black"> </td>'
      // TODO-QSP: $metro_schedule +=    '<td colspan=6></td>'
      // TODO-QSP: $metro_schedule +=  '</tr>'
    }
    // TODO-QSP: $metro_schedule += '<tr>' + $temp_border[3] + $temp_border[3] + $temp_border[3] + $temp_border[3] + ...
    ((s as any).th = (s as any).th ?? {})[0] = ((s as any).th[0] ?? 0) + (1);
    if (((s as any).th ?? 0)[0] < 14) {
      // TODO-QSP: jump 'metro_schedule_loop2'
    }
  }
  // TODO-QSP: $metro_schedule += '</table></center>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetMetroPrice(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'transport_functions', '_private_metro_price', ((s as any).locArgs?.[2] ?? 0)) - qspFunc(s, 'transport_functions', '_private_metro_price', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).result ?? 0) < 0) {
    // TODO-QSP: result *= -1
  }
  (s as any).result = ((s as any).result ?? 0) + (5);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPrivateMetroPrice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'suburbs') {
    (s as any).result = 0;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'industrial') {
      (s as any).result = 5;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'residential') {
        (s as any).result = 10;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'artisan') {
          (s as any).result = 15;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'center') {
            (s as any).result = 20;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'island') {
              (s as any).result = 25;
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

function enterGetMetroTimecost(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'transport_functions', '_private_metro_time', ((s as any).locArgs?.[2] ?? 0)) - qspFunc(s, 'transport_functions', '_private_metro_time', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).result ?? 0) < 0) {
    // TODO-QSP: result *= -1
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPrivateMetroTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'suburbs') {
    (s as any).result = 0;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'industrial') {
      (s as any).result = 3;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'residential') {
        (s as any).result = 11;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'artisan') {
          (s as any).result = 16;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'center') {
            (s as any).result = 20;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'island') {
              (s as any).result = 25;
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

function enterGetMetroWaitcost(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'transport_functions', '_private_metro_time', ((s as any).locArgs?.[2] ?? 0)) > qspFunc(s, 'transport_functions', '_private_metro_time', ((s as any).locArgs?.[1] ?? 0))) {
    (s as any).result = ((s as any).transportVars ?? 0)?.['metro_wait_island'];
  } else {
    (s as any).result = ((s as any).transportVars ?? 0)?.['metro_wait_suburbs'];
  }
  return;
  // TODO-QSP: end
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
    case 'set_train_wait_time':
      enterSetTrainWaitTime(s, scene);
      break;
    case 'display_trainpass_time':
      enterDisplayTrainpassTime(s, scene);
      break;
    case 'display_train_timecost':
      enterDisplayTrainTimecost(s, scene);
      break;
    case 'display_train_schedule':
      enterDisplayTrainSchedule(s, scene);
      break;
    case 'get_train_price':
      enterGetTrainPrice(s, scene);
      break;
    case '_private_train_price':
      enterPrivateTrainPrice(s, scene);
      break;
    case 'get_train_timecost':
      enterGetTrainTimecost(s, scene);
      break;
    case '_private_train_time':
      enterPrivateTrainTime(s, scene);
      break;
    case 'get_train_waitcost':
      enterGetTrainWaitcost(s, scene);
      break;
    case 'buy_bus_pass':
      enterBuyBusPass(s, scene);
      break;
    case 'buy_bus_ticket':
      enterBuyBusTicket(s, scene);
      break;
    case 'set_bus_ticket':
      enterSetBusTicket(s, scene);
      break;
    case 'set_bus_wait_time':
      enterSetBusWaitTime(s, scene);
      break;
    case 'display_buspass_time':
      enterDisplayBuspassTime(s, scene);
      break;
    case 'display_bus_timecost':
      enterDisplayBusTimecost(s, scene);
      break;
    case 'display_bus_schedule':
      enterDisplayBusSchedule(s, scene);
      break;
    case 'get_bus_price':
      enterGetBusPrice(s, scene);
      break;
    case '_private_bus_price':
      enterPrivateBusPrice(s, scene);
      break;
    case 'get_bus_timecost':
      enterGetBusTimecost(s, scene);
      break;
    case '_private_bus_time':
      enterPrivateBusTime(s, scene);
      break;
    case 'get_bus_waitcost':
      enterGetBusWaitcost(s, scene);
      break;
    case 'buy_metro_pass':
      enterBuyMetroPass(s, scene);
      break;
    case 'buy_metro_ticket':
      enterBuyMetroTicket(s, scene);
      break;
    case 'set_metro_ticket':
      enterSetMetroTicket(s, scene);
      break;
    case 'set_metro_wait_time':
      enterSetMetroWaitTime(s, scene);
      break;
    case 'display_metropass_time':
      enterDisplayMetropassTime(s, scene);
      break;
    case 'display_metro_timecost':
      enterDisplayMetroTimecost(s, scene);
      break;
    case 'display_metro_schedule':
      enterDisplayMetroSchedule(s, scene);
      break;
    case 'get_metro_price':
      enterGetMetroPrice(s, scene);
      break;
    case '_private_metro_price':
      enterPrivateMetroPrice(s, scene);
      break;
    case 'get_metro_timecost':
      enterGetMetroTimecost(s, scene);
      break;
    case '_private_metro_time':
      enterPrivateMetroTime(s, scene);
      break;
    case 'get_metro_waitcost':
      enterGetMetroWaitcost(s, scene);
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
  description: ['Transport Functions'],
  enter: enter,
};
