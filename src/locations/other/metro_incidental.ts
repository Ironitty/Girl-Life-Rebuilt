import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).transportVars['train_event_day'] = ((s as any).daystart ?? 0);
  if (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) < 7) {
    (s as any).temp_transportVars['rand'] = Math.floor(Math.random() * 2) + 0;
  } else {
    if ((((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 16)  ||  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 22)) {
      (s as any).temp_transportVars['rand'] = Math.floor(Math.random() * 2) + 1;
    } else {
      (s as any).temp_transportVars['rand'] = Math.floor(Math.random() * 2) + 2;
    }
  }
  // TODO-QSP: gt 'metro_incidental', 'event<<temp_transportVars[''rand'']>>'
  scene.build();
}

function enterEvent0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/city/shared/metro/metroempty.jpg');
  scene.text('The car is almost completely empty, with only one or two other passengers in the car with you. It seems a bit odd and a little creepy seeing the car this empty. Having practically the entire car to yourself, you pick the cleanest spot to sit.');
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
      qspCall(s, 'mood', 'lower', 'small');
      scene.text('Several passengers are shocked, noticing the cum smears on you.');
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'event1') {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(s, 'stat', '');
    qspCall(s, 'themes', 'indoors');
    scene.img('images/locations/city/shared/metro/metro.jpg');
    scene.text('The car is mostly empty, leaving you a choice of seats. You easily find a place for yourself, leaving you plenty of room to get comfortable. The few other people on the car mind their own business, leaving you to your own thoughts.');
    if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
      if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('Several passengers are shocked, noticing the cum smears on you.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'event2') {
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
      qspCall(s, 'stat', '');
      qspCall(s, 'themes', 'indoors');
      scene.img(`images/locations/city/shared/metro/metrofull${Math.floor(Math.random() * 5) + 1}.jpg`);
      scene.text('The car is full of people. All the seats are taken, but only a few people are forced to stand. You easily find a place for yourself, leaving you plenty of room to get comfortable.');
      if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
        if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
          qspCall(s, 'mood', 'lower', 'small');
          scene.text('Several passengers are shocked, noticing the cum smears on you.');
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'event3') {
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
        qspCall(s, 'stat', '');
        qspCall(s, 'themes', 'indoors');
        scene.img('images/locations/city/shared/metro/metropacked.jpg');
        scene.text('The car is packed with people, most of them being forced to stand since there aren\'t enough seats. It\'s so tightly packed that people are crammed up tightly against each other, but you manage to squeeze yourself in. You can feel other bodies pressed up tightly against yours, making for a very uncomfortable journey.');
        if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
          if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
            qspCall(s, 'mood', 'lower', 'small');
            scene.text('Several passengers are shocked, noticing the cum smears on you.');
          }
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'events':
      enterEvents(s, scene);
      break;
    case 'event0':
      enterEvent0(s, scene);
      break;
    default:
      enterEvents(s, scene);
      break;
  }
}

export const metro_incidental: LocationDef = {
  name: 'metro_incidental',
  title: 'The car is almost completely empty, with only one or two oth',
  region: 'other',
  enter: enter,
};
