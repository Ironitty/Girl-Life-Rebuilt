import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('If you want to set your skills and attributes to a certain number, use the cheat menu to do it, the options to do it here were removed.');
  if (((s as any).start_type ?? 0)?.['group']  === '') {
    ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'custom';
  }
  if (((s as any).start_type ?? 0)?.['cat']  === '') {
    ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'custom';
  }
  if (((s as any).clothingworntype ?? 0) === '') {
    qspCall(s, 'outfit', 'clear_all');
  }
  ((s as any).intro_custom = (s as any).intro_custom ?? {})['money'] = (-1);
  ((s as any).intro_custom = (s as any).intro_custom ?? {})['loc'] = '';
  ((s as any).intro_custom = (s as any).intro_custom ?? {})['loc_arg'] = '';
  ((s as any).intro_custom = (s as any).intro_custom ?? {})['loc_s'] = '';
  ((s as any).intro_custom = (s as any).intro_custom ?? {})['args_s'] = '';
  ((s as any).intro_custom = (s as any).intro_custom ?? {})['menu_loc'] = '';
  ((s as any).intro_custom = (s as any).intro_custom ?? {})['menu_arg'] = '';
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] === 0) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 22;
  }
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] === 0) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 22;
  }
  if (((s as any).soc_grup ?? 0) === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNone(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.actions([
      { label: 'Pick a social group', goto: ['intro_character_custom', 'modgrup'] },
      { label: 'Set relationships', goto: ['intro_character_custom', 'modrel'] },
      { label: 'Confirm these options', handler: (st: GameState) => {
    // TODO-QSP: dynamic 'grupvalue[<<grupTipe>>] = 600'
    if (((st as any).soc_grup ?? 0) === 'nerd') {
      ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_exp'] = 350;
      ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic'] = 2;
      ((st as any).trait_vars = (st as any).trait_vars ?? {})['nerd_learn_home'] = 5;
    } else {
      if (((st as any).soc_grup ?? 0) === 'gopnik') {
        ((st as any).trait_vars = (st as any).trait_vars ?? {})['academic_exp'] = (-20);
      }
    }
    if (((st as any).pcs_inhib ?? 0) < 10) {
      (st as any).pcs_inhib = 10;
    }
    if (((st as any).pcs_inhib ?? 0) > 50) {
      qspCall(st, 'clothing', 'wear', 'gm_school', 6);
    }
    if (((st as any).bag ?? 0) === 1) {
      qspCall(st, 'purses', 'add_item', ((st as any).currentpursetype ?? 0), ((st as any).currentpursenumber ?? 0));
      qspCall(st, 'obj_din', 'old');
    }
    qspCall(st, 'intro_functions', 'reset_school');
    if (((st as any).loc ?? 0) === 'intro_tg_teen_start') {
      dynamicGoto(st, 'prevLoc', 'prevArg');
    } else {
      qspGoto(st, 'intro_character_creation', 'appearance_hub');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Confirm these options', handler: (st: GameState) => {
    if (((st as any).bag ?? 0) === 1) {
      qspCall(st, 'purses', 'add_item', ((st as any).currentpursetype ?? 0), ((st as any).currentpursenumber ?? 0));
      qspCall(st, 'obj_din', 'old');
    }
    qspGoto(st, 'intro_character_creation', 'appearance_hub');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Set attributes', goto: ['intro_character_custom', 'modatt'] },
    { label: 'Set skills', goto: ['intro_character_custom', 'modskl'] },
    { label: 'Set appearance', goto: ['intro_character_custom', 'modapp'] },
    { label: 'Set purse', goto: ['intro_character_custom', 'modpur'] },
    { label: 'Set items', goto: ['intro_character_custom', 'modite'] },
    { label: 'Set clothes', goto: ['intro_character_custom', 'modclo_menu'] },
    { label: '', labelFn: (s: GameState) => 'Set money (' + String(qspFunc(s, 'money', 'format', ((s as any).money ?? '')) ?? '') + ')', handler: (st: GameState) => {
    (st as any).money = window.prompt("Set Cash Amount") ?? '';
    qspGoto(st, 'intro_character_custom', 'start');
  } },
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
    ((s as any).intro_custom = (s as any).intro_custom ?? {})['money'] = ((s as any).money ?? 0);
    (s as any).money = 999999999;
  }
  if (((s as any).intro_custom ?? 0)?.['loc'] === '') {
    ((s as any).intro_custom = (s as any).intro_custom ?? {})['loc'] = ((s as any).loc ?? 0);
    ((s as any).intro_custom = (s as any).intro_custom ?? {})['loc_arg'] = ((s as any).loc_arg ?? 0);
    ((s as any).intro_custom = (s as any).intro_custom ?? {})['loc_s'] = ((s as any).loc_s ?? 0);
    ((s as any).intro_custom = (s as any).intro_custom ?? {})['args_s'] = ((s as any).args_s ?? 0);
    ((s as any).intro_custom = (s as any).intro_custom ?? {})['menu_loc'] = ((s as any).menu_loc ?? 0);
    ((s as any).intro_custom = (s as any).intro_custom ?? {})['menu_arg'] = ((s as any).menu_arg ?? 0);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).money = ((st as any).intro_custom ?? 0)?.['money'];
    ((st as any).intro_custom = (st as any).intro_custom ?? {})['money'] = (-1);
    (st as any).loc = ((st as any).intro_custom ?? 0)?.['loc'];
    (st as any).loc_arg = ((st as any).intro_custom ?? 0)?.['loc_arg'];
    ((st as any).intro_custom = (st as any).intro_custom ?? {})['loc'] = '';
    ((st as any).intro_custom = (st as any).intro_custom ?? {})['loc_arg'] = '';
    (st as any).menu_loc = ((st as any).intro_custom ?? 0)?.['menu_loc'];
    (st as any).menu_arg = ((st as any).intro_custom ?? 0)?.['menu_arg'];
    ((st as any).intro_custom = (st as any).intro_custom ?? {})['menu_loc'] = '';
    ((st as any).intro_custom = (st as any).intro_custom ?? {})['menu_arg'] = '';
    (st as any).loc_s = ((st as any).intro_custom ?? 0)?.['loc_s'];
    (st as any).args_s = ((st as any).intro_custom ?? 0)?.['args_s'];
    ((st as any).intro_custom = (st as any).intro_custom ?? {})['loc_s'] = '';
    ((st as any).intro_custom = (st as any).intro_custom ?? {})['args_s'] = '';
    (st as any).intro_custom_shop_return = 0;
    qspGoto(st, 'intro_character_custom', 'start');
  } },
    { label: 'Browse', handler: (st: GameState) => {
    (st as any).menu_name = '';
    qspGoto(st, 'intro_character_custom', 'modclo');
  } },
    { label: 'Open wardrobe', handler: (st: GameState) => {
    qspGoto(st, 'wardrobe', 'main');
  } },
    { label: 'View looks', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_looks');
  } },
  ]);
  scene.build();
}

