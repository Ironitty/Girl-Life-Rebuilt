import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', '');
  (s as any).region = 'pav';
  (s as any).location_type = 'public_indoors';
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><h2>Pavlovsk Train Station</h2></center>');
  scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
  scene.text('Stepping into the station building, you\'re greeted by a large waiting room where passengers await the trains. In one of the corners is the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_train_hall_events\u0027, \u0027manager\u0027); return false;">station manager\'s office</a>. The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_train_hall\u0027, \u0027toilet\u0027); return false;">toilets</a> are located at the back of the building.');
  scene.text('\'The long-distance trains are at the station platforms between 11:00-11:30 and 18:00-18:30.\'');
  if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
    if (((s as any).OluQW ?? 0)?.['met'] === 0) {
      scene.text('You see a very large black man sitting on one of the benches. When people head for the exit, he quickly gets up and asks if they need a taxi. It doesn\'t look like anyone is taking him up on his offer, though.');
    } else {
      if (((s as any).week ?? 0) !== 1  ||  (Math.floor(Math.random() * 5) + 0) !== 0) {
        scene.text('You see your aunt\'s boyfriend <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027olutaxi\u0027, \u0027station\u0027); return false;">Olu</a> sitting on one of the benches. When people head for the exit, he quickly gets up and asks if they need a taxi, but it doesn\'t look like anyone is taking him up on his offer.');
      } else {
        ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['taxi'] = 1;
        if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
          scene.text('You see your aunt\'s boyfriend <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027olutaxi\u0027, \u0027station\u0027); return false;">Olu</a> sitting on one of the benches. His nephew Djibril is sitting next to him. When people head for the exit, Olu quickly gets up and asks if they need a taxi, but it doesn\'t look like anyone is taking him up on his offer.');
        } else {
          scene.text('You see your aunt\'s boyfriend <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027olutaxi\u0027, \u0027station\u0027); return false;">Olu</a> sitting on one of the benches. A younger man that looks similar enough to him that they might be related is sitting next to him. When people head for the exit, Olu quickly gets up and asks if they need a taxi, but it doesn\'t look like anyone is taking him up on his offer.');
        }
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).week ?? 0) < 6) {
    if (((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) <= 0) {
      scene.text('You see your classmates <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=3; return s; }); window.__gameStore.getState().doGoto(\u0027gopskver\u0027, \u0027\u0027); return false;">Vitek, Dan and Vasily</a> hanging around.');
    }
  }
  if (((s as any).podbros ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    scene.text('As you walk through the station building, you notice a man\'s <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_train_hall_events\u0027, \u0027wallet1\u0027); return false;">wallet</a> fall out of his pocket.');
  }
  if (((s as any).daystart ?? 0) >= ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: 'Go to the ticket office', goto: ['pav_train_hall', 'ticket'] },
    ]);
  } else {
    scene.text(qspFunc(s, 'transport_functions', 'display_trainpass_time'));
    scene.actions([
      { label: 'Go to the platforms', goto: ['pav_train_hall', 'platform'] },
    ]);
  }
  if (((s as any).drugVars ?? 0)?.['pav_dropoff'] === 1  &&  ((s as any).drugVars ?? 0)?.['heroin_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Find the drug dealer', handler: (st: GameState) => {
    qspCall(st, 'events', '');
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['pav_train_cleaner'] === 'employed') {
    if (((s as any).cleZalDay ?? 0) !== ((s as any).daystart ?? 0)  ||  ((s as any).cleMTDay ?? 0) !== ((s as any).daystart ?? 0)  ||  ((s as any).cleWTDay ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Work', goto: ['pav_train_hall', 'work'] },
      ]);
    } else {
      if (((s as any).cleZarplatDay ?? 0) !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'jobs', 'clock', 'pav_train_cleaner');
        qspCall(s, 'jobs', 'paycheck', 'pav_train_cleaner');
        qspCall(s, 'mood', 'raise', 'tiny');
        qspCall(s, 'stat', '');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        (s as any).cleZarplatDay = ((s as any).daystart ?? 0);
        scene.text('Once you\'re done cleaning all the places you were told to clean, you go to the manager\'s office and collect your pay.');
      }
    }
  }
  if ((((s as any).hour ?? 0) === 11  ||  ((s as any).hour ?? 0) === 18)  &&  ((s as any).minut ?? 0) <= 30) {
    scene.text('The ' + qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), 30) + ' long-distance train is currently ' + (((!((s as any).minut ?? 0))) ? ('approaching') : (((((s as any).minut ?? 0) < 30) ? ('waiting at') : ('leaving')))) + ' the platform.');
    scene.text('The platform is bustling with passengers entering or leaving the currently waiting train, carrying their heavy bags with them. Several police officers are patrolling the platforms, keeping an eye out for any unruly activities.');
    if (((s as any).mc_inventory ?? 0)?.['trinkets_home'] > 0) {
      scene.text('You could <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_train_hall_events\u0027, \u0027trinkets\u0027); return false;">try to sell some trinkets</a> to some of the passengers.');
    }
  }
  scene.actions([
    { label: 'Walk to the Market (0:03)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
    { label: 'Walk to the Commercial area (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
    { label: 'Walk to the Residential area (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_residential', ''] },
    { label: 'Walk to the Industrial region (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_industrial', ''] },
    { label: 'Walk to the Five Eight estate (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_complex', 'start'] },
    { label: 'Walk to the highway (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '20'] },
    { label: 'Walk to Pushkin (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pushkin', ''] },
    { label: 'Walk to the bus station (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['bus', 'pavstation'] },
  ]);
  scene.build();
}

