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
      if (((s as any).soc_grup ?? 0) === 'gopnik') {
        (s as any).trait_vars['academic_exp'] = (-20);
      }
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
    (s as any).money = 0;
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
    if (((s as any).menu_name ?? 0) === 'allure') {
      scene.text('<center><b>shop_allure</b></center>');
      scene.img('images/locations/city/residential/lake/allure/shop.jpg');
      scene.text('This shop has the feel of a summer at the beach, which you\'d expect seeing as it sells swimwear.');
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
    } else {
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
        if (((s as any).menu_name ?? 0) === 'danilovich') {
          scene.text('<center><b>Danilovich sporting goods</b></center>');
          scene.img('images/locations/city/citycenter/mall/sportshop/sportshop.jpg');
          scene.text('As soon as you enter, a high energy song with a thumping baseline fills your eardrums, making you feel pumped and awake. The store is sleek and professional, the walls and floors advertising all different kinds of sporting equipment and attire. The room is filled with beautifully fit people shopping, their bodies varying from big and muscular to lean and trim. If they don\'t inspire you to want to work out, the posters advertising past and present famous athletes are motivating as hell.');
          qspCall(s, 'themes', 'indoors');
          qspCall(s, 'item_cart', 'shopping_aisle', 'sports');
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
        } else {
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
            if (((s as any).menu_name ?? 0) === 'fancy_pancy') {
              scene.text('<center><b>Fancy Pancy</b></center>');
              scene.img('images/locations/pushkin/fancypancy/shop.jpg');
              scene.text('This small boutique shop looks more like a dressing room at the burlesque club nearby. Satin, leather, ruffles and glamour make it clear this is not a place to buy a practical outfit. It is the only place to buy outfits suitable for the burlesque club or perhaps spice up things in the bedroom.');
              scene.text('The boutique sells designer winter coats, burlesque clothing, beautiful shoes and exquisite handbags.');
              scene.actions([
                { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = ''
  }, goto: ['intro_character_custom', 'modclo'] },
                { label: 'View clothing', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_custom', 'modclo_loop', 'clothing', 'fan...
  } },
              ]);
            } else {
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
                if (((s as any).menu_name ?? 0) === 'flamingos') {
                  scene.text('<center><b>Flamingo\'s</b></center>');
                  scene.img('images/locations/city/island/flamingos/shop.jpg');
                  scene.text('Flamingos is trendy and modern while still keeping the prices low enough for the large student population on the Island. It mimics the latest fashions for young adults but cuts costs on material and manufacturing. This suits the clients who are likely to grow bored of an outfit before it falls apart and that\'s why it\'s always busy.');
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
                } else {
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
                    if (((s as any).menu_name ?? 0) === 'lusso') {
                      scene.text('<center><b>Lusso Intimo</b></center>');
                      scene.img('images/locations/city/citycenter/mall/lusso/lusso.jpg');
                      scene.text('The décor is bright and modern the flowers are real and the dressers made with expensive woods.');
                      scene.text('This is clearly a high end underwear shop. Just knowing you are wearing these will make you stand out more and they will feel so nice you might never want to go back to wearing the cheap ill fitting underwear you used to have to put up with. That is of course assuming you can afford the prices here.');
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
                    } else {
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
                        if (((s as any).menu_name ?? 0) === 'moncheri') {
                          scene.text('<center><b>Mon Chéri</b></center>');
                          scene.img('images/locations/city/citycenter/mall/boutique/butik.jpg');
                          scene.text('You\'re inside the boutique only a few seconds before a tall, slender brunette woman saunters up to you. Everything about her is poised and perfect, from the beautiful silver dress she\'s wearing to her unblemished skin and pearly white teeth. "Welcome to Mon Chéri, dear. We sell only the most beautifully luxurious items here. Come, take a look! You won\'t be disappointed," she smiles as she ushers you further inside with a small flourish. Everything in the boutique is high-end, definitely not for the average shopper, but the items on display are simply stunning.');
                          scene.text('The boutique sells designer winter coats, formal clothing, beautiful shoes and exquisite handbags.');
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
                        } else {
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
                            if (((s as any).menu_name ?? 0) === 'dolls') {
                              scene.text('<center><b>Patch Work Dolls</b></center>');
                              scene.img('images/locations/city/island/dolls/dollsshop.jpg');
                              scene.text('The store has a small front on a side street, but one glance is all you need to tell this is not your average clothing store. Inside the store, shelves and racks of alternative clothes are crammed into every available space - anybody setting out to find an inch of wall would have their work cut out for them. The checkout counter is near the entrance.');
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
                            } else {
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
                                if (((s as any).menu_name ?? 0) === 'scandalicious') {
                                  scene.text('<center><b>Scandalicious</b></center>');
                                  scene.img('images/locations/city/citycenter/mall/scandalicious/shop.jpg');
                                  scene.text('This store is cheap and tacky. The clothing lives up to the name though and you assume they saved a lot of money on fabric.');
                                  scene.text('It\'s not somewhere you\'d go with your Mom or let her know you\'d even looked in the window but if you want to show off your body there is nowhere better to shop. The staff aren\'t judging anyone so it feels relaxed but there is still a mix of those hiding their embarrassment and those exuding confidence.');
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
                                } else {
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
                                    if (((s as any).menu_name ?? 0) === 'tsar_bomba') {
                                      scene.text('<center><b>Tsar Bomba</b></center>');
                                      scene.img('images/locations/pushkin/bomba/shop.jpg');
                                      scene.text('Tsar Bomba, a small clothing shop in the Okhlopkov Square. The shop is unique and used to be very cool with punk fashion. These days it is much more generic and alternative, it could easily be mistaken for an alt. fashion chain store.');
                                      scene.text('Simply put this place is very cool and most of the clothes are strange and wonderful.');
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
                                    } else {
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
                                        if (((s as any).menu_name ?? 0) === 'pirsingsalon_tattoos') {
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
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterModcloLoop(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    (s as any).intro_custom_shop['slot'] = ((s as any).locArgs?.[1] ?? 0);
    qspCall(s, 'core_library', 'setloc', 'intro_character_custom', 'modclo_loop');
    if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'clothing') {
      qspCall(s, 'clothing', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
    } else {
      if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'bras') {
        qspCall(s, 'bras', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
      } else {
        if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'panties') {
          qspCall(s, 'panties', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
        } else {
          if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'bodysuits') {
            qspCall(s, 'underwear_bodysuits', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
          } else {
            if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'coats') {
              qspCall(s, 'coats', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
            } else {
              if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'purses') {
                qspCall(s, 'purses', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
              } else {
                if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'shoes') {
                  qspCall(s, 'shoes', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
                } else {
                  if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'tattoos') {
                    qspCall(s, 'tattoo_management', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
                  } else {
                    if (((s as any).intro_custom_shop ?? 0)?.['slot'] === 'piercings') {
                      qspCall(s, 'piercing_management', 'set_shop_display_exceptions', ((s as any).locArgs?.[2] ?? 0));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    qspCall(s, 'shop_utils', 'init', 'start', ((s as any).locArgs?.[1] ?? 0), 'cheat');
    qspCall(s, 'shop_utils', 'init', 'add_type', ((s as any).locArgs?.[2] ?? 0));
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', '', 'display_' + qspUntranslated(s, "intro_custom_shop['slot']>", { location: "intro_character_custom" }) + '_grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['intro_character_custom', 'modclo'] },
  ]);
  scene.build();
}

function enterModapp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] === 0) {
    (s as any).pcs_mass['bust_gen'] = 12;
  }
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] === 0) {
    (s as any).pcs_mass['butt_gen'] = 22;
  }
  scene.text('Your body weight may vary between characters as breast and butt size will be taken into account.');
  scene.text('Choose base genetic breast size: (this is the genetic disposition and not the actual size at game start)');
  // TODO-QSP: nl
  (s as any).temp_idx = 0;
  // TODO-QSP: :modapp_bust_loop
  (s as any).temp_val = ((s as any).temp_idx ?? 0) * 5 + 2;
  if ((!((s as any).temp_idx ?? 0))) {
  } else {
    if (((s as any).temp_idx ?? 0) === 1) {
    } else {
      if (((s as any).temp_idx ?? 0) === 2) {
      } else {
        if (((s as any).temp_idx ?? 0) === 3) {
        } else {
          if (((s as any).temp_idx ?? 0) === 4) {
          } else {
            if (((s as any).temp_idx ?? 0) === 5) {
            } else {
              if (((s as any).temp_idx ?? 0) === 6) {
              } else {
                if (((s as any).temp_idx ?? 0) === 7) {
                } else {
                  if (((s as any).temp_idx ?? 0) === 8) {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] === ((s as any).temp_val ?? 0)) {
    // TODO-QSP: dynamic text: <<$temp_label>> - Currently set
    scene.text(`${((s as any).temp_label ?? 0)} - Currently set`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec:pcs_mass['bust_gen'] = <<temp_val>> & gt 'intro_character_custom',...
    scene.text(`<a href="exec:pcs_mass['bust_gen'] = ${((s as any).temp_val ?? 0)} & gt 'intro_character_custom', 'modapp'">${((s as any).temp_label ?? 0)}</a>`);
  }
  (s as any).temp_idx = ((s as any).temp_idx ?? 0) + (1);
  if (((s as any).temp_idx ?? 0) < 9) {
    // TODO-QSP: jump 'modapp_bust_loop'
  }
  scene.text('Choose base genetic butt size: (this is the genetic disposition and not the actual size at game start)');
  (s as any).temp_idx = 0;
  // TODO-QSP: :modapp_butt_loop
  (s as any).temp_val = ((s as any).temp_idx ?? 0) * 5 + 2;
  if ((!((s as any).temp_idx ?? 0))) {
  } else {
    if (((s as any).temp_idx ?? 0) === 1) {
    } else {
      if (((s as any).temp_idx ?? 0) === 2) {
      } else {
        if (((s as any).temp_idx ?? 0) === 3) {
        } else {
          if (((s as any).temp_idx ?? 0) === 4) {
          } else {
            if (((s as any).temp_idx ?? 0) === 5) {
            } else {
              if (((s as any).temp_idx ?? 0) === 6) {
              } else {
                if (((s as any).temp_idx ?? 0) === 7) {
                } else {
                  if (((s as any).temp_idx ?? 0) === 8) {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] === ((s as any).temp_val ?? 0)) {
    // TODO-QSP: dynamic text: <<$temp_label>> - Currently set
    scene.text(`${((s as any).temp_label ?? 0)} - Currently set`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec:pcs_mass['butt_gen'] = <<temp_val>> & gt 'intro_character_custom',...
    scene.text(`<a href="exec:pcs_mass['butt_gen'] = ${((s as any).temp_val ?? 0)} & gt 'intro_character_custom', 'modapp'">${((s as any).temp_label ?? 0)}</a>`);
  }
  (s as any).temp_idx = ((s as any).temp_idx ?? 0) + (1);
  if (((s as any).temp_idx ?? 0) < 9) {
    // TODO-QSP: jump 'modapp_butt_loop'
  }
  scene.actions([
    { label: 'Body fat (<<pcs_mass[\'body\']>>/200)', handler: (st: GameState) => {
    qspCall(st, 'intro_character_custom', 'setbodymass');
    // TODO-QSP: pcs_mass['body'] = nstat
  }, goto: ['intro_character_custom', 'modapp'] },
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterSetgenbsize(s: GameState, scene: SceneBuilder): void {
  (s as any).nstat = ((s as any).pcs_mass ?? 0)?.['bust_gen'];
  (s as any).nstat = 0;
  if (((s as any).nstat ?? 0) > 97) {
    qspCall(s, 'intro_character_custom', 'setval2');
  } else {
    if (((s as any).nstat ?? 0) < 2) {
      qspCall(s, 'intro_character_custom', 'setval2');
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 2) {
        qspCall(s, 'intro_character_custom', 'setval2');
      } else {
        return;
      }
    }
  }
  scene.build();
}

function enterModite(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Fake passport (<<fakepassport>>/1)', handler: (st: GameState) => {
    if ((!((s as any).fakepassport ?? 0))) {
      (s as any).fakepassport = 1;
    } else {
      (s as any).fakepassport = 0;
    }
  }, goto: ['intro_character_custom', 'modite'] },
    { label: 'Computer (<<mc_inventory[\'tech_computer\']>>/1)', handler: (st: GameState) => {
    if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 0) {
      (s as any).mc_inventory['tech_computer'] = 1;
    } else {
      (s as any).mc_inventory['tech_computer'] = 0;
    }
  }, goto: ['intro_character_custom', 'modite'] },
    { label: 'Cosmetic items', goto: ['intro_character_custom', 'modite_cos'] },
    { label: 'Pharmacy items', goto: ['intro_character_custom', 'modite_pha'] },
    { label: 'Miscellaneous items', goto: ['intro_character_custom', 'modite_mis'] },
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterModrelSetup2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> < 0: <<$ARGS[1]>> = 0'
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> > 100: <<$ARGS[1]>> = 100'
  // TODO-QSP: dynamic 'x = <<$ARGS[1]>>'
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td><<$ARGS[2]>> (<<x>>/100)</td><td><a href...
  scene.build();
}

function enterModrelSetup3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> < 50: <<$ARGS[1]>> = 50'
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> > 200: <<$ARGS[1]>> = 200'
  // TODO-QSP: dynamic 'x = <<$ARGS[1]>>'
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td><<$ARGS[2]>> (<<x>>/200)</td><td><a href...
  scene.build();
}

function enterModrelSetup4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> < 0: <<$ARGS[1]>> = 0'
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> > 100: <<$ARGS[1]>> = 100'
  // TODO-QSP: dynamic 'x = 100-<<$ARGS[1]>>'
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td><<$ARGS[2]>> (<<x>>/100)</td><td><a href...
  scene.build();
}

function enterModiteCos(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Cosmetic items</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'cosmetics\']', 'Cosmetics');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'razor\']', 'Razors (number of shaves)');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'suncream\']', 'Sunblock');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'scrunchies\']', 'Hair scrunchies');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'kirbygrips\']', 'Hair pins');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'shampoo\']', 'Shampoo');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modite'] },
  ]);
  scene.build();
}

function enterModitePha(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pharmaceutical items</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'equipped_condoms\']', 'Condoms');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'pregnancy_test\']', 'Pregnancy tests');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'contraceptive_pill\']', 'Birth control pills');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'antibiotics\']', 'Antibiotics');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'vitamins\']', 'Vitamins');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'painkillers\']', 'Painkillers');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'chafing_cream\']', 'Ointment for chafing');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'lubricant\']', 'Lubricants');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'lipbalm\']', 'Lip balms');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'weight_loss_pill\']', 'Weight loss pills');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'tampons\']', 'Tampons');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'sanitary_pads\']', 'Sanitary napkins');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modite'] },
  ]);
  scene.build();
}

