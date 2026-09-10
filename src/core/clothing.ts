import type { GameState } from './types';
import type { ClothingItem, ClothingAttributes } from './clothingTypes';
import { clothingData, clothingTotals } from './clothingData';

export function getItem(s: GameState, type: string, num: number): ClothingItem | undefined {
  return s.clothingInventory[type]?.[num - 1];
}

export function isOwned(s: GameState, type: string, num: number): boolean {
  return getItem(s, type, num)?.owned ?? false;
}

export function inWardrobe(s: GameState, type: string, num: number): boolean {
  const item = getItem(s, type, num);
  return item !== undefined && item.owned && item.storage === 0;
}

export function inStorage(s: GameState, type: string, num: number): boolean {
  const item = getItem(s, type, num);
  return item !== undefined && item.owned && item.storage === 1;
}

export function inUnwanted(s: GameState, type: string, num: number): boolean {
  const item = getItem(s, type, num);
  return item !== undefined && item.owned && item.storage === 2;
}

export function isWearing(s: GameState, type: string, num: number): boolean {
  return s.clothingworntype === type && s.clothingwornnumber === num;
}

export function isStrengthLow(s: GameState, type: string, num: number): boolean {
  const item = getItem(s, type, num);
  const attrs = getAttributes(type, num);
  if (!item?.owned || !attrs) return false;
  return item.strength < attrs.strength / 10;
}

export function getAttributes(type: string, num: number): ClothingAttributes | undefined {
  return clothingData[type]?.[num];
}

export function getTotal(type: string): number {
  return clothingTotals[type] ?? 0;
}

export function getHipSize(s: GameState, type: string, num: number): number {
  return getItem(s, type, num)?.hipSize ?? 0;
}

export function isClothesTooSmall(s: GameState, type: string, num: number): boolean {
  const item = getItem(s, type, num);
  if (!item?.owned || item.hipSize === 0) return false;
  return item.hipSize < s.pcs_bmi - 5;
}

export function isClothesTooLarge(s: GameState, type: string, num: number): boolean {
  const item = getItem(s, type, num);
  if (!item?.owned || item.hipSize === 0) return false;
  return item.hipSize > s.pcs_bmi + 5;
}

export function notWearReason(s: GameState, type: string, num: number): string {
  if (!isOwned(s, type, num)) return 'not_owned';
  if (!inWardrobe(s, type, num) && !isWearing(s, type, num)) return 'not_in_wardrobe';
  if (isStrengthLow(s, type, num)) return 'low_strength';
  if (isClothesTooSmall(s, type, num)) return 'too_small';
  if (isClothesTooLarge(s, type, num)) return 'too_large';
  const attrs = getAttributes(type, num);
  if (attrs && attrs.inhibit > 0 && s.pcs_inhib < attrs.inhibit) return 'hypno';
  return '';
}

export function canWear(s: GameState, type: string, num: number): boolean {
  return notWearReason(s, type, num) === '';
}

export function addItem(s: GameState, type: string, num: number): void {
  const inv = s.clothingInventory;
  if (!inv[type]) inv[type] = [];
  const item = inv[type][num - 1];
  if (item) {
    item.owned = true;
    item.hipSize = s.pcs_bmi;
    item.storage = 0;
    item.dirt = 0;
    const attrs = getAttributes(type, num);
    item.strength = attrs?.strength ?? 0;
  }
}

export function removeItem(s: GameState, type: string, num: number): void {
  const item = getItem(s, type, num);
  if (item) {
    item.owned = false;
    item.hipSize = 0;
    item.storage = 0;
    item.dirt = 0;
    item.strength = 0;
    item.wearing = false;
  }
}

export function moveWardrobe(s: GameState, type: string, num: number): void {
  const item = getItem(s, type, num);
  if (item?.owned) item.storage = 0;
}

export function moveStorage(s: GameState, type: string, num: number): void {
  const item = getItem(s, type, num);
  if (item?.owned) item.storage = 1;
}

export function moveUnwanted(s: GameState, type: string, num: number): void {
  const item = getItem(s, type, num);
  if (item?.owned) item.storage = 2;
}

export function resizeClothes(s: GameState, type: string, num: number): void {
  const item = getItem(s, type, num);
  if (item?.owned) item.hipSize = s.pcs_bmi;
}

export function increaseStrength(s: GameState, type: string, num: number, amount: number): void {
  const item = getItem(s, type, num);
  const attrs = getAttributes(type, num);
  if (item?.owned && attrs) {
    item.strength = Math.min(attrs.strength, item.strength + amount);
  }
}

export function decreaseStrength(s: GameState, type: string, num: number, amount: number): void {
  const item = getItem(s, type, num);
  if (item?.owned) {
    item.strength = Math.max(0, item.strength - amount);
  }
}

export function increaseDirt(s: GameState, type: string, num: number, amount: number): void {
  const item = getItem(s, type, num);
  if (item?.owned) {
    item.dirt += amount;
    if (isWearing(s, type, num)) s.PCloDirt = item.dirt;
  }
}

export function decreaseDirt(s: GameState, type: string, num: number, amount: number): void {
  const item = getItem(s, type, num);
  if (item?.owned) {
    item.dirt = Math.max(0, item.dirt - amount);
    if (isWearing(s, type, num)) s.PCloDirt = item.dirt;
  }
}

export function getWearPrice(type: string, num: number): number {
  const attrs = getAttributes(type, num);
  if (!attrs) return 0;
  const price = Math.round((attrs.price * ((5 * attrs.quality) + 100) / 100) * 1000 / (1250 - 0) * 1.5 / 50) * 50;
  return Math.max(50, price);
}

export function wear(s: GameState, type: string, num: number, check: boolean): void {
  if (check) {
    const reason = notWearReason(s, type, num);
    if (reason !== '' && reason !== 'hypno') return;
  }
  s.clothingworntype = type;
  s.clothingwornnumber = num;
  const item = getItem(s, type, num);
  if (item) {
    item.wearing = true;
    item.storage = 0;
  }
  const attrs = getAttributes(type, num);
  if (attrs) {
    s.PCloQuality = attrs.quality;
    s.PCloThinness = attrs.thinness;
    s.PXCloTopCut = attrs.topCut * 100;
    s.PCloDirt = item?.dirt ?? 0;
    s.PCloStrength = item?.strength ?? 0;
  }
}

export function strip(s: GameState): void {
  if (s.clothingworntype !== '' && s.clothingworntype !== 'nude') {
    const item = getItem(s, s.clothingworntype, s.clothingwornnumber);
    if (item) item.wearing = false;
  }
  s.clothingworntype = 'nude';
  s.clothingwornnumber = 0;
  s.PCloQuality = 0;
  s.PCloThinness = 0;
  s.PXCloTopCut = 0;
  s.PXCloBottomShortness = 0;
  s.PCloDirt = 0;
  s.PCloStrength = 0;
}

export function getStorageLabel(storage: number): string {
  switch (storage) {
    case 0: return 'Wardrobe';
    case 1: return 'Storage';
    case 2: return 'Unwanted';
    default: return '';
  }
}

export function getStyleLabel(style: number): string {
  switch (style) {
    case 1: return 'Girlie';
    case 2: return 'Rebel';
    case 3: return 'Wealthy';
    case 4: return 'Prostitute';
    case 5: return 'Loose';
    default: return '';
  }
}

export function getStyle2Label(style2: number): string {
  switch (style2) {
    case 1: return 'Maid';
    case 2: return 'Server';
    case 3: return 'Stripper';
    case 4: return 'School';
    case 5: return 'Office';
    case 6: return 'Exercise';
    default: return '';
  }
}
