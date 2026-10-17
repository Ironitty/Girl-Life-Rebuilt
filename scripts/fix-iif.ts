import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const LOC = join(ROOT, 'src/locations');

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

// Unescape a single-quoted JS string body: \' -> ' and \\ -> \
function unescapeSingle(s: string): string {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\' && i + 1 < s.length) { out += s[i + 1]; i++; }
    else out += s[i];
  }
  return out;
}

// Emit a template literal for pure-QSP content (escape backslash, backtick, ${)
function tplQsp(content: string): string {
  return '`' + content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
}

// Emit a template literal for JS-template branch content (preserve ${}, escape backtick only)
function tplJs(content: string): string {
  return '`' + content.replace(/`/g, '\\`') + '`';
}

function findSingleQuotedStringEnd(text: string, start: number): number {
  let i = start + 1;
  while (i < text.length) {
    const ch = text[i];
    if (ch === '\\') { i += 2; continue; }
    if (ch === "'") return i;
    i++;
  }
  return -1;
}

function findTemplateStringEnd(text: string, start: number): number {
  let i = start + 1;
  let depth = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch === '\\') { i += 2; continue; }
    if (ch === '`') return i;
    if (ch === '$' && text[i + 1] === '{') { depth++; i += 2; continue; }
    if (ch === '}' && depth > 0) { depth--; i++; continue; }
    i++;
  }
  return -1;
}

// Split a Case B iif(cond, a, b) into its three parts. A ' closes a string only when the
// next non-space char is one of , ) ] (content apostrophes like 's are followed by letters).
function findCaseBSplits(rawStr: string): { cond: string; a: string; b: string } | null {
  const openIdx = rawStr.indexOf('(');
  if (openIdx === -1) return null;
  let depth = 0;
  let inStr = false;
  let sep1 = -1;
  let sep2 = -1;
  let i = openIdx + 1;
  while (i < rawStr.length) {
    const ch = rawStr[i];
    // Skip ${...} JS interpolation blocks entirely (their inner '' must not close a QSP string)
    if (ch === '$' && rawStr[i + 1] === '{') {
      let d = 1;
      i += 2;
      while (i < rawStr.length && d > 0) {
        if (rawStr[i] === '{') d++;
        else if (rawStr[i] === '}') d--;
        i++;
      }
      continue;
    }
    if (inStr) {
      if (ch === "'") {
        let j = i + 1;
        while (j < rawStr.length && rawStr[j] === ' ') j++;
        if (j < rawStr.length && (rawStr[j] === ',' || rawStr[j] === ')' || rawStr[j] === ']')) inStr = false;
      }
      i++;
      continue;
    }
    if (ch === "'") { inStr = true; i++; continue; }
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      if (sep1 === -1) sep1 = i;
      else { sep2 = i; break; }
    }
    i++;
  }
  if (sep1 === -1 || sep2 === -1) return null;
  const cond = rawStr.slice(openIdx + 1, sep1).trim();
  const a = rawStr.slice(sep1 + 1, sep2).trim();
  let b = rawStr.slice(sep2 + 1).trim();
  if (b.endsWith(')')) b = b.slice(0, -1).trim();
  return { cond, a, b };
}

// A Case B branch is a QSP string literal whose body holds ${...} JS. Strip outer quotes, emit as template.
function branchToTpl(branch: string): string {
  const t = branch.trim();
  let content = t;
  if (t.length >= 2 && t.startsWith("'") && t.endsWith("'")) content = t.slice(1, -1);
  else if (t.length >= 2 && t.startsWith('"') && t.endsWith('"')) content = t.slice(1, -1);
  return tplJs(content);
}

function transformLine(line: string): { line: string; changed: boolean } {
  if (line.includes('qspEval(')) return { line, changed: false };

  // Case A: scene.text('iif(...)')  — pure QSP, single-quoted
  if (/scene\.text\('iif\(/.test(line)) {
    const callStart = line.indexOf('scene.text(');
    const strStart = line.indexOf("'", callStart);
    const strEnd = findSingleQuotedStringEnd(line, strStart);
    if (strEnd === -1) return { line, changed: false };
    const rawStr = line.slice(strStart + 1, strEnd);
    const unescaped = unescapeSingle(rawStr);
    const newLine = line.slice(0, callStart) + `scene.text(qspEval(${tplQsp(unescaped)}, s)` + line.slice(strEnd + 1);
    return { line: newLine, changed: true };
  }

  // Case B: scene.text(`iif(...)`)  — hybrid QSP cond + JS template branches
  if (/scene\.text\(`iif\(/.test(line)) {
    const callStart = line.indexOf('scene.text(');
    const strStart = line.indexOf('`', callStart);
    const strEnd = findTemplateStringEnd(line, strStart);
    if (strEnd === -1) return { line, changed: false };
    const rawStr = line.slice(strStart + 1, strEnd);
    const parts = findCaseBSplits(rawStr);
    if (!parts) return { line, changed: false };
    const cond = parts.cond;
    const branchA = parts.a;
    const branchB = parts.b;
    const condTpl = tplQsp(`iif(${cond}, 1, 0)`);
    const newLine = line.slice(0, callStart) +
      `scene.text(qspEval(${condTpl}, s) ? ${branchToTpl(branchA)} : ${branchToTpl(branchB)}` +
      line.slice(strEnd + 1);
    return { line: newLine, changed: true };
  }

  return { line, changed: false };
}

function ensureQspEvalImport(content: string): string {
  const re = /(import\s*\{)([^}]*)(\}\s*from\s*'[^']*qspBridge')/;
  const m = content.match(re);
  if (m) {
    if (m[2].includes('qspEval')) return content;
    const inner = m[2].trim();
    const newInner = inner ? inner + ', qspEval' : 'qspEval';
    return content.replace(re, `$1${newInner}$3`);
  }
  // No existing qspBridge import; add one at the top.
  return `import { qspEval } from '../_shared/qspBridge';\n` + content;
}

let total = 0;
let filesChanged = 0;
for (const f of walk(LOC)) {
  const content = readFileSync(f, 'utf8');
  const lines = content.split('\n');
  let changed = 0;
  for (let i = 0; i < lines.length; i++) {
    const res = transformLine(lines[i]);
    if (res.changed) { lines[i] = res.line; changed++; }
  }
  if (changed > 0) {
    let out = lines.join('\n');
    out = ensureQspEvalImport(out);
    writeFileSync(f, out);
    console.log(`Fixed ${changed} in ${f.slice(ROOT.length + 1)}`);
    total += changed;
    filesChanged++;
  }
}
console.log(`Total fixed: ${total} across ${filesChanged} files`);
