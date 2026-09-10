import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('If you want to set your skills and attributes to a certain number, use the cheat menu to do it, the options to do it here were removed.');
  if (((s as any).start_type ?? 0)?.['group']  === '') {
    (s as any).start_type['group'] = 'custom';
  }
  if (((s as any).start_type ?? 0)?.['cat']  === '') {
    (s as any).start_type['cat'] = 'custom';
  }
  if (((s as any).clothingworntype ?? 0) === '') {
    qspCall(s, 'outfit', 'clear_all');
  }
  (s as any).intro_custom['money'] = (-1);
  (s as any).intro_custom['loc'] = '';
  (s as any).intro_custom['loc_arg'] = '';
  (s as any).intro_custom['loc_s'] = '';
  (s as any).intro_custom['args_s'] = '';
  (s as any).intro_custom['menu_loc'] = '';
  (s as any).intro_custom['menu_arg'] = '';
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] === 0) {
    (s as any).pcs_mass['butt_gen'] = 22;
  }
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] === 0) {
    (s as any).pcs_mass['bust_gen'] = 22;
  }
  if (((s as any).soc_grup ?? 0) === '') {
    qspCall(s, 'intro_character_custom', 'none');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.actions([
      { label: 'Pick a social group', goto: ['intro_character_custom', 'modgrup'] },
      { label: 'Set relationships', goto: ['intro_character_custom', 'modrel'] },
      { label: 'Confirm these options', handler: (st: GameState) => {
    // TODO-QSP: dynamic 'grupvalue[<<grupTipe>>] = 600'
    if (((s as any).soc_grup ?? 0) === 'nerd') {
      (s as any).trait_vars['academic_exp'] = 350;
      (s as any).trait_vars['academic'] = 2;
      (s as any).trait_vars['nerd_learn_home'] = 5;
    } else {
      (s as any).trait_vars['academic_exp'] = (-20);
    }
    if (((s as any).pcs_inhib ?? 0) < 10) {
      (s as any).pcs_inhib = 10;
    }
    if (((s as any).pcs_inhib ?? 0) > 50) {
      qspCall(s, 'clothing', 'wear', 'gm_school', 6);
    }
    if (((s as any).bag ?? 0) === 1) {
      qspCall(s, 'purses', 'add_item', ((s as any).currentpursetype ?? 0), ((s as any).currentpursenumber ?? 0));
      qspCall(s, 'obj_din', 'old');
    }
    qspCall(s, 'intro_functions', 'reset_school');
    if (((s as any).loc ?? 0) === 'intro_tg_teen_start') {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'appearance_hub'] }]);
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Confirm these options', handler: (st: GameState) => {
    if (((s as any).bag ?? 0) === 1) {
      qspCall(s, 'purses', 'add_item', ((s as any).currentpursetype ?? 0), ((s as any).currentpursenumber ?? 0));
      qspCall(s, 'obj_din', 'old');
    }
  }, goto: ['intro_character_creation', 'appearance_hub'] },
    ]);
  }
  scene.actions([
    { label: 'Set attributes', goto: ['intro_character_custom', 'modatt'] },
    { label: 'Set skills', goto: ['intro_character_custom', 'modskl'] },
    { label: 'Set appearance', goto: ['intro_character_custom', 'modapp'] },
    { label: 'Set purse', goto: ['intro_character_custom', 'modpur'] },
    { label: 'Set items', goto: ['intro_character_custom', 'modite'] },
    { label: 'Set clothes', goto: ['intro_character_custom', 'modclo_menu'] },
    { label: 'Set money (<<$func(\'money\', \'format\', money)>>)', handler: (st: GameState) => {
    (s as any).money = qspUntranslated(s, "input('Set Cash Amount')", { location: "intro_character_custom" });
  }, goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterModcloMenu(s: GameState, scene: SceneBuilder): void {
  scene.text('Make sure to finalize appearance stats before choosing clothing otherwise they might not fit once the game starts.');
  qspCall(s, 'body', 'initial');
  qspCall(s, 'wardrobe', 'removeall');
  qspCall(s, 'tattoo_management', 'count');
  qspCall(s, 'piercing_management', 'count');
  if (((s as any).intro_custom ?? 0)?.['money'] === -1) {
    (s as any).intro_custom['money'] = ((s as any).money ?? 0);
    (s as any).money = 999999999;
  }
  if (((s as any).intro_custom ?? 0)?.['loc'] === '') {
    (s as any).intro_custom['loc'] = ((s as any).loc ?? 0);
    (s as any).intro_custom['loc_arg'] = ((s as any).loc_arg ?? 0);
    (s as any).intro_custom['loc_s'] = ((s as any).loc_s ?? 0);
    (s as any).intro_custom['args_s'] = ((s as any).args_s ?? 0);
    (s as any).intro_custom['menu_loc'] = ((s as any).menu_loc ?? 0);
    (s as any).intro_custom['menu_arg'] = ((s as any).menu_arg ?? 0);
    (s as any).intro_custom_shop_return = 1;
    (s as any).intro_custom_step = 1;
  }
  qspCall(s, 'core_library', 'setloc', 'intro_character_custom', 'modclo_menu');
  if (((s as any).pcs_tattoos ?? 0)?.['total'] > 0) {
    scene.actions([
      { label: 'Manage tattoos', goto: ['intro_character_custom', 'modclo_tattoos'] },
    ]);
  }
  if (((s as any).pcs_piercings ?? 0)?.['total'] > 0) {
    scene.actions([
      { label: 'Manage Piercings', goto: ['piercing_management', 'main'] },
    ]);
  }
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).money = ((s as any).intro_custom ?? 0)?.['money'];
    (s as any).intro_custom['money'] = (-1);
    (s as any).intro_custom['loc'] = '';
    (s as any).intro_custom['loc_arg'] = '';
    (s as any).intro_custom['menu_loc'] = '';
    (s as any).intro_custom['menu_arg'] = '';
    (s as any).intro_custom['loc_s'] = '';
    (s as any).intro_custom['args_s'] = '';
    (s as any).intro_custom_shop_return = 0;
  }, goto: ['intro_character_custom', 'start'] },
    { label: 'Browse', goto: ['intro_character_custom', 'modclo'] },
    { label: 'Open wardrobe', goto: ['wardrobe', 'main'] },
    { label: 'View looks', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_looks');
  } },
  ]);
  scene.build();
}

