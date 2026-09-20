import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_materinstvo', 'start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'shop_materinstvo', 'config');
  scene.text('<center><b>Mommy Style</b></center>');
  scene.img('images/locations/city/citycenter/mall/mommy/shop.jpg');
  scene.text('This is a shop dedicated to all things pregnancy related. Here you can buy Pregnancy Clothing or items to aid the process of getting through the day.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the Shop', goto: ['city_mall', ''] },
    { label: 'View clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_materinstvo', 'clothes'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_materinstvo', 'start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'shop_materinstvo', 'config');
  scene.text('<center><b>Mommy Style</b></center>');
  scene.img('images/locations/city/citycenter/mall/mommy/shop.jpg');
  scene.text('This is a shop dedicated to all things pregnancy related. Here you can buy Pregnancy Clothing or items to aid the process of getting through the day.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the Shop', goto: ['city_mall', ''] },
    { label: 'View clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_materinstvo', 'clothes'] },
  ]);
  scene.build();
}

function enterItems(s: GameState, scene: SceneBuilder): void {
  (s as any).shoplocation = 'items';
  qspCall(s, 'core_library', 'setloc', 'shop_materinstvo', 'items');
  (s as any).loc_s = 'shop_materinstvo';
  (s as any).args_s = 'items';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/mommy/shop1.jpg');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'mothershop');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['shop_materinstvo', 'start'] },
  ]);
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_materinstvo', 'clothes');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mommy Style clothing</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'materinstvo_dress');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_materinstvo', 'start');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shoplocation ?? 0) === 'items') {
    qspGoto(s, 'shop_materinstvo', 'items');
  }
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'items':
      enterItems(s, scene);
      break;
    case 'clothes':
      enterClothes(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_materinstvo: LocationDef = {
  name: 'shop_materinstvo',
  title: 'Mommy Style',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['This is a shop dedicated to all things pregnancy related. Here you can buy Pregnancy Clothing or items to aid the process of getting through the day.'],
  enter: enter,
};
