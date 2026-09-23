import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'center');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>City Center Train Station</b></center>');
  scene.img('images/locations/city/shared/trainstation/central_station_inside.jpg');
  scene.text('The grand old station in the city center is an impressive building. It is busy and has a number of shops and bars.');
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_center', '')) {
    // TODO-QSP: dynamic text: <a href="exec:gs ''carF'',''start''">Your <<$car[''name'']>></a> is in the parki...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">Your ${((s as any).car ?? 0)?.['name'] ?? ''}</a> is in the parking lot.`);
  }
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Go to the ticket office', goto: ['train', 'center_tickets'] },
    ]);
  } else {
    // TODO-QSP: $func('transport_functions', 'display_trainpass_time')
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Take a train to the city industrial area (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'center', 'industrial') ?? '') + ')', goto: ['train', 'center_industrial'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to the old platform by the communal village (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'center', 'communal') ?? '') + ')', goto: ['train', 'center_communal'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to the village of Gadukino (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'center', 'gadukino') ?? '') + ')', goto: ['train', 'center_gadukino'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to Pavlovsk (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'center', 'pavlovsk') ?? '') + ')', goto: ['train', 'center_pavlovsk'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to the city center (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'center'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCenterTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    qspGoto(s, 'train', 'center');
  }
  qspCall(s, 'core_library', 'setloc', 'train', 'center_tickets');
  qspCall(s, 'stat', '');
  scene.text('<center><b>City Center Train Station</b></center>');
  scene.img('images/locations/shared/train/kassa.jpg');
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'center');
  // TODO-QSP: 'The next train in the direction of Pavlovsk ' + iif(transportVars['train_wait_pavlovsk'] = 0, 'is l...
  qspCall(s, 'transport_functions', 'buy_train_ticket', 'center');
  qspCall(s, 'transport_functions', 'buy_train_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['train', 'center'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'center_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'communal');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Communal Village Train Station</b></center>');
  scene.img('images/locations/shared/train/oldplat.jpg');
  scene.text('An old railway platform, which looks like it was abandoned. The sign is no longer legible, but there\'s a hand painted sign from the communal cottages not too far away.');
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'communal');
  // TODO-QSP: 'The next train in the direction of St. Petersburg city center ' + iif(transportVars['train_wait_cen...
  // TODO-QSP: 'The next train in the direction of Pavlovsk ' + iif(transportVars['train_wait_pavlovsk'] = 0, 'is l...
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Buy a ticket', goto: ['train', 'communal_tickets'] },
    ]);
  } else {
    // TODO-QSP: $func('transport_functions', 'display_trainpass_time')
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Take a train to St. Petersburg city center (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'communal', 'center') ?? '') + ')', goto: ['train', 'communal_center'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to St. Petersburg city industrial area (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'communal', 'industrial') ?? '') + ')', goto: ['train', 'communal_industrial'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to the village of Gadukino (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'communal', 'gadukino') ?? '') + ')', goto: ['train', 'communal_gadukino'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to Pavlovsk (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'communal', 'pavlovsk') ?? '') + ')', goto: ['train', 'communal_pavlovsk'] },
    ]);
  }
  scene.actions([
    { label: 'Return to the road', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '5'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule');
    qspCall(st, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'communal'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCommunalTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    qspGoto(s, 'train', 'communal');
  }
  qspCall(s, 'core_library', 'setloc', 'train', 'communal_tickets');
  scene.text('<center><b>Train station</b></center>');
  scene.text('<center><b>Communal village</b></center>');
  scene.img('images/locations/shared/train/oldplat.jpg');
  scene.text('The ticket machine near the communal village');
  qspCall(s, 'transport_functions', 'buy_train_ticket', 'communal');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['train', 'communal'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule');
    qspCall(st, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'communal_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'gadukino');
  (s as any).location_type = 'public_outdoors';
  (s as any).display_bb = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Gadukino Train Station</b></center>');
  scene.img('images/locations/shared/train/gadplat.jpg');
  scene.text('A fairly nondescript railway platform. The small village of Gadukino where your grandparents reside is not far from here.');
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'gadukino');
  // TODO-QSP: 'The next train in the direction of Pavlovsk ' + iif(transportVars['train_wait_pavlovsk'] = 0, 'is l...
  // TODO-QSP: 'The next train in the direction of St. Petersburg city center ' + iif(transportVars['train_wait_cen...
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Buy a ticket', goto: ['train', 'gadukino_tickets'] },
    ]);
  } else {
    // TODO-QSP: $func('transport_functions', 'display_trainpass_time')
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Take a train to Pavlovsk (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'gadukino', 'pavlovsk') ?? '') + ')', goto: ['train', 'gadukino_pavlovsk'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to the communal village (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'gadukino', 'communal') ?? '') + ')', goto: ['train', 'gadukino_communal'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to St. Petersburg city industrial area (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'gadukino', 'industrial') ?? '') + ')', goto: ['train', 'gadukino_industrial'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to St. Petersburg city center (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'gadukino', 'center') ?? '') + ')', goto: ['train', 'gadukino_center'] },
    ]);
  }
  scene.actions([
    { label: 'Walk to the road (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '10'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule', 'pc');
    qspCall(st, 'transport_functions', 'display_train_schedule');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'gadukino'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGadukinoTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    qspGoto(s, 'train', 'gadukino');
  }
  qspCall(s, 'core_library', 'setloc', 'train', 'gadukino_tickets');
  scene.text('<center><b>Gadukino Train station</b></center>');
  scene.img('images/locations/shared/train/gadplat.jpg');
  scene.text('The station is unmanned, but a machine on the platform allows you to buy tickets.');
  qspCall(s, 'transport_functions', 'buy_train_ticket', 'gadukino', 'pc');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['train', 'gadukino'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule', 'pc');
    qspCall(st, 'transport_functions', 'display_train_schedule');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'gadukino_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCenterIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'inside');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'center');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'center', 'industrial') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'private');
      }
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['rand'] < 45) {
        if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
          qspGoto(s, 'train_events', 'events');
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/indusplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the St. P...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the St. Petersburg city industrial area station.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCenterCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'communal');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'center');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'center', 'communal') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/oldplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes you arrive at an old railway ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes you arrive at an old railway platform near the communal village.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCenterGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'gadukino');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'center');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'center', 'gadukino') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/gadplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the small...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the small station near the village of Gadukino.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) <= 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCenterPavlovsk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', '');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'center');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'center', 'pavlovsk') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'private');
      }
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['rand'] < 55) {
        if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
          qspGoto(s, 'train_events', 'Gopnik');
        }
      } else {
        if (((s as any).temp_transportVars ?? 0)?.['rand'] < 65) {
          if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
            qspGoto(s, 'train_events', 'events');
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/pavplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, you see the town of Pavlovsk...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, you see the town of Pavlovsk approaching. Pavlovsk Castle is an impressive sight, even from a long distance. The train stops at its final destination, a platform in Pavlovsk station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterIndustrialCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'center');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'industrial');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'industrial', 'center') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'private');
      }
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['rand'] < 45) {
        if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
          qspGoto(s, 'train_events', 'events');
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/shared/train/electri_' + rand(...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/shared/train/electri_` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
  scene.text('You pay for the ticket and board the next train going to the city center.');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, you see the office blocks an...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, you see the office blocks and shops at the heart of the city before the train stops at its final destination, the busy station in the city center.`);
  scene.actions([
    { label: 'Get off the train at this station', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterIndustrialCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'communal');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'industrial');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'industrial', 'communal') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/oldplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes you arrive at an old railway ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes you arrive at an old railway platform near the communal village.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterIndustrialGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'gadukino');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'industrial');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'industrial', 'gadukino') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/gadplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the small...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the small station near the village of Gadukino.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterIndustrialPavlovsk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', '');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'industrial');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'industrial', 'pavlovsk') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'private');
      }
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['rand'] < 55) {
        if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
          qspGoto(s, 'train_events', 'Gopnik');
        }
      } else {
        if (((s as any).temp_transportVars ?? 0)?.['rand'] < 65) {
          if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
            qspGoto(s, 'train_events', 'events');
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/pavplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, you see the town of Pavlovsk...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, you see the town of Pavlovsk approaching. Pavlovsk Castle is an impressive sight, even from a long distance. The train stops at its final destination, a platform in Pavlovsk station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCommunalCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'center');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'communal');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'communal', 'center') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/cityplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the St. P...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the St. Petersburg city center station. The large office blocks and shopping centers fill your view.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCommunalIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'inside');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'communal');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'communal', 'industrial') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/indusplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the St. P...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the St. Petersburg city industrial area station.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCommunalGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'gadukino');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'communal');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'communal', 'gadukino') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/gadplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the small...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the small station near the village of Gadukino.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCommunalPavlovsk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', '');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'communal');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'communal', 'pavlovsk') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/pavplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, you see the town of Pavlovsk...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, you see the town of Pavlovsk approaching. Pavlovsk Castle is an impressive sight, even from a long distance. The train stops at its final destination, a platform in Pavlovsk station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGadukinoCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'center');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'gadukino');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'gadukino', 'center') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/cityplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the St. P...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the St. Petersburg city center station. The large office blocks and shopping centers fill your view.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGadukinoIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'inside');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'gadukino');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'gadukino', 'industrial') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/indusplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the St. P...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the St. Petersburg city industrial area station.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGadukinoCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'communal');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'gadukino');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'gadukino', 'communal') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/oldplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, you arrive at an old railway...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, you arrive at an old railway platform near the communal village.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGadukinoPavlovsk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', '');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'gadukino');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'gadukino', 'pavlovsk') + (((s as any).transportVars ?? {})?.['train_wait_pavlovsk'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/pavplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, you see the town of Pavlovsk...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, you see the town of Pavlovsk approaching. Pavlovsk Castle is an impressive sight, even from a long distance. The train stops at its final destination, a platform in Pavlovsk station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavlovskCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'center');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'pavlovsk');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'pavlovsk', 'center') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'private');
      }
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['rand'] < 55) {
        if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
          qspGoto(s, 'train_events', 'Gopnik');
        }
      } else {
        if (((s as any).temp_transportVars ?? 0)?.['rand'] < 65) {
          if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
            qspGoto(s, 'train_events', 'weed');
          }
        } else {
          if (((s as any).temp_transportVars ?? 0)?.['rand'] < 70) {
            if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
              qspGoto(s, 'train_events', 'events');
            }
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/cityplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the St. P...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the St. Petersburg city center station. The large office blocks and shopping centers fill your view.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavlovskIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'inside');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'pavlovsk');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'pavlovsk', 'industrial') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'private');
      }
    } else {
      if (((s as any).temp_transportVars ?? 0)?.['rand'] < 55) {
        if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
          qspGoto(s, 'train_events', 'Gopnik');
        }
      } else {
        if (((s as any).temp_transportVars ?? 0)?.['rand'] < 65) {
          if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
            qspGoto(s, 'train_events', 'events');
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/indusplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the St. P...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the St. Petersburg city industrial area station.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavlovskCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'communal');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'pavlovsk');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'pavlovsk', 'communal') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/oldplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes you arrive at an old railway ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes you arrive at an old railway platform near the communal village.`);
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPavlovskGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'gadukino');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'pavlovsk');
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_train_timecost', 'pavlovsk', 'gadukino') + (((s as any).transportVars ?? {})?.['train_wait_center'] ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars = (s as any).temp_transportVars ?? {})['rand'] = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    qspGoto(s, 'train_incidental', 'events');
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['train_event_day'] !== ((s as any).daystart ?? 0)) {
        qspGoto(s, 'train_events', 'events');
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/train/gadplat.jpg');
  // TODO-QSP: dynamic text: After <<temp_transportVars[''timecost'']>> minutes, the train stops at the small...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost'] ?? ''} minutes, the train stops at the small station near the village of Gadukino.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the train', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      qspGoto(st, 'train_incidental', 'end');
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'center':
      enterCenter(s, scene);
      break;
    case 'center_tickets':
      enterCenterTickets(s, scene);
      break;
    case 'communal':
      enterCommunal(s, scene);
      break;
    case 'communal_tickets':
      enterCommunalTickets(s, scene);
      break;
    case 'gadukino':
      enterGadukino(s, scene);
      break;
    case 'gadukino_tickets':
      enterGadukinoTickets(s, scene);
      break;
    case 'center_industrial':
      enterCenterIndustrial(s, scene);
      break;
    case 'center_communal':
      enterCenterCommunal(s, scene);
      break;
    case 'center_gadukino':
      enterCenterGadukino(s, scene);
      break;
    case 'center_pavlovsk':
      enterCenterPavlovsk(s, scene);
      break;
    case 'industrial_center':
      enterIndustrialCenter(s, scene);
      break;
    case 'industrial_communal':
      enterIndustrialCommunal(s, scene);
      break;
    case 'industrial_gadukino':
      enterIndustrialGadukino(s, scene);
      break;
    case 'industrial_pavlovsk':
      enterIndustrialPavlovsk(s, scene);
      break;
    case 'communal_center':
      enterCommunalCenter(s, scene);
      break;
    case 'communal_industrial':
      enterCommunalIndustrial(s, scene);
      break;
    case 'communal_gadukino':
      enterCommunalGadukino(s, scene);
      break;
    case 'communal_pavlovsk':
      enterCommunalPavlovsk(s, scene);
      break;
    case 'gadukino_center':
      enterGadukinoCenter(s, scene);
      break;
    case 'gadukino_industrial':
      enterGadukinoIndustrial(s, scene);
      break;
    case 'gadukino_communal':
      enterGadukinoCommunal(s, scene);
      break;
    case 'gadukino_pavlovsk':
      enterGadukinoPavlovsk(s, scene);
      break;
    case 'pavlovsk_center':
      enterPavlovskCenter(s, scene);
      break;
    case 'pavlovsk_industrial':
      enterPavlovskIndustrial(s, scene);
      break;
    case 'pavlovsk_communal':
      enterPavlovskCommunal(s, scene);
      break;
    case 'pavlovsk_gadukino':
      enterPavlovskGadukino(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const train: LocationDef = {
  name: 'train',
  title: 'City Center Train Station',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
