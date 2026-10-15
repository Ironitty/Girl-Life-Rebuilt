import { readFileSync, existsSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname, basename } from 'path';

const ROOT = '/home/depressedtsukasa/Documents/GL';
const LOC_DIR = join(ROOT, 'src', 'locations');
const PUBLIC_DIR = join(ROOT, 'public');
const LOG_DIR = join(ROOT, 'logs');

const EXT = 'jpg|jpeg|png|webp|gif|mp4|mp3|ogg|wav';

interface Ref {
  file: string;
  line: number;
  raw: string;
}

interface StaticRef extends Ref {
  path: string;
}

interface RandomRef extends Ref {
  prefix: string;
  n: number;
  off: number;
  ext: string;
}

interface DynamicRef extends Ref {
  prefix: string;
}

function lineOf(text: string, idx: number): number {
  return text.slice(0, idx).split('\n').length;
}

function* walk(dir: string): Generator<string> {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) yield* walk(full);
    else if (/\.(ts|tsx)$/.test(entry)) yield full;
  }
}

function resolve(ref: string): boolean {
  return existsSync(join(PUBLIC_DIR, ref));
}

interface Triage {
  kind: 'typo' | 'absent';
  fix?: string;
  dirExists: boolean;
  note?: string;
}

function classifyMissing(p: string): Triage {
  const dir = dirname(p);
  const file = basename(p);
  const dirAbs = join(PUBLIC_DIR, dir);
  const dirExists = existsSync(dirAbs);
  const siblings = dirExists ? readdirSync(dirAbs) : [];

  const ci = siblings.find((s) => s.toLowerCase() === file.toLowerCase() && s !== file);
  if (ci) return { kind: 'typo', fix: join(dir, ci), dirExists, note: 'case mismatch' };

  const parts = p.split('/');
  for (let i = 0; i < parts.length - 1; i++) {
    if (parts[i] === parts[i + 1]) {
      const dedup = [...parts.slice(0, i), ...parts.slice(i + 1)].join('/');
      if (existsSync(join(PUBLIC_DIR, dedup))) return { kind: 'typo', fix: dedup, dirExists, note: 'doubled segment' };
    }
  }

  const m = file.match(/^(.*?)(\d+)(\.[a-z0-9]+)$/);
  if (m) {
    const pre = m[1];
    const n = parseInt(m[2], 10);
    const ext = m[3];
    for (const cand of [n - 1, n + 1]) {
      if (cand >= 0 && existsSync(join(dirAbs, `${pre}${cand}${ext}`))) {
        return { kind: 'absent', dirExists, note: `sequence gap (${pre}${cand}${ext} exists)` };
      }
    }
  }

  return { kind: 'absent', dirExists };
}

function classifyRandom(prefix: string, ext: string): Triage {
  const dir = dirname(prefix);
  const dirAbs = join(PUBLIC_DIR, dir);
  const dirExists = existsSync(dirAbs);
  if (dirExists) {
    const siblings = readdirSync(dirAbs);
    const stem = basename(prefix);
    const matching = siblings.filter((s: string) => s.startsWith(stem) && s.endsWith(ext));
    if (matching.length > 0) return { kind: 'absent', dirExists, note: `sequence gap (${matching.length} file(s) exist)` };
    return { kind: 'absent', dirExists, note: 'dir exists, sequence never shipped' };
  }
  const parts = prefix.split('/');
  for (let i = 0; i < parts.length - 1; i++) {
    if (parts[i] === parts[i + 1]) {
      const dedupDir = [...parts.slice(0, i), ...parts.slice(i + 1), basename(prefix)].join('/');
      if (existsSync(join(PUBLIC_DIR, dirname(dedupDir)))) return { kind: 'typo', fix: dedupDir, dirExists: false, note: 'doubled segment' };
    }
  }
  return { kind: 'absent', dirExists: false, note: 'dir missing from bundle' };
}

