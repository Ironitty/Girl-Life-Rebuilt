import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wardrobeDefaultPagePref ?? 0) === '') {
  }
  qspCall(s, 'shop_utils', 'cleanup');
  scene.text('<center><b>Please select an option</b></center>');
  scene.img('images/system/icons/clothing/clothes.png');
  scene.img('images/system/icons/clothing/default.png');
  scene.img('images/system/icons/clothing/organize.png');
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    // TODO-QSP: dynamic text: <center><b>You put the '+iif($pursepantytype ! ', 'panties', ')+iif($pursepantyt...
    scene.text('<center><b>You put the \'+iif($pursepantytype ! \', \'panties\', \')+iif($pursepantytype ! \' and $pursebratype ! \', \' and \', \')+iif($pursebratype ! \', \'bra\', \')+\' from your purse back in the wardrobe.</b></center><br>');
    // TODO-QSP: killvar 'pursepantytype'
    // TODO-QSP: killvar 'pursepantynumber'
    // TODO-QSP: killvar 'pursebratype'
    // TODO-QSP: killvar 'pursebranumber'
  }
  qspCall(s, 'wardrobe', 'wardrobe_enter_save_outfit');
  if (((s as any).wardrobeDefaultPagePref ?? 0) === 'currentOutfit') {
    scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
  } else {
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'viewClothing') {
      // TODO-QSP: gt 'clothing_view', 'view_lists_list', 'wardrobe'
    } else {
      if (((s as any).wardrobeDefaultPagePref ?? 0) !== '') {
        // TODO-QSP: gt 'wardrobe', $wardrobeDefaultPagePref
      }
    }
  }
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Current outfit', goto: ['wardrobe', 'main'] },
    { label: 'Saved outfit sets', handler: (st: GameState) => {
    if (((s as any).wardrobeDefaultPagePref ?? 0) !== 'currentOutfit'  &&  ((s as any).wardrobeDefaultPagePref ?? 0) !== 'viewClothing') {
      // TODO-QSP: gt 'wardrobe', $wardrobeDefaultPagePref
    } else {
      // TODO-QSP: gt 'wardrobe', $wloc
    }
  } },
    { label: 'Open wardrobe', goto: ['clothing_view', 'view_lists_list'] },
  ]);
  scene.build();
}

function enterWardrobeEnterSaveOutfit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).currentpursetype ?? 0) === '') {
  }
  (s as any).enterclothingwornnumber = ((s as any).clothingwornnumber ?? 0);
  (s as any).enterbodysuitwornnumber = ((s as any).bodysuitwornnumber ?? 0);
  (s as any).enterpantywornnumber = ((s as any).pantywornnumber ?? 0);
  (s as any).enterbrawornnumber = ((s as any).brawornnumber ?? 0);
  (s as any).entershoewornnumber = ((s as any).shoewornnumber ?? 0);
  (s as any).entercurrentpursenumber = ((s as any).currentpursenumber ?? 0);
  (s as any).entercoatwornnumber = ((s as any).coatwornnumber ?? 0);
  scene.build();
}

function enterWardrobeExitCheckOutfit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).currentpursetype ?? 0) === '') {
  }
  (s as any).wardrobe_outfit_changed = 0;
  if (((s as any).clothingworntype ?? 0) !== ((s as any).enterclothingworntype ?? 0)  ||  ((s as any).clothingwornnumber ?? 0) !== ((s as any).enterclothingwornnumber ?? 0)) {
    (s as any).wardrobe_outfit_changed = 1;
  }
  if (((s as any).bodysuitworntype ?? 0) !== ((s as any).enterbodysuitworntype ?? 0)  ||  ((s as any).bodysuitwornnumber ?? 0) !== ((s as any).enterbodysuitwornnumber ?? 0)) {
    (s as any).wardrobe_outfit_changed = 1;
  }
  if (((s as any).pantyworntype ?? 0) !== ((s as any).enterpantyworntype ?? 0)  ||  ((s as any).pantywornnumber ?? 0) !== ((s as any).enterpantywornnumber ?? 0)) {
    (s as any).wardrobe_outfit_changed = 1;
  }
  if (((s as any).braworntype ?? 0) !== ((s as any).enterbraworntype ?? 0)  ||  ((s as any).brawornnumber ?? 0) !== ((s as any).enterbrawornnumber ?? 0)) {
    (s as any).wardrobe_outfit_changed = 1;
  }
  if (((s as any).shoeworntype ?? 0) !== ((s as any).entershoeworntype ?? 0)  ||  ((s as any).shoewornnumber ?? 0) !== ((s as any).entershoewornnumber ?? 0)) {
    (s as any).wardrobe_outfit_changed = 1;
  }
  if (((s as any).currentpursetype ?? 0) !== ((s as any).entercurrentpursetype ?? 0)  ||  ((s as any).currentpursenumber ?? 0) !== ((s as any).entercurrentpursenumber ?? 0)) {
    (s as any).wardrobe_outfit_changed = 1;
  }
  if (((s as any).coatworntype ?? 0) !== ((s as any).entercoatworntype ?? 0)  ||  ((s as any).coatwornnumber ?? 0) !== ((s as any).entercoatwornnumber ?? 0)) {
    (s as any).wardrobe_outfit_changed = 1;
  }
  if (((s as any).wardrobe_outfit_changed ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wloc ?? 0) === '') {
  }
  qspCall(s, 'stat', '');
  if (((s as any).CloBra ?? 0) === 1) {
    qspCall(s, 'bras', 'remove');
  }
  if (((s as any).CloPanties ?? 0) === 1) {
    qspCall(s, 'panties', 'remove');
  }
  if (((s as any).sports_clothing_name ?? 0) === '') {
  }
  if (((s as any).clothingworntype ?? 0) === 'misc_outfits'  &&  ((s as any).clothingwornnumber ?? 0) === '1') {
    qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
    qspCall(s, 'clothing', 'strip');
  }
  if ((!((s as any).ward_img_hgt ?? 0))) {
    (s as any).ward_img_hgt = 150;
  }
  scene.img('images/system/icons/clothing/default.png');
  if (((s as any).wardrobeDefaultPagePref ?? 0) === 'currentOutfit') {
  }
  // TODO-QSP: dynamic text: <center><<$wardrobeSetDefault>></center>
  scene.text(`<center>${((s as any).wardrobeSetDefault ?? 0)}</center>`);
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    // TODO-QSP: dynamic text: <center>You put the '+iif($pursepantytype ! ', 'panties', ')+iif($pursepantytype...
    scene.text('<center>You put the \'+iif($pursepantytype ! \', \'panties\', \')+iif($pursepantytype ! \' and $pursebratype ! \', \' and \', \')+iif($pursebratype ! \', \'bra\', \')+\' from your purse back in the wardrobe.</center><br>');
    // TODO-QSP: killvar 'pursepantytype'
    // TODO-QSP: killvar 'pursepantynumber'
    // TODO-QSP: killvar 'pursebratype'
    // TODO-QSP: killvar 'pursebranumber'
  }
  // TODO-QSP: dynamic text: <center><font color="maroon">These are the clothes you are currently wearing - C...
  scene.text(`<center><font color="maroon">These are the clothes you are currently wearing - Click on an item to change it</font></center><center><table border=0 cellspacing=${((s as any).ward_img_hgt ?? 0)/25} cellpadding=5>`);
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    // TODO-QSP: *p '<th>Bra worn</th><th>Outfit worn</th><th>Coat (only worn outside when cold)</th>'
    // TODO-QSP: *P '<tr><td><center><a href="exec:gt ''wardrobe'', ''underwear_options'', ''bra''"><img Height = <<w...
  } else {
    // TODO-QSP: *p '<th>Bodysuit worn</th><th>Outfit worn</th><th>Coat (only worn outside when cold)</th>'
    // TODO-QSP: *P '<tr><td ROWSPAN=4><center><a href="exec:gt ''wardrobe'', ''underwear_options'', ''full''"><img H...
  }
  if (((s as any).coatworntype ?? 0) === 'none') {
    scene.text('<a href="exec:gt \'coat_view\', \'view_grid\', \'wardrobe\'">Search the wardrobe</a>');
  } else {
    scene.img(`${qspUntranslated(s, "FUNC('body_image', 'coat')", { location: "wardrobe" })}`);
  }
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    scene.text('</center></td><tr><td><center>');
    if (((s as any).braworntype ?? 0) !== 'none') {
      scene.text('<a href="exec:gs \'bras\', \'remove\' & gt \'wardrobe\', \'main\'">Remove</a>');
    } else {
      scene.text('Remove');
    }
    scene.text('</center></td><td><center>');
  } else {
    scene.text('</center></td><tr><td><center>');
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('<a href="exec:gs \'clothing\', \'strip\' & gt \'wardrobe\', \'main\'">Remove</a>');
  } else {
    scene.text('Remove');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).coatworntype ?? 0) !== 'none') {
    scene.text('<a href="exec:gs \'coats\', \'remove\' & gt \'wardrobe\', \'main\'">Remove</a>');
  } else {
    scene.text('Remove');
  }
  scene.text('</center></td>');
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    // TODO-QSP: *p '<tr><th>Panties worn</th><th>Shoes (Only worn outside)</th><th>Purse worn</th>'
    // TODO-QSP: *P '<tr><td><center><a href="exec:gt ''wardrobe'', ''underwear_options'', ''panties''"><img Height =...
  } else {
    // TODO-QSP: *p '<tr><th>Shoes (Only worn outside)</th><th>Purse worn</th>'
    // TODO-QSP: *P '<tr><td><center><a href="exec:gt ''shoe_view'', ''view_list'', ''wardrobe''"><img Height = <<war...
  }
  if (((s as any).bag ?? 0) === 1) {
    scene.img(`${qspUntranslated(s, "FUNC('purse_image', currentpursetype, currentpursenumber)", { location: "wardrobe" })}`);
  } else {
    scene.text('<a href="exec:gt \'purse_view\', \'view_grid\',\'wardrobe\'">Search the wardrobe</a>');
  }
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    scene.text('</center></td><tr><td><center>');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('<a href="exec:gs \'panties\', \'remove\' & gt \'wardrobe\', \'main\'">Remove</a>');
    } else {
      scene.text('Remove');
    }
    scene.text('</center></td><td><center>');
  } else {
    scene.text('</center></td><tr><td><center>');
    scene.text('<a href="exec:gs \'underwear_bodysuits\', \'remove\' & underwear[\'type\'] = 0 & gt \'wardrobe\', \'main\'">Remove</a>');
    scene.text('</center></td><td><center>');
  }
  if (((s as any).shoeworntype ?? 0) !== 'none') {
    scene.text('<a href="exec:gs \'shoes\', \'strip\' & gt \'wardrobe\', \'main\'">Remove</a>');
  } else {
    scene.text('Remove');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).bag ?? 0) === 1) {
    scene.text('<a href="exec:gs \'purses\', \'remove\' & gt \'wardrobe\', \'main\'">Remove</a>');
  } else {
    scene.text('Remove');
  }
  scene.text('</center></td><tr><td><td><center>');
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  (((s as any).coatworntype ?? 0) !== 'none'  ||  ((s as any).bag ?? 0) > 0))  ||  (((s as any).coatworntype ?? 0) !== 'none'  &&  ((s as any).bag ?? 0) > 0)) {
    scene.text('<a href="exec:gs \'wardrobe\', \'removeall\' & gt \'wardrobe\', \'main\'">Remove all items</a>');
  } else {
    scene.text('Remove all items');
  }
  scene.text('<center><font color="grey">Save/load outfits with "Managed saved clothing sets".</font></center>');
  scene.text('<td></center></td></table></center>');
  scene.actions([
    { label: 'Close wardrobe', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Strip all clothing', handler: (st: GameState) => {
    qspCall(s, 'bras', 'remove');
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'panties', 'remove');
    qspCall(s, 'shoes', 'strip');
  }, goto: ['wardrobe', 'main'] },
    { label: 'Set image size for this view', handler: (st: GameState) => {
    (s as any).ward_img_hgt = 0;
    if (((s as any).ward_img_hgt ?? 0) < 50) {
      (s as any).ward_img_hgt = 50;
    } else {
      if (((s as any).ward_img_hgt ?? 0) > 500) {
        (s as any).ward_img_hgt = 500;
      }
    }
  }, goto: ['wardrobe', 'main'] },
  ]);
  scene.build();
}