function enterModcloTattoos(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_tattoos ?? 0)?.['total'] > 0) {
    // TODO-QSP: act 'Remove all tattoos':    gs 'tattoo_management', 'full_reset'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_menu'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['face'] > 0) {
    // TODO-QSP: act 'Remove face tattoo':    gs 'tattoo_management', 'remove', 'face'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['lip'] > 0) {
    // TODO-QSP: act 'Remove lip tattoo':    gs 'tattoo_management', 'remove', 'lip'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['neck'] > 0) {
    // TODO-QSP: act 'Remove neck tattoo':    gs 'tattoo_management', 'remove', 'neck'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['back'] > 0) {
    // TODO-QSP: act 'Remove back tattoo':    gs 'tattoo_management', 'remove', 'back'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
    // TODO-QSP: act 'Remove shoulder tattoo':  gs 'tattoo_management', 'remove', 'shoulder'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['breast'] > 0) {
    // TODO-QSP: act 'Remove breast tattoo':    gs 'tattoo_management', 'remove', 'breast'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['under'] > 0) {
    // TODO-QSP: act 'Remove under tattoo':    gs 'tattoo_management', 'remove', 'under'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['chest'] > 0) {
    // TODO-QSP: act 'Remove chest tattoo':    gs 'tattoo_management', 'remove', 'chest'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['side'] > 0) {
    // TODO-QSP: act 'Remove side tattoo':    gs 'tattoo_management', 'remove', 'side'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
    // TODO-QSP: act 'Remove belly tattoo':    gs 'tattoo_management', 'remove', 'belly'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
    // TODO-QSP: act 'Remove arm tattoo':    gs 'tattoo_management', 'remove', 'arm'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0) {
    // TODO-QSP: act 'Remove wrist tattoo':    gs 'tattoo_management', 'remove', 'wrist'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['hand'] > 0) {
    // TODO-QSP: act 'Remove hand tattoo':    gs 'tattoo_management', 'remove', 'hand'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
    // TODO-QSP: act 'Remove leg tattoo':    gs 'tattoo_management', 'remove', 'leg'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0) {
    // TODO-QSP: act 'Remove ankle tattoo':    gs 'tattoo_management', 'remove', 'ankle'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    // TODO-QSP: act 'Remove tramp tattoo':    gs 'tattoo_management', 'remove', 'tramp'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ass'] > 0) {
    // TODO-QSP: act 'Remove ass tattoo':    gs 'tattoo_management', 'remove', 'ass'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
    // TODO-QSP: act 'Remove pussy tattoo':    gs 'tattoo_management', 'remove', 'pussy'
    scene.actions([{ label: 'Continue', goto: ['intro_character_custom', 'modclo_tattoos'] }]);
  }
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modclo_menu'] },
  ]);
  scene.build();
}

