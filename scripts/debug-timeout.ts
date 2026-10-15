import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { setTimeout as sleep } from 'timers/promises';
import { readFileSync } from 'fs';

const PORT = 4175;
const URL = `http://localhost:${PORT}`;

const auditSrc = readFileSync('/home/depressedtsukasa/Documents/GL/scripts/render-interaction-audit.ts', 'utf-8');
const tsMatch = auditSrc.match(/const TEST_STATE: Record<string, unknown> = \{[\s\S]*?\n\};/);
if (!tsMatch) throw new Error('TEST_STATE not found');
let testStateStr = tsMatch[0].replace('const TEST_STATE: Record<string, unknown> = ', '').replace(/;\s*$/, '');
testStateStr = testStateStr.replace(/ as (string\[\]|number\[\]|Record<string, (string|number)>)/g, '');

async function main() {
  const vite = spawn('npx', ['vite', '--port', String(PORT), '--strictPort'], {
    cwd: '/home/depressedtsukasa/Documents/GL',
    stdio: 'pipe',
  });
  vite.stdout?.on('data', () => {});
  vite.stderr?.on('data', () => {});
  await sleep(6000);

  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/google-chrome', args: ['--disable-gpu', '--disable-gpu-compositing', '--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  page.setDefaultTimeout(60000);
  page.on('console', (msg) => {
    const t = msg.text();
    if (t.includes('[DBG]')) console.log(t);
  });
  page.on('pageerror', (err) => console.log('[PAGEERR]', err.message));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await sleep(200);
  await page.locator('button', { hasText: /^Start$/ }).click();
  await sleep(200);
  await page.locator('button', { hasText: 'Quick Start' }).click();
  await sleep(1500);

  // Replicate audit's exact page.evaluate pattern
  const loc = 'portnoi';
  const sub = '';
  const extraArg = '';

  const t0 = Date.now();
  try {
    await page.evaluate(([l, s, tsStr, ea]) => {
      const store = (window as any).__gameStore;
      const st = store.getState();
      const TEST_STATE = eval(`(${tsStr})`);
      for (const [k, v] of Object.entries(TEST_STATE)) (st as any)[k] = v;
      const origRandom = Math.random;
      Math.random = () => 0;
      store.getState().doGoto(l, s, ea || undefined);
      Math.random = origRandom;
    }, [loc, sub, testStateStr, extraArg]);
    console.log(`OK: took ${Date.now() - t0}ms`);
  } catch (e: any) {
    console.log(`FAIL: ${e.message} (took ${Date.now() - t0}ms)`);
  }

  await browser.close();
  vite.kill();
}

main().catch((e) => { console.error(e); process.exit(1); });