function enterUnderwearOptions(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Please select an option</b></center>');
  scene.img('images/system/icons/clothing/bodysuits.png');
  if (((s as any).locArgs?.[1] ?? 0) === 'bra'  ||  ((s as any).locArgs?.[1] ?? 0) === 'full') {
    scene.img('images/system/icons/clothing/bras.png');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'panties'  ||  ((s as any).locArgs?.[1] ?? 0) === 'full') {
    scene.img('images/system/icons/clothing/panties.png');
  }
  scene.actions([
    { label: 'Return', goto: ['wardrobe', 'main'] },
  ]);
  scene.build();
}

function enterRemoveall(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bras', 'remove');
  qspCall(s, 'clothing', 'strip');
  qspCall(s, 'panties', 'remove');
  qspCall(s, 'shoes', 'strip');
  qspCall(s, 'purses', 'remove');
  qspCall(s, 'coats', 'remove');
  scene.build();
}

function enterDefaultClothingLine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'clothing');
  // TODO-QSP: $result += '<TD><b><<$def_clothing_name[default_entry]>></b></TD>'
  if (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    // TODO-QSP: $result += '<TD><img width="100" src="images/pc/items/blank.jpg"></TD>'
  } else {
    // TODO-QSP: gs 'clothing_attributes', $defclothingtype[default_entry], defclothingnumber[default_entry]
    // TODO-QSP: $result += '<TD><img width="100" src="<<FUNC(''$clothing_image'', $defclothingtype[default_entry], d...
  }
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_entry ?? 0)] === 2) {
    if (((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      // TODO-QSP: $result += '<TD><img width="100" src="images/pc/items/blank.jpg"></TD>'
    } else {
      // TODO-QSP: gs 'underwear_attributes', $defbodysuittype[default_entry]+'_bodysuits', defbodysuitnumber[default_e...
      // TODO-QSP: $result += '<TD><img width="100" src="<<FUNC(''$pcs_outfit_image'', $defbodysuittype[default_entry]+...
    }
    // TODO-QSP: $result += '<TD><img width="100" src="images/pc/items/blank.jpg"></TD>'
  } else {
    if (((s as any).defbranumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      // TODO-QSP: $result += '<TD><img width="100" src="images/pc/items/blank.jpg"></TD>'
    } else {
      // TODO-QSP: gs 'underwear_attributes', $defbratype[default_entry]+'_bras', defbranumber[default_entry]
      // TODO-QSP: $result += '<TD><img width="100" src="<<FUNC(''$bra_image'', $defbratype[default_entry], defbranumbe...
    }
    if (((s as any).defpantynumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      // TODO-QSP: $result += '<TD><img width="100" src="images/pc/items/blank.jpg"></TD>'
    } else {
      // TODO-QSP: gs 'underwear_attributes', $defpantytype[default_entry]+'_panties', defpantynumber[default_entry]
      // TODO-QSP: $result += '<TD><img width="100" src="<<FUNC(''$panty_image'', $defpantytype[default_entry], defpant...
    }
  }
  if (((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    // TODO-QSP: $result += '<TD><img width="100" src="images/pc/items/blank.jpg"></TD>'
  } else {
    // TODO-QSP: gs 'shoe_attributes', $defshoetype[default_entry], defshoenumber[default_entry]
    // TODO-QSP: $result += '<TD><img width="100" src="<<FUNC(''$shoe_image'', $defshoetype[default_entry], defshoenu...
  }
  if (((s as any).defcoatnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    // TODO-QSP: $result += '<TD><img width="100" src="images/pc/items/blank.jpg"></TD>'
  } else {
    // TODO-QSP: gs 'coat_attributes', $defcoattype[default_entry], defcoatnumber[default_entry]
    // TODO-QSP: $result += '<TD><img width="100" src="<<FUNC(''$coat_image'', $defcoattype[default_entry], defcoatnu...
  }
  if (((s as any).defpursenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    // TODO-QSP: $result += '<TD><img width="100" src="images/pc/items/blank.jpg"></TD>'
  } else {
    // TODO-QSP: gs 'purse_attributes', $defpursetype[default_entry], defpursenumber[default_entry]
    // TODO-QSP: $result += '<TD><img width="100" src="<<FUNC(''$purse_image'', $defpursetype[default_entry], defpurs...
  }
  // TODO-QSP: $result += '<TD><a href="exec:gs ''wardrobe'', ''default_entry_wear'', <<default_entry>>"><img src="...
  // TODO-QSP: $result += '<TD><a href="exec:gs ''wardrobe'', ''default_entry_set'', <<default_entry>>"><img src="i...
  // TODO-QSP: $result += '<TD><a href="exec:gs ''wardrobe'', ''default_entry_rename'', <<default_entry>>"><img src...
  // TODO-QSP: $result += '<TD><a href="exec:gs ''wardrobe'', ''default_entry_delete'', <<default_entry>>"><img src...
  if (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0  ||  ((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    // TODO-QSP: $result += '<TD></TD><TR>'
  } else {
    if ((((s as any).ShoStyle2 ?? 0) === 2  ||  ((s as any).ShoSport ?? 0) === 1)  &&  (((s as any).CloStyle2 ?? 0) === 6  ||  ((s as any).CloSport ?? 0) === 1)) {
      if (((s as any).default_sport_number ?? 0) !== ((s as any).default_entry ?? 0)) {
        // TODO-QSP: $result += '<TD><a href="exec:gs ''wardrobe'', ''default_sport_set'', <<default_entry>>"><img src="i...
      } else {
        // TODO-QSP: $result += '<TD><img src="images/system/icons/clothing/sport.png"></TD><TR>'
      }
    } else {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (((s as any).CloStyle2 ?? 0) === 4  ||  ((s as any).CloSchool ?? 0) === 1)) {
        if (((s as any).default_school_number ?? 0) !== ((s as any).default_entry ?? 0)) {
          // TODO-QSP: $result += '<TD><a href="exec:gs ''wardrobe'', ''default_school_set'', <<default_entry>>"><img src="...
        } else {
          // TODO-QSP: $result += '<TD><img src="images/system/icons/clothing/school.png"></TD><TR>'
        }
      } else {
        // TODO-QSP: $result += '<TD></TD><TR>'
      }
    }
  }
  return;
  scene.build();
}

function enterDefaultNameInitialise(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothing_default_page ?? 0)[1] === '') {
    (s as any).clothing_default_page[1] = 'Set 1';
  }
  if (((s as any).clothing_default_page ?? 0)[2] === '') {
    (s as any).clothing_default_page[2] = 'Set 2';
  }
  if (((s as any).clothing_default_page ?? 0)[3] === '') {
    (s as any).clothing_default_page[3] = 'Set 3';
  }
  if (((s as any).clothing_default_page ?? 0)[4] === '') {
    (s as any).clothing_default_page[4] = 'Set 4';
  }
  if (((s as any).clothing_default_page ?? 0)[5] === '') {
    (s as any).clothing_default_page[5] = 'Set 5';
  }
  if (((s as any).clothing_default_page ?? 0)[6] === '') {
    (s as any).clothing_default_page[6] = 'Set 6';
  }
  if (((s as any).clothing_default_page ?? 0)[7] === '') {
    (s as any).clothing_default_page[7] = 'Set 7';
  }
  if (((s as any).clothing_default_page ?? 0)[8] === '') {
    (s as any).clothing_default_page[8] = 'Set 8';
  }
  if (((s as any).clothing_default_page ?? 0)[9] === '') {
    (s as any).clothing_default_page[9] = 'Set 9';
  }
  if (((s as any).clothing_default_page ?? 0)[10] === '') {
    (s as any).clothing_default_page[10] = 'Set 10';
  }
  scene.build();
}

function enterDefaultTemplate(s: GameState, scene: SceneBuilder): void {
  (s as any).clothing_default_page = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  qspCall(s, 'wardrobe', 'default_name_initialise');
  qspCall(s, 'stat', '');
  scene.img('images/system/icons/clothing/clothes.png');
  if (((s as any).wardrobeDefaultPagePref ?? 0) === ((s as any).wloc ?? 0)) {
  }
  // TODO-QSP: dynamic text: <center><<$wardrobeSetDefault>></center>
  scene.text(`<center>${((s as any).wardrobeSetDefault ?? 0)}</center>`);
  scene.text('<center><table><th>Name</th><th>Outfit</th><th>Bra/Bodysuit</th><th>Panties</th><th>Shoes</th><th>Coat</th><th>Purse</th><th></th><th></th><th></th><th></th><th></th><tr>');
  (s as any).temp = ((s as any).default_entry ?? 0);
  // TODO-QSP: :loopdefault_entry_set
  if ((0 as any) !== 0) {
    // TODO-QSP: *p $func('wardrobe', 'default_clothing_line')
  }
  (s as any).default_entry = ((s as any).default_entry ?? 0) + (1);
  if (((s as any).default_entry ?? 0) <= ((s as any).default_entry ?? 0)[1]) {
    // TODO-QSP: jump 'loopdefault_entry_set'
  }
  (s as any).default_entry = ((s as any).temp ?? 0);
  // TODO-QSP: :loopdefault_entry_empty
  if ((!(0 as any))) {
    // TODO-QSP: *p $func('wardrobe', 'default_clothing_line')
  }
  (s as any).default_entry = ((s as any).default_entry ?? 0) + (1);
  if (((s as any).default_entry ?? 0) <= ((s as any).default_entry ?? 0)[1]) {
    // TODO-QSP: jump 'loopdefault_entry_empty'
  }
  scene.text('</table></center>');
  scene.build();
}

function enterDefaultSetName(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $clothing_default_page[clothing_default_page] = input('Enter new name for this set')
  scene.actions([{ label: 'Continue', goto: ['wardrobe', 'default<<clothing_default_page>>'] }]);
  scene.build();
}

function enterDefaultActions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Select outfit to wear', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'default_actions_wear');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'wardrobe', $wardrobeDefaultPagePref
  } },
    ]);
  } },
    { label: 'Choose another page', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'default_actions_page');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'wardrobe', $wardrobeDefaultPagePref
  } },
    ]);
  } },
    { label: 'Rename this set', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', 'default_set_name');
  } },
  ]);
  scene.build();
}

