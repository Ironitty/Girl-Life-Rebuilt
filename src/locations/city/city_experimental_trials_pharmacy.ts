import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCounter(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Experimental Pharmacy</b></center>');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\pharmacist1.jpg');
    scene.text('You approach the pharmacy front desk. The older pharmacist behind the counter looks up at you and gives you a smile.');
    scene.text('"How can I help you?"');
  } else {
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\pharmacist2.jpg');
    scene.text('You approach the pharmacy front desk. The middle aged pharmacist behind the counter looks up at you and smiles.');
    scene.text('"How can I help you".');
  }
  if (((s as any).experimentQW ?? 0)?.['times_participated_1'] === 0  &&  ((s as any).experimentQW ?? 0)?.['times_participated_2'] === 0  &&  ((s as any).experimentQW ?? 0)?.['times_participated_3'] === 0  &&  ((s as any).experimentQW ?? 0)?.['times_participated_4'] === 0) {
    scene.text('"If any of our experimental trials lead to a breakthrough, we will sell the medicine those trials produced here. Currently all of our trials are ongoing so there\'s nothing in stock, do check back later. Sign up for a trial, if you want to help us develop medicine for the future."');
  } else {
    scene.actions([
      { label: 'Buy something', goto: ['city_experimental_trials_pharmacy', 'cart'] },
    ]);
  }
  scene.actions([
    { label: 'Go back to the front desk', goto: ['city_experimental_trials', 'front_desk'] },
  ]);
  scene.build();
}

function enterCart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'experimental_trials');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Exit shopping cart', handler: (st: GameState) => {
    qspCall(st, 'item_cart', 'shopping_var_clear');
  }, goto: ['city_experimental_trials_pharmacy', 'counter'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'counter':
      enterCounter(s, scene);
      break;
    case 'cart':
      enterCart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_experimental_trials_pharmacy: LocationDef = {
  name: 'city_experimental_trials_pharmacy',
  title: 'Experimental Pharmacy',
  region: 'city',
  enter: enter,
};
