import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wardrobeDefaultPagePref ?? 0) === '') {
    (s as any).wardrobeDefaultPagePref = 'default1';
  }
  qspCall(s, 'shop_utils', 'cleanup');
  scene.text('<center><b>Please select an option</b></center>');
  scene.img('images/system/icons/clothing/clothes.png');
  scene.img('images/system/icons/clothing/default.png');
  scene.img('images/system/icons/clothing/organize.png');
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    scene.text('<center><b>You put the ' + ((((s as any).pursepantytype ?? 0) !== '') ? ('panties') : ('')) + ((((s as any).pursepantytype ?? 0) !== ''  &&  ((s as any).pursebratype ?? 0) !== '') ? (' and ') : ('')) + ((((s as any).pursebratype ?? 0) !== '') ? ('bra') : ('')) + ' from your purse back in the wardrobe.</b></center><br>');
    (s as any).pursepantytype = undefined;
    (s as any).pursepantynumber = undefined;
    (s as any).pursebratype = undefined;
    (s as any).pursebranumber = undefined;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeEnterSaveOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).wardrobeDefaultPagePref ?? 0) === 'currentOutfit') {
    qspGoto(s, 'wardrobe', 'main');
  } else {
    if (((s as any).wardrobeDefaultPagePref ?? 0) === 'viewClothing') {
      qspGoto(s, 'clothing_view', 'view_lists_list', 'wardrobe');
    } else {
      if (((s as any).wardrobeDefaultPagePref ?? 0) !== '') {
        qspGoto(s, 'wardrobe', ((s as any).wardrobeDefaultPagePref ?? ''));
      }
    }
  }
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWardrobeExitCheckOutfit(st, scene); (st as any).locArgs = __savedLocArgs; }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Current outfit', goto: ['wardrobe', 'main'] },
    { label: 'Saved outfit sets', handler: (st: GameState) => {
    if (((st as any).wardrobeDefaultPagePref ?? 0) !== 'currentOutfit'  &&  ((st as any).wardrobeDefaultPagePref ?? 0) !== 'viewClothing') {
      qspGoto(st, 'wardrobe', ((st as any).wardrobeDefaultPagePref ?? ''));
    } else {
      qspGoto(st, 'wardrobe', ((st as any).wloc ?? ''));
    }
  } },
    { label: 'Open wardrobe', goto: ['clothing_view', 'view_lists_list'] },
  ]);
  scene.build();
}

function enterWardrobeEnterSaveOutfit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).currentpursetype ?? 0) === '') {
    (s as any).currentpursetype = 'none';
  }
  (s as any).enterclothingworntype = ((s as any).clothingworntype ?? 0);
  (s as any).enterclothingwornnumber = ((s as any).clothingwornnumber ?? 0);
  (s as any).enterbodysuitworntype = ((s as any).bodysuitworntype ?? 0);
  (s as any).enterbodysuitwornnumber = ((s as any).bodysuitwornnumber ?? 0);
  (s as any).enterpantyworntype = ((s as any).pantyworntype ?? 0);
  (s as any).enterpantywornnumber = ((s as any).pantywornnumber ?? 0);
  (s as any).enterbraworntype = ((s as any).braworntype ?? 0);
  (s as any).enterbrawornnumber = ((s as any).brawornnumber ?? 0);
  (s as any).entershoeworntype = ((s as any).shoeworntype ?? 0);
  (s as any).entershoewornnumber = ((s as any).shoewornnumber ?? 0);
  (s as any).entercurrentpursetype = ((s as any).currentpursetype ?? 0);
  (s as any).entercurrentpursenumber = ((s as any).currentpursenumber ?? 0);
  (s as any).entercoatworntype = ((s as any).coatworntype ?? 0);
  (s as any).entercoatwornnumber = ((s as any).coatwornnumber ?? 0);
  scene.build();
}

function enterWardrobeExitCheckOutfit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).currentpursetype ?? 0) === '') {
    (s as any).currentpursetype = 'none';
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
  (s as any).wardrobe_outfit_changed = undefined;
  (s as any).enterclothingworntype = undefined;
  (s as any).enterbodysuitworntype = undefined;
  (s as any).enterpantyworntype = undefined;
  (s as any).enterbraworntype = undefined;
  (s as any).entershoeworntype = undefined;
  (s as any).entercurrentpursetype = undefined;
  (s as any).entercoatworntype = undefined;
  (s as any).enterclothingwornnumber = undefined;
  (s as any).enterbodysuitwornnumber = undefined;
  (s as any).enterpantywornnumber = undefined;
  (s as any).enterbrawornnumber = undefined;
  (s as any).entershoewornnumber = undefined;
  (s as any).entercurrentpursenumber = undefined;
  (s as any).entercoatwornnumber = undefined;
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wloc ?? 0) === '') {
    (s as any).wloc = 'default1';
  }
  qspCall(s, 'stat', '');
  if (((s as any).CloBra ?? 0) === 1) {
    qspCall(s, 'bras', 'remove');
  }
  if (((s as any).CloPanties ?? 0) === 1) {
    qspCall(s, 'panties', 'remove');
  }
  if (((s as any).sports_clothing_name ?? 0) === '') {
    (s as any).sports_clothing_name = 'default sports outfit';
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
    (s as any).wardrobeSetDefault = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar \u0027$wardrobeDefaultPagePref\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove saved default wardrobe page</a>';
  } else {
    (s as any).wardrobeSetDefault = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $wardrobeDefaultPagePref = \u0027currentOutfit\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027main\u0027); return false;">Set here as default wardrobe page</a>';
  }
  scene.text(`<center>${((s as any).wardrobeSetDefault ?? '')}</center>`);
  (s as any).wardrobeSetDefault = undefined;
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    scene.text('<center>You put the ' + ((((s as any).pursepantytype ?? 0) !== '') ? ('panties') : ('')) + ((((s as any).pursepantytype ?? 0) !== ''  &&  ((s as any).pursebratype ?? 0) !== '') ? (' and ') : ('')) + ((((s as any).pursebratype ?? 0) !== '') ? ('bra') : ('')) + ' from your purse back in the wardrobe.</center><br>');
    (s as any).pursepantytype = undefined;
    (s as any).pursepantynumber = undefined;
    (s as any).pursebratype = undefined;
    (s as any).pursebranumber = undefined;
  }
  scene.text(`<center><font color="maroon">These are the clothes you are currently wearing - Click on an item to change it</font></center><center><table border=0 cellspacing=${((s as any).ward_img_hgt ?? '')/25} cellpadding=5>`);
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    scene.text('<th>Bra worn</th><th>Outfit worn</th><th>Coat (only worn outside when cold)</th>');
    scene.img(`${qspFunc(s, '$body_image', 'bra')}`);
  } else {
    scene.text('<th>Bodysuit worn</th><th>Outfit worn</th><th>Coat (only worn outside when cold)</th>');
    scene.img(`${qspFunc(s, '$body_image', 'bodysuit')}`);
  }
  if (((s as any).coatworntype ?? 0) === 'none') {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027coat_view\u0027, \u0027view_grid\u0027, \u0027wardrobe\u0027); return false;">Search the wardrobe</a>');
  } else {
    scene.img(`${qspFunc(s, '$body_image', 'coat')}`);
  }
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    scene.text('</center></td><tr><td><center>');
    if (((s as any).braworntype ?? 0) !== 'none') {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027bras\u0027, \u0027remove\u0027 & gt \u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove</a>');
    } else {
      scene.text('Remove');
    }
    scene.text('</center></td><td><center>');
  } else {
    scene.text('</center></td><tr><td><center>');
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027clothing\u0027, \u0027strip\u0027 & gt \u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove</a>');
  } else {
    scene.text('Remove');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).coatworntype ?? 0) !== 'none') {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027coats\u0027, \u0027remove\u0027 & gt \u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove</a>');
  } else {
    scene.text('Remove');
  }
  scene.text('</center></td>');
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    scene.text('<tr><th>Panties worn</th><th>Shoes (Only worn outside)</th><th>Purse worn</th>');
    scene.img(`${qspFunc(s, '$body_image', 'panties')}`);
  } else {
    scene.text('<tr><th>Shoes (Only worn outside)</th><th>Purse worn</th>');
    scene.img(`${qspFunc(s, '$body_image', 'shoes')}`);
  }
  if (((s as any).bag ?? 0) === 1) {
    scene.img(`${qspFunc(s, '$purse_image', ((s as any).currentpursetype ?? ''), ((s as any).currentpursenumber ?? ''))}`);
  } else {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027purse_view\u0027, \u0027view_grid\u0027, \u0027wardrobe\u0027); return false;">Search the wardrobe</a>');
  }
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    scene.text('</center></td><tr><td><center>');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027panties\u0027, \u0027remove\u0027 & gt \u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove</a>');
    } else {
      scene.text('Remove');
    }
    scene.text('</center></td><td><center>');
  } else {
    scene.text('</center></td><tr><td><center>');
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.underwear ??= {})\u0027type\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027underwear_bodysuits\u0027, \u0027remove\u0027 & underwear[\u0027type\u0027] = 0 & gt \u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove</a>');
    scene.text('</center></td><td><center>');
  }
  if (((s as any).shoeworntype ?? 0) !== 'none') {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027shoes\u0027, \u0027strip\u0027 & gt \u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove</a>');
  } else {
    scene.text('Remove');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).bag ?? 0) === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027purses\u0027, \u0027remove\u0027 & gt \u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove</a>');
  } else {
    scene.text('Remove');
  }
  scene.text('</center></td><tr><td><td><center>');
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  (((s as any).coatworntype ?? 0) !== 'none'  ||  ((s as any).bag ?? 0) > 0))  ||  (((s as any).coatworntype ?? 0) !== 'none'  &&  ((s as any).bag ?? 0) > 0)) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027removeall\u0027 & gt \u0027wardrobe\u0027, \u0027main\u0027); return false;">Remove all items</a>');
  } else {
    scene.text('Remove all items');
  }
  scene.text('<center><font color="grey">Save/load outfits with "Managed saved clothing sets".</font></center>');
  scene.text('<td></center></td></table></center>');
  scene.actions([
    { label: 'Close wardrobe', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWardrobeExitCheckOutfit(st, scene); (st as any).locArgs = __savedLocArgs; }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Strip all clothing', handler: (st: GameState) => {
    qspCall(st, 'bras', 'remove');
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'panties', 'remove');
    qspCall(st, 'shoes', 'strip');
    qspGoto(st, 'wardrobe', 'main');
  } },
    { label: 'Set image size for this view', handler: (st: GameState) => {
    (st as any).ward_img_hgt = window.prompt("Enter height in pixels you want for images on this page <br>(Default 150, min 50, max 500)") ?? '';
    if (((st as any).ward_img_hgt ?? 0) < 50) {
      (st as any).ward_img_hgt = 50;
    } else {
      if (((st as any).ward_img_hgt ?? 0) > 500) {
        (st as any).ward_img_hgt = 500;
      }
    }
    qspGoto(st, 'wardrobe', 'main');
  } },
  ]);
  scene.build();
}

