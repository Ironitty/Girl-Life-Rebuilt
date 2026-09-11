import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).people = Math.floor(Math.random() * 15) + 1;
  if (((s as any).people ?? 0) <= 5) {
    scene.text('<center><b>Pharmacy</b></center>');
    scene.img(`images/locations/pavlovsk/pharmacy/aptekabusy${((s as any).people ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: There is <<people>> ' + iif(people < 2 or people > 4, 'people' , 'man' ) + ' in ...
    scene.text(`There is ${((s as any).people ?? 0)} ' + iif(people < 2 or people > 4, 'people' , 'man' ) + ' in line as you walk up to the counter to check out.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Wait in line', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 1) * ((s as any).people ?? 0));
    (s as any).people = 0;
    qspCall(s, 'stat', '');
  }, goto: ['city_pharmacy', 'shop'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['city_pharmacy', 'shop'] }]);
  }
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pharmacy</b></center>');
  if (((s as any).pharma_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).pharma_day = ((s as any).daystart ?? 0);
    (s as any).pharma_picrand = Math.floor(Math.random() * 4) + 1;
  }
  scene.img('images/locations/pavlovsk/pharmacy/apteka_worker_\'+pharma_picrand+\'.jpg');
  scene.text('A young woman in a white coat stands behind the counter. She smiles as you approach. "Hello, what can I help you with?"');
  if (((s as any).KandidNapr ?? 0) === 1) {
    scene.actions([
      { label: 'Buy Antifungal medication [+$func(\'money\', \'get_cost_string\', 1050)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1050) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_pharmacy', 'buy_antifungal'] }]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Buy something', goto: ['city_pharmacy', 'cart'] },
    { label: 'Leave the pharmacy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'item_cart', 'shopping_var_clear');
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterBuyAntifungal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).Kandidoz ?? 0) >= 30) {
    qspCall(s, 'money', 'pay', 1050);
    (s as any).Kandidoz = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/pharmacy/apteka_worker_\'+pharma_picrand+\'.jpg');
    scene.text('You bought 1 <b>Antifungal medication</b>.');
    scene.text('You put the money on the counter before immediately opening the package and swallowing the tablet. A while later, you start feeling better.');
    scene.actions([
      { label: 'Return', goto: ['city_pharmacy', 'shop'] },
    ]);
  } else {
    if (((s as any).Kandidoz ?? 0) < 30  &&  ((s as any).KandidozOnce ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['city_pharmacy', 'shop'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_pharmacy', 'shop'] }]);
    }
  }
  scene.build();
}

function enterCart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'chemist');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/pharmacy/apteka_worker_'+pharma_picrand+'.jpg');
  scene.actions([
    { label: 'Exit shopping cart', handler: (st: GameState) => {
    qspCall(st, 'item_cart', 'shopping_var_clear');
  }, goto: ['city_pharmacy', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'buy_antifungal':
      enterBuyAntifungal(s, scene);
      break;
    case 'cart':
      enterCart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_pharmacy: LocationDef = {
  name: 'city_pharmacy',
  title: 'Pharmacy',
  region: 'city',
  locationType: 'public_indoors',
  enter: enter,
};
