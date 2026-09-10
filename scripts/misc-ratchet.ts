import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src');
const THRESHOLD = parseInt(process.argv[2] ?? '999');

const keys = new Set<string>();

function walk(dir: string) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.ts') || full.endsWith('.tsx')) {
      const content = readFileSync(full, 'utf-8');
      const re = /s\.misc\['([^']+)'\]/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(content)) !== null) keys.add(m[1]);
    }
  }
}

walk(SRC);
console.log(`misc keys: ${keys.size} (threshold: ${THRESHOLD})`);
if (keys.size > THRESHOLD) {
  console.error(`FAIL: misc keys ${keys.size} > threshold ${THRESHOLD}`);
  process.exit(1);
}
console.log('PASS');
