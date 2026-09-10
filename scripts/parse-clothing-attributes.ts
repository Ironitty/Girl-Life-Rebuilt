import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

interface AttrBlock {
  num: number;
  quality: number;
  strength: number;
  thinness: number;
  topCut: number;
  bra: number;
  panties: number;
  pantsShortness: number;
  skirtShortness: number;
  dress: number;
  onePiece: number;
  inhibit: number;
  coverFront: number;
  coverBack: number;
  coverTop: number;
  style: number;
  style2: number;
  style3: number;
  bimbo: number;
  goth: number;
  punk: number;
  prep: number;
  prude: number;
  prostitute: number;
  maid: number;
  server: number;
  strip: number;
  school: number;
  office: number;
  sport: number;
  swim: number;
  price: number;
}

const varMap: Record<string, keyof AttrBlock> = {
  CloQuality: 'quality',
  CloStrength: 'strength',
  CloThinness: 'thinness',
  CloTopCut: 'topCut',
  CloBra: 'bra',
  CloPanties: 'panties',
  CloPantsShortness: 'pantsShortness',
  CloSkirtShortness: 'skirtShortness',
  CloDress: 'dress',
  CloOnePiece: 'onePiece',
  CloInhibit: 'inhibit',
  CloCoverFront: 'coverFront',
  CloCoverBack: 'coverBack',
  CloCoverTop: 'coverTop',
  CloStyle: 'style',
  CloStyle2: 'style2',
  CloStyle3: 'style3',
  CloBimbo: 'bimbo',
  CloGoth: 'goth',
  CloPunk: 'punk',
  CloPrep: 'prep',
  CloPrude: 'prude',
  CloProstitute: 'prostitute',
  CloMaid: 'maid',
  CloServer: 'server',
  CloStrip: 'strip',
  CloSchool: 'school',
  CloOffice: 'office',
  CloSport: 'sport',
  CloSwim: 'swim',
  CloPrice: 'price',
};

function emptyBlock(num: number): AttrBlock {
  return {
    num, quality: 0, strength: 0, thinness: 0, topCut: 0, bra: 0, panties: 0,
    pantsShortness: 0, skirtShortness: 0, dress: 0, onePiece: 0, inhibit: 0,
    coverFront: 0, coverBack: 0, coverTop: 0, style: 0, style2: 0, style3: 0,
    bimbo: 0, goth: 0, punk: 0, prep: 0, prude: 0, prostitute: 0, maid: 0,
    server: 0, strip: 0, school: 0, office: 0, sport: 0, swim: 0, price: 0,
  };
}

function parseFile(content: string): Map<number, AttrBlock> {
  const blocks = new Map<number, AttrBlock>();
  const lines = content.split('\n');
  let current: AttrBlock | null = null;

  for (const line of lines) {
    const trimmed = line.trim();

    const ifMatch = trimmed.match(/^if\s+ARGS\[0\]\s*=\s*(\d+):/);
    if (ifMatch) {
      current = emptyBlock(parseInt(ifMatch[1]));
      blocks.set(current.num, current);
      continue;
    }

    const elifMatch = trimmed.match(/^elseif\s+ARGS\[0\]\s*=\s*(\d+):/);
    if (elifMatch) {
      current = emptyBlock(parseInt(elifMatch[1]));
      blocks.set(current.num, current);
      continue;
    }

    if (trimmed === 'end' || trimmed === 'end}') {
      current = null;
      continue;
    }

    if (current) {
      const assignMatch = trimmed.match(/^(\w+)\s*=\s*(\d+)/);
      if (assignMatch) {
        const qspVar = assignMatch[1];
        const val = parseInt(assignMatch[2]);
        const key = varMap[qspVar];
        if (key) current[key] = val;
      }
    }
  }

  return blocks;
}

function blockToTS(block: AttrBlock): string {
  return `{q:${block.quality},st:${block.strength},t:${block.thinness},tc:${block.topCut},b:${block.bra},p:${block.panties},ps:${block.pantsShortness},ss:${block.skirtShortness},d:${block.dress ? 1 : 0},op:${block.onePiece ? 1 : 0},i:${block.inhibit},cf:${block.coverFront},cb:${block.coverBack},ct:${block.coverTop},s:${block.style},s2:${block.style2},s3:${block.style3},bi:${block.bimbo ? 1 : 0},go:${block.goth ? 1 : 0},pu:${block.punk ? 1 : 0},pr:${block.prep ? 1 : 0},prd:${block.prude ? 1 : 0},prst:${block.prostitute ? 1 : 0},md:${block.maid ? 1 : 0},sv:${block.server ? 1 : 0},st2:${block.strip ? 1 : 0},sc:${block.school ? 1 : 0},of:${block.office ? 1 : 0},sp:${block.sport ? 1 : 0},sw:${block.swim ? 1 : 0},pr:${block.price}}`;
}

