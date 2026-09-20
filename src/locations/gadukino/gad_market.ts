import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_market', 'start');
  (s as any).region = 'gad';
  (s as any).location_type = 'public_outdoors';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >=11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >=1  &&  ((s as any).month ?? 0) <=3) {
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Farmers Market</h2></center>');
  scene.img('images/locations/gadukino/market/main.jpg');
  scene.text('A small and modest farmers market, a few small shops fill the space.');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClose(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  // TODO-QSP: dynamic text: On one side you spot a stand where' + iif(hunterVars['were_met'] = 1, ' the hunt...
  scene.text('On one side you spot a stand where' + ((((s as any).hunterVars ?? 0)?.['were_met'] === 1) ? (' the hunters are ') : (' ')) + 'selling <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027gad_market/u0027, /u0027hunter_stand/u0027); return false;">dried goods</a>.');
  // TODO-QSP: dynamic text: You spot a stand filled with <a href="exec:minut += 1 & gt ''gad_market'', ''clo...
  scene.text('You spot a stand filled with <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027gad_market/u0027, /u0027clothing_stand/u0027); return false;">cheap clothing</a>.');
  if (((s as any).gad_stand ?? 0) === 1) {
    if (((s as any).hour ?? 0) <= 20) {
      scene.actions([
        { label: 'Go to your own stand (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_market', 'your_stand'] },
      ]);
    }
    // TODO-QSP: act $func('wrap', 'neg', 'Return'): *nl $func('wrap', 'neg', 'You can''t leave while your stand is s...
    scene.actions([
      { label: 'Breakdown your stand (0:30)', goto: ['gad_market', 'breakdown_stand'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 18  &&  (((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) + ((s as any).fish_stored ?? 0)) > 0) {
      scene.actions([
        { label: 'Setup your own stand (1:00)', goto: ['gad_market', 'build_stand'] },
      ]);
    } else {
      if (((s as any).hour ?? 0) >= 18) {
        scene.text('It\'s too late to build your stand');
      } else {
        scene.text('You have nothing to sell.');
      }
    }
    scene.actions([
      { label: 'Return', goto: ['gad_market', 'leave'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Browse the ' + String(((((s as any).hunterVars ?? 0)?.['were_met'] === 1) ? ('hunters') : ('dried food')) ?? '') + ' stand', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_market', 'hunter_stand'] },
    { label: 'Browse the clothing stand', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_market', 'clothing_stand'] },
  ]);
  scene.build();
}

function enterHunterStand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_market', 'hunter_stand');
  (s as any).loc_s = 'gad_market';
  (s as any).args_s = 'hunter_stand';
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The shop is currently closed.');
    scene.actions([
{ label: 'Leave', goto: ['gad_market', 'clothing_stand'] },
]);
    return;
  }
  scene.img('images/locations/gadukino/market/hunter_stand.jpg');
  scene.text('A small stand selling dried meat');
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
    scene.actions([
      { label: 'Talk to one of the hunters', goto: ['gad_market', 'hunter_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Browse the stand', goto: ['gad_market', 'hunter_cart'] },
    { label: 'Stop browsing', goto: ['gad_market', 'start'] },
  ]);
  scene.build();
}

function enterHunterCart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_market', 'hunter_cart');
  (s as any).loc_s = 'gad_market';
  (s as any).args_s = 'hunter_cart';
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The shop is currently closed.');
    scene.actions([
{ label: 'Leave', goto: ['gad_market', 'hunter_stand'] },
]);
    return;
  }
  qspCall(s, 'themes', 'outdoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'gad_market_hunter');
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/hunter_stand.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit shopping cart', handler: (st: GameState) => {
    // TODO-QSP: $backimage = ''
  }, goto: ['gad_market', 'hunter_stand'] },
    { label: 'Leave the stand', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_market', 'start'] },
  ]);
  scene.build();
}

function enterClothingStand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_market', 'clothing_stand');
  (s as any).loc_s = 'gad_market';
  (s as any).args_s = 'clothing_stand';
  scene.img('images/locations/gadukino/market/clothing_stand.jpg');
  scene.text('A small stand selling cheap clothes');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The shop is currently closed.');
    scene.actions([
{ label: 'Leave', goto: ['gad_market', 'clothing_stand'] },
]);
    return;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Browse the clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_market', 'clothing_cart'] },
    { label: 'Browse the swimsuits', goto: ['gad_market', 'swimsuit_cart'] },
    { label: 'Stop browsing', goto: ['gad_market', 'start'] },
  ]);
  scene.build();
}

function enterClothingCart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_market', 'clothing_cart');
  (s as any).loc_s = 'gad_market';
  (s as any).args_s = 'clothing_cart';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Clothes</b></center>');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The shop is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'gad_market', 'clothing_stand');
  } },
]);
    return;
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'market_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 8, Clothingstock mod 4
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'gad_market', 'clothing_stand');
  } },
  ]);
  scene.build();
}

