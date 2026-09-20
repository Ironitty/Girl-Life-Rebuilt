import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { parseQsp } from './parser';
import { generateTs } from './generator';
import { classify, confidence, detailedConfidence } from './classify';
import type { ConfidenceReport } from './classify';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');
const LOCATIONS_DIR = join(ROOT, 'GL QSP/locations');
let OUTPUT_DIR = join(ROOT, 'src/locations');

interface TranspileResult {
  name: string;
  cls: string;
  confidence: number;
  todoCount: number;
  actionCount: number;
  targetCount: number;
  lineCount: number;
  output: string;
  status: 'AUTO-ACCEPT' | 'AI REVIEW' | 'MANUAL';
  reasons: string[];
  report: ConfidenceReport;
}

function resolveCaseInsensitive(path: string): string | null {
  const dir = dirname(path);
  const base = path.split('/').pop() || '';
  if (!existsSync(dir)) return null;
  let entries: string[];
  try { entries = readdirSync(dir); } catch { return null; }
  const match = entries.find(e => e.toLowerCase() === base.toLowerCase());
  return match ? join(dir, match).split('\\').join('/') : null;
}

function fixCaseInGeneratedFiles(dir: string): number {
  let fixed = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      fixed += fixCaseInGeneratedFiles(full);
    } else if (entry.name.endsWith('.ts')) {
      let content = readFileSync(full, 'utf-8');
      const orig = content;
      content = content.replace(/scene\.img\('([^']+)'\)/g, (_m: string, p: string) => {
        if (p.startsWith('images/') && !existsSync(join(ROOT, p))) {
          const resolved = resolveCaseInsensitive(join(ROOT, p));
          if (resolved) {
            const rel = resolved.split(ROOT + '/').join('');
            if (rel !== p) { fixed++; return `scene.img('${rel}')`; }
          }
        }
        return _m;
      });
      if (content !== orig) writeFileSync(full, content);
    }
  }
  return fixed;
}

function main() {
  const args = process.argv.slice(2);
  const mode = args[0] || 'scan';
  const outDirIdx = args.indexOf('--output-dir');
  if (outDirIdx !== -1 && args[outDirIdx + 1]) {
    const p = args[outDirIdx + 1];
    OUTPUT_DIR = p.startsWith('/') ? p : join(ROOT, p);
  }
  const filterArg = args.find((a, i) => i > 0 && !a.startsWith('--') && i !== outDirIdx + 1);
  const filter = filterArg || '';
  const dryRun = args.includes('--dry-run');
  const outputOnly = args.includes('--output');
  const allFlag = args.includes('--all');
  const detailed = args.includes('--detailed');

  const files = readdirSync(LOCATIONS_DIR).filter(f => f.endsWith('.qsps'));
  const knownLocations = new Set<string>(files.map((f: string) => f.replace('.qsps', '')));
  console.log(`Found ${files.length} .qsps files`);

  const results: TranspileResult[] = [];

  for (const file of files) {
    const name = file.replace('.qsps', '');
    if (filter && !name.includes(filter)) continue;

    const filePath = join(LOCATIONS_DIR, file);
    const content = readFileSync(filePath, 'utf-8');
    const loc = parseQsp(content, file);
    const cls = classify(loc);
    const conf = confidence(loc, cls);

    let gen: ReturnType<typeof generateTs>;
    try {
      gen = generateTs(loc);
    } catch {
      gen = { code: '', todoCount: 0, unsupportedConstructs: [], actionCount: 0, targetCount: 0, stateWrites: [], stateReads: [], gsCalls: [], dynamicText: 0, fallbackCount: 0 };
    }

    const report = detailedConfidence(loc, cls, gen, knownLocations);
    const status = report.status;

    results.push({
      name,
      cls: cls.cls,
      confidence: report.score,
      todoCount: gen.todoCount,
      actionCount: gen.actionCount,
      targetCount: gen.targetCount,
      lineCount: loc.lineCount,
      output: gen.code,
      status,
      reasons: cls.reasons,
      report,
    });

    if (outputOnly) {
      const region = getRegion(name);
      const dir = join(OUTPUT_DIR, region);
      mkdirSync(dir, { recursive: true });
      const outPath = join(dir, `${name}.ts`);
      if (!existsSync(outPath) || !dryRun) {
        writeFileSync(outPath, gen.code + '\n');
        console.log(`  wrote ${outPath}`);
      }
    }
  }

  if (mode === 'scan' || mode === 'report') {
    printReport(results, detailed);
  }

  if (mode === 'transpile') {
    const auto = results.filter(r => r.status === 'AUTO-ACCEPT');
    const review = results.filter(r => r.status === 'AI REVIEW');
    const manual = results.filter(r => r.status === 'MANUAL');
    console.log(`\n=== Transpile Summary ===`);
    console.log(`AUTO-ACCEPT: ${auto.length}`);
    console.log(`AI REVIEW:   ${review.length}`);
    console.log(`MANUAL:      ${manual.length}`);
    console.log(`TOTAL:       ${results.length}`);

    if (!dryRun) {
      for (const r of results) {
        const region = getRegion(r.name);
        const dir = join(OUTPUT_DIR, region);
        mkdirSync(dir, { recursive: true });
        const outPath = join(dir, `${r.name}.ts`);
        if (r.status !== 'MANUAL' || allFlag) {
          writeFileSync(outPath, r.output + '\n');
        }
      }
      console.log(`\nWrote ${results.filter(r => r.status !== 'MANUAL' || allFlag).length} files`);
      const caseFixed = fixCaseInGeneratedFiles(OUTPUT_DIR);
      if (caseFixed > 0) console.log(`Fixed ${caseFixed} case-sensitive image paths`);
    }
  }

  if (mode === 'single' && args[1]) {
    const r = results.find(x => x.name === args[1]);
    if (r) {
      console.log(`\n=== ${r.name} ===`);
      console.log(`conversion confidence: ${r.report.score}%`);
      console.log(`unsupported constructs: ${r.report.unsupportedConstructs}`);
      console.log(`dynamic variable access: ${r.report.dynamicAccess}`);
      console.log(`invokes: ${r.report.invokes}`);
      console.log(`unresolved targets: ${r.report.unresolvedTargets}`);
      if (r.report.penalties.length > 0) {
        console.log(`penalties: ${r.report.penalties.join(', ')}`);
      }
      console.log(`\n${r.status === 'AUTO-ACCEPT' ? 'AUTO-ACCEPT' : r.status === 'AI REVIEW' ? 'AI REVIEW REQUIRED' : 'MANUAL PORT REQUIRED'}`);
      console.log('\n=== Generated TS ===');
      console.log(r.output);
      console.log('\n=== TODOs ===');
      console.log(r.todoCount === 0 ? 'None' : `${r.todoCount} unsupported constructs`);
    }
  }
}

