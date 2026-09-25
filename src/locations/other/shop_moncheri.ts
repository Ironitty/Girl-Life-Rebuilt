import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'outfit', 'backup', 'moncheri');
  scene.text('<center><b>Mon Chéri</b></center>');
  scene.img('images/locations/city/citycenter/mall/boutique/butik.jpg');
  scene.text('You\'re only inside the boutique only a few seconds before a tall, slender brunette saunters up to you. Everything about her is poised and perfect, from the beautiful silver dress she\'s wearing to her unblemished skin and pearly white teeth.');
  scene.text('"Welcome to Mon Chéri, darling! We sell only the most beautifully luxurious items here. Come and take a look! You won\'t be disappointed!" she smiles as she ushers you further inside with a small flourish.');
  scene.text('A vast range of designer coats, formal clothing, beautiful shoes and exquisite handbags are all on display for those with the money to afford them.');
  scene.text('Everything here is extremely high-end and definitely not for the average shopper.');
  if (((s as any).RimmaSex ?? 0) > 0) {
    if (((s as any).rimmaday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027RimmaSexQW\u0027, \u0027\u0027); return false;">Rima</a> bites her lip and looks longingly in your direction when she sees you.');
    } else {
      scene.text('Rima smiles at you and continues to do her business.');
    }
  }
  if (((s as any).locat ?? 0)?.['A23'] === 32  &&  ((s as any).AlbinaQW ?? 0)?.['boutique'] < ((s as any).daystart ?? 0)) {
    scene.text('You see ' + ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('an attractive looking brunette') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027albina_events\u0027, \u0027moncheri\u0027); return false;">Albina</a>')) + ' browsing through the various clothes that the store has to offer.');
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Enter changing room (strip to underwear)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/underwear.jpg');
    qspCall(st, 'clothing', 'strip');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterChangingroom(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if ((Math.floor(Math.random() * 100) + 1) >= 80  &&  ((s as any).pcs_skin ?? 0) >= 600  &&  (!((s as any).lesbiQW ?? 0))) {
    scene.text('In the boutique you see a stylish and slender woman, about forty years old.');
    scene.actions([
      { label: 'Stare at the woman', goto: ['event', 'lesbi'] },
    ]);
  }
  scene.actions([
    { label: 'Leave the boutique', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    { label: 'View shoes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'shoes'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'purses'] },
    { label: 'View coats', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'coats'] },
    { label: 'Enter changing room (strip naked)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/nude.jpg');
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'underwear', 'strip');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterChangingroom(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = undefined;
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'outfit', 'backup', 'moncheri');
  scene.text('<center><b>Mon Chéri</b></center>');
  scene.img('images/locations/city/citycenter/mall/boutique/butik.jpg');
  scene.text('You\'re only inside the boutique only a few seconds before a tall, slender brunette saunters up to you. Everything about her is poised and perfect, from the beautiful silver dress she\'s wearing to her unblemished skin and pearly white teeth.');
  scene.text('"Welcome to Mon Chéri, darling! We sell only the most beautifully luxurious items here. Come and take a look! You won\'t be disappointed!" she smiles as she ushers you further inside with a small flourish.');
  scene.text('A vast range of designer coats, formal clothing, beautiful shoes and exquisite handbags are all on display for those with the money to afford them.');
  scene.text('Everything here is extremely high-end and definitely not for the average shopper.');
  if (((s as any).RimmaSex ?? 0) > 0) {
    if (((s as any).rimmaday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027RimmaSexQW\u0027, \u0027\u0027); return false;">Rima</a> bites her lip and looks longingly in your direction when she sees you.');
    } else {
      scene.text('Rima smiles at you and continues to do her business.');
    }
  }
  if (((s as any).locat ?? 0)?.['A23'] === 32  &&  ((s as any).AlbinaQW ?? 0)?.['boutique'] < ((s as any).daystart ?? 0)) {
    scene.text('You see ' + ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('an attractive looking brunette') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027albina_events\u0027, \u0027moncheri\u0027); return false;">Albina</a>')) + ' browsing through the various clothes that the store has to offer.');
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Enter changing room (strip to underwear)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/underwear.jpg');
    qspCall(st, 'clothing', 'strip');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterChangingroom(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if ((Math.floor(Math.random() * 100) + 1) >= 80  &&  ((s as any).pcs_skin ?? 0) >= 600  &&  (!((s as any).lesbiQW ?? 0))) {
    scene.text('In the boutique you see a stylish and slender woman, about forty years old.');
    scene.actions([
      { label: 'Stare at the woman', goto: ['event', 'lesbi'] },
    ]);
  }
  scene.actions([
    { label: 'Leave the boutique', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    { label: 'View shoes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'shoes'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'purses'] },
    { label: 'View coats', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_moncheri', 'coats'] },
    { label: 'Enter changing room (strip naked)', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista/nude.jpg');
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'underwear', 'strip');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterChangingroom(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterChangingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'changingroom');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    scene.text('As you walk through the store you notice that there\'s nobody in the changing rooms. Feeling a bit bored, you go look at some clothes and grab several items to try on before heading into one of the changing rooms.');
  } else {
    scene.img('images/locations/city/citycenter/mall/fashionista/changingroom.jpg');
    scene.text('You are in the changing rooms in Mon Chéri with several outfits available to try on.');
  }
  qspCall(s, 'shortgs', 'clothing_state');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Put on underwear', handler: (st: GameState) => {
    qspCall(st, 'underwear', 'wear');
    qspGoto(st, 'shop_moncheri', 'changingroom');
  } },
    ]);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Get naked', handler: (st: GameState) => {
    qspCall(st, 'underwear', 'strip');
    qspGoto(st, 'shop_moncheri', 'changingroom');
  } },
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
  qspGoto(s, 'shop_moncheri', 'start');
  scene.build();
}

function enterGowns(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'gowns');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri_gown');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 3, ((s as any).Clothingstock ?? 0) % 3);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_moncheri', 'changingroom');
  } },
  ]);
  scene.build();
}

function enterDresses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'dresses');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri_dress');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 2, (((s as any).Clothingstock ?? 0) / 3) % 2);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_moncheri', 'changingroom');
  } },
  ]);
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'bodysuit');
  (s as any).locclass = 'changingroom';
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
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_moncheri', 'changingroom');
  } },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'shoes');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Mon Chéri shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'moncheri');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 3, (((s as any).Clothingstock ?? 0) / 4) % 3);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_moncheri', 'start');
  } },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'purses');
  (s as any).locclass = 'changingroom';
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
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_moncheri', 'start');
  } },
  ]);
  scene.build();
}

function enterCoats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_moncheri', 'coats');
  (s as any).locclass = 'changingroom';
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
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_moncheri', 'start');
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
      enterDefault(s, scene);
      break;
  }
}

export const shop_moncheri: LocationDef = {
  name: 'shop_moncheri',
  title: 'Mon Chéri',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['You\'re only inside the boutique only a few seconds before a tall, slender brunette saunters up to you. Everything about her is poised and perfect, from the beautiful silver dress she\'s wearing to her unblemished skin and pearly white teeth.'],
  enter: enter,
};
