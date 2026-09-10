import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).KFOnLineReaga ?? 0) > 0) {
    scene.text('Welcome to Vertep World!');
    // TODO-QSP: dynamic text: You can play for <<KFOnLineReaga>> more days, but can extend the duration of you...
    scene.text(`You can play for ${((s as any).KFOnLineReaga ?? 0)} more days, but can extend the duration of your playtime at any time via online banking (' + $func('money', 'string_price', 1000) + ' for 30 days)`);
    if (((s as any).KGOLpers ?? 0) > 0) {
      scene.text('You can enter the game with your current character, or delete them.');
      // TODO-QSP: dynamic text: <<$KGOLname>> - <<KGOLlvl>> <<$KGOLrace>> <<$KGOLklass>>
      scene.text(`${((s as any).KGOLname ?? 0)} - ${((s as any).KGOLlvl ?? 0)} ${((s as any).KGOLrace ?? 0)} ${((s as any).KGOLklass ?? 0)}`);
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
    if (((s as any).KGOLname ?? 0) === '') {
      // TODO-QSP: msg 'Please enter a valid name!'
      scene.actions([{ label: 'Continue', goto: ['KGstart', ''] }]);
    }
    // TODO-QSP: dynamic text: Your character's name is: <<$KGOLname>>
    scene.text(`Your character's name is: ${((s as any).KGOLname ?? 0)}`);
    scene.text('Please select a player race:');
    scene.actions([
      { label: 'Human', handler: (st: GameState) => {
    // TODO-QSP: $KGOLrace = 'Human'
  }, goto: ['KGstart', 'KGOLklassvibor'] },
      { label: 'Elf', handler: (st: GameState) => {
    // TODO-QSP: $KGOLrace = 'Elf'
  }, goto: ['KGstart', 'KGOLklassvibor'] },
      { label: 'Zveroid', handler: (st: GameState) => {
    // TODO-QSP: $KGOLrace = 'Zveroid'
  }, goto: ['KGstart', 'KGOLklassvibor'] },
    ]);
  } },
      ]);
    }
    if (qspFunc(s, 'money', 'can_afford', 1000, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1000, 'bank');
      (s as any).KFOnLineReaga = ((s as any).KFOnLineReaga ?? 0) + (30);
      scene.actions([{ label: 'Continue', goto: ['KGstart', ''] }]);
    }
    scene.actions([
      { label: 'Pay for more days [+$func(\'money\', \'get_cost_string\', 1000, ...]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.text('Welcome to Vertep World!');
  // TODO-QSP: dynamic text: To access this game, you must have a valid subscription paid via online banking ...
  scene.text('To access this game, you must have a valid subscription paid via online banking (\' + $func(\'money\', \'string_price\', 1000) + \' for 30 days)');
  scene.actions([
    { label: 'Buy game coins [+$func(\'money\', \'get_cost_string\', 1, \'ba...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).KGOLdonat = qspUntranslated(s, "input(\"How many coins do you wish to purchase?\")", { location: "KGstart" });
      if (((s as any).KGOLdonat ?? 0) <= 0  ||  qspFunc(s, 'money', 'can_afford', ((s as any).KGOLdonat ?? 0), 'bank') === 0) {
      } else {
        qspCall(s, 'money', 'pay', ((s as any).KGOLdonat ?? 0), 'bank');
        (s as any).KGOLmoney = ((s as any).KGOLmoney ?? 0) + (((s as any).KGOLdonat ?? 0));
      }
      scene.actions([{ label: 'Continue', goto: ['KGstart', ''] }]);
    }
  } },
    { label: 'Pay for access [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'bank') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1000, 'bank');
      (s as any).KFOnLineReaga = ((s as any).KFOnLineReaga ?? 0) + (30);
      scene.actions([{ label: 'Continue', goto: ['KGstart', ''] }]);
    }
  } },
  ]);
  scene.build();
}

export const KGstart: LocationDef = {
  name: 'KGstart',
  title: 'Welcome to Vertep World!',
  region: 'kgd',
  description: ['Welcome to Vertep World!'],
  enter: enter,
};