function enterModcloTattoos(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_tattoos ?? 0)?.['total'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_menu');
    scene.actions([
      { label: 'Remove all tattoos', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'full_reset');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['face'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove face tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'face');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['lip'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove lip tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'lip');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['neck'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove neck tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'neck');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['back'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove back tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'back');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove shoulder tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'shoulder');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['breast'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove breast tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'breast');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['under'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove under tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'under');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['chest'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove chest tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'chest');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['side'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove side tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'side');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove belly tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'belly');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove arm tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'arm');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove wrist tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'wrist');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['hand'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove hand tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'hand');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove leg tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'leg');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove ankle tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'ankle');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove tramp tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'tramp');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ass'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove ass tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'ass');
  } },
    ]);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
    qspGoto(s, 'intro_character_custom', 'modclo_tattoos');
    scene.actions([
      { label: 'Remove pussy tattoo', handler: (st: GameState) => {
    qspCall(st, 'tattoo_management', 'remove', 'pussy');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modclo_menu'] },
  ]);
  scene.build();
}

function enterModclo(s: GameState, scene: SceneBuilder): void {
  scene.text('Make sure to finalize appearance stats before choosing clothing otherwise they might not fit once the game starts.');
  (s as any).loc_s = 'intro_character_custom';
  (s as any).args_s = 'modclo';
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
      { label: 'Market', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'market_outfits'] },
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
        { label: 'View swimsuits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'allure_swimsuit'] },
        { label: 'View bikinis', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'allure_bikinis'] },
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
          { label: 'View dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'coco_dress'] },
          { label: 'View other outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'coco_outfits'] },
          { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'coco'] },
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
            { label: 'View sports clothing', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'danilovich_outfits'] },
            { label: 'View swimwear', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'danilovich_swimsuit'] },
            { label: 'View sports bras', goto: ['intro_character_custom', 'modclo_loop', 'bras', 'danilovich'] },
            { label: 'View sports panties', goto: ['intro_character_custom', 'modclo_loop', 'panties', 'danilovich'] },
            { label: 'View exercise shoes', goto: ['intro_character_custom', 'modclo_loop', 'shoes', 'danilovich'] },
            { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'danilovich'] },
            { label: 'View coats', goto: ['intro_character_custom', 'modclo_loop', 'coats', 'danilovich'] },
          ]);
        } else {
          if (((s as any).menu_name ?? 0) === 'erotomaniac') {
            scene.img('');
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
              { label: 'Look through the fetish dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'eroto_dress'] },
              { label: 'Look through the fetish outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'eroto_outfits'] },
              { label: 'Look through the stripper clothing', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'eroto_strip'] },
              { label: 'Look through the bras', goto: ['intro_character_custom', 'modclo_loop', 'bras', 'eroto'] },
              { label: 'Look through the panties', goto: ['intro_character_custom', 'modclo_loop', 'panties', 'eroto'] },
              { label: 'Look through the fetish shoes', goto: ['intro_character_custom', 'modclo_loop', 'shoes', 'eroto'] },
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
                { label: 'View clothing', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'fancy_burlesque'] },
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
                  { label: 'Try on dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'fashionista_dress'] },
                  { label: 'Try on outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'fashionista_outfits'] },
                  { label: 'Try on bra', goto: ['intro_character_custom', 'modclo_loop', 'bras', 'fashionista'] },
                  { label: 'Try on panties', goto: ['intro_character_custom', 'modclo_loop', 'panties', 'fashionista'] },
                  { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'fashionista'] },
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
                    { label: 'View dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'flamingos_dress'] },
                    { label: 'View other clothing', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'flamingos_outfits'] },
                    { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'flamingos'] },
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
                      { label: 'View clothing', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'gm_outfits'] },
                      { label: 'View dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'gm_dress'] },
                      { label: 'View office wear', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'gm_office'] },
                      { label: 'View maid outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'gm_maid'] },
                      { label: 'View server uniforms', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'gm_server'] },
                      { label: 'View school uniforms', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'gm_school'] },
                      { label: 'View bras', goto: ['intro_character_custom', 'modclo_loop', 'bras', 'gm'] },
                      { label: 'View panties', goto: ['intro_character_custom', 'modclo_loop', 'panties', 'gm'] },
                      { label: 'View shoes', goto: ['intro_character_custom', 'modclo_loop', 'shoes', 'gm'] },
                      { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'gm'] },
                      { label: 'View coats', goto: ['intro_character_custom', 'modclo_loop', 'coats', 'gm'] },
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
                        { label: 'View bras', goto: ['intro_character_custom', 'modclo_loop', 'bras', 'lusso'] },
                        { label: 'View panties', goto: ['intro_character_custom', 'modclo_loop', 'panties', 'lusso'] },
                        { label: 'View bodysuits', goto: ['intro_character_custom', 'modclo_loop', 'bodysuits', 'lusso'] },
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
                          { label: 'View clothes', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'materinstvo_dress'] },
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
                            { label: 'Try on gowns', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'moncheri_gown'] },
                            { label: 'Try on dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'moncheri_dress'] },
                            { label: 'Try on bodysuits', goto: ['intro_character_custom', 'modclo_loop', 'bodysuits', 'moncheri'] },
                            { label: 'View shoes', goto: ['intro_character_custom', 'modclo_loop', 'shoes', 'moncheri'] },
                            { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'moncheri'] },
                            { label: 'View coats', goto: ['intro_character_custom', 'modclo_loop', 'coats', 'moncheri'] },
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
                              { label: 'View cosplay outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'nerdvana_cosplay'] },
                              { label: 'View other outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'nerdvana_outfits'] },
                              { label: 'View swimsuits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'nerdvana_swimsuit'] },
                              { label: 'View bikinis', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'nerdvana_bikinis'] },
                              { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'nerdvana'] },
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
                                { label: 'View dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'dolls_dress'] },
                                { label: 'View other outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'dolls_outfits'] },
                                { label: 'View shoes', goto: ['intro_character_custom', 'modclo_loop', 'shoes', 'dolls'] },
                                { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'dolls'] },
                                { label: 'View coats', goto: ['intro_character_custom', 'modclo_loop', 'coats', 'dolls'] },
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
                                  { label: 'View dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'cats_dress'] },
                                  { label: 'View other outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'cats_outfits'] },
                                  { label: 'View bras', goto: ['intro_character_custom', 'modclo_loop', 'bras', 'cats'] },
                                  { label: 'View panties', goto: ['intro_character_custom', 'modclo_loop', 'panties', 'cats'] },
                                  { label: 'View shoes', goto: ['intro_character_custom', 'modclo_loop', 'shoes', 'cats'] },
                                  { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'cats'] },
                                  { label: 'View coats', goto: ['intro_character_custom', 'modclo_loop', 'coats', 'cats'] },
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
                                    { label: 'View clothing', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'scandalicious_outfits'] },
                                    { label: 'View dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'scandalicious_dress'] },
                                    { label: 'View swimsuits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'scandalicious_swimsuit'] },
                                    { label: 'View bikinis', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'scandalicious_bikinis'] },
                                    { label: 'View bodysuits', goto: ['intro_character_custom', 'modclo_loop', 'bodysuits', 'scandalicious'] },
                                    { label: 'View shoes', goto: ['intro_character_custom', 'modclo_loop', 'shoes', 'scandalicious'] },
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
                                      { label: 'View outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'salacious_dress'] },
                                      { label: 'View dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'salacious_outfits'] },
                                      { label: 'View bras', goto: ['intro_character_custom', 'modclo_loop', 'bras', 'salacious'] },
                                      { label: 'View panties', goto: ['intro_character_custom', 'modclo_loop', 'panties', 'salacious'] },
                                      { label: 'View bodysuits', goto: ['intro_character_custom', 'modclo_loop', 'bodysuits', 'salacious'] },
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
                                        { label: 'View dresses', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'bomba_dress'] },
                                        { label: 'View outfits', goto: ['intro_character_custom', 'modclo_loop', 'clothing', 'bomba_outfits'] },
                                        { label: 'View shoes', goto: ['intro_character_custom', 'modclo_loop', 'shoes', 'bomba'] },
                                        { label: 'View purses', goto: ['intro_character_custom', 'modclo_loop', 'purses', 'bomba'] },
                                        { label: 'View coats', goto: ['intro_character_custom', 'modclo_loop', 'coats', 'bomba'] },
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
                                            { label: 'Ankle', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'ankle'] },
                                            { label: 'Arm', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'arm'] },
                                            { label: 'Ass', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'ass'] },
                                            { label: 'Back', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'back'] },
                                            { label: 'Belly', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'belly'] },
                                            { label: 'Breast', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'breast'] },
                                            { label: 'Chest', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'chest'] },
                                            { label: 'Face', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'face'] },
                                            { label: 'Hand', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'hand'] },
                                            { label: 'Leg', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'leg'] },
                                            { label: 'Lip', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'lip'] },
                                            { label: 'Neck', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'neck'] },
                                            { label: 'Pussy', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'pussy'] },
                                            { label: 'Shoulder', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'shoulder'] },
                                            { label: 'Side', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'side'] },
                                            { label: 'Tramp', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'tramp'] },
                                            { label: 'Under', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'under'] },
                                            { label: 'Wrist', goto: ['intro_character_custom', 'modclo_loop', 'tattoos', 'wrist'] },
                                          ]);
                                        } else {
                                          if (((s as any).menu_name ?? 0) === 'pirsingsalon_piercings') {
                                            scene.actions([
                                              { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: $menu_name = 'pirsingsalon'
  }, goto: ['intro_character_custom', 'modclo'] },
                                              { label: 'Ears', goto: ['intro_character_custom', 'modclo_loop', 'piercings', 'ears'] },
                                              { label: 'Brow', goto: ['intro_character_custom', 'modclo_loop', 'piercings', 'brow'] },
                                              { label: 'Lip', goto: ['intro_character_custom', 'modclo_loop', 'piercings', 'lip'] },
                                              { label: 'Nose', goto: ['intro_character_custom', 'modclo_loop', 'piercings', 'nose'] },
                                              { label: 'Tongue', goto: ['intro_character_custom', 'modclo_loop', 'piercings', 'tongue'] },
                                              { label: 'Navel', goto: ['intro_character_custom', 'modclo_loop', 'piercings', 'navel'] },
                                              { label: 'Nipples', goto: ['intro_character_custom', 'modclo_loop', 'piercings', 'nipples'] },
                                              { label: 'Pussy', goto: ['intro_character_custom', 'modclo_loop', 'piercings', 'pussy'] },
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
  // TODO-QSP: end
  scene.build();
}

function enterModcloLoop(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shop_display ?? 0)?.['init'] === 0) {
    ((s as any).intro_custom_shop = (s as any).intro_custom_shop ?? {})['slot'] = ((s as any).locArgs?.[1] ?? 0);
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
  qspCall(s, 'shop_utils', '', 'display_' + ((s as any).intro_custom_shop ?? 0)?.['slot'] + '_grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'shop_utils', 'cleanup');
  }, goto: ['intro_character_custom', 'modclo'] },
  ]);
  scene.build();
}

