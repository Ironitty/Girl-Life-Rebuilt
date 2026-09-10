import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    scene.text(`It's too late to take the bus. The next one arrives in ${((s as any).transportVars ?? 0)?.['bus_wait_gadukino']/60} hours`);
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
  if (((s as any).locArgs?.[0] ?? 0) === 'community_tickets') {
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_bus_image':
      enterGetBusImage(s, scene);
      break;
    case 'community':
      enterCommunity(s, scene);
      break;
    default:
      enterGetBusImage(s, scene);
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
