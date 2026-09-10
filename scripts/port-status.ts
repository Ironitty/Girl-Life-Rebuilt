import { readdirSync, readFileSync, existsSync } from 'fs';
import { join, basename, dirname } from 'path';

const ROOT = dirname(dirname(new URL(import.meta.url).pathname));
const QSP_DIR = join(ROOT, 'GL QSP', 'locations');
const LOC_DIR = join(ROOT, 'src', 'locations');

const REGIONS: [string, string][] = [
  ['pav', 'Pavlovsk'],
  ['city', 'City'],
  ['gad', 'Gadukino'],
  ['push', 'Pushkin'],
  ['kgd', 'Kaliningrad'],
  ['map', 'Map'],
  ['menu', 'Menu'],
];

function getRegion(name: string): string {
  for (const [prefix, label] of REGIONS) {
    if (name.startsWith(prefix)) return label;
  }
  return 'Other';
}

function isStub(filePath: string): boolean {
  const content = readFileSync(filePath, 'utf-8');
  return content.includes('// Auto-generated stub');
}

function isPorted(filePath: string): boolean {
  const content = readFileSync(filePath, 'utf-8');
  return /enter\s*:/.test(content);
}

interface RegionStats {
  total: number;
  ported: number;
  stub: number;
}

const stats: Record<string, RegionStats> = {};

const qspFiles: string[] = [];
if (existsSync(QSP_DIR)) {
  for (const f of readdirSync(QSP_DIR)) {
    if (f.endsWith('.qsps')) qspFiles.push(f);
  }
}

for (const f of qspFiles) {
  const name = basename(f, '.qsps');
  const region = getRegion(name);
  if (!stats[region]) stats[region] = { total: 0, ported: 0, stub: 0 };
  stats[region].total++;
}

function collectTsFiles(dir: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectTsFiles(full));
    } else if (entry.name.endsWith('.ts') && entry.name !== 'auto-register.ts' && entry.name !== 'test.ts') {
      results.push(full);
    }
  }
  return results;
}

const tsFiles = collectTsFiles(LOC_DIR);

for (const tsFile of tsFiles) {
  const base = basename(tsFile, '.ts');
  if (base === 'index') continue;
  const region = getRegion(base);
  if (!stats[region]) stats[region] = { total: 0, ported: 0, stub: 0 };
  if (isPorted(tsFile)) {
    stats[region].ported++;
  } else if (isStub(tsFile)) {
    stats[region].stub++;
  }
}

let totalQsp = 0;
let totalPorted = 0;
let totalStub = 0;

console.log('');
console.log('=== Girl Life Port Status ===');
console.log('');

const order = ['Pavlovsk', 'City', 'Gadukino', 'Pushkin', 'Kaliningrad', 'Map', 'Menu', 'Other'];
const sorted = Object.entries(stats).sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]));

for (const [region, s] of sorted) {
  const pct = s.total > 0 ? ((s.ported / s.total) * 100).toFixed(1) : '0.0';
  console.log(`${region.padEnd(15)} ${String(s.ported).padStart(4)} / ${String(s.total).padStart(4)}  (${pct}%)`);
  totalQsp += s.total;
  totalPorted += s.ported;
  totalStub += s.stub;
}

console.log('');
const totalPct = totalQsp > 0 ? ((totalPorted / totalQsp) * 100).toFixed(2) : '0.00';
console.log(`Total: ${totalPorted} ported, ${totalStub} stub, ${totalQsp - totalPorted - totalStub} unclassified / ${totalQsp} QSP locations (${totalPct}%)`);
console.log('');