function enterModapp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] === 0) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 12;
  }
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] === 0) {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 22;
  }
  scene.text('Your body weight may vary between characters as breast and butt size will be taken into account.');
  scene.text('Choose base genetic breast size: (this is the genetic disposition and not the actual size at game start)');
  // TODO-QSP: nl
  (s as any).temp_idx = 0;
  // TODO-QSP: :modapp_bust_loop
  (s as any).temp_val = ((s as any).temp_idx ?? 0) * 5 + 2;
  if ((!((s as any).temp_idx ?? 0))) {
    (s as any).temp_label = 'Very small';
  } else {
    if (((s as any).temp_idx ?? 0) === 1) {
      (s as any).temp_label = 'Below average';
    } else {
      if (((s as any).temp_idx ?? 0) === 2) {
        (s as any).temp_label = 'Average';
      } else {
        if (((s as any).temp_idx ?? 0) === 3) {
          (s as any).temp_label = 'Above average';
        } else {
          if (((s as any).temp_idx ?? 0) === 4) {
            (s as any).temp_label = 'Large';
          } else {
            if (((s as any).temp_idx ?? 0) === 5) {
              (s as any).temp_label = 'Extra large';
            } else {
              if (((s as any).temp_idx ?? 0) === 6) {
                (s as any).temp_label = 'Really big';
              } else {
                if (((s as any).temp_idx ?? 0) === 7) {
                  (s as any).temp_label = 'Massive';
                } else {
                  if (((s as any).temp_idx ?? 0) === 8) {
                    (s as any).temp_label = 'Getting silly';
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
    scene.text(`${((s as any).temp_label ?? '')} - Currently set`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec:pcs_mass[''bust_gen''] = <<temp_val>> & gt ''intro_character_custo...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { (s.pcs_mass ??= {})/u0027bust_gen/u0027 = ${((s as any).temp_val ?? '')}; return s; }); window.__gameStore.getState().doGoto(/u0027intro_character_custom/u0027, /u0027modapp/u0027); return false;">${((s as any).temp_label ?? '')}</a>`);
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
    (s as any).temp_label = 'Flat';
  } else {
    if (((s as any).temp_idx ?? 0) === 1) {
      (s as any).temp_label = 'Mostly Flat';
    } else {
      if (((s as any).temp_idx ?? 0) === 2) {
        (s as any).temp_label = 'Small';
      } else {
        if (((s as any).temp_idx ?? 0) === 3) {
          (s as any).temp_label = 'Below Average';
        } else {
          if (((s as any).temp_idx ?? 0) === 4) {
            (s as any).temp_label = 'Average';
          } else {
            if (((s as any).temp_idx ?? 0) === 5) {
              (s as any).temp_label = 'Above Average';
            } else {
              if (((s as any).temp_idx ?? 0) === 6) {
                (s as any).temp_label = 'Big';
              } else {
                if (((s as any).temp_idx ?? 0) === 7) {
                  (s as any).temp_label = 'Massive';
                } else {
                  if (((s as any).temp_idx ?? 0) === 8) {
                    (s as any).temp_label = 'Getting silly';
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
    scene.text(`${((s as any).temp_label ?? '')} - Currently set`);
  } else {
    // TODO-QSP: dynamic text: <a href="exec:pcs_mass[''butt_gen''] = <<temp_val>> & gt ''intro_character_custo...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { (s.pcs_mass ??= {})/u0027butt_gen/u0027 = ${((s as any).temp_val ?? '')}; return s; }); window.__gameStore.getState().doGoto(/u0027intro_character_custom/u0027, /u0027modapp/u0027); return false;">${((s as any).temp_label ?? '')}</a>`);
  }
  (s as any).temp_idx = ((s as any).temp_idx ?? 0) + (1);
  if (((s as any).temp_idx ?? 0) < 9) {
    // TODO-QSP: jump 'modapp_butt_loop'
  }
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Body fat (' + String(((s as any).pcs_mass ?? 0)?.['body'] ?? '' ?? '') + '/200)', handler: (st: GameState) => {
    qspCall(st, 'intro_character_custom', 'setbodymass');
    // TODO-QSP: pcs_mass['body'] = nstat
  }, goto: ['intro_character_custom', 'modapp'] },
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterSetgenbsize(s: GameState, scene: SceneBuilder): void {
  (s as any).nstat = ((s as any).pcs_mass ?? 0)?.['bust_gen'];
  (s as any).nstat = window.prompt("Enter value that ends in a 2 or a 7. For example, 2, 7, 12 etc.") ?? '';
  if (((s as any).nstat ?? 0) > 97) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).nstat ?? 0) < 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval2(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        return;
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterModite(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Fake passport (' + String(((s as any).fakepassport ?? '') ?? '') + '/1)', handler: (st: GameState) => {
    if ((!((st as any).fakepassport ?? 0))) {
      (st as any).fakepassport = 1;
    } else {
      (st as any).fakepassport = 0;
    }
    qspGoto(st, 'intro_character_custom', 'modite');
  } },
    { label: '', labelFn: (s: GameState) => 'Computer (' + String(((s as any).mc_inventory ?? 0)?.['tech_computer'] ?? '' ?? '') + '/1)', handler: (st: GameState) => {
    if (((st as any).mc_inventory ?? 0)?.['tech_computer'] === 0) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['tech_computer'] = 1;
    } else {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['tech_computer'] = 0;
    }
    qspGoto(st, 'intro_character_custom', 'modite');
  } },
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
  // TODO-QSP: end
  scene.build();
}

function enterModrelSetup3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> < 50: <<$ARGS[1]>> = 50'
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> > 200: <<$ARGS[1]>> = 200'
  // TODO-QSP: dynamic 'x = <<$ARGS[1]>>'
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td><<$ARGS[2]>> (<<x>>/200)</td><td><a href...
  // TODO-QSP: end
  scene.build();
}

function enterModrelSetup4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> < 0: <<$ARGS[1]>> = 0'
  // TODO-QSP: dynamic 'if <<$ARGS[1]>> > 100: <<$ARGS[1]>> = 100'
  // TODO-QSP: dynamic 'x = 100-<<$ARGS[1]>>'
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td><<$ARGS[2]>> (<<x>>/100)</td><td><a href...
  // TODO-QSP: end
  scene.build();
}

function enterModiteCos(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modite_cos';
  scene.text('<center><b>Cosmetic items</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'cosmetics\']', 'Cosmetics']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'razor\']', 'Razors (number of shaves)']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'suncream\']', 'Sunblock']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'scrunchies\']', 'Hair scrunchies']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'kirbygrips\']', 'Hair pins']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'shampoo\']', 'Shampoo']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modite'] },
  ]);
  scene.build();
}

function enterModitePha(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modite_pha';
  scene.text('<center><b>Pharmaceutical items</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'equipped_condoms\']', 'Condoms']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'pregnancy_test\']', 'Pregnancy tests']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'contraceptive_pill\']', 'Birth control pills']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'antibiotics\']', 'Antibiotics']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'vitamins\']', 'Vitamins']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'painkillers\']', 'Painkillers']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'chafing_cream\']', 'Ointment for chafing']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'lubricant\']', 'Lubricants']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'lipbalm\']', 'Lip balms']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'weight_loss_pill\']', 'Weight loss pills']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'tampons\']', 'Tampons']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'sanitary_pads\']', 'Sanitary napkins']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modite'] },
  ]);
  scene.build();
}

