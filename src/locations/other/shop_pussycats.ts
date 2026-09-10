import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'dress');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats dresses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, Clothingstock mod 3
    qspCall(s, 'shop_utils', 'init', 'set_default_exceptions');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'clothes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, (Clothingstock / 3) mod 3
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'shoes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'panties');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats panties</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterBras(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'bras');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats bras</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'purses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterCoats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'coats');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats coats</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'coats', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).random = Math.floor(Math.random() * 15) + 0;
  if (((s as any).random ?? 0) === 0) {
    qspCall(s, 'shop_pussycats', '0');
  } else {
    qspCall(s, 'shop_pussycats', '1');
    if (((s as any).random ?? 0) === 2) {
      qspCall(s, 'shop_pussycats', '2');
    } else {
      qspCall(s, 'shop_pussycats', '3');
      if (((s as any).random ?? 0) === 4) {
        qspCall(s, 'shop_pussycats', '4');
      } else {
        qspCall(s, 'shop_pussycats', '5');
        if (((s as any).random ?? 0) === 6) {
          qspCall(s, 'shop_pussycats', '6');
        } else {
          qspCall(s, 'shop_pussycats', '7');
          if (((s as any).random ?? 0) === 8) {
            qspCall(s, 'shop_pussycats', '8');
          } else {
            qspCall(s, 'shop_pussycats', '9');
            if (((s as any).random ?? 0) === 10) {
              qspCall(s, 'shop_pussycats', '10');
            } else {
              qspCall(s, 'shop_pussycats', '11');
              if (((s as any).random ?? 0) === 12) {
                qspCall(s, 'shop_pussycats', '12');
              } else {
                qspCall(s, 'shop_pussycats', '13');
                qspCall(s, 'shop_pussycats', '14');
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dress':
      enterDress(s, scene);
      break;
    case 'clothes':
      enterClothes(s, scene);
      break;
    case 'shoes':
      enterShoes(s, scene);
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
    case 'events':
      enterEvents(s, scene);
      break;
    default:
      enterDress(s, scene);
      break;
  }
}

export const shop_pussycats: LocationDef = {
  name: 'shop_pussycats',
  title: 'The store is closed.',
  region: 'other',
  locclass: 'changingroom',
  enter: enter,
};
