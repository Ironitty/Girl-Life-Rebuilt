import { describe, it, expect, vi } from 'vitest';
import type { GameState } from '../types';
import type { ClothingItem } from '../clothingTypes';
import {
  getItem,
  isOwned,
  inWardrobe,
  inStorage,
  inUnwanted,
  isWearing,
  isStrengthLow,
  getAttributes,
  getTotal,
  getHipSize,
  isClothesTooSmall,
  isClothesTooLarge,
  notWearReason,
  canWear,
  addItem,
  removeItem,
  moveWardrobe,
  moveStorage,
  moveUnwanted,
  resizeClothes,
  increaseStrength,
  decreaseStrength,
  increaseDirt,
  decreaseDirt,
  getWearPrice,
  wear,
  strip,
  getStorageLabel,
  getStyleLabel,
  getStyle2Label,
} from '../clothing';

vi.mock('../clothingData', () => ({
  clothingData: {
    gm_bras: {
      1: { strength: 100, inhibit: 0, quality: 5, price: 100, thinness: 2, topCut: 1 },
      2: { strength: 50, inhibit: 30, quality: 3, price: 50, thinness: 1, topCut: 0 },
    },
    gm_panties: {
      1: { strength: 80, inhibit: 0, quality: 4, price: 80, thinness: 1, topCut: 0 },
    },
  },
  clothingTotals: { gm_bras: 2, gm_panties: 1 },
}));

function makeItem(overrides: Partial<ClothingItem> = {}): ClothingItem {
  return { owned: true, hipSize: 20, storage: 0, dirt: 0, strength: 50, wearing: false, ...overrides };
}

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    clothingInventory: { gm_bras: [makeItem()], gm_panties: [makeItem()] },
    pcs_bmi: 20,
    pcs_inhib: 0,
    clothingworntype: 'none',
    clothingwornnumber: 0,
    PCloDirt: 0,
    PCloQuality: 0,
    PCloThinness: 0,
    PXCloTopCut: 0,
    PXCloBottomShortness: 0,
    PCloStrength: 0,
    ...overrides,
  } as unknown as GameState;
}

describe('getItem', () => {
  it('returns the item at the 1-based number', () => {
    const s = makeState();
    expect(getItem(s, 'gm_bras', 1)?.owned).toBe(true);
  });
  it('returns undefined for an out-of-range number', () => {
    const s = makeState();
    expect(getItem(s, 'gm_bras', 2)).toBeUndefined();
  });
  it('returns undefined for an unknown type', () => {
    const s = makeState();
    expect(getItem(s, 'nope', 1)).toBeUndefined();
  });
});

describe('ownership and storage predicates', () => {
  it('isOwned reflects the owned flag', () => {
    expect(isOwned(makeState(), 'gm_bras', 1)).toBe(true);
    expect(isOwned(makeState({ clothingInventory: { gm_bras: [makeItem({ owned: false })] } }), 'gm_bras', 1)).toBe(false);
    expect(isOwned(makeState(), 'nope', 1)).toBe(false);
  });
  it('inWardrobe requires owned and storage 0', () => {
    expect(inWardrobe(makeState(), 'gm_bras', 1)).toBe(true);
    expect(inWardrobe(makeState({ clothingInventory: { gm_bras: [makeItem({ storage: 1 })] } }), 'gm_bras', 1)).toBe(false);
  });
  it('inStorage requires owned and storage 1', () => {
    expect(inStorage(makeState({ clothingInventory: { gm_bras: [makeItem({ storage: 1 })] } }), 'gm_bras', 1)).toBe(true);
    expect(inStorage(makeState(), 'gm_bras', 1)).toBe(false);
  });
  it('inUnwanted requires owned and storage 2', () => {
    expect(inUnwanted(makeState({ clothingInventory: { gm_bras: [makeItem({ storage: 2 })] } }), 'gm_bras', 1)).toBe(true);
    expect(inUnwanted(makeState(), 'gm_bras', 1)).toBe(false);
  });
  it('isWearing matches the worn type and number', () => {
    const s = makeState({ clothingworntype: 'gm_bras', clothingwornnumber: 1 });
    expect(isWearing(s, 'gm_bras', 1)).toBe(true);
    expect(isWearing(s, 'gm_bras', 2)).toBe(false);
  });
});

describe('attributes and totals', () => {
  it('isStrengthLow compares item strength against attrs.strength/10', () => {
    expect(isStrengthLow(makeState({ clothingInventory: { gm_bras: [makeItem({ strength: 5 })] } }), 'gm_bras', 1)).toBe(true);
    expect(isStrengthLow(makeState({ clothingInventory: { gm_bras: [makeItem({ strength: 50 })] } }), 'gm_bras', 1)).toBe(false);
    expect(isStrengthLow(makeState({ clothingInventory: { gm_bras: [makeItem({ owned: false })] } }), 'gm_bras', 1)).toBe(false);
  });
  it('getAttributes returns the data entry or undefined', () => {
    expect(getAttributes('gm_bras', 1)?.strength).toBe(100);
    expect(getAttributes('nope', 1)).toBeUndefined();
  });
  it('getTotal returns the type total or 0', () => {
    expect(getTotal('gm_bras')).toBe(2);
    expect(getTotal('nope')).toBe(0);
  });
  it('getHipSize returns the item hipSize or 0', () => {
    expect(getHipSize(makeState(), 'gm_bras', 1)).toBe(20);
    expect(getHipSize(makeState(), 'nope', 1)).toBe(0);
  });
});

