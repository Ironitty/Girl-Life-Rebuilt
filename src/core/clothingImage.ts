import type { GameState } from './types';

export type FaceImageState = Pick<
  GameState,
  | 'face_style'
  | 'glass'
  | 'pcs_eyecol'
  | 'pcs_haircol'
  | 'pcs_hairlng'
  | 'pcs_hairbsh'
  | 'hbraids'
  | 'hpigtail'
  | 'curly'
  | 'hbangs'
  | 'hpingripw'
  | 'hscrunchw'
  | 'pcs_makeup'
  | 'cumloc'
  | 'cumvol'
>;

const outfitPaths: Record<string, string> = {
  gm_outfits: 'images/pc/items/gm/outfits/',
  gm_dress: 'images/pc/items/gm/dress/',
  misc_outfits: 'images/pc/items/misc/',
  cats_dress: 'images/pc/items/cats/dress/',
  cats_outfits: 'images/pc/items/cats/outfits/',
  flamingos_outfits: 'images/pc/items/flamingos/outfits/',
  flamingos_dress: 'images/pc/items/flamingos/dress/',
  coco_outfits: 'images/pc/items/coco/outfits/',
  coco_dress: 'images/pc/items/coco/dress/',
  fashionista_dress: 'images/pc/items/fashionista/dress/',
  fashionista_outfits: 'images/pc/items/fashionista/outfits/',
  moncheri_gown: 'images/pc/items/moncheri/gown/',
  moncheri_dress: 'images/pc/items/moncheri/dress/',
  gm_office: 'images/pc/items/gm/office/',
  gm_school: 'images/pc/items/gm/school/',
  danilovich_outfits: 'images/pc/items/danilovich/outfits/',
  eroto_dress: 'images/pc/items/eroto/dress/',
  eroto_outfits: 'images/pc/items/eroto/outfits/',
  eroto_strip: 'images/pc/items/eroto/strip/',
  salacious_outfits: 'images/pc/items/salacious/outfits/',
  salacious_dress: 'images/pc/items/salacious/dress/',
  gm_maid: 'images/pc/items/gm/maid/',
  gm_server: 'images/pc/items/gm/server/',
  allure_swimsuit: 'images/pc/items/allure/one/',
  allure_bikinis: 'images/pc/items/allure/two/',
  fancy_burlesque: 'images/pc/items/fancy/burlesque/',
  dolls_dress: 'images/pc/items/dolls/dress/',
  dolls_outfits: 'images/pc/items/dolls/outfits/',
  bomba_dress: 'images/pc/items/bomba/dress/',
  bomba_outfits: 'images/pc/items/bomba/outfits/',
  scandalicious_dress: 'images/pc/items/scandalicious/dress/',
  scandalicious_outfits: 'images/pc/items/scandalicious/outfits/',
  scandalicious_swimsuit: 'images/pc/items/scandalicious/swim/one/',
  scandalicious_bikinis: 'images/pc/items/scandalicious/swim/two/',
  danilovich_swimsuit: 'images/pc/items/danilovich/swimwear/',
  market_outfits: 'images/pc/items/market/clothes/',
  materinstvo_dress: 'images/pc/items/mommy/',
  nerdvana_cosplay: 'images/pc/items/nerdvana/cosplay/',
  nerdvana_outfits: 'images/pc/items/nerdvana/outfits/',
  nerdvana_bikinis: 'images/pc/items/nerdvana/swim/two/',
  nerdvana_swimsuit: 'images/pc/items/nerdvana/swim/one/',
};

const braPaths: Record<string, string> = {
  gm: 'images/pc/items/gm/bras/',
  lusso: 'images/pc/items/lusso/bras/',
  salacious: 'images/pc/items/salacious/bras/',
  fashionista: 'images/pc/items/fashionista/bras/',
  cats: 'images/pc/items/cats/bras/',
  eroto: 'images/pc/items/eroto/bras/',
  danilovich: 'images/pc/items/danilovich/bras/',
};