function enterModiteMis(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modite_mis';
  scene.text('<center><b>Misc items</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'cigarettes\']', 'Cigarettes']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dur', 'Cocaine']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mc_inventory[\'food_biscuits\']', 'Tea Biscuits']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modite'] },
  ]);
  scene.build();
}

function enterModpur(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    (s as any).currentpursetype = ((s as any).locArgs?.[1] ?? 0);
    (s as any).currentpursenumber = ((s as any).locArgs?.[2] ?? 0);
  }
  if (((s as any).currentpursetype ?? 0) === ''  ||  ((s as any).currentpursetype ?? 0) === 'none') {
    (s as any).currentpursetype = 'none';
    scene.text('You do not own a purse.');
  } else {
    (s as any).bag = 1;
    scene.img(`images/pc/items/${((s as any).currentpursetype ?? '')}/purses/${((s as any).currentpursenumber ?? '')}.jpg`);
    // TODO-QSP: dynamic text: Your current purse is <<$currentpursetype>>_<<currentpursenumber>>.
    scene.text(`Your current purse is ${((s as any).currentpursetype ?? '')}_${((s as any).currentpursenumber ?? '')}.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspGoto(st, 'intro_character_custom', 'start');
  } },
    { label: 'Get G&M', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/gm.png');
    (st as any).i = 1;
    // TODO-QSP: :loopgmpurses
    scene.img(`images/pc/items/gm/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 20) {
      // TODO-QSP: jump 'loopgmpurses'
    }
  } },
    { label: 'Get Danilovich', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/sports.png');
    (st as any).i = 1;
    // TODO-QSP: :loopdanilovichpurses
    scene.img(`images/pc/items/danilovich/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 60) {
      // TODO-QSP: jump 'loopdanilovichpurses'
    }
  } },
    { label: 'Get Dolls', handler: (st: GameState) => {
    scene.img('images/locations/city/island/dolls/shop_name.png');
    (st as any).i = 1;
    // TODO-QSP: :loopdollspurses
    scene.img(`images/pc/items/dolls/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 40) {
      // TODO-QSP: jump 'loopdollspurses'
    }
  } },
    { label: 'Get Bomba', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/bomba/shop_name.png');
    (st as any).i = 1;
    // TODO-QSP: :loopbombapurses
    scene.img(`images/pc/items/bomba/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 20) {
      // TODO-QSP: jump 'loopbombapurses'
    }
  } },
    { label: 'Get Fashionista', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/fashionista.png');
    (st as any).i = 1;
    // TODO-QSP: :loopfashionistapurses
    scene.img(`images/pc/items/fashionista/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 40) {
      // TODO-QSP: jump 'loopfashionistapurses'
    }
  } },
    { label: 'Get Coco', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/coco/shop_name.png');
    (st as any).i = 1;
    // TODO-QSP: :loopcocopurses
    scene.img(`images/pc/items/coco/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 60) {
      // TODO-QSP: jump 'loopcocopurses'
    }
  } },
    { label: 'Get Pussy_Cats', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pussycat.png');
    (st as any).i = 1;
    // TODO-QSP: :loopkatspurses
    scene.img(`images/pc/items/cats/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 20) {
      // TODO-QSP: jump 'loopkatspurses'
    }
  } },
    { label: 'Get Flamingos', handler: (st: GameState) => {
    scene.img('images/locations/city/island/flamingos/shop_name.png');
    (st as any).i = 1;
    // TODO-QSP: :loopflamingospurses
    scene.img(`images/pc/items/flamingos/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 20) {
      // TODO-QSP: jump 'loopflamingospurses'
    }
  } },
    { label: 'Get Mon Chéri', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/moncheri.png');
    (st as any).i = 1;
    // TODO-QSP: :loopmoncheripurses
    scene.img(`images/pc/items/moncheri/purses/${((st as any).i ?? '')}.jpg`);
    (st as any).i = ((st as any).i ?? 0) + (1);
    if (((st as any).i ?? 0) <= 40) {
      // TODO-QSP: jump 'loopmoncheripurses'
    }
  } },
    { label: 'I do not want a purse', handler: (st: GameState) => {
    (st as any).bag = 0;
    (st as any).currentpursetype = 'none';
    (st as any).currentpursenumber = 0;
    qspGoto(st, 'intro_character_custom', 'modpur');
  } },
  ]);
  scene.build();
}

function enterSetval(s: GameState, scene: SceneBuilder): void {
  (s as any).nstat = 0;
  (s as any).nstat = window.prompt("Enter value in multiples of 5, between 10 and 150. For example, 10, 15, 60 etc.") ?? '';
  if (((s as any).nstat ?? 0) > 150) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).nstat ?? 0) < 10) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        qspCall(s, 'stat', '');
        return;
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetval2(s: GameState, scene: SceneBuilder): void {
  (s as any).nstat = 0;
  (s as any).nstat = window.prompt("Enter value in multiples of 5. For example, 5, 0, -5 etc.") ?? '';
  if (((s as any).nstat ?? 0) > 100) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).nstat ?? 0) < -100) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval2(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        return;
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetval3(s: GameState, scene: SceneBuilder): void {
  (s as any).nstat = 0;
  (s as any).nstat = window.prompt("Enter value in multiples of 5. For example, 0, 5, 10 etc.") ?? '';
  if (((s as any).nstat ?? 0) > 100) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval3(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).nstat ?? 0) < 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval3(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetval3(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        return;
      }
    }
  }
  // TODO-QSP: end
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
  (s as any).nstat = window.prompt("Enter value in multiples of 5, between 10 and 150. For example, 10, 15, 60 etc.") ?? '';
  if (((s as any).nstat ?? 0) > 150) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetbodymass(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).nstat ?? 0) < 10) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetbodymass(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).nstat ?? 0) % 5 !== 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetbodymass(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        return;
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterModatt(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modatt';
  scene.text('<center><b>Attributes</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_inhib', 'Inhibition']; enterModrelSetup4(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'willpowermax', 'Willpower']; enterModrelSetup3(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_stren', 'Strength']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_agil', 'Agility']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_vital', 'Endurance']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_intel', 'Intelligence']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_sprt', 'Spirit']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_react', 'Reaction']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_chrsm', 'Charisma']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_prcptn', 'Perception']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_magik', 'Magic']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspGoto(st, 'intro_character_custom', 'start');
  } },
  ]);
  scene.build();
}

function enterModskl(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
  (s as any).locM_arg = 'modskl_men';
  scene.text('<center><b>Mental Skills</b></center>');
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_splcstng', 'Spell Casting']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_humint', 'People skills']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_persuas', 'Persuasion']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_observ', 'Observation']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspGoto(st, 'intro_character_custom', 'modskl');
  } },
  ]);
  scene.build();
}

function enterModsklSpo(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modskl_spo';
  scene.text('<center><b>Sport Skills</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_run', 'Running']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_vball', 'Volleyball']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_ftbll', 'Football']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_bkball', 'Basketball']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_wrstlng', 'Wrestling']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_icesktng', 'Ice Skating']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_gaming', 'Gaming']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_chess', 'Chess']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_pool', 'Pool']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspGoto(st, 'intro_character_custom', 'modskl');
  } },
  ]);
  scene.build();
}

function enterModsklCom(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modskl_com';
  scene.text('<center><b>Combat Skills</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_jab', 'Jabs']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_punch', 'Power Strikes']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_kick', 'Kicks']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_def', 'Defence']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_shoot', 'Marksmanship']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_bushcraft', 'Bushcraft']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspGoto(st, 'intro_character_custom', 'modskl');
  } },
  ]);
  scene.build();
}

function enterModsklBea(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modskl_bea';
  scene.text('<center><b>Beauty skills</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_makupskl', 'Makeup Skills']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_danc', 'Modern Dancing']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_dancero', 'Erotic Dancing']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_dancpol', 'Pole Dancing']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_cheer', 'Cheerleading']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_heels', 'Heels']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspGoto(st, 'intro_character_custom', 'modskl');
  } },
  ]);
  scene.build();
}

function enterModsklArt(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modskl_art';
  scene.text('<center><b>Artistic Skills</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_vokal', 'Singing']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_instrmusic', 'Instrumental Music']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_photoskl', 'Photography']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_artskls', 'Artistic Skills']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_perform', 'Performance']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_musicprod', 'Music Production']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspGoto(st, 'intro_character_custom', 'modskl');
  } },
  ]);
  scene.build();
}

function enterModsklJob(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modskl_job';
  scene.text('<center><b>Job Skills</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_compskl', 'Computer Skills']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_comphckng', 'Hacking']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_hndiwrk', 'Handy-work']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_sewng', 'Tailoring']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_servng', 'Serving']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_medcn', 'Medicine']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_cleaning', 'Cleaning']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pcs_mdlng', 'Modelling']; enterModrelSetup2(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: nl
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspGoto(st, 'intro_character_custom', 'modskl');
  } },
  ]);
  scene.build();
}

function enterBirthday(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'core_birthday');
  // TODO-QSP: end
  scene.build();
}

function enterModgrup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Your current social group is <<$soc_grup>>.
  scene.text(`Your current social group is ${((s as any).soc_grup ?? '')}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Nerd', handler: (st: GameState) => {
    ((st as any).start_type = (st as any).start_type ?? {})['group'] = 'nerd';
    (st as any).soc_grup = 'Nerd';
    (st as any).grupTipe = 3;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = 200;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = 100;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = 800;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = 100;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[6] = 600;
    qspGoto(st, 'intro_character_custom', 'modgrup');
  } },
    { label: 'Jock', handler: (st: GameState) => {
    ((st as any).start_type = (st as any).start_type ?? {})['group'] = 'jock';
    (st as any).soc_grup = 'Jock';
    (st as any).grupTipe = 2;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = 400;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = 800;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = 100;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = 200;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[6] = 400;
    qspGoto(st, 'intro_character_custom', 'modgrup');
  } },
    { label: 'Popular', handler: (st: GameState) => {
    ((st as any).start_type = (st as any).start_type ?? {})['group'] = 'cool';
    (st as any).soc_grup = 'Cool';
    (st as any).grupTipe = 1;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = 800;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = 400;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = 200;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = 100;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[6] = 400;
    qspGoto(st, 'intro_character_custom', 'modgrup');
  } },
    { label: 'Gopnik', handler: (st: GameState) => {
    ((st as any).start_type = (st as any).start_type ?? {})['group'] = 'gopnik';
    (st as any).soc_grup = 'Gopnik';
    (st as any).grupTipe = 4;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = 200;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = 300;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = 100;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = 800;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[6] = 100;
    qspGoto(st, 'intro_character_custom', 'modgrup');
  } },
    { label: 'Outcast', handler: (st: GameState) => {
    ((st as any).start_type = (st as any).start_type ?? {})['group'] = 'outcast';
    (st as any).soc_grup = 'Outcast';
    (st as any).grupTipe = 5;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[1] = 200;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[2] = 200;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = 200;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = 200;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[6] = 200;
    qspGoto(st, 'intro_character_custom', 'modgrup');
  } },
    { label: 'Return', goto: ['intro_character_custom', 'start'] },
  ]);
  scene.build();
}

