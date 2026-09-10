import type { GameState } from '../core/types';
import type { ClothingItem } from '../core/clothingTypes';

export type ClothingSlot = 'panty' | 'clothing' | 'bra' | 'shoes' | 'coat';

export interface WornItem {
  type: string;
  number: number;
}

export function getWorn(s: GameState, slot: ClothingSlot): WornItem {
  switch (slot) {
    case 'panty': return { type: s.pantyworntype, number: s.pantywornnumber };
    case 'clothing': return { type: s.clothingworntype, number: s.clothingwornnumber };
    case 'bra': return { type: s.braworntype, number: s.brawornnumber };
    case 'shoes': return { type: s.shoeworntype, number: s.shoewornnumber };
    case 'coat': return { type: s.coatworntype, number: s.coatwornnumber };
  }
}

export function setWorn(s: GameState, slot: ClothingSlot, type: string, number: number): void {
  switch (slot) {
    case 'panty': s.pantyworntype = type; s.pantywornnumber = number; break;
    case 'clothing': s.clothingworntype = type; s.clothingwornnumber = number; break;
    case 'bra': s.braworntype = type; s.brawornnumber = number; break;
    case 'shoes': s.shoeworntype = type; s.shoewornnumber = number; break;
    case 'coat': s.coatworntype = type; s.coatwornnumber = number; break;
  }
}

export function isWearing(s: GameState, slot: ClothingSlot, type?: string): boolean {
  const worn = getWorn(s, slot);
  if (!worn.type || worn.type === 'none') return false;
  if (type) return worn.type === type;
  return true;
}

export function isNude(s: GameState): boolean {
  return s.clothingworntype === 'nude' || s.clothingworntype === 'none';
}

export function isFullyClothed(s: GameState): boolean {
  return isWearing(s, 'clothing') && isWearing(s, 'panty') && isWearing(s, 'bra');
}

export function getOwnedItems(s: GameState, type: string): ClothingItem[] {
  return s.clothingInventory[type] ?? [];
}

export function ownsItem(s: GameState, type: string, number: number): boolean {
  const items = s.clothingInventory[type];
  if (!items) return false;
  return number < items.length && items[number].owned;
}

export function wear(s: GameState, slot: ClothingSlot, type: string, number: number): boolean {
  if (!ownsItem(s, type, number)) return false;
  const items = s.clothingInventory[type];
  items[number].wearing = true;
  setWorn(s, slot, type, number);
  return true;
}

export function remove(s: GameState, slot: ClothingSlot): WornItem {
  const worn = getWorn(s, slot);
  if (worn.type && worn.type !== 'none') {
    const items = s.clothingInventory[worn.type];
    if (items && worn.number < items.length) {
      items[worn.number].wearing = false;
    }
  }
  setWorn(s, slot, 'none', 0);
  return worn;
}

export function stripAll(s: GameState): WornItem[] {
  const removed: WornItem[] = [];
  for (const slot of ['coat', 'clothing', 'shoes', 'panty', 'bra'] as ClothingSlot[]) {
    removed.push(remove(s, slot));
  }
  return removed;
}

export function getVisibleLayers(s: GameState): string[] {
  const layers: string[] = [];
  if (isWearing(s, 'coat')) layers.push(s.coatworntype);
  if (isWearing(s, 'clothing')) layers.push(s.clothingworntype);
  if (isWearing(s, 'shoes')) layers.push(s.shoeworntype);
  return layers;
}

export function getWarmth(s: GameState): number {
  let warmth = 0;
  if (isWearing(s, 'coat')) warmth += 3;
  if (isWearing(s, 'clothing')) warmth += 2;
  if (isWearing(s, 'shoes')) warmth += 1;
  if (isWearing(s, 'panty')) warmth += 0.5;
  if (isWearing(s, 'bra')) warmth += 0.5;
  return warmth;
}

export function getWornCount(s: GameState): number {
  let count = 0;
  for (const slot of ['panty', 'clothing', 'bra', 'shoes', 'coat'] as ClothingSlot[]) {
    if (isWearing(s, slot)) count++;
  }
  return count;
}