function enterPlatform(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', 'platform');
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Pavlovsk station platforms</h2></center>');
  scene.img('images/locations/shared/train/pavplat.jpg');
  scene.text('\'Since Pavlovsk attracts a fair amount of tourists, the station can be quite busy at times. The busiest times on the platforms are between 11:00 and 11:30, and between 18:00 and 18:30 when the long-distance trains are ready for boarding.\'');
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'pavlovsk');
  scene.text('The next train to St. Petersburg ' + ((((s as any).transportVars ?? 0)?.['train_wait_center'] === 0) ? ('is leaving now!') : ('leaves in ' + (((s as any).transportVars ?? 0)?.['train_wait_center'] ?? '') + ' minutes.')));
  if (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 10) {
    scene.text('You notice <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_socialchg1\u0027, \u0027tBella\u0027); return false;">Bella</a> standing at the train station platform, looking at the time table.');
  }
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Take the train to the village of Gadukino (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'pavlovsk', 'gadukino', 'center') ?? '') + ')', goto: ['train', 'pavlovsk_gadukino'] },
      { label: '', labelFn: (s: GameState) => 'Take the train to the communal village (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'pavlovsk', 'communal', 'center') ?? '') + ')', goto: ['train', 'pavlovsk_communal'] },
      { label: '', labelFn: (s: GameState) => 'Take the train to the city industrial area (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'pavlovsk', 'industrial', 'center') ?? '') + ')', goto: ['train', 'pavlovsk_industrial'] },
      { label: '', labelFn: (s: GameState) => 'Take the train to the city center (' + String(qspFunc(s, 'transport_functions', 'display_train_timecost', 'pavlovsk', 'center', 'center') ?? '') + ')', goto: ['train', 'pavlovsk_center'] },
    ]);
  }
  scene.actions([
    { label: 'Enter the station building', goto: ['pav_train_hall', ''] },
    { label: 'Walk to the bus platform (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['bus', 'pavstation'] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['pav_train_hall', 'platform'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTicket(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).transportVars ?? 0)?.['trainpass_day']) {
    qspGoto(s, 'pav_train_hall', '');
  }
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', 'ticket');
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Ticket Office</h2></center>');
  scene.img('images/locations/pavlovsk/trainstation/ticketoffice.jpg');
  qspCall(s, 'transport_functions', 'set_train_wait_time', 'pavlovsk');
  scene.text('The next train to St. Petersburg ' + ((((s as any).transportVars ?? 0)?.['train_wait_center'] === 0) ? ('is leaving now!') : ('leaves in ' + (((s as any).transportVars ?? 0)?.['train_wait_center'] ?? '') + ' minutes.')));
  qspCall(s, 'transport_functions', 'buy_train_ticket', 'pavlovsk', 'pc');
  qspCall(s, 'transport_functions', 'buy_train_pass');
  scene.actions([
    { label: 'Leave the ticket office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Look at the train schedule', handler: (st: GameState) => {
    scene.text('<center><h1>Train schedule</h1></center>');
    qspCall(st, 'transport_functions', 'display_train_schedule', 'pc');
    scene.actions([
      { label: 'Stop looking at the schedule', goto: ['pav_train_hall', 'ticket'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Pavlovsk train station interior</h2></center>');
  scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
  if (((s as any).cleZalDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Mop the waiting room floor (1:00)', handler: (st: GameState) => {
    (st as any).cleZalDay = ((st as any).daystart ?? 0);
    qspCall(st, 'exercise', 'tier1', 60, 'stren', 'vital');
    qspCall(st, 'exp_gain', 'cleaning', (Math.floor(Math.random() * 3) + 0));
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/office/clener1.jpg');
    scene.text('You take some cleaning supplies from the maintenance closet, pour some water and soap into a bucket and mop the waiting room floor.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', 'work'] },
    ]);
  } },
    ]);
  }
  if (((s as any).cleMTDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Clean the men\'s restroom (0:30)', handler: (st: GameState) => {
    (st as any).cleMTDay = ((st as any).daystart ?? 0);
    qspCall(st, 'exercise', 'tier1', 30, 'stren', 'vital');
    qspCall(st, 'exp_gain', 'cleaning', (Math.floor(Math.random() * 3) + 0));
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/office/clener1.jpg');
    scene.text('You take some cleaning supplies from the maintenance closet and pour some water and soap into a bucket before heading into the men\'s restroom.');
    scene.text('You scrub the toilets and sinks before mopping the floor.');
    qspCall(st, 'pav_train_hall_events', 'toilet_event');
    scene.actions([
      { label: 'Leave restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', 'work'] },
    ]);
  } },
    ]);
  }
  if (((s as any).cleWTDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Clean the women\'s restroom (0:30)', handler: (st: GameState) => {
    (st as any).cleWTDay = ((st as any).daystart ?? 0);
    qspCall(st, 'exercise', 'tier1', 30, 'stren', 'vital');
    qspCall(st, 'exp_gain', 'cleaning', (Math.floor(Math.random() * 3) + 0));
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/office/clener1.jpg');
    scene.text('You take some cleaning supplies from the maintenance closet and pour some water and soap into a bucket before heading into the women\'s restroom.');
    scene.text('You scrub the toilets and sinks before mopping the floor.');
    qspCall(st, 'pav_train_hall_events', 'vera');
    scene.actions([
      { label: 'Leave restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', 'work'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Return', goto: ['pav_train_hall', ''] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', 'toilet');
  (s as any).locclass = undefined;
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Pavlovsk train station interior</h2></center>');
  scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
  scene.text('You stand by the station\'s restrooms. You see the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_train_hall\u0027, \u0027female\u0027); return false;">ladies\' restroom</a> to the right and <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_train_hall\u0027, \u0027male\u0027); return false;">men\'s restroom</a> to the left, clearly marked by signs on the door.');
  scene.actions([
    { label: 'Return to the train station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
  ]);
  scene.build();
}

function enterFemale(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', 'female');
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'restroom';
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  scene.text('You open the door to the ladies\' restroom and head inside.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', 'toilet'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterMale(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_train_hall', 'male');
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'restroom';
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  scene.text('You open the door to the men\'s restroom and head inside.');
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
    scene.actions([
      { label: 'Wait and see if someone finds you', goto: ['trainbimbo', 'pos1'] },
      { label: 'Quickly enter a stall', goto: ['trainbimbo', 'pos5'] },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  (s as any).temp_transportVars = undefined;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', 'toilet'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'platform':
      enterPlatform(s, scene);
      break;
    case 'ticket':
      enterTicket(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'female':
      enterFemale(s, scene);
      break;
    case 'male':
      enterMale(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_train_hall: LocationDef = {
  name: 'pav_train_hall',
  title: '<center><h2>Pavlovsk Train Station</h2></center>',
  region: 'pavlovsk',
  locationType: 'bathroom',
  locclass: 'restroom',
  description: ['You see a very large black man sitting on one of the benches. When people head for the exit, he quickly gets up and asks if they need a taxi. It doesn\'t look like anyone is taking him up on his offer, though.'],
  enter: enter,
};
