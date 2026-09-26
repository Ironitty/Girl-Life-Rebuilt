import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
    if ((((s as any).cumloc ?? 0)[6] === 0  ||  ((s as any).cumloc ?? 0)[7] === 0)  &&  ((s as any).cumloc ?? 0)[11] === 0  &&  ((s as any).face_write ?? 0) > 0) {
      qspCall(s, 'mood', 'lower', 'tiny');
      scene.text('Surrounding look at you with surprise, grin or a slight contempt. Someone just point the finger and laughs. Someone photographed phone. Hair obviously can not hide "art" on your face.');
    }
  }
  scene.build();
}

function enterRead(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'library_functions', 'set_home_read_acts');
  scene.build();
}

function enterReadPorn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'library_functions', 'set_read_porn_act');
  scene.build();
}

function enterSnkayf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear', 'remove');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  (s as any).snkz = (Math.floor(Math.random() * 6) + 1);
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel4.jpg');
  scene.text('As you wake up, it feels like you\'ve been hit by a hammer. You realise ' + ((((s as any).snkz ?? 0) === 6) ? ('that you are naked.') : ('that your underwear is missing.')) + ' Unsure of where you are and what has happened, you try to get your bearings.');
  scene.actions([
    { label: 'Look around', handler: (st: GameState) => {
    if (((st as any).snkz ?? 0) === 1) {
      qspGoto(st, 'pav_commcenter', '');
    } else {
      if (((st as any).snkz ?? 0) === 2) {
        qspGoto(st, 'pav_park', 'start');
      } else {
        if (((st as any).snkz ?? 0) === 3) {
          qspGoto(st, 'bedrPar', '');
        } else {
          if (((st as any).snkz ?? 0) === 4) {
            qspGoto(st, 'gopskver', '');
          } else {
            if (((st as any).snkz ?? 0) === 5) {
              qspGoto(st, 'pav_train_hall', 'female');
            } else {
              qspCall(st, 'clothing', 'strip');
              qspGoto(st, 'pav_lake', '');
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterAskPavDrugDropoff(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Shooting galleries</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  scene.text('You decide to ask, and whether there are any dealers in Pavlovsk. To which the man replied, "Go to the train station platform, it will cost you though…"');
  scene.text('And then he looks at you menacingly "And if I hear that you\'ve caused any trouble, well death will seem like a good escape."');
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    ((st as any).drugVars = (st as any).drugVars ?? {})['pav_dropoff'] = 1;
    scene.text('<center><b>Shooting galleries</b></center>');
    scene.img('images/locations/city/residential/den/narkopriton.jpg');
    scene.text('You gulp and stammer "I assure you there will be no problems"');
    scene.text('Guy nods, "Good then you can find a range of product at the end of the platform."');
    scene.actions([
      { label: 'Leave', goto: ['city_drugden', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPavDrugDropoff(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pavlovsk train station</b></center>');
  scene.img('images/locations/shared/train/pavplat.jpg');
  scene.text('You walk to the end of the platform and see a man hiding undercover smoking a cigarette');
  scene.text('Walking up to him you ask him if he has anything');
  scene.text('He turns and looks you up and down, "That depends on what you want little lady?"');
  scene.text('Heroin: ' + qspFunc(s, 'money', 'string_price', 560));
  scene.text('Cocaine: ' + qspFunc(s, 'money', 'string_price', 2100));
  scene.text('Amphetamine: ' + qspFunc(s, 'money', 'string_price', 600));
  scene.text('Weed: ' + qspFunc(s, 'money', 'string_price', 300));
  if (qspFunc(s, 'money', 'can_afford', 560, 'cash') === 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => String('Buy and use heroin (' + qspFunc(s, 'money', 'string_price', 560) + ')' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 560, 'cash');
    if (((st as any).drugVars ?? 0)?.['heroin_inject'] < 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      (st as any).drugUser = 1;
      qspCall(st, 'drugs', 'heroin');
      qspCall(st, 'stat', '');
      scene.text('<center><b>Pavlovsk train station</b></center>');
      scene.img('images/locations/city/residential/den/chase_dragon.jpg');
      scene.text('You pour the heroin onto some foil, heat it up and then using a straw you quickly inhale the steam.');
      scene.text('The rush is instantaneous, you close your eyes as it rolls over you.');
      scene.actions([
        { label: 'You lay there briefly rolling, before leaving', goto: ['events', 'pav_drug_dropoff'] },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      (st as any).drugUser = 1;
      qspCall(st, 'drugs', 'heroin');
      qspCall(st, 'stat', '');
      scene.text('<center><b>Pavlovsk train station</b></center>');
      scene.img('images/locations/pavlovsk/trainstation/event/usingheroin.jpg');
      scene.text('You buy some heroin and find a quiet place behind the platform to use it, and without thinking twice you shoot up.');
      scene.text('The rush is instantaneous, you close your eyes as it rolls over you.');
      scene.actions([
        { label: 'You lay there briefly rolling, before leaving', goto: ['events', 'pav_drug_dropoff'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('You don\'t have enough cash to buy heroin.');
  }
  if (qspFunc(s, 'money', 'can_afford', 2100, 'cash') === 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => String('Buy enough cocaine for 5 lines (' + qspFunc(s, 'money', 'string_price', 2100) + ')' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 2100, 'cash');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cocaine'] = ((st as any).mc_inventory['cocaine'] ?? 0) + (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'events', 'pav_drug_dropoff');
  } },
    ]);
  } else {
    scene.text('You don\'t have enough cash to buy cocaine.');
  }
  if (qspFunc(s, 'money', 'can_afford', 600, 'cash') === 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => String('Buy 5 Amphetamine (' + qspFunc(s, 'money', 'string_price', 600) + ')' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 600, 'cash');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['amphetamine'] = ((st as any).mc_inventory['amphetamine'] ?? 0) + (5);
    qspGoto(st, 'events', 'pav_drug_dropoff');
  } },
    ]);
  } else {
    scene.text('You don\'t have enough cash to buy amphetamine.');
  }
  if (qspFunc(s, 'money', 'can_afford', 300, 'cash') === 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => String('Buy enough weed for 5 joints (' + qspFunc(s, 'money', 'string_price', 300) + ')' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 300, 'cash');
    (st as any).drugUser = 1;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['joints'] = ((st as any).mc_inventory['joints'] ?? 0) + (5);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'events', 'pav_drug_dropoff');
  } },
    ]);
  } else {
    scene.text('You don\'t have enough cash to buy weed.');
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_train_hall', ''] },
  ]);
  scene.build();
}

function enterSnkayf1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'underwear', 'remove');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  (s as any).snkz = (Math.floor(Math.random() * 6) + 1);
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel4.jpg');
  scene.text('As you wake up, it feels like you\'ve been hit by a hammer. You realise that your underwear is missing. Unsure of where you are and what has happened, you try to get your bearings.');
  scene.actions([
    { label: 'Look around', handler: (st: GameState) => {
    if (((st as any).snkz ?? 0) === 1) {
      qspGoto(st, 'city_park', 'start');
    } else {
      if (((st as any).snkz ?? 0) === 2) {
        qspGoto(st, 'city_center', '');
      } else {
        if (((st as any).snkz ?? 0) === 3) {
          qspGoto(st, 'city_industrial', '');
        } else {
          if (((st as any).snkz ?? 0) === 4) {
            qspGoto(st, 'city_residential', '');
          } else {
            if (((st as any).snkz ?? 0) === 5) {
              qspGoto(st, 'dachi', '');
            } else {
              qspGoto(st, 'city_lake', 'start');
            }
          }
        }
      }
    }
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
    case 'read':
      enterRead(s, scene);
      break;
    case 'read_porn':
      enterReadPorn(s, scene);
      break;
    case 'snkayf':
      enterSnkayf(s, scene);
      break;
    case 'ask_pav_drug_dropoff':
      enterAskPavDrugDropoff(s, scene);
      break;
    case 'pav_drug_dropoff':
      enterPavDrugDropoff(s, scene);
      break;
    case 'snkayf1':
      enterSnkayf1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const events: LocationDef = {
  name: 'events',
  title: 'Passers puzzled turn around staring at you - one with surpri',
  region: 'other',
  enter: enter,
};