function enterModiteMis(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Misc items</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'cigarettes\']', 'Cigarettes');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'dur', 'Cocaine');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'mc_inventory[\'food_biscuits\']', 'Tea Biscuits');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modite'] },
  ]);
  scene.build();
}

function enterModpur(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    (s as any).currentpursenumber = qspUntranslated(s, "ARGS[2]", { location: "intro_character_custom" });
  }
  if (((s as any).currentpursetype ?? 0) === ''  ||  ((s as any).currentpursetype ?? 0) === 'none') {
    scene.text('You do not own a purse.');
  } else {
    (s as any).bag = 1;
    scene.img(`images/pc/items/${((s as any).currentpursetype ?? 0)}/purses/${((s as any).currentpursenumber ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: Your current purse is <<$currentpursetype>>_<<currentpursenumber>>.
    scene.text(`Your current purse is ${((s as any).currentpursetype ?? 0)}_${((s as any).currentpursenumber ?? 0)}.`);
  }
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
    { label: 'Get G&M', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/gm.png');
    (s as any).i = 1;
    // TODO-QSP: :loopgmpurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''gm'', <<i>>"><img height="300" src="i...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 20) {
      // TODO-QSP: jump 'loopgmpurses'
    }
  } },
    { label: 'Get Danilovich', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/sports.png');
    (s as any).i = 1;
    // TODO-QSP: :loopdanilovichpurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''danilovich'', <<i>>"><img height="300...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 60) {
      // TODO-QSP: jump 'loopdanilovichpurses'
    }
  } },
    { label: 'Get Dolls', handler: (st: GameState) => {
    scene.img('images/locations/city/island/dolls/shop_name.png');
    (s as any).i = 1;
    // TODO-QSP: :loopdollspurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''dolls'', <<i>>"><img height="300" src...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 40) {
      // TODO-QSP: jump 'loopdollspurses'
    }
  } },
    { label: 'Get Bomba', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/bomba/shop_name.png');
    (s as any).i = 1;
    // TODO-QSP: :loopbombapurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''bomba'', <<i>>"><img height="300" src...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 20) {
      // TODO-QSP: jump 'loopbombapurses'
    }
  } },
    { label: 'Get Fashionista', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista.png');
    (s as any).i = 1;
    // TODO-QSP: :loopfashionistapurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''fashionista'', <<i>>"><img height="30...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 40) {
      // TODO-QSP: jump 'loopfashionistapurses'
    }
  } },
    { label: 'Get Coco', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/coco/shop_name.png');
    (s as any).i = 1;
    // TODO-QSP: :loopcocopurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''coco'', <<i>>"><img height="300" src=...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 60) {
      // TODO-QSP: jump 'loopcocopurses'
    }
  } },
    { label: 'Get Pussy_Cats', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pussycat.png');
    (s as any).i = 1;
    // TODO-QSP: :loopkatspurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''cats'', <<i>>"><img height="300" src=...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 20) {
      // TODO-QSP: jump 'loopkatspurses'
    }
  } },
    { label: 'Get Flamingos', handler: (st: GameState) => {
    scene.img('images/locations/city/island/flamingos/shop_name.png');
    (s as any).i = 1;
    // TODO-QSP: :loopflamingospurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''flamingos'', <<i>>"><img height="300"...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 20) {
      // TODO-QSP: jump 'loopflamingospurses'
    }
  } },
    { label: 'Get Mon Chéri', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/moncheri.png');
    (s as any).i = 1;
    // TODO-QSP: :loopmoncheripurses
    // TODO-QSP: *p '<a href="exec:gt ''intro_character_custom'', ''modpur'', ''moncheri'', <<i>>"><img height="300" ...
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 40) {
      // TODO-QSP: jump 'loopmoncheripurses'
    }
  } },
    { label: 'I do not want a purse', handler: (st: GameState) => {
    (s as any).bag = 0;
    (s as any).currentpursenumber = 0;
  }, goto: ['intro_character_custom', 'modpur'] },
  ]);
  scene.build();
}

function enterSetval(s: GameState, scene: SceneBuilder): void {
  (s as any).nstat = 0;
  (s as any).nstat = 0;
  if (((s as any).nstat ?? 0) > 150) {
    qspCall(s, 'intro_character_custom', 'setval');
  } else {
    if (((s as any).nstat ?? 0) < 10) {
      qspCall(s, 'intro_character_custom', 'setval');
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 0) {
        qspCall(s, 'intro_character_custom', 'setval');
      } else {
        qspCall(s, 'stat', '');
        return;
      }
    }
  }
  scene.build();
}

function enterSetval2(s: GameState, scene: SceneBuilder): void {
  (s as any).nstat = 0;
  (s as any).nstat = 0;
  if (((s as any).nstat ?? 0) > 100) {
    qspCall(s, 'intro_character_custom', 'setval2');
  } else {
    if (((s as any).nstat ?? 0) < -100) {
      qspCall(s, 'intro_character_custom', 'setval2');
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 0) {
        qspCall(s, 'intro_character_custom', 'setval2');
      } else {
        return;
      }
    }
  }
  scene.build();
}

function enterSetval3(s: GameState, scene: SceneBuilder): void {
  (s as any).nstat = 0;
  (s as any).nstat = 0;
  if (((s as any).nstat ?? 0) > 100) {
    qspCall(s, 'intro_character_custom', 'setval3');
  } else {
    if (((s as any).nstat ?? 0) < 0) {
      qspCall(s, 'intro_character_custom', 'setval3');
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 0) {
        qspCall(s, 'intro_character_custom', 'setval3');
      } else {
        return;
      }
    }
  }
  scene.build();
}

function enterSetbodymass(s: GameState, scene: SceneBuilder): void {
  scene.text('Your body weight may vary between characters as breast and butt size will be taken into account.');
  scene.text('15 = underweight, slight, wiry');
  scene.text('30 = slender, skinny, lean');
  scene.text('45 = healthy, toned, ripped');
  scene.text('60 = cute, muscular');
  scene.text('75 = chubby, curvy, herculean');
  scene.text('90 = overweight, stocky');
  scene.text('105 = fat, heavy set');
  (s as any).nstat = ((s as any).pcs_mass ?? 0)?.['body'];
  (s as any).nstat = 0;
  if (((s as any).nstat ?? 0) > 150) {
    qspCall(s, 'intro_character_custom', 'setbodymass');
  } else {
    if (((s as any).nstat ?? 0) < 10) {
      qspCall(s, 'intro_character_custom', 'setbodymass');
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 0) {
        qspCall(s, 'intro_character_custom', 'setbodymass');
      } else {
        return;
      }
    }
  }
  scene.build();
}

function enterModatt(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Attributes</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup4', 'pcs_inhib', 'Inhibition');
  qspCall(s, 'intro_character_custom', 'modrel_setup3', 'willpowermax', 'Willpower');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_stren', 'Strength');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_agil', 'Agility');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_vital', 'Endurance');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_intel', 'Intelligence');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_sprt', 'Spirit');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_react', 'Reaction');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_chrsm', 'Charisma');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_prcptn', 'Perception');
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_magik', 'Magic');
  }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterModskl(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Mental skills', goto: ['intro_character_custom', 'modskl_men'] },
    { label: 'Sport skills', goto: ['intro_character_custom', 'modskl_spo'] },
    { label: 'Combat skills', goto: ['intro_character_custom', 'modskl_com'] },
    { label: 'Beauty skills', goto: ['intro_character_custom', 'modskl_bea'] },
    { label: 'Artistic skills', goto: ['intro_character_custom', 'modskl_art'] },
    { label: 'Job skills', goto: ['intro_character_custom', 'modskl_job'] },
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterModsklMen(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Mental Skills</b></center>');
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_splcstng', 'Spell Casting');
  }
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_humint', 'People skills');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_persuas', 'Persuasion');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_observ', 'Observation');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modskl'] },
  ]);
  scene.build();
}

function enterModsklSpo(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Sport Skills</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_run', 'Running');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_vball', 'Volleyball');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_ftbll', 'Football');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_bkball', 'Basketball');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_wrstlng', 'Wrestling');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_icesktng', 'Ice Skating');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_gaming', 'Gaming');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_chess', 'Chess');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_pool', 'Pool');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modskl'] },
  ]);
  scene.build();
}

function enterModsklCom(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Combat Skills</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_jab', 'Jabs');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_punch', 'Power Strikes');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_kick', 'Kicks');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_def', 'Defence');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_shoot', 'Marksmanship');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_bushcraft', 'Bushcraft');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modskl'] },
  ]);
  scene.build();
}

function enterModsklBea(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Beauty skills</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_makupskl', 'Makeup Skills');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_danc', 'Modern Dancing');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_dancero', 'Erotic Dancing');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_dancpol', 'Pole Dancing');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_cheer', 'Cheerleading');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_heels', 'Heels');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modskl'] },
  ]);
  scene.build();
}

function enterModsklArt(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Artistic Skills</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_vokal', 'Singing');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_instrmusic', 'Instrumental Music');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_photoskl', 'Photography');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_artskls', 'Artistic Skills');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_perform', 'Performance');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_musicprod', 'Music Production');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modskl'] },
  ]);
  scene.build();
}

function enterModsklJob(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Job Skills</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_compskl', 'Computer Skills');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_comphckng', 'Hacking');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_hndiwrk', 'Handy-work');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_sewng', 'Tailoring');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_servng', 'Serving');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_medcn', 'Medicine');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_cleaning', 'Cleaning');
  qspCall(s, 'intro_character_custom', 'modrel_setup2', 'pcs_mdlng', 'Modelling');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modskl'] },
  ]);
  scene.build();
}

function enterBirthday(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'core_birthday'] }]);
  scene.build();
}

function enterModgrup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Your current social group is <<$soc_grup>>.
  scene.text(`Your current social group is ${((s as any).soc_grup ?? 0)}.`);
  scene.actions([
    { label: 'Nerd', handler: (st: GameState) => {
    (s as any).start_type['group'] = 'nerd';
    (s as any).grupTipe = 3;
    (s as any).grupvalue[1] = 200;
    (s as any).grupvalue[2] = 100;
    (s as any).grupvalue[3] = 800;
    (s as any).grupvalue[4] = 100;
    (s as any).grupvalue[6] = 600;
  }, goto: ['intro_character_custom', 'modgrup'] },
    { label: 'Jock', handler: (st: GameState) => {
    (s as any).start_type['group'] = 'jock';
    (s as any).grupTipe = 2;
    (s as any).grupvalue[1] = 400;
    (s as any).grupvalue[2] = 800;
    (s as any).grupvalue[3] = 100;
    (s as any).grupvalue[4] = 200;
    (s as any).grupvalue[6] = 400;
  }, goto: ['intro_character_custom', 'modgrup'] },
    { label: 'Popular', handler: (st: GameState) => {
    (s as any).start_type['group'] = 'cool';
    (s as any).grupTipe = 1;
    (s as any).grupvalue[1] = 800;
    (s as any).grupvalue[2] = 400;
    (s as any).grupvalue[3] = 200;
    (s as any).grupvalue[4] = 100;
    (s as any).grupvalue[6] = 400;
  }, goto: ['intro_character_custom', 'modgrup'] },
    { label: 'Gopnik', handler: (st: GameState) => {
    (s as any).start_type['group'] = 'gopnik';
    (s as any).grupTipe = 4;
    (s as any).grupvalue[1] = 200;
    (s as any).grupvalue[2] = 300;
    (s as any).grupvalue[3] = 100;
    (s as any).grupvalue[4] = 800;
    (s as any).grupvalue[6] = 100;
  }, goto: ['intro_character_custom', 'modgrup'] },
    { label: 'Outcast', handler: (st: GameState) => {
    (s as any).start_type['group'] = 'outcast';
    (s as any).grupTipe = 5;
    (s as any).grupvalue[1] = 200;
    (s as any).grupvalue[2] = 200;
    (s as any).grupvalue[3] = 200;
    (s as any).grupvalue[4] = 200;
    (s as any).grupvalue[6] = 200;
  }, goto: ['intro_character_custom', 'modgrup'] },
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterNone(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_functions', 'reset_all');
  (s as any).grupTipe = 5;
  scene.build();
}

function enterModrel(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Family', goto: ['intro_character_custom', 'modrel_fam'] },
    { label: 'Popular Kids', goto: ['intro_character_custom', 'modrel_pop'] },
    { label: 'Athletes', goto: ['intro_character_custom', 'modrel_ath'] },
    { label: 'Nerds', goto: ['intro_character_custom', 'modrel_ner'] },
    { label: 'Gopniks', goto: ['intro_character_custom', 'modrel_gop'] },
    { label: 'Outcasts/Loners', goto: ['intro_character_custom', 'modrel_out'] },
    { label: 'Teachers/Coaches', goto: ['intro_character_custom', 'modrel_tea'] },
    { label: 'Others', goto: ['intro_character_custom', 'modrel_oth'] },
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterModrelFam(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A28'] < 0) {
    (s as any).npc_rel['A28'] = 0;
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] < 0) {
    (s as any).npc_rel['A29'] = 0;
  }
  if (((s as any).npc_rel ?? 0)?.['A33'] < 0) {
    (s as any).npc_rel['A33'] = 0;
  }
  if (((s as any).npc_rel ?? 0)?.['A34'] < 0) {
    (s as any).npc_rel['A34'] = 0;
  }
  if (((s as any).npc_rel ?? 0)?.['A28'] > 100) {
    (s as any).npc_rel['A28'] = 100;
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] > 100) {
    (s as any).npc_rel['A29'] = 100;
  }
  if (((s as any).npc_rel ?? 0)?.['A33'] > 100) {
    (s as any).npc_rel['A33'] = 100;
  }
  if (((s as any).npc_rel ?? 0)?.['A34'] > 100) {
    (s as any).npc_rel['A34'] = 100;
  }
  scene.text('<center><b>Family relationship levels</b></center>');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: dynamic text: <tr bgcolor=<<$theme['table_bg']>>><td>Stepfather: <<npc_rel['A28']>></td><td><a...
  scene.text(`<tr bgcolor=${((s as any).theme ?? 0)?.['table_bg']}><td>Stepfather: ${((s as any).npc_rel ?? 0)?.['A28']}</td><td><a href="exec:gs 'npc_relationship', 'set', 'A28', 0 & gt 'intro_character_custom', 'modrel_fam'">zero</a></td><td bgcolor=#ff9999><a href="exec:gs 'npc_relationship', 'modify_exact', 'A28', -10 & gt 'intro_character_custom', 'modrel_fam'">minus 10</a></td><td bgcolor=#ff9999><a href="exec:gs 'npc_relationship', 'modify_exact', 'A28', -5 & gt 'intro_character_custom', 'modrel_fam'">minus 5</a></td><td bgcolor=#99ff99><a href="exec:gs 'npc_relationship', 'modify_exact', 'A28', 5 & gt 'intro_character_custom', 'modrel_fam'">plus 5</a></td><td bgcolor=#99ff99><a href="exec:gs 'npc_relationship', 'modify_exact', 'A28', 10 & gt 'intro_character_custom', 'modrel_fam'">plus 10</a></td><td><a href="exec:gs 'npc_relationship', 'set', 'A28', 100 & gt 'intro_character_custom', 'modrel_fam'">100</a></td>`);
  // TODO-QSP: dynamic text: <tr bgcolor=<<$theme['table_bg']>>><td>Mother: <<npc_rel['A29']>></td><td><a hre...
  scene.text(`<tr bgcolor=${((s as any).theme ?? 0)?.['table_bg']}><td>Mother: ${((s as any).npc_rel ?? 0)?.['A29']}</td><td><a href="exec:gs 'npc_relationship', 'set', 'A29', 0 & gt 'intro_character_custom', 'modrel_fam'">zero</a></td><td bgcolor=#ff9999><a href="exec:gs 'npc_relationship', 'modify_exact', 'A29', -10 & gt 'intro_character_custom', 'modrel_fam'">minus 10</a></td><td bgcolor=#ff9999><a href="exec:gs 'npc_relationship', 'modify_exact', 'A29', -5 & gt 'intro_character_custom', 'modrel_fam'">minus 5</a></td><td bgcolor=#99ff99><a href="exec:gs 'npc_relationship', 'modify_exact', 'A29', 5 & gt 'intro_character_custom', 'modrel_fam'">plus 5</a></td><td bgcolor=#99ff99><a href="exec:gs 'npc_relationship', 'modify_exact', 'A29', 10 & gt 'intro_character_custom', 'modrel_fam'">plus 10</a></td><td><a href="exec:gs 'npc_relationship', 'set', 'A29', 100 & gt 'intro_character_custom', 'modrel_fam'">100</a></td>`);
  // TODO-QSP: dynamic text: <tr bgcolor=<<$theme['table_bg']>>><td>Sister: <<npc_rel['A33']>></td><td><a hre...
  scene.text(`<tr bgcolor=${((s as any).theme ?? 0)?.['table_bg']}><td>Sister: ${((s as any).npc_rel ?? 0)?.['A33']}</td><td><a href="exec:gs 'npc_relationship', 'set', 'A33', 0 & gt 'intro_character_custom', 'modrel_fam'">zero</a></td><td bgcolor=#ff9999><a href="exec:gs 'npc_relationship', 'modify_exact', 'A33', -10 & gt 'intro_character_custom', 'modrel_fam'">minus 10</a></td><td bgcolor=#ff9999><a href="exec:gs 'npc_relationship', 'modify_exact', 'A33', -5 & gt 'intro_character_custom', 'modrel_fam'">minus 5</a></td><td bgcolor=#99ff99><a href="exec:gs 'npc_relationship', 'modify_exact', 'A33', 5 & gt 'intro_character_custom', 'modrel_fam'">plus 5</a></td><td bgcolor=#99ff99><a href="exec:gs 'npc_relationship', 'modify_exact', 'A33', 10 & gt 'intro_character_custom', 'modrel_fam'">plus 10</a></td><td><a href="exec:gs 'npc_relationship', 'set', 'A33', 100 & gt 'intro_character_custom', 'modrel_fam'">100</a></td>`);
  // TODO-QSP: dynamic text: <tr bgcolor=<<$theme['table_bg']>>><td>Brother: <<npc_rel['A34']>></td><td><a hr...
  scene.text(`<tr bgcolor=${((s as any).theme ?? 0)?.['table_bg']}><td>Brother: ${((s as any).npc_rel ?? 0)?.['A34']}</td><td><a href="exec:gs 'npc_relationship', 'set', 'A34', 0 & gt 'intro_character_custom', 'modrel_fam'">zero</a></td><td bgcolor=#ff9999><a href="exec:gs 'npc_relationship', 'modify_exact', 'A34', -10 & gt 'intro_character_custom', 'modrel_fam'">minus 10</a></td><td bgcolor=#ff9999><a href="exec:gs 'npc_relationship', 'modify_exact', 'A34', -5 & gt 'intro_character_custom', 'modrel_fam'">minus 5</a></td><td bgcolor=#99ff99><a href="exec:gs 'npc_relationship', 'modify_exact', 'A34', 5 & gt 'intro_character_custom', 'modrel_fam'">plus 5</a></td><td bgcolor=#99ff99><a href="exec:gs 'npc_relationship', 'modify_exact', 'A34', 10 & gt 'intro_character_custom', 'modrel_fam'">plus 10</a></td><td><a href="exec:gs 'npc_relationship', 'set', 'A34', 100 & gt 'intro_character_custom', 'modrel_fam'">100</a></td>`);
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] < 0) {
    (s as any).npc_rel['' + String((s as any).$ARGS[1] || '') + ''] = 0;
  }
  if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 100) {
    (s as any).npc_rel['' + String((s as any).$ARGS[1] || '') + ''] = 100;
  }
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td><<$npc_firstname[''<<$ARGS[1]>>'']>> <<$...
  scene.build();
}

