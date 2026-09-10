import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterOutside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'outside');
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
    // TODO-QSP: dynamic text: In the parking lot is <a href="exec:gs 'carF', 'start'">your <<$car['name']>></a...
    scene.text(`In the parking lot is <a href="exec:gs 'carF', 'start'">your ${((s as any).car ?? 0)?.['name']}</a>.`);
  }
  // TODO-QSP: dynamic text: There is a path leading off in to the distance, in the direction of the <a href=...
  scene.text('There is a path leading off in to the distance, in the direction of the <a href="exec:minut += 60 & gt \'city_lake\', \'start\'">lake</a>.');
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
    // TODO-QSP: $func('transport_functions', 'display_trainpass_time')
    scene.actions([
      { label: 'Take a train to the city center (<<func(\'transport_functions\', \'display_train_timecost\', \'industrial\', \'center\')>>)', goto: ['train', 'industrial_center'] },
      { label: 'Take a train to the old platform by the communal village (<<func(\'transport_functions\', \'display_train_timecost\', \'industrial\', \'communal\')>>)', goto: ['train', 'industrial_communal'] },
      { label: 'Take a train to the village of Gadukino (<<func(\'transport_functions\', \'display_train_timecost\', \'industrial\', \'gadukino\')>>)', goto: ['train', 'industrial_gadukino'] },
      { label: 'Take a train to Pavlovsk (<<func(\'transport_functions\', \'display_train_timecost\', \'industrial\', \'pavlovsk\')>>)', goto: ['train', 'industrial_pavlovsk'] },
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
    qspCall(s, 'transport_functions', 'display_train_schedule');
    qspCall(s, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['city_industrial_train', 'inside'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTicket(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([{ label: 'Continue', goto: ['city_industrial_train', 'inside'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'ticket');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Train station</b></center>');
  scene.text('<center><b>Industrial center</b></center>');
  scene.img('images/locations/pavlovsk/trainstation/ticketoffice.jpg');
  scene.text('The ticket office at the industrial train station.');
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'industrial');
  // TODO-QSP: 'The next train in the direction of the city center ' + iif(transportVars['train_wait_center'] = 0, ...
  // TODO-QSP: 'The next train in the direction of Pavlovsk ' + iif(transportVars['train_wait_pavlovsk'] = 0, 'is l...
  qspCall(s, 'transport_functions', 'buy_train_ticket', 'industrial');
  qspCall(s, 'transport_functions', 'buy_train_pass');
  scene.actions([
    { label: 'Leave the ticket office (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_industrial_train', 'inside'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_train_schedule');
    qspCall(s, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['city_industrial_train', 'ticket'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_industrial_train', 'toilet');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    // TODO-QSP: act 'Brush your hair': gt 'mirror', 'brush'
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
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
      enterOutside(s, scene);
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
