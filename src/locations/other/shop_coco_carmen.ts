import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_coco_carmen', 'start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Coco Carmen</b></center>');
  scene.img('images/locations/pavlovsk/coco/shop.jpg');
  scene.text('If you\'re happy to push through the tourists, then Coco has everything a young adult might like to wear. It\'s a step up from G&M and unless you can afford the boutiques in Old Town, you\'ll be spending some time buying outfits here.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the coco', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_commercial', ''] },
    { label: 'View dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_coco_carmen', 'dress'] },
    { label: 'View other outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_coco_carmen', 'outfits'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_coco_carmen', 'purses'] },
  ]);
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_coco_carmen', 'dress');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Coco Carmen dresses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'coco_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 6, Clothingstock mod 6
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'shop_coco_carmen', 'start');
  } },
  ]);
  scene.build();
}

function enterOutfits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_coco_carmen', 'outfits');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Coco Carmen outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'coco_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 4, (Clothingstock / 6) mod 4
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'shop_coco_carmen', 'start');
  } },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_coco_carmen', 'purses');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Coco Carmen purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'coco');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 4, (Clothingstock / 6) mod 4
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
    qspGoto(s, 'shop_coco_carmen', 'start');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dress':
      enterDress(s, scene);
      break;
    case 'outfits':
      enterOutfits(s, scene);
      break;
    case 'purses':
      enterPurses(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_coco_carmen: LocationDef = {
  name: 'shop_coco_carmen',
  title: 'Coco Carmen',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['If you\'re happy to push through the tourists, then Coco has everything a young adult might like to wear. It\'s a step up from G&M and unless you can afford the boutiques in Old Town, you\'ll be spending some time buying outfits here.'],
  enter: enter,
};