function enterDefaultActionsPage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== 1) {
    // TODO-QSP: act 'See <<$clothing_default_page[1]>> set': gt 'wardrobe', 'default1'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 2) {
    // TODO-QSP: act 'See <<$clothing_default_page[2]>> set': gt 'wardrobe', 'default2'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 3) {
    // TODO-QSP: act 'See <<$clothing_default_page[3]>> set': gt 'wardrobe', 'default3'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 4) {
    // TODO-QSP: act 'See <<$clothing_default_page[4]>> set': gt 'wardrobe', 'default4'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 5) {
    // TODO-QSP: act 'See <<$clothing_default_page[5]>> set': gt 'wardrobe', 'default5'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 6) {
    // TODO-QSP: act 'See <<$clothing_default_page[6]>> set': gt 'wardrobe', 'default6'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 7) {
    // TODO-QSP: act 'See <<$clothing_default_page[7]>> set': gt 'wardrobe', 'default7'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 8) {
    // TODO-QSP: act 'See <<$clothing_default_page[8]>> set': gt 'wardrobe', 'default8'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 9) {
    // TODO-QSP: act 'See <<$clothing_default_page[9]>> set': gt 'wardrobe', 'default9'
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 10) {
    // TODO-QSP: act 'See <<$clothing_default_page[10]>> set': gt 'wardrobe', 'default10'
  }
  scene.build();
}

function enterDefaultActionsWear(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = ((s as any).default_entry ?? 0) - (10);
  (s as any).i = ((s as any).default_entry ?? 0);
  // TODO-QSP: :loop_default_actions_wear
  if ((0 as any) !== 0) {
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).default_entry ?? 0)[1]) {
    // TODO-QSP: jump 'loop_default_actions_wear'
  }
  scene.build();
}

function enterDefault1(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 1;
  (s as any).default_entry[1] = 10;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[1]
  qspCall(s, 'wardrobe', 'default_actions', 1);
  qspCall(s, 'wardrobe', 'default_template', 1);
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 11;
  (s as any).default_entry[1] = 20;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[2]
  qspCall(s, 'wardrobe', 'default_actions', 2);
  qspCall(s, 'wardrobe', 'default_template', 2);
  scene.build();
}

function enterDefault3(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 21;
  (s as any).default_entry[1] = 30;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[3]
  qspCall(s, 'wardrobe', 'default_actions', 3);
  qspCall(s, 'wardrobe', 'default_template', 3);
  scene.build();
}

function enterDefault4(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 31;
  (s as any).default_entry[1] = 40;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[4]
  qspCall(s, 'wardrobe', 'default_actions', 4);
  qspCall(s, 'wardrobe', 'default_template', 4);
  scene.build();
}

function enterDefault5(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 41;
  (s as any).default_entry[1] = 50;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[5]
  qspCall(s, 'wardrobe', 'default_actions', 5);
  qspCall(s, 'wardrobe', 'default_template', 5);
  scene.build();
}

function enterDefault6(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 51;
  (s as any).default_entry[1] = 60;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[6]
  qspCall(s, 'wardrobe', 'default_actions', 6);
  qspCall(s, 'wardrobe', 'default_template', 6);
  scene.build();
}

function enterDefault7(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 61;
  (s as any).default_entry[1] = 70;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[7]
  qspCall(s, 'wardrobe', 'default_actions', 7);
  qspCall(s, 'wardrobe', 'default_template', 7);
  scene.build();
}

function enterDefault8(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 71;
  (s as any).default_entry[1] = 80;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[8]
  qspCall(s, 'wardrobe', 'default_actions', 8);
  qspCall(s, 'wardrobe', 'default_template', 8);
  scene.build();
}

function enterDefault9(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 81;
  (s as any).default_entry[1] = 90;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[9]
  qspCall(s, 'wardrobe', 'default_actions', 9);
  qspCall(s, 'wardrobe', 'default_template', 9);
  scene.build();
}

function enterDefault10(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = 91;
  (s as any).default_entry[1] = 100;
  // TODO-QSP: $default_entry[2] = $clothing_default_page[10]
  qspCall(s, 'wardrobe', 'default_actions', 10);
  qspCall(s, 'wardrobe', 'default_template', 10);
  scene.build();
}

