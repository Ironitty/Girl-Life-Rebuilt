import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_tsar_bomba', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Tsar Bomba</b></center>');
  scene.img('images/locations/pushkin/bomba/shop.jpg');
  scene.text('Tsar Bomba, a small clothing store in the Okhlopkov Square. It\'s fairly unique and used to be very cool with punk fashion, but is much more generic these days and could easily be mistaken for an alternative fashion chain store.');
  scene.text('Simply put, this place is very cool and most of the clothes are strange, yet wonderful.');
  scene.actions([
    { label: 'Leave the bomba', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pushkin_sq', ''] },
    { label: 'View dresses', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['shop_tsar_bomba', 'dresses'] },
    { label: 'View outfits', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['shop_tsar_bomba', 'clothes'] },
    { label: 'View shoes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['shop_tsar_bomba', 'shoes'] },
    { label: 'View purses', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['shop_tsar_bomba', 'purses'] },
    { label: 'View coats', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['shop_tsar_bomba', 'coats'] },
  ]);
  scene.build();
}

function enterDresses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_tsar_bomba', 'dresses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Tsar Bomba dresses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, Clothingstock mod 2
    qspCall(s, 'clothing_view', 'init_sorted');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_tsar_bomba', 'start'] },
  ]);
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_tsar_bomba', 'clothes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Tsar Bomba outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, (Clothingstock / 2) mod 2
    qspCall(s, 'clothing_view', 'init_sorted');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_tsar_bomba', 'start'] },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_tsar_bomba', 'purses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Tsar Bomba purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba');
    qspCall(s, 'purse_view', 'init_sorted');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_tsar_bomba', 'start'] },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_tsar_bomba', 'shoes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Tsar Bomba shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba');
    qspCall(s, 'shoe_view', 'init_sorted');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_tsar_bomba', 'start'] },
  ]);
  scene.build();
}

function enterCoats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_tsar_bomba', 'coats');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Tsar Bomba coats</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'coats', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'bomba');
    qspCall(s, 'coat_view', 'init_sorted');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_tsar_bomba', 'start'] },
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
    case 'shoes':
      enterShoes(s, scene);
      break;
    case 'coats':
      enterCoats(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_tsar_bomba: LocationDef = {
  name: 'shop_tsar_bomba',
  title: 'Tsar Bomba',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['Tsar Bomba, a small clothing store in the Okhlopkov Square. It\'s fairly unique and used to be very cool with punk fashion, but is much more generic these days and could easily be mistaken for an alternative fashion chain store.'],
  enter: enter,
};