function enterSwimsuitCart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_market', 'swimsuit_cart');
  (s as any).loc_s = 'gad_market';
  (s as any).args_s = 'swimsuit_cart';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Swimsuits</b></center>');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The shop is currently closed.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'gad_market', 'clothing_stand');
  } },
]);
    return;
  }
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    if ((((s as any).Clothingstock ?? 0) / 4) % 2 === 0) {
      qspCall(s, 'shop_utils', 'init', 'add_item', 'scandalicious_swimsuit', 4);
      qspCall(s, 'shop_utils', 'init', 'add_item', 'scandalicious_bikinis', 6);
      qspCall(s, 'shop_utils', 'init', 'add_item', 'scandalicious_bikinis', 7);
    } else {
      qspCall(s, 'shop_utils', 'init', 'add_item', 'scandalicious_swimsuit', 15);
      qspCall(s, 'shop_utils', 'init', 'add_item', 'scandalicious_swimsuit', 22);
      qspCall(s, 'shop_utils', 'init', 'add_item', 'scandalicious_bikinis', 60);
    }
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'gad_market', 'clothing_stand');
  } },
  ]);
  scene.build();
}

function enterBuildStand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/build_stand.jpg');
  scene.text('It takes you roughly an hour to setup your stand.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 21) + 40));
    (st as any).gad_stand = 1;
    qspGoto(st, 'gad_market', 'your_stand');
  } },
  ]);
  scene.build();
}

function enterBreakdownStand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/build_stand.jpg');
  scene.text('It takes you roughly half an hour to break down your stand.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 11) + 20));
    (st as any).gad_stand = 0;
    qspGoto(st, 'gad_market', 'start');
  } },
  ]);
  scene.build();
}

function enterYourStand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_market', 'your_stand');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Your Stand</b></center>');
  scene.img('images/locations/gadukino/market/your_stand.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSeeStored(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Try and sell your wares', goto: ['gad_market', 'sell_wares'] },
    { label: 'Go back', goto: ['gad_market', 'start'] },
  ]);
  scene.build();
}

