import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/locations';
const DRY = process.argv.includes('--dry-run');
const KILL_RE = /\(s as any\)\.(\w[\w.]*) = undefined;/;

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (e.endsWith('.ts')) out.push(p);
  }
  return out;
}

function findLoops(lines: string[]): { start: number; end: number }[] {
  const loops: { start: number; end: number }[] = [];
  let i = 0;
  while (i < lines.length) {
    if (!/\bdo\s*\{/.test(lines[i])) { i++; continue; }
    let depth = 0, j = i, end = -1;
    while (j < lines.length) {
      for (const ch of lines[j]) { if (ch === '{') depth++; else if (ch === '}') depth--; }
      if (depth === 0 && j > i && /\}\s*while\s*\(/.test(lines[j])) { end = j; break; }
      j++;
    }
    if (end > 0) { loops.push({ start: i, end }); i = end; }
    i++;
  }
  return loops;
}

let totalMoves = 0;
for (const file of walk(ROOT)) {
  let lines = readFileSync(file, 'utf8').split('\n');
  // Process loops bottom-up so splices don't invalidate earlier indices.
  for (const loop of findLoops(lines).sort((a, b) => b.end - a.end)) {
    const { start, end } = loop;
    const wc = lines[end].match(/while\s*\(\(\(s as any\)\.(\w[\w.]*)/);
    const counter = wc?.[1];
    if (!counter) continue;
    // Locate the clobber of the termination counter (or its parent) inside the body.
    let k = -1;
    for (let x = start + 1; x < end; x++) {
      const km = lines[x].match(KILL_RE);
      if (km && (km[1] === counter || counter.startsWith(km[1] + '.'))) { k = x; break; }
    }
    if (k < 0) continue;
    // Expand to the full consecutive block of killvar lines around the clobber.
    let lo = k, hi = k;
    while (lo > start && KILL_RE.test(lines[lo - 1])) lo--;
    while (hi < end - 1 && KILL_RE.test(lines[hi + 1])) hi++;
    const block = lines.slice(lo, hi + 1);
    if (DRY) {
      console.log(`${file}:${k + 1}: move ${block.length} killvar line(s) [${lo + 1}-${hi + 1}] after loop-end ${end + 1} (counter '${counter}')`);
      totalMoves++;
      continue;
    }
    lines.splice(lo, hi - lo + 1);
    const newEnd = end - (hi - lo + 1);
    lines.splice(newEnd + 1, 0, ...block);
    totalMoves++;
  }
  if (!DRY) writeFileSync(file, lines.join('\n'));
}
console.log(`\n=== ${DRY ? 'would move' : 'moved'} ${totalMoves} clobber block(s) ===`);