function enterNone(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_functions', 'reset_all');
  (s as any).soc_grup = 'outcast';
  (s as any).grupTipe = 5;
  // TODO-QSP: end
  scene.build();
}

function enterModrel(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A28'] = 0;
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] < 0) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A29'] = 0;
  }
  if (((s as any).npc_rel ?? 0)?.['A33'] < 0) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A33'] = 0;
  }
  if (((s as any).npc_rel ?? 0)?.['A34'] < 0) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A34'] = 0;
  }
  if (((s as any).npc_rel ?? 0)?.['A28'] > 100) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A28'] = 100;
  }
  if (((s as any).npc_rel ?? 0)?.['A29'] > 100) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A29'] = 100;
  }
  if (((s as any).npc_rel ?? 0)?.['A33'] > 100) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A33'] = 100;
  }
  if (((s as any).npc_rel ?? 0)?.['A34'] > 100) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A34'] = 100;
  }
  scene.text('<center><b>Family relationship levels</b></center>');
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: dynamic text: <tr bgcolor=<<$theme[''table_bg'']>>><td>Stepfather: <<npc_rel[''A28'']>></td><t...
  scene.text(`<tr bgcolor=${((s as any).theme ?? 0)?.['table_bg'] ?? ''}><td>Stepfather: ${((s as any).npc_rel ?? 0)?.['A28'] ?? ''}</td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027set/u0027, /u0027A28/u0027); return false;">zero</a></td><td bgcolor=#ff9999><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A28/u0027); return false;">minus 10</a></td><td bgcolor=#ff9999><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A28/u0027); return false;">minus 5</a></td><td bgcolor=#99ff99><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A28/u0027); return false;">plus 5</a></td><td bgcolor=#99ff99><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A28/u0027); return false;">plus 10</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027set/u0027, /u0027A28/u0027); return false;">100</a></td>`);
  // TODO-QSP: dynamic text: <tr bgcolor=<<$theme[''table_bg'']>>><td>Mother: <<npc_rel[''A29'']>></td><td><a...
  scene.text(`<tr bgcolor=${((s as any).theme ?? 0)?.['table_bg'] ?? ''}><td>Mother: ${((s as any).npc_rel ?? 0)?.['A29'] ?? ''}</td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027set/u0027, /u0027A29/u0027); return false;">zero</a></td><td bgcolor=#ff9999><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A29/u0027); return false;">minus 10</a></td><td bgcolor=#ff9999><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A29/u0027); return false;">minus 5</a></td><td bgcolor=#99ff99><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A29/u0027); return false;">plus 5</a></td><td bgcolor=#99ff99><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A29/u0027); return false;">plus 10</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027set/u0027, /u0027A29/u0027); return false;">100</a></td>`);
  // TODO-QSP: dynamic text: <tr bgcolor=<<$theme[''table_bg'']>>><td>Sister: <<npc_rel[''A33'']>></td><td><a...
  scene.text(`<tr bgcolor=${((s as any).theme ?? 0)?.['table_bg'] ?? ''}><td>Sister: ${((s as any).npc_rel ?? 0)?.['A33'] ?? ''}</td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027set/u0027, /u0027A33/u0027); return false;">zero</a></td><td bgcolor=#ff9999><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A33/u0027); return false;">minus 10</a></td><td bgcolor=#ff9999><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A33/u0027); return false;">minus 5</a></td><td bgcolor=#99ff99><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A33/u0027); return false;">plus 5</a></td><td bgcolor=#99ff99><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A33/u0027); return false;">plus 10</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027set/u0027, /u0027A33/u0027); return false;">100</a></td>`);
  // TODO-QSP: dynamic text: <tr bgcolor=<<$theme[''table_bg'']>>><td>Brother: <<npc_rel[''A34'']>></td><td><...
  scene.text(`<tr bgcolor=${((s as any).theme ?? 0)?.['table_bg'] ?? ''}><td>Brother: ${((s as any).npc_rel ?? 0)?.['A34'] ?? ''}</td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027set/u0027, /u0027A34/u0027); return false;">zero</a></td><td bgcolor=#ff9999><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A34/u0027); return false;">minus 10</a></td><td bgcolor=#ff9999><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A34/u0027); return false;">minus 5</a></td><td bgcolor=#99ff99><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A34/u0027); return false;">plus 5</a></td><td bgcolor=#99ff99><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027modify_exact/u0027, /u0027A34/u0027); return false;">plus 10</a></td><td><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027npc_relationship/u0027, /u0027set/u0027, /u0027A34/u0027); return false;">100</a></td>`);
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)[(String((s as any).locArgs?.[1] ?? ''))] < 0) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = 0;
  }
  if (((s as any).npc_rel ?? 0)[(String((s as any).locArgs?.[1] ?? ''))] > 100) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = 100;
  }
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td><<$npc_firstname[''<<$ARGS[1]>>'']>> <<$...
  // TODO-QSP: end
  scene.build();
}

