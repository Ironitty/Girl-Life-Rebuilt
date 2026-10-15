import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const QSP_DIR = path.resolve(__dirname, '../GL QSP/locations');

export interface Write {
  var: string;
  op: string; // '+', '-', '*', '/', '='
  amount: number;
}

export interface Call {
  target: string;
  label: string;
}

export interface Contract {
  location: string;
  arg: string;
  label: string;
  writes: Write[];
  nav: string[];
  calls: Call[];
  ambiguous?: boolean; // same (loc,arg,label) has 2+ distinct write-sets
}

// self-arithmetic: var += N | var -= N | var *= N | var /= N | var = var op N | var = N
const RE_SELF_ARITH = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*(\+=|-=|\*=|\/=|=)\s*(.+?)\s*$/;
const RE_NUM = /^-?\d+$/;

const RE_GS_CALL = /^gs\s+'([^']*)'\s*(?:,\s*'([^']*)')?(.*)$/;

function parseStatements(body: string): { writes: Write[]; nav: string[]; calls: Call[]; other: string[] } {
  const writes: Write[] = [];
  const nav: string[] = [];
  const calls: Call[] = [];
  const other: string[] = [];
  const parts = body.split(/&|\n/).map((p) => p.trim()).filter((p) => p.length > 0);
  for (const part of parts) {
    if (/^(\*clr|cla|clt|cls)\b/.test(part)) continue;
    if (/^(gt|xgt)\s/.test(part) || /^(gt|xgt)$/.test(part)) { nav.push(part); continue; }
    if (part.startsWith('$')) { other.push(part); continue; }
    if (/^gs\s/.test(part) || /^gs$/.test(part)) {
      const gm = part.match(RE_GS_CALL);
      if (gm) { calls.push({ target: gm[1], label: gm[2] ?? '' }); continue; }
      other.push(part);
      continue;
    }
    if (/^func\(/.test(part)) { other.push(part); continue; }
    const m = part.match(RE_SELF_ARITH);
    if (m) {
      const [, v, op, rhs] = m;
      if (op === '=') {
        const selfM = rhs.match(new RegExp(`^\\s*${v}\\s*([+\\-*/])\\s*(.+?)\\s*$`));
        if (selfM && RE_NUM.test(selfM[2])) writes.push({ var: v, op: selfM[1], amount: parseInt(selfM[2], 10) });
        else if (RE_NUM.test(rhs)) writes.push({ var: v, op: '=', amount: parseInt(rhs, 10) });
        else other.push(part);
      } else if (RE_NUM.test(rhs)) {
        writes.push({ var: v, op: op[0], amount: parseInt(rhs, 10) });
      } else {
        other.push(part);
      }
    } else {
      other.push(part);
    }
  }
  return { writes, nav, calls, other };
}

function indentOf(line: string): number {
  const m = line.match(/^[ \t]*/);
  return m ? m[0].replace(/\t/g, '    ').length : 0;
}

function extractFromFile(file: string): Contract[] {
  const location = path.basename(file, '.qsps');
  const lines = fs.readFileSync(file, 'utf-8').split('\n');
  const contracts: Contract[] = [];
  let currentArg = '';
  let argIndent = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const ind = indentOf(line);
    const trimmed = line.trim();

    const argM = trimmed.match(/^if\s+\$ARGS\[0\]\s*=\s*'([^']*)'\s*:\s*$/);
    if (argM) { currentArg = argM[1]; argIndent = ind; continue; }
    if (currentArg !== '' && trimmed === 'end' && ind <= argIndent) { currentArg = ''; argIndent = -1; continue; }

    const actM = trimmed.match(/^act\s+'((?:[^'\\]|\\.)*)'\s*:\s*(.*)$/);
    if (actM && currentArg !== '') {
      const label = actM[1];
      let body = actM[2].trim();
      if (body === '') {
        const actIndent = ind;
        const bodyLines: string[] = [];
        let j = i + 1;
        while (j < lines.length) {
          const raw = lines[j];
          if (raw.trim() === '') { j++; continue; } // blank lines do not end the body
          const nind = indentOf(raw);
          if (nind <= actIndent) break;
          bodyLines.push(raw.trim());
          j++;
        }
        body = bodyLines.join('\n');
        i = j - 1;
      }
      const { writes, nav, calls, other } = parseStatements(body);
      // clean contract: >=1 write or >=1 call, no 'other' (no $/nested-if/func), pure-gt nav
      if ((writes.length > 0 || calls.length > 0) && other.length === 0) {
        contracts.push({ location, arg: currentArg, label, writes, nav, calls });
      }
    }
  }
  return contracts;
}

export function extractContracts(): Contract[] {
  const files = fs.readdirSync(QSP_DIR).filter((f) => f.endsWith('.qsps'));
  let all: Contract[] = [];
  for (const f of files) all = all.concat(extractFromFile(path.join(QSP_DIR, f)));
  // Flag label collisions: same (loc,arg,label) with 2+ distinct write-sets is ambiguous.
  const byKey = new Map<string, Set<string>>();
  for (const c of all) {
    const key = `${c.location}\u0000${c.arg}\u0000${c.label}`;
    const sig = JSON.stringify(c.writes);
    if (!byKey.has(key)) byKey.set(key, new Set());
    byKey.get(key)!.add(sig);
  }
  for (const c of all) {
    const key = `${c.location}\u0000${c.arg}\u0000${c.label}`;
    if ((byKey.get(key)?.size ?? 0) > 1) c.ambiguous = true;
  }
  return all;
}

// CLI: print a summary when run directly.
if (process.argv[1] && fileURLToPath(import.meta.url).endsWith(path.basename(process.argv[1]))) {
  const all = extractContracts();
  const withCalls = all.filter((c) => c.calls.length > 0);
  console.log(`Total clean contracts: ${all.length}`);
  console.log(`  With writes only: ${all.filter((c) => c.writes.length > 0 && c.calls.length === 0).length}`);
  console.log(`  With calls (qspCall): ${withCalls.length}`);
  console.log(`Across ${new Set(all.map((c) => c.location)).size} locations`);
  const byVar = new Map<string, number>();
  for (const c of all) for (const w of c.writes) byVar.set(w.var, (byVar.get(w.var) ?? 0) + 1);
  console.log('\nWrites by var (top 20):');
  for (const [v, n] of [...byVar.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20)) console.log(`  ${v}: ${n}`);
}