function enterUnderwearOptions(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Please select an option</b></center>');
  scene.img('images/system/icons/clothing/bodysuits.png');
  if (String((s as any).locArgs?.[1] ?? '') === 'bra'  ||  String((s as any).locArgs?.[1] ?? '') === 'full') {
    scene.img('images/system/icons/clothing/bras.png');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'panties'  ||  String((s as any).locArgs?.[1] ?? '') === 'full') {
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
  (s as any).default_clothing_suma = qspUntranslated(s, "{", { location: "wardrobe" });
  (s as any).result = ((s as any).defclothingnumber ?? 0)[((s as any).locArgs?.[0] ?? 0)]+ ((s as any).defbranumber ?? 0)[((s as any).locArgs?.[0] ?? 0)] + ((s as any).defpantynumber ?? 0)[((s as any).locArgs?.[0] ?? 0)] + ((s as any).defshoenumber ?? 0)[((s as any).locArgs?.[0] ?? 0)] + ((s as any).defpursenumber ?? 0)[((s as any).locArgs?.[0] ?? 0)] + ((s as any).defcoatnumber ?? 0)[((s as any).locArgs?.[0] ?? 0)];
  scene.build();
}

function enterDefaultClothingLine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'clothing');
  (s as any).result = '<TR bgcolor=' + ((s as any).temp_bcolor ?? 0) + '>';
  (s as any).result = ((s as any).result ?? 0) + ('<TD><b>' + (((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0) + '</b></TD>');
  if (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="images/pc/items/blank.jpg"></TD>');
  } else {
    qspCall(s, 'clothing_attributes', '', (((s as any).defclothingtype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="' + qspFunc(s, '$clothing_image', (((s as any).defclothingtype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0)) + '"></TD>');
  }
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_entry ?? 0)] === 2) {
    if (((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="images/pc/items/blank.jpg"></TD>');
    } else {
      qspCall(s, 'underwear_attributes', '', (((s as any).defbodysuittype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0) + '_bodysuits', (((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="' + qspFunc(s, '$pcs_outfit_image', (((s as any).defbodysuittype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0) + '_bodysuits', (((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0)) + '"></TD>');
    }
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="images/pc/items/blank.jpg"></TD>');
  } else {
    if (((s as any).defbranumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="images/pc/items/blank.jpg"></TD>');
    } else {
      qspCall(s, 'underwear_attributes', '', (((s as any).defbratype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0) + '_bras', (((s as any).defbranumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="' + qspFunc(s, '$bra_image', (((s as any).defbratype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defbranumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0)) + '"></TD>');
    }
    if (((s as any).defpantynumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="images/pc/items/blank.jpg"></TD>');
    } else {
      qspCall(s, 'underwear_attributes', '', (((s as any).defpantytype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0) + '_panties', (((s as any).defpantynumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="' + qspFunc(s, '$panty_image', (((s as any).defpantytype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defpantynumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0)) + '"></TD>');
    }
  }
  if (((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="images/pc/items/blank.jpg"></TD>');
  } else {
    qspCall(s, 'shoe_attributes', '', (((s as any).defshoetype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="' + qspFunc(s, '$shoe_image', (((s as any).defshoetype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0)) + '"></TD>');
  }
  if (((s as any).defcoatnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="images/pc/items/blank.jpg"></TD>');
  } else {
    qspCall(s, 'coat_attributes', '', (((s as any).defcoattype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defcoatnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="' + qspFunc(s, '$coat_image', (((s as any).defcoattype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defcoatnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0)) + '"></TD>');
  }
  if (((s as any).defpursenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="images/pc/items/blank.jpg"></TD>');
  } else {
    qspCall(s, 'purse_attributes', '', (((s as any).defpursetype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defpursenumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    (s as any).result = ((s as any).result ?? 0) + ('<TD><img width="100" src="' + qspFunc(s, '$purse_image', (((s as any).defpursetype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defpursenumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0)) + '"></TD>');
  }
  (s as any).result = ((s as any).result ?? 0) + ('<TD><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027default_entry_wear\u0027, String((s as any).default_entry ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/wear.png"></a></TD>');
  (s as any).result = ((s as any).result ?? 0) + ('<TD><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027default_entry_set\u0027, String((s as any).default_entry ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/overwrite.png"></a></TD>');
  (s as any).result = ((s as any).result ?? 0) + ('<TD><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027default_entry_rename\u0027, String((s as any).default_entry ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/rename.png"></a></TD>');
  (s as any).result = ((s as any).result ?? 0) + ('<TD><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027default_entry_delete\u0027, String((s as any).default_entry ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/delete_on.png"></a></TD>');
  if (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0  ||  ((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<TD></TD><TR>');
  } else {
    if ((((s as any).ShoStyle2 ?? 0) === 2  ||  ((s as any).ShoSport ?? 0) === 1)  &&  (((s as any).CloStyle2 ?? 0) === 6  ||  ((s as any).CloSport ?? 0) === 1)) {
      if (((s as any).default_sport_number ?? 0) !== ((s as any).default_entry ?? 0)) {
        (s as any).result = ((s as any).result ?? 0) + ('<TD><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027default_sport_set\u0027, String((s as any).default_entry ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/sport_off.png"></a></TD><TR>');
      } else {
        (s as any).result = ((s as any).result ?? 0) + ('<TD><img src="images/system/icons/clothing/sport.png"></TD><TR>');
      }
    } else {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (((s as any).CloStyle2 ?? 0) === 4  ||  ((s as any).CloSchool ?? 0) === 1)) {
        if (((s as any).default_school_number ?? 0) !== ((s as any).default_entry ?? 0)) {
          (s as any).result = ((s as any).result ?? 0) + ('<TD><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027default_school_set\u0027, String((s as any).default_entry ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/school_off.png"></a></TD><TR>');
        } else {
          (s as any).result = ((s as any).result ?? 0) + ('<TD><img src="images/system/icons/clothing/school.png"></TD><TR>');
        }
      } else {
        (s as any).result = ((s as any).result ?? 0) + ('<TD></TD><TR>');
      }
    }
  }
  return;
  scene.build();
}

function enterDefaultNameInitialise(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothing_default_page ?? 0)[1] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[1] = 'Set 1';
  }
  if (((s as any).clothing_default_page ?? 0)[2] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[2] = 'Set 2';
  }
  if (((s as any).clothing_default_page ?? 0)[3] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[3] = 'Set 3';
  }
  if (((s as any).clothing_default_page ?? 0)[4] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[4] = 'Set 4';
  }
  if (((s as any).clothing_default_page ?? 0)[5] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[5] = 'Set 5';
  }
  if (((s as any).clothing_default_page ?? 0)[6] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[6] = 'Set 6';
  }
  if (((s as any).clothing_default_page ?? 0)[7] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[7] = 'Set 7';
  }
  if (((s as any).clothing_default_page ?? 0)[8] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[8] = 'Set 8';
  }
  if (((s as any).clothing_default_page ?? 0)[9] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[9] = 'Set 9';
  }
  if (((s as any).clothing_default_page ?? 0)[10] === '') {
    ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[10] = 'Set 10';
  }
  scene.build();
}

function enterDefaultTemplate(s: GameState, scene: SceneBuilder): void {
  (s as any).clothing_default_page = ((s as any).locArgs?.[1] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefaultNameInitialise(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  scene.img('images/system/icons/clothing/clothes.png');
  if (((s as any).wardrobeDefaultPagePref ?? 0) === ((s as any).wloc ?? 0)) {
    (s as any).wardrobeSetDefault = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: killvar \u0027$wardrobeDefaultPagePref\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, String((s as any).wloc ?? \u0027\u0027)); return false;">Remove saved default wardrobe page</a>';
  } else {
    (s as any).wardrobeSetDefault = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $wardrobeDefaultPagePref = $wloc */ return s; }); window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, String((s as any).wloc ?? \u0027\u0027)); return false;">Set here as default wardrobe page</a>';
  }
  scene.text(`<center>${((s as any).wardrobeSetDefault ?? '')}</center>`);
  (s as any).wardrobeSetDefault = undefined;
  scene.text('<center><table><th>Name</th><th>Outfit</th><th>Bra/Bodysuit</th><th>Panties</th><th>Shoes</th><th>Coat</th><th>Purse</th><th></th><th></th><th></th><th></th><th></th><tr>');
  (s as any).temp = ((s as any).default_entry ?? 0);
  do {
    if ((0 as any) !== 0) {
      scene.text(qspFunc(s, 'wardrobe', 'default_clothing_line'));
    }
    (s as any).default_entry = ((s as any).default_entry ?? 0) + (1);
    (s as any).default_entry = ((s as any).temp ?? 0);
    do {
      if ((!(0 as any))) {
        scene.text(qspFunc(s, 'wardrobe', 'default_clothing_line'));
      }
      (s as any).default_entry = ((s as any).default_entry ?? 0) + (1);
      scene.text('</table></center>');
      (s as any).temp_bcolor = undefined;
    } while (((s as any).default_entry ?? 0) <= ((s as any).default_entry ?? 0)[1]);
  } while (((s as any).default_entry ?? 0) <= ((s as any).default_entry ?? 0)[1]);
  scene.build();
}

function enterDefaultSetName(s: GameState, scene: SceneBuilder): void {
  ((s as any).clothing_default_page = (s as any).clothing_default_page ?? {})[String((s as any).clothing_default_page ?? 0)] = window.prompt("Enter new name for this set") ?? '';
  qspGoto(s, 'wardrobe', 'default' + ((s as any).clothing_default_page ?? 0) + '');
  scene.build();
}

function enterDefaultActions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWardrobeExitCheckOutfit(st, scene); (st as any).locArgs = __savedLocArgs; }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Select outfit to wear', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDefaultActionsWear(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'wardrobe', ((st as any).wardrobeDefaultPagePref ?? '')); } },
    ]);
  } },
    { label: 'Choose another page', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDefaultActionsPage(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'wardrobe', ((st as any).wardrobeDefaultPagePref ?? '')); } },
    ]);
  } },
    { label: 'Rename this set', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', '');
  } },
  ]);
  scene.build();
}

function enterDefaultActionsPage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[1] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default1'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 2) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[2] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default2'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 3) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[3] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default3'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 4) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[4] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default4'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 5) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[5] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default5'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 6) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[6] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default6'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 7) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[7] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default7'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 8) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[8] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default8'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 9) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[9] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default9'] },
    ]);
  }
  if (String((s as any).locArgs?.[1] ?? '') !== 10) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'See ' + String((((s as any).clothing_default_page ?? 0)?.[10] ?? '') ?? '') + ' set', goto: ['wardrobe', 'default10'] },
    ]);
  }
  scene.build();
}

function enterDefaultActionsWear(s: GameState, scene: SceneBuilder): void {
  (s as any).default_entry = ((s as any).default_entry ?? 0) - (10);
  (s as any).i = ((s as any).default_entry ?? 0);
  do {
    if ((0 as any) !== 0) {
      (s as any).var_default_actions_wear = 0;
      qspFunc(s, 'var_default_actions_wear');
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    (s as any).i = undefined;
    (s as any).var_default_actions_wear = undefined;
  } while (((s as any).i ?? 0) <= ((s as any).default_entry ?? 0)[1]);
  scene.build();
}

function enterDefault1(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default1';
  (s as any).default_entry = 1;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 10;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[1] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default2';
  (s as any).default_entry = 11;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 20;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[2] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault3(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default3';
  (s as any).default_entry = 21;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 30;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[3] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault4(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default4';
  (s as any).default_entry = 31;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 40;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[4] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault5(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default5';
  (s as any).default_entry = 41;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 50;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[5] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault6(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default6';
  (s as any).default_entry = 51;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 60;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[6] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 6]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 6]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault7(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default7';
  (s as any).default_entry = 61;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 70;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[7] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 7]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 7]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault8(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default8';
  (s as any).default_entry = 71;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 80;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[8] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 8]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 8]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault9(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default9';
  (s as any).default_entry = 81;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 90;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[9] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 9]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 9]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefault10(s: GameState, scene: SceneBuilder): void {
  (s as any).wloc = 'default10';
  (s as any).default_entry = 91;
  ((s as any).default_entry = (s as any).default_entry ?? {})[1] = 100;
  ((s as any).default_entry = (s as any).default_entry ?? {})[2] = (((s as any).clothing_default_page ?? 0)?.[10] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 10]; enterDefaultActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 10]; enterDefaultTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterDefaultEntryWear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).default_entry = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_clo_not_wear_reason = '';
  if (((s as any).defclothingtype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'nude'  ||  ((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    qspCall(s, 'clothing', 'strip');
  } else {
    (s as any).temp_clo_not_wear_reason = qspFunc(s, 'clothing', 'not_wear_reason', (((s as any).defclothingtype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    if (((s as any).temp_clo_not_wear_reason ?? 0) === '') {
      qspCall(s, 'clothing', 'wear', (((s as any).defclothingtype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), 'check');
    } else {
      qspCall(s, 'clothing', 'strip');
    }
  }
  (s as any).temp_bra_not_wear_reason = '';
  (s as any).temp_panties_not_wear_reason = '';
  (s as any).temp_bodysuit_not_wear_reason = '';
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_entry ?? 0)] === 2) {
    if (((s as any).defbodysuittype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      qspCall(s, 'underwear_bodysuits', 'strip');
      ((s as any).defunderwear = (s as any).defunderwear ?? {})[String((s as any).default_entry ?? 0)] = 0;
    } else {
      (s as any).temp_bodysuit_not_wear_reason = qspFunc(s, 'underwear_bodysuits', 'not_wear_reason', (((s as any).defbodysuittype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      if (((s as any).temp_bodysuit_not_wear_reason ?? 0) === '') {
        qspCall(s, 'underwear_bodysuits', 'wear', (((s as any).defbodysuittype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      } else {
        qspCall(s, 'underwear_bodysuits', 'strip');
      }
    }
  } else {
    if (((s as any).defbratype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defbranumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      qspCall(s, 'bras', 'strip');
    } else {
      (s as any).temp_bra_not_wear_reason = qspFunc(s, 'bras', 'not_wear_reason', (((s as any).defbratype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defbranumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      if (((s as any).temp_bra_not_wear_reason ?? 0) === '') {
        qspCall(s, 'bras', 'wear', (((s as any).defbratype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defbranumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      } else {
        qspCall(s, 'bras', 'strip');
      }
    }
    if (((s as any).defpantytype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defpantynumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
      qspCall(s, 'panties', 'strip');
    } else {
      (s as any).temp_panties_not_wear_reason = qspFunc(s, 'panties', 'not_wear_reason', (((s as any).defpantytype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defpantynumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      if (((s as any).temp_panties_not_wear_reason ?? 0) === '') {
        qspCall(s, 'panties', 'wear', (((s as any).defpantytype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defpantynumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
      } else {
        qspCall(s, 'panties', 'strip');
      }
    }
  }
  (s as any).temp_sho_not_wear_reason = '';
  if (((s as any).defshoetype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    qspCall(s, 'shoes', 'strip');
  } else {
    (s as any).temp_sho_not_wear_reason = qspFunc(s, 'shoes', 'not_wear_reason', (((s as any).defshoetype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    if (((s as any).temp_sho_not_wear_reason ?? 0) === '') {
      qspCall(s, 'shoes', 'wear', (((s as any).defshoetype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defshoenumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    } else {
      qspCall(s, 'shoes', 'strip');
    }
  }
  (s as any).temp_purse_not_wear_reason = '';
  if (((s as any).defpursetype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defpursenumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    qspCall(s, 'purses', 'strip');
  } else {
    (s as any).temp_purse_not_wear_reason = qspFunc(s, 'purses', 'not_wear_reason', (((s as any).defpursetype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defpursenumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    if (((s as any).temp_purse_not_wear_reason ?? 0) === '') {
      qspCall(s, 'purses', 'wear', (((s as any).defpursetype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defpursenumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    } else {
      qspCall(s, 'purses', 'strip');
    }
  }
  (s as any).temp_coat_not_wear_reason = '';
  if (((s as any).defcoattype ?? 0)?.[String((s as any).default_entry ?? 0)] === 'none'  ||  ((s as any).defcoatnumber ?? 0)?.[String((s as any).default_entry ?? 0)] === 0) {
    qspCall(s, 'coats', 'strip');
  } else {
    (s as any).temp_coat_not_wear_reason = qspFunc(s, 'coats', 'not_wear_reason', (((s as any).defcoattype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defcoatnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
    if (((s as any).temp_coat_not_wear_reason ?? 0) === '') {
      qspCall(s, 'coats', 'wear', (((s as any).defcoattype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defcoatnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
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
              ((s as any).defbodysuittype = (s as any).defbodysuittype ?? {})[String((s as any).default_entry ?? 0)] = 'none';
              ((s as any).defbodysuitnumber = (s as any).defbodysuitnumber ?? {})[String((s as any).default_entry ?? 0)] = 0;
              ((s as any).defunderwear = (s as any).defunderwear ?? {})[String((s as any).default_entry ?? 0)] = 0;
              scene.text('<center>You feel like something about this set has changed but you cannot workout what it is.</center>');
            } else {
              qspCall(s, 'underwear_bodysuits', 'wear', (((s as any).defbodysuittype ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0), (((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_entry ?? 0)] ?? 0));
            }
          } else {
            if (((s as any).temp_bodysuit_not_wear_reason ?? 0) !== '') {
              scene.text('ERROR! This should not be reached.');
              scene.text(`You can't wear this bodysuit because ${((s as any).temp_bodysuit_not_wear_reason ?? '')}, but the text for this has not be written.`);
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
            scene.text(`You can't wear this bra because ${((s as any).temp_bra_not_wear_reason ?? '')}, but the text for this has not be written.`);
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
            scene.text(`You can't wear these panties because ${((s as any).temp_panties_not_wear_reason ?? '')}, but the text for this has not be written.`);
            scene.text('Please contact a developer');
          }
        }
      }
    }
    if ((((s as any).temp_panties_not_wear_reason ?? 0) === 'hypno'  ||  ((s as any).temp_bra_not_wear_reason ?? 0) === 'hypno')) {
      (s as any).temp_hypno_items = ((((s as any).temp_bra_not_wear_reason ?? 0) === 'hypno'  &&  ((s as any).temp_panties_not_wear_reason ?? 0) === 'hypno') ? ('bra and panties') : (((((s as any).temp_bra_not_wear_reason ?? 0) === 'hypno') ? ('bra') : ('panties'))));
      scene.text(`You reach for your ${((s as any).temp_hypno_items ?? '')} but something holds you back. You hate wearing ${((s as any).temp_hypno_items ?? '')}, so why put them on?`);
      qspCall(s, 'willpower', 'misc', 'resist', 'easy');
      if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
        (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0));
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Put them on anyways', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Put them on anyways', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    if (((st as any).braworntype ?? 0) !== ((st as any).defbratype ?? 0)?.[String((st as any).default_entry ?? 0)]) {
      qspCall(st, 'bras', 'wear', (((st as any).defbratype ?? 0)?.[String((st as any).default_entry ?? 0)] ?? 0), (((st as any).defbranumber ?? 0)?.[String((st as any).default_entry ?? 0)] ?? 0));
    }
    if (((st as any).pantyworntype ?? 0) !== ((st as any).defpantytype ?? 0)?.[String((st as any).default_entry ?? 0)]) {
      qspCall(st, 'panties', 'wear', (((st as any).defpantytype ?? 0)?.[String((st as any).default_entry ?? 0)] ?? 0), (((st as any).defpantynumber ?? 0)?.[String((st as any).default_entry ?? 0)] ?? 0));
    }
    qspGoto(st, 'wardrobe', ((st as any).wloc ?? ''));
  } },
        ]);
      }
      (s as any).temp_hypno_items = undefined;
      scene.actions([
        { label: 'Leave them off', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 21) + 0) < ((st as any).hypnoStrength ?? 0)) {
      if (((st as any).braworntype ?? 0) !== ((st as any).defbratype ?? 0)?.[String((st as any).default_entry ?? 0)]) {
        ((st as any).defbratype = (st as any).defbratype ?? {})[String((st as any).default_entry ?? 0)] = 'none';
        ((st as any).defbranumber = (st as any).defbranumber ?? {})[String((st as any).default_entry ?? 0)] = 0;
      }
      if (((st as any).pantyworntype ?? 0) !== ((st as any).defpantytype ?? 0)?.[String((st as any).default_entry ?? 0)]) {
        ((st as any).defpantytype = (st as any).defpantytype ?? {})[String((st as any).default_entry ?? 0)] = 'none';
        ((st as any).defpantynumber = (st as any).defpantynumber ?? {})[String((st as any).default_entry ?? 0)] = 0;
      }
      scene.text('<center>You feel like something about this set has changed but you cannot work out what it is.</center>');
    }
    qspGoto(st, 'wardrobe', ((st as any).wloc ?? ''));
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
          scene.text(`You try to take a step in these killer heels and almost break your neck. You can't walk in your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit. Guess you will have to find something else to wear.`);
        } else {
          if (((s as any).temp_sho_not_wear_reason ?? 0) !== '') {
            scene.text('ERROR! This should not be reached.');
            scene.text(`You can't wear these shoes because ${((s as any).temp_sho_not_wear_reason ?? '')}, but the text for this has not be written.`);
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
        scene.text(`You can't wear this purse because ${((s as any).temp_purse_not_wear_reason ?? '')}, but the text for this has not be written.`);
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
          scene.text(`You can't wear this coat because ${((s as any).temp_coat_not_wear_reason ?? '')}, but the text for this has not be written.`);
          scene.text('Please contact a developer');
        }
      }
    }
  }
  if (((s as any).temp_clo_not_wear_reason ?? 0) === 'not_owned') {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip2.jpg');
    scene.text(`As you go to pull your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit out of your wardrobe you remember you don't own that piece of clothing anymore. Maybe you should buy it again? Guess you will have to find something else to wear.`);
    scene.actions([
      { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'wardrobe', ((st as any).wloc ?? '')); } },
    ]);
  } else {
    if (((s as any).temp_clo_not_wear_reason ?? 0) === 'is_lost') {
      scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip2.jpg');
      scene.text(`As you go to pull your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit out of your wardrobe you remember that you lost that piece of clothing. Maybe you can find the missing clothes somewhere? Guess you will have to find something else to wear.`);
      scene.actions([
        { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'wardrobe', ((st as any).wloc ?? '')); } },
      ]);
    } else {
      if (((s as any).temp_clo_not_wear_reason ?? 0) === 'not_in_wardrobe') {
        scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/strip/strip2.jpg');
        scene.text(`As you go to pull your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit out of your wardrobe you notice that it's not there. You should move it back into your wardrobe from your storage or unwanted pile.`);
        scene.actions([
          { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'wardrobe', ((st as any).wloc ?? '')); } },
        ]);
      } else {
        if (((s as any).temp_clo_not_wear_reason ?? 0) === 'low_strength') {
          scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game_strip16.mp4');
          scene.text(`Your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit has worn out and can't be used anymore. Guess you will have to find something else to wear.`);
          scene.actions([
            { label: 'Strip out of worn out clothing', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDefaultEntryDelete(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    qspGoto(st, 'wardrobe', ((st as any).wloc ?? ''));
  } },
          ]);
        } else {
          if (((s as any).temp_clo_not_wear_reason ?? 0) === 'low_inhib') {
            scene.img('images/locations/pavlovsk/trainstation/bimbo.strip6.mp4');
            scene.text(`You don't feel daring enough to wear your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit. Maybe you will be confident enough in the future? Guess you will have to find something else to wear.`);
            scene.actions([
              { label: 'Strip out of revealing clothing', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspGoto(st, 'wardrobe', ((st as any).wloc ?? ''));
  } },
            ]);
          } else {
            if (((s as any).temp_clo_not_wear_reason ?? 0) === 'too_small'  ||  ((s as any).temp_clo_not_wear_reason ?? 0) === 'too_large') {
              if (((s as any).temp_clo_not_wear_reason ?? 0) === 'too_small') {
                scene.img('images/locations/pavlovsk/clinic/therapist/dressup.mp4');
              } else {
                scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 4) + 1)}.mp4`);
              }
              scene.text(`As you put on your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit you notice it doesn't fit correctly anymore. It's ` + ((((s as any).temp_clo_not_wear_reason ?? 0) === 'too_small') ? ('unbearably tight and uncomfortable to wear.') : ('extremely loose and won\'t stay in place no matter how hard you try.')) + ' You must have ' + ((((s as any).temp_clo_not_wear_reason ?? 0) === 'too_small') ? ('gained') : ('lost')) + ' some weight since this was purchased or last tailored. You will have to get this clothing resized before you can wear it again.');
              (s as any).temp4 = undefined;
              scene.actions([
                { label: 'Strip out of ill-fitting clothing', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspGoto(st, 'wardrobe', ((st as any).wloc ?? ''));
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
                    { label: 'Put them on anyways', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Put them on anyways', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'clothing', 'wear', (((st as any).defclothingtype ?? 0)?.[String((st as any).default_entry ?? 0)] ?? 0), (((st as any).defclothingnumber ?? 0)?.[String((st as any).default_entry ?? 0)] ?? 0));
    qspGoto(st, 'wardrobe', ((st as any).wloc ?? ''));
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Strip out of restrictive clothing', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspGoto(st, 'wardrobe', ((st as any).wloc ?? ''));
  } },
                ]);
              } else {
                if (((s as any).temp_clo_not_wear_reason ?? 0) !== '') {
                  scene.text('ERROR! This should not be reached.');
                  scene.text(`You can't wear this outfit because ${((s as any).temp_clo_not_wear_reason ?? '')}, but the text for this has not be written.`);
                  scene.text('Please contact a developer');
                  scene.actions([
                    { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'wardrobe', ((st as any).wloc ?? '')); } },
                  ]);
                } else {
                  scene.img('images/pc/activities/misc/dress_1.mp4');
                  if (((s as any).temp_panties_not_wear_reason ?? 0) === 'hypno'  ||  ((s as any).temp_bra_not_wear_reason ?? 0) === 'hypno') {
                    scene.text(`You put on your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit, but couldn't bring yourself to put on your ` + ((((s as any).temp_bra_not_wear_reason ?? 0) === 'hypno'  &&  ((s as any).temp_panties_not_wear_reason ?? 0) === 'hypno') ? ('bra or panties') : (((((s as any).temp_bra_not_wear_reason ?? 0) === 'hypno') ? ('bra') : ('panties')))) + '.');
                  } else {
                    scene.text(`Your put on your ${(((s as any).def_clothing_name ?? 0)?.[String((s as any).default_entry ?? 0)] ?? '')} outfit without any problems.`);
                  }
                  scene.actions([
                    { label: 'Return', handler: (st: GameState) => { qspGoto(st, 'wardrobe', ((st as any).wloc ?? '')); } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_clo_not_wear_reason = undefined;
  (s as any).temp_bra_not_wear_reason = undefined;
  (s as any).temp_panties_not_wear_reason = undefined;
  (s as any).temp_bodysuit_not_wear_reason = undefined;
  (s as any).temp_sho_not_wear_reason = undefined;
  (s as any).temp_purse_not_wear_reason = undefined;
  (s as any).temp_coat_not_wear_reason = undefined;
  scene.build();
}

function enterDefaultEntrySet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp_set_index = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).defclothingtype = (s as any).defclothingtype ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).clothingworntype ?? 0);
  ((s as any).defclothingnumber = (s as any).defclothingnumber ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).clothingwornnumber ?? 0);
  ((s as any).defunderwear = (s as any).defunderwear ?? {})[String((s as any).temp_set_index ?? 0)] = (((s as any).underwear ?? 0)?.['type']);
  ((s as any).defbodysuittype = (s as any).defbodysuittype ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).bodysuitworntype ?? 0);
  ((s as any).defbodysuitnumber = (s as any).defbodysuitnumber ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).bodysuitwornnumber ?? 0);
  ((s as any).defbratype = (s as any).defbratype ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).braworntype ?? 0);
  ((s as any).defbranumber = (s as any).defbranumber ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).brawornnumber ?? 0);
  ((s as any).defpantytype = (s as any).defpantytype ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).pantyworntype ?? 0);
  ((s as any).defpantynumber = (s as any).defpantynumber ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).pantywornnumber ?? 0);
  ((s as any).defshoetype = (s as any).defshoetype ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).shoeworntype ?? 0);
  ((s as any).defshoenumber = (s as any).defshoenumber ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).shoewornnumber ?? 0);
  ((s as any).defpursetype = (s as any).defpursetype ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).currentpursetype ?? 0);
  ((s as any).defpursenumber = (s as any).defpursenumber ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).currentpursenumber ?? 0);
  ((s as any).defcoattype = (s as any).defcoattype ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).coatworntype ?? 0);
  ((s as any).defcoatnumber = (s as any).defcoatnumber ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).coatwornnumber ?? 0);
  if ((!((s as any).bag ?? 0))) {
    ((s as any).defpursetype = (s as any).defpursetype ?? {})[String((s as any).temp_set_index ?? 0)] = 'none';
    ((s as any).defpursenumber = (s as any).defpursenumber ?? {})[String((s as any).temp_set_index ?? 0)] = 0;
  }
  if ((Math.floor(Math.random() * 21) + 0) < ((s as any).hypnoStrength ?? 0)) {
    (s as any).temp_wardrobe_msg = 0;
    if (((s as any).hypnoPanty ?? 0) === 1  &&  ((s as any).hypnoBra ?? 0) === 1) {
      ((s as any).defbodysuittype = (s as any).defbodysuittype ?? {})[String((s as any).temp_set_index ?? 0)] = 'none';
      ((s as any).defbodysuitnumber = (s as any).defbodysuitnumber ?? {})[String((s as any).temp_set_index ?? 0)] = 0;
      (s as any).temp_wardrobe_msg = 1;
    }
    if (((s as any).hypnoPanty ?? 0) === 1) {
      ((s as any).defpantytype = (s as any).defpantytype ?? {})[String((s as any).temp_set_index ?? 0)] = 'none';
      ((s as any).defpantynumber = (s as any).defpantynumber ?? {})[String((s as any).temp_set_index ?? 0)] = 0;
      (s as any).temp_wardrobe_msg = 1;
    }
    if (((s as any).hypnoBra ?? 0) === 1) {
      ((s as any).defbratype = (s as any).defbratype ?? {})[String((s as any).temp_set_index ?? 0)] = 'none';
      ((s as any).defbranumber = (s as any).defbranumber ?? {})[String((s as any).temp_set_index ?? 0)] = 0;
      (s as any).temp_wardrobe_msg = 1;
    }
    if (((s as any).temp_wardrobe_msg ?? 0)) {
      alert('<center>You feel like something about this set has changed but you cannot workout what it is.</center>');
    }
    (s as any).temp_wardrobe_msg = undefined;
  }
  (s as any).def_clothing_temp = window.prompt("<center>Enter a name for this outfit set<br><font color=\"grey\">Leaving blank will reuse current name.</font></center>") ?? '';
  if (((s as any).def_clothing_temp ?? 0) !== '') {
    ((s as any).def_clothing_name = (s as any).def_clothing_name ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).def_clothing_temp ?? 0);
  } else {
    if (((s as any).def_clothing_name ?? 0)?.[String((s as any).temp_set_index ?? 0)] === '') {
      ((s as any).def_clothing_name = (s as any).def_clothing_name ?? {})[String((s as any).temp_set_index ?? 0)] = 'Custom ' + ((s as any).temp_set_index ?? 0) + '';
    }
  }
  (s as any).def_clothing_temp = undefined;
  (s as any).temp_set_index = undefined;
  qspGoto(s, 'wardrobe', ((s as any).wloc ?? ''));
  scene.build();
}

function enterDefaultEntryRename(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp_set_index = ((s as any).locArgs?.[1] ?? 0);
  (s as any).def_clothing_temp = window.prompt("<center>Enter a name for this outfit set<br><font color=\"grey\">Leaving blank will reuse current name.</font></center>") ?? '';
  if (((s as any).def_clothing_temp ?? 0) !== '') {
    ((s as any).def_clothing_name = (s as any).def_clothing_name ?? {})[String((s as any).temp_set_index ?? 0)] = ((s as any).def_clothing_temp ?? 0);
  } else {
    if (((s as any).def_clothing_name ?? 0)?.[String((s as any).temp_set_index ?? 0)] === '') {
      ((s as any).def_clothing_name = (s as any).def_clothing_name ?? {})[String((s as any).temp_set_index ?? 0)] = 'Custom ' + ((s as any).temp_set_index ?? 0) + '';
    }
  }
  (s as any).def_clothing_temp = undefined;
  (s as any).temp_set_index = undefined;
  qspGoto(s, 'wardrobe', ((s as any).wloc ?? ''));
  scene.build();
}

function enterDefaultEntryUp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['i'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['j'] = (((s as any).temp_wardrobeVars ?? {})?.['i'] ?? 0) - 1;
  if (((s as any).temp_wardrobeVars ?? 0)?.['j'] < 0) {
    ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['j'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEntryShiftCore(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'wardrobe', ((s as any).wloc ?? ''));
  scene.build();
}

function enterDefaultEntryDown(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['i'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['j'] = ((((s as any).temp_wardrobeVars ?? {})?.['i'] ?? 0) + 1) % ((s as any).arrsize ?? 0)('defclothingnumber');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEntryShiftCore(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'wardrobe', ((s as any).wloc ?? ''));
  scene.build();
}

function enterEntryShiftCore(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['clothingtype'] = qspUntranslated(s, "defclothingtype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['clothingnumber'] = qspUntranslated(s, "defclothingnumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['underwear'] = qspUntranslated(s, "defunderwear[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['bodystuittype'] = qspUntranslated(s, "defbodysuittype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['bodystuitnumber'] = qspUntranslated(s, "defbodysuitnumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['bratype'] = qspUntranslated(s, "defbratype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['branumber'] = qspUntranslated(s, "defbranumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['pantytype'] = qspUntranslated(s, "defpantytype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['pantynumber'] = qspUntranslated(s, "defpantynumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['shoetype'] = qspUntranslated(s, "defshoetype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['shoenumber'] = qspUntranslated(s, "defshoenumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['pursetype'] = qspUntranslated(s, "defpursetype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['pursenumber'] = qspUntranslated(s, "defpursenumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['coattype'] = qspUntranslated(s, "defcoattype[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['coatnumber'] = qspUntranslated(s, "defcoatnumber[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['name'] = qspUntranslated(s, "def_clothing_name[temp_wardrobeVars['i']]", { location: "wardrobe" });
  ((s as any).defclothingtype = (s as any).defclothingtype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defclothingtype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defclothingnumber = (s as any).defclothingnumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defclothingnumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defunderwear = (s as any).defunderwear ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defunderwear[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defbodysuittype = (s as any).defbodysuittype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defbodysuittype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defbodysuitnumber = (s as any).defbodysuitnumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defbodysuitnumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defbratype = (s as any).defbratype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defbratype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defbranumber = (s as any).defbranumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defbranumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defpantytype = (s as any).defpantytype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defpantytype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defpantynumber = (s as any).defpantynumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defpantynumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defbratype = (s as any).defbratype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defbratype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defbranumber = (s as any).defbranumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defbranumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defpantytype = (s as any).defpantytype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defpantytype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defpantynumber = (s as any).defpantynumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defpantynumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defshoetype = (s as any).defshoetype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defshoetype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defshoenumber = (s as any).defshoenumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defshoenumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defpursetype = (s as any).defpursetype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defpursetype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defpursenumber = (s as any).defpursenumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defpursenumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defcoattype = (s as any).defcoattype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defcoattype[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defcoatnumber = (s as any).defcoatnumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "defcoatnumber[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).def_clothing_name = (s as any).def_clothing_name ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['i'])] = qspUntranslated(s, "def_clothing_name[temp_wardrobeVars['j']]", { location: "wardrobe" });
  ((s as any).defclothingtype = (s as any).defclothingtype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['clothingtype']);
  ((s as any).defclothingnumber = (s as any).defclothingnumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['clothingnumber']);
  ((s as any).defunderwear = (s as any).defunderwear ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['underwear']);
  ((s as any).defbodysuittype = (s as any).defbodysuittype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['bodystuittype']);
  ((s as any).defbodysuitnumber = (s as any).defbodysuitnumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['bodystuitnumber']);
  ((s as any).defbratype = (s as any).defbratype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['bratype']);
  ((s as any).defbranumber = (s as any).defbranumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['branumber']);
  ((s as any).defpantytype = (s as any).defpantytype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['pantytype']);
  ((s as any).defpantynumber = (s as any).defpantynumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['pantynumber']);
  ((s as any).defshoetype = (s as any).defshoetype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['shoetype']);
  ((s as any).defshoenumber = (s as any).defshoenumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['shoenumber']);
  ((s as any).defpursetype = (s as any).defpursetype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['pursetype']);
  ((s as any).defpursenumber = (s as any).defpursenumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['pursenumber']);
  ((s as any).defcoattype = (s as any).defcoattype ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['coattype']);
  ((s as any).defcoatnumber = (s as any).defcoatnumber ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['coatnumber']);
  ((s as any).def_clothing_name = (s as any).def_clothing_name ?? {})[(((s as any).temp_wardrobeVars ?? 0)?.['j'])] = (((s as any).temp_wardrobeVars ?? 0)?.['name']);
  if (((s as any).default_sport_number ?? 0) === ((s as any).temp_wardrobeVars ?? 0)?.['i']) {
    (s as any).default_sport_number = (((s as any).temp_wardrobeVars ?? 0)?.['j']);
  } else {
    if (((s as any).default_sport_number ?? 0) === ((s as any).temp_wardrobeVars ?? 0)?.['j']) {
      (s as any).default_sport_number = (((s as any).temp_wardrobeVars ?? 0)?.['i']);
    }
  }
  if (((s as any).default_school_number ?? 0) === ((s as any).temp_wardrobeVars ?? 0)?.['i']) {
    (s as any).default_school_number = (((s as any).temp_wardrobeVars ?? 0)?.['j']);
  } else {
    if (((s as any).default_school_number ?? 0) === ((s as any).temp_wardrobeVars ?? 0)?.['j']) {
      (s as any).default_school_number = (((s as any).temp_wardrobeVars ?? 0)?.['i']);
    }
  }
  (s as any).temp_wardrobeVars = undefined;
  scene.build();
}

function enterDefaultEntryDelete(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp_del_index = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).defclothingtype = (s as any).defclothingtype ?? {})[String((s as any).temp_del_index ?? 0)] = '';
  ((s as any).defclothingnumber = (s as any).defclothingnumber ?? {})[String((s as any).temp_del_index ?? 0)] = 0;
  ((s as any).defunderwear = (s as any).defunderwear ?? {})[String((s as any).temp_del_index ?? 0)] = 0;
  ((s as any).defbodysuittype = (s as any).defbodysuittype ?? {})[String((s as any).temp_del_index ?? 0)] = '';
  ((s as any).defbodysuitnumber = (s as any).defbodysuitnumber ?? {})[String((s as any).temp_del_index ?? 0)] = 0;
  ((s as any).defbratype = (s as any).defbratype ?? {})[String((s as any).temp_del_index ?? 0)] = '';
  ((s as any).defbranumber = (s as any).defbranumber ?? {})[String((s as any).temp_del_index ?? 0)] = 0;
  ((s as any).defpantytype = (s as any).defpantytype ?? {})[String((s as any).temp_del_index ?? 0)] = '';
  ((s as any).defpantynumber = (s as any).defpantynumber ?? {})[String((s as any).temp_del_index ?? 0)] = 0;
  ((s as any).defshoetype = (s as any).defshoetype ?? {})[String((s as any).temp_del_index ?? 0)] = '';
  ((s as any).defshoenumber = (s as any).defshoenumber ?? {})[String((s as any).temp_del_index ?? 0)] = 0;
  ((s as any).defpursetype = (s as any).defpursetype ?? {})[String((s as any).temp_del_index ?? 0)] = '';
  ((s as any).defpursenumber = (s as any).defpursenumber ?? {})[String((s as any).temp_del_index ?? 0)] = 0;
  ((s as any).defcoattype = (s as any).defcoattype ?? {})[String((s as any).temp_del_index ?? 0)] = '';
  ((s as any).defcoatnumber = (s as any).defcoatnumber ?? {})[String((s as any).temp_del_index ?? 0)] = 0;
  ((s as any).def_clothing_name = (s as any).def_clothing_name ?? {})[String((s as any).temp_del_index ?? 0)] = '';
  if (((s as any).default_sport_number ?? 0)    === ((s as any).temp_del_index ?? 0)) {
    (s as any).default_sport_number = 0;
  }
  if (((s as any).default_school_number ?? 0)  === ((s as any).temp_del_index ?? 0)) {
    (s as any).default_school_number = 0;
  }
  (s as any).temp_i = ((s as any).temp_del_index ?? 0);
  while (true) {
    if (((s as any).def_clothing_name ?? 0)[((s as any).temp_i ?? 0) + 1] !== ''  &&  ((s as any).temp_i ?? 0) % 10 > 0) {
      ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['i'] = ((s as any).temp_i ?? 0);
      ((s as any).temp_wardrobeVars = (s as any).temp_wardrobeVars ?? {})['j'] = ((s as any).temp_i ?? 0) + 1;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEntryShiftCore(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      break;
    }
    qspGoto(s, 'wardrobe', ((s as any).wloc ?? ''));
  }
  scene.build();
}

function enterDefaultSportSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).default_sport_number = ((s as any).locArgs?.[1] ?? 0);
  qspGoto(s, 'wardrobe', ((s as any).wloc ?? ''));
  scene.build();
}

function enterDefaultSchoolSet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).default_school_number = ((s as any).locArgs?.[1] ?? 0);
  qspGoto(s, 'wardrobe', ((s as any).wloc ?? ''));
  scene.build();
}

function enterSchoolOutfit(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).default_school_number ?? 0))) {
    qspCall(s, 'outfit', 'restore', 'bed');
    qspCall(s, 'clothing', 'wear', 'gm_school', 6);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).default_school_number ?? 0)]; enterDefaultEntryWear(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterIsSchool(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterIsSport(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).default_school_number ?? 0)[2] >= 5) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefaultSportWearAct(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Change into your regular clothes from your school uniform', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBackToRegularClothes(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBackToRegularClothes(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    if (((s as any).default_sport_number ?? 0)[2] >= 5) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefaultSchoolWearAct(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Change into your regular clothes from your sportswear', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBackToRegularClothes(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBackToRegularClothes(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefaultSportWearAct(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefaultSchoolWearAct(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterDefaultSchoolWearAct(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).default_school_number ?? 0) !== 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0)) {
    if (((s as any).defclothingtype ?? 0)?.[String((s as any).default_school_number ?? 0)] === 'gm_school'  &&  ((s as any).defclothingnumber ?? 0)?.[String((s as any).default_school_number ?? 0)] === 6) {
      scene.actions([
{ label: 'Put on your school uniform', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', '');
  } },
]);
      return;
    }
    (s as any).temp_clo_not_wear_reason = qspFunc(s, 'clothing', 'not_wear_reason', (((s as any).defclothingtype ?? 0)?.[String((s as any).default_school_number ?? 0)] ?? 0), (((s as any).defclothingnumber ?? 0)?.[String((s as any).default_school_number ?? 0)] ?? 0));
    if (((s as any).temp_clo_not_wear_reason ?? 0) === 'too_small'  ||  ((s as any).temp_clo_not_wear_reason ?? 0) === 'too_large') {
      scene.actions([
        { label: 'Put on your school uniform', handler: (st: GameState) => {
    alert(0);
  } },
      ]);
    } else {
      if (((s as any).temp_clo_not_wear_reason ?? 0) === 'low_strength') {
        scene.actions([
          { label: 'Put on your school uniform', handler: (st: GameState) => {
    alert(qspFunc(st, 'wrap', 'neg', 'Unavailable as outfit is worn out!'));
  } },
        ]);
      } else {
        if (((s as any).temp_clo_not_wear_reason ?? 0) === 'not_owned') {
          scene.actions([
            { label: 'Put on your school uniform', handler: (st: GameState) => {
    alert(0);
  } },
          ]);
        } else {
          if (((s as any).default_school_number ?? 0)[2] < 5) {
            scene.actions([
              { label: 'Put on your school uniform', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', '');
  } },
            ]);
          }
        }
      }
    }
    (s as any).temp_clo_not_wear_reason = undefined;
  }
  scene.build();
}

function enterDefaultSchoolWear(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeEnterSaveOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBackToRegularClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).default_sport_number ?? 0)[2] >= 5) {
    qspCall(s, 'outfit', 'transfer_backup', 'sport', 'school');
  } else {
    qspCall(s, 'outfit', 'backup', 'school');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).default_school_number ?? 0)]; enterDefaultEntryWear(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeExitCheckOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'daily_routine', 'finish_step', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
  scene.build();
}

function enterDefaultSportWearAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).default_sport_number ?? 0) !== 0) {
    if ((0 as any) <= 0) {
      scene.actions([
        { label: 'Put on your sports clothes', handler: (st: GameState) => {
    alert(qspFunc(st, 'wrap', 'neg', 'Unavailable as outfit is worn out!'));
  } },
      ]);
    } else {
      if ((0 as any) <= 0) {
        scene.actions([
          { label: 'Put on your sports clothes', handler: (st: GameState) => {
    alert(0);
  } },
        ]);
      } else {
        if (((s as any).default_sport_number ?? 0)[2] < 5) {
          scene.actions([
            { label: 'Put on your sports clothes', handler: (st: GameState) => {
    qspCall(st, 'wardrobe', '');
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterDefaultSportWear(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeEnterSaveOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBackToRegularClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).default_school_number ?? 0)[2] >= 5) {
    qspCall(s, 'outfit', 'transfer_backup', 'school', 'sport');
  } else {
    qspCall(s, 'outfit', 'backup', 'sport');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).default_sport_number ?? 0)]; enterDefaultEntryWear(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeExitCheckOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'daily_routine', 'finish_step', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
  scene.build();
}

function enterDefaultWardrobeWear(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeEnterSaveOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBackToRegularClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterDefaultEntryWear(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeExitCheckOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'daily_routine', 'finish_step', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0));
  scene.build();
}

function enterIsSport(s: GameState, scene: SceneBuilder): void {
  ((s as any).default_sport_number = (s as any).default_sport_number ?? {})[2] = 0;
  if (((s as any).clothingworntype ?? 0) === ((s as any).defclothingtype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).clothingwornnumber ?? 0) === ((s as any).defclothingnumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
    ((s as any).default_sport_number = (s as any).default_sport_number ?? {})[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
  }
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_sport_number ?? 0)] === 2) {
    if (((s as any).bodysuitworntype ?? 0) === ((s as any).defbodysuittype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).bodysuitwornnumber ?? 0) === ((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
      ((s as any).default_sport_number = (s as any).default_sport_number ?? {})[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
    }
  } else {
    if (((s as any).pantyworntype ?? 0) === ((s as any).defpantytype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).pantywornnumber ?? 0) === ((s as any).defpantynumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).braworntype ?? 0) === ((s as any).defbratype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).brawornnumber ?? 0) === ((s as any).defbranumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
      ((s as any).default_sport_number = (s as any).default_sport_number ?? {})[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
    }
  }
  if (((s as any).shoeworntype ?? 0) === ((s as any).defshoetype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).shoewornnumber ?? 0) === ((s as any).defshoenumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
    ((s as any).default_sport_number = (s as any).default_sport_number ?? {})[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
  }
  if (((s as any).currentpursetype ?? 0) === ((s as any).defpursetype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).currentpursenumber ?? 0) === ((s as any).defpursenumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
    ((s as any).default_sport_number = (s as any).default_sport_number ?? {})[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
  }
  if (((s as any).coatworntype ?? 0) === ((s as any).defcoattype ?? 0)?.[String((s as any).default_sport_number ?? 0)]  &&  ((s as any).coatwornnumber ?? 0) === ((s as any).defcoatnumber ?? 0)?.[String((s as any).default_sport_number ?? 0)]) {
    ((s as any).default_sport_number = (s as any).default_sport_number ?? {})[2] = ((s as any).default_sport_number[2] ?? 0) + (1);
  }
  scene.build();
}

function enterIsSchool(s: GameState, scene: SceneBuilder): void {
  ((s as any).default_school_number = (s as any).default_school_number ?? {})[2] = 0;
  if (((s as any).clothingworntype ?? 0) === ((s as any).defclothingtype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).clothingwornnumber ?? 0) === ((s as any).defclothingnumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
    ((s as any).default_school_number = (s as any).default_school_number ?? {})[2] = ((s as any).default_school_number[2] ?? 0) + (1);
  }
  if (((s as any).defunderwear ?? 0)?.[String((s as any).default_school_number ?? 0)] === 2) {
    if (((s as any).bodysuitworntype ?? 0) === ((s as any).defbodysuittype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).bodysuitwornnumber ?? 0) === ((s as any).defbodysuitnumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
      ((s as any).default_school_number = (s as any).default_school_number ?? {})[2] = ((s as any).default_school_number[2] ?? 0) + (1);
    }
  } else {
    if (((s as any).pantyworntype ?? 0) === ((s as any).defpantytype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).pantywornnumber ?? 0) === ((s as any).defpantynumber ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).braworntype ?? 0) === ((s as any).defbratype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).brawornnumber ?? 0) === ((s as any).defbranumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
      ((s as any).default_school_number = (s as any).default_school_number ?? {})[2] = ((s as any).default_school_number[2] ?? 0) + (1);
    }
  }
  if (((s as any).shoeworntype ?? 0) === ((s as any).defshoetype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).shoewornnumber ?? 0) === ((s as any).defshoenumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
    ((s as any).default_school_number = (s as any).default_school_number ?? {})[2] = ((s as any).default_school_number[2] ?? 0) + (1);
  }
  if (((s as any).currentpursetype ?? 0) === ((s as any).defpursetype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).currentpursenumber ?? 0) === ((s as any).defpursenumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
    ((s as any).default_school_number = (s as any).default_school_number ?? {})[2] = ((s as any).default_school_number[2] ?? 0) + (1);
  }
  if (((s as any).coatworntype ?? 0) === ((s as any).defcoattype ?? 0)?.[String((s as any).default_school_number ?? 0)]  &&  ((s as any).coatwornnumber ?? 0) === ((s as any).defcoatnumber ?? 0)?.[String((s as any).default_school_number ?? 0)]) {
    ((s as any).default_school_number = (s as any).default_school_number ?? {})[2] = ((s as any).default_school_number[2] ?? 0) + (1);
  }
  scene.build();
}

function enterBackToRegularClothes(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeEnterSaveOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
    if (((s as any).lastwornclothingtype ?? 0)?.['prostitute'] === '') {
      qspCall(s, 'clothing', 'wear', 'last_worn', '', 'check');
      qspCall(s, 'underwear', 'wear', 'last_worn', '', 'check');
      qspCall(s, 'shoes', 'wear', 'last_worn', '', 'check');
      qspCall(s, 'purses', 'wear', 'last_worn', '', 'check');
      qspCall(s, 'coats', 'wear', 'last_worn', '', 'check');
    } else {
      qspCall(s, 'clothing', 'wear', (((s as any).lastwornclothingtype ?? 0)?.['prostitute']), (((s as any).lastwornclothingnumber ?? 0)?.['prostitute']), 'check');
      if (((s as any).lastwornunderwear ?? 0)?.['prostitute'] === 2) {
        qspCall(s, 'underwear_bodysuits', 'wear', (((s as any).lastwornbodysuittype ?? 0)?.['prostitute']), (((s as any).lastwornbodysuitnumber ?? 0)?.['prostitute']), 'check');
      } else {
        qspCall(s, 'panties', 'wear', (((s as any).lastwornpantytype ?? 0)?.['prostitute']), (((s as any).lastwornpantynumber ?? 0)?.['prostitute']), 'check');
        qspCall(s, 'bras', 'wear', (((s as any).lastwornbratype ?? 0)?.['prostitute']), (((s as any).lastwornbranumber ?? 0)?.['prostitute']), 'check');
      }
      qspCall(s, 'shoes', 'wear', (((s as any).lastwornshoetype ?? 0)?.['prostitute']), (((s as any).lastwornshoenumber ?? 0)?.['prostitute']), 'check');
      qspCall(s, 'purses', 'wear', (((s as any).lastwornpursetype ?? 0)?.['prostitute']), (((s as any).lastwornpursenumber ?? 0)?.['prostitute']), 'check');
      qspCall(s, 'coats', 'wear', (((s as any).lastworncoattype ?? 0)?.['prostitute']), (((s as any).lastworncoatnumber ?? 0)?.['prostitute']), 'check');
    }
    qspCall(s, 'prostitution_functions', 'work_clothes');
    if (((s as any).prostitute ?? 0)?.['changed_for_work']) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['changed_for_work'] = 0;
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
      ((s as any).default_sport_number = (s as any).default_sport_number ?? {})[2] = 0;
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
        ((s as any).default_school_number = (s as any).default_school_number ?? {})[2] = 0;
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWardrobeExitCheckOutfit(s, scene); (s as any).locArgs = __savedLocArgs; }
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
      enterDefault(s, scene);
      break;
  }
}

export const wardrobe: LocationDef = {
  name: 'wardrobe',
  title: 'Please select an option',
  region: 'other',
  enter: enter,
};
