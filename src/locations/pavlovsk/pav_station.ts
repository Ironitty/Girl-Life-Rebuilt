import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStationOutside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/pavext.jpg');
  scene.text('The police station is gleaming in a bright yellow color, clearly making it clear that it can\'t be missed by anyone.');
  scene.text('The officers often abuse their power since no one further up the chain cares about a little town such as Pavlovsk.');
  scene.actions([
    { label: 'Return to the train station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Enter the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_station', 'station_inside'] },
  ]);
  scene.build();
}

function enterStationInside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/pavrec.jpg');
  scene.text('You\'re welcomed by a tiny reception area with someone always just lazily hanging around waiting for something to happen.');
  scene.text('The interior has seen better days and you\'re reminded of the stories you\'ve heard from your parents about how everything used to look run-down even during their younger days.');
  if (((s as any).katalkinSexOnce ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 8) {
    (s as any).minut = ((s as any).minut ?? 0) + (1);
    // TODO-QSP: act 'Visit Captain Katalkin': gt 'katalkin'
  }
  scene.actions([
    { label: 'Leave the station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_station', 'station_outside'] },
    { label: 'Approach the reception area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_station', 'reception'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/pavrec.jpg');
  scene.text('As you approach the reception, the clerk looks at you with disdain in their eyes. "What do you want?"');
  if (((s as any).rape_count ?? 0) > 0  &&  ((s as any).rape_day ?? 0) + 2 > ((s as any).daystart ?? 0)) {
    // TODO-QSP: act 'Report a rape': gt 'pav_station', 'rape_report'
  }
  qspCall(s, 'blackmailer', 'set_police_act');
  scene.actions([
    { label: 'Just looking around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/pavrec.jpg');
    scene.text('"I\'m just looking around," you jokingly reply.');
    scene.text('The clerk looks sternly towards you. "Does this looks like a place to be messing around?"');
    scene.text('"I guess not…" you sheepishly reply with an awkward smile. "I just wanted to see what the inside of a police station looked like."');
    scene.text('"Said no one ever," the clerk quickly counters. "I don\'t know what you\'re up to, but you need to leave before I have one of the officers come and lock you up."');
    scene.text('You just nod before quickly walking away.');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_station', 'station_inside'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEntrance(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Reception area</b></center>');
  scene.img('images/locations/pavlovsk/police/pavrec.jpg');
  scene.text('The officer drags you in by the arm, his grip tightening whenever he feels the slightest bit of resistance from you.');
  scene.text('As the officer leads you by the reception area, the clerk pops his head out and looks down the corridor, appearing very unimpressed.');
  if (((s as any).locArgs?.[1] ?? 0) === 'shplft'  ||  ((s as any).locArgs?.[1] ?? 0) === 'shoplift') {
    (s as any).policeQW['shoplift_booked_pav'] = ((s as any).policeQW['shoplift_booked_pav'] ?? 0) + (1);
    (s as any).policeQW['crime_flag_pav'] = 'shoplift';
    (s as any).temp_tot_booked_pav = ((s as any).temp_tot_booked_pav ?? 0) + (1);
    if (((s as any).temp_tot_booked_pav ?? 0) === 1) {
      // TODO-QSP: xgt 'pav_station', 'first_shoplift'
    } else {
      // TODO-QSP: xgt 'pav_station', 'repeat'
      if (((s as any).temp_tot_booked_pav ?? 0) <= 10) {
        // TODO-QSP: xgt 'pav_station', 'multiple'
      } else {
        // TODO-QSP: xgt 'pav_station', 'regular'
      }
      (s as any).policeQW['prostitution_booked_pav'] = ((s as any).policeQW['prostitution_booked_pav'] ?? 0) + (1);
      (s as any).policeQW['crime_flag_pav'] = 'prostitution';
      (s as any).temp_tot_booked_pav = ((s as any).temp_tot_booked_pav ?? 0) + (1);
      if (((s as any).temp_tot_booked_pav ?? 0) === 1) {
        // TODO-QSP: xgt 'pav_station', 'first_prostitution'
      } else {
        // TODO-QSP: xgt 'pav_station', 'repeat'
        if (((s as any).temp_tot_booked_pav ?? 0) <= 10) {
          // TODO-QSP: xgt 'pav_station', 'multiple'
        } else {
          // TODO-QSP: xgt 'pav_station', 'regular'
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'station_outside':
      enterStationOutside(s, scene);
      break;
    case 'station_inside':
      enterStationInside(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    case 'entrance':
      enterEntrance(s, scene);
      break;
    default:
      enterStationOutside(s, scene);
      break;
  }
}

export const pav_station: LocationDef = {
  name: 'pav_station',
  title: 'Reception area',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['The police station is gleaming in a bright yellow color, clearly making it clear that it can\'t be missed by anyone.'],
  enter: enter,
};
