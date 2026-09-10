import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetMetroImage(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.build();
}

function enterCheckEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).workDisk ?? 0) === 3  &&  ((s as any).konvert ?? 0) === 1) {
    if (Math.floor(Math.random() * 101) + 0 >= 80) {
      (s as any).konvert = 0;
    }
  }
  if (((s as any).pusher ?? 0) === 1  &&  ((s as any).dealer ?? 0) === 0) {
    scene.text('You see a tall, emaciated man leaning against the wall next to the tracks, looking very shady. He notices you looking and beckons you to come closer.');
    scene.actions([
      { label: 'Talk to the man', goto: ['metro', 'dealer'] },
    ]);
  } else {
    scene.text('You see the dealer lurking around the station.');
    scene.actions([
      { label: 'Buy drugs', goto: ['metro', 'shop'] },
    ]);
  }
  scene.build();
}

function enterIsland(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'island');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Vasilyevsky Island</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Vasilyevsky island metro station');
  qspCall(s, 'transport_functions', 'set_metro_wait_time', 'island');
  if (((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the metro. The next one arrives in <<transportVars['metro_...
    scene.text(`It's too late to take the metro. The next one arrives in ${((s as any).transportVars ?? 0)?.['metro_wait_suburbs']/60} hours`);
  } else {
    // TODO-QSP: 'The next metro in the direction of the Suburbs ' + iif(transportVars['metro_wait_suburbs'] = 0, 'is...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['metropass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['metro', 'island_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_metropass_time')
      scene.actions([
        { label: 'Take the metro to the city center (<<func(\'transport_functions\', \'display_metro_timecost\', \'island\', \'center\')>>)', goto: ['metro', 'island_center'] },
        { label: 'Take the metro to the Residential district (<<func(\'transport_functions\', \'display_metro_timecost\', \'island\', \'residential\')>>)', goto: ['metro', 'island_residential'] },
        { label: 'Take the metro to the Industrial district (<<func(\'transport_functions\', \'display_metro_timecost\', \'island\', \'industrial\')>>)', goto: ['metro', 'island_industrial'] },
        { label: 'Take the metro to the Suburbs (<<func(\'transport_functions\', \'display_metro_timecost\', \'island\', \'suburbs\')>>)', goto: ['metro', 'island_suburbs'] },
      ]);
    }
  }
  qspCall(s, 'metro', 'check_events');
  if (((s as any).locArgs?.[0] ?? 0) === 'island_tickets') {
    if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['metropass_day']) {
      scene.actions([{ label: 'Continue', goto: ['metro', 'island'] }]);
    }
    qspCall(s, 'core_library', 'setloc', 'metro', 'island_tickets');
    scene.text('<center><b>Metro station</b></center>');
    scene.text('<center><b>Vasilyevsky Island</b></center>');
    scene.img('images/locations/city/shared/metro/platisland.jpg');
    scene.text('The Vasilyevsky island ticket machine');
    qspCall(s, 'transport_functions', 'buy_metro_ticket', 'island', 'is');
    qspCall(s, 'transport_functions', 'buy_metro_pass');
    scene.actions([
      { label: 'Leave the ticket office', goto: ['metro', 'island'] },
      { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'island_tickets'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Walk to the Vasilyevsky island (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'island'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_metro_image':
      enterGetMetroImage(s, scene);
      break;
    case 'check_events':
      enterCheckEvents(s, scene);
      break;
    case 'island':
      enterIsland(s, scene);
      break;
    default:
      enterGetMetroImage(s, scene);
      break;
  }
}

export const metro: LocationDef = {
  name: 'metro',
  title: 'Metro station',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