function enterModrelPop(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Popular kids relationship levels</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A1');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A4');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A14');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A15');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A17');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A22');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A146');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A147');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A148');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A25');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A139');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A140');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all girls in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelAth(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Jocks relationship levels</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A3');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A5');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A8');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A13');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A18');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A19');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A23');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A149');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A150');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A141');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all girls in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelNer(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Nerds relationship levels</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A2');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A6');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A12');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A16');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A151');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A152');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A153');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A142');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all girls in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelGop(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Gopnik kids relationship levels</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A9');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A10');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A11');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A20');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A21');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A24');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A154');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A155');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A156');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A157');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A158');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A143');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A144');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A145');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all girls in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelOut(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Outcast kids relationship levels</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A7');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A159');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelTea(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Teacher relationship levels</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A26');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A128');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A129');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A130');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A131');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A132');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A133');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A134');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A135');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A136');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A137');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A138');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all men in th...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all women in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelOth(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Others relationship levels</b></center>');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A69');
  qspCall(s, 'intro_character_custom', 'modrel_setup', 'A112');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterPolGrupSet(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  // TODO-QSP: :pol_grup_set_loop
  if (((s as any).npc_gender ?? 0)['A' + ((s as any).r ?? 0)] === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).r ?? 0)] === ((s as any).locArgs?.[2] ?? 0)) {
    (s as any).npc_rel['A' + String((s as any).r || '') + ''] = qspUntranslated(s, "ARGS[3]", { location: "intro_character_custom" });
  }
  (s as any).r = ((s as any).r ?? 0) + (1);
  if (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'pol_grup_set_loop'
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
    case 'modclo_loop':
      enterModcloLoop(s, scene);
      break;
    case 'modapp':
      enterModapp(s, scene);
      break;
    case 'setgenbsize':
      enterSetgenbsize(s, scene);
      break;
    case 'modite':
      enterModite(s, scene);
      break;
    case 'modrel_setup2':
      enterModrelSetup2(s, scene);
      break;
    case 'modrel_setup3':
      enterModrelSetup3(s, scene);
      break;
    case 'modrel_setup4':
      enterModrelSetup4(s, scene);
      break;
    case 'modite_cos':
      enterModiteCos(s, scene);
      break;
    case 'modite_pha':
      enterModitePha(s, scene);
      break;
    case 'modite_mis':
      enterModiteMis(s, scene);
      break;
    case 'modpur':
      enterModpur(s, scene);
      break;
    case 'setval':
      enterSetval(s, scene);
      break;
    case 'setval2':
      enterSetval2(s, scene);
      break;
    case 'setval3':
      enterSetval3(s, scene);
      break;
    case 'setbodymass':
      enterSetbodymass(s, scene);
      break;
    case 'modatt':
      enterModatt(s, scene);
      break;
    case 'modskl':
      enterModskl(s, scene);
      break;
    case 'modskl_men':
      enterModsklMen(s, scene);
      break;
    case 'modskl_spo':
      enterModsklSpo(s, scene);
      break;
    case 'modskl_com':
      enterModsklCom(s, scene);
      break;
    case 'modskl_bea':
      enterModsklBea(s, scene);
      break;
    case 'modskl_art':
      enterModsklArt(s, scene);
      break;
    case 'modskl_job':
      enterModsklJob(s, scene);
      break;
    case 'birthday':
      enterBirthday(s, scene);
      break;
    case 'modgrup':
      enterModgrup(s, scene);
      break;
    case 'none':
      enterNone(s, scene);
      break;
    case 'modrel':
      enterModrel(s, scene);
      break;
    case 'modrel_fam':
      enterModrelFam(s, scene);
      break;
    case 'modrel_setup':
      enterModrelSetup(s, scene);
      break;
    case 'modrel_pop':
      enterModrelPop(s, scene);
      break;
    case 'modrel_ath':
      enterModrelAth(s, scene);
      break;
    case 'modrel_ner':
      enterModrelNer(s, scene);
      break;
    case 'modrel_gop':
      enterModrelGop(s, scene);
      break;
    case 'modrel_out':
      enterModrelOut(s, scene);
      break;
    case 'modrel_tea':
      enterModrelTea(s, scene);
      break;
    case 'modrel_oth':
      enterModrelOth(s, scene);
      break;
    case 'pol_grup_set':
      enterPolGrupSet(s, scene);
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
