import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import {
  getClothingImage, getBraImage, getPantyImage, getShoeImage, getCoatImage,
  getClothesImages, getTattooImage, getPiercingImage, getFaceImage,
  type FaceImageState,
} from '../clothingImage';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    braworntype: 'none', brawornnumber: 0,
    clothingworntype: 'nude', clothingwornnumber: 0,
    coatworntype: 'none', coatwornnumber: 0,
    pantyworntype: 'none', pantywornnumber: 0,
    shoeworntype: 'none', shoewornnumber: 0,
    bag: 0, currentpursetype: 'none', currentpursenumber: 0,
    ...overrides,
  } as unknown as GameState;
}

describe('image path builders', () => {
  it('builds outfit, bra, panty, and shoe paths', () => {
    expect(getClothingImage('gm_outfits', 5)).toBe('images/pc/items/gm/outfits/5.jpg');
    expect(getBraImage('gm', 2)).toBe('images/pc/items/gm/bras/2.jpg');
    expect(getPantyImage('gm', 3)).toBe('images/pc/items/gm/panties/3.jpg');
    expect(getShoeImage('gm', 4)).toBe('images/pc/items/gm/shoes/4.jpg');
  });

  it('returns empty for unknown types', () => {
    expect(getClothingImage('nope', 1)).toBe('');
    expect(getBraImage('nope', 1)).toBe('');
  });

  it('builds coat paths and skips none', () => {
    expect(getCoatImage('gm', 3)).toBe('images/pc/items/gm/coats/3.jpg');
    expect(getCoatImage('none', 3)).toBe('');
  });

  it('builds tattoo and piercing paths', () => {
    expect(getTattooImage('face', 2)).toBe('images/pc/body/tattoos/face/tatfce2.jpg');
    expect(getTattooImage('nope', 1)).toBe('');
    expect(getPiercingImage('lip', 1)).toBe('images/pc/body/piercings/b1.jpg');
    expect(getPiercingImage('nope', 1)).toBe('');
  });
});

describe('getClothesImages', () => {
  it('falls back to body images when nude', () => {
    const imgs = getClothesImages(makeState());
    expect(imgs.bra).toBe('images/pc/body/tits/t2.jpg');
    expect(imgs.outfit).toBe('images/pc/body/nude.jpg');
    expect(imgs.coat).toBe('');
    expect(imgs.shoes).toBe('images/pc/body/feet.jpg');
    expect(imgs.purse).toBe('');
  });

  it('uses the worn bra and outfit', () => {
    const imgs = getClothesImages(makeState({ braworntype: 'gm', brawornnumber: 2, clothingworntype: 'gm_outfits', clothingwornnumber: 7 }));
    expect(imgs.bra).toBe('images/pc/items/gm/bras/2.jpg');
    expect(imgs.outfit).toBe('images/pc/items/gm/outfits/7.jpg');
  });

  it('includes a purse when carrying one', () => {
    const imgs = getClothesImages(makeState({ bag: 1, currentpursetype: 'leather', currentpursenumber: 3 }));
    expect(imgs.purse).toBe('images/pc/items/accessories/purses/leather_3.jpg');
  });
});

describe('getFaceImage', () => {
  function face(overrides: Record<string, unknown> = {}): FaceImageState {
    return {
      face_style: { type: 2 }, glass: 0, pcs_eyecol: 0, pcs_haircol: 0,
      pcs_hairlng: 100, pcs_hairbsh: 0, hbraids: 0, hpigtail: 0, curly: 0,
      hbangs: 0, hpingripw: 0, hscrunchw: 0, pcs_makeup: 0, cumloc: {}, cumvol: {},
      ...overrides,
    } as unknown as FaceImageState;
  }

  it('returns the custom avatar for type 1', () => {
    expect(getFaceImage(face({ face_style: { type: 1, avatar_path: 'images/me.jpg' } }))).toBe('images/me.jpg');
  });

  it('builds a messy no-glasses face path for type 2', () => {
    expect(getFaceImage(face())).toBe('images/pc/body/head/noglass/blue/black/medium/messy/vibrant_no_cum.jpg');
  });

  it('builds a hairstyle path for the default type', () => {
    expect(getFaceImage(face({ face_style: { type: 0 } }))).toBe('images/pc/body/hairstyles/med/normal/hcol0.jpg');
  });
});
