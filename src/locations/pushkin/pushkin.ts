import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin', ((s as any).locArgs?.[0] ?? 0));
  (s as any).region = 'pushkin';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pushkin Town Center</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
      scene.img('images/locations/pushkin/townwinter.jpg');
    } else {
      scene.img('images/locations/pushkin/townwinternight.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
      scene.img('images/locations/pushkin/liam.jpg');
    } else {
      scene.img('images/locations/pushkin/townnight.jpg');
    }
  }
  scene.text('This historic region, sometimes called Old Town was originally the village of Pushkin and that name is still used to this day.');
  scene.text('Later, the rich bought the land off the poor and knocked down the wooden shacks and farm houses to build large estates. The town began to grow rapidly, and it became a desirable suburb.');
  scene.text('Since then, even the old houses have been improved, extended, and modernized. The old buildings and beautiful park made it popular with tourists, and expansion has lead to the boarders between itself and Pavlovsk being merged.');
  scene.text('Not far from here is the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027pushkin_sq\u0027, \u0027\u0027); return false;">Okhlopkov Square</a> with its boutique shops.');
  scene.text('Close by is a narrow street leading to a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027koncepod\u0027, \u0027start\u0027); return false;">vacant house</a>.');
  scene.text('You can also see a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027ugol\u0027, \u0027start\u0027); return false;">passage</a> between the houses leading to a courtyard.');
  scene.text('Ahead you can see the road that leads to the Pushkin Ballet Theatre and it\'s <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pushkin_ballet_center\u0027, \u0027start\u0027); return false;">residential accommodation</a>.');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">Your ${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is parked at the curb.`);
  }
  if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).bodimodel ?? 0) === 1  &&  ((s as any).arts ?? 0) === 0  &&  ((s as any).tusa ?? 0) === 1) {
    if ((Math.floor(Math.random() * 5) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      qspCall(s, 'dibodi', '');
      scene.img('images/characters/pushkin/marinka/marinka.jpg');
      scene.text('You notice a girl from the local hangout, Marinka, standing in a doorway nearby.');
      scene.actions([
        { label: 'Ask Marinka about the art studio', goto: ['dibodi', 'sptusa'] },
      ]);
    }
  }
  if (((s as any).pushkin_walk_day ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Take a walk (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (1);
    (st as any).pushkin_walk_day = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.text('You breathe in the fresh air and slowly walk along the narrow streets of the Old Town, admiring the beautiful architecture.');
    scene.actions([
      { label: 'Continue', goto: ['pushkin', ''] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'prostitution_functions', 'check_solicitation_event');
  scene.actions([
    { label: 'Walk to Okhlopkov Square (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_sq', ''] },
    { label: 'Walk to the bus station (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['bus', 'pushkin'] },
    { label: 'Walk to the highway (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['road', '19'] },
    { label: 'Walk to the train station (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Walk to the Market (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['pav_market', ''] },
    { label: 'Walk to the park (0:25)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 25;
  }, goto: ['pav_park', 'start'] },
    { label: 'Walk to the Commercial area (0:25)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 25;
  }, goto: ['pav_commercial', ''] },
    { label: 'Walk to the Residential area (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['pav_residential', ''] },
    { label: 'Walk to the Industrial region (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['pav_industrial', ''] },
    { label: 'Walk to the Five Eight estate (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['pav_complex', 'start'] },
  ]);
  scene.build();
}

export const pushkin: LocationDef = {
  name: 'pushkin',
  title: '<center><b>Pushkin Town Center</b></center>',
  region: 'pushkin',
  description: ['This historic region, sometimes called Old Town was originally the village of Pushkin and that name is still used to this day.'],
  enter: enter,
};
