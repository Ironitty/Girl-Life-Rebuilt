import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/locations';

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

const KILL_RE = /\(s as any\)\.(\w[\w.]*) = undefined;/;

let total = 0;
const byFile = new Map<string, number>();
for (const file of walk(ROOT)) {
  const lines = readFileSync(file, 'utf8').split('\n');
  let i = 0;
  while (i < lines.length) {
    if (!/\bdo\s*\{/.test(lines[i])) { i++; continue; }
    let depth = 0, j = i, end = -1;
    while (j < lines.length) {
      for (const ch of lines[j]) { if (ch === '{') depth++; else if (ch === '}') depth--; }
      if (depth === 0 && j > i && /\}\s*while\s*\(/.test(lines[j])) { end = j; break; }
      j++;
    }
    if (end > 0) {
      // Termination counter = the var in the while condition (may be dotted, e.g. sd_cum.i).
      const wc = lines[end].match(/while\s*\(\(\(s as any\)\.(\w[\w.]*)/);
      const counter = wc?.[1];
      if (counter) {
        for (let k = i + 1; k < end; k++) {
          const km = lines[k].match(KILL_RE);
          if (!km) continue;
          const killed = km[1];
          // A clobber followed by return/break before the loop-end exits the loop, so it is not an infinite-loop bug.
          let exits = false;
          for (let y = k + 1; y < end; y++) { if (/^\s*(return|break)\s*;/.test(lines[y])) { exits = true; break; } }
          if (exits) continue;
          // Bug only if the clobber hits the termination counter or a parent object of it.
          if (killed === counter || counter.startsWith(killed + '.')) {
            console.log(`${file}:${k + 1}: '${killed}' clobbers termination counter '${counter}' (loop ${i + 1}-${end + 1})`);
            total++;
            byFile.set(file, (byFile.get(file) ?? 0) + 1);
          }
        }
      }
      i = end;
    }
    i++;
  }
}
console.log(`\n=== ${total} clobber bug(s) in ${byFile.size} file(s) ===`);
for (const [f, n] of [...byFile.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${n}  ${f}`);
