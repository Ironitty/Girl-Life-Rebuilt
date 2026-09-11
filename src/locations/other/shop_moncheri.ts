import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChangingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'changingroom');
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    scene.text('As you walk through the store you notice that there\'s nobody in the changing rooms. Feeling a bit bored, you go look at some clothes and grab several items to try on before heading into one of the changing rooms.');
  } else {
    scene.img('images/locations/city/citycenter/mall/fashionista/changingroom.jpg');
    scene.text('You are in the changing rooms in Mon Chéri with several outfits available to try on.');
  }
  qspCall(s, 'shortgs', 'clothing_state');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Put on underwear', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
  }, goto: ['shop_moncheri', 'changingroom'] },
    ]);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Get naked', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'strip');
  }, goto: ['shop_moncheri', 'changingroom'] },
    ]);
  }
  scene.actions([
    { label: 'Try on dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'dresses'] },
    { label: 'Try on gowns', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'gowns'] },
    { label: 'try on bodysuits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'bodysuit'] },
    { label: 'Get dressed and go back to the store', goto: ['shop_moncheri', 'changingend'] },
  ]);
  scene.build();
}

function enterChangingend(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'restore', 'moncheri');
  qspCall(s, 'outfit', 'remove_backup', 'moncheri');
  scene.actions([{ label: 'Continue', goto: ['shop_moncheri', 'start'] }]);
  scene.build();
}

function enterGowns(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'gowns');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri_gown');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, Clothingstock mod 3
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_moncheri', 'changingroom'] },
  ]);
  scene.build();
}

function enterDresses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'dresses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, (Clothingstock / 3) mod 2
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_moncheri', 'changingroom'] },
  ]);
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'bodysuit');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri bodysuits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bodysuits', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_moncheri', 'changingroom'] },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'shoes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, (Clothingstock / 4) mod 3
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_moncheri', 'start'] },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'purses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_moncheri', 'start'] },
  ]);
  scene.build();
}

function enterCoats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'coats');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri coats</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'coats', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_moncheri', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'changingroom':
      enterChangingroom(s, scene);
      break;
    case 'changingend':
      enterChangingend(s, scene);
      break;
    case 'gowns':
      enterGowns(s, scene);
      break;
    case 'dresses':
      enterDresses(s, scene);
      break;
    case 'bodysuit':
      enterBodysuit(s, scene);
      break;
    case 'shoes':
      enterShoes(s, scene);
      break;
    case 'purses':
      enterPurses(s, scene);
      break;
    case 'coats':
      enterCoats(s, scene);
      break;
    default:
      enterChangingroom(s, scene);
      break;
  }
}

export const shop_moncheri: LocationDef = {
  name: 'shop_moncheri',
  title: 'Mon Chéri',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['As you walk through the store you notice that there\'s nobody in the changing rooms. Feeling a bit bored, you go look at some clothes and grab several items to try on before heading into one of the changing rooms.'],
  enter: enter,
};
