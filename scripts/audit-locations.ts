import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCATIONS_DIR = path.resolve(__dirname, '../src/locations');
const QSP_DIR = path.resolve(__dirname, '../GL QSP/locations');

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
    if (qspFile) {
      const qspSrc = fs.readFileSync(qspFile, 'utf8');
      const qspScene = extractQspDefaultScene(qspSrc);
      if (qspScene) {
        const qspAnalysis = analyzeQspScene(qspScene);
        qspHasActions = qspAnalysis.hasActions;
        qspHasImage = qspAnalysis.hasImage;
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
    });
  }

  const total = results.length;
  const noDefault = results.filter(r => !r.hasDefaultScene);
  const tsMissingActions = results.filter(r => r.hasDefaultScene && r.qspHasActions && r.actionCount === 0);
  const tsMissingImage = results.filter(r => r.hasDefaultScene && r.qspHasImage && !r.hasImage);
  const tsMissingBoth = results.filter(r => r.hasDefaultScene && r.qspHasActions && r.qspHasImage && r.actionCount === 0 && !r.hasImage);

  console.log('=== LOCATION AUDIT (QSP cross-reference) ===\n');
  console.log(`Total locations: ${total}`);
  console.log(`With default scene: ${total - noDefault.length}`);
  console.log(`No default scene: ${noDefault.length}`);
  console.log('');
  console.log(`QSP has actions but TS has zero actions: ${tsMissingActions.length}`);
  console.log(`QSP has image but TS missing image: ${tsMissingImage.length}`);
  console.log(`QSP has both but TS missing both: ${tsMissingBoth.length}`);

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
}

main();