const STATIC_RE = new RegExp(`['"]((?:images|sound)/[^'"]+\\.(?:${EXT}))['"](?!\\s*\\+)`, 'g');
const RANDOM_CONCAT_RE = /['"]((?:images|sound)\/[^'"]*)['"]\s*\+\s*\(Math\.floor\(Math\.random\(\)\s*\*\s*(\d+)\)\s*\+\s*(\d+)\)\s*\+\s*['"](\.[a-z0-9]+)['"]/g;
const RANDOM_TPL_RE = /`((?:images|sound)\/[^`$]*)\$\{\(Math\.floor\(Math\.random\(\)\s*\*\s*(\d+)\)\s*\+\s*(\d+)\)\}(\.[a-z0-9]+)`/g;
const DYNAMIC_CONCAT_RE = /['"]((?:images|sound)\/[^'"]*)['"]\s*\+\s*(?!\(Math\.floor\(Math\.random\()/g;
const DYNAMIC_TPL_RE = /`((?:images|sound)\/[^`$]*)\$\{(?!\(Math\.floor\(Math\.random\()/g;

const staticRefs = new Map<string, StaticRef[]>();
const randomRefs = new Map<string, RandomRef[]>();
const dynamicRefs = new Map<string, DynamicRef[]>();
let fileCount = 0;
let staticCount = 0;
let randomCount = 0;
let dynamicCount = 0;

for (const file of walk(LOC_DIR)) {
  fileCount++;
  const text = readFileSync(file, 'utf8');
  const rel = file.slice(ROOT.length + 1);

  let m: RegExpExecArray | null;
  STATIC_RE.lastIndex = 0;
  while ((m = STATIC_RE.exec(text)) !== null) {
    const path = m[1];
    staticCount++;
    if (!staticRefs.has(path)) staticRefs.set(path, []);
    staticRefs.get(path)!.push({ file: rel, line: lineOf(text, m.index), raw: m[0], path });
  }

  RANDOM_CONCAT_RE.lastIndex = 0;
  while ((m = RANDOM_CONCAT_RE.exec(text)) !== null) {
    randomCount++;
    const key = `${m[1]}|${m[2]}|${m[3]}|${m[4]}`;
    if (!randomRefs.has(key)) randomRefs.set(key, []);
    randomRefs.get(key)!.push({ file: rel, line: lineOf(text, m.index), raw: m[0], prefix: m[1], n: +m[2], off: +m[3], ext: m[4] });
  }

  RANDOM_TPL_RE.lastIndex = 0;
  while ((m = RANDOM_TPL_RE.exec(text)) !== null) {
    randomCount++;
    const key = `${m[1]}|${m[2]}|${m[3]}|${m[4]}`;
    if (!randomRefs.has(key)) randomRefs.set(key, []);
    randomRefs.get(key)!.push({ file: rel, line: lineOf(text, m.index), raw: m[0], prefix: m[1], n: +m[2], off: +m[3], ext: m[4] });
  }

  DYNAMIC_CONCAT_RE.lastIndex = 0;
  while ((m = DYNAMIC_CONCAT_RE.exec(text)) !== null) {
    dynamicCount++;
    const prefix = m[1];
    if (!dynamicRefs.has(prefix)) dynamicRefs.set(prefix, []);
    dynamicRefs.get(prefix)!.push({ file: rel, line: lineOf(text, m.index), raw: m[0], prefix });
  }

  DYNAMIC_TPL_RE.lastIndex = 0;
  while ((m = DYNAMIC_TPL_RE.exec(text)) !== null) {
    dynamicCount++;
    const prefix = m[1];
    if (!dynamicRefs.has(prefix)) dynamicRefs.set(prefix, []);
    dynamicRefs.get(prefix)!.push({ file: rel, line: lineOf(text, m.index), raw: m[0], prefix });
  }
}

const missingStatic: StaticRef[][] = [];
for (const [path, refs] of staticRefs) {
  if (!resolve(path)) missingStatic.push(refs);
}

interface MissingRandom {
  prefix: string;
  n: number;
  off: number;
  ext: string;
  missingIdx: number[];
  refs: RandomRef[];
}
const missingRandom: MissingRandom[] = [];
for (const [, refs] of randomRefs) {
  const first = refs[0];
  const missingIdx: number[] = [];
  for (let i = 0; i < first.n; i++) {
    const idx = first.off + i;
    const cand = `${first.prefix}${idx}${first.ext}`;
    if (!resolve(cand)) missingIdx.push(idx);
  }
  if (missingIdx.length > 0) missingRandom.push({ prefix: first.prefix, n: first.n, off: first.off, ext: first.ext, missingIdx, refs });
}

const lines: string[] = [];
lines.push('=== ASSET INTEGRITY AUDIT ===');
lines.push(`files scanned: ${fileCount}`);
lines.push(`static refs: ${staticCount} (${staticRefs.size} distinct)`);
lines.push(`random-suffix refs: ${randomCount} (${randomRefs.size} distinct)`);
lines.push(`dynamic refs: ${dynamicCount} (${dynamicRefs.size} distinct)`);
lines.push('');
const typoStatic: { path: string; fix: string; note: string; refs: StaticRef[] }[] = [];
const absentStatic: { path: string; note?: string; refs: StaticRef[] }[] = [];
for (const refs of missingStatic) {
  const t = classifyMissing(refs[0].path);
  if (t.kind === 'typo' && t.fix) typoStatic.push({ path: refs[0].path, fix: t.fix, note: t.note ?? '', refs });
  else absentStatic.push({ path: refs[0].path, note: t.note, refs });
}
lines.push(`--- MISSING STATIC: ${missingStatic.length} (typo ${typoStatic.length}, absent ${absentStatic.length}) ---`);
lines.push(`  [TYPO - fix code path]`);
for (const t of typoStatic) {
  lines.push(`  ${t.path}  ->  ${t.fix}  (${t.note})`);
  for (const r of t.refs.slice(0, 2)) lines.push(`      ${r.file}:${r.line}`);
  if (t.refs.length > 2) lines.push(`      ... +${t.refs.length - 2} more`);
}
lines.push(`  [ABSENT - Cat 3, not in shipped bundle]`);
for (const a of absentStatic) {
  lines.push(`  ${a.path}${a.note ? `  (${a.note})` : ''}`);
  for (const r of a.refs.slice(0, 2)) lines.push(`      ${r.file}:${r.line}`);
  if (a.refs.length > 2) lines.push(`      ... +${a.refs.length - 2} more`);
}
lines.push('');
const typoRandom: { mr: MissingRandom; fix: string; note: string }[] = [];
const absentRandom: { mr: MissingRandom; note?: string }[] = [];
for (const mr of missingRandom) {
  const t = classifyRandom(mr.prefix, mr.ext);
  if (t.kind === 'typo' && t.fix) typoRandom.push({ mr, fix: t.fix, note: t.note ?? '' });
  else absentRandom.push({ mr, note: t.note });
}
lines.push(`--- MISSING RANDOM-SUFFIX: ${missingRandom.length} (typo ${typoRandom.length}, absent ${absentRandom.length}) ---`);
lines.push(`  [TYPO - fix code path]`);
for (const { mr, fix, note } of typoRandom) {
  lines.push(`  ${mr.prefix}*${mr.ext}  ->  ${fix}  (${note})  missing: ${mr.missingIdx.join(',')}`);
  for (const r of mr.refs.slice(0, 2)) lines.push(`      ${r.file}:${r.line}`);
}
lines.push(`  [ABSENT - Cat 3, not in shipped bundle]`);
for (const { mr, note } of absentRandom) {
  lines.push(`  ${mr.prefix}*${mr.ext}  range ${mr.off}..${mr.off + mr.n - 1}  missing: ${mr.missingIdx.join(',')}${note ? `  (${note})` : ''}`);
  for (const r of mr.refs.slice(0, 2)) lines.push(`      ${r.file}:${r.line}`);
  if (mr.refs.length > 2) lines.push(`      ... +${mr.refs.length - 2} more`);
}
lines.push('');
lines.push(`--- DYNAMIC (review, not a hard fail): ${dynamicRefs.size} ---`);
for (const [prefix, refs] of dynamicRefs) {
  lines.push(`  ${prefix}  (${refs.length} ref(s))  e.g. ${refs[0].file}:${refs[0].line}`);
}

const report = lines.join('\n');
console.log(report);

mkdirSync(LOG_DIR, { recursive: true });
const ts = new Date().toISOString().replace(/[:.]/g, '-');
writeFileSync(join(LOG_DIR, `asset-audit-${ts}.log`), report + '\n');

const typoCount = typoStatic.length + typoRandom.length;
const absentCount = absentStatic.length + absentRandom.length;
const failed = typoCount > 0;
console.log(`\n=== ${failed ? 'FAIL' : 'PASS'}: ${typoCount} typo(s) to fix, ${absentCount} absent (Cat 3, documented) ===`);
process.exit(failed ? 1 : 0);
