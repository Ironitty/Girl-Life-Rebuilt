import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCATIONS_DIR = path.resolve(__dirname, '../src/locations');
const QSP_DIR = path.resolve(__dirname, '../GL QSP/locations');

interface QspAction {
  label: string;
  isDynamic: boolean;
  goto: [string, string] | null;
  gotoDynamic: boolean;
  line: number;
}

interface TsAction {
  label: string;
  goto: [string, string] | null;
  gotoDynamic: boolean;
  line: number;
}

interface ActionMismatch {
  type: 'missing' | 'extra' | 'goto_mismatch';
  qspLabel?: string;
  tsLabel?: string;
  qspGoto?: [string, string] | null;
  tsGoto?: [string, string] | null;
  qspLine?: number;
  tsLine?: number;
}

interface SectionResult {
  qspLabel: string;
  tsFuncName: string;
  qspActions: QspAction[];
  tsActions: TsAction[];
  mismatches: ActionMismatch[];
}

interface AuditResult {
  file: string;
  hasImage: boolean;
  hasUnconditionalActions: boolean;
  hasAnyActions: boolean;
  hasDefaultScene: boolean;
  actionCount: number;
  unconditionalActionCount: number;
  qspHasActions: boolean;
  qspHasImage: boolean;
  qspFile: string | null;
  sections: SectionResult[];
  totalMismatches: number;
}

function toPascalCase(s: string): string {
  return s.replace(/\[(\d+)\]/g, '$1').replace(/&/g, '_').replace(/-/g, '_')
    .replace(/^(.)/, c => c.toUpperCase())
    .replace(/_([a-z])/g, (_, c) => c.toUpperCase())
    .replace(/ ([a-z])/g, (_, c) => c.toUpperCase())
    .replace(/ /g, '')
    .replace(/\./g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '_');
}

function qspLabelToTsFunc(label: string): string {
  return label === '' ? 'enterDefault' : `enter${toPascalCase(label)}`;
}

function unescapeQsp(s: string): string {
  return s.replace(/''/g, "'");
}

function unescapeTs(s: string): string {
  return s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}

function findLocationFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_shared') continue;
      files.push(...findLocationFiles(full));
    } else if (entry.name.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

function extractFunction(src: string, name: string): string | null {
  const idx = src.indexOf(`function ${name}(`);
  if (idx === -1) return null;
  const braceStart = src.indexOf('{', idx);
  if (braceStart === -1) return null;
  let depth = 0;
  let inString: string | null = null;
  let inLineComment = false;
  let inBlockComment = false;
  let inTemplate = false;
  for (let i = braceStart; i < src.length; i++) {
    const ch = src[i];
    const next = src[i + 1];
    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (ch === '*' && next === '/') { inBlockComment = false; i++; }
      continue;
    }
    if (inString) {
      if (ch === '\\') { i++; continue; }
      if (ch === inString) inString = null;
      continue;
    }
    if (inTemplate) {
      if (ch === '\\') { i++; continue; }
      if (ch === '`') inTemplate = false;
      continue;
    }
    if (ch === '/' && next === '/') { inLineComment = true; i++; continue; }
    if (ch === '/' && next === '*') { inBlockComment = true; i++; continue; }
    if (ch === "'" || ch === '"') { inString = ch; continue; }
    if (ch === '`') { inTemplate = true; continue; }
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) return src.slice(braceStart, i + 1);
    }
  }
  return null;
}

