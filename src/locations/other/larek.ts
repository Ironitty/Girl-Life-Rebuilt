import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/cafe/larek.jpg');
  scene.text('<a href="exec: gs \'larek\', \'sofood\' ">Select Products</a>');
  scene.actions([
    { label: 'Leave the store', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSofood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 21) {
    scene.text('The grocery department is closed');
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.actions([{ label: 'Continue', goto: ['larek', 'food'] }]);
  }
  scene.build();
}

function enterFood(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Grocery department</b></center>');
  scene.img('images/locations/pushkin/cafe/larek.jpg');
  scene.text('<a href="exec: gs \'larek\', \'buyfood\' ">One serving food - 50 RUB</a>');
  scene.text('<a href="exec: gs \'larek\', \'buyfood2\' ">One serving of diet friendly food - 250 RUB</a>');
  if (((s as any).bottle ?? 0)===0  &&  ((s as any).bag ?? 0)>0) {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50);
      (s as any).mc_inventory['food_water'] = 1;
      qspCall(s, 'stat', '');
      scene.text('You bought a bottle of water and put it in your purse.');
      scene.actions([
        { label: 'Exit Department', goto: ['larek', 'food'] },
      ]);
    }
    scene.actions([
      { label: 'Buy a bottle of water [+$func(\'money\', \'get_cost_string\', 50)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Exit Department', goto: ['larek', 'start'] },
    { label: 'Buy tea biscuits [+$func(\'money\', \'get_cost_string\', 300)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300);
      (s as any).mc_inventory['food_biscuits'] = ((s as any).mc_inventory['food_biscuits'] ?? 0) + (10);
      qspCall(s, 'stat', '');
      scene.text('You bought a bag of biscuits that go well with tea. You figure there\'s about ten servings inside.');
      scene.actions([
        { label: 'Exit Department', goto: ['larek', 'food'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'sofood':
      enterSofood(s, scene);
      break;
    case 'food':
      enterFood(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const larek: LocationDef = {
  name: 'larek',
  title: 'Grocery department',
  region: 'other',
  enter: enter,
};