function enterSellWares(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('<center><b>Your Stand</b></center>');
    scene.img('images/locations/gadukino/market/your_stand.jpg');
    scene.text('The market is closed, you should break down your stand.');
    scene.actions([
{ label: 'Break down your stand', goto: ['gad_market', 'breakdown_stand'] },
]);
    return;
  }
  (s as any).temp_rand = (Math.floor(Math.random() * 250) + 0);
  if (((s as any).temp_rand ?? 0) >= ((s as any).pcs_chrsm ?? 0) + ((s as any).pcs_persuas ?? 0)) {
    if ((Math.floor(Math.random() * 3) + 0) > 0) {
      qspGoto(s, 'gad_market', 'sell_talk');
    } else {
      qspGoto(s, 'gad_market', 'sell_nobody');
    }
  } else {
    (s as any).temp_rand = (Math.floor(Math.random() * 7) + 0);
    if (((s as any).temp_rand ?? 0) < 2  &&  ((s as any).boletus_stored ?? 0) > 0) {
      qspGoto(s, 'gad_market', 'sell_mushrooms');
    } else {
      if (((s as any).temp_rand ?? 0) >= 2  &&  ((s as any).temp_rand ?? 0) < 4  &&  ((s as any).bilberry_stored ?? 0) > 0) {
        qspGoto(s, 'gad_market', 'sell_berries');
      } else {
        if (((s as any).temp_rand ?? 0) >= 4  &&  ((s as any).temp_rand ?? 0) < 6  &&  ((s as any).fish_stored ?? 0) > 0) {
          qspGoto(s, 'gad_market', 'sell_fish');
        } else {
          qspGoto(s, 'gad_market', 'sell_talk');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSellNobody(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/sell_nobody.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSeeStored(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You wait 10 minutes, but nobody seems interested in what you have to sell');
  scene.actions([
    { label: 'Continue trying to sell your wares', goto: ['gad_market', 'sell_wares'] },
    { label: 'Stop selling your wares', goto: ['gad_market', 'your_stand'] },
  ]);
  scene.build();
}

function enterSellMushrooms(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/sell_mushrooms1.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSeeStored(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Somebody wants to buy a kg of mushrooms!');
  scene.actions([
    { label: 'Sell them 1 kg of stored mushrooms', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 20);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/gadukino/market/sale${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSeeStored(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You sell 1 kg of stored mushrooms');
    scene.actions([
      { label: 'Continue trying to sell your wares', goto: ['gad_market', 'sell_wares'] },
      { label: 'Stop selling your wares', goto: ['gad_market', 'your_stand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSellBerries(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/sell_berries1.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSeeStored(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Somebody wants to buy a kg of berries!');
  scene.actions([
    { label: 'Sell them 1 kg of stored berries', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 20);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/gadukino/market/sale${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSeeStored(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You sell 1 kg of stored berries');
    scene.actions([
      { label: 'Continue trying to sell your wares', goto: ['gad_market', 'sell_wares'] },
      { label: 'Stop selling your wares', goto: ['gad_market', 'your_stand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSellFish(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/sell_fish1.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSeeStored(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Somebody wants to buy a kg of preserved fish!');
  scene.actions([
    { label: 'Sell them 1 kg of preserved fish', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 20);
    (st as any).fish_stored = ((st as any).fish_stored ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/gadukino/market/sale${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSeeStored(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You sell 1 kg of preserved fish');
    scene.actions([
      { label: 'Continue trying to sell your wares', goto: ['gad_market', 'sell_wares'] },
      { label: 'Stop selling your wares', goto: ['gad_market', 'your_stand'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSellTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/sell_talk.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSeeStored(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('A couple of people walk up to your stand and you spend ten minutes making some small-talk.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue trying to sell your wares', goto: ['gad_market', 'sell_wares'] },
    { label: 'Stop selling your wares', goto: ['gad_market', 'your_stand'] },
  ]);
  scene.build();
}

function enterSeeStored(s: GameState, scene: SceneBuilder): void {
  if (((s as any).boletus_stored ?? 0) > 0) {
    // TODO-QSP: dynamic text: You currently are storing <b><<boletus_stored>></b> kg of raw mushrooms.
    scene.text(`You currently are storing <b>${((s as any).boletus_stored || '')}</b> kg of raw mushrooms.`);
  }
  if (((s as any).bilberry_stored ?? 0) > 0) {
    // TODO-QSP: dynamic text: You currently are storing <b><<bilberry_stored>></b> kg of raw berries.
    scene.text(`You currently are storing <b>${((s as any).bilberry_stored || '')}</b> kg of raw berries.`);
  }
  if (((s as any).fish_stored ?? 0) > 0) {
    // TODO-QSP: dynamic text: You currently are storing <b><<fish_stored>></b> kg of preserved fish.
    scene.text(`You currently are storing <b>${((s as any).fish_stored || '')}</b> kg of preserved fish.`);
  }
  if (((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) + ((s as any).fish_stored ?? 0) === 0) {
    scene.text('You currently have nothing that you can sell');
  }
  // TODO-QSP: end
  scene.build();
}

function enterHunterTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/market/hunter_stand.jpg');
  scene.text('You spend a few minutes in idle conversation with the trio, but they appear to be rather busy with tending to their market stand.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['gad_market', 'hunter_stand'] },
  ]);
  scene.build();
}

function enterClose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).gad_stand ?? 0) === 1) {
    scene.text('The market is closing, you should break down your stand.');
    scene.actions([
      { label: 'Break down your stand', goto: ['gad_market', 'breakdown_stand'] },
    ]);
  } else {
    scene.text('The market is closing and so you head back to the main street.');
    scene.actions([
      { label: 'Return', goto: ['gad_market', 'leave'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspGoto(s, 'gadukino', '');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'hunter_stand':
      enterHunterStand(s, scene);
      break;
    case 'hunter_cart':
      enterHunterCart(s, scene);
      break;
    case 'clothing_stand':
      enterClothingStand(s, scene);
      break;
    case 'clothing_cart':
      enterClothingCart(s, scene);
      break;
    case 'swimsuit_cart':
      enterSwimsuitCart(s, scene);
      break;
    case 'build_stand':
      enterBuildStand(s, scene);
      break;
    case 'breakdown_stand':
      enterBreakdownStand(s, scene);
      break;
    case 'your_stand':
      enterYourStand(s, scene);
      break;
    case 'sell_wares':
      enterSellWares(s, scene);
      break;
    case 'sell_nobody':
      enterSellNobody(s, scene);
      break;
    case 'sell_mushrooms':
      enterSellMushrooms(s, scene);
      break;
    case 'sell_berries':
      enterSellBerries(s, scene);
      break;
    case 'sell_fish':
      enterSellFish(s, scene);
      break;
    case 'sell_talk':
      enterSellTalk(s, scene);
      break;
    case 'see_stored':
      enterSeeStored(s, scene);
      break;
    case 'hunter_talk':
      enterHunterTalk(s, scene);
      break;
    case 'close':
      enterClose(s, scene);
      break;
    case 'leave':
      enterLeave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_market: LocationDef = {
  name: 'gad_market',
  title: 'Return',
  region: 'gadukino',
  locationType: 'public_outdoors',
  enter: enter,
};
