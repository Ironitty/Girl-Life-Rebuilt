import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Nerdvana</b></center>');
  scene.img('images/locations/city/island/nerdvana/shop.jpg');
  scene.text('If you\'re happy to push through the tourists, then Nerdvana has everything a young adult might like to wear. It\'s only a minor step up from G&M, but unless you can afford the boutiques in Old Town, you\'ll be buying your outfits here.');
  if (((s as any).nerdvana_staff_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).nerdvana_staff = (Math.floor(Math.random() * 2) + 0);
    (s as any).nerdvana_staff_day = ((s as any).daystart ?? 0);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Nerdvana', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_island', ''] },
    { label: 'Go to the counter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['shop_nerdvana', 'counter'] },
    { label: 'Browse clothing', goto: ['shop_nerdvana', 'browse'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Nerdvana</b></center>');
  scene.img('images/locations/city/island/nerdvana/shop.jpg');
  scene.text('If you\'re happy to push through the tourists, then Nerdvana has everything a young adult might like to wear. It\'s only a minor step up from G&M, but unless you can afford the boutiques in Old Town, you\'ll be buying your outfits here.');
  if (((s as any).nerdvana_staff_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).nerdvana_staff = (Math.floor(Math.random() * 2) + 0);
    (s as any).nerdvana_staff_day = ((s as any).daystart ?? 0);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Nerdvana', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_island', ''] },
    { label: 'Go to the counter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['shop_nerdvana', 'counter'] },
    { label: 'Browse clothing', goto: ['shop_nerdvana', 'browse'] },
  ]);
  scene.build();
}

function enterCounter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'counter');
  if ((!((s as any).nerdvana_staff ?? 0))) {
    qspCall(s, 'npcStat', 'A290');
  } else {
    qspCall(s, 'npcStat', 'A291');
  }
  qspCall(s, 'stat', '');
  scene.img(`images/characters/shared/headshots_main/big${(String(((s as any).npcID ?? '')).slice((2)-1))}.jpg`);
  // TODO-QSP: 'You walk up to the counter and stike up a conversation with the <<iif(nerdvana_staff = 0, ''lanky''...
  qspCall(s, 'blackmailer', 'set_nerdvana_talk_act');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop_nerdvana', 'start'] },
  ]);
  scene.build();
}

function enterBrowse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'browse');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nerdvana</b></center>');
  scene.img('images/locations/city/island/nerdvana/shop.jpg');
  scene.text('If you\'re happy to push through the tourists, then Nerdvana has everything a young adult might like to wear. It\'s only a minor step up from G&M, but unless you can afford the boutiques in Old Town, you\'ll be buying your outfits here.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['shop_nerdvana', 'start'] },
    { label: 'View cosplay outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_nerdvana', 'cosplay'] },
    { label: 'View other outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_nerdvana', 'outfits'] },
    { label: 'View swimsuits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_nerdvana', 'swim'] },
    { label: 'View bikinis', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_nerdvana', 'bikinis'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_nerdvana', 'purses'] },
  ]);
  scene.build();
}

function enterCosplay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'cosplay');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Nerdvana Cosplay Outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_cosplay');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, Clothingstock mod 2
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_nerdvana', 'browse');
  } },
  ]);
  scene.build();
}

function enterOutfits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'outfits');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Nerdvana outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, (Clothingstock / 2) mod 2
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_nerdvana', 'browse');
  } },
  ]);
  scene.build();
}

function enterSwim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'swim');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Nerdvana swimsuits - one size fits all</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_swimsuit');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_nerdvana', 'browse');
  } },
  ]);
  scene.build();
}

function enterBikinis(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'bikinis');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Nerdvana bikinis - one size fits all</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana_bikinis');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_nerdvana', 'browse');
  } },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_nerdvana', 'purses');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Nerdvana purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'nerdvana');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, (Clothingstock / 4) mod 2
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_nerdvana', 'browse');
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
    case 'counter':
      enterCounter(s, scene);
      break;
    case 'browse':
      enterBrowse(s, scene);
      break;
    case 'cosplay':
      enterCosplay(s, scene);
      break;
    case 'outfits':
      enterOutfits(s, scene);
      break;
    case 'swim':
      enterSwim(s, scene);
      break;
    case 'bikinis':
      enterBikinis(s, scene);
      break;
    case 'purses':
      enterPurses(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_nerdvana: LocationDef = {
  name: 'shop_nerdvana',
  title: 'Nerdvana',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['If you\'re happy to push through the tourists, then Nerdvana has everything a young adult might like to wear. It\'s only a minor step up from G&M, but unless you can afford the boutiques in Old Town, you\'ll be buying your outfits here.'],
  enter: enter,
};