const pantyPaths: Record<string, string> = {
  gm: 'images/pc/items/gm/panties/',
  lusso: 'images/pc/items/lusso/panties/',
  salacious: 'images/pc/items/salacious/panties/',
  fashionista: 'images/pc/items/fashionista/panties/',
  cats: 'images/pc/items/cats/panties/',
  eroto: 'images/pc/items/eroto/panties/',
  danilovich: 'images/pc/items/danilovich/panties/',
};

const shoePaths: Record<string, string> = {
  moncheri: 'images/pc/items/moncheri/shoes/',
  cats: 'images/pc/items/cats/shoes/',
  bomba: 'images/pc/items/bomba/shoes/',
  dolls: 'images/pc/items/dolls/shoes/',
  eroto: 'images/pc/items/eroto/shoes/',
  scandalicious: 'images/pc/items/scandalicious/shoes/',
  gm: 'images/pc/items/gm/shoes/',
  danilovich: 'images/pc/items/danilovich/shoes/',
};

export function getClothingImage(type: string, num: number): string {
  const base = outfitPaths[type];
  return base ? `${base}${num}.jpg` : '';
}

export function getBraImage(type: string, num: number): string {
  const base = braPaths[type];
  return base ? `${base}${num}.jpg` : '';
}

export function getPantyImage(type: string, num: number): string {
  const base = pantyPaths[type];
  return base ? `${base}${num}.jpg` : '';
}

export function getShoeImage(type: string, num: number): string {
  const base = shoePaths[type];
  return base ? `${base}${num}.jpg` : '';
}

export function getCoatImage(type: string, num: number): string {
  return type !== 'none' ? `images/pc/items/${type}/coats/${num}.jpg` : '';
}

export function getClothesImages(s: GameState): {
  bra: string;
  outfit: string;
  coat: string;
  panties: string;
  shoes: string;
  purse: string;
} {
  const bra = s.braworntype !== 'none'
    ? getBraImage(s.braworntype, s.brawornnumber)
    : 'images/pc/body/tits/t2.jpg';
  const outfit = s.clothingworntype !== 'none' && s.clothingworntype !== 'nude'
    ? getClothingImage(s.clothingworntype, s.clothingwornnumber)
    : 'images/pc/body/nude.jpg';
  const coat = s.coatworntype !== 'none'
    ? getCoatImage(s.coatworntype, s.coatwornnumber)
    : '';
  const panties = s.pantyworntype !== 'none'
    ? getPantyImage(s.pantyworntype, s.pantywornnumber)
    : '';
  const shoes = s.shoeworntype !== 'none'
    ? getShoeImage(s.shoeworntype, s.shoewornnumber)
    : 'images/pc/body/feet.jpg';
  const purse = s.bag > 0
    ? `images/pc/items/accessories/purses/${s.currentpursetype}_${s.currentpursenumber}.jpg`
    : '';
  return { bra, outfit, coat, panties, shoes, purse };
}

const tattooPaths: Record<string, string> = {
  face: 'images/pc/body/tattoos/face/tatfce',
  lip: 'images/pc/body/tattoos/lip/tatlip',
  neck: 'images/pc/body/tattoos/neck/tatnck',
  back: 'images/pc/body/tattoos/back/tatback',
  shoulder: 'images/pc/body/tattoos/shoulder/tatshldr',
  breast: 'images/pc/body/tattoos/breasts/tatbrst',
  under: 'images/pc/body/tattoos/underBreast/tatundbreast',
  chest: 'images/pc/body/tattoos/chest/tatchst',
  side: 'images/pc/body/tattoos/side/tatside',
  belly: 'images/pc/body/tattoos/belly/tatblly',
  arm: 'images/pc/body/tattoos/arms/tatarm',
  wrist: 'images/pc/body/tattoos/wrists/tatwrst',
  hand: 'images/pc/body/tattoos/hand/tathnd',
  leg: 'images/pc/body/tattoos/legs/tatleg',
  ankle: 'images/pc/body/tattoos/foot/tatankle',
  tramp: 'images/pc/body/tattoos/trampStamp/tatlowbck',
  ass: 'images/pc/body/tattoos/ass/tatass',
  pussy: 'images/pc/body/tattoos/pubic/tatvag',
};

export function getTattooImage(loc: string, count: number): string {
  const base = tattooPaths[loc];
  return base ? `${base}${count}.jpg` : '';
}

