import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterOutside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'outside');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Railway station</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img('images/locations/pavlovsk/trainstation/pavtrainstation_winter_day.jpg');
    } else {
      scene.img('images/locations/pavlovsk/trainstation/pavtrainstation_winter_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img('images/locations/pavlovsk/trainstation/pavtrainstation_day.jpg');
    } else {
      scene.img('images/locations/pavlovsk/trainstation/pavtrainstation_night.jpg');
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`In the parking lot is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">your ${(((s as any).car ?? 0)?.['name'] ?? '')}</a>.`);
  }
  scene.text('There is a path leading off in to the distance, in the direction of the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.60; return s; }); window.__gameStore.getState().doGoto(\u0027city_lake\u0027, \u0027start\u0027); return false;">lake</a>.');
  scene.actions([
    { label: 'Walk to the City Industrial Region', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['city_industrial', ''] },
    { label: 'Walk to the lake', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['city_lake', 'start'] },
    { label: 'Enter the station building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_industrial_train', 'inside'] },
  ]);
  scene.build();
}

function enterInside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'inside');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Train station</b></center>');
  scene.text('<center><b>Industrial center</b></center>');
  scene.img('images/locations/shared/train/vokzalholle.jpg');
  scene.text('The grand old station in the industrial center is an impressive building. It is busy and has a number of shops and bars as well as all the platforms and trains.');
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Go to the ticket office', goto: ['city_industrial_train', 'ticket'] },
    ]);
  } else {
    scene.text(qspFunc(s, 'transport_functions', 'display_trainpass_time'));
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Take a train to the city center (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'industrial', 'center') ?? '') + ')', goto: ['train', 'industrial_center'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to the old platform by the communal village (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'industrial', 'communal') ?? '') + ')', goto: ['train', 'industrial_communal'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to the village of Gadukino (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'industrial', 'gadukino') ?? '') + ')', goto: ['train', 'industrial_gadukino'] },
      { label: '', labelFn: (s: GameState) => 'Take a train to Pavlovsk (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'industrial', 'pavlovsk') ?? '') + ')', goto: ['train', 'industrial_pavlovsk'] },
    ]);
  }
  scene.actions([
    { label: 'Leave the station (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_industrial_train', 'outside'] },
    { label: 'Go to the restrooms (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_industrial_train', 'toilet'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule');
    qspCall(st, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['city_industrial_train', 'inside'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTicket(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    qspGoto(s, 'city_industrial_train', 'inside');
  }
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'ticket');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Train station</b></center>');
  scene.text('<center><b>Industrial center</b></center>');
  scene.img('images/locations/pavlovsk/trainstation/ticketoffice.jpg');
  scene.text('The ticket office at the industrial train station.');
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'industrial');
  scene.text('The next train in the direction of the city center ' + ((((s as any).transportVars ?? 0)?.['train_wait_center'] === 0) ? ('is leaving now!') : ('leaves in ' + (((s as any).transportVars ?? 0)?.['train_wait_center'] ?? '') + ' minutes.')));
  scene.text('The next train in the direction of Pavlovsk ' + ((((s as any).transportVars ?? 0)?.['train_wait_pavlovsk'] === 0) ? ('is leaving now!') : ('leaves in ' + (((s as any).transportVars ?? 0)?.['train_wait_pavlovsk'] ?? '') + ' minutes.')));
  qspCall(s, 'transport_functions', 'buy_train_ticket', 'industrial');
  qspCall(s, 'transport_functions', 'buy_train_pass');
  scene.actions([
    { label: 'Leave the ticket office (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_industrial_train', 'inside'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule');
    qspCall(st, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['city_industrial_train', 'ticket'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'toilet');
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'restroom';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  (s as any).temp_transportVars = undefined;
  scene.actions([
    { label: 'Return to the station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_industrial_train', 'inside'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'outside':
      enterOutside(s, scene);
      break;
    case 'inside':
      enterInside(s, scene);
      break;
    case 'ticket':
      enterTicket(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_industrial_train: LocationDef = {
  name: 'city_industrial_train',
  title: 'Train station',
  region: 'city',
  locationType: 'bathroom',
  locclass: 'restroom',
  enter: enter,
};
