import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetMetroImage(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  // TODO-QSP: end
  scene.build();
}

function enterCheckEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).workDisk ?? 0) === 3  &&  ((s as any).konvert ?? 0) === 1) {
    if ((Math.floor(Math.random() * 101) + 0) >= 80) {
      (s as any).konvert = 0;
    }
  }
  if (((s as any).pusher ?? 0) === 1  &&  (!((s as any).dealer ?? 0))) {
    scene.text('You see a tall, emaciated man leaning against the wall next to the tracks, looking very shady. He notices you looking and beckons you to come closer.');
    scene.actions([
      { label: 'Talk to the man', goto: ['metro', 'dealer'] },
    ]);
  } else {
    if (((s as any).dealer ?? 0) !== 0) {
      scene.text('You see the dealer lurking around the station.');
      scene.actions([
        { label: 'Buy drugs', goto: ['metro', 'shop'] },
      ]);
    }
  }
  // TODO-QSP: end
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
    scene.text(`It's too late to take the metro. The next one arrives in ${((s as any).transportVars ?? {})?.['metro_wait_suburbs']/60} hours`);
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

function enterIslandTickets(s: GameState, scene: SceneBuilder): void {
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
  // TODO-QSP: end
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
  scene.build();
}

function enterCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'center');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>City Center</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The city center metro stop');
  qspCall(s, 'transport_functions', 'set_metro_wait_time', 'center');
  if (((s as any).transportVars ?? 0)?.['metro_wait_island'] > 60  &&  ((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the metro. The next one arrives in <<min(transportVars['me...
    scene.text(`It's too late to take the metro. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['metro_wait_island'], ((s as any).transportVars ?? 0)?.['metro_wait_suburbs']) / 60} hours.`);
  } else {
    // TODO-QSP: 'The next metro in the direction of the Vasilyevsky island ' + iif(transportVars['metro_wait_island'...
    // TODO-QSP: 'The next metro in the direction of the suburbs ' + iif(transportVars['metro_wait_suburbs'] = 0, 'is...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['metropass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['metro', 'center_tickets'] },
      ]);
    } else {
      if (((s as any).transportVars ?? 0)?.['metro_wait_island'] <= 60) {
        scene.actions([
          { label: 'Take the metro to the Vasilyevsky island (<<$func(\'transport_functions\', \'display_metro_timecost\', \'center\', \'island\')>>)', goto: ['metro', 'center_island'] },
        ]);
      }
      if (((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] <= 60) {
        scene.actions([
          { label: 'Take the metro to the Residential district (<<$func(\'transport_functions\', \'display_metro_timecost\', \'center\', \'residential\')>>)', goto: ['metro', 'center_residential'] },
          { label: 'Take the metro to the Industrial district (<<$func(\'transport_functions\', \'display_metro_timecost\', \'center\', \'industrial\')>>)', goto: ['metro', 'center_industrial'] },
          { label: 'Take the metro to the Suburbs (<<$func(\'transport_functions\', \'display_metro_timecost\', \'center\', \'suburbs\')>>)', goto: ['metro', 'center_suburbs'] },
        ]);
      }
    }
  }
  qspCall(s, 'metro', 'check_events');
  scene.actions([
    { label: 'Walk to the city center (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'center'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCenterTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['metropass_day']) {
    scene.actions([{ label: 'Continue', goto: ['metro', 'center'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'metro', 'center_tickets');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>City Center</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The city center ticket machine');
  qspCall(s, 'transport_functions', 'buy_metro_ticket', 'center', 'is');
  qspCall(s, 'transport_functions', 'buy_metro_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['metro', 'center'] },
    { label: 'Look at the center schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'center_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtisan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'artisan');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Artisan district</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Artisan district metro stop');
  qspCall(s, 'transport_functions', 'set_metro_wait_time', 'artisan');
  if (((s as any).transportVars ?? 0)?.['metro_wait_island'] > 60  &&  ((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the metro. The next one arrives in <<min(transportVars['me...
    scene.text(`It's too late to take the metro. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['metro_wait_island'], ((s as any).transportVars ?? 0)?.['metro_wait_suburbs']) / 60} hours.`);
  } else {
    // TODO-QSP: 'The next metro in the direction of the Vasilyevsky island ' + iif(transportVars['metro_wait_island'...
    // TODO-QSP: 'The next metro in the direction of the suburbs ' + iif(transportVars['metro_wait_suburbs'] = 0, 'is...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['metropass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['metro', 'artisan_tickets'] },
      ]);
    } else {
      if (((s as any).transportVars ?? 0)?.['metro_wait_island'] <= 60) {
        scene.actions([
          { label: 'Take the metro to the Vasilyevsky island (<<$func(\'transport_functions\', \'display_metro_timecost\', \'artisan\', \'island\')>>)', goto: ['metro', 'artisan_island'] },
          { label: 'Take the metro to the city center (<<$func(\'transport_functions\', \'display_metro_timecost\', \'artisan\', \'center\')>>)', goto: ['metro', 'artisan_center'] },
        ]);
      }
      if (((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] <= 60) {
        scene.actions([
          { label: 'Take the metro to the Residential district (<<$func(\'transport_functions\', \'display_metro_timecost\', \'artisan\', \'residential\')>>)', goto: ['metro', 'artisan_residential'] },
          { label: 'Take the metro to the Industrial district (<<$func(\'transport_functions\', \'display_metro_timecost\', \'artisan\', \'industrial\')>>)', goto: ['metro', 'artisan_industrial'] },
          { label: 'Take the metro to the Suburbs (<<$func(\'transport_functions\', \'display_metro_timecost\', \'artisan\', \'suburbs\')>>)', goto: ['metro', 'artisan_suburbs'] },
        ]);
      }
    }
  }
  qspCall(s, 'metro', 'check_events');
  scene.actions([
    { label: 'Walk to the Artisan district (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_artisan_quarter', 'start'] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'artisan'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtisanTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['metropass_day']) {
    scene.actions([{ label: 'Continue', goto: ['metro', 'artisan'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'metro', 'artisan_tickets');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Artisan district</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Artisan district ticket shop');
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['metropass_day']) {
    qspCall(s, 'transport_functions', 'buy_metro_ticket', 'artisan', 'is');
    qspCall(s, 'transport_functions', 'buy_metro_pass');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['metro', 'artisan'] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'artisan_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterResidential(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'residential');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Residential district</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Residential district metro stop');
  qspCall(s, 'transport_functions', 'set_metro_wait_time', 'residential');
  if (((s as any).transportVars ?? 0)?.['metro_wait_island'] > 60  &&  ((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the metro. The next one arrives in <<min(transportVars['me...
    scene.text(`It's too late to take the metro. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['metro_wait_island'], ((s as any).transportVars ?? 0)?.['metro_wait_suburbs']) / 60} hours.`);
  } else {
    // TODO-QSP: 'The next metro in the direction of the suburbs ' + iif(transportVars['metro_wait_suburbs'] = 0, 'is...
    // TODO-QSP: 'The next metro in the direction of the Vasilyevsky island ' + iif(transportVars['metro_wait_island'...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['metropass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['metro', 'residential_tickets'] },
      ]);
    } else {
      if (((s as any).transportVars ?? 0)?.['metro_wait_island'] <= 60) {
        scene.actions([
          { label: 'Take the metro to the Vasilyevsky island (<<$func(\'transport_functions\', \'display_metro_timecost\', \'residential\', \'island\')>>)', goto: ['metro', 'residential_island'] },
          { label: 'Take the metro to the city center (<<$func(\'transport_functions\', \'display_metro_timecost\', \'residential\', \'center\')>>)', goto: ['metro', 'residential_center'] },
        ]);
      }
      if (((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] <= 60) {
        scene.actions([
          { label: 'Take the metro to the Industrial district (<<$func(\'transport_functions\', \'display_metro_timecost\', \'residential\', \'industrial\')>>)', goto: ['metro', 'residential_industrial'] },
          { label: 'Take the metro to the Suburbs (<<$func(\'transport_functions\', \'display_metro_timecost\', \'residential\', \'suburbs\')>>)', goto: ['metro', 'residential_suburbs'] },
        ]);
      }
    }
  }
  qspCall(s, 'metro', 'check_events');
  scene.actions([
    { label: 'Walk to the Residential district (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'residential'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterResidentialTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['metropass_day']) {
    scene.actions([{ label: 'Continue', goto: ['metro', 'residential'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'metro', 'residential_tickets');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Residential district</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Residential district ticket machine');
  qspCall(s, 'transport_functions', 'buy_metro_ticket', 'residential', 'si');
  qspCall(s, 'transport_functions', 'buy_metro_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['metro', 'residential'] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'residential_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'industrial');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Industrial district</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Industrial district metro stop');
  qspCall(s, 'transport_functions', 'set_metro_wait_time', 'industrial');
  if (((s as any).transportVars ?? 0)?.['metro_wait_island'] > 60  &&  ((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the metro. The next one arrives in <<min(transportVars['me...
    scene.text(`It's too late to take the metro. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['metro_wait_island'], ((s as any).transportVars ?? 0)?.['metro_wait_suburbs']) / 60} hours.`);
  } else {
    // TODO-QSP: 'The next metro in the direction of the suburbs ' + iif(transportVars['metro_wait_suburbs'] = 0, 'is...
    // TODO-QSP: 'The next metro in the direction of the Vasilyevsky island ' + iif(transportVars['metro_wait_island'...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['metropass_day']) {
      qspCall(s, 'transport_functions', 'buy_metro_pass');
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['metro', 'industrial_tickets'] },
      ]);
    } else {
      if (((s as any).transportVars ?? 0)?.['metro_wait_island'] <= 60) {
        scene.actions([
          { label: 'Take the metro to the Vasilyevsky island (<<$func(\'transport_functions\', \'display_metro_timecost\', \'industrial\', \'island\')>>)', goto: ['metro', 'industrial_island'] },
          { label: 'Take the metro to the city center (<<$func(\'transport_functions\', \'display_metro_timecost\', \'industrial\', \'center\')>>)', goto: ['metro', 'industrial_center'] },
          { label: 'Take the metro to the Residential district (<<$func(\'transport_functions\', \'display_metro_timecost\', \'industrial\', \'residential\')>>)', goto: ['metro', 'industrial_residential'] },
        ]);
      }
      if (((s as any).transportVars ?? 0)?.['metro_wait_suburbs'] <= 60) {
        scene.actions([
          { label: 'Take the metro to the Suburbs (<<$func(\'transport_functions\', \'display_metro_timecost\', \'industrial\', \'suburbs\')>>)', goto: ['metro', 'industrial_suburbs'] },
        ]);
      }
    }
  }
  qspCall(s, 'metro', 'check_events');
  scene.actions([
    { label: 'Walk to the Industrial district (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'industrial'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterIndustrialTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['metropass_day']) {
    scene.actions([{ label: 'Continue', goto: ['metro', 'industrial'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'metro', 'industrial_tickets');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Industrial district</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Industrial district ticket machine');
  qspCall(s, 'transport_functions', 'buy_metro_ticket', 'industrial', 'si');
  qspCall(s, 'transport_functions', 'buy_metro_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['metro', 'industrial'] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'is');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'industrial_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'suburbs');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Suburbs</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Suburbs metro stop');
  qspCall(s, 'transport_functions', 'set_metro_wait_time', 'suburbs');
  if (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 23) {
    // TODO-QSP: act 'Walk to the Bus station (0:15)': minut += 15
    scene.actions([{ label: 'Continue', goto: ['bus', 'suburbs'] }]);
  }
  if (((s as any).transportVars ?? 0)?.['metro_wait_island'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the metro. The next one arrives in <<transportVars['metro_...
    scene.text(`It's too late to take the metro. The next one arrives in ${((s as any).transportVars ?? {})?.['metro_wait_island'] / 60} hours`);
  } else {
    // TODO-QSP: 'The next metro in the direction of the Vasilyevsky island ' + iif(transportVars['metro_wait_island'...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['metropass_day']) {
      qspCall(s, 'transport_functions', 'buy_metro_pass');
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['metro', 'suburbs_tickets'] },
      ]);
    } else {
      scene.actions([
        { label: 'Take the metro to the Vasilyevsky island (<<func(\'transport_functions\', \'display_metro_timecost\', \'suburbs\', \'island\')>>)', goto: ['metro', 'suburbs_island'] },
        { label: 'Take the metro to the city center (<<func(\'transport_functions\', \'display_metro_timecost\', \'suburbs\', \'center\')>>)', goto: ['metro', 'suburbs_center'] },
        { label: 'Take the metro to the Residential district (<<func(\'transport_functions\', \'display_metro_timecost\', \'suburbs\', \'residential\')>>)', goto: ['metro', 'suburbs_residential'] },
        { label: 'Take the metro to the Industrial district (<<func(\'transport_functions\', \'display_metro_timecost\', \'suburbs\', \'industrial\')>>)', goto: ['metro', 'suburbs_industrial'] },
      ]);
    }
  }
  qspCall(s, 'metro', 'check_events');
  scene.actions([
    { label: 'Walk to the suburbs (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['city_suburbs', 'start'] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'suburbs'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSuburbsTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['metropass_day']) {
    scene.actions([{ label: 'Continue', goto: ['metro', 'suburbs'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'metro', 'suburbs_tickets');
  scene.text('<center><b>Metro station</b></center>');
  scene.text('<center><b>Suburbs</b></center>');
  scene.img('images/locations/city/shared/metro/platisland.jpg');
  scene.text('The Suburbs ticket machine');
  qspCall(s, 'transport_functions', 'buy_metro_ticket', 'suburbs', 'si');
  qspCall(s, 'transport_functions', 'buy_metro_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['metro', 'suburbs'] },
    { label: 'Look at the metro schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Metro schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_metro_schedule', 'si');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['metro', 'suburbs_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterIslandCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'center');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'island', 'center') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 1;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] <= 9) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).temp_transportVars ?? 0)?.['rand'] <= 16) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the city ce...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the city center metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIslandArtisan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'artisan');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'island', 'artisan') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Artisan...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Artisan district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIslandResidential(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'residential');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'island', 'residential') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Residen...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Residential district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIslandIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'industrial');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'island', 'industrial') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Industr...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Industrial district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIslandSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'suburbs');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'island', 'suburbs') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the suburbs...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the suburbs metro station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCenterIsland(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'island');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'center', 'island') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Vasilye...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Vasilyevsky island metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCenterArtisan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'artisan');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'center', 'artisan') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Artisan...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Artisan district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCenterResidential(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'residential');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'center', 'residential') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Residen...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Residential district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCenterIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'industrial');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'center', 'industrial') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Industr...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Industrial district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCenterSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'suburbs');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'center', 'suburbs') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the suburbs...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the suburbs metro station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterArtisanIsland(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'island');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'artisan', 'island') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Vasilye...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Vasilyevsky island metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterArtisanCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'center');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'artisan', 'center') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the city ce...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the city center metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterArtisanResidential(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'residential');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'artisan', 'residential') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Residen...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Residential district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterArtisanIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'industrial');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'artisan', 'industrial') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Industr...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Industrial district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterArtisanSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'suburbs');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'artisan', 'suburbs') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the suburbs...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the suburbs metro station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterResidentialIsland(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'island');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'residential', 'island') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Vasilye...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Vasilyevsky island metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterResidentialCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'center');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'residential', 'center') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the city ce...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the city center metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterResidentialArtisan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'artisan');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'residential', 'artisan') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Artisan...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Artisan district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterResidentialIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'industrial');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'residential', 'industrial') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Industr...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Industrial district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterResidentialSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'suburbs');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'residential', 'suburbs') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the suburbs...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the suburbs metro station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIndustrialIsland(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'island');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'industrial', 'island') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Vasilye...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Vasilyevsky island metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIndustrialCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'center');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'industrial', 'center') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the city ce...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the city center metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIndustrialArtisan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'artisan');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'industrial', 'artisan') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Artisan...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Artisan district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIndustrialResidential(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'residential');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'industrial', 'residential') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Residen...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Residential district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIndustrialSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'suburbs');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'industrial', 'suburbs') + ((s as any).transportVars ?? {})?.['metro_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the suburbs...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the suburbs metro station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSuburbsIsland(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'island');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'suburbs', 'island') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Vasilye...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Vasilyevsky island metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSuburbsCenter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'center');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'suburbs', 'center') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the city ce...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the city center metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSuburbsArtisan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'artisan');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'industrial', 'artisan') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Artisan...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Artisan district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSuburbsResidential(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'residential');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'industrial', 'residential') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the Residen...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the Residential district metro station.`);
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSuburbsIndustrial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'metro', 'industrial');
  qspCall(s, 'transport_functions', 'set_metro_wait_time');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_metro_timecost', 'suburbs', 'industrial') + ((s as any).transportVars ?? {})?.['metro_wait_island'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['metro_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['metro_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'metro', 'get_metro_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the metro stops at the industr...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the metro stops at the industrial district metro station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the metro', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['metro_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDealer(s: GameState, scene: SceneBuilder): void {
  (s as any).dealer = 1;
  scene.text('He sizes you up with suspicion. "Hey there. Saw you buying Lady in the park." He clears his throat and spits onto the tracks. "That shit will mess you up."');
  scene.text('He opens his coat and you flinch, thinking he\'s going to flash you, but instead see that he\'s wearing a business suit underneath.');
  scene.text('He gestures at numerous pockets lining the insides of his coat, filled to bursting with various packages, pills and ampules. "Here, my products are of a much better quality. You\'ll have a great time, and I guarantee they won\'t kill you."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['metro', 'shop'] },
  ]);
  scene.build();
}

function enterShop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('He shows you a small box filled with red and blue pills. There are about two dozen of each pill inside.');
  if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
    // TODO-QSP: dynamic text: Buy neuroboosters ' + $func('money', 'string_price', 1000) + ' (You do not have ...
    scene.text('Buy neuroboosters \' + $func(\'money\', \'string_price\', 1000) + \' (You do not have enough money)');
  } else {
    // TODO-QSP: '<a href="exec: gs ''money'', ''pay'', 1000, ''cash'' & mc_inventory[''mentats''] += 20 & gt ''metro...
  }
  // TODO-QSP: dynamic text: Uses left: <<mc_inventory['mentats']>>
  scene.text(`Uses left: ${((s as any).mc_inventory ?? 0)?.['mentats']}`);
  scene.text('A pillbox with 10 orange pills inside, the description is removed from the box.');
  if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
    // TODO-QSP: dynamic text: Buy steroids ' + $func('money', 'string_price', 500) + ' (You do not have enough...
    scene.text('Buy steroids \' + $func(\'money\', \'string_price\', 500) + \' (You do not have enough money)');
  } else {
    // TODO-QSP: '<a href="exec: gs ''money'', ''pay'', 500, ''cash'' & mc_inventory[''steroids''] += 10 & gt ''metro...
  }
  // TODO-QSP: dynamic text: Uses left: <<mc_inventory['steroids']>>
  scene.text(`Uses left: ${((s as any).mc_inventory ?? 0)?.['steroids']}`);
  scene.text('Paste tube with two pictures of a woman. In the latter one, she sports an enormous bust.');
  if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
    // TODO-QSP: dynamic text: Buy breast cream ' + $func('money', 'string_price', 500) + ' (You do not have en...
    scene.text('Buy breast cream \' + $func(\'money\', \'string_price\', 500) + \' (You do not have enough money)');
  } else {
    // TODO-QSP: '<a href="exec: gs ''money'', ''pay'', 500, ''cash'' & mc_inventory[''breastcream''] += 5 & gt ''met...
  }
  // TODO-QSP: dynamic text: Uses left: <<mc_inventory['breastcream']>>
  scene.text(`Uses left: ${((s as any).mc_inventory ?? 0)?.['breastcream']}`);
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    scene.text('Packet of pink chewing gum. There are 10 in one package.');
    if (qspFunc(s, 'money', 'can_afford', 200, 'cash') === 0) {
      // TODO-QSP: dynamic text: Buy aphrodisiacs ' + $func('money', 'string_price', 200) + ' (You do not have en...
      scene.text('Buy aphrodisiacs \' + $func(\'money\', \'string_price\', 200) + \' (You do not have enough money)');
    } else {
      // TODO-QSP: '<a href="exec: gs ''money'', ''pay'', 200, ''cash'' & mc_inventory[''aphrodisiac''] += 10 & gt ''me...
    }
    // TODO-QSP: dynamic text: Uses left: <<mc_inventory['aphrodisiac']>>
    scene.text(`Uses left: ${((s as any).mc_inventory ?? 0)?.['aphrodisiac']}`);
  }
  if (qspFunc(s, 'money', 'can_afford', 250, 'cash') === 0) {
    // TODO-QSP: dynamic text: Buy enough weed for 5 joints for ' + $func('money', 'string_price', 250) + ' (Yo...
    scene.text('Buy enough weed for 5 joints for \' + $func(\'money\', \'string_price\', 250) + \' (You do not have enough money)');
  } else {
    // TODO-QSP: 'Buy enough <a href="exec: gs ''money'', ''pay'', 250, ''cash'' & mc_inventory[''joints''] += 5 & gt...
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 1) {
      // TODO-QSP: 'Buy enough <a href="exec: gs ''money'', ''pay'', 500, ''cash'' & mc_inventory[''joints''] += 10 & g...
    }
  }
  // TODO-QSP: end
  if (((s as any).locArgs?.[0] ?? 0) !== 'get_metro_image') {
    // TODO-QSP: killvar 'temp_transportVars'
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
    case 'island_tickets':
      enterIslandTickets(s, scene);
      break;
    case 'center':
      enterCenter(s, scene);
      break;
    case 'center_tickets':
      enterCenterTickets(s, scene);
      break;
    case 'artisan':
      enterArtisan(s, scene);
      break;
    case 'artisan_tickets':
      enterArtisanTickets(s, scene);
      break;
    case 'residential':
      enterResidential(s, scene);
      break;
    case 'residential_tickets':
      enterResidentialTickets(s, scene);
      break;
    case 'industrial':
      enterIndustrial(s, scene);
      break;
    case 'industrial_tickets':
      enterIndustrialTickets(s, scene);
      break;
    case 'suburbs':
      enterSuburbs(s, scene);
      break;
    case 'suburbs_tickets':
      enterSuburbsTickets(s, scene);
      break;
    case 'island_center':
      enterIslandCenter(s, scene);
      break;
    case 'island_artisan':
      enterIslandArtisan(s, scene);
      break;
    case 'island_residential':
      enterIslandResidential(s, scene);
      break;
    case 'island_industrial':
      enterIslandIndustrial(s, scene);
      break;
    case 'island_suburbs':
      enterIslandSuburbs(s, scene);
      break;
    case 'center_island':
      enterCenterIsland(s, scene);
      break;
    case 'center_artisan':
      enterCenterArtisan(s, scene);
      break;
    case 'center_residential':
      enterCenterResidential(s, scene);
      break;
    case 'center_industrial':
      enterCenterIndustrial(s, scene);
      break;
    case 'center_suburbs':
      enterCenterSuburbs(s, scene);
      break;
    case 'artisan_island':
      enterArtisanIsland(s, scene);
      break;
    case 'artisan_center':
      enterArtisanCenter(s, scene);
      break;
    case 'artisan_residential':
      enterArtisanResidential(s, scene);
      break;
    case 'artisan_industrial':
      enterArtisanIndustrial(s, scene);
      break;
    case 'artisan_suburbs':
      enterArtisanSuburbs(s, scene);
      break;
    case 'residential_island':
      enterResidentialIsland(s, scene);
      break;
    case 'residential_center':
      enterResidentialCenter(s, scene);
      break;
    case 'residential_artisan':
      enterResidentialArtisan(s, scene);
      break;
    case 'residential_industrial':
      enterResidentialIndustrial(s, scene);
      break;
    case 'residential_suburbs':
      enterResidentialSuburbs(s, scene);
      break;
    case 'industrial_island':
      enterIndustrialIsland(s, scene);
      break;
    case 'industrial_center':
      enterIndustrialCenter(s, scene);
      break;
    case 'industrial_artisan':
      enterIndustrialArtisan(s, scene);
      break;
    case 'industrial_residential':
      enterIndustrialResidential(s, scene);
      break;
    case 'industrial_suburbs':
      enterIndustrialSuburbs(s, scene);
      break;
    case 'suburbs_island':
      enterSuburbsIsland(s, scene);
      break;
    case 'suburbs_center':
      enterSuburbsCenter(s, scene);
      break;
    case 'suburbs_artisan':
      enterSuburbsArtisan(s, scene);
      break;
    case 'suburbs_residential':
      enterSuburbsResidential(s, scene);
      break;
    case 'suburbs_industrial':
      enterSuburbsIndustrial(s, scene);
      break;
    case 'dealer':
      enterDealer(s, scene);
      break;
    case 'shop':
      enterShop(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
