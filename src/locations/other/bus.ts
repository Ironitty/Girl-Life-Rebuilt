import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetBusImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 17) {
      scene.img('images/locations/shared/bus/bus_day1.jpg');
    } else {
      scene.img('images/locations/shared/bus/bus_night1.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 19) {
      scene.img('images/locations/shared/bus/bus_day1.jpg');
    } else {
      scene.img('images/locations/shared/bus/bus_night1.jpg');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCommunity(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'community');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Community center</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The community center bus stop');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'community');
  if (((s as any).transportVars ?? 0)?.['bus_wait_gadukino'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the bus. The next one arrives in <<transportVars['bus_wait...
    scene.text(`It's too late to take the bus. The next one arrives in ${((s as any).transportVars ?? {})?.['bus_wait_gadukino']/60} hours`);
  } else {
    // TODO-QSP: 'The next bus in the direction of Gadukino ' + iif(transportVars['bus_wait_gadukino'] = 0, 'is leavi...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['bus', 'community_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_buspass_time')
      scene.actions([
        { label: 'Take a bus to the Pavlovsk train station (<<func(\'transport_functions\', \'display_bus_timecost\', \'community\', \'pavstation\')>>)', goto: ['bus', 'community_pavstation'] },
        { label: 'Take a bus to the old town district of Pushkin (<<func(\'transport_functions\', \'display_bus_timecost\', \'community\', \'pushkin\')>>)', goto: ['bus', 'community_pushkin'] },
        { label: 'Take a bus to the construction site (<<func(\'transport_functions\', \'display_bus_timecost\', \'community\', \'construction\')>>)', goto: ['bus', 'community_construction'] },
        { label: 'Take a bus to the village of Gadukino (<<func(\'transport_functions\', \'display_bus_timecost\', \'community\', \'gadukino\')>>)', goto: ['bus', 'community_gadukino'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to the community center (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_commcenter', ''] },
    { label: 'Walk to the Residential area (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_residential', ''] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'pg');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'community'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCommunityTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([{ label: 'Continue', goto: ['bus', 'community'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'bus', 'community_tickets');
  scene.text('<center><b>Bus station</b></center>');
  scene.text('<center><b>Community center</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The community center ticket machine');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'community', 'pg');
  qspCall(s, 'transport_functions', 'buy_bus_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['bus', 'community'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'pg');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'community_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPavstation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pavstation');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Pavlovsk station</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The Pavlovsk train station bus stop');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pavstation');
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    // TODO-QSP: act 'Walk to the train platform (0:02)': minut += 2
    scene.actions([{ label: 'Continue', goto: ['pav_train_hall', 'platform'] }]);
  }
  if (((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'] > 60  &&  ((s as any).transportVars ?? 0)?.['bus_wait_gadukino'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the bus. The next one arrives in <<min(transportVars['bus_...
    scene.text(`It's too late to take the bus. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'], ((s as any).transportVars ?? 0)?.['bus_wait_gadukino']) / 60} hours.`);
  } else {
    // TODO-QSP: 'The next bus in the direction of the Pavlovsk community center ' + iif(transportVars['bus_wait_pavl...
    // TODO-QSP: 'The next bus in the direction of Gadukino ' + iif(transportVars['bus_wait_gadukino'] = 0, 'is leavi...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['bus', 'pavstation_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_buspass_time')
      scene.actions([
        { label: 'Take a bus to the Pavlovsk community center (<<func(\'transport_functions\', \'display_bus_timecost\', \'pavstation\', \'community\')>>)', goto: ['bus', 'pavstation_community'] },
        { label: 'Take a bus to the old town district of Pushkin (<<func(\'transport_functions\', \'display_bus_timecost\', \'pavstation\', \'pushkin\')>>)', goto: ['bus', 'pavstation_pushkin'] },
        { label: 'Take a bus to the construction site (<<func(\'transport_functions\', \'display_bus_timecost\', \'pavstation\', \'construction\')>>)', goto: ['bus', 'pavstation_construction'] },
        { label: 'Take a bus to the village of Gadukino (<<func(\'transport_functions\', \'display_bus_timecost\', \'pavstation\', \'gadukino\')>>)', goto: ['bus', 'pavstation_gadukino'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to the train station (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Walk to the market (0:04)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
  }, goto: ['pav_market', ''] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'pg');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gp');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'pavstation'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPavstationTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([{ label: 'Continue', goto: ['bus', 'pavstation'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'bus', 'pavstation_tickets');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Pavlovsk station</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The Pavlovsk train station ticket machine');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'pavstation', 'pg');
  qspCall(s, 'transport_functions', 'buy_bus_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['bus', 'pavstation'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'pg');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gp');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'pavstation_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPushkin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pushkin');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Pushkin</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The bus stop in the old town center of Pushkin');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pushkin');
  if (((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'] > 60  &&  ((s as any).transportVars ?? 0)?.['bus_wait_gadukino'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the bus. The next one arrives in <<min(transportVars['bus_...
    scene.text(`It's too late to take the bus. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'], ((s as any).transportVars ?? 0)?.['bus_wait_gadukino']) / 60} hours.`);
  } else {
    // TODO-QSP: 'The next bus in the direction of Pavlovsk ' + iif(transportVars['bus_wait_pavlovsk'] = 0, 'is leavi...
    // TODO-QSP: 'The next bus in the direction of Gadukino ' + iif(transportVars['bus_wait_gadukino'] = 0, 'is leavi...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['bus', 'pushkin_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_buspass_time')
      scene.actions([
        { label: 'Take a bus to the Pavlovsk community center (<<func(\'transport_functions\', \'display_bus_timecost\', \'pushkin\', \'community\')>>)', goto: ['bus', 'pushkin_community'] },
        { label: 'Take a bus to the Pavlovsk train station (<<func(\'transport_functions\', \'display_bus_timecost\', \'pushkin\', \'pavstation\')>>)', goto: ['bus', 'pushkin_pavstation'] },
        { label: 'Take a bus to the construction site (<<func(\'transport_functions\', \'display_bus_timecost\', \'pushkin\', \'construction\')>>)', goto: ['bus', 'pushkin_construction'] },
        { label: 'Take a bus to the village of Gadukino (<<func(\'transport_functions\', \'display_bus_timecost\', \'pushkin\', \'gadukino\')>>)', goto: ['bus', 'pushkin_gadukino'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to pushkin (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pushkin', ''] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'pg');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gp');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'pushkin'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPushkinTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([{ label: 'Continue', goto: ['bus', 'pushkin'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'bus', 'pushkin_tickets');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Pushkin</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The ticket machine in the old town center of Pushkin');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'pushkin', 'pg');
  qspCall(s, 'transport_functions', 'buy_bus_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['bus', 'pushkin'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'pg');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gp');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'pushkin_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterConstruction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'construction');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Construction Site</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The temporary bus stop near the construction site');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'construction');
  if (((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'] > 60  &&  ((s as any).transportVars ?? 0)?.['bus_wait_gadukino'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the bus. The next one arrives in <<min(transportVars['bus_...
    scene.text(`It's too late to take the bus. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'], ((s as any).transportVars ?? 0)?.['bus_wait_gadukino'])/60} hours.`);
  } else {
    // TODO-QSP: 'The next bus in the direction of Gadukino ' + iif(transportVars['bus_wait_gadukino'] = 0, 'is leavi...
    // TODO-QSP: 'The next bus in the direction of Pavlovsk ' + iif(transportVars['bus_wait_pavlovsk'] = 0, 'is leavi...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['bus', 'construction_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_buspass_time')
      scene.actions([
        { label: 'Take a bus to the village of Gadukino (<<func(\'transport_functions\', \'display_bus_timecost\', \'construction\', \'gadukino\')>>)', goto: ['bus', 'construction_gadukino'] },
        { label: 'Take a bus to the old town district of Pushkin (<<func(\'transport_functions\', \'display_bus_timecost\', \'construction\', \'pushkin\')>>)', goto: ['bus', 'construction_pushkin'] },
        { label: 'Take a bus to the Pavlovsk train station (<<func(\'transport_functions\', \'display_bus_timecost\', \'construction\', \'pavstation\')>>)', goto: ['bus', 'construction_pavstation'] },
        { label: 'Take a bus to the Pavlovsk community center (<<func(\'transport_functions\', \'display_bus_timecost\', \'construction\', \'community\')>>)', goto: ['bus', 'construction_community'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to the road (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['road', '16'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gp');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'pg');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'construction'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterConstructionTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([{ label: 'Continue', goto: ['bus', 'construction'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'bus', 'construction_tickets');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Construction Site</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The ticket machine near the construction site');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'construction', 'gp');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['bus', 'construction'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gp');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'pg');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'construction_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Gadukino</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The bus stop at the forest road of the village of Gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'gadukino');
  if (((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'] > 60  &&  ((s as any).transportVars ?? 0)?.['bus_wait_suburbs'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the bus. The next one arrives in <<min(transportVars['bus_...
    scene.text(`It's too late to take the bus. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['bus_wait_pavlovsk'], ((s as any).transportVars ?? 0)?.['bus_wait_suburbs'])/60} hours.`);
  } else {
    // TODO-QSP: 'The next bus in the direction of Pavlovsk ' + iif(transportVars['bus_wait_pavlovsk'] = 0, 'is leavi...
    // TODO-QSP: 'The next bus in the direction of the suburbs of St. Petersburg ' + iif(transportVars['bus_wait_subu...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['bus', 'gadukino_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_buspass_time')
      scene.actions([
        { label: 'Take a bus to the construction site (<<func(\'transport_functions\', \'display_bus_timecost\', \'gadukino\', \'construction\')>>)', goto: ['bus', 'gadukino_construction'] },
        { label: 'Take a bus to the old town district of Pushkin (<<func(\'transport_functions\', \'display_bus_timecost\', \'gadukino\', \'pushkin\')>>)', goto: ['bus', 'gadukino_pushkin'] },
        { label: 'Take a bus to the Pavlovsk train station (<<func(\'transport_functions\', \'display_bus_timecost\', \'gadukino\', \'pavstation\')>>)', goto: ['bus', 'gadukino_pavstation'] },
        { label: 'Take a bus to the Pavlovsk community center (<<func(\'transport_functions\', \'display_bus_timecost\', \'gadukino\', \'community\')>>)', goto: ['bus', 'gadukino_community'] },
        { label: 'Take a bus to the communal village (<<func(\'transport_functions\', \'display_bus_timecost\', \'gadukino\', \'communal\')>>)', goto: ['bus', 'gadukino_communal'] },
        { label: 'Take a bus the cemetery outside of St. Petersburg (<<func(\'transport_functions\', \'display_bus_timecost\', \'gadukino\', \'graveyard\')>>)', goto: ['bus', 'gadukino_graveyard'] },
        { label: 'Take a bus to the suburbs of St. Petersburg (<<func(\'transport_functions\', \'display_bus_timecost\', \'gadukino\', \'suburbs\')>>)', goto: ['bus', 'gadukino_suburbs'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to Gadukino (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_road', 'start'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gp');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gs');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'gadukino'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGadukinoTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([{ label: 'Continue', goto: ['bus', 'gadukino'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino_tickets');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Gadukino</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The ticket machine at the forest road of the village of Gadukino');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'gadukino', 'gp');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'gadukino', 'gs');
  qspCall(s, 'transport_functions', 'buy_bus_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['bus', 'gadukino'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gp');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gs');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'gadukino_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'communal');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Communal village</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The bus stop in the communal village');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'communal');
  if (((s as any).transportVars ?? 0)?.['bus_wait_gadukino'] > 60  &&  ((s as any).transportVars ?? 0)?.['bus_wait_suburbs'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the bus. The next one arrives in <<min(transportVars['bus_...
    scene.text(`It's too late to take the bus. The next one arrives in ${Math.min(((s as any).transportVars ?? 0)?.['bus_wait_gadukino'], ((s as any).transportVars ?? 0)?.['bus_wait_suburbs'])/60} hours.`);
  } else {
    // TODO-QSP: 'The next bus in the direction of Gadukino ' + iif(transportVars['bus_wait_gadukino'] = 0, 'is leavi...
    // TODO-QSP: 'The next bus in the direction of the suburbs of St. Petersburg ' + iif(transportVars['bus_wait_subu...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['bus', 'communal_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_buspass_time')
      scene.actions([
        { label: 'Take a bus to the village of Gadukino (<<func(\'transport_functions\', \'display_bus_timecost\', \'communal\', \'gadukino\')>>)', goto: ['bus', 'communal_gadukino'] },
        { label: 'Take a bus the cemetery outside of St. Petersburg (<<func(\'transport_functions\', \'display_bus_timecost\', \'communal\', \'graveyard\')>>)', goto: ['bus', 'communal_graveyard'] },
        { label: 'Take a bus to the suburbs of St. Petersburg (<<func(\'transport_functions\', \'display_bus_timecost\', \'communal\', \'suburbs\')>>)', goto: ['bus', 'communal_suburbs'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to the communal village (0:03)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['dachi', ''] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gs');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'sg');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'communal'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCommunalTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([{ label: 'Continue', goto: ['bus', 'communal'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'bus', 'communal_tickets');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Communal village</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The ticket machine in the communal village');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'communal', 'gs');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['bus', 'communal'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gs');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'sg');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'communal_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGraveyard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'graveyard');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Cemetery</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The cemetery bus stop');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'graveyard');
  if (((s as any).transportVars ?? 0)?.['bus_wait_gadukino'] > 60  &&  ((s as any).transportVars ?? 0)?.['bus_wait_suburbs'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the bus. The next one arrives in <<min(transportVars['bus_...
    scene.text(`It's too late to take the bus. The next one arrives in ${Math.min(((s as any).transportVars ?? {})?.['bus_wait_gadukino']/60, ((s as any).transportVars ?? {})?.['bus_wait_suburbs']/60)} hours.`);
  } else {
    // TODO-QSP: 'The next bus in the direction of Gadukino ' + iif(transportVars['bus_wait_gadukino'] = 0, 'is leavi...
    // TODO-QSP: 'The next bus in the direction of the suburbs of St. Petersburg ' + iif(transportVars['bus_wait_subu...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['bus', 'graveyard_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_buspass_time')
      scene.actions([
        { label: 'Take a bus to the suburbs of St. Petersburg (<<func(\'transport_functions\', \'display_bus_timecost\', \'graveyard\', \'suburbs\')>>)', goto: ['bus', 'graveyard_suburbs'] },
        { label: 'Take a bus to the communal village (<<func(\'transport_functions\', \'display_bus_timecost\', \'graveyard\', \'communal\')>>)', goto: ['bus', 'graveyard_communal'] },
        { label: 'Take a bus the village of Gadukino (<<func(\'transport_functions\', \'display_bus_timecost\', \'graveyard\', \'gadukino\')>>)', goto: ['bus', 'graveyard_gadukino'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to the road (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['road', '3'] },
    { label: 'Walk to the cemetery (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['graveyard', ''] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'sg');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gs');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'graveyard'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGraveyardTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([{ label: 'Continue', goto: ['bus', 'graveyard'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'bus', 'graveyard_tickets');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Cemetery</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The cemetery ticket machine');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'graveyard', 'sg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['bus', 'graveyard'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'sg');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'gs');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'graveyard_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'suburbs');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Suburbs</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The bus stop near the suburbs of St. Petersburg');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'suburbs');
  if (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) < 23) {
    // TODO-QSP: act 'Walk to the Metro station (0:15)': minut += 15
    scene.actions([{ label: 'Continue', goto: ['metro', 'suburbs'] }]);
  }
  if (((s as any).transportVars ?? 0)?.['bus_wait_gadukino'] > 60) {
    // TODO-QSP: dynamic text: It's too late to take the bus. The next one arrives in <<transportVars['bus_wait...
    scene.text(`It's too late to take the bus. The next one arrives in ${((s as any).transportVars ?? {})?.['bus_wait_gadukino'] / 60} hours`);
  } else {
    // TODO-QSP: 'The next bus in the direction of Gadukino ' + iif(transportVars['bus_wait_gadukino'] = 0, 'is leavi...
    if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['buspass_day']) {
      scene.actions([
        { label: 'Walk to the ticket machine', goto: ['bus', 'suburbs_tickets'] },
      ]);
    } else {
      // TODO-QSP: $func('transport_functions', 'display_buspass_time')
      scene.actions([
        { label: 'Take a bus the cemetery outside of St. Petersburg (<<func(\'transport_functions\', \'display_bus_timecost\', \'suburbs\', \'graveyard\')>>)', goto: ['bus', 'suburbs_graveyard'] },
        { label: 'Take a bus to the communal village (<<func(\'transport_functions\', \'display_bus_timecost\', \'suburbs\', \'communal\')>>)', goto: ['bus', 'suburbs_communal'] },
        { label: 'Take a bus the village of Gadukino (<<func(\'transport_functions\', \'display_bus_timecost\', \'suburbs\', \'gadukino\')>>)', goto: ['bus', 'suburbs_gadukino'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to the suburbs (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_suburbs', 'start'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'sg');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'suburbs'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSuburbsTickets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['buspass_day']) {
    scene.actions([{ label: 'Continue', goto: ['bus', 'suburbs'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'bus', 'suburbs_tickets');
  scene.text('<center><b>Bus stop</b></center>');
  scene.text('<center><b>Suburbs</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
      scene.img(`images/locations/shared/bus/winter_day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/winter_night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  } else {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 18) {
      scene.img(`images/locations/shared/bus/day${Math.floor(Math.random() * 3) + 1}.jpg`);
    } else {
      scene.img(`images/locations/shared/bus/night${Math.floor(Math.random() * 3) + 1}.jpg`);
    }
  }
  scene.text('The ticket machine near the suburbs of St. Petersburg');
  qspCall(s, 'transport_functions', 'buy_bus_ticket', 'suburbs', 'sg');
  qspCall(s, 'transport_functions', 'buy_bus_pass');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the ticket office', goto: ['bus', 'suburbs'] },
    { label: 'Look at the bus schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Bus schedule</h1></center>');
    qspCall(s, 'transport_functions', 'display_bus_schedule', 'sg');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['bus', 'suburbs_tickets'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCommunityPavstation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pavstation');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'community');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'community', 'pavstation') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pavlovsk ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pavlovsk train station bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCommunityPushkin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pushkin');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'community');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'community', 'pushkin') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pushkin b...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pushkin bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCommunityConstruction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'construction');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'community');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'community', 'construction') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the construct...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the construction site bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCommunityGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'community');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'community', 'gadukino') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Gadukino ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Gadukino bus station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPavstationCommunity(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'community');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pavstation');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'pavstation', 'community') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pavlovsk ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pavlovsk community center bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPavstationPushkin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pushkin');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pavstation');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'pavstation', 'pushkin') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pushkin b...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pushkin bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPavstationConstruction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'construction');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pavstation');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'pavstation', 'construction') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the construct...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the construction site bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPavstationGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pavstation');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'pavstation', 'gadukino') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Gadukino ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Gadukino bus station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPushkinCommunity(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'community');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pushkin');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'pushkin', 'community') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pavlovsk ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pavlovsk community center bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPushkinPavstation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pavstation');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pushkin');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'pushkin', 'pavstation') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pavlovsk ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pavlovsk train station bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPushkinConstruction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'construction');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pushkin');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'pushkin', 'construction') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the construct...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the construction site bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPushkinGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'pushkin');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'pushkin', 'gadukino') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Gadukino ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Gadukino bus station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterConstructionCommunity(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'construction');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'construction', 'community') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pavlovsk ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pavlovsk community center bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterConstructionPavstation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pavstation');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'construction');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'construction', 'pavstation') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pavlovsk ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pavlovsk train station bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterConstructionPushkin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pushkin');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'construction');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'construction', 'pushkin') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pushkin b...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pushkin bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterConstructionGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'construction');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'construction', 'gadukino') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Gadukino ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Gadukino bus station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGadukinoCommunity(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'community');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'gadukino');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', 'community') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pavlovsk ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pavlovsk community center bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGadukinoPavstation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pavstation');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'gadukino');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', 'pavstation') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pavlovsk ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pavlovsk train station bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGadukinoPushkin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'pushkin');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'gadukino');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', 'pushkin') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Pushkin b...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Pushkin bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGadukinoConstruction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'construction');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'gadukino');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', 'construction') + ((s as any).transportVars ?? {})?.['bus_wait_pavlovsk'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the construct...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the construction site bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGadukinoCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'communal');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'gadukino');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', 'communal') + ((s as any).transportVars ?? {})?.['bus_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the communal ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the communal village bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGadukinoGraveyard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'graveyard');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'gadukino');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', 'graveyard') + ((s as any).transportVars ?? {})?.['bus_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the graveyard...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the graveyard bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGadukinoSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'suburbs');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'gadukino');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'gadukino', 'suburbs') + ((s as any).transportVars ?? {})?.['bus_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the suburbs b...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the suburbs bus station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCommunalGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'communal');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'communal', 'gadukino') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Gadukino ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Gadukino bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCommunalGraveyard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'graveyard');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'communal');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'communal', 'graveyard') + ((s as any).transportVars ?? {})?.['bus_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the graveyard...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the graveyard bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCommunalSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'suburbs');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'communal');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'communal', 'suburbs') + ((s as any).transportVars ?? {})?.['bus_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the suburbs b...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the suburbs bus station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGraveyardGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'graveyard');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'graveyard', 'gadukino') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Gadukino ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Gadukino bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGraveyardCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'communal');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'graveyard');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'graveyard', 'communal') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the communal ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the communal village bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGraveyardSuburbs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'suburbs');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'graveyard');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'graveyard', 'suburbs') + ((s as any).transportVars ?? {})?.['bus_wait_suburbs'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the suburbs b...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the suburbs bus station.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSuburbsGadukino(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'gadukino');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'suburbs');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'suburbs', 'gadukino') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the Gadukino ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the Gadukino bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSuburbsCommunal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'communal');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'suburbs');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'suburbs', 'communal') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the communal ...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the communal village bus station.`);
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSuburbsGraveyard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bus', 'graveyard');
  qspCall(s, 'transport_functions', 'set_bus_wait_time', 'suburbs');
  ((s as any).temp_transportVars ?? {})['timecost'] = qspFunc(s, 'transport_functions', 'get_bus_timecost', 'suburbs', 'graveyard') + ((s as any).transportVars ?? {})?.['bus_wait_gadukino'];
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_transportVars ?? 0)?.['timecost']);
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_transportVars ?? 0)?.['rand'] < 25) {
    scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'events'] }]);
  } else {
    if (((s as any).temp_transportVars ?? 0)?.['rand'] < 35) {
      if (((s as any).transportVars ?? 0)?.['bus_event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['bus_events', 'events'] }]);
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'bus', 'get_bus_image');
  // TODO-QSP: dynamic text: After <<temp_transportVars['timecost']>> minutes, the bus stops at the graveyard...
  scene.text(`After ${((s as any).temp_transportVars ?? 0)?.['timecost']} minutes, the bus stops at the graveyard bus station.`);
  // TODO-QSP: end
  if (((s as any).locArgs?.[0] ?? 0) !== 'get_bus_image') {
    // TODO-QSP: killvar 'temp_transportVars'
  }
  scene.actions([
    { label: 'Get off the bus', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 5) {
      scene.actions([{ label: 'Continue', goto: ['bus_incidental', 'end'] }]);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_bus_image':
      enterGetBusImage(s, scene);
      break;
    case 'community':
      enterCommunity(s, scene);
      break;
    case 'community_tickets':
      enterCommunityTickets(s, scene);
      break;
    case 'pavstation':
      enterPavstation(s, scene);
      break;
    case 'pavstation_tickets':
      enterPavstationTickets(s, scene);
      break;
    case 'pushkin':
      enterPushkin(s, scene);
      break;
    case 'pushkin_tickets':
      enterPushkinTickets(s, scene);
      break;
    case 'construction':
      enterConstruction(s, scene);
      break;
    case 'construction_tickets':
      enterConstructionTickets(s, scene);
      break;
    case 'gadukino':
      enterGadukino(s, scene);
      break;
    case 'gadukino_tickets':
      enterGadukinoTickets(s, scene);
      break;
    case 'communal':
      enterCommunal(s, scene);
      break;
    case 'communal_tickets':
      enterCommunalTickets(s, scene);
      break;
    case 'graveyard':
      enterGraveyard(s, scene);
      break;
    case 'graveyard_tickets':
      enterGraveyardTickets(s, scene);
      break;
    case 'suburbs':
      enterSuburbs(s, scene);
      break;
    case 'suburbs_tickets':
      enterSuburbsTickets(s, scene);
      break;
    case 'community_pavstation':
      enterCommunityPavstation(s, scene);
      break;
    case 'community_pushkin':
      enterCommunityPushkin(s, scene);
      break;
    case 'community_construction':
      enterCommunityConstruction(s, scene);
      break;
    case 'community_gadukino':
      enterCommunityGadukino(s, scene);
      break;
    case 'pavstation_community':
      enterPavstationCommunity(s, scene);
      break;
    case 'pavstation_pushkin':
      enterPavstationPushkin(s, scene);
      break;
    case 'pavstation_construction':
      enterPavstationConstruction(s, scene);
      break;
    case 'pavstation_gadukino':
      enterPavstationGadukino(s, scene);
      break;
    case 'pushkin_community':
      enterPushkinCommunity(s, scene);
      break;
    case 'pushkin_pavstation':
      enterPushkinPavstation(s, scene);
      break;
    case 'pushkin_construction':
      enterPushkinConstruction(s, scene);
      break;
    case 'pushkin_gadukino':
      enterPushkinGadukino(s, scene);
      break;
    case 'construction_community':
      enterConstructionCommunity(s, scene);
      break;
    case 'construction_pavstation':
      enterConstructionPavstation(s, scene);
      break;
    case 'construction_pushkin':
      enterConstructionPushkin(s, scene);
      break;
    case 'construction_gadukino':
      enterConstructionGadukino(s, scene);
      break;
    case 'gadukino_community':
      enterGadukinoCommunity(s, scene);
      break;
    case 'gadukino_pavstation':
      enterGadukinoPavstation(s, scene);
      break;
    case 'gadukino_pushkin':
      enterGadukinoPushkin(s, scene);
      break;
    case 'gadukino_construction':
      enterGadukinoConstruction(s, scene);
      break;
    case 'gadukino_communal':
      enterGadukinoCommunal(s, scene);
      break;
    case 'gadukino_graveyard':
      enterGadukinoGraveyard(s, scene);
      break;
    case 'gadukino_suburbs':
      enterGadukinoSuburbs(s, scene);
      break;
    case 'communal_gadukino':
      enterCommunalGadukino(s, scene);
      break;
    case 'communal_graveyard':
      enterCommunalGraveyard(s, scene);
      break;
    case 'communal_suburbs':
      enterCommunalSuburbs(s, scene);
      break;
    case 'graveyard_gadukino':
      enterGraveyardGadukino(s, scene);
      break;
    case 'graveyard_communal':
      enterGraveyardCommunal(s, scene);
      break;
    case 'graveyard_suburbs':
      enterGraveyardSuburbs(s, scene);
      break;
    case 'suburbs_gadukino':
      enterSuburbsGadukino(s, scene);
      break;
    case 'suburbs_communal':
      enterSuburbsCommunal(s, scene);
      break;
    case 'suburbs_graveyard':
      enterSuburbsGraveyard(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bus: LocationDef = {
  name: 'bus',
  title: 'Bus stop',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