describe('size checks', () => {
  it('isClothesTooSmall when hipSize is below bmi-5', () => {
    expect(isClothesTooSmall(makeState({ clothingInventory: { gm_bras: [makeItem({ hipSize: 10 })] } }), 'gm_bras', 1)).toBe(true);
    expect(isClothesTooSmall(makeState(), 'gm_bras', 1)).toBe(false);
    expect(isClothesTooSmall(makeState({ clothingInventory: { gm_bras: [makeItem({ hipSize: 0 })] } }), 'gm_bras', 1)).toBe(false);
  });
  it('isClothesTooLarge when hipSize is above bmi+5', () => {
    expect(isClothesTooLarge(makeState({ clothingInventory: { gm_bras: [makeItem({ hipSize: 30 })] } }), 'gm_bras', 1)).toBe(true);
    expect(isClothesTooLarge(makeState(), 'gm_bras', 1)).toBe(false);
  });
});

describe('notWearReason / canWear', () => {
  it('reports not_owned for an unowned item', () => {
    const s = makeState({ clothingInventory: { gm_bras: [makeItem({ owned: false })] } });
    expect(notWearReason(s, 'gm_bras', 1)).toBe('not_owned');
    expect(canWear(s, 'gm_bras', 1)).toBe(false);
  });
  it('reports not_in_wardrobe for a stored item that is not worn', () => {
    const s = makeState({ clothingInventory: { gm_bras: [makeItem({ storage: 1 })] } });
    expect(notWearReason(s, 'gm_bras', 1)).toBe('not_in_wardrobe');
  });
  it('reports low_strength when strength is too low', () => {
    const s = makeState({ clothingInventory: { gm_bras: [makeItem({ strength: 5 })] } });
    expect(notWearReason(s, 'gm_bras', 1)).toBe('low_strength');
  });
  it('reports too_small and too_large', () => {
    expect(notWearReason(makeState({ clothingInventory: { gm_bras: [makeItem({ hipSize: 10 })] } }), 'gm_bras', 1)).toBe('too_small');
    expect(notWearReason(makeState({ clothingInventory: { gm_bras: [makeItem({ hipSize: 30 })] } }), 'gm_bras', 1)).toBe('too_large');
  });
  it('reports hypno when inhibit exceeds the player inhibit stat', () => {
    const s = makeState({ pcs_inhib: 10, clothingInventory: { gm_bras: [makeItem(), makeItem()] } });
    expect(notWearReason(s, 'gm_bras', 2)).toBe('hypno');
  });
  it('returns empty string when the item can be worn', () => {
    const s = makeState();
    expect(notWearReason(s, 'gm_bras', 1)).toBe('');
    expect(canWear(s, 'gm_bras', 1)).toBe(true);
  });
});

describe('inventory mutation', () => {
  it('addItem marks the item owned at the player bmi with full strength', () => {
    const s = makeState({ clothingInventory: { gm_bras: [makeItem({ owned: false })] } });
    addItem(s, 'gm_bras', 1);
    const item = getItem(s, 'gm_bras', 1)!;
    expect(item.owned).toBe(true);
    expect(item.hipSize).toBe(20);
    expect(item.storage).toBe(0);
    expect(item.dirt).toBe(0);
    expect(item.strength).toBe(100);
  });
  it('removeItem clears the item state', () => {
    const s = makeState();
    removeItem(s, 'gm_bras', 1);
    const item = getItem(s, 'gm_bras', 1)!;
    expect(item.owned).toBe(false);
    expect(item.hipSize).toBe(0);
    expect(item.strength).toBe(0);
    expect(item.wearing).toBe(false);
  });
  it('moveWardrobe / moveStorage / moveUnwanted set the storage slot', () => {
    const a = makeState();
    moveWardrobe(a, 'gm_bras', 1);
    expect(getItem(a, 'gm_bras', 1)!.storage).toBe(0);
    const b = makeState();
    moveStorage(b, 'gm_bras', 1);
    expect(getItem(b, 'gm_bras', 1)!.storage).toBe(1);
    const c = makeState();
    moveUnwanted(c, 'gm_bras', 1);
    expect(getItem(c, 'gm_bras', 1)!.storage).toBe(2);
  });
  it('resizeClothes sets hipSize to the player bmi', () => {
    const s = makeState({ clothingInventory: { gm_bras: [makeItem({ hipSize: 10 })] } });
    resizeClothes(s, 'gm_bras', 1);
    expect(getItem(s, 'gm_bras', 1)!.hipSize).toBe(20);
  });
});

