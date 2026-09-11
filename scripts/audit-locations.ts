import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCATIONS_DIR = path.resolve(__dirname, '../src/locations');

interface AuditResult {
  file: string;
  hasImage: boolean;
  hasUnconditionalActions: boolean;
  hasAnyActions: boolean;
  hasDefaultScene: boolean;
  actionCount: number;
  unconditionalActionCount: number;
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

function main() {
  const files = findLocationFiles(LOCATIONS_DIR);
  const results: AuditResult[] = [];

  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(path.resolve(__dirname, '..'), file);
    const funcBody = extractFunction(src, 'enterDefault');

    if (!funcBody) {
      results.push({
        file: relPath,
        hasImage: false,
        hasUnconditionalActions: false,
        hasAnyActions: false,
        hasDefaultScene: false,
        actionCount: 0,
        unconditionalActionCount: 0,
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
    });
  }

  const total = results.length;
  const noDefault = results.filter(r => !r.hasDefaultScene);
  const noImage = results.filter(r => r.hasDefaultScene && !r.hasImage);
  const noUncondActions = results.filter(r => r.hasDefaultScene && !r.hasUnconditionalActions);
  const noAnyActions = results.filter(r => r.hasDefaultScene && !r.hasAnyActions);
  const bothMissing = results.filter(r => r.hasDefaultScene && !r.hasImage && !r.hasUnconditionalActions);

  console.log('=== LOCATION AUDIT ===\n');
  console.log(`Total locations: ${total}`);
  console.log(`With default scene: ${total - noDefault.length}`);
  console.log(`No default scene: ${noDefault.length}`);
  console.log(`With image: ${results.filter(r => r.hasImage).length}`);
  console.log(`Without image: ${noImage.length}`);
  console.log(`With unconditional actions: ${results.filter(r => r.hasUnconditionalActions).length}`);
  console.log(`Without unconditional actions: ${noUncondActions.length}`);
  console.log(`Without any actions: ${noAnyActions.length}`);
  console.log(`Missing both image + unconditional actions: ${bothMissing.length}`);

  if (noDefault.length > 0) {
    console.log(`\n--- No default scene (${noDefault.length}) ---`);
    for (const r of noDefault) console.log(`  ${r.file}`);
  }

  if (noImage.length > 0) {
    console.log(`\n--- No image (${noImage.length}) ---`);
    for (const r of noImage) console.log(`  ${r.file} [actions: ${r.actionCount}]`);
  }

  if (noUncondActions.length > 0) {
    console.log(`\n--- No unconditional actions (${noUncondActions.length}) ---`);
    for (const r of noUncondActions) console.log(`  ${r.file} [any actions: ${r.actionCount}, image: ${r.hasImage ? 'yes' : 'no'}]`);
  }

  if (bothMissing.length > 0) {
    console.log(`\n--- Missing both image + unconditional actions (${bothMissing.length}) ---`);
    for (const r of bothMissing) console.log(`  ${r.file}`);
  }
}

main();
