import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStreetCum(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
      qspCall(s, 'mood', 'lower', 'tiny');
      if (((s as any).face_write ?? 0) > 0) {
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.text('Passers puzzled turn around staring at you - one with surprise, and others with contempt. Someone smiles and shows a finger. Some of the pictures on your phone, absolutely not hiding and giggling at you. You clearly noticeable semen and bargain painted face.');
      } else {
        scene.text('Puzzled passersby turn around and stare at you. Some take pictures on their phones, not entirely hiding that they are giggling at you. The sperm on you is clearly noticeable.');
      }
    }
  } else {
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.text('Surrounding look at you with surprise, grin or a slight contempt. Someone just point the finger and laughs. Someone photographed phone. Hair obviously can not hide "art" on your face.');
  }
  scene.build();
}

function enterSnkayf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear', 'remove');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  (s as any).snkz = Math.floor(Math.random() * 6) + 1;
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel4.jpg');
  // TODO-QSP: dynamic text: As you wake up, it feels like you've been hit by a hammer. You realise '+iif(snk...
  scene.text('As you wake up, it feels like you\'ve been hit by a hammer. You realise \'+iif(snkz = 6, \'that you are naked.\', \'that your underwear is missing.\')+\' Unsure of where you are and what has happened, you try to get your bearings.');
  if (qspFunc(s, 'money', 'can_afford', 600, 'cash') === 1) {
    qspCall(s, 'money', 'pay', 600, 'cash');
    (s as any).mc_inventory['amphetamine'] = ((s as any).mc_inventory['amphetamine'] ?? 0) + (5);
    scene.actions([{ label: 'Continue', goto: ['events', 'pav_drug_dropoff'] }]);
    scene.actions([
      { label: 'Buy 5 Amphetamine ( [+$func(\'money\', \'string_price\', 600) + \')...]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.text('You don\'t have enough cash to buy amphetamine.');
  scene.actions([
    { label: 'Look around', handler: (st: GameState) => {
    if (((s as any).snkz ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_commcenter', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
      if (((s as any).snkz ?? 0) === 3) {
        scene.actions([{ label: 'Continue', goto: ['bedrPar', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gopskver', ''] }]);
        if (((s as any).snkz ?? 0) === 5) {
          scene.actions([{ label: 'Continue', goto: ['pav_train_hall', 'female'] }]);
        } else {
          qspCall(s, 'clothing', 'strip');
          scene.actions([{ label: 'Continue', goto: ['pav_lake', ''] }]);
        }
      }
    }
    if (qspFunc(s, 'money', 'can_afford', 2100, 'cash') === 1) {
      qspCall(s, 'money', 'pay', 2100, 'cash');
      (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) + (5);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['events', 'pav_drug_dropoff'] }]);
      scene.actions([
        { label: 'Buy enough cocaine for 5 lines ( [+$func(\'money\', \'string_price\', 2100) + \'...]' }, // TODO-QSP: empty action body
      ]);
    }
    scene.text('You don\'t have enough cash to buy cocaine.');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'street_cum':
      enterStreetCum(s, scene);
      break;
    case 'snkayf':
      enterSnkayf(s, scene);
      break;
    default:
      enterStreetCum(s, scene);
      break;
  }
}

export const events: LocationDef = {
  name: 'events',
  title: 'Passers puzzled turn around staring at you - one with surpri',
  region: 'other',
  description: ['Passers puzzled turn around staring at you - one with surprise, and others with contempt. Someone smiles and shows a finger. Some of the pictures on your phone, absolutely not hiding and giggling at you. You clearly noticeable semen and bargain painted face.'],
  enter: enter,
};
