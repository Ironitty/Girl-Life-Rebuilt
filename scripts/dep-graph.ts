import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = 'GL QSP/locations';
const files = readdirSync(dir).filter(f => f.endsWith('.qsps'));

const moduleDeps = new Map<string, Set<string>>();
const funcDeps = new Map<string, Set<string>>();

for (const file of files) {
  const loc = file.replace('.qsps', '');
  const content = readFileSync(join(dir, file), 'utf-8');
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    const gsMatch = trimmed.match(/gs\s+'([^']+)'\s*(?:,\s*'([^']*)')?/);
    if (gsMatch) {
      const mod = gsMatch[1];
      const fn = gsMatch[2] || '';
      if (!moduleDeps.has(mod)) moduleDeps.set(mod, new Set());
      moduleDeps.get(mod)!.add(loc);
      if (fn) {
        const key = mod + '.' + fn;
        if (!funcDeps.has(key)) funcDeps.set(key, new Set());
        funcDeps.get(key)!.add(loc);
      }
    }
  }
}

const sorted = [...moduleDeps.entries()].sort((a, b) => b[1].size - a[1].size);

console.log('=== MODULE DEPENDENCY GRAPH (by inbound count) ===\n');
console.log('Module                        Inbound  Top functions');
console.log('---'.repeat(50));
for (const [mod, locs] of sorted.slice(0, 40)) {
  const funcs = [...funcDeps.entries()]
    .filter(([k]) => k.startsWith(mod + '.'))
    .sort((a, b) => b[1].size - a[1].size)
    .slice(0, 3)
    .map(([k, l]) => k.split('.').slice(1).join('.') + '(' + l.size + ')')
    .join(' ');
  console.log(mod.padEnd(28) + String(locs.size).padStart(6) + '  ' + funcs);
}

console.log('\nTotal unique modules: ' + moduleDeps.size);
console.log('Total unique module.func: ' + funcDeps.size);

console.log('\n=== TOP 30 module.func (by inbound) ===');
const sortedFuncs = [...funcDeps.entries()].sort((a, b) => b[1].size - a[1].size);
for (const [key, locs] of sortedFuncs.slice(0, 30)) {
  console.log(key.padEnd(45) + String(locs.size).padStart(5));
}