function analyzeFunction(body: string): { hasImage: boolean; hasAnyActions: boolean; hasUnconditionalActions: boolean; actionCount: number; unconditionalActionCount: number } {
  let hasImage = false;
  let hasAnyActions = false;
  let hasUnconditionalActions = false;
  let actionCount = 0;
  let unconditionalActionCount = 0;

  let depth = 0;
  let inString: string | null = null;
  let inLineComment = false;
  let inBlockComment = false;
  let inTemplate = false;

  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    const next = body[i + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (ch === '*' && next === '/') { inBlockComment = false; i++; }
      continue;
    }
    if (inString) {
      if (ch === '\\') { i++; continue; }
      if (ch === inString) inString = null;
      continue;
    }
    if (inTemplate) {
      if (ch === '\\') { i++; continue; }
      if (ch === '`') inTemplate = false;
      continue;
    }
    if (ch === '/' && next === '/') { inLineComment = true; i++; continue; }
    if (ch === '/' && next === '*') { inBlockComment = true; i++; continue; }
    if (ch === "'" || ch === '"') { inString = ch; continue; }
    if (ch === '`') { inTemplate = true; continue; }

    if (ch === '{') depth++;
    if (ch === '}') depth--;

    if (ch === 's' && body.startsWith('scene.img', i)) {
      hasImage = true;
    }
    if (ch === 's' && body.startsWith('scene.actions', i)) {
      actionCount++;
      hasAnyActions = true;
      if (depth <= 1) {
        unconditionalActionCount++;
        hasUnconditionalActions = true;
      }
    }
  }

  return { hasImage, hasAnyActions, hasUnconditionalActions, actionCount, unconditionalActionCount };
}

function findQspFile(tsFile: string): string | null {
  const base = path.basename(tsFile, '.ts');
  const qspPath = path.join(QSP_DIR, `${base}.qsps`);
  if (fs.existsSync(qspPath)) return qspPath;
  return null;
}

function extractQspDefaultScene(qspSrc: string): string | null {
  const lines = qspSrc.split('\n');
  const startRe = /^if\s+\$ARGS\[0\]\s*=\s*''/;
  let startIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (startRe.test(lines[i].trim())) {
      startIdx = i;
      break;
    }
  }
  if (startIdx === -1) return null;

  const startLine = lines[startIdx].trim();
  const colonIdx = startLine.indexOf(':');
  if (colonIdx !== -1) {
    const afterColon = startLine.slice(colonIdx + 1).trim();
    if (afterColon.length > 0) {
      return startLine;
    }
  }

  let depth = 1;
  let endIdx = -1;
  for (let i = startIdx + 1; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (/^if\s/.test(trimmed)) {
      const colonIdx = trimmed.indexOf(':');
      if (colonIdx === -1 || trimmed.slice(colonIdx + 1).trim().length === 0) {
        depth++;
      }
    }
    if (trimmed === 'end' || trimmed === 'end ') {
      depth--;
      if (depth === 0) { endIdx = i; break; }
    }
  }
  if (endIdx === -1) return null;
  return lines.slice(startIdx, endIdx + 1).join('\n');
}

