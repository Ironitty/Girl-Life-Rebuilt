import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_s = 'gad_store';
  (s as any).args_s = 'cart';
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The shop is currently closed.');
    scene.actions([
{ label: 'Leave', goto: ['gadukino', ''] },
]);
    return;
  }
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'gad_store');
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/market.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit shopping cart', handler: (st: GameState) => {
    // TODO-QSP: $backimage = ''
  }, goto: ['gad_store', ''] },
    { label: 'Leave the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gadukino', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_store', '');
  (s as any).location_type = 'public_indoors';
  (s as any).frost = 0;
  scene.text('<center><b>Village Shop</b></center>');
  scene.img('images/locations/gadukino/village/market.jpg');
  scene.text('You walk into the small shop with four narrow aisles with chest-high shelves full of food and other household goods. There is little variety in the selections, just the most essential products.');
  scene.text('Slowly you browse the aisles, looking for something to buy.');
  scene.text('As you approach the teller, you notice a rack full of magazines, cigarettes, and a few hygienic items.');
  qspCall(s, 'gp_elene', 'check_for_chores', 'store');
  scene.actions([
    { label: 'Browse the aisles', goto: ['gad_store', 'cart'] },
    { label: 'Leave the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gadukino', ''] },
  ]);
  const arg = s.locArg;
  switch (arg) {
    case 'cart':
      enterCart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_store: LocationDef = {
  name: 'gad_store',
  title: 'Village Shop',
  region: 'gadukino',
  locationType: 'public_indoors',
  enter: enter,
};
