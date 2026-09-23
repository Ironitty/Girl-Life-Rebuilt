import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['imagepath'] = 'images/' + 'locations/city/mariinsky/';
  (s as any).region = 'city';
  // TODO-QSP: end
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) !== 'city_mariinsky') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'core_library', 'setloc', 'city_mariinsky', ((s as any).locArgs?.[1] ?? 0));
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'shortgs', 'clothing_status');
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'city_artisan_quarter', 'start');
  // TODO-QSP: end
  if (((s as any).ARGS ?? 0) === 'hall'  ||  String((s as any).locArgs?.[0] ?? '') === 'start') {
    ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Mariinsky Theatre Foyer';
    scene.img(((s as any).setloc ?? 0)?.['imagepath'] + 'mariinsky_hall');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hall']; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).mariinskyqw ?? 0)?.['ticket'] === 0) {
      scene.actions([
        { label: 'Tickets Booth', goto: ['city_mariinsky', 'tickets'] },
      ]);
    }
    if (((s as any).mariinskyqw ?? 0)?.['ticket'] === 1) {
      scene.actions([
        { label: 'Main Stage', goto: ['city_mariinsky', 'main'] },
      ]);
    }
    if (((s as any).hour ?? 0) >= 8) {
      qspCall(s, 'willpower', 'exhib', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).marreturn = 'hall';
    qspGoto(st, 'city_mariinsky', 'toilets_men');
  } },
        ]);
      }
      scene.actions([
        { label: 'Enter the women\'s restroom', handler: (st: GameState) => {
    // TODO-QSP: $marreturn = 'hall'
  }, goto: ['city_mariinsky', 'toilets_women'] },
      ]);
    }
    scene.text('You enter the Mariinksy Theatre into the massive open hall with dazzling lights and posters proclaiming the theatre\'s next performances.');
    if (((s as any).daystage ?? 0) <= 3) {
      scene.text('The hall is relatively quite at this time of day, with few performances on during the day.');
    } else {
      scene.text('The hall is packed, elegantly dressed theatre goers and concert aficionados eagerly discussing the upcoming performances or waiting to enter the building and watch the evening\'s performances.');
    }
    scene.actions([
      { label: 'Stage Door', goto: ['city_mariinsky', 'stage_door'] },
      { label: 'Exit', goto: ['city_mariinsky', 'exit'] },
    ]);
  }
  scene.build();
}

function enterTickets(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Mariinsky Tickets';
  scene.img(((s as any).setloc ?? 0)?.['imagepath'] + 'mariinsky_tickets');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('fluff text for purchasing tickets');
  // TODO-QSP: end
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Mariinsky Main Stage';
  scene.img(((s as any).setloc ?? 0)?.['imagepath'] + 'mariinsky_stage');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('For over two centuries, the grand stage of St. Petersburgs\' has been the most prestigious of all Russia\'s ballet and opera theatres and, each year, hosts the Vaganova Ballet Academy\'s performances for their students. You gaze in wonder as you take your seat at the rich facade and feel the presence of all those illustrious performers who have tread those boards.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch performance', goto: ['city_mariinsky', 'performance_evening'] },
    { label: 'Leave', goto: ['city_mariinsky', 'hall'] },
  ]);
  scene.build();
}

function enterToiletsMen(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Men\'s Restroom';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).location_type = 'restroom';
  (s as any).locclass = 'restroom';
  scene.text('WIP - no content. ');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => { qspGoto(st, 'city_mariinsky', ((st as any).marreturn ?? '')); } },
  ]);
  scene.build();
}

function enterToiletsWomen(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Woman\'s Restroom';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).location_type = 'restroom';
  (s as any).locclass = 'restroom';
  // TODO-QSP: dynamic text: 'You walk into the opulent women''s restroom. You see some sinks and <a href="ex...
  scene.text('You walk into the opulent women\'s restroom. You see some sinks and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirrors</a> where you can ' + (((!((s as any).pcs_hairbsh ?? 0))) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => { qspGoto(st, 'city_mariinsky', ((st as any).marreturn ?? '')); } },
  ]);
  scene.build();
}

function enterStageDoor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletqw ?? 0)?.['rank'] >= 1) {
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    qspGoto(st, 'city_mariinsky', 'changing_room');
  } },
      { label: 'Leave', goto: ['city_mariinsky', 'changing_room'] },
    ]);
  } else {
    scene.text('You do not have the permission to enter the theatre through the stage door.');
    scene.actions([
      { label: 'Leave', goto: ['city_mariinsky', 'foyer'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChangingRoom(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Changing Room';
  scene.img(((s as any).setloc ?? 0)?.['imagepath'] + 'changing_room');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).location_type = 'private_shared';
  if (((s as any).balletqw ?? 0)?.['rehearsals'] === 1) {
    scene.text('You enter the changing room and see the other dancers getting for today\'s rehearsals. You quickly change into your dance outfit and head out onto the stage.');
    scene.actions([
      { label: 'Head to the stage', goto: ['city_mariinsky', 'rehearsals'] },
    ]);
  } else {
    if (((s as any).balletqw ?? 0)?.['performance_night'] >= 1) {
      ((s as any).balletqw = (s as any).balletqw ?? {})['performance_night'] = ((s as any).balletqw['performance_night'] ?? 0) - (1);
      scene.text('You enter the changing room and see the other dancers getting ready for the performance. You quickly change into your costume and prepare for the performance.');
      scene.actions([
        { label: 'Head to the stage', goto: ['city_mariinsky', 'performance_evening'] },
      ]);
    } else {
      scene.text('Null - no content. Please see a bug report.');
    }
  }
  qspCall(s, 'core_library', 'bathroom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Theatre', goto: ['city_mariinsky', 'city_artisans'] },
  ]);
  scene.build();
}

function enterProduction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).balletqw ?? 0)?.['rank'] > 0) {
    if (((s as any).balletqw ?? 0)?.['current_stage'] === 'rehearsals') {
      qspCall(s, 'city_mariinsky_rehearsals', 'init');
    } else {
      if (((s as any).balletqw ?? 0)?.['current_stage'] === 'performance') {
        qspCall(s, 'city_mariinsky_performances', 'init');
      }
    }
  } else {
    scene.text('Error - balletqw[rank] not set - Please send a bug report.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPerformanceEvening(s: GameState, scene: SceneBuilder): void {
  ((s as any).mariinskyqw = (s as any).mariinskyqw ?? {})['ticket'] = 0;
  ((s as any).mariinskyqw = (s as any).mariinskyqw ?? {})['performances_watched'] = ((s as any).mariinskyqw['performances_watched'] ?? 0) + (1);
  // TODO-QSP: end
  scene.build();
}

function enterDateNights(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterHallowedGround(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'tickets':
      enterTickets(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    case 'toilets_men':
      enterToiletsMen(s, scene);
      break;
    case 'toilets_women':
      enterToiletsWomen(s, scene);
      break;
    case 'stage_door':
      enterStageDoor(s, scene);
      break;
    case 'changing_room':
      enterChangingRoom(s, scene);
      break;
    case 'production':
      enterProduction(s, scene);
      break;
    case 'performance_evening':
      enterPerformanceEvening(s, scene);
      break;
    case 'date_nights':
      enterDateNights(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    case 'hallowed_ground':
      enterHallowedGround(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_mariinsky: LocationDef = {
  name: 'city_mariinsky',
  title: 'You enter the Mariinksy Theatre into the massive open hall w',
  region: 'city',
  locationType: 'private_shared',
  locclass: 'restroom',
  enter: enter,
};
