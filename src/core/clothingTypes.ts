export interface ClothingItem {
  owned: boolean;
  hipSize: number;
  storage: 0 | 1 | 2;
  dirt: number;
  strength: number;
  wearing: boolean;
}

export interface ClothingAttributes {
  quality: number;
  strength: number;
  thinness: number;
  topCut: number;
  bra: number;
  panties: number;
  pantsShortness: number;
  skirtShortness: number;
  dress: boolean;
  onePiece: boolean;
  inhibit: number;
  coverFront: number;
  coverBack: number;
  coverTop: number;
  style: number;
  style2: number;
  style3: number;
  bimbo: boolean;
  goth: boolean;
  punk: boolean;
  prep: boolean;
  prude: boolean;
  prostitute: boolean;
  maid: boolean;
  server: boolean;
  strip: boolean;
  school: boolean;
  office: boolean;
  sport: boolean;
  swim: boolean;
  price: number;
}

export type ClothingInventory = Record<string, ClothingItem[]>;

export type ClothingData = Record<string, Record<number, ClothingAttributes>>;

export function createEmptyItem(): ClothingItem {
  return { owned: false, hipSize: 0, storage: 0, dirt: 0, strength: 0, wearing: false };
}

export function createEmptyInventory(total: number): ClothingItem[] {
  return Array.from({ length: total }, () => createEmptyItem());
}
