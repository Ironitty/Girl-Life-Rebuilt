import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'center');
  qspCall(s, 'stat', '');
  scene.text('<center><b>City Center Train Station</b></center>');
  scene.img('images/locations/city/shared/trainstation/central_station_inside.jpg');
  scene.text('The grand old station in the city center is an impressive building. It is busy and has a number of shops and bars.');
  if (qspFunc(s, 'car_funcs', 'is_here', 'city_center', '')) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'carF','start'">Your <<$car['name']>></a> is in the parking lot...
    scene.text(`<a href="exec:gs 'carF','start'">Your ${((s as any).car ?? 0)?.['name']}</a> is in the parking lot.`);
  }
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Go to the ticket office', goto: ['train', 'center_tickets'] },
    ]);
  } else {
    // TODO-QSP: $func('transport_functions', 'display_trainpass_time')
    scene.actions([
      { label: 'Take a train to the city industrial area (<<func(\'transport_functions\', \'display_train_timecost\', \'center\', \'industrial\')>>)', goto: ['train', 'center_industrial'] },
      { label: 'Take a train to the old platform by the communal village (<<func(\'transport_functions\', \'display_train_timecost\', \'center\', \'communal\')>>)', goto: ['train', 'center_communal'] },
      { label: 'Take a train to the village of Gadukino (<<func(\'transport_functions\', \'display_train_timecost\', \'center\', \'gadukino\')>>)', goto: ['train', 'center_gadukino'] },
      { label: 'Take a train to Pavlovsk (<<func(\'transport_functions\', \'display_train_timecost\', \'center\', \'pavlovsk\')>>)', goto: ['train', 'center_pavlovsk'] },
    ]);
  }
  scene.actions([
    { label: 'Walk to the city center (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_train_schedule');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'center'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCenterTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([{ label: 'Continue', goto: ['train', 'center'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'train', 'center_tickets');
  qspCall(s, 'stat', '');
  scene.text('<center><b>City Center Train Station</b></center>');
  scene.img('images/locations/shared/train/kassa.jpg');
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'center');
  // TODO-QSP: 'The next train in the direction of Pavlovsk ' + iif(transportVars['train_wait_pavlovsk'] = 0, 'is l...
  qspCall(s, 'transport_functions', 'buy_train_ticket', 'center');
  qspCall(s, 'transport_functions', 'buy_train_pass');
  scene.actions([
    { label: 'Leave the ticket office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['train', 'center'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_train_schedule');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'center_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'train', 'communal');
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
      { label: 'Take a train to St. Petersburg city center (<<func(\'transport_functions\', \'display_train_timecost\', \'communal\', \'center\')>>)', goto: ['train', 'communal_center'] },
      { label: 'Take a train to St. Petersburg city industrial area (<<func(\'transport_functions\', \'display_train_timecost\', \'communal\', \'industrial\')>>)', goto: ['train', 'communal_industrial'] },
      { label: 'Take a train to the village of Gadukino (<<func(\'transport_functions\', \'display_train_timecost\', \'communal\', \'gadukino\')>>)', goto: ['train', 'communal_gadukino'] },
      { label: 'Take a train to Pavlovsk (<<func(\'transport_functions\', \'display_train_timecost\', \'communal\', \'pavlovsk\')>>)', goto: ['train', 'communal_pavlovsk'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'communal_tickets') {
    if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
      scene.actions([{ label: 'Continue', goto: ['train', 'communal'] }]);
    }
    qspCall(s, 'core_library', 'setloc', 'train', 'communal_tickets');
    scene.text('<center><b>Train station</b></center>');
    scene.text('<center><b>Communal village</b></center>');
    scene.img('images/locations/shared/train/oldplat.jpg');
    scene.text('The ticket machine near the communal village');
    qspCall(s, 'transport_functions', 'buy_train_ticket', 'communal');
    scene.actions([
      { label: 'Leave the ticket office', goto: ['train', 'communal'] },
      { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_train_schedule');
    qspCall(s, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'communal_tickets'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Return to the road', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '5'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_train_schedule');
    qspCall(s, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['train', 'communal'] },
    ]);
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