function analyzeQspScene(scene: string): { hasActions: boolean; hasImage: boolean } {
  const hasActions = /\bact\s+['"]/.test(scene) || /\*a\s+['"]/.test(scene);
  const hasImage = /\$backimage\s*=/.test(scene) || /<img/.test(scene) || /\$setloc\['StageImage'\]/.test(scene);
  return { hasActions, hasImage };
}

function parseQspSections(qspSrc: string): Map<string, QspAction[]> {
  const lines = qspSrc.split('\n');
  const sections = new Map<string, QspAction[]>();

  const sectionStarts: { label: string; line: number; isOneline: boolean }[] = [];
  let inBlockComment = false;
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const trimmed = raw.trim();
    if (trimmed.startsWith('!{') || trimmed.startsWith('!!{')) { inBlockComment = true; continue; }
    if (inBlockComment) {
      if (trimmed.endsWith('!}') || trimmed === 'end}' || trimmed === '}') inBlockComment = false;
      continue;
    }
    if (/^[\t ]/.test(raw)) continue;
    const m = raw.match(/if\s+\$ARGS\[0\]\s*=\s*'((?:[^']|'')*)'/i);
    if (m) {
      const firstVal = unescapeQsp(m[1]);
      const isMulti = /or\s+\$ARGS\[0\]/.test(raw) || /or\s+\$loc_arg/.test(raw);
      const label = isMulti ? (firstVal === '' ? '' : firstVal) : firstVal;
      const isOneline = /\S/.test(trimmed.split(/:\s*/).slice(1).join(':') || '');
      sectionStarts.push({ label, line: i, isOneline });
    }
  }

  if (sectionStarts.length === 0) {
    sections.set('', extractQspActions(lines, 0, lines.length));
    return sections;
  }

  const preambleEnd = sectionStarts[0].line;
  const preambleActions = extractQspActions(lines, 0, preambleEnd);
  if (preambleActions.length > 0) {
    sections.set('__preamble__', preambleActions);
  }

  for (let i = 0; i < sectionStarts.length; i++) {
    const start = sectionStarts[i].line;
    const end = i + 1 < sectionStarts.length ? sectionStarts[i + 1].line : lines.length;
    const sectionEnd = sectionStarts[i].isOneline ? start + 1 : end;
    const actions = extractQspActions(lines, start, sectionEnd);
    const label = sectionStarts[i].label;
    if (!sections.has(label)) {
      sections.set(label, actions);
    } else {
      sections.get(label)!.push(...actions);
    }
  }

  return sections;
}

 function extractQspActions(lines: string[], start: number, end: number): QspAction[] {
  const actions: QspAction[] = [];
  let inBlockComment = false;

  for (let i = start; i < end; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('!{') || trimmed.startsWith('!!{')) { inBlockComment = true; continue; }
    if (inBlockComment) {
      if (trimmed.endsWith('!}') || trimmed === 'end}' || trimmed === '}') inBlockComment = false;
      continue;
    }
    if (trimmed.startsWith('!!')) continue;

    const actMatch = line.match(/act\s+'((?:[^']|'')*)'(\s*\+\s*.*)?:/);
    if (!actMatch) continue;
    const indent = line.length - line.trimStart().length;
    if (indent > 0) continue;

    const label = unescapeQsp(actMatch[1]);
    const isDynamic = !!actMatch[2];

    const matchStart = line.indexOf(actMatch[0]);
    const matchEnd = matchStart + actMatch[0].length;
    const restOfLine = line.slice(matchEnd);

    let goto: [string, string] | null = null;
    let gotoDynamic = false;

    const gotoMatch = restOfLine.match(/\bgt\s+'((?:[^']|'')*)'(?:\s*\+\s*\$\w+)?(?:\s*,\s*(?:'((?:[^']|'')*)'|(\$\w+|\w+)))?/);
    if (gotoMatch) {
      goto = [unescapeQsp(gotoMatch[1]), unescapeQsp(gotoMatch[2] || '') || (gotoMatch[3] || '').replace(/^\$/, '')];
    } else if (/\bgt\s+\$|\bgt\s+[a-z_]/.test(restOfLine)) {
      gotoDynamic = true;
    }

    if (!goto && !gotoDynamic) {
      for (let j = i + 1; j < Math.min(i + 20, end); j++) {
        const nextTrimmed = lines[j].trim();
        if (nextTrimmed === 'end' || nextTrimmed.startsWith('end ')) break;
        if (nextTrimmed.startsWith('!!')) continue;
        if (/^act\s+/.test(nextTrimmed)) continue;

        const nextGoto = nextTrimmed.match(/\bgt\s+'((?:[^']|'')*)'(?:\s*\+\s*\$\w+)?(?:\s*,\s*(?:'((?:[^']|'')*)'|(\$\w+|\w+)))?/);
        if (nextGoto) {
          goto = [unescapeQsp(nextGoto[1]), unescapeQsp(nextGoto[2] || '') || (nextGoto[3] || '').replace(/^\$/, '')];
          break;
        }
        if (/\bgt\s+\$|\bgt\s+[a-z_]/.test(nextTrimmed)) {
          gotoDynamic = true;
          break;
        }
      }
    }

    actions.push({ label, isDynamic, goto, gotoDynamic, line: i + 1 });
  }

  return actions;
}