function printReport(results: TranspileResult[], detailed: boolean) {
  const byClass: Record<string, TranspileResult[]> = { A: [], B: [], C: [], D: [] };
  for (const r of results) {
    if (byClass[r.cls]) byClass[r.cls].push(r);
  }

  console.log(`\n=== Complexity Classification ===`);
  console.log(`Class A (trivial):    ${byClass.A.length}`);
  console.log(`Class B (moderate):   ${byClass.B.length}`);
  console.log(`Class C (complex):    ${byClass.C.length}`);
  console.log(`Class D (system):     ${byClass.D.length}`);
  console.log(`Total:                ${results.length}`);

  const auto = results.filter(r => r.status === 'AUTO-ACCEPT').length;
  const review = results.filter(r => r.status === 'AI REVIEW').length;
  const manual = results.filter(r => r.status === 'MANUAL').length;
  console.log(`\n=== Conversion Status ===`);
  console.log(`AUTO-ACCEPT: ${auto}`);
  console.log(`AI REVIEW:   ${review}`);
  console.log(`MANUAL:      ${manual}`);

  if (detailed) {
    console.log(`\n=== Detailed Per-Location Report ===`);
    for (const r of results) {
      console.log(`\n${r.name}`);
      console.log(`  conversion confidence: ${r.report.score}%`);
      console.log(`  unsupported constructs: ${r.report.unsupportedConstructs}`);
      console.log(`  dynamic variable access: ${r.report.dynamicAccess}`);
      console.log(`  invokes: ${r.report.invokes}`);
      console.log(`  unresolved targets: ${r.report.unresolvedTargets}`);
      if (r.report.penalties.length > 0) {
        console.log(`  penalties: ${r.report.penalties.join(', ')}`);
      }
      console.log(`  ${r.status === 'AUTO-ACCEPT' ? 'AUTO-ACCEPT' : r.status === 'AI REVIEW' ? 'AI REVIEW REQUIRED' : 'MANUAL PORT REQUIRED'}`);
    }
  } else {
    if (results.length > 0) {
      console.log(`\n=== Sample: Class A (top 10) ===`);
      for (const r of byClass.A.slice(0, 10)) {
        console.log(`  ${r.name} (${r.lineCount}L, ${r.actionCount} acts, conf=${r.report.score}%)`);
      }
      console.log(`\n=== Sample: Class D (top 10) ===`);
      for (const r of byClass.D.slice(0, 10)) {
        console.log(`  ${r.name} (${r.lineCount}L, ${r.reasons.join(', ')})`);
      }
    }
  }
}

function getRegion(name: string): string {
  if (name.startsWith('pav_') || name.includes('pavlovsk')) return 'pavlovsk';
  if (name.startsWith('pushkin_') || name.includes('pushkin')) return 'pushkin';
  if (name.startsWith('city_') || name.includes('spb') || name.includes('st_petersburg')) return 'city';
  if (name.startsWith('gad_') || name.includes('gadukino')) return 'gadukino';
  if (name.startsWith('eto_')) return 'eto';
  if (name.startsWith('kg') || name.startsWith('KG')) return 'kgd';
  return 'other';
}

main();
