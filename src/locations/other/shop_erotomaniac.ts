import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).sexloc = 'shop_erotomaniac';
  (s as any).locclass = undefined;
  (s as any).ghnow = 0;
  qspCall(s, 'schedule', 'A84');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  if (((s as any).locat ?? 0)?.['A84_loc'] === 'unknown'  &&  (Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).kendrano ?? 0) !== 1  &&  ((s as any).kendra ?? 0)[1] < ((s as any).daystart ?? 0)) {
    qspGoto(s, 'shop_erotomaniac', 'kendra');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 33  &&  ((s as any).AlbinaQW ?? 0)?.['sex_shop'] < ((s as any).daystart ?? 0)) {
    scene.text('You see ' + ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('an attractive looking brunette') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shop_erotomaniac\u0027, \u0027albina\u0027); return false;">Albina</a>')) + ' browsing through the underwear that the store has to offer.');
  }
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  (Math.floor(Math.random() * 10) + 1) === 10) {
    qspGoto(s, 'shop_erotomaniac', 'shprod');
  }
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>The Erotomaniac</b></center>');
  scene.img('images/locations/city/redlight/erotomaniac/sexshop.jpg');
  scene.text('The main counter displays various sex toys and other related items:');
  scene.text(`Lubricant - ${qspFunc(s, 'money', 'string_price', 145)}`);
  scene.text(`Vibrator - ${qspFunc(s, 'money', 'string_price', 800)}`);
  scene.text(`Butt plug - ${qspFunc(s, 'money', 'string_price', 800)}`);
  scene.text(`Strap-on harness - ${qspFunc(s, 'money', 'string_price', 500)}`);
  scene.text(`Dildos - starting at ${qspFunc(s, 'money', 'string_price', 800)}`);
  scene.text(`Private booths are available in the basement for viewing porn. (${qspFunc(s, 'money', 'string_price', 50)} for 15 minutes)`);
  if (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['dildo_small'] + ((s as any).mc_inventory ?? 0)?.['dildo_normal'] + ((s as any).mc_inventory ?? 0)?.['dildo_big'] + ((s as any).mc_inventory ?? 0)?.['dildo_large'] + ((s as any).mc_inventory ?? 0)?.['dildo_huge'] + ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 1  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  (!((s as any).Peter ?? 0))) {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      scene.text('You see an interesting looking middle-aged man, the apparent owner of the store.');
      scene.actions([
        { label: 'Introduce yourself', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/peter.jpg');
    scene.text(`You approach the counter and introduce yourself. "Hey there, I'm ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('"I\'m Peter," he replies. "I\'ve been watching you for a while and I find you rather… interesting. Do you want to come back to my place for some \'fun\'?"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_redlight', 'start'] },
      { label: 'Go with him', goto: ['Peterroom', 'start'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).ghnow ?? 0)?.['sexshop_total'] >= 20  &&  (!((s as any).pornstudio ?? 0))) {
    scene.text('You notice a shady looking man trying to get your attention.');
    scene.actions([
      { label: 'Approach him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pornstudio = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/pierre.jpg');
    scene.text('"You give a great blowjob girl, so why not put that mouth to better use and work as a porn actress?"');
    qspCall(st, 'willpower', 'prostitution', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You shake your head and quickly move away from the man, feeling his gaze on the back of your head the entire time.');
    scene.actions([
      { label: 'Leave', goto: ['shop_erotomaniac', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You nod your head. "Okay, where do I sign up?"');
    scene.text('The man smiles and hands you a business card. "Just come to this location and ask for Dimitri. He\'ll tell you everything you need to know and do. I do hope I\'ll see you working there soon," he says before returning to his business.');
    scene.text('You look over the card and see that the porn studio apparently operates out of the city\'s industrial district. You then pocket the card and return to what you were doing.');
    scene.actions([
      { label: 'Continue', goto: ['shop_erotomaniac', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ignore him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You ignore the man and quickly move away from him, feeling his gaze on the back of your head the entire time.');
    scene.actions([
      { label: 'Leave', goto: ['shop_erotomaniac', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_redlight', 'start'] },
    { label: 'Adult toys & items', goto: ['shop_erotomaniac', 'sexshop_menu'] },
    { label: 'Go to the basement', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'basement'] },
    { label: 'Look through the fetish dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'dress'] },
    { label: 'Look through the fetish outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'outfits'] },
    { label: 'Look through the stripper clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'strip'] },
    { label: 'Look through the panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'panties'] },
    { label: 'Look through the bras', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'bras'] },
    { label: 'Look through the fetish shoes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'shoes'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).sexloc = 'shop_erotomaniac';
  (s as any).locclass = undefined;
  (s as any).ghnow = 0;
  qspCall(s, 'schedule', 'A84');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  if (((s as any).locat ?? 0)?.['A84_loc'] === 'unknown'  &&  (Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).kendrano ?? 0) !== 1  &&  ((s as any).kendra ?? 0)[1] < ((s as any).daystart ?? 0)) {
    qspGoto(s, 'shop_erotomaniac', 'kendra');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 33  &&  ((s as any).AlbinaQW ?? 0)?.['sex_shop'] < ((s as any).daystart ?? 0)) {
    scene.text('You see ' + ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) ? ('an attractive looking brunette') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shop_erotomaniac\u0027, \u0027albina\u0027); return false;">Albina</a>')) + ' browsing through the underwear that the store has to offer.');
  }
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  (Math.floor(Math.random() * 10) + 1) === 10) {
    qspGoto(s, 'shop_erotomaniac', 'shprod');
  }
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>The Erotomaniac</b></center>');
  scene.img('images/locations/city/redlight/erotomaniac/sexshop.jpg');
  scene.text('The main counter displays various sex toys and other related items:');
  scene.text(`Lubricant - ${qspFunc(s, 'money', 'string_price', 145)}`);
  scene.text(`Vibrator - ${qspFunc(s, 'money', 'string_price', 800)}`);
  scene.text(`Butt plug - ${qspFunc(s, 'money', 'string_price', 800)}`);
  scene.text(`Strap-on harness - ${qspFunc(s, 'money', 'string_price', 500)}`);
  scene.text(`Dildos - starting at ${qspFunc(s, 'money', 'string_price', 800)}`);
  scene.text(`Private booths are available in the basement for viewing porn. (${qspFunc(s, 'money', 'string_price', 50)} for 15 minutes)`);
  if (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['dildo_small'] + ((s as any).mc_inventory ?? 0)?.['dildo_normal'] + ((s as any).mc_inventory ?? 0)?.['dildo_big'] + ((s as any).mc_inventory ?? 0)?.['dildo_large'] + ((s as any).mc_inventory ?? 0)?.['dildo_huge'] + ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 1  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  (!((s as any).Peter ?? 0))) {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      scene.text('You see an interesting looking middle-aged man, the apparent owner of the store.');
      scene.actions([
        { label: 'Introduce yourself', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/peter.jpg');
    scene.text(`You approach the counter and introduce yourself. "Hey there, I'm ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('"I\'m Peter," he replies. "I\'ve been watching you for a while and I find you rather… interesting. Do you want to come back to my place for some \'fun\'?"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_redlight', 'start'] },
      { label: 'Go with him', goto: ['Peterroom', 'start'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).ghnow ?? 0)?.['sexshop_total'] >= 20  &&  (!((s as any).pornstudio ?? 0))) {
    scene.text('You notice a shady looking man trying to get your attention.');
    scene.actions([
      { label: 'Approach him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pornstudio = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/pierre.jpg');
    scene.text('"You give a great blowjob girl, so why not put that mouth to better use and work as a porn actress?"');
    qspCall(st, 'willpower', 'prostitution', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You shake your head and quickly move away from the man, feeling his gaze on the back of your head the entire time.');
    scene.actions([
      { label: 'Leave', goto: ['shop_erotomaniac', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You nod your head. "Okay, where do I sign up?"');
    scene.text('The man smiles and hands you a business card. "Just come to this location and ask for Dimitri. He\'ll tell you everything you need to know and do. I do hope I\'ll see you working there soon," he says before returning to his business.');
    scene.text('You look over the card and see that the porn studio apparently operates out of the city\'s industrial district. You then pocket the card and return to what you were doing.');
    scene.actions([
      { label: 'Continue', goto: ['shop_erotomaniac', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ignore him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You ignore the man and quickly move away from him, feeling his gaze on the back of your head the entire time.');
    scene.actions([
      { label: 'Leave', goto: ['shop_erotomaniac', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_redlight', 'start'] },
    { label: 'Adult toys & items', goto: ['shop_erotomaniac', 'sexshop_menu'] },
    { label: 'Go to the basement', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'basement'] },
    { label: 'Look through the fetish dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'dress'] },
    { label: 'Look through the fetish outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'outfits'] },
    { label: 'Look through the stripper clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'strip'] },
    { label: 'Look through the panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'panties'] },
    { label: 'Look through the bras', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'bras'] },
    { label: 'Look through the fetish shoes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'shoes'] },
  ]);
  scene.build();
}

function enterSexshopMenu(s: GameState, scene: SceneBuilder): void {
  (s as any).args_s = 'sexshop_menu';
  (s as any).loc_s = 'shop_erotomaniac';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'sexshop');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/erotomaniac/sexshop.jpg');
  if (((s as any).intro_custom_shop_return ?? 0) === 1) {
    scene.actions([
      { label: 'Return', goto: ['intro_character_custom', 'modclo'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stop browsing', goto: ['shop_erotomaniac', 'start'] },
    ]);
  }
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).args_s = 'sexshop_menu';
  (s as any).loc_s = 'shop_erotomaniac';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'sexshop');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/erotomaniac/sexshop.jpg');
  if (((s as any).intro_custom_shop_return ?? 0) === 1) {
    scene.actions([
      { label: 'Return', goto: ['intro_character_custom', 'modclo'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stop browsing', goto: ['shop_erotomaniac', 'start'] },
    ]);
  }
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'dress');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Fetish dresses - for all your personal needs</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_dress');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 2, ((s as any).Clothingstock ?? 0) % 2);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_erotomaniac', 'start');
  } },
  ]);
  scene.build();
}

function enterOutfits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'outfits');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Fetish outfits - for all your personal needs</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_outfits');
    qspCall(s, 'shop_utils', 'init', 'set_steps', 2, (((s as any).Clothingstock ?? 0) / 2) % 2);
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_erotomaniac', 'start');
  } },
  ]);
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'strip');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Stripper clothing - for work or the bedroom</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_strip');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_erotomaniac', 'start');
  } },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'shoes');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Erotomaniac shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_erotomaniac', 'start');
  } },
  ]);
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'panties');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Erotomaniac panties</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_erotomaniac', 'start');
  } },
  ]);
  scene.build();
}