function extractTsActions(funcBody: string): TsAction[] {
  const actions: TsAction[] = [];
  const lines = funcBody.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const labelMatch = line.match(/label:\s*'((?:[^'\\]|\\.)*)'/);
    if (!labelMatch) continue;

    const label = unescapeTs(labelMatch[1]);

    let goto: [string, string] | null = null;
    let gotoDynamic = false;
    const hasHandler = /handler:\s*\(/.test(line);
    const searchLimit = hasHandler ? 30 : 8;

    for (let j = i; j < Math.min(i + searchLimit, lines.length); j++) {
      const checkLine = lines[j];

      if (j > i && /label:\s*'/.test(checkLine) && !hasHandler) break;
      if (j > i && /^\s*\]\s*\)\s*;?\s*$/.test(checkLine) && !hasHandler) break;

      const gotoMatch = checkLine.match(/goto:\s*\['((?:[^'\\]|\\.)*)'\s*,\s*'((?:[^'\\]|\\.)*)'(?:\s*,\s*'((?:[^'\\]|\\.)*)')?(?:\s*,\s*'((?:[^'\\]|\\.)*)')?\]/);
      if (gotoMatch) {
        goto = [unescapeTs(gotoMatch[1]), unescapeTs(gotoMatch[2])];
        break;
      }
      if (/\bdynamicGoto\s*\(/.test(checkLine)) {
        gotoDynamic = true;
        break;
      }
    }

    actions.push({ label, goto, gotoDynamic, line: i + 1 });
  }

  return actions;
}

function compareSectionActions(qspActions: QspAction[], tsActions: TsAction[]): ActionMismatch[] {
  const mismatches: ActionMismatch[] = [];

  const tsByLabel = new Map<string, TsAction[]>();
  for (const a of tsActions) {
    const key = a.label.toLowerCase();
    if (!tsByLabel.has(key)) tsByLabel.set(key, []);
    tsByLabel.get(key)!.push(a);
  }

  const matchedTsLabels = new Set<string>();

  for (const qa of qspActions) {
    const qaLower = qa.label.toLowerCase();

    let tsMatch = tsByLabel.get(qaLower);

    if (!tsMatch || tsMatch.length === 0) {
      for (const [key, tsList] of tsByLabel) {
        if (qa.isDynamic && key.startsWith(qaLower)) {
          tsMatch = tsList;
          break;
        }
      }
    }

    if (!tsMatch || tsMatch.length === 0) {
      mismatches.push({
        type: 'missing',
        qspLabel: qa.label,
        qspGoto: qa.goto,
        qspLine: qa.line,
      });
      continue;
    }

    let ta = tsMatch[0];
    if (qa.goto && tsMatch.length > 1) {
      const gotoMatch = tsMatch.find(t => t.goto && t.goto[0] === qa.goto![0] && t.goto[1] === qa.goto![1]);
      if (gotoMatch) ta = gotoMatch;
    }
    matchedTsLabels.add(ta.label.toLowerCase());

    if (qa.goto && !ta.gotoDynamic) {
      if (!ta.goto) {
        mismatches.push({
          type: 'goto_mismatch',
          qspLabel: qa.label,
          tsLabel: ta.label,
          qspGoto: qa.goto,
          tsGoto: null,
          qspLine: qa.line,
          tsLine: ta.line,
        });
      } else if (qa.goto[0] !== ta.goto[0] || qa.goto[1] !== ta.goto[1]) {
        mismatches.push({
          type: 'goto_mismatch',
          qspLabel: qa.label,
          tsLabel: ta.label,
          qspGoto: qa.goto,
          tsGoto: ta.goto,
          qspLine: qa.line,
          tsLine: ta.line,
        });
      }
    }
  }

  for (const ta of tsActions) {
    if (!matchedTsLabels.has(ta.label.toLowerCase())) {
      mismatches.push({
        type: 'extra',
        tsLabel: ta.label,
        tsGoto: ta.goto,
        tsLine: ta.line,
      });
    }
  }

  return mismatches;
}