function enterModclo(s: GameState, scene: SceneBuilder): void {
  scene.text('Make sure to finalize appearance stats before choosing clothing otherwise they might not fit once the game starts.');
  if (((s as any).menu_name ?? 0) === '') {
    scene.actions([
      { label: 'Return', goto: ['intro_character_custom', 'modclo_menu'] },
      { label: 'Allure', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'allure'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Coco Carmen', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'coco_carmen'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Danilovich', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'danilovich'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Erotomaniac', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'erotomaniac'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Fancy Pancy', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'fancy_pancy'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Fashionista', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'fashionista'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Flamingo\'s', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'flamingos'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'G&M', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'gm'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Lusso Intimo', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'lusso'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Market', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing', 'mar...
  } },
      { label: 'Mommy Style', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'materinstvo'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Mon Cheri', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'moncheri'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Nerdvana', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'nerdvana'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Patch Work Dolls', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'dolls'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Pussy-Cats', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'pussycats'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Scandalicious', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'scandalicious'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Simply Salacious', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'exhibitionist'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Tsar Bomba', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'tsar_bomba'
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'Tattoos & Piercings', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'pirsingsalon'
  }, goto: ['intro_character_custom', 'modclo'] },
    ]);
  } else {
    scene.text('<center><b>shop_allure</b></center>');
    scene.img('images/locations/city/residential/lake/allure/shop.jpg');
    scene.text('This shop has the feel of a summer at the beach, which you\'d expect seeing as it sells swimwear.');
    if (((s as any).menu_name ?? 0) === 'coco_carmen') {
      scene.text('<center><b>Coco Carmen</b></center>');
      scene.img('images/locations/pavlovsk/coco/shop.jpg');
      scene.text('If you are happy to push through the tourists Coco has everything a young adult might like to wear. It\'s a step up from G&M and unless you can afford the boutiques in Old Town you\'ll be spending some time buying outfits here.');
      scene.actions([
        { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
        { label: 'View dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'co...
  } },
        { label: 'View other outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'co...
  } },
        { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'co...
  } },
      ]);
    } else {
      scene.text('<center><b>Danilovich sporting goods</b></center>');
      scene.img('images/locations/city/citycenter/mall/sportshop/sportshop.jpg');
      scene.text('As soon as you enter, a high energy song with a thumping baseline fills your eardrums, making you feel pumped and awake. The store is sleek and professional, the walls and floors advertising all different kinds of sporting equipment and attire. The room is filled with beautifully fit people shopping, their bodies varying from big and muscular to lean and trim. If they don\'t inspire you to want to work out, the posters advertising past and present famous athletes are motivating as hell.');
      qspCall(s, 'themes', 'indoors');
      qspCall(s, 'item_cart', 'shopping_aisle', 'sports');
      if (((s as any).menu_name ?? 0) === 'erotomaniac') {
        scene.text('<center><b>The Erotomaniac</b></center>');
        scene.img('images/locations/city/redlight/erotomaniac/sexshop.jpg');
        scene.text('The main counter displays various sex toys:');
        scene.text('Lubricant - 145 <b>₽</b>');
        scene.text('Vibrator - 800 <b>₽</b>');
        scene.text('Butt plug - 800 <b>₽</b>');
        scene.text('Strap-on harness - 500 <b>₽</b>');
        scene.text('Dildos - starting at 800 <b>₽</b>');
        scene.actions([
          { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
          { label: 'Adult toys & items', goto: ['shop_erotomaniac', 'sexshop_menu'] },
          { label: 'Look through the fetish dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'er...
  } },
          { label: 'Look through the fetish outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'er...
  } },
          { label: 'Look through the stripper clothing', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'er...
  } },
          { label: 'Look through the bras', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bras',    'erot...
  } },
          { label: 'Look through the panties', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'panties',    'e...
  } },
          { label: 'Look through the fetish shoes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'shoes',    'ero...
  } },
        ]);
      } else {
        scene.text('<center><b>Fancy Pancy</b></center>');
        scene.img('images/locations/pushkin/fancypancy/shop.jpg');
        scene.text('This small boutique shop looks more like a dressing room at the burlesque club nearby. Satin, leather, ruffles and glamour make it clear this is not a place to buy a practical outfit. It is the only place to buy outfits suitable for the burlesque club or perhaps spice up things in the bedroom.');
        scene.text('The boutique sells designer winter coats, burlesque clothing, beautiful shoes and exquisite handbags.');
        if (((s as any).menu_name ?? 0) === 'fashionista') {
          scene.text('<center><b>Fashionista</b></center>');
          scene.img('images/locations/city/citycenter/mall/fashionista/fashionista.jpg');
          scene.text('This shop features many big name brands and designer clothing. Even their bags look cool.');
          scene.text('You can try on outfits via the changing room.');
          scene.actions([
            { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
            { label: 'Try on dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'fa...
  } },
            { label: 'Try on outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'fa...
  } },
            { label: 'Try on bra', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bras',    'fash...
  } },
            { label: 'Try on panties', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'panties',    'f...
  } },
            { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'fa...
  } },
          ]);
        } else {
          scene.text('<center><b>Flamingo\'s</b></center>');
          scene.img('images/locations/city/island/flamingos/shop.jpg');
          scene.text('Flamingos is trendy and modern while still keeping the prices low enough for the large student population on the Island. It mimics the latest fashions for young adults but cuts costs on material and manufacturing. This suits the clients who are likely to grow bored of an outfit before it falls apart and that\'s why it\'s always busy.');
          if (((s as any).menu_name ?? 0) === 'gm') {
            scene.text('<center><b>Welcome to G & M - Clothes for all your needs</b></center>');
            scene.img('images/locations/city/citycenter/mall/gandm/shop.jpg');
            scene.text('G&M is not fancy, it\'s certainly not high fashion but it\'s cheap and has specific work and school wear.');
            scene.actions([
              { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
              { label: 'View clothing', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'gm...
  } },
              { label: 'View dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'gm...
  } },
              { label: 'View office wear', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'gm...
  } },
              { label: 'View maid outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'gm...
  } },
              { label: 'View server uniforms', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'gm...
  } },
              { label: 'View school uniforms', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'gm...
  } },
              { label: 'View bras', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bras',    'gm'
  } },
              { label: 'View panties', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'panties',    'g...
  } },
              { label: 'View shoes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'shoes',    'gm'
  } },
              { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'gm...
  } },
              { label: 'View coats', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'coats',    'gm'
  } },
            ]);
          } else {
            scene.text('<center><b>Lusso Intimo</b></center>');
            scene.img('images/locations/city/citycenter/mall/lusso/lusso.jpg');
            scene.text('The décor is bright and modern the flowers are real and the dressers made with expensive woods.');
            scene.text('This is clearly a high end underwear shop. Just knowing you are wearing these will make you stand out more and they will feel so nice you might never want to go back to wearing the cheap ill fitting underwear you used to have to put up with. That is of course assuming you can afford the prices here.');
            if (((s as any).menu_name ?? 0) === 'materinstvo') {
              scene.text('<center><b>Mommy Style</b></center>');
              scene.img('images/locations/city/citycenter/mall/mommy/shop.jpg');
              scene.text('This is a shop dedicated to all things pregnancy related. Here you can buy Pregnancy Clothing or items to aid the process of getting through the day.');
              scene.actions([
                { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                { label: 'View clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing', 'mat...
  } },
              ]);
            } else {
              scene.text('<center><b>Mon Chéri</b></center>');
              scene.img('images/locations/city/citycenter/mall/boutique/butik.jpg');
              scene.text('You\'re inside the boutique only a few seconds before a tall, slender brunette woman saunters up to you. Everything about her is poised and perfect, from the beautiful silver dress she\'s wearing to her unblemished skin and pearly white teeth. "Welcome to Mon Chéri, dear. We sell only the most beautifully luxurious items here. Come, take a look! You won\'t be disappointed," she smiles as she ushers you further inside with a small flourish. Everything in the boutique is high-end, definitely not for the average shopper, but the items on display are simply stunning.');
              scene.text('The boutique sells designer winter coats, formal clothing, beautiful shoes and exquisite handbags.');
              if (((s as any).menu_name ?? 0) === 'nerdvana') {
                scene.text('<center><b>Nerdvana</b></center>');
                scene.img('images/locations/city/island/nerdvana/shop.jpg');
                scene.text('If you are happy to push through the tourists nerdvana has everything a young adult might like to wear. It\'s a step up from G&M and unless you can afford the boutiques in Old Town you\'ll be spending some time buying outfits here.');
                scene.actions([
                  { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                  { label: 'View cosplay outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'ne...
  } },
                  { label: 'View other outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'ne...
  } },
                  { label: 'View swimsuits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'ne...
  } },
                  { label: 'View bikinis', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'ne...
  } },
                  { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'ne...
  } },
                ]);
              } else {
                scene.text('<center><b>Patch Work Dolls</b></center>');
                scene.img('images/locations/city/island/dolls/dollsshop.jpg');
                scene.text('The store has a small front on a side street, but one glance is all you need to tell this is not your average clothing store. Inside the store, shelves and racks of alternative clothes are crammed into every available space - anybody setting out to find an inch of wall would have their work cut out for them. The checkout counter is near the entrance.');
                if (((s as any).menu_name ?? 0) === 'pussycats') {
                  scene.text('<b><center><font size="4">Pussy-Cats</font></center></b>');
                  scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
                  scene.text('The latest chart topping pop single is playing throughout the small store. The interior is decorated in bright colors and bold designs, and the floor is packed with stands and tables displaying clothes with a more daring style. Looking around at all the advertisements with attractive yet emaciated models, you\'ll either leave here seduced into buying something or with lower self-esteem.');
                  scene.actions([
                    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                    { label: 'View dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'ca...
  } },
                    { label: 'View other outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'ca...
  } },
                    { label: 'View bras', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bras',    'cats...
  } },
                    { label: 'View panties', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'panties',    'c...
  } },
                    { label: 'View shoes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'shoes',    'cat...
  } },
                    { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'ca...
  } },
                    { label: 'View coats', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'coats',    'cat...
  } },
                  ]);
                } else {
                  scene.text('<center><b>Scandalicious</b></center>');
                  scene.img('images/locations/city/citycenter/mall/scandalicious/shop.jpg');
                  scene.text('This store is cheap and tacky. The clothing lives up to the name though and you assume they saved a lot of money on fabric.');
                  scene.text('It\'s not somewhere you\'d go with your Mom or let her know you\'d even looked in the window but if you want to show off your body there is nowhere better to shop. The staff aren\'t judging anyone so it feels relaxed but there is still a mix of those hiding their embarrassment and those exuding confidence.');
                  if (((s as any).menu_name ?? 0) === 'exhibitionist') {
                    scene.text('<center><b>Simply Salacious</b></center>');
                    scene.img('images/locations/pushkin/exhibitshop/shop.jpg');
                    scene.text('A shop in the most modern style who\'s clothing is all very revealing and not nearly as classy as the store itself.');
                    scene.actions([
                      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                      { label: 'View outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'sa...
  } },
                      { label: 'View dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'sa...
  } },
                      { label: 'View bras', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bras',    'sala...
  } },
                      { label: 'View panties', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'panties',    's...
  } },
                      { label: 'View bodysuits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bodysuits',  's...
  } },
                    ]);
                  } else {
                    scene.text('<center><b>Tsar Bomba</b></center>');
                    scene.img('images/locations/pushkin/bomba/shop.jpg');
                    scene.text('Tsar Bomba, a small clothing shop in the Okhlopkov Square. The shop is unique and used to be very cool with punk fashion. These days it is much more generic and alternative, it could easily be mistaken for an alt. fashion chain store.');
                    scene.text('Simply put this place is very cool and most of the clothes are strange and wonderful.');
                    if (((s as any).menu_name ?? 0) === 'pirsingsalon') {
                      scene.actions([
                        { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                        { label: 'Tattoos', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'pirsingsalon_tattoos'
  }, goto: ['intro_character_custom', 'modclo'] },
                        { label: 'Piercings', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'pirsingsalon_piercings'
  }, goto: ['intro_character_custom', 'modclo'] },
                      ]);
                    } else {
                      if (((s as any).menu_name ?? 0) === 'pirsingsalon_piercings') {
                        scene.actions([
                          { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'pirsingsalon'
  }, goto: ['intro_character_custom', 'modclo'] },
                          { label: 'Ears', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'piercings', 'ea...
  } },
                          { label: 'Brow', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'piercings', 'br...
  } },
                          { label: 'Lip', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'piercings', 'li...
  } },
                          { label: 'Nose', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'piercings', 'no...
  } },
                          { label: 'Tongue', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'piercings', 'to...
  } },
                          { label: 'Navel', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'piercings', 'na...
  } },
                          { label: 'Nipples', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'piercings', 'ni...
  } },
                          { label: 'Pussy', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'piercings', 'pu...
  } },
                        ]);
                      }
                      scene.actions([
                        { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'pirsingsalon'
  }, goto: ['intro_character_custom', 'modclo'] },
                        { label: 'Ankle', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'ankl...
  } },
                        { label: 'Arm', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'arm'
  } },
                        { label: 'Ass', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'ass'
  } },
                        { label: 'Back', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'back...
  } },
                        { label: 'Belly', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'bell...
  } },
                        { label: 'Breast', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'brea...
  } },
                        { label: 'Chest', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'ches...
  } },
                        { label: 'Face', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'face...
  } },
                        { label: 'Hand', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'hand...
  } },
                        { label: 'Leg', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'leg'
  } },
                        { label: 'Lip', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'lip'
  } },
                        { label: 'Neck', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'neck...
  } },
                        { label: 'Pussy', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'puss...
  } },
                        { label: 'Shoulder', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'shou...
  } },
                        { label: 'Side', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'side...
  } },
                        { label: 'Tramp', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'tram...
  } },
                        { label: 'Under', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'unde...
  } },
                        { label: 'Wrist', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'tattoos', 'wris...
  } },
                      ]);
                    }
                    scene.actions([
                      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                      { label: 'View dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'bo...
  } },
                      { label: 'View outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'bo...
  } },
                      { label: 'View shoes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'shoes',    'bom...
  } },
                      { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'bo...
  } },
                      { label: 'View coats', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'coats',    'bom...
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                    { label: 'View clothing', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'sc...
  } },
                    { label: 'View dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'sc...
  } },
                    { label: 'View swimsuits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'sc...
  } },
                    { label: 'View bikinis', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'sc...
  } },
                    { label: 'View bodysuits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bodysuits',  's...
  } },
                    { label: 'View shoes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'shoes',    'sca...
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                  { label: 'View dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'do...
  } },
                  { label: 'View other outfits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'do...
  } },
                  { label: 'View shoes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'shoes',    'dol...
  } },
                  { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'do...
  } },
                  { label: 'View coats', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'coats',    'dol...
  } },
                ]);
              }
              scene.actions([
                { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                { label: 'Try on gowns', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'mo...
  } },
                { label: 'Try on dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'mo...
  } },
                { label: 'Try on bodysuits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bodysuits',  'm...
  } },
                { label: 'View shoes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'shoes',    'mon...
  } },
                { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'mo...
  } },
                { label: 'View coats', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'coats',    'mon...
  } },
              ]);
            }
            scene.actions([
              { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
              { label: 'View bras', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bras',    'luss...
  } },
              { label: 'View panties', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'panties',    'l...
  } },
              { label: 'View bodysuits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bodysuits',  'l...
  } },
            ]);
          }
          scene.actions([
            { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
            { label: 'View dresses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'fl...
  } },
            { label: 'View other clothing', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'fl...
  } },
            { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'fl...
  } },
          ]);
        }
        scene.actions([
          { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
          { label: 'View clothing', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing', 'fan...
  } },
        ]);
      }
      scene.actions([
        { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
        { label: 'View sports clothing', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'da...
  } },
        { label: 'View swimwear', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing',  'da...
  } },
        { label: 'View sports bras', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'bras',    'dani...
  } },
        { label: 'View sports panties', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'panties',    'd...
  } },
        { label: 'View exercise shoes', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'shoes',    'dan...
  } },
        { label: 'View purses', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'purses',    'da...
  } },
        { label: 'View coats', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'coats',    'dan...
  } },
      ]);
    }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
      { label: 'View swimsuits', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing', 'all...
  } },
      { label: 'View bikinis', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing', 'all...
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'modclo_menu':
      enterModcloMenu(s, scene);
      break;
    case 'modclo_tattoos':
      enterModcloTattoos(s, scene);
      break;
    case 'modclo':
      enterModclo(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const intro_character_custom: LocationDef = {
  name: 'intro_character_custom',
  title: 'shop_allure',
  region: 'other',
  description: ['If you want to set your skills and attributes to a certain number, use the cheat menu to do it, the options to do it here were removed.'],
  enter: enter,
};