function enterBras(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'bras');
  (s as any).locclass = 'changingroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Erotomaniac bras</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'shop_erotomaniac', 'start');
  } },
  ]);
  scene.build();
}

function enterBasement(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'basement');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Basement</b></center>');
  scene.img('images/locations/city/redlight/erotomaniac/gloryholebooths1.jpg');
  scene.text('There are several booths here for viewing adult films. They offer full privacy and are conveniently adjacent to each other.');
  scene.text('The shop toilets are also located down here.');
  if (((s as any).hour ?? 0) >= 11  ||  ((s as any).hour ?? 0) < 3) {
    scene.actions([
      { label: 'Enter a free booth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'peepbooth'] },
    ]);
  } else {
    scene.text('The booths are closed until 11am.');
  }
  if (((s as any).masharab ?? 0) === 1) {
    scene.actions([
      { label: 'Go to Masha', goto: ['masharoom', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Leave the basement', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'start'] },
    { label: 'Enter the bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop_erotomaniac', 'toilet'] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'toilet');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  scene.actions([
    { label: 'Leave', goto: ['shop_erotomaniac', 'basement'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterPeepbooth(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'private';
  (s as any).loc = 'shop_erotomaniac';
  (s as any).loc_arg = 'peepbooth';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Movie Booth</b></center>');
  scene.img('images/shared/sex/gloryhole/ghbooths.jpg');
  scene.text('The small booth has a TV on the wall, a terminal to choose films and a chair to sit in. There is also two holes in the walls at waist level.');
  if (((s as any).mistressqwest ?? 0) > 0  &&  ((s as any).mistressqwest ?? 0) <= 20) {
    (s as any).GHchance = (Math.floor(Math.random() * 5) + 6);
    (s as any).ghnowcheck = ((s as any).ghnow ?? 0);
  } else {
    (s as any).GHchance = (Math.floor(Math.random() * 10) + 1);
    (s as any).ghnowcheck = ((s as any).ghnow ?? 0) * 2;
  }
  if (((s as any).ghnow ?? 0) > 0) {
    scene.text(`You served ${((s as any).ghnow ?? '')} cocks on this visit.`);
  }
  if (((s as any).hour ?? 0) >= 11  ||  ((s as any).hour ?? 0) < 3) {
    scene.actions([
      { label: 'Watch porn', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 50, 'cash');
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      qspCall(st, 'stat', '');
      scene.text('\'You insert 50₽ into the terminal and the TV on the wall starts showing a pornographic film.\'');
      scene.text('You sit in the chair and watch the film, feeling yourself becoming a little excited.');
      if (((st as any).GHchance ?? 0) >= 10 - ((st as any).ghnowcheck ?? 0)) {
        scene.text('You hear the TV in the next stall turn on.');
        scene.actions([
          { label: 'Stick a finger in the hole (serve a stranger)', handler: (st: GameState) => {
    (st as any).ghnow = ((st as any).ghnow ?? 0) + (1);
    ((st as any).ghnow = (st as any).ghnow ?? {})['sexshop_total'] = ((st as any).ghnow['sexshop_total'] ?? 0) + (1);
    if (((st as any).ghnow ?? 0) < 5) {
      qspCall(st, 'money', 'earn', 300, 'cash');
    } else {
      qspCall(st, 'money', 'earn', 150, 'cash');
    }
    scene.img(`images/shared/sex/gloryhole/ghfinger${(Math.floor(Math.random() * 5) + 1)}.jpg`);
    scene.text('You poke your finger in the hole, letting whoever\'s on the other side know that you\'re ready to serve him.');
    scene.text('The stranger slips ' + ((((st as any).ghnow ?? 0) < 5) ? (qspFunc(s, 'money', 'string_price', 300)) : (qspFunc(s, 'money', 'string_price', 150))) + ' into the hole, followed by his erect cock.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'Guy at the gloryhole', (Math.floor(Math.random() * 30) + 21));
    qspCall(st, 'boyStat', '$npclastgenerated');
    ((st as any).stat = (st as any).stat ?? {})['gloryhole'] = ((st as any).stat['gloryhole'] ?? 0) + (1);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    (st as any).ghprand = (Math.floor(Math.random() * 36) + 1);
    scene.img(`images/shared/sex/gloryhole/gloryhole${((st as any).ghprand ?? '')}.jpg`);
    scene.text('You take the cock into your mouth and start enthusiastically sucking it.');
    scene.text('After a few minutes, he stranger\'s cock begins to throb and he cums in your mouth, filling it with a huge amount of thick cum. You swallow it, and once you\'ve licked his cock clean, it disappears back into the hole. You hear the man sighing in satisfaction before he leaves the booth.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    if (((st as any).mistressqwest ?? 0) > 0) {
      (st as any).mistressqwest = ((st as any).mistressqwest ?? 0) + (1);
      scene.text(`You have sucked ${((st as any).mistressqwest ?? '') - 1} cocks for Mistress.`);
    }
    scene.actions([
      { label: 'Wipe your face', goto: ['shop_erotomaniac', 'peepbooth'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'The film ends', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'peepbooth'] },
        { label: 'Masturbate', handler: (st: GameState) => {
    scene.text('You caress your pussy as you watch the film, enjoying the pleasant sensation between your legs.');
    qspCall(st, 'arousal', 'clit_finger', 5, 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'The film ends', goto: ['shop_erotomaniac', 'peepbooth'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave the booth', goto: ['shop_erotomaniac', 'basement'] },
  ]);
  scene.build();
}

function enterKendra(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).meet_kendra ?? 0) === 1) {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend0.jpg');
    scene.text('As you browse the store, you see Kendra again. She\'s browsing through some of the sex toys when she notices you.');
    scene.text('After a few minutes, she walks over and boldly caresses your hair. "Hello again. You change your mind about serving me?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (st as any).kendrano = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
    scene.text('You smile at her. "Sorry, no. I still don\'t belong to anyone."');
    scene.text('She sighs softly. "Such a waste. Oh well, there\'s plenty of pretty little white Russian bitches that love being owned by an ebony Mistress. Perhaps we\'ll meet again and you\'ll change your mind. I go to the University, so you should stop by sometime."');
    scene.text('She gives you directions to her dorm room before she returns to browsing.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_redlight', 'start'] },
      { label: 'Go back to shopping', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop_erotomaniac', 'start'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
    scene.text('You look down a little to show your submission to her. "Yes, Mistress Kendra…"');
    scene.text('She smiles widely. "I think you\'re going to make a great little slave. We\'re going to have a lot of fun together. Follow me, slave."');
    scene.actions([
      { label: 'Serve Kendra', handler: (st: GameState) => {
    (st as any).kendraslave = ((st as any).kendraslave ?? 0) + (1);
    qspCall(st, 'npcStat', 'A84');
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend1.jpg');
    scene.text('You follow her down into the basement, where she sits on the edge of a table and pulls her fetish clothing aside, exposing her pussy. "Strip for me, bitch."');
    scene.text('You do as you\'re told and begin to slowly strip out of your clothes until you\'re naked. "Good little slave. Now get over here and worship my pussy."');
    scene.text('You kneel before her and start eagerly licking her pussy as Kendra squeals and moans in pleasure.');
    scene.text('"Look at me!" she commands.');
    scene.text('When you look up at her while still eating her out, she pulls her new toy out of her bag. "We\'re going to use this."');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.actions([
        { label: 'Use the dildo', goto: ['shop_erotomaniac', 'kendra1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Use the strap-on', goto: ['shop_erotomaniac', 'kendra2'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).kendraslave ?? 0) >= 1) {
      scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
      scene.text('As you browse the store, you see Kendra trying on latex clothes. She smiles when she notices you looking at her.');
      scene.text('"Who do we have here? My favorite bitch. Come and service me. I just bought a new toy and I\'m eager to try it out," she laughs as she motions for you to follow her.');
      qspCall(s, 'willpower', 'sex', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike');
    scene.text('You quickly leave while Kendra can\'t stop you.');
    qspGoto(st, 'city_redlight', 'start');
  } },
        ]);
      }
      scene.actions([
        { label: 'Serve Kendra', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A84');
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend1.jpg');
    scene.text('You follow her down into the basement, where she sits on the edge of a table and pulls her fetish clothing aside, exposing her pussy. "Strip for me, bitch."');
    scene.text('You do as you\'re told and begin to slowly strip out of your clothes until you\'re naked. "Good little slave. Now get over here and worship my pussy."');
    scene.text('You kneel before her and start eagerly licking her pussy as Kendra squeals and moans in pleasure.');
    scene.text('"Look at me!" she commands. When you look up at her while still eating her out, she pulls her new toy out of her bag. "We\'re going to use this."');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.actions([
        { label: 'Use the dildo', goto: ['shop_erotomaniac', 'kendra1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Use the dildo', goto: ['shop_erotomaniac', 'kendra2'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 5) {
        scene.img('images/locations/city/redlight/erotomaniac/sex/shkend0.jpg');
        scene.text('As you browse the store, you see a very attractive young black woman trying on latex clothes. She smiles when she notices you looking at her.');
        scene.text('After a few minutes, she walks over and boldly caresses your hair. "You\'re a pretty little thing, what\'s your name?"');
        scene.text(`"${((s as any).pcs_firstname ?? '')}, but most people call me ${((s as any).pcs_nickname ?? '')}. What's your name?" you reply.`);
        scene.text(`She smiles. "${((s as any).pcs_nickname ?? '')}, what a pretty name. I'm Kendra, but you can call me Mistress Kendra," she says with confidence.`);
        scene.text('"Oh…" you reply. She\'s one of those people.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_redlight', 'start'] },
          { label: 'Go back to shopping', goto: ['shop_erotomaniac', 'start'] },
          { label: 'Talk to her', handler: (st: GameState) => {
    (st as any).meet_kendra = 1;
    qspCall(st, 'npc_relationship', 'set', 'A84', 45);
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend01.jpg');
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      scene.text('You ask her about her clothes and start talking with her. You tell her that you live in Pavlovsk and are in your final year of school and she replies by saying that she\'s a student from the Republic of Congo and is attending the local university on a student visa.');
      scene.text(`You talk about a wide range of subjects for a while before she smiles at you. "You're very pretty. I love making pretty little Russian bitches my slaves. Call me Mistress Kendra, ${((st as any).pcs_nickname ?? '')}, and become mine."`);
      scene.text('You have no doubt where this will lead…');
    } else {
      scene.text('You ask her about her clothes and start talking with her. You tell her a bit about yourself and she replies by saying that she\'s a student from the Republic of Congo and is attending the local university on a student visa.');
      scene.text(`You talk about a wide range of subjects for a while before she smiles at you. "You're very pretty. I love making pretty little Russian bitches my slaves. Call me Mistress Kendra, ${((st as any).pcs_nickname ?? '')}, and become mine."`);
      scene.text('You have no doubt where this will lead…');
    }
    scene.actions([
      { label: 'Call her Kendra', handler: (st: GameState) => {
    (st as any).kendrano = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
    scene.text('You smile at her. "Sorry, but I don\'t belong to anyone."');
    scene.text('She sighs softly. "Such a waste. Oh well, there\'s plenty of pretty little white Russian bitches that love being owned by an ebony Mistress. Perhaps we\'ll meet again and you\'ll change your mind?"');
    scene.text('She gives you directions to her dorm room and you both return to shopping.');
    scene.actions([
      { label: 'Go back to shopping', goto: ['shop_erotomaniac', 'start'] },
    ]);
  } },
      { label: 'Call her Mistress Kendra', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
    scene.text('You look down to show your submission to her. "Yes, Mistress Kendra…"');
    scene.text('She smiles. "I think you\'re going to make a great little slave. We\'re going to have a lot of fun together. Now follow me slave."');
    scene.actions([
      { label: 'Serve Kendra', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A84');
    (st as any).kendraslave = ((st as any).kendraslave ?? 0) + (1);
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend1.jpg');
    scene.text('You follow her down into the basement, where she sits on the edge of a table and pulls her fetish clothing aside, exposing her pussy. "Strip for me, bitch."');
    scene.text('You do as you\'re told and begin to slowly strip out of your clothes until you\'re naked. "Good little slave. Now get over here and worship my pussy."');
    scene.text('You kneel before her and start eagerly licking her pussy as Kendra squeals and moans in pleasure.');
    scene.text('"Look at me!" she commands. When you look up at her while still eating her out, she pulls her new toy out of her bag. "We\'re going to use this."');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.actions([
        { label: 'She pulls out a dildo', goto: ['shop_erotomaniac', 'kendra1'] },
      ]);
    } else {
      scene.actions([
        { label: 'She pulls out a strap-on', goto: ['shop_erotomaniac', 'kendra2'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.img('images/locations/city/redlight/erotomaniac/sex/shkend0.jpg');
        scene.text('As you browse the store, you see a very attractive young black woman trying on latex clothes. She notices you and gives you a quick once over before she goes back to what she was doing.');
        scene.text('After a few minutes, she moves to another section of the store.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_redlight', 'start'] },
          { label: 'Go back to shopping', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop_erotomaniac', 'start'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterKendra1(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/erotomaniac/sex/shkend2.jpg');
  scene.text('You take the dildo from Kendra and insert it into her pussy. You use one hand to fuck her with the dildo while the other caresses her clit, Kendra moaning and writhing in pleasure as she leans back on the table.');
  qspCall(s, 'arousal', 'vaginal_dildo_give', 5, 'lesbian', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend3.jpg');
    scene.text('You dutifully continue to thrust the dildo in and out of her while stroking her clit. Her juices begin dripping from the dildo onto your hand.');
    scene.text('"That\'s right, slave. Just keep doing that!" she commands.');
    qspCall(st, 'arousal', 'vaginal_dildo_give', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend4.jpg');
    scene.text('A few seconds later, she starts spasming as her whole body is overwhelmed by her orgasm. Her pussy squirts juices, covering your hand and her thighs. Some of it even ends up on your breasts and stomach.');
    scene.text('Once her orgasm subsides, Kendra looks at you. "You\'re my beautiful little white bitch, totally committed to serving me. Now lick me clean!" she orders.');
    qspCall(st, 'arousal', 'vaginal_dildo_give', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend5.jpg');
    scene.text('You pull the dildo out of her soaking wet pussy and dutifully move your head between her legs to begin slowly licking the juices from her thighs and pussy.');
    scene.text('"Keep going, you slut!" she barks and you begin to lick faster, licking her thighs and pussy completely clean of her juices. Once you finish, she pushes you away.');
    scene.text('"Good girl. Now it\'s time for your reward," she says as she pulls a strap-on out of her bag.');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Yes, Mistress', goto: ['shop_erotomaniac', 'kendra2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendra2(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/erotomaniac/sex/shkend8.jpg');
  scene.text('Kendra steps into the harness and slides it up over her hips before pulling the straps tight to hold it firmly in place.');
  scene.text('She then pulls you in close and kisses you as her fingers slide down to your pussy and start rubbing it before she slides one finger inside you. She breaks the kiss a few seconds later.');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('"I see you\'re still a virgin, so I won\'t pop your cherry. Luckily, you have other holes I can fuck. Now get on your knees and suck my cock!"');
  } else {
    scene.text('"I see you\'re already wet, slave. Eager for my cock, are you? Don\'t worry, you\'ll feel it soon enough. Now get on your knees and suck it first!"');
  }
  scene.actions([
    { label: 'Suck her strap-on', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend7.jpg');
    scene.text('You kneel down and take hold of the dildo with one hand while wrapping your lips around it. You start stroking it while sucking it.');
    qspCall(st, 'arousal', 'bj', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend7.jpg');
    scene.text('You suddenly feel Kendra grab you by the hair before she pushes your head forwards, forcing the dildo down your throat.');
    scene.text('After making you gag for a few seconds, she lets you pull back to get a breath through your nose - only for her to force it down your throat again as she starts roughly fucking your mouth.');
    qspCall(st, 'arousal', 'bj', 5, 'lesbian', 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      scene.actions([
        { label: 'Vaginal', goto: ['shop_erotomaniac', 'kendravag'] },
      ]);
    }
    scene.actions([
      { label: 'Anal', goto: ['shop_erotomaniac', 'kendraanal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendravag(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/erotomaniac/sex/shkend10.jpg');
  scene.text('"Ride my cock now, slave!" Kendra commands as she sits in a chair. You straddle her and lower yourself, moaning as the dildo slides into your pussy.');
  scene.text('You start riding the strap-on as Kendra drives it up from under you, trying to shove it as deep into your pussy as possible. Several minutes pass, and each thrust increases your arousal.');
  qspCall(s, 'arousal', 'vaginal_strap', 5, 'lesbian', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Rub clit', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend12.jpg');
    scene.text('You start rubbing your clit as you ride her strap-on, but just as you\'re getting close to an orgasm, Kendra pushes you off.');
    scene.text('"I\'m going to wreck your little ass now!"');
    qspCall(st, 'arousal', 'vaginal_strap', 5, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'masturbate', (-5), 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', goto: ['shop_erotomaniac', 'kendraanal'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendraanal(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  qspCall(s, 'boyStat', 'D4');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/erotomaniac/sex/shkend9.jpg');
  scene.text('You both stand up and she commands you to get on the table. You do as you\'re told and spread your legs before she steps between them and gently slides the dildo, slick with your pussy juices, into your asshole.');
  scene.text('She stops to let you adjust before she starts to thrust, causing you to moan. Seeing that you\'re enjoying it, she starts to go faster.');
  scene.text('"Tell me who your ass belongs to, slave!" she grunts.');
  qspCall(s, 'arousal', 'anal_strap', 5, 'lesbian', 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'humiliation', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend13.jpg');
    scene.text('You decide not to tell her what she wants to hear.');
    scene.text('"It\'s my ass! I just <i>let</i> you fuck it sometimes!" you reply in defiance.');
    scene.text('Just as you expected, she starts fucking you harder and faster.');
    scene.text('"You\'ll learn your place, slave! You <i>will</i> submit to me, or I\'ll fuck your ass raw!" she barks and spends several minutes hammering your ass before asking again. "Tell me your ass belongs to me, slave!"');
    qspCall(st, 'arousal', 'anal_strap', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'humiliation', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend6.jpg');
    scene.text('You continue to defiantly resist. "This is my ass, and I decide who fucks it!"');
    scene.text('She starts fucking you even harder, pushing your legs closed so she can get a better grip on your hips.');
    scene.text('"Learn your damn place, slave! You belong to me! You will submit to me <i>now</i> or else, no matter what you say, I\'ll fuck your ass raw!" she barks and spends several minutes hammering your ass before asking again. "Tell me your ass belongs to me, slave!"');
    qspCall(st, 'arousal', 'anal_strap', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'humiliation', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend14.jpg');
    scene.text('Although unable to blurt out more than a simple "No!" against the pain of her endless thrusts, you refuse to submit and continue resisting.');
    scene.text('She slams the strap-on balls deep into your ass and starts hammering you as hard and fast as she can. "You\'ll learn your place, right this instant, slave! You will submit to me <i>now</i>, or I\'ll stay here all day and fuck your ass until you weep and beg me to stop!"');
    scene.text('She keeps fucking your ass for a few minutes before she asks again. "Tell me your ass belongs to me right now, slave!"');
    qspCall(st, 'arousal', 'anal_strap', 5, 'lesbian', 'sub');
    qspCall(st, 'pain', '1', 'asshole', 'tear');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend15.jpg');
    scene.text('Your ass is pulsing in pain by now and you finally give in and submit to her command. "My ass belongs to you, Mistress Kendra!"');
    scene.text('She smiles at you as she continues to fuck your asshole. "That\'s right, slave. And what can I do with it?"');
    scene.text('"Anything you want, Mistress Kendra! I belong to you!" you submissively reply.');
    scene.text('Her smile gets bigger. "That\'s right, bitch! Your ass belongs to me, and I can fuck it any time I want. Tell me!"');
    scene.text('Despite the pain, you moan in pleasure as she continues fucking your ass. "My ass belongs to you, and you can fuck it anytime you want, Mistress Kendra!" you scream.');
    scene.text('She fucks your ass for a few more minutes, as if to make her point, before she pulls out of you. As she does, she pulls you off the table onto your feet.');
    qspCall(st, 'arousal', 'anal_strap', 5, 'lesbian', 'sub');
    qspCall(st, 'pain', '1', 'asshole', 'tear');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['shop_erotomaniac', 'kendrafinish'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend14.jpg');
    scene.text('You give in and submit to her command. "My ass belongs to you, Mistress Kendra!"');
    scene.text('She smiles at you, pushing your legs together as she continues to fuck your asshole. "That\'s right, slave. And what can I do with it?"');
    scene.text('"Anything you want, Mistress Kendra! I belong to you!" you submissively reply.');
    scene.text('Her smile gets bigger. "That\'s right, bitch! Your ass belongs to me, and I can fuck it any time I want. Tell me!"');
    scene.text('Despite the pain, you moan in pleasure as she continues fucking your ass.');
    scene.text('"My ass belongs to you, and you can fuck it anytime you want, Mistress Kendra!" you scream.');
    scene.text('She fucks your ass for a few more minutes, as if to make her point, before she pulls out of you. As she does, she pulls you off the table onto your feet.');
    qspCall(st, 'arousal', 'anal_strap', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['shop_erotomaniac', 'kendrafinish'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend6.jpg');
    scene.text('You give in and submit to her command. "My ass belongs to you, Mistress Kendra!"');
    scene.text('She smiles at you, pushing your legs together as she continues to fuck your asshole. "That\'s right, slave. And what can I do with it?"');
    scene.text('"Anything you want, Mistress Kendra! I belong to you!" you submissively reply.');
    scene.text('Her smile gets bigger. "That\'s right, bitch! Your ass belongs to me, and I can fuck it any time I want. Tell me!"');
    scene.text('Despite the pain, you moan in pleasure as she continues fucking your ass.');
    scene.text('"My ass belongs to you, and you can fuck it anytime you want, Mistress Kendra!" you scream.');
    scene.text('She fucks your ass for a few more minutes, as if to make her point, before she pulls out of you. As she does, she pulls you off the table onto your feet.');
    qspCall(st, 'arousal', 'anal_strap', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['shop_erotomaniac', 'kendrafinish'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend13.jpg');
    scene.text('"My ass belongs to you, Mistress Kendra!" you cry out.');
    scene.text('She smiles at you as she continues fucking your ass. "That\'s right, slave. And what can I do with it?"');
    scene.text('"Anything you want, Mistress Kendra! I belong to you!" you submissively reply.');
    scene.text('Her smile gets bigger. "That\'s right, bitch! Your ass belongs to me, and I can fuck it any time I want. Tell me!"');
    scene.text('Despite the pain, you moan in pleasure as she continues fucking your ass.');
    scene.text('"My ass belongs to you, and you can fuck it any time you want, Mistress Kendra!" you scream.');
    scene.text('She fucks your ass for a few more minutes, as if to make her point, before she pulls out of you. As she does, she pulls you off the table onto your feet.');
    qspCall(st, 'arousal', 'anal_strap', 5, 'lesbian', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['shop_erotomaniac', 'kendrafinish'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKendrafinish(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  ((s as any).kendra = (s as any).kendra ?? {})[1] = ((s as any).daystart ?? 0) + 6;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/erotomaniac/sex/shkend16.jpg');
  scene.text('As you stand up, she grabs you by the throat and pulls you in close. "Stick out your tongue."');
  scene.text('You do as she says and the two of you make out for several minutes before she stops and roughly grabs your ass cheek, digging her nails into your backside. She then lets go, steps away and starts sliding the harness off. She cleans the dildo and puts it away before getting dressed.');
  scene.text('Once she\'s finished, she turns to you again. "You may get dressed, slave."');
  scene.text('"Thank you, Mistress…" you reply and start picking up your clothes and putting them on.');
  scene.text('Once you\'re dressed, she gives you a smile. "You should come visit me. I live in the dorms at the university." She gives you directions to her dorm room. "I expect my little white slave to come and visit me… Often."');
  scene.text('"Yes, Mistress Kendra…" you submissively reply before you both leave the basement and head back up to the store.');
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian', 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return to the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop_erotomaniac', 'start'] },
  ]);
  scene.build();
}

function enterAlbina(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['sex_shop'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/event/browsing.jpg');
  scene.text('You approach Albina with a smile as she examines a cheap, tacky looking thong.');
  scene.text('Given that she\'s rather wealthy, you\'re curious as to why she\'s buying her underwear from here.');
  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
    if (((s as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('She grins when she sees you. "You here to suck some dicks down in the gloryholes?"');
      scene.text('You blush at her jest and she smiles. "Don\'t worry, I won\'t tell anyone. Just stay safe, okay?"');
      scene.text('You just nod and allow her to go back to browsing.');
    } else {
      scene.text(`She smiles when she sees you. "${((s as any).pcs_nickname ?? '')}? I didn't expect to ever see you in here."`);
      scene.text('"I was just browsing," you reply.');
      scene.text('"Same," she says. "I need some new cheap underwear that I don\'t mind losing, but I might see if they have any new toys in stock while I\'m here."');
      scene.text('You chat for a few more minutes before she excuses herself.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A23'] > 20  &&  ((s as any).npc_rel ?? 0)?.['A23'] < 60) {
      if (((s as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('She gives you an awkward smile in return before turning away from you.');
        scene.text('It\'s obvious she doesn\'t want to be seen talking to you.');
      } else {
        scene.text('She gives you a small smile in return, but doesn\'t seem too interested in having a conversation with you.');
        scene.text('You eventually give up and allow her to go back to her browsing.');
      }
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('She frowns when she sees you. "The gloryholes are down in the basement, slut. Go and find a cock to suck there."');
        scene.text('She then turns away and proceeds to ignore you.');
      } else {
        scene.text('She frowns when she sees you. "I don\'t have time to talk to you."');
        scene.text('She barges past you and walks over to another section of the store.');
      }
    }
  }
  scene.actions([
    { label: 'Return to the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop_erotomaniac', 'start'] },
  ]);
  scene.build();
}

function enterShprod(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/city/redlight/erotomaniac/shprod.jpg');
  scene.text('The cashier stands in front of you, holding a miniskirt and offering to help you. "Girl, this is very you. Will you try it on?"');
  scene.actions([
    { label: 'Refuse', goto: ['shop_erotomaniac', 'start'] },
    { label: 'Try it on', handler: (st: GameState) => {
    (st as any).picrand = 47;
    scene.img('images/locations/city/redlight/erotomaniac/shprod1.jpg');
    scene.text('You put the skirt on and walk out of the booth to pose in the mirror. You don\'t have any panties on, and the skirt is so short that it looks more like a belt. It doesn\'t cover anything and your pussy is fully visible from all directions.');
    scene.text('Approaching the mirror, you consider this so-called skirt. The cashier kneels behind you and starts praising how your ass looks in it, his hands wandering around your hips as he get his lips as close to your ass as he can.');
    scene.text('He says that he wants to "kiss your skin" and words soon cease. Just the feeling of his lips against your skin remains, getting closer and closer to your pussy…');
    qspCall(st, 'willpower', 'cuni', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'shop_erotomaniac', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him', handler: (st: GameState) => {
    qspCall(st, 'boyStat', '');
  }, goto: ['sex', 'kuni'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'sexshop_menu':
      enterSexshopMenu(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case 'outfits':
      enterOutfits(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
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
    case 'basement':
      enterBasement(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'peepbooth':
      enterPeepbooth(s, scene);
      break;
    case 'kendra':
      enterKendra(s, scene);
      break;
    case 'kendra1':
      enterKendra1(s, scene);
      break;
    case 'kendra2':
      enterKendra2(s, scene);
      break;
    case 'kendravag':
      enterKendravag(s, scene);
      break;
    case 'kendraanal':
      enterKendraanal(s, scene);
      break;
    case 'kendrafinish':
      enterKendrafinish(s, scene);
      break;
    case 'albina':
      enterAlbina(s, scene);
      break;
    case 'shprod':
      enterShprod(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_erotomaniac: LocationDef = {
  name: 'shop_erotomaniac',
  title: 'The Erotomaniac',
  region: 'other',
  locationType: 'event',
  locclass: 'changingroom',
  description: ['The main counter displays various sex toys and other related items:'],
  enter: enter,
};
