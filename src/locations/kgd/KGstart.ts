import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).KFOnLineReaga ?? 0) > 0) {
    scene.text('Welcome to Vertep World!');
    scene.text(`'You can play for ${((s as any).KFOnLineReaga ?? '')} more days, but can extend the duration of your playtime at any time via online banking (1000₽ for 30 days)'`);
    if (((s as any).KGOLpers ?? 0) > 0) {
      scene.text('You can enter the game with your current character, or delete them.');
      scene.text(`${((s as any).KGOLname ?? '')} - ${((s as any).KGOLlvl ?? '')} ${((s as any).KGOLrace ?? '')} ${((s as any).KGOLklass ?? '')}`);
      scene.actions([
        { label: 'Play', goto: ['KGOLgame', ''] },
        { label: 'Delete a character', handler: (st: GameState) => {
    (st as any).KGOLpers = 0;
  }, goto: ['KGstart', ''] },
      ]);
    } else {
      scene.text('You can now create a character!');
      scene.actions([
        { label: 'Create a character', handler: (st: GameState) => {
    (st as any).KGOLname = window.prompt("Enter your character name") ?? '';
    if (((st as any).KGOLname ?? 0) === '') {
      alert('Please enter a valid name!');
      qspGoto(st, 'KGstart', '');
    }
    scene.text(`Your character's name is: ${((st as any).KGOLname ?? '')}`);
    scene.text('Please select a player race:');
    scene.actions([
      { label: 'Human', handler: (st: GameState) => {
    (st as any).KGOLrace = 'Human';
  }, goto: ['KGstart', 'KGOLklassvibor'] },
      { label: 'Elf', handler: (st: GameState) => {
    (st as any).KGOLrace = 'Elf';
  }, goto: ['KGstart', 'KGOLklassvibor'] },
      { label: 'Zveroid', handler: (st: GameState) => {
    (st as any).KGOLrace = 'Zveroid';
  }, goto: ['KGstart', 'KGOLklassvibor'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pay for more days', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 1000, 'bank');
      (st as any).KFOnLineReaga = ((st as any).KFOnLineReaga ?? 0) + (30);
      qspGoto(st, 'KGstart', '');
    }
  } },
      { label: 'Buy game coins', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).KGOLdonat = window.prompt("How many coins do you wish to purchase?") ?? '';
      if (((st as any).KGOLdonat ?? 0) <= 0  ||  qspFunc(s, 'money', 'can_afford', ((st as any).KGOLdonat ?? 0), 'bank') === 0) {
        alert('Please enter a valid amount!');
      } else {
        qspCall(st, 'money', 'pay', ((st as any).KGOLdonat ?? 0), 'bank');
        (st as any).KGOLmoney = ((st as any).KGOLmoney ?? 0) + (((st as any).KGOLdonat ?? 0));
        alert('Thank you! ' + ((st as any).KGOLdonat ?? 0) + ' coins have been added to your account.');
      }
      qspGoto(st, 'KGstart', '');
    }
  } },
    ]);
  } else {
    scene.text('Welcome to Vertep World!');
    scene.text('\'To access this game, you must have a valid subscription paid via online banking (1000₽ for 30 days)\'');
    scene.actions([
      { label: 'Pay for access', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 1000, 'bank');
      (st as any).KFOnLineReaga = ((st as any).KFOnLineReaga ?? 0) + (30);
      qspGoto(st, 'KGstart', '');
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['komp', 'start'] },
  ]);
  scene.build();
}