describe('strength and dirt', () => {
  it('increaseStrength caps at the attribute strength', () => {
    const s = makeState({ clothingInventory: { gm_bras: [makeItem({ strength: 50 })] } });
    increaseStrength(s, 'gm_bras', 1, 20);
    expect(getItem(s, 'gm_bras', 1)!.strength).toBe(70);
    increaseStrength(s, 'gm_bras', 1, 100);
    expect(getItem(s, 'gm_bras', 1)!.strength).toBe(100);
  });
  it('decreaseStrength floors at 0', () => {
    const s = makeState({ clothingInventory: { gm_bras: [makeItem({ strength: 50 })] } });
    decreaseStrength(s, 'gm_bras', 1, 20);
    expect(getItem(s, 'gm_bras', 1)!.strength).toBe(30);
    decreaseStrength(s, 'gm_bras', 1, 100);
    expect(getItem(s, 'gm_bras', 1)!.strength).toBe(0);
  });
  it('increaseDirt adds dirt and syncs PCloDirt while worn', () => {
    const s = makeState({ clothingworntype: 'gm_bras', clothingwornnumber: 1 });
    increaseDirt(s, 'gm_bras', 1, 15);
    expect(getItem(s, 'gm_bras', 1)!.dirt).toBe(15);
    expect(s.PCloDirt).toBe(15);
  });
  it('decreaseDirt floors at 0 and syncs PCloDirt while worn', () => {
    const s = makeState({ clothingworntype: 'gm_bras', clothingwornnumber: 1, clothingInventory: { gm_bras: [makeItem({ dirt: 10 })] } });
    decreaseDirt(s, 'gm_bras', 1, 5);
    expect(getItem(s, 'gm_bras', 1)!.dirt).toBe(5);
    expect(s.PCloDirt).toBe(5);
    decreaseDirt(s, 'gm_bras', 1, 50);
    expect(getItem(s, 'gm_bras', 1)!.dirt).toBe(0);
  });
});

describe('getWearPrice', () => {
  it('computes the rounded price from quality and price', () => {
    expect(getWearPrice('gm_bras', 1)).toBe(150);
  });
  it('returns 0 when there is no attribute data', () => {
    expect(getWearPrice('nope', 1)).toBe(0);
  });
});

describe('wear / strip', () => {
  it('wear sets the worn item and copies attributes onto the player', () => {
    const s = makeState();
    wear(s, 'gm_bras', 1, false);
    expect(s.clothingworntype).toBe('gm_bras');
    expect(s.clothingwornnumber).toBe(1);
    expect(getItem(s, 'gm_bras', 1)!.wearing).toBe(true);
    expect(s.PCloQuality).toBe(5);
    expect(s.PCloThinness).toBe(2);
    expect(s.PXCloTopCut).toBe(100);
    expect(s.PCloStrength).toBe(50);
  });
  it('wear with check aborts on a blocking reason', () => {
    const s = makeState({ clothingInventory: { gm_bras: [makeItem({ owned: false })] } });
    wear(s, 'gm_bras', 1, true);
    expect(s.clothingworntype).toBe('none');
  });
  it('wear with check allows a hypno-blocked item', () => {
    const s = makeState({ pcs_inhib: 10, clothingInventory: { gm_bras: [makeItem(), makeItem()] } });
    wear(s, 'gm_bras', 2, true);
    expect(s.clothingworntype).toBe('gm_bras');
  });
  it('strip clears the worn item and zeroes the player clothing vars', () => {
    const s = makeState({ clothingworntype: 'gm_bras', clothingwornnumber: 1 });
    strip(s);
    expect(getItem(s, 'gm_bras', 1)!.wearing).toBe(false);
    expect(s.clothingworntype).toBe('nude');
    expect(s.clothingwornnumber).toBe(0);
    expect(s.PCloQuality).toBe(0);
    expect(s.PCloDirt).toBe(0);
  });
});

describe('label helpers', () => {
  it('getStorageLabel maps storage codes to names', () => {
    expect(getStorageLabel(0)).toBe('Wardrobe');
    expect(getStorageLabel(1)).toBe('Storage');
    expect(getStorageLabel(2)).toBe('Unwanted');
    expect(getStorageLabel(3)).toBe('');
  });
  it('getStyleLabel maps style codes to names', () => {
    expect(getStyleLabel(1)).toBe('Girlie');
    expect(getStyleLabel(2)).toBe('Rebel');
    expect(getStyleLabel(3)).toBe('Wealthy');
    expect(getStyleLabel(4)).toBe('Prostitute');
    expect(getStyleLabel(5)).toBe('Loose');
    expect(getStyleLabel(0)).toBe('');
  });
  it('getStyle2Label maps secondary style codes to names', () => {
    expect(getStyle2Label(1)).toBe('Maid');
    expect(getStyle2Label(2)).toBe('Server');
    expect(getStyle2Label(3)).toBe('Stripper');
    expect(getStyle2Label(4)).toBe('School');
    expect(getStyle2Label(5)).toBe('Office');
    expect(getStyle2Label(6)).toBe('Exercise');
    expect(getStyle2Label(0)).toBe('');
  });
});
