import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_flamingos', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Flamingo\'s</b></center>');
  scene.img('images/locations/city/island/flamingos/shop.jpg');
  scene.text('Flamingos is trendy and modern while still keeping the prices low enough for the large student population on the Island.');
  scene.text('It mimics the latest fashions for young adults, but cuts costs on material and manufacturing. This suits the clients, who are likely to grow bored of an outfit before it falls apart.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pushkin_sq', ''] },
    { label: 'View dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_flamingos', 'dresses'] },
    { label: 'View other clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_flamingos', 'clothes'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_flamingos', 'purses'] },
  ]);
  scene.build();
}

function enterDresses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_flamingos', 'dresses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Flamingo\'s dresses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, Clothingstock mod 3
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_flamingos', 'start'] },
  ]);
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_flamingos', 'clothes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Flamingo\'s outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, (Clothingstock / 3) mod 2
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_flamingos', 'start'] },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_flamingos', 'purses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Flamingo\'s purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'flamingos');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_flamingos', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dresses':
      enterDresses(s, scene);
      break;
    case 'clothes':
      enterClothes(s, scene);
      break;
    case 'purses':
      enterPurses(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_flamingos: LocationDef = {
  name: 'shop_flamingos',
  title: 'Flamingo\'s',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  enter: enter,
};