function enterModrelPop(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modrel_pop';
  scene.text('<center><b>Popular kids relationship levels</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A1']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A4']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A14']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A15']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A17']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A22']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A146']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A147']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A148']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A25']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A139']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A140']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all girls in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelAth(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modrel_ath';
  scene.text('<center><b>Jocks relationship levels</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A3']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A5']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A8']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A13']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A18']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A19']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A23']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A149']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A150']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A141']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all girls in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelNer(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modrel_ner';
  scene.text('<center><b>Nerds relationship levels</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A2']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A6']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A12']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A16']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A151']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A152']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A153']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A142']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all girls in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelGop(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modrel_gop';
  scene.text('<center><b>Gopnik kids relationship levels</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A9']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A10']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A11']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A20']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A21']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A24']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A154']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A155']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A156']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A157']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A158']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A143']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A144']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A145']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all girls in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelOut(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modrel_out';
  scene.text('<center><b>Outcast kids relationship levels</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A7']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A159']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all boys in t...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelTea(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modrel_tea';
  scene.text('<center><b>Teacher relationship levels</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A26']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A128']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A129']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A130']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A131']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A132']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A133']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A134']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A135']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A136']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A137']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A138']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all men in th...
  // TODO-QSP: $table_display += '<tr bgcolor=<<$theme[''table_bg'']>>><td>Set relationship level for all women in ...
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterModrelOth(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'modrel_oth';
  scene.text('<center><b>Others relationship levels</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A69']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'A112']; enterModrelSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><table border=0 cellspacing=0 cellpadding=25 bgcolor=#808080><th></th><th>Set to zero</th><th>Minus 10</th><th>Minus 5</th><th>Plus 5</th><th>Plus 10</th><th>Set to 100</th>');
  // TODO-QSP: $table_display
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['intro_character_custom', 'modrel'] },
  ]);
  scene.build();
}

function enterPolGrupSet(s: GameState, scene: SceneBuilder): void {
  (s as any).r = 1;
  // TODO-QSP: :pol_grup_set_loop
  if (((s as any).npc_gender ?? 0)['A' + (((s as any).r ?? 0))] === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).npc_grupTipe ?? 0)['A' + (((s as any).r ?? 0))] === String((s as any).locArgs?.[2] ?? '')) {
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A' + String(((s as any).r ?? 0))] = ((s as any).locArgs?.[3] ?? 0);
  }
  (s as any).r = ((s as any).r ?? 0) + (1);
  if (((s as any).r ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'pol_grup_set_loop'
  }
  // TODO-QSP: end
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
      enterDefault(s, scene);
      break;
  }
}

export const intro_character_custom: LocationDef = {
  name: 'intro_character_custom',
  title: 'shop_allure',
  region: 'other',
  enter: enter,
};
