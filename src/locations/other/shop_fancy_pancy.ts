import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fancy_pancy', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Fancy Pancy</b></center>');
  scene.img('images/locations/pushkin/fancypancy/shop.jpg');
  scene.text('This small boutique looks more like a dressing room at the nearby burlesque club than a clothing store. Satin, leather, ruffles and glamour make it clear this is not a place to buy a practical outfit.');
  scene.text('It\'s the only place in the city where you can buy outfits suitable for the burlesque club or perhaps spice up things in the bedroom.');
  scene.text('The boutique sells designer winter coats, burlesque clothing, beautiful shoes and exquisite handbags.');
  scene.actions([
    { label: 'Leave the boutique', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pushkin_sq', ''] },
    { label: 'View clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_fancy_pancy', 'clothes'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fancy_pancy', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Fancy Pancy</b></center>');
  scene.img('images/locations/pushkin/fancypancy/shop.jpg');
  scene.text('This small boutique looks more like a dressing room at the nearby burlesque club than a clothing store. Satin, leather, ruffles and glamour make it clear this is not a place to buy a practical outfit.');
  scene.text('It\'s the only place in the city where you can buy outfits suitable for the burlesque club or perhaps spice up things in the bedroom.');
  scene.text('The boutique sells designer winter coats, burlesque clothing, beautiful shoes and exquisite handbags.');
  scene.actions([
    { label: 'Leave the boutique', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pushkin_sq', ''] },
    { label: 'View clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_fancy_pancy', 'clothes'] },
  ]);
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_fancy_pancy', 'clothes');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Fancy Pancy outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'fancy_burlesque');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 2, ((s as any).Clothingstock ?? 0) % 2);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_fancy_pancy', 'start');
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
    case 'clothes':
      enterClothes(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_fancy_pancy: LocationDef = {
  name: 'shop_fancy_pancy',
  title: 'Fancy Pancy',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['This small boutique looks more like a dressing room at the nearby burlesque club than a clothing store. Satin, leather, ruffles and glamour make it clear this is not a place to buy a practical outfit.'],
  enter: enter,
};