const piercingPaths: Record<string, string> = {
  ears: 'c',
  nose: 'd',
  brow: 'e',
  lip: 'b',
  tongue: 'a',
  navel: 'n',
  nipples: 'f',
  pussy: 'g',
};

export function getPiercingImage(loc: string, count: number): string {
  const prefix = piercingPaths[loc];
  return prefix ? `images/pc/body/piercings/${prefix}${count}.jpg` : '';
}

export function getFaceImage(s: FaceImageState): string {
  const fs = s.face_style;
  if (fs.type === 1) {
    return fs.avatar_path || 'images/avatar.jpg';
  }

  if (fs.type === 2) {
    const glasses = s.glass >= 2 ? 'stylish' : s.glass === 1 ? 'stylish' : 'noglass';
    const eye = s.pcs_eyecol === 2 ? 'green' : 'blue';
    const hairCol = s.pcs_haircol === 0 ? 'black' : s.pcs_haircol === 1 ? 'brunette' : s.pcs_haircol === 2 ? 'red' : s.pcs_haircol === 3 ? 'blonde' : 'brunette';

    let hairLen: string;
    if (s.pcs_hairlng > 400) hairLen = 'long';
    else if (s.pcs_hairlng > 260) hairLen = 'long';
    else if (s.pcs_hairlng > 160) hairLen = 'medium';
    else if (s.pcs_hairlng > 80) hairLen = 'medium';
    else if (s.pcs_hairlng > 30) hairLen = 'short';
    else hairLen = 'very_short';

    let style: string;
    if (s.pcs_hairbsh <= 0) style = 'messy';
    else if (s.pcs_hairlng > 80) {
      if (s.hbraids > 0) style = 'braids';
      else if (s.hpigtail > 0) style = 'pigtails';
      else if (s.curly > 0 && s.hbangs > 0) style = 'curly';
      else if (s.curly > 0) style = 'curly';
      else if (s.hbangs > 0) style = 'bangs';
      else if (s.hpingripw > 0) style = 'buns';
      else if (s.hscrunchw > 0) style = 'scrunch';
      else style = 'normal';
    } else if (s.pcs_hairlng > 30) {
      if (s.hbangs > 0) style = 'bangs';
      else if (s.curly > 0) style = 'curly';
      else style = 'normal';
    } else {
      style = 'normal';
    }

    let makeup: string;
    if (s.pcs_makeup === 1) makeup = 'no_makeup_';
    else if (s.pcs_makeup === 7) makeup = 'goth_';
    else if (s.pcs_makeup === 8) makeup = 'smeared_';
    else makeup = 'vibrant_';

    const hasCum = (s.cumloc?.['11'] ?? 0) === 1 && (s.cumvol?.['11'] ?? 0) >= 20;
    const cum = hasCum ? 'decent' : 'no_cum';

    return `images/pc/body/head/${glasses}/${eye}/${hairCol}/${hairLen}/${style}/${makeup}${cum}.jpg`;
  }

  const len = s.pcs_hairlng > 400 ? 'vlng' : s.pcs_hairlng > 260 ? 'lng' : s.pcs_hairlng > 160 ? 'medlo' : s.pcs_hairlng > 80 ? 'med' : s.pcs_hairlng > 30 ? 'short' : 'vshort';
  let style2: string;
  if (s.pcs_hairlng > 80) {
    if (s.hbraids > 0) style2 = 'braids';
    else if (s.hpigtail > 0) style2 = 'pigtails';
    else if (s.curly > 0 && s.hbangs > 0) style2 = 'curly-bangs';
    else if (s.curly > 0) style2 = 'curly';
    else if (s.hbangs > 0) style2 = 'bangs';
    else if (s.hpingripw > 0) style2 = 'buns';
    else if (s.hscrunchw > 0) style2 = 'scrunch';
    else style2 = 'normal';
  } else if (s.pcs_hairlng > 30) {
    if (s.hbangs > 0) style2 = 'bangs';
    else if (s.curly > 0) style2 = 'curly';
    else style2 = 'normal';
  } else {
    style2 = 'normal';
  }
  return `images/pc/body/hairstyles/${len}/${style2}/hcol${s.pcs_haircol}.jpg`;
}
