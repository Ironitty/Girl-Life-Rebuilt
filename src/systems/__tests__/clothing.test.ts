import { describe, it, expect } from 'vitest';
import type { GameState } from '../../core/types';
import type { ClothingItem } from '../../core/clothingTypes';
import {
  getWorn, setWorn, isWearing, isNude, isFullyClothed,
  ownsItem, wear, remove, stripAll,
  getVisibleLayers, getWarmth, getWornCount,
} from '../clothing';

function makeClothingItem(overrides: Partial<ClothingItem> = {}): ClothingItem {
  return { owned: true, hipSize: 0, storage: 0, dirt: 0, strength: 0, wearing: false, ...overrides };
}

function makeClothingState(overrides: Partial<GameState> = {}): GameState {
  return {
    pantyworntype: 'none', pantywornnumber: 0,
    clothingworntype: 'none', clothingwornnumber: 0,
    braworntype: 'none', brawornnumber: 0,
    shoeworntype: 'none', shoewornnumber: 0,
    coatworntype: 'none', coatwornnumber: 0,
    clothingInventory: {},
    ...overrides,
  } as GameState;
}

describe('clothing system', () => {
  describe('getWorn / setWorn', () => {
    it('round-trips all 5 slots', () => {
      const s = makeClothingState();
      setWorn(s, 'panty', 'briefs', 1);
      setWorn(s, 'clothing', 'dress', 2);
      setWorn(s, 'bra', 'sports', 0);
      setWorn(s, 'shoes', 'boots', 3);
      setWorn(s, 'coat', 'jacket', 1);

      expect(getWorn(s, 'panty')).toEqual({ type: 'briefs', number: 1 });
      expect(getWorn(s, 'clothing')).toEqual({ type: 'dress', number: 2 });
      expect(getWorn(s, 'bra')).toEqual({ type: 'sports', number: 0 });
      expect(getWorn(s, 'shoes')).toEqual({ type: 'boots', number: 3 });
      expect(getWorn(s, 'coat')).toEqual({ type: 'jacket', number: 1 });
    });
  });

  describe('isWearing', () => {
    it('returns true when wearing an item', () => {
      const s = makeClothingState({ clothingworntype: 'dress', clothingwornnumber: 0 });
      expect(isWearing(s, 'clothing')).toBe(true);
    });

    it('returns false when not wearing', () => {
      const s = makeClothingState();
      expect(isWearing(s, 'clothing')).toBe(false);
    });

    it('matches specific type', () => {
      const s = makeClothingState({ clothingworntype: 'dress', clothingwornnumber: 0 });
      expect(isWearing(s, 'clothing', 'dress')).toBe(true);
      expect(isWearing(s, 'clothing', 'skirt')).toBe(false);
    });
  });

  describe('isNude', () => {
    it('returns true for nude', () => {
      const s = makeClothingState({ clothingworntype: 'nude' });
      expect(isNude(s)).toBe(true);
    });

    it('returns true for none', () => {
      const s = makeClothingState({ clothingworntype: 'none' });
      expect(isNude(s)).toBe(true);
    });

    it('returns false when clothed', () => {
      const s = makeClothingState({ clothingworntype: 'dress' });
      expect(isNude(s)).toBe(false);
    });
  });

  describe('isFullyClothed', () => {
    it('returns true when all 3 core slots are worn', () => {
      const s = makeClothingState({
        clothingworntype: 'dress', pantyworntype: 'briefs', braworntype: 'sports',
      });
      expect(isFullyClothed(s)).toBe(true);
    });

    it('returns false when missing one slot', () => {
      const s = makeClothingState({
        clothingworntype: 'dress', pantyworntype: 'briefs', braworntype: 'none',
      });
      expect(isFullyClothed(s)).toBe(false);
    });
  });

  describe('ownsItem', () => {
    it('returns true for owned item', () => {
      const s = makeClothingState({ clothingInventory: { dress: [makeClothingItem(), makeClothingItem({ owned: false })] } });
      expect(ownsItem(s, 'dress', 0)).toBe(true);
      expect(ownsItem(s, 'dress', 1)).toBe(false);
    });

    it('returns false for unknown type', () => {
      const s = makeClothingState();
      expect(ownsItem(s, 'unknown', 0)).toBe(false);
    });

    it('returns false for out-of-bounds number', () => {
      const s = makeClothingState({ clothingInventory: { dress: [makeClothingItem()] } });
      expect(ownsItem(s, 'dress', 5)).toBe(false);
    });
  });

  describe('wear', () => {
    it('wears an owned item', () => {
      const s = makeClothingState({ clothingInventory: { dress: [makeClothingItem()] } });
      expect(wear(s, 'clothing', 'dress', 0)).toBe(true);
      expect(s.clothingworntype).toBe('dress');
      expect(s.clothingInventory['dress'][0].wearing).toBe(true);
    });

    it('returns false for unowned item', () => {
      const s = makeClothingState({ clothingInventory: { dress: [makeClothingItem({ owned: false })] } });
      expect(wear(s, 'clothing', 'dress', 0)).toBe(false);
      expect(s.clothingworntype).toBe('none');
    });
  });

  describe('remove', () => {
    it('removes worn item and clears slot', () => {
      const s = makeClothingState({
        clothingworntype: 'dress', clothingwornnumber: 0,
        clothingInventory: { dress: [makeClothingItem({ wearing: true })] },
      });
      const removed = remove(s, 'clothing');
      expect(removed.type).toBe('dress');
      expect(s.clothingworntype).toBe('none');
      expect(s.clothingInventory['dress'][0].wearing).toBe(false);
    });

    it('no-op when nothing worn', () => {
      const s = makeClothingState();
      const removed = remove(s, 'clothing');
      expect(removed.type).toBe('none');
    });
  });

  describe('stripAll', () => {
    it('removes all 5 slots', () => {
      const s = makeClothingState({
        pantyworntype: 'briefs', pantywornnumber: 0,
        clothingworntype: 'dress', clothingwornnumber: 0,
        braworntype: 'sports', brawornnumber: 0,
        shoeworntype: 'boots', shoewornnumber: 0,
        coatworntype: 'jacket', coatwornnumber: 0,
        clothingInventory: {
          briefs: [makeClothingItem({ wearing: true })],
          dress: [makeClothingItem({ wearing: true })],
          sports: [makeClothingItem({ wearing: true })],
          boots: [makeClothingItem({ wearing: true })],
          jacket: [makeClothingItem({ wearing: true })],
        },
      });
      const removed = stripAll(s);
      expect(removed).toHaveLength(5);
      expect(s.pantyworntype).toBe('none');
      expect(s.clothingworntype).toBe('none');
      expect(s.braworntype).toBe('none');
      expect(s.shoeworntype).toBe('none');
      expect(s.coatworntype).toBe('none');
    });
  });

  describe('getVisibleLayers', () => {
    it('returns coat, clothing, shoes when worn', () => {
      const s = makeClothingState({
        coatworntype: 'jacket', clothingworntype: 'dress', shoeworntype: 'boots',
      });
      expect(getVisibleLayers(s)).toEqual(['jacket', 'dress', 'boots']);
    });

    it('returns empty when nothing visible worn', () => {
      const s = makeClothingState();
      expect(getVisibleLayers(s)).toEqual([]);
    });
  });

  describe('getWarmth', () => {
    it('returns 0 when nothing worn', () => {
      const s = makeClothingState();
      expect(getWarmth(s)).toBe(0);
    });

    it('returns 6 when all layers worn', () => {
      const s = makeClothingState({
        coatworntype: 'jacket', clothingworntype: 'dress',
        shoeworntype: 'boots', pantyworntype: 'briefs', braworntype: 'sports',
      });
      expect(getWarmth(s)).toBe(7);
    });

    it('returns partial warmth for partial clothing', () => {
      const s = makeClothingState({ clothingworntype: 'dress' });
      expect(getWarmth(s)).toBe(2);
    });
  });

  describe('getWornCount', () => {
    it('returns 0 when nothing worn', () => {
      const s = makeClothingState();
      expect(getWornCount(s)).toBe(0);
    });

    it('returns 5 when all slots worn', () => {
      const s = makeClothingState({
        pantyworntype: 'briefs', clothingworntype: 'dress',
        braworntype: 'sports', shoeworntype: 'boots', coatworntype: 'jacket',
      });
      expect(getWornCount(s)).toBe(5);
    });

    it('returns partial count', () => {
      const s = makeClothingState({ clothingworntype: 'dress', pantyworntype: 'briefs' });
      expect(getWornCount(s)).toBe(2);
    });
  });
});