function enterDefaultEntryWear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).default_entry = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  if (((s as any).defclothingtype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'nude'  ||  ((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    qspCall(s, 'clothing', 'strip');
  } else {
    if (((s as any).temp_clo_not_wear_reason ?? 0) === '') {
      // TODO-QSP: gs 'clothing', 'wear', $defclothingtype[default_entry], defclothingnumber[default_entry], 'check'
    } else {
      qspCall(s, 'clothing', 'strip');
    }
  }
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_entry ?? 0)] === 2) {
    if (((s as any).defbodysuittype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      qspCall(s, 'underwear_bodysuits', 'strip');
      (s as any).defunderwear[String((s as any).default_entry ?? 0)] = 0;
    } else {
      if (((s as any).temp_bodysuit_not_wear_reason ?? 0) === '') {
        // TODO-QSP: gs 'underwear_bodysuits', 'wear', $defbodysuittype[default_entry], defbodysuitnumber[default_entry]
      } else {
        qspCall(s, 'underwear_bodysuits', 'strip');
      }
    }
  } else {
    if (((s as any).defbratype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defbranumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      qspCall(s, 'bras', 'strip');
    } else {
      if (((s as any).temp_bra_not_wear_reason ?? 0) === '') {
        // TODO-QSP: gs 'bras', 'wear', $defbratype[default_entry], defbranumber[default_entry]
      } else {
        qspCall(s, 'bras', 'strip');
      }
    }
    if (((s as any).defpantytype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defpantynumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      qspCall(s, 'panties', 'strip');
    } else {
      if (((s as any).temp_panties_not_wear_reason ?? 0) === '') {
        // TODO-QSP: gs 'panties', 'wear', $defpantytype[default_entry], defpantynumber[default_entry]
      } else {
        qspCall(s, 'panties', 'strip');
      }
    }
  }
  if (((s as any).defshoetype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    qspCall(s, 'shoes', 'strip');
  } else {
    if (((s as any).temp_sho_not_wear_reason ?? 0) === '') {
      // TODO-QSP: gs 'shoes', 'wear', $defshoetype[default_entry], defshoenumber[default_entry]
    } else {
      qspCall(s, 'shoes', 'strip');
    }
  }
  if (((s as any).defpursetype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defpursenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    qspCall(s, 'purses', 'strip');
  } else {
    if (((s as any).temp_purse_not_wear_reason ?? 0) === '') {
      // TODO-QSP: gs 'purses', 'wear', $defpursetype[default_entry], defpursenumber[default_entry]
    } else {
      qspCall(s, 'purses', 'strip');
    }
  }
  if (((s as any).defcoattype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defcoatnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    qspCall(s, 'coats', 'strip');
  } else {
    if (((s as any).temp_coat_not_wear_reason ?? 0) === '') {
      // TODO-QSP: gs 'coats', 'wear', $defcoattype[default_entry], defcoatnumber[default_entry]
    } else {
      qspCall(s, 'coats', 'strip');
    }
  }
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_entry ?? 0)] === 2) {
    if (((s as any).temp_bodysuit_not_wear_reason ?? 0) === 'not_owned') {
      scene.text('You don\'t own this bodysuit');
    } else {
      if (((s as any).temp_bodysuit_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        scene.text('This bodysuit is not in your wardrobe.');
      } else {
        if (((s as any).temp_bodysuit_not_wear_reason ?? 0) === 'low_strength') {
          scene.text('This bodysuit is worn out.');
        } else {
          if (((s as any).temp_bodysuit_not_wear_reason ?? 0) === 'hypno') {
            if ((Math.floor(Math.random() * 21) + 0) < ((s as any).hypnoStrength ?? 0)) {
              // TODO-QSP: $defbodysuittype[default_entry] = 'none'
              (s as any).defbodysuitnumber[String((s as any).default_entry ?? 0)] = 0;
              (s as any).defunderwear[String((s as any).default_entry ?? 0)] = 0;
              scene.text('<center>You feel like something about this set has changed but you cannot workout what it is.</center>');
            } else {
              // TODO-QSP: gs 'underwear_bodysuits', 'wear', $defbodysuittype[default_entry], defbodysuitnumber[default_entry]
            }
          } else {
            if (((s as any).temp_bodysuit_not_wear_reason ?? 0) !== '') {
              scene.text('ERROR! This should not be reached.');
              // TODO-QSP: dynamic text: You can't wear this bodysuit because <<$temp_bodysuit_not_wear_reason>>, but the...
              scene.text(`You can't wear this bodysuit because ${((s as any).temp_bodysuit_not_wear_reason ?? 0)}, but the text for this has not be written.`);
              scene.text('Please contact a developer');
            }
          }
        }
      }
    }
  } else {
    if (((s as any).temp_bra_not_wear_reason ?? 0) === 'not_owned') {
      scene.text('You don\'t own this bra');
    } else {
      if (((s as any).temp_bra_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        scene.text('This bra is not in your wardrobe.');
      } else {
        if (((s as any).temp_bra_not_wear_reason ?? 0) === 'low_strength') {
          scene.text('This bra is worn out.');
        } else {
          if (((s as any).temp_bra_not_wear_reason ?? 0) !== ''  &&  ((s as any).temp_bra_not_wear_reason ?? 0) !== 'hypno') {
            scene.text('ERROR! This should not be reached.');
            // TODO-QSP: dynamic text: You can't wear this bra because <<$temp_bra_not_wear_reason>>, but the text for ...
            scene.text(`You can't wear this bra because ${((s as any).temp_bra_not_wear_reason ?? 0)}, but the text for this has not be written.`);
            scene.text('Please contact a developer');
          }
        }
      }
    }
    if (((s as any).temp_panties_not_wear_reason ?? 0) === 'not_owned') {
      scene.text('You don\'t own these panties');
    } else {
      if (((s as any).temp_panties_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        scene.text('These panties are not in your wardrobe.');
      } else {
        if (((s as any).temp_panties_not_wear_reason ?? 0) === 'low_strength') {
          scene.text('These panties are worn out.');
        } else {
          if (((s as any).temp_panties_not_wear_reason ?? 0) !== ''  &&  ((s as any).temp_panties_not_wear_reason ?? 0) !== 'hypno') {
            scene.text('ERROR! This should not be reached.');
            // TODO-QSP: dynamic text: You can't wear these panties because <<$temp_panties_not_wear_reason>>, but the ...
            scene.text(`You can't wear these panties because ${((s as any).temp_panties_not_wear_reason ?? 0)}, but the text for this has not be written.`);
            scene.text('Please contact a developer');
          }
        }
      }
    }
    if ((((s as any).temp_panties_not_wear_reason ?? 0) === 'hypno'  ||  ((s as any).temp_bra_not_wear_reason ?? 0) === 'hypno')) {
      // TODO-QSP: dynamic text: You reach for your <<$temp_hypno_items>> but something holds you back. You hate ...
      scene.text(`You reach for your ${((s as any).temp_hypno_items ?? 0)} but something holds you back. You hate wearing ${((s as any).temp_hypno_items ?? 0)}, so why put them on?`);
      qspCall(s, 'willpower', 'misc', 'resist', 'easy');
      if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
        (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (((s as any).braworntype ?? 0) !== ((s as any).defbratype ?? 0)?.[String((s as any).default_entry ?? 0)]) {
      // TODO-QSP: gs 'bras', 'wear', $defbratype[default_entry], defbranumber[default_entry]
    }
    if (((s as any).pantyworntype ?? 0) !== ((s as any).defpantytype ?? 0)?.[String((s as any).default_entry ?? 0)]) {
      // TODO-QSP: gs 'panties', 'wear', $defpantytype[default_entry], defpantynumber[default_entry]
    }
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
        ]);
      }
      scene.actions([
        { label: 'Leave them off', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 21) + 0) < ((s as any).hypnoStrength ?? 0)) {
      if (((s as any).braworntype ?? 0) !== ((s as any).defbratype ?? 0)?.[String((s as any).default_entry ?? 0)]) {
        // TODO-QSP: $defbratype[default_entry] = 'none'
        (s as any).defbranumber[String((s as any).default_entry ?? 0)] = 0;
      }
      if (((s as any).pantyworntype ?? 0) !== ((s as any).defpantytype ?? 0)?.[String((s as any).default_entry ?? 0)]) {
        // TODO-QSP: $defpantytype[default_entry] = 'none'
        (s as any).defpantynumber[String((s as any).default_entry ?? 0)] = 0;
      }
      scene.text('<center>You feel like something about this set has changed but you cannot work out what it is.</center>');
    }
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
      ]);
    }
  }
  if (((s as any).temp_sho_not_wear_reason ?? 0) === 'not_owned') {
    scene.text('As you go to pull your shoes out of your wardrobe you remember you don\'t own them anymore. Maybe you should buy them again? Guess you will have to find something else to wear.');
  } else {
    if (((s as any).temp_sho_not_wear_reason ?? 0) === 'not_in_wardrobe') {
      scene.text('As you go to pull your shoes out of your wardrobe you remember you put them somewhere else. Guess you will have to find something else to wear, or fish them our of your storage or unwanted pile.');
    } else {
      if (((s as any).temp_sho_not_wear_reason ?? 0) === 'low_strength') {
        scene.text('As you go to put on your shoes, you notice that the soles have worn out. Guess you will have to find something else to wear.');
      } else {
        if (((s as any).temp_sho_not_wear_reason ?? 0) === 'low_heels_skill') {
          // TODO-QSP: dynamic text: You try to take a step in these killer heels and almost break your neck. You can...
          scene.text(`You try to take a step in these killer heels and almost break your neck. You can't walk in your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit. Guess you will have to find something else to wear.`);
        } else {
          if (((s as any).temp_sho_not_wear_reason ?? 0) !== '') {
            scene.text('ERROR! This should not be reached.');
            // TODO-QSP: dynamic text: You can't wear these shoes because <<$temp_sho_not_wear_reason>>, but the text f...
            scene.text(`You can't wear these shoes because ${((s as any).temp_sho_not_wear_reason ?? 0)}, but the text for this has not be written.`);
            scene.text('Please contact a developer');
          }
        }
      }
    }
  }
  if (((s as any).temp_purse_not_wear_reason ?? 0) === 'not_owned') {
    scene.text('As you go to get your purse out of your wardrobe, you remember you don\'t own it anymore. Maybe you should buy them again? Guess you will have to find something else to wear.');
  } else {
    if (((s as any).temp_purse_not_wear_reason ?? 0) === 'not_in_your') {
      scene.text('As you go to get your purse out of your wardrobe, you remember you put it somewhere else. uess you will have to find something else to wear, or fish it our of your storage or unwanted pile.');
    } else {
      if (((s as any).temp_purse_not_wear_reason ?? 0) !== '') {
        scene.text('ERROR! This should not be reached.');
        // TODO-QSP: dynamic text: You can't wear this purse because <<$temp_purse_not_wear_reason>>, but the text ...
        scene.text(`You can't wear this purse because ${((s as any).temp_purse_not_wear_reason ?? 0)}, but the text for this has not be written.`);
        scene.text('Please contact a developer');
      }
    }
  }
  if (((s as any).temp_coat_not_wear_reason ?? 0) === 'not_owned') {
    scene.text('As you go to get your coat out of your wardrobe, you remember you don\'t own it anymore. Maybe you should buy them again? Guess you will have to find something else to wear.');
  } else {
    if (((s as any).temp_coat_not_wear_reason ?? 0) === 'not_in_your') {
      scene.text('As you go to get your coat out of your wardrobe, you remember you put it somewhere else. uess you will have to find something else to wear, or fish it our of your storage or unwanted pile.');
    } else {
      if (((s as any).temp_coat_not_wear_reason ?? 0) === 'is_strength_low') {
        scene.text('As you go to get your coat out of your wardrobe, you notice that it\'s worn out. Guess you will have to find something else to wear.');
      } else {
        if (((s as any).temp_coat_not_wear_reason ?? 0) !== '') {
          scene.text('ERROR! This should not be reached.');
          // TODO-QSP: dynamic text: You can't wear this coat because <<$temp_coat_not_wear_reason>>, but the text fo...
          scene.text(`You can't wear this coat because ${((s as any).temp_coat_not_wear_reason ?? 0)}, but the text for this has not be written.`);
          scene.text('Please contact a developer');
        }
      }
    }
  }
  if (((s as any).temp_clo_not_wear_reason ?? 0) === 'not_owned') {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip2.jpg');
    // TODO-QSP: dynamic text: As you go to pull your <<$def_clothing_name[default_entry]>> outfit out of your ...
    scene.text(`As you go to pull your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit out of your wardrobe you remember you don't own that piece of clothing anymore. Maybe you should buy it again? Guess you will have to find something else to wear.`);
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
    ]);
  } else {
    if (((s as any).temp_clo_not_wear_reason ?? 0) === 'is_lost') {
      scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip2.jpg');
      // TODO-QSP: dynamic text: As you go to pull your <<$def_clothing_name[default_entry]>> outfit out of your ...
      scene.text(`As you go to pull your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit out of your wardrobe you remember that you lost that piece of clothing. Maybe you can find the missing clothes somewhere? Guess you will have to find something else to wear.`);
      scene.actions([
        { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
      ]);
    } else {
      if (((s as any).temp_clo_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip2.jpg');
        // TODO-QSP: dynamic text: As you go to pull your <<$def_clothing_name[default_entry]>> outfit out of your ...
        scene.text(`As you go to pull your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit out of your wardrobe you notice that it's not there. You should move it back into your wardrobe from your storage or unwanted pile.`);
        scene.actions([
          { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
        ]);
      } else {
        if (((s as any).temp_clo_not_wear_reason ?? 0) === 'low_strength') {
          scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game_strip16.mp4');
          // TODO-QSP: dynamic text: Your <<$def_clothing_name[default_entry]>> outfit has worn out and can't be used...
          scene.text(`Your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit has worn out and can't be used anymore. Guess you will have to find something else to wear.`);
          scene.actions([
            { label: 'Strip out of worn out clothing', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'default_entry_delete');
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
          ]);
        } else {
          if (((s as any).temp_clo_not_wear_reason ?? 0) === 'low_inhib') {
            scene.img('images/locations/pavlovsk/trainstation/bimbo.strip6.mp4');
            // TODO-QSP: dynamic text: You don't feel daring enough to wear your <<$def_clothing_name[default_entry]>> ...
            scene.text(`You don't feel daring enough to wear your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit. Maybe you will be confident enough in the future? Guess you will have to find something else to wear.`);
            scene.actions([
              { label: 'Strip out of revealing clothing', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
            ]);
          } else {
            if (((s as any).temp_clo_not_wear_reason ?? 0) === 'too_small'  ||  ((s as any).temp_clo_not_wear_reason ?? 0) === 'too_large') {
              if (((s as any).temp_clo_not_wear_reason ?? 0) === 'too_small') {
                scene.img('images/locations/pavlovsk/clinic/therapist/dressup.mp4');
              } else {
                scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${Math.floor(Math.random() * 4) + 1}.mp4`);
              }
              // TODO-QSP: dynamic text: As you put on your <<$def_clothing_name[default_entry]>> outfit you notice it do...
              scene.text(`As you put on your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit you notice it doesn't fit correctly anymore. It's ' + iif($temp_clo_not_wear_reason = 'too_small', 'unbearably tight and uncomfortable to wear.', 'extremely loose and won't stay in place no matter how hard you try.') + ' You must have ' + iif($temp_clo_not_wear_reason = 'too_small', 'gained', 'lost') + ' some weight since this was purchased or last tailored. You will have to get this clothing resized before you can wear it again.`);
              scene.actions([
                { label: 'Strip out of ill-fitting clothing', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
              ]);
            } else {
              if (((s as any).temp_clo_not_wear_reason ?? 0) === 'hypno') {
                scene.img('images/locations/pavlovsk/trainstation/bimbo.strip6.mp4');
                scene.text('You pick up the outfit and think about trying them on… but you don\'t really like wearing these type of outfits');
                qspCall(s, 'willpower', 'misc', 'resist', 'easy');
                if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
                  (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
                }
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Put them on anyways [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    // TODO-QSP: gs 'clothing', 'wear', $defclothingtype[default_entry], defclothingnumber[default_entry]
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Strip out of restrictive clothing', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
                ]);
              } else {
                if (((s as any).temp_clo_not_wear_reason ?? 0) !== '') {
                  scene.text('ERROR! This should not be reached.');
                  // TODO-QSP: dynamic text: You can't wear this outfit because <<$temp_clo_not_wear_reason>>, but the text f...
                  scene.text(`You can't wear this outfit because ${((s as any).temp_clo_not_wear_reason ?? 0)}, but the text for this has not be written.`);
                  scene.text('Please contact a developer');
                  scene.actions([
                    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'wardrobe', $wloc
  } },
                  ]);
                } else {
                  scene.img('images/pc/activities/misc/dress_1.mp4');
                  if (((s as any).temp_panties_not_wear_reason ?? 0) === 'hypno'  ||  ((s as any).temp_bra_not_wear_reason ?? 0) === 'hypno') {
                    // TODO-QSP: dynamic text: You put on your <<$def_clothing_name[default_entry]>> outfit, but couldn't bring...
                    scene.text(`You put on your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit, but couldn't bring yourself to put on your ' + iif($temp_bra_not_wear_reason = 'hypno' and $temp_panties_not_wear_reason = 'hypno', 'bra or panties', iif($temp_bra_not_wear_reason = 'hypno', 'bra', 'panties')) + '.`);
                  } else {
                    // TODO-QSP: dynamic text: Your put on your <<$def_clothing_name[default_entry]>> outfit without any proble...
                    scene.text(`Your put on your ${((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)]} outfit without any problems.`);
                  }
                  scene.actions([
                    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: gt 'wardrobe', $wloc
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
  scene.build();
}

function enterDefaultEntrySet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp_set_index = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  // TODO-QSP: $defclothingtype[temp_set_index] = $clothingworntype
  (s as any).defclothingnumber[String((s as any).temp_set_index ?? 0)] = ((s as any).clothingwornnumber ?? 0);
  (s as any).defunderwear[String((s as any).temp_set_index ?? 0)] = ((s as any).underwear ?? 0)?.['type'];
  // TODO-QSP: $defbodysuittype[temp_set_index] = $bodysuitworntype
  (s as any).defbodysuitnumber[String((s as any).temp_set_index ?? 0)] = ((s as any).bodysuitwornnumber ?? 0);
  // TODO-QSP: $defbratype[temp_set_index] = $braworntype
  (s as any).defbranumber[String((s as any).temp_set_index ?? 0)] = ((s as any).brawornnumber ?? 0);
  // TODO-QSP: $defpantytype[temp_set_index] = $pantyworntype
  (s as any).defpantynumber[String((s as any).temp_set_index ?? 0)] = ((s as any).pantywornnumber ?? 0);
  // TODO-QSP: $defshoetype[temp_set_index] = $shoeworntype
  (s as any).defshoenumber[String((s as any).temp_set_index ?? 0)] = ((s as any).shoewornnumber ?? 0);
  // TODO-QSP: $defpursetype[temp_set_index] = $currentpursetype
  (s as any).defpursenumber[String((s as any).temp_set_index ?? 0)] = ((s as any).currentpursenumber ?? 0);
  // TODO-QSP: $defcoattype[temp_set_index] = $coatworntype
  (s as any).defcoatnumber[String((s as any).temp_set_index ?? 0)] = ((s as any).coatwornnumber ?? 0);
  if ((!((s as any).bag ?? 0))) {
    // TODO-QSP: $defpursetype[temp_set_index] = 'none'
    (s as any).defpursenumber[String((s as any).temp_set_index ?? 0)] = 0;
  }
  if ((Math.floor(Math.random() * 21) + 0) < ((s as any).hypnoStrength ?? 0)) {
    (s as any).temp_wardrobe_msg = 0;
    if (((s as any).hypnoPanty ?? 0) === 1  &&  ((s as any).hypnoBra ?? 0) === 1) {
      // TODO-QSP: $defbodysuittype[temp_set_index] = 'none'
      (s as any).defbodysuitnumber[String((s as any).temp_set_index ?? 0)] = 0;
      (s as any).temp_wardrobe_msg = 1;
    }
    if (((s as any).hypnoPanty ?? 0) === 1) {
      // TODO-QSP: $defpantytype[temp_set_index] = 'none'
      (s as any).defpantynumber[String((s as any).temp_set_index ?? 0)] = 0;
      (s as any).temp_wardrobe_msg = 1;
    }
    if (((s as any).hypnoBra ?? 0) === 1) {
      // TODO-QSP: $defbratype[temp_set_index] = 'none'
      (s as any).defbranumber[String((s as any).temp_set_index ?? 0)] = 0;
      (s as any).temp_wardrobe_msg = 1;
    }
    if (((s as any).temp_wardrobe_msg ?? 0)) {
      // TODO-QSP: msg '<center>You feel like something about this set has changed but you cannot workout what it is.</...
    }
  }
  if (((s as any).def_clothing_temp ?? 0) !== '') {
    // TODO-QSP: $def_clothing_name[temp_set_index] = $def_clothing_temp
  } else {
    if (((s as any).def_clothing_name ?? 0)?.[String((s as any).temp_set_index ?? 0)] === '') {
      // TODO-QSP: $def_clothing_name[temp_set_index] = 'Custom <<temp_set_index>>'
    }
  }
  // TODO-QSP: gt 'wardrobe', $wloc
  scene.build();
}

function enterDefaultEntryRename(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp_set_index = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  if (((s as any).def_clothing_temp ?? 0) !== '') {
    // TODO-QSP: $def_clothing_name[temp_set_index] = $def_clothing_temp
  } else {
    if (((s as any).def_clothing_name ?? 0)?.[String((s as any).temp_set_index ?? 0)] === '') {
      // TODO-QSP: $def_clothing_name[temp_set_index] = 'Custom <<temp_set_index>>'
    }
  }
  // TODO-QSP: gt 'wardrobe', $wloc
  scene.build();
}

function enterDefaultEntryUp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp_wardrobeVars['i'] = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['j'] = ((s as any).temp_wardrobeVars ?? {})?.['i'] - 1;
  if (((s as any).temp_wardrobeVars ?? 0)?.['j'] < 0) {
    (s as any).temp_wardrobeVars['j'] = 0;
  }
  qspCall(s, 'wardrobe', 'entry_shift_core');
  // TODO-QSP: gt 'wardrobe', $wloc
  scene.build();
}

function enterDefaultEntryDown(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp_wardrobeVars['i'] = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['j'] = (((s as any).temp_wardrobeVars ?? {})?.['i'] + 1) % ((s as any).arrsize ?? 0)('defclothingnumber');
  qspCall(s, 'wardrobe', 'entry_shift_core');
  // TODO-QSP: gt 'wardrobe', $wloc
  scene.build();
}

function enterEntryShiftCore(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_wardrobeVars['clothingtype'] = qspUntranslated(s, "defclothingtype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['clothingnumber'] = qspUntranslated(s, "defclothingnumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['underwear'] = qspUntranslated(s, "defunderwear[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['bodystuittype'] = qspUntranslated(s, "defbodysuittype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['bodystuitnumber'] = qspUntranslated(s, "defbodysuitnumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['bratype'] = qspUntranslated(s, "defbratype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['branumber'] = qspUntranslated(s, "defbranumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['pantytype'] = qspUntranslated(s, "defpantytype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['pantynumber'] = qspUntranslated(s, "defpantynumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['shoetype'] = qspUntranslated(s, "defshoetype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['shoenumber'] = qspUntranslated(s, "defshoenumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['pursetype'] = qspUntranslated(s, "defpursetype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['pursenumber'] = qspUntranslated(s, "defpursenumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['coattype'] = qspUntranslated(s, "defcoattype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['coatnumber'] = qspUntranslated(s, "defcoatnumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  (s as any).temp_wardrobeVars['name'] = qspUntranslated(s, "def_clothing_name[temp_wardrobeVars['i']]", { location: "wardrobe" });
  // TODO-QSP: $defclothingtype[temp_wardrobeVars['i']]  = $defclothingtype[temp_wardrobeVars['j']]
  // TODO-QSP: defclothingnumber[temp_wardrobeVars['i']]  = defclothingnumber[temp_wardrobeVars['j']]
  // TODO-QSP: defunderwear[temp_wardrobeVars['i']]    = defunderwear[temp_wardrobeVars['j']]
  // TODO-QSP: $defbodysuittype[temp_wardrobeVars['i']]  = $defbodysuittype[temp_wardrobeVars['j']]
  // TODO-QSP: defbodysuitnumber[temp_wardrobeVars['i']]  = defbodysuitnumber[temp_wardrobeVars['j']]
  // TODO-QSP: $defbratype[temp_wardrobeVars['i']]      = $defbratype[temp_wardrobeVars['j']]
  // TODO-QSP: defbranumber[temp_wardrobeVars['i']]    = defbranumber[temp_wardrobeVars['j']]
  // TODO-QSP: $defpantytype[temp_wardrobeVars['i']]    = $defpantytype[temp_wardrobeVars['j']]
  // TODO-QSP: defpantynumber[temp_wardrobeVars['i']]    = defpantynumber[temp_wardrobeVars['j']]
  // TODO-QSP: $defbratype[temp_wardrobeVars['i']]      = $defbratype[temp_wardrobeVars['j']]
  // TODO-QSP: defbranumber[temp_wardrobeVars['i']]    = defbranumber[temp_wardrobeVars['j']]
  // TODO-QSP: $defpantytype[temp_wardrobeVars['i']]    = $defpantytype[temp_wardrobeVars['j']]
  // TODO-QSP: defpantynumber[temp_wardrobeVars['i']]    = defpantynumber[temp_wardrobeVars['j']]
  // TODO-QSP: $defshoetype[temp_wardrobeVars['i']]    = $defshoetype[temp_wardrobeVars['j']]
  // TODO-QSP: defshoenumber[temp_wardrobeVars['i']]    = defshoenumber[temp_wardrobeVars['j']]
  // TODO-QSP: $defpursetype[temp_wardrobeVars['i']]    = $defpursetype[temp_wardrobeVars['j']]
  // TODO-QSP: defpursenumber[temp_wardrobeVars['i']]    = defpursenumber[temp_wardrobeVars['j']]
  // TODO-QSP: $defcoattype[temp_wardrobeVars['i']]    = $defcoattype[temp_wardrobeVars['j']]
  // TODO-QSP: defcoatnumber[temp_wardrobeVars['i']]    = defcoatnumber[temp_wardrobeVars['j']]
  // TODO-QSP: $def_clothing_name[temp_wardrobeVars['i']]  = $def_clothing_name[temp_wardrobeVars['j']]
  // TODO-QSP: $defclothingtype[temp_wardrobeVars['j']]  = $temp_wardrobeVars['clothingtype']
  // TODO-QSP: defclothingnumber[temp_wardrobeVars['j']]  = temp_wardrobeVars['clothingnumber']
  // TODO-QSP: defunderwear[temp_wardrobeVars['j']]    = temp_wardrobeVars['underwear']
  // TODO-QSP: $defbodysuittype[temp_wardrobeVars['j']]  = $temp_wardrobeVars['bodystuittype']
  // TODO-QSP: defbodysuitnumber[temp_wardrobeVars['j']]  = temp_wardrobeVars['bodystuitnumber']
  // TODO-QSP: $defbratype[temp_wardrobeVars['j']]      = $temp_wardrobeVars['bratype']
  // TODO-QSP: defbranumber[temp_wardrobeVars['j']]    = temp_wardrobeVars['branumber']
  // TODO-QSP: $defpantytype[temp_wardrobeVars['j']]    = $temp_wardrobeVars['pantytype']
  // TODO-QSP: defpantynumber[temp_wardrobeVars['j']]    = temp_wardrobeVars['pantynumber']
  // TODO-QSP: $defshoetype[temp_wardrobeVars['j']]    = $temp_wardrobeVars['shoetype']
  // TODO-QSP: defshoenumber[temp_wardrobeVars['j']]    = temp_wardrobeVars['shoenumber']
  // TODO-QSP: $defpursetype[temp_wardrobeVars['j']]    = $temp_wardrobeVars['pursetype']
  // TODO-QSP: defpursenumber[temp_wardrobeVars['j']]    = temp_wardrobeVars['pursenumber']
  // TODO-QSP: $defcoattype[temp_wardrobeVars['j']]    = $temp_wardrobeVars['coattype']
  // TODO-QSP: defcoatnumber[temp_wardrobeVars['j']]    = temp_wardrobeVars['coatnumber']
  // TODO-QSP: $def_clothing_name[temp_wardrobeVars['j']]  = $temp_wardrobeVars['name']
  if (((s as any).default_sport_number ?? 0) === ((s as any).temp_wardrobeVars ?? 0)?.['i']) {
    (s as any).default_sport_number = ((s as any).temp_wardrobeVars ?? 0)?.['j'];
  } else {
    if (((s as any).default_sport_number ?? 0) === ((s as any).temp_wardrobeVars ?? 0)?.['j']) {
      (s as any).default_sport_number = ((s as any).temp_wardrobeVars ?? 0)?.['i'];
    }
  }
  if (((s as any).default_school_number ?? 0) === ((s as any).temp_wardrobeVars ?? 0)?.['i']) {
    (s as any).default_school_number = ((s as any).temp_wardrobeVars ?? 0)?.['j'];
  } else {
    if (((s as any).default_school_number ?? 0) === ((s as any).temp_wardrobeVars ?? 0)?.['j']) {
      (s as any).default_school_number = ((s as any).temp_wardrobeVars ?? 0)?.['i'];
    }
  }
  scene.build();
}

function enterDefaultEntryDelete(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp_del_index = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  // TODO-QSP: $defclothingtype[temp_del_index] = ''
  (s as any).defclothingnumber[String((s as any).temp_del_index ?? 0)] = 0;
  (s as any).defunderwear[String((s as any).temp_del_index ?? 0)] = 0;
  // TODO-QSP: $defbodysuittype[temp_del_index] = ''
  (s as any).defbodysuitnumber[String((s as any).temp_del_index ?? 0)] = 0;
  // TODO-QSP: $defbratype[temp_del_index] = ''
  (s as any).defbranumber[String((s as any).temp_del_index ?? 0)] = 0;
  // TODO-QSP: $defpantytype[temp_del_index] = ''
  (s as any).defpantynumber[String((s as any).temp_del_index ?? 0)] = 0;
  // TODO-QSP: $defshoetype[temp_del_index] = ''
  (s as any).defshoenumber[String((s as any).temp_del_index ?? 0)] = 0;
  // TODO-QSP: $defpursetype[temp_del_index] = ''
  (s as any).defpursenumber[String((s as any).temp_del_index ?? 0)] = 0;
  // TODO-QSP: $defcoattype[temp_del_index] = ''
  (s as any).defcoatnumber[String((s as any).temp_del_index ?? 0)] = 0;
  // TODO-QSP: $def_clothing_name[temp_del_index] = ''
  if (((s as any).default_sport_number ?? 0)    === ((s as any).temp_del_index ?? 0)) {
    (s as any).default_sport_number = 0;
  }
  if (((s as any).default_school_number ?? 0)  === ((s as any).temp_del_index ?? 0)) {
    (s as any).default_school_number = 0;
  }
  (s as any).temp_i = ((s as any).temp_del_index ?? 0);
  // TODO-QSP: :bubble_shift_loop
  if (((s as any).def_clothing_name ?? 0)[((s as any).temp_i ?? 0) + 1] !== ''  &&  ((s as any).temp_i ?? 0) % 10 > 0) {
    (s as any).temp_wardrobeVars['i'] = ((s as any).temp_i ?? 0);
    (s as any).temp_wardrobeVars['j'] = ((s as any).temp_i ?? 0) + 1;
    qspCall(s, 'wardrobe', 'entry_shift_core');
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    // TODO-QSP: jump 'bubble_shift_loop'
  }
  // TODO-QSP: gt 'wardrobe', $wloc
  scene.build();
}

function enterDefaultSportSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).default_sport_number = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  // TODO-QSP: gt 'wardrobe', $wloc
  scene.build();
}

function enterDefaultSchoolSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).default_school_number = qspUntranslated(s, "ARGS[1]", { location: "wardrobe" });
  // TODO-QSP: gt 'wardrobe', $wloc
  scene.build();
}

function enterSchoolOutfit(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).default_school_number ?? 0))) {
    qspCall(s, 'outfit', 'restore', 'bed');
    qspCall(s, 'clothing', 'wear', 'gm_school', 6);
  } else {
    qspCall(s, 'wardrobe', 'default_entry_wear', ((s as any).default_school_number ?? 0));
  }
  scene.build();
}

function enterDefaultClothingOptions(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).default_sport_number ?? 0))) {
    scene.text('<font color = "red">✗</font> You have no default sports clothing set, you can set this in your wardrobe.');
  }
  if ((!((s as any).default_school_number ?? 0))) {
    scene.text('<font color = "red">✗</font> You have no default school uniform set, you can set this in your wardrobe.');
  }
  qspCall(s, 'wardrobe', 'is_school');
  qspCall(s, 'wardrobe', 'is_sport');
  if (((s as any).default_school_number ?? 0)[2] >= 5) {
    qspCall(s, 'wardrobe', 'default_sport_wear_act');
    scene.actions([
      { label: 'Change into your regular clothes from your school uniform', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'back_to_regular_clothes');
    if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
      qspCall(s, 'wardrobe', 'back_to_regular_clothes');
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).default_sport_number ?? 0)[2] >= 5) {
      qspCall(s, 'wardrobe', 'default_school_wear_act');
      scene.actions([
        { label: 'Change into your regular clothes from your sportswear', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'back_to_regular_clothes');
    if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
      qspCall(s, 'wardrobe', 'back_to_regular_clothes');
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      qspCall(s, 'wardrobe', 'default_sport_wear_act');
      qspCall(s, 'wardrobe', 'default_school_wear_act');
    }
  }
  scene.build();
}

function enterDefaultSchoolWearAct(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).default_school_number ?? 0) !== 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0)) {
    if (((s as any).defclothingtype ?? 0)?.[String((s as any).default_school_number ?? 0)] === 'gm_school'  &&  ((s as any).defclothingnumber ?? 0)?.[String((s as any).default_school_number ?? 0)] === 6) {
      return;
      scene.actions([
        { label: 'Put on your school uniform', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', 'default_school_wear');
  } },
      ]);
    }
    if (((s as any).temp_clo_not_wear_reason ?? 0) === 'too_small'  ||  ((s as any).temp_clo_not_wear_reason ?? 0) === 'too_large') {
      scene.actions([
        { label: 'Put on your school uniform', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as your outfit doesn''...
  } },
      ]);
    } else {
      if (((s as any).temp_clo_not_wear_reason ?? 0) === 'low_strength') {
        scene.actions([
          { label: 'Put on your school uniform', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as outfit is worn out!...
  } },
        ]);
      } else {
        if (((s as any).temp_clo_not_wear_reason ?? 0) === 'not_owned') {
          scene.actions([
            { label: 'Put on your school uniform', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as you don''t own that...
  } },
          ]);
        } else {
          if (((s as any).default_school_number ?? 0)[2] < 5) {
            scene.actions([
              { label: 'Put on your school uniform', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', 'default_school_wear');
  } },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterDefaultSchoolWear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'wardrobe', 'wardrobe_enter_save_outfit');
  if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
    qspCall(s, 'wardrobe', 'back_to_regular_clothes');
  }
  if (((s as any).default_sport_number ?? 0)[2] >= 5) {
    qspCall(s, 'outfit', 'transfer_backup', 'sport', 'school');
  } else {
    qspCall(s, 'outfit', 'backup', 'school');
  }
  qspCall(s, 'wardrobe', 'default_entry_wear', ((s as any).default_school_number ?? 0));
  qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
  qspCall(s, 'daily_routine', 'finish_step', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
  scene.build();
}

function enterDefaultSportWearAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).default_sport_number ?? 0) !== 0) {
    if ((0 as any) <= 0) {
      scene.actions([
        { label: 'Put on your sports clothes', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as outfit is worn out!...
  } },
      ]);
    } else {
      if ((0 as any) <= 0) {
        scene.actions([
          { label: 'Put on your sports clothes', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as you don''t own that...
  } },
        ]);
      } else {
        if (((s as any).default_sport_number ?? 0)[2] < 5) {
          scene.actions([
            { label: 'Put on your sports clothes', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', 'default_sport_wear');
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterDefaultSportWear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'wardrobe', 'wardrobe_enter_save_outfit');
  if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
    qspCall(s, 'wardrobe', 'back_to_regular_clothes');
  }
  if (((s as any).default_school_number ?? 0)[2] >= 5) {
    qspCall(s, 'outfit', 'transfer_backup', 'school', 'sport');
  } else {
    qspCall(s, 'outfit', 'backup', 'sport');
  }
  qspCall(s, 'wardrobe', 'default_entry_wear', ((s as any).default_sport_number ?? 0));
  qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
  qspCall(s, 'daily_routine', 'finish_step', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
  scene.build();
}

function enterDefaultWardrobeWear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'wardrobe', 'wardrobe_enter_save_outfit');
  if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
    qspCall(s, 'wardrobe', 'back_to_regular_clothes');
  }
  // TODO-QSP: gs 'wardrobe', 'default_entry_wear', ARGS[1]
  qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
  qspCall(s, 'daily_routine', 'finish_step', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
  scene.build();
}

function enterIsSport(s: GameState, scene: SceneBuilder): void {
  (s as any).default_sport_number[2] = 0;
  if (((s as any).clothingworntype ?? 0) === ((s as any).defclothingtype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).clothingwornnumber ?? 0) === ((s as any).defclothingnumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
    (s as any).default_sport_number[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
  }
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_sport_number ?? 0)] === 2) {
    if (((s as any).bodysuitworntype ?? 0) === ((s as any).defbodysuittype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).bodysuitwornnumber ?? 0) === ((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
      (s as any).default_sport_number[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
    }
  } else {
    if (((s as any).pantyworntype ?? 0) === ((s as any).defpantytype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).pantywornnumber ?? 0) === ((s as any).defpantynumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).braworntype ?? 0) === ((s as any).defbratype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).brawornnumber ?? 0) === ((s as any).defbranumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
      (s as any).default_sport_number[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
    }
  }
  if (((s as any).shoeworntype ?? 0) === ((s as any).defshoetype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).shoewornnumber ?? 0) === ((s as any).defshoenumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
    (s as any).default_sport_number[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
  }
  if (((s as any).currentpursetype ?? 0) === ((s as any).defpursetype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).currentpursenumber ?? 0) === ((s as any).defpursenumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
    (s as any).default_sport_number[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
  }
  if (((s as any).coatworntype ?? 0) === ((s as any).defcoattype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).coatwornnumber ?? 0) === ((s as any).defcoatnumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
    (s as any).default_sport_number[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
  }
  scene.build();
}

function enterIsSchool(s: GameState, scene: SceneBuilder): void {
  (s as any).default_school_number[2] = 0;
  if (((s as any).clothingworntype ?? 0) === ((s as any).defclothingtype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).clothingwornnumber ?? 0) === ((s as any).defclothingnumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
    (s as any).default_school_number[2] = ((s as any).default_school_number[2] ?? 0) + (1);
  }
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_school_number ?? 0)] === 2) {
    if (((s as any).bodysuitworntype ?? 0) === ((s as any).defbodysuittype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).bodysuitwornnumber ?? 0) === ((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
      (s as any).default_school_number[2] = ((s as any).default_school_number[2] ?? 0) + (1);
    }
  } else {
    if (((s as any).pantyworntype ?? 0) === ((s as any).defpantytype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).pantywornnumber ?? 0) === ((s as any).defpantynumber ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).braworntype ?? 0) === ((s as any).defbratype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).brawornnumber ?? 0) === ((s as any).defbranumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
      (s as any).default_school_number[2] = ((s as any).default_school_number[2] ?? 0) + (1);
    }
  }
  if (((s as any).shoeworntype ?? 0) === ((s as any).defshoetype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).shoewornnumber ?? 0) === ((s as any).defshoenumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
    (s as any).default_school_number[2] = ((s as any).default_school_number[2] ?? 0) + (1);
  }
  if (((s as any).currentpursetype ?? 0) === ((s as any).defpursetype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).currentpursenumber ?? 0) === ((s as any).defpursenumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
    (s as any).default_school_number[2] = ((s as any).default_school_number[2] ?? 0) + (1);
  }
  if (((s as any).coatworntype ?? 0) === ((s as any).defcoattype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).coatwornnumber ?? 0) === ((s as any).defcoatnumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
    (s as any).default_school_number[2] = ((s as any).default_school_number[2] ?? 0) + (1);
  }
  scene.build();
}

function enterBackToRegularClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'wardrobe', 'wardrobe_enter_save_outfit');
  if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
    if (((s as any).lastwornclothingtype ?? 0)?.['prostitute'] === '') {
      qspCall(s, 'clothing', 'wear', 'last_worn', '', 'check');
      qspCall(s, 'underwear', 'wear', 'last_worn', '', 'check');
      qspCall(s, 'shoes', 'wear', 'last_worn', '', 'check');
      qspCall(s, 'purses', 'wear', 'last_worn', '', 'check');
      qspCall(s, 'coats', 'wear', 'last_worn', '', 'check');
    } else {
      // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['prostitute'], lastwornclothingnumber['prostitute'], 'c...
      if (((s as any).lastwornunderwear ?? 0)?.['prostitute'] === 2) {
        // TODO-QSP: gs 'underwear_bodysuits', 'wear', $lastwornbodysuittype['prostitute'], lastwornbodysuitnumber['prost...
      } else {
        // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['prostitute'], lastwornpantynumber['prostitute'], 'check'
        // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['prostitute'], lastwornbranumber['prostitute'], 'check'
      }
      // TODO-QSP: gs 'shoes', 'wear', $lastwornshoetype['prostitute'], lastwornshoenumber['prostitute'], 'check'
      // TODO-QSP: gs 'purses', 'wear', $lastwornpursetype['prostitute'], lastwornpursenumber['prostitute'], 'check'
      // TODO-QSP: gs 'coats', 'wear', $lastworncoattype['prostitute'], lastworncoatnumber['prostitute'], 'check'
    }
    qspCall(s, 'prostitution_functions', 'work_clothes');
    if (((s as any).prostitute ?? 0)?.['changed_for_work']) {
      (s as any).prostitute['changed_for_work'] = 0;
    }
  } else {
    if (((s as any).default_sport_number ?? 0)[2] >= 5) {
      if (((s as any).lastwornclothingtype ?? 0)?.['sport'] === '') {
        qspCall(s, 'clothing', 'wear', 'last_worn', '', 'check');
        qspCall(s, 'underwear', 'wear', 'last_worn', '', 'check');
        qspCall(s, 'shoes', 'wear', 'last_worn', '', 'check');
        qspCall(s, 'purses', 'wear', 'last_worn', '', 'check');
        qspCall(s, 'coats', 'wear', 'last_worn', '', 'check');
      } else {
        qspCall(s, 'outfit', 'restore', 'sport');
      }
      (s as any).default_sport_number[2] = 0;
    } else {
      if (((s as any).default_school_number ?? 0)[2] >= 5) {
        if (((s as any).lastwornclothingtype ?? 0)?.['school'] === '') {
          qspCall(s, 'clothing', 'wear', 'last_worn', '', 'check');
          qspCall(s, 'underwear', 'wear', 'last_worn', '', 'check');
          qspCall(s, 'shoes', 'wear', 'last_worn', '', 'check');
          qspCall(s, 'purses', 'wear', 'last_worn', '', 'check');
          qspCall(s, 'coats', 'wear', 'last_worn', '', 'check');
        } else {
          qspCall(s, 'outfit', 'restore', 'school');
        }
        (s as any).default_school_number[2] = 0;
      }
    }
  }
  qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'wardrobe_enter_save_outfit':
      enterWardrobeEnterSaveOutfit(s, scene);
      break;
    case 'wardrobe_exit_check_outfit':
      enterWardrobeExitCheckOutfit(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    case 'underwear_options':
      enterUnderwearOptions(s, scene);
      break;
    case 'removeall':
      enterRemoveall(s, scene);
      break;
    case 'default_clothing_line':
      enterDefaultClothingLine(s, scene);
      break;
    case 'default_name_initialise':
      enterDefaultNameInitialise(s, scene);
      break;
    case 'default_template':
      enterDefaultTemplate(s, scene);
      break;
    case 'default_set_name':
      enterDefaultSetName(s, scene);
      break;
    case 'default_actions':
      enterDefaultActions(s, scene);
      break;
    case 'default_actions_page':
      enterDefaultActionsPage(s, scene);
      break;
    case 'default_actions_wear':
      enterDefaultActionsWear(s, scene);
      break;
    case 'default1':
      enterDefault1(s, scene);
      break;
    case 'default2':
      enterDefault2(s, scene);
      break;
    case 'default3':
      enterDefault3(s, scene);
      break;
    case 'default4':
      enterDefault4(s, scene);
      break;
    case 'default5':
      enterDefault5(s, scene);
      break;
    case 'default6':
      enterDefault6(s, scene);
      break;
    case 'default7':
      enterDefault7(s, scene);
      break;
    case 'default8':
      enterDefault8(s, scene);
      break;
    case 'default9':
      enterDefault9(s, scene);
      break;
    case 'default10':
      enterDefault10(s, scene);
      break;
    case 'default_entry_wear':
      enterDefaultEntryWear(s, scene);
      break;
    case 'default_entry_set':
      enterDefaultEntrySet(s, scene);
      break;
    case 'default_entry_rename':
      enterDefaultEntryRename(s, scene);
      break;
    case 'default_entry_up':
      enterDefaultEntryUp(s, scene);
      break;
    case 'default_entry_down':
      enterDefaultEntryDown(s, scene);
      break;
    case 'entry_shift_core':
      enterEntryShiftCore(s, scene);
      break;
    case 'default_entry_delete':
      enterDefaultEntryDelete(s, scene);
      break;
    case 'default_sport_set':
      enterDefaultSportSet(s, scene);
      break;
    case 'default_school_set':
      enterDefaultSchoolSet(s, scene);
      break;
    case 'school_outfit':
      enterSchoolOutfit(s, scene);
      break;
    case 'default_clothing_options':
      enterDefaultClothingOptions(s, scene);
      break;
    case 'default_school_wear_act':
      enterDefaultSchoolWearAct(s, scene);
      break;
    case 'default_school_wear':
      enterDefaultSchoolWear(s, scene);
      break;
    case 'default_sport_wear_act':
      enterDefaultSportWearAct(s, scene);
      break;
    case 'default_sport_wear':
      enterDefaultSportWear(s, scene);
      break;
    case 'default_wardrobe_wear':
      enterDefaultWardrobeWear(s, scene);
      break;
    case 'is_sport':
      enterIsSport(s, scene);
      break;
    case 'is_school':
      enterIsSchool(s, scene);
      break;
    case 'back_to_regular_clothes':
      enterBackToRegularClothes(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const wardrobe: LocationDef = {
  name: 'wardrobe',
  title: 'Please select an option',
  region: 'other',
  enter: enter,
};
