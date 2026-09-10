import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOCATIONS_DIR = path.resolve(__dirname, '../src/locations');

interface LocationReport {
  name: string;
  file: string;
  reads: Set<string>;
  writes: Set<string>;
  navigation: Set<string>;
  miscAccess: Set<string>;
}

const reports: Map<string, LocationReport> = new Map();

function getFileName(filePath: string): string {
  return path.basename(filePath, '.ts');
}

function analyzeFile(filePath: string): void {
  const source = fs.readFileSync(filePath, 'utf-8');
  const sf = ts.createSourceFile(filePath, source, ts.ScriptTarget.ES2020, true);

  const report: LocationReport = {
    name: getFileName(filePath),
    file: filePath,
    reads: new Set(),
    writes: new Set(),
    navigation: new Set(),
    miscAccess: new Set(),
  };

  function visit(node: ts.Node): void {
    if (ts.isPropertyAccessExpression(node)) {
      const obj = node.expression;
      if (ts.isIdentifier(obj) && obj.text === 's') {
        const prop = node.name.text;
        const parent = node.parent;

        if (ts.isBinaryExpression(parent) && parent.left === node) {
          report.writes.add(prop);
        } else {
          report.reads.add(prop);
        }

        if (prop === 'misc' && ts.isElementAccessExpression(node.parent)) {
          const arg = node.parent.argumentExpression;
          if (ts.isStringLiteral(arg)) {
            report.miscAccess.add(arg.text);
          }
        }
      }
    }

    if (ts.isElementAccessExpression(node)) {
      const obj = node.expression;
      if (ts.isPropertyAccessExpression(obj) && ts.isIdentifier(obj.expression) && obj.expression.text === 's') {
        const propName = obj.name.text;
        const arg = node.argumentExpression;
        if (ts.isStringLiteral(arg)) {
          if (propName === 'misc') {
            report.miscAccess.add(arg.text);
          }
        }
      }
    }

    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const parent = node.parent;
      if (ts.isArrayLiteralExpression(parent) && parent.parent) {
        const gp = parent.parent;
        if (ts.isPropertyAssignment(gp) && ts.isIdentifier(gp.name)) {
          const propName = gp.name.text;
          if (propName === 'goto' || propName === 'call' || propName === 'invoke') {
            const arr = parent.elements;
            if (arr.length >= 1 && ts.isStringLiteral(arr[0])) {
              report.navigation.add(arr[0].text);
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sf);

  const existing = reports.get(report.name);
  if (existing) {
    for (const r of report.reads) existing.reads.add(r);
    for (const w of report.writes) existing.writes.add(w);
    for (const n of report.navigation) existing.navigation.add(n);
    for (const m of report.miscAccess) existing.miscAccess.add(m);
  } else {
    reports.set(report.name, report);
  }
}

function walkDir(dir: string): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts') && entry.name !== 'auto-register.ts') {
      analyzeFile(full);
    }
  }
}

walkDir(LOCATIONS_DIR);

const sorted = [...reports.values()].sort((a, b) => a.name.localeCompare(b.name));

let output = '# State Access Report\n\n';
output += `Generated: ${new Date().toISOString()}\n`;
output += `Locations analyzed: ${sorted.length}\n\n`;

const allReads = new Map<string, Set<string>>();
const allWrites = new Map<string, Set<string>>();
const allMisc = new Map<string, Set<string>>();

for (const r of sorted) {
  for (const field of r.reads) {
    if (!allReads.has(field)) allReads.set(field, new Set());
    allReads.get(field)!.add(r.name);
  }
  for (const field of r.writes) {
    if (!allWrites.has(field)) allWrites.set(field, new Set());
    allWrites.get(field)!.add(r.name);
  }
  for (const m of r.miscAccess) {
    if (!allMisc.has(m)) allMisc.set(m, new Set());
    allMisc.get(m)!.add(r.name);
  }
}

output += '## Per-Location Detail\n\n';
for (const r of sorted) {
  output += `### ${r.name}\n`;
  output += `File: ${path.relative(LOCATIONS_DIR, r.file)}\n\n`;
  if (r.reads.size > 0) {
    output += `**Reads:** ${[...r.reads].sort().join(', ')}\n\n`;
  }
  if (r.writes.size > 0) {
    output += `**Writes:** ${[...r.writes].sort().join(', ')}\n\n`;
  }
  if (r.navigation.size > 0) {
    output += `**Navigation:** ${[...r.navigation].sort().join(', ')}\n\n`;
  }
  if (r.miscAccess.size > 0) {
    output += `**Misc keys:** ${[...r.miscAccess].sort().join(', ')}\n\n`;
  }
}

output += '## Field Usage Summary\n\n';
output += '### Most Read Fields\n\n';
const readSorted = [...allReads.entries()].sort((a, b) => b[1].size - a[1].size).slice(0, 30);
for (const [field, locs] of readSorted) {
  output += `- \`${field}\`: ${locs.size} locations\n`;
}

output += '\n### Most Written Fields\n\n';
const writeSorted = [...allWrites.entries()].sort((a, b) => b[1].size - a[1].size).slice(0, 30);
for (const [field, locs] of writeSorted) {
  output += `- \`${field}\`: ${locs.size} locations\n`;
}

output += '\n### Misc Key Usage\n\n';
const miscSorted = [...allMisc.entries()].sort((a, b) => b[1].size - a[1].size);
for (const [key, locs] of miscSorted) {
  output += `- \`${key}\`: ${locs.size} locations${locs.size > 5 ? ' **PROMOTE**' : ''}\n`;
}

const outPath = path.resolve(__dirname, '../state-access-report.md');
fs.writeFileSync(outPath, output);
console.log(`Report written to ${outPath}`);
console.log(`Analyzed ${sorted.length} locations.`);

const promoteCount = miscSorted.filter(([, locs]) => locs.size > 5).length;
if (promoteCount > 0) {
  console.log(`${promoteCount} misc keys used in >5 locations (candidates for promotion).`);
}