const locDir = join(process.cwd(), 'GL QSP', 'locations');
const files = readdirSync(locDir).filter(f => f.startsWith('_attributes_') && f.endsWith('.qsps'));

const data: Record<string, Record<number, string>> = {};
const totals: Record<string, number> = {};

for (const file of files) {
  const typeName = file.replace('_attributes_', '').replace('.qsps', '');
  const content = readFileSync(join(locDir, file), 'utf-8');
  const blocks = parseFile(content);

  data[typeName] = {};
  let maxNum = 0;
  for (const [num, block] of blocks) {
    data[typeName][num] = blockToTS(block);
    if (num > maxNum) maxNum = num;
  }
  totals[typeName] = maxNum;
  console.log(`${typeName}: ${blocks.size} items (max ${maxNum})`);
}

const out = join(process.cwd(), 'src', 'core', 'clothingData.ts');
let ts = `import type { ClothingAttributes } from './clothingTypes';\n\n`;
ts += `export const clothingTotals: Record<string, number> = {\n`;
for (const [type, total] of Object.entries(totals).sort()) {
  ts += `  ${type}: ${total},\n`;
}
ts += `};\n\n`;

ts += `const raw: Record<string, Record<number, [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]>> = {\n`;
for (const [type, items] of Object.entries(data).sort()) {
  ts += `  ${type}: {\n`;
  const nums = Object.keys(items).map(Number).sort((a, b) => a - b);
  for (const num of nums) {
    const blockStr = items[num];
    const match = blockStr.match(/\{q:(\d+),st:(\d+),t:(\d+),tc:(\d+),b:(\d+),p:(\d+),ps:(\d+),ss:(\d+),d:(\d+),op:(\d+),i:(\d+),cf:(\d+),cb:(\d+),ct:(\d+),s:(\d+),s2:(\d+),s3:(\d+),bi:(\d+),go:(\d+),pu:(\d+),pr:(\d+),prd:(\d+),prst:(\d+),md:(\d+),sv:(\d+),st2:(\d+),sc:(\d+),of:(\d+),sp:(\d+),sw:(\d+),pr:(\d+)\}/);
    if (match) {
      const vals = match.slice(1).map(Number);
      ts += `    ${num}: [${vals.join(',')}],\n`;
    }
  }
  ts += `  },\n`;
}
ts += `};\n\n`;

ts += `export const clothingData: Record<string, Record<number, ClothingAttributes>> = {};\n`;
ts += `for (const [type, items] of Object.entries(raw)) {\n`;
ts += `  clothingData[type] = {};\n`;
ts += `  for (const [numStr, v] of Object.entries(items)) {\n`;
ts += `    const num = parseInt(numStr);\n`;
ts += `    clothingData[type][num] = {\n`;
ts += `      quality: v[0], strength: v[1], thinness: v[2], topCut: v[3], bra: v[4], panties: v[5],\n`;
ts += `      pantsShortness: v[6], skirtShortness: v[7], dress: v[8] === 1, onePiece: v[9] === 1, inhibit: v[10],\n`;
ts += `      coverFront: v[11], coverBack: v[12], coverTop: v[13], style: v[14], style2: v[15], style3: v[16],\n`;
ts += `      bimbo: v[17] === 1, goth: v[18] === 1, punk: v[19] === 1, prep: v[20] === 1, prude: v[21] === 1,\n`;
ts += `      prostitute: v[22] === 1, maid: v[23] === 1, server: v[24] === 1, strip: v[25] === 1,\n`;
ts += `      school: v[26] === 1, office: v[27] === 1, sport: v[28] === 1, swim: v[29] === 1, price: v[30],\n`;
ts += `    };\n`;
ts += `  }\n`;
ts += `}\n`;

writeFileSync(out, ts);
console.log(`\nWrote ${out} (${files.length} types, ${Object.values(totals).reduce((a, b) => a + b, 0)} total items)`);
