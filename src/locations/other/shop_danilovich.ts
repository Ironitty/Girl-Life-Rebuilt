import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'start');
  (s as any).loc_s = 'shop_danilovich';
  (s as any).args_s = 'start';
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Danilovich sporting goods</b></center>');
  scene.img('images/locations/city/citycenter/mall/sportshop/sportshop.jpg');
  scene.text('As soon as you enter, a high energy song with a thumping baseline fills your eardrums, making you feel pumped and awake. The store is sleek and professional, the walls and floors advertising all different kinds of sporting equipment and attire.');
  scene.text('The room is filled with beautifully fit people shopping, their bodies varying from big and muscular to lean and trim. If they don\'t inspire you to want to work out, the posters advertising past and present famous athletes are just as motivating.');
  scene.text('A tall muscular man stands next to the counter, showing a perfect smile. "Welcome, do you need any assistance in selecting equipment or tips how to improve your workout?"');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'sports');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    { label: 'View sports clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'clo'] },
    { label: 'View sports bras', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'bras'] },
    { label: 'View sports panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'panties'] },
    { label: 'View exercise shoes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'shoes'] },
    { label: 'View swimwear', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'swim'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'purses'] },
    { label: 'View coats', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'coats'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'start');
  (s as any).loc_s = 'shop_danilovich';
  (s as any).args_s = 'start';
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Danilovich sporting goods</b></center>');
  scene.img('images/locations/city/citycenter/mall/sportshop/sportshop.jpg');
  scene.text('As soon as you enter, a high energy song with a thumping baseline fills your eardrums, making you feel pumped and awake. The store is sleek and professional, the walls and floors advertising all different kinds of sporting equipment and attire.');
  scene.text('The room is filled with beautifully fit people shopping, their bodies varying from big and muscular to lean and trim. If they don\'t inspire you to want to work out, the posters advertising past and present famous athletes are just as motivating.');
  scene.text('A tall muscular man stands next to the counter, showing a perfect smile. "Welcome, do you need any assistance in selecting equipment or tips how to improve your workout?"');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'sports');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    { label: 'View sports clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'clo'] },
    { label: 'View sports bras', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'bras'] },
    { label: 'View sports panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'panties'] },
    { label: 'View exercise shoes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'shoes'] },
    { label: 'View swimwear', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'swim'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'purses'] },
    { label: 'View coats', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_danilovich', 'coats'] },
  ]);
  scene.build();
}

function enterBuyRefillBottle(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'pay', 1000);
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['refill_bottle'] = 1;
  if (((s as any).intro_custom_shop_return ?? 0) === 1) {
    qspGoto(s, 'intro_character_custom', 'modclo');
  } else {
    dynamicGoto(s, 'loc_s', 'args_s');
  }
  scene.build();
}

function enterClo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'clo');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sportswear - one size fits all</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich_outfits');
    qspCall(s, 'shop_utils', 'init', 'set_default_exceptions');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_danilovich', 'start');
  } },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'shoes');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Sport shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_danilovich', 'start');
  } },
  ]);
  scene.build();
}

function enterSwim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'swim');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Swimwear - one size fits all</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich_swimsuit');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 2, ((s as any).Clothingstock ?? 0) % 2);
    qspCall(s, 'shop_utils', 'init', 'set_default_exceptions');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_danilovich', 'start');
  } },
  ]);
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'panties');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Sport panties</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_danilovich', 'start');
  } },
  ]);
  scene.build();
}

function enterBras(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'bras');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Sport bras</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_danilovich', 'start');
  } },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'purses');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Sport purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 2, (((s as any).Clothingstock ?? 0) / 6) % 2);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_danilovich', 'start');
  } },
  ]);
  scene.build();
}

function enterCoats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_danilovich', 'coats');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Sport coats</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'coats', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'danilovich');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_danilovich', 'start');
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
    case 'buy_refill_bottle':
      enterBuyRefillBottle(s, scene);
      break;
    case 'clo':
      enterClo(s, scene);
      break;
    case 'shoes':
      enterShoes(s, scene);
      break;
    case 'swim':
      enterSwim(s, scene);
      break;
    case 'panties':
      enterPanties(s, scene);
      break;
    case 'bras':
      enterBras(s, scene);
      break;
    case 'purses':
      enterPurses(s, scene);
      break;
    case 'coats':
      enterCoats(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_danilovich: LocationDef = {
  name: 'shop_danilovich',
  title: 'Danilovich sporting goods',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['As soon as you enter, a high energy song with a thumping baseline fills your eardrums, making you feel pumped and awake. The store is sleek and professional, the walls and floors advertising all different kinds of sporting equipment and attire.'],
  enter: enter,
};
