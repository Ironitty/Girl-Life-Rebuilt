import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/cafe/larek.jpg');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027larek/u0027, /u0027sofood/u0027); return false;">Select Products</a>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the store', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSofood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 21) {
    scene.text('The grocery department is closed');
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspGoto(s, 'larek', 'food');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFood(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Grocery department</b></center>');
  scene.img('images/locations/pushkin/cafe/larek.jpg');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027larek/u0027, /u0027buyfood/u0027); return false;">One serving food - 50 RUB</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027larek/u0027, /u0027buyfood2/u0027); return false;">One serving of diet friendly food - 250 RUB</a>');
  if (((s as any).bottle ?? 0)===0  &&  ((s as any).bag ?? 0)>0) {
    scene.actions([
      { label: 'Buy a bottle of water', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 50);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_water'] = 1;
      qspCall(st, 'stat', '');
      scene.text('You bought a bottle of water and put it in your purse.');
      scene.actions([
        { label: 'Exit Department', goto: ['larek', 'food'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['food_sandwich']===0  &&  ((s as any).bag ?? 0)>0) {
    scene.actions([
      { label: 'Buy a sandwich', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 100);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_sandwich'] = 1;
      qspCall(st, 'stat', '');
      scene.text('You bought a sandwich and put it in your purse.');
      scene.actions([
        { label: 'Exit Department', goto: ['larek', 'food'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['food_wine'] === 0  &&  ((s as any).bag ?? 0) > 0) {
    scene.actions([
      { label: 'Buy a bottle of cheap wine', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 500);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_wine'] = 1;
      qspCall(st, 'stat', '');
      scene.text('You bought a bottle of wine and put it in your purse.');
      scene.actions([
        { label: 'Exit Department', goto: ['larek', 'food'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit Department', goto: ['larek', 'start'] },
    { label: 'Buy tea biscuits', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 300);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_biscuits'] = ((st as any).mc_inventory['food_biscuits'] ?? 0) + (10);
      qspCall(st, 'stat', '');
      scene.text('You bought a bag of biscuits that go well with tea. You figure there\'s about ten servings inside.');
      scene.actions([
        { label: 'Exit Department', goto: ['larek', 'food'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBuyfood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 21) {
    scene.text('The grocery department is closed');
  } else {
    if (qspFunc(s, 'money', 'can_afford', 50) === 0) {
      scene.text('You don\'t have enough money');
    } else {
      qspGoto(s, 'larek', 'buyfood_1');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBuyfood_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/cafe/larek.jpg');
  (s as any).portion = window.prompt("How many servings would you like to buy?") ?? '';
  if (((s as any).portion ?? 0) <= 0) {
    (s as any).portion = 1;
  }
  if (qspFunc(s, 'money', 'can_afford', ((s as any).portion ?? 0) * 50) === 0) {
    scene.text('You don\'t have enough money.');
  } else {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_basic'] = ((s as any).mc_inventory['food_basic'] ?? 0) + (((s as any).portion ?? 0));
    qspCall(s, 'money', 'pay', ((s as any).portion ?? 0) * 50);
    scene.text('You paid cash for the food.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the counter', goto: ['larek', 'food'] },
  ]);
  scene.build();
}

function enterBuyfood2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 21) {
    scene.text('The grocery department is closed');
  } else {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      scene.text('You don\'t have enough money');
    } else {
      qspGoto(s, 'larek', 'buyfood2_1');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBuyfood2_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).portion = window.prompt("How many servings would you like to buy?") ?? '';
  if (((s as any).portion ?? 0) <= 0) {
    (s as any).portion = 1;
  }
  if (qspFunc(s, 'money', 'can_afford', ((s as any).portion ?? 0) * 250) === 0) {
    scene.text('You don\'t have enough money.');
  } else {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_diet'] = ((s as any).mc_inventory['food_diet'] ?? 0) + (((s as any).portion ?? 0));
    qspCall(s, 'money', 'pay', ((s as any).portion ?? 0) * 250);
    scene.img('images/locations/pushkin/cafe/larek.jpg');
    scene.text('You paid cash for the food.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the counter', goto: ['larek', 'food'] },
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
    case 'buyfood':
      enterBuyfood(s, scene);
      break;
    case 'buyfood_1':
      enterBuyfood_1(s, scene);
      break;
    case 'buyfood2':
      enterBuyfood2(s, scene);
      break;
    case 'buyfood2_1':
      enterBuyfood2_1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const larek: LocationDef = {
  name: 'larek',
  title: 'Grocery department',
  region: 'other',
  enter: enter,
};
