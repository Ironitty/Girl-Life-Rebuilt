import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shoplocation ?? 0) === 'items') {
    scene.actions([{ label: 'Continue', goto: ['shop_materinstvo', 'items'] }]);
  }
  qspCall(s, 'core_library', 'setloc', 'shop_materinstvo', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'shop_materinstvo', 'config');
  scene.text('<center><b>Mommy Style</b></center>');
  scene.img('images/locations/city/citycenter/mall/mommy/shop.jpg');
  scene.text('This is a shop dedicated to all things pregnancy related. Here you can buy Pregnancy Clothing or items to aid the process of getting through the day.');
  scene.actions([
    { label: 'Leave the Shop', goto: ['city_mall', ''] },
    { label: 'View clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_materinstvo', 'clothes'] },
  ]);
  scene.build();
}

function enterItems(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_materinstvo', 'items');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/mommy/shop1.jpg');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'mothershop');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Return', goto: ['shop_materinstvo', 'start'] },
  ]);
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_materinstvo', 'clothes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mommy Style clothing</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'materinstvo_dress');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_materinstvo', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
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
