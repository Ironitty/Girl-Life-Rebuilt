import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { parseQsp } from './qsp-transpile/parser';
import type { QspNode, QspAct } from './qsp-transpile/ast';

const QSP_DIR = join(import.meta.dirname, '..', 'GL QSP', 'locations');
const TS_DIR = join(import.meta.dirname, '..', 'src', 'locations');

function findTsFile(qspName: string): string | null {
  const base = qspName.replace('.qsps', '');
  const entries = readdirSync(TS_DIR, { withFileTypes: true, recursive: true }) as any[];
  for (const e of entries) {
    if (e.isFile() && e.name === base + '.ts') {
      return join(e.parentPath, e.name);
    }
  }
  return null;
}

function extractActLabels(node: QspNode, labels: Set<string>): void {
  if (!node) return;
  if (node.kind === 'act') {
    const act = node as QspAct;
    if (!act.dynamicLabel && act.label) labels.add(act.label);
    for (const child of act.body) extractActLabels(child, labels);
  } else if (node.kind === 'scene') {
    for (const child of node.body) extractActLabels(child, labels);
  } else if (node.kind === 'if') {
    for (const child of node.thenBody) extractActLabels(child, labels);
    for (const child of node.elseBody) extractActLabels(child, labels);
  } else if (node.kind === 'while' || node.kind === 'dowhile') {
    for (const child of node.body) extractActLabels(child, labels);
  }
}

function extractTsLabels(tsContent: string): Set<string> {
  const labels = new Set<string>();
  const patterns = [
    { re: /label\s*:\s*'((?:[^'\\]|\\.)*)'/g, unescape: (s: string) => s.replace(/\\'/g, "'") },
    { re: /label\s*:\s*"((?:[^"\\]|\\.)*)"/g, unescape: (s: string) => s.replace(/\\"/g, '"') },
    { re: /label\s*:\s*`([^`]*)`/g, unescape: (s: string) => s },
    { re: /labelFn\s*:\s*(?:\([^)]*\))?\s*=>\s*'((?:[^'\\]|\\.)*)'/g, unescape: (s: string) => s.replace(/\\'/g, "'") },
    { re: /labelFn\s*:\s*(?:\([^)]*\))?\s*=>\s*`([^`]*)`/g, unescape: (s: string) => s },
  ];
  for (const { re, unescape } of patterns) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(tsContent)) !== null) labels.add(unescape(m[1]));
  }
  return labels;
}

function normalize(s: string): string {
  return s
    .replace(/''/g, "'")
    .replace(/<</g, '⟨')
    .replace(/>>/g, '⟩')
    .replace(/\$\{/g, '⟨')
    .replace(/\}/g, '⟩')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

// Split a QSP label into [staticPrefix, isDynamic]
// Dynamic if it contains <<...>> or the parser's [+dyn] suffix.
function splitLabel(label: string): [string, boolean] {
  let dynamic = false;
  let s = label;
  const plusMatch = s.match(/\s*\[\+.*$/);
  if (plusMatch) {
    dynamic = true;
    s = s.slice(0, plusMatch.index);
  }
  if (s.includes('<<')) {
    dynamic = true;
    s = s.slice(0, s.indexOf('<<'));
  }
  return [s.trim(), dynamic];
}

// Global label index across ALL TS files, to detect labels relocated to other files.
const allTsEntries = readdirSync(TS_DIR, { withFileTypes: true, recursive: true }) as any[];
const globalTsLabels = new Set<string>();
for (const e of allTsEntries) {
  if (!e.isFile() || !e.name.endsWith('.ts')) continue;
  const c = readFileSync(join(e.parentPath, e.name), 'utf-8');
  for (const l of extractTsLabels(c)) globalTsLabels.add(normalize(l));
}

const qspFiles = readdirSync(QSP_DIR).filter((f) => f.endsWith('.qsps')).sort();
let totalMissing = 0;
let locationsChecked = 0;
let locationsWithMissing = 0;

for (const qspFile of qspFiles) {
  const qspPath = join(QSP_DIR, qspFile);
  const content = readFileSync(qspPath, 'utf-8');
  const loc = parseQsp(content, qspFile);

  const qspLabels = new Set<string>();
  for (const scene of loc.scenes) extractActLabels(scene, qspLabels);
  for (const node of loc.topLevel) extractActLabels(node, qspLabels);

  if (qspLabels.size === 0) continue;

  const tsPath = findTsFile(qspFile);
  if (!tsPath) {
    console.log(`\n${qspFile}: NO TS FILE FOUND (${qspLabels.size} QSP actions)`);
    totalMissing += qspLabels.size;
    locationsWithMissing++;
    locationsChecked++;
    continue;
  }

  const tsContent = readFileSync(tsPath, 'utf-8');
  const tsLabels = extractTsLabels(tsContent);
  const tsNorm = [...tsLabels].map(normalize);

  const missingExact: string[] = [];
  const missingDynamic: string[] = [];
  const moved: string[] = [];

  for (const label of qspLabels) {
    const [prefix, dynamic] = splitLabel(label);
    const normFull = normalize(label);
    const normPrefix = normalize(prefix);

    if (!dynamic) {
      if (!tsNorm.includes(normFull)) {
        if (globalTsLabels.has(normFull)) moved.push(label);
        else missingExact.push(label);
      }
    } else {
      const found = tsNorm.some((t) => t.startsWith(normPrefix) || (normPrefix.length > 0 && t.includes(normPrefix)));
      if (!found) {
        const foundGlobal = [...globalTsLabels].some((t) => t.startsWith(normPrefix) || (normPrefix.length > 0 && t.includes(normPrefix)));
        if (foundGlobal) moved.push(label);
        else missingDynamic.push(label);
      }
    }
  }

  locationsChecked++;
  if (missingExact.length > 0 || missingDynamic.length > 0 || moved.length > 0) {
    if (missingExact.length > 0 || missingDynamic.length > 0) locationsWithMissing++;
    totalMissing += missingExact.length + missingDynamic.length;
    console.log(`\n${qspFile} (${qspLabels.size} QSP / ${tsLabels.size} TS):`);
    for (const m of missingExact.sort()) console.log(`  [EXACT]    ${m}`);
    for (const m of missingDynamic.sort()) console.log(`  [DYNAMIC]  ${m}`);
    for (const m of moved.sort()) console.log(`  [MOVED]    ${m}`);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Locations checked: ${locationsChecked}`);
console.log(`Locations with missing actions: ${locationsWithMissing}`);
console.log(`Total missing action labels: ${totalMissing}`);