function formatGoto(goto: [string, string] | null | undefined): string {
  if (!goto) return 'none';
  return goto[1] ? `${goto[0]}, ${goto[1]}` : goto[0];
}

function main() {
  const files = findLocationFiles(LOCATIONS_DIR);
  const results: AuditResult[] = [];

  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(path.resolve(__dirname, '..'), file);
    const funcBody = extractFunction(src, 'enterDefault');

    const qspFile = findQspFile(file);
    let qspHasActions = false;
    let qspHasImage = false;
    const sections: SectionResult[] = [];
    let totalMismatches = 0;

    if (qspFile) {
      const qspSrc = fs.readFileSync(qspFile, 'utf8');
      const qspScene = extractQspDefaultScene(qspSrc);
      if (qspScene) {
        const qspAnalysis = analyzeQspScene(qspScene);
        qspHasActions = qspAnalysis.hasActions;
        qspHasImage = qspAnalysis.hasImage;
      }

      const qspSections = parseQspSections(qspSrc);
      const hasSeparateFns = /function enter[A-Z]/.test(src);
      for (const [qspLabel, qspActions] of qspSections) {
        if (qspActions.length === 0) continue;
        const tsFuncName = qspLabel === '__preamble__' ? 'enterDefault' : qspLabelToTsFunc(qspLabel);
        let tsFuncBody = extractFunction(src, tsFuncName);
        if (!tsFuncBody && !hasSeparateFns) tsFuncBody = extractFunction(src, 'enter');
        const m2 = src.match(new RegExp(`function ${tsFuncName}2\\s*\\([^)]*\\)\\s*:\\s*void\\s*\\{([\\s\\S]*?)\\n\\}`));
        if (m2) tsFuncBody = (tsFuncBody || '') + m2[1];
        const tsActions = tsFuncBody ? extractTsActions(tsFuncBody) : [];

        const mismatches = compareSectionActions(qspActions, tsActions);
        totalMismatches += mismatches.length;

        sections.push({
          qspLabel: qspLabel === '__preamble__' ? '(preamble)' : qspLabel,
          tsFuncName,
          qspActions,
          tsActions,
          mismatches,
        });
      }
    }

    if (!funcBody) {
      results.push({
        file: relPath,
        hasImage: false,
        hasUnconditionalActions: false,
        hasAnyActions: false,
        hasDefaultScene: false,
        actionCount: 0,
        unconditionalActionCount: 0,
        qspHasActions,
        qspHasImage,
        qspFile: qspFile ? path.relative(path.resolve(__dirname, '..'), qspFile) : null,
        sections,
        totalMismatches,
      });
      continue;
    }

    const analysis = analyzeFunction(funcBody);
    results.push({
      file: relPath,
      hasImage: analysis.hasImage,
      hasUnconditionalActions: analysis.hasUnconditionalActions,
      hasAnyActions: analysis.hasAnyActions,
      hasDefaultScene: true,
      actionCount: analysis.actionCount,
      unconditionalActionCount: analysis.unconditionalActionCount,
      qspHasActions,
      qspHasImage,
      qspFile: qspFile ? path.relative(path.resolve(__dirname, '..'), qspFile) : null,
      sections,
      totalMismatches,
    });
  }

  const total = results.length;
  const noDefault = results.filter(r => !r.hasDefaultScene);
  const tsMissingActions = results.filter(r => r.hasDefaultScene && r.qspHasActions && r.actionCount === 0);
  const tsMissingImage = results.filter(r => r.hasDefaultScene && r.qspHasImage && !r.hasImage);
  const tsMissingBoth = results.filter(r => r.hasDefaultScene && r.qspHasActions && r.qspHasImage && r.actionCount === 0 && !r.hasImage);

  let totalMissing = 0;
  let totalExtra = 0;
  let totalGotoMismatch = 0;
  for (const r of results) {
    for (const sec of r.sections) {
      for (const m of sec.mismatches) {
        if (m.type === 'missing') totalMissing++;
        else if (m.type === 'extra') totalExtra++;
        else if (m.type === 'goto_mismatch') totalGotoMismatch++;
      }
    }
  }

  console.log('=== LOCATION AUDIT (QSP cross-reference) ===\n');
  console.log(`Total locations: ${total}`);
  console.log(`With default scene: ${total - noDefault.length}`);
  console.log(`No default scene: ${noDefault.length}`);
  console.log('');
  console.log(`QSP has actions but TS has zero actions: ${tsMissingActions.length}`);
  console.log(`QSP has image but TS missing image: ${tsMissingImage.length}`);
  console.log(`QSP has both but TS missing both: ${tsMissingBoth.length}`);
  console.log('');
  console.log('=== ACTION CROSS-REFERENCE ===');
  console.log(`Missing actions (QSP has, TS missing): ${totalMissing}`);
  console.log(`Extra actions (TS has, QSP missing): ${totalExtra}`);
  console.log(`Goto mismatches: ${totalGotoMismatch}`);

  if (tsMissingBoth.length > 0) {
    console.log(`\n--- MISSING BOTH (QSP has, TS doesn't) (${tsMissingBoth.length}) ---`);
    for (const r of tsMissingBoth) console.log(`  ${r.file}`);
  }

  const actionsOnly = tsMissingActions.filter(r => !tsMissingBoth.includes(r));
  if (actionsOnly.length > 0) {
    console.log(`\n--- MISSING ACTIONS ONLY (${actionsOnly.length}) ---`);
    for (const r of actionsOnly) console.log(`  ${r.file} [image: ${r.hasImage ? 'yes' : 'no'}]`);
  }

  const imageOnly = tsMissingImage.filter(r => !tsMissingBoth.includes(r));
  if (imageOnly.length > 0) {
    console.log(`\n--- MISSING IMAGE ONLY (${imageOnly.length}) ---`);
    for (const r of imageOnly) console.log(`  ${r.file} [TS actions: ${r.actionCount}]`);
  }

  const filesWithMismatches = results.filter(r => r.totalMismatches > 0);
  if (filesWithMismatches.length > 0) {
    console.log(`\n--- ACTION MISMATCHES (${filesWithMismatches.length} files, ${totalMissing + totalExtra + totalGotoMismatch} total) ---`);
    for (const r of filesWithMismatches) {
      console.log(`\n${r.file}:`);
      for (const sec of r.sections) {
        if (sec.mismatches.length === 0) continue;
        console.log(`  [${sec.qspLabel} → ${sec.tsFuncName}]`);
        for (const m of sec.mismatches) {
          if (m.type === 'missing') {
            const gotoStr = m.qspGoto ? ` → ${formatGoto(m.qspGoto)}` : '';
            console.log(`    MISSING: '${m.qspLabel}'${gotoStr} (QSP:${m.qspLine})`);
          } else if (m.type === 'extra') {
            const gotoStr = m.tsGoto ? ` → ${formatGoto(m.tsGoto)}` : '';
            console.log(`    EXTRA:   '${m.tsLabel}'${gotoStr} (TS:${m.tsLine})`);
          } else if (m.type === 'goto_mismatch') {
            console.log(`    GOTO:    '${m.qspLabel}' QSP→${formatGoto(m.qspGoto)} TS→${formatGoto(m.tsGoto)}`);
          }
        }
      }
    }
  }
}

main();