function enterKGOLklassvibor(s: GameState, scene: SceneBuilder): void {
  scene.text('Please select a character class:');
  if (((s as any).KGOLrace ?? 0) === 'Human') {
    scene.text('Available Human classes: Warrior, Rogue, Mage');
    scene.actions([
      { label: 'Warrior', handler: (st: GameState) => {
    (st as any).KGOLklass = 'Warrior';
  }, goto: ['KGstart', 'KGOLklassvibor2'] },
      { label: 'Rogue', handler: (st: GameState) => {
    (st as any).KGOLklass = 'Rogue';
  }, goto: ['KGstart', 'KGOLklassvibor2'] },
      { label: 'Mage', handler: (st: GameState) => {
    (st as any).KGOLklass = 'Mage';
  }, goto: ['KGstart', 'KGOLklassvibor2'] },
    ]);
  } else {
    if (((s as any).KGOLrace ?? 0) === 'Elf') {
      scene.text('Available Elf classes: Priest, Archer');
      scene.actions([
        { label: 'Priest', handler: (st: GameState) => {
    (st as any).KGOLklass = 'Priest';
  }, goto: ['KGstart', 'KGOLklassvibor2'] },
        { label: 'Archer', handler: (st: GameState) => {
    (st as any).KGOLklass = 'Archer';
  }, goto: ['KGstart', 'KGOLklassvibor2'] },
      ]);
    } else {
      if (((s as any).KGOLrace ?? 0) === 'Zveroid') {
        scene.text('Available Zveroid classes: Barbarian');
        scene.actions([
          { label: 'Barbarian', handler: (st: GameState) => {
    (st as any).KGOLklass = 'Barbarian';
  }, goto: ['KGstart', 'KGOLklassvibor2'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterKGOLklassvibor2(s: GameState, scene: SceneBuilder): void {
  (s as any).KGOLexp = 0;
  (s as any).KGOLlvl = 1;
  (s as any).KGOLbrona = 0;
  (s as any).KGOLwpower = 0;
  scene.text(`${((s as any).KGOLname ?? '')} ${((s as any).KGOLrace ?? '')} ${((s as any).KGOLklass ?? '')} ${((s as any).KGOLlvl ?? '')} level`);
  if (((s as any).KGOLklass ?? 0) === 'Warrior') {
    (s as any).KGOLstren = 30;
    (s as any).KGOLspeed = 20;
    (s as any).KGOLvital = 30;
    (s as any).KGOLintel = 20;
  } else {
    if (((s as any).KGOLklass ?? 0) === 'Rogue') {
      (s as any).KGOLstren = 20;
      (s as any).KGOLspeed = 30;
      (s as any).KGOLvital = 20;
      (s as any).KGOLintel = 30;
    } else {
      if (((s as any).KGOLklass ?? 0) === 'Mage') {
        (s as any).KGOLstren = 10;
        (s as any).KGOLspeed = 20;
        (s as any).KGOLvital = 20;
        (s as any).KGOLintel = 50;
      } else {
        if (((s as any).KGOLklass ?? 0) === 'Priest') {
          (s as any).KGOLstren = 10;
          (s as any).KGOLspeed = 10;
          (s as any).KGOLvital = 10;
          (s as any).KGOLintel = 70;
        } else {
          if (((s as any).KGOLklass ?? 0) === 'Archer') {
            (s as any).KGOLstren = 20;
            (s as any).KGOLspeed = 40;
            (s as any).KGOLvital = 10;
            (s as any).KGOLintel = 30;
          } else {
            if (((s as any).KGOLklass ?? 0) === 'Barbarian') {
              (s as any).KGOLstren = 40;
              (s as any).KGOLspeed = 10;
              (s as any).KGOLvital = 40;
              (s as any).KGOLintel = 10;
            }
          }
        }
      }
    }
  }
  (s as any).KGHP = ((s as any).KGOLvital ?? 0) * 10;
  (s as any).KGMana = ((s as any).KGOLintel ?? 0) * 10;
  scene.actions([
    { label: 'Play', handler: (st: GameState) => {
    (st as any).KGOLpers = 1;
  }, goto: ['KGOLgame', ''] },
    { label: 'Delete a character', handler: (st: GameState) => {
    (st as any).KGOLpers = 0;
  }, goto: ['KGstart', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'KGOLklassvibor':
      enterKGOLklassvibor(s, scene);
      break;
    case 'KGOLklassvibor2':
      enterKGOLklassvibor2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const KGstart: LocationDef = {
  name: 'KGstart',
  title: 'Welcome to Vertep World!',
  region: 'kgd',
  description: ['Welcome to Vertep World!'],
  enter: enter,
};
